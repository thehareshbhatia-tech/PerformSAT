// Practice Test 2 — SAT Reading & Writing (R&W)
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

export const practiceTest2RW = {
  id: "practice-test-2-rw",
  title: "Practice Test 2 — Reading & Writing",
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
  passage: "When the field naturalist Wendell Okafor returned from a six-week survey of bog plants in northern Minnesota, he carried two field notebooks crammed with sketches. He spent the next month carefully ________ each entry into a single bound volume, adding cross-references and date stamps that his original hurried fieldwork had not allowed.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "discarding" },
    { id: "B", text: "transcribing" },
    { id: "C", text: "questioning" },
    { id: "D", text: "memorizing" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe sentence describes Okafor moving entries from two field notebooks into a single bound volume — copying them over carefully. \"Transcribing\" means writing out a copy of, which fits exactly.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"discarding\" contradicts the act of preserving entries in a bound volume.\n* Choice C: \"questioning\" doesn't fit — the verb governs adding cross-references and date stamps, which is preservation, not doubt.\n* Choice D: \"memorizing\" doesn't match the physical act of producing a written volume."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The choreographer Ines Vilanova was known for keeping her rehearsal corrections ________; rather than long verbal explanations, she preferred to step into a dancer's place and demonstrate a single phrase, trusting that the body would understand what words might cloud.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "elaborate" },
    { id: "B", text: "brief" },
    { id: "C", text: "indirect" },
    { id: "D", text: "harsh" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nThe semicolon explains the missing word: Vilanova \"preferred\" demonstrating \"a single phrase\" rather than \"long verbal explanations.\" That is the definition of *brief*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"elaborate\" is the opposite of what the rest of the sentence describes.\n* Choice C: \"indirect\" doesn't match showing a phrase directly with one's own body.\n* Choice D: \"harsh\" describes tone, not the length the sentence emphasizes."
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "Although the playwright Mei-Lin Ozawa is often celebrated for her bold staging choices, her drafts were anything but bold. Her early notebooks reveal a writer who would ________ a single line of dialogue for weeks, returning to it across many sessions to add a syllable here, cut a word there, until the rhythm matched what she wanted the actor to do.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "ignore" },
    { id: "B", text: "memorize" },
    { id: "C", text: "refine" },
    { id: "D", text: "reject" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice C is correct.**\n\nThe sentence describes Ozawa returning to one line repeatedly — adding a syllable, cutting a word — to make its rhythm right. That is *refining*: improving by gradual adjustment.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignore\" contradicts spending weeks on one line.\n* Choice B: \"memorize\" doesn't fit — she's *changing* the line, not committing it to memory unchanged.\n* Choice D: \"reject\" implies removal, but she keeps reworking the line, not throwing it out."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "For decades, marine biologists assumed that bioluminescent display in deep-sea squid functioned primarily to attract prey. A 2021 study by oceanographer Caleb Ndiaye challenges that assumption. __After deploying low-light cameras at depths below 800 meters, Ndiaye's team observed that the most elaborate displays consistently appeared not when prey approached but when a second squid of the same species came into view, suggesting that the displays serve communication between conspecifics rather than predation.__",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterexample that complicates Ndiaye's challenge to the older view." },
    { id: "B", text: "It presents the observational evidence that supports the new explanation Ndiaye offers." },
    { id: "C", text: "It contrasts two competing methods for measuring bioluminescence." },
    { id: "D", text: "It raises doubts about whether the older assumption was ever truly held." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose**\n\n**Choice B is correct.**\n\nThe first two sentences set up: old view (prey attraction) → Ndiaye challenges it. The underlined sentence then provides the *evidence* (camera observations) and the *new explanation* (communication between conspecifics) that grounds the challenge.\n\n**Why the wrong answers are tempting:**\n* Choice A: there's no counterexample — the underlined sentence supports Ndiaye, not against him.\n* Choice C: only one method (low-light cameras) is described.\n* Choice D: the passage accepts that the older view was held; it doesn't question that."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 4,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Joon-Ho Park's 2020 short story \"The Bakery on Vine Street.\" Tomas, a baker, is working alone before dawn.\n\nTomas pulled the proofed loaves from the warming rack and slid them, three at a time, into the brick oven that his grandfather had built. The shop was still dark — the front lights would not go on for another hour — and the only sound was the soft slap of dough against stone. __He paused before closing the oven door, watching the rounded tops catch the first orange of the heat, and he thought of all the mornings his grandfather had stood in this exact place doing this exact thing.__ The thought did not make him sad. It made him steadier.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It marks a shift from physical action to interior memory and reflection." },
    { id: "B", text: "It establishes a contrast between Tomas's bakery and his grandfather's." },
    { id: "C", text: "It contradicts the calm tone established earlier in the passage." },
    { id: "D", text: "It signals that Tomas is about to close the bakery permanently." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe sentences before describe Tomas's *actions* (pulling loaves, sliding them in). The underlined sentence shifts to him pausing, watching, and *thinking of* his grandfather — interior memory. The next sentence then reports the *feeling* the memory produces. The underlined sentence is the pivot from action to reflection.\n\n**Why the wrong answers are tempting:**\n* Choice B: there is only one bakery in the passage; no contrast is established.\n* Choice C: the tone stays calm — the memory makes Tomas \"steadier,\" not less calm.\n* Choice D: nothing in the passage suggests closure or ending."
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
      text: "Recent enthusiasm for community-supported agriculture (CSA) programs in mid-sized cities has been propelled by food-system researchers who emphasize the freshness, traceability, and reduced food-mile benefits of buying directly from local farms. The model promises better produce, fewer middlemen, and a strengthened bond between urban consumers and rural growers."
    },
    {
      label: "Text 2",
      text: "Rural sociologist Bárbara Lozano shares the goals of the CSA movement but cautions that \"local sourcing\" alone is not the same as a fair farm economy. Her studies of mid-Atlantic CSA networks show that without minimum-price agreements, the small farms supplying these programs frequently absorb price pressure from buyers and earn lower per-acre returns than peers selling through traditional channels. Without such protections, she argues, CSA risks recreating the pricing imbalances it was meant to dissolve."
    }
  ],
  question: "Based on the texts, how would Lozano (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the freshness and traceability benefits as overstated." },
    { id: "B", text: "By acknowledging the benefits but warning that achieving a fair farm economy depends on policy choices the researchers do not address." },
    { id: "C", text: "By arguing that CSA programs are technically impossible to scale to mid-sized cities." },
    { id: "D", text: "By insisting that the CSA model has already been disproven by the mid-Atlantic record." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections**\n\n**Choice B is correct.**\n\nText 2 says Lozano \"shares the goals\" — so she agrees with the benefits in spirit. But she adds a *condition*: without minimum-price agreements, the model risks bad outcomes. That is exactly choice B: acknowledge the benefits, warn about preconditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: Lozano doesn't reject the freshness/traceability benefits; she shares the goals.\n* Choice C: she never claims technical impossibility.\n* Choice D: \"already been disproven\" is too strong — she warns about a *risk*, not a proof."
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
      text: "The composer Henrik Solberg, in a 1971 interview about his orchestral writing, argued that the best transitions between movements are those the listener does not consciously notice — a shift in harmonic color, a thinning of texture — so that one movement seems to dissolve naturally into the next. The trick, he said, is to build the connection so quietly that the listener registers only the new mood, not the seam."
    },
    {
      label: "Text 2",
      text: "In a recent essay rereading Solberg's 1968 Second Symphony, the musicologist Ines Akinyemi notes that several of Solberg's contemporary critics complained that the second-to-third-movement transition felt arbitrary. Akinyemi argues that those complaints reveal a generational listening habit: critics in the late 1960s expected transitions that announced themselves with clear cadences, and Solberg's quieter dissolves read to them as no transitions at all."
    }
  ],
  question: "Based on the texts, how would Akinyemi (Text 2) most likely characterize the late-1960s critics' complaints?",
  choices: [
    { id: "A", text: "a flaw in Solberg's craft that the critics correctly identified." },
    { id: "B", text: "a misunderstanding rooted in the critics' expectations rather than in the symphony itself." },
    { id: "C", text: "a deliberate provocation by Solberg aimed at his contemporaries." },
    { id: "D", text: "a breakdown in communication between conductors and reviewers of the period." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Inference)**\n\n**Choice B is correct.**\n\nAkinyemi argues the critics' complaints \"reveal a generational listening habit\" — that is, the *critics* were trained to expect loud cadences, so Solberg's quieter dissolves registered as no transitions at all. The flaw is in the critics' habits, not in Solberg's craft.\n\n**Why the wrong answers are tempting:**\n* Choice A: Akinyemi is *defending* Solberg, not validating the critics.\n* Choice C: Akinyemi doesn't claim Solberg was provoking anyone — only that his quietness was misread.\n* Choice D: there's no conductor/reviewer communication issue in the text."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Contrary to a long-standing assumption, sea otter foraging behavior is not transmitted purely through genetic predisposition. Each pup learns specific tool-use techniques — which rocks crack which shells, how to anchor the prey on the chest — by closely watching its mother during the first year. Recent observational studies in Monterey Bay have shown that pups raised by mothers who specialize in mussels grow up to specialize in mussels themselves, even when abundant alternative prey are available, suggesting an unusually strong cultural component to otter feeding.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Sea otters acquire foraging behaviors purely through genetic predisposition." },
    { id: "B", text: "Sea otter foraging is shaped substantially by learning from the mother, not only by genetic factors." },
    { id: "C", text: "Sea otters cannot survive without consuming mussels." },
    { id: "D", text: "Researchers in Monterey Bay have proven that sea otters lack genetic predispositions for foraging." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe whole passage is making one point: pups learn specific techniques from their mothers, and prey specialization is inherited culturally rather than only genetically. The Monterey Bay study is offered as evidence for that point.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *old* assumption the passage is correcting.\n* Choice C: the passage discusses prey specialization, not survival requirements.\n* Choice D: the passage says learning matters strongly; it doesn't claim genetics is absent."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "In a 1948 letter to her editor, the anthropologist Ruth Mwangi described the moment she decided to abandon her planned monograph on Mombasa fishing markets and write instead about the songs the fishermen sang while mending nets. \"I had been writing about transactions,\" she wrote, \"and I begin to suspect that the only honest record left to make is of the language people use when no transaction is happening.\" The shift would, within three years, produce one of the foundational collections of East African working-song scholarship.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Mwangi gave up anthropology in 1948 to pursue songwriting full time." },
    { id: "B", text: "Mwangi's redirection from market transactions to working songs was driven by her sense of where honest evidence of language could still be found." },
    { id: "C", text: "Mwangi's 1948 letter to her editor was the most influential of her career." },
    { id: "D", text: "Recording fishing songs in 1948 required equipment that Mwangi had to import." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage is about *why* Mwangi changed her project: she felt her transaction-focused work wasn't \"honest,\" so she sought language people used outside of transactions. The result was a foundational song collection.\n\n**Why the wrong answers are tempting:**\n* Choice A: she didn't abandon anthropology — she changed *what* she wrote about.\n* Choice C: the passage doesn't claim the letter was her most influential anything.\n* Choice D: the passage says nothing about importing equipment."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "The Iberian lynx (*Lynx pardinus*) was once distributed across most of the Iberian Peninsula. By the early 2000s, hunting and the collapse of its primary prey, the European rabbit, had reduced the species to fewer than one hundred individuals confined to two small populations in southern Spain. Conservation biologists initially focused on captive-breeding releases drawn from one source population, on the assumption that a single reinforced colony could eventually recolonize the species' historic range. More recent genetic work has complicated that hope: the surviving subpopulations carry distinct mitochondrial signatures, and recolonization from a single source would erase variation that took millennia to accumulate.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The Iberian lynx has been reduced to a single thriving colony in southern Spain." },
    { id: "B", text: "Conservation strategies that worked for other endangered cats cannot be applied to the Iberian lynx." },
    { id: "C", text: "The early conservation strategy of reinforcing a single source colony is in tension with new genetic findings about the species' diversity." },
    { id: "D", text: "Genetic research has shown that the Iberian lynx is in fact several different species." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice C is correct.**\n\nThe passage sets up the early plan (reinforce one colony) and then says new genetic work \"has complicated that hope\" — the surviving groups carry distinct signatures that would be lost. The main idea is exactly that tension.\n\n**Why the wrong answers are tempting:**\n* Choice A: distorts the facts — there are two surviving populations, not a single thriving one.\n* Choice B: the passage doesn't generalize about other endangered cats.\n* Choice D: \"distinct mitochondrial signatures\" within a species is not the same as \"different species.\""
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Although a freshwater pond at the center of an urban park was originally stocked with mosquitofish in the 1960s solely to control mosquito larvae, ecologists have come to credit the fish with a far broader effect on the surrounding ecosystem. The relationship is now used as a textbook example of a _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "single-species control program with narrowly defined effects." },
    { id: "B", text: "trophic cascade." },
    { id: "C", text: "failed introduction, since the fish did not achieve their stated goal." },
    { id: "D", text: "competitive exclusion among native fish." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage describes one species (mosquitofish) introduced for one purpose (control mosquito larvae) but having *broader* effects on the surrounding ecosystem — that is, *cascading* through it. \"Trophic cascade\" is the standard term for exactly this pattern.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"narrowly defined effects\" misses the broader effects, which are the whole point.\n* Choice C: the passage frames the broader role positively, not as failure.\n* Choice D: there's no second species competing in the text — competitive exclusion doesn't fit."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Linguists studying the Cape Verdean Creole language have noted that, despite arising from the rapid mixing of Portuguese and several West African languages on colonial provisioning ports, the resulting grammar is remarkably stable across speakers and across the archipelago's nine inhabited islands. This stability is striking because the islands have historically had limited regular communication with one another. One implication that researchers draw is that, in the absence of a centralized standard, _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "creole languages tend to fragment into mutually unintelligible dialects within decades." },
    { id: "B", text: "speakers of related communities converge on a shared grammar even when they communicate little." },
    { id: "C", text: "older source languages always come to dominate the new creole's vocabulary." },
    { id: "D", text: "linguistic contact is unlikely to produce stable grammars at all." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe passage says the grammar is \"remarkably stable\" across nine islands that have *limited regular communication*, and *without a centralized standard*. The natural inference: communities can converge on a shared grammar even with little contact.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts \"remarkably stable.\"\n* Choice C: the passage discusses grammar, not vocabulary dominance.\n* Choice D: contradicts the very fact the passage is reporting."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "When astronomers first detected an unusually flat infrared spectrum from the brown dwarf TVLM-513b in 2018, several teams proposed that the object's atmosphere must be unusually cloud-free. Subsequent radio observations, however, found polarized emissions consistent with a thick layer of magnetically aligned dust grains — the kind that any unusually clear atmosphere would necessarily lack. Most working researchers therefore now favor explanations involving an unusually uniform, *not* unusually cloud-free, atmosphere. The episode is sometimes invoked to underscore that _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "astronomers should give greater weight to the most unusual explanations available." },
    { id: "B", text: "evidence from a second instrument can rule out an explanation that fit the first one." },
    { id: "C", text: "infrared and radio instruments are unreliable for studying brown dwarfs." },
    { id: "D", text: "infrared spectra alone are sufficient to determine atmospheric composition." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion)**\n\n**Choice B is correct.**\n\nThe key reasoning move in the passage: the IR spectrum suggested cloud-free, but radio observations *contradicted* that picture by finding polarized emissions inconsistent with cloud-free. The lesson: a second instrument's evidence ruled out the first explanation. That is exactly what choice B says.\n\n**Why the wrong answers are tempting:**\n* Choice A: the passage moves *away from* the unusual cloud-free explanation toward a more uniform one.\n* Choice C: the passage trusts both instruments; it doesn't call them unreliable.\n* Choice D: contradicts the passage — the IR spectrum *alone* misled the first interpreters."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of public-health researchers studied the effect of free school breakfast on first-grade attendance across four elementary schools in the same district. Each school assigned the program to half of its first-grade classes for one academic year, while the other half continued without breakfast service. The team measured the change in monthly attendance rate (in percentage points, September to May) compared to the same classes' attendance the previous year.",
  questionTable: {
    type: "table",
    caption: "Mean change in monthly attendance rate (percentage points), September to May",
    headers: ["School", "With breakfast", "Without breakfast", "Difference"],
    rows: [
      ["P", "+3.4", "+0.5", "+2.9"],
      ["Q", "+2.9", "+0.7", "+2.2"],
      ["R", "+3.6", "+0.4", "+3.2"],
      ["S", "+3.1", "+0.6", "+2.5"]
    ]
  },
  question: "Which choice best describes data from the table that support the conclusion that the free breakfast program produced consistently larger attendance gains than no-breakfast classes?",
  choices: [
    { id: "A", text: "At every school, classes with breakfast gained between 2.9 and 3.6 percentage points, while classes without breakfast gained between 0.4 and 0.7 points." },
    { id: "B", text: "School R showed the largest single difference between groups, at 3.2 points." },
    { id: "C", text: "Classes without breakfast at School Q gained more than classes without breakfast at School R." },
    { id: "D", text: "School Q's two groups had the smallest gap between gains, at 2.2 points." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe claim is *consistently larger* gains. Choice A makes that case directly: with-breakfast classes gained 2.9 to 3.6; without-breakfast classes gained only 0.4 to 0.7. The two ranges don't overlap — that's exactly what \"consistently larger\" means.\n\n**Why the wrong answers are tempting:**\n* Choice B: a single school's data point doesn't establish *consistency* across all four schools.\n* Choice C: compares without-breakfast classes at two schools — irrelevant to the program's effect.\n* Choice D: a single school detail; doesn't establish consistency."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "An emerging line of research suggests that crows can recognize and remember individual human faces over long periods, even after a single threatening encounter. A student is writing a paper that argues this individual recognition is one mechanism that allows urban crows to reduce risks across many neighborhoods at once.",
  question: "Which quotation from a hypothetical research paper would best support the student's claim?",
  choices: [
    { id: "A", text: "\"Crows that had been threatened by a researcher wearing a distinctive mask continued to scold and dive at people wearing that mask three years later, even in neighborhoods where the threat had not occurred.\"" },
    { id: "B", text: "\"The masks used in the study were chosen to be visually distinctive but not exaggerated, so that crows could not rely on a single feature.\"" },
    { id: "C", text: "\"Older crows are generally more cautious foragers than fledglings in the field.\"" },
    { id: "D", text: "\"All experimental sessions were conducted between 8 a.m. and 11 a.m. to control for light conditions.\"" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice A is correct.**\n\nThe student's claim: crows recognize individual humans, and this lets them reduce risks across many neighborhoods. Choice A captures both pieces — recognition (three years later, the same mask still triggers scolding) AND multi-neighborhood spread (even where the threat didn't occur).\n\n**Why the wrong answers are tempting:**\n* Choice B: describes the apparatus, not recognition behavior.\n* Choice C: about age, not about individual recognition.\n* Choice D: a methodological detail (timing) that's irrelevant to the claim."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A regional fisheries team measured the percent cover of native kelp at four rocky reef sites in a coastal bay, both before and four years after the establishment of a no-take marine protected area. The team predicted that the protected status would allow grazing sea-urchin populations to be controlled by recovering predators and that kelp cover would therefore increase.",
  questionTable: {
    type: "table",
    caption: "Percent cover of native kelp at four reef sites",
    headers: ["Site", "Before (year 0)", "Four years after"],
    rows: [
      ["Cliff cove", "21", "33"],
      ["Pebble bank", "18", "30"],
      ["Outer reef", "16", "28"],
      ["Inlet point", "23", "35"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's prediction?",
  choices: [
    { id: "A", text: "At every site, native kelp cover was higher four years after protection than before, with increases of 12 percentage points at each site." },
    { id: "B", text: "Inlet point had the highest absolute cover both before and after the establishment of protection." },
    { id: "C", text: "Outer reef had the lowest cover before protection." },
    { id: "D", text: "Across the four sites, average cover before protection was approximately 19.5 percent." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe team's prediction was that protection would *increase* native kelp cover. Choice A directly establishes the increase: every site went up, by 12 points. That sweep across all four sites is exactly what the prediction requires.\n\n**Why the wrong answers are tempting:**\n* Choice B: an absolute ranking, not change-over-time.\n* Choice C: only one site, only the \"before\" value.\n* Choice D: an average summary, doesn't show the *increase*."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "In their 2019 history of women editors in early-twentieth-century American magazines, the historians Priya Annapureddy and Calvin Yates argue that these editors often shaped what counted as polite literary fiction by quietly accepting or rejecting submissions on grounds that never appeared in their public masthead statements. A literature student is writing an essay that uses Annapureddy and Yates's argument to claim that magazine slush-pile records are an underused source for studying early-twentieth-century literary taste.",
  question: "Which quotation from Annapureddy and Yates's history would most effectively support the student's claim?",
  choices: [
    { id: "A", text: "\"Most subscribers to mass-market magazines in the 1920s lived in households of three or more.\"" },
    { id: "B", text: "\"By 1924, fewer than a third of mid-circulation magazines had the resources to maintain their own copy desks.\"" },
    { id: "C", text: "\"The slush-pile ledgers of *Calumet Monthly*, preserved in a Cleveland archive, contain detailed editorial annotations on hundreds of rejected stories that no surviving public review or printed announcement records.\"" },
    { id: "D", text: "\"Stories accepted by the largest-circulation magazines were typically reprinted in regional newspapers within a year of original publication.\"" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Command of Evidence — Textual**\n\n**Choice C is correct.**\n\nThe student's claim: magazine slush-pile records are an *underused source* for studying early-twentieth-century literary taste. Choice C names a specific archive of slush-pile ledgers with editorial annotations on rejected stories — *and* notes that no other public source records this content. That's a direct illustration of slush-pile records filling a gap that no other source fills.\n\n**Why the wrong answers are tempting:**\n* Choice A: about subscribers, not editorial taste.\n* Choice B: about copy desks, not about preservation of taste-records.\n* Choice D: about reprinting, not about rejected-submission preservation."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "After the engineer Maya Khoury was hired by the city's transit authority in 1981 ____ she became the first woman in the agency's history to lead a signaling-systems team rather than to advise it from a research desk.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "1981, she" },
    { id: "B", text: "1981; she" },
    { id: "C", text: "1981: she" },
    { id: "D", text: "1981—she" }
  ],
  correctAnswer: "A",
  explanation: "Choice A correctly uses a comma after the leading subordinate clause introduced by *After*. A subordinate clause that precedes the main clause is set off from it by a comma.\n\n* Choice B: a semicolon joins two independent clauses; the opening clause here is dependent.\n* Choice C: a colon introduces a list, definition, or explanation.\n* Choice D: a dash cannot join a subordinate clause to its main clause."
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Although several smaller field surveys have suggested otherwise, the latest range-wide assessment of the snow leopard's mountain habitats ____ that the species' total population has remained nearly steady for two consecutive decades.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "indicate" },
    { id: "B", text: "indicates" },
    { id: "C", text: "have indicated" },
    { id: "D", text: "are indicating" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement**\n\n**Choice B is correct.**\n\nThe subject is *the latest range-wide assessment*, which is singular. So the verb must be singular: *indicates*. The intervening phrase \"of the snow leopard's mountain habitats\" is a prepositional decoration that doesn't change the subject's number.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb with singular subject.\n* Choice C: plural verb (and shifts tense unnecessarily).\n* Choice D: plural verb (and shifts to present continuous)."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The architect Janelle Frasier designed several large university libraries in the Pacific Northwest in the 1990s ____ her work on the Tacoma Public Music Hall, completed in 2002, is widely considered her most influential commission.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "1990s but her" },
    { id: "B", text: "1990s however, her" },
    { id: "C", text: "1990s; however, her" },
    { id: "D", text: "1990s, however, her" }
  ],
  correctAnswer: "C",
  explanation: "Choice C correctly joins two independent clauses with a semicolon before the conjunctive adverb *however* and a comma after it.\n\n* Choice A: \"1990s but her\" with no preceding punctuation creates a fused sentence.\n* Choice B: \"however,\" with no preceding punctuation also creates a fused sentence.\n* Choice D: a comma before *however* creates a comma splice; conjunctive adverbs cannot join independent clauses with only a comma."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "By the time the new community center opened to the public in 2021, the donated land on which it sat ____ idle for nearly four decades.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "has sat" },
    { id: "B", text: "sat" },
    { id: "C", text: "had sat" },
    { id: "D", text: "sits" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Verb Tense (Past Perfect)**\n\n**Choice C is correct.**\n\nTwo past events are described: the land sitting idle, and the opening of the community center. The sitting-idle is the *earlier* event, completed before the center opened. Past perfect (*had sat*) is required for the earlier of two past events.\n\n**Why the wrong answers are tempting:**\n* Choice A: present perfect (*has sat*) implies up to *now*, but the action ended in 2021.\n* Choice B: simple past (*sat*) doesn't capture the prior-to-2021 sequence.\n* Choice D: present tense doesn't fit a past timeline at all."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Dr. Kalinda Brave Bull ____ a soil ecologist whose research focuses on tallgrass prairie root systems ____ argues that the underground biomass of native grasses has been substantially undercounted in regional carbon-budget models.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Bull, a soil ecologist whose research focuses on tallgrass prairie root systems argues" },
    { id: "B", text: "Bull; a soil ecologist whose research focuses on tallgrass prairie root systems; argues" },
    { id: "C", text: "Bull—a soil ecologist whose research focuses on tallgrass prairie root systems—argues" },
    { id: "D", text: "Bull—a soil ecologist whose research focuses on tallgrass prairie root systems, argues" }
  ],
  correctAnswer: "C",
  explanation: "Choice C correctly uses paired dashes to set off the nonrestrictive appositive \"a soil ecologist whose research focuses on tallgrass prairie root systems.\" Nonrestrictive modifiers require matched punctuation on both sides.\n\n* Choice A: a single comma at the front and no closing mark leaves the appositive unbalanced and runs into the verb.\n* Choice B: semicolons cannot enclose a nonrestrictive modifier.\n* Choice D: mismatched dash + comma cannot frame a nonrestrictive element."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "Because the new arts grant is co-administered by two foundations, awardees deliver presentations at both institutions, and ____ work is reviewed semiannually by panels drawn from each foundation.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "their" },
    { id: "B", text: "they're" },
    { id: "C", text: "there" },
    { id: "D", text: "theirs" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Pronoun Agreement (Possessive)**\n\n**Choice A is correct.**\n\nThe pronoun refers back to *awardees* (plural). The blank is followed by *work* (a noun being modified), so a possessive pronoun is needed: \"their work.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"they're\" = \"they are\" — a contraction, not a possessive.\n* Choice C: \"there\" is a location word, not a pronoun.\n* Choice D: \"theirs\" is a possessive pronoun used without a following noun; here a noun (*work*) immediately follows."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The pianist Lucia Bevilacqua began her career as a soloist with major chamber-music festivals across Italy. ____ in her late thirties she turned increasingly to teaching at a small conservatory near her hometown, where she felt the slower pace suited her temperament.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "For example," },
    { id: "B", text: "However," },
    { id: "C", text: "Likewise," },
    { id: "D", text: "In addition," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice B is correct.**\n\nThe first sentence describes Bevilacqua's solo-festival career. The second sentence describes a *change* — turning to teaching at a small conservatory. The two sentences contrast, so a contrast transition (\"However,\") fits.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"For example\" needs the second sentence to be an instance of the first; here it's a *change*, not an instance.\n* Choice C: \"Likewise\" suggests similarity; the sentences are different, not similar.\n* Choice D: \"In addition\" suggests adding a similar item; this is a turning point, not an addition."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "Engineers designing the new harbor walkway initially proposed a continuous concrete pier that would have stood in front of several historic warehouses. The city's preservation board, however, asked that the design preserve sight lines from the warehouses to the water. ____ the architects revised the plan, breaking the pier into three smaller piers connected by lighter open-grate walkways that would not block the views.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Accordingly," },
    { id: "B", text: "Nevertheless," },
    { id: "C", text: "Meanwhile," },
    { id: "D", text: "For instance," }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Transitions (Cause/Effect)**\n\n**Choice A is correct.**\n\nThe preservation board *asked* for a more respectful design; the architects then *revised* the plan. The second action is a direct response to the first — that's a cause-effect relationship, signaled by \"Accordingly.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: \"Nevertheless\" implies they revised *despite* the request, but they revised *because of* the request.\n* Choice C: \"Meanwhile\" suggests simultaneous unrelated action.\n* Choice D: \"For instance\" introduces an example, not a response."
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
      "Lake Vostok is a subglacial lake in Antarctica buried beneath roughly 4 kilometers of ice.",
      "The lake has been isolated from the surface for an estimated 15 million years.",
      "Russian scientists drilled through the overlying ice and reached the lake's surface in 2012.",
      "Water samples from the lake have been recovered without contaminating the underlying lake water.",
      "Genetic analysis of those samples has identified microbial DNA from previously undescribed lineages."
    ],
    goal: "The student wants to emphasize the scientific significance of the recent sampling missions to Lake Vostok."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Lake Vostok lies under roughly 4 kilometers of Antarctic ice and has been isolated for an estimated 15 million years." },
    { id: "B", text: "Russian scientists drilled through the ice covering Lake Vostok in 2012 and recovered water samples without contaminating the underlying lake water." },
    { id: "C", text: "Water samples recovered from Lake Vostok have been analyzed genetically, identifying microbial DNA from previously undescribed lineages." },
    { id: "D", text: "Lake Vostok is a subglacial lake in Antarctica buried beneath roughly 4 kilometers of ice." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal: emphasize the *scientific significance* of the recent sampling missions. Choice C names the missions' result — genetic analysis identifying previously undescribed microbial lineages. That's exactly the scientific significance.\n\n**Why the wrong answers are tempting:**\n* Choice A: facts about depth and isolation, not about the missions' significance.\n* Choice B: mentions the missions but stops at \"recovered water samples\" — doesn't say what made them significant.\n* Choice D: a basic geographic fact, not about the missions."
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
      "Hedy Lamarr (1914–2000) was an Austrian-American actress and inventor.",
      "In 1942, Lamarr and composer George Antheil patented a frequency-hopping radio system intended to make torpedo guidance signals harder to jam.",
      "The patent went largely unused during World War II and was overlooked for decades.",
      "Frequency-hopping techniques were later incorporated into modern wireless technologies including Wi-Fi and Bluetooth.",
      "Some historians of technology argue that the 1942 patent entitles Lamarr to be considered a pioneer of modern wireless communication; others stress that the technology that powers Wi-Fi and Bluetooth differs in important ways from her original system."
    ],
    goal: "The student wants to highlight a point of disagreement among historians regarding Lamarr's legacy."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Hedy Lamarr was an Austrian-American actress and inventor who lived from 1914 to 2000." },
    { id: "B", text: "Lamarr and George Antheil patented a frequency-hopping radio system in 1942." },
    { id: "C", text: "While some historians argue that Lamarr's 1942 patent entitles her to be considered a pioneer of modern wireless communication, others stress that today's Wi-Fi and Bluetooth differ in important ways from her original system." },
    { id: "D", text: "Lamarr's 1942 patent went largely unused during World War II and was overlooked for decades." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes)**\n\n**Choice C is correct.**\n\nThe goal: highlight a *disagreement among historians*. Choice C names two opposing camps directly: some say pioneer; others stress the technological differences. That's exactly the disagreement.\n\n**Why the wrong answers are tempting:**\n* Choice A: biographical fact, no disagreement.\n* Choice B: a fact about the patent, no disagreement.\n* Choice D: a fact about the patent's reception, no disagreement."
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
  passage: "When the metallurgist Marguerite Perey developed a stable casting process for francium-doped reagents at her institute in 1942, she was solving a practical problem that had vexed researchers for years: the unstable element decayed so quickly in raw form that few experiments could ________ enough material to obtain reliable measurements.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "approve" },
    { id: "B", text: "preserve" },
    { id: "C", text: "indulge" },
    { id: "D", text: "appreciate" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Words in Context (Fill-in)**\n\n**Choice B is correct.**\n\nFrancium \"decayed so quickly,\" so the experiments could not *preserve* enough of it for reliable measurements. \"Preserve\" matches the sense of holding material long enough to use it.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"approve\" doesn't fit — experiments aren't granting permission.\n* Choice C: \"indulge\" suggests permitting freely, not retaining a decaying material.\n* Choice D: \"appreciate\" suggests valuing or enjoying — the wrong dimension entirely."
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Craft and Structure",
  skill: "words-in-context",
  passage: "The architect Carmen Nieves was famously reluctant to publish theoretical statements about her work, preferring instead to let her individual buildings — the Mercado de las Salinas in Veracruz, for instance — make her arguments for her. The few prose statements she did issue were ________: short, declarative, and unwilling to dwell on the kinds of qualifications a more academic writer might add.",
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
  passage: "The astronomer al-Battānī's tenth-century treatise *Kitāb al-Zīj* treats orbital mean motions and eclipse calculations with a precision that European astronomy would not match for another six centuries. Modern historians of science are careful to note, however, that al-Battānī's contribution was not the *invention* of these methods but rather their ________: he refined and reorganized scattered Hellenistic and earlier Arabic computational techniques into a single coherent set of procedures.",
  question: "Which choice completes the text with the most logical and precise word or phrase?",
  choices: [
    { id: "A", text: "rejection" },
    { id: "B", text: "popularization" },
    { id: "C", text: "consolidation" },
    { id: "D", text: "translation" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Words in Context (Fill-in, Hard)**\n\n**Choice C is correct.**\n\nThe colon explains the missing word: he \"refined and reorganized\" \"scattered\" techniques into \"a single coherent set of procedures.\" Bringing scattered things together into one system = *consolidation*.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"rejection\" is the opposite — he kept and reorganized them.\n* Choice B: \"popularization\" is about spreading widely; the context is about organizing internally.\n* Choice D: \"translation\" usually concerns languages, not procedures being merged."
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "In a 2023 review of population-genetics studies of the kakapo, a flightless parrot endemic to New Zealand, biologist Aroha Tipene concedes that the species' geographic isolation has historically protected its genetic diversity from severe bottlenecks. __Tipene argues that this same protection now leaves the species vulnerable: a population that has not had to evolve responses to pathogens carried by mainland avian species is unlikely to carry the latent immune variation needed to do so quickly when those pathogens reach offshore island sanctuaries.__ Tipene ends the review by calling for more sustained monitoring of immune-gene variation across the surviving subpopulations rather than for any single conservation intervention.",
  question: "Which choice best describes the function of the underlined sentence in the text as a whole?",
  choices: [
    { id: "A", text: "It introduces a counterargument that the rest of the passage will refute." },
    { id: "B", text: "It reframes a feature presented as protective in the previous sentence as also a source of vulnerability." },
    { id: "C", text: "It calls into question the reliability of the population-genetics studies the review covers." },
    { id: "D", text: "It compares the kakapo to another species facing similar pressures." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Text Structure and Purpose (Hard)**\n\n**Choice B is correct.**\n\nThe sentence before says isolation has *protected* diversity. The underlined sentence pivots: that very protection is now a *vulnerability* because the population hasn't evolved responses to mainland pathogens. The sentence reframes the protective feature as also a vulnerability.\n\n**Why the wrong answers are tempting:**\n* Choice A: it's not a counterargument; it's an extension that complicates the previous claim.\n* Choice C: nothing in the text questions the studies.\n* Choice D: no comparison to another species."
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Craft and Structure",
  skill: "text-structure-and-purpose",
  passage: "The following text is adapted from Anaya Whittaker's 2022 short story \"The Last Round.\" Mae, a longtime potter, is checking her kiln at the close of a firing.\n\nMae moved along the row of kiln shelves, lifting each cone-pack just enough to read it and replacing it before the heat could shift inside. __The color that came up from each chamber was different — orange in the strong chambers, paler in the ones whose elements had begun to fail — and she had learned over thirty firings to read it without opening the door at all.__ Her teacher, who had taught her, used to say a kiln that was wrong with you would say so plainly; she had come to believe it would say so once, and only quietly.",
  question: "Which choice best describes the function of the underlined sentence in the text?",
  choices: [
    { id: "A", text: "It introduces a piece of expert knowledge that motivates the rest of the description." },
    { id: "B", text: "It contrasts Mae's experience with that of an apprentice she has been training." },
    { id: "C", text: "It questions the reliability of color cues for assessing kiln temperature." },
    { id: "D", text: "It breaks the chronological order of the scene to flash back to an earlier firing." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Text Structure and Purpose (Literary)**\n\n**Choice A is correct.**\n\nThe underlined sentence introduces what Mae *knows*: she can read the kiln's state from color alone. The next sentence builds on that with her teacher's saying — extending the idea. The sentence is the engine for the description.\n\n**Why the wrong answers are tempting:**\n* Choice B: no apprentice is mentioned.\n* Choice C: the passage trusts the color cues; it doesn't question them.\n* Choice D: there's no flashback — the present moment continues."
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
      text: "A growing body of research in cognitive psychology suggests that reading on paper leads to better long-term comprehension than reading on a screen. Researchers attribute the effect to the spatial layout of paper, which gives readers stable physical landmarks for locating and reviewing key claims later."
    },
    {
      label: "Text 2",
      text: "Educational researcher Kofi Asante points out that nearly all of the studies in this literature compare paper to backlit smartphone or laptop screens, and he questions whether the conclusion would extend to reading on e-ink devices, where display is reflective and stable rather than backlit and refresh-driven. Until comparative studies are run, Asante argues, the modality-specific claims should be treated as provisional."
    }
  ],
  question: "Based on the texts, how would Asante (Text 2) most likely respond to the claim made by the researchers in Text 1?",
  choices: [
    { id: "A", text: "By rejecting the claim outright as an artifact of obsolete technology." },
    { id: "B", text: "By accepting the claim but pointing out that the *cause* identified by the researchers may be wrong." },
    { id: "C", text: "By accepting the paper-vs-backlit-screen finding but cautioning that the broader \"paper beats screens\" generalization has not been tested against e-ink devices." },
    { id: "D", text: "By insisting that any comparison of reading modalities is unreliable because individual reading habits vary too much." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Cross-Text Connections (Hard)**\n\n**Choice C is correct.**\n\nAsante doesn't reject the studies — he says the comparison is \"paper vs. backlit smartphone or laptop screens,\" so the *narrow* finding stands. But he questions whether the *broader* generalization holds against e-ink, which hasn't been tested. That's exactly choice C: accept the narrow finding, caution about the broader claim.\n\n**Why the wrong answers are tempting:**\n* Choice A: he doesn't reject the claim; he calls it provisional.\n* Choice B: he doesn't dispute the *cause*; he disputes the *scope*.\n* Choice D: he doesn't generalize about all comparisons; he focuses on the missing modality."
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
      text: "The novelist Tariq Hadfield frequently describes his composition process in technological terms — he speaks of \"branching\" a draft the way a programmer might branch a code repository, and he has said that his late-stage revision is closer to merge-conflict resolution than to rewriting. Several recent profiles have presented this language as evidence of a generational shift in how novelists conceive of their craft."
    },
    {
      label: "Text 2",
      text: "Literary historian Ngozi Awolowo finds the claim of a generational shift overstated. She notes that earlier generations of novelists — Henry James's revisions of *The Portrait of a Lady*, for instance, or Toni Morrison's working notebooks — show a similarly mechanical, iterative conception of the craft, even if the metaphors of the day were drawn from architecture or weaving rather than from version-control software."
    }
  ],
  question: "Based on the texts, how would Awolowo (Text 2) most likely characterize the generational-shift claim?",
  choices: [
    { id: "A", text: "a fundamentally new insight that earlier critics missed." },
    { id: "B", text: "a misreading produced by attending to changing metaphors rather than to underlying compositional habits." },
    { id: "C", text: "an accurate description of the shift in novel-writing that has occurred since the 1990s." },
    { id: "D", text: "a claim that should be settled by surveying contemporary novelists directly." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cross-Text Connections (Hard)**\n\n**Choice B is correct.**\n\nAwolowo argues that *earlier* novelists had \"a similarly mechanical, iterative conception of the craft\" — the metaphors changed (architecture/weaving → version-control), but the underlying habits did not. So the \"generational shift\" claim mistakes a metaphor change for a habit change.\n\n**Why the wrong answers are tempting:**\n* Choice A: she calls the claim *over*stated, not insightful.\n* Choice C: she disagrees that there's been a shift.\n* Choice D: she doesn't propose a survey; she draws on historical examples already."
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Geologists studying the limestone caves of southern Yucatán have long puzzled over their distinctive reddish staining. Standard models of cave formation would predict darker iron-oxide layering throughout the wall sections, given the iron-rich groundwater of the surrounding watershed. A recent study by mineralogist Eduardo Solís argues that the caves' coloring is not a sign of unusual deposition but of selective leaching: weaker, paler limestone bands dissolved faster than the iron-saturated layers, exposing the present cave walls in cross-sections skewed toward the reddish rock that simply held up best.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "The limestone caves of southern Yucatán formed under unusual sedimentary conditions that produced unusually reddish rock." },
    { id: "B", text: "The reddish coloring of the limestone caves is the result of selective leaching rather than of unusual deposition." },
    { id: "C", text: "The watershed surrounding the caves lacks the iron-rich groundwater that geologists once assumed." },
    { id: "D", text: "The limestone caves were misclassified by earlier geologists." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage frames a puzzle (why so reddish?) and then names Solís's answer: not unusual deposition, but selective leaching. That's the main idea.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the model the passage *rejects*.\n* Choice C: the passage doesn't say the iron-rich groundwater is absent — only that the paler layers eroded.\n* Choice D: \"misclassified\" overshoots; the passage says the *explanation* was wrong, not the classification."
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "When the linguist Tunde Adebayo began documenting the Igede language of central Nigeria in the 1980s, the dominant assumption among Western linguists was that minority languages would gradually conform to the grammar of the majority languages around them. Adebayo's forty-year corpus has not borne that assumption out. Although Igede speakers are typically also fluent in English and in Hausa, the Igede grammatical system has not collapsed toward either of those majority patterns; if anything, in the past decade it has *increased* its number of distinct tonal contrasts, several of which lack any direct equivalent in the surrounding majority languages.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Igede grammar has slowly converged with English and Hausa grammar over the past forty years." },
    { id: "B", text: "Adebayo's research challenges the long-standing expectation that minority languages erode toward the grammar of the majority languages around them." },
    { id: "C", text: "Speakers of Igede can no longer communicate effectively with English speakers because the grammars have diverged." },
    { id: "D", text: "All English speakers in central Nigeria are at least bilingual in Igede." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details (Hard)**\n\n**Choice B is correct.**\n\nThe passage opens with the dominant *expectation* (minority languages converge to majority grammar), then offers Adebayo's *contrary* forty-year corpus. The main idea is the challenge to the expectation.\n\n**Why the wrong answers are tempting:**\n* Choice A: this is the *expectation* the passage rebuts.\n* Choice C: the passage says speakers are fluent in English and Hausa; communication isn't blocked.\n* Choice D: about English speakers, which the passage doesn't address."
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "central-ideas-and-details",
  passage: "Beginning in the 1890s, several northern European cities began both treating raw sewage at outflow stations and laying clay storm-sewer separation lines to keep rainfall away from the sewage system entirely. The historian Solveig Andersson has shown that, contrary to a common perception, the typhoid declines that followed cannot be attributed to any one component of these systems; her decade-by-decade reconstruction of municipal-health records suggests that the outflow treatment alone produced a measurable but partial decline, and that the steeper drop came once the storm-sewer separation lines were added on top.",
  question: "Which choice best states the main idea of the text?",
  choices: [
    { id: "A", text: "Storm-sewer separation is more important than outflow treatment for preventing waterborne disease." },
    { id: "B", text: "Andersson's reconstruction shows that the public-health gains came from the *combined* effect of outflow treatment and storm-sewer separation, not from either component alone." },
    { id: "C", text: "Most northern European cities installed storm-sewer separation before installing outflow treatment." },
    { id: "D", text: "The decline in typhoid in northern European cities was caused mostly by changes in residential plumbing." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Central Ideas and Details**\n\n**Choice B is correct.**\n\nThe passage's framing: the declines \"cannot be attributed to any one component.\" Andersson's data: outflow treatment alone was partial; the steeper drop came once storm-sewer separation was *added on top*. The main idea is the combined effect.\n\n**Why the wrong answers are tempting:**\n* Choice A: too narrow — separation's role is real but not solo.\n* Choice C: the passage doesn't claim a sequence of installations.\n* Choice D: residential plumbing isn't discussed."
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "When archaeologists excavating a 12th-century Mediterranean coastal warehouse recovered hundreds of intact amphorae, each containing residues of olive oil, several reconstructions of Genoese trade networks were updated to assume that long-distance maritime transport of olive oil from the Aegean had been routine. A recent isotope study of the amphorae themselves, however, found that the clay used to make them came from a single source within twenty kilometers of the warehouse. The amphorae, that is, did not travel with the oil; the oil was almost certainly produced and stored locally. The earlier reconstructions of long-distance maritime transport, the new study concludes, were _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "supported by the new isotope evidence." },
    { id: "B", text: "based on a misreading of evidence about the *amphorae* as evidence about the *oil*." },
    { id: "C", text: "consistent with the trade practices of contemporary Aegean states." },
    { id: "D", text: "based on a misreading of the warehouse *volume* as evidence about household size." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice B is correct.**\n\nThe passage's logic: people had assumed olive oil traveled long distances. But the *amphorae* were local. So the earlier reconstruction had treated the amphorae as evidence about the oil's transport, when in fact they were only evidence about *amphora* origin. That's exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: the new evidence *contradicts* the earlier reconstruction; it doesn't support it.\n* Choice C: the passage doesn't compare to other contemporary states.\n* Choice D: the passage doesn't connect warehouse volume to household size."
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "In a 2022 review of pesticide-resistance trends in commercial orchards, entomologist Yuki Aramaki reported that orchards in operations that adopted high-frequency pheromone trap monitoring of pest populations showed *lower* rates of resistance development than orchards in operations that did not. Counterintuitively, more frequent monitoring usually entails more pesticide applications, not fewer. Aramaki's analysis of the same operations shows that the monitored orchards sprayed *earlier and more narrowly* — targeting individual blocks of trees showing pest pressure rather than the whole orchard — which suggests that the monitoring's effect on resistance is mediated through _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "the total volume of pesticide use in the orchard." },
    { id: "B", text: "the *precision* of pesticide use rather than its raw volume." },
    { id: "C", text: "the genetic background of the pest populations in question." },
    { id: "D", text: "the willingness of orchard managers to follow regulatory guidelines." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice B is correct.**\n\nThe puzzle: more monitoring → more applications, but *less* resistance. Aramaki's resolution: monitored orchards targeted *individual blocks* rather than the whole orchard. That's not a volume difference; it's a *precision* difference.\n\n**Why the wrong answers are tempting:**\n* Choice A: the data Aramaki presents focuses on targeting, not raw volume.\n* Choice C: genetic background isn't mentioned.\n* Choice D: regulation isn't the variable Aramaki is investigating."
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "inferences",
  passage: "Phonologists analyzing recordings of Yoruba speakers from the 1960s and from the present day have noted that the modern speakers produce a slightly narrower frequency separation between the high and mid level tones. The shift is small — a difference of about 8 hertz on average — and well within the range of natural articulatory variation. Nonetheless, several researchers have argued that the change should not be dismissed: in a language where tonal contrast carries lexical meaning, even a small statistical shift, if it is consistent across speakers and stable across decades, can _______",
  question: "Which choice most logically completes the text?",
  choices: [
    { id: "A", text: "be ignored as articulatory noise without consequences for meaning." },
    { id: "B", text: "be expected to reverse itself within a generation." },
    { id: "C", text: "indicate a quiet shift in the underlying tonal system that may eventually merge previously distinct words." },
    { id: "D", text: "prove that recordings from the 1960s were poorly calibrated." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Inferences (Logical Completion, Hard)**\n\n**Choice C is correct.**\n\nThe passage tells us: in this language *tonal contrast carries lexical meaning* (i.e., tones distinguish *words*). A small but consistent narrowing of tone separation, sustained over decades, could quietly erode that contrast — and so could merge previously distinct words. That's choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: contradicts the passage's central claim that the change matters precisely *because* tone carries contrast.\n* Choice B: nothing predicts a reversal.\n* Choice D: the passage trusts the recordings; the issue is real change, not calibration error."
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "An economist examined the effect of a metropolitan region's switch to congestion pricing on weekday transit ridership and on car-trip counts at four monitored bridges. The economist predicted that ridership would rise and that car trips across the same bridges would fall.",
  questionTable: {
    type: "table",
    caption: "Average weekday transit boardings and bridge car-trips, before vs. one year after congestion pricing",
    headers: ["Bridge", "Boardings before", "Boardings after", "Car trips before", "Car trips after"],
    rows: [
      ["Northgate", "5,400", "7,200", "18,100", "16,200"],
      ["Eastlake", "3,900", "5,300", "13,500", "12,100"],
      ["Westwood", "6,200", "8,000", "20,800", "18,700"],
      ["Sound View", "2,800", "4,000", "10,400", "9,300"]
    ]
  },
  question: "Which choice best describes data from the table that support the economist's prediction?",
  choices: [
    { id: "A", text: "At every bridge, transit boardings rose after the policy change while car trips across the same bridge fell." },
    { id: "B", text: "Westwood had the highest absolute number of boardings both before and after the policy." },
    { id: "C", text: "Sound View had the lowest car-trip counts before and after the policy." },
    { id: "D", text: "Across the four bridges, the increase in boardings averaged about 1,550 per day." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative**\n\n**Choice A is correct.**\n\nThe prediction has *two* parts: ridership rises AND car trips fall. Choice A confirms BOTH at every bridge. Sweeping across all rows is what \"the prediction\" requires.\n\n**Why the wrong answers are tempting:**\n* Choice B: a single-bridge ranking, doesn't address the prediction.\n* Choice C: about absolute counts, not change.\n* Choice D: only addresses ridership; doesn't address the second half of the prediction."
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "Recent scholarship has reexamined the role of women librarians in shaping early-twentieth-century American public reading. A graduate student is writing a paper that argues these librarians did more than catalog and circulate existing collections — they actively shaped what counted as serious popular literature for their reading publics through targeted acquisitions and curated displays.",
  question: "Which quotation from a hypothetical study would best support the student's claim?",
  choices: [
    { id: "A", text: "\"Librarians of the period were typically paid by the hour rather than by salaried contract.\"" },
    { id: "B", text: "\"Several librarians systematically acquired translations of contemporary European fiction and added curated front-room displays framing those works as exemplars of a new serious popular literature.\"" },
    { id: "C", text: "\"Most librarians of the period were trained at one of three regional library schools.\"" },
    { id: "D", text: "\"Public-library employment was one of few professional avenues by which women could publish acquisition lists in their own names.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual (Hard)**\n\n**Choice B is correct.**\n\nThe student's claim: librarians *shaped* popular literary taste through acquisitions and curated displays, not merely circulated existing books. Choice B is exactly that — librarians *acquired* European translations and added *curated displays* presenting them as a new serious popular literature. That's shaping, not transmitting.\n\n**Why the wrong answers are tempting:**\n* Choice A: payment terms don't speak to the shaping claim.\n* Choice C: the training pattern doesn't address shaping.\n* Choice D: a fact about access for women, but not specifically about *shaping* literary taste."
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Information and Ideas",
  skill: "command-of-evidence-quantitative",
  passage: "A team of soil scientists compared two grazing strategies — continuous grazing on a single pasture and rotational grazing across multiple paddocks — on soil-organic-carbon (SOC) levels at four ranches in the same region after four growing seasons. The team predicted that the rotational strategy would increase SOC more than the continuous strategy.",
  questionTable: {
    type: "table",
    caption: "Soil-organic-carbon change (g/kg), four seasons",
    headers: ["Ranch", "Continuous grazing", "Rotational grazing"],
    rows: [
      ["Ridge", "+1.2", "+2.5"],
      ["Hollow", "+1.0", "+2.3"],
      ["Plateau", "+1.4", "+2.7"],
      ["Bench", "+1.1", "+2.4"]
    ]
  },
  question: "Which choice best describes data from the table that support the team's prediction?",
  choices: [
    { id: "A", text: "At every ranch, rotational grazing produced a larger SOC increase than continuous grazing, with the rotational advantage ranging from 1.3 to 1.3 g/kg." },
    { id: "B", text: "Plateau recorded the largest absolute SOC increase under rotational grazing." },
    { id: "C", text: "Across the four ranches, the average SOC increase under continuous grazing was approximately 1.2 g/kg." },
    { id: "D", text: "Under rotational grazing, no ranch recorded an SOC increase smaller than 2.3 g/kg." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Command of Evidence — Quantitative (Hard)**\n\n**Choice A is correct.**\n\nThe prediction is a *comparative* one: rotational > continuous. Choice A directly supports it: at every ranch the rotational figure exceeds the continuous figure, and the gap is consistent (1.3 g/kg). Sweep + comparison.\n\n**Why the wrong answers are tempting:**\n* Choice B: about a single ranch, no comparison to the alternative.\n* Choice C: only the continuous summary; no comparison.\n* Choice D: only the rotational summary; no comparison."
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  domain: "Information and Ideas",
  skill: "command-of-evidence-textual",
  passage: "An urban-history student is writing a paper that argues the rapid spread of penny-press newspapers in mid-nineteenth-century American cities reorganized political conversation within working-class neighborhoods, even before formal labor unions established their own publication networks.",
  question: "Which quotation from a hypothetical study would best support the student's claim?",
  choices: [
    { id: "A", text: "\"By 1880, the largest labor-union papers in New York reached a combined weekly circulation of half a million copies.\"" },
    { id: "B", text: "\"Workers surveyed in tenement boardinghouses in the 1840s reported that the introduction of one-cent papers allowed shop-floor disagreements to be argued with reference to a shared printed account, far more frequently than verbal rumor had previously permitted.\"" },
    { id: "C", text: "\"By 1860, daily newspaper subscriptions in surveyed American cities exceeded any earlier decade's circulation by a factor of three.\"" },
    { id: "D", text: "\"Many mid-nineteenth-century American cities experienced significant immigration from Ireland and Germany throughout the 1840s.\"" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Command of Evidence — Textual (Hard)**\n\n**Choice B is correct.**\n\nThe student's claim is specific: penny-press papers reorganized political conversation *within working-class neighborhoods*, *even before* labor unions had their own publications. Choice B describes that exact mechanism — workers in 1840s tenements reporting that one-cent papers (pre-union-press) let shop-floor disagreements be argued with reference to a shared printed account. That's a reorganization of working-class political conversation before the union-press period.\n\n**Why the wrong answers are tempting:**\n* Choice A: about union papers post-establishment — exactly *not* the pre-union-press period the claim concerns.\n* Choice C: a fact about subscription levels, not about political reorganization.\n* Choice D: about immigration, not about the penny press's effects on political conversation."
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "The architect Yusuf Adisa spent the years 1989 to 1994 refusing all major commissions ____ during this period he produced no built work but kept extensive sketchbooks describing the buildings he could not yet make.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "commissions, during" },
    { id: "B", text: "commissions: during" },
    { id: "C", text: "commissions; during" },
    { id: "D", text: "commissions—during" }
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
  passage: "Despite the workshop renovations completed in 2020, the engineering department's primary fabrication laboratory, along with two of its smaller component-testing rooms, ____ still considered functionally inadequate by most of the visiting industry partners.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "are" },
    { id: "B", text: "is" },
    { id: "C", text: "have been" },
    { id: "D", text: "were" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement (Intervening Phrase)**\n\n**Choice B is correct.**\n\nThe subject is *the engineering department's primary fabrication laboratory*, which is singular. The phrase \"along with two of its smaller component-testing rooms\" is a parenthetical accompanying-noun construction, not a compound subject. Verbs agree with the head subject only.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb with singular subject.\n* Choice C: plural verb (and shifts tense).\n* Choice D: plural verb (and shifts tense)."
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Among the artifacts found in the long-sealed expedition crate ____ a hand-drawn map of the river bend and a small notebook bound in dark green cloth that the archivist could not date.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "crate, were" },
    { id: "B", text: "crate: were" },
    { id: "C", text: "crate; were" },
    { id: "D", text: "crate were" }
  ],
  correctAnswer: "D",
  explanation: "Choice D correctly takes no punctuation between the fronted prepositional phrase and the verb. This is an inverted sentence — the subject (the list of artifacts) follows the verb *were*. In an inverted sentence, no mark separates the prepositional opener from the verb that follows.\n\n* Choice A: a comma between the subject and the verb is a familiar error pattern.\n* Choice B: a colon would require the preceding text to stand as an independent clause, which the prepositional phrase is not.\n* Choice C: a semicolon would require two independent clauses on either side; only one clause is present."
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "The selection committee has reviewed every nominated case file twice and ____ to announce the inaugural prize at the autumn convocation.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "intend" },
    { id: "B", text: "intends" },
    { id: "C", text: "are intending" },
    { id: "D", text: "have intended" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subject-Verb Agreement (Collective Noun)**\n\n**Choice B is correct.**\n\n*The committee* is a collective noun acting as a single body here (it has \"reviewed every nominated case file twice\" — coordinated action). The singular *intends* matches.\n\n**Why the wrong answers are tempting:**\n* Choice A: plural verb.\n* Choice C: plural verb (and present continuous shifts the rhythm).\n* Choice D: plural verb."
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "boundaries",
  passage: "Akira Tanaka ____ a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery ____ has accepted the commission to redesign the river crossing on the southern edge of the Old Quarry District.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Tanaka, a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery has" },
    { id: "B", text: "Tanaka—a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery—has" },
    { id: "C", text: "Tanaka, a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery—has" },
    { id: "D", text: "Tanaka; a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery; has" }
  ],
  correctAnswer: "B",
  explanation: "Choice B correctly uses paired dashes to set off the nonrestrictive appositive \"a structural engineer best known for designing pedestrian bridges that emphasize exposed timber joinery.\"\n\n* Choice A: a leading comma without a closing mark leaves the appositive unbalanced.\n* Choice C: mismatched comma + dash cannot frame a nonrestrictive element.\n* Choice D: semicolons cannot enclose a nonrestrictive modifier."
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Standard English Conventions",
  skill: "form-structure-and-sense",
  passage: "____ on the windward slope of the headland in the late nineteenth century, the granite-walled lighthouse keeper's cottage originally served as a residence for the families that operated the regional coastal beacons.",
  question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
  choices: [
    { id: "A", text: "Built" },
    { id: "B", text: "After building" },
    { id: "C", text: "Having built" },
    { id: "D", text: "While building" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Modifier Placement (Dangling Modifier)**\n\n**Choice A is correct.**\n\nThe sentence's main subject is *the granite-walled lighthouse keeper's cottage*. The introductory phrase modifies the cottage. \"Built on the windward slope...\" is a past participial phrase that correctly attaches to the cottage (the cottage *was* built there).\n\n**Why the wrong answers are tempting:**\n* Choice B: \"After building...\" implies the cottage was doing the building — a dangling modifier.\n* Choice C: \"Having built...\" same problem — implies the cottage built something.\n* Choice D: \"While building...\" same problem."
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The first phase of the regional water-system upgrade focused on replacing decades-old transmission mains, work that produced few visible changes for residential customers. ____ when the second phase opened the new pressure-zone valves in 2024, average household water-pressure readings across the network rose by nearly thirty-five percent within a single quarter.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "However," },
    { id: "B", text: "Likewise," },
    { id: "C", text: "For example," },
    { id: "D", text: "Meanwhile," }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Transitions (Contrast)**\n\n**Choice A is correct.**\n\nFirst sentence: phase 1 produced *few visible changes*. Second sentence: phase 2 produced a *dramatic visible change* (35% rise in pressure). That's a contrast — the visible-effect story flips. \"However\" fits.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"Likewise\" implies similarity, but the visible-effect outcomes are opposites.\n* Choice C: \"For example\" needs the second sentence to instance the first.\n* Choice D: \"Meanwhile\" suggests simultaneous unrelated activity, but the second phase came *after*."
},
{
  id: 25,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  domain: "Expression of Ideas",
  skill: "transitions",
  passage: "The early advocates of permeable-pavement systems in temperate cities argued that the porous surface would substantially reduce summer street-flooding events in the neighborhoods that adopted it. Two decades of empirical work has not borne out the strong version of that claim. ____ a more modest finding has emerged: permeable pavements reliably extend the working lifetime of the underlying roadbed, often by fifteen years or more.",
  question: "Which choice completes the text with the most logical transition?",
  choices: [
    { id: "A", text: "Moreover," },
    { id: "B", text: "In its place," },
    { id: "C", text: "For example," },
    { id: "D", text: "Conversely," }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transitions (Replacement)**\n\n**Choice B is correct.**\n\nThe passage says the strong street-flooding claim has not been borne out. *In its place* — i.e., replacing that claim — a more modest finding (roadbed longevity) has emerged. That's a substitution-style transition.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Moreover\" adds in the same direction; here the second finding is replacing the first, not adding to it.\n* Choice C: \"For example\" treats the second finding as an instance of the first; the second finding is *different*.\n* Choice D: \"Conversely\" implies opposition; the new finding isn't the opposite, it's a substitute."
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
      "Wang Zhenyi (1768–1797) was a Chinese astronomer and mathematician of the Qing dynasty.",
      "She was largely self-taught because formal academies of the period were closed to women.",
      "She wrote a widely circulated treatise explaining the cause of lunar eclipses through a clear physical model.",
      "She also reorganized contemporary mathematical texts to be more accessible to beginning readers, with worked examples in plain language.",
      "Her early death at twenty-nine prevented her from realizing her plan to write a comprehensive astronomy textbook for women students."
    ],
    goal: "The student wants to emphasize the obstacles Wang overcame to produce her astronomical work."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Wang Zhenyi, a Chinese astronomer and mathematician, lived from 1768 to 1797." },
    { id: "B", text: "Largely self-taught because formal academies of the period were closed to women, Wang Zhenyi wrote a widely circulated treatise explaining the cause of lunar eclipses through a clear physical model." },
    { id: "C", text: "Wang Zhenyi planned to write a comprehensive astronomy textbook for women students but died at twenty-nine before completing it." },
    { id: "D", text: "Wang Zhenyi reorganized contemporary mathematical texts to be more accessible to beginning readers." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes — Hard)**\n\n**Choice B is correct.**\n\nThe goal: emphasize the *obstacles Wang overcame to produce her astronomical work*. Choice B names the obstacle (academies closed to women, forcing self-study) AND the work she produced despite it (a widely circulated treatise on lunar eclipses). That's exactly obstacle + overcoming.\n\n**Why the wrong answers are tempting:**\n* Choice A: just identifies her — no obstacle, no overcoming.\n* Choice C: about her unrealized plans, not about her astronomical work.\n* Choice D: about her math accessibility work, not about the obstacle."
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
      "Lake Chad, located in the Sahel region of west-central Africa, was once one of the largest lakes on the African continent.",
      "Beginning in the 1960s, prolonged drought and large-scale upstream irrigation diversions reduced inflow to the lake.",
      "By 2007, Lake Chad's surface area had shrunk to roughly 10% of its 1960s extent.",
      "In 2010, several riparian governments coordinated a renewed regulation of upstream water diversions in the eastern subregion.",
      "Within a decade of the new regulation, the eastern reach of the lake had partially recovered while the southern reach continued to shrink."
    ],
    goal: "The student wants to draw a contrast between the trajectories of the eastern and southern reaches of Lake Chad after 2010."
  },
  question: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
  choices: [
    { id: "A", text: "Lake Chad was once one of the largest lakes on the African continent but has shrunk dramatically since the 1960s." },
    { id: "B", text: "By 2007, Lake Chad had shrunk to roughly 10% of its 1960s extent, while in 2010 several riparian governments coordinated a renewed regulation of upstream water diversions." },
    { id: "C", text: "After 2010, when several riparian governments renewed regulation of upstream water diversions in the eastern subregion, the eastern reach of Lake Chad partially recovered while the southern reach continued to shrink." },
    { id: "D", text: "Several riparian governments coordinated a renewed regulation of upstream water diversions in 2010." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rhetorical Synthesis (Notes — Hard)**\n\n**Choice C is correct.**\n\nThe goal: *contrast* the eastern and southern reaches of Lake Chad after 2010. Choice C names BOTH halves of the contrast: the eastern reach partially recovered, *while* the southern reach continued to shrink (with the regulatory action as the framing event). That's a true contrast.\n\n**Why the wrong answers are tempting:**\n* Choice A: a general fact, no contrast between eastern and southern reaches.\n* Choice B: about overall shrinkage and regulation, no contrast between reaches.\n* Choice D: about the regulation alone, no comparison of reaches."
}
      ]
    }
  ]
};
