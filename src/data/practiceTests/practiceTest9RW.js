// Practice Test 9 — SAT Reading & Writing (R&W)
// R&W seating varied 2026-09-07 (scripts/varyRWSeating.mjs): items re-dealt inside their official skill blocks with a per-test seed — block flow and per-skill counts unchanged.
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test9/. Do not hand-edit this file —
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


export const practiceTest9RW = {
  id: "practice-test-9-rw",
  title: "Practice Test 9 — Reading & Writing",
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
          "id": 902,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A peat bog is a difficult place for the microbes of decay. Sphagnum moss acidifies the water around it and contains compounds that ______ bacterial growth, and the cold, oxygen-poor water does the rest: leather, wood, and even human skin can rest in a bog for centuries with surprisingly little change.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "encourage"
            },
            {
              "id": "B",
              "text": "suppress"
            },
            {
              "id": "C",
              "text": "conceal"
            },
            {
              "id": "D",
              "text": "imitate"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The passage explains why decay stalls in a bog, so the moss's compounds must hold bacterial growth back — they \"suppress\" it.\n\n**The Full Solution:**\n- The opening states the effect to be explained: a bog is \"a difficult place for the microbes of decay.\"\n- Everything that follows is a cause of that difficulty — acidified water, cold oxygen-poor water — and the result is centuries of preservation.\n- The blank must continue the causal chain: compounds that hold bacteria down, which is what \"suppress\" means.\n\n**Why the other choices are wrong:**\n- A: \"Encourage\" reverses the logic — helped bacteria would mean faster decay, not preservation.\n- C: \"Conceal\" means to hide from view; bacteria are not being hidden, they are being stopped.\n- D: \"Imitate\" would have the compounds mimicking bacterial growth, an idea nothing in the passage supports.",
          "_meta": {}
        },
        {
          "id": 904,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The following text is adapted from William Hazlitt's 1822 essay \"On Going a Journey.\"\n\nOne of the pleasantest things in the world is going a journey; but I like to go by myself. I can enjoy society in a room; but out of doors, nature is ______ enough for me. I am then never less alone than when alone. The soul of a journey is liberty, perfect liberty, to think, feel, do, just as one pleases.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "company"
            },
            {
              "id": "B",
              "text": "entertainment"
            },
            {
              "id": "C",
              "text": "instruction"
            },
            {
              "id": "D",
              "text": "shelter"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence balances two settings against each other — \"society in a room\" indoors, and something nature supplies outdoors — so the blank needs the outdoor counterpart of society: \"company.\"\n\n**The Full Solution:**\n- The structure is a contrast hinged on \"but\": indoors the speaker enjoys society; outdoors, nature takes over that role.\n- The next sentence confirms the reading — \"never less alone than when alone\" — nature keeps him company so completely that solitude does not feel solitary.\n- \"Company\" is the one word that answers \"society\" directly.\n\n**Why the other choices are wrong:**\n- B: \"Entertainment\" is not the counterpart of \"society,\" and the following sentence is about aloneness, not amusement.\n- C: Nothing in the text presents nature as a teacher; \"instruction\" breaks the society-versus-solitude contrast.\n- D: \"Shelter\" is a physical protection, which reverses the scene — the speaker is happily out of doors, not seeking cover.",
          "_meta": {
            "anchor": "William Hazlitt — \"On Going a Journey\" (Table-Talk, vol. 2, 1822); genuine public-domain excerpt with one word blanked (two non-adjacent passages joined, hence \"adapted\")",
            "quoteVerify": true,
            "source": "William Hazlitt, Table-Talk: Essays on Men and Manners, vol. 2 (1822), essay \"On Going a Journey\" — verified against Wikisource Table-Talk/Volume 2/Essay 3; blanked word is \"company\""
          }
        },
        {
          "id": 901,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In the desert city of Yazd, in central Iran, tall towers rise above the rooftops of many older houses. Travelers sometimes take the structures to be purely ______, but each tower is a working device: openings at its top catch passing breezes and channel them down into the rooms below, keeping the house livable through the hottest months.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "practical"
            },
            {
              "id": "B",
              "text": "traditional"
            },
            {
              "id": "C",
              "text": "fragile"
            },
            {
              "id": "D",
              "text": "decorative"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The sentence sets up a contrast with \"but\": what travelers assume must be the opposite of \"a working device,\" and \"decorative\" — for show rather than for use — is that opposite.\n\n**The Full Solution:**\n- The clause after \"but\" corrects the travelers' assumption: the towers actually do a job, catching breezes and cooling the house.\n- The blank therefore needs a word meaning \"for appearance only,\" and \"purely decorative\" delivers exactly that mistaken impression.\n\n**Why the other choices are wrong:**\n- A: \"Practical\" is what the towers really are — it destroys the contrast the sentence builds with \"but.\"\n- B: The towers may well be traditional, but that quality sets up no contrast with \"a working device\" — the sentence opposes appearance to function, not old to new.\n- C: Nothing in the text concerns the towers' sturdiness, and \"fragile\" sets up no contrast with \"a working device.\""
        },
        {
          "id": 903,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The vicuña, a wild Andean relative of the alpaca, yields its prized fleece only ______: in the traditional roundups known as chaccu, herders gather the free-ranging animals no more than once every two to three years, shear each one, and release the herd unharmed.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "reluctantly"
            },
            {
              "id": "B",
              "text": "seasonally"
            },
            {
              "id": "C",
              "text": "sparingly"
            },
            {
              "id": "D",
              "text": "profitably"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The clause after the colon restates the blank in concrete terms — gatherings no more than once every two to three years — and \"sparingly\" is the word that sums up such restrained, infrequent harvests.\n\n**The Full Solution:**\n- The colon signals that what follows spells out the blank's meaning.\n- The details are all about restraint and infrequency: gatherings years apart, each animal shorn and released unharmed.\n- \"Sparingly\" — in small amounts, with restraint — is the precise one-word restatement of that pattern.\n\n**Why the other choices are wrong:**\n- A: \"Reluctantly\" attributes unwillingness to an animal; the text describes quantity and frequency, not attitude.\n- B: \"Seasonally\" implies a yearly rhythm, but the roundups happen only once every two to three years.\n- D: \"Profitably\" concerns money, which the sentence never mentions; the colon's details describe scarcity, not earnings.",
          "_meta": {}
        },
        {
          "id": 906,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is from Jerome K. Jerome's 1889 novel Three Men in a Boat. The narrator is spending an evening with his friends.\n\nThere were four of us—George, and William Samuel Harris, and myself, and Montmorency. We were sitting in my room, smoking, and talking about how bad we were—bad from a medical point of view I mean, of course. We were all feeling seedy, and we were getting quite nervous about it. Harris said he felt such extraordinary fits of giddiness come over him at times, that he hardly knew what he was doing; and then George said that he had fits of giddiness too, and hardly knew what he was doing.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To introduce a group of companions by portraying, with gentle humor, their shared conviction that they are all unwell."
            },
            {
              "id": "B",
              "text": "To explain the underlying medical condition responsible for the mysterious symptoms that the narrator and his two friends describe in turn."
            },
            {
              "id": "C",
              "text": "To contrast the narrator's sturdy good health with the imagined ailments of his two anxious friends."
            },
            {
              "id": "D",
              "text": "To recount the disagreement that arose when the friends could not agree on the cause of their dizziness."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The passage's work is introduction: it names the four companions, sets the scene, and establishes the running joke — everyone is convinced he is ill, and the complaints echo one another word for word.\n\n**The Full Solution:**\n- The opening sentence performs a roll call of the group; the rest shows them at their characteristic occupation, cataloging their ailments.\n- The humor is in the repetition — George's giddiness copies Harris's down to \"hardly knew what he was doing\" — signaling that the illness is shared performance, not diagnosis.\n- Choice A captures both jobs: introducing the companions and conveying the comic self-pity that unites them.\n\n**Why the other choices are wrong:**\n- B: No condition is ever explained; the symptoms are traded, not diagnosed.\n- C: The narrator includes himself among the sufferers (\"how bad we were\"), so there is no healthy figure to contrast with.\n- D: The friends agree entirely — each claims the same complaint — and no dispute about causes occurs.",
          "_meta": {
            "anchor": "Jerome K. Jerome — Three Men in a Boat (1889), opening; genuine public-domain excerpt",
            "quoteVerify": true,
            "source": "Jerome K. Jerome, Three Men in a Boat (To Say Nothing of the Dog), Chapter I (1889)"
          }
        },
        {
          "id": 905,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is from Christina Rossetti's 1861 poem \"Up-Hill.\"\n\nDoes the road wind up-hill all the way? / Yes, to the very end. / Will the day's journey take the whole long day? / From morn to night, my friend. // But is there for the night a resting-place? / A roof for when the slow dark hours begin. / May not the darkness hide it from my face? / You cannot miss that inn.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "One speaker describes a difficult journey in vivid detail, and a second speaker then argues that the journey is not worth undertaking."
            },
            {
              "id": "B",
              "text": "The text alternates between an account of a road by daylight and an account of the same road after nightfall."
            },
            {
              "id": "C",
              "text": "A series of questions about a journey, each posed by one speaker, is answered in turn by a second speaker."
            },
            {
              "id": "D",
              "text": "A traveler recalls the stages of a finished journey and reflects on the lessons each stage offered."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Every line of the poem is either a question or its answer: one voice asks about the road, the day's length, a resting place, and finding it; a second voice answers each in turn.\n\n**The Full Solution:**\n- The alternation is strict — question, answer, question, answer — through both stanzas.\n- The answering voice is distinct from the asking voice (\"my friend,\" \"You cannot miss that inn\"), confirming a two-speaker exchange.\n- Choice C names exactly that structure: questions posed by one speaker, answered in turn by a second.\n\n**Why the other choices are wrong:**\n- A: No one argues against the journey — the answering voice reassures the questioner rather than discouraging the trip.\n- B: The day-night contrast belongs to the journey being asked about, not to the text's organization, which is dialogue rather than alternating description.\n- D: The journey has not happened yet — the questions look ahead to it — and no lessons are drawn from completed stages.",
          "_meta": {
            "anchor": "Christina Rossetti — \"Up-Hill\" (1861); genuine public-domain excerpt, stanzas 1-2 verbatim",
            "quoteVerify": true,
            "source": "Christina Rossetti, \"Up-Hill,\" first published in Macmillan's Magazine (1861), collected in Goblin Market and Other Poems (1862)"
          }
        },
        {
          "id": 907,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "In the 1790s, the French inventor Claude Chappe built a chain of signal towers between Paris and Lille, each topped with a movable beam carrying two pivoting arms. An operator set the arms to a coded position; the next tower, watching through a telescope, copied the position, and the signal leapt from hilltop to hilltop. A short message could cross the 230-kilometer line in well under an hour — a journey of more than a day on horseback. The system had a fatal dependence, however: it needed daylight and clear weather, and by the 1850s the electric telegraph, which needed neither, had made Chappe's towers obsolete.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It follows a single message on its journey from Paris to Lille, pausing at each of the towers to describe the work performed there."
            },
            {
              "id": "B",
              "text": "It explains how a communication system worked, illustrates its speed, and then identifies the weakness that led to its replacement."
            },
            {
              "id": "C",
              "text": "It argues that a neglected invention deserves more credit than the technology that ultimately superseded it."
            },
            {
              "id": "D",
              "text": "It compares two competing signaling systems of the 1790s and explains why one attracted government support."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text moves through three stages: mechanism (beam and arms, telescopes, tower-to-tower relay), a measure of the system's power (well under an hour versus more than a day on horseback), and finally the limitation — dependence on daylight and weather — that let the electric telegraph displace it.\n\n**The Full Solution:**\n- Sentences one through three explain how the system worked.\n- Sentence four quantifies the achievement with the horseback comparison.\n- The closing sentence pivots on \"however\" to the fatal weakness and the replacement it invited, completing the arc that choice B describes.\n\n**Why the other choices are wrong:**\n- A: No single message is followed; the tower-to-tower description is general, not a narrated journey.\n- C: The text evaluates nothing — it reports the system's strengths and weakness without pleading for its reputation.\n- D: Only one system from the 1790s appears; the electric telegraph arrives later as a successor, not a contemporary rival.",
          "_meta": {}
        },
        {
          "id": 908,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Excavating at Chavín de Huántar, a 3,000-year-old temple complex in the Peruvian Andes, the archaeologist John Rick has explored narrow stone galleries that channel and distort sound. Conch-shell trumpets recovered at the site produce loud, roaring tones, and the galleries carry and reshape that sound as it travels. Rick interprets these effects as instruments of authority: by staging overwhelming sensory experiences that only they could control, the temple's priests demonstrated seemingly supernatural power to visiting pilgrims."
            },
            {
              "label": "Text 2",
              "text": "Acoustic measurements at Chavín de Huántar have confirmed that the galleries transmit and transform the sound of conch-shell trumpets, producing disorienting effects that can be reproduced and quantified today. But demonstrating an effect is not the same as demonstrating a plan. Any building alters sound whether or not its makers intend it to, so tying the galleries' acoustics to deliberate design requires independent evidence about how the builders used and modified these spaces over time."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the interpretation presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "The author would caution that the acoustic effects, though real and measurable, do not by themselves show that the galleries were built to produce them."
            },
            {
              "id": "B",
              "text": "The author would deny that the galleries at Chavín de Huántar meaningfully alter the sound of the trumpets played inside them."
            },
            {
              "id": "C",
              "text": "The author would argue that the conch-shell trumpets were most likely played in the open plaza rather than within the temple's galleries."
            },
            {
              "id": "D",
              "text": "The author would agree that the priests deliberately engineered the galleries' acoustics but would doubt that pilgrims found the resulting effects disorienting."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The author of Text 2 confirms the effects but qualifies the inference drawn from them: \"demonstrating an effect is not the same as demonstrating a plan.\" Rick's interpretation treats the acoustics as engineered for authority; the author of Text 2 would answer that intent needs independent evidence.\n\n**The Full Solution:**\n- Text 1's claim has two layers: the galleries produce striking effects, and the builders designed them to do so.\n- Text 2 accepts the first layer outright — the effects \"can be reproduced and quantified today.\"\n- Its reservation targets the second layer only: buildings alter sound regardless of intent, so design must be established separately. That is precisely the caution choice A states.\n\n**Why the other choices are wrong:**\n- B: It reverses Text 2's position — the author reports measurements confirming the galleries' effects on sound.\n- C: Neither text raises the question of where the trumpets were played; Text 2 concerns the galleries themselves.\n- D: It grants the very point Text 2 declines to grant — deliberate engineering — and invents a doubt about pilgrims' reactions that the author never expresses.",
          "_meta": {
            "anchor": "John Rick (Stanford) directs excavations at Chavín de Huántar and interprets its galleries and sensory effects as instruments of priestly authority (Wikipedia: Chavín de Huántar). Text 2 is an unattributed methodological caution; the 2026-10-04 fact review removed a skeptical position previously attributed to Miriam Kolar, whose published stance it did not match."
          }
        },
        {
          "id": 911,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Histories of the Pacific Coast salmon-canning industry long dwelt on fleets and machinery, treating the workforce as interchangeable hands. The canneries' own records tell another story. Labor contractors assembled experienced crews — many of them Chinese, and later Japanese and Filipino, immigrants — whose members held distinct skilled positions, from butchers who could clean a fish in seconds to solderers whose seams determined whether a can spoiled. The quality of a season's pack varied with the crew, and cannery owners competed to engage the most practiced ones. The industry's output, in short, rested on expertise its own chroniclers rarely acknowledged.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Pacific Coast salmon canneries succeeded mainly because new machinery soon removed any need for experienced or specialized workers."
            },
            {
              "id": "B",
              "text": "Labor contractors weakened the canning industry by forcing cannery owners to compete with one another for a limited number of crews."
            },
            {
              "id": "C",
              "text": "The salmon-canning industry's records were kept too carelessly to reveal much about how its workforce was organized."
            },
            {
              "id": "D",
              "text": "Cannery records reveal a skilled, specialized workforce on which the industry's output depended, contrary to older histories."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text corrects an old picture: histories treated cannery workers as \"interchangeable hands,\" but the records reveal skilled, differentiated crews whose expertise determined the pack. Choice D states that corrected view.\n\n**The Full Solution:**\n- The first sentence gives the received account; the second announces the correction (\"tell another story\").\n- The evidence follows: distinct skilled positions, pack quality varying with the crew, owners competing for the best ones.\n- The final sentence draws the conclusion D paraphrases — output rested on unacknowledged expertise.\n\n**Why the other choices are wrong:**\n- A: It repeats the machinery-centered account the text is written to correct, and the passage says skill, not automation, drove output.\n- B: Owners' competition for crews is presented as proof of the crews' value, not as a weakness of the industry.\n- C: The records are the text's best evidence — they are revealing, not careless.",
          "_meta": {}
        },
        {
          "id": 916,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "A nocturnal is a small instrument, usually of brass or wood, that tells time at night from the rotation of the stars around the North Star. Some surviving nocturnals are engraved with tide tables for important ports, information of use mainly to someone bringing a ship into harbor. The instrument was also explained in practical navigation manuals of the sixteenth century, written in Spanish, English, and other everyday languages rather than in scholarly Latin. Taken together, these details suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "most nocturnals were made as ornamental gifts for wealthy patrons and were rarely, if ever, used to tell time."
            },
            {
              "id": "B",
              "text": "the nocturnal served as a working tool for navigators rather than as a curiosity for collectors."
            },
            {
              "id": "C",
              "text": "reading a nocturnal demanded formal training in astronomy that few sailors of the period possessed."
            },
            {
              "id": "D",
              "text": "nocturnals had displaced sundials as the most common timekeeping instruments of the sixteenth century."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Each detail points the same way — toward practical use at sea — and B draws exactly that general conclusion, without going beyond it.\n\n**The Full Solution:**\n- Tide tables for ports matter to someone piloting a ship into harbor, not to someone displaying an ornament.\n- The instrument was explained in practical navigation manuals, the handbooks of working seamen.\n- Those manuals were written in everyday languages rather than scholarly Latin, implying an audience of ordinary practitioners.\n- The generalization these premises support is working use by navigators — precisely B.\n\n**Why the other choices are wrong:**\n- A: Tide tables and navigation manuals point to use, contradicting a picture of unused ornaments.\n- C: Manuals in everyday languages argue the opposite — the device was explained for readers without scholarly training.\n- D: The text never mentions sundials or compares the instruments' popularity; \"most common\" outruns the evidence entirely.",
          "_meta": {
            "anchor": "Nocturnal (instrument), Wikipedia: brass or wood; important in piloting for tides, some carry tide charts for ports; popularized by Martín Cortés de Albacar's Spanish Arte de Navegar (1551), translated into English (1561)."
          }
        },
        {
          "id": 914,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "When deep artesian wells were first bored into a confined aquifer beneath a growing city, water rose to the surface under natural pressure alone. Hydrologists note that each new borehole drew on the same body of pressurized groundwater, and they conclude that the aquifer's pressure fell steadily as more wells tapped it because ______",
          "questionTable": {
            "type": "table",
            "caption": "Flow of two artesian wells tapping the same confined aquifer",
            "headers": [
              "Well",
              "Year completed",
              "Initial flow (cubic meters per day)",
              "Flow 40 years later (cubic meters per day)"
            ],
            "rows": [
              [
                "Well 1",
                "1880",
                "3,600",
                "800"
              ],
              [
                "Well 2",
                "1900",
                "17,000",
                "5,900"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "Well 2's initial flow, at 17,000 cubic meters per day, was nearly five times Well 1's initial flow, and Well 2 was completed two decades after Well 1."
            },
            {
              "id": "B",
              "text": "Well 1 was completed in 1880, twenty years before the drilling of Well 2 was finished."
            },
            {
              "id": "C",
              "text": "forty years after completion, Well 1's flow had fallen from 3,600 cubic meters per day to 800, and Well 2's from 17,000 to 5,900."
            },
            {
              "id": "D",
              "text": "Well 2 still delivered more water forty years after its completion than Well 1 had delivered when it was first completed in 1880."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** A claim about steadily falling pressure needs evidence of decline over time at the wells drawing on the aquifer, and C alone provides it: both wells' flows fell to a fraction of their initial rates.\n\n**The Full Solution:**\n- Flow from an artesian well is driven by aquifer pressure, so falling flow is the table's proxy for falling pressure.\n- C reads the decline out of both rows — Well 1 down almost 80 percent, Well 2 down about two-thirds — matching the claim's scope (the aquifer, not one well).\n\n**Why the other choices are wrong:**\n- A: A comparison of the two wells' starting flows and completion dates describes their size and age, not any change in pressure over time.\n- B: The completion dates alone contain no information about flow or pressure.\n- D: True in the table, but it invites the wrong inference — highlighting how much Well 2 still produced obscures the fact that both wells' flows were falling sharply.",
          "_meta": {
            "anchor": "Unattributed, illustrative well data (2026-10-04 fact review: the earlier version attached invented flow figures to the real Grenelle and Passy wells in Paris; Grenelle's documented flow c. 1900 was about 430 m3/day, not 800)."
          }
        },
        {
          "id": 909,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The Hanseatic League, an association of trading towns around the Baltic and North Seas, dominated northern European commerce for three centuries without possessing a treasury, a standing army, or a permanent administrative body. Its power operated through privileges: member merchants secured exclusive trading rights, exemptions from tolls, and their own self-governing compounds — known as kontors — in foreign ports from London to Novgorod. A town that flouted the League's decisions risked exclusion from this web of privileges, a penalty severe enough to hold hundreds of fiercely independent towns in loose but durable alignment.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The Hanseatic League declined because it never acquired the treasury and army that its commercial rivals eventually possessed."
            },
            {
              "id": "B",
              "text": "The kontors that the League maintained in foreign ports mattered more to its overall success than the exclusive trading rights that its merchants enjoyed in other places."
            },
            {
              "id": "C",
              "text": "Member towns of the Hanseatic League routinely defied its decisions because the League had no formal machinery for punishing them."
            },
            {
              "id": "D",
              "text": "The Hanseatic League sustained lasting commercial power not through the institutions of a state but through privileges its member towns could not afford to lose."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text's arc runs from a puzzle — three centuries of dominance with no treasury, army, or permanent administration — to its resolution: power \"operated through privileges,\" enforced by the threat of exclusion. Choice D restates exactly that.\n\n**The Full Solution:**\n- Sentence one sets up the paradox: dominance without the standard equipment of a state.\n- Sentences two and three resolve it — exclusive rights, toll exemptions, and kontors bound members together, and losing them was \"a penalty severe enough\" to keep towns aligned.\n- D captures both halves: not state machinery, but indispensable privileges.\n\n**Why the other choices are wrong:**\n- A: The text describes the League's lasting power, not its decline, and never presents the missing institutions as a cause of failure.\n- B: The kontors are one item in a list of privileges; the text never ranks them above the others.\n- C: It inverts the final sentence — the threat of exclusion kept towns in alignment precisely despite the absence of formal machinery.",
          "_meta": {}
        },
        {
          "id": 910,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Inside a harmonica or an accordion, each note is produced by a free reed — a thin metal tongue riveted over a close-fitting slot. Air blown past the tongue makes it swing back and forth through the slot, chopping the airstream into regular pulses that the ear hears as a pitch. Because that pitch is set by the tongue's own length and stiffness rather than by anything the player does, a free reed sounds the same note no matter how forcefully the air arrives: blowing harder makes the tone louder, not higher.",
          "question": "According to the text, why does a free reed produce the same pitch regardless of how hard a player blows?",
          "choices": [
            {
              "id": "A",
              "text": "The slot beneath the tongue narrows automatically whenever the airstream strengthens."
            },
            {
              "id": "B",
              "text": "The pitch is determined by the length and stiffness of the metal tongue itself."
            },
            {
              "id": "C",
              "text": "Players adjust their technique continuously to compensate for changes in air pressure."
            },
            {
              "id": "D",
              "text": "The rivet that anchors the tongue absorbs any extra force the airstream delivers."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text states the reason directly: the pitch \"is set by the tongue's own length and stiffness rather than by anything the player does.\"\n\n**The Full Solution:**\n- The question asks for the text's stated cause, and the third sentence supplies it in so many words.\n- The consequence follows in the same sentence: harder blowing changes loudness, not pitch — confirming that the note is fixed by the tongue's physical properties.\n\n**Why the other choices are wrong:**\n- A: The text never says the slot changes size; it is described only as \"close-fitting.\"\n- C: The explanation given is mechanical, not a matter of player skill — the text says the pitch is set \"rather than by anything the player does.\"\n- D: The rivet appears only as the tongue's mounting; no force-absorbing role is mentioned anywhere."
        },
        {
          "id": 913,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Vicuña fiber sells for many times the price of alpaca fiber, though both animals are shorn for fine textiles. Textile economists attribute the premium to two factors working together — the vicuña fiber's extreme fineness and its scarcity — rather than to either factor alone. Data on fleece-bearing animals support the economists' account because ______",
          "questionTable": {
            "type": "table",
            "caption": "Fiber characteristics of four fleece-bearing animals",
            "headers": [
              "Animal",
              "Mean fiber diameter (microns)",
              "Fleece yield per shearing (kg)",
              "Typical shearing interval (years)"
            ],
            "rows": [
              [
                "Vicuña",
                "12.0",
                "0.2",
                "3"
              ],
              [
                "Cashmere goat",
                "17.0",
                "0.4",
                "1"
              ],
              [
                "Merino sheep",
                "19.5",
                "4.3",
                "1"
              ],
              [
                "Alpaca (huacaya)",
                "26.0",
                "2.7",
                "1"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "the alpaca has the largest mean fiber diameter of the four animals, at 26.0 microns, and is shorn every year, as are the cashmere goat and the merino sheep."
            },
            {
              "id": "B",
              "text": "the merino sheep, which is shorn every year, yields more fleece per shearing than the other three animals in the table combined."
            },
            {
              "id": "C",
              "text": "the vicuña has both the finest fiber listed, at 12.0 microns, and the smallest, least frequent yield: 0.2 kilograms every three years."
            },
            {
              "id": "D",
              "text": "the cashmere goat's fiber is finer than the alpaca's even though both animals are shorn every year and the goat yields far less fleece per shearing."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The economists' account rests on two factors together — fineness and scarcity — so the completing evidence must document both, and only C does: the finest fiber in the table and by far the smallest, least frequent yield.\n\n**The Full Solution:**\n- Fineness: the vicuña's 12.0 microns is the lowest diameter listed.\n- Scarcity: 0.2 kilograms per shearing, and only every three years — a tiny fraction of the alpaca's 2.7 kilograms every year.\n- C cites both columns in one statement, matching the claim's two-factor structure.\n\n**Why the other choices are wrong:**\n- A: A fact about the alpaca's coarseness touches one factor for the wrong animals and says nothing about scarcity.\n- B: The merino's large yield is true in the table but irrelevant to why vicuña fiber commands a premium.\n- D: A comparison between cashmere and alpaca never engages the vicuña, the animal the claim is about.",
          "_meta": {
            "anchor": "Unattributed fiber table; values plausible. Vicuña ~12 microns and shorn only every three years per Wikipedia (Vicuña); cashmere 14-19 microns."
          }
        },
        {
          "id": 912,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Seabird ecologists commonly estimate the size of cliff-nesting colonies from photographs taken during the breeding season, counting every bird visible on the ledges. A monitoring team argues that such counts systematically understate the number of breeding pairs, since at any given moment one member of a pair is typically away from the ledge, feeding at sea.",
          "question": "Which finding, if true, would most directly support the team's claim?",
          "choices": [
            {
              "id": "A",
              "text": "At colonies where breeding pairs were individually tracked at their nest sites, single-day ledge photographs captured only about two-thirds of the pairs known to be breeding there."
            },
            {
              "id": "B",
              "text": "Photographic counts of the same colony taken in successive years often differ from one another by more than ten percent."
            },
            {
              "id": "C",
              "text": "Birds visible on the ledges in photographs include some nonbreeding individuals that have not formed pairs."
            },
            {
              "id": "D",
              "text": "Photographic counts of cliff colonies are generally made by two independent observers, whose totals for the same photographed image can differ from each other by several percentage points."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The claim is that photographs undercount breeding pairs. A finding that photographs captured only two-thirds of pairs independently verified at their nests is direct evidence of exactly that shortfall.\n\n**The Full Solution:**\n- To support an undercount claim, a finding must compare photographic counts against a more complete, independent measure of the same colonies.\n- Choice A supplies that comparison — tracked pairs as ground truth, photographs falling a third short — in the direction the team predicts.\n\n**Why the other choices are wrong:**\n- B: Year-to-year variation shows the counts are noisy, not that they are biased low; the differences could run in either direction.\n- C: Nonbreeders on the ledges would inflate the count of apparent breeders — evidence for an overcount, the opposite of the claim.\n- D: Disagreement between observers reading the same image is measurement noise; it says nothing about how photographic counts compare with the true number of pairs."
        },
        {
          "id": 915,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Steller's sea cow, a massive northern relative of the manatee, entered the scientific record in 1741, when the naturalist Georg Wilhelm Steller studied the animals in the shallows of the Commander Islands. By 1768 the species was gone. The sea cows were slow, buoyant, and unable to dive; the entire population was confined to a single small archipelago; and after the expedition's route became known, fur-trading crews began stopping at the islands regularly, killing the animals to provision their ships. Given how swiftly the end came, researchers infer that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "the sea cows had been common along coasts throughout the North Pacific when Steller first described them in 1741."
            },
            {
              "id": "B",
              "text": "the fur-trading crews valued the sea cows chiefly for their hides rather than as a source of food for their voyages."
            },
            {
              "id": "C",
              "text": "the species would have disappeared just as quickly even if the expedition's route had never become known to fur traders."
            },
            {
              "id": "D",
              "text": "the animals' vulnerability, combined with steady hunting after the expedition, drove the species to extinction."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The passage assembles a cause on each side — defenseless, concentrated animals; regular provisioning stops that began once the route was known — and the twenty-seven-year collapse is the effect those causes jointly explain.\n\n**The Full Solution:**\n- Vulnerability alone had not eliminated the species before 1741; the animals were there for Steller to study.\n- What changed afterward was sustained hunting pressure, arriving precisely when the islands entered the traders' routes.\n- The inference that fits both premises is the conjunction D states: vulnerability plus new, steady hunting produced extinction by 1768.\n\n**Why the other choices are wrong:**\n- A: The passage says the entire population \"was confined to a single small archipelago\" — the opposite of a species common across the North Pacific.\n- B: The text says the crews killed the animals \"to provision their ships\" — for food, not hides.\n- C: It severs the causal link the passage builds — without the route's discovery, the hunting that followed it has no explanation.",
          "_meta": {
            "anchor": "Georg Wilhelm Steller — naturalist on the 1741 Bering expedition; registered in researchers.json"
          }
        },
        {
          "id": 917,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "When the Statue of Liberty was dedicated in 1886, its copper skin was reddish-brown and ______ however, within a few decades, the copper had reacted with air and rainwater to form the green patina that visitors see today.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "shiny,"
            },
            {
              "id": "B",
              "text": "shiny"
            },
            {
              "id": "C",
              "text": "shiny;"
            },
            {
              "id": "D",
              "text": "shiny, and"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Two independent clauses meet at the blank, and the second begins with the conjunctive adverb \"however\" — the conventional join is a semicolon before \"however\" and a comma after it.\n\n**The Full Solution:**\n- Left of the blank is a complete sentence: \"When the Statue of Liberty was dedicated in 1886, its copper skin was reddish-brown and shiny.\"\n- Right of the blank is another: \"within a few decades, the copper had reacted with air and rainwater...\"\n- \"However\" belongs to the second clause, so the boundary must be strong enough to separate full sentences: \"shiny; however, within a few decades...\"\n\n**Why the other choices are wrong:**\n- A: A comma alone between two independent clauses is a comma splice; \"however\" cannot carry the join.\n- B: With no punctuation at all, the two sentences fuse into a run-on.\n- D: \"And\" plus \"however\" stacks two connectors on one boundary, garbling the sentence (\"shiny, and however, within...\").",
          "_meta": {
            "anchor": "Statue of Liberty (Wikipedia): dedicated 1886; \"When built, the statue was reddish-brown and shiny, but within twenty years it had oxidized to its current green color\"; re-authored 2026-10-04 (previous item restated an unverified listener experiment at Chavín, a subject already used in q08/q50)."
          }
        },
        {
          "id": 918,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "A network of river gauges strung along the lower Mississippi ______ forecasters with hourly readings of the water's height, so that towns downstream can be warned days before a flood crest arrives.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "provide"
            },
            {
              "id": "B",
              "text": "are providing"
            },
            {
              "id": "C",
              "text": "have provided"
            },
            {
              "id": "D",
              "text": "provides"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The subject is the singular \"network,\" so the verb must be the singular \"provides.\"\n\n**The Full Solution:**\n- \"Of river gauges strung along the lower Mississippi\" is a prepositional phrase between subject and verb; it does not change the subject's number.\n- Strip the phrase and the agreement is plain: \"A network... provides forecasters with hourly readings.\"\n\n**Why the other choices are wrong:**\n- A: A plural verb agreeing with the nearby \"gauges\" rather than with the true subject — the classic nearest-noun trap.\n- B: Plural again, and the progressive adds nothing the sentence needs.\n- C: The plural \"have\" fails agreement, and the perfect tense clashes with the sentence's statement of an ongoing arrangement."
        },
        {
          "id": 920,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The emperor Frederick II wrote his treatise on falconry in the 1240s, near the end of his reign. By the time he began writing, he ______ years flying hawks and keeping as many as fifty falconers at his court — experience he trusted above the claims of ancient authorities.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "spends"
            },
            {
              "id": "B",
              "text": "had spent"
            },
            {
              "id": "C",
              "text": "has spent"
            },
            {
              "id": "D",
              "text": "will have spent"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The sentence describes one past action completed before another past moment — the years with hawks came before he began writing — and that sequence takes the past perfect, \"had spent.\"\n\n**The Full Solution:**\n- The time frame is anchored in the past: \"By the time he began writing...\"\n- The years of falconry preceded that past moment, so the verb must reach further back than the simple past: \"he had spent years flying hawks.\"\n\n**Why the other choices are wrong:**\n- A: The present tense breaks the passage's past narrative frame.\n- C: The present perfect connects a past action to the present moment, but the reference point here (\"began\") is itself in the past.\n- D: The future perfect points forward from now, which contradicts events set in the thirteenth century.",
          "_meta": {}
        },
        {
          "id": 922,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Neither of the two small moons of Mars ______ enough mass to pull itself into a sphere, so Phobos and Deimos remain irregular, lumpy bodies, each far smaller than Earth's Moon.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "possess"
            },
            {
              "id": "B",
              "text": "are possessing"
            },
            {
              "id": "C",
              "text": "possesses"
            },
            {
              "id": "D",
              "text": "have possessed"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject is the singular pronoun \"Neither,\" which takes a singular verb: \"possesses.\"\n\n**The Full Solution:**\n- \"Of the two small moons of Mars\" is a prepositional phrase; the plural \"moons\" inside it is not the subject.\n- \"Neither\" is grammatically singular — it means \"not one of the two\" — so the verb must be singular, as the singular pronoun \"itself\" later in the clause confirms.\n\n**Why the other choices are wrong:**\n- A: A plural verb drawn to the nearby \"moons\" rather than to the singular subject \"Neither.\"\n- B: Plural again, and the progressive misdescribes a permanent condition as an ongoing action.\n- D: \"Have possessed\" is plural; the singular subject would require \"has possessed.\"",
          "_meta": {
            "anchor": "Phobos and Deimos — the two small, irregularly shaped moons of Mars; re-authored 2026-10-04 (previous item described an unverified shipwreck find of two nocturnals, a subject already used in q16/q29)."
          }
        },
        {
          "id": 919,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Because Chappe's optical telegraph depended on each operator reading the arms of the neighboring station through a ______ fog or nightfall could halt a message halfway down the line, leaving it stranded until morning.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "telescope,"
            },
            {
              "id": "B",
              "text": "telescope"
            },
            {
              "id": "C",
              "text": "telescope;"
            },
            {
              "id": "D",
              "text": "telescope:"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence opens with a dependent \"Because...\" clause, and the conventional boundary between an introductory dependent clause and the main clause is a comma.\n\n**The Full Solution:**\n- \"Because Chappe's optical telegraph depended on each operator reading the arms of the neighboring station through a telescope\" cannot stand alone — \"Because\" makes it subordinate.\n- The main clause follows: \"fog or nightfall could halt a message halfway down the line.\"\n- A comma is the mark that joins an introductory subordinate clause to the sentence it modifies.\n\n**Why the other choices are wrong:**\n- B: Omitting the comma runs the long introductory clause straight into the main clause, obscuring where one ends and the other begins.\n- C: A semicolon must separate two independent clauses, and the \"Because\" clause is not independent.\n- D: A colon must follow a complete statement that introduces what comes next; a dependent clause cannot support one."
        },
        {
          "id": 921,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Inside a nineteenth-century salmon cannery, the contract system divided the season's work into a fixed sequence of ______ butchering, cleaning, filling, cooking, and labeling. The labor contractor was paid by the finished case, not by the hour, so speed at every station mattered.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "operations,"
            },
            {
              "id": "B",
              "text": "operations;"
            },
            {
              "id": "C",
              "text": "operations"
            },
            {
              "id": "D",
              "text": "operations:"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** A complete statement introduces a list of the operations, and the conventional mark before such a list is a colon.\n\n**The Full Solution:**\n- \"The contract system divided the season's work into a fixed sequence of operations\" is a full independent clause.\n- What follows — \"butchering, cleaning, filling, cooking, and labeling\" — itemizes the operations just announced.\n- A colon after a complete statement is the mark that formally introduces that itemization.\n\n**Why the other choices are wrong:**\n- A: A comma leaves the list dangling as if it were one more item in the sentence's own grammar, blurring where the announcement ends and the list begins.\n- B: A semicolon must join two independent clauses; the list of gerunds is not a clause.\n- C: With no mark at all, \"operations butchering\" collides — the list needs a boundary to introduce it.",
          "_meta": {}
        },
        {
          "id": 924,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Frederick II insisted that claims about birds be tested against direct observation, and his falconry treatise corrected several assertions that ancient authorities such as Aristotle had made. His demanding empirical method found few imitators among medieval writers. ______ the treatise itself remained a touchstone, copied, translated, and annotated by generations of European falconers.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "In addition,"
            },
            {
              "id": "B",
              "text": "Therefore,"
            },
            {
              "id": "C",
              "text": "For instance,"
            },
            {
              "id": "D",
              "text": "Nevertheless,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The final sentence runs against the expectation set by the one before it: the method attracted few imitators, yet the book itself stayed influential for generations. \"Nevertheless\" marks exactly that concession-and-reversal.\n\n**The Full Solution:**\n- Sentence three sets up a limitation — the empirical method was not widely adopted.\n- Sentence four reports a fact that survives despite that limitation: the treatise remained a touchstone.\n- \"Few imitators\" followed by \"remained a touchstone\" is a contrast between neglect of the method and endurance of the work.\n\n**Why the other choices are wrong:**\n- A: \"In addition\" treats the treatise's endurance as more of the same, ignoring the tension with \"few imitators.\"\n- B: \"Therefore\" claims the endurance followed from the lack of imitators, reversing the logic.\n- C: \"For instance\" would make the last sentence an example of the method finding few imitators, which it is not.",
          "_meta": {}
        },
        {
          "id": 925,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Chappe's optical telegraph could pass a short signal from Paris to Lille in well under an hour, a journey that took a courier on horseback more than a day. ______ the relay imposed a kind of security: each tower's operators merely copied the arm positions they saw through the telescope, so a message could cross the whole line without any single operator knowing what it said.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Moreover,"
            },
            {
              "id": "B",
              "text": "Instead,"
            },
            {
              "id": "C",
              "text": "Specifically,"
            },
            {
              "id": "D",
              "text": "Subsequently,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The passage stacks a second advantage on top of a first — speed, and then security — so the blank needs an additive transition: \"Moreover.\"\n\n**The Full Solution:**\n- Sentence one establishes one benefit of the system: startling speed compared with a courier.\n- Sentence two introduces a different, independent benefit: operators relayed positions without reading content.\n- Two parallel advantages of the same system are joined by addition, not contrast, illustration, or sequence.\n\n**Why the other choices are wrong:**\n- B: \"Instead\" would replace the first advantage with the second, but both hold at once.\n- C: \"Specifically\" promises a narrower restatement of the speed claim, and the security point is a new idea, not a restatement.\n- D: \"Subsequently\" imposes a time order on two features that coexisted from the start."
        },
        {
          "id": 923,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "The ogham script, carved as short strokes along the edges of standing stones in early medieval Ireland, was once assumed to be a secret writing system legible only to a small learned elite. ______ the inscriptions themselves record little more than personal names and lines of descent — the sort of information a memorial or a boundary marker would be expected to announce to any passerby.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "For example,"
            },
            {
              "id": "B",
              "text": "However,"
            },
            {
              "id": "C",
              "text": "Meanwhile,"
            },
            {
              "id": "D",
              "text": "Similarly,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The second sentence pushes against the first: a script assumed to be secret turns out to record ordinary, public information. That reversal calls for the contrast transition \"However.\"\n\n**The Full Solution:**\n- Sentence one reports an old assumption — ogham as an elite code.\n- Sentence two presents evidence that undercuts it: the inscriptions carry names and lineages meant \"to announce to any passerby.\"\n- A claim followed by evidence against it is joined by a contrast word.\n\n**Why the other choices are wrong:**\n- A: \"For example\" would make the plain inscriptions an illustration of secrecy, when they are evidence against it.\n- C: \"Meanwhile\" signals simultaneous events, but no second timeline exists here.\n- D: \"Similarly\" promises agreement between the sentences, and the second exists to disagree with the first."
        },
        {
          "id": 926,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "An artesian well taps groundwater trapped under pressure between layers of impermeable rock, so the water rises on its own, without pumping.",
              "The Grenelle well was the first artesian well drilled in Paris.",
              "The engineer Louis-Georges Mulot directed its drilling from 1833 to 1841.",
              "The borehole finally reached pressurized water at a depth of 548 meters.",
              "When the drill broke through in 1841, water shot up above the wooden drilling tower."
            ],
            "goal": "The student wants to introduce the Grenelle well to an audience unfamiliar with it."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Completed in 1841, the Grenelle well was Paris's first artesian well, tapping water so pressurized at 548 meters down that it rose without pumping."
            },
            {
              "id": "B",
              "text": "The engineer Louis-Georges Mulot directed one of the longest and most difficult drilling projects undertaken in nineteenth-century Paris."
            },
            {
              "id": "C",
              "text": "An artesian well requires no pumping because its water is trapped under pressure between layers of impermeable rock."
            },
            {
              "id": "D",
              "text": "In 1841, after eight years of drilling directed by Louis-Georges Mulot, water from the Grenelle well shot up above the wooden tower that housed the drill."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** An introduction for unfamiliar readers must say what the Grenelle well is, where and when it was made, and what made it remarkable — and A folds all three into one sentence: Paris's first artesian well, finished in 1841, tapping water so pressurized at 548 meters down that it rose without pumping.\n\n**The Full Solution:**\n- The goal has two demands: identify the well and make it intelligible to readers who have never heard of it.\n- A names it, places it, dates it, and explains the defining fact — water pressurized enough to rise from 548 meters with no pumping.\n\n**Why the other choices are wrong:**\n- B: It introduces the engineer, not the well — the well itself is never even named.\n- C: It defines artesian wells in general and never mentions the Grenelle well at all.\n- D: It assumes the reader already knows what the Grenelle well is, recounting its drilling and dramatic breakthrough without ever identifying what kind of well it was or why the water rose at all.",
          "_meta": {}
        },
        {
          "id": 927,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Sea silk is a rare textile fiber spun from the byssus, the tuft of filaments a Mediterranean pen shell uses to anchor itself to the seabed.",
              "Divers gathered the shells by hand from shallow coastal waters.",
              "The intact beards of fifty pen shells yield only about 30 grams of byssus.",
              "Finished sea-silk cloth has a natural golden sheen that was highly prized.",
              "A single pair of knitted sea-silk gloves probably required the byssus of about 150 shells."
            ],
            "goal": "The student wants to emphasize how much labor and raw material a single sea-silk object represented."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Sea silk is a rare textile fiber spun from the byssus, the tuft of filaments that a Mediterranean pen shell uses to anchor itself to the seabed."
            },
            {
              "id": "B",
              "text": "Finished sea-silk cloth has a natural golden sheen that made the fabric highly prized."
            },
            {
              "id": "C",
              "text": "Because fifty pen shells yield only about 30 grams of byssus, one pair of knitted gloves probably took the byssus of some 150 shells."
            },
            {
              "id": "D",
              "text": "Divers gathered pen shells by hand from shallow coastal waters around the Mediterranean."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The goal is to convey cost in labor and raw material, and C compresses the two decisive quantities into one causal sentence: a tiny yield of byssus per shell, and about 150 hand-gathered shells behind a single pair of gloves.\n\n**The Full Solution:**\n- Emphasizing labor and material means pairing the input side (about 30 grams from fifty shells, each gathered by hand) with the output side (some 150 shells for one small object).\n- C's \"Because... probably took\" makes the meager yield the explicit cause of the cost, which is precisely the emphasis sought.\n\n**Why the other choices are wrong:**\n- A: It defines the fiber's source but conveys nothing about quantity or effort.\n- B: The golden sheen speaks to the cloth's appeal, not to the work behind it.\n- D: The gathering method alone, without the yield or the number of shells, does not establish scale — a reader cannot tell whether diving produced pounds of fiber or grams.",
          "_meta": {
            "anchor": "Sea silk (Wikipedia): Pinna nobilis byssus; \"the intact beards of fifty shells produce 30 grams\"; \"a knitted pair of gloves probably took the byssus from around 150 shells\"; natural golden color highly valued. 2026-10-04 fact review replaced the unsupported \"about a gram of usable fiber per shell\" and \"months of gathering\" claims."
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
          "id": 929,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Using a nocturnal required no specialized training: the observer sighted the North Star through a hole at the instrument's center, turned a pointer until it lay along the two guard stars of the Little Bear, and read the hour against a toothed ring. Manuals of the period accordingly presented the whole procedure as ______, a matter of three motions and a glance.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "straightforward"
            },
            {
              "id": "B",
              "text": "incomprehensible"
            },
            {
              "id": "C",
              "text": "tedious"
            },
            {
              "id": "D",
              "text": "ingenious"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The blank is restated on both sides: \"no specialized training\" before it, \"three motions and a glance\" after it. The word that sums up both is \"straightforward.\"\n\n**The Full Solution:**\n- The passage opens by declaring the procedure easy and closes by compressing it into three motions.\n- The appositive after the blank (\"a matter of three motions and a glance\") is a direct paraphrase of the missing word, so the blank must mean simple and easily done.\n\n**Why the other choices are wrong:**\n- B: \"Incomprehensible\" reverses the passage's whole point — a procedure needing \"no specialized training\" is the opposite of one that cannot be understood.\n- C: \"Tedious\" implies long, wearying effort — the opposite of three motions and a glance.\n- D: \"Ingenious\" would praise the instrument's cleverness, but the sentence characterizes how easy the procedure is for its user, not how inventive its design is."
        },
        {
          "id": 931,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A traditional Chinese sheng bundles seventeen bamboo pipes upright in a single wind chest. Seeing so many pipes crowded together, a newcomer might expect them to sound ______ when played at once; instead, the free reeds blend so evenly that the instrument is commonly described as a mouth organ.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "resonant"
            },
            {
              "id": "B",
              "text": "cacophonous"
            },
            {
              "id": "C",
              "text": "muted"
            },
            {
              "id": "D",
              "text": "overwhelming"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** \"Instead\" reverses the expectation, and what actually happens is a blend so even that the instrument is called a mouth organ. The expectation must therefore have been the opposite of an even blend — a harsh jumble of sounds, which is what \"cacophonous\" means.\n\n**The Full Solution:**\n- The newcomer reasons from looks: seventeen pipes crowded together suggest seventeen competing voices.\n- \"Instead\" tells us the actual sound contradicted that expectation; the actual sound was smooth and unified.\n- The blank must name the contradicted expectation: discordant noise — \"cacophonous.\"\n\n**Why the other choices are wrong:**\n- A: \"Resonant\" is a virtue, not the opposite of an even, organ-like blend — no contradiction for \"instead\" to signal.\n- C: \"Muted\" concerns volume; the surprise in the text is about blend and evenness, not loudness or softness.\n- D: \"Overwhelming\" concerns force rather than order; the reversal in the text is from expected disorder to an even blend, not from loudness to restraint.",
          "_meta": {
            "anchor": "Sheng (Wikipedia): traditional sheng generally has 17 pipes; a mouth-blown polyphonic free-reed instrument, commonly called the Chinese mouth organ. 2026-10-04 review removed an unverified anecdote about 18th-century European court listeners."
          }
        },
        {
          "id": 928,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Steller's sea cow grazed on kelp in the shallowest water along the shore, and its buoyant body could not fully submerge. Because the animals could neither dive out of reach nor swim quickly away, hunting parties found them easy to ______, and crews provisioning their ships in the Bering Sea took the slow-breeding animals faster than the small population could replace them.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "overlook"
            },
            {
              "id": "B",
              "text": "approach"
            },
            {
              "id": "C",
              "text": "domesticate"
            },
            {
              "id": "D",
              "text": "describe"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The \"Because\" clause supplies the cause — the animals could not dive or flee — and the blank must name the effect that follows for hunters: the sea cows were easy to \"approach.\"\n\n**The Full Solution:**\n- The logic is causal: an animal that cannot escape is an animal a hunting party can get close to.\n- The rest of the sentence confirms the hunting context — crews \"took\" the animals for provisions — so the blank describes the step that made the killing easy.\n\n**Why the other choices are wrong:**\n- A: \"Overlook\" means to fail to notice, which would make the animals harder to hunt, not easier — the causal chain collapses.\n- C: Nothing in the passage involves taming; the crews wanted provisions, not livestock.\n- D: Ease of description has no connection to the inability to dive or flee, and the sentence's consequence is depletion, not documentation."
        },
        {
          "id": 930,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Writers once claimed that a pair of gloves made of sea silk was so fine it could be folded into half a walnut shell. The objects that actually survive are considerably more ______ — mostly knitted gloves and caps about as thick as ordinary silk, treasured less for any marvelous fineness than for their natural golden sheen.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "elaborate"
            },
            {
              "id": "B",
              "text": "durable"
            },
            {
              "id": "C",
              "text": "valuable"
            },
            {
              "id": "D",
              "text": "modest"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text pivots from an extravagant claim about sea silk to what \"actually\" survives — ordinary-looking knitted objects — so the blank must run opposite to that extravagance: the surviving pieces are \"modest.\"\n\n**The Full Solution:**\n- The first sentence inflates: gloves fine enough to fit inside half a walnut shell.\n- The second deflates: gloves and caps about as thick as ordinary silk, prized for their sheen rather than any marvelous fineness.\n- \"Considerably more ______\" must carry the deflation, and \"modest\" — unassuming in scale and pretension — does.\n\n**Why the other choices are wrong:**\n- A: \"Elaborate\" would extend the extravagance, erasing the contrast the word \"actually\" sets up.\n- B: Survival might suggest durability, but the description that follows concerns the objects' ordinary thickness, not their toughness.\n- C: \"Valuable\" does not answer the claim about fineness; the contrast the text draws is between a marvelous legend and plain, ordinary-looking objects.",
          "_meta": {
            "anchor": "Sea silk (Wikipedia): \"said to be so fine that a pair of women's gloves made from the fabric could fit into half a walnut shell\"; \"similar in thickness to other fibers such as silk\"; most surviving objects knitted, many gloves; oldest surviving object a 14th-century knit hat; natural color highly valued."
          }
        },
        {
          "id": 934,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "From the late nineteenth century until 1927, federal engineers held that confining the Mississippi between continuous levees would force the river to scour its own bed deeper, so that levees alone could contain any flood. The great flood of 1927 — when the river broke through in more than a hundred places and drove hundreds of thousands of people from their homes — ended the doctrine. In 1928, Congress authorized a plan built on the opposite premise: the river would sometimes exceed any channel human beings could build for it, and engineered floodways would give the excess water somewhere safe to go.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It describes a natural disaster and then evaluates several competing proposals for preventing its recurrence."
            },
            {
              "id": "B",
              "text": "It presents two schools of engineering thought and argues that the older of the two has been unfairly dismissed."
            },
            {
              "id": "C",
              "text": "It explains how a river's behavior changed gradually over the nineteenth century and how engineers adjusted their methods, step by step, in response to each change."
            },
            {
              "id": "D",
              "text": "It states an engineering doctrine and its rationale, recounts the disaster that discredited the doctrine, and describes the opposing approach adopted in its place."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The three sentences perform exactly the three moves D names: the levees-only doctrine with its scouring rationale; the 1927 flood that \"ended the doctrine\"; and the replacement plan \"built on the opposite premise.\"\n\n**The Full Solution:**\n- Sentence one is doctrine plus rationale — confinement would deepen the bed, so levees alone would suffice.\n- Sentence two is the discrediting event, with its scale spelled out in the dash-set interruption.\n- Sentence three is the reversal: floodways that concede what the old doctrine denied.\n\n**Why the other choices are wrong:**\n- A: Only one plan follows the flood; no competing proposals are weighed against each other.\n- B: The text records the older doctrine's failure without defending it — no argument for rehabilitation appears.\n- C: The change described is abrupt, not gradual — a single flood reverses policy by the following year — and it is the doctrine, not the river's behavior, that changes.",
          "_meta": {}
        },
        {
          "id": 932,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is from Walt Whitman's poem \"I Hear America Singing,\" as it appeared in the 1881 edition of Leaves of Grass.\n\nI hear America singing, the varied carols I hear, / Those of mechanics, each one singing his as it should be blithe and strong, / The carpenter singing his as he measures his plank or beam, / The mason singing his as he makes ready for work, or leaves off work, / The boatman singing what belongs to him in his boat, the deckhand singing on the steamboat deck, / The shoemaker singing as he sits on his bench, the hatter singing as he stands.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The speaker narrates a single worker's day from the start of a task to its completion."
            },
            {
              "id": "B",
              "text": "The speaker opens with a sweeping declaration and then develops it through a catalog of individual workers, each singing at a characteristic task."
            },
            {
              "id": "C",
              "text": "The speaker contrasts the songs of skilled tradespeople with the silence of those who perform no labor."
            },
            {
              "id": "D",
              "text": "The speaker poses a series of questions about the nature and dignity of labor and then answers each one with a concrete example drawn from a different trade."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The first line makes the sweeping claim — \"I hear America singing, the varied carols I hear\" — and every subsequent line particularizes it: carpenter, mason, boatman, deckhand, shoemaker, hatter, each attached to a task.\n\n**The Full Solution:**\n- The opening line is general: a nation heard as many songs.\n- The remaining lines are structurally parallel entries in a list, each naming one worker and the work during which he sings.\n- General declaration elaborated by an accumulating catalog is precisely the structure B describes.\n\n**Why the other choices are wrong:**\n- A: No single figure is followed; the poem moves across many workers, giving each a single line, not a day's arc.\n- C: No silent figures appear anywhere — everyone named is singing.\n- D: The poem opens with a declaration, not a question; nothing in the text is interrogative.",
          "_meta": {
            "anchor": "Walt Whitman — \"I Hear America Singing\" (first published 1860 in a different form; text here is the 1881-82 Leaves of Grass version); genuine public-domain excerpt, opening lines verbatim",
            "quoteVerify": true,
            "source": "Walt Whitman, \"I Hear America Singing,\" Leaves of Grass (1881-82 edition), verified against Wikisource Leaves of Grass (1882)/Inscriptions/I Hear America Singing"
          }
        },
        {
          "id": 935,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Standard accounts date the Hanseatic League's decline to the sixteenth century and explain it geographically. As Atlantic routes eclipsed the Baltic trade and Dutch and English shippers learned to move bulk goods more cheaply, the League's grip on northern commerce simply ceased to matter. On this view the League was a casualty of forces far beyond its members' control, and its slow dissolution requires no further explanation."
            },
            {
              "label": "Text 2",
              "text": "Geography alone makes a poor executioner. The Hanseatic League had weathered earlier shifts in trade by adjusting its privileges and admitting new partners; what changed in the sixteenth century was political. As territorial princes consolidated power, member towns lost the independence that Hanseatic cooperation required — towns cannot coordinate their commercial policies when rulers now set those policies for them. Foreign competition mattered, but it pressed on an association already being hollowed out from within."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "Dutch and English competition, though often cited by historians, never posed a genuine threat to the League's merchants."
            },
            {
              "id": "B",
              "text": "The League's dissolution was indeed gradual, but the process began a full century earlier than the standard geographic accounts recognize."
            },
            {
              "id": "C",
              "text": "An account limited to shifting trade routes omits the political changes that had already undermined the League's capacity to adapt."
            },
            {
              "id": "D",
              "text": "The League's member towns deliberately dissolved the association once its trading privileges had lost their commercial value."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Text 2 does not dispute that trade shifted; it disputes the sufficiency of that explanation. The League had adapted to shifts before, so what needs explaining is the lost capacity to adapt — a political story about princes and town autonomy that Text 1's geographic account omits.\n\n**The Full Solution:**\n- Text 1's argument culminates in \"requires no further explanation\" — geography suffices.\n- Text 2's opening line rejects exactly that sufficiency (\"Geography alone makes a poor executioner\").\n- Its evidence: past resilience under earlier trade shifts, and the political consolidation that dissolved the coordination the League ran on. C reproduces this objection precisely — the geographic account is incomplete, not wrong.\n\n**Why the other choices are wrong:**\n- A: Text 2 concedes foreign competition was real pressure; it denies only that competition is the whole story.\n- B: Text 2 redates nothing — it relocates the cause, not the century.\n- D: No deliberate dissolution appears in either text; Text 2 describes erosion from within, not a decision by the towns."
        },
        {
          "id": 933,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The camera lucida, patented by the chemist William Hyde Wollaston in 1806, is often imagined as a machine that draws by itself. It is nothing of the kind. The device is a small prism on an adjustable stem: an artist looking down through it sees the scene ahead apparently superimposed on the drawing paper below and must still trace every line by hand. What the prism supplies is not skill but correspondence — proportion and placement arrive already true, while the drawing itself remains the work of the person holding the pencil.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It introduces a device and a common misconception about it, rejects the misconception, and then clarifies what the device actually contributes."
            },
            {
              "id": "B",
              "text": "It traces the development of a drawing device from its original patenting through the later refinements introduced by a series of other nineteenth-century inventors."
            },
            {
              "id": "C",
              "text": "It praises a device's ingenuity and then concedes several respects in which rival instruments outperformed it."
            },
            {
              "id": "D",
              "text": "It explains why a once-popular device was eventually abandoned by the artists who had relied on it."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text moves in three steps: the device plus the popular fantasy about it (\"a machine that draws by itself\"), the flat rejection (\"It is nothing of the kind\"), and the clarification of its real contribution — correspondence, not skill.\n\n**The Full Solution:**\n- Sentence one pairs the introduction with the misconception.\n- Sentence two rejects the misconception in five words.\n- Sentences three and four explain what the prism actually does and pointedly assign the drawing to the artist — the correction filled out.\n\n**Why the other choices are wrong:**\n- B: After the 1806 patent, no later development or other inventors appear.\n- C: The text corrects a misunderstanding rather than praising the device, and no rival instruments are mentioned.\n- D: Nothing describes abandonment; the text is about what the device does, not its fall from use."
        },
        {
          "id": 937,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The emperor Frederick II wrote De arte venandi cum avibus (The Art of Hunting with Birds), a falconry treatise, in the 1240s. What set the work apart from earlier bird lore was its method. Frederick accepted received claims only after testing them: he sent envoys north for the driftwood from which barnacle geese were said to hatch and, finding no birds on it, doubted the legend; he covered the eyes of vultures to learn whether they found food by sight or by smell; and he corrected Aristotle wherever his own observations disagreed.",
          "question": "According to the text, what distinguished Frederick II's treatise from earlier writing about birds?",
          "choices": [
            {
              "id": "A",
              "text": "It was written for a general audience of readers rather than for practicing falconers."
            },
            {
              "id": "B",
              "text": "It was composed by a reigning monarch rather than by a scholar."
            },
            {
              "id": "C",
              "text": "It described more species of birds than any earlier treatise had attempted to cover."
            },
            {
              "id": "D",
              "text": "It based its claims on observation and testing rather than on older authorities."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text names the distinction explicitly — \"What set the work apart from earlier bird lore was its method\" — and then defines that method as accepting claims only after testing them against observation.\n\n**The Full Solution:**\n- The question asks what the text says, and the second sentence answers it directly: the method.\n- The examples specify the method — the barnacle-goose legend checked against driftwood brought from the north, the vulture experiment, Aristotle corrected against Frederick's own observations.\n- D restates that method: observation and testing over inherited authority.\n\n**Why the other choices are wrong:**\n- A: The text says nothing about the treatise's intended readers; its distinction lies in how claims were justified.\n- B: Frederick's rank is mentioned, but the text attributes the work's distinction to its method, not its author's throne.\n- C: Breadth of coverage is never compared; the comparison drawn is about how claims were justified.",
          "_meta": {
            "anchor": "Frederick II — De arte venandi cum avibus, written in the 1240s (Wikipedia); envoys sent north for barnacle-goose timbers (Barnacle goose myth, quoting the treatise); vultures' eyes covered to test smell; contradicts Aristotle. 2026-10-04 review removed unverified \"three decades\" / \"completed around 1245\" claims."
          }
        },
        {
          "id": 941,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Rather than photographing whole colonies, long-term seabird monitoring programs count the same small cliff plots year after year, so that changes in the numbers reflect the birds rather than the method. Ecologists reviewing four decades of plot counts at two island colonies of common guillemots caution that a species can decline steeply at one site while thriving at another, so a trend measured at a single colony should not be read as the species' overall trajectory. The plot counts bear out this caution because ______",
          "questionTable": {
            "type": "table",
            "caption": "Breeding pairs counted in fixed study plots at two guillemot colonies",
            "headers": [
              "Colony",
              "Pairs, 1985",
              "Pairs, 2005",
              "Pairs, 2025"
            ],
            "rows": [
              [
                "Colony 1",
                "1,240",
                "980",
                "610"
              ],
              [
                "Colony 2",
                "410",
                "520",
                "640"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "counts at both colonies changed by hundreds of pairs over the four decades of monitoring."
            },
            {
              "id": "B",
              "text": "Colony 1 supported more breeding pairs than Colony 2 did in both 1985 and 2005."
            },
            {
              "id": "C",
              "text": "the combined total of breeding pairs counted at the two colonies taken together was lower in 2025 than the corresponding combined total had been in 1985."
            },
            {
              "id": "D",
              "text": "plot counts at Colony 1 fell by roughly half between 1985 and 2025 while counts at Colony 2 rose by more than half over the same years."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The caution is about divergence — one site declining while another thrives — and D exhibits precisely that: Colony 1 down from 1,240 to 610 as Colony 2 climbed from 410 to 640.\n\n**The Full Solution:**\n- To \"bear out\" the caution, the data must show two colonies moving in opposite directions, so that either one alone would mislead.\n- D reads both rows across the full period and reports the opposing trends in comparable terms (down by half, up by more than half).\n\n**Why the other choices are wrong:**\n- A: \"Changed by hundreds of pairs\" hides direction — the crux of the caution is that the changes ran opposite ways.\n- B: Which colony is larger is irrelevant to whether single-site trends mislead.\n- C: The combined total is exactly the kind of aggregate the caution warns against; a summed decline conceals that one colony was thriving.",
          "_meta": {
            "anchor": "Unattributed, illustrative plot counts (2026-10-04 review replaced the real Norwegian place names Skarvholm and Fuglenes, which had invented data attached)."
          }
        },
        {
          "id": 942,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Ogham inscriptions and the Latin memorial stones of early medieval Ireland and Britain differ in more than script. Latin stones often carry formulas — \"here lies\" — that address a reader standing at a grave, and some add phrases about the dead person's faith or office. Ogham stones typically record only a name and the name of a father or wider kin group, in a possessive form meaning \"[the stone] of X, son of Y.\" And some ogham stones stand not in burial grounds but at the edges of early landholdings. Some scholars therefore argue that, compared with the Latin memorials, ogham stones ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "were carved by rural artisans who had little or no contact with the users and conventions of the Latin alphabet."
            },
            {
              "id": "B",
              "text": "preserved fuller and more personal accounts of the people they commemorated."
            },
            {
              "id": "C",
              "text": "were intended to be read aloud during burial ceremonies at gravesides."
            },
            {
              "id": "D",
              "text": "may have served less as gravestones than as durable markers of a kin group's claim to land."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Both premises push the same comparative conclusion: the inscriptions assert possession (\"[the stone] of X\") rather than address mourners, and some stones stand at the edges of landholdings rather than in burial grounds. A possessive formula on a boundary is the language of claim, not of burial — which is just what D infers, at the properly cautious strength of \"may have served.\"\n\n**The Full Solution:**\n- The Latin stones supply the contrast case: graveside address, personal detail, cemetery setting — the equipment of memorial.\n- The ogham stones lack each element and add one the Latin stones lack: placement at the edges of landholdings.\n- The inference that fits is functional: identity plus kin plus boundary equals a claim to land, as D concludes.\n\n**Why the other choices are wrong:**\n- A: The script difference is the text's starting point, not evidence about who the carvers knew.\n- B: It runs backward — the ogham texts are the sparser ones, recording names alone.\n- C: Reading aloud at gravesides fits the Latin stones' addressed formulas; the ogham stones often stand nowhere near a grave.",
          "_meta": {
            "anchor": "Ogham (Wikipedia): ~400 orthodox inscriptions, \"usually consist of personal names written in a set formula\"; stones \"mainly employed as territorial markers and memorials\"; \"marks possibly indicating land ownership\". 2026-10-04 review removed an unverified sample inscription."
          }
        },
        {
          "id": 939,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Bog bodies — human remains preserved for centuries in northern European peatlands — retain skin, hair, and even clothing in remarkable condition, and the acidity of bog water was long assumed to be the preservative. A research team instead hypothesizes that the crucial agent is sphagnan, a reactive carbohydrate in the cell walls of sphagnum moss that both tans skin, much as oak bark tans leather, and inhibits the growth of decay bacteria.",
          "question": "Which finding, if true, would most directly support the team's hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Tissue samples in neutral solutions containing extracted sphagnan resist bacterial decay nearly as well as samples in bog water, while samples in equally acidic solutions without sphagnan decay quickly."
            },
            {
              "id": "B",
              "text": "Bog bodies recovered from the most strongly acidic peatlands are on average no better preserved than bodies recovered from peatlands whose waters are only mildly acidic, according to surveys of dozens of recovered bodies."
            },
            {
              "id": "C",
              "text": "Sphagnum moss grows more slowly in peatlands from which well-preserved bodies have been recovered than in peatlands containing no bodies."
            },
            {
              "id": "D",
              "text": "Peatlands where sphagnum moss is absent tend to be more acidic, on average, than peatlands where the moss is abundant."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The hypothesis makes sphagnan, not acidity, the crucial agent. A's experiment isolates exactly that variable — sphagnan without acidity preserves; acidity without sphagnan does not — which is the most direct support a finding could give.\n\n**The Full Solution:**\n- Supporting \"sphagnan is the crucial agent\" requires showing preservation tracks sphagnan when acidity is removed from the picture.\n- A's neutral-solution condition does that, and its acid-only condition simultaneously undermines the rival explanation the team is arguing against.\n\n**Why the other choices are wrong:**\n- B: It counts against the acidity hypothesis but says nothing about sphagnan — it removes a rival without supporting the team's own agent.\n- C: Slower moss growth near preserved bodies is a correlation running in an uninformative direction; it neither isolates sphagnan nor links it to preservation.\n- D: A relationship between moss and acidity levels describes the bogs themselves, not the preservation of tissue, and so tests neither hypothesis.",
          "_meta": {
            "anchor": "Sphagnan hypothesis: T. J. Painter, \"Lindow man, Tollund man and other peat-bog bodies: the preservative and antimicrobial action of Sphagnan, a reactive glycuronoglycan with tanning and sequestering properties,\" Carbohydrate Polymers (1991). 2026-10-04 review removed the unverified \"binds the calcium that decay bacteria require\" mechanism."
          }
        },
        {
          "id": 938,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The free reed is an ancient Asian idea with a comparatively brief European history. Mouth organs built on the principle, such as the Chinese sheng, have been played for well over two thousand years. European builders took up the free reed only in the late eighteenth century, after instruments and written descriptions reached Western workshops; within a few decades the borrowed principle powered a wave of new inventions, from the harmonica and the accordion to the parlor harmonium. A single acoustic idea, long established in one tradition, thus seeded an entire family of instruments in another.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "European instrument makers refined the free reed far beyond the designs found in the Asian instruments that inspired them."
            },
            {
              "id": "B",
              "text": "The harmonica and the accordion owe their popularity to the portability that free reeds made possible."
            },
            {
              "id": "C",
              "text": "The free reed, played in Asian instruments for millennia, was adopted in Europe only in the late 1700s and there rapidly generated a new family of instruments."
            },
            {
              "id": "D",
              "text": "The sheng and the khaen remained essentially unknown to European musicians until instrument makers in Europe had already developed free-reed instruments of their own, working independently."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text's spine is a transfer story: millennia of Asian use, adoption in Europe in the late 1700s, and a burst of new instruments there — the arc C compresses into one sentence.\n\n**The Full Solution:**\n- Sentence one announces the asymmetry: ancient in Asia, brief in Europe.\n- The middle sentences supply the dates and mechanism of transfer — traveling instruments and descriptions reaching Western workshops.\n- The final sentence generalizes exactly as C does: one established idea seeding a family of instruments in a new tradition.\n\n**Why the other choices are wrong:**\n- A: The text says Europeans built new instruments from the principle, not that they surpassed the Asian designs.\n- B: Portability is never mentioned; it imports a plausible-sounding cause the text does not give.\n- D: It reverses the stated direction of influence — European adoption followed the arrival of Asian instruments and descriptions.",
          "_meta": {
            "anchor": "Sheng first mentioned in 14th-12th c. BCE oracle-bone writings (Wikipedia: Sheng); European free-reed organ pipes from c. 1780 (Kirsnick, Vogler), accordion patented 1829 (Wikipedia: Free reed aerophone). 2026-10-04 review: dropped the khaen (age unverified) and corrected \"around the turn of the nineteenth century\"."
          }
        },
        {
          "id": 940,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Engineers assessing passive cooling monitored four traditional courtyard houses in Yazd, Iran, on summer afternoons, recording mean indoor temperatures with each house's windcatcher shaft open and, on comparable days, with the shaft sealed. Outdoor air on the study days averaged 39°C. The engineers conclude that the towers meaningfully cooled every house monitored because ______",
          "questionTable": {
            "type": "table",
            "caption": "Mean afternoon indoor temperature in four courtyard houses, Yazd",
            "headers": [
              "House",
              "Shaft open (°C)",
              "Shaft sealed (°C)"
            ],
            "rows": [
              [
                "House 1",
                "31",
                "36"
              ],
              [
                "House 2",
                "30",
                "34"
              ],
              [
                "House 3",
                "32",
                "38"
              ],
              [
                "House 4",
                "29",
                "33"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "House 3 recorded the warmest sealed-shaft temperature of the study, at 38°C."
            },
            {
              "id": "B",
              "text": "every house was at least 4°C cooler with its shaft open than with the shaft sealed, with differences ranging from 4°C to 6°C."
            },
            {
              "id": "C",
              "text": "indoor temperatures with the windcatcher shafts open stayed well below the 39°C outdoor average in all four of the monitored courtyard houses."
            },
            {
              "id": "D",
              "text": "House 4 was the coolest of the four houses whether its shaft was open or sealed."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The conclusion is about the towers' effect in every monitored house, so the evidence must compare open against sealed for all four rows — and B does, reporting a 4-6°C advantage in each.\n\n**The Full Solution:**\n- The tower's contribution is isolated by the open-versus-sealed comparison, since the two conditions differ only in the shaft.\n- B covers all four houses, matching the claim's \"every house\" scope, and quantifies the range of the effect.\n\n**Why the other choices are wrong:**\n- A: A single sealed-shaft reading involves no comparison and no cooling effect.\n- C: Comparing open-shaft readings to the outdoor average ignores the sealed condition — sealed houses were also below 39°C, so the comparison cannot isolate what the tower added.\n- D: Ranking the houses against one another says nothing about what opening a shaft did within any house."
        },
        {
          "id": 936,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The windcatchers of Yazd do more than move air. In the courtyard houses of the city's historic quarter, each tall tower works as one part of an integrated cooling system: air drawn down the shaft passes over a pool or through a cellar, shedding heat by evaporation before it reaches the living quarters, while warmed air escapes through the courtyard, pulling a steady current through the house. Rooms at a tower's base stay usable through the hottest afternoons, and households traditionally reorganized daily life around those rooms each summer.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Windcatchers cool the houses of Yazd primarily by chilling the water that is stored in the pools and cellars that sit beneath the bases of the towers."
            },
            {
              "id": "B",
              "text": "In Yazd's traditional houses, windcatchers work within a larger cooling system whose cool rooms shaped how households lived."
            },
            {
              "id": "C",
              "text": "The tallest windcatchers in Yazd's historic quarter belonged to the households that were wealthy enough to pay for their construction."
            },
            {
              "id": "D",
              "text": "Mechanical air-conditioning has now made the windcatchers of Yazd's historic quarter obsolete as a means of cooling the city's houses."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text's two halves are the system and its consequences: the tower works with pools, cellars, and courtyard as \"an integrated cooling system,\" and the resulting cool rooms reorganized summer life. B joins both halves.\n\n**The Full Solution:**\n- The opening sentence announces the thesis — the towers \"do more than move air.\"\n- The middle sentence details the integration: shaft, evaporation, courtyard current.\n- The final sentence gives the human consequence, which B folds in: households arranged their days around the cooled rooms.\n\n**Why the other choices are wrong:**\n- A: It inverts the mechanism — the water cools the air by evaporation; the text never says the system exists to chill the water.\n- C: Tower height and household wealth are never discussed.\n- D: Modern air-conditioning appears nowhere in the text.",
          "_meta": {}
        },
        {
          "id": 943,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "When engineers confine a river such as the Mississippi between continuous levees, water that once spread across kilometers of floodplain during high water must instead pass through a channel a fraction as wide. Hydrologists comparing gauge records from before and after major levee construction have found that floods carrying equivalent volumes of water now crest at measurably greater heights along many leveed reaches. Structures built to hold floodwater away from the land, then, appear to ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "reduce the total volume of water that the river carries downstream during its periods of high water."
            },
            {
              "id": "B",
              "text": "raise the very flood heights they were built to guard against."
            },
            {
              "id": "C",
              "text": "have little measurable effect on the heights that floods of a given size reach."
            },
            {
              "id": "D",
              "text": "protect the communities behind them without altering the river's behavior in any way that gauges can detect."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The premises hand over both links of the causal chain: confinement narrows the flood's path, and equivalent volumes now crest higher. The conclusion that completes \"appear to\" is the ironic one B states — the structures raise the heights they exist to guard against.\n\n**The Full Solution:**\n- Premise one is mechanism: the same water squeezed through a channel \"a fraction as wide.\"\n- Premise two is measurement: equal volumes, greater crest heights, after levee construction.\n- Mechanism plus measurement yields B's cause-and-effect conclusion, and the sentence's \"then\" demands exactly that drawn consequence.\n\n**Why the other choices are wrong:**\n- A: The comparison holds volume constant — the records concern floods of equivalent volume, so nothing supports a change in volume.\n- C: It contradicts the stated finding of \"measurably greater heights.\"\n- D: Same contradiction — the record shows detectable alteration, whatever protection the levees also provide.",
          "_meta": {}
        },
        {
          "id": 945,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Stored in the herders' cooperative archive ______ the shearing records of every chaccu held in the district, each one listing the animals gathered, the grams of fleece taken, and the herd's condition at release.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "is"
            },
            {
              "id": "B",
              "text": "are"
            },
            {
              "id": "C",
              "text": "has been"
            },
            {
              "id": "D",
              "text": "was"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The sentence is inverted: the subject follows the verb. That subject is the plural \"records,\" so the verb must be the plural \"are.\"\n\n**The Full Solution:**\n- \"Stored in the herders' cooperative archive\" is an opening participial phrase, not a subject.\n- Restore normal order and the agreement is plain: \"The shearing records... are stored in the archive.\"\n- The plural is confirmed by \"each one listing,\" which distributes over multiple records.\n\n**Why the other choices are wrong:**\n- A: A singular verb drawn to the singular \"archive\" beside the blank — but \"archive\" sits inside the opening phrase and cannot be the subject.\n- C: Singular again, and the perfect adds an unneeded time frame to a simple statement of where the records are.\n- D: Singular, and the past tense contradicts \"since 1994,\" which carries the records up to the present.",
          "_meta": {}
        },
        {
          "id": 949,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The surviving corpus of ogham inscriptions, distributed across several hundred stones that stand in fields, churchyards, and museum collections from southern Ireland to Wales, ______ almost entirely of personal names and statements of descent.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "consist"
            },
            {
              "id": "B",
              "text": "have consisted"
            },
            {
              "id": "C",
              "text": "consists"
            },
            {
              "id": "D",
              "text": "are consisting"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject is the singular \"corpus,\" so the verb must be the singular \"consists\" — no matter how much plural material intervenes.\n\n**The Full Solution:**\n- The long interrupting phrase — \"distributed across several hundred stones that stand in fields, churchyards, and museum collections from southern Ireland to Wales\" — modifies \"corpus\" and contributes nothing to agreement.\n- Strip it away and the frame is simple: \"The corpus... consists almost entirely of personal names.\"\n\n**Why the other choices are wrong:**\n- A: A plural verb pulled toward the nearby plurals (\"stones,\" \"collections\") rather than the true subject.\n- B: Plural again, and the perfect implies a state that has ended or changed, which nothing in the sentence supports.\n- D: Plural, and \"consist\" is a stative verb that resists the progressive — a corpus is not in the process of consisting."
        },
        {
          "id": 948,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Because the pen shells that yield the raw filaments were gathered one by one by free divers, and because each shell furnished only a wisp of usable ______ a single pair of knitted sea-silk gloves could require the byssus of some 150 shells.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "fiber,"
            },
            {
              "id": "B",
              "text": "fiber"
            },
            {
              "id": "C",
              "text": "fiber;"
            },
            {
              "id": "D",
              "text": "fiber:"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence opens with a pair of dependent \"Because\" clauses, and the boundary between an introductory dependent structure and the main clause is a comma.\n\n**The Full Solution:**\n- Everything before the blank hangs on \"Because... and because...\" — neither clause can stand alone.\n- The main clause follows: \"a single pair of knitted sea-silk gloves could require the byssus of some 150 shells.\"\n- A comma is the conventional mark that closes the introductory subordination and opens the main assertion.\n\n**Why the other choices are wrong:**\n- B: Without the comma, the long double introduction collides with the main clause, leaving the sentence's turning point unmarked.\n- C: A semicolon requires an independent clause on each side; the \"Because\" clauses are not independent.\n- D: A colon must follow a complete introducing statement, and the subordinate clauses do not form one.",
          "_meta": {}
        },
        {
          "id": 946,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Chemists studying bog bodies have explained a paradox that long puzzled ______ the same acidic water that keeps skin, hair, and fingernails intact for millennia slowly dissolves the skeleton itself.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "excavators,"
            },
            {
              "id": "B",
              "text": "excavators"
            },
            {
              "id": "C",
              "text": "excavators:"
            },
            {
              "id": "D",
              "text": "excavators, but"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The first clause is a complete statement that announces a paradox; the clause after the blank states what that paradox is. A colon after a complete statement is the mark that delivers on such an announcement.\n\n**The Full Solution:**\n- Left of the blank is independent: \"Chemists studying bog bodies have explained a paradox that long puzzled excavators.\"\n- Right of the blank spells the paradox out — preservation and destruction from the same conditions.\n- Announcement followed by its content is the colon's defining use.\n\n**Why the other choices are wrong:**\n- A: A comma alone splices two independent clauses together.\n- B: With nothing at the boundary, the two sentences fuse into a run-on.\n- D: \"But\" is grammatical at the joint but wrecks the logic — the second clause is the paradox the first clause promised, not a turn against it.",
          "_meta": {
            "anchor": "Bog body (Wikipedia): \"The high levels of acidity can tan their skin and preserve internal organs, but inversely dissolve the calcium phosphate of bone.\" 2026-10-04 review removed the unverified \"By the 1980s\" date."
          }
        },
        {
          "id": 947,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The free reed reached European workshops in the late eighteenth century. Since then, instrument makers ______ the mechanism to an astonishing range of forms, from the pocket-sized harmonica to the accordion and the parlor harmonium.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "adapt"
            },
            {
              "id": "B",
              "text": "adapted"
            },
            {
              "id": "C",
              "text": "were adapting"
            },
            {
              "id": "D",
              "text": "have adapted"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** A \"Since\" phrase marking the start of a period that runs to the present takes the present perfect: makers \"have adapted\" the mechanism from the late eighteenth century onward.\n\n**The Full Solution:**\n- \"Since then\" points back to the late eighteenth century and defines a span beginning in the past and continuing now.\n- Action distributed across such a span, still open at the present end, is expressed by the present perfect.\n\n**Why the other choices are wrong:**\n- A: The simple present states a general habit and cannot pair with a \"Since\" phrase anchored to a past starting point.\n- B: The simple past seals the action inside a finished period, contradicting the open span that \"Since\" establishes.\n- C: The past progressive \"were adapting\" describes an action in progress at some past moment, which breaks the from-then-until-now sense of \"Since then.\"",
          "_meta": {
            "anchor": "Free reed aerophone (Wikipedia): free-reed organ pipes in Europe from c. 1780; accordion patented 1829. 2026-10-04 review removed unverified \"first mouth-blown prototypes in the 1820s\" and \"concertinas sailors carried\"."
          }
        },
        {
          "id": 944,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Steller watched living sea cows almost daily during the months his shipwrecked crew spent on Bering ______ no trained naturalist ever saw the animals alive after 1768, so every later account of the species rests on his notes, a few skeletons, and fragments of hide.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "Island,"
            },
            {
              "id": "B",
              "text": "Island"
            },
            {
              "id": "C",
              "text": "Island;"
            },
            {
              "id": "D",
              "text": "Island, however"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Two independent clauses meet at the blank — the months of observation, and the fact that no naturalist ever saw the animals again — and a semicolon is the conventional boundary between them.\n\n**The Full Solution:**\n- Left of the blank stands a complete sentence: \"Steller watched living sea cows almost daily during the months his shipwrecked crew spent on Bering Island.\"\n- Right of the blank stands another: \"no trained naturalist ever saw the animals alive after 1768...\"\n- With no conjunction supplied, only a semicolon can hold the two sentences together.\n\n**Why the other choices are wrong:**\n- A: A comma alone between independent clauses is a comma splice.\n- B: No punctuation at all fuses the two sentences into a run-on.\n- D: \"Island, however no trained naturalist...\" mispunctuates the conjunctive adverb — \"however\" would need a semicolon before it and a comma after it to do this job."
        },
        {
          "id": 951,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Levees along the lower Mississippi now keep the river from spilling across its floodplain during high water. The sediment that each flood once spread over the surrounding delta instead stays in the channel and rides the current out to deep water beyond the coast. ______ large areas of the delta, cut off from the deposits that once offset their natural settling, are slowly sinking below sea level.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "For example,"
            },
            {
              "id": "B",
              "text": "Consequently,"
            },
            {
              "id": "C",
              "text": "Still,"
            },
            {
              "id": "D",
              "text": "In the same way,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The final sentence is the downstream result of the chain the first two build — levees stop the flooding, so the sediment bypasses the delta, so the delta sinks. \"Consequently\" marks that cause-and-effect relation.\n\n**The Full Solution:**\n- Sentence one states the intervention; sentence two states its side effect (sediment carried past the delta).\n- Sentence three reports what follows from that side effect: land \"cut off from the deposits\" subsides.\n- The sentence even restates the cause inside itself (\"cut off from the deposits\"), confirming that the blank must signal consequence.\n\n**Why the other choices are wrong:**\n- A: The sinking delta is not an example of sediment riding the current; it is the outcome of it.\n- C: \"Still\" would concede a countercurrent, but the third sentence extends the chain rather than resisting it.\n- D: \"In the same way\" announces a parallel case, and no second, similar situation has been introduced.",
          "_meta": {}
        },
        {
          "id": 950,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Visitors to Chavín de Huántar in the first millennium BCE did not merely look at the temple; ceremonies there were engineered for the ear as much as for the eye, archaeologists argue, with sound at the center of the experience. ______ excavations at the temple have recovered more than twenty conch-shell trumpets, each with a carefully cut mouthpiece and a surface polished by use.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nonetheless,"
            },
            {
              "id": "B",
              "text": "Meanwhile,"
            },
            {
              "id": "C",
              "text": "By contrast,"
            },
            {
              "id": "D",
              "text": "In fact,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The second sentence delivers striking confirmation of the first — more than twenty trumpets, polished by use — and \"In fact\" is the transition that presents evidence as emphatic support for a claim just made.\n\n**The Full Solution:**\n- Sentence one advances the archaeologists' claim: sound was central to the temple's ceremonies.\n- Sentence two does not merely continue the thought; it intensifies it with hard evidence — instruments in quantity, worn by playing.\n- A claim followed by its most arresting piece of support takes an emphasizing transition.\n\n**Why the other choices are wrong:**\n- A: \"Nonetheless\" concedes an obstacle, but the trumpet find supports rather than resists the claim.\n- B: \"Meanwhile\" implies a second, parallel scene; both sentences concern the same site and argument.\n- C: \"By contrast\" needs two things set against each other, and the discovery agrees with the claim instead of opposing it.",
          "_meta": {
            "anchor": "Stanford CCRMA Chavín project (Pututus page): 21 intact pututus excavated (2001, 2018), with mouthpieces cut at the spire and use-polished surfaces."
          }
        },
        {
          "id": 952,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Pacific Coast salmon canneries once relied on crews of skilled hand butchers, and an experienced crew set the pace for the entire line. In the early 1900s, inventors introduced a machine that could butcher salmon mechanically. ______ the machine spread from cannery to cannery, and the large butchering crews it replaced dwindled.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Eventually,"
            },
            {
              "id": "B",
              "text": "However,"
            },
            {
              "id": "C",
              "text": "In other words,"
            },
            {
              "id": "D",
              "text": "In addition,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The passage is a sequence in time — skilled hand crews, then the machine's introduction in the early 1900s — and the final sentence is the endpoint that sequence was building toward. \"Eventually\" places it there.\n\n**The Full Solution:**\n- The text moves from the era of hand butchering to the arrival of a machine in the early 1900s.\n- The last sentence describes what happened over the following years: the machine spread and the crews dwindled.\n- A closing state reached at the end of a sequence is introduced by a transition of time.\n\n**Why the other choices are wrong:**\n- B: \"However\" would set the machine's spread against its introduction, but the spread is that introduction's direct result, not a reversal of it.\n- C: \"In other words\" restates; the final sentence adds a new development rather than rephrasing the previous one.\n- D: \"In addition\" flattens the sequence into a list, losing the temporal arc from hand work to machine that the passage establishes.",
          "_meta": {
            "anchor": "Mechanical salmon butchering machine invented c. 1903 by Edmund A. Smith (patented 1905), replacing hand-butchering crews in Pacific Coast canneries. 2026-10-04 review removed unverified 1880s soldering / filling-machine dates."
          }
        },
        {
          "id": 953,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "The camera obscura, known since antiquity, projects a real image of a scene into a darkened chamber or box.",
              "An artist working inside a camera obscura can trace the projected image directly.",
              "The camera lucida, patented in 1806, is a small prism mounted on a stem and is used in ordinary daylight.",
              "An artist looking through the prism sees the scene apparently superimposed on the drawing paper, but no image is actually cast on the paper.",
              "The camera lucida was compact enough to carry in a coat pocket for fieldwork."
            ],
            "goal": "The student wants to emphasize a difference between the camera lucida and the camera obscura."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Whereas the camera obscura casts a real, traceable image in a darkened space, the camera lucida projects no image onto the paper at all."
            },
            {
              "id": "B",
              "text": "The camera lucida, patented in 1806, is a small prism mounted on a stem and used in ordinary daylight."
            },
            {
              "id": "C",
              "text": "Both the camera obscura and the camera lucida helped artists set down the proportions of a scene accurately."
            },
            {
              "id": "D",
              "text": "The camera obscura, an instrument known since antiquity, projects a real image of a scene into a darkened chamber or box, where an artist can trace the projected image directly."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Emphasizing a difference requires putting both devices in one frame and stating what divides them. A does exactly that with the sharpest divide the notes contain: a real projected image versus no projection at all.\n\n**The Full Solution:**\n- The goal names two devices, so the sentence must mention both — and in contrastive relation, which A's \"Whereas\" supplies.\n- A draws its two halves straight from the notes: the obscura's traceable projection in a dark chamber; the lucida's superimposition, with \"no image... actually cast on the paper.\"\n\n**Why the other choices are wrong:**\n- B: It describes the camera lucida alone; with one device on stage, no difference can be emphasized.\n- C: It emphasizes a similarity — the precise opposite of the stated goal.\n- D: Like B, it presents a single device; the camera lucida never appears for the comparison.",
          "_meta": {}
        },
        {
          "id": 954,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "A seabird monitoring program has counted breeding pairs in the same cliff plots every summer since the late 1950s.",
              "Counts follow a written protocol fixing the date range, time of day, and plot boundaries used each year.",
              "Because the method has never changed, differences between years reflect changes in the birds themselves.",
              "The series now spans more than sixty years, longer than most instrument records of ocean conditions in the region.",
              "Ecologists have used the series to link breeding numbers to shifts in the fish populations that seabirds depend on."
            ],
            "goal": "The student wants to emphasize the scientific value of the census's long, unbroken record."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "A seabird monitoring program has counted breeding pairs in the same cliff plots every summer since the late 1950s, following a fixed written protocol."
            },
            {
              "id": "B",
              "text": "Ecologists who use the census data are interested primarily in the populations of the small fish that cliff-nesting seabirds depend on for food."
            },
            {
              "id": "C",
              "text": "Unchanged for over sixty years, the census records true trends in the birds, over a span long enough to link breeding numbers to shifts in fish."
            },
            {
              "id": "D",
              "text": "A written protocol fixes the date range, the time of day, and the plot boundaries to be used in each year's counts of breeding seabirds."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The value to be emphasized has two ingredients — length and unbrokenness — and C converts both into scientific payoff: trends that reflect the birds rather than the method, and a span long enough to reveal links to fish populations.\n\n**The Full Solution:**\n- \"Unchanged for over sixty years\" compresses the notes on constancy and duration.\n- \"Records true trends in the birds\" states why constancy matters scientifically.\n- The closing clause shows the record in use — the demonstrated payoff that makes the case for its value.\n\n**Why the other choices are wrong:**\n- A: It reports the counting arrangement without a word about why the record is scientifically valuable.\n- B: It drops the census entirely, mentioning only the fish.\n- D: The protocol detail alone establishes procedure, not the significance of six decades of consistent data.",
          "_meta": {}
        }
      ]
    }
  ]
};

export default practiceTest9RW;
