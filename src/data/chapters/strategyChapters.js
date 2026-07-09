/**
 * Learn tab — Digital SAT strategy chapters.
 *
 * Two chapters that open the textbook: how the test is built, and how to
 * attack it on test day. `unitId` values match index.js UNIT_REGISTRY
 * (section 'strategy'): 'strategy-foundations' | 'strategy-tactics'.
 *
 * Pure data — no app imports. Block field shapes mirror src/data/contentTabs/
 * (text / keyInsight / trapCard / example / checkpointQuestion). Content
 * strings support **bold**, *accent*, and inline math $...$ via renderRichText.
 *
 * Facts about test format, the adaptive module system, and Desmos plays are
 * drawn from the app's own strategy corpus (functions/src/index.ts,
 * src/services/aiCoachModes.js, src/data/satStrategies.js) and rewritten in
 * student voice. Question and time counts are the standard Digital SAT
 * structure; where a count could vary, it is hedged with "about" / "roughly".
 * cbSkills is empty — these chapters are not tied to a content skill.
 */

export const strategyChapters = [
  {
    id: 'strategy-how-the-test-works',
    unitId: 'strategy-foundations',
    title: 'How the Digital SAT Works',
    blurb: 'The two-section, four-module shape of the test, the adaptive engine that decides your second module, and how the 400 to 1600 score is built.',
    readMinutes: 8,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'The Digital SAT is taken on the **Bluebook app**, and it has two scored sections: **Reading and Writing** first, then **Math**. Each section is split into two parts called **modules**, so you take four modules in all, with a short break between the two sections. The whole thing runs a little over two hours.',
        },
        {
          type: 'text',
          content: 'Here is the shape and the clock. **Reading and Writing** has about 27 questions per module and gives you 32 minutes each — that is roughly *1 minute 10 seconds* per question. Every R&W question is its own short passage, so you read a lot of tiny texts fast. **Math** has about 22 questions per module and gives you 35 minutes each — roughly *1 minute 35 seconds* per question. Math lets you use the **built-in Desmos calculator** on every question and gives you a formula reference sheet.',
        },
        {
          type: 'text',
          content: 'The most important thing to understand is that the test is **adaptive by module**. Module 1 of each section is a fixed mix of easy, medium, and hard questions. **How you do on Module 1 decides which Module 2 you get.** Score well on Module 1 and you unlock the *harder, higher-ceiling* Module 2 — the one whose questions are worth more and can carry you to a top score. Miss too many on Module 1 and you get the easier Module 2, whose score ceiling is capped lower no matter how many you get right.',
        },
        {
          type: 'diagramRef',
          visualType: 'adaptiveModuleFlowDiagram',
          description: 'Your Module 1 accuracy routes you to a harder, higher-ceiling Module 2 or an easier, capped Module 2.',
        },
        {
          type: 'text',
          content: 'A few practical things follow from the digital, adaptive design. You cannot go back to a module once you submit it or once its timer runs out — so within a module, flag and revisit freely, but there is no returning to Reading and Writing after you start Math. Within a module you *can* move around: answer the easy ones first, flag the hard ones, and come back with whatever time is left. The on-screen countdown and a flag tool are built into Bluebook, and Math carries the Desmos calculator and a formula sheet on every question. None of this rewards memorizing obscure facts; it rewards steady accuracy on the questions you can already do.',
        },
        {
          type: 'keyInsight',
          content: 'Module 1 is worth more than it looks. Every point there does double duty: it earns the question *and* helps unlock the high-ceiling Module 2. That is why a careless mistake on an easy Module 1 question is the most expensive kind of error on the whole test.',
        },
        {
          type: 'text',
          content: 'Scoring runs from **400 to 1600**. Each section is scored **200 to 800**, and the two add up to your composite. There is **no penalty for a wrong answer** — a blank and a wrong answer both score zero, but a guess has a chance of being right. That single rule drives one hard commitment: *never leave a question blank.* Even a random guess on a four-choice question gives you a 1-in-4 shot; a blank gives you nothing.',
        },
        {
          type: 'diagramRef',
          visualType: 'scoreCompositionDiagram',
          description: 'The composite is just the two section scores added together: 200 to 800 each, 400 to 1600 total.',
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'Two students take the same test. Maya rushes the easy questions early in R&W Module 1, gets three of them wrong from careless misreads, but nails most of the hard ones. Devon slows down on the early easy ones, gets them all right, and misses a couple of the hardest. Both answer the same number correct in Module 1. Who is set up better for a high score, and why?',
          steps: [
            {
              label: 'Look past the raw count',
              content: 'Same number correct does not mean the same outcome. The adaptive engine reads Module 1 accuracy to decide which Module 2 each student unlocks.',
            },
            {
              label: 'Weigh the careless errors',
              content: 'Maya threw away three "free" points on questions she could have gotten. Devon banked the sure points and only lost the genuinely hard ones. Careless misses are the ones you had the ability to prevent.',
            },
            {
              label: 'Answer',
              content: 'Devon. Both may unlock a strong Module 2, but Devon converts his ability into points; Maya leaks points she was capable of earning. On an adaptive test, protecting the easy and medium questions is what keeps the high-ceiling path open.',
            },
          ],
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'How many scored modules are on the Digital SAT, and how are they grouped?',
          answer: 'Four modules — two in Reading and Writing, then two in Math (two per section). **Why:** each section is split into Module 1 and Module 2, and your Module 1 performance routes you to your Module 2.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You finish a module with two minutes left and one question still blank. What should you do, and why?',
          answer: 'Put down an answer — any answer — before time runs out. **Why:** there is no guessing penalty, so a blank scores the same as a wrong guess while a guess can score a point.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'Why does missing an easy Module 1 question hurt more than missing a hard Module 2 question?',
          answer: 'Because Module 1 accuracy helps decide whether you unlock the high-ceiling Module 2. **Why:** an easy miss costs the point *and* can lower the score ceiling you are allowed to reach.',
        },
      ],
    },
  },

  {
    id: 'strategy-test-day-tactics',
    unitId: 'strategy-tactics',
    title: 'Pacing & Test-Day Tactics',
    blurb: 'A per-module pacing plan, mark-and-move and elimination, the smartest Desmos plays, and how to set yourself up the night before.',
    readMinutes: 9,
    cbSkills: [],
    source: {
      kind: 'blocks',
      blocks: [
        {
          type: 'text',
          content: 'Pacing is a budget, not a race. In **Reading and Writing** you have about *1 minute 10 seconds* per question. Spend less than that on the grammar (conventions) questions — aim to finish those in **under 40 seconds** — so you bank extra time for the inference and synthesis questions that need real reading. In **Math** you have about *1 minute 35 seconds* per question; the early questions in a module are the quickest, so move briskly through them to leave room for the multi-step problems later.',
        },
        {
          type: 'diagramRef',
          visualType: 'moduleTimeBudgetDiagram',
          description: 'Each module is a fixed time budget: 32 minutes for 27 R&W questions, 35 minutes for 22 Math questions.',
        },
        {
          type: 'text',
          content: '**Mark and move.** The Bluebook app lets you flag a question and come back. If a question has not clicked in about 30 seconds, put down your best guess, flag it, and move on — do not let one problem eat the time of three others. Every question is worth the same, so a hard one you grind for three minutes costs you the same as an easy one you skipped. Circle back to flagged questions once you have swept the whole module.',
        },
        {
          type: 'text',
          content: '**Eliminate before you guess.** When the answer is not obvious, cross off what cannot be right. In R&W, a choice that reverses the passage, overreaches with "every" or "always," or repeats a passage word to look tempting is usually a trap — eliminate it. In Math, cross off choices that are the wrong sign or an impossible size. Getting from four choices to two turns a blind guess into a coin flip, and you should always guess: **never leave a blank.**',
        },
        {
          type: 'text',
          content: 'Math has the **Desmos graphing calculator built in** on every question, and three plays win the most points for the least effort. **Systems of equations:** type both equations exactly as written and click the intersection — its coordinates are the solution, in about 15 seconds. **Quadratics:** type $y = $ the quadratic and click the curve; Desmos marks the vertex (for max/min questions) and the x-intercepts (for roots/zeros), so you read the answer off the graph. **Line or curve of best fit:** make a table, then type $y_1 \\sim m x_1 + b$ with a tilde, and Desmos reports the slope and intercept for you.',
        },
        {
          type: 'trapCard',
          title: 'The silent Desmos mistake: wrong angle mode',
          wrong: 'You jump into a trig question and start typing, not noticing the calculator is set to the wrong angle mode. It returns a clean-looking number that is simply wrong, with no warning.',
          correction: 'Before any trigonometry, open the wrench (settings) icon and confirm the angle mode matches the question — the test defaults to *degrees*, while the desktop Desmos you may have practiced on defaults to *radians*. Also remember Desmos is not always fastest: for one-step arithmetic, your head or paper beats typing.',
        },
        {
          type: 'keyInsight',
          content: 'Use Desmos where it pays: systems, solution-count and tangency conditions, regressions, statistics, and messy numbers. Skip it on one-step arithmetic, where typing costs more time than it saves. When in doubt, solve by hand and spend five seconds verifying in Desmos.',
        },
        {
          type: 'example',
          difficulty: 'Easy',
          problem: 'You are 25 minutes into a 32-minute R&W module with 9 questions left. Two of them are dense inference questions you keep re-reading, and the rest are quick grammar and vocabulary items. How do you spend the last 7 minutes?',
          steps: [
            {
              label: 'Do the fast points first',
              content: 'Knock out the quick grammar and vocabulary items — they take under 40 seconds each. Seven quick questions at ~40 seconds is under 5 minutes, and each is worth the same as a hard one.',
            },
            {
              label: 'Then spend what is left on the hard two',
              content: 'With the sure points banked, give the remaining time to the two inference questions. If one still will not resolve, eliminate down to two choices and guess.',
            },
            {
              label: 'Answer',
              content: 'Fast points first, hard points last, and no blanks at the buzzer. Grinding the two hard questions first would have risked leaving five easy points unanswered.',
            },
          ],
        },
        {
          type: 'text',
          content: '**The night before and the morning of.** Do not cram new material — a light review of your trap checklist beats learning something new. Pack your admission ticket, a photo ID, a charged device or your approved calculator, and a snack for the break. Sleep is the highest-value prep there is. In the morning, eat something, arrive early, and treat the first few easy questions as the points that matter most — they are.',
        },
        {
          type: 'checkpointQuestion',
          number: 1,
          question: 'A grammar question and a hard inference question are worth the same points, but the grammar one is faster. How should that shape your pacing in R&W?',
          answer: 'Do the fast grammar questions quickly (aim under 40 seconds) to bank time for the slow inference questions. **Why:** every question is worth the same, so you want to secure the quick points and spend saved time where reading is genuinely hard.',
        },
        {
          type: 'checkpointQuestion',
          number: 2,
          question: 'You are about to compute $\\sin$ of an angle in Desmos on the Math section. What should you check first?',
          answer: 'The angle mode — confirm it is set to degrees (or whatever the question uses) via the wrench icon. **Why:** the wrong angle mode returns a wrong answer with no warning, and the test defaults differently from the desktop Desmos many students practice on.',
        },
        {
          type: 'checkpointQuestion',
          number: 3,
          question: 'A question has not clicked after 30 seconds. What is the mark-and-move play?',
          answer: 'Put down your best guess, flag the question, and move on; return to it after sweeping the rest of the module. **Why:** one stuck question can drain the time of several answerable ones, and each question is worth the same.',
        },
      ],
    },
  },
];

export default strategyChapters;
