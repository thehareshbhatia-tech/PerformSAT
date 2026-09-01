// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H; M2 keeps its wavy flow
// E M M E M H H M H H M H E H H M H H H M H H (3E/7M/12H, band-7 ceiling).
// Figure density lifted toward the official ~20%: M1 carries 4 diagram items
// (Q4 triangle, Q10 scatterplot, Q15 two-way table, Q21 right triangle),
// M2 carries 4 (Q1 right triangle, Q12 two-way table, Q13 data table,
// Q17 scatterplot). Numeric MC choices sorted ascending (official convention).
// Scenario palette (fresh; disjoint from recreated tests 1-3 and from this
// test's previous edition): creamery, mountain weather stations, harbor
// ferry, soil-sampling lab, community theater / box office, streetlight
// maintenance, aquatic-center pools, plant nursery.

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
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
  question: "A cheese base is made by blending cow's milk and goat's milk in a ratio of $3$ to $5$ by volume. If a batch of the base contains $56$ liters of milk in total, how many liters of goat's milk does it contain?",
  choices: [
    // distractor: reports the value of one ratio share, k = 56/8, and stops
    { id: "A", text: "$7$" },
    // distractor: solves for the cow's milk instead of the goat's milk (3/8 of 56)
    { id: "B", text: "$21$" },
    { id: "C", text: "$35$" },
    // distractor: miscounts the sum of parts as 3 + 4 = 7, computing 56 * 5/7
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Goat's milk is $5$ parts out of $3+5=8$ total parts, so goat's milk $=\\frac{5}{8}\\cdot 56 = 35$ liters.\n\n**The Full Solution:**\nStep 1: Write the parts as $3k$ liters (cow) and $5k$ liters (goat), which keeps the ratio $3:5$.\nStep 2: The total is $3k+5k=8k=56$, so $k=7$.\nStep 3: Goat's milk $=5k=5\\cdot 7=35$ liters. Check: cow's milk $=3\\cdot 7=21$, and $21+35=56$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports one ratio share $k=\\frac{56}{8}$ without scaling it by $5$.\n* Choice B ($21$): solves for the cow's milk, $\\frac{3}{8}\\cdot 56$, instead of the goat's milk.\n* Choice D ($40$): miscounts the sum of the ratio parts as $7$, computing $\\frac{5}{7}\\cdot 56$.\n\n**Test Day Takeaway:** When a ratio is paired with a known total, divide by the SUM of the ratio parts ($3+5=8$) to find one share, then scale by the part you need.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $s(d) = 26 + 3d$ gives the estimated snow depth, in centimeters, at a mountain weather station $d$ days after the station's first measurement of the season. What is the best interpretation of $3$ in this context?",
  choices: [
    // distractor: describes the initial value 26, not the coefficient of d
    { id: "A", text: "The estimated snow depth, in centimeters, at the first measurement" },
    // distractor: treats 3 as an input value d = 3 rather than a rate
    { id: "B", text: "The estimated snow depth, in centimeters, $3$ days after the first measurement" },
    { id: "C", text: "The estimated increase in snow depth, in centimeters, each day" },
    // distractor: inverts the rate (that would be 1/3 day per centimeter)
    { id: "D", text: "The number of days it takes the snow depth to increase by $1$ centimeter" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $s(d)=26+3d$, the coefficient of $d$ is the rate of change: the snow depth grows by $3$ centimeters per day.\n\n**The Full Solution:**\nStep 1: The model has the linear form $s(d)=b+md$, with $b=26$ and $m=3$.\nStep 2: The slope $m$ is the change in depth per one-unit change in $d$ (one day), so $3$ means the depth increases by $3$ centimeters each day. That is Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the initial value $26$ (the depth at $d=0$), not the slope.\n* Choice B: treats $3$ as an input $d=3$ rather than a per-day rate.\n* Choice D: inverts the rate — that would be $\\frac{1}{3}$ day per centimeter, not $3$.\n\n**Test Day Takeaway:** In $y=b+mx$, the number multiplying the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $g(x) = 4x - 9$, what is the value of $g(6) - 5$?",
  choices: [
    // distractor: subtracts 5 inside the function: g(6 - 5) = g(1) = -5
    { id: "A", text: "$-5$" },
    { id: "B", text: "$10$" },
    // distractor: stops one step early — reports g(6) without subtracting 5
    { id: "C", text: "$15$" },
    // distractor: applies the inverse operation — adds 5 instead of subtracting
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(6)=4(6)-9=15$, then $g(6)-5=15-5=10$.\n\n**The Full Solution:**\nStep 1: Evaluate the function at $x=6$: $g(6)=4(6)-9=24-9=15$.\nStep 2: The question wants $g(6)-5$, so subtract from the output: $15-5=10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): subtracts inside the function, computing $g(6-5)=g(1)=-5$.\n* Choice C ($15$): reports $g(6)$ without subtracting $5$.\n* Choice D ($20$): adds $5$ instead of subtracting.\n\n**Test Day Takeaway:** $g(a)-5$ means evaluate $g$ first, THEN subtract from the result — the $-5$ sits outside the function.",
  skills: ["function-interpretation"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the triangle shown, what is the value of $x$?",
  diagram: {
    type: "triangleWithAngles",
    params: {
      angleLabels: ["38°", "x°", "79°"]
    }
  },
  choices: [
    { id: "A", text: "$63$" },
    // distractor: subtracts only one angle from 180 (180 - 79 = 101)
    { id: "B", text: "$101$" },
    // distractor: adds the two given angles (38 + 79 = 117)
    { id: "C", text: "$117$" },
    // distractor: subtracts from 360 instead of 180
    { id: "D", text: "$243$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The three angles sum to $180^\\circ$, so $x=180-38-79=63$.\n\n**The Full Solution:**\nStep 1: The interior angles of any triangle add to $180^\\circ$.\nStep 2: Subtract the two labeled angles: $180^\\circ-38^\\circ-79^\\circ=180^\\circ-117^\\circ=63^\\circ$. Check: $38+63+79=180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($101$): subtracts only one angle, $180-79=101$.\n* Choice C ($117$): adds the two given angles instead of subtracting their sum from $180$.\n* Choice D ($243$): uses $360^\\circ$ (a quadrilateral's angle sum) instead of $180^\\circ$.\n\n**Test Day Takeaway:** A triangle's interior angles always total $180^\\circ$; subtract the known angles from $180$ to find the missing one.",
  skills: ["triangles", "angles"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $4x - 7 = 21$, what is the value of $4x + 8$?",
  choices: [
    // distractor: applies the inverse operation — subtracts 15 instead of adding
    { id: "A", text: "$6$" },
    // distractor: stops one step early — reports x = 7 instead of 4x + 8
    { id: "B", text: "$7$" },
    // distractor: finds 4x = 28 but forgets to add the 8
    { id: "C", text: "$28$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $4x+8=(4x-7)+15=21+15=36$ — no need to find $x$.\n\n**The Full Solution:**\nStep 1: Notice the target $4x+8$ shares the $4x$ term with the given $4x-7=21$.\nStep 2: Since $4x+8$ is $15$ more than $4x-7$, it equals $21+15=36$. (Or solve $4x=28$, $x=7$, then $4(7)+8=36$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracts $15$ instead of adding, $21-15=6$.\n* Choice B ($7$): reports $x=7$ instead of evaluating $4x+8$.\n* Choice C ($28$): finds $4x=28$ but forgets to add the $8$.\n\n**Test Day Takeaway:** When the question asks for an expression rather than $x$ itself, look for a constant shift between it and the given equation before solving for $x$.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $P(t) = 12{,}500(1.03)^t$ models the number of passengers a harbor ferry line carries each year, $t$ years after $2021$. Which of the following is the best interpretation of $1.03$ in this context?",
  choices: [
    // distractor: confuses exponential with linear growth (constant amount added)
    { id: "A", text: "The number of passengers increases by $1.03$ each year." },
    { id: "B", text: "The number of passengers increases by $3\\%$ each year." },
    // distractor: treats the whole base as the rate instead of subtracting 1
    { id: "C", text: "The number of passengers increases by $103\\%$ each year." },
    // distractor: misreads the base as an output value of the function
    { id: "D", text: "The ferry line carries $1.03$ passengers in year $t$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $a\\cdot b^t$, the base $b=1.03=1+0.03$, so the yearly growth rate is $0.03=3\\%$.\n\n**The Full Solution:**\nStep 1: The model $P(t)=12{,}500(1.03)^t$ has the form $P_0(1+r)^t$.\nStep 2: Match the base: $1+r=1.03$, so $r=0.03=3\\%$. Each year the passenger count grows by $3\\%$ of the prior year's value.\n\n**Why the wrong answers are tempting:**\n* Choice A: adding $1.03$ passengers yearly is linear growth; $1.03$ is a multiplier, not an addition.\n* Choice C: $103\\%$ treats the whole base $1.03$ as the rate instead of subtracting $1$.\n* Choice D: $1.03$ is the base of the exponent, not an output value of $P$.\n\n**Test Day Takeaway:** In $P_0(1+r)^t$, subtract $1$ from the base to get the growth rate $r$ — the base itself is not the percent change.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A box contains $8$ orange tokens and $12$ white tokens. Two tokens are selected at random, one at a time, without replacement. What is the probability that both tokens selected are orange?",
  choices: [
    { id: "A", text: "$\\dfrac{14}{95}$" },
    // distractor: assumes replacement — (8/20)^2 = 64/400 = 4/25
    { id: "B", text: "$\\dfrac{4}{25}$" },
    // distractor: keeps the numerator 8 on the second draw (8/20 * 8/19)
    { id: "C", text: "$\\dfrac{16}{95}$" },
    // distractor: stops at the first draw — 8/20 = 2/5
    { id: "D", text: "$\\dfrac{2}{5}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $P=\\frac{8}{20}\\times\\frac{7}{19}=\\frac{56}{380}=\\frac{14}{95}$.\n\n**The Full Solution:**\nStep 1: Total tokens $=8+12=20$, so $P(\\text{1st orange})=\\frac{8}{20}$.\nStep 2: After one orange token is removed, $7$ orange remain out of $19$, so $P(\\text{2nd orange})=\\frac{7}{19}$.\nStep 3: Multiply: $\\frac{8}{20}\\times\\frac{7}{19}=\\frac{56}{380}=\\frac{14}{95}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{4}{25}$): assumes replacement, using $\\left(\\frac{8}{20}\\right)^2$.\n* Choice C ($\\frac{16}{95}$): keeps the numerator at $8$ on the second draw instead of dropping it to $7$.\n* Choice D ($\\frac{2}{5}$): stops at $P(\\text{1st orange})=\\frac{8}{20}$.\n\n**Test Day Takeaway:** \"Without replacement\" lowers both the matching count and the total by $1$ on the next draw.",
  skills: ["probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3x - 4) - 2(4x + 1) = 34$, what is the value of $x$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Distribute: $15x-20-8x-2=34$, combine to $7x-22=34$, so $7x=56$ and $x=8$.\n\n**The Full Solution:**\nStep 1: Distribute both products: $5(3x-4)=15x-20$ and $-2(4x+1)=-8x-2$.\nStep 2: Combine like terms: $(15x-8x)+(-20-2)=7x-22$, so $7x-22=34$.\nStep 3: Add $22$: $7x=56$, then divide: $x=8$. Check: $5(20)-2(33)=100-66=34$. $\\checkmark$\n\n**Common Mistakes:** Distributing $-2(4x+1)$ as $-8x+2$ instead of $-8x-2$; combining the constants as $-18$ instead of $-20-2=-22$.\n\n**Test Day Takeaway:** Distribute carefully across negative signs, then combine like terms before isolating $x$.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x}{5} + \\dfrac{x}{2} = 21$, what is the value of $x$?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** Multiply through by $10$: $2x+5x=210$, so $7x=210$ and $x=30$.\n\n**The Full Solution:**\nStep 1: The denominators $5$ and $2$ have least common denominator $10$. Multiply every term by $10$.\nStep 2: $\\frac{10x}{5}+\\frac{10x}{2}=210$ becomes $2x+5x=210$.\nStep 3: $7x=210$, so $x=30$. Check: $\\frac{30}{5}+\\frac{30}{2}=6+15=21$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the left side by $10$ but forgetting to multiply the right side, leaving $7x=21$; adding the denominators to get $\\frac{2x}{7}=21$.\n\n**Test Day Takeaway:** Clear fractions in one move by multiplying every term — both sides — by the least common denominator.",
  skills: ["solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the elevation $x$, in hundreds of meters, and the average weekly snowfall $y$, in centimeters, for each of $12$ mountain weather stations, along with a line of best fit $y = 3.2x + 21.4$. According to the model, what is the predicted average weekly snowfall, in centimeters, for a station at an elevation of $15$ hundred meters?",
  diagram: { type: "scatterplot", params: {
    points: [[2,28],[3,32],[4,33],[5,38],[6,41],[7,43],[8,47],[9,50],[10,54],[11,57],[12,59],[13,63]],
    xMin: 0, xMax: 16, yMin: 0, yMax: 80,
    xGridStep: 1, yGridStep: 5, xLabelStep: 3, yLabelStep: 10,
    xLabel: "Elevation (hundreds of meters)", yLabel: "Snowfall (cm)",
    bestFitLine: { slope: 3.2, intercept: 21.4 },
  } },
  choices: [
    // distractor: adds the slope to the intercept instead of multiplying by x
    { id: "A", text: "$24.6$" },
    // distractor: computes 3.2 * 15 but forgets to add the intercept
    { id: "B", text: "$48.0$" },
    // distractor: rounds the slope to 3, giving 3(15) + 21.4
    { id: "C", text: "$66.4$" },
    { id: "D", text: "$69.4$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $y=3.2(15)+21.4=48+21.4=69.4$.\n\n**The Full Solution:**\nStep 1: Substitute $x=15$ into the model $y=3.2x+21.4$.\nStep 2: $3.2(15)=48$, then add the intercept: $48+21.4=69.4$ centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24.6$): adds the slope to the intercept, $3.2+21.4$, without multiplying by $x$.\n* Choice B ($48.0$): computes $3.2\\times 15$ but forgets to add the intercept $21.4$.\n* Choice C ($66.4$): rounds the slope to $3$, giving $3(15)+21.4=66.4$.\n\n**Test Day Takeaway:** To predict $y$ from $y=mx+b$, multiply by the slope AND add the full intercept — keep the decimals exact.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A soil scientist collects a cylindrical soil core with a radius of $3$ centimeters and a length of $25$ centimeters. The volume of the core, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "225",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $225$.**\n\n**The Fast Way (~10s):** $V=\\pi r^2 h=\\pi(3)^2(25)=9\\cdot 25\\cdot\\pi=225\\pi$, so $k=225$.\n\n**The Full Solution:**\nStep 1: A cylindrical core has volume $V=\\pi r^2 h$, where $h$ is its length.\nStep 2: With $r=3$ and $h=25$: $V=\\pi(3)^2(25)=\\pi(9)(25)=225\\pi$ cubic centimeters.\nStep 3: Since $V=k\\pi$, $k=225$.\n\n**Common Mistakes:** Skipping the square and computing $\\pi r h=75\\pi$ (giving $k=75$); doubling the radius instead of squaring it ($6\\cdot 25=150$).\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height — $V=\\pi r^2 h$ is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $|3x + 6| = 24$, what is the sum of all possible values of $x$?",
  choices: [
    // distractor: stops one step early — reports only the negative solution
    { id: "A", text: "$-10$" },
    { id: "B", text: "$-4$" },
    // distractor: uses only the positive case and skips x = -10
    { id: "C", text: "$6$" },
    // distractor: reports the positive difference of the solutions instead of the sum
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Split into $3x+6=24\\Rightarrow x=6$ and $3x+6=-24\\Rightarrow x=-10$; the sum is $6+(-10)=-4$.\n\n**The Full Solution:**\nStep 1: $|3x+6|=24$ means $3x+6=24$ or $3x+6=-24$.\nStep 2: Case 1: $3x=18\\Rightarrow x=6$. Case 2: $3x=-30\\Rightarrow x=-10$.\nStep 3: Sum the solutions: $6+(-10)=-4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): reports only the negative solution, not the sum.\n* Choice C ($6$): uses only the positive case and skips $x=-10$.\n* Choice D ($16$): computes the positive difference $6-(-10)$ instead of the sum.\n\n**Test Day Takeaway:** $|f(x)|=c$ always splits into two cases; for $|ax+b|=c$ the two roots sum to $-\\frac{2b}{a}$, here $-\\frac{2(6)}{3}=-4$.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Each of the $40$ members of a theater's stage crew can operate the light board, the sound board, both, or neither. If $22$ members can operate the light board, $15$ can operate the sound board, and $9$ can operate both, how many members can operate neither?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Members who can operate at least one board: $22 + 15 - 9 = 28$. Neither: $40 - 28 = 12$.\n\n**The Full Solution:**\nStep 1: Count how many can operate at least one board with inclusion-exclusion. Adding $22 + 15$ double-counts the $9$ who can operate both, so subtract once: $22 + 15 - 9 = 28$.\nStep 2: The rest can operate neither: $40 - 28 = 12$.\n\n**Common Mistakes:** Adding $22 + 15 = 37$ and concluding only $3$ operate neither (forgetting the overlap correction); subtracting the $9$ twice and getting $40 - 19 = 21$.\n\n**Test Day Takeaway:** For \"neither\" problems, find the size of the union $|A| + |B| - |A \\cap B|$ first, then subtract from the total.",
  skills: ["probability", "statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(x) = -3(x + 2)^2 + 21$. What is the maximum value of $h(x)$?",
  choices: [
    // distractor: reads the leading coefficient a as the answer
    { id: "A", text: "$-3$" },
    // distractor: reports the x-coordinate of the vertex instead of the value
    { id: "B", text: "$-2$" },
    // distractor: evaluates h(0) = -3(4) + 21 = 9 instead of reading the vertex
    { id: "C", text: "$9$" },
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** In vertex form $a(x-h)^2 + k$ with $a < 0$, the maximum value is $k$. Here $k = 21$, so the answer is $21$, choice D.\n\n**The Full Solution:**\nStep 1: $h(x) = -3(x + 2)^2 + 21$ is already in vertex form with $a = -3$ and vertex $(-2, 21)$.\nStep 2: Since $a = -3 < 0$, the parabola opens downward, so the vertex is the highest point.\nStep 3: The maximum value is the $y$-coordinate of the vertex: $21$, attained at $x = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reads the leading coefficient $a$, which controls the opening, not the maximum.\n* Choice B ($-2$): reports the $x$-coordinate $-2$ (where the maximum occurs) rather than the value.\n* Choice C ($9$): evaluates $h(0) = -3(4) + 21 = 9$ instead of using the vertex.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$ with $a < 0$, the maximum value is $k$. Read it straight off — no expanding needed.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table summarizes the $90$ swim-class sessions held at two municipal pools one summer, classified by whether each session filled to capacity. If one of the $90$ sessions is selected at random, what is the probability that the session was held at Pool A or filled to capacity?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Filled", "Not filled", "Total"],
      rows: [
        ["Pool A", "32", "16", "48"],
        ["Pool B", "27", "15", "42"],
        ["Total", "59", "31", "90"]
      ]
    }
  },
  choices: [
    // distractor: computes the AND probability, 32/90
    { id: "A", text: "$\\dfrac{16}{45}$" },
    // distractor: counts only the Pool A sessions, 48/90
    { id: "B", text: "$\\dfrac{8}{15}$" },
    // distractor: counts only the filled sessions, 59/90
    { id: "C", text: "$\\dfrac{59}{90}$" },
    { id: "D", text: "$\\dfrac{5}{6}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Inclusion-exclusion on the table: $P(\\text{A or filled}) = \\dfrac{48 + 59 - 32}{90} = \\dfrac{75}{90} = \\dfrac{5}{6}$.\n\n**The Full Solution:**\nStep 1: From the table, $48$ sessions were held at Pool A and $59$ sessions filled to capacity.\nStep 2: The overlap — Pool A AND filled — is $32$ sessions. Adding $48 + 59$ counts these twice, so subtract once: $48 + 59 - 32 = 75$.\nStep 3: $P = \\dfrac{75}{90} = \\dfrac{5}{6}$, choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{16}{45}$): computes the AND probability, $\\frac{32}{90}$, instead of the OR.\n* Choice B ($\\frac{8}{15}$): counts only the Pool A sessions, $\\frac{48}{90}$, ignoring the \"or.\"\n* Choice C ($\\frac{59}{90}$): counts only the filled sessions.\n\n**Test Day Takeaway:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. On a two-way table, the overlap is the single cell where the row and column meet — subtract it once.",
  skills: ["probability"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has the solution $(x, y)$.\n\n$2x - y = 0$\n$x^2 - y = 24$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~40s):** From the first equation $y = 2x$. Substitute into the second: $x^2 - 2x = 24 \\Rightarrow x^2 - 2x - 24 = 0 \\Rightarrow (x - 6)(x + 4) = 0$. Since $x > 0$, $x = 6$, so $y = 2(6) = 12$.\n\n**The Full Solution:**\nStep 1: Solve the linear equation for $y$: $y = 2x$.\nStep 2: Substitute into the nonlinear equation: $x^2 - 2x = 24$, so $x^2 - 2x - 24 = 0$.\nStep 3: Factor: $(x - 6)(x + 4) = 0$, giving $x = 6$ or $x = -4$.\nStep 4: The condition $x > 0$ forces $x = 6$, so $y = 2(6) = 12$.\nCheck: $2(6) - 12 = 0$ and $6^2 - 12 = 24$. $\\checkmark$\n\n**Common Mistakes:** Picking $x = -4$ and ignoring the $x > 0$ restriction; solving for $x = 6$ but reporting $x$ instead of the requested value $y$.\n\n**Test Day Takeaway:** For a linear-nonlinear system, isolate a variable in the LINEAR equation, substitute, then apply any sign restriction before reading off the requested value.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $16^{x-1} = 64^{x-3}$, what is the value of $x$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Rewrite both sides with base $4$: $4^{2(x-1)} = 4^{3(x-3)}$. Equate exponents: $2x - 2 = 3x - 9 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: $16 = 4^2$ and $64 = 4^3$, so $(4^2)^{x-1} = (4^3)^{x-3}$.\nStep 2: Multiply exponents: $4^{2(x-1)} = 4^{3(x-3)}$, i.e. $4^{2x-2} = 4^{3x-9}$.\nStep 3: Equal bases means equal exponents: $2x - 2 = 3x - 9 \\Rightarrow 7 = x$.\nCheck: $16^{6} = (4^2)^6 = 4^{12}$ and $64^{4} = (4^3)^4 = 4^{12}$. $\\checkmark$\n\n**Common Mistakes:** Failing to distribute, writing $2(x-1) = 2x - 1$; dropping the sign on $3(-3)$ and getting $3x + 9$.\n\n**Test Day Takeaway:** Convert every term to one common base, then set the exponents equal — and distribute across the whole exponent, not just its first term.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $g$ has roots at $x = -4$ and $x = 5$. If $g(2) = -54$, what is the value of $g(0)$?",
  choices: [
    { id: "A", text: "$-60$" },
    // distractor: computes the bare product (4)(-5) without applying a = 3
    { id: "B", text: "$-20$" },
    // distractor: sign slip on the bare product (4)(-5)
    { id: "C", text: "$20$" },
    // distractor: applies a = 3 but drops the sign of the product
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Write $g(x) = a(x + 4)(x - 5)$ from the roots. From $g(2) = -54$: $a(6)(-3) = -54 \\Rightarrow -18a = -54 \\Rightarrow a = 3$. Then $g(0) = 3(4)(-5) = -60$, choice A.\n\n**The Full Solution:**\nStep 1: Roots $-4$ and $5$ give the factored form $g(x) = a(x + 4)(x - 5)$.\nStep 2: Use $g(2) = -54$: $a(2 + 4)(2 - 5) = a(6)(-3) = -18a = -54$, so $a = 3$.\nStep 3: Evaluate $g(0) = 3(0 + 4)(0 - 5) = 3(4)(-5) = -60$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-20$): computes the bare product $(4)(-5)$ without applying $a = 3$.\n* Choice C ($20$): drops the sign on the bare product $(4)(-5)$.\n* Choice D ($60$): applies $a = 3$ but loses the negative sign of the product.\n\n**Test Day Takeaway:** Build the factored form straight from the roots, pin down $a$ with the given point, then substitute the value you actually need — tracking every sign.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{3}{x + 2} + \\dfrac{4}{x - 2} = \\dfrac{44}{x^2 - 4}$, what is the value of $x$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Since $x^2 - 4 = (x + 2)(x - 2)$, multiply the whole equation by $(x + 2)(x - 2)$: $3(x - 2) + 4(x + 2) = 44$. Simplify to $7x + 2 = 44$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2 - 4 = (x + 2)(x - 2)$, which is the common denominator.\nStep 2: Multiply both sides by $(x + 2)(x - 2)$: $3(x - 2) + 4(x + 2) = 44$.\nStep 3: Expand: $3x - 6 + 4x + 8 = 44 \\Rightarrow 7x + 2 = 44 \\Rightarrow 7x = 42 \\Rightarrow x = 6$.\nStep 4: Confirm $x = 6$ leaves no denominator zero: $6 + 2 = 8$ and $6 - 2 = 4$, both nonzero. $\\checkmark$\n\n**Common Mistakes:** Distributing wrong, $3(x - 2) = 3x - 2$ instead of $3x - 6$; skipping the check that the solution doesn't make a denominator zero.\n\n**Test Day Takeaway:** Factor the denominators, clear fractions by multiplying through by the LCD, solve, then verify the answer doesn't create a zero denominator.",
  skills: ["solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the equation $2x^2 + 20x + k = 0$ have exactly one real solution?",
  choices: [
    // distractor: sign error — solves 400 + 8k = 0
    { id: "A", text: "$-50$" },
    // distractor: squares half the coefficient after dividing by a, (20/4)^2, and stops
    { id: "B", text: "$25$" },
    { id: "C", text: "$50$" },
    // distractor: uses 4k instead of the full 4ac = 8k, solving 400 - 4k = 0
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means the discriminant is zero: $20^2 - 4(2)(k) = 0 \\Rightarrow 400 - 8k = 0 \\Rightarrow k = 50$, choice C.\n\n**The Full Solution:**\nStep 1: A quadratic $ax^2 + bx + c = 0$ has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: With $a = 2$ and $b = 20$: $20^2 - 4(2)(k) = 0$.\nStep 3: $400 - 8k = 0 \\Rightarrow 8k = 400 \\Rightarrow k = 50$.\nCheck: $2x^2 + 20x + 50 = 2(x + 5)^2$, a perfect square with the single root $x = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-50$): a sign error turns the equation into $400 + 8k = 0$.\n* Choice B ($25$): squares $\\frac{20}{4} = 5$ from completing the square but forgets to multiply back by $a = 2$.\n* Choice D ($100$): uses $4k$ instead of the full $4ac = 8k$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" is code for discriminant $= 0$. Set $b^2 - 4ac = 0$ — with the actual $a$, not $a = 1$.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Three straight paths at a plant nursery enclose the right triangle shown, with side lengths given in meters. What is the area, in square meters, of the enclosed triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["7", "", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: computes the perimeter 7 + 24 + 25 instead of the area
    { id: "A", text: "$56$" },
    { id: "B", text: "$84$" },
    // distractor: uses the hypotenuse as a leg — (1/2)(7)(25)
    { id: "C", text: "$87.5$" },
    // distractor: multiplies the legs but forgets the factor of 1/2
    { id: "D", text: "$168$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A leg of $7$ with hypotenuse $25$ is the $7$-$24$-$25$ triple, so the missing leg is $24$. Area $= \\tfrac{1}{2}(7)(24) = 84$, choice B.\n\n**The Full Solution:**\nStep 1: Let the missing leg be $b$. By the Pythagorean theorem, $7^2 + b^2 = 25^2$.\nStep 2: $49 + b^2 = 625 \\Rightarrow b^2 = 576 \\Rightarrow b = 24$.\nStep 3: The two legs meet at the right angle, so they are the base and height: area $= \\tfrac{1}{2}(7)(24) = 84$ square meters.\nCheck: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($56$): computes the perimeter $7 + 24 + 25$ instead of the area.\n* Choice C ($87.5$): uses the hypotenuse as a leg, $\\tfrac{1}{2}(7)(25)$ — the hypotenuse is never a height.\n* Choice D ($168$): multiplies the legs, $7 \\cdot 24$, but forgets the $\\tfrac{1}{2}$.\n\n**Test Day Takeaway:** Know the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$); in a right triangle, the LEGS are the base and height for area.",
  skills: ["triangles", "right-triangles"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 6x + 10y - 2 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: treats the constant 2 as r^2 without completing the square
    { id: "A", text: "$\\sqrt{2}$" },
    // distractor: completes both squares but forgets to move the constant, 9 + 25 = 34
    { id: "B", text: "$\\sqrt{34}$" },
    { id: "C", text: "$6$" },
    // distractor: stops one step early — reports r^2 = 36 instead of r
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: $(x - 3)^2 + (y + 5)^2 = 2 + 9 + 25 = 36$. Radius $= \\sqrt{36} = 6$, choice C.\n\n**The Full Solution:**\nStep 1: Group terms: $(x^2 - 6x) + (y^2 + 10y) = 2$.\nStep 2: Complete the square. Half of $-6$ is $-3$, $(-3)^2 = 9$; half of $10$ is $5$, $5^2 = 25$. Add both to each side.\nStep 3: $(x^2 - 6x + 9) + (y^2 + 10y + 25) = 2 + 9 + 25 \\Rightarrow (x - 3)^2 + (y + 5)^2 = 36$.\nStep 4: Standard form gives $r^2 = 36$, so $r = \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{2}$): treats the constant $2$ as $r^2$ without completing the square.\n* Choice B ($\\sqrt{34}$): adds $9 + 25$ but drops the original constant $2$.\n* Choice D ($36$): reports $r^2 = 36$ and forgets to take the square root.\n\n**Test Day Takeaway:** Complete the square for both $x$ and $y$. Whatever you add on the left also gets added on the right; then $r = \\sqrt{r^2}$.",
  skills: ["circle-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 5 — Math Module 2 (22 questions)
// Wavy flow (frozen): E M M E M H H M H H M H E H H M H H H M H H
// Distribution: 3 E (Q1/Q4/Q13), 7 M (Q2/Q3/Q5/Q8/Q11/Q16/Q20), 12 H (rest), band-7 ceiling.
// Warm-ups Q1-5 are never trivial: Q1 scaled-triple right triangle (recognize
// 5x = hypotenuse, then answer the requested quantity — NOT the tests-1-3
// missing-leg/hypotenuse-radical trap family), Q4 rate with a
// minutes-to-hours conversion, Q2/Q3/Q5 each carry a named trap.
// Q13 breather = pure range read from a data table.
// Slot archetypes carried from the 2026-06 blueprint with fresh content:
// Q6 parametric dependent system, Q7 tangent-line discriminant, Q9 circle
// x-extent, Q10 quadratic-formula discriminant form, Q14 exponential period
// years-to-months, Q17 scatterplot best-fit scaling, Q21 survey scale-up
// margin, Q22 vertex/two-intercept a+b+c bound.
// Diagrams: Q1 right triangle, Q12 two-way table, Q13 data table, Q17 scatterplot.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The legs of the right triangle shown have lengths $3x$ and $4x$, where $x > 0$, and the hypotenuse has length $45$. What is the value of $x$?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["4x", "3x", "45"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: grabs the 5 from the 3-4-5 pattern instead of solving 5x = 45
    { id: "A", text: "$5$" },
    { id: "B", text: "$9$" },
    // distractor: divides the hypotenuse by the smaller ratio number, 45/3
    { id: "C", text: "$15$" },
    // distractor: answers the longer leg 4x = 36 instead of x
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Legs $3x$ and $4x$ make a $3$-$4$-$5$ triangle scaled by $x$, so the hypotenuse is $5x$. Then $5x = 45$ gives $x = 9$.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $(3x)^2 + (4x)^2 = 45^2$.\nStep 2: $9x^2 + 16x^2 = 25x^2 = 2025$, so $x^2 = 81$.\nStep 3: Since $x > 0$, $x = 9$. Check: legs $27$ and $36$, and $27^2 + 36^2 = 729 + 1296 = 2025 = 45^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): grabs the $5$ from the $3$-$4$-$5$ pattern without solving $5x = 45$.\n* Choice C ($15$): divides $45$ by the ratio number $3$ instead of by $5$.\n* Choice D ($36$): reports the longer leg $4x = 36$ — the question asks for $x$ itself.\n\n**Test Day Takeaway:** Legs in a $3:4$ ratio always make the hypotenuse $5$ parts. Set (parts) $\\times x =$ (given side), solve, then re-read WHICH quantity the question wants.",
  skills: ["pythagorean-theorem", "right-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the positive difference between the two solutions to the equation $|x + 5| = 11$?",
  choices: [
    // distractor: reports one of the solutions instead of the difference
    { id: "A", text: "$6$" },
    // distractor: doubles the 5 from inside the absolute value instead of the 11
    { id: "B", text: "$10$" },
    // distractor: reads the right-hand side 11 as the answer
    { id: "C", text: "$11$" },
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $|x + 5| = 11 \\Rightarrow x + 5 = \\pm 11$, so $x = 6$ or $x = -16$. Difference $= 6 - (-16) = 22$, choice D.\n\n**The Full Solution:**\nStep 1: An absolute-value equation splits into two cases: $x + 5 = 11$ or $x + 5 = -11$.\nStep 2: These give $x = 6$ and $x = -16$.\nStep 3: Positive difference $= 6 - (-16) = 22$.\nShortcut: the solutions of $|x - h| = k$ sit $k$ on each side of $x = h$, so they are always $2k$ apart — here $2(11) = 22$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports one solution instead of the difference.\n* Choice B ($10$): doubles the $5$ from inside the absolute value instead of the $11$.\n* Choice C ($11$): reads off the right-hand side without doubling.\n\n**Test Day Takeaway:** $|x - h| = k$ has solutions $h \\pm k$: their sum is $2h$ and their positive difference is $2k$. Know which one the question asks for.",
  skills: ["absolute-value", "solving-equations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Priya uses $6$ square meters of plywood to build each set panel for a community theater. The relationship between the number of panels she builds, $x$, and the total plywood she purchased, $y$, in square meters, satisfies $y - 6x = 15$. Which of the following is the best interpretation of $15$ in this context?",
  choices: [
    // distractor: treats 15 as a count of panels
    { id: "A", text: "Priya built $15$ set panels." },
    // distractor: reads 15 as the plywood used rather than the surplus
    { id: "B", text: "Priya used a total of $15$ square meters of plywood to build the panels." },
    // distractor: reads 15 as the total purchased rather than the surplus
    { id: "C", text: "Priya purchased a total of $15$ square meters of plywood." },
    { id: "D", text: "Priya purchased $15$ square meters more plywood than she used to build the panels." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Each panel uses $6$ square meters, so $6x$ is the plywood used and $y$ is the plywood purchased. The equation says $y - 6x = 15$: purchased minus used is $15$ — the leftover.\n\n**The Full Solution:**\nStep 1: Rearrange to $y = 6x + 15$, slope-intercept form.\nStep 2: The slope $6$ is the plywood consumed per panel, so $6x$ is the total used on $x$ panels; $y$ is the total purchased.\nStep 3: The constant is exactly $y - 6x = (\\text{purchased}) - (\\text{used}) = 15$: the surplus plywood bought but not used, matching choice D.\nStep 4: Check with $x = 4$: used $= 24$, purchased $= 24 + 15 = 39$ — always $15$ more than used. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: panels are counted by $x$, not by the constant.\n* Choice B: the amount used is $6x$, which changes with $x$; it is not a constant $15$.\n* Choice C: the total purchased is $y$, which also grows with $x$.\n\n**Test Day Takeaway:** Rearrange into $y = mx + b$ first. When $y$ is a total and $mx$ is the amount consumed, the constant $b$ is the difference left over — not a total and not a count.",
  skills: ["interpreting-linear-models", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A harbor ferry travels $18$ kilometers in $40$ minutes at a constant speed. At this speed, how many kilometers does the ferry travel in one hour?",
  choices: [
    // distractor: scales by 40/60 instead of 60/40
    { id: "A", text: "$12$" },
    { id: "B", text: "$27$" },
    // distractor: treats 40 minutes as half an hour and doubles the distance
    { id: "C", text: "$36$" },
    // distractor: uses 100 minutes per hour, 18 * 100/40
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** One hour is $\\frac{60}{40} = \\frac{3}{2}$ of the given time, so the distance is $18 \\cdot \\frac{3}{2} = 27$ kilometers.\n\n**The Full Solution:**\nStep 1: At constant speed, distance is proportional to time. Set up $\\frac{18 \\text{ km}}{40 \\text{ min}} = \\frac{d}{60 \\text{ min}}$.\nStep 2: Cross-multiply: $40d = 18 \\cdot 60 = 1080$.\nStep 3: $d = \\frac{1080}{40} = 27$ kilometers.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): scales by $\\frac{40}{60}$ instead of $\\frac{60}{40}$, shrinking the distance.\n* Choice C ($36$): treats $40$ minutes as half an hour and doubles $18$.\n* Choice D ($45$): converts with $100$ minutes per hour, computing $18 \\cdot \\frac{100}{40}$.\n\n**Test Day Takeaway:** Keep the units honest: an hour is $60$ minutes, so scale the distance by $\\frac{60}{\\text{given minutes}}$ — direction matters.",
  skills: ["proportions", "rates"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A soil laboratory measured the nitrogen level, in milligrams per kilogram, of $9$ field samples, listed in order:\n\n$11, 13, 14, 16, 18, 19, 21, 24, 26$\n\nA data-entry error then adds the value $2$ to the data set. Compared with the original nine readings, which of the following describes the change to the median and the range?",
  choices: [
    { id: "A", text: "The median decreases by $1$ and the range increases." },
    // distractor: gets the median right but misses the obvious range change
    { id: "B", text: "The median decreases by $1$ and the range stays the same." },
    // distractor: ignores both effects (the low value clearly stretches the range)
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: overestimates the median shift (one added value barely moves it)
    { id: "D", text: "The median decreases by more than $1$ and the range increases." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Original $9$ values: median is the $5$th value $= 18$, range $= 26 - 11 = 15$. Add $2$ for $10$ values: median is the average of the $5$th and $6$th, $\\dfrac{16 + 18}{2} = 17$, range $= 26 - 2 = 24$. The median falls by $1$ and the range increases.\n\n**The Full Solution:**\nStep 1: The original sorted list has $9$ values, so the median is the middle ($5$th) value, $18$. Range $= 26 - 11 = 15$.\nStep 2: Adding $2$ gives the sorted list $2, 11, 13, 14, 16, 18, 19, 21, 24, 26$ with $10$ values, so the median is the average of the $5$th and $6$th values, $\\dfrac{16 + 18}{2} = 17$. Range $= 26 - 2 = 24$.\nStep 3: Median change $= 17 - 18 = -1$ (decreases by $1$); range change $= 24 - 15 = 9$ (increases). That is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: gets the median shift right but misses that the new minimum $2$ stretches the range.\n* Choice C: ignores both effects, but the erroneous low value clearly widens the range.\n* Choice D: overstates the shift; one added value moves the median only half a step down the list.\n\n**Test Day Takeaway:** An extreme value swings the range hard but barely nudges the median — recompute both from the re-sorted list rather than guessing.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$5x + 2y = 14$$\n$$15x + 6y = 42$$\n\nFor each real number $r$, which of the following points lies on the graph of both equations of the given system in the $xy$-plane?",
  choices: [
    { id: "A", text: "$\\left(r,\\ -\\dfrac{5r}{2} + 7\\right)$" },
    // distractor: sign-flips the y-parametrization (gives 10r + 14, not constant)
    { id: "B", text: "$\\left(r,\\ \\dfrac{5r}{2} + 7\\right)$" },
    // distractor: puts the x-solve coefficients into the y-slot
    { id: "C", text: "$\\left(r,\\ -\\dfrac{2r}{5} + \\dfrac{14}{5}\\right)$" },
    // distractor: swaps the coordinates of the correct parametrization
    { id: "D", text: "$\\left(-\\dfrac{5r}{2} + 7,\\ r\\right)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The second equation is exactly $3\\times$ the first, so both graphs are the single line $5x + 2y = 14$. Let $x = r$ and solve: $2y = 14 - 5r \\Rightarrow y = -\\dfrac{5r}{2} + 7$. So $\\left(r,\\ -\\dfrac{5r}{2} + 7\\right)$ lies on the line for every $r$, choice A.\n\n**The Full Solution:**\nStep 1: Divide the second equation by $3$: $5x + 2y = 14$, identical to the first. The system is one line, so every point on $5x + 2y = 14$ is a solution.\nStep 2: Parametrize by setting $x = r$: $5r + 2y = 14 \\Rightarrow y = \\dfrac{14 - 5r}{2} = -\\dfrac{5r}{2} + 7$.\nStep 3: Verify choice A: $5r + 2\\left(-\\dfrac{5r}{2} + 7\\right) = 5r - 5r + 14 = 14$ for all $r$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: sign-flips the slope; $5r + 2\\left(\\dfrac{5r}{2} + 7\\right) = 10r + 14$, which is not $14$ for all $r$.\n* Choice C: uses the coefficients from solving for $x$; $5r + 2\\left(-\\dfrac{2r}{5} + \\dfrac{14}{5}\\right) = \\dfrac{21r}{5} + \\dfrac{28}{5} \\neq 14$.\n* Choice D: swaps the coordinates; $5\\left(-\\dfrac{5r}{2} + 7\\right) + 2r = -\\dfrac{21r}{2} + 35$, which equals $14$ only at one value of $r$.\n\n**Test Day Takeaway:** When one equation is a constant multiple of the other, the system is a single line. Set one coordinate to $r$, solve for the other, and confirm the point satisfies the equation for ALL $r$.",
  skills: ["systems-of-equations", "infinitely-many-solutions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 4x + c$, where $c$ is a constant, is tangent to the parabola $y = x^2 - 2x + 14$ at exactly one point. What is the value of $c$?",
  choices: [
    // distractor: sign slip — solves 4c = -20 instead of 4c = 20
    { id: "A", text: "$-5$" },
    { id: "B", text: "$5$" },
    // distractor: reads the parabola's constant term 14 as the answer
    { id: "C", text: "$14$" },
    // distractor: sign error in the discriminant — uses 36 + 4(14 - c) = 0
    { id: "D", text: "$23$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Tangent means one shared point, so equating gives a quadratic with discriminant $0$. $x^2 - 2x + 14 = 4x + c \\Rightarrow x^2 - 6x + (14 - c) = 0$, and $(-6)^2 - 4(14 - c) = 0 \\Rightarrow 36 - 56 + 4c = 0 \\Rightarrow c = 5$.\n\n**The Full Solution:**\nStep 1: A line tangent to a parabola meets it exactly once. Set the expressions equal: $x^2 - 2x + 14 = 4x + c$.\nStep 2: Collect into standard form: $x^2 - 6x + (14 - c) = 0$.\nStep 3: One solution requires discriminant $= 0$: $(-6)^2 - 4(1)(14 - c) = 0 \\Rightarrow 36 - 56 + 4c = 0 \\Rightarrow 4c = 20 \\Rightarrow c = 5$.\nStep 4: Check: with $c = 5$, the quadratic is $x^2 - 6x + 9 = (x - 3)^2 = 0$, a double root at $x = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): a sign slip solving $4c = -20$.\n* Choice C ($14$): reads the parabola's constant term straight off without using the discriminant.\n* Choice D ($23$): mishandles a sign, writing $36 + 4(14 - c) = 0$ to get $4c = 92$.\n\n**Test Day Takeaway:** \"Tangent\" or \"exactly one intersection\" for a line and a parabola means set them equal, collect into one quadratic, and set the discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "What is the solution to the equation $\\sqrt{2x + 15} = x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Square both sides: $2x + 15 = x^2 \\Rightarrow x^2 - 2x - 15 = 0 \\Rightarrow (x - 5)(x + 3) = 0$. The candidates are $x = 5$ and $x = -3$, but a square root is never negative, so $x = 5$.\n\n**The Full Solution:**\nStep 1: Square both sides to clear the radical: $(\\sqrt{2x + 15})^2 = x^2 \\Rightarrow 2x + 15 = x^2$.\nStep 2: Rearrange and factor: $x^2 - 2x - 15 = 0 \\Rightarrow (x - 5)(x + 3) = 0$, so $x = 5$ or $x = -3$.\nStep 3: Check each in the original equation, since squaring can create extraneous roots.\n* $x = 5$: $\\sqrt{2(5) + 15} = \\sqrt{25} = 5$. $\\checkmark$\n* $x = -3$: $\\sqrt{2(-3) + 15} = \\sqrt{9} = 3 \\neq -3$. Extraneous.\nStep 4: The only valid solution is $x = 5$.\n\n**Common Mistakes:** Reporting $x = -3$ without checking it back, since squaring manufactures false roots; forgetting that the principal square root forces the right side $x$ to be $\\geq 0$.\n\n**Test Day Takeaway:** After squaring a radical equation, substitute every candidate back into the original and discard any root that makes a square root equal a negative value.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x - 7)^2 + (y + 2)^2 = 25$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on this circle. Which of the following could be the value of $a$?",
  choices: [
    // distractor: uses the y-coordinate of the center as an x-value
    { id: "A", text: "$-2$" },
    // distractor: just below the minimum x-value 2, a boundary miss
    { id: "B", text: "$1$" },
    { id: "C", text: "$3$" },
    // distractor: just past the maximum x-value 12
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The circle has center $(7, -2)$ and radius $\\sqrt{25} = 5$. Its $x$-coordinates span $[7 - 5,\\ 7 + 5] = [2, 12]$. Only $3$ falls in that interval, so choice C works.\n\n**The Full Solution:**\nStep 1: Compare to standard form $(x - h)^2 + (y - k)^2 = r^2$: here $h = 7$, $k = -2$, $r^2 = 25$, so $r = 5$.\nStep 2: The horizontal extent reaches $5$ units left and right of $x = 7$: from $7 - 5 = 2$ to $7 + 5 = 12$. Every point on the circle has $x$ in $[2, 12]$.\nStep 3: Test the choices: $3$ lies in $[2, 12]$; $-2$, $1$, and $13$ do not. Choice C is the only possible value.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): grabs the center's $y$-coordinate as an $x$-value.\n* Choice B ($1$): sits just past the left edge $2$ — a slip on $7 - 5$.\n* Choice D ($13$): sits just past the right edge $12$ — a slip on $7 + 5$.\n\n**Test Day Takeaway:** A circle centered at $(h, k)$ with radius $r$ has $x$-values in $[h - r,\\ h + r]$. Read off the center and radius, then test each choice against the interval.",
  skills: ["circle-equation", "center-radius"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$3x^2 - 8x - 2 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{8 - \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "88",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $88$.**\n\n**The Fast Way (~30s):** With $a = 3$, $b = -8$, $c = -2$, the quadratic formula gives $x = \\dfrac{8 \\pm \\sqrt{(-8)^2 - 4(3)(-2)}}{2(3)} = \\dfrac{8 \\pm \\sqrt{88}}{6}$. Matching $\\dfrac{8 - \\sqrt{k}}{6}$ gives $k = 88$.\n\n**The Full Solution:**\nStep 1: The quadratic formula for $ax^2 + bx + c = 0$ is $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\nStep 2: Identify $a = 3$, $b = -8$, $c = -2$, so $-b = 8$ and $2a = 6$ — matching the given form's numerator and denominator.\nStep 3: Compute the discriminant: $b^2 - 4ac = (-8)^2 - 4(3)(-2) = 64 + 24 = 88$.\nStep 4: So $x = \\dfrac{8 \\pm \\sqrt{88}}{6}$, and the given form $\\dfrac{8 - \\sqrt{k}}{6}$ matches with $k = 88$.\n\n**Common Mistakes:** Treating $c = -2$ as $+2$ and getting $64 - 24 = 40$; using $b = 8$ instead of $-8$ when reading signs (harmless here since $b$ is squared, but fatal in the numerator).\n\n**Test Day Takeaway:** When a root is written as $\\dfrac{-b \\pm \\sqrt{k}}{2a}$, the constant $k$ is just the discriminant $b^2 - 4ac$. Pin down $a$, $b$, $c$ with their signs first.",
  skills: ["quadratic-formula", "discriminant"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a community theater, balcony tickets cost $\\$8$ each and floor tickets cost $\\$14$ each. Kenji sells $25$ of these tickets for a total of $\\$266$. How many floor tickets does Kenji sell?",
  choices: [
    { id: "A", text: "$11$" },
    // distractor: divides the total by the price of one of each ticket, 266/22
    { id: "B", text: "$12$" },
    // distractor: solves for the balcony tickets instead of the floor tickets
    { id: "C", text: "$14$" },
    // distractor: divides the total by the floor price, 266/14, ignoring the count
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $f$ be the floor tickets; then balcony $= 25 - f$. Cost: $8(25 - f) + 14f = 266 \\Rightarrow 200 + 6f = 266 \\Rightarrow f = 11$.\n\n**The Full Solution:**\nStep 1: Let $b$ be balcony and $f$ be floor tickets. Count: $b + f = 25$. Cost: $8b + 14f = 266$.\nStep 2: Substitute $b = 25 - f$ into the cost equation: $8(25 - f) + 14f = 266$.\nStep 3: Simplify: $200 - 8f + 14f = 266 \\Rightarrow 200 + 6f = 266 \\Rightarrow 6f = 66 \\Rightarrow f = 11$.\nStep 4: Then $b = 25 - 11 = 14$. Check: $8(14) + 14(11) = 112 + 154 = 266$ and $14 + 11 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): divides $\\$266$ by $\\$22$, the price of one balcony plus one floor ticket.\n* Choice C ($14$): the number of BALCONY tickets, not floor tickets.\n* Choice D ($19$): divides $\\$266$ by the floor price $\\$14$ and ignores the count constraint.\n\n**Test Day Takeaway:** With two unknowns and two facts (a count and a total), substitute one equation into the other — then re-read which variable the question asks for before bubbling.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A maintenance crew inspected $120$ streetlights in three districts and classified each as working or as needing repair. The table summarizes the results. If one of the streetlights found working is selected at random, what is the probability that it is in the East district or the South district?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Working", "Needs repair", "Total"],
      rows: [
        ["North", "28", "14", "42"],
        ["East", "30", "12", "42"],
        ["South", "22", "14", "36"],
        ["Total", "80", "40", "120"]
      ]
    }
  },
  choices: [
    // distractor: uses the North working count 28 over 80
    { id: "A", text: "$\\dfrac{7}{20}$" },
    // distractor: counts only the East district, 30/80
    { id: "B", text: "$\\dfrac{3}{8}$" },
    // distractor: uses the grand total 120 as the denominator, 52/120
    { id: "C", text: "$\\dfrac{13}{30}$" },
    { id: "D", text: "$\\dfrac{13}{20}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** \"Found working\" restricts to the Working column, total $80$. East or South working lights: $30 + 22 = 52$. Probability $= \\dfrac{52}{80} = \\dfrac{13}{20}$.\n\n**The Full Solution:**\nStep 1: The condition \"one of the streetlights found working\" restricts the sample space to the Working column, which holds $80$ lights.\nStep 2: Favorable lights are working AND in East or South: $30 + 22 = 52$.\nStep 3: Probability $= \\dfrac{52}{80} = \\dfrac{13}{20}$, choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{20}$): uses the North working count, $\\frac{28}{80}$ — the complement of the answer.\n* Choice B ($\\frac{3}{8}$): counts only the East district, $\\frac{30}{80}$, stopping one district short.\n* Choice C ($\\frac{13}{30}$): uses the grand total $120$ as the denominator, $\\frac{52}{120}$.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. The numerator counts favorable cases in that subset; the denominator is the subset's total, never the grand total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table gives the wind speed, in kilometers per hour, recorded at a mountain weather station at each of six times during one day. What is the range, in kilometers per hour, of the recorded wind speeds?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Time", "Wind speed (km/h)"],
      rows: [
        ["4 a.m.", "21"],
        ["8 a.m.", "14"],
        ["noon", "9"],
        ["4 p.m.", "26"],
        ["8 p.m.", "17"],
        ["midnight", "12"]
      ]
    }
  },
  choices: [
    // distractor: reports the minimum value only
    { id: "A", text: "$9$" },
    // distractor: computes the mean (99/6) instead of the range
    { id: "B", text: "$16.5$" },
    { id: "C", text: "$17$" },
    // distractor: reports the maximum value only
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 26 - 9 = 17$.\n\n**The Full Solution:**\nStep 1: The range is the difference between the largest and smallest values in the data set.\nStep 2: From the table, the largest recorded speed is $26$ and the smallest is $9$.\nStep 3: Range $= 26 - 9 = 17$ kilometers per hour.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the minimum without subtracting it from the maximum.\n* Choice B ($16.5$): computes the mean, $\\frac{99}{6}$, instead of the range.\n* Choice D ($26$): reports the maximum alone.\n\n**Test Day Takeaway:** Range is a single subtraction — largest minus smallest. Scan the whole data set for the extremes before subtracting.",
  skills: ["statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$M(t) = 480(1.06)^{\\frac{3}{2}t}$$\n\nThe function $M$ models the number of members of an aquatic center $t$ years after it opened. According to the model, the number of members is predicted to increase by $6\\%$ every $m$ months. What is the value of $m$?",
  choices: [
    // distractor: inverts the exponent factor, using 1/3 of a year
    { id: "A", text: "$4$" },
    { id: "B", text: "$8$" },
    // distractor: assumes the 6% increase happens once per year, ignoring the 3/2 factor
    { id: "C", text: "$12$" },
    // distractor: multiplies 3/2 by 12 instead of using 2/3 of a year
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The factor $1.06$ multiplies in once each time the exponent $\\frac{3}{2}t$ increases by $1$, i.e. when $\\frac{3}{2}t = 1 \\Rightarrow t = \\frac{2}{3}$ year. Convert: $\\frac{2}{3} \\times 12 = 8$ months.\n\n**The Full Solution:**\nStep 1: The base $1.06$ is a $6\\%$ increase, applied once every time the exponent grows by exactly $1$.\nStep 2: Set the exponent change to $1$: $\\frac{3}{2}t = 1 \\Rightarrow t = \\frac{2}{3}$ year.\nStep 3: Convert years to months: $\\frac{2}{3} \\times 12 = 8$ months. So membership grows $6\\%$ every $8$ months, giving $m = 8$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): inverts the factor, using $\\frac{1}{3}$ of a year instead of $\\frac{2}{3}$.\n* Choice C ($12$): assumes the $6\\%$ increase happens once per year, ignoring the $\\frac{3}{2}$ in the exponent.\n* Choice D ($18$): multiplies $\\frac{3}{2} \\times 12$ instead of $\\frac{2}{3} \\times 12$.\n\n**Test Day Takeaway:** A base $b$ in $a \\cdot b^{ct}$ multiplies in once each time $ct$ increases by $1$ — every $\\frac{1}{c}$ units of $t$. Solve $ct = 1$, then convert units.",
  skills: ["exponential-functions", "unit-conversion"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $25^{x - 1} = 125^{x - 4}$, what is the value of $x$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** Rewrite both sides over base $5$: $25 = 5^2$ and $125 = 5^3$, so $5^{2(x-1)} = 5^{3(x-4)}$. Equal bases force equal exponents: $2x - 2 = 3x - 12 \\Rightarrow x = 10$.\n\n**The Full Solution:**\nStep 1: For $b^M = b^N$ with the same positive base $b \\neq 1$, the exponents must match: $M = N$. So convert both sides to a common base.\nStep 2: $25^{x-1} = (5^2)^{x-1} = 5^{2x-2}$ and $125^{x-4} = (5^3)^{x-4} = 5^{3x-12}$.\nStep 3: Set the exponents equal: $2x - 2 = 3x - 12$, so $10 = x$.\nVerify: $25^{9} = 5^{18}$ and $125^{6} = 5^{18}$. $\\checkmark$\n\n**Common Mistakes:** Adding exponents instead of multiplying when applying $(b^m)^n = b^{mn}$ (e.g. writing $2(x-1)$ as $2x - 1$); dropping the sign on $3(-4)$ and getting $3x + 12$.\n\n**Test Day Takeaway:** When both sides of an exponential equation are powers of a common base, rewrite them in that base and set the exponents equal. Use $(b^m)^n = b^{mn}$ — multiply the exponents, never add.",
  skills: ["exponent-rules", "solving-equations", "exponential-functions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The regular price of a day pass at an aquatic center is $\\$16$. For a holiday, the price is first increased by $50\\%$, and the increased price is then decreased by $30\\%$. What is the final price of the day pass?",
  choices: [
    // distractor: applies only the 30% decrease to the original price
    { id: "A", text: "$\\$11.20$" },
    // distractor: assumes the two changes cancel back to the original price
    { id: "B", text: "$\\$16.00$" },
    { id: "C", text: "$\\$16.80$" },
    // distractor: nets the percents as +20% and applies that to the original
    { id: "D", text: "$\\$19.20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Chain the multipliers: $16 \\times 1.5 \\times 0.7 = 16 \\times 1.05 = \\$16.80$, choice C.\n\n**The Full Solution:**\nStep 1: A $50\\%$ increase multiplies by $1.5$: $16 \\times 1.5 = 24$.\nStep 2: A $30\\%$ decrease multiplies the NEW price by $0.7$: $24 \\times 0.7 = 16.80$.\nStep 3: The final price is $\\$16.80$ — a net change of $\\times 1.05$, i.e. $5\\%$ above the original, because $1.5 \\times 0.7 = 1.05$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$11.20$): applies only the $30\\%$ decrease to the original $\\$16$.\n* Choice B ($\\$16.00$): assumes a $50\\%$ up then $30\\%$ down cancel out — they don't, because they act on different bases.\n* Choice D ($\\$19.20$): nets the percents as $50\\% - 30\\% = 20\\%$ and adds $20\\%$ to $\\$16$.\n\n**Test Day Takeaway:** Apply successive percent changes as multipliers in order ($1.5$ then $0.7$), never by adding or subtracting the percentages — each change acts on the most recent amount.",
  skills: ["percents", "word-problems"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, for sample P, along with a line of best fit. Sample R is created by multiplying the $y$-coordinate of every data point in sample P by $4$. Which of the following could be an equation of the line of best fit for sample R?",
  diagram: { type: "scatterplot", params: {
    points: [[2,15],[4,19],[6,20],[8,24],[10,28],[12,29],[14,33],[16,37],[18,38]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 50,
    xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 1.5, intercept: 12 },
    xLabel: "x", yLabel: "y",
  } },
  choices: [
    // distractor: scales neither — repeats the original line of best fit
    { id: "A", text: "$y = 12 + 1.5x$" },
    // distractor: scales only the slope, leaves the intercept unchanged
    { id: "B", text: "$y = 12 + 6x$" },
    // distractor: scales only the intercept, leaves the slope unchanged
    { id: "C", text: "$y = 48 + 1.5x$" },
    { id: "D", text: "$y = 48 + 6x$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Multiplying every $y$-value by $4$ scales both the slope and the intercept by $4$. From $y = 12 + 1.5x$: new line $= 12(4) + 1.5(4)x = 48 + 6x$, choice D.\n\n**The Full Solution:**\nStep 1: If the original best-fit line is $y = b + mx$ and every $y$-value is multiplied by $c$, every predicted value scales the same way, so the new best-fit line is $y = cb + cmx$. Both intercept and slope scale by $c$.\nStep 2: Sample P has best-fit line $y = 12 + 1.5x$ (intercept $\\approx 12$, slope $\\approx 1.5$).\nStep 3: With $c = 4$: new intercept $= 12 \\times 4 = 48$, new slope $= 1.5 \\times 4 = 6$, giving $y = 48 + 6x$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 12 + 1.5x$): repeats the original line without scaling anything.\n* Choice B ($y = 12 + 6x$): scales the slope but forgets the intercept.\n* Choice C ($y = 48 + 1.5x$): scales the intercept but leaves the slope unscaled.\n\n**Test Day Takeaway:** Multiplying every $y$-value by $c$ multiplies the whole prediction equation by $c$ — slope AND intercept, not just one coefficient.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "During a curtain call at an outdoor amphitheater, a confetti launcher fires a foam cap upward. The height of the cap, in meters above the stage, is modeled by $h(t) = -5t^2 + 20t + 2$, where $t$ is the time in seconds after launch. What is the maximum height, in meters, reached by the cap?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~30s):** A downward parabola peaks at $t = -\\dfrac{b}{2a} = -\\dfrac{20}{2(-5)} = 2$. Then $h(2) = -5(4) + 20(2) + 2 = -20 + 40 + 2 = 22$.\n\n**The Full Solution:**\nStep 1: The coefficient of $t^2$ is $-5 < 0$, so the parabola opens downward and its vertex is the maximum.\nStep 2: The vertex sits at $t = -\\dfrac{b}{2a} = -\\dfrac{20}{2(-5)} = \\dfrac{-20}{-10} = 2$ seconds.\nStep 3: Substitute $t = 2$: $h(2) = -5(2)^2 + 20(2) + 2 = -20 + 40 + 2 = 22$ meters.\n\n**Common Mistakes:** Reporting $t = 2$ (the time of the maximum) instead of the height $22$; dropping a sign in $-\\dfrac{b}{2a}$ and evaluating at $t = -2$; reporting the launch height $2$ (the value at $t = 0$).\n\n**Test Day Takeaway:** For $f(t) = at^2 + bt + c$ with $a < 0$, the maximum value is $f\\!\\left(-\\dfrac{b}{2a}\\right)$. Find the vertex's $t$-coordinate first, then substitute to get the height.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation $x^2 - 18x + c = 0$, where $c$ is a constant, the two solutions differ by $4$. What is the value of $c$?",
  choices: [
    // distractor: places the roots a full 4 on each side of the midpoint (13 and 5)
    { id: "A", text: "$65$" },
    // distractor: multiplies the sum 18 by the difference 4
    { id: "B", text: "$72$" },
    { id: "C", text: "$77$" },
    // distractor: assumes the two solutions are equal (both 9), product 81
    { id: "D", text: "$81$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** By Vieta's, the roots sum to $18$; their difference is $4$, so they are $\\dfrac{18+4}{2} = 11$ and $\\dfrac{18-4}{2} = 7$. Their product is $c = 11 \\times 7 = 77$, choice C.\n\n**The Full Solution:**\nStep 1: For $x^2 - 18x + c = 0$, Vieta's formulas give sum of roots $= 18$ and product of roots $= c$.\nStep 2: Let the roots be $r$ and $s$ with $r + s = 18$ and $r - s = 4$. Adding: $2r = 22 \\Rightarrow r = 11$, so $s = 7$.\nStep 3: Product: $c = rs = 11 \\times 7 = 77$. Check: $x^2 - 18x + 77 = (x - 11)(x - 7)$, roots $11$ and $7$, difference $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($65$): places the roots a full $4$ on EACH side of the midpoint $9$, using $13$ and $5$ (difference $8$).\n* Choice B ($72$): multiplies the sum by the difference, $18 \\times 4$, instead of finding the roots.\n* Choice D ($81$): ignores the difference and sets both roots to $9$, giving product $81$.\n\n**Test Day Takeaway:** For $x^2 - (\\text{sum})x + (\\text{product}) = 0$, split the sum by HALF the difference on each side of the midpoint, then multiply the two roots.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A soil laboratory must process at least $150$ samples this week. The laboratory has already processed $46$ samples and plans to process $s$ samples on each of the $4$ remaining workdays. Which inequality represents this situation?",
  choices: [
    { id: "A", text: "$46 + 4s \\geq 150$" },
    // distractor: reverses the inequality direction, capping instead of requiring
    { id: "B", text: "$46 + 4s \\leq 150$" },
    // distractor: forgets the 46 samples already processed
    { id: "C", text: "$4s \\geq 150$" },
    // distractor: swaps which quantity is multiplied by the 4 days
    { id: "D", text: "$4 + 46s \\geq 150$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Weekly total $= 46$ already done $+\\ 4s$ over the $4$ remaining days. \"At least $150$\" means $\\geq 150$: $46 + 4s \\geq 150$, choice A.\n\n**The Full Solution:**\nStep 1: The week's total is what is already processed plus what is planned: $46 + 4s$.\nStep 2: \"At least $150$ samples\" means the total must be greater than or equal to $150$.\nStep 3: Combine: $46 + 4s \\geq 150$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($46 + 4s \\leq 150$): flips the sign, turning a minimum requirement into a cap.\n* Choice C ($4s \\geq 150$): leaves out the $46$ samples already processed.\n* Choice D ($4 + 46s \\geq 150$): multiplies $46$ by $s$ instead of multiplying $s$ by the $4$ days.\n\n**Test Day Takeaway:** Translate \"at least\" as $\\geq$ and \"at most\" as $\\leq$. Build the total expression first (completed amount $+$ rate $\\times$ count), then attach the sign.",
  skills: ["inequalities", "word-problems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a random survey of $630$ riders of a harbor ferry, $356$ preferred a proposed schedule and $274$ preferred the current schedule. If all $7{,}560$ riders of the ferry vote with the same preferences, by how many votes would the proposed schedule be expected to win?",
  choices: [
    // distractor: reports the unscaled survey margin without scaling up
    { id: "A", text: "$82$" },
    { id: "B", text: "$984$" },
    // distractor: scales only the losing count (274 * 12) and calls it the margin
    { id: "C", text: "$3{,}288$" },
    // distractor: scales only the winning count (356 * 12) and calls it the margin
    { id: "D", text: "$4{,}272$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportional Scaling**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The scale factor is $\\dfrac{7560}{630} = 12$. Survey margin $= 356 - 274 = 82$. Expected margin $= 12 \\times 82 = 984$, choice B.\n\n**The Full Solution:**\nStep 1: The full vote scales up from the survey by $\\dfrac{7560}{630} = 12$.\nStep 2: Find the survey margin first: $356 - 274 = 82$ votes.\nStep 3: Scale the margin by $12$: $82 \\times 12 = 984$ votes. (Equivalently, proposed $\\to 356 \\times 12 = 4272$ and current $\\to 274 \\times 12 = 3288$; the difference is $4272 - 3288 = 984$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($82$): reports the survey margin without scaling up to the full ridership.\n* Choice C ($3{,}288$): scales only the losing count ($274 \\times 12$) and treats it as the margin.\n* Choice D ($4{,}272$): scales only the winning count ($356 \\times 12$) and treats it as the margin.\n\n**Test Day Takeaway:** When a sample scales up to a full population, multiply the margin (winner $-$ loser) by the scale factor, or scale each count and subtract — never report a single scaled count as the margin.",
  skills: ["proportions", "statistics"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(2, 18)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$12$" },
    // distractor: boundary value, corresponds to a = 0 (a line, not a parabola)
    { id: "B", text: "$18$" },
    // distractor: assumes a > 0 (opens upward), giving values above 18
    { id: "C", text: "$20$" },
    // distractor: also assumes a > 0; treats the vertex y-value as a floor
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The vertex $(2, 18)$ is above the $x$-axis yet the parabola crosses the axis twice, so it opens downward: $a < 0$. In vertex form $y = a(x - 2)^2 + 18$, the sum $a + b + c$ equals $y(1) = a(1 - 2)^2 + 18 = a + 18$. Since $a < 0$, $a + b + c < 18$. Only $12$ is below $18$, choice A.\n\n**The Full Solution:**\nStep 1: A parabola whose vertex sits above the $x$-axis and that still meets the axis at two points must open downward, so $a < 0$.\nStep 2: Write vertex form: $y = a(x - 2)^2 + 18$. Note that $a + b + c = y(1)$, since substituting $x = 1$ into $ax^2 + bx + c$ gives exactly $a + b + c$.\nStep 3: $y(1) = a(1 - 2)^2 + 18 = a + 18$. Because $a < 0$, $a + b + c < 18$.\nStep 4: Among the choices, only $12 < 18$. For example, $a = -6$ gives $y = -6(x - 2)^2 + 18 = -6x^2 + 24x - 6$, so $a + b + c = -6 + 24 - 6 = 12$, and that parabola still crosses the $x$-axis twice. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): the boundary $a = 0$, which is a line, not a parabola; the value must be strictly less than $18$.\n* Choice C ($20$): requires $a > 0$, contradicting a maximum vertex above the axis with two real roots.\n* Choice D ($24$): also requires $a > 0$; treats the vertex $y$-value as a lower bound instead of an upper one.\n\n**Test Day Takeaway:** $a + b + c$ is just the function's value at $x = 1$. Combine that with the sign of $a$ (read from how the parabola must open) to bound the answer.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest5;
