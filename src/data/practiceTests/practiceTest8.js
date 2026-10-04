// Practice Test 8 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-6 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H with easies
// at Q1, Q2, Q18 and hard closers.
// Figure density lifted to official ~20%: M1 carries 5 diagram items,
// M2 carries 5. Numeric MC choices sorted ascending (official convention).
// Scenario families this test: tide tables, pottery glaze recipes, parking
// garage rates, cross-country ski trails, honey extraction yields, orchard
// ladders (M1); aquifer pumping, bicycle-repair shop, greenhouse ventilation
// (M2); disjoint from tests 1-7 and the concurrent test-9 recreation.

export const practiceTest8 = {
  id: "practice-test-8",
  title: "Practice Test 8",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
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
  band: 3,
  question: "The graph of line $\\ell$ is shown in the $xy$-plane. Line $k$ is perpendicular to line $\\ell$. What is the slope of line $k$?",
  diagram: { type: "linearGraph", params: { slope: -0.75, yIntercept: 3, xRange: [-6, 8], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, highlightPoints: [[0, 3], [4, 0]], label: "ℓ" } },
  choices: [
    // distractor: takes the reciprocal of line ℓ's slope but keeps its negative sign, giving -4/3
    { id: "A", text: "$-\\frac{4}{3}$" },
    // distractor: reports the slope of line ℓ itself, -3/4, instead of the slope of line k
    { id: "B", text: "$-\\frac{3}{4}$" },
    // distractor: changes the sign of line ℓ's slope but never takes the reciprocal, giving 3/4
    { id: "C", text: "$\\frac{3}{4}$" },
    { id: "D", text: "$\\frac{4}{3}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Line $\\ell$ falls $3$ units for every $4$ units it runs right, so its slope is $-\\frac{3}{4}$; a perpendicular line has the opposite reciprocal slope, $\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Read two marked points on line $\\ell$: $(0, 3)$ and $(4, 0)$. The slope of line $\\ell$ is $\\frac{0 - 3}{4 - 0} = -\\frac{3}{4}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$. If $m$ is the slope of line $k$, then $-\\frac{3}{4} \\cdot m = -1$.\nStep 3: Solving gives $m = \\frac{4}{3}$. Check: $-\\frac{3}{4} \\cdot \\frac{4}{3} = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): flips $\\frac{3}{4}$ to $\\frac{4}{3}$ but keeps the minus sign, so the product of the slopes is $\\left(-\\frac{3}{4}\\right)\\left(-\\frac{4}{3}\\right) = 1$, not $-1$.\n* Choice B ($-\\frac{3}{4}$): reports the slope of line $\\ell$ itself instead of the slope of line $k$.\n* Choice C ($\\frac{3}{4}$): changes only the sign. The product would be $-\\frac{3}{4} \\cdot \\frac{3}{4} = -\\frac{9}{16}$, which is not $-1$.\n\n**Test Day Takeaway:** A perpendicular slope needs two moves: take the reciprocal AND change the sign. Multiply the two slopes to confirm the product is exactly $-1$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A school club has $180$ members, and $63$ of the members are seniors. One member of the club will be selected at random. What is the probability of selecting a senior?",
  choices: [
    { id: "A", text: "$\\frac{7}{20}$" },
    // distractor: divides the 63 seniors by the 117 members who are not seniors instead of by all 180 members: 63/117 = 7/13
    { id: "B", text: "$\\frac{7}{13}$" },
    // distractor: gives the probability of selecting a member who is not a senior: 117/180 = 13/20
    { id: "C", text: "$\\frac{13}{20}$" },
    // distractor: inverts the ratio, putting all 180 members over the 63 seniors: 180/63 = 20/7
    { id: "D", text: "$\\frac{20}{7}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Basic Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Probability is favorable outcomes over total outcomes: $\\frac{63}{180} = \\frac{7}{20}$.\n\n**The Full Solution:**\nStep 1: Identify the total. Each of the $180$ members is equally likely to be selected, so the denominator is $180$.\nStep 2: Identify the favorable outcomes. There are $63$ seniors, so the numerator is $63$.\nStep 3: Simplify: $\\frac{63}{180} = \\frac{7}{20}$, since both numbers are divisible by $9$. Check: the other $180 - 63 = 117$ members are not seniors, and $\\frac{63}{180} + \\frac{117}{180} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{13}$): divides the $63$ seniors by the $117$ members who are not seniors, $\\frac{63}{117} = \\frac{7}{13}$. The denominator must be the whole club.\n* Choice C ($\\frac{13}{20}$): gives the probability of selecting a member who is not a senior, $\\frac{117}{180} = \\frac{13}{20}$.\n* Choice D ($\\frac{20}{7}$): puts the total on top. A probability can never be greater than $1$.\n\n**Test Day Takeaway:** The denominator of a simple probability is the whole group being selected from, not the leftover group.",
  skills: ["probability-basics"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Maya has read $84$ pages of a book. She reads $12$ more pages each day until she has read $300$ pages. Which equation represents this situation, where $d$ is the number of days she reads?",
  choices: [
    { id: "A", text: "$84 + 12d = 300$" },
    // distractor: swaps the roles of the starting amount and the daily rate, attaching d to 84
    { id: "B", text: "$84d + 12 = 300$" },
    // distractor: subtracts the 84 pages already read instead of adding them to the total
    { id: "C", text: "$12d - 84 = 300$" },
    // distractor: treats the pages read each day as a decrease from the starting amount
    { id: "D", text: "$84 - 12d = 300$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The $84$ pages already read are a one-time starting amount and the $12$ pages per day is a rate, so after $d$ days Maya has read $84 + 12d$ pages, which must equal $300$.\n\n**The Full Solution:**\nStep 1: Fix the starting value. Before she reads on any of the $d$ days, Maya has read $84$ pages, so $84$ is a constant term.\nStep 2: Build the changing part. She reads $12$ pages per day for $d$ days, which adds $12d$ pages.\nStep 3: Set the total equal to $300$: $84 + 12d = 300$. Check: solving gives $12d = 216$, so $d = 18$, and $84 + 12(18) = 84 + 216 = 300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($84d + 12 = 300$): attaches the variable to the wrong number. It describes reading $84$ pages per day after starting with $12$.\n* Choice C ($12d - 84 = 300$): subtracts the pages already read. Those pages count toward the $300$, so they are added.\n* Choice D ($84 - 12d = 300$): treats reading as shrinking the total. Since $84 < 300$, this equation would need a negative $d$.\n\n**Test Day Takeaway:** In a linear model, the one-time amount is the constant and the per-day amount is the coefficient of the variable. Ask what the total is when the variable is $0$ to tell them apart.",
  skills: ["word-problem-to-equation"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the wave height, in meters, recorded at five wind speeds, in knots. The equation $y = 0.08x + 0.6$ is a linear model for the data, where $y$ is the predicted wave height at a wind speed of $x$ knots. Which of the following correctly compares the recorded wave height with the predicted wave height at a wind speed of $30$ knots?",
  questionTable: { headers: ["Wind speed (knots)", "Wave height (meters)"], rows: [["10", "1.3"], ["15", "1.6"], ["20", "2.5"], ["25", "3.0"], ["30", "2.6"]] },
  choices: [
    // distractor: drops the 0.6 from the line of best fit, predicting 2.4 instead of 3.0, so the recorded 2.6 looks 0.2 greater
    { id: "A", text: "The recorded height is $0.2$ meter greater than the predicted height." },
    // distractor: finds the correct difference of 0.4 but reverses which height is greater
    { id: "B", text: "The recorded height is $0.4$ meter greater than the predicted height." },
    // distractor: drops the 0.6 from the line of best fit (predicting 2.4) and also reverses which height is greater
    { id: "C", text: "The recorded height is $0.2$ meter less than the predicted height." },
    { id: "D", text: "The recorded height is $0.4$ meter less than the predicted height." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Residual**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** At $x = 30$ the line predicts $0.08(30) + 0.6 = 3.0$ meters, but the table shows $2.6$ meters, so the recorded height is $0.4$ meter less than the predicted height.\n\n**The Full Solution:**\nStep 1: Compute the predicted height at $x = 30$: $y = 0.08(30) + 0.6 = 2.4 + 0.6 = 3.0$ meters.\nStep 2: Read the recorded height for $30$ knots from the table: $2.6$ meters.\nStep 3: Compare: $2.6 - 3.0 = -0.4$, so the recorded height is $0.4$ meter less than the predicted height. Check: $3.0 - 0.4 = 2.6$, the value in the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.08(30) = 2.4$ as the prediction, leaving out the $0.6$, so the recorded $2.6$ appears $0.2$ meter greater.\n* Choice B: finds the correct difference of $0.4$ but reverses the comparison. The predicted $3.0$ is greater than the recorded $2.6$.\n* Choice C: leaves out the $0.6$, predicting $2.4$, and then also reverses which height is greater.\n\n**Test Day Takeaway:** A residual is the actual value minus the predicted value. Compute the prediction from the whole equation, constant term included, before you compare.",
  skills: ["calculate-mean", "slope-intercept-form"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the numbers of students in grade $10$ and grade $11$ at a school who buy lunch and who bring lunch. One of the students who buy lunch will be selected at random. What is the probability of selecting a student in grade $11$?",
  questionTable: { headers: ["", "Buys lunch", "Brings lunch", "Total"], rows: [["Grade 10", "84", "96", "180"], ["Grade 11", "42", "28", "70"], ["Total", "126", "124", "250"]] },
  choices: [
    // distractor: uses all 250 students as the denominator, ignoring that the selection is only from students who buy lunch
    { id: "A", text: "$\\frac{42}{250}$" },
    { id: "B", text: "$\\frac{42}{126}$" },
    // distractor: gives the probability that a student buys lunch, 126/250, not the probability asked for
    { id: "C", text: "$\\frac{126}{250}$" },
    // distractor: divides by the grade 11 total instead of the buys-lunch total, reversing the condition
    { id: "D", text: "$\\frac{42}{70}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The selection is made only from the $126$ students who buy lunch, and $42$ of them are in grade $11$, so the probability is $\\frac{42}{126}$.\n\n**The Full Solution:**\nStep 1: Find the group being selected from. The \"Buys lunch\" column total is $126$ students.\nStep 2: Find the favorable count in that group. The grade $11$ row meets the \"Buys lunch\" column at $42$.\nStep 3: The probability is $\\frac{42}{126}$. Check: the other $84$ students who buy lunch are in grade $10$, and $\\frac{42}{126} + \\frac{84}{126} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{42}{250}$): divides by all $250$ students. That is the probability that a student both buys lunch and is in grade $11$.\n* Choice C ($\\frac{126}{250}$): gives the probability that a student buys lunch, which ignores the grade entirely.\n* Choice D ($\\frac{42}{70}$): divides by the grade $11$ total, which answers the reversed question: of the grade $11$ students, what fraction buy lunch?\n\n**Test Day Takeaway:** The group you select from sets the denominator. Use that group's total, not the grand total.",
  skills: ["conditional-probability", "two-way-table"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of pens of each color in a box. One blue pen is removed from the box and is not replaced. Then one of the remaining pens will be selected at random. What is the probability of selecting a blue pen? (Express your answer as a decimal or fraction, not as a percent.)",
  questionTable: { headers: ["Color", "Number of pens"], rows: [["Blue", "18"], ["Black", "14"], ["Red", "8"]] },
  correctAnswer: "17/39",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{17}{39}$.**\n\n**The Fast Way (~20s):** Removing one blue pen leaves $17$ blue pens among $39$ pens, so the probability is $\\frac{17}{39}$.\n\n**The Full Solution:**\nStep 1: Total the pens before any are removed: $18 + 14 + 8 = 40$ pens.\nStep 2: One blue pen is removed and not replaced, so both counts drop by one: $18 - 1 = 17$ blue pens remain out of $40 - 1 = 39$ pens.\nStep 3: The selection is made from those $39$ pens, so the probability is $\\frac{17}{39}$. Check: the $22$ pens that are not blue are unchanged, and $\\frac{17}{39} + \\frac{22}{39} = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{18}{40}$ ($= 0.45$): ignores the removal and uses the original counts.\n* $\\frac{18}{39}$ ($\\approx 0.46$): lowers the total to $39$ but forgets that the removed pen was blue, so the blue count must drop too.\n* $\\frac{17}{40}$ ($= 0.425$): lowers the blue count but leaves the total at $40$, counting a pen that is no longer in the box.\n\n**Test Day Takeaway:** \"Not replaced\" changes BOTH numbers. Subtract one from the total, and when the removed item is in the category asked about, subtract one from that category too.",
  skills: ["probability-basics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$y = x^{2} - 6x + 11$\n$y = 2x + c$\nIn the given system of equations, $c$ is a constant. The graphs of the two equations intersect at exactly one point in the $xy$-plane. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-5$" },
    // distractor: never subtracts the 2x from the second equation, using -6 as the x-coefficient in the discriminant, which gives c = 2
    { id: "B", text: "$2$" },
    // distractor: drops the sign when solving 4c = -20, reporting 5 instead of -5
    { id: "C", text: "$5$" },
    // distractor: combines -6x and -2x as -4x instead of -8x, which gives c = 7
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Setting the two expressions for $y$ equal gives $x^{2} - 8x + (11 - c) = 0$, and exactly one intersection point means the discriminant is $0$: $64 - 4(11 - c) = 0$, so $c = -5$.\n\n**The Full Solution:**\nStep 1: Substitute $2x + c$ for $y$ in the first equation: $2x + c = x^{2} - 6x + 11$. Rearrange: $x^{2} - 8x + (11 - c) = 0$.\nStep 2: The graphs intersect at exactly one point when this quadratic has exactly one real root, so its discriminant is $0$: $(-8)^{2} - 4(1)(11 - c) = 0$.\nStep 3: Solve: $64 - 44 + 4c = 0$, so $4c = -20$ and $c = -5$. Check: with $c = -5$ the quadratic is $x^{2} - 8x + 16 = (x - 4)^{2}$, with the single root $x = 4$; both equations give $y = 3$ there, since $16 - 24 + 11 = 3$ and $2(4) - 5 = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): uses $-6$ as the $x$-coefficient without subtracting $2x$. Then $36 - 4(11 - c) = 0$ gives $c = 2$, but the line $y = 2x + 2$ crosses the parabola twice.\n* Choice C ($5$): reaches $4c = -20$ correctly and then loses the negative sign.\n* Choice D ($7$): combines $-6x - 2x$ as $-4x$. Then $16 - 4(11 - c) = 0$ gives $c = 7$.\n\n**Test Day Takeaway:** Exactly one intersection point of a line and a parabola means the combined quadratic has discriminant $0$. Collect the $x$-terms carefully before you square the coefficient.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A right triangle has a hypotenuse of length $205$ and a leg of length $84$. What is the length of the other leg?",
  correctAnswer: "187",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $187$.**\n\n**The Fast Way (~30s):** The other leg is $\\sqrt{205^{2} - 84^{2}} = \\sqrt{34{,}969} = 187$.\n\n**The Full Solution:**\nStep 1: Let $b$ be the length of the other leg. By the Pythagorean theorem, $84^{2} + b^{2} = 205^{2}$.\nStep 2: Square the known sides: $7{,}056 + b^{2} = 42{,}025$, so $b^{2} = 34{,}969$.\nStep 3: Take the positive square root: $b = 187$. Check: $84^{2} + 187^{2} = 7{,}056 + 34{,}969 = 42{,}025 = 205^{2}$ ✓\n\n**Common Mistakes:**\n* $121$: subtracts the side lengths, $205 - 84$, instead of their squares.\n* $221.5$: adds the squares, $\\sqrt{205^{2} + 84^{2}} \\approx 221.5$, treating the hypotenuse as a leg. The hypotenuse is the longest side, so the other leg must be less than $205$.\n* $34{,}969$: stops at $b^{2}$ and does not take the square root.\n\n**Test Day Takeaway:** When the hypotenuse is given, the missing leg comes from subtracting squares: $b = \\sqrt{c^{2} - a^{2}}$.",
  skills: ["pythagorean-theorem"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$6(x - 1) + kx = 2x + 26$\nIn the given equation, $k$ is a constant. The solution to the given equation is $x = 4$. What is the value of $k$?",
  choices: [
    // distractor: adds the 2x to the left side instead of subtracting it, giving 4(8 + k) = 32 and k = 0
    { id: "A", text: "$0$" },
    { id: "B", text: "$4$" },
    // distractor: adds 18 to 34 instead of subtracting it, giving 4k = 52 and k = 13
    { id: "C", text: "$13$" },
    // distractor: stops at 4k = 16 and reports 16 without dividing by 4
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Substituting $x = 4$ gives $18 + 4k = 34$, so $4k = 16$ and $k = 4$.\n\n**The Full Solution:**\nStep 1: Since $x = 4$ is the solution, substitute it: $6(4 - 1) + k(4) = 2(4) + 26$.\nStep 2: Simplify each side: $18 + 4k = 34$.\nStep 3: Subtract $18$ from both sides to get $4k = 16$, then divide by $4$: $k = 4$. Check: with $k = 4$ the equation is $6x - 6 + 4x = 2x + 26$, so $8x = 32$ and $x = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): collects the $x$-terms as $x(6 + k + 2) = 32$, adding the $2x$ instead of subtracting it. Then $4(8 + k) = 32$ gives $k = 0$, but with $k = 0$ the left side at $x = 4$ is $18$, not $34$.\n* Choice C ($13$): moves the $18$ by adding it, getting $4k = 34 + 18 = 52$ and $k = 13$.\n* Choice D ($16$): reaches $4k = 16$ and skips the last division.\n\n**Test Day Takeaway:** When the solution is given, substitute it first and simplify each side completely; what remains is a one-step equation for the constant.",
  skills: ["combining-like-terms"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$3x + 5y = 12$\n$9x + ky = 20$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
  choices: [
    // distractor: reports the multiplier 3 between the two equations rather than the coefficient it produces
    { id: "A", text: "$3$" },
    // distractor: copies the first equation's y-coefficient without scaling it by 3
    { id: "B", text: "$5$" },
    { id: "C", text: "$15$" },
    // distractor: scales the 5 by 9, the second equation's x-coefficient, instead of by the ratio 3
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The $x$-coefficient of the second equation is $3$ times that of the first, so no solution requires $k = 3(5) = 15$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the coefficients of $x$ and $y$ are proportional but the constants are not.\nStep 2: The $x$-coefficients give the factor: $9 = 3 \\cdot 3$. The $y$-coefficients must follow the same factor, so $k = 3 \\cdot 5 = 15$.\nStep 3: Confirm that the constants break the pattern: $3 \\cdot 12 = 36$, which is not $20$. Check: multiplying the first equation by $3$ gives $9x + 15y = 36$, and no pair $(x, y)$ can make $9x + 15y$ equal both $36$ and $20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the factor between the equations instead of the coefficient it produces.\n* Choice B ($5$): copies the first equation's $y$-coefficient. Then the lines have different slopes, and the system has exactly one solution.\n* Choice D ($45$): multiplies $5$ by $9$, the second equation's $x$-coefficient, instead of by the factor $3$.\n\n**Test Day Takeaway:** No solution means proportional $x$- and $y$-coefficients with constants that are not in that same proportion. Find the factor from one pair of coefficients and apply it to the other.",
  skills: ["system-solution-types"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of songs on each of $26$ albums. Four more albums, each with $11$ songs, are added to the data. What is the mode of the number of songs on the $30$ albums?",
  questionTable: { headers: ["Number of songs", "Number of albums"], rows: [["8", "3"], ["9", "8"], ["10", "5"], ["11", "6"], ["12", "4"]] },
  choices: [
    // distractor: gives the mode of the original 26 albums, ignoring the four albums added
    { id: "A", text: "$9$" },
    // distractor: reports the median of the 30 albums instead of the mode
    { id: "B", text: "$10$" },
    { id: "C", text: "$11$" },
    // distractor: reports the greatest number of songs in the table rather than the most frequent
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The four added albums raise the count for $11$ songs from $6$ to $10$, which is more than the $8$ albums with $9$ songs, so the mode is $11$.\n\n**The Full Solution:**\nStep 1: Read the frequencies: $8$ songs occurs $3$ times, $9$ occurs $8$ times, $10$ occurs $5$ times, $11$ occurs $6$ times, and $12$ occurs $4$ times, for $26$ albums.\nStep 2: Update the row that changes. Four albums with $11$ songs raise that frequency from $6$ to $6 + 4 = 10$.\nStep 3: The new frequencies are $3$, $8$, $5$, $10$, and $4$; the greatest is $10$, for $11$ songs. Check: $3 + 8 + 5 + 10 + 4 = 30$ albums ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): the mode before the four albums are added. Now $11$ songs occurs $10$ times, more than the $8$ times for $9$ songs.\n* Choice B ($10$): the median. The $15$th and $16$th values of the $30$ ordered values are both $10$.\n* Choice D ($12$): the greatest value in the table. The mode is the most frequent value, not the largest.\n\n**Test Day Takeaway:** In a frequency table, the mode is the value with the greatest frequency. Update the frequencies first, then compare.",
  skills: ["find-mode"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ is the perpendicular bisector of the line segment with endpoints $(2, 9)$ and $(8, 6)$. Line $\\ell$ intersects the $y$-axis at the point $(0, b)$. What is the value of $b$?",
  correctAnswer: "-2.5",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-2.5$.**\n\n**The Fast Way (~40s):** The segment has slope $-\\frac{1}{2}$ and midpoint $(5, 7.5)$, so line $\\ell$ is $y - 7.5 = 2(x - 5)$, which crosses the $y$-axis at $-2.5$.\n\n**The Full Solution:**\nStep 1: The slope of the segment is $\\frac{6 - 9}{8 - 2} = -\\frac{1}{2}$, so line $\\ell$, which is perpendicular to it, has slope $2$.\nStep 2: Line $\\ell$ passes through the midpoint of the segment: $\\left(\\frac{2 + 8}{2}, \\frac{9 + 6}{2}\\right) = (5, 7.5)$.\nStep 3: The line through $(5, 7.5)$ with slope $2$ is $y - 7.5 = 2(x - 5)$, or $y = 2x - 2.5$. At $x = 0$, $y = -2.5$, so $b = -2.5$. Check: $2(5) - 2.5 = 7.5$, and $2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $10$: uses the slope of the segment, $-\\frac{1}{2}$, instead of the perpendicular slope, giving $y = -\\frac{1}{2}x + 10$.\n* $5$: uses slope $2$ but runs the line through the endpoint $(2, 9)$ instead of the midpoint, giving $y = 2x + 5$.\n* $17.5$: changes the sign of the slope without taking the reciprocal, using $-2$ and getting $y = -2x + 17.5$.\n\n**Test Day Takeaway:** A perpendicular bisector needs two things: the opposite reciprocal slope and the midpoint. Find both before writing the equation.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right triangle has angles measuring $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$. The area of the triangle is $200\\sqrt{3}$ square inches. What is the perimeter, in inches, of the triangle?",
  choices: [
    // distractor: adds only the two legs, 20 and 20*sqrt(3), and omits the 40-inch hypotenuse
    { id: "A", text: "$20 + 20\\sqrt{3}$" },
    { id: "B", text: "$60 + 20\\sqrt{3}$" },
    // distractor: uses 3 times the short leg (60) as the hypotenuse instead of 2 times the short leg (40)
    { id: "C", text: "$80 + 20\\sqrt{3}$" },
    // distractor: writes the longer leg as 40*sqrt(3), doubling the short leg before multiplying by sqrt(3)
    { id: "D", text: "$60 + 40\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The legs are $a$ and $a\\sqrt{3}$, so $\\frac{a^{2}\\sqrt{3}}{2} = 200\\sqrt{3}$ gives $a = 20$, and the perimeter is $20 + 20\\sqrt{3} + 40 = 60 + 20\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the sides are in the ratio $a : a\\sqrt{3} : 2a$, where $a$ is the side opposite the $30^{\\circ}$ angle.\nStep 2: The legs are perpendicular, so the area is $\\frac{1}{2}(a)(a\\sqrt{3}) = \\frac{a^{2}\\sqrt{3}}{2}$. Setting this equal to $200\\sqrt{3}$ gives $a^{2} = 400$, so $a = 20$.\nStep 3: Add the three sides: $20 + 20\\sqrt{3} + 40 = 60 + 20\\sqrt{3}$. Check: $\\frac{1}{2}(20)(20\\sqrt{3}) = 200\\sqrt{3}$, and $20^{2} + (20\\sqrt{3})^{2} = 400 + 1{,}200 = 1{,}600 = 40^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20 + 20\\sqrt{3}$): adds only the two legs and leaves out the hypotenuse, $40$.\n* Choice C ($80 + 20\\sqrt{3}$): uses $3a = 60$ for the hypotenuse instead of $2a = 40$.\n* Choice D ($60 + 40\\sqrt{3}$): multiplies the hypotenuse, not the shorter leg, by $\\sqrt{3}$ to get the longer leg.\n\n**Test Day Takeaway:** Write the ratio $a : a\\sqrt{3} : 2a$ first. The area uses the two legs; the perimeter uses all three sides.",
  skills: ["triangle-area"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $m$ is the graph of $8x - 6y = 21$, and line $n$ is the graph of $y = \\frac{2c}{9}x - 4$, where $c$ is a constant. Lines $m$ and $n$ do not intersect. What is the value of $c$?",
  choices: [
    // distractor: drops the sign when dividing by -6, taking the first slope as -4/3 and getting c = -6
    { id: "A", text: "$-6$" },
    { id: "B", text: "$6$" },
    // distractor: ignores the factor of 2 in 2c/9, solving c/9 = 4/3 to get c = 12
    { id: "C", text: "$12$" },
    // distractor: reads the first line's slope as 8, the coefficient of x, giving 2c/9 = 8 and c = 36
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solving $8x - 6y = 21$ for $y$ gives slope $\\frac{4}{3}$; setting $\\frac{2c}{9} = \\frac{4}{3}$ gives $c = 6$.\n\n**The Full Solution:**\nStep 1: Rewrite line $m$ in slope-intercept form: $-6y = -8x + 21$, so $y = \\frac{4}{3}x - \\frac{7}{2}$.\nStep 2: Two lines in the $xy$-plane that do not intersect are parallel and distinct, so their slopes are equal: $\\frac{2c}{9} = \\frac{4}{3}$.\nStep 3: Cross-multiply: $6c = 36$, so $c = 6$. Check: with $c = 6$, line $n$ is $y = \\frac{4}{3}x - 4$; the slopes match and the $y$-intercepts, $-4$ and $-\\frac{7}{2}$, differ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): divides by $-6$ without changing the sign of the $x$-term, getting slope $-\\frac{4}{3}$ and $c = -6$.\n* Choice C ($12$): sets $\\frac{c}{9} = \\frac{4}{3}$, overlooking the $2$ in the numerator.\n* Choice D ($36$): treats $8$, the coefficient of $x$, as the slope of line $m$.\n\n**Test Day Takeaway:** Put both equations in $y = mx + b$ form before comparing slopes, and watch the sign when dividing by a negative coefficient.",
  skills: ["system-solution-types"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$f(x) = mx + b$\nThe function $f$ is defined by the given equation, where $m$ and $b$ are constants. If $f(8) = 96$ and $f(4) - f(10) = 27$, what is the value of $b$?",
  choices: [
    // distractor: finds m = -4.5 but subtracts 4.5(8) = 36 from 96 instead of adding it, giving 60
    { id: "A", text: "$60$" },
    // distractor: reports f(8) = 96 as b, but b is the value of f at x = 0
    { id: "B", text: "$96$" },
    // distractor: multiplies the rate by 6, the length of the interval from 4 to 10, instead of by 8, giving 96 + 27 = 123
    { id: "C", text: "$123$" },
    { id: "D", text: "$132$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $f$ falls by $27$ as $x$ goes from $4$ to $10$, so $m = -\\frac{27}{6} = -4.5$; then $b = f(8) - 8m = 96 + 36 = 132$.\n\n**The Full Solution:**\nStep 1: Find $m$. Since $f(4) - f(10) = 27$, the value of $f$ decreases by $27$ as $x$ increases by $10 - 4 = 6$, so $m = \\frac{f(10) - f(4)}{10 - 4} = \\frac{-27}{6} = -4.5$.\nStep 2: Substitute $f(8) = 96$: $-4.5(8) + b = 96$, so $-36 + b = 96$.\nStep 3: Solve: $b = 132$. Check: $f(4) = -4.5(4) + 132 = 114$ and $f(10) = -4.5(10) + 132 = 87$, and $114 - 87 = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): computes $96 - 36$. The function is decreasing, so its value at $x = 0$ is greater than its value at $x = 8$.\n* Choice B ($96$): treats $f(8)$ as $b$. In $f(x) = mx + b$, $b$ is the value of $f(0)$.\n* Choice C ($123$): moves back $6$ units instead of $8$, adding $4.5(6) = 27$ instead of $4.5(8) = 36$.\n\n**Test Day Takeaway:** Find the slope from the change over the matching interval, watching the order of subtraction, then substitute one known point to solve for $b$.",
  skills: ["slope-intercept-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows four values of $x$ and their corresponding values of $g(x)$ for the quadratic function $g$. What is the maximum value of $g(x)$?",
  questionTable: { headers: ["$x$", "$g(x)$"], rows: [["3", "$-4$"], ["5", "$8$"], ["9", "$8$"], ["11", "$-4$"]] },
  choices: [
    // distractor: takes the leading coefficient as +1 instead of -1, so g(5) = 8 gives k = 4
    { id: "A", text: "$4$" },
    // distractor: reports the greatest value of g(x) in the table instead of the value at the vertex
    { id: "B", text: "$8$" },
    { id: "C", text: "$12$" },
    // distractor: treats g as linear, continuing the increase of 12 from x = 3 to x = 5 out to x = 7
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Since $g(5) = g(9)$, the vertex is at $x = 7$; writing $g(x) = a(x - 7)^{2} + k$ and using two rows gives $a = -1$ and $k = 12$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about its vertex. Since $g(5) = g(9) = 8$, the vertex has $x$-coordinate $\\frac{5 + 9}{2} = 7$, so $g(x) = a(x - 7)^{2} + k$.\nStep 2: Substitute two rows. From $x = 5$: $4a + k = 8$. From $x = 3$: $16a + k = -4$.\nStep 3: Subtract the first equation from the second: $12a = -12$, so $a = -1$ and $k = 8 - 4(-1) = 12$. Since $a < 0$, the parabola opens downward, and the maximum value is $12$. Check: $g(11) = -(11 - 7)^{2} + 12 = -4$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): uses $a = 1$, giving $k = 8 - 4 = 4$. A parabola that opens upward has a minimum, and it would not give $-4$ at $x = 3$.\n* Choice B ($8$): the greatest value shown in the table. The table does not include $x = 7$, where the maximum occurs.\n* Choice D ($20$): continues the increase of $12$ from $x = 3$ to $x = 5$ for two more units, as if $g$ were linear.\n\n**Test Day Takeaway:** Two equal outputs give the axis of symmetry. Find the vertex's $x$-coordinate from their midpoint, then use another row to find $a$ and $k$.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $m$ gives the mass, in grams, of a substance $t$ hours after it was first measured. The mass decreases by the same percentage every $4$ hours, from $250$ grams at $t = 0$ to $205$ grams at $t = 4$. Which equation defines $m$?",
  choices: [
    // distractor: uses the fraction lost, (250 - 205)/250 = 0.18, as the base instead of the fraction remaining, 0.82
    { id: "A", text: "$m(t) = 250(0.18)^{\\frac{t}{4}}$" },
    // distractor: multiplies t by 4 instead of dividing, applying four 4-hour periods every hour
    { id: "B", text: "$m(t) = 250(0.82)^{4t}$" },
    { id: "C", text: "$m(t) = 250(0.82)^{\\frac{t}{4}}$" },
    // distractor: finds the 18% decrease and then applies it as an 18% increase, using base 1.18
    { id: "D", text: "$m(t) = 250(1.18)^{\\frac{t}{4}}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** One $4$-hour period takes the mass from $250$ to $205$, and $\\frac{205}{250} = 0.82$, so $m(t) = 250(0.82)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: The initial value is the mass at $t = 0$, which is $250$ grams.\nStep 2: The multiplier for one period is $\\frac{205}{250} = 0.82$, so each $4$-hour period keeps $82\\%$ of the mass, a decrease of $18\\%$.\nStep 3: In $t$ hours there are $\\frac{t}{4}$ periods of $4$ hours, so $m(t) = 250(0.82)^{\\frac{t}{4}}$. Check: $m(4) = 250(0.82) = 205$, and $m(8) = 250(0.82)^{2} = 168.1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the fraction lost, $\\frac{250 - 205}{250} = 0.18$, as the base. Then $m(4) = 45$, not $205$.\n* Choice B: multiplies $t$ by $4$ instead of dividing. Then $m(4) = 250(0.82)^{16} \\approx 10.4$.\n* Choice D: applies the $18\\%$ change as an increase. A base greater than $1$ gives $m(4) = 295$.\n\n**Test Day Takeaway:** Divide a later value by an earlier one to get the multiplier for one period. If the period is $n$ hours, the exponent is $\\frac{t}{n}$.",
  skills: ["exponential-growth-decay"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangles $PQR$ and $STU$ are similar, and side $PQ$ corresponds to side $ST$. The areas of triangles $PQR$ and $STU$ are $36$ and $100$ square units, respectively. If $PQ = 45$, what is the value of $ST$?",
  choices: [
    // distractor: reduces the area ratio to 25/9 but takes the square root of only the numerator, multiplying 45 by 5/9
    { id: "A", text: "$25$" },
    // distractor: inverts the scale factor, multiplying 45 by 3/5 instead of by 5/3
    { id: "B", text: "$27$" },
    { id: "C", text: "$75$" },
    // distractor: multiplies 45 by the area ratio 100/36 instead of by its square root
    { id: "D", text: "$125$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The ratio of the areas is $\\frac{100}{36}$, so the ratio of corresponding sides is $\\sqrt{\\frac{100}{36}} = \\frac{5}{3}$, and $ST = 45 \\cdot \\frac{5}{3} = 75$.\n\n**The Full Solution:**\nStep 1: The ratio of the area of triangle $STU$ to the area of triangle $PQR$ is $\\frac{100}{36} = \\frac{25}{9}$.\nStep 2: For similar figures, the ratio of the areas is the square of the ratio of corresponding sides, so $\\frac{ST}{PQ} = \\sqrt{\\frac{25}{9}} = \\frac{5}{3}$.\nStep 3: Solve: $ST = 45 \\cdot \\frac{5}{3} = 75$. Check: $\\left(\\frac{75}{45}\\right)^{2} = \\frac{25}{9}$, and $36 \\cdot \\frac{25}{9} = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): takes the square root of only the $25$ in $\\frac{25}{9}$, multiplying by $\\frac{5}{9}$: $45 \\cdot \\frac{5}{9} = 25$.\n* Choice B ($27$): uses the scale factor upside down, $45 \\cdot \\frac{3}{5} = 27$. Triangle $STU$ has the greater area, so $ST$ must be greater than $PQ$.\n* Choice D ($125$): multiplies by the area ratio itself, $45 \\cdot \\frac{100}{36} = 125$, skipping the square root.\n\n**Test Day Takeaway:** Lengths scale by $k$ and areas by $k^{2}$. Going from an area ratio to a length ratio always takes a square root.",
  skills: ["similar-triangles"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Right circular cylinders A and B have the same volume. Cylinder A has a diameter of $10$ centimeters and a height of $36$ centimeters, and cylinder B has a radius of $6$ centimeters. What is the height, in centimeters, of cylinder B?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~45s):** Cylinder A has radius $5$, so its volume is $\\pi(5)^{2}(36) = 900\\pi$; then $\\pi(6)^{2}h = 900\\pi$ gives $h = 25$.\n\n**The Full Solution:**\nStep 1: The radius of cylinder A is half its diameter, $5$ centimeters, so its volume is $\\pi(5)^{2}(36) = 900\\pi$ cubic centimeters.\nStep 2: If $h$ is the height of cylinder B, its volume is $\\pi(6)^{2}h = 36\\pi h$.\nStep 3: The volumes are equal, so $36\\pi h = 900\\pi$ and $h = 25$. Check: $\\pi(6)^{2}(25) = 900\\pi$ ✓\n\n**Common Mistakes:**\n* $100$: uses the diameter $10$ as the radius, so cylinder A's volume becomes $3{,}600\\pi$ and $h = \\frac{3600}{36} = 100$.\n* $30$: scales the height by the ratio of the radii, $36 \\cdot \\frac{5}{6} = 30$. Volume depends on the square of the radius, so the factor is $\\frac{25}{36}$.\n* $43.2$: scales the height by $\\frac{6}{5}$. Cylinder B is wider, so its height must be less than $36$.\n\n**Test Day Takeaway:** Check whether a length is a radius or a diameter before squaring. When two volumes are equal, set the two volume expressions equal and solve.",
  skills: ["volume-prism"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$p(x) = 2x^{3} + kx^{2} - 17x + 20$\nIn the given function, $k$ is a constant, and $x - 4$ is a factor of $p(x)$. What is the sum of the solutions to $p(x) = 0$?",
  correctAnswer: "2.5",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**The correct answer is $2.5$.**\n\n**The Fast Way (~50s):** Since $x - 4$ is a factor, $p(4) = 0$, which gives $80 + 16k = 0$ and $k = -5$; the solutions are then $4$, $1$, and $-\\frac{5}{2}$, with sum $2.5$.\n\n**The Full Solution:**\nStep 1: If $x - 4$ is a factor of $p(x)$, then $p(4) = 0$: $2(64) + 16k - 17(4) + 20 = 80 + 16k = 0$, so $k = -5$.\nStep 2: Divide out the known factor: $2x^{3} - 5x^{2} - 17x + 20 = (x - 4)(2x^{2} + 3x - 5)$.\nStep 3: Factor the quadratic: $2x^{2} + 3x - 5 = (2x + 5)(x - 1)$, so the solutions are $4$, $-\\frac{5}{2}$, and $1$, and their sum is $4 - 2.5 + 1 = 2.5$. Check: $p(1) = 2 - 5 - 17 + 20 = 0$, and $p\\left(-\\frac{5}{2}\\right) = -31.25 - 31.25 + 42.5 + 20 = 0$ ✓\n\n**Common Mistakes:**\n* $4$: reports the one solution given by the factor $x - 4$ instead of the sum of all three.\n* $7.5$: reads the factor $2x + 5$ as the solution $\\frac{5}{2}$ instead of $-\\frac{5}{2}$, getting $4 + 1 + 2.5$.\n* $-5$: reports the value of $k$ instead of the sum of the solutions.\n\n**Test Day Takeaway:** A given factor $x - r$ means $p(r) = 0$. Use it to find the unknown coefficient, divide it out, and factor what remains.",
  skills: ["finding-roots-factoring"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows values of the functions $s$ and $v$ for five values of $x$. If $v(s(a)) = 5$, what is the value of $a$?",
  questionTable: { headers: ["$x$", "$s(x)$", "$v(x)$"], rows: [["1", "3", "2"], ["2", "5", "4"], ["3", "1", "5"], ["4", "4", "1"], ["5", "2", "3"]] },
  choices: [
    { id: "A", text: "$1$" },
    // distractor: applies s to the given output 5, computing s(5) = 2, instead of working backward
    { id: "B", text: "$2$" },
    // distractor: finds that s(a) must equal 3 because v(3) = 5, then reports 3 instead of solving s(a) = 3
    { id: "C", text: "$3$" },
    // distractor: treats 5 as the input, computing v(s(5)) = v(2) = 4
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The only $x$ with $v(x) = 5$ is $3$, so $s(a) = 3$; the only $x$ with $s(x) = 3$ is $1$, so $a = 1$.\n\n**The Full Solution:**\nStep 1: In $v(s(a))$, the output of $s$ is the input of $v$. Let $s(a) = y$, so $v(y) = 5$.\nStep 2: In the $v(x)$ column, $5$ appears only in the row $x = 3$, so $y = s(a) = 3$.\nStep 3: In the $s(x)$ column, $3$ appears only in the row $x = 1$, so $a = 1$. Check: $s(1) = 3$ and $v(3) = 5$, so $v(s(1)) = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reads $s(5) = 2$, applying $s$ to the output $5$ instead of working backward from it.\n* Choice C ($3$): finds $s(a) = 3$ and stops. That is the value of $s(a)$, not the value of $a$.\n* Choice D ($4$): treats $5$ as the input and computes $v(s(5)) = v(2) = 4$.\n\n**Test Day Takeaway:** To solve $v(s(a)) = c$ from a table, work from the outside in: find the input of $v$ that gives $c$, then find the input of $s$ that gives that value.",
  skills: ["function-composition"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\frac{2^{4t} \\cdot 8^{t+3}}{4^{3t-2}}$?",
  choices: [
    { id: "A", text: "$2^{t+13}$" },
    // distractor: subtracts the denominator's -4 instead of adding it, giving 7t + 9 - 6t - 4 = t + 5
    { id: "B", text: "$2^{t+5}$" },
    // distractor: leaves 8^(t+3) unconverted, using exponent t + 3 instead of 3t + 9
    { id: "C", text: "$2^{7-t}$" },
    // distractor: adds the denominator's exponent instead of subtracting it, giving 7t + 9 + 6t - 4
    { id: "D", text: "$2^{13t+5}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** In base $2$, the expression is $\\frac{2^{4t} \\cdot 2^{3t+9}}{2^{6t-4}} = 2^{(7t+9)-(6t-4)} = 2^{t+13}$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $2$: $8^{t+3} = 2^{3(t+3)} = 2^{3t+9}$ and $4^{3t-2} = 2^{2(3t-2)} = 2^{6t-4}$.\nStep 2: Multiply in the numerator by adding exponents: $2^{4t} \\cdot 2^{3t+9} = 2^{7t+9}$.\nStep 3: Divide by subtracting exponents: $2^{(7t+9)-(6t-4)} = 2^{t+13}$. Check: at $t = 1$, the original is $\\frac{2^{4} \\cdot 8^{4}}{4^{1}} = \\frac{16 \\cdot 4{,}096}{4} = 16{,}384$, and $2^{14} = 16{,}384$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2^{t+5}$): subtracts $6t - 4$ as $6t + 4$, getting $7t + 9 - 6t - 4$. Subtracting $-4$ adds $4$.\n* Choice C ($2^{7-t}$): uses $t + 3$ as the base-$2$ exponent of $8^{t+3}$, leaving out the factor of $3$.\n* Choice D ($2^{13t+5}$): adds the denominator's exponent instead of subtracting it.\n\n**Test Day Takeaway:** Rewrite every factor with the same base, multiply out the exponents, then add for multiplication and subtract for division. Test $t = 1$ in both forms to confirm.",
  skills: ["exponent-laws"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 8 — Math Module 2 (22 questions)
// Official-calibration recreation (2026-09-01). Frozen flow: easies at Q1,
// Q2, Q18 (breather); mediums at Q3, Q5, Q6, Q9, Q12, Q13, Q16; hards at
// Q4, Q7, Q8, Q10, Q11, Q14, Q15, Q17, Q19, Q20, Q21, Q22. 3E / 7M / 12H
// with a band ramp from warm-up openers to parameter-heavy hard closers.
// Q1-5 warm-ups are never trivial: rate-scaling (Q1), percent-complement
// distractor field (Q2), negative-slope reading (Q3), multi-step product
// target (Q4), weighted-percent table (Q5) — trap families unused in the
// recreated tests 1-7.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(20)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$13$"], ["$4$", "$22$"], ["$7$", "$31$"], ["$10$", "$40$"]] },
  choices: [
    // distractor: finds the slope 3 but drops the constant term, computing 3(20) = 60
    { id: "A", text: "$60$" },
    { id: "B", text: "$70$" },
    // distractor: treats f(1) = 13 as the y-intercept, computing 3(20) + 13 = 73
    { id: "C", text: "$73$" },
    // distractor: assumes f is proportional and doubles f(10) = 40
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each increase of $3$ in $x$ raises $f(x)$ by $9$, so the slope is $3$; going $10$ more units past $x = 10$ gives $f(20) = 40 + 3(10) = 70$.\n\n**The Full Solution:**\nStep 1: Find the slope from two rows of the table: $\\frac{22 - 13}{4 - 1} = \\frac{9}{3} = 3$.\nStep 2: Find the constant term: $f(1) = 3(1) + b = 13$, so $b = 10$ and $f(x) = 3x + 10$.\nStep 3: Evaluate: $f(20) = 3(20) + 10 = 70$. Check with another row: $f(7) = 3(7) + 10 = 31$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): uses the slope but leaves out the constant term, computing $3(20) = 60$.\n* Choice C ($73$): treats $f(1) = 13$ as though it were $f(0)$, computing $3(20) + 13 = 73$. The value at $x = 0$ is $10$, not $13$.\n* Choice D ($80$): assumes $f(20)$ is double $f(10) = 40$. That works only when the graph passes through the origin, and $f(0) = 10$.\n\n**Test Day Takeaway:** For a linear function given by a table, find the slope from any two rows, then the constant term from one row; doubling an input doubles the output only when $f(0) = 0$.",
  skills: ["function-evaluation"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The sale price of a lamp is $62\\%$ less than its original price of $p$ dollars. Which expression represents the sale price?",
  choices: [
    { id: "A", text: "$0.38p$" },
    // distractor: gives the amount of the discount, 62% of p, rather than the price that remains
    { id: "B", text: "$0.62p$" },
    // distractor: adds the remaining 38% to the full original price instead of keeping only that 38%
    { id: "C", text: "$1.38p$" },
    // distractor: adds the 62% instead of subtracting it, modeling a 62% increase
    { id: "D", text: "$1.62p$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A $62\\%$ decrease leaves $100\\% - 62\\% = 38\\%$ of the original price, so the sale price is $0.38p$.\n\n**The Full Solution:**\nStep 1: The discount is $62\\%$ of $p$, which is $0.62p$ dollars.\nStep 2: Subtract the discount from the original price: $p - 0.62p = 0.38p$.\nStep 3: So the sale price is $0.38p$ dollars. Check with $p = 100$: a $62\\%$ decrease from $100$ dollars gives $38$ dollars, and $0.38(100) = 38$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.62p$): this is the amount taken off the price, not the price the customer pays.\n* Choice C ($1.38p$): adds $38\\%$ to the whole original price, which would make the sale price higher than $p$.\n* Choice D ($1.62p$): represents a $62\\%$ increase, the opposite of what the question describes.\n\n**Test Day Takeaway:** A decrease of $r\\%$ multiplies by $1 - \\frac{r}{100}$; an increase of $r\\%$ multiplies by $1 + \\frac{r}{100}$. Write the multiplier before you look at the choices.",
  skills: ["percent-change"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A store increased the price of a coat by $40\\%$. Later, the store increased the new price by $p\\%$. The final price was $75\\%$ greater than the original price. What is the value of $p$?",
  choices: [
    // distractor: divides 1.40 by 1.75 instead of 1.75 by 1.40, getting 0.80, and reports the 20% gap from 1
    { id: "A", text: "$20$" },
    { id: "B", text: "$25$" },
    // distractor: subtracts 40 from 75, treating the two percent increases as additive
    { id: "C", text: "$35$" },
    // distractor: reports the second multiplier, 1.25, as 125 instead of the percent increase, 25
    { id: "D", text: "$125$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The final price is $175\\%$ of the original and the first increase made it $140\\%$; since $1.40 \\times 1.25 = 1.75$, the second increase multiplied the price by $1.25$, an increase of $25\\%$.\n\n**The Full Solution:**\nStep 1: Let the original price be $x$. After the $40\\%$ increase, the price is $1.40x$. After the second increase, it is $1.40x\\left(1 + \\frac{p}{100}\\right)$.\nStep 2: A final price $75\\%$ greater than the original is $1.75x$, so $1.40\\left(1 + \\frac{p}{100}\\right) = 1.75$.\nStep 3: Divide by $1.40$: $1 + \\frac{p}{100} = 1.25$, so $p = 25$. Check with $x = 100$: $100 \\to 140 \\to 140(1.25) = 175$, which is $75\\%$ greater than $100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): divides $1.40$ by $1.75$ instead of $1.75$ by $1.40$, getting $0.80$, and reports the $20\\%$ gap from $1$. The final price is the larger one, so it goes in the numerator.\n* Choice C ($35$): subtracts $75 - 40$, as if percent increases added. The second percent is taken of the already increased price, so it must be less than $35$.\n* Choice D ($125$): this is the second multiplier, $1.25$, written as a percent; the increase is $125 - 100 = 25$ percent.\n\n**Test Day Takeaway:** Successive percent changes multiply: write each change as a multiplier, set the product equal to the overall multiplier, and solve. Percents taken of different bases never simply add.",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$4(kx - 3) + 8x = 2(10x - 3) - 6$\nIn the given equation, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
  choices: [
    // distractor: solves 4k = 8 - 20 instead of 4k = 20 - 8, subtracting in the wrong direction
    { id: "A", text: "$-3$" },
    { id: "B", text: "$3$" },
    // distractor: solves 4k = 20 + 8 = 28, adding the 8 instead of subtracting it
    { id: "C", text: "$7$" },
    // distractor: stops at 4k = 12 and reports 12 without dividing by 4
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Both sides simplify to the form $(\\text{coefficient})x - 12$, so the equation is true for every $x$ exactly when the $x$-coefficients match: $4k + 8 = 20$, so $k = 3$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $4kx - 12 + 8x = (4k + 8)x - 12$.\nStep 2: Expand the right side: $20x - 6 - 6 = 20x - 12$. The constant terms already match.\nStep 3: A linear equation has infinitely many solutions when both sides are identical, so $4k + 8 = 20$, giving $4k = 12$ and $k = 3$. Check: with $k = 3$, the left side is $4(3x - 3) + 8x = 20x - 12$, the same as the right side ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): sets up $4k = 8 - 20$, subtracting in the wrong direction.\n* Choice C ($7$): adds the $8$ instead of subtracting it, solving $4k = 28$.\n* Choice D ($12$): stops at $4k = 12$ and reports $12$ without dividing by $4$.\n\n**Test Day Takeaway:** After simplifying, $ax + b = cx + d$ has infinitely many solutions when $a = c$ and $b = d$, and no solution when $a = c$ but $b \\ne d$. Expand fully before comparing coefficients.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, and the line of best fit $y = 0.5x - 4$. The point $(a, 15.5)$, which is not shown, has a residual of $1.5$ with respect to this line. What is the value of $a$?",
  diagram: { type: "scatterplot", params: { points: [[20, 6.9], [25, 7.4], [30, 11.6], [35, 12.8], [40, 17.3], [45, 18], [50, 21.8], [55, 22.3], [60, 26.4]], xMin: 15, xMax: 65, yMin: 0, yMax: 30, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "x", yLabel: "y", bestFitLine: { slope: 0.5, intercept: -4 } } },
  correctAnswer: "36",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is 36.**\n\n**The Fast Way (~25s):** A residual of $1.5$ means the point is $1.5$ above the line, so the line predicts $15.5 - 1.5 = 14$ at $x = a$; solving $0.5a - 4 = 14$ gives $a = 36$.\n\n**The Full Solution:**\nStep 1: A residual is the actual $y$-value minus the $y$-value predicted by the line: $15.5 - \\text{predicted} = 1.5$, so the predicted value is $14$.\nStep 2: The line predicts $0.5a - 4$ at $x = a$, so $0.5a - 4 = 14$.\nStep 3: Add $4$ and divide by $0.5$: $0.5a = 18$, so $a = 36$. Check: the line predicts $0.5(36) - 4 = 14$ at $x = 36$, and $15.5 - 14 = 1.5$ ✓\n\n**Common Mistakes:**\n* $42$: adds the residual instead of subtracting it, using a predicted value of $15.5 + 1.5 = 17$ and solving $0.5a - 4 = 17$.\n* $39$: ignores the residual and solves $0.5a - 4 = 15.5$, which treats the point as lying on the line.\n* $11$: uses the residual $1.5$ as the predicted $y$-value, solving $0.5a - 4 = 1.5$.\n\n**Test Day Takeaway:** Residual means actual minus predicted. A positive residual puts the point above the line, so subtract the residual from the actual value to get what the line predicts.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In triangle $JKL$ shown, the measure of the largest angle is how many degrees greater than the measure of the smallest angle?",
  diagram: { type: "triangleWithAngles", params: { angleLabels: ["(2x + 9)°", "(x + 5)°", "(3x - 14)°"], vertexLabels: ["J", "K", "L"], figureNote: true } },
  choices: [
    // distractor: subtracts the two largest angles, 76 - 69, instead of the largest minus the smallest
    { id: "A", text: "$7$" },
    // distractor: reports the value of x, 30, rather than a difference of angle measures
    { id: "B", text: "$30$" },
    // distractor: subtracts 35 from 69, using the middle angle in place of the largest
    { id: "C", text: "$34$" },
    { id: "D", text: "$41$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The three measures sum to $180$, so $6x = 180$ and $x = 30$; the angles then measure $69$, $35$, and $76$ degrees, and $76 - 35 = 41$.\n\n**The Full Solution:**\nStep 1: The interior angles of a triangle sum to $180^{\\circ}$: $(2x + 9) + (x + 5) + (3x - 14) = 180$.\nStep 2: Combine like terms: $6x = 180$, so $x = 30$. The angles measure $2(30) + 9 = 69$, $30 + 5 = 35$, and $3(30) - 14 = 76$ degrees.\nStep 3: The largest angle is $76^{\\circ}$ and the smallest is $35^{\\circ}$, so the difference is $76 - 35 = 41$ degrees. Check: $69 + 35 + 76 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts the two largest angles, $76 - 69$, instead of the largest minus the smallest.\n* Choice B ($30$): stops at $x = 30$, which is not an angle measure.\n* Choice C ($34$): subtracts $69 - 35$, treating the middle angle as the largest.\n\n**Test Day Takeaway:** When the angles of a triangle are given as expressions, solve for $x$ first, then evaluate every angle; the question is about the angles, not about $x$.",
  skills: ["triangle-angle-sum"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A pond contains $240$ fish. The number of fish in the pond decreases by $15\\%$ each year. Which equation represents this situation, where $n$ is the number of fish in the pond $t$ years from now?",
  choices: [
    // distractor: uses the 15% lost each year as the multiplier instead of the 85% that remains
    { id: "A", text: "$n = 240(0.15)^{t}$" },
    { id: "B", text: "$n = 240(0.85)^{t}$" },
    // distractor: models a 15% yearly increase rather than a 15% yearly decrease
    { id: "C", text: "$n = 240(1.15)^{t}$" },
    // distractor: adds 0.85 to 1 instead of subtracting 0.15 from 1
    { id: "D", text: "$n = 240(1.85)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Losing $15\\%$ each year keeps $85\\%$ each year, so the yearly multiplier is $0.85$ and $n = 240(0.85)^{t}$.\n\n**The Full Solution:**\nStep 1: A quantity that changes by the same percent each year is modeled by $n = n_0 b^{t}$, where $n_0$ is the starting amount and $b$ is the yearly multiplier.\nStep 2: The starting amount is $240$ fish. A $15\\%$ decrease leaves $100\\% - 15\\% = 85\\%$, so $b = 0.85$.\nStep 3: So $n = 240(0.85)^{t}$. Check after one year: $240(0.85) = 204$, and $240 - 0.15(240) = 240 - 36 = 204$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($n = 240(0.15)^{t}$): uses the $15\\%$ that is lost as the multiplier, which would leave only $36$ fish after one year.\n* Choice C ($n = 240(1.15)^{t}$): models a $15\\%$ increase each year.\n* Choice D ($n = 240(1.85)^{t}$): adds $0.85$ to $1$; any base greater than $1$ makes the number of fish grow.\n\n**Test Day Takeaway:** For a decrease of $r\\%$ per period, the base is $1 - \\frac{r}{100}$, which is less than $1$; for an increase, it is $1 + \\frac{r}{100}$.",
  skills: ["exponential-growth-decay"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$(x - 12)^2 + (y + 5)^2 = r^2$\nThe point $(20, 1)$ lies on the circle in the $xy$-plane defined by the given equation, where $r$ is a positive constant. What is the value of $r$?",
  choices: [
    { id: "A", text: "$10$" },
    // distractor: adds the horizontal and vertical distances, 8 + 6, instead of using the Pythagorean theorem
    { id: "B", text: "$14$" },
    // distractor: reports the diameter, 2r = 20, instead of the radius
    { id: "C", text: "$20$" },
    // distractor: reports r squared, 100, instead of r
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute the point: $(20 - 12)^2 + (1 + 5)^2 = 64 + 36 = 100 = r^2$, so $r = 10$.\n\n**The Full Solution:**\nStep 1: In $(x - h)^2 + (y - k)^2 = r^2$, the center is $(h, k)$ and the radius is $r$, so this circle has center $(12, -5)$.\nStep 2: Any point on the circle satisfies the equation. Substituting $(20, 1)$: $(20 - 12)^2 + (1 + 5)^2 = 8^2 + 6^2 = 64 + 36 = 100$.\nStep 3: So $r^2 = 100$, and since $r > 0$, $r = 10$. Check: the distance from $(12, -5)$ to $(20, 1)$ is $\\sqrt{8^2 + 6^2} = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): adds the horizontal distance $8$ and the vertical distance $6$; the radius is the straight-line distance, $\\sqrt{8^2 + 6^2}$.\n* Choice C ($20$): this is the diameter of the circle, $2r$.\n* Choice D ($100$): this is $r^2$, the right side of the equation, not $r$.\n\n**Test Day Takeaway:** A point on a circle satisfies its equation, so substitute the point to get $r^2$ directly, then take the positive square root.",
  skills: ["circle-equation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "The area of a rectangle is $90$ square inches. The length of the rectangle is $3$ inches more than twice its width. What is the perimeter, in inches, of the rectangle?",
  choices: [
    // distractor: adds the width and length, 6 + 15, without doubling to get all four sides
    { id: "A", text: "$21$" },
    // distractor: writes the length as 2w - 3 instead of 2w + 3, so w(2w - 3) = 90 gives w = 7.5, a length of 12, and a perimeter of 39
    { id: "B", text: "$39$" },
    { id: "C", text: "$42$" },
    // distractor: treats the rectangle as a square of side 15, computing 4 times the length
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** With width $w$, the area gives $w(2w + 3) = 90$, so $w = 6$ and the length is $15$; the perimeter is $2(6 + 15) = 42$ inches.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. The length is $2w + 3$, so the area is $w(2w + 3) = 90$, or $2w^2 + 3w - 90 = 0$.\nStep 2: Factor: $(2w + 15)(w - 6) = 0$, so $w = 6$ or $w = -\\frac{15}{2}$. A width must be positive, so $w = 6$ inches and the length is $2(6) + 3 = 15$ inches.\nStep 3: The perimeter is $2(6) + 2(15) = 42$ inches. Check: $6 \\times 15 = 90$ square inches ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): adds one width and one length, $6 + 15$; a rectangle has two of each.\n* Choice B ($39$): writes the length as $2w - 3$. Then $w(2w - 3) = 90$ gives $w = 7.5$ and a length of $12$, for a perimeter of $39$, but that length is $3$ less than twice the width, not $3$ more.\n* Choice D ($60$): uses $4 \\times 15$, as if all four sides were the length.\n\n**Test Day Takeaway:** When the area and a relationship between the sides are given, write the area as a product in one variable, solve the quadratic, keep the positive root, and answer the question that was asked.",
  skills: ["triangle-area"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^2 + y^2 - 18x + 8y + c = 0$\nIn the given equation, $c$ is a constant. The graph of the equation in the $xy$-plane is a circle with radius $12$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-47$" },
    // distractor: computes 144 - 97 instead of 97 - 144, flipping the sign of c
    { id: "B", text: "$47$" },
    // distractor: sets 97 - c equal to the radius 12 rather than to 12 squared
    { id: "C", text: "$85$" },
    // distractor: adds, computing 97 + 144 instead of 97 - 144
    { id: "D", text: "$241$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x - 9)^2 + (y + 4)^2 = 97 - c$, and the right side must equal $12^2 = 144$, so $c = 97 - 144 = -47$.\n\n**The Full Solution:**\nStep 1: Group and complete the square: $x^2 - 18x + 81 + y^2 + 8y + 16 = -c + 81 + 16$.\nStep 2: This is $(x - 9)^2 + (y + 4)^2 = 97 - c$, a circle with center $(9, -4)$ and $r^2 = 97 - c$.\nStep 3: The radius is $12$, so $97 - c = 144$ and $c = -47$. Check: the point $(21, -4)$ is $12$ units from the center, and $21^2 + (-4)^2 - 18(21) + 8(-4) - 47 = 441 + 16 - 378 - 32 - 47 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($47$): solves $97 - c = 144$ as $c = 144 - 97$, losing the sign.\n* Choice C ($85$): sets $97 - c$ equal to the radius, $12$, instead of the radius squared, $144$.\n* Choice D ($241$): computes $97 + 144$, adding where it should subtract.\n\n**Test Day Takeaway:** In a circle written in expanded form, complete the square in $x$ and in $y$; the constant that ends up on the right side is $r^2$, not $r$.",
  skills: ["circle-equation", "completing-square-circles"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the estimated population $P$, in thousands, of a town $t$ years after $1980$. Which equation represents this relationship?",
  questionTable: { headers: ["$t$ (years)", "$P$ (thousands)"], rows: [["$0$", "$250$"], ["$10$", "$200$"], ["$20$", "$160$"], ["$30$", "$128$"]] },
  choices: [
    // distractor: uses the 20% lost every 10 years as the base instead of the 0.8 that remains
    { id: "A", text: "$P = 250(0.2)^{\\frac{t}{10}}$" },
    { id: "B", text: "$P = 250(0.8)^{\\frac{t}{10}}$" },
    // distractor: treats each year as a full 10-year period, so the population falls ten times too fast
    { id: "C", text: "$P = 250(0.8)^{t}$" },
    // distractor: uses 1 + 0.8 as the base, turning the decrease into growth
    { id: "D", text: "$P = 250(1.8)^{\\frac{t}{10}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Every $10$ years the population is multiplied by $\\frac{200}{250} = 0.8$, starting from $250$, so $P = 250(0.8)^{\\frac{t}{10}}$.\n\n**The Full Solution:**\nStep 1: At $t = 0$, $P = 250$, so the initial value is $250$.\nStep 2: Each row is $0.8$ times the row before it: $\\frac{200}{250} = \\frac{160}{200} = \\frac{128}{160} = 0.8$. The rows are $10$ years apart, so there are $\\frac{t}{10}$ factors of $0.8$ after $t$ years.\nStep 3: So $P = 250(0.8)^{\\frac{t}{10}}$. Check at $t = 30$: $250(0.8)^{3} = 250(0.512) = 128$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($P = 250(0.2)^{\\frac{t}{10}}$): uses the $20\\%$ that is lost every $10$ years as the base; it would give $50$ thousand at $t = 10$.\n* Choice C ($P = 250(0.8)^{t}$): multiplies by $0.8$ every year, which gives $200$ thousand at $t = 1$ instead of at $t = 10$.\n* Choice D ($P = 250(1.8)^{\\frac{t}{10}}$): has a base greater than $1$, so the population would increase.\n\n**Test Day Takeaway:** Read an exponential table by dividing consecutive outputs to get the factor, then divide $t$ by the spacing of the inputs to count how many times that factor applies.",
  skills: ["exponential-growth-decay"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A phone plan charges a fixed monthly fee plus $d$ dollars per gigabyte for all data used beyond $8$ gigabytes. Using $20$ gigabytes in a month costs \\$186, and using $32$ gigabytes costs \\$258. What is the fixed monthly fee, in dollars?",
  choices: [
    // distractor: reports d, the charge per gigabyte, instead of the fixed monthly fee
    { id: "A", text: "$6$" },
    // distractor: subtracts 6 times 20 rather than 6 times 12, ignoring the 8 gigabytes that are not charged
    { id: "B", text: "$66$" },
    { id: "C", text: "$114$" },
    // distractor: subtracts 6 times 8, charging only for the 8 gigabytes that are included
    { id: "D", text: "$138$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The charged gigabytes rise from $12$ to $24$ while the cost rises by \\$72, so $d = 6$; the fee is then $186 - 12(6) = 114$ dollars.\n\n**The Full Solution:**\nStep 1: Only data beyond $8$ gigabytes is charged per gigabyte, so the two months are charged for $20 - 8 = 12$ and $32 - 8 = 24$ gigabytes. With fee $F$: $F + 12d = 186$ and $F + 24d = 258$.\nStep 2: Subtract the first equation from the second: $12d = 72$, so $d = 6$.\nStep 3: Substitute: $F + 12(6) = 186$, so $F = 114$. Check the second month: $114 + 24(6) = 114 + 144 = 258$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): this is $d$, the charge per gigabyte, not the fixed fee.\n* Choice B ($66$): computes $186 - 6(20)$, charging for all $20$ gigabytes and ignoring the $8$ that are not charged.\n* Choice D ($138$): computes $186 - 6(8)$, charging for the $8$ included gigabytes instead of the $12$ beyond them.\n\n**Test Day Takeaway:** When a plan includes an allowance, subtract it from each usage amount before writing the equations; the rate comes from the change in charged units.",
  skills: ["word-problem-to-equation"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$g(x) = f(x - k) + 3$\nThe function $g$ is defined by the given equation, where $k$ is a constant. The maximum value of $f$ occurs at $x = 18$, and the maximum value of $g$ occurs at $x = 26$. What is the value of $k$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is 8.**\n\n**The Fast Way (~20s):** Replacing $x$ with $x - k$ shifts the graph $k$ units right, and the $+3$ moves it only up, so $18 + k = 26$ and $k = 8$.\n\n**The Full Solution:**\nStep 1: The graph of $y = f(x - k)$ is the graph of $y = f(x)$ shifted $k$ units to the right. Adding $3$ shifts it up, which does not change where the maximum occurs horizontally.\nStep 2: So the maximum of $g$ occurs at $x = 18 + k$.\nStep 3: Set $18 + k = 26$: $k = 8$. Check: $g(26) = f(26 - 8) + 3 = f(18) + 3$, the largest value $f$ takes, plus $3$ ✓\n\n**Common Mistakes:**\n* $-8$: shifts the graph the wrong way, reading $f(x - k)$ as a shift of $k$ units to the left.\n* $44$: adds the two locations, $18 + 26$, instead of finding the distance between them.\n* $11$: adds the vertical shift $3$ to the horizontal shift of $8$; the $+3$ moves the maximum up, not sideways.\n\n**Test Day Takeaway:** Inside the function, $x - k$ moves a graph right by $k$; outside, $+c$ moves it up by $c$. Track horizontal and vertical shifts separately.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the number of students in two grades at a school who own a pet and who do not own a pet. One of these students will be selected at random. What is the probability of selecting a student who owns a pet?",
  questionTable: { headers: ["Grade", "Owns a pet", "Does not own a pet", "Total"], rows: [["Grade 9", "$96$", "$44$", "$140$"], ["Grade 10", "$29$", "$31$", "$60$"], ["Total", "$125$", "$75$", "$200$"]] },
  choices: [
    // distractor: uses only the grade 9 pet owners, 96, over the grand total instead of the whole Owns a pet column
    { id: "A", text: "$\\frac{96}{200}$" },
    { id: "B", text: "$\\frac{125}{200}$" },
    // distractor: conditions on grade 9 by dividing 96 by 140 rather than using all 200 students
    { id: "C", text: "$\\frac{96}{140}$" },
    // distractor: gives the probability of selecting a grade 9 student, not a pet owner
    { id: "D", text: "$\\frac{140}{200}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The Owns a pet column totals $125$ out of $200$ students, so the probability is $\\frac{125}{200}$.\n\n**The Full Solution:**\nStep 1: The selection is from all of these students, so the denominator is the grand total, $200$.\nStep 2: The favorable outcomes are all pet owners in either grade: $96 + 29 = 125$, the total of the Owns a pet column.\nStep 3: So the probability is $\\frac{125}{200}$. Check: $\\frac{125}{200} + \\frac{75}{200} = 1$, since every student either owns a pet or does not ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{96}{200}$): counts only the grade 9 pet owners and leaves out the $29$ in grade 10.\n* Choice C ($\\frac{96}{140}$): is the probability that a grade 9 student owns a pet, which restricts the selection to grade 9.\n* Choice D ($\\frac{140}{200}$): is the probability of selecting a grade 9 student.\n\n**Test Day Takeaway:** For a probability over everyone in a two-way table, use the column or row total over the grand total; restrict the denominator only when the question names a group.",
  skills: ["probability-basics"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = a(x - 9)^2 + 14$, where $a$ is a constant. If $f(1) = -2$, what is the value of $a$?",
  correctAnswer: "-0.25",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is -0.25.**\n\n**The Fast Way (~20s):** $f(1) = a(1 - 9)^2 + 14 = 64a + 14$, and $64a + 14 = -2$ gives $a = -\\frac{16}{64} = -0.25$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 1$: $f(1) = a(1 - 9)^2 + 14 = a(-8)^2 + 14 = 64a + 14$.\nStep 2: Set this equal to the given value: $64a + 14 = -2$, so $64a = -16$.\nStep 3: Divide by $64$: $a = -\\frac{1}{4} = -0.25$. Check: $-0.25(64) + 14 = -16 + 14 = -2$ ✓ (Either $-0.25$ or $-\\frac{1}{4}$ is accepted.)\n\n**Common Mistakes:**\n* $0.25$: gets $64a = 16$ by subtracting in the wrong direction; the output drops from $14$ to $-2$, so $a$ must be negative.\n* $0.1875$: adds $14$ instead of subtracting it, solving $64a = -2 + 14 = 12$.\n* $2$: forgets to square $1 - 9$, solving $-8a + 14 = -2$.\n\n**Test Day Takeaway:** With a function in vertex form and one more point, substitute the point and solve for $a$; remember that $(x - h)^2$ is always nonnegative, so the sign of $a$ comes from the direction the output moves.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = g(x)$ is shown, where $g(x) = a(x - 12)^2 + 4$ and $a$ is a constant. The graph of $y = g(x) + 5$ in the $xy$-plane intersects the $x$-axis at the points $(p, 0)$ and $(q, 0)$, where $p < q$. What is the value of $q - p$?",
  diagram: { type: "parabola", params: { vertex: { h: 12, k: 4 }, a: -0.25, xRange: [0, 24], yRange: [-8, 8], xTickInterval: 4, yTickInterval: 2, gridInterval: 2, showVertex: false } },
  choices: [
    // distractor: reads the distance between the x-intercepts of the graph shown, 16 - 8, instead of the shifted graph
    { id: "A", text: "$8$" },
    { id: "B", text: "$12$" },
    // distractor: reports the larger x-intercept, q = 18, rather than the distance between the two
    { id: "C", text: "$18$" },
    // distractor: adds the two x-intercepts, 6 + 18, instead of subtracting them
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** The graph passes through $(8, 0)$, so $16a + 4 = 0$ and $a = -\\frac{1}{4}$; then $-\\frac{1}{4}(x - 12)^2 + 9 = 0$ gives $x - 12 = \\pm 6$, so the intercepts are $6$ and $18$ and $q - p = 12$.\n\n**The Full Solution:**\nStep 1: The graph shown crosses the $x$-axis at $(8, 0)$, so $a(8 - 12)^2 + 4 = 0$, which gives $16a = -4$ and $a = -\\frac{1}{4}$.\nStep 2: Then $g(x) + 5 = -\\frac{1}{4}(x - 12)^2 + 9$. Setting it equal to $0$: $(x - 12)^2 = 36$, so $x - 12 = 6$ or $x - 12 = -6$.\nStep 3: The $x$-intercepts are $p = 6$ and $q = 18$, so $q - p = 12$. Check: $-\\frac{1}{4}(18 - 12)^2 + 9 = -9 + 9 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): measures the distance between the $x$-intercepts of the graph shown, $16 - 8$. Shifting the graph up $5$ units moves the intercepts farther apart.\n* Choice C ($18$): this is $q$ alone, not the distance $q - p$.\n* Choice D ($24$): adds $p + q = 6 + 18$ instead of subtracting.\n\n**Test Day Takeaway:** Use a point from the graph to find the missing constant, then solve the shifted equation; a vertical shift changes where a parabola meets the $x$-axis but not its axis of symmetry.",
  skills: ["quadratics"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $ABC$ has a perimeter of $80$ centimeters, and two of its sides have lengths of $18$ centimeters and $28$ centimeters. Triangle $DEF$ is similar to triangle $ABC$ and has a perimeter of $20$ meters. What is the length of the longest side of triangle $DEF$, in meters?",
  choices: [
    // distractor: scales the 18-centimeter side instead of the longest side
    { id: "A", text: "$4.5$" },
    // distractor: scales the 28-centimeter side instead of the longest side
    { id: "B", text: "$7$" },
    { id: "C", text: "$8.5$" },
    // distractor: takes the longest side to be half the perimeter of triangle DEF
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The third side of triangle $ABC$ is $80 - 18 - 28 = 34$ centimeters, the longest side, and it is $\\frac{34}{80}$ of the perimeter; $\\frac{34}{80}(20) = 8.5$ meters.\n\n**The Full Solution:**\nStep 1: Find the third side of triangle $ABC$: $80 - 18 - 28 = 34$ centimeters. Since $34 > 28 > 18$, this is the longest side.\nStep 2: In similar triangles, each side is the same fraction of the perimeter. The longest side of triangle $ABC$ is $\\frac{34}{80}$ of its perimeter.\nStep 3: So the longest side of triangle $DEF$ is $\\frac{34}{80}(20) = 8.5$ meters. Check: the other sides are $\\frac{18}{80}(20) = 4.5$ and $\\frac{28}{80}(20) = 7$ meters, and $4.5 + 7 + 8.5 = 20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): scales the $18$-centimeter side, the shortest side.\n* Choice B ($7$): scales the $28$-centimeter side, which is not the longest once the third side is found.\n* Choice D ($10$): takes half of the perimeter of triangle $DEF$; no side of a triangle can be half its perimeter.\n\n**Test Day Takeaway:** Similar figures keep the same proportions, so a side's share of the perimeter carries over; find the missing side first so you scale the right one, and the units take care of themselves.",
  skills: ["similar-triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A tank contains $3.2$ liters of water. After $250$ milliliters of water are removed, water drains from the tank at a constant rate of $145$ milliliters per minute. What is the least number of whole minutes of draining after which the tank contains less than $500$ milliliters of water?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**The correct answer is 17.**\n\n**The Fast Way (~40s):** In milliliters, $3{,}200 - 250 - 145m < 500$ gives $145m > 2{,}450$, so $m > 16.9$, and the least whole number of minutes is $17$.\n\n**The Full Solution:**\nStep 1: Convert to milliliters: $3.2$ liters is $3{,}200$ milliliters. After $250$ milliliters are removed, $2{,}950$ milliliters remain, and after $m$ minutes of draining, $2{,}950 - 145m$ milliliters remain.\nStep 2: Less than $500$ milliliters remain when $2{,}950 - 145m < 500$, so $145m > 2{,}450$ and $m > \\frac{2{,}450}{145} \\approx 16.9$.\nStep 3: The least whole number greater than $16.9$ is $17$. Check: after $16$ minutes, $2{,}950 - 145(16) = 630$ milliliters remain, and after $17$ minutes, $2{,}950 - 145(17) = 485$ milliliters remain, which is less than $500$ ✓\n\n**Common Mistakes:**\n* $16$: rounds $16.9$ down; after $16$ minutes the tank still holds $630$ milliliters.\n* $19$: forgets the $250$ milliliters removed first, solving $3{,}200 - 145m < 500$ to get $m > 18.6$.\n* $21$: ignores the $500$-milliliter level and finds when the tank would be empty, solving $2{,}950 - 145m < 0$ to get $m > 20.3$.\n\n**Test Day Takeaway:** Put every quantity in the same unit before writing the inequality, then round in the direction the inequality requires and test the integer you choose.",
  skills: ["inequalities"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{kx - 8}{2x + 5} = 3$\nIn the given equation, $k$ is an integer. For what value of $k$ does the equation have no solution?",
  choices: [
    // distractor: sets k + 6 = 0 instead of k - 6 = 0, flipping the sign when the 6x moves across
    { id: "A", text: "$-6$" },
    // distractor: uses the 3 on the right side as the needed coefficient, ignoring the 2 in the denominator
    { id: "B", text: "$3$" },
    { id: "C", text: "$6$" },
    // distractor: multiplies 3 by the denominator's constant 5 instead of by its coefficient 2
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Clearing the denominator gives $kx - 8 = 6x + 15$, or $(k - 6)x = 23$; when $k = 6$ this reads $0 = 23$, which is never true.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $2x + 5$: $kx - 8 = 3(2x + 5) = 6x + 15$.\nStep 2: Collect the $x$-terms: $(k - 6)x = 23$. If $k \\ne 6$, then $x = \\frac{23}{k - 6}$, which is a solution unless it equals $-\\frac{5}{2}$; that would require $k = -3.2$, which is not an integer.\nStep 3: If $k = 6$, the equation becomes $0 = 23$, which has no solution. Check: with $k = 6$, $\\frac{6x - 8}{2x + 5} = 3$ would require $6x - 8 = 6x + 15$, which is impossible ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): moves the $6x$ across without changing its sign, getting $(k + 6)x = 23$.\n* Choice B ($3$): matches $k$ to the $3$ on the right side, forgetting that the denominator's $2x$ is multiplied by $3$ as well.\n* Choice D ($15$): multiplies $3$ by the constant $5$ in the denominator instead of by the coefficient $2$.\n\n**Test Day Takeaway:** To find when a rational equation has no solution, clear the denominator and look for the value that cancels the $x$-terms and leaves a false statement; then make sure no excluded value is involved.",
  skills: ["rational-expressions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\sqrt{9x + b} = x + 2$\nIn the given equation, $b$ is a constant, and $x = 12$ is a solution. What is the value of $b$?",
  choices: [
    // distractor: forgets to square the right side, solving 108 + b = 14
    { id: "A", text: "$-94$" },
    // distractor: squares x + 2 as x^2 + 4, solving 108 + b = 148
    { id: "B", text: "$40$" },
    { id: "C", text: "$88$" },
    // distractor: adds 108 to 196 instead of subtracting it
    { id: "D", text: "$304$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** At $x = 12$ the right side is $14$, so $9(12) + b = 14^2 = 196$, which gives $b = 196 - 108 = 88$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 12$: $\\sqrt{108 + b} = 12 + 2 = 14$.\nStep 2: Square both sides: $108 + b = 196$.\nStep 3: Subtract $108$: $b = 88$. Check: $\\sqrt{9(12) + 88} = \\sqrt{196} = 14$, and $12 + 2 = 14$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-94$): skips the squaring step and solves $108 + b = 14$.\n* Choice B ($40$): squares $x + 2$ as $x^2 + 4$, getting $148$ instead of $196$, so $b = 148 - 108 = 40$.\n* Choice D ($304$): adds $108$ to $196$ instead of subtracting it.\n\n**Test Day Takeaway:** When a solution is given, substitute it first; then remove the square root by squaring the whole other side, $(x + 2)^2$, not each term.",
  skills: ["radical-equations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The perimeter of right triangle $QRS$ shown is $90$ units, and $\\cos R = \\frac{12}{13}$. What is the length of $\\overline{RQ}$?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 5]], labels: ["R", "Q", "S"], rightAngleVertex: 1, figureNote: true } },
  correctAnswer: "36",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is 36.**\n\n**The Fast Way (~30s):** $\\cos R = \\frac{12}{13}$ makes the sides a $5$-$12$-$13$ triple scaled by $k$; the perimeter is $30k = 90$, so $k = 3$ and $RQ = 12(3) = 36$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so for angle $R$ the adjacent leg is $\\overline{RQ}$ and the hypotenuse is $\\overline{RS}$. Then $\\cos R = \\frac{RQ}{RS} = \\frac{12}{13}$, so $RQ = 12k$ and $RS = 13k$ for some $k > 0$.\nStep 2: By the Pythagorean theorem, $QS = \\sqrt{(13k)^2 - (12k)^2} = 5k$, so the perimeter is $12k + 5k + 13k = 30k = 90$, and $k = 3$.\nStep 3: So $RQ = 12(3) = 36$. Check: the sides are $36$, $15$, and $39$; $36 + 15 + 39 = 90$ and $36^2 + 15^2 = 1{,}296 + 225 = 1{,}521 = 39^2$ ✓\n\n**Common Mistakes:**\n* $12$: reads the numerator of $\\cos R$ as the actual length without scaling to the perimeter.\n* $15$: finds $QS$, the leg opposite angle $R$, instead of the adjacent leg $RQ$.\n* $39$: finds $RS$, the hypotenuse, instead of $RQ$.\n\n**Test Day Takeaway:** A trig ratio fixes the shape, not the size: write the sides as multiples of a common $k$, use the perimeter to find $k$, then scale the side you need.",
  skills: ["soh-cah-toa"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An account earns $4.8\\%$ annual interest, compounded quarterly. Its balance $t$ years after a deposit of \\$45,000 is $45{,}000b^{t}$ dollars, where $b$ is a constant. Which of the following is closest to the value of $b$?",
  choices: [
    // distractor: reports the quarterly growth factor 1.012 as though the exponent counted years
    { id: "A", text: "$1.012$" },
    // distractor: uses the annual rate as 1 + 0.048, ignoring that interest compounds four times a year
    { id: "B", text: "$1.048$" },
    { id: "C", text: "$1.049$" },
    // distractor: raises the annual factor 1.048 to the fourth power, compounding a full year four times
    { id: "D", text: "$1.206$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each quarter multiplies the balance by $1 + \\frac{0.048}{4} = 1.012$, and there are four quarters a year, so $b = 1.012^{4} \\approx 1.049$.\n\n**The Full Solution:**\nStep 1: With quarterly compounding, the quarterly rate is $\\frac{4.8\\%}{4} = 1.2\\%$, so each quarter multiplies the balance by $1.012$.\nStep 2: After $t$ years there have been $4t$ quarters: $45{,}000(1.012)^{4t} = 45{,}000\\left(1.012^{4}\\right)^{t}$.\nStep 3: So $b = 1.012^{4} \\approx 1.04887$, which is closest to $1.049$. Check: after one year, $45{,}000(1.04887) \\approx 47{,}199$ dollars, slightly more than the $45{,}000(1.048) = 47{,}160$ dollars that simple annual interest would give ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.012$): is the factor for one quarter, not for one year.\n* Choice B ($1.048$): uses the annual rate as if interest were compounded once a year.\n* Choice D ($1.206$): computes $1.048^{4}$, applying the full annual rate four times in one year.\n\n**Test Day Takeaway:** For interest compounded $n$ times a year, the yearly factor is $\\left(1 + \\frac{r}{n}\\right)^{n}$; quarterly compounding always gives a yearly factor slightly greater than $1 + r$.",
  skills: ["exponential-functions"]
}
      ]
    }
  ]
};

export default practiceTest8;
