// Practice Test 8 - SAT Math
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
  question: "The function $d(h) = 1.8 + 0.45h$ models the depth of water, in meters, at the end of a pier $h$ hours after low tide, for the $6$ hours of a rising tide. What is the best interpretation of $0.45$ in this context?",
  choices: [
    // distractor: confuses 0.45 with the initial value (which is 1.8)
    { id: "A", text: "The depth of the water, in meters, at low tide" },
    // distractor: treats 0.45 as an input value rather than a rate of change
    { id: "B", text: "The depth of the water, in meters, $0.45$ hours after low tide" },
    // distractor: inverts the rate (that would be 1/0.45 hours per meter)
    { id: "C", text: "The number of hours needed for the depth to increase by $1$ meter" },
    { id: "D", text: "The increase in the depth of the water, in meters, each hour" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $d(h) = 1.8 + 0.45h$, the coefficient of $h$ is the rate of change: the depth rises $0.45$ meters every hour.\n\n**The Full Solution:**\nStep 1: The model has the form $d(h) = b + mh$, with $b = 1.8$ the depth at low tide ($h = 0$) and $m = 0.45$ the slope.\nStep 2: The slope is the change in depth per one-hour change in $h$, so $0.45$ means the water deepens by $0.45$ meters each hour. That is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the initial value $1.8$ (the depth at $h = 0$), not the coefficient of $h$.\n* Choice B: treats $0.45$ as an input time $h = 0.45$ rather than a per-hour rate.\n* Choice C: inverts the rate — one meter of rise takes $\\frac{1}{0.45}$ hours, not $0.45$.\n\n**Test Day Takeaway:** In $y = b + mx$, the number multiplying the variable is always the rate of change per unit of that variable; the constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A pottery glaze is mixed from feldspar and silica in a ratio of $3$ to $5$ by mass. If a batch of this glaze has a total mass of $96$ ounces, how many ounces of silica does the batch contain?",
  choices: [
    // distractor: reports the bare ratio number for silica
    { id: "A", text: "$5$" },
    // distractor: solves for the feldspar mass instead of the silica (3/8 of 96)
    { id: "B", text: "$36$" },
    { id: "C", text: "$60$" },
    // distractor: multiplies by 5/3, inverting the part-to-whole fraction
    { id: "D", text: "$160$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Silica is $5$ parts out of $3 + 5 = 8$ total parts, so silica $= \\frac{5}{8} \\cdot 96 = 60$ ounces.\n\n**The Full Solution:**\nStep 1: Write the parts as $3k$ (feldspar) and $5k$ (silica), so the ratio stays $3:5$.\nStep 2: The total is $3k + 5k = 8k = 96$, so $k = 12$.\nStep 3: Silica $= 5k = 5 \\cdot 12 = 60$ ounces. Check: feldspar $= 36$, and $36 + 60 = 96$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the ratio part itself without scaling it to the batch.\n* Choice B ($36$): solves for the feldspar mass ($\\frac{3}{8} \\cdot 96$) instead of the silica.\n* Choice D ($160$): multiplies $96$ by $\\frac{5}{3}$, turning a part-to-part ratio into a scale factor.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction has the SUM of the ratio numbers as its denominator, never a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A parking garage charges $\\$7$ for each hour parked plus a flat $\\$4$ entry fee. The total charge for parking a car for $n$ hours is $\\$46$. What is the total charge, in dollars, for parking a car for $n + 2$ hours (with one entry fee)?",
  choices: [
    // distractor: adds the count 2 as dollars instead of 2 * $7 = $14
    { id: "A", text: "$\\$48$" },
    // distractor: off-by-one — adds 7 once instead of twice
    { id: "B", text: "$\\$53$" },
    // distractor: uses the $4 entry fee as the hourly rate for the extra hours
    { id: "C", text: "$\\$54$" },
    { id: "D", text: "$\\$60$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Two more hours at $\\$7$ each add $\\$14$; the entry fee does not change. New total: $\\$46 + \\$14 = \\$60$.\n\n**The Full Solution:**\nStep 1: The charge is $7n + 4$. For the first stay, $7n + 4 = 46$, so $7n = 42$ and $n = 6$.\nStep 2: The longer stay lasts $n + 2 = 8$ hours with one entry fee: total $= 7(8) + 4 = 56 + 4 = \\$60$.\nStep 3: Or skip finding $n$: adding $2$ hours adds $2 \\cdot \\$7 = \\$14$ and leaves the fee alone, so $\\$46 + \\$14 = \\$60$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$48$): adds the count $2$ as dollars instead of $2 \\cdot \\$7 = \\$14$.\n* Choice B ($\\$53$): adds $\\$7$ only once — an off-by-one count slip.\n* Choice C ($\\$54$): charges the extra hours at the $\\$4$ fee rate: $\\$46 + 2 \\cdot \\$4$.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding quantity moves only the rate piece; the fixed fee never repeats.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a regional science fair, $2{,}880$ of the projects entered included a live demonstration, and these projects made up $45\\%$ of all projects entered. How many projects were entered in all?",
  choices: [
    // distractor: applies the percent forward — 2,880 * 0.45 = 1,296
    { id: "A", text: "$1{,}296$" },
    // distractor: adds the percent number 45 to the count instead of dividing
    { id: "B", text: "$2{,}925$" },
    { id: "C", text: "$6{,}400$" },
    // distractor: divides by 0.045 instead of 0.45 (decimal-place slip)
    { id: "D", text: "$64{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.45 \\times \\text{total} = 2{,}880$, so total $= \\frac{2{,}880}{0.45} = 6{,}400$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of projects. The demonstration projects are $45\\%$ of $T$, so $0.45 \\cdot T = 2{,}880$.\nStep 2: Divide both sides by $0.45$: $T = \\frac{2{,}880}{0.45} = 6{,}400$. Check: $0.45 \\cdot 6{,}400 = 2{,}880$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}296$): multiplies $2{,}880 \\cdot 0.45$ instead of dividing — the inverse operation.\n* Choice B ($2{,}925$): adds the number $45$ to the count, mixing a percent with a tally.\n* Choice D ($64{,}000$): divides by $0.045$ instead of $0.45$, a decimal slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent written as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the $11$ values in a data set. Which of the following statements best compares the mean and the median of the data set?",
  diagram: {
    type: "dotPlot",
    params: {
      data: [
        { value: 12, count: 1 },
        { value: 13, count: 3 },
        { value: 14, count: 3 },
        { value: 15, count: 2 },
        { value: 16, count: 1 },
        { value: 24, count: 1 }
      ],
      xMin: 11,
      xMax: 25
    }
  },
  choices: [
    { id: "A", text: "The mean is greater than the median." },
    // distractor: assumes symmetry, ignoring the high outlier at 24
    { id: "B", text: "The mean is equal to the median." },
    // distractor: reverses the direction a high outlier pulls the mean
    { id: "C", text: "The mean is less than the median." },
    // distractor: removing a high outlier lowers the mean, not raises it
    { id: "D", text: "Removing the greatest value would increase the mean." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Ten of the values cluster from $12$ to $16$, but one value sits far out at $24$. A high outlier drags the mean above the median.\n\n**The Full Solution:**\nStep 1: The median is the $6$th of the $11$ ordered values. Counting dots: $12, 13, 13, 13, 14, 14, \\ldots$ — the $6$th value is $14$.\nStep 2: The mean uses every value, so the outlier at $24$ pulls it upward: mean $= \\frac{163}{11} \\approx 14.8$.\nStep 3: Since $14.8 > 14$, the mean exceeds the median — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: would hold for a symmetric plot; the lone value at $24$ breaks the symmetry.\n* Choice C: reverses the effect — a HIGH outlier pulls the mean up, not down.\n* Choice D: deleting the greatest value removes the upward pull, so the mean would decrease.\n\n**Test Day Takeaway:** Outliers tug the mean toward themselves and barely move the median. High outlier $\\Rightarrow$ mean $>$ median; low outlier $\\Rightarrow$ mean $<$ median.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A beekeeper extracted honey from $9$ hives. The masses of honey, in pounds, from $8$ of the hives are listed below.\n\n$18, 25, 31, 22, 27, 19, 24, 26$\n\nThe mean mass of honey for all $9$ hives is $25$ pounds. What is the mass, in pounds, of the honey extracted from the ninth hive?",
  correctAnswer: "33",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $33$.**\n\n**The Fast Way (~15s):** Total for all $9$ hives $= 9 \\cdot 25 = 225$. The eight listed masses sum to $192$, so the ninth $= 225 - 192 = 33$.\n\n**The Full Solution:**\nStep 1: Mean times count gives the total: $9 \\cdot 25 = 225$ pounds.\nStep 2: Add the eight given masses: $18 + 25 + 31 + 22 + 27 + 19 + 24 + 26 = 192$.\nStep 3: The missing mass is $225 - 192 = 33$. Check: $\\frac{192 + 33}{9} = \\frac{225}{9} = 25$. $\\checkmark$\n\n**Common Mistakes:** Dividing $192$ by $8$ and comparing that mean to $25$ without using the target total; subtracting $25 - 24 = 1$ and reporting a difference instead of a mass.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Subtract the known sum from that total to recover any missing value.",
  skills: ["statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2 - 10x + 18$, which of the following is equivalent to $f(x)$ in vertex form?",
  choices: [
    // distractor: wrong sign inside the parentheses
    { id: "A", text: "$(x + 5)^2 - 7$" },
    // distractor: stops one step early — never subtracts the 25 that was added
    { id: "B", text: "$(x - 5)^2 + 18$" },
    // distractor: uses the full coefficient -10 inside instead of halving it
    { id: "C", text: "$(x - 10)^2 + 18$" },
    { id: "D", text: "$(x - 5)^2 - 7$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $x^2 - 10x + 18 = (x^2 - 10x + 25) - 7 = (x - 5)^2 - 7$.\n\n**The Full Solution:**\nStep 1: Take half the $x$-coefficient: $\\frac{-10}{2} = -5$, then square it: $(-5)^2 = 25$.\nStep 2: Add and subtract that $25$: $x^2 - 10x + 25 + 18 - 25 = (x - 5)^2 - 7$. Check: expanding $(x-5)^2 - 7 = x^2 - 10x + 25 - 7 = x^2 - 10x + 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: flips the sign inside; half of $-10$ is $-5$, so the binomial is $(x - 5)$, not $(x + 5)$.\n* Choice B: keeps the original $+18$, forgetting to subtract the $25$ that was added.\n* Choice C: uses the full coefficient $-10$ inside the square instead of halving to $-5$.\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx + c$, take half of $b$, square it, then add AND subtract that value — both moves, every time.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the figure shown, two parallel lines $\\ell$ and $m$ are cut by a transversal $t$, forming the angles labeled. What is the value of $x$?",
  diagram: {
    type: "parallelLines",
    params: {
      angles: { top: ["(5x+8)°", ""], bottom: ["(7x-24)°", ""] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  correctAnswer: "16",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~15s):** Corresponding angles are equal: $5x + 8 = 7x - 24 \\Rightarrow 32 = 2x \\Rightarrow x = 16$.\n\n**The Full Solution:**\nStep 1: A transversal cutting two parallel lines makes corresponding angles equal, so $5x + 8 = 7x - 24$.\nStep 2: Collect terms: $8 + 24 = 7x - 5x$, giving $32 = 2x$.\nStep 3: So $x = 16$. Check: $5(16) + 8 = 88^\\circ$ and $7(16) - 24 = 88^\\circ$. $\\checkmark$\n\n**Common Mistakes:** Treating the angles as supplementary ($12x - 16 = 180$ gives the non-integer $x = \\frac{49}{3}$); dropping a sign while moving the $-24$ across the equals sign.\n\n**Test Day Takeaway:** With parallel lines cut by a transversal, corresponding, alternate interior, and alternate exterior angles are EQUAL; same-side interior angles are SUPPLEMENTARY.",
  skills: ["triangles", "angles"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane has a slope of $-\\dfrac{3}{4}$ and passes through the point $(8, -2)$. At what point does this line cross the $y$-axis?",
  choices: [
    // distractor: subtracts 6 instead of adding when isolating the intercept
    { id: "A", text: "$(0, -8)$" },
    // distractor: copies the point's y-coordinate as the intercept
    { id: "B", text: "$(0, -2)$" },
    { id: "C", text: "$(0, 4)$" },
    // distractor: uses the point's x-coordinate as the intercept
    { id: "D", text: "$(0, 8)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Point-slope: $y + 2 = -\\frac{3}{4}(x - 8)$. At $x = 0$, $y + 2 = -\\frac{3}{4}(-8) = 6$, so $y = 4$, giving $(0, 4)$.\n\n**The Full Solution:**\nStep 1: Start from $y - (-2) = -\\frac{3}{4}(x - 8)$ using the slope and the point $(8, -2)$.\nStep 2: Solve for $y$: $y = -\\frac{3}{4}x + 6 - 2 = -\\frac{3}{4}x + 4$.\nStep 3: The $y$-intercept is $4$, so the line crosses the $y$-axis at $(0, 4)$. Check at $x = 8$: $-\\frac{3}{4}(8) + 4 = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -8)$): computes $-2 - 6$ instead of $-2 + 6$ — a sign slip on the slope term.\n* Choice B ($(0, -2)$): reuses the point's $y$-coordinate as the intercept without adjusting for the run to $x = 0$.\n* Choice D ($(0, 8)$): grabs the point's $x$-coordinate.\n\n**Test Day Takeaway:** To find a $y$-intercept, set $x = 0$ in the line's equation and finish the arithmetic — watch signs when the slope is negative.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $h(x) = 3g(x + 2) - 5$ and $g(6) = 7$, what is the value of $h(4)$?",
  choices: [
    // distractor: subtracts the 5 inside the parentheses before multiplying
    { id: "A", text: "$6$" },
    { id: "B", text: "$16$" },
    // distractor: stops one step early — drops the -5 tail
    { id: "C", text: "$21$" },
    // distractor: applies inverse operation — adds 5 instead of subtracting
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(4) = 3g(4 + 2) - 5 = 3g(6) - 5 = 3(7) - 5 = 16$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ into $h(x) = 3g(x + 2) - 5$, so the inner argument is $4 + 2 = 6$.\nStep 2: Use the given value $g(6) = 7$: $h(4) = 3(7) - 5 = 21 - 5 = 16$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): computes $3(7 - 5)$, pulling the $-5$ inside the multiplication.\n* Choice C ($21$): computes $3(7)$ but forgets the $-5$.\n* Choice D ($26$): adds $5$ instead of subtracting it.\n\n**Test Day Takeaway:** Evaluate composed functions inside-out: resolve the argument of $g$ first, then apply the outer multiply, then the outer add or subtract — in that order.",
  skills: ["function-interpretation"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table classifies the $160$ trails at a cross-country ski area by trail type and by whether the trail was groomed yesterday. What percentage of the skate trails were groomed yesterday?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Groomed yesterday", "Not groomed", "Total"],
      rows: [
        ["Classic", "54", "36", "90"],
        ["Skate", "49", "21", "70"],
        ["Total", "103", "57", "160"]
      ]
    }
  },
  choices: [
    // distractor: wrong base — divides by the grand total 160
    { id: "A", text: "$30.6\\%$" },
    // distractor: wrong base — divides by the groomed column total 103
    { id: "B", text: "$47.6\\%$" },
    // distractor: uses the classic row (54/90) instead of the skate row
    { id: "C", text: "$60\\%$" },
    { id: "D", text: "$70\\%$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Of the skate trails\" sets the denominator to the skate row total, $70$. Groomed skate trails number $49$: $\\frac{49}{70} = 70\\%$.\n\n**The Full Solution:**\nStep 1: The condition is \"skate trails,\" so use the Skate row total, $70$, as the denominator.\nStep 2: The groomed count in that row is $49$.\nStep 3: $\\frac{49}{70} = 0.70 = 70\\%$ — Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30.6\\%$): divides $49$ by the grand total $160$ instead of the skate total.\n* Choice B ($47.6\\%$): divides $49$ by the groomed column total $103$, conditioning on the wrong group.\n* Choice C ($60\\%$): computes the classic-trail rate $\\frac{54}{90}$, reading the wrong row.\n\n**Test Day Takeaway:** \"Of [group]\" makes that group's total the denominator. Locate the conditioning row or column before you divide.",
  skills: ["two-way-tables", "percents", "probability"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{2x+1}{5} - \\dfrac{x-3}{4} = 2$, what is the value of $x$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Multiply through by $20$: $4(2x+1) - 5(x-3) = 40 \\Rightarrow 3x + 19 = 40 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: Multiply every term by $20$, the LCM of $5$ and $4$: $4(2x+1) - 5(x-3) = 40$.\nStep 2: Distribute carefully — the minus applies to BOTH terms: $8x + 4 - 5x + 15 = 40$, so $3x + 19 = 40$.\nStep 3: Then $3x = 21$ and $x = 7$. Check: $\\frac{2(7)+1}{5} - \\frac{7-3}{4} = \\frac{15}{5} - \\frac{4}{4} = 3 - 1 = 2$. $\\checkmark$\n\n**Common Mistakes:** Distributing $-5$ over $(x - 3)$ as $-5x - 15$ (the double negative must become $+15$); forgetting to multiply the right-hand $2$ by $20$.\n\n**Test Day Takeaway:** Clear fractions by multiplying every term by the LCM, and treat a subtracted fraction's numerator as a parenthesized package — the sign hits every term inside.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one of the acute angles has measure $\\theta$, where $\\tan(\\theta) = \\dfrac{7}{24}$. What is the value of $\\sin(\\theta)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{7}{25}$" },
    // distractor: returns tan again instead of sin
    { id: "B", text: "$\\dfrac{7}{24}$" },
    // distractor: computes cos instead of sin
    { id: "C", text: "$\\dfrac{24}{25}$" },
    // distractor: inverts tan (cotangent), not sine
    { id: "D", text: "$\\dfrac{24}{7}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\tan(\\theta) = \\frac{7}{24}$ flags the $7$-$24$-$25$ Pythagorean triple. With opposite $= 7$ and hypotenuse $= 25$, $\\sin(\\theta) = \\dfrac{7}{25}$.\n\n**The Full Solution:**\nStep 1: $\\tan(\\theta) = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{7}{24}$, so take opposite $= 7$ and adjacent $= 24$.\nStep 2: Find the hypotenuse: $c^2 = 7^2 + 24^2 = 49 + 576 = 625$, so $c = 25$.\nStep 3: $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{7}{25}$. Check: $\\left(\\frac{7}{25}\\right)^2 + \\left(\\frac{24}{25}\\right)^2 = \\frac{49 + 576}{625} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): repeats the given $\\tan(\\theta)$ instead of computing $\\sin(\\theta)$.\n* Choice C ($\\frac{24}{25}$): that is $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$.\n* Choice D ($\\frac{24}{7}$): inverts the tangent — the cotangent, not the sine.\n\n**Test Day Takeaway:** Know the triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). A tangent hands you both legs; the triple hands you the hypotenuse.",
  skills: ["trigonometry", "right-triangles", "triangles"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The solution to the system of equations $3x + 2y = 22$ and $3x - 2y = 2$ is $(x, y)$. What is the value of $4x - y$?",
  choices: [
    // distractor: computes x + y instead of 4x - y
    { id: "A", text: "$9$" },
    { id: "B", text: "$11$" },
    // distractor: stops one step early — reports 4x and drops the y
    { id: "C", text: "$16$" },
    // distractor: adds y instead of subtracting (4x + y)
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the equations: $(3x + 2y) + (3x - 2y) = 22 + 2 \\Rightarrow 6x = 24 \\Rightarrow x = 4$. Then $12 + 2y = 22 \\Rightarrow y = 5$, so $4x - y = 16 - 5 = 11$.\n\n**The Full Solution:**\nStep 1: The $y$ terms are opposites, so adding the equations eliminates $y$: $6x = 24 \\Rightarrow x = 4$.\nStep 2: Substitute into $3x + 2y = 22$: $12 + 2y = 22 \\Rightarrow 2y = 10 \\Rightarrow y = 5$.\nStep 3: Compute the target: $4x - y = 4(4) - 5 = 11$. Check: $3(4) - 2(5) = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): computes $x + y = 4 + 5$ instead of the requested expression.\n* Choice C ($16$): computes $4x$ and forgets to subtract $y$.\n* Choice D ($21$): computes $4x + y$, flipping the subtraction.\n\n**Test Day Takeaway:** When one variable's coefficients are opposites, add the equations to kill it instantly — then re-read exactly which expression the question wants.",
  skills: ["systems-of-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $p(x) = -x^2 + 14x - 33$ models the daily profit, in dollars, of a smoothie stand when the price of a smoothie is $x$ dollars. The function $q(x) = p(x + 3)$ models the profit after a supplier discount. What price, in dollars, maximizes profit under the new model $q$?",
  choices: [
    // distractor: reports the shift amount itself
    { id: "A", text: "$3$" },
    { id: "B", text: "$4$" },
    // distractor: stops one step early — gives the vertex of p, not q
    { id: "C", text: "$7$" },
    // distractor: shifts right instead of left for p(x + 3)
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex of $p$ sits at $x = \\dfrac{-14}{2(-1)} = 7$. Since $q(x) = p(x + 3)$ shifts the graph LEFT by $3$, the new maximum is at $x = 7 - 3 = 4$.\n\n**The Full Solution:**\nStep 1: For $p(x) = -x^2 + 14x - 33$, the vertex is at $x = -\\dfrac{b}{2a} = \\dfrac{14}{2} = 7$, so $p(x) = -(x - 7)^2 + 16$.\nStep 2: Replace $x$ with $x + 3$: $q(x) = p(x + 3) = -((x + 3) - 7)^2 + 16 = -(x - 4)^2 + 16$.\nStep 3: The vertex of $q$ is at $x = 4$, so profit peaks at $x = 4$. Check: $q(4) = p(7) = 16$, the same maximum value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the shift amount instead of the shifted vertex.\n* Choice C ($7$): the vertex of the original $p$, before the transformation.\n* Choice D ($10$): shifts right, reading $p(x + 3)$ as moving the vertex to $7 + 3$.\n\n**Test Day Takeaway:** $f(x + h)$ shifts the graph LEFT by $h$ — the vertex's $x$-coordinate decreases by $h$, while the maximum value itself never changes.",
  skills: ["function-interpretation", "vertex-form", "word-problems"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[4]{x^3} = 8$ and $x > 0$, what is the value of $x^{\\frac{1}{4}}$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: computes x^{1/2} instead of x^{1/4}
    { id: "B", text: "$4$" },
    // distractor: assumes x^{1/4} equals the given x^{3/4}
    { id: "C", text: "$8$" },
    // distractor: reports x itself
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\sqrt[4]{x^3} = x^{\\frac{3}{4}} = 8$. Since $\\frac{1}{4} = \\frac{1}{3} \\cdot \\frac{3}{4}$, $x^{\\frac{1}{4}} = \\left(x^{\\frac{3}{4}}\\right)^{\\frac{1}{3}} = 8^{\\frac{1}{3}} = 2$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical as a fractional exponent: $\\sqrt[4]{x^3} = x^{\\frac{3}{4}} = 8$.\nStep 2: Solve for $x$: raise both sides to the $\\frac{4}{3}$ power, $x = 8^{\\frac{4}{3}} = (8^{\\frac{1}{3}})^4 = 2^4 = 16$.\nStep 3: Evaluate the target: $x^{\\frac{1}{4}} = 16^{\\frac{1}{4}} = 2$. Check: $\\sqrt[4]{16^3} = \\sqrt[4]{4096} = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): computes $x^{\\frac{1}{2}} = \\sqrt{16} = 4$ instead of the fourth root.\n* Choice C ($8$): assumes the asked power equals the given $x^{\\frac{3}{4}} = 8$.\n* Choice D ($16$): solves for $x$ correctly but forgets to take the fourth root.\n\n**Test Day Takeaway:** Turn radicals into fractional exponents, solve for the base, then evaluate exactly the power the question asks for — not the one you found along the way.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $g(x) = ax^2 + bx + c$, $g(0) = -3$, $g(2) = 9$, and $g(-2) = 1$, what is the value of $b$?",
  choices: [
    // distractor: sign error when subtracting g(-2) from g(2)
    { id: "A", text: "$-2$" },
    // distractor: divides the difference 8 by 8 instead of 4
    { id: "B", text: "$1$" },
    { id: "C", text: "$2$" },
    // distractor: stops at the difference g(2) - g(-2) = 8
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Subtracting symmetric inputs kills $a$ and $c$: $g(2) - g(-2) = 4b = 9 - 1 = 8$, so $b = 2$.\n\n**The Full Solution:**\nStep 1: $g(0) = c = -3$.\nStep 2: $g(2) = 4a + 2b + c = 9$ and $g(-2) = 4a - 2b + c = 1$.\nStep 3: Subtract the equations: $(4a + 2b + c) - (4a - 2b + c) = 4b = 8$, so $b = 2$. (Adding them instead gives $8a + 2c = 10$, so $a = 2$.) Check $g(x) = 2x^2 + 2x - 3$: $g(2) = 9$, $g(-2) = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): a sign error subtracting $g(-2)$ — the $-2b$ term must flip to $+2b$.\n* Choice B ($1$): divides the difference $8$ by $8$ instead of by the coefficient $4$.\n* Choice D ($8$): stops at $4b = 8$ and reports the difference itself.\n\n**Test Day Takeaway:** For symmetric inputs, $f(k) - f(-k) = 2bk$ cancels the even-power terms — subtract to isolate $b$, add to isolate $a$ and $c$.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has equation $(x + 5)^2 + (y - 2)^2 = 25$. Which of the following points lies on the circle?",
  choices: [
    // distractor: the center itself — distance 0 from the center, not 5
    { id: "A", text: "$(-5, 2)$" },
    // distractor: moves 3 right and 3 up — squared distance 18, not 25
    { id: "B", text: "$(-2, 5)$" },
    { id: "C", text: "$(-2, 6)$" },
    // distractor: moves 5 right and 5 up — squared distance 50, not 25
    { id: "D", text: "$(0, 7)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A point is on the circle only if $(x + 5)^2 + (y - 2)^2 = 25$. Test $(-2, 6)$: $3^2 + 4^2 = 9 + 16 = 25$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: The equation is in standard form with center $(-5, 2)$ and radius $5$, so a point lies on the circle exactly when its squared distance from $(-5, 2)$ equals $25$.\nStep 2: Plug in each candidate:\nA: $(-5 + 5)^2 + (2 - 2)^2 = 0 \\neq 25$.\nB: $(-2 + 5)^2 + (5 - 2)^2 = 9 + 9 = 18 \\neq 25$.\nC: $(-2 + 5)^2 + (6 - 2)^2 = 9 + 16 = 25$. $\\checkmark$\nD: $(0 + 5)^2 + (7 - 2)^2 = 25 + 25 = 50 \\neq 25$.\nStep 3: Only $(-2, 6)$ satisfies the equation.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, 2)$): the CENTER of the circle — distance $0$, not on the circle itself.\n* Choice B ($(-2, 5)$): a $3$-$3$ offset gives $18$, a near-miss below $25$.\n* Choice D ($(0, 7)$): moves the full radius in BOTH directions, overshooting to $50$.\n\n**Test Day Takeaway:** A point lies on a circle iff its squared distance to the center equals $r^2$. The center never counts — it is the one point guaranteed NOT to be on the circle.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A ladder used for orchard pruning forms right triangle $JKL$ shown, with the right angle at vertex $K$. The vertical distance $JK$ up the tree is $a$ feet, the distance $KL$ from the base of the tree to the foot of the ladder is $a + 1$ feet, and the ladder $JL$ is $29$ feet long. What is the perimeter, in feet, of triangle $JKL$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["J", "K", "L"],
      sideLabels: ["a", "a + 1", "29"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "70",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~30s):** A hypotenuse of $29$ with legs one apart flags the $20$-$21$-$29$ triple. So $a = 20$ and $a + 1 = 21$, giving perimeter $20 + 21 + 29 = 70$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to legs $a$ and $a + 1$ with hypotenuse $29$: $a^2 + (a + 1)^2 = 29^2$.\nStep 2: Expand: $2a^2 + 2a + 1 = 841 \\Rightarrow a^2 + a - 420 = 0 \\Rightarrow (a + 21)(a - 20) = 0$.\nStep 3: Take the positive root $a = 20$, so the legs are $20$ and $21$. Perimeter $= 20 + 21 + 29 = 70$. Check: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$. $\\checkmark$\n\n**Common Mistakes:** Adding only the two legs ($20 + 21 = 41$) and forgetting the hypotenuse; taking the negative root $a = -21$; expanding $(a+1)^2$ as $a^2 + 1$ and losing the middle term.\n\n**Test Day Takeaway:** Know the triples — hypotenuse $29$ with near-equal legs means $20$-$21$-$29$. And a perimeter always needs all three sides.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the equation $2x^2 + kx + 50 = 0$, where $k$ is a positive constant, the equation has exactly one real solution. What is the value of $k$?",
  correctAnswer: "20",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** One real solution means the discriminant is $0$: $k^2 - 4(2)(50) = 0 \\Rightarrow k^2 = 400 \\Rightarrow k = 20$ (positive by the given condition).\n\n**The Full Solution:**\nStep 1: For exactly one real solution, set the discriminant $b^2 - 4ac = 0$ with $a = 2$, $b = k$, $c = 50$.\nStep 2: $k^2 - 4(2)(50) = 0 \\Rightarrow k^2 = 400 \\Rightarrow k = \\pm 20$.\nStep 3: The problem says $k$ is positive, so $k = 20$. Check: $2x^2 + 20x + 50 = 2(x^2 + 10x + 25) = 2(x + 5)^2 = 0$, one repeated root at $x = -5$. $\\checkmark$\n\n**Common Mistakes:** Dropping the leading coefficient and solving $k^2 - 200 = 0$ (giving the non-integer $\\sqrt{200}$); forgetting that $k^2 = 400$ has two roots and the sign condition picks one.\n\n**Test Day Takeaway:** Exactly one real solution $\\iff$ discriminant $= 0$. The unknown can sit in the $b$ slot — solve $b^2 = 4ac$ and use any sign condition the problem gives.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $f(x) = 3x^2 - 12x + 5$ and $g(x) = f(x + 5) - 4$, what is the minimum value of $g(x)$?",
  choices: [
    { id: "A", text: "$-11$" },
    // distractor: stops one step early — reports the minimum of f, dropping the -4
    { id: "B", text: "$-7$" },
    // distractor: applies inverse operation — adds 4 instead of subtracting
    { id: "C", text: "$-3$" },
    // distractor: reports the x-coordinate of f's vertex instead of the minimum value
    { id: "D", text: "$2$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The horizontal shift in $f(x + 5)$ never changes the minimum VALUE; the $-4$ lowers it by $4$. Min of $f$: at $x = \\dfrac{12}{6} = 2$, $f(2) = 12 - 24 + 5 = -7$. So min of $g = -7 - 4 = -11$.\n\n**The Full Solution:**\nStep 1: Complete the square: $f(x) = 3(x^2 - 4x) + 5 = 3(x - 2)^2 - 7$, so the minimum value of $f$ is $-7$.\nStep 2: $g(x) = f(x + 5) - 4 = 3((x + 5) - 2)^2 - 7 - 4 = 3(x + 3)^2 - 11$.\nStep 3: The vertex moved from $x = 2$ to $x = -3$, and the minimum value is $-11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): the minimum of $f$ — the $-4$ vertical shift was dropped.\n* Choice C ($-3$): adds $4$ to $-7$ instead of subtracting (or confuses it with the new vertex $x$-coordinate).\n* Choice D ($2$): reports the $x$-coordinate of $f$'s vertex, not a function value.\n\n**Test Day Takeaway:** Horizontal shifts slide the vertex sideways but never touch the min/max value; only the vertical shift moves it — subtract it straight off the old minimum.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the system $y = 5x + 3$ and $y = kx^2 + x + 8$ have exactly one solution?",
  choices: [
    // distractor: sign error when solving 16 - 20k = 0
    { id: "A", text: "$-\\dfrac{4}{5}$" },
    { id: "B", text: "$\\dfrac{4}{5}$" },
    // distractor: applies inverse operation — inverts the fraction
    { id: "C", text: "$\\dfrac{5}{4}$" },
    // distractor: drops the constant 5 from 4ac and solves 16 = 4k
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Set the curves equal: $kx^2 + x + 8 = 5x + 3 \\Rightarrow kx^2 - 4x + 5 = 0$. One solution means discriminant $= 0$: $(-4)^2 - 4(k)(5) = 0 \\Rightarrow 16 = 20k \\Rightarrow k = \\dfrac{4}{5}$.\n\n**The Full Solution:**\nStep 1: Substitute one equation into the other: $kx^2 + x + 8 = 5x + 3$, so $kx^2 - 4x + 5 = 0$.\nStep 2: Exactly one intersection means the discriminant is $0$: $(-4)^2 - 4(k)(5) = 16 - 20k = 0$.\nStep 3: Solve: $k = \\dfrac{16}{20} = \\dfrac{4}{5}$. Check: $\\dfrac{4}{5}x^2 - 4x + 5 = \\dfrac{4}{5}\\left(x - \\dfrac{5}{2}\\right)^2 = 0$, one solution at $x = \\dfrac{5}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{5}$): a sign error rearranging $16 - 20k = 0$.\n* Choice C ($\\frac{5}{4}$): inverts the fraction $\\frac{16}{20}$.\n* Choice D ($4$): drops the constant $5$ from $4ac$ and solves $16 = 4k$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when the combined quadratic's discriminant is $0$ — collect everything on one side first, then apply $b^2 = 4ac$.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
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
  difficulty: "easy",
  band: 3,
  question: "The function $L(m) = 58 - 0.04m$ models the water level, in feet, in an observation well above an aquifer $m$ minutes after a pump begins running. Based on the model, by how many feet does the water level drop every $30$ minutes of pumping?",
  choices: [
    // distractor: reads the raw coefficient without scaling to 30 minutes
    { id: "A", text: "$0.04$" },
    { id: "B", text: "$1.2$" },
    // distractor: scales by 60 minutes instead of 30
    { id: "C", text: "$2.4$" },
    // distractor: decimal slip — uses 0.4 instead of 0.04
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The level falls $0.04$ feet per minute. Over $30$ minutes: $0.04 \\times 30 = 1.2$ feet.\n\n**The Full Solution:**\nStep 1: In $L(m) = 58 - 0.04m$, the coefficient $-0.04$ is the change in level per ONE minute of pumping — a drop of $0.04$ feet each minute.\nStep 2: The question asks about a $30$-minute interval, so scale the per-minute rate: $0.04 \\times 30 = 1.2$ feet.\nStep 3: Check with the model: $L(0) - L(30) = 58 - (58 - 1.2) = 1.2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.04$): reads the slope straight off the equation without scaling to the asked interval.\n* Choice C ($2.4$): scales by $60$ minutes (a full hour) instead of the $30$ the question names.\n* Choice D ($12$): a decimal slip — multiplies $0.4 \\times 30$ instead of $0.04 \\times 30$.\n\n**Test Day Takeaway:** A slope is a PER-UNIT rate. When the question asks about a different interval, multiply the rate by that interval — never report the raw coefficient.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a bicycle-repair shop, $48$ of the repair orders received last month were for flat tires. These flat-tire orders were $25\\%$ of all repair orders. How many repair orders did the shop receive last month?",
  choices: [
    // distractor: applies the percent forward — 48 * 0.25 = 12
    { id: "A", text: "$12$" },
    // distractor: divides by the complement 0.75, treating 48 as the non-flat count
    { id: "B", text: "$64$" },
    // distractor: adds the percent number 25 to the count
    { id: "C", text: "$73$" },
    { id: "D", text: "$192$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $25\\%$ is one quarter, so the total is $4 \\times 48 = 192$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of repair orders. The flat-tire orders are $25\\%$ of $T$: $0.25 \\cdot T = 48$.\nStep 2: Divide by $0.25$: $T = \\frac{48}{0.25} = 192$. Check: $0.25 \\cdot 192 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): multiplies $48 \\cdot 0.25$ instead of dividing — the inverse operation.\n* Choice B ($64$): divides by the complement $0.75$, treating $48$ as the orders that were NOT flat tires.\n* Choice C ($73$): adds the number $25$ to the count, mixing a percent with a tally.\n\n**Test Day Takeaway:** To recover a whole from a known part, divide by the part's percent — and make sure the percent you use belongs to that part, not to its complement.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A grower recorded the number of open roof vents $x$ in a greenhouse and the interior air temperature $y$, in degrees Celsius, at noon on each of $10$ mornings. The line of best fit for the data is $\\hat{y} = 31 - 0.75x$. Which of the following is the best interpretation of the slope of the line of best fit?",
  diagram: { type: "scatterplot", params: {
    points: [[0, 31.5], [2, 29], [3, 29.5], [4, 28], [5, 27], [6, 26.8], [8, 25], [9, 23.5], [10, 24], [12, 22]],
    xMin: 0, xMax: 14, yMin: 20, yMax: 34,
    xGridStep: 1, xLabelStep: 2, yGridStep: 1, yLabelStep: 2,
    bestFitLine: { slope: -0.75, intercept: 31 },
    xLabel: "Open roof vents", yLabel: "Noon temperature (°C)",
  } },
  choices: [
    // distractor: describes the intercept 31, not the slope
    { id: "A", text: "The predicted noon temperature, in degrees Celsius, on a morning when no vents are open" },
    // distractor: sign flip — the slope is negative, so temperature decreases
    { id: "B", text: "For each additional vent open, the predicted noon temperature increases by $0.75$ degrees Celsius." },
    // distractor: confuses the slope (a rate) with an overall average
    { id: "C", text: "The average noon temperature, in degrees Celsius, across the $10$ mornings" },
    { id: "D", text: "For each additional vent open, the predicted noon temperature decreases by $0.75$ degrees Celsius." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = 31 - 0.75x$, the slope is $-0.75$: each extra open vent predicts a $0.75$-degree DROP in noon temperature.\n\n**The Full Solution:**\nStep 1: The model is $\\hat{y} = 31 - 0.75x$, with $x$ the number of open vents and $y$ the noon temperature in $^\\circ$C.\nStep 2: The slope $-0.75$ is $\\frac{\\Delta \\hat{y}}{\\Delta x}$: when $x$ increases by $1$ vent, $\\hat{y}$ changes by $-0.75$ degrees. The scatter of points falling from upper left to lower right confirms the negative direction. That is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the intercept $31$ (the prediction at $x = 0$), not the slope.\n* Choice B: keeps the magnitude but drops the minus sign — the trend is downward, not upward.\n* Choice C: treats the slope as an average of the data; a slope is a rate of change, not a summary of $y$-values.\n\n**Test Day Takeaway:** Read the SIGN of the slope before the size. In $\\hat{y} = b + mx$, a negative $m$ means the prediction falls as $x$ grows.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$x + 2y = 16$$\n$$y = 3x - 6$$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $xy$?",
  choices: [
    // distractor: reports x alone
    { id: "A", text: "$4$" },
    // distractor: reports y alone
    { id: "B", text: "$6$" },
    // distractor: computes x + y instead of the product
    { id: "C", text: "$10$" },
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Substitute $y = 3x - 6$ into the first equation: $x + 2(3x - 6) = 16 \\Rightarrow 7x = 28 \\Rightarrow x = 4$. Then $y = 3(4) - 6 = 6$, so $xy = 24$.\n\n**The Full Solution:**\nStep 1: The second equation already isolates $y$, so substitute: $x + 2(3x - 6) = 16$.\nStep 2: Distribute and collect: $x + 6x - 12 = 16 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.\nStep 3: Back-substitute: $y = 3(4) - 6 = 6$. Check: $4 + 2(6) = 16$. $\\checkmark$\nStep 4: The question asks for the PRODUCT: $xy = 4 \\cdot 6 = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): stops at $x$ — the question asks for $xy$.\n* Choice B ($6$): stops at $y$.\n* Choice C ($10$): computes the sum $x + y$ instead of the product.\n\n**Test Day Takeaway:** Solving the system is only step one — the final sentence names the target expression. Circle it before you bubble.",
  skills: ["systems-of-equations", "substitution"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes last year's safety inspections of the escalators in a rail-station network, serviced by two maintenance crews. What percent of all the escalators inspected by the two crews failed inspection?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Crew", "Escalators inspected", "Percent that failed"],
      rows: [
        ["A", "240", "5%"],
        ["B", "160", "10%"]
      ]
    }
  },
  correctAnswer: "7",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Count failures, not percents: $0.05(240) + 0.10(160) = 12 + 16 = 28$ failures out of $400$ inspections. $\\frac{28}{400} = 0.07 = 7\\%$.\n\n**The Full Solution:**\nStep 1: Crew A's failures: $5\\%$ of $240 = 12$ escalators.\nStep 2: Crew B's failures: $10\\%$ of $160 = 16$ escalators.\nStep 3: Total failures $= 12 + 16 = 28$; total inspections $= 240 + 160 = 400$.\nStep 4: Failure rate $= \\frac{28}{400} = 0.07 = 7\\%$.\n\n**Common Mistakes:** Averaging the two rates as $\\frac{5 + 10}{2} = 7.5$ ignores the unequal crew workloads; using only one crew's numbers lands on $5$ or $10$.\n\n**Test Day Takeaway:** Never average percentages from groups of different sizes. Convert each percent to a raw count, then divide total favorable by total count.",
  skills: ["percents", "statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A circle in the $xy$-plane has equation $x^2 + y^2 + 8x - 6y = 24$. What is the radius of the circle?",
  choices: [
    // distractor: takes the square root of 24 without completing the square
    { id: "A", text: "$2\\sqrt{6}$" },
    // distractor: uses only the added 16 + 9 = 25, dropping the original 24
    { id: "B", text: "$5$" },
    { id: "C", text: "$7$" },
    // distractor: stops at r^2 = 49 instead of r
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Complete the square both ways: $(x + 4)^2 + (y - 3)^2 = 24 + 16 + 9 = 49$, so $r = \\sqrt{49} = 7$.\n\n**The Full Solution:**\nStep 1: Group: $x^2 + 8x + y^2 - 6y = 24$.\nStep 2: For $x$, half of $8$ is $4$, squared is $16$. For $y$, half of $-6$ is $-3$, squared is $9$.\nStep 3: Add $16$ and $9$ to BOTH sides: $(x + 4)^2 + (y - 3)^2 = 24 + 16 + 9 = 49$.\nStep 4: This is a circle with center $(-4, 3)$ and radius $r = \\sqrt{49} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\sqrt{6}$): takes $\\sqrt{24}$ straight from the right side without completing the square.\n* Choice B ($5$): uses only the added constants $16 + 9 = 25$ and drops the original $24$.\n* Choice D ($49$): reports $r^2$ — the radius still needs a square root.\n\n**Test Day Takeaway:** To get a radius from general form, complete the square for BOTH variables, add the new constants to BOTH sides, then take the square root of the total.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $x > 1$, the expression $\\dfrac{\\sqrt[3]{x^7}}{\\sqrt{x}}$ is equivalent to $x^{\\frac{p}{q}}$, where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: subtracts the radicands' integer exponents 7 - 1 = 6
    { id: "A", text: "$6$" },
    // distractor: stops at the numerator p alone
    { id: "B", text: "$11$" },
    { id: "C", text: "$17$" },
    // distractor: forgets to reduce 14/6 before adding, giving 14 + 6
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Convert to fractional exponents: $\\sqrt[3]{x^7} = x^{\\frac{7}{3}}$ and $\\sqrt{x} = x^{\\frac{1}{2}}$. Dividing subtracts: $\\frac{7}{3} - \\frac{1}{2} = \\frac{14}{6} - \\frac{3}{6} = \\frac{11}{6}$. So $p + q = 11 + 6 = 17$.\n\n**The Full Solution:**\nStep 1: Rewrite each radical: $\\sqrt[3]{x^7} = x^{\\frac{7}{3}}$ and $\\sqrt{x} = x^{\\frac{1}{2}}$.\nStep 2: Dividing same bases subtracts exponents: $x^{\\frac{7}{3} - \\frac{1}{2}} = x^{\\frac{14 - 3}{6}} = x^{\\frac{11}{6}}$.\nStep 3: $\\gcd(11, 6) = 1$, so $\\frac{11}{6}$ is already in lowest terms. Then $p = 11$, $q = 6$, and $p + q = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): subtracts the whole-number exponents $7 - 1$ without converting the radicals.\n* Choice B ($11$): stops at the numerator $p$ and never adds $q = 6$.\n* Choice D ($20$): stops at the common-denominator rewrite $\\frac{14}{6}$ — forgetting to subtract $\\frac{3}{6}$ — then adds $14 + 6$.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$. Convert, subtract exponents for a quotient, REDUCE the fraction, and only then combine $p$ and $q$.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A solid is formed by joining two rectangular prisms along a shared face. One prism measures $3 \\text{ cm} \\times 8 \\text{ cm} \\times 10 \\text{ cm}$, the other measures $3 \\text{ cm} \\times 8 \\text{ cm} \\times 5 \\text{ cm}$, and the shared face measures $3 \\text{ cm} \\times 8 \\text{ cm}$. What is the total surface area of the solid, in square centimeters?",
  choices: [
    // distractor: subtracts the wrong face area (2 * 3 * 10 = 60)
    { id: "A", text: "$366$" },
    { id: "B", text: "$378$" },
    // distractor: subtracts the shared face only once (426 - 24)
    { id: "C", text: "$402$" },
    // distractor: never subtracts the shared faces at all
    { id: "D", text: "$426$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Add the two surface areas, then remove the shared face from EACH: SA$_1 = 268$, SA$_2 = 158$, sum $= 426$. The $3 \\times 8 = 24$ face is hidden on both solids, so subtract $2 \\times 24 = 48$: $426 - 48 = 378$.\n\n**The Full Solution:**\nStep 1: First prism ($3 \\times 8 \\times 10$): $2(3 \\cdot 8 + 3 \\cdot 10 + 8 \\cdot 10) = 2(24 + 30 + 80) = 268$ cm$^2$.\nStep 2: Second prism ($3 \\times 8 \\times 5$): $2(3 \\cdot 8 + 3 \\cdot 5 + 8 \\cdot 5) = 2(24 + 15 + 40) = 158$ cm$^2$.\nStep 3: Before joining, total $= 268 + 158 = 426$ cm$^2$.\nStep 4: The shared $3 \\times 8 = 24$ cm$^2$ face disappears from BOTH prisms, so subtract $2 \\times 24 = 48$: $426 - 48 = 378$ cm$^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($366$): subtracts $2 \\times 30$, using the $3 \\times 10$ face instead of the actual contact face.\n* Choice C ($402$): subtracts only one copy of the shared face ($426 - 24$).\n* Choice D ($426$): forgets the join entirely and reports the raw sum.\n\n**Test Day Takeaway:** When two solids are glued along a face, that face vanishes from BOTH surfaces — subtract twice the contact area from the sum of the separate surface areas.",
  skills: ["surface-area", "volume"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the figure, two parallel lines $\\ell$ and $m$ are crossed by a transversal $t$. The two labeled angles are corresponding angles. What is the value of $y$?",
  diagram: {
    type: "parallelLines",
    params: {
      angles: { top: ["", "(7y-12)°"], bottom: ["", "(4y+39)°"] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  choices: [
    // distractor: drops the -12 and solves 7y = 39
    { id: "A", text: "$\\dfrac{39}{7}$" },
    // distractor: sign slip — subtracts 12 from 39 to get 3y = 27
    { id: "B", text: "$9$" },
    { id: "C", text: "$17$" },
    // distractor: stops at 3y = 51 without dividing
    { id: "D", text: "$51$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Alternate interior angles between parallel lines are equal: $7y - 12 = 4y + 39 \\Rightarrow 3y = 51 \\Rightarrow y = 17$.\n\n**The Full Solution:**\nStep 1: A transversal cutting parallel lines makes alternate interior angles equal, so set the expressions equal: $7y - 12 = 4y + 39$.\nStep 2: Subtract $4y$ and add $12$: $3y = 51$.\nStep 3: Divide by $3$: $y = 17$. Check: both angles measure $7(17) - 12 = 107^\\circ$ and $4(17) + 39 = 107^\\circ$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{39}{7}$): solves $7y = 39$, dropping the $-12$ entirely.\n* Choice B ($9$): subtracts $12$ from $39$ instead of adding, giving $3y = 27$.\n* Choice D ($51$): stops at $3y = 51$ and reports the right-hand side.\n\n**Test Day Takeaway:** With parallel lines, alternate interior, corresponding, and alternate exterior angles are EQUAL; same-side interior angles are SUPPLEMENTARY. Set up the right relationship, then finish every algebra step.",
  skills: ["triangles", "angles"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $DEF$ shown, the right angle is at vertex $F$, $DE = 53$, and $EF = 28$. What is the value of $\\sin(E)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["D", "F", "E"],
      sideLabels: ["", "28", "53"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses EF (adjacent to E) over the hypotenuse — that is cos(E)
    { id: "A", text: "$\\dfrac{28}{53}$" },
    // distractor: opposite over adjacent for the OTHER acute angle (tan D)
    { id: "B", text: "$\\dfrac{28}{45}$" },
    { id: "C", text: "$\\dfrac{45}{53}$" },
    // distractor: tan(E), not sin(E)
    { id: "D", text: "$\\dfrac{45}{28}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The right angle is at $F$, so $DE = 53$ is the hypotenuse. The leg $28$ with hypotenuse $53$ flags the $28$-$45$-$53$ triple, so $DF = 45$. For angle $E$, the opposite leg is $DF = 45$: $\\sin(E) = \\frac{45}{53}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $F$, $DE$ is the hypotenuse. Find $DF$: $DF^2 = 53^2 - 28^2 = 2809 - 784 = 2025$, so $DF = 45$.\nStep 2: For angle $E$, the opposite side is $DF = 45$ and the hypotenuse is $DE = 53$.\nStep 3: $\\sin(E) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{45}{53}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{28}{53}$): uses $EF$, the leg ADJACENT to $E$ — that ratio is $\\cos(E)$.\n* Choice B ($\\frac{28}{45}$): opposite over adjacent for angle $D$, i.e. $\\tan(D)$.\n* Choice D ($\\frac{45}{28}$): $\\tan(E)$, not the sine.\n\n**Test Day Takeaway:** Identify the hypotenuse first (opposite the right angle), then label opposite and adjacent RELATIVE to the named angle. Sine is opposite over hypotenuse — always.",
  skills: ["trigonometry", "right-triangles", "triangles"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{x^2 - 25}{x^2 + 8x + 15} \\div \\dfrac{x^2 - 10x + 25}{x^2 + 2x - 15}$ is equivalent to which of the following, for all values of $x$ where it is defined?",
  choices: [
    { id: "A", text: "$\\dfrac{(x+5)(x-3)}{(x+3)(x-5)}$" },
    // distractor: cancels (x+5) against (x-5) as if they were identical
    { id: "B", text: "$\\dfrac{x-3}{x+3}$" },
    // distractor: flips the signs on the 5s, inverting the wrong factors
    { id: "C", text: "$\\dfrac{(x-5)(x-3)}{(x+3)(x+5)}$" },
    // distractor: assumes every factor pairs off and cancels to 1
    { id: "D", text: "$1$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Flip the second fraction, factor everything, and cancel: the result keeps one $(x+5)$ and one $(x-3)$ on top against $(x+3)$ and $(x-5)$ below.\n\n**The Full Solution:**\nStep 1: Division means multiply by the reciprocal:\n$\\dfrac{x^2 - 25}{x^2 + 8x + 15} \\cdot \\dfrac{x^2 + 2x - 15}{x^2 - 10x + 25}$.\nStep 2: Factor each piece:\n* $x^2 - 25 = (x - 5)(x + 5)$\n* $x^2 + 8x + 15 = (x + 3)(x + 5)$\n* $x^2 + 2x - 15 = (x + 5)(x - 3)$\n* $x^2 - 10x + 25 = (x - 5)^2$\nStep 3: Multiply and cancel: $\\dfrac{(x-5)(x+5)(x+5)(x-3)}{(x+3)(x+5)(x-5)(x-5)} = \\dfrac{(x+5)(x-3)}{(x+3)(x-5)}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: cancels $(x + 5)$ against $(x - 5)$ — different factors that only LOOK alike.\n* Choice C: swaps the signs on the remaining $5$-factors, as if the reciprocal flipped signs instead of positions.\n* Choice D: assumes complete cancellation, but $(x - 5)^2$ in the divisor leaves an unmatched factor.\n\n**Test Day Takeaway:** For division of rationals: flip the SECOND fraction first, then factor all four quadratics, then cancel only IDENTICAL factors — $(x+5)$ and $(x-5)$ never cancel each other.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bicycle-repair shop ordered $38$ replacement parts, each either an inner tube or a tire. Inner tubes cost $\\$6$ each, tires cost $\\$14$ each, and the whole order cost $\\$364$. How many tires did the shop order?",
  choices: [
    { id: "A", text: "$17$" },
    // distractor: stops one step early — reports the inner-tube count
    { id: "B", text: "$21$" },
    // distractor: divides 364 by 14, ignoring the inner tubes entirely
    { id: "C", text: "$26$" },
    // distractor: reports the total number of parts ordered
    { id: "D", text: "$38$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Let $t$ = tubes, $r$ = tires. From $t + r = 38$ and $6t + 14r = 364$, substitute $t = 38 - r$: $6(38 - r) + 14r = 364 \\Rightarrow 228 + 8r = 364 \\Rightarrow r = 17$.\n\n**The Full Solution:**\nStep 1: Define $t$ = inner tubes, $r$ = tires. Count: $t + r = 38$. Cost: $6t + 14r = 364$.\nStep 2: From the count equation, $t = 38 - r$.\nStep 3: Substitute: $6(38 - r) + 14r = 364 \\Rightarrow 228 - 6r + 14r = 364 \\Rightarrow 8r = 136$.\nStep 4: $r = 17$ tires (and $t = 21$).\nCheck: $17 + 21 = 38$ $\\checkmark$; $6(21) + 14(17) = 126 + 238 = 364$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($21$): the inner-tube count — the system solved correctly but the wrong variable reported.\n* Choice C ($26$): divides $364$ by $14$ as if every part were a tire.\n* Choice D ($38$): the total order size, not the tire subset.\n\n**Test Day Takeaway:** Two-item purchases give one count equation and one cost equation. Solve the system, then re-read which quantity the question wants before answering.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $2x^2 - 18x + 28 = 0$ has two solutions, $r$ and $s$. What is the value of $rs$?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~15s):** For $ax^2 + bx + c = 0$, the product of the roots is $\\frac{c}{a} = \\frac{28}{2} = 14$. No factoring needed.\n\n**The Full Solution:**\nStep 1: Identify $a = 2$, $b = -18$, $c = 28$.\nStep 2: Vieta's product of roots is $rs = \\frac{c}{a} = \\frac{28}{2} = 14$.\nCheck: $2x^2 - 18x + 28 = 2(x^2 - 9x + 14) = 2(x - 2)(x - 7)$, so the roots are $2$ and $7$, and $2 \\cdot 7 = 14$. $\\checkmark$\n\n**Common Mistakes:** Reporting the sum $-\\frac{b}{a} = 9$ instead of the product; using $c = 28$ without dividing by $a = 2$.\n\n**Test Day Takeaway:** The product of the roots is $\\frac{c}{a}$ and the sum is $-\\frac{b}{a}$ — read them straight off the coefficients, but never skip the divide-by-$a$.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An object is accelerating at $5.5$ millimeters per second squared. Expressed in meters per minute squared, what is this acceleration? (Use $1$ meter $= 1{,}000$ millimeters.)",
  choices: [
    // distractor: converts millimeters to meters but never converts the time
    { id: "A", text: "$0.0055$" },
    // distractor: applies the seconds-to-minutes factor only once instead of squaring it
    { id: "B", text: "$0.33$" },
    { id: "C", text: "$19.8$" },
    // distractor: applies the time factor correctly but never converts millimeters
    { id: "D", text: "$19{,}800$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Unit Conversion — Squared Units**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Length: divide by $1{,}000$ (mm to m). Time: the seconds-to-minutes factor of $60$ applies TWICE because time is squared, so multiply by $60^2 = 3{,}600$. Result: $\\frac{5.5 \\times 3{,}600}{1{,}000} = 19.8$.\n\n**The Full Solution:**\nStep 1: Start with $5.5 \\frac{\\text{mm}}{\\text{s}^2}$.\nStep 2: Convert mm to m by dividing by $1{,}000$: $0.0055 \\frac{\\text{m}}{\\text{s}^2}$.\nStep 3: Convert per second-squared to per minute-squared. Since $1$ min $= 60$ s, $\\frac{1}{\\text{s}^2}$ becomes $60^2 = 3{,}600$ times $\\frac{1}{\\text{min}^2}$.\nStep 4: $0.0055 \\times 3{,}600 = 19.8 \\frac{\\text{m}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0055$): converts the length but leaves the time in seconds.\n* Choice B ($0.33$): applies the factor of $60$ only once — squared time needs $60^2$.\n* Choice D ($19{,}800$): handles the time correctly but never divides by $1{,}000$ for the length.\n\n**Test Day Takeaway:** When a unit is SQUARED, its conversion factor applies TWICE. Here the length factor is used once and the time factor twice ($60^2$).",
  skills: ["unit-conversion", "rates"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 2x^2 + bx + c$ in the $xy$-plane has its vertex at $(3, -8)$, where $b$ and $c$ are constants. What is the value of $c - b$?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~30s):** Write vertex form with $a = 2$: $y = 2(x - 3)^2 - 8$. Expand to $2x^2 - 12x + 10$, so $b = -12$, $c = 10$, and $c - b = 10 - (-12) = 22$.\n\n**The Full Solution:**\nStep 1: The vertex is $(3, -8)$ and the leading coefficient is $2$, so the vertex form is $y = 2(x - 3)^2 - 8$.\nStep 2: Expand: $2(x^2 - 6x + 9) - 8 = 2x^2 - 12x + 18 - 8 = 2x^2 - 12x + 10$.\nStep 3: Match to $y = 2x^2 + bx + c$: $b = -12$ and $c = 10$, so $c - b = 10 - (-12) = 22$.\n\nVerification: the vertex of $y = 2x^2 - 12x + 10$ sits at $x = \\frac{12}{2 \\cdot 2} = 3$, and $y(3) = 18 - 36 + 10 = -8$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to distribute the leading $2$ across the full expansion of $(x - 3)^2$; computing $c + b = -2$ or $b - c = -22$ instead of the requested $c - b$.\n\n**Test Day Takeaway:** Build vertex form $a(x - h)^2 + k$ first, distribute $a$ across every term, then read the coefficients — and mind the subtraction order the question specifies.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = x^2$. The function $h$ is defined by $h(x) = f(x - 6) + 2$. What is the value of $h(6)$?",
  choices: [
    // distractor: subtracts 2 instead of adding after the inner shift
    { id: "A", text: "$-2$" },
    { id: "B", text: "$2$" },
    // distractor: ignores the inner shift entirely: f(6) + 2 = 38
    { id: "C", text: "$38$" },
    // distractor: shifts the wrong way: f(12) + 2 = 146
    { id: "D", text: "$146$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(6) = f(6 - 6) + 2 = f(0) + 2 = 0 + 2 = 2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$ into $h(x) = f(x - 6) + 2$: $h(6) = f(6 - 6) + 2 = f(0) + 2$.\nStep 2: Since $f(x) = x^2$, $f(0) = 0^2 = 0$.\nStep 3: So $h(6) = 0 + 2 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): flips the sign of the outer shift, computing $f(0) - 2$.\n* Choice C ($38$): ignores the inner shift and computes $f(6) + 2 = 36 + 2$.\n* Choice D ($146$): shifts the input the wrong way, evaluating $f(12) + 2 = 144 + 2$.\n\n**Test Day Takeaway:** Evaluate composed transformations inside-out: resolve the input shift first, then apply the outside shift with its exact sign.",
  skills: ["function-transformation", "function-evaluation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An isosceles right triangle has an area of $72$ square centimeters. What is the length, in centimeters, of its hypotenuse?",
  choices: [
    // distractor: solves for the leg correctly but reports it instead of the hypotenuse
    { id: "A", text: "$12$" },
    { id: "B", text: "$12\\sqrt{2}$" },
    // distractor: multiplies the leg by 2 instead of by sqrt(2)
    { id: "C", text: "$24$" },
    // distractor: applies both the doubling and the sqrt(2) scaling
    { id: "D", text: "$24\\sqrt{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The two equal legs are the base and height, so area $= \\frac{1}{2}L^2 = 72 \\Rightarrow L^2 = 144 \\Rightarrow L = 12$. The hypotenuse is $L\\sqrt{2} = 12\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: A 45-45-90 triangle has two equal legs $L$ meeting at the right angle, so area $= \\frac{1}{2}L \\cdot L = \\frac{1}{2}L^2$.\nStep 2: Set equal to $72$: $\\frac{1}{2}L^2 = 72 \\Rightarrow L^2 = 144 \\Rightarrow L = 12$.\nStep 3: The hypotenuse of a 45-45-90 triangle is leg $\\times \\sqrt{2}$: $12\\sqrt{2}$ centimeters.\n\nVerification: $(12\\sqrt{2})^2 = 288$, and $12^2 + 12^2 = 144 + 144 = 288$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): finds the leg correctly but never scales up to the hypotenuse.\n* Choice C ($24$): multiplies the leg by $2$ instead of by $\\sqrt{2}$.\n* Choice D ($24\\sqrt{2}$): applies BOTH the doubling and the $\\sqrt{2}$ — one scaling too many.\n\n**Test Day Takeaway:** In a 45-45-90 triangle the legs are the base and height, so area $= \\frac{1}{2}L^2$. Solve for the leg, then multiply by exactly $\\sqrt{2}$ for the hypotenuse.",
  skills: ["triangles", "right-triangles", "special-right-triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "For the function $g$, $g(x) = 9x - 7$. What is the value of $g(6)$?",
  correctAnswer: "47",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $47$.**\n\n**The Fast Way (~10s):** Substitute $x = 6$: $g(6) = 9(6) - 7 = 54 - 7 = 47$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ in $g(x) = 9x - 7$ with $6$: $g(6) = 9(6) - 7$.\nStep 2: Multiply first, then subtract: $54 - 7 = 47$.\n\n**Common Mistakes:** Subtracting before multiplying, $9(6 - 7) = -9$, which breaks order of operations; dropping the $-7$ and reporting $54$.\n\n**Test Day Takeaway:** To evaluate a function, substitute the input for every $x$ and follow order of operations: multiply before you subtract.",
  skills: ["function-evaluation", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table gives values of the polynomial function $f$ at selected values of $x$. The function $g$ is defined by $g(x) = f(x) - 5$. For which of the following values of $x$ is $g(x) = 0$?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["x", "f(x)"],
      rows: [["-4", "-5"], ["-2", "5"], ["0", "-3"], ["2", "0"], ["4", "10"]]
    }
  },
  choices: [
    // distractor: looks for f(x) = -5, flipping the shift's sign
    { id: "A", text: "$-4$" },
    { id: "B", text: "$-2$" },
    // distractor: picks the zero of f itself, forgetting the shift
    { id: "C", text: "$2$" },
    // distractor: solves g(x) = 5 (f = 10) instead of g(x) = 0
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $g(x) = 0$ means $f(x) - 5 = 0$, i.e. $f(x) = 5$. Scan the table: $f(-2) = 5$, so $x = -2$.\n\n**The Full Solution:**\nStep 1: Set the transformed function to zero: $g(x) = f(x) - 5 = 0 \\Rightarrow f(x) = 5$.\nStep 2: Search the table for an output of $5$: only the row $x = -2$ gives $f(x) = 5$.\nStep 3: Confirm: $g(-2) = f(-2) - 5 = 5 - 5 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): hunts for $f(x) = -5$, flipping the sign of the required output.\n* Choice C ($2$): picks the zero of $f$ itself — but $g(2) = 0 - 5 = -5$, not $0$.\n* Choice D ($4$): solves $g(x) = 5$ (where $f = 10$) instead of $g(x) = 0$.\n\n**Test Day Takeaway:** A vertical shift moves the zeros: $f(x) + k = 0$ happens where $f(x) = -k$. Convert the condition on $g$ into a condition on $f$ BEFORE reading the table.",
  skills: ["polynomial-functions", "function-transformation", "factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = -4x + c$, where $c$ is a constant, is tangent to the parabola $y = x^2 + 6x + 30$. What is the value of $c$?",
  choices: [
    // distractor: sign slip when isolating c from 4c = 20
    { id: "A", text: "$-5$" },
    { id: "B", text: "$5$" },
    // distractor: reports the merged equation's linear coefficient
    { id: "C", text: "$10$" },
    // distractor: reports the parabola's constant term
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $x^2 + 6x + 30 = -4x + c \\Rightarrow x^2 + 10x + (30 - c) = 0$. Tangency means one solution, so the discriminant is $0$: $10^2 - 4(30 - c) = 0 \\Rightarrow 100 - 120 + 4c = 0 \\Rightarrow c = 5$.\n\n**The Full Solution:**\nStep 1: A line is tangent to a parabola when they meet at exactly one point. Set them equal: $x^2 + 6x + 30 = -4x + c$, which rearranges to $x^2 + 10x + (30 - c) = 0$.\nStep 2: One solution means the discriminant is zero: $b^2 - 4ac = 100 - 4(1)(30 - c) = 100 - 120 + 4c = 0$.\nStep 3: Solve: $4c = 20$, so $c = 5$.\n\nVerification: with $c = 5$, $x^2 + 10x + 25 = (x + 5)^2 = 0$, a single root at $x = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): a sign slip solving $4c = 20$ (or reports the tangent point's $x$-coordinate).\n* Choice C ($10$): reports the linear coefficient of the merged equation.\n* Choice D ($30$): reports the parabola's constant term instead of solving.\n\n**Test Day Takeaway:** Tangent $\\Rightarrow$ exactly one intersection $\\Rightarrow$ merge the equations and force the discriminant to zero — then solve for the actual unknown.",
  skills: ["quadratic-equations", "discriminant", "tangent-lines"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The side length of square $A$ is $6$ times the side length of square $B$. The combined area of the two squares is $740$ square centimeters. What is the area, in square centimeters, of square $A$?",
  correctAnswer: "720",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $720$.**\n\n**The Fast Way (~30s):** A side ratio of $6:1$ means an area ratio of $6^2 : 1 = 36 : 1$. Square $A$ takes $\\frac{36}{37}$ of the total: $\\frac{36}{37} \\times 740 = 720$.\n\n**The Full Solution:**\nStep 1: Let square $B$ have side $s$, so square $A$ has side $6s$. Areas: $s^2$ and $(6s)^2 = 36s^2$.\nStep 2: The combined area is $36s^2 + s^2 = 37s^2 = 740$, so $s^2 = 20$.\nStep 3: Area of square $A$ $= 36s^2 = 36 \\times 20 = 720$ square centimeters.\n\nVerification: square $B$ has area $20$, and $720 + 20 = 740$. $\\checkmark$\n\n**Common Mistakes:** Splitting $740$ in the side ratio $6:1$ (giving $\\frac{6}{7} \\times 740 \\approx 634.3$) instead of the area ratio $36:1$; solving for square $B$'s area ($20$) and stopping there.\n\n**Test Day Takeaway:** Lengths scale by $k$; areas scale by $k^2$. Square the side ratio BEFORE splitting a combined area.",
  skills: ["geometry", "ratios", "area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane has its vertex at $(-3, 8)$ and passes through the point $(-1, -4)$. What is the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$-40$" },
    // distractor: reports the constant term c alone
    { id: "B", text: "$-19$" },
    // distractor: reports the leading coefficient a alone
    { id: "C", text: "$-3$" },
    // distractor: adds the vertex coordinates h + k instead
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $a + b + c = f(1)$. Vertex form $f(x) = a(x + 3)^2 + 8$ with $f(-1) = -4$ gives $4a + 8 = -4$, so $a = -3$. Then $f(1) = -3(1 + 3)^2 + 8 = -48 + 8 = -40$.\n\n**The Full Solution:**\nStep 1: Write vertex form: $f(x) = a(x + 3)^2 + 8$.\nStep 2: Use the point $(-1, -4)$: $-4 = a(-1 + 3)^2 + 8 = 4a + 8$, so $4a = -12$ and $a = -3$.\nStep 3: Either expand $f(x) = -3(x + 3)^2 + 8 = -3x^2 - 18x - 19$ to read $a = -3$, $b = -18$, $c = -19$ for $a + b + c = -40$, or use the shortcut $a + b + c = f(1) = -3(16) + 8 = -40$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-19$): reports the constant term $c$ alone.\n* Choice C ($-3$): reports the leading coefficient $a$ alone.\n* Choice D ($5$): adds the vertex coordinates $-3 + 8$ — vertex form pieces, not standard-form coefficients.\n\n**Test Day Takeaway:** $a + b + c = f(1)$. Build $f$ from vertex form, pin down $a$ with the second point, then evaluate at $x = 1$ instead of expanding everything.",
  skills: ["vertex-form", "function-interpretation", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest8;
