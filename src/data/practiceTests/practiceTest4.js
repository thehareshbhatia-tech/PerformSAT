// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the prior
// blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/6M/13H with the wavy flow —
// easies at Q2/Q6/Q15 (Q15 the mid-module breather), mediums at
// Q1/Q3/Q4/Q8/Q9/Q13, hards at Q5/Q7/Q10-12/Q14/Q16-22.
// Figure density lifted to official ~20%: M1 carries 4 diagram items
// (Q8 scatterplot, Q12/Q22 two-way tables, Q14 data table); M2 carries 4
// (Q1 table of values, Q15 dot plot, Q16 histogram, Q17 right triangle).
// Numeric MC choices sorted ascending (official convention).

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 1 (22 questions)
// Domain mix: 7 Algebra / 6 AdvMath / 5 PSDA / 4 Geo-Trig.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A battery-research lab prepares an electrolyte blend that contains solvent A and solvent B in a ratio of $3$ to $5$ by volume. If a batch of the blend contains $120$ milliliters of the two solvents combined, how many milliliters of solvent B does the batch contain?",
  choices: [
    // distractor: reports the raw ratio number for solvent B instead of solving
    { id: "A", text: "$5$" },
    // distractor: solves for solvent A (3/8 of 120) instead of solvent B
    { id: "B", text: "$45$" },
    // distractor: uses 3/5 of the total, treating one ratio part as the denominator
    { id: "C", text: "$72$" },
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Solvent B is $5$ parts out of $3+5=8$ total parts, so it makes up $\\frac{5}{8}$ of the batch: $\\frac{5}{8}\\cdot 120 = 75$ milliliters.\n\n**The Full Solution:**\nStep 1: Write the amounts as $3k$ (solvent A) and $5k$ (solvent B), so the ratio stays $3:5$.\nStep 2: The combined volume is $3k+5k=8k=120$, so $k=15$.\nStep 3: Solvent B $=5k=5\\cdot 15=75$ milliliters. Check: solvent A $=3\\cdot 15=45$, and $45+75=120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the raw ratio number for solvent B instead of solving.\n* Choice B ($45$): solves for solvent A, $\\frac{3}{8}\\cdot 120$, not solvent B.\n* Choice C ($72$): uses $\\frac{3}{5}$ of $120$ — a ratio part as denominator instead of the sum of the parts.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction has the SUM of the ratio numbers as its denominator, never a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $m$ defined by $m(t) = 480 + 12t$ gives the mass, in kilograms, of grain in a storage silo $t$ minutes after loading begins. What is the best interpretation of $12$ in this context?",
  choices: [
    { id: "A", text: "Each minute, the mass of grain in the silo increases by $12$ kilograms." },
    // distractor: confuses 12 with the initial value (which is 480)
    { id: "B", text: "The mass of grain in the silo when loading begins is $12$ kilograms." },
    // distractor: treats 12 as a time input rather than a rate of change
    { id: "C", text: "The mass of grain in the silo $12$ minutes after loading begins." },
    // distractor: swaps the roles of the intercept and the slope
    { id: "D", text: "Each minute, the mass of grain in the silo increases by $480$ kilograms." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $m(t)=480+12t$, the coefficient of $t$ is the rate of change: the mass grows $12$ kilograms each minute.\n\n**The Full Solution:**\nStep 1: The model has the form $m(t)=b+at$ with intercept $b=480$ and slope $a=12$.\nStep 2: The slope is the change in mass per one-unit increase in $t$. Since $t$ is measured in minutes, the grain mass rises by $12$ kilograms per minute — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: describes the initial value $480$ (the mass at $t=0$), not the coefficient of $t$.\n* Choice C: treats $12$ as an input $t=12$ rather than a per-minute rate.\n* Choice D: swaps the intercept and the slope — $480$ is the starting mass, not a rate.\n\n**Test Day Takeaway:** In $y=b+ax$, the number multiplying the variable is always the rate of change per unit; the constant is the starting value.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A conservation workshop has restored $150$ books, which is $60\\%$ of the books in a restoration project. How many books, in total, are in the project?",
  choices: [
    // distractor: applies the percent forward — 150 \cdot 0.60 = 90
    { id: "A", text: "$90$" },
    // distractor: adds the number 60 to the count instead of dividing by 0.60
    { id: "B", text: "$210$" },
    { id: "C", text: "$250$" },
    // distractor: divides by the complement 0.40, treating 150 as the unrestored part
    { id: "D", text: "$375$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $150$ is $60\\%$ of the total $T$, so $T=\\frac{150}{0.60}=250$.\n\n**The Full Solution:**\nStep 1: Translate \"$150$ is $60\\%$ of the project\" into $0.60\\,T=150$.\nStep 2: Divide both sides by $0.60$: $T=\\frac{150}{0.60}=250$.\nStep 3: Check: $0.60\\cdot 250=150$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): multiplies $150\\cdot 0.60$ instead of dividing — the inverse operation.\n* Choice B ($210$): adds the number $60$ to $150$, mixing a percent with a count.\n* Choice D ($375$): divides by the complement $0.40$, treating $150$ as the part NOT yet restored.\n\n**Test Day Takeaway:** To recover a whole from a known percent of it, divide the part by the percent written as a decimal.",
  skills: ["percents"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f$ is defined by $f(x) = 5x - 9$. What is the value of $f(8) + 6$?",
  choices: [
    // distractor: subtracts 6 instead of adding (applies inverse operation)
    { id: "A", text: "$25$" },
    // distractor: gives f(8) alone, stopping one step early
    { id: "B", text: "$31$" },
    { id: "C", text: "$37$" },
    // distractor: computes f(8 + 6) = f(14) = 61 (applies the +6 to the input)
    { id: "D", text: "$61$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $f(8)=5\\cdot 8-9=31$, then $f(8)+6=31+6=37$.\n\n**The Full Solution:**\nStep 1: Evaluate the function at $x=8$: $f(8)=5(8)-9=40-9=31$.\nStep 2: Add $6$ to that output: $f(8)+6=31+6=37$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): subtracts $6$ from $f(8)$ instead of adding it.\n* Choice B ($31$): stops at $f(8)$ and forgets the final $+6$.\n* Choice D ($61$): adds $6$ to the input, computing $f(14)$ instead of adding to the output.\n\n**Test Day Takeaway:** $f(8)+6$ adds $6$ to the OUTPUT; $f(8+6)$ adds $6$ to the INPUT. Read which side of the parentheses the shift sits on.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An orchard supply company sells grafting kits for $\\$9$ each plus a flat $\\$5$ delivery fee per order. The total cost of an order of $n$ kits, including delivery, is $\\$50$. What is the total cost, in dollars, of an order of $n + 4$ kits (with one delivery fee)?",
  choices: [
    // distractor: adds the count 4 as dollars instead of 4 * $9 = $36
    { id: "A", text: "$\\$54$" },
    // distractor: uses the $5 delivery fee as the per-kit price for the extra kits
    { id: "B", text: "$\\$70$" },
    // distractor: recomputes 9(n + 4) but drops the delivery fee
    { id: "C", text: "$\\$81$" },
    { id: "D", text: "$\\$86$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Four more kits at $\\$9$ each add $\\$36$; the delivery fee does not change, so the new total is $\\$50+\\$36=\\$86$.\n\n**The Full Solution:**\nStep 1: The cost model is $9n+5$. For the first order, $9n+5=50$, so $9n=45$ and $n=5$.\nStep 2: The new order has $n+4=9$ kits with one delivery fee: total $=9(9)+5=81+5=\\$86$.\nStep 3: Or skip finding $n$: adding $4$ kits adds $4\\cdot\\$9=\\$36$ and leaves the fee alone, so $\\$50+\\$36=\\$86$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$54$): adds the count $4$ as dollars instead of $4\\cdot\\$9=\\$36$.\n* Choice B ($\\$70$): uses the $\\$5$ delivery fee as the per-kit price: $\\$50+4\\cdot\\$5$.\n* Choice C ($\\$81$): recomputes $9(n+4)=81$ but drops the delivery fee.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding items moves only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In triangle $JKL$, the measure of angle $J$ is $24°$ and the measure of angle $K$ is twice the measure of angle $L$. What is the measure of angle $K$, in degrees?",
  correctAnswer: "104",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $104$.**\n\n**The Fast Way (~20s):** The angles sum to $180^\\circ$, so $K+L=156^\\circ$. With $K=2L$, that gives $3L=156$, so $L=52^\\circ$ and $K=104^\\circ$.\n\n**The Full Solution:**\nStep 1: Let angle $L$ measure $x$ degrees. Then angle $K$ measures $2x$ degrees.\nStep 2: The angle sum of a triangle is $180^\\circ$: $24+2x+x=180$, so $3x=156$.\nStep 3: Solve: $x=52$, so angle $K=2(52)=104^\\circ$.\nCheck: $24+104+52=180$. $\\checkmark$\n\n**Common Mistakes:** Reporting $52$ (the measure of angle $L$) instead of angle $K$; setting $2x+x=180$ and forgetting to subtract the $24^\\circ$ angle first.\n\n**Test Day Takeaway:** Translate \"twice\" into $2x$, use the $180^\\circ$ angle sum, and re-read which angle the question actually asks for.",
  skills: ["triangles", "angles"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A marine biologist measured the shell lengths of a random sample of $400$ oysters from a large oyster farm. The sample mean shell length was $84$ millimeters, with an associated margin of error of $5$ millimeters. Which of the following is the best conclusion from these data?",
  choices: [
    // distractor: treats the sample statistic as an exact population value
    { id: "A", text: "The mean shell length of all oysters at the farm is exactly $84$ millimeters." },
    { id: "B", text: "It is plausible that the mean shell length of all oysters at the farm is between $79$ and $89$ millimeters." },
    // distractor: applies the interval to individual oysters rather than to the mean
    { id: "C", text: "Every oyster at the farm has a shell length between $79$ and $89$ millimeters." },
    // distractor: misreads the margin of error as a guarantee about a future sample
    { id: "D", text: "If another random sample of $400$ oysters is measured, its mean shell length will be exactly $84$ millimeters." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The margin of error builds a plausible interval for the population mean: $84\\pm 5$ gives $79$ to $89$ millimeters for the mean shell length of ALL oysters at the farm.\n\n**The Full Solution:**\nStep 1: A margin of error means the true population mean is plausibly within $5$ millimeters of the sample mean of $84$.\nStep 2: Lower endpoint: $84-5=79$. Upper endpoint: $84+5=89$.\nStep 3: So it is plausible that the mean shell length of all oysters at the farm lies between $79$ and $89$ millimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims an exact population value — a sample statistic is never exact.\n* Choice C: applies the interval to every individual oyster; the margin of error describes the MEAN, and individual lengths can fall far outside it.\n* Choice D: treats the margin of error as a guarantee about a single future sample.\n\n**Test Day Takeaway:** Margin of error gives a plausible range for the POPULATION parameter — never for individuals and never as a promise about the next sample.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the mass of cargo $x$, in metric tons, carried by each of $8$ canal barges on the same route and the volume of fuel $y$, in liters, each barge used, along with a line of best fit. According to the line of best fit, which of the following is the predicted fuel use, in liters, for a barge carrying $45$ metric tons of cargo?",
  diagram: { type: "scatterplot", params: {
    points: [[10, 105], [15, 120], [20, 150], [25, 155], [30, 180], [35, 210], [40, 215], [45, 252]],
    xMin: 0, xMax: 50, yMin: 0, yMax: 280,
    xGridStep: 5, xLabelStep: 10, yGridStep: 20, yLabelStep: 40,
    bestFitLine: { slope: 4, intercept: 60 },
    xLabel: "Cargo mass (metric tons)", yLabel: "Fuel used (liters)",
  } },
  choices: [
    // distractor: computes 4 * 45 but forgets to add the intercept 60
    { id: "A", text: "$180$" },
    { id: "B", text: "$240$" },
    // distractor: reads the plotted data point at x = 45 instead of the line's prediction
    { id: "C", text: "$252$" },
    // distractor: plugs the intercept 60 in as the input: 4(60) + 60
    { id: "D", text: "$300$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line of best fit is $y=4x+60$. At $x=45$: $y=4(45)+60=180+60=240$ liters.\n\n**The Full Solution:**\nStep 1: A prediction from the line of best fit uses the LINE, not an individual data point.\nStep 2: Substitute $x=45$ into $y=4x+60$: $4(45)=180$.\nStep 3: Add the intercept: $180+60=240$ liters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($180$): computes $4\\times 45$ but drops the intercept $60$.\n* Choice C ($252$): reads the plotted point at $x=45$ — the question asks for the line's PREDICTED value, not the observed one.\n* Choice D ($300$): substitutes the intercept $60$ as if it were the input: $4(60)+60$.\n\n**Test Day Takeaway:** \"Predicted\" always means the model's value — substitute into the full best-fit equation and never read the raw data point instead.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is given:\n\n$2x + 5y = 41$\n$2x - 3y = 1$\n\nWhat is the value of $y$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** The $x$-coefficients match ($2x$ in both), so subtract the second equation from the first: $8y=40$, giving $y=5$.\n\n**The Full Solution:**\nStep 1: Stack the equations: $2x+5y=41$ and $2x-3y=1$.\nStep 2: Subtract the second from the first; the $x$-terms cancel: $(5y-(-3y))=41-1$, so $8y=40$.\nStep 3: Divide: $y=5$.\nCheck: from the first equation, $2x+25=41$ gives $x=8$; then $2(8)-3(5)=16-15=1$. $\\checkmark$\n\n**Common Mistakes:** Adding the equations instead of subtracting (that leaves $4x+2y=42$, which does not isolate a variable); solving for $x$ when the question asks for $y$.\n\n**Test Day Takeaway:** When one variable has IDENTICAL coefficients in both equations, subtract the equations to eliminate it in a single step.",
  skills: ["systems-of-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x + 5}{4} - \\dfrac{x - 7}{8} = 3$, what is the value of $x$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** Multiply through by the LCD $8$: $2(x+5)-(x-7)=24 \\Rightarrow x+17=24 \\Rightarrow x=7$.\n\n**The Full Solution:**\nStep 1: Multiply every term of $\\frac{x+5}{4}-\\frac{x-7}{8}=3$ by $8$: $2(x+5)-(x-7)=24$.\nStep 2: Distribute carefully, watching the second sign: $2x+10-x+7=24$.\nStep 3: Combine: $x+17=24$, so $x=7$.\nCheck: $\\frac{12}{4}-\\frac{0}{8}=3-0=3$. $\\checkmark$\n\n**Common Mistakes:** Dropping the negative on the second numerator, leaving $-x-7$ instead of $-x+7$; multiplying by only one denominator instead of the LCD $8$.\n\n**Test Day Takeaway:** Clear all fractions first by multiplying every term by the least common denominator — and distribute a subtracted numerator with its sign flipped on EVERY term.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The line $y = -\\dfrac{2}{3}x + 5$ is graphed in the $xy$-plane. A second line is perpendicular to this line and passes through the point $(4, -1)$. What is the $y$-intercept of the second line?",
  choices: [
    { id: "A", text: "$(0, -7)$" },
    // distractor: sign slip when isolating b — computes 1 - 6 instead of -1 - 6
    { id: "B", text: "$(0, -5)$" },
    // distractor: keeps the original slope -2/3 instead of the perpendicular slope
    { id: "C", text: "$\\left(0, \\tfrac{5}{3}\\right)$" },
    // distractor: flips the sign without reciprocating (slope -3/2)
    { id: "D", text: "$(0, 5)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The perpendicular slope is $\\frac{3}{2}$. Plug $(4,-1)$ into $y=\\frac{3}{2}x+b$: $-1=6+b$, so $b=-7$, giving the $y$-intercept $(0,-7)$.\n\n**The Full Solution:**\nStep 1: The given line $y=-\\frac{2}{3}x+5$ has slope $-\\frac{2}{3}$.\nStep 2: Perpendicular slopes are negative reciprocals, so the new slope is $\\frac{3}{2}$.\nStep 3: Use the point $(4,-1)$ in $y=\\frac{3}{2}x+b$: $-1=\\frac{3}{2}(4)+b=6+b$, so $b=-7$.\nStep 4: The $y$-intercept is $(0,-7)$. Check: $\\left(-\\frac{2}{3}\\right)\\cdot\\frac{3}{2}=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,-5)$): computes $1-6$ instead of $-1-6$, dropping the sign on the point's $y$-coordinate.\n* Choice C ($(0,\\frac{5}{3})$): reuses the original slope $-\\frac{2}{3}$ instead of the perpendicular slope.\n* Choice D ($(0,5)$): flips the sign without reciprocating, using slope $-\\frac{3}{2}$.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction AND change the sign; their product must equal $-1$. Then substitute the point to pin down $b$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An archivist recorded $180$ hourly humidity readings, $90$ in each of two climate-controlled storage rooms, and classified each reading as within range or out of range. The table summarizes the results. If one of the readings that were out of range is selected at random, what is the probability that the reading came from Room B?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Within range", "Out of range", "Total"],
      rows: [
        ["Room A", "64", "26", "90"],
        ["Room B", "72", "18", "90"],
        ["Total", "136", "44", "180"]
      ]
    }
  },
  choices: [
    // distractor: uses the grand total 180 as the denominator (joint, not conditional)
    { id: "A", text: "$\\dfrac{18}{180}$" },
    // distractor: uses the Room B total 90 — the wrong condition direction
    { id: "B", text: "$\\dfrac{18}{90}$" },
    { id: "C", text: "$\\dfrac{18}{44}$" },
    // distractor: gives the proportion of out-of-range readings from Room A
    { id: "D", text: "$\\dfrac{26}{44}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Selected from the out-of-range readings\" sets the denominator to the Out-of-range column total, $44$; of those, $18$ came from Room B. Probability $=\\frac{18}{44}$.\n\n**The Full Solution:**\nStep 1: The condition is \"the reading is out of range,\" so the group size is the Out-of-range column total: $26+18=44$.\nStep 2: Within that group, the Room B count is $18$.\nStep 3: So $P(\\text{Room B}\\mid\\text{out of range})=\\frac{18}{44}=\\frac{9}{22}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{18}{180}$): uses the grand total $180$ — that is the joint probability, not the conditional one.\n* Choice B ($\\frac{18}{90}$): uses Room B's row total — that answers \"given the reading came from Room B,\" the reverse condition.\n* Choice D ($\\frac{26}{44}$): counts Room A's out-of-range readings instead of Room B's.\n\n**Test Day Takeaway:** In a conditional probability, the \"given\" group sets the denominator — restrict to that row or column total, never the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right circular cylinder has a diameter of $6$ and a height of $14$. What is the volume of the cylinder, in terms of $\\pi$?",
  choices: [
    // distractor: uses r instead of r^2 (pi r h = 42 pi)
    { id: "A", text: "$42\\pi$" },
    // distractor: uses 2 \pi r h (lateral area) instead of \pi r^2 h
    { id: "B", text: "$84\\pi$" },
    { id: "C", text: "$126\\pi$" },
    // distractor: uses the diameter 6 as the radius (pi \cdot 36 \cdot 14)
    { id: "D", text: "$504\\pi$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The radius is half the diameter: $r=3$. Then $V=\\pi r^2 h=\\pi(3)^2(14)=126\\pi$.\n\n**The Full Solution:**\nStep 1: The diameter is $6$, so the radius is $r=\\frac{6}{2}=3$.\nStep 2: The volume of a right circular cylinder is $V=\\pi r^2 h$.\nStep 3: Substitute: $V=\\pi(3)^2(14)=\\pi\\cdot 9\\cdot 14=126\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($42\\pi$): uses $r$ instead of $r^2$, getting $\\pi(3)(14)=42\\pi$.\n* Choice B ($84\\pi$): computes the lateral surface area $2\\pi rh=2\\pi(3)(14)=84\\pi$ instead of the volume.\n* Choice D ($504\\pi$): uses the diameter $6$ as the radius: $\\pi(6)^2(14)=504\\pi$.\n\n**Test Day Takeaway:** Halve the diameter before anything else. Cylinder volume is $\\pi r^2 h$ — square the radius only.",
  skills: ["volume", "geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table gives the number of algae cells per milliliter of water in an aquaculture research tank at the start of an observation and after each of the first $2$ days. The number of cells per milliliter can be modeled by an exponential function of $d$, the number of days after the start. Which function $N$ models the number of cells per milliliter $d$ days after the start?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Day", "Cells per milliliter"],
      rows: [
        ["0", "600"],
        ["1", "2,400"],
        ["2", "9,600"]
      ]
    }
  },
  choices: [
    // distractor: builds a linear model from the first difference (2,400 - 600 = 1,800)
    { id: "A", text: "$N(d) = 600 + 1{,}800d$" },
    { id: "B", text: "$N(d) = 600(4)^{d}$" },
    // distractor: uses the day-1 count as the initial value
    { id: "C", text: "$N(d) = 2{,}400(4)^{d}$" },
    // distractor: swaps the base and the exponent's roles (d^4 gives 0 at d = 0)
    { id: "D", text: "$N(d) = 600 \\cdot d^{4}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Each day the count multiplies by $\\frac{2{,}400}{600}=4$. Initial value $600$, growth factor $4$: $N(d)=600(4)^d$.\n\n**The Full Solution:**\nStep 1: Test for a constant ratio: $\\frac{2{,}400}{600}=4$ and $\\frac{9{,}600}{2{,}400}=4$ — exponential with growth factor $4$.\nStep 2: The day-$0$ value is the initial amount: $N(0)=600$.\nStep 3: So $N(d)=600(4)^d$. Check: $N(1)=2{,}400$ $\\checkmark$ and $N(2)=600\\cdot 16=9{,}600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($600+1{,}800d$): a linear model built from the first difference; it gives $4{,}200$ at $d=2$, not $9{,}600$.\n* Choice C ($2{,}400(4)^d$): uses the day-$1$ count as the initial value, so $N(0)=2{,}400\\ne 600$.\n* Choice D ($600\\cdot d^4$): swaps the roles of base and variable — it gives $N(0)=0$, contradicting the table.\n\n**Test Day Takeaway:** Constant RATIO between equal steps means exponential: initial value out front, ratio as the base, elapsed steps in the exponent.",
  skills: ["exponential-functions"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{8^4 \\cdot 2^5}{4^6}$ can be written as $2^a$ for some integer $a$. What is the value of $a$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Rewrite every base as a power of $2$: $8^4=2^{12}$ and $4^6=2^{12}$. Then $\\frac{2^{12}\\cdot 2^5}{2^{12}}=2^{12+5-12}=2^5$, so $a=5$.\n\n**The Full Solution:**\nStep 1: Convert to the common base $2$: $8=2^3$, so $8^4=(2^3)^4=2^{12}$; and $4=2^2$, so $4^6=(2^2)^6=2^{12}$.\nStep 2: Substitute: $\\dfrac{2^{12}\\cdot 2^5}{2^{12}}$.\nStep 3: Add exponents in the numerator ($12+5=17$), then subtract the denominator's: $2^{17-12}=2^5$. So $a=5$.\n\n**Common Mistakes:** Multiplying exponents where they should be added ($8^4\\cdot 2^5\\ne 2^{60}$); converting $4^6$ to $2^8$ by adding instead of multiplying the exponents; stopping at $2^{17}$ and forgetting to divide.\n\n**Test Day Takeaway:** Rewrite every base as a power of the same prime, then add exponents for products and subtract for quotients — $(b^m)^n=b^{mn}$ handles the conversion.",
  skills: ["exponent-rules"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $5x^2 + bx + 45 = 0$ has no real solutions. If $b$ is a positive integer, what is the greatest possible value of $b$?",
  choices: [
    { id: "A", text: "$29$" },
    // distractor: forgets the strict inequality — b = 30 makes the discriminant 0
    { id: "B", text: "$30$" },
    // distractor: computes 4c = 180, dropping the coefficient a
    { id: "C", text: "$180$" },
    // distractor: returns b^2 = 900 itself
    { id: "D", text: "$900$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** No real solutions means the discriminant is negative: $b^2-4(5)(45)<0 \\Rightarrow b^2<900 \\Rightarrow b<30$. The greatest integer below $30$ is $29$.\n\n**The Full Solution:**\nStep 1: For $5x^2+bx+45=0$, the discriminant is $b^2-4ac=b^2-4(5)(45)=b^2-900$.\nStep 2: No real solutions requires $b^2-900<0$, so $b^2<900$ and (since $b>0$) $b<30$.\nStep 3: The largest integer satisfying $b<30$ is $b=29$. Check: at $b=29$ the discriminant is $841-900=-59<0$ $\\checkmark$. At $b=30$ it equals $0$, giving exactly one real solution — not allowed.\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): treats the inequality as $\\le$, but $b=30$ makes the discriminant $0$ (one solution, not zero).\n* Choice C ($180$): computes $4c=4(45)=180$, dropping the leading coefficient $5$ from $4ac$.\n* Choice D ($900$): reports $b^2$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions $\\Leftrightarrow$ discriminant $<0$. The strict inequality excludes the boundary, so the greatest integer sits one below the cutoff.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 3x - 7$ intersects the parabola $y = x^2 - 6x + 13$ at two points. What is the $x$-coordinate of the intersection point with the greater $x$-value?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Set the expressions equal: $x^2-6x+13=3x-7$. Rearrange to $x^2-9x+20=0$, which factors as $(x-4)(x-5)=0$. The roots are $x=4$ and $x=5$; the greater is $5$.\n\n**The Full Solution:**\nStep 1: At an intersection the $y$-values match, so $x^2-6x+13=3x-7$.\nStep 2: Move everything to one side: $x^2-6x+13-3x+7=0$, so $x^2-9x+20=0$.\nStep 3: Factor: $(x-4)(x-5)=0$, giving $x=4$ or $x=5$.\nStep 4: The question asks for the greater $x$-value: $5$. Check at $x=5$: line gives $3(5)-7=8$; parabola gives $25-30+13=8$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x=4$ (the smaller root); dropping a sign when subtracting the line's expression, which corrupts the middle coefficient.\n\n**Test Day Takeaway:** To find where a line meets a parabola, set the two expressions equal, collect into standard form, factor, then read off the root the question asks for.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $(-4, 6)$ and passes through the point $(2, -2)$. Which of the following is the equation of this circle?",
  choices: [
    // distractor: flips the signs on the center coordinates
    { id: "A", text: "$(x - 4)^2 + (y + 6)^2 = 100$" },
    // distractor: uses r = 10 but writes r^2 = 10 instead of 100
    { id: "B", text: "$(x + 4)^2 + (y - 6)^2 = 10$" },
    // distractor: computes sqrt(36) + sqrt(64) = 6 + 8 = 14 instead of sqrt(100)
    { id: "C", text: "$(x + 4)^2 + (y - 6)^2 = 14$" },
    { id: "D", text: "$(x + 4)^2 + (y - 6)^2 = 100$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $r^2$ is the squared distance from the center to the given point: $r^2=(2-(-4))^2+(-2-6)^2=36+64=100$. So $(x+4)^2+(y-6)^2=100$.\n\n**The Full Solution:**\nStep 1: Standard form is $(x-h)^2+(y-k)^2=r^2$ with center $(h,k)$. Center $(-4,6)$ gives $(x+4)^2+(y-6)^2$ — the signs flip inside the parentheses.\nStep 2: The radius is the distance from the center to the point on the circle: $r=\\sqrt{(2-(-4))^2+(-2-6)^2}=\\sqrt{6^2+(-8)^2}=\\sqrt{100}=10$.\nStep 3: So $r^2=100$, giving $(x+4)^2+(y-6)^2=100$.\n\n**Why the wrong answers are tempting:**\n* Choice A: flips the center signs to $(x-4)^2+(y+6)^2$, which places the center at $(4,-6)$.\n* Choice B: keeps $r=10$ but writes $r^2=10$ — the equation needs the square, $100$.\n* Choice C: computes $\\sqrt{36}+\\sqrt{64}=14$ instead of $\\sqrt{36+64}$ — roots do not distribute over sums.\n\n**Test Day Takeaway:** The right side is $r^2$, found as $(\\Delta x)^2+(\\Delta y)^2$ — and the center's coordinates appear with FLIPPED signs inside the squared terms.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $ABC$ has vertices at $A(-3, 2)$, $B(9, 2)$, and $C(5, 9)$. What is the area of triangle $ABC$?",
  choices: [
    // distractor: uses the horizontal distance from A to C (8) as the base
    { id: "A", text: "$28$" },
    { id: "B", text: "$42$" },
    // distractor: uses C's y-coordinate 9 as the height instead of 9 - 2 = 7
    { id: "C", text: "$54$" },
    // distractor: forgets the 1/2 factor
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Side $AB$ is horizontal (both endpoints have $y=2$) with length $9-(-3)=12$. The height is $C$'s vertical distance from that line: $9-2=7$. Area $=\\frac{1}{2}(12)(7)=42$.\n\n**The Full Solution:**\nStep 1: $A(-3,2)$ and $B(9,2)$ share $y=2$, so $AB$ is horizontal; use it as the base: $b=9-(-3)=12$.\nStep 2: The height is the perpendicular distance from $C(5,9)$ to the line $y=2$: $h=9-2=7$.\nStep 3: Area $=\\frac{1}{2}bh=\\frac{1}{2}(12)(7)=42$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): uses the horizontal distance from $A$ to $C$ ($5-(-3)=8$) as the base: $\\frac{1}{2}(8)(7)=28$.\n* Choice C ($54$): uses $C$'s raw $y$-coordinate $9$ as the height instead of the distance $9-2=7$.\n* Choice D ($84$): forgets the $\\frac{1}{2}$ factor: $12\\times 7=84$.\n\n**Test Day Takeaway:** When one side is horizontal or vertical, use it as the base — the height is the other vertex's coordinate DISTANCE from that line, not its raw coordinate.",
  skills: ["area", "coordinate-geometry", "triangles"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The floor of a rectangular community hall has a length that is $9$ meters more than twice its width. If the perimeter of the floor is $90$ meters, what is the area of the floor, in square meters?",
  correctAnswer: "396",
  explanation: "**SAT Pattern: Multi-Step Word Problem with Geometry**\n\n**The correct answer is $396$.**\n\n**The Fast Way (~30s):** Let width $=w$ and length $=2w+9$. Perimeter $2(w+2w+9)=90 \\Rightarrow 3w+9=45 \\Rightarrow w=12$, so length $=33$ and area $=12\\times 33=396$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width in meters. The length is $9$ more than twice the width: $2w+9$.\nStep 2: Perimeter is $2(\\text{width}+\\text{length})$: $2(w+2w+9)=90$, so $2(3w+9)=90$ and $3w+9=45$.\nStep 3: Solve: $3w=36$, so $w=12$ and length $=2(12)+9=33$.\nStep 4: Area $=12\\times 33=396$ square meters. Check: perimeter $2(12+33)=90$. $\\checkmark$\n\n**Common Mistakes:** Using $P=w+\\ell$ instead of $P=2(w+\\ell)$; stopping at a dimension and reporting $12$ or $33$ instead of the area; translating \"$9$ more than twice\" as $2(w+9)$.\n\n**Test Day Takeaway:** Build the length-width relationship first, use the perimeter to solve for the dimensions, then compute the quantity the question actually asks for.",
  skills: ["word-problems", "area", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $(5x - k)(2x + 3) = 10x^2 + bx - 36$ for all values of $x$, where $k$ and $b$ are constants, what is the value of $b$?",
  choices: [
    // distractor: subtracts both middle terms: -15 - 24 = -39
    { id: "A", text: "$-39$" },
    { id: "B", text: "$-9$" },
    // distractor: flips the overall sign: 24 - 15 = 9
    { id: "C", text: "$9$" },
    // distractor: adds both middle terms as positives: 15 + 24 = 39
    { id: "D", text: "$39$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The constant term gives $-3k=-36$, so $k=12$. Then the middle term of $(5x-12)(2x+3)$ is $15x-24x=-9x$, so $b=-9$.\n\n**The Full Solution:**\nStep 1: Expand $(5x-k)(2x+3)=10x^2+15x-2kx-3k=10x^2+(15-2k)x-3k$.\nStep 2: Match constants with $10x^2+bx-36$: $-3k=-36$, so $k=12$.\nStep 3: Match linear coefficients: $b=15-2k=15-24=-9$.\nCheck: $(5x-12)(2x+3)=10x^2+15x-24x-36=10x^2-9x-36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-39$): subtracts both middle terms, computing $-15-24$ instead of $15-24$.\n* Choice C ($9$): flips the overall sign, computing $24-15$.\n* Choice D ($39$): adds both middle terms as positives, ignoring the negative on $k$.\n\n**Test Day Takeaway:** Match coefficients term by term, and start with the simplest equation — the constant term pins down the unknown before you touch the middle term.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table summarizes the $240$ shipping containers that arrived at a port terminal one day, classified by contents and by when each container cleared customs. If one of the refrigerated containers is selected at random, what is the probability that it cleared customs the same day?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Cleared same day", "Cleared later", "Total"],
      rows: [
        ["Dry goods", "105", "45", "150"],
        ["Refrigerated", "63", "27", "90"],
        ["Total", "168", "72", "240"]
      ]
    }
  },
  choices: [
    // distractor: uses the grand total 240 (joint probability, not conditional)
    { id: "A", text: "$\\dfrac{63}{240}$" },
    // distractor: gives the probability a refrigerated container cleared LATER
    { id: "B", text: "$\\dfrac{27}{90}$" },
    // distractor: uses the same-day column total 168 — the wrong condition direction
    { id: "C", text: "$\\dfrac{63}{168}$" },
    { id: "D", text: "$\\dfrac{63}{90}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"Selected from the refrigerated containers\" restricts to the Refrigerated row, total $90$. Of those, $63$ cleared the same day: $\\frac{63}{90}$.\n\n**The Full Solution:**\nStep 1: The condition \"one of the refrigerated containers\" fixes the denominator as the Refrigerated row total: $90$.\nStep 2: Within that row, the same-day count is $63$.\nStep 3: So $P(\\text{same day}\\mid\\text{refrigerated})=\\frac{63}{90}=\\frac{7}{10}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{63}{240}$): uses the grand total $240$ — the joint probability, not the conditional one.\n* Choice B ($\\frac{27}{90}$): conditions correctly but counts the containers that cleared LATER.\n* Choice C ($\\frac{63}{168}$): uses the same-day column total — that answers \"given it cleared the same day,\" the reverse question.\n\n**Test Day Takeaway:** The group named after \"selected from\" or \"given\" sets the denominator. Find that row or column total first, then count the favorable cell inside it.",
  skills: ["two-way-tables", "probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H. Calibrated to Bluebook Module 2 Hard.
//   Easy (band 3):   Q2 (margin of error), Q6 (percent of a total), Q15 (range breather).
//   Medium (band 4-5): Q1, Q3, Q4, Q8, Q9, Q13.
//   Hard (band 6-7): Q5, Q7, Q10, Q11, Q12, Q14, Q16, Q17, Q18, Q19, Q20, Q21, Q22.
// Q1-5 warm-up bar: every opener needs 2+ steps or a trap (no one-formula plug-ins,
// no Pythagorean-variant traps — tests 1 and 3 own those).
// Diagrams: Q1 (table of values), Q15 (dot plot), Q16 (histogram), Q17 (right triangle).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table gives three values of $x$ and the corresponding values of $g(x)$ for the linear function $g$. Which equation defines $g$?",
  diagram: { type: "table", params: {
    xHeader: "x", yHeader: "g(x)",
    rows: [["3", "4"], ["6", "13"], ["9", "22"]]
  } },
  choices: [
    // distractor: inverts the slope ratio to \Delta x / \Delta y = 3/9 = 1/3
    { id: "A", text: "$g(x) = \\dfrac{1}{3}x + 3$" },
    // distractor: correct slope 3 but uses the first g(x)-value (4) as the intercept
    { id: "B", text: "$g(x) = 3x + 4$" },
    // distractor: sign error solving for b (computes 4 + 9 instead of 4 - 9)
    { id: "C", text: "$g(x) = 3x + 13$" },
    { id: "D", text: "$g(x) = 3x - 5$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Slope $=\\frac{13-4}{6-3}=\\frac{9}{3}=3$. Plug $(3,4)$ into $g(x)=3x+b$: $4=9+b$, so $b=-5$ and $g(x)=3x-5$.\n\n**The Full Solution:**\nStep 1: Use two table rows to find the slope: $m=\\frac{13-4}{6-3}=3$.\nStep 2: Substitute one point into $g(x)=3x+b$. Using $(3,4)$: $4=3(3)+b$, so $b=4-9=-5$.\nStep 3: Thus $g(x)=3x-5$. Check the third row: $g(9)=27-5=22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}x+3$): inverts the slope ratio to $\\frac{\\Delta x}{\\Delta y}=\\frac{3}{9}$.\n* Choice B ($3x+4$): finds slope $3$ but drops the first $g(x)$-value $4$ into the intercept slot without solving.\n* Choice C ($3x+13$): computes $b=4+9$ instead of $4-9$ — a sign error when isolating $b$.\n\n**Test Day Takeaway:** A correct slope is only half the work — substitute a point to solve for $b$, then verify with a THIRD table row when one is available.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A regional orchestra surveyed a random sample of its subscribers and estimated that $64\\%$ of all subscribers attend at least four concerts each season, with an associated margin of error of $4$ percentage points. Which of the following is the most appropriate conclusion?",
  choices: [
    // distractor: treats the sample estimate as an exact population value
    { id: "A", text: "Exactly $64\\%$ of all subscribers attend at least four concerts each season." },
    // distractor: keeps only the lower endpoint and reverses it into a one-sided claim
    { id: "B", text: "Fewer than $60\\%$ of all subscribers attend at least four concerts each season." },
    // distractor: applies the interval to the sampled subscribers, whose percentage is already known
    { id: "C", text: "Between $60\\%$ and $68\\%$ of the sampled subscribers attend at least four concerts each season." },
    { id: "D", text: "It is plausible that between $60\\%$ and $68\\%$ of all subscribers attend at least four concerts each season." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** A margin of error builds a plausible interval around the estimate: $64\\%\\pm 4\\%=[60\\%, 68\\%]$ for ALL subscribers. That is Choice D.\n\n**The Full Solution:**\nStep 1: The margin of error means the true percentage for the whole population of subscribers is plausibly within $4$ percentage points of the estimate $64\\%$.\nStep 2: Lower endpoint: $64-4=60\\%$. Upper endpoint: $64+4=68\\%$.\nStep 3: So it is plausible that between $60\\%$ and $68\\%$ of all subscribers attend at least four concerts each season.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample estimate as an exact population value, ignoring the margin of error.\n* Choice B: keeps only the lower endpoint and turns it into a one-sided \"fewer than\" claim the data do not support.\n* Choice C: applies the interval to the SAMPLED subscribers — their percentage is already known exactly; the interval describes the population.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error gives a two-sided plausible interval for the POPULATION value — never an exact figure, never a claim about the sample itself.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A system of equations is shown.\n\n$2x + 5y = 32$\n$3x - 10y = -22$\n\nWhat is the value of $x$?",
  choices: [
    // distractor: adds the original equations without scaling and reports x - y = 2
    { id: "A", text: "$2$" },
    // distractor: gives the value of y instead of x
    { id: "B", text: "$4$" },
    { id: "C", text: "$6$" },
    // distractor: divides 32 by the x-coefficient 2, ignoring the y-term
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Double the first equation: $4x+10y=64$. Add the second: $7x=42$, so $x=6$.\n\n**The Full Solution:**\nStep 1: The $y$-coefficients are $+5$ and $-10$, so multiply the first equation by $2$: $4x+10y=64$.\nStep 2: Add it to $3x-10y=-22$; the $y$-terms cancel: $7x=42$.\nStep 3: Divide: $x=6$.\nStep 4: Check: from the first equation, $12+5y=32$ gives $y=4$; then $3(6)-10(4)=18-40=-22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): adds the equations without scaling first, which leaves both variables and invites a misread.\n* Choice B ($4$): solves on to $y=4$ and reports the wrong variable.\n* Choice D ($16$): divides $32$ by $2$ as if the $y$-term were not there.\n\n**Test Day Takeaway:** When coefficients are not opposites yet, scale ONE equation so they are — then one addition eliminates a variable.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ defined by $h(t) = -16t^2 + 96t$ gives the height, in feet, of a firework shell $t$ seconds after it is launched. What is the maximum height of the shell, in feet?",
  choices: [
    // distractor: gives the time t at which the maximum occurs
    { id: "A", text: "$3$" },
    // distractor: evaluates at the wrong time t = 2
    { id: "B", text: "$128$" },
    { id: "C", text: "$144$" },
    // distractor: drops the -16t^2 term and computes 96(3)
    { id: "D", text: "$288$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The parabola opens down, so the max is at the vertex $t=-\\frac{96}{2(-16)}=3$. Then $h(3)=-144+288=144$ feet.\n\n**The Full Solution:**\nStep 1: $h(t)=-16t^2+96t$ has $a=-16<0$, so it opens downward and peaks at its vertex.\nStep 2: Vertex time: $t=-\\frac{b}{2a}=-\\frac{96}{2(-16)}=3$ seconds.\nStep 3: Maximum height: $h(3)=-16(3)^2+96(3)=-144+288=144$ feet.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the vertex's $t$-coordinate ($3$ seconds), not the height.\n* Choice B ($128$): evaluates at the wrong time $t=2$: $-64+192=128$.\n* Choice D ($288$): drops the $-16t^2$ term and computes $96(3)$ alone.\n\n**Test Day Takeaway:** For $f(t)=at^2+bt+c$, the vertex sits at $t=-\\frac{b}{2a}$; the max or min VALUE comes from substituting that $t$ back into the function.",
  skills: ["function-interpretation", "quadratic-equations", "vertex-form"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = 2x^2 - 12x + 11$ intersects the horizontal line $y = c$ at exactly one point. What is the value of $c$?",
  choices: [
    // distractor: sign error on the squared term: -18 - 36 + 11
    { id: "A", text: "$-43$" },
    { id: "B", text: "$-7$" },
    // distractor: gives the x-coordinate of the vertex (3) instead of the minimum value
    { id: "C", text: "$3$" },
    // distractor: reads the constant term 11 (the y-value at x = 0)
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A horizontal line meets an upward parabola at exactly one point only at the vertex, so $c$ equals the minimum. Vertex at $x=-\\frac{-12}{2(2)}=3$, and the minimum is $2(9)-36+11=-7$.\n\n**The Full Solution:**\nStep 1: $y=2x^2-12x+11$ opens upward, so its lowest point is the vertex.\nStep 2: A line $y=c$ touches the parabola once exactly when $c$ is that minimum value.\nStep 3: Vertex $x$-coordinate: $x=-\\frac{b}{2a}=\\frac{12}{4}=3$.\nStep 4: Minimum value: $2(3)^2-12(3)+11=18-36+11=-7$, so $c=-7$.\n\nEquivalently, $2x^2-12x+(11-c)=0$ has one solution when the discriminant is $0$: $144-8(11-c)=0 \\Rightarrow 56+8c=0 \\Rightarrow c=-7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-43$): flips the sign on the squared term, computing $-18-36+11$.\n* Choice C ($3$): reports the vertex's $x$-coordinate instead of its $y$-value.\n* Choice D ($11$): reads the constant term — the value at $x=0$, not the minimum.\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola only at the vertex, so the single-intersection value equals the min (upward) or max (downward).",
  skills: ["quadratic-equations", "vertex-form", "discriminant"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A museum's catalog lists $6{,}500$ photographs in its collection, and $32\\%$ of the photographs have been digitized. How many of the photographs have been digitized?",
  choices: [
    // distractor: decimal slip — multiplies by 0.032
    { id: "A", text: "$208$" },
    { id: "B", text: "$2{,}080$" },
    // distractor: uses the complement 68% instead of 32%
    { id: "C", text: "$4{,}420$" },
    // distractor: adds the number 32 to the count
    { id: "D", text: "$6{,}532$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $32\\%$ of $6{,}500$ is $0.32\\times 6{,}500=2{,}080$.\n\n**The Full Solution:**\nStep 1: \"$32\\%$ of the photographs\" means multiply the total by $0.32$.\nStep 2: $0.32\\times 6{,}500=2{,}080$ photographs.\n\n**Why the wrong answers are tempting:**\n* Choice A ($208$): multiplies by $0.032$ — a one-place decimal slip.\n* Choice C ($4{,}420$): uses the complement, $0.68\\times 6{,}500$ — the photographs NOT digitized.\n* Choice D ($6{,}532$): adds the number $32$ to the count, mixing a percent with a tally.\n\n**Test Day Takeaway:** \"$X\\%$ of a total\" means multiply by $\\frac{X}{100}$ — and check whether the question wants the percent or its complement.",
  skills: ["percents"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A moving company charges $\\$30$ per van trip plus $\\$0.25$ per kilogram of furniture moved. A customer's bill for a single-trip move was $\\$66$. If the customer had instead moved $40$ fewer kilograms split across two van trips (each trip incurring the trip charge), what would the total bill have been?",
  choices: [
    // distractor: drops both trip charges and bills only the mass
    { id: "A", text: "$\\$26$" },
    // distractor: charges only one trip fee: 30 + 26
    { id: "B", text: "$\\$56$" },
    { id: "C", text: "$\\$86$" },
    // distractor: keeps the original 144 kilograms: 60 + 36
    { id: "D", text: "$\\$96$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** First move: $0.25m=66-30=36 \\Rightarrow m=144$ kilograms. New move: $144-40=104$ kilograms over $2$ trips: $2(30)+0.25(104)=60+26=\\$86$.\n\n**The Full Solution:**\nStep 1: Solve for the original mass: $30+0.25m=66 \\Rightarrow 0.25m=36 \\Rightarrow m=144$.\nStep 2: The new mass is $40$ fewer kilograms: $144-40=104$.\nStep 3: The new bill has two trip charges plus the mass charge: $2(30)+0.25(104)=60+26=\\$86$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$26$): bills only the mass charge $0.25(104)$ and drops both trip charges.\n* Choice B ($\\$56$): charges one trip fee instead of two: $30+26$.\n* Choice D ($\\$96$): keeps the original $144$ kilograms instead of the reduced load: $60+0.25(144)=96$.\n\n**Test Day Takeaway:** Recover the hidden quantity from the first bill, then rebuild the new bill from scratch — every changed term (trips AND mass) must be updated.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x}{4} + \\dfrac{x}{10} = 21$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$60$" },
    // distractor: uses only the first term, solving x/4 = 21
    { id: "B", text: "$84$" },
    // distractor: multiplies 21 by the denominator 10 alone
    { id: "C", text: "$210$" },
    // distractor: adds the denominators and solves x/14 = 21
    { id: "D", text: "$294$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply through by $20$: $5x+2x=420$, so $7x=420$ and $x=60$.\n\n**The Full Solution:**\nStep 1: The LCD of $4$ and $10$ is $20$. Multiply every term by $20$: $5x+2x=420$.\nStep 2: Combine: $7x=420$.\nStep 3: Divide by $7$: $x=60$.\nStep 4: Check: $\\frac{60}{4}+\\frac{60}{10}=15+6=21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$): solves $\\frac{x}{4}=21$ alone, ignoring the second term.\n* Choice C ($210$): multiplies $21$ by $10$ without clearing the other fraction.\n* Choice D ($294$): adds the denominators, solving $\\frac{x}{14}=21$ — fractions do not combine that way.\n\n**Test Day Takeaway:** $\\frac{x}{a}+\\frac{x}{b}\\ne\\frac{x}{a+b}$. Multiply through by the LCD to clear every fraction at once, then solve the linear equation that remains.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A parabola in the $xy$-plane has the equation $y = 2(x - 4)^2 - 18$. Which of the following is an equivalent form that displays the $x$-intercepts of the parabola as constants?",
  choices: [
    { id: "A", text: "$y = 2(x - 1)(x - 7)$" },
    // distractor: zeros at -1 and 7 — the vertex would be at x = 3, not 4
    { id: "B", text: "$y = 2(x + 1)(x - 7)$" },
    // distractor: zeros at 1 and -7 — the vertex would be at x = -3
    { id: "C", text: "$y = 2(x - 1)(x + 7)$" },
    // distractor: zeros at -1 and -7 — the vertex would be at x = -4
    { id: "D", text: "$y = 2(x + 1)(x + 7)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Expand and factor: $2(x-4)^2-18=2(x^2-8x+16)-18=2x^2-16x+14=2(x-1)(x-7)$, which displays the zeros $1$ and $7$.\n\n**The Full Solution:**\nStep 1: Expand the square: $2(x-4)^2-18=2(x^2-8x+16)-18$.\nStep 2: Distribute and combine: $2x^2-16x+32-18=2x^2-16x+14$.\nStep 3: Factor out $2$, then factor the trinomial: $2(x^2-8x+7)=2(x-1)(x-7)$.\nStep 4: The $x$-intercepts are $x=1$ and $x=7$; their average $\\frac{1+7}{2}=4$ matches the vertex $x=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2(x+1)(x-7)$): zeros at $-1$ and $7$ would put the vertex at $x=3$, not $4$.\n* Choice C ($2(x-1)(x+7)$): zeros at $1$ and $-7$ put the vertex at $x=-3$.\n* Choice D ($2(x+1)(x+7)$): zeros at $-1$ and $-7$ put the vertex at $x=-4$.\n\n**Test Day Takeaway:** To pass from vertex form to factored form, expand, simplify, and factor — then sanity-check that the zeros' average equals the vertex $x$-coordinate.",
  skills: ["quadratic-equations", "factoring", "vertex-form"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 2x - 7$. If $f(g(x)) = 6x^2 + 3$ for all real numbers $x$, which expression defines $g(x)$?",
  choices: [
    // distractor: subtracts 7 instead of adding when isolating g: (6x^2 + 3 - 7)/2
    { id: "A", text: "$3x^2 - 2$" },
    // distractor: divides by 2 before undoing the -7: (6x^2 + 3)/2
    { id: "B", text: "$3x^2 + \\dfrac{3}{2}$" },
    { id: "C", text: "$3x^2 + 5$" },
    // distractor: adds 7 but forgets to divide by 2
    { id: "D", text: "$6x^2 + 10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $f(g(x))=2g(x)-7=6x^2+3$. Add $7$: $2g(x)=6x^2+10$. Divide by $2$: $g(x)=3x^2+5$.\n\n**The Full Solution:**\nStep 1: Substitute $g(x)$ as the input to $f$: $f(g(x))=2\\cdot g(x)-7$.\nStep 2: Set equal to the given output: $2g(x)-7=6x^2+3$.\nStep 3: Add $7$ to both sides: $2g(x)=6x^2+10$.\nStep 4: Divide by $2$: $g(x)=3x^2+5$.\nCheck: $f(3x^2+5)=2(3x^2+5)-7=6x^2+10-7=6x^2+3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2-2$): subtracts $7$ instead of adding it when undoing $f$.\n* Choice B ($3x^2+\\frac{3}{2}$): divides by $2$ BEFORE undoing the $-7$, so the constant is wrong.\n* Choice D ($6x^2+10$): adds $7$ correctly but forgets to divide by $2$.\n\n**Test Day Takeaway:** Treat $g(x)$ as the unknown input: substitute it into $f$, undo the additive constant first, then undo the leading coefficient — order matters.",
  skills: ["function-composition", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "An outdoor-gear shop sells a camping lantern. The regular price of the lantern is $\\$56.00$. During a clearance, the lantern's price is $75\\%$ less than the regular price, and that clearance price is $40\\%$ greater than the shop's cost for one lantern. What is the shop's cost, in dollars, for one lantern?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~40s):** Clearance price $=(1-0.75)(56)=0.25\\times 56=\\$14$. The clearance price is $40\\%$ above cost, so cost $=\\frac{14}{1.40}=\\$10$.\n\n**The Full Solution:**\nStep 1: Apply the $75\\%$ decrease: clearance $=56.00\\times(1-0.75)=56.00\\times 0.25=\\$14.00$.\nStep 2: The clearance price is $40\\%$ greater than cost, so $\\text{clearance}=1.40\\times\\text{cost}$, giving $14.00=1.40\\times\\text{cost}$.\nStep 3: Divide: $\\text{cost}=\\frac{14.00}{1.40}=\\$10.00$.\nCheck: $40\\%$ more than $\\$10$ is $\\$14$, and $\\$14$ is $75\\%$ less than $\\$56$. $\\checkmark$\n\n**Common Mistakes:** Taking $40\\%$ OF the clearance price ($14\\times 0.60=8.40$) instead of dividing by $1.40$; stopping at the clearance price $\\$14$; combining the percents into one step ($75-40=35$) — chained percents never subtract.\n\n**Test Day Takeaway:** Chain percents one link at a time. \"$X\\%$ greater than the cost\" means price $=(1+\\frac{X}{100})\\cdot\\text{cost}$ — recover the cost by DIVIDING.",
  skills: ["percents", "reverse-percentage"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the value of $\\tan\\dfrac{31\\pi}{4}$?",
  choices: [
    { id: "A", text: "$-1$" },
    // distractor: reports the sine value at 7pi/4 instead of the tangent
    { id: "B", text: "$-\\dfrac{\\sqrt{2}}{2}$" },
    // distractor: reports the cosine value at 7pi/4
    { id: "C", text: "$\\dfrac{\\sqrt{2}}{2}$" },
    // distractor: right magnitude but drops the Quadrant IV sign
    { id: "D", text: "$1$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Coterminal Angles — Unit Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Subtract full turns: $\\frac{31\\pi}{4}-\\frac{24\\pi}{4}=\\frac{7\\pi}{4}$. This lands in Quadrant IV, where tangent is negative, with reference angle $\\frac{\\pi}{4}$, so $\\tan\\frac{7\\pi}{4}=-1$.\n\n**The Full Solution:**\nStep 1: Reduce by multiples of $2\\pi=\\frac{8\\pi}{4}$: $\\frac{31\\pi}{4}-3(2\\pi)=\\frac{31\\pi}{4}-\\frac{24\\pi}{4}=\\frac{7\\pi}{4}$.\nStep 2: $\\frac{7\\pi}{4}$ is in Quadrant IV (between $\\frac{3\\pi}{2}$ and $2\\pi$), where sine is negative, cosine is positive, and tangent is negative.\nStep 3: Reference angle: $2\\pi-\\frac{7\\pi}{4}=\\frac{\\pi}{4}$, and $\\tan\\frac{\\pi}{4}=1$.\nStep 4: Apply the QIV sign: $\\tan\\frac{31\\pi}{4}=-1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{\\sqrt{2}}{2}$): reports $\\sin\\frac{7\\pi}{4}$ — the right sign but the wrong function.\n* Choice C ($\\frac{\\sqrt{2}}{2}$): reports $\\cos\\frac{7\\pi}{4}$ instead of the tangent.\n* Choice D ($1$): right magnitude but drops the negative sign for Quadrant IV.\n\n**Test Day Takeaway:** For a large radian angle, strip out $2\\pi$'s until you land in $[0, 2\\pi)$, then let the quadrant set the sign and the reference angle set the magnitude.",
  skills: ["trigonometry", "radians", "unit-circle"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A trail race offered adult registrations for $\\$25$ each and student registrations for $\\$15$ each. A total of $180$ registrations were sold, and the total amount collected was $\\$3{,}900$. How many adult registrations were sold?",
  correctAnswer: "120",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~30s):** Let $a$ = adult, $s$ = student. From $a+s=180$, $s=180-a$. Substitute into $25a+15s=3{,}900$: $25a+15(180-a)=3{,}900 \\Rightarrow 10a+2{,}700=3{,}900 \\Rightarrow a=120$.\n\n**The Full Solution:**\nStep 1: Set up the count and revenue equations: $a+s=180$ and $25a+15s=3{,}900$.\nStep 2: Solve the first for $s$: $s=180-a$.\nStep 3: Substitute: $25a+15(180-a)=3{,}900 \\Rightarrow 25a+2{,}700-15a=3{,}900$.\nStep 4: Combine and solve: $10a=1{,}200 \\Rightarrow a=120$.\nCheck: $s=60$ and $25(120)+15(60)=3{,}000+900=3{,}900$. $\\checkmark$\n\n**Common Mistakes:** Answering $60$ (the number of student registrations); setting the revenue equation equal to $180$ instead of $3{,}900$; distributing $15(180-a)$ as $2{,}700+15a$ and losing the sign.\n\n**Test Day Takeaway:** Build one equation for the count and one for the dollars, substitute, and re-read which quantity the question wants before gridding.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 2)(x - 8)$. The function $g$ is defined by $g(x) = f(x) + k$, where $k$ is a constant. If the graph of $y = g(x)$ in the $xy$-plane has exactly one $x$-intercept, what is the value of $k$?",
  choices: [
    // distractor: gives f's minimum value itself, not the shift that cancels it
    { id: "A", text: "$-25$" },
    // distractor: grabs the constant term of f (which is -16)
    { id: "B", text: "$-16$" },
    // distractor: uses the product of the zeros' magnitudes, 2 * 8
    { id: "C", text: "$16$" },
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $f$ has its minimum at the midpoint of its zeros, $x=3$, where $f(3)=(5)(-5)=-25$. For exactly one $x$-intercept the vertex must sit on the $x$-axis: $-25+k=0 \\Rightarrow k=25$.\n\n**The Full Solution:**\nStep 1: $f(x)=(x+2)(x-8)$ has zeros at $x=-2$ and $x=8$, so the vertex is at $x=\\frac{-2+8}{2}=3$.\nStep 2: Minimum value: $f(3)=(3+2)(3-8)=(5)(-5)=-25$.\nStep 3: $g(x)=f(x)+k$ has minimum $-25+k$.\nStep 4: Exactly one $x$-intercept means the vertex lies on the $x$-axis: $-25+k=0 \\Rightarrow k=25$.\nCheck: $g(x)=x^2-6x-16+25=x^2-6x+9=(x-3)^2$ — a single $x$-intercept at $x=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): reports $f$'s minimum instead of the shift that cancels it.\n* Choice B ($-16$): grabs the constant term of $f$ rather than the negative of its minimum.\n* Choice C ($16$): multiplies the zeros' magnitudes $2\\cdot 8$, a stray product.\n\n**Test Day Takeaway:** A parabola has exactly one $x$-intercept when its vertex sits on the $x$-axis — shift by the NEGATIVE of the current minimum (or maximum).",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the number of deliveries a florist made on each of $12$ days. What is the range of the number of deliveries per day?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 3, count: 2 },
      { value: 4, count: 3 },
      { value: 5, count: 2 },
      { value: 6, count: 1 },
      { value: 8, count: 3 },
      { value: 10, count: 1 }
    ],
    xMin: 0, xMax: 11,
    xLabel: "Number of deliveries"
  } },
  choices: [
    // distractor: reports the minimum value only
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    // distractor: reports the maximum value only
    { id: "C", text: "$10$" },
    // distractor: counts the observations (12 days) instead of computing max - min
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=\\text{max}-\\text{min}=10-3=7$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the greatest value minus the least value.\nStep 2: Read the dot plot: the leftmost stack sits at $3$ and the rightmost dot sits at $10$.\nStep 3: Range $=10-3=7$ deliveries.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports only the minimum and skips the subtraction.\n* Choice C ($10$): reports only the maximum and skips the subtraction.\n* Choice D ($12$): counts the dots (the $12$ days) — a frequency, not a data value.\n\n**Test Day Takeaway:** Range is one subtraction: greatest value minus least value. On a dot plot, read the endpoints of the number line, not the stack heights.",
  skills: ["statistics", "range"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A ski patroller recorded the daily snowfall total, in centimeters, at a mountain station on each of $20$ days. The histogram shows how many days had totals in each interval, but the exact total for each day is not given. What is the smallest possible value of the mean daily snowfall, in centimeters, for the $20$ days?",
  diagram: {
    type: "barChart",
    params: {
      data: [
        { label: "10–19", value: 6 },
        { label: "20–29", value: 8 },
        { label: "30–39", value: 4 },
        { label: "40–49", value: 2 }
      ],
      xAxisLabel: "Snowfall (cm)",
      yAxisLabel: "Number of days",
      yMax: 10,
      yStep: 2
    }
  },
  correctAnswer: "21",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~50s):** The mean is smallest when every day's total sits at its interval's lower endpoint. Use $10, 20, 30, 40$ with frequencies $6, 8, 4, 2$: total $=60+160+120+80=420$, so mean $=\\frac{420}{20}=21$.\n\n**The Full Solution:**\nStep 1: The histogram fixes how many days fall in each interval but not the exact totals, so the true mean lies between two extremes.\nStep 2: To minimize the mean, assume every day in an interval had the smallest total the interval allows — its lower endpoint.\nStep 3: Lower endpoints $10, 20, 30, 40$ with frequencies $6, 8, 4, 2$ give minimum total $=10(6)+20(8)+30(4)+40(2)=60+160+120+80=420$.\nStep 4: Divide by the $6+8+4+2=20$ days: smallest possible mean $=\\frac{420}{20}=21$.\n\n**Common Mistakes:** Using the interval midpoints (that gives the ESTIMATE $25.5$, not the minimum); using the upper endpoints (the largest possible mean, $30$); dividing by the number of intervals ($4$) instead of the number of days ($20$).\n\n**Test Day Takeaway:** With grouped data the mean is bounded — smallest when every value sits at its interval's lower endpoint, largest at the upper endpoints.",
  skills: ["statistics", "grouped-data", "mean"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $ABC$ shown, angle $B$ is the right angle, $AC = 61$, and $AB = 11$. What is the value of $\\cos(C)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["A", "B", "C"],
      sideLabels: ["11", "", "61"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses AB/AC — this is sin(C), not cos(C)
    { id: "A", text: "$\\dfrac{11}{61}$" },
    // distractor: uses AB/BC — this is tan(C)
    { id: "B", text: "$\\dfrac{11}{60}$" },
    { id: "C", text: "$\\dfrac{60}{61}$" },
    // distractor: inverts the tangent ratio (BC/AB)
    { id: "D", text: "$\\dfrac{60}{11}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The right angle is at $B$, so $AC=61$ is the hypotenuse and the missing leg is $BC=\\sqrt{61^2-11^2}=\\sqrt{3{,}600}=60$. For angle $C$, the adjacent leg is $BC$, so $\\cos(C)=\\frac{60}{61}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $B$, side $AC=61$ is the hypotenuse and $AB=11$, $BC$ are the legs.\nStep 2: Find the missing leg: $BC^2=AC^2-AB^2=3{,}721-121=3{,}600$, so $BC=60$.\nStep 3: For angle $C$, side $BC=60$ is adjacent and $AC=61$ is the hypotenuse, so $\\cos(C)=\\frac{\\text{adjacent}}{\\text{hypotenuse}}=\\frac{60}{61}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{61}$): uses the opposite leg over the hypotenuse — that is $\\sin(C)$.\n* Choice B ($\\frac{11}{60}$): uses opposite over adjacent — that is $\\tan(C)$.\n* Choice D ($\\frac{60}{11}$): inverts the tangent ratio.\n\n**Test Day Takeaway:** CAH — $\\cos=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$. Identify which leg touches the angle in question before writing any ratio; find the missing side with the Pythagorean theorem first if needed.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{2}{3}x + \\dfrac{5}{6}y = \\dfrac{1}{2}x + \\dfrac{3}{2}$$\n$$\\dfrac{3}{8}x + \\dfrac{p}{4}y = \\dfrac{1}{8}x - 1$$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~50s):** Clear fractions to get $x+5y=9$ and $x+py=-4$. The $x$-coefficients already match, so for no solution the $y$-coefficients must match too: $p=5$. The constants $9$ and $-4$ differ, so the lines are parallel and never meet.\n\n**The Full Solution:**\nStep 1: Equation 1: subtract $\\frac{1}{2}x$ from both sides of $\\frac{2}{3}x+\\frac{5}{6}y=\\frac{1}{2}x+\\frac{3}{2}$ to get $\\frac{1}{6}x+\\frac{5}{6}y=\\frac{3}{2}$; multiply by $6$: $x+5y=9$.\nStep 2: Equation 2: subtract $\\frac{1}{8}x$ from $\\frac{3}{8}x+\\frac{p}{4}y=\\frac{1}{8}x-1$ to get $\\frac{1}{4}x+\\frac{p}{4}y=-1$; multiply by $4$: $x+py=-4$.\nStep 3: A linear system has no solution exactly when the lines are parallel but distinct — matching $x$- and $y$-coefficients with mismatched constants. Both $x$-coefficients are $1$, so set $p=5$.\nStep 4: With $p=5$ the equations read $x+5y=9$ and $x+5y=-4$; the same expression cannot equal both $9$ and $-4$, so there is no solution. $\\checkmark$\n\n**Common Mistakes:** Comparing raw coefficients before putting both equations in the same standard form; solving for infinitely many solutions instead (that would also require matching constants, which is impossible here); losing a sign while clearing the fractions.\n\n**Test Day Takeaway:** No solution means parallel-but-distinct lines. Rewrite BOTH equations in the same standard form first, then match the variable coefficients while the constants disagree.",
  skills: ["systems-of-equations", "no-solution-condition"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 6)(x - 2)(x - 9)$. Which of the following must be true about the values of $y = f(x) + 5$ at $x = -6, 2, 9$?",
  choices: [
    // distractor: subtracts 5 instead of adding (wrong sign on the shift)
    { id: "A", text: "All three $y$-values equal $-5$." },
    // distractor: forgets the +5 shift entirely
    { id: "B", text: "All three $y$-values equal $0$." },
    // distractor: confuses the input x-values with the output y-values
    { id: "C", text: "The three $y$-values equal $-6$, $2$, and $9$, respectively." },
    { id: "D", text: "All three $y$-values equal $5$." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The listed $x$-values are exactly the zeros of $f$, so $f(x)=0$ at each one. Then $y=f(x)+5=0+5=5$ for all three.\n\n**The Full Solution:**\nStep 1: The factored form $f(x)=(x+6)(x-2)(x-9)$ has zeros at $x=-6, 2, 9$.\nStep 2: At each of those inputs one factor is $0$, so the whole product is $0$: $f(x)=0$.\nStep 3: The new expression adds $5$ to every output, so $y=f(x)+5=0+5=5$ at every listed input — all three $y$-values equal $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): subtracts the $5$ instead of adding it.\n* Choice B ($0$): forgets the $+5$ shift and reports $f$'s own values.\n* Choice C: reports the $x$-values as if they were the outputs.\n\n**Test Day Takeaway:** $y=f(x)+k$ shifts every output by $k$. At a zero of $f$ the output is $0$, so the shifted value is simply $k$ — no expansion needed.",
  skills: ["polynomial-functions", "function-transformations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "What value of $x$ satisfies the equation $\\dfrac{x}{x - 3} + \\dfrac{3}{x + 2} = \\dfrac{15}{x^2 - x - 6}$?",
  correctAnswer: "-8",
  explanation: "**SAT Pattern: Rational Equation**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~45s):** Factor the right denominator: $x^2-x-6=(x-3)(x+2)$. Multiply both sides by $(x-3)(x+2)$: $x(x+2)+3(x-3)=15$, which simplifies to $x^2+5x-24=0$, i.e. $(x+8)(x-3)=0$. So $x=-8$ or $x=3$; reject $x=3$ (it zeroes a denominator), leaving $x=-8$.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2-x-6=(x-3)(x+2)$, the common denominator of all three fractions.\nStep 2: Multiply every term by $(x-3)(x+2)$: $x(x+2)+3(x-3)=15$.\nStep 3: Expand and collect: $x^2+2x+3x-9=15 \\Rightarrow x^2+5x-24=0 \\Rightarrow (x+8)(x-3)=0$, so $x=-8$ or $x=3$.\nStep 4: Check for extraneous roots: $x=3$ makes $x-3=0$, dividing by zero, so reject it. Only $x=-8$ survives.\nStep 5: Verify $x=-8$: $\\frac{-8}{-11}+\\frac{3}{-6}=\\frac{8}{11}-\\frac{1}{2}=\\frac{5}{22}$, and the right side is $\\frac{15}{64+8-6}=\\frac{15}{66}=\\frac{5}{22}$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x=3$ — it solves the cleared polynomial but makes the original equation undefined; failing to factor the right denominator before clearing; distributing $3(x-3)$ as $3x-3$.\n\n**Test Day Takeaway:** For a rational equation, factor every denominator, multiply through by the LCD, solve — then reject any root that zeroes a denominator.",
  skills: ["rational-equations", "factoring", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An isosceles right triangle has a perimeter of $42 + 42\\sqrt{2}$ centimeters. What is the length, in centimeters, of the hypotenuse of this triangle?",
  choices: [
    // distractor: halves the 42 without solving the perimeter equation
    { id: "A", text: "$21$" },
    // distractor: gives the leg length instead of the hypotenuse
    { id: "B", text: "$21\\sqrt{2}$" },
    { id: "C", text: "$42$" },
    // distractor: reads the radical part of the perimeter as the hypotenuse
    { id: "D", text: "$42\\sqrt{2}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Let the leg be $L$; the hypotenuse is $L\\sqrt{2}$, so the perimeter is $2L+L\\sqrt{2}=L(2+\\sqrt{2})$. Setting $L(2+\\sqrt{2})=42(1+\\sqrt{2})$ gives $L=21\\sqrt{2}$, so the hypotenuse is $L\\sqrt{2}=42$.\n\n**The Full Solution:**\nStep 1: In an isosceles right triangle the legs are equal ($L$) and the hypotenuse is $L\\sqrt{2}$, so the perimeter is $2L+L\\sqrt{2}=L(2+\\sqrt{2})$.\nStep 2: Set it equal to $42+42\\sqrt{2}=42(1+\\sqrt{2})$: $L=\\frac{42(1+\\sqrt{2})}{2+\\sqrt{2}}$.\nStep 3: Rationalize with $\\frac{2-\\sqrt{2}}{2-\\sqrt{2}}$: the denominator becomes $4-2=2$ and the numerator becomes $42(1+\\sqrt{2})(2-\\sqrt{2})=42(2-\\sqrt{2}+2\\sqrt{2}-2)=42\\sqrt{2}$.\nStep 4: So $L=\\frac{42\\sqrt{2}}{2}=21\\sqrt{2}$, and the hypotenuse is $21\\sqrt{2}\\cdot\\sqrt{2}=42$. Check: perimeter $=2(21\\sqrt{2})+42=42+42\\sqrt{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): halves the $42$ without setting up the perimeter equation.\n* Choice B ($21\\sqrt{2}$): correctly finds the LEG but the question asks for the hypotenuse.\n* Choice D ($42\\sqrt{2}$): reads the radical term of the perimeter as if it were a side.\n\n**Test Day Takeaway:** In a 45-45-90 triangle the perimeter is $L(2+\\sqrt{2})$. Solve for the leg, rationalize, and then answer the side the question names.",
  skills: ["special-right-triangles", "triangles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For the polynomial $h$ with $h(x) = x(x + 9)(x - 3)^2$, suppose $h(12 - w)$ equals $0$ for some constant $w$. Find the total of every value of $w$ for which this holds.",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~30s):** $h$ is zero at its roots $x=0, -9, 3$. Set the input equal to each: $12-w=0, -9, 3 \\Rightarrow w=12, 21, 9$. Their sum is $12+21+9=42$.\n\n**The Full Solution:**\nStep 1: A product is $0$ exactly when one factor is $0$, so $h(x)=x(x+9)(x-3)^2=0$ at $x=0$, $x=-9$, and $x=3$.\nStep 2: The squared factor $(x-3)^2$ makes $x=3$ a repeated root, but it is still a single distinct value — multiplicity does not create a new root.\nStep 3: $h(12-w)=0$ requires the input $12-w$ to be one of those roots: $12-w=0 \\Rightarrow w=12$; $12-w=-9 \\Rightarrow w=21$; $12-w=3 \\Rightarrow w=9$.\nStep 4: Sum the values: $12+21+9=42$. Check: $h(0)=0$, $h(-9)=(-9)(0)(-12)^2=0$, $h(3)=3(12)(0)^2=0$. $\\checkmark$\n\n**Common Mistakes:** Treating the squared factor as two roots and adding an extra $w$-value; dropping the root $x=0$ from the bare factor $x$, which would lose $w=12$; solving $12-w=r$ as $w=r-12$ and flipping every sign.\n\n**Test Day Takeaway:** List every DISTINCT root, set the shifted input equal to each, and sum the results — a repeated factor still contributes only one root value.",
  skills: ["polynomial-zeros", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
