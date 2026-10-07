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
          "passage": "A peat bog is a difficult place for the microbes of decay. Sphagnum moss acidifies the water around it and contains compounds that ______ bacterial growth. The cold, oxygen-poor water does the rest, so leather, wood, and even human skin can last in a bog for centuries with little change.",
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
          "passage": "In the desert city of Yazd, in central Iran, tall towers rise above the rooftops of many older houses. Travelers sometimes take the structures to be purely ______, but each tower is a working device. Openings at its top catch passing breezes and channel them down into the rooms below, keeping the house livable in the hottest months.",
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
          "passage": "The vicuña, a wild Andean relative of the alpaca, yields its prized fleece only ______. In the traditional roundups known as chaccu, herders gather the free-ranging animals no more than once every two to three years, shear each one, and release the herd unharmed.",
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
          "explanation": "**Choice C is correct.** The second sentence restates the blank in concrete terms — gatherings no more than once every two to three years — and \"sparingly\" is the word that sums up such restrained, infrequent harvests.\n\n**The Full Solution:**\n- The second sentence spells out the blank's meaning.\n- The details are all about restraint and infrequency: gatherings years apart, each animal shorn and released unharmed.\n- \"Sparingly\" — in small amounts, with restraint — is the precise one-word restatement of that pattern.\n\n**Why the other choices are wrong:**\n- A: \"Reluctantly\" attributes unwillingness to an animal; the text describes quantity and frequency, not attitude.\n- B: \"Seasonally\" implies a yearly rhythm, but the roundups happen only once every two to three years.\n- D: \"Profitably\" concerns money, which the sentence never mentions; the second sentence's details describe scarcity, not earnings.",
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
              "text": "At Chavín de Huántar, a 3,000-year-old temple complex in the Peruvian Andes, the archaeologist John Rick has explored narrow stone galleries that channel and distort sound. Conch-shell trumpets recovered at the site produce loud, roaring tones, and the galleries carry and reshape that sound. Rick sees these effects as tools of authority. By staging overwhelming experiences that only they could control, he argues, the temple's priests showed visiting pilgrims seemingly supernatural power."
            },
            {
              "label": "Text 2",
              "text": "Acoustic measurements at Chavín de Huántar have confirmed that the galleries transmit and transform the sound of conch-shell trumpets. The disorienting effects can be reproduced and measured today. But demonstrating an effect is not the same as demonstrating a plan. Any building alters sound whether or not its makers intend it to. Linking the galleries' acoustics to deliberate design therefore requires independent evidence about how the builders used and changed these spaces over time."
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
          "explanation": "**Choice A is correct.** The author of Text 2 confirms the effects but qualifies the inference drawn from them: \"demonstrating an effect is not the same as demonstrating a plan.\" Rick's interpretation treats the acoustics as engineered for authority; the author of Text 2 would answer that intent needs independent evidence.\n\n**The Full Solution:**\n- Text 1's claim has two layers: the galleries produce striking effects, and the builders designed them to do so.\n- Text 2 accepts the first layer outright — the effects \"can be reproduced and measured today.\"\n- Its reservation targets the second layer only: buildings alter sound regardless of intent, so design must be established separately. That is precisely the caution choice A states.\n\n**Why the other choices are wrong:**\n- B: It reverses Text 2's position — the author reports measurements confirming the galleries' effects on sound.\n- C: Neither text raises the question of where the trumpets were played; Text 2 concerns the galleries themselves.\n- D: It grants the very point Text 2 declines to grant — deliberate engineering — and invents a doubt about pilgrims' reactions that the author never expresses.",
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
          "passage": "Histories of the Pacific Coast salmon-canning industry long dwelt on fleets and machinery, treating the workforce as interchangeable hands. The canneries' own records tell another story. Labor contractors assembled experienced crews, many of them Chinese and later Japanese and Filipino immigrants. Crew members held distinct skilled positions, from butchers who could clean a fish in seconds to solderers whose seams determined whether a can spoiled. The quality of a season's pack varied with the crew, and cannery owners competed to engage the most practiced ones. The industry's output, in short, rested on expertise its own chroniclers rarely acknowledged.",
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
          "passage": "Economists have observed that a technology often becomes cheaper as more of it is built and its makers gain experience. Between 2010 and 2020, the world's installed solar and wind power capacity each more than tripled. Using estimates from the International Renewable Energy Agency, a student concludes that over that decade, electricity from newly built plants of both types became much cheaper because ______",
          "questionTable": {
            "type": "table",
            "caption": "Global average cost of electricity from newly built solar and wind power plants, 2010 and 2020",
            "headers": [
              "Type of plant",
              "Cost in 2010 (dollars per kilowatt-hour)",
              "Cost in 2020 (dollars per kilowatt-hour)"
            ],
            "rows": [
              [
                "Utility-scale solar",
                "0.381",
                "0.057"
              ],
              [
                "Onshore wind",
                "0.089",
                "0.039"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "in 2010, electricity from utility-scale solar plants cost more than four times as much as electricity from onshore wind plants, at $0.381 versus $0.089 per kilowatt-hour."
            },
            {
              "id": "B",
              "text": "electricity from onshore wind plants cost $0.039 per kilowatt-hour in 2020, the lowest cost shown in the table."
            },
            {
              "id": "C",
              "text": "from 2010 to 2020, the cost fell from $0.381 to $0.057 per kilowatt-hour for utility-scale solar and from $0.089 to $0.039 for onshore wind."
            },
            {
              "id": "D",
              "text": "electricity from utility-scale solar plants cost less in 2020 than electricity from onshore wind plants had cost in 2010."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The student concludes that electricity from BOTH kinds of plants became much cheaper over the decade, and C is the only choice that shows the cost falling for each one from 2010 to 2020.\n\n**The Full Solution:**\n- How to spot it: the conclusion is about change over time for two types of plants, so the evidence must compare each row's 2010 cost with its own 2020 cost.\n- Utility-scale solar fell from $0.381 to $0.057 per kilowatt-hour (about 85 percent), and onshore wind fell from $0.089 to $0.039 (about 56 percent).\n- C reports both declines, which matches the claim's scope: both types of plants, across the whole decade.\n\n**Why the other choices are wrong:**\n- A: It compares the two types of plants in 2010 only, so it shows nothing about how either cost changed.\n- B: It gives one 2020 figure for onshore wind; a single year's cost cannot show that the cost fell.\n- D: True in the table, but it compares solar's 2020 cost with wind's 2010 cost, mixing two types of plants and two years; it does not show that either cost fell.",
          "_meta": {
            "anchor": "Falling cost of electricity from new solar and onshore wind plants, 2010-2020 (IRENA global weighted-average LCOE: solar PV 0.381 -> 0.057 USD/kWh, onshore wind 0.089 -> 0.039); capacity 2010->2020 solar 39 -> 714 GW, wind 197 -> 733 GW. Replaces unattributed illustrative artesian-well data (2026-10-06 verifier).",
            "sources": [
              "https://www.irena.org/publications/2021/Jun/Renewable-Power-Costs-in-2020",
              "https://now.solar/2022/09/28/renewable-power-generation-costs-in-2020/",
              "https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jun/IRENA_Power_Generation_Costs_2020_Summary.pdf",
              "https://taiyangnews.info/business/irena-world-added-127-gw-new-solar-capacity-in-2020"
            ]
          }
        },
        {
          "id": 909,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The Hanseatic League, an association of trading towns around the Baltic and North Seas, dominated northern European commerce for three centuries. Yet it had no treasury, no standing army, and no permanent administrative body. Its power operated through privileges: member merchants secured exclusive trading rights, exemptions from tolls, and their own self-governing compounds, known as kontors, in foreign ports from London to Novgorod. A town that defied the League's decisions risked exclusion from these privileges, a penalty severe enough to hold hundreds of independent towns in loose but lasting alignment.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The Hanseatic League declined because it never acquired the treasury and army that its commercial rivals eventually possessed."
            },
            {
              "id": "B",
              "text": "The kontors the League kept in foreign ports mattered more to its success than its merchants' exclusive trading rights."
            },
            {
              "id": "C",
              "text": "Member towns of the Hanseatic League routinely defied its decisions because the League had no army, treasury, or other formal machinery for punishing them."
            },
            {
              "id": "D",
              "text": "The League held lasting commercial power not through the institutions of a state but through privileges its members could not afford to lose."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text's arc runs from a puzzle — three centuries of dominance with no treasury, army, or permanent administration — to its resolution: power \"operated through privileges,\" enforced by the threat of exclusion. Choice D restates exactly that.\n\n**The Full Solution:**\n- The first two sentences set up the paradox: dominance without the standard equipment of a state.\n- The last two sentences resolve it — exclusive rights, toll exemptions, and kontors bound members together, and losing them was \"a penalty severe enough\" to keep towns aligned.\n- D captures both halves: not state machinery, but indispensable privileges.\n\n**Why the other choices are wrong:**\n- A: The text describes the League's lasting power, not its decline, and never presents the missing institutions as a cause of failure.\n- B: The kontors are one item in a list of privileges; the text never ranks them above the others.\n- C: It inverts the final sentence — the threat of exclusion kept towns in alignment precisely despite the absence of formal machinery.",
          "_meta": {}
        },
        {
          "id": 910,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Inside a harmonica or an accordion, each note is produced by a free reed, a thin metal tongue riveted over a close-fitting slot. Air blown past the tongue makes it swing back and forth through the slot, chopping the airstream into regular pulses that the ear hears as a pitch. That pitch is set by the tongue's own length and stiffness rather than by anything the player does. A free reed therefore sounds the same note no matter how hard the player blows: blowing harder makes the tone louder, not higher.",
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
          "explanation": "**Choice B is correct.** The text states the reason directly: the pitch \"is set by the tongue's own length and stiffness rather than by anything the player does.\"\n\n**The Full Solution:**\n- The question asks for the text's stated cause, and the third sentence supplies it in so many words.\n- The consequence follows in the next sentence: harder blowing changes loudness, not pitch — confirming that the note is fixed by the tongue's physical properties.\n\n**Why the other choices are wrong:**\n- A: The text never says the slot changes size; it is described only as \"close-fitting.\"\n- C: The explanation given is mechanical, not a matter of player skill — the text says the pitch is set \"rather than by anything the player does.\"\n- D: The rivet appears only as the tongue's mounting; no force-absorbing role is mentioned anywhere."
        },
        {
          "id": 913,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Venus is nearly twice as far from the Sun as Mercury is, yet its surface is much hotter. Planetary scientists attribute Venus's heat to its thick atmosphere of carbon dioxide, which traps heat, rather than to its distance from the Sun. Data on four planets support this account because ______",
          "questionTable": {
            "type": "table",
            "caption": "Distance from the Sun, surface pressure, and mean surface temperature of four planets",
            "headers": [
              "Planet",
              "Distance from the Sun (million km)",
              "Surface pressure (bars)",
              "Mean surface temperature (°C)"
            ],
            "rows": [
              [
                "Mercury",
                "57.9",
                "0",
                "167"
              ],
              [
                "Venus",
                "108.2",
                "92",
                "464"
              ],
              [
                "Earth",
                "149.6",
                "1",
                "15"
              ],
              [
                "Mars",
                "228.0",
                "0.01",
                "−65"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "Mars, the farthest of the four planets from the Sun, has the coldest mean surface temperature, at −65°C."
            },
            {
              "id": "B",
              "text": "Earth's surface pressure, at 1 bar, is greater than that of Mercury or Mars but far lower than that of Venus."
            },
            {
              "id": "C",
              "text": "Venus is farther from the Sun than Mercury but is far hotter, at 464°C, and has the densest atmosphere, at 92 bars."
            },
            {
              "id": "D",
              "text": "Mercury, at 57.9 million kilometers, is closer to the Sun than any other planet in the table, and its mean temperature is 167°C."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The scientists credit Venus's heat to its thick atmosphere rather than to its distance from the Sun, so the supporting data must show both that distance does not explain the heat and that Venus's atmosphere is unusually dense. Only C does both: Venus is farther from the Sun than Mercury yet far hotter (464°C versus 167°C), and its surface pressure of 92 bars is by far the highest in the table.\n\n**The Full Solution:**\n- The claim has two parts: distance is not the cause, and the dense atmosphere is.\n- Distance: Venus (108.2 million km) is farther out than Mercury (57.9 million km), yet its mean temperature is far higher.\n- Atmosphere: Venus's 92 bars dwarfs every other planet's surface pressure (1 bar or less).\n\n**Why the other choices are wrong:**\n- A: Mars being both farthest and coldest fits a distance explanation and says nothing about Venus's atmosphere.\n- B: The comparison of surface pressures never mentions temperature, so it cannot show that the dense atmosphere is linked to heat.\n- D: Mercury's closeness and temperature, taken alone, do not address Venus at all.",
          "_meta": {
            "anchor": "Venus surface heat: dense atmosphere rather than distance — two-column key",
            "sources": [
              "https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
            ]
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
              "text": "At colonies where breeding pairs were tracked at their nests, single-day ledge photographs captured only about two-thirds of the known breeding pairs."
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
              "text": "Two observers counting the birds in the same photograph often arrive at totals that differ by several percentage points, especially when the ledges are crowded."
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
          "passage": "Steller's sea cow, a massive northern relative of the manatee, entered the scientific record in 1741, when the naturalist Georg Wilhelm Steller studied the animals in the shallows of the Commander Islands. By 1768 the species was gone. The sea cows were slow, buoyant, and unable to dive, and the entire population was confined to a single small archipelago. After the expedition's route became known, fur-trading crews began stopping at the islands regularly, killing the animals to provision their ships. Given how swiftly the end came, researchers infer that ______",
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
          "passage": "Because the water of the Dead Sea is roughly ten times as salty as ocean ______ swimmers there float with almost no effort, their bodies held up by the dense brine.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "water,"
            },
            {
              "id": "B",
              "text": "water"
            },
            {
              "id": "C",
              "text": "water;"
            },
            {
              "id": "D",
              "text": "water:"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence opens with a dependent \"Because...\" clause, and the conventional boundary between an introductory dependent clause and the main clause is a comma.\n\n**The Full Solution:**\n- \"Because the water of the Dead Sea is roughly ten times as salty as ocean water\" cannot stand alone; \"Because\" makes it subordinate.\n- The main clause follows: \"swimmers there float with almost no effort.\"\n- A comma is the mark that joins an introductory subordinate clause to the sentence it modifies.\n\n**Why the other choices are wrong:**\n- B: Omitting the comma runs the introductory clause straight into the main clause, obscuring where one ends and the other begins.\n- C: A semicolon must separate two independent clauses, and the \"Because\" clause is not independent.\n- D: A colon must follow a complete statement that introduces what comes next; a dependent clause cannot support one.",
          "_meta": {
            "anchor": "Dead Sea salinity and floating — comma after introductory Because-clause",
            "sources": [
              "https://en.wikipedia.org/wiki/Dead_Sea"
            ]
          }
        },
        {
          "id": 921,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "A television or phone screen does not need a separate light for every color it shows. Each pixel is built from just three primary colors of ______ red, green, and blue. Varying the brightness of these three produces the full range of colors a viewer sees.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "light,"
            },
            {
              "id": "B",
              "text": "light;"
            },
            {
              "id": "C",
              "text": "light"
            },
            {
              "id": "D",
              "text": "light:"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The words before the blank form a complete independent clause, and what follows is a list that names the three colors. A colon is the conventional mark for introducing such a list after a complete clause.\n\n**The Full Solution:**\n- \"Each pixel is built from just three primary colors of light\" is a complete sentence.\n- \"red, green, and blue\" is not a clause; it spells out which three colors are meant.\n- A colon after a complete clause signals that a list or explanation follows.\n\n**Why the other choices are wrong:**\n- A: A comma makes \"light, red, green, and blue\" read as a single run of four items rather than three colors introduced by the clause.\n- B: A semicolon must join two independent clauses, and \"red, green, and blue\" is not a clause.\n- C: With no punctuation, the list runs directly into \"light,\" making the sentence confusing.",
          "_meta": {
            "anchor": "RGB pixels on screens — colon before a list",
            "sources": [
              "https://en.wikipedia.org/wiki/RGB_color_model"
            ]
          }
        },
        {
          "id": 924,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Esperanto was published in 1887 as an easy-to-learn language that its creator hoped would become a common second language for the whole world. It never reached that goal, and no country has adopted it as an official language. ______ Esperanto still has a worldwide community of speakers, including some people who have spoken it from birth.",
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
          "explanation": "**Choice D is correct.** The final sentence runs against the expectation set by the one before it: Esperanto failed to become a world language, yet it still has a worldwide community of speakers. \"Nevertheless\" marks exactly that concession and reversal.\n\n**The Full Solution:**\n- Sentence two states a limitation: the language never reached its goal and no country adopted it.\n- Sentence three reports a fact that holds despite that limitation: people around the world still speak it, some from birth.\n- A failure followed by a surviving community is a contrast, which calls for a concessive transition.\n\n**Why the other choices are wrong:**\n- A: \"In addition\" treats the surviving community as more of the same, ignoring the tension with the failure just described.\n- B: \"Therefore\" claims the community exists because the language failed, which reverses the logic.\n- C: \"For instance\" would make the last sentence an example of Esperanto's failure, which it is not.",
          "_meta": {
            "anchor": "Esperanto: never a world language, yet a lasting community — Nevertheless",
            "sources": [
              "https://en.wikipedia.org/wiki/Esperanto"
            ]
          }
        },
        {
          "id": 925,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Compared with traditional incandescent bulbs, LED bulbs that meet ENERGY STAR standards use at least 75 percent less energy to produce the same light. ______ they last up to 25 times longer, so a household that switches to LEDs buys far fewer replacement bulbs.",
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
          "explanation": "**Choice A is correct.** The first sentence gives one advantage of LED bulbs (they use far less energy), and the second adds a separate advantage (they last much longer). \"Moreover\" signals that a further point is being added in support of the same idea.\n\n**The Full Solution:**\n- Sentence one: LEDs use at least 75 percent less energy than incandescent bulbs.\n- Sentence two: LEDs also last up to 25 times longer.\n- Two separate benefits pointing the same way call for an additive transition.\n\n**Why the other choices are wrong:**\n- B: \"Instead\" signals a replacement or alternative, but the longer life does not replace the energy savings; it adds to them.\n- C: \"Specifically\" would introduce a detail of the energy savings, but a bulb's life span is a different benefit.\n- D: \"Subsequently\" signals a later event in time, but the two sentences describe features that hold at the same time.",
          "_meta": {
            "anchor": "LED bulbs vs incandescent — Moreover adds a second advantage",
            "sources": [
              "https://www.energy.gov/energysaver/led-lighting"
            ]
          }
        },
        {
          "id": 923,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "The ogham script, carved as short strokes along the edges of standing stones in early medieval Ireland, was once assumed to be a secret code readable only by a small learned elite. ______ the inscriptions themselves record little more than personal names and lines of descent, the kind of information a memorial or boundary marker would announce to any passerby.",
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
              "The Grand Canal is a system of artificial waterways in eastern China.",
              "Its main route runs about 1,776 kilometers, linking Beijing in the north with Hangzhou in the south.",
              "Its sections were first joined into one system during the Sui dynasty (581–618 CE).",
              "It is the longest artificial waterway in the world.",
              "It was named a UNESCO World Heritage Site in 2014."
            ],
            "goal": "The student wants to introduce the Grand Canal to an audience unfamiliar with it."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "The Grand Canal, the world's longest artificial waterway, runs about 1,776 kilometers through eastern China, from Beijing to Hangzhou."
            },
            {
              "id": "B",
              "text": "A waterway first joined into one system during the Sui dynasty was named a UNESCO World Heritage Site in 2014."
            },
            {
              "id": "C",
              "text": "Artificial waterways in eastern China link cities in the north with cities in the south."
            },
            {
              "id": "D",
              "text": "The Grand Canal, whose sections were first joined into one system during the Sui dynasty (581–618 CE), was named a UNESCO World Heritage Site in 2014."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** An introduction for unfamiliar readers must name the Grand Canal and say what and where it is. Choice A does all of this in one sentence: it is the world's longest artificial waterway, running about 1,776 kilometers through eastern China from Beijing to Hangzhou.\n\n**The Full Solution:**\n- The goal has two demands: name the canal and make it understandable to readers who have never heard of it.\n- Choice A names it, identifies what it is, and gives its location and length.\n\n**Why the other choices are wrong:**\n- B: It never names the Grand Canal or says where it is.\n- C: It describes waterways in general and never mentions the Grand Canal.\n- D: It assumes the reader already knows what the Grand Canal is, giving historical dates without explaining what the canal is or where it runs.",
          "_meta": {
            "anchor": "Grand Canal of China — RS introduce to an unfamiliar audience",
            "sources": [
              "https://en.wikipedia.org/wiki/Grand_Canal_(China)"
            ]
          }
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
          "passage": "The Mohs scratch test lets a geologist estimate a mineral's hardness with a few common objects. If a fingernail scratches the sample, it is very soft; if only a copper coin does, it is somewhat harder; if only a steel knife does, it is harder still. Field guides therefore present the test as ______, something a beginner can do in minutes.",
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
          "explanation": "**Choice A is correct.** The passage describes a test that needs only a fingernail, a coin, and a knife, and the phrase after the blank says a beginner can do it in minutes. The word that sums this up is \"straightforward.\"\n\n**The Full Solution:**\n- The passage shows the procedure step by step: try to scratch the sample with each common object in turn.\n- The phrase after the blank (\"something a beginner can do in minutes\") restates the missing word, so the blank must mean simple and easily done.\n\n**Why the other choices are wrong:**\n- B: \"Incomprehensible\" reverses the point; a test a beginner can do in minutes is easy to understand.\n- C: \"Tedious\" implies long, wearying effort, the opposite of a test done in minutes.\n- D: \"Ingenious\" would praise the test's cleverness, but the sentence describes how easy the test is for its user, not how inventive it is.",
          "_meta": {
            "anchor": "Mohs scratch test with common objects — WIC straightforward",
            "sources": [
              "https://en.wikipedia.org/wiki/Mohs_scale",
              "https://sciencenotes.org/mohs-hardness-scale/"
            ]
          }
        },
        {
          "id": 931,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In a Balinese gamelan, many of the metal instruments are built in pairs, and the two instruments of each pair are deliberately tuned slightly apart. A newcomer might expect such mismatched pairs to sound ______ when struck together; instead, the small difference produces a steady, shimmering pulse, called ombak, that is central to the music.",
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
          "explanation": "**Choice B is correct.** The newcomer's expectation is set against what actually happens (\"instead\"): pairs tuned slightly apart might seem likely to clash, but they produce a pleasing, shimmering pulse. \"Cacophonous\" means harsh and jarring, which is what one would expect from mismatched tuning.\n\n**The Full Solution:**\n- The instruments in each pair are \"tuned slightly apart,\" so a listener might expect them to sound out of tune together.\n- \"Instead\" signals that the expectation is wrong: the result is a steady, shimmering pulse central to the music.\n- The blank must name the opposite of that pleasing result, a harsh clash, which is what \"cacophonous\" means.\n\n**Why the other choices are wrong:**\n- A: \"Resonant\" describes a full, ringing sound, which is not an expectation the shimmering pulse would overturn.\n- C: \"Muted\" means quiet or softened, but the text contrasts a feared clash with a pleasing pulse, not loudness with softness.\n- D: \"Overwhelming\" concerns force or volume, while the expectation at issue comes from the mismatched tuning.",
          "_meta": {
            "anchor": "Balinese gamelan paired tuning (ombak) — WIC H cacophonous",
            "sources": [
              "https://en.wikipedia.org/wiki/Gamelan"
            ]
          }
        },
        {
          "id": 928,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "The kākāpō, a large flightless parrot of New Zealand, evolved where the main predators were birds of prey that hunted by sight. When threatened, it freezes and relies on its mossy green feathers for camouflage. That defense failed against introduced cats and stoats, which hunt by smell: they found the motionless birds easy to ______.",
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
          "explanation": "**Choice B is correct.** A bird that freezes in place instead of fleeing lets a predator that has found it by smell get close, so the predators found the birds easy to \"approach.\"\n\n**The Full Solution:**\n- The logic is causal: freezing worked against hunters that needed to see their prey, but cats and stoats hunt by smell.\n- An animal that stays motionless and cannot fly away is an animal a predator can get close to.\n\n**Why the other choices are wrong:**\n- A: \"Overlook\" means to fail to notice, but predators hunting by smell would find the birds, not miss them; the passage says the defense failed.\n- C: Nothing in the passage involves taming; cats and stoats hunt the birds.\n- D: Ease of description has no connection to a predator's hunting by smell or to a bird that freezes in place.",
          "_meta": {
            "anchor": "kākāpō freezing defense vs introduced predators — WIC approach",
            "sources": [
              "https://en.wikipedia.org/wiki/K%C4%81k%C4%81p%C5%8D"
            ]
          }
        },
        {
          "id": 930,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Ancient writers credited the Library of Alexandria with as many as half a million papyrus scrolls. Some modern historians doubt those totals, since a collection that large would have held far more ancient works than scholars know ever existed. In their view, the library's real holdings were considerably more ______.",
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
          "explanation": "**Choice D is correct.** The text sets ancient claims of up to half a million scrolls against modern historians' doubts about those totals, so the blank must describe holdings smaller than the ancient claims: \"modest.\"\n\n**The Full Solution:**\n- The first sentence gives a grand figure: as many as half a million scrolls.\n- The second sentence explains why historians doubt it: so many scrolls would mean far more ancient works than scholars know existed.\n- \"Considerably more ______\" must therefore mean smaller in scale, and \"modest\" means limited in size or amount.\n\n**Why the other choices are wrong:**\n- A: \"Elaborate\" suggests something more detailed or complex, which does not answer a doubt about the number of scrolls.\n- B: The text is about how many scrolls the library held, not about how long they lasted.\n- C: The historians question the size of the collection, not its worth; nothing suggests the real holdings were more valuable.",
          "_meta": {
            "anchor": "Library of Alexandria: ancient claims of up to half a million scrolls vs modern historians' smaller estimates (Bagnall 2002) — WIC modest",
            "sources": [
              "https://www.open.edu/openlearn/history-the-arts/library-alexandria/content-section-2.1",
              "https://en.wikipedia.org/wiki/Library_of_Alexandria"
            ]
          }
        },
        {
          "id": 934,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "In the 1930s, many bridge engineers held that a suspension bridge did not need a deep, stiff deck. In their view, the weight of the cables and roadway would keep the bridge steady, so a slender deck could be both economical and elegant. The Tacoma Narrows Bridge in Washington State, opened in July 1940, was built on this principle. Four months later, in winds of about 40 miles per hour, its deck twisted violently and collapsed. The bridge that replaced it in 1950 was stiffened with a deep, heavy truss, and wind-tunnel testing of bridge designs became standard practice.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It describes a bridge collapse and then evaluates several competing proposals for preventing similar failures."
            },
            {
              "id": "B",
              "text": "It presents two schools of engineering thought and argues that the older one has been unfairly dismissed."
            },
            {
              "id": "C",
              "text": "It traces how engineers revised one bridge's design over many years in response to a series of small problems."
            },
            {
              "id": "D",
              "text": "It states a design principle and its rationale, recounts the failure that discredited it, and describes the approach that replaced it."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text first states a principle and the reasoning behind it (slender decks were thought steady enough because of the cables' weight), then recounts the 1940 collapse that discredited it, and finally describes the stiffer design and wind-tunnel testing that replaced it.\n\n**The Full Solution:**\n- The first two sentences: the principle (no deep, stiff deck needed) and its rationale (the cables and roadway keep the bridge steady).\n- The next two sentences: a bridge built on that principle twisted and collapsed four months after opening.\n- The last sentence: the replacement used a deep, heavy truss, and wind-tunnel testing became standard, the opposite of the slender-deck approach.\n\n**Why the other choices are wrong:**\n- A: The text describes only one response to the collapse and does not weigh competing proposals.\n- B: The text does not defend the older approach; it shows that the collapse discredited it.\n- C: The text describes a sudden failure four months after opening, not gradual revisions in response to small problems.",
          "_meta": {
            "anchor": "Tacoma Narrows Bridge 1940 — slender-deck doctrine, collapse, stiffened replacement (TSP structure)",
            "sources": [
              "https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge_(1940)"
            ]
          }
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
              "text": "Angkor, the capital of the Khmer Empire in what is now Cambodia, is traditionally said to have fallen in 1431, when armies from the Thai kingdom of Ayutthaya captured and sacked it. On this view, the city's end was a military defeat, and its abandonment needs no further explanation."
            },
            {
              "label": "Text 2",
              "text": "Tree rings from cypress trees in the highlands of Vietnam tell a longer story. They show that the region suffered decades-long droughts in the 1300s and early 1400s, broken by unusually intense monsoons. Angkor depended on a vast network of canals and reservoirs. The droughts would have strained its water supply and harvests, and the floods damaged the network itself. The armies of 1431 struck a city whose foundations were already failing."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "Thai armies, though often cited by historians, never actually reached the city of Angkor."
            },
            {
              "id": "B",
              "text": "The 1431 invasion was indeed decisive, but it was launched by a different kingdom than the standard accounts claim."
            },
            {
              "id": "C",
              "text": "An account limited to the 1431 invasion omits the climate extremes that had already undermined Angkor's water system."
            },
            {
              "id": "D",
              "text": "Angkor's residents deliberately abandoned the city once its reservoirs had lost their usefulness."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Text 1 explains Angkor's end entirely by the 1431 invasion. Text 2 does not deny the invasion but argues that droughts and floods had already damaged the city's water system, so the author of Text 2 would say that an account limited to the invasion leaves out those earlier climate extremes.\n\n**The Full Solution:**\n- Text 1: Angkor fell to a military defeat in 1431, and \"needs no further explanation.\"\n- Text 2: tree rings reveal decades of drought and intense monsoons that strained the water supply and damaged the canals and reservoirs.\n- Text 2's final sentence accepts the invasion but says it struck \"a city whose foundations were already failing.\"\n\n**Why the other choices are wrong:**\n- A: Text 2 refers to \"the armies of 1431,\" so its author accepts that the invasion happened.\n- B: Text 2 never questions which kingdom invaded Angkor.\n- D: Text 2 says the droughts and floods damaged the water system, not that residents chose to leave once the reservoirs were useless.",
          "_meta": {
            "anchor": "Decline of Angkor — 1431 Ayutthaya sack vs tree-ring drought/monsoon evidence (Buckley et al. 2010, PNAS) — CTC",
            "sources": [
              "https://www.sciencedaily.com/releases/2010/03/100329203547.htm",
              "https://pmc.ncbi.nlm.nih.gov/articles/PMC2872380",
              "https://en.wikipedia.org/wiki/Angkor"
            ]
          }
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
          "passage": "The Royal Society, founded in London in 1660, took as its motto Nullius in verba, roughly \"Take nobody's word for it.\" What set the society apart from earlier gatherings of scholars was its method. Its members did not settle questions by citing ancient authorities. Instead, they met each week to watch experiments performed in front of them and to discuss the results, and a claim earned their acceptance only after it had been tested and observed.",
          "question": "According to the text, what distinguished the Royal Society from earlier gatherings of scholars?",
          "choices": [
            {
              "id": "A",
              "text": "It admitted members from a wider range of backgrounds and professions than earlier gatherings of scholars had."
            },
            {
              "id": "B",
              "text": "It published its findings in Latin so that scholars across Europe could read them."
            },
            {
              "id": "C",
              "text": "It studied a wider range of subjects than any earlier gathering had attempted."
            },
            {
              "id": "D",
              "text": "It accepted claims only after testing and observing them rather than relying on authorities."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text says the society was set apart by \"its method\": members did not settle questions by citing ancient authorities, and a claim was accepted only after it \"had been tested and observed.\"\n\n**The Full Solution:**\n- The second sentence names the distinguishing feature directly: the society's method.\n- The third and fourth sentences describe that method: no appeals to ancient authorities; experiments performed before the members; acceptance only after testing and observation.\n- The motto, \"Take nobody's word for it,\" sums up the same idea.\n\n**Why the other choices are wrong:**\n- A: The text says nothing about who could become a member.\n- B: The motto is in Latin, but the text never says the society published its findings in Latin.\n- C: The text does not compare the range of subjects the society studied with those of earlier gatherings.",
          "_meta": {
            "anchor": "Royal Society (1660), Nullius in verba, experiments before members — CID detail",
            "sources": [
              "https://en.wikipedia.org/wiki/Royal_Society"
            ]
          }
        },
        {
          "id": 941,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Agricultural historians caution that the acreage history of one US crop should not be read as the trend for US farming in general. Over the same decades, the land planted in one crop can shrink sharply while the land planted in another grows even more sharply. Planting records for two crops bear out this caution because ______",
          "questionTable": {
            "type": "table",
            "caption": "Area planted in two US crops, 1950–2020 (thousands of acres)",
            "headers": [
              "Crop",
              "1950",
              "1980",
              "2020"
            ],
            "rows": [
              [
                "Sorghum",
                "16,055",
                "15,639",
                "5,880"
              ],
              [
                "Soybeans",
                "15,048",
                "69,930",
                "83,354"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "the area planted in sorghum and the area planted in soybeans each changed by millions of acres from 1950 to 2020."
            },
            {
              "id": "B",
              "text": "more acres were planted in soybeans than in sorghum in both 1980 and 2020."
            },
            {
              "id": "C",
              "text": "the combined area planted in the two crops was larger in 2020 than it had been in 1950."
            },
            {
              "id": "D",
              "text": "sorghum acreage fell by nearly two-thirds from 1950 to 2020, while soybean acreage grew more than fivefold."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The caution is that one crop's trend can run opposite to another's. Choice D shows exactly that: the area planted in sorghum fell by nearly two-thirds (16,055 to 5,880 thousand acres), while the area planted in soybeans grew from 15,048 to 83,354 thousand acres, more than five times its 1950 size.\n\n**The Full Solution:**\n- The claim needs two crops moving in opposite directions over the same years.\n- Sorghum: 16,055 thousand acres in 1950 to 5,880 thousand in 2020, a drop of about 63 percent.\n- Soybeans: 15,048 thousand acres in 1950 to 83,354 thousand in 2020, about 5.5 times larger.\n\n**Why the other choices are wrong:**\n- A: Large changes for both crops do not show that the changes went in opposite directions.\n- B: Comparing the crops' acreage in two years says nothing about the direction of each crop's trend.\n- C: The combined total hides the opposite trends that the caution is about.",
          "_meta": {
            "anchor": "US planted acreage, sorghum vs soybeans 1950/1980/2020 (USDA NASS track records) — CoE quant: opposite trends",
            "sources": [
              "https://esmis.nal.usda.gov/sites/default/release-files/c534fn92g/g158cn09g/zc77tv62q/croptr22.pdf",
              "https://esmis.nal.usda.gov/sites/default/release-files/c534fn92g/9593tx78m/1j92gb29s/htrcp-04-27-2007.txt"
            ]
          }
        },
        {
          "id": 942,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "The cave of Lascaux in southwestern France holds hundreds of animal paintings made about 17,000 years ago. Horses are the most common subject, followed by stags, aurochs, and bison. Archaeological evidence shows that reindeer were the principal food of the people who made the paintings. Yet no reindeer appear among the paintings at all. Some scholars therefore argue that the paintings ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "were made by visitors from a distant region where no reindeer lived."
            },
            {
              "id": "B",
              "text": "offer a reliable count of the animals that lived near the cave at the time."
            },
            {
              "id": "C",
              "text": "were painted after reindeer had disappeared from the region around the cave."
            },
            {
              "id": "D",
              "text": "were probably not meant as a record of the animals the artists hunted for food."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Reindeer were the artists' principal food, yet they are entirely absent from the paintings, while horses dominate. If the paintings were a record of what the artists hunted and ate, reindeer would be prominent, so the paintings were probably not meant as such a record.\n\n**The Full Solution:**\n- Evidence 1: the paintings show mostly horses, then stags, aurochs, and bison.\n- Evidence 2: the people who made them ate mainly reindeer.\n- Evidence 3: no reindeer are painted at all. The mismatch rules out a simple record of the hunt.\n\n**Why the other choices are wrong:**\n- A: The text says the people who made the paintings ate mainly reindeer, so they lived where reindeer were available.\n- B: The paintings leave out the animal the artists depended on most, so they cannot be a reliable count of local animals.\n- C: Reindeer were the principal food of the painters themselves, so reindeer had not disappeared when the paintings were made.",
          "_meta": {
            "anchor": "Lascaux: reindeer the principal food but absent from the paintings — inference",
            "sources": [
              "https://en.wikipedia.org/wiki/Lascaux",
              "https://archeologie.culture.gouv.fr/lascaux/en/archaeology-cave-floors"
            ]
          }
        },
        {
          "id": 939,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "The giraffe's long neck is often explained as an adaptation for reaching leaves that other plant eaters cannot. Zoologists Robert Simmons and Lue Scheepers instead hypothesized that the neck grew long mainly through competition among males. Male giraffes fight by swinging their necks and striking each other with their heads, and the winners mate more often. On this view, longer necks were favored because they won fights, not because they reached higher food.",
          "question": "Which finding, if true, would most directly support the zoologists' hypothesis?",
          "choices": [
            {
              "id": "A",
              "text": "Males with longer necks won more fights and mated more often, while giraffes of both sexes usually fed at shoulder height rather than at full reach."
            },
            {
              "id": "B",
              "text": "Giraffes living in areas where most trees are tall have, on average, noticeably longer necks than giraffes living in areas where most trees are short."
            },
            {
              "id": "C",
              "text": "Female giraffes, which do not fight with their necks, have necks nearly as long as males' necks relative to body size."
            },
            {
              "id": "D",
              "text": "Giraffes spend more of each day feeding than most of the other large plant-eating animals of the African savanna do."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The hypothesis credits fighting, not feeding, for the long neck. Choice A supports both halves: longer necks bring success in fights and mating, while giraffes rarely use their full reach when they feed.\n\n**The Full Solution:**\n- The hypothesis has two parts: long necks were favored because they won fights, and not because they reached higher food.\n- A finding that supports it should link neck length to winning fights and show that feeding does not depend on the neck's full length.\n- Choice A does both: longer-necked males win and mate more, and giraffes of both sexes usually feed at shoulder height.\n\n**Why the other choices are wrong:**\n- B: Longer necks where trees are tall would support the feeding explanation, not the fighting one.\n- C: If females, which do not fight with their necks, have necks nearly as long as males', fighting cannot easily explain neck length, so this would weaken the hypothesis.\n- D: Time spent feeding says nothing about whether fights or food selected for long necks.",
          "_meta": {
            "anchor": "Giraffe necks: sexual-selection ('necks for sex', Simmons & Scheepers 1996) vs browsing hypothesis — CoE textual",
            "sources": [
              "https://www.nationalgeographic.com/science/article/giraffes-necks-for-food-or-necks-for-sex",
              "https://whyevolutionistrue.com/2009/05/17/how-the-giraffe-got-its-long-neck/",
              "https://doi.org/10.1086/285957"
            ]
          }
        },
        {
          "id": 938,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "The numerals used around the world today began as an Indian idea. By about the seventh century CE, mathematicians in India wrote numbers with nine digits and a zero, letting each digit's position show its value. Scholars in the Arabic-speaking world adopted the system in the following centuries, and from them it reached Europe, where merchants took it up after about 1200. Over the next few centuries it displaced Roman numerals, which were clumsy for calculation. A method long established in one tradition thus transformed arithmetic in another.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "European mathematicians greatly improved the Indian numerals, developing them far beyond the system that Arabic scholars had passed on."
            },
            {
              "id": "B",
              "text": "Roman numerals stayed in use for centuries because merchants trusted them more than written digits."
            },
            {
              "id": "C",
              "text": "A place-value number system developed in India reached Europe centuries later and transformed calculation there."
            },
            {
              "id": "D",
              "text": "Indian and Arabic scholars developed place-value numerals independently, without any contact with each other."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text traces the numerals from India, where the place-value system with zero was in use by about the seventh century, through Arabic scholars to Europe, where they displaced Roman numerals. Its last sentence states the point: a method long established in one tradition transformed arithmetic in another.\n\n**The Full Solution:**\n- Origin: Indian mathematicians used nine digits and a zero, with position showing value.\n- Spread: Arabic-speaking scholars adopted the system, and it reached Europe after about 1200.\n- Effect: it slowly replaced Roman numerals, which were clumsy for calculation.\n\n**Why the other choices are wrong:**\n- A: The text never says Europeans improved the system.\n- B: The text says Roman numerals were displaced; it gives no reason merchants might have preferred them.\n- D: The text says Arabic scholars adopted the Indian system, the opposite of independent development.",
          "_meta": {
            "anchor": "Hindu-Arabic place-value numerals: India -> Arabic scholars -> Europe, displacing Roman numerals — CID main idea",
            "sources": [
              "https://www.ebsco.com/research-starters/history/arabic-numerals/",
              "https://www.discovermagazine.com/how-medieval-europe-finally-ditched-roman-numerals-42162"
            ]
          }
        },
        {
          "id": 940,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Life expectancy at birth is the number of years a newborn would be expected to live if current death rates stayed the same. Using World Bank estimates for four countries, a student concludes that life expectancy rose substantially in every one of them between 1960 and 2000 because ______",
          "questionTable": {
            "type": "table",
            "caption": "Life expectancy at birth (years) in four countries, 1960 and 2000",
            "headers": [
              "Country",
              "1960",
              "2000"
            ],
            "rows": [
              [
                "Brazil",
                "53.2",
                "69.6"
              ],
              [
                "Egypt",
                "44.4",
                "67.3"
              ],
              [
                "India",
                "45.6",
                "62.7"
              ],
              [
                "Mexico",
                "53.6",
                "72.6"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "Egypt's life expectancy rose from 44.4 years in 1960 to 67.3 years in 2000, the largest gain of the four countries."
            },
            {
              "id": "B",
              "text": "each country's life expectancy rose by at least 16 years, with gains ranging from about 16 to 23 years."
            },
            {
              "id": "C",
              "text": "life expectancy in 2000 was above 60 years in all four countries, with Mexico's the highest at 72.6 years."
            },
            {
              "id": "D",
              "text": "Mexico had the highest life expectancy of the four countries in 2000, and Egypt had the lowest in 1960."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The student's conclusion is about every country, so the supporting data must show a large rise in each one. Choice B does: each country gained at least 16 years, from about 16 years in Brazil (53.2 to 69.6) to about 23 years in Egypt (44.4 to 67.3).\n\n**The Full Solution:**\n- The claim covers \"every one\" of the four countries, so a single country's figures cannot support it.\n- Subtracting row by row: Brazil 16.4, Egypt 22.9, India 17.1, Mexico 19.0.\n- Choice B states that every gain was at least 16 years and gives the range.\n\n**Why the other choices are wrong:**\n- A: Egypt's figures are accurate, but one country cannot show that life expectancy rose in all four.\n- C: It reports only the 2000 values, so it does not show how much life expectancy rose in any country.\n- D: It compares countries within single years and says nothing about change over time.",
          "_meta": {
            "anchor": "Life expectancy at birth 1960 vs 2000, Brazil/Egypt/India/Mexico (World Bank SP.DYN.LE00.IN) — CoE quant 'every row'",
            "sources": [
              "https://api.worldbank.org/v2/country/BRA;EGY;IND;MEX/indicator/SP.DYN.LE00.IN?date=1960:2000&format=json",
              "https://data.worldbank.org/indicator/SP.DYN.LE00.IN"
            ]
          }
        },
        {
          "id": 936,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "India's stepwells do more than store water. Built mostly in the country's dry western regions, these deep stone structures lead down long flights of steps to a well that reaches the water table. People could thus reach water even when it lay far below the surface. Their lower levels stay several degrees cooler than the ground above, and travelers sheltered there during the heat of the day. Women gathered at the wells to draw water and to perform rituals, and many social and religious customs grew up around them.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Stepwells supplied water mainly to travelers and caravans rather than to the people who lived near them."
            },
            {
              "id": "B",
              "text": "India's stepwells were not only sources of water but also cool gathering places central to community life."
            },
            {
              "id": "C",
              "text": "The deepest stepwells were built by wealthy patrons who competed with one another to construct the most elaborate designs."
            },
            {
              "id": "D",
              "text": "Modern piped water has made India's stepwells obsolete as a source of water for nearby towns."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text opens by saying stepwells \"do more than store water\" and then shows how: their cool lower levels sheltered travelers, and women's daily visits made them centers of social and religious life.\n\n**The Full Solution:**\n- The first sentence states the main claim: stepwells did more than store water.\n- The middle of the text explains their basic job, reaching water far below the surface.\n- The rest adds the other roles: cool shelter from the heat and a gathering place where customs grew up.\n\n**Why the other choices are wrong:**\n- A: Travelers are mentioned, but the text also describes local women drawing water, and it never says travelers were the main users.\n- C: The text says nothing about patrons competing over designs.\n- D: The text never mentions modern piped water.",
          "_meta": {
            "anchor": "Indian stepwells (vav/baori): water + cool refuge + social center — CID main idea",
            "sources": [
              "https://www.britannica.com/technology/stepwell",
              "https://www.aramcoworld.com/en/resources/reviews/2020/the-vanishing-stepwells-of-india"
            ]
          }
        },
        {
          "id": 943,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "For much of the twentieth century, land managers in the western United States put out forest fires as quickly as possible. In many dry pine forests, however, small and frequent fires had once cleared away fallen branches, brush, and young trees. Without those fires, this fuel built up for decades, and forests that were once open became crowded with dense growth. Fires that break out in such forests today tend to burn hotter and spread farther. Policies meant to protect forests from fire, then, appear to have ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "reduced the amount of brush and fallen wood that collects on the forest floor."
            },
            {
              "id": "B",
              "text": "contributed to the very kind of severe fire they were meant to prevent."
            },
            {
              "id": "C",
              "text": "had little measurable effect on how intensely forest fires burn."
            },
            {
              "id": "D",
              "text": "protected western forests without changing their structure in any noticeable way."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** Putting out every fire let fuel build up for decades, and that fuel now makes fires burn hotter and spread farther. Policies meant to protect forests from fire therefore helped cause the severe fires they were meant to prevent.\n\n**The Full Solution:**\n- Step 1: fires were put out as quickly as possible.\n- Step 2: without small fires, branches, brush, and young trees accumulated, and open forests became crowded.\n- Step 3: fires in such forests now burn hotter and spread farther, so the protection policy worsened the danger.\n\n**Why the other choices are wrong:**\n- A: The text says fuel built up, the opposite of a reduction.\n- C: The text says today's fires burn hotter, so the policies did affect fire intensity.\n- D: The text says once-open forests became crowded with dense growth, a clear change in structure.",
          "_meta": {
            "anchor": "Twentieth-century fire suppression -> fuel buildup -> more severe western wildfires — inference",
            "sources": [
              "https://in.nau.edu/news/a-look-back-suggests-more-catastrophic-fires-ahead-for-western-u-s/",
              "https://ecowest.org/fires/"
            ]
          }
        },
        {
          "id": 945,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Displayed in the Rotunda of the National Archives in Washington, DC, ______ the original Declaration of Independence, Constitution, and Bill of Rights, all three kept in sealed protective cases.",
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
          "explanation": "**Choice B is correct.** The sentence is inverted: the subject, \"the original Declaration of Independence, Constitution, and Bill of Rights,\" comes after the verb. That subject names three documents joined by \"and,\" so it is plural and takes the plural verb \"are.\"\n\n**The Full Solution:**\n- The opening phrase, \"Displayed in the Rotunda of the National Archives,\" is not the subject.\n- The subject follows the blank: three documents joined by \"and.\"\n- A compound subject joined by \"and\" is plural, and the present tense fits a permanent display, so \"are\" is correct.\n\n**Why the other choices are wrong:**\n- A: \"Is\" is singular and does not agree with the plural subject.\n- C: \"Has been\" is singular and does not agree with the plural subject.\n- D: \"Was\" is singular and does not agree with the plural subject.",
          "_meta": {
            "anchor": "Charters of Freedom in the National Archives Rotunda — inverted sentence, plural verb",
            "sources": [
              "https://visit.archives.gov/whats-on/explore-exhibits/charters-freedom",
              "https://en.wikipedia.org/wiki/Charters_of_Freedom"
            ]
          }
        },
        {
          "id": 949,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The Great Pyramid of Giza, built from an estimated 2.3 million blocks of stone that workers quarried, moved, and lifted into place, ______ the largest of the pyramids at Giza.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "remain"
            },
            {
              "id": "B",
              "text": "have remained"
            },
            {
              "id": "C",
              "text": "remains"
            },
            {
              "id": "D",
              "text": "are remaining"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject of the sentence is \"The Great Pyramid of Giza,\" which is singular, so the verb must be singular: \"remains.\" The long phrase between the subject and the blank contains plural nouns (\"blocks,\" \"workers\"), but they are not the subject.\n\n**The Full Solution:**\n- Strip out the interrupting phrase: \"The Great Pyramid of Giza ______ the largest of the pyramids at Giza.\"\n- The subject is one pyramid, so it needs a singular verb.\n- \"Remains\" is singular and in the present tense, which fits a fact that is still true.\n\n**Why the other choices are wrong:**\n- A: \"Remain\" is a plural verb, which agrees with \"blocks\" or \"workers\" rather than with the subject.\n- B: \"Have remained\" is also plural.\n- D: \"Are remaining\" is plural as well.",
          "_meta": {
            "anchor": "Great Pyramid of Giza, ~2.3 million blocks — singular subject separated from verb",
            "sources": [
              "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
            ]
          }
        },
        {
          "id": 948,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Because eucalyptus leaves supply very little energy, and because a koala needs many hours to digest the tough, fibrous ______ the animal sleeps or rests for most of the day, often 18 to 22 hours.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "foliage,"
            },
            {
              "id": "B",
              "text": "foliage"
            },
            {
              "id": "C",
              "text": "foliage;"
            },
            {
              "id": "D",
              "text": "foliage:"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence opens with a long dependent clause (\"Because eucalyptus leaves supply very little energy, and because a koala needs many hours to digest the tough, fibrous foliage\"), and a comma marks where that introductory clause ends and the main clause (\"the animal sleeps or rests for most of the day\") begins.\n\n**The Full Solution:**\n- Both \"because\" clauses are dependent; neither can stand alone.\n- The main clause starts with \"the animal sleeps.\"\n- A comma is the conventional mark between an introductory dependent clause and the main clause.\n\n**Why the other choices are wrong:**\n- B: Without a comma, the long introductory clause runs straight into the main clause, blurring where one ends and the other begins.\n- C: A semicolon must join two independent clauses, and the \"because\" clauses are dependent.\n- D: A colon must follow an independent clause, and the words before the blank are not one.",
          "_meta": {
            "anchor": "Koalas: low-energy, fibrous eucalyptus diet -> 18-22 hours of sleep — comma after long introductory Because-clause",
            "sources": [
              "https://www.guinnessworldrecords.com/world-records/84855-sleepiest-marsupial",
              "https://savethekoala.com/about-koalas/koalas-diet-digestion/"
            ]
          }
        },
        {
          "id": 946,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Botanists can explain why the leaves of many trees turn yellow in ______ the yellow pigments are present all summer, hidden by green chlorophyll that breaks down as the days grow shorter.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "autumn,"
            },
            {
              "id": "B",
              "text": "autumn"
            },
            {
              "id": "C",
              "text": "autumn:"
            },
            {
              "id": "D",
              "text": "autumn, but"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** \"Botanists can explain why the leaves of many trees turn yellow in autumn\" is an independent clause that sets up an explanation, and the clause after the blank supplies it. A colon is the mark that introduces such an explanation.\n\n**The Full Solution:**\n- The first clause announces that an explanation exists.\n- The second clause gives it: the yellow pigments were there all along, hidden by chlorophyll.\n- A colon after an independent clause can introduce an independent clause that explains it.\n\n**Why the other choices are wrong:**\n- A: A comma alone cannot join two independent clauses; it creates a comma splice.\n- B: With no punctuation, the two independent clauses run together.\n- D: \"But\" signals a contrast, yet the second clause explains the first rather than contrasting with it.",
          "_meta": {
            "anchor": "Autumn leaf color: carotenoids unmasked as chlorophyll breaks down — colon before explanatory clause",
            "sources": [
              "https://www.uky.edu/Ag/Forestry/McLaren/Fallcolor1.htm",
              "https://www.pbs.org/newshour/science/why-do-leaves-change-color"
            ]
          }
        },
        {
          "id": 947,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "In 1963, the US Post Office Department introduced five-digit ZIP codes to speed the sorting and delivery of mail. Since then, businesses and researchers ______ the codes to many other uses, from setting insurance rates to studying the population of neighborhoods.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "apply"
            },
            {
              "id": "B",
              "text": "applied"
            },
            {
              "id": "C",
              "text": "were applying"
            },
            {
              "id": "D",
              "text": "have applied"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** \"Since then\" describes an action that began in the past and continues to the present, which calls for the present perfect: \"have applied.\"\n\n**The Full Solution:**\n- The first sentence sets a starting point in the past: 1963.\n- \"Since then\" stretches from that point up to now.\n- The present perfect (\"have applied\") is the tense for an action continuing from a past point to the present.\n\n**Why the other choices are wrong:**\n- A: The simple present \"apply\" does not connect the action to the period that began in 1963.\n- B: The simple past \"applied\" treats the action as finished, which clashes with \"since then.\"\n- C: \"Were applying\" places the action at some past moment, not over the period from 1963 to now.",
          "_meta": {
            "anchor": "ZIP codes introduced 1963, later used for insurance rates and demographic study — present perfect after 'Since then'",
            "sources": [
              "https://en.wikipedia.org/wiki/ZIP_Code",
              "https://blogs.loc.gov/inside_adams/2013/06/zip-a-dee-doo-dah-the-zip-code-is-50/"
            ]
          }
        },
        {
          "id": 944,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Soon after its 1990 launch, the Hubble Space Telescope sent back blurry images because its main mirror had been ground to the wrong ______ astronauts installed corrective optics in 1993, and the images became sharp.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "shape,"
            },
            {
              "id": "B",
              "text": "shape"
            },
            {
              "id": "C",
              "text": "shape;"
            },
            {
              "id": "D",
              "text": "shape, however"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** \"Soon after its 1990 launch, the Hubble Space Telescope sent back blurry images because its main mirror had been ground to the wrong shape\" is an independent clause, and so is \"astronauts installed corrective optics in 1993, and the images became sharp.\" A semicolon can join two independent clauses.\n\n**The Full Solution:**\n- Left of the blank: a complete sentence about the blurry images and their cause.\n- Right of the blank: a second complete sentence about the 1993 repair.\n- Two independent clauses with no conjunction between them need a semicolon (or a period).\n\n**Why the other choices are wrong:**\n- A: A comma alone between two independent clauses creates a comma splice.\n- B: With no punctuation, the two independent clauses run together.\n- D: \"However\" is not a conjunction, so a comma before it still leaves a comma splice.",
          "_meta": {
            "anchor": "Hubble's flawed mirror (1990) and corrective optics (1993) — semicolon between independent clauses",
            "sources": [
              "https://science.nasa.gov/mission/hubble/overview/hubbles-mirror-flaw",
              "https://esahubble.org/about/history/servicing_mission_1/"
            ]
          }
        },
        {
          "id": 951,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In April 1815, Mount Tambora in Indonesia erupted in the largest volcanic eruption in recorded history. It sent enormous amounts of sulfur gas into the upper atmosphere, where a haze formed that reflected sunlight back into space. ______ the summer of 1816 brought snow in June and widespread crop failures to parts of Europe and North America.",
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
          "explanation": "**Choice B is correct.** The first two sentences describe a cause: the eruption filled the upper atmosphere with a haze that reflected sunlight. The last sentence gives the effect: a summer with June snow and failed crops. \"Consequently\" signals that what follows results from what came before.\n\n**The Full Solution:**\n- Cause: sulfur gas from the eruption formed a haze that blocked sunlight.\n- Effect: the summer of 1816 brought June snow and failed crops.\n- A cause followed by its effect calls for a causal transition.\n\n**Why the other choices are wrong:**\n- A: \"For example\" would make the cold summer an example of the haze, but it is a result of the haze.\n- C: \"Still\" signals that something happened despite what came before, but the cold summer follows from the eruption rather than in spite of it.\n- D: \"In the same way\" signals a comparison between similar things, but the sentence reports an effect, not a parallel case.",
          "_meta": {
            "anchor": "Tambora 1815 eruption -> 1816 'Year Without a Summer' — Consequently",
            "sources": [
              "https://www.aaas.org/year-without-summer",
              "https://en.wikipedia.org/wiki/Year_Without_a_Summer"
            ]
          }
        },
        {
          "id": 950,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Bamboo, a giant grass, grows faster than almost any other plant on Earth, and its new shoots can rise visibly from one day to the next. ______ some species have been recorded growing as much as 91 centimeters, nearly three feet, in a single day.",
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
          "explanation": "**Choice D is correct.** The second sentence gives a striking figure that strengthens the first sentence's claim about how fast bamboo grows. \"In fact\" introduces information that confirms and intensifies a preceding statement.\n\n**The Full Solution:**\n- First sentence: bamboo grows faster than almost any other plant.\n- Second sentence: some species grow up to 91 centimeters in a day.\n- The second sentence backs up and sharpens the first, so an emphasizing transition fits.\n\n**Why the other choices are wrong:**\n- A: \"Nonetheless\" signals a result that runs against what came before, but the second sentence agrees with the first.\n- B: \"Meanwhile\" signals something happening at the same time or a shift to another topic, not support for the same claim.\n- C: \"By contrast\" signals a difference, but the two sentences make the same point.",
          "_meta": {
            "anchor": "Bamboo growth up to 91 cm per day (Guinness World Records) — In fact",
            "sources": [
              "https://www.guinnessworldrecords.com/world-records/fastest-growing-plant",
              "https://www.discoverwildlife.com/plant-facts/fastest-growing-plant"
            ]
          }
        },
        {
          "id": 952,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In the nineteenth century, many city streets were lit by gas lamps, and each evening lamplighters walked their routes, lighting every lamp by hand with a long pole. In the late 1800s, electric street lights began to appear in some cities. ______ electric lighting spread from city to city, and the work of the lamplighters dwindled away.",
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
          "explanation": "**Choice A is correct.** The text moves through time: gas lamps lit by hand, then the first electric street lights, then the spread of electric lighting and the end of the lamplighters' work. \"Eventually\" signals that the last development came after a period of time.\n\n**The Full Solution:**\n- First sentence: gas lamps and the lamplighters who lit them.\n- Second sentence: electric street lights begin to appear in some cities.\n- Third sentence: over time, electric lighting spreads and the lamplighters' work fades, a later stage in the same sequence.\n\n**Why the other choices are wrong:**\n- B: \"However\" signals a contrast, but the spread of electric lights continues the change the second sentence began.\n- C: \"In other words\" signals a restatement, but the last sentence describes a new, later development.\n- D: \"In addition\" adds a separate point, but the last sentence is the outcome of the change over time.",
          "_meta": {
            "anchor": "Gas street lamps and lamplighters replaced by electric street lighting — Eventually",
            "sources": [
              "https://en.wikipedia.org/wiki/Lamplighter",
              "https://harteoutdoorlighting.ie/blogs/news/the-legacy-of-lamplighters"
            ]
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
              "Stalactites and stalagmites are mineral formations found in limestone caves.",
              "Both form from water that drips through a cave and carries dissolved calcite.",
              "Stalactites hang from a cave's ceiling.",
              "As water drips from the ceiling, it leaves calcite behind, so a stalactite grows downward like an icicle.",
              "Stalagmites rise from a cave's floor.",
              "Where the drops land, they leave calcite on the floor, so a stalagmite grows upward."
            ],
            "goal": "The student wants to emphasize a difference between stalactites and stalagmites."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Whereas stalactites hang from a cave's ceiling and grow downward, stalagmites rise from the floor and grow upward."
            },
            {
              "id": "B",
              "text": "Stalagmites form where drops of calcite-rich water land on a cave's floor and leave calcite behind."
            },
            {
              "id": "C",
              "text": "Both stalactites and stalagmites form from dripping water that carries dissolved calcite."
            },
            {
              "id": "D",
              "text": "Stalactites and stalagmites are mineral formations found in limestone caves, where water drips through the rock and carries dissolved calcite."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** To emphasize a difference, the sentence must set the two formations against each other. Choice A does so with \"Whereas,\" contrasting where each forms (ceiling versus floor) and which way each grows (downward versus upward).\n\n**The Full Solution:**\n- The goal asks for a difference, so the answer must mention both formations and contrast them.\n- The notes supply two contrasts: ceiling versus floor, and downward versus upward growth.\n- Choice A combines both in one contrasting sentence.\n\n**Why the other choices are wrong:**\n- B: It describes only stalagmites, so it cannot show a difference between the two.\n- C: It emphasizes a similarity, not a difference.\n- D: It describes both formations together and draws no contrast between them.",
          "_meta": {
            "anchor": "Stalactites vs stalagmites — RS emphasize a difference",
            "sources": [
              "https://www.nps.gov/subjects/caves/growing-speleothems.htm",
              "https://www.britannica.com/science/stalactite"
            ]
          }
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
              "Lake Suwa is a lake in the mountains of central Japan.",
              "Since 1443, priests at a local Shinto shrine have recorded the date each winter when the lake freezes over.",
              "The priests have recorded the same event at the same lake in nearly every year.",
              "The record spans more than 570 years, far longer than modern weather records.",
              "Scientists have used the record to show that the lake now freezes later, and fails to freeze more often, than before the Industrial Revolution."
            ],
            "goal": "The student wants to emphasize the scientific value of the lake's long record."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Since 1443, priests at a local Shinto shrine have recorded the date each winter when Lake Suwa, in the mountains of central Japan, freezes over."
            },
            {
              "id": "B",
              "text": "Scientists who study climate are interested mainly in records of lakes in the mountains of central Japan."
            },
            {
              "id": "C",
              "text": "Recorded the same way for over 570 years, the lake's freeze dates now show scientists that it freezes later and less often."
            },
            {
              "id": "D",
              "text": "Lake Suwa, a lake in the mountains of central Japan, has frozen over in many winters since the fifteenth century."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The goal is to emphasize the record's scientific value. Choice C combines the record's consistency (\"recorded the same way\"), its great length (over 570 years), and what scientists learned from it (the lake now freezes later and less often).\n\n**The Full Solution:**\n- Scientific value comes from three notes together: the same event recorded nearly every year, a span of more than 570 years, and the scientists' use of the record.\n- Choice C uses all three in one sentence.\n- It also states what the record revealed, which is what makes it valuable to science.\n\n**Why the other choices are wrong:**\n- A: It describes how the record began but not why it matters to scientists.\n- B: It makes a claim about climate scientists that the notes do not support and never mentions what the record shows.\n- D: It describes the lake, not the record or its scientific use.",
          "_meta": {
            "anchor": "Lake Suwa freeze records since 1443 (Sharma et al. 2016, Scientific Reports) — RS emphasize scientific value",
            "sources": [
              "https://www.smithsonianmag.com/smart-news/japanese-priests-collected-almost-seven-centuries-climate-data-180958929/",
              "https://deenr.rutgers.edu/Batt_nature_paper_2016.html"
            ]
          }
        }
      ]
    }
  ]
};

export default practiceTest9RW;
