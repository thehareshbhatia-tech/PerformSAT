// Practice Test 4 — SAT Reading & Writing (R&W)
// R&W seating varied 2026-09-07 (scripts/varyRWSeating.mjs): items re-dealt inside their official skill blocks with a per-test seed — block flow and per-skill counts unchanged.
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test4/. Do not hand-edit this file —
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
          "id": 402,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In many medieval workshops, the scribe who copied a book's main text worked only in dark ink, leaving gaps at chapter openings and skipping the headings entirely. Filling that blank space was a separate craft: a specialist called a rubricator was expected to ______ the missing initials and headings in red, completing pages the scribe had deliberately left unfinished.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "supply"
            },
            {
              "id": "B",
              "text": "revise"
            },
            {
              "id": "C",
              "text": "translate"
            },
            {
              "id": "D",
              "text": "withhold"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The rubricator's job was to furnish what the scribe deliberately left out, and \"supply\" means precisely to provide something missing.\n\n**The Full Solution:**\n- The scribe leaves gaps: no initials, no headings.\n- The rubricator \"completes pages the scribe had deliberately left unfinished,\" so the blank must mean adding the absent elements.\n- \"Supply the missing initials and headings\" captures that act of provision exactly.\n\n**Why the other choices are wrong:**\n- B: \"Revise\" means to alter something already written, but the initials and headings do not yet exist on the page.\n- C: \"Translate\" means to render text in another language, which nothing in the text suggests.\n- D: \"Withhold\" means to keep back, the opposite of completing the unfinished pages.",
          "_meta": {
            "anchor": "medieval scriptorium division of labor — the rubricator"
          }
        },
        {
          "id": 403,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "No map drawn at a reduced scale can carry every feature of the landscape it represents. Cartographers therefore practice what they call generalization: deciding which details a map's purpose requires and which it can afford to ______, so that the roads, rivers, and towns that remain stay easy to read.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "omit"
            },
            {
              "id": "B",
              "text": "enlarge"
            },
            {
              "id": "C",
              "text": "invent"
            },
            {
              "id": "D",
              "text": "duplicate"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Generalization is a choice between details a map keeps and details it leaves out, and \"omit\" names the leaving-out.\n\n**The Full Solution:**\n- The first sentence sets the constraint: a reduced-scale map cannot carry every feature.\n- The blank is paired against \"which details a map's purpose requires\" — so it must name the fate of the details not required.\n- \"Omit,\" to leave out, completes the contrast and explains why the remaining features stay legible.\n\n**Why the other choices are wrong:**\n- B: \"Enlarge\" would add prominence to details, making the map harder to read, the opposite of what the sentence describes.\n- C: \"Invent\" means to fabricate features, which describes bad mapmaking, not selective mapmaking.\n- D: \"Duplicate\" means to repeat features, which no part of the text suggests and which would also make the map harder to read.",
          "_meta": {
            "anchor": "cartographic generalization — selective omission at reduced scale"
          }
        },
        {
          "id": 404,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Analysts no longer judge a soccer team by its goals alone; they rate the quality of every scoring chance it creates. By comparing each shot's distance, angle, and buildup with thousands of similar past attempts, they can ______ how often a chance of that kind ends in a goal. That figure shows whether a team's results reflect its play or merely its luck.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "guarantee"
            },
            {
              "id": "B",
              "text": "estimate"
            },
            {
              "id": "C",
              "text": "dictate"
            },
            {
              "id": "D",
              "text": "recall"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Comparing a shot with thousands of similar past attempts yields an approximate rate, and \"estimate\" is the word for a judgment of that kind.\n\n**The Full Solution:**\n- The analysts' method is statistical: match a chance against a large sample of similar chances.\n- What that produces is a likelihood — \"how often a chance of that kind ends in a goal\" — not a certainty.\n- \"Estimate\" expresses exactly this: a reasoned approximation drawn from data.\n\n**Why the other choices are wrong:**\n- A: \"Guarantee\" promises an outcome, but past frequencies cannot promise what any one shot will do.\n- C: \"Dictate\" means to command an outcome; analysts measure chances, they do not control them.\n- D: \"Recall\" means to remember, but the analysts are computing a new figure, not retrieving an old one.",
          "_meta": {
            "anchor": "soccer analytics — rating scoring chances against historical attempts"
          }
        },
        {
          "id": 401,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Many ant species guide nestmates to food by laying down trails of chemical signals. The signals are short-lived, fading within minutes unless returning foragers add fresh marks of their own. When a food source runs out, workers simply stop marking the route, and the trail soon vanishes. To keep a productive route open, then, a colony must continually ______ its trail.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "conceal"
            },
            {
              "id": "B",
              "text": "imitate"
            },
            {
              "id": "C",
              "text": "renew"
            },
            {
              "id": "D",
              "text": "shorten"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The trail persists only while foragers keep adding fresh marks, so keeping a route open requires continually renewing it.\n\n**The Full Solution:**\n- The text establishes that trail signals fade within minutes unless returning foragers \"add fresh marks of their own.\"\n- The blank must name what a colony does to \"keep a productive route open\" — the opposite of letting the trail vanish.\n- \"Renew\" means to restore or refresh, exactly the continual re-marking the text describes.\n\n**Why the other choices are wrong:**\n- A: \"Conceal\" means to hide the trail, the opposite of keeping it available to guide nestmates.\n- B: \"Imitate\" means to copy something else; the colony is maintaining its own trail, not copying one.\n- D: \"Shorten\" changes the route's length, but the text is about the trail's persistence, not its distance.",
          "_meta": {
            "anchor": "ant trail pheromones — decay and reinforcement"
          }
        },
        {
          "id": 407,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The towering mounds built by some fungus-farming termites were long described as chimneys: heat from the colony below was thought to drive a steady upward draft that vented stale air. Researchers who measured airflow inside occupied mounds in India propose a different picture: the mound works less like a chimney than like a lung. __Using probes that recorded air speed and temperature around the clock, they found that the airflow reverses direction between day and night, driven by daily swings in outside temperature.__ On this account, the colony breathes with the rhythm of the day.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It describes the chimney model, which the rest of the passage goes on to defend against the critics who have proposed the lung comparison."
            },
            {
              "id": "B",
              "text": "It presents the measurements that support the revised account of the mound's function introduced in the sentence before it."
            },
            {
              "id": "C",
              "text": "It concedes a weakness in the lung comparison that the passage's final sentence then attempts to repair."
            },
            {
              "id": "D",
              "text": "It explains how termites detect and repair breaches in the porous outer walls of their mounds."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The preceding sentence proposes the lung picture; the underlined sentence delivers the measurements that back it: airflow that reverses between day and night instead of streaming steadily upward.\n\n**The Full Solution:**\n- Sentence 2 introduces the revision: the mound as a lung, not a chimney.\n- The underlined sentence reports the evidence behind it: round-the-clock probe readings showing airflow that reverses direction with daily temperature swings, the in-and-out pattern of breathing.\n- The final sentence draws the conclusion the measurements support. The underline is the evidence in the middle.\n\n**Why the other choices are wrong:**\n- A: The chimney model appears in the first sentence, and the passage undermines it rather than defending it.\n- C: The sentence strengthens the lung comparison; it concedes nothing.\n- D: Breach detection and repair are never mentioned; the passage is about how air moves through the mound.",
          "_meta": {
            "anchor": "termite mound ventilation driven by daily temperature swings (King, Ocko & Mahadevan, PNAS 2015, mounds in India)"
          }
        },
        {
          "id": 405,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "In 1856 the eighteen-year-old chemist William Perkin set out to make quinine, then the chief treatment for malaria, from compounds derived from coal tar. The attempt failed. __One flask, instead of yielding the colorless drug, produced a dark residue from which Perkin extracted a substance that dyed silk a brilliant mauve.__ Perkin patented the dye, left his studies, and opened a factory. Within a few decades, chemists across Europe were drawing a whole spectrum of synthetic colors from coal tar, and some of the firms they founded later branched into pharmaceuticals. A failed medicine had launched an industry.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It reports the surprising outcome of the failed attempt, the accident from which the industry described later in the text grew."
            },
            {
              "id": "B",
              "text": "It explains why Perkin's method could never have produced quinine from the starting materials he had chosen."
            },
            {
              "id": "C",
              "text": "It signals that Perkin's commercial ambitions ultimately mattered more to him than the scientific problem he had set out to solve."
            },
            {
              "id": "D",
              "text": "It defines a technical term that readers must understand before the passage's account of the dye industry can proceed."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The underlined sentence is the hinge of the passage: the failed experiment's surprise product, from which everything after (patent, factory, industry) follows.\n\n**The Full Solution:**\n- Before the underline: Perkin attempts quinine and fails.\n- The underlined sentence reports what the failure actually produced — a substance that dyed silk a brilliant mauve.\n- After the underline: Perkin commercializes that dye, and the passage closes by saying that \"a failed medicine had launched an industry.\" The sentence supplies the accident that did the launching.\n\n**Why the other choices are wrong:**\n- B: The sentence describes what the flask produced, not why the synthesis was chemically doomed.\n- C: Nothing in the sentence weighs Perkin's ambitions against his scientific aims; his commercial turn comes later.\n- D: The sentence narrates an event; it defines no term.",
          "_meta": {
            "anchor": "William Perkin — mauveine, the accidental founding of synthetic dye chemistry"
          }
        },
        {
          "id": 408,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "In an influential 1985 study, psychologist Thomas Gilovich and his colleagues tested a common belief among players, coaches, and fans: a player who has just made several shots in a row is more likely to make the next one. The researchers analyzed game records and ran a shooting experiment with college players. A player's chance of hitting the next shot, they found, was no higher after a string of makes than after a string of misses. The \"hot hand,\" they concluded, is a cognitive illusion."
            },
            {
              "label": "Text 2",
              "text": "Economists Joshua Miller and Adam Sanjurjo have identified a subtle bias in how early studies measured streak shooting. Suppose a researcher picks out, from a finite record, only the shots that immediately follow several makes. The expected success rate on those shots is skewed downward: even a shooter with no streakiness at all would score below his overall average on them. Judged against the corrected benchmark, the 1985 study's own data show significant streak shooting."
            }
          ],
          "question": "Based on the texts, how would Miller and Sanjurjo (Text 2) most likely respond to the conclusion presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "Fans and players were wrong to see streaks, but the habit of seeing patterns in chance events is too deeply rooted to correct."
            },
            {
              "id": "B",
              "text": "The 1985 study relied on records too incomplete to show how often players attempted shots right after a string of makes."
            },
            {
              "id": "C",
              "text": "The data Gilovich and his colleagues analyzed do not show that the hot hand is an illusion, because their method was biased against detecting streaks."
            },
            {
              "id": "D",
              "text": "The hot hand is indeed an illusion, and the bias they identified makes the case for that conclusion even stronger."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Miller and Sanjurjo's objection is about method: the way the shots were selected pushes the expected success rate down, so data analyzed that way cannot show that streak shooting is an illusion. Corrected, the 1985 study's own data show streak shooting.\n\n**The Full Solution:**\n- Text 1's conclusion rests on a comparison: success after makes looked no better than success after misses.\n- Text 2 shows the comparison's benchmark was wrong. A streak-free shooter would score below average on the selected shots, so \"no better\" actually hides a positive effect.\n- Choice C states exactly that response: the data do not establish the illusion, because the method was biased against finding streaks.\n\n**Why the other choices are wrong:**\n- A: It sides with Text 1's conclusion, which Text 2's correction overturns.\n- B: Text 2 faults the analysis of the records, not their completeness.\n- D: It reverses Text 2's position: Miller and Sanjurjo find evidence for the hot hand, not a stronger case against it.",
          "_meta": {
            "anchor": "hot hand: Gilovich, Vallone & Tversky 1985 vs. Miller & Sanjurjo streak-selection bias (Econometrica 2018: correcting the bias reverses the canonical study's conclusion)"
          }
        },
        {
          "id": 406,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "In 1884, wreckage from the Jeannette, an American ship crushed by ice off Siberia three years earlier, was found on an ice floe near southern Greenland. The Norwegian explorer Fridtjof Nansen reasoned that a current must carry sea ice across the polar basin. To test the idea, he had a ship, the Fram, built with a rounded hull that ice pressure would lift rather than crush. In 1893 he sailed it into the pack ice north of Siberia and let it freeze in. Three years later the Fram broke free near Spitsbergen, intact, having drifted across the Arctic much as Nansen had predicted.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To argue that the Jeannette was lost because its crew ignored repeated warnings about the dangers of the Arctic pack ice."
            },
            {
              "id": "B",
              "text": "To explain why the wooden ships of the nineteenth century could not survive prolonged contact with pack ice."
            },
            {
              "id": "C",
              "text": "To recount the accidents that forced a polar expedition to abandon the scientific goals it had originally set."
            },
            {
              "id": "D",
              "text": "To describe how an explorer tested a theory about a polar current by letting a specially built ship freeze into the ice."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text moves from Nansen's inference (wreckage that drifted from Siberia to Greenland implies a current) to his test (a ship built to survive the ice, deliberately frozen in) to the result (the ship drifted across the Arctic as predicted).\n\n**The Full Solution:**\n- The inference: wreckage from a ship crushed off Siberia turned up near Greenland, so a current must carry ice across the polar basin.\n- The test: the Fram is built with a hull the ice would lift, then frozen into the pack on purpose.\n- The result: three years later it breaks free near Spitsbergen, having drifted as Nansen predicted. Choice D captures this arc from theory to test.\n\n**Why the other choices are wrong:**\n- A: The Jeannette's wreckage serves only as evidence of the current; the text never discusses why the ship was lost or mentions any warnings.\n- B: The text explains how one ship was designed to survive the ice, not why other ships could not.\n- C: Freezing the Fram into the ice was the plan, not an accident, and no goals were abandoned.",
          "_meta": {
            "anchor": "Nansen's Fram drift (1893-96) testing the transpolar current inferred from Jeannette wreckage (found near Greenland 1884)"
          }
        },
        {
          "id": 409,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Cusco, in Peru, was the capital of the Inca Empire. Inca builders there cut each block of stone to fit tightly against its neighbors, so their finest walls held together without any mortar. After the Spanish conquest in the 1530s, colonists built churches and houses on top of these Inca foundations. In 1950 a strong earthquake damaged more than a third of the city's buildings. The colonial church and convent of Santo Domingo was badly damaged, but the Inca walls beneath it held firm. The old technique had proved better suited to the region's earthquakes than the one that replaced it.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The Spanish colonists who settled in Cusco tore down most of the walls the Inca had built and reused the stones."
            },
            {
              "id": "B",
              "text": "Inca walls built without mortar withstood an earthquake that badly damaged later colonial buildings."
            },
            {
              "id": "C",
              "text": "The 1950 earthquake was the strongest ever recorded in the history of Cusco."
            },
            {
              "id": "D",
              "text": "Inca builders used mortar only in the walls of their most important temples."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text describes the Inca way of building (tightly fitted stone, no mortar), the colonial buildings set on top of it, and the 1950 earthquake that damaged the newer buildings but left the Inca walls standing. Choice B states that main point.\n\n**The Full Solution:**\n- The first two sentences explain the Inca technique: stones cut to fit so closely that no mortar was needed.\n- The middle of the text adds the colonial buildings and the 1950 earthquake.\n- The evidence: the colonial church and convent of Santo Domingo was badly damaged, but the Inca walls beneath it held firm.\n- The last sentence draws the conclusion that B restates: the older technique held up better in earthquakes.\n\n**Why the other choices are wrong:**\n- A: The text says colonists built on top of the Inca foundations, not that they tore the walls down.\n- C: The text calls the earthquake strong but never compares it with other earthquakes in Cusco's history.\n- D: The text says the finest Inca walls used no mortar at all; it never mentions mortar in temple walls.",
          "_meta": {
            "anchor": "Cusco 1950 earthquake: mortarless Inca masonry vs colonial buildings"
          }
        },
        {
          "id": 415,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "On the open range of the American West, cattle belonging to many different ranches grazed together on the same unfenced land. Each ranch therefore marked its animals with its own brand, a symbol burned into the hide: one might be a single letter, while another set a letter above a straight bar. As brands multiplied, they were recorded in books small enough for ranchers to carry in their pockets. By matching the mark on a steer to an entry in the book, cowboys at a roundup could tell exactly which ranch owned it. The practice suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "without distinct brands, cowboys could not reliably tell one ranch's cattle from another's on shared land."
            },
            {
              "id": "B",
              "text": "cowboys often misidentified cattle even when they checked each brand carefully against the entries in the book."
            },
            {
              "id": "C",
              "text": "brands were assigned only to ranches in regions where cattle had frequently been stolen."
            },
            {
              "id": "D",
              "text": "ranchers were expected to design a new brand every season so that no two roundups would ever look alike."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Each ranch gave its cattle its own brand so that cowboys could tell which ranch owned an animal grazing on shared land. A system built for that purpose implies that, without it, the cattle themselves would not show who owned them.\n\n**The Full Solution:**\n- On the open range, cattle from many ranches grazed together on the same unfenced land.\n- Each ranch had its own brand, and the brands were recorded in pocket-sized books.\n- Matching a steer's brand to the book told cowboys exactly which ranch owned it.\n- The practice exists to solve a problem: mixed herds of unmarked cattle would look alike. That is what A states.\n\n**Why the other choices are wrong:**\n- B: The text presents checking a brand against the book as a reliable way to identify an owner; nothing suggests frequent mistakes.\n- C: The text says each ranch marked its animals, not only ranches in areas with cattle theft.\n- D: Changing brands every season would make the recorded books useless, the opposite of what the practice is for.",
          "_meta": {
            "anchor": "cattle brands on the open range, recorded in pocket brand books and read at roundups",
            "sources": [
              "https://en.wikipedia.org/wiki/Livestock_branding",
              "https://www.tshaonline.org/handbook/entries/cattle-brands",
              "https://www.americanheritage.com/lazy-y-and-flying-u"
            ]
          }
        },
        {
          "id": 410,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Before the 1830s, few living plants survived long sea voyages; exposed to salt spray and short of fresh water, most died before reaching port. In 1829 the London doctor Nathaniel Ward noticed a fern thriving inside a sealed glass bottle that he had not watered at all. Moisture from the soil condensed on the glass and ran back down. Ward built glass-sided wooden cases on the same principle, and in 1833 he sent two of them to Sydney, Australia. After a voyage of several months, the plants inside arrived in good condition.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Ward's sealed glass cases, which recycled their own moisture, let living plants survive long sea voyages."
            },
            {
              "id": "B",
              "text": "Ward first designed his glass cases to protect ferns grown in London homes rather than plants at sea."
            },
            {
              "id": "C",
              "text": "Plant collectors of the 1830s preferred to ship seeds because live plants were too costly to transport."
            },
            {
              "id": "D",
              "text": "Ward's cases kept plants alive at sea by giving them a regular supply of fresh water from the ship."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text sets up a problem (plants died at sea), describes Ward's discovery that a sealed container recycles its own moisture, and reports that his sealed cases carried plants to Sydney in good condition. Choice A states that main idea.\n\n**The Full Solution:**\n- Problem: salt spray and a lack of fresh water killed most plants on long voyages.\n- Discovery: a fern lived in a sealed bottle without watering, because moisture condensed on the glass and ran back into the soil.\n- Result: Ward's cases, built on that principle, delivered living plants after a voyage of several months.\n- A joins the device, the way it works, and what it made possible.\n\n**Why the other choices are wrong:**\n- B: The text never says Ward designed the cases for homes; it describes them being used to ship plants overseas.\n- C: Seeds and shipping costs are never mentioned.\n- D: The cases worked because they were sealed and recycled their own moisture; the text says the bottle's fern needed no watering at all.",
          "_meta": {
            "anchor": "Wardian case: Nathaniel Ward's sealed glass cases; 1833 shipment to Sydney"
          }
        },
        {
          "id": 412,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Female paper wasps of the species Polistes dominula bear black facial patches that vary strikingly from individual to individual. Behavioral ecologist Elizabeth Tibbetts has proposed that these markings serve as status signals. By advertising a wasp's fighting ability, the patches let rivals size each other up and settle contests over resources without the costs of an actual fight.",
          "question": "Which finding, if true, would most directly support the researcher's hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "The size and shape of a wasp's facial patches depend mainly on how well the wasp was fed as a larva."
            },
            {
              "id": "B",
              "text": "In staged encounters over food, wasps facing rivals with more broken-up facial patches — the pattern typical of strong fighters — usually retreat without fighting."
            },
            {
              "id": "C",
              "text": "Wasps with heavily broken-up facial patches spend more of the day foraging away from the nest than wasps with plain faces do, and they return with larger loads of food."
            },
            {
              "id": "D",
              "text": "Facial patches fade gradually as wasps age, and older wasps initiate fewer contests over resources than younger ones do."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The hypothesis says the patches let rivals assess fighting ability and avoid combat; rivals retreating from strong-fighter markings without a fight is that mechanism observed in action.\n\n**The Full Solution:**\n- The hypothesis has two parts: patches advertise fighting ability, and the advertisement lets contests end without fighting.\n- Choice B supplies both: wasps read the strong-fighter pattern on a rival's face and yield before combat begins.\n- That is a direct behavioral confirmation of the signaling function.\n\n**Why the other choices are wrong:**\n- A: It explains where patches come from, not whether rivals use them to settle contests.\n- C: Foraging time and food loads have no bearing on whether patches function as signals in contests.\n- D: It pairs two facts about aging without showing that any wasp responds to another's markings.",
          "_meta": {
            "anchor": "Elizabeth Tibbetts — paper wasp facial badges as status signals; finding-if-true form"
          }
        },
        {
          "id": 411,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Working in Heidelberg in the late 1850s, the chemist Robert Bunsen and the physicist Gustav Kirchhoff passed the light of colored flames through a prism instrument of their own design. They found that each chemical element, heated until it glows, emits light at its own fixed set of wavelengths, which their spectroscope displayed as a pattern of bright lines. The pattern did not change with the compound or mineral in which an element was found. Within a year of publishing the method, the two had used unfamiliar line patterns to identify two new elements, cesium and rubidium.",
          "question": "According to the text, why could a glowing element be identified with the spectroscope?",
          "choices": [
            {
              "id": "A",
              "text": "Each element produces a flame whose distinctive overall color can be recognized without any special instrument."
            },
            {
              "id": "B",
              "text": "Each element emits its own fixed pattern of bright lines whatever compound or mineral it arrives in."
            },
            {
              "id": "C",
              "text": "The brightness of a flame's light increases in proportion to the amount of the element present."
            },
            {
              "id": "D",
              "text": "Only two elements, cesium and rubidium, produce bright lines when heated in a flame."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text states that each element's line pattern is fixed and \"did not change with the compound or mineral in which an element was found,\" which makes it a signature, and therefore an identifier.\n\n**The Full Solution:**\n- The instrument displays a glowing element's light as a pattern of bright lines.\n- The pattern belongs to the element itself: it is unaffected by compound or mineral of origin.\n- A property unique to each element and stable across sources is exactly what permits identification.\n\n**Why the other choices are wrong:**\n- A: The spectroscope was needed precisely because it resolves flame light into lines; the text never says overall color sufficed.\n- C: The text ties identity to the pattern's position, not to brightness or quantity.\n- D: Cesium and rubidium were discovered by the method; the text says every element emits its own pattern.",
          "_meta": {
            "anchor": "Bunsen and Kirchhoff — flame spectroscopy; element line signatures; detail stem"
          }
        },
        {
          "id": 413,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Since 1958, scientists at Mauna Loa Observatory in Hawaii have recorded the amount of carbon dioxide in Earth's atmosphere. An environmental scientist claims that the rise in carbon dioxide over this period has been accompanied by rising global temperatures. To support the claim, the scientist cites data from three years.",
          "questionTable": {
            "type": "table",
            "caption": "Atmospheric carbon dioxide at Mauna Loa and global average surface temperature, selected years",
            "headers": [
              "Year",
              "Carbon dioxide (parts per million)",
              "Global temperature compared with the 1951-1980 average (°C)"
            ],
            "rows": [
              [
                "1960",
                "316.9",
                "-0.02"
              ],
              [
                "1990",
                "354.5",
                "+0.45"
              ],
              [
                "2020",
                "414.2",
                "+1.01"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Carbon dioxide at Mauna Loa rose from 316.9 parts per million in 1960 to 414.2 in 2020."
            },
            {
              "id": "B",
              "text": "Carbon dioxide rose from 316.9 to 354.5 to 414.2 parts per million, while the global temperature figure rose from -0.02 to +0.45 to +1.01°C."
            },
            {
              "id": "C",
              "text": "The global temperature figure rose from -0.02°C in 1960 to +0.45°C in 1990 and +1.01°C in 2020."
            },
            {
              "id": "D",
              "text": "In 1990, carbon dioxide stood at 354.5 parts per million and the global temperature figure at +0.45°C."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The claim links two trends: carbon dioxide rose, and global temperatures rose along with it. Choice B is the only choice that traces both columns across all three years.\n\n**The Full Solution:**\n- The claim has two parts: rising carbon dioxide and rising temperatures over the same period.\n- Carbon dioxide column: 316.9, 354.5, 414.2 parts per million.\n- Temperature column: -0.02, +0.45, +1.01°C compared with the 1951-1980 average.\n- B reports both increases together, so it shows the rise in one accompanied by the rise in the other.\n\n**Why the other choices are wrong:**\n- A: It shows only that carbon dioxide rose; it says nothing about temperature.\n- C: It shows only that temperatures rose; it leaves out carbon dioxide.\n- D: It gives both values for a single year, so it shows no change in either one.",
          "_meta": {
            "anchor": "Mauna Loa CO2 (NOAA GML annual means) and NASA GISTEMP global temperature anomaly, 1960/1990/2020"
          }
        },
        {
          "id": 414,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Engineers compare materials not only by tensile strength, the pull a material can withstand before it breaks, but also by breaking length: how long a strand of the material could hang before snapping under its own weight. An engineer claims that by this second measure some woods outperform common steels. Balsa and white pine, the engineer notes, have far longer breaking lengths than low-carbon and stainless steel, even though the woods have much lower tensile strengths.",
          "questionTable": {
            "type": "table",
            "caption": "Tensile strength and breaking length of four materials",
            "headers": [
              "Material",
              "Tensile strength (megapascals)",
              "Breaking length (kilometers)"
            ],
            "rows": [
              [
                "Low-carbon steel",
                "365",
                "4.7"
              ],
              [
                "Stainless steel",
                "505",
                "6.4"
              ],
              [
                "White pine",
                "78",
                "22.7"
              ],
              [
                "Balsa",
                "73",
                "53.2"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "The two woods, at 78 and 73 megapascals, had lower tensile strengths than both steels, yet their breaking lengths were 22.7 and 53.2 kilometers, against 4.7 and 6.4 for the steels."
            },
            {
              "id": "B",
              "text": "Stainless steel, at 505 megapascals, had the highest tensile strength of the four materials listed in the table."
            },
            {
              "id": "C",
              "text": "Across the four materials in the table, the lower a material's tensile strength was, the longer its breaking length was."
            },
            {
              "id": "D",
              "text": "Low-carbon steel had a breaking length of 4.7 kilometers, the shortest breaking length of the four materials in the table."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim has two parts: the woods are weaker in tensile strength, yet they have longer breaking lengths. Choice A cites the tensile strengths and the breaking lengths of all four materials, so it documents both parts of the comparison.\n\n**The Full Solution:**\n- The claim's structure: the woods beat the steels on breaking length even though they lose on tensile strength.\n- A establishes the handicap (78 and 73 megapascals versus 365 and 505) and the result (22.7 and 53.2 kilometers versus 4.7 and 6.4).\n- Both conditions of the claim are shown; nothing is left to inference.\n\n**Why the other choices are wrong:**\n- B: It reports only one material's tensile strength and says nothing about breaking length or the woods.\n- C: The statement is inaccurate: stainless steel has a higher tensile strength than low-carbon steel and also a longer breaking length (6.4 versus 4.7). It also ignores the comparison between woods and steels that the claim makes.\n- D: It reports a single steel's breaking length and leaves out the woods entirely, so no comparison is made.",
          "_meta": {
            "anchor": "specific strength / breaking length: balsa and white pine vs low-carbon (AISI 1010) and stainless (304) steel; values from Wikipedia 'Specific strength' table (balsa 73 MPa, 53.2 km; eastern white pine 78 MPa, 22.7 km; AISI 1010 365 MPa, 4.73 km; 304 SS 505 MPa, 6.4 km)",
            "source": "https://en.wikipedia.org/wiki/Specific_strength"
          }
        },
        {
          "id": 416,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "In 1828 the German chemist Friedrich Wöhler synthesized urea, a compound until then obtained only from living bodies, out of inorganic starting materials. Textbooks often cast the experiment as the decisive blow against vitalism — the doctrine that substances formed in living things require a special vital force. The record is less tidy. Wöhler presented the result to colleagues as a striking curiosity, not a refutation. Prominent chemists went on invoking vital forces for decades afterward. And vitalist explanations thinned out only gradually, as chemists synthesized one organic compound after another through mid-century. Taken together, these facts suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "Wöhler's contemporaries doubted that the substance he had produced from inorganic materials was in fact identical to urea."
            },
            {
              "id": "B",
              "text": "textbooks are right to treat the urea synthesis as decisive, since the chemists who continued to invoke vital forces did so for reasons unconnected to chemistry."
            },
            {
              "id": "C",
              "text": "the retreat of vitalism was a gradual affair, driven by an accumulation of syntheses rather than settled by any single experiment."
            },
            {
              "id": "D",
              "text": "vitalism would have collapsed in 1828 if Wöhler had presented his synthesis as a refutation rather than as a curiosity."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Each fact chips at the single-blow story from a different side, and together they force only the modest conclusion C draws: vitalism receded gradually, under accumulating syntheses.\n\n**The Full Solution:**\n- Wöhler himself claimed no refutation — so the experiment was not received as a decisive blow.\n- Chemists kept invoking vital forces for decades — so no blow felled the doctrine in 1828.\n- Vitalist explanations thinned \"only gradually, as chemists synthesized one organic compound after another\" — naming the actual driver.\n- The conclusion that fits all three is gradual retreat by accumulation, exactly choice C.\n\n**Why the other choices are wrong:**\n- A: The text records no doubt about the product's identity; it questions the experiment's decisiveness, not its chemistry.\n- B: It reasserts the textbook story the three facts undermine, explaining away the holdouts with a motive the text never gives.\n- D: A speculation about presentation; the text shows persistence for decades, not a doctrine one announcement from collapse.",
          "_meta": {
            "anchor": "Friedrich Wöhler — urea synthesis and the gradual decline of vitalism; hard inference"
          }
        },
        {
          "id": 420,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "By the time an electrolytic process made aluminum cheap in the late 1880s, the metal ______ already served for decades as a costly showpiece, displayed at exhibitions and made into jewelry and banquet cutlery.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "had"
            },
            {
              "id": "B",
              "text": "has"
            },
            {
              "id": "C",
              "text": "is"
            },
            {
              "id": "D",
              "text": "have"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence describes service that was already complete before a past reference point (\"by the time ... in the late 1880s\"), which calls for the past perfect: \"had already served.\"\n\n**The Full Solution:**\n- The reference point is in the past: the arrival of the electrolytic process in the late 1880s.\n- The metal's career as a showpiece happened before that point — \"already served for decades.\"\n- Past-before-past takes the past perfect, formed with \"had\": \"the metal had already served.\"\n\n**Why the other choices are wrong:**\n- B: \"Has served\" is present perfect, which connects to the present rather than to a completed past reference point.\n- C: \"Is\" cannot combine with the past participle \"served\" to express this time relationship.\n- D: \"Have\" is plural and would not agree with the singular subject \"the metal,\" besides failing to mark past-before-past.",
          "_meta": {
            "anchor": "aluminum before cheap electrolysis; past perfect"
          }
        },
        {
          "id": 418,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The combs inside a long-abandoned honeybee nest ______ a detailed record of the colony that built them. The wax preserves traces of the pollen the bees gathered and of the brood they raised season by season.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "to hold"
            },
            {
              "id": "B",
              "text": "holds"
            },
            {
              "id": "C",
              "text": "hold"
            },
            {
              "id": "D",
              "text": "holding"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject of the sentence is the plural noun \"combs,\" so the verb must be the plural \"hold.\"\n\n**The Full Solution:**\n- Strip the intervening phrase: \"The combs ... hold a detailed record.\"\n- \"Inside a long-abandoned honeybee nest\" is a prepositional phrase; \"nest,\" the singular noun nearest the blank, is not the subject.\n- Plural subject, plural verb: \"combs hold.\"\n\n**Why the other choices are wrong:**\n- A: The infinitive \"to hold\" leaves the sentence without a main verb.\n- B: \"Holds\" is singular; it agrees with the nearby \"nest\" rather than with the subject \"combs.\"\n- D: The participle \"holding\" also leaves the sentence without a finite main verb.",
          "_meta": {
            "anchor": "honeybee comb as colony record; subject-verb agreement (plural subject with intervening phrase)"
          }
        },
        {
          "id": 417,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The hoatzin is a bird of the swamps and riverside forests of the Amazon and Orinoco basins. Unlike most birds, it digests leaves by fermenting them in its enlarged ______ its chicks also have two claws on each wing for climbing through branches.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "crop, its"
            },
            {
              "id": "B",
              "text": "crop. Its"
            },
            {
              "id": "C",
              "text": "crop its"
            },
            {
              "id": "D",
              "text": "crop and, its"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** \"Unlike most birds, it digests leaves by fermenting them in its enlarged crop\" and \"Its chicks also have two claws on each wing for climbing through branches\" are both complete sentences, and a period correctly separates them.\n\n**The Full Solution:**\n- First clause: subject \"it\" + verb \"digests\": complete.\n- Second clause: subject \"chicks\" + verb \"have\": also complete.\n- Two independent clauses need a period, a semicolon, or a comma with a conjunction. Only B gives one of these.\n\n**Why the other choices are wrong:**\n- A: A comma alone between two independent clauses creates a comma splice.\n- C: With no punctuation, the two clauses run together.\n- D: The comma is in the wrong place; \"and\" must come after the comma, not before it.",
          "_meta": {
            "anchor": "hoatzin: leaf fermentation in an enlarged crop and wing-clawed chicks",
            "sources": [
              "https://en.wikipedia.org/wiki/Hoatzin"
            ]
          }
        },
        {
          "id": 421,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The Great Basin bristlecone pine — a species whose oldest known living tree, in California's White Mountains, has been dated to more than 4,800 ______ grows on high, dry slopes where few other trees can survive.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "years:"
            },
            {
              "id": "B",
              "text": "years —"
            },
            {
              "id": "C",
              "text": "years,"
            },
            {
              "id": "D",
              "text": "years"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The phrase beginning \"a species whose oldest known living tree\" is set off by a dash after \"pine,\" so it must close with a matching dash before the sentence continues with \"grows.\"\n\n**The Full Solution:**\n- Main sentence: \"The Great Basin bristlecone pine ... grows on high, dry slopes.\"\n- The interruption opens with a dash, so it must close with a dash.\n- \"years —\" closes the interruption and returns the reader to the verb \"grows.\"\n\n**Why the other choices are wrong:**\n- A: A colon cannot close an interruption that a dash opened.\n- C: A comma cannot close a dash-opened interruption; the marks must match.\n- D: Without closing punctuation, the interruption runs into the main verb.",
          "_meta": {
            "anchor": "Great Basin bristlecone pine; Methuselah >4,800 years, White Mountains"
          }
        },
        {
          "id": 422,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Each of the 88 keys on a standard modern piano ______ a felt-covered hammer through a series of levers, so that pressing a key sends the hammer against the strings for that note.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "drive"
            },
            {
              "id": "B",
              "text": "are driving"
            },
            {
              "id": "C",
              "text": "have driven"
            },
            {
              "id": "D",
              "text": "drives"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The subject is \"Each,\" which is singular, so the verb must be singular: \"drives.\"\n\n**The Full Solution:**\n- Strip the prepositional phrase: \"Each [of the 88 keys on a standard modern piano] ___ a felt-covered hammer.\"\n- \"Each\" takes a singular verb.\n- The sentence describes how a piano always works, so the simple present \"drives\" fits.\n\n**Why the other choices are wrong:**\n- A: \"Drive\" is plural; it agrees with \"keys,\" which is not the subject.\n- B: \"Are driving\" is plural.\n- C: \"Have driven\" is plural.",
          "_meta": {
            "anchor": "piano action: each of 88 keys drives a felt hammer; subject-verb agreement"
          }
        },
        {
          "id": 419,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In 1979 the Voyager 1 spacecraft flew past Jupiter and photographed several of its large ______ Io, where the images revealed active volcanoes; Ganymede, the largest moon in the solar system; and Callisto, whose surface is covered with craters.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "moons, including"
            },
            {
              "id": "B",
              "text": "moons. Including"
            },
            {
              "id": "C",
              "text": "moons; including"
            },
            {
              "id": "D",
              "text": "moons: including"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** \"Including Io ... Ganymede ... and Callisto\" is a phrase that gives examples of \"moons,\" and a comma is the conventional way to attach it.\n\n**The Full Solution:**\n- The main clause ends at \"photographed several of its large moons.\"\n- What follows is not a new clause but an including-phrase listing examples of those moons (the items are separated by semicolons because they contain commas).\n- A phrase of this kind is joined to its noun with a comma: \"moons, including ...\"\n\n**Why the other choices are wrong:**\n- B: A period leaves the including-phrase as a fragment with no subject or verb.\n- C: A semicolon must join two independent clauses; \"including ...\" is not a clause.\n- D: A colon could introduce the list directly (\"moons: Io ...\"), but a colon before \"including\" is not conventional.",
          "_meta": {
            "anchor": "Voyager 1 at Jupiter 1979: Io volcanoes, Ganymede largest moon, cratered Callisto"
          }
        },
        {
          "id": 423,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "The cheetah is the fastest land animal, with a top speed of about 65 miles per hour. ______ it cannot keep up that pace for long: its chases last less than 40 seconds on average and cover less than 200 meters.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "In addition,"
            },
            {
              "id": "B",
              "text": "For example,"
            },
            {
              "id": "C",
              "text": "However,"
            },
            {
              "id": "D",
              "text": "Therefore,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The first sentence stresses the cheetah's great speed; the second gives a limit on it: the cheetah cannot keep that speed for long. \"However\" marks this contrast.\n\n**The Full Solution:**\n- Sentence 1: the cheetah can reach about 65 miles per hour.\n- Sentence 2: it cannot hold that pace for long; its chases are short.\n- The second sentence qualifies the first, so a contrasting transition is needed.\n\n**Why the other choices are wrong:**\n- A: \"In addition\" would add a similar point, but the second sentence limits the first.\n- B: The second sentence is not an example of the cheetah's speed.\n- D: The cheetah's short chases are not a result of its high top speed as the text presents it; the sentences contrast.",
          "_meta": {
            "anchor": "cheetah top speed ~65 mph; chases average 37.9 s and 173 m (Wikipedia: Cheetah)"
          }
        },
        {
          "id": 424,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Norwegian fishers have long had two ways to preserve cod. They can salt the fish heavily and then dry it, producing what is called clipfish. ______ they can skip the salt entirely and hang the cod on wooden racks to dry in the cold winter air, producing stockfish.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Alternatively,"
            },
            {
              "id": "B",
              "text": "Therefore,"
            },
            {
              "id": "C",
              "text": "For example,"
            },
            {
              "id": "D",
              "text": "Similarly,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text promises two ways to preserve cod and then describes them one after the other. \"Alternatively\" introduces the second option.\n\n**The Full Solution:**\n- Setup: \"two ways to preserve cod.\"\n- Way 1: salt the fish, then dry it (clipfish).\n- Way 2: skip the salt and dry the fish on racks (stockfish).\n- The second method is a different choice from the first, so \"Alternatively\" fits.\n\n**Why the other choices are wrong:**\n- B: Drying without salt is not a result of salting the fish.\n- C: The second method is not an example of the first; it is a different method.\n- D: \"Similarly\" would signal a likeness, but the second method differs from the first by leaving out the salt.",
          "_meta": {
            "anchor": "Norwegian cod preservation: clipfish (salted, dried) vs stockfish (unsalted, rack-dried)"
          }
        },
        {
          "id": 425,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In the 1840s, Matthew Fontaine Maury of the US Naval Observatory began charting winds and currents from thousands of old ships' logbooks. Captains who followed his recommended routes cut days, sometimes weeks, from long voyages. ______ hundreds of shipmasters accepted Maury's price for the charts: they kept standardized logs of their own voyages and sent them to the observatory.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "For instance,"
            },
            {
              "id": "C",
              "text": "Consequently,"
            },
            {
              "id": "D",
              "text": "Likewise,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The charts demonstrably shortened passages; the shipmasters' willingness to pay Maury's price in logbooks follows from that demonstrated value. The relation is cause and effect.\n\n**The Full Solution:**\n- Cause: captains using the charts saved days or weeks on long passages.\n- Effect: hundreds of shipmasters accepted the charts' price — keeping and submitting standardized logs.\n- \"Consequently\" marks the second sentence as the result of the first.\n\n**Why the other choices are wrong:**\n- A: \"Nevertheless\" would signal the shipmasters acting against the charts' proven value, not because of it.\n- B: \"For instance\" would make the mass adoption an example of the time savings, but it is a response to them.\n- D: \"Likewise\" would claim the two sentences describe parallel cases, when the second grows out of the first.",
          "_meta": {
            "anchor": "Matthew Fontaine Maury — wind and current charts; result transition"
          }
        },
        {
          "id": 426,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Alice Ball (1892-1916) was an American chemist at the College of Hawaii.",
              "In her era, oil from the chaulmoogra tree was the standard treatment for Hansen's disease (leprosy).",
              "Injected, the thick oil clumped under the skin; swallowed, it often caused vomiting.",
              "Ball developed a method for converting the oil's active compounds into a water-soluble, injectable form.",
              "Injections prepared by her method remained the leading treatment for the disease until the 1940s."
            ],
            "goal": "The student wants to introduce Ball's main scientific contribution to an audience unfamiliar with her work."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Alice Ball was an American chemist who worked at the College of Hawaii in the early twentieth century."
            },
            {
              "id": "B",
              "text": "Chaulmoogra oil, then the standard treatment for Hansen's disease, clumped under the skin when it was injected and often caused vomiting when it was swallowed."
            },
            {
              "id": "C",
              "text": "A method was developed for converting chaulmoogra oil into an injectable form that remained the leading treatment for Hansen's disease until the 1940s."
            },
            {
              "id": "D",
              "text": "The American chemist Alice Ball developed an injectable form of chaulmoogra oil, the standard treatment for Hansen's disease, that was used until the 1940s."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The goal demands two things at once — identify Ball for unfamiliar readers and state her main contribution — and D alone does both.\n\n**The Full Solution:**\n- Identification: \"The American chemist Alice Ball\" tells a newcomer who she was.\n- Contribution: developing an injectable form of the era's standard treatment, with its significance (\"used until the 1940s\").\n- One sentence, both requirements met.\n\n**Why the other choices are wrong:**\n- A: It identifies Ball but never says what she contributed.\n- B: It describes the problem her method solved without saying that she solved it or how.\n- C: It reports the achievement but strips out Ball herself, failing to introduce her to readers who do not know her.",
          "_meta": {
            "anchor": "Alice Ball — injectable chaulmoogra treatment; introduce-contribution goal"
          }
        },
        {
          "id": 427,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Venomous and poisonous animals both carry toxins.",
              "A venomous animal delivers its toxin actively, through a bite or a sting.",
              "Rattlesnakes and scorpions are venomous.",
              "A poisonous animal's toxin harms only an animal that touches or eats it.",
              "Poison dart frogs, which carry toxins in their skin, are poisonous."
            ],
            "goal": "The student wants to emphasize a difference between venomous and poisonous animals."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Both venomous animals, such as rattlesnakes and scorpions, and poisonous animals, such as poison dart frogs, carry toxins that can harm other animals."
            },
            {
              "id": "B",
              "text": "Unlike a venomous animal, which delivers its toxin through a bite or sting, a poisonous animal harms only animals that touch or eat it."
            },
            {
              "id": "C",
              "text": "Venomous animals, such as rattlesnakes and scorpions, deliver their toxins through a bite or a sting."
            },
            {
              "id": "D",
              "text": "Because poison dart frogs carry toxins in their skin, they are more dangerous than rattlesnakes."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The goal is to emphasize a difference, and B sets the two kinds of animals on either side of an explicit contrast: one delivers its toxin by a bite or sting, the other harms only animals that touch or eat it.\n\n**The Full Solution:**\n- The notes place the difference in how the toxin reaches a victim (bullets 2 and 4).\n- B uses \"Unlike ...\" and names how each kind of animal does it.\n- A sentence that contrasts the two is what an emphasize-a-difference goal requires.\n\n**Why the other choices are wrong:**\n- A: It emphasizes what the two kinds of animals share, not how they differ.\n- C: It describes venomous animals only; with one kind of animal, no difference appears.\n- D: It compares how dangerous two animals are, a claim the notes never make.",
          "_meta": {
            "anchor": "venomous vs poisonous animals: difference goal"
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
          "id": 428,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A promising new crop variety cannot be released on the strength of one good season. Yield is shaped by weather, soil, and disease pressures that differ from year to year and field to field. Breeders must therefore ______ a variety's performance in trials sown across many sites and seasons before offering its seed to farmers.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "imagine"
            },
            {
              "id": "B",
              "text": "overstate"
            },
            {
              "id": "C",
              "text": "recall"
            },
            {
              "id": "D",
              "text": "confirm"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** One good season is insufficient evidence, so what the multi-site, multi-season trials provide is verification — the breeders confirm the variety's performance.\n\n**The Full Solution:**\n- The problem: a single season's result may reflect weather, soil, or disease luck rather than the variety.\n- The remedy: trials \"across many sites and seasons\" — repeated testing under varied conditions.\n- Repeated testing to establish that a result holds is exactly what \"confirm\" means.\n\n**Why the other choices are wrong:**\n- A: \"Imagine\" involves no trials at all; the sentence describes empirical testing.\n- B: \"Overstate\" means to exaggerate — the opposite of the caution the sentence describes.\n- C: \"Recall\" means to remember past results, but the trials generate new evidence.",
          "_meta": {
            "anchor": "crop variety trials — multi-site confirmation before release"
          }
        },
        {
          "id": 430,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Along one stretch of a desert river, less water flows past the downstream gauge than enters upstream, though no channel carries the difference away. Hydrologists treat the gap not as an error but as a quantity to ______ with the basin's water budget: the missing flow, seeping through the streambed, reappears in the ledger as recharge to the aquifer below.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "equate"
            },
            {
              "id": "B",
              "text": "discard"
            },
            {
              "id": "C",
              "text": "inflate"
            },
            {
              "id": "D",
              "text": "reconcile"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The gap between gauges looks like a contradiction in the accounts, and the hydrologists' move — tracing the missing flow to aquifer recharge — brings the figures into agreement. \"Reconcile\" is the word for squaring an apparent discrepancy with the rest of an account.\n\n**The Full Solution:**\n- The setup is bookkeeping language: a \"water budget,\" a \"ledger,\" an unexplained shortfall.\n- The resolution keeps the missing water in the accounts by entering it as recharge below the streambed.\n- Making the shortfall consistent with the budget is reconciliation, not rejection.\n\n**Why the other choices are wrong:**\n- A: \"Equate\" would assert the gap equals the budget itself, a claim that makes no sense here.\n- B: \"Discard\" is precisely what the hydrologists refuse to do with the discrepancy.\n- C: \"Inflate\" means to exaggerate the quantity, not to account for it.",
          "_meta": {
            "anchor": "losing streams and aquifer recharge; hard words-in-context"
          }
        },
        {
          "id": 429,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A magician performing sleight of hand cannot hide the hand that does the secret work. Instead, the performer relies on misdirection: a gesture, a glance, or a joke is used to ______ the audience's attention from that hand, so that the move goes unnoticed even though it happens in plain sight.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "reward"
            },
            {
              "id": "B",
              "text": "divert"
            },
            {
              "id": "C",
              "text": "sharpen"
            },
            {
              "id": "D",
              "text": "sustain"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Misdirection works by drawing the audience's attention away from the hand doing the secret work, and \"divert\" means to turn something aside from its course.\n\n**The Full Solution:**\n- The magician cannot hide the hand, so the audience must be made to look elsewhere.\n- The gesture, glance, or joke moves attention \"from that hand.\"\n- \"Divert the audience's attention from that hand\" names that turning-away exactly, which is why the move goes unnoticed.\n\n**Why the other choices are wrong:**\n- A: \"Reward\" would make the gesture a benefit to the audience's attention, not a way of steering it away.\n- C: \"Sharpen\" means to make attention keener, the opposite of what misdirection needs.\n- D: \"Sustain\" means to keep attention going, but the point is where attention goes, not how long it lasts.",
          "_meta": {
            "anchor": "magic misdirection: drawing attention away from the secret move"
          }
        },
        {
          "id": 431,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "First published in 1876, Henry Martyn Robert's manual for running meetings ______ the procedures of debate in exacting detail: how to make a motion, how to amend it, how to bring discussion to a close. Robert, a US Army officer, adapted the rules of the House of Representatives so that ordinary clubs and societies could follow them.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "codifies"
            },
            {
              "id": "B",
              "text": "embellishes"
            },
            {
              "id": "C",
              "text": "disputes"
            },
            {
              "id": "D",
              "text": "predates"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The manual takes the rules of debate and arranges them, step by step, into a written system that any group can follow, which is what \"codifies\" means.\n\n**The Full Solution:**\n- The content: meeting procedures, given \"in exacting detail\" and item by item (motions, amendments, closing debate).\n- The purpose: rules used in the House of Representatives were adapted so that ordinary clubs and societies could follow them.\n- Organizing procedures into a systematic written form is codification.\n\n**Why the other choices are wrong:**\n- B: \"Embellishes\" means to decorate or exaggerate, but exacting detail is the opposite of ornament.\n- C: \"Disputes\" would set the manual against the procedures, yet it lays them out for others to use.\n- D: \"Predates\" concerns chronology only, and the manual came after the House rules it adapted rather than before them.",
          "_meta": {
            "anchor": "Robert's Rules of Order (1876), Henry Martyn Robert, US Army officer, adapted US House procedure for ordinary societies; hard words-in-context",
            "source": "https://en.wikipedia.org/wiki/Robert%27s_Rules_of_Order"
          }
        },
        {
          "id": 432,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "When the United States began licensing radio stations in 1912, the long wavelengths, thought best for covering distance, went to commercial and military services. Amateur operators were confined to wavelengths shorter than 200 meters, a band regarded as nearly worthless. Over the next decade, transmitting from attics and garden sheds, the amateurs discovered what the experts had missed: short waves, reflected between the upper atmosphere and the ground, could cross oceans on little power. In 1923 two amateurs exchanged messages across the Atlantic, and soon the services that had dismissed short waves were eager to use them.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To explain the physical mechanism that allows short radio waves to travel far beyond the horizon."
            },
            {
              "id": "B",
              "text": "To argue that the long wavelengths should have gone to amateur operators rather than to the commercial and military services that received them in 1912."
            },
            {
              "id": "C",
              "text": "To describe the homemade equipment that amateur radio operators of the 1920s assembled in their attics and garden sheds."
            },
            {
              "id": "D",
              "text": "To recount how operators confined to wavelengths considered worthless discovered those wavelengths' extraordinary reach, upending expert opinion."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text is a narrative of reversal: amateurs pushed onto a dismissed band, the discovery that the band could span oceans, and the experts' change of heart. Choice D names that arc.\n\n**The Full Solution:**\n- Setup: the valued long wavelengths go to established services; amateurs get the \"nearly worthless\" short waves.\n- Turn: the amateurs find that short waves cross oceans on little power.\n- Consequence: expert opinion is overturned, and the services that dismissed the band become eager to use it. The purpose is to recount that story.\n\n**Why the other choices are wrong:**\n- A: The rebounding mechanism gets one clause; it serves the story rather than being the point.\n- B: The text passes no judgment on how licensing should have been arranged.\n- C: Attics and sheds set a scene; no equipment is described.",
          "_meta": {
            "anchor": "US Radio Act of 1912 confined amateurs below 200 m; first two-way transatlantic amateur contact Nov. 1923"
          }
        },
        {
          "id": 433,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is from Willa Cather's 1913 novel *O Pioneers!*.\n\nOne January day, thirty years ago, the little town of Hanover, anchored on a windy Nebraska tableland, was trying not to be blown away. A mist of fine snowflakes was curling and eddying about the cluster of low drab buildings huddled on the gray prairie, under a gray sky. The dwelling-houses were set about haphazard on the tough prairie sod; some of them looked as if they had been moved in overnight, and others as if they were straying off by themselves, headed straight for the open plain. None of them had any appearance of permanence, and the howling wind blew under them as well as over them.",
          "question": "Which choice best describes what is happening in the text?",
          "choices": [
            {
              "id": "A",
              "text": "The narrator recalls a conversation with a longtime resident about how a prairie town was founded."
            },
            {
              "id": "B",
              "text": "The narrator pictures a small prairie town on a winter day, its scattered buildings seeming barely fixed in place against the wind."
            },
            {
              "id": "C",
              "text": "The narrator urges the residents of a prairie town to rebuild their scattered houses on more sheltered ground before the winter storms arrive."
            },
            {
              "id": "D",
              "text": "The narrator gives a factual history of how a prairie town's buildings were put up over the years."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text is a scene: a town on a windy tableland in January, snow eddying around huddled buildings that look temporary — \"trying not to be blown away.\"\n\n**The Full Solution:**\n- Every sentence describes the town's appearance on this one winter day: the snowfall, the gray prairie and sky, the haphazard houses.\n- The controlling impression is impermanence — houses that look moved in overnight or straying toward the plain, wind blowing under as well as over.\n- Choice B captures both the scene and that impression.\n\n**Why the other choices are wrong:**\n- A: No conversation occurs and no resident appears; the narrator describes unaided.\n- C: The narrator addresses no one and urges nothing; the text observes rather than argues.\n- D: The town's construction history is never given — the houses only look \"as if\" they had been moved in overnight.",
          "_meta": {
            "anchor": "Willa Cather — O Pioneers! (1913), opening scene; genuine public-domain excerpt",
            "quoteVerify": true,
            "source": "Willa Cather, O Pioneers!, Part I, Chapter I (1913); text verified against Project Gutenberg eBook #24"
          }
        },
        {
          "id": 434,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Maize farmers in East Africa face two pests: stemborer moths, whose larvae bore into the stalks, and striga, a parasitic weed. Entomologist Zeyaur Khan and his colleagues developed a remedy called push-pull: desmodium, a legume, is sown between the maize rows, and napier grass is planted around the field. __Desmodium releases volatile compounds that repel egg-laying stemborer moths, while the napier grass at the field's edge emits odors that attract them, drawing the infestation away from the crop.__ Desmodium's roots also release compounds that make striga seeds germinate but keep the seedlings from attaching to maize roots. What looks like folk gardening is applied chemical ecology.",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": [
            {
              "id": "A",
              "text": "It supplies the chemical mechanism behind the planting arrangement, grounding the passage's closing claim that the method is applied science rather than folk practice."
            },
            {
              "id": "B",
              "text": "It concedes that the push-pull arrangement fails against one of the two pests the passage says farmers must contend with."
            },
            {
              "id": "C",
              "text": "It introduces a rival explanation of the method's success that the passage's final sentence rejects."
            },
            {
              "id": "D",
              "text": "It reports the results of a field trial comparing yields in push-pull plots with yields in conventionally planted fields."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The underlined sentence explains why the planting arrangement works — repellent volatiles inside the field, attractant odors at its edge — and that mechanism is what licenses the final sentence's verdict: applied chemical ecology, not folk gardening.\n\n**The Full Solution:**\n- Before the underline: the arrangement is described but not yet explained.\n- The underlined sentence converts arrangement into mechanism: push (desmodium repels) and pull (napier grass attracts).\n- The closing sentence generalizes from exactly this — the method's scientific character — so the underline is its foundation.\n\n**Why the other choices are wrong:**\n- B: The sentence shows the method working against stemborers; the striga mechanism follows in the next sentence. Nothing is conceded.\n- C: It gives the passage's own explanation, not a rival one, and the final sentence embraces it.\n- D: No trial, plots, or yields appear anywhere in the passage.",
          "_meta": {
            "anchor": "Zeyaur Khan — push-pull intercropping; mechanism sentence grounding the closing claim"
          }
        },
        {
          "id": 435,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Studying transparent starfish larvae in the 1880s, the zoologist Élie Metchnikoff watched wandering cells converge on a splinter he had inserted and engulf foreign material around it. From such observations he built a general theory of immunity: the body's defense is waged by devouring cells, which he named phagocytes, that seek out, swallow, and digest invading microbes. Wherever protection against disease appears, Metchnikoff argued, these cells are its principal agents."
            },
            {
              "label": "Text 2",
              "text": "In 1890, Emil von Behring and Shibasaburō Kitasato reported that animals exposed to weakened diphtheria or tetanus toxins became resistant to the diseases — and, more striking, that the resistance could be transferred. Serum drawn from an immunized animal, a fluid containing no living cells at all, protected the animals that received it. The blood's cell-free portion, the two argued, must itself carry substances that disarm a toxin, a protection no devouring cell need provide."
            }
          ],
          "question": "Based on the texts, how would Behring and Kitasato (Text 2) most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "Metchnikoff misinterpreted his observations, since the wandering cells he watched were clearing debris rather than defending the larva against infection."
            },
            {
              "id": "B",
              "text": "Immunity to diphtheria and tetanus may well depend on substances carried in serum, but immunity to most other diseases must still arise from the action of devouring cells."
            },
            {
              "id": "C",
              "text": "The starfish experiments should be repeated in animals that can be immunized, so that the contribution of the wandering cells can be measured directly."
            },
            {
              "id": "D",
              "text": "Phagocytes may well consume invading microbes, but immunity that transfers in cell-free serum shows that the body's defense cannot rest on devouring cells alone."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Behring and Kitasato's finding targets the reach of Metchnikoff's claim, not his observations: protection that travels in a fluid \"containing no living cells at all\" cannot be the work of devouring cells, so phagocytes cannot be the whole of immunity.\n\n**The Full Solution:**\n- Text 1's argument: wherever protection appears, phagocytes are its principal agents.\n- Text 2's evidence: immunity transferred by cell-free serum — \"a protection no devouring cell need provide.\"\n- The measured response grants what phagocytes may do while denying that defense rests on them alone — exactly choice D.\n\n**Why the other choices are wrong:**\n- A: Nothing in Text 2 questions what Metchnikoff saw; the challenge is to his generalization.\n- B: It reverses the pair's position — they generalize from serum protection rather than confining it to two diseases.\n- C: Text 2 proposes no repetition of the starfish work; its argument stands on the transfer experiments.",
          "_meta": {
            "anchor": "cross-text — Metchnikoff (phagocytes) versus Behring and Kitasato (cell-free serum antitoxin); immunology history"
          }
        },
        {
          "id": 436,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Rapa Nui (Easter Island) is often told as a story of collapse: a population of as many as 17,500 people, the story goes, used up the island's resources and then crashed. When Europeans arrived in 1722, they found only a few thousand residents. In 2024 a team of archaeologists tested the story by mapping the island's rock gardens, stone-covered plots where islanders grew sweet potatoes. Satellite images showed that the gardens covered less than half a percent of the island, enough, along with seafood, to feed only about 3,900 people. The population, the researchers concluded, was probably never much larger than the one Europeans met.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The islanders' rock gardens covered most of the island's land but still could not feed its growing population."
            },
            {
              "id": "B",
              "text": "Rock gardens were the most productive farming method that any Pacific island society ever developed."
            },
            {
              "id": "C",
              "text": "Although Rapa Nui is often said to have collapsed, its gardens suggest that its population was never much larger than the one Europeans found."
            },
            {
              "id": "D",
              "text": "The earlier estimate of 17,500 people was accurate, since the study found that most islanders lived on seafood rather than on sweet potatoes from the gardens."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text presents a popular story (a large population used up the island and collapsed), then a study whose evidence points the other way: the gardens could feed only about 3,900 people, close to the number Europeans found. Choice C states both the story and the study's conclusion.\n\n**The Full Solution:**\n- The popular account: as many as 17,500 people, followed by a crash.\n- The test: the researchers mapped the rock gardens where sweet potatoes were grown.\n- The finding: the gardens covered less than half a percent of the island, enough (with seafood) for only about 3,900 people.\n- The conclusion: the population was probably never much larger than the few thousand Europeans met in 1722. C sets this against the collapse story.\n\n**Why the other choices are wrong:**\n- A: The text says the gardens covered less than half a percent of the island, not most of it.\n- B: The text never compares Rapa Nui's gardens with farming on other Pacific islands.\n- D: The text never says most islanders lived on seafood. The study counts seafood and still arrives at only about 3,900 people, so it rejects the large estimate rather than supporting it.",
          "_meta": {
            "anchor": "Rapa Nui rock gardens and population size (Davis et al. 2024, Science Advances): <0.5% of island in gardens, ~3,900 people with seafood (archaeology.org); earlier estimates as high as 17,500 (Columbia Climate School news, 2024-06-21)"
          }
        },
        {
          "id": 443,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "In the 1920s the Russian botanist Nikolai Vavilov led collecting expeditions on five continents, gathering seeds of wheat, barley, and dozens of other crops. He found their variation strikingly uneven: for each crop, a few regions held a profusion of distinct local forms, while other regions grew only a handful. Two principles, Vavilov reasoned, explained the pattern. First, varieties accumulate where a crop has been grown longest, as centuries of cultivation and selection add form after form. Second, farmers who carry a crop into new territory take only a narrow sample of what exists. If both principles hold, then for any crop, the region with the greatest concentration of distinct varieties is likely to be ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "the region where the crop has been grown longest, and thus where it was most likely first domesticated."
            },
            {
              "id": "B",
              "text": "the region whose farmers imported the most varieties from the surrounding territories over the centuries."
            },
            {
              "id": "C",
              "text": "the region with the climate best suited to the crop's wild ancestors, wherever domestication itself took place."
            },
            {
              "id": "D",
              "text": "the region where the crop's yield per acre is highest under traditional farming methods."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The two principles jointly point one way: diversity accumulates with time in place, and migration carries diversity away in narrow samples. Peak diversity therefore marks the longest cultivation — and the longest cultivation is where domestication most plausibly began.\n\n**The Full Solution:**\n- Principle one makes diversity a clock: the longer a crop grows in a region, the more forms accumulate there.\n- Principle two rules out the rival reading: newly arrived populations are impoverished samples, so a diversity peak cannot mark a recent import.\n- The region of greatest diversity is thus the oldest home of the crop, and the best candidate for its origin — choice A, and nothing more.\n\n**Why the other choices are wrong:**\n- B: It inverts principle two — importation brings narrow samples, not profusion.\n- C: The principles concern time under cultivation, not climatic suitability; the conclusion cannot suddenly be about climate.\n- D: Yield appears nowhere in the premises and has no logical link to varietal counts.",
          "_meta": {
            "anchor": "Nikolai Vavilov — centers of crop diversity as centers of origin; hard inference"
          }
        },
        {
          "id": 437,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The court theater at Drottningholm, outside Stockholm, still has its eighteenth-century stage machinery in working order, and performances there still use it. Scene changes depend on ropes and rolling carriages beneath the stage. When stagehands turn the great capstan below the floor, every carriage moves at once. Each painted flat in view slides away as a fresh one slides out to replace it, and the whole scene is transformed in seconds, in full sight of the audience. Eighteenth-century stagecraft treated such visible transformation as a spectacle in its own right.",
          "question": "According to the text, what happens when stagehands turn the capstan beneath the theater's stage?",
          "choices": [
            {
              "id": "A",
              "text": "The stage floor rises slowly into full view so that the audience can watch the eighteenth-century machinery at work beneath it."
            },
            {
              "id": "B",
              "text": "A curtain falls to conceal the stage while stagehands carry new scenery into position."
            },
            {
              "id": "C",
              "text": "All of the painted flats in view are exchanged for fresh ones at once, transforming the scene within seconds."
            },
            {
              "id": "D",
              "text": "Each painted flat is replaced one at a time, in an order fixed by the machinery's design."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text says that when the capstan turns, \"every carriage moves at once,\" each visible flat slides away as a fresh one replaces it, and \"the whole scene is transformed in seconds.\"\n\n**The Full Solution:**\n- The capstan drives all the carriages simultaneously.\n- Each flat in view is exchanged for a replacement.\n- The transformation takes seconds — exactly what choice C reports.\n\n**Why the other choices are wrong:**\n- A: The machinery stays beneath the stage; nothing in the text has the floor rise or the works become visible.\n- B: The text says the change happens \"in full sight of the audience,\" with no curtain and no carrying.\n- D: \"Every carriage moves at once\" rules out one-at-a-time replacement.",
          "_meta": {
            "anchor": "Drottningholm court theater — simultaneous scene change by capstan; detail stem"
          }
        },
        {
          "id": 439,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Anoles are small lizards that cling to tree trunks and branches with adhesive pads on their toes. After two hurricanes struck the Caribbean in 2017, a team of biologists found that the anoles surviving on two islands in the storms' path had larger toepads, on average, than those islands' anoles had before. The researchers hypothesize that hurricanes favor lizards with larger toepads, which grip more strongly and help a lizard hold on in high winds.",
          "question": "Which finding, if true, would most directly support the researchers' hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Anole populations on islands struck by hurricanes more often over the past several decades have larger toepads than populations on islands struck less often."
            },
            {
              "id": "B",
              "text": "Anoles that live mostly on the ground have smaller toepads than anoles that live mostly in trees."
            },
            {
              "id": "C",
              "text": "Anoles kept in laboratory enclosures grow at the same rate whether they are fed live insects or a prepared diet."
            },
            {
              "id": "D",
              "text": "Anole populations on the islands struck most often by hurricanes have the smallest toepads on average, while populations on rarely struck islands have the largest."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** If hurricanes favor anoles with larger toepads, then islands that hurricanes strike more often should, over time, hold lizards with larger toepads. Choice A reports exactly that pattern.\n\n**The Full Solution:**\n- The hypothesis links two things: hurricanes and larger toepads.\n- A finding that supports it should show toepad size rising with hurricane exposure.\n- A compares islands struck more often with islands struck less often and finds larger toepads where storms are more frequent.\n\n**Why the other choices are wrong:**\n- B: Ground-dwelling and tree-dwelling lizards may differ for many reasons; the finding says nothing about hurricanes.\n- C: Diet and growth rate in the laboratory have nothing to do with surviving high winds.\n- D: This is the reverse pattern; it would count against the hypothesis, not for it.",
          "_meta": {
            "anchor": "Anolis toepads and hurricanes (Donihue et al. 2018 Nature; 2020 PNAS); finding-if-true form"
          }
        },
        {
          "id": 438,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Smallpox inoculation reached England not through its medical colleges but through an ambassador's household. In Constantinople in 1717, Lady Mary Wortley Montagu, who had survived smallpox herself, observed the Ottoman practice of engrafting. A trace of matter from a mild case was placed in a scratch on the skin, producing a brief illness and lasting protection. She had her son inoculated there, and after returning to London she promoted the procedure, arranging for her daughter to be inoculated before physicians during the epidemic of 1721. The practice took hold in England decades before vaccination was introduced.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Ottoman practitioners kept the technique of engrafting secret from European visitors until the eighteenth century."
            },
            {
              "id": "B",
              "text": "Montagu's advocacy of inoculation was resisted by English physicians because she lacked formal medical training."
            },
            {
              "id": "C",
              "text": "Inoculation as practiced in Constantinople caused a brief illness, whereas the vaccination introduced decades later carried no risk of any illness at all."
            },
            {
              "id": "D",
              "text": "Montagu learned of inoculation in Constantinople and, through personal example and advocacy, helped establish it in England long before vaccination."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text's through-line is transmission: Montagu sees engrafting in Constantinople, applies it in her own family, promotes it in London, and the practice takes hold in England decades before vaccination. D traces exactly that arc.\n\n**The Full Solution:**\n- The opening sentence frames the point: inoculation reached England through an ambassador's household, not the medical colleges.\n- The middle supplies the means: her son's inoculation, then her daughter's before physicians — personal example turned public advocacy.\n- The final sentence gives the outcome D restates: the practice established well before vaccination.\n\n**Why the other choices are wrong:**\n- A: Montagu observed the practice openly; no secrecy is described.\n- B: The text never says physicians resisted her or mentions her training.\n- C: It elevates a detail into a comparison the text never makes — nothing is said about vaccination's risks.",
          "_meta": {
            "anchor": "Lady Mary Wortley Montagu — inoculation's route from Constantinople to England"
          }
        },
        {
          "id": 441,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Between 2000 and 2020, the world's yearly harvest from wild fisheries and aquaculture (the farming of fish, shellfish, and aquatic plants) grew by about 75 million metric tons. An analyst claims that nearly all of this growth came from aquaculture: the wild catch held almost steady for two decades, while aquaculture production kept climbing in every five-year period.",
          "questionTable": {
            "type": "table",
            "caption": "World wild-capture fisheries and aquaculture production, 2000-2020 (approximate)",
            "headers": [
              "Year",
              "Wild capture (millions of metric tons)",
              "Aquaculture (millions of metric tons)"
            ],
            "rows": [
              [
                "2000",
                "96.2",
                "43.1"
              ],
              [
                "2005",
                "95.6",
                "59.2"
              ],
              [
                "2010",
                "89.7",
                "78.1"
              ],
              [
                "2015",
                "94.4",
                "103.9"
              ],
              [
                "2020",
                "91.6",
                "122.8"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Wild capture reached its highest level in 2000, at 96.2 million metric tons, and then fell to 89.7 million metric tons by 2010, the lowest level shown."
            },
            {
              "id": "B",
              "text": "Aquaculture production grew from 43.1 million metric tons in 2000 to 122.8 million in 2020, rising in every year shown."
            },
            {
              "id": "C",
              "text": "In 2000 aquaculture production was 43.1 million metric tons, while wild capture was 96.2 million metric tons."
            },
            {
              "id": "D",
              "text": "From 2000 to 2020 wild capture stayed between 89.7 and 96.2 million metric tons, while aquaculture rose every five years, from 43.1 to 122.8 million."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The claim has two parts: the wild catch held almost steady, and aquaculture production kept climbing. Only D reports both: wild-capture figures stayed within a narrow band (89.7 to 96.2 million metric tons) while aquaculture rose in every five-year period.\n\n**The Full Solution:**\n- Part 1 of the claim: the wild catch barely changed from 2000 to 2020.\n- Part 2: aquaculture production rose in every period shown.\n- D gives the wild-capture range and the aquaculture rise from 43.1 to 122.8 million metric tons, covering both parts.\n\n**Why the other choices are wrong:**\n- A: It describes a fall in the wild catch but says nothing about aquaculture growth.\n- B: It supports only the aquaculture half of the claim; it leaves out the steady wild catch.\n- C: It gives a single year, so it cannot show either the steady wild catch or the rising aquaculture figures.",
          "_meta": {
            "anchor": "world capture fisheries (steady) vs aquaculture production (rising), 2000-2020, FAO data via World Bank",
            "sources": [
              "https://data.worldbank.org/indicator/ER.FSH.CAPT.MT?locations=1W",
              "https://data.worldbank.org/indicator/ER.FSH.AQUA.MT?locations=1W",
              "https://api.worldbank.org/v2/country/WLD/indicator/ER.FSH.CAPT.MT?format=json&date=2000:2020",
              "https://api.worldbank.org/v2/country/WLD/indicator/ER.FSH.AQUA.MT?format=json&date=2000:2020"
            ]
          }
        },
        {
          "id": 440,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Among mammals, the length of pregnancy, or gestation, ranges from a few weeks to nearly two years. Drawing on records in the AnAge database of animal life histories, a biologist claims that gestation length tracks body size closely: small species have short pregnancies, and large species have long ones.",
          "questionTable": {
            "type": "table",
            "caption": "Adult body mass and gestation length of five mammal species",
            "headers": [
              "Species",
              "Adult body mass (kilograms)",
              "Gestation (days)"
            ],
            "rows": [
              [
                "African elephant",
                "4,800",
                "670"
              ],
              [
                "European rabbit",
                "1.8",
                "30"
              ],
              [
                "Gray wolf",
                "26.6",
                "62"
              ],
              [
                "Red fox",
                "4.1",
                "52"
              ],
              [
                "White-tailed deer",
                "87",
                "198"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to support the claim?",
          "choices": [
            {
              "id": "A",
              "text": "Adult body mass ranged from 1.8 kilograms for the European rabbit to 4,800 kilograms for the African elephant."
            },
            {
              "id": "B",
              "text": "Gestation lasted fewer than 100 days in three of the five species shown in the table and more than 100 days in the other two."
            },
            {
              "id": "C",
              "text": "The two lightest species (1.8 and 4.1 kilograms) had the two shortest gestations (30 and 52 days), and the heaviest (4,800 kilograms) had the longest (670 days)."
            },
            {
              "id": "D",
              "text": "The gray wolf weighed 26.6 kilograms and had a gestation of 62 days, the middle value of the five in both columns."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** A tracking claim needs both quantities moving together across species, and C shows the match at both ends of the range: the lightest species have the shortest gestations, and the heaviest species has the longest.\n\n**The Full Solution:**\n- The claim pairs conditions: small body with short pregnancy, large body with long pregnancy.\n- C matches the two lightest species (European rabbit, red fox) to the two shortest gestations and the heaviest (African elephant) to the longest.\n- Agreement at both extremes is what shows that one quantity tracks the other.\n\n**Why the other choices are wrong:**\n- A: It reports only body mass and never mentions gestation.\n- B: It reports only gestation and never connects it to body mass.\n- D: One species' values cannot show that the two quantities move together across species.",
          "_meta": {
            "anchor": "mammal gestation vs adult body mass, AnAge (genomics.senescence.info): rabbit 1,800 g/30 d; red fox 4,132 g/52 d; gray wolf 26,625 g/62 d; white-tailed deer 87,000 g/198 d; African elephant 4,800,000 g/670 d",
            "source": "https://genomics.senescence.info/species/"
          }
        },
        {
          "id": 442,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "A true fresco is painted on plaster while the plaster is still damp, so that the pigment bonds into the wall as it dries. Each morning, therefore, a plasterer laid down only as much fresh plaster as could be painted before it set — a day's patch, called a giornata. A patch could not be reworked once dry, so the joint where one day's plaster met the next was left where the work ended. Although painters smoothed these joints, they remain faintly detectable on the finished wall. Since each giornata represents at most a single day's painting, a historian who maps the joints across an entire fresco can ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "estimate the minimum number of working days the painting of the fresco required."
            },
            {
              "id": "B",
              "text": "identify which passages of the fresco were painted by assistants rather than by the master."
            },
            {
              "id": "C",
              "text": "recover the full-scale preparatory drawings from which the composition was transferred."
            },
            {
              "id": "D",
              "text": "establish the exact hour of the day at which each patch of fresh plaster was laid."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** If every patch is at most one day's work, then counting the patches gives a floor on the days worked — no more, and no less, than the premises allow.\n\n**The Full Solution:**\n- Premise one: a giornata is the plaster laid for a single day's painting.\n- Premise two: the joints between giornate survive and can be mapped.\n- Mapping the joints therefore counts the patches, and the count bounds the working days from below — an estimate of the minimum, exactly choice A.\n\n**Why the other choices are wrong:**\n- B: Nothing in the text connects joints to who painted a passage; hands are never discussed.\n- C: Preparatory drawings are never mentioned, and joints record scheduling, not design.\n- D: The joints reveal that a day ended, not the clock time at which its plaster went down.",
          "_meta": {
            "anchor": "fresco giornate — day patches as a record of working days"
          }
        },
        {
          "id": 447,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "After winning Florence's 1401 competition for a set of bronze doors, the young goldsmith Lorenzo Ghiberti ______ a workshop in which a generation of Florentine artists trained. The two pairs of doors he produced there occupied him for nearly half a century.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "runs"
            },
            {
              "id": "B",
              "text": "is running"
            },
            {
              "id": "C",
              "text": "has run"
            },
            {
              "id": "D",
              "text": "ran"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The sentence narrates completed events in the past — a competition won in 1401, doors produced over the following decades — so the simple past \"ran\" is required.\n\n**The Full Solution:**\n- The time frame is fixed by \"After winning Florence's 1401 competition\" and by the half-century of work that followed.\n- The surrounding verbs are past: \"trained,\" \"produced,\" \"occupied.\"\n- A completed action in a finished past period takes the simple past: \"Ghiberti ran a workshop.\"\n\n**Why the other choices are wrong:**\n- A: The present \"runs\" clashes with the fifteenth-century time frame and the past verbs around it.\n- B: \"Is running\" describes an action in progress now, centuries too late.\n- C: \"Has run\" links a past action to the present moment, but Ghiberti's workshop belongs entirely to the past.",
          "_meta": {
            "anchor": "Lorenzo Ghiberti — Baptistery doors workshop; simple past"
          }
        },
        {
          "id": 446,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The peacock mantis shrimp does not pry open the shells of its ______ it smashes snails and crabs with a pair of club-shaped limbs that strike at more than 20 meters per second.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "prey, it"
            },
            {
              "id": "B",
              "text": "prey; it"
            },
            {
              "id": "C",
              "text": "prey it"
            },
            {
              "id": "D",
              "text": "prey and, it"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** \"The peacock mantis shrimp does not pry open the shells of its prey\" and \"it smashes snails and crabs ...\" are both independent clauses, and a semicolon is a standard way to join two closely related independent clauses.\n\n**The Full Solution:**\n- Clause one is complete: \"The peacock mantis shrimp does not pry open the shells of its prey.\"\n- Clause two is complete: \"it smashes snails and crabs with a pair of club-shaped limbs ...\"\n- The second clause explains the first, so a semicolon joins them correctly.\n\n**Why the other choices are wrong:**\n- A: A comma alone between the two independent clauses creates a comma splice.\n- C: No punctuation fuses the clauses into a run-on.\n- D: \"And\" would need a comma before it to join the clauses; a comma after it is not a conventional joining.",
          "_meta": {
            "anchor": "peacock mantis shrimp club strike >20 m/s on snails and crabs; semicolon between independent clauses",
            "source": "https://en.wikipedia.org/wiki/Odontodactylus_scyllarus"
          }
        },
        {
          "id": 449,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "______ the ornithologist Margaret Morse Nice followed the song sparrows near her Columbus, Ohio, home for eight years, recording each bird's territory, mates, and nests in exacting detail.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "While fitting each bird with its own combination of colored leg bands"
            },
            {
              "id": "B",
              "text": "Having been fitted with its own combination of colored leg bands,"
            },
            {
              "id": "C",
              "text": "Fitting each bird with its own combination of colored leg bands,"
            },
            {
              "id": "D",
              "text": "Fitting each bird with its own combination of colored leg bands"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** An introductory participial phrase that describes the subject (\"the ornithologist Margaret Morse Nice\") must end with a comma before the main clause begins.\n\n**The Full Solution:**\n- The main clause is \"the ornithologist Margaret Morse Nice followed the song sparrows ... for eight years.\"\n- \"Fitting each bird with its own combination of colored leg bands\" describes what Nice did as she followed the birds, so it correctly modifies her.\n- An introductory modifier is set off from its clause with a comma.\n\n**Why the other choices are wrong:**\n- A: \"While fitting ...\" needs a comma before the main clause.\n- B: \"Having been fitted ...\" describes something that was fitted with bands, yet it sits next to Nice, so the sentence says she wore the bands.\n- D: The phrase is right, but without a comma it runs into the main clause.",
          "_meta": {
            "anchor": "Margaret Morse Nice, song sparrows, Columbus Ohio; introductory participial phrase"
          }
        },
        {
          "id": 444,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Glassblowing was developed along the eastern Mediterranean coast in the first century BCE. Its basic steps still follow a fixed ______ gathering molten glass on the end of a hollow pipe, blowing through the pipe to form a bubble, and shaping the bubble with tools while it is still hot.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "order, gathering"
            },
            {
              "id": "B",
              "text": "order gathering"
            },
            {
              "id": "C",
              "text": "order; gathering"
            },
            {
              "id": "D",
              "text": "order: gathering"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The clause \"Its basic steps still follow a fixed order\" is complete, and what follows lists the steps of that order. A colon after a complete clause introduces such a list.\n\n**The Full Solution:**\n- The words before the blank form an independent clause.\n- The words after it list the three steps: gathering, blowing, shaping.\n- A colon is the conventional mark between a complete clause and the list it introduces.\n\n**Why the other choices are wrong:**\n- A: A comma does not make clear that what follows explains \"a fixed order\"; the list reads as loosely tacked on.\n- B: With no punctuation, the list runs into the clause.\n- C: A semicolon must be followed by an independent clause, but the list is not one.",
          "_meta": {
            "anchor": "glassblowing (1st c. BCE, eastern Mediterranean): colon before a list"
          }
        },
        {
          "id": 448,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Young sunflowers turn to follow the sun across the sky each day. Mature sunflower heads, however, stop ______ they stay facing east, which warms them quickly in the morning and draws more visits from pollinating insects.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "moving, instead"
            },
            {
              "id": "B",
              "text": "moving; instead,"
            },
            {
              "id": "C",
              "text": "moving, instead,"
            },
            {
              "id": "D",
              "text": "moving instead"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** \"Mature sunflower heads, however, stop moving\" and \"instead, they stay facing east ...\" are independent clauses. A semicolon joins them, and the comma after \"instead\" sets off the transition at the start of the second clause.\n\n**The Full Solution:**\n- Clause 1 ends at \"stop moving.\"\n- Clause 2 begins with the transition \"instead\" and has its own subject and verb (\"they stay\").\n- A transition word such as \"instead\" cannot join two clauses by itself; a semicolon must come before it.\n\n**Why the other choices are wrong:**\n- A: A comma before \"instead\" creates a comma splice.\n- C: Two commas still leave the clauses spliced together.\n- D: With no punctuation, the clauses run together.",
          "_meta": {
            "anchor": "sunflower heliotropism: mature heads face east (Atamian et al. 2016, Science); semicolon + instead"
          }
        },
        {
          "id": 445,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The mixture of winter rye, crimson clover, and hairy vetch that many growers sow after the autumn harvest ______ several jobs at once. The rye's dense roots hold the soil against winter rains, the clover and vetch draw nitrogen from the air, and the whole stand smothers early weeds.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "perform"
            },
            {
              "id": "B",
              "text": "are performing"
            },
            {
              "id": "C",
              "text": "performs"
            },
            {
              "id": "D",
              "text": "have performed"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject is the singular noun \"mixture,\" so the verb must be the singular \"performs.\"\n\n**The Full Solution:**\n- Strip the modifiers: \"The mixture ... performs several jobs at once.\"\n- \"Of winter rye, crimson clover, and hairy vetch\" and the that-clause modify \"mixture\" without changing its number.\n- The plural nouns inside those modifiers (rye, clover, vetch, growers) are bait; the head noun is \"mixture,\" and it is singular.\n\n**Why the other choices are wrong:**\n- A: \"Perform\" is plural, agreeing with the nearby crop names instead of the subject.\n- B: \"Are performing\" is likewise plural and mismatches the singular head noun.\n- D: \"Have performed\" is plural, and its completed aspect also clashes with the ongoing jobs the next sentence lists.",
          "_meta": {
            "anchor": "cover-crop mixture; subject-verb agreement (singular collective subject)"
          }
        },
        {
          "id": 452,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Before 1883, most American towns set their clocks by the sun's position overhead, so a railroad might have to deal with dozens of different local times. On November 18 of that year, the railroads switched to four standard time zones. ______ a passenger changing trains no longer had to convert from one town's time to the next.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Meanwhile,"
            },
            {
              "id": "B",
              "text": "As a result,"
            },
            {
              "id": "C",
              "text": "In other words,"
            },
            {
              "id": "D",
              "text": "Likewise,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The switch to four time zones caused the change described in the last sentence: passengers no longer had to convert between local times. \"As a result\" marks this cause and effect.\n\n**The Full Solution:**\n- Problem: dozens of local times.\n- Change: four standard time zones adopted in 1883.\n- Effect: no more converting from one town's time to the next.\n\n**Why the other choices are wrong:**\n- A: \"Meanwhile\" signals a separate event at the same time, but the last sentence is a consequence of the switch.\n- C: The last sentence does not restate the switch; it describes what the switch made possible.\n- D: \"Likewise\" signals a similar point, not an effect.",
          "_meta": {
            "anchor": "1883 railroad standard time zones"
          }
        },
        {
          "id": 451,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Rows of trees planted along the edges of fields blunt the wind almost as soon as they are in the ground, and fields in their shelter hold measurably more moisture through a rainless spell. ______ the maturing rows thicken into corridors dense enough to harbor the birds and predatory insects that keep crop pests in check, so a shelterbelt's protection widens as it ages.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "By contrast,"
            },
            {
              "id": "C",
              "text": "Eventually,"
            },
            {
              "id": "D",
              "text": "For instance,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The first sentence describes benefits a shelterbelt delivers from the start (blunted wind \"almost as soon as they are in the ground,\" retained moisture); the second describes a benefit that emerges only later, as the rows mature. A development that arrives after time has passed calls for a sequence transition.\n\n**The Full Solution:**\n- At planting, the tree rows already blunt wind and conserve soil moisture.\n- Only as they mature do the rows thicken into corridors that harbor birds and predatory insects.\n- The closing clause — \"protection widens as it ages\" — confirms that the relationship is temporal: the habitat benefit follows the wind benefit over time. \"Eventually\" marks that later development.\n\n**Why the other choices are wrong:**\n- A: \"Nevertheless\" would set the habitat benefit against the wind benefit, but the sentences agree.\n- B: \"By contrast\" likewise demands an opposition that is not there.\n- D: \"For instance\" would make pest control an example of the wind protection, yet it is a distinct benefit that arrives later.",
          "_meta": {
            "anchor": "shelterbelts — immediate wind protection, then maturing rows harbor pest predators; sequence transition"
          }
        },
        {
          "id": 450,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Napoleon Bonaparte is often remembered as an unusually short man. Historians who have checked the records tell a different story. ______ he stood about 1.7 meters (roughly 5 feet 6 inches), close to the average height for men of his time; the image of a tiny Napoleon owes much to British cartoonists who mocked him.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Similarly,"
            },
            {
              "id": "B",
              "text": "Meanwhile,"
            },
            {
              "id": "C",
              "text": "Consequently,"
            },
            {
              "id": "D",
              "text": "In fact,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The second sentence says historians \"tell a different story\"; the third gives the evidence for it: Napoleon was about average height. \"In fact\" introduces information that backs up and sharpens the claim just made.\n\n**The Full Solution:**\n- Sentence 1: the popular view (Napoleon was unusually short).\n- Sentence 2: historians disagree, in general terms.\n- Sentence 3: the specific detail that shows what the historians mean, his measured height and where the myth came from.\n- \"In fact\" signals this move from a general statement to stronger, specific support.\n\n**Why the other choices are wrong:**\n- A: The third sentence does not describe something similar to the second; it explains it.\n- B: \"Meanwhile\" signals something happening at the same time, but the sentence supports the point just made.\n- C: Napoleon's height is not a result of historians telling a different story; it is the evidence for that story.",
          "_meta": {
            "anchor": "Napoleon height myth: ~1.7 m, average for era; British cartoonists (Wikipedia: Napoleon complex)"
          }
        },
        {
          "id": 454,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "The first transatlantic telegraph cable, laid between Ireland and Newfoundland, began carrying signals in August 1858.",
              "It failed within weeks after operators applied high voltages that damaged its insulation.",
              "A second cable, laid in 1866, had a much heavier copper core and thicker insulation.",
              "The 1866 cable could transmit about 8 words per minute, 80 times faster than the 1858 cable.",
              "The 1866 cable proved durable, and the two continents have been linked by cable ever since."
            ],
            "goal": "The student wants to emphasize a difference between the 1858 cable and the 1866 cable."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "The first transatlantic telegraph cable was laid between Ireland and Newfoundland and began carrying signals in August 1858."
            },
            {
              "id": "B",
              "text": "Whereas the 1858 cable failed within weeks, the 1866 cable, more heavily built, proved durable and sent messages 80 times faster."
            },
            {
              "id": "C",
              "text": "The 1866 cable had a much heavier copper core and thicker insulation, and it could transmit about 8 words per minute."
            },
            {
              "id": "D",
              "text": "The 1858 and 1866 cables together showed that messages could cross the Atlantic in minutes rather than in the weeks a ship required."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** An emphasize-a-difference goal wants the two cables set against each other, and B does it in one contrastive frame: quick failure for the 1858 cable versus durability and far greater speed for the more heavily built 1866 cable.\n\n**The Full Solution:**\n- The notes supply both sides of the contrast: the 1858 cable failed within weeks (bullet 2); the 1866 cable was more heavily built, faster, and durable (bullets 3-5).\n- B binds them with \"Whereas,\" naming both cables and the fate of each.\n- Setting both cables side by side is what the goal requires.\n\n**Why the other choices are wrong:**\n- A: It describes the 1858 cable alone; one cable cannot show a difference.\n- C: It describes the 1866 cable alone, leaving the 1858 side of the contrast unstated.\n- D: It emphasizes what the cables jointly showed, a similarity, the opposite of the goal.",
          "_meta": {
            "anchor": "1858 vs 1866 transatlantic cables (1858 failed within weeks after high voltages; 1866 heavier core and insulation, 8 wpm = 80x faster)"
          }
        },
        {
          "id": 453,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Claudio Monteverdi (1567-1643) was an Italian composer employed at the court of Mantua.",
              "His opera L'Orfeo, first performed in 1607, retold the Greek myth of Orpheus in music and staged drama.",
              "L'Orfeo combined sung recitation, arias, choruses, and a large, varied instrumental ensemble.",
              "A handful of earlier sung dramas existed, but none holds a place in today's repertoire.",
              "Many historians consider L'Orfeo the earliest opera still regularly staged."
            ],
            "goal": "The student wants to emphasize the historical significance of L'Orfeo."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Monteverdi's L'Orfeo, first performed before the court of Mantua in 1607, retold the ancient Greek myth of Orpheus through music and staged drama."
            },
            {
              "id": "B",
              "text": "L'Orfeo combined sung recitation, arias, choruses, and a large and notably varied ensemble of instruments."
            },
            {
              "id": "C",
              "text": "First performed in 1607, Monteverdi's L'Orfeo is considered the earliest opera still regularly staged, outlasting all its predecessors."
            },
            {
              "id": "D",
              "text": "Claudio Monteverdi, an Italian composer who lived from 1567 to 1643, spent much of his career employed at the court of Mantua."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Historical significance is a claim about a work's place in history, and C makes it: the earliest opera still regularly staged, surviving where its predecessors vanished.\n\n**The Full Solution:**\n- The notes locate the significance in two facts: earlier sung dramas left the repertoire (bullet 4), and L'Orfeo is the earliest opera still staged (bullet 5).\n- C joins them into a single claim of priority and endurance (\"outlasting all its predecessors\"), anchored by the 1607 date.\n- That is emphasis on significance, not mere description.\n\n**Why the other choices are wrong:**\n- A: Date, place, and plot describe the premiere without asserting the work's importance to history.\n- B: A list of musical ingredients carries no claim of significance at all.\n- D: A biography of Monteverdi never mentions L'Orfeo, the subject the goal names.",
          "_meta": {
            "anchor": "Claudio Monteverdi — L'Orfeo; historical-significance goal"
          }
        }
      ]
    }
  ]
};

export default practiceTest4RW;
