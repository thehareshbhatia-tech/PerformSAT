// Practice Test 6 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: art/design, agriculture, medicine, oceanography

export const practiceTest6 = {
  id: "practice-test-6",
  title: "Practice Test 6",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 1 (22 questions)
// Theme: geometry-heavy (similar triangles, circle theorems, coordinate geometry), plus exponentials

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A triangle has angles measuring $47°$, $65°$, and $x°$. What is the value of $x$?",
  choices: [
    { id: "A", text: "$22$" },
    { id: "B", text: "$68$" },
    { id: "C", text: "$78$" },
    { id: "D", text: "$112$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $x = 180 - 47 - 65 = 68$.\n\n**The Full Solution:**\nThe sum of angles in any triangle is $180°$.\n$47 + 65 + x = 180$\n$112 + x = 180$\n$x = 68$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $65 - 47 = 18$, then adds $4$... a random error.\n• Choice C: Computes $180 - 47 - 65$ incorrectly as $78$ (arithmetic slip).\n• Choice D: Computes $47 + 65 = 112$ and stops, giving the sum of the two known angles.\n\n**Test Day Takeaway:** All triangle angles sum to $180°$. Subtract the known angles.",
  skills: ["triangles", "angles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A map uses a scale of $1$ inch $= 15$ miles. Two cities are $4.5$ inches apart on the map. What is the actual distance, in miles, between the two cities?",
  choices: [
    { id: "A", text: "$19.5$" },
    { id: "B", text: "$60$" },
    { id: "C", text: "$67.5$" },
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scale Factor / Unit Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $4.5 \\times 15 = 67.5$ miles.\n\n**The Full Solution:**\nIf $1$ inch represents $15$ miles, then $4.5$ inches represents:\n$4.5 \\times 15 = 67.5$ miles.\n\n**Why the wrong answers are tempting:**\n• Choice A: Adds $15 + 4.5 = 19.5$ instead of multiplying.\n• Choice B: Computes $4 \\times 15 = 60$, ignoring the $0.5$.\n• Choice D: Computes $5 \\times 15 = 75$, rounding $4.5$ up to $5$.\n\n**Test Day Takeaway:** Scale problems are multiplication: map distance × scale factor = actual distance.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $4x - 9 = 23$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$3.5$" },
    { id: "B", text: "$7$" },
    { id: "C", text: "$8$" },
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $4x = 32$, so $x = 8$.\n\n**The Full Solution:**\n$4x - 9 = 23$\n$4x = 23 + 9 = 32$\n$x = \\frac{32}{4} = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{23 - 9}{4} = \\frac{14}{4} = 3.5$ (subtracts $9$ instead of adding).\n• Choice B: Computes $\\frac{23 + 5}{4} = 7$... an arithmetic error.\n• Choice D: Computes $23 - 9 = 14$ but forgets to divide by $4$.\n\n**Test Day Takeaway:** Isolate $x$: add/subtract first, then divide.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The area of a rectangle is $72$ square centimeters. If the length of the rectangle is $12$ cm, what is the width, in centimeters?",
  choices: [
    { id: "A", text: "$4$" },
    { id: "B", text: "$6$" },
    { id: "C", text: "$8$" },
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area of a Rectangle**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** Width $= \\frac{72}{12} = 6$.\n\n**The Full Solution:**\nArea = length × width\n$72 = 12 \\times w$\n$w = \\frac{72}{12} = 6$ cm\n\n**Why the wrong answers are tempting:**\n• Choice A: Might divide $72$ by $18$ or make another arithmetic error.\n• Choice C: Confuses with $\\frac{72}{9} = 8$.\n• Choice D: Subtracts: $72 - 12 = 60$.\n\n**Test Day Takeaway:** If you know area and one dimension, divide area by the known dimension to find the other.",
  skills: ["area"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The value of a certain stock increases by $\\$3$ each week. If the stock is worth $\\$41$ now, what will it be worth in $6$ weeks?",
  choices: [
    { id: "A", text: "$\\$44$" },
    { id: "B", text: "$\\$47$" },
    { id: "C", text: "$\\$59$" },
    { id: "D", text: "$\\$246$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Linear Growth**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $41 + 3(6) = 41 + 18 = 59$.\n\n**The Full Solution:**\nIncrease over $6$ weeks: $3 \\times 6 = 18$ dollars.\nFuture value: $41 + 18 = 59$ dollars.\n\n**Why the wrong answers are tempting:**\n• Choice A: Adds only one week's increase: $41 + 3 = 44$.\n• Choice B: Adds two weeks' increase: $41 + 6 = 47$ (confuses $6$ weeks with $\\$6$).\n• Choice D: Multiplies instead of adding: $41 \\times 6 = 246$.\n\n**Test Day Takeaway:** Linear growth: future value = initial value + rate × time.",
  skills: ["linear-functions", "word-problems"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Two similar triangles have corresponding sides in the ratio $3:5$. If the shorter side of the larger triangle is $20$ cm, what is the corresponding side of the smaller triangle?",
  choices: [
    { id: "A", text: "$8$ cm" },
    { id: "B", text: "$12$ cm" },
    { id: "C", text: "$15$ cm" },
    { id: "D", text: "$33.3$ cm" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangle Side Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Ratio is $3:5$, and the larger triangle's side is $20$. So the smaller triangle's side is $\\frac{3}{5} \\times 20 = 12$.\n\n**The Full Solution:**\nThe ratio $3:5$ means smaller : larger $= 3 : 5$.\nIf the larger triangle's corresponding side is $20$:\n$\\frac{\\text{smaller}}{20} = \\frac{3}{5}$\n$\\text{smaller} = \\frac{3 \\times 20}{5} = \\frac{60}{5} = 12$ cm.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{2}{5} \\times 20 = 8$ using the wrong numerator.\n• Choice C: Computes $\\frac{3}{4} \\times 20 = 15$, using the wrong ratio.\n• Choice D: Computes $\\frac{5}{3} \\times 20 = 33.3$, using the inverse ratio.\n\n**Test Day Takeaway:** With similar figures, set up the ratio carefully: smaller/larger = smaller ratio/larger ratio.",
  skills: ["similar-triangles", "ratios"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In the $xy$-plane, what is the distance between the points $(-3, 4)$ and $(5, -2)$?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$10$" },
    { id: "C", text: "$14$" },
    { id: "D", text: "$\\sqrt{28}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $d = \\sqrt{(5-(-3))^2 + (-2-4)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.\n\n**The Full Solution:**\n$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n$= \\sqrt{(5 - (-3))^2 + (-2 - 4)^2}$\n$= \\sqrt{8^2 + (-6)^2}$\n$= \\sqrt{64 + 36}$\n$= \\sqrt{100} = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $|5 + (-3)| - |(-2) + 4| = 2 - 2 = 0$... or some misguided shortcut.\n• Choice C: Adds the differences without squaring: $8 + 6 = 14$.\n• Choice D: Computes $\\sqrt{(5+3)^2 + (-2+4)^2}$ incorrectly as $\\sqrt{28}$... from a subtraction error.\n\n**Test Day Takeaway:** The distance formula is the Pythagorean theorem in disguise: $d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$.",
  skills: ["coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A circle in the $xy$-plane has the equation $(x - 4)^2 + (y + 1)^2 = 36$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$4$" },
    { id: "B", text: "$6$" },
    { id: "C", text: "$18$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Reading Circle Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $(x-h)^2 + (y-k)^2 = r^2$, so $r^2 = 36$ and $r = 6$.\n\n**The Full Solution:**\nThe standard form of a circle is $(x-h)^2 + (y-k)^2 = r^2$.\nHere $r^2 = 36$, so $r = \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Reads the $h$ value ($4$) from the center instead of finding $r$.\n• Choice C: Divides $36$ by $2$ instead of taking the square root.\n• Choice D: Uses $r^2 = 36$ but reports $r^2$ as the radius.\n\n**Test Day Takeaway:** In $(x-h)^2 + (y-k)^2 = r^2$, the right side is $r^2$, not $r$. Take the square root.",
  skills: ["circle-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "The function $f$ is defined by $f(x) = 800(0.85)^x$. What is the value of $f(0)$?",
  correctAnswer: "800",
  explanation: "**SAT Pattern: Evaluating Exponential at Zero**\n\n**The correct answer is $800$.**\n\n**The Fast Way (5 seconds):** Any nonzero number raised to the $0$ power is $1$. So $f(0) = 800(0.85)^0 = 800(1) = 800$.\n\n**The Full Solution:**\n$f(0) = 800(0.85)^0$\n$(0.85)^0 = 1$ (any nonzero base to the power $0$ equals $1$)\n$f(0) = 800 \\times 1 = 800$\n\n**Common Mistakes to Avoid:**\n• Thinking $(0.85)^0 = 0$.\n• Computing $800 \\times 0.85 = 680$ (evaluating at $x = 1$ instead of $x = 0$).\n\n**Verification:** By definition, $a^0 = 1$ for any $a \neq 0$. \\u2713\n\n**Test Day Takeaway:** $f(0)$ in an exponential $a \\cdot b^x$ always equals $a$, the initial value.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
  choices: [
    { id: "A", text: "$\\sqrt{63}$" },
    { id: "B", text: "$15$" },
    { id: "C", text: "$21$" },
    { id: "D", text: "$\\sqrt{135}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$\n$c = \\sqrt{225} = 15$\n\nNote: $9$-$12$-$15$ is a multiple of the $3$-$4$-$5$ right triangle (multiplied by $3$).\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\sqrt{12^2 - 9^2} = \\sqrt{63}$ (subtracts instead of adds, treating one leg as the hypotenuse).\n• Choice C: Adds the legs directly: $9 + 12 = 21$.\n• Choice D: Computes $\\sqrt{9 \\times 12} = \\sqrt{108}$... or $\\sqrt{9 \\times 15} = \\sqrt{135}$, confusing the Pythagorean theorem with a geometric mean.\n\n**Test Day Takeaway:** Know the common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples.",
  skills: ["triangles"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "The midpoint of a line segment has coordinates $(5, -3)$. One endpoint of the segment is at $(2, 1)$. What is the $x$-coordinate of the other endpoint?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (10 seconds):** Midpoint $x = \\frac{2 + x_2}{2} = 5$, so $2 + x_2 = 10$, $x_2 = 8$.\n\n**The Full Solution:**\nThe midpoint formula gives: $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) = (5, -3)$.\nFor the $x$-coordinate:\n$\\frac{2 + x_2}{2} = 5$\n$2 + x_2 = 10$\n$x_2 = 8$\n\n**Common Mistakes to Avoid:**\n• Subtracting instead of adding: $5 - 2 = 3$ and writing $x_2 = 3$.\n• Confusing midpoint with distance formula.\n\n**Verification:** Midpoint of $(2, 1)$ and $(8, -7)$: $\\left(\\frac{2+8}{2}, \\frac{1+(-7)}{2}\\right) = (5, -3)$. \\u2713\n\n**Test Day Takeaway:** The midpoint is the average of coordinates. If you know the midpoint and one endpoint, double the midpoint coordinate and subtract the known endpoint.",
  skills: ["coordinate-geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "An investment of $\\$2{,}000$ earns $5\\%$ interest compounded annually. Which expression represents the value of the investment after $t$ years?",
  choices: [
    { id: "A", text: "$2000(1.5)^t$" },
    { id: "B", text: "$2000(1.05)^t$" },
    { id: "C", text: "$2000 + 100t$" },
    { id: "D", text: "$2000(0.95)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Compound Interest Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $5\\%$ annual growth means multiplying by $1.05$ each year. Value $= 2000(1.05)^t$.\n\n**The Full Solution:**\nCompound interest formula: $A = P(1 + r)^t$ where $P = 2000$, $r = 0.05$.\n$A = 2000(1 + 0.05)^t = 2000(1.05)^t$\n\n**Why the wrong answers are tempting:**\n• Choice A: Writes $5\\%$ as $0.5$ instead of $0.05$: $1 + 0.5 = 1.5$.\n• Choice C: Models simple interest ($\\$100$/year) as linear growth instead of compound.\n• Choice D: Uses $1 - 0.05 = 0.95$, modeling decay instead of growth.\n\n**Test Day Takeaway:** Compound interest: $P(1 + r)^t$. Always convert the percentage to a decimal.",
  skills: ["exponential-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In a coordinate plane, line $\\ell$ passes through the origin and has a slope of $\\frac{3}{4}$. Which of the following points lies on line $\\ell$?",
  choices: [
    { id: "A", text: "$(3, 4)$" },
    { id: "B", text: "$(6, 8)$" },
    { id: "C", text: "$(8, 6)$" },
    { id: "D", text: "$(4, 6)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Points on a Line**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Line: $y = \\frac{3}{4}x$ (through origin). Check $(8, 6)$: $\\frac{3}{4}(8) = 6$. \\u2713\n\n**The Full Solution:**\nSince the line passes through the origin with slope $\\frac{3}{4}$: $y = \\frac{3}{4}x$.\nCheck $(3, 4)$: $\\frac{3}{4}(3) = 2.25 \neq 4$. \\u2717\nCheck $(6, 8)$: $\\frac{3}{4}(6) = 4.5 \neq 8$. \\u2717\nCheck $(8, 6)$: $\\frac{3}{4}(8) = 6$. \\u2713\nCheck $(4, 6)$: $\\frac{3}{4}(4) = 3 \neq 6$. \\u2717\n\n**Why the wrong answers are tempting:**\n• Choice A $(3, 4)$: Students may swap the slope values, thinking rise $= 4$, run $= 3$.\n• Choice B $(6, 8)$: Uses the inverse slope $\\frac{4}{3}$: $\\frac{4}{3}(6) = 8$.\n• Choice D $(4, 6)$: Uses $y = \\frac{3}{2}x$, confusing the denominator.\n\n**Test Day Takeaway:** For a point to be on $y = mx$, the ratio $y/x$ must equal the slope $m$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "The exterior angle of a regular polygon measures $24°$. How many sides does the polygon have?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Regular Polygon Exterior Angle**\n\n**The correct answer is $15$.**\n\n**The Fast Way (5 seconds):** Exterior angles of a regular polygon sum to $360°$. Number of sides $= \\frac{360}{24} = 15$.\n\n**The Full Solution:**\nFor a regular polygon, all exterior angles are equal and their sum is $360°$.\nEach exterior angle $= \\frac{360°}{n}$ where $n$ is the number of sides.\n$24 = \\frac{360}{n}$\n$n = \\frac{360}{24} = 15$\n\n**Common Mistakes to Avoid:**\n• Using interior angle formula instead: interior $= 180 - 24 = 156$, then using wrong formula.\n• Computing $\\frac{180}{24}$ instead of $\\frac{360}{24}$.\n\n**Verification:** A regular $15$-gon has exterior angles of $\\frac{360}{15} = 24°$ each. \\u2713\n\n**Test Day Takeaway:** Exterior angles of any convex polygon sum to $360°$. For regular polygons, each one is $360°/n$.",
  skills: ["angles"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Two similar triangles have areas in the ratio $16:49$. What is the ratio of their corresponding perimeters?",
  choices: [
    { id: "A", text: "$4:7$" },
    { id: "B", text: "$16:49$" },
    { id: "C", text: "$256:2401$" },
    { id: "D", text: "$8:24.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Area ratio = (side ratio)$^2$. So side ratio $= \\sqrt{16:49} = 4:7$. Perimeter ratio equals side ratio.\n\n**The Full Solution:**\nFor similar figures, if the ratio of corresponding sides is $k$, then:\n• Perimeter ratio $= k$\n• Area ratio $= k^2$\nGiven area ratio $= 16:49 = \\frac{16}{49}$.\nSide ratio $= \\sqrt{\\frac{16}{49}} = \\frac{4}{7}$.\nPerimeter ratio $= 4:7$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Assumes perimeter ratio equals area ratio.\n• Choice C: Squares the area ratio instead of taking the square root: $(16)^2 : (49)^2$.\n• Choice D: Divides $16$ and $49$ by $2$, which is not a valid operation.\n\n**Test Day Takeaway:** Area ratio $= k^2$, so take the square root to get the side/perimeter ratio $= k$.",
  skills: ["similar-triangles", "ratios"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation of a circle is $x^2 + y^2 - 10x + 6y + 18 = 0$. What are the coordinates of the center and the radius of the circle?",
  choices: [
    { id: "A", text: "Center $(5, -3)$, radius $4$" },
    { id: "B", text: "Center $(-5, 3)$, radius $4$" },
    { id: "C", text: "Center $(5, -3)$, radius $16$" },
    { id: "D", text: "Center $(10, -6)$, radius $\\sqrt{18}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Complete the Square for Circle Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Group and complete the square:\n$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$\n$(x - 5)^2 + (y + 3)^2 = 16$\nCenter: $(5, -3)$, radius $= \\sqrt{16} = 4$.\n\n**The Full Solution:**\n$x^2 + y^2 - 10x + 6y + 18 = 0$\nRearrange: $(x^2 - 10x) + (y^2 + 6y) = -18$\nComplete the square for $x$: $x^2 - 10x + 25 = (x-5)^2$, add $25$ to both sides.\nComplete the square for $y$: $y^2 + 6y + 9 = (y+3)^2$, add $9$ to both sides.\n$(x-5)^2 + (y+3)^2 = -18 + 25 + 9 = 16$\nCenter: $(5, -3)$, radius $= \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Gets the signs wrong from completing the square.\n• Choice C: Reports $r^2 = 16$ as the radius instead of $r = 4$.\n• Choice D: Uses the coefficients $-10$ and $6$ directly as center coordinates.\n\n**Test Day Takeaway:** To convert general form to standard form, complete the square for both $x$ and $y$. The radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "In right triangle $PQR$, angle $Q$ is the right angle. If $PQ = 5$ and $PR = 13$, what is the length of $QR$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**The correct answer is $12$.**\n\n**The Fast Way (10 seconds):** $QR = \\sqrt{PR^2 - PQ^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.\n\n**The Full Solution:**\nIn right triangle $PQR$ with right angle at $Q$, $PR$ is the hypotenuse.\nBy the Pythagorean theorem:\n$PQ^2 + QR^2 = PR^2$\n$25 + QR^2 = 169$\n$QR^2 = 144$\n$QR = 12$\n\nThis is a $5$-$12$-$13$ Pythagorean triple.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $\\sqrt{169 + 25} = \\sqrt{194}$.\n• Confusing which side is the hypotenuse (the hypotenuse is always opposite the right angle).\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. \\u2713\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
  skills: ["triangles"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $g$ is defined by $g(x) = 3 \\cdot 2^x - 12$. For what value of $x$ does $g(x) = 0$?",
  choices: [
    { id: "A", text: "$0$" },
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" },
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solving Exponential Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Set $3 \\cdot 2^x - 12 = 0$. So $3 \\cdot 2^x = 12$, thus $2^x = 4 = 2^2$, so $x = 2$.\n\n**The Full Solution:**\n$g(x) = 0$\n$3 \\cdot 2^x - 12 = 0$\n$3 \\cdot 2^x = 12$\n$2^x = 4$\n$2^x = 2^2$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A: $g(0) = 3(1) - 12 = -9 \neq 0$.\n• Choice C: $g(3) = 3(8) - 12 = 12 \neq 0$.\n• Choice D: $g(4) = 3(16) - 12 = 36 \neq 0$.\n\n**Test Day Takeaway:** Isolate the exponential term first, then match bases to solve for the exponent.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the vertices of a triangle are $A(1, 1)$, $B(7, 1)$, and $C(5, 9)$. What is the equation of the line containing the median from vertex $C$ to side $AB$?",
  choices: [
    { id: "A", text: "$y = 8x - 23$" },
    { id: "B", text: "$y = -8x + 41$" },
    { id: "C", text: "$y = 8x - 31$" },
    { id: "D", text: "$y = -8x + 33$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Median of a Triangle in Coordinate Geometry**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Midpoint of $AB$: $M = (4, 1)$. Slope from $C(5, 9)$ to $M(4, 1)$: $\\frac{9-1}{5-4} = 8$. Line: $y - 1 = 8(x - 4)$, so $y = 8x - 31$.\n\n**The Full Solution:**\nThe median from $C$ to $AB$ goes from $C$ to the midpoint of $AB$.\nMidpoint of $AB$: $M = \\left(\\frac{1+7}{2}, \\frac{1+1}{2}\\right) = (4, 1)$.\nSlope of $CM$: $m = \\frac{9-1}{5-4} = 8$.\nUsing point $(4, 1)$: $y - 1 = 8(x - 4)$, so $y = 8x - 31$.\n\nVerification: At $C(5, 9)$: $8(5) - 31 = 9$. \\u2713. At $M(4, 1)$: $8(4) - 31 = 1$. \\u2713.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $y$-intercept error: $y = 8x - 23$ doesn't pass through $(4, 1)$.\n• Choice B: Uses negative slope $-8$.\n• Choice D: Uses negative slope and wrong intercept.\n\n**Test Day Takeaway:** A median goes from a vertex to the midpoint of the opposite side. Find the midpoint first, then compute the slope.",
  skills: ["coordinate-geometry", "triangles", "slope"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "If $4^{2x} \\cdot 8^{x+1} = 2^{17}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Exponential Equation — Common Base**\n\n**The correct answer is $2$.**\n\n**The Fast Way (30 seconds):** Convert to base $2$: $4^{2x} = 2^{4x}$ and $8^{x+1} = 2^{3x+3}$. So $2^{7x+3} = 2^{17}$, giving $7x = 14$, $x = 2$.\n\n**The Full Solution:**\nConvert everything to base $2$:\n$4^{2x} = (2^2)^{2x} = 2^{4x}$\n$8^{x+1} = (2^3)^{x+1} = 2^{3x+3}$\nSo: $2^{4x} \\cdot 2^{3x+3} = 2^{17}$\n$2^{4x + 3x + 3} = 2^{17}$\n$2^{7x + 3} = 2^{17}$\n$7x + 3 = 17$\n$7x = 14$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Forgetting that $8 = 2^3$, not $2^2$.\n• Not distributing: $3(x+1) = 3x + 3$, not $3x + 1$.\n\n**Verification:** $4^4 \\cdot 8^3 = 256 \\cdot 512 = 131{,}072 = 2^{17}$. \\u2713\n\n**Test Day Takeaway:** Convert all bases to the smallest common base, combine exponents, then set exponents equal.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, a line with slope $2$ is tangent to the circle $(x - 1)^2 + (y - 2)^2 = 5$. Which of the following could be the $y$-intercept of this tangent line?",
  choices: [
    { id: "A", text: "$2$" },
    { id: "B", text: "$-5$" },
    { id: "C", text: "$\\sqrt{5}$" },
    { id: "D", text: "$0$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line to Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (45 seconds):** Line: $y = 2x + b$, or $2x - y + b = 0$. Distance from center $(1, 2)$ to this line must equal $\\sqrt{5}$.\nDistance $= \\frac{|2(1) - 2 + b|}{\\sqrt{4 + 1}} = \\frac{|b|}{\\sqrt{5}}$.\nSet equal to $\\sqrt{5}$: $\\frac{|b|}{\\sqrt{5}} = \\sqrt{5}$, so $|b| = 5$, giving $b = 5$ or $b = -5$.\nAmong the choices, $b = -5$ is listed.\n\n**The Full Solution:**\nThe tangent line has the form $y = 2x + b$, which can be rewritten as $2x - y + b = 0$.\nThe distance from center $(1, 2)$ to this line is:\n$d = \\frac{|2(1) - 1(2) + b|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|2 - 2 + b|}{\\sqrt{5}} = \\frac{|b|}{\\sqrt{5}}$\nFor tangency, this distance equals the radius $\\sqrt{5}$:\n$\\frac{|b|}{\\sqrt{5}} = \\sqrt{5}$\n$|b| = 5$\n$b = 5$ or $b = -5$\n\n**Why the wrong answers are tempting:**\n• Choice A: $b = 2$ gives distance $\\frac{2}{\\sqrt{5}} \neq \\sqrt{5}$.\n• Choice C: $\\sqrt{5}$ is the radius, not a valid $y$-intercept for a tangent with this slope.\n• Choice D: $b = 0$ gives distance $0$, meaning the line passes through the center.\n\n**Test Day Takeaway:** A tangent line's distance from the circle's center equals the radius. Use the point-to-line distance formula: $d = |Ax_0 + By_0 + C|/\\sqrt{A^2 + B^2}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "In triangle $ABC$, $\\overline{DE}$ is parallel to $\\overline{BC}$ where $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$. If $AD = 6$, $DB = 9$, and $AE = 8$, what is the length of $EC$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Similar Triangles (Side Splitter Theorem)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (15 seconds):** Since $DE \\parallel BC$, triangle $ADE \\sim$ triangle $ABC$. By the side splitter theorem: $\\frac{AD}{DB} = \\frac{AE}{EC}$. So $\\frac{6}{9} = \\frac{8}{EC}$, giving $EC = \\frac{9 \\times 8}{6} = 12$.\n\n**The Full Solution:**\nSince $DE \\parallel BC$, by the basic proportionality theorem (or side splitter theorem):\n$\\frac{AD}{DB} = \\frac{AE}{EC}$\n$\\frac{6}{9} = \\frac{8}{EC}$\n$6 \\cdot EC = 9 \\cdot 8$\n$6 \\cdot EC = 72$\n$EC = 12$\n\n**Common Mistakes to Avoid:**\n• Using $\\frac{AD}{AB} = \\frac{AE}{EC}$ (wrong — should use $\\frac{AD}{AB} = \\frac{AE}{AC}$, or equivalently $\\frac{AD}{DB} = \\frac{AE}{EC}$).\n• Computing $AC$ instead of $EC$: $AC = AE + EC = 8 + 12 = 20$, but the question asks for $EC$.\n\n**Verification:** $\\frac{AD}{DB} = \\frac{6}{9} = \\frac{2}{3}$. $\\frac{AE}{EC} = \\frac{8}{12} = \\frac{2}{3}$. \\u2713. Also $\\frac{AD}{AB} = \\frac{6}{15} = \\frac{2}{5}$, and $\\frac{AE}{AC} = \\frac{8}{20} = \\frac{2}{5}$. \\u2713\n\n**Test Day Takeaway:** When a line parallel to one side of a triangle intersects the other two sides, it divides them proportionally.",
  skills: ["similar-triangles", "ratios"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "fill-in",
          difficulty: "easy",
          question: "A designer needs $3$ yards of fabric for each dress. How many yards are needed for $9$ dresses?",
          correctAnswer: "27",
          explanation: "**SAT Pattern: Simple Multiplication**\n\n**The correct answer is $27$.**\n\n**The Fast Way (5 seconds):** $3 \\times 9 = 27$ yards.\n\n**The Full Solution:**\n$9$ dresses $\\times 3$ yards per dress $= 27$ yards.\n\n**Common Mistakes to Avoid:**\n• Dividing: $9 \\div 3 = 3$ (finds how many dresses from $9$ yards).\n\n**Verification:** $27 \\div 3 = 9$ dresses. ✓\n\n**Test Day Takeaway:** Total $=$ quantity $\\times$ rate per unit.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $x - 9 = 15$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$9$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** $x = 15 + 9 = 24$.\n\n**The Full Solution:**\n$x - 9 = 15$\n$x = 15 + 9 = 24$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): From $15 - 9 = 6$ (subtracting instead of adding).\n• Choice B ($9$): Just the number being subtracted.\n• Choice C ($15$): Just the right side of the equation.\n\n**Test Day Takeaway:** To undo subtraction, add the same number to both sides.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A marine biologist tags $12$ dolphins on Monday, $15$ on Tuesday, and $9$ on Wednesday. What is the median number of dolphins tagged per day?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$13$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Median of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Order: $9, 12, 15$. The middle value is $12$.\n\n**The Full Solution:**\nData in order: $9, 12, 15$.\nWith $3$ values, the median is the $2$nd value: $12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The minimum.\n• Choice C ($13$): An incorrect average.\n• Choice D ($15$): The maximum.\n\n**Test Day Takeaway:** Sort the data first, then pick the middle value. For an even count, average the two middle values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A farm has chickens and cows. There are $3$ times as many chickens as cows. If there are $c$ cows, which expression represents the total number of animals?",
          choices: [
            { id: "A", text: "$3c$" },
            { id: "B", text: "$4c$" },
            { id: "C", text: "$c + 3$" },
            { id: "D", text: "$3c + 3$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Relationships to Expressions**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Chickens $= 3c$. Total $= c + 3c = 4c$.\n\n**The Full Solution:**\nCows $= c$.\nChickens $= 3c$ (three times as many).\nTotal $= c + 3c = 4c$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3c$): Only the chickens, not the total.\n• Choice C ($c + 3$): Adds $3$ instead of multiplying by $3$.\n• Choice D ($3c + 3$): Adds $3$ cows instead of $c$ cows.\n\n**Test Day Takeaway:** \"$k$ times as many\" means multiply by $k$. Total $=$ original $+$ multiplied amount.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "What is the value of $\\frac{3}{4} + \\frac{1}{4}$?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Adding Fractions with Common Denominators**\n\n**The correct answer is $1$.**\n\n**The Fast Way (5 seconds):** $\\frac{3}{4} + \\frac{1}{4} = \\frac{4}{4} = 1$.\n\n**The Full Solution:**\nSame denominator, so add numerators: $\\frac{3 + 1}{4} = \\frac{4}{4} = 1$.\n\n**Common Mistakes to Avoid:**\n• Adding denominators: $\\frac{3}{4} + \\frac{1}{4} \\neq \\frac{4}{8}$.\n\n**Verification:** $\\frac{3}{4} + \\frac{1}{4} = 0.75 + 0.25 = 1.00$ ✓\n\n**Test Day Takeaway:** Same denominator? Add the numerators. Keep the denominator.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An agricultural scientist models crop yield with $Y = 200 + 15f - 0.1f^2$, where $f$ is the amount of fertilizer in pounds. What is the yield when $f = 50$?",
          choices: [
            { id: "A", text: "$700$" },
            { id: "B", text: "$750$" },
            { id: "C", text: "$950$" },
            { id: "D", text: "$1{,}200$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Evaluating a Function**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $Y = 200 + 15(50) - 0.1(50)^2 = 200 + 750 - 250 = 700$.\n\n**The Full Solution:**\n$Y = 200 + 15(50) - 0.1(2{,}500)$\n$= 200 + 750 - 250$\n$= 700$\n\n**Why the wrong answers are tempting:**\n• Choice B ($750$): Forgets the $+200$ and the $-0.1f^2$ term: just computes $15(50) = 750$.\n• Choice C ($950$): Forgets to subtract $0.1f^2$: $200 + 750 = 950$.\n• Choice D ($1{,}200$): Adds all terms: $200 + 750 + 250 = 1{,}200$.\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations. Compute exponents before multiplying.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(0, -3)$ and $(4, 5)$. What is the equation of this line?",
          choices: [
            { id: "A", text: "$y = 2x - 3$" },
            { id: "B", text: "$y = 2x + 5$" },
            { id: "C", text: "$y = -2x - 3$" },
            { id: "D", text: "$y = \\frac{1}{2}x - 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{5-(-3)}{4-0} = \\frac{8}{4} = 2$. The $y$-intercept is $-3$ (from the point $(0,-3)$). Equation: $y = 2x - 3$.\n\n**The Full Solution:**\n$m = \\frac{5 - (-3)}{4 - 0} = \\frac{8}{4} = 2$\n$b = -3$ (the line passes through $(0, -3)$)\n$y = 2x - 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 2x + 5$): Uses $y = 5$ from the second point as the $y$-intercept.\n• Choice C ($y = -2x - 3$): Gets the slope sign wrong.\n• Choice D ($y = \\frac{1}{2}x - 3$): Flips the slope fraction.\n\n**Verification:** At $(4, 5)$: $2(4) - 3 = 5$ ✓. At $(0, -3)$: $2(0) - 3 = -3$ ✓.\n\n**Test Day Takeaway:** If one point is the $y$-intercept $(0, b)$, you already have $b$. Just find the slope.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The inequality $3x - 5 > 16$ is satisfied by all values of $x$ greater than what number?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**The correct answer is $7$.**\n\n**The Fast Way (15 seconds):** $3x - 5 > 16$, so $3x > 21$ and $x > 7$.\n\n**The Full Solution:**\n$3x - 5 > 16$\n$3x > 21$\n$x > 7$\n\nAll values greater than $7$ satisfy the inequality.\n\n**Common Mistakes to Avoid:**\n• Flipping the inequality sign (only needed when multiplying/dividing by a negative).\n• Subtracting $5$ from only one side: $3x > 11$, $x > 3.67$.\n\n**Verification:** At $x = 8$: $3(8) - 5 = 19 > 16$ ✓. At $x = 7$: $3(7) - 5 = 16$, which is NOT $> 16$. So $x > 7$. ✓\n\n**Test Day Takeaway:** Solve inequalities like equations. Only flip the sign when multiplying or dividing by a negative.",
          skills: ["inequalities", "solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A circular fountain has a diameter of $14$ feet. What is the area of the fountain, in square feet?",
          choices: [
            { id: "A", text: "$7\\pi$" },
            { id: "B", text: "$14\\pi$" },
            { id: "C", text: "$49\\pi$" },
            { id: "D", text: "$196\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Area of a Circle from Diameter**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Diameter $= 14$, so radius $= 7$. Area $= \\pi(7)^2 = 49\\pi$.\n\n**The Full Solution:**\n$r = d/2 = 14/2 = 7$\n$A = \\pi r^2 = \\pi(7)^2 = 49\\pi$ square feet.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7\\pi$): Uses $\\pi r$ instead of $\\pi r^2$.\n• Choice B ($14\\pi$): Uses $\\pi d$ (the circumference formula without the factor).\n• Choice D ($196\\pi$): Uses the diameter instead of the radius: $\\pi(14)^2 = 196\\pi$.\n\n**Test Day Takeaway:** Always convert diameter to radius before using $A = \\pi r^2$. Radius $= \\text{diameter} \\div 2$.",
          skills: ["circles", "area"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of function $g$ in the $xy$-plane is a line that passes through the points $(2, 7)$ and $(5, 16)$. Which equation defines $g$?",
          choices: [
            { id: "A", text: "$g(x) = 3x + 1$" },
            { id: "B", text: "$g(x) = 3x - 1$" },
            { id: "C", text: "$g(x) = 2x + 3$" },
            { id: "D", text: "$g(x) = 4x - 1$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding a Linear Equation from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$. Using point $(2, 7)$: $7 = 3(2) + b$, so $b = 1$. Equation: $g(x) = 3x + 1$.\n\n**The Full Solution:**\n$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$\n$y - 7 = 3(x - 2)$\n$y = 3x - 6 + 7 = 3x + 1$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3x - 1$): Sign error in computing $b$: $7 - 6 = 1$, not $-1$.\n• Choice C ($2x + 3$): Uses $\\frac{7-2}{5-2}$ or a related error for the slope.\n• Choice D ($4x - 1$): $4(2) - 1 = 7$ ✓ but $4(5) - 1 = 19 \\neq 16$. Passes through the first point but not the second.\n\n**Verification:** $g(2) = 6 + 1 = 7$ ✓ and $g(5) = 15 + 1 = 16$ ✓.\n\n**Test Day Takeaway:** Find slope from two points, then use one point to find $b$. Always verify with the second point.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $h(x) = -16x^2 + 48x$ models the height of a ball in feet after $x$ seconds. What is the maximum height of the ball?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Maximum of a Quadratic Function**\n\n**The correct answer is $36$.**\n\n**The Fast Way (20 seconds):** Maximum at $x = -b/(2a) = -48/(2 \\times -16) = -48/(-32) = 1.5$.\n$h(1.5) = -16(2.25) + 48(1.5) = -36 + 72 = 36$.\n\n**The Full Solution:**\n$x = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = \\frac{48}{32} = 1.5$ seconds.\n$h(1.5) = -16(1.5)^2 + 48(1.5) = -16(2.25) + 72 = -36 + 72 = 36$ feet.\n\n**Common Mistakes to Avoid:**\n• Reporting $x = 1.5$ (the time, not the height).\n• Computing $h(3) = -16(9) + 48(3) = -144 + 144 = 0$ (back to ground level).\n\n**Verification:** $h(1.5) = -36 + 72 = 36$ and $h(1) = -16 + 48 = 32 < 36$, $h(2) = -64 + 96 = 32 < 36$. ✓\n\n**Test Day Takeaway:** Maximum/minimum of $f(x) = ax^2 + bx + c$ is at $x = -b/(2a)$. Plug that back in to find the $y$-value.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An oceanographer collects $10$ water samples. The salinity readings are:\n$32, 33, 31, 35, 34, 33, 32, 36, 33, 31$.\n\nWhat is the mode of the data?",
          choices: [
            { id: "A", text: "$31$" },
            { id: "B", text: "$32$" },
            { id: "C", text: "$33$" },
            { id: "D", text: "$34$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding the Mode**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Count each value: $31$ appears $2$ times, $32$ appears $2$ times, $33$ appears $3$ times, $34$ appears $1$ time, $35$ appears $1$ time, $36$ appears $1$ time. The most frequent is $33$.\n\n**The Full Solution:**\nFrequencies: $31 \\to 2$, $32 \\to 2$, $33 \\to 3$, $34 \\to 1$, $35 \\to 1$, $36 \\to 1$.\nMode $= 33$ (appears most often).\n\n**Why the wrong answers are tempting:**\n• Choices A and B ($31, 32$): Each appears twice, less than $33$'s three times.\n• Choice D ($34$): Near the middle of the range but only appears once.\n\n**Test Day Takeaway:** The mode is the value that appears most frequently. A data set can have more than one mode.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a design studio, $\\frac{2}{5}$ of the employees are graphic designers and $\\frac{1}{4}$ are web developers. What fraction of employees are either graphic designers or web developers?",
          choices: [
            { id: "A", text: "$\\frac{3}{9}$" },
            { id: "B", text: "$\\frac{3}{20}$" },
            { id: "C", text: "$\\frac{13}{20}$" },
            { id: "D", text: "$\\frac{8}{20}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Adding Fractions with Different Denominators**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{2}{5} + \\frac{1}{4} = \\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}$.\n\n**The Full Solution:**\nLCD of $5$ and $4$ is $20$.\n$\\frac{2}{5} = \\frac{8}{20}$ and $\\frac{1}{4} = \\frac{5}{20}$.\n$\\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{3}{9}$): Adds numerators and denominators separately: $\\frac{2+1}{5+4}$.\n• Choice B ($\\frac{3}{20}$): Adds $2 + 1 = 3$ but uses the correct LCD.\n• Choice D ($\\frac{8}{20}$): Only converts $\\frac{2}{5}$ and forgets to add $\\frac{1}{4}$.\n\n**Test Day Takeaway:** To add fractions, find the LCD, convert both fractions, then add the numerators.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A line in the $xy$-plane passes through the point $(3, -2)$ and has slope $4$. What is the $y$-intercept of this line?",
          correctAnswer: "-14",
          explanation: "**SAT Pattern: Finding y-Intercept from Slope and a Point**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (15 seconds):** $y = mx + b$. $-2 = 4(3) + b$. $-2 = 12 + b$. $b = -14$.\n\n**The Full Solution:**\nUsing slope-intercept form:\n$y = 4x + b$\nSubstitute $(3, -2)$: $-2 = 4(3) + b = 12 + b$\n$b = -2 - 12 = -14$\n\n**Common Mistakes to Avoid:**\n• Sign error: $-2 - 12 = -14$, not $-10$ or $10$.\n• Computing $-2 + 12 = 10$ instead of $-2 - 12 = -14$.\n\n**Verification:** $y = 4(3) - 14 = 12 - 14 = -2$ ✓\n\n**Test Day Takeaway:** Plug the point and slope into $y = mx + b$ and solve for $b$.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sample of $300$ patients in a medical study showed that $42\\%$ responded positively to a treatment. The margin of error is $\\pm 5\\%$. Which conclusion is best supported?",
          choices: [
            { id: "A", text: "Exactly $42\\%$ of all patients will respond positively" },
            { id: "B", text: "Between $37\\%$ and $47\\%$ of the population is plausibly in the response range" },
            { id: "C", text: "At least $42\\%$ of patients will respond positively" },
            { id: "D", text: "The treatment works for $42\\%$ of people with certainty" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $42\\% \\pm 5\\% = [37\\%, 47\\%]$. The confidence interval is $37\\%$ to $47\\%$.\n\n**The Full Solution:**\nSample statistic: $42\\%$.\nMargin of error: $\\pm 5\\%$.\nConfidence interval: $42 - 5 = 37\\%$ to $42 + 5 = 47\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: A sample gives an estimate, not an exact population value.\n• Choice C: The interval is two-sided; the true value could be below $42\\%$.\n• Choice D: No study gives certainty — only a plausible range.\n\n**Test Day Takeaway:** Sample statistic $\\pm$ margin of error $=$ confidence interval for the population parameter.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = x^2 - 2x - 8$ is equivalent to which of the following?",
          choices: [
            { id: "A", text: "$f(x) = (x - 1)^2 - 9$" },
            { id: "B", text: "$f(x) = (x - 1)^2 - 7$" },
            { id: "C", text: "$f(x) = (x - 2)^2 - 12$" },
            { id: "D", text: "$f(x) = (x + 2)^2 - 8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $x^2 - 2x - 8 = (x^2 - 2x + 1) - 1 - 8 = (x - 1)^2 - 9$.\n\n**The Full Solution:**\nComplete the square:\n$x^2 - 2x - 8$\n$= (x^2 - 2x + 1) - 1 - 8$\n$= (x - 1)^2 - 9$\n\nHalf of $-2$ is $-1$, squared is $1$. Add and subtract $1$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($(x-1)^2 - 7$): Subtracts only $1$ from $-8$ instead of adding $1$ inside and subtracting $1$ outside.\n• Choice C ($(x-2)^2 - 12$): Uses half of $-2$ as $-2$ instead of $-1$.\n• Choice D ($(x+2)^2 - 8$): Wrong sign in the binomial.\n\n**Verification:** $(x-1)^2 - 9 = x^2 - 2x + 1 - 9 = x^2 - 2x - 8$ ✓\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx$: add $(b/2)^2$ inside, subtract it outside.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The circle $(x + 2)^2 + (y - 5)^2 = 36$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$39$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Reading Circle Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Center: $(-2, 5)$ so $h = -2$, $k = 5$. Radius: $\\sqrt{36} = 6$. Sum: $-2 + 5 + 6 = 9$.\n\n**The Full Solution:**\n$(x + 2)^2 + (y - 5)^2 = 36$\n$(x - (-2))^2 + (y - 5)^2 = 6^2$\nCenter: $(-2, 5)$, so $h = -2$ and $k = 5$.\nRadius: $r = 6$.\n$h + k + r = -2 + 5 + 6 = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $h + k = -2 + 5 = 3$ (forgets to add $r$).\n• Choice B ($7$): Uses $h = 2$ instead of $h = -2$: $2 + 5 = 7$ (sign error).\n• Choice D ($39$): Uses $r = 36$ instead of $r = 6$ (forgets the square root): $-2 + 5 + 36 = 39$.\n\n**Test Day Takeaway:** $(x - h)^2 + (y - k)^2 = r^2$. Watch the signs: $(x + 2)^2$ means $h = -2$, not $2$.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $3^{2x} = 81$, what is the value of $x$?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Exponential Equation with Same Base**\n\n**The correct answer is $2$.**\n\n**The Fast Way (10 seconds):** $81 = 3^4$. So $3^{2x} = 3^4$ and $2x = 4$, meaning $x = 2$.\n\n**The Full Solution:**\n$3^{2x} = 81$\n$3^{2x} = 3^4$\n$2x = 4$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Reporting $2x = 4$ and answering $4$ instead of $x = 2$.\n• Thinking $81 = 3^3$ (actually $3^3 = 27$).\n\n**Verification:** $3^{2(2)} = 3^4 = 81$ ✓\n\n**Test Day Takeaway:** Express both sides with the same base, then set the exponents equal. Know your powers: $3^1=3, 3^2=9, 3^3=27, 3^4=81$.",
          skills: ["exponent-rules", "exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A rectangular painting has an area of $x^2 + 7x + 12$ square inches. Which of the following could be the dimensions of the painting?",
          choices: [
            { id: "A", text: "$(x + 2)$ by $(x + 6)$" },
            { id: "B", text: "$(x + 3)$ by $(x + 4)$" },
            { id: "C", text: "$(x + 1)$ by $(x + 12)$" },
            { id: "D", text: "$(x + 6)$ by $(x + 2)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Factoring a Quadratic for Dimensions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Factor $x^2 + 7x + 12$. Find two numbers that multiply to $12$ and add to $7$: $3$ and $4$.\n$x^2 + 7x + 12 = (x + 3)(x + 4)$.\n\n**The Full Solution:**\n$x^2 + 7x + 12$\nWe need two numbers that multiply to $12$ and add to $7$.\n$3 \\times 4 = 12$ ✓ and $3 + 4 = 7$ ✓.\n$(x + 3)(x + 4)$\n\n**Why the wrong answers are tempting:**\n• Choice A ($(x+2)(x+6)$): $2 \\times 6 = 12$ ✓ but $2 + 6 = 8 \\neq 7$.\n• Choice C ($(x+1)(x+12)$): $1 \\times 12 = 12$ ✓ but $1 + 12 = 13 \\neq 7$.\n• Choice D: Same as A with factors reordered.\n\n**Verification:** $(x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "An ocean wave travels $1{,}500$ meters in $t$ seconds. A second wave travels at $\\frac{2}{3}$ the speed of the first wave. Which expression gives the distance the second wave travels in $t$ seconds?",
          choices: [
            { id: "A", text: "$1{,}000$ meters" },
            { id: "B", text: "$\\frac{2t}{3}$ meters" },
            { id: "C", text: "$\\frac{2{,}250}{t}$ meters" },
            { id: "D", text: "$\\frac{3{,}000}{t}$ meters" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Fraction of a Distance**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** First wave speed $= 1{,}500/t$. Second wave speed $= \\frac{2}{3} \\times \\frac{1{,}500}{t} = \\frac{1{,}000}{t}$.\nDistance in $t$ seconds $= \\frac{1{,}000}{t} \\times t = 1{,}000$ meters.\n\n**The Full Solution:**\nFirst wave: $1{,}500$ meters in $t$ seconds. Speed $= 1{,}500/t$.\nSecond wave speed $= \\frac{2}{3} \\times \\frac{1{,}500}{t} = \\frac{1{,}000}{t}$.\nDistance of second wave in $t$ seconds $= \\frac{1{,}000}{t} \\times t = 1{,}000$ meters.\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{2t}{3}$): Applies $\\frac{2}{3}$ to $t$ instead of the speed.\n• Choice C ($\\frac{2{,}250}{t}$): Multiplies $1{,}500$ by $\\frac{3}{2}$ instead of $\\frac{2}{3}$.\n• Choice D ($\\frac{3{,}000}{t}$): Doubles the first wave distance and divides by $t$.\n\n**Test Day Takeaway:** If the second object moves at a fraction of the first object's speed for the same time, it covers that fraction of the distance.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $(3x^2 + 5x - 2) - (x^2 - 3x + 4)$ is equivalent to $ax^2 + bx + c$. What is the value of $b$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Subtracting Polynomials**\n\n**The correct answer is $8$.**\n\n**The Fast Way (20 seconds):** Distribute the negative:\n$(3x^2 + 5x - 2) - (x^2 - 3x + 4) = 3x^2 + 5x - 2 - x^2 + 3x - 4 = 2x^2 + 8x - 6$.\nSo $b = 8$.\n\n**The Full Solution:**\n$3x^2 + 5x - 2 - x^2 + 3x - 4$\n$= (3x^2 - x^2) + (5x + 3x) + (-2 - 4)$\n$= 2x^2 + 8x - 6$\n\nSo $a = 2$, $b = 8$, $c = -6$.\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute the negative: $5x - 3x = 2x$ instead of $5x + 3x = 8x$.\n• Sign error on the constant: $-2 + 4 = 2$ instead of $-2 - 4 = -6$.\n\n**Verification:** $(3x^2 + 5x - 2) - (x^2 - 3x + 4) = 2x^2 + 8x - 6$ ✓\n\n**Test Day Takeaway:** When subtracting polynomials, distribute the negative sign to EVERY term in the second polynomial.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $5x^2 + bx - 20 = 0$ has solutions $x = 2$ and $x = -2$. What is the value of $b$?",
          choices: [
            { id: "A", text: "$-10$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Using a Known Root to Find a Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Substitute $x = 2$: $5(4) + 2b - 20 = 0$, so $20 + 2b - 20 = 0$ and $2b = 0$, meaning $b = 0$.\n\n**The Full Solution:**\nSubstitute $x = 2$ into $5x^2 + bx - 20 = 0$:\n$5(4) + b(2) - 20 = 0$\n$20 + 2b - 20 = 0$\n$2b = 0$\n$b = 0$\n\nVerify with $x = -2$: $5(4) + 0(-2) - 20 = 20 - 20 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($-10$): From $5 \\times (-2) = -10$.\n• Choice C ($5$): The leading coefficient.\n• Choice D ($10$): From $5 \\times 2 = 10$.\n\n**Alternative approach:** The roots are $2$ and $-2$, so the equation factors as $5(x - 2)(x + 2) = 5(x^2 - 4) = 5x^2 - 20$. The $x$-coefficient is $0$, confirming $b = 0$.\n\n**Test Day Takeaway:** If you know a root, substitute it into the equation and solve for the unknown coefficient.",
          skills: ["quadratic-equations", "solving-equations"]
        }
      ]
    }
  ]
};

export default practiceTest6;
