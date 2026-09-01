// Practice Test 3 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Diagram items: Q15 rightTriangle, Q19 dataTable, Q21 scatterplot, Q22 twoWayTable.

export const practiceTest3M2Easy = {
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
      question: "What is the solution to the equation $\\dfrac{x}{8} = 6$?",
      choices: [
        // distractor: applies the inverse operation — divides 6 by 8
        { id: "A", text: "$0.75$" },
        // distractor: subtracts 6 from 8 instead of multiplying
        { id: "B", text: "$2$" },
        // distractor: adds 8 and 6 instead of multiplying
        { id: "C", text: "$14$" },
        { id: "D", text: "$48$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~3s):** $x$ is divided by $8$, so multiply both sides by $8$: $x = 6 \\cdot 8 = 48$.\n\n**The Full Solution:**\nStep 1: In $\\dfrac{x}{8} = 6$, the variable is divided by $8$. Undo the division by multiplying both sides by $8$.\nStep 2: $x = 6 \\cdot 8 = 48$.\nStep 3: Check: $\\dfrac{48}{8} = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.75$): divided $6$ by $8$ — the wrong inverse operation.\n* Choice B ($2$): subtracted $6$ from $8$ instead of multiplying.\n* Choice C ($14$): added $8$ and $6$ instead of multiplying.\n\n**Test Day Takeaway:** To isolate a variable, apply the inverse operation to both sides. Division is undone by multiplication.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in centimeters, of a square with side length $9$ centimeters?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~3s):** Perimeter $= 4s = 4 \\cdot 9 = 36$ centimeters.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, so its perimeter is $4s$.\nStep 2: With $s = 9$: $P = 4 \\cdot 9 = 36$ centimeters.\n\n**Common Mistakes:** Computing the area instead, $9^2 = 81$; adding only two sides, $9 + 9 = 18$.\n\n**Test Day Takeaway:** Square perimeter is $4s$; square area is $s^2$. Read which one the question asks for.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $h(x) = x^2 + 3$, what is the value of $h(6)$?",
      choices: [
        // distractor: doubles instead of squaring — 2(6) + 3
        { id: "A", text: "$15$" },
        // distractor: squares but forgets to add the 3
        { id: "B", text: "$36$" },
        { id: "C", text: "$39$" },
        // distractor: adds first, then squares — (6 + 3)^2
        { id: "D", text: "$81$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 6$: $h(6) = 6^2 + 3 = 36 + 3 = 39$.\n\n**The Full Solution:**\nStep 1: $h(x) = x^2 + 3$ means square the input, then add $3$.\nStep 2: Square first: $6^2 = 36$.\nStep 3: Add: $36 + 3 = 39$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): doubled instead of squaring, $2(6) + 3 = 15$.\n* Choice B ($36$): squared correctly but never added the $3$.\n* Choice D ($81$): added before squaring, $(6 + 3)^2 = 81$ — the rule squares only $x$.\n\n**Test Day Takeaway:** $x^2$ means $x \\cdot x$, not $2x$. Apply the rule in the written order: square first, then add.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A landscaping blend contains ryegrass seed and clover seed in a ratio of $7$ to $2$ by weight. How many pounds of clover seed are in $45$ pounds of the blend?",
      choices: [
        // distractor: reports the clover ratio number directly
        { id: "A", text: "$2$" },
        { id: "B", text: "$10$" },
        // distractor: uses 2/7 of the total instead of 2/9
        { id: "C", text: "$12.9$" },
        // distractor: solves for the ryegrass weight instead of the clover
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Clover is $2$ parts out of $7 + 2 = 9$, so clover $= \\dfrac{2}{9} \\cdot 45 = 10$ pounds.\n\n**The Full Solution:**\nStep 1: Write the parts as $7k$ (ryegrass) and $2k$ (clover), keeping the $7 : 2$ ratio.\nStep 2: The total is $7k + 2k = 9k = 45$, so $k = 5$.\nStep 3: Clover $= 2k = 10$ pounds. Check: ryegrass $= 35$, and $10 + 35 = 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the ratio number instead of solving for the weight.\n* Choice C ($12.9$): uses $\\frac{2}{7}$ of the total instead of $\\frac{2}{9}$ — divides by one part, not the sum.\n* Choice D ($35$): solves for the ryegrass ($\\frac{7}{9} \\cdot 45$) instead of the clover.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction uses the SUM of the ratio numbers as its denominator.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the slope of the line with equation $y = 7 - 3x$?",
      choices: [
        // distractor: negates the constant term instead of reading the coefficient
        { id: "A", text: "$-7$" },
        { id: "B", text: "$-3$" },
        // distractor: drops the negative sign
        { id: "C", text: "$3$" },
        // distractor: reports the y-intercept
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Rewrite as $y = -3x + 7$. The slope is the coefficient of $x$: $-3$.\n\n**The Full Solution:**\nStep 1: The equation $y = 7 - 3x$ is slope-intercept form with the terms in reversed order: $y = -3x + 7$.\nStep 2: Read off $m = -3$ (the coefficient of $x$, sign included) and $b = 7$ (the $y$-intercept).\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): negates the constant term instead of reading the $x$-coefficient.\n* Choice C ($3$): drops the negative sign — the term is $-3x$.\n* Choice D ($7$): reports the $y$-intercept instead of the slope.\n\n**Test Day Takeaway:** The slope is whatever multiplies $x$, sign included — even when the equation lists the constant first.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the $xy$-plane, what is the distance between the points $(2, -1)$ and $(14, 34)$?",
      correctAnswer: "37",
      explanation: "**SAT Pattern: Distance Between Two Points**\n\n**The correct answer is $37$.**\n\n**The Fast Way (~15s):** The horizontal change is $14 - 2 = 12$ and the vertical change is $34 - (-1) = 35$. Legs $12$ and $35$ give the $12$-$35$-$37$ triple, so the distance is $37$.\n\n**The Full Solution:**\nStep 1: Distance is the hypotenuse of a right triangle whose legs are the coordinate changes: $\\Delta x = 14 - 2 = 12$ and $\\Delta y = 34 - (-1) = 35$.\nStep 2: Apply the Pythagorean theorem: $d^2 = 12^2 + 35^2 = 144 + 1{,}225 = 1{,}369$.\nStep 3: $d = \\sqrt{1{,}369} = 37$.\n\n**Common Mistakes:** Computing $\\Delta y$ as $34 - 1 = 33$ by dropping the negative sign of $-1$; adding the changes without squaring ($12 + 35 = 47$); forgetting the square root and reporting $1{,}369$.\n\n**Test Day Takeaway:** Distance between points $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ — and subtracting a negative coordinate ADDS to the change.",
      skills: ["pythagorean-theorem", "distance-formula"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of the $6$ numbers in a list is $21$. When a seventh number is added to the list, the mean of the $7$ numbers is $24$. What is the seventh number?",
      choices: [
        // distractor: takes the difference of the two means
        { id: "A", text: "$3$" },
        // distractor: assumes the added number equals the new mean
        { id: "B", text: "$24$" },
        // distractor: adds the mean difference to the new mean (24 + 3)
        { id: "C", text: "$27$" },
        { id: "D", text: "$42$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Work with totals: the new total is $7 \\cdot 24 = 168$ and the old total is $6 \\cdot 21 = 126$. The added number is $168 - 126 = 42$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total sum. Before: $6 \\cdot 21 = 126$. After: $7 \\cdot 24 = 168$.\nStep 2: The seventh number is whatever the total gained: $168 - 126 = 42$.\nStep 3: Check: $\\dfrac{126 + 42}{7} = \\dfrac{168}{7} = 24$. $\\checkmark$\nIntuition: to pull the mean up by $3$, the new number must sit well ABOVE the new mean — $42$ is $18$ above $24$, covering the $3$-point raise for each of the $6$ original numbers.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): takes the difference of the two means — that is the shift per number, not the number added.\n* Choice B ($24$): adding the new mean itself would leave the mean below $24$, since the originals average only $21$.\n* Choice C ($27$): adds the mean difference to the new mean — a shortcut that skips the totals.\n\n**Test Day Takeaway:** Means hide totals. Convert every mean to a total (mean $\\times$ count); the added value is the difference of the totals.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 - 5x - 24 = 0$?",
      choices: [
        // distractor: flips the signs of both roots
        { id: "A", text: "$x = -8 \\text{ or } x = 3$" },
        // distractor: picks a factor pair of -24 that does not sum to -5
        { id: "B", text: "$x = -4 \\text{ or } x = 6$" },
        { id: "C", text: "$x = -3 \\text{ or } x = 8$" },
        // distractor: uses a factor pair of +24, ignoring the sign of the constant
        { id: "D", text: "$x = 3 \\text{ or } x = 8$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Find two numbers with product $-24$ and sum $-5$: those are $-8$ and $3$. So $(x - 8)(x + 3) = 0$, giving $x = 8$ or $x = -3$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + bx + c$, find two numbers whose product is $c = -24$ and whose sum is $b = -5$. Testing pairs: $-8 \\cdot 3 = -24$ and $-8 + 3 = -5$. $\\checkmark$\nStep 2: $x^2 - 5x - 24 = (x - 8)(x + 3) = 0$.\nStep 3: Set each factor to $0$: $x = 8$ or $x = -3$.\nStep 4: Check: $8^2 - 5(8) - 24 = 64 - 40 - 24 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -8$ or $x = 3$): flips both signs — those are the factor constants, not the roots.\n* Choice B ($x = -4$ or $x = 6$): a factor pair of $-24$ whose sum is $+2$, not $-5$.\n* Choice D ($x = 3$ or $x = 8$): factors $+24$ instead of $-24$, ignoring the constant's sign.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, the two numbers must hit BOTH targets — product $c$ AND sum $b$ — and each root is the opposite of its factor constant.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The price of a monthly gym membership decreased from $\\$140$ to $\\$112$. What is the percent decrease in price?",
      correctAnswer: "20",
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** Drop is $140 - 112 = 28$; over the original $140$ that is $\\dfrac{28}{140} = 20\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nStep 2: With old $= 140$, new $= 112$: $\\dfrac{140 - 112}{140} \\times 100 = \\dfrac{28}{140} \\times 100$.\nStep 3: $0.20 \\times 100 = 20\\%$.\n\n**Common Mistakes:** Dividing by the new price, $\\frac{28}{112} = 25\\%$; reporting the dollar drop $28$ instead of the percent.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through the points $(6, -5)$ and $(-2, 11)$?",
      choices: [
        { id: "A", text: "$-2$" },
        // distractor: flips the formula, using run over rise
        { id: "B", text: "$-\\dfrac{1}{2}$" },
        // distractor: flips the formula and drops the sign
        { id: "C", text: "$\\dfrac{1}{2}$" },
        // distractor: drops the negative sign
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{11 - (-5)}{-2 - 6} = \\dfrac{16}{-8} = -2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (6, -5)$ and $(x_2, y_2) = (-2, 11)$.\nStep 2: Numerator: $11 - (-5) = 16$. Denominator: $-2 - 6 = -8$.\nStep 3: $m = \\dfrac{16}{-8} = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{2}$): flips the formula, computing $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($\\frac{1}{2}$): both flips the formula and drops the sign.\n* Choice D ($2$): drops the negative sign from the denominator's $-8$.\n\n**Test Day Takeaway:** Slope is rise over run, $\\dfrac{y_2 - y_1}{x_2 - x_1}$ — subtract in the same order top and bottom, and keep every sign.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A box contains $12$ tokens, each labeled with a different integer from $1$ through $12$. If one token is drawn at random, what is the probability that its number is a multiple of $4$?",
      choices: [
        // distractor: counts only one favorable outcome
        { id: "A", text: "$\\dfrac{1}{12}$" },
        // distractor: counts 4 and 8 but forgets 12
        { id: "B", text: "$\\dfrac{1}{6}$" },
        { id: "C", text: "$\\dfrac{1}{4}$" },
        // distractor: counts the four multiples of 3 instead
        { id: "D", text: "$\\dfrac{1}{3}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Basic Probability with Constraint**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiples of $4$ from $1$ to $12$: $4, 8, 12$ — three of the twelve tokens, so $P = \\dfrac{3}{12} = \\dfrac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\dfrac{\\text{favorable}}{\\text{total}}$.\nStep 2: List the favorable outcomes: $4, 8, 12$ — a count of $3$.\nStep 3: Total tokens $= 12$, so $P = \\dfrac{3}{12} = \\dfrac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{12}$): counts only one favorable token instead of all three.\n* Choice B ($\\frac{1}{6}$): counts $4$ and $8$ but misses $12$.\n* Choice D ($\\frac{1}{3}$): counts the FOUR multiples of $3$ ($3, 6, 9, 12$) — the wrong constraint.\n\n**Test Day Takeaway:** List the favorable outcomes explicitly before dividing — endpoint values like $12$ are the easiest to miss.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a cube is $343$ cubic inches. What is the side length of the cube, in inches?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Volume of a Cube — Reverse**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** $V = s^3$, so $s = \\sqrt[3]{343} = 7$.\n\n**The Full Solution:**\nStep 1: A cube's volume is $V = s^3$, so $s^3 = 343$.\nStep 2: Take the cube root: $s = \\sqrt[3]{343} = 7$.\nStep 3: Check: $7^3 = 343$. $\\checkmark$\n\n**Common Mistakes:** Taking a square root, $\\sqrt{343} \\approx 18.5$ (that undoes an area, not a volume); dividing by $3$, $\\frac{343}{3} \\approx 114.3$.\n\n**Test Day Takeaway:** Cube volume is $s^3$. To recover the side from the volume, take the CUBE root, not the square root.",
      skills: ["volume-cube", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The solution to the system of equations $x + y = 16$ and $x - y = 6$ is $(x, y)$. What is the value of $x$?",
      choices: [
        // distractor: reports the value of y instead of x
        { id: "A", text: "$5$" },
        // distractor: subtracts the right-hand sides (16 - 6)
        { id: "B", text: "$10$" },
        { id: "C", text: "$11$" },
        // distractor: stops at 2x = 22 without dividing
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$ terms are $+y$ and $-y$, so add the equations: $2x = 22 \\Rightarrow x = 11$.\n\n**The Full Solution:**\nStep 1: Add the equations to cancel $y$: $(x + y) + (x - y) = 16 + 6 \\Rightarrow 2x = 22 \\Rightarrow x = 11$.\nStep 2: Back-substitute if desired: $11 + y = 16 \\Rightarrow y = 5$.\nStep 3: Check the second equation: $11 - 5 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports $y$ instead of the requested $x$.\n* Choice B ($10$): subtracts the right-hand sides, $16 - 6$, which computes $2y$, not $x$.\n* Choice D ($22$): stops at $2x = 22$ without dividing by $2$.\n\n**Test Day Takeaway:** A sum equation plus a difference equation eliminates one variable instantly — then finish the division and answer the variable the question names.",
      skills: ["elimination-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A researcher counts $500$ mussels in a river colony. The colony's population doubles in size every $4$ years. Which expression gives the number of mussels in the colony after $t$ years?",
      choices: [
        // distractor: swaps the initial value and the growth factor
        { id: "A", text: "$2(500)^{\\frac{t}{4}}$" },
        { id: "B", text: "$500(2)^{\\frac{t}{4}}$" },
        // distractor: inverts the period, doubling 4 times per year
        { id: "C", text: "$500(2)^{4t}$" },
        // distractor: uses the 4-year period as the growth factor
        { id: "D", text: "$500(4)^{\\frac{t}{2}}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model with Period**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Doubling means multiply by $2$ once per $4$-year period, and $t$ years is $\\frac{t}{4}$ periods: $500(2)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: An exponential model with a period has the form $P(t) = P_0 \\cdot r^{\\frac{t}{d}}$: initial value $P_0$, per-period factor $r$, period length $d$.\nStep 2: Here $P_0 = 500$, $r = 2$ (doubling), $d = 4$ years, so $P(t) = 500(2)^{\\frac{t}{4}}$.\nStep 3: Check: $t = 0 \\Rightarrow 500$; $t = 4 \\Rightarrow 1{,}000$; $t = 8 \\Rightarrow 2{,}000$. Doubling every $4$ years. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the roles of $500$ and $2$ — the initial value belongs out front, the growth factor in the base.\n* Choice C: puts $4t$ in the exponent, which doubles the colony four times EVERY year.\n* Choice D: uses the period $4$ as the growth factor instead of the doubling factor $2$.\n\n**Test Day Takeaway:** \"Doubles every $d$ years\" means multiply by $2^{\\frac{t}{d}}$ — the factor is the base, and the exponent counts how many periods have passed.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In right triangle $ABC$ shown, angle $B$ is the right angle. What is the value of $\\tan A$?",
      diagram: {
        type: "rightTriangle",
        params: {
          labels: ["A", "B", "C"],
          sideLabels: ["20", "21", "29"],
          rightAngleVertex: 1
        }
      },
      choices: [
        // distractor: adjacent over hypotenuse — that is cos A
        { id: "A", text: "$\\dfrac{20}{29}$" },
        // distractor: opposite over hypotenuse — that is sin A
        { id: "B", text: "$\\dfrac{21}{29}$" },
        // distractor: adjacent over opposite, the inverted tangent
        { id: "C", text: "$\\dfrac{20}{21}$" },
        { id: "D", text: "$\\dfrac{21}{20}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: SOH-CAH-TOA from Labeled Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** From angle $A$, the opposite leg is $BC = 21$ and the adjacent leg is $AB = 20$. Tangent is opposite over adjacent: $\\tan A = \\dfrac{21}{20}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is opposite the right angle at $B$: that is $AC = 29$.\nStep 2: Relative to angle $A$: the leg NOT touching $A$ is $BC = 21$ (opposite); the leg touching $A$ is $AB = 20$ (adjacent).\nStep 3: $\\tan A = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{21}{20}$.\n\nCheck: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$, so the figure is consistent. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{20}{29}$): adjacent over hypotenuse — that is $\\cos A$.\n* Choice B ($\\frac{21}{29}$): opposite over hypotenuse — that is $\\sin A$.\n* Choice C ($\\frac{20}{21}$): adjacent over opposite — the tangent flipped upside down.\n\n**Test Day Takeaway:** Tangent never touches the hypotenuse: it is the opposite leg over the adjacent leg, both named relative to the angle in the question.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A bottling line fills $480$ bottles every $5$ minutes. At this rate, how many bottles does the line fill in $8$ minutes?",
      correctAnswer: "768",
      explanation: "**SAT Pattern: Unit Rate / Direct Proportion**\n\n**The correct answer is $768$.**\n\n**The Fast Way (~10s):** Rate $= \\frac{480}{5} = 96$ bottles per minute, so in $8$ minutes the line fills $96 \\cdot 8 = 768$.\n\n**The Full Solution:**\nStep 1: Find the unit rate: $\\frac{480 \\text{ bottles}}{5 \\text{ min}} = 96$ bottles per minute.\nStep 2: Multiply by the new time: $96 \\cdot 8 = 768$ bottles.\nStep 3 (alternative): Set up a proportion $\\frac{480}{5} = \\frac{b}{8}$, so $b = \\frac{480 \\cdot 8}{5} = 768$.\n\n**Common Mistakes:** Multiplying by the time difference ($480 \\cdot 3$ from $8 - 5 = 3$); adding instead of scaling ($480 + 3 = 483$); inverting the rate and dividing $480$ by $8$.\n\n**Test Day Takeaway:** For rate problems, reduce to a per-unit rate first, then multiply by the new quantity.",
      skills: ["unit-rate", "proportions"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $7(2x - 3) - 8x = 6x + 4$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Zero" },
        // distractor: assumes a linear equation always has one solution
        { id: "B", text: "Exactly one" },
        // distractor: treats it like a quadratic with two roots
        { id: "C", text: "Exactly two" },
        // distractor: confuses a contradiction with an identity
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $14x - 21 - 8x = 6x - 21$. The equation becomes $6x - 21 = 6x + 4$ — same $x$-term, different constants — so no value of $x$ works.\n\n**The Full Solution:**\nStep 1: Distribute and combine: $7(2x - 3) - 8x = 14x - 21 - 8x = 6x - 21$.\nStep 2: The equation is now $6x - 21 = 6x + 4$.\nStep 3: Subtract $6x$ from both sides: $-21 = 4$, which is false. No value of $x$ can fix it, so the equation has zero solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes a generic linear equation always has exactly one solution — true only when the $x$-coefficients differ.\n* Choice C: expects two roots, but nothing here is quadratic.\n* Choice D: confuses a contradiction ($-21 = 4$) with an identity (which would end in a TRUE statement like $-21 = -21$).\n\n**Test Day Takeaway:** Simplify both sides fully. Matching $x$-terms with DIFFERENT constants means zero solutions; matching everything means infinitely many; different $x$-terms mean exactly one.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The area of a circle is $121\\pi$ square centimeters. What is the radius of the circle, in centimeters?",
      correctAnswer: "11",
      explanation: "**SAT Pattern: Reverse Area of a Circle**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~5s):** $\\pi r^2 = 121\\pi \\Rightarrow r^2 = 121 \\Rightarrow r = 11$.\n\n**The Full Solution:**\nStep 1: Use the area formula $A = \\pi r^2$ and set it equal to $121\\pi$: $\\pi r^2 = 121\\pi$.\nStep 2: Divide both sides by $\\pi$: $r^2 = 121$.\nStep 3: Take the positive square root (a radius is positive): $r = 11$. Check: $\\pi (11)^2 = 121\\pi$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $r^2 = 121$ and reporting $121$; halving instead of rooting ($\\frac{121}{2}$); giving the diameter $22$ instead of the radius.\n\n**Test Day Takeaway:** To go from area back to radius, divide by $\\pi$, then take the square root.",
      skills: ["area-circle", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The table gives selected values of the function $g$. What is the value of $g(g(1))$?",
      diagram: {
        type: "dataTable",
        params: {
          headers: ["x", "g(x)"],
          rows: [["1", "3"], ["2", "4"], ["3", "1"], ["4", "2"]]
        }
      },
      choices: [
        { id: "A", text: "$1$" },
        // distractor: reads g(4) after mistakenly starting from the wrong row
        { id: "B", text: "$2$" },
        // distractor: stops at the inner evaluation g(1)
        { id: "C", text: "$3$" },
        // distractor: reads g(2) instead of feeding g(1) = 3 back in
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Composed Function Evaluation from a Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Work inside out. The table gives $g(1) = 3$, so $g(g(1)) = g(3) = 1$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function first: from the table, $g(1) = 3$.\nStep 2: The expression becomes $g(3)$.\nStep 3: Read the table again: $g(3) = 1$. So $g(g(1)) = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reads $g(4)$ — the result of starting from the wrong row.\n* Choice C ($3$): stops after the inner step, reporting $g(1)$ itself.\n* Choice D ($4$): feeds the INPUT $2$ in ($g(2) = 4$) instead of the output $g(1) = 3$.\n\n**Test Day Takeaway:** For nested function values, evaluate from the inside out: find the inner output first, then use it as the new input — two separate trips to the table.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The line $m$ has equation $y = -3x + 5$. Which of the following is an equation of a line that is perpendicular to line $m$ and passes through the point $(6, 1)$?",
      choices: [
        // distractor: uses the parallel slope through the point
        { id: "A", text: "$y = -3x + 19$" },
        { id: "B", text: "$y = \\dfrac{1}{3}x - 1$" },
        // distractor: right slope, but keeps the wrong intercept (misses the point)
        { id: "C", text: "$y = \\dfrac{1}{3}x + 1$" },
        // distractor: flips the fraction without changing the sign
        { id: "D", text: "$y = 3x - 17$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The perpendicular slope is the negative reciprocal of $-3$: $\\frac{1}{3}$. Force the line through $(6, 1)$: $1 = \\frac{1}{3}(6) + b = 2 + b \\Rightarrow b = -1$. So $y = \\frac{1}{3}x - 1$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes multiply to $-1$: the negative reciprocal of $-3$ is $\\frac{1}{3}$.\nStep 2: Substitute the point $(6, 1)$ into $y = \\frac{1}{3}x + b$: $1 = 2 + b \\Rightarrow b = -1$.\nStep 3: The line is $y = \\frac{1}{3}x - 1$. Check: slope product $-3 \\cdot \\frac{1}{3} = -1$ $\\checkmark$; at $x = 6$, $y = 2 - 1 = 1$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: passes through $(6, 1)$ but uses the PARALLEL slope $-3$.\n* Choice C: has the right slope but the wrong intercept — at $x = 6$ it gives $y = 3$, missing the point.\n* Choice D: flips the fraction without changing the sign; $3 \\cdot (-3) = -9 \\ne -1$.\n\n**Test Day Takeaway:** Perpendicular slope = flip AND negate. Then verify the candidate line by plugging the given point in — both conditions must hold.",
      skills: ["perpendicular-line-slope", "writing-perpendicular-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows the number of hours $x$ each of $9$ members of a rowing club trained last week and the distance $y$, in kilometers, each member rowed. Based on the line of best fit shown, what is the predicted distance, in kilometers, for a member who trains $12$ hours?",
      diagram: { type: "scatterplot", params: {
        points: [[2, 26], [3, 28], [4, 37], [5, 42], [6, 43], [7, 52], [8, 53], [9, 62], [10, 64]],
        xMin: 0, xMax: 14, yMin: 0, yMax: 90,
        xGridStep: 1, xLabelStep: 2, yGridStep: 5, yLabelStep: 15,
        bestFitLine: { slope: 5, intercept: 15 },
        xLabel: "Training time (hours)", yLabel: "Distance rowed (km)"
      } },
      correctAnswer: "75",
      explanation: "**SAT Pattern: Predicting from a Line of Best Fit**\n\n**The correct answer is $75$.**\n\n**The Fast Way (~20s):** The line crosses the $y$-axis at $15$ and rises $5$ km per hour of training (e.g. from $(0, 15)$ to $(2, 25)$). At $x = 12$: $15 + 5(12) = 75$.\n\n**The Full Solution:**\nStep 1: Read two lattice points off the line of best fit: it passes through $(0, 15)$ and $(2, 25)$, so the slope is $\\frac{25 - 15}{2 - 0} = 5$.\nStep 2: The line is $\\hat{y} = 5x + 15$.\nStep 3: Predict at $x = 12$: $\\hat{y} = 5(12) + 15 = 60 + 15 = 75$ kilometers.\n\n**Common Mistakes:** Stopping at $5 \\cdot 12 = 60$ and forgetting the intercept; predicting from the nearest data point ($(10, 64)$) instead of extending the LINE; misreading the slope from two data dots rather than from the fitted line.\n\n**Test Day Takeaway:** Predictions come from the line of best fit, not the dots. Anchor the line with two lattice points, build $\\hat{y} = mx + b$, then substitute.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the results of the $200$ water samples a laboratory tested, by source and result. If one sample that failed the test is selected at random, what is the probability that it came from a well?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Passed", "Failed", "Total"],
          rows: [
            ["Well", "62", "18", "80"],
            ["Surface", "93", "27", "120"],
            ["Total", "155", "45", "200"]
          ]
        }
      },
      choices: [
        // distractor: divides the well failures by all 200 samples (wrong base)
        { id: "A", text: "$\\dfrac{18}{200}$" },
        // distractor: divides by the well total — that is P(failed | well), the reverse condition
        { id: "B", text: "$\\dfrac{18}{80}$" },
        { id: "C", text: "$\\dfrac{18}{45}$" },
        // distractor: gives the probability the failed sample came from surface water (the complement)
        { id: "D", text: "$\\dfrac{27}{45}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"A sample that failed\" restricts the draw to the Failed column, total $45$. Well failures are $18$, so $P = \\frac{18}{45}$.\n\n**The Full Solution:**\nStep 1: The condition \"that failed the test\" fixes the denominator to the failed-column total: $18 + 27 = 45$.\nStep 2: The favorable outcomes are failed samples from a well: $18$.\nStep 3: $P(\\text{well} \\mid \\text{failed}) = \\frac{18}{45}$, which reduces to $\\frac{2}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{18}{200}$): divides by all $200$ samples, ignoring the given condition.\n* Choice B ($\\frac{18}{80}$): divides by the well total — that answers the REVERSE question, $P(\\text{failed} \\mid \\text{well})$.\n* Choice D ($\\frac{27}{45}$): the probability the failed sample came from SURFACE water — the complement of what was asked.\n\n**Test Day Takeaway:** The condition after \"if\" or \"given\" sets the denominator. \"A sample that failed\" means work entirely inside the Failed column.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest3M2Easy;
