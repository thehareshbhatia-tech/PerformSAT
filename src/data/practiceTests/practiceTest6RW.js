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
          "passage": "Wine grapes develop much of their flavor in the final weeks before harvest. Many growers therefore withhold irrigation late in the season: vines under mild water stress produce smaller berries with thicker skins, and because most of a grape's flavor compounds are made in the skin, the practice tends to ______ the concentration of those compounds in the finished wine.",
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
          "explanation": "**Choice D is correct.** Smaller berries with thicker, flavor-rich skins mean more flavor compounds relative to juice, so the practice tends to \"increase\" their concentration.\n\n**The Full Solution:**\n- The colon introduces the reasoning: water stress yields smaller berries with thicker skins, and the skin is where most flavor compounds are made.\n- Less berry and proportionally more skin pushes the concentration of flavor compounds up, so the blank needs a word meaning raise — \"increase.\"\n\n**Why the other choices are wrong:**\n- A: \"Dilute\" is the opposite of what the evidence supports — smaller, skin-heavy berries concentrate flavor rather than watering it down.\n- B: \"Delay\" mistakes the effect for a timing change; the text says nothing about flavor developing later.\n- C: \"Conceal\" would mean hiding the compounds, which no part of the text suggests."
        },
        {
          "id": 603,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "During hibernation, the body temperature of an Arctic ground squirrel can fall to nearly three degrees below the freezing point of water, a temperature at which ice crystals would normally form in a mammal's tissues and fatally injure them. Yet the squirrels come through such episodes with their tissues ______: their body fluids stay liquid in a supercooled state, and no ice forms to damage their cells.",
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
          "explanation": "**Choice A is correct.** The contrast set up by \"Yet\" demands a word opposing the expected fatal injury, and the colon spells it out: the fluids stay liquid and \"no ice forms to damage their cells\" — the tissues are \"intact.\"\n\n**The Full Solution:**\n- The first sentence establishes an expectation: at that temperature, ice would normally form in the tissues and \"fatally injure them.\"\n- \"Yet\" signals that the outcome defied that expectation, and the elaboration after the colon — no ice, no damage to cells — restates the blank directly: the tissues remain whole and undamaged.\n\n**Why the other choices are wrong:**\n- B: \"Flexible\" describes pliability, a property the text never discusses.\n- C: \"Fragile\" reverses the outcome, agreeing with the expectation the \"Yet\" is there to overturn.\n- D: \"Inactive\" might describe a hibernating animal, but the colon explains that the tissues escape damage, not that they stop functioning."
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
          "passage": "The small white lumps of lime scattered through ancient Roman concrete were long taken as a sign of careless workmanship, evidence that builders had mixed their materials poorly. The chemistry of the lumps, however, ______ that assumption: analyses of 2,000-year-old Roman concrete indicate that the lumps formed when builders added quicklime to the hot mix, and that the lumps can later dissolve and refill cracks in the concrete.",
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
          "explanation": "**Choice D is correct.** \"Belies\" means shows to be false, and that is the relation the sentence needs: if the lumps were produced deliberately and help the concrete repair itself, the assumption that they reveal careless mixing cannot stand.\n\n**The Full Solution:**\n- The blank governs the relation between the lumps' chemistry and \"that assumption\" — the view that the lumps were a sign of poor workmanship.\n- The colon explains that the lumps formed from quicklime added to the hot mix and that they can later refill cracks, which discredits the careless-mixing view; \"however\" confirms the blank must oppose it.\n- A word meaning contradicts or gives the lie to — \"belies\" — completes the logic.\n\n**Why the other choices are wrong:**\n- A: \"Echoes\" would have the chemistry repeating the assumption, but the evidence undermines it.\n- B: \"Predates\" states a chronological relation, while the sentence — flagged by \"however\" and the colon's reasoning — requires a logical one.\n- C: \"Conceals\" would mean the chemistry hides the assumption, an incoherent relation between evidence and a scholarly view."
        },
        {
          "id": 607,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Sailors' reports of lone waves towering over the sea around them were long dismissed by oceanographers as exaggeration. The skepticism rested on an assumption: in the standard statistical picture of the sea surface, where many small waves add together at random, a wave of the reported size should arise perhaps once in ten thousand years. __Equations that let waves interact rather than merely add later showed that no such rarity is required: under some conditions, a group of waves can pass energy among its members and briefly concentrate it into a single giant far more often than random addition predicts.__ In 2001, satellite radar images covering just three weeks revealed ten waves more than 25 meters high.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It concedes that the oceanographers' doubts about the reports were reasonable given the statistics available at the time."
            },
            {
              "id": "B",
              "text": "It introduces a competing set of shipboard observations that the equations discussed later in the text failed to predict."
            },
            {
              "id": "C",
              "text": "It restates the assumption on which the oceanographers' skepticism rested."
            },
            {
              "id": "D",
              "text": "It explains why the assumption underlying the earlier skepticism — that so towering a wave must be vanishingly rare — does not hold."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The skepticism depended on the assumption that a wave of the reported size must be almost impossibly rare; the underlined sentence reports the theoretical result that dissolves that assumption — interacting waves can funnel a group's energy into one brief giant far more often than random addition allows.\n\n**The Full Solution:**\n- The second sentence isolates the load-bearing assumption: under random addition, a wave that size \"should arise perhaps once in ten thousand years.\"\n- The underlined sentence answers it directly (\"no such rarity is required\") and gives the mechanism: waves passing energy among themselves and concentrating it into a single short-lived giant.\n- The final sentence adds observational support — ten giant waves found in just three weeks of satellite images — so the underlined sentence functions as the text's pivot from doubt to explanation.\n\n**Why the other choices are wrong:**\n- A: The sentence undercuts the doubts rather than conceding their reasonableness.\n- B: The underlined sentence contains equations, not shipboard observations, and nothing in the text says the equations failed to predict anything.\n- C: The assumption is stated in the sentence before the underlined one; the underlined sentence refutes it."
        },
        {
          "id": 606,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Reefs built by glass sponges — animals whose lattice skeletons are spun from silica — were known from fossil beds across a belt of Jurassic seafloor, and paleontologists long assumed that the reef-building forms had died out ages ago. In 1987, surveyors mapping the seafloor off British Columbia found towering mounds of living glass sponges, some twenty meters high and thousands of years old. Research teams have since documented how the reefs grow, with each generation of sponges settling on the silica scaffolds of its predecessors, and have begun assessing how vulnerable the structures are to trawling and to changes in ocean chemistry.",
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
          "explanation": "**Choice A is correct.** The text moves from the assumption that glass sponge reefs were extinct, to the 1987 discovery of living ones, to the research that followed — a discovery-and-aftermath account, which is exactly what choice A states.\n\n**The Full Solution:**\n- Sentence one sets up the old belief: reef-building glass sponges were known only as fossils.\n- Sentence two overturns it with the discovery of living, twenty-meter reefs.\n- Sentence three surveys the ensuing research on how the reefs grow and what threatens them, completing the arc choice A describes.\n\n**Why the other choices are wrong:**\n- B: The extraction of silica from seawater is never explained; silica appears only in describing the skeletons.\n- C: Trawling is mentioned once as a threat under assessment, not ranked as the greatest, and no argument is mounted.\n- D: The Jurassic forms appear only to establish the extinction assumption; no comparison of habits is drawn."
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
              "text": "The multi-ton stone figures of Rapa Nui, the moai, were carved at a single quarry and moved as far as eighteen kilometers to platforms along the coast. Drawing on Polynesian methods for moving canoes and on trials with replicas, the archaeologist Jo Anne Van Tilburg has argued that work crews lashed each statue horizontally to a wooden sledge and hauled it over log rollers or rails — a method her team tested in 1998 by moving a ten-ton concrete replica with several dozen islanders."
            },
            {
              "label": "Text 2",
              "text": "Archaeologists Terry Hunt and Carl Lipo note that moai abandoned along the island's ancient roads lean forward, with wide D-shaped bases — features that would be liabilities for a statue dragged on its back but assets for one moved upright. In their experiments, a crew of eighteen people used ropes to rock an upright replica weighing more than four tons from side to side and \"walked\" it 100 meters in 40 minutes. The statues' own design, they conclude, records the transport method."
            }
          ],
          "question": "Based on the texts, how would Hunt and Lipo (Text 2) most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "They would deny that experiments with replicas can reveal how the actual statues were moved."
            },
            {
              "id": "B",
              "text": "They would counter that the statues' own design features point to upright transport rather than hauling on a sledge."
            },
            {
              "id": "C",
              "text": "They would accept that sledges were used but insist that moving each statue demanded far larger crews than Text 1 suggests."
            },
            {
              "id": "D",
              "text": "They would object that Text 1 overstates the distance that the statues traveled from the quarry to the coast."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Hunt and Lipo's case rests on the statues themselves — the forward lean and wide bases that suit upright \"walking\" but would hinder a statue dragged on its back — so they would answer Text 1's sledge argument by pointing to those design features.\n\n**The Full Solution:**\n- Text 1's method is horizontal: statue lashed to a sledge, hauled over rollers or rails.\n- Text 2 argues the physical evidence cuts the other way: the road moai's lean and base shape are \"liabilities for a statue dragged on its back but assets for one moved upright,\" and their walking experiment showed the upright method works.\n- Their concluding claim — the design \"records the transport method\" — is exactly the rejoinder choice B attributes to them.\n\n**Why the other choices are wrong:**\n- A: Hunt and Lipo ran replica experiments themselves, so they could hardly dismiss the approach.\n- C: They do not accept sledges at all; their objection is to the method, not the crew size.\n- D: Text 2 never disputes how far the statues traveled — its evidence is the statues' design, not the route.",
          "_meta": {
            "source_pair": "moai transport (horizontal sledge-hauling vs upright walking)",
            "crossTextRelationship": "alternative-explanation"
          }
        },
        {
          "id": 605,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Many early sound recordings survive only on wax cylinders, a medium so soft that every playback with a stylus wears away some of the grooves it reads. For decades, archivists therefore faced a choice between preserving such cylinders and hearing them. __The physicist Carl Haber and his colleagues developed a way out of the dilemma: an optical system images a cylinder's grooves in microscopic detail, and software converts their measured shape into sound, so that a recording can be played without anything touching it.__ Cylinders too fragile to play, including some that had cracked into pieces, have since given up their contents this way.",
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
          "explanation": "**Choice A is correct.** The sentences before the underlined one pose a dilemma — preserve the cylinders or hear them — and the underlined sentence supplies \"a way out of the dilemma,\" describing the optical method that lets both happen at once.\n\n**The Full Solution:**\n- The text's first two sentences build the problem: each playback wears the grooves, so preservation and listening seemed mutually exclusive.\n- The underlined sentence announces and explains the solution: image the grooves, convert their shape to sound, touch nothing.\n- The final sentence then reports the payoff, confirming the underlined sentence's role as the turning point that resolves the problem.\n\n**Why the other choices are wrong:**\n- B: The sentence never disputes the cylinders' fragility — the optical method exists precisely because they are fragile.\n- C: No damaged recording is offered as an example; cracked cylinders appear later, as beneficiaries of the method.\n- D: Storage is never at issue, and the softness of wax is described before the underlined sentence, not in it."
        },
        {
          "id": 610,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The cuttlefish is a master of disguise despite being colorblind. Its skin is packed with pigment-filled sacs called chromatophores, each ringed by muscles that stretch the sac into a visible dot of color or let it shrink to near invisibility; beneath these lie reflective cells that return ambient light. To break up its outline on rough surfaces, the animal can also raise small bumps called papillae, changing the texture of its skin from smooth to spiky in less than a second.",
          "question": "According to the text, how does a cuttlefish change the texture of its skin?",
          "choices": [
            {
              "id": "A",
              "text": "It raises small bumps called papillae on the skin's surface."
            },
            {
              "id": "B",
              "text": "It contracts the muscles that ring each of its chromatophores."
            },
            {
              "id": "C",
              "text": "It releases pigment from sacs distributed across its skin."
            },
            {
              "id": "D",
              "text": "It angles its reflective cells to return more ambient light."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text ties texture change to one mechanism: the animal \"can also raise small bumps called papillae, changing the texture of its skin from smooth to spiky.\"\n\n**The Full Solution:**\n- The question asks specifically about texture, so the answer must come from the sentence about the skin's surface shape.\n- That sentence names the papillae as the feature raised to turn smooth skin spiky — choice A restates it directly.\n\n**Why the other choices are wrong:**\n- B: The chromatophore muscles control dots of color, not surface texture.\n- C: The pigment sacs are stretched or shrunk to show color; the text never says pigment is released, and color is not texture.\n- D: The reflective cells return ambient light; the text attributes no texture role to them and never mentions angling."
        },
        {
          "id": 615,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "The small marshes called prairie potholes once dotted the upper Midwest by the millions before many were drained for farming, often by burying drainage tiles beneath them. Restoring one might seem to demand heavy intervention, including replanting wetland species by hand. Yet in many restorations, crews did little more than break the buried tiles: the basins refilled with the next season's rains, and wetland plants, sprouting from seeds that had lain dormant in the soil, began returning within a few years. These outcomes suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "wetland plants cannot establish themselves in basins that have ever been drained for farming."
            },
            {
              "id": "B",
              "text": "restoring a drained pothole requires planting a wider variety of wetland species than restorers typically use."
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
          "passage": "At repair cafés, volunteers with tools and spare parts meet visitors who bring in broken household items — lamps, toasters, bicycles, torn clothing — and attempt fixes on the spot, free of charge. Coordinators of one city's five cafés, who log every item brought in over a season, have claimed that the events do more than raise awareness: at every location, they say, a clear majority of the items carried in go home working again.",
          "questionTable": {
            "type": "table",
            "caption": "Items brought to five repair cafés over one season and repair outcomes",
            "headers": [
              "Café",
              "Items brought in",
              "Items repaired on site",
              "Share repaired"
            ],
            "rows": [
              [
                "Northside",
                "214",
                "132",
                "62%"
              ],
              [
                "Riverfront",
                "183",
                "104",
                "57%"
              ],
              [
                "Old Market",
                "246",
                "153",
                "62%"
              ],
              [
                "Garden District",
                "158",
                "87",
                "55%"
              ],
              [
                "Union Hall",
                "201",
                "119",
                "59%"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Old Market received 246 items over the season, more than any other café in the city."
            },
            {
              "id": "B",
              "text": "Northside and Old Market each repaired 62% of the items that visitors brought in over the season, the highest share recorded at any of the city's five cafés."
            },
            {
              "id": "C",
              "text": "The five cafés together received more than 1,000 items over the course of the season."
            },
            {
              "id": "D",
              "text": "The share of items repaired on site exceeded half at every café, ranging from 55% at Garden District to 62% at Northside and Old Market."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The claim is about every location — \"at every location... a clear majority\" — so supporting it takes evidence spanning all five rows, and D provides exactly that: each café's repair share topped 50%, from 55% up to 62%.\n\n**The Full Solution:**\n- Restate the claim's scope: a majority of items repaired at each of the five cafés.\n- Only a choice that covers all five cafés can establish an at-every-location claim; D cites the full range and confirms the majority threshold everywhere.\n\n**Why the other choices are wrong:**\n- A: A single café's intake says nothing about repair outcomes anywhere.\n- B: Citing only the two best-performing cafés cannot establish a claim about all five.\n- C: The combined intake is volume, not outcome — it never touches the share repaired."
        },
        {
          "id": 611,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "In the schools of the Greek and Roman world, students preparing for public life worked through the progymnasmata, a fixed sequence of composition exercises that began with retelling a fable and ended with arguing for or against a proposed law. Each exercise added a new demand: after fables came narratives, then anecdotes and maxims to expand upon, and later speeches praising a figure or comparing two. A student never faced an open-ended assignment cold; every task rehearsed skills the previous ones had built.",
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
          "explanation": "**Choice B is correct.** The text's point is the design of the sequence: each exercise \"added a new demand\" and \"every task rehearsed skills the previous ones had built\" — cumulative, graded training in composition and rhetoric.\n\n**The Full Solution:**\n- The opening defines the progymnasmata as \"a fixed sequence\" running from fable to legal argument.\n- The middle sentence traces the order of the exercises, each adding one new demand.\n- The closing sentence states the principle behind the order: nothing faced cold, every task built on earlier ones. Choice B gathers all of this; the others each seize a fragment or add something the text never says.\n\n**Why the other choices are wrong:**\n- A: Fables were retold, not memorized, and the law exercise was rhetorical practice, not legal study.\n- C: The text never mentions natural talent; the sequence is described as building every student's skills step by step.\n- D: The final exercise is a detail marking the sequence's endpoint, not the idea the text is organized to convey."
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
              "text": "The geometric patterns used in jaali were chosen mainly to display the skill of individual carvers."
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
          "passage": "The carbon dioxide record kept since 1958 at the Mauna Loa Observatory in Hawaii traces a rising curve with a sawtooth edge: each year the concentration dips as Northern Hemisphere plants leaf out and draw carbon from the air, then climbs again as leaves fall and decay. A research team reviewing the record has argued that the long-term rise now dwarfs this seasonal breathing: over the decades, the baseline has climbed many times farther than the concentration swings within any single year.",
          "questionTable": {
            "type": "table",
            "caption": "Atmospheric carbon dioxide at Mauna Loa Observatory in selected years",
            "headers": [
              "Year",
              "Annual mean (parts per million)",
              "Seasonal swing, highest to lowest monthly mean (parts per million)"
            ],
            "rows": [
              [
                "1970",
                "325.7",
                "5.1"
              ],
              [
                "1990",
                "354.5",
                "6.0"
              ],
              [
                "2010",
                "390.1",
                "6.2"
              ],
              [
                "2023",
                "421.1",
                "5.5"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the team's claim?",
          "choices": [
            {
              "id": "A",
              "text": "The annual mean concentration rose from 325.7 parts per million in 1970 to 421.1 parts per million in 2023."
            },
            {
              "id": "B",
              "text": "The seasonal swing was smallest in 1970, at 5.1 parts per million, and largest in 2010, at 6.2 parts per million."
            },
            {
              "id": "C",
              "text": "In every one of the years shown in the table, the seasonal swing from the highest to the lowest monthly mean was far smaller than the annual mean concentration recorded for that same year."
            },
            {
              "id": "D",
              "text": "While the annual mean climbed by more than 95 parts per million between 1970 and 2023, the seasonal swing in each year shown never exceeded 6.2 parts per million."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The claim compares two quantities — how far the baseline has climbed over the decades and how far the concentration swings within a single year — so support requires both columns at once, and D supplies them: a rise of more than 95 parts per million against yearly swings of no more than 6.2.\n\n**The Full Solution:**\n- Break the claim into its parts: (1) the baseline climbed a long way over the decades; (2) the swing within any one year is small; (3) the first is many times the second.\n- D documents (1) with the 325.7-to-421.1 rise and (2) with swings that never exceed 6.2, and setting them side by side shows (3): roughly fifteen times as large.\n\n**Why the other choices are wrong:**\n- A: It gives only the rising baseline, leaving the claim's other half — the size of the seasonal swing — without evidence.\n- B: It reports how the swing varied from year to year but never compares it with the long-term rise, which is the heart of the claim.\n- C: Comparing the swing with the mean concentration itself is beside the point — the claim compares the swing with how far the baseline has risen, not with the total amount of carbon dioxide in the air."
        },
        {
          "id": 612,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Students often prepare for exams by rereading their notes and textbooks, reasoning that each additional pass makes the material more familiar. Psychologists Henry Roediger and Jeffrey Karpicke have hypothesized that the act of retrieving information from memory does more to secure long-term learning than additional exposure to the material does — that testing oneself, in short, is a more powerful study tool than restudying.",
          "question": "Which finding from a study of student learning, if true, would most directly support the hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Students who reread a passage several times reported feeling considerably more confident about their performance on an upcoming test than students who had read the passage only once."
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
              "text": "A week later, students who had spent part of their study time recalling a passage from memory retained more than students who had spent equal time rereading it."
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
          "passage": "A few scientific experiments begun generations ago are still running: the Broadbalk wheat experiment, sown at Rothamsted in England in 1843 to compare fertilizers plot by plot; the Oxford Electric Bell, which has been ringing on the same pair of batteries since ______ the pitch-drop experiment in Brisbane, started in 1927, whose ninth drop of near-solid pitch fell in 2014.",
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
          "explanation": "**Choice C is correct.** The sentence is a list of three experiments whose items contain internal commas, so the items must be separated by semicolons — including the boundary between the second item and the final one.\n\n**The Full Solution:**\n- Map the series: item one ends \"...plot by plot;\" — the list has already committed to semicolon separators because each item carries commas of its own.\n- The blank sits at the end of item two, before the final item, so it needs the same separator plus the closing conjunction: \"...since 1840; and the pitch-drop experiment...\"\n\n**Why the other choices are wrong:**\n- A: A comma plus \"and\" gives the final boundary a weaker separator than the first, letting the items' internal commas blur the list.\n- B: With no punctuation at all, items two and three run together.\n- D: A comma alone both mismatches the semicolon series and drops the conjunction the final item needs."
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
          "passage": "The fields of raised domes set into pavement at street crossings, first installed in Japan in 1967, give pedestrians who are blind or have low vision a signal they can read underfoot. Guidelines that specify the size and spacing of the domes ______ now written into accessibility codes in many countries.",
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
          "explanation": "**Choice C is correct.** The subject of the verb is the plural noun \"Guidelines,\" so the verb must be the plural \"are.\"\n\n**The Full Solution:**\n- Strip the modifier to find the core: \"Guidelines... ______ now written into accessibility codes.\"\n- The clause \"that specify the size and spacing of the domes\" merely describes the subject; it doesn't change its number.\n- Plural subject, plural verb: \"Guidelines... are now written.\"\n\n**Why the other choices are wrong:**\n- A: \"Was\" is singular (and past tense besides, clashing with \"now\").\n- B: \"Is\" is singular, agreeing with nothing in the subject position.\n- D: \"Has been\" is likewise singular; the nearby nouns \"size\" and \"spacing\" sit inside a modifying clause, not in the subject position."
        },
        {
          "id": 620,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "By the time the germ theory of disease explained why hygiene mattered in hospitals, the physician Ignaz Semmelweis ______ for handwashing for years: in the late 1840s he showed that when doctors in his Vienna maternity clinic disinfected their hands, deaths from childbed fever fell from roughly one mother in ten to fewer than one in fifty.",
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
          "passage": "Across the dry Iranian plateau, communities short of surface water dug qanats, and each system depended on three coordinated elements ______ that together delivered groundwater to distant fields by gravity alone, with no pumps and no open channel exposed to the desert sun.",
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
          "explanation": "**Choice B is correct.** The list of three elements is an interruption between \"three coordinated elements\" and the clause \"that together delivered...\" — and an interrupting list containing its own commas must be enclosed by a matched pair of dashes.\n\n**The Full Solution:**\n- The sentence's spine is \"each system depended on three coordinated elements... that together delivered groundwater.\"\n- The naming of the elements is parenthetical, and because it carries internal commas, commas cannot set it off legibly; dashes can — provided they come as a pair, one opening and one closing.\n\n**Why the other choices are wrong:**\n- A: It opens with a dash but closes with a comma, an unmatched pair.\n- C: Commas around a list already full of commas leave the boundaries of the interruption unreadable.\n- D: With no punctuation at all, the list collides with both the noun before it and the clause after it."
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
              "Until the 1970s, biologists customarily sorted all living things into two fundamental groups: bacteria and everything else.",
              "The microbiologist Carl Woese compared ribosomal RNA sequences to trace evolutionary relationships among microbes.",
              "In 1977, Woese and George Fox reported that the microbes now called archaea, though they look like bacteria, are no more closely related to bacteria than to plants and animals.",
              "Woese proposed dividing life into three domains: Bacteria, Archaea, and Eukarya.",
              "Biologists and textbooks have since widely adopted the three-domain scheme."
            ],
            "goal": "The student wants to emphasize the significance of Woese's finding for the classification of life."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Working with George Fox, Carl Woese compared ribosomal RNA sequences from many microbes to trace the evolutionary relationships among them."
            },
            {
              "id": "B",
              "text": "By revealing that archaea are a distinct branch of life despite looking like bacteria, Woese's work replaced the two-group view of life with the widely adopted three-domain scheme."
            },
            {
              "id": "C",
              "text": "Archaea resemble bacteria even though the two groups are not closely related to each other."
            },
            {
              "id": "D",
              "text": "Until the 1970s, biologists customarily sorted all living things into just two fundamental groups."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Significance for classification means showing what the finding changed, and B does precisely that: it names the finding (archaea are a distinct branch despite their bacterial look) and its classificatory consequence (two groups replaced by the widely adopted three domains).\n\n**The Full Solution:**\n- The goal has two parts: Woese's finding, and its significance for how life is classified.\n- B carries both — the discovery in its opening clause, the overthrow of the old scheme and adoption of the new one in its main clause — synthesizing the third, fourth, and fifth notes.\n\n**Why the other choices are wrong:**\n- A: It describes the method but stops before any finding or consequence, so no significance is conveyed.\n- C: It states the finding stripped of any connection to classification — the significance the goal demands is missing.\n- D: It gives only the before picture; without the finding or the new scheme, nothing about Woese's impact is emphasized."
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
              "In the early 1800s, most live plants shipped overseas died at sea.",
              "In 1829, the London doctor Nathaniel Bagshaw Ward found that plants could thrive for years inside a sealed glass case.",
              "A sealed Wardian case let in sunlight but kept out salt spray.",
              "In an 1833 trial, ferns and grasses sealed in Wardian cases reached Sydney alive after months at sea.",
              "Plant shipments carried on open decks in the same era commonly lost most of their plants."
            ],
            "goal": "The student wants to emphasize the difference between the outcomes of the two shipping methods."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Nathaniel Bagshaw Ward, a London doctor, discovered in 1829 that plants could thrive for years inside a sealed glass case."
            },
            {
              "id": "B",
              "text": "During the 1833 trial, ferns and grasses sealed in Wardian cases spent months at sea before reaching Sydney."
            },
            {
              "id": "C",
              "text": "A sealed Wardian case admitted sunlight but kept out salt spray, so the plants inside it were sheltered from the sea air."
            },
            {
              "id": "D",
              "text": "Whereas plants shipped on open decks commonly died at sea, ferns and grasses sealed in Wardian cases survived the months-long voyage to Sydney."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The goal is a difference in outcomes between the two shipping methods, and D sets the two outcomes side by side in one sentence — open-deck plants commonly died; case-sealed plants survived the voyage.\n\n**The Full Solution:**\n- The goal names two requirements: both methods must appear, and what must be contrasted is how each turned out.\n- D's \"Whereas... commonly died... survived\" is built on exactly that comparison, drawing one outcome from the open-deck note and the other from the Sydney trial note.\n\n**Why the other choices are wrong:**\n- A: It introduces Ward and his discovery but mentions only one method and no comparative outcome.\n- B: It reports the sealed cases' voyage alone — with nothing about open-deck shipments, no difference is drawn.\n- C: It explains how the case worked, a mechanism rather than a comparison of results."
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
          "passage": "Time-lapse footage of young sunflowers has fixed the popular image of a flower that follows the sun across the sky from dawn to dusk. Mature sunflowers, however, are essentially ______: once the head opens, the stem stiffens and the bloom settles into a permanent eastward orientation, warming quickly in the morning light — a position that, researchers have found, draws more pollinators than a cooler, west-facing bloom does.",
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
          "explanation": "**Choice A is correct.** The \"however\" opposes the sun-following image, and the colon explains the opposite condition: the stem stiffens and the bloom settles into one permanent orientation — that is, the mature flower is \"stationary.\"\n\n**The Full Solution:**\n- Before the blank: the popular image of constant motion, tracking the sun.\n- \"However\" reverses that image for mature plants, and the elaboration — stiffened stem, \"permanent eastward orientation\" — restates the blank as fixed in place.\n\n**Why the other choices are wrong:**\n- B: \"Symmetrical\" describes shape, not the motion-versus-fixity contrast the sentence is built on.\n- C: \"Dormant\" means inactive or asleep, but the mature bloom is busily warming and attracting pollinators — only its movement has stopped.\n- D: \"Fragile\" contradicts the stiffened stem and has no support elsewhere."
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
          "passage": "Solar farms must keep the ground beneath their panels clear of tall vegetation, since plants that shade a panel cut its output. Many operators now pasture sheep among the panels, and the arrangement has proved mutually ______: the flocks gain forage and shade, while the operators gain vegetation control in narrow strips beneath the panels that mowing machines struggle to reach.",
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
          "passage": "In rice-fish farming, a practice with a long history in parts of southern China, carp are released into flooded paddies, where they eat insect larvae and weed shoots growing between the rice plants. Field comparisons show what the fish accomplish: paddies stocked with carp suffer notably less pest damage than fish-free paddies planted alongside them, allowing farmers to ______ their use of chemical pesticides without sacrificing yield.",
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
          "passage": "When the fur trade drove sea otters nearly to extinction along the North Pacific rim, many of the kelp forests where they had lived disappeared as well, but the connection between the two losses was not established until the 1970s. Comparative surveys in the Aleutian Islands revealed it. Around islands where otters persisted, the ecologist James Estes found thick kelp and few sea urchins; around similar islands without otters, urchins carpeted the seafloor and the kelp was gone. The mechanism proved simple: otters eat urchins, and urchins eat kelp.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It presents two competing explanations for the collapse of an ecosystem and argues that neither explanation can fully account for the available evidence."
            },
            {
              "id": "B",
              "text": "It describes the recovery of a predator population and the debates that recovery provoked among ecologists."
            },
            {
              "id": "C",
              "text": "It notes a pair of losses whose connection had long gone unestablished, then presents the comparison that revealed the link between them."
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
              "text": "Human footprints preserved in an ancient lakebed at White Sands, New Mexico, have been dated by researchers led by Matthew Bennett to between 21,000 and 23,000 years ago — thousands of years earlier than many archaeologists thought people had reached the interior of North America. The dates come from radiocarbon analysis of ditchgrass seeds found in the same sediment layers as the prints. If they hold, the standard account of the continent's peopling must be rewritten."
            },
            {
              "label": "Text 2",
              "text": "Some researchers urge caution. Ditchgrass is an aquatic plant, and aquatic plants can take up carbon from lake water that is far older than the plants themselves — a reservoir effect that can make radiocarbon ages run thousands of years too old. Until the seed dates are confirmed by materials immune to that effect, such as pollen from land plants or quartz grains dated by other methods, they argue, so consequential a revision should not be treated as settled."
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
              "text": "People could not have reached the interior of North America before the ice-free corridor opened, so the prints must be far younger than the team reported."
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
          "passage": "A satellite's solar panels must survive launch folded inside a rocket's narrow fairing and then deploy in orbit, where a jammed hinge cannot be reached and repaired. Engineers have drawn on paper folding for a solution. __A pattern of creases devised by the astrophysicist Koryo Miura folds a flat sheet into a compact block that opens with a single continuous motion: pull on two opposite corners, and the whole array unfolds at once.__ A panel folded this way needs no network of independently driven hinges, each a potential point of failure, and versions of the pattern have flown on spacecraft since the 1990s.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It identifies the constraint that makes deploying solar panels in orbit riskier than folding them for launch."
            },
            {
              "id": "B",
              "text": "It describes the folding pattern whose distinctive property — unfolding in one motion — answers the problem the text presents."
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
          "explanation": "**Choice B is correct.** The text sets a problem (deployment must not fail in unreachable orbit) and promises a paper-folding solution; the underlined sentence delivers it, presenting the Miura pattern and the one-motion unfolding that makes hinge networks unnecessary.\n\n**The Full Solution:**\n- Sentence one states the stakes; sentence two announces that a solution comes from paper folding.\n- The underlined sentence is that solution made concrete: the crease pattern and its key property, a single continuous unfolding motion.\n- The final sentence draws the consequence — no failure-prone hinges — confirming that the underlined sentence carried the answering mechanism.\n\n**Why the other choices are wrong:**\n- A: The constraint is laid out in the first sentence, before the underlined one.\n- C: The unreachability of orbit is asserted earlier and never explained anywhere in the text.\n- D: The sentence advances the paper-folding approach confidently; no doubt about launch stresses is raised in it or anywhere else."
        },
        {
          "id": 634,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The plasmodial slime mold Physarum polycephalum is a single giant cell, without brain or nervous system, that forages by extending a web of protoplasmic veins toward food. When researchers set out oat flakes in an arrangement matching the cities around Tokyo, the organism first flooded the whole space, then pruned itself back to a network of tubes linking the flakes — a web whose efficiency, fault tolerance, and cost the researchers judged comparable to the actual Tokyo rail system's. Engineers have taken note: an organism that solves network problems by local trial and reinforcement, with no central plan, offers a template for routing algorithms in settings that change faster than any planner can redraw the map.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To question whether experiments performed in laboratory settings can accurately measure the problem-solving abilities of organisms that lack brains or nervous systems"
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
              "text": "To describe an experiment showing a brainless organism's ability to build efficient networks and the interest that ability holds for engineers"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text introduces the organism, recounts the Tokyo-map experiment demonstrating its network-building, and closes with why engineers care — the two halves D names: the demonstration and the practical interest.\n\n**The Full Solution:**\n- The first two sentences establish the surprise: a single brainless cell pruned itself into a network judged comparable to a real rail system.\n- The final sentence converts the finding into significance: a decentralized problem-solver as a template for routing algorithms.\n- D covers both movements; each wrong answer invents a purpose the text never pursues.\n\n**Why the other choices are wrong:**\n- A: The text treats the experiment's result as credible throughout; no doubt about laboratory measurement is raised.\n- B: Evolution is never mentioned — the foraging behavior is described, not traced to origins.\n- C: The comparison drawn is between the finished networks' efficiency and cost, not between rates of growth and construction."
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
              "text": "New York's pneumatic tube network was the largest in the world and once carried a substantial share of the city's mail."
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
          "passage": "Nacre, the iridescent lining of some mollusk shells, is about ninety-five percent aragonite, a brittle mineral that shatters easily in bulk form. Yet nacre itself is remarkably tough. Materials scientists attribute the difference to architecture: nacre stacks microscopic mineral tablets in staggered layers, mortared with thin sheets of pliable protein, so that a crack spreading through the material is repeatedly deflected at the soft joints instead of running straight through. On this account, the toughness comes from the arrangement, not the ingredients.",
          "question": "Which finding from a materials-science study, if true, would most directly support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "A synthetic composite built from a brittle ceramic arranged in staggered, polymer-mortared layers proved many times tougher than a solid block of the same ceramic."
            },
            {
              "id": "B",
              "text": "Aragonite crystals grown in a laboratory and compressed into solid blocks shattered just as easily under testing as crystals of aragonite extracted from natural mollusk shells."
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
          "passage": "Lowlanders who settle at high altitude respond to the thin air by producing extra red blood cells, and Andean highlanders, whose ancestors have lived near four thousand meters for millennia, show the same trait: hemoglobin concentrations well above sea-level norms. The anthropologist Cynthia Beall found that Tibetan highlanders, also settled at comparable altitudes for millennia, follow a different pattern — hemoglobin near sea-level values, with oxygen delivery sustained instead by faster breathing and by elevated nitric oxide, which widens blood vessels and speeds the flow. Blood thickened by extra red cells, moreover, moves sluggishly and carries risks in pregnancy. Taken together, these observations suggest that ______",
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
          "passage": "Cocoa prices on world markets are notoriously volatile. A team of economists studying the records of one cocoa-growing cooperative has argued that the cooperative's financial turbulence originated in the market rather than in its fields: its harvests, they claim, held roughly steady across the years they examined even as the price buyers paid swung sharply.",
          "questionTable": {
            "type": "table",
            "caption": "Annual harvest and average price received by a cocoa-growing cooperative in selected years",
            "headers": [
              "Year",
              "Harvest (metric tons)",
              "Average price received (dollars per kilogram)"
            ],
            "rows": [
              [
                "2015",
                "410",
                "3.20"
              ],
              [
                "2017",
                "395",
                "2.60"
              ],
              [
                "2019",
                "405",
                "2.10"
              ],
              [
                "2021",
                "420",
                "3.90"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the team's claim?",
          "choices": [
            {
              "id": "A",
              "text": "The harvest stayed between 395 and 420 metric tons in every year shown, while the price swung between 2.10 and 3.90 dollars per kilogram."
            },
            {
              "id": "B",
              "text": "The price the cooperative received reached its peak of 3.90 dollars per kilogram in 2021."
            },
            {
              "id": "C",
              "text": "The cooperative's harvest was larger in 2021, at 420 metric tons, than in any of the three earlier years for which the table reports harvest figures."
            },
            {
              "id": "D",
              "text": "The price rose whenever the cooperative's harvest fell and fell whenever its harvest rose."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim has two coordinated parts — steady harvests, volatile prices — and A documents both: harvests confined to a narrow 395-420 band while prices ranged from 2.10 to 3.90 dollars per kilogram.\n\n**The Full Solution:**\n- Steady production shows in the harvest column's tight spread (about six percent from lowest to highest).\n- Market turbulence shows in the price column's swings (falling by a third, then nearly doubling).\n- Placing the stable series beside the volatile one is what locates the turbulence in the market — exactly the argument's structure.\n\n**Why the other choices are wrong:**\n- B: A single price peak shows neither sustained volatility nor anything about the harvests.\n- C: Ranking the harvest years works against the claim, which needs harvests to be effectively flat, and it ignores prices altogether.\n- D: The table contradicts this tidy inverse rule — between 2015 and 2017, the harvest fell and the price fell too."
        },
        {
          "id": 638,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The Dutch tulip mania of the 1630s is the textbook cautionary tale of financial folly: fortunes staked on single bulbs, a market collapse in 1637, ruin sweeping the country. The historian Anne Goldgar, working through notarial archives and merchants' records, found a smaller episode. Trading in rare bulbs was confined to a fairly small circle of well-off merchants and craftsmen, and of the many traders she identified, fewer than half a dozen ran into financial trouble — and even for them, tulips may not have been to blame. The legend's scale, she argues, came largely from moralizing pamphlets that later writers repeated as fact.",
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
              "text": "Moralizing pamphlets published during the tulip mania exaggerated the beauty and rarity of the bulbs being traded."
            },
            {
              "id": "D",
              "text": "Archival research indicates that the tulip mania was far smaller than legend holds, its reputation owing more to moralizing literature than to documented losses."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text sets the legend against Goldgar's archival findings — a small circle of traders, almost no one ruined — and closes with her explanation for the legend's scale: moralizing pamphlets repeated as fact. D contains both the correction and the explanation.\n\n**The Full Solution:**\n- Sentence one states the received story; the archival middle shrinks it point by point (a small circle of traders, fewer than half a dozen in trouble, tulips not clearly to blame).\n- The final sentence explains where the legend came from — pamphlets that later writers mistook for fact.\n- The main idea must span that whole reversal, which only D does.\n\n**Why the other choices are wrong:**\n- A: Illegality is never mentioned; notarial archives appear as sources, not as evidence of prohibition.\n- B: It repeats the legend that the passage is built to dismantle.\n- C: The pamphlets inflated the episode's ruinousness, not the bulbs' beauty or rarity — and even corrected, that is a supporting detail, not the central claim."
        },
        {
          "id": 637,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Deep in a fish's inner ear sit the otoliths, small stones of calcium carbonate that grow throughout the animal's life. Their growth is not continuous but rhythmic: material is deposited more quickly by day than by night, producing microscopic bands, one per day, like tree rings compressed to the width of a hair. Counting the bands under a microscope tells a biologist a larval fish's age in days; the width of each band records how fast the fish was growing when that band formed; and chemical traces locked into the stone can reveal the temperature, and even the type of water, the fish passed through.",
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
          "passage": "Scheduled airline service in one country reaches 140 airports, from international hubs to single-runway regional fields. Analysts reviewing the country's annual traffic statistics have argued that passenger travel is far more concentrated than the network's size suggests: a handful of hub airports, they claim, handles a share of total boardings wildly out of proportion to their number.",
          "questionTable": {
            "type": "table",
            "caption": "Passenger boardings at a country's airports with scheduled airline service in selected years",
            "headers": [
              "Year",
              "Total boardings (millions)",
              "Boardings at the 5 busiest airports (millions)",
              "Share received by the 5 busiest airports"
            ],
            "rows": [
              [
                "2015",
                "210",
                "113",
                "54%"
              ],
              [
                "2019",
                "260",
                "143",
                "55%"
              ],
              [
                "2023",
                "250",
                "140",
                "56%"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Total passenger boardings at the country's airports rose from 210 million in 2015 to 260 million in 2019 before dipping slightly to 250 million in 2023."
            },
            {
              "id": "B",
              "text": "The five busiest airports received 143 million boardings in 2019, more than they received in either 2015 or 2023."
            },
            {
              "id": "C",
              "text": "In each year shown, the five busiest airports — a small fraction of the 140 served — received more than half of all boardings."
            },
            {
              "id": "D",
              "text": "The number of airports with scheduled service grew steadily even as total boardings remained roughly stable."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The claim is about disproportion — a handful of hubs taking a share \"wildly out of proportion to their number\" — and C exhibits the disproportion directly: 5 airports out of 140 drawing more than half of all boardings, in every year shown.\n\n**The Full Solution:**\n- Supporting a concentration claim requires relating the small group's size to its share.\n- C does both: it counts the group against the whole network and cites the 54-56% shares across all three years, showing the pattern is persistent rather than a one-year quirk.\n\n**Why the other choices are wrong:**\n- A: The trajectory of total boardings says nothing about how those boardings are distributed among airports.\n- B: The top airports' raw counts, without the network totals, cannot show a disproportionate share.\n- D: The table contains no counts of airports over time, so this statement cannot be drawn from it — and network growth is not the claim at issue."
        },
        {
          "id": 642,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "In a public-goods experiment, players receive tokens and choose how many to contribute to a common pool, which is multiplied and shared equally among the group; a free rider keeps his own tokens while still collecting his share of the pool. Over repeated rounds, contributions typically start moderate and collapse toward zero. The economists Ernst Fehr and Simon Gächter added one feature: after each round, any player could pay a fee to reduce a specific other player's earnings. Punishing was costly to the punisher and brought no material return, yet players used it freely against low contributors — and under its threat, contributions climbed round after round instead of collapsing. The finding suggests that ______",
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
          "passage": "Readers of embossed books still rely on the 1824 code ______ first mapped the alphabet onto cells of six raised dots and, more shrewdly, sized every cell to sit beneath a single fingertip — a proportion Louis Braille settled on as a teenager and one that lets a practiced hand glide along a line without pausing to trace each letter.",
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
          "passage": "In Norway and Sweden, a customary right of access lets anyone walk, ski, or camp on open land regardless of who owns ______ the right carries obligations in return, requiring visitors to keep clear of houses, to leave crops and plantings untouched, and to move on after a night or two in any one spot.",
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
          "explanation": "**Choice B is correct.** Two independent clauses meet here, joined by the conjunctive adverb \"however\" — and that construction takes a semicolon before \"however\" and a comma after it.\n\n**The Full Solution:**\n- Clause one: \"...a customary right of access lets anyone walk, ski, or camp on open land regardless of who owns it.\" Complete.\n- Clause two: \"the right carries obligations in return...\" Also complete.\n- \"However\" is an adverb, not a conjunction, so it cannot join clauses with commas alone; the boundary needs the semicolon, and \"however\" keeps its trailing comma.\n\n**Why the other choices are wrong:**\n- A: Commas on both sides of \"however\" leave the two independent clauses spliced together.\n- C: It puts the strong mark on the wrong side — the clause boundary falls before \"however,\" not after it.\n- D: With no punctuation before \"however,\" the clauses fuse outright."
        },
        {
          "id": 644,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Investigations of nineteenth-century mill disasters kept returning to a hazard that outsiders were inclined to ______ the flour dust suspended in a mill's air is explosive, and a stray spark could — as it famously did in Minneapolis in 1878 — level an entire mill in seconds.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "dismiss:"
            },
            {
              "id": "B",
              "text": "dismiss"
            },
            {
              "id": "C",
              "text": "dismiss,"
            },
            {
              "id": "D",
              "text": "dismiss;"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The first clause promises a specification — a hazard outsiders dismissed — and what follows delivers it. A colon after the independent opening clause is the mark that introduces that explanation.\n\n**The Full Solution:**\n- The clause before the blank is independent and ends on a noun phrase (\"a hazard that outsiders were inclined to dismiss\") that begs to be spelled out.\n- Everything after the blank is the spelling-out: what the hazard is (explosive dust) and what it could do.\n- An independent clause followed by its own elaboration takes a colon.\n\n**Why the other choices are wrong:**\n- B: With nothing at the boundary, two complete clauses fuse into a run-on.\n- C: A comma between the two independent clauses is a comma splice.\n- D: A semicolon merely coordinates two related statements; it fails to signal that the second clause is the promised content of the first — the announcing relationship the sentence is built on."
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
              "text": "Terra preta, a deep black soil found in patches along the Amazon, remains fertile for centuries in a region whose soils are otherwise quickly exhausted."
            },
            {
              "id": "C",
              "text": "Because heavy tropical rains leach nutrients from most Amazonian soils, fields cleared for farming in the region often become infertile within only a few years of cultivation."
            },
            {
              "id": "D",
              "text": "Researchers regard terra preta as evidence that large, settled populations once farmed the Amazon basin."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** An introduction for unfamiliar readers must name the thing, say what it is, and convey why it is notable — B does all three: the name, the definition (deep black soil in Amazonian patches), and the striking property (centuries of fertility where soils are otherwise quickly spent).\n\n**The Full Solution:**\n- The audience knows nothing, so the sentence must be self-contained: term plus identification plus significance.\n- B compresses the second and third notes into the identification and borrows the first note's contrast to make the significance legible at first read.\n\n**Why the other choices are wrong:**\n- A: It reports Sombroek's finding without ever naming or describing terra preta — an unfamiliar reader cannot tell what soil is meant or why it matters.\n- C: It is all background: the region's poor soils are described, and terra preta never appears.\n- D: It states significance for researchers but assumes the reader already knows what terra preta is — the one thing this audience lacks."
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
              "Many students believe that the more complete their lecture notes, the better they will learn.",
              "Psychologists Pam Mueller and Daniel Oppenheimer compared students who took lecture notes on laptops with students who wrote notes by hand.",
              "Laptop users recorded more words but tended to transcribe the lecture verbatim.",
              "Handwriting is slower, forcing note-takers to select and rephrase ideas in their own words.",
              "On later tests of conceptual understanding, the longhand group outperformed the laptop group."
            ],
            "goal": "The student wants to emphasize the difference between a common belief about note-taking and the study's result."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Pam Mueller and Daniel Oppenheimer compared students who took lecture notes on laptops with students who wrote their notes by hand."
            },
            {
              "id": "B",
              "text": "Because handwriting is considerably slower than typing on a laptop, note-takers who write by hand are forced to select and rephrase a lecturer's ideas in their own words."
            },
            {
              "id": "C",
              "text": "Although many students assume that fuller notes mean better learning, the slower, less complete longhand notes were the ones associated with stronger conceptual understanding."
            },
            {
              "id": "D",
              "text": "On later tests of conceptual understanding, students who had written notes by hand outperformed students who had typed."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The goal pairs a common belief with a result that cut against it, and C holds both in one sentence: the assumption (fuller notes, better learning) fronted by \"Although,\" then the finding that the sparser longhand notes won on conceptual understanding.\n\n**The Full Solution:**\n- Required elements: the belief from the first note, the outcome from the last note, and a frame that opposes them.\n- C's concessive structure does the opposing work explicitly — belief conceded, result delivered — which is what \"emphasize the difference\" demands.\n\n**Why the other choices are wrong:**\n- A: It describes the study's setup; neither the belief nor the result appears, so no difference can be felt.\n- B: It explains the mechanism behind longhand's advantage but mentions neither the common belief nor the test outcome.\n- D: It reports the result alone — without the expectation beside it, the contrast the goal calls for never materializes."
        }
      ]
    }
  ]
};

export default practiceTest6RW;
