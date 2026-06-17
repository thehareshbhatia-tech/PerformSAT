// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// 2026-06 M2 flow diversification. New wavy difficulty flow (unique to this
// test): E M M E M H H M H H M H E H H M H H H M H H — easies at 1/4/13 (13 is
// the mid-module breather), mediums at 2/3/5/8/11/16/20, hards everywhere else
// with a band-7 ceiling. Six transformed difficult-PDF "pool" items infused:
// a parametric dependent-system point (Q6), a circle-domain value (Q9), a
// quadratic-formula discriminant-form fill-in (Q10), an exponential period
// years-to-months conversion (Q14), a rearranged-linear-model constant reading
// (Q3), and a scatterplot best-fit-line scaling item (Q17). Cloned archetypes
// retired (classify-function-type, y-intercept interpretation, right-triangle
// trig, b^(t/k) percent, no-solution/infinitely-many find-k, discriminant
// greatest-integer, residual, margin-of-error). Scenario palette: solar-panel
// arrays, marathon pacing, aquaponics, museum acoustics, paper recycling,
// night-market stalls. M1 de-cloned: easy-block reordered + new opener
// coefficient family; Q11 cylinder and Q21 Pythagorean re-carried.

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
  question: "At a night-market stall, the spices in a blend are mixed in a ratio of $4$ grams of cinnamon to $7$ grams of cardamom. If a batch of the blend weighs $66$ grams, how many grams of cinnamon does it contain?",
  choices: [
    // distractor: picks the ratio number (4) directly
    { id: "A", text: "$4$" },
    { id: "B", text: "$24$" },
    // distractor: uses 4/7 of total instead of 4/11 (gives ~37.7)
    { id: "C", text: "$37.7$" },
    // distractor: solves for cardamom instead of cinnamon (7/11 of 66 = 42)
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cinnamon is $\\frac{4}{4+7}=\\frac{4}{11}$ of the blend, so cinnamon $=\\frac{4}{11}\\cdot 66=24$ grams.\n\n**The Full Solution:**\nStep 1: Write the parts as $4k$ grams of cinnamon and $7k$ grams of cardamom, keeping the $4:7$ ratio.\nStep 2: The total is $4k+7k=11k=66$, so $k=6$.\nStep 3: Cinnamon $=4k=4\\cdot 6=24$ grams. Check: cardamom $=7\\cdot 6=42$, and $24+42=66$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the raw ratio part instead of solving the proportion.\n* Choice C ($37.7$): uses $\\frac{4}{7}$ of the total instead of $\\frac{4}{11}$.\n* Choice D ($42$): solves for cardamom, $\\frac{7}{11}\\cdot 66=42$, instead of cinnamon.\n\n**Test Day Takeaway:** When a ratio is paired with a known total, divide by the SUM of the parts ($4+7=11$) to get one share, then scale.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A paper-recycling service charges customers using the rule $C(n) = 18n + 12$, where $C$ is the cost in dollars to process $n$ bins of paper and the $\\$12$ is a one-time pickup fee. Which of the following best interprets the value $18$ in this context?",
  choices: [
    // distractor: confuses 18 with pickup fee instead of per-bin rate
    { id: "A", text: "The one-time pickup fee, in dollars" },
    { id: "B", text: "The cost to process one bin of paper, in dollars" },
    // distractor: applies the inverse — uses 18 as a count instead of a rate
    { id: "C", text: "The number of bins processed" },
    // distractor: off-by-one — confuses 18 with the total cost when n = 0
    { id: "D", text: "The cost when no bins are processed, in dollars" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $C(n)=18n+12$, the coefficient of $n$ is the per-bin rate, so each bin costs $\\$18$.\n\n**The Full Solution:**\nStep 1: The rule has the linear form $C(n)=mn+b$, with slope $m=18$ and intercept $b=12$.\nStep 2: The slope is the change in cost per added bin, so processing one more bin adds $\\$18$ to the total.\n\n**Why the wrong answers are tempting:**\n* Choice A: the one-time pickup fee is the constant $12$, not the coefficient $18$.\n* Choice C: $18$ is a rate (dollars per bin), not a count of bins.\n* Choice D: the cost with no bins is $C(0)=12$, not $18$.\n\n**Test Day Takeaway:** In $y=mn+b$, the coefficient of the variable is the rate of change; the constant is the fixed starting amount.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $f(x) = 3x - 10$, what is the value of $f(7) - 4$?",
  choices: [
    // distractor: stops one step early — reports f(7) without subtracting 4
    { id: "A", text: "$11$" },
    { id: "B", text: "$7$" },
    // distractor: applies inverse operation — adds 4 instead of subtracting
    { id: "C", text: "$15$" },
    // distractor: subtracts 4 inside the function: f(7 - 4) = f(3) = -1
    { id: "D", text: "$-1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(7)=3(7)-10=11$, then $f(7)-4=11-4=7$.\n\n**The Full Solution:**\nStep 1: Evaluate the function at $x=7$: $f(7)=3(7)-10=21-10=11$.\nStep 2: The question wants $f(7)-4$, so subtract from the output: $11-4=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): reports $f(7)$ without subtracting $4$.\n* Choice C ($15$): adds $4$ instead of subtracting.\n* Choice D ($-1$): subtracts inside the function, computing $f(7-4)=f(3)=-1$.\n\n**Test Day Takeaway:** $f(a)-4$ means evaluate $f$ first, THEN subtract from the result — the $-4$ is outside the function.",
  skills: ["function-interpretation"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In a triangle, two of the interior angles measure $42^{\\circ}$ and $73^{\\circ}$. What is the measure, in degrees, of the third angle?",
  choices: [
    // distractor: subtracts only one angle from 180 (180 - 73 = 107)
    { id: "A", text: "$107$" },
    // distractor: adds the two angles (42 + 73 = 115)
    { id: "B", text: "$115$" },
    { id: "C", text: "$65$" },
    // distractor: subtracts from 360 instead of 180
    { id: "D", text: "$245$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The three angles sum to $180^\\circ$, so the third is $180-42-73=65$.\n\n**The Full Solution:**\nStep 1: The interior angles of any triangle add to $180^\\circ$.\nStep 2: Subtract the two known angles: $180^\\circ-42^\\circ-73^\\circ=180^\\circ-115^\\circ=65^\\circ$. Check: $42+73+65=180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($107$): subtracts only one angle, $180-73=107$.\n* Choice B ($115$): adds the two given angles instead of subtracting them from $180$.\n* Choice D ($245$): uses $360^\\circ$ (a quadrilateral) instead of $180^\\circ$.\n\n**Test Day Takeaway:** A triangle's interior angles always total $180^\\circ$; subtract the known angles from $180$ to find the missing one.",
  skills: ["triangles", "angles"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $7x - 4 = 31$, what is the value of $7x + 6$?",
  choices: [
    // distractor: stops one step early — reports x = 5 instead of 7x + 6
    { id: "A", text: "$5$" },
    { id: "B", text: "$41$" },
    // distractor: applies the inverse operation — subtracts 10 instead of adding
    { id: "C", text: "$21$" },
    // distractor: wrong base — gives 7x = 35 then forgets to add 6
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $7x+6=(7x-4)+10=31+10=41$ — no need to find $x$.\n\n**The Full Solution:**\nStep 1: Notice the target $7x+6$ shares the $7x$ term with the given $7x-4=31$.\nStep 2: Since $7x+6$ is $10$ more than $7x-4$, it equals $31+10=41$. (Or solve $7x=35$, $x=5$, then $7(5)+6=41$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports $x=5$ instead of evaluating $7x+6$.\n* Choice C ($21$): subtracts $10$ instead of adding, $31-10=21$.\n* Choice D ($35$): finds $7x=35$ but forgets to add the $6$.\n\n**Test Day Takeaway:** When the question asks for an expression rather than $x$ itself, look for a constant shift between it and the given equation before solving for $x$.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A company's revenue $R$, in thousands of dollars, is modeled by $R(t) = 150(1.08)^t$, where $t$ is the number of years since $2020$. Which of the following is the best interpretation of the value $1.08$?",
  choices: [
    // distractor: confuses exponential with linear growth (constant amount)
    { id: "A", text: "The revenue increases by $\\$1.08$ thousand each year." },
    { id: "B", text: "The revenue increases by $8\\%$ each year." },
    // distractor: applies the inverse — interprets 1.08 as 108%
    { id: "C", text: "The revenue increases by $108\\%$ each year." },
    // distractor: wrong base — misinterprets 1.08 as an output value
    { id: "D", text: "The revenue is $\\$1.08$ thousand in year $t$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $a\\cdot b^t$, the base $b=1.08=1+0.08$, so the yearly growth rate is $0.08=8\\%$.\n\n**The Full Solution:**\nStep 1: The model $R(t)=150(1.08)^t$ has the form $P_0(1+r)^t$.\nStep 2: Match the base: $1+r=1.08$, so $r=0.08=8\\%$. Each year the revenue grows by $8\\%$ of the prior year's value.\n\n**Why the wrong answers are tempting:**\n* Choice A: $\\$1.08$ thousand fixed yearly is linear growth; $1.08$ is a multiplier, not an addition.\n* Choice C: $108\\%$ treats the whole base $1.08$ as the rate instead of subtracting $1$.\n* Choice D: $1.08$ is the base, not an output value of $R$.\n\n**Test Day Takeaway:** In $P_0(1+r)^t$, subtract $1$ from the base to get the growth rate $r$ — the base itself is not the percent change.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bag contains $5$ red marbles, $6$ blue marbles, and $9$ green marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are blue?",
  choices: [
    // distractor: uses replacement — (6/20)^2 = 36/400 = 9/100
    { id: "A", text: "$\\dfrac{9}{100}$" },
    // distractor: stops at first probability — gives 6/20 = 3/10
    { id: "B", text: "$\\dfrac{3}{10}$" },
    { id: "C", text: "$\\dfrac{3}{38}$" },
    // distractor: off-by-one — uses 6/20 * 6/19 (forgets to remove drawn ball)
    { id: "D", text: "$\\dfrac{18}{190}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $P=\\frac{6}{20}\\times\\frac{5}{19}=\\frac{30}{380}=\\frac{3}{38}$.\n\n**The Full Solution:**\nStep 1: Total marbles $=5+6+9=20$, so $P(\\text{1st blue})=\\frac{6}{20}$.\nStep 2: After removing one blue, $5$ blue remain out of $19$, so $P(\\text{2nd blue})=\\frac{5}{19}$.\nStep 3: Multiply: $\\frac{6}{20}\\times\\frac{5}{19}=\\frac{30}{380}=\\frac{3}{38}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{100}$): assumes replacement, using $\\left(\\frac{6}{20}\\right)^2$ then simplifying.\n* Choice B ($\\frac{3}{10}$): stops at $P(\\text{1st blue})=\\frac{6}{20}=\\frac{3}{10}$.\n* Choice D ($\\frac{18}{190}$): keeps the numerator $6$ on the second draw instead of dropping it to $5$.\n\n**Test Day Takeaway:** \"Without replacement\" lowers both the matching numerator and the total denominator by $1$ on the next draw.",
  skills: ["probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $3(2x - 5) - 4(x + 3) = 7$, what is the value of $x$?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~20s):** Distribute: $6x-15-4x-12=7$, combine to $2x-27=7$, so $2x=34$ and $x=17$.\n\n**The Full Solution:**\nStep 1: Distribute both products: $3(2x-5)=6x-15$ and $-4(x+3)=-4x-12$.\nStep 2: Combine like terms: $(6x-4x)+(-15-12)=2x-27$, so $2x-27=7$.\nStep 3: Add $27$: $2x=34$, then divide: $x=17$. Check: $3(29)-4(20)=87-80=7$. $\\checkmark$\n\n**Common Mistakes:** Distributing $-4(x+3)$ as $-4x+12$ instead of $-4x-12$; combining the constants as $-3$ instead of $-15-12=-27$.\n\n**Test Day Takeaway:** Distribute carefully across negative signs, then combine like terms before isolating $x$.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x}{3} + \\dfrac{x}{4} = 14$, what is the value of $x$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** Multiply through by $12$: $4x+3x=168$, so $7x=168$ and $x=24$.\n\n**The Full Solution:**\nStep 1: The denominators $3$ and $4$ have least common denominator $12$. Multiply every term by $12$.\nStep 2: $\\frac{12x}{3}+\\frac{12x}{4}=168$ becomes $4x+3x=168$.\nStep 3: $7x=168$, so $x=24$. Check: $\\frac{24}{3}+\\frac{24}{4}=8+6=14$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the left side by $12$ but forgetting to multiply the right side, leaving $7x=14$; choosing an oversized common denominator that complicates the arithmetic.\n\n**Test Day Takeaway:** Clear fractions in one move by multiplying every term by the least common denominator.",
  skills: ["solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot of a set of data is modeled by the equation $y = 2.4x + 18.5$. According to this model, what is the predicted value of $y$ when $x = 12$?",
  diagram: { type: "scatterplot", params: {
    points: [[1,22],[2,22],[3,28],[4,26],[5,29],[6,34],[7,33],[8,38],[9,40],[10,42],[11,43],[13,52],[14,52]],
    xMin: 0, xMax: 15, yMin: 0, yMax: 60,
    xGridStep: 1, yGridStep: 5, xLabelStep: 3, yLabelStep: 10,
    bestFitLine: { slope: 2.4, intercept: 18.5 },
  } },
  choices: [
    // distractor: stops at 2.4 * 12 = 28.8 — forgets to add the 18.5 intercept
    { id: "A", text: "$28.8$" },
    // distractor: adds only part of the intercept (e.g., 8.5)
    { id: "B", text: "$37.3$" },
    { id: "C", text: "$47.3$" },
    // distractor: rounds 2.4 to 2 and 18.5 to 19 — wrong base
    { id: "D", text: "$43.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y=2.4(12)+18.5=28.8+18.5=47.3$.\n\n**The Full Solution:**\nStep 1: Substitute $x=12$ into the model $y=2.4x+18.5$.\nStep 2: $2.4(12)=28.8$, then add the intercept: $28.8+18.5=47.3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28.8$): computes $2.4\\times 12$ but forgets to add the intercept $18.5$.\n* Choice B ($37.3$): adds only part of the intercept (e.g. $8.5$ instead of $18.5$).\n* Choice D ($43.0$): rounds the model to $y=2x+19$, giving $2(12)+19=43$.\n\n**Test Day Takeaway:** To predict $y$ from $y=mx+b$, multiply by the slope AND add the full intercept — keep the decimals exact.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical aquaponics tank has an interior radius of $6$ feet and an interior height of $8$ feet. The interior volume of the tank, in cubic feet, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "288",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $288$.**\n\n**The Fast Way (~10s):** $V=\\pi r^2 h=\\pi(6)^2(8)=36\\cdot 8\\cdot\\pi=288\\pi$, so $k=288$.\n\n**The Full Solution:**\nStep 1: A right circular cylinder has volume $V=\\pi r^2 h$.\nStep 2: With $r=6$ and $h=8$: $V=\\pi(6)^2(8)=\\pi(36)(8)=288\\pi$ cubic feet.\nStep 3: Since $V=k\\pi$, $k=288$.\n\n**Common Mistakes:** Skipping the square and using $\\pi r h=48\\pi$ (giving $k=48$); using the cone formula $V=\\frac{1}{3}\\pi r^2 h$ (giving $k=96$).\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height — $V=\\pi r^2 h$ is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $|2x - 7| = 13$, what is the sum of all possible values of $x$?",
  choices: [
    // distractor: computes only |10 - 7| = 3 (uses one solution and subtracts)
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    // distractor: stops one step early — uses only the positive solution x = 10
    { id: "C", text: "$10$" },
    // distractor: wrong base — reports the right-hand side 13 as the answer
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Split into $2x-7=13\\Rightarrow x=10$ and $2x-7=-13\\Rightarrow x=-3$; the sum is $10+(-3)=7$.\n\n**The Full Solution:**\nStep 1: $|2x-7|=13$ means $2x-7=13$ or $2x-7=-13$.\nStep 2: Case 1: $2x=20\\Rightarrow x=10$. Case 2: $2x=-6\\Rightarrow x=-3$.\nStep 3: Sum the solutions: $10+(-3)=7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports only the magnitude of $x=-3$, ignoring the $x=10$ root.\n* Choice C ($10$): uses only the positive case and skips $x=-3$.\n* Choice D ($13$): reads off the right-hand side without solving.\n\n**Test Day Takeaway:** $|f(x)|=c$ always splits into two cases; for $|ax+b|=c$ the two roots sum to $-\\frac{2b}{a}$, here $-\\frac{2(-7)}{2}=7$.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a class of $30$ students, $18$ play soccer, $12$ play basketball, and $5$ play both. How many students play neither soccer nor basketball?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Students playing at least one sport: $18 + 12 - 5 = 25$. Neither: $30 - 25 = 5$.\n\n**The Full Solution:**\nStep 1: Count how many play at least one sport with inclusion-exclusion. Adding $18 + 12$ double-counts the $5$ who play both, so subtract once: $18 + 12 - 5 = 25$.\nStep 2: The rest play neither: $30 - 25 = 5$.\n\n**Common Mistakes:** Adding $18 + 12 = 30$ and concluding everyone plays a sport (forgetting the overlap correction); subtracting the $5$ twice and getting $20$.\n\n**Test Day Takeaway:** For \"neither\" problems, find the size of the union $|A| + |B| - |A \\cap B|$ first, then subtract from the total.",
  skills: ["probability", "statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(x) = 2(x - 4)^2 - 18$. What is the minimum value of $h(x)$?",
  choices: [
    { id: "A", text: "$-18$" },
    // distractor: confuses x-coordinate of vertex with the y-value
    { id: "B", text: "$-4$" },
    // distractor: stops one step early — gives the x-coordinate 4 instead of y
    { id: "C", text: "$4$" },
    // distractor: wrong base — evaluates h(0) = 2(16) - 18 = 14 instead of reading the vertex
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In vertex form $a(x-h)^2 + k$ with $a > 0$, the minimum value is $k$. Here $k = -18$, so the answer is $-18$, choice A.\n\n**The Full Solution:**\nStep 1: $h(x) = 2(x - 4)^2 - 18$ is already in vertex form with $a = 2$ and vertex $(4, -18)$.\nStep 2: Since $a = 2 > 0$, the parabola opens upward, so the vertex is the lowest point.\nStep 3: The minimum value is the $y$-coordinate of the vertex: $-18$, attained at $x = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): negates the $x$-coordinate of the vertex instead of reading the minimum value.\n* Choice C ($4$): reports the $x$-coordinate $4$ (where the minimum occurs) rather than the value.\n* Choice D ($14$): evaluates $h(0) = 2(16) - 18 = 14$ instead of using the vertex.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$ with $a > 0$, the minimum value is $k$. Read it straight off — no expanding needed.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A deck contains $10$ red cards numbered $1$ through $10$ and $10$ blue cards numbered $1$ through $10$. One card is drawn at random. What is the probability that the card is red OR has a number greater than $7$?",
  choices: [
    // distractor: only counts P(red) = 10/20 and ignores the OR
    { id: "A", text: "$\\dfrac{1}{2}$" },
    { id: "B", text: "$\\dfrac{13}{20}$" },
    // distractor: applies the inverse — adds without subtracting overlap
    { id: "C", text: "$\\dfrac{4}{5}$" },
    // distractor: off-by-one — simplifies a wrong sum (e.g., 14/20)
    { id: "D", text: "$\\dfrac{7}{10}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $P(\\text{red}) = \\frac{10}{20}$, $P(>7) = \\frac{6}{20}$ (the $8, 9, 10$ in each color), and $P(\\text{red and} > 7) = \\frac{3}{20}$. Inclusion-exclusion: $\\frac{10 + 6 - 3}{20} = \\frac{13}{20}$, choice B.\n\n**The Full Solution:**\nStep 1: There are $20$ cards. The $10$ red cards give $P(\\text{red}) = \\frac{10}{20}$.\nStep 2: Numbers greater than $7$ are $8, 9, 10$ in each color: $6$ cards, so $P(>7) = \\frac{6}{20}$.\nStep 3: The overlap (red and greater than $7$) is red $8, 9, 10$: $3$ cards, so $P(\\text{red and} > 7) = \\frac{3}{20}$.\nStep 4: $P(\\text{red or} > 7) = \\frac{10}{20} + \\frac{6}{20} - \\frac{3}{20} = \\frac{13}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): counts only $P(\\text{red}) = \\frac{10}{20}$ and ignores the \"or.\"\n* Choice C ($\\frac{4}{5}$): adds without subtracting the overlap, $\\frac{10 + 6}{20} = \\frac{16}{20}$.\n* Choice D ($\\frac{7}{10}$): a miscount of the union, $\\frac{14}{20}$.\n\n**Test Day Takeaway:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. When the two events overlap, you must subtract the shared outcomes once.",
  skills: ["probability"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has the solution $(x, y)$.\n\n$4x - 3y = 0$\n$x^2 + y = 13$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~45s):** Solve the second equation for $y = 13 - x^2$ and substitute into the first: $4x - 3(13 - x^2) = 0 \\Rightarrow 3x^2 + 4x - 39 = 0 \\Rightarrow (3x + 13)(x - 3) = 0$. Since $x > 0$, $x = 3$, so $y = 13 - 9 = 4$.\n\n**The Full Solution:**\nStep 1: From the second equation, $y = 13 - x^2$.\nStep 2: Substitute into the first: $4x - 3(13 - x^2) = 0 \\Rightarrow 4x - 39 + 3x^2 = 0 \\Rightarrow 3x^2 + 4x - 39 = 0$.\nStep 3: Factor: $(3x + 13)(x - 3) = 0$, giving $x = -\\frac{13}{3}$ or $x = 3$.\nStep 4: The condition $x > 0$ forces $x = 3$, so $y = 13 - 3^2 = 4$.\nCheck: $4(3) - 3(4) = 0$ and $3^2 + 4 = 13$. $\\checkmark$\n\n**Common Mistakes:** Picking $x = -\\frac{13}{3}$ and ignoring $x > 0$; solving for $x = 3$ but forgetting to go back and compute $y$.\n\n**Test Day Takeaway:** For a nonlinear system, isolate one variable, substitute to get a single quadratic, then apply any sign or domain restriction before reading off the requested value.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $9^{x+1} = 27^{x}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Rewrite both sides with base $3$: $3^{2(x+1)} = 3^{3x}$. Equate exponents: $2x + 2 = 3x \\Rightarrow x = 2$.\n\n**The Full Solution:**\nStep 1: $9 = 3^2$ and $27 = 3^3$, so $(3^2)^{x+1} = (3^3)^x$.\nStep 2: Multiply exponents: $3^{2(x+1)} = 3^{3x}$, i.e. $3^{2x+2} = 3^{3x}$.\nStep 3: Equal bases means equal exponents: $2x + 2 = 3x \\Rightarrow x = 2$.\nCheck: $9^{3} = 729$ and $27^{2} = 729$. $\\checkmark$\n\n**Common Mistakes:** Failing to distribute, writing $2(x+1) = 2x + 1$; misreading $27$ as $3^2$ instead of $3^3$.\n\n**Test Day Takeaway:** Convert every term to one common base, then set the exponents equal to each other.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $f$ has roots at $x = -2$ and $x = 7$. If $f(1) = 36$, what is the value of $f(0)$?",
  choices: [
    // distractor: sign error in computing -2 * 2 * (-7)
    { id: "A", text: "$-28$" },
    { id: "B", text: "$28$" },
    // distractor: applies the inverse — uses a = +2 with sign error
    { id: "C", text: "$-42$" },
    // distractor: stops one step early — computes (2)(7)(3) = 42 without using a
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Write $f(x) = a(x + 2)(x - 7)$ from the roots. From $f(1) = 36$: $a(3)(-6) = 36 \\Rightarrow a = -2$. Then $f(0) = -2(2)(-7) = 28$, choice B.\n\n**The Full Solution:**\nStep 1: Roots $-2$ and $7$ give the factored form $f(x) = a(x + 2)(x - 7)$.\nStep 2: Use $f(1) = 36$: $a(1 + 2)(1 - 7) = a(3)(-6) = -18a = 36$, so $a = -2$.\nStep 3: Evaluate $f(0) = -2(0 + 2)(0 - 7) = -2(2)(-7) = 28$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): correct magnitude but a sign slip in the product.\n* Choice C ($-42$): uses a wrong leading coefficient or mishandles the signs.\n* Choice D ($42$): computes the bare product $(2)(7)(3)$ without applying $a = -2$.\n\n**Test Day Takeaway:** Build the factored form straight from the roots, pin down $a$ with the given point, then substitute the value you actually need.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{2}{x - 3} + \\dfrac{5}{x + 3} = \\dfrac{19}{x^2 - 9}$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Since $x^2 - 9 = (x - 3)(x + 3)$, multiply the whole equation by $(x - 3)(x + 3)$: $2(x + 3) + 5(x - 3) = 19$. Simplify to $7x - 9 = 19$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2 - 9 = (x - 3)(x + 3)$, which is the common denominator.\nStep 2: Multiply both sides by $(x - 3)(x + 3)$: $2(x + 3) + 5(x - 3) = 19$.\nStep 3: Expand: $2x + 6 + 5x - 15 = 19 \\Rightarrow 7x - 9 = 19 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.\nStep 4: Confirm $x = 4$ leaves no denominator zero: $4 - 3 = 1$ and $4 + 3 = 7$, both nonzero. $\\checkmark$\n\n**Common Mistakes:** Distributing wrong, $5(x - 3) = 5x - 3$ instead of $5x - 15$; skipping the check that the solution doesn't make a denominator zero.\n\n**Test Day Takeaway:** Factor the denominators, clear fractions by multiplying through by the LCD, solve, then verify the answer doesn't create a zero denominator.",
  skills: ["solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $c$ does the equation $3x^2 - 12x + c = 0$ have exactly one real solution?",
  choices: [
    // distractor: sets b^2 + 4ac = 0 (sign error in discriminant)
    { id: "A", text: "$-12$" },
    // distractor: divides -12 by -3 instead of using discriminant
    { id: "B", text: "$4$" },
    { id: "C", text: "$12$" },
    // distractor: stops one step early — gives 144/4 = 36 instead of dividing by 12
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means the discriminant is zero: $(-12)^2 - 4(3)(c) = 0 \\Rightarrow 144 - 12c = 0 \\Rightarrow c = 12$, choice C.\n\n**The Full Solution:**\nStep 1: A quadratic $ax^2 + bx + c = 0$ has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: With $a = 3$ and $b = -12$: $(-12)^2 - 4(3)(c) = 0$.\nStep 3: $144 - 12c = 0 \\Rightarrow 12c = 144 \\Rightarrow c = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): a sign error turns the equation into $144 + 12c = 0$, giving $c = -12$.\n* Choice B ($4$): divides $-12$ by $-3$, ignoring the discriminant entirely.\n* Choice D ($36$): divides $144$ by $4$ instead of by the full $4a = 12$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" is code for discriminant $= 0$. Set $b^2 - 4ac = 0$ and solve for the unknown coefficient.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Along a marathon course, three water stations form a right triangle. The right-angle station is connected to the next station by a straight path of length $15$ meters, and the longest path, the hypotenuse, measures $25$ meters. What is the perimeter, in meters, of the triangle formed by the three paths?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["15", "", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (15 + 20 = 35)
    { id: "A", text: "$35$" },
    { id: "B", text: "$60$" },
    // distractor: subtracts the sides directly instead of using the Pythagorean theorem (25 - 15 = 10)
    { id: "C", text: "$50$" },
    // distractor: wrong base — writes the missing leg 20 into the hypotenuse slot too (15 + 20 + 20)
    { id: "D", text: "$55$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A leg of $15$ with hypotenuse $25$ is the $3$-$4$-$5$ triple scaled by $5$, so the $15$-$20$-$25$ triangle has missing leg $20$. Perimeter $= 15 + 20 + 25 = 60$, choice B.\n\n**The Full Solution:**\nStep 1: Let the missing leg be $b$. By the Pythagorean theorem, $15^2 + b^2 = 25^2$.\nStep 2: $225 + b^2 = 625 \\Rightarrow b^2 = 400 \\Rightarrow b = 20$.\nStep 3: Perimeter $= 15 + 20 + 25 = 60$ meters.\nCheck: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): adds only the two legs $15 + 20$ and forgets the hypotenuse.\n* Choice C ($50$): finds the leg by subtracting, $25 - 15 = 10$, then sums $15 + 10 + 25$.\n* Choice D ($55$): finds the leg $20$ but reuses it as a second side, $15 + 20 + 20$.\n\n**Test Day Takeaway:** Know the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$) and their multiples — they let you skip the algebra.",
  skills: ["triangles", "right-triangles"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 + 4x - 12y + 15 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: completes only one square or drops a constant
    { id: "A", text: "$\\sqrt{15}$" },
    { id: "B", text: "$5$" },
    // distractor: stops one step early — reports r^2 = 25 instead of r
    { id: "C", text: "$25$" },
    // distractor: wrong base — confuses constant 15 with r^2
    { id: "D", text: "$\\sqrt{40}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: $(x + 2)^2 + (y - 6)^2 = 4 + 36 - 15 = 25$. Radius $= \\sqrt{25} = 5$, choice B.\n\n**The Full Solution:**\nStep 1: Group terms: $(x^2 + 4x) + (y^2 - 12y) = -15$.\nStep 2: Complete the square. Half of $4$ is $2$, $2^2 = 4$; half of $-12$ is $-6$, $(-6)^2 = 36$. Add both to each side.\nStep 3: $(x^2 + 4x + 4) + (y^2 - 12y + 36) = -15 + 4 + 36 \\Rightarrow (x + 2)^2 + (y - 6)^2 = 25$.\nStep 4: Standard form gives $r^2 = 25$, so $r = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{15}$): treats the constant $15$ as $r^2$ without completing the square.\n* Choice C ($25$): reports $r^2 = 25$ and forgets to take the square root.\n* Choice D ($\\sqrt{40}$): leaves the constant on the wrong side, getting $4 + 36 = 40$.\n\n**Test Day Takeaway:** Complete the square for both $x$ and $y$. Whatever you add on the left also gets added on the right; then $r = \\sqrt{r^2}$.",
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
// Wavy flow: E M M E M H H M H H M H E H H M H H H M H H
// Distribution: 3 E (Q1/Q4/Q13), 7 M (Q2/Q3/Q5/Q8/Q11/Q16/Q20), 12 H (rest), band-7 ceiling.
// Easies: Q1 Pythagorean surd hypotenuse (opener, 2-step + simplify trap), Q4 rate
// per km, Q13 breather = pure range (max - min), distinct from the Q5 outlier/median item.
// Pool infusions: Q6 parametric dependent system (D-p4#26), Q9 circle-domain x-value
// (D-p24#22), Q10 quadratic-formula discriminant form (D-p38#20 skeleton; nudged off
// source constants), Q14 exponential period years-to-months (D-p28#25), Q3 rearranged-
// linear-model constant (E#12), Q17 scatterplot best-fit-line scaling (E#22), Q21 poll
// scale-up margin (D-p14#26), Q22 vertex/two-intercept a+b+c bound (D-p18#26 skeleton;
// reskinned to vertex (3,12) opening down).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs of length $4$ and $8$. What is the length of its hypotenuse?",
  choices: [
    // distractor: adds the two legs (4 + 8) instead of using the Pythagorean theorem
    { id: "A", text: "$12$" },
    { id: "B", text: "$4\\sqrt{5}$" },
    // distractor: subtracts under the radical, sqrt(8^2 - 4^2) = sqrt(48) = 4 sqrt 3
    { id: "C", text: "$4\\sqrt{3}$" },
    // distractor: squares only one leg, sqrt(4^2 + 8) = sqrt(24) = 2 sqrt 6
    { id: "D", text: "$2\\sqrt{6}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c = \\sqrt{4^2 + 8^2} = \\sqrt{80} = \\sqrt{16 \\cdot 5} = 4\\sqrt{5}$, choice B.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, the hypotenuse satisfies $c^2 = a^2 + b^2$ with $a = 4$, $b = 8$.\nStep 2: $c^2 = 4^2 + 8^2 = 16 + 64 = 80$.\nStep 3: $c = \\sqrt{80}$. Pull out the largest perfect square: $80 = 16 \\cdot 5$, so $c = \\sqrt{16}\\,\\sqrt{5} = 4\\sqrt{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): adds the legs $4 + 8$ instead of squaring, summing, and taking the root.\n* Choice C ($4\\sqrt{3}$): subtracts under the radical, $\\sqrt{8^2 - 4^2} = \\sqrt{48}$, as if solving for a leg.\n* Choice D ($2\\sqrt{6}$): squares only one leg, $\\sqrt{4^2 + 8} = \\sqrt{24}$, forgetting to square the $8$.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — square BOTH legs, add, then simplify the radical by factoring out perfect squares.",
  skills: ["pythagorean-theorem", "right-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the sum of the solutions to the equation $|x - 4| = 9$?",
  choices: [
    // distractor: stops one step early - gives one of the two roots
    { id: "A", text: "$-5$" },
    { id: "B", text: "$8$" },
    // distractor: stops one step early - gives the other root
    { id: "C", text: "$13$" },
    // distractor: wrong base - sums constants in the equation
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $|x - 4| = 9 \\Rightarrow x - 4 = \\pm 9$, so $x = 13$ or $x = -5$. Sum $= 13 + (-5) = 8$, choice B.\n\n**The Full Solution:**\nStep 1: An absolute-value equation splits into two cases: $x - 4 = 9$ or $x - 4 = -9$.\nStep 2: These give $x = 13$ and $x = -5$.\nStep 3: Sum $= 13 + (-5) = 8$.\nShortcut: the solutions of $|x - h| = k$ are symmetric about $x = h$, so their sum is always $2h = 2(4) = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): reports one root instead of the sum.\n* Choice C ($13$): reports the other root.\n* Choice D ($18$): combines the constants $9$ and $4$ incorrectly, e.g. $9 + 9$.\n\n**Test Day Takeaway:** $|x - h| = k$ has solutions $x = h \\pm k$, so the sum of the two solutions is $2h$ — read $h$ straight off.",
  skills: ["absolute-value", "solving-equations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Dmitri uses $4$ square meters of panel material to build each solar-panel array. The relationship between the number of arrays he builds, $x$, and the total area of panel material he purchased, $y$, in square meters, satisfies $y - 4x = 9$. Which of the following is the best interpretation of $9$ in this context?",
  choices: [
    // distractor: treats 9 as a count of arrays
    { id: "A", text: "Dmitri built $9$ arrays." },
    // distractor: reads 9 as the material used rather than the surplus
    { id: "B", text: "Dmitri used a total of $9$ square meters of material to build the arrays." },
    // distractor: reads 9 as the total purchased rather than the surplus
    { id: "C", text: "Dmitri purchased a total of $9$ square meters of material." },
    { id: "D", text: "Dmitri purchased $9$ square meters more material than he used to build the arrays." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Solve $y - 4x = 9$ for $y$ to get $y = 4x + 9$. Here $4x$ is the material used (each array eats $4$ square meters) and $y$ is the material purchased, so $9 = y - 4x$ is purchased minus used: the leftover.\n\n**The Full Solution:**\nStep 1: Rearrange to $y = 4x + 9$, the line's slope-intercept form.\nStep 2: The slope $4$ is the material consumed per array, so $4x$ is the total used building $x$ arrays. The variable $y$ is the total purchased.\nStep 3: Rewrite the constant as $9 = y - 4x = (\\text{purchased}) - (\\text{used})$. That difference is the surplus material bought but never used, matching choice D.\nStep 4: Check with $x = 5$: used $= 4(5) = 20$, purchased $= 20 + 9 = 29$, which is exactly $9$ more than used. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: counts $9$ as arrays, but arrays are tracked by $x$, not the constant.\n* Choice B: calls $9$ the material used, but the used amount is $4x$.\n* Choice C: calls $9$ the total purchased, but the total purchased is $y$, which grows with $x$.\n\n**Test Day Takeaway:** Rearrange into $y = mx + b$ first. When $y$ is a total and $mx$ is the amount consumed, the constant $b$ is the difference left over, not a total or a count.",
  skills: ["interpreting-linear-models", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Aisha runs at a constant pace, covering $9$ kilometers in $36$ minutes. At this pace, how many minutes does it take Aisha to run $1$ kilometer?",
  choices: [
    // distractor: gives total time for all 9 km, stops one step early
    { id: "A", text: "$36$" },
    { id: "B", text: "$4$" },
    // distractor: inverts the rate — km per minute (9/36 = 0.25)
    { id: "C", text: "$0.25$" },
    // distractor: wrong base — divides 36 by 6 instead of 9
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Minutes per kilometer $= \\dfrac{36}{9} = 4$, so it takes $4$ minutes to run $1$ kilometer.\n\n**The Full Solution:**\nStep 1: A constant pace means time is proportional to distance.\nStep 2: Divide total time by total distance: $\\dfrac{36 \\text{ minutes}}{9 \\text{ kilometers}} = 4$ minutes per kilometer.\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): reports the total time for all $9$ km instead of the per-kilometer time.\n* Choice C ($0.25$): computes kilometers per minute, $\\dfrac{9}{36}$, the inverted rate.\n* Choice D ($6$): divides $36$ by $6$ instead of by the correct count $9$.\n\n**Test Day Takeaway:** \"Per one unit\" means divide the total by the count of that unit. Keep the order straight: minutes per km is $\\dfrac{\\text{minutes}}{\\text{km}}$.",
  skills: ["proportions", "rates"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An acoustic engineer recorded $9$ ambient sound-level readings, in decibels, in a museum gallery, listed in order:\n\n$1, 4, 4, 6, 7, 8, 9, 11, 12$\n\nA faulty sensor then adds the erroneous reading $80$ to the data set. Compared with the original nine readings, which of the following describes the change to the median and the range?",
  choices: [
    // distractor: overestimates the median shift (an outlier barely moves the median)
    { id: "A", text: "The median increases by more than $1$ and the range increases." },
    { id: "B", text: "The median increases by $0.5$ and the range increases." },
    // distractor: ignores both effects (the outlier clearly enlarges the range)
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: gets the median right but misses the obvious range change
    { id: "D", text: "The median increases by $0.5$ and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Original $9$ values: median is the $5$th value $= 7$, range $= 12 - 1 = 11$. Add $80$ for $10$ values: median is the average of the $5$th and $6$th, $\\dfrac{7 + 8}{2} = 7.5$, range $= 80 - 1 = 79$. The median rises by $0.5$ and the range increases.\n\n**The Full Solution:**\nStep 1: Original sorted list $1, 4, 4, 6, 7, 8, 9, 11, 12$ has $9$ values, so the median is the middle ($5$th) value, $7$. Range $= 12 - 1 = 11$.\nStep 2: Append $80$: $1, 4, 4, 6, 7, 8, 9, 11, 12, 80$ has $10$ values, so the median is the average of the $5$th and $6$th values, $\\dfrac{7 + 8}{2} = 7.5$. Range $= 80 - 1 = 79$.\nStep 3: Median change $= 7.5 - 7 = 0.5$ (increases by $0.5$); range change $= 79 - 11 = 68$ (increases). That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: overstates the median shift; adding one high value moves the median by only $0.5$ here, not more than $1$.\n* Choice C: ignores both effects, but the outlier $80$ clearly enlarges the range.\n* Choice D: gets the median shift right but wrongly claims the range is unchanged.\n\n**Test Day Takeaway:** An extreme outlier swings the mean and range hard but barely nudges the median. The median resists outliers.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$3x + 4y = 11$$\n$$9x + 12y = 33$$\n\nFor each real number $r$, which of the following points lies on the graph of both equations of the given system in the $xy$-plane?",
  choices: [
    // distractor: nonsense parametrization scaled by 3 (does not satisfy the line)
    { id: "A", text: "$\\left(\\dfrac{r}{3} + 11,\\ -\\dfrac{r}{3} + 33\\right)$" },
    { id: "B", text: "$\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3},\\ r\\right)$" },
    // distractor: sign-flipped y-parametrization (gives 6r + 11, not constant)
    { id: "C", text: "$\\left(r,\\ \\dfrac{3r}{4} + \\dfrac{11}{4}\\right)$" },
    // distractor: puts the x-solve coefficients into the y-slot
    { id: "D", text: "$\\left(r,\\ -\\dfrac{4r}{3} + \\dfrac{11}{3}\\right)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The second equation is exactly $3\\times$ the first, so both graphs are the single line $3x + 4y = 11$. Let $y = r$ and solve: $3x = 11 - 4r \\Rightarrow x = -\\dfrac{4r}{3} + \\dfrac{11}{3}$. So $\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3},\\ r\\right)$ lies on the line for every $r$, which is choice B.\n\n**The Full Solution:**\nStep 1: Divide the second equation by $3$: $3x + 4y = 11$, identical to the first. The system is one line, so every point on $3x + 4y = 11$ is a solution.\nStep 2: Parametrize by setting the lone variable to $r$. Set $y = r$: $3x + 4r = 11 \\Rightarrow x = \\dfrac{11 - 4r}{3} = -\\dfrac{4r}{3} + \\dfrac{11}{3}$.\nStep 3: Verify choice B: $3\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3}\\right) + 4r = -4r + 11 + 4r = 11$ for all $r$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: a scaled-up nonsense point; $3\\left(\\dfrac{r}{3}+11\\right) + 4\\left(-\\dfrac{r}{3}+33\\right) = -\\dfrac{r}{3} + 165 \\neq 11$.\n* Choice C: sign-flips the $y$-coefficient; $3r + 4\\left(\\dfrac{3r}{4}+\\dfrac{11}{4}\\right) = 6r + 11 \\neq 11$.\n* Choice D: puts the $x$-solve coefficients in the $y$-slot; $3r + 4\\left(-\\dfrac{4r}{3}+\\dfrac{11}{3}\\right) = -\\dfrac{7r}{3} + \\dfrac{44}{3} \\neq 11$.\n\n**Test Day Takeaway:** When one equation is a constant multiple of the other, the system is a single line. Fix the variable that appears alone ($y = r$ here), solve for the other, and confirm the point satisfies the equation for all $r$.",
  skills: ["systems-of-equations", "infinitely-many-solutions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 6x + c$, where $c$ is a constant, is tangent to the parabola $y = x^2 + 2x + 11$ at exactly one point. What is the value of $c$?",
  choices: [
    // distractor: applies the inverse operation — solves 4c = -28 instead of +28
    { id: "A", text: "$-7$" },
    { id: "B", text: "$7$" },
    // distractor: wrong base — reads the parabola's constant term 11 as the answer
    { id: "C", text: "$11$" },
    // distractor: sign error in the discriminant — uses +4(11 - c) instead of -4(11 - c)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Tangent means one shared point, so equating gives a quadratic with discriminant $0$. $x^2 + 2x + 11 = 6x + c \\Rightarrow x^2 - 4x + (11 - c) = 0$, and $(-4)^2 - 4(11 - c) = 0 \\Rightarrow 16 - 44 + 4c = 0 \\Rightarrow c = 7$.\n\n**The Full Solution:**\nStep 1: A line tangent to a parabola meets it exactly once. Set the expressions equal: $x^2 + 2x + 11 = 6x + c$.\nStep 2: Collect into standard form: $x^2 - 4x + (11 - c) = 0$.\nStep 3: One solution requires discriminant $= 0$: $(-4)^2 - 4(1)(11 - c) = 0 \\Rightarrow 16 - 44 + 4c = 0 \\Rightarrow 4c = 28 \\Rightarrow c = 7$.\nStep 4: Check: with $c = 7$, the quadratic is $x^2 - 4x + 4 = (x - 2)^2 = 0$, a double root at $x = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): a sign slip solving $4c = -28$.\n* Choice C ($11$): reads the parabola's constant term straight off without using the discriminant.\n* Choice D ($15$): mishandles a sign, writing $16 + 4(11 - c) = 0$ to get $4c = 60$.\n\n**Test Day Takeaway:** \"Tangent\" or \"exactly one intersection\" for a line and a parabola means set them equal, collect into a quadratic, and set the discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "What is the solution to the equation $\\sqrt{3x + 4} = x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Square both sides: $3x + 4 = x^2 \\Rightarrow x^2 - 3x - 4 = 0 \\Rightarrow (x - 4)(x + 1) = 0$. The candidates are $x = 4$ and $x = -1$, but $x = -1$ makes the right side negative while a square root is never negative, so $x = 4$.\n\n**The Full Solution:**\nStep 1: Square both sides to clear the radical: $(\\sqrt{3x + 4})^2 = x^2 \\Rightarrow 3x + 4 = x^2$.\nStep 2: Rearrange and factor: $x^2 - 3x - 4 = 0 \\Rightarrow (x - 4)(x + 1) = 0$, so $x = 4$ or $x = -1$.\nStep 3: Check each in the original equation, since squaring can create extraneous roots.\n* $x = 4$: $\\sqrt{3(4) + 4} = \\sqrt{16} = 4$. $\\checkmark$\n* $x = -1$: $\\sqrt{3(-1) + 4} = \\sqrt{1} = 1 \\neq -1$. Extraneous.\nStep 4: The only valid solution is $x = 4$.\n\n**Common Mistakes:** Reporting $x = -1$ without checking it back, since squaring can manufacture false roots; forgetting the principal square root is never negative, so the right side $x$ must be $\\ge 0$.\n\n**Test Day Takeaway:** After squaring a radical equation, substitute every candidate back into the original and discard any root that makes a square root equal a negative value.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x + 6)^2 + (y - 8)^2 = 169$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on this circle. Which of the following could be the value of $a$?",
  choices: [
    // distractor: just below the minimum x-value (−19), tempting boundary miss
    { id: "A", text: "$-20$" },
    { id: "B", text: "$-15$" },
    // distractor: uses the y-coordinate of the center as an x-value
    { id: "C", text: "$8$" },
    // distractor: uses the radius itself as a coordinate (outside the x-range)
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The circle has center $(-6, 8)$ and radius $\\sqrt{169} = 13$. Its $x$-coordinates span $[-6 - 13,\\ -6 + 13] = [-19, 7]$. Only $-15$ falls in that interval, so choice B works.\n\n**The Full Solution:**\nStep 1: Compare to standard form $(x - h)^2 + (y - k)^2 = r^2$: here $h = -6$, $k = 8$, $r^2 = 169$, so $r = 13$.\nStep 2: The horizontal extent reaches $13$ units left and right of $x = -6$: $-6 - 13 = -19$ on the left, $-6 + 13 = 7$ on the right. Every point on the circle has $x$ in $[-19, 7]$.\nStep 3: Test the choices: $-15$ lies in $[-19, 7]$; $-20$, $8$, and $19$ do not. Choice B is the only possible value.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): just past the left edge $-19$; a slip on $-6 - 13$ lands here.\n* Choice C ($8$): grabs the center's $y$-coordinate as an $x$-value, but $8 > 7$ is outside the range.\n* Choice D ($19$): misreads the radius, but $19$ is far past the right edge $7$.\n\n**Test Day Takeaway:** A circle centered at $(h, k)$ with radius $r$ has $x$-values in $[h - r,\\ h + r]$ and $y$-values in $[k - r,\\ k + r]$. Read off the center and radius, then test each choice against the interval.",
  skills: ["circle-equation", "center-radius"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$2x^2 - 10x - 3 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10 - \\sqrt{k}}{4}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "124",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $124$.**\n\n**The Fast Way (~30s):** With $a = 2$, $b = -10$, $c = -3$, the quadratic formula gives $x = \\dfrac{10 \\pm \\sqrt{(-10)^2 - 4(2)(-3)}}{2(2)} = \\dfrac{10 \\pm \\sqrt{124}}{4}$. Matching $\\dfrac{10 - \\sqrt{k}}{4}$ gives $k = 124$.\n\n**The Full Solution:**\nStep 1: The quadratic formula for $ax^2 + bx + c = 0$ is $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\nStep 2: Identify $a = 2$, $b = -10$, $c = -3$, so $-b = 10$ and $2a = 4$.\nStep 3: Compute the discriminant: $b^2 - 4ac = (-10)^2 - 4(2)(-3) = 100 + 24 = 124$.\nStep 4: So $x = \\dfrac{10 \\pm \\sqrt{124}}{4}$, and the given form $\\dfrac{10 - \\sqrt{k}}{4}$ matches with $k = 124$.\n\n**Common Mistakes:** Treating $c = -3$ as $+3$ and getting $100 - 24 = 76$; confusing the numerator $10$ (which is $-b$) with the denominator $4$ (which is $2a$).\n\n**Test Day Takeaway:** When a root is written as $\\dfrac{-b \\pm \\sqrt{k}}{2a}$, the constant $k$ is just the discriminant $b^2 - 4ac$. Pin down $a$, $b$, $c$ with their signs first; sign errors on $c$ are the most common trap.",
  skills: ["quadratic-formula", "discriminant"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a night-market stall, dumplings sell for $\\$3$ each and grilled skewers sell for $\\$5$ each. Aisha buys a total of $12$ of these items and spends exactly $\\$46$. How many skewers does she buy?",
  choices: [
    // distractor: solves for dumplings (7) instead of skewers
    { id: "A", text: "$7$" },
    { id: "B", text: "$5$" },
    // distractor: off-by-one slip in the elimination step
    { id: "C", text: "$6$" },
    // distractor: divides total spent by skewer price (46/5 rounded) ignoring the count constraint
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $s$ be the number of skewers; then dumplings $= 12 - s$. Cost: $3(12 - s) + 5s = 46 \\Rightarrow 36 + 2s = 46 \\Rightarrow s = 5$.\n\n**The Full Solution:**\nStep 1: Let $d$ be dumplings and $s$ be skewers. Count: $d + s = 12$. Cost: $3d + 5s = 46$.\nStep 2: Substitute $d = 12 - s$ into the cost equation: $3(12 - s) + 5s = 46$.\nStep 3: Simplify: $36 - 3s + 5s = 46 \\Rightarrow 36 + 2s = 46 \\Rightarrow 2s = 10 \\Rightarrow s = 5$.\nStep 4: Then $d = 12 - 5 = 7$. Check: $3(7) + 5(5) = 21 + 25 = 46$ and $7 + 5 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): the number of dumplings, not skewers.\n* Choice C ($6$): an arithmetic slip on $2s = 10$.\n* Choice D ($9$): divides $\\$46$ by the skewer price $\\$5$ and ignores the count constraint $d + s = 12$.\n\n**Test Day Takeaway:** With two unknowns and two facts (a count and a total), substitute one equation into the other. Re-read which variable the question asks for before bubbling.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A paper-recycling center sorted $80$ incoming bales by source and by grade. The table summarizes the bales:\n\n| | High grade | Mixed grade | Low grade | Total |\n|---|---|---|---|---|\n| Route X | $14$ | $9$ | $7$ | $30$ |\n| Route Y | $5$ | $11$ | $4$ | $20$ |\n| Route Z | $11$ | $13$ | $6$ | $30$ |\n| Total | $30$ | $33$ | $17$ | $80$ |\n\nIf one high-grade bale is selected at random, what is the probability that it came from Route Y or Route Z?",
  choices: [
    // distractor: uses 16/80 = 1/5 (uses grand total as denominator)
    { id: "A", text: "$\\dfrac{1}{5}$" },
    // distractor: stops at Y only: 5/30 = 1/6
    { id: "B", text: "$\\dfrac{1}{6}$" },
    { id: "C", text: "$\\dfrac{8}{15}$" },
    // distractor: off-by-one — uses 16/30 simplified wrong
    { id: "D", text: "$\\dfrac{14}{30}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"High-grade bale selected\" restricts to the High-grade column, total $30$. Route Y or Z: $5 + 11 = 16$. Probability $= \\dfrac{16}{30} = \\dfrac{8}{15}$.\n\n**The Full Solution:**\nStep 1: The condition \"one high-grade bale\" restricts the sample space to the High-grade column, which holds $30$ bales.\nStep 2: Favorable bales are High grade and from Route Y or Route Z: $5 + 11 = 16$.\nStep 3: Probability $= \\dfrac{16}{30} = \\dfrac{8}{15}$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the grand total $80$ as the denominator, giving $\\dfrac{16}{80} = \\dfrac{1}{5}$.\n* Choice B: counts only Route Y ($5$) over $30$, stopping one route short.\n* Choice D: uses the Route X count ($14$) instead of Y + Z.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. The numerator counts favorable cases in that subset; the denominator is the subset's total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An aquaponics technician recorded the water temperature, in degrees Celsius, of a tank at six times during the day:\n\n$18, 21, 19, 24, 20, 17$\n\nWhat is the range of these temperatures, in degrees Celsius?",
  choices: [
    // distractor: reports the maximum value only
    { id: "A", text: "$24$" },
    { id: "B", text: "$7$" },
    // distractor: reports the minimum value only
    { id: "C", text: "$17$" },
    // distractor: gives the mean instead of the range
    { id: "D", text: "$19.8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 24 - 17 = 7$.\n\n**The Full Solution:**\nStep 1: The range is the difference between the largest and smallest values.\nStep 2: Largest $= 24$, smallest $= 17$, so range $= 24 - 17 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): reports the maximum without subtracting the minimum.\n* Choice C ($17$): reports the minimum.\n* Choice D ($19.8$): computes the mean instead of the range.\n\n**Test Day Takeaway:** Range is a single subtraction, largest minus smallest. Don't confuse it with the mean or the spread of the middle values.",
  skills: ["statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$N(t) = 540(1.05)^{\\frac{4}{3}t}$$\n\nThe function $N$ models the number of residential solar-panel arrays installed in a county $t$ years after 2018. According to the model, the number of arrays is predicted to increase by $5\\%$ every $m$ months. What is the value of $m$?",
  choices: [
    // distractor: assumes the 5% increase happens once per year, ignoring the 4/3 exponent factor
    { id: "A", text: "$12$" },
    { id: "B", text: "$9$" },
    // distractor: inverts the rate — multiplies 4/3 by 12 instead of using 3/4 of a year
    { id: "C", text: "$16$" },
    // distractor: uses 3 years worth of months
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The factor $1.05$ multiplies in once each time the exponent $\\frac{4}{3}t$ increases by $1$, i.e. when $\\frac{4}{3}t = 1 \\Rightarrow t = \\frac{3}{4}$ year. Convert: $\\frac{3}{4} \\times 12 = 9$ months.\n\n**The Full Solution:**\nStep 1: The base $1.05$ is a $5\\%$ increase, applied once every time the exponent grows by exactly $1$.\nStep 2: Set the exponent change to $1$: $\\frac{4}{3}t = 1 \\Rightarrow t = \\frac{3}{4}$ year.\nStep 3: Convert years to months: $\\frac{3}{4} \\times 12 = 9$ months. So the arrays grow $5\\%$ every $9$ months, giving $m = 9$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): assumes the $5\\%$ increase happens once per year, ignoring the $\\frac{4}{3}$ factor in the exponent.\n* Choice C ($16$): multiplies $\\frac{4}{3} \\times 12$ instead of using $\\frac{3}{4}$ of a year.\n* Choice D ($36$): uses $3$ years' worth of months.\n\n**Test Day Takeaway:** A base $b$ in $a \\cdot b^{ct}$ multiplies in once each time the exponent $ct$ increases by $1$ — every $\\frac{1}{c}$ units of $t$. Solve $ct = 1$, then convert units.",
  skills: ["exponential-functions", "unit-conversion"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $4^{x + 1} = 8^{x - 1}$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Rewrite both sides over base $2$: $4=2^2$ and $8=2^3$, so $2^{2(x+1)}=2^{3(x-1)}$. Equal bases force equal exponents: $2x+2=3x-3 \\Rightarrow x=5$.\n\n**The Full Solution:**\nStep 1: For $b^M=b^N$ with the same positive base $b\\neq 1$, the exponents must match: $M=N$. So convert both sides to a common base.\nStep 2: $4^{x+1}=(2^2)^{x+1}=2^{2(x+1)}=2^{2x+2}$ and $8^{x-1}=(2^3)^{x-1}=2^{3(x-1)}=2^{3x-3}$.\nStep 3: Set the exponents equal: $2x+2=3x-3$, so $5=x$.\nVerify: $4^{6}=4096$ and $8^{4}=4096$. $\\checkmark$\n\n**Common Mistakes:** Adding exponents instead of multiplying when applying $(b^m)^n=b^{mn}$ (e.g. writing $2(x+1)$ as $2x+1$); dropping the sign on $-(-3)$ and getting the wrong constant.\n\n**Test Day Takeaway:** When both sides of an exponential equation are powers of a common base, rewrite them in that base and set the exponents equal. Use $(b^m)^n=b^{mn}$ — multiply the exponents, never add.",
  skills: ["exponent-rules", "solving-equations", "exponential-functions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A museum gift shop prices a poster at $\\$40$. For a weekend promotion, the price is first increased by $25\\%$, and then the increased price is reduced by $20\\%$. What is the final price of the poster?",
  choices: [
    // distractor: nets the two percents as +5% (25 − 20) applied to 40
    { id: "A", text: "$\\$42$" },
    { id: "B", text: "$\\$40$" },
    // distractor: applies the 20% reduction to the original 40, then ignores the increase
    { id: "C", text: "$\\$32$" },
    // distractor: applies both percents additively the wrong way (40 + 25% then + 20%)
    { id: "D", text: "$\\$60$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Chain the multipliers: $40 \\times 1.25 \\times 0.80 = 40 \\times 1.00 = \\$40$. The two changes cancel, so the answer is $\\$40$, choice B.\n\n**The Full Solution:**\nStep 1: A $25\\%$ increase multiplies by $1.25$: $40 \\times 1.25 = 50$.\nStep 2: A $20\\%$ decrease multiplies the new price by $0.80$: $50 \\times 0.80 = 40$.\nStep 3: The final price is $\\$40$ — identical to the start, because $1.25 \\times 0.80 = 1.00$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$42$): nets the percents as $25\\%-20\\%=5\\%$ and adds $5\\%$ to $\\$40$, ignoring that each change applies to a different base.\n* Choice C ($\\$32$): applies only the $20\\%$ reduction to the original $\\$40$.\n* Choice D ($\\$60$): over-adds — applies the $25\\%$ increase and then keeps adding instead of taking $80\\%$.\n\n**Test Day Takeaway:** Apply successive percent changes as multipliers in order ($1.25$ then $0.80$), never by adding or subtracting the percentages — each change acts on the most recent amount.",
  skills: ["percents", "word-problems"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, for sample $J$, along with its line of best fit. Sample $K$ is formed by multiplying the $y$-coordinate of every data point in sample $J$ by $2.5$. Which of the following could be an equation of the line of best fit for sample $K$?",
  diagram: { type: "scatterplot", params: {
    points: [[2,12],[4,17],[6,19],[8,25],[10,27],[12,33],[14,35],[16,41],[18,43]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 50,
    xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 2, intercept: 8 },
    xLabel: "x", yLabel: "y",
  } },
  choices: [
    // distractor: scales only the slope, leaves the intercept unchanged
    { id: "A", text: "$y = 8 + 5x$" },
    { id: "B", text: "$y = 20 + 5x$" },
    // distractor: scales only the intercept, leaves the slope unchanged
    { id: "C", text: "$y = 20 + 2x$" },
    // distractor: scales neither — repeats the original line of best fit
    { id: "D", text: "$y = 8 + 2x$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Multiplying every $y$-value by $2.5$ scales both the slope and the intercept by $2.5$. From $y=8+2x$: new line $=8(2.5)+2(2.5)x=20+5x$, choice B.\n\n**The Full Solution:**\nStep 1: If the original best-fit line is $y=b+mx$ and every $y$-value is multiplied by $c$, the new best-fit line is $y_{\\text{new}}=cb+cmx$. Both intercept and slope scale by $c$.\nStep 2: Sample $J$ has best-fit line $y=8+2x$ (intercept $\\approx 8$, slope $\\approx 2$).\nStep 3: With $c=2.5$: new intercept $=8 \\times 2.5=20$, new slope $=2 \\times 2.5=5$, giving $y=20+5x$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=8+5x$): scales the slope to $5$ but forgets to scale the intercept.\n* Choice C ($y=20+2x$): scales the intercept to $20$ but leaves the slope unscaled.\n* Choice D ($y=8+2x$): repeats the original line without scaling anything.\n\n**Test Day Takeaway:** Multiplying every $y$-value by $c$ multiplies both the slope and the intercept of the best-fit line by $c$. Scaling the data scales the whole equation, not just one coefficient.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In a museum courtyard, a fountain jet sends water upward. The height of the water, in feet above the nozzle, is modeled by $h(t) = -5t^2 + 30t + 8$, where $t$ is the time in seconds after the water leaves the nozzle. What is the maximum height, in feet, reached by the water?",
  correctAnswer: "53",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~30s):** A downward parabola peaks at $t=-\\dfrac{b}{2a}=-\\dfrac{30}{2(-5)}=3$. Then $h(3)=-5(9)+30(3)+8=-45+90+8=53$.\n\n**The Full Solution:**\nStep 1: The coefficient of $t^2$ is $-5<0$, so the parabola opens downward and its vertex is the maximum.\nStep 2: The vertex sits at $t=-\\dfrac{b}{2a}=-\\dfrac{30}{2(-5)}=\\dfrac{-30}{-10}=3$ seconds.\nStep 3: Substitute $t=3$: $h(3)=-5(3)^2+30(3)+8=-45+90+8=53$ feet.\n\n**Common Mistakes:** Reporting $t=3$ (the time of the maximum) instead of the height $53$; dropping a sign in $-\\dfrac{b}{2a}$ to get $t=-3$; reporting the initial height $8$ (the value at $t=0$).\n\n**Test Day Takeaway:** For $f(t)=at^2+bt+c$ with $a<0$, the maximum value is $f\\!\\left(-\\dfrac{b}{2a}\\right)$. Find the vertex's $t$-coordinate first, then substitute to get the height.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation $x^2 - 14x + c = 0$, where $c$ is a constant, the two solutions differ by $6$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$40$" },
    // distractor: assumes the two solutions are equal (both 7), product 49
    { id: "B", text: "$49$" },
    // distractor: splits the sum with the wrong half-difference (roots 9 and 5)
    { id: "C", text: "$45$" },
    // distractor: multiplies the sum by the difference (14 × 6)
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** By Vieta's, the roots sum to $14$; their difference is $6$, so they are $\\dfrac{14+6}{2}=10$ and $\\dfrac{14-6}{2}=4$. Their product is $c=10 \\times 4=40$, choice A.\n\n**The Full Solution:**\nStep 1: For $x^2-14x+c=0$, Vieta's gives sum of roots $=14$ and product of roots $=c$.\nStep 2: Let the roots be $r$ and $s$ with $r+s=14$ and $r-s=6$. Adding: $2r=20 \\Rightarrow r=10$, so $s=4$.\nStep 3: Product: $c=rs=10 \\times 4=40$. Check: $x^2-14x+40=(x-10)(x-4)$, roots $10$ and $4$, difference $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($49$): ignores the difference, sets both roots to $\\dfrac{14}{2}=7$ (the equal-root case), giving product $49$.\n* Choice C ($45$): uses roots $9$ and $5$ (difference $4$, not $6$), product $45$.\n* Choice D ($84$): multiplies the sum by the difference ($14 \\times 6=84$) instead of finding the roots.\n\n**Test Day Takeaway:** For $x^2-(\\text{sum})x+(\\text{product})=0$, the sum of roots is $-\\dfrac{b}{a}$ and the product is $\\dfrac{c}{a}$. Given the sum and the difference, solve for each root, then multiply.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Rowan is training for a marathon and wants to run a total of at least $40$ miles this week. He has already run $13$ miles, and he plans to run $m$ miles on each of the $5$ remaining days. Which inequality represents this situation?",
  choices: [
    { id: "A", text: "$13 + 5m \\geq 40$" },
    // distractor: forgets the 13 miles already run
    { id: "B", text: "$5m \\geq 40$" },
    // distractor: reverses the inequality direction
    { id: "C", text: "$13 + 5m \\leq 40$" },
    // distractor: swaps which quantity is multiplied by 5
    { id: "D", text: "$5 + 13m \\geq 40$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Total $=13$ already run $+\\,5m$ for the $5$ remaining days. \"At least $40$\" means $\\ge 40$: $13+5m \\ge 40$, choice A.\n\n**The Full Solution:**\nStep 1: The weekly total is what he has run plus what he plans to run: $13+5m$.\nStep 2: \"At least $40$ miles\" means the total is greater than or equal to $40$.\nStep 3: Combine: $13+5m \\ge 40$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5m \\ge 40$): leaves out the $13$ miles already completed.\n* Choice C ($13+5m \\le 40$): flips the sign, capping mileage instead of setting a minimum.\n* Choice D ($5+13m \\ge 40$): multiplies $13$ by $m$ instead of multiplying $m$ by the $5$ remaining days.\n\n**Test Day Takeaway:** Translate \"at least\" as $\\ge$ and \"at most\" as $\\le$. Build the total expression first (fixed amount $+$ rate $\\times$ count), then attach the correct inequality sign.",
  skills: ["inequalities", "word-problems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a random survey of $810$ visitors to a night market, $512$ chose Dmitri's stall and $298$ chose Aisha's stall as their favorite. If all $8{,}910$ visitors to the market vote with the same preferences, by how many votes would Dmitri's stall be expected to win?",
  choices: [
    // distractor: reports the unscaled survey margin without scaling up
    { id: "A", text: "$214$" },
    // distractor: scales only the loser's count (298 × 11)
    { id: "B", text: "$3{,}278$" },
    { id: "C", text: "$2{,}354$" },
    // distractor: scales only the winner's count (512 × 11)
    { id: "D", text: "$5{,}632$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportional Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The scale factor is $\\dfrac{8910}{810}=11$. Survey margin $=512-298=214$. Expected margin $=11 \\times 214=2354$, choice C.\n\n**The Full Solution:**\nStep 1: The full vote scales up from the survey by $\\dfrac{8910}{810}=11$.\nStep 2: Find the survey margin first: $512-298=214$ votes.\nStep 3: Scale the margin by $11$: $214 \\times 11=2354$ votes. (Equivalently, Dmitri $\\to 512 \\times 11=5632$ and Aisha $\\to 298 \\times 11=3278$; the difference $5632-3278=2354$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($214$): reports the survey margin without scaling up to the full vote.\n* Choice B ($3278$): scales only the loser's count ($298 \\times 11$) and treats it as the margin.\n* Choice D ($5632$): scales only the winner's count ($512 \\times 11$) and treats it as the margin.\n\n**Test Day Takeaway:** When a sample scales up to a full population, multiply the margin (winner $-$ loser) by the scale factor, or scale each count and subtract — both give the same answer. Never report a single scaled count as the margin.",
  skills: ["proportions", "statistics"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(3, 12)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$8$" },
    // distractor: boundary value, corresponds to a = 0 (a line, not a parabola)
    { id: "B", text: "$12$" },
    // distractor: assumes a > 0 (opens upward), giving values above 12
    { id: "C", text: "$14$" },
    // distractor: also assumes a > 0; treats the vertex y-value as a floor
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The vertex $(3,12)$ is above the $x$-axis yet the parabola crosses it twice, so it opens downward: $a<0$. In vertex form $y=a(x-3)^2+12$, the sum $a+b+c$ equals $y(1)=a(1-3)^2+12=4a+12$. Since $a<0$, $4a+12<12$. Only $8$ is below $12$, choice A.\n\n**The Full Solution:**\nStep 1: A parabola with a maximum vertex above the $x$-axis that meets the axis at two points must open downward, so $a<0$.\nStep 2: Write vertex form: $y=a(x-3)^2+12$. Note $a+b+c=y(1)$, since $y(1)=a+b+c$.\nStep 3: $y(1)=a(1-3)^2+12=4a+12$. Because $a<0$, $4a<0$, so $a+b+c<12$.\nStep 4: Among the choices, only $8<12$. For example, $a=-1$ gives $y=-(x-3)^2+12=-x^2+6x+3$, so $a+b+c=-1+6+3=8$, and that parabola still crosses the $x$-axis twice.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): the boundary $a=0$, which is a line, not a parabola; $a+b+c$ must be strictly less than $12$.\n* Choice C ($14$): assumes $a>0$ (opens upward), which pushes $4a+12$ above $12$ but contradicts a maximum vertex above the axis with two real roots.\n* Choice D ($16$): also requires $a>0$; treats the vertex $y$-value as a lower bound instead of an upper one.\n\n**Test Day Takeaway:** To find $a+b+c$, evaluate the function at $x=1$. Combine that value with the sign of $a$ (read from how the parabola opens) to bound the answer.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest5;
