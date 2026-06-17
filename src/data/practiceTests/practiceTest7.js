// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// 2026-06 M2 flow diversification: M2 reflowed to a unique wavy shape
// (E[2,3,11] / M[1,4,5,8,10,15,19] / H[6,7,9,12,13,14,16,17,18,20,21,22]) with
// 6 transformed pool items infused and cloned archetypes retired. M1 de-cloned:
// easy-block reshuffled, shifted-output/doubling/Pythagorean carriers refreshed.

export const practiceTest7 = {
  id: "practice-test-7",
  title: "Practice Test 7",
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
  question: "If $7c - 9 = 12$, what is the value of $7c + 9$?",
  choices: [
    // distractor: stops one step early — solves for c = 3 and reports it
    { id: "A", text: "$3$" },
    // distractor: applies inverse operation — subtracts 9 instead of adding, returning the original right side
    { id: "B", text: "$12$" },
    { id: "C", text: "$30$" },
    // distractor: wrong base — doubles the right side instead of using the +18 shift
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $7c+9$ is exactly $18$ more than $7c-9$ (the constant jumps from $-9$ to $+9$). So $7c+9 = 12 + 18 = 30$.\n\n**The Full Solution:**\nStep 1: Solve the given equation. $7c-9=12 \\Rightarrow 7c=21$.\nStep 2: The target is $7c+9$. Since $7c=21$, $7c+9 = 21+9 = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): solved all the way to $c=3$ and reported the variable instead of $7c+9$.\n* Choice B ($12$): just echoed the right side of the original equation.\n* Choice D ($24$): doubled the $12$ instead of adding the $+18$ shift.\n\n**Test Day Takeaway:** When the question asks for an expression rather than the variable, compare it to the given expression — they often differ by a fixed constant you can add directly.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(t) = 250 - 15t$ models the amount of water, in gallons, remaining in a tank $t$ minutes after a drain is opened. What does the number $15$ represent in this context?",
  choices: [
    { id: "A", text: "The tank loses $15$ gallons each minute." },
    // distractor: confuses 15 with the initial value (which is 250)
    { id: "B", text: "The tank starts with $15$ gallons." },
    // distractor: treats 15 as a time value rather than a rate
    { id: "C", text: "After $15$ minutes, the tank is empty." },
    // distractor: confuses the rate with a maximum capacity
    { id: "D", text: "The tank holds a maximum of $15$ gallons." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $g(t)=250-15t$, the coefficient of $t$ is $-15$: the tank loses $15$ gallons every minute.\n\n**The Full Solution:**\nStep 1: The model has the form $g(t)=b+mt$ with $b=250$ and $m=-15$.\nStep 2: The slope $m=-15$ is the rate of change — each additional minute removes $15$ gallons. That matches Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the rate $15$ with the starting amount, which is the constant $250$.\n* Choice C: $\\frac{250}{15}\\approx 16.7$ minutes to empty, so $15$ minutes is not the empty time.\n* Choice D: treats a per-minute rate as a maximum capacity.\n\n**Test Day Takeaway:** In $f(x)=b+mx$, the coefficient of $x$ is the per-unit rate of change; the constant is the initial value.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A theater sold $312$ tickets for a Friday show, which was $40\\%$ of all tickets sold for that weekend. How many tickets were sold for the entire weekend?",
  choices: [
    // distractor: applies percent forward — $312 \cdot 0.40 = 124.8 \approx 125$
    { id: "A", text: "$125$" },
    // distractor: divides by complement $0.60$ — $\\frac{312}{0.60} = 520$
    { id: "B", text: "$520$" },
    { id: "C", text: "$780$" },
    // distractor: divides by $0.04$ instead of $0.40$ (decimal slip)
    { id: "D", text: "$7{,}800$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $312$ is $40\\%$ of the total, so total $= \\frac{312}{0.40} = 780$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the weekend total. Then $0.40T = 312$.\nStep 2: Divide by $0.40$: $T = \\frac{312}{0.40} = 780$.\nCheck: $0.40 \\times 780 = 312$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($125$): multiplied $312 \\times 0.40 \\approx 125$ instead of dividing.\n* Choice B ($520$): divided by the complement $0.60$ instead of $0.40$.\n* Choice D ($7{,}800$): divided by $0.04$ — a decimal slip on the percent.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3x}{14} = \\dfrac{27}{42}$, what is the value of $x + 4$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: stops at x = 3 (forgets the +4 final step)
    { id: "B", text: "$3$" },
    // distractor: subtracts 4 instead of adding
    { id: "C", text: "$-1$" },
    // distractor: leaves the answer at 3x = 9 instead of x
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Reduce $\\frac{27}{42}=\\frac{9}{14}$. Then $\\frac{3x}{14}=\\frac{9}{14}$ gives $3x=9$, so $x=3$ and $x+4=7$.\n\n**The Full Solution:**\nStep 1: Both sides can sit over $14$: $\\frac{27}{42}=\\frac{9}{14}$.\nStep 2: $\\frac{3x}{14}=\\frac{9}{14} \\Rightarrow 3x=9 \\Rightarrow x=3$.\nStep 3: The target is $x+4$, not $x$: $3+4=7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): solved for $x$ correctly but forgot to add $4$.\n* Choice C ($-1$): subtracted $4$ instead of adding it.\n* Choice D ($9$): stopped at $3x=9$ and never solved for $x$.\n\n**Test Day Takeaway:** Read the final clause before bubbling — the question frequently asks for a shifted quantity like $x+4$, not $x$ itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A delivery service charges a flat fee of $\\$4.50$ plus $\\$1.20$ per mile driven. Which expression represents the total cost, in dollars, for a delivery of $m$ miles?",
  choices: [
    // distractor: swaps the flat fee and per-mile rate
    { id: "A", text: "${}1.20 + 4.50m$" },
    { id: "B", text: "${}4.50 + 1.20m$" },
    // distractor: adds the two numbers and multiplies by m (treats flat fee as per-mile)
    { id: "C", text: "$5.70m$" },
    // distractor: same swap as A — coefficient and constant interchanged
    { id: "D", text: "$4.50m + 1.20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The flat fee $4.50$ is the constant; the per-mile charge $1.20$ multiplies $m$. Total $=4.50+1.20m$.\n\n**The Full Solution:**\nStep 1: The $\\$4.50$ flat fee does not depend on distance, so it is the constant term.\nStep 2: The $\\$1.20$-per-mile charge scales with miles, so it is $1.20m$.\nStep 3: Total cost $=4.50+1.20m$.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the roles — makes $4.50$ the per-mile rate and $1.20$ the flat fee.\n* Choice C: adds $4.50+1.20=5.70$ and multiplies by $m$, charging the flat fee per mile.\n* Choice D: same fee/rate swap as A, just rearranged.\n\n**Test Day Takeaway:** \"Flat fee\" is the constant term; \"per unit\" is the coefficient of the variable.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Which of the following systems of equations has no solution?",
  choices: [
    { id: "A", text: "$y = 3x + 5$ and $y = 3x - 2$" },
    // distractor: opposite slopes look like they "never meet" but actually intersect at (0, 5)
    { id: "B", text: "$y = 3x + 5$ and $y = -3x + 5$" },
    // distractor: identical lines — infinitely many solutions, not no solution
    { id: "C", text: "$y = 3x + 5$ and $2y = 6x + 10$" },
    // distractor: different slopes guarantee one intersection (off-by-one trap)
    { id: "D", text: "$y = 3x + 5$ and $y = 5x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines: same slope, different intercept. Choice A has slopes $3$ and $3$ but intercepts $5 \\neq -2$.\n\n**The Full Solution:**\nA linear system has no solution exactly when the lines are parallel.\n* A: slopes $3=3$, intercepts $5 \\neq -2 \\Rightarrow$ parallel, no solution. $\\checkmark$\n* B: slopes $3 \\neq -3 \\Rightarrow$ they intersect (one solution).\n* C: $2y=6x+10 \\Rightarrow y=3x+5$, identical to the first line $\\Rightarrow$ infinitely many solutions.\n* D: slopes $3 \\neq 5 \\Rightarrow$ they intersect (one solution).\n\n**Why the wrong answers are tempting:**\n* Choice B: opposite slopes seem like they avoid each other, but they cross at $(0,5)$.\n* Choice C: a duplicate equation gives infinitely many solutions, not none.\n* Choice D: different slopes always produce exactly one intersection.\n\n**Test Day Takeaway:** No solution $\\Rightarrow$ same slope, different intercept. Infinitely many $\\Rightarrow$ identical equations after simplifying.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(2x - 3) - 4(x + 7) = ax + b$ is true for all values of $x$, what is the value of $b$?",
  correctAnswer: "-43",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-43$.**\n\n**The Fast Way (~20s):** Expand: $5(2x-3)-4(x+7)=10x-15-4x-28=6x-43$. Matching $ax+b$ gives $b=-43$.\n\n**The Full Solution:**\nStep 1: Distribute. $5(2x-3)=10x-15$ and $-4(x+7)=-4x-28$.\nStep 2: Combine: $10x-15-4x-28 = 6x-43$.\nStep 3: Since this equals $ax+b$ for all $x$, match the constant term: $b=-43$ (and $a=6$).\n\n**Common Mistakes:** Dropping the negative across the second group ($-4x+28$ instead of $-4x-28$) gives $b=13$; mis-adding $-15-28$ gives $-13$ instead of $-43$.\n\n**Test Day Takeaway:** When two expressions are equal for all $x$, match like-power coefficients term by term — the constant terms must agree.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 3(0.85)^x$. What is the best interpretation of $f(4) \\approx 1.57$?",
  choices: [
    { id: "A", text: "After $4$ time periods, the quantity is approximately $1.57$." },
    // distractor: misreads as a constant linear decrease
    { id: "B", text: "The quantity decreases by $1.57$ each time period." },
    // distractor: reverses the input and output (the inverse function)
    { id: "C", text: "When the quantity is $4$, the time is approximately $1.57$." },
    // distractor: misinterprets the base 0.85 as an across-period decay rate
    { id: "D", text: "The quantity loses $85\\%$ of its value every $4$ time periods." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(4)\\approx 1.57$ reads as: when the input $x=4$ time periods, the output is about $1.57$.\n\n**The Full Solution:**\nStep 1: $f(x)=3(0.85)^x$ is exponential decay from an initial value of $3$.\nStep 2: $f(4)=3(0.85)^4 \\approx 3(0.522) \\approx 1.57$.\nStep 3: So after $4$ time periods the quantity has fallen to about $1.57$ — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: an exponential does not drop by a constant amount each period — that is linear behavior.\n* Choice C: reverses input and output, reading $4$ as the result and $1.57$ as the time.\n* Choice D: base $0.85$ means the quantity keeps $85\\%$ (loses $15\\%$) each period, not loses $85\\%$ over $4$ periods.\n\n**Test Day Takeaway:** $f(a)=b$ means \"input $a$ gives output $b$.\" Watch for choices that flip the input and output.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, 3)$. What is the $y$-intercept of line $q$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: uses the slope of p (parallel, not perpendicular)
    { id: "B", text: "$1$" },
    // distractor: arithmetic error in the point-slope intercept step
    { id: "C", text: "$\\dfrac{7}{2}$" },
    // distractor: confuses the x-coordinate of the given point with the y-intercept
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope of $p$ is $\\frac{7-(-1)}{6-2}=\\frac{8}{4}=2$, so line $q$ has slope $-\\frac{1}{2}$. Through $(4,3)$: $y=-\\frac{1}{2}(x-4)+3=-\\frac{1}{2}x+5$. Intercept $=5$.\n\n**The Full Solution:**\nStep 1: Slope of $p=\\frac{7-(-1)}{6-2}=\\frac{8}{4}=2$.\nStep 2: Perpendicular slope is the negative reciprocal: $-\\frac{1}{2}$.\nStep 3: Use point-slope with $(4,3)$: $y-3=-\\frac{1}{2}(x-4) \\Rightarrow y=-\\frac{1}{2}x+2+3=-\\frac{1}{2}x+5$.\nStep 4: The $y$-intercept is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): used slope $2$ (parallel to $p$) instead of the perpendicular slope.\n* Choice C ($\\frac{7}{2}$): arithmetic slip in the point-slope step.\n* Choice D ($4$): grabbed the $x$-coordinate of the given point as the intercept.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals — flip the fraction and switch the sign.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A culture of edible-mushroom spores doubles every $5$ hours. If the culture starts with $80$ spores, which expression gives the number of spores after $t$ hours?",
  choices: [
    // distractor: uses 5t in the exponent — would multiply the doubling rate fivefold each hour
    { id: "A", text: "$80(2)^{5t}$" },
    { id: "B", text: "$80(2)^{\\frac{t}{5}}$" },
    // distractor: swaps the base (5) and the doubling factor (2)
    { id: "C", text: "$80(5)^{\\frac{t}{2}}$" },
    // distractor: combines 80 and 2 into the base — incorrectly merges initial value with rate
    { id: "D", text: "$160^{\\frac{t}{5}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $5$ hours\" means base $2$ with exponent $\\frac{t}{5}$, starting from $80$: $80(2)^{\\frac{t}{5}}$.\n\n**The Full Solution:**\nStep 1: A fixed doubling period uses $P(t)=P_0 \\cdot 2^{\\frac{t}{d}}$ with $P_0=80$ and $d=5$.\nStep 2: So $P(t)=80(2)^{\\frac{t}{5}}$.\nCheck: $P(5)=80(2)^1=160$ (one doubling), $P(10)=80(2)^2=320$ (two doublings). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $5t$ instead of $\\frac{t}{5}$, which would double every hour, five times too fast.\n* Choice C: swaps the doubling factor $2$ with the period $5$ as the base.\n* Choice D: folds the initial value $80$ and base $2$ into one base of $160$.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\Rightarrow$ base $2$, exponent $\\frac{t}{d}$ — the exponent equals $1$ exactly when $t=d$.",
  skills: ["exponential-functions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Under 30 | $45$ | $75$ | $120$ |\n| 30 or older | $90$ | $40$ | $130$ |\n| Total | $135$ | $115$ | $250$ |\n\nBased on the two-way table above, what fraction of people who prefer tea are under $30$?",
  choices: [
    // distractor: uses the grand total (250) as denominator instead of the tea total
    { id: "A", text: "$\\dfrac{75}{250}$" },
    // distractor: uses the Under 30 row total (120) as denominator
    { id: "B", text: "$\\dfrac{75}{120}$" },
    { id: "C", text: "$\\dfrac{75}{115}$" },
    // distractor: gives the marginal P(tea) = 115/250 instead of the conditional
    { id: "D", text: "$\\dfrac{115}{250}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Of people who prefer tea\" restricts to the Tea column, total $115$. Of those, $75$ are under $30$. Fraction $=\\frac{75}{115}$.\n\n**The Full Solution:**\nStep 1: The condition is \"prefers tea,\" so the denominator is the Tea column total, $115$.\nStep 2: Within that column, the number under $30$ is $75$.\nStep 3: Fraction $=\\frac{75}{115}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{75}{250}$): used the grand total $250$ instead of the tea total.\n* Choice B ($\\frac{75}{120}$): used the Under-30 row total $120$ as the denominator.\n* Choice D ($\\frac{115}{250}$): gave the marginal chance of preferring tea, not the conditional.\n\n**Test Day Takeaway:** \"Of those who [condition]\" sets the denominator to that row or column total, never the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between the number of hours studied, $x$, and test scores, $y$, for $15$ students using the equation $y = 12.4x + 38.5$. One student studied for $5$ hours and scored $94$. What is the residual for this student?",
  diagram: { type: "scatterplot", params: {
    points: [[1,50],[2,66],[3,70],[4,88],[6,116],[7,125],[8,130],[9,150],[10,162]],
    xMin: 0, xMax: 11, yMin: 30, yMax: 170,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20,
    bestFitLine: { slope: 12.4, intercept: 38.5 },
    highlightPoint: [5, 94], highlightLabel: "(5, 94)", showResidual: true,
    xLabel: "Hours studied", yLabel: "Test score",
  } },
  choices: [
    { id: "A", text: "$-6.5$" },
    // distractor: applies the inverse operation — predicted minus actual instead of actual minus predicted
    { id: "B", text: "$6.5$" },
    // distractor: arithmetic error in the predicted value
    { id: "C", text: "$-5.5$" },
    // distractor: combines both errors — sign flip and arithmetic slip
    { id: "D", text: "$5.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted $=12.4(5)+38.5=100.5$. Residual $=$ actual $-$ predicted $=94-100.5=-6.5$.\n\n**The Full Solution:**\nStep 1: Predict at $x=5$: $y=12.4(5)+38.5=62+38.5=100.5$.\nStep 2: Residual $=$ actual $-$ predicted $=94-100.5=-6.5$.\nStep 3: The negative sign means the actual score sits below the model's line.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6.5$): reversed the subtraction (predicted $-$ actual).\n* Choice C ($-5.5$): arithmetic slip in computing the predicted value.\n* Choice D ($5.5$): combined both the sign flip and the arithmetic slip.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted; a negative residual means the point lies below the regression line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 4,
  question: "A survey found that $36$ out of $240$ households in a neighborhood have solar panels. Based on this rate, how many households out of $1{,}500$ in the entire town would be expected to have solar panels?",
  correctAnswer: "225",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**The correct answer is $225$.**\n\n**The Fast Way (~15s):** The rate is $\\frac{36}{240}=\\frac{3}{20}$, so expected count $=\\frac{3}{20}\\cdot 1{,}500=225$.\n\n**The Full Solution:**\nStep 1: Find the rate from the sample: $\\frac{36}{240}=\\frac{3}{20}=0.15$.\nStep 2: Apply the same rate to the town: $\\frac{3}{20}\\cdot 1{,}500=\\frac{4{,}500}{20}=225$.\n\n**Common Mistakes:** Inverting the rate as $\\frac{240}{36}$; or cross-multiplying $36\\cdot 1{,}500$ and reporting the numerator $54{,}000$ without dividing by $240$.\n\n**Test Day Takeaway:** Survey-to-population problems hold the rate fixed. Write $\\frac{\\text{part}}{\\text{whole}}=\\frac{\\text{part}}{\\text{whole}}$, then scale.",
  skills: ["ratios", "percents"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one of the acute angles is $\\theta$ and $\\sin(\\theta) = \\dfrac{9}{41}$. What is the value of $\\cos(\\theta)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — reuses sin(θ) value as cos(θ)
    { id: "A", text: "$\\dfrac{9}{41}$" },
    { id: "B", text: "$\\dfrac{40}{41}$" },
    // distractor: applies inverse operation — gives 1/sin(θ) = 41/9 (csc instead of cos)
    { id: "C", text: "$\\dfrac{41}{9}$" },
    // distractor: wrong base — gives tan(θ) = 9/40 (opposite/adjacent)
    { id: "D", text: "$\\dfrac{9}{40}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\sin(\\theta)=\\frac{9}{41}$ means opposite $=9$, hypotenuse $=41$. The third side is $\\sqrt{41^2-9^2}=\\sqrt{1600}=40$, so $\\cos(\\theta)=\\frac{40}{41}$.\n\n**The Full Solution:**\nStep 1: $\\sin(\\theta)=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{9}{41}$, so the leg opposite $\\theta$ is $9$ and the hypotenuse is $41$.\nStep 2: By the Pythagorean theorem the adjacent leg is $\\sqrt{41^2-9^2}=\\sqrt{1681-81}=\\sqrt{1600}=40$.\nStep 3: $\\cos(\\theta)=\\frac{\\text{adjacent}}{\\text{hypotenuse}}=\\frac{40}{41}$.\n\nCheck: $\\sin^2(\\theta)+\\cos^2(\\theta)=\\frac{81}{1681}+\\frac{1600}{1681}=1$. $\\checkmark$ ($9$-$40$-$41$ is a Pythagorean triple.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): reuses $\\sin(\\theta)$ as if it equaled $\\cos(\\theta)$.\n* Choice C ($\\frac{41}{9}$): flips the ratio, giving $\\csc(\\theta)$ instead of $\\cos(\\theta)$.\n* Choice D ($\\frac{9}{40}$): forms $\\frac{\\text{opposite}}{\\text{adjacent}}$, which is $\\tan(\\theta)$.\n\n**Test Day Takeaway:** Given one ratio, find the missing side with Pythagoras, then read the requested ratio straight off the triangle. Memorizing $9$-$40$-$41$ skips the arithmetic.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $a^{\\frac{3}{4}} = 8$ where $a > 0$, what is the value of $a^{\\frac{3}{2}}$?",
  choices: [
    // distractor: applies inverse operation — multiplies 2 * 8 = 16 instead of squaring
    { id: "A", text: "$16$" },
    { id: "B", text: "$64$" },
    // distractor: off-by-one — exponent manipulation slip giving 32 = 2^5
    { id: "C", text: "$32$" },
    // distractor: wrong base — uses 8^3 instead of 8^2
    { id: "D", text: "$512$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Since $\\frac{3}{2}=2\\cdot\\frac{3}{4}$, you have $a^{\\frac{3}{2}}=\\left(a^{\\frac{3}{4}}\\right)^2=8^2=64$.\n\n**The Full Solution:**\nStep 1: You are given $a^{\\frac{3}{4}}=8$ and want $a^{\\frac{3}{2}}$.\nStep 2: Notice the target exponent is double the known one: $\\frac{3}{2}=2\\cdot\\frac{3}{4}$, so $a^{\\frac{3}{2}}=\\left(a^{\\frac{3}{4}}\\right)^2$.\nStep 3: Substitute: $8^2=64$.\n\nCheck by solving for $a$: $a=8^{\\frac{4}{3}}=\\left(2^3\\right)^{\\frac{4}{3}}=2^4=16$, and $16^{\\frac{3}{2}}=4^3=64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): multiplies $2\\cdot 8$ instead of squaring $8$.\n* Choice C ($32$): an exponent slip with no clean derivation ($32=2^5$).\n* Choice D ($512$): computes $8^3$ instead of $8^2$.\n\n**Test Day Takeaway:** When you know $a^n$ and need $a^m$, write $m=k\\cdot n$ so $a^m=\\left(a^n\\right)^k$. Chaining exponents beats solving for $a$.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $10$ positive integers. Nine of the integers are listed below.\n\n$25, 28, 30, 32, 34, 35, 38, 40, 42$\n\nThe mean of all $10$ integers in the data set is $35$. What is the value of the tenth integer?",
  correctAnswer: "46",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~25s):** Total sum $=10\\cdot 35=350$. The nine listed integers add to $304$, so the tenth is $350-304=46$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum, so the ten integers total $10\\cdot 35=350$.\nStep 2: Add the nine given values: $25+28+30+32+34+35+38+40+42=304$.\nStep 3: The missing integer is $350-304=46$.\n\nCheck: $\\frac{304+46}{10}=\\frac{350}{10}=35$. $\\checkmark$\n\n**Common Mistakes:** Reporting $35$ (the mean itself) without finding the missing value; or subtracting backward and getting $-46$.\n\n**Test Day Takeaway:** To recover a missing value from a mean, build the target sum first (mean $\\times$ count), then subtract the known sum.",
  skills: ["statistics", "mean-median-mode"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{x^2 + 5x + 6}{x + 2} = x + a$ for all $x \\neq -2$, and $\\dfrac{x^2 - 7x + 12}{x - 3} = x + b$ for all $x \\neq 3$, what is the value of $a \\cdot b$?",
  choices: [
    { id: "A", text: "$-12$" },
    // distractor: applies inverse operation — uses b = +4 (sign error on the (x-4) factor)
    { id: "B", text: "$12$" },
    // distractor: stops one step early — gives just b, not the product
    { id: "C", text: "$-4$" },
    // distractor: wrong base — uses the linear coefficient -7 from the second numerator directly
    { id: "D", text: "$-7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $x^2+5x+6=(x+2)(x+3)$ cancels to $x+3$, so $a=3$. $x^2-7x+12=(x-3)(x-4)$ cancels to $x-4$, so $b=-4$. Then $a\\cdot b=(3)(-4)=-12$.\n\n**The Full Solution:**\nStep 1: Factor and cancel the first expression: $\\frac{(x+2)(x+3)}{x+2}=x+3$, so $x+a=x+3$ and $a=3$.\nStep 2: Factor and cancel the second: $\\frac{(x-3)(x-4)}{x-3}=x-4$, so $x+b=x-4$ and $b=-4$.\nStep 3: $a\\cdot b=3\\cdot(-4)=-12$.\n\nCheck at $x=0$: first $=\\frac{6}{2}=3$, second $=\\frac{12}{-3}=-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): drops the sign on the $(x-4)$ factor, using $b=+4$.\n* Choice C ($-4$): reports $b$ alone instead of the product $a\\cdot b$.\n* Choice D ($-7$): grabs the linear coefficient $-7$ of the second numerator directly.\n\n**Test Day Takeaway:** Factor the numerator, cancel the denominator factor, then read off the remaining constant. The leftover linear expression is $x+(\\text{constant})$.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $\\dfrac{2}{x - 1} + \\dfrac{3}{x + 2} = \\dfrac{21}{(x - 1)(x + 2)}$ is defined for $x \\neq 1$ and $x \\neq -2$. What is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Multiply both sides by $(x-1)(x+2)$ to clear denominators: $2(x+2)+3(x-1)=21$, which gives $5x+1=21$, so $x=4$.\n\n**The Full Solution:**\nStep 1: Multiply every term by the common denominator $(x-1)(x+2)$: $2(x+2)+3(x-1)=21$.\nStep 2: Expand: $2x+4+3x-3=21$.\nStep 3: Combine: $5x+1=21\\Rightarrow 5x=20\\Rightarrow x=4$.\nStep 4: Since $4\\neq 1$ and $4\\neq -2$, the solution is valid.\n\nCheck: left side $=\\frac{2}{3}+\\frac{3}{6}=\\frac{2}{3}+\\frac{1}{2}=\\frac{7}{6}$; right side $=\\frac{21}{18}=\\frac{7}{6}$. $\\checkmark$\n\n**Common Mistakes:** Distributing as $2(x+2)=2x+2$ instead of $2x+4$; or forgetting to confirm the answer does not make a denominator zero.\n\n**Test Day Takeaway:** Clear all denominators by multiplying through by their product, then solve the linear equation — and always check the answer against the excluded values.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 7$ and $f(1) = 5$. What is the value of $f(3)$?",
  choices: [
    { id: "A", text: "$\\dfrac{125}{49}$" },
    // distractor: applies inverse operation — inverts b, computing 7 \cdot (7/5)^3
    { id: "B", text: "$\\dfrac{343}{125}$" },
    // distractor: off-by-one — uses b^2 (=25/49) instead of b^3 in the numerator chain
    { id: "C", text: "$\\dfrac{175}{49}$" },
    // distractor: stops one step early — gives f(2) instead of f(3)
    { id: "D", text: "$\\dfrac{25}{7}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f(0)=a=7$ and $f(1)=7b=5$, so $b=\\frac{5}{7}$. Then $f(3)=7\\left(\\frac{5}{7}\\right)^3=\\frac{7\\cdot 125}{343}=\\frac{125}{49}$.\n\n**The Full Solution:**\nStep 1: $f(0)=a\\cdot b^0=a=7$, so $a=7$.\nStep 2: $f(1)=7b=5\\Rightarrow b=\\frac{5}{7}$.\nStep 3: $f(3)=7\\left(\\frac{5}{7}\\right)^3=7\\cdot\\frac{125}{343}=\\frac{875}{343}=\\frac{125}{49}$ (dividing top and bottom by $7$).\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{343}{125}$): inverts the base, cubing $\\frac{7}{5}$ instead of $\\frac{5}{7}$.\n* Choice C ($\\frac{175}{49}$): uses $b^2$ in the numerator instead of $b^3$.\n* Choice D ($\\frac{25}{7}$): stops at $f(2)=7\\left(\\frac{5}{7}\\right)^2=\\frac{25}{7}$ instead of $f(3)$.\n\n**Test Day Takeaway:** For $f(x)=a\\cdot b^x$, $f(0)$ gives $a$ and $\\frac{f(1)}{f(0)}$ gives $b$. Lock those in, then evaluate at the requested input.",
  skills: ["exponential-functions", "exponent-rules"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 - 4x + 12y + 31 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$3$" },
    // distractor: stops one step early — reports r^2 = 9 instead of r = 3
    { id: "B", text: "$9$" },
    // distractor: applies inverse operation — keeps +31 on the same side instead of moving it
    { id: "C", text: "$\\sqrt{71}$" },
    // distractor: off-by-one — only completes one square (drops the y term contribution)
    { id: "D", text: "$\\sqrt{5}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x-2)^2+(y+6)^2=-31+4+36=9$, so $r=\\sqrt{9}=3$.\n\n**The Full Solution:**\nStep 1: Group the variable terms: $(x^2-4x)+(y^2+12y)=-31$.\nStep 2: Complete each square. Half of $-4$ is $-2$, giving $+4$; half of $12$ is $6$, giving $+36$. Add both to each side: $(x^2-4x+4)+(y^2+12y+36)=-31+4+36$.\nStep 3: $(x-2)^2+(y+6)^2=9$, so $r^2=9$ and $r=3$.\n\nCheck: the point $(5,-6)$ is distance $3$ from center $(2,-6)$, and $25+36-20-72+31=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports $r^2$ as the radius instead of taking the square root.\n* Choice C ($\\sqrt{71}$): leaves $+31$ on the left, getting $r^2=4+36+31=71$.\n* Choice D ($\\sqrt{5}$): completes only one square, dropping the $y$-term contribution.\n\n**Test Day Takeaway:** Complete the square for both variables, move the constant to the right, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right-triangular climbing-wall panel has legs of length $a$ and $a + 17$ and a hypotenuse of length $25$, all in feet. What is the perimeter, in feet, of the panel?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 17", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (7 + 24 = 31) without adding the hypotenuse
    { id: "A", text: "$31$" },
    { id: "B", text: "$56$" },
    // distractor: off-by-one — uses a + 17 = 17 instead of 24, gets 7 + 17 + 25 = 49
    { id: "C", text: "$49$" },
    // distractor: wrong base — double-counts the leg a, computing 7 + 24 + 25 + 7 = 63
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Hypotenuse $25$ with legs differing by $17$ is the $7$-$24$-$25$ triple, so $a=7$ and $a+17=24$. Perimeter $=7+24+25=56$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $a^2+(a+17)^2=25^2$.\nStep 2: Expand and simplify: $2a^2+34a+289=625\\Rightarrow 2a^2+34a-336=0\\Rightarrow a^2+17a-168=0$.\nStep 3: Factor: $(a-7)(a+24)=0$, so $a=7$ (rejecting the negative root). Then $a+17=24$.\nStep 4: Perimeter $=7+24+25=56$.\n\nCheck: $7^2+24^2=49+576=625=25^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($31$): adds only the two legs ($7+24$) and forgets the hypotenuse.\n* Choice C ($49$): uses $17$ as the second leg instead of $a+17=24$.\n* Choice D ($63$): double-counts leg $a$, adding $7+24+25+7$.\n\n**Test Day Takeaway:** When the hypotenuse is given and the legs differ by a fixed amount, check the common triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$) before grinding the quadratic.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 2x - 3$ intersects the parabola $y = x^2 - 4x + c$ at exactly one point. What is the value of $c$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Set the curves equal: $x^2-4x+c=2x-3\\Rightarrow x^2-6x+(c+3)=0$. One intersection means discriminant $=0$: $36-4(c+3)=0\\Rightarrow c+3=9\\Rightarrow c=6$.\n\n**The Full Solution:**\nStep 1: Set the parabola equal to the line: $x^2-4x+c=2x-3$.\nStep 2: Rearrange into one quadratic: $x^2-6x+(c+3)=0$.\nStep 3: A single intersection requires discriminant zero: $(-6)^2-4(1)(c+3)=0$.\nStep 4: $36-4c-12=0\\Rightarrow 24=4c\\Rightarrow c=6$.\n\nCheck at $c=6$: $x^2-6x+9=(x-3)^2=0$, a double root at $x=3$, with $y=2(3)-3=3$. One contact point $(3,3)$. $\\checkmark$\n\n**Common Mistakes:** Mishandling $-(-3)=+3$ when moving the line's constant; or writing $(-6)^2=-36$ in the discriminant.\n\n**Test Day Takeaway:** A line is tangent to a parabola exactly when the combined equation, written as one quadratic in $x$, has discriminant $0$.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 7 — Math Module 2 (22 questions)
// 2026-06 M2 flow diversification. Wavy flow: M[1] E[2,3] M[4,5] H[6,7] M[8] H[9] M[10] E[11] H[12,13,14] M[15] H[16,17,18] M[19] H[20,21,22].
// Distribution: E=3 (q2,q3,q11) / M=7 (q1,q4,q5,q8,q10,q15,q19) / H=12 (q6,q7,q9,q12,q13,q14,q16,q17,q18,q20,q21,q22).
// 7 transformed pool items infused: D-p14#26 (q1), E#11 (q3), D-p42#25 (q6), D-p6#26 (q12), E#17 (q13), D-p27#21 (q14), E#19/D-p25#25 (q19 — reskinned as a decrease inversion). Retired clones replaced; lint pattern names + distractor comments cleared.
// 2026-06 de-clone: q10 re-angled from "max-height TIME (=-b/2a)" to "max-height VALUE (substitute back)" so it no longer collides with q8's vertex/min-value archetype (both formerly resolved to vertex x=2). q19 reskinned off the increase-by-p% source skeleton (was cloned in T3) to a decrease-by-25% reverse-percent.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A ferry operator surveyed $700$ randomly selected commuters, asking which of two proposed new routes they would ride. Of those surveyed, $410$ chose the Harbor Line and $290$ chose the Cove Line. If $8{,}400$ commuters in total are expected to ride one of the two new routes, by how many riders is the Harbor Line expected to exceed the Cove Line?",
  choices: [
    { id: "A", text: "$1{,}440$" },
    // distractor: stops one step early — reports the raw sample difference 410 - 290 = 120 without scaling to the population
    { id: "B", text: "$120$" },
    // distractor: wrong base — scales only the Harbor Line count (410 x 12) instead of the difference
    { id: "C", text: "$4{,}920$" },
    // distractor: wrong base — reports the total projected ridership instead of the margin
    { id: "D", text: "$8{,}400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The town is $\\frac{8{,}400}{700}=12$ times the sample, so scale the sample margin: $(410-290)\\times 12=120\\times 12=1{,}440$.\n\n**The Full Solution:**\nStep 1: Find the scale factor from sample to population: $\\frac{8{,}400}{700}=12$.\nStep 2: The sample margin is $410-290=120$ riders.\nStep 3: Scale the margin by the same factor: $120\\times 12=1{,}440$.\n\nConfirm by scaling each route: Harbor $410\\times 12=4{,}920$, Cove $290\\times 12=3{,}480$, difference $=1{,}440$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($120$): gives the raw sample margin without scaling to the full ridership.\n* Choice C ($4{,}920$): scales only the Harbor Line and reports that as the margin.\n* Choice D ($8{,}400$): reports total projected ridership instead of the difference.\n\n**Test Day Takeaway:** To project a difference onto a larger group, multiply the sample difference by the population-to-sample ratio — don't stop at the raw counts.",
  skills: ["ratios", "proportional-reasoning", "data-analysis"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A desalination plant has been expanding for several years. The function $w(t) = 4.2t + 35$ approximates the plant's daily fresh-water output, in thousands of liters, after $t$ years of operation. Which statement is the best interpretation of the $y$-intercept of the graph of $y = w(t)$ in the $ty$-plane in this context?",
  choices: [
    // distractor: confuses slope (rate) with y-intercept (initial value)
    { id: "A", text: "Output increases by about $35$ thousand liters per day each year." },
    { id: "B", text: "When the plant opened, its daily output was about $35$ thousand liters." },
    // distractor: swaps slope and intercept — uses the slope magnitude as the starting value
    { id: "C", text: "When the plant opened, its daily output was about $4.2$ thousand liters." },
    // distractor: combines both confusions — ignores the +35 and treats the start as zero
    { id: "D", text: "Output increases by about $4.2$ thousand liters per day each year, starting from zero." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Y-Intercept in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $w(0)=4.2(0)+35=35$. At $t=0$ (the plant's opening) output is about $35$ thousand liters per day.\n\n**The Full Solution:**\nStep 1: For $w(t)=mt+b$, the $y$-intercept is $b$, the output at $t=0$. Here $b=35$.\nStep 2: $t$ counts years of operation, so $t=0$ is when the plant opened.\nStep 3: Therefore daily output at opening was about $35$ thousand liters, which is Choice B.\n\nCheck: $w(0)=35$ and $w(1)=39.2$ — the $4.2$ gained per year is the slope, not the intercept. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the slope $4.2$ as a yearly rate, but the question asks about the intercept.\n* Choice C: uses the slope value $4.2$ as the starting output.\n* Choice D: ignores the $+35$ and treats the start as zero.\n\n**Test Day Takeaway:** The $y$-intercept is the value at input $0$ — the starting point in the story. The slope is the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "How many solutions does the equation $8(x - 5) = -2(x + 20)$ have?",
  choices: [
    { id: "A", text: "Exactly one" },
    // distractor: wrong base — sees the matching constant terms (-40 on each side) and assumes the equation is an identity
    { id: "B", text: "Infinitely many" },
    // distractor: applies inverse operation — believes the variable terms cancel, leaving a false statement
    { id: "C", text: "Zero" },
    // distractor: off-by-one — miscounts, treating the single linear equation as quadratic-like
    { id: "D", text: "Exactly two" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Equation Solution Count**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute both sides: $8x - 40 = -2x - 40$. The constants are equal, but the $x$-terms are not. Move them together: $10x = 0$, so $x = 0$ is the one and only solution.\n\n**The Full Solution:**\nStep 1: Distribute. $8(x - 5) = 8x - 40$ and $-2(x + 20) = -2x - 40$, so the equation is $8x - 40 = -2x - 40$.\nStep 2: Add $2x$ to both sides and add $40$ to both sides: $10x = 0$.\nStep 3: Divide by $10$: $x = 0$. One value works, so there is exactly one solution.\n\nThe $x$-coefficients $8$ and $-2$ are different, so the two sides describe lines of different slopes — they cross at exactly one point. The matching constants ($-40$) are a decoy.\n\n**Why the wrong answers are tempting:**\n* Choice B (infinitely many): the equal constants look like an identity, but that only happens when both sides are completely identical, including the $x$-coefficients.\n* Choice C (zero): assumes the $x$-terms cancel and leave a false statement; they don't cancel, since $8 \\neq -2$.\n* Choice D (exactly two): a linear equation can never have two solutions.\n\n**Test Day Takeaway:** Distribute first, then compare. Different $x$-coefficients $\\Rightarrow$ one solution; identical sides $\\Rightarrow$ infinitely many; same $x$-term but different constants $\\Rightarrow$ no solution.",
  skills: ["linear-equations", "solving-equations"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 3(2)^x$. What is the value of $f(5) - f(3)$?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~15s):** Evaluate each output separately: $f(5) = 3 \\cdot 2^5 = 96$ and $f(3) = 3 \\cdot 2^3 = 24$. The difference is $96 - 24 = 72$.\n\n**The Full Solution:**\nStep 1: $f(5) = 3(2)^5 = 3 \\cdot 32 = 96$.\nStep 2: $f(3) = 3(2)^3 = 3 \\cdot 8 = 24$.\nStep 3: $f(5) - f(3) = 96 - 24 = 72$.\n\n**Common Mistakes:** Computing $f(5 - 3) = f(2) = 3 \\cdot 4 = 12$ (subtracting the inputs instead of the outputs); dropping the coefficient $3$ and reporting $2^5 - 2^3 = 24$.\n\n**Test Day Takeaway:** $f(a) - f(b)$ is not $f(a - b)$. Evaluate each value of the function on its own, then subtract.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A function $f$ is defined by $f(x) = \\dfrac{2x + 6}{x - 1}$. For what value of $x$ is $f(x) = 0$?",
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: stops one step early — picks -1, half of -3
    { id: "B", text: "$-1$" },
    // distractor: applies inverse operation — gives the value that makes the denominator 0
    { id: "C", text: "$1$" },
    // distractor: wrong base — solves 2x + 6 = x - 1 instead of 2x + 6 = 0
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A fraction equals $0$ only when its numerator is $0$ (and the denominator is not). Set $2x + 6 = 0 \\Rightarrow x = -3$. Check the denominator: $-3 - 1 = -4 \\neq 0$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: Set $f(x) = 0$: $\\dfrac{2x + 6}{x - 1} = 0$.\nStep 2: A quotient is zero exactly when its numerator is zero, so $2x + 6 = 0 \\Rightarrow x = -3$.\nStep 3: Confirm the denominator is nonzero there: $-3 - 1 = -4 \\neq 0$, so $x = -3$ is valid.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign-and-arithmetic slip on $2x + 6 = 0$ — only correct work gives $x = -3$.\n* Choice C ($1$): sets the denominator to zero, which makes $f$ undefined, not equal to $0$.\n* Choice D ($3$): solves $2x + 6 = x - 1$ (setting numerator equal to denominator) instead of setting the numerator to $0$.\n\n**Test Day Takeaway:** A rational expression equals zero when the numerator is zero and the denominator is not. Solve the top, then check the bottom.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For a positive integer constant $b$, which of the following expressions has a factor of $x + 3b$?",
  choices: [
    // distractor: middle coefficient 20 gives (20 - 5)/6, not an integer b
    { id: "A", text: "$2x^2 + 20x + 15b$" },
    // distractor: middle coefficient 30 gives (30 - 5)/6, not an integer b
    { id: "B", text: "$2x^2 + 30x + 15b$" },
    { id: "C", text: "$2x^2 + 41x + 15b$" },
    // distractor: middle coefficient 50 gives (50 - 5)/6, not an integer b
    { id: "D", text: "$2x^2 + 50x + 15b$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Factoring Analysis with Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** If $x + 3b$ is a factor of $2x^2 + kx + 15b$, the other factor must be $2x + 5$ so the constant term comes out to $3b \\cdot 5 = 15b$. Then the middle coefficient is $k = 5 + 6b$. Only $41 = 5 + 6(6)$ gives a positive integer $b = 6$.\n\n**The Full Solution:**\nStep 1: Write the factorization as $(x + 3b)(2x + c)$ to get the leading $2x^2$.\nStep 2: Expand: $(x + 3b)(2x + c) = 2x^2 + (c + 6b)x + 3bc$.\nStep 3: Match the constant term to $15b$: $3bc = 15b \\Rightarrow c = 5$.\nStep 4: So the middle coefficient is $k = c + 6b = 5 + 6b$, meaning $b = \\dfrac{k - 5}{6}$ must be a positive integer.\n* Choice A, $k = 20$: $b = \\dfrac{15}{6}$ — not an integer.\n* Choice B, $k = 30$: $b = \\dfrac{25}{6}$ — not an integer.\n* Choice C, $k = 41$: $b = \\dfrac{36}{6} = 6$ $\\checkmark$.\n* Choice D, $k = 50$: $b = \\dfrac{45}{6}$ — not an integer.\n\n**Why the wrong answers are tempting:**\n* Choice A: $20$ does not fit the form $5 + 6b$ for any integer $b$.\n* Choice B: $30$ is close but gives $b = \\dfrac{25}{6}$, not whole.\n* Choice D: $50$ gives $b = \\dfrac{45}{6}$, not whole.\n\n**Test Day Takeaway:** When a binomial with a parameter is a factor, fix the cofactor's constant from the constant term, then force the resulting middle coefficient to produce a valid integer parameter.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = x^3 - 6x^2 + 11x - 6$. It is known that $f(1) = 0$. What is the sum of the other two zeros of $f$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Factoring a Cubic to Find Zeros**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Since $f(1) = 0$, $(x - 1)$ is a factor. Dividing gives $f(x) = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$. The other two zeros are $2$ and $3$, which sum to $5$.\n\n**The Full Solution:**\nStep 1: $f(1) = 0$ means $(x - 1)$ divides $f$. Use synthetic division with $1$ on coefficients $1, -6, 11, -6$: bring down $1$; $-6 + 1 = -5$; $11 + (-5) = 6$; $-6 + 6 = 0$.\nStep 2: The quotient is $x^2 - 5x + 6 = (x - 2)(x - 3)$.\nStep 3: The three zeros are $1$, $2$, $3$. The two other than the known root sum to $2 + 3 = 5$.\n\n**Common Mistakes:** Reporting $6$, the sum of all three zeros, instead of just the other two; for the quadratic factor $x^2 - 5x + 6$, Vieta's gives a root sum of $5$ directly — exactly what the question wants.\n\n**Test Day Takeaway:** When one root is known, divide it out to reach a quadratic, then read its root sum as $-\\dfrac{b}{a}$.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $g$ is defined by $g(x) = 2x^2 - 8x + 11$. What is the minimum value of $g(x)$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** The minimum of $g(x) = 2x^2 - 8x + 11$ sits at $x = -\\dfrac{b}{2a} = -\\dfrac{-8}{4} = 2$. Then $g(2) = 2(4) - 16 + 11 = 3$.\n\n**The Full Solution:**\nStep 1: $a = 2 > 0$, so the parabola opens up and its lowest point is the vertex.\nStep 2: Complete the square: $g(x) = 2(x^2 - 4x) + 11 = 2(x^2 - 4x + 4) + 11 - 8 = 2(x - 2)^2 + 3$.\nStep 3: Since $2(x - 2)^2 \\geq 0$, the smallest value of $g$ is $3$, reached at $x = 2$.\n\n**Common Mistakes:** Forgetting to balance the $+4$ inside the parentheses with $-2 \\cdot 4 = -8$ outside when completing the square; reporting $11$ (the $y$-intercept) instead of the minimum value.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$ with $a > 0$, the minimum occurs at $x = -\\dfrac{b}{2a}$; substitute back to read the minimum value as the $y$-coordinate of the vertex.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A function $f$ satisfies $f(x) = f(x + 4)$ for all real numbers $x$. If $f(3) = 7$ and $f(5) = 2$, what is the value of $f(3) + f(11) + f(19)$?",
  choices: [
    // distractor: applies inverse operation — confuses f(11) with f(5) = 2, getting 7 + 2 + 7 = 16 reduced wrongly
    { id: "A", text: "$9$" },
    // distractor: stops one step early — gets two terms right (7 + 7 = 14) and stops
    { id: "B", text: "$14$" },
    // distractor: off-by-one — mixes up the period and gets one term wrong
    { id: "C", text: "$16$" },
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The rule $f(x) = f(x + 4)$ makes $f$ periodic with period $4$. Step back by $4$s to land on $3$: $f(11) = f(7) = f(3) = 7$ and $f(19) = f(15) = f(11) = 7$. So the sum is $7 \\cdot 3 = 21$.\n\n**The Full Solution:**\nStep 1: $f(x) = f(x + 4)$ means shifting the input by any multiple of $4$ leaves the output unchanged — period $4$.\nStep 2: $f(3) = 7$ is given.\nStep 3: $f(11) = f(11 - 4) = f(7) = f(7 - 4) = f(3) = 7$.\nStep 4: $f(19) = f(19 - 4) = f(15) = f(11) = 7$.\nStep 5: $f(3) + f(11) + f(19) = 7 + 7 + 7 = 21$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): uses $f(5) = 2$ somewhere, which would require period $6$, not $4$.\n* Choice B ($14$): evaluates only two of the three terms before stopping.\n* Choice C ($16$): miscounts the period reductions and lands one term on $f(5) = 2$.\n\n**Test Day Takeaway:** For a periodic function, reduce each input by whole periods until you reach an input whose value you already know.",
  skills: ["function-interpretation"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $h(t) = -16t^2 + 48t + 6$ models the height, in feet, of a drone $t$ seconds after it launches straight up. What is the maximum height, in feet, that the drone reaches?",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~20s):** The drone peaks at the vertex time $t = -\\dfrac{b}{2a} = -\\dfrac{48}{-32} = 1.5$ seconds. Then $h(1.5) = -16(2.25) + 48(1.5) + 6 = -36 + 72 + 6 = 42$ feet.\n\n**The Full Solution:**\nStep 1: $a = -16 < 0$, so $h$ opens downward and the maximum height is the $y$-value of the vertex.\nStep 2: Find the vertex time: $t = -\\dfrac{b}{2a} = -\\dfrac{48}{2(-16)} = -\\dfrac{48}{-32} = 1.5$ seconds.\nStep 3: Substitute back: $h(1.5) = -16(1.5)^2 + 48(1.5) + 6 = -36 + 72 + 6 = 42$ feet.\n\n**Common Mistakes:** Reporting $1.5$ (the time of the peak) instead of the height; reporting $6$, the launch height at $t = 0$; stopping after finding $t$ without substituting it back.\n\n**Test Day Takeaway:** \"Maximum height\" asks for the output at the vertex. Find $t = -\\dfrac{b}{2a}$ first, then plug it back into $h(t)$.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "A mushroom farm recorded its daily harvest, in kilograms, on seven consecutive days: $12, 9, 15, 11, 14, 9, 16$. What is the range of these daily harvest amounts, in kilograms?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Range = maximum $-$ minimum $= 16 - 9 = 7$.\n\n**The Full Solution:**\nStep 1: The range is the difference between the largest and smallest values.\nStep 2: From $12, 9, 15, 11, 14, 9, 16$, the largest is $16$ and the smallest is $9$.\nStep 3: Range $= 16 - 9 = 7$ kilograms.\n\n**Common Mistakes:** Reporting the maximum ($16$) or the minimum ($9$) alone instead of their difference; confusing the range with the mean or median.\n\n**Test Day Takeaway:** Range is one subtraction: scan for the highest and lowest values, then subtract.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$4x + 9y = 1$$\n$$ax + by = 1$$\nIn the given pair of equations, $a$ and $b$ are nonzero constants, and the graphs of the two equations are perpendicular lines in the $xy$-plane. Which of the following pairs of equations also represents a pair of perpendicular lines?",
  choices: [
    { id: "A", text: "$8x + 9y = 1$ and $ax + 2by = 1$" },
    // distractor: applies inverse operation — flips the sign on the b term, ruining the slope product
    { id: "B", text: "$8x + 9y = 1$ and $ax - 2by = 1$" },
    // distractor: wrong base — doubles a instead of b, so the second slope is off by a factor
    { id: "C", text: "$8x + 9y = 1$ and $2ax + by = 1$" },
    // distractor: stops one step early — negates the original first equation but leaves the second unchanged
    { id: "D", text: "$4x - 9y = 1$ and $ax + by = 1$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Perpendicular slopes multiply to $-1$. The line $4x + 9y = 1$ has slope $-\\dfrac{4}{9}$, so its partner $ax + by = 1$ has slope $\\dfrac{9}{4}$, meaning $-\\dfrac{a}{b} = \\dfrac{9}{4}$. The new line $8x + 9y = 1$ has slope $-\\dfrac{8}{9}$, so its partner needs slope $\\dfrac{9}{8}$. Doubling $b$ halves that magnitude: $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{9}{8}$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: From the given pair, slope of $4x + 9y = 1$ is $-\\dfrac{4}{9}$ and slope of $ax + by = 1$ is $-\\dfrac{a}{b}$. Perpendicularity gives $\\left(-\\dfrac{4}{9}\\right)\\left(-\\dfrac{a}{b}\\right) = -1$, so $-\\dfrac{a}{b} = \\dfrac{9}{4}$.\nStep 2: Check Choice A. The line $8x + 9y = 1$ has slope $-\\dfrac{8}{9}$. The line $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{1}{2}\\left(-\\dfrac{a}{b}\\right) = \\dfrac{1}{2} \\cdot \\dfrac{9}{4} = \\dfrac{9}{8}$.\nStep 3: Product: $\\left(-\\dfrac{8}{9}\\right)\\left(\\dfrac{9}{8}\\right) = -1$, so the lines are perpendicular.\n\n**Why the wrong answers are tempting:**\n* Choice B: $ax - 2by = 1$ has slope $-\\dfrac{a}{-2b} = -\\dfrac{9}{8}$, so the product with $-\\dfrac{8}{9}$ is $+1$, not $-1$ — not perpendicular.\n* Choice C: $2ax + by = 1$ has slope $-\\dfrac{2a}{b} = \\dfrac{9}{2}$, nowhere near $\\dfrac{9}{8}$.\n* Choice D: changing $4x + 9y$ to $4x - 9y$ flips one slope but leaves the partner alone, so the product becomes $+1$.\n\n**Test Day Takeaway:** Turn perpendicularity into the slope-product $= -1$ condition, then track how scaling a coefficient scales the slope: doubling the $y$-coefficient halves the slope's magnitude.",
  skills: ["linear-equations", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of the linear function $y = f(x) + 24$ is shown in the $xy$-plane. If $c$ and $d$ are positive constants, which equation could define $f$?",
  diagram: { type: "linearGraph", params: {
    slope: -4, yIntercept: 8,
    xRange: [-4, 4], yRange: [-2, 16],
    xTickInterval: 2, yTickInterval: 4, gridInterval: 1,
    label: "y = f(x) + 24"
  } },
  choices: [
    { id: "A", text: "$f(x) = -d - cx$" },
    // distractor: misreads the intercept as positive — keeps +d though the shifted line sits well above the original
    { id: "B", text: "$f(x) = d - cx$" },
    // distractor: misreads the slope as positive
    { id: "C", text: "$f(x) = -d + cx$" },
    // distractor: gets both the slope sign and the intercept sign wrong
    { id: "D", text: "$f(x) = d + cx$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The graphed line $y = f(x) + 24$ falls left to right (negative slope) and crosses at $y = 8$. Shifting up by $24$ does not change slope, so $f$ has the same negative slope $-c$, and its intercept is $8 - 24 = -16$, which is negative, so the constant is $-d$. That gives $f(x) = -d - cx$.\n\n**The Full Solution:**\nStep 1: $y = f(x) + 24$ is $f$ shifted up $24$. Reading the graph: negative slope, $y$-intercept $8$.\nStep 2: A vertical shift leaves slope unchanged, so $f$ also has negative slope — the $x$-coefficient is $-c$ with $c > 0$.\nStep 3: Undo the shift on the intercept: $f$'s intercept is $8 - 24 = -16$, which is negative, so the constant term is $-d$ with $d > 0$.\nStep 4: Therefore $f(x) = -d - cx$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($d - cx$): right slope sign but keeps a positive intercept $+d$, contradicting the intercept $-16 < 0$.\n* Choice C ($-d + cx$): right intercept sign but uses a positive slope $+c$, contradicting the falling line.\n* Choice D ($d + cx$): both signs wrong — positive slope and positive intercept.\n\n**Test Day Takeaway:** A vertical shift moves only the intercept, not the slope. Subtract the shift from the read-off intercept, keep the slope, and match the signs to $c, d > 0$.",
  skills: ["linear-functions", "function-interpretation", "coordinate-geometry"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangular glaze panel is inscribed in a circular kiln porthole so that all four corners of the panel touch the circle. The diagonal of the panel is twice the length of its shorter side, and the panel's area is $1{,}600\\sqrt{3}$ square inches. What is the diameter, in inches, of the circular porthole?",
  correctAnswer: "80",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~45s):** \"Diagonal twice the shorter side\" makes a $30$-$60$-$90$ triangle, so the sides are $s$ and $s\\sqrt{3}$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 1{,}600\\sqrt{3} \\Rightarrow s^2 = 1{,}600 \\Rightarrow s = 40$. The diagonal is the diameter: $2s = 80$.\n\n**The Full Solution:**\nStep 1: Let the shorter side be $s$, so the diagonal is $2s$. By the Pythagorean theorem the longer side is $\\sqrt{(2s)^2 - s^2} = \\sqrt{3s^2} = s\\sqrt{3}$, the $30$-$60$-$90$ ratio $s : s\\sqrt{3} : 2s$.\nStep 2: Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3}$. Set equal to the given area: $s^2\\sqrt{3} = 1{,}600\\sqrt{3} \\Rightarrow s^2 = 1{,}600 \\Rightarrow s = 40$.\nStep 3: A rectangle inscribed in a circle has its diagonal as a diameter, so the diameter $= 2s = 2(40) = 80$ inches.\n\n**Common Mistakes:** Reporting $s = 40$ (the shorter side) instead of the diameter $2s = 80$; forgetting that the diagonal of an inscribed rectangle equals the circle's diameter.\n\n**Test Day Takeaway:** \"Diagonal is twice the short side\" signals a $30$-$60$-$90$ triangle, and for any rectangle inscribed in a circle the diagonal is the diameter.",
  skills: ["geometry", "right-triangles", "circles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, what is the value of $f(g(2))$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: stops one step early — computes f(2) = 5 instead of f(g(2))
    { id: "B", text: "$5$" },
    // distractor: applies inverse operation — computes g(2) + f(2) = 1 + 5 + 1 = 7
    { id: "C", text: "$7$" },
    // distractor: wrong base — multiplies f(2) and g(2) instead of composing
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Work inside out. $g(2) = 2(2) - 3 = 1$, then $f(1) = 1^2 + 1 = 2$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(2) = 2(2) - 3 = 4 - 3 = 1$.\nStep 2: Feed that into the outer function: $f(g(2)) = f(1) = 1^2 + 1 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): computes $f(2) = 2^2 + 1 = 5$, skipping the inner $g$ entirely.\n* Choice C ($7$): reverses the order, computing $g(f(2)) = g(5) = 2(5) - 3 = 7$ instead of $f(g(2))$.\n* Choice D ($10$): multiplies the outer output by the input, $f(2) \\cdot 2 = 5 \\cdot 2 = 10$, instead of substituting.\n\n**Test Day Takeaway:** For $f(g(x))$, evaluate the inside function first, then substitute its output into the outside function. Never add or multiply the two.",
  skills: ["function-interpretation"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A spinner has $4$ equal sections colored red, blue, green, and yellow. The spinner is spun $4$ times, and the colors recorded. What is the probability of getting red exactly $3$ times in those $4$ spins?",
  choices: [
    // distractor: applies inverse operation — uses (1/4)^3 alone, ignoring the 4 ways to choose which spin is non-red
    { id: "A", text: "$\\dfrac{1}{64}$" },
    { id: "B", text: "$\\dfrac{3}{64}$" },
    // distractor: stops one step early — uses (3/4)(1/4)^3 = 3/256 (forgets to multiply by 4 spin positions)
    { id: "C", text: "$\\dfrac{3}{256}$" },
    // distractor: wrong base — uses (3/4)^3 = 27/64 (probability of "not all red")
    { id: "D", text: "$\\dfrac{27}{64}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Independent Events Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Use the binomial formula with $p = \\frac{1}{4}$ for red: $\\binom{4}{3}\\left(\\frac{1}{4}\\right)^3\\left(\\frac{3}{4}\\right) = 4 \\cdot \\frac{1}{64} \\cdot \\frac{3}{4} = \\frac{12}{256} = \\frac{3}{64}$.\n\n**The Full Solution:**\nStep 1: One red spin has probability $\\frac{1}{4}$; one non-red spin has probability $\\frac{3}{4}$.\nStep 2: A single arrangement with $3$ reds and $1$ non-red has probability $\\left(\\frac{1}{4}\\right)^3\\left(\\frac{3}{4}\\right) = \\frac{3}{256}$.\nStep 3: There are $\\binom{4}{3} = 4$ ways to choose which spin is the non-red one.\nStep 4: Total $= 4 \\cdot \\frac{3}{256} = \\frac{12}{256} = \\frac{3}{64}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{64}$): uses only $\\left(\\frac{1}{4}\\right)^3$, ignoring the non-red spin and the count of arrangements.\n* Choice C ($\\frac{3}{256}$): stops at one arrangement and forgets to multiply by the $4$ positions.\n* Choice D ($\\frac{27}{64}$): computes $\\left(\\frac{3}{4}\\right)^3$, the chance that $3$ specific spins are non-red.\n\n**Test Day Takeaway:** For \"exactly $k$ successes in $n$ independent trials,\" use $\\binom{n}{k}\\,p^k(1-p)^{n-k}$. The binomial coefficient counts the arrangements you would otherwise miss.",
  skills: ["probability"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $g(x)$, where $g(x) = \\dfrac{f(x)}{x+4}$ and $f$ is a linear function: $g(-24) = 4$, $g(-8) = 0$, $g(16) = 6$. What is the $y$-intercept of the graph of $y = f(x)$?",
  choices: [
    { id: "A", text: "$(0,\\,40)$" },
    // distractor: wrong base — reports an f-value from the table without fitting the full line
    { id: "B", text: "$(0,\\,32)$" },
    // distractor: stops one step early — reports the recovered slope (5) as the intercept
    { id: "C", text: "$(0,\\,5)$" },
    // distractor: applies inverse operation — uses the zero input x = -8 as the intercept value
    { id: "D", text: "$(0,\\,-8)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Since $g(x) = \\frac{f(x)}{x+4}$, recover $f(x) = g(x)(x+4)$: $f(-24) = 4(-20) = -80$ and $f(-8) = 0$. Slope $= \\frac{0-(-80)}{-8-(-24)} = \\frac{80}{16} = 5$, so $f(x) = 5(x+8)$ and $f(0) = 40$.\n\n**The Full Solution:**\nStep 1: Multiply back to get $f$-values: $f(-24) = 4(-24+4) = 4(-20) = -80$, $f(-8) = 0(-8+4) = 0$, and $f(16) = 6(16+4) = 6(20) = 120$.\nStep 2: Fit the line through $(-24, -80)$ and $(-8, 0)$: slope $= \\frac{0-(-80)}{-8-(-24)} = \\frac{80}{16} = 5$.\nStep 3: Point-slope from $(-8, 0)$: $f(x) = 5(x+8)$. Check $(16, 120)$: $5(24) = 120$. $\\checkmark$\nStep 4: The $y$-intercept is $f(0) = 5(8) = 40$, the point $(0, 40)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 32)$): a miscomputed back-substitution that never completes the line fit.\n* Choice C ($(0, 5)$): reports the slope $5$ as the intercept.\n* Choice D ($(0, -8)$): uses the zero-input $x = -8$ as the intercept value.\n\n**Test Day Takeaway:** When $g(x) = \\frac{f(x)}{x+c}$, multiply both sides by $(x+c)$ to recover $f$-values, fit the line through them, then read $f(0)$ for the $y$-intercept.",
  skills: ["linear-functions", "rational-functions"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A survey asks $200$ people whether they own a cat, a dog, or both. The results show that $90$ own a cat, $75$ own a dog, and $140$ own at least one of the two. How many people own both a cat and a dog?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Inclusion-Exclusion Principle**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~20s):** Inclusion-exclusion gives $|C \\cup D| = |C| + |D| - |C \\cap D|$, so $140 = 90 + 75 - |C \\cap D| \\Rightarrow |C \\cap D| = 25$.\n\n**The Full Solution:**\nStep 1: Let $C$ be cat owners and $D$ be dog owners. The \"at least one\" count is the union: $|C \\cup D| = 140$.\nStep 2: Apply inclusion-exclusion: $|C \\cup D| = |C| + |D| - |C \\cap D|$.\nStep 3: Substitute: $140 = 90 + 75 - |C \\cap D| = 165 - |C \\cap D|$, so $|C \\cap D| = 25$.\nStep 4: Check: only cat $= 90 - 25 = 65$, only dog $= 75 - 25 = 50$, both $= 25$; total $65 + 50 + 25 = 140$. $\\checkmark$\n\n**Common Mistakes:** Reporting $200 - 140 = 60$ (the number with neither, not both); or adding $90 + 75 = 165$ and forgetting to subtract the overlap.\n\n**Test Day Takeaway:** $|A \\cup B| = |A| + |B| - |A \\cap B|$. When the union is given, solve algebraically for the unknown intersection.",
  skills: ["probability"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "After the quantity $x$ is decreased by $25\\%$, the result is $180$. What is the value of $x$?",
  choices: [
    { id: "A", text: "$240$" },
    // distractor: wrong base — divides 180 by the decrease 0.25 instead of by the retained 0.75
    { id: "B", text: "$720$" },
    // distractor: applies inverse operation — decreases 180 by 25% instead of reversing the decrease
    { id: "C", text: "$135$" },
    // distractor: off-by-one — treats it as an increase and multiplies 180 by 1.25
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Decreasing by $25\\%$ keeps $1 - 0.25 = 0.75$ of $x$, so $0.75x = 180 \\Rightarrow x = \\frac{180}{0.75} = 240$.\n\n**The Full Solution:**\nStep 1: A $25\\%$ decrease leaves $75\\%$: $x - 0.25x = 0.75x$.\nStep 2: Set equal to the result: $0.75x = 180$.\nStep 3: Solve: $x = \\frac{180}{0.75} = 240$.\nStep 4: Check: $240 - 0.25(240) = 240 - 60 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($720$): divides by the removed fraction, $\\frac{180}{0.25}$, instead of the retained $0.75$.\n* Choice C ($135$): decreases $180$ by $25\\%$ ($180 - 45$) instead of reversing the decrease.\n* Choice D ($225$): treats it as an increase and computes $180 \\times 1.25$.\n\n**Test Day Takeaway:** \"Decrease by $p\\%$\" means multiply by $1 - \\frac{p}{100}$. To undo it, divide the result by that retained factor, not by the percent removed.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The function $f(x) = 250(0.85)^x$ models the amount of a medication, in mg, in a patient's bloodstream $x$ hours after administration. After how many complete hours will the amount first drop below $100$ mg?\n\n(Use: $\\log(0.4) \\approx -0.3979$ and $\\log(0.85) \\approx -0.0706$.)",
  choices: [
    // distractor: off-by-one — rounds 5.64 down to 5, but at x = 5 the amount is still above 100
    { id: "A", text: "$5$" },
    { id: "B", text: "$6$" },
    // distractor: applies inverse operation — divides logs in the wrong order
    { id: "C", text: "$7$" },
    // distractor: wrong base — miscalculates the logarithm ratio
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solve $250(0.85)^x < 100 \\Rightarrow (0.85)^x < 0.4 \\Rightarrow x > \\frac{\\log(0.4)}{\\log(0.85)} \\approx \\frac{-0.3979}{-0.0706} \\approx 5.64$. The first complete hour is $6$.\n\n**The Full Solution:**\nStep 1: Set up the inequality: $250(0.85)^x < 100$, so $(0.85)^x < 0.4$.\nStep 2: Take logs: $x\\log(0.85) < \\log(0.4)$.\nStep 3: Since $\\log(0.85) < 0$, dividing flips the inequality: $x > \\frac{\\log(0.4)}{\\log(0.85)} = \\frac{-0.3979}{-0.0706} \\approx 5.64$.\nStep 4: The amount first drops below $100$ at the next whole hour, $x = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): rounds $5.64$ down, but at $x = 5$ the amount is still above $100$ mg.\n* Choice C ($7$): overshoots, rounding well past the first crossing.\n* Choice D ($8$): miscomputes the log ratio and lands far too high.\n\n**Test Day Takeaway:** When you divide an inequality by a negative log, flip the direction. For \"first drops below,\" round the boundary UP to the next whole value.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x + 5)^2 + (y - 22)^2 = 144$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?",
  choices: [
    // distractor: off-by-one — extends one unit past the left edge of the x-range
    { id: "A", text: "$-18$" },
    { id: "B", text: "$-16$" },
    // distractor: wrong base — uses the center x-coordinate plus the radius incorrectly
    { id: "C", text: "$10$" },
    // distractor: applies inverse operation — uses the center y-coordinate as an x-value
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Center $(-5, 22)$, radius $\\sqrt{144} = 12$. Any $x$ on the circle satisfies $-5 - 12 \\le x \\le -5 + 12$, i.e. $-17 \\le x \\le 7$. Only $-16$ fits.\n\n**The Full Solution:**\nStep 1: Read off center $(-5, 22)$ and radius $\\sqrt{144} = 12$ from the standard form.\nStep 2: The $x$-coordinate of any point on the circle stays within one radius of the center's $x$: $-5 - 12 \\le x \\le -5 + 12$, so $-17 \\le x \\le 7$.\nStep 3: Test the choices: $-18 < -17$ (too far left), $-16$ lies in $[-17, 7]$ $\\checkmark$, $10 > 7$ and $22 > 7$ (both too far right).\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): just one unit past the left edge $-17$.\n* Choice C ($10$): exceeds the right edge $7$, likely from mis-adding the radius.\n* Choice D ($22$): uses the center's $y$-coordinate as an $x$-value.\n\n**Test Day Takeaway:** For a point on a circle with center $(h, k)$ and radius $r$, the $x$-coordinate is trapped in $h - r \\le x \\le h + r$. Build that interval and screen the choices.",
  skills: ["circle-equations", "geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms each have a height of $100$ centimeters (cm). The base of each prism is a square, and the surface area of each prism is $K$ cm$^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\dfrac{41}{21}K$ cm$^2$. What is the side length, in cm, of each square base?",
  choices: [
    // distractor: off-by-one — solves a related equation that yields half the side length
    { id: "A", text: "$5$" },
    { id: "B", text: "$10$" },
    // distractor: wrong base — forgets the hidden base area and overshoots the side length
    { id: "C", text: "$15$" },
    // distractor: applies inverse operation — uses the height-to-ratio relationship incorrectly
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** One prism: $K = 2s^2 + 400s$. Gluing two along a square base hides $2s^2$, giving $2K - 2s^2 = 2s^2 + 800s$. Set $2s^2 + 800s = \\frac{41}{21}(2s^2 + 400s)$ and solve: $s = 10$.\n\n**The Full Solution:**\nStep 1: Each prism has square base side $s$ and height $100$, so $K = 2s^2 + 4(s)(100) = 2s^2 + 400s$.\nStep 2: Gluing two prisms along a square base hides one base square from each, removing $2s^2$ from the doubled total: combined $= 2K - 2s^2 = 2(2s^2 + 400s) - 2s^2 = 2s^2 + 800s$.\nStep 3: Set this equal to $\\frac{41}{21}K$: $2s^2 + 800s = \\frac{41}{21}(2s^2 + 400s)$.\nStep 4: Multiply by $21$: $21(2s^2 + 800s) = 41(2s^2 + 400s)$, so $42s^2 + 16{,}800s = 82s^2 + 16{,}400s$.\nStep 5: Simplify: $400s = 40s^2 \\Rightarrow s = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): drops a factor when setting up the equation, halving the side.\n* Choice C ($15$): forgets to subtract the hidden $2s^2$, overshooting the side length.\n* Choice D ($20$): misuses the height of $100$ in the surface-area ratio.\n\n**Test Day Takeaway:** When two solids are glued, the joined faces vanish — subtract their area from the doubled total before setting up the ratio.",
  skills: ["surface-area", "geometry"]
}
      ]
    }
  ]
};

export default practiceTest7;
