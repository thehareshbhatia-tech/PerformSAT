// Practice Test 12 — SAT Reading & Writing (R&W)
// R&W seating varied 2026-09-07 (scripts/varyRWSeating.mjs): items re-dealt inside their official skill blocks with a per-test seed — block flow and per-skill counts unchanged.
// Auto-assembled by scripts/assembleRWTest.mjs from the authored JSON in
// scripts/generated/authored/test12/. Do not hand-edit this file —
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


export const practiceTest12RW = {
  id: "practice-test-12-rw",
  title: "Practice Test 12 — Reading & Writing",
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
          "id": 1203,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "A hot-air balloon has no rudder, propeller, or sail, so a first-time spectator might assume that pilots simply drift wherever the breeze takes them. Championship tactics run ____ that assumption: winds at different altitudes often move in different directions, and a skilled pilot climbs and descends to reach the layer whose current bends toward the target.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "parallel to"
            },
            {
              "id": "B",
              "text": "ahead of"
            },
            {
              "id": "C",
              "text": "independent of"
            },
            {
              "id": "D",
              "text": "contrary to"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The spectator's assumption is that pilots drift helplessly; the colon then shows pilots steering deliberately by choosing wind layers. The tactics contradict the assumption, so they run \"contrary to\" it.\n\n**The Full Solution:**\n- The assumption: with no rudder, propeller, or sail, pilots \"simply drift wherever the breeze takes them.\"\n- The reality after the colon: pilots climb and descend \"to reach the layer whose current bends toward the target\" — that is deliberate steering.\n- Helpless drifting and deliberate steering clash, so the blank needs a word of opposition: \"contrary to.\"\n\n**Why the other choices are wrong:**\n- A: \"Parallel to\" would mean the tactics match the assumption, the opposite of the clash the colon reveals.\n- B: \"Ahead of\" is about time or position, but nothing here is a matter of sequence.\n- C: \"Independent of\" would mean the tactics are simply unrelated to the assumption, but the passage presents them as direct evidence against it."
        },
        {
          "id": 1202,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "To learn how long wild birds live and where they travel, researchers fit them with small metal leg bands. Each band is stamped with its own number, and no two bands share the same one. When a banded bird is caught again or found, researchers can read the number and ____ the individual bird, learning where and when it was first banded.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "imagine"
            },
            {
              "id": "B",
              "text": "feed"
            },
            {
              "id": "C",
              "text": "identify"
            },
            {
              "id": "D",
              "text": "train"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** Because every band carries a number that no other band shares, reading that number tells researchers exactly which bird they have. \"Identify\" means to recognize or establish who or what something is.\n\n**The Full Solution:**\n- The text says each band is stamped with \"its own number\" and that \"no two bands share the same one.\"\n- A number that belongs to only one band works like a name tag for one bird.\n- Reading it lets researchers recognize the individual bird and look up \"where and when it was first banded,\" so the blank must mean \"identify.\"\n\n**Why the other choices are wrong:**\n- A: Researchers are reading a real number on a band, not picturing a bird in their minds.\n- B: Giving the bird food has nothing to do with reading its band number or learning its history.\n- D: Nothing in the text describes teaching the bird; reading a band number tells researchers only which bird it is."
        },
        {
          "id": 1201,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Not all salt is dug out of mines. In a method called solution mining, workers drill a well down to an underground bed of salt and pump fresh water into it. Over time, the water can slowly ____ the salt, forming a salty liquid called brine. The brine is then pumped back to the surface, where the water is evaporated and the salt is left behind.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "darken"
            },
            {
              "id": "B",
              "text": "dissolve"
            },
            {
              "id": "C",
              "text": "conceal"
            },
            {
              "id": "D",
              "text": "harden"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text explains that fresh water pumped onto buried salt forms \"a salty liquid called brine\" that can be pumped to the surface. For the salt to end up in the water, the water must \"dissolve\" it.\n\n**The Full Solution:**\n- Workers \"pump fresh water\" down to \"an underground bed of salt.\"\n- The result is \"a salty liquid called brine,\" which is pumped up and evaporated so that \"the salt is left behind.\"\n- Salt can be carried up in the water and recovered by evaporation only if the water has dissolved it.\n\n**Why the other choices are wrong:**\n- A: Changing the salt's color would not turn fresh water into brine.\n- C: Hiding the salt has nothing to do with forming a salty liquid that is pumped to the surface.\n- D: Making the salt harder would keep it out of the water, the opposite of the process the text describes."
        },
        {
          "id": 1204,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Many people assume that summer comes when Earth is closest to the Sun. In fact, Earth is closest to the Sun in early January, during winter in the Northern Hemisphere. Earth's seasons do not come from changes in its distance from the Sun but ____ instead from the tilt of its axis. That tilt turns each hemisphere toward the Sun for part of every year.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "derive"
            },
            {
              "id": "B",
              "text": "recover"
            },
            {
              "id": "C",
              "text": "depart"
            },
            {
              "id": "D",
              "text": "differ"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence contrasts two possible sources of the seasons: they \"do not come from changes in its distance from the Sun\" but come instead from the tilt of Earth's axis. \"Derive from\" means \"come from,\" so it completes the contrast precisely.\n\n**The Full Solution:**\n- The first half of the contrast rules out one source: the seasons \"do not come from changes in its distance from the Sun.\"\n- The second half must name the real source with a verb that pairs with \"from\": \"the tilt of its axis.\"\n- \"Derive instead from the tilt of its axis\" means the seasons have their origin in the tilt, matching the final sentence's point that the tilt turns each hemisphere toward the Sun.\n\n**Why the other choices are wrong:**\n- B: To \"recover from\" something is to get better after it, which makes no sense for seasons and Earth's tilt.\n- C: To \"depart from\" something is to move away from it, the opposite of the idea that the seasons come from the tilt.\n- D: To \"differ from\" something is to be unlike it; the text is explaining where the seasons come from, not comparing the seasons with the tilt."
        },
        {
          "id": 1208,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "In the open-field villages of medieval Europe, a family's farmland was not one compact plot but many narrow strips scattered across the fields. Some economic historians see this scattering as deliberate insurance. Hail, flooding, and blight rarely strike a whole landscape evenly, so a household with strips in many spots could expect some of them to yield in almost any year. On this account, families accepted longer walks between strips to avoid the total failure of a single holding."
            },
            {
              "label": "Text 2",
              "text": "No one doubts that scattered strips spread a household's risk to some degree. But calling the scattering insurance implies that villagers designed their holdings for that purpose. Ordinary village life could produce the same pattern without any design. Strips changed hands piecemeal through inheritance, marriage, and sale, and neighbors who shared a plow team worked their lands in sequence. Scattering was less a policy than a residue: the by-product of transactions that no one coordinated."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "The author would accept that scattering reduced a household's risk but deny that this benefit shows the pattern was created for that purpose."
            },
            {
              "id": "B",
              "text": "The author would object that scattering actually increased the chance that a family's entire harvest could be destroyed in a single bad year."
            },
            {
              "id": "C",
              "text": "The author would agree that villagers deliberately scattered their strips but argue that they did so to share plow teams rather than to manage risk."
            },
            {
              "id": "D",
              "text": "The author would reply that the records of inheritance, marriage, and sale are too incomplete to reveal how the strips came to be scattered."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Text 2 opens by conceding the benefit — \"No one doubts that scattered strips spread a household's risk\" — and then attacks the inference from benefit to purpose: \"Ordinary village life could produce the same pattern without any design.\" A keeps both the concession and the objection.\n\n**The Full Solution:**\n- Text 1's argument: scattering was deliberate insurance — families accepted the walking costs because dispersed strips protected against total failure.\n- Text 2 does not dispute that dispersed strips reduce risk; it disputes that the risk reduction explains the pattern's origin.\n- Its alternative: inheritance, marriage, sale, and shared plow teams would scatter holdings on their own, making the pattern \"a residue,\" the by-product of transactions \"that no one coordinated.\"\n- So the response is: yes, scattering helped, but that does not show it was designed to help — exactly choice A.\n\n**Why the other choices are wrong:**\n- B: It contradicts Text 2's opening concession that scattering did spread risk.\n- C: It keeps the deliberateness Text 2 rejects — the plow teams are offered as an undesigned cause, not a motive villagers acted on.\n- D: It invents a complaint about incomplete records; Text 2 relies on those very transactions as its explanation."
        },
        {
          "id": 1205,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is Alfred, Lord Tennyson's poem \"The Kraken,\" first published in 1830.\n\nBelow the thunders of the upper deep;\nFar, far beneath in the abysmal sea,\nHis ancient, dreamless, uninvaded sleep\nThe Kraken sleepeth: faintest sunlights flee\nAbout his shadowy sides: above him swell\nHuge sponges of millennial growth and height;\nAnd far away into the sickly light,\nFrom many a wondrous grot and secret cell\nUnnumber'd and enormous polypi\nWinnow with giant arms the slumbering green.\nThere hath he lain for ages and will lie\nBattening upon huge seaworms in his sleep,\nUntil the latter fire shall heat the deep;\nThen once by man and angels to be seen,\nIn roaring he shall rise and on the surface die.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The speaker describes a creature asleep deep beneath the sea, then foretells the event that will end its sleep and life."
            },
            {
              "id": "B",
              "text": "The speaker recounts a long search for a legendary sea creature, then admits that it was never found."
            },
            {
              "id": "C",
              "text": "The speaker asks whether a fabled creature could survive in the deep sea, then weighs the evidence without deciding."
            },
            {
              "id": "D",
              "text": "The speaker pictures a creature rising briefly to the surface, then follows it back down to the seafloor to rest there again."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Most of the poem dwells on the Kraken's ancient, unbroken sleep in the deep; the closing lines then leap forward to the one event that will end it — \"In roaring he shall rise and on the surface die.\"\n\n**The Full Solution:**\n- The opening lines fix the setting and the state: \"Far, far beneath in the abysmal sea,\" the Kraken's \"ancient, dreamless, uninvaded sleep.\"\n- The middle lines fill in the sleeping world around him — millennial sponges, giant polypi winnowing the slumbering green — all continuing the stillness.\n- The turn comes with \"Until the latter fire shall heat the deep\": the poem ends by foretelling the creature's rise and immediate death at the surface, the single event that closes both the sleep and the life.\n\n**Why the other choices are wrong:**\n- B: It invents a search and a searcher; no one in the poem is looking for the Kraken, and its future rising is when it will be seen.\n- C: It imposes a question-and-evidence debate on a poem that asserts its scene without ever doubting it.\n- D: It reverses the poem's motion — the rise to the surface comes at the end, and nothing follows it but death, not a resumed rest.",
          "_meta": {
            "anchor": "Alfred, Lord Tennyson, \"The Kraken\" (1830) — genuine public-domain text, complete poem verbatim",
            "quoteVerify": true,
            "source": "Alfred, Lord Tennyson, \"The Kraken,\" first published in Poems, Chiefly Lyrical (1830); text matches the standard collected-edition text (\"ancient\"); the 1830 printing in Project Gutenberg ebook 8601 reads \"antient\" — all other words verified verbatim",
            "distractors": {
              "B": "invents a search narrative the poem lacks",
              "C": "imposes a debate structure on an assertive poem",
              "D": "reverses the poem's movement from sleep to fatal rising"
            }
          }
        },
        {
          "id": 1206,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Many of the smaller stones at Stonehenge, known as bluestones, are not native to the area. Most are believed to have come from the Preseli Hills of Wales, more than 200 kilometers away, which raises a question: how did stones weighing two tons or more each reach Salisbury Plain? Many archaeologists argue that people moved them. Some geologists counter that a glacier carried the stones most of the way during an ice age. The dispute has proved productive. In testing each side's claims, researchers have matched the makeup of particular stones to particular rock outcrops in the Preseli Hills.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It defends one side of a long dispute, then concludes that the origin of every stone has now been settled."
            },
            {
              "id": "B",
              "text": "It describes how the stones were shaped, then ranks the tools that were used according to how well each worked."
            },
            {
              "id": "C",
              "text": "It poses a question about some objects, presents two competing answers, and notes a productive effect of the dispute."
            },
            {
              "id": "D",
              "text": "It describes a dispute between two researchers over a single stone, then explains how one laboratory test finally resolved it."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text asks how the bluestones reached Salisbury Plain, gives two competing answers (people moved them; a glacier carried them), and ends by noting that the dispute \"has proved productive,\" since testing the claims has tied particular stones to particular outcrops.\n\n**The Full Solution:**\n- The question: stones from the Preseli Hills, \"more than 200 kilometers away,\" somehow reached Stonehenge, so \"how did [they] reach Salisbury Plain?\"\n- The two answers: \"archaeologists argue that people moved them,\" while \"some geologists counter that a glacier carried the stones.\"\n- The productive effect: researchers \"have matched the makeup of particular stones to particular rock outcrops in the Preseli Hills.\"\n\n**Why the other choices are wrong:**\n- A: The text takes no side and never says the dispute, or the origin of every stone, has been settled.\n- B: The text never discusses shaping the stones or the tools used to do it.\n- D: The dispute involves two broad groups of researchers and many stones, not two individuals and a single stone, and the text describes no single test that settled it."
        },
        {
          "id": 1207,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The glass harmonica looks unlike any other instrument: a row of nested glass bowls, graduated in size, on a horizontal spindle turned by a foot treadle. The player touches wetted fingertips to the rims of the rotating bowls, and friction sets the glass ringing, just as a moistened finger drawn around the rim of a wine glass does. Because each bowl is ground to sound a particular pitch, melodies and full chords are possible; because the bowls turn continuously, a note can be sustained for as long as the finger stays in place. The mechanism thus turned a familiar parlor trick into a true instrument, with a range of several octaves and a tone that listeners of its era found unearthly.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To argue that the glass harmonica deserves a far more prominent place in modern concert programming than it has so far been given."
            },
            {
              "id": "B",
              "text": "To explain how the glass harmonica produces its sound and what made it a genuine instrument rather than a curiosity."
            },
            {
              "id": "C",
              "text": "To compare the tone of the glass harmonica unfavorably with the tone of the singing wine glasses from which it developed."
            },
            {
              "id": "D",
              "text": "To describe the precise process by which the instrument's individual glass bowls were ground to their intended pitches."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The passage is an explanation from start to finish: it describes the instrument's mechanism — rotating bowls, wetted fingertips, friction — and then states what that mechanism achieved, turning \"a familiar parlor trick into a true instrument.\"\n\n**The Full Solution:**\n- The opening describes the apparatus: nested bowls on a spindle, kept turning by a treadle.\n- The middle explains the sound production (friction from wetted fingertips) and the two features that make real music possible — bowls ground to pitch for melody and chords, continuous rotation for sustained notes.\n- The closing sentence gives the significance: the mechanism elevated a parlor trick into a genuine instrument with a wide range. Explaining how it works and why that mattered is exactly choice B.\n\n**Why the other choices are wrong:**\n- A: The passage never discusses modern concert programming or argues for the instrument's revival.\n- C: The wine glass appears only as a familiar comparison for the friction principle; the passage never judges either tone against the other.\n- D: How the bowls were ground is mentioned in a single phrase, not described as a process — it is a detail, not the purpose."
        },
        {
          "id": 1209,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "In the early 1840s, a British naturalist dredging the floor of the Aegean Sea found fewer kinds of animals the deeper he went. From those samples, he concluded that no life could exist below about 300 fathoms, or roughly 550 meters. Many scientists accepted the idea. Deeper dredging soon proved it wrong. By the late 1860s, researchers off the coast of Norway had found many kinds of animals living below that depth, and in 1869 living creatures were dredged from more than 2,300 fathoms. The deep sea, once thought empty, turned out to be full of life.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The deep sea, once thought lifeless below a certain depth, turned out to hold many kinds of animals."
            },
            {
              "id": "B",
              "text": "A British naturalist dredged the floor of the Aegean Sea in the early 1840s and studied what he found."
            },
            {
              "id": "C",
              "text": "Animals that live deep in the sea are generally smaller than the animals that live near the surface."
            },
            {
              "id": "D",
              "text": "By the late 1860s, scientists had stopped dredging the seafloor at depths below about 300 fathoms."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The text describes a belief that no life could exist below about 300 fathoms and then shows that deeper dredging overturned it: \"The deep sea, once thought empty, turned out to be full of life.\"\n\n**The Full Solution:**\n- The setup: a naturalist concluded \"that no life could exist below about 300 fathoms,\" and \"many scientists accepted the idea.\"\n- The turn: \"Deeper dredging soon proved it wrong,\" revealing many kinds of animals below 300 fathoms and, in 1869, living creatures from more than 2,300 fathoms.\n- The whole text moves from an assumption of emptiness to the discovery of abundant life, which is what choice A states.\n\n**Why the other choices are wrong:**\n- B: This is the opening detail about where the idea began, not the main point of the text.\n- C: The text never compares the size of deep-sea animals with that of animals near the surface; its point is that the deep sea is full of life.\n- D: The text says the opposite: researchers kept dredging deeper and found life there."
        },
        {
          "id": 1210,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Q'eswachaka, a footbridge over the Apurímac River in southern Peru, is the last surviving Inca rope bridge. Its cables are twisted from a tough mountain grass, and because grass fibers weaken quickly, the bridge is rebuilt every June. A modern bridge now crosses the river nearby, yet four Quechua-speaking communities still spend three days replacing the old span. For them, the work is not mainly about getting across the river. The rebuilding keeps inherited rope-making skills in use and draws the communities together in a shared effort. In 2013, UNESCO recognized the practice as part of the world's intangible cultural heritage.",
          "question": "According to the text, why do the communities rebuild the grass bridge each year rather than rely only on the modern bridge?",
          "choices": [
            {
              "id": "A",
              "text": "Because the modern bridge is closed each June while workers carry out its own yearly repairs."
            },
            {
              "id": "B",
              "text": "Because UNESCO will recognize the practice only if the grass bridge is rebuilt every year."
            },
            {
              "id": "C",
              "text": "Because the rebuilding keeps inherited skills in use and brings the communities together."
            },
            {
              "id": "D",
              "text": "Because the grass bridge can carry heavier loads across the river than the modern bridge can."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text says the work \"is not mainly about getting across the river\": the rebuilding \"keeps inherited rope-making skills in use and draws the communities together in a shared effort.\"\n\n**The Full Solution:**\n- The question asks why the communities keep rebuilding the grass bridge even though \"a modern bridge now crosses the river nearby.\"\n- The text answers directly: the work is \"not mainly about getting across the river.\"\n- Instead, it \"keeps inherited rope-making skills in use and draws the communities together,\" which is what choice C states.\n\n**Why the other choices are wrong:**\n- A: The text never says the modern bridge is closed or repaired in June.\n- B: The text says UNESCO recognized the practice in 2013; it does not say recognition depends on yearly rebuilding.\n- D: The text never compares how much weight the two bridges can carry."
        },
        {
          "id": 1212,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Paul Laurence Dunbar's poem \"Sympathy\" (1899) centers on a caged bird whose condition the speaker claims to understand. A reader might argue that the poem's final stanza reinterprets the bird's song: what a passerby could mistake for contentment is, in the poem's account, an anguished appeal wrung from pain.",
          "question": "Which quotation from \"Sympathy\" most effectively illustrates the claim?",
          "choices": [
            {
              "id": "A",
              "text": "\"When the sun is bright on the upland slopes; / When the wind stirs soft through the springing grass, / And the river flows like a stream of glass\""
            },
            {
              "id": "B",
              "text": "\"It is not a carol of joy or glee, / But a prayer that he sends from his heart's deep core\""
            },
            {
              "id": "C",
              "text": "\"I know why the caged bird beats his wing / Till its blood is red on the cruel bars\""
            },
            {
              "id": "D",
              "text": "\"I know why the caged bird sings, ah me, / When his wing is bruised and his bosom sore\""
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The claim is that the poem reinterprets the song — not contentment but an anguished appeal — and these lines perform that reinterpretation in full: they deny the happy reading (\"not a carol of joy or glee\") and supply the true one (\"a prayer that he sends from his heart's deep core\").\n\n**The Full Solution:**\n- The claim has two halves: rejecting the mistaken reading of the song, and replacing it with the real meaning.\n- Choice B contains both — the denial and the substitute — so it illustrates the reinterpretation, not just the bird's suffering.\n- A prayer sent \"from his heart's deep core\" is precisely an appeal wrung from pain, matching the claim's language.\n\n**Why the other choices are wrong:**\n- A: These lines describe the inviting springtime world outside the cage; they say nothing about the song or its meaning.\n- C: The beating wing and bloodied bars show the bird's pain, but the claim is specifically about how the song should be understood.\n- D: It names the song and the suffering that accompanies it, but it never says what the song means — the reinterpretation the claim describes happens only in choice B.",
          "_meta": {
            "anchor": "Paul Laurence Dunbar, \"Sympathy\" (1899) — quotations verbatim",
            "quoteVerify": true,
            "source": "Paul Laurence Dunbar, \"Sympathy,\" Lyrics of the Hearthside (1899); quotations verified verbatim against the Wikisource transcription of The Complete Poems of Paul Laurence Dunbar (1913)",
            "distractors": {
              "A": "scene outside the cage, silent on the song",
              "C": "shows pain but not the song's reinterpretation",
              "D": "names the song and the pain but not the song's meaning"
            }
          }
        },
        {
          "id": 1213,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Oceans cover about 71 percent of Earth's surface, and the five oceans together hold more than 1.3 billion cubic kilometers of water. That water, however, is far from evenly shared among them. Comparing the oceans, a geography student noted that one of them holds far more water than any of the others: ______",
          "questionTable": {
            "type": "table",
            "caption": "Estimated surface area and water volume of the five oceans",
            "headers": [
              "Ocean",
              "Surface area (millions of square kilometers)",
              "Water volume (millions of cubic kilometers)"
            ],
            "rows": [
              [
                "Pacific",
                "169",
                "670"
              ],
              [
                "Atlantic",
                "85",
                "310"
              ],
              [
                "Indian",
                "71",
                "264"
              ],
              [
                "Southern",
                "22",
                "72"
              ],
              [
                "Arctic",
                "16",
                "19"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "the Pacific Ocean holds about 670 million cubic kilometers of water, more than twice the 310 million of the Atlantic."
            },
            {
              "id": "B",
              "text": "the Atlantic Ocean's surface area of about 85 million square kilometers is larger than the Indian Ocean's 71 million."
            },
            {
              "id": "C",
              "text": "the Arctic Ocean holds about 19 million cubic kilometers of water, less than a third of the Southern Ocean's 72 million."
            },
            {
              "id": "D",
              "text": "the oceans' surface areas range from about 16 million square kilometers for the Arctic to 169 million for the Pacific."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The statement needs the ocean that \"holds far more water than any of the others,\" and the table shows the Pacific at about 670 million cubic kilometers, more than twice the 310 million of the Atlantic, the next largest.\n\n**The Full Solution:**\n- The claim is about water held, so the relevant column is water volume, not surface area.\n- The volumes of the other four oceans run from 19 to 310 million cubic kilometers.\n- The Pacific's 670 million cubic kilometers is more than double the next-largest volume, so the Pacific is the ocean that stands apart, exactly as choice A states.\n\n**Why the other choices are wrong:**\n- B: It compares surface areas, and the gap between the Atlantic and the Indian Ocean does not show any ocean holding far more water than the rest.\n- C: It describes the Arctic Ocean, the ocean that holds the least water, not the one that holds the most.\n- D: It reports the range of surface areas, which says nothing about which ocean holds the most water."
        },
        {
          "id": 1216,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "A cast net catches fish only during its brief fall. The net must open into a full circle at the top of its flight, covering the widest possible stretch of water. Its weighted edge must then sink quickly enough to close around the fish before they dart out from under the mesh. Net makers weigh these demands against each other: heavier rim weights speed the sink but make the net harder to spread, while a lighter rim opens fully yet settles too slowly to trap anything. A net failing either test — spread or speed — comes up empty just the same. This suggests that an effective cast net ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "should carry the heaviest rim weights its thrower can manage, since the speed of the sink matters more than the width of the spread."
            },
            {
              "id": "B",
              "text": "will catch fish reliably so long as it opens into a full circle, whatever the rate at which its weighted edge settles through the water."
            },
            {
              "id": "C",
              "text": "performs best in deep water, where fish have extra room to dart out from beneath the mesh as it makes its long descent."
            },
            {
              "id": "D",
              "text": "must satisfy two demands at once, opening wide enough to cover the fish and sinking fast enough to close around them before they escape."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The passage names two requirements — full spread and fast sink — and then states that failing EITHER one leaves the net empty. The only conclusion that fits is that an effective net must meet both at once.\n\n**The Full Solution:**\n- Requirement one: the net \"must open into a full circle\" to cover the widest water.\n- Requirement two: the weighted edge \"must then sink quickly enough\" to close before the fish escape.\n- The design tension shows the two trade off against each other — weight helps one and hurts the other.\n- The clincher: a net \"failing either test — spread or speed — comes up empty just the same.\" A conclusion mentioning only one requirement is ruled out; D keeps both.\n\n**Why the other choices are wrong:**\n- A: Maximizing rim weight sacrifices the spread, which the passage says is just as fatal as a slow sink.\n- B: It drops the sink-speed requirement entirely, though the passage says a slow-settling net traps nothing.\n- C: It reverses the logic — room for fish to dart out from under the mesh is the problem the fast sink exists to prevent, not an advantage."
        },
        {
          "id": 1211,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Transistors are usually said to have made the vacuum tube obsolete by the 1970s, but the electric guitar amplifier tells a more stubborn story. Transistors were smaller, cooler, and more reliable than tubes, and from the mid-1960s they replaced tubes in most radios, televisions, and other electronics. Guitarists, however, often play loud enough to push an amplifier into distortion, and tubes distort gradually, producing a sound many players call warm, while early transistor amplifiers clipped the signal harshly. Factories in Russia and China, where tube production never stopped, still make tubes, and guitar amplifiers today still rely heavily on them.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Beginning in the mid-1960s, transistors replaced vacuum tubes in most radios, televisions, and other kinds of electronics."
            },
            {
              "id": "B",
              "text": "Factories in Russia and China now make more vacuum tubes than they did before transistors began to replace tubes."
            },
            {
              "id": "C",
              "text": "Valued by guitarists for the way they distort, tubes have stayed in guitar amplifiers long after transistors took over."
            },
            {
              "id": "D",
              "text": "Sound engineers have concluded that tubes produce better sound than transistors do in every kind of electronic equipment."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The passage's point is the vacuum tube's stubborn survival in one niche: because tubes distort gradually, producing a sound guitarists call warm, they still power guitar amplifiers long after transistors replaced them in most other electronics.\n\n**The Full Solution:**\n- The opening announces a correction to the usual story that transistors simply made the tube obsolete.\n- The middle grants transistors' advantages (smaller, cooler, more reliable) and then gives the reason tubes held on: guitarists play loud enough to distort the signal, and tubes distort gradually while early transistor amplifiers clipped harshly.\n- The close notes that factories still make tubes and that guitar amplifiers \"still rely heavily on them.\" C gathers the cause (the distortion guitarists value) and the effect (tubes' long survival in amplifiers).\n\n**Why the other choices are wrong:**\n- A: It restates a background fact the passage grants before making its point; it explains why tubes vanished elsewhere, not why they survived in amplifiers.\n- B: It isolates one detail (the Russian and Chinese factories) and adds a comparison of tube output before and after transistors arrived that the text never makes.\n- D: It inflates the passage into a sweeping verdict on all electronic equipment, which the text contradicts by saying transistors replaced tubes in most electronics.",
          "_meta": {
            "anchor": "Vacuum tubes surviving in electric guitar amplifiers after transistors replaced them elsewhere (soft vs hard clipping)",
            "sources": [
              "https://en.wikipedia.org/wiki/Vacuum_tube",
              "https://en.wikipedia.org/wiki/Tube_sound",
              "https://en.wikipedia.org/wiki/Clipping_(audio)"
            ]
          }
        },
        {
          "id": 1214,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Among the world's rivers, longer ones tend to carry more water than shorter ones, a pattern that holds broadly because a longer river usually drains a larger area. Hydrologists caution, however, that length alone is a poor guide to how much water a particular river carries. Measurements of average discharge show that even rivers of similar length can differ enormously in how much water they carry: ______",
          "questionTable": {
            "type": "table",
            "caption": "Approximate length and average discharge of four rivers",
            "headers": [
              "River",
              "Length (kilometers)",
              "Average discharge (cubic meters per second)"
            ],
            "rows": [
              [
                "Nile",
                "7,088",
                "2,757"
              ],
              [
                "Amazon",
                "6,575",
                "223,700"
              ],
              [
                "Volga",
                "3,531",
                "8,060"
              ],
              [
                "Seine",
                "777",
                "560"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "across the four rivers in the table, average discharges range from about 560 to about 223,700 cubic meters per second."
            },
            {
              "id": "B",
              "text": "the Amazon, at 6,575 kilometers, discharges about 223,700 cubic meters per second, while the 7,088-kilometer Nile discharges only about 2,757."
            },
            {
              "id": "C",
              "text": "the Volga, at 3,531 kilometers, discharges about 8,060 cubic meters per second, while the far shorter Seine discharges only about 560 cubic meters."
            },
            {
              "id": "D",
              "text": "the Amazon discharges about 223,700 cubic meters per second, showing that rivers in rainy regions carry the most water."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The claim is that rivers of SIMILAR LENGTH can differ enormously in how much water they carry, so the supporting data must compare two rivers close in length. The Amazon (6,575 kilometers) and the Nile (7,088 kilometers) are the only such pair in the table, and their average discharges are about 223,700 and about 2,757 cubic meters per second.\n\n**The Full Solution:**\n- Reread what the blank must support: \"even rivers of similar length can differ enormously in how much water they carry.\"\n- Find the rows close in length: only the Nile and the Amazon, which differ by about 500 kilometers, far less than any other pair.\n- Compare their discharges: the Amazon carries about 80 times as much water as the Nile, the enormous difference the sentence asserts, which is exactly what B reports.\n\n**Why the other choices are wrong:**\n- A: It pools all four rivers into one overall range without comparing rivers of similar length, so it does not show what the claim requires.\n- C: It compares a long river with a much shorter one, and the longer one carries more water; that fits the general length pattern rather than the exception the claim describes.\n- D: It uses only one row and adds a conclusion about rainfall that a table of lengths and discharges cannot support.",
          "_meta": {
            "anchor": "River length vs average discharge (Nile, Amazon, Volga, Seine); similar-length Nile and Amazon differ about 80-fold",
            "sources": [
              "https://en.wikipedia.org/wiki/Nile",
              "https://en.wikipedia.org/wiki/Amazon_River",
              "https://en.wikipedia.org/wiki/Volga",
              "https://en.wikipedia.org/wiki/Seine"
            ]
          }
        },
        {
          "id": 1215,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Shaker furniture is admired for its plain, carefully joined construction, but the people who built it are harder to see. Shaker communities discouraged displays of individual pride, and most craftsmen left their work unsigned; within a community, many members followed the same patterns and the same standards of workmanship. Curators asked to attribute a surviving cupboard or chest to a particular maker have found that the piece itself rarely settles the question. Their experience suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "identifying a piece's maker usually depends on evidence from sources other than the furniture itself."
            },
            {
              "id": "B",
              "text": "unsigned pieces can usually be matched to their makers, since each craftsman finished his work in a recognizable way."
            },
            {
              "id": "C",
              "text": "most surviving Shaker furniture must have been built by only a few craftsmen, since the pieces are so alike."
            },
            {
              "id": "D",
              "text": "the question of who made a piece should be abandoned, since no evidence can ever connect furniture to its maker."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** If many craftsmen followed the same patterns and standards and most left their work unsigned, then the piece alone cannot reveal who made it — so the answer must come from somewhere other than the furniture.\n\n**The Full Solution:**\n- The key facts: Shaker craftsmen mostly left their work unsigned, and members of a community followed the same patterns and standards of workmanship.\n- The curators' experience confirms the consequence: \"the piece itself rarely settles the question.\"\n- What follows is that attribution requires evidence from outside the piece, which is precisely choice A.\n\n**Why the other choices are wrong:**\n- B: It contradicts the passage, which says members worked to the same patterns and standards, so workmanship is not a reliable signature.\n- C: Nothing in the text says how many craftsmen made the surviving furniture; the passage concerns how to identify makers, not how many there were.\n- D: It overshoots — the passage says the piece itself rarely answers the question, not that no evidence of any kind can."
        },
        {
          "id": 1222,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Kew Gardens in London shows visitors its plants from more than one angle. A treetop walkway that opened in 2008 and the Palm House, a glasshouse built in the 1840s, ____ visitors two very different views: from 18 meters up in the tree canopy and from inside a tropical greenhouse.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "gives"
            },
            {
              "id": "B",
              "text": "is giving"
            },
            {
              "id": "C",
              "text": "give"
            },
            {
              "id": "D",
              "text": "has given"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The subject of the verb is compound: \"A treetop walkway ... and the Palm House.\" Two subjects joined by \"and\" take a plural verb, so \"give\" is needed.\n\n**The Full Solution:**\n- Strip away the descriptive phrases: \"A treetop walkway ... and the Palm House ... ____ visitors two very different views.\"\n- The word \"and\" joins the two subjects into a plural subject.\n- A plural subject needs the plural verb \"give.\"\n\n**Why the other choices are wrong:**\n- A: \"Gives\" is singular; it agrees only with the nearby noun \"the Palm House,\" not with the full compound subject.\n- B: \"Is giving\" is singular and does not agree with the plural subject.\n- D: \"Has given\" is singular and does not agree with the plural subject."
        },
        {
          "id": 1217,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The peanut is usually sold alongside almonds and walnuts, but botanists classify it differently. Although the peanut is commonly called a ____ it is actually a legume, a member of the same plant family as peas and beans. Unlike most of its relatives, the peanut also ripens its pods underground.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "nut"
            },
            {
              "id": "B",
              "text": "nut;"
            },
            {
              "id": "C",
              "text": "nut:"
            },
            {
              "id": "D",
              "text": "nut,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The sentence begins with a dependent clause, \"Although the peanut is commonly called a nut,\" followed by the main clause \"it is actually a legume.\" A comma is the standard way to separate an introductory dependent clause from the main clause.\n\n**The Full Solution:**\n- \"Although\" makes the first part of the sentence a dependent clause that cannot stand alone.\n- The main clause, \"it is actually a legume,\" follows it.\n- A comma after \"nut\" correctly marks where the introductory clause ends.\n\n**Why the other choices are wrong:**\n- A: With no punctuation, the dependent clause runs straight into the main clause with nothing to mark the boundary.\n- B: A semicolon joins two independent clauses, but the \"Although\" clause cannot stand on its own.\n- C: A colon must follow an independent clause, and the \"Although\" clause is not one."
        },
        {
          "id": 1220,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "By the mid-1800s, London's streets were crowded with horse-drawn traffic, and engineers proposed moving some travelers underground. Construction began in 1860. In 1863, the Metropolitan Railway ____ to passengers between Paddington and Farringdon, becoming the world's first underground railway.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "opens"
            },
            {
              "id": "B",
              "text": "has opened"
            },
            {
              "id": "C",
              "text": "had opened"
            },
            {
              "id": "D",
              "text": "opened"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The sentence reports a single completed event at a specific past time, \"in 1863,\" so the simple past tense \"opened\" is needed.\n\n**The Full Solution:**\n- The time marker \"in 1863\" places the action at one finished point in the past.\n- The simple past is the tense used for a completed action at a stated past time.\n- \"In 1863, the Metropolitan Railway opened to passengers\" is therefore correct.\n\n**Why the other choices are wrong:**\n- A: The present tense \"opens\" does not fit an event that took place in 1863.\n- B: The present perfect \"has opened\" cannot be used with a specific past date such as \"in 1863.\"\n- C: The past perfect \"had opened\" signals an action completed before another past event, but the opening came after construction began in 1860, not before it."
        },
        {
          "id": 1218,
          "type": "multiple-choice",
          "difficulty": "easy",
          "band": 2,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Breathing would do the body little good without the alveoli. The tiny air sacs that fill each lung ____ oxygen into the blood through their very thin walls. In exchange, carbon dioxide moves from the blood into the sacs and is then breathed out.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "passes"
            },
            {
              "id": "B",
              "text": "pass"
            },
            {
              "id": "C",
              "text": "is passing"
            },
            {
              "id": "D",
              "text": "has passed"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The subject of the verb is the plural noun \"sacs,\" so the plural verb \"pass\" is needed. The words \"that fill each lung\" form a relative clause that describes the sacs; they do not change the subject.\n\n**The Full Solution:**\n- Strip away the relative clause: \"The tiny air sacs ... ____ oxygen into the blood.\"\n- \"Sacs\" is plural.\n- A plural subject takes a plural verb, so \"pass\" is correct.\n\n**Why the other choices are wrong:**\n- A: \"Passes\" is singular; it seems to agree with the nearby word \"lung,\" but \"lung\" is inside the relative clause and is not the subject.\n- C: \"Is passing\" is singular and does not agree with \"sacs.\"\n- D: \"Has passed\" is singular and does not agree with \"sacs.\""
        },
        {
          "id": 1221,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "A county soil survey of the early twentieth century rested on three kinds of records: field maps, which traced soil boundaries as the survey party walked the ____ pit descriptions, which noted the color and texture of each layer; and laboratory reports on samples.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "ground;"
            },
            {
              "id": "B",
              "text": "ground:"
            },
            {
              "id": "C",
              "text": "ground,"
            },
            {
              "id": "D",
              "text": "ground"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence lists three kinds of records, and because the items themselves contain commas, the items must be separated by semicolons — so the first item ends with a semicolon after \"ground.\"\n\n**The Full Solution:**\n- The rule: when items in a list carry commas of their own, the dividers between items are promoted to semicolons so a reader can tell where one item stops and the next starts.\n- The three items are the field maps (\"which traced soil boundaries...\"), the pit descriptions (\"which noted the color and texture...\"), and the laboratory reports — and the first two items each contain an internal comma.\n- The list's third item is already introduced by \"; and,\" confirming the semicolon pattern, so the first divider must match: \"ground;\".\n\n**Why the other choices are wrong:**\n- B: A colon here would open a second list inside the one that the colon after \"records\" has already introduced.\n- C: A comma cannot divide these items, because commas are already at work inside them.\n- D: With no punctuation, the first two items fuse into one unreadable run."
        },
        {
          "id": 1219,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Early automobiles were started with a hand crank at the front of the engine. Cranking took real effort, and if the engine kicked back, the handle could jerk violently and injure the driver. In 1912, Cadillac began installing electric starters in its Model Thirty ____ the British carmaker Lanchester adopted a similar system that same year.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "cars"
            },
            {
              "id": "B",
              "text": "cars,"
            },
            {
              "id": "C",
              "text": "cars;"
            },
            {
              "id": "D",
              "text": "cars, then"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The text joins two independent clauses: \"In 1912, Cadillac began installing electric starters in its Model Thirty cars\" and \"the British carmaker Lanchester adopted a similar system that same year.\" A semicolon is the standard way to join two independent clauses without a conjunction.\n\n**The Full Solution:**\n- First clause: \"Cadillac began installing electric starters in its Model Thirty cars\" has its own subject and verb.\n- Second clause: \"the British carmaker Lanchester adopted a similar system that same year\" also has its own subject and verb.\n- Each could stand alone as a sentence, so a semicolon after \"cars\" correctly joins them.\n\n**Why the other choices are wrong:**\n- A: With no punctuation, the two independent clauses run together, creating a run-on sentence.\n- B: A comma alone cannot join two independent clauses; this creates a comma splice.\n- D: \"Then\" is an adverb, not a coordinating conjunction, so a comma followed by \"then\" still produces a comma splice."
        },
        {
          "id": 1223,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "At the San Francisco de Asís church in Ranchos de Taos, New Mexico, parishioners gather every year to coat the adobe walls with fresh mud plaster. ______ in Djenné, Mali, the whole community turns out each year to replaster the Great Mosque, whose earthen walls are worn down by the annual rains.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Likewise,"
            },
            {
              "id": "B",
              "text": "However,"
            },
            {
              "id": "C",
              "text": "For instance,"
            },
            {
              "id": "D",
              "text": "In turn,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The second sentence presents a parallel case — another community that replasters an earthen building together every year — so the similarity word \"Likewise\" fits.\n\n**The Full Solution:**\n- First sentence: at the church in Ranchos de Taos, parishioners gather every year to coat the adobe walls with fresh mud plaster.\n- Second sentence: in Djenné, the whole community turns out each year to replaster the Great Mosque, whose earthen walls are worn down by the rains.\n- The two cases match point for point — communal labor, earthen walls, a yearly renewal against the weather — and matching cases call for a same-as-this transition: \"Likewise.\"\n\n**Why the other choices are wrong:**\n- B: \"However\" signals a clash, but the two practices agree in every particular the passage mentions.\n- C: \"For instance\" introduces an example of a general claim, but the first sentence is itself a specific case, not a generalization the second could exemplify.\n- D: \"In turn\" would make the practice in Djenné a consequence of the one in New Mexico, but the two are independent parallel traditions, not cause and effect."
        },
        {
          "id": 1225,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In the hot summer of 1858, sewage in London's Thames gave off a stench so strong that lawmakers in the riverside Houses of Parliament soaked their curtains in chloride of lime. ______ Parliament passed a law that August allowing London's board of works to borrow £3 million for a new sewer system.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "For example,"
            },
            {
              "id": "B",
              "text": "As a result,"
            },
            {
              "id": "C",
              "text": "Even so,"
            },
            {
              "id": "D",
              "text": "Until then,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The first sentence describes a cause: sewage in the Thames gave off a stench so strong that lawmakers beside the river soaked their curtains in chloride of lime. The final sentence describes the effect: Parliament passed a law funding a new sewer system. \"As a result\" signals that cause-and-effect relationship.\n\n**The Full Solution:**\n- Cause: sewage in the Thames \"gave off a stench so strong\" that lawmakers \"soaked their curtains in chloride of lime.\"\n- Effect: Parliament \"passed a law that August\" to pay for \"a new sewer system.\"\n- A transition that marks a consequence is needed, and \"As a result\" does exactly that.\n\n**Why the other choices are wrong:**\n- A: The law is not an example of the stench; it is a consequence of it.\n- C: \"Even so\" signals that something happened despite what came before, but the law follows from the stench rather than contrasting with it.\n- D: \"Until then\" describes what was true before a turning point, but the law was passed after the stench, that August, as a response to it.",
          "_meta": {
            "anchor": "Great Stink of 1858: Thames sewage stench prompts Parliament to fund London's sewer system",
            "sources": [
              "https://en.wikipedia.org/wiki/Great_Stink"
            ]
          }
        },
        {
          "id": 1224,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "For most of the twentieth century, ships in trouble called for help by radio in Morse code, and large vessels kept trained operators listening. By 1999, large ships were required to carry a new distress system that uses satellites as well as radio. ______ distress calls go mainly from ships to rescue centers on shore, and Morse code is used chiefly by amateur radio operators.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Moreover,"
            },
            {
              "id": "B",
              "text": "Nevertheless,"
            },
            {
              "id": "C",
              "text": "Previously,"
            },
            {
              "id": "D",
              "text": "Today,"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text moves through time: Morse code for most of the twentieth century, a new satellite-based system required by 1999, and then the current situation. \"Today\" correctly introduces that present-day state of affairs.\n\n**The Full Solution:**\n- The first two sentences describe the past: Morse code distress calls, then the new system required \"by 1999.\"\n- The last sentence uses the present tense (\"go,\" \"is used\") to describe how things stand now.\n- \"Today\" marks the shift from the history to the present.\n\n**Why the other choices are wrong:**\n- A: \"Moreover\" adds a further point of the same kind, but the last sentence describes the present rather than adding to the history.\n- B: \"Nevertheless\" signals a contrast, but the present-day situation follows naturally from the change to satellites.\n- C: \"Previously\" points to an earlier time, but the sentence describes what happens now."
        },
        {
          "id": 1226,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Before the 1790s, France used many different local units of weight and measure.",
              "In 1790, a proposal for a new system based on natural units was put to France's National Assembly.",
              "In 1791, the meter was defined as one ten-millionth of the distance from the North Pole to the equator.",
              "Larger and smaller units were formed by multiplying or dividing by powers of ten, as in kilometer and centimeter.",
              "France officially adopted the new metric system in 1795.",
              "Today it is the basis of the International System of Units (SI)."
            ],
            "goal": "The student wants to explain the main idea behind the metric system to an audience unfamiliar with its history."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "France officially adopted the metric system in 1795, and today it is the basis of the International System of Units."
            },
            {
              "id": "B",
              "text": "In 1790, a proposal for a new system of measurement was put to France's National Assembly."
            },
            {
              "id": "C",
              "text": "The metric system replaced local units with units tied to the size of the Earth and related by powers of ten."
            },
            {
              "id": "D",
              "text": "In 1791, the meter was defined as one ten-millionth of the distance from the North Pole to the equator."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** To explain the main idea behind the metric system to readers new to it, a sentence must say what made the system different, and C does: its units were tied to a natural standard, the size of the Earth, and related to one another by powers of ten.\n\n**The Full Solution:**\n- The notes give two defining features: the meter was based on the distance \"from the North Pole to the equator,\" and other units were formed \"by multiplying or dividing by powers of ten.\"\n- The notes also say the system replaced France's \"many different local units.\"\n- C combines all of this in plain terms, so an unfamiliar reader learns what the system's central idea was.\n\n**Why the other choices are wrong:**\n- A: It gives a date and the system's later role but does not explain the idea behind it.\n- B: It reports that a proposal was made without saying what the proposal's central idea was.\n- D: It gives one precise definition, but it leaves out the decimal relationship among units and does not frame the idea for a new reader."
        },
        {
          "id": 1227,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "Butser Ancient Farm is an open-air archaeology site in Hampshire, England, founded in 1972.",
              "Excavated Iron Age houses in Britain often survive only as rings of post holes in the ground.",
              "At Butser, archaeologists build full-size roundhouses on the ground plans of excavated houses.",
              "They then use the houses and record how the buildings hold up to weather and wear over many years.",
              "This approach is known as experimental archaeology.",
              "Work at Butser has shaped how Iron Age settlements are pictured in books."
            ],
            "goal": "The student wants to emphasize what was new about the method used at Butser."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Butser Ancient Farm, an open-air archaeology site in Hampshire, England, was founded in 1972."
            },
            {
              "id": "B",
              "text": "Excavated Iron Age houses in Britain often survive only as rings of post holes left in the ground."
            },
            {
              "id": "C",
              "text": "Work at Butser Ancient Farm, an open-air archaeology site in Hampshire, England, has shaped how Iron Age settlements are pictured in books."
            },
            {
              "id": "D",
              "text": "Instead of studying only post holes, archaeologists at Butser build full-size roundhouses and test how they perform."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The goal is to spotlight what was new about the METHOD used at Butser, and D is built around exactly that contrast: not post holes alone, but full-size houses built and tested.\n\n**The Full Solution:**\n- The notes say excavated Iron Age houses \"often survive only as rings of post holes.\"\n- At Butser, archaeologists instead \"build full-size roundhouses\" and \"record how the buildings hold up to weather and wear.\"\n- D states the older kind of evidence (post holes) and then the new practice (building and testing whole houses), which is what \"what was new about the method\" requires.\n\n**Why the other choices are wrong:**\n- A: It gives the site's location and founding date but says nothing about how the archaeologists work.\n- B: It describes the limited evidence that excavation leaves behind without mentioning Butser or its approach at all.\n- C: It reports the influence of the work at Butser, which is a result of the method, not the method itself."
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 32,
      questions: [
        {
          "id": 1228,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Tempered glass is made by heating a pane of ordinary glass and then cooling its surfaces very quickly. The process makes the pane much stronger, but a tempered pane cannot easily be ____: any attempt to cut or drill it can cause the whole pane to shatter. For this reason, manufacturers cut panes to size and drill any holes before the glass is tempered.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "altered"
            },
            {
              "id": "B",
              "text": "inspected"
            },
            {
              "id": "C",
              "text": "imitated"
            },
            {
              "id": "D",
              "text": "maintained"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Because cutting or drilling a tempered pane can shatter it, manufacturers must shape the glass before tempering. A tempered pane therefore cannot easily be \"altered,\" or changed.\n\n**The Full Solution:**\n- The text explains that tempering makes the pane \"much stronger.\"\n- The colon introduces the consequence: \"any attempt to cut or drill it can cause the whole pane to shatter.\"\n- That consequence describes how hard it is to change a finished pane, so the blank must mean \"changed\": \"altered.\"\n\n**Why the other choices are wrong:**\n- B: Nothing in the text suggests that tempered glass is hard to look at or examine.\n- C: The text is about changing a pane's size and shape, not about other makers copying it.\n- D: The text does not discuss caring for or keeping up the glass; it explains why a finished pane cannot be cut or drilled."
        },
        {
          "id": 1229,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Concorde, the Anglo-French supersonic airliner, more than halved travel times on its transatlantic routes. Several pressures worked against it, however. Its sonic booms kept it off routes over land, the 2000 crash of an Air France Concorde deterred passengers, and its maintenance costs kept rising. Together, these pressures ____ the airliner's place in commercial service until both of its operators retired it in 2003.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "confirmed"
            },
            {
              "id": "B",
              "text": "eroded"
            },
            {
              "id": "C",
              "text": "restored"
            },
            {
              "id": "D",
              "text": "described"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text lists pressures that \"worked against\" Concorde and says they acted together until the airliner was retired in 2003. Pressures that gradually wear away something's position \"eroded\" it.\n\n**The Full Solution:**\n- The text first notes Concorde's great advantage, then turns with \"however\" to the pressures that \"worked against it.\"\n- Each pressure weakened its standing: limited routes, fewer passengers, rising costs.\n- These forces acted \"until both of its operators retired it,\" so the blank must describe a gradual wearing away: \"eroded.\"\n\n**Why the other choices are wrong:**\n- A: Pressures that ended in the airliner's retirement did not strengthen or \"confirm\" its place.\n- C: \"Restored\" would mean the pressures brought Concorde's place back, the opposite of what the text describes.\n- D: The pressures acted on Concorde's position; they did not \"describe\" it."
        },
        {
          "id": 1230,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "Watching a gondolier row from the stern, a passenger might take the stroke for a leisurely, easy push. Far from being ____, however, the technique is exact. The blade must be feathered at a precise angle on each return. The oar must also sit in the forcola, the tall, carved wooden oarlock, at one of several positions, each suited to a particular maneuver.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "silent"
            },
            {
              "id": "B",
              "text": "modern"
            },
            {
              "id": "C",
              "text": "strenuous"
            },
            {
              "id": "D",
              "text": "casual"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The frame \"Far from being ____, however, the technique is exact\" makes the blank the opposite of \"exact\" — and specifically the false impression just described, a stroke that looks like \"a leisurely, easy push.\" \"Casual\" names that impression.\n\n**The Full Solution:**\n- \"Far from being\" announces that the blank is what the technique is NOT, in contrast to what it is: exact.\n- The passage has already supplied the mistaken appearance: a \"leisurely, easy push.\" The blank should capture that look of carelessness or ease.\n- The evidence for exactness follows — a precise feathering angle, several positions in the forcola for particular maneuvers — confirming that the rejected idea is offhandedness, i.e., being \"casual.\"\n\n**Why the other choices are wrong:**\n- A: \"Silent\" concerns sound, which the passage never mentions and which does not contrast with exactness.\n- B: \"Modern\" concerns age, equally beside the point of the precision contrast.\n- C: \"Strenuous\" fails the logic twice — the passage's false impression is of ease, so denying strenuousness would agree with the impression rather than correct it, and effort is not the opposite of exactness."
        },
        {
          "id": 1231,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "words-in-context",
          "passage": "In 1902, officials in Hanoi, then under French colonial rule, offered a small bounty for every rat tail turned in, hoping to shrink the city's rat population. The program proved ____. Hunters cut the tails off live rats and released them to breed, and some people even began raising rats, so the bounty encouraged the very breeding it was meant to curb.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": [
            {
              "id": "A",
              "text": "irreversible"
            },
            {
              "id": "B",
              "text": "uncontrollable"
            },
            {
              "id": "C",
              "text": "self-defeating"
            },
            {
              "id": "D",
              "text": "methodical"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The bounty was meant to reduce Hanoi's rats, but because hunters released tailless rats \"to breed\" and some people \"began raising rats,\" it \"encouraged the very breeding it was meant to curb.\" A program that works against its own goal is \"self-defeating.\"\n\n**The Full Solution:**\n- The goal of the program was to shrink the city's rat population.\n- The next sentence gives the result: the bounty \"encouraged the very breeding it was meant to curb.\"\n- When an action produces the very outcome it was meant to stop, it is self-defeating.\n\n**Why the other choices are wrong:**\n- A: The text does not say the program or its effects could never be undone; its point is that the program undermined its own purpose.\n- B: Nothing suggests officials lost control of the program; hunters simply followed its rules in a way that defeated its aim.\n- D: \"Methodical\" describes how carefully something is done, but the text is about the program's unintended result.",
          "_meta": {
            "anchor": "1902 Hanoi rat-tail bounty that encouraged rat breeding (perverse incentive)",
            "sources": [
              "https://en.wikipedia.org/wiki/Great_Hanoi_Rat_Massacre",
              "https://www.atlasobscura.com/articles/hanoi-rat-massacre-1902"
            ]
          }
        },
        {
          "id": 1235,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "cross-text-connections",
          "passages": [
            {
              "label": "Text 1",
              "text": "Many brick walls built before the late nineteenth century are now repointed with hard mortar made largely of portland cement. Some preservationists argue that these walls belong with lime mortar, the soft material their builders used. Because lime mortar is softer and more permeable than the bricks, trapped moisture escapes through the joints rather than through the bricks, and stresses in the wall are absorbed by the joints instead of the bricks. To protect these walls, we should repoint them with the mortar they were built with."
            },
            {
              "label": "Text 2",
              "text": "Lime mortar undeniably protects soft old brick, and preservationists have learned much from it. But the builders' choice was also a necessity: portland cement was not in common use in the United States until the early twentieth century. What the wall requires is not a particular recipe but a mortar softer and more permeable than its bricks. Modern mixes containing a little portland cement can meet that standard."
            }
          ],
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the argument presented in Text 1?",
          "choices": [
            {
              "id": "A",
              "text": "The author would agree that these walls belong only with lime mortar and add that most masons would need retraining to mix and apply it."
            },
            {
              "id": "B",
              "text": "The author would dismiss lime mortar as an outdated material with nothing to teach preservationists."
            },
            {
              "id": "C",
              "text": "The author would accept the argument fully, since building owners have shown that they prefer lime mortar on old walls."
            },
            {
              "id": "D",
              "text": "The author would grant that lime mortar spares old bricks that a hard mortar can damage but deny that this decides the material."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** Text 2 concedes lime mortar's benefits (it \"undeniably protects soft old brick\") but rejects the conclusion that the walls therefore belong with it, arguing that the real standard, a mortar \"softer and more permeable than its bricks,\" can be met by \"modern mixes containing a little portland cement.\" D preserves both the concession and the refusal.\n\n**The Full Solution:**\n- Text 1's argument moves from evidence (lime mortar lets moisture and stress pass through the joints instead of the bricks) to a prescription (repoint these walls with the mortar they were built with).\n- Text 2 accepts the evidence but attacks the inference twice: historically, the builders used lime partly because portland cement was not yet in common use; practically, what the wall needs is a set of properties, not a recipe, and modern mixes can supply those properties.\n- So the response grants what lime mortar does while denying that it dictates the material, exactly choice D.\n\n**Why the other choices are wrong:**\n- A: It signs the author onto the lime-only prescription that Text 2 exists to resist.\n- B: It overshoots the author's respect for lime mortar, from which preservationists \"have learned much.\"\n- C: It invents owner preferences neither text mentions and concedes the whole argument besides.",
          "_meta": {
            "anchor": "Repointing pre-late-19th-century brick: lime mortar vs mixes with some portland cement (NPS Preservation Brief 2 criteria)",
            "sources": [
              "https://www.nps.gov/orgs/1739/upload/preservation-brief-02-repointing.pdf"
            ]
          }
        },
        {
          "id": 1232,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "The following text is a poem by Emily Brontë, dated November 1837.\n\nThe night is darkening round me,\nThe wild winds coldly blow;\nBut a tyrant spell has bound me\nAnd I cannot, cannot go.\n\nThe giant trees are bending\nTheir bare boughs weighed with snow,\nAnd the storm is fast descending,\nAnd yet I cannot go.\n\nClouds beyond clouds above me,\nWastes beyond wastes below;\nBut nothing drear can move me—\nI will not, cannot go.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "The speaker describes a growing storm while repeating that she cannot leave, a refusal that finally becomes her choice."
            },
            {
              "id": "B",
              "text": "The speaker recalls being caught outdoors by a sudden storm, then describes the shelter where she waited until the storm had passed."
            },
            {
              "id": "C",
              "text": "The speaker urges an unseen companion to leave before the storm arrives, then admits they have waited too long."
            },
            {
              "id": "D",
              "text": "The speaker views a wintry landscape from a safe distance, then recounts the damage a storm caused overnight."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** Each stanza darkens the storm — night and wind, then bending trees and descending snow, then clouds and wastes on every side — while the refrain holds the speaker in place; and the wording of that refrain shifts from \"I cannot, cannot go\" to \"And yet I cannot go\" to \"I will not, cannot go,\" ending on her own will.\n\n**The Full Solution:**\n- Stanza one: darkness and cold wind, with a \"tyrant spell\" binding the speaker — she \"cannot\" go.\n- Stanza two: the storm worsens (bare boughs weighed with snow, the storm \"fast descending\"), and still she cannot go.\n- Stanza three: the scene expands to \"clouds beyond clouds\" and \"wastes beyond wastes,\" and the refrain changes decisively: \"I will not, cannot go.\" The final line adds will — choice — to what had been compulsion, exactly the movement A describes.\n\n**Why the other choices are wrong:**\n- B: It invents a memory and a shelter; the poem happens in the present, and the speaker never takes cover.\n- C: It invents a companion and a plea; the speaker addresses no one and asks for nothing.\n- D: It sets the speaker at a safe distance after the fact, but the storm is descending around her as she speaks.",
          "_meta": {
            "anchor": "Emily Brontë, \"Spellbound\" (1837) — genuine public-domain text, complete poem verbatim",
            "quoteVerify": true,
            "source": "Emily Brontë, \"Spellbound\" (written November 1837; published posthumously); text verified verbatim against the Academy of American Poets (poets.org) public-domain printing",
            "distractors": {
              "B": "invents recollection and shelter",
              "C": "invents a companion and a plea",
              "D": "moves the speaker outside the storm and into aftermath"
            }
          }
        },
        {
          "id": 1233,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "Coastal towns plagued by mosquitoes once saw an obvious remedy in their salt marshes: drain the shallow pools where the insects breed. Through the early twentieth century, crews cut grids of parallel ditches across marsh after marsh to carry the standing water away. Ecologists who later compared ditched and unditched marshes argue that the remedy worked against itself. The drained pools had been home to small fish that eat mosquito larvae; when the pools went, so did the fish, and larvae hatching in the wet patches that remained faced fewer predators. Marsh managers now draw a conclusion that would have startled the ditching crews: reopening pools on a drained marsh can suppress mosquitoes more effectively than drainage did.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": [
            {
              "id": "A",
              "text": "It praises the engineering of an early public-health campaign, then lists the techniques that replaced hand-cut ditches."
            },
            {
              "id": "B",
              "text": "It describes an intuitive remedy, explains how it removed a natural check on the problem, and presents the reverse approach."
            },
            {
              "id": "C",
              "text": "It compares mosquito control in several coastal regions, then ranks the methods by their cost and lasting effects."
            },
            {
              "id": "D",
              "text": "It traces the salt-marsh mosquito's life cycle in detail, then argues that no habitat change can reduce its numbers for long."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The passage moves in three labeled steps: the obvious fix (drain the breeding pools), the backfire (the pools also held the larvae-eating fish, so draining removed the mosquitoes' predators), and the reversed lesson now drawn (put the pools back).\n\n**The Full Solution:**\n- Step one is the intuitive remedy: mosquitoes breed in marsh pools, so crews ditched the marshes to drain them.\n- Step two is the mechanism that undid it: the same pools sustained small fish that ate mosquito larvae; without pools there were no fish, and surviving larvae \"faced fewer predators.\" The remedy removed a natural check on the problem.\n- Step three is the counterintuitive conclusion: managers now reopen pools on drained marshes, because restoring the predators can control mosquitoes better than drainage did. That remedy-backfire-reversal order is choice B.\n\n**Why the other choices are wrong:**\n- A: The passage criticizes the ditching campaign's logic rather than praising its engineering, and no replacement techniques are listed.\n- C: No regions are compared and nothing is ranked by expense.\n- D: The mosquito's life cycle is never traced, and the passage concludes that altering the habitat DOES work — in the direction nobody expected."
        },
        {
          "id": 1234,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "craft-and-structure",
          "skill": "text-structure-and-purpose",
          "passage": "By the middle of the nineteenth century, the open-air food markets of many growing cities had become unmanageable. Stalls spilled into traffic, and there was no roof against the rain, no drainage, and no practical way to inspect a street's worth of perishable goods. City governments responded by building covered market halls of iron and glass, in which every stall had a numbered place, water was piped in, and inspectors could walk the aisles. The halls did more than tidy the trade they housed. Fixed stalls with regular rents turned casual street selling into settled shopkeeping, and the buildings themselves became civic showpieces. A tool of sanitary reform ended by changing how city dwellers bought their food.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": [
            {
              "id": "A",
              "text": "To argue that city governments overstepped their authority by forcing street sellers to rent regulated indoor stalls."
            },
            {
              "id": "B",
              "text": "To describe the cast-iron and glass innovations that let builders roof large spaces without interior supports."
            },
            {
              "id": "C",
              "text": "To explain how disorderly open-air markets led cities to build covered halls that transformed the urban food trade."
            },
            {
              "id": "D",
              "text": "To contrast the crowded food markets of cities with the smaller, more orderly weekly markets of the countryside."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The passage follows one chain from start to finish: the problem (unmanageable open-air markets), the response (covered halls with numbered stalls, piped water, and inspection), and the larger consequence (settled shopkeeping, civic showpieces — a sanitary tool that changed how cities bought food).\n\n**The Full Solution:**\n- The opening establishes the problem: stalls in traffic, no roof, no drainage, no way to inspect perishables.\n- The middle gives the governments' solution and its immediate workings inside the new halls.\n- The close widens the lens: the halls \"did more than tidy the trade,\" converting street selling into shopkeeping and becoming civic showpieces. The final sentence states the arc outright — a reform tool \"ended by changing how city dwellers bought their food.\" Explaining that problem-response-transformation chain is the text's purpose.\n\n**Why the other choices are wrong:**\n- A: The passage passes no judgment on the governments' authority; it reports what they built and what followed.\n- B: The iron-and-glass construction is mentioned, but the engineering that made it possible is never described.\n- D: Country markets never appear in the passage at all."
        },
        {
          "id": 1236,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Along the Pacific coast of North America, some beaches have wide, flat terraces where clams thrive. To a visitor, these beaches may look entirely natural, but many are clam gardens built by Indigenous peoples. Builders rolled large boulders down to the low-tide line to form a rock wall. Sediment carried in by the tides collected behind the wall, creating a broad, flat beach well suited to clams. Families kept adding rocks to the walls as they harvested, and some clam gardens are about 3,500 years old.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "Builders of clam gardens rolled large boulders down to the low-tide line to form a rock wall."
            },
            {
              "id": "B",
              "text": "Many Pacific beaches that look natural are in fact clam gardens that Indigenous peoples built and maintained."
            },
            {
              "id": "C",
              "text": "Clams grow best on wide, flat beaches made of loose sediment rather than on steep, rocky ones."
            },
            {
              "id": "D",
              "text": "Archaeologists have concluded that most clam gardens were abandoned within a few years of being built and were never repaired."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text explains that beaches that \"may look entirely natural\" are often clam gardens that Indigenous peoples built and kept up for generations. That contrast between natural appearance and human design is the main idea.\n\n**The Full Solution:**\n- The text sets up an assumption: the terraced beaches \"may look entirely natural.\"\n- It then corrects it: \"many are clam gardens built by Indigenous peoples.\"\n- The rest of the text supports this by describing how the walls were built and kept up, so the main idea is that these seemingly natural beaches were built and maintained by people.\n\n**Why the other choices are wrong:**\n- A: This is one step in building a clam garden, a supporting detail rather than the main idea.\n- C: The text says the flat beaches suit clams, but that detail only explains why the gardens were built.\n- D: The text says the opposite: families kept adding rocks for generations, and some gardens are thousands of years old."
        },
        {
          "id": 1243,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Collectors of early printed maps pay premiums for period color, applied when a map was first published, over color added later. Dating the printing of a map is usually straightforward, since publishers recorded their editions. The coloring is another matter. Pigment might have been applied in the publisher's workshop the week the sheet was printed, by an owner's colorist a generation later, or by a nineteenth-century dealer brightening old stock. Paper takes a wash of color at any age and carries no date. A map's edition date therefore settles when the sheet was printed and nothing more. It follows that a cataloger who records the date of printing as the date of the coloring ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "will err, if at all, by making the coloring seem more recent than it is, since many sheets were colored before printing."
            },
            {
              "id": "B",
              "text": "can rely on the attribution being sound, because publishers' edition records listed which copies had been colored in the workshop."
            },
            {
              "id": "C",
              "text": "has adopted the only defensible convention, since no evidence of any kind can distinguish early coloring from later additions."
            },
            {
              "id": "D",
              "text": "risks describing the color as older than it is, since pigment may have been applied years or even centuries after printing."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The printing date is the earliest possible moment the color could have been applied — every alternative the passage lists (an owner's colorist a generation on, a nineteenth-century dealer) comes later. Equating the two dates therefore errs in one direction only: it makes the color look older than it may be.\n\n**The Full Solution:**\n- A sheet cannot be colored before it exists, so the printing date is a floor for the coloring date, never a ceiling.\n- The passage's examples of later coloring — a generation later, or a nineteenth-century dealer brightening old stock — show how far above that floor the true date can sit.\n- Recording the floor as the actual date collapses that gap in one direction: the recorded age of the color can only be too great, never too small. That is D's conclusion.\n\n**Why the other choices are wrong:**\n- A: It runs the error backward and rests on an impossibility — sheets colored before they were printed.\n- B: It contradicts the passage, whose edition records date printings; the text says the paper \"carries no date\" for color.\n- C: It overreaches twice — the passage never calls the convention defensible, and \"no evidence of any kind\" goes far beyond what the catalogers' caution implies."
        },
        {
          "id": 1239,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-textual",
          "passage": "Homing pigeons released far from their loft can usually find their way back, and researchers have long debated how they do it. One explanation is olfactory: pigeons learn how airborne odors are spread across the region around their home, then use smells carried on the wind to judge where they are. The other explanation is magnetic: pigeons sense small variations in Earth's magnetic field and use them like coordinates on a map. The two explanations make different predictions about what a pigeon needs in order to get home.",
          "question": "Which finding, if true, would most directly support the olfactory explanation?",
          "choices": [
            {
              "id": "A",
              "text": "Pigeons whose sense of smell was blocked often failed to return home, while untreated pigeons from the same loft returned normally."
            },
            {
              "id": "B",
              "text": "Pigeons released near a site where Earth's magnetic field is unusually irregular often flew off in the wrong direction when they were first let go."
            },
            {
              "id": "C",
              "text": "Pigeons fitted with small magnets that disrupted their magnetic sense often failed to find their way home."
            },
            {
              "id": "D",
              "text": "Pigeons raised in lofts in different regions took about the same amount of time to fly home from equal distances."
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The olfactory explanation says pigeons find home by smell. If pigeons that could not smell often failed to return while otherwise similar pigeons returned normally, smell would be shown to matter for getting home, directly supporting that explanation.\n\n**The Full Solution:**\n- The olfactory explanation predicts that a pigeon needs its sense of smell to navigate.\n- Choice A compares pigeons with smell blocked against untreated pigeons from the same loft, so the only difference between the groups is the ability to smell.\n- Because the smell-blocked birds often failed, the finding ties successful homing to smell.\n\n**Why the other choices are wrong:**\n- B: Confusion near an irregular magnetic field would support the magnetic explanation, not the olfactory one.\n- C: Disrupting the magnetic sense and finding that pigeons get lost would also support the magnetic explanation.\n- D: Similar flight times from different regions say nothing about whether pigeons rely on smell or on magnetism."
        },
        {
          "id": 1241,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Global warming potential (GWP) compares the heat a gas traps over 100 years with the heat an equal mass of carbon dioxide traps. Because sulfur hexafluoride, the longest-lasting gas in the table, also has the highest GWP, a student claimed that among these gases, the longer a gas lasts in the atmosphere, the higher its GWP. The data in the table do not support this claim, however, since ______",
          "questionTable": {
            "type": "table",
            "caption": "Atmospheric lifetime and 100-year global warming potential (GWP) of four greenhouse gases",
            "headers": [
              "Gas",
              "Atmospheric lifetime (years)",
              "GWP over 100 years"
            ],
            "rows": [
              [
                "HFC-134a",
                "13.4",
                "1,300"
              ],
              [
                "HFC-125",
                "28.2",
                "3,170"
              ],
              [
                "Nitrous oxide",
                "121",
                "265"
              ],
              [
                "Sulfur hexafluoride",
                "3,200",
                "23,500"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "sulfur hexafluoride, the longest-lasting gas at 3,200 years, also has the highest GWP of the four gases in the table, 23,500."
            },
            {
              "id": "B",
              "text": "HFC-134a, the shortest-lasting gas at 13.4 years, has a GWP of 1,300, which is lower than the GWP of HFC-125."
            },
            {
              "id": "C",
              "text": "nitrous oxide lasts longer in the atmosphere than HFC-134a and HFC-125, yet its GWP of 265 is lower than either of theirs."
            },
            {
              "id": "D",
              "text": "the four gases' atmospheric lifetimes range from 13.4 years for HFC-134a to 3,200 years for sulfur hexafluoride."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The student claims that among these gases, GWP rises as atmospheric lifetime increases. Nitrous oxide breaks that pattern: it lasts longer than HFC-134a and HFC-125 (121 years versus 13.4 and 28.2), yet its GWP of 265 is lower than both of theirs (1,300 and 3,170).\n\n**The Full Solution:**\n- The claim to be rejected: among these gases, the longer a gas lasts in the atmosphere, the higher its GWP.\n- To show that the claim fails, a choice must point to a gas that lasts longer than another gas but has a lower GWP.\n- The table shows nitrous oxide (121 years, 265) lasting longer than HFC-134a (13.4, 1,300) and HFC-125 (28.2, 3,170) but with a lower GWP than both, as choice C states.\n\n**Why the other choices are wrong:**\n- A: Sulfur hexafluoride being both the longest-lasting gas and the one with the highest GWP fits the student's claim; it is the evidence the student started from, not a reason to reject the claim.\n- B: HFC-134a lasting a shorter time than HFC-125 and having a lower GWP also fits the claim rather than contradicting it.\n- D: It reports only the gases' lifetimes and says nothing about how their GWPs compare.",
          "_meta": {
            "anchor": "Greenhouse gas atmospheric lifetime vs 100-year GWP (IPCC AR5 Table 8.A.1): nitrous oxide breaks the pattern",
            "sources": [
              "https://www.maine.gov/dep/ftp/AIR/DATA/GHG_SUMMARIES/IPCC_2014_AR5_Table_8.A.1_Lifetimes_Radiative_Efficiencies_and_Metric_values_pp_731-738.pdf",
              "https://ghgprotocol.org/sites/default/files/ghgp/Global-Warming-Potential-Values%20%28Feb%2016%202016%29_1.pdf"
            ]
          }
        },
        {
          "id": 1240,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "information-and-ideas",
          "skill": "command-of-evidence-quantitative",
          "passage": "Kirtland's warbler, a small songbird that nests mainly in young jack pine forests in northern Michigan, nearly disappeared in the twentieth century. Researchers estimate its population by counting singing males, each of which is presumed to have a mate. A student argues that the species' recovery between 1974 and 2021 was not steady but came entirely after 1987, since ______",
          "questionTable": {
            "type": "table",
            "caption": "Estimated number of breeding pairs of Kirtland's warblers in three census years",
            "headers": [
              "Year",
              "Estimated breeding pairs"
            ],
            "rows": [
              [
                "1974",
                "167"
              ],
              [
                "1987",
                "167"
              ],
              [
                "2021",
                "2,245"
              ]
            ]
          },
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": [
            {
              "id": "A",
              "text": "the estimated population was 167 breeding pairs in 1974 and was again 167 breeding pairs in 1987."
            },
            {
              "id": "B",
              "text": "the estimated population in 2021 was 2,245 breeding pairs, the largest number in the three census years shown."
            },
            {
              "id": "C",
              "text": "the estimate stayed at 167 pairs from 1974 to 1987, then rose by more than 2,000 by 2021."
            },
            {
              "id": "D",
              "text": "the estimated population in 1974 was less than one-tenth as large as the estimated population recorded in 2021."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** To show that the recovery came entirely after 1987, a choice must compare the two periods. Choice C does: the estimate did not change at all between 1974 and 1987 (167 pairs both years), then rose by more than 2,000 pairs, to 2,245, by 2021.\n\n**The Full Solution:**\n- The claim is about timing: the recovery was not spread evenly over the whole period but came after 1987.\n- From 1974 to 1987, the estimate stayed at 167 breeding pairs, a change of zero.\n- From 1987 to 2021, it rose from 167 to 2,245, a gain of more than 2,000 pairs, so all of the growth came in the later period, as choice C states.\n\n**Why the other choices are wrong:**\n- A: It describes only the years before 1987 and never shows that the population grew afterward.\n- B: It gives only the 2021 estimate, which cannot show when the growth took place.\n- D: Comparing 1974 with 2021 shows that the population grew overall, but not that the growth came after 1987."
        },
        {
          "id": 1238,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "As coats of arms spread among Europe's nobility after the twelfth century, they raised a problem no single design could solve. A coat of arms identifies its bearer only if no one else bears the same one, yet as more families adopted arms, similar designs multiplied. The answer was to treat arms as a system. By the mid-fourteenth century, it was generally accepted that each coat of arms belonged to one person only. Heralds learned who bore which arms, rolls of arms recorded each design beside its bearer's name, and disputes over identical arms could go to court. What gave a coat of arms its value was not the splendor of its design but its difference from every other coat in use.",
          "question": "Which choice best states the main idea of the text?",
          "choices": [
            {
              "id": "A",
              "text": "As more medieval families adopted coats of arms, similar designs multiplied, and one family's arms could resemble another's."
            },
            {
              "id": "B",
              "text": "Rolls of arms recorded each coat of arms alongside the name of the person who was entitled to bear it."
            },
            {
              "id": "C",
              "text": "Medieval heraldry made coats of arms reliable marks of identity by making each one unique and recorded rather than more splendid."
            },
            {
              "id": "D",
              "text": "Medieval heralds eventually concluded that court rulings mattered far more than rolls of arms in deciding who could bear a design."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The passage builds to a system-over-object point, stated outright in its last sentence: a coat of arms drew its value \"not [from] the splendor of its design but [from] its difference from every other coat in use,\" a difference secured by the rule of one bearer per design, by heralds, and by rolls of arms.\n\n**The Full Solution:**\n- The problem: as more families adopted arms, similar designs multiplied, and no single design, however splendid, could fix that.\n- The response: \"treat arms as a system\": one person per coat of arms, heralds who knew who bore which arms, rolls of arms that recorded them, and courts that could hear disputes.\n- The conclusion: what made each coat of arms useful was its guaranteed difference from all others. C captures the whole arc: unique, recorded identities in place of more splendid designs.\n\n**Why the other choices are wrong:**\n- A: It states the problem only, the setup for the main idea, not the idea.\n- B: It describes one component (rolls of arms) doing one job (recording designs), a supporting detail.\n- D: It invents a ranking of court rulings over rolls of arms that the passage never draws; the two are presented as parts of the same system.",
          "_meta": {
            "anchor": "Medieval heraldry: one bearer per coat of arms, heralds, rolls of arms, armorial disputes in court",
            "sources": [
              "https://en.wikipedia.org/wiki/Heraldry",
              "https://en.wikipedia.org/wiki/Roll_of_arms",
              "https://en.wikipedia.org/wiki/Scrope_v_Grosvenor"
            ]
          }
        },
        {
          "id": 1237,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "central-ideas-and-details",
          "passage": "Between 1947 and 1956, Bedouin herders and archaeologists recovered thousands of manuscript fragments, now known as the Dead Sea Scrolls, from eleven caves near Qumran, on the northwestern shore of the Dead Sea. The texts were written mostly on parchment and date from the third century BCE to the first century CE. Many are religious writings that scholars had never seen before. The collection is most valued, however, for its copies of books of the Hebrew Bible, which are about a thousand years older than any copies previously known.",
          "question": "Based on the text, what was notable about the Dead Sea Scrolls?",
          "choices": [
            {
              "id": "A",
              "text": "They were found by archaeologists in a single cave that had stayed sealed since the first century CE."
            },
            {
              "id": "B",
              "text": "They contained only copies of biblical books and no religious writings that were new to scholars."
            },
            {
              "id": "C",
              "text": "They were written entirely on papyrus rather than on parchment or any other material."
            },
            {
              "id": "D",
              "text": "They included copies of books of the Hebrew Bible far older than any copies known before."
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The text says the collection \"is most valued\" for its copies of books of the Hebrew Bible, \"which are about a thousand years older than any copies previously known.\"\n\n**The Full Solution:**\n- The text first gives the basic facts: where and when the fragments were found, what they were written on, and how old they are.\n- It then signals what made the find stand out with \"most valued, however.\"\n- The notable feature is that the biblical copies are about a thousand years older than any known before, which choice D states.\n\n**Why the other choices are wrong:**\n- A: The text says the fragments came from \"eleven caves\" and were recovered by \"Bedouin herders and archaeologists,\" not by archaeologists in a single cave.\n- B: The text says many of the scrolls \"are religious writings that scholars had never seen before,\" so the collection was not limited to biblical books.\n- C: The text says the scrolls were written \"mostly on parchment,\" not papyrus."
        },
        {
          "id": 1242,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "information-and-ideas",
          "skill": "inferences",
          "passage": "Biologists tracking the worldwide decline of frogs and other amphibians describe two separate pressures. One is habitat loss: draining wetlands and clearing forests removes the places where amphibians feed and breed. The other is a disease called chytridiomycosis, caused by a fungus that infects amphibians' skin and has spread to much of the world. The fungus can kill frogs even where their habitat is untouched, and surveys have in fact documented steep declines inside protected forests and reserves. Biologists who emphasize this second pressure argue that a conservation plan confined to protecting habitat ______",
          "question": "Which choice most logically completes the text?",
          "choices": [
            {
              "id": "A",
              "text": "will succeed wherever forests are protected, because the fungus dies out on its own once the land around it is left undisturbed."
            },
            {
              "id": "B",
              "text": "risks leaving a major cause of decline untouched, since the disease has caused declines even in protected habitat."
            },
            {
              "id": "C",
              "text": "addresses the only pressure on amphibians that surveys of declining populations have so far been able to document."
            },
            {
              "id": "D",
              "text": "should be abandoned, since the loss of habitat plays no meaningful part in whether amphibian populations survive."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The passage describes two separate causes of decline and then reports steep declines inside protected forests and reserves, where habitat is intact. A plan that only protects habitat leaves the disease in place, which is what B states.\n\n**The Full Solution:**\n- Cause one: habitat loss (drained wetlands and cleared forests), which protecting habitat can address.\n- Cause two: chytridiomycosis, a fungal disease that \"can kill frogs even where their habitat is untouched.\"\n- The clincher is the survey evidence: steep declines \"inside protected forests and reserves,\" which habitat protection alone did not prevent.\n- So the biologists' criticism of a habitat-only plan must be that it misses the disease, exactly what B states.\n\n**Why the other choices are wrong:**\n- A: The passage never says the fungus dies out when land is left undisturbed; the declines inside protected forests point the other way.\n- C: It reverses the survey evidence: the documented declines in protected areas point to the disease, not to habitat loss.\n- D: It throws out the first pressure entirely, though the passage presents habitat loss as one of two real causes."
        },
        {
          "id": 1245,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "Before modern machinery, olive oil was made in mills powered by people or animals. Traditional mills produced the oil in three main steps: crushing the olives into a paste under a heavy millstone, spreading the paste onto woven mats, and ____ the stacked mats to squeeze out the oil.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "they pressed"
            },
            {
              "id": "B",
              "text": "to press"
            },
            {
              "id": "C",
              "text": "the pressing of"
            },
            {
              "id": "D",
              "text": "pressing"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The steps are listed in a series, and items in a series must be parallel. The first two steps begin with \"-ing\" verbs (\"crushing,\" \"spreading\"), so the third must be \"pressing.\"\n\n**The Full Solution:**\n- The series is \"crushing the olives into a paste under a heavy millstone, spreading the paste onto woven mats, and ____ the stacked mats.\"\n- The first two items use the \"-ing\" form followed by an object.\n- To keep the series parallel, the third item must also be an \"-ing\" verb with an object: \"pressing the stacked mats.\"\n\n**Why the other choices are wrong:**\n- A: \"They pressed\" adds a subject and a past-tense verb, breaking the parallel pattern of the series.\n- B: \"To press\" is an infinitive, which does not match \"crushing\" and \"spreading.\"\n- C: \"The pressing of\" turns the step into a noun phrase, which is not parallel with the other two items."
        },
        {
          "id": 1244,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Diamond graders judge each stone by four qualities ____ and a weakness in any one of them can lower the price of an otherwise fine gem.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": ", cut, color, clarity, and carat weight,"
            },
            {
              "id": "B",
              "text": "cut, color, clarity, and carat weight"
            },
            {
              "id": "C",
              "text": "—cut, color, clarity, and carat weight,"
            },
            {
              "id": "D",
              "text": "—cut, color, clarity, and carat weight—"
            }
          ],
          "correctAnswer": "D",
          "explanation": "**Choice D is correct.** The list \"cut, color, clarity, and carat weight\" is an interruption that names the \"four qualities.\" Because the list itself contains commas, a pair of dashes is the clearest way to set it off, and a dash that opens an interruption must be matched by a dash that closes it.\n\n**The Full Solution:**\n- The main sentence is \"Diamond graders judge each stone by four qualities ... and a weakness in any one of them can lower the price of an otherwise fine gem.\"\n- The list in the middle renames the four qualities, so it must be set off from the rest of the sentence.\n- A dash before the list and a matching dash after it mark its boundaries clearly.\n\n**Why the other choices are wrong:**\n- A: Setting off a list that contains commas with more commas makes it unclear where the list ends and the sentence resumes.\n- B: With no punctuation, the list runs straight into the surrounding sentence.\n- C: The opening dash must be closed by a second dash, not by a comma."
        },
        {
          "id": 1248,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "Coelacanths, an ancient group of fish, were long known only from fossils. Scientists therefore concluded that the group had died out about 66 million years ____ in 1938, a trawler fishing off the coast of South Africa hauled up a living coelacanth.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "ago however"
            },
            {
              "id": "B",
              "text": "ago; however,"
            },
            {
              "id": "C",
              "text": "ago, however;"
            },
            {
              "id": "D",
              "text": "ago, however,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text contains two independent clauses: \"Scientists therefore concluded that the group had died out about 66 million years ago\" and \"in 1938, a trawler fishing off the coast of South Africa hauled up a living coelacanth.\" The second contrasts with the first, so \"however\" belongs with the second clause. A semicolon must separate the clauses, and a comma follows \"however.\"\n\n**The Full Solution:**\n- Find the boundary between the two independent clauses: it falls after \"ago.\"\n- \"However\" signals the contrast between the scientists' conclusion and the 1938 catch of a living coelacanth, so it introduces the second clause.\n- The standard punctuation is a semicolon before \"however\" and a comma after it: \"ago; however, in 1938 ...\"\n\n**Why the other choices are wrong:**\n- A: With no punctuation, the two independent clauses run together.\n- C: Placing the semicolon after \"however\" attaches the contrast word to the first clause, where it contrasts with nothing: the scientists' conclusion follows from the fossil evidence, as \"therefore\" indicates.\n- D: Commas on both sides of \"however\" leave the two independent clauses joined only by a comma, a comma splice."
        },
        {
          "id": 1249,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "The Staffordshire Hoard is a collection of almost 4,600 items and fragments of gold and silver metalwork made in Anglo-Saxon England. Searching a farm field in Staffordshire, England, with a metal detector in 2009, ____",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "the first objects from the largest hoard of Anglo-Saxon gold yet found were uncovered by a local amateur."
            },
            {
              "id": "B",
              "text": "a local amateur uncovered the first objects from the largest hoard of Anglo-Saxon gold yet found."
            },
            {
              "id": "C",
              "text": "the uncovering of the first objects from the largest hoard of Anglo-Saxon gold yet found was the work of a local amateur."
            },
            {
              "id": "D",
              "text": "archaeologists learned of the largest hoard of Anglo-Saxon gold yet found when a local amateur uncovered its first objects."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The sentence opens with a modifier, \"Searching a farm field in Staffordshire, England, with a metal detector in 2009,\" that describes whoever did the searching. A modifier like this must be followed immediately by the person it describes, and only choice B places \"a local amateur\" right after it.\n\n**The Full Solution:**\n- Ask who was searching the field with a metal detector: the local amateur.\n- An introductory phrase applies to the subject that comes right after the comma.\n- In B, the subject is \"a local amateur,\" so the searcher is correctly named as the one who uncovered the objects.\n\n**Why the other choices are wrong:**\n- A: The subject is \"the first objects,\" which suggests the objects were searching the field.\n- C: The subject is \"the uncovering,\" which cannot search anything.\n- D: The subject is \"archaeologists,\" but the archaeologists were not the ones searching the field with a metal detector."
        },
        {
          "id": 1246,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "boundaries",
          "passage": "The marathons run at the early modern Olympic Games were about 40 kilometers long, and the exact distance changed from one Games to the next. The course for the 1908 London Olympics measured 42.195 ____ it was not until 1921 that the sport's governing body made that length the official standard.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "kilometers, but"
            },
            {
              "id": "B",
              "text": "kilometers,"
            },
            {
              "id": "C",
              "text": "kilometers but,"
            },
            {
              "id": "D",
              "text": "kilometers"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The sentence joins two independent clauses: \"The course for the 1908 London Olympics measured 42.195 kilometers\" and \"it was not until 1921 that the sport's governing body made that length the official standard.\" A comma followed by the coordinating conjunction \"but\" correctly joins them and signals the contrast.\n\n**The Full Solution:**\n- Each clause has its own subject and verb and could stand alone as a sentence.\n- Two independent clauses can be joined with a comma plus a coordinating conjunction.\n- \"Kilometers, but\" does this and shows the contrast between the 1908 distance and the later date when it became official.\n\n**Why the other choices are wrong:**\n- B: A comma alone between two independent clauses creates a comma splice.\n- C: The comma must come before \"but,\" not after it.\n- D: With no punctuation or conjunction, the two clauses run together."
        },
        {
          "id": 1247,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "standard-english-conventions",
          "skill": "form-structure-and-sense",
          "passage": "For most people learning to juggle, the first pattern to master is the three-ball cascade, in which each ball crosses in an arc from one hand to the other. Because the cascade is the simplest pattern possible with an odd number of balls, beginners usually learn ____ before attempting any other.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": [
            {
              "id": "A",
              "text": "them"
            },
            {
              "id": "B",
              "text": "those"
            },
            {
              "id": "C",
              "text": "it"
            },
            {
              "id": "D",
              "text": "these"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The pronoun refers to \"the cascade,\" a single pattern, so it must be the singular pronoun \"it.\"\n\n**The Full Solution:**\n- Ask what beginners \"usually learn ... before attempting any other\": the cascade.\n- \"The cascade\" is singular.\n- A singular antecedent needs the singular pronoun \"it.\"\n\n**Why the other choices are wrong:**\n- A: \"Them\" is plural, but beginners learn the single pattern, not the balls.\n- B: \"Those\" is plural and does not agree with \"the cascade.\"\n- D: \"These\" is plural and does not agree with \"the cascade.\""
        },
        {
          "id": 1251,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Researchers who dated Greenland sharks by measuring radiocarbon in the lenses of their eyes concluded that the species lives for at least 272 years. That estimate gives the Greenland shark the longest known lifespan of any animal with a backbone. ______ the bowhead whale, considered the longest-living mammal, is thought to live for a little over 200 years.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "On the contrary,"
            },
            {
              "id": "B",
              "text": "As a result,"
            },
            {
              "id": "C",
              "text": "By comparison,"
            },
            {
              "id": "D",
              "text": "Meanwhile,"
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** The last sentence gives a second animal's lifespan so that readers can measure the Greenland shark's against it: the bowhead whale also lives a very long time, but not as long. \"By comparison\" introduces exactly this kind of comparison of degree.\n\n**The Full Solution:**\n- The first two sentences establish the Greenland shark's lifespan: at least 272 years, the longest known among vertebrates.\n- The last sentence gives the bowhead whale's lifespan: a little over 200 years.\n- Both animals are long-lived; the point is that the shark outlives even the longest-living mammal, so the transition must signal a comparison: \"By comparison.\"\n\n**Why the other choices are wrong:**\n- A: \"On the contrary\" introduces a statement that rejects what came before, but the whale's long lifespan does not contradict the shark's.\n- B: \"As a result\" signals cause and effect, but the shark's lifespan does not cause the whale's.\n- D: \"Meanwhile\" signals events happening at the same time, but the text is comparing lifespans, not describing events."
        },
        {
          "id": 1250,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "Replanting native grasses on plowed land restores prairie vegetation quickly: in one study of restored tallgrass prairies, the carbon stored in the plants above ground nearly matched that of never-plowed prairie within about 13 years. ______ the soil lagged far behind; the study's models projected that soil organic carbon would need on the order of a century to recover.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Nevertheless,"
            },
            {
              "id": "B",
              "text": "Likewise,"
            },
            {
              "id": "C",
              "text": "Consequently,"
            },
            {
              "id": "D",
              "text": "For example,"
            }
          ],
          "correctAnswer": "A",
          "explanation": "**Choice A is correct.** The first sentence reports a quick recovery above ground; the last reports that the soil lagged far behind anyway. A result that holds against what the preceding fact would lead a reader to expect takes the concessive \"Nevertheless.\"\n\n**The Full Solution:**\n- The setup: replanting native grasses restores prairie vegetation quickly — within about 13 years, the plants' aboveground carbon nearly matched that of never-plowed prairie.\n- That quick recovery invites the expectation that the soil would follow on a similar schedule.\n- The final sentence defies that expectation: soil organic carbon was projected to need on the order of a century to recover. A contrast that holds despite the preceding fact calls for \"Nevertheless.\"\n\n**Why the other choices are wrong:**\n- B: \"Likewise\" would present the soil's recovery as matching the vegetation's, when it lagged far behind.\n- C: \"Consequently\" would make the soil's slow recovery a result of the plants' fast one, but nothing in the passage says the quick regrowth caused the lag.\n- D: \"For example\" would offer the soil's slow recovery as an illustration of the quick vegetation recovery, the reverse of how the two facts relate."
        },
        {
          "id": 1252,
          "type": "multiple-choice",
          "difficulty": "medium",
          "band": 3,
          "domain": "expression-of-ideas",
          "skill": "transitions",
          "passage": "In the 1960s, the reservoir forming behind Egypt's new Aswan High Dam threatened to flood the temples of Abu Simbel. The temples had been carved into a sandstone cliff more than 3,000 years earlier. Saving them did not require keeping them where they stood. ______ engineers cut the temples into large blocks and rebuilt them about 65 meters higher, out of the water's reach.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": [
            {
              "id": "A",
              "text": "Therefore,"
            },
            {
              "id": "B",
              "text": "Instead,"
            },
            {
              "id": "C",
              "text": "Similarly,"
            },
            {
              "id": "D",
              "text": "Additionally,"
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The text first says what saving the temples \"did not require,\" keeping them where they stood, and then says what the engineers did in place of that: they moved the temples to higher ground. \"Instead\" introduces an alternative to something just ruled out.\n\n**The Full Solution:**\n- The preceding sentence rules something out: saving the temples \"did not require keeping them where they stood.\"\n- The next sentence describes what was done in its place: cutting the temples into blocks and rebuilding them \"about 65 meters higher.\"\n- A transition that presents an alternative to a rejected option is needed, and \"Instead\" does that.\n\n**Why the other choices are wrong:**\n- A: \"Therefore\" signals a conclusion drawn from what came before, but moving the temples is an alternative, not a consequence.\n- C: \"Similarly\" signals a likeness, but moving the temples is not like keeping them in place; it replaces that approach.\n- D: \"Additionally\" adds a further point of the same kind, but the sentence offers a different approach rather than an addition."
        },
        {
          "id": 1253,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "In the nineteenth century, many matches had heads containing white phosphorus.",
              "These matches would light when struck on any rough surface, so they sometimes caught fire by accident.",
              "Match-factory workers exposed to white phosphorus fumes could develop a painful disease of the jawbone.",
              "Safety matches were developed in Sweden in the mid-1800s.",
              "Their makers moved the phosphorus from the match head to a striking surface on the box and used red phosphorus instead of white.",
              "A safety match lights only when struck on that special surface."
            ],
            "goal": "The student wants to emphasize how safety matches overcame the limitations of earlier matches."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "Safety matches, which light only when struck on a special surface on the box, were developed in Sweden in the mid-1800s."
            },
            {
              "id": "B",
              "text": "In the nineteenth century, many matches had heads containing white phosphorus, and these matches would light when they were struck on any rough surface."
            },
            {
              "id": "C",
              "text": "Unlike earlier matches, which lit on any rough surface and sometimes caught fire by accident, safety matches light only on a special surface."
            },
            {
              "id": "D",
              "text": "Match-factory workers who were exposed to the fumes of white phosphorus could develop a painful disease of the jawbone."
            }
          ],
          "correctAnswer": "C",
          "explanation": "**Choice C is correct.** To show how safety matches overcame the limitations of earlier matches, a sentence must name the limitation and the improvement together. C does: earlier matches lit on any rough surface and sometimes caught fire by accident, while safety matches light only on a special surface.\n\n**The Full Solution:**\n- The limitation, from the notes: earlier matches \"would light when struck on any rough surface, so they sometimes caught fire by accident.\"\n- The improvement: a safety match \"lights only when struck on that special surface.\"\n- C places these side by side with \"Unlike,\" which emphasizes how the newer match solved the older match's problem.\n\n**Why the other choices are wrong:**\n- A: It describes safety matches and their origin but never mentions earlier matches or their limitations.\n- B: It describes only the earlier matches, not how safety matches overcame their limitations.\n- D: It names a hazard of making the earlier matches but does not mention safety matches or compare the two."
        },
        {
          "id": 1254,
          "type": "multiple-choice",
          "difficulty": "hard",
          "band": 4,
          "domain": "expression-of-ideas",
          "skill": "rhetorical-synthesis",
          "studentNotes": {
            "intro": "While researching a topic, a student has taken the following notes:",
            "bullets": [
              "The Bauhaus was a German art school that operated from 1919 to 1933.",
              "It was based first in Weimar, then in Dessau, and finally in Berlin.",
              "The school combined training in the fine arts with training in crafts.",
              "Its approach held that an object's design should follow from its function.",
              "Bauhaus designs avoided ornament and used simplified forms suited to mass production.",
              "The school closed in 1933 under pressure from the Nazi regime."
            ],
            "goal": "The student wants to emphasize the central principle that guided Bauhaus design."
          },
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": [
            {
              "id": "A",
              "text": "The Bauhaus, a German art school, operated in Weimar, Dessau, and Berlin between 1919 and 1933."
            },
            {
              "id": "B",
              "text": "Holding that an object's design should follow from its function, Bauhaus designers avoided ornament and used simplified forms."
            },
            {
              "id": "C",
              "text": "The Bauhaus combined training in the fine arts with training in crafts in Weimar, Dessau, and Berlin until the school closed in 1933."
            },
            {
              "id": "D",
              "text": "Under pressure from the Nazi regime, the Bauhaus closed in 1933 after operating for fourteen years."
            }
          ],
          "correctAnswer": "B",
          "explanation": "**Choice B is correct.** The goal is to emphasize the central principle behind Bauhaus design. B states that principle, that \"an object's design should follow from its function,\" and shows how it shaped the designs: no ornament and simplified forms.\n\n**The Full Solution:**\n- The notes name the guiding idea: the school's \"approach held that an object's design should follow from its function.\"\n- They also describe the designs that resulted: they \"avoided ornament and used simplified forms.\"\n- B joins the principle to its results, which is what the goal requires.\n\n**Why the other choices are wrong:**\n- A: It gives the school's locations and dates but no principle of design.\n- C: It describes how the school trained students, not the principle that guided its designs.\n- D: It explains how the school ended, which says nothing about how it designed objects."
        }
      ]
    }
  ]
};

export default practiceTest12RW;
