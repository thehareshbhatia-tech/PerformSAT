/**
 * Learn tab — Reading & Writing chapters.
 *
 * One chapter per College Board R&W skill (11 total), grouped into the four
 * official R&W units. Each chapter teaches how to SPOT the question type, the
 * plain-language method, the real distractor patterns, one original worked
 * example, and self-check questions.
 *
 * Pure data — no app imports. Rendered by the Learn tab's block renderer.
 * `unitId` values match index.js UNIT_REGISTRY (section 'rw'):
 *   'rw-information-ideas' | 'rw-craft-structure'
 *   | 'rw-expression-ideas' | 'rw-conventions'
 *
 * Block field shapes mirror src/data/contentTabs/ (text / keyInsight /
 * trapCard / example / checkpointQuestion). Content strings support
 * **bold**, *accent*, and inline math $...$ via renderRichText.
 *
 * Grounded in the app's own R&W corpus (src/data/questions/rwBank): stems,
 * spot-it cues, explanation methods, and distractor labels are mined from the
 * 678 authored items. All passages/examples below are ORIGINAL.
 */

export const rwChapters = [
  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Information and Ideas  (rw-information-ideas)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-central-ideas',
    unitId: 'rw-information-ideas',
    title: 'Central Ideas & Details',
    blurb: 'Find the single biggest point a short passage is built to support, and pin down stated facts without over-reading.',
    readMinutes: 7,
    cbSkills: ['central-ideas-and-details'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'You will see this question in two flavors. The main-idea flavor asks *"Which choice best states the main idea of the text?"* The detail flavor asks *"According to the text, what does [the researcher] argue?"* or *"According to the text, the evidence includes..."* Expect roughly 6 of these across a full test. The passage is short — a single paragraph of 25 to 150 words about science, history, art, or a literary scene.',
        },
        {
          type: 'text',
          content: 'For a **main-idea** question, find the one sentence the rest of the passage exists to support. It is usually the first sentence or the last. Everything else — the dates, the examples, the mechanism — is there to back up that one claim. The right answer restates that big claim in new words. For a **detail** question, do the opposite: the answer is written somewhere in the passage, so hunt for the exact line instead of reasoning it out.',
        },
        {
          type: 'text',
          content: 'A fast habit that pays off: before you touch the answers, sum up the passage in one short phrase of your own — *"footprints prove early upright walking"* or *"sharks stay put, so protect one reef."* That phrase is your target; the right answer is the choice closest to it. For a detail question, the wrong answers often swap one word — changing "increased" to "decreased," or attaching a fact to the wrong person. So on detail questions, go back and read the exact line rather than trusting your memory of it. The correct choice paraphrases the passage faithfully; a trap changes one small thing and hopes you do not check.',
        },
        {
          type: 'keyInsight',
          content: 'A correct main-idea answer is *big enough* to cover every sentence and *small enough* to stay inside the passage. If a choice only explains one sentence, it is too small. If it adds a claim the passage never makes, it is too big.',
        },
        {
          type: 'trapCard',
          title: 'The true-but-too-narrow detail',
          wrong: 'You pick a choice that is factually correct — it quotes a real supporting detail, like how a fossil was preserved or what year a study ran. It matches the passage, so it feels safe.',
          correction: 'A detail can be true and still be the wrong answer to a main-idea question. It only covers one sentence, not the whole paragraph. Test each choice by asking: *does the rest of the passage exist to support this?* If only one line backs it up, it is a detail, not the main idea.',
        },
        {
          type: 'trapCard',
          title: 'The overreach',
          wrong: 'You pick a choice that sounds important because it makes a strong claim — a comparison ("more reliable than"), a cause, or a "most significant." The topic is right, so you go with it.',
          correction: 'Scan the choice word by word. If it contains a comparison, a ranking, or a cause that the passage never actually states, cut it. The right answer never adds information the text did not give you.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'When marine biologist Priya Nandakumar began tagging reef sharks off the Andaman coast in 2011, she expected the animals to roam widely in search of food. Instead, her tracking data showed that most individuals returned to the same half-kilometer stretch of reef night after night for years. Nandakumar argues that this loyalty to a home range makes the sharks unusually vulnerable: protect one small reef, and you protect nearly the whole local population; damage it, and there is nowhere for them to go.\n\nWhich choice best states the main idea of the text?',
          steps: [
            {
              label: 'Find the supported claim',
              content: 'The last sentence carries the weight: the sharks stick to one small home range, and that changes how we protect them. The tagging and the "night after night" data are there to support it.',
            },
            {
              label: 'Test the choices',
              content: 'A choice that only says "Nandakumar tagged sharks in 2011" is a detail. A choice that says "reef sharks migrate long distances" contradicts the text. A choice that says "sharks are the most endangered reef animal" overreaches — the passage never ranks them.',
            },
            {
              label: 'Answer',
              content: 'The right answer says roughly: *Nandakumar\'s tracking showed reef sharks stay loyal to a small home range, which makes protecting a single reef unusually effective for the whole local population.* That covers every sentence without adding anything.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A passage spends four sentences describing a new telescope, then ends: "What makes the instrument revolutionary is not its size but its ability to record a full sky survey in a single night." Which sentence is the main idea most likely built around?',
          answer: 'The last sentence. The word "revolutionary" plus a contrast ("not its size but...") signals the central claim; the earlier description is setup. **Why:** the rest of the passage exists to lead up to that point.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Two answer choices both appear in the passage word-for-word. One names a single statistic; the other restates the passage\'s overall argument. For a main-idea question, which is correct, and how do you tell them apart?',
          answer: 'The one that restates the overall argument. **Why:** appearing in the passage is not enough — a main-idea answer has to cover the whole passage, and a lone statistic only covers one sentence.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A choice says a researcher\'s method is "more accurate than any earlier technique." The passage describes the method but never compares it to older ones. Keep it or cut it?',
          answer: 'Cut it. **Why:** the comparison is information the passage never gave. An overreaching claim is wrong even when the topic matches.',
        },
      ],
    },
  },

  {
    id: 'rw-inferences',
    unitId: 'rw-information-ideas',
    title: 'Inferences',
    blurb: 'Complete a passage with the conclusion its facts logically force — no more, no less.',
    readMinutes: 7,
    cbSkills: ['inferences'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'The stem is almost always the same: *"Which choice most logically completes the text?"* The passage ends with a blank, and you supply the sentence that the earlier facts point to. Expect roughly 4 per test. These are logic puzzles, not reading-comprehension questions — the answer is not stated, but it is *forced* by what is stated.',
        },
        {
          type: 'text',
          content: 'Work it in three moves. **First, list the facts the passage gives you** — two or three of them, usually. **Second, look for the pivot** — a word like *but*, *however*, or *although* that tells you where the passage is heading. **Third, choose the conclusion those facts guarantee.** The right answer is the smallest safe step past the evidence. If you have to assume anything extra to make a choice work, it is wrong.',
        },
        {
          type: 'text',
          content: 'Let the words right before the blank tell you what shape the ending needs. If the passage says *"this suggests that ___,"* you need a conclusion drawn from the evidence. If it says *"because ___,"* you need a reason. If it says *"unlike earlier views, the study shows ___,"* you need something that contrasts with the old view. A quick test seals it: read your candidate ending back into the passage and ask, *"do the stated facts force this to be true?"* If the facts merely *allow* it — if you can imagine them being true while your ending is false — it is not safe. The right answer is the one the evidence leaves no room to deny.',
        },
        {
          type: 'keyInsight',
          content: 'The correct inference stays *inside* the facts. The strongest wrong answers say something true-sounding but bigger than the evidence — they add a word like *every*, *always*, *cannot*, or *only* that the passage never earned.',
        },
        {
          type: 'trapCard',
          title: 'The overreach',
          wrong: 'You pick a choice that stretches the evidence — "every species," "in all cases," "cannot survive unless." It matches the passage\'s topic and sounds confident.',
          correction: 'Underline the absolute word. The passage gave you evidence about one study, one species, or one situation — a choice that jumps to "every" or "always" claims more certainty than the facts support. The safe inference matches the exact scope of the evidence.',
        },
        {
          type: 'trapCard',
          title: 'The flip',
          wrong: 'You pick a choice that reverses the relationship — it says the older method was stricter when the passage said it was looser, or names cause as effect.',
          correction: 'Re-read the facts and check direction. If the passage says A led to B, a choice that says B led to A is backwards. These traps reuse the passage\'s exact words, so slow down when a choice sounds familiar.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A common assumption is that adding streetlights to a park always lowers crime. But when the city of Halveston installed bright lighting along its central greenway, reported thefts there did not fall — and in the newly lit hours, they slightly rose. Researchers noted that the lighting also drew far more late-night visitors to the greenway than before. This suggests that the rise in reported thefts may have had less to do with the lighting itself than with ______\n\nWhich choice most logically completes the text?',
          steps: [
            {
              label: 'List the facts',
              content: 'Lighting went in. Thefts did not fall and slightly rose. The lit hours drew many more visitors than before.',
            },
            {
              label: 'Spot the pivot',
              content: 'The word "But" flags that the result defied the assumption, and "less to do with the lighting than with ___" tells you the blank names the real driver.',
            },
            {
              label: 'Answer',
              content: 'The forced conclusion: *the larger number of people now using the greenway at night* (more potential targets and thieves). A choice saying "lighting always increases crime" overreaches; a choice saying "the greenway became safer" flips the result.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A passage shows that a drug was tested only on adults, then says regulators later required testing on children too. The blank should complete: "The earlier approval process had a gap because ______." What kind of ending is safe?',
          answer: 'One that stays inside the facts — roughly "it approved drugs without evidence about how they affect children." **Why:** the passage supports exactly that gap; a choice claiming the process "ignored all safety data" overreaches.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Why is a choice containing the word "always" usually wrong on an inference question?',
          answer: 'Because "always" claims certainty the evidence rarely gives. **Why:** a short passage describes one case or study, and a universal claim reaches past that scope.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A choice restates the passage\'s facts but swaps which factor caused which. Is that a valid inference?',
          answer: 'No — it is a flip. **Why:** an inference has to keep the passage\'s direction of cause and effect; reversing it contradicts the evidence even while echoing its words.',
        },
      ],
    },
  },

  {
    id: 'rw-command-of-evidence-textual',
    unitId: 'rw-information-ideas',
    title: 'Command of Evidence (Textual)',
    blurb: 'Pick the finding or detail that would most directly strengthen or weaken a specific claim.',
    readMinutes: 7,
    cbSkills: ['command-of-evidence-textual'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'The stem points you at a claim and asks what would back it up: *"Which finding, if true, would most directly support the team\'s hypothesis?"* Sometimes it asks what would *weaken* or *undermine* a claim instead — read that word carefully. Expect roughly 2 per test. The passage usually describes a researcher\'s hypothesis or a student\'s claim, and your job is to match it to the choice that connects.',
        },
        {
          type: 'text',
          content: 'Nail down the claim first, in your own words: *what exactly is being argued?* Then read each choice asking one question — *does this make the claim more likely to be true?* The right answer lines up with the claim on every part of it. **The connection must be direct:** a fact that is interesting but sits one step to the side of the claim is a wrong answer, even if it is about the same topic.',
        },
        {
          type: 'text',
          content: 'Before you read the choices, predict what perfect evidence would look like. If the hypothesis is *"birds flee at the alarm call even without seeing the hawk,"* the ideal finding is a test where the call plays, no hawk is visible, and the birds still flee. Holding that prediction in mind makes the right choice jump out and makes the off-target ones easier to drop. Also watch for the *"weaken"* and *"undermine"* versions of this question — they look identical but reverse what you are hunting for. Underlining the verb in the stem before you start keeps you from picking a strong supporting fact when the question actually wanted the fact that breaks the claim.',
        },
        {
          type: 'keyInsight',
          content: 'Turn the claim into a checklist. If the claim has two parts — say, a *cause* and an *effect* — the supporting evidence has to touch both. A choice that only confirms half the claim leaves the other half unproven.',
        },
        {
          type: 'trapCard',
          title: 'The off-target fact',
          wrong: 'You pick a choice that is clearly true and clearly on-topic, but it supports a nearby idea rather than the exact claim in the stem.',
          correction: 'Re-read the claim and the choice side by side. Same topic is not the same as same claim. Ask whether the choice would make *this specific hypothesis* more likely — if it proves a different point, drop it.',
        },
        {
          type: 'trapCard',
          title: 'The wrong direction',
          wrong: 'The stem asks what would *support* the claim, but you pick a choice that would actually *weaken* it (or vice versa on an "undermine" question).',
          correction: 'Circle the verb in the stem — support or undermine — before you look at the choices. A finding that cuts against the hypothesis is the right answer only when the stem asks you to weaken it.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Ecologist Tomas Reyes hypothesizes that a songbird species uses the calls of a second, unrelated bird as an early warning system: when the second bird sounds its alarm at approaching hawks, the songbirds flee even though they cannot see the hawk themselves.\n\nWhich finding, if true, would most directly support Reyes\'s hypothesis?',
          steps: [
            {
              label: 'State the claim as a checklist',
              content: 'The songbirds (1) react to the second bird\'s alarm call, and (2) do so specifically as a response to a threat they cannot see directly.',
            },
            {
              label: 'Test the connection',
              content: 'A choice about how loud the alarm call is stays off-target. A choice about the songbirds\' nesting habits is same-topic but wrong claim. You need a choice that touches both parts of the checklist.',
            },
            {
              label: 'Answer',
              content: 'The right finding: *in playback trials, songbirds fled when the alarm call was played from hidden speakers, even with no hawk present.* That confirms they flee in response to the call itself, exactly as the hypothesis predicts.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A claim states that a fertilizer raises crop yield only in acidic soil. Which finding supports it: (a) the fertilizer raised yields in acidic fields but not in neutral ones, or (b) the fertilizer raised yields in every field tested?',
          answer: '(a). **Why:** the claim has two parts — the boost happens *and* only in acidic soil. Option (b) contradicts the "only in acidic soil" half.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'The stem asks which finding would "undermine" a researcher\'s conclusion. You find a choice that strongly confirms the conclusion. Correct or not?',
          answer: 'Not correct. **Why:** "undermine" means weaken. The right answer must cut against the conclusion; a confirming finding is the trap.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why is a choice that is true and about the same subject sometimes still wrong?',
          answer: 'Because same subject is not the same claim. **Why:** command-of-evidence rewards a *direct* link to the specific hypothesis, so a fact that supports a neighboring idea does not count.',
        },
      ],
    },
  },

  {
    id: 'rw-command-of-evidence-quantitative',
    unitId: 'rw-information-ideas',
    title: 'Command of Evidence (Quantitative)',
    blurb: 'Read a table or graph and pick the choice whose numbers actually prove the claim.',
    readMinutes: 8,
    cbSkills: ['command-of-evidence-quantitative'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'A short passage sits next to a table, bar graph, or line graph, and the stem reads *"Which choice most effectively uses data from the [table] to complete the statement?"* or *"...to support the claim?"* Expect roughly 4 per test. Three of the four choices misread, misuse, or overreach the data. Only one both quotes the figure correctly and makes it serve the claim.',
        },
        {
          type: 'text',
          content: 'Read the claim before you read the graph, and underline its **scope words**. If the claim is about *"the community as a whole,"* your answer must speak for every group in the data, not one. If the claim describes a *trend*, your answer has to show the numbers moving in that direction. Then check the winning choice twice: **the figure must be accurate, and it must actually prove the claim** — a choice can be true and still not support the point.',
        },
        {
          type: 'text',
          content: 'Read the graphic *before* the choices, and read it in order: title first, then the axis or column labels, then the units. Half of the wrong answers here come from grabbing the wrong row or misreading what a number measures — percent versus count, one year versus a range. Once you know the claim and have the graphic mapped, find the exact figures the claim needs and check them against each choice. A choice can quote a number that really appears in the table and still be wrong because it came from the wrong category, described the wrong direction, or covered only part of what the claim requires. Slow, literal reading of the data beats a fast guess every time here.',
        },
        {
          type: 'keyInsight',
          content: 'Two things can go wrong, so check both: does the choice read the number correctly, and does that number back the specific claim? A choice that cites a real figure but points it at the wrong claim is the most common trap here.',
        },
        {
          type: 'trapCard',
          title: 'The single data point standing in for the whole',
          wrong: 'The claim is about a whole group ("all five species," "the region overall"), but you pick a choice that cites just one row of the table because its number is correct.',
          correction: 'Match the scope. If the claim covers the whole set, one species or one year cannot prove it. Look for the choice that reflects the full pattern the claim describes.',
        },
        {
          type: 'trapCard',
          title: 'The right number, flipped conclusion',
          wrong: 'You pick a choice that quotes the table accurately but then draws the opposite conclusion — calling a rise a "decline," or a widening gap "steady."',
          correction: 'Read the number *and* the sentence built around it. A choice can lift the exact value off the table and still describe the trend backwards. Confirm that the direction in the sentence matches the direction in the data.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'A student claims that recycling participation in Brightwater grew steadily across all four neighborhoods from 2015 to 2021. A table shows participation rates: North rose 40% to 55%; East rose 32% to 48%; South rose 51% to 63%; West held at 44% to 45%.\n\nWhich choice most effectively uses the data to support the claim?',
          steps: [
            {
              label: 'Underline the scope',
              content: '"All four neighborhoods" and "grew steadily" — the answer must show every neighborhood rising, not just one.',
            },
            {
              label: 'Screen the traps',
              content: 'A choice citing only South (51% to 63%) is a single data point standing in for the whole. A choice saying West "grew sharply" flips the data — West barely moved.',
            },
            {
              label: 'Answer',
              content: 'The claim is actually *not fully supported* by the data (West was flat), so the best-supported version names the three rising neighborhoods honestly. The correct choice reflects what the numbers really show rather than forcing all four to fit.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A claim says a metric "increased faster each decade." A choice reports the total change across all decades. Does that support the claim?',
          answer: 'No. **Why:** the claim is about the *pace* speeding up, so you need each decade\'s increase getting larger. A single total says nothing about whether the pace changed.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A choice lists the correct value from the table but describes a rising trend as "holding steady." Why is it wrong?',
          answer: 'Because the number is right but the conclusion is flipped. **Why:** quantitative evidence has to match both the figure and the direction; a backwards description fails the claim.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'The claim is about "manufacturing," but a choice uses the row labeled "agriculture." Keep it?',
          answer: 'Cut it. **Why:** it uses the wrong row. Even an accurate number proves nothing if it comes from the wrong category.',
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Craft and Structure  (rw-craft-structure)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-words-in-context',
    unitId: 'rw-craft-structure',
    title: 'Words in Context',
    blurb: 'Fill a blank with the single most precise word the surrounding sentence demands.',
    readMinutes: 7,
    cbSkills: ['words-in-context'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'This is the most common R&W question — expect roughly 8 per test. The stem reads *"Which choice completes the text with the most logical and precise word or phrase?"* A blank sits inside a sentence, and four words compete to fill it. All four may fit the topic; only one fits the exact meaning the sentence needs.',
        },
        {
          type: 'text',
          content: 'Do not read the choices first. **Cover them, read the sentence, and predict your own word for the blank.** Then find the choice closest to your prediction. The surrounding sentence always contains a clue — a paired phrase, a contrast, an example — that pins down the meaning. When two choices seem close, the difference is usually *precision*: one is roughly right, the other is exactly right.',
        },
        {
          type: 'text',
          content: 'Two clues do most of the work. The first is **charge** — is the blank a positive word or a negative one? The sentence usually tips its hand: praise, damage, growth, or loss nearby tells you the sign, and you can cut every choice with the wrong charge in seconds. The second is **contrast** — words like *but*, *although*, *rather than*, and *despite* signal that the blank should mean the opposite of something else in the sentence. Find what it contrasts with, then aim for its reverse. When you are torn between two survivors, pick the more specific one: the SAT rewards the word that fits the exact situation, not the word that is merely in the neighborhood.',
        },
        {
          type: 'keyInsight',
          content: 'The blank has a job defined by the sentence, not by the topic. Ask *what does this word have to do here* — reveal? hide? weaken? increase? Then keep only the choice that does exactly that job.',
        },
        {
          type: 'trapCard',
          title: 'The opposite that fits the topic',
          wrong: 'You pick a word that belongs to the same subject but points the wrong direction — "departs" where the sentence needs "stays," or "mask" where it needs "reveal."',
          correction: 'Decide the *direction* the blank needs before you choose. The clue in the sentence tells you whether the word should be positive or negative, more or less, hide or show — a same-topic word going the wrong way is the classic trap.',
        },
        {
          type: 'trapCard',
          title: 'The word that is close but not precise',
          wrong: 'You pick a word that is in the right area but overshoots or undershoots — "careers" for everyday income, "shouts" for a quiet mention, "frequent" when the sentence is about force.',
          correction: 'Hold the choice against the exact clue. "Careers" implies salaried jobs; if the sentence describes selling produce, "livelihoods" is more precise. The right word matches the sentence\'s meaning on every dimension, not just the general theme.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Spectroscopy lets astronomers study a star they will never visit: as starlight passes through the gas around a distant planet, the gas absorbs specific colors, and those missing colors ______ which elements are present. Researchers read the pattern like a chemical fingerprint.\n\nWhich choice completes the text with the most logical and precise word or phrase?\n(A) forecast  (B) reveal  (C) mask  (D) exaggerate',
          steps: [
            {
              label: 'Predict the word',
              content: 'The missing colors let researchers *find out* which elements are there — the blank needs a word meaning "show" or "make known."',
            },
            {
              label: 'Screen by direction',
              content: '"Mask" means hide — the opposite. "Forecast" means predict the future, but the elements are present now, not later. "Exaggerate" adds a false claim the sentence never makes.',
            },
            {
              label: 'Answer',
              content: '(B) reveal. It means exactly "make known," matching the "chemical fingerprint" clue in the next sentence.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A sentence says whales "feed, breed, and raise their young in the same region." The blank earlier calls them year-round ______ of that region. Between "residents" and "visitors," which is precise, and why?',
          answer: '"Residents." **Why:** the clue "same region" all year means they stay; "visitors" implies leaving, the wrong direction.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Two choices both mean "loud." The sentence describes a quiet, evidence-based process. What does that tell you?',
          answer: 'Both are probably wrong. **Why:** the sentence\'s tone is understated, so a word implying loudness (like "announce" or "shout") clashes with the clue; precision means matching the register.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why predict your own word before reading the choices?',
          answer: 'Because it locks in the meaning the sentence needs before the tempting near-misses can pull you off. **Why:** the choices are designed to sound plausible; a prediction gives you a target to measure them against.',
        },
      ],
    },
  },

  {
    id: 'rw-text-structure-and-purpose',
    unitId: 'rw-craft-structure',
    title: 'Text Structure & Purpose',
    blurb: 'Describe how a passage is built or why a sentence is there — the shape of the argument, not its topic.',
    readMinutes: 7,
    cbSkills: ['text-structure-and-purpose'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'Three stems live here. *"Which choice best describes the overall structure of the text?"* asks for the shape. *"Which choice best states the main purpose of the text?"* asks for the goal. *"Which choice best describes the function of the underlined sentence?"* asks what one sentence *does* for the passage. Expect roughly 6 per test. These reward reading for the *moves* a passage makes, not just what it is about.',
        },
        {
          type: 'text',
          content: 'For **structure**, sketch the passage in beats: *belief stated, evidence given, belief overturned, conclusion drawn.* The right answer describes those beats in order. For **purpose**, ask what every sentence is working toward together. For **function**, read the sentence *before* and *after* the underlined one — the function is the bridge it builds between them (adds an example, raises an objection, offers a solution). **Watch the turn words** — *but*, *instead*, *however* — they mark where the structure changes direction.',
        },
        {
          type: 'text',
          content: 'A quick decision rule sorts the three sub-types. If the stem says *"structure,"* you are tracing the order of moves from first sentence to last — describe the arc. If it says *"main purpose,"* you are naming the one job the whole passage does — to explain, to argue, to correct. If it says *"function of the underlined sentence,"* zoom in: cover that sentence and ask what the passage would lose without it, then read the sentences on either side to see the gap it fills. In all three, the answer choices are written as abstract descriptions ("presents a hypothesis and then tests it"), so translate each choice back into the concrete passage and check whether the passage actually does that.',
        },
        {
          type: 'keyInsight',
          content: 'A structure or purpose answer has to fit the *whole* passage. A choice that perfectly describes one example or one sentence — but not the passage\'s overall move — is a detail wearing a structure costume.',
        },
        {
          type: 'trapCard',
          title: 'The one-detail description',
          wrong: 'You pick a choice that accurately names something in the passage — the bats-and-whales example, a single method — and treat it as the structure or purpose.',
          correction: 'Ask whether the choice covers the passage from start to finish. An example is a supporting move, not the overall shape. The right answer traces the arc through every part.',
        },
        {
          type: 'trapCard',
          title: 'The invented move',
          wrong: 'You pick a choice that describes a structure the passage never uses — "compares two competing theories," "criticizes a method" — when only one view appears and no method is questioned.',
          correction: 'Check the choice against what is literally on the page. If it claims the passage stages a debate, there must be two sides. If it says the passage criticizes a method, a method must actually be attacked. No evidence, no match.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'For decades, geologists assumed the canyon had been carved slowly by a single ancient river. Then a 2019 survey found layered gravel deposits high on the canyon walls — the signature of sudden, catastrophic floods. The team concluded that much of the canyon\'s depth was cut not by patient erosion but by a handful of violent flood events.\n\nWhich choice best describes the overall structure of the text?',
          steps: [
            {
              label: 'Sketch the beats',
              content: 'Old belief (slow river) -> new evidence (gravel high on walls) -> revised conclusion (sudden floods did the cutting).',
            },
            {
              label: 'Screen the traps',
              content: 'A choice about "the layered gravel deposits" alone is one detail. A choice saying the passage "compares two research teams" invents a debate that is not there.',
            },
            {
              label: 'Answer',
              content: 'The right answer says roughly: *the text presents a long-held belief, introduces evidence against it, and states a revised conclusion.* That traces all three beats in order.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'An underlined sentence sits between a claim and a counterexample, and it begins with "Yet." What is its most likely function?',
          answer: 'To signal a turn — introducing a qualification or objection to the claim just made. **Why:** "Yet" marks a shift, and function is defined by how the sentence connects what comes before and after.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A choice says the passage "weighs the strengths and weaknesses of two methods," but only one method is described. Keep it?',
          answer: 'Cut it. **Why:** it is an invented move — a structure the passage never uses. A "weighs two methods" answer needs two methods actually on the page.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'For a "main purpose" question, why is a vivid example in the passage rarely the right answer?',
          answer: 'Because an example supports the purpose; it is not the purpose itself. **Why:** purpose must describe what the whole passage works toward, and one example only covers part of it.',
        },
      ],
    },
  },

  {
    id: 'rw-cross-text-connections',
    unitId: 'rw-craft-structure',
    title: 'Cross-Text Connections',
    blurb: 'Read two short paired passages and predict how one author would respond to the other.',
    readMinutes: 8,
    cbSkills: ['cross-text-connections'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'You get two short passages, Text 1 and Text 2, on the same subject. The stem asks *"Based on the texts, how would [the author of Text 2] most likely respond to the claim presented in Text 1?"* Expect roughly 2 per test — and they tend to be among the hardest R&W questions. The work is figuring out the *relationship* between two viewpoints.',
        },
        {
          type: 'text',
          content: 'Pin down each author\'s claim separately, in one sentence each. Then find **exactly where they agree and where they disagree** — the two texts rarely disagree about everything. The right answer usually grants what Text 2 accepts and pushes back only on the specific point they differ over. **The response has to sound like something the second author would truly say**, based only on their own text.',
        },
        {
          type: 'text',
          content: 'The two texts usually stand in one of a few relationships, and naming it early narrows the answer fast. Sometimes Text 2 **agrees with a caveat** — accepts the main point but adds a limit or condition. Sometimes it **directly disagrees**, denying the central claim. Sometimes it is **complementary**, adding a piece Text 1 left out without conflict. And sometimes Text 2 **tests or explains** what Text 1 only asserted. Read the question stem carefully too — *"how would the author of Text 2 respond"* wants Text 2\'s reaction to Text 1, not the other way around. Mixing up which author is answering is a quiet way to pick a choice that describes the wrong person\'s view.',
        },
        {
          type: 'keyInsight',
          content: 'Most cross-text pairs share some common ground. The correct answer respects that: it does not have Text 2\'s author deny a fact they actually accept, and it does not push them to an extreme their text never reaches.',
        },
        {
          type: 'trapCard',
          title: 'Denying the shared ground',
          wrong: 'You pick a response that has Text 2\'s author reject a point they actually grant — arguing against a fact both texts accept.',
          correction: 'Separate agreement from disagreement first. If Text 2 accepts that a technique works but doubts it scales, the response should target the scaling, not deny that it works. Do not put words in the author\'s mouth that their own text contradicts.',
        },
        {
          type: 'trapCard',
          title: 'The pushed-too-far extreme',
          wrong: 'You pick a response that takes Text 2\'s view and cranks it to an absolute — "abandon the approach entirely," "no case is ever valid" — beyond what the author actually argues.',
          correction: 'Match the intensity of the author\'s real position. A moderate skeptic would not suddenly demand total rejection. The right answer keeps Text 2\'s author exactly as strong as their own text shows them to be.',
        },
        {
          type: 'example',
          difficulty: 'Hard',
          problem: 'Text 1: Educator Marcus Bell argues that letting students use calculators from an early age frees them to focus on reasoning rather than arithmetic, deepening their understanding of math.\n\nText 2: Researcher Dana Osei agrees that reasoning matters most, but her studies find that students who never practice mental arithmetic struggle to estimate whether a calculator\'s output is even reasonable — and so miss errors they should catch.\n\nBased on the texts, how would Osei most likely respond to Bell\'s claim?',
          steps: [
            {
              label: 'Find the shared ground',
              content: 'Both agree reasoning is the goal. Osei does not dispute that.',
            },
            {
              label: 'Find the disagreement',
              content: 'Osei adds a condition: without mental-arithmetic practice, students cannot judge whether an answer is reasonable, so early calculator reliance can undercut the very reasoning Bell wants.',
            },
            {
              label: 'Answer',
              content: 'The right response: *Osei would agree reasoning is central but caution that skipping mental arithmetic leaves students unable to catch calculator errors.* A choice that has her reject the value of reasoning denies shared ground; a choice that has her ban calculators entirely pushes her too far.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Text 2\'s author accepts that a restoration method produces healthy transplants but doubts it can work at large scale. A choice says she would "deny that the transplants survive." Valid?',
          answer: 'No. **Why:** she explicitly grants that the transplants survive; the response denies shared ground. Her real objection is about scale.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Why is the first step to state each author\'s claim in your own words before looking at the choices?',
          answer: 'Because the choices are built to blur the two views together. **Why:** knowing each claim cleanly lets you spot which choice respects the real agreement and disagreement.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A moderate skeptic in Text 2 is matched to a choice demanding "the practice be abandoned completely." What is the flaw?',
          answer: 'It pushes the author to an extreme her text never reaches. **Why:** the response must match the intensity of her actual position, and a moderate skeptic does not call for total rejection.',
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Expression of Ideas  (rw-expression-ideas)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-transitions',
    unitId: 'rw-expression-ideas',
    title: 'Transitions',
    blurb: 'Choose the linking word that matches the real logical relationship between two sentences.',
    readMinutes: 7,
    cbSkills: ['transitions'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'The stem reads *"Which choice completes the text with the most logical transition?"* A blank sits between two sentences, and the choices are linking words — *however*, *therefore*, *for example*, *in addition*, *today*, *previously*. Expect roughly 6 per test. The answer depends only on the relationship between the two sentences, not on which word "sounds" smoothest.',
        },
        {
          type: 'text',
          content: 'Cover the choices and figure out the relationship yourself. **Read sentence 1, read sentence 2, and name the connection** in plain words: *does 2 agree with 1, contradict it, result from it, give an example of it, or mark a time shift?* Then match. The transition families: **contrast** (however, but, nevertheless), **result** (therefore, thus, as a result), **addition** (also, in addition, moreover), **example** (for example, for instance), and **time** (previously, today, later).',
        },
        {
          type: 'diagramRef',
          visualType: 'transitionMapDiagram',
          description: 'The five transition families and their signal words — name the relationship, then pick from its family.',
        },
        {
          type: 'text',
          content: 'Keep the scope tight: a transition links the sentence right before the blank to the sentence right after it — not the whole paragraph. Read just those two, decide the relationship in a word or two, then plug in your predicted family and confirm it reads smoothly. If two choices come from the same family (say, *however* and *nevertheless* are both contrast words), they are almost always both wrong, because the SAT will not give you two right answers — the correct choice comes from the family the other three do not. That two-same-means-both-out check quietly eliminates half the options on many transition questions.',
        },
        {
          type: 'keyInsight',
          content: 'Look for a clash between the two sentences before you choose. A past date in one and a present-tense verb in the next signals a *time* transition (Today). A result in the second signals *therefore*. Name the relationship, then let it pick the word.',
        },
        {
          type: 'trapCard',
          title: 'The "just adds on" default',
          wrong: 'When unsure, you reach for "In addition" or "Furthermore" because they fit almost anywhere and feel safe.',
          correction: 'Addition words only work when sentence 2 piles on a similar point. If the sentences actually contrast, or if one causes the other, "In addition" hides the real relationship. Name the connection first — do not default to addition.',
        },
        {
          type: 'trapCard',
          title: 'The false cause',
          wrong: 'You pick "Therefore" because the sentences are next to each other, even though the second is not actually a result of the first.',
          correction: '"Therefore" and "thus" require that sentence 2 follows *because of* sentence 1. If the second sentence just states another fact or a contrast, cause words are wrong. Check that a real cause-and-effect exists.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'In the 1960s, most weather forecasts relied on human analysts sketching pressure maps by hand from scattered station reports. ______ nearly every national forecast is generated by supercomputers running physics-based models that ingest millions of observations an hour.\n\nWhich choice completes the text with the most logical transition?\n(A) In addition,  (B) Therefore,  (C) Today,  (D) For example,',
          steps: [
            {
              label: 'Name the relationship',
              content: 'Sentence 1 is set "In the 1960s" — the past. Sentence 2 uses "is generated" — the present. The blank marks a jump from back then to now.',
            },
            {
              label: 'Screen the families',
              content: '"In addition" just adds on and misses the time shift. "Therefore" claims sentence 2 results from sentence 1, which it does not. "For example" would need sentence 2 to illustrate sentence 1.',
            },
            {
              label: 'Answer',
              content: '(C) Today. It marks the shift from the past practice to the present one, matching the time clash between the sentences.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Sentence 1: "The bridge was expected to take five years." Sentence 2: "___ it was finished in under three." Which family does the transition come from?',
          answer: 'Contrast (however, but, yet). **Why:** the outcome defies the expectation, so the link must signal a reversal, not addition or result.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Why is "In addition" a risky default choice?',
          answer: 'Because it fits loosely almost anywhere and can mask a contrast or a cause. **Why:** it only truly works when the second sentence adds a similar point; naming the real relationship first prevents the error.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'When is "Therefore" the correct transition?',
          answer: 'When sentence 2 happens *because of* sentence 1 — a genuine result. **Why:** cause words require real cause-and-effect; without it, they misstate the relationship.',
        },
      ],
    },
  },

  {
    id: 'rw-rhetorical-synthesis',
    unitId: 'rw-expression-ideas',
    title: 'Rhetorical Synthesis',
    blurb: 'Use a set of bulleted notes to accomplish one specific goal stated in the question.',
    readMinutes: 8,
    cbSkills: ['rhetorical-synthesis'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'You get a short list of research notes as bullet points, then a sentence describing a goal, then: *"Which choice most effectively uses relevant information from the notes to accomplish this goal?"* Expect roughly 4 per test. The goal line is everything — it tells you exactly what the right answer must do, and each wrong answer fails the goal in a specific way.',
        },
        {
          type: 'text',
          content: '**Read the goal line first and turn it into a checklist.** If the goal is to *introduce the topic to an unfamiliar reader*, the answer must explain the basics without assuming prior knowledge. If the goal is to *emphasize a similarity between two studies*, the answer must name the shared point. If the goal is to *correct a misconception*, the answer must state the wrong belief and then set it straight. Then check each choice against the checklist — the one that hits every item wins.',
        },
        {
          type: 'text',
          content: 'The goal line hides a command verb, and that verb is your instruction. *Introduce* means explain the basics for a newcomer. *Emphasize* means put the spotlight on one specific point. *Compare* or *contrast* means put two things side by side. *Explain* or *illustrate* means show how or give an example. Circle that verb, then read every choice asking only, *"does this do that?"* You can skim the bullet notes quickly, because you are not asked to summarize them — you are asked to pick the notes that serve the goal. A choice can be perfectly accurate and still fail because it does a different job than the one the verb named.',
        },
        {
          type: 'keyInsight',
          content: 'The choices are usually all true and all drawn from the notes. Truth is not the test — *fit to the goal* is. Score each choice only on whether it does the exact job the goal line asks for.',
        },
        {
          type: 'trapCard',
          title: 'True, drawn from notes, wrong goal',
          wrong: 'You pick a choice because every fact in it appears in the notes and nothing is false. It reads accurate and relevant.',
          correction: 'Accuracy is not enough — the goal is the target. If the goal is to state a shared argument but the choice only gives one author\'s background, it fails the goal even though every word is true. Re-read the goal and confirm the choice actually does it.',
        },
        {
          type: 'trapCard',
          title: 'The half-goal',
          wrong: 'The goal has two requirements — name the old belief AND the new discovery — but you pick a choice that satisfies only one of them.',
          correction: 'Break a two-part goal into both parts and require the answer to meet both. A choice that states the old view but stops before the discovery, or names the discovery without the belief it replaced, completes only half the goal.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Notes:\n- Lichens were long thought to be a partnership between one fungus and one alga.\n- In 2016, biologist Toby Spribille found a second, previously overlooked fungus (a yeast) living in many lichens.\n- The discovery revised the basic model of what a lichen is.\n\nGoal: Show how a recent finding changed scientists\' understanding of lichens.\n\nWhich choice most effectively uses the notes to accomplish this goal?',
          steps: [
            {
              label: 'Turn the goal into a checklist',
              content: 'To show how a finding *changed* understanding, the answer needs (1) the old view AND (2) the new discovery that revised it.',
            },
            {
              label: 'Screen the traps',
              content: 'A choice giving only Spribille\'s background is true but off-goal. A choice stating only the old one-fungus-one-alga model is a half-goal — it stops before the discovery.',
            },
            {
              label: 'Answer',
              content: 'The right choice says roughly: *Lichens were long thought to pair one fungus with one alga, but Spribille\'s 2016 discovery of a second fungus revised that basic model.* It names both the old belief and the finding that changed it.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Every answer choice contains only facts that appear in the notes, and none is false. How do you still eliminate three of them?',
          answer: 'By checking each against the goal line. **Why:** the choices are all true by design; only one actually performs the specific task the goal describes.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'The goal is to introduce a topic to a reader who knows nothing about it. A choice states a sharp conclusion but assumes background knowledge. Fit or not?',
          answer: 'Not a fit. **Why:** an introduction has to explain the basics for an unfamiliar reader; assuming prior knowledge fails that goal even if the conclusion is correct.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A goal asks the answer to "correct a misconception." What two things must the right choice include?',
          answer: 'The wrong belief AND the correction that sets it straight. **Why:** correcting a misconception is a two-part job; a choice that only describes methods or states a fact without naming and fixing the belief is incomplete.',
        },
      ],
    },
  },

  // ══════════════════════════════════════════════════════════════════════
  // UNIT: Standard English Conventions  (rw-conventions)
  // ══════════════════════════════════════════════════════════════════════

  {
    id: 'rw-boundaries',
    unitId: 'rw-conventions',
    title: 'Boundaries (Punctuation)',
    blurb: 'Choose the punctuation that correctly joins or separates the parts of a sentence.',
    readMinutes: 9,
    cbSkills: ['boundaries'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'The stem is always *"Which choice completes the text so that it conforms to the conventions of Standard English?"* and the four choices differ only in punctuation — a comma, a semicolon, a colon, a dash, or nothing. Expect roughly 6 per test. Every one of these is decided by a small set of rules, so once you know the rules, you do not need an "ear" — you can prove the answer.',
        },
        {
          type: 'text',
          content: 'The master move: **cover the blank and check each side. Can each side stand alone as a complete sentence?** That one test drives almost every answer. A complete sentence has a subject and its own verb and expresses a finished thought. Once you know which sides are complete, the rule picks itself.',
        },
        {
          type: 'text',
          content: '**Two complete sentences** need strong punctuation: a period, a semicolon, or a comma *plus* a joining word (and, but, or, so). Right: *The lab ran overnight; the results came by morning.* Wrong (comma splice): *The lab ran overnight, the results came by morning.* **A dependent opener** (a part beginning with although, because, when, since, if) followed by a complete sentence takes a comma at the seam. Right: *Although the data was noisy, the trend was clear.*',
        },
        {
          type: 'diagramRef',
          visualType: 'sentenceBoundaryDiagram',
          description: 'Two independent clauses join with a period, semicolon, or comma + FANBOYS; a comma alone is a comma splice.',
        },
        {
          type: 'text',
          content: '**A colon** works only after a complete sentence, and it introduces a list or an explanation. Right: *She had one goal: finish the map.* **A pair of dashes or commas** sets off extra information you could lift out. Right: *The bridge — built in 1932 — still carries traffic.* If a dash opens the aside, a dash must close it; do not mix a dash with a comma. **Use semicolons inside a list** only when the list items already contain their own commas.',
        },
        {
          type: 'text',
          content: 'One more distinction sorts most comma questions: is the extra information *essential* or *removable*? A removable aside — one you could lift out and still have a complete, clear sentence — gets commas (or dashes) around it: *My sister, who lives in Denver, is visiting.* An essential phrase that the sentence needs to point to the right thing gets **no** commas: *The runner who finished first set a record* needs "who finished first" to say which runner, so no commas. Test it by covering the phrase: if the sentence still makes sense and still means the same thing, wrap it in commas; if removing it breaks the meaning, leave the commas out.',
        },
        {
          type: 'keyInsight',
          content: 'Decide the completeness of each side first, then apply the rule. A comma alone can never hold two complete sentences together — that single fact eliminates a wrong choice on most Boundaries questions.',
        },
        {
          type: 'trapCard',
          title: 'The comma splice',
          wrong: 'Both sides of the blank are complete sentences, and you pick the bare comma because it reads with a natural pause: *The telescope was old, it still worked.*',
          correction: 'Two complete sentences cannot be joined by a comma alone. Upgrade to a period, a semicolon, or a comma with a joining word: *The telescope was old, but it still worked.* When each side can stand on its own, a lone comma is always wrong.',
        },
        {
          type: 'trapCard',
          title: 'The half-open aside',
          wrong: 'The sentence sets off extra information with a dash on one end and a comma on the other, and it looks balanced enough to pass.',
          correction: 'A parenthetical aside must be closed with the same mark that opened it — dash with dash, comma with comma. Find the opening mark first, then match it. *The author, a former pilot, wrote about flight* uses commas on both ends.',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'Although the recipe called for saffron, a spice that was far too costly for most medieval households ______ cooks often substituted marigold petals to get a similar golden color.\n\nWhich choice conforms to the conventions of Standard English?\n(A) households, cooks  (B) households cooks  (C) households; cooks  (D) households: cooks',
          steps: [
            {
              label: 'Check each side',
              content: 'Before the blank: "Although the recipe called for saffron, a spice that was far too costly for most medieval households" — this opens with "Although," so it is incomplete. After: "cooks often substituted marigold petals..." is a complete sentence.',
            },
            {
              label: 'Apply the rule',
              content: 'A dependent opener (Although...) followed by a complete sentence takes a comma at the seam. A semicolon (C) needs two complete sides; a colon (D) needs a complete sentence before it; no punctuation (B) jams them together.',
            },
            {
              label: 'Answer',
              content: '(A) households, cooks. The comma marks the seam between the incomplete opener and the complete main sentence.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'Both sides of a blank are complete sentences. Which are valid: a period, a semicolon, a comma alone, or a comma with "and"?',
          answer: 'A period, a semicolon, or a comma with "and" — all valid. The comma alone is not. **Why:** two complete sentences need strong punctuation; a bare comma creates a splice.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A sentence reads: "The museum has one rule ___ no flash photography." The part before is a complete sentence and a specification follows. What punctuation fits?',
          answer: 'A colon. **Why:** a colon follows a complete sentence and introduces an explanation or list — here, the rule itself.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'When do you use semicolons *between items in a list*?',
          answer: 'Only when the items themselves already contain commas. **Why:** the semicolons then show where each item ends; if the items have no internal commas, plain commas are correct.',
        },
      ],
    },
  },

  {
    id: 'rw-form-structure-and-sense',
    unitId: 'rw-conventions',
    title: 'Form, Structure & Sense',
    blurb: 'Fix verbs, subject-verb agreement, pronouns, modifiers, and parallel form so the sentence reads correctly.',
    readMinutes: 9,
    cbSkills: ['form-structure-and-sense'],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'Same stem as Boundaries — *"Which choice completes the text so that it conforms to the conventions of Standard English?"* — but here the choices change the *words*, not the punctuation: verb forms, verb tenses, pronouns, or the order of a describing phrase. Expect roughly 6 per test. Each one tests one rule; find which rule is in play, then apply it.',
        },
        {
          type: 'text',
          content: '**Subject-verb agreement:** find the one word the verb is really about and ignore everything wedged between them. Right: *The box of old letters was heavy* (the subject is "box," singular — not "letters"). Phrases like *along with*, *as well as*, and *together with* do **not** change the subject\'s number. Words like *each*, *every*, *one of*, and *neither* are singular.',
        },
        {
          type: 'diagramRef',
          visualType: 'subjectVerbAgreementDiagram',
          description: 'Match the verb to the real subject ("box"), not the decoy phrase wedged in between.',
        },
        {
          type: 'text',
          content: '**Verb tense:** a specific past date wants simple past. Right: *In 1957 she observed the reaction* (not "has observed"). When one past action happens *before* another past action, the earlier one takes *had* + verb. Right: *By the time the crew arrived, the fire had spread.* **Match the other verbs in the passage** — if they are all plain past, yours should be too. **Pronouns** must point clearly to one noun and agree with it: right, *the committee published its report* (a committee is one thing, so "its," not "their").',
        },
        {
          type: 'text',
          content: '**Modifiers:** a sentence that opens with a describing phrase must be followed immediately by the person or thing it describes. Right: *Studying the reef for decades, Dr. Cho noticed a shift* (Dr. Cho did the studying). Wrong: *Studying the reef for decades, a shift became clear* (a shift did not study anything). **Parallel form:** items joined by *and* must share the same form. Right: *by interviewing families, reviewing records, and visiting the site.*',
        },
        {
          type: 'text',
          content: 'When a question gives you four forms of the same verb, it is testing exactly one thing — so figure out which. If the choices differ by *time* (walks / walked / had walked / has walked), it is a **tense** question: hunt for a date or a "by the time" cue. If they differ by *number* (is / are, was / were), it is an **agreement** question: find the real subject and ignore the words between. If they differ by *-ing / to / plain form* inside a list, it is a **parallelism** question: match the form of the other items. Naming the test first tells you which rule to run, instead of picking whatever "sounds okay."',
        },
        {
          type: 'keyInsight',
          content: 'Strip the sentence to its bones — real subject, real verb, thing being described — and the noise the question buried between them disappears. Most wrong choices survive only if you let an in-between phrase distract you.',
        },
        {
          type: 'trapCard',
          title: 'The decoy noun before the verb',
          wrong: 'A plural noun sits right before the verb, so you match the verb to it: *The collection of rare coins were auctioned.*',
          correction: 'Trace back to the real subject and ignore the words between. The subject is "collection" (singular), so the verb is "was": *The collection of rare coins was auctioned.* The noun nearest the verb is often a decoy.',
        },
        {
          type: 'trapCard',
          title: 'The dangling modifier',
          wrong: 'An opening describing phrase is followed by the wrong thing: *Written in a single night, critics praised the poem.* (The critics were not written in a night.)',
          correction: 'Whatever the opening phrase describes must come right after the comma. Fix it so the described thing leads: *Written in a single night, the poem drew praise from critics.*',
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'The archive of letters, along with several water-damaged notebooks recovered from the same trunk, ______ now the subject of a painstaking restoration led by conservators at the university.\n\nWhich choice conforms to the conventions of Standard English?\n(A) are  (B) were  (C) is  (D) have been',
          steps: [
            {
              label: 'Find the real subject',
              content: 'The verb is about "The archive" — singular. "Along with several water-damaged notebooks" is an add-on phrase that does not change the number.',
            },
            {
              label: 'Match number and tense',
              content: '"Along with" is a trap; ignore it. The subject "archive" is singular, and the sentence describes a present situation ("now the subject of..."), so the verb should be singular and present.',
            },
            {
              label: 'Answer',
              content: '(C) is. Singular subject "archive" plus present tense "now" gives "is." The plural verbs (A, D) agree with the decoy "notebooks," and (B) shifts to past.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'In "The stack of reports ___ due tomorrow," is the verb singular or plural, and why?',
          answer: 'Singular ("is"). **Why:** the subject is "stack," not "reports" — the words between the subject and verb do not change its number.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'A sentence says "By the time the vote was held, the senator ___ already resigned." Which verb form fits?',
          answer: '"had" + verb — "had already resigned." **Why:** the resignation came before another past event (the vote), so the earlier action takes the "had" form.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'What is wrong with "Racing to finish, the deadline loomed over the team"?',
          answer: 'It is a dangling modifier — the deadline was not racing. **Why:** the opening phrase "Racing to finish" must be followed by the ones doing the racing (the team), e.g., "Racing to finish, the team felt the deadline loom."',
        },
      ],
    },
  },
];

export default rwChapters;
