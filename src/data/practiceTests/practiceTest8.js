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
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "What is the value of $\\frac{3^6}{3^4}$?",
  choices: [{ id: "A", text: "3" }, { id: "B", text: "6" }, { id: "C", text: "9" }, { id: "D", text: "27" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice C is correct.**\n\n**The Fast Way:** $\\frac{3^6}{3^4} = 3^{6-4} = 3^2 = 9$.\n\n**The Full Solution:**\nWhen dividing powers with the same base, subtract exponents: $\\frac{a^m}{a^n} = a^{m-n}$.\n$\\frac{3^6}{3^4} = 3^{6-4} = 3^2 = 9$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $6 - 4 = 2$ but then uses $3$ instead of $3^2$.\n• B: Divides the exponents: $6/4 \\approx 1.5$ and rounds to 6.\n• D: Computes $3^3 = 27$ (subtracting exponents incorrectly as $6 - 3$).\n\n**Test Day Takeaway:** Division subtracts exponents. Then compute the resulting power.",
  skills: ["exponent-rules"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A store marks up the price of an item by 40%. If the wholesale price is \\$50, what is the retail price?",
  choices: [{ id: "A", text: "\\$20" }, { id: "B", text: "\\$40" }, { id: "C", text: "\\$70" }, { id: "D", text: "\\$90" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Markup**\n\n**Choice C is correct.**\n\n**The Fast Way:** $50 \\times 1.40 = 70$. Or: $40\\%$ of $50 = 20$, so $50 + 20 = 70$.\n\n**The Full Solution:**\nMarkup $= 40\\%$ of $\\$50 = 0.40 \\times 50 = \\$20$.\nRetail price $= \\$50 + \\$20 = \\$70$.\n\n**Why the wrong answers are tempting:**\n• A: Computes only the markup amount ($20$) and gives it as the price.\n• B: Subtracts the markup: $50 - 10 = 40$.\n• D: Adds $40$ to $50$ (confuses 40% with \\$40).\n\n**Test Day Takeaway:** A markup of $p\\%$ means the new price is $(1 + p/100)$ times the original.",
  skills: ["percents", "word-problems"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "The number of books read by students in a class is recorded:\n\n- 0 books: 3 students\n- 1 book: 5 students\n- 2 books: 8 students\n- 3 books: 4 students\n\nWhat is the median number of books read?",
  choices: [{ id: "A", text: "1" }, { id: "B", text: "1.5" }, { id: "C", text: "2" }, { id: "D", text: "2.5" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Median from Frequency Data**\n\n**Choice C is correct.**\n\n**The Fast Way:** Total students $= 3 + 5 + 8 + 4 = 20$. Median is average of 10th and 11th values. Count up: positions 1-3 have 0 books, 4-8 have 1 book, 9-16 have 2 books. Both the 10th and 11th values are 2.\n\n**The Full Solution:**\nWith 20 data points, the median is the average of the 10th and 11th values when sorted.\n\nCumulative count:\n- 0 books: positions 1-3 (cumulative: 3)\n- 1 book: positions 4-8 (cumulative: 8)\n- 2 books: positions 9-16 (cumulative: 16)\n- 3 books: positions 17-20\n\nBoth the 10th and 11th values fall in the \"2 books\" group.\nMedian $= \\frac{2 + 2}{2} = 2$.\n\n**Why the wrong answers are tempting:**\n• A: Picks the mode of the first two categories.\n• B: Averages 1 and 2 without counting positions.\n• D: Averages 2 and 3.\n\n**Test Day Takeaway:** For grouped data, use cumulative frequencies to find which group contains the median position.",
  skills: ["statistics"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "Which expression is equivalent to $(2x + 3)(x - 4)$?",
  choices: [{ id: "A", text: "$2x^2 - 12$" }, { id: "B", text: "$2x^2 - 5x - 12$" }, { id: "C", text: "$2x^2 + 5x - 12$" }, { id: "D", text: "$2x^2 - 8x + 3x - 12$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: FOIL / Polynomial Multiplication**\n\n**Choice B is correct.**\n\n**The Fast Way:** $(2x+3)(x-4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.\n\n**The Full Solution:**\nFirst: $2x \\cdot x = 2x^2$\nOuter: $2x \\cdot (-4) = -8x$\nInner: $3 \\cdot x = 3x$\nLast: $3 \\cdot (-4) = -12$\n\nCombine: $2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.\n\n**Why the wrong answers are tempting:**\n• A: Keeps only the first and last terms.\n• C: Gets the sign wrong on the middle term: $-8x + 3x = -5x$, not $+5x$.\n• D: This is correct but not fully simplified (it equals B).\n\n**Test Day Takeaway:** After FOIL, always combine like terms. Check the sign of the middle term carefully.",
  skills: ["polynomial-operations"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "A data set has values: 12, 15, 18, 20, 25. What is the range of this data set?",
  choices: [{ id: "A", text: "5" }, { id: "B", text: "13" }, { id: "C", text: "18" }, { id: "D", text: "25" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way:** Range $= 25 - 12 = 13$.\n\n**The Full Solution:**\nThe range is the difference between the maximum and minimum values.\nRange $= 25 - 12 = 13$.\n\n**Why the wrong answers are tempting:**\n• A: Computes the difference between consecutive values.\n• C: Uses the median (18) as the range.\n• D: Uses the maximum value.\n\n**Test Day Takeaway:** Range = max $-$ min. It measures the total spread of the data.",
  skills: ["statistics"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "The table below shows the results of a survey of 250 employees about their commute method and department.\n\n|  | Car | Public Transit | Bike | Total |\n|---|---|---|---|---|\n| Marketing | 40 | 25 | 10 | 75 |\n| Engineering | 30 | 45 | 25 | 100 |\n| Sales | 50 | 15 | 10 | 75 |\n| Total | 120 | 85 | 45 | 250 |\n\nWhat percentage of employees who use public transit work in Engineering?",
  choices: [{ id: "A", text: "18%" }, { id: "B", text: "45%" }, { id: "C", text: "About 53%" }, { id: "D", text: "About 29%" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Percentage from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way:** Of public transit users (85 total), 45 are in Engineering. $\\frac{45}{85} \\approx 0.529 \\approx 53\\%$.\n\n**The Full Solution:**\n\"Of employees who use public transit\" means the denominator is the public transit column total: 85.\n\n$\\frac{45}{85} = \\frac{9}{17} \\approx 0.5294 \\approx 53\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{45}{250} = 18\\%$ (uses grand total as denominator).\n• B: Computes $\\frac{45}{100} = 45\\%$ (uses Engineering row total).\n• D: Computes $\\frac{25}{85} \\approx 29\\%$ (uses wrong cell -- Engineering/Bike).\n\n**Test Day Takeaway:** The phrase after 'of' or 'among' defines your denominator. Column condition = column total.",
  skills: ["two-way-tables", "percents"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "If $\\sqrt{5x + 1} = x + 1$, what are all values of $x$ that satisfy the equation?",
  choices: [{ id: "A", text: "$x = 0$ only" }, { id: "B", text: "$x = 3$ only" }, { id: "C", text: "$x = 0$ and $x = 3$" }, { id: "D", text: "$x = -1$ and $x = 0$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way:** Square both sides: $5x + 1 = x^2 + 2x + 1$, so $x^2 - 3x = 0$, $x(x-3) = 0$, $x = 0$ or $x = 3$. Both check out.\n\n**The Full Solution:**\n$\\sqrt{5x + 1} = x + 1$\n\nSquare both sides: $5x + 1 = (x+1)^2 = x^2 + 2x + 1$.\n$0 = x^2 - 3x$\n$0 = x(x - 3)$\n$x = 0$ or $x = 3$.\n\nCheck for extraneous solutions:\n- $x = 0$: $\\sqrt{1} = 1$ and $0 + 1 = 1$. ✓\n- $x = 3$: $\\sqrt{16} = 4$ and $3 + 1 = 4$. ✓\n\nBoth solutions are valid.\n\n**Why the wrong answers are tempting:**\n• A: Only finds $x = 0$ and stops.\n• B: Only finds $x = 3$ and stops.\n• D: Tries $x = -1$: $\\sqrt{-4}$ is not real, so $x = -1$ is invalid.\n\n**Test Day Takeaway:** After squaring a radical equation, ALWAYS check your solutions in the original equation to eliminate extraneous roots.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "A researcher surveyed 400 randomly selected adults and found that 240 support a new policy. She wants to construct a 95% confidence interval.\n\nUsing the formula: margin of error $\\approx \\frac{1}{\\sqrt{n}}$, what is the approximate margin of error, expressed as a percentage? Round to the nearest whole number.",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Quick Margin of Error Estimate**\n\n**The answer is 5.**\n\n**The Fast Way:** $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0.05 = 5\\%$.\n\n**The Full Solution:**\nThe quick-estimate formula for a 95% margin of error is $\\frac{1}{\\sqrt{n}}$.\n\n$\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0.05 = 5\\%$.\n\nSo the confidence interval is approximately $60\\% \\pm 5\\%$, or $[55\\%, 65\\%]$.\n\n**Common Mistakes:**\n• Using $n = 240$ (the number who support) instead of $n = 400$ (the sample size).\n• Forgetting to convert to a percentage: $0.05$ vs $5\\%$.\n\n**Test Day Takeaway:** The margin of error formula uses the total sample size $n$, not the count of favorable responses.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "480 is what percent greater than 120?",
  choices: [{ id: "A", text: "75%" }, { id: "B", text: "300%" }, { id: "C", text: "360%" }, { id: "D", text: "400%" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice B is correct.**\n\n**The Fast Way:** Percent greater $= \\frac{480 - 120}{120} \\times 100 = \\frac{360}{120} \\times 100 = 300\\%$.\n\n**The Full Solution:**\n\"$A$ is what percent greater than $B$\" means $\\frac{A - B}{B} \\times 100$.\n\n$\\frac{480 - 120}{120} \\times 100 = \\frac{360}{120} \\times 100 = 3 \\times 100 = 300\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{120}{480} \\times 100 = 25\\%$, then $100\\% - 25\\% = 75\\%$.\n• C: Computes $\\frac{360}{100}$ instead of $\\frac{360}{120}$.\n• D: Computes $\\frac{480}{120} = 4 = 400\\%$ (this is \"what percent OF,\" not \"what percent GREATER\").\n\n**Test Day Takeaway:** \"Percent greater than\" uses the difference over the base. \"Percent of\" uses the whole over the base. They differ by 100%.",
  skills: ["percents", "word-problems"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "The equation $2x^2 + bx + 18 = 0$ has exactly one real solution. Which of the following could be the value of $b$?",
  choices: [{ id: "A", text: "$-10$" }, { id: "B", text: "$-12$" }, { id: "C", text: "$10$" }, { id: "D", text: "$14$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way:** One real solution means discriminant $= 0$: $b^2 - 4(2)(18) = 0$, so $b^2 = 144$, $b = \\pm 12$.\n\n**The Full Solution:**\nFor exactly one real solution: $b^2 - 4ac = 0$.\n$b^2 - 4(2)(18) = 0$\n$b^2 = 144$\n$b = 12$ or $b = -12$.\n\nAmong the choices, $b = -12$ is listed.\n\n**Why the wrong answers are tempting:**\n• A: $(-10)^2 = 100 \neq 144$, giving $100 - 144 = -44 < 0$ (no real solutions).\n• C: $(10)^2 = 100 \neq 144$, also no real solutions.\n• D: $(14)^2 = 196 \neq 144$, giving $196 - 144 = 52 > 0$ (two real solutions).\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$. Two solutions: $> 0$. No solutions: $< 0$.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "A taxi company charges a \\$3.50 base fare plus \\$2.25 per mile. A ride costs \\$21.50. How many miles was the ride?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Linear Equation Word Problem**\n\n**The answer is 8.**\n\n**The Fast Way:** $3.50 + 2.25m = 21.50$. So $2.25m = 18$, $m = 8$.\n\n**The Full Solution:**\nTotal cost $=$ base fare $+$ rate $\\times$ miles.\n$21.50 = 3.50 + 2.25m$\n$21.50 - 3.50 = 2.25m$\n$18 = 2.25m$\n$m = \\frac{18}{2.25} = 8$ miles.\n\n**Common Mistakes:**\n• Dividing $21.50$ by $2.25$ without subtracting the base fare first.\n• Setting up $21.50 = 2.25m$ and getting $m \\approx 9.56$.\n\n**Test Day Takeaway:** In rate problems, subtract the fixed cost first, then divide by the per-unit rate.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "For a data set comparing study hours ($x$) and exam score ($y$) for 20 students, the correlation coefficient is $r = 0.87$. Which statement best describes this relationship?",
  choices: [{ id: "A", text: "There is a weak positive linear relationship." }, { id: "B", text: "There is a strong positive linear relationship." }, { id: "C", text: "Studying more hours causes higher exam scores." }, { id: "D", text: "87% of students who study more score higher." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpreting Correlation Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way:** $r = 0.87$ is close to 1, indicating a strong positive linear relationship.\n\n**The Full Solution:**\nThe correlation coefficient $r$ ranges from $-1$ to $1$:\n- $|r| > 0.7$: strong\n- $0.4 < |r| < 0.7$: moderate\n- $|r| < 0.4$: weak\n\nSince $r = 0.87 > 0.7$ and is positive, this is a strong positive linear relationship.\n\n**Why the wrong answers are tempting:**\n• A: \"Weak\" contradicts $r = 0.87$ which is strong.\n• C: Correlation does not imply causation.\n• D: Misinterprets $r$ as a percentage of students.\n\n**Test Day Takeaway:** Correlation measures strength and direction of a LINEAR relationship. It does NOT prove causation.",
  skills: ["statistics"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "If $\\frac{a}{b} = \\frac{3}{5}$ and $\\frac{b}{c} = \\frac{10}{7}$, what is $\\frac{a}{c}$?",
  choices: [{ id: "A", text: "$\\frac{3}{7}$" }, { id: "B", text: "$\\frac{6}{7}$" }, { id: "C", text: "$\\frac{30}{35}$" }, { id: "D", text: "$\\frac{7}{6}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Chained Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\frac{a}{c} = \\frac{a}{b} \\times \\frac{b}{c} = \\frac{3}{5} \\times \\frac{10}{7} = \\frac{30}{35} = \\frac{6}{7}$.\n\n**The Full Solution:**\nMultiply the two ratios to eliminate $b$:\n$\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c} = \\frac{3}{5} \\cdot \\frac{10}{7} = \\frac{30}{35} = \\frac{6}{7}$.\n\n**Why the wrong answers are tempting:**\n• A: Multiplies only the numerators' relation: $\\frac{3}{7}$.\n• C: This equals $\\frac{6}{7}$ but is unsimplified. Technically correct, but B is the simplified form.\n• D: Inverts the answer.\n\n**Test Day Takeaway:** To chain ratios $\\frac{a}{b}$ and $\\frac{b}{c}$, multiply them. The common variable $b$ cancels.",
  skills: ["ratios"]
},
{
  id: 14, type: "fill-in", difficulty: "medium",
  question: "A factory produces widgets. On Monday, 2% of widgets were defective. On Tuesday, 3% of widgets were defective. Monday's production was 500 widgets and Tuesday's production was 300 widgets. What percentage of the total two-day production was defective? Round to the nearest tenth.",
  correctAnswer: "2.4",
  explanation: "**SAT Pattern: Weighted Average of Percents**\n\n**The answer is 2.4.**\n\n**The Fast Way:** Total defective $= 0.02(500) + 0.03(300) = 10 + 9 = 19$. Total produced $= 800$. Percent $= \\frac{19}{800} \\times 100 = 2.375 \\approx 2.4\\%$.\n\n**The Full Solution:**\nMonday defective: $2\\%$ of $500 = 10$.\nTuesday defective: $3\\%$ of $300 = 9$.\nTotal defective $= 10 + 9 = 19$.\nTotal production $= 500 + 300 = 800$.\n\nDefective rate $= \\frac{19}{800} = 0.02375 = 2.375\\% \\approx 2.4\\%$.\n\n**Common Mistakes:**\n• Averaging the percentages: $\\frac{2 + 3}{2} = 2.5\\%$ (ignores different production volumes).\n• Using only one day's data.\n\n**Test Day Takeaway:** Never average percentages directly when the groups have different sizes. Always compute total favorable / total count.",
  skills: ["percents", "statistics"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The equation $\\frac{3}{x - 2} + \\frac{5}{x + 2} = \\frac{8x}{x^2 - 4}$ has how many real solutions?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "Infinitely many" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** Since $x^2 - 4 = (x-2)(x+2)$, multiply both sides by $(x-2)(x+2)$.\n\n**The Full Solution:**\nMultiply both sides by $(x-2)(x+2)$, noting $x \neq 2$ and $x \neq -2$:\n\n$3(x+2) + 5(x-2) = 8x$\n$3x + 6 + 5x - 10 = 8x$\n$8x - 4 = 8x$\n$-4 = 0$\n\nThis is a contradiction, so the equation has no solutions.\n\n**Why the wrong answers are tempting:**\n• B: Students expect clearing denominators to produce a solvable equation.\n• C: Misidentifies the restricted values $x = 2$ and $x = -2$ as solutions.\n• D: Confuses a contradiction with an identity.\n\n**Test Day Takeaway:** When clearing denominators leads to a contradiction (like $-4 = 0$), the equation has no solutions.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "The distribution of test scores for 100 students. The five intervals and their frequencies are:\n\n$[50, 60)$: 8 students\n$[60, 70)$: 22 students\n$[70, 80)$: 35 students\n$[80, 90)$: 25 students\n$[90, 100]$: 10 students\n\nThe teacher decides to add 5 bonus points to every student's score. Which of the following statistics does NOT change?",
  choices: [{ id: "A", text: "Mean" }, { id: "B", text: "Median" }, { id: "C", text: "Standard deviation" }, { id: "D", text: "Maximum" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Effect of Adding a Constant to All Values**\n\n**Choice C is correct.**\n\n**The Fast Way:** Adding a constant to every value shifts all measures of center (mean, median) and position (max, min) but does NOT change measures of spread (standard deviation, IQR, range).\n\n**The Full Solution:**\nWhen a constant $k$ is added to every data value:\n- Mean increases by $k$: new mean $= \\bar{x} + 5$. Changes.\n- Median increases by $k$: new median $= M + 5$. Changes.\n- Maximum increases by $k$: new max $= \\text{max} + 5$. Changes.\n- Standard deviation stays the same: $\\sigma$ measures spread, and all values shift equally.\n\n**Why the wrong answers are tempting:**\n• A: The mean definitely shifts up by 5.\n• B: The median shifts up by 5.\n• D: The max shifts up by 5.\n\n**Test Day Takeaway:** Adding a constant shifts center and position but NOT spread. Multiplying by a constant changes everything.",
  skills: ["statistics"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "A company's quarterly revenue (in thousands of dollars) for the last 8 quarters is:\n\n120, 135, 128, 142, 150, 138, 155, 162\n\nThe company claims that quarterly revenue is increasing by an average of \\$6,000 per quarter. Based on the data, what is the actual average increase per quarter, in thousands of dollars? Round to the nearest whole number.",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Average Rate of Change from Data**\n\n**The answer is 6.**\n\n**The Fast Way:** Average increase per quarter $= \\frac{\\text{last} - \\text{first}}{\\text{number of intervals}} = \\frac{162 - 120}{7} = \\frac{42}{7} = 6$.\n\n**The Full Solution:**\nThe average rate of change over the 8 data points (7 intervals) is:\n$\\frac{162 - 120}{8 - 1} = \\frac{42}{7} = 6$ thousand dollars per quarter.\n\nThis equals \\$6,000 per quarter, confirming the company's claim.\n\n**Common Mistakes:**\n• Dividing by 8 instead of 7 (there are $n-1$ intervals between $n$ data points).\n• Computing the average of all values instead of the average change.\n\n**Test Day Takeaway:** Average rate of change $= \\frac{\\text{final} - \\text{initial}}{\\text{number of intervals}}$. Don't divide by the number of data points.",
  skills: ["statistics", "linear-functions"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "The expression $\\frac{x^2 - 9}{x^2 + 5x + 6} \\cdot \\frac{x^2 + 4x + 4}{x^2 - x - 6}$ simplifies to which of the following?",
  choices: [{ id: "A", text: "$\\frac{x + 2}{x + 2}$" }, { id: "B", text: "$\\frac{(x-3)(x+2)}{(x+3)(x-3)}$" }, { id: "C", text: "$1$" }, { id: "D", text: "$\\frac{x+2}{x-3}$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Simplifying Rational Expressions**\n\n**Choice C is correct.**\n\n**The Fast Way:** Factor everything, then cancel.\n\n**The Full Solution:**\nFactor each part:\n- $x^2 - 9 = (x-3)(x+3)$\n- $x^2 + 5x + 6 = (x+2)(x+3)$\n- $x^2 + 4x + 4 = (x+2)^2$\n- $x^2 - x - 6 = (x-3)(x+2)$\n\nSubstitute:\n$\\frac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\frac{(x+2)^2}{(x-3)(x+2)}$\n\n$= \\frac{(x-3)(x+3)(x+2)^2}{(x+2)(x+3)(x-3)(x+2)}$\n\n$= \\frac{(x-3)(x+3)(x+2)^2}{(x-3)(x+3)(x+2)^2} = 1$\n\n(for $x \neq 3, -3, -2$)\n\n**Why the wrong answers are tempting:**\n• A: Partially simplifies but leaves $\\frac{x+2}{x+2}$, which equals 1 anyway.\n• B: Incomplete cancellation.\n• D: Cancels incorrectly, leaving extra factors.\n\n**Test Day Takeaway:** Factor every quadratic first. Then cancel common factors between numerators and denominators across the entire expression.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "A polynomial $p(x) = x^3 + ax^2 + bx - 6$ has $x = 2$ as a zero and $p(1) = -2$. What is the value of $a + b$?",
  choices: [{ id: "A", text: "$-1$" }, { id: "B", text: "$1$" }, { id: "C", text: "$3$" }, { id: "D", text: "$5$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Finding Polynomial Coefficients from Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way:** Use the two conditions to set up a system.\n\n**The Full Solution:**\n$p(2) = 0$: $8 + 4a + 2b - 6 = 0 \\Rightarrow 4a + 2b = -2 \\Rightarrow 2a + b = -1$ ... (i)\n\n$p(1) = -2$: $1 + a + b - 6 = -2 \\Rightarrow a + b = 3$ ... (ii)\n\nSubtract (ii) from (i): $(2a + b) - (a + b) = -1 - 3$, so $a = -4$.\nFrom (ii): $b = 3 - (-4) = 7$.\n\n$a + b = -4 + 7 = 3$.\n\nVerify: $p(x) = x^3 - 4x^2 + 7x - 6$. $p(2) = 8 - 16 + 14 - 6 = 0$. ✓\n$p(1) = 1 - 4 + 7 - 6 = -2$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Confuses $2a + b = -1$ with the answer.\n• B: Arithmetic error subtracting the equations.\n• D: Adds 4 and 1 instead of following through correctly.\n\n**Test Day Takeaway:** The Remainder Theorem ($p(c)$ equals the remainder when dividing by $(x - c)$) turns root/value conditions into linear equations.",
  skills: ["polynomial-operations", "systems-of-equations"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "The function $f(x) = x^4 - 3x^2 - 4$ can be factored using a substitution $u = x^2$. How many distinct real zeros does $f$ have?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Quadratic in Disguise**\n\n**The answer is 2.**\n\n**The Fast Way:** Let $u = x^2$: $u^2 - 3u - 4 = (u - 4)(u + 1) = 0$, so $u = 4$ or $u = -1$. Only $u = 4$ gives real $x$-values.\n\n**The Full Solution:**\nLet $u = x^2$. Then $f(x) = u^2 - 3u - 4 = (u - 4)(u + 1)$.\n\n$u = 4$: $x^2 = 4$, so $x = 2$ or $x = -2$. (2 real zeros)\n$u = -1$: $x^2 = -1$ has no real solutions.\n\nTotal distinct real zeros: 2.\n\n**Common Mistakes:**\n• Reporting 4 by assuming both $u$-values yield real $x$-values.\n• Reporting 1 by forgetting $x = \\pm 2$ counts as 2 zeros.\n\n**Test Day Takeaway:** After substitution, check whether each $u$-value is non-negative (since $u = x^2 \\geq 0$). Negative $u$-values yield no real $x$.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "A survey of 500 adults produced the following results:\n\n|  | Supports Policy | Opposes Policy | No Opinion | Total |\n|---|---|---|---|---|\n| Age 18-39 | 95 | 55 | 50 | 200 |\n| Age 40-64 | 80 | 70 | 30 | 180 |\n| Age 65+ | 35 | 60 | 25 | 120 |\n| Total | 210 | 185 | 105 | 500 |\n\nA researcher claims that support for the policy decreases with age. Which of the following calculations best supports this claim?",
  choices: [{ id: "A", text: "The number who support decreases: 95, 80, 35." }, { id: "B", text: "The proportion who support in each group decreases: $\\frac{95}{200} = 47.5\\%$, $\\frac{80}{180} \\approx 44.4\\%$, $\\frac{35}{120} \\approx 29.2\\%$." }, { id: "C", text: "The total opposition (185) is less than total support (210)." }, { id: "D", text: "The 65+ group has the smallest number of respondents." }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Comparing Groups with Proportions vs. Counts**\n\n**Choice B is correct.**\n\n**The Fast Way:** To compare groups of different sizes, use proportions (percentages), not raw counts.\n\n**The Full Solution:**\nThe groups have different sizes (200, 180, 120), so comparing raw counts is misleading. The correct approach is to compute the proportion of each age group that supports the policy:\n\n- Age 18-39: $\\frac{95}{200} = 47.5\\%$\n- Age 40-64: $\\frac{80}{180} \\approx 44.4\\%$\n- Age 65+: $\\frac{35}{120} \\approx 29.2\\%$\n\nThe decreasing percentages across age groups support the claim.\n\n**Why the wrong answers are tempting:**\n• A: Raw counts decrease, but the groups have different sizes. If groups were equal, this might work, but they aren't.\n• C: Comparing overall support vs. opposition doesn't address the relationship with age.\n• D: The group size is irrelevant to whether support decreases with age.\n\n**Test Day Takeaway:** When comparing across groups of different sizes, always use proportions (row percentages), not raw counts.",
  skills: ["two-way-tables", "statistics"]
},
{
  id: 22, type: "fill-in", difficulty: "hard",
  question: "The equation $-2x^2 + bx - 50 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  correctAnswer: "19",
  explanation: "**SAT Pattern: Discriminant and No Real Solutions**\n\n**The answer is 19.**\n\n**The Fast Way:** No real solutions means discriminant $< 0$: $b^2 - 4(-2)(-50) < 0$, so $b^2 < 400$, giving $|b| < 20$. Greatest integer: 19.\n\n**The Full Solution:**\nFor $-2x^2 + bx - 50 = 0$: $a = -2$, $b = b$, $c = -50$.\n\nDiscriminant $= b^2 - 4ac = b^2 - 4(-2)(-50) = b^2 - 400$.\n\nNo real solutions: discriminant $< 0$.\n$b^2 - 400 < 0$\n$b^2 < 400$\n$|b| < 20$\n\nThe greatest integer with $|b| < 20$ is $b = 19$.\n\nCheck: $b = 19$: discriminant $= 361 - 400 = -39 < 0$. ✓ (no real solutions)\n$b = 20$: discriminant $= 400 - 400 = 0$. ✗ (one real solution, not \"no\" solutions)\n\n**Common Mistakes:**\n• Using $b = 20$: this gives discriminant $= 0$, meaning one repeated solution exists.\n• Sign error in $4ac$: $4(-2)(-50) = 400$, not $-400$.\n\n**Test Day Takeaway:** \"No real solutions\" requires discriminant $< 0$ (strictly less than). The boundary value gives exactly one solution.",
  skills: ["discriminant", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest8;
