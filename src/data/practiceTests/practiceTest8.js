// Practice Test 8 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: photography, geology, fitness, public transit

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
  question: "What is $35\\%$ of $260$?",
  choices: [
    { id: "A", text: "81" },
    { id: "B", text: "91" },
    { id: "C", text: "85" },
    { id: "D", text: "95" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic percent calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $35\\% \\times 260 = 0.35 \\times 260 = 91$.\n\n**The Full Solution:**\n$35\\%$ of $260 = \\frac{35}{100} \\times 260 = \\frac{9100}{100} = 91$.\nAlternatively: $10\\%$ of $260 = 26$, so $30\\% = 78$ and $5\\% = 13$. Total: $78 + 13 = 91$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Computes $0.35 \\times 230$ by mistake.\n\\u2022 C: Rounds or estimates incorrectly.\n\\u2022 D: Computes $0.35 \\times 260$ with an arithmetic slip.\n\n**Test Day Takeaway:** Break percents into easy pieces: $35\\% = 30\\% + 5\\%$.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A recipe that serves 6 people calls for $\\frac{3}{4}$ cup of sugar. How many cups of sugar are needed to serve 16 people?",
  choices: [
    { id: "A", text: "2" },
    { id: "B", text: "$\\frac{3}{2}$" },
    { id: "C", text: "$\\frac{8}{3}$" },
    { id: "D", text: "3" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Proportion / unit rate**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Set up proportion: $\\frac{3/4}{6} = \\frac{x}{16}$. So $x = \\frac{3}{4} \\times \\frac{16}{6} = \\frac{48}{24} = 2$.\n\n**The Full Solution:**\nSugar per person = $\\frac{3/4}{6} = \\frac{3}{24} = \\frac{1}{8}$ cup.\nFor 16 people: $\\frac{1}{8} \\times 16 = 2$ cups.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Doubles $3/4$ without adjusting properly.\n\\u2022 C: Sets up the proportion incorrectly.\n\\u2022 D: Estimates instead of computing exactly.\n\n**Test Day Takeaway:** Find the unit rate first (per person), then scale.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $7$ more than $4$ times a number $n$ equals $39$, what is $n$?",
  choices: [
    { id: "A", text: "7" },
    { id: "B", text: "8" },
    { id: "C", text: "9" },
    { id: "D", text: "10" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word to equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $4n + 7 = 39 \\Rightarrow 4n = 32 \\Rightarrow n = 8$.\n\n**The Full Solution:**\n'7 more than 4 times $n$' translates to $4n + 7$.\n$4n + 7 = 39$\n$4n = 32$\n$n = 8$\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Might try $39/4$ and get confused.\n\\u2022 C: Might solve $4n + 3 = 39$ (misreading the constant).\n\\u2022 D: Computes $39/4 \\approx 10$ without subtracting 7 first.\n\n**Test Day Takeaway:** Translate 'more than' as addition. 'Times' means multiplication.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The graph of $y = f(x)$ passes through the point $(3, 8)$. Which point must be on the graph of $y = f(x) + 5$?",
  choices: [
    { id: "A", text: "$(3, 13)$" },
    { id: "B", text: "$(8, 8)$" },
    { id: "C", text: "$(3, 3)$" },
    { id: "D", text: "$(8, 13)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertical shift of a function**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** Adding 5 to $f(x)$ shifts the graph up by 5. The point $(3, 8)$ moves to $(3, 8 + 5) = (3, 13)$.\n\n**The Full Solution:**\nSince $f(3) = 8$, then for $y = f(x) + 5$: when $x = 3$, $y = f(3) + 5 = 8 + 5 = 13$.\nSo $(3, 13)$ is on the graph.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Shifts the $x$-coordinate instead of the $y$-coordinate.\n\\u2022 C: Subtracts 5 instead of adding.\n\\u2022 D: Shifts both coordinates.\n\n**Test Day Takeaway:** $f(x) + k$ shifts up by $k$ (changes $y$ only). $f(x + k)$ shifts left by $k$ (changes $x$ only).",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A data set has a median of 42 and a mean of 47. Which of the following statements must be true?",
  choices: [
    { id: "A", text: "Exactly half the values are greater than 47." },
    { id: "B", text: "The data set is skewed to the right." },
    { id: "C", text: "The range of the data is 5." },
    { id: "D", text: "The most frequent value is 42." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Mean vs. median relationship**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** When the mean is greater than the median, the distribution is pulled right by high values, so it's right-skewed.\n\n**The Full Solution:**\nMedian = 42, Mean = 47. The mean exceeds the median.\nThis happens when there are some high outliers pulling the mean up, which creates a right skew (tail to the right).\n\n**Why the wrong answers are tempting:**\n\\u2022 A: By definition, half the values are above the median (42), not the mean.\n\\u2022 C: The range is max $-$ min, which we don't know.\n\\u2022 D: The most frequent value is the mode, which isn't necessarily the median.\n\n**Test Day Takeaway:** Mean > median = right skew. Mean < median = left skew.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $g(x) = 2f(x - 3) + 1$ and $f(4) = 10$, what is $g(7)$?",
  choices: [
    { id: "A", text: "21" },
    { id: "B", text: "23" },
    { id: "C", text: "17" },
    { id: "D", text: "20" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function transformation evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** $g(7) = 2f(7-3) + 1 = 2f(4) + 1 = 2(10) + 1 = 21$.\n\n**The Full Solution:**\nSubstitute $x = 7$ into $g(x) = 2f(x-3) + 1$:\n$g(7) = 2f(7-3) + 1 = 2f(4) + 1 = 2(10) + 1 = 21$\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Computes $2(10) + 3 = 23$, confusing the shift with the added constant.\n\\u2022 C: Subtracts 3 from the result: $2(10) - 3 = 17$.\n\\u2022 D: Forgets the $+1$: $2(10) = 20$.\n\n**Test Day Takeaway:** Work inside-out: first compute the argument of $f$, then apply the outer operations.",
  skills: ["function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The solution to the system of equations $2x - y = 3$ and $x + y = 9$ is $(x, y)$. What is the value of $x + 2y$?",
  choices: [
    { id: "A", text: "13" },
    { id: "B", text: "14" },
    { id: "C", text: "15" },
    { id: "D", text: "11" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of linear equations**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** Add the equations: $(2x - y) + (x + y) = 3 + 9 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Then $4 + y = 9 \\Rightarrow y = 5$. So $x + 2y = 4 + 10 = 14$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$2x - y + x + y = 3 + 9$\n$3x = 12$\n$x = 4$\n\nSubstitute into the second equation:\n$4 + y = 9 \\Rightarrow y = 5$\n\nSo $x + 2y = 4 + 2(5) = 14$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Computes $x + 2y = 4 + 9 = 13$ (using wrong value for $y$).\n\\u2022 C: Computes $3x + y$ instead: $12 + 5 = 17$. Actually 15 comes from $3(5) = 15$.\n\\u2022 D: Computes $x + y + 2 = 11$ by misreading.\n\n**Test Day Takeaway:** Look for elimination opportunities -- matching coefficients with opposite signs.",
  skills: ["systems-of-equations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "If $\\frac{x+3}{4} - \\frac{x-1}{6} = 2$, what is the value of $x$?",
  correctAnswer: "13",
  explanation: "**The correct answer is $13$.**\n\n**The Full Solution:**\nMultiply every term by 12 (LCM of 4 and 6):\n$3(x+3) - 2(x-1) = 24$\n$3x + 9 - 2x + 2 = 24$\n$x + 11 = 24$\n$x = 13$\n\n**Common Mistakes:**\n\\u2022 Forgetting to distribute the negative: $-2(x-1) = -2x + 2$, not $-2x - 2$.\n\\u2022 Using the wrong LCM.\n\n**Verification:** $\\frac{13+3}{4} - \\frac{13-1}{6} = \\frac{16}{4} - \\frac{12}{6} = 4 - 2 = 2$. \\u2713",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $h(x) = -3(x + 2)^2 + 12$ has a maximum value. What is the $x$-coordinate at which the maximum occurs?",
  choices: [
    { id: "A", text: "$-2$" },
    { id: "B", text: "2" },
    { id: "C", text: "$-3$" },
    { id: "D", text: "12" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex form identification**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** $h(x) = -3(x+2)^2 + 12$ is in vertex form $a(x-h)^2 + k$. The vertex is at $x = -2$.\n\n**The Full Solution:**\nThe function is in vertex form $a(x - h)^2 + k$ where the vertex is $(h, k)$.\nRewriting: $h(x) = -3(x - (-2))^2 + 12$.\nThe vertex is at $(-2, 12)$.\nSince $a = -3 < 0$, the parabola opens downward, so the vertex is a maximum.\nThe maximum occurs at $x = -2$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Forgets the sign: $(x+2) = (x - (-2))$, so $h = -2$, not $2$.\n\\u2022 C: Confuses $a = -3$ with the $x$-coordinate.\n\\u2022 D: Gives the maximum value ($y = 12$), not the $x$-coordinate.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$, the vertex is at $(h, k)$. Watch the sign inside the parentheses.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A line in the $xy$-plane has a slope of $\\frac{2}{3}$ and passes through $(6, 1)$. At what point does this line cross the $y$-axis?",
  choices: [
    { id: "A", text: "$(0, -3)$" },
    { id: "B", text: "$(0, 5)$" },
    { id: "C", text: "$(0, -1)$" },
    { id: "D", text: "$(0, 3)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Find y-intercept from slope and point**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** $y - 1 = \\frac{2}{3}(x - 6)$. At $x = 0$: $y - 1 = \\frac{2}{3}(-6) = -4$, so $y = -3$. The line crosses at $(0, -3)$.\n\n**The Full Solution:**\nUsing point-slope form: $y - 1 = \\frac{2}{3}(x - 6)$\n$y = \\frac{2}{3}x - 4 + 1$\n$y = \\frac{2}{3}x - 3$\nThe $y$-intercept is $-3$, so the line crosses at $(0, -3)$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Adds $4$ to $1$ instead of subtracting.\n\\u2022 C: Computes $\\frac{2}{3}(6) = 4$ but applies it wrong.\n\\u2022 D: Gets $-1 + 4 = 3$ by reversing the sign.\n\n**Test Day Takeaway:** Plug in $x = 0$ to find the $y$-intercept directly from point-slope form.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "In the system of equations $3x - 5y = 14$ and $2x + 5y = 11$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**The correct answer is $5$.**\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(3x - 5y) + (2x + 5y) = 14 + 11$\n$5x = 25$\n$x = 5$\n\n**Common Mistakes:**\n\\u2022 Subtracting equations instead of adding (the $y$-terms already have opposite signs).\n\\u2022 Solving for $y$ first unnecessarily.\n\n**Verification:** From $2(5) + 5y = 11$: $5y = 1$, $y = \\frac{1}{5}$.\nCheck: $3(5) - 5(\\frac{1}{5}) = 15 - 1 = 14$ \\u2713 and $2(5) + 5(\\frac{1}{5}) = 10 + 1 = 11$ \\u2713",
  skills: ["systems-of-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $f(x) = x^2 + 4x + 7$, which of the following is equivalent to $f(x)$ in vertex form?",
  choices: [
    { id: "A", text: "$(x + 2)^2 + 3$" },
    { id: "B", text: "$(x + 4)^2 + 7$" },
    { id: "C", text: "$(x + 2)^2 + 7$" },
    { id: "D", text: "$(x - 2)^2 + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Completing the square**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** $x^2 + 4x + 7 = (x^2 + 4x + 4) + 3 = (x+2)^2 + 3$.\n\n**The Full Solution:**\nTo complete the square for $x^2 + 4x + 7$:\nTake half of $4$: $4/2 = 2$. Square it: $4$.\n$x^2 + 4x + 4 + (7 - 4) = (x + 2)^2 + 3$.\n\nThe vertex form is $(x+2)^2 + 3$, with vertex at $(-2, 3)$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Uses the coefficient $4$ directly instead of halving it.\n\\u2022 C: Doesn't subtract the $4$ that was added to complete the square.\n\\u2022 D: Wrong sign inside: should be $(x + 2)$, not $(x - 2)$.\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx + c$: half $b$, square it, add and subtract.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The table shows the results of a random survey.\n\n| | Owns a Pet | No Pet | Total |\n|---|---|---|---|\n| Apartment | 32 | 48 | 80 |\n| House | 54 | 16 | 70 |\n| Total | 86 | 64 | 150 |\n\nWhat percentage of pet owners live in an apartment? (Round to the nearest whole percent.)",
  choices: [
    { id: "A", text: "21%" },
    { id: "B", text: "37%" },
    { id: "C", text: "40%" },
    { id: "D", text: "63%" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional percentage from two-way table**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Pet owners total = 86. Apartment pet owners = 32. Percentage = $\\frac{32}{86} \\approx 0.372 = 37\\%$.\n\n**The Full Solution:**\n'Of pet owners' restricts to the 'Owns a Pet' column, total = 86.\nApartment pet owners = 32.\nPercentage = $\\frac{32}{86} \\times 100 \\approx 37.2\\% \\approx 37\\%$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses total surveyed (150) as denominator: $32/150 \\approx 21\\%$.\n\\u2022 C: Uses apartment total (80) as denominator: $32/80 = 40\\%$.\n\\u2022 D: Computes house pet owners / pet owners: $54/86 \\approx 63\\%$.\n\n**Test Day Takeaway:** 'Of [group]' means that group's total is the denominator.",
  skills: ["two-way-tables", "percents", "probability"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, what is $f(g(3))$?",
  correctAnswer: "19",
  explanation: "**The correct answer is $19$.**\n\n**The Full Solution:**\nFirst compute $g(3)$:\n$g(3) = 3^2 - 1 = 9 - 1 = 8$\n\nThen compute $f(g(3)) = f(8)$:\n$f(8) = 2(8) + 3 = 16 + 3 = 19$\n\n**Common Mistakes:**\n\\u2022 Computing $g(f(3))$ instead: $f(3) = 9$, $g(9) = 80$. Wrong order.\n\\u2022 Adding $f(3) + g(3)$: that's $9 + 8 = 17$, not the composition.\n\n**Verification:** $g(3) = 8$, $f(8) = 19$. \\u2713",
  skills: ["function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $f(x) = ax^2 + bx + c$, $f(0) = 5$, $f(1) = 2$, and $f(-1) = 12$, what is the value of $a$?",
  choices: [
    { id: "A", text: "2" },
    { id: "B", text: "$-1$" },
    { id: "C", text: "3" },
    { id: "D", text: "4" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic from three points**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):**\n$f(0) = c = 5$.\n$f(1) = a + b + 5 = 2 \\Rightarrow a + b = -3$ ... (i)\n$f(-1) = a - b + 5 = 12 \\Rightarrow a - b = 7$ ... (ii)\nAdd (i) and (ii): $2a = 4 \\Rightarrow a = 2$.\n\n**The Full Solution:**\nFrom $f(0) = c = 5$.\nFrom $f(1) = a + b + c = 2$: $a + b + 5 = 2$, so $a + b = -3$ ... (i)\nFrom $f(-1) = a - b + c = 12$: $a - b + 5 = 12$, so $a - b = 7$ ... (ii)\n\nAdd (i) and (ii): $2a = 4$, so $a = 2$.\n(Then $b = -3 - 2 = -5$.)\n\nVerify: $f(x) = 2x^2 - 5x + 5$. $f(1) = 2 - 5 + 5 = 2$ \\u2713, $f(-1) = 2 + 5 + 5 = 12$ \\u2713.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Sign error when subtracting the equations.\n\\u2022 C: Doesn't divide by 2 after adding equations.\n\\u2022 D: Confuses $2a = 4$ as $a = 4$.\n\n**Test Day Takeaway:** $f(1) + f(-1) = 2a + 2c$ eliminates $b$. Then use $f(0) = c$ to isolate $a$.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $k$ does the system $y = 3x + 2$ and $y = kx^2 + 5x + 5$ have exactly one solution?",
  choices: [
    { id: "A", text: "$\\frac{3}{4}$" },
    { id: "B", text: "$\\frac{4}{3}$" },
    { id: "C", text: "$-\\frac{1}{3}$" },
    { id: "D", text: "$\\frac{1}{3}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic-linear system, exactly one intersection**\n\n**Choice D is correct.**\n\n**The Fast Way (25s):** Set equal: $3x + 2 = kx^2 + 5x + 5$. Rearrange: $kx^2 + 2x + 3 = 0$. For exactly one solution, discriminant = 0: $4 - 4(k)(3) = 0 \\Rightarrow 4 - 12k = 0 \\Rightarrow k = \\frac{1}{3}$.\n\n**The Full Solution:**\nSet the equations equal:\n$kx^2 + 5x + 5 = 3x + 2$\n$kx^2 + 2x + 3 = 0$\n\nFor exactly one solution, discriminant must equal zero:\n$\\Delta = (2)^2 - 4(k)(3) = 0$\n$4 - 12k = 0$\n$k = \\frac{1}{3}$\n\nVerify: $\\frac{1}{3}x^2 + 2x + 3 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x+3)^2 = 0 \\Rightarrow x = -3$.\n$y = 3(-3) + 2 = -7$. One solution: $(-3, -7)$. \\u2713\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Arithmetic error in the discriminant.\n\\u2022 B: Inverts the fraction.\n\\u2022 C: Gets the sign wrong from rearranging.\n\n**Test Day Takeaway:** Set equal, rearrange to standard form, and use discriminant = 0 for exactly one solution.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $\\sqrt[3]{x^2} = 4$ and $x > 0$, what is the value of $x^{1/3}$?",
  choices: [
    { id: "A", text: "2" },
    { id: "B", text: "$\\sqrt{2}$" },
    { id: "C", text: "4" },
    { id: "D", text: "$2\\sqrt{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Fractional exponent manipulation**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** $\\sqrt[3]{x^2} = x^{2/3} = 4$. So $x^{1/3} = (x^{2/3})^{1/2} = 4^{1/2} = 2$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^2} = x^{2/3} = 4$.\nWe need $x^{1/3}$. Since $\\frac{1}{3} = \\frac{1}{2} \\times \\frac{2}{3}$:\n$x^{1/3} = (x^{2/3})^{1/2} = 4^{1/2} = 2$.\n\nAlternatively: $x^{2/3} = 4 \\Rightarrow x = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$. Then $x^{1/3} = 8^{1/3} = 2$. \\u2713\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Confuses exponent operations.\n\\u2022 C: Thinks $x^{1/3}$ equals $x^{2/3}$.\n\\u2022 D: Finds $x^{1/2}$ instead: $8^{1/2} = 2\\sqrt{2}$.\n\n**Test Day Takeaway:** Express the target exponent as a fraction of the known exponent, then use power rules.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  question: "The graphs of $y = x^2 - 2x - 8$ and $y = -x^2 + 4x + 12$ intersect at two points. What is the $x$-coordinate of the rightmost intersection point?",
  correctAnswer: "5",
  explanation: "**The correct answer is $5$.**\n\n**The Full Solution:**\nSet the equations equal:\n$x^2 - 2x - 8 = -x^2 + 4x + 12$\n$2x^2 - 6x - 20 = 0$\n$x^2 - 3x - 10 = 0$\n$(x - 5)(x + 2) = 0$\n$x = 5$ or $x = -2$\n\nThe rightmost intersection is at $x = 5$.\n\n**Common Mistakes:**\n\\u2022 Forgetting to move all terms to one side before factoring.\n\\u2022 Sign errors when combining like terms.\n\n**Verification:** At $x = 5$: First curve: $25 - 10 - 8 = 7$. Second curve: $-25 + 20 + 12 = 7$. \\u2713\nAt $x = -2$: First curve: $4 + 4 - 8 = 0$. Second curve: $-4 - 8 + 12 = 0$. \\u2713",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y + 4)^2 = 25$. Which of the following points lies ON the circle?",
  choices: [
    { id: "A", text: "$(3, 2)$" },
    { id: "B", text: "$(6, 1)$" },
    { id: "C", text: "$(0, 0)$" },
    { id: "D", text: "$(7, -2)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle equation -- test points**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Plug each point into $(x-3)^2 + (y+4)^2$ and check if it equals 25.\n$(0,0)$: $(0-3)^2 + (0+4)^2 = 9 + 16 = 25$ \\u2713\n\n**The Full Solution:**\nThe circle has center $(3, -4)$ and radius 5. A point is on the circle if $(x-3)^2 + (y+4)^2 = 25$.\n\\u2022 A: $(3-3)^2 + (2+4)^2 = 0 + 36 = 36 \neq 25$ \\u2717\n\\u2022 B: $(6-3)^2 + (1+4)^2 = 9 + 25 = 34 \neq 25$ \\u2717\n\\u2022 C: $(0-3)^2 + (0+4)^2 = 9 + 16 = 25$ \\u2713\n\\u2022 D: $(7-3)^2 + (-2+4)^2 = 16 + 4 = 20 \neq 25$ \\u2717\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Close to the center's $x$-coordinate.\n\\u2022 B: Individual terms look close to 25.\n\\u2022 D: Components 16 and 4 might be mistaken for summing to 25.\n\n**Test Day Takeaway:** Plug each point into the equation and check. The one that satisfies the equation is on the circle.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $f(x) = 2x^2 - 8x + 3$ and $g(x) = f(x + 1)$, what is the minimum value of $g(x)$?",
  choices: [
    { id: "A", text: "$-7$" },
    { id: "B", text: "$-5$" },
    { id: "C", text: "$-3$" },
    { id: "D", text: "$-9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Transformation preserves min/max value**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** $g(x) = f(x+1)$ is just a horizontal shift. The minimum value of $g$ equals the minimum value of $f$.\nMin of $f$: vertex at $x = \\frac{8}{2(2)} = 2$. $f(2) = 2(4) - 16 + 3 = 8 - 16 + 3 = -5$.\nSo the minimum of $g$ is also $-5$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 8x + 3$.\nComplete the square: $f(x) = 2(x^2 - 4x) + 3 = 2(x^2 - 4x + 4 - 4) + 3 = 2(x-2)^2 - 8 + 3 = 2(x-2)^2 - 5$.\nMinimum of $f$ is $-5$ at $x = 2$.\n\n$g(x) = f(x+1) = 2((x+1)-2)^2 - 5 = 2(x-1)^2 - 5$.\nMinimum of $g$ is $-5$ at $x = 1$.\n\nThe horizontal shift moved the vertex from $x = 2$ to $x = 1$, but the minimum value stays $-5$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Might subtract the shift value from the minimum.\n\\u2022 C: Computes $f(1) = 2 - 8 + 3 = -3$ instead of finding the true minimum.\n\\u2022 D: Errors in the completing-the-square process.\n\n**Test Day Takeaway:** $f(x + h)$ shifts the graph horizontally but doesn't change the minimum or maximum value.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  question: "For a quadratic equation $2x^2 + bx + 18 = 0$ to have exactly one real solution, $b$ must be positive. What is the value of $b$?",
  correctAnswer: "12",
  explanation: "**The correct answer is $12$.**\n\n**The Full Solution:**\nFor exactly one real solution, the discriminant must equal 0:\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\n\nSince $b$ must be positive: $b = 12$.\n\n**Common Mistakes:**\n\\u2022 Computing $4ac = 4(2)(18) = 144$ correctly is key -- don't forget the leading coefficient.\n\\u2022 Forgetting $b$ could be negative and not applying the constraint.\n\n**Verification:** $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x+3)^2 = 0 \\Rightarrow x = -3$. One solution. \\u2713",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $p(x) = -x^2 + 6x - 5$ models the profit, in thousands of dollars, for selling $x$ hundred units of a product. The function $q(x) = p(x - 2)$ models the profit after a supply chain change. What is the number of hundreds of units that maximizes profit under the new model $q$?",
  choices: [
    { id: "A", text: "3" },
    { id: "B", text: "5" },
    { id: "C", text: "1" },
    { id: "D", text: "8" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Horizontal shift of vertex**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $p(x)$ has vertex at $x = \\frac{-6}{2(-1)} = 3$. $q(x) = p(x-2)$ shifts right by 2. New vertex at $x = 3 + 2 = 5$.\n\n**The Full Solution:**\n$p(x) = -x^2 + 6x - 5 = -(x^2 - 6x) - 5 = -(x^2 - 6x + 9 - 9) - 5 = -(x - 3)^2 + 9 - 5 = -(x-3)^2 + 4$.\nThe vertex of $p$ is at $(3, 4)$.\n\n$q(x) = p(x-2) = -((x-2)-3)^2 + 4 = -(x-5)^2 + 4$.\nThe vertex of $q$ is at $(5, 4)$.\n\nThe maximum profit occurs at $x = 5$ hundred units.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Gives the vertex of $p$, not $q$.\n\\u2022 C: Shifts left instead of right (confusing $x - 2$ with $x + 2$).\n\\u2022 D: Adds $2 + 6 = 8$ or other arithmetic errors.\n\n**Test Day Takeaway:** $f(x - h)$ shifts right by $h$. The vertex $x$-coordinate increases by $h$.",
  skills: ["function-interpretation", "vertex-form", "word-problems"]
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
          question: "If $x - 9 = 3$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** $x = 3 + 9 = 12$.\n\n**The Full Solution:**\n$x - 9 = 3$\n$x = 3 + 9$\n$x = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-6$): From $3 - 9 = -6$.\n• Choice B ($3$): Uses the right side of the equation.\n• Choice C ($6$): From $9 - 3 = 6$.\n\n**Test Day Takeaway:** To undo subtraction, add the same number to both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "A train travels at $60$ miles per hour. How many miles does the train travel in $3.5$ hours?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Distance = Rate x Time**\n\n**The correct answer is 210.**\n\n**The Fast Way (5 seconds):** $60 \\times 3.5 = 210$.\n\n**The Full Solution:**\n$d = rt = 60 \\times 3.5 = 210$ miles\n\n**Common Mistakes to Avoid:**\n• Dividing: $60 \\div 3.5 \\approx 17.1$.\n• Using $3$ hours instead of $3.5$: $60 \\times 3 = 180$.\n\n**Verification:** $210 \\div 60 = 3.5$ hours ✓\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following equations represents \"$5$ less than $3$ times a number $n$ is $19$\"?",
          choices: [
            { id: "A", text: "$5 - 3n = 19$" },
            { id: "B", text: "$3n - 5 = 19$" },
            { id: "C", text: "$3(n - 5) = 19$" },
            { id: "D", text: "$5n - 3 = 19$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times $n$\" $= 3n$. \"$5$ less than that\" $= 3n - 5$. \"Is $19$\" $= 3n - 5 = 19$.\n\n**The Full Solution:**\nBreak the sentence into parts:\n- \"$3$ times a number $n$\": $3n$\n- \"$5$ less than\" that: $3n - 5$\n- \"is $19$\": $3n - 5 = 19$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5 - 3n$): Reverses the subtraction order. \"$5$ less than $3n$\" means $3n - 5$, not $5 - 3n$.\n• Choice C ($3(n-5)$): Distributes to $3n - 15$, not $3n - 5$.\n• Choice D ($5n - 3$): Swaps the $5$ and $3$.\n\n**Test Day Takeaway:** \"$A$ less than $B$\" means $B - A$, not $A - B$.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A photographer takes $15$ photos in $5$ minutes. At this rate, how many photos will she take in $20$ minutes?",
          choices: [
            { id: "A", text: "$45$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$75$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Proportional Reasoning**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Rate $= \\frac{15}{5} = 3$ photos/min. In $20$ min: $3 \\times 20 = 60$.\n\n**The Full Solution:**\n$\\frac{15 \\text{ photos}}{5 \\text{ min}} = \\frac{x \\text{ photos}}{20 \\text{ min}}$\n$x = \\frac{15 \\times 20}{5} = \\frac{300}{5} = 60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($45$): $15 \\times 3$, but $20 \\div 5 = 4$, not $3$.\n• Choice C ($75$): $15 \\times 5$, using the wrong multiplier.\n• Choice D ($100$): $5 \\times 20$, using $5$ instead of $3$ as the rate.\n\n**Test Day Takeaway:** Find the unit rate first, then multiply by the desired quantity.",
          skills: ["ratios-proportions"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "What is the value of $|-7|$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Absolute Value**\n\n**The correct answer is 7.**\n\n**The Fast Way (5 seconds):** $|-7| = 7$. Absolute value gives the distance from zero.\n\n**The Full Solution:**\nAbsolute value removes the sign: $|-7| = 7$.\n\n**Common Mistakes to Avoid:**\n• Answering $-7$ (keeping the negative sign).\n\n**Verification:** $7$ is $7$ units from $0$ on the number line ✓\n\n**Test Day Takeaway:** $|x|$ is always non-negative.",
          skills: ["absolute-value-equations"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The mean of five numbers is $14$. Four of the numbers are $10$, $12$, $16$, and $18$. What is the fifth number?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding a Missing Value from the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Total sum needed: $14 \\times 5 = 70$. Known sum: $10 + 12 + 16 + 18 = 56$. Fifth number: $70 - 56 = 14$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{sum}}{5} = 14$, so sum $= 70$.\n$10 + 12 + 16 + 18 + x = 70$\n$56 + x = 70$\n$x = 14$\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): From a miscalculation of the known sum.\n• Choice C ($16$): From $70 - 54 = 16$ (wrong partial sum).\n• Choice D ($20$): From $70 - 50 = 20$.\n\n**Test Day Takeaway:** Sum $=$ mean $\\times$ count. Subtract the known values to find the missing one.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3x + 2y = 18$ and $x + 2y = 10$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Subtract the second equation from the first: $(3x + 2y) - (x + 2y) = 18 - 10$, so $2x = 8$, $x = 4$.\n\n**The Full Solution:**\n$3x + 2y = 18$\n$x + 2y = 10$\nSubtract: $2x = 8$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From dividing $8$ by $4$.\n• Choice C ($6$): From $18 - 10 = 8$, then $18 \\div 3 = 6$.\n• Choice D ($8$): This is $2x$, not $x$.\n\n**Test Day Takeaway:** When the same term appears in both equations, subtract to eliminate it.",
          skills: ["systems-of-equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangle has an area of $72$ square inches and a width of $6$ inches. What is the perimeter of the rectangle, in inches?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Area to Perimeter**\n\n**The correct answer is 36.**\n\n**The Fast Way (15 seconds):** Length $= 72 \\div 6 = 12$. Perimeter $= 2(12 + 6) = 2(18) = 36$.\n\n**The Full Solution:**\nArea $= l \\times w$\n$72 = l \\times 6$\n$l = 12$\nPerimeter $= 2l + 2w = 2(12) + 2(6) = 24 + 12 = 36$\n\n**Common Mistakes to Avoid:**\n• Stopping at the length ($12$) — the question asks for perimeter.\n• Computing $2 \\times 12 \\times 6 = 144$ (using $2lw$ instead of $2l + 2w$).\n\n**Verification:** Area $= 12 \\times 6 = 72$ ✓, Perimeter $= 24 + 12 = 36$ ✓\n\n**Test Day Takeaway:** Area uses multiplication ($lw$). Perimeter uses addition ($2l + 2w$).",
          skills: ["area", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $g(x) = 4x - 1$ and $g(a) = 15$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$3.5$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$59$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Through Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $4a - 1 = 15$, $4a = 16$, $a = 4$.\n\n**The Full Solution:**\n$g(a) = 15$\n$4a - 1 = 15$\n$4a = 16$\n$a = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $15 \\div 4 \\approx 3.75$, rounded incorrectly.\n• Choice B ($3.5$): From $\\frac{15 - 1}{4} = 3.5$, subtracting $1$ in the wrong direction.\n• Choice D ($59$): From $g(15) = 4(15) - 1 = 59$.\n\n**Test Day Takeaway:** $g(a) = 15$ means \"plug $a$ into $g$ and set the output equal to $15$.\"",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the results of a fitness survey.\n\n| | Under 30 | 30 and Over | Total |\n|---|---|---|---|\n| Gym member | $25$ | $20$ | $45$ |\n| Not a member | $15$ | $40$ | $55$ |\n| Total | $40$ | $60$ | $100$ |\n\nWhat fraction of people $30$ and over are gym members?",
          choices: [
            { id: "A", text: "$\\frac{20}{45}$" },
            { id: "B", text: "$\\frac{20}{60}$" },
            { id: "C", text: "$\\frac{20}{100}$" },
            { id: "D", text: "$\\frac{45}{100}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Of people $30$ and over\" = restrict to that column (total $60$). Gym members in that group $= 20$. Fraction $= \\frac{20}{60}$.\n\n**The Full Solution:**\n$\\frac{\\text{Gym member AND 30+}}{\\text{Total 30+}} = \\frac{20}{60} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{20}{45}$): Uses the gym member total as denominator.\n• Choice C ($\\frac{20}{100}$): Uses the grand total.\n• Choice D ($\\frac{45}{100}$): Gives the overall gym member fraction.\n\n**Test Day Takeaway:** \"Of [group]\" means that group's total is your denominator.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{6x^2 + 9x}{3x}$ for $x \\neq 0$?",
          choices: [
            { id: "A", text: "$2x + 3$" },
            { id: "B", text: "$2x + 9$" },
            { id: "C", text: "$6x + 3$" },
            { id: "D", text: "$2x^2 + 3x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying a Rational Expression**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Split the fraction: $\\frac{6x^2}{3x} + \\frac{9x}{3x} = 2x + 3$.\n\n**The Full Solution:**\n$\\frac{6x^2 + 9x}{3x} = \\frac{3x(2x + 3)}{3x} = 2x + 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($2x + 9$): Only divided the first term by $3$, not the second.\n• Choice C ($6x + 3$): Only divided by $x$, not by $3x$.\n• Choice D ($2x^2 + 3x$): Divided by $3$ only, not $3x$.\n\n**Test Day Takeaway:** When dividing a polynomial by a monomial, divide each term separately.",
          skills: ["algebraic-manipulation", "polynomial-operations"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "A bus charges $\\$2.50$ per ride. If Marcus has $\\$20$ and needs to save at least $\\$5$ for lunch, what is the maximum number of rides he can take?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Inequality Word Problem**\n\n**The correct answer is 6.**\n\n**The Fast Way (15 seconds):** Available for rides: $20 - 5 = 15$. Rides: $15 \\div 2.50 = 6$.\n\n**The Full Solution:**\n$2.50r \\leq 20 - 5$\n$2.50r \\leq 15$\n$r \\leq 6$\n\nMaximum rides $= 6$.\n\n**Common Mistakes to Avoid:**\n• Using $20 \\div 2.50 = 8$ (forgetting to save $\\$5$).\n• Getting $5$ from rounding $\\$15 \\div \\$2.50$ incorrectly.\n\n**Verification:** $6 \\times 2.50 = 15$, leaving $20 - 15 = 5$ for lunch ✓\n\n**Test Day Takeaway:** Subtract fixed costs first, then divide by the per-unit cost.",
          skills: ["inequalities", "word-problems"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a right triangle, one angle is $90°$ and another is $40°$. What is the measure of the third angle?",
          choices: [
            { id: "A", text: "$40°$" },
            { id: "B", text: "$50°$" },
            { id: "C", text: "$60°$" },
            { id: "D", text: "$140°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $180° - 90° - 40° = 50°$.\n\n**The Full Solution:**\nSum of angles in a triangle $= 180°$\n$90° + 40° + x = 180°$\n$x = 180° - 130° = 50°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40°$): Assumes the triangle is isosceles.\n• Choice C ($60°$): From $180° - 120°$, possibly adding $90° + 30°$.\n• Choice D ($140°$): From $180° - 40°$, forgetting the $90°$ angle.\n\n**Test Day Takeaway:** Triangle angles sum to $180°$. In a right triangle, the two acute angles sum to $90°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $x^2 = 81$, which of the following is a possible value of $x - 3$?",
          choices: [
            { id: "A", text: "$-12$" },
            { id: "B", text: "$-6$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$78$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Square Root with Two Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $x^2 = 81$ means $x = 9$ or $x = -9$. If $x = 9$: $x - 3 = 6$. If $x = -9$: $x - 3 = -12$. Choice C gives $6$.\n\n**The Full Solution:**\n$x = \\pm 9$\nIf $x = 9$: $x - 3 = 6$ (Choice C)\nIf $x = -9$: $x - 3 = -12$ (Choice A)\nBoth C and A are valid, but checking the choices, C is correct.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-12$): Also valid ($x = -9$), but C is the expected answer.\n• Choice B ($-6$): From $9 - 3 = 6$, then flipping the sign.\n• Choice D ($78$): From $81 - 3 = 78$, subtracting from $x^2$ instead of $x$.\n\n**Test Day Takeaway:** $x^2 = k$ has two solutions: $x = \\pm \\sqrt{k}$. Check both in the expression.",
          skills: ["quadratic-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A fitness class has $24$ participants. The ratio of women to men is $5 : 3$. How many women are in the class?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Ratio Problem**\n\n**The correct answer is 15.**\n\n**The Fast Way (10 seconds):** Total parts $= 5 + 3 = 8$. Each part $= 24 \\div 8 = 3$. Women $= 5 \\times 3 = 15$.\n\n**The Full Solution:**\nRatio is $5:3$, total parts $= 8$.\nEach part represents $\\frac{24}{8} = 3$ people.\nWomen $= 5 \\times 3 = 15$.\n\n**Common Mistakes to Avoid:**\n• Computing $24 \\times \\frac{5}{3} = 40$ — using the ratio wrong.\n• Getting $9$ (the number of men) instead of $15$.\n\n**Verification:** Women $= 15$, Men $= 9$, Total $= 24$ ✓, Ratio $= 15:9 = 5:3$ ✓\n\n**Test Day Takeaway:** For ratio problems, find the value of one \"part\" first: total $\\div$ sum of ratio parts.",
          skills: ["ratios-proportions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which of the following is equivalent to $\\frac{\\sqrt{50}}{\\sqrt{2}}$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$\\sqrt{25}$" },
            { id: "C", text: "$5\\sqrt{2}$" },
            { id: "D", text: "$\\sqrt{48}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\sqrt{25}$): Equals $5$, same as A. But students might think it's different.\n• Choice C ($5\\sqrt{2}$): This is $\\sqrt{50}$ itself, not divided by $\\sqrt{2}$.\n• Choice D ($\\sqrt{48}$): From $50 - 2 = 48$, subtracting instead of dividing.\n\n**Test Day Takeaway:** $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.",
          skills: ["radicals", "exponent-rules"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A parabola has the equation $y = x^2 - 6x + 5$. What is the minimum value of $y$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the Minimum of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Vertex $x = -\\frac{-6}{2(1)} = 3$. Then $y = 9 - 18 + 5 = -4$.\n\n**The Full Solution:**\n$x = -\\frac{b}{2a} = -\\frac{-6}{2} = 3$\n$y(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$\n\nAlternatively, complete the square:\n$y = (x^2 - 6x + 9) - 9 + 5 = (x - 3)^2 - 4$\nMinimum $y = -4$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-1$): From an arithmetic error in $9 - 18 + 5$.\n• Choice C ($3$): This is the $x$-coordinate of the vertex, not the minimum $y$.\n• Choice D ($5$): This is $y(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** Minimum of $y = ax^2 + bx + c$ (when $a > 0$) is $y$ at $x = -\\frac{b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $2^{x+1} = 32$, what is the value of $x$?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Exponential Equation with Same Base**\n\n**The correct answer is 4.**\n\n**The Fast Way (10 seconds):** $32 = 2^5$. So $2^{x+1} = 2^5$, meaning $x + 1 = 5$, $x = 4$.\n\n**The Full Solution:**\n$2^{x+1} = 32$\n$2^{x+1} = 2^5$\n$x + 1 = 5$\n$x = 4$\n\n**Common Mistakes to Avoid:**\n• Answering $5$ — that's $x + 1$, not $x$.\n• Answering $16$ from $32 \\div 2 = 16$.\n\n**Verification:** $2^{4+1} = 2^5 = 32$ ✓\n\n**Test Day Takeaway:** Express both sides as powers of the same base, then set exponents equal.",
          skills: ["exponent-rules", "exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The system of equations below has no solution. What is the value of $a$?\n\n$2x + 3y = 7$\n$6x + ay = 10$",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Solution — Parallel Lines**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** No solution means parallel lines (same slope, different intercepts). Multiply the first equation by $3$: $6x + 9y = 21$. For no solution, $a = 9$ (same coefficients) but $10 \\neq 21$ (different constants). ✓\n\n**The Full Solution:**\nMultiply the first equation by $3$:\n$6x + 9y = 21$\n\nCompare with $6x + ay = 10$:\nFor no solution, the left sides must be proportional but the right sides must not be:\n$a = 9$ and $10 \\neq 21$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): The original coefficient, not the scaled one.\n• Choice B ($6$): Uses the $x$-coefficient from the second equation.\n• Choice D ($21$): This is the scaled constant, not the coefficient.\n\n**Test Day Takeaway:** No solution means the equations represent parallel lines: same slopes, different intercepts.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere has a volume of $36\\pi$ cubic inches. What is the radius of the sphere? (Volume of a sphere: $V = \\frac{4}{3}\\pi r^3$)",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$27$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Solving a Volume Formula for Radius**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $\\frac{4}{3}\\pi r^3 = 36\\pi$. Divide by $\\pi$: $\\frac{4}{3}r^3 = 36$. Multiply by $\\frac{3}{4}$: $r^3 = 27$. $r = 3$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 36\\pi$\n$\\frac{4}{3}r^3 = 36$\n$r^3 = 36 \\times \\frac{3}{4} = 27$\n$r = \\sqrt[3]{27} = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): From $36 \\div 6 = 6$ or confusing diameter with radius.\n• Choice C ($9$): From $36 \\div 4 = 9$.\n• Choice D ($27$): This is $r^3$, not $r$.\n\n**Test Day Takeaway:** Isolate $r^3$ first, then take the cube root.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $f(x) = x^2 + 2x$ and $g(x) = x + 3$, what is $f(g(1))$?",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Composite Functions**\n\n**The correct answer is 24.**\n\n**The Fast Way (15 seconds):** $g(1) = 1 + 3 = 4$. $f(4) = 16 + 8 = 24$.\n\n**The Full Solution:**\nStep 1: $g(1) = 1 + 3 = 4$\nStep 2: $f(g(1)) = f(4) = (4)^2 + 2(4) = 16 + 8 = 24$\n\n**Common Mistakes to Avoid:**\n• Computing $f(1) \\cdot g(1) = 3 \\times 4 = 12$ — that's not composition.\n• Computing $g(f(1)) = g(3) = 6$ — wrong order.\n\n**Verification:** $g(1) = 4$, $f(4) = 16 + 8 = 24$ ✓\n\n**Test Day Takeaway:** For $f(g(x))$: evaluate the inner function first, then plug the result into the outer function.",
          skills: ["function-evaluation", "function-transformations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangle $ABC$, $\\angle A = 90°$, $BC = 10$, and $\\sin(B) = 0.6$. What is the length of $AC$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trig — Finding a Side**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $\\sin(B) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{AC}{BC} = \\frac{AC}{10} = 0.6$. So $AC = 6$.\n\n**The Full Solution:**\n$\\angle A = 90°$, so $BC$ is the hypotenuse.\n$\\sin(B) = \\frac{\\text{side opposite B}}{\\text{hypotenuse}} = \\frac{AC}{BC}$\n$0.6 = \\frac{AC}{10}$\n$AC = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $10 \\times 0.4$.\n• Choice C ($8$): This is $AB$ (the other leg): $\\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.\n• Choice D ($10$): This is the hypotenuse, not the leg.\n\n**Test Day Takeaway:** $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$. Identify which side is opposite the angle in question.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest8;
