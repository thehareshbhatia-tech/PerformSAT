/**
 * Learn tab — Digital SAT strategy chapters.
 *
 * Three chapters that open the textbook: how the test is built, how to attack
 * it on test day, and how to read the test writers' playbook. `unitId` values
 * match index.js UNIT_REGISTRY (section 'strategy'): 'strategy-foundations' |
 * 'strategy-tactics'.
 *
 * VOICE (adopted 2026-07-15, exemplar: bodies/mLinearEquations.js):
 * professional textbook narrative — teaches directly in flowing prose in
 * the measured register of a well-edited textbook. Extended metaphors,
 * cute headings, and pep-talk are out. Headings name the concept.
 *
 * Pure data — no app imports. Block field shapes mirror src/data/contentTabs/
 * (text / keyInsight / trapCard / strategyCard / example / checkpointQuestion /
 * table / comparison / tip). Content strings support **bold**, *accent*, and
 * inline math $...$ via renderRichText.
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
          content: "The Digital SAT runs on the **Bluebook app** and consists of two scored sections — **Reading and Writing** first, then **Math** — each of which is split into two timed halves called **modules**. That makes four modules in total, separated by one short break between the sections, with a running time of a little over two hours end to end. This structure frames every strategic decision that follows.",
        },
        {
          type: 'text',
          content: "The timing differs by section. **Reading and Writing** allows 32 minutes for about 27 questions in each module — about *1 minute 10 seconds* apiece. Every R&W question brings its own short passage, so the section requires reading many brief texts at a steady pace. **Math** allows 35 minutes for about 22 questions in each module — roughly *1 minute 35 seconds* each — and provides the **built-in Desmos calculator** on every single question, along with a formula reference sheet. Math allots more time per question because its problems generally require more steps.",
        },
        {
          type: 'text',
          content: "The design feature with the largest strategic consequence is that the test is **adaptive by module**. Module 1 of each section is a fixed mix of easy, medium, and hard questions, and **performance on Module 1 determines which Module 2 follows**. Strong Module 1 accuracy routes you to the *harder, higher-ceiling* Module 2 — the one that can carry a section to a top score. Missing too many questions routes you to the easier Module 2, where the score ceiling is capped no matter how many of its questions you answer correctly. The first half of each section therefore sets the scoring range available in the second half.",
        },
        {
          type: 'diagramRef',
          visualType: 'adaptiveModuleFlowDiagram',
          description: 'Your Module 1 accuracy routes you to a harder, higher-ceiling Module 2 or an easier, capped Module 2.',
        },
        {
          type: 'text',
          content: "Several ground rules follow from this design. Once a module is submitted — or its timer runs out — it is locked; there is no returning to it, and no returning to Reading and Writing once Math begins. *Within* a module, however, navigation is free: skip around, answer the easier questions first, flag the harder ones with Bluebook's flag tool, and return to them with whatever time remains. The countdown stays on screen throughout, and Math keeps Desmos and the formula sheet one click away. What this design rewards is not recall of obscure facts but steady accuracy on the questions already within reach.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 carries more weight than its questions suggest. Every point there does double duty: it scores the question *and* helps unlock the high-ceiling Module 2. A careless slip on an easy Module 1 question is therefore the most expensive mistake on the whole test — losing a genuinely hard question is affordable; giving away an easy one is not.",
        },
        {
          type: 'text',
          content: "Scoring runs **400 to 1600**: each section scores **200 to 800**, and the two section scores simply add. One scoring rule settles guessing policy permanently: **a wrong answer costs nothing**. A blank and a wrong answer both score zero, but a guess can score, so the sound policy is absolute — *never leave a question blank*. On a four-choice question a blind guess carries a 1-in-4 chance of the point; a blank is a guaranteed zero.",
        },
        {
          type: 'diagramRef',
          visualType: 'scoreCompositionDiagram',
          description: 'The composite is just the two section scores added together: 200 to 800 each, 400 to 1600 total.',
        },
        {
          type: 'text',
          content: "The conversion from answers to a scaled score is **not a raw count**. The Digital SAT scores with a statistical model called **item response theory (IRT)**: every question carries measured properties — its *difficulty* and its *discrimination*, how sharply it separates stronger performers from weaker ones — and the model estimates ability from *which* questions were answered correctly, not merely how many. Layered on top of that estimate is the module route: the easier Module 2 bounds the section's final range from above, while the harder one keeps the full ceiling in play. Together these two mechanisms explain a result that surprises many students — two test-takers with the same number correct can land meaningfully different scores — and they give Module 1 accuracy its standing in scoring terms, not just routing terms: the questions that unlock the harder Module 2 are the ones worth protecting most.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'Two students take the same test. Maya rushes the easy questions early in R&W Module 1, drops three of them to careless misreads, but nails most of the hard ones. Devon slows down on the early easy ones, gets them all, and misses a couple of the hardest. Both finish Module 1 with the same number correct. Who is set up better, and why?',
          steps: [
            {
              label: 'Look past the raw count',
              content: "The raw counts match, but the two tests diverge from here: the adaptive engine reads Module 1 accuracy to decide which Module 2 each student receives.",
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
          answer: 'Four modules — two in Reading and Writing, then two in Math. **Why:** each section splits into Module 1 and Module 2, and Module 1 performance determines which Module 2 follows.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You finish a module with two minutes left and one question still blank. What do you do, and why?',
          answer: 'Enter an answer — any answer — before time runs out. **Why:** there is no guessing penalty, so a blank scores exactly what a wrong guess scores, while the guess carries a real chance at the point.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why does missing an easy Module 1 question hurt more than missing a hard Module 2 question?',
          answer: 'Because Module 1 accuracy helps determine whether the high-ceiling Module 2 is unlocked. **Why:** an easy miss costs the point *and* can lower the ceiling of the entire section — a double loss.',
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
          content: "Effective pacing treats the per-question average as a budget to redistribute, not a rate to hold. In **Reading and Writing** the average allowance is about *1 minute 10 seconds* per question, but the questions do not cost equal amounts. The grammar (conventions) questions resolve quickly once the rule is identified, so complete them in **under 40 seconds** and carry the surplus forward; that surplus is what funds the inference and synthesis questions that require sustained reading. In **Math** the average is about *1 minute 35 seconds*, and the early questions in each module are the quickest — move through them briskly so the multi-step problems at the back receive the minutes they genuinely require.",
        },
        {
          type: 'diagramRef',
          visualType: 'moduleTimeBudgetDiagram',
          description: 'Each module is a fixed time budget: 32 minutes for 27 R&W questions, 35 minutes for 22 Math questions.',
        },
        {
          type: 'text',
          content: "**Mark and move.** Bluebook allows any question to be flagged and revisited, which supports a simple rule: if a question has not yielded a path forward in about 30 seconds, record your best guess, flag it, and move on. A single stubborn problem can quietly absorb the time of three answerable ones while paying exactly the same single point each of them does. Sweep the whole module first; then spend whatever time remains on the flagged questions.",
        },
        {
          type: 'text',
          content: "**Eliminate before guessing.** When no choice stands out, work in reverse — cross off what *cannot* be right. In R&W, treat with suspicion any choice that reverses the passage, overreaches with \"every\" or \"always,\" or repeats an exact passage word to appear familiar. In Math, eliminate choices with the wrong sign or an impossible size. Narrowing four choices to two converts a blind guess into even odds — and the guess is always worth taking: **never leave a blank.**",
        },
        {
          type: 'text',
          content: "Bluebook backs these habits with on-screen tools, and using them keeps decisions from being made twice. The **annotate tool** highlights any stretch of passage text and can attach a note — mark the claim the question hangs on, so a second read starts at the evidence rather than at the top of the passage. The **answer eliminator** (the small ABC toggle) crosses out choices directly on screen: a ruled-out choice stays visibly ruled out, so a later reread does not quietly reconsider what has already been rejected. And the **mark-for-review flag** feeds the module's **review page** — a grid of every question showing which are answered, which are flagged, and which are blank — so the end-of-module return trip is one click per flagged item instead of a scroll back through the whole module.",
        },
        {
          type: 'text',
          content: "Math builds the **Desmos graphing calculator** into every question, and three uses return the most points for the least work. **Systems of equations:** enter both equations exactly as written and click the intersection — the coordinates are the solution, in about 15 seconds. **Quadratics:** enter $y =$ the quadratic and click the curve; Desmos marks the vertex (for max/min questions) and the x-intercepts (for roots and zeros), so the answer appears directly on the graph. **Line or curve of best fit:** build a table, enter $y_1 \\sim m x_1 + b$ with a tilde, and Desmos reports the slope and intercept.",
        },
        {
          type: 'trapCard',
          title: 'A silent Desmos error: wrong angle mode',
          wrong: "A student begins a trigonometry question without checking the calculator's angle mode. Desmos returns a clean, plausible-looking number that is simply wrong — no error message, no warning, nothing to signal the problem.",
          correction: "Before any trigonometry, open the wrench (settings) icon and confirm the angle mode matches the question — the test defaults to *degrees*, while the desktop Desmos many students practice on defaults to *radians*. A related habit: Desmos is not always the faster route. On one-step arithmetic, mental math or paper beats the typing.",
        },
        {
          type: 'keyInsight',
          content: "Use Desmos where it pays: systems, solution-count and tangency conditions, regressions, statistics, and unwieldy numbers. Skip it where it does not: one-step arithmetic, where typing costs more than thinking. When the choice is unclear, solve by hand and spend five seconds confirming on the graph — inexpensive insurance.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'You are 25 minutes into a 32-minute R&W module with 9 questions left. Two of them are dense inference questions you keep re-reading; the rest are quick grammar and vocabulary items. How do you spend the last 7 minutes?',
          steps: [
            {
              label: 'Secure the fast points first',
              content: "Complete the seven quick grammar and vocabulary items at under 40 seconds each — under 5 minutes in total, and each one pays the same point a hard question does.",
            },
            {
              label: 'Allocate the remainder to the hard two',
              content: "With the sure points secured, give the remaining time to the two inference questions. If one still does not resolve, eliminate down to two choices and guess.",
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
          content: "About a quarter of the Math questions offer no answer choices at all: **student-produced response (SPR)** questions end in an empty entry field, and the field has rules of its own — a correctly solved problem scores zero if the entry does not conform. The field holds **up to 5 characters**, or **6 for a negative answer**, because the negative sign claims a character of its own. Negative answers are allowed; symbols are not — **no percent signs, no dollar signs, no commas**, and no units of any kind. And when a question has more than one correct value, the field wants exactly one: **enter any single correct answer**, never an attempt at listing several.",
        },
        {
          type: 'text',
          content: "Fractions and decimals are interchangeable — for an answer of $\\frac{5}{4}$, both **5/4** and **1.25** earn the point. The one forbidden form is the **mixed number**: the field has no way to read the space in $1\\frac{1}{4}$, so an entry of 1 1/4 is scored as the fraction $\\frac{11}{4}$ — a wrong answer manufactured from correct work. Convert every mixed number to an improper fraction or a decimal before entering. Decimals that run past the field follow the last rule: **a long or repeating decimal must fill the field**, truncated or rounded at the final digit that fits. For $\\frac{2}{3}$, the entries .6666 and .6667 both score; .66 and .67 do not, because an entry is graded as exactly the number typed — and .66 is a different, less accurate number than $\\frac{2}{3}$.",
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

        {
          type: 'text',
          content: "**The night before and the morning of.** New material studied the night before adds little; a light review of your own error checklist is more useful than cramming. Pack the admission ticket, a photo ID, a charged device or your approved calculator, and a snack for the break, then protect your sleep — it is the highest-value preparation remaining. In the morning, eat a real breakfast, arrive early, and give the first few easy questions full attention: on an adaptive test, those are the points that matter most.",
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A grammar question and a hard inference question are worth the same points, but the grammar one is faster. How should that shape your pacing in R&W?',
          answer: 'Complete the fast grammar questions quickly — under 40 seconds each — to save time for the slow inference questions. **Why:** every question pays the same point, so secure the quick ones and spend the surplus where the reading is genuinely demanding.',
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
          answer: 'Record your best guess, flag it, and move on; return after sweeping the rest of the module. **Why:** one stalled question can drain the time of several answerable ones, and each pays the same single point.',
        },
        {
          type: 'checkpointQuestion',
          number: 4,
          question: 'Your work on an SPR question produces the mixed number $1\\frac{1}{4}$. What do you enter, and what would typing 1 1/4 cost you?',
          answer: 'Enter 5/4 or 1.25 — either form scores. **Why:** the field cannot read a mixed number, so 1 1/4 is graded as the fraction $\\frac{11}{4}$ — a wrong answer produced from correct work. Convert to an improper fraction or a decimal before entering.',
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
          content: "Every multiple-choice question is written twice: someone writes the question, and someone builds three wrong answers designed to be chosen. Those wrong answers are not arbitrary leftovers; they are constructed from the specific mistakes students actually make. That design cuts both ways — it punishes an unguarded solver, but a constructed wrong answer carries the marks of its construction, and once those marks are legible, the test becomes considerably more predictable.",
        },

        { type: 'heading', content: 'How wrong answers are constructed' },
        {
          type: 'text',
          content: "In Reading and Writing, the credited answer has a recognizable house style: it is *cautious*, it stays *inside the passage*, and it is usually a *re-wording* of the text rather than a copy. The wrong answers tend to be louder — they overreach with words like \"always\" and \"proves,\" they borrow the passage's exact words to feel familiar, or they state something true about the world that the passage never actually establishes. The task is not to select the answer you would defend in conversation; it is to predict what the answer key credits.",
        },
        {
          type: 'strategyCard',
          title: 'The pointing test',
          content: "Before committing to an answer, identify the exact words in the passage that serve as proof. For the credited answer, those words exist. An answer that cannot be tied to specific passage language has not been verified — it has merely been preferred.",
        },
        {
          type: 'text',
          content: "One qualification: the house style is a tendency, not a law. On the hardest questions, the strongly worded choice is occasionally correct — fully supported, simply bold — and such questions are built precisely to catch students who reflexively eliminate anything extreme. Rank the cautious, re-worded choices first, then let the passage cast the deciding vote. When reviewing a miss, resist the urge to argue with the key: \"my answer was defensible\" teaches nothing, while \"here is what I misread\" corrects the next ten questions.",
        },

        { type: 'heading', content: 'On grammar questions, the choices reveal the test' },
        {
          type: 'text',
          content: "Conventions questions all wear the same disguise. The stem is generic — *Which choice completes the text so that it conforms to the conventions of Standard English?* — and it reads identically whether the question tests a comma splice or subject-verb agreement, so the stem carries no information about what is on trial. The diagnosis lives in the **answer choices**: read all four and note what *changes* between them. If the words match and only the punctuation moves, the question is about joining or separating clauses — find where one complete thought ends. If verb forms vary — *was* against *were*, *has* against *have* — the question is testing agreement or tense, and the first job is locating the verb's true subject. Diffing the choices names the rule being tested before a word of the passage has been re-read.",
        },
        {
          type: 'text',
          content: "One elimination habit does more harm than good here: crossing off a choice because it is written in the **passive voice**. The SAT does not test a preference for active over passive — a passive construction is never wrong *on its own*, and the credited answer is sometimes passive. Wrong answers on conventions questions are wrong because they break a rule: a boundary error, a dangling modifier, a verb that disagrees with its subject. Eliminate for grammar, not for style.",
        },

        { type: 'heading', content: 'Answer the question that was asked' },
        {
          type: 'text',
          content: "The Math section's most common construction follows a single template. A student solves the equation, obtains $x = 5$, and finds 5 waiting among the choices — but the question asked for $x + 4$. Every multi-step problem has two finish lines: the algebra finish line ($x = 5$) and the question finish line (the answer, 9). Crossing the first produces the full sensation of being done, and the intermediate value is placed among the choices precisely to confirm that sensation. This device converts correct mathematics into lost points more reliably than any other.",
        },
        {
          type: 'strategyCard',
          title: 'The last-sentence check',
          content: "Before examining any answer choice, re-read the last sentence of the question — on every problem, not only when something feels wrong, because this trap operates precisely when nothing feels wrong. The logic also runs in reverse: on a multi-step problem, finding an intermediate value among the choices is a *warning* that the question was built around this trap, not a confirmation of being right.",
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If $2x - 3 = 7$, what is the value of $x + 4$?',
          steps: [
            {
              label: 'Solve — the algebra finish line',
              content: "Add 3, then divide by 2: $x = 5$. Note that 5 appears among the answer choices.",
            },
            {
              label: 'Re-read the target',
              content: "The last sentence asks for $x + 4$, not $x$. The 5 among the choices is the constructed trap for anyone who stopped at the algebra finish line.",
            },
            {
              label: 'Cross the question finish line',
              content: "$x + 4 = 9$. Select 9 — and note what this trap looks like in practice: the solver's own intermediate value, present among the choices.",
            },
          ],
        },

        { type: 'heading', content: 'Sanity checks on size, sign, and units' },
        {
          type: 'text',
          content: "Every quantity in a problem has a constrained range of values it can legitimately take. A probability cannot exceed 1. Two people painting a room together finish faster than the faster painter alone. A length is never negative, and neither is a principal square root. A 15% tip on a $\\$40$ dinner is not $\\$60$. Test writers deliberately build wrong answers that violate these constraints, because a student working through the algebra head-down rarely pauses to notice. Run the check twice: scan the choices *before* solving — the constraints sometimes eliminate three of the four and end the question — and audit your own answer *after*: correct sign, plausible size. The whole habit costs about two seconds.",
        },
        {
          type: 'text',
          content: "Unit conversions have their own filter: **a smaller unit produces a larger number.** Measuring the same quantity in a smaller unit increases the count — a height in centimeters is a larger number than the same height in feet. Commit to a direction before converting: the answer in minutes runs about 60 times the hours figure. If 3 hours somehow becomes 0.05 minutes, reviewing the arithmetic is pointless — the setup is inverted, and careful multiplication cannot repair an inverted fraction.",
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
          content: "On student-produced response questions there are no answer choices to flag an error — the sanity check is the only safeguard available. Confirm the sign and the size before submitting.",
        },

        { type: 'heading', content: 'Choosing when to use Desmos' },
        {
          type: 'text',
          content: "The pacing chapter covered *how* to run the major Desmos techniques; the remaining question is *when*. The calculator is fastest on the right task and slower than hand work on the wrong one, so route every Math question through three quick tests. If the answer is a *picture fact* — an intersection, a vertex, a zero, a count of solutions — graph it. If the answer is an *exact form* — a radical, a fraction, an expression involving $\\pi$ — keep Desmos closed, because a pixel readout cannot distinguish $\\sqrt{2}$ from $1.41$. If the hand work feels uncertain, solve first, then spend five seconds graphing to verify.",
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
          correction: "Zoom out before counting — the default window shows only a small region of the plane. Cross-check the count against what the algebra allows (a line and a parabola can meet at most twice). When the choices come in exact form, confirm by hand: a Desmos trace reads $1.414214$, and recognizing that value as $\\sqrt{2}$ requires the solver, not the calculator.",
        },

        { type: 'heading', content: 'Equal point values' },
        {
          type: 'text',
          content: "One economic fact organizes the entire test: a demanding three-minute question and a 25-second routine question pay exactly the same single point. Difficulty earns no premium. The efficient approach treats each module as a budget — secure the inexpensive points first, then spend the surplus on the expensive ones. The rule holds in both sections, and most students run it backwards, spending their best minutes on the hardest question on the page while easier points sit unclaimed behind it.",
        },
        {
          type: 'text',
          content: "Reading and Writing makes this ordering straightforward: each module opens with vocabulary and closes with the notes-synthesis questions — the most mechanical, formula-driven points on the section, each earnable in under a minute. Running out of time forfeits exactly those points, so protect the end of the module. The cost of a question can also be estimated from its stem alone: the phrasings come from a small, standardized set, so a find-the-evidence question that happens to be about biology reveals its procedure — and its time cost — before a word of the passage is read. Sort practice misses the same way, by question type rather than by topic: \"I miss evidence questions\" supports a plan; \"I am bad at science passages\" does not.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 is not a warm-up. On an adaptive test a cold start is the most expensive way to begin, because early careless misses can cap the ceiling of the whole section — so warm up *before* the test with a few familiar questions and begin at full speed. The flag deserves the same reframing: a flagged guess is not surrender but a budgeting decision, and using it is the system working as designed.",
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
