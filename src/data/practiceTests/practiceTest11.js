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
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "An angle in a triangle measures $55°$. A second angle measures $70°$. What is the measure, in degrees, of the third angle?",
  choices: [{ id: "A", text: "45" }, { id: "B", text: "55" }, { id: "C", text: "65" }, { id: "D", text: "125" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way:** $180 - 55 - 70 = 55$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$. The third angle is $180° - 55° - 70° = 55°$.\n\n**Why the wrong answers are tempting:**\n• A: Subtracts incorrectly.\n• C: Confuses with supplementary angle concepts.\n• D: This is the supplement of 55°, not the missing triangle angle.\n\n**Test Day Takeaway:** The three angles of any triangle sum to exactly 180°.",
  skills: ["angles", "triangles"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A rectangular garden has a length of 12 feet and a width of 8 feet. What is the area of the garden, in square feet?",
  choices: [{ id: "A", text: "40" }, { id: "B", text: "80" }, { id: "C", text: "96" }, { id: "D", text: "20" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way:** Area $= 12 \\times 8 = 96$ square feet.\n\n**The Full Solution:**\nArea of a rectangle $= \\text{length} \\times \\text{width} = 12 \\times 8 = 96$ square feet.\n\n**Why the wrong answers are tempting:**\n• A: This is the perimeter divided by something, or half the perimeter.\n• B: Computes $2 \\times (12 + 8) \\times 2 = 80$, confusing area with perimeter-related calculations.\n• D: Uses half of 40 (half-perimeter).\n\n**Test Day Takeaway:** Area = length $\\times$ width. Perimeter = $2(\\text{length} + \\text{width})$. Don't confuse them.",
  skills: ["area"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "A car's value depreciates by 12% each year. If the car is currently worth \\$20,000, which expression gives its value after $t$ years?",
  choices: [{ id: "A", text: "$20000(0.12)^t$" }, { id: "B", text: "$20000(1.12)^t$" }, { id: "C", text: "$20000(0.88)^t$" }, { id: "D", text: "$20000 - 0.12t$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice C is correct.**\n\n**The Fast Way:** Depreciates 12% means 88% remains each year. Multiply by $0.88$ each year: $20000(0.88)^t$.\n\n**The Full Solution:**\nA 12% annual depreciation means the car retains $100\\% - 12\\% = 88\\% = 0.88$ of its value each year. After $t$ years: $V(t) = 20000(0.88)^t$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the depreciation rate (0.12) as the base instead of the retention rate.\n• B: This models 12% growth, not decay.\n• D: This is a linear model, but depreciation is exponential.\n\n**Test Day Takeaway:** For exponential decay of $r\\%$, the base is $(1 - r/100)$, not $r/100$.",
  skills: ["exponential-functions"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "Two parallel lines are cut by a transversal. One of the angles formed is $118°$. Which of the following could NOT be the measure of another angle formed by the transversal and the parallel lines?",
  choices: [{ id: "A", text: "$62°$" }, { id: "B", text: "$118°$" }, { id: "C", text: "$72°$" }, { id: "D", text: "$62°$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way:** When parallel lines are cut by a transversal, all angles are either $118°$ or its supplement $180° - 118° = 62°$. The value $72°$ is neither.\n\n**The Full Solution:**\nParallel lines cut by a transversal create 8 angles. These angles come in two types: the given angle ($118°$) and its supplementary angle ($180° - 118° = 62°$). All corresponding, alternate interior, and alternate exterior angles are either $118°$ or $62°$. Since $72°$ is neither of these values, it cannot be formed.\n\n**Why the wrong answers are tempting:**\n• A: $62°$ is the supplement of $118°$, so it appears.\n• B: $118°$ appears as a corresponding or vertical angle.\n• D: Same as A — $62°$ is valid.\n\n**Test Day Takeaway:** With parallel lines and a transversal, there are only two distinct angle measures, and they are supplementary.",
  skills: ["angles"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "The function $h(t) = 500(2)^t$ models the number of bacteria in a sample after $t$ hours. How many bacteria are in the sample after 3 hours?",
  choices: [{ id: "A", text: "1,500" }, { id: "B", text: "3,000" }, { id: "C", text: "4,000" }, { id: "D", text: "6,000" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Evaluating Exponential Functions**\n\n**Choice C is correct.**\n\n**The Fast Way:** $h(3) = 500 \\cdot 2^3 = 500 \\cdot 8 = 4000$.\n\n**The Full Solution:**\n$h(3) = 500(2)^3 = 500 \\times 8 = 4000$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $500 \\times 3 = 1500$ (linear instead of exponential).\n• B: Computes $500 \\times 6$ or $500 \\times 2 \\times 3$.\n• D: Computes $500 \\times 12$ or similar.\n\n**Test Day Takeaway:** In exponential functions, the variable is in the exponent. $2^3 = 8$, not $2 \\times 3 = 6$.",
  skills: ["exponential-functions"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "Triangle $DEF$ is similar to triangle $GHI$. In triangle $DEF$, $DE = 9$, $EF = 12$, and $DF = 15$. If $GH = 6$, what is the perimeter of triangle $GHI$?",
  choices: [{ id: "A", text: "18" }, { id: "B", text: "24" }, { id: "C", text: "27" }, { id: "D", text: "36" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles — Scale Factor**\n\n**Choice B is correct.**\n\n**The Fast Way:** Scale factor from $DEF$ to $GHI$: $\\frac{GH}{DE} = \\frac{6}{9} = \\frac{2}{3}$. Perimeter of $DEF = 9 + 12 + 15 = 36$. Perimeter of $GHI = 36 \\times \\frac{2}{3} = 24$.\n\n**The Full Solution:**\nSince the triangles are similar with $DE$ corresponding to $GH$, the scale factor is $\\frac{GH}{DE} = \\frac{6}{9} = \\frac{2}{3}$.\n$HI = 12 \\times \\frac{2}{3} = 8$ and $GI = 15 \\times \\frac{2}{3} = 10$.\nPerimeter = $6 + 8 + 10 = 24$.\n\n**Why the wrong answers are tempting:**\n• A: Uses only two sides of the smaller triangle.\n• C: Subtracts 9 from the perimeter instead of scaling.\n• D: This is the perimeter of triangle $DEF$.\n\n**Test Day Takeaway:** Perimeters of similar figures scale by the same factor as corresponding sides.",
  skills: ["similar-triangles"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "A cone has a radius of 5 cm and a height of 12 cm. What is the volume of the cone, in cubic centimeters?",
  choices: [{ id: "A", text: "$100\\pi$" }, { id: "B", text: "$300\\pi$" }, { id: "C", text: "$60\\pi$" }, { id: "D", text: "$\\frac{100\\pi}{3}$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Volume of a Cone**\n\n**Choice A is correct.**\n\n**The Fast Way:** $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(25)(12) = \\frac{300\\pi}{3} = 100\\pi$.\n\n**The Full Solution:**\nThe volume formula for a cone is $V = \\frac{1}{3}\\pi r^2 h$.\n$V = \\frac{1}{3}\\pi(5)^2(12) = \\frac{1}{3}\\pi(25)(12) = \\frac{300\\pi}{3} = 100\\pi$ cubic centimeters.\n\n**Why the wrong answers are tempting:**\n• B: This is $\\pi r^2 h = 300\\pi$, the volume of a cylinder with the same dimensions (forgot the $\\frac{1}{3}$).\n• C: Computes $\\frac{1}{3} \\times 12 \\times 5 \\times \\pi$, forgetting to square the radius.\n• D: Uses $r^2 = 100/3$ somehow.\n\n**Test Day Takeaway:** Cone volume = $\\frac{1}{3}$ of the cylinder with the same base and height. The formula is on the SAT reference sheet.",
  skills: ["volume"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "A substance decays so that after $t$ years, the amount remaining is $A(t) = 120\\left(\\frac{1}{2}\\right)^{t/5}$. After how many years will 15 grams remain?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Half-Life — Solving Exponential Equations**\n\n**The correct answer is 15.**\n\n**The Fast Way:** $15 = 120(\\frac{1}{2})^{t/5}$. Divide: $(\\frac{1}{2})^{t/5} = \\frac{1}{8} = (\\frac{1}{2})^3$. So $\\frac{t}{5} = 3$, giving $t = 15$.\n\n**The Full Solution:**\nSet $A(t) = 15$:\n$15 = 120\\left(\\frac{1}{2}\\right)^{t/5}$\n$\\frac{15}{120} = \\left(\\frac{1}{2}\\right)^{t/5}$\n$\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{t/5}$\n$\\left(\\frac{1}{2}\\right)^3 = \\left(\\frac{1}{2}\\right)^{t/5}$\n$3 = \\frac{t}{5}$\n$t = 15$\n\n**Test Day Takeaway:** When the ratio simplifies to a power of the base, match exponents. $\\frac{1}{8} = (\\frac{1}{2})^3$ is a key recognition.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "In the $xy$-plane, line $m$ has equation $y = \\frac{2}{3}x + 4$ and line $n$ has equation $y = -\\frac{3}{2}x - 1$. What is true about lines $m$ and $n$?",
  choices: [{ id: "A", text: "They are parallel." }, { id: "B", text: "They are perpendicular." }, { id: "C", text: "They have the same $y$-intercept." }, { id: "D", text: "They intersect at the origin." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Lines — Negative Reciprocal Slopes**\n\n**Choice B is correct.**\n\n**The Fast Way:** Slope of $m$: $\\frac{2}{3}$. Slope of $n$: $-\\frac{3}{2}$. Product: $\\frac{2}{3} \\times (-\\frac{3}{2}) = -1$. Perpendicular.\n\n**The Full Solution:**\nTwo lines are perpendicular if and only if the product of their slopes is $-1$ (they are negative reciprocals of each other).\n$m_1 \\times m_2 = \\frac{2}{3} \\times \\left(-\\frac{3}{2}\\right) = -1$ ✓\nThe lines are perpendicular.\n\n**Why the wrong answers are tempting:**\n• A: Parallel lines have equal slopes ($\\frac{2}{3} \neq -\\frac{3}{2}$).\n• C: $y$-intercepts are 4 and $-1$, which are different.\n• D: Line $m$ at $x = 0$: $y = 4 \neq 0$, so $m$ doesn't pass through the origin.\n\n**Test Day Takeaway:** Slopes are negative reciprocals (product = $-1$) $\\Leftrightarrow$ perpendicular.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "A cylindrical water tank has a radius of 4 feet and a height of 10 feet. If water fills the tank to 75% of its capacity, what is the volume of water in the tank, in cubic feet?",
  choices: [{ id: "A", text: "$120\\pi$" }, { id: "B", text: "$160\\pi$" }, { id: "C", text: "$40\\pi$" }, { id: "D", text: "$30\\pi$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Cylinder Volume with Percent Fill**\n\n**Choice A is correct.**\n\n**The Fast Way:** Full volume $= \\pi(4)^2(10) = 160\\pi$. At 75%: $0.75 \\times 160\\pi = 120\\pi$.\n\n**The Full Solution:**\nVolume of a cylinder $= \\pi r^2 h = \\pi(16)(10) = 160\\pi$ cubic feet.\nAt 75% capacity: $0.75 \\times 160\\pi = 120\\pi$ cubic feet.\n\n**Why the wrong answers are tempting:**\n• B: This is the full volume, not 75% of it.\n• C: Incorrectly computes $\\frac{1}{4}$ of the full volume or makes an arithmetic error.\n• D: Divides incorrectly.\n\n**Test Day Takeaway:** For a cylinder filled to a fraction $f$, the water volume is $f \\times \\pi r^2 h$.",
  skills: ["volume", "percents"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "In triangle $PQR$, $\\angle P = 90°$, $PQ = 8$, and $PR = 15$. What is the length of $QR$?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: Pythagorean Theorem Application**\n\n**The correct answer is 17.**\n\n**The Fast Way:** Recognize the 8-15-17 Pythagorean triple. Since $\\angle P = 90°$, $QR$ is the hypotenuse: $QR = 17$.\n\n**The Full Solution:**\nWith the right angle at $P$, $QR$ is the hypotenuse.\n$QR = \\sqrt{PQ^2 + PR^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$.\n\n**Test Day Takeaway:** Memorize common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.",
  skills: ["triangles"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "The function $f(t) = 3000(0.92)^t$ models the value of equipment after $t$ years. What does $0.92$ represent in this context?",
  choices: [{ id: "A", text: "The equipment loses 92% of its value each year." }, { id: "B", text: "The equipment retains 92% of its value each year." }, { id: "C", text: "The equipment loses 8% of its value each year." }, { id: "D", text: "Both B and C" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpreting Exponential Decay Base**\n\n**Choice D is correct.**\n\n**The Fast Way:** A base of 0.92 means the equipment keeps 92% each year. Keeping 92% means losing 8%. Both B and C are correct interpretations.\n\n**The Full Solution:**\nIn $f(t) = 3000(0.92)^t$, each year the value is multiplied by 0.92. This means:\n• 92% of the previous value remains (Choice B)\n• 100% $-$ 92% = 8% is lost each year (Choice C)\nBoth statements are equivalent and correct.\n\n**Why the wrong answers are tempting:**\n• A: Losing 92% would mean the base is $1 - 0.92 = 0.08$, not 0.92.\n• B alone: Correct but incomplete — C is also correct.\n• C alone: Correct but incomplete — B is also correct.\n\n**Test Day Takeaway:** A decay factor of $r$ means $r \\times 100\\%$ is retained and $(1-r) \\times 100\\%$ is lost. Both are valid descriptions.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 13, type: "fill-in", difficulty: "medium",
  question: "In the $xy$-plane, the center of a circle is at $(2, -3)$ and the circle passes through the point $(7, 9)$. What is the radius of the circle?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Distance Formula for Circle Radius**\n\n**The correct answer is 13.**\n\n**The Fast Way:** Distance $= \\sqrt{(7-2)^2 + (9-(-3))^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n\n**The Full Solution:**\nThe radius equals the distance from the center to any point on the circle.\n$r = \\sqrt{(7-2)^2 + (9-(-3))^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\nThis is the 5-12-13 Pythagorean triple.\n\n**Test Day Takeaway:** The distance formula $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ is essentially the Pythagorean theorem on a coordinate plane.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 14, type: "multiple-choice", difficulty: "medium",
  question: "Lines $l$ and $m$ are parallel. A transversal crosses line $l$ forming an angle of $(3x + 10)°$ and crosses line $m$ forming a consecutive interior angle of $(5x - 30)°$. What is the value of $x$?",
  choices: [{ id: "A", text: "20" }, { id: "B", text: "25" }, { id: "C", text: "30" }, { id: "D", text: "35" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines — Consecutive Interior Angles**\n\n**Choice B is correct.**\n\n**The Fast Way:** Consecutive interior angles (same-side interior) are supplementary: $(3x+10) + (5x-30) = 180$. So $8x - 20 = 180$, giving $8x = 200$ and $x = 25$.\n\n**The Full Solution:**\nConsecutive interior angles (also called co-interior or same-side interior angles) between parallel lines are supplementary — they add to $180°$.\n$(3x + 10) + (5x - 30) = 180$\n$8x - 20 = 180$\n$8x = 200$\n$x = 25$\n\nCheck: $3(25)+10 = 85°$ and $5(25)-30 = 95°$. Sum: $85 + 95 = 180°$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Sets the angles equal (which would apply to alternate interior angles).\n• C: Arithmetic error.\n• D: Uses the wrong angle relationship.\n\n**Test Day Takeaway:** Consecutive interior angles between parallel lines are supplementary (sum to 180°). Alternate interior angles are equal.",
  skills: ["angles"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "A right circular cylinder has a total surface area of $130\\pi$ square inches. If the height of the cylinder is 8 inches, what is the radius of the cylinder, in inches?",
  choices: [{ id: "A", text: "3" }, { id: "B", text: "5" }, { id: "C", text: "7" }, { id: "D", text: "10" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Surface Area of a Cylinder — Solving for Radius**\n\n**Choice B is correct.**\n\n**The Fast Way:** Surface area $= 2\\pi r^2 + 2\\pi rh = 2\\pi r(r+h) = 130\\pi$. So $2r(r+8) = 130$, giving $r(r+8) = 65$. Testing $r = 5$: $5(13) = 65$ ✓.\n\n**The Full Solution:**\nTotal surface area of a cylinder: $SA = 2\\pi r^2 + 2\\pi rh$.\n$2\\pi r^2 + 2\\pi r(8) = 130\\pi$\nDivide by $2\\pi$:\n$r^2 + 8r = 65$\n$r^2 + 8r - 65 = 0$\n$(r + 13)(r - 5) = 0$\n$r = 5$ (reject $r = -13$)\n\n**Why the wrong answers are tempting:**\n• A: $2(3)(3+8) = 66 \neq 130$.\n• C: $2(7)(7+8) = 210 \neq 130$.\n• D: $2(10)(18) = 360 \neq 130$.\n\n**Test Day Takeaway:** The total surface area formula has two parts: two circular bases ($2\\pi r^2$) and the lateral surface ($2\\pi rh$). Set up the equation and solve the resulting quadratic.",
  skills: ["surface-area", "quadratic-equations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A population of bacteria doubles every 90 minutes. The function modeling this population is $P(t) = P_0 \\cdot 2^{t/90}$, where $t$ is in minutes. Which of the following is an equivalent form that shows the approximate percent increase per minute?",
  choices: [{ id: "A", text: "$P_0(1.0077)^t$" }, { id: "B", text: "$P_0(1.022)^t$" }, { id: "C", text: "$P_0(1.5)^t$" }, { id: "D", text: "$P_0(2.0)^t$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Converting Exponential Periods**\n\n**Choice A is correct.**\n\n**The Fast Way:** $2^{1/90} = (2)^{0.0111} \\approx 1.00773$. So $P(t) = P_0(1.0077)^t$.\n\n**The Full Solution:**\nRewrite $P(t) = P_0 \\cdot 2^{t/90}$ as $P(t) = P_0 \\cdot (2^{1/90})^t$.\nCompute $2^{1/90}$: Using the approximation $\\ln 2 \\approx 0.693$:\n$2^{1/90} = e^{(\\ln 2)/90} = e^{0.00770} \\approx 1.00773$.\nThis means approximately a $0.77\\%$ increase per minute.\n\n**Why the wrong answers are tempting:**\n• B: This would correspond to doubling about every 32 minutes.\n• C: This multiplies by 1.5 every minute — far too fast.\n• D: This would double every minute.\n\n**Test Day Takeaway:** To convert between time periods in exponential models, rewrite $b^{t/k}$ as $(b^{1/k})^t$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "Two rectangular prisms are glued together along one face. Prism A has dimensions $3 \\times 4 \\times 5$ and Prism B has dimensions $3 \\times 4 \\times 7$. The two prisms are glued along their $3 \\times 4$ faces. What is the total surface area of the resulting solid?",
  correctAnswer: "192",
  explanation: "**SAT Pattern: 3D Composite Solid Surface Area**\n\n**The correct answer is 192.**\n\n**The Fast Way:** SA of A $= 2(12+15+20) = 94$. SA of B $= 2(12+21+28) = 122$. Subtract the two hidden $3 \\times 4$ faces: $94 + 122 - 2(12) = 192$.\n\n**The Full Solution:**\nSurface area of Prism A: $2(3 \\cdot 4) + 2(3 \\cdot 5) + 2(4 \\cdot 5) = 24 + 30 + 40 = 94$.\nSurface area of Prism B: $2(3 \\cdot 4) + 2(3 \\cdot 7) + 2(4 \\cdot 7) = 24 + 42 + 56 = 122$.\nWhen glued along the $3 \\times 4$ face, one face from each prism is hidden.\nTotal surface area $= 94 + 122 - 2(3 \\times 4) = 216 - 24 = 192$.\n\n**Test Day Takeaway:** When solids are glued together, subtract twice the area of the glued face (one hidden face from each solid).",
  skills: ["surface-area"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "In right triangle $XYZ$, $\\angle Z = 90°$ and $\\cos X = \\frac{5}{13}$. If $XZ = 10$, what is the area of triangle $XYZ$?",
  choices: [{ id: "A", text: "60" }, { id: "B", text: "120" }, { id: "C", text: "24" }, { id: "D", text: "48" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trig — Area Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\cos X = \\frac{XZ}{XY} = \\frac{5}{13}$. Since $XZ = 10$, we get $XY = 26$. Then $YZ = \\sqrt{26^2 - 10^2} = 24$. Area $= \\frac{1}{2}(10)(24) = 120$.\n\n**The Full Solution:**\nIn right triangle $XYZ$ with right angle at $Z$:\n$\\cos X = \\frac{\\text{adjacent to } X}{\\text{hypotenuse}} = \\frac{XZ}{XY} = \\frac{5}{13}$\nSince $XZ = 10$: $\\frac{10}{XY} = \\frac{5}{13}$, so $XY = 26$.\n$YZ = \\sqrt{XY^2 - XZ^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$.\nArea $= \\frac{1}{2} \\cdot XZ \\cdot YZ = \\frac{1}{2}(10)(24) = 120$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the 5-12-13 triple directly without scaling ($\\frac{1}{2}(5)(12) \\times$ something).\n• C: Uses 24 as the area instead of computing $\\frac{1}{2} \\times$ base $\\times$ height.\n• D: Uses half of 24 times some other dimension.\n\n**Test Day Takeaway:** Use trig ratios to find all sides, then apply the area formula. Watch for scaled Pythagorean triples.",
  skills: ["trigonometry", "triangles", "area"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "The number of users of a social media app increases by 8% every 6 months. If the app currently has 50,000 users, which of the following expressions gives the number of users after $y$ years?",
  choices: [{ id: "A", text: "$50000(1.08)^{2y}$" }, { id: "B", text: "$50000(1.08)^{y/2}$" }, { id: "C", text: "$50000(1.16)^y$" }, { id: "D", text: "$50000(1.08)^y$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth — Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way:** 8% growth every 6 months means a factor of $1.08$ per half-year. In $y$ years, there are $2y$ half-year periods: $50000(1.08)^{2y}$.\n\n**The Full Solution:**\nThe growth factor per 6-month period is $1.08$.\nIn $y$ years, there are $\\frac{y}{0.5} = 2y$ periods of 6 months.\nSo the number of users after $y$ years: $50000(1.08)^{2y}$.\n\nWe can verify: after 1 year ($y = 1$): $50000(1.08)^2 = 50000(1.1664) = 58,320$.\nThis is two consecutive 8% increases: $50000 \\times 1.08 \\times 1.08 = 58,320$ ✓.\n\n**Why the wrong answers are tempting:**\n• B: Uses $y/2$ instead of $2y$ — divides instead of multiplying by 2.\n• C: Doubles the rate to 16% per year, but compounding doesn't work that way.\n• D: Applies 8% once per year instead of twice.\n\n**Test Day Takeaway:** Count the number of growth periods carefully. If growth is every 6 months and time is in years, there are $2y$ periods.",
  skills: ["exponential-functions", "word-problems"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "A sphere has a volume of $288\\pi$ cubic centimeters. What is the surface area of the sphere, in terms of $\\pi$? (Enter the coefficient of $\\pi$.)",
  correctAnswer: "144",
  explanation: "**SAT Pattern: Sphere — Volume to Surface Area**\n\n**The correct answer is 144 (the surface area is $144\\pi$).**\n\n**The Fast Way:** $V = \\frac{4}{3}\\pi r^3 = 288\\pi$, so $r^3 = 216$, giving $r = 6$. Surface area $= 4\\pi r^2 = 4\\pi(36) = 144\\pi$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 288\\pi$\n$r^3 = 288 \\times \\frac{3}{4} = 216$\n$r = \\sqrt[3]{216} = 6$\n\nSurface area $= 4\\pi r^2 = 4\\pi(6)^2 = 4\\pi(36) = 144\\pi$.\nThe coefficient of $\\pi$ is 144.\n\n**Test Day Takeaway:** When converting between volume and surface area, first find the radius from one formula, then substitute into the other.",
  skills: ["volume", "surface-area"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "In the figure, $\\overline{AB}$ is a diameter of the circle with center $O$ and radius 10. Point $C$ is on the circle such that $\\angle BAC = 30°$. What is the length of $\\overline{BC}$?",
  choices: [{ id: "A", text: "5" }, { id: "B", text: "10" }, { id: "C", text: "$10\\sqrt{3}$" }, { id: "D", text: "$5\\sqrt{3}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inscribed Angle in Semicircle**\n\n**Choice B is correct.**\n\n**The Fast Way:** Since $AB$ is a diameter, $\\angle ACB = 90°$ (angle in a semicircle). In right triangle $ACB$: $AB = 20$ (diameter), $\\angle BAC = 30°$, so $BC = AB \\sin 30° = 20 \\times \\frac{1}{2} = 10$.\n\n**The Full Solution:**\nThales' theorem: any angle inscribed in a semicircle is a right angle, so $\\angle ACB = 90°$.\nIn right triangle $ACB$ with hypotenuse $AB = 2r = 20$ and $\\angle BAC = 30°$:\n$\\sin(30°) = \\frac{BC}{AB}$\n$\\frac{1}{2} = \\frac{BC}{20}$\n$BC = 10$\n\nAlternatively, this is a 30-60-90 triangle: hypotenuse 20, shorter leg (opposite 30°) = 10.\n\n**Why the wrong answers are tempting:**\n• A: Uses the radius instead of the diameter as the hypotenuse.\n• C: This would be the side opposite $60°$, which is $AC$, not $BC$.\n• D: Confuses which leg is opposite which angle.\n\n**Test Day Takeaway:** An angle inscribed in a semicircle is always 90°. Combine this with special right triangle ratios.",
  skills: ["triangles", "trigonometry", "circle-equations"]
},
{
  id: 22, type: "multiple-choice", difficulty: "hard",
  question: "A sector of a circle has a central angle of $150°$ and an arc length of $25\\pi$ centimeters. What is the area of the sector, in square centimeters?",
  choices: [{ id: "A", text: "$150\\pi$" }, { id: "B", text: "$375\\pi$" }, { id: "C", text: "$750\\pi$" }, { id: "D", text: "$2250\\pi$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sector Arc Length to Area**\n\n**Choice B is correct.**\n\n**The Fast Way:** Arc length $= \\frac{\\theta}{360} \\cdot 2\\pi r$. So $25\\pi = \\frac{150}{360} \\cdot 2\\pi r = \\frac{5}{6}\\pi r$. Thus $r = 30$. Area of sector $= \\frac{150}{360} \\cdot \\pi(30)^2 = \\frac{5}{12} \\cdot 900\\pi = 375\\pi$.\n\n**The Full Solution:**\nFrom the arc length formula:\n$25\\pi = \\frac{150}{360} \\cdot 2\\pi r$\n$25\\pi = \\frac{5\\pi r}{6}$\n$25 = \\frac{5r}{6}$\n$r = 30$ cm\n\nArea of sector:\n$A = \\frac{\\theta}{360} \\cdot \\pi r^2 = \\frac{150}{360} \\cdot \\pi(900) = \\frac{5}{12} \\cdot 900\\pi = 375\\pi$\n\n**Why the wrong answers are tempting:**\n• A: Uses $r = 10$ from an arithmetic error.\n• C: Forgets to multiply by $\\frac{\\theta}{360}$ in the area step.\n• D: Uses $r^2 = 900$ but multiplies by $\\frac{5}{2}$ instead of $\\frac{5}{12}$.\n\n**Test Day Takeaway:** Use the arc length to find the radius first. Then use the same angle fraction with the area formula. Both formulas use $\\frac{\\theta}{360}$.",
  skills: ["area", "circle-equations"]
}
      ]
    }
  ]
};

export default practiceTest11;
