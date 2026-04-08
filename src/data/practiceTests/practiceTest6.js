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
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "What is the solution to the equation $3x + 7 = 22$?",
  choices: [{ id: "A", text: "3" }, { id: "B", text: "5" }, { id: "C", text: "7" }, { id: "D", text: "10" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way:** $3x = 22 - 7 = 15$, so $x = 5$.\n\n**The Full Solution:**\n$3x + 7 = 22$\n$3x = 15$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• A: Divides 22 by 7 approximately.\n• C: Uses the constant 7 as the answer.\n• D: Subtracts only partially: $22 - 7 = 15$ but then doesn't divide.\n\n**Test Day Takeaway:** Isolate the variable by undoing operations in reverse order.",
  skills: ["solving-equations"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "In triangle $ABC$, angle $A$ measures $35°$ and angle $B$ measures $75°$. What is the measure of angle $C$?",
  choices: [{ id: "A", text: "$60°$" }, { id: "B", text: "$70°$" }, { id: "C", text: "$80°$" }, { id: "D", text: "$110°$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way:** $180 - 35 - 75 = 70°$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$. So $C = 180° - 35° - 75° = 70°$.\n\n**Why the wrong answers are tempting:**\n• A: Common angle value but doesn't fit the arithmetic.\n• C: Adds $35 + 75 = 110$ and confuses the supplement.\n• D: Computes $35 + 75 = 110$ and uses it directly.\n\n**Test Day Takeaway:** Angles in a triangle always sum to $180°$.",
  skills: ["angles", "triangles"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "A rectangle has a length of 12 cm and a width of 5 cm. What is the area of the rectangle, in square centimeters?",
  choices: [{ id: "A", text: "17" }, { id: "B", text: "34" }, { id: "C", text: "60" }, { id: "D", text: "120" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way:** Area $= 12 \\times 5 = 60$.\n\n**The Full Solution:**\nArea of a rectangle $= \\text{length} \\times \\text{width} = 12 \\times 5 = 60$ square centimeters.\n\n**Why the wrong answers are tempting:**\n• A: Computes $12 + 5$ (adding instead of multiplying).\n• B: Computes $2(12 + 5)$ (the perimeter).\n• D: Computes $12 \\times 5 \\times 2$ (doubling the area).\n\n**Test Day Takeaway:** Area = length $\\times$ width. Don't confuse area with perimeter.",
  skills: ["area"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "The system of equations $y = 2x + 3$ and $y = 2x - 1$ has how many solutions?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "Infinitely many" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Parallel Lines and Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** Both lines have slope 2 but different $y$-intercepts (3 and $-1$), so they are parallel and never intersect.\n\n**The Full Solution:**\nSetting equal: $2x + 3 = 2x - 1 \\Rightarrow 3 = -1$. This is a contradiction, so there are no solutions.\n\n**Why the wrong answers are tempting:**\n• B: Students expect two different equations to intersect at one point.\n• C: Confuses with quadratic equations having two solutions.\n• D: This would require the lines to be identical (same slope and intercept).\n\n**Test Day Takeaway:** Same slope, different intercepts = parallel lines = no solutions.",
  skills: ["systems-of-equations"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
  choices: [{ id: "A", text: "7" }, { id: "B", text: "10" }, { id: "C", text: "14" }, { id: "D", text: "48" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice B is correct.**\n\n**The Fast Way:** $6$-$8$-$10$ is a classic Pythagorean triple.\n\n**The Full Solution:**\n$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\n\n**Why the wrong answers are tempting:**\n• A: Averages the two legs.\n• C: Adds the legs ($6 + 8$).\n• D: Multiplies the legs ($6 \\times 8$).\n\n**Test Day Takeaway:** Memorize common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, and their multiples.",
  skills: ["triangles"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "The system of equations below has infinitely many solutions.\n\n$4x - 6y = 10$\n$ax - 9y = 15$\n\nWhat is the value of $a$?",
  choices: [{ id: "A", text: "4" }, { id: "B", text: "6" }, { id: "C", text: "8" }, { id: "D", text: "12" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Infinitely Many Solutions (Proportional Equations)**\n\n**Choice B is correct.**\n\n**The Fast Way:** For infinitely many solutions, the second equation must be a multiple of the first. Multiply the first by $\\frac{3}{2}$: $6x - 9y = 15$. So $a = 6$.\n\n**The Full Solution:**\nFor infinitely many solutions: $\\frac{a}{4} = \\frac{-9}{-6} = \\frac{15}{10}$.\n$\\frac{-9}{-6} = \\frac{3}{2}$ and $\\frac{15}{10} = \\frac{3}{2}$. Consistent.\n$\\frac{a}{4} = \\frac{3}{2} \\Rightarrow a = 6$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the coefficient from the first equation without scaling.\n• C: Doubles $a = 4$ from the first equation.\n• D: Multiplies 4 by 3 (numerator of the ratio).\n\n**Test Day Takeaway:** Infinitely many solutions means the equations are proportional: all coefficient ratios must be equal.",
  skills: ["systems-of-equations"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "Two parallel lines are cut by a transversal. One of the angles formed measures $(3x + 15)°$, and a co-interior (same-side interior) angle measures $(5x - 7)°$. What is the value of $x$?",
  choices: [{ id: "A", text: "15.25" }, { id: "B", text: "21.5" }, { id: "C", text: "22" }, { id: "D", text: "28" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Angle Relationships**\n\n**Choice B is correct.**\n\n**The Fast Way:** Co-interior angles are supplementary: $(3x + 15) + (5x - 7) = 180$.\n\n**The Full Solution:**\n$3x + 15 + 5x - 7 = 180$\n$8x + 8 = 180$\n$8x = 172$\n$x = 21.5$\n\nCheck: $3(21.5) + 15 = 79.5°$ and $5(21.5) - 7 = 100.5°$. Sum $= 180°$. Correct.\n\n**Why the wrong answers are tempting:**\n• A: Solves as if the angles are equal (alternate interior) instead of supplementary.\n• C: Rounds or makes an arithmetic error.\n• D: Sets up the wrong equation.\n\n**Test Day Takeaway:** Co-interior (same-side interior) angles with parallel lines are supplementary (sum to $180°$).",
  skills: ["angles"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "A cylinder has a radius of 4 inches and a height of 9 inches. What is the volume of the cylinder, in cubic inches? Give your answer in terms of $\\pi$.\n\n(Enter the coefficient of $\\pi$.)",
  correctAnswer: "144",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The answer is 144** (the volume is $144\\pi$ cubic inches).\n\n**The Fast Way:** $V = \\pi r^2 h = \\pi(4)^2(9) = 144\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi(16)(9) = 144\\pi$ cubic inches. The coefficient of $\\pi$ is 144.\n\n**Common Mistakes:**\n• Computing $\\pi(4)(9) = 36\\pi$ (forgetting to square the radius).\n• Computing $\\pi(8)^2(9) = 576\\pi$ (using diameter instead of radius).\n\n**Test Day Takeaway:** The volume of a cylinder is $\\pi r^2 h$. Always square the radius, not the diameter.",
  skills: ["volume"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "In triangle $PQR$, $\\angle P = 90°$, $PQ = 5$, and $PR = 12$. What is $\\sin(R)$?",
  choices: [{ id: "A", text: "$\\frac{5}{12}$" }, { id: "B", text: "$\\frac{5}{13}$" }, { id: "C", text: "$\\frac{12}{13}$" }, { id: "D", text: "$\\frac{13}{12}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice B is correct.**\n\n**The Fast Way:** Hypotenuse $QR = \\sqrt{5^2 + 12^2} = 13$ (5-12-13 triple). $\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{PQ}{QR} = \\frac{5}{13}$.\n\n**The Full Solution:**\nFirst find hypotenuse: $QR = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n\nFor angle $R$: the opposite side is $PQ = 5$ and the hypotenuse is $QR = 13$.\n$\\sin(R) = \\frac{5}{13}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the adjacent side (12) as the hypotenuse.\n• C: This is $\\cos(R)$, not $\\sin(R)$.\n• D: Inverts the ratio (hypotenuse over adjacent).\n\n**Test Day Takeaway:** SOH-CAH-TOA: sine = opposite/hypotenuse. Always identify which side is opposite the given angle.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "Two similar triangles have corresponding sides in the ratio $3:5$. If the area of the smaller triangle is 27 square units, what is the area of the larger triangle?",
  choices: [{ id: "A", text: "45" }, { id: "B", text: "75" }, { id: "C", text: "81" }, { id: "D", text: "135" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Figures -- Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way:** Side ratio $= 3:5$, so area ratio $= 3^2:5^2 = 9:25$. Larger area $= 27 \\times \\frac{25}{9} = 75$.\n\n**The Full Solution:**\nIf corresponding sides are in ratio $k$, then corresponding areas are in ratio $k^2$.\n\nSide ratio $= \\frac{3}{5}$, so area ratio $= \\frac{9}{25}$.\n\n$\\frac{27}{A_{\\text{large}}} = \\frac{9}{25}$\n$A_{\\text{large}} = 27 \\times \\frac{25}{9} = 3 \\times 25 = 75$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the side ratio directly: $27 \\times \\frac{5}{3} = 45$.\n• C: Computes $27 \\times 3 = 81$.\n• D: Computes $27 \\times 5 = 135$.\n\n**Test Day Takeaway:** For similar figures, area scales as the square of the side ratio.",
  skills: ["similar-triangles", "area"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "The system of equations is:\n\n$2x + y + z = 14$\n$x - y + z = 4$\n$3x + 2y - z = 8$\n\nWhat is the value of $x + y + z$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: System of Three Equations**\n\n**The answer is 12.**\n\n**The Fast Way:** Add all three equations: $(2x + y + z) + (x - y + z) + (3x + 2y - z) = 14 + 4 + 8$, giving $6x + 2y + z = 26$. Then use elimination.\n\n**The Full Solution:**\nFrom equations 1 and 2: subtract eq 2 from eq 1: $(2x + y + z) - (x - y + z) = 14 - 4$, so $x + 2y = 10$.\n\nFrom equations 2 and 3: add them: $(x - y + z) + (3x + 2y - z) = 4 + 8$, so $4x + y = 12$.\n\nNow solve: $x + 2y = 10$ and $4x + y = 12$. From the second: $y = 12 - 4x$. Substitute: $x + 2(12 - 4x) = 10$, so $x + 24 - 8x = 10$, $-7x = -14$, $x = 2$.\n\nThen $y = 12 - 8 = 4$ and from eq 2: $2 - 4 + z = 4$, so $z = 6$.\n\nCheck: eq 1: $4 + 4 + 6 = 14$ ✓. Eq 2: $2 - 4 + 6 = 4$ ✓. Eq 3: $6 + 8 - 6 = 8$ ✓.\n\n$x + y + z = 2 + 4 + 6 = 12$.\n\n**Common Mistakes:**\n• Arithmetic errors when adding/subtracting equations.\n• Solving for one variable and forgetting to find the sum.\n\n**Test Day Takeaway:** For three-equation systems, try adding or subtracting equations to eliminate variables.",
  skills: ["systems-of-equations"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "A sphere has a surface area of $100\\pi$ square centimeters. What is the volume of the sphere?\n\n(Surface area of a sphere $= 4\\pi r^2$; Volume $= \\frac{4}{3}\\pi r^3$)",
  choices: [{ id: "A", text: "$\\frac{125\\pi}{3}$ cm$^3$" }, { id: "B", text: "$\\frac{250\\pi}{3}$ cm$^3$" }, { id: "C", text: "$\\frac{500\\pi}{3}$ cm$^3$" }, { id: "D", text: "$500\\pi$ cm$^3$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Surface Area to Volume Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way:** $4\\pi r^2 = 100\\pi \\Rightarrow r^2 = 25 \\Rightarrow r = 5$. Volume $= \\frac{4}{3}\\pi(5)^3 = \\frac{500\\pi}{3}$.\n\n**The Full Solution:**\nFrom $4\\pi r^2 = 100\\pi$: divide both sides by $4\\pi$ to get $r^2 = 25$, so $r = 5$.\n\nVolume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(125) = \\frac{500\\pi}{3}$ cm$^3$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $r^3 = 125$ but computes $\\frac{1}{3}\\pi(125)$ (forgets the 4).\n• B: Arithmetic error: $4 \\times 125 = 500$, not 250.\n• D: Forgets the $\\frac{1}{3}$ factor.\n\n**Test Day Takeaway:** When converting between surface area and volume, find $r$ first, then compute.",
  skills: ["volume", "surface-area"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "A rectangular prism has dimensions $3 \\times 4 \\times 5$. A second rectangular prism is similar to the first with a scale factor of 2. What is the ratio of the surface area of the smaller prism to the surface area of the larger prism?",
  choices: [{ id: "A", text: "$1:2$" }, { id: "B", text: "$1:4$" }, { id: "C", text: "$1:6$" }, { id: "D", text: "$1:8$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Solids -- Surface Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way:** Surface area ratio $= (\\text{scale factor})^2 = 2^2 = 4$, so ratio is $1:4$.\n\n**The Full Solution:**\nSmaller prism SA $= 2(3 \\times 4 + 4 \\times 5 + 3 \\times 5) = 2(12 + 20 + 15) = 94$.\nLarger prism dimensions: $6 \\times 8 \\times 10$. SA $= 2(48 + 80 + 60) = 376$.\nRatio $= \\frac{94}{376} = \\frac{1}{4}$.\n\nOr simply: scale factor $= 2$, so SA ratio $= 1:2^2 = 1:4$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the scale factor directly instead of squaring it.\n• C: Confuses with number of faces.\n• D: Uses the volume ratio ($1:2^3 = 1:8$) instead of SA ratio.\n\n**Test Day Takeaway:** For similar figures: lengths scale by $k$, areas by $k^2$, volumes by $k^3$.",
  skills: ["surface-area", "similar-triangles"]
},
{
  id: 14, type: "multiple-choice", difficulty: "medium",
  question: "The equation of circle $C$ in the $xy$-plane is $x^2 + y^2 - 6x + 8y = 0$. What are the coordinates of the center of circle $C$?",
  choices: [{ id: "A", text: "$(6, -8)$" }, { id: "B", text: "$(-6, 8)$" }, { id: "C", text: "$(3, -4)$" }, { id: "D", text: "$(-3, 4)$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Completing the Square for Circles**\n\n**Choice C is correct.**\n\n**The Fast Way:** Group and complete the square. The center is $(h, k) = (3, -4)$.\n\n**The Full Solution:**\n$(x^2 - 6x) + (y^2 + 8y) = 0$\n$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 0 + 9 + 16$\n$(x - 3)^2 + (y + 4)^2 = 25$\n\nCenter $= (3, -4)$, radius $= 5$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the original coefficients ($-6$ and $8$) without halving or sign-flipping.\n• B: Flips signs of A.\n• D: Flips the signs incorrectly from the correct answer.\n\n**Test Day Takeaway:** To find the center, complete the square. The center is $(h, k)$ where the equation is $(x-h)^2 + (y-k)^2 = r^2$. Signs flip!",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The system of equations is:\n\n$x + 2y = k$\n$3x + 6y = 12$\n\nFor how many values of $k$ does the system have exactly one solution?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "Infinitely many" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Dependent/Inconsistent System Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way:** The second equation is $3(x + 2y) = 12$, i.e., $x + 2y = 4$. The first equation is $x + 2y = k$. These represent parallel lines (if $k \neq 4$) or the same line (if $k = 4$). Neither case gives exactly one solution.\n\n**The Full Solution:**\nDivide equation 2 by 3: $x + 2y = 4$. Compare with equation 1: $x + 2y = k$.\n\n- If $k = 4$: same line, infinitely many solutions.\n- If $k \neq 4$: parallel lines, no solutions.\n\nThere is no value of $k$ that produces exactly one solution.\n\n**Why the wrong answers are tempting:**\n• B: Students think $k = 4$ gives one solution, but it gives infinitely many.\n• C: Misapplies the idea of two intersection points.\n• D: Confuses with the number of values that give some solutions.\n\n**Test Day Takeaway:** When one equation is a multiple of another, you can never get exactly one solution -- only 0 or infinitely many.",
  skills: ["systems-of-equations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A right rectangular prism (Prism A) has dimensions $3 \\times 4 \\times 6$. A second right rectangular prism (Prism B) has dimensions $3 \\times 4 \\times 8$. The two prisms are glued together along a $3 \\times 4$ face. What is the total surface area of the resulting solid?",
  choices: [{ id: "A", text: "220" }, { id: "B", text: "232" }, { id: "C", text: "244" }, { id: "D", text: "120" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Composite 3D Solid Surface Area**\n\n**Choice A is correct.**\n\n**The Fast Way:** The combined solid is a $3 \\times 4 \\times 14$ rectangular prism (since $6 + 8 = 14$). SA $= 2(12 + 56 + 42) = 220$.\n\n**The Full Solution:**\nSA(A) $= 2(3 \\times 4 + 4 \\times 6 + 3 \\times 6) = 2(12 + 24 + 18) = 108$.\nSA(B) $= 2(3 \\times 4 + 4 \\times 8 + 3 \\times 8) = 2(12 + 32 + 24) = 136$.\n\nGlued face $= 3 \\times 4 = 12$. This face is hidden on both prisms, so subtract $2 \\times 12 = 24$.\n\nTotal SA $= 108 + 136 - 24 = 220$.\n\n**Why the wrong answers are tempting:**\n• B: Forgets to subtract both hidden faces (subtracts only one): $108 + 136 - 12 = 232$.\n• C: Adds the surface areas without subtracting: $108 + 136 = 244$.\n• D: Computes only one prism's SA.\n\n**Test Day Takeaway:** When solids are glued, subtract the hidden area from BOTH prisms (twice the glued face area).",
  skills: ["surface-area"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "In right triangle $DEF$, $\\angle D = 90°$, $DE = 8$, and $\\cos(F) = \\frac{3}{5}$. What is the length of $EF$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Trig Ratio to Find Side Lengths**\n\n**The answer is 10.**\n\n**The Fast Way:** In right triangle $DEF$ with $\\angle D = 90°$, the hypotenuse is $EF$ (opposite the right angle). For angle $F$: adjacent = $DF$, opposite = $DE = 8$.\n\n$\\cos(F) = \\frac{DF}{EF} = \\frac{3}{5}$, so sides are in ratio $3:4:5$.\n\n$\\sin(F) = \\frac{DE}{EF} = \\frac{4}{5}$. Since $DE = 8$: $\\frac{8}{EF} = \\frac{4}{5}$, so $EF = 10$.\n\n**The Full Solution:**\nSince $\\cos(F) = \\frac{3}{5}$, we recognize the $3$-$4$-$5$ right triangle ratio. The sides are $DF = 3k$, $DE = 4k$, $EF = 5k$.\n\n$DE = 4k = 8$, so $k = 2$.\n$EF = 5k = 10$.\n\nCheck: $DF = 6$, $DE = 8$, $EF = 10$. By Pythagoras: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. ✓\n$\\cos(F) = \\frac{DF}{EF} = \\frac{6}{10} = \\frac{3}{5}$. ✓\n\n**Common Mistakes:**\n• Confusing which side is adjacent vs. opposite for the given angle.\n• Using the wrong trig ratio.\n\n**Test Day Takeaway:** Always identify the hypotenuse first (opposite the right angle), then determine adjacent and opposite relative to the given angle.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y + 2)^2 = 25$. A line with equation $y = x + b$ is tangent to the circle. What are the possible values of $b$?",
  choices: [{ id: "A", text: "$b = -5 + 5\\sqrt{2}$ or $b = -5 - 5\\sqrt{2}$" }, { id: "B", text: "$b = 5$ or $b = -5$" }, { id: "C", text: "$b = 3$ or $b = -7$" }, { id: "D", text: "$b = -5 + \\sqrt{2}$ or $b = -5 - \\sqrt{2}$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice A is correct.**\n\n**The Fast Way:** A tangent line touches the circle at exactly one point, so the distance from the center to the line equals the radius.\n\n**The Full Solution:**\nCenter $= (3, -2)$, radius $= 5$. Line: $y = x + b$, or $x - y + b = 0$.\n\nDistance from center to line $= \\frac{|3 - (-2) + b|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|5 + b|}{\\sqrt{2}}$.\n\nSet equal to radius: $\\frac{|5 + b|}{\\sqrt{2}} = 5$.\n\n$|5 + b| = 5\\sqrt{2}$.\n\n$5 + b = 5\\sqrt{2}$ or $5 + b = -5\\sqrt{2}$.\n\n$b = -5 + 5\\sqrt{2}$ or $b = -5 - 5\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $b = \\pm 5$ without the $\\sqrt{2}$ from the distance formula.\n• C: Adds/subtracts the radius from the $y$-coordinate.\n• D: Forgets to multiply $\\sqrt{2}$ by 5.\n\n**Test Day Takeaway:** For tangent lines, use the point-to-line distance formula: $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = r$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "What is the sum of the solutions to the equation $x^2 + 4x - 21 = 0$?",
  choices: [{ id: "A", text: "$-7$" }, { id: "B", text: "$-4$" }, { id: "C", text: "$3$" }, { id: "D", text: "$4$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vieta's Formulas for Sum of Roots**\n\n**Choice B is correct.**\n\n**The Fast Way:** By Vieta's formulas, the sum of the roots of $ax^2 + bx + c = 0$ is $-\\frac{b}{a} = -\\frac{4}{1} = -4$.\n\n**The Full Solution:**\nFactor: $x^2 + 4x - 21 = (x + 7)(x - 3) = 0$, so $x = -7$ or $x = 3$.\n\nSum $= -7 + 3 = -4$.\n\n**Why the wrong answers are tempting:**\n• A: Uses only the negative root $-7$.\n• C: Uses only the positive root $3$.\n• D: Takes the absolute value of $-4$.\n\n**Test Day Takeaway:** Use Vieta's formulas: for $ax^2 + bx + c = 0$, the sum of solutions is $-b/a$ and the product is $c/a$.",
  skills: ["quadratic-equations", "solving-equations"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "In the $xy$-plane, a line passes through the point $(1, 5)$ and is perpendicular to the line $3x - 4y = 12$. At what value of $x$ does this line cross the $x$-axis?\n\n(Enter a decimal.)",
  correctAnswer: "4.75",
  explanation: "**SAT Pattern: Perpendicular Lines and x-intercept**\n\n**The answer is 4.75 (or $\\frac{19}{4}$).**\n\n**The Fast Way:** Slope of $3x - 4y = 12$ is $\\frac{3}{4}$. Perpendicular slope $= -\\frac{4}{3}$. Line through $(1,5)$: $y - 5 = -\\frac{4}{3}(x - 1)$. Set $y = 0$: $-5 = -\\frac{4}{3}(x-1)$, $x - 1 = \\frac{15}{4}$, $x = \\frac{19}{4} = 4.75$.\n\n**The Full Solution:**\nRewrite $3x - 4y = 12$ in slope-intercept form: $y = \\frac{3}{4}x - 3$, so slope $= \\frac{3}{4}$.\n\nPerpendicular slope $= -\\frac{4}{3}$ (negative reciprocal).\n\nEquation through $(1, 5)$: $y - 5 = -\\frac{4}{3}(x - 1)$.\n\n$x$-intercept (set $y = 0$):\n$-5 = -\\frac{4}{3}(x - 1)$\n$5 = \\frac{4}{3}(x - 1)$\n$x - 1 = \\frac{15}{4}$\n$x = 1 + \\frac{15}{4} = \\frac{19}{4} = 4.75$.\n\n**Common Mistakes:**\n• Using the same slope instead of the negative reciprocal.\n• Setting $x = 0$ to find the $y$-intercept instead of the $x$-intercept.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. For the $x$-intercept, set $y = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "Triangle $ABC$ has vertices $A(0, 0)$, $B(8, 0)$, and $C(3, 6)$. What is the area of triangle $ABC$?",
  choices: [{ id: "A", text: "18" }, { id: "B", text: "24" }, { id: "C", text: "30" }, { id: "D", text: "48" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Area from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way:** Base $AB$ lies on the $x$-axis with length 8. Height = $y$-coordinate of $C = 6$. Area $= \\frac{1}{2}(8)(6) = 24$.\n\n**The Full Solution:**\nUsing the coordinate formula: Area $= \\frac{1}{2}|x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)|$\n$= \\frac{1}{2}|0(0-6) + 8(6-0) + 3(0-0)|$\n$= \\frac{1}{2}|0 + 48 + 0| = 24$.\n\nOr simply: base $AB = 8$ along the $x$-axis, and the height from $C$ to the $x$-axis is $6$.\nArea $= \\frac{1}{2} \\times 8 \\times 6 = 24$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $\\frac{1}{2} \\times 6 \\times 6$ (wrong base).\n• C: Uses $\\frac{1}{2} \\times 10 \\times 6$ (uses distance $AC$ as base).\n• D: Forgets the $\\frac{1}{2}$: $8 \\times 6 = 48$.\n\n**Test Day Takeaway:** When one side lies on an axis, use it as the base. The height is the perpendicular distance from the opposite vertex.",
  skills: ["area", "coordinate-geometry", "triangles"]
},
{
  id: 22, type: "fill-in", difficulty: "hard",
  question: "In the figure, two parallel lines are cut by two transversals that meet at point $P$ on one of the parallel lines. The angle between the transversals at $P$ is $40°$. One transversal makes an angle of $65°$ with the other parallel line (the one not containing $P$). What is the measure, in degrees, of the angle that the other transversal makes with that same parallel line on the same side?",
  correctAnswer: "75",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The answer is 75.**\n\n**The Fast Way:** At point $P$ on the upper parallel line, the two transversals create a $40°$ angle. One transversal makes $65°$ with the lower line, so by alternate interior angles, it makes $65°$ with the upper line at $P$'s side. The other transversal at $P$ makes $65° + 40° = 105°$ with the upper line on that side, so with the lower line it makes $180° - 105° = 75°$.\n\n**The Full Solution:**\nCall the parallel lines $\\ell_1$ (lower) and $\\ell_2$ (upper), with $P$ on $\\ell_2$.\n\nTransversal 1 makes $65°$ with $\\ell_1$. By alternate interior angles, transversal 1 makes $65°$ with $\\ell_2$ on the interior side at $P$.\n\nThe angle between the two transversals at $P$ is $40°$. So transversal 2 makes $65° + 40° = 105°$ with $\\ell_2$ on the same interior side.\n\nThe angle transversal 2 makes with $\\ell_1$ (co-interior angles are supplementary): $180° - 105° = 75°$.\n\n**Common Mistakes:**\n• Adding $65° + 40° = 105°$ and using it directly as the answer.\n• Subtracting: $65° - 40° = 25°$ (using the wrong operation).\n\n**Test Day Takeaway:** With parallel lines, alternate interior angles are equal and co-interior angles are supplementary. Trace angles step by step.",
  skills: ["angles"]
}
      ]
    }
  ]
};

export default practiceTest6;
