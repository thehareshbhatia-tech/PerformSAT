// Practice Test 6 — SAT Reading & Writing (R&W)
// R&W seating varied 2026-09-07 (scripts/varyRWSeating.mjs): items re-dealt inside their official skill blocks with a per-test seed — block flow and per-skill counts unchanged.
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test6/. Do not hand-edit this file —
// re-run the assembler against the manifest to regenerate.
//
// 2 Modules, 27 questions each (54 total) in 32 minutes per module.
// Distribution per module follows the official digital SAT R&W blueprint
// (2026-06-10 re-blueprint to official-range midpoints):
//   * Craft and Structure: 8 (4 Words in Context, 3 Text Structure & Purpose,
//     1 Cross-Text Connections)
//   * Information and Ideas: 8 (3 Central Ideas/Details, 1 Command of
//     Evidence — Textual, 2 Command of Evidence — Quantitative, 2 Inferences)
//   * Standard English Conventions: 6 (Boundaries, Form/Structure/Sense)
//   * Expression of Ideas: 5 (3 Transitions, 2 Rhetorical Synthesis / Notes)
//
// Expository passages are ORIGINAL prose written for this practice test;
// literary excerpts are genuine, verified public-domain text quoted with
// attribution. Nothing is taken or paraphrased from College Board
// materials, prep books, or other copyrighted sources.


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
          "id": 601,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Wine grapes develop much of their flavor in the final weeks before harvest. Many growers therefore withhold irrigation late in the season. Vines under mild water stress produce smaller berries with thicker skins, and most of a grape's flavor compounds are made in the skin. As a result, the practice tends to ______ the concentration of those compounds in the finished wine.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "dilute"
            },
            {
              "id": "B",
              "text": "delay"
            },
            {
              "id": "C",
              "text": "conceal"
            },
            {
              "id": "D",
              "text": "increase"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Smaller berries with thicker, flavor-rich skins mean more flavor compounds relative to juice, so the practice tends to \"increase\" their concentration.\n\n**The Full Solution:**\n- The middle sentences give the reasoning: water stress yields smaller berries with thicker skins, and the skin is where most flavor compounds are made.\n- Less berry and proportionally more skin pushes the concentration of flavor compounds up, so the blank needs a word meaning raise — \"increase.\"\n\n**Why the other choices are wrong:**\n- A: \"Dilute\" is the opposite of what the evidence supports — smaller, skin-heavy berries concentrate flavor rather than watering it down.\n- B: \"Delay\" mistakes the effect for a timing change; the text says nothing about flavor developing later.\n- C: \"Conceal\" would mean hiding the compounds, which no part of the text suggests."
        },
        {
          "id": 603,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "During hibernation, the body temperature of an Arctic ground squirrel can fall to nearly three degrees below the freezing point of water. At that temperature, ice crystals would normally form in a mammal's tissues and fatally injure them. Yet the squirrels come through such episodes with their tissues ______: their body fluids stay liquid in a supercooled state, and no ice forms to damage their cells.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "intact"
            },
            {
              "id": "B",
              "text": "flexible"
            },
            {
              "id": "C",
              "text": "fragile"
            },
            {
              "id": "D",
              "text": "inactive"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The contrast set up by \"Yet\" demands a word opposing the expected fatal injury, and the colon spells it out: the fluids stay liquid and \"no ice forms to damage their cells\" — the tissues are \"intact.\"\n\n**The Full Solution:**\n- The first two sentences establish an expectation: at that temperature, ice would normally form in the tissues and \"fatally injure them.\"\n- \"Yet\" signals that the outcome defied that expectation, and the elaboration after the colon — no ice, no damage to cells — restates the blank directly: the tissues remain whole and undamaged.\n\n**Why the other choices are wrong:**\n- B: \"Flexible\" describes pliability, a property the text never discusses.\n- C: \"Fragile\" reverses the outcome, agreeing with the expectation the \"Yet\" is there to overturn.\n- D: \"Inactive\" might describe a hibernating animal, but the colon explains that the tissues escape damage, not that they stop functioning."
        },
        {
          "id": 602,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The clay soldiers of the Terracotta Army were once painted over a thin coat of lacquer. Exposed to dry air, the lacquer begins to curl within seconds and can flake away within minutes, taking the paint with it. Conservators therefore spray newly excavated surfaces with moisture-retaining agents designed to ______ the paint until it can be permanently secured in a laboratory.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "recreate"
            },
            {
              "id": "B",
              "text": "stabilize"
            },
            {
              "id": "C",
              "text": "conceal"
            },
            {
              "id": "D",
              "text": "examine"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The agents hold the painted surface in its current condition — keeping the lacquer from curling and flaking — until permanent treatment is possible, which is precisely what \"stabilize\" means.\n\n**The Full Solution:**\n- The problem is rapid change: exposed lacquer \"begins to curl within seconds and can flake away within minutes,\" taking the paint with it.\n- The agents are applied right after excavation and hold things together only \"until\" lab work can secure the paint permanently — a stopgap that arrests deterioration, i.e., stabilizes the paint.\n\n**Why the other choices are wrong:**\n- A: \"Recreate\" would mean making the paint anew; the goal is to keep the original from being lost.\n- C: \"Conceal\" describes hiding the paint, not protecting it from drying out.\n- D: \"Examine\" names study, but moisture-retaining agents are applied to preserve, not to inspect."
        },
        {
          "id": 604,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The squat, plump dodo of seventeenth-century drawings was long taken as a sign that the bird was slow and clumsy, a creature poorly suited to survival. The bird's skeleton, however, ______ that image: studies of its bones indicate a leaner build than the drawings show and an exceptionally powerful tendon for closing the toes, like those of running and climbing birds alive today.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "echoes"
            },
            {
              "id": "B",
              "text": "predates"
            },
            {
              "id": "C",
              "text": "conceals"
            },
            {
              "id": "D",
              "text": "belies"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** \"Belies\" means shows to be false, and that is the relation the sentence needs: if the bones point to a lean, strong-footed bird like today's runners and climbers, the image of a slow, clumsy dodo cannot stand.\n\n**The Full Solution:**\n- The blank governs the relation between the dodo's skeleton and \"that image\": the view, drawn from old drawings, that the bird was slow and clumsy.\n- The colon explains that the bones show a leaner build and a powerful toe-closing tendon like those of running and climbing birds, which discredits the clumsy-bird view; \"however\" confirms the blank must oppose it.\n- A word meaning contradicts or gives the lie to, \"belies,\" completes the logic.\n\n**Why the other choices are wrong:**\n- A: \"Echoes\" would have the skeleton repeating the image, but the evidence undermines it.\n- B: \"Predates\" states a chronological relation, while the sentence, flagged by \"however\" and the colon's reasoning, requires a logical one.\n- C: \"Conceals\" would mean the skeleton hides the image, an incoherent relation between physical evidence and a popular picture of the bird.",
          "_meta": {
            "anchor": "dodo: plump, clumsy bird of 1600s drawings vs bone studies showing a leaner build and a powerful toe-closing tendon",
            "sources": [
              "https://www.mentalfloss.com/posts/dodos-fast-strong-study",
              "https://www.iflscience.com/slow-fat-and-stupid-think-again-the-dodo-was-an-active-lean-bird-and-a-creature-of-the-night-84307",
              "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5721909/"
            ]
          }
        },
        {
          "id": 607,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Sailors' reports of lone waves towering over the sea were long dismissed by oceanographers as exaggeration. The skepticism rested on an assumption: if many small waves add together at random, a wave of the reported size should arise perhaps once in ten thousand years. __Later equations in which waves interact showed that no such rarity is required: a group of waves can concentrate its energy into a single giant far more often than random addition predicts.__ In 2001, satellite radar images covering just three weeks revealed ten waves more than 25 meters high.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It concedes that the oceanographers' doubts about the reports were reasonable given the statistics available at the time."
            },
            {
              "id": "B",
              "text": "It introduces shipboard observations that the equations described in the text failed to predict."
            },
            {
              "id": "C",
              "text": "It restates the assumption on which the oceanographers' skepticism rested."
            },
            {
              "id": "D",
              "text": "It explains why the assumption behind the oceanographers' skepticism does not hold."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The skepticism depended on the assumption that a wave of the reported size must be almost impossibly rare; the underlined sentence reports the theoretical result that dissolves that assumption — interacting waves can funnel a group's energy into one brief giant far more often than random addition allows.\n\n**The Full Solution:**\n- The second sentence isolates the load-bearing assumption: under random addition, a wave that size \"should arise perhaps once in ten thousand years.\"\n- The underlined sentence answers it directly (\"no such rarity is required\") and gives the mechanism: a group of waves concentrating its energy into a single giant.\n- The final sentence adds observational support — ten giant waves found in just three weeks of satellite images — so the underlined sentence functions as the text's pivot from doubt to explanation.\n\n**Why the other choices are wrong:**\n- A: The sentence undercuts the doubts rather than conceding their reasonableness.\n- B: The underlined sentence contains equations, not shipboard observations, and nothing in the text says the equations failed to predict anything.\n- C: The assumption is stated in the sentence before the underlined one; the underlined sentence refutes it."
        },
        {
          "id": 606,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Reefs built by glass sponges, animals with skeletons made of silica, were known from Jurassic fossil beds, and paleontologists long assumed that the reef-building forms had died out ages ago. In 1987, surveyors mapping the seafloor off British Columbia found towering mounds of living glass sponges, some twenty meters high and thousands of years old. Researchers have since documented how the reefs grow, with each generation of sponges settling on the silica skeletons of the last. They have also begun assessing how vulnerable the reefs are to trawling and to changes in ocean chemistry.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To describe how a type of reef believed extinct was found thriving and how researchers have studied it since"
            },
            {
              "id": "B",
              "text": "To explain the chemical process by which glass sponges extract silica from seawater"
            },
            {
              "id": "C",
              "text": "To argue that trawling poses the greatest threat to the seafloor off British Columbia"
            },
            {
              "id": "D",
              "text": "To compare the reef-building habits of living glass sponges with the habits of the Jurassic species that preceded them"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text moves from the assumption that glass sponge reefs were extinct, to the 1987 discovery of living ones, to the research that followed — a discovery-and-aftermath account, which is exactly what choice A states.\n\n**The Full Solution:**\n- Sentence one sets up the old belief: reef-building glass sponges were known only as fossils.\n- Sentence two overturns it with the discovery of living, twenty-meter reefs.\n- The last two sentences survey the ensuing research on how the reefs grow and what threatens them, completing the arc choice A describes.\n\n**Why the other choices are wrong:**\n- B: The extraction of silica from seawater is never explained; silica appears only in describing the skeletons.\n- C: Trawling is mentioned once as a threat under assessment, not ranked as the greatest, and no argument is mounted.\n- D: The Jurassic forms appear only to establish the extinction assumption; no comparison of habits is drawn."
        },
        {
          "id": 608,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Outlines of human hands, known as hand stencils, appear beside paintings of horses, bison, and other large animals in caves in southern France and northern Spain, some of them made tens of thousands of years ago. Because so much of this art depicts game animals, many researchers have proposed that it was made by male hunters, perhaps to record their kills or as a kind of hunting magic."
            },
            {
              "label": "Text 2",
              "text": "An archaeologist studying the cave art has looked closely at the hands themselves. In men, the ring finger tends to be longer than the index finger, while in women the two fingers tend to be about the same length. Measuring 32 of the clearest stencils from caves in France and Spain, the archaeologist classified 24 of them, or 75 percent, as female. The stencils' own proportions, the archaeologist concludes, identify their makers."
            }
          ],
          "question": "Based on the texts, how would the archaeologist in Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "The archaeologist would deny that the stencils themselves can reveal anything about who made the cave art."
            },
            {
              "id": "B",
              "text": "The archaeologist would counter that the stencils' finger proportions point to women, not male hunters, as the makers."
            },
            {
              "id": "C",
              "text": "The archaeologist would accept that hunters made the art but insist that far more people took part than Text 1 suggests."
            },
            {
              "id": "D",
              "text": "The archaeologist would object that Text 1 overstates how long ago the stencils in the caves were made."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The archaeologist's case rests on the stencils themselves, whose finger proportions mostly match women's hands, so the archaeologist would answer Text 1's male-hunter argument by pointing to those proportions.\n\n**The Full Solution:**\n- Text 1's view rests on subject matter: the art shows game animals, so researchers credit it to male hunters.\n- Text 2 argues the physical evidence cuts the other way: 24 of the 32 measured stencils match the finger proportions typical of women.\n- The concluding claim, that the stencils' \"own proportions\" identify their makers, is exactly the rejoinder choice B attributes to the archaeologist.\n\n**Why the other choices are wrong:**\n- A: The archaeologist's whole method is to read the makers from the stencils, so the archaeologist could hardly dismiss that approach.\n- C: The archaeologist does not accept that hunters made the art at all; the objection concerns who the makers were, not how many there were.\n- D: Text 2 never disputes the age of the stencils; its evidence is the shape of the hands, not their date.",
          "_meta": {
            "source_pair": "Paleolithic cave hand stencils (assumed male hunters vs finger-ratio evidence for women makers)",
            "crossTextRelationship": "alternative-explanation",
            "anchor": "cave hand stencils in France and Spain: male-hunter assumption vs finger-length ratios (24 of 32 stencils female)",
            "sources": [
              "https://www.nationalgeographic.com/adventure/article/131008-women-handprints-oldest-neolithic-cave-art",
              "https://m.csmonitor.com/Science/2013/1016/Were-most-cave-painters-women-Their-hand-prints-say-yes",
              "https://www.sci.news/othersciences/anthropology/science-paleolithic-cave-painters-europe-women-01467.html"
            ]
          }
        },
        {
          "id": 605,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Many early sound recordings survive only on wax cylinders, a medium so soft that every playback with a stylus wears away some of the grooves it reads. For decades, archivists therefore faced a choice between preserving such cylinders and hearing them. __The physicist Carl Haber and his colleagues developed a way out of the dilemma: an optical system images a cylinder's grooves in microscopic detail, and software converts their shape into sound.__ Nothing touches the recording, and cylinders too fragile to play, including some that had cracked into pieces, have since given up their contents this way.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It describes a method that resolved the dilemma presented in the preceding sentences."
            },
            {
              "id": "B",
              "text": "It argues that archivists were mistaken to treat wax cylinders as too fragile to play."
            },
            {
              "id": "C",
              "text": "It offers an example of a recording that was damaged by careless playback."
            },
            {
              "id": "D",
              "text": "It summarizes the physical properties that make wax cylinders difficult to store."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentences before the underlined one pose a dilemma — preserve the cylinders or hear them — and the underlined sentence supplies \"a way out of the dilemma,\" describing the optical method that lets both happen at once.\n\n**The Full Solution:**\n- The text's first two sentences build the problem: each playback wears the grooves, so preservation and listening seemed mutually exclusive.\n- The underlined sentence announces and explains the solution: image the grooves and convert their shape to sound.\n- The final sentence then notes that nothing touches the recording and reports the payoff, confirming the underlined sentence's role as the turning point that resolves the problem.\n\n**Why the other choices are wrong:**\n- B: The sentence never disputes the cylinders' fragility — the optical method exists precisely because they are fragile.\n- C: No damaged recording is offered as an example; cracked cylinders appear later, as beneficiaries of the method.\n- D: Storage is never at issue, and the softness of wax is described before the underlined sentence, not in it."
        },
        {
          "id": 610,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The pufferfish is a slow swimmer, yet it is well defended against predators. When threatened, it sucks water into its highly elastic stomach, swelling to three or four times its usual size. Spines on its skin stick out as its body expands, and they also reinforce the stretched skin. Many species carry a powerful poison called tetrodotoxin, concentrated in the liver, ovaries, skin, and intestines. Inflating is costly, however: a swollen fish swims with difficulty and needs hours to recover.",
          "question": "According to the text, how does a pufferfish make its body larger?",
          "choices": [
            {
              "id": "A",
              "text": "It sucks water into its highly elastic stomach."
            },
            {
              "id": "B",
              "text": "It releases a poison stored in its liver and skin."
            },
            {
              "id": "C",
              "text": "It flattens its spines against its stretched skin."
            },
            {
              "id": "D",
              "text": "It swims rapidly to draw air into its body."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text ties the change in size to one mechanism: when threatened, the fish \"sucks water into its highly elastic stomach, swelling to three or four times its usual size.\"\n\n**The Full Solution:**\n- The question asks specifically about growing larger, so the answer must come from the sentence about swelling.\n- That sentence names water drawn into the elastic stomach as the cause of the swelling; choice A restates it directly.\n\n**Why the other choices are wrong:**\n- B: The poison is stored in the fish's organs and skin; the text never says it is released, and poison has nothing to do with size.\n- C: The spines stick out as the body expands, the opposite of lying flat, and the text gives them no role in the swelling itself.\n- D: The text says the fish is a slow swimmer that takes in water, not air, and that swimming becomes harder once it is swollen.",
          "_meta": {
            "anchor": "pufferfish defenses: inflation by sucking water into an elastic stomach, spines, tetrodotoxin, cost of inflating",
            "sources": [
              "https://www.nhm.ac.uk/discover/pufferfish-underwater-balloon-of-death.html",
              "https://en.wikipedia.org/wiki/Tetraodontidae"
            ]
          }
        },
        {
          "id": 615,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "The small marshes called prairie potholes once dotted the upper Midwest by the millions before many were drained for farming, often by burying drainage tiles beneath them. Restoring one might seem to demand heavy intervention, including replanting wetland species by hand. Yet in many restorations, crews did little more than break the buried tiles. The basins refilled with the next season's rains, and wetland plants began returning within a few years, sprouting from seeds that had lain dormant in the soil. These outcomes suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "wetland plants cannot establish themselves in basins that have ever been drained for farming."
            },
            {
              "id": "B",
              "text": "a restored pothole needs a wider variety of planted wetland species than restorers typically use."
            },
            {
              "id": "C",
              "text": "restoring the water is the decisive step, because a refilled basin can largely revegetate itself."
            },
            {
              "id": "D",
              "text": "drainage tiles must be removed entirely rather than broken for a pothole basin to refill."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The outcomes run one way: merely restoring the water brought wetland plants back without any replanting — so the water, not the planting, is the decisive step.\n\n**The Full Solution:**\n- Line up the evidence: crews only broke the tiles; the basins refilled; plants returned on their own from the dormant seeds in the soil.\n- The conclusion this licenses is modest and general: get the water back and the vegetation largely follows — which is choice C, and no more.\n\n**Why the other choices are wrong:**\n- A: It contradicts the evidence — plants did establish themselves in once-drained basins after they refilled.\n- B: The outcomes show plants returning without planting at all, so a requirement to plant more species runs against the evidence.\n- D: The text says breaking the tiles sufficed — the basins refilled — so full removal is a requirement the evidence refutes rather than supports."
        },
        {
          "id": 613,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "At Repair Cafés, volunteers try to fix the broken items that visitors bring in, from kitchen knives to laptops. The Repair Café International Foundation gathers records of these repairs from cafés in several countries. Many repair advocates argue that an item's chances depend heavily on what it is. Simple tools, clothing, and bicycles, they say, are usually fixed, but electronic devices are fixed far less often.",
          "questionTable": {
            "type": "table",
            "caption": "Share of repairs that succeeded for six commonly repaired items at Repair Cafés, 2021",
            "headers": [
              "Item",
              "Share of repairs that succeeded"
            ],
            "rows": [
              [
                "Knife or scissors",
                "98%"
              ],
              [
                "Trousers",
                "96%"
              ],
              [
                "Bicycle",
                "85%"
              ],
              [
                "Laptop",
                "46%"
              ],
              [
                "Printer",
                "36%"
              ],
              [
                "Television",
                "33%"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Knives and scissors were repaired successfully 98% of the time, the highest share in the table."
            },
            {
              "id": "B",
              "text": "Of the items in the table, knives and scissors, trousers, and bicycles were repaired successfully 98%, 96%, and 85% of the time."
            },
            {
              "id": "C",
              "text": "Laptops were repaired successfully more often than printers were, 46% of the time compared with 36%."
            },
            {
              "id": "D",
              "text": "Every non-electronic item was fixed at least 85% of the time, but no electronic device was fixed even half the time."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The claim contrasts two groups of items: simple tools, clothing, and bicycles are usually fixed, while electronic devices are fixed far less often. Choice D covers both groups: every non-electronic item succeeded at least 85% of the time, and no electronic device reached 50%.\n\n**The Full Solution:**\n- Break the claim into its parts: (1) tools, clothing, and bicycles are usually fixed; (2) electronic devices are fixed far less often.\n- Sort the table into the two groups: knife or scissors (98%), trousers (96%), and bicycle (85%) against laptop (46%), printer (36%), and television (33%).\n- Only a choice that reports both groups can show the gap the claim describes, and choice D does.\n\n**Why the other choices are wrong:**\n- A: It reports one item's success rate and says nothing about electronic devices, so it cannot show the contrast.\n- B: It covers only the non-electronic items; without the electronic devices beside them, there is no comparison.\n- C: It compares two electronic devices with each other, which does not address the difference between the two groups."
        },
        {
          "id": 611,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "In the schools of the Greek and Roman world, students preparing for public life worked through the progymnasmata, a fixed sequence of composition exercises. The sequence began with retelling a fable and ended with arguing for or against a proposed law. Each exercise added a new demand: after fables came narratives, then anecdotes and maxims to expand upon, and later speeches praising a figure or comparing two. A student never faced an open-ended assignment cold; every task rehearsed skills the previous ones had built.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Students in Greek and Roman schools were required to memorize fables before studying law."
            },
            {
              "id": "B",
              "text": "The progymnasmata taught rhetoric through a graded sequence whose every exercise built on the skills earlier ones developed."
            },
            {
              "id": "C",
              "text": "Ancient teachers believed that only students with natural talent could benefit from studying the progymnasmata."
            },
            {
              "id": "D",
              "text": "The most difficult exercise in the progymnasmata required students to argue in favor of or against a law that had been proposed."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text's point is the design of the sequence: each exercise \"added a new demand\" and \"every task rehearsed skills the previous ones had built\" — cumulative, graded training in composition and rhetoric.\n\n**The Full Solution:**\n- The opening sentences define the progymnasmata as \"a fixed sequence\" running from fable to legal argument.\n- The next sentence traces the order of the exercises, each adding one new demand.\n- The closing sentence states the principle behind the order: nothing faced cold, every task built on earlier ones. Choice B gathers all of this; the others each seize a fragment or add something the text never says.\n\n**Why the other choices are wrong:**\n- A: Fables were retold, not memorized, and the law exercise was rhetorical practice, not legal study.\n- C: The text never mentions natural talent; the sequence is described as building every student's skills step by step.\n- D: The final exercise is a detail marking the sequence's endpoint, not the idea the text is organized to convey."
        },
        {
          "id": 609,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The pierced stone screens known as jaali are among the most recognizable elements of Mughal architecture, their marble and sandstone lattices carved into stars, hexagons, and winding vines. Admired today chiefly as ornament, the screens were working parts of the buildings that held them. A jaali admits daylight while blocking direct sun; its perforations speed up the breeze that passes through, cooling the rooms beyond; and its lattice lets those inside observe a courtyard or street without being seen. The screens' geometry served the practical demands of climate and custom as much as it served the eye.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Mughal builders valued marble and sandstone above all other materials for carving screens."
            },
            {
              "id": "B",
              "text": "The geometric patterns used in jaali were chosen mainly to display the skill of the individual carvers who made the screens."
            },
            {
              "id": "C",
              "text": "Though now admired mainly as decoration, jaali performed practical functions in the buildings that held them."
            },
            {
              "id": "D",
              "text": "Jaali screens cooled Mughal interiors more effectively than any other architectural feature could."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text's organizing claim is that the screens, \"admired today chiefly as ornament,\" were in fact \"working parts\" of their buildings — and every detail that follows lists a practical function.\n\n**The Full Solution:**\n- The second sentence states the idea outright: the screens were functional, not merely decorative.\n- The middle sentences itemize the functions — filtered light, accelerated cooling breezes, one-way sight lines — and the final sentence sums up: geometry serving \"climate and custom as much as... the eye.\"\n- Choice C captures that whole arc: modern perception (decoration) corrected by historical function.\n\n**Why the other choices are wrong:**\n- A: Materials are mentioned once in passing; no preference among materials is claimed.\n- B: Carvers' skill is never discussed, and the text credits the patterns to practical demands, not display.\n- D: The text says the perforations cool rooms, but it never ranks jaali against other cooling features."
        },
        {
          "id": 614,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "The water level of Lake Mead, the reservoir behind Hoover Dam, has been recorded at the end of every month since the 1930s. The level rises and falls within each year as inflows and releases change, but since 2000 a long drought has also pulled it steadily downward. A research team reviewing the record has argued that the long-term decline now dwarfs the yearly fluctuation: between 2000 and 2022, the lake's average level fell several times farther than it rose and fell within any single year.",
          "questionTable": {
            "type": "table",
            "caption": "Lake Mead water level in selected years, based on end-of-month elevations",
            "headers": [
              "Year",
              "Annual mean elevation (feet above sea level)",
              "Swing within the year, highest to lowest month (feet)"
            ],
            "rows": [
              [
                "2000",
                "1,203.5",
                "18.1"
              ],
              [
                "2008",
                "1,109.4",
                "12.5"
              ],
              [
                "2015",
                "1,080.5",
                "13.9"
              ],
              [
                "2022",
                "1,050.4",
                "26.2"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the team's claim?",
          "choices": [
            {
              "id": "A",
              "text": "The annual mean elevation fell from 1,203.5 feet above sea level in 2000 to 1,050.4 feet in 2022."
            },
            {
              "id": "B",
              "text": "The swing within the year was smallest in 2008, at 12.5 feet, and largest in 2022, at 26.2 feet."
            },
            {
              "id": "C",
              "text": "In every year shown, the swing from the highest to the lowest month was far smaller than the lake's annual mean elevation for that year."
            },
            {
              "id": "D",
              "text": "While the annual mean elevation fell by more than 150 feet from 2000 to 2022, the swing within any year shown never exceeded 26.2 feet."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The claim compares two quantities, how far the lake's average level fell over two decades and how far the level rises and falls within a single year, so support requires both columns at once, and D supplies them: a drop of more than 150 feet against yearly swings of no more than 26.2.\n\n**The Full Solution:**\n- Break the claim into its parts: (1) the average level fell a long way between 2000 and 2022; (2) the swing within any one year is small; (3) the first is several times the second.\n- D documents (1) with the 1,203.5-to-1,050.4 drop and (2) with swings that never exceed 26.2, and setting them side by side shows (3): roughly six times as large.\n\n**Why the other choices are wrong:**\n- A: It gives only the falling average, leaving the claim's other half, the size of the yearly swing, without evidence.\n- B: It reports how the swing varied from year to year but never compares it with the long-term decline, which is the heart of the claim.\n- C: Comparing the swing with the elevation itself is beside the point; the claim compares the swing with how far the average level has fallen, not with the lake's height above sea level.",
          "_meta": {
            "anchor": "Lake Mead end-of-month elevations: annual mean fall 2000-2022 vs within-year swing (computed from USBR table)",
            "sources": [
              "https://www.usbr.gov/lc/region/g4000/hourly/mead-elv.html",
              "https://earthobservatory.nasa.gov/images/86426/losses-in-lake-mead"
            ]
          }
        },
        {
          "id": 612,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Students often prepare for exams by rereading their notes and textbooks, reasoning that each pass makes the material more familiar. Psychologists Henry Roediger and Jeffrey Karpicke have hypothesized that recalling material from memory does more for long-term learning than reading it again. In short, testing oneself is a better study tool than restudying.",
          "question": "Which finding from a study of student learning, if true, would most directly support the hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Students who reread a passage several times reported feeling more confident about an upcoming test than did students who had read it only once."
            },
            {
              "id": "B",
              "text": "Students who studied in short sessions spread across several days retained more than students who studied in one long session."
            },
            {
              "id": "C",
              "text": "Students who both reread a passage and took a practice test scored higher than students who did neither."
            },
            {
              "id": "D",
              "text": "A week later, students who had spent part of their study time recalling a passage retained more than those who spent equal time rereading it."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The hypothesis pits retrieval against re-exposure with everything else equal, and D is that exact comparison: equal study time, retrieval versus rereading, measured after a delay — with retrieval winning.\n\n**The Full Solution:**\n- The hypothesis has two essential parts: retrieval beats restudying, and the advantage concerns long-term learning.\n- D matches both: the same total study time isolates the retrieval variable, and the week's delay tests durable retention rather than immediate familiarity.\n\n**Why the other choices are wrong:**\n- A: It measures confidence, not retention — and reported confidence after rereading is precisely the feeling of familiarity the hypothesis says is misleading.\n- B: It compares spaced with massed study, a different variable; retrieval never enters the comparison.\n- C: Combining rereading with testing against doing neither confounds the two methods, so it cannot show which one produced the advantage."
        },
        {
          "id": 616,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "A dandelion seed rides beneath a pappus, a disk of about a hundred bristles that is more than 90 percent empty space. So open a structure might be expected to catch little air, yet the pappus keeps its seed aloft far more efficiently than a solid parachute of similar mass would. Wind-tunnel studies supplied the explanation. Air passing between the bristles sustains a stable ring of circulating air that hovers just above the pappus — a low-pressure vortex that increases drag and slows the seed's fall. Solid disks tested the same way produced no such ring. The pappus's porosity, it appears, is not a compromise between weight and drag but ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "the very feature that generates the vortex on which the seed's prolonged flight depends."
            },
            {
              "id": "B",
              "text": "a flaw that natural selection has been unable to eliminate from the dandelion's design."
            },
            {
              "id": "C",
              "text": "an adaptation for shedding rainwater that incidentally slows the seed's descent."
            },
            {
              "id": "D",
              "text": "evidence that drag matters less to a drifting seed than overall weight does."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The experiments tie the porosity to the flight advantage directly: air passing through the gaps sustains the vortex, and solid disks produced none — so the porosity is the source of the advantage, not a trade-off.\n\n**The Full Solution:**\n- The setup poses a puzzle: a mostly empty disk keeps its seed aloft better than a solid parachute of similar mass.\n- The wind-tunnel work locates the mechanism in the gaps themselves — airflow through them sustains the low-pressure vortex that slows the fall — and the solid-disk comparison confirms the dependence: no gaps, no ring.\n- The sentence's own frame (\"not a compromise... but\") demands a positive completion crediting the porosity, which is exactly choice A.\n\n**Why the other choices are wrong:**\n- B: Calling porosity a flaw inverts the finding that it produces the vortex.\n- C: Rainwater is never mentioned, and the vortex evidence makes the flight benefit central, not incidental.\n- D: The passage never weighs drag against weight; it explains how porosity creates the drag-enhancing vortex, a mechanism D ignores."
        },
        {
          "id": 619,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "A few scientific experiments begun long ago are still running: the Broadbalk wheat experiment, sown in England in 1843; the Oxford Electric Bell, ringing on the same batteries since ______ the pitch-drop experiment in Brisbane, started in 1927.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "1840, and"
            },
            {
              "id": "B",
              "text": "1840 and"
            },
            {
              "id": "C",
              "text": "1840; and"
            },
            {
              "id": "D",
              "text": "1840,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The sentence is a list of three experiments whose items contain internal commas, so the items must be separated by semicolons — including the boundary between the second item and the final one.\n\n**The Full Solution:**\n- Map the series: item one ends \"...in 1843;\" — the list has already committed to semicolon separators because each item carries commas of its own.\n- The blank sits at the end of item two, before the final item, so it needs the same separator plus the closing conjunction: \"...since 1840; and the pitch-drop experiment...\"\n\n**Why the other choices are wrong:**\n- A: A comma plus \"and\" gives the final boundary a weaker separator than the first, letting the items' internal commas blur the list.\n- B: With no punctuation at all, items two and three run together.\n- D: A comma alone both mismatches the semicolon series and drops the conjunction the final item needs."
        },
        {
          "id": 617,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The reflective road studs that outline traffic lanes after dark were devised in the 1930s to solve a stubborn problem: painted stripes all but vanish in rain and darkness. Each stud's glass lenses bounce headlight beams back toward the ______ each one also sits in a flexible rubber housing that dips below the road surface under a passing tire, wiping the lenses clean.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "driver"
            },
            {
              "id": "B",
              "text": "driver, but"
            },
            {
              "id": "C",
              "text": "driver,"
            },
            {
              "id": "D",
              "text": "driver;"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Two independent clauses meet at the blank — \"Each stud's glass lenses bounce headlight beams back toward the driver\" and \"each one also sits in a flexible rubber housing...\" — and a semicolon is the conventional boundary between them.\n\n**The Full Solution:**\n- Test each side of the blank: both could stand alone as complete sentences.\n- Joining two independent clauses requires a semicolon, a period, or a comma plus a fitting coordinating conjunction; of the options, only the semicolon does the job cleanly.\n\n**Why the other choices are wrong:**\n- A: With no punctuation at all, the two complete clauses fuse into a run-on.\n- B: \"But\" is grammatical machinery with the wrong logic — the second clause adds a second feature (\"also\"), it doesn't contrast with the first.\n- C: A comma alone between two independent clauses is a comma splice."
        },
        {
          "id": 622,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "A medieval tidal mill ground grain on a schedule set by the sea: the incoming tide filled a pond behind the mill, and at low water the trapped pond drained out past the wheel. Because the mill could run only while ______ pond still held water, millers worked shifting hours that tracked the tides rather than the sun.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "its"
            },
            {
              "id": "B",
              "text": "it's"
            },
            {
              "id": "C",
              "text": "their"
            },
            {
              "id": "D",
              "text": "they're"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The blank needs a possessive pronoun referring to the singular \"the mill,\" and the possessive form of \"it\" is \"its\" — no apostrophe.\n\n**The Full Solution:**\n- Identify the antecedent: the pond belongs to \"the mill,\" a singular noun.\n- Identify the role: the word modifies \"pond,\" so it must be a possessive determiner.\n- Singular possessive of \"it\" is \"its.\"\n\n**Why the other choices are wrong:**\n- B: \"It's\" is the contraction of \"it is,\" producing \"while it is pond still held water.\"\n- C: \"Their\" is possessive but plural, and its antecedent \"the mill\" is singular.\n- D: \"They're\" is the contraction of \"they are\" — both plural and non-possessive."
        },
        {
          "id": 618,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "During the Antarctic winter, male emperor penguins incubate their eggs for about two months without eating. The huddles the males form during this long fast ______ constantly shifting, as birds on the cold outer edge gradually work their way toward the warm center.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "was"
            },
            {
              "id": "B",
              "text": "is"
            },
            {
              "id": "C",
              "text": "are"
            },
            {
              "id": "D",
              "text": "has been"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject of the verb is the plural noun \"huddles,\" so the verb must be the plural \"are.\"\n\n**The Full Solution:**\n- Strip the modifier to find the core: \"The huddles... ______ constantly shifting.\"\n- The words \"the males form during this long fast\" merely describe the subject; they don't change its number.\n- Plural subject, plural verb: \"The huddles... are constantly shifting.\"\n\n**Why the other choices are wrong:**\n- A: \"Was\" is singular (and past tense besides, clashing with the present-tense description of the huddles).\n- B: \"Is\" is singular; it agrees with the nearby noun \"fast,\" which sits inside the modifier, not with the subject \"huddles.\"\n- D: \"Has been\" is likewise singular and cannot agree with the plural subject \"huddles.\""
        },
        {
          "id": 620,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "By the time the germ theory of disease explained why hygiene mattered in hospitals, the physician Ignaz Semmelweis ______ for handwashing for years. In the late 1840s, he showed that when doctors in his Vienna maternity clinic disinfected their hands, deaths from childbed fever fell from roughly one mother in ten to fewer than one in fifty.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "campaigns"
            },
            {
              "id": "B",
              "text": "is campaigning"
            },
            {
              "id": "C",
              "text": "had campaigned"
            },
            {
              "id": "D",
              "text": "has campaigned"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The sentence measures Semmelweis's campaigning against a later past reference point (\"By the time the germ theory... explained...\"), and action completed before a past moment takes the past perfect: \"had campaigned.\"\n\n**The Full Solution:**\n- \"By the time\" plus the past-tense \"explained\" fixes a reference point in the past.\n- The years of campaigning happened before that point — the late-1840s evidence confirms the earlier time frame — so the verb needs the past perfect.\n\n**Why the other choices are wrong:**\n- A: The simple present \"campaigns\" puts a nineteenth-century campaign in the present.\n- B: \"Is campaigning\" is likewise present tense, incompatible with the past reference point.\n- D: The present perfect \"has campaigned\" connects past action to the present moment, but the sentence needs action completed before another moment in the past."
        },
        {
          "id": 621,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Across the dry Iranian plateau, people dug qanats, and each system depended on three parts ______ that together carried groundwater to distant fields by gravity alone.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "—a mother well sunk to the water table, a gently sloped tunnel, and a line of vertical access shafts,"
            },
            {
              "id": "B",
              "text": "—a mother well sunk to the water table, a gently sloped tunnel, and a line of vertical access shafts—"
            },
            {
              "id": "C",
              "text": ", a mother well sunk to the water table, a gently sloped tunnel, and a line of vertical access shafts,"
            },
            {
              "id": "D",
              "text": "a mother well sunk to the water table, a gently sloped tunnel, and a line of vertical access shafts"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The list of three parts is an interruption between \"three parts\" and the clause \"that together carried...\" — and an interrupting list containing its own commas must be enclosed by a matched pair of dashes.\n\n**The Full Solution:**\n- The sentence's spine is \"each system depended on three parts... that together carried groundwater.\"\n- The naming of the parts is parenthetical, and because it carries internal commas, commas cannot set it off legibly; dashes can — provided they come as a pair, one opening and one closing.\n\n**Why the other choices are wrong:**\n- A: It opens with a dash but closes with a comma, an unmatched pair.\n- C: Commas around a list already full of commas leave the boundaries of the interruption unreadable.\n- D: With no punctuation at all, the list collides with both the noun before it and the clause after it."
        },
        {
          "id": 625,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "The cork oak survives the harvesting of its own bark: workers strip the thick outer layer by hand, and the tree regrows it, ready for another stripping nine years later. ______ the harvest sustains more than the trees — kept valuable by the cork trade, the oak woodlands of Portugal and Spain shelter cranes, eagles, and the endangered Iberian lynx.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "In addition,"
            },
            {
              "id": "B",
              "text": "However,"
            },
            {
              "id": "C",
              "text": "As a result,"
            },
            {
              "id": "D",
              "text": "Specifically,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The first sentence gives one remarkable fact about the harvest (the trees survive it); the second stacks on a further, compatible benefit (the woodlands it preserves shelter wildlife). Piling a second point onto a first calls for the additive \"In addition.\"\n\n**The Full Solution:**\n- Before the blank: the harvest is sustainable for the tree itself.\n- After the blank: the harvest also underwrites an entire habitat — a new benefit, in the same direction.\n- Same-direction accumulation takes an additive transition.\n\n**Why the other choices are wrong:**\n- B: \"However\" signals opposition, but the second sentence extends the good news rather than countering it.\n- C: \"As a result\" would make the wildlife benefit a consequence of the tree's bark regrowth specifically; the causal chain in the text runs through the trade's economics, and the sentence is framed as an added point, not an outcome of the first.\n- D: \"Specifically\" promises a narrower restatement of the first sentence, but the second introduces new territory instead of detailing the old."
        },
        {
          "id": 624,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "For much of the twentieth century, doctors blamed most stomach ulcers on stress, spicy food, and excess stomach acid, and treated them with bland diets and antacids. ______ most ulcers, the Australian researchers Robin Warren and Barry Marshall showed in the early 1980s, are caused by infection with the bacterium Helicobacter pylori and can be cured with antibiotics.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "For instance,"
            },
            {
              "id": "B",
              "text": "Meanwhile,"
            },
            {
              "id": "C",
              "text": "Instead,"
            },
            {
              "id": "D",
              "text": "In short,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The second sentence does not merely differ from the first — it replaces it: infection by a bacterium supplants stress, diet, and acid as the cause of most ulcers. \"Instead,\" is the transition of substitution.\n\n**The Full Solution:**\n- Before the blank: the accepted account — ulcers caused by stress, spicy food, and excess acid.\n- After the blank: research overturns it and supplies the actual cause, a bacterial infection curable with antibiotics.\n- When a second statement swaps in for a rejected first, \"Instead\" is the logical connector.\n\n**Why the other choices are wrong:**\n- A: \"For instance\" would offer the bacterial finding as an example of the stress-and-acid account it actually refutes.\n- B: \"Meanwhile\" sets two things running in parallel, but these explanations cannot both stand — one displaces the other.\n- D: \"In short\" introduces a summary of what came before, yet the second sentence contradicts rather than condenses the first."
        },
        {
          "id": 623,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "African baobabs form growth rings only erratically, so the ages of the biggest trees were long a matter of guesswork based mainly on sheer girth. ______ radiocarbon dating of wood sampled from the trees' trunks and inner cavities has put the question on firmer ground: the oldest tree dated, in Zimbabwe, proved to be about 2,500 years old.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Furthermore,"
            },
            {
              "id": "B",
              "text": "However,"
            },
            {
              "id": "C",
              "text": "For example,"
            },
            {
              "id": "D",
              "text": "Consequently,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The first sentence describes an era of guesswork; the second describes measurement replacing it. That is a reversal of the earlier situation, and \"However,\" marks it.\n\n**The Full Solution:**\n- Before the blank: ages were \"a matter of guesswork,\" resting on girth alone.\n- After the blank: radiocarbon dating \"has put the question on firmer ground\" — the opposite of guesswork.\n- The relation is contrast between the old uncertainty and the new precision, so the contrast transition fits.\n\n**Why the other choices are wrong:**\n- A: \"Furthermore\" would add more support to the guesswork era, but the second sentence displaces it.\n- C: \"For example\" would make the dating an instance of the guessing, when it is the corrective to it.\n- D: \"Consequently\" claims the dating resulted from the guessing, but nothing says the guesswork caused the radiocarbon work."
        },
        {
          "id": 627,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Until the 1970s, biologists usually sorted all living things into two groups: bacteria and everything else.",
              "The microbiologist Carl Woese compared ribosomal RNA sequences to trace how microbes are related.",
              "In 1977, Woese and George Fox reported that one group of bacteria-like microbes, now called archaea, is no more related to bacteria than to plants and animals.",
              "Woese proposed dividing life into three domains: Bacteria, Archaea, and Eukarya.",
              "Biologists and textbooks have since widely adopted the three-domain scheme."
            ],
            "goal": "The student wants to emphasize the significance of Woese's finding for the classification of life."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Working with George Fox, the microbiologist Carl Woese compared ribosomal RNA sequences from many microbes to trace how they are related to one another."
            },
            {
              "id": "B",
              "text": "Woese's finding that archaea form a distinct branch of life led biologists to replace the two-group view with the widely adopted three-domain scheme."
            },
            {
              "id": "C",
              "text": "Archaea resemble bacteria even though the two groups are not closely related to each other."
            },
            {
              "id": "D",
              "text": "Until the 1970s, biologists usually sorted all living things into just two groups."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Significance for classification means showing what the finding changed, and B does precisely that: it names the finding (archaea form a distinct branch of life) and its classificatory consequence (two groups replaced by the widely adopted three domains).\n\n**The Full Solution:**\n- The goal has two parts: Woese's finding, and its significance for how life is classified.\n- B carries both — the discovery in its subject, the overthrow of the old scheme and adoption of the new one in its predicate — synthesizing the third, fourth, and fifth notes.\n\n**Why the other choices are wrong:**\n- A: It describes the method but stops before any finding or consequence, so no significance is conveyed.\n- C: It states the finding stripped of any connection to classification — the significance the goal demands is missing.\n- D: It gives only the before picture; without the finding or the new scheme, nothing about Woese's impact is emphasized."
        },
        {
          "id": 626,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "In the 1700s, short-staple cotton seeds had to be picked out of the fiber by hand.",
              "In 1793, an American inventor built a cotton gin, a machine for separating the seeds from the fiber.",
              "The gin pulled the fiber through small holes in a metal plate that held back the seeds.",
              "With a gin, two or three workers could clean about fifty pounds of cotton in a day.",
              "By hand, one laborer needed about ten hours to clean a single pound of cotton."
            ],
            "goal": "The student wants to emphasize the difference between the results of the two cleaning methods."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "In 1793, an American inventor built a cotton gin, a machine for separating cotton seeds from the fiber."
            },
            {
              "id": "B",
              "text": "With a cotton gin, a team of two or three workers could clean about fifty pounds of cotton in a day."
            },
            {
              "id": "C",
              "text": "The gin pulled the fiber through small holes in a metal plate, which held back the seeds so that the cotton came out of the machine clean."
            },
            {
              "id": "D",
              "text": "Whereas one laborer needed about ten hours to clean a pound of cotton by hand, a few workers with a gin cleaned about fifty pounds a day."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The goal is a difference in results between the two cleaning methods, and D sets the two results side by side in one sentence: about ten hours for one pound by hand, about fifty pounds a day with the gin.\n\n**The Full Solution:**\n- The goal names two requirements: both methods must appear, and what must be contrasted is how much each one accomplished.\n- D's \"Whereas... a pound... fifty pounds\" is built on exactly that comparison, drawing one result from the hand-cleaning note and the other from the note about the gin's output.\n\n**Why the other choices are wrong:**\n- A: It introduces the inventor and the machine but mentions only one method and no comparative result.\n- B: It reports the gin's output alone; with nothing about hand cleaning, no difference is drawn.\n- C: It explains how the gin worked, a mechanism rather than a comparison of results.",
          "_meta": {
            "anchor": "cotton gin (1793) vs hand cleaning: about 1 lb per 10 hours by hand vs about 50 lb a day with a gin",
            "sources": [
              "https://en.wikipedia.org/wiki/Cotton_gin",
              "https://www.archives.gov/education/lessons/cotton-gin-patent"
            ]
          }
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 32,
      questions: [
        {
          "id": 629,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A young sea squirt looks like a tiny tadpole and swims freely through the water for hours, sometimes for more than a day, driven by a muscular tail. Adult sea squirts, however, are essentially ______: once a larva finds a suitable surface, it glues itself head-first to the spot, absorbs its tail, and spends the rest of its life there, drawing seawater through its body to filter out food.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "stationary"
            },
            {
              "id": "B",
              "text": "symmetrical"
            },
            {
              "id": "C",
              "text": "dormant"
            },
            {
              "id": "D",
              "text": "fragile"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The \"however\" opposes the free-swimming larva, and the colon explains the opposite condition: the animal glues itself to one spot and stays there for the rest of its life, so the adult is \"stationary.\"\n\n**The Full Solution:**\n- Before the blank: the young sea squirt's free movement, swimming with a muscular tail.\n- \"However\" reverses that picture for adults, and the elaboration (glued head-first to the spot, tail absorbed, staying there for life) restates the blank as fixed in place.\n\n**Why the other choices are wrong:**\n- B: \"Symmetrical\" describes shape, not the motion-versus-fixity contrast the sentence is built on.\n- C: \"Dormant\" means inactive or asleep, but the adult is busily drawing in seawater and filtering out food; only its movement has stopped.\n- D: \"Fragile\" describes how easily something breaks, and nothing in the text concerns the adult's strength or delicacy.",
          "_meta": {
            "anchor": "sea squirt life cycle: free-swimming tadpole larva vs sessile filter-feeding adult",
            "sources": [
              "https://encyclopedia.pub/entry/17640",
              "https://en.wikipedia.org/wiki/Ascidiacea"
            ]
          }
        },
        {
          "id": 631,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A test made from the blue blood of horseshoe crabs has long been the standard way to detect bacterial contamination in injectable drugs. A synthetic substitute made without animals has been available since the early 2000s and performs comparably. Even so, many drug manufacturers have remained ______ about switching: until recently, adopting the substitute meant extra validation work to satisfy regulators, a burden few firms chose to take on.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "candid"
            },
            {
              "id": "B",
              "text": "sanguine"
            },
            {
              "id": "C",
              "text": "combative"
            },
            {
              "id": "D",
              "text": "hesitant"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** \"Even so\" concedes the substitute's record and pivots to the manufacturers' contrary stance, which the colon then explains as reluctance in the face of a regulatory burden — they remained \"hesitant.\"\n\n**The Full Solution:**\n- The second sentence establishes that the substitute works and has been available for years.\n- \"Even so\" signals that the manufacturers' attitude runs against that evidence, and the explanation — extra validation work \"few firms chose to take on\" — describes holding back.\n- A word meaning reluctant to act, \"hesitant,\" completes both the contrast and the explanation.\n\n**Why the other choices are wrong:**\n- A: \"Candid\" concerns honesty of speech, not willingness to switch.\n- B: \"Sanguine\" means optimistic — it would erase the contrast \"Even so\" announces rather than deliver it.\n- C: \"Combative\" overshoots into active hostility; the colon describes quiet avoidance of a burden, not a fight."
        },
        {
          "id": 630,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Solar farms must keep the ground beneath their panels clear of tall vegetation, since plants that shade a panel cut its output. Many operators now pasture sheep among the panels, and the arrangement has proved mutually ______: the flocks gain forage and shade, while the operators gain vegetation control beneath the panels, where mowing machines struggle to reach.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "exacting"
            },
            {
              "id": "B",
              "text": "lucrative"
            },
            {
              "id": "C",
              "text": "contentious"
            },
            {
              "id": "D",
              "text": "advantageous"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The colon itemizes a benefit to each side — forage and shade for the flocks, vegetation control for the operators — so the arrangement is mutually \"advantageous.\"\n\n**The Full Solution:**\n- \"Mutually ______\" must characterize the arrangement for both parties at once.\n- The elaboration after the colon is a two-sided ledger of gains (\"the flocks gain... while the operators gain...\"), which restates \"advantageous\" exactly.\n\n**Why the other choices are wrong:**\n- A: \"Exacting\" means demanding rigor or effort; the colon lists benefits, not demands.\n- B: \"Lucrative\" narrows the gain to money, but the flocks' stated gains — forage and shade — are not financial at all.\n- C: \"Contentious\" means marked by dispute, the opposite of an arrangement the text presents as serving both sides."
        },
        {
          "id": 628,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In rice-fish farming, a practice with a long history in parts of southern China, carp are released into flooded paddies, where they eat insect larvae and weed shoots growing between the rice plants. Field comparisons show what the fish accomplish: paddies stocked with carp suffer notably less pest damage than fish-free paddies nearby, allowing farmers to ______ their use of chemical pesticides without sacrificing yield.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "curtail"
            },
            {
              "id": "B",
              "text": "disguise"
            },
            {
              "id": "C",
              "text": "justify"
            },
            {
              "id": "D",
              "text": "standardize"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** If the fish already suppress pests, farmers need less chemical control, so they can \"curtail\" — cut back — pesticide use while yields hold.\n\n**The Full Solution:**\n- The colon sets up the logic: carp-stocked paddies \"suffer notably less pest damage.\"\n- Less pest damage means less need for pesticides, so the blank must mean reduce; \"curtail\" says exactly that, and \"without sacrificing yield\" confirms the reduction reading.\n\n**Why the other choices are wrong:**\n- B: \"Disguise\" would mean hiding pesticide use, which nothing in the text supports.\n- C: \"Justify\" points the wrong way — the fish make pesticides less necessary, not more defensible.\n- D: \"Standardize\" concerns making practices uniform, a topic the comparison never raises."
        },
        {
          "id": 633,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "When the fur trade drove sea otters nearly to extinction along the North Pacific rim, many of the kelp forests where they had lived disappeared as well. But the connection between the two losses was not established until the 1970s. Comparative surveys in the Aleutian Islands revealed it. Around islands where otters persisted, the ecologist James Estes found thick kelp and few sea urchins; around similar islands without otters, urchins carpeted the seafloor and the kelp was gone. The mechanism proved simple: otters eat urchins, and urchins eat kelp.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It presents two competing explanations for the collapse of an ecosystem and argues that neither fully fits the evidence."
            },
            {
              "id": "B",
              "text": "It describes the recovery of a predator population and the debates that recovery provoked among ecologists."
            },
            {
              "id": "C",
              "text": "It notes two losses whose connection had long gone unestablished, then presents the comparison that revealed the link."
            },
            {
              "id": "D",
              "text": "It explains how researchers measured the diets of sea otters at a series of island sites."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text opens with two losses whose connection \"was not established until the 1970s,\" pivots on the Aleutian island comparison, and closes by stating the mechanism that ties them together — precisely the structure C describes.\n\n**The Full Solution:**\n- First movement: otters vanish, kelp forests vanish, and no link between the losses is established.\n- Second movement: Estes's with-otters versus without-otters comparison exposes the pattern.\n- Third movement: the causal chain (otters eat urchins, urchins eat kelp) turns the coincidence into a connection.\n\n**Why the other choices are wrong:**\n- A: Only one explanation is ever offered, and the text endorses rather than rejects it.\n- B: No recovery occurs in the text, and no debate among ecologists is described.\n- D: Diet is stated as the mechanism, not measured, and a methods account would ignore the text's movement from puzzle to explanation."
        },
        {
          "id": 635,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Human footprints preserved in an ancient lakebed at White Sands, New Mexico, have been dated by researchers led by Matthew Bennett to between 21,000 and 23,000 years ago. That is thousands of years earlier than many archaeologists thought people had reached the interior of North America. The dates come from radiocarbon analysis of ditchgrass seeds found in the same sediment layers as the prints. If they hold, the standard account of the continent's peopling must be rewritten."
            },
            {
              "label": "Text 2",
              "text": "Some researchers urge caution. Ditchgrass is an aquatic plant, and aquatic plants can take up old carbon dissolved in lake water. This reservoir effect can make radiocarbon ages run thousands of years too old. These researchers argue that until the dates are confirmed by materials immune to that effect, such as pollen from land plants, so consequential a revision should not be treated as settled."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "The prints were probably left by animals rather than by humans."
            },
            {
              "id": "B",
              "text": "The dates rest on material subject to a known source of error, so the sweeping conclusion drawn from them is premature."
            },
            {
              "id": "C",
              "text": "Radiocarbon analysis is too unreliable a method to establish the age of any archaeological site."
            },
            {
              "id": "D",
              "text": "People could not have reached the interior of North America so early, so the prints must be far younger than the team reported."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Text 2's objection is precisely calibrated: the seeds are aquatic, aquatic material is vulnerable to the reservoir effect, and until immune materials confirm the ages, \"so consequential a revision should not be treated as settled\" — that is, the conclusion is premature, not necessarily wrong.\n\n**The Full Solution:**\n- Text 1's chain: seed dates → people in the interior 21,000-23,000 years ago → rewrite the peopling of the continent.\n- Text 2 attacks the first link's material, naming a specific error mode (old dissolved carbon inflating ages) and prescribing confirmation by unaffected materials.\n- That is a methodological challenge to the evidence's sufficiency — exactly the stance B describes.\n\n**Why the other choices are wrong:**\n- A: Text 2 never doubts that the prints are human; its target is the dating, not the identification.\n- C: It overshoots — Text 2 faults one vulnerable material, while itself proposing land-plant pollen as a check, which could also be radiocarbon dated.\n- D: It converts Text 2's caution into dogma; the author asks for confirmation before accepting the dates, not a declaration that they must be wrong.",
          "_meta": {
            "source_pair": "White Sands footprint dating (seed radiocarbon vs reservoir-effect caution)",
            "crossTextRelationship": "methodological-challenge"
          }
        },
        {
          "id": 632,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "A satellite's solar panels must survive launch folded inside a rocket's narrow fairing and then deploy in orbit, where a jammed hinge cannot be reached and repaired. Engineers have drawn on paper folding for a solution. __A pattern of creases devised by the astrophysicist Koryo Miura folds a flat sheet into a compact block that opens in one motion: pull on two opposite corners, and the whole array unfolds at once.__ A panel folded this way needs no network of separately driven hinges, each a potential point of failure. Versions of the pattern have flown on spacecraft since the 1990s.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It identifies the constraint that makes deploying solar panels in orbit riskier than folding them for launch."
            },
            {
              "id": "B",
              "text": "It describes a folding pattern whose ability to unfold in one motion answers the problem the text presents."
            },
            {
              "id": "C",
              "text": "It explains why a jammed hinge on an orbiting satellite cannot be reached and repaired by engineers on the ground."
            },
            {
              "id": "D",
              "text": "It questions whether techniques borrowed from paper folding can withstand the stresses of an actual launch."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text sets a problem (deployment must not fail in unreachable orbit) and promises a paper-folding solution; the underlined sentence delivers it, presenting the Miura pattern and the one-motion unfolding that makes hinge networks unnecessary.\n\n**The Full Solution:**\n- Sentence one states the stakes; sentence two announces that a solution comes from paper folding.\n- The underlined sentence is that solution made concrete: the crease pattern and its key property, unfolding in one motion.\n- The final sentences draw the consequence — no failure-prone hinges — confirming that the underlined sentence carried the answering mechanism.\n\n**Why the other choices are wrong:**\n- A: The constraint is laid out in the first sentence, before the underlined one.\n- C: The unreachability of orbit is asserted earlier and never explained anywhere in the text.\n- D: The sentence advances the paper-folding approach confidently; no doubt about launch stresses is raised in it or anywhere else."
        },
        {
          "id": 634,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The plasmodial slime mold Physarum polycephalum is a single giant cell, without brain or nervous system, that forages by extending a web of protoplasmic veins toward food. When researchers set out oat flakes in an arrangement matching the cities around Tokyo, the organism first flooded the whole space. It then pruned itself back to a network of tubes linking the flakes, a web the researchers judged comparable to the actual Tokyo rail system in efficiency, fault tolerance, and cost. Engineers have taken note. An organism that solves network problems by local trial and reinforcement, with no central plan, offers a template for routing algorithms in settings that change too fast for central planning.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To question whether laboratory experiments can accurately measure the problem-solving abilities of organisms without brains"
            },
            {
              "id": "B",
              "text": "To trace the evolutionary origins of the foraging behavior observed in plasmodial slime molds"
            },
            {
              "id": "C",
              "text": "To compare the growth rate of a slime mold network with the pace of railway construction around Tokyo"
            },
            {
              "id": "D",
              "text": "To describe a brainless organism's ability to build efficient networks and the interest that ability holds for engineers"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text introduces the organism, recounts the Tokyo-map experiment demonstrating its network-building, and closes with why engineers care — the two halves D names: the organism's demonstrated ability and the engineers' interest.\n\n**The Full Solution:**\n- The first three sentences establish the surprise: a single brainless cell pruned itself into a network judged comparable to a real rail system.\n- The final two sentences convert the finding into significance: a decentralized problem-solver as a template for routing algorithms.\n- D covers both movements; each wrong answer invents a purpose the text never pursues.\n\n**Why the other choices are wrong:**\n- A: The text treats the experiment's result as credible throughout; no doubt about laboratory measurement is raised.\n- B: Evolution is never mentioned — the foraging behavior is described, not traced to origins.\n- C: The comparison drawn is between the finished networks' efficiency and cost, not between rates of growth and construction."
        },
        {
          "id": 636,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Between the 1890s and the 1950s, several American cities moved mail through networks of underground pneumatic tubes, firing canisters between post offices on jets of compressed air at speeds no street traffic could match. At its peak, New York's system carried roughly 30 percent of the city's mail. Yet the networks were expensive to extend — every new destination meant digging — and each canister held only about six hundred letters. As trucks grew faster and cheaper and mail volumes swelled, cities shut their systems down; New York's closed in 1953.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "New York's pneumatic tube network was the largest in the world and once carried a substantial share of the city's mail between its post offices."
            },
            {
              "id": "B",
              "text": "Pneumatic tubes moved mail faster than any technology that has replaced them."
            },
            {
              "id": "C",
              "text": "Cities abandoned pneumatic mail because compressed air proved too costly to generate."
            },
            {
              "id": "D",
              "text": "Though fast, pneumatic mail networks were too costly and limited in capacity to survive competition from improving alternatives."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text grants the tubes their speed, then explains their weaknesses — expansion costs and limited capacity — and their loss to cheaper, faster trucks: a rise-and-fall whose cause D states.\n\n**The Full Solution:**\n- The \"Yet\" sentence is the hinge: expense (\"every new destination meant digging\") and capacity (\"only about six hundred letters\") are the limits.\n- The final sentence supplies the competitive pressure (better trucks, swelling volumes) and the outcome (systems shut down).\n- D binds speed, cost, capacity, and competition into the single idea the passage develops.\n\n**Why the other choices are wrong:**\n- A: The text notes New York's share but never calls its network the world's largest — and either way, one city's system is a detail, not the idea.\n- B: The text says street traffic of the era couldn't match the tubes; it makes no claim about later technologies.\n- C: The stated costs are digging new lines, not generating compressed air — C invents a cause the text doesn't give."
        },
        {
          "id": 639,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Nacre, the iridescent lining of some mollusk shells, is about ninety-five percent aragonite, a brittle mineral that shatters easily in bulk form. Yet nacre itself is remarkably tough. Materials scientists attribute the difference to architecture. Nacre stacks microscopic mineral tablets in staggered layers, mortared with thin sheets of pliable protein, so that a spreading crack is repeatedly deflected at the soft joints instead of running straight through. On this account, the toughness comes from the arrangement, not the ingredients.",
          "question": "Which finding from a materials-science study, if true, would most directly support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "A synthetic composite made of a brittle ceramic in staggered, polymer-mortared layers proved many times tougher than a solid block of that ceramic."
            },
            {
              "id": "B",
              "text": "Aragonite crystals grown in a laboratory and compressed into solid blocks shattered just as easily under testing as aragonite taken from natural mollusk shells."
            },
            {
              "id": "C",
              "text": "Mollusk species living in rough coastal water tend to produce thicker shells than related species living in calm water."
            },
            {
              "id": "D",
              "text": "Nacre's iridescence results from the interference of light waves reflecting off its stacked mineral layers."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim says arrangement, not ingredients, creates the toughness — and A is the clean test: keep a brittle ingredient, impose nacre's staggered-and-mortared arrangement, and toughness appears many times over.\n\n**The Full Solution:**\n- The claim's testable content: the same brittle material should become tough once organized in nacre's architecture.\n- A realizes that experiment with a synthetic stand-in and reports the predicted result, directly confirming that the arrangement does the work.\n\n**Why the other choices are wrong:**\n- B: It shows aragonite is brittle wherever it comes from — background the claim already assumes — without ever testing an arrangement.\n- C: Shell thickness across species concerns how much material is made, not whether architecture toughens it.\n- D: It ties the layers to optics, explaining the iridescence rather than anything about resisting cracks."
        },
        {
          "id": 643,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Lowlanders who settle at high altitude respond to the thin air by producing extra red blood cells. Andean highlanders, whose ancestors have lived near four thousand meters for millennia, show the same trait: hemoglobin concentrations well above sea-level norms. The anthropologist Cynthia Beall found that Tibetan highlanders, also settled at comparable altitudes for millennia, follow a different pattern. Their hemoglobin stays near sea-level values, and oxygen delivery is sustained instead by faster breathing and by elevated nitric oxide, which widens blood vessels and speeds the flow. Blood thickened by extra red cells, moreover, moves sluggishly and carries risks in pregnancy. Taken together, these observations suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "Andean highlanders would lose their elevated hemoglobin within a generation of moving to sea level."
            },
            {
              "id": "B",
              "text": "the Tibetan pattern arose because altitudes on the Tibetan plateau are too low to demand any physiological adjustment."
            },
            {
              "id": "C",
              "text": "evolution has produced more than one workable response to thin air, and the Tibetan response avoids costs that accompany elevated hemoglobin."
            },
            {
              "id": "D",
              "text": "the extra red blood cells produced by Andean highlanders provide no benefit at high altitude."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Two long-established populations solved the same problem differently — more hemoglobin in the Andes, faster breathing and freer flow in Tibet — so more than one response works; and since thick blood is sluggish and risky in pregnancy, the Tibetan route sidesteps costs the other carries. C draws both halves and nothing more.\n\n**The Full Solution:**\n- Premise set one: Andeans and acclimatizing lowlanders both rely on extra red cells; Tibetans, also at altitude for millennia, manage without them — establishing two distinct, functioning solutions.\n- Premise set two: elevated hemoglobin has stated downsides (sluggish flow, pregnancy risks), which the Tibetan pattern avoids.\n- The conclusion must combine plurality of solutions with the cost asymmetry — exactly C.\n\n**Why the other choices are wrong:**\n- A: The text says nothing about what happens when highlanders descend, or how fast any trait reverses.\n- B: It contradicts the stated facts — the altitudes are \"comparable,\" and Tibetans do adjust, just by other means.\n- D: It overreaches; the extra cells sustain Andean populations at altitude, so \"no benefit\" is unsupported — only costs are established."
        },
        {
          "id": 641,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Gasoline prices in the United States can rise or fall sharply from one year to the next. Many economists argue that in the short run, Americans change how much gasoline they buy very little when the price changes, since most people still need to drive to work and school. In this view, the nation's gasoline use should hold roughly steady even as the price at the pump swings widely.",
          "questionTable": {
            "type": "table",
            "caption": "U.S. gasoline use and average retail price of regular gasoline in selected years",
            "headers": [
              "Year",
              "Gasoline use (million barrels per day)",
              "Average retail price (dollars per gallon)"
            ],
            "rows": [
              [
                "2012",
                "8.68",
                "3.62"
              ],
              [
                "2015",
                "9.18",
                "2.43"
              ],
              [
                "2018",
                "9.33",
                "2.72"
              ],
              [
                "2022",
                "8.81",
                "3.95"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the team's claim?",
          "choices": [
            {
              "id": "A",
              "text": "Gasoline use stayed between 8.68 and 9.33 million barrels per day in every year shown, while the price ranged from $2.43 to $3.95."
            },
            {
              "id": "B",
              "text": "The average retail price of regular gasoline reached its highest level in the table, $3.95 per gallon, in 2022."
            },
            {
              "id": "C",
              "text": "Gasoline use was higher in 2018, at 9.33 million barrels per day, than in any of the three other years for which the table reports gasoline use."
            },
            {
              "id": "D",
              "text": "The price of gasoline rose whenever gasoline use fell and fell whenever gasoline use rose."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim has two parts: gasoline use holds roughly steady, and the price swings widely. Choice A documents both: use stayed in a narrow band of 8.68 to 9.33 million barrels per day, while the price ranged from $2.43 to $3.95 per gallon.\n\n**The Full Solution:**\n- Steady use shows in the first data column's tight spread (less than 8% from lowest to highest).\n- The wide swing shows in the price column, where the highest price is more than one and a half times the lowest.\n- Setting the steady series beside the volatile one is exactly what the economists' claim requires.\n\n**Why the other choices are wrong:**\n- B: A single price peak shows neither how widely the price swung nor anything about gasoline use.\n- C: Picking out the year of highest use says nothing about the price, and it emphasizes a change in use rather than its steadiness.\n- D: The table contradicts this rule: between 2015 and 2018, gasoline use rose and the price rose too."
        },
        {
          "id": 638,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The Dutch tulip mania of the 1630s is the textbook cautionary tale of financial folly: fortunes staked on single bulbs, a market collapse in 1637, ruin sweeping the country. The historian Anne Goldgar, working through notarial archives and merchants' records, found a smaller episode. Trading in rare bulbs was confined to a fairly small circle of well-off merchants and craftsmen. Of the many traders she identified, fewer than half a dozen ran into financial trouble, and even for them, tulips may not have been to blame. The legend's scale, she argues, came largely from moralizing pamphlets that later writers repeated as fact.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Notarial records show that trading in tulip bulbs was illegal in most Dutch cities during the 1630s."
            },
            {
              "id": "B",
              "text": "The collapse of tulip prices in 1637 caused financial ruin throughout the Netherlands."
            },
            {
              "id": "C",
              "text": "Moralizing pamphlets published during the tulip mania exaggerated the beauty and rarity of the bulbs being traded in order to drive their prices even higher."
            },
            {
              "id": "D",
              "text": "Archival research indicates the tulip mania was far smaller than legend holds, its reputation owing more to moralizing pamphlets than to documented losses."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text sets the legend against Goldgar's archival findings — a small circle of traders, almost no one ruined — and closes with her explanation for the legend's scale: moralizing pamphlets repeated as fact. D contains both the correction and the explanation.\n\n**The Full Solution:**\n- Sentence one states the received story; the archival middle shrinks it point by point (a small circle of traders, fewer than half a dozen in trouble, tulips not clearly to blame).\n- The final sentence explains where the legend came from — pamphlets that later writers mistook for fact.\n- The main idea must span that whole reversal, which only D does.\n\n**Why the other choices are wrong:**\n- A: Illegality is never mentioned; notarial archives appear as sources, not as evidence of prohibition.\n- B: It repeats the legend that the passage is built to dismantle.\n- C: The pamphlets inflated the episode's ruinousness, not the bulbs' beauty or rarity, and the text gives them no price-raising motive — and even corrected, that is a supporting detail, not the central claim."
        },
        {
          "id": 637,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Deep in a fish's inner ear sit the otoliths, small stones of calcium carbonate that grow throughout the animal's life. Their growth is not continuous but rhythmic: material is deposited more quickly by day than by night, producing microscopic bands, one per day, like tree rings compressed to the width of a hair. Counting the bands under a microscope tells a biologist a larval fish's age in days. The width of each band records how fast the fish was growing when that band formed, and chemical traces in the stone can reveal the temperature and even the type of water the fish passed through.",
          "question": "According to the text, why do otoliths form daily bands?",
          "choices": [
            {
              "id": "A",
              "text": "Because fish alternate between feeding at the surface and resting at depth."
            },
            {
              "id": "B",
              "text": "Because material is deposited on the stones at different rates by day and by night."
            },
            {
              "id": "C",
              "text": "Because the temperature of the water surrounding a fish typically rises by day and falls again at night."
            },
            {
              "id": "D",
              "text": "Because the stones stop growing entirely whenever a fish stops swimming."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text states the cause directly: growth \"is not continuous but rhythmic: material is deposited more quickly by day than by night, producing microscopic bands, one per day.\"\n\n**The Full Solution:**\n- The question asks for the stated reason the bands are daily.\n- The colon in the second sentence delivers it — a day-night difference in deposition rate — and B restates that mechanism without addition.\n\n**Why the other choices are wrong:**\n- A: Feeding and resting behavior is never mentioned in the text.\n- C: Temperature appears only as information recoverable from the stone's chemistry, not as the stated cause of banding.\n- D: The text says the otoliths grow throughout life at varying speed; it never claims growth halts when swimming stops."
        },
        {
          "id": 640,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "In 2019, scheduled passenger flights in the United States served 522 commercial airports, from international hubs to small regional fields. Analysts reviewing Federal Aviation Administration figures have argued that air travel is far more concentrated than the size of this network suggests. A handful of hub airports, they claim, handles a share of all boardings far out of proportion to their number.",
          "questionTable": {
            "type": "table",
            "caption": "Passenger boardings at U.S. commercial airports in 2019, by airport category",
            "headers": [
              "Airport category",
              "Number of airports",
              "Boardings (millions)",
              "Share of all boardings"
            ],
            "rows": [
              [
                "Large hubs",
                "30",
                "663",
                "71%"
              ],
              [
                "Medium hubs",
                "32",
                "159",
                "17%"
              ],
              [
                "Small hubs",
                "74",
                "82",
                "9%"
              ],
              [
                "Nonhubs",
                "386",
                "31",
                "3%"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "There were 74 small hubs in 2019, more than twice as many as there were large hubs."
            },
            {
              "id": "B",
              "text": "Medium hubs and small hubs together accounted for about a quarter of all boardings in 2019."
            },
            {
              "id": "C",
              "text": "The 30 large hubs, under 6% of the 522 airports, handled 71% of all boardings in 2019."
            },
            {
              "id": "D",
              "text": "Nonhubs made up 386 of the 522 airports in 2019, far more than any other category of airport shown in the table."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The claim is about disproportion: a handful of hubs takes a share of boardings far out of proportion to their number. Choice C shows exactly that, setting the large hubs' small number (30 of 522 airports, under 6%) beside their large share of boardings (71%).\n\n**The Full Solution:**\n- Supporting a concentration claim requires relating a small group's size to its share of the total.\n- Choice C does both: it counts the large hubs against the whole network and gives their share of all boardings.\n\n**Why the other choices are wrong:**\n- A: It compares numbers of airports only; it says nothing about where passengers boarded.\n- B: It describes the middle categories, not the handful of hubs the claim is about, and it never relates their share to their number.\n- D: It counts the nonhubs without mentioning boardings, so it cannot show that travel is concentrated."
        },
        {
          "id": 642,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "In a public-goods experiment, players receive tokens and choose how many to contribute to a common pool, which is multiplied and shared equally among the group. A free rider keeps his own tokens while still collecting a share of the pool. Over repeated rounds, contributions typically start moderate and collapse toward zero. The economists Ernst Fehr and Simon Gächter added one feature: after each round, any player could pay a fee to reduce another player's earnings. Punishing was costly to the punisher and brought no material return, yet players used it freely against low contributors. Under its threat, contributions climbed round after round instead of collapsing. The finding suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "players in the punishment condition misunderstood how the common pool's multiplier worked."
            },
            {
              "id": "B",
              "text": "cooperation in groups collapses whenever a punishment option is available to players."
            },
            {
              "id": "C",
              "text": "many people will pay a personal cost to sanction free riding, and the prospect of such sanctions can sustain cooperation."
            },
            {
              "id": "D",
              "text": "free riding disappears only when punishing it yields a material profit for the punisher."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The two observations force the two-part conclusion: players punished free riders despite bearing a cost with no return (people will pay to sanction), and under the threat of sanction, contributions climbed instead of collapsing (sanctions sustain cooperation).\n\n**The Full Solution:**\n- Premise one: punishment cost the punisher and paid nothing back, \"yet players used it freely against low contributors.\"\n- Premise two: with punishment available, the usual collapse reversed into round-after-round growth.\n- C is the conjunction of exactly these two results, generalized no further than the evidence allows.\n\n**Why the other choices are wrong:**\n- A: Nothing suggests confusion — the baseline collapse shows players understood free riding paid, which is the puzzle punishment solved.\n- B: It inverts the result; the punishment condition is where cooperation grew.\n- D: The experiment shows the opposite — punishment carried no material profit, and free riding was suppressed anyway."
        },
        {
          "id": 647,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The village cooperative set out to revive the abandoned olive terraces above the valley by rebuilding the dry-stone retaining walls, by clearing the choked irrigation channels, and ______ the shared mill that had pressed the valley's harvest for generations.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "they reopened"
            },
            {
              "id": "B",
              "text": "by reopening"
            },
            {
              "id": "C",
              "text": "the reopening of"
            },
            {
              "id": "D",
              "text": "reopening"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The sentence lists three means to one end, and the first two are cast as \"by\" plus a gerund — \"by rebuilding..., by clearing...\" — so the third must match: \"by reopening.\"\n\n**The Full Solution:**\n- Identify the series: three coordinated phrases describing how the cooperative pursued the revival.\n- The established frame is \"by + gerund,\" repeated at each item; parallel structure requires the final item to keep the frame.\n\n**Why the other choices are wrong:**\n- A: \"They reopened\" switches to a finite clause mid-series, breaking the parallel and leaving \"and\" joining unlike structures.\n- C: \"The reopening of\" swaps in a noun phrase where the series has prepositional phrases.\n- D: Bare \"reopening\" drops the \"by\" that the first two items made part of the pattern, leaving the third item off-balance."
        },
        {
          "id": 646,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Readers of embossed books still rely on the 1824 code ______ first mapped the alphabet onto cells of six raised dots, each cell sized to sit beneath a single fingertip. Louis Braille devised the code as a teenager.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "that"
            },
            {
              "id": "B",
              "text": "that,"
            },
            {
              "id": "C",
              "text": ", that"
            },
            {
              "id": "D",
              "text": ", that,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The clause \"that first mapped the alphabet...\" is restrictive — it identifies which 1824 code is meant — and a restrictive \"that\" clause attaches to its noun with no comma on either side.\n\n**The Full Solution:**\n- Ask whether the clause can be dropped: \"the 1824 code\" alone would leave the code unidentified, so the clause is essential, i.e., restrictive.\n- Restrictive clauses introduced by \"that\" are never set off by commas.\n\n**Why the other choices are wrong:**\n- B: A comma after \"that\" severs the relative pronoun from its own clause.\n- C: A comma before \"that\" treats the essential clause as an aside, and Standard English does not pair \"that\" with nonrestrictive commas.\n- D: Commas on both sides compound the two errors at once."
        },
        {
          "id": 645,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Four engrossments of Magna Carta written out in 1215 survive today: two at the British Library and one each at Lincoln and Salisbury cathedrals. Each of the four ______ small differences in wording and handwriting, because the copies were written out by hand by different scribes.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "preserves"
            },
            {
              "id": "B",
              "text": "preserve"
            },
            {
              "id": "C",
              "text": "are preserving"
            },
            {
              "id": "D",
              "text": "have preserved"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The subject is the singular pronoun \"Each,\" so the verb must be singular: \"Each of the four preserves.\"\n\n**The Full Solution:**\n- \"Each\" is grammatically singular even when followed by \"of the four\" — the prepositional phrase does not transfer its plural number to the subject.\n- Singular subject, singular present-tense verb: \"preserves.\"\n\n**Why the other choices are wrong:**\n- B: \"Preserve\" is plural, agreeing with the nearby \"four\" instead of the true subject \"Each.\"\n- C: \"Are preserving\" is plural as well, with the added oddity of a progressive aspect for a standing condition.\n- D: \"Have preserved\" is plural; only \"has preserved\" could pair with \"Each,\" and that option is not offered."
        },
        {
          "id": 649,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "In Comox Harbour, on the Salish Sea, lines of wooden stakes once supported fences that trapped herring and salmon as the tide fell. After recording the positions of more than 13,000 of these stakes and radiocarbon dating dozens of them, ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "the traps, archaeologists have concluded, were in use from about 1,300 years ago until roughly a century ago."
            },
            {
              "id": "B",
              "text": "the conclusion of archaeologists is that the traps were in use from about 1,300 years ago until roughly a century ago."
            },
            {
              "id": "C",
              "text": "use of the traps, archaeologists have concluded, extended from about 1,300 years ago until roughly a century ago."
            },
            {
              "id": "D",
              "text": "archaeologists have concluded that the traps were in use from about 1,300 years ago until roughly a century ago."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The opening phrase \"After recording... and radiocarbon dating...\" needs a subject that did the recording and dating; only D puts that subject — \"archaeologists\" — immediately after the modifier.\n\n**The Full Solution:**\n- An introductory phrase like this attaches to the subject of the main clause that follows.\n- The people who recorded and dated the stakes are the archaeologists, so \"archaeologists\" must head the main clause: \"...dating dozens of them, archaeologists have concluded that...\"\n\n**Why the other choices are wrong:**\n- A: It makes \"the traps\" the subject, absurdly crediting the traps with recording and dating their own stakes.\n- B: \"The conclusion of archaeologists\" is the subject, but a conclusion cannot record stakes or date them — the modifier dangles.\n- C: \"Use of the traps\" becomes the recorder, another dangling attachment; tucking \"archaeologists have concluded\" inside commas does not rescue the opening phrase."
        },
        {
          "id": 648,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In Norway and Sweden, a right of access lets anyone hike or camp on open land regardless of who owns ______ the right carries obligations, such as moving on after a night or two.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "it, however,"
            },
            {
              "id": "B",
              "text": "it; however,"
            },
            {
              "id": "C",
              "text": "it, however;"
            },
            {
              "id": "D",
              "text": "it however,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Two independent clauses meet here, joined by the conjunctive adverb \"however\" — and that construction takes a semicolon before \"however\" and a comma after it.\n\n**The Full Solution:**\n- Clause one: \"...a right of access lets anyone hike or camp on open land regardless of who owns it.\" Complete.\n- Clause two: \"the right carries obligations...\" Also complete.\n- \"However\" is an adverb, not a conjunction, so it cannot join clauses with commas alone; the boundary needs the semicolon, and \"however\" keeps its trailing comma.\n\n**Why the other choices are wrong:**\n- A: Commas on both sides of \"however\" leave the two independent clauses spliced together.\n- C: It puts the strong mark on the wrong side — the clause boundary falls before \"however,\" not after it.\n- D: With no punctuation before \"however,\" the clauses fuse outright."
        },
        {
          "id": 644,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Investigations of nineteenth-century mill disasters kept returning to a hazard that outsiders were inclined to ______ flour dust suspended in a mill's air is explosive. In Minneapolis in 1878, a stray spark leveled an entire mill in seconds.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "dismiss: the"
            },
            {
              "id": "B",
              "text": "dismiss, the"
            },
            {
              "id": "C",
              "text": "dismiss the"
            },
            {
              "id": "D",
              "text": "dismiss and the"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The first clause promises a specification — a hazard outsiders dismissed — and what follows delivers it. A colon after the independent opening clause is the mark that introduces that explanation.\n\n**The Full Solution:**\n- The clause before the blank is independent and ends on a noun phrase (\"a hazard that outsiders were inclined to dismiss\") that begs to be spelled out.\n- What follows the blank, \"the flour dust suspended in a mill's air is explosive,\" is also an independent clause, and it names the hazard.\n- An independent clause followed by its own elaboration takes a colon.\n\n**Why the other choices are wrong:**\n- B: A comma between the two independent clauses is a comma splice.\n- C: With nothing at the boundary, two complete clauses fuse into a run-on.\n- D: Joining two independent clauses with \"and\" alone, without a comma before it, also produces a run-on — and \"and\" would hide the fact that the second clause explains the first."
        },
        {
          "id": 651,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "When the warship Vasa was raised from Stockholm harbor in 1961 after 333 years underwater, conservators prepared for the familiar threats to waterlogged wood: rot and shrinkage. ______ the gravest threat emerged decades later from inside the timbers: sulfur absorbed from the harbor water was oxidizing into sulfuric acid, a reaction hastened by iron from the ship's corroded bolts.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Moreover,"
            },
            {
              "id": "B",
              "text": "Likewise,"
            },
            {
              "id": "C",
              "text": "Therefore,"
            },
            {
              "id": "D",
              "text": "Instead,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The conservators prepared for familiar threats, and a different one materialized in their place — the expected dangers displaced by an unexpected one. \"Instead,\" is the transition of substitution.\n\n**The Full Solution:**\n- Before the blank: the anticipated threats, rot and shrinkage.\n- After the blank: the actual gravest threat, acid forming inside the timbers — not what the conservators prepared for.\n- When what happens replaces what was expected, \"Instead\" marks the swap.\n\n**Why the other choices are wrong:**\n- A: \"Moreover\" would simply stack the acid on top of the threats already named, but the text opposes the expectation to the outcome rather than adding to it.\n- B: \"Likewise\" asserts similarity between the familiar threats and the acid, missing that the second displaced the first as the gravest danger.\n- C: \"Therefore\" would make the acid a consequence of the conservators' preparations, a causal link that does not exist."
        },
        {
          "id": 650,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In 1997, researchers at MIT got a single microcapsule of electronic ink to work, watching the tiny particles inside it move back and forth under a microscope. ______ displays built from millions of such capsules are commonplace — in e-book readers, supermarket shelf labels, and transit signs, legible in full sun and drawing power only when the image changes.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "Today,"
            },
            {
              "id": "C",
              "text": "In contrast,"
            },
            {
              "id": "D",
              "text": "Accordingly,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The passage moves along a timeline — a single working capsule in 1997, then the present ubiquity of the displays — and \"Today,\" is the transition that carries the reader to the later point in time.\n\n**The Full Solution:**\n- Before the blank: the technology's earliest state, explicitly dated to 1997.\n- After the blank: its current state, described in present-tense abundance.\n- Then-versus-now sequencing wants a time transition, and \"Today\" supplies the \"now.\"\n\n**Why the other choices are wrong:**\n- A: \"Nevertheless\" concedes an obstacle and pushes past it, but the first sentence poses no obstacle to the second — the single capsule is simply the earlier chapter of the same development.\n- C: \"In contrast\" frames the two states as opposed alternatives, when they are stages of one technology's growth; the difference is temporal, not adversative.\n- D: \"Accordingly\" would make today's ubiquity a logical consequence of the 1997 experiment, a causal claim the passage never makes."
        },
        {
          "id": 652,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Many medieval cathedral stones carry small chiseled symbols, each the personal sign of the mason who shaped the block; because masons were often paid by the piece, the marks let the builders credit each man's output. ______ potters in Roman Gaul pressed name stamps into their mass-produced bowls, and the tens of thousands of surviving stamps let archaeologists trace individual workshops' output and trade.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Similarly,"
            },
            {
              "id": "B",
              "text": "By contrast,"
            },
            {
              "id": "C",
              "text": "In turn,"
            },
            {
              "id": "D",
              "text": "Granted,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The two sentences describe parallel practices — artisans in different trades and eras marking their work so that output could be tracked to the individual — and \"Similarly,\" announces exactly that parallel.\n\n**The Full Solution:**\n- Before the blank: masons' marks tying each dressed stone to its maker for piecework accounting.\n- After the blank: potters' stamps tying each bowl to its maker, now legible to archaeologists.\n- Same underlying practice, second instance — the relation is likeness, and the transition must say so.\n\n**Why the other choices are wrong:**\n- B: \"By contrast\" promises a difference, but the potters' stamps repeat the masons' logic rather than depart from it.\n- C: \"In turn\" implies a sequence or reciprocal step — the potters did not act in response to the masons, and the Roman practice in fact came first.\n- D: \"Granted\" concedes a point against the preceding claim, but the second sentence supports rather than qualifies the first."
        },
        {
          "id": 653,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Most Amazonian soils are poor: heavy rains leach away nutrients, and cleared fields often become infertile within a few years.",
              "Scattered along the Amazon and its tributaries are patches of deep black soil known as terra preta.",
              "Terra preta is rich in charcoal and nutrients, and it remains fertile after centuries of cultivation.",
              "The soil scientist Wim Sombroek helped show that terra preta was created by pre-Columbian communities.",
              "Researchers study terra preta as evidence that large, settled populations once farmed the Amazon basin."
            ],
            "goal": "The student wants to introduce terra preta to an audience unfamiliar with it."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "The soil scientist Wim Sombroek helped show that pre-Columbian communities created the soil."
            },
            {
              "id": "B",
              "text": "Terra preta, a deep black soil found along the Amazon, stays fertile for centuries in a region whose soils are otherwise quickly exhausted."
            },
            {
              "id": "C",
              "text": "Because heavy tropical rains leach away nutrients, fields cleared for farming in the Amazon often become infertile within only a few years of cultivation."
            },
            {
              "id": "D",
              "text": "Researchers regard terra preta as evidence that large, settled populations once farmed the Amazon basin."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** An introduction for unfamiliar readers must name the thing, say what it is, and convey why it is notable — B does all three: the name, the definition (deep black soil found along the Amazon), and the striking property (centuries of fertility where soils are otherwise quickly spent).\n\n**The Full Solution:**\n- The audience knows nothing, so the sentence must be self-contained: term plus identification plus significance.\n- B compresses the second and third notes into the identification and borrows the first note's contrast to make the significance legible at first read.\n\n**Why the other choices are wrong:**\n- A: It reports Sombroek's finding without ever naming or describing terra preta — an unfamiliar reader cannot tell what soil is meant or why it matters.\n- C: It is all background: the region's poor soils are described, and terra preta never appears.\n- D: It states significance for researchers but assumes the reader already knows what terra preta is — the one thing this audience lacks."
        },
        {
          "id": 654,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Many parents believe that eating sugar makes children hyperactive.",
              "In a study published in 1994, pediatrician Mark Wolraich and colleagues tested this belief.",
              "For three-week periods, children followed diets sweetened mainly with sugar, with aspartame, or with saccharin.",
              "Neither the families nor the researchers knew which diet a child was on at a given time.",
              "The researchers concluded that the diet high in sugar did not affect the children's behavior or cognitive performance."
            ],
            "goal": "The student wants to emphasize the difference between a common belief about sugar and the study's result."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Mark Wolraich and colleagues had children follow diets sweetened mainly with sugar, with aspartame, or with saccharin."
            },
            {
              "id": "B",
              "text": "Neither the families nor the researchers knew whether a child's diet during a given three-week period was sweetened mainly with sugar, with aspartame, or with saccharin."
            },
            {
              "id": "C",
              "text": "Although many parents believe that sugar makes children hyperactive, Wolraich's study found that a diet high in sugar did not change children's behavior."
            },
            {
              "id": "D",
              "text": "The researchers concluded that the diet high in sugar did not affect the children's behavior or cognitive performance."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The goal pairs a common belief with a result that cut against it, and C holds both in one sentence: the belief (sugar makes children hyperactive) fronted by \"Although,\" then the finding that a high-sugar diet did not change the children's behavior.\n\n**The Full Solution:**\n- Required elements: the belief from the first note, the outcome from the last note, and a frame that opposes them.\n- C's concessive structure does the opposing work explicitly — belief conceded, result delivered — which is what \"emphasize the difference\" demands.\n\n**Why the other choices are wrong:**\n- A: It describes the study's setup; neither the belief nor the result appears, so no difference can be felt.\n- B: It explains how the study kept everyone unaware of the diets but mentions neither the common belief nor the outcome.\n- D: It reports the result alone — without the belief beside it, the contrast the goal calls for never appears."
        }
      ]
    }
  ]
};

export default practiceTest6RW;
