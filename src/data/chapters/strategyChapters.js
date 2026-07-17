/**
 * Learn tab — Digital SAT strategy chapters.
 *
 * Three chapters that open the textbook: how the test is built, how to attack
 * it on test day, and how to read the test writers' playbook. `unitId` values
 * match index.js UNIT_REGISTRY (section 'strategy'): 'strategy-foundations' |
 * 'strategy-tactics'.
 *
 * VOICE v3 (adopted 2026-07-17, exemplar: bodies/centralIdeas.js): scannable
 * instructional register — direct address, contractions, 1-3 sentence text
 * blocks, list blocks for criteria, steps blocks for procedures; no analogies,
 * no pep-talk, no emojis. All substance of the v2 textbook version preserved.
 *
 * Pure data — no app imports. Block field shapes mirror src/data/contentTabs/
 * (heading / text / list / steps / keyInsight / trapCard / strategyCard /
 * example / checkpointQuestion / table / comparison / tip / diagramRef).
 * Content strings support **bold**, *accent*, and inline math $...$ via
 * renderRichText.
 *
 * Facts about test format, the adaptive module system, and Desmos plays are
 * drawn from the app's own strategy corpus (functions/src/index.ts,
 * src/services/aiCoachModes.js, src/data/satStrategies.js); the test-writer
 * chapter is grounded in knowledge/graph nodes (test-writer-mental-model,
 * answer-the-asked-question, magnitude-sanity-checks, unit-magnitude-sanity-
 * check, desmos-decision-framework, section-economics-and-triage,
 * writing-module-economics, stem-family-recognition). Question and time counts
 * are the standard Digital SAT structure; where a count could vary, it is
 * hedged with "about" / "roughly". cbSkills is empty — these chapters are not
 * tied to a content skill.
 *
 * The SPR entry rules in the tactics chapter (fraction/decimal equivalence,
 * no mixed numbers, 5-character field / 6 with a negative sign, fill-the-field
 * for long or repeating decimals, no symbols, one answer when several are
 * correct) match current Bluebook behavior as of 2026-07.
 */

export const strategyChapters = [
  {
    id: 'strategy-how-the-test-works',
    unitId: 'strategy-foundations',
    title: 'How the Digital SAT Works',
    blurb: 'The two-section, four-module shape of the test, the adaptive engine that decides your second module, and how the 400 to 1600 score is built.',
    readMinutes: 5,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: "The Digital SAT runs on the **Bluebook app** and splits into two scored sections — **Reading and Writing** first, then **Math**. Each section comes in two timed halves called **modules**: four modules in all, one short break between the sections, a little over two hours end to end.",
        },
        {
          type: 'text',
          content: "That shape frames every strategic call you'll make — and everything after these strategy chapters, from reading and writing to math, builds on it.",
        },

        { type: 'heading', content: 'The clock in each section' },
        {
          type: 'list',
          items: [
            "**Reading and Writing:** 32 minutes for about 27 questions per module — about *1 minute 10 seconds* apiece. Every question brings its own short passage, so you're reading many brief texts at a steady pace.",
            "**Math:** 35 minutes for about 22 questions per module — roughly *1 minute 35 seconds* each, with the **built-in Desmos calculator** and a formula reference sheet on every single question.",
          ],
        },
        {
          type: 'text',
          content: "Math allots more time per question because its problems generally take more steps.",
        },

        { type: 'heading', content: 'The adaptive engine' },
        {
          type: 'text',
          content: "The design feature with the largest strategic consequence: the test is **adaptive by module**. Module 1 of each section is a fixed mix of easy, medium, and hard questions — and **how you do on Module 1 decides which Module 2 you get**.",
        },
        {
          type: 'list',
          items: [
            "Strong Module 1 accuracy routes you to the *harder, higher-ceiling* Module 2 — the one that can carry a section to a top score.",
            "Miss too many, and you're routed to the easier Module 2, where the score ceiling is capped no matter how many of its questions you answer correctly.",
          ],
        },
        {
          type: 'text',
          content: "So the first half of each section sets the scoring range available in the second half.",
        },
        {
          type: 'diagramRef',
          visualType: 'adaptiveModuleFlowDiagram',
          description: 'Your Module 1 accuracy routes you to a harder, higher-ceiling Module 2 or an easier, capped Module 2.',
        },

        { type: 'heading', content: 'The ground rules' },
        {
          type: 'list',
          items: [
            "Once a module is submitted — or its timer runs out — it's locked. There's no returning to it, and no returning to Reading and Writing once Math begins.",
            "*Within* a module, navigation is free: skip around, answer the easier questions first, flag the harder ones with Bluebook's flag tool, and come back with whatever time remains.",
            "The countdown stays on screen throughout, and Math keeps Desmos and the formula sheet one click away.",
          ],
        },
        {
          type: 'text',
          content: "What this design rewards isn't recall of obscure facts. It's steady accuracy on the questions already within your reach.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 carries more weight than its questions suggest. Every point there does double duty: it scores the question *and* helps unlock the high-ceiling Module 2. That makes a careless slip on an easy Module 1 question the most expensive mistake on the whole test — losing a genuinely hard question is affordable; giving away an easy one is not.",
        },

        { type: 'heading', content: 'How the score is built' },
        {
          type: 'text',
          content: "Scoring runs **400 to 1600**: each section scores **200 to 800**, and the two section scores simply add.",
        },
        {
          type: 'text',
          content: "One scoring rule settles guessing forever: **a wrong answer costs nothing**. A blank and a wrong answer both score zero, but a guess can score — so *never leave a question blank*.",
        },
        {
          type: 'text',
          content: "On a four-choice question, a blind guess carries a 1-in-4 chance at the point. A blank is a guaranteed zero.",
        },
        {
          type: 'diagramRef',
          visualType: 'scoreCompositionDiagram',
          description: 'The composite is just the two section scores added together: 200 to 800 each, 400 to 1600 total.',
        },

        { type: 'heading', content: 'Why the raw count is not the whole story' },
        {
          type: 'text',
          content: "The conversion from answers to a scaled score is **not a raw count**. The Digital SAT scores with a statistical model called **item response theory (IRT)**.",
        },
        {
          type: 'text',
          content: "Under IRT, every question carries measured properties — its *difficulty* and its *discrimination*, how sharply it separates stronger performers from weaker ones. The model estimates your ability from *which* questions you answered correctly, not just how many.",
        },
        {
          type: 'text',
          content: "Layered on top of that estimate is the module route: the easier Module 2 bounds the section's final range from above, while the harder one keeps the full ceiling in play.",
        },
        {
          type: 'text',
          content: "Together, those two mechanisms explain a result that surprises many students: two test-takers with the same number correct can land meaningfully different scores. They also give Module 1 accuracy standing in scoring terms, not just routing terms — the questions that unlock the harder Module 2 are the ones worth protecting most.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'Two students take the same test. Maya rushes the easy questions early in R&W Module 1, drops three of them to careless misreads, but nails most of the hard ones. Devon slows down on the early easy ones, gets them all, and misses a couple of the hardest. Both finish Module 1 with the same number correct. Who is set up better, and why?',
          steps: [
            {
              label: 'Look past the raw count',
              content: "The raw counts match, but the two tests diverge from here: the adaptive engine reads Module 1 accuracy to decide which Module 2 each student gets.",
            },
            {
              label: 'Weigh the careless misses',
              content: "Maya gave up three points she had the skill to earn, while Devon lost only questions at the edge of his ability. A careless miss is the one kind of miss that was preventable.",
            },
            {
              label: 'Answer',
              content: "Devon. He converts his ability into points and keeps the high-ceiling path open; Maya loses points her skill had already earned. On an adaptive test, protecting the easy and medium questions matters more than conquering the hardest ones.",
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'How many scored modules are on the Digital SAT, and how are they grouped?',
          answer: 'Four modules — two in Reading and Writing, then two in Math. **Why:** each section splits into Module 1 and Module 2, and Module 1 performance decides which Module 2 follows.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You finish a module with two minutes left and one question still blank. What do you do, and why?',
          answer: "Enter an answer — any answer — before time runs out. **Why:** there's no guessing penalty, so a blank scores exactly what a wrong guess scores, while the guess carries a real chance at the point.",
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why does missing an easy Module 1 question hurt more than missing a hard Module 2 question?',
          answer: 'Because Module 1 accuracy helps decide whether the high-ceiling Module 2 is unlocked. **Why:** an easy miss costs the point *and* can lower the ceiling of the entire section — a double loss.',
        },
      ],
    },
  },

  {
    id: 'strategy-test-day-tactics',
    unitId: 'strategy-tactics',
    title: 'Pacing & Test-Day Tactics',
    blurb: "A per-module pacing plan, mark-and-move and elimination, Bluebook's on-screen tools, the highest-value Desmos techniques, the student-produced response entry rules, and how to prepare the night before.",
    readMinutes: 7,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: "The four-module structure fixes the budget: each module runs on its own timer, locks when that timer expires, and — through Module 1 accuracy — decides which second module you get. What's left is spending that budget well.",
        },
        {
          type: 'text',
          content: "Effective pacing treats the per-question average as a budget to redistribute, not a rate to hold.",
        },
        {
          type: 'list',
          title: 'How the budget splits by section:',
          items: [
            "**Reading and Writing:** about *1 minute 10 seconds* per question on average — but the questions don't cost equal amounts. Grammar (conventions) questions resolve quickly once you spot the rule, so finish them in **under 40 seconds** and carry the surplus forward to the inference and synthesis questions that demand sustained reading.",
            "**Math:** about *1 minute 35 seconds* per question on average. The early questions in each module are the quickest — move through them briskly so the multi-step problems at the back get the minutes they genuinely require.",
          ],
        },
        {
          type: 'diagramRef',
          visualType: 'moduleTimeBudgetDiagram',
          description: 'Each module is a fixed time budget: 32 minutes for 27 R&W questions, 35 minutes for 22 Math questions.',
        },

        { type: 'heading', content: 'Mark and move' },
        {
          type: 'text',
          content: "Bluebook lets you flag any question and come back to it, which supports a simple routine.",
        },
        {
          type: 'steps',
          items: [
            "**Give a question about 30 seconds.** If it hasn't yielded a path forward by then, stop working it.",
            "**Record your best guess and flag it.** If you never make it back, the guess still has a chance; a blank doesn't.",
            "**Sweep the whole module first.** One stubborn problem can quietly absorb the time of three answerable ones — and it pays exactly the same single point each of them does.",
            "**Come back to the flags with whatever time remains.** The sweep guarantees the sure points are banked before the hard ones get a second look.",
          ],
        },

        { type: 'heading', content: 'Eliminate before guessing' },
        {
          type: 'text',
          content: "When no choice stands out, work in reverse — cross off what *can't* be right.",
        },
        {
          type: 'list',
          title: 'First cuts:',
          items: [
            "In R&W: any choice that reverses the passage, overreaches with \"every\" or \"always,\" or repeats an exact passage word to appear familiar.",
            "In Math: any choice with the wrong sign or an impossible size.",
          ],
        },
        {
          type: 'text',
          content: "Narrowing four choices to two turns a blind guess into even odds — and the guess is always worth taking. **Never leave a blank.**",
        },

        { type: 'heading', content: "Bluebook's on-screen tools" },
        {
          type: 'text',
          content: "Bluebook backs these habits with on-screen tools. Using them keeps you from making the same decision twice.",
        },
        {
          type: 'list',
          items: [
            "The **annotate tool** highlights any stretch of passage text and can attach a note. Mark the claim the question hangs on, so a second read starts at the evidence instead of at the top of the passage.",
            "The **answer eliminator** (the small ABC toggle) crosses out choices directly on screen. A ruled-out choice stays visibly ruled out, so a later reread doesn't quietly reconsider what you've already rejected.",
            "The **mark-for-review flag** feeds the module's **review page** — a grid of every question showing which are answered, which are flagged, and which are blank. The end-of-module return trip becomes one click per flagged item instead of a scroll back through the whole module.",
          ],
        },

        { type: 'heading', content: 'The three big Desmos plays' },
        {
          type: 'text',
          content: "Math builds the **Desmos graphing calculator** into every question. Three uses return the most points for the least work.",
        },
        {
          type: 'list',
          items: [
            "**Systems of equations.** Enter both equations exactly as written and click the intersection — the coordinates are the solution, in about 15 seconds.",
            "**Quadratics.** Enter $y =$ the quadratic and click the curve. Desmos marks the vertex (for max/min questions) and the x-intercepts (for roots and zeros), so the answer appears directly on the graph.",
            "**Line or curve of best fit.** Build a table, enter $y_1 \\sim m x_1 + b$ with a tilde, and Desmos reports the slope and intercept.",
          ],
        },
        {
          type: 'trapCard',
          title: 'A silent Desmos error: wrong angle mode',
          wrong: "A student starts a trigonometry question without checking the calculator's angle mode. Desmos returns a clean, plausible-looking number that's simply wrong — no error message, no warning, nothing to signal the problem.",
          correction: "Before any trigonometry, open the wrench (settings) icon and confirm the angle mode matches the question — the test defaults to *degrees*, while the desktop Desmos many students practice on defaults to *radians*. A related habit: Desmos isn't always the faster route. On one-step arithmetic, mental math or paper beats the typing.",
        },
        {
          type: 'keyInsight',
          content: "Use Desmos where it pays: systems, solution-count and tangency conditions, regressions, statistics, and unwieldy numbers. Skip it where it doesn't: one-step arithmetic, where typing costs more than thinking. When the choice is unclear, solve by hand and spend five seconds confirming on the graph — cheap insurance.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'You are 25 minutes into a 32-minute R&W module with 9 questions left. Two of them are dense inference questions you keep re-reading; the rest are quick grammar and vocabulary items. How do you spend the last 7 minutes?',
          steps: [
            {
              label: 'Secure the fast points first',
              content: "Finish the seven quick grammar and vocabulary items at under 40 seconds each — under 5 minutes in total, and each one pays the same point a hard question does.",
            },
            {
              label: 'Give the remainder to the hard two',
              content: "With the sure points banked, spend the remaining time on the two inference questions. If one still won't resolve, eliminate down to two choices and guess.",
            },
            {
              label: 'Answer',
              content: "Fast points first, hard points last, and no blanks when time expires. Working the two hard questions first risks forfeiting five easier points — the worst available trade.",
            },
          ],
        },

        { type: 'heading', content: 'Entering student-produced responses' },
        {
          type: 'text',
          content: "About a quarter of the Math questions offer no answer choices at all: **student-produced response (SPR)** questions end in an empty entry field. The field has rules of its own — a correctly solved problem scores zero if the entry doesn't conform.",
        },
        {
          type: 'list',
          title: 'The field rules:',
          items: [
            "**Up to 5 characters**, or **6 for a negative answer** — the negative sign claims a character of its own. Negative answers are allowed.",
            "**No symbols.** No percent signs, no dollar signs, no commas, and no units of any kind.",
            "**One answer only.** When a question has more than one correct value, enter any single correct answer — never an attempt at listing several.",
          ],
        },
        {
          type: 'text',
          content: "Fractions and decimals are interchangeable. For an answer of $\\frac{5}{4}$, both **5/4** and **1.25** earn the point.",
        },
        {
          type: 'text',
          content: "The one forbidden form is the **mixed number**. The field has no way to read the space in $1\\frac{1}{4}$, so an entry of 1 1/4 is scored as the fraction $\\frac{11}{4}$ — a wrong answer manufactured from correct work. Convert every mixed number to an improper fraction or a decimal before entering.",
        },
        {
          type: 'text',
          content: "**A long or repeating decimal must fill the field**, truncated or rounded at the final digit that fits. For $\\frac{2}{3}$, the entries .6666 and .6667 both score; .66 and .67 don't — an entry is graded as exactly the number typed, and .66 is a different, less accurate number than $\\frac{2}{3}$.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'A student-produced response question has the answer $\\frac{2}{3}$. Which entries earn the point, and which near-misses score zero?',
          steps: [
            {
              label: 'Start with the fraction',
              content: "**2/3** fits inside the five-character field and is exact. A fraction that fits is always the safest entry — no truncating or rounding decision to make.",
            },
            {
              label: 'Fill the field with a decimal form',
              content: "As a decimal, $\\frac{2}{3} = 0.666...$ never terminates, so the entry must fill the field: **.6666** (truncated) and **.6667** (rounded) both score. With a leading zero the field fits one fewer decimal place, so **0.666** and **0.667** score as well.",
            },
            {
              label: 'Recognize the zero-point entries',
              content: "**.66**, **.67**, **0.66**, and **0.67** all fail — each stops before the field is full and is graded as exactly the number typed, not as an approximation of $\\frac{2}{3}$. The same logic rejects a mixed number anywhere on the section: 1 1/4 reads as $\\frac{11}{4}$, so the entry here would be a full-field decimal or the fraction itself.",
            },
          ],
        },

        { type: 'heading', content: 'The night before and the morning of' },
        {
          type: 'text',
          content: "New material studied the night before adds little. A light review of your own error checklist beats cramming.",
        },
        {
          type: 'list',
          title: 'Pack the night before:',
          items: [
            "Your admission ticket",
            "A photo ID",
            "A charged device — or your approved calculator",
            "A snack for the break",
          ],
        },
        {
          type: 'text',
          content: "Then protect your sleep. It's the highest-value preparation left.",
        },
        {
          type: 'text',
          content: "In the morning: eat a real breakfast, arrive early, and give the first few easy questions full attention. On an adaptive test, those are the points that matter most.",
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A grammar question and a hard inference question are worth the same points, but the grammar one is faster. How should that shape your pacing in R&W?',
          answer: 'Finish the fast grammar questions quickly — under 40 seconds each — and save the surplus for the slow inference questions. **Why:** every question pays the same point, so bank the quick ones and spend the extra minutes where the reading is genuinely demanding.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You are about to compute $\\sin$ of an angle in Desmos on the Math section. What do you check first?',
          answer: 'The angle mode — open the wrench icon and confirm it matches the question, usually degrees. **Why:** the wrong mode returns a wrong answer with no warning, and the test defaults differently from the desktop Desmos many students practice on.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A question has not clicked after 30 seconds. What is the mark-and-move play?',
          answer: 'Record your best guess, flag it, and move on; come back after sweeping the rest of the module. **Why:** one stalled question can drain the time of several answerable ones, and each pays the same single point.',
        },
        {
          type: 'checkpointQuestion',
          number: 4,
          question: 'Your work on an SPR question produces the mixed number $1\\frac{1}{4}$. What do you enter, and what would typing 1 1/4 cost you?',
          answer: "Enter 5/4 or 1.25 — either form scores. **Why:** the field can't read a mixed number, so 1 1/4 is graded as the fraction $\\frac{11}{4}$ — a wrong answer produced from correct work. Convert to an improper fraction or a decimal before entering.",
        },
      ],
    },
  },

  {
    id: 'strategy-test-writer',
    unitId: 'strategy-tactics',
    title: 'Think Like the Test Writer',
    blurb: 'How wrong answers are constructed — and the habits that counter them: read the choices to see what a grammar question tests, answer the question as asked, check answers for plausible size and units, use Desmos deliberately, and secure the fast points first.',
    readMinutes: 10,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: "Pacing plans, on-screen tools, and entry mechanics are execution habits — they protect the points already within your reach. The remaining edge comes from seeing how the questions themselves are built.",
        },
        {
          type: 'text',
          content: "Every multiple-choice question is written twice: someone writes the question, and someone builds three wrong answers designed to be chosen. Those wrong answers aren't arbitrary leftovers — they're constructed from the specific mistakes students actually make.",
        },
        {
          type: 'text',
          content: "That design cuts both ways. It punishes an unguarded solver, but a constructed wrong answer carries the marks of its construction — and once you can read those marks, the test gets a lot more predictable.",
        },
        {
          type: 'text',
          content: "The skill chapters that follow teach the content the test measures. What follows here is how the test frames it.",
        },

        { type: 'heading', content: 'How wrong answers are constructed' },
        {
          type: 'text',
          content: "In Reading and Writing, the credited answer has a recognizable house style — and the wrong answers tend to be louder.",
        },
        {
          type: 'list',
          title: 'The credited answer usually:',
          items: [
            "stays *cautious* in its claims",
            "stays *inside the passage*",
            "is a *re-wording* of the text, not a copy",
          ],
        },
        {
          type: 'list',
          title: 'The wrong answers tend to:',
          items: [
            "overreach with words like \"always\" and \"proves\"",
            "borrow the passage's exact words to feel familiar",
            "state something true about the world that the passage never actually establishes",
          ],
        },
        {
          type: 'text',
          content: "The task isn't to pick the answer you'd defend in conversation. It's to predict what the answer key credits.",
        },
        {
          type: 'strategyCard',
          title: 'The pointing test',
          content: "Before committing to an answer, find the exact words in the passage that prove it. For the credited answer, those words exist. An answer you can't tie to specific passage language hasn't been verified — it's just been preferred.",
        },
        {
          type: 'text',
          content: "One calibration: the house style is a tendency, not a law. On the hardest questions, the strongly worded choice is occasionally correct — fully supported, just bold — and those questions are built to catch students who reflexively cross off anything extreme.",
        },
        {
          type: 'text',
          content: "So rank the cautious, re-worded choices first, then let the passage cast the deciding vote.",
        },
        {
          type: 'text',
          content: "When you review a miss, resist arguing with the key. \"My answer was defensible\" teaches nothing; \"here's what I misread\" corrects the next ten questions.",
        },

        { type: 'heading', content: 'On grammar questions, the choices reveal the test' },
        {
          type: 'text',
          content: "Conventions questions all wear the same disguise. The stem is generic — *Which choice completes the text so that it conforms to the conventions of Standard English?* — and it reads identically whether the question tests a comma splice or subject-verb agreement.",
        },
        {
          type: 'text',
          content: "So the stem carries no information about what's on trial. The diagnosis lives in the **answer choices**: read all four and note what *changes* between them.",
        },
        {
          type: 'list',
          items: [
            "Words match and only the punctuation moves → the question is about joining or separating clauses. Find where one complete thought ends.",
            "Verb forms vary — *was* against *were*, *has* against *have* → the question tests agreement or tense. First job: locate the verb's true subject.",
          ],
        },
        {
          type: 'text',
          content: "Diffing the choices names the rule being tested before you've re-read a word of the passage.",
        },
        {
          type: 'text',
          content: "One elimination habit does more harm than good here: crossing off a choice because it's written in the **passive voice**. The SAT doesn't test a preference for active over passive — a passive construction is never wrong *on its own*, and the credited answer is sometimes passive.",
        },
        {
          type: 'text',
          content: "Wrong answers on conventions questions are wrong because they break a rule: a boundary error, a dangling modifier, a verb that disagrees with its subject. Eliminate for grammar, not for style.",
        },

        { type: 'heading', content: 'Answer the question that was asked' },
        {
          type: 'text',
          content: "The Math section's most common construction follows a single template. You solve the equation, get $x = 5$, and find 5 waiting among the choices — but the question asked for $x + 4$.",
        },
        {
          type: 'text',
          content: "Every multi-step problem has two finish lines: the algebra finish line ($x = 5$) and the question finish line (the answer, 9). Crossing the first produces the full sensation of being done — and the intermediate value sits among the choices precisely to confirm that sensation.",
        },
        {
          type: 'text',
          content: "This device converts correct mathematics into lost points more reliably than any other.",
        },
        {
          type: 'strategyCard',
          title: 'The last-sentence check',
          content: "Before you look at any answer choice, re-read the last sentence of the question — on every problem, not just when something feels wrong, because this trap operates precisely when nothing feels wrong. The logic also runs in reverse: on a multi-step problem, finding an intermediate value among the choices is a *warning* that the question was built around this trap, not confirmation that you're right.",
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If $2x - 3 = 7$, what is the value of $x + 4$?',
          steps: [
            {
              label: 'Solve — the algebra finish line',
              content: "Add 3, then divide by 2: $x = 5$. Notice that 5 appears among the answer choices.",
            },
            {
              label: 'Re-read the target',
              content: "The last sentence asks for $x + 4$, not $x$. The 5 among the choices is the constructed trap for anyone who stopped at the algebra finish line.",
            },
            {
              label: 'Cross the question finish line',
              content: "$x + 4 = 9$. Pick 9 — and note what this trap looks like in practice: your own intermediate value, sitting among the choices.",
            },
          ],
        },

        { type: 'heading', content: 'Sanity checks on size, sign, and units' },
        {
          type: 'text',
          content: "Every quantity in a problem has a constrained range of values it can legitimately take.",
        },
        {
          type: 'list',
          items: [
            "A probability can't exceed 1.",
            "Two people painting a room together finish faster than the faster painter alone.",
            "A length is never negative, and neither is a principal square root.",
            "A 15% tip on a $\\$40$ dinner is not $\\$60$.",
          ],
        },
        {
          type: 'text',
          content: "Test writers deliberately build wrong answers that violate these constraints, because a student grinding through the algebra head-down rarely pauses to notice.",
        },
        {
          type: 'text',
          content: "Run the check twice: scan the choices *before* solving — the constraints sometimes eliminate three of the four and end the question — and audit your own answer *after* for sign and size. The whole habit costs about two seconds.",
        },
        {
          type: 'text',
          content: "Unit conversions have their own filter: **a smaller unit produces a larger number.** Measure the same quantity in a smaller unit and the count goes up — a height in centimeters is a bigger number than the same height in feet.",
        },
        {
          type: 'text',
          content: "Commit to a direction before converting: the answer in minutes runs about 60 times the hours figure. If 3 hours somehow becomes 0.05 minutes, reviewing the arithmetic is pointless — the setup is inverted, and careful multiplication can't repair an inverted fraction.",
        },
        {
          type: 'table',
          headers: ['Filter', 'What it catches'],
          rows: [
            ['Range', 'A probability above 1, a percent of a whole above 100, a mean outside the min-to-max span'],
            ['Sign', 'Negative lengths, negative times, a negative principal square root'],
            ['Structure', 'A working-together time slower than the fastest solo worker; a hypotenuse that is not the longest side'],
            ['Size and direction', 'A tip bigger than the bill; a discount that raises the price; growth that shrinks'],
            ['Units', 'A conversion to a smaller unit that made the number smaller'],
          ],
        },
        {
          type: 'tip',
          content: "On student-produced response questions there are no answer choices to flag an error — the sanity check is your only safeguard. Confirm the sign and the size before you submit.",
        },

        { type: 'heading', content: 'Choosing when to use Desmos' },
        {
          type: 'text',
          content: "We covered *how* to run the big Desmos plays in the pacing chapter. The remaining question is *when* — the calculator is fastest on the right task and slower than hand work on the wrong one.",
        },
        {
          type: 'steps',
          title: 'Route every Math question through three quick tests',
          items: [
            "**Is the answer a picture fact?** An intersection, a vertex, a zero, a count of solutions — graph it.",
            "**Is the answer an exact form?** A radical, a fraction, an expression with $\\pi$ — keep Desmos closed. A pixel readout can't distinguish $\\sqrt{2}$ from $1.41$.",
            "**Is the hand work shaky?** Solve first, then spend five seconds graphing to verify.",
          ],
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Graph it',
              content: 'Intersections and systems with messy numbers; vertex, max, or min with awkward coefficients; "how many solutions?"; "which graph matches?"; regressions from a table.',
            },
            {
              label: 'Keep it closed',
              content: 'Choices in exact form ($\\sqrt{2}$, fractions, $\\pi$) that a decimal readout cannot distinguish; letters and parameters instead of numbers; one-step problems where typing costs more than thinking.',
            },
          ],
        },
        {
          type: 'trapCard',
          title: 'The default window can hide solutions',
          wrong: "A question asks how many solutions an equation has. You graph both sides, see one intersection in the default window, and answer \"one.\" The second intersection sat just off-screen the entire time.",
          correction: "Zoom out before counting — the default window shows only a small region of the plane. Cross-check the count against what the algebra allows (a line and a parabola can meet at most twice). And when the choices come in exact form, confirm by hand: a Desmos trace reads $1.414214$, and recognizing that value as $\\sqrt{2}$ takes the solver, not the calculator.",
        },

        { type: 'heading', content: 'Equal point values' },
        {
          type: 'text',
          content: "One economic fact organizes the entire test: a demanding three-minute question and a 25-second routine question pay exactly the same single point. Difficulty earns no premium.",
        },
        {
          type: 'text',
          content: "So treat each module as a budget — secure the inexpensive points first, then spend the surplus on the expensive ones.",
        },
        {
          type: 'text',
          content: "The rule holds in both sections, and most students run it backwards: they spend their best minutes on the hardest question on the page while easier points sit unclaimed behind it.",
        },
        {
          type: 'text',
          content: "Reading and Writing makes the ordering straightforward. Each module opens with vocabulary and closes with the notes-synthesis questions — the most mechanical, formula-driven points on the section, each earnable in under a minute.",
        },
        {
          type: 'text',
          content: "Running out of time forfeits exactly those points, so protect the end of the module.",
        },
        {
          type: 'text',
          content: "You can also estimate a question's cost from its stem alone. The phrasings come from a small, standardized set, so a find-the-evidence question that happens to be about biology reveals its procedure — and its time cost — before you've read a word of the passage.",
        },
        {
          type: 'text',
          content: "Sort your practice misses the same way — by question type, not by topic. \"I miss evidence questions\" supports a plan; \"I'm bad at science passages\" doesn't.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 is not a warm-up. On an adaptive test, a cold start is the most expensive way to begin — early careless misses can cap the ceiling of the whole section. So warm up *before* the test with a few familiar questions and begin at full speed. The flag deserves the same reframing: a flagged guess isn't surrender, it's a budgeting decision — using it is the system working as designed.",
        },

        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'You solve a problem and get $x = 3$ — and 3 is choice A. The question asks for the value of $2x + 1$. What is choice A doing there, and what do you answer?',
          answer: 'Choice A is the constructed trap — the intermediate value, placed to reward stopping early. **Why:** the problem ends at the question, not at $x$. Re-read the last sentence, convert, and answer $2(3) + 1 = 7$.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Your answer says two people working together take 8 hours — but the faster one alone takes 6. What does the sanity check say?',
          answer: 'Reject the answer before submitting it. **Why:** two people working together always finish faster than the faster worker alone, so a joint time above 6 hours is structurally impossible — the setup is inverted, not the arithmetic.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Desmos shows an intersection at $x = 1.414214$, and the choices include both $1.41$ and $\\sqrt{2}$. Which do you pick?',
          answer: '$\\sqrt{2}$. **Why:** a trace readout is an approximation — $1.414214$ is $\\sqrt{2}$ rounded, while exactly $1.41$ is a different, incorrect number. Exact-form choices are confirmed by hand, not by a decimal readout.',
        },
        {
          type: 'checkpointQuestion',
          number: 4,
          question: "You're down to two choices on a reading question: one is cautious and re-worded from the passage, the other is bold and repeats the passage's exact words. How do you decide?",
          answer: "Rank the cautious paraphrase first — that matches the answer key's house style — then verify it with the pointing test: find the passage words that prove it. **Why:** the style is a tendency, not a law; the passage, not an impression, casts the deciding vote.",
        },
      ],
    },
  },
];

export default strategyChapters;
