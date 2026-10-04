// Practice Test 1 — SAT Reading & Writing (R&W)
// R&W seating varied 2026-09-07 (scripts/varyRWSeating.mjs): items re-dealt inside their official skill blocks with a per-test seed — block flow and per-skill counts unchanged.
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test1/. Do not hand-edit this file —
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
          "id": 103,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The Icelandic sagas that describe Norse voyages west of Greenland were written down some two centuries after the events, so historians have treated their details with caution. In 2021, however, researchers used tree rings to show that wood at the Norse site of L'Anse aux Meadows in Newfoundland was cut in the year 1021, a finding that helps ______ the sagas' account of Norse travel to North America.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "corroborate"
            },
            {
              "id": "B",
              "text": "embellish"
            },
            {
              "id": "C",
              "text": "anticipate"
            },
            {
              "id": "D",
              "text": "supersede"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Independent physical evidence that agrees with a doubted written account confirms it, and \"corroborate\" means to confirm or support with evidence.\n\n**The Full Solution:**\n- The first sentence explains why the sagas need support: they were written down long after the voyages, so historians treat them with caution.\n- The word \"however\" introduces evidence that answers that doubt: tree rings show that Norse people were cutting wood in Newfoundland in 1021.\n- A date from the wood itself that matches the sagas' story of voyages to North America confirms that story, which is what \"corroborate\" means.\n\n**Why the other choices are wrong:**\n- B: \"Embellish\" means to add decorative or invented detail, but a tree-ring date confirms the account rather than decorating it.\n- C: \"Anticipate\" means to foresee, but the 2021 finding came centuries after the sagas, so it cannot foresee them.\n- D: \"Supersede\" means to replace, but evidence that agrees with the sagas supports their account instead of replacing it.",
          "_meta": {
            "source": "Kuitems et al., Nature 600 (2021): wood from L'Anse aux Meadows cut in 1021 CE, dated with the 993 CE cosmic-ray tree-ring signal; Vinland sagas written down in the 13th century"
          }
        },
        {
          "id": 104,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In the online puzzle game Foldit, players manipulate three-dimensional models of proteins, competing to find the most stable folded shapes. In 2011, players deciphered the structure of a virus enzyme that had resisted automated analysis for more than a decade. Researchers who studied the players' solutions credited their spatial ______: the best competitors invented folding strategies that the software's designers had never programmed into it.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "speed"
            },
            {
              "id": "B",
              "text": "caution"
            },
            {
              "id": "C",
              "text": "ingenuity"
            },
            {
              "id": "D",
              "text": "obedience"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Inventing folding approaches no one supplied is a matter of creative skill, and \"ingenuity\" names exactly that quality.\n\n**The Full Solution:**\n- The colon introduces the evidence for the blank: players \"invented folding strategies that the software's designers had never programmed.\"\n- A word that credits the players must name the quality shown by inventing unprogrammed strategies — creative resourcefulness, i.e., \"ingenuity.\"\n\n**Why the other choices are wrong:**\n- A: \"Speed\" is never discussed — the enzyme resisted analysis for a decade, and the passage praises what players found, not how fast.\n- B: \"Caution\" has no support in the text.\n- D: \"Obedience\" is contradicted directly: the players succeeded by going beyond what the program prescribed."
        },
        {
          "id": 101,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Archaeologist Sarah Parcak studies satellite images of Egypt, looking for the faint discolorations that buried mudbrick walls leave in the soil above them. Because the pits that looters dig show up in the same images, her surveys have a second use: they allow officials to ______ damage at sites that no inspector has visited.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "repair"
            },
            {
              "id": "B",
              "text": "detect"
            },
            {
              "id": "C",
              "text": "reverse"
            },
            {
              "id": "D",
              "text": "predict"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The blank names what the satellite images let officials do about damage at sites no one has visited, and only \"detect\" describes something an image alone can accomplish.\n\n**The Full Solution:**\n- The passage establishes that looters' pits appear in the same images that reveal buried walls.\n- The final clause limits officials to what the images show, since no inspector has been to the sites.\n- Noticing that damage is there is the only action the images support, so \"detect\" is the precise word.\n\n**Why the other choices are wrong:**\n- A: An image cannot repair anything; repair would require work at the site itself.\n- C: Reversing the damage, like repairing it, cannot be done from a satellite image.\n- D: The pits have already been dug, so there is nothing left to predict.",
          "_meta": {
            "source": "Sarah Parcak (researchers.json res-018), satellite archaeology; documented use of satellite imagery to map looting pits at Egyptian sites"
          }
        },
        {
          "id": 102,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In northern Mozambique, honey-hunters work with a bird called the greater honeyguide. The bird leads a hunter to a bees' nest; the hunter opens the nest, takes the honey, and leaves the wax, which the bird eats. Biologist Claire Spottiswoode has shown that the birds respond to the hunters' distinctive calls, evidence that the two species genuinely ______ rather than merely tolerating each other.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "quarrel"
            },
            {
              "id": "B",
              "text": "retreat"
            },
            {
              "id": "C",
              "text": "interfere"
            },
            {
              "id": "D",
              "text": "collaborate"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The contrast with \"rather than merely tolerating each other\" demands active partnership, and \"collaborate\" names that relationship precisely.\n\n**The Full Solution:**\n- The passage describes a two-way exchange: the bird leads the hunter to the nest, the hunter opens it, and each partner takes a different reward.\n- The birds also respond to the hunters' calls, so each species acts on signals from the other.\n- The sentence's contrast frame (\"rather than merely tolerating\") requires a word stronger than passive coexistence — a word for working together, which is exactly \"collaborate.\"\n\n**Why the other choices are wrong:**\n- A: \"Quarrel\" describes conflict the passage never mentions.\n- B: \"Retreat\" contradicts the birds' behavior of leading hunters to nests and responding to their calls.\n- C: \"Interfere\" also imports conflict; the exchange described benefits both partners."
        },
        {
          "id": 106,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Why does the barreleye, a fish of the ocean's twilight zone, have a transparent, fluid-filled dome where most fish have an opaque skull? For decades the dome was a puzzle, in part because it collapsed when specimens were brought to the surface. Observations from remotely operated vehicles suggest an answer. The barreleye's tubular eyes, which sit inside the dome, can rotate from pointing upward — scanning for prey silhouetted against the faint light above — to pointing forward as the fish feeds. The transparent dome may shield the eyes while still allowing them to gather light from any direction.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It describes a behavior shared by several deep-sea species, then explains how one species' version of the behavior differs."
            },
            {
              "id": "B",
              "text": "It presents a scientific consensus about an unusual anatomical feature, then summarizes the evidence that overturned it."
            },
            {
              "id": "C",
              "text": "It explains how a research tool works, then lists several discoveries that the tool has made possible."
            },
            {
              "id": "D",
              "text": "It poses a question about an unusual anatomical feature, then presents a possible explanation for that feature."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text poses an explicit question about the barreleye's transparent dome and then uses new observations to offer a tentative answer — a question-then-possible-answer structure.\n\n**The Full Solution:**\n- The opening states the question directly: why does the barreleye have a transparent dome?\n- The middle explains why the question stayed open, and the ROV observations then support a tentative answer (\"may shield the eyes while still allowing them to gather light\").\n- Choice D describes exactly that structure.\n\n**Why the other choices are wrong:**\n- A: Only one species is discussed.\n- B: No prior consensus is described, let alone overturned — the dome was an unsolved puzzle.\n- C: The ROVs are mentioned only in passing as the source of the observations, not explained as a tool."
        },
        {
          "id": 108,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "A high-fiber diet can change which bacteria dominate the human gut. In a controlled trial, microbiologist Liping Zhao and colleagues gave patients with type 2 diabetes a diet rich in fermentable fiber and tracked the bacteria in their stool. A small group of fiber-fermenting species increased sharply, and the patients' blood sugar control improved more than that of patients on a standard diet. Zhao concludes that those bacteria produced the improvement."
            },
            {
              "label": "Text 2",
              "text": "Epidemiologist William Hanage has urged caution in interpreting studies that link gut bacteria to human disease. Correlation, he notes, does not reveal which way causation runs: an illness, or the treatment for it, can itself reshape the community of bacteria in the gut. A change in bacteria that accompanies a clinical improvement may therefore be a consequence of the intervention rather than its cause."
            }
          ],
          "question": "Based on the texts, how would Hanage (Text 2) most likely respond to the claim presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "He would maintain that dietary fiber has no measurable effect on the bacteria living in the human gut."
            },
            {
              "id": "B",
              "text": "He would agree that the trial settles the question of whether gut bacteria can improve blood sugar control."
            },
            {
              "id": "C",
              "text": "He would grant that the diet changed both the bacteria and the patients' blood sugar but question whether the trial shows that one caused the other."
            },
            {
              "id": "D",
              "text": "He would object that the patients in the trial were too few and too much alike for its results to apply to people with other forms of the disease."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Hanage's objection is about causal inference, not about the observations themselves: a bacterial change that accompanies a clinical improvement may be a consequence of the intervention rather than its cause.\n\n**The Full Solution:**\n- Text 1 reports two changes in the same patients — a rise in fiber-fermenting bacteria and better blood sugar control — and treats the first as the cause of the second.\n- Text 2 says that an illness or its treatment can itself reshape the gut's bacteria, so a bacterial change that accompanies an improvement need not have produced it.\n- Hanage would therefore accept the measurements and challenge the causal step, which is what C describes.\n\n**Why the other choices are wrong:**\n- A: Text 2 never disputes that diet changes gut bacteria; it disputes what such changes prove.\n- B: It reverses his position — he holds that a correlation of this kind does not settle causation.\n- D: Sample size and patient similarity are objections Text 2 never raises.",
          "_meta": {
            "source": "Text 1: Zhao et al., Science 359 (2018), 'Gut bacteria selectively promoted by dietary fibers alleviate type 2 diabetes' (randomized high-fiber vs. control diet). Text 2: W. P. Hanage, Nature 512 (2014), 'Microbiome science needs a healthy dose of scepticism' (correlation vs. causation; reverse causality)"
          }
        },
        {
          "id": 107,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Does raising the minimum wage reduce employment at the businesses that must pay it? The question is hard to answer with national statistics, because wages, prices, and hiring all move together for many reasons. In 1992, economists David Card and Alan Krueger saw an opportunity in geography. New Jersey was raising its minimum wage while neighboring Pennsylvania was not, so fast-food restaurants on either side of the state line — operating in essentially the same labor market — could be compared directly. Surveying hundreds of restaurants before and after the increase, the economists found no evidence that employment fell in New Jersey relative to Pennsylvania.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It poses an economic question, explains why it is hard to answer, and describes how researchers designed a comparison to address that difficulty."
            },
            {
              "id": "B",
              "text": "It states a widely accepted economic principle, then presents survey data that confirm the principle's predictions."
            },
            {
              "id": "C",
              "text": "It summarizes a disagreement between two economists, then describes the study they conducted together to resolve it."
            },
            {
              "id": "D",
              "text": "It describes a change in one state's employment laws, then weighs the strongest arguments for and against adopting the same change in every other state."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text presents a question, an obstacle to answering it, and a research design that gets around the obstacle — exactly the sequence choice A describes.\n\n**The Full Solution:**\n- The three moves come in order: an opening question (does a minimum-wage increase reduce employment?), an obstacle (national statistics tangle too many factors together), and a design that isolates the policy (comparing restaurants across a state line where only one state raised its wage), ending with the result.\n\n**Why the other choices are wrong:**\n- B: It fails twice — no principle is stated as accepted, and the finding runs against the expectation the question implies rather than confirming one.\n- C: It invents a disagreement: Card and Krueger worked as a team throughout.\n- D: The text never weighs arguments about extending the policy."
        },
        {
          "id": 105,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Johannes Vermeer's Girl with a Pearl Earring (c. 1665) has been studied by generations of art historians, but in 2018 a research team at the Mauritshuis museum examined the painting with instruments rather than eyes alone. Using macro X-ray fluorescence scanning and other noninvasive imaging techniques, the team mapped the painting layer by layer without touching its surface. The scans revealed details invisible in the finished work: tiny eyelashes around the girl's eyes and a folded green curtain in what now appears to be an empty dark background.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To argue that Girl with a Pearl Earring has been misinterpreted by generations of art historians"
            },
            {
              "id": "B",
              "text": "To describe how noninvasive imaging revealed previously unseen features of a well-known painting"
            },
            {
              "id": "C",
              "text": "To compare the reliability of X-ray fluorescence scanning with that of traditional visual analysis"
            },
            {
              "id": "D",
              "text": "To explain why museums have become reluctant to allow direct physical examination of fragile artworks"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text's purpose is to report what the new imaging made visible in a much-studied painting.\n\n**The Full Solution:**\n- The text moves through three stages: a setup (a much-studied painting examined in a new way), a method (noninvasive, layer-by-layer scanning), and a payoff (eyelashes and a hidden curtain that the finished surface conceals).\n- Every stage serves the same job — reporting what the scanning revealed — which is the purpose choice B states.\n\n**Why the other choices are wrong:**\n- A: It overreaches — the text adds details but never claims prior interpretations were wrong.\n- C: Visual analysis is background, not one side of a sustained comparison.\n- D: It invents a concern — fragility and museum policy are never discussed; \"noninvasive\" describes the method, not an institutional debate."
        },
        {
          "id": 111,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "On La Gomera in the Canary Islands, shepherds have long communicated across deep ravines using Silbo Gomero, a whistled form of Spanish in which changes in pitch and melody stand in for the vowels and consonants of spoken words. Cognitive scientists wondered whether the brain treats such whistling as language or merely as sound. Brain-imaging studies offered an answer: when experienced whistlers listened to Silbo Gomero, regions of the brain associated with processing spoken language became active, but when Spanish speakers unfamiliar with the whistled form heard the same recordings, those language regions stayed comparatively quiet.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Brain-imaging research indicates that experienced users of a whistled language process it with the same brain regions used for spoken language."
            },
            {
              "id": "B",
              "text": "Silbo Gomero is the only whistled language whose structure is based on an existing spoken language."
            },
            {
              "id": "C",
              "text": "Shepherds on La Gomera developed Silbo Gomero because ordinary spoken Spanish cannot be heard clearly across the island's deep ravines and steep volcanic valleys."
            },
            {
              "id": "D",
              "text": "People who do not know Silbo Gomero are unable to distinguish its whistles from ordinary environmental sounds."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The imaging contrast answers the text's central question: experienced whistlers' brains treat Silbo Gomero as language.\n\n**The Full Solution:**\n- The text sets up a question — does the brain treat whistling as language or as mere sound?\n- The imaging contrast answers it: language-processing regions activate in experienced whistlers but stay comparatively quiet in unfamiliar listeners. Choice A states that finding.\n\n**Why the other choices are wrong:**\n- B: It makes a uniqueness claim the text never offers.\n- C: It turns background about ravines into a causal origin story the text does not tell; the ravines explain the whistling's usefulness, not the study's conclusion.\n- D: It exaggerates the comparison — reduced activation in language regions is not an inability to distinguish whistles from other sounds."
        },
        {
          "id": 116,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "The Antikythera mechanism, a geared astronomical device recovered from a Roman-era shipwreck, is often described as an isolated wonder — a machine so far ahead of its time that it stands alone in the ancient world. Several lines of evidence complicate that picture. Cicero, writing in the first century BCE, describes geared spheres that modeled the motions of the sun, moon, and planets, attributing such devices to more than one maker. The mechanism's own plates carry engraved instructions, as though intended for an owner who was educated but not the machine's builder. And the confidence of its miniaturized gearwork implies design refined through earlier attempts. Taken together, the evidence suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "the Antikythera mechanism was built by the same craftsman whose devices Cicero describes in his writings."
            },
            {
              "id": "B",
              "text": "geared astronomical devices were common enough in the ancient Mediterranean that most educated households would have owned one."
            },
            {
              "id": "C",
              "text": "the mechanism is better understood as a product of an established tradition of astronomical machine-making than as a solitary anomaly."
            },
            {
              "id": "D",
              "text": "ancient writers exaggerated the sophistication of the geared devices they described, since no other comparable mechanism has been recovered from any ancient Mediterranean site."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The premises jointly force only the modest conclusion C draws: the mechanism came out of a craft tradition, not a solitary anomaly.\n\n**The Full Solution:**\n- Each premise chips at the \"isolated wonder\" framing from a different side: Cicero's testimony points to multiple makers of comparable devices; the engraved instructions imply a user distinct from the builder, which presumes devices circulated; and gearwork refined through earlier attempts presumes predecessors.\n- Together they support a tradition of practice — exactly what choice C concludes, and no more.\n\n**Why the other choices are wrong:**\n- A: It leaps to an identification no premise supports.\n- B: It inflates \"more than one maker\" into widespread ownership, far beyond the evidence.\n- D: It reverses the passage's direction, using the mechanism's uniqueness as recovered evidence to discount the very testimony the passage treats as credible."
        },
        {
          "id": 114,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Jupiter and Saturn are made mostly of hydrogen and helium, the lightest elements, while Uranus and Neptune contain larger proportions of heavier substances such as water, ammonia, and methane. A student claims that this difference in composition, not size alone, shapes the planets' densities: the two ice giants are far less massive than the gas giants but are not correspondingly less dense. In support of this claim, the student notes that ______",
          "questionTable": {
            "type": "table",
            "caption": "Mass and mean density of the four giant planets",
            "headers": [
              "Planet",
              "Mass (Earth = 1)",
              "Mean density (g/cm³)"
            ],
            "rows": [
              [
                "Jupiter",
                "318",
                "1.33"
              ],
              [
                "Saturn",
                "95.1",
                "0.69"
              ],
              [
                "Uranus",
                "14.5",
                "1.27"
              ],
              [
                "Neptune",
                "17.1",
                "1.64"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "Neptune has less than one-fifth the mass of Saturn, yet its density of 1.64 g/cm³ is more than twice Saturn's density of 0.69 g/cm³."
            },
            {
              "id": "B",
              "text": "Jupiter has the greatest mass of the four planets, about 318 times the mass of Earth, and a mean density of 1.33 grams per cubic centimeter."
            },
            {
              "id": "C",
              "text": "Uranus and Neptune differ in mass by less than 3 Earth masses, the smallest difference between any two of the four planets."
            },
            {
              "id": "D",
              "text": "Uranus, the least massive of the four planets, is also the least dense, with a density of 1.27 g/cm³."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim has two parts — the ice giants are far less massive than the gas giants, and they are not correspondingly less dense — and A is the only choice that uses the table to show both.\n\n**The Full Solution:**\n- Neptune's mass is 17.1 Earth masses, compared with Saturn's 95.1, so Neptune has less than one-fifth of Saturn's mass.\n- Neptune's density, 1.64 g/cm³, is more than twice Saturn's 0.69 g/cm³.\n- A planet with far less mass but much greater density shows that size alone does not set density, which is exactly what the student claims.\n\n**Why the other choices are wrong:**\n- B: It describes Jupiter alone, so it makes no comparison between the gas giants and the ice giants.\n- C: It compares the masses of the two ice giants with each other and says nothing about density.\n- D: The table contradicts it. Saturn, not Uranus, is the least dense planet, at 0.69 g/cm³.",
          "_meta": {
            "source": "NASA NSSDC Planetary Fact Sheet (mass 10^24 kg: Earth 5.97, Jupiter 1898, Saturn 568, Uranus 86.8, Neptune 102; density kg/m3: 1326, 687, 1270, 1638); ice-giant composition per NASA. Replaces a table wrongly attributed to IPCC AR6."
          }
        },
        {
          "id": 112,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Many songbirds establish territory and attract mates with songs that carry low-frequency notes. City environments, however, are saturated with low-frequency noise from traffic and machinery. A research team studying great tits in the Dutch city of Leiden hypothesized that the birds adjust their songs to avoid this acoustic interference, singing at higher minimum frequencies in noisier locations so that their songs remain audible to other great tits.",
          "question": "Which finding, if true, would most directly support the team's hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Great tits living in the city begin singing earlier in the morning and sing more often than great tits in nearby forests do."
            },
            {
              "id": "B",
              "text": "The city's great tits build nests at approximately the same heights as great tits in quieter rural areas."
            },
            {
              "id": "C",
              "text": "Within the same city, great tits holding territories along busy roads sing with higher minimum frequencies than great tits in quiet parks a short distance away."
            },
            {
              "id": "D",
              "text": "Several other city-dwelling bird species produce calls that are louder than the calls of their rural counterparts."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** It is the direct test of the hypothesis: same species, same city, differing mainly in noise exposure — and the predicted frequency difference appears.\n\n**The Full Solution:**\n- The hypothesis ties one variable to another: more low-frequency noise should mean higher minimum song frequency.\n- Choice C isolates exactly that relationship — birds of the same species in the same city, differing mainly in local noise exposure, show the predicted pitch difference.\n\n**Why the other choices are wrong:**\n- A: It concerns how often birds sing, not the pitch adjustment the hypothesis predicts.\n- B: It is irrelevant to song frequency altogether.\n- D: It involves different species and loudness rather than frequency; louder calls are a different strategy from the pitch shift the team proposes, so it cannot directly support this hypothesis."
        },
        {
          "id": 110,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The stone city of Great Zimbabwe, built between the eleventh and fifteenth centuries in southern Africa, was once portrayed by outsiders as an isolated curiosity. Archaeological work tells a different story. Excavations at the site have recovered Chinese celadon dishes, imported glass beads, and a coin minted at Kilwa, a port on the East African coast, while gold and ivory from the Zimbabwe plateau moved outward through such Indian Ocean ports. Far from standing apart, Great Zimbabwe operated as an inland hub in a trading web that stretched across the Indian Ocean world.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Archaeologists disagree about whether the artifacts excavated at Great Zimbabwe were acquired through trade or through conquest."
            },
            {
              "id": "B",
              "text": "Great Zimbabwe's builders imported most of the materials used to construct the city's stone enclosures."
            },
            {
              "id": "C",
              "text": "The gold and ivory trade was more important to Great Zimbabwe's economy than the import of foreign goods."
            },
            {
              "id": "D",
              "text": "Archaeological evidence shows that Great Zimbabwe, once seen as isolated, was an active participant in long-distance trade networks."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text corrects an old portrayal: far from an \"isolated curiosity,\" Great Zimbabwe was \"an inland hub in a trading web.\"\n\n**The Full Solution:**\n- The text is organized as a correction: the old view is stated, then set against archaeological evidence — Chinese celadon, imported glass beads, and a coin from the coastal port of Kilwa flowing in; gold and ivory flowing out through Indian Ocean ports.\n- The closing sentence states the corrected view, and choice D matches that arc.\n\n**Why the other choices are wrong:**\n- A: It invents a scholarly dispute the text never mentions.\n- B: It confuses trade goods with building materials; the text lists objects found at the site, not imported stone.\n- C: It imposes a ranking of exports over imports that the text never draws."
        },
        {
          "id": 113,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Beavers engineer their surroundings, building dams that pond water and create wetlands. Between 2015 and 2023, ecologists tracked five headwater stream sites in the western United States where beavers had recently established colonies, counting the ponds at each site and measuring the area of adjacent wetland habitat. The ecologists conclude that the beavers' activity expanded wetland habitat across all of the monitored sites because ______",
          "questionTable": {
            "type": "table",
            "caption": "Beaver ponds and change in adjacent wetland area at five monitored stream sites, 2015-2023",
            "headers": [
              "Site",
              "Ponds, 2015",
              "Ponds, 2023",
              "Change in wetland area (%)"
            ],
            "rows": [
              [
                "Willow Creek",
                "2",
                "9",
                "+61"
              ],
              [
                "Alder Fork",
                "1",
                "5",
                "+34"
              ],
              [
                "Granite Run",
                "3",
                "8",
                "+47"
              ],
              [
                "Fox Hollow",
                "0",
                "4",
                "+28"
              ],
              [
                "Marsh Branch",
                "2",
                "6",
                "+39"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "Willow Creek, which gained seven ponds between 2015 and 2023, showed a 61% increase in adjacent wetland area over the same period, the largest increase of any monitored site."
            },
            {
              "id": "B",
              "text": "every site gained ponds over the monitoring period, and wetland area increased at all five sites, by amounts ranging from 28% to 61%."
            },
            {
              "id": "C",
              "text": "Fox Hollow, which had no ponds in 2015, supported four ponds by 2023."
            },
            {
              "id": "D",
              "text": "the total number of ponds across the five sites more than doubled between 2015 and 2023."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** A claim about all monitored sites needs evidence covering every row of the table, and B alone provides it: every site gained ponds, and wetland area rose at all five.\n\n**The Full Solution:**\n- The claim's scope is total: beaver activity \"expanded wetland habitat across all\" of the monitored sites.\n- Choice B covers every site, and its 28% to 61% range shows the pattern's uniform direction with varying size — exactly what supports an all-sites claim.\n\n**Why the other choices are wrong:**\n- A: It cites only the single strongest site, which cannot establish a claim about all five.\n- C: It likewise isolates one site and never mentions wetland area.\n- D: It aggregates the pond counts but says nothing about wetland area, the quantity the conclusion is actually about."
        },
        {
          "id": 109,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Coyotes were once animals of open prairie, active mostly at dawn and dusk. Today, however, coyotes live in cities across the United States, and researchers who have fitted coyotes in the Chicago area with tracking collars have documented a striking shift: city coyotes do most of their moving and hunting late at night, when streets are quiet, and spend the busy daylight hours resting in patches of cover such as cemeteries and golf courses. The animals have not simply moved into cities; they have reorganized their daily routines around human activity.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Coyotes are found in more United States cities today than at any point in the past."
            },
            {
              "id": "B",
              "text": "Urban coyotes have adapted to city life by shifting their activity to times and places where they are least likely to encounter people."
            },
            {
              "id": "C",
              "text": "Researchers use tracking collars to study how far urban coyotes travel each night."
            },
            {
              "id": "D",
              "text": "Coyotes strongly prefer sheltered urban habitats such as cemeteries and golf courses to the open prairie landscapes where the species formerly lived."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text's point is that urban coyotes have reorganized their daily routines around human activity, and every detail illustrates that adaptation.\n\n**The Full Solution:**\n- The final sentence states the idea outright: coyotes \"have reorganized their daily routines around human activity.\"\n- The earlier details — nighttime movement when streets are quiet, daytime rest in out-of-the-way cover — all serve that claim, so choice B captures the whole rather than a part.\n\n**Why the other choices are wrong:**\n- A: A background fact from one sentence, not the idea the details serve.\n- C: It mistakes the research method for the finding.\n- D: It misreads the resting-site examples as a preference claim; the text presents those places as refuges within cities, not habitats coyotes favor over prairie."
        },
        {
          "id": 115,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Seagrass meadows store large amounts of carbon in their leaves, roots, and the sediments beneath them. In a 2015 review, ecologist Trisha Atwood and colleagues noted that where sharks and other large predators have declined, sea turtles and other grazers can strip meadows bare; in parts of Bermuda and Indonesia, grazing has removed nearly all of the seagrass growing above the seafloor. The researchers therefore reasoned that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "sea turtles and other grazers contribute more to carbon storage in seagrass meadows than the seagrasses themselves do."
            },
            {
              "id": "B",
              "text": "seagrass meadows in tropical waters store carbon more quickly than seagrass meadows in temperate waters."
            },
            {
              "id": "C",
              "text": "removing grazers from seagrass meadows would have little effect on how much carbon the meadows store."
            },
            {
              "id": "D",
              "text": "protecting sharks and other large predators may indirectly help maintain the carbon stored in seagrass meadows."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The premises license one inference: sustaining predators should, indirectly, sustain carbon storage — and D states it with appropriately hedged force (\"may indirectly help\").\n\n**The Full Solution:**\n- The passage first establishes that seagrass meadows store carbon in their plants and sediments.\n- It then reports that where large predators have declined, grazers can strip meadows bare, removing nearly all of the seagrass above the seafloor.\n- The chain runs from predators, through grazing pressure, to the seagrass that holds the carbon, so keeping predators in place should help keep that carbon stored, which is what choice D says.\n\n**Why the other choices are wrong:**\n- A: It inverts the ecology — heavy grazing destroys the seagrass that stores carbon; it does not add to storage.\n- B: It introduces a tropical-temperate comparison no premise touches.\n- C: It contradicts the passage, which shows grazers removing the very plants that store carbon.",
          "_meta": {
            "source": "Atwood et al., Nature Climate Change 5 (2015), 'Predators help protect carbon stocks in blue carbon ecosystems' — reduced predation on herbivores in seagrass meadows of Bermuda and Indonesia led to removal of 90-100% of above-ground vegetation"
          }
        },
        {
          "id": 118,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Between 1935 and 1942, artists employed by the Index of American Design made about eighteen thousand watercolor renderings of quilts, weather vanes, carousel horses, and other handmade objects. When the project ended, the renderings passed to the National Gallery of Art, which has since digitized ______ and published the images online.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "it"
            },
            {
              "id": "B",
              "text": "this"
            },
            {
              "id": "C",
              "text": "them"
            },
            {
              "id": "D",
              "text": "that"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The convention being tested is pronoun-antecedent agreement. The plural pronoun \"them\" agrees in number with the plural antecedent \"renderings.\"\n\n**The Full Solution:**\n- The first sentence names the antecedent: about eighteen thousand watercolor renderings.\n- The second sentence says the renderings passed to the National Gallery of Art, and the pronoun stands for those same renderings.\n- A plural antecedent requires a plural pronoun.\n\n**Why the other choices are wrong:**\n- A: The singular \"it\" doesn't agree in number with the plural \"renderings.\"\n- B: The singular \"this\" doesn't agree in number with the plural \"renderings.\"\n- D: The singular \"that\" doesn't agree in number with the plural \"renderings.\"",
          "_meta": {
            "rule": "pronoun-antecedent agreement (plural antecedent)",
            "anchor": "Index of American Design (1935-1942); renderings held by the National Gallery of Art"
          }
        },
        {
          "id": 121,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Biologists seeking clues to limb regeneration keep returning to one animal. The ______ a salamander native to the lake system of Xochimilco in central Mexico, can regrow a severed limb complete with bone, muscle, and nerve, and it retains this ability throughout its life.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "axolotl"
            },
            {
              "id": "B",
              "text": "axolotl,"
            },
            {
              "id": "C",
              "text": "axolotl;"
            },
            {
              "id": "D",
              "text": "axolotl —"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** A nonrestrictive appositive must be set off by paired punctuation of the same kind — and this one already closes with a comma, so it must open with one.\n\n**The Full Solution:**\n- \"A salamander native to the lake system of Xochimilco in central Mexico\" is a nonrestrictive appositive renaming \"the axolotl.\"\n- The sentence closes the appositive with a comma before \"can regrow\"; the opening mark must match it.\n\n**Why the other choices are wrong:**\n- A: It leaves the appositive unopened, breaking the pair.\n- C: A semicolon would need an independent clause on each side, and what follows is not one.\n- D: It opens with a dash that is never matched — the appositive closes with a comma, and mixed pairs are not conventional."
        },
        {
          "id": 122,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "At the sound archive, preservationists spend their days cataloging brittle lacquer discs, transferring fragile wax-cylinder recordings to digital files, and ______ the temperature-controlled vaults where the originals are stored.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "monitoring"
            },
            {
              "id": "B",
              "text": "to monitor"
            },
            {
              "id": "C",
              "text": "they monitor"
            },
            {
              "id": "D",
              "text": "monitored"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The series \"cataloging... transferring...\" is built on gerunds, so the third item must be the gerund \"monitoring.\"\n\n**The Full Solution:**\n- The blank completes the third item in a parallel series whose first two items are gerunds.\n- Parallel structure requires the same grammatical form throughout the series.\n\n**Why the other choices are wrong:**\n- B: It switches to an infinitive, breaking the pattern the first two items establish.\n- C: It inserts a subject and finite verb, turning the list item into a clause that cannot sit in the series.\n- D: The past-tense form neither matches the gerunds nor forms any grammatical unit with \"spend their days.\""
        },
        {
          "id": 120,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "In September 1928, bacteriologist Alexander Fleming ______ culture plates that had sat on his laboratory bench during a vacation when he noticed that a mold growing on one plate had killed the bacteria around it — the observation that led to penicillin.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "sorts"
            },
            {
              "id": "B",
              "text": "has sorted"
            },
            {
              "id": "C",
              "text": "will sort"
            },
            {
              "id": "D",
              "text": "was sorting"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** An interrupted past action takes the past progressive: \"was sorting ... when he noticed.\"\n\n**The Full Solution:**\n- The sentence narrates an interruption: the noticing (\"when he noticed\") happened at a point during an ongoing activity.\n- English marks that ongoing past frame with the past progressive, so the blank must be \"was sorting.\"\n\n**Why the other choices are wrong:**\n- A: Present tense clashes with the past-tense \"noticed\" and the date \"In September 1928.\"\n- B: The present perfect describes a completed action with present relevance — it cannot serve as the backdrop for a past interruption.\n- C: Future tense is incompatible with the past narrative altogether.",
          "_meta": {
            "rule": "past progressive for an interrupted past action",
            "anchor": "Alexander Fleming, September 1928: mold on a culture plate killed surrounding staphylococci after his return from holiday — discovery of penicillin"
          }
        },
        {
          "id": 117,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In 1967, reviewing data from a radio telescope she had helped build at Cambridge, astrophysicist Jocelyn Bell Burnell noticed a strikingly regular pulse. Although the signal at first seemed too orderly to be ______ her records showed it returning night after night from the same patch of sky, and its source proved to be a spinning neutron star.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "natural,"
            },
            {
              "id": "B",
              "text": "natural"
            },
            {
              "id": "C",
              "text": "natural;"
            },
            {
              "id": "D",
              "text": "natural:"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** An opening \"Although...\" clause is dependent — it must be joined to the main clause with a comma.\n\n**The Full Solution:**\n- The sentence opens with a dependent clause: \"Although the signal at first seemed too orderly to be natural.\"\n- A dependent clause cannot stand alone; the conventional boundary between it and the main clause (\"her records showed it returning night after night...\") is a comma.\n\n**Why the other choices are wrong:**\n- B: It omits the required boundary, running the subordinate clause straight into the main clause.\n- C: A semicolon demands a complete, independent clause before it; the \"Although...\" clause is not one, so it would strand a fragment.\n- D: A colon likewise requires an independent clause before the mark — same fragment problem.",
          "_meta": {
            "rule": "comma after introductory dependent clause",
            "anchor": "Jocelyn Bell Burnell — pulsar discovery 1967, Cambridge radio telescope",
            "distractors": {
              "B": "missing boundary (fused subordinate + main clause)",
              "C": "semicolon requires independent clause before it",
              "D": "colon requires independent clause before it"
            }
          }
        },
        {
          "id": 119,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In Nairobi, the artists who decorate privately owned minibuses known as matatus treat each vehicle as a rolling ______ owners pay for bold murals and custom lettering because a striking design can draw passengers away from competing vehicles.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "gallery,"
            },
            {
              "id": "B",
              "text": "gallery, and"
            },
            {
              "id": "C",
              "text": "gallery and"
            },
            {
              "id": "D",
              "text": "gallery"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Two independent clauses meet at the blank, and joining them requires a comma plus a coordinating conjunction: \"gallery, and.\"\n\n**The Full Solution:**\n- Both sides are complete sentences: \"the artists who decorate privately owned minibuses known as matatus treat each vehicle as a rolling gallery\" and \"owners pay for bold murals and custom lettering.\"\n- The conventional join for two independent clauses is comma + coordinating conjunction, which only choice B supplies.\n\n**Why the other choices are wrong:**\n- A: A comma splice — it fuses two complete sentences with only a comma.\n- C: It supplies the conjunction but drops the comma required between independent clauses.\n- D: It runs the clauses together with no boundary at all."
        },
        {
          "id": 123,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Engineers routinely borrow designs that evolution has already tested. ______ when designers of Japan's Shinkansen trains needed to stop the thunderclap the trains produced on exiting tunnels, they reshaped the train's nose after the beak of the kingfisher, a bird that plunges from air into water with barely a splash.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "However,"
            },
            {
              "id": "B",
              "text": "Meanwhile,"
            },
            {
              "id": "C",
              "text": "For instance,"
            },
            {
              "id": "D",
              "text": "In contrast,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** A general claim followed by a particular illustration calls for an exemplifying transition, and \"For instance,\" performs exactly that move.\n\n**The Full Solution:**\n- The first sentence states a general practice: engineers borrow evolution-tested designs.\n- The second supplies a specific case of that practice — the kingfisher-beak nose of the Shinkansen — so the second sentence is evidence for the first.\n\n**Why the other choices are wrong:**\n- A: \"However\" signals opposition, but the train example confirms rather than resists the opening claim.\n- B: \"Meanwhile\" signals simultaneous, unrelated action, misstating the link — the second sentence is evidence, not a parallel event.\n- D: \"In contrast\" also signals opposition, which the example does not provide."
        },
        {
          "id": 125,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In many northern hardwood forests, there were no earthworms at all until anglers and gardeners introduced European species. The invaders consume the thick layer of decaying leaves that normally blankets the forest floor. ______ woodland wildflowers and tree seedlings that germinate in that spongy litter are losing the seedbed they require, and their numbers are falling in heavily invaded stands.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "Similarly,"
            },
            {
              "id": "C",
              "text": "In the meantime,"
            },
            {
              "id": "D",
              "text": "As a result,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The second sentence is the consequence of the first, and \"As a result,\" marks exactly that cause-effect relationship.\n\n**The Full Solution:**\n- The logical chain runs from cause to effect: earthworms consume the leaf litter, and the plants that germinate in that litter therefore lose their seedbed and decline.\n- A consequence transition is the only one that preserves the chain.\n\n**Why the other choices are wrong:**\n- A: \"Nevertheless\" signals that the decline happens despite the litter loss, inverting the causal link.\n- B: \"Similarly\" treats the plants' decline as a parallel case rather than a downstream effect.\n- C: \"In the meantime\" reduces a cause-effect relationship to mere simultaneity."
        },
        {
          "id": 124,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Studies that plant deliberate errors in manuscripts have found that peer reviewers catch only a fraction of them; in one such study, reviewers spotted, on average, only about three of nine major errors. ______ in a 2009 survey of about four thousand researchers, 91 percent said that peer review had improved their most recent published paper.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Accordingly,"
            },
            {
              "id": "B",
              "text": "Even so,"
            },
            {
              "id": "C",
              "text": "In other words,"
            },
            {
              "id": "D",
              "text": "For example,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The move is concessive — granting peer review's documented weaknesses while asserting its countervailing value — and \"Even so,\" does precisely that.\n\n**The Full Solution:**\n- The first sentence documents a weakness: reviewers miss most of the errors planted in manuscripts.\n- The second pulls the opposite way: most researchers say peer review improved their own work.\n- The needed transition concedes the first point while asserting the second.\n\n**Why the other choices are wrong:**\n- A: \"Accordingly\" claims the second sentence follows from the first, but researchers' approval of peer review does not follow from reviewers missing errors; it cuts against that weakness.\n- C: \"In other words\" promises a restatement, yet the second sentence introduces new, opposing evidence.\n- D: \"For example\" would make the survey result an instance of reviewers missing errors, which it is not.",
          "_meta": {
            "source": "Schroter et al., J. R. Soc. Med. 101 (2008): BMJ reviewers detected on average 2.6-3.1 of 9 major errors; Sense About Science Peer Review Survey 2009 (~4,000 respondents): 91% said peer review improved their last paper"
          }
        },
        {
          "id": 126,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Katsuko Saruhashi (1920-2007) was a Japanese geochemist.",
              "In 1955 she published a method, later known as Saruhashi's Table, for determining the amount of carbonic acid substances in seawater from its temperature, pH, and salinity.",
              "Oceanographers adopted the table as a standard tool for measuring carbon dioxide in the ocean.",
              "Her measurements helped scientists understand how the ocean absorbs carbon dioxide from the atmosphere.",
              "In 1980 she became the first woman elected to the Science Council of Japan."
            ],
            "goal": "The student wants to introduce Saruhashi's main scientific contribution to an audience unfamiliar with her work."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Japanese geochemist Katsuko Saruhashi developed Saruhashi's Table, a method that became a standard tool for measuring carbon dioxide in seawater and clarified how the ocean absorbs the gas."
            },
            {
              "id": "B",
              "text": "In 1980, Katsuko Saruhashi became the first woman elected to the Science Council of Japan."
            },
            {
              "id": "C",
              "text": "Saruhashi's Table determines the amount of carbonic acid substances in seawater from its temperature, pH, and salinity."
            },
            {
              "id": "D",
              "text": "Katsuko Saruhashi, who lived from 1920 to 2007, published an influential scientific paper in 1955 and was elected to a prestigious scientific council in Japan twenty-five years afterward."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The goal demands two things at once — identify Saruhashi for unfamiliar readers and present her main contribution — and A alone does both.\n\n**The Full Solution:**\n- The goal: introduce who Saruhashi was AND what she contributed, for readers who do not know her.\n- Choice A packs both into one sentence: her nationality and field, the method she developed, and its significance (a standard tool that illuminated ocean carbon absorption).\n\n**Why the other choices are wrong:**\n- B: It leads with an honor, not the contribution itself.\n- C: It describes the table's technical operation but never identifies Saruhashi for an unfamiliar audience or conveys why the method mattered.\n- D: It strings together dates while omitting the one thing the goal requires: what her contribution actually was."
        },
        {
          "id": 127,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "NASA's Mars rover Opportunity landed in 2004 and drew its power from solar panels.",
              "NASA's Mars rover Curiosity landed in 2012 and is powered by a radioisotope generator that converts heat from decaying plutonium into electricity.",
              "A radioisotope generator does not depend on sunlight reaching the rover.",
              "In 2018, a planet-encircling dust storm darkened Martian skies for months.",
              "Opportunity lost power during the 2018 storm and never resumed contact; Curiosity continued operating throughout the storm."
            ],
            "goal": "The student wants to emphasize why Curiosity, unlike Opportunity, was able to keep operating during the 2018 dust storm."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Opportunity landed on Mars in 2004, eight years before Curiosity, and the two rovers explored different regions of the planet."
            },
            {
              "id": "B",
              "text": "In 2018, a planet-encircling dust storm darkened Martian skies for months, and Opportunity, which had been exploring the planet since its 2004 landing, never resumed contact with Earth."
            },
            {
              "id": "C",
              "text": "Because Curiosity's radioisotope generator needs no sunlight, it kept operating through the months-long 2018 dust storm that starved the solar-powered Opportunity of energy."
            },
            {
              "id": "D",
              "text": "Curiosity, which landed on Mars in 2012, is powered by a generator that converts heat from decaying plutonium into electricity."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The goal is to explain a contrast — why one rover survived the storm and the other did not — and C forges the causal link on both sides.\n\n**The Full Solution:**\n- Explaining the contrast requires linking each rover's power source to its fate in the darkened skies.\n- Choice C does exactly that: a sunlight-independent generator, so Curiosity endured; solar panels starved of light, so Opportunity failed.\n\n**Why the other choices are wrong:**\n- A: Timeline and geography — neither bears on the storm.\n- B: It recounts what happened to Opportunity without ever giving the reason, and omits Curiosity entirely.\n- D: It explains Curiosity's power source but never connects it to the storm or draws the contrast with Opportunity that the goal requires."
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 32,
      questions: [
        {
          "id": 131,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Geophysicists long sorted faults into two categories: locked segments that store strain for centuries before rupturing in great earthquakes, and creeping segments that release strain steadily and harmlessly. The discovery of slow-slip events, in which a fault slides for weeks without producing perceptible shaking, has ______ that tidy division, since the same stretch of fault can alternate between silent sliding and seismic rupture.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "corroborated"
            },
            {
              "id": "B",
              "text": "anticipated"
            },
            {
              "id": "C",
              "text": "complicated"
            },
            {
              "id": "D",
              "text": "circumvented"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Evidence that blurs a clean two-part scheme \"complicates\" it — makes it harder to maintain in its simple form.\n\n**The Full Solution:**\n- The passage sets up a \"tidy division\" of faults into locked and creeping categories.\n- Slow-slip events fit neither neatly: the same stretch of fault can alternate between silent sliding and seismic rupture.\n- Behavior that crosses the division's boundaries makes the classification harder to keep — it complicates it.\n\n**Why the other choices are wrong:**\n- A: \"Corroborated\" would require the discovery to confirm the division, but the \"since\" clause describes behavior that crosses its boundaries.\n- B: \"Anticipated\" means foresaw, but a discovery cannot foresee a classification that preceded it.\n- D: \"Circumvented\" means deliberately avoided — but slow-slip events are not agents evading the scheme; they are evidence against its adequacy."
        },
        {
          "id": 129,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In the 1890s, physicist Wallace Sabine was asked to fix the poor acoustics of a Harvard lecture hall. By timing how long sound lingered in rooms, he derived a formula relating a hall's reverberation to its volume and its sound-absorbing materials. The formula gave architects a way to ______ the acoustics of a concert hall while the building existed only on paper.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "predict"
            },
            {
              "id": "B",
              "text": "amplify"
            },
            {
              "id": "C",
              "text": "commemorate"
            },
            {
              "id": "D",
              "text": "overhear"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The formula made it possible to forecast a hall's sound before the hall existed — which is precisely what \"predict\" means.\n\n**The Full Solution:**\n- The passage emphasizes that Sabine's formula related a hall's reverberation to measurable features of its design.\n- Architects could apply it \"while the building existed only on paper\" — before any sound could be produced in the hall — so the formula's gift was foreknowledge of how a hall would sound.\n\n**Why the other choices are wrong:**\n- B: \"Amplify\" means to make louder; the formula describes reverberation, it does not strengthen sound — and nothing can be amplified in an unbuilt hall.\n- C: \"Commemorate\" means to honor the memory of something, which is illogical here.\n- D: \"Overhear\" means to hear accidentally, but no sound yet exists to be heard when a building is only a design."
        },
        {
          "id": 130,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In field studies of commonly held resources — Swiss alpine pastures, Japanese village forests, Spanish irrigation networks — political economist Elinor Ostrom challenged the assumption that such commons must be privatized or placed under state control. What struck Ostrom was the sheer ______ of the arrangements she documented: communities had devised rules so finely adjusted to local conditions that no single template could describe them all.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "uniformity"
            },
            {
              "id": "B",
              "text": "heterogeneity"
            },
            {
              "id": "C",
              "text": "scarcity"
            },
            {
              "id": "D",
              "text": "obsolescence"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The colon's elaboration defines the blank: rules \"so finely adjusted to local conditions that no single template could describe them all\" — that variety is their heterogeneity.\n\n**The Full Solution:**\n- The sentence explains itself: what struck Ostrom was that communities devised arrangements too varied for any one template.\n- The blank must name that quality of variedness, and \"heterogeneity\" does.\n\n**Why the other choices are wrong:**\n- A: \"Uniformity\" asserts the opposite of the colon's elaboration, which insists that no one template fits.\n- C: \"Scarcity\" fails because the passage catalogs an abundance of arrangements across pastures, forests, and irrigation networks, not a shortage.\n- D: \"Obsolescence\" — falling out of use — conflicts with the passage's portrayal of these arrangements as functioning solutions."
        },
        {
          "id": 128,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "For 130 years, the kilogram was defined by a single metal cylinder kept under glass bells near Paris. Comparisons, however, suggested that the cylinder's mass and that of its official copies were slowly drifting apart. In 2019, scientists therefore redefined the unit in terms of Planck's constant, a fixed quantity of nature — a change intended to ______ the standard from the vulnerabilities of any single physical object.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "borrow"
            },
            {
              "id": "B",
              "text": "insulate"
            },
            {
              "id": "C",
              "text": "estimate"
            },
            {
              "id": "D",
              "text": "dislodge"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The redefinition was meant to protect the standard from the weaknesses of depending on one physical object, and \"insulate ... from\" means exactly that: to shield something from an outside influence.\n\n**The Full Solution:**\n- The passage sets up a problem: the old standard was one physical cylinder, and its mass appeared to be drifting — a vulnerability built into any single object.\n- The redefinition tied the unit to Planck's constant, \"a fixed quantity of nature,\" precisely so that no single object's fate could affect the standard.\n- The blank needs a verb meaning \"shield or protect from\": \"insulate the standard from the vulnerabilities\" completes that logic precisely.\n\n**Why the other choices are wrong:**\n- A: \"Borrow ... from\" would mean taking the vulnerabilities for the standard's own use, which reverses the intended protection.\n- C: \"Estimate\" belongs to the measurement theme but cannot take this construction — one does not estimate a standard \"from\" vulnerabilities, and the goal was protection, not approximation.\n- D: \"Dislodge\" means to knock something out of position — a physical-removal idea that echoes the cylinder imagery but says nothing about shielding the standard from risk."
        },
        {
          "id": 135,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Thin sections cut from the limb bones of many dinosaurs show lines of arrested growth: rings, like a tree's, that record annual pauses in bone growth. Because today's reptiles form such rings when cool seasons slow their metabolism, while mammals and birds were long thought to grow bone continuously, some paleontologists have read the rings as evidence that dinosaurs' metabolic rates tracked the seasons the way a crocodile's do — that dinosaurs were, in this respect, fundamentally reptilian."
            },
            {
              "label": "Text 2",
              "text": "Rings record pauses in growth, not their cause. Paleontologist Meike Köhler found such rings in the leg bones of more than 100 modern ruminants, including deer and antelope — warm-blooded animals that stop growing during harsh seasons. A team led by geochemist Robin Dawson, meanwhile, measured the ordering of heavy isotopes in fossil eggshells, which reflects the temperature of the body in which a shell formed. Eggshells from three major dinosaur groups indicated body temperatures above those of the animals' surroundings."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the conclusion presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "It concedes that growth rings are the most reliable record of dinosaur metabolism, even though eggshell isotopes suggest a different conclusion."
            },
            {
              "id": "B",
              "text": "It objects that growth rings cannot support that conclusion, since warm-blooded animals also form them, and cites independent evidence of elevated dinosaur body temperatures."
            },
            {
              "id": "C",
              "text": "It argues that lines of arrested growth are artifacts of fossilization rather than records of pauses in the animals' growth."
            },
            {
              "id": "D",
              "text": "It agrees that dinosaurs' metabolic rates tracked the seasons but attributes that pattern to seasonal food shortages rather than to changes in body temperature."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Text 2 attacks Text 1's inferential step — rings record pauses in growth, not their cause — and then supplies independent isotope evidence pointing to warm bodies.\n\n**The Full Solution:**\n- Text 1 infers reptile-like metabolism from growth rings, because rings appear in reptiles whose metabolism slows in cool seasons.\n- Text 2 rejects exactly that step: rings \"record pauses in growth, not their cause,\" and Köhler found them in warm-blooded ruminants such as deer and antelope — so rings cannot tell the two hypotheses apart.\n- Text 2 then adds evidence on the question rings cannot settle: eggshell isotope ordering, which reflects the body temperature that formed the shell, indicates dinosaur body temperatures \"above those of the animals' surroundings.\"\n\n**Why the other choices are wrong:**\n- A: Text 2 treats rings as uninformative about metabolism, not as the most reliable record.\n- C: It overstates the objection — Text 2 accepts that rings record real pauses in growth, disputing only what causes them.\n- D: It attributes an agreement Text 2 rejects: the isotope data point away from body temperatures that simply track the environment.",
          "_meta": {
            "source": "Text 2: Köhler et al., Nature 487 (2012) — lines of arrested growth in >100 ruminant specimens; Dawson et al., Science Advances 6 (2020) — clumped-isotope eggshell temperatures for Ornithischia, Sauropodomorpha, Theropoda above environmental temperatures"
          }
        },
        {
          "id": 132,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "A scratch in a car's paint or a crack in a phone case ordinarily marks permanent damage, because the polymer chains in conventional plastics, once severed, cannot rejoin. Materials chemists have engineered an alternative: polymers threaded with reversible bonds — hydrogen bonds or metal-ligand links — that break preferentially under stress and then re-form when the damaged surfaces are pressed together, restoring much of the material's original strength. Yet these self-healing plastics remain rare in commercial products, largely because the reversible bonds that permit repair also soften the material, and manufacturers have been unwilling to trade durability in daily use for recovery after damage.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It presents a debate among materials chemists, summarizes the evidence on each side, and indicates which position has prevailed."
            },
            {
              "id": "B",
              "text": "It describes a widely used class of materials, traces how those materials are manufactured, and predicts how that process will change."
            },
            {
              "id": "C",
              "text": "It identifies a limitation of conventional plastics, describes a mechanism that overcomes it, and explains why the resulting materials remain commercially rare."
            },
            {
              "id": "D",
              "text": "It introduces a new class of polymers, lists the products that contain them, and questions whether those products perform as advertised."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text moves from a limitation of conventional plastics, to the engineered solution, to the trade-off that has kept the solution out of products — and C tracks all three movements in order.\n\n**The Full Solution:**\n- First move: conventional plastics' severed polymer chains \"cannot rejoin,\" so damage is permanent.\n- Second move: the engineered solution — polymers with reversible bonds that break under stress and re-form on contact.\n- Third move: the pivot \"Yet\" introduces why adoption is limited: the same bonds that permit repair soften the material, a trade-off manufacturers have refused.\n\n**Why the other choices are wrong:**\n- A: The text stages no debate between camps and weighs no competing evidence.\n- B: Self-healing polymers are described as \"rare in commercial products,\" not widely used, and no manufacturing process is traced.\n- D: The text catalogs no products containing the polymers — their absence from products is the point of the final sentence."
        },
        {
          "id": 133,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is poem 35 from Rabindranath Tagore's 1912 collection *Gitanjali*, which the poet translated from Bengali into English.\n\nWhere the mind is without fear and the head is held high;\nWhere knowledge is free;\nWhere the world has not been broken up into fragments by narrow domestic walls;\nWhere words come out from the depth of truth;\nWhere tireless striving stretches its arms towards perfection;\nWhere the clear stream of reason has not lost its way into the dreary desert sand of dead habit;\nWhere the mind is led forward by thee into ever-widening thought and action—\nInto that heaven of freedom, my Father, let my country awake.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The speaker recalls a time when these conditions prevailed in his country and then mourns that they have since been lost."
            },
            {
              "id": "B",
              "text": "The speaker poses a series of questions about a country's future and then supplies an answer to each one."
            },
            {
              "id": "C",
              "text": "The speaker describes the obstacles that stand in a country's way and then proposes a specific plan for removing each of them."
            },
            {
              "id": "D",
              "text": "The speaker names one condition after another and then asks that his country be awakened into the state those conditions define."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Seven parallel clauses beginning \"Where\" set out the conditions of a place, and the final line turns them into a request: \"let my country awake\" into that place.\n\n**The Full Solution:**\n- Each of the first seven lines opens with \"Where\" and adds one more condition — fearlessness, free knowledge, an unbroken world, truthful words, tireless striving, unobstructed reason, and widening thought.\n- Nothing in those lines is located in the past or in the speaker's own country; they describe a state of things, not a history.\n- The last line gathers all of them into \"that heaven of freedom\" and makes the poem's single request: \"let my country awake.\"\n\n**Why the other choices are wrong:**\n- A: The conditions are never presented as something the country once had.\n- B: The lines are clauses, not questions, and no answers are supplied.\n- C: The poem names conditions to be reached, not obstacles, and offers no plan.",
          "_meta": {
            "quoteVerify": true,
            "source": "Rabindranath Tagore, poem 35 of Gitanjali (Song Offerings), 1912 English edition; text verified against the Wikisource transcription of the scanned edition (https://en.wikisource.org/wiki/Gitanjali/35)"
          }
        },
        {
          "id": 134,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Ensembles devoted to historically informed performance play Bach and Handel on gut strings and valveless horns, aiming to restore the sound this music had for its first audiences. Musicologist Richard Taruskin argued that this aim misdescribes the movement's real achievement: instruments alone cannot recover vanished habits of listening, and the movement's hallmark virtues — lean textures, brisk tempos, transparency — match twentieth-century modernist taste, so period performance is better understood as a vital contemporary style than as a reconstruction. Listeners, on Taruskin's account, should therefore judge such performances by their present persuasiveness rather than by their fidelity to a past that cannot be audited.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It describes a movement's stated aim, presents a scholar's argument that the movement is better understood differently, and notes the resulting standard of judgment."
            },
            {
              "id": "B",
              "text": "It traces a performance movement's history, identifies obstacles the movement has yet to overcome, and predicts that further research will resolve them."
            },
            {
              "id": "C",
              "text": "It presents a scholar's objection to a performance movement, recounts the movement's rebuttal, and concludes that the objection rested on a misunderstanding."
            },
            {
              "id": "D",
              "text": "It contrasts two rival performance movements, weighs the evidence for each one's claims of accuracy, and endorses the better-documented movement."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text presents the movement's stated aim, Taruskin's reinterpretation of it, and the standard of judgment that follows — in that order.\n\n**The Full Solution:**\n- Opening: the movement's self-description — period instruments aim to restore \"the sound this music had for its first audiences.\"\n- Middle: Taruskin's reframing — the practice cannot recover past listening and in fact matches modernist taste, making it \"a vital contemporary style\" rather than a reconstruction.\n- Close: the consequence — judge performances \"by their present persuasiveness rather than by their fidelity to a past that cannot be audited.\"\n\n**Why the other choices are wrong:**\n- B: No historical development is traced and no resolution is predicted.\n- C: It reverses the argumentative traffic — the movement never rebuts Taruskin in the text.\n- D: Only one movement is discussed; Taruskin proposes a rival description of it, not a rival ensemble practice."
        },
        {
          "id": 136,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "In 1990, the Leaning Tower of Pisa was closed to visitors because engineers feared that its increasing tilt could lead to collapse. An international committee, whose members included geotechnical engineer John Burland, chose a method that would leave the tower's famous silhouette intact: between 1999 and 2001, workers slowly extracted small amounts of soil from beneath the foundation's north side — the side opposite the lean — allowing the tower to settle back toward vertical. The method reduced the tilt by roughly ten percent, enough, the committee calculated, to stabilize the structure for at least two hundred years.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "In 1990 the tower was closed to visitors, and it remained closed until engineers finalized a plan to dismantle the structure and rebuild it on firmer ground."
            },
            {
              "id": "B",
              "text": "The tower tilts because the soil beneath its south side is softer than the soil beneath its north side, a difference undetected until 1990."
            },
            {
              "id": "C",
              "text": "Engineers secured the Leaning Tower of Pisa by removing soil from beneath the side opposite its lean, reducing the tilt without changing the tower's appearance."
            },
            {
              "id": "D",
              "text": "The committee determined that continued soil extraction could eventually return the tower fully to vertical if the work were extended for several more years."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text's central idea joins the problem, the method, and the outcome: facing feared collapse, engineers removed soil from beneath the north side, and the modest reduction in tilt secured the tower while preserving how it looks.\n\n**The Full Solution:**\n- The passage moves from a crisis (closure in 1990 over fears of collapse) to a chosen method (soil extraction beneath the side opposite the lean, picked because it would leave the silhouette intact) to a result (tilt reduced about ten percent — enough to stabilize the tower for at least two hundred years).\n- A main-idea answer must capture that full arc at the right level of generality, and choice C states each element: the goal, the method, and the deliberately limited correction.\n\n**Why the other choices are wrong:**\n- A: The text never mentions a plan to dismantle and rebuild the tower; the committee chose soil extraction precisely to keep the tower as it stands.\n- B: The text never explains why the tower leans or compares soil softness on the two sides; soil is discussed only as what the engineers removed.\n- D: The text describes a deliberately partial correction; nothing suggests extending the work to reach full vertical, which would erase the famous lean the committee set out to preserve.",
          "_meta": {
            "source": "Burland, Jamiolkowski & Viggiani, stabilisation of the Tower of Pisa: closed Jan 1990; committee chaired by M. Jamiolkowski with J. Burland as member; soil extraction Feb 1999-Jun 2001; inclination reduced ~10% (~44 cm at the top); stable for at least 200-300 years"
          }
        },
        {
          "id": 140,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "After 2020, public transit agencies in the United States rebuilt ridership at strikingly different rates. Transportation analysts examining the recovery argue that systems serving many riders without cars — so-called transit-dependent riders — regained ridership faster than systems whose passengers were mostly commuters with other options. Data from four rail systems are consistent with the analysts' argument because ______",
          "questionTable": {
            "type": "table",
            "caption": "Average weekday rail ridership in 2019 and 2024 for four U.S. transit systems, with the share of each system's riders classified as transit-dependent",
            "headers": [
              "System",
              "2019 riders (thousands)",
              "2024 riders (thousands)",
              "2024 as % of 2019",
              "Transit-dependent share"
            ],
            "rows": [
              [
                "System A",
                "412",
                "379",
                "92%",
                "High"
              ],
              [
                "System B",
                "268",
                "241",
                "90%",
                "High"
              ],
              [
                "System C",
                "731",
                "468",
                "64%",
                "Low"
              ],
              [
                "System D",
                "155",
                "105",
                "68%",
                "Low"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "System C carried the most riders of the four systems in both 2019 and 2024, even though its recovery rate was among the lowest."
            },
            {
              "id": "B",
              "text": "the two systems with high shares of transit-dependent riders had recovered 92% and 90% of their 2019 ridership by 2024, while the two systems with low shares had recovered only 64% and 68%."
            },
            {
              "id": "C",
              "text": "System A lost only 33,000 weekday riders between 2019 and 2024, a smaller absolute loss than System C's decline of 263,000 riders."
            },
            {
              "id": "D",
              "text": "all four systems carried fewer weekday riders in 2024 than they had carried in 2019, with recovery rates that ranged from a low of 64% at System C to a high of 92% at System A."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The argument is comparative — high transit-dependent systems recovered faster — and B pairs each system's recovery rate with its dependence share, splitting exactly along the predicted line.\n\n**The Full Solution:**\n- The analysts' claim links two variables: transit-dependent ridership share and recovery rate.\n- Choice B makes the required pairing: the two high-share systems at 92% and 90% against the two low-share systems at 64% and 68%.\n\n**Why the other choices are wrong:**\n- A: It cites true figures but compares system size, a variable the argument says nothing about.\n- C: The absolute-loss comparison is distorted by size — System C is far larger, so a bigger raw loss is uninformative; the argument concerns rates of recovery.\n- D: It summarizes the table accurately but omits the transit-dependent classification, so it shows recovery varied without connecting the variation to rider dependence."
        },
        {
          "id": 142,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Roman harbor concrete has survived two millennia of pounding surf that destroys modern marine concrete within decades. Analyzing drill cores from breakwaters at Portus Cosanus and elsewhere, geologists found that seawater percolating through the Roman material for centuries dissolved parts of its volcanic ash and lime and, in the voids left behind, grew interlocking mineral crystals that knit the concrete more tightly together over time. Engineers who mix chemically faithful reproductions of the Roman recipe, however, should not expect their samples to match the ancient breakwaters' strength right away, since ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "modern testing standards measure the strength of concrete samples far more precisely than any method available to Roman builders."
            },
            {
              "id": "B",
              "text": "the volcanic ash the Romans used came from deposits near the Bay of Naples that modern engineers cannot access in large quantities."
            },
            {
              "id": "C",
              "text": "the reinforcing crystals are not an original ingredient of the concrete but the product of centuries of seawater exposure that new samples have not yet undergone."
            },
            {
              "id": "D",
              "text": "Roman builders reserved their most durable concrete formulations for harbors and used weaker mixtures in structures on land."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** If the strengthening agent is produced by centuries of seawater exposure rather than included in the mix, a chemically exact reproduction necessarily begins life without it.\n\n**The Full Solution:**\n- The passage locates the durability's source in a slow process: seawater percolated through the material \"for centuries,\" dissolving components and growing interlocking crystals \"over time.\"\n- The blank must explain why faithful new samples \"should not\" match the breakwaters' strength \"right away\" — and C draws precisely that inference: the strength develops with exposure, so young samples lack it.\n\n**Why the other choices are wrong:**\n- A: Better measurement changes what engineers can detect, not how strong the samples are.\n- B: It raises a supply problem the sentence has already set aside by stipulating \"chemically faithful reproductions.\"\n- D: The harbor-versus-land comparison says nothing about why a faithful reproduction of the harbor recipe would underperform the ancient original."
        },
        {
          "id": 138,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Grid cells in the mammalian brain fire whenever an animal occupies any vertex of a hexagonal lattice tiling the space it moves through. Neuroscientist Edvard Moser's group asked whether that lattice is anchored to what the animal sees: they recorded from grid cells while rats foraged first in a lighted arena and then in total darkness. If the pattern depended on visual landmarks, darkness should have dissolved or displaced it. Instead, the hexagonal pattern persisted in the dark, and Moser concluded that the grid is generated internally from the animal's own movement signals, with landmarks serving mainly to anchor the map and correct its drift rather than to construct it.",
          "question": "According to the text, what did Moser conclude about the firing pattern of grid cells?",
          "choices": [
            {
              "id": "A",
              "text": "It arises only in animals that have first explored an arena in the light, because darkness prevents the lattice from forming at all."
            },
            {
              "id": "B",
              "text": "It dissolves completely in total darkness, which shows that the hexagonal pattern is anchored entirely to visual landmarks."
            },
            {
              "id": "C",
              "text": "It depends equally on self-motion and on vision, since removing either input displaces the hexagonal lattice."
            },
            {
              "id": "D",
              "text": "It is produced internally from self-motion signals, with visual landmarks serving chiefly to anchor and correct the pattern rather than to build it."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Moser's stated conclusion has two parts — the grid is generated internally from movement signals, and landmarks mainly anchor and correct the map — and D reproduces both.\n\n**The Full Solution:**\n- The final sentence gives the conclusion: the grid \"is generated internally from the animal's own movement signals,\" with landmarks serving \"mainly to anchor the map and correct its drift rather than to construct it.\"\n- A correct answer must keep both the internal-generation claim and the landmarks' limited, corrective role.\n\n**Why the other choices are wrong:**\n- A: It confuses the experimental sequence (light first, then darkness) with a claimed requirement; the text nowhere says prior lighted exploration is necessary for the lattice to form.\n- B: It states the outcome the experiment ruled out — if the lattice depended on visual landmarks, darkness \"should have dissolved or displaced it,\" but the pattern \"persisted.\"\n- C: It invents an equal-dependence conclusion the text contradicts: the two inputs play asymmetric roles (construction versus correction).",
          "_meta": {
            "source": "Hafting, Fyhn, Molden, Moser & Moser, Nature 436 (2005), 'Microstructure of a spatial map in the entorhinal cortex' — grids anchored to external landmarks but persisted in darkness, suggesting a path-integration-based map"
          }
        },
        {
          "id": 137,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The Book of Fixed Stars, completed around 964 CE by the Persian astronomer 'Abd al-Rahman al-Sufi, is often described as an Arabic translation of Ptolemy's star catalog, but that description understates the work. Al-Sufi re-observed the catalog's stars himself, correcting many of the brightness values Ptolemy had assigned eight centuries earlier. He also recorded objects Ptolemy never mentioned, including a \"little cloud\" in the constellation Andromeda — the earliest surviving written notice of the galaxy that now bears that name. The book thus preserved Greek astronomy while demonstrating that observation could improve upon even the most authoritative inherited text.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The Book of Fixed Stars became influential primarily because Arabic was more widely read than Greek among astronomers of the tenth century."
            },
            {
              "id": "B",
              "text": "Al-Sufi's observation of a \"little cloud\" in Andromeda was the most important astronomical discovery of the tenth century, though it went unrecognized until modern times."
            },
            {
              "id": "C",
              "text": "Ptolemy's catalog contained so many errors that later astronomers discarded it entirely and compiled replacements from fresh observations."
            },
            {
              "id": "D",
              "text": "Al-Sufi's book was less a translation of Ptolemy's catalog than a revision of it, preserving Greek astronomy while adding corrections and new observations."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text corrects the label \"a translation\": al-Sufi's book both preserved Greek astronomy and showed that observation could improve on an authoritative text.\n\n**The Full Solution:**\n- The organizing move is a correction: calling the book a translation of Ptolemy \"understates the work.\"\n- Every detail supports the fuller characterization — al-Sufi re-observed the stars, corrected brightness values, and added objects Ptolemy never recorded.\n- The final sentence draws the two-sided conclusion that choice D restates: preservation and improvement at once.\n\n**Why the other choices are wrong:**\n- A: It offers an explanation of the book's influence the text never gives — the passage credits al-Sufi's observations, not the reach of the Arabic language.\n- B: It elevates one example (the Andromeda \"little cloud\") into the main idea and adds an unsupported superlative.\n- C: It contradicts the text, which presents the catalog as authoritative and worth preserving — al-Sufi corrected it while transmitting it."
        },
        {
          "id": 141,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Ecologists monitoring former grazing land in Europe have debated what drives biodiversity gains after farming stops. Some attribute the gains simply to the removal of livestock; others argue that reintroducing large grazers such as bison or feral horses at low density is what matters, because their patchy, selective grazing creates a mosaic of habitats that uniform abandonment does not. Researchers tracking plant species richness at four reserves contend that low-density grazer reintroduction, not the end of farming alone, drives the largest gains. The claim is supported by the data because ______",
          "questionTable": {
            "type": "table",
            "caption": "Plant species per survey plot at four former grazing reserves, ten years after farming ceased",
            "headers": [
              "Reserve",
              "Species per plot, year 0",
              "Species per plot, year 10",
              "Management after farming ceased"
            ],
            "rows": [
              [
                "Reserve 1",
                "24",
                "58",
                "Bison reintroduced"
              ],
              [
                "Reserve 2",
                "27",
                "61",
                "Feral horses reintroduced"
              ],
              [
                "Reserve 3",
                "25",
                "38",
                "No grazers (abandonment)"
              ],
              [
                "Reserve 4",
                "23",
                "36",
                "No grazers (abandonment)"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "species richness at Reserve 1 more than doubled over the decade, rising from 24 species per plot in year 0 to 58 species per plot in year 10."
            },
            {
              "id": "B",
              "text": "all four reserves supported more plant species per plot in year 10 than in year 0, regardless of how they were managed after farming ceased."
            },
            {
              "id": "C",
              "text": "although richness rose at every reserve after farming ceased, the two grazer reserves gained roughly 34 species per plot, more than twice the roughly 13 gained at the abandoned reserves with similar baselines."
            },
            {
              "id": "D",
              "text": "the two grazer reserves began with 24 and 27 species per plot, close to the 25 and 23 species recorded in year 0 at the two abandoned reserves."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The claim is that grazers add gains beyond abandonment alone, and C isolates exactly that difference: roughly 34 species per plot with grazers versus roughly 13 without, from similar starting values.\n\n**The Full Solution:**\n- The claim has two parts the evidence must separate: ending farming helps (undisputed), and grazer reintroduction adds gains beyond abandonment alone.\n- Choice C concedes that richness rose everywhere, then quantifies the management difference — and because the plots started from similar values, the gap cannot be explained by baseline differences.\n\n**Why the other choices are wrong:**\n- A: A single reserve's improvement with no comparison across managements cannot distinguish the grazers' contribution from abandonment's.\n- B: It establishes only the undisputed part, and its \"regardless of how they were managed\" framing actively cuts against the claim.\n- D: It verifies comparable baselines — a precondition — but stops before the comparison; similar starting points alone say nothing about what drove the gains."
        },
        {
          "id": 139,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Electric washing machines, vacuum cleaners, and gas ranges spread through American homes between 1900 and 1950, and manufacturers advertised them as a way to free women from hours of labor. Historian Ruth Schwartz Cowan has argued that the new machines did not in fact reduce the time women spent on household work. As each task became easier, she contends, standards of cleanliness rose, and work that families had once sent out, such as laundry and baking, moved back into the home, so hours saved on one chore were spent on another.",
          "question": "Which finding, if true, would most directly support the historian's claim?",
          "choices": [
            {
              "id": "A",
              "text": "Households that bought a washing machine during the 1930s were more likely than other households to have electric service already installed."
            },
            {
              "id": "B",
              "text": "Women who held paying jobs outside the home spent fewer weekly hours on housework than women who worked only in their own households did."
            },
            {
              "id": "C",
              "text": "Time-use diaries kept by American homemakers in the 1960s record about as many weekly hours of housework as diaries kept in the 1920s."
            },
            {
              "id": "D",
              "text": "Advertisements for vacuum cleaners in national magazines promised buyers more free time more often than they promised cleaner homes."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Cowan's claim is about hours, not about machines, so the finding that supports it most directly is one comparing time spent on housework before and after the appliances spread.\n\n**The Full Solution:**\n- The passage sets up a contrast between what the appliances promised and what Cowan says they delivered.\n- Her claim is specific: the time women spent on household work did not fall.\n- Diaries showing roughly equal weekly hours in the 1920s and the 1960s, a span over which appliance ownership rose sharply, test that claim head-on and confirm it.\n\n**Why the other choices are wrong:**\n- A: Which households bought machines first says nothing about how long anyone spent on housework.\n- B: It compares two groups of women at one time rather than the same kind of work before and after the machines arrived.\n- D: What the advertisements promised is already established in the passage; the claim concerns whether the promise held.",
          "_meta": {
            "source": "researchers.json res-b-001 — Ruth Schwartz Cowan, More Work for Mother (1983) and \"The Industrial Revolution in the Home\" (1976)"
          }
        },
        {
          "id": 143,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "When Nicaragua opened its first schools for deaf children in the late 1970s, students arrived with only the improvised home signs each had developed with hearing family members, and lessons in lipreading and spoken Spanish largely failed. Within a few years, however, the students had developed a shared sign language — and linguists noticed a generational pattern. Children who entered the community youngest, learning from older students' still-irregular signing, produced language that was more grammatically systematic than the input they received, using spatial devices far more consistently than their older peers did. Since the youngest signers could not have copied these regularities from teachers, older students, or Spanish, the linguists reasoned that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "the youngest children's signing must be considered a separate language rather than a further development of the older students' sign language."
            },
            {
              "id": "B",
              "text": "the older students must have secretly possessed a fully systematic grammar that they deliberately simplified when signing with younger children."
            },
            {
              "id": "C",
              "text": "sign languages develop grammatical regularity only in school settings where large numbers of deaf children are brought together for instruction."
            },
            {
              "id": "D",
              "text": "the language's grammatical structure must have originated at least partly in the young learners themselves, who imposed regularities their input lacked."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** With every external source of the grammar eliminated, the only remaining origin for the added systematicity is the young learners' own acquisition process — and D concludes exactly that, no more.\n\n**The Full Solution:**\n- The passage eliminates external sources one by one: lessons in lipreading and spoken Spanish failed; the older students' signing was \"still-irregular\" and used the spatial devices less consistently; Spanish was not the source.\n- The youngest cohort's consistent spatial grammar exceeded all available input — so the systematicity must have come from the learners themselves.\n\n**Why the other choices are wrong:**\n- A: It turns a difference of degree into a difference of identity; the passage presents the youngest cohort's signing as a more systematic stage of the same shared language, not a new one.\n- B: It rescues an external source by inventing a hidden grammar the passage rules out — the older students' signing is described as genuinely irregular, not strategically simplified.\n- C: It generalizes far beyond the evidence — one community's history cannot establish what \"only\" school settings can do."
        },
        {
          "id": 146,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In 1843, botanist Anna Atkins began photographing her collection of algae by placing each specimen directly onto light-sensitized paper, a cameraless technique that rendered the samples as ghostly white silhouettes on deep blue ______ the resulting volume, Photographs of British Algae, is widely regarded as the first book ever illustrated with photographs.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "grounds,"
            },
            {
              "id": "B",
              "text": "grounds"
            },
            {
              "id": "C",
              "text": "grounds;"
            },
            {
              "id": "D",
              "text": "grounds, however,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Two independent clauses meet at the blank, and the semicolon in \"grounds;\" is a conventional way to join them.\n\n**The Full Solution:**\n- Each side stands alone: \"In 1843, botanist Anna Atkins began photographing her collection of algae ... on deep blue grounds\" and \"the resulting volume ... is widely regarded as the first book ever illustrated with photographs.\"\n- Standard English joins two independent clauses with a period, a semicolon, or a comma plus coordinating conjunction; choice C supplies the semicolon.\n\n**Why the other choices are wrong:**\n- A: A comma alone between independent clauses — a comma splice.\n- B: No punctuation at all — a run-on.\n- D: The conjunctive adverb \"however\" cannot join independent clauses with commas alone (a semicolon would still be required before it), and the contrast it signals is illogical — the second clause extends the first rather than opposing it.",
          "_meta": {
            "rule": "semicolon between two independent clauses (comma splice / run-on / conjunctive-adverb splice distractors)",
            "anchor": "Anna Atkins, Photographs of British Algae: Cyanotype Impressions (1843) — first photographically illustrated book",
            "distractors": {
              "A": "comma splice",
              "B": "fused run-on (no boundary)",
              "D": "conjunctive-adverb splice + illogical contrast"
            }
          }
        },
        {
          "id": 148,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "In the early 1950s, cartographer Marie Tharp plotted ocean-depth soundings gathered by research ships crossing the Atlantic — ships that she, as a woman, was not permitted to ______ the profiles she drew revealed a rift valley running down the center of the Mid-Atlantic Ridge, a sign, she argued, that the ocean floor was splitting apart.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "board, and"
            },
            {
              "id": "B",
              "text": "board;"
            },
            {
              "id": "C",
              "text": "board,"
            },
            {
              "id": "D",
              "text": "board; however,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** What follows the blank is a new independent clause, and the semicolon in \"board;\" closes the first statement — supplement included — and joins the second to it.\n\n**The Full Solution:**\n- The sentence's first part ends inside a supplementary element set off by a dash (\"ships that she, as a woman, was not permitted to board\").\n- \"The profiles she drew revealed a rift valley ...\" is a complete independent clause, so the boundary between the statements must be sentence-strength.\n\n**Why the other choices are wrong:**\n- A: \"Board, and\" ties the new clause into the dash-opened supplement about the ships, as though the profiles were part of the description of ships Tharp could not board, garbling the sense.\n- C: A comma produces a comma splice between the two independent statements.\n- D: Punctuationally legal but logically wrong — \"however\" asserts a contrast, yet the rift valley's revelation is the payoff of Tharp's plotting, not a turn against it.",
          "_meta": {
            "rule": "semicolon closing a dash-opened supplement before a second independent clause; splice, faulty coordination, and illogical conjunctive-adverb distractors",
            "anchor": "Marie Tharp — Lamont; barred from research ships as a woman until 1968; identified the Mid-Atlantic Ridge rift valley from sounding profiles in 1952, interpreting it as seafloor spreading",
            "distractors": {
              "A": "coordination grafted onto the dash-opened supplement (sense failure)",
              "C": "comma splice",
              "D": "grammatical but illogical contrast ('however')"
            }
          }
        },
        {
          "id": 144,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Before 1933, maps of the London Underground placed every station where it actually stood, so the crowded center of the city was nearly unreadable. Harry Beck's diagram drew every line horizontally, vertically, or at forty-five ______ the result was so much easier to read that transit maps around the world now follow its approach.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "degrees,"
            },
            {
              "id": "B",
              "text": "degrees and"
            },
            {
              "id": "C",
              "text": "degrees"
            },
            {
              "id": "D",
              "text": "degrees, and"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** \"Harry Beck's diagram drew every line horizontally, vertically, or at forty-five degrees\" and \"the result was so much easier to read that transit maps around the world now follow its approach\" are both independent clauses. A comma followed by the coordinating conjunction \"and\" is one of the correct ways to join two independent clauses.\n\n**The Full Solution:**\n- Each side of the blank has its own subject and verb (\"diagram drew\" and \"result was\"), so each could stand alone as a sentence.\n- Two independent clauses can be joined by a comma plus a coordinating conjunction (and, but, so, or), by a semicolon, or separated with a period.\n- Only choice D supplies a comma and a coordinating conjunction.\n\n**Why the other choices are wrong:**\n- A: A comma alone between two independent clauses is a comma splice.\n- B: A coordinating conjunction joining two independent clauses needs a comma before it.\n- C: With no punctuation and no conjunction, the two clauses run together as a fused sentence.",
          "_meta": {
            "rule": "sentence boundary between two independent clauses (period vs. comma splice vs. fused sentence vs. uncommaed coordination)",
            "anchor": "Harry Beck's 1933 diagram of the London Underground",
            "distractors": {
              "A": "comma splice",
              "B": "fused sentence (no punctuation)",
              "C": "coordinating conjunction without the required comma"
            }
          }
        },
        {
          "id": 145,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Plumes of mineral-rich water from hydrothermal vents can spread for kilometers through the deep ocean. The chemistry of these plumes, which mix vent fluids with the surrounding seawater, ______ oceanographers a way to find undiscovered vent fields: towed instruments can detect the plumes long before a camera could spot the vents.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "offer"
            },
            {
              "id": "B",
              "text": "offers"
            },
            {
              "id": "C",
              "text": "are offering"
            },
            {
              "id": "D",
              "text": "have offered"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The subject is the singular \"chemistry,\" so the verb must be the singular \"offers.\"\n\n**The Full Solution:**\n- The intervening elements — \"of these plumes\" and the relative clause \"which mix vent fluids with the surrounding seawater\" — sit between subject and verb precisely to invite agreement with the nearer plural nouns.\n- Strip the interrupters and the agreement is plain: \"The chemistry ... offers oceanographers a way to find undiscovered vent fields.\"\n\n**Why the other choices are wrong:**\n- A: \"Offer\" is plural — it agrees with \"plumes\" or \"fluids,\" not the true subject \"chemistry.\"\n- C: \"Are offering\" is likewise plural, the same nearest-noun trap.\n- D: \"Have offered\" is plural as well; only the singular form matches the subject."
        },
        {
          "id": 149,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Several of Iceland's most active volcanoes lie buried beneath glaciers hundreds of meters thick. Erupting through this overlying ice, ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "enormous floods of meltwater known as jökulhlaups are released downstream, sometimes carrying more water than any river on Earth."
            },
            {
              "id": "B",
              "text": "these volcanoes melt vast chambers into the glacier above and release the water as sudden floods known as jökulhlaups, which can briefly carry more water than any river on Earth."
            },
            {
              "id": "C",
              "text": "scientists have recorded sudden floods known as jökulhlaups that can briefly carry more water than any river on Earth."
            },
            {
              "id": "D",
              "text": "the glacier above is melted into vast chambers, and sudden floods known as jökulhlaups are released that can briefly carry more water than any river on Earth."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The opening participial modifier \"Erupting through this overlying ice\" must sit next to what actually erupts — the volcanoes.\n\n**The Full Solution:**\n- Standard English requires an opening modifier's subject to follow it directly.\n- Only the volcanoes erupt, so the clause after the comma must begin with \"these volcanoes,\" as B does: \"these volcanoes melt vast chambers ... and release the water ....\"\n\n**Why the other choices are wrong:**\n- A: It hands the modifier to \"enormous floods of meltwater,\" but floods do not erupt through ice — they are the eruption's consequence.\n- C: It makes \"scientists\" the erupting party — the unintended absurdity typical of dangling modifiers.\n- D: It attaches the modifier to \"the glacier above,\" but the glacier is what gets melted through, not what erupts; its passive constructions also leave the true actor of \"erupting\" nowhere in the sentence."
        },
        {
          "id": 147,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Developed by dance theorist Rudolf Laban in the 1920s, Labanotation records human movement on a vertical staff read from bottom to top. Each of the system's symbols specifies the direction, level, and timing of a single action, allowing a trained reader to reconstruct an entire dance from ______ score alone.",
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
          "explanation": "**Choice A is correct.** The blank needs a possessive determiner with the singular antecedent \"an entire dance\" — \"its.\"\n\n**The Full Solution:**\n- The score belongs to the dance being reconstructed, so the blank must be possessive and singular.\n- \"Its\" is the possessive form of \"it\" and matches the antecedent exactly.\n\n**Why the other choices are wrong:**\n- B: \"It's\" contracts \"it is\"/\"it has,\" producing nonsense (\"from it is score alone\") — in this pair the apostrophe marks contraction, not possession.\n- C: \"Their\" is possessive but plural, and the score belongs to the singular \"an entire dance\" — the \"symbols\" do not own a score.\n- D: \"They're\" compounds both errors: a contraction rather than a possessive, and plural rather than singular."
        },
        {
          "id": 152,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Silica aerogels are among the lightest solids ever made: a sample can be more than 99 percent air, its silica forming a sparse scaffold through which heat travels poorly. Measurements show that the material's thermal conductivity can be lower than that of the still air in its pores. ______ a slab of aerogel resists the flow of heat even better than motionless air does.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Indeed,"
            },
            {
              "id": "B",
              "text": "In contrast,"
            },
            {
              "id": "C",
              "text": "Meanwhile,"
            },
            {
              "id": "D",
              "text": "In other words,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The final sentence translates the technical measurement into plain language rather than adding new information, and \"In other words\" is the transition that signals a restatement.\n\n**The Full Solution:**\n- The preceding sentence makes a technical claim: the aerogel's thermal conductivity can be lower than that of the still air in its pores.\n- The blank sentence says the same thing in everyday terms — the material resists heat flow better than motionless air does. No new evidence, no contrast: a restatement.\n- \"In other words\" is the conventional signal that a sentence rephrases the one before it.\n\n**Why the other choices are wrong:**\n- A: \"Indeed\" escalates to stronger or more striking evidence, but the final sentence adds no new evidence — it rephrases the measurement already given.\n- B: \"In contrast\" requires an opposition between the sentences; the second sentence agrees with, and restates, the first.\n- C: \"Meanwhile\" marks simultaneous but separate developments; there is only one continuous point here."
        },
        {
          "id": 150,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Neural machine translation systems, trained on vast collections of paired sentences, now render routine prose between major languages with striking fluency. ______ idioms still expose the systems' limits: because a phrase like \"spill the beans\" means something unrelated to beans, and because such phrases are rare in training data, the systems sometimes translate them word for word into fluent nonsense.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "Accordingly,"
            },
            {
              "id": "C",
              "text": "Likewise,"
            },
            {
              "id": "D",
              "text": "In other words,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The second sentence undercuts the record of success the first sentence builds, and \"Nevertheless\" concedes the success while introducing the persistent failure.\n\n**The Full Solution:**\n- First sentence: the systems render routine prose \"with striking fluency.\"\n- Second sentence: idioms \"still expose the systems' limits,\" down to word-for-word renderings that produce \"fluent nonsense.\"\n- A sentence that qualifies preceding praise needs a concessive contrast transition.\n\n**Why the other choices are wrong:**\n- B: \"Accordingly\" would present the idiom failures as a consequence of the fluency, inverting the logic.\n- C: \"Likewise\" would promise a second, parallel success, but the sentence delivers a shortcoming.\n- D: \"In other words\" would offer the idiom problem as a restatement of the fluency claim, though the sentences make opposing points."
        },
        {
          "id": 151,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "People infected with many pathogens shed viral genetic material into wastewater days before they feel ill enough to seek testing — and regardless of whether they are ever tested at all. ______ epidemiologists who sample sewage at treatment plants can register a coming surge of infections nearly a week before reported case counts begin to climb, giving hospitals time to prepare.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "By contrast,"
            },
            {
              "id": "B",
              "text": "As a result,"
            },
            {
              "id": "C",
              "text": "Nonetheless,"
            },
            {
              "id": "D",
              "text": "For instance,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The early-warning capability follows directly from early, test-independent shedding — a cause-and-effect relation that \"As a result\" expresses.\n\n**The Full Solution:**\n- First sentence: the mechanism — infected people shed viral material into wastewater days before seeking testing, and even when they never test.\n- Second sentence: what the mechanism makes possible — sewage sampling registers surges \"nearly a week before reported case counts begin to climb.\"\n\n**Why the other choices are wrong:**\n- A: \"By contrast\" requires an opposition, but the second sentence realizes the promise of the first rather than diverging from it.\n- C: \"Nonetheless\" concedes an obstacle the passage never raises — nothing in the first sentence makes the second surprising.\n- D: \"For instance\" would make the surveillance capability an example of people shedding virus, but it is a consequence of that fact, not an instance of it."
        },
        {
          "id": 153,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Art conservators repair and stabilize damaged artworks.",
              "A guiding principle of the field is reversibility: anything a conservator adds to an artwork should be removable later without harming the original.",
              "The principle guards against error, since treatments once considered safe have sometimes proved damaging.",
              "Conservators use adhesives that can be dissolved and fill losses with paints that can be removed.",
              "Varnishes chosen for reversibility can be lifted decades later without disturbing the artist's paint beneath."
            ],
            "goal": "The student wants to explain the principle of reversibility to an audience unfamiliar with art conservation."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "In art conservation, reversibility means that anything added to an artwork, such as an adhesive or a varnish, should be removable later without harming the original."
            },
            {
              "id": "B",
              "text": "Conservators use adhesives that can be dissolved and fill losses in damaged artworks with paints that can be removed."
            },
            {
              "id": "C",
              "text": "Because treatments once considered safe have sometimes proved damaging, art conservators face difficult decisions when they repair damaged artworks."
            },
            {
              "id": "D",
              "text": "Reversibility, a guiding principle of art conservation, explains why varnishes can be lifted from a painting decades after they are applied."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The goal demands the principle itself, explained for readers new to conservation — and A names the field, states the principle in full, and grounds it in the notes' examples.\n\n**The Full Solution:**\n- Two demands: explain the reversibility principle, and pitch it to readers who know nothing about art conservation.\n- Choice A does both: it names the field, states the principle (\"anything added to an artwork ... should be removable later without harming the original\"), and makes it concrete with the notes' examples of an adhesive and a varnish.\n\n**Why the other choices are wrong:**\n- B: It lists practices that follow from the principle without ever stating or naming it — an unfamiliar reader learns what conservators do but not the idea.\n- C: It introduces the field and a motivation but swerves to \"difficult decisions,\" a claim the notes do not contain, and never presents reversibility at all.\n- D: It names the principle but treats it as already understood, using it only to account for one fact about varnish — backwards for an audience that needs the principle explained, not applied."
        },
        {
          "id": 154,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Artificial light at night hides the stars and disrupts nocturnal wildlife such as migrating birds.",
              "DarkSky International certifies International Dark Sky Parks, which commit to strict outdoor-lighting standards.",
              "Certification is voluntary: a park applies and shows that its lighting meets the organization's standards.",
              "Some municipalities instead adopt lighting ordinances, local laws regulating the brightness, shielding, and color of outdoor fixtures.",
              "Ordinances are binding on residents and businesses and are enforced like other local codes."
            ],
            "goal": "The student wants to emphasize a difference between dark-sky certification and municipal lighting ordinances."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Dark-sky certification and lighting ordinances both respond to the problems caused by artificial light at night."
            },
            {
              "id": "B",
              "text": "Whereas dark-sky certification is a voluntary recognition that a park applies for, a lighting ordinance is a binding local law."
            },
            {
              "id": "C",
              "text": "DarkSky International certifies parks that commit to strict outdoor-lighting standards."
            },
            {
              "id": "D",
              "text": "Lighting ordinances regulate outdoor fixtures, and parks seeking dark-sky certification must likewise show that their lighting meets DarkSky International's standards."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The goal asks for a difference, and B is built on the notes' sharpest contrast: voluntary certification versus a binding ordinance, held against each other in a single \"Whereas...\" sentence.\n\n**The Full Solution:**\n- The notes' clearest distinction: certification is \"voluntary\" and sought by the park, while an ordinance is \"binding\" and \"enforced like other local codes.\"\n- Emphasizing a difference requires setting the two approaches against each other, which B's construction does directly.\n\n**Why the other choices are wrong:**\n- A: It does the opposite of the goal, foregrounding what the approaches share — a common motivation.\n- C: It describes certification alone; with only one approach on the page, no difference can be emphasized.\n- D: It mentions both approaches but its \"likewise\" welds them together on a similarity (both involve lighting standards), suppressing precisely the voluntary-versus-binding distinction the notes make available."
        }
      ]
    }
  ]
};

export default practiceTest1RW;
