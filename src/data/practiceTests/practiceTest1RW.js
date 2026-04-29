// Practice Test 1 — SAT Reading & Writing (R&W)
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

export const practiceTest1RW = {
  id: "practice-test-1-rw",
  title: "Practice Test 1 — Reading & Writing",
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
  passage: "When the geologist Marie Tharp completed her hand-drawn map of the Atlantic Ocean floor in 1957, many of her colleagues dismissed the central rift she had carefully documented. Tharp herself was confident that the feature was real, having checked each sonar measurement three separate times before committing the line to paper.",
  question: "As used in the text, what does the word \"committing\" most nearly mean?",
  choices: [
    { id: "A", text: "promising" },
    { id: "B", text: "transferring" },
    { id: "C", text: "delegating" },
    { id: "D", text: "confining" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context**\n\n**Choice B is correct.**\n\nThe sentence describes Tharp checking her data and then \"committing the line to paper\" — that is, *transferring* the line onto the paper map. \"Committing\" here means putting something in a fixed form on a surface.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"promising\" is a common meaning of \"committing\" but doesn't fit the action of drawing a line on paper.\n* Choice C: \"delegating\" means handing a task to someone else — the opposite of what Tharp did.\n* Choice D: \"confining\" suggests restricting or limiting, which doesn't match the context of recording a measurement."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "In the late 1930s, the conductor Antonia Brico struggled to find permanent work with major US orchestras despite glowing reviews from her guest engagements in Europe. Critics often praised her interpretations as ________; she was, one reviewer wrote, capable of drawing precision and warmth from the same downbeat.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "harsh" },
    { id: "B", text: "nuanced" },
    { id: "C", text: "predictable" },
    { id: "D", text: "delayed" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon signals an explanation of the missing word. Brico drew \"precision and warmth from the same downbeat\" — two qualities at once. \"Nuanced\" means subtle and capable of fine distinctions, which matches drawing two contrasting qualities from a single gesture.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"harsh\" contradicts the praise of \"warmth.\"\n* Choice C: \"predictable\" wouldn't earn glowing reviews.\n* Choice D: \"delayed\" describes timing, not the quality of an interpretation."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The botanist Rachel Lowe insists that the popular image of the bristlecone pine as a survivor in a dead landscape is misleading. Her recent work shows that even on the high White Mountains slopes, the trees ________ a slow but steady community of lichens, mosses, and small invertebrates that depend on the shade of the gnarled trunks.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "displace" },
    { id: "B", text: "outlast" },
    { id: "C", text: "sustain" },
    { id: "D", text: "outpace" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nLowe's argument is that the trees aren't alone — they support a community of organisms \"that depend on\" them. \"Sustain\" means to keep alive or supported, which matches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignore\" contradicts the idea that organisms *depend on* the trees.\n* Choice B: \"outlast\" is what the popular image already suggests; the text is correcting that picture.\n* Choice D: \"compete with\" suggests rivalry, but the lichens and mosses don't compete with the pines — they live alongside them."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "In a 2019 study of urban traffic patterns, transportation researcher Aditi Rao examined a paradox that has frustrated city planners for decades: when a new freeway lane is added to relieve congestion, traffic on that route often becomes *worse* within a few years. Rao argues that the cause is not poor design but a phenomenon she calls \"latent demand.\" __Drivers who had previously avoided a congested route — by working from home, taking transit, or driving at off-peak hours — return as soon as the road appears faster, eventually re-creating the original jam.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates the researcher's claim." },
    { id: "B", text: "It explains the mechanism the researcher uses to account for the paradox introduced earlier." },
    { id: "C", text: "It contrasts two competing theories without endorsing either one." },
    { id: "D", text: "It questions whether the paradox is genuine or merely apparent." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first sentence raises a paradox (adding lanes makes traffic worse). The second sentence names Rao's *cause* (\"latent demand\"). The underlined third sentence then *explains how* latent demand works — drivers who had avoided the route return when it speeds up. That's a mechanism for the paradox.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the sentence supports Rao, not against her.\n* Choice C: only one theory (Rao's) is presented; there's no contrast.\n* Choice D: the passage accepts the paradox; it doesn't question it."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Lara Esposito's 2019 short story \"Closing.\" Mira, a longtime librarian, is locking up at the end of the day.\n\nMira locked the front doors and turned off the brass lamps one by one, the way she had every Tuesday for nine years. The reading room emptied of light in pieces — first the long oak table, then the leather chairs by the windows, then the little nook where her grandmother used to nap on Sundays. __She lingered there a moment, her hand still on the switch, and listened to the old building settle.__ It was, she sometimes thought, an old comfort.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior reflection." },
    { id: "B", text: "It establishes a contrast between the public reading room and Mira's private memory of the building." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Mira is about to leave the library for the last time." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Mira's *actions* (locking doors, turning off lamps). The underlined sentence shifts to her standing still, listening, and the next sentence is *what she thinks* (\"It was... the only quiet she still trusted\"). The underlined sentence is the pivot from doing to reflecting.\n\n**Why the wrong answers are tempting:**\n* Choice B: nothing in the passage suggests a secret.\n* Choice C: the tone stays calm and reflective throughout.\n* Choice D: no new character is introduced; the perspective stays Mira's."
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
      text: "Recent enthusiasm for \"15-minute cities\" — neighborhoods designed so that essential services are within a short walk — has been propelled by transportation researchers who emphasize the climate and health benefits of reduced car dependency. The model promises shorter commutes, lower emissions, and stronger local social ties."
    },
    {
      label: "Text 2",
      text: "Urban historian Léa Caron is sympathetic to the goals of the 15-minute city movement but cautions that \"compactness\" alone is not the same as livability. Her studies of postwar Parisian arrondissements show that walkable density without inclusive zoning rules tends to produce uniform high-rent districts. Without policy guardrails, she argues, the model risks recreating exactly the residential sorting it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Caron (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the climate and health benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving them depends on policy choices the researchers do not address." },
    { id: "C", text: "By arguing that 15-minute cities are technically impossible to build at scale." },
    { id: "D", text: "By insisting that the model has already been disproven by the postwar Parisian record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Caron is \"sympathetic to the goals\" — so she agrees with the benefits in spirit. But she adds a *condition*: without policy guardrails, the model risks bad outcomes. That is exactly choice B: acknowledge benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: Caron doesn't reject the benefits; she's sympathetic to the goals.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*, not a proof."
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
      text: "The novelist Theodora Hines, in a 1962 lecture on her craft, argued that the strongest endings are those the reader does not see coming but, once read, feels were inevitable. The trick, she said, is to plant the inevitability quietly — in a gesture, a phrase, or a piece of weather — so that recognition arrives only on the final page."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Hines's third novel, the critic Devon Park notes that several of Hines's contemporary readers complained that the closing chapter felt arbitrary. Park argues that those complaints reveal a generational reading habit: critics in the 1960s were trained to expect plot mechanics that announced themselves, and Hines's quieter foreshadowing read to them as no foreshadowing at all."
    }
  ],
  question: "Based on the texts, how would Park (Text 2) most likely characterize the 1960s critics' complaints?",
  choices: [
    { id: "A", text: "a flaw in Hines's craft that the critics correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the critics' expectations rather than in the novel itself." },
    { id: "C", text: "a deliberate provocation by Hines aimed at her contemporaries." },
    { id: "D", text: "a breakdown in communication between editors and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nPark argues the critics' complaints \"reveal a generational reading habit\" — that is, the *critics* were trained to look for loud foreshadowing, so Hines's quieter version registered as none at all. The flaw is in the critics' habits, not in Hines's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Park is *defending* Hines, not validating the critics.\n* Choice C: Park doesn't claim Hines was provoking anyone — only that her quietness was misread.\n* Choice D: there's no editor/reviewer communication issue in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, octopus arms do not simply receive instructions from a central brain. Each arm contains a dense cluster of neurons that can coordinate fine motions — gripping a shell, threading a narrow gap — without waiting for top-down commands. Recent experiments at the University of Naples have shown that severed arms (in tissue studies) can still respond reflexively to chemical cues for several minutes, suggesting an unusually distributed nervous system.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Octopus arms move only after receiving instructions from a central brain." },
    { id: "B", text: "Octopus arms have local neural clusters that allow them to act independently of the central brain." },
    { id: "C", text: "Octopus arms cannot perform fine motions without external chemical cues." },
    { id: "D", text: "Researchers at the University of Naples have proven that octopuses lack a central brain." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage is making one point: each arm has its own neurons and can act on its own. The Naples experiment is offered as evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the passage says arms react to chemical cues; it doesn't say they need them for fine motion.\n* Choice D: the passage says the nervous system is \"distributed,\" not that there's no central brain."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1939 letter to her sister, the photographer Dorothea Lange described her decision to leave her studio portraiture practice and travel through California's farm camps with a borrowed camera. \"I have been making pictures of people who have everything,\" she wrote, \"and I begin to suspect that the only honest pictures left to make are of people who have nothing at all.\" The shift would, within two years, produce some of the most widely reproduced documentary images of the Depression era.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Lange abandoned photography in 1939 to pursue social work full time." },
    { id: "B", text: "Lange's move from studio portraiture to documentary work was driven by a search for honesty in her subject matter." },
    { id: "C", text: "Lange's letter to her sister was the most influential of her career." },
    { id: "D", text: "Documentary photography in the 1930s required an expensive specialized camera." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Lange changed her work: she felt studio portraiture wasn't \"honest\" anymore, so she sought subjects she felt were honest. The result was documentary work.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon photography — she changed *what* she photographed.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage actually says the camera was \"borrowed,\" not specialized or expensive."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Mediterranean monk seal (*Monachus monachus*) was once present in colonies along nearly every coastline of the Mediterranean Sea. By the late twentieth century, hunting and habitat loss had reduced the species to fewer than seven hundred individuals, scattered in isolated groups along the coasts of Greece, Turkey, and Madeira. Conservation biologists initially focused on protecting the largest remaining colony, near the Greek island of Alonissos, on the assumption that a single thriving colony could eventually repopulate the species' historic range. More recent genetic work has complicated that hope: the surviving subpopulations carry distinct lineages, and recolonization from a single source would erase variation that took millennia to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Mediterranean monk seal has been reduced from a Mediterranean-wide species to a single thriving colony." },
    { id: "B", text: "Conservation strategies that worked for other endangered species cannot be applied to monk seals." },
    { id: "C", text: "The early conservation strategy of relying on a single source colony is in tension with new genetic findings about the species' diversity." },
    { id: "D", text: "Genetic research has shown that the Mediterranean monk seal is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (rely on the Alonissos colony) and then says new genetic work \"has complicated that hope\" — the surviving groups carry distinct lineages that would be lost. The main idea is exactly that tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — there are several scattered groups, not one thriving colony.\n* Choice B: the passage doesn't generalize about other endangered species.\n* Choice D: \"distinct lineages\" within a species is not the same as \"different species\" — that's an over-reading."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although the gray wolf was reintroduced to Yellowstone National Park in 1995 with the explicit goal of restoring elk populations to a more sustainable size, ecologists have come to credit the wolves with a far broader role. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species recovery effort." },
    { id: "B", text: "trophic cascade." },
    { id: "C", text: "failure of reintroduction, since the wolves did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion between predators." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes one species (wolves) having effects on elk, then beavers, songbirds, and grasses — that is, *cascading* through the ecosystem. \"Trophic cascade\" is the standard term for exactly this.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"single-species recovery\" misses the wider effects, which are the whole point.\n* Choice C: the passage frames the outcome as a success, not a failure.\n* Choice D: there's no second predator in the text — competitive exclusion doesn't fit."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Linguists studying the Mauritian Creole language have noted that, despite arising from the rapid mixing of French, Malagasy, and several West African languages on colonial sugar plantations, the resulting grammar is remarkably stable across speakers and across the island. This stability is striking because the populations who originally fused those source languages had been separated only a generation or two earlier. One implication that researchers draw is that, in the absence of an external standard, _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "creole languages tend to fragment into mutually unintelligible dialects within decades." },
    { id: "B", text: "speakers reach a shared grammar quickly, even without formal instruction." },
    { id: "C", text: "older source languages always come to dominate the new creole's vocabulary." },
    { id: "D", text: "linguistic contact is unlikely to produce stable grammars at all." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage says the grammar is \"remarkably stable\" across an island, in a population that fused source languages just a generation or two ago, *and* without an external standard. The natural inference: speakers converge on a shared grammar quickly even without formal instruction.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts \"remarkably stable.\"\n* Choice C: the passage discusses grammar, not vocabulary dominance.\n* Choice D: contradicts the very fact the passage is reporting."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "When astronomers first detected the unusual light curve of the star KIC 8462852 in 2015, several teams proposed dramatic explanations, including a swarm of artificial structures around the star. Subsequent infrared and ultraviolet measurements, however, found no excess heat — the kind that any large solid structures intercepting starlight would necessarily emit. Most working astronomers therefore now favor explanations involving uneven clouds of cold dust or fragmenting comets, both of which would dim the star without warming up significantly themselves. The episode is sometimes invoked to underscore that _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "astronomers should give greater weight to dramatic explanations than to mundane ones." },
    { id: "B", text: "the absence of an expected secondary signal is itself useful evidence in evaluating an explanation." },
    { id: "C", text: "infrared and ultraviolet instruments are unreliable for studying distant stars." },
    { id: "D", text: "dramatic explanations should be ruled out only after multiple independent instruments fail to detect supporting signals." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe key reasoning move in the passage: solid structures *would* emit excess heat, but no excess heat was detected — *therefore* the dramatic structure explanation is disfavored. The lesson: a missing secondary signal (the heat) ruled out an explanation. That is exactly what choice B says.\n\n**Why the wrong answers are tempting:**\n* Choice A: the passage shows the opposite — astronomers reject the dramatic explanation when its predicted signal is missing.\n* Choice C: the passage trusts the IR/UV measurements; it doesn't call them unreliable.\n* Choice D: too strong — the passage says \"most\" astronomers \"now favor\" comets or dust, not that *any* unusual curve must be those."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of educational researchers studied the effect of a 20-minute morning reading routine on third-grade vocabulary growth across four elementary schools in the same district. Each school assigned the routine to half of its third-grade classes for one academic year, while the other half continued with the standard literacy curriculum. The team measured vocabulary gain (in standardized vocabulary points) from September to May.",
  questionTable: {
    type: "table",
    caption: "Mean vocabulary gain (points), September to May",
    headers: ["School", "With routine", "Standard curriculum", "Difference"],
    rows: [
      ["A", "14.2", "9.8", "+4.4"],
      ["B", "12.7", "10.1", "+2.6"],
      ["C", "13.5", "9.4", "+4.1"],
      ["D", "13.9", "10.0", "+3.9"]
    ]
  },
  question: "Which choice best describes data from the table that support the conclusion that the morning reading routine produced consistently larger vocabulary gains than the standard curriculum?",
  choices: [
    { id: "A", text: "At every school, students with the routine gained between 12.7 and 14.2 vocabulary points, while standard-curriculum students gained between 9.4 and 10.1 points." },
    { id: "B", text: "School A showed the largest single difference between groups, at 4.4 points." },
    { id: "C", text: "Standard-curriculum students at School B gained more than standard-curriculum students at School C." },
    { id: "D", text: "School D's two groups had the smallest gap between gains, at 3.9 points." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe claim is *consistently larger* gains. Choice A makes that case directly: the routine ranged 12.7 to 14.2; the standard ranged only 9.4 to 10.1. The two ranges don't overlap — that's exactly what \"consistently larger\" means.\n\n**Why the wrong answers are tempting:**\n* Choice B: a single school's data point doesn't establish *consistency* across all four schools.\n* Choice C: compares standard-curriculum students at two schools — irrelevant to the routine's effect.\n* Choice D: a single school detail; doesn't establish consistency."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "An emerging line of research suggests that bumblebees can learn solutions to physical puzzles by observing other bees, not just by trial and error. A student is writing a paper that argues social learning is one mechanism that helps bumblebee colonies adapt to new food sources.",
  question: "Which quotation from a hypothetical research paper would best support the student's claim?",
  choices: [
    { id: "A", text: "\"Workers from a colony that had never encountered the puzzle box solved it on their first attempt after watching a single demonstration by a trained bee.\"" },
    { id: "B", text: "\"The puzzle box was constructed of clear acrylic and required the bee to slide a small lever to expose a sucrose reward.\"" },
    { id: "C", text: "\"Older bees are generally more efficient foragers than newly emerged bees in the field.\"" },
    { id: "D", text: "\"Bumblebee colonies in the study were maintained at a stable temperature of 25 degrees Celsius throughout the experiment.\"" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice A is correct.**\n\nThe student's claim: bees can learn from *watching* other bees (social learning), and this helps colonies adapt to new food sources. Choice A is exactly that — naive bees solve the puzzle after watching a single demonstrator. Direct support.\n\n**Why the wrong answers are tempting:**\n* Choice B: describes the apparatus, not learning.\n* Choice C: about age, not about social learning.\n* Choice D: a methodological detail (temperature) that's irrelevant to the claim."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A coastal-ecology team measured the percent cover of native eelgrass at four sites in a tidal estuary, both before and five years after the removal of an upstream dam. The team predicted that dam removal would improve sediment flow and thus increase native eelgrass cover.",
  questionTable: {
    type: "table",
    caption: "Percent cover of native eelgrass at four estuary sites",
    headers: ["Site", "Before (year 0)", "Five years after"],
    rows: [
      ["North flat", "18", "29"],
      ["West channel", "22", "34"],
      ["South point", "15", "26"],
      ["East mouth", "20", "31"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's prediction?",
  choices: [
    { id: "A", text: "At every site, native eelgrass cover was higher five years after dam removal than before, with increases ranging from 11 to 12 percentage points." },
    { id: "B", text: "The West channel had the highest absolute cover both before and after the removal." },
    { id: "C", text: "The South point had the lowest cover before the removal." },
    { id: "D", text: "Across the four sites, average cover before removal was approximately 19 percent." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe team's prediction was that dam removal would *increase* native eelgrass cover. Choice A directly establishes the increase: every site went up, by 11–12 points. That sweep across all four sites is exactly what the prediction requires.\n\n**Why the wrong answers are tempting:**\n* Choice B: an absolute ranking, not change-over-time.\n* Choice C: only one site, only the \"before\" value.\n* Choice D: an average summary, doesn't show the *increase*."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In their 2021 history of early radio broadcasting in the American South, the historians Mara Ellis and Jonah Pace argue that local stations in the 1930s often functioned as community archives — preserving sermons, regional music, and farm-bulletin readings that would otherwise have left no written record. A literature student is writing an essay that uses Ellis and Pace's argument to claim that radio recordings are an underused source for studying twentieth-century vernacular culture.",
  question: "Which quotation from Ellis and Pace's history would most effectively support the student's claim?",
  choices: [
    { id: "A", text: "\"Most rural listeners had to share a single receiver with several neighbors throughout the week.\"" },
    { id: "B", text: "\"By 1937, fewer than a quarter of regional stations had the resources to maintain their own engineering staff.\"" },
    { id: "C", text: "\"The disc archives of WLBT in Greenville contain hundreds of hours of regional fiddle music for which no commercial recording or printed transcription is known to exist.\"" },
    { id: "D", text: "\"Stations in the largest markets adopted national programming feeds more rapidly than smaller stations did.\"" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice C is correct.**\n\nThe student's claim: radio recordings are an *underused source* for studying vernacular culture. Choice C names a specific archive of regional fiddle music with *no other surviving record* — that's a direct illustration of recordings filling a gap that no other source fills.\n\n**Why the wrong answers are tempting:**\n* Choice A: about listening habits, not about recordings as a source.\n* Choice B: about staffing, not about preservation.\n* Choice D: about programming choices, not preservation."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "When the meteorologist Inez Park was hired by the National Weather Service in 1972 ____ she became the third woman in the agency's history to be appointed to a forecasting role rather than to clerical or research support.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "1972, she" },
    { id: "B", text: "1972; she" },
    { id: "C", text: "1972: she" },
    { id: "D", text: "1972—she" }
  ],
  correctAnswer: "A",
  explanation: "Choice A correctly uses a comma after the leading subordinate clause introduced by *When*. A subordinate clause that precedes the main clause is set off from it by a comma.\n\n* Choice B: a semicolon joins two independent clauses; the opening clause here is dependent.\n* Choice C: a colon introduces a list, definition, or explanation.\n* Choice D: a dash cannot join a subordinate clause to its main clause."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Although several smaller surveys have suggested otherwise, the most recent census of monarch butterflies in their overwintering grounds ____ that the population has stabilized for two consecutive years.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "indicate" },
    { id: "B", text: "indicates" },
    { id: "C", text: "have indicated" },
    { id: "D", text: "are indicating" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement**\n\n**Choice B is correct.**\n\nThe subject is *the most recent census*, which is singular. So the verb must be singular: *indicates*. The intervening phrase \"of monarch butterflies in their overwintering grounds\" is a prepositional decoration that doesn't change the subject's number.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb with singular subject.\n* Choice C: plural verb (and shifts tense unnecessarily).\n* Choice D: plural verb (and shifts to present continuous)."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The architect Norma Sklarek designed several large public buildings in California in the 1960s ____ her work on the United States Embassy in Tokyo, completed in 1976, is widely considered her most influential commission.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "1960s but her" },
    { id: "B", text: "1960s however, her" },
    { id: "C", text: "1960s; however, her" },
    { id: "D", text: "1960s, however, her" }
  ],
  correctAnswer: "C",
  explanation: "Choice C correctly joins two independent clauses with a semicolon before the conjunctive adverb *however* and a comma after it.\n\n* Choice A: \"1960s but her\" with no preceding punctuation creates a fused sentence.\n* Choice B: \"however,\" with no preceding punctuation also creates a fused sentence.\n* Choice D: a comma before *however* creates a comma splice; conjunctive adverbs cannot join independent clauses with only a comma."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time the renovation of the historic train depot was completed in 2018, the building ____ vacant for more than three decades.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "has stood" },
    { id: "B", text: "stood" },
    { id: "C", text: "had stood" },
    { id: "D", text: "stands" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Verb Tense (Past Perfect)**\n\n**Choice C is correct.**\n\nTwo past events are described: the depot's standing vacant, and the completion of the renovation. The standing-vacant is the *earlier* event, completed before the renovation finished. Past perfect (*had stood*) is required for the earlier of two past events.\n\n**Why the wrong answers are tempting:**\n* Choice A: present perfect (*has stood*) implies up to *now*, but the action ended in 2018.\n* Choice B: simple past (*stood*) doesn't capture the prior-to-2018 sequence.\n* Choice D: present tense doesn't fit a past timeline at all."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Dr. Aiyana Standing Bear ____ a soil scientist whose research focuses on prairie restoration ____ argues that the underground biomass of native grasses has been systematically undercounted in carbon-sequestration models.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Bear, a soil scientist whose research focuses on prairie restoration argues" },
    { id: "B", text: "Bear; a soil scientist whose research focuses on prairie restoration; argues" },
    { id: "C", text: "Bear—a soil scientist whose research focuses on prairie restoration—argues" },
    { id: "D", text: "Bear—a soil scientist whose research focuses on prairie restoration, argues" }
  ],
  correctAnswer: "C",
  explanation: "Choice C correctly uses paired dashes to set off the nonrestrictive appositive \"a soil scientist whose research focuses on prairie restoration.\" Nonrestrictive modifiers require matched punctuation on both sides.\n\n* Choice A: a single comma at the front and no closing mark leaves the appositive unbalanced and runs into the verb.\n* Choice B: semicolons cannot enclose a nonrestrictive modifier.\n* Choice D: mismatched dash + comma cannot frame a nonrestrictive element."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Because the new fellowship is awarded jointly by two universities, recipients work with faculty mentors at both institutions, and ____ research is reviewed annually by a committee drawn from each campus.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "their" },
    { id: "B", text: "they're" },
    { id: "C", text: "there" },
    { id: "D", text: "theirs" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Pronoun Agreement (Possessive)**\n\n**Choice A is correct.**\n\nThe pronoun refers back to *recipients* (plural). The blank is followed by *research* (a noun being modified), so a possessive pronoun is needed: \"their research.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"they're\" = \"they are\" — a contraction, not a possessive.\n* Choice C: \"there\" is a location word, not a pronoun.\n* Choice D: singular \"his or her\" doesn't agree with the plural antecedent *recipients*."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The cellist Sergei Petrov began his career as a soloist with major orchestras across Europe. ____ in his early forties he turned increasingly to chamber music, where he felt the conversational format suited his temperament.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "However," },
    { id: "C", text: "Likewise," },
    { id: "D", text: "In addition," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice B is correct.**\n\nThe first sentence describes Petrov's solo career. The second sentence describes a *change* — turning to chamber music. The two sentences contrast, so a contrast transition (\"However,\") fits.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" needs the second sentence to be an instance of the first; here it's a *change*, not an instance.\n* Choice C: \"Likewise\" suggests similarity; the sentences are different, not similar.\n* Choice D: \"In addition\" suggests adding a similar item; this is a turning point, not an addition."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Engineers designing the new pedestrian bridge across the Vltava initially proposed a single-span steel arch that would have been visible from miles upstream. The city's heritage commission, however, asked that the design respect the riverfront's nineteenth-century skyline. ____ the architects revised the plan, lowering the arch and breaking it into two narrower spans that would not crowd the historic rooftops.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Accordingly," },
    { id: "B", text: "Nevertheless," },
    { id: "C", text: "Meanwhile," },
    { id: "D", text: "For instance," }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Transitions (Cause/Effect)**\n\n**Choice A is correct.**\n\nThe heritage commission *asked* for a more respectful design; the architects then *revised* the plan. The second action is a direct response to the first — that's a cause-effect relationship, signaled by \"Accordingly.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"Nevertheless\" implies they revised *despite* the request, but they revised *because of* the request.\n* Choice C: \"Meanwhile\" suggests simultaneous unrelated action.\n* Choice D: \"For instance\" introduces an example, not a response."
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Expression of Ideas",
  skill: "rhetorical-synthesis",
  studentNotes: {
    intro: "While researching a topic, a student has taken the following notes:",
    bullets: [
      "The Mariana Trench is the deepest known oceanic trench, reaching about 11,000 meters below sea level.",
      "Pressures at the bottom of the trench exceed 1,000 times atmospheric pressure at sea level.",
      "Despite the extreme pressure, the trench supports diverse microbial communities.",
      "Recent sampling missions have collected sediment cores from the trench floor.",
      "Genetic analysis of those cores has identified bacteria from previously undescribed lineages."
    ],
    goal: "The student wants to emphasize the scientific significance of the recent sampling missions."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "The Mariana Trench is about 11,000 meters deep, with pressures over 1,000 times atmospheric." },
    { id: "B", text: "Recent sampling missions have collected sediment cores from the floor of the Mariana Trench, where pressures exceed 1,000 times atmospheric." },
    { id: "C", text: "Recent sampling missions have collected sediment cores from the Mariana Trench, and genetic analysis of those cores has identified bacteria from previously undescribed lineages." },
    { id: "D", text: "The Mariana Trench supports diverse microbial communities despite extreme pressure." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal: emphasize the *scientific significance* of the recent sampling missions. Choice C names the missions AND their finding (new bacterial lineages) — that's exactly the scientific significance.\n\n**Why the wrong answers are tempting:**\n* Choice A: facts about depth and pressure, not about the missions' significance.\n* Choice B: mentions the missions but stops at \"sediment cores\" — doesn't say what made them significant.\n* Choice D: about the trench in general, not about the missions."
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
      "Ada Lovelace (1815–1852) was an English mathematician and writer.",
      "In 1843, Lovelace translated and annotated an Italian engineer's account of Charles Babbage's Analytical Engine (a proposed mechanical general-purpose computer).",
      "Lovelace's notes (often labeled Notes A through G) were longer than the original article.",
      "In Note G, Lovelace described how the Engine could be programmed to compute Bernoulli numbers (a sequence of rational numbers used in number theory) — an early example of an algorithm written for a machine.",
      "Some historians of computing argue that Note G entitles Lovelace to be considered the first computer programmer; others stress that the Engine was never built in her lifetime."
    ],
    goal: "The student wants to highlight a point of disagreement among historians regarding Lovelace's legacy."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Ada Lovelace was an English mathematician and writer who lived from 1815 to 1852." },
    { id: "B", text: "Lovelace translated an Italian engineer's account of Babbage's Analytical Engine in 1843." },
    { id: "C", text: "While some historians argue that Lovelace's Note G entitles her to be considered the first computer programmer, others stress that the Engine was never built in her lifetime." },
    { id: "D", text: "Lovelace's notes, often labeled A through G, were longer than the original article she was translating." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal: highlight a *disagreement among historians*. Choice C names two opposing camps directly: some say first programmer; others stress the Engine was never built. That's exactly the disagreement.\n\n**Why the wrong answers are tempting:**\n* Choice A: biographical fact, no disagreement.\n* Choice B: a fact about Lovelace's work, no disagreement.\n* Choice D: a fact about the length of the notes, no disagreement."
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
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "When the chemist Alice Ball developed an injectable form of chaulmoogra oil at the College of Hawaii in 1916, she was solving a practical problem that had vexed clinicians for decades: the oil was effective against leprosy but, in its raw form, so viscous and so painful to inject that few patients could ________ a full course of treatment.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "approve" },
    { id: "B", text: "endure" },
    { id: "C", text: "indulge" },
    { id: "D", text: "appreciate" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe oil was \"painful to inject,\" so the patients would have to *endure* the treatment over many sessions. \"Endure\" matches the sense of bearing something difficult.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"permit\" doesn't fit — patients aren't granting permission.\n* Choice C: \"accept\" is too neutral; the context emphasizes the difficulty.\n* Choice D: \"appreciate\" suggests value or enjoyment — the opposite tone."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The architect Lina Bo Bardi was famously reluctant to publish theoretical statements about her work, preferring instead to let individual buildings — the SESC Pompéia in São Paulo, for instance — make her arguments for her. The few prose statements she did release were ________: short, declarative, and unwilling to dwell on the kinds of qualifications a more academic writer might add.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "elaborate" },
    { id: "B", text: "terse" },
    { id: "C", text: "indirect" },
    { id: "D", text: "skeptical" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe colon explains the missing word: the statements were \"short, declarative, and unwilling to dwell on... qualifications.\" That is the definition of *terse*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"elaborate\" is the opposite — the statements were *short*.\n* Choice C: \"indirect\" doesn't match \"declarative.\"\n* Choice D: \"skeptical\" describes attitude, not the form of writing being described."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The mathematician Brahmagupta's seventh-century treatise, the *Brāhmasphuṭasiddhānta*, treats negative numbers and zero with a confidence that European mathematics would not match for another seven hundred years. Modern historians of mathematics are careful to note, however, that Brahmagupta's contribution was not the *invention* of these ideas but rather their ________: he organized and codified what had been a scattered set of computational practices into a single coherent system.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "rejection" },
    { id: "B", text: "popularization" },
    { id: "C", text: "consolidation" },
    { id: "D", text: "translation" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in, Hard)**\n\n**Choice C is correct.**\n\nThe colon explains the missing word: he \"organized and codified\" \"a scattered set of computational practices into a single coherent system.\" Bringing scattered things together into one system = *consolidation*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"rejection\" is the opposite — he kept and organized them.\n* Choice B: \"popularization\" is about spreading widely; the context is about organizing internally.\n* Choice D: \"translation\" usually concerns languages, not ideas being merged."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "In a 2022 review of population-genetics studies of emperor penguins, biologist Ren Howell concedes that the species' geographic isolation has historically protected its genetic diversity from severe bottlenecks. __Howell argues that this same protection now leaves the species vulnerable: a population that has not had to evolve responses to abrupt environmental change is unlikely to carry the latent variation needed to do so quickly now.__ Howell ends the review by calling for more sustained monitoring of nesting-colony genetic structure rather than for any single conservation intervention.",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterargument that the rest of the passage will refute." },
    { id: "B", text: "It reframes a feature presented as protective in the previous sentence as also a source of vulnerability." },
    { id: "C", text: "It calls into question the reliability of the population-genetics studies the review covers." },
    { id: "D", text: "It compares emperor penguins to another species facing similar pressures." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose (Hard)**\n\n**Choice B is correct.**\n\nThe sentence before says isolation has *protected* diversity. The underlined sentence pivots: that very protection is now a *vulnerability* because the population hasn't evolved responses to swings. The sentence reframes the protective feature as also a vulnerability.\n\n**Why the wrong answers are tempting:**\n* Choice A: it's not a counterargument; it's an extension that complicates the previous claim.\n* Choice C: nothing in the text questions the studies.\n* Choice D: no comparison to another species."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Adina Vargas's 2021 short story \"The Last Inspection.\" Claudia, a beekeeper, is checking her hives at the end of the season.\n\nClaudia worked her way along the row of supers, lifting each lid no higher than she had to and replacing it before the cold could find the bees inside. __The hum that came up from each box was different—denser in the strong colonies, threadbare in the ones that had lost a queen—and she had learned over twenty seasons to read it without removing the frames at all.__ Her father, who had taught her, used to say a hive that needed your attention would tell you twice; she had come to believe it would tell you once, and only quietly.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It introduces a piece of expert knowledge that motivates the rest of the description." },
    { id: "B", text: "It contrasts Claudia's experience with that of an apprentice she has been training." },
    { id: "C", text: "It questions the reliability of audible cues for assessing hive health." },
    { id: "D", text: "It breaks the chronological order of the scene to flash back to an earlier season." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe underlined sentence introduces what she *knows*: she can read hive health from sound alone. The next sentence builds on that with her father's saying — extending the idea. The sentence is the engine for the description.\n\n**Why the wrong answers are tempting:**\n* Choice B: no apprentice is mentioned.\n* Choice C: the passage trusts the audible cues; it doesn't question them.\n* Choice D: there's no flashback — the present moment continues."
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
      text: "A growing literature in cognitive science suggests that handwriting notes leads to better long-term retention than typing them. Researchers attribute the effect to the slower pace of handwriting, which forces note-takers to summarize and reformulate ideas rather than transcribe them verbatim."
    },
    {
      label: "Text 2",
      text: "Educational researcher Dario Mendez points out that nearly all of the studies in this literature compare paper-and-pen handwriting to typing on laptop word processors, and he questions whether the conclusion would extend to handwriting on a tablet stylus, where the kinematic act is similar to paper but the document is digital. Until comparative studies are run, Mendez argues, the modality-specific claims should be treated as provisional."
    }
  ],
  question: "Based on the texts, how would Mendez (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the claim outright as an artifact of obsolete technology." },
    { id: "B", text: "By accepting the claim but pointing out that the *cause* identified by the researchers may be wrong." },
    { id: "C", text: "By accepting the laptop-vs-paper finding but cautioning that the broader \"handwriting beats typing\" generalization has not been tested against modern stylus-based input." },
    { id: "D", text: "By insisting that any comparison of note-taking methods is unreliable because individual study habits vary too much." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Cross-Text Connections (Hard)**\n\n**Choice C is correct.**\n\nMendez doesn't reject the studies — he says the comparison is \"paper vs laptop word processors,\" so the *narrow* finding stands. But he questions whether the *broader* generalization holds against tablet-stylus, which hasn't been tested. That's exactly choice C: accept the narrow finding, caution about the broader claim.\n\n**Why the wrong answers are tempting:**\n* Choice A: he doesn't reject the claim; he calls it provisional.\n* Choice B: he doesn't dispute the *cause*; he disputes the *scope*.\n* Choice D: he doesn't generalize about all comparisons; he focuses on the missing modality."
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
      text: "The playwright Olu Adesanya frequently describes her composition process in technological terms — she speaks of \"refactoring\" a scene the way a programmer might refactor code, and she has said that her dramaturgical revision is closer to debugging than to rewriting. Several recent profiles have presented this language as evidence of a generational shift in how playwrights conceive of their craft."
    },
    {
      label: "Text 2",
      text: "Theater historian Patrick Mwangi finds the claim of a generational shift overstated. He notes that earlier generations of playwrights — Beckett's revisions of *Endgame*, for instance, or Lillian Hellman's working notebooks — show a similarly mechanical, iterative conception of the craft, even if the metaphors of the day were drawn from carpentry or textile work rather than from software."
    }
  ],
  question: "Based on the texts, how would Mwangi (Text 2) most likely characterize the generational-shift claim?",
  choices: [
    { id: "A", text: "a fundamentally new insight that earlier critics missed." },
    { id: "B", text: "a misreading produced by attending to changing metaphors rather than to underlying compositional habits." },
    { id: "C", text: "an accurate description of the shift in playwriting that has occurred since the 1990s." },
    { id: "D", text: "a claim that should be settled by surveying contemporary playwrights directly." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Hard)**\n\n**Choice B is correct.**\n\nMwangi argues that *earlier* playwrights had \"a similarly mechanical, iterative conception of the craft\" — the metaphors changed (carpentry/textile → software), but the underlying habits did not. So the \"generational shift\" claim mistakes a metaphor change for a habit change.\n\n**Why the wrong answers are tempting:**\n* Choice A: he calls the claim *over*stated, not insightful.\n* Choice C: he disagrees that there's been a shift.\n* Choice D: he doesn't propose a survey; he draws on historical examples already."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Geologists studying the dolomite cliffs of the South Tyrol have long puzzled over their distinctive pale color. Standard sedimentary models would predict darker tones at depths the cliffs reach, given the iron-rich runoff of the surrounding watersheds. A recent study by mineralogist Helena Voigt argues that the cliffs' color is not a sign of unusual deposition but of selective erosion: weaker, darker layers eroded faster than the pale dolomite, leaving the present cliff face skewed toward the lighter rock that simply held up best.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The dolomite cliffs of the South Tyrol formed under unusual sedimentary conditions that produced unusually pale rock." },
    { id: "B", text: "The pale color of the dolomite cliffs is the result of selective erosion rather than of unusual deposition." },
    { id: "C", text: "The watersheds surrounding the dolomite cliffs lack the iron-rich runoff that geologists once assumed." },
    { id: "D", text: "The dolomite cliffs were misclassified by earlier geologists." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage frames a puzzle (why so pale?) and then names Voigt's answer: not unusual deposition, but selective erosion. That's the main idea.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the model the passage *rejects*.\n* Choice C: the passage doesn't say the runoff is absent — only that the iron-rich runoff still exists, but the iron-rich layers eroded.\n* Choice D: \"misclassified\" overshoots; the passage says the *explanation* was wrong, not the classification."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "When the linguist Hà Mai began documenting the Bahnar language of Vietnam's Central Highlands in the 1970s, the dominant assumption among Western linguists was that minority languages would gradually conform to the grammar of the majority languages around them. Hà's fifty-year corpus has not borne that assumption out. Although Bahnar speakers are typically also fluent in Vietnamese, the Bahnar grammatical system has not collapsed toward Vietnamese patterns; if anything, in the past two decades it has *increased* its number of distinct verbal aspect markers, several of which lack any direct equivalent in the surrounding majority language.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Bahnar grammar has slowly converged with Vietnamese grammar over the past fifty years." },
    { id: "B", text: "Hà Mai's research challenges the long-standing expectation that minority languages erode toward the grammar of the majority languages around them." },
    { id: "C", text: "Speakers of Bahnar can no longer communicate effectively with Vietnamese speakers because the grammars have diverged." },
    { id: "D", text: "All Vietnamese speakers in the Central Highlands are at least bilingual in Bahnar." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details (Hard)**\n\n**Choice B is correct.**\n\nThe passage opens with the dominant *expectation* (minority languages converge to majority grammar), then offers Hà Mai's *contrary* fifty-year corpus. The main idea is the challenge to the expectation.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *expectation* the passage rebuts.\n* Choice C: the passage says speakers are fluent in Vietnamese; communication isn't blocked.\n* Choice D: about Vietnamese speakers, which the passage doesn't address."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Beginning in the 1880s, several US municipalities ran piped water from outside the city through chlorination plants and filtration beds before delivering it to residents. The historian Adelaide Cho has shown that, contrary to a common perception, the cholera and typhoid declines that followed cannot be attributed to any one component of these systems; her decade-by-decade reconstruction of public-health records suggests that filtration alone produced a measurable but partial decline, and that the steeper drop came once chlorination was added on top.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Chlorination is more important than filtration for preventing waterborne disease." },
    { id: "B", text: "Cho's reconstruction shows that the public-health gains came from the *combined* effect of filtration and chlorination, not from either component alone." },
    { id: "C", text: "Most US municipalities installed chlorination plants before installing filtration beds." },
    { id: "D", text: "The decline in cholera in US cities was caused mostly by changes in residential plumbing." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage's framing: the declines \"cannot be attributed to any one component.\" Cho's data: filtration alone was partial; the steeper drop came once chlorination was *added on top*. The main idea is the combined effect.\n\n**Why the wrong answers are tempting:**\n* Choice A: too narrow — chlorination's role is real but not solo.\n* Choice C: the passage doesn't claim a sequence of installations.\n* Choice D: residential plumbing isn't discussed."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "When archaeologists excavating a 14th-century Andean storage site recovered hundreds of intact ceramic jars, each filled with the residue of dried potatoes, several reconstructions of Inca state granary practice were updated to assume that long-distance overland transport of dried tubers had been routine. A recent isotope study of the jars themselves, however, found that the clay used to make them came from a single source within forty kilometers of the storage site. The jars, that is, did not travel with the food; the food was almost certainly produced and stored locally. The earlier reconstructions of overland transport, the new study concludes, were _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "supported by the new isotope evidence." },
    { id: "B", text: "based on a misreading of evidence about the *jars* as evidence about the *food*." },
    { id: "C", text: "consistent with the storage practices of contemporary Andean states." },
    { id: "D", text: "based on a misreading of the storage *volume* as evidence about population scale." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice B is correct.**\n\nThe passage's logic: people had assumed dried tubers traveled long distances. But the *jars* were local. So the earlier reconstruction had treated the jars as evidence about the food's transport, when in fact they were only evidence about *jar* origin. That's exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the new evidence *contradicts* the earlier reconstruction; it doesn't support it.\n* Choice C: the passage doesn't compare to other contemporary states.\n* Choice D: the passage doesn't credit the reconstruction with popularizing anything."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "In a 2020 review of antibiotic-resistance trends in livestock systems, veterinary epidemiologist Yara Hassan reported that herds in operations that adopted comprehensive on-farm monitoring of animal health showed *lower* rates of resistance development than herds in operations that did not. Counterintuitively, closer monitoring usually entails more antibiotic interventions, not fewer. Hassan's analysis of the same operations shows that the monitored farms intervened *earlier and more narrowly* — targeting individual sick animals rather than treating whole herds — which suggests that the monitoring's effect on resistance is mediated through _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "the total volume of antibiotic use on the farm." },
    { id: "B", text: "the *precision* of antibiotic use rather than its raw volume." },
    { id: "C", text: "the genetic background of the herds in question." },
    { id: "D", text: "the willingness of farmers to follow regulatory guidelines." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice B is correct.**\n\nThe puzzle: more monitoring → more interventions, but *less* resistance. Hassan's resolution: monitored farms targeted *individual* sick animals rather than herds. That's not a volume difference; it's a *precision* difference.\n\n**Why the wrong answers are tempting:**\n* Choice A: the data Hassan presents focuses on targeting, not raw volume.\n* Choice C: genetic background isn't mentioned.\n* Choice D: regulation isn't the variable Hassan is investigating."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Phonologists analyzing recordings of Inuktitut speakers from the 1970s and from the present day have noted that the modern speakers produce a slightly shorter average duration on syllable-final consonants. The shift is small — a difference of about 25 milliseconds on average — and well within the range of natural articulatory variation. Nonetheless, several researchers have argued that the change should not be dismissed: in a language where consonant length carries lexical contrast, even a small statistical shift, if it is consistent across speakers and stable across decades, can _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "be ignored as articulatory noise without consequences for meaning." },
    { id: "B", text: "be expected to reverse itself within a generation." },
    { id: "C", text: "indicate a quiet shift in the underlying phonemic system that may eventually merge previously distinct words." },
    { id: "D", text: "prove that recordings from the 1970s were poorly calibrated." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice C is correct.**\n\nThe passage tells us: in this language *consonant length carries lexical contrast* (i.e., long vs. short consonants distinguish *words*). A small but consistent shift in length, sustained over decades, could quietly erode that contrast — and so could merge previously distinct words. That's choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts the passage's central claim that the change matters precisely *because* length carries contrast.\n* Choice B: nothing predicts a reversal.\n* Choice D: the passage trusts the recordings; the issue is real change, not calibration error."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "An economist examined the effect of a city's switch to a fare-free public transit policy on reported transit ridership and on car-trip counts at four monitored corridors. The economist predicted that ridership would rise and that car trips along the same corridors would fall.",
  questionTable: {
    type: "table",
    caption: "Average daily transit boardings and car trips, before vs. one year after fare-free policy",
    headers: ["Corridor", "Boardings before", "Boardings after", "Car trips before", "Car trips after"],
    rows: [
      ["A", "3,200", "4,600", "12,400", "11,000"],
      ["B", "2,700", "3,800", "9,800", "8,900"],
      ["C", "4,100", "5,500", "15,200", "14,100"],
      ["D", "1,900", "2,800", "7,300", "6,700"]
    ]
  },
  question: "Which choice best describes data from the table that support the economist's prediction?",
  choices: [
    { id: "A", text: "At every corridor, transit boardings rose after the policy change while car trips along the same corridor fell." },
    { id: "B", text: "Corridor C had the highest absolute number of boardings both before and after the policy." },
    { id: "C", text: "Corridor D had the lowest car-trip counts before and after the policy." },
    { id: "D", text: "Across the four corridors, the increase in boardings averaged about 1,200 per day." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe prediction has *two* parts: ridership rises AND car trips fall. Choice A confirms BOTH at every corridor. Sweeping across all rows is what \"the prediction\" requires.\n\n**Why the wrong answers are tempting:**\n* Choice B: a single-corridor ranking, doesn't address the prediction.\n* Choice C: about absolute counts, not change.\n* Choice D: only addresses ridership; doesn't address the second half of the prediction."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "Recent scholarship has reexamined the role of women translators in shaping European Romanticism. A graduate student is writing a paper that argues these translators did more than render foreign texts into local languages — they actively reshaped what counted as a Romantic sensibility for their reading publics.",
  question: "Which quotation from a hypothetical study would best support the student's claim?",
  choices: [
    { id: "A", text: "\"Translators were typically paid by the volume rather than by the page.\"" },
    { id: "B", text: "\"Several translators systematically intensified the emotional register of source texts and added prefatory material framing the works as exemplars of a new sensibility.\"" },
    { id: "C", text: "\"Most translators of the period worked from German and French source texts.\"" },
    { id: "D", text: "\"Translation was one of few avenues by which women writers could publish in their own names.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual (Hard)**\n\n**Choice B is correct.**\n\nThe student's claim: translators *reshaped* the Romantic sensibility, not merely transmitted texts. Choice B is exactly that — translators *intensified* the emotional register and added *framing* prefaces presenting the works as a new sensibility. That's reshaping, not transmitting.\n\n**Why the wrong answers are tempting:**\n* Choice A: payment terms don't speak to the reshaping claim.\n* Choice C: the source-language pattern doesn't address reshaping.\n* Choice D: a fact about access for women writers, but not specifically about *reshaping* Romanticism."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of agricultural researchers compared two cover-crop strategies — a single-species rye cover and a multi-species mix of rye, clover, and radish — on soil-organic-carbon (SOC) levels at four farms in the same region after three growing seasons. The team predicted that the multi-species mix would increase SOC more than the single-species cover.",
  questionTable: {
    type: "table",
    caption: "Soil-organic-carbon change (g/kg), three seasons",
    headers: ["Farm", "Single-species cover", "Multi-species mix"],
    rows: [
      ["I", "+1.4", "+2.6"],
      ["II", "+1.1", "+2.2"],
      ["III", "+1.5", "+2.8"],
      ["IV", "+1.2", "+2.5"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's prediction?",
  choices: [
    { id: "A", text: "At every farm, the multi-species mix produced a larger SOC increase than the single-species cover, with the multi-species advantage ranging from 1.1 to 1.3 g/kg." },
    { id: "B", text: "Farm III recorded the largest absolute SOC increase under the multi-species mix." },
    { id: "C", text: "Across the four farms, the average SOC increase under the single-species cover was approximately 1.3 g/kg." },
    { id: "D", text: "Under the multi-species mix, no farm recorded an SOC increase smaller than 2.2 g/kg." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative (Hard)**\n\n**Choice A is correct.**\n\nThe prediction is a *comparative* one: multi-species > single-species. Choice A directly supports it: at every farm the multi-species figure exceeds the single-species figure, and the gap is consistent (1.1–1.3 g/kg). Sweep + comparison.\n\n**Why the wrong answers are tempting:**\n* Choice B: about a single farm, no comparison to the alternative.\n* Choice C: only the single-species summary; no comparison.\n* Choice D: only the multi-species summary; no comparison."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "An anthropology student is writing a paper that argues the rapid adoption of mobile phones in rural Kenyan villages in the 2000s reorganized economic relationships within extended families, even before formal mobile-money services like M-Pesa appeared.",
  question: "Which quotation from a hypothetical ethnographic study would best support the student's claim?",
  choices: [
    { id: "A", text: "\"M-Pesa, launched in 2007, became the dominant mobile-money platform in Kenya within four years.\"" },
    { id: "B", text: "\"Households surveyed in 2005 reported that the introduction of mobile phones allowed urban migrant relatives to coordinate the purchase and timing of remittances with rural elders far more frequently than monthly mail had previously permitted.\"" },
    { id: "C", text: "\"By 2010, mobile phone ownership in surveyed Kenyan villages exceeded fixed-line ownership in any year of the previous decade.\"" },
    { id: "D", text: "\"Many rural Kenyan villages experienced significant out-migration to urban centers throughout the 1990s.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual (Hard)**\n\n**Choice B is correct.**\n\nThe student's claim is specific: mobile phones reorganized economic relationships *within extended families*, *even before* M-Pesa. Choice B describes that exact mechanism — phones in 2005 (pre-M-Pesa) allowed urban migrants to coordinate remittances with rural elders far more frequently. That's a reorganization of intra-family economic relationships before formal mobile-money services existed.\n\n**Why the wrong answers are tempting:**\n* Choice A: about M-Pesa post-launch — exactly *not* the pre-M-Pesa period the claim concerns.\n* Choice C: a fact about ownership levels, not about economic reorganization.\n* Choice D: about pre-mobile migration, not about phones' effects."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The poet Reza Ahmadi spent the years 1979 to 1985 in self-imposed silence ____ during this period he wrote no new verse but kept extensive journals describing the work he could not yet make.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "silence, during" },
    { id: "B", text: "silence: during" },
    { id: "C", text: "silence; during" },
    { id: "D", text: "silence—during" }
  ],
  correctAnswer: "C",
  explanation: "Choice C correctly joins two independent clauses with a semicolon, the standard mark for joining related independent clauses with a single piece of punctuation.\n\n* Choice A: a comma alone between two independent clauses creates a comma splice.\n* Choice B: a colon introduces a definition, explanation, or list — not a coordinate independent clause.\n* Choice D: a dash cannot join two independent clauses on the SAT in this construction."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Despite the lecture-hall renovations completed in 2019, the music department's main recital space, along with two of its smaller practice rooms, ____ still considered acoustically inadequate by most of the visiting performers.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "are" },
    { id: "B", text: "is" },
    { id: "C", text: "have been" },
    { id: "D", text: "were" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement (Intervening Phrase)**\n\n**Choice B is correct.**\n\nThe subject is *the music department's main recital space*, which is singular. The phrase \"along with two of its smaller practice rooms\" is a parenthetical accompanying-noun construction, not a compound subject. Verbs agree with the head subject only.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb with singular subject.\n* Choice C: plural verb (and shifts tense).\n* Choice D: plural verb (and shifts tense)."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Among the items found in the long-sealed correspondence box ____ a folded program from a 1923 lecture and a single envelope addressed in handwriting that the archivist could not place.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "box, were" },
    { id: "B", text: "box: were" },
    { id: "C", text: "box; were" },
    { id: "D", text: "box were" }
  ],
  correctAnswer: "D",
  explanation: "Choice D correctly takes no punctuation between the fronted prepositional phrase and the verb. This is an inverted sentence — the subject (the list of items) follows the verb *were*. In an inverted sentence, no mark separates the prepositional opener from the verb that follows.\n\n* Choice A: a comma between the subject and the verb is a familiar error pattern.\n* Choice B: a colon would require the preceding text to stand as an independent clause, which the prepositional phrase is not.\n* Choice C: a semicolon would require two independent clauses on either side; only one clause is present."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "The fellowship committee has reviewed every applicant's portfolio twice and ____ to award the inaugural prize this spring.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "intend" },
    { id: "B", text: "intends" },
    { id: "C", text: "are intending" },
    { id: "D", text: "have intended" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement (Collective Noun)**\n\n**Choice B is correct.**\n\n*The committee* is a collective noun acting as a single body here (it has \"reviewed every applicant's portfolio twice\" — coordinated action). The singular *intends* matches.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb.\n* Choice C: plural verb (and present continuous shifts the rhythm).\n* Choice D: plural verb."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Tomás Reyna ____ a structural engineer best known for designing public footbridges that emphasize visible steelwork ____ has accepted the commission to redesign the eastern approach to the Old Mill District.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Reyna, a structural engineer best known for designing public footbridges that emphasize visible steelwork has" },
    { id: "B", text: "Reyna—a structural engineer best known for designing public footbridges that emphasize visible steelwork—has" },
    { id: "C", text: "Reyna, a structural engineer best known for designing public footbridges that emphasize visible steelwork—has" },
    { id: "D", text: "Reyna; a structural engineer best known for designing public footbridges that emphasize visible steelwork; has" }
  ],
  correctAnswer: "B",
  explanation: "Choice B correctly uses paired dashes to set off the nonrestrictive appositive \"a structural engineer best known for designing public footbridges that emphasize visible steelwork.\"\n\n* Choice A: a leading comma without a closing mark leaves the appositive unbalanced.\n* Choice C: mismatched comma + dash cannot frame a nonrestrictive element.\n* Choice D: semicolons cannot enclose a nonrestrictive modifier."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "____ on the western flank of the volcano in the late nineteenth century, the basalt-walled hut originally served as a shelter for the team that maintained the regional weather instruments.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Constructed" },
    { id: "B", text: "After constructing" },
    { id: "C", text: "Having constructed" },
    { id: "D", text: "While constructing" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Modifier Placement (Dangling Modifier)**\n\n**Choice A is correct.**\n\nThe sentence's main subject is *the basalt-walled hut*. The introductory phrase modifies the hut. \"Constructed on the western flank...\" is a past participial phrase that correctly attaches to the hut (the hut *was* constructed there).\n\n**Why the wrong answers are tempting:**\n* Choice B: \"After constructing...\" implies the hut was doing the constructing — a dangling modifier.\n* Choice C: \"Having constructed...\" same problem — implies the hut built something.\n* Choice D: \"While constructing...\" same problem."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The first phase of the regional rail upgrade focused on track replacement and signaling, work that produced few visible changes for daily commuters. ____ when the second phase opened the new platform extensions in 2024, average wait times across the network dropped by nearly forty percent within a single quarter.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "However," },
    { id: "B", text: "Likewise," },
    { id: "C", text: "For example," },
    { id: "D", text: "Meanwhile," }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice A is correct.**\n\nFirst sentence: phase 1 produced *few visible changes*. Second sentence: phase 2 produced a *dramatic visible change* (40% drop in wait times). That's a contrast — the visible-effect story flips. \"However\" fits.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"Likewise\" implies similarity, but the visible-effect outcomes are opposites.\n* Choice C: \"For example\" needs the second sentence to instance the first.\n* Choice D: \"Meanwhile\" suggests simultaneous unrelated activity, but the second phase came *after*."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The early advocates of green-roof systems in temperate cities argued that the soil and plant layers would substantially reduce summer cooling costs in the buildings beneath them. Three decades of empirical work has not borne out the strong version of that claim. ____ a more modest finding has emerged: green roofs reliably extend the working lifetime of the underlying waterproof membrane, often by twenty years or more.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Moreover," },
    { id: "B", text: "In its place," },
    { id: "C", text: "For example," },
    { id: "D", text: "Conversely," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Replacement)**\n\n**Choice B is correct.**\n\nThe passage says the strong cooling claim has not been borne out. *In its place* — i.e., replacing that claim — a more modest finding (membrane longevity) has emerged. That's a substitution-style transition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Moreover\" adds in the same direction; here the second finding is replacing the first, not adding to it.\n* Choice C: \"For example\" treats the second finding as an instance of the first; the second finding is *different*.\n* Choice D: \"Conversely\" implies opposition; the new finding isn't the opposite, it's a substitute."
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
      "Bessie Coleman (1892–1926) was the first African American woman to earn an international pilot's license.",
      "She was denied admission to American flying schools, so she learned French in order to train in France.",
      "She earned her pilot's license in 1921 from the Fédération Aéronautique Internationale.",
      "Returning to the US, Coleman performed in flying exhibitions and refused to perform at venues that segregated their audiences.",
      "Her early death in 1926 prevented her from realizing her plan to open a flight school for African American students."
    ],
    goal: "The student wants to emphasize the obstacles Coleman overcame to earn her pilot's license."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Bessie Coleman, the first African American woman to earn an international pilot's license, was an exhibition pilot." },
    { id: "B", text: "Denied admission to American flying schools, Bessie Coleman learned French and traveled to France, where she earned her pilot's license in 1921." },
    { id: "C", text: "Bessie Coleman planned to open a flight school for African American students but died in 1926 before doing so." },
    { id: "D", text: "Bessie Coleman refused to perform at venues that segregated their audiences." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes — Hard)**\n\n**Choice B is correct.**\n\nThe goal: emphasize the *obstacles Coleman overcame to earn her license*. Choice B names the obstacle (denied admission to American schools) AND the path she took to overcome it (learn French, travel to France, earn the license). That's exactly obstacle + overcoming.\n\n**Why the wrong answers are tempting:**\n* Choice A: just identifies her — no obstacle, no overcoming.\n* Choice C: about her unrealized plans, not about earning her license.\n* Choice D: about her later anti-segregation stance, not about earning her license."
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
      "The Aral Sea, located between Kazakhstan and Uzbekistan, was once the fourth-largest lake in the world.",
      "Beginning in the 1960s, large-scale Soviet irrigation projects diverted the rivers feeding the Aral Sea to grow cotton in surrounding deserts.",
      "By 2007, the South Aral Sea had shrunk to roughly 10% of its original surface area.",
      "In 2005, Kazakhstan completed the Kok-Aral Dam to retain the inflow of the Syr Darya river into the North Aral Sea.",
      "Within a few years of the dam's completion, the North Aral Sea had risen by several meters and local fisheries had begun to recover."
    ],
    goal: "The student wants to draw a contrast between the trajectories of the South and North Aral Seas after 2005."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "The Aral Sea was once the fourth-largest lake in the world but has shrunk dramatically since the 1960s." },
    { id: "B", text: "By 2007, the South Aral Sea had shrunk to roughly 10% of its original surface area, while the North Aral Sea, supported by Kazakhstan's Kok-Aral Dam (completed in 2005), had begun to recover." },
    { id: "C", text: "Soviet irrigation projects diverted the rivers feeding the Aral Sea beginning in the 1960s." },
    { id: "D", text: "Kazakhstan completed the Kok-Aral Dam in 2005 to retain the inflow of the Syr Darya river." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes — Hard)**\n\n**Choice B is correct.**\n\nThe goal: *contrast* the South and North Aral Seas after 2005. Choice B names BOTH halves of the contrast: the South had shrunk to 10%, *while* the North had begun to recover (with the dam as the cause). That's a true contrast.\n\n**Why the wrong answers are tempting:**\n* Choice A: a general fact, no contrast between South and North.\n* Choice C: about the cause of decline, no post-2005 trajectory.\n* Choice D: about the dam alone, no comparison to the South."
}
      ]
    }
  ]
};
