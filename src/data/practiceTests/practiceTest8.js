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
  question: "The table shows the wave height, in meters, recorded at five wind speeds, in knots. Which of the following equations is the most appropriate linear model for the data, where $y$ is the wave height, in meters, at a wind speed of $x$ knots?",
  questionTable: { headers: ["Wind speed (knots)", "Wave height (meters)"], rows: [["10", "1.3"], ["15", "1.9"], ["20", "2.3"], ["25", "2.6"], ["30", "3.1"]] },
  choices: [
    // distractor: has both signs wrong: the heights increase as wind speed increases, and this model gives a negative height at every wind speed in the table
    { id: "A", text: "$y = -0.08x - 0.6$" },
    // distractor: uses a negative slope, but the wave height increases as the wind speed increases
    { id: "B", text: "$y = -0.08x + 0.6$" },
    // distractor: uses a negative constant; at 10 knots this model gives 0.08(10) - 0.6 = 0.2 meter, far from the recorded 1.3 meters
    { id: "C", text: "$y = 0.08x - 0.6$" },
    { id: "D", text: "$y = 0.08x + 0.6$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The heights increase with wind speed, so the slope is positive. At $x = 10$, $0.08(10) + 0.6 = 1.4$ is close to the recorded $1.3$, but $0.08(10) - 0.6 = 0.2$ is not.\n\n**The Full Solution:**\nStep 1: As the wind speed increases from $10$ to $30$ knots, the wave height increases from $1.3$ to $3.1$ meters, so the slope of the model is positive. This rules out choices A and B.\nStep 2: Test choices C and D at $x = 10$: choice C gives $0.08(10) - 0.6 = 0.2$, and choice D gives $0.08(10) + 0.6 = 1.4$.\nStep 3: The recorded height at $10$ knots is $1.3$ meters, which is close to $1.4$, so choice D is the most appropriate model. Check: at $x = 30$, choice D gives $0.08(30) + 0.6 = 3.0$, close to the recorded $3.1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: has a negative slope and a negative constant; it gives negative heights for every wind speed in the table.\n* Choice B: has a negative slope, so it predicts the wave height falling as the wind speed rises.\n* Choice C: has the right slope but a negative constant; it gives $0.2$ meter at $10$ knots instead of a value near $1.3$.\n\n**Test Day Takeaway:** Match the sign of the slope to the trend in the data, then test one data value to check the constant.",
  skills: ["scatterplots", "linear-functions"]
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
  question: "The table shows the number of pens of each color in a box. If one of these pens is selected at random, what is the probability of selecting a pen that is not black? (Express your answer as a decimal or fraction, not as a percent.)",
  questionTable: { headers: ["Color", "Number of pens"], rows: [["Blue", "18"], ["Black", "14"], ["Red", "8"]] },
  correctAnswer: "13/20",
  explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $\\frac{13}{20}$.**\n\n**The Fast Way (~20s):** There are $18 + 14 + 8 = 40$ pens, and $18 + 8 = 26$ of them are not black, so the probability is $\\frac{26}{40} = \\frac{13}{20}$.\n\n**The Full Solution:**\nStep 1: Add the table: $18 + 14 + 8 = 40$ pens in the box.\nStep 2: The pens that are not black are the blue and red pens: $18 + 8 = 26$.\nStep 3: The probability is $\\frac{26}{40} = \\frac{13}{20}$, or $0.65$. Check: the probability of selecting a black pen is $\\frac{14}{40} = \\frac{7}{20}$, and $\\frac{13}{20} + \\frac{7}{20} = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{7}{20}$: finds the probability of selecting a black pen, $\\frac{14}{40}$, instead of a pen that is not black.\n* $\\frac{9}{20}$: counts only the blue pens, $\\frac{18}{40}$, leaving out the red pens.\n* $\\frac{13}{7}$: compares the $26$ pens that are not black with the $14$ black pens instead of with all $40$ pens.\n\n**Test Day Takeaway:** A probability divides the favorable outcomes by all possible outcomes. For \"not\" questions, either count the other groups directly or subtract the probability of the named group from $1$.",
  skills: ["probability-basics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$y = x^{2} - 6x + 11$\n$y = 2x + c$\nIn the given system of equations, $c$ is a constant. The graphs of the equations intersect at exactly one point. What is the value of $c$?",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Setting the two expressions for $y$ equal gives $x^{2} - 8x + (11 - c) = 0$, and exactly one intersection point means the discriminant is $0$: $64 - 4(11 - c) = 0$, so $c = -5$.\n\n**The Full Solution:**\nStep 1: Substitute $2x + c$ for $y$ in the first equation: $2x + c = x^{2} - 6x + 11$. Rearrange: $x^{2} - 8x + (11 - c) = 0$.\nStep 2: The graphs intersect at exactly one point when this quadratic has exactly one real root, so its discriminant is $0$: $(-8)^{2} - 4(1)(11 - c) = 0$.\nStep 3: Solve: $64 - 44 + 4c = 0$, so $4c = -20$ and $c = -5$. Check: with $c = -5$ the quadratic is $x^{2} - 8x + 16 = (x - 4)^{2}$, with the single root $x = 4$; both equations give $y = 3$ there, since $16 - 24 + 11 = 3$ and $2(4) - 5 = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): uses $-6$ as the $x$-coefficient without subtracting $2x$. Then $36 - 4(11 - c) = 0$ gives $c = 2$, but the line $y = 2x + 2$ crosses the parabola twice.\n* Choice C ($5$): reaches $4c = -20$ correctly and then loses the negative sign.\n* Choice D ($7$): combines $-6x - 2x$ as $-4x$. Then $16 - 4(11 - c) = 0$ gives $c = 7$.\n\n**Test Day Takeaway:** A line and a parabola with exactly one point in common give a combined quadratic with discriminant $0$. Collect the $x$-terms carefully before you square the coefficient.",
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
  question: "The table shows the number of songs on each of $26$ albums. What is the median number of songs on these albums?",
  questionTable: { headers: ["Number of songs", "Number of albums"], rows: [["8", "2"], ["9", "4"], ["10", "5"], ["11", "6"], ["12", "9"]] },
  choices: [
    // distractor: finds the median of the Number of albums column, 2, 4, 5, 6, 9, instead of the median number of songs
    { id: "A", text: "$5$" },
    // distractor: picks the middle row of the table, 10 songs, without using the number of albums in each row
    { id: "B", text: "$10$" },
    { id: "C", text: "$11$" },
    // distractor: picks the number of songs with the most albums, 12
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** With $26$ albums, the median is the mean of the $13$th and $14$th values. Counting up, $2 + 4 + 5 = 11$ albums have $10$ or fewer songs, and the next $6$ (the $12$th through $17$th) have $11$ songs, so the median is $11$.\n\n**The Full Solution:**\nStep 1: There are $2 + 4 + 5 + 6 + 9 = 26$ albums, an even number, so the median is the mean of the $13$th and $14$th values in order.\nStep 2: Count from the least value: $2$ albums have $8$ songs (values $1$ to $2$), $4$ have $9$ (values $3$ to $6$), $5$ have $10$ (values $7$ to $11$), and $6$ have $11$ (values $12$ to $17$).\nStep 3: The $13$th and $14$th values are both $11$, so the median is $11$. Check: $11$ albums have fewer than $11$ songs and $9$ have more, so the $13$th and $14$th values both fall among the $6$ albums with $11$ songs ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): is the median of the Number of albums column, not of the numbers of songs.\n* Choice B ($10$): is the middle row of the table, but the rows hold different numbers of albums.\n* Choice D ($12$): is the number of songs with the most albums, not the middle value.\n\n**Test Day Takeaway:** In a frequency table, count through the frequencies to find where the middle value falls; the middle row of the table is not the median.",
  skills: ["find-median"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ is perpendicular to the graph of $5x + 2y = 8$. What is the slope of line $\\ell$?",
  correctAnswer: "2/5",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{2}{5}$.**\n\n**The Fast Way (~25s):** The graph of $5x + 2y = 8$ has slope $-\\frac{5}{2}$, and a perpendicular line has the negative reciprocal slope, $\\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Solve $5x + 2y = 8$ for $y$: $2y = -5x + 8$, so $y = -\\frac{5}{2}x + 4$, and its slope is $-\\frac{5}{2}$.\nStep 2: Perpendicular slopes are negative reciprocals: flip $-\\frac{5}{2}$ to $-\\frac{2}{5}$ and change the sign.\nStep 3: The slope of line $\\ell$ is $\\frac{2}{5}$, or $0.4$. Check: $\\left(-\\frac{5}{2}\\right)\\left(\\frac{2}{5}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-\\frac{5}{2}$: gives the slope of the given line, which is the slope of a parallel line.\n* $-\\frac{2}{5}$: takes the reciprocal but does not change the sign.\n* $\\frac{5}{2}$: changes the sign but does not take the reciprocal.\n\n**Test Day Takeaway:** Put the equation in $y = mx + b$ form to read its slope, then flip the slope and change its sign; the two slopes must multiply to $-1$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right triangle has angles measuring $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$. The length of the shorter leg of the triangle is $20$ inches. What is the area, in square inches, of the triangle?",
  choices: [
    // distractor: computes the longer leg as (sqrt(3)/2)(20) = 10*sqrt(3) instead of 20*sqrt(3), so the area is (1/2)(20)(10*sqrt(3))
    { id: "A", text: "$100\\sqrt{3}$" },
    // distractor: treats the legs as equal, as in a 45-45-90 triangle, so the area is (1/2)(20)(20) = 200
    { id: "B", text: "$200$" },
    { id: "C", text: "$200\\sqrt{3}$" },
    // distractor: multiplies the two legs, 20 and 20*sqrt(3), and forgets the factor of 1/2
    { id: "D", text: "$400\\sqrt{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The longer leg is $20\\sqrt{3}$, so the area is $\\frac{1}{2}(20)(20\\sqrt{3}) = 200\\sqrt{3}$ square inches.\n\n**The Full Solution:**\nStep 1: In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the sides are in the ratio $a : a\\sqrt{3} : 2a$, where $a$ is the shorter leg. Here $a = 20$.\nStep 2: The longer leg is $20\\sqrt{3}$ inches, and the hypotenuse is $40$ inches.\nStep 3: The legs are perpendicular, so the area is $\\frac{1}{2}(20)(20\\sqrt{3}) = 200\\sqrt{3}$ square inches. Check: $20^{2} + (20\\sqrt{3})^{2} = 400 + 1{,}200 = 1{,}600 = 40^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($100\\sqrt{3}$): computes the longer leg as $\\frac{\\sqrt{3}}{2}(20) = 10\\sqrt{3}$. That rule applies to the hypotenuse; the longer leg is $\\sqrt{3}$ times the shorter leg.\n* Choice B ($200$): treats the legs as equal, as in a $45^{\\circ}$-$45^{\\circ}$-$90^{\\circ}$ triangle.\n* Choice D ($400\\sqrt{3}$): multiplies the legs and forgets the factor of $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Write the ratio $a : a\\sqrt{3} : 2a$ first. The area of a right triangle is half the product of its two legs.",
  skills: ["triangle-area"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the graphs of $8x - 6y = 21$ and $y = \\frac{c}{3}x - 4$, where $c$ is a constant, do not intersect. What is the value of $c$?",
  choices: [
    // distractor: drops the sign when dividing by -6, taking the first slope as -4/3 and getting c = -4
    { id: "A", text: "$-4$" },
    // distractor: uses the reciprocal 3/4 as the slope of the first graph, so c/3 = 3/4 and c = 9/4
    { id: "B", text: "$\\frac{9}{4}$" },
    { id: "C", text: "$4$" },
    // distractor: reads the slope of the first graph as 8, the coefficient of x, so c/3 = 8 and c = 24
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Solving $8x - 6y = 21$ for $y$ gives slope $\\frac{4}{3}$; graphs that do not intersect are parallel, so $\\frac{c}{3} = \\frac{4}{3}$ and $c = 4$.\n\n**The Full Solution:**\nStep 1: Rewrite the first equation in slope-intercept form: $-6y = -8x + 21$, so $y = \\frac{4}{3}x - \\frac{7}{2}$.\nStep 2: Two lines in the $xy$-plane that do not intersect are parallel and distinct, so their slopes are equal: $\\frac{c}{3} = \\frac{4}{3}$.\nStep 3: Multiply both sides by $3$: $c = 4$. Check: with $c = 4$, the second line is $y = \\frac{4}{3}x - 4$; the slopes match and the $y$-intercepts, $-\\frac{7}{2}$ and $-4$, differ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): divides by $-6$ without changing the sign of the $x$-term, getting slope $-\\frac{4}{3}$.\n* Choice B ($\\frac{9}{4}$): uses the reciprocal $\\frac{3}{4}$ as the slope of the first graph.\n* Choice D ($24$): treats $8$, the coefficient of $x$, as the slope of the first graph.\n\n**Test Day Takeaway:** Put both equations in $y = mx + b$ form before comparing slopes, and watch the sign when dividing by a negative coefficient.",
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
  question: "Triangles $PQR$ and $STU$ are similar, and side $PQ$ corresponds to side $ST$. The areas of triangles $PQR$ and $STU$ are $16$ and $36$ square units, respectively. If $PQ = 30$, what is the value of $ST$?",
  choices: [
    // distractor: inverts the scale factor, multiplying 30 by 4/6 instead of by 6/4
    { id: "A", text: "$20$" },
    { id: "B", text: "$45$" },
    // distractor: adds the difference of the areas, 36 - 16 = 20, to PQ instead of scaling it
    { id: "C", text: "$50$" },
    // distractor: multiplies 30 by the area ratio 36/16 instead of by its square root
    { id: "D", text: "$67.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The ratio of the areas is $\\frac{36}{16}$, so the ratio of corresponding sides is $\\sqrt{\\frac{36}{16}} = \\frac{6}{4} = \\frac{3}{2}$, and $ST = 30 \\cdot \\frac{3}{2} = 45$.\n\n**The Full Solution:**\nStep 1: The ratio of the area of triangle $STU$ to the area of triangle $PQR$ is $\\frac{36}{16} = \\frac{9}{4}$.\nStep 2: For similar figures, the ratio of the areas is the square of the ratio of corresponding sides, so $\\frac{ST}{PQ} = \\sqrt{\\frac{9}{4}} = \\frac{3}{2}$.\nStep 3: Solve: $ST = 30 \\cdot \\frac{3}{2} = 45$. Check: $\\left(\\frac{45}{30}\\right)^{2} = \\frac{9}{4}$, and $16 \\cdot \\frac{9}{4} = 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): uses the scale factor upside down, $30 \\cdot \\frac{2}{3} = 20$. Triangle $STU$ has the greater area, so $ST$ must be greater than $PQ$.\n* Choice C ($50$): adds the difference of the areas to $PQ$. Similar figures scale by multiplying, not by adding.\n* Choice D ($67.5$): multiplies by the area ratio itself, $30 \\cdot \\frac{36}{16} = 67.5$, skipping the square root.\n\n**Test Day Takeaway:** Lengths scale by $k$ and areas by $k^{2}$. Going from an area ratio to a length ratio always takes a square root.",
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
  question: "$p(x) = 2x^{2} + kx - 20$\nThe function $p$ is defined by the given equation, where $k$ is a constant. If $x - 4$ is a factor of $p(x)$, what is the sum of the solutions to $p(x) = 0$?",
  correctAnswer: "1.5",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~40s):** Since $x - 4$ is a factor, $p(4) = 0$: $32 + 4k - 20 = 0$, so $k = -3$. Then $2x^{2} - 3x - 20 = (x - 4)(2x + 5)$, whose solutions $4$ and $-2.5$ add to $1.5$.\n\n**The Full Solution:**\nStep 1: If $x - 4$ is a factor of $p(x)$, then $p(4) = 0$: $2(4)^{2} + 4k - 20 = 0$, so $12 + 4k = 0$ and $k = -3$.\nStep 2: Factor $p(x) = 2x^{2} - 3x - 20$: $(x - 4)(2x + 5)$, since $2x \\cdot (-4) + 5x = -3x$ and $(-4)(5) = -20$.\nStep 3: The solutions to $p(x) = 0$ are $x = 4$ and $x = -\\frac{5}{2}$, and their sum is $4 - 2.5 = 1.5$. Check: the sum of the solutions of $ax^{2} + bx + c = 0$ is $-\\frac{b}{a} = -\\frac{-3}{2} = 1.5$ ✓\n\n**Common Mistakes:**\n* $-3$: reports the value of $k$ instead of the sum of the solutions.\n* $-1.5$: uses $p(-4) = 0$, which gives $k = 3$ and the solutions $-4$ and $2.5$.\n* $6.5$: finds both solutions but adds $4 + 2.5$, dropping the negative sign of $-2.5$.\n\n**Test Day Takeaway:** \"$x - a$ is a factor of $p(x)$\" means $p(a) = 0$. Use it to find the constant, then factor or use $-\\frac{b}{a}$ for the sum of the solutions.",
  skills: ["finding-roots-factoring"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows five values of $x$ and their corresponding values of $f(x)$ for the function $f$. The function $g$ is defined by $g(x) = f(x - 2)$. If $g(a) = 5$, what is the value of $a$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["1", "3"], ["2", "5"], ["3", "1"], ["4", "4"], ["5", "2"]] },
  choices: [
    // distractor: shifts in the wrong direction, solving a + 2 = 2 instead of a - 2 = 2
    { id: "A", text: "$0$" },
    // distractor: treats 5 as the input, computing g(5) = f(3) = 1
    { id: "B", text: "$1$" },
    // distractor: finds f(2) = 5 and reports 2, forgetting that the input of f is a - 2
    { id: "C", text: "$2$" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $g(a) = f(a - 2) = 5$, and the table shows $f(x) = 5$ only when $x = 2$, so $a - 2 = 2$ and $a = 4$.\n\n**The Full Solution:**\nStep 1: By the definition of $g$, $g(a) = f(a - 2)$, so the equation $g(a) = 5$ means $f(a - 2) = 5$.\nStep 2: In the $f(x)$ column, $5$ appears only in the row $x = 2$, so $a - 2 = 2$.\nStep 3: Add $2$: $a = 4$. Check: $g(4) = f(4 - 2) = f(2) = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): shifts the wrong way, solving $a + 2 = 2$. In $f(x - 2)$, the input of $f$ is $2$ less than $x$.\n* Choice B ($1$): treats $5$ as the input and computes $g(5) = f(3) = 1$.\n* Choice C ($2$): finds $f(2) = 5$ and reports $2$, which is the input of $f$, not the value of $a$.\n\n**Test Day Takeaway:** For $g(x) = f(x - h)$, find the input of $f$ that gives the required output, then add $h$ to get the input of $g$.",
  skills: ["function-transformations"]
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
  question: "A store increased the price of a coat by $30\\%$. Later, the store increased the new price by $p\\%$. The final price was $56\\%$ greater than the original price. What is the value of $p$?",
  choices: [
    // distractor: finds the second multiplier, 1.2, and reports it as the value of p
    { id: "A", text: "$1.2$" },
    { id: "B", text: "$20$" },
    // distractor: subtracts 30 from 56, treating the two percent increases as additive
    { id: "C", text: "$26$" },
    // distractor: reports the second multiplier, 1.2, as 120 instead of the percent increase, 20
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The final price is $156\\%$ of the original and the first increase made it $130\\%$; since $\\frac{1.56}{1.30} = 1.2$, the second increase multiplied the price by $1.2$, an increase of $20\\%$.\n\n**The Full Solution:**\nStep 1: Let the original price be $x$. After the $30\\%$ increase, the price is $1.30x$. After the second increase, it is $1.30x\\left(1 + \\frac{p}{100}\\right)$.\nStep 2: A final price $56\\%$ greater than the original is $1.56x$, so $1.30\\left(1 + \\frac{p}{100}\\right) = 1.56$.\nStep 3: Divide by $1.30$: $1 + \\frac{p}{100} = 1.2$, so $p = 20$. Check with $x = 100$: $100 \\to 130 \\to 130(1.2) = 156$, which is $56\\%$ greater than $100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.2$): this is the second multiplier, not the percent increase it represents.\n* Choice C ($26$): subtracts $56 - 30$, as if percent increases added. The second percent is taken of the already increased price, so it must be less than $26$.\n* Choice D ($120$): writes the multiplier $1.2$ as a percent; the increase is $120 - 100 = 20$ percent.\n\n**Test Day Takeaway:** Successive percent changes multiply: write each change as a multiplier, set the product equal to the overall multiplier, and solve. Percents taken of different bases never simply add.",
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
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, for data set A. The line of best fit for data set A is $y = 0.5x - 4$. Data set B is made by tripling the $y$-coordinate of every data point in data set A. The line of best fit for data set B is $y = mx + b$, where $m$ and $b$ are constants. What is the value of $b$?",
  diagram: { type: "scatterplot", params: { points: [[20, 6.9], [25, 7.4], [30, 11.6], [35, 12.8], [40, 17.3], [45, 18], [50, 21.8], [55, 22.3], [60, 26.4]], xMin: 15, xMax: 65, yMin: 0, yMax: 30, xGridStep: 5, yGridStep: 5, xLabelStep: 10, yLabelStep: 10, xLabel: "x", yLabel: "y", bestFitLine: { slope: 0.5, intercept: -4 } } },
  correctAnswer: "-12",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~30s):** Tripling every $y$-value triples every $y$-value on the line of best fit too, so the new line is $y = 3(0.5x - 4) = 1.5x - 12$, and $b = -12$.\n\n**The Full Solution:**\nStep 1: Each point $(x, y)$ in data set A becomes $(x, 3y)$ in data set B, so the whole pattern is stretched vertically by a factor of $3$.\nStep 2: The line of best fit is stretched the same way: each predicted value $0.5x - 4$ becomes $3(0.5x - 4)$.\nStep 3: So the line of best fit for data set B is $y = 1.5x - 12$, which gives $m = 1.5$ and $b = -12$. Check: at $x = 20$, data set A's line predicts $0.5(20) - 4 = 6$, and data set B's line predicts $1.5(20) - 12 = 18 = 3(6)$ ✓\n\n**Common Mistakes:**\n* $-4$: triples the slope but keeps the original $y$-intercept.\n* $1.5$: gives the slope $m$ instead of the $y$-intercept $b$.\n* $-1$: adds $3$ to the $y$-intercept instead of multiplying it by $3$.\n\n**Test Day Takeaway:** Multiplying every $y$-value by $k$ multiplies the whole equation of the line of best fit by $k$, so both the slope and the $y$-intercept change.",
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
  question: "Triangle $ABC$ has a perimeter of $80$ centimeters, and two of its sides have lengths of $18$ centimeters and $28$ centimeters. Triangle $DEF$ is similar to triangle $ABC$ and has a perimeter of $120$ centimeters. What is the length, in centimeters, of the longest side of triangle $DEF$?",
  choices: [
    // distractor: scales the 18-centimeter side instead of the longest side
    { id: "A", text: "$27$" },
    // distractor: scales the 28-centimeter side, which is not the longest side once the third side is found
    { id: "B", text: "$42$" },
    { id: "C", text: "$51$" },
    // distractor: takes the longest side to be half the perimeter of triangle DEF
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The third side of triangle $ABC$ is $80 - 18 - 28 = 34$ centimeters, the longest side; the scale factor is $\\frac{120}{80} = 1.5$, so the longest side of triangle $DEF$ is $34(1.5) = 51$ centimeters.\n\n**The Full Solution:**\nStep 1: Find the third side of triangle $ABC$: $80 - 18 - 28 = 34$ centimeters. Since $34 > 28 > 18$, this is the longest side.\nStep 2: The perimeters of similar triangles are in the same ratio as corresponding sides, so the scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{120}{80} = 1.5$.\nStep 3: The longest side of triangle $DEF$ is $34(1.5) = 51$ centimeters. Check: the other sides are $18(1.5) = 27$ and $28(1.5) = 42$ centimeters, and $27 + 42 + 51 = 120$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): scales the $18$-centimeter side, the shortest side.\n* Choice B ($42$): scales the $28$-centimeter side, which is not the longest once the third side is found.\n* Choice D ($60$): takes half of the perimeter of triangle $DEF$; no side of a triangle can be half its perimeter.\n\n**Test Day Takeaway:** In similar triangles, perimeters scale by the same factor as sides. Find the missing side first so you scale the right one.",
  skills: ["similar-triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A tank contains $3.2$ liters of water. Water drains from the tank at a constant rate of $145$ milliliters per minute. What is the least number of whole minutes after which the tank contains less than $500$ milliliters of water?",
  correctAnswer: "19",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**The correct answer is 19.**\n\n**The Fast Way (~35s):** In milliliters, $3{,}200 - 145m < 500$ gives $145m > 2{,}700$, so $m > 18.6$, and the least whole number of minutes is $19$.\n\n**The Full Solution:**\nStep 1: Convert to milliliters: $3.2$ liters is $3{,}200$ milliliters, so after $m$ minutes of draining, $3{,}200 - 145m$ milliliters remain.\nStep 2: Less than $500$ milliliters remain when $3{,}200 - 145m < 500$, so $145m > 2{,}700$ and $m > \\frac{2{,}700}{145} \\approx 18.6$.\nStep 3: The least whole number greater than $18.6$ is $19$. Check: after $18$ minutes, $3{,}200 - 145(18) = 590$ milliliters remain, and after $19$ minutes, $3{,}200 - 145(19) = 445$ milliliters remain, which is less than $500$ ✓\n\n**Common Mistakes:**\n* $18$: rounds $18.6$ down; after $18$ minutes the tank still holds $590$ milliliters.\n* $23$: ignores the $500$-milliliter level and finds when the tank would be empty, solving $3{,}200 - 145m < 0$ to get $m > 22.1$.\n\n**Test Day Takeaway:** Put every quantity in the same unit before writing the inequality, then round in the direction the inequality requires and test the integer you choose.",
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
  question: "A savings account had a balance of \\$5,000 when it was opened. The balance increases by $6\\%$ every $2$ years. Which equation gives the balance $B$, in dollars, $t$ years after the account was opened?",
  choices: [
    // distractor: uses 0.94, which would model a 6% decrease every 2 years
    { id: "A", text: "$B = 5{,}000(0.94)^{\\frac{t}{2}}$" },
    // distractor: splits the 6% evenly over the 2 years and uses 3% per year, ignoring that the growth compounds
    { id: "B", text: "$B = 5{,}000(1.03)^{t}$" },
    { id: "C", text: "$B = 5{,}000(1.06)^{\\frac{t}{2}}$" },
    // distractor: multiplies t by 2 in the exponent, which would model a 6% increase every half year
    { id: "D", text: "$B = 5{,}000(1.06)^{2t}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The balance is multiplied by $1.06$ once every $2$ years, which happens $\\frac{t}{2}$ times in $t$ years, so $B = 5{,}000(1.06)^{\\frac{t}{2}}$.\n\n**The Full Solution:**\nStep 1: An increase of $6\\%$ multiplies the balance by $1 + 0.06 = 1.06$.\nStep 2: The increase happens once every $2$ years, so in $t$ years it happens $\\frac{t}{2}$ times.\nStep 3: Starting from $5{,}000$, the balance is $B = 5{,}000(1.06)^{\\frac{t}{2}}$. Check: at $t = 2$, $B = 5{,}000(1.06) = 5{,}300$, which is $6\\%$ more than $5{,}000$; at $t = 4$, $B = 5{,}300(1.06) = 5{,}618$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the factor $0.94$, which describes a $6\\%$ decrease, not an increase.\n* Choice B: spreads the $6\\%$ over two years as $3\\%$ per year. That gives $5{,}000(1.03)^{2} = 5{,}304.50$ after $2$ years, not $5{,}300$.\n* Choice D: the exponent $2t$ applies the factor $1.06$ twice each year, so the balance would grow by $6\\%$ every half year.\n\n**Test Day Takeaway:** For a change of $r\\%$ every $k$ years, the model is $a\\left(1 \\pm \\frac{r}{100}\\right)^{\\frac{t}{k}}$: the factor comes from the percent, and the exponent counts the $k$-year periods.",
  skills: ["exponential-growth-decay"]
}
      ]
    }
  ]
};

export default practiceTest8;
