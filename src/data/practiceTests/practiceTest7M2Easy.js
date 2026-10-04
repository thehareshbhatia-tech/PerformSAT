// Practice Test 7 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): all content re-authored fresh
// against the CB register; slot metadata and pattern slugs frozen. Figure
// density lifted to 4 diagram items (linearGraph, rightTriangle, scatterplot,
// twoWayTable). Numeric MC choices sorted ascending.

export const practiceTest7M2Easy = {
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
      question: "The table shows the fixed fee and the cost per hour to rent a kayak from each of two shops. For what number of hours is the total rental cost the same at both shops?",
      questionTable: { headers: ["Shop", "Fixed fee", "Cost per hour"], rows: [["A", "$\\$12$", "$\\$8$"], ["B", "$\\$20$", "$\\$6$"]] },
      choices: [
        { id: "A", text: "$4$" },
        // distractor: subtracts the fixed fees, 20 - 12 = 8, but does not divide by the 2-dollar difference in hourly costs
        { id: "B", text: "$8$" },
        // distractor: adds the fixed fees instead of subtracting them, computing (12 + 20)/2 = 16
        { id: "C", text: "$16$" },
        // distractor: solves for 4 hours correctly but reports the equal total cost, 12 + 8(4) = 44 dollars, instead of the number of hours
        { id: "D", text: "$44$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Shop A costs $8h + 12$ dollars and Shop B costs $6h + 20$ dollars for $h$ hours. Setting them equal gives $2h = 8$, so $h = 4$.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of hours and $y$ the total cost, in dollars. From the table, Shop A gives $y = 8h + 12$ and Shop B gives $y = 6h + 20$.\nStep 2: Substitute the first expression for $y$ into the second equation: $8h + 12 = 6h + 20$.\nStep 3: Subtract $6h$ and $12$ from both sides: $2h = 8$, so $h = 4$. Check: Shop A costs $8(4) + 12 = 44$ dollars and Shop B costs $6(4) + 20 = 44$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): this is the difference in fixed fees, $20 - 12$. Shop A closes that gap by only $8 - 6 = 2$ dollars each hour, so $8$ must still be divided by $2$.\n* Choice C ($16$): this is $\\frac{12 + 20}{2}$, which adds the fixed fees. The fees end up on opposite sides of the equation, so their difference matters, not their sum.\n* Choice D ($44$): this is the equal total cost, in dollars, at $4$ hours. The question asks for the number of hours.\n\n**Test Day Takeaway:** When two costs each have a fixed part and a per-hour part, write one equation for each and set them equal. Then check which quantity is asked for: the input or the shared output.",
      skills: ["substitution-method"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "In the $xy$-plane, a triangle has vertices at $(3, 2)$, $(3, 11)$, and $(15, 2)$. What is the area, in square units, of the triangle?",
      correctAnswer: "54",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is 54.**\n\n**The Fast Way (~20s):** The side from $(3, 2)$ to $(3, 11)$ is vertical with length $9$, and the side from $(3, 2)$ to $(15, 2)$ is horizontal with length $12$, so the area is $\\frac{1}{2}(9)(12) = 54$.\n\n**The Full Solution:**\nStep 1: The points $(3, 2)$ and $(3, 11)$ share an $x$-coordinate, so that side is vertical with length $11 - 2 = 9$.\nStep 2: The points $(3, 2)$ and $(15, 2)$ share a $y$-coordinate, so that side is horizontal with length $15 - 3 = 12$. A vertical side and a horizontal side meet at a right angle, so these two sides are a base and a height.\nStep 3: Area $= \\frac{1}{2}(12)(9) = 54$. Check: $54 \\times 2 = 108 = 12 \\times 9$ ✓\n\n**Common Mistakes:**\n* $108$: multiplies base by height and forgets the factor of $\\frac{1}{2}$.\n* $21$: adds the two leg lengths, $9 + 12$, instead of using the area formula.\n* $67.5$: uses the longest side, $15$, as the base with height $9$, computing $\\frac{1}{2}(15)(9)$. The side of length $15$ is the hypotenuse, which is not perpendicular to the side of length $9$.\n\n**Test Day Takeaway:** When two vertices share an $x$-coordinate and two share a $y$-coordinate, the triangle has a right angle; read the leg lengths by subtracting coordinates, then take half their product.",
      skills: ["triangle-area"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$|2x - 3| = 13$\nWhat are the solutions to the given equation?",
      choices: [
        // distractor: solves 2x - 3 = 13 and 2x - 3 = -13 but stops at 2x = 16 and 2x = -10 without dividing by 2
        { id: "A", text: "$-10$ and $16$" },
        // distractor: solves |2x + 3| = 13 instead, changing the sign of the 3, which gives x = 5 and x = -8
        { id: "B", text: "$-8$ and $5$" },
        // distractor: solves 2x - 3 = -13 by subtracting 3 from both sides, getting 2x = -16 and x = -8
        { id: "C", text: "$-8$ and $8$" },
        { id: "D", text: "$-5$ and $8$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The expression inside the bars is $13$ or $-13$: $2x - 3 = 13$ gives $x = 8$, and $2x - 3 = -13$ gives $x = -5$.\n\n**The Full Solution:**\nStep 1: An absolute value equals $13$ when the expression inside equals $13$ or $-13$, so $2x - 3 = 13$ or $2x - 3 = -13$.\nStep 2: First case: $2x = 16$, so $x = 8$. Second case: $2x = -10$, so $x = -5$.\nStep 3: The solutions are $-5$ and $8$. Check: $|2(8) - 3| = |13| = 13$ and $|2(-5) - 3| = |-13| = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$ and $16$): stops at $2x = -10$ and $2x = 16$ without dividing by $2$.\n* Choice B ($-8$ and $5$): solves $|2x + 3| = 13$, with the sign of the $3$ changed. Testing $x = 5$: $|2(5) - 3| = 7$, not $13$.\n* Choice C ($-8$ and $8$): solves the second case by subtracting $3$ from both sides instead of adding $3$, getting $2x = -16$.\n\n**Test Day Takeaway:** Split an absolute value equation into the positive case and the negative case, solve each completely, and test both answers in the original equation.",
      skills: ["combining-like-terms"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The population of a town increased by $25\\%$ from $2010$ to $2020$. If the population of the town in $2020$ was $46{,}800$, what was the population of the town in $2010$?",
      choices: [
        // distractor: takes 25% off the 2020 population, computing 0.75(46,800) = 35,100, instead of dividing by 1.25
        { id: "A", text: "$35{,}100$" },
        { id: "B", text: "$37{,}440$" },
        // distractor: applies the 25% increase again, computing 1.25(46,800) = 58,500
        { id: "C", text: "$58{,}500$" },
        // distractor: divides by 0.75 instead of 1.25, computing 46,800/0.75 = 62,400
        { id: "D", text: "$62{,}400$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The $2020$ population is $1.25$ times the $2010$ population, so the $2010$ population is $\\frac{46{,}800}{1.25} = 37{,}440$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the population in $2010$. An increase of $25\\%$ means the $2020$ population is $p + 0.25p = 1.25p$.\nStep 2: Set this equal to the given value: $1.25p = 46{,}800$.\nStep 3: Divide: $p = \\frac{46{,}800}{1.25} = 37{,}440$. Check: $25\\%$ of $37{,}440$ is $9{,}360$, and $37{,}440 + 9{,}360 = 46{,}800$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($35{,}100$): subtracts $25\\%$ of the $2020$ population, computing $0.75(46{,}800)$. The $25\\%$ was taken of the smaller $2010$ population, so this undoes too much.\n* Choice C ($58{,}500$): applies the increase a second time, computing $1.25(46{,}800)$, which moves in the wrong direction.\n* Choice D ($62{,}400$): divides by $0.75$, which would undo a $25\\%$ decrease, not a $25\\%$ increase.\n\n**Test Day Takeaway:** To reverse a percent increase, divide by the multiplier $1 + r$; subtracting the same percent from the larger value never returns the original amount.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(-4, 3)$ and $(k, 11)$ is $(5, 7)$. What is the value of $k$?",
      choices: [
        // distractor: drops the sign of the -4, solving 2(5) - 4 = 6 instead of 2(5) - (-4)
        { id: "A", text: "$6$" },
        // distractor: forgets to double the midpoint coordinate, computing 5 - (-4) = 9
        { id: "B", text: "$9$" },
        // distractor: applies the midpoint relation to the y-coordinates, computing 2(7) - 3 = 11
        { id: "C", text: "$11$" },
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The midpoint's $x$-coordinate is the average of the endpoints' $x$-coordinates: $\\frac{-4 + k}{2} = 5$, so $k = 14$.\n\n**The Full Solution:**\nStep 1: The $x$-coordinate of a midpoint is the average of the endpoints' $x$-coordinates, so $\\frac{-4 + k}{2} = 5$.\nStep 2: Multiply both sides by $2$: $-4 + k = 10$.\nStep 3: Add $4$: $k = 14$. Check: $\\frac{-4 + 14}{2} = 5$, and the $y$-coordinate $\\frac{3 + 11}{2} = 7$ also matches ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): computes $2(5) - 4$, dropping the negative sign on $-4$.\n* Choice B ($9$): computes $5 - (-4)$, forgetting that the midpoint coordinate is half the sum, so it must be doubled first.\n* Choice C ($11$): works with the $y$-coordinates, computing $2(7) - 3 = 11$, which is the given $y$-coordinate of the second endpoint, not $k$.\n\n**Test Day Takeaway:** Midpoint coordinates are averages; to find a missing endpoint, double the midpoint coordinate and subtract the known endpoint coordinate.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "The perimeter of right triangle $ABC$ shown is $72$, and $\\sin A = \\frac{3}{5}$. What is the length of $\\overline{BC}$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [4, 0], [4, 3]], labels: ["A", "B", "C"], rightAngleVertex: 1, figureNote: true } },
      correctAnswer: "18",
      explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is 18.**\n\n**The Fast Way (~30s):** The sides are in the ratio $3 : 4 : 5$, so they are $3k$, $4k$, and $5k$ with $12k = 72$. Then $k = 6$ and $BC = 3k = 18$.\n\n**The Full Solution:**\nStep 1: In the figure, the right angle is at $B$, so $\\overline{AC}$ is the hypotenuse and $\\overline{BC}$ is the side opposite angle $A$. Then $\\sin A = \\frac{BC}{AC} = \\frac{3}{5}$.\nStep 2: Let $BC = 3k$ and $AC = 5k$. By the Pythagorean theorem, $AB = \\sqrt{(5k)^{2} - (3k)^{2}} = 4k$, so the perimeter is $3k + 4k + 5k = 12k$.\nStep 3: Set $12k = 72$, so $k = 6$ and $BC = 3(6) = 18$. Check: the sides are $18$, $24$, and $30$; $18 + 24 + 30 = 72$, and $\\frac{18}{30} = \\frac{3}{5}$ ✓\n\n**Common Mistakes:**\n* $24$: finds $AB$, the side adjacent to angle $A$, instead of the opposite side.\n* $30$: finds the hypotenuse $AC$.\n* $43.2$: multiplies the whole perimeter by $\\frac{3}{5}$, treating the perimeter as the hypotenuse.\n\n**Test Day Takeaway:** A trig ratio fixes the shape of a right triangle, not its size; write the sides as multiples of one unknown and let the perimeter set the scale.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The price of a lamp at a store increased from $\\$28.50$ to $\\$34.20$. The price of a candle at the store, originally $\\$6.00$, increased by the same percent. What is the new price of the candle?",
      choices: [
        // distractor: applies the 20% as a decrease: 6.00(0.80) = 4.80
        { id: "A", text: "$\\$4.80$" },
        // distractor: divides the \$5.70 increase by the new price 34.20 instead of the original 28.50, getting about 16.7% and 6.00(1.1667) = 7.00
        { id: "B", text: "$\\$7.00$" },
        { id: "C", text: "$\\$7.20$" },
        // distractor: adds the \$5.70 dollar increase to the candle price instead of applying the percent increase
        { id: "D", text: "$\\$11.70$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $34.20 \\div 28.50 = 1.20$, a $20\\%$ increase, so the candle's new price is $6.00(1.20) = \\$7.20$.\n\n**The Full Solution:**\nStep 1: The lamp's price rose by $34.20 - 28.50 = \\$5.70$. As a percent of the original price, that is $\\frac{5.70}{28.50} = 0.20$, or $20\\%$.\nStep 2: A $20\\%$ increase multiplies a price by $1.20$, so the candle's new price is $6.00(1.20)$.\nStep 3: $6.00(1.20) = \\$7.20$. Check: $20\\%$ of $\\$6.00$ is $\\$1.20$, and $6.00 + 1.20 = 7.20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$4.80$): applies the $20\\%$ as a decrease, computing $6.00(0.80)$.\n* Choice B ($\\$7.00$): divides the $\\$5.70$ increase by the new price $\\$34.20$ instead of the original $\\$28.50$, getting about $16.7\\%$, and $6.00(1.1\\overline{6}) = 7.00$.\n* Choice D ($\\$11.70$): adds the $\\$5.70$ dollar increase to the candle's price. Equal percent increases are not equal dollar increases.\n\n**Test Day Takeaway:** Percent change is measured against the original amount; turn it into a multiplier once, then apply that multiplier to the second price.",
      skills: ["percent-of-value", "percent-change"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$f(x) = 8{,}000(0.95)^{x}$\nThe function $f$ gives the estimated number of fish in a lake $x$ years after the start of a study. What is the best interpretation of $0.95$ in this context?",
      choices: [
        // distractor: reads the factor 0.95 as the rate of decrease instead of the fraction that remains
        { id: "A", text: "Each year, the estimated number of fish decreases by $95\\%$." },
        { id: "B", text: "Each year, the estimated number of fish decreases by $5\\%$." },
        // distractor: finds the 5% difference from 1 but treats a factor less than 1 as growth
        { id: "C", text: "Each year, the estimated number of fish increases by $5\\%$." },
        // distractor: treats the model as linear, reading 0.95 as an amount subtracted each year
        { id: "D", text: "Each year, the estimated number of fish decreases by $0.95$." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Each year the number of fish is multiplied by $0.95$, so $95\\%$ remains and the estimate decreases by $1 - 0.95 = 0.05$, or $5\\%$, each year.\n\n**The Full Solution:**\nStep 1: In a model of the form $a(b)^{x}$, the base $b$ is the factor the quantity is multiplied by each time $x$ increases by $1$.\nStep 2: Here $b = 0.95$. Multiplying by $0.95$ keeps $95\\%$ of the previous year's estimate, so the estimate falls by $100\\% - 95\\% = 5\\%$ each year.\nStep 3: So $0.95$ means the estimated number of fish decreases by $5\\%$ each year. Check: $f(0) = 8{,}000$ and $f(1) = 7{,}600$, and $7{,}600$ is $5\\%$ less than $8{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $0.95$ as the rate of decrease. A $95\\%$ decrease would leave only $5\\%$ of the fish each year, a factor of $0.05$.\n* Choice C: gets the $5\\%$ but the wrong direction. A factor less than $1$ makes the quantity smaller, so the model shows decay, not growth.\n* Choice D: treats the model as linear. An exponential model changes by a fixed percent each year, not by a fixed amount.\n\n**Test Day Takeaway:** In $a(b)^{x}$, a base below $1$ means a decrease of $(1 - b)$ as a percent; a base above $1$ means an increase of $(b - 1)$ as a percent.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the numbers of juniors and seniors at a high school who ride the bus or walk to school. A student who rides the bus will be selected at random. If the probability that this student is a senior is $0.4$, what is the value of $k$?",
      questionTable: { headers: ["", "Rides the bus", "Walks"], rows: [["Juniors", "$45$", "$60$"], ["Seniors", "$k$", "$72$"]] },
      correctAnswer: "30",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is 30.**\n\n**The Fast Way (~35s):** Among bus riders, the probability of a senior is $\\frac{k}{45 + k} = 0.4$, so $k = 0.4(45 + k)$, $0.6k = 18$, and $k = 30$.\n\n**The Full Solution:**\nStep 1: The selection is made only from students who ride the bus, so the total is the bus column: $45 + k$. The seniors in that column number $k$.\nStep 2: Set the probability equal to $0.4$: $\\frac{k}{45 + k} = 0.4$, so $k = 18 + 0.4k$.\nStep 3: Then $0.6k = 18$ and $k = 30$. Check: $\\frac{30}{45 + 30} = \\frac{30}{75} = 0.4$ ✓\n\n**Common Mistakes:**\n* $18$: solves $\\frac{k}{45} = 0.4$, using the number of junior bus riders as the total instead of all bus riders.\n* $118$: uses all students as the total, solving $\\frac{k}{45 + 60 + 72 + k} = 0.4$.\n* $48$: uses all seniors as the total, solving $\\frac{k}{k + 72} = 0.4$.\n\n**Test Day Takeaway:** In a conditional probability, the given condition picks the row or column you divide by; write that total in terms of the unknown before setting up the equation.",
      skills: ["conditional-probability", "two-way-table"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The total cost, in dollars, of $n$ notebooks is $4.5n + k$, where $k$ is a constant. If $60$ notebooks cost a total of $\\$312$, what is the total cost, in dollars, of $100$ notebooks?",
      choices: [
        // distractor: computes 4.5(100) and leaves out the constant k = 42
        { id: "A", text: "$450$" },
        { id: "B", text: "$492$" },
        // distractor: scales the \$312 total proportionally, 312(100/60) = 520, treating the cost as directly proportional to n
        { id: "C", text: "$520$" },
        // distractor: adds the constant k = 42 twice: 450 + 2(42) = 534
        { id: "D", text: "$534$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** From $4.5(60) + k = 312$, $k = 312 - 270 = 42$. Then $4.5(100) + 42 = 492$.\n\n**The Full Solution:**\nStep 1: Substitute $n = 60$ and a total of $312$: $4.5(60) + k = 312$, so $270 + k = 312$.\nStep 2: Solve for the constant: $k = 42$, so the total cost is $4.5n + 42$.\nStep 3: Substitute $n = 100$: $4.5(100) + 42 = 450 + 42 = 492$. Check: $4.5(60) + 42 = 270 + 42 = 312$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($450$): computes $4.5(100)$ and leaves out the constant $42$.\n* Choice C ($520$): scales $\\$312$ by $\\frac{100}{60}$, which would be correct only if the cost had no constant term.\n* Choice D ($534$): adds $42$ twice, computing $450 + 2(42)$.\n\n**Test Day Takeaway:** When an expression has an unknown constant, use the given pair of values to find the constant first, then evaluate at the new input.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the amount of energy, in kilowatt-hours, that a home's solar panels produced in each of three months. If $1$ kilowatt-hour is equal to $3.6$ megajoules, how many megajoules of energy did the solar panels produce in these three months?",
      questionTable: { headers: ["Month", "Energy produced (kilowatt-hours)"], rows: [["June", "$545$"], ["July", "$610$"], ["August", "$645$"]] },
      choices: [
        // distractor: divides the 1,800-kilowatt-hour total by 3.6 instead of multiplying
        { id: "A", text: "$500$" },
        // distractor: adds the three months but does not convert kilowatt-hours to megajoules
        { id: "B", text: "$1{,}800$" },
        // distractor: converts only the August value, 645(3.6) = 2,322, instead of the three-month total
        { id: "C", text: "$2{,}322$" },
        { id: "D", text: "$6{,}480$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The total is $545 + 610 + 645 = 1{,}800$ kilowatt-hours, and $1{,}800(3.6) = 6{,}480$ megajoules.\n\n**The Full Solution:**\nStep 1: Add the three monthly values: $545 + 610 + 645 = 1{,}800$ kilowatt-hours.\nStep 2: Each kilowatt-hour is $3.6$ megajoules, so multiply: $1{,}800 \\times 3.6$.\nStep 3: $1{,}800 \\times 3.6 = 6{,}480$ megajoules. Check: $\\frac{6{,}480}{3.6} = 1{,}800$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($500$): divides $1{,}800$ by $3.6$. A megajoule is the smaller unit, so the number of megajoules must be larger than the number of kilowatt-hours.\n* Choice B ($1{,}800$): is the total in kilowatt-hours; the conversion to megajoules is never made.\n* Choice C ($2{,}322$): converts only August, $645(3.6)$, instead of all three months.\n\n**Test Day Takeaway:** Converting to a smaller unit makes the number bigger; total first, then multiply by the conversion factor.",
      skills: ["unit-conversion"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The length of a rectangle is $2.5$ times its width. The area of the rectangle is $40$ square centimeters. What is the width, in centimeters, of the rectangle?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is 4.**\n\n**The Fast Way (~20s):** With width $w$, the area is $w(2.5w) = 2.5w^{2} = 40$, so $w^{2} = 16$ and $w = 4$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. The length is $2.5w$, so the area is $w \\cdot 2.5w = 2.5w^{2}$.\nStep 2: Set the area equal to $40$: $2.5w^{2} = 40$, so $w^{2} = 16$.\nStep 3: A width is positive, so $w = 4$ centimeters. Check: the length is $2.5(4) = 10$, and $4 \\times 10 = 40$ ✓\n\n**Common Mistakes:**\n* $16$: stops at $w^{2} = 16$ without taking the square root.\n* $10$: gives the length, $2.5(4)$, instead of the width.\n* $8$: divides $40$ by $2(2.5) = 5$, treating the area as $2.5w + 2.5w$ rather than $w \\cdot 2.5w$.\n\n**Test Day Takeaway:** Name the width, write the length in terms of it, and multiply; the area equation becomes a squared variable, so finish with a square root.",
      skills: ["triangle-area"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, line $k$ passes through the points $(4, 120)$ and $(16, 300)$. What is the slope of line $k$?",
      choices: [
        // distractor: divides the change in x by the change in y, 12/180 = 1/15
        { id: "A", text: "$\\frac{1}{15}$" },
        // distractor: adds the x-values instead of subtracting them, 180/(16 + 4) = 9
        { id: "B", text: "$9$" },
        { id: "C", text: "$15$" },
        // distractor: adds the y-values instead of subtracting them, (300 + 120)/12 = 35
        { id: "D", text: "$35$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The slope is the change in $y$ divided by the change in $x$: $\\frac{300 - 120}{16 - 4} = \\frac{180}{12} = 15$.\n\n**The Full Solution:**\nStep 1: Line $k$ contains $(4, 120)$ and $(16, 300)$. The change in $y$ is $300 - 120 = 180$.\nStep 2: The change in $x$, in the same order, is $16 - 4 = 12$.\nStep 3: The slope is $\\frac{180}{12} = 15$. Check: starting at $(4, 120)$ and moving $12$ units right at a slope of $15$ gives $120 + 15(12) = 300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{15}$): divides the change in $x$ by the change in $y$, which flips the slope.\n* Choice B ($9$): adds the $x$-values, $16 + 4 = 20$, instead of subtracting them.\n* Choice D ($35$): adds the $y$-values, $300 + 120 = 420$, instead of subtracting them.\n\n**Test Day Takeaway:** Slope is rise over run: subtract the $y$-coordinates and the $x$-coordinates in the same order, with the change in $y$ on top.",
      skills: ["slope-from-points"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Which expression is equivalent to $\\sqrt[4]{16x^{12}}$, where $x > 0$?",
      choices: [
        { id: "A", text: "$2x^{3}$" },
        // distractor: subtracts the index from the exponent, 12 - 4 = 8, instead of dividing 12 by 4
        { id: "B", text: "$2x^{8}$" },
        // distractor: takes the square root of 16 instead of its fourth root, giving 4 rather than 2
        { id: "C", text: "$4x^{3}$" },
        // distractor: applies the fourth root only to the variable and leaves the coefficient 16 unchanged
        { id: "D", text: "$16x^{3}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The fourth root of $16$ is $2$, and $\\sqrt[4]{x^{12}} = x^{12/4} = x^{3}$, so the expression is $2x^{3}$.\n\n**The Full Solution:**\nStep 1: A fourth root applies to each factor: $\\sqrt[4]{16x^{12}} = \\sqrt[4]{16} \\cdot \\sqrt[4]{x^{12}}$.\nStep 2: $\\sqrt[4]{16} = 2$ because $2^{4} = 16$, and $\\sqrt[4]{x^{12}} = x^{\\frac{12}{4}} = x^{3}$.\nStep 3: The product is $2x^{3}$. Check: $(2x^{3})^{4} = 2^{4}x^{12} = 16x^{12}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x^{8}$): subtracts $4$ from the exponent instead of dividing the exponent by $4$.\n* Choice C ($4x^{3}$): takes the square root of $16$ instead of the fourth root.\n* Choice D ($16x^{3}$): applies the root to $x^{12}$ but not to the coefficient $16$.\n\n**Test Day Takeaway:** An $n$th root divides every exponent by $n$ and takes the $n$th root of the coefficient; check by raising your answer to the $n$th power.",
      skills: ["exponent-rules", "radical-expressions"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$x^{2} - 10x + y^{2} + 6y = m$\nIn the $xy$-plane, the graph of the given equation is a circle with radius $8$. What is the value of $m$?",
      choices: [
        // distractor: uses the radius 8 where the radius squared belongs: 8 - 34 = -26
        { id: "A", text: "$-26$" },
        { id: "B", text: "$30$" },
        // distractor: completes the square on the x-terms only, adding 25 but forgetting the 9 from the y-terms: 64 - 25 = 39
        { id: "C", text: "$39$" },
        // distractor: adds 34 to 64 instead of subtracting it: 64 + 34 = 98
        { id: "D", text: "$98$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Completing the square adds $25$ and $9$ to both sides: $(x - 5)^{2} + (y + 3)^{2} = m + 34$. The radius squared is $64$, so $m = 64 - 34 = 30$.\n\n**The Full Solution:**\nStep 1: Complete the square on each variable: $x^{2} - 10x$ needs $25$ and $y^{2} + 6y$ needs $9$. Add both to each side.\nStep 2: The equation becomes $(x - 5)^{2} + (y + 3)^{2} = m + 34$, so $m + 34$ is the radius squared.\nStep 3: The radius is $8$, so $m + 34 = 64$ and $m = 30$. Check: $(x - 5)^{2} + (y + 3)^{2} = 30 + 34 = 64 = 8^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26$): sets $m + 34$ equal to the radius $8$ instead of the radius squared $64$.\n* Choice C ($39$): adds $25$ for the $x$-terms but forgets the $9$ for the $y$-terms.\n* Choice D ($98$): adds $34$ to $64$ instead of subtracting it.\n\n**Test Day Takeaway:** After completing the square, the number on the right side is $r^{2}$, not $r$; every constant added on the left must also be added on the right.",
      skills: ["circle-equation", "completing-square-circles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of books returned late to a library on each of $7$ days. If the value $52$ is removed from the data, by how much does the mean of the data decrease?",
      questionTable: { headers: ["Day", "Books returned late"], rows: [["1", "$2$"], ["2", "$4$"], ["3", "$52$"], ["4", "$3$"], ["5", "$5$"], ["6", "$1$"], ["7", "$3$"]] },
      correctAnswer: "7",
      explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is 7.**\n\n**The Fast Way (~35s):** The $7$ values sum to $70$, so the mean is $10$. Without $52$, the $6$ values sum to $18$, so the mean is $3$. The mean decreases by $10 - 3 = 7$.\n\n**The Full Solution:**\nStep 1: Add all $7$ values: $2 + 4 + 52 + 3 + 5 + 1 + 3 = 70$, so the mean is $\\frac{70}{7} = 10$.\nStep 2: Remove $52$: the remaining $6$ values sum to $70 - 52 = 18$, so the new mean is $\\frac{18}{6} = 3$.\nStep 3: The decrease is $10 - 3 = 7$. Check: $3 \\times 6 = 18$ and $18 + 52 = 70 = 10 \\times 7$ ✓\n\n**Common Mistakes:**\n* $3$: gives the new mean instead of the amount the mean decreased.\n* $10$: gives the original mean.\n* $0$: finds the change in the median, which is $3$ both before and after $52$ is removed, instead of the change in the mean.\n\n**Test Day Takeaway:** Removing an outlier moves the mean a lot and the median very little; compute both means and subtract, and answer exactly what is asked.",
      skills: ["calculate-mean", "find-median"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$ax + 8y = b$\nIn the given equation, $a$ and $b$ are constants. In the $xy$-plane, the graph of the equation is parallel to the graph of $3x - 2y = 7$ and passes through the point $(4, -1)$. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-56$" },
        // distractor: finds a = -12 but drops the 8y term when substituting, computing b = -12(4) = -48
        { id: "B", text: "$-48$" },
        // distractor: takes a = 12 by losing the sign of the slope, then computes 12(4) + 8(-1) = 40
        { id: "C", text: "$40$" },
        // distractor: finds a = -12 but swaps the coordinates, substituting x = -1 and y = 4: -12(-1) + 8(4) = 44
        { id: "D", text: "$44$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Parallel lines have proportional $x$- and $y$-coefficients: $\\frac{a}{3} = \\frac{8}{-2}$, so $a = -12$. Then $b = -12(4) + 8(-1) = -56$.\n\n**The Full Solution:**\nStep 1: The line $3x - 2y = 7$ has slope $\\frac{3}{2}$, and $ax + 8y = b$ has slope $-\\frac{a}{8}$. Parallel lines have equal slopes, so $-\\frac{a}{8} = \\frac{3}{2}$ and $a = -12$.\nStep 2: The point $(4, -1)$ is on the line, so substitute $x = 4$ and $y = -1$ into $-12x + 8y = b$: $b = -12(4) + 8(-1)$.\nStep 3: $b = -48 - 8 = -56$. Check: $-12x + 8y = -56$ is $-4$ times $3x - 2y = 14$, which has the same slope as $3x - 2y = 7$ but a different constant, so the lines are parallel and distinct, and $-12(4) + 8(-1) = -56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-48$): finds $a = -12$ but leaves out the $8y$ term, computing only $-12(4)$.\n* Choice C ($40$): loses the negative sign and uses $a = 12$, which gives a line with slope $-\\frac{3}{2}$, not parallel to the given line.\n* Choice D ($44$): swaps the coordinates, substituting $x = -1$ and $y = 4$.\n\n**Test Day Takeaway:** For lines in standard form, parallel means the $x$- and $y$-coefficients are in the same ratio; find the missing coefficient first, then use the point to find the constant.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "Two lines intersect at a point. Angles $P$ and $Q$ are vertical angles formed by the lines, with measures $(2t)^{\\circ}$ and $(5t - 63)^{\\circ}$, respectively. What is the measure, in degrees, of an angle adjacent to angle $P$?",
      correctAnswer: "138",
      explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is 138.**\n\n**The Fast Way (~35s):** Vertical angles are equal, so $2t = 5t - 63$ and $t = 21$; angle $P$ is $42^{\\circ}$, and an adjacent angle is $180^{\\circ} - 42^{\\circ} = 138^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Vertical angles have equal measures, so $2t = 5t - 63$, which gives $3t = 63$ and $t = 21$.\nStep 2: Angle $P$ measures $2(21) = 42$ degrees.\nStep 3: An angle adjacent to angle $P$ forms a straight line with it, so it measures $180 - 42 = 138$ degrees. Check: $5(21) - 63 = 42$, matching angle $P$, and $42 + 138 = 180$ ✓\n\n**Common Mistakes:**\n* $42$: stops at the measure of angle $P$ instead of finding the adjacent angle.\n* $21$: reports the value of $t$ as the angle measure.\n* $159$: subtracts $t = 21$ from $180$ instead of subtracting the angle measure $42$.\n\n**Test Day Takeaway:** At an intersection, vertical angles are equal and adjacent angles add to $180^{\\circ}$; use the first fact to solve for the variable and the second to answer the question asked.",
      skills: ["angles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, line $\\ell$ passes through the point $(-2, 7)$ and is perpendicular to the line that passes through the points $(0, 8)$ and $(15, 2)$. Which equation defines line $\\ell$?",
      choices: [
        // distractor: takes the reciprocal of -2/5 but keeps the negative sign, using slope -5/2
        { id: "A", text: "$y = -\\frac{5}{2}x + 2$" },
        // distractor: uses the slope -2/5 of the given line itself, which gives a parallel line
        { id: "B", text: "$y = -\\frac{2}{5}x + \\frac{31}{5}$" },
        // distractor: changes the sign of -2/5 but does not take the reciprocal, using slope 2/5
        { id: "C", text: "$y = \\frac{2}{5}x + \\frac{39}{5}$" },
        { id: "D", text: "$y = \\frac{5}{2}x + 12$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The given line has slope $\\frac{2 - 8}{15 - 0} = -\\frac{2}{5}$, so line $\\ell$ has slope $\\frac{5}{2}$. Then $7 = \\frac{5}{2}(-2) + b$ gives $b = 12$.\n\n**The Full Solution:**\nStep 1: Find the slope of the line through $(0, 8)$ and $(15, 2)$: $\\frac{2 - 8}{15 - 0} = \\frac{-6}{15} = -\\frac{2}{5}$.\nStep 2: Perpendicular slopes are negative reciprocals, so line $\\ell$ has slope $\\frac{5}{2}$ and equation $y = \\frac{5}{2}x + b$.\nStep 3: Substitute $(-2, 7)$: $7 = \\frac{5}{2}(-2) + b = -5 + b$, so $b = 12$ and $y = \\frac{5}{2}x + 12$. Check: $\\frac{5}{2} \\cdot \\left(-\\frac{2}{5}\\right) = -1$, and $\\frac{5}{2}(-2) + 12 = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{5}{2}x + 2$): takes the reciprocal but keeps the negative sign, so the slopes multiply to $1$, not $-1$.\n* Choice B ($y = -\\frac{2}{5}x + \\frac{31}{5}$): uses the slope of the given line itself, which makes line $\\ell$ parallel to it.\n* Choice C ($y = \\frac{2}{5}x + \\frac{39}{5}$): changes the sign but does not take the reciprocal.\n\n**Test Day Takeaway:** A perpendicular slope needs two changes, flip and negate; check that the two slopes multiply to $-1$, then use the given point to find the $y$-intercept.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$\\frac{a}{3}(6x - 9) + 5 = 4x + b$\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $a + b$?",
      choices: [
        // distractor: drops the +5 when matching constants, taking b = -3a = -6 so that a + b = -4
        { id: "A", text: "$-4$" },
        // distractor: does not multiply the -9 by a/3, taking the constant term as -9 + 5 = -4 so that a + b = -2
        { id: "B", text: "$-2$" },
        { id: "C", text: "$1$" },
        // distractor: mishandles the sign of (a/3)(-9), taking b = 3a + 5 = 11 so that a + b = 13
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The left side is $2ax - 3a + 5$. Matching it to $4x + b$ gives $2a = 4$, so $a = 2$, and $b = -3(2) + 5 = -1$; then $a + b = 1$.\n\n**The Full Solution:**\nStep 1: Distribute: $\\frac{a}{3}(6x) = 2ax$ and $\\frac{a}{3}(-9) = -3a$, so the left side is $2ax - 3a + 5$.\nStep 2: An equation has infinitely many solutions when both sides are the same expression, so the $x$-coefficients and the constants must match: $2a = 4$ and $-3a + 5 = b$.\nStep 3: Then $a = 2$ and $b = -6 + 5 = -1$, so $a + b = 1$. Check: $\\frac{2}{3}(6x - 9) + 5 = 4x - 6 + 5 = 4x - 1$, which is $4x + b$ with $b = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): leaves out the $+5$ when matching constants, so $b = -6$ and $a + b = -4$.\n* Choice B ($-2$): does not multiply the $-9$ by $\\frac{a}{3}$, so the constant is $-9 + 5 = -4$ and $a + b = -2$.\n* Choice D ($13$): treats $\\frac{a}{3}(-9)$ as $+3a$, so $b = 3(2) + 5 = 11$ and $a + b = 13$.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are identical: distribute fully, then match the $x$-coefficients and the constants separately.",
      skills: ["distributive-property"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A pump fills a tank with water at a constant rate. The graph shows the volume $V$, in cubic meters, of water in the tank $t$ hours after the pump was turned on. How many hours after the pump was turned on will the tank contain $90$ cubic meters of water?",
      diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 8, xRange: [0, 8], yRange: [0, 24], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[2, 12], [6, 20]], label: "V" } },
      correctAnswer: "41",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is 41.**\n\n**The Fast Way (~40s):** From $(2, 12)$ to $(6, 20)$ the volume rises $8$ cubic meters in $4$ hours, so $V = 2t + 8$; then $90 = 2t + 8$ gives $t = 41$.\n\n**The Full Solution:**\nStep 1: Read two points from the graph: $(2, 12)$ and $(6, 20)$. The slope is $\\frac{20 - 12}{6 - 2} = \\frac{8}{4} = 2$ cubic meters per hour.\nStep 2: Find the $V$-intercept using $(2, 12)$: $12 = 2(2) + c$, so $c = 8$, and $V = 2t + 8$.\nStep 3: Set $V = 90$: $90 = 2t + 8$, so $2t = 82$ and $t = 41$. Check: $2(41) + 8 = 82 + 8 = 90$ ✓\n\n**Common Mistakes:**\n* $45$: divides $90$ by $2$ and ignores the $8$ cubic meters in the tank at $t = 0$.\n* $49$: adds the $8$ instead of subtracting it, computing $\\frac{98}{2}$.\n* $15$: uses $\\frac{12}{2} = 6$ cubic meters per hour as the rate, which treats the line as if it passed through the origin.\n\n**Test Day Takeaway:** A line through two graph points gives a rate and a starting value; subtract the starting value before dividing by the rate.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "At a school, $32\\%$ of the students take Spanish, and $24\\%$ of the students take both Spanish and chemistry. Of the students who take chemistry, $40\\%$ take Spanish. What percent of the students at the school take chemistry?",
      choices: [
        // distractor: finds the percent who take Spanish but not chemistry, 32% - 24% = 8%
        { id: "A", text: "$8\\%$" },
        // distractor: multiplies the two percents, 0.24(0.40) = 0.096, instead of dividing
        { id: "B", text: "$9.6\\%$" },
        { id: "C", text: "$60\\%$" },
        // distractor: reverses the condition, computing 24/32 = 75%, the percent of Spanish students who take chemistry
        { id: "D", text: "$75\\%$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The students who take both are $40\\%$ of the chemistry students, so $0.40c = 24$ and $c = 60$.\n\n**The Full Solution:**\nStep 1: Let $c\\%$ of the students take chemistry. The students who take both subjects are the chemistry students who take Spanish, which is $40\\%$ of the chemistry students.\nStep 2: So $0.40c = 24$, where both sides are percents of all students at the school.\nStep 3: Divide: $c = \\frac{24}{0.40} = 60$. Check: $40\\%$ of $60\\%$ is $24\\%$; and $32\\% + 60\\% - 24\\% = 68\\%$ take at least one subject, which is possible ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\%$): is the percent who take Spanish but not chemistry, $32\\% - 24\\%$.\n* Choice B ($9.6\\%$): multiplies $0.24$ by $0.40$ instead of dividing.\n* Choice D ($75\\%$): divides $24$ by $32$, which is the percent of Spanish students who take chemistry, the reverse of the given condition.\n\n**Test Day Takeaway:** A percent of the students who take chemistry is a percent of the chemistry group, not of the whole school; set that percent of the unknown group equal to the overlap and solve.",
      skills: ["conditional-probability"]
    }
  ]
};

export default practiceTest7M2Easy;
