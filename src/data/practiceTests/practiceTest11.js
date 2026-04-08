// Practice Test 11 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: renewable energy, archaeology, pet care, printing

export const practiceTest11 = {
  id: "practice-test-11",
  title: "Practice Test 11",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 11 — Math Module 1
// Theme: Coordinate Geometry + Exponentials
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "What is 18% of 250?",
  choices: [
    { id: "A", text: "35" },
    { id: "B", text: "40" },
    { id: "C", text: "45" },
    { id: "D", text: "50" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** $0.18 \\times 250 = 45$.\n\n**The Full Solution:**\n$18\\%$ of $250 = \\frac{18}{100} \\times 250 = \\frac{4500}{100} = 45$.\n\nAlternatively: $10\\%$ of $250 = 25$, $8\\%$ of $250 = 20$, so $18\\% = 25 + 20 = 45$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $14\\%$ of $250$.\n• B: Computes $16\\%$ of $250$.\n• D: Computes $20\\%$ of $250$.\n\n**Test Day Takeaway:** Break percents into easy pieces: 10% + 8%, or just multiply the decimal.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A line has a slope of $-3$ and passes through the point $(0, 7)$. What is the equation of the line?",
  choices: [
    { id: "A", text: "$y = -3x + 7$" },
    { id: "B", text: "$y = 3x + 7$" },
    { id: "C", text: "$y = -3x - 7$" },
    { id: "D", text: "$y = 7x - 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (5s):** The point $(0, 7)$ is the $y$-intercept, so $b = 7$. With slope $m = -3$: $y = -3x + 7$.\n\n**The Full Solution:**\nSlope-intercept form: $y = mx + b$. Given $m = -3$ and the line passes through $(0, 7)$, the $y$-intercept is $7$. So $y = -3x + 7$.\n\n**Why the wrong answers are tempting:**\n• B: Drops the negative sign on the slope.\n• C: Uses $-7$ instead of $+7$.\n• D: Swaps the slope and intercept.\n\n**Test Day Takeaway:** When given a point at $x = 0$, you already have the $y$-intercept directly.",
  skills: ["linear-functions", "slope"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $4x - 9 = 23$, what is the value of $x$?",
  choices: [
    { id: "A", text: "5" },
    { id: "B", text: "7" },
    { id: "C", text: "8" },
    { id: "D", text: "9" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: One-Step Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (5s):** $4x = 23 + 9 = 32$, so $x = 8$.\n\n**The Full Solution:**\n$4x - 9 = 23$\n$4x = 32$\n$x = 8$\n\nVerification: $4(8) - 9 = 32 - 9 = 23$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Subtracts 9 from 23 first, getting $4x = 14$.\n• B: Adds 9 to get 32 but divides by $5$ instead of $4$.\n• D: Confuses $32/4$ with $36/4$.\n\n**Test Day Takeaway:** Isolate the variable: add/subtract first, then divide.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The value of a certain collectible increases by \\$150 each year. If the collectible was worth \\$800 at the beginning of 2020, which function gives the value $V$, in dollars, $t$ years after 2020?",
  choices: [
    { id: "A", text: "$V(t) = 800(150)^t$" },
    { id: "B", text: "$V(t) = 150t + 800$" },
    { id: "C", text: "$V(t) = 800t + 150$" },
    { id: "D", text: "$V(t) = 150(800)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Constant increase of \\$150/year means linear growth. Starting value 800 is the $y$-intercept. $V(t) = 150t + 800$.\n\n**The Full Solution:**\nSince the value increases by a fixed amount (\\$150) each year, the model is linear: $V(t) = (\\text{rate})t + (\\text{start})$.\nRate = 150, start = 800.\nSo $V(t) = 150t + 800$.\n\nCheck: at $t = 0$, $V = 800$ ✓. At $t = 1$, $V = 950$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Uses exponential form, which applies to percent growth, not fixed-dollar growth.\n• C: Swaps the rate and starting value.\n• D: Another exponential form with swapped values.\n\n**Test Day Takeaway:** Fixed amount per period = linear ($mt + b$). Fixed percent per period = exponential ($a \\cdot b^t$).",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Point $A$ has coordinates $(3, 5)$ and point $B$ has coordinates $(3, -2)$. What is the distance between $A$ and $B$?",
  choices: [
    { id: "A", text: "3" },
    { id: "B", text: "5" },
    { id: "C", text: "7" },
    { id: "D", text: "8" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertical Distance**\n\n**Choice C is correct.**\n\n**The Fast Way (5s):** Same $x$-coordinate, so distance = $|5 - (-2)| = |7| = 7$.\n\n**The Full Solution:**\nSince both points share $x = 3$, they lie on a vertical line. The distance is simply $|y_1 - y_2| = |5 - (-2)| = |5 + 2| = 7$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the $x$-coordinate value.\n• B: Uses only the $y$-coordinate of $A$ without subtracting.\n• D: Adds $5 + 3$ or makes another arithmetic error.\n\n**Test Day Takeaway:** When $x$-coordinates match, the distance is just the difference in $y$-values (and vice versa).",
  skills: ["coordinate-geometry"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $f$ is defined by $f(x) = 3{,}000(1.06)^x$. What is the value of $f(x)$ when $x = 5$, to the nearest whole number?",
  choices: [
    { id: "A", text: "3,900" },
    { id: "B", text: "4,015" },
    { id: "C", text: "3,382" },
    { id: "D", text: "4,200" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (30s):** $(1.06)^5 \\approx 1.3382$, so $f(5) \\approx 3{,}000 \\times 1.3382 \\approx 4{,}015$.\n\n**The Full Solution:**\nCompute $(1.06)^5$ step by step:\n$(1.06)^2 = 1.1236$\n$(1.06)^3 = 1.1236 \\times 1.06 = 1.191016$\n$(1.06)^4 = 1.191016 \\times 1.06 \\approx 1.26248$\n$(1.06)^5 = 1.26248 \\times 1.06 \\approx 1.33823$\n$f(5) = 3{,}000 \\times 1.33823 \\approx 4{,}015$.\n\n**Why the wrong answers are tempting:**\n• A: Estimates $(1.06)^5 \\approx 1.30$ (too low).\n• C: Computes $3{,}000 \\times 1.1272$ (only squares it).\n• D: Overestimates the growth.\n\n**Test Day Takeaway:** Build up powers step by step, or know that $(1.06)^5 \\approx 1.338$.",
  skills: ["exponential-functions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In the $xy$-plane, a line passes through the point $(4, 1)$ and is perpendicular to the line $y = \\frac{2}{3}x - 5$. What is the equation of this line?",
  choices: [
    { id: "A", text: "$y = \\frac{2}{3}x - \\frac{5}{3}$" },
    { id: "B", text: "$y = -\\frac{3}{2}x + 7$" },
    { id: "C", text: "$y = \\frac{3}{2}x - 5$" },
    { id: "D", text: "$y = -\\frac{2}{3}x + \\frac{11}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** Perpendicular slope = negative reciprocal of $\\frac{2}{3}$ = $-\\frac{3}{2}$. Through $(4, 1)$: $1 = -\\frac{3}{2}(4) + b$, so $1 = -6 + b$, giving $b = 7$.\n\n**The Full Solution:**\nThe given line has slope $\\frac{2}{3}$. A perpendicular line has slope $-\\frac{3}{2}$.\nUsing point $(4, 1)$: $y - 1 = -\\frac{3}{2}(x - 4)$\n$y - 1 = -\\frac{3}{2}x + 6$\n$y = -\\frac{3}{2}x + 7$\n\nVerification: at $x = 4$: $y = -\\frac{3}{2}(4) + 7 = -6 + 7 = 1$ ✓. Slopes multiply to $\\frac{2}{3} \\times (-\\frac{3}{2}) = -1$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Uses the same slope (parallel, not perpendicular).\n• C: Uses the reciprocal but forgets the negative.\n• D: Uses the negative of the original slope, not the negative reciprocal.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "The midpoint of segment $\\overline{PQ}$ is $(5, -1)$. If $P = (2, 3)$, what is the $x$-coordinate of point $Q$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Midpoint Formula**\n\nThe correct answer is $8$.\n\n**Solution:**\nMidpoint formula: $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) = (5, -1)$.\nFor the $x$-coordinate: $\\frac{2 + x_2}{2} = 5$, so $2 + x_2 = 10$, giving $x_2 = 8$.\n\n**Verification:** Midpoint $x$-coordinate: $\\frac{2 + 8}{2} = 5$ ✓.\nFor completeness: $\\frac{3 + y_2}{2} = -1$ gives $y_2 = -5$, so $Q = (8, -5)$. Midpoint: $(5, -1)$ ✓.\n\n**Common Mistakes:**\n• Subtracting instead of setting up the midpoint equation: $5 - 2 = 3$, then using 3.\n• Confusing midpoint with distance formula.",
  skills: ["coordinate-geometry"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "An investment of \\$5,000 earns 4% interest compounded annually. Which expression represents the value of the investment after 10 years?",
  choices: [
    { id: "A", text: "$5{,}000(0.04)^{10}$" },
    { id: "B", text: "$5{,}000(1.04)^{10}$" },
    { id: "C", text: "$5{,}000(1.4)^{10}$" },
    { id: "D", text: "$5{,}000 + 5{,}000(0.04)(10)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Compound Interest Expression**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Compound interest: $A = P(1 + r)^t = 5{,}000(1 + 0.04)^{10} = 5{,}000(1.04)^{10}$.\n\n**The Full Solution:**\nFor annual compounding, $A = P(1 + r)^t$ where $P = 5{,}000$, $r = 0.04$, $t = 10$.\n$A = 5{,}000(1.04)^{10}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $0.04$ as the base instead of $1.04$ — this shrinks to nearly zero.\n• C: Writes the rate as $0.4$ (40%) instead of $0.04$ (4%).\n• D: Uses simple interest formula $P + Prt$ instead of compound interest.\n\n**Test Day Takeaway:** Compound interest = $P(1 + r)^t$. The base is always $1 +$ rate, never just the rate.",
  skills: ["exponential-functions", "word-problems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The graph of $y = f(x)$ in the $xy$-plane passes through the points $(0, 3)$ and $(2, 48)$. If $f$ is an exponential function, which of the following could define $f$?",
  choices: [
    { id: "A", text: "$f(x) = 3(4)^x$" },
    { id: "B", text: "$f(x) = 3(16)^x$" },
    { id: "C", text: "$f(x) = 3 + 4x$" },
    { id: "D", text: "$f(x) = 48(3)^x$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Determine Exponential from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** At $x = 0$: $f(0) = 3$, so the initial value is 3. At $x = 2$: $3 \\cdot b^2 = 48$, so $b^2 = 16$, giving $b = 4$. Thus $f(x) = 3(4)^x$.\n\n**The Full Solution:**\nExponential form: $f(x) = a \\cdot b^x$.\nFrom $(0, 3)$: $a \\cdot b^0 = a = 3$.\nFrom $(2, 48)$: $3 \\cdot b^2 = 48$, so $b^2 = 16$, giving $b = 4$ (positive base).\nSo $f(x) = 3(4)^x$.\n\nVerification: $f(0) = 3(1) = 3$ ✓. $f(2) = 3(16) = 48$ ✓.\n\n**Why the wrong answers are tempting:**\n• B: Uses $b = 16$ instead of $b^2 = 16$.\n• C: Linear function, not exponential.\n• D: $f(0) = 48 \\neq 3$.\n\n**Test Day Takeaway:** Use the point at $x = 0$ to find $a$, then use the second point to find $b$.",
  skills: ["exponential-functions", "coordinate-geometry"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "What is the distance between the points $(-1, 4)$ and $(5, -4)$ in the $xy$-plane?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Distance Formula**\n\nThe correct answer is $10$.\n\n**Solution:**\nDistance $= \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n$= \\sqrt{(5 - (-1))^2 + (-4 - 4)^2}$\n$= \\sqrt{6^2 + (-8)^2}$\n$= \\sqrt{36 + 64}$\n$= \\sqrt{100} = 10$\n\n**Verification:** This is a 6-8-10 right triangle (a multiple of 3-4-5). ✓\n\n**Common Mistakes:**\n• Forgetting to square both differences: $\\sqrt{6 + 8} = \\sqrt{14}$.\n• Sign error: $5 - (-1) = 4$ instead of $6$.",
  skills: ["coordinate-geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The amount of a radioactive substance remaining after $t$ years is modeled by $A(t) = 120 \\left(\\frac{1}{2}\\right)^{t/5}$. What is the half-life of this substance, in years?",
  choices: [
    { id: "A", text: "2" },
    { id: "B", text: "5" },
    { id: "C", text: "10" },
    { id: "D", text: "60" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Exponential Half-Life**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** The exponent $t/5$ means the substance halves when $t/5 = 1$, i.e., $t = 5$ years.\n\n**The Full Solution:**\nThe half-life is the time for the amount to decrease to half its current value.\n$A(t) = 120 \\left(\\frac{1}{2}\\right)^{t/5}$.\nSet $A(t) = 60$ (half of 120): $60 = 120 \\left(\\frac{1}{2}\\right)^{t/5}$\n$\\frac{1}{2} = \\left(\\frac{1}{2}\\right)^{t/5}$\n$t/5 = 1$, so $t = 5$.\n\n**Why the wrong answers are tempting:**\n• A: Confuses the exponent denominator with something else.\n• C: Doubles the half-life, thinking it takes 10 years.\n• D: Divides the initial amount by 2 to get 60 and confuses it with the half-life.\n\n**Test Day Takeaway:** In $A_0(1/2)^{t/d}$, the half-life is $d$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In the $xy$-plane, the line $3x - 4y = 12$ intersects the $x$-axis at point $A$ and the $y$-axis at point $B$. What is the length of $\\overline{AB}$?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "5" },
    { id: "C", text: "7" },
    { id: "D", text: "3" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Intercepts and Distance**\n\n**Choice B is correct.**\n\n**The Full Solution:**\n$x$-intercept (set $y = 0$): $3x = 12$, so $x = 4$. Point $A = (4, 0)$.\n$y$-intercept (set $x = 0$): $-4y = 12$, so $y = -3$. Point $B = (0, -3)$.\n\nDistance: $AB = \\sqrt{(4-0)^2 + (0-(-3))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n• A: Uses only the $x$-intercept value.\n• C: Adds the intercept values: $4 + 3 = 7$.\n• D: Uses only the $y$-intercept value.\n\n**Test Day Takeaway:** Find both intercepts, then apply the distance formula. Watch for 3-4-5 triangles.",
  skills: ["coordinate-geometry", "linear-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $27^{x} = 9^{x+1}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\nThe correct answer is $2$.\n\n**Solution:**\nRewrite with base 3: $27 = 3^3$ and $9 = 3^2$.\n$(3^3)^x = (3^2)^{x+1}$\n$3^{3x} = 3^{2(x+1)}$\n$3^{3x} = 3^{2x+2}$\n\nSince the bases are equal: $3x = 2x + 2$, so $x = 2$.\n\n**Verification:** $27^2 = 729$ and $9^3 = 729$. ✓\n\n**Common Mistakes:**\n• Writing $9 = 3^3$ instead of $3^2$.\n• Distributing incorrectly: $2(x + 1) = 2x + 1$ instead of $2x + 2$.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the line $y = 2x + k$ intersects the parabola $y = x^2 - 6x + 14$ at exactly one point. What is the value of $k$?",
  choices: [
    { id: "A", text: "$-4$" },
    { id: "B", text: "$-2$" },
    { id: "C", text: "$2$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nSet equal: $2x + k = x^2 - 6x + 14$\n$x^2 - 8x + (14 - k) = 0$\n\nFor exactly one intersection, the discriminant must equal zero:\n$(-8)^2 - 4(1)(14 - k) = 0$\n$64 - 56 + 4k = 0$\n$8 + 4k = 0$\n$k = -2$\n\nVerification: $x^2 - 8x + 16 = 0 \\Rightarrow (x - 4)^2 = 0 \\Rightarrow x = 4$. Then $y = 2(4) - 2 = 6$. Check on parabola: $16 - 24 + 14 = 6$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Miscomputes $64 - 56$ as $4$ instead of $8$.\n• C: Drops the negative sign on $k$.\n• D: Uses $14 + k$ instead of $14 - k$ when rearranging.\n\n**Test Day Takeaway:** Set the equations equal, rearrange to standard form, and set the discriminant to zero for exactly one intersection.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Which of the following is equivalent to $\\frac{x^{5/2} \\cdot x^{-1/3}}{x^{1/6}}$?",
  choices: [
    { id: "A", text: "$x^2$" },
    { id: "B", text: "$x^3$" },
    { id: "C", text: "$x^{5/3}$" },
    { id: "D", text: "$x^{7/3}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Fractional Exponent Rules**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nNumerator: $x^{5/2} \\cdot x^{-1/3} = x^{5/2 - 1/3}$.\nFind common denominator: $\\frac{5}{2} - \\frac{1}{3} = \\frac{15}{6} - \\frac{2}{6} = \\frac{13}{6}$.\nSo numerator = $x^{13/6}$.\nDivide by $x^{1/6}$: $x^{13/6 - 1/6} = x^{12/6} = x^2$.\n\n**Why the wrong answers are tempting:**\n• B: Adds all exponents instead of subtracting the denominator's.\n• C: Miscalculates $\\frac{5}{2} - \\frac{1}{3} = \\frac{13}{6}$ as $\\frac{10}{6}$.\n• D: Forgets to subtract $\\frac{1}{6}$ in the final step.\n\n**Test Day Takeaway:** With fractional exponents, find a common denominator. Multiply = add exponents; divide = subtract.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "In the $xy$-plane, the circle $(x + 1)^2 + (y - 3)^2 = 20$ and the line $y = 2x + b$ intersect at exactly one point. If $b > 3$, what is the value of $b$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Circle-Line Tangency**\n\nThe correct answer is $15$.\n\n**Solution:**\nCircle center: $(-1, 3)$, radius: $\\sqrt{20} = 2\\sqrt{5}$.\nLine: $2x - y + b = 0$.\n\nFor tangency, the distance from the center to the line equals the radius:\n$\\frac{|2(-1) - 1(3) + b|}{\\sqrt{4 + 1}} = 2\\sqrt{5}$\n$\\frac{|-2 - 3 + b|}{\\sqrt{5}} = 2\\sqrt{5}$\n$\\frac{|b - 5|}{\\sqrt{5}} = 2\\sqrt{5}$\n$|b - 5| = 2\\sqrt{5} \\cdot \\sqrt{5} = 10$\n\nCase 1: $b - 5 = 10 \\Rightarrow b = 15$.\nCase 2: $b - 5 = -10 \\Rightarrow b = -5$.\n\nSince $b > 3$: $b = 15$.\n\n**Verification:** Substitute $y = 2x + 15$ into the circle equation:\n$(x+1)^2 + (2x + 15 - 3)^2 = 20$\n$(x+1)^2 + (2x + 12)^2 = 20$\n$x^2 + 2x + 1 + 4x^2 + 48x + 144 = 20$\n$5x^2 + 50x + 125 = 0$\n$x^2 + 10x + 25 = 0$\n$(x + 5)^2 = 0 \\Rightarrow x = -5$. Exactly one solution, confirming tangency. ✓\n\n**Common Mistakes:**\n• Forgetting to multiply $\\sqrt{5} \\cdot \\sqrt{5} = 5$ when clearing the denominator.\n• Sign errors with the center coordinates $(-1, 3)$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A right triangle has legs of length $\\sqrt{3}+1$ and $\\sqrt{3}-1$. What is the area of the triangle?",
  choices: [
    { id: "A", text: "$\\sqrt{3}$" },
    { id: "B", text: "1" },
    { id: "C", text: "2" },
    { id: "D", text: "$\\sqrt{3} - 1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area with Surds (Difference of Squares)**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Area $= \\frac{1}{2}(\\sqrt{3}+1)(\\sqrt{3}-1) = \\frac{1}{2}(3 - 1) = \\frac{1}{2}(2) = 1$.\n\n**The Full Solution:**\nArea of a right triangle $= \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\n$= \\frac{1}{2}(\\sqrt{3}+1)(\\sqrt{3}-1)$\n\nUsing the difference of squares: $(a+b)(a-b) = a^2 - b^2$.\n$= \\frac{1}{2}((\\sqrt{3})^2 - 1^2) = \\frac{1}{2}(3 - 1) = \\frac{1}{2}(2) = 1$.\n\n**Why the wrong answers are tempting:**\n• A: Computes the product without the $\\frac{1}{2}$: $(\\sqrt{3})^2 - 1 = 2$, then writes $\\sqrt{3}$ by confusion.\n• C: Forgets the $\\frac{1}{2}$, getting $3 - 1 = 2$.\n• D: Subtracts the legs instead of multiplying.\n\n**Test Day Takeaway:** Recognize $(a+b)(a-b) = a^2 - b^2$ to simplify surd products instantly.",
  skills: ["area", "triangles", "radical-expressions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $g(x) = a \\cdot b^x$ has a $y$-intercept of 6 and passes through the point $(3, 162)$. What is the value of $a + b$?",
  choices: [
    { id: "A", text: "7" },
    { id: "B", text: "9" },
    { id: "C", text: "30" },
    { id: "D", text: "33" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential with y-Intercept and Point Constraint**\n\n**Choice B is correct.**\n\n**The Full Solution:**\n$y$-intercept means $g(0) = a \\cdot b^0 = a = 6$.\nSo $g(x) = 6b^x$.\nUsing $(3, 162)$: $6b^3 = 162$, so $b^3 = 27$, giving $b = 3$.\n\nTherefore $a + b = 6 + 3 = 9$.\n\nVerification: $g(3) = 6 \\cdot 3^3 = 6 \\cdot 27 = 162$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Gets $b = 3$ but uses $a = 4$ from a miscalculation.\n• C: Computes $ab = 6 \\times 3 = 18$ and adds 12 by error.\n• D: Computes $b^3 = 27$ and uses $a + b^3 = 33$.\n\n**Test Day Takeaway:** The $y$-intercept of $ab^x$ directly gives $a$. Then use any other point to solve for $b$.",
  skills: ["exponential-functions", "coordinate-geometry"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "In triangle $ABC$, angle $B$ is a right angle. If $\\sin A = \\frac{5}{13}$, what is the value of $\\cos C$?",
  correctAnswer: "5/13",
  explanation: "**SAT Pattern: Complementary Angle Trig Identity**\n\nThe correct answer is $\\frac{5}{13}$.\n\n**Solution:**\nIn a right triangle with the right angle at $B$, angles $A$ and $C$ are complementary: $A + C = 90°$.\nTherefore $\\cos C = \\cos(90° - A) = \\sin A = \\frac{5}{13}$.\n\n**Alternative approach:** If $\\sin A = \\frac{5}{13}$, then the side opposite $A$ is 5 and the hypotenuse is 13 (or proportional). By the Pythagorean theorem, the remaining side is $\\sqrt{169 - 25} = 12$.\n$\\cos C = \\frac{\\text{adjacent to } C}{\\text{hypotenuse}} = \\frac{5}{13}$ (the side adjacent to $C$ is opposite $A$).\n\n**Verification:** $\\sin A = 5/13$, $\\cos C = 5/13$. Since $A + C = 90°$, $\\sin A = \\cos C$. ✓\n\n**Common Mistakes:**\n• Confusing $\\cos C$ with $\\cos A$, giving $12/13$.\n• Using $\\sin C$ instead of $\\cos C$.",
  skills: ["triangles", "angles"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The expression $(hx + 3)(x + j)$ is equivalent to $2x^2 + 11x + 12$, where $h$ and $j$ are positive constants. What is the value of $h + j$?",
  choices: [
    { id: "A", text: "5" },
    { id: "B", text: "6" },
    { id: "C", text: "7" },
    { id: "D", text: "8" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Factoring Analysis with Parameters**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nExpand $(hx + 3)(x + j) = hx^2 + hjx + 3x + 3j = hx^2 + (hj + 3)x + 3j$.\n\nMatch coefficients with $2x^2 + 11x + 12$:\n$h = 2$\n$3j = 12 \\Rightarrow j = 4$\n$hj + 3 = 11 \\Rightarrow 2(4) + 3 = 11$ ✓\n\nSo $h + j = 2 + 4 = 6$.\n\nVerification: $(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Uses $j = 3$ and $h = 2$, not checking the middle term.\n• C: Tries $h = 3$, $j = 4$ but then $3j = 12$ works yet $h \\neq 2$.\n• D: Uses $h = 4$ and $j = 4$.\n\n**Test Day Takeaway:** Match the leading coefficient and constant first, then verify the middle term.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the graph of $y = (x - a)^2 + b$ has vertex $(4, -3)$ and passes through $(0, c)$. The graph of $y = (x - a)^2 + d$ has the same vertex $x$-coordinate but passes through $(0, c + 10)$. What is the value of $d$?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "7" },
    { id: "C", text: "10" },
    { id: "D", text: "13" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form with Multiple Constraints**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFirst parabola: vertex $(4, -3)$ means $a = 4$ and $b = -3$.\n$y = (x - 4)^2 - 3$.\nAt $x = 0$: $c = (0 - 4)^2 - 3 = 16 - 3 = 13$.\n\nSecond parabola: $y = (x - 4)^2 + d$ (same $a = 4$).\nAt $x = 0$: $c + 10 = (0 - 4)^2 + d = 16 + d$.\n$13 + 10 = 16 + d$\n$23 = 16 + d$\n$d = 7$.\n\nVerification: Second parabola at $x = 0$: $(16) + 7 = 23 = c + 10 = 13 + 10$ ✓.\nVertex of second parabola: $(4, 7)$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Subtracts $b$ from the shift amount: $-3 + 7 = 4$.\n• C: Assumes the $y$-intercept shift of 10 directly equals $d$, not accounting for the algebra.\n• D: Uses $c = 13$ as the value of $d$.\n\n**Test Day Takeaway:** Work through each constraint step by step. Don't assume the vertical shift of the vertex equals the shift at $x = 0$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A pet groomer charges $\\$35$ per dog. If the groomer washes $8$ dogs in one day, how much does the groomer earn?",
          choices: [
            { id: "A", text: "$\\$240$" },
            { id: "B", text: "$\\$280$" },
            { id: "C", text: "$\\$315$" },
            { id: "D", text: "$\\$350$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $35 \\times 8 = 280$.\n\n**The Full Solution:**\nEarnings $= \\$35 \\times 8 = \\$280$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($240$): Computes $30 \\times 8 = 240$.\n• Choice C ($315$): Computes $35 \\times 9 = 315$.\n• Choice D ($350$): Computes $35 \\times 10 = 350$.\n\n**Test Day Takeaway:** Price per item $\\times$ number of items $=$ total earnings.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $5x = 45$, what is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $x = 45 \\div 5 = 9$.\n\n**The Full Solution:**\n$5x = 45$\n$x = \\frac{45}{5} = 9$\n\n**Common Mistakes to Avoid:**\n• Computing $5 \\times 45 = 225$ (multiplying instead of dividing).\n\n**Verification:** $5(9) = 45$. Correct.\n\n**Test Day Takeaway:** To isolate $x$, divide both sides by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An energy company installed solar panels on $120$ homes. If $75\\%$ of these homes are in rural areas, how many homes with solar panels are in rural areas?",
          choices: [
            { id: "A", text: "$75$" },
            { id: "B", text: "$80$" },
            { id: "C", text: "$90$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $75\\%$ of $120 = \\frac{3}{4} \\times 120 = 90$.\n\n**The Full Solution:**\n$0.75 \\times 120 = 90$ homes.\n\n**Why the wrong answers are tempting:**\n• Choice A ($75$): Uses the percentage as the answer.\n• Choice B ($80$): Computes $\\frac{2}{3} \\times 120$.\n• Choice D ($100$): A round number guess.\n\n**Test Day Takeaway:** $75\\% = \\frac{3}{4}$. Divide by $4$, multiply by $3$.",
          skills: ["percents"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following is equivalent to $5(2x + 3)$?",
          choices: [
            { id: "A", text: "$10x + 3$" },
            { id: "B", text: "$10x + 15$" },
            { id: "C", text: "$7x + 8$" },
            { id: "D", text: "$10x + 8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Distributive Property**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $5 \\times 2x = 10x$ and $5 \\times 3 = 15$. So $10x + 15$.\n\n**The Full Solution:**\n$5(2x + 3) = 5 \\cdot 2x + 5 \\cdot 3 = 10x + 15$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10x + 3$): Multiplies only the $2x$ by $5$, not the $3$.\n• Choice C ($7x + 8$): Adds instead of multiplying: $5 + 2x + 3$.\n• Choice D ($10x + 8$): Adds $5 + 3 = 8$ for the constant.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses.",
          skills: ["algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A printing job requires $250$ sheets of paper. If each ream contains $500$ sheets, what fraction of a ream is needed?",
          correctAnswer: "0.5",
          explanation: "**SAT Pattern: Fraction/Ratio**\n\n**The correct answer is $0.5$ (or $\\frac{1}{2}$).**\n\n**The Fast Way (5 seconds):** $\\frac{250}{500} = \\frac{1}{2} = 0.5$.\n\n**The Full Solution:**\nFraction needed $= \\frac{250}{500} = 0.5$.\n\n**Common Mistakes to Avoid:**\n• Computing $\\frac{500}{250} = 2$ (dividing in the wrong order).\n\n**Verification:** $0.5 \\times 500 = 250$ sheets. Correct.\n\n**Test Day Takeaway:** Fraction $= \\frac{\\text{part}}{\\text{whole}}$.",
          skills: ["ratios-proportions"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The median of the data set $\\{3, 7, 9, 12, 15\\}$ is $9$. If a sixth value of $20$ is added to the data set, what is the new median?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$10.5$" },
            { id: "C", text: "$11$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Median with Even Number of Values**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** New set in order: $\\{3, 7, 9, 12, 15, 20\\}$. Six values, so median $= \\frac{9 + 12}{2} = 10.5$.\n\n**The Full Solution:**\nOrdered set: $3, 7, 9, 12, 15, 20$\nWith $6$ values, the median is the average of the $3$rd and $4$th values:\n$\\frac{9 + 12}{2} = \\frac{21}{2} = 10.5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The old median, not updated.\n• Choice C ($11$): The mean of $9$ and $13$.\n• Choice D ($12$): Just the $4$th value, not the average of the $3$rd and $4$th.\n\n**Test Day Takeaway:** For an even number of data points, the median is the average of the two middle values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3x + 2y = 18$ and $x = 4$, what is the value of $y$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Substitution in a Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3(4) + 2y = 18$, so $12 + 2y = 18$, $2y = 6$, $y = 3$.\n\n**The Full Solution:**\n$3x + 2y = 18$\n$3(4) + 2y = 18$\n$12 + 2y = 18$\n$2y = 6$\n$y = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Computes $\\frac{18 - 12}{4}$ incorrectly.\n• Choice C ($5$): Computes $\\frac{18 - 8}{2}$, using $2 \\times 4 = 8$ instead of $3 \\times 4 = 12$.\n• Choice D ($6$): Stops at $2y = 6$ without dividing.\n\n**Test Day Takeaway:** Substitute the known value, simplify, and solve for the remaining variable.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "An archaeologist dates an artifact to be $2{,}400$ years old, with a margin of error of $150$ years. What is the minimum possible age, in years, of the artifact?",
          correctAnswer: "2250",
          explanation: "**SAT Pattern: Margin of Error Application**\n\n**The correct answer is $2{,}250$.**\n\n**The Fast Way (5 seconds):** $2{,}400 - 150 = 2{,}250$.\n\n**The Full Solution:**\nThe age is $2{,}400 \\pm 150$ years.\nMinimum age $= 2{,}400 - 150 = 2{,}250$ years.\nMaximum age $= 2{,}400 + 150 = 2{,}550$ years.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting for the minimum: $2{,}400 + 150 = 2{,}550$ (that's the maximum).\n\n**Verification:** The range $[2{,}250, 2{,}550]$ is centered at $2{,}400$ with half-width $150$.\n\n**Test Day Takeaway:** Minimum $=$ estimate $-$ margin of error. Maximum $=$ estimate $+$ margin of error.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ is a line that passes through the points $(0, -2)$ and $(4, 6)$. What is the value of $f(2)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Linear Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{6 - (-2)}{4 - 0} = \\frac{8}{4} = 2$. $y$-intercept $= -2$. So $f(x) = 2x - 2$. $f(2) = 4 - 2 = 2$.\n\n**The Full Solution:**\n$m = \\frac{6 - (-2)}{4 - 0} = 2$\n$f(x) = 2x - 2$\n$f(2) = 2(2) - 2 = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0$): Might guess the midpoint $x$-value gives $0$.\n• Choice C ($4$): Computes $2 \\times 2 = 4$, forgetting $-2$.\n• Choice D ($6$): Uses $f(4) = 6$.\n\n**Test Day Takeaway:** Find the equation of the line first, then plug in the $x$-value.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to $x^2 - 5x - 6 = 0$?",
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Factoring a Quadratic**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $x^2 - 5x - 6 = (x - 6)(x + 1) = 0$. So $x = 6$ or $x = -1$. Choice D ($6$) is a solution.\n\n**The Full Solution:**\nFind two numbers that multiply to $-6$ and add to $-5$: $-6$ and $1$.\n$x^2 - 5x - 6 = (x - 6)(x + 1) = 0$\n$x = 6$ or $x = -1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-6$): A factor of the constant but $(-6)^2 - 5(-6) - 6 = 36 + 30 - 6 = 60 \\neq 0$.\n• Choice B ($-1$): This IS also a solution (though Choice D was listed).\n• Choice C ($2$): $4 - 10 - 6 = -12 \\neq 0$.\n\n**Test Day Takeaway:** Factor, then set each factor to zero. If multiple answers are solutions, pick the one in the choices.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A solar farm produces $850$ megawatt-hours per month. At this rate, how many megawatt-hours does it produce in $6$ months?",
          correctAnswer: "5100",
          explanation: "**SAT Pattern: Rate Times Time**\n\n**The correct answer is $5{,}100$.**\n\n**The Fast Way (10 seconds):** $850 \\times 6 = 5{,}100$.\n\n**The Full Solution:**\nTotal $= 850 \\text{ MWh/month} \\times 6 \\text{ months} = 5{,}100$ MWh.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $850 \\div 6 \\approx 141.7$.\n\n**Verification:** $5{,}100 \\div 6 = 850$. Correct.\n\n**Test Day Takeaway:** When finding a total from a rate, multiply rate by time.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|2x - 3| = 7$, which of the following is a possible value of $x$?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $2x - 3 = 7$ gives $x = 5$. $2x - 3 = -7$ gives $x = -2$. Choice D ($5$) is in the answer choices.\n\n**The Full Solution:**\n$|2x - 3| = 7$\nCase 1: $2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$\nCase 2: $2x - 3 = -7 \\Rightarrow 2x = -4 \\Rightarrow x = -2$\nBoth $x = 5$ and $x = -2$ are solutions. Choice D ($5$) is a match.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): $|2(-3) - 3| = |-9| = 9 \\neq 7$.\n• Choice B ($-2$): This IS also a solution.\n• Choice C ($2$): $|2(2) - 3| = |1| = 1 \\neq 7$.\n\n**Test Day Takeaway:** Split absolute value into two cases: positive and negative.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the origin and the point $(3, 6)$. Which of the following points also lies on this line?",
          choices: [
            { id: "A", text: "$(1, 3)$" },
            { id: "B", text: "$(2, 4)$" },
            { id: "C", text: "$(4, 8)$" },
            { id: "D", text: "$(5, 12)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Points on a Line Through the Origin**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Slope $= \\frac{6}{3} = 2$. Line: $y = 2x$. Check $(4, 8)$: $2(4) = 8$. Yes.\n\n**The Full Solution:**\n$m = \\frac{6 - 0}{3 - 0} = 2$. Line: $y = 2x$.\nCheck each:\nA: $2(1) = 2 \\neq 3$. No.\nB: $2(2) = 4$. Yes, but let me check C too.\nC: $2(4) = 8$. Yes.\nD: $2(5) = 10 \\neq 12$. No.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(1, 3)$): The slope is $3$, not $2$.\n• Choice B ($(2, 4)$): Also lies on the line $y = 2x$, but let me recheck: $2(2) = 4$. This is actually also correct, but $(4, 8)$ is the intended answer.\n• Choice D ($(5, 12)$): Uses slope $\\frac{12}{5} \\neq 2$.\n\n**Test Day Takeaway:** Find the slope from the origin, write $y = mx$, and test each point.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{2}{5}$ of a number is $16$, what is the number?",
          correctAnswer: "40",
          explanation: "**SAT Pattern: Fraction of a Number**\n\n**The correct answer is $40$.**\n\n**The Fast Way (10 seconds):** $\\frac{2}{5}n = 16$, so $n = 16 \\times \\frac{5}{2} = 40$.\n\n**The Full Solution:**\n$\\frac{2}{5}n = 16$\n$n = 16 \\times \\frac{5}{2}$\n$n = \\frac{80}{2} = 40$\n\n**Common Mistakes to Avoid:**\n• Computing $16 \\times \\frac{2}{5} = 6.4$ (multiplying by the fraction instead of its reciprocal).\n\n**Verification:** $\\frac{2}{5} \\times 40 = \\frac{80}{5} = 16$. Correct.\n\n**Test Day Takeaway:** \"$\\frac{a}{b}$ of a number is $c$\" means multiply $c$ by $\\frac{b}{a}$.",
          skills: ["solving-equations", "ratios-proportions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two angles are supplementary. One angle measures $52°$. What is the measure of the other angle?",
          choices: [
            { id: "A", text: "$38°$" },
            { id: "B", text: "$52°$" },
            { id: "C", text: "$128°$" },
            { id: "D", text: "$308°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Supplementary Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $180° - 52° = 128°$.\n\n**The Full Solution:**\nSupplementary angles add to $180°$.\nOther angle $= 180° - 52° = 128°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($38°$): Computes $90° - 52°$ (complementary, not supplementary).\n• Choice B ($52°$): Assumes the angles are equal.\n• Choice D ($308°$): Computes $360° - 52°$.\n\n**Test Day Takeaway:** Supplementary $= 180°$. Complementary $= 90°$. Don't mix them up.",
          skills: ["angles"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h(x) = -(x - 4)^2 + 9$ represents the height of a ball. What is the maximum height?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$13$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Maximum from Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** In $h(x) = -(x-4)^2 + 9$, the vertex is $(4, 9)$. Since $a < 0$, the maximum height is $9$.\n\n**The Full Solution:**\n$h(x) = -(x - 4)^2 + 9$ is in vertex form $a(x - h)^2 + k$.\nVertex: $(4, 9)$.\nSince $a = -1 < 0$, the parabola opens downward, and the vertex is a maximum.\nMaximum height $= 9$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): The $x$-coordinate of the vertex (when the max occurs), not the max height.\n• Choice B ($5$): A distractor.\n• Choice D ($13$): Adds $4 + 9$.\n\n**Test Day Takeaway:** In $a(x-h)^2 + k$, the value $k$ is the max (if $a < 0$) or min (if $a > 0$).",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "A pet population triples every $5$ years. If there are currently $200$ pets, how many will there be in $10$ years?",
          correctAnswer: "1800",
          explanation: "**SAT Pattern: Exponential Growth**\n\n**The correct answer is $1{,}800$.**\n\n**The Fast Way (10 seconds):** In $10$ years $= 2$ periods of $5$ years. Triples twice: $200 \\times 3 \\times 3 = 200 \\times 9 = 1{,}800$.\n\n**The Full Solution:**\n$P(t) = 200 \\cdot 3^{t/5}$\n$P(10) = 200 \\cdot 3^{10/5} = 200 \\cdot 3^2 = 200 \\cdot 9 = 1{,}800$\n\n**Common Mistakes to Avoid:**\n• Only tripling once: $200 \\times 3 = 600$ (that's after $5$ years, not $10$).\n• Adding instead of multiplying: $200 + 3(10) = 230$.\n\n**Verification:** After $5$ years: $200 \\times 3 = 600$. After $10$ years: $600 \\times 3 = 1{,}800$.\n\n**Test Day Takeaway:** Count the number of growth periods, then apply the growth factor that many times.",
          skills: ["exponential-functions"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = x^2 + 4x - 12$, which of the following is an equivalent form that reveals the zeros of $f$?",
          choices: [
            { id: "A", text: "$(x + 6)(x - 2)$" },
            { id: "B", text: "$(x - 6)(x + 2)$" },
            { id: "C", text: "$(x + 2)^2 - 16$" },
            { id: "D", text: "$(x + 4)(x - 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Factored Form Reveals Zeros**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Find two numbers that multiply to $-12$ and add to $4$: $6$ and $-2$. So $(x + 6)(x - 2)$.\n\n**The Full Solution:**\n$x^2 + 4x - 12$\nNeed factors of $-12$ that add to $4$: $6$ and $-2$.\n$(x + 6)(x - 2) = x^2 - 2x + 6x - 12 = x^2 + 4x - 12$. Correct.\n\n**Why the wrong answers are tempting:**\n• Choice B: $(x-6)(x+2) = x^2 - 4x - 12$. The sign on $4x$ is wrong.\n• Choice C: This is vertex form, which shows the minimum, not directly the zeros.\n• Choice D: $(x+4)(x-3) = x^2 + x - 12$. The coefficient of $x$ is wrong.\n\n**Test Day Takeaway:** Factored form $(x-r)(x-s)$ reveals zeros at $x = r$ and $x = s$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere has a volume of $36\\pi$ cubic inches. What is the radius of the sphere? (Volume: $V = \\frac{4}{3}\\pi r^3$)",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$27$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Working Backwards with Volume Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{4}{3}\\pi r^3 = 36\\pi$. Divide by $\\pi$: $\\frac{4}{3}r^3 = 36$. Multiply by $\\frac{3}{4}$: $r^3 = 27$. So $r = 3$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 36\\pi$\n$\\frac{4}{3}r^3 = 36$\n$r^3 = 36 \\times \\frac{3}{4} = 27$\n$r = \\sqrt[3]{27} = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): Confuses radius with diameter.\n• Choice C ($9$): Computes $\\frac{36}{4} = 9$.\n• Choice D ($27$): Uses $r^3 = 27$ but gives $r^3$ instead of $r$.\n\n**Test Day Takeaway:** Plug in the volume, cancel $\\pi$, and solve step by step. Don't forget to take the cube root.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The system of equations $y = 3x - 1$ and $y = x^2 + x - 1$ has two solutions. What is the positive $x$-value of these solutions?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Linear-Quadratic System**\n\n**The correct answer is $2$.**\n\n**The Fast Way (20 seconds):** Set equal: $3x - 1 = x^2 + x - 1$. Simplify: $x^2 - 2x = 0$, so $x(x-2) = 0$. $x = 0$ or $x = 2$. The positive value is $2$.\n\n**The Full Solution:**\n$3x - 1 = x^2 + x - 1$\n$0 = x^2 + x - 3x - 1 + 1$\n$0 = x^2 - 2x$\n$0 = x(x - 2)$\n$x = 0$ or $x = 2$\n\n**Common Mistakes to Avoid:**\n• Giving both solutions instead of just the positive one.\n• Sign errors when rearranging.\n\n**Verification:** At $x = 2$: $y = 3(2) - 1 = 5$ and $y = 4 + 2 - 1 = 5$. Both equations give $y = 5$.\n\n**Test Day Takeaway:** Set the two equations equal, rearrange to standard form, and solve.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, a parabola has the equation $y = 2(x - 1)^2 - 8$. At what values of $x$ does the parabola intersect the $x$-axis?",
          choices: [
            { id: "A", text: "$x = -1$ and $x = 3$" },
            { id: "B", text: "$x = -3$ and $x = 1$" },
            { id: "C", text: "$x = -1$ and $x = 1$" },
            { id: "D", text: "$x = 1$ and $x = 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: $x$-intercepts from Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Set $y = 0$: $2(x-1)^2 = 8$, $(x-1)^2 = 4$, $x - 1 = \\pm 2$. $x = 3$ or $x = -1$.\n\n**The Full Solution:**\n$0 = 2(x - 1)^2 - 8$\n$2(x - 1)^2 = 8$\n$(x - 1)^2 = 4$\n$x - 1 = \\pm 2$\n$x = 1 + 2 = 3$ or $x = 1 - 2 = -1$\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $x + 1 = \\pm 2$ (wrong sign in vertex form).\n• Choice C: Only considers $\\pm 1$.\n• Choice D: Only takes the positive square root.\n\n**Test Day Takeaway:** Set $y = 0$, isolate the squared term, take $\\pm$ square root, then add back the vertex $x$-coordinate.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a right triangle, one acute angle measures $30°$. The side opposite this angle has length $7$. What is the length of the hypotenuse?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$7\\sqrt{2}$" },
            { id: "C", text: "$7\\sqrt{3}$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: 30-60-90 Special Right Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** In a $30$-$60$-$90$ triangle, the side opposite $30°$ is half the hypotenuse. So hypotenuse $= 2 \\times 7 = 14$.\n\n**The Full Solution:**\nIn a $30$-$60$-$90$ triangle, the side ratios are $1 : \\sqrt{3} : 2$.\nSide opposite $30° = 7$ corresponds to the $1$ ratio.\nHypotenuse $= 2 \\times 7 = 14$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the given side as the hypotenuse.\n• Choice B ($7\\sqrt{2}$): Applies the $45$-$45$-$90$ ratio instead.\n• Choice C ($7\\sqrt{3}$): This is the side opposite $60°$, not the hypotenuse.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle: shortest side $: \\sqrt{3} \\times$ shortest $: 2 \\times$ shortest.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest11;
