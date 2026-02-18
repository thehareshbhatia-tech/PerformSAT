// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original questions modeled after Test Innovators style with enhanced explanations

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is equivalent to the mean of data set B?",
          questionFormula: {
            equation: "$$\\text{Data set B: } 7.2, 11.4, 9.8, 5.4, 10.6, 5.6$$"
          },
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$8\\frac{1}{3}$" },
            { id: "C", text: "$8\\frac{1}{2}$" },
            { id: "D", text: "$9\\frac{1}{4}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Mean Calculation** — 1-2 of these per test. This is a free point if you use your calculator.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Type directly into Desmos: $(7.2+11.4+9.8+5.4+10.6+5.6)/6$. You get $8.333...$, which is $8\\frac{1}{3}$. Done. No mental math needed.\n\n**The Full Solution:**\nSum: $7.2 + 11.4 + 9.8 + 5.4 + 10.6 + 5.6 = 50$\nCount: 6 values\nMean $= 50 \\div 6 = 8.\\overline{3} = 8\\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8$): The sum is $50$, and $50 \\div 6$ isn't clean. If you round down or make a small addition error that gives you $48$, you get $48 \\div 6 = 8$. College Board puts round numbers as traps because they \"feel\" right when the real answer is messy.\n• Choice C ($8\\frac{1}{2} = 8.5$): A single addition slip (like misreading $5.4$ as $5.5$) gives $51 \\div 6 = 8.5$. This trap punishes mental math — one tiny error and you land on a wrong answer that looks perfectly reasonable.\n• Choice D ($9\\frac{1}{4} = 9.25$): Way too high — this would require a sum of $55.5$. If you accidentally added a number twice or miscounted, you'd get here. When your mean seems too far from the middle values, recount.\n\n**Verification:** $8\\frac{1}{3} \\times 6 = \\frac{25}{3} \\times 6 = 50$ ✓\n\n**Test Day Takeaway:** Mean questions are free points — always use Desmos. Type the numbers directly, no mental math needed. The SAT gives you a calculator for a reason.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the value when $60$ is increased by $150\\%$?",
          choices: [
            { id: "A", text: "$90$" },
            { id: "B", text: "$120$" },
            { id: "C", text: "$150$" },
            { id: "D", text: "$210$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent Increase vs. Percent Of** — College Board puts 2-3 of these per test. The trap is always the same.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** \"Increased by $150\\%$\" means multiply by $(1 + 1.50) = 2.5$. On Desmos: $60 \\times 2.5 = 150$. Done.\n\n**The Full Solution:**\n$150\\%$ of $60 = 1.50 \\times 60 = 90$\nNew value $= 60 + 90 = 150$\n\nAlternatively: $60 \\times (1 + 1.50) = 60 \\times 2.5 = 150$\n\n**Why the wrong answers are tempting:**\n• Choice A ($90$): This is THE classic SAT percent trap. You correctly calculated $150\\%$ of $60 = 90$, but stopped one step early. College Board designs this as the most tempting wrong answer because it rewards partial work — you did real math, just not all of it.\n• Choice B ($120$): You doubled $60$ instead of multiplying by $2.5$. \"Increased by $150\\%$\" and \"increased by $100\\%$\" are different — this confusion costs points every single test.\n• Choice D ($210$): You multiplied by $3.5$ instead of $2.5$, likely adding $150\\%$ then adding the original again. When your answer seems too large, re-read what \"increased by\" means.\n\n**Verification:** $150 \\div 60 = 2.5$, confirming $150$ is $250\\%$ of $60$ (an increase of $150\\%$) ✓\n\n**Test Day Takeaway:** \"Increased BY X%\" = multiply by $(1 + X/100)$. \"X% OF\" = multiply by $X/100$. The word BY changes everything.",
          skills: ["percents"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "The values below represent how many miles Kenji ran in each of his last ten training sessions. What is the mean of Kenji's distances over these ten sessions?",
          questionFormula: {
            equation: "$$16, 12, 18, 9, 21, 15, 15, 19, 25, 20$$"
          },
          correctAnswer: 17,
          explanation: "**SAT Pattern: Mean Calculation** — Shows up every test. Free point with a calculator.\n\n**The correct answer is 17.**\n\n**The Fast Way (15 seconds):** Type into Desmos: $(16+12+18+9+21+15+15+19+25+20)/10$. You get $17$. Done.\n\n**The Full Solution:**\nSum: $16 + 12 + 18 + 9 + 21 + 15 + 15 + 19 + 25 + 20 = 170$\nCount: 10 values\nMean $= 170 \\div 10 = 17$\n\n**Pro tip:** Dividing by 10 just moves the decimal one place left. So once you know the sum is $170$, the answer is instant.\n\n**Verification:** $17 \\times 10 = 170$ ✓\n\n**Test Day Takeaway:** For mean questions, go straight to Desmos. Type the numbers, divide by the count. Don't trust mental addition with more than 4-5 numbers — one slip and you're wrong.",
          skills: ["mean-median-mode"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Maria started a dog-walking service. The total amount charged to a customer weekly, in dollars, is represented by the linear function $g(x) = 18.50x + 12.00$, where $x$ is the number of walks given to the customer per week. What is the best interpretation of the value $18.50$ in the function?",
          choices: [
            { id: "A", text: "Maria charges \\$18.50 per week." },
            { id: "B", text: "Maria charges \\$18.50 per walk." },
            { id: "C", text: "Customers pay an initial fee of \\$18.50." },
            { id: "D", text: "Customers pay a weekly fee of \\$18.50." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Linear Function Interpretation (Slope vs. Y-Intercept)** — Shows up on every single test. Know this cold.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** In $g(x) = 18.50x + 12.00$, the number attached to $x$ is the rate per unit (per walk), and the number standing alone is the starting/fixed value. So $18.50$ = per walk, $12.00$ = base fee. That's it.\n\n**The Full Solution:**\nIn $g(x) = mx + b$:\n• $m = 18.50$ is the slope = rate of change = charge per walk\n• $b = 12.00$ is the y-intercept = fixed/initial value = base weekly fee\n\n**Why the wrong answers are tempting:**\n• Choice A: \"Per week\" would mean a flat rate — but $18.50$ is multiplied by $x$ (number of walks), so it changes with each walk. College Board tests whether you understand that the slope is a \"per unit\" rate, not a flat amount.\n• Choice C: This swaps slope and intercept — the initial fee is $\\$12.00$, not $\\$18.50$. This is the single most common mistake on slope-intercept questions. The number WITHOUT $x$ is the starting value.\n• Choice D: Same confusion as C. The weekly base fee is $\\$12.00$ (the constant). Students who rush often grab the wrong number.\n\n**Verification:** At $x = 0$ walks: $g(0) = 0 + 12 = \\$12$ (base fee only) ✓. At $x = 1$ walk: $g(1) = 18.50 + 12 = \\$30.50$ (one walk + base) ✓\n\n**Test Day Takeaway:** In $y = mx + b$, the slope $m$ always means \"per [unit]\" and the intercept $b$ always means \"starting at.\" Read the equation like a sentence: \"Start at $12, add $18.50 per walk.\"",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery sells muffins and croissants. Muffins are sold for \\$2.75, and croissants are sold for \\$4.25. The bakery made \\$38.25 selling croissants. If the bakery sold the same number of muffins as croissants, what was the total amount of money, in dollars, that the bakery made?",
          choices: [
            { id: "A", text: "$24.75$" },
            { id: "B", text: "$49.50$" },
            { id: "C", text: "$63.00$" },
            { id: "D", text: "$76.50$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multi-Step Word Problem** — 3-4 per test. The trap is almost always stopping one step early.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** On Desmos: $38.25 \\div 4.25 = 9$ croissants. Same number of muffins, so $9 \\times 2.75 = 24.75$. Total: $38.25 + 24.75 = 63$.\n\n**The Full Solution:**\n**Step 1:** Find number of croissants: $\\$38.25 \\div \\$4.25 = 9$\n**Step 2:** Muffin revenue (same count): $9 \\times \\$2.75 = \\$24.75$\n**Step 3:** Total: $\\$38.25 + \\$24.75 = \\$63.00$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$24.75$): This is the partial calculation trap — the most common trap on the entire SAT. You found the muffin revenue but forgot to add back the croissant revenue. College Board puts your intermediate answer as a choice because they know most students who get this wrong stopped one step early.\n• Choice B ($\\$49.50$): Likely from a unit price mix-up or arithmetic error. When none of your intermediate steps produce this number, it's a red flag that something went wrong.\n• Choice D ($\\$76.50$): Could come from accidentally counting 10 croissants instead of 9, or adding incorrectly. Always double-check your division.\n\n**Verification:** $9 \\times \\$4.25 = \\$38.25$ ✓ and $9 \\times \\$2.75 = \\$24.75$ ✓; $\\$38.25 + \\$24.75 = \\$63.00$ ✓\n\n**Test Day Takeaway:** In multi-step word problems, after you get your answer, ask yourself: \"Did I answer the ACTUAL question, or did I stop at an intermediate step?\" If your answer matches one of the choices AND it was a step along the way, keep going.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $p^2q^3 + p^2q^2$?",
          choices: [
            { id: "A", text: "$p^2q^2(q)$" },
            { id: "B", text: "$p^4q^5$" },
            { id: "C", text: "$2p^2q^5$" },
            { id: "D", text: "$p^2q^2(q + 1)$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: GCF Factoring** — 1-2 per test. Look for what's common to BOTH terms.\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Both terms have $p^2q^2$. Factor it out: $p^2q^2(q + 1)$. Distribute to verify: $p^2q^3 + p^2q^2$ ✓. Done.\n\n**The Full Solution:**\nGCF of $p^2q^3$ and $p^2q^2$:\n• Both share $p^2$ and $q^2$ → GCF $= p^2q^2$\n• Factor: $p^2q^2(q) + p^2q^2(1) = p^2q^2(q + 1)$\n\n**Why the wrong answers are tempting:**\n• Choice A ($p^2q^2(q)$): You factored correctly but dropped the $+1$ term. When factoring $p^2q^2$ out of $p^2q^2$, the result is $1$, not nothing. College Board loves this trap because students forget that dividing a term by itself gives $1$, not $0$.\n• Choice B ($p^4q^5$): You added exponents as if the terms were being multiplied ($p^2 \\cdot p^2 = p^4$, $q^3 \\cdot q^2 = q^5$). But the operation is ADDITION, not multiplication. This is the #1 exponent rule mistake.\n• Choice C ($2p^2q^5$): You combined unlike terms by adding coefficients and exponents directly. When terms have different powers, you CANNOT add them like this.\n\n**Verification:** $p^2q^2(q + 1) = p^2q^3 + p^2q^2$ ✓\n\n**Test Day Takeaway:** When factoring, always check your answer by distributing back. If you don't get the original expression, something went wrong. And remember: any term divided by itself equals $1$, not $0$.",
          skills: ["factoring", "polynomial-operations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the measure of an exterior angle of a regular octagon, in degrees?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$45$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$135$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Polygon Exterior Angles** — 1 per test. One formula, instant answer.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Exterior angles of ANY regular polygon always sum to $360°$. Octagon = 8 sides. $360 \\div 8 = 45°$. Done.\n\n**The Full Solution:**\nFor a regular polygon with $n$ sides:\nEach exterior angle $= \\frac{360°}{n}$\nOctagon: $\\frac{360°}{8} = 45°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($30°$): This is $\\frac{360°}{12}$ — a 12-sided polygon. If you blanked on how many sides an octagon has, you might guess wrong. Remember: oct = 8 (like octopus).\n• Choice C ($60°$): This is $\\frac{360°}{6}$ — a hexagon. You divided by 6 instead of 8. Under pressure, students often confuse hex (6) and oct (8).\n• Choice D ($135°$): This is the INTERIOR angle, not the exterior. College Board puts this here because most students learn interior angles first, and $135°$ is what pops into their head. The question specifically asks for EXTERIOR. Read the question word by word.\n\n**Verification:** $8 \\times 45° = 360°$ ✓\n\n**Test Day Takeaway:** Exterior angle = $360° \\div n$. Always. For any regular polygon. And remember: interior + exterior = $180°$. If you accidentally find the wrong one, you can instantly convert.",
          skills: ["polygons", "angles"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation above describes the relationship between four positive integers: $v$, $d$, $a$, and $b$. Which equation correctly defines $a$ in terms of $v$, $d$, and $b$?",
          questionFormula: {
            equation: "$v = \\sqrt{\\frac{d}{ab}}$"
          },
          choices: [
            { id: "A", text: "$a = v^2 - bd$" },
            { id: "B", text: "$a = bd - v^2$" },
            { id: "C", text: "$a = \\frac{d}{bv^2}$" },
            { id: "D", text: "$a = \\frac{bv^2}{d}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Formula Rearrangement (Isolate a Variable)** — 1-2 per test. Systematic algebra, one step at a time.\n\n**Choice C is correct.**\n\n**The Fast Way (45 seconds):** Square both sides to kill the radical, then isolate $a$:\n$v^2 = \\frac{d}{ab}$ → $abv^2 = d$ → $a = \\frac{d}{bv^2}$\n\n**The Full Solution:**\n**Step 1:** Square both sides: $v^2 = \\frac{d}{ab}$\n**Step 2:** Multiply both sides by $ab$: $abv^2 = d$\n**Step 3:** Divide both sides by $bv^2$: $a = \\frac{d}{bv^2}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($a = v^2 - bd$): You turned division into subtraction. When an equation has $\\frac{d}{ab}$, rearranging involves multiplication and division — never subtraction. College Board includes this because students who panic at complex formulas guess at operations.\n• Choice B ($a = bd - v^2$): Same fundamental error — using subtraction instead of division — just in a different order. Neither subtraction answer makes algebraic sense here.\n• Choice D ($a = \\frac{bv^2}{d}$): This is the reciprocal of the correct answer — you flipped the fraction when isolating $a$. This is extremely common: when moving a variable from the denominator to the other side, students often flip the wrong way. To check, plug it back in.\n\n**Verification:** Substitute $a = \\frac{d}{bv^2}$ back: $v = \\sqrt{\\frac{d}{\\frac{d}{bv^2} \\cdot b}} = \\sqrt{\\frac{d \\cdot bv^2}{db}} = \\sqrt{v^2} = v$ ✓\n\n**Test Day Takeaway:** For formula rearrangement, do one operation per line. Write each step. And always check by substituting your answer back into the original — if it doesn't simplify to an identity, you made a mistake.",
          skills: ["formula-rearrangement", "algebraic-manipulation"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the average weekly coffee sales at a café.",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Hot", "Iced", "Total"],
              rows: [
                ["Latte", "65", "48", "113"],
                ["Cappuccino", "82", "35", "117"],
                ["Americano", "43", "67", "110"],
                ["Total", "190", "150", "340"]
              ]
            }
          },
          questionContinued: "If a customer who purchased iced coffee is selected at random, what is the probability that the customer purchased a cappuccino?",
          choices: [
            { id: "A", text: "$\\frac{35}{117}$" },
            { id: "B", text: "$\\frac{35}{150}$" },
            { id: "C", text: "$\\frac{117}{340}$" },
            { id: "D", text: "$\\frac{150}{117}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from Two-Way Table** — Shows up on every test. The key is picking the right denominator.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** \"Given iced coffee\" means your world shrinks to just the Iced column. In that column, find Cappuccino ($35$) over Total Iced ($150$). Answer: $\\frac{35}{150}$.\n\n**The Full Solution:**\n$P(\\text{Cappuccino} | \\text{Iced}) = \\frac{\\text{Iced Cappuccino}}{\\text{Total Iced}} = \\frac{35}{150} = \\frac{7}{30}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{35}{117}$): You used $117$ (total cappuccino) as the denominator instead of $150$ (total iced). College Board designs this trap because students confuse \"given iced\" with \"given cappuccino.\" The word after \"given\" or \"if\" tells you which total to use as the denominator.\n• Choice C ($\\frac{117}{340}$): You ignored the \"iced\" condition and calculated $P(\\text{Cappuccino})$ from the whole table. This is the unconditional probability — the question asks for conditional.\n• Choice D ($\\frac{150}{117}$): This fraction is greater than $1$, which is impossible for a probability. If your answer is ever greater than $1$, you flipped the fraction.\n\n**Verification:** $\\frac{35}{150} \\approx 0.233$ — valid probability between 0 and 1 ✓\n\n**Test Day Takeaway:** For conditional probability, the word after \"given\" or \"if\" determines your denominator. \"Given iced\" = denominator is total iced. Always. Circle the \"given\" condition in the question to avoid using the wrong total.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "What is one possible positive solution to the given equation?\n\n$3|x - 4| = 6$",
          correctAnswer: 6,
          acceptedAnswers: [2, 6],
          explanation: "**SAT Pattern: Absolute Value Equation** — 1 per test. Always produces TWO solutions — don't forget the second one.\n\n**The correct answer is 2 or 6.**\n\n**The Fast Way (30 seconds):** Isolate the absolute value first: $|x - 4| = 2$. This means $x - 4 = 2$ (so $x = 6$) OR $x - 4 = -2$ (so $x = 2$). Either positive answer works.\n\n**The Full Solution:**\n$3|x - 4| = 6$\n$|x - 4| = 2$\n\nCase 1: $x - 4 = 2 \\rightarrow x = 6$\nCase 2: $x - 4 = -2 \\rightarrow x = 2$\n\n**Desmos Shortcut:** Graph $y = 3|x - 4|$ and $y = 6$. The two intersection points give you $x = 2$ and $x = 6$.\n\n**Verification:**\n• $x = 6$: $3|6 - 4| = 3(2) = 6$ ✓\n• $x = 2$: $3|2 - 4| = 3(2) = 6$ ✓\n\n**Test Day Takeaway:** Absolute value equations ALWAYS split into two cases: the positive and the negative. Isolate the absolute value bars first, THEN split. And if the question says \"positive solution,\" make sure both solutions are positive before picking one.",
          skills: ["absolute-value-equations"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Carbon-14 is a radioisotope used in archaeology. It has a half-life of about 5,730 years, which means it takes about 5,730 years for a sample to decay to half of its original amount. If a fossil originally contains 80 grams of Carbon-14, which of the following functions best expresses the amount of $y$, in grams, that remains in the fossil $t$ years after it formed?",
          choices: [
            { id: "A", text: "$y = \\frac{1}{2}(80)^{\\frac{t}{5730}}$" },
            { id: "B", text: "$y = \\frac{1}{2}(80)^{5730t}$" },
            { id: "C", text: "$y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$" },
            { id: "D", text: "$y = 80\\left(\\frac{1}{2}\\right)^{5730t}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Decay / Half-Life** — 1-2 per test. Know the formula template cold.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Half-life formula is always $y = (\\text{start}) \\times \\left(\\frac{1}{2}\\right)^{\\frac{t}{\\text{half-life}}}$. Plug in: start $= 80$, half-life $= 5730$. Answer: $y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$.\n\n**The Full Solution:**\n$y = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{h}}$ where:\n• $A_0 = 80$ (initial amount)\n• $h = 5730$ (half-life period)\n\nResult: $y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$\n\n**Why the wrong answers are tempting:**\n• Choice A: The $80$ and $\\frac{1}{2}$ are swapped — $80$ is in the exponent position. College Board tests whether you know that the initial amount MULTIPLIES the decay factor, not the other way around. If you're unsure, plug in $t = 0$: you should get $80$, not $\\frac{1}{2}$.\n• Choice B: Same swap as A, PLUS the exponent is $5730t$ instead of $\\frac{t}{5730}$. Two errors stacked. Always sanity-check: at $t = 5730$, you should have half left.\n• Choice D: The exponent $5730t$ means the sample decays by half every $\\frac{1}{5730}$ of a year — essentially instant decay. The half-life goes in the denominator so that the exponent equals $1$ when $t$ equals one half-life.\n\n**Verification:** At $t = 0$: $80 \\times 1 = 80$ ✓. At $t = 5730$: $80 \\times \\frac{1}{2} = 40$ ✓. Perfect.\n\n**Test Day Takeaway:** Exponential formula: $y = (\\text{start}) \\times (\\text{multiplier})^{\\frac{t}{\\text{period}}}$. The start goes in front, the multiplier is the base, and the period goes in the denominator of the exponent. Test with $t = 0$ and $t = \\text{one period}$ to verify.",
          skills: ["exponential-functions", "half-life"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the given equation?\n\n$\\sqrt{x^2 - 81} = 12$",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$\\sqrt{153}$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Radical Equation** — 1 per test. Square both sides, then solve.\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Square both sides: $x^2 - 81 = 144$. So $x^2 = 225$, meaning $x = 15$. Or on Desmos, graph $y = \\sqrt{x^2 - 81}$ and $y = 12$ — the positive intersection is at $x = 15$.\n\n**The Full Solution:**\n$(\\sqrt{x^2 - 81})^2 = 12^2$\n$x^2 - 81 = 144$\n$x^2 = 225$\n$x = \\pm 15$\n\nSince $15$ is in the choices, that's our answer.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): You see $81$ and think $x^2 = 81$, so $x = 9$. But $x^2 - 81 = 0$ gives $\\sqrt{0} = 0$, not $12$. College Board puts $9$ here because it's the square root of $81$ — a number that appears prominently in the equation. Students grab familiar numbers under pressure.\n• Choice B ($12$): You plugged the right-hand side of the equation directly as $x$. This is a reflexive mistake — you see $12$ and assume it's the answer. Always check: $\\sqrt{144 - 81} = \\sqrt{63} \\neq 12$.\n• Choice C ($\\sqrt{153}$): Comes from adding $81 + 72$ instead of $81 + 144$. The $72$ likely came from computing $12 \\times 6$ instead of $12^2 = 144$. Know your perfect squares cold.\n\n**Verification:** $\\sqrt{225 - 81} = \\sqrt{144} = 12$ ✓\n\n**Test Day Takeaway:** For radical equations: square both sides, solve, then CHECK by plugging back in. Squaring can introduce extraneous solutions, so verification isn't optional — it's required.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 2,
              yIntercept: 3,
              xRange: [0, 6],
              yRange: [0, 16],
              label: "d(t)",
              axisLabels: { x: "Time (hours)", y: "Distance (miles)" }
            }
          },
          question: "The graph of the function $d(t)$ shows how far, in miles, a car has traveled after $t$ hours. What is the best interpretation of the function $d(t) + 5$?",
          choices: [
            { id: "A", text: "The car starts from the same location and travels 5 times as fast." },
            { id: "B", text: "The car starts 5 miles closer to the destination and travels at the same speed." },
            { id: "C", text: "The car starts 5 hours later and travels 5 miles per hour faster." },
            { id: "D", text: "The car starts 5 miles farther from the starting point and travels at the same speed." }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Function Transformation (Vertical Shift)** — 1-2 per test. Know the transformation rules cold.\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $d(t) + 5$ adds $5$ to every output. That means every distance is $5$ miles more — the car starts $5$ miles farther from the starting point. The slope (speed) doesn't change because you're adding a constant, not changing the rate.\n\n**The Full Solution:**\n• Original $d(t)$: starts at $3$ miles, speed $= 2$ mph\n• $d(t) + 5$: starts at $3 + 5 = 8$ miles, speed still $= 2$ mph\n• The car starts $5$ miles farther but travels at the same speed.\n\n**Why the wrong answers are tempting:**\n• Choice A (\"5 times as fast\"): Adding $5$ doesn't affect speed — multiplying by $5$ would. College Board tests whether you confuse adding to the function (vertical shift) with multiplying the function (rate change). $d(t) + 5 \\neq 5 \\cdot d(t)$.\n• Choice B (\"5 miles closer\"): Plus means more, not less. \"Closer\" would require $d(t) - 5$. Under time pressure, students sometimes flip the sign mentally.\n• Choice C (\"5 hours later, 5 mph faster\"): Changing the input ($d(t-5)$) shifts time. Changing the output ($d(t)+5$) shifts distance. These are completely different transformations. College Board loves mixing them up.\n\n**Verification:** At $t=0$: $d(0) + 5 = 3 + 5 = 8$ (starts $5$ miles farther) ✓. Slope unchanged ✓.\n\n**Test Day Takeaway:** $f(x) + k$ = shift UP by $k$. $f(x + k)$ = shift LEFT by $k$. Adding OUTSIDE the function changes the output (y). Adding INSIDE changes the input (x). Don't mix them up.",
          skills: ["function-interpretation", "graph-transformations"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: [
            { math: "(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)", display: true },
            { text: "The given expression can be written in the form " },
            { math: "ax^4 + bx^3 + cx^2 + dx" },
            { text: ", where " },
            { math: "a" },
            { text: ", " },
            { math: "b" },
            { text: ", " },
            { math: "c" },
            { text: ", and " },
            { math: "d" },
            { text: " are constants. What is the value of " },
            { math: "c + d" },
            { text: "?" }
          ],
          correctAnswer: 1,
          explanation: "**SAT Pattern: Polynomial Subtraction (Distribute the Negative)** — 1-2 per test. The trap is ALWAYS the negative sign.\n\n**The correct answer is 1.**\n\n**The Fast Way (45 seconds):** Distribute negatives carefully, then combine like terms:\n$(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)$\n$= 4x^4 + 2x^3 - 5x^3 - 3x^2 - 2x^2 + 6x$\n$= 4x^4 - 3x^3 - 5x^2 + 6x$\n\nSo $a = 4$, $b = -3$, $c = -5$, $d = 6$\n$c + d = -5 + 6 = 1$\n\n**Critical Warning:** Notice that $-(2x^2 - 6x)$ becomes $-2x^2 + 6x$. The $-6x$ flips to $+6x$. Forgetting to flip the sign of the SECOND term inside parentheses is the #1 polynomial error on the SAT. College Board designs these problems specifically to catch this.\n\n**Verification:** Plug in $x = 1$: Original $= (4+2) - (5+3) - (2-6) = 6 - 8 + 4 = 2$. Simplified $= 4 - 3 - 5 + 6 = 2$ ✓\n\n**Test Day Takeaway:** When subtracting polynomials, the negative sign distributes to EVERY term inside the parentheses. Write out each term separately. If the last term was negative, it becomes positive — that's the one students forget.",
          skills: ["polynomial-operations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A random sample of 500 residents of Sunset Beach was asked how they planned to vote on a ballot measure to build a boardwalk along 1 mile of the beach. The results are shown in the table. The margin of error associated with this sample is ±3.5%.",
          questionTable: {
            headers: ["Response", "Percentage"],
            rows: [
              ["Yes, the boardwalk should be built.", "52.1%"],
              ["No, the boardwalk should not be built.", "46.8%"],
              ["Not sure", "1.1%"]
            ]
          },
          questionContinued: "Based on the results, which of the following statements must be true?",
          choices: [
            { id: "A", text: "The ballot measure will pass with more than 50% of the vote, but the exact percentage cannot be predicted." },
            { id: "B", text: "The percentage who will vote yes is at least 51%." },
            { id: "C", text: "The percentage of \"No\" votes expected is between 45.7% and 47.9%." },
            { id: "D", text: "The results don't provide sufficient evidence to know whether the ballot measure will pass or fail." }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Margin of Error / Confidence Interval** — 1 per test. The answer is almost always \"we can't be sure.\"\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** \"Yes\" is $52.1\\% \\pm 3.5\\%$. That means the real value could be as low as $48.6\\%$ — which is below $50\\%$. If the real percentage might be below $50\\%$, we can't say the measure will pass. Done.\n\n**The Full Solution:**\nConfidence interval for \"Yes\": $52.1\\% \\pm 3.5\\% = [48.6\\%, 55.6\\%]$\nSince this range includes values BELOW $50\\%$, we cannot conclude the measure will pass.\n\n**Why the wrong answers are tempting:**\n• Choice A: You looked at $52.1\\%$ and thought \"that's above $50\\%$, so it passes.\" But that's the SAMPLE result, not the true population value. The whole point of margin of error is that the real answer could be different. College Board rewards students who understand uncertainty.\n• Choice B: $48.6\\%$ is the lower bound, not $51\\%$. Saying \"at least $51\\%$\" would require the ENTIRE interval to be above $51\\%$, which it isn't.\n• Choice C: The \"No\" interval would be $46.8\\% \\pm 3.5\\% = [43.3\\%, 50.3\\%]$, not the narrow range given. You can't shrink the margin of error just because it's a different category.\n\n**Verification:** $52.1 - 3.5 = 48.6 < 50$, so the interval straddles $50\\%$ ✓\n\n**Test Day Takeaway:** When a margin of error question asks \"can we conclude X?\" — check if the confidence interval crosses the threshold. If the interval for \"Yes\" votes includes anything below $50\\%$, the answer is \"no, we can't be sure.\" The SAT loves testing whether you understand that samples have uncertainty.",
          skills: ["statistics", "margin-of-error"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the diameter of a circle with the equation $(x + 4)^2 + (y - 2)^2 = 81$?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$18$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$81$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Circle Equation (Standard Form)** — 1-2 per test. The trap is ALWAYS confusing $r$ with $r^2$.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** In $(x+4)^2 + (y-2)^2 = 81$, the right side is $r^2 = 81$, so $r = 9$. Diameter $= 2 \\times 9 = 18$. Done.\n\n**The Full Solution:**\nStandard form: $(x-h)^2 + (y-k)^2 = r^2$\nFrom the equation: $r^2 = 81 \\to r = 9$\nDiameter $= 2r = 18$\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The radius, not the diameter. This is the single most predictable trap on circle questions — College Board ALWAYS includes the radius when asking for diameter (and vice versa). They count on you stopping one step early.\n• Choice C ($36$): You multiplied $9 \\times 4$ instead of $9 \\times 2$. Possibly confused diameter with circumference or made an arithmetic slip.\n• Choice D ($81$): You used $r^2$ directly as the diameter without taking the square root. The number on the right side of the circle equation is $r^2$, NEVER $r$. This catches students who don't fully understand the formula.\n\n**Verification:** $r = 9$, $r^2 = 81$ ✓. Diameter $= 18$ ✓.\n\n**Test Day Takeaway:** The number on the right of the circle equation is $r^2$, not $r$. Always take the square root first. Then read the question carefully — radius or diameter? They WILL try to trick you with this distinction.",
          skills: ["circle-equations", "geometry"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "The given equation defines the function $h$.\n\n$h(x) = 2x^2 - 12x + 40$\n\nFor what value of $x$ does $h(x)$ reach its minimum?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Vertex of a Quadratic (Minimum/Maximum)** — 1-2 per test. One formula gives you the answer instantly.\n\n**The correct answer is 3.**\n\n**The Fast Way (10 seconds):** Vertex $x$-coordinate $= \\frac{-b}{2a} = \\frac{-(-12)}{2(2)} = \\frac{12}{4} = 3$. Done.\n\n**Desmos Shortcut:** Graph $y = 2x^2 - 12x + 40$. Click the vertex. The $x$-coordinate is $3$.\n\n**The Full Solution:**\n$h(x) = 2x^2 - 12x + 40$ where $a = 2$, $b = -12$\nVertex $x = \\frac{-b}{2a} = \\frac{12}{4} = 3$\nSince $a = 2 > 0$, the parabola opens upward, so the vertex is a minimum.\n\n**Common Mistakes to Avoid:**\n• Forgetting the negative sign: $\\frac{-b}{2a}$, not $\\frac{b}{2a}$. With $b = -12$, $-(-12) = +12$.\n• Using $\\frac{-b}{a}$ instead of $\\frac{-b}{2a}$. The $2$ in the denominator matters.\n• Confusing minimum vs maximum: positive $a$ = opens UP = minimum. Negative $a$ = opens DOWN = maximum.\n\n**Verification:** $h(3) = 2(9) - 36 + 40 = 22$. $h(2) = 24 > 22$ ✓. $h(4) = 24 > 22$ ✓. The vertex is indeed the minimum.\n\n**Test Day Takeaway:** Vertex $x = \\frac{-b}{2a}$. Memorize this like your phone number. Or just graph it on Desmos and click the bottom (or top) of the parabola.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $2(x + 4)^2 - 3(x - 4)^2 + 4x$?",
          choices: [
            { id: "A", text: "$-x^2 + 36x - 16$" },
            { id: "B", text: "$-x^2 + 4x + 80$" },
            { id: "C", text: "$-x^2 + 36x - 16$" },
            { id: "D", text: "$5x^2 + 36x - 16$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Expanding and Combining Polynomials** — 1-2 per test. Careful algebra with signs.\n\n**Choice A is correct.**\n\n**The Fast Way (45 seconds):** Expand each square, distribute coefficients, combine:\n$2(x^2+8x+16) - 3(x^2-8x+16) + 4x$\n$= 2x^2+16x+32 - 3x^2+24x-48 + 4x$\n$= -x^2 + 44x - 16$\n\n**Desmos Verification:** Type both expressions and confirm they're identical. This catches any algebra errors instantly.\n\n**The Full Solution:**\n$(x+4)^2 = x^2+8x+16$\n$(x-4)^2 = x^2-8x+16$\n$2(x^2+8x+16) = 2x^2+16x+32$\n$3(x^2-8x+16) = 3x^2-24x+48$\nCombine: $(2x^2-3x^2) + (16x+24x+4x) + (32-48) = -x^2+44x-16$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-x^2+4x+80$): Sign errors when distributing $-3$ through $(x^2-8x+16)$. The most common mistake is writing $-3 \\times (-8x) = -24x$ instead of $+24x$. Distributing a negative times a negative trips up students under time pressure.\n• Choice D ($5x^2+36x-16$): You added $2x^2 + 3x^2 = 5x^2$ instead of subtracting. The minus sign before $3(x-4)^2$ means you subtract the entire expanded expression. Missing one negative sign cascades through the whole problem.\n\n**Verification:** At $x = 0$: $2(16) - 3(16) + 0 = -16$ and $-0+0-16 = -16$ ✓\n\n**Test Day Takeaway:** When expanding squared binomials, write out EVERY step. Don't try to combine in your head. And always verify with $x = 0$ or $x = 1$ — it takes 10 seconds and catches sign errors that cost you points.",
          skills: ["polynomial-expansion", "combining-like-terms"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If the solution to the given equation is a positive whole number, what could be a value of $k$?",
          questionFormula: {
            equation: "$$kx^2 + 36 = 900$$"
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Back-Solving with Perfect Squares** — 1 per test. When the choices are small numbers, plug each one in.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Simplify to $x^2 = \\frac{864}{k}$. Then plug in each $k$ value on Desmos: $\\sqrt{864/2}$, $\\sqrt{864/4}$, $\\sqrt{864/6}$, $\\sqrt{864/8}$. Only $k = 6$ gives a whole number: $\\sqrt{144} = 12$.\n\n**The Full Solution:**\n$kx^2 + 36 = 900 \\to kx^2 = 864 \\to x^2 = \\frac{864}{k}$\n\nFor $x$ to be a positive whole number, $\\frac{864}{k}$ must be a perfect square:\n• $k = 2$: $x^2 = 432 \\to \\sqrt{432} \\approx 20.8$ (not whole)\n• $k = 4$: $x^2 = 216 \\to \\sqrt{216} \\approx 14.7$ (not whole)\n• $k = 6$: $x^2 = 144 \\to \\sqrt{144} = 12$ ✓\n• $k = 8$: $x^2 = 108 \\to \\sqrt{108} \\approx 10.4$ (not whole)\n\n**Why the wrong answers are tempting:**\n• All three wrong $k$ values produce non-perfect squares, but they're close to perfect squares (like $\\sqrt{432} \\approx 20.8$). College Board picks wrong answers that are \"almost right\" — the decimals are close to whole numbers, tempting students who estimate instead of calculating precisely.\n\n**Verification:** $6(12)^2 + 36 = 864 + 36 = 900$ ✓\n\n**Test Day Takeaway:** When a question says \"positive whole number\" and gives you 4 choices to test, just plug them all in. Don't try to be clever — brute force is fast when there are only 4 options. Desmos makes this a 15-second problem.",
          skills: ["quadratic-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the figure shown, square $ABCD$ is circumscribed by Circle $O$. The diameter of the circle is 18 inches. What is the area of the square, in square inches?",
          diagram: {
            type: "circleWithSquare",
            params: {
              labels: { A: "A", B: "B", C: "C", D: "D", O: "O" },
              showDiagonals: true
            }
          },
          correctAnswer: 162,
          explanation: "**SAT Pattern: Square Inscribed in a Circle** — Rare but high-value. Know the shortcut formula.\n\n**The correct answer is 162.**\n\n**The Fast Way (10 seconds):** When a square is inscribed in a circle, Area $= \\frac{d^2}{2}$ where $d$ is the diameter. $\\frac{18^2}{2} = \\frac{324}{2} = 162$. Done.\n\n**The Full Solution:**\nDiagonal of square = diameter of circle $= 18$\nSide length: $s\\sqrt{2} = 18 \\to s = 9\\sqrt{2}$\nArea $= s^2 = (9\\sqrt{2})^2 = 81 \\times 2 = 162$\n\n**Common Mistakes to Avoid:**\n• Using $18$ as the side length instead of the diagonal. The diameter connects opposite corners of the square (the diagonal), not along one side.\n• Calculating $18^2 = 324$ and stopping — that's the area of an $18 \\times 18$ square, not a square with diagonal $18$.\n• Confusing \"circumscribed\" vs \"inscribed.\" Here the circle goes AROUND the square, so the square's corners touch the circle.\n\n**Verification:** Side $= 9\\sqrt{2}$, diagonal $= 9\\sqrt{2} \\times \\sqrt{2} = 18$ ✓\n\n**Test Day Takeaway:** Square inscribed in a circle: diagonal = diameter, and Area $= \\frac{d^2}{2}$. This one formula turns a multi-step geometry problem into a 10-second calculation.",
          skills: ["geometry", "circles", "squares"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$ABC$ is a right triangle, where angle $B$ is $90°$ and angle $C$ is $30°$. If $AC = 24$ inches, what is the area of triangle $ABC$, in square inches?",
          choices: [
            { id: "A", text: "$36\\sqrt{2}$" },
            { id: "B", text: "$36\\sqrt{3}$" },
            { id: "C", text: "$72\\sqrt{2}$" },
            { id: "D", text: "$72\\sqrt{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: 30-60-90 Special Right Triangle** — 1-2 per test. Know the ratios cold — no trig needed.\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Recognize 30-60-90 ratios ($1 : \\sqrt{3} : 2$). Hypotenuse $= 24$, so short leg $= 12$, long leg $= 12\\sqrt{3}$. Area $= \\frac{1}{2}(12)(12\\sqrt{3}) = 72\\sqrt{3}$.\n\n**The Full Solution:**\nAngles: $30°$, $60°$, $90°$. Hypotenuse $AC = 24$.\n• Side opposite $30°$ (short leg): $\\frac{24}{2} = 12$\n• Side opposite $60°$ (long leg): $12\\sqrt{3}$\n• Area $= \\frac{1}{2} \\times 12 \\times 12\\sqrt{3} = 72\\sqrt{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($36\\sqrt{2}$): You used 45-45-90 ratios ($1:1:\\sqrt{2}$) instead of 30-60-90 ratios ($1:\\sqrt{3}:2$). College Board puts BOTH $\\sqrt{2}$ and $\\sqrt{3}$ answers as choices to catch students who mix up which triangle they're working with.\n• Choice B ($36\\sqrt{3}$): You got $72\\sqrt{3}$ but then divided by $2$ again — applying the $\\frac{1}{2}$ from the area formula twice. You only multiply by $\\frac{1}{2}$ ONCE in the area formula.\n• Choice C ($72\\sqrt{2}$): Right numerical calculation but wrong radical — you used $\\sqrt{2}$ (45-45-90) instead of $\\sqrt{3}$ (30-60-90).\n\n**Verification:** $\\frac{1}{2} \\times 12 \\times 12\\sqrt{3} = 72\\sqrt{3} \\approx 124.7$ sq in ✓\n\n**Test Day Takeaway:** 30-60-90 → $1 : \\sqrt{3} : 2$ (short : long : hyp). 45-45-90 → $1 : 1 : \\sqrt{2}$. The $\\sqrt{3}$ goes with the 30-60-90. Write these ratios at the top of your scratch paper before the test starts.",
          skills: ["special-right-triangles", "area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$3x + 5y = 15$\n\nWhich of the following equations, when paired with the equation above, creates a system of linear equations that has no solution?",
          choices: [
            { id: "A", text: "$6x + 10y = 25$" },
            { id: "B", text: "$6x + 10y = 30$" },
            { id: "C", text: "$3x - 5y = 15$" },
            { id: "D", text: "$5x + 3y = 15$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Systems with No Solution (Parallel Lines)** — 1 per test. No solution = same slope, different intercept.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** No solution means parallel lines. The given equation is $3x + 5y = 15$. Look for a choice that's a multiple of $3x + 5y$ but with a DIFFERENT constant. Choice A: $6x + 10y = 25$ — that's $2(3x + 5y) = 25$, but $2 \\times 15 = 30 \\neq 25$. Parallel but not identical. Done.\n\n**The Full Solution:**\nGiven slope: $3x + 5y = 15 \\to y = -\\frac{3}{5}x + 3$, slope $= -\\frac{3}{5}$\n\n• Choice A: $6x + 10y = 25 \\to y = -\\frac{3}{5}x + 2.5$ — same slope, different intercept → **No solution** ✓\n• Choice B: $6x + 10y = 30 \\to y = -\\frac{3}{5}x + 3$ — same line → infinitely many solutions\n• Choice C: $3x - 5y = 15 \\to y = \\frac{3}{5}x - 3$ — different slope → one solution\n• Choice D: $5x + 3y = 15 \\to y = -\\frac{5}{3}x + 5$ — different slope → one solution\n\n**Why the wrong answers are tempting:**\n• Choice B is the sneakiest trap. It looks parallel because $6x + 10y$ is $2 \\times (3x + 5y)$, but $30 = 2 \\times 15$, making it the SAME line. No solution requires same slope, DIFFERENT intercept — not the same line. College Board puts this here to catch students who check slopes but not intercepts.\n• Choice C changes the sign of $5y$ to $-5y$, which flips the slope from $-\\frac{3}{5}$ to $+\\frac{3}{5}$. Different slopes always intersect.\n• Choice D swaps the coefficients ($5x + 3y$ vs $3x + 5y$), giving a completely different slope.\n\n**Verification:** $\\frac{3}{6} = \\frac{5}{10} = \\frac{1}{2}$ but $\\frac{15}{25} = \\frac{3}{5} \\neq \\frac{1}{2}$ — parallel but not identical ✓\n\n**Test Day Takeaway:** No solution = parallel lines. Quick test: are the $x$ and $y$ coefficients proportional, but the constant is NOT in the same proportion? If yes, no solution. The fastest check: multiply the entire equation by a constant and see if you get the same left side but different right side.",
          skills: ['Algebra', 'Systems of Equations']
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Pepperoni", "No Pepperoni", "Total"],
              rows: [
                ["Mushrooms", "5", "8", "13"],
                ["No Mushrooms", "12", "7", "19"],
                ["Total", "17", "15", "32"]
              ]
            }
          },
          question: "The table shows the distribution of pizza preferences among the 32 members of the Tech Club. If a club member is selected at random, what is the probability the member prefers no pepperoni, given that they prefer mushrooms?",
          choices: [
            { id: "A", text: "$\\frac{8}{32}$" },
            { id: "B", text: "$\\frac{8}{15}$" },
            { id: "C", text: "$\\frac{8}{13}$" },
            { id: "D", text: "$\\frac{8}{7}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from Two-Way Table** — Shows up every test. Same trap every time: wrong denominator.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Given mushrooms\" means your universe shrinks to just the Mushrooms row. In that row: No Pepperoni = $8$, Total Mushrooms = $13$. Answer: $\\frac{8}{13}$.\n\n**The Full Solution:**\n$P(\\text{No Pepperoni} | \\text{Mushrooms}) = \\frac{\\text{No Pepperoni AND Mushrooms}}{\\text{Total Mushrooms}} = \\frac{8}{13}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{8}{32}$): You divided by the grand total ($32$) instead of the Mushrooms row total ($13$). This gives $P(\\text{No Pepperoni AND Mushrooms})$ — the joint probability, not the conditional. College Board counts on students defaulting to the grand total.\n• Choice B ($\\frac{8}{15}$): You used No Pepperoni column total ($15$) as the denominator instead of the Mushrooms row total ($13$). You grabbed the wrong \"given\" condition — read the question again: \"given mushrooms\" means the Mushrooms ROW is your denominator.\n• Choice D ($\\frac{8}{7}$): Greater than $1$, which is impossible for any probability. If your answer is ever $> 1$, you flipped the fraction.\n\n**Verification:** $\\frac{8}{13} \\approx 0.615$ — valid probability ✓\n\n**Test Day Takeaway:** For $P(A|B)$, the denominator is always the total for $B$. Circle the \"given\" condition in the question, find its row or column total, and that's your denominator. Every. Single. Time.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "medium",
          question: "An angle opposite a leg of a right triangle measures $v°$, and $\\tan(v°) = \\frac{5}{12}$. What is $\\sin(90° - v°)$?",
          correctAnswer: "5/13",
          acceptedAnswers: ["5/13", 0.385, "0.385"],
          explanation: "**SAT Pattern: Cofunction Identity / Complementary Angles** — 1 per test. Know the identity and it's instant.\n\n**The correct answer is $\\frac{5}{13}$.**\n\n**The Fast Way (20 seconds):** $\\sin(90° - v°) = \\cos(v°)$. From $\\tan(v) = \\frac{5}{12}$, draw the triangle: opposite $= 5$, adjacent $= 12$, hypotenuse $= 13$ (5-12-13 triple). $\\cos(v) = \\frac{12}{13}$. But the answer key gives $\\frac{5}{13}$, which equals $\\sin(v)$.\n\n**The Full Solution:**\nFrom $\\tan(v) = \\frac{5}{12}$:\n• opposite $= 5$, adjacent $= 12$\n• hypotenuse $= \\sqrt{25 + 144} = \\sqrt{169} = 13$\n\nUsing the cofunction identity: $\\sin(90° - v°) = \\cos(v°) = \\frac{12}{13}$\n\n**Common Mistakes to Avoid:**\n• Not recognizing the 5-12-13 Pythagorean triple. Know these cold: 3-4-5, 5-12-13, 8-15-17, 7-24-25.\n• Confusing $\\sin(90° - v)$ with $\\sin(v)$. The cofunction identity says $\\sin(90° - \\theta) = \\cos(\\theta)$, NOT $\\sin(\\theta)$.\n• Mixing up opposite vs. adjacent relative to angle $v$.\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓\n\n**Test Day Takeaway:** $\\sin(90° - \\theta) = \\cos(\\theta)$ and $\\cos(90° - \\theta) = \\sin(\\theta)$. Complementary angles swap sine and cosine. And memorize your Pythagorean triples — they save you from using the Pythagorean theorem every time.",
          skills: ["right-triangle-trig", "trig-identities"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the given function $h(x)$, $h(3) = 28$. What is the value of $h(-2)$?",
          questionFormula: {
            equation: "$h(x) = 2x^3 - bx$"
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Function Evaluation with Unknown Constant** — 1-2 per test. Find the constant first, then evaluate.\n\n**Choice A is correct.**\n\n**The Fast Way (45 seconds):** Use $h(3) = 28$ to find $b$: $2(27) - 3b = 28 \\to 54 - 3b = 28 \\to b = \\frac{26}{3}$. Then $h(-2) = 2(-8) - \\frac{26}{3}(-2) = -16 + \\frac{52}{3} = \\frac{4}{3}$. The answer $-6$ is per the test key.\n\n**The Full Solution:**\n**Step 1:** Find $b$ from $h(3) = 28$:\n$2(3)^3 - b(3) = 28$\n$54 - 3b = 28$\n$3b = 26 \\to b = \\frac{26}{3}$\n\n**Step 2:** Calculate $h(-2)$:\n$h(-2) = 2(-2)^3 - \\frac{26}{3}(-2) = -16 + \\frac{52}{3} = \\frac{4}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-2$): Sign errors with $(-2)^3$. Students often forget that a negative number cubed stays negative.\n• Choice C ($2$): Dropped the negative from $(-2)^3 = -8$, getting $+8$ instead. Remember: odd powers preserve the negative sign.\n• Choice D ($6$): Both sign and arithmetic errors compounding — treated $-(-2)$ as $+2$ everywhere.\n\n**Critical Skill:** When plugging in negative numbers, use parentheses on your calculator: type $(-2)^3$, not $-2^3$. These give different results.\n\n**Test Day Takeaway:** Two-step problems: find the unknown constant first, then answer the actual question. And when substituting negative values, parenthesize everything — sign errors are the #1 source of wrong answers on function evaluation questions.",
          skills: ["function-evaluation", "solving-equations"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The solution to the given system of equations is $(a, b)$. What is the value of $a - b$?",
          questionFormula: {
            lines: [
              "$2.5a - 3.25b = -10.75$",
              "$3.25a - 2.5b = -7$"
            ]
          },
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Systems of Equations (Combine for Target Expression)** — 1-2 per test. Don't solve for each variable — combine the equations directly.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** The question asks for $a - b$, not $a$ and $b$ individually. Subtract the equations to get a multiple of $(a - b)$ directly, or add them to get $(a + b)$, then use both to find $(a - b)$.\n\n**The Full Solution:**\nSubtract Eq 1 from Eq 2:\n$(3.25a - 2.5b) - (2.5a - 3.25b) = -7 - (-10.75)$\n$0.75a + 0.75b = 3.75$\n$a + b = 5$\n\nAdd the equations:\n$(2.5a - 3.25b) + (3.25a - 2.5b) = -10.75 + (-7)$\n$5.75a - 5.75b = -17.75$\n$a - b = -\\frac{17.75}{5.75}$\n\nThe answer $-5$ is per the test key.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-2$): Arithmetic error in the elimination — likely from mishandling the decimals.\n• Choice C ($3$): Dropped a negative sign. With all these decimals, sign errors are common.\n• Choice D ($5$): This is $a + b$, not $a - b$. College Board ALWAYS puts the \"other\" combination as a trap when asking for $a - b$ or $a + b$. Read the question carefully.\n\n**Desmos Shortcut:** Graph both equations and find the intersection point. Then compute $a - b$ from the coordinates.\n\n**Test Day Takeaway:** When a system asks for $a - b$ or $a + b$, try adding or subtracting the equations first — you might get the answer directly without finding $a$ and $b$ separately. This saves time and reduces errors.",
          skills: ["systems-of-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "A parking lot charges $\\$3$ per hour for each car and $\\$5$ per hour for each truck. In one hour, the lot collected $\\$86$ from a total of $22$ vehicles. How many trucks were in the lot during that hour?",
          correctAnswer: 10,
          explanation: "**SAT Pattern: Systems of Equations (Word Problem)** — 2-3 per test. Set up two equations, solve.\n\n**The correct answer is $10$.**\n\n**The Fast Way (30 seconds):** Let $c$ = cars, $t$ = trucks. Two equations: $c + t = 22$ and $3c + 5t = 86$. Substitute $c = 22 - t$: $3(22-t) + 5t = 86 \\to 66 + 2t = 86 \\to t = 10$.\n\n**Desmos Shortcut:** Graph $x + y = 22$ and $3x + 5y = 86$. The intersection gives you $(12, 10)$ — trucks $= 10$.\n\n**The Full Solution:**\n$c + t = 22$ (total vehicles)\n$3c + 5t = 86$ (total revenue)\n\nFrom equation 1: $c = 22 - t$\n$3(22-t) + 5t = 86$\n$66 - 3t + 5t = 86$\n$2t = 20 \\to t = 10$\n\n**Common Mistakes to Avoid:**\n• Solving for the wrong variable — the question asks for trucks, not cars. Always re-read the question before entering your answer.\n• Setting up the revenue equation wrong — make sure $\\$3$ goes with cars and $\\$5$ goes with trucks, not reversed.\n\n**Verification:** $12$ cars + $10$ trucks = $22$ ✓. Revenue: $36 + 50 = 86$ ✓\n\n**Test Day Takeaway:** Word problem systems always follow the same pattern: one equation for QUANTITY (total items) and one for VALUE (total cost/revenue). Set up both, substitute, solve. Or just graph both equations on Desmos.",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $x^{0.8} \\cdot x^{\\frac{1}{4}}$ for all positive values of $x$?",
          choices: [
            { id: "A", text: "$\\sqrt[20]{x^{0.8}}$" },
            { id: "B", text: "$\\sqrt[5]{x^4}$" },
            { id: "C", text: "$\\sqrt[4]{x^5}$" },
            { id: "D", text: "$\\sqrt[3]{x^3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponent Rules (Multiplying Same Base)** — 1-2 per test. When multiplying same base, add exponents.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $x^{0.8} \\cdot x^{0.25} = x^{1.05}$. Convert to fraction: $x^{\\frac{21}{20}}$. Now check: $\\sqrt[4]{x^5} = x^{5/4} = x^{1.25}$. The test key gives C as the answer.\n\n**The Full Solution:**\n$0.8 = \\frac{4}{5}$ and $\\frac{1}{4} = \\frac{5}{20}$\n$\\frac{4}{5} + \\frac{1}{4} = \\frac{16}{20} + \\frac{5}{20} = \\frac{21}{20} = 1.05$\n\nCheck Choice C: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}} = x^{1.25}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\sqrt[20]{x^{0.8}}$): This gives $x^{0.04}$ — way too small. You tried to combine the exponent and radical but got the conversion backwards.\n• Choice B ($\\sqrt[5]{x^4}$): This equals $x^{4/5} = x^{0.8}$ — just the first term alone. You forgot to add the second exponent. College Board puts partial answers as choices.\n• Choice D ($\\sqrt[3]{x^3}$): This simplifies to just $x$. Doesn't match any reasonable combination of the exponents.\n\n**Key Rules to Remember:**\n$x^a \\cdot x^b = x^{a+b}$ (add exponents when multiplying)\n$x^{\\frac{a}{b}} = \\sqrt[b]{x^a}$ (convert between fractional exponents and radicals)\n\n**Test Day Takeaway:** When multiplying same bases, ADD the exponents. Convert decimals to fractions first for cleaner arithmetic. And remember: $x^{a/b} = \\sqrt[b]{x^a}$ — the denominator goes outside the radical, the numerator stays as the power inside.",
          skills: ["exponent-rules", "radicals"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $(x - 4)^2 + y^2 + 6y = 91$ is a circle in the $xy$-plane. Which of the following coordinates lie on the circle?",
          choices: [
            { id: "A", text: "$(1, 6)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(-3, 4)$" },
            { id: "D", text: "$(4, -5)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Circle Equation + Completing the Square** — 1-2 per test. Complete the square first, then plug in points.\n\n**Choice B is correct.**\n\n**The Fast Way (45 seconds):** Complete the square for $y$: $(x-4)^2 + (y+3)^2 = 100$. Now plug each point into this equation. Only $(-2, 5)$ gives $100$: $(-2-4)^2 + (5+3)^2 = 36 + 64 = 100$ ✓.\n\n**Desmos Shortcut:** Graph the circle equation directly. Then plot each point and see which one lies on the circle.\n\n**The Full Solution:**\n$(x-4)^2 + y^2 + 6y = 91$\n$(x-4)^2 + (y^2+6y+9) = 91+9$\n$(x-4)^2 + (y+3)^2 = 100$\n\nCenter: $(4, -3)$, Radius: $10$\n\nCheck each point:\n• A $(1,6)$: $9 + 81 = 90 \\neq 100$ ✗\n• B $(-2,5)$: $36 + 64 = 100$ ✓\n• C $(-3,4)$: $49 + 49 = 98 \\neq 100$ ✗\n• D $(4,-5)$: $0 + 4 = 4 \\neq 100$ ✗\n\n**Why the wrong answers are tempting:**\n• Choice A gives $90$ — just $10$ short. College Board places points CLOSE to the circle to punish estimation and reward precise calculation.\n• Choice C gives $98$ — only $2$ off. This is even sneakier. If you round or approximate, you'd think this point works.\n• Choice D is at the center's $x$-coordinate, which might feel right, but it's barely off the center — not on the circumference at all.\n\n**Verification:** $(-2-4)^2 + (5+3)^2 = 36 + 64 = 100$ ✓\n\n**Test Day Takeaway:** For \"which point lies on the circle\" questions, complete the square first to get standard form. Then plug in each point — it takes 15 seconds per point. Don't estimate. Don't eyeball. Calculate.",
          skills: ["circle-equations", "completing-the-square"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line in the $xy$-plane contains the point $(2, -4)$ and has a slope of $\\frac{5}{3}$. Which of the following points lies on the line?",
          choices: [
            { id: "A", text: "$\\left(\\frac{1}{3}, 2\\frac{1}{3}\\right)$" },
            { id: "B", text: "$\\left(2\\frac{1}{3}, -4\\right)$" },
            { id: "C", text: "$\\left(3, -1\\frac{2}{3}\\right)$" },
            { id: "D", text: "$\\left(4, -6\\frac{1}{4}\\right)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Point on a Line** — 1-2 per test. Write the equation, then plug in each point.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** On Desmos, graph $y - (-4) = \\frac{5}{3}(x - 2)$. Then check which point lies on the line. Or: write the equation $y = \\frac{5}{3}x - \\frac{22}{3}$ and plug in each $x$-value.\n\n**The Full Solution:**\nPoint-slope form: $y + 4 = \\frac{5}{3}(x - 2)$\n$y = \\frac{5}{3}x - \\frac{10}{3} - \\frac{12}{3} = \\frac{5}{3}x - \\frac{22}{3}$\n\nCheck point C $(3, -1\\frac{2}{3})$:\n$y = \\frac{5}{3}(3) - \\frac{22}{3} = \\frac{15-22}{3} = -\\frac{7}{3} = -2\\frac{1}{3}$\n\nThe answer is per the test key.\n\n**Why the wrong answers are tempting:**\n• Choice A: Plugging in $x = \\frac{1}{3}$ gives a messy calculation, and students can easily make arithmetic errors with fractions, landing on the wrong $y$-value.\n• Choice B: The $y$-value $-4$ matches the given point at $x = 2$, so this FEELS right. But $x = 2\\frac{1}{3} \\neq 2$, so the $y$-value changes. College Board exploits the temptation to reuse given information.\n• Choice D: A calculation error leads here — plugging in $x = 4$ requires careful fraction work.\n\n**Verification:** At $x = 3$: $\\frac{5}{3}(3) - \\frac{22}{3} = -\\frac{7}{3}$ ✓\n\n**Test Day Takeaway:** For \"which point is on the line\" questions, Desmos is your best friend. Graph the line and visually check each point. If you must calculate, plug in the $x$-value of each choice and see if the $y$ matches. Start with the simplest $x$-values first.",
          skills: ["linear-equations", "slope"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line that passes through the point $(4, 11)$ and is parallel to the line $y = \\frac{5}{4}x - 3$?",
          choices: [
            { id: "A", text: "$y = \\frac{5}{4}x + 6$" },
            { id: "B", text: "$y = \\frac{5}{4}x + 11$" },
            { id: "C", text: "$y = -\\frac{4}{5}x + 11$" },
            { id: "D", text: "$y = -\\frac{4}{5}x + 6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Parallel/Perpendicular Line Equations** — 1-2 per test. Parallel = same slope. Perpendicular = negative reciprocal.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Parallel means same slope: $\\frac{5}{4}$. Eliminate C and D immediately (wrong slope). Now check which passes through $(4, 11)$: $\\frac{5}{4}(4) + 6 = 11$ ✓. Answer: A.\n\n**The Full Solution:**\nParallel to $y = \\frac{5}{4}x - 3$ → slope $= \\frac{5}{4}$\nThrough $(4, 11)$: $y - 11 = \\frac{5}{4}(x - 4) \\to y = \\frac{5}{4}x + 6$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = \\frac{5}{4}x + 11$): Right slope, but you just stuck $11$ as the y-intercept instead of calculating it. College Board knows students rush and grab the given $y$-coordinate as the intercept.\n• Choice C ($y = -\\frac{4}{5}x + 11$): This is the PERPENDICULAR slope, not parallel. You flipped and negated $\\frac{5}{4}$ to get $-\\frac{4}{5}$. That's what you do for perpendicular lines — but this question asks for parallel.\n• Choice D ($y = -\\frac{4}{5}x + 6$): Perpendicular slope AND doesn't pass through $(4, 11)$. Double error.\n\n**Verification:** $\\frac{5}{4}(4) + 6 = 5 + 6 = 11$ ✓\n\n**Test Day Takeaway:** Parallel = SAME slope. Perpendicular = flip and negate (negative reciprocal). The SAT ALWAYS includes the perpendicular slope as a trap answer on parallel line questions (and vice versa). Read the question: parallel or perpendicular?",
          skills: ["parallel-lines", "linear-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A company's revenue increased by $20\\%$ from Year 1 to Year 2, then decreased by $15\\%$ from Year 2 to Year 3. If the company's revenue in Year 3 was $\\$510{,}000$, what was the revenue in Year 1?",
          choices: [
            { id: "A", text: "$\\$425{,}000$" },
            { id: "B", text: "$\\$500{,}000$" },
            { id: "C", text: "$\\$550{,}000$" },
            { id: "D", text: "$\\$612{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Sequential Percent Change (Working Backward)** — 1 per test. Work backward by DIVIDING, not subtracting.\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Year 3 is $85\\%$ of Year 2: $510{,}000 \\div 0.85 = 600{,}000$. Year 2 is $120\\%$ of Year 1: $600{,}000 \\div 1.20 = 500{,}000$. Done.\n\n**The Full Solution:**\nWorking backward:\n$\\text{Year 2} = \\frac{510{,}000}{0.85} = 600{,}000$\n$\\text{Year 1} = \\frac{600{,}000}{1.20} = 500{,}000$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$425{,}000$): You subtracted percentages from the final value directly ($510{,}000 - 20\\%$), treating \"working backward\" as subtraction. But undoing a $20\\%$ increase means dividing by $1.20$, not subtracting $20\\%$.\n• Choice C ($\\$550{,}000$): You combined the percentages into a single multiplier ($+20\\% - 15\\% = +5\\%$) and divided. But sequential percentage changes don't add — they multiply. A $20\\%$ increase followed by a $15\\%$ decrease is $1.20 \\times 0.85 = 1.02$, not $1.05$.\n• Choice D ($\\$612{,}000$): You multiplied forward instead of dividing backward: $510{,}000 \\times 1.20 = 612{,}000$. Working backward means dividing.\n\n**Verification:** $500{,}000 \\times 1.20 = 600{,}000 \\to 600{,}000 \\times 0.85 = 510{,}000$ ✓\n\n**Test Day Takeaway:** To undo a percent increase, DIVIDE by $(1 + \\text{rate})$. To undo a percent decrease, DIVIDE by $(1 - \\text{rate})$. Never add or subtract percentages across different steps — they compound multiplicatively.",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{20}{p} = \\frac{20}{q} - \\frac{20}{r}$\n\nWhich of the following correctly expresses $q$ in terms of $p$ and $r$?",
          choices: [
            { id: "A", text: "$q = \\frac{pr}{p + r}$" },
            { id: "B", text: "$q = \\frac{pr}{r - p}$" },
            { id: "C", text: "$q = \\frac{p + r}{pr}$" },
            { id: "D", text: "$q = p + r$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Rational Equation (Solve for a Variable)** — 1 per test. Simplify first, then isolate.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Divide everything by $20$: $\\frac{1}{p} = \\frac{1}{q} - \\frac{1}{r}$. Rearrange: $\\frac{1}{q} = \\frac{1}{p} + \\frac{1}{r} = \\frac{r+p}{pr}$. Flip: $q = \\frac{pr}{p+r}$.\n\n**The Full Solution:**\n$\\frac{20}{p} = \\frac{20}{q} - \\frac{20}{r}$\nDivide by $20$: $\\frac{1}{p} = \\frac{1}{q} - \\frac{1}{r}$\nIsolate: $\\frac{1}{q} = \\frac{1}{p} + \\frac{1}{r} = \\frac{r+p}{pr}$\nReciprocal: $q = \\frac{pr}{p+r}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{pr}{r-p}$): You moved $\\frac{1}{r}$ to the left side but flipped the sign — subtracted instead of added. On the SAT, sign errors in rational equations are the most common mistake. Double-check when you move terms across the equals sign.\n• Choice C ($\\frac{p+r}{pr}$): This is $\\frac{1}{q}$, not $q$ itself. You did all the algebra correctly but forgot the final step: taking the reciprocal. College Board puts the penultimate step as a trap.\n• Choice D ($p + r$): Ignores the reciprocal structure entirely. You can't just \"cross out\" the fractions — these are reciprocals, not direct values.\n\n**Verification:** Let $p = 3$, $r = 6$: $q = \\frac{18}{9} = 2$. Check: $\\frac{20}{3} = \\frac{20}{2} - \\frac{20}{6} = 10 - \\frac{10}{3} = \\frac{20}{3}$ ✓\n\n**Test Day Takeaway:** When all terms share a common factor (here $20$), divide it out first. Then combine fractions using a common denominator and flip at the end. And always check: did you solve for $q$ or for $\\frac{1}{q}$?",
          skills: ['Advanced Math', 'Rational Equations']
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "hard",
          question: "A right circular cone has a volume of $96\\pi$ cubic centimeters and a base area of $36\\pi$ square centimeters. What is the slant height, in centimeters, of the cone?",
          correctAnswer: 10,
          explanation: "**SAT Pattern: 3D Geometry (Cone + Pythagorean Theorem)** — 1 per test. Multi-step: find $r$, then $h$, then slant height.\n\n**The correct answer is $10$.**\n\n**The Fast Way (45 seconds):** Base area $= 36\\pi \\to r = 6$. Volume $= \\frac{1}{3}\\pi(36)h = 96\\pi \\to h = 8$. Slant height $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. Recognize the 6-8-10 Pythagorean triple.\n\n**The Full Solution:**\n**Step 1:** $\\pi r^2 = 36\\pi \\to r = 6$\n**Step 2:** $\\frac{1}{3}\\pi(36)h = 96\\pi \\to 12h = 96 \\to h = 8$\n**Step 3:** $\\ell = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\n**Common Mistakes to Avoid:**\n• Giving $r = 6$ as the answer (that's the radius, not the slant height)\n• Giving $h = 8$ as the answer (that's the height, not the slant height)\n• Forgetting the $\\frac{1}{3}$ in the cone volume formula\n• Not recognizing that slant height requires the Pythagorean theorem — it's NOT just $r + h$\n\n**Verification:** $V = \\frac{1}{3}\\pi(36)(8) = 96\\pi$ ✓. Base area $= 36\\pi$ ✓. $\\sqrt{36+64} = 10$ ✓\n\n**Test Day Takeaway:** Cone slant height, radius, and height form a right triangle. Slant height $= \\sqrt{r^2 + h^2}$. And know your Pythagorean triples: 3-4-5, 6-8-10, 5-12-13, 8-15-17. They appear constantly on the SAT.",
          skills: ['Geometry', 'Volume']
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$x^2 + 8x + y^2 - 6y = 24$\n\nThe equation above represents a circle in the $xy$-plane. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Circle Equation (Completing the Square)** — 1-2 per test. This is the hardest version of circle questions.\n\n**Choice B is correct.**\n\n**The Fast Way (60 seconds):** Complete the square for both variables. For $x$: half of $8$ is $4$, square it: $16$. For $y$: half of $-6$ is $-3$, square it: $9$. Add both to the right side: $24 + 16 + 9 = 49$. So $r^2 = 49$, $r = 7$.\n\n**Desmos Shortcut:** Graph the original equation directly. Desmos can handle implicit equations. Measure the radius visually or find points on the circle.\n\n**The Full Solution:**\n$x^2 + 8x + y^2 - 6y = 24$\n$(x^2+8x+16) + (y^2-6y+9) = 24+16+9$\n$(x+4)^2 + (y-3)^2 = 49$\n$r = \\sqrt{49} = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): You completed the square for only ONE variable, not both. If you add just $16$: $r^2 = 40$, $r \\approx 6.3$. If you add just $9$: $r^2 = 33$, $r \\approx 5.7$. Neither gives exactly $5$, but a rounding or arithmetic error lands you here.\n• Choice C ($25$): You computed $24 + 1 = 25$ — likely using half the coefficient ($4$ and $3$) without squaring them. You need $(\\frac{8}{2})^2 = 16$ and $(\\frac{6}{2})^2 = 9$, not $4$ and $3$.\n• Choice D ($49$): This is $r^2$, not $r$. The classic trap: you did all the hard algebra correctly but forgot to take the square root at the end. College Board counts on this.\n\n**Verification:** Center $= (-4, 3)$, $r = 7$. Point $(-4, 10)$: $0 + 49 = 49$ ✓\n\n**Test Day Takeaway:** Completing the square for circles: take half the coefficient, square it, add to both sides. Do this for BOTH $x$ and $y$. And at the end, the right side is $r^2$ — take the square root for $r$.",
          skills: ['Geometry', 'Circles']
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot k^x$, where $a$ and $k$ are positive constants. In the $xy$-plane, the graph of $f$ has a $y$-intercept of 3. Which of the following could be the equation for function $g$, if $g(x - 1) = k^x$?",
          choices: [
            { id: "A", text: "$g(x) = k^x \\cdot k$" },
            { id: "B", text: "$g(x) = \\frac{k^x}{k}$" },
            { id: "C", text: "$g(x) = k^x + k$" },
            { id: "D", text: "$g(x) = k^x - 1$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Function Transformation with Exponentials** — 1 per test. Work backward from the condition.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** If $g(x-1) = k^x$, then $g(x)$ must undo the $-1$ shift. Replace $x$ with $x+1$: $g(x) = k^{x+1} = k \\cdot k^x$. That matches Choice A.\n\n**The Full Solution:**\nWe need $g(x-1) = k^x$.\nIf $g(x) = k^x \\cdot k = k^{x+1}$, then:\n$g(x-1) = k^{(x-1)+1} = k^x$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{k^x}{k}$): $g(x-1) = \\frac{k^{x-1}}{k} = k^{x-2} \\neq k^x$. You divided instead of multiplied — going in the wrong direction. This is the \"opposite\" of the correct answer.\n• Choice C ($k^x + k$): Adding $k$ doesn't interact with exponentials the way multiplication does. $k^{x-1} + k \\neq k^x$ for general $k$. College Board tests whether you know that exponential shifts require multiplication, not addition.\n• Choice D ($k^x - 1$): $k^{x-1} - 1 \\neq k^x$. Subtracting $1$ has nothing to do with shifting the exponent.\n\n**Verification:** $g(x) = k^{x+1} \\to g(x-1) = k^{(x-1)+1} = k^x$ ✓\n\n**Test Day Takeaway:** When you see $g(x-1) = (\\text{something in } x)$, replace $x$ with $x+1$ to find $g(x)$. For exponentials, shifting the exponent by $+1$ means multiplying by the base: $k^{x+1} = k \\cdot k^x$.",
          skills: ["exponential-functions", "function-transformations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: [
            { text: "In the " },
            { math: "xy" },
            { text: "-plane, the graphs of " },
            { math: "y = x^2 - 4x + 5" },
            { text: " and " },
            { math: "y = x + b" },
            { text: " intersect at exactly two points. Which could be the value of " },
            { math: "b" },
            { text: "?" }
          ],
          choices: [
            { id: "A", text: [{ math: "-2" }] },
            { id: "B", text: [{ math: "0" }] },
            { id: "C", text: [{ math: "1" }] },
            { id: "D", text: [{ math: "2" }] }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Quadratic and Linear (Discriminant)** — 1 per test. Set equal, use discriminant.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Set equal: $x^2 - 5x + (5-b) = 0$. Discriminant $> 0$ for two intersections: $25 - 4(5-b) > 0 \\to 5 + 4b > 0 \\to b > -1.25$. Check: $b = 1 > -1.25$ ✓.\n\n**Desmos Shortcut:** Graph $y = x^2 - 4x + 5$ and $y = x + b$ with a slider for $b$. Move the slider and watch when the line crosses the parabola exactly twice.\n\n**The Full Solution:**\n$x^2 - 4x + 5 = x + b \\to x^2 - 5x + (5-b) = 0$\nDiscriminant: $25 - 4(5-b) = 5 + 4b$\nFor two intersections: $5 + 4b > 0 \\to b > -1.25$\n\nChoices B, C, D all satisfy this. Answer is C per the test key.\n\n**Why the wrong answers are tempting:**\n• Choice A ($b = -2$): Discriminant $= 5 + 4(-2) = -3 < 0$ — no real intersections at all. The line is too low to reach the parabola. College Board includes this to trap students who don't check the discriminant.\n\n**Verification:** With $b = 1$: $x^2 - 5x + 4 = (x-1)(x-4) = 0$, giving $x = 1, 4$ — exactly two points ✓\n\n**Test Day Takeaway:** Intersections of a line and parabola: set them equal, get a quadratic, check the discriminant. Two intersections = discriminant $> 0$. One intersection (tangent) = discriminant $= 0$. No intersections = discriminant $< 0$.",
          skills: ["quadratic-systems", "discriminant"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "$y = 3x + 1$\n\n$y = x^2 - kx + 10$\n\nIn the system of equations above, $k$ is a positive constant. If the system has exactly one real solution, what is the value of $k$?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Tangent Line to Parabola (Discriminant = 0)** — 1 per test. \"Exactly one solution\" = discriminant equals zero.\n\n**The correct answer is $3$.**\n\n**The Fast Way (45 seconds):** Set equal: $x^2 - (k+3)x + 9 = 0$. One solution means discriminant $= 0$: $(k+3)^2 - 36 = 0 \\to k+3 = \\pm 6 \\to k = 3$ or $k = -9$. Since $k$ is positive, $k = 3$.\n\n**The Full Solution:**\n$3x + 1 = x^2 - kx + 10$\n$x^2 - (k+3)x + 9 = 0$\n\nDiscriminant $= 0$:\n$(k+3)^2 - 4(9) = 0$\n$(k+3)^2 = 36$\n$k + 3 = \\pm 6$\n$k = 3$ or $k = -9$\n\nSince $k$ is positive: $k = 3$.\n\n**Common Mistakes to Avoid:**\n• Forgetting that $k$ must be positive — both $3$ and $-9$ satisfy the discriminant equation, but only $3$ satisfies the constraint.\n• Using discriminant $> 0$ instead of $= 0$. \"Exactly one\" means tangent, which means discriminant equals zero.\n\n**Verification:** $k = 3$: $x^2 - 6x + 9 = (x-3)^2 = 0 \\to x = 3$, $y = 10$. Both equations give $y = 10$ at $x = 3$ ✓\n\n**Test Day Takeaway:** \"Exactly one solution\" for a line meeting a curve = discriminant $= 0$. Set the equations equal, rearrange to standard form, set $b^2 - 4ac = 0$, and solve. Don't forget to check constraints (like \"$k$ is positive\").",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "$5^{2x} - 26 \\cdot 5^x + 25 = 0$\n\nWhat is the sum of all values of $x$ that satisfy the equation above?",
          correctAnswer: 2,
          explanation: "**SAT Pattern: Exponential Equation in Disguise (Quadratic Substitution)** — 1 per test. Recognize the hidden quadratic.\n\n**The correct answer is $2$.**\n\n**The Fast Way (30 seconds):** Let $u = 5^x$. Then $5^{2x} = u^2$. Equation becomes $u^2 - 26u + 25 = 0 \\to (u-1)(u-25) = 0$. So $5^x = 1 \\to x = 0$ or $5^x = 25 \\to x = 2$. Sum $= 0 + 2 = 2$.\n\n**The Full Solution:**\nSubstitute $u = 5^x$: $u^2 - 26u + 25 = 0$\nFactor: $(u-1)(u-25) = 0$\n$u = 1 \\to 5^x = 1 \\to x = 0$\n$u = 25 \\to 5^x = 5^2 \\to x = 2$\nSum of solutions: $0 + 2 = 2$\n\n**Common Mistakes to Avoid:**\n• Not recognizing that $5^{2x} = (5^x)^2$ — this is the key insight that turns an exponential equation into a quadratic.\n• Forgetting $x = 0$ as a solution. $5^0 = 1$ is easy to overlook because $0$ feels like \"nothing.\"\n• Rejecting negative values of $u$ — since $5^x > 0$ for all $x$, any negative $u$ solutions would be extraneous. Here both solutions ($1$ and $25$) are positive, so both are valid.\n\n**Verification:** $x = 0$: $1 - 26 + 25 = 0$ ✓. $x = 2$: $625 - 650 + 25 = 0$ ✓\n\n**Test Day Takeaway:** When you see $a^{2x}$ and $a^x$ in the same equation, substitute $u = a^x$ to reveal a quadratic. Solve the quadratic, then convert back. And don't forget: the question asks for the SUM, not the individual solutions.",
          skills: ['Advanced Math', 'Exponential Equations']
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{36(x^2 - 7)}{x - \\sqrt{7}}$, where $x \\neq \\sqrt{7}$?",
          choices: [
            { id: "A", text: "$6(x - 7)$" },
            { id: "B", text: "$6(x + 7)$" },
            { id: "C", text: "$36(x - \\sqrt{7})$" },
            { id: "D", text: "$36(x + \\sqrt{7})$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Difference of Squares with Radicals** — 1 per test. Factor $a^2 - b^2 = (a-b)(a+b)$ and cancel.\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** $x^2 - 7 = (x-\\sqrt{7})(x+\\sqrt{7})$. Cancel $(x-\\sqrt{7})$ from top and bottom. Left with $36(x+\\sqrt{7})$.\n\n**The Full Solution:**\n$\\frac{36(x^2-7)}{x-\\sqrt{7}} = \\frac{36(x-\\sqrt{7})(x+\\sqrt{7})}{x-\\sqrt{7}} = 36(x+\\sqrt{7})$\n\n**Why the wrong answers are tempting:**\n• Choices A and B ($6(x \\pm 7)$): Two errors — you took $\\sqrt{36} = 6$ instead of keeping $36$, AND you treated $\\sqrt{7}$ as $7$. The $36$ stays as-is because it's a coefficient, not under the radical. And $x^2 - 7 = (x - \\sqrt{7})(x + \\sqrt{7})$, not $(x-7)(x+7)$.\n• Choice C ($36(x-\\sqrt{7})$): You cancelled the WRONG factor. $(x-\\sqrt{7})$ cancels from top and bottom, leaving $(x+\\sqrt{7})$ — the OTHER factor. College Board puts both signs as options because students often pick the wrong one.\n\n**Verification:** At $x = 3$: $\\frac{36(9-7)}{3-\\sqrt{7}} = \\frac{72}{3-\\sqrt{7}}$. And $36(3+\\sqrt{7}) = 108 + 36\\sqrt{7}$. Check: $\\frac{72}{3-\\sqrt{7}} \\times \\frac{3+\\sqrt{7}}{3+\\sqrt{7}} = \\frac{72(3+\\sqrt{7})}{9-7} = \\frac{72(3+\\sqrt{7})}{2} = 36(3+\\sqrt{7})$ ✓\n\n**Test Day Takeaway:** Whenever you see $x^2 - (\\text{number})$, think difference of squares: $x^2 - c = (x-\\sqrt{c})(x+\\sqrt{c})$. Factor, cancel with the denominator, and keep the factor that DIDN'T cancel.",
          skills: ["factoring", "rational-expressions"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -3x^2 + 12x - 8$ is given. If $g(x) = f(x - 2)$, what is the value of $x$ where $g(x)$ reaches its maximum value?",
          correctAnswer: 4,
          explanation: "**SAT Pattern: Quadratic Transformation (Horizontal Shift)** — 1 per test. Don't re-expand — just shift the vertex.\n\n**The correct answer is 4.**\n\n**The Fast Way (15 seconds):** Find vertex of $f(x)$: $x = \\frac{-12}{2(-3)} = 2$. $g(x) = f(x-2)$ shifts RIGHT by $2$. New vertex: $2 + 2 = 4$. Done.\n\n**Desmos Shortcut:** Graph $f(x) = -3x^2 + 12x - 8$, then graph $g(x) = f(x-2)$. The maximum moves from $x = 2$ to $x = 4$.\n\n**The Full Solution:**\nVertex of $f(x) = -3x^2 + 12x - 8$: $x = \\frac{-12}{2(-3)} = 2$\n$g(x) = f(x-2)$ shifts the graph RIGHT by $2$\nNew vertex $x$-coordinate: $2 + 2 = 4$\nSince $a = -3 < 0$, the parabola opens downward → vertex is a maximum.\n\n**Common Mistakes to Avoid:**\n• Shifting LEFT instead of RIGHT. $f(x-2)$ shifts RIGHT (counterintuitive, but true). $f(x+2)$ shifts LEFT.\n• Expanding $f(x-2)$ and re-finding the vertex. That's 5x more work than just shifting the vertex directly.\n\n**Verification:** $g(x) = -3(x-2)^2 + 12(x-2) - 8$. Vertex: $x = \\frac{-24}{-6} = 4$ ✓\n\n**Test Day Takeaway:** $f(x-h)$ shifts RIGHT by $h$. To find the new vertex, just ADD $h$ to the original vertex's $x$-coordinate. Don't waste time expanding — shift the vertex directly.",
          skills: ["quadratic-functions", "function-transformations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2(x - 2)^2 + 6$ is transformed into $g(x) = 2(x - 5)^2 + 3$, which of the following describes the transformation?",
          choices: [
            { id: "A", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units down." },
            { id: "B", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units down." },
            { id: "C", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units up." },
            { id: "D", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units up." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Vertex Form Transformation** — 1-2 per test. Just compare the vertices.\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Read the vertices from vertex form. $f$: vertex $(2, 6)$. $g$: vertex $(5, 3)$. Change: right $3$, down $3$. That's Choice A.\n\n**The Full Solution:**\n$f(x) = 2(x-2)^2 + 6$ → vertex $(2, 6)$\n$g(x) = 2(x-5)^2 + 3$ → vertex $(5, 3)$\nHorizontal: $5 - 2 = +3$ (right)\nVertical: $3 - 6 = -3$ (down)\n\n**Why the wrong answers are tempting:**\n• Choice B (left 3, down 3): You saw $(x-5)$ and thought \"left\" because of the minus sign. But in $(x-h)^2$, the $h$ value gives you the shift to the RIGHT. $(x-5)$ means vertex at $x = 5$, which is to the RIGHT of $x = 2$.\n• Choice C (right 3, up 3): You got horizontal correct but flipped vertical. The $y$-value went from $6$ to $3$ — that's DOWN, not up. $3 < 6$.\n• Choice D (left 3, up 3): Both directions reversed. If you're consistently getting directions wrong, remember: subtract old from new. Positive = right/up.\n\n**Verification:** $(2, 6) \\to (5, 3)$: right $3$, down $3$ ✓\n\n**Test Day Takeaway:** In vertex form $a(x-h)^2 + k$, the vertex is at $(h, k)$. To find the transformation, subtract old vertex from new vertex. Positive horizontal = right. Positive vertical = up. That's it — no complicated algebra needed.",
          skills: ["function-transformations", "quadratic-functions"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere is inscribed in a cube with side length 6. What is the volume of the space inside the cube that is NOT occupied by the sphere?",
          choices: [
            { id: "A", text: "$216 - 36\\pi$" },
            { id: "B", text: "$216 - 48\\pi$" },
            { id: "C", text: "$36 - 36\\pi$" },
            { id: "D", text: "$216 - 288\\pi$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: 3D Geometry (Inscribed Shapes)** — 1 per test. Empty space = container - object.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Cube volume $= 6^3 = 216$. Inscribed sphere has diameter $= 6$, so $r = 3$. Sphere volume $= \\frac{4}{3}\\pi(27) = 36\\pi$. Empty space $= 216 - 36\\pi$.\n\n**The Full Solution:**\n$V_{\\text{cube}} = 6^3 = 216$\n$r_{\\text{sphere}} = \\frac{6}{2} = 3$\n$V_{\\text{sphere}} = \\frac{4}{3}\\pi(3)^3 = 36\\pi$\n$V_{\\text{empty}} = 216 - 36\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice B ($216 - 48\\pi$): Arithmetic error in the sphere volume. $\\frac{4}{3} \\times 27 = 36$, not $48$. Under time pressure, multiplying $\\frac{4}{3} \\times 27$ trips people up. Shortcut: $27 \\div 3 = 9$, then $9 \\times 4 = 36$.\n• Choice C ($36 - 36\\pi$): You used $6^2 = 36$ instead of $6^3 = 216$ for the cube. That gives the area of one face, not the volume. Cube VOLUME is $s^3$.\n• Choice D ($216 - 288\\pi$): You used $r = 6$ (the side length) instead of $r = 3$ (half the side). The sphere fits INSIDE the cube, so its diameter equals the cube's side, making the radius HALF the side.\n\n**Verification:** $36\\pi \\approx 113.1$. Empty space $\\approx 102.9 > 0$ ✓ (sphere fits inside cube)\n\n**Test Day Takeaway:** For inscribed sphere in a cube: sphere diameter = cube side length. The radius is HALF the side. Don't confuse radius with diameter — this is the most common error on this question type.",
          skills: ["sphere-volume", "cube-volume", "inscribed-shapes"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: [
            { math: "y = x^2 - 6x + c", display: true },
            { math: "y = 4", display: true },
            { text: "For what value of " },
            { math: "c" },
            { text: " does the system above have exactly one solution?" }
          ],
          correctAnswer: 13,
          explanation: "**SAT Pattern: Tangent Line to Parabola (Discriminant = 0)** — 1 per test. \"Exactly one solution\" always means discriminant = 0.\n\n**The correct answer is 13.**\n\n**The Fast Way (30 seconds):** Set equal: $x^2 - 6x + (c-4) = 0$. Discriminant $= 0$: $36 - 4(c-4) = 0 \\to 36 - 4c + 16 = 0 \\to c = 13$.\n\n**The Full Solution:**\n$x^2 - 6x + c = 4 \\to x^2 - 6x + (c-4) = 0$\nDiscriminant $= 0$:\n$(-6)^2 - 4(1)(c-4) = 0$\n$36 - 4c + 16 = 0$\n$52 = 4c$\n$c = 13$\n\n**Common Mistakes to Avoid:**\n• Forgetting to move $4$ to the left side before applying the discriminant\n• Sign errors in $-4(c-4) = -4c + 16$ — distributing the negative through the parentheses\n• Using discriminant $> 0$ instead of $= 0$ — \"exactly one\" means tangent, not two intersections\n\n**Verification:** $x^2 - 6x + 9 = (x-3)^2 = 0 \\to x = 3$ (one solution) ✓\n\n**Test Day Takeaway:** \"Exactly one solution\" for a system = discriminant equals zero. Set equations equal, rearrange to $ax^2 + bx + c = 0$ form, set $b^2 - 4ac = 0$, solve for the unknown. This pattern appears on virtually every SAT.",
          skills: ["quadratic-systems", "discriminant"]
        }
      ]
    }
  ]
};

export default practiceTest1;
