// Practice Test 5 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): fresh content on the frozen
// slot skeleton (docs/TEST_RECREATION_SPEC.md). Diagrams at Q6 (right
// triangle), Q7 (data table), Q21 (scatterplot), Q22 (two-way table).
// Scenario palette shared with the main test 5 files: aquatic center /
// pool chemistry, theater props/stage crew, harbor ferry.

export const practiceTest5M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "A repair service charges a one-time fee plus a fixed amount for each hour of work. The table shows the total charge, in dollars, for three jobs. The function $C$ gives the total charge, in dollars, for a job that takes $h$ hours. Which equation defines $C$?",
      questionTable: { headers: ["Hours of work", "Total charge (dollars)"], rows: [["$4$", "$440$"], ["$7$", "$635$"], ["$12$", "$960$"]] },
      choices: [
        // distractor: finds the hourly rate of 65 but drops the one-time fee
        { id: "A", text: "$C(h) = 65h$" },
        // distractor: divides one total by its hours (440/4 = 110) and treats the whole charge as hourly
        { id: "B", text: "$C(h) = 110h$" },
        { id: "C", text: "$C(h) = 65h + 180$" },
        // distractor: swaps the two constants, charging 180 dollars per hour and 65 dollars once
        { id: "D", text: "$C(h) = 180h + 65$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Three more hours raise the charge by $635 - 440 = 195$ dollars, so the rate is $65$ dollars per hour, and the fee is $440 - 4(65) = 180$ dollars.\n\n**The Full Solution:**\nStep 1: A one-time fee plus a fixed amount per hour is linear: $C(h) = rh + f$, where $r$ is the hourly rate and $f$ is the fee.\nStep 2: Use the first two rows to find the rate: $r = \\frac{635 - 440}{7 - 4} = \\frac{195}{3} = 65$.\nStep 3: Substitute the first row to find the fee: $440 = 65(4) + f$, so $f = 440 - 260 = 180$, and $C(h) = 65h + 180$. Check the third row: $65(12) + 180 = 780 + 180 = 960$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($C(h) = 65h$): uses the correct hourly rate but leaves out the one-time fee; it gives $C(4) = 260$, not $440$.\n* Choice B ($C(h) = 110h$): divides $440$ by $4$ and treats the whole charge as an hourly rate; it gives $C(7) = 770$, not $635$.\n* Choice D ($C(h) = 180h + 65$): swaps the rate and the fee, giving $C(4) = 785$.\n\n**Test Day Takeaway:** For a fee-plus-rate situation, the change in the total divided by the change in the input is the rate; whatever is left over at any row is the one-time fee.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "A right circular cylinder has a diameter of $4$ centimeters and a height of $9$ centimeters. The volume of the cylinder is $k\\pi$ cubic centimeters. What is the value of $k$?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~15s):** The radius is half the diameter, $2$, so $V = \\pi(2)^{2}(9) = 36\\pi$ and $k = 36$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^{2}h$, and the radius is half the diameter: $r = \\frac{4}{2} = 2$ centimeters.\nStep 2: Substitute $r = 2$ and $h = 9$: $V = \\pi(2)^{2}(9) = \\pi(4)(9) = 36\\pi$ cubic centimeters.\nStep 3: Match this with $k\\pi$: $k = 36$. Check: $36\\pi \\div 9 = 4\\pi$, the area of a circular base of radius $2$ ✓\n\n**Common Mistakes:**\n* $144$: uses the diameter $4$ as the radius, computing $\\pi(4)^{2}(9) = 144\\pi$.\n* $18$: forgets to square the radius, computing $\\pi(2)(9) = 18\\pi$.\n* $113$: rounds the whole volume, $36\\pi \\approx 113.1$, instead of reporting the coefficient of $\\pi$.\n\n**Test Day Takeaway:** Halve a diameter before it goes into $\\pi r^{2}h$, and when the answer is written as $k\\pi$, report only the number in front of $\\pi$.",
      skills: ["volume-prism"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$2(x - 4)^{2} - 7$\nWhich expression is equivalent to the given expression?",
      choices: [
        { id: "A", text: "$2x^{2} - 16x + 25$" },
        // distractor: multiplies the x-terms by 2 but not the 16, leaving 16 - 7 = 9
        { id: "B", text: "$2x^{2} - 16x + 9$" },
        // distractor: doubles the squared term but copies the middle term -8x without doubling it
        { id: "C", text: "$2x^{2} - 8x + 25$" },
        // distractor: expands (x - 4)^2 as x^2 + 8x + 16, flipping the sign of the middle term
        { id: "D", text: "$2x^{2} + 16x + 25$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $(x - 4)^{2} = x^{2} - 8x + 16$; doubling gives $2x^{2} - 16x + 32$, and $32 - 7 = 25$.\n\n**The Full Solution:**\nStep 1: Square the binomial first: $(x - 4)^{2} = x^{2} - 8x + 16$.\nStep 2: Multiply every term by $2$: $2(x^{2} - 8x + 16) = 2x^{2} - 16x + 32$.\nStep 3: Subtract $7$: $2x^{2} - 16x + 32 - 7 = 2x^{2} - 16x + 25$. Check at $x = 0$: the given expression is $2(16) - 7 = 25$, and $2(0)^{2} - 16(0) + 25 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x^{2} - 16x + 9$): multiplies the $x$-terms by $2$ but not the $16$, so it computes $16 - 7 = 9$ for the constant.\n* Choice C ($2x^{2} - 8x + 25$): doubles the squared term and the constant but leaves the middle term as $-8x$.\n* Choice D ($2x^{2} + 16x + 25$): expands $(x - 4)^{2}$ with $+8x$, flipping the sign of the middle term.\n\n**Test Day Takeaway:** Expand the square completely before multiplying by the outside coefficient, and make sure that coefficient reaches every term; a quick check at $x = 0$ catches a missed constant.",
      skills: ["distributive-property", "converting-quadratic-forms"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Cement, sand, and gravel are mixed in the ratio $2 : 3 : k$ by volume. A batch with $18$ cubic feet of cement has a total volume of $99$ cubic feet. What is the value of $k$?",
      choices: [
        // distractor: confuses the size of one part, 9, with the total number of parts, solving 2 + 3 + k = 9
        { id: "A", text: "$4$" },
        { id: "B", text: "$6$" },
        // distractor: treats the remaining 99 - 18 = 81 cubic feet as gravel alone, giving 81/9 = 9 parts
        { id: "C", text: "$9$" },
        // distractor: reports the total number of parts, 99/9 = 11, instead of k
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Cement is $2$ parts and $18$ cubic feet, so one part is $9$ cubic feet; the batch is $\\frac{99}{9} = 11$ parts, and $k = 11 - 2 - 3 = 6$.\n\n**The Full Solution:**\nStep 1: Write the three volumes as $2x$, $3x$, and $kx$ cubic feet, where $x$ is the volume of one part. Cement gives $2x = 18$, so $x = 9$.\nStep 2: The total volume is $(2 + 3 + k)x = 99$, so $2 + 3 + k = \\frac{99}{9} = 11$.\nStep 3: Solve: $k = 11 - 5 = 6$. Check: $2(9) + 3(9) + 6(9) = 18 + 27 + 54 = 99$ cubic feet ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): treats the part size, $9$, as the total number of parts, solving $2 + 3 + k = 9$.\n* Choice C ($9$): subtracts only the cement, treating the remaining $99 - 18 = 81$ cubic feet as gravel, which gives $\\frac{81}{9} = 9$ parts and ignores the sand.\n* Choice D ($11$): reports the total number of parts rather than the gravel's share of them.\n\n**Test Day Takeaway:** In a part-to-part ratio, use the known amount to find the size of one part, then count parts; the unknown ratio term is the total parts minus the known ones.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Line $j$ is parallel to the line $y = -\\frac{1}{2}x + 3$ in the $xy$-plane and passes through the point $(0, 10)$. If line $j$ also passes through the point $(6, d)$, what is the value of $d$?",
      choices: [
        // distractor: uses the y-intercept of the given line, 3, instead of the point (0, 10): -1/2(6) + 3 = 0
        { id: "A", text: "$0$" },
        { id: "B", text: "$7$" },
        // distractor: uses slope +1/2 instead of -1/2: 1/2(6) + 10 = 13
        { id: "C", text: "$13$" },
        // distractor: uses the perpendicular slope 2 instead of the parallel slope -1/2: 2(6) + 10 = 22
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $j$ has slope $-\\frac{1}{2}$ and $y$-intercept $10$, so it is $y = -\\frac{1}{2}x + 10$, and $d = -\\frac{1}{2}(6) + 10 = 7$.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, so line $j$ has slope $-\\frac{1}{2}$.\nStep 2: Line $j$ passes through $(0, 10)$, a point with $x$-coordinate $0$, so its $y$-intercept is $10$ and line $j$ is $y = -\\frac{1}{2}x + 10$.\nStep 3: Substitute $x = 6$: $d = -\\frac{1}{2}(6) + 10 = -3 + 10 = 7$. Check: the slope from $(0, 10)$ to $(6, 7)$ is $\\frac{7 - 10}{6 - 0} = -\\frac{1}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): uses the $y$-intercept of the given line, $3$, instead of $10$. Parallel lines share a slope, not a $y$-intercept.\n* Choice C ($13$): drops the negative sign of the slope, computing $\\frac{1}{2}(6) + 10$.\n* Choice D ($22$): uses the perpendicular slope $2$, computing $2(6) + 10$.\n\n**Test Day Takeaway:** A parallel line keeps the slope; a given point with $x$-coordinate $0$ gives the new $y$-intercept.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the figure shown, triangle $PQR$ is similar to triangle $STU$, where $P$, $Q$, and $R$ correspond to $S$, $T$, and $U$, respectively. The area of triangle $PQR$ is $24$ square units. What is the area, in square units, of triangle $STU$?",
      diagram: { type: "similarTriangles", params: { triangle1: { labels: ["P", "Q", "R"], sideLabels: ["6", "", ""] }, triangle2: { labels: ["S", "T", "U"], sideLabels: ["15", "", ""] }, figureNote: true } },
      correctAnswer: "150",
      explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~20s):** The sides scale by $\\frac{15}{6} = 2.5$, so the areas scale by $2.5^{2} = 6.25$, and $24(6.25) = 150$.\n\n**The Full Solution:**\nStep 1: Corresponding sides $PQ$ and $ST$ give the scale factor: $\\frac{ST}{PQ} = \\frac{15}{6} = 2.5$.\nStep 2: Areas of similar figures scale by the square of the scale factor: $(2.5)^{2} = 6.25$.\nStep 3: Multiply: the area of triangle $STU$ is $24(6.25) = 150$ square units. Check: $\\frac{150}{24} = 6.25 = \\left(\\frac{15}{6}\\right)^{2}$ ✓\n\n**Common Mistakes:**\n* $60$: scales the area by $2.5$ instead of $2.5^{2}$, computing $24(2.5) = 60$.\n* $33$: adds the difference in side lengths to the area, computing $24 + (15 - 6) = 33$.\n* $3.84$: inverts the scale factor, computing $24(0.4)^{2} = 3.84$, which shrinks the larger triangle.\n\n**Test Day Takeaway:** Lengths of similar figures scale by $k$, but areas scale by $k^{2}$; square the side ratio before applying it to an area.",
      skills: ["similar-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "At a school, $60\\%$ of students take a science elective and $42\\%$ of students take a science elective and play a sport. What is the probability that a randomly selected student who takes a science elective plays a sport?",
      choices: [
        // distractor: subtracts the two percents, 0.60 - 0.42 = 0.18, which is the share taking an elective but not playing a sport
        { id: "A", text: "$0.18$" },
        // distractor: multiplies the two percents, 0.60(0.42) = 0.252, as if they were independent probabilities
        { id: "B", text: "$0.252$" },
        // distractor: reports the joint probability 0.42 without restricting to students who take an elective
        { id: "C", text: "$0.42$" },
        { id: "D", text: "$0.70$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Restrict to the $60\\%$ who take an elective; $42\\%$ of all students are in that group and play a sport, so the probability is $\\frac{0.42}{0.60} = 0.70$.\n\n**The Full Solution:**\nStep 1: The condition is that the student takes a science elective, so the group being chosen from is the $60\\%$ of students who do.\nStep 2: The students in that group who also play a sport make up $42\\%$ of all students.\nStep 3: Divide the part by the group: $\\frac{0.42}{0.60} = 0.70$. Check with $100$ students: $60$ take an elective, $42$ of them play a sport, and $\\frac{42}{60} = 0.70$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.18$): subtracts, $0.60-0.42=0.18$, which is the share of all students who take an elective but do not play a sport.\n* Choice B ($0.252$): multiplies, $(0.60)(0.42) = 0.252$, which treats the $42\\%$ as a share of the elective group instead of a share of all students.\n* Choice C ($0.42$): reports the share of all students who do both, without restricting to students who take an elective.\n\n**Test Day Takeaway:** The phrase \"a randomly selected student who takes a science elective\" names the group to divide by; a conditional probability is the overlap divided by the size of that group.",
      skills: ["conditional-probability"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A savings account has a balance of \\$2,600, and the balance increases by $4.5\\%$ each year. The function $f$ gives the balance, in dollars, of the account $t$ years from now. Which equation defines $f$?",
      choices: [
        // distractor: uses the growth rate alone as the base instead of 1 plus the rate
        { id: "A", text: "$f(t) = 2{,}600(0.045)^{t}$" },
        // distractor: models the increase as simple growth, adding 4.5% of the original balance each year
        { id: "B", text: "$f(t) = 2{,}600(1 + 0.045t)$" },
        { id: "C", text: "$f(t) = 2{,}600(1.045)^{t}$" },
        // distractor: misplaces the decimal, treating 4.5% as 0.45 and growing 45% per year
        { id: "D", text: "$f(t) = 2{,}600(1.45)^{t}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A $4.5\\%$ increase each year multiplies the balance by $1 + 0.045 = 1.045$ once per year, so $f(t) = 2{,}600(1.045)^{t}$.\n\n**The Full Solution:**\nStep 1: Increasing an amount by $4.5\\%$ multiplies it by $1 + 0.045 = 1.045$.\nStep 2: Each year multiplies the previous year's balance by $1.045$, so after $t$ years the starting balance has been multiplied by $(1.045)^{t}$.\nStep 3: Start from $2{,}600$: $f(t) = 2{,}600(1.045)^{t}$. Check: $f(1) = 2{,}600(1.045) = 2{,}717$, and $4.5\\%$ of $2{,}600$ is $117$, with $2{,}600 + 117 = 2{,}717$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(t) = 2{,}600(0.045)^{t}$): uses the rate as the base; it gives $f(1) = 117$, which is only the first year's increase.\n* Choice B ($f(t) = 2{,}600(1 + 0.045t)$): adds the same $117$ dollars every year, which is linear growth, not a percent of the current balance.\n* Choice D ($f(t) = 2{,}600(1.45)^{t}$): writes $4.5\\%$ as $0.45$, which is a $45\\%$ increase each year.\n\n**Test Day Takeaway:** For growth by $r\\%$ each period, the base is $1 + \\frac{r}{100}$ and the exponent counts periods; the rate alone is never the base.",
      skills: ["exponential-functions"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the numbers of students in grades $9$ and $10$ at a school who do and do not walk to school. If a student in grade $9$ is selected at random, what is the probability that the student walks to school? (Express your answer as a decimal or fraction, not as a percent.)",
      questionTable: { headers: ["Grade", "Walks to school", "Does not walk to school", "Total"], rows: [["$9$", "$27$", "$63$", "$90$"], ["$10$", "$18$", "$72$", "$90$"], ["Total", "$45$", "$135$", "$180$"]] },
      correctAnswer: "0.3",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.3$.**\n\n**The Fast Way (~20s):** The student is chosen from grade $9$, so divide that row's walkers by that row's total: $\\frac{27}{90} = 0.3$.\n\n**The Full Solution:**\nStep 1: The condition \"a student in grade $9$\" restricts the choice to the grade $9$ row, which has $90$ students.\nStep 2: Of those $90$ students, $27$ walk to school, so the probability is $\\frac{27}{90}$.\nStep 3: Simplify: $\\frac{27}{90} = \\frac{3}{10} = 0.3$. Check: the other $63$ grade $9$ students give $\\frac{63}{90} = 0.7$, and $0.3 + 0.7 = 1$ ✓\n\n**Common Mistakes:**\n* $0.6$: divides by the walkers' column total, $\\frac{27}{45} = 0.6$, which is the probability that a student who walks is in grade $9$.\n* $0.15$: divides by the grand total, $\\frac{27}{180} = 0.15$, the probability that a student is in grade $9$ and walks, with no condition applied.\n* $0.25$: uses the walkers' total over the grand total, $\\frac{45}{180} = 0.25$, which ignores the grade $9$ restriction.\n\n**Test Day Takeaway:** The group named after \"If a student in …\" sets the denominator; here it is the grade $9$ row total, $90$.",
      skills: ["conditional-probability", "two-way-table"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$4x + 10y = 76$\n$6x + 15y = 114$\nHow many solutions does the given system of equations have?",
      choices: [
        // distractor: sees the different constants 76 and 114 and calls the lines parallel without checking that 76/114 matches 4/6 and 10/15
        { id: "A", text: "Zero" },
        // distractor: assumes that two equations with different coefficients must intersect at a single point
        { id: "B", text: "Exactly one" },
        // distractor: counts one solution per equation, as if each equation contributed its own solution
        { id: "C", text: "Exactly two" },
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Dividing the first equation by $2$ and the second by $3$ gives $2x + 5y = 38$ both times, so the two equations describe the same line.\n\n**The Full Solution:**\nStep 1: Divide each term of the first equation by $2$: $2x + 5y = 38$.\nStep 2: Divide each term of the second equation by $3$: $2x + 5y = 38$.\nStep 3: The equations are equivalent, so every point on the line $2x + 5y = 38$ satisfies both, and the system has infinitely many solutions. Check with two points: $(19, 0)$ gives $4(19) = 76$ and $6(19) = 114$, and $(4, 6)$ gives $16 + 60 = 76$ and $24 + 90 = 114$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): the constants $76$ and $114$ differ, but they are in the same ratio, $\\frac{2}{3}$, as the coefficients, so the lines are the same, not parallel and distinct.\n* Choice B (Exactly one): different-looking coefficients do not guarantee one intersection; $\\frac{4}{6} = \\frac{10}{15}$, so the lines have the same slope.\n* Choice C (Exactly two): two distinct lines meet at most once, so a linear system never has exactly two solutions.\n\n**Test Day Takeaway:** Compare the ratios of the $x$-coefficients, the $y$-coefficients, and the constants: all three equal means infinitely many solutions, only the first two equal means no solution.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mass of salt in a saltwater solution is proportional to the volume of the solution. The table shows the mass of salt in three samples of the solution. What is the mass, in grams, of salt in $250$ milliliters of the solution?",
      diagram: { type: "dataTable", params: { headers: ["Volume (milliliters)", "Mass of salt (milligrams)"], rows: [["20", "34"], ["50", "85"], ["80", "136"]] } },
      choices: [
        // distractor: divides the 425 milligrams by 10,000 instead of by 1,000
        { id: "A", text: "$0.0425$" },
        { id: "B", text: "$0.425$" },
        // distractor: divides the 425 milligrams by 100 instead of by 1,000
        { id: "C", text: "$4.25$" },
        // distractor: reports the mass in milligrams without converting to grams
        { id: "D", text: "$425$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each milliliter holds $\\frac{34}{20} = 1.7$ milligrams of salt, so $250$ milliliters hold $425$ milligrams, which is $0.425$ gram.\n\n**The Full Solution:**\nStep 1: Find the constant of proportionality from any row: $\\frac{34}{20} = 1.7$ milligrams per milliliter (and $\\frac{85}{50} = \\frac{136}{80} = 1.7$ as well).\nStep 2: Multiply by the new volume: $1.7(250) = 425$ milligrams.\nStep 3: Convert to grams, using $1{,}000$ milligrams per gram: $\\frac{425}{1{,}000} = 0.425$ gram. Check: $\\frac{425}{250} = 1.7$, the same rate as the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0425$): divides $425$ by $10{,}000$, moving the decimal point one place too far.\n* Choice C ($4.25$): divides $425$ by $100$, as if there were $100$ milligrams in a gram.\n* Choice D ($425$): is the mass in milligrams; the question asks for grams.\n\n**Test Day Takeaway:** Find the rate from the table first, then convert units only at the end; there are $1{,}000$ milligrams in a gram.",
      skills: ["unit-conversion"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, a triangle has vertices at $(1, 4)$, $(1, 14)$, and $(c, 4)$, where $c > 1$. The area of the triangle is $45$ square units. What is the value of $c$?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** The legs are $14 - 4 = 10$ and $c - 1$, so $\\frac{1}{2}(10)(c - 1) = 45$, which gives $c - 1 = 9$ and $c = 10$.\n\n**The Full Solution:**\nStep 1: The points $(1, 4)$ and $(1, 14)$ share an $x$-coordinate, so that side is vertical with length $14 - 4 = 10$. The points $(1, 4)$ and $(c, 4)$ share a $y$-coordinate, so that side is horizontal with length $c - 1$.\nStep 2: A vertical side and a horizontal side meet at a right angle at $(1, 4)$, so they are the base and height: $\\frac{1}{2}(10)(c - 1) = 45$.\nStep 3: Simplify: $5(c - 1) = 45$, so $c - 1 = 9$ and $c = 10$. Check: the legs are $10$ and $9$, and $\\frac{1}{2}(10)(9) = 45$ ✓\n\n**Common Mistakes:**\n* $9$: reports the horizontal leg, $c - 1 = 9$, instead of the coordinate $c$.\n* $5.5$: forgets the $\\frac{1}{2}$ in the area formula, solving $10(c - 1) = 45$.\n* $-8$: takes the horizontal leg to the left of $x = 1$, ignoring the condition $c > 1$.\n\n**Test Day Takeaway:** On the coordinate plane, a side between points with the same $x$- or $y$-coordinate has length equal to the difference of the other coordinate; once you have a leg, remember to convert it back to the coordinate the question asks for.",
      skills: ["triangle-area"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A store sold $34$ packs of batteries. Each pack contained either $4$ batteries or $12$ batteries, and the store sold a total of $264$ batteries. How many packs of $12$ batteries did the store sell?",
      choices: [
        { id: "A", text: "$16$" },
        // distractor: solves the system correctly but reports the number of 4-battery packs
        { id: "B", text: "$18$" },
        // distractor: divides the total number of batteries by 12, as if every pack held 12 batteries
        { id: "C", text: "$22$" },
        // distractor: divides the extra 128 batteries by 4 instead of by the difference of 8 batteries per pack
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** If all $34$ packs held $4$ batteries, the store would have sold $136$ batteries; the extra $264 - 136 = 128$ batteries come $8$ at a time from the larger packs, so there are $\\frac{128}{8} = 16$ packs of $12$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of $4$-battery packs and $b$ the number of $12$-battery packs: $a + b = 34$ and $4a + 12b = 264$.\nStep 2: Substitute $a = 34 - b$ into the second equation: $4(34 - b) + 12b = 264$, so $136 + 8b = 264$.\nStep 3: Solve: $8b = 128$, so $b = 16$. Check: $a = 18$, and $4(18) + 12(16) = 72 + 192 = 264$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): is the number of $4$-battery packs, the other variable in the system.\n* Choice C ($22$): divides $264$ by $12$, which assumes every pack holds $12$ batteries and ignores the total of $34$ packs.\n* Choice D ($32$): divides the extra $128$ batteries by $4$ instead of by $8$, the number of extra batteries in each larger pack.\n\n**Test Day Takeaway:** For a count-and-total problem, write one equation for the number of items and one for the total amount, then check that your answer is the variable the question names.",
      skills: ["word-problem-to-equation", "setting-up-systems"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$x^{2} - 14x + 58$\nThe given expression is equivalent to $(x - h)^{2} + k$, where $h$ and $k$ are constants. What is the value of $k$?",
      choices: [
        // distractor: computes 49 - 58 = -9 instead of 58 - 49 = 9
        { id: "A", text: "$-9$" },
        // distractor: reports h, the number inside the square, instead of k
        { id: "B", text: "$7$" },
        { id: "C", text: "$9$" },
        // distractor: forgets to subtract the 49 that completing the square introduces
        { id: "D", text: "$58$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Half of $-14$ is $-7$, and $(x - 7)^{2} = x^{2} - 14x + 49$, so the expression is $(x - 7)^{2} + 9$ and $k = 9$.\n\n**The Full Solution:**\nStep 1: Take half of the $x$-coefficient and square it: half of $-14$ is $-7$, and $(-7)^{2} = 49$.\nStep 2: Add and subtract $49$: $x^{2} - 14x + 49 - 49 + 58 = (x - 7)^{2} + 9$.\nStep 3: Match the form $(x - h)^{2} + k$: $h = 7$ and $k = 9$. Check at $x = 0$: the given expression is $58$, and $(0 - 7)^{2} + 9 = 49 + 9 = 58$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): subtracts in the wrong order, computing $49 - 58$ instead of $58 - 49$.\n* Choice B ($7$): is the value of $h$, not $k$.\n* Choice D ($58$): keeps the original constant, forgetting that the $49$ added to complete the square must be subtracted.\n\n**Test Day Takeaway:** Completing the square adds $\\left(\\frac{b}{2}\\right)^{2}$, so the same amount must come back out of the constant; checking at $x = 0$ catches a sign slip.",
      skills: ["quadratics"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. The lengths of $\\overline{AB}$, $\\overline{DE}$, and $\\overline{EF}$ are $4$, $10$, and $35$, respectively. What is the length of $\\overline{BC}$?",
      choices: [
        { id: "A", text: "$14$" },
        // distractor: subtracts the difference DE - AB = 6 from EF, treating similar triangles as differing by a constant amount
        { id: "B", text: "$29$" },
        // distractor: assumes corresponding sides are equal, as in congruent triangles
        { id: "C", text: "$35$" },
        // distractor: inverts the scale factor, computing 35 times 10/4
        { id: "D", text: "$87.5$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Triangle $ABC$ is $\\frac{4}{10} = 0.4$ times the size of triangle $DEF$, so $BC = 0.4(35) = 14$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional, and $\\overline{BC}$ corresponds to $\\overline{EF}$, so $\\frac{BC}{EF} = \\frac{AB}{DE}$.\nStep 2: Substitute: $\\frac{BC}{35} = \\frac{4}{10}$.\nStep 3: Multiply both sides by $35$: $BC = \\frac{4(35)}{10} = 14$. Check: $\\frac{14}{35} = 0.4 = \\frac{4}{10}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($29$): subtracts the difference $10 - 4 = 6$ from $35$; similar triangles differ by a scale factor, not by a fixed amount.\n* Choice C ($35$): treats the triangles as congruent, so that $BC$ equals $EF$.\n* Choice D ($87.5$): multiplies $35$ by $\\frac{10}{4}$, which enlarges instead of shrinking.\n\n**Test Day Takeaway:** Pair each side with its corresponding side, set the ratios equal, and check that the smaller triangle gets the smaller length.",
      skills: ["similar-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The bar graph shows the number of books a bookstore sold in each of four months. The number of books sold in March was $p\\%$ less than the number of books sold in February. What is the value of $p$?",
      diagram: { type: "barChart", params: { data: [{ label: "Jan", value: 240 }, { label: "Feb", value: 300 }, { label: "Mar", value: 180 }, { label: "Apr", value: 210 }], xAxisLabel: "Month", yAxisLabel: "Books sold", yMax: 330, yStep: 30 } },
      correctAnswer: "40",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~20s):** Sales fell by $300 - 180 = 120$ books, and $\\frac{120}{300} = 0.4$, or $40\\%$.\n\n**The Full Solution:**\nStep 1: Read the two bars: the bookstore sold $300$ books in February and $180$ books in March.\nStep 2: The decrease is $300 - 180 = 120$ books.\nStep 3: Percent decrease divides the change by the starting amount: $\\frac{120}{300} = 0.4$, or $40\\%$, so $p = 40$. Check: $300$ decreased by $40\\%$ is $300 - 0.4(300) = 180$ ✓\n\n**Common Mistakes:**\n* $66.7$: divides by the March value, $\\frac{120}{180} \\approx 0.667$, which is the percent increase needed to get back from March to February.\n* $60$: reports $\\frac{180}{300} = 0.6$, the percent of February's sales that remained, not the percent lost.\n* $120$: reports the drop in books, which is a count, not a percent.\n\n**Test Day Takeaway:** Percent change always divides by the starting value, the amount you move away from, never the amount you end at.",
      skills: ["percent-change"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Ana had $m$ dollars. She spent $\\frac{2}{5}$ of the money on a jacket and then spent \\$30 on shoes. She saved half of the money she had left. Which expression represents the amount of money, in dollars, that Ana saved?",
      choices: [
        { id: "A", text: "$\\frac{3}{10}m - 15$" },
        // distractor: halves only the m term and keeps the full 30 instead of halving it
        { id: "B", text: "$\\frac{3}{10}m - 30$" },
        // distractor: halves the 2/5 spent on the jacket instead of the 3/5 that remained
        { id: "C", text: "$\\frac{1}{5}m - 15$" },
        // distractor: stops after the shoes and never takes half of what was left
        { id: "D", text: "$\\frac{3}{5}m - 30$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** After the jacket Ana has $\\frac{3}{5}m$; after the shoes, $\\frac{3}{5}m - 30$; half of that is $\\frac{3}{10}m - 15$.\n\n**The Full Solution:**\nStep 1: Spending $\\frac{2}{5}$ of the money leaves $m - \\frac{2}{5}m = \\frac{3}{5}m$ dollars.\nStep 2: Spending $30$ more dollars leaves $\\frac{3}{5}m - 30$ dollars.\nStep 3: Half of that is saved: $\\frac{1}{2}\\left(\\frac{3}{5}m - 30\\right) = \\frac{3}{10}m - 15$. Check with $m = 100$: $100 - 40 = 60$, then $60 - 30 = 30$, then half is $15$, and $\\frac{3}{10}(100) - 15 = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{10}m - 30$): halves the $\\frac{3}{5}m$ but not the $30$; the half applies to the whole amount left.\n* Choice C ($\\frac{1}{5}m - 15$): halves the $\\frac{2}{5}$ that was spent instead of the $\\frac{3}{5}$ that remained.\n* Choice D ($\\frac{3}{5}m - 30$): is the amount Ana had left after buying the shoes, before she saved half of it.\n\n**Test Day Takeaway:** Translate one step at a time and keep each result in parentheses; when a later step takes a fraction of what is left, it applies to every term, including the constant.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "$2x^{2} + 2y^{2} - 24x + 16y - 24 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the length of the circle's radius?",
      correctAnswer: "8",
      explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~40s):** Dividing by $2$ gives $x^{2} - 12x + y^{2} + 8y = 12$; completing both squares adds $36 + 16$, so $(x - 6)^{2} + (y + 4)^{2} = 64$ and the radius is $8$.\n\n**The Full Solution:**\nStep 1: Divide every term by $2$ and move the constant: $x^{2} - 12x + y^{2} + 8y = 12$.\nStep 2: Complete each square. Half of $-12$ is $-6$, and $(-6)^{2} = 36$; half of $8$ is $4$, and $4^{2} = 16$. Add both to each side: $(x - 6)^{2} + (y + 4)^{2} = 12 + 36 + 16 = 64$.\nStep 3: The equation has the form $(x - h)^{2} + (y - k)^{2} = r^{2}$ with $r^{2} = 64$, so $r = 8$. Check: the point $(14, -4)$ is $8$ units from the center $(6, -4)$, and $2(196) + 2(16) - 24(14) + 16(-4) - 24 = 392 + 32 - 336 - 64 - 24 = 0$ ✓\n\n**Common Mistakes:**\n* $64$: reports $r^{2}$ instead of taking its square root.\n* $16$: reports the diameter, $2r$, instead of the radius.\n* $6.32$: moves the constant with the wrong sign, getting $r^{2} = -12 + 36 + 16 = 40$ and $r = \\sqrt{40} \\approx 6.32$.\n\n**Test Day Takeaway:** Divide out a common leading coefficient first, then complete the square in both $x$ and $y$, adding the same amounts to the other side; the number on the right is $r^{2}$, not $r$.",
      skills: ["circle-equation", "completing-square-circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$7x - 4 = k$\nIn the given equation, $k$ is a constant. Which expression is equal to $21x + 5$?",
      choices: [
        // distractor: adds 12 and 5 correctly but never triples k, treating 21x as k + 12
        { id: "A", text: "$k + 17$" },
        // distractor: triples k but not the 4, writing 21x as 3k + 4 before adding 5
        { id: "B", text: "$3k + 9$" },
        // distractor: stops at 21x = 3k + 12 and forgets to add the 5
        { id: "C", text: "$3k + 12$" },
        { id: "D", text: "$3k + 17$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Tripling the given equation gives $21x - 12 = 3k$, so $21x = 3k + 12$ and $21x + 5 = 3k + 17$.\n\n**The Full Solution:**\nStep 1: Since $21x = 3(7x)$, multiply both sides of the given equation by $3$: $21x - 12 = 3k$.\nStep 2: Add $12$ to both sides: $21x = 3k + 12$.\nStep 3: Add $5$ to both sides: $21x + 5 = 3k + 17$. Check with $x = 1$: $k = 7(1) - 4 = 3$, and $21(1) + 5 = 26$, while $3(3) + 17 = 26$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($k + 17$): adds the constants correctly but never multiplies $k$ by $3$, even though $21x$ is $3$ times $7x$.\n* Choice B ($3k + 9$): multiplies $k$ by $3$ but not the $4$, so it uses $21x = 3k + 4$ before adding $5$.\n* Choice C ($3k + 12$): finds $21x$ correctly but forgets to add the $5$.\n\n**Test Day Takeaway:** Look for the multiple that turns the given expression into the target one, apply it to both sides of the equation, and only then adjust the constant.",
      skills: ["solving-equations", "ratios"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A bakery's daily cost, in dollars, is estimated by $C(n) = 145 + 0.8n$, where $n$ is the number of dozens of muffins the bakery bakes that day. What is the best interpretation of $0.8$ in this context?",
      choices: [
        // distractor: reads 0.8 as the starting value, which is the constant 145
        { id: "A", text: "The daily cost is \\$0.80 when the bakery bakes no muffins." },
        // distractor: ignores that n counts dozens of muffins, so the rate is per dozen, not per muffin
        { id: "B", text: "The daily cost increases by \\$0.80 for each additional muffin baked." },
        { id: "C", text: "The daily cost increases by \\$0.80 for each additional dozen muffins baked." },
        // distractor: inverts the rate, describing dozens per dollar instead of dollars per dozen
        { id: "D", text: "The bakery bakes $0.8$ additional dozen muffins for each additional dollar of daily cost." }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $0.8$ is the coefficient of $n$, so it is the change in cost, in dollars, for each increase of $1$ in $n$, and $n$ counts dozens of muffins.\n\n**The Full Solution:**\nStep 1: The model is linear, $C(n) = 145 + 0.8n$, with slope $0.8$ and constant $145$.\nStep 2: The slope is the change in $C$ for each increase of $1$ in $n$; $C$ is in dollars, so the cost rises by $0.8$ dollars, or $80$ cents.\nStep 3: An increase of $1$ in $n$ means one more dozen muffins, so the daily cost increases by $80$ cents for each additional dozen muffins baked. Check: $C(11) - C(10) = 153.8 - 153 = 0.8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the cost when $n = 0$, which is the constant $145$, not $0.8$.\n* Choice B: treats $n$ as a number of muffins; since $n$ counts dozens, the $80$ cents is for $12$ muffins, not $1$.\n* Choice D: inverts the rate, describing dozens of muffins per dollar instead of dollars per dozen.\n\n**Test Day Takeaway:** The slope is the change in the output's units for one unit of the input; read the definition of the input carefully, because one unit may be a dozen, a hundred, or a thousand of something.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "Water is pumped into a tank at a constant rate. The table shows the volume of water in the tank at three times after the pump was turned on. How many gallons of water were in the tank when the pump was turned on?",
      diagram: { type: "dataTable", params: { headers: ["Time (minutes)", "Volume (gallons)"], rows: [["6", "214"], ["14", "302"], ["22", "390"]] } },
      correctAnswer: "148",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $148$.**\n\n**The Fast Way (~35s):** The rate is $\\frac{302 - 214}{14 - 6} = 11$ gallons per minute, so at time $0$ the tank held $214 - 6(11) = 148$ gallons.\n\n**The Full Solution:**\nStep 1: A constant rate means the volume is a linear function of time. Use two rows to find the rate: $\\frac{302 - 214}{14 - 6} = \\frac{88}{8} = 11$ gallons per minute.\nStep 2: The pump was turned on $6$ minutes before the first row, so subtract $6$ minutes of pumping from that row: $214 - 6(11) = 214 - 66 = 148$.\nStep 3: Check the third row from this start: $148 + 22(11) = 148 + 242 = 390$ gallons ✓\n\n**Common Mistakes:**\n* $203$: subtracts only one minute of pumping, $214 - 11$, which is the volume at $5$ minutes, not $0$ minutes.\n* $214$: reports the first value in the table, treating $6$ minutes as the moment the pump was turned on.\n* $82$: divides the $88$-gallon rise by $4$ instead of by the $8$ minutes between the rows, getting a rate of $22$ and $214 - 6(22) = 82$.\n\n**Test Day Takeaway:** With a constant rate, find the change per single unit of time first, then count how many units separate the row you have from the time you want.",
      skills: ["slope-from-points"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The equation $y = 18x + 270$ is a linear model for data set A. Each point in data set B has the $x$-coordinate of a point in data set A and one-third of its $y$-coordinate. Which equation is the most appropriate linear model for data set B?",
      choices: [
        { id: "A", text: "$y = 6x + 90$" },
        // distractor: divides only the slope by 3, leaving the constant 270 unchanged
        { id: "B", text: "$y = 6x + 270$" },
        // distractor: divides only the constant by 3, leaving the slope 18 unchanged
        { id: "C", text: "$y = 18x + 90$" },
        // distractor: multiplies the slope and the constant by 3 instead of dividing them by 3
        { id: "D", text: "$y = 54x + 810$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Every $y$-value is divided by $3$, so every predicted value is divided by $3$: $\\frac{1}{3}(18x + 270) = 6x + 90$.\n\n**The Full Solution:**\nStep 1: Each point $(x, y)$ in data set A becomes $\\left(x, \\frac{y}{3}\\right)$ in data set B.\nStep 2: So a model for data set B gives one-third of the model for data set A at every $x$: $\\frac{1}{3}(18x + 270)$.\nStep 3: Distribute: $\\frac{18}{3}x + \\frac{270}{3} = 6x + 90$. Check: at $x = 10$, model A predicts $18(10) + 270 = 450$ and model B predicts $6(10) + 90 = 150$, which is $\\frac{450}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 6x + 270$): divides the slope by $3$ but not the constant.\n* Choice C ($y = 18x + 90$): divides the constant by $3$ but not the slope.\n* Choice D ($y = 54x + 810$): multiplies by $3$ instead of dividing by $3$.\n\n**Test Day Takeaway:** When every $y$-value of a data set is multiplied or divided by a number, both the slope and the constant of its linear model change by that same factor.",
      skills: ["scatterplots", "linear-functions"]
    }
  ]
};

export default practiceTest5M2Easy;
