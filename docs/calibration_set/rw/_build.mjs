// Builder script — produces R&W calibration items.json and .answer_key.json.
// Idempotent given the same source list (uses a seeded shuffle, seed = 54321).
//
// Source pointers are listed below as two arrays:
//   * CB_SOURCES — verbatim items extracted from PT 4-11 official PDFs (via the
//     CB_RW_AUTHENTICITY_REFERENCE.md doc and corroborated against the PDF
//     plaintext extracts in scripts/generated/pdf-text/).
//   * PS_SOURCES — pointers to PerformSAT items by file/qid; the script pulls
//     the live passage/stem/choices out of practiceTest{N}RW.js at build time.
//
// Run: node docs/calibration_set/rw/_build.mjs

import fs from 'fs';
import path from 'path';

const REPO = '/Users/hareshbhatia/PerformSAT';
const OUT_DIR = path.join(REPO, 'docs/calibration_set/rw');

// ---------------------------------------------------------------------------
// CB items — verbatim from PT 4-11 official PDFs.
// Each entry includes the source pointer (test, module, qNum) and the full
// item content. See CB_RW_AUTHENTICITY_REFERENCE.md for citations.
// ---------------------------------------------------------------------------

const CB_SOURCES = [
  // ------- Information and Ideas (5) -------
  {
    test: 'PT4', module: 1, qNum: 5,
    skill: 'central-ideas-and-details',
    difficulty: 'medium',
    passage: 'The following text is adapted from Susan Glaspell\'s 1912 short story "From A to Z."\n\nIt did seem that the picture failed to fit in with the rest of the shop. A persuasive young fellow who claimed he was closing out his stock let the old man have it for what he called a song. It was only a little out-of-the-way store which subsisted chiefly on the framing of pictures. The old man looked around at his views of the city, his pictures of cats and dogs, his flaming bits of landscape. "Don\'t belong in here," he fumed. And yet the old man was secretly proud of his acquisition. There was a hidden dignity in his scowling as he shuffled about pondering the least ridiculous place for the picture.',
    question: 'Which choice best states the main purpose of the text?',
    choices: [
      { id: 'A', text: 'To reveal the shop owner\'s conflicted feelings about the new picture' },
      { id: 'B', text: 'To convey the shop owner\'s resentment of the person he got the new picture from' },
      { id: 'C', text: 'To describe the items that the shop owner most highly prizes' },
      { id: 'D', text: 'To explain differences between the new picture and other pictures in the shop' }
    ],
    correctAnswer: 'A'
  },
  {
    test: 'PT6', module: 2, qNum: 9,
    skill: 'central-ideas-and-details',
    difficulty: 'easy',
    passage: 'The following text is adapted from Ann Petry\'s 1946 novel The Street.\n\nThe glow from the sunset was making the street radiant. The street is nice in this light, [Lutie] thought. It was swarming with children who were playing ball and darting back and forth across the sidewalk in complicated games of tag. Girls were skipping double dutch rope, going tirelessly through the exact center of a pair of ropes, jumping first on one foot and then the other.',
    question: 'Which choice best describes what is happening in the text?',
    choices: [
      { id: 'A', text: 'Lutie is observing the appearance of the street at a particular time of day and the events occurring on it.' },
      { id: 'B', text: 'Lutie is annoyed by the noise of children playing games on her street.' },
      { id: 'C', text: 'Lutie is puzzled by the rules of certain children\'s games.' },
      { id: 'D', text: 'Lutie is spending time alone in her apartment because she doesn\'t want to interact with her neighbors.' }
    ],
    correctAnswer: 'A'
  },
  {
    test: 'PT6', module: 2, qNum: 6,
    skill: 'inferences',
    difficulty: 'medium',
    passage: 'The following text is adapted from Jerome K. Jerome\'s 1889 novel Three Men in a Boat.\n\n[Harris] told us anecdotes of how he had gone across the [English] Channel when it was so rough that the passengers had to be tied into their [beds], and he and the captain were the only two living souls on board who were not ill. Sometimes it was he and the second mate who were not ill; but it was generally he and one other man. If not he and another man, then it was he by himself.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: [
      { id: 'A', text: 'It indicates the reason for Harris\'s eagerness to resume traveling.' },
      { id: 'B', text: 'It hints at Harris\'s feeling that during an earlier boat trip, others didn\'t include him in activities.' },
      { id: 'C', text: 'It emphasizes that Harris always boasts about his own constitution when speaking of a previous boat trip.' },
      { id: 'D', text: 'It reveals that although Harris claims to prefer solitary activities when traveling, he actually enjoys having company.' }
    ],
    correctAnswer: 'C'
  },
  {
    test: 'PT4', module: 2, qNum: 14,
    skill: 'command-of-evidence-textual',
    difficulty: 'medium',
    passage: 'Linguist Deborah Tannen has cautioned against framing contentious issues in terms of two highly competitive perspectives, such as pro versus con. According to Tannen, this debate-driven approach can strip issues of their complexity and, when used in front of an audience, can be less informative than the presentation of multiple perspectives in a noncompetitive format. To test Tannen\'s hypothesis, students conducted a study in which they showed participants one of three different versions of local news commentary about the same issue. Each version featured a debate between two commentators with opposing views, a panel of three commentators with various views, or a single commentator.',
    question: 'Which finding from the students\' study, if true, would most strongly support Tannen\'s hypothesis?',
    choices: [
      { id: 'A', text: 'On average, participants perceived commentators in the debate as more knowledgeable about the issue than commentators in the panel.' },
      { id: 'B', text: 'On average, participants perceived commentators in the panel as more knowledgeable about the issue than the single commentator.' },
      { id: 'C', text: 'On average, participants who watched the panel correctly answered more questions about the issue than those who watched the debate or the single commentator did.' },
      { id: 'D', text: 'On average, participants who watched the single commentator correctly answered more questions about the issue than those who watched the debate did.' }
    ],
    correctAnswer: 'C'
  },
  {
    test: 'PT4', module: 2, qNum: 17,
    skill: 'inferences',
    difficulty: 'hard',
    passage: 'Ancestral Puebloans, the civilization from which present-day Pueblo tribes descended, emerged as early as 1500 B.C.E. in an area of what is now the southwestern United States and dispersed suddenly in the late 1200s C.E., abandoning established villages with systems for farming crops and turkeys. Recent analysis comparing turkey remains at Mesa Verde, one such village in southern Colorado, to samples from modern turkey populations in the Rio Grande Valley of north central New Mexico determined that the latter birds descended in part from turkeys cultivated at Mesa Verde, with shared genetic markers appearing only after 1280. Thus, researchers concluded that _______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'conditions of the terrains in the Rio Grande Valley and Mesa Verde had greater similarities in the past than they do today.' },
      { id: 'B', text: 'some Ancestral Puebloans migrated to the Rio Grande Valley in the late 1200s and carried farming practices with them.' },
      { id: 'C', text: 'Indigenous peoples living in the Rio Grande Valley today have ancestors who emigrated from many parts of the southwestern United States.' },
      { id: 'D', text: 'modern turkeys cultivated in the Rio Grande Valley descend from a single common ancestor predating the Ancestral Puebloans.' }
    ],
    correctAnswer: 'B'
  },

  // ------- Craft and Structure (5) -------
  {
    test: 'PT4', module: 1, qNum: 1,
    skill: 'words-in-context',
    difficulty: 'easy',
    passage: 'The spacecraft OSIRIS-REx briefly made contact with the asteroid 101955 Bennu in 2020. NASA scientist Daniella DellaGiustina reports that despite facing the unexpected obstacle of a surface mostly covered in boulders, OSIRIS-REx successfully _______ a sample of the surface, gathering pieces of it to bring back to Earth.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'attached' },
      { id: 'B', text: 'collected' },
      { id: 'C', text: 'followed' },
      { id: 'D', text: 'replaced' }
    ],
    correctAnswer: 'B'
  },
  {
    test: 'PT5', module: 1, qNum: 3,
    skill: 'words-in-context',
    difficulty: 'medium',
    passage: 'K.D. Leka and colleagues found that the Sun\'s corona provides an advance indication of solar flares—intense eruptions of electromagnetic radiation that emanate from active regions in the Sun\'s photosphere and can interfere with telecommunications on Earth. Preceding a flare, the corona temporarily exhibits increased brightness above the region where the flare is _______.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'antecedent' },
      { id: 'B', text: 'impending' },
      { id: 'C', text: 'innocuous' },
      { id: 'D', text: 'perpetual' }
    ],
    correctAnswer: 'B'
  },
  {
    test: 'PT5', module: 1, qNum: 6,
    skill: 'text-structure-and-purpose',
    difficulty: 'medium',
    passage: 'On painter William H. Johnson\'s return to the United States in 1938 after a decade in Europe, his style underwent an abrupt transformation. __Turning away from landscapes painted in an expressionist style—a style that often involves using fluid, distorted shapes and thick, textured brushstrokes to express the artist\'s subjective experience of reality—Johnson began painting portraits of Black Americans in a bold new way.__ Evocative of African sculpture and American and Scandinavian folk art, these portraits feature flat, deliberately oversimplified figures in a vibrant but limited color palette.',
    question: 'Which choice best describes the function of the underlined sentence in the text as a whole?',
    choices: [
      { id: 'A', text: 'It elaborates on the previous sentence\'s statement about a transitional moment in Johnson\'s artistic career.' },
      { id: 'B', text: 'It provides information about Johnson\'s travels in support of a claim about his artistic influences, which is advanced in the following sentence.' },
      { id: 'C', text: 'It recounts a moment in Johnson\'s personal life that enabled the success of his subsequent career, which is summarized in the following sentence.' },
      { id: 'D', text: 'It presents evidence that calls into question the previous sentence\'s characterization of Johnson\'s artistic development.' }
    ],
    correctAnswer: 'A'
  },
  {
    test: 'PT4', module: 1, qNum: 7,
    skill: 'text-structure-and-purpose',
    difficulty: 'hard',
    passage: 'The following text is from Walt Whitman\'s 1860 poem "I Hear It Was Charged Against Me."\n\nI HEAR it is charged against me that I seek to destroy institutions; / But really I am neither for nor against institutions / (What indeed have I in common with them?— / Or what with the destruction of them?), / Only I will establish in the Mannahatta [Manhattan] and in every city of These States, / inland and seaboard, / And in the fields and woods, and above every keel [ship] little or large, that dents the water, / Without edifices, or rules, or trustees, or any argument, / The institution of the dear love of comrades.',
    question: 'Which choice best describes the overall structure of the text?',
    choices: [
      { id: 'A', text: 'The speaker questions an increasingly prevalent attitude, then summarizes his worldview.' },
      { id: 'B', text: 'The speaker regrets his isolation from others, then predicts a profound change in society.' },
      { id: 'C', text: 'The speaker concedes his personal shortcomings, then boasts of his many achievements.' },
      { id: 'D', text: 'The speaker addresses a criticism leveled against him, then announces a grand ambition of his.' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT4', module: 2, qNum: 9,
    skill: 'cross-text-connections',
    difficulty: 'medium',
    passage: 'Text 1\n\nConventional wisdom long held that human social systems evolved in stages, beginning with hunter-gatherers forming small bands of members with roughly equal status. The shift to agriculture about 12,000 years ago sparked population growth that led to the emergence of groups with hierarchical structures: associations of clans first, then chiefdoms, and finally, bureaucratic states.\n\nText 2\n\nIn a 2021 book, anthropologist David Graeber and archaeologist David Wengrow maintain that humans have always been socially flexible, alternately forming systems based on hierarchy and collective ones with decentralized leadership. The authors point to evidence that as far back as 50,000 years ago some hunter-gatherers adjusted their social structures seasonally, at times dispersing in small groups but also assembling into communities that included esteemed individuals.',
    question: 'Based on the texts, how would Graeber and Wengrow (Text 2) most likely respond to the "conventional wisdom" presented in Text 1?',
    choices: [
      { id: 'A', text: 'By conceding the importance of hierarchical systems but asserting the greater significance of decentralized collective societies' },
      { id: 'B', text: 'By disputing the idea that developments in social structures have followed a linear progression through distinct stages' },
      { id: 'C', text: 'By acknowledging that hierarchical roles likely weren\'t a part of social systems before the rise of agriculture' },
      { id: 'D', text: 'By challenging the assumption that groupings of hunter-gatherers were among the earliest forms of social structure' }
    ],
    correctAnswer: 'B'
  },

  // ------- Standard English Conventions (5) -------
  {
    test: 'PT4', module: 2, qNum: 24,
    skill: 'boundaries',
    difficulty: 'medium',
    passage: 'In 2016, engineer Vanessa Galvez oversaw the installation of 164 bioswales, vegetated channels designed to absorb and divert stormwater, along the streets of Queens, New York. By reducing the runoff flowing into city sewers, _______',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'the mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved by bioswales.' },
      { id: 'B', text: 'the bioswales have mitigated both street flooding and the resulting pollution of nearby waterways.' },
      { id: 'C', text: 'the bioswales\' mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved.' },
      { id: 'D', text: 'both street flooding and the resulting pollution of nearby waterways have been mitigated by bioswales.' }
    ],
    correctAnswer: 'B'
  },
  {
    test: 'PT5', module: 1, qNum: 22,
    skill: 'form-structure-and-sense',
    difficulty: 'medium',
    passage: 'In the music video for the song "We Didn\'t Start the Fire" by Billy Joel, the singer lists 118 political and cultural references. Such iconic references, cited in rapid and frenetic procession by the musician, who is seated impassively at a dinner table, _______ key moments and personalities of the twentieth century.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'represents' },
      { id: 'B', text: 'has represented' },
      { id: 'C', text: 'was representing' },
      { id: 'D', text: 'represent' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT6', module: 1, qNum: 20,
    skill: 'boundaries',
    difficulty: 'easy',
    passage: 'Louise Bennett (1919–2006), also known as "Miss Lou," was an influential Jamaican poet and folklorist. Her innovative poems _______ the use of Jamaican Creole (a spoken language) in literature.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'popularized;' },
      { id: 'B', text: 'popularized,' },
      { id: 'C', text: 'popularized' },
      { id: 'D', text: 'popularized:' }
    ],
    correctAnswer: 'C'
  },
  {
    test: 'PT7', module: 1, qNum: 20,
    skill: 'form-structure-and-sense',
    difficulty: 'easy',
    passage: 'The Dust Bowl was a period of severe drought that plagued the Great Plains of the US during the 1930s. During this time, dust storms _______ over 100 million acres of land.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'are affecting' },
      { id: 'B', text: 'will have affected' },
      { id: 'C', text: 'will affect' },
      { id: 'D', text: 'affected' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT4', module: 1, qNum: 26,
    skill: 'boundaries',
    difficulty: 'hard',
    passage: 'The Arctic-Alpine Botanic Garden in Norway and the Jardim Botânico of Rio de Janeiro in Brazil are two of many botanical gardens around the world dedicated to growing diverse plant _______ fostering scientific research; and educating the public about plant conservation.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'species, both native and nonnative,' },
      { id: 'B', text: 'species, both native and nonnative;' },
      { id: 'C', text: 'species; both native and nonnative,' },
      { id: 'D', text: 'species both native and nonnative,' }
    ],
    correctAnswer: 'B'
  },

  // ------- Expression of Ideas (5) -------
  {
    test: 'PT4', module: 1, qNum: 28,
    skill: 'transitions',
    difficulty: 'medium',
    passage: 'Geoscientists have long considered Hawaii\'s Mauna Loa volcano to be Earth\'s largest shield volcano by volume, measuring approximately 74,000 cubic kilometers. _______ according to a 2020 study by local geoscientist Michael Garcia, Hawaii\'s Pūhāhonu shield volcano is significantly larger, boasting a volume of about 148,000 cubic kilometers.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Secondly,' },
      { id: 'B', text: 'Consequently,' },
      { id: 'C', text: 'Moreover,' },
      { id: 'D', text: 'However,' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT4', module: 1, qNum: 29,
    skill: 'transitions',
    difficulty: 'medium',
    passage: 'In 1968, US Congressman John Conyers introduced a bill to establish a national holiday in honor of Dr. Martin Luther King Jr. The bill didn\'t make it to a vote, but Conyers was determined. He teamed up with Shirley Chisholm, the first Black woman to be elected to Congress, and they resubmitted the bill every session for the next fifteen years. _______ in 1983, the bill passed.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Instead,' },
      { id: 'B', text: 'Likewise,' },
      { id: 'C', text: 'Finally,' },
      { id: 'D', text: 'Additionally,' }
    ],
    correctAnswer: 'C'
  },
  {
    test: 'PT6', module: 1, qNum: 26,
    skill: 'transitions',
    difficulty: 'easy',
    passage: 'In the search for extraterrestrial life, astrobiologists Stuart Bartlett and Michael L. Wong propose that scientists avoid using the term "life." _______ researchers should use another word: "lyfe."',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Previously,' },
      { id: 'B', text: 'Regardless,' },
      { id: 'C', text: 'There,' },
      { id: 'D', text: 'Instead,' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT4', module: 1, qNum: 31,
    skill: 'rhetorical-synthesis',
    difficulty: 'medium',
    passage: 'While researching a topic, a student has taken the following notes:\n• Chemical leavening agents cause carbon dioxide to be released within a liquid batter, making the batter rise as it bakes.\n• Baking soda and baking powder are chemical leavening agents.\n• Baking soda is pure sodium bicarbonate.\n• To produce carbon dioxide, baking soda needs to be mixed with liquid and an acidic ingredient such as honey.\n• Baking powder is a mixture of sodium bicarbonate and an acid.\n• To produce carbon dioxide, baking powder needs to be mixed with liquid but not with an acidic ingredient.\n\nThe student wants to emphasize a difference between baking soda and baking powder. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'To make batters rise, bakers use chemical leavening agents such as baking soda and baking powder.' },
      { id: 'B', text: 'Baking soda and baking powder are chemical leavening agents that, when mixed with other ingredients, cause carbon dioxide to be released within a batter.' },
      { id: 'C', text: 'Baking soda is pure sodium bicarbonate, and honey is a type of acidic ingredient.' },
      { id: 'D', text: 'To produce carbon dioxide within a liquid batter, baking soda needs to be mixed with an acidic ingredient, whereas baking powder does not.' }
    ],
    correctAnswer: 'D'
  },
  {
    test: 'PT4', module: 1, qNum: 33,
    skill: 'rhetorical-synthesis',
    difficulty: 'hard',
    passage: 'While researching a topic, a student has taken the following notes:\n• Cambodia\'s Angkor Wat was built in the 1100s to honor the Hindu god Vishnu.\n• It has been a Buddhist temple since the sixteenth century.\n• Decorrelation stretch analysis is a novel digital imaging technique that enhances the contrast between colors in a photograph.\n• Archaeologist Noel Hidalgo Tan applied decorrelation stretch analysis to photographs he had taken of Angkor Wat\'s plaster walls.\n• Tan\'s analysis revealed hundreds of images unknown to researchers.\n\nThe student wants to present Tan\'s research to an audience unfamiliar with Angkor Wat. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    question: 'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Tan photographed Angkor Wat\'s plaster walls and then applied decorrelation stretch analysis to the photographs.' },
      { id: 'B', text: 'Decorrelation stretch analysis is a novel digital imaging technique that Tan used to enhance the contrast between colors in a photograph.' },
      { id: 'C', text: 'Using a novel digital imaging technique, Tan revealed hundreds of images hidden on the walls of Angkor Wat, a Cambodian temple.' },
      { id: 'D', text: 'Built to honor a Hindu god before becoming a Buddhist temple, Cambodia\'s Angkor Wat concealed hundreds of images on its plaster walls.' }
    ],
    correctAnswer: 'C'
  }
];

// ---------------------------------------------------------------------------
// PerformSAT items — pulled from src/data/practiceTests/practiceTest{N}RW.js.
// Pointers identify each item by file, qid (the integer `id` field within the
// module), and module ('module-1' or 'module-2'). The script resolves each
// pointer to the live item at build time. The `tag` records the audit verdict
// (PASS / BORDERLINE / FAIL) for use in the answer key only.
// ---------------------------------------------------------------------------

const PS_SOURCES = [
  // ========================================================================
  // Information and Ideas (5)
  // ========================================================================
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 9,  domainTag: 'Information and Ideas',         skillTag: 'central-ideas-and-details',   tag: 'BORDERLINE' },  // Esperanza Galván linguist — fictional researcher
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 10, domainTag: 'Information and Ideas',         skillTag: 'central-ideas-and-details',   tag: 'PASS' },        // Andean potato landraces — real ecological topic, no named researcher to fabricate
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 11, domainTag: 'Information and Ideas',         skillTag: 'inferences',                  tag: 'PASS' },        // Scottish Knapdale beaver reintroduction — real and citable
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 12, domainTag: 'Information and Ideas',         skillTag: 'inferences',                  tag: 'BORDERLINE' },  // Pacific NW lichen biodiversity — generic, no named institution
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 15, domainTag: 'Information and Ideas',         skillTag: 'command-of-evidence-textual', tag: 'FAIL', failMode: 'fabricated-novel-and-author' },           // The Glass Tide by Olwen Tregaron — fake novel, fake Welsh writer

  // ========================================================================
  // Craft and Structure (5)
  // ========================================================================
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 1,  domainTag: 'Craft and Structure',           skillTag: 'words-in-context',            tag: 'BORDERLINE' },  // Polynesian wayfinding — Nainoa Kealoha (the historian is fictional)
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 3,  domainTag: 'Craft and Structure',           skillTag: 'words-in-context',            tag: 'BORDERLINE' },  // Architect Idris Tanaka — fictional architect, plausible name
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 4,  domainTag: 'Craft and Structure',           skillTag: 'text-structure-and-purpose',  tag: 'BORDERLINE' },  // Mireille Dubois-Coulibaly prairie dogs — researcher unverifiable but topic real
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 5,  domainTag: 'Craft and Structure',           skillTag: 'text-structure-and-purpose',  tag: 'BORDERLINE' },  // Aroha Whitford "The Lighthouse Keeper" — fictional author/short story (CB uses real authors); CB-style framing
  { file: 'practiceTest1RW.js',  module: 'module-1', qid: 7,  domainTag: 'Craft and Structure',           skillTag: 'cross-text-connections',      tag: 'FAIL', failMode: 'cross-test-templated-fabricated-novelist-and-critic' }, // Theodora Hines / Devon Park — twin of PT3 Q7 Behzadi/Wojcik

  // ========================================================================
  // Standard English Conventions (5)
  // ========================================================================
  { file: 'practiceTest11RW.js', module: 'module-1', qid: 19, domainTag: 'Standard English Conventions',  skillTag: 'form-structure-and-sense',    tag: 'PASS' },        // Cornwall tin-mine recovery (past perfect progressive) — PT11 PASS
  { file: 'practiceTest11RW.js', module: 'module-1', qid: 20, domainTag: 'Standard English Conventions',  skillTag: 'boundaries',                  tag: 'PASS' },        // Pristimantis araguanus — real species — PT11 PASS
  { file: 'practiceTest8RW.js',  module: 'module-1', qid: 21, domainTag: 'Standard English Conventions',  skillTag: 'form-structure-and-sense',    tag: 'FAIL', failMode: 'non-word-possessive-distractor' },     // British Library's' (impossible apostrophe form)
  { file: 'practiceTest11RW.js', module: 'module-2', qid: 20, domainTag: 'Standard English Conventions',  skillTag: 'boundaries',                  tag: 'FAIL', failMode: 'fabricated-Linnaean-binomial' },        // Pristimantis hagensii (fake species)
  { file: 'practiceTest12RW.js', module: 'module-2', qid: 19, domainTag: 'Standard English Conventions',  skillTag: 'form-structure-and-sense',    tag: 'FAIL', failMode: 'genocide-euphemistic-context' },       // Imigongo + "disruptions of the 1990s"

  // ========================================================================
  // Expression of Ideas (5)
  // ========================================================================
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 24, domainTag: 'Expression of Ideas',           skillTag: 'transitions',                 tag: 'BORDERLINE' },  // Saharan dust transitions — twin of Q8 (templated fingerprint)
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 25, domainTag: 'Expression of Ideas',           skillTag: 'transitions',                 tag: 'PASS' },        // Murano glassblowers — real cultural topic
  { file: 'practiceTest2RW.js',  module: 'module-1', qid: 27, domainTag: 'Expression of Ideas',           skillTag: 'rhetorical-synthesis',        tag: 'PASS' },        // Hedy Lamarr — real historical figure, real disagreement
  { file: 'practiceTest3RW.js',  module: 'module-1', qid: 27, domainTag: 'Expression of Ideas',           skillTag: 'rhetorical-synthesis',        tag: 'BORDERLINE' },  // Sardinia Blue Zones / Marina Pinto — fictional sociologist on real topic
  { file: 'practiceTest1RW.js',  module: 'module-1', qid: 24, domainTag: 'Expression of Ideas',           skillTag: 'transitions',                 tag: 'FAIL', failMode: 'cross-test-templated-fabricated-musician' } // Sergei Petrov cellist — twin of PT2 Q24 (Bevilacqua pianist)
];

// ---------------------------------------------------------------------------
// Map source `domain` strings to canonical 4-domain skill buckets used in
// the calibration set. The CB sources already use the canonical bucket name
// in `skill`; we tag domain via the question type for cross-check.
// ---------------------------------------------------------------------------

const SKILL_TO_DOMAIN = {
  'words-in-context':              'Craft and Structure',
  'text-structure-and-purpose':    'Craft and Structure',
  'cross-text-connections':        'Craft and Structure',
  'central-ideas-and-purpose':     'Information and Ideas',
  'central-ideas-and-details':     'Information and Ideas',
  'inferences':                    'Information and Ideas',
  'command-of-evidence-textual':   'Information and Ideas',
  'command-of-evidence-quantitative': 'Information and Ideas',
  'boundaries':                    'Standard English Conventions',
  'form-structure-and-sense':      'Standard English Conventions',
  'transitions':                   'Expression of Ideas',
  'rhetorical-synthesis':          'Expression of Ideas'
};

// ---------------------------------------------------------------------------
// Resolver: read a PerformSAT item from the source file by file/module/qid.
// We parse the JS file via `eval` after stripping `export` so we can index by
// the integer `id` field within each module's `questions` array. This mirrors
// the loader pattern used by docs/calibration_set/_build.mjs.
// ---------------------------------------------------------------------------

function loadTest(file) {
  let code = fs.readFileSync(path.join(REPO, 'src/data/practiceTests', file), 'utf8');
  code = code.replace(/export const (\w+)/g, 'globalThis.$1');
  code = code.replace(/export default [^;]+;?/g, '');
  // eslint-disable-next-line no-eval
  eval(code);
  // The exported variable name is the file's basename minus extension.
  const varName = file.replace(/\.js$/, '');
  return globalThis[varName];
}

function resolvePsItem(ptr) {
  const t = loadTest(ptr.file);
  const mod = t.modules.find(m => m.id === ptr.module);
  if (!mod) throw new Error(`Module ${ptr.module} not found in ${ptr.file}`);
  const q = mod.questions.find(qq => qq.id === ptr.qid);
  if (!q) throw new Error(`qid ${ptr.qid} not found in ${ptr.file}/${ptr.module}`);

  // Reconstruct the passage. Some items use `passage`, some use `passages`
  // (cross-text), some use `studentNotes` (rhetorical synthesis). We render
  // each into a single passage string.
  let passage;
  if (typeof q.passage === 'string') {
    passage = q.passage;
  } else if (Array.isArray(q.passages)) {
    passage = q.passages.map(p => `${p.label}\n\n${p.text}`).join('\n\n');
  } else if (q.studentNotes) {
    const sn = q.studentNotes;
    const bullets = sn.bullets.map(b => `• ${b}`).join('\n');
    passage = `${sn.intro}\n${bullets}\n\n${sn.goal}`;
  } else {
    throw new Error(`Item ${ptr.file}/${ptr.module}/${ptr.qid} has no passage / passages / studentNotes`);
  }

  return {
    passage,
    question: q.question,
    choices: q.choices.map(c => ({ id: c.id, text: c.text })),
    correctAnswer: q.correctAnswer,
    difficulty: q.difficulty
  };
}

// ---------------------------------------------------------------------------
// Anonymizer — strips any source-revealing fields from an item record.
// CB items: keep id, type, skill (canonical), difficulty, passage, question,
// choices, correctAnswer. Drop test/module/qNum/etc.
// PerformSAT items: same shape, drop file/qid/module/tag/failMode/etc. and
// also strip any `band` / `domain` / `explanation` fields that may appear in
// the source JS (these are PerformSAT-specific tells).
// ---------------------------------------------------------------------------

function anonymizeCb(it) {
  const domain = SKILL_TO_DOMAIN[it.skill] || 'Information and Ideas';
  return {
    type: 'multiple-choice',
    skill: it.skill,
    domain,
    difficulty: it.difficulty,
    passage: it.passage,
    question: it.question,
    choices: it.choices.map(c => ({ id: c.id, text: c.text })),
    correctAnswer: it.correctAnswer
  };
}

function anonymizePs(ptr, resolved) {
  const domain = SKILL_TO_DOMAIN[ptr.skillTag] || ptr.domainTag;
  return {
    type: 'multiple-choice',
    skill: ptr.skillTag,
    domain,
    difficulty: resolved.difficulty,
    passage: resolved.passage,
    question: resolved.question,
    choices: resolved.choices,
    correctAnswer: resolved.correctAnswer
  };
}

// Seeded shuffle (Park–Miller LCG) — deterministic given the seed.
function pseudoShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// Build pipeline.
// ---------------------------------------------------------------------------

const cbAnon = CB_SOURCES.map(it => ({
  __source: 'CB',
  __ptr: { test: it.test, module: it.module, qNum: it.qNum, skill: it.skill, difficulty: it.difficulty },
  ...anonymizeCb(it)
}));

const psAnon = PS_SOURCES.map(ptr => {
  const resolved = resolvePsItem(ptr);
  return {
    __source: 'PerformSAT',
    __ptr: { file: ptr.file, module: ptr.module, qid: ptr.qid, tag: ptr.tag, failMode: ptr.failMode || null, skill: ptr.skillTag, difficulty: resolved.difficulty },
    ...anonymizePs(ptr, resolved)
  };
});

const merged = [...cbAnon, ...psAnon];
if (merged.length !== 40) {
  throw new Error(`Expected 40 items; got ${merged.length}`);
}

const shuffled = pseudoShuffle(merged, 54321);

// Assign opaque IDs and split into the public items file vs. the private answer key.
const publicItems = [];
const answerKey = {};
shuffled.forEach((it, i) => {
  const id = `rw-item-${String(i + 1).padStart(3, '0')}`;
  const { __source, __ptr, ...clean } = it;
  publicItems.push({ id, ...clean });

  if (__source === 'CB') {
    answerKey[id] = {
      source: 'CB',
      test: __ptr.test,
      module: __ptr.module,
      qNum: __ptr.qNum,
      skill: __ptr.skill,
      difficulty: __ptr.difficulty,
      domain: SKILL_TO_DOMAIN[__ptr.skill] || null,
      correctAnswer: it.correctAnswer
    };
  } else {
    answerKey[id] = {
      source: 'PerformSAT',
      file: __ptr.file,
      module: __ptr.module,
      qid: __ptr.qid,
      tag: __ptr.tag,
      failMode: __ptr.failMode,
      skill: __ptr.skill,
      difficulty: __ptr.difficulty,
      domain: SKILL_TO_DOMAIN[__ptr.skill] || null,
      correctAnswer: it.correctAnswer
    };
  }
});

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'items.json'), JSON.stringify(publicItems, null, 2));
fs.writeFileSync(path.join(OUT_DIR, '.answer_key.json'), JSON.stringify(answerKey, null, 2));

// ---------------------------------------------------------------------------
// Summary log.
// ---------------------------------------------------------------------------

const summary = {
  total: publicItems.length,
  bySource: { CB: 0, PerformSAT: 0 },
  byDomain: {},
  bySkill: {},
  byDifficulty: {},
  psByTag: { PASS: 0, BORDERLINE: 0, FAIL: 0 },
  psFailModes: {}
};
for (const id of Object.keys(answerKey)) {
  const e = answerKey[id];
  summary.bySource[e.source]++;
  summary.byDomain[e.domain] = (summary.byDomain[e.domain] || 0) + 1;
  summary.bySkill[e.skill] = (summary.bySkill[e.skill] || 0) + 1;
  summary.byDifficulty[e.difficulty] = (summary.byDifficulty[e.difficulty] || 0) + 1;
  if (e.source === 'PerformSAT') {
    summary.psByTag[e.tag]++;
    if (e.failMode) summary.psFailModes[e.failMode] = (summary.psFailModes[e.failMode] || 0) + 1;
  }
}

console.log('Wrote items.json with', publicItems.length, 'items');
console.log('Wrote .answer_key.json with', Object.keys(answerKey).length, 'mappings');
console.log(JSON.stringify(summary, null, 2));
