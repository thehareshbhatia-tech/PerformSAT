// Practice Test 12 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

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
// Practice Test 12 — Math Module 1
// Theme: Comprehensive Mix (Capstone Difficulty)
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A jar contains $60$ marbles. If $40\\%$ of the marbles are blue, how many marbles are NOT blue?",
  choices: [
    // distractor: stops one step early — gives the count of blue marbles ($24$) instead of NOT blue
    { id: "A", text: "$24$" },
    // distractor: applies the inverse operation — uses 40% of 60 minus 40 (treats percent as count)
    { id: "B", text: "$20$" },
    { id: "C", text: "$36$" },
    // distractor: wrong base — reads 40% as 40 marbles directly
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** If $40\\%$ are blue, then $60\\%$ are not blue, and $0.60 \\times 60 = 36$.\n\n**The Full Solution:**\nStep 1: Blue marbles $= 0.40 \\times 60 = 24$.\nStep 2: Not blue $= 60 - 24 = 36$. Check: $24 + 36 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): stops at the count of blue marbles instead of the not-blue count.\n* Choice B ($20$): mishandles the percent, treating it as a count or fraction of the wrong base.\n* Choice D ($40$): reads the $40\\%$ as $40$ marbles directly.\n\n**Test Day Takeaway:** For \"not,\" take the complement first: the leftover percent is $100\\% - \\text{given}$, applied to the same total.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The ratio of cats to dogs at an animal shelter is $5 : 3$. If the shelter has $40$ cats and dogs combined, how many of them are dogs?",
  choices: [
    // distractor: applies the percent forward — uses $\\frac{3}{8} \cdot 40$ but mis-rounds
    { id: "A", text: "$12$" },
    { id: "B", text: "$15$" },
    // distractor: uses $\\frac{40}{2} = 20$, halving instead of using the ratio
    { id: "C", text: "$20$" },
    // distractor: solves for cats ($\\frac{5}{8} \cdot 40$) instead of dogs
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Dogs are $\\frac{3}{5+3}=\\frac{3}{8}$ of the total, so dogs $=\\frac{3}{8}\\cdot 40 = 15$.\n\n**The Full Solution:**\nStep 1: Let cats $=5k$ and dogs $=3k$, matching the $5:3$ ratio.\nStep 2: Total $5k+3k=8k=40$, so $k=5$.\nStep 3: Dogs $=3k=15$. Check: cats $=25$, $25+15=40$ and $25:15=5:3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): an arithmetic slip on $\\frac{3}{8}\\cdot 40$.\n* Choice C ($20$): just halves the total, ignoring the ratio.\n* Choice D ($25$): solves for cats ($\\frac{5}{8}\\cdot 40$) instead of dogs.\n\n**Test Day Takeaway:** When a ratio and the total are both given, divide by the SUM of the ratio parts ($5+3=8$), then scale up the part you want.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The mean of five numbers is $14$. If four of the numbers are $10$, $12$, $16$, and $18$, what is the fifth number?",
  choices: [
    // distractor: picks the smallest existing number
    { id: "A", text: "$10$" },
    // distractor: guesses the median of the four numbers
    { id: "B", text: "$12$" },
    { id: "C", text: "$14$" },
    // distractor: uses $72 - 56 = 16$ from a miscalculated total
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The five numbers must total $5\\times 14 = 70$. The four given add to $56$, so the fifth is $70-56=14$.\n\n**The Full Solution:**\nStep 1: Sum $=$ mean $\\times$ count $= 14\\times 5 = 70$.\nStep 2: Known sum $= 10+12+16+18 = 56$.\nStep 3: Fifth number $= 70-56 = 14$. Check: $\\frac{70}{5}=14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): grabs the smallest listed value.\n* Choice B ($12$): picks a middle listed value rather than computing the missing one.\n* Choice D ($16$): uses a miscalculated total such as $72$ instead of $70$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Find the total, subtract what you know, and the missing value falls out.",
  skills: ["statistics"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5(x - 3) = 30$, what is the value of $x - 3$?",
  choices: [
    { id: "A", text: "$6$" },
    // distractor: solves all the way to x and reports x itself
    { id: "B", text: "$9$" },
    // distractor: subtracts 3 from 30 instead of dividing by 5
    { id: "C", text: "$27$" },
    // distractor: applies the inverse operation — multiplies 30 by 5
    { id: "D", text: "$150$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The question asks for $x - 3$, and $5(x-3) = 30$ says five of that quantity make $30$. So $x - 3 = 30 \\div 5 = 6$. No need to find $x$.\n\n**The Full Solution:**\nStep 1: Treat $x - 3$ as a single block: $5 \\cdot (x-3) = 30$.\nStep 2: Divide both sides by $5$: $x - 3 = 6$ — and that is exactly what the question asks for.\nStep 3: (If you solved for $x$ anyway: $x = 9$, and $9 - 3 = 6$, the same answer with an extra step.)\nCheck: $5(9 - 3) = 5 \\cdot 6 = 30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): solves through to $x$ and reports $x$ instead of $x - 3$.\n* Choice C ($27$): subtracts $3$ from $30$ instead of dividing by $5$.\n* Choice D ($150$): multiplies $30$ by $5$ — the wrong inverse operation.\n\n**Test Day Takeaway:** When the expression the question asks for already sits inside the equation, isolate it as one block instead of solving for the variable first.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A function $h$ is defined by $h(x) = -2x + 9$. What is the value of $h(3) + 5$?",
  choices: [
    // distractor: stops one step early — gives $h(3) = 3$ without adding $5$
    { id: "A", text: "$3$" },
    { id: "B", text: "$8$" },
    // distractor: drops the negative sign — computes $2(3) + 9 + 5 = 20$
    { id: "C", text: "$20$" },
    // distractor: applies the inverse operation — subtracts $5$ instead of adding
    { id: "D", text: "$-2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $h(3)=-2(3)+9=3$, then $h(3)+5=3+5=8$.\n\n**The Full Solution:**\nStep 1: Substitute $x=3$: $h(3)=-2(3)+9=-6+9=3$.\nStep 2: Add $5$: $h(3)+5=3+5=8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): gives $h(3)$ but forgets the $+5$.\n* Choice C ($20$): drops the negative on the slope, using $2(3)+9+5$.\n* Choice D ($-2$): subtracts $5$ instead of adding ($3-5$).\n\n**Test Day Takeaway:** Evaluate the function, then do whatever the rest of the expression asks — here a final $+5$.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is shown below.\n\n$2x + 5y = 19$\n$3x - 2y = 0$\n\nWhat is the value of $x + y$?",
  choices: [
    // distractor: stops one step early — gives just the value of $y$
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    // distractor: arithmetic error when combining $x$ and $y$
    { id: "C", text: "$7$" },
    // distractor: computes $\\frac{19}{2}$ or a similar slip
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The second equation gives $3x=2y$, so $x=\\frac{2y}{3}$. Substitute into the first to get $y=3$, then $x=2$, so $x+y=5$.\n\n**The Full Solution:**\nStep 1: From $3x-2y=0$, $x=\\frac{2y}{3}$.\nStep 2: Into $2x+5y=19$: $\\frac{4y}{3}+5y=19 \\Rightarrow \\frac{19y}{3}=19 \\Rightarrow y=3$.\nStep 3: $x=\\frac{2(3)}{3}=2$, so $x+y=5$. Check: $2(2)+5(3)=19$ and $3(2)-2(3)=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports just $y$.\n* Choice C ($7$): an arithmetic slip when adding $x+y$.\n* Choice D ($9$): solves only the first equation, ignoring the second.\n\n**Test Day Takeaway:** When a system asks for a combination like $x+y$, solve for both variables first, then add — don't stop at one.",
  skills: ["systems-of-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A triangle in the $xy$-plane has vertices at $(0, 0)$, $(8, 0)$, and $(3, 6)$. What is the area of the triangle?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** The base runs along the $x$-axis from $(0,0)$ to $(8,0)$, length $8$. The height is the $y$-coordinate of $(3,6)$, which is $6$. Area $=\\frac{1}{2}(8)(6)=24$.\n\n**The Full Solution:**\nStep 1: Two vertices sit on the $x$-axis, so that side is the base: length $8$.\nStep 2: The height is the perpendicular distance from $(3,6)$ to the $x$-axis, namely $6$.\nStep 3: Area $=\\frac{1}{2}\\times 8\\times 6 = 24$. Coordinate check: $\\frac{1}{2}|0(0-6)+8(6-0)+3(0-0)|=\\frac{1}{2}|48|=24$. $\\checkmark$\n\n**Common Mistakes:** Forgetting the $\\frac{1}{2}$ and reporting $48$; using the third vertex's $x$-coordinate ($3$) as the height instead of its $y$-coordinate ($6$).\n\n**Test Day Takeaway:** When a triangle has a side on an axis, that side is the base and the height is the opposite vertex's distance to that axis.",
  skills: ["area", "coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 3x - 7$ and $f(a) = 20$, what is the value of $a$?",
  choices: [
    // distractor: solves $3a = 21$ instead of $3a = 27$
    { id: "A", text: "$7$" },
    // distractor: uses $3a - 7 = 20 \Rightarrow 3a = 24$
    { id: "B", text: "$8$" },
    { id: "C", text: "$9$" },
    // distractor: uses $2a = 20$ (wrong slope)
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $f(a)=20$ means $3a-7=20$, so $3a=27$ and $a=9$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $a$: $3a-7=20$.\nStep 2: $3a=27$, so $a=9$. Check: $f(9)=3(9)-7=20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): solves $3a=21$ instead of $3a=27$.\n* Choice B ($8$): uses $3a=24$, a sign or arithmetic slip on the $-7$.\n* Choice D ($10$): uses the wrong slope, solving $2a=20$.\n\n**Test Day Takeaway:** $f(a)=k$ just means substitute $a$ for $x$ and solve for $a$.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4^{x+1} = 8^x$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Write both sides as powers of $2$: $2^{2(x+1)}=2^{3x}$, so $2x+2=3x$ and $x=2$.\n\n**The Full Solution:**\nStep 1: $4=2^2$ and $8=2^3$, so $(2^2)^{x+1}=(2^3)^x$.\nStep 2: $2^{2x+2}=2^{3x}$.\nStep 3: Equal bases force equal exponents: $2x+2=3x \\Rightarrow x=2$. Check: $4^3=64=8^2$. $\\checkmark$\n\n**Common Mistakes:** Writing $8=2^2$ instead of $2^3$; distributing $2(x+1)$ as $2x+1$ instead of $2x+2$.\n\n**Test Day Takeaway:** Rewrite both exponentials with one common base, then set the exponents equal.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x + 3}{4} = \\dfrac{2x - 1}{6}$, what is the value of $x$?",
  choices: [
    // distractor: cross-multiplies as $4(x+3) = 6(2x-1)$, getting $-9$ then mis-signs
    { id: "A", text: "$7$" },
    // distractor: arithmetic error when combining like terms
    { id: "B", text: "$9$" },
    { id: "C", text: "$11$" },
    // distractor: applies the inverse operation — adds instead of subtracting $6x$
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion with Linear Expressions**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $6(x+3)=4(2x-1) \\Rightarrow 6x+18=8x-4 \\Rightarrow 22=2x$, so $x=11$.\n\n**The Full Solution:**\nStep 1: Cross-multiply $\\frac{x+3}{4}=\\frac{2x-1}{6}$ to get $6(x+3)=4(2x-1)$.\nStep 2: Expand: $6x+18=8x-4$.\nStep 3: Collect: $22=2x$, so $x=11$. Check: $\\frac{14}{4}=\\frac{7}{2}$ and $\\frac{21}{6}=\\frac{7}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): cross-multiplies the wrong pairs.\n* Choice B ($9$): an arithmetic error combining like terms.\n* Choice D ($13$): adds instead of subtracting when moving the $6x$ term.\n\n**Test Day Takeaway:** Cross-multiply, distribute fully, collect like terms — then plug back into the original proportion to confirm.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Two similar triangles have a scale factor of $3 : 5$. If the area of the smaller triangle is $27$ square centimeters, what is the area of the larger triangle, in square centimeters?",
  choices: [
    // distractor: applies linear scale factor only ($27 \cdot \\frac{5}{3} = 45$)
    { id: "A", text: "$45$" },
    { id: "B", text: "$75$" },
    // distractor: squares only the numerator ($27 \cdot 4 = 108$)
    { id: "C", text: "$108$" },
    // distractor: multiplies $27 \times 5 = 135$ (uses just one ratio number)
    { id: "D", text: "$135$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the linear factor: $\\left(\\frac{3}{5}\\right)^2=\\frac{9}{25}$. So $\\frac{27}{A}=\\frac{9}{25}$ gives $A=75$.\n\n**The Full Solution:**\nStep 1: Linear ratio small to large is $\\frac{3}{5}$, so the area ratio is $\\frac{9}{25}$.\nStep 2: $\\frac{27}{\\text{large}}=\\frac{9}{25}$.\nStep 3: Large area $=27\\cdot\\frac{25}{9}=3\\cdot 25=75$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): scales by the linear factor only ($27\\cdot\\frac{5}{3}$).\n* Choice C ($108$): squares the numerator alone, mishandling the ratio.\n* Choice D ($135$): multiplies $27\\times 5$, dropping the denominator.\n\n**Test Day Takeaway:** Area scales as the SQUARE of the linear factor; lengths and perimeters scale linearly.",
  skills: ["triangles", "area", "ratios"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A study of $12$ cities comparing population density ($x$, in thousands per square mile) and average commute time ($y$, in minutes) produces the line of best fit $y = 4.2x + 15$. One city has a population density of $5$ thousand per square mile and an actual average commute time of $32$ minutes. What is the residual for this city?",
  diagram: { type: "scatterplot", params: {
    points: [[1,22],[2,20],[3,30],[4,28],[6,42],[7,48],[8,44],[9,56],[10,52],[11,65]],
    xMin: 0, xMax: 12, yMin: 10, yMax: 70,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 10,
    bestFitLine: { slope: 4.2, intercept: 15 },
    highlightPoint: [5, 32], highlightLabel: "(5, 32)", showResidual: true,
    xLabel: "Population density (thousands per sq mi)", yLabel: "Commute time (minutes)",
  } },
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~15s):** Predicted $=4.2(5)+15=36$. Residual $=$ actual $-$ predicted $=32-36=-4$.\n\n**The Full Solution:**\nStep 1: Plug $x=5$ into the model: $\\hat{y}=4.2(5)+15=21+15=36$.\nStep 2: Residual $=$ actual $-$ predicted $=32-36=-4$.\nStep 3: A negative residual means the city sits below the line. Check: $36+(-4)=32$. $\\checkmark$\n\n**Common Mistakes:** Computing predicted $-$ actual and reporting $+4$; substituting the wrong $x$ into the model.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. The sign tells you whether the point is above (positive) or below (negative) the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Morning Shift | $45$ | $30$ | $75$ |\n| Evening Shift | $35$ | $40$ | $75$ |\n| Total | $80$ | $70$ | $150$ |\n\nAn employee is chosen at random. Given that the employee prefers tea, what is the probability that the employee works the evening shift?",
  choices: [
    // distractor: wrong base — uses the Evening Shift row total ($75$) as denominator
    { id: "A", text: "$\\dfrac{40}{75}$" },
    { id: "B", text: "$\\dfrac{40}{70}$" },
    // distractor: wrong base — uses the grand total ($150$) as denominator
    { id: "C", text: "$\\dfrac{40}{150}$" },
    // distractor: applies the inverse operation — gives $P(\text{Morning} | \text{Tea})$ instead
    { id: "D", text: "$\\dfrac{30}{70}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Given the employee prefers tea\" restricts you to the Tea column, whose total is $70$. The evening-shift tea drinkers number $40$, so the probability is $\\frac{40}{70}$.\n\n**The Full Solution:**\nStep 1: The condition \"prefers tea\" replaces the whole staff with just the Tea column. That column total, $70$, is your denominator.\nStep 2: Inside that column, count the evening-shift employees: $40$.\nStep 3: $P(\\text{Evening} \\mid \\text{Tea}) = \\frac{40}{70}$, which matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{40}{75}$): uses the Evening Shift row total ($75$) as the base instead of the Tea column total.\n* Choice C ($\\frac{40}{150}$): uses the grand total ($150$), the base for an unconditional probability.\n* Choice D ($\\frac{30}{70}$): right column, wrong row — this is $P(\\text{Morning} \\mid \\text{Tea})$.\n\n**Test Day Takeaway:** The word \"given\" names your denominator. Restrict to that group first, then count favorable outcomes inside it.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right circular cylinder has a radius of $6$ centimeters and a height of $7$ centimeters. The volume of the cylinder, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: forgets to square the radius — uses $\pi r h = 42\pi$
    { id: "A", text: "$42$" },
    // distractor: uses cone formula $\\frac{1}{3} \pi r^2 h$ instead of cylinder
    { id: "B", text: "$84$" },
    // distractor: doubles the radius before squaring (uses $r = 12$)
    { id: "C", text: "$1008$" },
    { id: "D", text: "$252$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (6)^2(7) = 36 \\cdot 7\\, \\pi = 252\\pi$, so $k = 252$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$ (on the Reference Sheet).\nStep 2: Substitute $r = 6$ and $h = 7$: $V = \\pi (6)^2(7) = \\pi(36)(7)$.\nStep 3: $36 \\times 7 = 252$, so $V = 252\\pi$ and $k = 252$, matching choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): uses $\\pi r h$ with $r$ to the first power ($6 \\times 7$) instead of squaring the radius.\n* Choice B ($84$): applies the cone formula $\\frac{1}{3}\\pi r^2 h$, cutting the result to a third.\n* Choice C ($1008$): doubles the radius to $12$ before squaring ($144 \\times 7$).\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height: $V = \\pi r^2 h$.",
  skills: ["volume", "geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The quadratic function $g(x) = ax^2 + bx + c$ has roots at $x = -1$ and $x = 5$, and its maximum value is $18$. What is the value of $a$?",
  choices: [
    // distractor: uses vertex at $x = 3$ instead of $x = 2$
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-2$" },
    // distractor: positive $a$ would give a minimum, not a maximum
    { id: "C", text: "$2$" },
    // distractor: same sign mistake as C, plus arithmetic
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic from Roots and Vertex Constraint**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Roots $-1$ and $5$ give $g(x) = a(x+1)(x-5)$, with vertex at the midpoint $x = 2$. Then $g(2) = a(3)(-3) = -9a = 18$, so $a = -2$.\n\n**The Full Solution:**\nStep 1: With roots at $x = -1$ and $x = 5$, write factored form $g(x) = a(x+1)(x-5)$.\nStep 2: The vertex sits at the midpoint of the roots: $x = \\frac{-1+5}{2} = 2$.\nStep 3: Evaluate there: $g(2) = a(2+1)(2-5) = a(3)(-3) = -9a$.\nStep 4: This equals the maximum value $18$: $-9a = 18 \\Rightarrow a = -2$. The negative $a$ confirms a downward parabola with a true maximum, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): uses the wrong vertex $x = 3$ instead of the midpoint $x = 2$.\n* Choice C ($2$): a positive $a$ produces a minimum, not a maximum.\n* Choice D ($3$): same sign error plus a slip in the arithmetic.\n\n**Test Day Takeaway:** From the roots, write factored form; the vertex sits at their midpoint. Plug that $x$ in and set the result equal to the max or min to solve for $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have no solution?\n\n$3x + my = 12$\n$6x - 4y = 7$",
  choices: [
    // distractor: solves $3m = -4$ (wrong cross-multiplication)
    { id: "A", text: "$-\\dfrac{4}{3}$" },
    { id: "B", text: "$-2$" },
    // distractor: applies the wrong sign — uses $m = +2$ (parallel slopes flipped)
    { id: "C", text: "$2$" },
    // distractor: stops one step early — uses ratio $\\frac{3}{6} = \\frac{1}{2}$
    { id: "D", text: "$\\dfrac{1}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No solution means parallel lines: equal slopes, different intercepts. The slope of $6x - 4y = 7$ is $\\frac{3}{2}$, and the slope of $3x + my = 12$ is $-\\frac{3}{m}$. Set them equal: $-\\frac{3}{m} = \\frac{3}{2} \\Rightarrow m = -2$.\n\n**The Full Solution:**\nStep 1: Read each slope from $ax + by = c$ as $-\\frac{a}{b}$. Line 2: $6x - 4y = 7$ has slope $-\\frac{6}{-4} = \\frac{3}{2}$.\nStep 2: Line 1: $3x + my = 12$ has slope $-\\frac{3}{m}$.\nStep 3: Parallel means equal slopes: $-\\frac{3}{m} = \\frac{3}{2} \\Rightarrow m = -2$, matching choice B.\nStep 4: At $m = -2$ the lines are $3x - 2y = 12$ and $6x - 4y = 7$. Doubling the first gives $6x - 4y = 24 \\neq 7$, so they are parallel but distinct — truly no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): inverts the coefficient ratio when matching slopes.\n* Choice C ($2$): drops the negative sign in the slope equation.\n* Choice D ($\\frac{1}{2}$): reports the coefficient ratio $\\frac{3}{6}$ instead of solving for $m$.\n\n**Test Day Takeaway:** Two linear equations have no solution exactly when their slopes match but their intercepts differ. Match slopes first, then confirm the constants disagree.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = x^2 - 10x + 21$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
  choices: [
    // distractor: miscomputes one root as $5$ and uses $|7-5|$
    { id: "A", text: "$2$" },
    { id: "B", text: "$4$" },
    // distractor: uses sum of roots minus 4 ($10 - 4 = 6$)
    { id: "C", text: "$6$" },
    // distractor: applies the inverse operation — uses sum of roots ($3 + 7 = 10$) instead of difference
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Factor $x^2 - 10x + 21 = (x-3)(x-7)$, so the $x$-intercepts are $3$ and $7$. The distance is $|7 - 3| = 4$.\n\n**The Full Solution:**\nStep 1: The graph crosses the $x$-axis where $y = 0$, so solve $x^2 - 10x + 21 = 0$.\nStep 2: Factor: $(x-3)(x-7) = 0$, giving $x = 3$ and $x = 7$.\nStep 3: The points are $A = (3, 0)$ and $B = (7, 0)$; since they share the same $y$, the length of $\\overline{AB}$ is just $|7 - 3| = 4$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): mis-factors one root (e.g. as $5$) and subtracts to get $2$.\n* Choice C ($6$): subtracts $4$ from the sum of the roots ($10 - 4$) rather than finding the difference of the roots.\n* Choice D ($10$): reports the sum of the roots instead of their difference.\n\n**Test Day Takeaway:** Factor to find the roots, then take the absolute difference. The distance between two $x$-intercepts is $|x_2 - x_1|$.",
  skills: ["quadratic-equations", "factoring", "coordinate-geometry"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $x^2 + y^2 - 6x + 4y = 12$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Complete the square in both variables: $(x-3)^2 + (y+2)^2 = 25$, so $(h, k, r) = (3, -2, 5)$ and $h + k + r = 6$.\n\n**The Full Solution:**\nStep 1: Group: $(x^2 - 6x) + (y^2 + 4y) = 12$.\nStep 2: Complete each square, adding the same constants to both sides: half of $-6$ squared is $9$; half of $4$ squared is $4$. So $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$.\nStep 3: This is $(x-3)^2 + (y+2)^2 = 25$, so the center is $(h, k) = (3, -2)$ and $r = \\sqrt{25} = 5$.\nStep 4: $h + k + r = 3 + (-2) + 5 = 6$.\n\n**Common Mistakes:** Forgetting to add the completing-the-square constants to the right side; reading the center as $(3, 2)$ instead of $(3, -2)$ from $(y+2)^2$; reporting $r = 25$ instead of $r = \\sqrt{25} = 5$.\n\n**Test Day Takeaway:** Complete the square symmetrically for both variables. The center carries the sign-flipped offsets, and the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt{5x + 11} = x + 1$, what is the sum of all real solutions?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Radical Equation with Potential Extraneous Solution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Square both sides to get a quadratic, solve it, then check each root in the original — only $x = 5$ survives, so the sum is $5$.\n\n**The Full Solution:**\nStep 1: Square both sides: $5x + 11 = (x+1)^2 = x^2 + 2x + 1$.\nStep 2: Rearrange: $x^2 - 3x - 10 = 0$, which factors as $(x-5)(x+2) = 0$, so $x = 5$ or $x = -2$.\nStep 3: Check $x = 5$: $\\sqrt{5(5)+11} = \\sqrt{36} = 6$ and $5 + 1 = 6$. Valid.\nStep 4: Check $x = -2$: $\\sqrt{5(-2)+11} = \\sqrt{1} = 1$ but $-2 + 1 = -1 \\neq 1$. Extraneous — reject it.\nStep 5: The only real solution is $x = 5$, so the sum of all real solutions is $5$.\n\n**Common Mistakes:** Adding both roots to get $3$ without checking; expanding $(x+1)^2$ as $x^2 + 1$ and dropping the $2x$ middle term.\n\n**Test Day Takeaway:** Squaring can introduce false roots. Always substitute each candidate back into the ORIGINAL radical equation and keep only the ones that check.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $3x^2 + kx + 12 = 0$ has no real solutions. Which of the following could be the value of $k$?",
  choices: [
    // distractor: $k = -13$ gives discriminant $> 0$ (two real solutions)
    { id: "A", text: "$-13$" },
    // distractor: $k = -12$ gives discriminant exactly zero (one solution, not none)
    { id: "B", text: "$-12$" },
    { id: "C", text: "$11$" },
    // distractor: $k = 12$ also gives discriminant zero
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** No real solutions means a negative discriminant: $k^2 - 4(3)(12) < 0 \\Rightarrow k^2 < 144 \\Rightarrow -12 < k < 12$. Only $k = 11$ lands strictly inside, so choice C.\n\n**The Full Solution:**\nStep 1: For $3x^2 + kx + 12 = 0$, the discriminant is $k^2 - 4ac = k^2 - 4(3)(12) = k^2 - 144$.\nStep 2: No real solutions requires it to be strictly negative: $k^2 - 144 < 0$, so $k^2 < 144$, i.e. $-12 < k < 12$.\nStep 3: Test the choices. $k = 11$ gives $121 - 144 = -23 < 0$ — no real solutions, matching choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): $(-13)^2 = 169 > 144$, so the discriminant is positive — two real solutions.\n* Choice B ($-12$): $(-12)^2 = 144$ makes the discriminant exactly $0$ — one repeated solution, not none.\n* Choice D ($12$): $12^2 = 144$, again discriminant $0$ — one solution, on the boundary.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ strictly. At discriminant $= 0$ there is exactly one (repeated) real solution.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola with equation $y = a(x - h)^2 + k$, where $a < 0$, has its vertex in the first quadrant and passes through the origin and the point $(8, 0)$. If the maximum value of $y$ is $48$, what is the value of $h + k$?",
  choices: [
    // distractor: gives just $k = 48$, forgetting to add $h$
    { id: "A", text: "$48$" },
    { id: "B", text: "$52$" },
    // distractor: uses $h = 8$ (an endpoint instead of the midpoint)
    { id: "C", text: "$56$" },
    // distractor: adds $16 + 48 = 64$, confusing $h^2$ with $h$
    { id: "D", text: "$64$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The $x$-intercepts $0$ and $8$ put the vertex at their midpoint $x = 4$, so $h = 4$. Since $a < 0$, the max value $48$ is $k$. Thus $h + k = 4 + 48 = 52$.\n\n**The Full Solution:**\nStep 1: Passing through $(0,0)$ and $(8,0)$ means the $x$-intercepts are $0$ and $8$.\nStep 2: The vertex's $x$-coordinate is the midpoint of the intercepts: $\\frac{0+8}{2} = 4$, so $h = 4$.\nStep 3: Because $a < 0$, the vertex is the maximum, so $k = 48$.\nStep 4: $h + k = 4 + 48 = 52$, matching choice B. (Plugging $(0,0)$ into $y = a(x-4)^2 + 48$ gives $16a + 48 = 0$, so $a = -3 < 0$ — consistent.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): reports just $k$ and forgets to add $h$.\n* Choice C ($56$): uses $h = 8$ (an intercept) instead of the midpoint $h = 4$.\n* Choice D ($64$): adds $16 + 48$, confusing $(x-4)^2$'s $16$ with $h$.\n\n**Test Day Takeaway:** A parabola's vertex sits at the midpoint of its $x$-intercepts, and $k$ in vertex form is its max or min value.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have infinitely many solutions?\n\n$6x - 9y = 12$\n$-2x + 3y = m$",
  choices: [
    // distractor: uses multiplier of $-2$ instead of $-3$
    { id: "A", text: "$-6$" },
    { id: "B", text: "$-4$" },
    // distractor: drops the negative sign — solves $3m = 12$
    { id: "C", text: "$4$" },
    // distractor: uses multiplier of $2$ from comparing coefficients incorrectly
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Infinitely many solutions means the equations are scalar multiples. Multiply $-2x + 3y = m$ by $-3$ to get $6x - 9y = -3m$; matching the first equation gives $-3m = 12$, so $m = -4$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions, the two equations must describe the same line — one is a scalar multiple of the other.\nStep 2: The $x$-coefficients go from $-2$ to $6$, a factor of $-3$. Multiply the second equation by $-3$: $6x - 9y = -3m$.\nStep 3: This must match $6x - 9y = 12$, so $-3m = 12 \\Rightarrow m = -4$, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): uses a multiplier of $-2$ instead of $-3$.\n* Choice C ($4$): drops the negative and solves $3m = 12$.\n* Choice D ($6$): uses a multiplier of $2$ from mismatching the coefficients.\n\n**Test Day Takeaway:** Infinitely many solutions means the equations are the SAME line. Find the factor that aligns the $x$- and $y$-coefficients, then apply it to the constant to solve for the parameter.",
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
// mediums at Q3/Q4/Q5/Q10/Q11/Q14/Q19, hards at Q6/Q7/Q9/Q12/Q13/Q15/Q16/Q17/Q18/Q20/Q21/Q22.
// Pool infusions (transformed): successive percent (D-p31#22 -> Q5), no-solution system
// (D-p15#27 -> Q6), radical-function parameter (D-p37#24 -> Q9), composite prism surface
// area (D-p21#26 -> Q15), matching-coefficient factor (D-p42#25 -> Q16), equilateral
// circumradius (D-p40#27 -> Q17), discriminant no-real-solutions (E#13 -> Q18), line-parabola
// substitution greatest-x (E#9 -> Q19), radical-product exponent simplification (D-p16#21 -> Q21),
// inscribed-rectangle 30-60-90 diameter (D-p27#21 -> Q22). Q1 is a fresh Pythagorean-hypotenuse
// opener (non-simplifying surd). Palette: apiary scales, canoe rentals, neon-sign fabrication,
// library archives, telescope mirrors, sled-dog training, bare-math algebra/geometry.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs of length $5$ and $9$. What is the length of the hypotenuse?",
  choices: [
    // distractor: subtracts the squared legs instead of adding them
    { id: "A", text: "$\\sqrt{56}$" },
    { id: "B", text: "$\\sqrt{106}$" },
    // distractor: sums the legs directly, ignoring the Pythagorean relationship
    { id: "C", text: "$14$" },
    // distractor: computes the sum of the squares but forgets to take the square root
    { id: "D", text: "$106$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c = \\sqrt{5^2 + 9^2} = \\sqrt{25 + 81} = \\sqrt{106}$. Since $106 = 2 \\cdot 53$ has no perfect-square factor, $\\sqrt{106}$ is already simplest, matching choice B.\n\n**The Full Solution:**\nStep 1: For a right triangle, the hypotenuse satisfies $c^2 = a^2 + b^2$ with the legs $a$ and $b$.\nStep 2: $c^2 = 5^2 + 9^2 = 25 + 81 = 106$.\nStep 3: $c = \\sqrt{106}$. Checking for simplification, $106 = 2 \\cdot 53$ has no perfect-square factor, so $\\sqrt{106}$ stays as is, matching choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{56}$): subtracts the squared legs ($81 - 25$) instead of adding them.\n* Choice C ($14$): adds the legs directly ($5 + 9$) without squaring.\n* Choice D ($106$): finds $a^2 + b^2 = 106$ but forgets to take the square root.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — add the squares of the legs, then take the root. Check whether the radicand has a perfect-square factor before assuming it simplifies.",
  skills: ["geometry", "right-triangles", "pythagorean-theorem"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A technician polishes a telescope mirror, removing a thin film of coating with each pass of the polishing arm. The function $M(n) = -0.4n + 120$ gives the thickness, in micrometers, of coating remaining on the mirror after $n$ polishing passes. Which statement is the best interpretation of the $y$-intercept of the graph of $y = M(n)$ in the $ny$-plane in this context?",
  choices: [
    // distractor: wrong base and wrong unit — treats the initial total as a per-pass rate
    { id: "A", text: "The mirror lost about $120$ micrometers of coating with each polishing pass." },
    // distractor: swaps slope and intercept — uses the rate's magnitude as the starting amount
    { id: "B", text: "The mirror had about $0.4$ micrometers of coating before polishing began." },
    { id: "C", text: "The mirror had about $120$ micrometers of coating before polishing began." },
    // distractor: correct description of the slope, but the question asks about the intercept
    { id: "D", text: "The mirror lost about $0.4$ micrometers of coating with each polishing pass." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $M(0) = 120$. At $n = 0$, no passes have happened yet, so the mirror started with about $120$ micrometers of coating, matching choice C.\n\n**The Full Solution:**\nStep 1: In $M(n) = -0.4n + 120$, the $y$-intercept is the constant $120$, the value when $n = 0$.\nStep 2: Here $n$ counts polishing passes, so $n = 0$ means before any polishing began.\nStep 3: Therefore the mirror started with roughly $120$ micrometers of coating, matching choice C. (The slope $-0.4$ is the rate removed per pass, which is a different quantity.)\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the starting total $120$ as a per-pass rate — that would strip the coating in a single pass.\n* Choice B: uses the slope's magnitude $0.4$ as the starting amount.\n* Choice D: correctly describes the rate ($0.4$ per pass), but the question asks for the $y$-intercept, not the slope.\n\n**Test Day Takeaway:** In $f(n) = mn + b$ word problems, $b$ (the $y$-intercept) is the initial value at $n = 0$ and $m$ (the slope) is the per-unit rate. Read the wording to know which one is asked.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $\\dfrac{a}{x - 2} = \\dfrac{3x}{x - 2} + 5$ has no solution. What is the value of $a$?",
  choices: [
    { id: "A", text: "$6$" },
    // distractor: computes $3(2) + 5 = 11$, substituting into the wrong expression
    { id: "B", text: "$11$" },
    // distractor: uses $a + 10 = 16$ but forgets to subtract $10$
    { id: "C", text: "$16$" },
    // distractor: sign error on the final step
    { id: "D", text: "$-4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Clear the denominator: $a = 3x + 5(x-2) = 8x - 10$, so the only root is $x = \\frac{a+10}{8}$. The equation has no solution exactly when that root is the forbidden value $x = 2$: $a = 8(2) - 10 = 6$.\n\n**The Full Solution:**\nStep 1: The denominator $x - 2$ is zero at $x = 2$, so $x = 2$ is excluded.\nStep 2: Multiply both sides by $(x-2)$: $a = 3x + 5(x-2) = 3x + 5x - 10 = 8x - 10$.\nStep 3: Solve for $x$: $x = \\frac{a+10}{8}$. This is a single, unique root.\nStep 4: For no solution, that root must land on the excluded value: $\\frac{a+10}{8} = 2 \\Rightarrow a + 10 = 16 \\Rightarrow a = 6$.\nStep 5: Check: with $a = 6$ the equation forces $x = 2$, which is barred, so there is truly no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): plugs $x=2$ into $3x+5$ instead of into $8x-10$.\n* Choice C ($16$): stops at $a + 10 = 16$ and forgets to subtract $10$.\n* Choice D ($-4$): sign error on the final step, solving $a + 10 = 16$ as $a = 6 - 10$.\n\n**Test Day Takeaway:** A rational equation has no solution when its only algebraic root equals an excluded value. Find the excluded $x$, set the root equal to it, and solve for the parameter.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the point $(2, -1)$ and is perpendicular to the line $4x - 3y = 12$. What is the $y$-intercept of this line?",
  choices: [
    { id: "A", text: "$\\dfrac{1}{2}$" },
    // distractor: sign error in the final arithmetic
    { id: "B", text: "$-\\dfrac{1}{2}$" },
    // distractor: uses the original slope instead of the perpendicular one
    { id: "C", text: "$\\dfrac{7}{4}$" },
    // distractor: multiple sign and arithmetic slips
    { id: "D", text: "$-\\dfrac{7}{4}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The given line has slope $\\frac{4}{3}$, so the perpendicular slope is $-\\frac{3}{4}$. Through $(2,-1)$: $y = -\\frac{3}{4}(x-2) - 1$, and the constant term is $\\frac{3}{2} - 1 = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite $4x - 3y = 12$ as $y = \\frac{4}{3}x - 4$, so its slope is $\\frac{4}{3}$.\nStep 2: The perpendicular slope is the negative reciprocal: $-\\frac{3}{4}$.\nStep 3: Use point-slope through $(2,-1)$: $y + 1 = -\\frac{3}{4}(x - 2) = -\\frac{3}{4}x + \\frac{3}{2}$.\nStep 4: Solve for $y$: $y = -\\frac{3}{4}x + \\frac{3}{2} - 1 = -\\frac{3}{4}x + \\frac{1}{2}$. The $y$-intercept is $\\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): sign slip on $\\frac{3}{2} - 1$, treating it as $-\\frac{1}{2}$.\n* Choice C ($\\frac{7}{4}$): uses the original slope $\\frac{4}{3}$ instead of the perpendicular slope.\n* Choice D ($-\\frac{7}{4}$): combines the wrong-slope error with a sign error.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals — flip the fraction and change the sign — then use point-slope and simplify to read off the intercept.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At Idris's apiary, the spring honey harvest was $12\\%$ larger than the winter harvest, and the summer harvest was $5\\%$ larger than the spring harvest. If the summer harvest was $y$ times the winter harvest, what is the value of $y$?",
  choices: [
    // distractor: averages the two percents instead of compounding them
    { id: "A", text: "$1.0850$" },
    // distractor: adds the percents (12% + 5% = 17%) instead of multiplying the factors
    { id: "B", text: "$1.1700$" },
    { id: "C", text: "$1.1760$" },
    // distractor: multiplies the first growth factor by the second RATE (1.12 * 0.05) instead of the second growth factor, then adds 1
    { id: "D", text: "$1.0560$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Two successive increases multiply their growth factors: $y = (1.12)(1.05) = 1.176$.\n\n**The Full Solution:**\nStep 1: Let the winter harvest be $W$. A $12\\%$ increase gives spring $= 1.12W$.\nStep 2: A further $5\\%$ increase gives summer $= 1.05(1.12W) = 1.176W$.\nStep 3: Since summer $= y \\cdot W$, we read off $y = 1.176$.\nA $12\\%$ then $5\\%$ rise beats a flat $17\\%$ because the second increase also acts on the first, so $1.176 > 1.17$ confirms the answer. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.0850$): averages the two rates as $\\frac{12 + 5}{2} = 8.5\\%$.\n* Choice B ($1.1700$): adds the percents ($12\\% + 5\\% = 17\\%$) instead of compounding the factors.\n* Choice D ($1.0560$): multiplies $1.12$ by the bare rate $0.05$ and adds $1$, getting $1.056$.\n\n**Test Day Takeaway:** Successive percent changes compound — multiply the growth factors $(1 + r_1)(1 + r_2)$. Adding the percents always undercounts.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the system below, $p$ is a constant and the system has no solution.\n\n$\\dfrac{3}{4}y - \\dfrac{1}{2}x = \\dfrac{1}{5} - \\dfrac{3}{4}y$\n$\\dfrac{1}{2}x + 3 = py + 8$\n\nWhat is the value of $p$?",
  correctAnswer: "3/2",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\frac{3}{2}$ (or $1.5$).**\n\n**The Fast Way (~50s):** Put each line in slope form. The first becomes $\\frac{3}{2}y = \\frac{1}{2}x + \\frac{1}{5}$, slope $\\frac{1}{3}$. The second becomes $py = \\frac{1}{2}x - 5$, slope $\\frac{1}{2p}$. No solution means equal slopes: $\\frac{1}{3} = \\frac{1}{2p} \\Rightarrow 2p = 3 \\Rightarrow p = \\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: In equation 1, move both $\\frac{3}{4}y$ terms left: $\\frac{3}{4}y + \\frac{3}{4}y = \\frac{3}{2}y$, giving $\\frac{3}{2}y = \\frac{1}{2}x + \\frac{1}{5}$. Divide by $\\frac{3}{2}$: $y = \\frac{1}{3}x + \\frac{2}{15}$, slope $\\frac{1}{3}$.\nStep 2: In equation 2, $\\frac{1}{2}x + 3 = py + 8 \\Rightarrow py = \\frac{1}{2}x - 5$, so $y = \\frac{1}{2p}x - \\frac{5}{p}$, slope $\\frac{1}{2p}$.\nStep 3: A linear system has no solution when the lines are parallel but distinct — equal slopes, different intercepts: $\\frac{1}{3} = \\frac{1}{2p} \\Rightarrow 2p = 3 \\Rightarrow p = \\frac{3}{2}$.\nStep 4: Confirm the intercepts differ: with $p = \\frac{3}{2}$, line 2's intercept is $-\\frac{5}{p} = -\\frac{10}{3}$, versus line 1's $\\frac{2}{15}$ — distinct, so the lines never meet. $\\checkmark$\n\n**Common Mistakes:** Leaving the first equation as $\\frac{3}{4}y$ instead of combining both terms into $\\frac{3}{2}y$; or equating reciprocals of the slopes, which gives the trap value $p = \\frac{2}{3}$.\n\n**Test Day Takeaway:** A linear system has no solution exactly when the lines are parallel and distinct. Put each in slope-intercept form, set the slopes equal, solve for the parameter, then check the intercepts actually differ.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $x^2 + y^2 = 100$ and $xy = 36$, what is the value of $(x + y)^2$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~15s):** $(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 100 + 2(36) = 172$.\n\n**The Full Solution:**\nStep 1: Expand the identity: $(x+y)^2 = x^2 + 2xy + y^2$.\nStep 2: Substitute the given values $x^2 + y^2 = 100$ and $xy = 36$.\nStep 3: $(x+y)^2 = 100 + 2(36) = 100 + 72 = 172$.\n\n**Common Mistakes:** Trying to solve for $x$ and $y$ separately, which is unnecessary; or writing $(x+y)^2 = x^2 + y^2 = 100$ and dropping the $2xy$ middle term.\n\n**Test Day Takeaway:** Memorize $(x+y)^2 = x^2 + 2xy + y^2$ and $(x-y)^2 = x^2 - 2xy + y^2$. When a problem gives $x^2 + y^2$ and $xy$, you rarely need the individual values.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At an apiary, Wren records the number of bees leaving a hive each morning over six days: $18$, $25$, $22$, $31$, $19$, $27$. What is the range of these six values?",
  choices: [
    // distractor: reports the maximum value instead of the range
    { id: "A", text: "$31$" },
    { id: "B", text: "$13$" },
    // distractor: gives the median of the data set instead of the range
    { id: "C", text: "$23.5$" },
    // distractor: rounds the mean of the data set
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 31 - 18 = 13$.\n\n**The Full Solution:**\nStep 1: The range is the largest value minus the smallest value.\nStep 2: Scanning $18, 25, 22, 31, 19, 27$: the largest is $31$ and the smallest is $18$.\nStep 3: Range $= 31 - 18 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($31$): reports the maximum alone without subtracting the minimum.\n* Choice C ($23.5$): gives the median — the average of the two middle values $22$ and $25$.\n* Choice D ($24$): rounds the mean, $\\frac{142}{6} \\approx 23.67$, instead of finding the range.\n\n**Test Day Takeaway:** Range is a single subtraction, max $-$ min. Don't confuse it with the mean or median.",
  skills: ["statistics"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Constants $a$ and $b$ define the function $g(x) = a\\sqrt{x + b}$. Its graph in the $xy$-plane has an $x$-intercept at $(-21, 0)$, and $g(21)$ is negative. Which statement must be true?",
  choices: [
    // distractor: reads the x-intercept's magnitude as an output value of g
    { id: "A", text: "$g(0) = 21$" },
    // distractor: pins g(0) to a value that depends on the undetermined magnitude of a
    { id: "B", text: "$g(0) = -21$" },
    { id: "C", text: "$a < b$" },
    // distractor: reverses the inequality after correctly finding a is negative
    { id: "D", text: "$a > b$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The $x$-intercept at $x = -21$ forces the radicand to vanish there, so $b = 21$. Then $g(21) = a\\sqrt{42} < 0$ forces $a < 0$. A negative $a$ is less than the positive $b = 21$, so $a < b$.\n\n**The Full Solution:**\nStep 1: An $x$-intercept at $(-21, 0)$ means $g(-21) = a\\sqrt{-21 + b} = 0$. Since $a \\neq 0$ (otherwise $g$ is constant $0$ and could not be negative anywhere), the radicand must be zero: $-21 + b = 0 \\Rightarrow b = 21$.\nStep 2: Now $g(21) = a\\sqrt{21 + 21} = a\\sqrt{42}$. Because $\\sqrt{42} > 0$ and $g(21) < 0$, it follows that $a < 0$.\nStep 3: With $a < 0$ and $b = 21 > 0$, we have $a < 0 < b$, so $a < b$ must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(0) = 21$): $g(0) = a\\sqrt{21}$ depends on the unknown magnitude of $a$, so it cannot be pinned to $21$.\n* Choice B ($g(0) = -21$): same flaw — $g(0)$ is not determined, only its sign.\n* Choice D ($a > b$): correctly deduces $a < 0$ but then flips the inequality against $b = 21$.\n\n**Test Day Takeaway:** A zero of $a\\sqrt{x + b}$ comes from the radicand, which fixes $b$. A sign condition on another output then fixes the sign of $a$. Compare the two determined facts to test each statement.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The arc of a neon sign is modeled by $y = a(x - h)^2 + k$. Its highest point is the vertex $(2, 5)$, and the curve passes through the point $(4, -3)$. What is the value of $a$?",
  choices: [
    // distractor: drops the negative sign on the leading coefficient
    { id: "A", text: "$2$" },
    { id: "B", text: "$-2$" },
    // distractor: divides $-8$ by $2$ instead of by $4$
    { id: "C", text: "$-4$" },
    // distractor: inverts the final division
    { id: "D", text: "$-\\dfrac{1}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex $(2,5)$ gives $y = a(x-2)^2 + 5$. Plug in $(4,-3)$: $-3 = 4a + 5 \\Rightarrow a = -2$.\n\n**The Full Solution:**\nStep 1: Read $h$ and $k$ off the vertex: $h = 2$, $k = 5$, so $y = a(x-2)^2 + 5$.\nStep 2: Substitute the point $(4, -3)$: $-3 = a(4-2)^2 + 5 = 4a + 5$.\nStep 3: Solve: $4a = -8 \\Rightarrow a = -2$.\nA negative $a$ fits the picture: the vertex is the highest point, so the parabola opens downward. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): keeps $a$ positive after $|4a| = 8$, contradicting the downward arc.\n* Choice C ($-4$): divides $-8$ by $2$ instead of by $4 = (4-2)^2$.\n* Choice D ($-\\frac{1}{2}$): inverts the final division, computing $\\frac{4}{-8}$ instead of $\\frac{-8}{4}$.\n\n**Test Day Takeaway:** Plug the vertex straight into $a(x-h)^2 + k$, then use the second point to solve for $a$. A maximum vertex means $a < 0$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the function $f(x) = 3x^2 - kx + 5$, it is given that $f(2) = -3$. What is the value of $k$?",
  choices: [
    // distractor: divides 20 by 5 (the constant term) instead of by 2
    { id: "A", text: "$4$" },
    // distractor: forgets the constant 5, solving 12 - 2k = -3
    { id: "B", text: "$7.5$" },
    { id: "C", text: "$10$" },
    // distractor: stops one step early — reports 2k instead of k
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $f(2) = 12 - 2k + 5 = 17 - 2k = -3$, so $2k = 20$ and $k = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $f(2) = 3(2)^2 - k(2) + 5 = 12 - 2k + 5 = 17 - 2k$.\nStep 2: Set equal to the given output: $17 - 2k = -3$.\nStep 3: Solve: $2k = 20 \\Rightarrow k = 10$.\nCheck: $f(2) = 12 - 10(2) + 5 = 12 - 20 + 5 = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides $20$ by $5$ instead of by $2$.\n* Choice B ($7.5$): drops the constant $5$, solving $12 - 2k = -3$.\n* Choice D ($20$): reports $2k$ instead of $k$.\n\n**Test Day Takeaway:** Substitute the given input, combine the constants carefully, and solve for the unknown coefficient — then back-check.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A linear function $g$ satisfies $g(0) = 10$ and $g(5) = 0$. What is the value of $g(8) + 2 \\cdot g(3)$?",
  choices: [
    // distractor: stops one step early — gives $g(8) = -6$ alone
    { id: "A", text: "$-6$" },
    { id: "B", text: "$2$" },
    // distractor: uses slope $-1$ instead of $-2$
    { id: "C", text: "$8$" },
    // distractor: applies the inverse operation — adds $g(8) + g(3)$ instead of $g(8) + 2 g(3)$
    { id: "D", text: "$-2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\frac{0 - 10}{5 - 0} = -2$, so $g(x) = -2x + 10$. Then $g(8) = -6$ and $g(3) = 4$, giving $-6 + 2(4) = 2$.\n\n**The Full Solution:**\nStep 1: From $(0, 10)$ and $(5, 0)$: slope $= \\frac{0 - 10}{5 - 0} = -2$, and $g(0) = 10$ is the $y$-intercept.\nStep 2: So $g(x) = -2x + 10$.\nStep 3: $g(8) = -16 + 10 = -6$ and $g(3) = -6 + 10 = 4$.\nStep 4: Combine as asked: $g(8) + 2 \\cdot g(3) = -6 + 2(4) = -6 + 8 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): reports $g(8)$ alone and stops.\n* Choice C ($8$): uses slope $-1$ instead of $-2$.\n* Choice D ($-2$): adds $g(8) + g(3) = -6 + 4$ without doubling $g(3)$.\n\n**Test Day Takeaway:** Two points give the slope, the slope and intercept give the equation — then evaluate the full expression exactly as written.",
  skills: ["linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $(4, -1)$ and is tangent to the line $y = 2$. A point on the circle has coordinates $(4, k)$ where $k < -1$. What is the value of $k$?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~25s):** The center $(4,-1)$ sits a vertical distance $|2 - (-1)| = 3$ from the tangent line $y = 2$, so $r = 3$. The point $(4, k)$ is directly below the center: $k = -1 - 3 = -4$.\n\n**The Full Solution:**\nStep 1: The line $y = 2$ is horizontal, so its distance from the center $(4, -1)$ is $|2 - (-1)| = 3$. Tangency makes this the radius: $r = 3$.\nStep 2: The circle is $(x - 4)^2 + (y + 1)^2 = 9$.\nStep 3: For $(4, k)$: $(4 - 4)^2 + (k + 1)^2 = 9 \\Rightarrow (k+1)^2 = 9 \\Rightarrow k + 1 = \\pm 3$, so $k = 2$ or $k = -4$.\nStep 4: The condition $k < -1$ selects $k = -4$.\n\n**Common Mistakes:** Picking $k = 2$ (the upper tangent point) instead of the lower one; or computing the distance as $|2 - 1| = 1$ rather than $|2 - (-1)| = 3$.\n\n**Test Day Takeaway:** A circle tangent to a horizontal line has radius equal to the vertical distance from center to line, and the tangent point sits directly above or below the center.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $5x + 3 = 28$, what is the value of $15x - 6$?",
  choices: [
    // distractor: gives 5x = 25 and stops
    { id: "A", text: "$25$" },
    // distractor: triples 28 to 84 but forgets to subtract 15
    { id: "B", text: "$84$" },
    { id: "C", text: "$69$" },
    // distractor: solves x = 5 and reports it
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $15x - 6 = 3(5x + 3) - 15 = 3(28) - 15 = 84 - 15 = 69$. No need to find $x$.\n\n**The Full Solution:**\nStep 1: Notice the target is a scaled, shifted copy of the given expression: $15x - 6 = 3(5x + 3) - 15$.\nStep 2: Substitute $5x + 3 = 28$: $15x - 6 = 3(28) - 15 = 84 - 15 = 69$.\nStep 3 (check by solving): $5x + 3 = 28 \\Rightarrow x = 5$, so $15(5) - 6 = 75 - 6 = 69$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): reports $5x = 25$ without tripling or subtracting.\n* Choice B ($84$): triples $28$ but forgets the $-15$ adjustment.\n* Choice D ($5$): solves for $x$ and reports $x = 5$ instead of the expression.\n\n**Test Day Takeaway:** Before solving for $x$, check whether the target is a scalar multiple of the given equation, possibly shifted. Often you can skip finding $x$ entirely.",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms are fabricated for a neon-sign mount. Each has a height of $75$ centimeters, a square base, and a total surface area of $K$ square centimeters. When the two prisms are joined face-to-face along a full square base, the resulting single prism has a total surface area of $\\dfrac{7}{4}K$ square centimeters. What is the side length, in centimeters, of each square base?",
  choices: [
    // distractor: arithmetic slip — divides 300 by 12 when factoring 6s^2 - 300s = 0
    { id: "A", text: "$25$" },
    { id: "B", text: "$50$" },
    // distractor: reports the prism's height instead of the base side length
    { id: "C", text: "$75$" },
    // distractor: doubles the solved side, confusing it with a combined dimension
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~60s):** Write each surface area in terms of the base side $s$. One prism: $K = 2s^2 + 4s(75) = 2s^2 + 300s$. Joined, the two glued square faces vanish and the height becomes $150$, so its area is $2s^2 + 4s(150) = 2s^2 + 600s = \\frac{7}{4}K$. Setting $2s^2 + 600s = \\frac{7}{4}(2s^2 + 300s)$ collapses to $6s^2 - 300s = 0$, so $s = 50$.\n\n**The Full Solution:**\nStep 1: A single prism has two square bases of area $s^2$ and four lateral rectangles of area $s \\cdot 75$:\n$$K = 2s^2 + 4 \\cdot s \\cdot 75 = 2s^2 + 300s.$$\nStep 2: Joining the two prisms along a full square base hides those two glued faces and merges them into one prism of height $150$. Its surface area is again two square bases plus four taller lateral rectangles:\n$$2s^2 + 4 \\cdot s \\cdot 150 = 2s^2 + 600s = \\frac{7}{4}K.$$\nStep 3: Substitute $K$ and clear the fraction by multiplying both sides by $4$:\n$$8s^2 + 2400s = 14s^2 + 2100s \\Rightarrow 6s^2 - 300s = 0 \\Rightarrow 6s(s - 50) = 0.$$\nStep 4: Since $s > 0$, $s = 50$. Check: $K = 2(2500) + 300(50) = 20000$ and the joined solid is $5000 + 600(50) = 35000 = \\frac{7}{4}(20000)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): factors $6s^2 - 300s = 0$ but divides $300$ by $12$ instead of $6$.\n* Choice C ($75$): reports the given height instead of the base side.\n* Choice D ($100$): doubles the correct side, treating it as a combined dimension.\n\n**Test Day Takeaway:** Gluing two solids along a face REMOVES both shared faces from the total surface area and merges the dimension along that axis. Write each surface area as a function of the unknown, then solve the resulting equation.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the expressions below, $b$ is a positive integer constant. Which expression has $x + 3b$ as a factor?",
  choices: [
    // distractor: gives b = 10/12, not an integer — middle coefficient too small
    { id: "A", text: "$4x^2 + 14x + 12b$" },
    // distractor: gives b = 1.5, not an integer
    { id: "B", text: "$4x^2 + 22x + 12b$" },
    // distractor: gives b = 26/12, not an integer
    { id: "C", text: "$4x^2 + 30x + 12b$" },
    { id: "D", text: "$4x^2 + 40x + 12b$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Matching Coefficients in Factored Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Every expression has the form $4x^2 + Mx + 12b$. If $x + 3b$ is a factor, the other factor must be $4x + 4$ — the leading $4x^2$ forces the $4x$, and the constant $3b \\cdot 4 = 12b$ forces the $4$. Expanding $(x + 3b)(4x + 4) = 4x^2 + (4 + 12b)x + 12b$, so $M = 4 + 12b$ and $b = \\frac{M - 4}{12}$. Only $M = 40$ gives an integer $b = 3$.\n\n**The Full Solution:**\nStep 1: For $x + 3b$ to divide $4x^2 + Mx + 12b$, write the second factor as $4x + c$ (the $4x$ is fixed by the leading term). Then\n$$(x + 3b)(4x + c) = 4x^2 + (c + 12b)x + 3bc.$$\nStep 2: Match the constant term: $3bc = 12b \\Rightarrow c = 4$.\nStep 3: Match the middle term: $M = c + 12b = 4 + 12b$, so $b = \\frac{M - 4}{12}$.\nStep 4: Test each $M$ for a positive integer $b$: $14 \\to \\frac{10}{12}$, $22 \\to \\frac{18}{12} = 1.5$, $30 \\to \\frac{26}{12}$, $40 \\to \\frac{36}{12} = 3$. Only $M = 40$ works.\nCheck: with $b = 3$, $4x^2 + 40x + 36 = (x + 9)(4x + 4)$, and $x + 3b = x + 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($M = 14$): gives $b = \\frac{10}{12}$, not a positive integer.\n* Choice B ($M = 22$): gives $b = 1.5$, not an integer.\n* Choice C ($M = 30$): gives $b = \\frac{26}{12}$, not an integer.\n\n**Test Day Takeaway:** When a binomial $x + k$ must divide a quadratic, the leading and constant terms force the second factor. Match the middle coefficient to get an equation in the unknown, then apply any integer constraint to pick the answer.",
  skills: ["polynomial-functions", "factoring"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A triangular archival seal is an equilateral triangle whose perimeter is $792$ millimeters. All three of its vertices lie on a circle. The radius of that circle is $w\\sqrt{3}$ millimeters. What is the value of $w$?",
  correctAnswer: "88",
  explanation: "**SAT Pattern: Equilateral Triangle — Circumradius**\n\n**The correct answer is $88$.**\n\n**The Fast Way (~40s):** Side $= \\frac{792}{3} = 264$. The circumradius of an equilateral triangle is $R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3} = \\frac{264\\sqrt{3}}{3} = 88\\sqrt{3}$. Matching $R = w\\sqrt{3}$ gives $w = 88$.\n\n**The Full Solution:**\nStep 1: An equilateral triangle with perimeter $792$ has side $s = \\frac{792}{3} = 264$ mm.\nStep 2: For an equilateral triangle, the circumradius (center-to-vertex distance) is\n$$R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3}.$$\nStep 3: Substitute $s = 264$: $R = \\frac{264\\sqrt{3}}{3} = 88\\sqrt{3}$ mm.\nStep 4: The problem states $R = w\\sqrt{3}$, so $w = 88$.\n\n**Common Mistakes:** Using the side $264$ directly as $R$ (forgetting to divide by $\\sqrt{3}$); leaving $w$ as $\\frac{264}{\\sqrt{3}}$ without rationalizing to expose the $\\sqrt{3}$ factor; dividing the perimeter by $2$ instead of $3$ to find the side.\n\n**Test Day Takeaway:** For an equilateral triangle, the circumradius is $R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3}$. Rationalize so the $\\sqrt{3}$ matches the form the problem hands you.",
  skills: ["special-right-triangles", "circle-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "In the equation $x^2 - 10x + c = 0$, $c$ is a constant. If the equation has no real solutions, which of the following could be the value of $c$?",
  choices: [
    // distractor: discriminant 16 > 0, so the equation has two distinct real solutions ($x = 3$ and $x = 7$)
    { id: "A", text: "$21$" },
    // distractor: discriminant 4 > 0, so it has two distinct real solutions ($x = 4$ and $x = 6$)
    { id: "B", text: "$24$" },
    // distractor: a perfect-square trinomial; discriminant is 0, which still yields one (repeated) real solution
    { id: "C", text: "$25$" },
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** No real solutions means the discriminant $b^2 - 4ac$ is negative: $(-10)^2 - 4(1)c < 0$, so $100 < 4c$, which gives $c > 25$. Only $26$ qualifies.\n\n**The Full Solution:**\nStep 1: The discriminant $D = b^2 - 4ac$ controls real roots: $D > 0$ gives two, $D = 0$ gives one repeated, $D < 0$ gives none.\nStep 2: Here $a = 1$, $b = -10$, so $D = 100 - 4c$.\nStep 3: Require $D < 0$: $100 - 4c < 0 \\Rightarrow c > 25$.\nStep 4: Test the choices:\n* $c = 21$: $D = 16 > 0$ — two real roots ($x = 3, 7$).\n* $c = 24$: $D = 4 > 0$ — two real roots ($x = 4, 6$).\n* $c = 25$: $D = 0$ — one repeated root ($x = 5$).\n* $c = 26$: $D = -4 < 0$ — no real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): $D = 16 > 0$, factors as $(x-3)(x-7)$ — two real solutions.\n* Choice B ($24$): $D = 4 > 0$, factors as $(x-4)(x-6)$ — two real solutions.\n* Choice C ($25$): $D = 0$ gives the perfect square $(x-5)^2$, which still has the real solution $x = 5$. The boundary case is the trap.\n\n**Test Day Takeaway:** \"No real solutions\" means $b^2 - 4ac$ is strictly negative. A discriminant of exactly $0$ still counts as one real (repeated) solution — never lump it in with the no-solution case.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the graphs of $y = x + 7$ and $y = x^2 + 12x + 31$ intersect at two points. If $(x, y)$ is a solution to this system, what is the greatest possible value of $x$?",
  choices: [
    // distractor: gives the lesser root instead of the greatest x
    { id: "A", text: "$-8$" },
    { id: "B", text: "$-3$" },
    // distractor: reports the y-coordinate at the greatest-x solution, not the x-value
    { id: "C", text: "$4$" },
    // distractor: sign-flips the correct root
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Set the expressions equal: $x + 7 = x^2 + 12x + 31$, so $x^2 + 11x + 24 = 0 \\Rightarrow (x + 3)(x + 8) = 0$. The solutions are $x = -3$ and $x = -8$; the greatest is $x = -3$.\n\n**The Full Solution:**\nStep 1: Both equations equal $y$, so substitute one into the other: $x + 7 = x^2 + 12x + 31$.\nStep 2: Collect to one side: $0 = x^2 + 11x + 24$.\nStep 3: Factor: $(x + 3)(x + 8) = 0$, so $x = -3$ or $x = -8$.\nStep 4: The question asks for the greatest possible $x$, which is $-3$.\nCheck: at $x = -3$, the line gives $y = 4$ and the parabola gives $9 - 36 + 31 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): picks the smaller solution instead of the greatest.\n* Choice C ($4$): reports the $y$-value at the $x = -3$ intersection, not the $x$-value asked for.\n* Choice D ($3$): sign-slips on the factor $(x + 3)$, reading it as $x = 3$.\n\n**Test Day Takeaway:** When two curves both equal $y$, set the right-hand sides equal and collect to a single quadratic. Solve, then re-read the question to grab the requested quantity — greatest $x$, not a root you found first or its $y$-value.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A company's profit $P$, in thousands of dollars, is modeled by $P(x) = -2x^2 + 28x - 80$, where $x$ is the number of units produced (in thousands). For what values of $x$ is the profit positive?",
  choices: [
    // distractor: gives where $P(x) < 0$ (outside the roots for downward parabola)
    { id: "A", text: "$x < 4$ or $x > 10$" },
    { id: "B", text: "$4 < x < 10$" },
    // distractor: applies the inverse operation — wrong signs on roots
    { id: "C", text: "$x < -10$ or $x > -4$" },
    // distractor: not related to the actual zeros
    { id: "D", text: "$0 < x < 14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set $P(x) > 0$: $-2x^2 + 28x - 80 > 0$. Divide by $-2$ and flip the sign: $x^2 - 14x + 40 < 0$. Factor: $(x - 4)(x - 10) < 0 \\Rightarrow 4 < x < 10$.\n\n**The Full Solution:**\nStep 1: Find the zeros of $P$. From $-2x^2 + 28x - 80 = 0$, divide by $-2$: $x^2 - 14x + 40 = 0 \\Rightarrow (x - 4)(x - 10) = 0$, so $x = 4$ or $x = 10$.\nStep 2: The leading coefficient $-2 < 0$ means the parabola opens DOWN, so $P(x) > 0$ BETWEEN the roots: $4 < x < 10$.\nStep 3: Spot-check the interior: $P(7) = -98 + 196 - 80 = 18 > 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x < 4$ or $x > 10$): this is where the downward parabola is below the $x$-axis — profit negative, the inverse condition.\n* Choice C ($x < -10$ or $x > -4$): flips the signs of the roots, then uses the wrong interval.\n* Choice D ($0 < x < 14$): a plausible-looking interval not derived from the actual zeros.\n\n**Test Day Takeaway:** For a downward-opening parabola, $f(x) > 0$ BETWEEN the roots; for an upward-opening one, $f(x) > 0$ OUTSIDE the roots.",
  skills: ["quadratic-equations", "word-problems"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $4 \\sqrt[3]{2^3 x^{12}} \\cdot \\sqrt[4]{5^4 x}$ is equivalent to $a x^{b}$, where $a$ and $b$ are constants. What is the value of $a + b$?",
  correctAnswer: "44.25",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $44.25$ (or $\\frac{177}{4}$).**\n\n**The Fast Way (~50s):** $\\sqrt[3]{2^3 x^{12}} = 2x^4$ and $\\sqrt[4]{5^4 x} = 5x^{1/4}$. Multiply with the leading $4$: $4 \\cdot 2x^4 \\cdot 5x^{1/4} = 40x^{17/4}$, so $a = 40$, $b = \\frac{17}{4}$, and $a + b = 40 + 4.25 = 44.25$.\n\n**The Full Solution:**\nStep 1: Convert each radical to fractional-exponent form. First: $\\sqrt[3]{2^3 x^{12}} = (2^3 x^{12})^{1/3} = 2^{3/3} x^{12/3} = 2x^4$.\nStep 2: Second: $\\sqrt[4]{5^4 x} = (5^4 x)^{1/4} = 5^{4/4} x^{1/4} = 5x^{1/4}$.\nStep 3: Multiply, keeping the leading $4$ with the constants and ADDING the $x$-exponents:\n$$4 \\cdot 2x^4 \\cdot 5x^{1/4} = (4 \\cdot 2 \\cdot 5)\\, x^{4 + 1/4} = 40\\, x^{17/4}.$$\nStep 4: Matching $ax^{b}$ gives $a = 40$, $b = \\frac{17}{4}$, so $a + b = 40 + \\frac{17}{4} = \\frac{177}{4} = 44.25$.\n\n**Common Mistakes:** Forgetting the leading $4$ multiplies the radical coefficients ($4 \\cdot 2 \\cdot 5 = 40$, not $2 \\cdot 5 = 10$); adding the radical indices $3 + 4$ instead of converting each to a fractional exponent; treating $\\sqrt[4]{x}$ as $x$ and getting $b = 5$ instead of $\\frac{17}{4}$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent ($\\sqrt[n]{x^m} = x^{m/n}$), multiply the constants separately, and ADD the exponents on the shared base.",
  skills: ["exponents", "radicals"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The length of the rectangle's diagonal is twice the length of its shorter side, and the area of the rectangle is $441\\sqrt{3}$ square units. What is the diameter of the circle?",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~50s):** A diagonal twice the shorter side makes a 30-60-90 triangle: shorter side $s$, longer side $s\\sqrt{3}$, diagonal $2s$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 441\\sqrt{3} \\Rightarrow s = 21$. The diagonal of an inscribed rectangle is the diameter: $2s = 42$.\n\n**The Full Solution:**\nStep 1: The diagonal of a rectangle inscribed in a circle passes through the center, so the diagonal equals the diameter.\nStep 2: Let the shorter side be $s$. The diagonal is $2s$, and the corner of the rectangle is a right angle, so the shorter side, longer side, and diagonal form a right triangle with hypotenuse $2s$ and one leg $s$. A leg equal to half the hypotenuse sits opposite the $30^\\circ$ angle, so this is a 30-60-90 triangle with sides in ratio $1 : \\sqrt{3} : 2$.\nStep 3: The longer side (opposite $60^\\circ$) is $s\\sqrt{3}$. The area is\n$$s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 441\\sqrt{3},$$\nso $s^2 = 441 \\Rightarrow s = 21$.\nStep 4: The diameter equals the diagonal $= 2s = 42$.\nCheck: longer side $= 21\\sqrt{3}$, and $s^2 + (s\\sqrt{3})^2 = 441 + 1{,}323 = 1{,}764 = 42^2$. $\\checkmark$\n\n**Common Mistakes:** Forgetting that the inscribed rectangle's diagonal IS the diameter; solving for $s = 21$ and reporting it instead of the diameter $2s = 42$; setting the area equal to $s^2$ alone and dropping the $\\sqrt{3}$ from the longer side.\n\n**Test Day Takeaway:** When a hypotenuse is exactly twice one leg, you have a 30-60-90 triangle ($1 : \\sqrt{3} : 2$). For a rectangle inscribed in a circle, the diagonal equals the diameter.",
  skills: ["special-right-triangles", "geometry", "circle-equations"]
}
      ]
    }
  ]
};

export default practiceTest12;
