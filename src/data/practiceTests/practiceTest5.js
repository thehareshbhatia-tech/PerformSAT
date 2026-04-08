// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: biology, architecture, manufacturing, nutrition

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 5 — Math Module 1 (22 questions)
// Theme: algebra-heavy (complex equations, function transformations, absolute value), plus probability

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "What is $15\\%$ of $360$?",
  choices: [
    { id: "A", text: "$24$" },
    { id: "B", text: "$45$" },
    { id: "C", text: "$54$" },
    { id: "D", text: "$315$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $10\\%$ of $360 = 36$. $5\\%$ of $360 = 18$. Total: $36 + 18 = 54$.\n\n**The Full Solution:**\n$15\\%$ of $360 = 0.15 \\times 360 = 54$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{360}{15} = 24$ (divides instead of multiplying).\n• Choice B: Confuses $15\\%$ with $\\frac{1}{8}$: $360 \\div 8 = 45$.\n• Choice D: Computes $360 - 45 = 315$ (subtracts a wrong amount).\n\n**Test Day Takeaway:** Break percentages into $10\\%$ and $5\\%$ for fast mental math.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The equation $5$ more than $7$ times a number $n$ equals $61$ can be written as which of the following?",
  choices: [
    { id: "A", text: "$5n + 7 = 61$" },
    { id: "B", text: "$7n + 5 = 61$" },
    { id: "C", text: "$7(n + 5) = 61$" },
    { id: "D", text: "$5(n + 7) = 61$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Equation Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$7$ times a number\" $= 7n$. \"$5$ more than that\" $= 7n + 5$. Set equal to $61$: $7n + 5 = 61$.\n\n**The Full Solution:**\n\"$7$ times a number $n$\" translates to $7n$.\n\"$5$ more than $7n$\" means $7n + 5$.\nThe equation: $7n + 5 = 61$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the $5$ and $7$ — \"$5$ times $n$ plus $7$\".\n• Choice C: Interprets \"$5$ more than $7$ times $n$\" as $7$ times the quantity $(n + 5)$.\n• Choice D: Completely scrambles the structure.\n\n**Test Day Takeaway:** \"$a$ more than $b$ times $n$\" always means $bn + a$, not $b(n + a)$.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A car travels at a constant speed of $55$ miles per hour. Which equation gives the distance $d$, in miles, the car travels in $h$ hours?",
  choices: [
    { id: "A", text: "$d = \\frac{h}{55}$" },
    { id: "B", text: "$d = h + 55$" },
    { id: "C", text: "$d = 55h$" },
    { id: "D", text: "$h = 55d$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rate × Time = Distance**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** Distance = rate × time = $55 \\times h = 55h$.\n\n**The Full Solution:**\nThe formula for distance at constant speed is $d = rt$, where $r = 55$ mph and $t = h$ hours.\n$d = 55h$\n\n**Why the wrong answers are tempting:**\n• Choice A: Divides $h$ by $55$ instead of multiplying.\n• Choice B: Adds rate and time instead of multiplying.\n• Choice D: Solves for $h$ instead of $d$, and the relationship is inverted.\n\n**Test Day Takeaway:** Distance = rate × time. Always check that the variable you're solving for is on the correct side.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $f(x) = 3x - 10$, what is $f(7)$?",
  choices: [
    { id: "A", text: "$-31$" },
    { id: "B", text: "$-1$" },
    { id: "C", text: "$11$" },
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Evaluating a Function**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $f(7) = 3(7) - 10 = 21 - 10 = 11$.\n\n**The Full Solution:**\nSubstitute $x = 7$ into $f(x) = 3x - 10$:\n$f(7) = 3(7) - 10 = 21 - 10 = 11$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $-(3 \\times 7) - 10 = -31$ (incorrect sign on $3x$).\n• Choice B: Computes $3(7 - 10) = 3(-3) = -9$... not quite, but a subtraction-first error.\n• Choice D: Computes $3(7) + 10 = 31$ (adds instead of subtracts).\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations — multiply before you subtract.",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A recipe uses $\\frac{3}{4}$ cup of sugar for every $2$ cups of flour. How many cups of sugar are needed for $8$ cups of flour?",
  choices: [
    { id: "A", text: "$\\frac{3}{2}$" },
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportional Reasoning**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $8$ cups of flour is $4$ times $2$ cups. So sugar $= 4 \\times \\frac{3}{4} = 3$ cups.\n\n**The Full Solution:**\nSet up a proportion: $\\frac{3/4}{2} = \\frac{x}{8}$.\nCross multiply: $2x = 8 \\cdot \\frac{3}{4} = 6$.\n$x = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Doubles the sugar instead of quadrupling: $2 \\times \\frac{3}{4} = \\frac{3}{2}$.\n• Choice C: Multiplies $\\frac{3}{4} \\times 8 = 6$ then divides by something... or confuses the ratio.\n• Choice D: Computes $\\frac{3}{4} \\times 8 = 6$ without accounting for the \"per $2$ cups\" part.\n\n**Test Day Takeaway:** Find the scale factor first (how many times bigger is the new amount?), then multiply.",
  skills: ["ratios", "word-problems"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $|2x - 7| = 13$, what is the sum of all possible values of $x$?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    { id: "C", text: "$10$" },
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Case 1: $2x - 7 = 13 \\Rightarrow x = 10$. Case 2: $2x - 7 = -13 \\Rightarrow x = -3$. Sum: $10 + (-3) = 7$.\n\n**The Full Solution:**\n$|2x - 7| = 13$ means $2x - 7 = 13$ or $2x - 7 = -13$.\nCase 1: $2x - 7 = 13 \\Rightarrow 2x = 20 \\Rightarrow x = 10$.\nCase 2: $2x - 7 = -13 \\Rightarrow 2x = -6 \\Rightarrow x = -3$.\nSum: $10 + (-3) = 7$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes only $|10 - 7| = 3$ or makes a different error.\n• Choice C: Uses only the positive solution $x = 10$.\n• Choice D: Uses the right-hand side $13$ as the answer.\n\n**Test Day Takeaway:** Absolute value equations always have two cases. The question often asks for the sum or product, so solve both.",
  skills: ["solving-equations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The graph of $y = f(x)$ passes through the point $(2, 5)$. If $g(x) = f(x - 3) + 4$, which point must lie on the graph of $y = g(x)$?",
  choices: [
    { id: "A", text: "$(5, 9)$" },
    { id: "B", text: "$(-1, 9)$" },
    { id: "C", text: "$(5, 1)$" },
    { id: "D", text: "$(-1, 1)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformations**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $f(x-3)$ shifts right $3$, so $x$-coordinate goes from $2$ to $5$. Adding $4$ shifts up $4$, so $y$ goes from $5$ to $9$. Point: $(5, 9)$.\n\n**The Full Solution:**\nWe know $f(2) = 5$.\nWe need $g(x) = f(x-3) + 4$ to use the known value $f(2) = 5$.\nSet $x - 3 = 2$, so $x = 5$.\n$g(5) = f(5 - 3) + 4 = f(2) + 4 = 5 + 4 = 9$.\nSo $(5, 9)$ is on the graph of $g$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Shifts left by $3$ instead of right: $2 - 3 = -1$.\n• Choice C: Subtracts $4$ instead of adding: $5 - 4 = 1$.\n• Choice D: Both errors combined.\n\n**Test Day Takeaway:** $f(x - h) + k$ shifts right $h$ and up $k$. To find the new point, add $h$ to $x$ and $k$ to $y$.",
  skills: ["function-interpretation"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "If $\\frac{x}{3} + \\frac{x}{6} = 10$, what is the value of $x$?",
  correctAnswer: "20",
  explanation: "**SAT Pattern: Solving Equations with Fractions**\n\n**The correct answer is $20$.**\n\n**The Fast Way (15 seconds):** Multiply everything by $6$: $2x + x = 60$, so $3x = 60$, $x = 20$.\n\n**The Full Solution:**\n$\\frac{x}{3} + \\frac{x}{6} = 10$\nThe LCD is $6$. Multiply both sides by $6$:\n$\\frac{6x}{3} + \\frac{6x}{6} = 60$\n$2x + x = 60$\n$3x = 60$\n$x = 20$\n\n**Common Mistakes to Avoid:**\n• Using LCD $= 18$ (an unnecessary multiple that complicates arithmetic).\n• Forgetting to multiply the right side by the LCD.\n\n**Verification:** $\\frac{20}{3} + \\frac{20}{6} = \\frac{40}{6} + \\frac{20}{6} = \\frac{60}{6} = 10$. \\u2713\n\n**Test Day Takeaway:** Multiply through by the LCD to clear all fractions at once.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A bag contains $4$ red balls, $6$ blue balls, and $5$ green balls. Two balls are drawn at random without replacement. What is the probability that both balls are blue?",
  choices: [
    { id: "A", text: "$\\frac{36}{225}$" },
    { id: "B", text: "$\\frac{6}{15}$" },
    { id: "C", text: "$\\frac{1}{7}$" },
    { id: "D", text: "$\\frac{2}{15}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $P = \\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210} = \\frac{1}{7}$.\n\n**The Full Solution:**\nTotal balls $= 4 + 6 + 5 = 15$.\n$P(\\text{1st blue}) = \\frac{6}{15}$.\nAfter drawing one blue ball: $5$ blue remain out of $14$ total.\n$P(\\text{2nd blue} | \\text{1st blue}) = \\frac{5}{14}$.\n$P(\\text{both blue}) = \\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210} = \\frac{1}{7}$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses replacement: $(\\frac{6}{15})^2 = \\frac{36}{225}$.\n• Choice B: Gives only the first probability $\\frac{6}{15}$, not the combined probability.\n• Choice D: A common incorrect simplification.\n\n**Test Day Takeaway:** \"Without replacement\" means the second draw has one fewer in both numerator and denominator.",
  skills: ["probability"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $h$ is defined by $h(x) = 2(x - 4)^2 - 18$. What is the minimum value of $h(x)$?",
  choices: [
    { id: "A", text: "$-18$" },
    { id: "B", text: "$-4$" },
    { id: "C", text: "$4$" },
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** In vertex form $a(x-h)^2 + k$, the minimum value is $k$ when $a > 0$. Here $k = -18$.\n\n**The Full Solution:**\n$h(x) = 2(x - 4)^2 - 18$ is in vertex form with $a = 2 > 0$ (opens upward), vertex at $(4, -18)$.\nSince the parabola opens upward, the vertex gives the minimum.\nMinimum value $= -18$, occurring at $x = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses the $x$-coordinate of the vertex ($-4$ with a sign error) instead of the $y$-value.\n• Choice C: Uses the $x$-coordinate of the vertex.\n• Choice D: Computes $2(0-4)^2 - 18 = 32 - 18 = 14$ (evaluates at $x = 0$ instead of reading the vertex).\n\n**Test Day Takeaway:** In $a(x-h)^2 + k$, the vertex is at $(h, k)$. If $a > 0$, $k$ is the minimum.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "If $3(2x - 5) - 4(x + 3) = 7$, what is the value of $x$?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (20 seconds):** Distribute: $6x - 15 - 4x - 12 = 7$. Combine: $2x - 27 = 7$. Solve: $2x = 34$, $x = 17$.\n\n**The Full Solution:**\n$3(2x - 5) - 4(x + 3) = 7$\n$6x - 15 - 4x - 12 = 7$\n$(6x - 4x) + (-15 - 12) = 7$\n$2x - 27 = 7$\n$2x = 34$\n$x = 17$\n\n**Common Mistakes to Avoid:**\n• Distributing the negative sign incorrectly: $-4(x + 3) = -4x - 12$, not $-4x + 12$.\n• Combining constants wrong: $-15 - 12 = -27$, not $-3$.\n\n**Verification:** $3(34 - 5) - 4(17 + 3) = 3(29) - 4(20) = 87 - 80 = 7$. \\u2713\n\n**Test Day Takeaway:** Distribute carefully, especially with negative signs, then combine like terms.",
  skills: ["solving-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A company's revenue $R$ in thousands of dollars is modeled by $R(t) = 150(1.08)^t$, where $t$ is the number of years since $2020$. What does the value $1.08$ represent?",
  choices: [
    { id: "A", text: "The revenue increases by $\\$1.08$ thousand each year." },
    { id: "B", text: "The revenue increases by $8\\%$ each year." },
    { id: "C", text: "The revenue increases by $108\\%$ each year." },
    { id: "D", text: "The revenue will be $\\$1.08$ thousand in year $t$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpreting Exponential Growth Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $a \\cdot b^t$, the base $b = 1.08 = 1 + 0.08$, so the growth rate is $0.08 = 8\\%$ per year.\n\n**The Full Solution:**\nThe exponential model $R(t) = 150(1.08)^t$ has the form $P_0(1 + r)^t$.\nHere $1 + r = 1.08$, so $r = 0.08 = 8\\%$.\nThis means the revenue grows by $8\\%$ each year.\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses exponential growth (percent) with linear growth (constant amount).\n• Choice C: Interprets $1.08$ as $108\\%$ increase, rather than a $1.08$ multiplier (which is $8\\%$ increase).\n• Choice D: Misinterprets the base as an output value.\n\n**Test Day Takeaway:** In $P_0(1 + r)^t$, the growth rate is $r$, not the entire base. Subtract $1$ from the base to find the rate.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The line passes through the points $(-2, 9)$ and $(4, -3)$. What is the equation of this line?",
  choices: [
    { id: "A", text: "$y = -2x + 5$" },
    { id: "B", text: "$y = 2x + 13$" },
    { id: "C", text: "$y = -2x - 5$" },
    { id: "D", text: "$y = -\\frac{1}{2}x + 8$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Equation of Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{-3 - 9}{4 - (-2)} = \\frac{-12}{6} = -2$. Using $(4, -3)$: $-3 = -2(4) + b \\Rightarrow b = 5$. So $y = -2x + 5$.\n\n**The Full Solution:**\nSlope $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-3 - 9}{4 - (-2)} = \\frac{-12}{6} = -2$.\nUsing point-slope with $(4, -3)$:\n$y - (-3) = -2(x - 4)$\n$y + 3 = -2x + 8$\n$y = -2x + 5$\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses positive slope $+2$ instead of $-2$.\n• Choice C: Correct slope but wrong $y$-intercept calculation.\n• Choice D: Uses $\\frac{6}{-12} = -\\frac{1}{2}$ (reciprocal of the slope).\n\n**Test Day Takeaway:** Calculate slope first with $(y_2 - y_1)/(x_2 - x_1)$, then plug one point back in to find the intercept.",
  skills: ["slope", "linear-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "In a class of $30$ students, $18$ play soccer, $12$ play basketball, and $5$ play both. How many students play neither soccer nor basketball?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Inclusion-Exclusion Principle**\n\n**The correct answer is $5$.**\n\n**The Fast Way (15 seconds):** At least one sport: $18 + 12 - 5 = 25$. Neither: $30 - 25 = 5$.\n\n**The Full Solution:**\nUsing inclusion-exclusion:\n$|\\text{Soccer} \\cup \\text{Basketball}| = |\\text{Soccer}| + |\\text{Basketball}| - |\\text{Both}|$\n$= 18 + 12 - 5 = 25$\nStudents playing neither: $30 - 25 = 5$.\n\n**Common Mistakes to Avoid:**\n• Forgetting to subtract the overlap: $18 + 12 = 30$, then thinking everyone plays a sport.\n• Subtracting the overlap twice.\n\n**Verification:** Soccer only: $13$. Basketball only: $7$. Both: $5$. Neither: $5$. Total: $13 + 7 + 5 + 5 = 30$. \\u2713\n\n**Test Day Takeaway:** $|A \\cup B| = |A| + |B| - |A \\cap B|$. Then subtract from total for \"neither.\"",
  skills: ["probability", "statistics"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $f$ is defined by $f(x) = -2(x + 3)^2 + 50$. The function $g$ is defined by $g(x) = -2(x - 5)^2 + 50$. Which of the following correctly describes the relationship between the graphs of $f$ and $g$?",
  choices: [
    { id: "A", text: "The graph of $g$ is the graph of $f$ translated $2$ units to the right." },
    { id: "B", text: "The graph of $g$ is the graph of $f$ translated $8$ units to the right." },
    { id: "C", text: "The graph of $g$ is the graph of $f$ translated $8$ units to the left." },
    { id: "D", text: "The graph of $g$ is the graph of $f$ reflected over the $y$-axis." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Comparing Function Transformations**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Vertex of $f$: $(-3, 50)$. Vertex of $g$: $(5, 50)$. Horizontal shift: $5 - (-3) = 8$ units right.\n\n**The Full Solution:**\n$f(x) = -2(x + 3)^2 + 50$ has vertex at $(-3, 50)$.\n$g(x) = -2(x - 5)^2 + 50$ has vertex at $(5, 50)$.\nSame $a$ value ($-2$) and same $k$ value ($50$), so the shape and vertical position are identical.\nThe vertex moved from $x = -3$ to $x = 5$, a shift of $5 - (-3) = 8$ units to the right.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $5 - 3 = 2$ by ignoring the negative sign in $-3$.\n• Choice C: Gets the direction backwards.\n• Choice D: A reflection over the $y$-axis would change $f(x)$ to $f(-x)$, which would give a different expression.\n\n**Test Day Takeaway:** Compare vertices of quadratics in vertex form to determine horizontal and vertical shifts.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $c$ does the equation $3x^2 - 12x + c = 0$ have exactly one real solution?",
  choices: [
    { id: "A", text: "$-12$" },
    { id: "B", text: "$4$" },
    { id: "C", text: "$12$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Discriminant $= 0$: $(-12)^2 - 4(3)(c) = 0 \\Rightarrow 144 - 12c = 0 \\Rightarrow c = 12$.\n\n**The Full Solution:**\nA quadratic $ax^2 + bx + c = 0$ has exactly one real solution when the discriminant equals zero:\n$b^2 - 4ac = 0$\nHere $a = 3$, $b = -12$:\n$(-12)^2 - 4(3)(c) = 0$\n$144 - 12c = 0$\n$12c = 144$\n$c = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A: Sets $b^2 + 4ac = 0$ (adding instead of subtracting): $144 + 12c = 0 \\Rightarrow c = -12$.\n• Choice B: Divides $-12$ by $-3$: confuses the discriminant formula with solving $-12/3$.\n• Choice D: Computes $(-12)^2 = 144$ but sets $c = 144/4 = 36$ (divides by $4$ instead of $12$).\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$: set $b^2 - 4ac = 0$ and solve for the unknown.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\frac{2}{x - 3} + \\frac{5}{x + 3} = \\frac{19}{x^2 - 9}$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Rational Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (30 seconds):** Note $x^2 - 9 = (x-3)(x+3)$. Multiply through by $(x-3)(x+3)$: $2(x+3) + 5(x-3) = 19$. Simplify: $7x - 9 = 19$, so $x = 4$.\n\n**The Full Solution:**\nNote $x^2 - 9 = (x-3)(x+3)$. Multiply both sides by $(x-3)(x+3)$:\n$2(x+3) + 5(x-3) = 19$\n$2x + 6 + 5x - 15 = 19$\n$7x - 9 = 19$\n$7x = 28$\n$x = 4$\n\nCheck that $x = 4$ doesn't make any denominator zero: $4 - 3 = 1 \neq 0$, $4 + 3 = 7 \neq 0$. \\u2713\n\n**Common Mistakes to Avoid:**\n• Forgetting to check that the solution doesn't create a zero denominator.\n• Distributing the $5$ incorrectly: $5(x - 3) = 5x - 15$, not $5x - 3$.\n\n**Verification:** $\\frac{2}{1} + \\frac{5}{7} = \\frac{14}{7} + \\frac{5}{7} = \\frac{19}{7}$. And $\\frac{19}{4^2 - 9} = \\frac{19}{7}$. \\u2713\n\n**Test Day Takeaway:** Factor the denominator, multiply through by the LCD, and always check for extraneous solutions.",
  skills: ["solving-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A quadratic function $f$ has roots at $x = -2$ and $x = 7$. If $f(1) = 36$, what is $f(0)$?",
  choices: [
    { id: "A", text: "$-28$" },
    { id: "B", text: "$28$" },
    { id: "C", text: "$-42$" },
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic from Roots and a Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** $f(x) = a(x + 2)(x - 7)$. Use $f(1) = 36$: $a(3)(-6) = 36 \\Rightarrow -18a = 36 \\Rightarrow a = -2$. Then $f(0) = -2(2)(-7) = 28$.\n\n**The Full Solution:**\nSince the roots are $-2$ and $7$:\n$f(x) = a(x + 2)(x - 7)$ for some constant $a$.\nUsing $f(1) = 36$:\n$a(1 + 2)(1 - 7) = 36$\n$a(3)(-6) = 36$\n$-18a = 36$\n$a = -2$\n\nNow find $f(0)$:\n$f(0) = -2(0 + 2)(0 - 7) = -2(2)(-7) = -2 \\times (-14) = 28$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $-2(2)(-7)$ but mishandles signs to get $-28$.\n• Choice C: Uses $a = -2$ and computes $-2 \\cdot 2 \\cdot 7 \\cdot 3 = -84$... or another sign error leading to $-42$.\n• Choice D: Computes $(2)(7) \\times 3 = 42$ without properly using $a$.\n\n**Test Day Takeaway:** Write the factored form from the roots, use the given condition to find $a$, then evaluate.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  question: "If $9^{x+1} = 27^{x}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $2$.**\n\n**The Fast Way (20 seconds):** Rewrite: $3^{2(x+1)} = 3^{3x}$. So $2x + 2 = 3x$, giving $x = 2$.\n\n**The Full Solution:**\n$9^{x+1} = 27^x$\n$(3^2)^{x+1} = (3^3)^x$\n$3^{2(x+1)} = 3^{3x}$\n$3^{2x+2} = 3^{3x}$\nSince the bases are equal, set exponents equal:\n$2x + 2 = 3x$\n$2 = x$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute: $2(x + 1) = 2x + 2$, not $2x + 1$.\n• Writing $27 = 3^2$ instead of $3^3$.\n\n**Verification:** $9^{2+1} = 9^3 = 729$. $27^2 = 729$. \\u2713\n\n**Test Day Takeaway:** Convert both sides to the same base, then set exponents equal.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the graph of $y = x^2 - 6x + k$ is tangent to the $x$-axis. What is the value of $k$?",
  choices: [
    { id: "A", text: "$-9$" },
    { id: "B", text: "$0$" },
    { id: "C", text: "$6$" },
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Tangent to Axis Means Discriminant = 0**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Tangent to $x$-axis means exactly one $x$-intercept, so discriminant $= 0$. $(-6)^2 - 4(1)(k) = 0 \\Rightarrow 36 - 4k = 0 \\Rightarrow k = 9$.\n\n**The Full Solution:**\n\"Tangent to the $x$-axis\" means the parabola touches the $x$-axis at exactly one point, i.e., the equation $x^2 - 6x + k = 0$ has exactly one solution.\nThis requires discriminant $= 0$:\n$b^2 - 4ac = 0$\n$(-6)^2 - 4(1)(k) = 0$\n$36 - 4k = 0$\n$4k = 36$\n$k = 9$\n\nAlternatively, complete the square: $y = (x - 3)^2 - 9 + k$. Tangent to $x$-axis means vertex on $x$-axis: $-9 + k = 0$, so $k = 9$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Sets $-9 + k = 0$ but gets $k = -9$ from a sign error.\n• Choice B: Assumes tangent means passing through the origin.\n• Choice C: Uses $b = 6$ and confuses it with $k$.\n\n**Test Day Takeaway:** \"Tangent to the $x$-axis\" = discriminant is zero = vertex sits on the $x$-axis.",
  skills: ["discriminant", "quadratic-equations", "vertex-form"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A deck contains $10$ red cards numbered $1$–$10$ and $10$ blue cards numbered $1$–$10$. One card is drawn at random. What is the probability that the card is red OR has a number greater than $7$?",
  choices: [
    { id: "A", text: "$\\frac{10}{20}$" },
    { id: "B", text: "$\\frac{13}{20}$" },
    { id: "C", text: "$\\frac{16}{20}$" },
    { id: "D", text: "$\\frac{7}{10}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Probability with OR (Inclusion-Exclusion)**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $P(\\text{red}) = \\frac{10}{20}$. $P(>7) = \\frac{6}{20}$ (cards 8, 9, 10 in each color). $P(\\text{red AND} > 7) = \\frac{3}{20}$. By inclusion-exclusion: $\\frac{10 + 6 - 3}{20} = \\frac{13}{20}$.\n\n**The Full Solution:**\n$P(\\text{red}) = \\frac{10}{20}$ (all $10$ red cards).\n$P(\\text{number} > 7) = \\frac{6}{20}$ (red $8, 9, 10$ and blue $8, 9, 10$).\n$P(\\text{red AND number} > 7) = \\frac{3}{20}$ (red $8, 9, 10$).\n$P(\\text{red OR number} > 7) = \\frac{10}{20} + \\frac{6}{20} - \\frac{3}{20} = \\frac{13}{20}$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Only counts $P(\\text{red}) = \\frac{10}{20}$ and ignores the \"OR\" part.\n• Choice C: Adds without subtracting overlap: $\\frac{10 + 6}{20} = \\frac{16}{20}$.\n• Choice D: Simplifies $\\frac{14}{20}$ from a different calculation.\n\n**Test Day Takeaway:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Always subtract the overlap.",
  skills: ["probability"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "The system of equations below has the solution $(x, y)$.\n\n$4x - 3y = 0$\n$x^2 + y = 13$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Nonlinear System of Equations**\n\n**The correct answer is $4$.**\n\n**The Fast Way (45 seconds):** From the second equation: $y = 13 - x^2$. Substitute into the first: $4x - 3(13 - x^2) = 0$. Simplify: $3x^2 + 4x - 39 = 0$. Factor: $(3x + 13)(x - 3) = 0$. Since $x > 0$, $x = 3$, so $y = 13 - 9 = 4$.\n\n**The Full Solution:**\nFrom the second equation: $y = 13 - x^2$.\nSubstitute into the first: $4x - 3(13 - x^2) = 0$\n$4x - 39 + 3x^2 = 0$\n$3x^2 + 4x - 39 = 0$\n$(3x + 13)(x - 3) = 0$\n$x = -\\frac{13}{3}$ or $x = 3$\n\nSince $x > 0$: $x = 3$.\n$y = 13 - 3^2 = 13 - 9 = 4$.\n\n**Common Mistakes to Avoid:**\n• Choosing $x = -\\frac{13}{3}$ instead of $x = 3$.\n• Substituting into the wrong equation to find $y$.\n\n**Verification:** $4(3) - 3(4) = 12 - 12 = 0$. \\u2713. $9 + 4 = 13$. \\u2713\n\n**Test Day Takeaway:** For nonlinear systems, isolate one variable and substitute into the other equation.",
  skills: ["systems-of-equations", "quadratic-equations"]
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
  question: "A survey of 200 students found that 45% preferred online classes. How many students preferred online classes?",
  choices: [{ id: "A", text: "45" }, { id: "B", text: "80" }, { id: "C", text: "90" }, { id: "D", text: "110" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way:** $200 \\times 0.45 = 90$.\n\n**The Full Solution:**\n45% of 200 means $\\frac{45}{100} \\times 200 = 90$ students.\n\n**Why the wrong answers are tempting:**\n• A: Confuses the percentage (45) with the count.\n• B: Computes $200 \\times 0.40$.\n• D: Computes $200 \\times 0.55$, the complement.\n\n**Test Day Takeaway:** \"Percent of\" means multiply the decimal form by the total.",
  skills: ["percents"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A data set has a mean of 24 and a standard deviation of 3. Which value is more than 2 standard deviations above the mean?",
  choices: [{ id: "A", text: "27" }, { id: "B", text: "29" }, { id: "C", text: "30" }, { id: "D", text: "31" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Standard Deviation Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way:** $24 + 2(3) = 30$. Any value greater than 30 qualifies, so 31.\n\n**The Full Solution:**\nTwo standard deviations above the mean is $24 + 2 \\times 3 = 30$. The question asks for more than 2 standard deviations above, so the value must exceed 30. Only 31 > 30.\n\n**Why the wrong answers are tempting:**\n• A: This is exactly 1 standard deviation above.\n• B: This is between 1 and 2 standard deviations above.\n• C: This is exactly 2 standard deviations above, not more than 2.\n\n**Test Day Takeaway:** \"More than\" means strictly greater than the boundary value.",
  skills: ["statistics"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "The function $f(x) = 350(1.04)^x$ models the value of an investment after $x$ years. What does the number 350 represent in this context?",
  choices: [{ id: "A", text: "The annual interest rate" }, { id: "B", text: "The value after 1 year" }, { id: "C", text: "The initial value of the investment" }, { id: "D", text: "The number of years" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Model Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way:** In $f(x) = a \\cdot b^x$, the coefficient $a$ is the initial value when $x = 0$.\n\n**The Full Solution:**\nWhen $x = 0$, $f(0) = 350(1.04)^0 = 350 \\times 1 = 350$. So 350 is the value at time zero, which is the initial investment.\n\n**Why the wrong answers are tempting:**\n• A: The interest rate comes from the base: $1.04 - 1 = 0.04 = 4\\%$.\n• B: The value after 1 year is $350(1.04) = 364$.\n• D: $x$ represents the number of years, not 350.\n\n**Test Day Takeaway:** In exponential models $a \\cdot b^x$, the coefficient $a$ is always the starting value.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "A line passes through the points $(2, 5)$ and $(6, 13)$. What is the slope of the line?",
  choices: [{ id: "A", text: "$\\frac{1}{2}$" }, { id: "B", text: "$2$" }, { id: "C", text: "$4$" }, { id: "D", text: "$8$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way:** $m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nSlope $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n• A: Inverts the fraction to get $\\frac{4}{8}$.\n• C: Uses only the $x$-difference.\n• D: Uses only the $y$-difference.\n\n**Test Day Takeaway:** Slope is rise over run: change in $y$ divided by change in $x$.",
  skills: ["slope"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "In a class of 30 students, 18 play soccer and 7 play both soccer and basketball. If 20 students play at least one of the two sports, how many play only basketball?",
  choices: [{ id: "A", text: "2" }, { id: "B", text: "5" }, { id: "C", text: "7" }, { id: "D", text: "9" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Two-Group Overlap**\n\n**Choice A is correct.**\n\n**The Fast Way:** Only soccer $= 18 - 7 = 11$. Only basketball $= 20 - 11 - 7 = 2$.\n\n**The Full Solution:**\nUsing the inclusion-exclusion principle: Soccer $\\cup$ Basketball $=$ Soccer $+$ Basketball $-$ Both. So $20 = 18 + B - 7$, giving $B = 9$ total basketball players. Only basketball $= 9 - 7 = 2$.\n\n**Why the wrong answers are tempting:**\n• B: Subtracts 7 from a wrong total.\n• C: This is the overlap (both sports), not only basketball.\n• D: This is the total basketball count, not only basketball.\n\n**Test Day Takeaway:** Draw a Venn diagram and fill in the overlap first.",
  skills: ["probability"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "A researcher collected data on the hours studied and test scores for 15 students. The line of best fit is $y = 8.2x + 42$, where $x$ is hours studied and $y$ is the predicted test score. One student studied for 5 hours and scored 89. What is the residual for this student?",
  choices: [{ id: "A", text: "$-6$" }, { id: "B", text: "$-3$" }, { id: "C", text: "$3$" }, { id: "D", text: "$6$" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Residual Calculation**\n\n**Choice D is correct.**\n\n**The Fast Way:** Predicted $= 8.2(5) + 42 = 83$. Residual $= 89 - 83 = 6$.\n\n**The Full Solution:**\nThe residual is actual minus predicted. Predicted score: $y = 8.2(5) + 42 = 41 + 42 = 83$. Residual $= 89 - 83 = 6$. A positive residual means the actual score was above the line of best fit.\n\n**Why the wrong answers are tempting:**\n• A: Computes predicted minus actual and makes an arithmetic error.\n• B: Arithmetic error in the predicted value.\n• C: Gets the magnitude right but the sign reversed (predicted minus actual).\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means the point is above the line.",
  skills: ["statistics"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "The population of a town was 12,000 in 2010 and has been decreasing by 3% per year since then. Which function models the population $P$ after $t$ years since 2010?",
  choices: [{ id: "A", text: "$P(t) = 12000(0.03)^t$" }, { id: "B", text: "$P(t) = 12000(0.97)^t$" }, { id: "C", text: "$P(t) = 12000(1.03)^t$" }, { id: "D", text: "$P(t) = 12000 - 360t$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice B is correct.**\n\n**The Fast Way:** Decreasing by 3% means the base is $1 - 0.03 = 0.97$.\n\n**The Full Solution:**\nExponential decay: $P(t) = P_0(1 - r)^t$ where $P_0 = 12000$ and $r = 0.03$. So $P(t) = 12000(0.97)^t$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $0.03$ as the base instead of $1 - 0.03$.\n• C: Uses $1.03$, which models 3% growth, not decay.\n• D: Models linear decrease ($12000 \\times 0.03 = 360$ per year), but population decrease is compounding.\n\n**Test Day Takeaway:** For percent decrease, the base is $1 - r$. For percent increase, the base is $1 + r$.",
  skills: ["exponential-functions"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "A dataset has the following five-number summary:\n\nMinimum: 12, $Q_1$: 18, Median: 25, $Q_3$: 34, Maximum: 47\n\nWhat is the interquartile range (IQR) of the dataset?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Five-Number Summary and IQR**\n\n**The answer is 16.**\n\n**The Fast Way:** $IQR = Q_3 - Q_1 = 34 - 18 = 16$.\n\n**The Full Solution:**\nThe interquartile range measures the spread of the middle 50% of data. It is calculated as $Q_3 - Q_1 = 34 - 18 = 16$.\n\n**Common Mistakes:**\n• Computing the range instead: $47 - 12 = 35$.\n• Using the median: $34 - 25 = 9$ or $25 - 18 = 7$.\n\n**Test Day Takeaway:** IQR is always $Q_3 - Q_1$. It ignores the minimum, maximum, and median.",
  skills: ["statistics"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "A study of 12 stores compares advertising spending (in thousands of dollars) and monthly revenue (in thousands of dollars). The linear model for the data has the equation $y = 2.4x + 15$. According to this model, what is the predicted monthly revenue for a store that spends \\$8,000 on advertising?",
  choices: [{ id: "A", text: "\\$19,200" }, { id: "B", text: "\\$34,200" }, { id: "C", text: "\\$34,000" }, { id: "D", text: "\\$192,000" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line of Best Fit Prediction with Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way:** $x = 8$ (thousands), so $y = 2.4(8) + 15 = 19.2 + 15 = 34.2$ thousand $= \\$34{,}200$.\n\n**The Full Solution:**\nSince both axes are in thousands, \\$8,000 means $x = 8$. Substituting: $y = 2.4(8) + 15 = 19.2 + 15 = 34.2$. Since $y$ is in thousands, the revenue is $34.2 \\times 1000 = \\$34{,}200$.\n\n**Why the wrong answers are tempting:**\n• A: Forgets to add the $y$-intercept.\n• C: Rounds $34.2$ to $34$ before converting.\n• D: Substitutes $x = 8000$ instead of $x = 8$.\n\n**Test Day Takeaway:** Always check the units on the axes before substituting values.",
  skills: ["statistics", "linear-functions"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "A bacteria culture triples every 4 hours. If the culture starts with 200 bacteria, which expression gives the number of bacteria after $h$ hours?",
  choices: [{ id: "A", text: "$200(3)^{4h}$" }, { id: "B", text: "$200(3)^{h/4}$" }, { id: "C", text: "$200(3)^{h-4}$" }, { id: "D", text: "$600^{h/4}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth with Period**\n\n**Choice B is correct.**\n\n**The Fast Way:** Triples every 4 hours means the exponent counts how many 4-hour periods have passed: $h/4$.\n\n**The Full Solution:**\nThe general form is $N = N_0 \\cdot r^{t/p}$ where $N_0 = 200$ is the initial amount, $r = 3$ is the growth factor, and $p = 4$ is the period. So $N = 200(3)^{h/4}$.\n\nCheck: at $h = 4$, $N = 200(3)^1 = 600$ (tripled). At $h = 8$, $N = 200(3)^2 = 1800$ (tripled again). Correct.\n\n**Why the wrong answers are tempting:**\n• A: Multiplies the exponent by 4 instead of dividing, making it grow far too fast.\n• C: Subtracts 4 from $h$, which shifts the function rather than scaling the rate.\n• D: Incorrectly combines $200 \\times 3 = 600$ into the base.\n\n**Test Day Takeaway:** When something changes every $p$ units, the exponent is $t/p$.",
  skills: ["exponential-functions"]
},
{
  id: 11, type: "multiple-choice", difficulty: "medium",
  question: "A random sample of 500 voters in a city found that 58% support a new park initiative, with a margin of error of 4 percentage points at a 95% confidence level. Which statement is the best interpretation of this result?",
  choices: [{ id: "A", text: "Exactly 58% of all voters in the city support the initiative." }, { id: "B", text: "Between 54% and 62% of the sample support the initiative." }, { id: "C", text: "It is plausible that between 54% and 62% of all voters in the city support the initiative." }, { id: "D", text: "95% of all voters support the initiative with 4% uncertainty." }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way:** The confidence interval is $58\\% \\pm 4\\%$, so $[54\\%, 62\\%]$. This interval estimates the true population proportion.\n\n**The Full Solution:**\nA margin of error of 4% at 95% confidence means we are 95% confident that the true population proportion is within $58\\% \\pm 4\\% = [54\\%, 62\\%]$. The interval applies to the population, not the sample.\n\n**Why the wrong answers are tempting:**\n• A: A sample statistic estimates but does not equal the population parameter.\n• B: We already know the sample result; the interval is about the population.\n• D: Misinterprets both the confidence level and the margin of error.\n\n**Test Day Takeaway:** Margin of error creates an interval for the population parameter, not the sample.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 12, type: "fill-in", difficulty: "medium",
  question: "The number of subscribers to a streaming service is modeled by $S(t) = 8000(1.06)^t$, where $t$ is the number of years after 2020. According to the model, in what year will the number of subscribers first exceed 12,000?\n\n(Use the fact that $\\log(1.5) \\approx 0.176$ and $\\log(1.06) \\approx 0.025$.)",
  correctAnswer: "2028",
  explanation: "**SAT Pattern: Solving Exponential Inequality**\n\n**The answer is 2028.**\n\n**The Fast Way:** $8000(1.06)^t > 12000 \\Rightarrow (1.06)^t > 1.5 \\Rightarrow t > \\frac{\\log 1.5}{\\log 1.06} \\approx \\frac{0.176}{0.025} = 7.04$. So $t = 8$, meaning the year is $2020 + 8 = 2028$.\n\n**The Full Solution:**\nDivide both sides by 8000: $(1.06)^t > 1.5$.\nTake logarithms: $t \\cdot \\log(1.06) > \\log(1.5)$.\n$t > \\frac{0.176}{0.025} = 7.04$.\nSince $t$ must be a whole number and we need to exceed (not equal), $t = 8$.\nYear $= 2020 + 8 = 2028$.\n\n**Common Mistakes:**\n• Writing 2027 by rounding $7.04$ down to $7$ instead of up to $8$.\n• Forgetting to add 2020.\n\n**Test Day Takeaway:** For \"first exceeds,\" always round up to the next whole number.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "The table below shows the results of a survey about preferred exercise type by age group.\n\n|  | Running | Swimming | Cycling | Total |\n|---|---|---|---|---|\n| Under 30 | 45 | 30 | 25 | 100 |\n| 30 and over | 20 | 35 | 45 | 100 |\n| Total | 65 | 65 | 70 | 200 |\n\nWhat proportion of people who prefer cycling are under 30?",
  choices: [{ id: "A", text: "$\\frac{25}{100}$" }, { id: "B", text: "$\\frac{25}{70}$" }, { id: "C", text: "$\\frac{45}{70}$" }, { id: "D", text: "$\\frac{70}{200}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way:** \"Of people who prefer cycling\" means the denominator is the cycling column total (70). Under 30 who prefer cycling: 25. So $\\frac{25}{70}$.\n\n**The Full Solution:**\nThis is a conditional probability: $P(\\text{Under 30} \\mid \\text{Cycling}) = \\frac{25}{70}$. The condition (cycling) determines the denominator.\n\n**Why the wrong answers are tempting:**\n• A: Uses 100 (Under 30 row total) as denominator instead of 70.\n• C: Uses 45 (the 30+ cycling count) as the numerator.\n• D: Gives the proportion of all people who prefer cycling, ignoring the age condition.\n\n**Test Day Takeaway:** The word after \"of\" or \"given\" determines your denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14, type: "multiple-choice", difficulty: "medium",
  question: "A statistician wants to estimate the average commute time of employees in a large company. She takes a random sample of 80 employees and finds a mean commute of 34 minutes with a margin of error of 3 minutes. If she wants to reduce the margin of error to approximately 1.5 minutes, which sample size is closest to what she needs?",
  choices: [{ id: "A", text: "160" }, { id: "B", text: "240" }, { id: "C", text: "320" }, { id: "D", text: "640" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error and Sample Size**\n\n**Choice C is correct.**\n\n**The Fast Way:** Halving the margin of error requires quadrupling the sample size: $80 \\times 4 = 320$.\n\n**The Full Solution:**\nThe margin of error is proportional to $\\frac{1}{\\sqrt{n}}$. To reduce the margin of error by a factor of $k$, you must multiply $n$ by $k^2$.\n\nShe wants to go from 3 to 1.5, which is a factor of $\\frac{3}{1.5} = 2$. So she needs $80 \\times 2^2 = 80 \\times 4 = 320$ employees.\n\n**Why the wrong answers are tempting:**\n• A: Doubles the sample size, but that only reduces MOE by factor $\\sqrt{2} \\approx 1.41$.\n• B: Triples the sample size.\n• D: Over-quadruples unnecessarily.\n\n**Test Day Takeaway:** To cut margin of error in half, multiply sample size by 4.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The function $f(x) = 8600(0.72)^{x/6}$ models the value, in dollars, of a piece of equipment $x$ months after purchase. Which of the following is closest to the percent decrease in value per year?",
  choices: [{ id: "A", text: "28%" }, { id: "B", text: "48%" }, { id: "C", text: "52%" }, { id: "D", text: "72%" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Converting Exponential Period to Annual Rate**\n\n**Choice B is correct.**\n\n**The Fast Way:** One year = 12 months, so the annual factor is $(0.72)^{12/6} = (0.72)^2 = 0.5184$. The annual decrease is $1 - 0.5184 = 0.4816 \\approx 48\\%$.\n\n**The Full Solution:**\nThe function decreases by factor $0.72$ every 6 months. In one year (12 months):\n$f(12) = 8600(0.72)^{12/6} = 8600(0.72)^2 = 8600(0.5184) = 4458.24$.\n\nPercent decrease $= \\frac{8600 - 4458.24}{8600} \\times 100 = 48.16\\% \\approx 48\\%$.\n\n**Why the wrong answers are tempting:**\n• A: This is the 6-month decrease ($1 - 0.72 = 0.28$), not the annual decrease.\n• C: Confuses $1 - 0.4816$ with $0.5184$.\n• D: Uses the base $0.72$ as if it were the annual rate.\n\n**Test Day Takeaway:** To convert periods, raise the base to the ratio of desired period to given period.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A researcher measures the heights (in cm) of plants under two different fertilizers. Fertilizer A has $n_A = 40$ plants with mean $\\bar{x}_A = 24.3$ and standard deviation $s_A = 3.1$. Fertilizer B has $n_B = 40$ plants with mean $\\bar{x}_B = 22.7$ and standard deviation $s_B = 4.5$. Which of the following is the most appropriate conclusion?",
  choices: [{ id: "A", text: "Fertilizer A causes taller plants because its mean is higher." }, { id: "B", text: "The difference in means provides evidence that Fertilizer A is associated with taller plants, but a causal claim requires knowing whether this was a randomized experiment." }, { id: "C", text: "There is no meaningful difference because the standard deviations overlap." }, { id: "D", text: "Fertilizer B is better because it has more variability, indicating it works on more plant types." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Observational vs. Experimental Study Conclusions**\n\n**Choice B is correct.**\n\n**The Fast Way:** Without knowing if this was a randomized experiment, we can note an association but cannot claim causation.\n\n**The Full Solution:**\nThe data shows Fertilizer A has a higher mean (24.3 vs 22.7). However, to claim that Fertilizer A causes taller growth, the study must be a randomized controlled experiment. If plants were not randomly assigned to fertilizers, confounding variables could explain the difference. The correct conclusion acknowledges the observed difference while noting the limitation.\n\n**Why the wrong answers are tempting:**\n• A: Jumps to a causal claim without knowing the study design.\n• C: Standard deviations measure spread within groups, not whether the means differ meaningfully.\n• D: Higher variability is not an advantage; it makes results less consistent.\n\n**Test Day Takeaway:** Only randomized experiments support causal claims. Observational studies show association only.",
  skills: ["statistics"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "A data set contains the following values:\n\n2, 3, 3, 4, 4, 4, 5, 5, 6, 7\n\nA new value of 48 is added to the data set. What is the new median of the 11 values?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Effect of Outlier on Median**\n\n**The answer is 4.**\n\n**The Fast Way:** With 11 values, the median is the 6th value when sorted. The original sorted data plus 48 at the end: 2, 3, 3, 4, 4, **4**, 5, 5, 6, 7, 48. The 6th value is 4.\n\n**The Full Solution:**\nOriginal data sorted: 2, 3, 3, 4, 4, 4, 5, 5, 6, 7 (10 values, median is average of 5th and 6th = $\\frac{4+4}{2} = 4$).\n\nAdding 48 gives 11 values. Since 48 is appended at the end of the sorted list, the 6th value (median of 11) is 4.\n\n**Common Mistakes:**\n• Recalculating the mean instead of the median (mean would change dramatically).\n• Thinking the outlier shifts the median significantly.\n\n**Test Day Takeaway:** The median is resistant to outliers. Adding an extreme value at one end shifts the median position by at most one spot.",
  skills: ["statistics"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "The equation $-x^2 + bx - 484 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [{ id: "A", text: "43" }, { id: "B", text: "44" }, { id: "C", text: "45" }, { id: "D", text: "88" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant and No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** No real solutions means discriminant $< 0$: $b^2 - 4(-1)(-484) < 0$, so $b^2 < 1936$, giving $|b| < 44$. Greatest integer is 43.\n\n**The Full Solution:**\nFor $-x^2 + bx - 484 = 0$, we have $a = -1$, $b = b$, $c = -484$.\n\nDiscriminant $= b^2 - 4ac = b^2 - 4(-1)(-484) = b^2 - 1936$.\n\nNo real solutions requires discriminant $< 0$:\n$b^2 - 1936 < 0$\n$b^2 < 1936$\n$|b| < \\sqrt{1936} = 44$\n\nThe greatest integer with $|b| < 44$ is $b = 43$.\n\n**Why the wrong answers are tempting:**\n• B: At $b = 44$, the discriminant equals 0 (one repeated real solution, not \"no\" real solutions).\n• C: $45^2 = 2025 > 1936$, so there would be two real solutions.\n• D: $88 = 2 \\times 44$; a common arithmetic error doubling the boundary.\n\n**Test Day Takeaway:** \"No real solutions\" means $b^2 - 4ac < 0$ (strictly less than, not $\\leq$).",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 19, type: "fill-in", difficulty: "hard",
  question: "In a study, the relationship between the number of hours of sunlight ($x$) and the yield of a crop in kilograms ($y$) is modeled by $y = -0.5x^2 + 12x + 5$. What number of hours of sunlight produces the maximum yield?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Vertex of a Quadratic (Maximum)**\n\n**The answer is 12.**\n\n**The Fast Way:** The vertex $x$-coordinate is $x = -\\frac{b}{2a} = -\\frac{12}{2(-0.5)} = -\\frac{12}{-1} = 12$.\n\n**The Full Solution:**\nSince $a = -0.5 < 0$, the parabola opens downward, so the vertex gives the maximum. The $x$-coordinate of the vertex is:\n$x = -\\frac{b}{2a} = -\\frac{12}{2(-0.5)} = -\\frac{12}{-1} = 12$\n\nSo 12 hours of sunlight produces the maximum yield.\n\n**Common Mistakes:**\n• Computing the maximum yield (77) instead of the hours that produce it.\n• Sign error: $-\\frac{12}{2(-0.5)} = -\\frac{12}{-1}$, not $-\\frac{12}{1}$.\n\n**Test Day Takeaway:** For maximum/minimum of $ax^2 + bx + c$, the input is $x = -\\frac{b}{2a}$.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 20, type: "multiple-choice", difficulty: "hard",
  question: "A survey of 600 randomly selected adults found that 264 support a new policy. A 95% confidence interval for the true proportion is constructed. The survey organizer wants to claim that a majority of all adults support the policy. Is this claim supported?\n\n(Note: For 95% confidence, the margin of error is approximately $1.96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$.)",
  choices: [{ id: "A", text: "Yes, because 264 out of 600 is 44%, and the interval extends above 50%." }, { id: "B", text: "Yes, because the sample size is large enough." }, { id: "C", text: "No, because the entire 95% confidence interval is below 50%." }, { id: "D", text: "No, because 264 is less than half of 600." }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Confidence Interval and Majority Claim**\n\n**Choice C is correct.**\n\n**The Fast Way:** $\\hat{p} = \\frac{264}{600} = 0.44$. MOE $\\approx 1.96\\sqrt{\\frac{0.44 \\times 0.56}{600}} \\approx 1.96 \\times 0.0203 \\approx 0.04$. Interval: $[0.40, 0.48]$. The entire interval is below 0.50.\n\n**The Full Solution:**\n$\\hat{p} = 0.44$. Standard error $= \\sqrt{\\frac{0.44 \\times 0.56}{600}} = \\sqrt{\\frac{0.2464}{600}} = \\sqrt{0.000411} \\approx 0.0203$.\n\nMOE $= 1.96 \\times 0.0203 \\approx 0.0398$.\n\n95% CI: $(0.44 - 0.04, 0.44 + 0.04) = (0.40, 0.48)$.\n\nSince the upper bound (0.48) is still below 0.50, we cannot claim majority support.\n\n**Why the wrong answers are tempting:**\n• A: Gets $\\hat{p} = 0.44$ right but incorrectly claims the interval goes above 50%.\n• B: Large sample size reduces margin of error but does not guarantee the interval crosses 50%.\n• D: While true that 264 < 300, the reasoning should be based on the confidence interval, not just the sample count.\n\n**Test Day Takeaway:** A majority claim requires the entire confidence interval to be above 50%.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 21, type: "fill-in", difficulty: "hard",
  question: "In a study, the value of a certain quantity $Q$ doubles every 5 years. The value of $Q$ was 800 at the start of the study. What is the value of $Q$ after 20 years?\n\nExpress your answer as a whole number.",
  correctAnswer: "12800",
  explanation: "**SAT Pattern: Repeated Doubling**\n\n**The answer is 12800.**\n\n**The Fast Way:** In 20 years, the quantity doubles $\\frac{20}{5} = 4$ times. $800 \\times 2^4 = 800 \\times 16 = 12800$.\n\n**The Full Solution:**\nThe model is $Q(t) = 800 \\cdot 2^{t/5}$.\n\nAt $t = 20$: $Q(20) = 800 \\cdot 2^{20/5} = 800 \\cdot 2^4 = 800 \\times 16 = 12{,}800$.\n\n**Common Mistakes:**\n• Computing $800 \\times 2 \\times 20 = 32000$ (linear instead of exponential).\n• Using $2^{20} = 1{,}048{,}576$ instead of $2^{20/5} = 2^4 = 16$.\n\n**Test Day Takeaway:** For repeated doubling, count the number of doubling periods and use $2^{\\text{periods}}$.",
  skills: ["exponential-functions"]
},
{
  id: 22, type: "multiple-choice", difficulty: "hard",
  question: "A data analyst collects a random sample of 150 customer wait times and finds that the sample mean is 7.2 minutes. She then collects another independent random sample of 600 customer wait times from the same population. Which of the following is most likely true about the second sample?",
  choices: [{ id: "A", text: "The sample mean will be exactly 7.2 minutes." }, { id: "B", text: "The sample mean will be closer to the population mean, and the margin of error will be smaller." }, { id: "C", text: "The sample mean will be farther from the population mean because more data introduces more error." }, { id: "D", text: "The margin of error will be the same because both samples are random." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Effect of Sample Size on Estimates**\n\n**Choice B is correct.**\n\n**The Fast Way:** Larger samples produce estimates closer to the population parameter and have smaller margins of error.\n\n**The Full Solution:**\nThe margin of error is proportional to $\\frac{1}{\\sqrt{n}}$. Quadrupling the sample size from 150 to 600 cuts the margin of error in half. The Law of Large Numbers tells us that larger samples tend to produce means closer to the true population mean. So the second sample will likely have a mean closer to the true value and a smaller margin of error.\n\n**Why the wrong answers are tempting:**\n• A: The second sample mean will likely be close to 7.2 but not exactly equal.\n• C: Larger samples reduce sampling variability, not increase it.\n• D: The margin of error depends on sample size; larger $n$ means smaller MOE.\n\n**Test Day Takeaway:** Increasing sample size always reduces margin of error and improves precision.",
  skills: ["statistics", "margin-of-error"]
}
      ]
    }
  ]
};

export default practiceTest5;
