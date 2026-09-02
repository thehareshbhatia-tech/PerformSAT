// Practice Test 12 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-6 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H wavy flow.
// Figure density lifted to official ~20%: M1 carries 4 diagram items
// (Q7 coordinatePoints, Q11 similarTriangles, Q12 scatterplot, Q13 twoWayTable),
// M2 carries 4 (Q1 rightTriangle, Q8 dotPlot, Q10 quadraticVertex, Q12 linearGraph).
// Numeric MC choices sorted ascending (official convention).
// Scenario families (test-12 exclusive): birding festival, quarry aggregate,
// wallpaper hanging, violin-shop repairs, cheese-shop wheels (M1);
// sign-shop vinyl, riverboat cruises, escape rooms, minigolf (M2).

export const practiceTest12 = {
  id: "practice-test-12",
  title: "Practice Test 12",
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
  question: "At a birding festival's morning count, volunteers recorded $220$ birds, of which $45\\%$ were waterfowl. How many of the recorded birds were NOT waterfowl?",
  choices: [
    // distractor: reads the 45% as a count of 45 birds
    { id: "A", text: "$45$" },
    // distractor: stops one step early — gives the waterfowl count (45% of 220)
    { id: "B", text: "$99$" },
    // distractor: assumes an even split and halves the total
    { id: "C", text: "$110$" },
    { id: "D", text: "$121$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** If $45\\%$ were waterfowl, then $55\\%$ were not, and $0.55 \\times 220 = 121$.\n\n**The Full Solution:**\nStep 1: Waterfowl $= 0.45 \\times 220 = 99$ birds.\nStep 2: Not waterfowl $= 220 - 99 = 121$. Check: $99 + 121 = 220$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): reads the percent $45\\%$ as a count of $45$ birds.\n* Choice B ($99$): stops at the waterfowl count instead of the NOT-waterfowl count.\n* Choice C ($110$): halves the total, ignoring the stated percent entirely.\n\n**Test Day Takeaway:** For \"not,\" take the complement percent first: $100\\% - 45\\% = 55\\%$, applied to the same total.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A quarry fills an order with crushed stone and coarse sand in a ratio of $7 : 2$ by mass. If the order contains $54$ metric tons of stone and sand combined, how many metric tons of coarse sand does it contain?",
  choices: [
    // distractor: divides the total by the sum of parts but stops at one part (k = 6)
    { id: "A", text: "$6$" },
    { id: "B", text: "$12$" },
    // distractor: halves the total instead of using the ratio
    { id: "C", text: "$27$" },
    // distractor: solves for the stone mass (7/9 of 54) instead of the sand
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sand is $\\frac{2}{7+2}=\\frac{2}{9}$ of the total, so sand $=\\frac{2}{9}\\cdot 54 = 12$ metric tons.\n\n**The Full Solution:**\nStep 1: Let stone $=7k$ and sand $=2k$, matching the $7:2$ ratio.\nStep 2: Total $7k+2k=9k=54$, so $k=6$.\nStep 3: Sand $=2k=12$. Check: stone $=42$, and $42+12=54$ with $42:12=7:2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): finds $k=\\frac{54}{9}$ — one ratio part — and stops there.\n* Choice C ($27$): halves the total, ignoring the $7:2$ split.\n* Choice D ($42$): solves for the stone ($\\frac{7}{9}\\cdot 54$) instead of the sand.\n\n**Test Day Takeaway:** When a ratio and a total are both given, divide by the SUM of the ratio numbers, then scale up the part the question names.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The mean of six numbers is $21$. If five of the numbers are $17$, $18$, $19$, $22$, and $24$, what is the sixth number?",
  choices: [
    // distractor: gives the mean of the five listed numbers (100/5)
    { id: "A", text: "$20$" },
    // distractor: repeats the stated mean instead of solving for the missing value
    { id: "B", text: "$21$" },
    // distractor: grabs the largest listed value
    { id: "C", text: "$24$" },
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The six numbers must total $6\\times 21 = 126$. The five given add to $100$, so the sixth is $126-100=26$.\n\n**The Full Solution:**\nStep 1: Sum $=$ mean $\\times$ count $= 21\\times 6 = 126$.\nStep 2: Known sum $= 17+18+19+22+24 = 100$.\nStep 3: Sixth number $= 126-100 = 26$. Check: $\\frac{126}{6}=21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): averages only the five listed numbers ($\\frac{100}{5}$).\n* Choice B ($21$): repeats the given mean — the missing value need not equal the mean.\n* Choice C ($24$): grabs the largest listed value instead of computing.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Find the required total, subtract what you know, and the missing value falls out.",
  skills: ["statistics"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $4(2w + 1) = 36$, what is the value of $2w + 1$?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: subtracts 4 from 36 instead of dividing by 4
    { id: "B", text: "$32$" },
    // distractor: adds 4 to 36 instead of dividing
    { id: "C", text: "$40$" },
    // distractor: applies the inverse operation — multiplies 36 by 4
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The question asks for $2w+1$, and $4(2w+1)=36$ says four of that quantity make $36$. So $2w+1 = 36 \\div 4 = 9$. No need to find $w$.\n\n**The Full Solution:**\nStep 1: Treat $2w+1$ as a single block: $4\\cdot(2w+1)=36$.\nStep 2: Divide both sides by $4$: $2w+1=9$ — exactly what the question asks for.\nStep 3: (Solving through anyway: $2w=8$, $w=4$, and $2(4)+1=9$ — same answer, extra steps.) Check: $4\\cdot 9=36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($32$): subtracts $4$ from $36$ instead of dividing by $4$.\n* Choice C ($40$): adds $4$ to $36$ — the wrong inverse operation.\n* Choice D ($144$): multiplies $36$ by $4$ instead of dividing.\n\n**Test Day Takeaway:** When the asked-for expression already sits inside the equation, isolate it as one block instead of solving for the variable first.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $p$ is defined by $p(x) = 3x - 11$. What is the value of $p(6) - 4$?",
  choices: [
    // distractor: evaluates at the combined input p(6 - 4) = p(2)
    { id: "A", text: "$-5$" },
    { id: "B", text: "$3$" },
    // distractor: stops one step early — gives p(6) without subtracting 4
    { id: "C", text: "$7$" },
    // distractor: applies the inverse operation — adds 4 instead of subtracting
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $p(6)=3(6)-11=7$, then $p(6)-4=7-4=3$.\n\n**The Full Solution:**\nStep 1: Substitute $x=6$: $p(6)=3(6)-11=18-11=7$.\nStep 2: Subtract $4$: $p(6)-4=7-4=3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): evaluates $p(2)$, folding the $-4$ into the input instead of the output.\n* Choice C ($7$): gives $p(6)$ but forgets the $-4$.\n* Choice D ($11$): adds $4$ instead of subtracting ($7+4$).\n\n**Test Day Takeaway:** Evaluate the function first, then apply whatever the rest of the expression asks — the $-4$ acts on the OUTPUT, not the input.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is shown below.\n\n$4x - y = 5$\n$2x + 3y = 27$\n\nWhat is the value of $x + y$?",
  choices: [
    { id: "A", text: "$10$" },
    // distractor: multiplies x and y instead of adding them
    { id: "B", text: "$21$" },
    // distractor: reports the constant from the second equation
    { id: "C", text: "$27$" },
    // distractor: stops at 14x = 42 without dividing
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The first equation gives $y=4x-5$. Substitute into the second: $2x+3(4x-5)=27 \\Rightarrow 14x=42 \\Rightarrow x=3$, so $y=7$ and $x+y=10$.\n\n**The Full Solution:**\nStep 1: From $4x-y=5$, isolate $y=4x-5$.\nStep 2: Into $2x+3y=27$: $2x+12x-15=27 \\Rightarrow 14x=42 \\Rightarrow x=3$.\nStep 3: $y=4(3)-5=7$, so $x+y=3+7=10$. Check: $2(3)+3(7)=27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($21$): multiplies $x\\cdot y=3\\cdot 7$ instead of adding.\n* Choice C ($27$): reports the constant from the second equation, not $x+y$.\n* Choice D ($42$): stops at $14x=42$ without dividing by $14$.\n\n**Test Day Takeaway:** When a system asks for a combination like $x+y$, solve for both variables first, then combine exactly as asked.",
  skills: ["systems-of-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A triangle in the $xy$-plane has vertices at the points $(-2, 0)$, $(6, 0)$, and $(4, 7)$, as shown. What is the area of the triangle?",
  diagram: { type: "coordinatePoints", params: {
    points: [[-2, 0], [6, 0], [4, 7]],
    xMin: -4, xMax: 8, yMin: -2, yMax: 8
  } },
  correctAnswer: "28",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~15s):** The base runs along the $x$-axis from $(-2,0)$ to $(6,0)$, length $8$. The height is the $y$-coordinate of $(4,7)$, which is $7$. Area $=\\frac{1}{2}(8)(7)=28$.\n\n**The Full Solution:**\nStep 1: Two vertices sit on the $x$-axis, so that side is the base: length $6-(-2)=8$.\nStep 2: The height is the perpendicular distance from $(4,7)$ to the $x$-axis, namely $7$.\nStep 3: Area $=\\frac{1}{2}\\times 8\\times 7 = 28$. Coordinate check: $\\frac{1}{2}|(-2)(0-7)+6(7-0)+4(0-0)|=\\frac{1}{2}|56|=28$. $\\checkmark$\n\n**Common Mistakes:** Forgetting the $\\frac{1}{2}$ and reporting $56$; using the third vertex's $x$-coordinate ($4$) as the height instead of its $y$-coordinate ($7$); computing the base as $6$ instead of $6-(-2)=8$.\n\n**Test Day Takeaway:** When a triangle has a side on an axis, that side is the base and the height is the opposite vertex's distance to that axis. Watch negative coordinates when finding the base length.",
  skills: ["area", "coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $g(x) = 5x + 8$ and $g(a) = 43$, what is the value of $a$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: divides 43 by 5 without first subtracting the 8
    { id: "B", text: "$8.6$" },
    // distractor: adds 8 to 43 instead of subtracting before dividing
    { id: "C", text: "$10.2$" },
    // distractor: stops one step early at 5a = 35
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(a)=43$ means $5a+8=43$, so $5a=35$ and $a=7$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $a$: $5a+8=43$.\nStep 2: Subtract $8$: $5a=35$.\nStep 3: Divide by $5$: $a=7$. Check: $g(7)=5(7)+8=43$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8.6$): divides $43$ by $5$ without undoing the $+8$ first.\n* Choice C ($10.2$): adds $8$ to $43$ instead of subtracting, then divides.\n* Choice D ($35$): stops at $5a=35$ and reports that value.\n\n**Test Day Takeaway:** $g(a)=k$ just means substitute $a$ for $x$ and solve — undo the addition before the multiplication.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $9^{x} = 27^{x-2}$, what is the value of $x$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Write both sides as powers of $3$: $3^{2x}=3^{3(x-2)}$, so $2x=3x-6$ and $x=6$.\n\n**The Full Solution:**\nStep 1: $9=3^2$ and $27=3^3$, so $(3^2)^{x}=(3^3)^{x-2}$.\nStep 2: $3^{2x}=3^{3x-6}$.\nStep 3: Equal bases force equal exponents: $2x=3x-6 \\Rightarrow x=6$. Check: $9^6=3^{12}$ and $27^{4}=3^{12}$. $\\checkmark$\n\n**Common Mistakes:** Writing $27=3^2$ instead of $3^3$; distributing $3(x-2)$ as $3x-2$ instead of $3x-6$; setting the bases $9$ and $27$ equal instead of rewriting both with base $3$.\n\n**Test Day Takeaway:** Rewrite both exponentials with one common base, distribute carefully in the exponent, then set the exponents equal.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{2x - 5}{3} = \\dfrac{x + 4}{2}$, what is the value of $x$?",
  choices: [
    // distractor: sign slip — treats +12 as -12 when collecting terms
    { id: "A", text: "$-2$" },
    // distractor: subtracts the constants in the wrong direction (12 - 10)
    { id: "B", text: "$2$" },
    // distractor: cross-multiplies the wrong pairs, solving 3(2x-5) = 2(x+4)
    { id: "C", text: "$5.75$" },
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Proportion with Linear Expressions**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $2(2x-5)=3(x+4) \\Rightarrow 4x-10=3x+12 \\Rightarrow x=22$.\n\n**The Full Solution:**\nStep 1: Cross-multiply $\\frac{2x-5}{3}=\\frac{x+4}{2}$ to get $2(2x-5)=3(x+4)$.\nStep 2: Expand: $4x-10=3x+12$.\nStep 3: Collect: $x=22$. Check: $\\frac{2(22)-5}{3}=\\frac{39}{3}=13$ and $\\frac{22+4}{2}=13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): a sign slip turns $+12$ into $-12$, giving $x=-2$.\n* Choice B ($2$): subtracts the constants in the wrong direction, computing $12-10$.\n* Choice C ($5.75$): cross-multiplies the wrong pairs, solving $3(2x-5)=2(x+4)$.\n\n**Test Day Takeaway:** In $\\frac{A}{b}=\\frac{C}{d}$, cross-multiply as $dA=bC$ — each numerator times the OPPOSITE denominator — then verify by plugging back in.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Triangles $JKL$ and $XYZ$ shown are similar, where side $JK$ corresponds to side $XY$. The area of triangle $JKL$ is $14$ square centimeters. What is the area of triangle $XYZ$, in square centimeters?",
  diagram: {
    type: "similarTriangles",
    params: {
      triangle1: { labels: ["J", "K", "L"], sideLabels: ["4", "", ""] },
      triangle2: { labels: ["X", "Y", "Z"], sideLabels: ["10", "", ""] },
      figureNote: true
    }
  },
  choices: [
    // distractor: applies the linear scale factor 10/4 = 2.5 without squaring
    { id: "A", text: "$35$" },
    // distractor: multiplies by the given side length 4 instead of the squared factor
    { id: "B", text: "$56$" },
    { id: "C", text: "$87.5$" },
    // distractor: multiplies by the other side length 10
    { id: "D", text: "$140$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The linear factor is $\\frac{XY}{JK}=\\frac{10}{4}=\\frac{5}{2}$, so area scales by $\\left(\\frac{5}{2}\\right)^2=\\frac{25}{4}$. Area of $XYZ = 14\\cdot\\frac{25}{4}=87.5$.\n\n**The Full Solution:**\nStep 1: From the corresponding sides, the scale factor small to large is $\\frac{10}{4}=2.5$.\nStep 2: Areas of similar figures scale by the SQUARE of the linear factor: $2.5^2=6.25$.\nStep 3: Area of $XYZ = 14\\times 6.25 = 87.5$ square centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): scales the area by the linear factor $2.5$ only, without squaring.\n* Choice B ($56$): multiplies by the side length $4$ instead of the squared scale factor.\n* Choice D ($140$): multiplies by the side length $10$ — a length, not an area ratio.\n\n**Test Day Takeaway:** Lengths and perimeters scale linearly; areas scale by the SQUARE of the linear factor. Square the ratio before touching the area.",
  skills: ["triangles", "area", "ratios"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "For each of $11$ wallpapering jobs, a decorator recorded the number of wallpaper strips hung, $x$, and the total working time $y$, in minutes. The line of best fit for the data is $y = 3.5x + 22$. One job required $8$ strips and took $47$ minutes. What is the residual, in minutes, for this job?",
  diagram: { type: "scatterplot", params: {
    points: [[2,30],[3,34],[4,33],[5,42],[6,45],[7,44],[9,55],[10,60],[11,58],[13,68]],
    xMin: 0, xMax: 14, yMin: 20, yMax: 75,
    xGridStep: 1, xLabelStep: 2, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 3.5, intercept: 22 },
    highlightPoint: [8, 47], highlightLabel: "(8, 47)", showResidual: true,
    xLabel: "Number of strips", yLabel: "Working time (minutes)",
  } },
  correctAnswer: "-3",
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~15s):** Predicted $=3.5(8)+22=50$. Residual $=$ actual $-$ predicted $=47-50=-3$.\n\n**The Full Solution:**\nStep 1: Plug $x=8$ into the model: $\\hat{y}=3.5(8)+22=28+22=50$ minutes.\nStep 2: Residual $=$ actual $-$ predicted $=47-50=-3$.\nStep 3: A negative residual means the job sits below the line — it finished faster than the model predicts. Check: $50+(-3)=47$. $\\checkmark$\n\n**Common Mistakes:** Computing predicted $-$ actual and reporting $+3$; substituting the actual time $47$ into the model instead of the strip count $8$.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted, in that order. The sign says whether the point sits above (positive) or below (negative) the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes the $180$ repair orders a violin shop completed last year, by instrument and type of repair. One of the orders is selected at random. Given that the selected order is for a cello, what is the probability that it is for a bridge adjustment?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "String replacement", "Bridge adjustment", "Total"],
      rows: [
        ["Violin", "48", "32", "80"],
        ["Cello", "60", "40", "100"],
        ["Total", "108", "72", "180"]
      ]
    }
  },
  choices: [
    // distractor: wrong base — uses the grand total (180) as the denominator
    { id: "A", text: "$\\dfrac{40}{180}$" },
    { id: "B", text: "$\\dfrac{40}{100}$" },
    // distractor: wrong base — uses the bridge-adjustment column total (72)
    { id: "C", text: "$\\dfrac{40}{72}$" },
    // distractor: right row, wrong repair — gives P(string replacement | cello)
    { id: "D", text: "$\\dfrac{60}{100}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Given that the order is for a cello\" restricts you to the Cello row, whose total is $100$. The bridge adjustments in that row number $40$, so the probability is $\\frac{40}{100}$.\n\n**The Full Solution:**\nStep 1: The condition \"is for a cello\" replaces the whole set of orders with just the Cello row. That row total, $100$, is the denominator.\nStep 2: Inside that row, count the bridge adjustments: $40$.\nStep 3: $P(\\text{Bridge} \\mid \\text{Cello}) = \\frac{40}{100}$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{40}{180}$): uses the grand total — that is the unconditional probability, not the conditional one.\n* Choice C ($\\frac{40}{72}$): conditions on the wrong axis, using the bridge-adjustment column total.\n* Choice D ($\\frac{60}{100}$): right row, wrong count — this is $P(\\text{String} \\mid \\text{Cello})$.\n\n**Test Day Takeaway:** The word \"given\" names your denominator. Restrict to that row or column first, then count favorable outcomes inside it.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A cheese shop ages a cylindrical wheel of cheese with a radius of $9$ centimeters and a height of $12$ centimeters. The volume of the wheel, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: forgets to square the radius — uses r * h = 9 * 12
    { id: "A", text: "$108$" },
    // distractor: halves the radius before squaring (uses r = 4.5)
    { id: "B", text: "$243$" },
    // distractor: uses the cone formula (1/3)pi r^2 h instead of the cylinder
    { id: "C", text: "$324$" },
    { id: "D", text: "$972$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (9)^2(12) = 81 \\cdot 12\\,\\pi = 972\\pi$, so $k = 972$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$ (on the Reference Sheet).\nStep 2: Substitute $r = 9$ and $h = 12$: $V = \\pi(81)(12)$.\nStep 3: $81 \\times 12 = 972$, so $V = 972\\pi$ and $k = 972$, matching choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($108$): uses $\\pi r h$ ($9 \\times 12$) without squaring the radius.\n* Choice B ($243$): halves the radius to $4.5$ before squaring ($20.25 \\times 12$).\n* Choice C ($324$): applies the cone formula $\\frac{1}{3}\\pi r^2 h$, cutting the result to a third.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height: $V = \\pi r^2 h$.",
  skills: ["volume", "geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The quadratic function $g(x) = ax^2 + bx + c$ has roots at $x = -3$ and $x = 7$, and its minimum value is $-50$. What is the value of $a$?",
  choices: [
    // distractor: divides -50 by the distance between the roots (10) instead of -25
    { id: "A", text: "$-5$" },
    // distractor: sign error — solves 25a = -50 as if g(2) were +25a
    { id: "B", text: "$-2$" },
    { id: "C", text: "$2$" },
    // distractor: drops a factor of 5, using g(2) = -5a
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic from Roots and Vertex Constraint**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Roots $-3$ and $7$ give $g(x) = a(x+3)(x-7)$, with vertex at the midpoint $x = 2$. Then $g(2) = a(5)(-5) = -25a = -50$, so $a = 2$.\n\n**The Full Solution:**\nStep 1: With roots at $x = -3$ and $x = 7$, write factored form $g(x) = a(x+3)(x-7)$.\nStep 2: The vertex sits at the midpoint of the roots: $x = \\frac{-3+7}{2} = 2$.\nStep 3: Evaluate there: $g(2) = a(2+3)(2-7) = a(5)(-5) = -25a$.\nStep 4: This equals the minimum value: $-25a = -50 \\Rightarrow a = 2$. A positive $a$ opens the parabola upward, so the vertex is a true minimum — consistent. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): divides $-50$ by the root distance $10$ instead of by $-25$.\n* Choice B ($-2$): a sign error treats $g(2)$ as $+25a$; a negative $a$ would give a maximum, not a minimum.\n* Choice D ($10$): drops a factor of $5$, computing $g(2) = -5a$.\n\n**Test Day Takeaway:** From the roots, write factored form; the vertex sits at their midpoint. Plug that $x$ in and set the result equal to the min or max to solve for $a$ — then check the SIGN of $a$ against min versus max.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have no solution?\n\n$2x + 7y = 9$\n$mx - 3y = 5$",
  choices: [
    { id: "A", text: "$-\\dfrac{6}{7}$" },
    // distractor: divides by 3 instead of multiplying when isolating m
    { id: "B", text: "$-\\dfrac{2}{21}$" },
    // distractor: drops the negative sign from the first line's slope
    { id: "C", text: "$\\dfrac{6}{7}$" },
    // distractor: inverts the slope equation and drops the sign, solving 3/m = 2/7
    { id: "D", text: "$\\dfrac{21}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No solution means parallel lines. The slope of $2x + 7y = 9$ is $-\\frac{2}{7}$; the slope of $mx - 3y = 5$ is $\\frac{m}{3}$. Set them equal: $\\frac{m}{3} = -\\frac{2}{7} \\Rightarrow m = -\\frac{6}{7}$.\n\n**The Full Solution:**\nStep 1: Read each slope from $ax + by = c$ as $-\\frac{a}{b}$. Line 1: slope $= -\\frac{2}{7}$.\nStep 2: Line 2: slope $= -\\frac{m}{-3} = \\frac{m}{3}$.\nStep 3: Parallel means equal slopes: $\\frac{m}{3} = -\\frac{2}{7} \\Rightarrow m = -\\frac{6}{7}$, matching choice A.\nStep 4: Check the intercepts differ: line 1 has $y$-intercept $\\frac{9}{7}$; line 2 has $y$-intercept $-\\frac{5}{3}$. Distinct parallel lines — truly no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{21}$): divides $-\\frac{2}{7}$ by $3$ instead of multiplying when isolating $m$.\n* Choice C ($\\frac{6}{7}$): drops the negative sign on the first line's slope.\n* Choice D ($\\frac{21}{2}$): inverts the slope equation (solving $\\frac{3}{m} = \\frac{2}{7}$) and loses the sign.\n\n**Test Day Takeaway:** Two linear equations have no solution exactly when the slopes match and the intercepts differ. Match slopes first, then confirm the constants disagree.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = x^2 - 4x - 21$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
  choices: [
    // distractor: reports |b| = 4, the sum of the roots, instead of their difference
    { id: "A", text: "$4$" },
    // distractor: reports the positive root alone
    { id: "B", text: "$7$" },
    { id: "C", text: "$10$" },
    // distractor: reports |c| = 21, the product of the roots
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Factor $x^2 - 4x - 21 = (x-7)(x+3)$, so the $x$-intercepts are $7$ and $-3$. The distance is $|7 - (-3)| = 10$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis where $y = 0$, so solve $x^2 - 4x - 21 = 0$.\nStep 2: Factor: $(x-7)(x+3) = 0$, giving $x = 7$ and $x = -3$.\nStep 3: The points are $A = (-3, 0)$ and $B = (7, 0)$; they share a $y$-coordinate, so the length of $\\overline{AB}$ is $|7 - (-3)| = 10$, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $|{-4}|$ — the SUM of the roots via Vieta — not their difference.\n* Choice B ($7$): reports the positive root alone, forgetting the root at $-3$.\n* Choice D ($21$): reports $|{-21}|$, the PRODUCT of the roots.\n\n**Test Day Takeaway:** Factor to find both roots, then take the absolute difference — watch the sign when one intercept is negative: $7 - (-3) = 10$, not $4$.",
  skills: ["quadratic-equations", "factoring", "coordinate-geometry"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $x^2 + y^2 + 10x - 4y = 7$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Complete the square in both variables: $(x+5)^2 + (y-2)^2 = 36$, so $(h, k, r) = (-5, 2, 6)$ and $h + k + r = 3$.\n\n**The Full Solution:**\nStep 1: Group: $(x^2 + 10x) + (y^2 - 4y) = 7$.\nStep 2: Complete each square, adding the same constants to both sides: half of $10$ squared is $25$; half of $-4$ squared is $4$. So $(x^2 + 10x + 25) + (y^2 - 4y + 4) = 7 + 25 + 4$.\nStep 3: This is $(x+5)^2 + (y-2)^2 = 36$, so the center is $(h, k) = (-5, 2)$ and $r = \\sqrt{36} = 6$.\nStep 4: $h + k + r = -5 + 2 + 6 = 3$.\n\n**Common Mistakes:** Forgetting to add the completing-the-square constants ($25$ and $4$) to the right side; reading the center as $(5, 2)$ instead of $(-5, 2)$ from $(x+5)^2$; reporting $r = 36$ instead of $r = \\sqrt{36} = 6$.\n\n**Test Day Takeaway:** Complete the square symmetrically for both variables. The center carries the sign-flipped offsets, and the radius is $\\sqrt{r^2}$, never $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt{x + 7} = x - 5$, what is the sum of all solutions to the equation?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Radical Equation with Potential Extraneous Solution**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** Square both sides, solve the quadratic, then check each root in the original — only $x = 9$ survives, so the sum of all solutions is $9$.\n\n**The Full Solution:**\nStep 1: Square both sides: $x + 7 = (x-5)^2 = x^2 - 10x + 25$.\nStep 2: Rearrange: $x^2 - 11x + 18 = 0$, which factors as $(x-9)(x-2) = 0$, so $x = 9$ or $x = 2$.\nStep 3: Check $x = 9$: $\\sqrt{9+7} = \\sqrt{16} = 4$ and $9 - 5 = 4$. Valid.\nStep 4: Check $x = 2$: $\\sqrt{2+7} = \\sqrt{9} = 3$ but $2 - 5 = -3 \\neq 3$. Extraneous — reject it.\nStep 5: The only solution is $x = 9$, so the sum of all solutions is $9$.\n\n**Common Mistakes:** Adding both candidate roots to get $11$ without checking for extraneous solutions; expanding $(x-5)^2$ as $x^2 + 25$ and dropping the $-10x$ middle term.\n\n**Test Day Takeaway:** Squaring can create false roots. Substitute every candidate back into the ORIGINAL radical equation and keep only the ones that check.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $5x^2 + bx + 5 = 0$ has no real solutions. Which of the following could be the value of $b$?",
  choices: [
    // distractor: b = -11 gives discriminant 21 > 0 — two real solutions
    { id: "A", text: "$-11$" },
    // distractor: b = -10 gives discriminant exactly zero — one repeated solution
    { id: "B", text: "$-10$" },
    { id: "C", text: "$9$" },
    // distractor: b = 10 also gives discriminant zero — the boundary case
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** No real solutions means a negative discriminant: $b^2 - 4(5)(5) < 0 \\Rightarrow b^2 < 100 \\Rightarrow -10 < b < 10$. Only $b = 9$ lands strictly inside, so choice C.\n\n**The Full Solution:**\nStep 1: For $5x^2 + bx + 5 = 0$, the discriminant is $b^2 - 4ac = b^2 - 100$.\nStep 2: No real solutions requires it to be strictly negative: $b^2 < 100$, i.e. $-10 < b < 10$.\nStep 3: Test the choices. $b = 9$ gives $81 - 100 = -19 < 0$ — no real solutions, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): $(-11)^2 = 121 > 100$, so the discriminant is positive — two real solutions.\n* Choice B ($-10$): $(-10)^2 = 100$ makes the discriminant exactly $0$ — one repeated real solution, not none.\n* Choice D ($10$): $10^2 = 100$, again discriminant $0$ — the boundary case is the trap.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ STRICTLY. At discriminant $= 0$ there is still one (repeated) real solution.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola with equation $y = a(x - h)^2 + k$, where $a < 0$, passes through the points $(0, 0)$ and $(12, 0)$. If the maximum value of $y$ is $36$, what is the value of $h + k$?",
  choices: [
    // distractor: gives just k = 36, forgetting to add h
    { id: "A", text: "$36$" },
    { id: "B", text: "$42$" },
    // distractor: uses h = 12 (an intercept) instead of the midpoint 6
    { id: "C", text: "$48$" },
    // distractor: adds h^2 = 36 to k = 36, confusing h^2 with h
    { id: "D", text: "$72$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The $x$-intercepts $0$ and $12$ put the vertex at their midpoint $x = 6$, so $h = 6$. Since $a < 0$, the maximum value $36$ is $k$. Thus $h + k = 6 + 36 = 42$.\n\n**The Full Solution:**\nStep 1: Passing through $(0,0)$ and $(12,0)$ means the $x$-intercepts are $0$ and $12$.\nStep 2: The vertex's $x$-coordinate is the midpoint of the intercepts: $\\frac{0+12}{2} = 6$, so $h = 6$.\nStep 3: Because $a < 0$, the vertex is the maximum, so $k = 36$.\nStep 4: $h + k = 6 + 36 = 42$, matching choice B. (Plugging $(0,0)$ into $y = a(x-6)^2 + 36$ gives $36a + 36 = 0$, so $a = -1 < 0$ — consistent.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): reports just $k$ and forgets to add $h$.\n* Choice C ($48$): uses $h = 12$ (an intercept) instead of the midpoint $h = 6$.\n* Choice D ($72$): adds $36 + 36$, confusing $(x-6)^2$'s $36$ with $h$.\n\n**Test Day Takeaway:** A parabola's vertex sits at the midpoint of its $x$-intercepts, and $k$ in vertex form is its max or min value.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have infinitely many solutions?\n\n$8x - 12y = 20$\n$-2x + 3y = m$",
  choices: [
    // distractor: uses a multiplier of -2 from mismatching the coefficients
    { id: "A", text: "$-10$" },
    { id: "B", text: "$-5$" },
    // distractor: drops the negative sign — solves 4m = 20
    { id: "C", text: "$5$" },
    // distractor: multiplies 20 by 4 instead of dividing by -4
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Infinitely many solutions means the equations are scalar multiples. Multiply $-2x + 3y = m$ by $-4$ to get $8x - 12y = -4m$; matching the first equation gives $-4m = 20$, so $m = -5$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions, the two equations must describe the same line — one is a scalar multiple of the other.\nStep 2: The $x$-coefficients go from $-2$ to $8$, a factor of $-4$. Multiply the second equation by $-4$: $8x - 12y = -4m$.\nStep 3: This must match $8x - 12y = 20$, so $-4m = 20 \\Rightarrow m = -5$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): uses a multiplier of $-2$ instead of $-4$.\n* Choice C ($5$): drops the negative and solves $4m = 20$.\n* Choice D ($80$): multiplies $20$ by $4$ instead of dividing by $-4$.\n\n**Test Day Takeaway:** Infinitely many solutions means the SAME line. Find the factor that aligns the $x$- and $y$-coefficients, then apply that exact factor (sign included) to the constant.",
  skills: ["systems-of-equations", "linear-functions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 12 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H. Wavy flow: easies at Q1/Q2/Q8 (Q8 breather),
// mediums at Q3/Q4/Q5/Q10/Q11/Q14/Q19, hards elsewhere; Q21-22 closers.
// Warm-ups Q1-5 each carry 2+ steps or a trap (missing-leg + shifted ask,
// intercept-vs-slope, excluded-value reasoning, negative-reciprocal chain,
// direction-flipped successive percents). All content re-authored fresh
// 2026-09-01; slot metadata and SAT Pattern headers frozen.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the right triangle shown, one leg has length $12$ and the hypotenuse has length $37$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["12", "", "37"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — reports the missing leg (35) alone
    { id: "A", text: "$35$" },
    // distractor: adds only the two given sides, skipping the missing leg
    { id: "B", text: "$49$" },
    // distractor: finds the missing side by subtracting lengths (37 - 12 = 25) instead of squares
    { id: "C", text: "$74$" },
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The missing leg is $\\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35$. Perimeter $= 12 + 35 + 37 = 84$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is the longest side, so the unknown side is a LEG: $a^2 + 12^2 = 37^2$.\nStep 2: $a^2 = 1369 - 144 = 1225$, so $a = 35$. (This is the $12$-$35$-$37$ triple.)\nStep 3: The question asks for the perimeter, not the missing side: $12 + 35 + 37 = 84$, matching choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): finds the missing leg correctly but stops before adding the sides.\n* Choice B ($49$): adds only the two GIVEN sides, $12 + 37$.\n* Choice C ($74$): finds the \"missing side\" by subtracting lengths ($37 - 12 = 25$) instead of subtracting squares.\n\n**Test Day Takeaway:** When the hypotenuse is known, SUBTRACT squares to find a leg — then re-read the question: here it wants the perimeter, one step past the missing side.",
  skills: ["geometry", "right-triangles", "pythagorean-theorem"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A sign shop cuts banners from a roll of vinyl. The function $R(n) = 150 - 2.5n$ gives the length, in feet, of vinyl remaining on the roll after $n$ banners have been cut. Which statement is the best interpretation of the $y$-intercept of the graph of $y = R(n)$ in the $ny$-plane in this context?",
  choices: [
    { id: "A", text: "The roll held about $150$ feet of vinyl before any banners were cut." },
    // distractor: correct description of the slope's magnitude, but the question asks about the intercept
    { id: "B", text: "About $2.5$ feet of vinyl are used for each banner cut." },
    // distractor: confuses the y-intercept with the n-intercept (the roll actually empties at n = 60)
    { id: "C", text: "The roll is empty after about $150$ banners have been cut." },
    // distractor: treats the starting length as a per-banner rate
    { id: "D", text: "About $150$ feet of vinyl are used for each banner cut." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $R(0) = 150$. At $n = 0$, no banners have been cut yet, so the roll started with about $150$ feet of vinyl, matching choice A.\n\n**The Full Solution:**\nStep 1: In $R(n) = 150 - 2.5n$, the $y$-intercept is the constant $150$ — the value when $n = 0$.\nStep 2: Here $n$ counts banners cut, so $n = 0$ means before any cutting began.\nStep 3: Therefore the roll began with roughly $150$ feet of vinyl. (The slope $-2.5$ is the feet used per banner — a different quantity.)\n\n**Why the wrong answers are tempting:**\n* Choice B: correctly describes the slope's magnitude ($2.5$ feet per banner), but the question asks about the $y$-intercept.\n* Choice C: confuses the $y$-intercept with the $n$-intercept — the roll actually empties at $n = \\frac{150}{2.5} = 60$ banners.\n* Choice D: treats the starting length $150$ as a per-banner rate — that would empty the roll after one banner.\n\n**Test Day Takeaway:** In $f(n) = b + mn$ contexts, $b$ is the starting amount at $n = 0$ and $m$ is the per-unit rate. Match the asked-for feature to the right constant.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $\\dfrac{2x}{x + 3} = \\dfrac{c}{x + 3} - 4$ has no solution. What is the value of $c$?",
  choices: [
    // distractor: sign slip moving the -12 — solves 6x = c + 12 with x = -3
    { id: "A", text: "$-30$" },
    { id: "B", text: "$-6$" },
    // distractor: forgets to distribute the -4 over (x + 3), solving 2x = c - 4
    { id: "C", text: "$-2$" },
    // distractor: uses the excluded value as x = +3 instead of x = -3
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Clear the denominator: $2x = c - 4(x+3) = c - 4x - 12$, so $6x = c - 12$ and the only root is $x = \\frac{c-12}{6}$. The equation has no solution exactly when that root is the forbidden value $x = -3$: $c - 12 = -18 \\Rightarrow c = -6$.\n\n**The Full Solution:**\nStep 1: The denominator $x + 3$ is zero at $x = -3$, so $x = -3$ is excluded.\nStep 2: Multiply both sides by $(x+3)$: $2x = c - 4(x+3) = c - 4x - 12$.\nStep 3: Collect: $6x = c - 12$, so $x = \\frac{c-12}{6}$ — a single algebraic root.\nStep 4: For no solution, that root must land on the excluded value: $\\frac{c-12}{6} = -3 \\Rightarrow c - 12 = -18 \\Rightarrow c = -6$.\nStep 5: Check: with $c = -6$, the algebra forces $x = -3$, which is barred — truly no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-30$): a sign slip moves the $-12$ to the wrong side, solving $6x = c + 12$.\n* Choice C ($-2$): forgets to distribute the $-4$ over $(x+3)$, solving $2x = c - 4$.\n* Choice D ($30$): uses $x = +3$ as the excluded value instead of $x = -3$.\n\n**Test Day Takeaway:** A rational equation has no solution when its only algebraic root equals an excluded value. Find the excluded $x$, set the root equal to it, and solve for the parameter.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the point $(-4, 3)$ and is perpendicular to the line $2x + 5y = 10$. What is the $y$-intercept of this line?",
  choices: [
    // distractor: uses the perpendicular slope with the wrong sign (-5/2)
    { id: "A", text: "$-7$" },
    // distractor: keeps the original slope -2/5 instead of the perpendicular slope
    { id: "B", text: "$\\dfrac{7}{5}$" },
    // distractor: reports the given point's y-coordinate as the intercept
    { id: "C", text: "$3$" },
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The given line has slope $-\\frac{2}{5}$, so the perpendicular slope is $\\frac{5}{2}$. Through $(-4,3)$: $y = \\frac{5}{2}(x+4) + 3$, and at $x=0$ this gives $\\frac{5}{2}(4) + 3 = 13$.\n\n**The Full Solution:**\nStep 1: Rewrite $2x + 5y = 10$ as $y = -\\frac{2}{5}x + 2$, so its slope is $-\\frac{2}{5}$.\nStep 2: The perpendicular slope is the negative reciprocal: $\\frac{5}{2}$.\nStep 3: Use point-slope through $(-4, 3)$: $y - 3 = \\frac{5}{2}(x + 4)$.\nStep 4: At $x = 0$: $y = 3 + \\frac{5}{2}(4) = 3 + 10 = 13$. The $y$-intercept is $13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): uses slope $-\\frac{5}{2}$ — flips the fraction but forgets to change the sign.\n* Choice B ($\\frac{7}{5}$): keeps the original slope $-\\frac{2}{5}$ instead of taking the negative reciprocal.\n* Choice C ($3$): reports the given point's $y$-coordinate — the point is not on the $y$-axis.\n\n**Test Day Takeaway:** Perpendicular slope $=$ flip the fraction AND change the sign. Then push the point through point-slope form and read the intercept at $x = 0$.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The number of passengers on a riverboat dinner cruise was $15\\%$ greater in July than in June, and $20\\%$ less in August than in July. If the August count was $y$ times the June count, what is the value of $y$?",
  choices: [
    // distractor: applies only the 20% decrease, ignoring the July increase
    { id: "A", text: "$0.80$" },
    { id: "B", text: "$0.92$" },
    // distractor: adds the percent changes (+15 - 20 = -5%) instead of compounding
    { id: "C", text: "$0.95$" },
    // distractor: treats the decrease as an increase, computing (1.15)(1.20)
    { id: "D", text: "$1.38$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Chain the growth factors: $y = (1.15)(0.80) = 0.92$.\n\n**The Full Solution:**\nStep 1: Let the June count be $J$. A $15\\%$ increase gives July $= 1.15J$.\nStep 2: A $20\\%$ DECREASE from July multiplies by $1 - 0.20 = 0.80$: August $= 0.80(1.15J) = 0.92J$.\nStep 3: Since August $= y \\cdot J$, read off $y = 0.92$ — a net $8\\%$ drop, not $5\\%$, because the $20\\%$ cut acts on the LARGER July count.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.80$): applies only the August decrease and ignores the July increase entirely.\n* Choice C ($0.95$): adds the percents ($+15 - 20 = -5\\%$) instead of multiplying the factors.\n* Choice D ($1.38$): flips the direction of the decrease, computing $(1.15)(1.20)$.\n\n**Test Day Takeaway:** Successive percent changes multiply: $(1 + r_1)(1 + r_2)$, with a DECREASE entering as $(1 - r)$. Adding percents is always wrong when the base changes.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the system below, $p$ is a constant and the system has no solution.\n\n$\\dfrac{5}{8}y - \\dfrac{1}{4}x = \\dfrac{3}{7} - \\dfrac{5}{8}y$\n$\\dfrac{1}{4}x + 9 = py + 2$\n\nWhat is the value of $p$?",
  correctAnswer: "5/4",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\frac{5}{4}$ (or $1.25$).**\n\n**The Fast Way (~50s):** Put each line in slope form. The first combines its two $\\frac{5}{8}y$ terms into $\\frac{5}{4}y = \\frac{1}{4}x + \\frac{3}{7}$, slope $\\frac{1}{5}$. The second becomes $py = \\frac{1}{4}x + 7$, slope $\\frac{1}{4p}$. No solution means equal slopes: $\\frac{1}{4p} = \\frac{1}{5} \\Rightarrow 4p = 5 \\Rightarrow p = \\frac{5}{4}$.\n\n**The Full Solution:**\nStep 1: In equation 1, move the right-side $\\frac{5}{8}y$ left: $\\frac{5}{8}y + \\frac{5}{8}y = \\frac{5}{4}y$, giving $\\frac{5}{4}y = \\frac{1}{4}x + \\frac{3}{7}$. Divide by $\\frac{5}{4}$: $y = \\frac{1}{5}x + \\frac{12}{35}$, slope $\\frac{1}{5}$.\nStep 2: In equation 2, $\\frac{1}{4}x + 9 = py + 2 \\Rightarrow py = \\frac{1}{4}x + 7$, so $y = \\frac{1}{4p}x + \\frac{7}{p}$, slope $\\frac{1}{4p}$.\nStep 3: A linear system has no solution when the lines are parallel but distinct — equal slopes, different intercepts: $\\frac{1}{4p} = \\frac{1}{5} \\Rightarrow p = \\frac{5}{4}$.\nStep 4: Confirm the intercepts differ: with $p = \\frac{5}{4}$, line 2's intercept is $\\frac{7}{p} = \\frac{28}{5}$, versus line 1's $\\frac{12}{35}$ — distinct, so the lines never meet. $\\checkmark$\n\n**Common Mistakes:** Failing to combine the two $\\frac{5}{8}y$ terms — leaving slope $\\frac{2}{5}$ gives the trap value $p = \\frac{5}{8}$; equating reciprocals of the slopes, which gives $p = \\frac{4}{5}$.\n\n**Test Day Takeaway:** Before comparing slopes, COLLECT like terms across the equals sign. A linear system has no solution exactly when slopes match and intercepts differ.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $x^2 + y^2 = 89$ and $xy = 20$, what is the value of $(x - y)^2$?",
  correctAnswer: "49",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**The correct answer is $49$.**\n\n**The Fast Way (~15s):** $(x-y)^2 = x^2 - 2xy + y^2 = (x^2 + y^2) - 2xy = 89 - 2(20) = 49$.\n\n**The Full Solution:**\nStep 1: Expand the identity: $(x-y)^2 = x^2 - 2xy + y^2$.\nStep 2: Substitute the given values $x^2 + y^2 = 89$ and $xy = 20$.\nStep 3: $(x-y)^2 = 89 - 2(20) = 89 - 40 = 49$.\n\n**Common Mistakes:** ADDING $2xy$ instead of subtracting — that computes $(x+y)^2 = 129$, the companion identity; writing $(x-y)^2 = x^2 - y^2$ and losing the middle term entirely; trying to solve for $x$ and $y$ individually, which is slow and unnecessary.\n\n**Test Day Takeaway:** Memorize the pair $(x \\pm y)^2 = x^2 \\pm 2xy + y^2$. Given $x^2 + y^2$ and $xy$, either squared combination is one substitution away — watch which SIGN the question asks for.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the number of puzzles solved by each of the $15$ teams that visited an escape-room venue on one evening. What is the range of the numbers of puzzles solved?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 4, count: 1 },
      { value: 6, count: 2 },
      { value: 7, count: 4 },
      { value: 8, count: 3 },
      { value: 9, count: 2 },
      { value: 10, count: 2 },
      { value: 12, count: 1 }
    ],
    xMin: 3, xMax: 13,
    xLabel: "Number of puzzles solved"
  } },
  choices: [
    // distractor: reports the minimum value instead of the range
    { id: "A", text: "$4$" },
    // distractor: reports the mode (the value with the tallest stack)
    { id: "B", text: "$7$" },
    { id: "C", text: "$8$" },
    // distractor: reports the maximum value alone
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 12 - 4 = 8$.\n\n**The Full Solution:**\nStep 1: The range is the largest value minus the smallest value in the data set.\nStep 2: Reading the dot plot: the leftmost dot sits at $4$ and the rightmost at $12$.\nStep 3: Range $= 12 - 4 = 8$, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the minimum value rather than subtracting it from the maximum.\n* Choice B ($7$): reports the mode — the value with the tallest stack of dots.\n* Choice D ($12$): reports the maximum alone without subtracting the minimum.\n\n**Test Day Takeaway:** Range is one subtraction: max $-$ min. On a dot plot, that is the rightmost dot minus the leftmost dot — stack heights are irrelevant.",
  skills: ["statistics"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Constants $c$ and $d$ define the function $h(x) = c\\sqrt{x - d}$. Its graph in the $xy$-plane has an $x$-intercept at $(15, 0)$, and $h(40)$ is negative. Which statement must be true?",
  choices: [
    // distractor: sign error solving 15 - d = 0 for the parameter
    { id: "A", text: "$d = -15$" },
    // distractor: h(0) is undefined — the radicand is negative at x = 0
    { id: "B", text: "$h(0) = 15$" },
    { id: "C", text: "$c < d$" },
    // distractor: reverses the inequality after correctly finding c is negative
    { id: "D", text: "$c > d$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The $x$-intercept at $x = 15$ forces the radicand to vanish there, so $d = 15$. Then $h(40) = c\\sqrt{25} = 5c < 0$ forces $c < 0$. A negative $c$ is less than the positive $d = 15$, so $c < d$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept at $(15, 0)$ means $h(15) = c\\sqrt{15 - d} = 0$. Since $c \\neq 0$ (otherwise $h$ is constant $0$ and could not be negative anywhere), the radicand must be zero: $15 - d = 0 \\Rightarrow d = 15$.\nStep 2: Now $h(40) = c\\sqrt{40 - 15} = c\\sqrt{25} = 5c$. Because $h(40) < 0$, it follows that $c < 0$.\nStep 3: With $c < 0$ and $d = 15 > 0$, we have $c < 0 < d$, so $c < d$ must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A ($d = -15$): a sign error solving $15 - d = 0$ — the intercept's $x$-value is positive here.\n* Choice B ($h(0) = 15$): at $x = 0$ the radicand is $-15 < 0$, so $h(0)$ is not even defined.\n* Choice D ($c > d$): correctly deduces $c < 0$ but then flips the inequality against $d = 15$.\n\n**Test Day Takeaway:** A zero of $c\\sqrt{x - d}$ comes from the radicand, which pins $d$. A sign condition on another output then pins the sign of $c$. Compare the two determined facts against each statement.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = a(x - h)^2 + k$ is shown in the $xy$-plane, where $a$, $h$, and $k$ are constants. The vertex is $(2, 7)$, and the graph passes through the point $(4, -5)$. What is the value of $a$?",
  diagram: { type: "quadraticVertex", params: {
    vertex: [2, 7], a: -3, showPoints: [[4, -5]], showVertex: true
  } },
  choices: [
    // distractor: divides -12 by (4 - 2) = 2 instead of by (4 - 2)^2 = 4
    { id: "A", text: "$-6$" },
    { id: "B", text: "$-3$" },
    // distractor: inverts the final division, computing 4 / (-12)
    { id: "C", text: "$-\\dfrac{1}{3}$" },
    // distractor: drops the negative sign despite the downward-opening graph
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex $(2,7)$ gives $y = a(x-2)^2 + 7$. Plug in $(4,-5)$: $-5 = 4a + 7 \\Rightarrow a = -3$.\n\n**The Full Solution:**\nStep 1: Read $h$ and $k$ off the vertex: $h = 2$, $k = 7$, so $y = a(x-2)^2 + 7$.\nStep 2: Substitute the point $(4, -5)$: $-5 = a(4-2)^2 + 7 = 4a + 7$.\nStep 3: Solve: $4a = -12 \\Rightarrow a = -3$.\nA negative $a$ fits the graph: the vertex is the highest point, so the parabola opens downward. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): divides $-12$ by $(4-2) = 2$ instead of by $(4-2)^2 = 4$.\n* Choice C ($-\\frac{1}{3}$): inverts the final division, computing $\\frac{4}{-12}$ instead of $\\frac{-12}{4}$.\n* Choice D ($3$): drops the negative sign — impossible for a downward-opening graph.\n\n**Test Day Takeaway:** Plug the vertex straight into $a(x-h)^2 + k$, then use one more point to solve for $a$ — and remember to SQUARE the $(x-h)$ difference before dividing.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the function $h(x) = 2x^2 + kx - 9$, it is given that $h(3) = 21$. What is the value of $k$?",
  choices: [
    // distractor: sign slip solving 3k = 12
    { id: "A", text: "$-4$" },
    // distractor: drops the constant -9, solving 18 + 3k = 21
    { id: "B", text: "$1$" },
    { id: "C", text: "$4$" },
    // distractor: stops one step early — reports 3k instead of k
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $h(3) = 18 + 3k - 9 = 9 + 3k = 21$, so $3k = 12$ and $k = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $h(3) = 2(3)^2 + k(3) - 9 = 18 + 3k - 9 = 9 + 3k$.\nStep 2: Set equal to the given output: $9 + 3k = 21$.\nStep 3: Solve: $3k = 12 \\Rightarrow k = 4$.\nCheck: $h(3) = 18 + 12 - 9 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): a sign slip while solving $3k = 12$.\n* Choice B ($1$): drops the $-9$, solving $18 + 3k = 21$.\n* Choice D ($12$): stops at $3k = 12$ and reports $3k$ instead of $k$.\n\n**Test Day Takeaway:** Substitute the input, combine ALL the constants carefully, then finish the division — and back-check the value in the original function.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of the linear function $g$ is shown in the $xy$-plane. What is the value of $g(10) - 3 \\cdot g(2)$?",
  diagram: { type: "linearGraph", params: {
    slope: -1.5, yIntercept: 6,
    xRange: [-2, 10], yRange: [-10, 10],
    xTickInterval: 2, yTickInterval: 2, gridInterval: 1,
    showPoints: [[0, 6], [4, 0]],
    label: "y = g(x)"
  } },
  choices: [
    { id: "A", text: "$-18$" },
    // distractor: forgets the factor of 3, computing g(10) - g(2)
    { id: "B", text: "$-12$" },
    // distractor: stops at g(10) alone
    { id: "C", text: "$-9$" },
    // distractor: adds 3g(2) instead of subtracting
    { id: "D", text: "$0$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The graph crosses the axes at $(0, 6)$ and $(4, 0)$, so the slope is $\\frac{0-6}{4-0} = -\\frac{3}{2}$ and $g(x) = -\\frac{3}{2}x + 6$. Then $g(10) = -9$ and $g(2) = 3$, giving $-9 - 3(3) = -18$.\n\n**The Full Solution:**\nStep 1: Read two points off the graph: the $y$-intercept $(0, 6)$ and the $x$-intercept $(4, 0)$.\nStep 2: Slope $= \\frac{0 - 6}{4 - 0} = -\\frac{3}{2}$, so $g(x) = -\\frac{3}{2}x + 6$.\nStep 3: Evaluate: $g(10) = -15 + 6 = -9$ and $g(2) = -3 + 6 = 3$.\nStep 4: Combine as asked: $g(10) - 3 \\cdot g(2) = -9 - 9 = -18$, matching choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): forgets the factor of $3$, computing $g(10) - g(2) = -9 - 3$.\n* Choice C ($-9$): reports $g(10)$ alone and stops.\n* Choice D ($0$): adds instead of subtracting: $g(10) + 3g(2) = -9 + 9$.\n\n**Test Day Takeaway:** Pull the two cleanest points off a graph — the intercepts — to build the equation, then evaluate the FULL expression exactly as written.",
  skills: ["linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $(-3, 5)$ and is tangent to the line $x = 1$. A point on the circle has coordinates $(k, 5)$, where $k < -3$. What is the value of $k$?",
  correctAnswer: "-7",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~25s):** The center $(-3,5)$ sits a horizontal distance $|1 - (-3)| = 4$ from the vertical tangent line $x = 1$, so $r = 4$. The point $(k, 5)$ is directly left of the center: $k = -3 - 4 = -7$.\n\n**The Full Solution:**\nStep 1: The line $x = 1$ is vertical, so its distance from the center $(-3, 5)$ is $|1 - (-3)| = 4$. Tangency makes this the radius: $r = 4$.\nStep 2: The circle is $(x + 3)^2 + (y - 5)^2 = 16$.\nStep 3: For $(k, 5)$: $(k + 3)^2 + 0 = 16 \\Rightarrow k + 3 = \\pm 4$, so $k = 1$ or $k = -7$.\nStep 4: The condition $k < -3$ selects $k = -7$.\n\n**Common Mistakes:** Picking $k = 1$ (the tangent point itself) instead of the point on the far side; computing the distance as $|1 - 3| = 2$ by dropping the center's negative sign; using the $y$-coordinates instead of the $x$-coordinates for a VERTICAL tangent line.\n\n**Test Day Takeaway:** A circle tangent to a vertical line has radius equal to the horizontal distance from center to line, and the same-height points sit at center $\\pm r$ horizontally. Let the inequality pick which one.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $4x - 7 = 19$, what is the value of $12x - 15$?",
  choices: [
    // distractor: solves for x and reports x itself
    { id: "A", text: "$6.5$" },
    // distractor: stops at 4x = 26
    { id: "B", text: "$26$" },
    // distractor: triples 19 but misses the +6 adjustment
    { id: "C", text: "$57$" },
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $12x - 15 = 3(4x - 7) + 6 = 3(19) + 6 = 63$. No need to find $x$.\n\n**The Full Solution:**\nStep 1: Notice the target is a scaled, shifted copy of the given expression: $3(4x - 7) = 12x - 21$, so $12x - 15 = 3(4x - 7) + 6$.\nStep 2: Substitute $4x - 7 = 19$: $12x - 15 = 3(19) + 6 = 57 + 6 = 63$.\nStep 3 (check by solving): $4x = 26 \\Rightarrow x = 6.5$, so $12(6.5) - 15 = 78 - 15 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): solves for $x$ and reports $x$ instead of the asked expression.\n* Choice B ($26$): stops at $4x = 26$.\n* Choice C ($57$): triples $19$ correctly but misses the $+6$ adjustment between $-21$ and $-15$.\n\n**Test Day Takeaway:** Before solving for $x$, check whether the target is a multiple of the given expression plus a shift — track that shift to the end.",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms each have a square base and a height of $40$ centimeters, and each has a total surface area of $K$ square centimeters. When the two prisms are joined face-to-face along a full square base, the resulting single prism has a total surface area of $\\dfrac{9}{5}K$ square centimeters. What is the side length, in centimeters, of each square base?",
  choices: [
    // distractor: factors 8s^2 - 160s = 0 but divides 160 by 16 instead of 8
    { id: "A", text: "$10$" },
    { id: "B", text: "$20$" },
    // distractor: reports the given height instead of the base side
    { id: "C", text: "$40$" },
    // distractor: reports the joined prism's height
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~60s):** With base side $s$, one prism has $K = 2s^2 + 4s(40) = 2s^2 + 160s$. Joined, the two glued squares vanish and the height doubles to $80$: surface area $2s^2 + 320s = \\frac{9}{5}K$. Substituting collapses to $8s^2 - 160s = 0$, so $s = 20$.\n\n**The Full Solution:**\nStep 1: A single prism has two square bases of area $s^2$ and four lateral rectangles of area $40s$:\n$$K = 2s^2 + 160s.$$\nStep 2: Joining along a full square base hides both glued faces and produces one prism of height $80$:\n$$2s^2 + 4s(80) = 2s^2 + 320s = \\frac{9}{5}K.$$\nStep 3: Substitute $K$ and clear the fraction by multiplying both sides by $5$:\n$$10s^2 + 1600s = 18s^2 + 1440s \\Rightarrow 0 = 8s^2 - 160s = 8s(s - 20).$$\nStep 4: Since $s > 0$, $s = 20$. Check: $K = 800 + 3200 = 4000$; joined $= 800 + 6400 = 7200 = \\frac{9}{5}(4000)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): factors correctly but divides $160$ by $16$ instead of $8$.\n* Choice C ($40$): reports the given height instead of the base side.\n* Choice D ($80$): reports the JOINED prism's height.\n\n**Test Day Takeaway:** Gluing two solids along a face removes BOTH shared faces from the total surface area and merges the dimension along that axis. Write each area as a function of the unknown and solve.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the expressions below, $c$ is a positive integer constant. Which expression has $x + 2c$ as a factor?",
  choices: [
    { id: "A", text: "$3x^2 + 27x + 6c$" },
    // distractor: gives c = 28/6, not an integer
    { id: "B", text: "$3x^2 + 31x + 6c$" },
    // distractor: gives c = 37/6, not an integer
    { id: "C", text: "$3x^2 + 40x + 6c$" },
    // distractor: gives c = 43/6, not an integer
    { id: "D", text: "$3x^2 + 46x + 6c$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients in Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Every choice has the form $3x^2 + Mx + 6c$. If $x + 2c$ is a factor, the other factor must be $3x + 3$: the leading $3x^2$ forces the $3x$, and the constant $2c \\cdot 3 = 6c$ forces the $3$. Expanding $(x + 2c)(3x + 3) = 3x^2 + (3 + 6c)x + 6c$, so $M = 3 + 6c$ and $c = \\frac{M - 3}{6}$. Only $M = 27$ gives a positive integer, $c = 4$.\n\n**The Full Solution:**\nStep 1: For $x + 2c$ to divide $3x^2 + Mx + 6c$, write the second factor as $3x + b$ (the $3x$ is fixed by the leading term). Then\n$$(x + 2c)(3x + b) = 3x^2 + (b + 6c)x + 2bc.$$\nStep 2: Match the constant term: $2bc = 6c \\Rightarrow b = 3$.\nStep 3: Match the middle term: $M = 3 + 6c$, so $c = \\frac{M - 3}{6}$.\nStep 4: Test each $M$ for a positive integer $c$: $27 \\to 4$ $\\checkmark$; $31 \\to \\frac{28}{6}$; $40 \\to \\frac{37}{6}$; $46 \\to \\frac{43}{6}$. Only $M = 27$ works.\nCheck: with $c = 4$, $3x^2 + 27x + 24 = (x + 8)(3x + 3)$, and $x + 2c = x + 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($M = 31$): gives $c = \\frac{28}{6}$, not an integer.\n* Choice C ($M = 40$): gives $c = \\frac{37}{6}$, not an integer.\n* Choice D ($M = 46$): gives $c = \\frac{43}{6}$, not an integer.\n\n**Test Day Takeaway:** When a binomial must divide a quadratic, the leading and constant terms force the second factor. Match the middle coefficient, then apply the integer constraint to pick the answer.",
  skills: ["polynomial-functions", "factoring"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "An equilateral triangle has a perimeter of $414$ millimeters, and all three of its vertices lie on a circle. The radius of that circle is $w\\sqrt{3}$ millimeters. What is the value of $w$?",
  correctAnswer: "46",
  explanation: "**SAT Pattern: Equilateral Triangle — Circumradius**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~40s):** Side $= \\frac{414}{3} = 138$. The circumradius of an equilateral triangle is $R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3} = \\frac{138\\sqrt{3}}{3} = 46\\sqrt{3}$. Matching $R = w\\sqrt{3}$ gives $w = 46$.\n\n**The Full Solution:**\nStep 1: An equilateral triangle with perimeter $414$ has side $s = \\frac{414}{3} = 138$ mm.\nStep 2: For an equilateral triangle, the circumradius (center-to-vertex distance) is\n$$R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3}.$$\n(Each half-side $\\frac{s}{2}$, the circumradius, and the $30^\\circ$ half-angle at a vertex form a 30-60-90 triangle — that ratio is where the $\\sqrt{3}$ comes from.)\nStep 3: Substitute $s = 138$: $R = \\frac{138\\sqrt{3}}{3} = 46\\sqrt{3}$ mm.\nStep 4: The problem states $R = w\\sqrt{3}$, so $w = 46$.\n\n**Common Mistakes:** Dividing the perimeter by $2$ instead of $3$ to get the side; using the side $138$ directly as $R$; leaving $R$ as $\\frac{138}{\\sqrt{3}}$ without rationalizing, which hides the $\\sqrt{3}$ factor the answer form requires.\n\n**Test Day Takeaway:** For an equilateral triangle, $R = \\frac{s\\sqrt{3}}{3}$. Rationalize so the radical matches the form the problem hands you, then read off the coefficient.",
  skills: ["special-right-triangles", "circle-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "In the equation $x^2 + 14x + c = 0$, $c$ is a constant. If the equation has no real solutions, which of the following could be the value of $c$?",
  choices: [
    // distractor: discriminant 100 > 0 — two distinct real solutions
    { id: "A", text: "$24$" },
    // distractor: discriminant 16 > 0 — still two real solutions
    { id: "B", text: "$45$" },
    // distractor: perfect-square boundary; discriminant 0 still yields one real solution
    { id: "C", text: "$49$" },
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** No real solutions means a negative discriminant: $14^2 - 4(1)c < 0$, so $196 < 4c$, which gives $c > 49$. Only $50$ qualifies.\n\n**The Full Solution:**\nStep 1: The discriminant $D = b^2 - 4ac$ controls real roots: $D > 0$ gives two, $D = 0$ gives one repeated, $D < 0$ gives none.\nStep 2: Here $a = 1$, $b = 14$, so $D = 196 - 4c$.\nStep 3: Require $D < 0$: $196 - 4c < 0 \\Rightarrow c > 49$.\nStep 4: Test the choices:\n* $c = 24$: $D = 100 > 0$ — two real roots ($x = -2, -12$).\n* $c = 45$: $D = 16 > 0$ — two real roots ($x = -5, -9$).\n* $c = 49$: $D = 0$ — one repeated root ($x = -7$).\n* $c = 50$: $D = -4 < 0$ — no real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): factors as $(x+2)(x+12)$ — two real solutions.\n* Choice B ($45$): factors as $(x+5)(x+9)$ — two real solutions.\n* Choice C ($49$): the perfect square $(x+7)^2$ still has the real solution $x = -7$. The boundary case is the trap.\n\n**Test Day Takeaway:** \"No real solutions\" means $b^2 - 4ac$ is STRICTLY negative. A discriminant of exactly $0$ still leaves one real solution — never lump it into the no-solution case.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the graphs of $y = 2x + 1$ and $y = x^2 - 3x + 7$ intersect at two points. If $(x, y)$ is a solution to this system, what is the greatest possible value of $x$?",
  choices: [
    // distractor: sign-flips the correct root, reading (x - 3) as x = -3
    { id: "A", text: "$-3$" },
    // distractor: picks the lesser root instead of the greatest
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" },
    // distractor: reports the y-coordinate at the greatest-x intersection
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Set the expressions equal: $2x + 1 = x^2 - 3x + 7$, so $x^2 - 5x + 6 = 0 \\Rightarrow (x - 2)(x - 3) = 0$. The solutions are $x = 2$ and $x = 3$; the greatest is $3$.\n\n**The Full Solution:**\nStep 1: Both equations equal $y$, so set the right-hand sides equal: $2x + 1 = x^2 - 3x + 7$.\nStep 2: Collect to one side: $0 = x^2 - 5x + 6$.\nStep 3: Factor: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.\nStep 4: The question asks for the greatest possible $x$: $x = 3$.\nCheck: at $x = 3$, the line gives $y = 7$ and the parabola gives $9 - 9 + 7 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): sign-flips the factor $(x - 3)$, reading it as $x = -3$.\n* Choice B ($2$): picks the smaller solution instead of the greatest.\n* Choice D ($7$): reports the $y$-value at the intersection, not the $x$-value asked for.\n\n**Test Day Takeaway:** When two curves both equal $y$, equate the right-hand sides and solve the quadratic — then re-read the question for WHICH quantity it wants.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The owner of a minigolf course models the course's daily profit as $P(x) = -3x^2 + 36x - 60$, in dollars, where $x$ is the ticket price in dollars. For what values of $x$ is the modeled profit positive?",
  choices: [
    // distractor: the region where P(x) < 0 — outside the roots of a downward parabola
    { id: "A", text: "$x < 2$ or $x > 10$" },
    { id: "B", text: "$2 < x < 10$" },
    // distractor: flips the signs of the roots and keeps the wrong interval
    { id: "C", text: "$-10 < x < -2$" },
    // distractor: uses 0 and the root-sum 12 rather than the actual zeros
    { id: "D", text: "$0 < x < 12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set $P(x) > 0$: $-3x^2 + 36x - 60 > 0$. Divide by $-3$ and FLIP the inequality: $x^2 - 12x + 20 < 0$. Factor: $(x - 2)(x - 10) < 0 \\Rightarrow 2 < x < 10$.\n\n**The Full Solution:**\nStep 1: Find the zeros of $P$. From $-3x^2 + 36x - 60 = 0$, divide by $-3$: $x^2 - 12x + 20 = 0 \\Rightarrow (x - 2)(x - 10) = 0$, so $x = 2$ or $x = 10$.\nStep 2: The leading coefficient $-3 < 0$ means the parabola opens DOWN, so $P(x) > 0$ BETWEEN the roots: $2 < x < 10$.\nStep 3: Spot-check the interior: $P(6) = -108 + 216 - 60 = 48 > 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: this is where the downward parabola sits BELOW the axis — profit negative, the inverse region.\n* Choice C: flips the signs of the roots, then keeps the wrong interval.\n* Choice D: uses $0$ and the root SUM $12$ instead of the actual zeros $2$ and $10$.\n\n**Test Day Takeaway:** For a downward-opening parabola, $f(x) > 0$ BETWEEN the roots — and dividing an inequality by a negative flips its direction.",
  skills: ["quadratic-equations", "word-problems"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $6 \\sqrt[3]{5^3 x^{6}} \\cdot \\sqrt{2^2 x}$ is equivalent to $a x^{b}$, where $a$ and $b$ are constants. What is the value of $a + b$?",
  correctAnswer: "62.5",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $62.5$ (or $\\frac{125}{2}$).**\n\n**The Fast Way (~50s):** $\\sqrt[3]{5^3 x^{6}} = 5x^2$ and $\\sqrt{2^2 x} = 2x^{1/2}$. Multiply with the leading $6$: $6 \\cdot 5x^2 \\cdot 2x^{1/2} = 60x^{5/2}$, so $a = 60$, $b = \\frac{5}{2}$, and $a + b = 62.5$.\n\n**The Full Solution:**\nStep 1: Convert the cube root: $\\sqrt[3]{5^3 x^{6}} = (5^3 x^{6})^{1/3} = 5^{3/3} x^{6/3} = 5x^2$.\nStep 2: Convert the square root: $\\sqrt{2^2 x} = (2^2 x)^{1/2} = 2^{2/2} x^{1/2} = 2x^{1/2}$.\nStep 3: Multiply, keeping the leading $6$ with the constants and ADDING the $x$-exponents:\n$$6 \\cdot 5x^2 \\cdot 2x^{1/2} = (6 \\cdot 5 \\cdot 2)\\, x^{2 + 1/2} = 60\\, x^{5/2}.$$\nStep 4: Matching $ax^{b}$ gives $a = 60$ and $b = \\frac{5}{2}$, so $a + b = 60 + 2.5 = 62.5$.\n\n**Common Mistakes:** Dropping the leading $6$ from the constant product ($5 \\cdot 2 = 10$ instead of $60$); MULTIPLYING the exponents $2$ and $\\frac{1}{2}$ instead of adding them (which gives $b = 1$); treating $\\sqrt{x}$ as $x$ and getting $b = 3$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent ($\\sqrt[n]{x^m} = x^{m/n}$), multiply the constants separately, and ADD the exponents on the shared base.",
  skills: ["exponents", "radicals"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The length of the rectangle's diagonal is twice the length of its shorter side, and the area of the rectangle is $225\\sqrt{3}$ square units. What is the diameter of the circle?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~50s):** A diagonal twice the shorter side makes a 30-60-90 triangle: shorter side $s$, longer side $s\\sqrt{3}$, diagonal $2s$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 225\\sqrt{3} \\Rightarrow s = 15$. The diagonal of an inscribed rectangle is the diameter: $2s = 30$.\n\n**The Full Solution:**\nStep 1: The diagonal of a rectangle inscribed in a circle passes through the center, so the diagonal equals the diameter.\nStep 2: Let the shorter side be $s$. The diagonal is $2s$, and the rectangle's corner is a right angle, so the shorter side, longer side, and diagonal form a right triangle with hypotenuse $2s$ and one leg $s$. A leg equal to half the hypotenuse sits opposite a $30^\\circ$ angle, so this is a 30-60-90 triangle with sides in ratio $1 : \\sqrt{3} : 2$.\nStep 3: The longer side is $s\\sqrt{3}$, so the area is\n$$s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 225\\sqrt{3},$$\ngiving $s^2 = 225 \\Rightarrow s = 15$.\nStep 4: The diameter equals the diagonal $= 2s = 30$.\nCheck: longer side $= 15\\sqrt{3}$, and $15^2 + (15\\sqrt{3})^2 = 225 + 675 = 900 = 30^2$. $\\checkmark$\n\n**Common Mistakes:** Solving for $s = 15$ and reporting it instead of the diameter $2s = 30$; setting the area equal to $s^2$ alone and dropping the $\\sqrt{3}$; forgetting that the inscribed rectangle's diagonal IS the diameter.\n\n**Test Day Takeaway:** A hypotenuse exactly twice one leg signals a 30-60-90 triangle ($1 : \\sqrt{3} : 2$), and a rectangle inscribed in a circle always has diagonal $=$ diameter.",
  skills: ["special-right-triangles", "geometry", "circle-equations"]
}
      ]
    }
  ]
};

export default practiceTest12;
