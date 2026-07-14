/**
 * Learn tab — Digital SAT strategy chapters.
 *
 * Three chapters that open the textbook: how the test is built, how to attack
 * it on test day, and how to read the test writers' playbook. `unitId` values
 * match index.js UNIT_REGISTRY (section 'strategy'): 'strategy-foundations' |
 * 'strategy-tactics'.
 *
 * TUTOR VOICE (adopted 2026-07-14, matches bodies/mLinearEquations.js): coaching
 * direct-address — talks TO the student, everyday anchor first and rule second,
 * anticipates the specific mistake before it happens, memorable decision rules.
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
          content: "Before you fight a test, get a map of it. The Digital SAT runs on the **Bluebook app** and has two scored sections — **Reading and Writing** first, then **Math** — each split into two timed halves called **modules**. Four modules total, one short break between the sections, a little over two hours end to end. That's the whole terrain.",
        },
        {
          type: 'text',
          content: "Now the clock. **Reading and Writing** gives you 32 minutes for about 27 questions in each module — call it *1 minute 10 seconds* apiece. Every R&W question brings its own short passage, so you're reading a lot of tiny texts, fast. **Math** gives you 35 minutes for about 22 questions in each module — roughly *1 minute 35 seconds* each — and hands you the **built-in Desmos calculator** on every single question, plus a formula reference sheet. Math pays you more time per question because it expects more steps in return.",
        },
        {
          type: 'text',
          content: "Here's the fact that changes how you play: the test is **adaptive by module**. Module 1 of each section is a fixed mix of easy, medium, and hard questions — and **how you do on Module 1 decides which Module 2 you get**. Do well and you unlock the *harder, higher-ceiling* Module 2, the one that can carry you to a top score. Miss too many and you're routed to the easier Module 2, where the score ceiling is capped no matter how much of it you ace. The test sizes you up in the first half and sets your price range for the second.",
        },
        {
          type: 'diagramRef',
          visualType: 'adaptiveModuleFlowDiagram',
          description: 'Your Module 1 accuracy routes you to a harder, higher-ceiling Module 2 or an easier, capped Module 2.',
        },
        {
          type: 'text',
          content: "A few ground rules fall out of that design. Once a module is submitted — or its timer runs out — it's locked; there's no going back, and no returning to Reading and Writing once Math starts. *Within* a module, though, you're free: skip around, answer the easy ones first, flag the hard ones with Bluebook's flag tool, and come back with whatever time is left. The countdown stays on screen the whole way, and Math keeps Desmos and the formula sheet one click away. Notice what this design rewards — not obscure memorized facts, just steady accuracy on the questions you can already do.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 is worth more than it looks. Every point there does double duty: it scores the question *and* helps unlock the high-ceiling Module 2. That makes a careless slip on an easy Module 1 question the most expensive mistake on the whole test — you can afford to lose a genuinely hard question; you can't afford to donate an easy one.",
        },
        {
          type: 'text',
          content: "Scoring runs **400 to 1600**: each section scores **200 to 800**, and the two just add. And here's the rule that settles your guessing policy forever: **a wrong answer costs nothing**. A blank and a wrong answer both score zero, but a guess can score. So the commitment is absolute — *never leave a question blank*. On a four-choice question a blind guess is a free 1-in-4 shot; a blank is a guaranteed zero.",
        },
        {
          type: 'diagramRef',
          visualType: 'scoreCompositionDiagram',
          description: 'The composite is just the two section scores added together: 200 to 800 each, 400 to 1600 total.',
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'Two students take the same test. Maya rushes the easy questions early in R&W Module 1, drops three of them to careless misreads, but nails most of the hard ones. Devon slows down on the early easy ones, gets them all, and misses a couple of the hardest. Both finish Module 1 with the same number correct. Who is set up better, and why?',
          steps: [
            {
              label: 'Look past the raw count',
              content: "Same number right, but not the same test from here on — the adaptive engine reads Module 1 accuracy to decide which Module 2 each student unlocks.",
            },
            {
              label: 'Price the careless misses',
              content: "Maya donated three points she had the skill to earn. Devon lost only the questions at the edge of his ability. A careless miss is the one kind of miss you could have prevented.",
            },
            {
              label: 'Answer',
              content: "Devon. He converts his ability into points and keeps the high-ceiling path open; Maya leaks points she already owns. On an adaptive test, protecting the easy and medium questions is the whole game.",
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'How many scored modules are on the Digital SAT, and how are they grouped?',
          answer: 'Four modules — two in Reading and Writing, then two in Math. **Why:** each section splits into Module 1 and Module 2, and your Module 1 performance routes which Module 2 you get.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You finish a module with two minutes left and one question still blank. What do you do, and why?',
          answer: 'Put an answer down — any answer — before time runs out. **Why:** there is no guessing penalty, so a blank scores exactly what a wrong guess scores, while the guess has a real shot at the point.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why does missing an easy Module 1 question hurt more than missing a hard Module 2 question?',
          answer: 'Because Module 1 accuracy helps decide whether you unlock the high-ceiling Module 2. **Why:** an easy miss costs the point *and* can lower the ceiling you are allowed to reach — a double loss.',
        },
      ],
    },
  },

  {
    id: 'strategy-test-day-tactics',
    unitId: 'strategy-tactics',
    title: 'Pacing & Test-Day Tactics',
    blurb: 'A per-module pacing plan, mark-and-move and elimination, the smartest Desmos plays, and how to set yourself up the night before.',
    readMinutes: 5,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: "Treat the clock like money, not like a stopwatch. In **Reading and Writing** the average allowance is about *1 minute 10 seconds* per question — but averages are for spreadsheets. The grammar (conventions) questions resolve fast once you spot the rule, so take them in **under 40 seconds** and bank the change. That banked time is what funds the inference and synthesis questions that take real reading. In **Math** you average about *1 minute 35 seconds*, and the early questions in each module are the quickest — move briskly through them so the multi-step problems at the back get the minutes they actually cost.",
        },
        {
          type: 'diagramRef',
          visualType: 'moduleTimeBudgetDiagram',
          description: 'Each module is a fixed time budget: 32 minutes for 27 R&W questions, 35 minutes for 22 Math questions.',
        },
        {
          type: 'text',
          content: "**Mark and move.** Bluebook lets you flag any question and return to it, so here's the rule: if a question hasn't clicked in about 30 seconds, put down your best guess, flag it, and go. One stubborn problem can quietly eat the time of three answerable ones — and it pays exactly the same single point each of them does. Sweep the whole module first; then spend whatever's left on the flags.",
        },
        {
          type: 'text',
          content: "**Eliminate before you guess.** When nothing jumps out, work backwards — cross off what *can't* be right. In R&W, be suspicious of a choice that reverses the passage, overreaches with \"every\" or \"always,\" or parrots an exact passage word to look familiar. In Math, kill choices with the wrong sign or an impossible size. Getting from four choices down to two turns a blind guess into a coin flip — and yes, you always take the flip: **never leave a blank.**",
        },
        {
          type: 'text',
          content: "Math builds the **Desmos graphing calculator** into every question, and three plays buy the most points for the least work. **Systems of equations:** type both equations exactly as written and click the intersection — the coordinates are your solution, about 15 seconds flat. **Quadratics:** type $y =$ the quadratic and click the curve; Desmos marks the vertex (for max/min questions) and the x-intercepts (for roots and zeros), so the answer is sitting right on the graph. **Line or curve of best fit:** build a table, type $y_1 \\sim m x_1 + b$ with a tilde, and Desmos hands you the slope and intercept.",
        },
        {
          type: 'trapCard',
          title: 'The silent Desmos mistake: wrong angle mode',
          wrong: "You dive into a trig question and start typing, never noticing the calculator's angle mode. Desmos returns a clean, confident-looking number that is simply wrong — no error, no warning, nothing to catch.",
          correction: "Before any trigonometry, open the wrench (settings) icon and confirm the angle mode matches the question — the test defaults to *degrees*, while the desktop Desmos you may have practiced on defaults to *radians*. One more habit: Desmos isn't always the fast lane. On one-step arithmetic, your head or paper beats the typing.",
        },
        {
          type: 'keyInsight',
          content: "Use Desmos where it pays: systems, solution-count and tangency conditions, regressions, statistics, and messy numbers. Skip it where it doesn't: one-step arithmetic, where typing costs more than thinking. When you're torn, solve by hand and spend five seconds confirming on the graph — cheap insurance.",
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'You are 25 minutes into a 32-minute R&W module with 9 questions left. Two of them are dense inference questions you keep re-reading; the rest are quick grammar and vocabulary items. How do you spend the last 7 minutes?',
          steps: [
            {
              label: 'Bank the fast points first',
              content: "Knock out the seven quick grammar and vocabulary items at under 40 seconds each — that's under 5 minutes, and each one pays the same point a hard question does.",
            },
            {
              label: 'Then fund the hard two',
              content: "With the sure points banked, give the remaining time to the two inference questions. If one still refuses to resolve, eliminate down to two choices and take the coin flip.",
            },
            {
              label: 'Answer',
              content: "Fast points first, hard points last, no blanks at the buzzer. Grinding the two hard ones first risks leaving five easy points on the table — the worst trade on the menu.",
            },
          ],
        },
        {
          type: 'text',
          content: "**The night before and the morning of.** Skip the cramming — a light pass over your own trap checklist beats any new material the night before. Pack the admission ticket, a photo ID, a charged device or your approved calculator, and a snack for the break. Then protect your sleep; it's the highest-value prep left. In the morning: eat something real, arrive early, and treat the first few easy questions like the points that matter most — because on an adaptive test, they are.",
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A grammar question and a hard inference question are worth the same points, but the grammar one is faster. How should that shape your pacing in R&W?',
          answer: 'Take the fast grammar questions quickly — aim under 40 seconds — to bank time for the slow inference questions. **Why:** every question pays the same point, so you secure the quick ones and spend the surplus where the reading is genuinely hard.',
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
          answer: 'Put down your best guess, flag it, and move on; come back after sweeping the rest of the module. **Why:** one stuck question can drain the time of several answerable ones, and each pays the same single point.',
        },
      ],
    },
  },

  {
    id: 'strategy-test-writer',
    unitId: 'strategy-tactics',
    title: 'Think Like the Test Writer',
    blurb: 'How the wrong answers are manufactured — and the habits that beat them: answer the asked question, sanity-check size and units, route Desmos deliberately, and bank the cheap points first.',
    readMinutes: 9,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: "Every question you'll face was written twice. Someone wrote the question — and then someone built three wrong answers designed to get picked. Those wrong answers aren't leftovers; they're manufactured from the specific mistakes students actually make. That's bad news if you play naive, and great news if you don't: a manufactured trap has manufacturing marks, and once you can read them, the test gets a lot more predictable.",
        },

        { type: 'heading', content: 'Wrong answers have a recipe' },
        {
          type: 'text',
          content: "Start with Reading and Writing. The credited answer there has a house style you can learn to recognize: it's *cautious*, it stays *inside the passage*, and it's usually a *re-wording* of the text rather than a copy. The wrong answers tend to be louder — they overreach with words like \"always\" and \"proves,\" they borrow the passage's exact words to feel familiar, or they say something true about the world that the passage never actually establishes. Your job isn't to pick the answer you'd argue for at dinner; it's to predict what the answer key credits.",
        },
        {
          type: 'strategyCard',
          title: 'The pointing test',
          content: "Before you commit to an answer, ask: which exact words in the passage could I point to as proof? For the credited answer, those words exist. If you can't imagine doing the pointing, you haven't verified — you've just liked the choice.",
        },
        {
          type: 'text',
          content: "One warning about the house style: it's a lean, not a law. On the hardest questions, the strongly-worded choice is occasionally the right one — fully supported, just bold — built precisely to catch students who auto-kill anything extreme. So rank the cautious, re-worded choices first, then let the passage cast the deciding vote. And when you review a miss, resist the urge to argue with the key. \"My answer was defensible\" teaches you nothing; \"here's what I misread\" fixes the next ten questions.",
        },

        { type: 'heading', content: 'Answer the question that was asked' },
        {
          type: 'text',
          content: "Now the Math section's favorite manufacturing trick. You solve the equation, get $x = 5$, glance at the choices — and there's 5, sitting in choice B like a reward. Except the question asked for $x + 4$. Every multi-step problem has two finish lines: the algebra finish line ($x = 5$) and the question finish line (\"so the answer is 9\"). Crossing the first one produces the full feeling of being done — and the test plants your halfway number in the choices to confirm that feeling. It's the most reliable way the test converts correct math into lost points.",
        },
        {
          type: 'strategyCard',
          title: 'The last-sentence ritual',
          content: "Before you touch an answer choice, re-read the last sentence of the question — every time, not just when something feels off. The trap works precisely because nothing feels off. And flip the logic around: on a multi-step problem, finding your intermediate value among the choices is a *warning* the question was built around this trap, not a confirmation you're right.",
        },
        {
          type: 'example',
          difficulty: 'Medium',
          problem: 'If $2x - 3 = 7$, what is the value of $x + 4$?',
          steps: [
            {
              label: 'Solve — first finish line',
              content: "Add 3, divide by 2: $x = 5$. And sure enough, 5 is one of the answer choices, waiting.",
            },
            {
              label: 'Re-read the target',
              content: "The last sentence asks for $x + 4$, not $x$. That 5 in the choices is the manufactured trap for everyone who stopped at the algebra finish line.",
            },
            {
              label: 'Cross the second finish line',
              content: "$x + 4 = 9$. Pick 9 — and file away what this trap looks like from the inside: your own halfway number, smiling at you from the choices.",
            },
          ],
        },

        { type: 'heading', content: 'The two-second sanity check' },
        {
          type: 'text',
          content: "Every quantity on the test wears a straitjacket — a range of values it's even allowed to take. A probability can't exceed 1. Two people painting a room together finish faster than the faster painter alone. A length is never negative, and neither is a principal square root. A 15% tip on a $\\$40$ dinner is not $\\$60$. The test writers build wrong answers that violate these constraints on purpose, because a student grinding through algebra head-down never looks up to notice. Run the check twice: scan the choices *before* solving (sometimes the straitjacket kills three of the four and the question is over), and audit your own answer *after* — right sign? possible size? Two seconds, every time.",
        },
        {
          type: 'text',
          content: "Unit conversions get their own filter: **smaller ruler, bigger count.** Measure the same thing in a smaller unit and the number gets bigger — your height in centimeters is a bigger number than in feet. So commit to a direction before you convert: \"the answer in minutes runs about 60 times the hours number.\" If 3 hours somehow becomes 0.05 minutes, skip the arithmetic review — the setup is upside down, and no amount of careful multiplying fixes an inverted fraction.",
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
          content: "On student-produced response questions there are no answer choices to warn you — the sanity check is the only safety net you get. Sign, size, straitjacket, submit.",
        },

        { type: 'heading', content: 'Desmos: right tool or trap?' },
        {
          type: 'text',
          content: "The pacing chapter covered *how* to run the big Desmos plays. Here's the *whether* — because the calculator is a power tool: fastest on the right job, slower than your own hands on the wrong one. Route every Math question with three quick questions. Is the answer a *picture fact* — an intersection, a vertex, a zero, a count of solutions? Graph it. Is the answer an *exact form* — a radical, a fraction, something with $\\pi$? Keep Desmos closed; a pixel readout can't tell $\\sqrt{2}$ from $1.41$. Unsure of your hand work? Solve first, then spend five seconds graphing to verify.",
        },
        {
          type: 'comparison',
          items: [
            {
              label: 'Graph it',
              content: 'Intersections and systems with messy numbers; vertex, max, or min with hostile coefficients; "how many solutions?"; "which graph matches?"; regressions from a table.',
            },
            {
              label: 'Keep it closed',
              content: 'Choices in exact form ($\\sqrt{2}$, fractions, $\\pi$) that a decimal readout cannot distinguish; letters and parameters instead of numbers; one-step problems where typing costs more than thinking.',
            },
          ],
        },
        {
          type: 'trapCard',
          title: 'The window is not the whole graph',
          wrong: "A question asks how many solutions an equation has. You graph both sides, see one intersection in the default window, and answer \"one.\" The second intersection was sitting just off-screen the whole time.",
          correction: "Zoom out before you count — the default window is a porthole, not the ocean. Cross-check the count against what the algebra allows (a line and a parabola can meet at most twice). And when the choices come in exact form, confirm by hand: Desmos traces read $1.414214$, and only you can recognize that as $\\sqrt{2}$.",
        },

        { type: 'heading', content: 'Every question pays the same' },
        {
          type: 'text',
          content: "Here's the economic fact that organizes the whole test: a brutal three-minute question and a 25-second gimme pay out exactly the same single point. The test doesn't tip for effort. So play it like a budget, not a gauntlet — bank the cheap points first, then spend the surplus on the expensive ones. That rule holds in both sections, and most students run it backwards: they burn their best minutes proving they can crack the hardest question on the page while easy points sit unclaimed behind it.",
        },
        {
          type: 'text',
          content: "Reading and Writing even hands you a map: each module opens with vocabulary and closes with the notes-synthesis questions — the most mechanical, formula-driven points on the section, each earnable in under a minute. Run out of clock and those are exactly the points you forfeit. Protect the tail. And learn to price a question from its stem alone: the phrasings come from a small, standardized set, so \"a find-the-evidence question that happens to be about biology\" tells you the procedure — and the price — before you've read a word of the passage. Sort your practice misses the same way, by question job rather than by topic: \"I miss evidence questions\" is a plan; \"I'm bad at science passages\" is a shrug.",
        },
        {
          type: 'keyInsight',
          content: "Module 1 is not your warm-up. On an adaptive test a cold start is the most expensive way to begin, because early careless misses can cap the ceiling of your whole section — so warm up *before* the test with a few questions you own, and walk in at full speed. And reframe the flag while you're at it: a flagged guess isn't giving up, it's a budgeting decision. That's the whole system working as designed.",
        },

        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'You solve a problem and get $x = 3$ — and 3 is choice A. The question asks for the value of $2x + 1$. What is choice A doing there, and what do you answer?',
          answer: 'Choice A is the manufactured trap — your halfway number, planted to reward stopping early. **Why:** the solve ends at the question, not at $x$. Re-read the last sentence, convert, and answer $2(3) + 1 = 7$.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'Your answer says two people working together take 8 hours — but the faster one alone takes 6. What does the sanity check say?',
          answer: 'Reject it before you submit it. **Why:** working together always beats the faster worker alone, so a joint time above 6 hours is structurally impossible — the setup is inverted, not the arithmetic.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Desmos shows an intersection at $x = 1.414214$, and the choices include both $1.41$ and $\\sqrt{2}$. Which do you pick?',
          answer: '$\\sqrt{2}$. **Why:** a trace readout is an approximation — $1.414214$ is $\\sqrt{2}$ rounded, while exactly $1.41$ is a different, wrong number. Exact-form choices get confirmed by hand, not by pixels.',
        },
        {
          type: 'checkpointQuestion',
          number: 4,
          question: "You're down to two choices on a reading question: one is cautious and re-worded from the passage, the other is bold and repeats the passage's exact words. How do you decide?",
          answer: "Rank the cautious paraphrase first — that's the answer key's house style — then verify it with the pointing test: find the passage words that prove it. **Why:** the style is a lean, not a law; the passage, not the vibe, casts the deciding vote.",
        },
      ],
    },
  },
];

export default strategyChapters;
