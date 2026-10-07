// Practice Test 3 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H. M2 keeps this test's wavy hard-track shape
// 3E/7M/12H (easy at Q1, Q3, Q19 breather; hard closers Q21-22; Q1-5 warm-ups
// are 2+ steps or carry a trap). Figure density at official ~20%: M1 carries
// 5 diagram items, M2 carries 4. Numeric MC choices sorted ascending.

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
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
  question: "The table shows the charges for renting a truck for one day. Kai paid a total of \\$78 to rent the truck for one day. How many miles did Kai drive the truck?",
  questionTable: { headers: ["Charge", "Amount (dollars)"], rows: [["Rental fee for one day", "30"], ["Charge per mile driven", "0.40"]] },
  choices: [
    // distractor: stops after subtracting the fee, 78 - 30 = 48, and reports the dollars spent on miles instead of dividing by 0.40
    { id: "A", text: "$48$" },
    { id: "B", text: "$120$" },
    // distractor: ignores the rental fee and divides the whole total by the per-mile charge, 78 / 0.40 = 195
    { id: "C", text: "$195$" },
    // distractor: adds the rental fee to the total instead of subtracting it, (78 + 30) / 0.40 = 270
    { id: "D", text: "$270$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The fee is paid once, so $78 - 30 = 48$ dollars went to miles, and $48 \\div 0.40 = 120$ miles.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of miles Kai drove. The fee of $\\$30$ is charged once, and each mile costs $\\$0.40$, so the total cost is $0.40m + 30$ dollars.\nStep 2: Set the cost equal to what Kai paid: $0.40m + 30 = 78$. Subtracting $30$ from each side gives $0.40m = 48$.\nStep 3: Divide each side by $0.40$: $m = 120$. Check: $0.40(120) + 30 = 48 + 30 = 78$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): this is $78 - 30$, the number of dollars Kai paid for miles. It still has to be divided by the $\\$0.40$ charge per mile.\n* Choice C ($195$): divides the whole $\\$78$ by $0.40$, as if none of the total went to the one-day fee.\n* Choice D ($270$): adds the $\\$30$ fee to the total instead of subtracting it, giving $\\frac{108}{0.40} = 270$.\n\n**Test Day Takeaway:** In a cost equation, the one-time charge is the constant term; remove it from the total before dividing by the per-unit rate.",
  skills: ["word-problem-to-equation"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$14$, $23$, $9$, $17$, $30$, $11$, $20$, $16$, $25$\nWhat is the median of the data shown?",
  choices: [
    { id: "A", text: "$17$" },
    // distractor: averages the least and greatest values, (9 + 30)/2, instead of finding the middle value
    { id: "B", text: "$19.5$" },
    // distractor: finds the range, 30 - 9, instead of the median
    { id: "C", text: "$21$" },
    // distractor: takes the middle value of the list as written, without putting the values in order
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** In order, the values are $9, 11, 14, 16, 17, 20, 23, 25, 30$. With $9$ values, the median is the $5$th value, $17$.\n\n**The Full Solution:**\nStep 1: List the values from least to greatest: $9, 11, 14, 16, 17, 20, 23, 25, 30$.\nStep 2: There are $9$ values, an odd number, so the median is the single middle value, the $\\frac{9 + 1}{2} = 5$th value.\nStep 3: The $5$th value in the ordered list is $17$. Check: $4$ values ($9, 11, 14, 16$) are less than $17$ and $4$ values ($20, 23, 25, 30$) are greater ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($19.5$): averages the least and greatest values, $\\frac{9 + 30}{2}$. That is the midpoint of the range, not the middle value of the data.\n* Choice C ($21$): this is the range, $30 - 9$, a measure of spread rather than center.\n* Choice D ($30$): this is the middle value of the list as it is written. The values must be put in order first.\n\n**Test Day Takeaway:** Always sort before finding a median. For an odd number of values, the median is the one value with as many values below it as above it.",
  skills: ["find-median"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Of the $240$ students at a school, $96$ walk to school. One of these students will be selected at random. What is the probability of selecting a student who walks to school?",
  choices: [
    { id: "A", text: "$\\frac{2}{5}$" },
    // distractor: divides the 96 students who walk by the 144 students who do not, instead of by the 240 total
    { id: "B", text: "$\\frac{2}{3}$" },
    // distractor: forms the ratio of the 144 students who do not walk to the 96 who do
    { id: "C", text: "$\\frac{3}{2}$" },
    // distractor: inverts the probability, dividing the 240 total by the 96 students who walk
    { id: "D", text: "$\\frac{5}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Probability is the favorable count over the total count: $\\frac{96}{240} = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Each of the $240$ students is equally likely to be selected, so there are $240$ possible outcomes.\nStep 2: The favorable outcomes are the $96$ students who walk to school.\nStep 3: The probability is $\\frac{96}{240}$, and dividing the numerator and denominator by $48$ gives $\\frac{2}{5}$. Check: $\\frac{2}{5}$ of $240$ is $96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2}{3}$): this is $\\frac{96}{144}$, the students who walk compared with the $240 - 96 = 144$ students who do not. That is a part-to-part ratio, not a probability.\n* Choice C ($\\frac{3}{2}$): this is $\\frac{144}{96}$, the students who do not walk compared with those who do. A probability can never be greater than $1$.\n* Choice D ($\\frac{5}{2}$): this is $\\frac{240}{96}$, the total divided by the favorable count. The total belongs in the denominator.\n\n**Test Day Takeaway:** A probability is part over whole, so the total goes in the denominator; any answer greater than $1$ means the fraction was flipped.",
  skills: ["probability-basics"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$x + y = 30$\n$4x + 9y = 170$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
  choices: [
    // distractor: substitutes x = 30 - y but multiplies only the 30 by 4, getting 120 + 8y = 170 and y = 6.25
    { id: "A", text: "$6.25$" },
    { id: "B", text: "$10$" },
    // distractor: solves correctly but reports x = 20 instead of y
    { id: "C", text: "$20$" },
    // distractor: stops at 5y = 50 and reports 50 without dividing by 5
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Substitute $x = 30 - y$ into the second equation: $4(30 - y) + 9y = 170$, so $120 + 5y = 170$ and $y = 10$.\n\n**The Full Solution:**\nStep 1: Solve the first equation for $x$: $x = 30 - y$.\nStep 2: Substitute into the second equation: $4(30 - y) + 9y = 170$. Distributing gives $120 - 4y + 9y = 170$, or $120 + 5y = 170$.\nStep 3: Subtract $120$ from each side to get $5y = 50$, so $y = 10$. Check: $x = 30 - 10 = 20$, and $4(20) + 9(10) = 80 + 90 = 170$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.25$): multiplies only the $30$ by $4$ when substituting, writing $120 - y + 9y = 170$. That gives $8y = 50$ and $y = 6.25$; the $4$ must also multiply the $-y$.\n* Choice C ($20$): this is the value of $x$. The question asks for $y$.\n* Choice D ($50$): this is the value of $5y$. Dividing by $5$ is the last step.\n\n**Test Day Takeaway:** When you substitute an expression like $30 - y$, keep it in parentheses so the coefficient multiplies every term, then reread which variable the question asks for.",
  skills: ["substitution-method"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$y = -\\frac{2}{3}x + 5$\nIn the $xy$-plane, line $k$ is perpendicular to the graph of the given equation. What is the slope of line $k$?",
  choices: [
    // distractor: takes the reciprocal of the given line's slope but keeps the negative sign
    { id: "A", text: "$-\\frac{3}{2}$" },
    // distractor: reports the given line's own slope instead of the slope of a line perpendicular to it
    { id: "B", text: "$-\\frac{2}{3}$" },
    // distractor: changes the sign of the given line's slope without taking the reciprocal
    { id: "C", text: "$\\frac{2}{3}$" },
    { id: "D", text: "$\\frac{3}{2}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The given line has slope $-\\frac{2}{3}$, and a perpendicular line has the negative reciprocal slope, $\\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: The given equation is in slope-intercept form, $y = mx + b$, so the slope of its graph is $m = -\\frac{2}{3}$.\nStep 2: The slopes of two perpendicular lines have a product of $-1$, so the slope of line $k$ is the negative reciprocal of $-\\frac{2}{3}$.\nStep 3: The reciprocal of $-\\frac{2}{3}$ is $-\\frac{3}{2}$; changing its sign gives $\\frac{3}{2}$. Check: $\\left(-\\frac{2}{3}\\right)\\left(\\frac{3}{2}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): flips $-\\frac{2}{3}$ but keeps the negative sign. The product of the slopes would then be $1$, not $-1$.\n* Choice B ($-\\frac{2}{3}$): this is the slope of the given line itself. A line with this slope would be parallel to the given line.\n* Choice C ($\\frac{2}{3}$): changes the sign only. The product of the slopes would be $-\\frac{4}{9}$, not $-1$.\n\n**Test Day Takeaway:** Perpendicular means two changes, not one: flip the fraction and change the sign. Your answer times the original slope should be exactly $-1$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of the quadratic function $y = f(x)$ is shown. The function $g$ is defined by $g(x) = f(x + 5) + 2$. What are the coordinates of the vertex of the graph of $y = g(x)$ in the $xy$-plane?",
  diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 0.5, showVertex: true } },
  choices: [
    { id: "A", text: "$(-3, -1)$" },
    // distractor: shifts left correctly but subtracts 2 from the y-coordinate instead of adding it
    { id: "B", text: "$(-3, -5)$" },
    // distractor: reads f(x + 5) as a shift 5 units to the right, adding 5 to the x-coordinate
    { id: "C", text: "$(7, -1)$" },
    // distractor: reverses both shifts, moving 5 units right and 2 units down
    { id: "D", text: "$(7, -5)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The vertex of the graph of $f$ is $(2, -3)$. Replacing $x$ with $x + 5$ shifts the graph $5$ units left, and adding $2$ shifts it $2$ units up, so the new vertex is $(2 - 5,\\ -3 + 2) = (-3, -1)$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph. The lowest point of the graph of $y = f(x)$ is $(2, -3)$.\nStep 2: In $g(x) = f(x + 5) + 2$, the $+5$ inside the function moves the graph $5$ units to the left, which subtracts $5$ from each $x$-coordinate. The $+2$ outside the function moves the graph $2$ units up, which adds $2$ to each $y$-coordinate.\nStep 3: The vertex of the graph of $y = g(x)$ is $(2 - 5,\\ -3 + 2) = (-3, -1)$. Check: $g(-3) = f(-3 + 5) + 2 = f(2) + 2 = -3 + 2 = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-3, -5)$): moves the $x$-coordinate correctly but subtracts $2$ from the $y$-coordinate. Adding $2$ outside the function moves the graph up.\n* Choice C ($(7, -1)$): reads $f(x + 5)$ as a shift to the right. A plus sign inside the function moves the graph left, so the $x$-coordinate decreases.\n* Choice D ($(7, -5)$): reverses both shifts, moving $5$ units right and $2$ units down.\n\n**Test Day Takeaway:** A change inside the function moves the graph horizontally and in the opposite direction of its sign; a change outside moves it vertically in the direction of its sign.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$2x^{2} + 2y^{2} - 24x + 16y + 54 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the radius of the circle?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~35s):** Divide the equation by $2$ to get $x^{2} + y^{2} - 12x + 8y + 27 = 0$, then complete both squares: $(x - 6)^{2} + (y + 4)^{2} = 25$, so the radius is $5$.\n\n**The Full Solution:**\nStep 1: The standard form of a circle has $x^{2}$ and $y^{2}$ terms with coefficient $1$. Dividing each term of the given equation by $2$ gives $x^{2} + y^{2} - 12x + 8y + 27 = 0$.\nStep 2: Group the terms and move the constant: $(x^{2} - 12x) + (y^{2} + 8y) = -27$. Half of $-12$ is $-6$ and $(-6)^{2} = 36$; half of $8$ is $4$ and $4^{2} = 16$. Adding $36$ and $16$ to each side gives $(x - 6)^{2} + (y + 4)^{2} = -27 + 36 + 16 = 25$.\nStep 3: In $(x - h)^{2} + (y - k)^{2} = r^{2}$, the right side is $r^{2}$, so $r^{2} = 25$ and $r = 5$. Check: the point $(11, -4)$ is $5$ units from the center $(6, -4)$, and $2(121) + 2(16) - 24(11) + 16(-4) + 54 = 242 + 32 - 264 - 64 + 54 = 0$ ✓\n\n**Common Mistakes:**\n* $25$: this is $r^{2}$, the number on the right side of the completed form. The radius is its square root.\n* About $12.41$: completing the square without first dividing by $2$ gives $(x - 12)^{2} + (y + 8)^{2} = 154$, and $\\sqrt{154} \\approx 12.41$.\n* About $8.89$: moving $27$ to the right side as $+27$ instead of $-27$ gives $r^{2} = 36 + 16 + 27 = 79$, and $\\sqrt{79} \\approx 8.89$.\n\n**Test Day Takeaway:** Before completing the square, make the coefficients of $x^{2}$ and $y^{2}$ equal to $1$; a leading $2$ throws off every later step.",
  skills: ["circle-equation", "completing-square-circles"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$4x + 26 = 145 - 3x$\nWhat value of $x$ is the solution to the given equation?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~20s):** Add $3x$ to each side and subtract $26$: $7x = 119$, so $x = 17$.\n\n**The Full Solution:**\nStep 1: Collect the $x$-terms on one side. Adding $3x$ to each side of $4x + 26 = 145 - 3x$ gives $7x + 26 = 145$.\nStep 2: Subtract $26$ from each side: $7x = 119$.\nStep 3: Divide each side by $7$: $x = 17$. Check: $4(17) + 26 = 94$ and $145 - 3(17) = 145 - 51 = 94$ ✓\n\n**Common Mistakes:**\n* $119$: moves $-3x$ to the left side without changing its sign, which gives $4x - 3x = 119$ and $x = 119$.\n* About $24.43$: adds $26$ to $145$ instead of subtracting it, giving $7x = 171$.\n* $29.75$: drops the $-3x$ term and solves $4x = 119$.\n\n**Test Day Takeaway:** Move a variable term across the equal sign by doing the opposite operation to both sides, then combine it with the other variable term before dividing.",
  skills: ["combining-like-terms"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$10x + 4y = 26$\n$15x + cy = 39$\nIn the given system of equations, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
  choices: [
    // distractor: reports the scale factor 15/10 = 1.5 itself instead of applying it to the coefficient 4
    { id: "A", text: "$1.5$" },
    // distractor: assumes the two equations must have identical y-coefficients rather than proportional ones
    { id: "B", text: "$4$" },
    { id: "C", text: "$6$" },
    // distractor: adds the difference 15 - 10 = 5 to 4 instead of multiplying 4 by the factor 1.5
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The second equation must be the first multiplied by a constant. Since $15 \\div 10 = 1.5$ and $39 \\div 26 = 1.5$, the multiplier is $1.5$, so $c = 1.5(4) = 6$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a nonzero multiple of the other. So there is a constant $k$ with $15 = 10k$, $c = 4k$, and $39 = 26k$.\nStep 2: From $15 = 10k$, $k = 1.5$; the constant terms agree, since $26(1.5) = 39$.\nStep 3: Then $c = 4(1.5) = 6$. Check: multiplying $10x + 4y = 26$ by $1.5$ gives $15x + 6y = 39$, which is exactly the second equation ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): this is the multiplier $k$, not the coefficient. The multiplier still has to be applied to the $4$.\n* Choice B ($4$): assumes the two equations must have the same coefficient of $y$. With $c = 4$, the second equation is $15x + 4y = 39$, and the system has exactly one solution.\n* Choice D ($9$): adds $15 - 10 = 5$ to $4$. Equivalent equations come from multiplying every term by the same factor, not from adding the same amount.\n\n**Test Day Takeaway:** For infinitely many solutions, find the multiplier from a pair of coefficients you know, confirm it on the constants, then apply it to the unknown coefficient.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $j$ passes through the point $(6, -2)$ and is parallel to the graph of $3x - 4y = 20$. An equation of line $j$ is $3x - 4y = c$, where $c$ is a constant. What is the value of $c$?",
  correctAnswer: "26",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~20s):** Lines of the form $3x - 4y = c$ all have the same slope, so only $c$ changes. Substitute $(6, -2)$: $3(6) - 4(-2) = 18 + 8 = 26$.\n\n**The Full Solution:**\nStep 1: The graph of $3x - 4y = 20$ has slope $\\frac{3}{4}$, and any equation $3x - 4y = c$ also has slope $\\frac{3}{4}$, so line $j$ is parallel to the given line for every value of $c$ except $20$.\nStep 2: The point $(6, -2)$ lies on line $j$, so its coordinates satisfy the equation: $3(6) - 4(-2) = c$.\nStep 3: Evaluate: $18 - (-8) = 18 + 8 = 26$, so $c = 26$. Check: $3x - 4y = 26$ has slope $\\frac{3}{4}$, passes through $(6, -2)$, and is a different line from $3x - 4y = 20$ ✓\n\n**Common Mistakes:**\n* $10$: computes $3(6) - 4(2) = 10$, dropping the negative sign on the $y$-coordinate. Subtracting $4(-2)$ adds $8$.\n* $20$: keeps the original constant, which gives the same line, not a parallel line through $(6, -2)$.\n* $-30$: substitutes the coordinates in the wrong order, $3(-2) - 4(6) = -30$. The first coordinate is $x$.\n\n**Test Day Takeaway:** For a parallel line in standard form, keep the left side and recompute only the constant by substituting the given point; watch the sign when a coordinate is negative.",
  skills: ["writing-parallel-equation"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows two unit equivalences. A conveyor belt moves at a constant speed of $2$ feet per second. What is the speed of the conveyor belt, in yards per minute?",
  questionTable: { headers: ["Quantity", "Equivalent"], rows: [["1 yard", "3 feet"], ["1 minute", "60 seconds"]] },
  choices: [
    // distractor: multiplies 2 by 3 instead of dividing and never converts seconds to minutes
    { id: "A", text: "$6$" },
    { id: "B", text: "$40$" },
    // distractor: converts seconds to minutes but leaves the speed in feet, 2 times 60
    { id: "C", text: "$120$" },
    // distractor: converts seconds to minutes but multiplies by 3 instead of dividing, treating 1 foot as 3 yards
    { id: "D", text: "$360$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** In $1$ minute the belt moves $2 \\times 60 = 120$ feet, and $120$ feet is $\\frac{120}{3} = 40$ yards.\n\n**The Full Solution:**\nStep 1: Convert seconds to minutes. There are $60$ seconds in $1$ minute, so the belt moves $2 \\times 60 = 120$ feet each minute.\nStep 2: Convert feet to yards. Since $1$ yard is $3$ feet, $120$ feet is $\\frac{120}{3} = 40$ yards.\nStep 3: The speed is $40$ yards per minute. Check the units: $\\frac{2\\ \\text{feet}}{\\text{second}} \\times \\frac{60\\ \\text{seconds}}{\\text{minute}} \\times \\frac{1\\ \\text{yard}}{3\\ \\text{feet}} = 40$ yards per minute ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): multiplies $2$ by $3$ and stops. A yard is longer than a foot, so the number of yards must be smaller, and the seconds were never converted.\n* Choice C ($120$): this is the speed in feet per minute. Converting to yards takes one more division by $3$.\n* Choice D ($360$): multiplies by $3$ instead of dividing by $3$, giving $2 \\times 60 \\times 3$.\n\n**Test Day Takeaway:** Write a conversion as a chain of fractions and cancel units as you go; the unit that remains should be the one the question asks for.",
  skills: ["unit-conversion"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $m = 62 - 1.4t$ gives the mass $m$, in grams, of a piece of ice $t$ minutes after it was placed in a glass of water, for $0 \\le t \\le 40$. What is the best interpretation of $1.4$ in this context?",
  choices: [
    // distractor: reads 1.4 as a starting value, which is the role of the constant 62, not of the coefficient of t
    { id: "A", text: "The mass of the piece of ice is $1.4$ grams when it is placed in the glass." },
    // distractor: keeps the size of the rate but drops the minus sign in front of 1.4, reversing the direction of change
    { id: "B", text: "The mass of the piece of ice increases by $1.4$ grams each minute." },
    // distractor: treats the per-minute rate as a single total change over the whole 40 minutes
    { id: "C", text: "The mass of the piece of ice decreases by a total of $1.4$ grams over the $40$ minutes." },
    { id: "D", text: "The mass of the piece of ice decreases by $1.4$ grams each minute." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** In $m = 62 - 1.4t$ the coefficient of $t$ is $-1.4$, so each additional minute changes the mass by $-1.4$ grams, a decrease of $1.4$ grams per minute.\n\n**The Full Solution:**\nStep 1: The equation is linear in $t$, with constant term $62$ and coefficient of $t$ equal to $-1.4$. The constant term is the mass at $t = 0$; the coefficient of $t$ is the rate of change.\nStep 2: A rate of change is a per-unit quantity: $-1.4$ means the mass changes by $-1.4$ grams for each increase of $1$ minute in $t$.\nStep 3: Because the change is negative, the mass of the ice decreases by $1.4$ grams each minute. Check: $m = 62$ when $t = 0$ and $m = 62 - 1.4 = 60.6$ when $t = 1$, a decrease of exactly $1.4$ grams ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the mass when the ice is placed in the glass is $62$ grams, the constant term. The number $1.4$ multiplies $t$, so it describes a change, not a starting amount.\n* Choice B: the size $1.4$ is right, but the equation subtracts $1.4t$, so the mass is decreasing, not increasing.\n* Choice C: $1.4$ is the change per minute, not the total change. Over $40$ minutes the mass decreases by $1.4(40) = 56$ grams.\n\n**Test Day Takeaway:** The coefficient of the variable is a rate: its sign gives the direction of change, and its size is the change per one unit of the variable.",
  skills: ["slope-intercept-form"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "If $4n + 9 = 61$, what is the value of $12n + 27$?",
  choices: [
    // distractor: solves for n = 13 and reports 3n = 39, tripling n instead of the whole expression
    { id: "A", text: "$39$" },
    // distractor: assumes 12n + 27 has the same value as 4n + 9
    { id: "B", text: "$61$" },
    // distractor: triples only the n-term, computing 12(13) + 9 = 165 with the original constant
    { id: "C", text: "$165$" },
    { id: "D", text: "$183$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $12n + 27 = 3(4n + 9)$, so its value is three times $61$: $3(61) = 183$.\n\n**The Full Solution:**\nStep 1: Factor the expression: $12n + 27 = 3(4n + 9)$. Both the coefficient and the constant are three times those in $4n + 9$.\nStep 2: Since $4n + 9 = 61$, it follows that $3(4n + 9) = 3(61) = 183$.\nStep 3: Confirm by solving for $n$: $4n + 9 = 61$ gives $4n = 52$ and $n = 13$. Check: $12(13) + 27 = 156 + 27 = 183$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($39$): this is $3n = 3(13)$. Tripling $n$ is not the same as tripling the whole expression, which includes the constant.\n* Choice B ($61$): this is the value of $4n + 9$, not $12n + 27$. With $n = 13$, the two expressions have different values.\n* Choice C ($165$): computes $12(13) + 9$, tripling the coefficient but keeping the constant $9$. The expression adds $27$, not $9$.\n\n**Test Day Takeaway:** When the expression you want is a multiple of the expression you know, multiply the known value directly; you often don't need to solve for the variable at all.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Of the $750$ tickets for a concert, $6\\%$ were sold at the door, $4\\%$ were given away, and the rest were sold online. How many of the tickets were sold online?",
  choices: [
    // distractor: reports the 45 tickets sold at the door rather than the tickets sold online
    { id: "A", text: "$45$" },
    // distractor: reports the tickets that were not sold online, 10% of 750, instead of the tickets that were
    { id: "B", text: "$75$" },
    { id: "C", text: "$675$" },
    // distractor: subtracts only the tickets sold at the door, computing 750 - 45 and ignoring the tickets given away
    { id: "D", text: "$705$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The tickets sold at the door or given away make up $6\\% + 4\\% = 10\\%$ of the total, so $90\\%$ were sold online: $0.90(750) = 675$.\n\n**The Full Solution:**\nStep 1: The tickets sold at the door and the tickets given away are separate groups, so together they make up $6\\% + 4\\% = 10\\%$ of the tickets.\nStep 2: Every other ticket was sold online, so the tickets sold online make up $100\\% - 10\\% = 90\\%$ of the tickets.\nStep 3: Apply that percent to the total: $0.90(750) = 675$ tickets. Check: $0.06(750) = 45$ and $0.04(750) = 30$, and $675 + 45 + 30 = 750$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45$): this is $6\\%$ of $750$, the tickets sold at the door.\n* Choice B ($75$): this is $10\\%$ of $750$, the tickets sold at the door or given away. The question asks for the tickets that remain.\n* Choice D ($705$): subtracts only the $45$ tickets sold at the door. The $30$ tickets that were given away were not sold online either.\n\n**Test Day Takeaway:** When the rest of a whole is asked for, add the given percents first and subtract from $100\\%$ before applying the result to the total.",
  skills: ["percent-of-value"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt{3x + 40} = x$\nWhat is the solution to the given equation?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~35s):** Squaring gives $3x + 40 = x^{2}$, so $x^{2} - 3x - 40 = 0$ and $(x - 8)(x + 5) = 0$. Substituting back, only $x = 8$ satisfies the original equation.\n\n**The Full Solution:**\nStep 1: Square each side of $\\sqrt{3x + 40} = x$: $3x + 40 = x^{2}$.\nStep 2: Write the quadratic in standard form, $x^{2} - 3x - 40 = 0$, and factor. Two numbers with product $-40$ and sum $-3$ are $-8$ and $5$, so $(x - 8)(x + 5) = 0$ and $x = 8$ or $x = -5$.\nStep 3: Squaring can introduce solutions the original equation does not have, so test both. For $x = 8$: $\\sqrt{3(8) + 40} = \\sqrt{64} = 8$ ✓. For $x = -5$: $\\sqrt{3(-5) + 40} = \\sqrt{25} = 5$, which is not $-5$, so $-5$ is not a solution.\n\n**Common Mistakes:**\n* $-5$: this value satisfies the squared equation but not the original one, because a square root is never negative.\n* $5$: factoring $x^{2} - 3x - 40$ as $(x - 5)(x + 8)$ reverses the signs. That product expands to $x^{2} + 3x - 40$.\n* $64$: this is $3x + 40$, the value under the radical at the solution. The question asks for $x$.\n\n**Test Day Takeaway:** Squaring both sides can create extra solutions, so substitute each candidate into the original radical equation before choosing one.",
  skills: ["radical-equations"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows the number of bacteria in a sample $t$ hours after an experiment began. The number of bacteria increases exponentially. How many bacteria will be in the sample $12$ hours after the experiment began?",
  questionTable: { headers: ["$t$ (hours)", "Number of bacteria"], rows: [["0", "64"], ["2", "96"], ["4", "144"], ["6", "216"]] },
  correctAnswer: "729",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is $729$.**\n\n**The Fast Way (~40s):** Every $2$ hours the number of bacteria is multiplied by $1.5$. From hour $6$ to hour $12$ there are three more $2$-hour steps, so the number is $216(1.5)^{3} = 216(3.375) = 729$.\n\n**The Full Solution:**\nStep 1: Find the ratio between consecutive values in the table: $\\frac{96}{64} = 1.5$, $\\frac{144}{96} = 1.5$, and $\\frac{216}{144} = 1.5$. The number is multiplied by $1.5$ every $2$ hours.\nStep 2: Write a model with that time step: $B(t) = 64(1.5)^{t/2}$. Check it against the table: $B(4) = 64(1.5)^{2} = 64(2.25) = 144$ ✓\nStep 3: Evaluate at $t = 12$: $B(12) = 64(1.5)^{6} = 64(11.390625) = 729$. Check by stepping from the table: $216 \\to 324 \\to 486 \\to 729$ for hours $8$, $10$, and $12$ ✓\n\n**Common Mistakes:**\n* About $8{,}304$: computes $64(1.5)^{12}$, treating $1.5$ as the growth factor per hour. The table shows the factor applies once every $2$ hours, so the exponent is $\\frac{12}{2} = 6$.\n* $432$: adds the last difference repeatedly, $216 + 72 + 72 + 72 = 432$. That is linear growth; exponential growth has a constant ratio, not a constant difference.\n* $324$: this is the number at hour $8$, one step past the table. Reaching hour $12$ takes three steps, not one.\n\n**Test Day Takeaway:** When a table's constant ratio covers an interval longer than one unit, divide the time by that interval in the exponent.",
  skills: ["exponential-growth-decay"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $PQR$, angle $R$ is the right angle and $\\tan P = \\frac{12}{5}$. The perimeter of triangle $PQR$ is $k$. Which expression represents the length of $\\overline{QR}$?",
  choices: [
    // distractor: gives the length of PR, the shorter leg (5 parts of 30), instead of QR
    { id: "A", text: "$\\frac{k}{6}$" },
    { id: "B", text: "$\\frac{2k}{5}$" },
    // distractor: gives the length of the hypotenuse PQ, 13 parts of 30
    { id: "C", text: "$\\frac{13k}{30}$" },
    // distractor: treats k as the hypotenuse and takes 12/13 of it, ignoring that k is the perimeter
    { id: "D", text: "$\\frac{12k}{13}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** $\\tan P = \\frac{12}{5}$ makes $QR = 12a$ and $PR = 5a$, so $PQ = 13a$ and the perimeter is $30a = k$. Then $QR = 12a = \\frac{12k}{30} = \\frac{2k}{5}$.\n\n**The Full Solution:**\nStep 1: Tangent of $P$ is the length of the leg opposite $P$ divided by the length of the leg adjacent to $P$. The leg opposite $P$ is $\\overline{QR}$ and the adjacent leg is $\\overline{PR}$, so for some positive number $a$, $QR = 12a$ and $PR = 5a$.\nStep 2: By the Pythagorean theorem, $PQ = \\sqrt{(12a)^{2} + (5a)^{2}} = \\sqrt{169a^{2}} = 13a$. The perimeter is $5a + 12a + 13a = 30a$.\nStep 3: Since the perimeter is $k$, $30a = k$ and $a = \\frac{k}{30}$. So $QR = 12a = \\frac{12k}{30} = \\frac{2k}{5}$. Check with $k = 60$: the sides are $10$, $24$, and $26$, which have a sum of $60$, and $\\frac{2(60)}{5} = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{k}{6}$): this is $5a = \\frac{5k}{30}$, the length of $\\overline{PR}$, the leg adjacent to $P$.\n* Choice C ($\\frac{13k}{30}$): this is $13a$, the length of the hypotenuse $\\overline{PQ}$.\n* Choice D ($\\frac{12k}{13}$): applies the ratio $\\frac{12}{13}$ to $k$ as though $k$ were the length of the hypotenuse. Here $k$ is the perimeter, which is $30a$, not $13a$.\n\n**Test Day Takeaway:** Turn a trigonometric ratio into side lengths with a common factor, add them to express the perimeter, and solve for that factor before answering.",
  skills: ["soh-cah-toa"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, two lines intersect at a point. What is the value of $y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(3x + 18)°", "(8x + 8)°", "", "y°"], angle0Measure: 60, lineLabels: [] } },
  choices: [
    // distractor: reports x = 14 instead of the angle measure y
    { id: "A", text: "$14$" },
    // distractor: sets the two labeled expressions equal, treating adjacent angles as vertical angles, and gets x = 2 and 24
    { id: "B", text: "$24$" },
    // distractor: reports the measure of the (3x + 18) degree angle, which is adjacent to the y degree angle rather than equal to it
    { id: "C", text: "$60$" },
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The two labeled angles are adjacent along one line, so $(3x + 18) + (8x + 8) = 180$, giving $x = 14$. The angle marked $y^\\circ$ is vertical to the $(8x + 8)^\\circ$ angle, so $y = 8(14) + 8 = 120$.\n\n**The Full Solution:**\nStep 1: The $(3x + 18)^\\circ$ and $(8x + 8)^\\circ$ angles share a side and together form a straight angle, so $(3x + 18) + (8x + 8) = 180$.\nStep 2: Combine like terms: $11x + 26 = 180$, so $11x = 154$ and $x = 14$. The two angles measure $3(14) + 18 = 60$ degrees and $8(14) + 8 = 120$ degrees.\nStep 3: The angle marked $y^\\circ$ is across the intersection point from the $(8x + 8)^\\circ$ angle, so the two are vertical angles and have equal measures: $y = 120$. Check: the four angles measure $60$, $120$, $60$, and $120$ degrees, which have a sum of $360$ degrees ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): this is the value of $x$. The question asks for $y$.\n* Choice B ($24$): setting $3x + 18 = 8x + 8$ treats the two labeled angles as vertical angles. They share a side, so they are supplementary, and this equation gives $x = 2$ and an angle of $24$ degrees.\n* Choice C ($60$): this is the measure of the $(3x + 18)^\\circ$ angle, which is adjacent to the $y^\\circ$ angle. Adjacent angles formed by two intersecting lines have a sum of $180$ degrees; they are not equal.\n\n**Test Day Takeaway:** At an intersection, first decide whether two angles share a side or sit across from each other; that decides between adding to $180$ and setting them equal.",
  skills: ["angles"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graphs of $y = x^{2} - 8x + 22$ and $y = 2x + c$, where $c$ is a constant, intersect at exactly one point. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: forces the line through the vertex (4, 6) of the parabola instead of requiring exactly one intersection
    { id: "B", text: "$-2$" },
    // distractor: leaves 2x out when combining the equations, using the discriminant of x^2 - 8x + (22 - c) and getting c = 6
    { id: "C", text: "$6$" },
    // distractor: copies the constant term of the quadratic equation instead of solving for c
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Setting the expressions for $y$ equal gives $x^{2} - 10x + (22 - c) = 0$. Exactly one intersection point means the discriminant is $0$: $100 - 4(22 - c) = 0$, so $c = -3$.\n\n**The Full Solution:**\nStep 1: At an intersection point the two $y$-values are equal: $2x + c = x^{2} - 8x + 22$. Move every term to one side: $x^{2} - 10x + (22 - c) = 0$.\nStep 2: The graphs intersect at exactly one point when this quadratic equation has exactly one real solution, which happens when its discriminant equals $0$: $(-10)^{2} - 4(1)(22 - c) = 0$.\nStep 3: Simplify: $100 - 88 + 4c = 0$, so $4c = -12$ and $c = -3$. Check: with $c = -3$ the equation becomes $x^{2} - 10x + 25 = 0$, or $(x - 5)^{2} = 0$, so the only solution is $x = 5$, where both equations give $y = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): makes the line pass through the vertex of the parabola, $(4, 6)$, since $6 = 2(4) - 2$. A line with slope $2$ through the vertex intersects the parabola at two points, not one.\n* Choice C ($6$): leaves out the $2x$ term, applying the discriminant to $x^{2} - 8x + (22 - c)$: $64 - 4(22 - c) = 0$ gives $c = 6$.\n* Choice D ($22$): copies the constant term of the quadratic equation. That is the $y$-intercept of the parabola, not of the line.\n\n**Test Day Takeaway:** \"Exactly one point\" of intersection for a line and a parabola is a discriminant condition: set the expressions equal, collect every term on one side, and set $b^{2} - 4ac = 0$.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{4^{3n} \\cdot 8^{n + 2}}{16^{n}}$\nWhich expression is equivalent to the given expression?",
  choices: [
    // distractor: rewrites 4^(3n) as 2^(3n) instead of 2^(6n), forgetting that 4 = 2^2 doubles the exponent
    { id: "A", text: "$2^{2n + 6}$" },
    // distractor: rewrites 8^(n+2) as 2^(3n+2), distributing the 3 to n only and not to the 2
    { id: "B", text: "$2^{5n + 2}$" },
    { id: "C", text: "$2^{5n + 6}$" },
    // distractor: adds the denominator's exponent 4n instead of subtracting it
    { id: "D", text: "$2^{13n + 6}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Write everything in base $2$: $4^{3n} = 2^{6n}$, $8^{n + 2} = 2^{3n + 6}$, and $16^{n} = 2^{4n}$. Then $6n + (3n + 6) - 4n = 5n + 6$, so the expression is $2^{5n + 6}$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $2$ using $(b^{p})^{q} = b^{pq}$. Since $4 = 2^{2}$, $4^{3n} = 2^{6n}$. Since $8 = 2^{3}$, $8^{n + 2} = 2^{3(n + 2)} = 2^{3n + 6}$. Since $16 = 2^{4}$, $16^{n} = 2^{4n}$.\nStep 2: Multiply in the numerator by adding exponents: $2^{6n} \\cdot 2^{3n + 6} = 2^{9n + 6}$.\nStep 3: Divide by subtracting exponents: $\\frac{2^{9n + 6}}{2^{4n}} = 2^{5n + 6}$. Check with $n = 1$: the given expression is $\\frac{4^{3} \\cdot 8^{3}}{16} = \\frac{64 \\cdot 512}{16} = 2{,}048$, and $2^{5(1) + 6} = 2^{11} = 2{,}048$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2^{2n + 6}$): treats $4^{3n}$ as $2^{3n}$. Because $4 = 2^{2}$, changing the base to $2$ doubles the exponent.\n* Choice B ($2^{5n + 2}$): rewrites $8^{n + 2}$ as $2^{3n + 2}$, multiplying only the $n$ by $3$. The $3$ multiplies the whole exponent, giving $3n + 6$.\n* Choice D ($2^{13n + 6}$): adds $4n$ instead of subtracting it. Dividing powers with the same base subtracts exponents.\n\n**Test Day Takeaway:** Rewrite every base as a power of the same prime first, then apply the exponent rules, multiplying an outer exponent by every term inside the parentheses.",
  skills: ["exponent-laws"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A store models its daily profit $P(x)$, in dollars, from selling candles at a price of $x$ dollars each with the function $P(x) = -0.4x^{2} + 32x - 340$. The table shows four values of $x$ and their corresponding values of $P(x)$. According to the model, what is the greatest daily profit, in dollars, the store can earn?",
  questionTable: { headers: ["$x$", "$P(x)$"], rows: [["20", "140"], ["30", "260"], ["50", "260"], ["60", "140"]] },
  choices: [
    // distractor: reports the price 40 at which the maximum occurs instead of the profit at that price
    { id: "A", text: "$40$" },
    // distractor: reports the greatest profit listed in the table, but the table skips the price where the profit is greatest
    { id: "B", text: "$260$" },
    { id: "C", text: "$300$" },
    // distractor: reads the constant term 340 as the greatest profit, ignoring its minus sign and its role in the model
    { id: "D", text: "$340$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The table is symmetric about $x = 40$, the axis of symmetry. Substituting gives $P(40) = -0.4(1{,}600) + 32(40) - 340 = -640 + 1{,}280 - 340 = 300$ dollars.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^{2}$ is $-0.4$, which is negative, so the graph of $P$ is a parabola that opens downward and its vertex gives the greatest profit.\nStep 2: Complete the square to write the function in vertex form: $P(x) = -0.4(x^{2} - 80x) - 340 = -0.4\\left[(x - 40)^{2} - 1{,}600\\right] - 340 = -0.4(x - 40)^{2} + 640 - 340$, so $P(x) = -0.4(x - 40)^{2} + 300$.\nStep 3: The squared term is never negative, so $P(x)$ is greatest when $x = 40$, where $P(40) = 300$. Check against the table: $30$ and $50$ are each $10$ from $40$, and both give $260$, which is $0.4(10)^{2} = 40$ less than $300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): this is the price, in dollars, at which the greatest profit occurs. The question asks for the profit at that price.\n* Choice B ($260$): this is the greatest profit in the table, but the table has no entry for $x = 40$. A table can skip the vertex.\n* Choice D ($340$): the constant term is $-340$, the value of $P(0)$, not a maximum. Every profit in the table is already greater than that.\n\n**Test Day Takeaway:** For a parabola that opens downward, the maximum is the $y$-coordinate of the vertex: find the axis of symmetry from $-\\frac{b}{2a}$ or from a symmetric pair of table values, then substitute.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$, point $D$ lies on $\\overline{AB}$ and point $E$ lies on $\\overline{AC}$ such that $\\overline{DE}$ is parallel to $\\overline{BC}$. If $AD = 12$, $DB = 8$, and $BC = m$, which expression represents the length of $\\overline{DE}$?",
  choices: [
    // distractor: uses DB/AB = 8/20 = 2/5, scaling by the lower piece of AB instead of the piece from the vertex A
    { id: "A", text: "$\\frac{2m}{5}$" },
    { id: "B", text: "$\\frac{3m}{5}$" },
    // distractor: uses AD/DB = 12/8 = 3/2, comparing the two pieces of AB rather than a piece to the whole side
    { id: "C", text: "$\\frac{3m}{2}$" },
    // distractor: inverts the scale factor, using AB/AD = 20/12 = 5/3 and making DE longer than BC
    { id: "D", text: "$\\frac{5m}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Since $\\overline{DE} \\parallel \\overline{BC}$, triangle $ADE$ is similar to triangle $ABC$. With $AB = 12 + 8 = 20$, each side of triangle $ADE$ is $\\frac{12}{20} = \\frac{3}{5}$ of the corresponding side of triangle $ABC$, so $DE = \\frac{3m}{5}$.\n\n**The Full Solution:**\nStep 1: Because $\\overline{DE}$ is parallel to $\\overline{BC}$, angle $ADE$ and angle $ABC$ are corresponding angles and are congruent, and the two triangles share angle $A$. By angle-angle similarity, triangle $ADE$ is similar to triangle $ABC$, with $D$ corresponding to $B$ and $E$ corresponding to $C$.\nStep 2: Side $\\overline{AD}$ corresponds to side $\\overline{AB}$, and $AB = AD + DB = 12 + 8 = 20$. The ratio of corresponding sides is $\\frac{AD}{AB} = \\frac{12}{20} = \\frac{3}{5}$.\nStep 3: Side $\\overline{DE}$ corresponds to side $\\overline{BC}$, so $\\frac{DE}{BC} = \\frac{3}{5}$ and $DE = \\frac{3}{5}m = \\frac{3m}{5}$. Check with $m = 20$: $DE = 12$, which is shorter than $BC$, as it must be ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2m}{5}$): uses $\\frac{DB}{AB} = \\frac{8}{20}$. The smaller triangle has vertex $A$, so its scale factor uses $AD$, not $DB$.\n* Choice C ($\\frac{3m}{2}$): uses $\\frac{AD}{DB} = \\frac{12}{8}$, a ratio of the two pieces of $\\overline{AB}$. Similarity compares a side of the smaller triangle with the whole corresponding side of the larger one.\n* Choice D ($\\frac{5m}{3}$): inverts the ratio to $\\frac{AB}{AD} = \\frac{20}{12}$, which would make $DE$ longer than $BC$.\n\n**Test Day Takeaway:** With a segment parallel to one side of a triangle, compare a side of the smaller triangle with the whole corresponding side of the larger triangle, and check that the parallel segment comes out shorter.",
  skills: ["similar-triangles"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 3 — Math Module 2 (22 questions), hard track.
// Official-calibration recreation (2026-08-31). Wavy shape kept from the
// blueprint: easy at Q1, Q3, Q19 (mid/late breather); medium at Q2, Q4, Q5,
// Q7, Q10, Q11, Q12; hard everywhere else, Q21/Q22 hard closers.
// Q1-5 warm-ups are 2+ steps or carry a trap (no one-formula plug-ins):
// Q1 missing-LEG Pythagorean with the add-squares trap + surd simplification,
// Q2 map-scale proportion + km conversion, Q3 inequality with a sign flip,
// Q4 mean read off a bar graph, Q5 unequal-denominator fraction equation.
// Diagram items: Q4 barChart, Q10 quadraticVertex, Q13 table, Q20 rightTriangle.
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Triangle $ABC$ is similar to triangle $DEF$, where $AB$ corresponds to $DE$. The area of triangle $DEF$ is $81$ square units. What is the area, in square units, of triangle $ABC$?",
  diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["12", "", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["18", "", ""] }, figureNote: true } },
  choices: [
    { id: "A", text: "$36$" },
    // distractor: applies the length ratio 2/3 to the area without squaring it: 81 x 2/3 = 54
    { id: "B", text: "$54$" },
    // distractor: uses the length ratio upside down and unsquared: 81 x 3/2 = 121.5
    { id: "C", text: "$121.5$" },
    // distractor: squares the length ratio but inverts it: 81 x 9/4 = 182.25
    { id: "D", text: "$182.25$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The scale factor from $DEF$ to $ABC$ is $\\frac{12}{18} = \\frac{2}{3}$, so the areas are in the ratio $\\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$, and $\\frac{4}{9}(81) = 36$.\n\n**The Full Solution:**\nStep 1: Side $AB$, of length $12$, corresponds to side $DE$, of length $18$. So every length in triangle $ABC$ is $\\frac{12}{18} = \\frac{2}{3}$ of the corresponding length in triangle $DEF$.\nStep 2: The areas of similar figures are in the ratio of the square of the scale factor: $\\left(\\frac{2}{3}\\right)^{2} = \\frac{4}{9}$.\nStep 3: The area of triangle $ABC$ is $\\frac{4}{9}(81) = 36$ square units. Check: $\\frac{36}{81} = \\frac{4}{9}$, which is $\\left(\\frac{2}{3}\\right)^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($54$): multiplies the area by the length ratio $\\frac{2}{3}$ without squaring it. Area depends on two dimensions, so the ratio must be squared.\n* Choice C ($121.5$): uses the ratio upside down, $\\frac{3}{2}$, and does not square it. Triangle $ABC$ is the smaller triangle, so its area must be less than $81$.\n* Choice D ($182.25$): squares the ratio but inverts it, computing $\\frac{9}{4}(81) = 182.25$, which is the area of a triangle larger than $DEF$.\n\n**Test Day Takeaway:** For similar figures, lengths scale by $k$ and areas scale by $k^{2}$; set up the ratio as (unknown triangle) over (known triangle) so the direction is right.",
  skills: ["similar-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The number of visitors to a museum decreased from $6{,}000$ in June to $4{,}800$ in July. If the number decreased by the same percentage from July to August, how many visitors did the museum have in August?",
  choices: [
    // distractor: reports the size of the July-to-August decrease, 0.20 x 4800 = 960, not the August total
    { id: "A", text: "$960$" },
    // distractor: subtracts the same number of visitors (1,200) instead of the same percentage: 4800 - 1200 = 3600
    { id: "B", text: "$3{,}600$" },
    { id: "C", text: "$3{,}840$" },
    // distractor: increases the July total by 20% instead of decreasing it: 1.20 x 4800 = 5760
    { id: "D", text: "$5{,}760$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** July is $\\frac{4{,}800}{6{,}000} = 0.80$ of June, a $20\\%$ decrease, so August is $0.80(4{,}800) = 3{,}840$.\n\n**The Full Solution:**\nStep 1: From June to July the number fell by $6{,}000 - 4{,}800 = 1{,}200$ visitors, which is $\\frac{1{,}200}{6{,}000} = 0.20$, or $20\\%$, of the June number.\nStep 2: A $20\\%$ decrease leaves $100\\% - 20\\% = 80\\%$ of the starting number, so the multiplier for each month is $0.80$.\nStep 3: Apply the same multiplier to July: $0.80(4{,}800) = 3{,}840$. Check: the drop from July to August is $4{,}800 - 3{,}840 = 960$, and $\\frac{960}{4{,}800} = 0.20$, the same $20\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($960$): this is the number of visitors lost from July to August, not the number of visitors in August.\n* Choice B ($3{,}600$): subtracts the same $1{,}200$ visitors again. A $1{,}200$-visitor drop from $4{,}800$ is a $25\\%$ decrease, not $20\\%$.\n* Choice D ($5{,}760$): multiplies by $1.20$, which is a $20\\%$ increase rather than a decrease.\n\n**Test Day Takeaway:** \"The same percentage\" means the same multiplier, not the same amount; find the multiplier from the first change and apply it to the most recent value.",
  skills: ["percent-change"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\frac{3}{4}(8x - 20) = 2x + 21$\nWhat value of $x$ is the solution to the given equation?",
  choices: [
    // distractor: subtracts 15 from 21 instead of adding it when isolating the x-term: 4x = 6, so x = 3/2
    { id: "A", text: "$\\frac{3}{2}$" },
    // distractor: adds 2x to both sides instead of subtracting it: 8x = 36, so x = 9/2
    { id: "B", text: "$\\frac{9}{2}$" },
    { id: "C", text: "$9$" },
    // distractor: multiplies only 8x by 3/4 and leaves -20 unchanged: 6x - 20 = 2x + 21, so x = 41/4
    { id: "D", text: "$\\frac{41}{4}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Distributing gives $6x - 15 = 2x + 21$, so $4x = 36$ and $x = 9$.\n\n**The Full Solution:**\nStep 1: Distribute $\\frac{3}{4}$ to both terms in the parentheses: $\\frac{3}{4}(8x) = 6x$ and $\\frac{3}{4}(-20) = -15$, so the equation becomes $6x - 15 = 2x + 21$.\nStep 2: Subtract $2x$ from both sides and add $15$ to both sides: $4x = 36$.\nStep 3: Divide both sides by $4$: $x = 9$. Check: the left side is $\\frac{3}{4}(72 - 20) = \\frac{3}{4}(52) = 39$, and the right side is $2(9) + 21 = 39$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{2}$): subtracts $15$ instead of adding it, getting $4x = 21 - 15 = 6$.\n* Choice B ($\\frac{9}{2}$): adds $2x$ to both sides instead of subtracting it, getting $8x = 36$.\n* Choice D ($\\frac{41}{4}$): multiplies only $8x$ by $\\frac{3}{4}$, leaving $6x - 20 = 2x + 21$ and $4x = 41$.\n\n**Test Day Takeaway:** A fraction in front of parentheses multiplies every term inside; distribute fully, then collect the variable terms on one side with opposite operations.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$38$, $41$, $43$, $44$, $46$, $47$, $49$, $152$\nBy how much does the mean of the data shown exceed the median of the data shown?",
  choices: [
    // distractor: leaves 152 out of the mean, comparing the median 45 with 308/7 = 44
    { id: "A", text: "$1$" },
    { id: "B", text: "$12.5$" },
    // distractor: uses the fourth value, 44, as the median instead of averaging the two middle values: 57.5 - 44 = 13.5
    { id: "C", text: "$13.5$" },
    // distractor: compares the largest value with the median instead of the mean: 152 - 45 = 107
    { id: "D", text: "$107$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The sum is $460$, so the mean is $\\frac{460}{8} = 57.5$; the median is $\\frac{44 + 46}{2} = 45$, and $57.5 - 45 = 12.5$.\n\n**The Full Solution:**\nStep 1: Add the eight values: $38 + 41 + 43 + 44 + 46 + 47 + 49 + 152 = 460$. The mean is $\\frac{460}{8} = 57.5$.\nStep 2: The values are already in order. With eight values, the median is the average of the fourth and fifth values: $\\frac{44 + 46}{2} = 45$.\nStep 3: The mean exceeds the median by $57.5 - 45 = 12.5$. Check: the seven values other than $152$ sum to $308$, and $308 + 152 = 460$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): leaves $152$ out of the mean, computing $\\frac{308}{7} = 44$, and compares it with the median. The question asks about all the data shown.\n* Choice C ($13.5$): uses $44$ alone as the median. An even number of values has two middle values, which must be averaged.\n* Choice D ($107$): subtracts the median from the largest value, $152 - 45$, instead of from the mean.\n\n**Test Day Takeaway:** One very large value pulls the mean up but barely moves the median; compute both from the full list, and average the two middle values when the count is even.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $\\ell$ passes through the points $(-2, 19)$ and $(6, -21)$. If the point $(k, k)$ lies on line $\\ell$, what is the value of $k$?",
  correctAnswer: "1.5",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~40s):** The slope is $\\frac{-21 - 19}{6 - (-2)} = -5$, so line $\\ell$ is $y = -5x + 9$; setting $y = x = k$ gives $k = -5k + 9$, so $k = 1.5$.\n\n**The Full Solution:**\nStep 1: Find the slope: $\\frac{-21 - 19}{6 - (-2)} = \\frac{-40}{8} = -5$.\nStep 2: Use the point $(-2, 19)$: $y - 19 = -5(x + 2)$, so $y = -5x + 9$.\nStep 3: The point $(k, k)$ has equal coordinates, so $k = -5k + 9$. Adding $5k$ to both sides gives $6k = 9$, so $k = 1.5$. Check: $-5(1.5) + 9 = 1.5$, and the line also contains $(6, -21)$ because $-5(6) + 9 = -21$ ✓\n\n**Common Mistakes:**\n* $-7.25$: flips the sign of the slope to $5$, which gives the line $y = 5x + 29$ and the equation $k = 5k + 29$.\n* $-2.25$: subtracts $5k$ from both sides instead of adding it, getting $-4k = 9$.\n* $9$: reports the $y$-intercept of the line instead of solving for $k$.\n\n**Test Day Takeaway:** A point written as $(k, k)$ means $x = y$; write the line's equation from the two points first, then substitute $k$ for both coordinates and solve.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f$ is a linear function. If $f(t) = \\frac{1}{2}f(4)$, what is the value of $t$?",
  diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["5", "210"], ["12", "168"], ["25", "90"]] } },
  correctAnswer: "22",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~40s):** From $(5, 210)$ to $(12, 168)$ the output falls by $6$ for each increase of $1$ in $x$, so $f(x) = 240 - 6x$. Then $f(4) = 216$, half of $216$ is $108$, and $240 - 6t = 108$ gives $t = 22$.\n\n**The Full Solution:**\nStep 1: Find the slope. Between the first two rows, $f(x)$ changes by $168 - 210 = -42$ while $x$ changes by $12 - 5 = 7$, so the slope is $-6$. The third row agrees: $\\frac{90 - 168}{25 - 12} = \\frac{-78}{13} = -6$.\nStep 2: Write the function. Using $(5, 210)$: $f(x) = 210 - 6(x - 5) = 240 - 6x$. So $f(4) = 240 - 24 = 216$, and $\\frac{1}{2}f(4) = 108$.\nStep 3: Solve $240 - 6t = 108$: $6t = 132$, so $t = 22$. Check: $f(22) = 240 - 132 = 108$, which is half of $216$ ✓\n\n**Common Mistakes:**\n* $108$: reports the value of $f(t)$ instead of the input $t$.\n* $18$: leaves out the $240$ and solves $6t = 108$ instead of $240 - 6t = 108$.\n* $2$: halves the input, computing $\\frac{4}{2}$, rather than halving the output $f(4)$.\n\n**Test Day Takeaway:** $\\frac{1}{2}f(4)$ means half of the output at $x = 4$; turn the table into a rule, evaluate at the given input, and only then take half.",
  skills: ["function-evaluation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $y = 1.5x + 9$ is a linear model for the height $y$, in centimeters, of a plant $x$ days after it sprouts. Which of the following is the best interpretation of the model in this context?",
  choices: [
    // distractor: uses the daily increase, 1.5 centimeters, as the weekly increase; x is measured in days
    { id: "A", text: "The predicted height of the plant increases by $1.5$ centimeters each week." },
    // distractor: uses the constant 9, the predicted height when the plant sprouts, as the weekly increase
    { id: "B", text: "The predicted height of the plant increases by $9$ centimeters each week." },
    { id: "C", text: "The predicted height of the plant increases by $10.5$ centimeters each week." },
    // distractor: gives the predicted height after 7 days, 1.5(7) + 9 = 19.5, instead of the increase over 7 days
    { id: "D", text: "The predicted height of the plant increases by $19.5$ centimeters each week." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The slope, $1.5$, is the predicted increase in height each day, so each week the predicted height increases by $7(1.5) = 10.5$ centimeters.\n\n**The Full Solution:**\nStep 1: In $y = 1.5x + 9$, the slope is $1.5$: for each increase of $1$ in $x$, one more day, the predicted height increases by $1.5$ centimeters.\nStep 2: A week is $7$ days, so over a week $x$ increases by $7$ and the predicted height increases by $7(1.5)$.\nStep 3: $7(1.5) = 10.5$, so the predicted height increases by $10.5$ centimeters each week. Check: from day $0$ to day $7$ the prediction goes from $9$ to $1.5(7) + 9 = 19.5$, and $19.5 - 9 = 10.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: gives the increase per day; $x$ counts days, not weeks.\n* Choice B: uses $9$, the predicted height on the day the plant sprouts, as a rate.\n* Choice D: gives the predicted height on day $7$, which includes the starting height of $9$ centimeters.\n\n**Test Day Takeaway:** The slope is the predicted change for an increase of $1$ in $x$; for a different unit of time, multiply the slope by the number of $x$-units in that unit.",
  skills: ["slope-from-points", "scatterplots"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$-2x^{2} + 16x = k$\nIn the given equation, $k$ is an integer constant. If the equation has two distinct real solutions, what is the greatest possible value of $k$?",
  choices: [
    // distractor: divides the left side by 2 but not k, solving x^2 - 8x + k = 0 to get 64 - 4k > 0, so k < 16
    { id: "A", text: "$15$" },
    { id: "B", text: "$31$" },
    // distractor: gives the value at which the discriminant equals 0, where the equation has exactly one solution, not two
    { id: "C", text: "$32$" },
    // distractor: drops the leading coefficient 2 from 4ac, solving 256 - 4k > 0 to get k < 64
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Rewriting as $2x^{2} - 16x + k = 0$, two distinct real solutions require $(-16)^{2} - 4(2)(k) > 0$, so $256 - 8k > 0$ and $k < 32$. The greatest integer less than $32$ is $31$.\n\n**The Full Solution:**\nStep 1: Move every term to one side: $2x^{2} - 16x + k = 0$, so $a = 2$, $b = -16$, and $c = k$.\nStep 2: A quadratic equation has two distinct real solutions when its discriminant is positive: $(-16)^{2} - 4(2)(k) > 0$, which is $256 - 8k > 0$, so $k < 32$.\nStep 3: Since $k$ is an integer less than $32$, the greatest possible value is $31$. Check: for $k = 31$ the discriminant is $256 - 248 = 8 > 0$, and for $k = 32$ it is $0$, which gives only one solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): divides $-2x^{2} + 16x$ by $-2$ but leaves $k$ alone, which changes the equation and gives $k < 16$.\n* Choice C ($32$): makes the discriminant equal to $0$. At $k = 32$ the equation has exactly one real solution, not two.\n* Choice D ($63$): leaves the $2$ out of $4ac$, getting $256 - 4k > 0$ and $k < 64$.\n\n**Test Day Takeaway:** \"Two distinct real solutions\" means $b^{2} - 4ac > 0$ with a strict inequality; write the equation in standard form first so $a$, $b$, and $c$ carry their signs and coefficients.",
  skills: ["discriminant-analysis"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$4x - ky = 18$\n$6x - 15y = 30$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
  choices: [
    // distractor: uses the ratio of the constant terms, 18/30 = 3/5, instead of the ratio of the x-coefficients, computing 15 x 3/5 = 9
    { id: "A", text: "$9$" },
    { id: "B", text: "$10$" },
    // distractor: copies the coefficient of y from the second equation without scaling it by 4/6
    { id: "C", text: "$15$" },
    // distractor: inverts the scale factor, computing 15 x 6/4 = 22.5
    { id: "D", text: "$22.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No solution means the $x$- and $y$-coefficients are proportional, so $\\frac{4}{6} = \\frac{k}{15}$ and $k = 10$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct, so the coefficients of $x$ and $y$ must be in the same ratio while the constants are not.\nStep 2: The ratio of the $x$-coefficients is $\\frac{4}{6} = \\frac{2}{3}$, so $\\frac{k}{15} = \\frac{2}{3}$ and $k = 10$.\nStep 3: Confirm the lines are distinct. Multiplying the second equation by $\\frac{2}{3}$ gives $4x - 10y = 20$, while the first equation is $4x - 10y = 18$. The same left side cannot equal both $18$ and $20$, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): uses the ratio of the constants, $\\frac{18}{30} = \\frac{3}{5}$, computing $15 \\cdot \\frac{3}{5} = 9$. The constants are the terms that must break the ratio; with $k = 9$, the ratios $\\frac{4}{6}$ and $\\frac{9}{15}$ differ, so the system has exactly one solution.\n* Choice C ($15$): matches the $y$-coefficient of the second equation without scaling it, but the $x$-coefficients $4$ and $6$ are not equal.\n* Choice D ($22.5$): uses the ratio upside down, computing $15 \\cdot \\frac{6}{4}$.\n\n**Test Day Takeaway:** For no solution, match the ratio of the $x$- and $y$-coefficients and check that the constants break the ratio; matching the constants too would give infinitely many solutions.",
  skills: ["system-solution-types"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{x^{2} - 25}{x + 5} = k$\nIn the given equation, $k$ is a constant. For what value of $k$ does the equation have no solution?",
  choices: [
    { id: "A", text: "$-10$" },
    // distractor: reports the excluded value of x, -5, instead of the value of k
    { id: "B", text: "$-5$" },
    // distractor: evaluates the numerator at the excluded value x = -5, getting 0, instead of evaluating the simplified expression x - 5
    { id: "C", text: "$0$" },
    // distractor: reports the solution x = 5 of the equation when k = 0 instead of a value of k
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** For $x \\neq -5$, the left side simplifies to $x - 5$, so $x = k + 5$. That fails only when $k + 5 = -5$, so $k = -10$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $\\frac{(x - 5)(x + 5)}{x + 5}$. For every $x$ except $x = -5$, this equals $x - 5$; at $x = -5$ the expression is undefined.\nStep 2: The equation becomes $x - 5 = k$ with $x \\neq -5$, so its only possible solution is $x = k + 5$.\nStep 3: This solution is not allowed when $k + 5 = -5$, which happens when $k = -10$. Check: for $k = -10$, the only candidate is $x = -5$, which makes the denominator $0$, so there is no solution; for $k = 0$, $x = 5$ works because $\\frac{25 - 25}{10} = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): this is the value of $x$ that is excluded, not the value of $k$.\n* Choice C ($0$): evaluates the numerator at $x = -5$. The value of $k$ comes from the simplified expression $x - 5$ at $x = -5$, which is $-10$.\n* Choice D ($5$): this is the solution of the equation when $k = 0$, not a value of $k$.\n\n**Test Day Takeaway:** When a rational expression simplifies, the canceled factor still excludes a value of $x$; the equation has no solution exactly when the simplified equation's only solution is that excluded value.",
  skills: ["rational-expressions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = f(x)$ is shown, where $f$ is a linear function. The graph of the linear function $g$ is parallel to the graph of $y = f(x)$ and has a $y$-intercept of $(0, 60)$. Which equation defines $g$?",
  diagram: { type: "linearGraph", params: { slope: -4, yIntercept: 24, xRange: [0, 6], yRange: [0, 24], xTickInterval: 1, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 24], [6, 0]] } },
  choices: [
    // distractor: uses the x-intercept of the graph, 6, as the slope instead of the slope -4
    { id: "A", text: "$g(x) = -6x + 60$" },
    // distractor: keeps the y-intercept of the graph shown, 24, instead of the given y-intercept 60
    { id: "B", text: "$g(x) = -4x + 24$" },
    { id: "C", text: "$g(x) = -4x + 60$" },
    // distractor: drops the negative sign on the slope
    { id: "D", text: "$g(x) = 4x + 60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(0, 24)$ and $(6, 0)$, so its slope is $\\frac{0 - 24}{6 - 0} = -4$; a parallel line with $y$-intercept $(0, 60)$ is $g(x) = -4x + 60$.\n\n**The Full Solution:**\nStep 1: Read two points from the graph: $(0, 24)$ and $(6, 0)$. The slope is $\\frac{0 - 24}{6 - 0} = -4$.\nStep 2: Parallel lines have the same slope, so the graph of $g$ also has slope $-4$.\nStep 3: With slope $-4$ and $y$-intercept $(0, 60)$, $g(x) = -4x + 60$. Check: $g(0) = 60$, and $g(6) - g(0) = -24$, the same change the graph shown has from $x = 0$ to $x = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = -6x + 60$): uses the $x$-intercept, $6$, as the size of the slope. The slope is the change in $y$ divided by the change in $x$, $\\frac{-24}{6} = -4$.\n* Choice B ($g(x) = -4x + 24$): this is the equation of the graph shown; it does not have a $y$-intercept of $(0, 60)$.\n* Choice D ($g(x) = 4x + 60$): drops the negative sign. The graph shown falls from left to right, so its slope is negative.\n\n**Test Day Takeaway:** Parallel means equal slopes; read the slope from two clear points on the graph, then pair it with the new $y$-intercept.",
  skills: ["slope-intercept-form"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the results of a study in which $240$ participants each received one of two doses of a medication. If one of the participants who received Dose B is selected at random, what is the probability of selecting a participant whose symptoms improved?",
  diagram: { type: "twoWayTable", params: { headers: ["", "Improved", "Did not improve", "Total"], rows: [["Dose A", "84", "36", "120"], ["Dose B", "66", "54", "120"], ["Total", "150", "90", "240"]] } },
  choices: [
    // distractor: divides by all 240 participants instead of the 120 who received Dose B: 66/240
    { id: "A", text: "$\\frac{11}{40}$" },
    // distractor: divides by the 150 participants who improved, reversing the condition: 66/150
    { id: "B", text: "$\\frac{11}{25}$" },
    // distractor: uses the 54 Dose B participants whose symptoms did not improve: 54/120
    { id: "C", text: "$\\frac{9}{20}$" },
    { id: "D", text: "$\\frac{11}{20}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Only the Dose B row matters: $66$ of its $120$ participants improved, and $\\frac{66}{120} = \\frac{11}{20}$.\n\n**The Full Solution:**\nStep 1: The selection is made only from participants who received Dose B, so the Dose B row total, $120$, is the denominator.\nStep 2: In the Dose B row, $66$ participants had symptoms that improved, so $66$ is the numerator.\nStep 3: The probability is $\\frac{66}{120} = \\frac{11}{20}$. Check: the Dose B row adds up, since $66 + 54 = 120$, and $\\frac{11}{20} = 0.55$ is between $0$ and $1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{40}$): divides by all $240$ participants. That is the probability that a randomly chosen participant both received Dose B and improved.\n* Choice B ($\\frac{11}{25}$): divides by the $150$ participants who improved, which answers a different question: of those who improved, what fraction received Dose B.\n* Choice C ($\\frac{9}{20}$): uses the $54$ Dose B participants whose symptoms did not improve.\n\n**Test Day Takeaway:** The group you select from sets the denominator; circle that row or column of the table before you divide.",
  skills: ["conditional-probability", "two-way-table"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A drone climbs at a constant rate. It is $86$ meters above the ground $30$ seconds after a timer is started and $284$ meters above the ground $2.5$ minutes after the timer is started. At what rate, in meters per minute, does the drone climb?",
  choices: [
    // distractor: leaves both times in seconds, giving 198/120 = 1.65, which is meters per second
    { id: "A", text: "$1.65$" },
    { id: "B", text: "$99$" },
    // distractor: divides the later height by the later time, 284/2.5, ignoring the first reading
    { id: "C", text: "$113.6$" },
    // distractor: divides the later height rather than the change in height by the 2 elapsed minutes: 284/2
    { id: "D", text: "$142$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $30$ seconds is $0.5$ minute, so the rate is $\\frac{284 - 86}{2.5 - 0.5} = \\frac{198}{2} = 99$ meters per minute.\n\n**The Full Solution:**\nStep 1: Put both times in minutes: $30$ seconds is $0.5$ minute, so the readings are $(0.5, 86)$ and $(2.5, 284)$.\nStep 2: The height changes by $284 - 86 = 198$ meters while the time changes by $2.5 - 0.5 = 2$ minutes.\nStep 3: The rate is $\\frac{198}{2} = 99$ meters per minute. Check: starting from $86$ meters at $0.5$ minute, $86 + 99(2) = 284$ meters at $2.5$ minutes ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.65$): converts $2.5$ minutes to $150$ seconds and divides $198$ by $120$ seconds. That is the rate in meters per second, not meters per minute.\n* Choice C ($113.6$): divides $284$ by $2.5$, which assumes the drone was at ground level when the timer started.\n* Choice D ($142$): uses the correct elapsed time of $2$ minutes but divides the final height instead of the change in height.\n\n**Test Day Takeaway:** A rate from two readings is change over change; convert both times to the unit the question asks for before you subtract.",
  skills: ["slope-from-points"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{\\sqrt[3]{x^{7}}}{x^{k}} = \\sqrt{x^{3}}$\nThe given equation is true for all positive values of $x$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "5/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{5}{6}$.**\n\n**The Fast Way (~40s):** In exponent form the equation is $x^{\\frac{7}{3} - k} = x^{\\frac{3}{2}}$, so $\\frac{7}{3} - k = \\frac{3}{2}$ and $k = \\frac{14}{6} - \\frac{9}{6} = \\frac{5}{6}$.\n\n**The Full Solution:**\nStep 1: Rewrite each radical as a power: $\\sqrt[3]{x^{7}} = x^{\\frac{7}{3}}$ and $\\sqrt{x^{3}} = x^{\\frac{3}{2}}$.\nStep 2: Divide powers of the same base by subtracting exponents: $\\frac{x^{\\frac{7}{3}}}{x^{k}} = x^{\\frac{7}{3} - k}$. For the equation to hold for all positive $x$, the exponents must match: $\\frac{7}{3} - k = \\frac{3}{2}$.\nStep 3: Solve: $k = \\frac{7}{3} - \\frac{3}{2} = \\frac{14}{6} - \\frac{9}{6} = \\frac{5}{6}$. Check: $\\frac{7}{3} - \\frac{5}{6} = \\frac{14}{6} - \\frac{5}{6} = \\frac{9}{6} = \\frac{3}{2}$ ✓\n\n**Common Mistakes:**\n* $\\frac{23}{6}$: adds the exponents, solving $k = \\frac{7}{3} + \\frac{3}{2}$, as if the $x^{k}$ were multiplied rather than divided.\n* $\\frac{5}{3}$: reads $\\sqrt{x^{3}}$ as $x^{\\frac{2}{3}}$, putting the root index in the numerator, which gives $k = \\frac{7}{3} - \\frac{2}{3}$.\n* $-\\frac{5}{6}$: subtracts in the wrong order, computing $\\frac{3}{2} - \\frac{7}{3}$.\n\n**Test Day Takeaway:** The $n$th root of $x^{m}$ is $x^{\\frac{m}{n}}$ with the power on top and the root index below; once both sides are single powers of $x$, set the exponents equal.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$y = -3x^{2} + 90x$\n$y = c$\nIn the given system of equations, $c$ is a constant. If the system has exactly one real solution, what is the value of $c$?",
  correctAnswer: "675",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $675$.**\n\n**The Fast Way (~40s):** Substituting gives $-3x^{2} + 90x - c = 0$, which has exactly one real solution when $90^{2} - 4(-3)(-c) = 0$, so $8{,}100 - 12c = 0$ and $c = 675$.\n\n**The Full Solution:**\nStep 1: Substitute $y = c$ into the first equation: $c = -3x^{2} + 90x$, or $-3x^{2} + 90x - c = 0$. Each real solution $x$ of this equation gives one solution of the system.\nStep 2: The quadratic has exactly one real solution when its discriminant is $0$. Here $a = -3$, $b = 90$, and the constant term is $-c$, so $90^{2} - 4(-3)(-c) = 0$, which is $8{,}100 - 12c = 0$.\nStep 3: Solve: $12c = 8{,}100$, so $c = 675$. Check: $-3x^{2} + 90x - 675 = -3(x^{2} - 30x + 225) = -3(x - 15)^{2}$, which equals $0$ only at $x = 15$, so the line $y = 675$ touches the parabola only at its vertex $(15, 675)$ ✓\n\n**Common Mistakes:**\n* $15$: finds the $x$-coordinate of the vertex and stops, instead of the $y$-value $c$.\n* $2025$: leaves the $-3$ out of $4ac$, solving $8{,}100 - 4c = 0$.\n* $-675$: loses a negative sign in $4(-3)(-c)$, getting $8{,}100 + 12c = 0$.\n\n**Test Day Takeaway:** A horizontal line meets a parabola exactly once only at the vertex; either set the discriminant to $0$ or evaluate the function at $x = -\\frac{b}{2a}$, and the two methods should agree.",
  skills: ["discriminant-analysis"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "For the quadratic function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. What is the sum of the solutions to $g(x) = 0$?",
  diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["0", "36"], ["2", "0"], ["8", "36"]] } },
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Since $g(0) = g(8)$, the graph of $y = g(x)$ is symmetric about $x = 4$, so the solutions to $g(x) = 0$ are the same distance from $4$ on each side and their sum is $2 \\times 4 = 8$.\n\n**The Full Solution:**\nStep 1: The graph of a quadratic function is symmetric about the vertical line through its vertex. Because $g(0) = 36$ and $g(8) = 36$, that line is halfway between $0$ and $8$: $x = 4$.\nStep 2: The table shows $g(2) = 0$, so $2$ is one solution. It is $2$ units to the left of $x = 4$, so the other solution is $2$ units to the right: $x = 6$.\nStep 3: The sum of the solutions is $2 + 6 = 8$. Check: $g(x) = 3(x - 2)(x - 6)$ fits the table, since $3(-2)(-6) = 36$, $3(0)(-4) = 0$, and $3(6)(2) = 36$ ✓\n\n**Common Mistakes:**\n* $2$: reports the one solution shown in the table instead of the sum of both solutions.\n* $4$: finds the line of symmetry, $x = 4$, and stops before using it to find the other solution.\n* $10$: treats $x = 8$ as a solution and adds $2 + 8$, but $g(8) = 36$, not $0$.\n\n**Test Day Takeaway:** Two inputs with the same output sit the same distance from the vertex, so the axis of symmetry is their midpoint; the two zeros of a quadratic always add to twice that value.",
  skills: ["quadratic-factoring"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A florist sold $96$ flowers: roses, tulips, and lilies. The florist sold $4$ times as many roses as tulips and $6$ more lilies than tulips. How many tulips did the florist sell?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~30s):** If $t$ tulips were sold, then $4t$ roses and $t + 6$ lilies were sold, so $t + 4t + (t + 6) = 96$, which gives $6t = 90$ and $t = 15$.\n\n**The Full Solution:**\nStep 1: Let $t$ be the number of tulips sold. Then the number of roses is $4t$ and the number of lilies is $t + 6$.\nStep 2: The three kinds of flowers make up all $96$ flowers: $t + 4t + (t + 6) = 96$, or $6t + 6 = 96$.\nStep 3: Subtract $6$ and divide by $6$: $6t = 90$, so $t = 15$. Check: $15$ tulips, $60$ roses, and $21$ lilies give $15 + 60 + 21 = 96$ flowers ✓\n\n**Common Mistakes:**\n* $16$: writes the equation without the $6$ extra lilies, solving $6t = 96$.\n* $18$: leaves out the lilies' own count of $t$, solving $5t + 6 = 96$.\n* $60$: solves correctly but reports the number of roses, $4t$, instead of the number of tulips.\n\n**Test Day Takeaway:** Name the quantity that every other quantity is described in terms of, write each count as an expression in that variable, and set the sum equal to the total.",
  skills: ["word-problem-to-equation"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$y = 6x - 5$\nIn the $xy$-plane, line $j$ is parallel to the graph of the given equation and has a $y$-intercept of $(0, 2)$. Which equation defines line $j$?",
  choices: [
    // distractor: changes the sign of the slope; parallel lines have the same slope
    { id: "A", text: "$y = -6x + 2$" },
    // distractor: uses the y-intercept 2 as the slope and keeps the given line's y-intercept
    { id: "B", text: "$y = 2x - 5$" },
    // distractor: gives the equation of the given line itself, which has y-intercept (0, -5), not (0, 2)
    { id: "C", text: "$y = 6x - 5$" },
    { id: "D", text: "$y = 6x + 2$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Line $j$ has the same slope as the given line, $6$, and its $y$-intercept is $(0, 2)$, so $y = 6x + 2$.\n\n**The Full Solution:**\nStep 1: The given equation is in slope-intercept form, $y = mx + b$, so the slope of its graph is $6$.\nStep 2: Parallel lines have the same slope, so line $j$ has slope $6$. Its $y$-intercept is $(0, 2)$, so $b = 2$.\nStep 3: An equation of line $j$ is $y = 6x + 2$. Check: at $x = 0$ the equation gives $y = 2$, and its slope matches the given line's slope ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -6x + 2$): has the right $y$-intercept but the opposite slope. Parallel lines have equal slopes.\n* Choice B ($y = 2x - 5$): swaps the roles of the numbers, using $2$ as the slope and keeping the given line's $y$-intercept.\n* Choice C ($y = 6x - 5$): this is the given line itself. Its $y$-intercept is $(0, -5)$, not $(0, 2)$.\n\n**Test Day Takeaway:** A parallel line keeps the slope and changes only the $y$-intercept: copy $m$, then use the new intercept for $b$.",
  skills: ["writing-parallel-equation"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of the six values $34$, $41$, $47$, $52$, $x$, and $2x$. The mean of the data set is $45$. What is the greatest value in the data set?",
  choices: [
    // distractor: solves for x correctly but reports x rather than the larger value 2x
    { id: "A", text: "$32$" },
    // distractor: names the greatest of the four given numbers without solving for x
    { id: "B", text: "$52$" },
    { id: "C", text: "$64$" },
    // distractor: reports 3x = 96, the sum of the two unknown values, not a single value
    { id: "D", text: "$96$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The six values sum to $6(45) = 270$, so $174 + 3x = 270$, $x = 32$, and the values $x$ and $2x$ are $32$ and $64$. The greatest value is $64$.\n\n**The Full Solution:**\nStep 1: A mean of $45$ for six values means the values sum to $6 \\cdot 45 = 270$.\nStep 2: The four known values sum to $34 + 41 + 47 + 52 = 174$, so $174 + x + 2x = 270$, which gives $3x = 96$ and $x = 32$.\nStep 3: The unknown values are $x = 32$ and $2x = 64$. Since $64$ is greater than $52$, the greatest value in the data set is $64$. Check: $34 + 41 + 47 + 52 + 32 + 64 = 270$, and $\\frac{270}{6} = 45$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): this is $x$, the smaller of the two unknown values.\n* Choice B ($52$): this is the greatest of the four given values, but $2x = 64$ is greater.\n* Choice D ($96$): this is $3x$, the combined value of $x$ and $2x$, not a single value in the data set.\n\n**Test Day Takeaway:** Turn a mean into a total (mean times count) first; after solving, reread the question, because the unknown you solved for is often not the value being asked for.",
  skills: ["calculate-mean"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The measures of the three angles of a triangle are $(2k + 10)^{\\circ}$, $(3k)^{\\circ}$, and $(5k - 30)^{\\circ}$. What is the measure, in degrees, of the largest angle of the triangle?",
  correctAnswer: "70",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~30s):** The angles sum to $180^{\\circ}$, so $10k - 20 = 180$ and $k = 20$; the angles are $50^{\\circ}$, $60^{\\circ}$, and $70^{\\circ}$, and the largest is $70^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The angle measures of a triangle sum to $180^{\\circ}$: $(2k + 10) + 3k + (5k - 30) = 180$.\nStep 2: Combine like terms: $10k - 20 = 180$, so $10k = 200$ and $k = 20$.\nStep 3: Substitute: $2(20) + 10 = 50$, $3(20) = 60$, and $5(20) - 30 = 70$. The largest angle measures $70^{\\circ}$. Check: $50 + 60 + 70 = 180$ ✓\n\n**Common Mistakes:**\n* $20$: reports the value of $k$ instead of an angle measure.\n* $90$: drops the constants $10$ and $-30$, solving $10k = 180$ to get $k = 18$ and a largest angle of $5(18) = 90$.\n* $160$: uses $360^{\\circ}$ as the angle sum, solving $10k - 20 = 360$ to get $k = 38$ and a largest angle of $5(38) - 30 = 160$.\n\n**Test Day Takeaway:** Solve for the variable from the $180^{\\circ}$ sum, then substitute into every expression; the largest coefficient does not always give the largest angle, so compare the actual measures.",
  skills: ["triangle-angle-sum"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A museum charges a fixed price for each adult ticket and a fixed price for each child ticket. The table shows the number of each type of ticket and the total cost for two groups. What is the total cost, in dollars, of $5$ adult tickets and $4$ child tickets?",
  diagram: { type: "dataTable", params: { headers: ["Group", "Adult tickets", "Child tickets", "Total cost (dollars)"], rows: [["Group 1", "14", "9", "915"], ["Group 2", "8", "15", "789"]] } },
  choices: [
    // distractor: prices only the 5 adult tickets, 5 x 48 = 240, and never adds the 4 child tickets
    { id: "A", text: "$240$" },
    // distractor: swaps the two prices, computing 5 x 27 + 4 x 48 = 327
    { id: "B", text: "$327$" },
    { id: "C", text: "$348$" },
    // distractor: multiplies all 9 tickets by the combined price 48 + 27 = 75
    { id: "D", text: "$675$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (~60s):** The table gives $14a + 9c = 915$ and $8a + 15c = 789$; solving gives $a = 48$ and $c = 27$, so $5(48) + 4(27) = 348$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the price of an adult ticket and $c$ the price of a child ticket, in dollars. The two rows of the table give $14a + 9c = 915$ and $8a + 15c = 789$.\nStep 2: Eliminate $a$: multiply the first equation by $4$ and the second by $7$ to get $56a + 36c = 3{,}660$ and $56a + 105c = 5{,}523$. Subtracting gives $69c = 1{,}863$, so $c = 27$. Then $14a + 9(27) = 915$ gives $14a = 672$ and $a = 48$.\nStep 3: The cost of $5$ adult tickets and $4$ child tickets is $5(48) + 4(27) = 240 + 108 = 348$ dollars. Check: $8(48) + 15(27) = 384 + 405 = 789$, which matches the second group ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($240$): finds the cost of the $5$ adult tickets and stops before adding the child tickets.\n* Choice B ($327$): swaps the prices, charging $27$ dollars per adult ticket and $48$ dollars per child ticket.\n* Choice D ($675$): charges every ticket the combined price $48 + 27 = 75$ dollars, which counts each ticket as one adult ticket plus one child ticket.\n\n**Test Day Takeaway:** Each row of the table is one equation; solve for both prices, then build the requested total from the right counts.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$V(t) = 9{,}500(1.0816)^{t}$\nThe function $V$ gives the value, in dollars, of an investment $t$ years after it was made. The function can also be written as $V(t) = 9{,}500\\left(1 + \\frac{k}{100}\\right)^{2t}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** $\\left(1 + \\frac{k}{100}\\right)^{2t} = \\left[\\left(1 + \\frac{k}{100}\\right)^{2}\\right]^{t}$, so $\\left(1 + \\frac{k}{100}\\right)^{2} = 1.0816$, which gives $1 + \\frac{k}{100} = 1.04$ and $k = 4$.\n\n**The Full Solution:**\nStep 1: Rewrite the second form with exponent $t$: $\\left(1 + \\frac{k}{100}\\right)^{2t} = \\left[\\left(1 + \\frac{k}{100}\\right)^{2}\\right]^{t}$.\nStep 2: The two forms are equal for all $t$, so the bases must match: $\\left(1 + \\frac{k}{100}\\right)^{2} = 1.0816$. Taking the positive square root gives $1 + \\frac{k}{100} = 1.04$.\nStep 3: Solve: $\\frac{k}{100} = 0.04$, so $k = 4$. Check: $(1.04)^{2} = 1.0816$, so $9{,}500(1.04)^{2t} = 9{,}500(1.0816)^{t}$ ✓\n\n**Common Mistakes:**\n* $8.16$: reads the $1.0816$ as an $8.16\\%$ growth rate for the exponent $2t$, ignoring that the second form compounds twice as often.\n* $4.08$: halves the $8.16\\%$ instead of taking the square root of $1.0816$.\n* $1.04$: reports the base $1 + \\frac{k}{100}$ instead of $k$.\n\n**Test Day Takeaway:** When the exponent doubles, the base must be the square root of the original base; convert back to a percent only at the end.",
  skills: ["exponential-functions"]
}
      ]
    }
  ]
};

export default practiceTest3;
