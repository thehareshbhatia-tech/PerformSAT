export const systemsLessons = [
  // Section: Introduction
  {
    id: 1,
    title: "What is a System of Equations?",
    type: "lesson",
    duration: "8 min",
    section: "Introduction",
    hero: {
      tagline: "TWO EQUATIONS, TWO UNKNOWNS",
      subtitle: "Finding where the lines meet"
    },
    content: {
      blocks: [
        { type: "text", content: "Imagine you're at a store buying apples and oranges. You know the total number of fruits you bought, and you know the total amount you spent. Can you figure out exactly how many of each fruit you purchased? With just one piece of information, you can't — there are too many possibilities. But with **two** pieces of information, you can pin down the exact answer. That's the core idea behind a **system of equations**: using multiple equations together to find values that no single equation could determine alone." },
        { type: "systemsIntro" },
        { type: "text", content: "Systems of equations are one of the **highest-tested topics** on the SAT math section. You'll typically see 3 to 5 questions involving systems on every test. The good news: most of these questions are straightforward once you understand the concept. The SAT tests systems in several ways — sometimes giving you two equations to solve, sometimes giving you a word problem to translate into equations, and sometimes asking about the *number* of solutions rather than the solutions themselves." },
        { type: "systemsWhyWeNeedThem" },
        { type: "text", content: "Here's the fundamental principle: **one equation with two unknowns gives you infinite solutions** (a whole line of possibilities). Adding a **second equation** constrains the problem — now you're looking for the point where two lines cross. That intersection is typically just one point, giving you unique values for both variables. This is why systems work: each equation eliminates possibilities, narrowing the answer down." },
        { type: "systemsWhatIsIt" },
        { type: "text", content: "Verifying your solution is just as important as finding it, and the SAT sometimes makes *verification* the entire question. They'll give you a system and a proposed solution, then ask: 'Is (3, 5) a solution to the system?' To check, you plug in x = 3 and y = 5 into **both** equations. If both are true, it's a solution. If even one fails, it's not. The SAT loves this format because students sometimes only check one equation and miss the requirement that the point must satisfy *all* equations." },
        { type: "systemsSolutionMeaning" }
      ]
    }
  },
  {
    id: 2,
    title: "Types of Solutions",
    type: "lesson",
    duration: "8 min",
    section: "Introduction",
    hero: {
      tagline: "ONE, NONE, OR INFINITE",
      subtitle: "How lines can intersect"
    },
    content: {
      blocks: [
        { type: "text", content: "Not every system of equations has a neat, clean answer like (3, 2). In fact, one of the SAT's favorite tricks is asking about systems that have **no solution** or **infinitely many solutions**. Understanding when and why each case occurs — and how to recognize them quickly — is essential. This isn't just theory: the SAT will directly ask 'How many solutions does this system have?' or design answer choices that test whether you understand these edge cases." },
        { type: "systemsSolutionTypes" },
        { type: "text", content: "Let's build your intuition for *why* these three cases exist. Two different lines with different slopes *must* cross at exactly one point — that's one solution. Two lines with the *same slope* but different y-intercepts are parallel — they never meet, so there's no solution. Two lines with the same slope AND the same y-intercept are actually the *same line* — every point is a solution, giving you infinitely many." },
        { type: "text", content: "Here's the algebraic shortcut the SAT loves to test: when you try to solve a system and you end up with something like **0 = 5** (a false statement where all variables cancel), the system has **no solution**. When you end up with **0 = 0** (a true statement where all variables cancel), the system has **infinitely many solutions**. When you end up with an actual value like **x = 3**, the system has **one solution**. Recognize these patterns instantly — the SAT will test you on them." },
        { type: "systemsGraphicalMeaning" },
        { type: "text", content: "**SAT trap:** The SAT sometimes asks 'For what value of k does the system have no solution?' They'll give you something like: 2x + 3y = 7 and kx + 3y = 10. For no solution, the lines must be parallel — same slope, different y-intercept. The slopes will match when the coefficients of x and y are *proportional*. Here, the y-coefficients are already equal (3 = 3), so the x-coefficients must also match: k = 2. But check — the constants must NOT be proportional (7 is not 10), confirming no solution." },
        { type: "text", content: "**Quick decision framework for the SAT:** When a question asks about the number of solutions, rewrite both equations in slope-intercept form (y = mx + b). Compare slopes: Different slopes? One solution. Same slope, different intercepts? No solution. Same slope, same intercept? Infinite solutions. This takes 30 seconds and is the fastest approach for these questions." }
      ]
    }
  },
  // Section: Setting Up Systems
  {
    id: 3,
    title: "Writing Systems from Word Problems",
    type: "lesson",
    duration: "8 min",
    section: "Setting Up Systems",
    hero: {
      tagline: "TRANSLATE THE WORDS",
      subtitle: "From story to equations"
    },
    content: {
      blocks: [
        { type: "text", content: "The hardest part of systems on the SAT isn't solving them — it's **setting them up**. The test loves to give you a paragraph of text describing a real-world situation and ask you to write the system. Many students can solve 2x + y = 10 all day long, but freeze when the same math is hidden inside a story about ticket sales or mixing solutions. The key is having a clear, repeatable process for translating words into math." },
        { type: "systemsSetupStrategy" },
        { type: "text", content: "The translation step is where most mistakes happen, so let's drill into it. Every word problem has **two relationships** — your job is to find both. Usually, one equation comes from a *quantity* relationship (total number of items, total number of people) and the other comes from a *value* relationship (total cost, total weight, total revenue). For example: 'A store sold 50 shirts, some at $20 and some at $35, for a total of $1,250.' The quantity equation is x + y = 50. The value equation is 20x + 35y = 1250." },
        { type: "systemsFromContext" },
        { type: "text", content: "**SAT-specific insight:** On the SAT, word problem system questions often don't ask you to *solve* the system. Instead, they ask 'Which system of equations represents this situation?' and give you four answer choices. This means you don't need to find x and y — you just need to set up the equations correctly. Read each answer choice carefully and test whether the equations match the relationships described in the problem. This format is actually easier than solving, once you know the translation rules." },
        { type: "systemsContextExample" },
        { type: "text", content: "**Common SAT word problem setups you should recognize:** (1) **Ticket problems** — two types of tickets at different prices, given total tickets and total revenue. (2) **Mixture problems** — two solutions at different concentrations being combined. (3) **Rate problems** — two people working at different speeds, or traveling at different rates. (4) **Age problems** — relationships between people's ages now and in the past/future. Each follows the same pattern: identify two unknowns, find two relationships, write two equations." },
        { type: "text", content: "**The biggest trap in word problem setup:** Watch out for 'per' and 'each' — these signal multiplication, not addition. 'Tickets cost $12 each' means 12x, not 12 + x. Also, be careful with 'less than' — it reverses the order. '5 less than x' is x − 5, NOT 5 − x. These small translation errors are the #1 reason students get word problem systems wrong on the SAT." }
      ]
    }
  },
  { id: 4, title: "Deriving System of Equation from Context Example #1", type: "video", duration: "8 min", section: "Setting Up Systems", videoId: "U-XS0YLJDBU", hero: { tagline: "WORD PROBLEM", subtitle: "Setting up from context" } },
  { id: 5, title: "Deriving System of Equation from Context Example #2", type: "video", duration: "8 min", section: "Setting Up Systems", videoId: "H_VAwlhG17w", hero: { tagline: "WORD PROBLEM", subtitle: "More context practice" } },
  // Section: Substitution Method
  {
    id: 6,
    title: "Solving by Substitution",
    type: "lesson",
    duration: "9 min",
    section: "Substitution Method",
    hero: {
      tagline: "PLUG IT IN",
      subtitle: "Replace one variable with an expression"
    },
    content: {
      blocks: [
        { type: "text", content: "Substitution is the most intuitive method for solving systems — it's essentially the idea of replacing one thing with an equivalent thing. Think of it like a nickname: if you know that 'y' is just another name for '2x + 1,' then everywhere you see 'y,' you can write '2x + 1' instead. Once you do that substitution, you've turned a two-variable problem into a one-variable problem, and one-variable equations are ones you already know how to solve." },
        { type: "substitutionIntro" },
        { type: "text", content: "Substitution works best when one variable is **already isolated** — meaning one equation already looks like 'y = ...' or 'x = ...'. If neither equation has an isolated variable, you *can* still use substitution by solving one equation for a variable first, but that adds an extra step. In that case, pick the variable with a coefficient of 1 (or -1) to isolate — it avoids fractions and keeps the arithmetic clean." },
        { type: "substitutionWhenToUse" },
        { type: "text", content: "Follow these four steps every time, and substitution becomes mechanical — no creative thinking required. The process is always the same regardless of how complicated the equations look. The most common mistake students make is in Step 2: when substituting, make sure you replace the variable *everywhere* it appears in the other equation, and use parentheses around the expression you're plugging in to avoid sign errors." },
        { type: "substitutionSteps" },
        { type: "text", content: "Let's walk through a complete example to see the method in action. Notice how each step flows naturally into the next — there's never a moment where you have to guess what to do." },
        { type: "substitutionExample" },
        { type: "text", content: "**SAT-specific tip:** The SAT sometimes asks for the value of an *expression* rather than x or y individually. For example: 'What is the value of x + y?' or 'What is the value of 2x − y?' In these cases, you might not need to fully solve the system. Sometimes you can add or subtract the original equations to get the expression directly. Before diving into substitution, read the question carefully and see if there's a shortcut." },
        { type: "text", content: "**When NOT to use substitution:** If both equations are in standard form (like 3x + 4y = 20 and 2x − 4y = 5) and no variable has a coefficient of 1, substitution will create messy fractions. In that scenario, elimination (which we cover next) or DESMOS is a better choice. On the SAT, always take a moment to scan both equations and pick the method that requires the least computation." }
      ]
    }
  },
  { id: 7, title: "Solving System of Equation using Substitution", type: "video", duration: "8 min", section: "Substitution Method", videoId: "50Hjbc3rZ0U", hero: { tagline: "PRACTICE", subtitle: "Substitution in action" } },
  // Section: Elimination Method
  {
    id: 8,
    title: "Solving by Elimination",
    type: "lesson",
    duration: "9 min",
    section: "Elimination Method",
    hero: {
      tagline: "ADD TO CANCEL",
      subtitle: "Make one variable disappear"
    },
    content: {
      blocks: [
        { type: "text", content: "Elimination is the *other* algebraic method for solving systems, and it works on a beautifully simple idea: if you add two equations together, and one variable cancels out, you're left with one equation and one unknown. Think of it like a magic trick — you have two complex things, but when you combine them in just the right way, the complexity disappears. Elimination tends to be faster than substitution when both equations are in standard form (Ax + By = C) and the coefficients are set up nicely." },
        { type: "eliminationIntro" },
        { type: "text", content: "The key to elimination is getting the coefficients of one variable to be **equal** (so you subtract the equations) or **opposite** (so you add them). Sometimes the coefficients already match — that's the easy case. When they don't, you multiply one or both equations by a constant to create matching coefficients. The SAT usually makes this step straightforward: you'll rarely need to multiply both equations." },
        { type: "eliminationWhenToUse" },
        { type: "text", content: "Here's the step-by-step process. One crucial detail many students miss: when you subtract equations, you must subtract *every term*, including the constant on the right side. The most common arithmetic error in elimination is forgetting to subtract the constant. Write it out carefully — don't try to do it in your head." },
        { type: "eliminationSteps" },
        { type: "text", content: "Let's see elimination in action with a full example. Watch how cleanly the x-variable disappears when the coefficients match." },
        { type: "eliminationExample" },
        { type: "text", content: "**The SAT's favorite elimination trick:** Sometimes the SAT asks for an expression like 'What is the value of x − y?' without asking for x and y individually. In these cases, you can often add or subtract the original equations to get the expression directly without solving for each variable. For example, if you have x + y = 10 and x − y = 4, adding gives 2x = 14 and subtracting gives 2y = 6 — but you might only need x − y, which is literally just the second equation: 4. Always read what the question asks *before* solving." },
        { type: "text", content: "**Substitution vs. Elimination — when to use which:** On the SAT, scan the system first. If one variable is already isolated (y = ... or x = ...), use substitution. If both equations are in standard form with similar coefficients, use elimination. If the coefficients are messy and there's no clean setup for either method, skip the algebra entirely and use DESMOS. The ability to quickly choose the right method is itself a skill the SAT rewards — it saves you time on every systems question." }
      ]
    }
  },
  { id: 9, title: "Solving System of Equations using Elimination", type: "video", duration: "8 min", section: "Elimination Method", videoId: "pvOrqZvCn-4", hero: { tagline: "PRACTICE", subtitle: "Elimination in action" } },
  // Section: DESMOS Method
  {
    id: 10,
    title: "Solving with DESMOS",
    type: "lesson",
    duration: "8 min",
    section: "DESMOS Method",
    hero: {
      tagline: "THE FAST METHOD",
      subtitle: "Graph it, click the intersection, done"
    },
    content: {
      blocks: [
        { type: "text", content: "Let's be honest about something: on the actual SAT, you have a **built-in graphing calculator** (DESMOS) sitting right there on your screen. For most system of equations questions, the fastest path to the answer is to type both equations into DESMOS, find the intersection point, and move on. No algebra. No risk of sign errors. No wasted time. This lesson is about mastering that approach so you can use it confidently and efficiently on test day." },
        { type: "desmosIntro" },
        { type: "text", content: "This next comparison might surprise you, but it's reality: the algebraic methods you just learned (substitution and elimination) take 2-3 minutes per problem and have multiple opportunities for arithmetic mistakes. DESMOS takes about 20 seconds and is virtually error-proof — as long as you type the equations correctly. So why did we teach you algebra first? Because some SAT questions *require* algebraic understanding. But for straightforward 'solve this system' questions, DESMOS is objectively the superior strategy." },
        { type: "desmosSATReality" },
        { type: "text", content: "The process is dead simple, but let's walk through it precisely so there's no confusion on test day. Accuracy in typing matters — a single mistyped coefficient will give you the wrong intersection point." },
        { type: "desmosSteps" },
        { type: "text", content: "**Critical DESMOS tip:** After typing both equations, click directly on the intersection point. DESMOS will display the coordinates as an ordered pair — that's your answer. If the lines don't appear to intersect on your screen, zoom out using the minus button or the scroll wheel. If DESMOS shows no intersection at all, the lines are parallel (no solution). If DESMOS shows the two equations as the same line, you have infinite solutions." },
        { type: "desmosWhenToUse" },
        { type: "text", content: "**When DESMOS can't help:** Not every systems question is a 'solve for x and y' question. DESMOS won't help when the question asks you to *set up* the system (word problems), when it asks about infinite solutions with a parameter, or when it asks 'what value of k makes the system have no solution?' For these conceptual questions, you need the algebraic understanding from the previous lessons. Think of it this way: DESMOS handles the computation, but *you* handle the thinking." },
        { type: "text", content: "**Test day workflow:** When you see a systems question, take 5 seconds to decide your approach. Is it a straightforward 'solve the system' question? Open DESMOS immediately. Is it a word problem asking you to set up equations? Read carefully and translate. Is it asking about the *number* of solutions? Compare slopes algebraically. Having this decision framework saves you from wasting time on the wrong approach." }
      ]
    }
  },
  { id: 11, title: "Solving System of Equations using DESMOS Example #1", type: "video", duration: "6 min", section: "DESMOS Method", videoId: "rmV0RBBmFPk", hero: { tagline: "DESMOS METHOD", subtitle: "Visual solution finding" } },
  { id: 12, title: "Solving System of Equations using DESMOS Example #2", type: "video", duration: "6 min", section: "DESMOS Method", videoId: "8qCUhJYM3Tg", hero: { tagline: "DESMOS METHOD", subtitle: "More graphing practice" } },
  // Section: Infinite Solutions
  {
    id: 13,
    title: "Infinite Solutions & Parametric Form",
    type: "lesson",
    duration: "9 min",
    section: "Infinite Solutions",
    hero: {
      tagline: "SAME LINE = ∞ SOLUTIONS",
      subtitle: "When equations are equivalent"
    },
    content: {
      blocks: [
        { type: "text", content: "This is the topic that separates students who score in the 600s from those who score 700+. **Infinite solutions with parametric form** is one of the hardest question types on the SAT math section — but once you understand the concept, the questions become almost formulaic. The SAT includes one of these on nearly every test, and most students either skip it or guess. After this lesson, you'll be able to solve it confidently." },
        { type: "infiniteSolutionsIntro" },
        { type: "text", content: "Let's build your intuition. When two equations describe the **same line**, they're really just different-looking versions of the same relationship. Multiply both sides of x + 2y = 6 by 3 and you get 3x + 6y = 18. These look different, but they graph as the *exact same line*. Every point on that line satisfies both equations — that's why there are infinite solutions. The key recognition skill: can one equation be obtained by multiplying the other by a constant?" },
        { type: "infiniteSolutionsRecognize" },
        { type: "text", content: "Here's where it gets interesting — and where the SAT gets tricky. When a system has infinite solutions, the SAT doesn't just ask 'how many solutions?' Instead, it asks: **'Which point (x, y) lies on the graph of each equation in the system?'** The answer choices use a **parameter** — a letter like *r* that represents any real number. This is because there's no single point that's THE answer; every point on the line works. The parameter lets you describe all of them at once." },
        { type: "infiniteSolutionsParametric" },
        { type: "text", content: "The method is surprisingly simple once you see it. Let x = r (or whatever letter the answer choices use). Then substitute r into one of the equations and solve for y in terms of r. Your answer is (r, your expression). Match it to the answer choices. That's it. The algebra is basic — the hard part is *recognizing* that this is what the question is asking, which is why understanding infinite solutions conceptually is so important." },
        { type: "infiniteSolutionsExample" },
        { type: "text", content: "**SAT trap with infinite solutions:** The SAT sometimes gives you a system with a missing coefficient and asks 'For what value of a does the system have infinitely many solutions?' To solve this, set the ratios of corresponding coefficients equal. If the system is: ax + 6y = 12 and 2x + 3y = 6, then for infinite solutions, a/2 = 6/3 = 12/6. From 6/3 = 2, we get a/2 = 2, so a = 4. Check: 4x + 6y = 12 is just 2(2x + 3y = 6). Confirmed — same line." },
        { type: "text", content: "**One more subtlety:** Don't confuse infinite solutions (same line, 0 = 0 when solving) with no solution (parallel lines, 0 = 5 when solving). On the SAT, both involve variables canceling — the difference is whether the remaining statement is *true* (infinite solutions) or *false* (no solution). If you're ever unsure, graph both equations in DESMOS: same line = infinite, parallel lines = none, crossing lines = one." }
      ]
    }
  },
  { id: 14, title: "Infinite Solutions SAT Example", type: "video", duration: "10 min", section: "Infinite Solutions", videoId: "e37RY2cRYMI", hero: { tagline: "ADVANCED", subtitle: "Recognizing infinite solutions" } }
];
