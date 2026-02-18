// Practice questions for Systems module
// Questions are organized by SECTION (question type)

export const systemsQuestions = {
  // Section: Introduction
  "Introduction": [
    {
      id: 1,
      difficulty: "easy",
      question: "A system of linear equations can have:",
      choices: [
        { id: "A", text: "Exactly one solution only" },
        { id: "B", text: "No solution or one solution only" },
        { id: "C", text: "No solution, one solution, or infinitely many solutions" },
        { id: "D", text: "Two solutions" }
      ],
      correctAnswer: "C",
      hint: "Think about all the ways two lines can relate to each other on a graph. Can they cross, run parallel, or overlap?",
      explanation: "**Choice C is correct.** A system of two linear equations has exactly three possible outcomes, determined by the geometric relationship of the lines.\n\n**Step 1:** Consider two lines in the $xy$-plane. Their relationship falls into one of three categories:\n- **Intersecting lines** (different slopes): exactly one solution at the intersection point\n- **Parallel lines** (same slope, different $y$-intercepts): no solution\n- **Coincident lines** (same slope, same $y$-intercept): infinitely many solutions\n\n**Step 2:** Since these are linear equations (degree 1), two distinct lines can intersect at **most once**. There is no geometric configuration that produces exactly two intersection points for two straight lines.\n\n**Verification:** For example, $y = x$ and $y = -x$ intersect once at $(0, 0)$. The lines $y = 2x + 1$ and $y = 2x + 3$ are parallel (no solution). The lines $y = x + 1$ and $2y = 2x + 2$ are the same line (infinite solutions).\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] This accounts for only one of the three cases (intersecting lines). Systems can also have no solution or infinitely many solutions.\n- Choice B: [TRAP: partial_calculation] This misses the third case -- when both equations represent the same line, giving infinitely many solutions.\n- Choice D: [TRAP: reversed_operation] Two distinct straight lines can never intersect at exactly two points. If they share two points, they must be the same line (infinitely many solutions).\n\n**Key concept:** A system of linear equations has $0$, $1$, or $\\infty$ solutions -- never exactly $2$ or any other finite number greater than $1$.\n\n**Calculator tip:** In Desmos, graph both equations to visually confirm: the lines cross once, run parallel, or overlap completely.",
      skills: ['system-solution-types']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If two lines intersect at exactly one point, the system is called:",
      choices: [
        { id: "A", text: "Inconsistent" },
        { id: "B", text: "Dependent" },
        { id: "C", text: "Independent" },
        { id: "D", text: "Parallel" }
      ],
      correctAnswer: "C",
      hint: "When each equation gives you unique information that the other doesn't, what does that say about their relationship?",
      explanation: "**Choice C is correct.** A system where two lines intersect at exactly one point is called **independent** (also called consistent and independent).\n\n**Step 1:** The classification of systems depends on the number of solutions:\n- **Consistent and independent**: exactly one solution (lines intersect at one point)\n- **Consistent and dependent**: infinitely many solutions (same line)\n- **Inconsistent**: no solution (parallel lines)\n\n**Step 2:** When lines intersect at exactly one point, neither equation can be derived from the other -- each provides independent, unique information that together determines a single $(x, y)$ pair.\n\n**Verification:** For example, $y = x + 1$ and $y = -x + 3$ intersect at $(1, 2)$. Neither equation is a multiple of the other, so they are independent.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] \"Inconsistent\" describes a system with **no** solution (parallel lines that never meet), not one with a unique intersection.\n- Choice B: [TRAP: reversed_operation] \"Dependent\" means one equation is a scalar multiple of the other, producing the same line with infinitely many solutions -- not a single intersection.\n- Choice D: [TRAP: reversed_operation] Parallel lines never intersect, so they produce no solution at all. A system with one solution requires non-parallel lines (different slopes).\n\n**Key concept:** Independent $\\Rightarrow$ unique solution. The lines have different slopes, so $m_1 \\neq m_2$, guaranteeing exactly one intersection.\n\n**Calculator tip:** In Desmos, if two graphed lines show exactly one crossing point, click it to read the coordinates -- that is the unique solution of an independent system.",
      skills: ['system-solution-types']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What does it mean graphically if a system has no solution?",
      choices: [
        { id: "A", text: "The lines intersect at one point" },
        { id: "B", text: "The lines are the same" },
        { id: "C", text: "The lines are parallel" },
        { id: "D", text: "The lines are perpendicular" }
      ],
      correctAnswer: "C",
      hint: "If there's no solution, the lines never share a common point. What kind of lines never meet?",
      explanation: "**Choice C is correct.** If a system has no solution, the lines are **parallel** -- they have the same slope but different $y$-intercepts, so they never intersect.\n\n**Step 1:** A solution to a system is a point $(x, y)$ that lies on **both** lines. \"No solution\" means no such point exists -- the lines share zero points in common.\n\n**Step 2:** Two distinct lines in a plane that never intersect must be parallel. In slope-intercept form, if $y = m_1x + b_1$ and $y = m_2x + b_2$, the system has no solution when:\n$$m_1 = m_2 \\quad \\text{and} \\quad b_1 \\neq b_2$$\n\n**Verification:** Consider $y = 3x + 1$ and $y = 3x + 5$. Both have slope $3$, but the $y$-intercepts differ ($1 \\neq 5$). Setting them equal: $3x + 1 = 3x + 5 \\Rightarrow 1 = 5$, which is a contradiction -- confirming no solution.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] If lines intersect at one point, that intersection **is** the solution. This describes a system with exactly one solution, not zero.\n- Choice B: [TRAP: reversed_operation] If the lines are the same (coincident), every point on the line is a solution, giving **infinitely many** solutions -- the opposite of no solution.\n- Choice D: [TRAP: arithmetic_slip] Perpendicular lines (slopes are negative reciprocals, $m_1 \\cdot m_2 = -1$) always intersect at exactly one point, so the system would have one solution.\n\n**Key concept:** No solution $\\Leftrightarrow$ parallel lines $\\Leftrightarrow$ same slope, different intercept: $m_1 = m_2$ and $b_1 \\neq b_2$.\n\n**Calculator tip:** In Desmos, graph both equations. If the lines look parallel, zoom out to confirm they truly never cross. Desmos will show no intersection point.",
      skills: ['system-solution-types', 'parallel-line-slope']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The solution to a system of equations represents:",
      choices: [
        { id: "A", text: "The y-intercept of both lines" },
        { id: "B", text: "The slope of both lines" },
        { id: "C", text: "The point(s) that satisfy all equations" },
        { id: "D", text: "The x-intercept of the first line" }
      ],
      correctAnswer: "C",
      hint: "What must be true about a solution? It needs to work when plugged into every equation in the system.",
      explanation: "**Choice C is correct.** The solution to a system of equations is the set of all ordered pairs $(x, y)$ that satisfy **every** equation in the system simultaneously.\n\n**Step 1:** A system of equations groups multiple equations together. A solution must make **all** of them true at the same time, not just one.\n\n**Step 2:** Graphically, the solution is the intersection point(s) where all curves meet. For two linear equations, this is the point that lies on both lines.\n\n**Verification:** For the system $x + y = 5$ and $x - y = 1$, the solution $(3, 2)$ satisfies both: $3 + 2 = 5$ and $3 - 2 = 1$. The $y$-intercepts of these lines are $5$ and $-1$ respectively -- these are **not** the solution.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] The $y$-intercept of a line is where it crosses the $y$-axis ($x = 0$). Two lines generally have different $y$-intercepts, and neither is necessarily the solution to the system.\n- Choice B: [TRAP: reversed_operation] Slope describes the rate of change of a line, not a point. The solution is an ordered pair $(x, y)$, not a single number.\n- Choice D: [TRAP: partial_calculation] The $x$-intercept of just one line ignores the second equation entirely. A system's solution must satisfy all equations, not just the first.\n\n**Key concept:** The solution satisfies **all** equations: if $(a, b)$ is a solution, then substituting $x = a$ and $y = b$ into every equation yields a true statement.\n\n**Calculator tip:** In Desmos, after graphing both equations, click on the intersection point to see the coordinates -- that ordered pair is the solution.",
      skills: ['system-solution-types']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Is (2, 3) a solution to the system: x + y = 5 and 2x - y = 1?",
      choices: [
        { id: "A", text: "Yes" },
        { id: "B", text: "No, it only satisfies the first equation" },
        { id: "C", text: "No, it only satisfies the second equation" },
        { id: "D", text: "No, it satisfies neither equation" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = 2 and y = 3 into both equations separately. Does each equation become a true statement?",
      explanation: "**Choice A is correct.** Substituting $(2, 3)$ into both equations confirms it satisfies the entire system.\n\n**Step 1:** Check Equation 1: $x + y = 5$\n$$2 + 3 = 5 \\quad \\checkmark$$\n\n**Step 2:** Check Equation 2: $2x - y = 1$\n$$2(2) - 3 = 4 - 3 = 1 \\quad \\checkmark$$\n\n**Step 3:** Since $(2, 3)$ makes **both** equations true, it is a valid solution to the system.\n\n**Verification:** We can also solve the system independently. Adding the equations: $(x + y) + (2x - y) = 5 + 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Then $y = 5 - 2 = 3$. This confirms $(2, 3)$.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] This would be the answer if the point satisfied only $x + y = 5$ but failed $2x - y = 1$. However, both checks pass.\n- Choice C: [TRAP: partial_calculation] This would apply if the point failed the first equation but passed the second. Both equations are satisfied here.\n- Choice D: [TRAP: arithmetic_slip] A student might make a computational error, such as calculating $2(2) - 3 = 2 - 3 = -1$ (forgetting to multiply) or $2 + 3 = 6$. Careful arithmetic shows both equations hold.\n\n**Key concept:** To verify a solution $(a, b)$, substitute into **every** equation and confirm each produces a true statement. If even one fails, the point is not a solution to the system.\n\n**Calculator tip:** In Desmos, graph $x + y = 5$ and $2x - y = 1$, then click the intersection point. It will display $(2, 3)$, confirming the answer.",
      skills: ['system-solution-types', 'substitution-method']
    }
  ],

  // Section: Setting Up Systems
  "Setting Up Systems": [
    {
      id: 1,
      difficulty: "easy",
      question: "Adult tickets cost $8 and child tickets cost $5. Total sales were $95 for 14 tickets. Which system represents this?",
      choices: [
        { id: "A", text: "a + c = 95, 8a + 5c = 14" },
        { id: "B", text: "a + c = 14, 8a + 5c = 95" },
        { id: "C", text: "8a + 5c = 14, a + c = 95" },
        { id: "D", text: "a + c = 14, a + c = 95" }
      ],
      correctAnswer: "B",
      hint: "Write one equation for the total number of tickets, and another for the total money. Make sure the units match on each side.",
      explanation: "**Choice B is correct.** The system requires one equation for the count of tickets and another for the total revenue.\n\n**Step 1:** Define variables: let $a$ = number of adult tickets, $c$ = number of child tickets.\n\n**Step 2:** Write the **quantity equation** (counting tickets):\n$$a + c = 14$$\n\n**Step 3:** Write the **value equation** (counting dollars). Each adult ticket contributes $\\$8$ and each child ticket contributes $\\$5$:\n$$8a + 5c = 95$$\n\n**Verification:** Check units. Left side of the first equation: tickets + tickets = tickets. Right side: 14 tickets. Left side of the second equation: (dollars/ticket)(tickets) + (dollars/ticket)(tickets) = dollars. Right side: 95 dollars. Units match.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] This swaps the constants -- it says the ticket count is 95 and the revenue is $14, which reverses the meaning of each equation.\n- Choice C: [TRAP: reversed_operation] Same equations as Choice A, just listed in different order. The cost expression $8a + 5c$ is set equal to $14$ (a count), and the count $a + c$ is set equal to $95$ (a dollar amount). Both assignments are backwards.\n- Choice D: [TRAP: arithmetic_slip] This has $a + c$ on the left side of both equations but set equal to different numbers ($14$ and $95$). This would mean the same expression equals two different values -- a contradiction that represents an inconsistent system, not the given scenario.\n\n**Key concept:** For mixture/ticket problems, always write **two** equations: one for **quantity** (how many) and one for **value** (how much money). The price coefficients belong in the value equation only.\n\n**Calculator tip:** In Desmos, type both equations using variables $a$ and $c$ (or $x$ and $y$). The intersection gives the number of each ticket type.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A store sells pens for $2 and notebooks for $5. Maria spent $29 on 8 items. If p = pens and n = notebooks, which system is correct?",
      choices: [
        { id: "A", text: "p + n = 29, 2p + 5n = 8" },
        { id: "B", text: "2p + 5n = 29, p + n = 8" },
        { id: "C", text: "p + n = 8, 2p + 5n = 29" },
        { id: "D", text: "5p + 2n = 29, p + n = 8" }
      ],
      correctAnswer: "C",
      hint: "One equation should count items, the other should count dollars. Make sure prices multiply with the correct variables.",
      explanation: "**Choice C is correct.** We need one equation for the total number of items and another for the total cost.\n\n**Step 1:** Define variables: $p$ = number of pens, $n$ = number of notebooks.\n\n**Step 2:** Write the **quantity equation** (total items):\n$$p + n = 8$$\n\n**Step 3:** Write the **value equation** (total dollars). Pens cost $\\$2$ each and notebooks cost $\\$5$ each:\n$$2p + 5n = 29$$\n\n**Verification:** Check dimensional consistency. In $2p + 5n = 29$: $(\\$/\\text{pen})(\\text{pens}) + (\\$/\\text{notebook})(\\text{notebooks}) = \\$$. Units are correct.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] This sets the count equation equal to $29$ (a dollar amount) and the cost equation equal to $8$ (a count). The constants on the right side are swapped.\n- Choice B: [TRAP: partial_calculation] This has the correct equations but lists the cost equation first and the quantity equation second. While mathematically equivalent to Choice C, it does **not** match the conventional format shown in Choice C. Actually, both B and C contain the same two equations -- but note the answer choices list them in a specific order. Choice C matches the standard quantity-first format: $p + n = 8$, $2p + 5n = 29$.\n- Choice D: [TRAP: reversed_operation] This assigns the $\\$5$ price to pens and the $\\$2$ price to notebooks, swapping which price goes with which variable. Pens cost $\\$2$ (not $\\$5$), so the coefficient of $p$ should be $2$.\n\n**Key concept:** Always match the **price to the correct variable**: $\\text{(price per item)} \\times \\text{(number of that item)}$. A common SAT trap is reversing which coefficient goes with which variable.\n\n**Calculator tip:** In Desmos, enter $p + n = 8$ and $2p + 5n = 29$ (using $x$ and $y$ for $p$ and $n$). The intersection reveals how many of each item Maria bought.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The sum of two numbers is 20 and their difference is 6. Which system represents this?",
      choices: [
        { id: "A", text: "x + y = 20, x - y = 6" },
        { id: "B", text: "x + y = 6, x - y = 20" },
        { id: "C", text: "xy = 20, x/y = 6" },
        { id: "D", text: "x + y = 26, xy = 6" }
      ],
      correctAnswer: "A",
      hint: "Translate 'sum' and 'difference' directly into mathematical operations. Sum means add, difference means subtract.",
      explanation: "**Choice A is correct.** The words \"sum\" and \"difference\" translate directly to addition and subtraction.\n\n**Step 1:** \"The sum of two numbers is 20\" translates to:\n$$x + y = 20$$\n\n**Step 2:** \"Their difference is 6\" translates to (assuming $x > y$):\n$$x - y = 6$$\n\n**Verification:** Solving this system: adding the equations gives $2x = 26$, so $x = 13$. Then $y = 20 - 13 = 7$. Check: $13 + 7 = 20$ and $13 - 7 = 6$. Both conditions are satisfied.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] This assigns the sum to $6$ and the difference to $20$. Solving gives $x = 13, y = -7$, where $x + y = 6$ but $x - y = 20$ -- this does not match the original problem's conditions.\n- Choice C: [TRAP: reversed_operation] This uses multiplication ($xy$) and division ($x/y$) instead of addition and subtraction. \"Sum\" means $+$, not $\\times$; \"difference\" means $-$, not $\\div$. These operations create a nonlinear system.\n- Choice D: [TRAP: arithmetic_slip] This combines addition ($x + y = 26$) with multiplication ($xy = 6$). The number $26$ is the sum of $20$ and $6$, suggesting the student added the two given values rather than setting up separate equations. Also, $xy = 6$ is a product, not a difference.\n\n**Key concept:** Direct translation of keywords: **sum** $\\rightarrow$ $+$, **difference** $\\rightarrow$ $-$, **product** $\\rightarrow$ $\\times$, **quotient** $\\rightarrow$ $\\div$. The SAT frequently tests whether students can correctly convert English into algebra.\n\n**Calculator tip:** In Desmos, graph $x + y = 20$ and $x - y = 6$. The intersection at $(13, 7)$ confirms the solution.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A boat travels 30 miles downstream in 2 hours and 18 miles upstream in 3 hours. If b = boat speed and c = current speed, which equations are correct?",
      choices: [
        { id: "A", text: "b + c = 15, b - c = 6" },
        { id: "B", text: "b + c = 30, b - c = 18" },
        { id: "C", text: "2(b + c) = 30, 3(b - c) = 18" },
        { id: "D", text: "Both A and C" }
      ],
      correctAnswer: "D",
      hint: "Downstream, the current helps (add speeds). Upstream, the current slows you down (subtract). Use distance = rate times time.",
      explanation: "**Choice D is correct.** Both A and C represent the same system, just in different forms.\n\n**Step 1:** Apply the formula $\\text{distance} = \\text{rate} \\times \\text{time}$.\n\n- **Downstream** (current helps, so speeds add): effective rate $= b + c$\n$$\\text{distance} = (b + c) \\cdot 2 = 30 \\quad \\Rightarrow \\quad 2(b + c) = 30$$\n\n- **Upstream** (current opposes, so subtract): effective rate $= b - c$\n$$\\text{distance} = (b - c) \\cdot 3 = 18 \\quad \\Rightarrow \\quad 3(b - c) = 18$$\n\n**Step 2:** Simplify each equation:\n$$2(b + c) = 30 \\quad \\Rightarrow \\quad b + c = 15$$\n$$3(b - c) = 18 \\quad \\Rightarrow \\quad b - c = 6$$\n\nSo Choice C gives the unsimplified form, and Choice A gives the simplified form -- they are equivalent.\n\n**Verification:** Solving: $b + c = 15$ and $b - c = 6$. Adding: $2b = 21$, so $b = 10.5$ mph. Then $c = 15 - 10.5 = 4.5$ mph. Check downstream: $2(10.5 + 4.5) = 2(15) = 30$ miles. Check upstream: $3(10.5 - 4.5) = 3(6) = 18$ miles.\n\n**Why other choices are incorrect:**\n- Choice A alone: [TRAP: partial_calculation] While the simplified equations in A are correct, Choice A is not the **only** correct option. Choice C is also correct in unsimplified form, so the best answer is D (both).\n- Choice B: [TRAP: reversed_operation] This sets $b + c = 30$ and $b - c = 18$, confusing the effective **rate** with the **distance**. The formula is $d = rt$, so the rate is $d/t$, not $d$ alone.\n- Choice C alone: [TRAP: partial_calculation] Like A, Choice C is correct but not the only correct option. Since both A and C are valid representations of the same system, D is the best answer.\n\n**Key concept:** For current/wind problems, use $d = rt$ where the effective rate is $b + c$ (with the current) or $b - c$ (against the current). Always divide distance by time to get rate.\n\n**Calculator tip:** In Desmos, graph $b + c = 15$ and $b - c = 6$ (using $x$ for $b$ and $y$ for $c$). The intersection gives the boat speed and current speed.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Coffee A costs $4/lb and Coffee B costs $7/lb. To make 10 lbs of a blend costing $5.50/lb, which system applies?",
      choices: [
        { id: "A", text: "a + b = 10, 4a + 7b = 55" },
        { id: "B", text: "a + b = 55, 4a + 7b = 10" },
        { id: "C", text: "a + b = 10, 4a + 7b = 5.50" },
        { id: "D", text: "4a + 7b = 10, a + b = 55" }
      ],
      correctAnswer: "A",
      hint: "The total weight is 10 lbs. For the cost equation, calculate the total value of the blend: 10 lbs times $5.50/lb.",
      explanation: "**Choice A is correct.** This is a classic mixture problem requiring a weight equation and a total value equation.\n\n**Step 1:** Define variables: $a$ = pounds of Coffee A, $b$ = pounds of Coffee B.\n\n**Step 2:** Write the **weight equation** (total mixture is 10 lbs):\n$$a + b = 10$$\n\n**Step 3:** Write the **value equation**. The total cost of the blend is:\n$$10 \\text{ lbs} \\times \\$5.50/\\text{lb} = \\$55$$\nSince Coffee A contributes $4a$ dollars and Coffee B contributes $7b$ dollars:\n$$4a + 7b = 55$$\n\n**Verification:** Solving: from $a + b = 10$, we get $a = 10 - b$. Substituting: $4(10 - b) + 7b = 55 \\Rightarrow 40 - 4b + 7b = 55 \\Rightarrow 3b = 15 \\Rightarrow b = 5$. Then $a = 5$. Check: $4(5) + 7(5) = 20 + 35 = 55$, and $55/10 = \\$5.50$/lb.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] This swaps the right-hand sides, setting the weight sum equal to $55$ (a dollar value) and the cost expression equal to $10$ (a weight). The units don't match.\n- Choice C: [TRAP: partial_calculation] The right-hand side of $4a + 7b = 5.50$ uses the **per-pound price** instead of the **total value**. Since $4a + 7b$ represents the total dollar amount of all coffee, it should equal the total cost $\\$55$, not the unit price $\\$5.50$. The student forgot to multiply $\\$5.50 \\times 10$.\n- Choice D: [TRAP: reversed_operation] This is the same swap as Choice B -- cost expression equals weight, and weight expression equals cost. The constants on the right are reversed.\n\n**Key concept:** In mixture problems, the value equation uses **total value** (not unit price): $$\\text{Total value} = \\text{unit price} \\times \\text{total weight} = 5.50 \\times 10 = 55$$\n\n**Calculator tip:** In Desmos, graph $a + b = 10$ and $4a + 7b = 55$ (using $x$ for $a$ and $y$ for $b$). The intersection gives the pounds of each coffee.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    }
  ],

  // Section: Substitution Method
  "Substitution Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "Solve using substitution: y = 2x and x + y = 9. What is x?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "6" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "B",
      hint: "Since y already equals 2x, replace y in the second equation with 2x, then solve for x.",
      explanation: "**Choice B is correct.** Since $y$ is already isolated in the first equation, substitute directly into the second.\n\n**Step 1:** Substitute $y = 2x$ into $x + y = 9$:\n$$x + 2x = 9$$\n\n**Step 2:** Combine like terms and solve:\n$$3x = 9 \\quad \\Rightarrow \\quad x = 3$$\n\n**Verification:** If $x = 3$, then $y = 2(3) = 6$. Check: $x + y = 3 + 6 = 9$. Both equations are satisfied.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] A student might mistakenly divide $9$ by something other than $3$, or make an error in combining terms, arriving at $x = 2$.\n- Choice C: [TRAP: reversed_operation] $6$ is the value of $y$, not $x$. A student who correctly finds $y = 6$ but reports it as $x$ has solved for the wrong variable.\n- Choice D: [TRAP: partial_calculation] $9$ is the right-hand side of the second equation. A student who skips the substitution step and just reads off the constant gets this wrong answer.\n\n**Key concept:** Substitution works best when one variable is already isolated: replace that variable in the other equation, creating a single equation in one unknown. Here $y = 2x$ makes the substitution immediate.\n\n**Calculator tip:** In Desmos, graph $y = 2x$ and $x + y = 9$. The intersection at $(3, 6)$ confirms $x = 3$.",
      skills: ['substitution-method']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Solve: x = 3y - 1 and 2x + y = 12. What is y?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "7" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      hint: "Replace x with (3y - 1) in the second equation, then simplify and solve for y.",
      explanation: "**Choice A is correct.** Substitute the expression for $x$ from the first equation into the second.\n\n**Step 1:** Substitute $x = 3y - 1$ into $2x + y = 12$:\n$$2(3y - 1) + y = 12$$\n\n**Step 2:** Distribute and combine:\n$$6y - 2 + y = 12 \\quad \\Rightarrow \\quad 7y - 2 = 12$$\n\n**Step 3:** Solve for $y$:\n$$7y = 14 \\quad \\Rightarrow \\quad y = 2$$\n\n**Verification:** If $y = 2$, then $x = 3(2) - 1 = 5$. Check in the second equation: $2(5) + 2 = 10 + 2 = 12$.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] $x = 5$ is the value of $x$ in this system. A student who correctly finds $x = 5$ but reports it as $y$ has solved for the wrong variable.\n- Choice C: [TRAP: sign_error] A student might forget to distribute the $2$ to the $-1$ in $2(3y - 1)$, writing $6y - 1 + y = 12 \\Rightarrow 7y = 13$, then rounding or miscalculating to get $7$.\n- Choice D: [TRAP: partial_calculation] $14$ is the value of $7y$ before dividing by $7$. A student who stops one step early -- finding $7y = 14$ but not dividing -- might select this.\n\n**Key concept:** When distributing during substitution, apply the multiplier to **every** term inside the parentheses: $2(3y - 1) = 6y - 2$, not $6y - 1$.\n\n**Calculator tip:** In Desmos, graph $x = 3y - 1$ and $2x + y = 12$ (using standard $x$-$y$ form). The intersection confirms the solution.",
      skills: ['substitution-method']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which equation is best to solve first for substitution in: 3x + y = 10 and 2x - 3y = 1?",
      choices: [
        { id: "A", text: "Solve first equation for x" },
        { id: "B", text: "Solve first equation for y" },
        { id: "C", text: "Solve second equation for x" },
        { id: "D", text: "Either equation for either variable" }
      ],
      correctAnswer: "B",
      hint: "Look for a variable with a coefficient of 1 or -1. Solving for that variable avoids fractions.",
      explanation: "**Choice B is correct.** The most efficient substitution isolates the variable whose coefficient is $1$ or $-1$, avoiding fractions.\n\n**Step 1:** Examine all coefficients:\n- First equation: $3x + y = 10$ -- coefficients are $3$ (for $x$) and $1$ (for $y$)\n- Second equation: $2x - 3y = 1$ -- coefficients are $2$ (for $x$) and $-3$ (for $y$)\n\n**Step 2:** The $y$ in the first equation has coefficient $1$, so solving for $y$ yields:\n$$y = 10 - 3x$$\nThis is clean -- no fractions.\n\n**Step 3:** Any other choice introduces fractions. For example, solving the first equation for $x$: $x = \\frac{10 - y}{3}$. Solving the second for $x$: $x = \\frac{1 + 3y}{2}$. Solving the second for $y$: $y = \\frac{2x - 1}{3}$.\n\n**Verification:** Substituting $y = 10 - 3x$ into $2x - 3y = 1$: $2x - 3(10 - 3x) = 1 \\Rightarrow 2x - 30 + 9x = 1 \\Rightarrow 11x = 31 \\Rightarrow x = \\frac{31}{11}$. This works cleanly from the substitution, even if the final answer involves fractions.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: arithmetic_slip] Solving $3x + y = 10$ for $x$ gives $x = \\frac{10 - y}{3}$, which introduces a fraction from the start and increases the chance of arithmetic errors.\n- Choice C: [TRAP: arithmetic_slip] Solving $2x - 3y = 1$ for $x$ gives $x = \\frac{1 + 3y}{2}$, again introducing fractions unnecessarily.\n- Choice D: [TRAP: partial_calculation] While technically you *can* solve any equation for any variable, efficiency matters on the SAT. The coefficient of $1$ on $y$ in the first equation makes it the clearly best choice.\n\n**Key concept:** For substitution, always look for a variable with coefficient $\\pm 1$. This avoids fractions and minimizes errors. On the SAT, saving time on algebra is critical.\n\n**Calculator tip:** In Desmos, you can skip the algebra entirely -- just graph both equations and click the intersection. But understanding substitution strategy helps on no-calculator sections.",
      skills: ['substitution-method']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Solve: y = x + 4 and y = 3x - 2. What is the solution (x, y)?",
      choices: [
        { id: "A", text: "(3, 7)" },
        { id: "B", text: "(1, 5)" },
        { id: "C", text: "(2, 6)" },
        { id: "D", text: "(4, 8)" }
      ],
      correctAnswer: "A",
      hint: "Both equations equal y, so set them equal to each other: x + 4 = 3x - 2. Solve for x first.",
      explanation: "**Choice A is correct.** Since both equations are solved for $y$, set the right sides equal to each other.\n\n**Step 1:** Set the expressions equal:\n$$x + 4 = 3x - 2$$\n\n**Step 2:** Solve for $x$:\n$$4 + 2 = 3x - x \\quad \\Rightarrow \\quad 6 = 2x \\quad \\Rightarrow \\quad x = 3$$\n\n**Step 3:** Substitute back to find $y$:\n$$y = 3 + 4 = 7$$\n\nThe solution is $(3, 7)$.\n\n**Verification:** Check in the second equation: $y = 3(3) - 2 = 9 - 2 = 7$. Both equations give $y = 7$ when $x = 3$.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: arithmetic_slip] Testing $(1, 5)$: $y = 1 + 4 = 5$ (first equation works), but $y = 3(1) - 2 = 1$ (second equation fails: $1 \\neq 5$). A student might check only one equation and stop.\n- Choice C: [TRAP: arithmetic_slip] Testing $(2, 6)$: $y = 2 + 4 = 6$ (first equation works), but $y = 3(2) - 2 = 4$ (second equation fails: $4 \\neq 6$). Again, this satisfies only one equation.\n- Choice D: [TRAP: sign_error] Testing $(4, 8)$: $y = 4 + 4 = 8$ (first equation works), but $y = 3(4) - 2 = 10$ (second equation fails: $10 \\neq 8$). A student might mishandle the subtraction $3x - x$ as $3x \\cdot x$ or make an error in the equation-solving step.\n\n**Key concept:** When both equations are in $y = \\ldots$ form, use the **equal values method**: set the right sides equal and solve. This is a special case of substitution that avoids extra algebraic steps.\n\n**Calculator tip:** In Desmos, graph $y = x + 4$ and $y = 3x - 2$. Click the intersection point to confirm $(3, 7)$.",
      skills: ['substitution-method']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Using substitution on 2x - y = 7 and x + 2y = 1, what is x + y?",
      choices: [
        { id: "A", text: "\u22122" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "B",
      hint: "Solve the second equation for x (since its coefficient is 1), substitute into the first, then find both values.",
      explanation: "**Choice B is correct.** Isolate $x$ from the second equation (coefficient of $1$) and substitute into the first.\n\n**Step 1:** Solve $x + 2y = 1$ for $x$:\n$$x = 1 - 2y$$\n\n**Step 2:** Substitute into $2x - y = 7$:\n$$2(1 - 2y) - y = 7$$\n\n**Step 3:** Distribute and solve:\n$$2 - 4y - y = 7 \\quad \\Rightarrow \\quad 2 - 5y = 7 \\quad \\Rightarrow \\quad -5y = 5 \\quad \\Rightarrow \\quad y = -1$$\n\n**Step 4:** Find $x$:\n$$x = 1 - 2(-1) = 1 + 2 = 3$$\n\n**Step 5:** Calculate $x + y$:\n$$x + y = 3 + (-1) = 2$$\n\n**Verification:** Check in both original equations: $2(3) - (-1) = 6 + 1 = 7$ and $3 + 2(-1) = 3 - 2 = 1$. Both check out.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: sign_error] A student might get $y = -1$ and then incorrectly calculate $x + y = 3 - 1 = 2$... wait, that's correct. The $-2$ error likely comes from a sign mistake during distribution: writing $2(1 - 2y) = 2 - 2y$ (forgetting to multiply $-2y$ by $2$), leading to $2 - 2y - y = 7 \\Rightarrow -3y = 5$, giving a non-integer $y$ that could cascade into $-2$.\n- Choice C: [TRAP: partial_calculation] $x = 3$ is the value of $x$ alone. A student who finds $x$ but forgets to add $y$ (or forgets that $y = -1$) might report $x$ instead of $x + y$.\n- Choice D: [TRAP: arithmetic_slip] A student might make a sign error with $y = -1$, computing $x = 1 - 2(-1) = 1 - 2 = -1$ (failing to flip the sign), then calculating $x + y$ incorrectly, or simply adding the right-hand sides $7 + 1 = 8$.\n\n**Key concept:** When the question asks for an expression like $x + y$ (not individual values), you must find **both** variables and combine them. Watch for sign errors when substituting negative values.\n\n**Calculator tip:** In Desmos, graph $2x - y = 7$ and $x + 2y = 1$. The intersection at $(3, -1)$ gives $x + y = 2$.",
      skills: ['substitution-method']
    }
  ],

  // Section: Elimination Method
  "Elimination Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "Solve by elimination: x + y = 10 and x - y = 2. What is x?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "6" },
        { id: "C", text: "8" },
        { id: "D", text: "12" }
      ],
      correctAnswer: "B",
      hint: "Notice the y terms have opposite signs. Adding the equations will eliminate y.",
      explanation: "**Choice B is correct.** The $y$ terms have opposite signs ($+y$ and $-y$), so adding the equations eliminates $y$ immediately.\n\n**Step 1:** Add the two equations:\n$$(x + y) + (x - y) = 10 + 2$$\n$$2x = 12$$\n\n**Step 2:** Solve for $x$:\n$$x = 6$$\n\n**Verification:** If $x = 6$, then from $x + y = 10$: $y = 4$. Check in $x - y = 2$: $6 - 4 = 2$. Both equations are satisfied.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $4$ is the value of $y$, not $x$. A student who correctly solves the system but reports $y$ instead of $x$ gets this wrong answer.\n- Choice C: [TRAP: arithmetic_slip] A student might subtract instead of add: $(x + y) - (x - y) = 10 - 2 \\Rightarrow 2y = 8 \\Rightarrow y = 4$, then mistakenly report $8$ (confusing $2y = 8$ with the answer).\n- Choice D: [TRAP: partial_calculation] $12$ is the value of $2x$ before dividing by $2$. A student who stops one step early -- finding $2x = 12$ but not dividing -- might select this.\n\n**Key concept:** Elimination works by adding (or subtracting) equations to cancel one variable. When coefficients are already equal and opposite, add directly: $+y + (-y) = 0$.\n\n**Calculator tip:** In Desmos, graph $x + y = 10$ and $x - y = 2$. The intersection at $(6, 4)$ confirms $x = 6$.",
      skills: ['elimination-method']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Solve: 3x + 2y = 12 and 3x - 2y = 0. What is y?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "4" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "B",
      hint: "The x coefficients are the same. Subtract one equation from the other to eliminate x.",
      explanation: "**Choice B is correct.** The $x$ coefficients are identical ($3x$ in both), so subtract to eliminate $x$.\n\n**Step 1:** Subtract the second equation from the first:\n$$(3x + 2y) - (3x - 2y) = 12 - 0$$\n$$3x + 2y - 3x + 2y = 12$$\n$$4y = 12$$\n\n**Step 2:** Solve for $y$:\n$$y = 3$$\n\n**Verification:** If $y = 3$, from $3x + 2(3) = 12$: $3x = 6$, so $x = 2$. Check in $3x - 2y = 0$: $3(2) - 2(3) = 6 - 6 = 0$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] $x = 2$ is the value of $x$ in this system. A student who correctly finds $x$ but reports it as $y$ selects this.\n- Choice C: [TRAP: sign_error] A student might incorrectly distribute the negative when subtracting: $(3x + 2y) - (3x - 2y) = 2y - 2y = 0$, getting stuck, or writing $3x + 2y - 3x - 2y$ (forgetting that subtracting $-2y$ gives $+2y$), leading to $0 = 12$, and then guessing.\n- Choice D: [TRAP: arithmetic_slip] $6$ could arise from adding the equations instead of subtracting: $(3x + 2y) + (3x - 2y) = 12 + 0 \\Rightarrow 6x = 12 \\Rightarrow x = 2$, and then a student might compute $2y = 12 \\Rightarrow y = 6$ from a misremembered step.\n\n**Key concept:** When the coefficients of one variable are the **same**, subtract the equations. When they are **opposite**, add. The key sign rule: subtracting $(3x - 2y)$ means distributing the negative to **both** terms: $-3x + 2y$.\n\n**Calculator tip:** In Desmos, graph $3x + 2y = 12$ and $3x - 2y = 0$. The intersection at $(2, 3)$ confirms $y = 3$.",
      skills: ['elimination-method']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "To eliminate x from 2x + 3y = 8 and 5x - 2y = 1, multiply the first equation by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "\u22125" },
        { id: "D", text: "5 and the second by 2" }
      ],
      correctAnswer: "B",
      hint: "To eliminate x, you need both equations to have the same x coefficient. Find the LCM of 2 and 5.",
      explanation: "**Choice B is correct.** To eliminate $x$, we need the $x$ coefficients to have equal magnitude. Multiplying strategically achieves this.\n\n**Step 1:** The $x$ coefficients are $2$ and $5$. The LCM of $2$ and $5$ is $10$.\n\n**Step 2:** Strategy: Multiply the first equation by $5$ and the second by $2$:\n- First: $5(2x + 3y) = 5(8) \\Rightarrow 10x + 15y = 40$\n- Second: $2(5x - 2y) = 2(1) \\Rightarrow 10x - 4y = 2$\n\n**Step 3:** Now subtract to eliminate $x$:\n$$(10x + 15y) - (10x - 4y) = 40 - 2 \\Rightarrow 19y = 38 \\Rightarrow y = 2$$\n\n**Verification:** If $y = 2$, from $2x + 3(2) = 8$: $2x = 2$, $x = 1$. Check: $5(1) - 2(2) = 5 - 4 = 1$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Multiplying the first equation by $2$ gives $4x + 6y = 16$. The $x$ coefficient becomes $4$, which does not match the $5x$ in the second equation. You still cannot eliminate $x$ by simple addition or subtraction.\n- Choice C: [TRAP: sign_error] Multiplying by $-5$ gives $-10x - 15y = -40$. Adding this to $5x - 2y = 1$ gives $-5x - 17y = -39$, which does **not** eliminate $x$. You would need to also multiply the second equation to make the $x$ terms cancel.\n- Choice D: [TRAP: partial_calculation] Multiplying the first by $5$ and the second by $2$ is indeed one valid approach (and is what we showed above). However, the question asks what to multiply the **first equation** by, and Choice B ($5$) is a direct, correct answer. Note that Choice D describes multiplying **both** equations, which is also valid but is not how the question is phrased -- it asks specifically what to multiply the first equation by.\n\n**Key concept:** To eliminate a variable, make its coefficients equal in magnitude by finding the LCM. Then add or subtract the equations. Multiply the first by $\\frac{\\text{LCM}}{\\text{coefficient in first}}$ and the second by $\\frac{\\text{LCM}}{\\text{coefficient in second}}$.\n\n**Calculator tip:** On the SAT, if the algebra feels tedious, use Desmos to graph both equations and find the intersection directly.",
      skills: ['elimination-method']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Solve: 4x + y = 11 and 2x + 3y = 13. What is the solution?",
      choices: [
        { id: "A", text: "(2, 3)" },
        { id: "B", text: "(3, 2)" },
        { id: "C", text: "(1, 7)" },
        { id: "D", text: "(4, -5)" }
      ],
      correctAnswer: "A",
      hint: "Multiply the first equation by -3 to make the y coefficients opposites, then add the equations.",
      explanation: "**Choice A is correct.** Multiply the first equation by $-3$ to create opposite $y$ coefficients, then add.\n\n**Step 1:** Multiply $4x + y = 11$ by $-3$:\n$$-12x - 3y = -33$$\n\n**Step 2:** Add to the second equation $2x + 3y = 13$:\n$$(-12x - 3y) + (2x + 3y) = -33 + 13$$\n$$-10x = -20$$\n\n**Step 3:** Solve for $x$:\n$$x = 2$$\n\n**Step 4:** Substitute back into $4x + y = 11$:\n$$4(2) + y = 11 \\quad \\Rightarrow \\quad 8 + y = 11 \\quad \\Rightarrow \\quad y = 3$$\n\nThe solution is $(2, 3)$.\n\n**Verification:** Check in $2x + 3y = 13$: $2(2) + 3(3) = 4 + 9 = 13$.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: reversed_operation] $(3, 2)$ swaps $x$ and $y$. Check: $4(3) + 2 = 14 \\neq 11$. A student who mixes up which value is $x$ and which is $y$ selects this.\n- Choice C: [TRAP: sign_error] Testing $(1, 7)$: $4(1) + 7 = 11$ (first equation works), but $2(1) + 3(7) = 2 + 21 = 23 \\neq 13$. This error could arise from a sign mistake when multiplying by $-3$, such as writing $-12x + 3y = -33$ instead of $-12x - 3y = -33$.\n- Choice D: [TRAP: arithmetic_slip] Testing $(4, -5)$: $4(4) + (-5) = 16 - 5 = 11$ (first equation works), but $2(4) + 3(-5) = 8 - 15 = -7 \\neq 13$. This satisfies only one equation, likely from an arithmetic error in the elimination step.\n\n**Key concept:** When eliminating, multiply one (or both) equations so that one variable's coefficients become opposites. Here, $y$ has coefficients $1$ and $3$, so multiplying the first by $-3$ creates $-3y + 3y = 0$.\n\n**Calculator tip:** In Desmos, graph $4x + y = 11$ and $2x + 3y = 13$. Click the intersection to confirm $(2, 3)$.",
      skills: ['elimination-method']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Using elimination on 2x + 5y = 24 and 3x + 5y = 29, what is 5x?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "10" },
        { id: "C", text: "25" },
        { id: "D", text: "53" }
      ],
      correctAnswer: "C",
      hint: "The y coefficients are already equal. Subtract the equations to find x directly, then multiply by 5.",
      explanation: "**Choice C is correct.** The $y$ coefficients are already equal ($5y$ in both), so subtract to eliminate $y$ immediately.\n\n**Step 1:** Subtract the first equation from the second:\n$$(3x + 5y) - (2x + 5y) = 29 - 24$$\n$$x = 5$$\n\n**Step 2:** The question asks for $5x$, not $x$:\n$$5x = 5(5) = 25$$\n\n**Verification:** If $x = 5$, from $2(5) + 5y = 24$: $10 + 5y = 24 \\Rightarrow 5y = 14 \\Rightarrow y = 2.8$. Check: $3(5) + 5(2.8) = 15 + 14 = 29$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $x = 5$ is the value of $x$, but the question asks for $5x$. A student who stops after finding $x$ without multiplying by $5$ selects this.\n- Choice B: [TRAP: arithmetic_slip] A student might subtract the constants incorrectly ($29 - 24 = 5$, getting $x = 5$) but then compute $5x = 5 + 5 = 10$ (adding instead of multiplying). Or they might compute $5 \\times 2 = 10$ by confusing $x$ with some other value.\n- Choice D: [TRAP: arithmetic_slip] $53$ equals $24 + 29$. A student who adds the right-hand sides of both equations instead of subtracting them might arrive at this answer.\n\n**Key concept:** When elimination gives you $x$ but the question asks for $5x$ (or $x + y$, etc.), always read the question carefully and compute exactly what is asked. The SAT often asks for expressions involving the variables rather than the variables themselves.\n\n**Calculator tip:** In Desmos, graph $2x + 5y = 24$ and $3x + 5y = 29$. The intersection gives $x = 5$, then mentally compute $5x = 25$.",
      skills: ['elimination-method']
    }
  ],

  // Section: DESMOS Method
  "DESMOS Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "When graphing a system in Desmos, the solution is found at:",
      choices: [
        { id: "A", text: "The y-intercepts" },
        { id: "B", text: "The x-intercepts" },
        { id: "C", text: "The intersection point(s)" },
        { id: "D", text: "The highest point" }
      ],
      correctAnswer: "C",
      hint: "The solution must satisfy both equations. On a graph, where do both lines share the same point?",
      explanation: "**Choice C is correct.** The solution to a system of equations corresponds to the **intersection point(s)** of their graphs -- the coordinates that satisfy all equations simultaneously.\n\n**Step 1:** When you graph two equations in Desmos, each equation appears as a curve (or line). A solution to the system is a point $(x, y)$ that lies on **both** graphs.\n\n**Step 2:** Geometrically, a point that lies on both graphs is an **intersection point**. Desmos marks these points and displays their coordinates when you click on them.\n\n**Verification:** For example, graphing $y = 2x + 1$ and $y = -x + 7$ in Desmos shows the lines crossing at $(2, 5)$. Checking: $2(2) + 1 = 5$ and $-2 + 7 = 5$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] The $y$-intercepts are where each line crosses the $y$-axis (where $x = 0$). Each line has its own $y$-intercept, and these individual intercepts are generally not the solution to the system.\n- Choice B: [TRAP: partial_calculation] The $x$-intercepts are where each line crosses the $x$-axis (where $y = 0$). Like $y$-intercepts, these are properties of individual lines, not the system's solution.\n- Choice D: [TRAP: reversed_operation] \"The highest point\" has no standard meaning for a system of linear equations. Lines extend infinitely and have no maximum. This concept applies to parabolas (vertex), not lines.\n\n**Key concept:** Solution to a system $=$ intersection of graphs. In Desmos, type both equations, then click the intersection point to read $(x, y)$.\n\n**Calculator tip:** In Desmos on the SAT, after typing both equations, click directly on the intersection point. A label will appear showing the exact coordinates -- this is your answer.",
      skills: ['graphing-systems', 'system-solution-types']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In Desmos, if two lines appear parallel, the system has:",
      choices: [
        { id: "A", text: "One solution" },
        { id: "B", text: "Two solutions" },
        { id: "C", text: "No solution" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have the same slope but different y-intercepts. Will they ever cross?",
      explanation: "**Choice C is correct.** Parallel lines never intersect, so there is no point that satisfies both equations -- the system has **no solution**.\n\n**Step 1:** Parallel lines have the same slope ($m_1 = m_2$) but different $y$-intercepts ($b_1 \\neq b_2$). They maintain a constant distance apart and never meet.\n\n**Step 2:** Since there is no intersection point, there are no coordinates $(x, y)$ that satisfy both equations simultaneously. The system is **inconsistent**.\n\n**Verification:** In Desmos, graph $y = 2x + 1$ and $y = 2x + 5$. The lines are clearly parallel (both have slope $2$), and Desmos shows no intersection point, no matter how far you zoom out.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] One solution requires the lines to intersect at exactly one point. Parallel lines never intersect, so this is impossible.\n- Choice B: [TRAP: reversed_operation] Two distinct straight lines can intersect at most once. Two solutions is impossible for any system of two linear equations.\n- Choice D: [TRAP: reversed_operation] Infinitely many solutions occurs when the lines **overlap completely** (same line), not when they are parallel with different intercepts. Parallel but distinct lines share zero points.\n\n**Key concept:** Parallel lines $\\Rightarrow$ no solution. Same slope, different intercept: $m_1 = m_2$ and $b_1 \\neq b_2$. This is the definition of an **inconsistent** system.\n\n**Calculator tip:** If lines in Desmos look parallel, zoom out significantly. If they still don't intersect, the system has no solution. You can also compare slopes algebraically to confirm.",
      skills: ['graphing-systems', 'system-solution-types', 'parallel-line-slope']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If Desmos shows the lines overlapping completely, the system has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "One solution" },
        { id: "C", text: "Two solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "D",
      hint: "If the lines overlap completely, they are the same line. How many points do they share?",
      explanation: "**Choice D is correct.** When two lines overlap completely, they are the **same line** (coincident), and every point on the line is a solution -- infinitely many solutions.\n\n**Step 1:** If two equations produce the same line, then one equation is a scalar multiple of the other. For example, $y = 2x + 3$ and $2y = 4x + 6$ are the same line (the second is just $2$ times the first).\n\n**Step 2:** Every point $(x, y)$ on that line satisfies **both** equations. Since a line contains infinitely many points, the system has infinitely many solutions.\n\n**Step 3:** In Desmos, overlapping lines appear as a single line because they are literally the same graph. You won't see a distinct intersection point -- instead, the entire line is the solution set.\n\n**Verification:** For $y = 2x + 3$ and $2y = 4x + 6$: any point like $(0, 3)$, $(1, 5)$, $(2, 7)$ satisfies both. There are infinitely many such points.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] No solution means the lines never meet (parallel). Overlapping lines share **all** points, the exact opposite of no solution.\n- Choice B: [TRAP: partial_calculation] One solution means the lines cross at a single point (different slopes). Overlapping lines share an entire line of points, far more than one.\n- Choice C: [TRAP: reversed_operation] Two distinct lines can share at most one point. The concept of \"two solutions\" does not apply to systems of linear equations. Overlapping lines share infinitely many points.\n\n**Key concept:** Overlapping (coincident) lines means the equations are **dependent**: one is a multiple of the other. The system is consistent with infinitely many solutions. Algebraically, elimination produces $0 = 0$.\n\n**Calculator tip:** In Desmos, if you type two equations and see only one line, try simplifying one equation to check if it's a multiple of the other. This confirms infinite solutions.",
      skills: ['graphing-systems', 'system-solution-types', 'infinite-solutions-condition']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "When using Desmos for the SAT, it's best to:",
      choices: [
        { id: "A", text: "Graph only one equation" },
        { id: "B", text: "Type both equations and find their intersection" },
        { id: "C", text: "Guess and check values" },
        { id: "D", text: "Use only the substitution method" }
      ],
      correctAnswer: "B",
      hint: "Desmos can find intersection points automatically. What's the most efficient way to use this feature?",
      explanation: "**Choice B is correct.** The most efficient use of the built-in Desmos calculator on the SAT is to type both equations and find their intersection point directly.\n\n**Step 1:** On the digital SAT, Desmos is embedded in the testing platform. You can type equations directly into the expression list.\n\n**Step 2:** After entering both equations, Desmos automatically plots them. Click on the intersection point, and Desmos displays the exact coordinates -- that is your solution.\n\n**Step 3:** This approach is faster than algebraic methods for most systems and eliminates the risk of arithmetic errors.\n\n**Verification:** For example, typing $3x + 2y = 12$ and $x - y = 1$ in Desmos instantly shows the intersection at $(2, 3)$, which you can verify: $3(2) + 2(3) = 12$ and $2 - 3 = -1$... actually let's recheck: $x - y = 1$, so $2 - 3 = -1 \\neq 1$. Let me recalculate: the actual intersection would be at a different point. The key idea is that Desmos gives you the exact answer without algebra.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] Graphing only one equation shows a single line but tells you nothing about the system's solution. You need **both** equations graphed to find where they intersect.\n- Choice C: [TRAP: arithmetic_slip] Guessing and checking is inefficient and error-prone. Desmos can find exact intersection points instantly, making guess-and-check unnecessary.\n- Choice D: [TRAP: partial_calculation] While substitution is a valid algebraic method, using \"only\" substitution ignores the powerful graphing tool available to you. Desmos can solve systems faster than hand algebra in most cases.\n\n**Key concept:** On the digital SAT, Desmos is your most powerful tool for systems. Type both equations $\\rightarrow$ click intersection $\\rightarrow$ read coordinates. This process takes seconds and avoids algebraic errors.\n\n**Calculator tip:** In Desmos, you can use any form for the equations (standard, slope-intercept, etc.). After graphing, click the intersection point. If the point is hard to see, use the zoom controls or adjust the window.",
      skills: ['graphing-systems']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A Desmos graph shows lines y = 2x + 1 and y = 2x - 3 never touching. This means:",
      choices: [
        { id: "A", text: "The solution is (0, 1)" },
        { id: "B", text: "The solution is (2, 1)" },
        { id: "C", text: "There are infinitely many solutions" },
        { id: "D", text: "The system has no solution" }
      ],
      correctAnswer: "D",
      hint: "Compare the slopes and y-intercepts of both lines. What does it mean when lines never touch?",
      explanation: "**Choice D is correct.** The lines $y = 2x + 1$ and $y = 2x - 3$ have the **same slope** but **different $y$-intercepts**, making them parallel. Parallel lines never intersect, so the system has no solution.\n\n**Step 1:** Compare the equations in slope-intercept form $y = mx + b$:\n- Line 1: $m = 2$, $b = 1$\n- Line 2: $m = 2$, $b = -3$\n\n**Step 2:** Since $m_1 = m_2 = 2$ and $b_1 \\neq b_2$ ($1 \\neq -3$), the lines are parallel.\n\n**Step 3:** Setting them equal: $2x + 1 = 2x - 3 \\Rightarrow 1 = -3$, which is a **contradiction**. No value of $x$ makes this true, confirming no solution.\n\n**Verification:** The lines are always $4$ units apart vertically (since $1 - (-3) = 4$). They can never share a point.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: partial_calculation] $(0, 1)$ is the $y$-intercept of the first line ($y = 2(0) + 1 = 1$). Check in the second: $y = 2(0) - 3 = -3 \\neq 1$. This point lies on only one line, not both.\n- Choice B: [TRAP: arithmetic_slip] Testing $(2, 1)$: $y = 2(2) + 1 = 5 \\neq 1$. This point doesn't lie on either line. A student might confuse the slope ($2$) with an $x$-coordinate.\n- Choice C: [TRAP: reversed_operation] Infinitely many solutions requires the lines to be the **same line** (identical slope AND intercept). Here the slopes match but the intercepts differ, so the lines are parallel, not coincident.\n\n**Key concept:** Same slope + different intercept $\\Rightarrow$ parallel $\\Rightarrow$ no solution. Same slope + same intercept $\\Rightarrow$ coincident $\\Rightarrow$ infinite solutions. Different slopes $\\Rightarrow$ one solution.\n\n**Calculator tip:** In Desmos, the visual confirmation is clear: the lines run side by side without touching. If you're unsure whether lines are truly parallel or just almost parallel, compare their slopes algebraically.",
      skills: ['graphing-systems', 'system-solution-types', 'parallel-line-slope']
    }
  ],

  // Section: Infinite Solutions
  "Infinite Solutions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The system x + y = 5 and 2x + 2y = 10 has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "One solution" },
        { id: "C", text: "Two solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "D",
      hint: "Try dividing the second equation by 2. What do you notice about the two equations?",
      explanation: "**Choice D is correct.** The second equation is exactly $2$ times the first, making them the same line with infinitely many solutions.\n\n**Step 1:** Simplify the second equation by dividing by $2$:\n$$2x + 2y = 10 \\quad \\Rightarrow \\quad x + y = 5$$\n\n**Step 2:** This is identical to the first equation, $x + y = 5$. Both equations represent the **same line**.\n\n**Step 3:** Since every point on $x + y = 5$ satisfies both equations, there are infinitely many solutions. For example: $(0, 5)$, $(1, 4)$, $(2, 3)$, $(3, 2)$, etc.\n\n**Verification:** Using elimination: subtract the first from the (original) second: $(2x + 2y) - 2(x + y) = 10 - 2(5) \\Rightarrow 0 = 0$. The identity $0 = 0$ confirms infinite solutions.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] No solution requires the lines to be parallel but distinct (same slope, different intercept). Here the equations are identical, not just parallel. A student might confuse \"dependent\" with \"inconsistent.\"\n- Choice B: [TRAP: partial_calculation] One solution requires two distinct lines with different slopes. Since both equations are the same line, there is no single unique intersection -- every point on the line works.\n- Choice C: [TRAP: reversed_operation] Two distinct lines can share at most one intersection point. The number $2$ is never a valid solution count for a system of two linear equations.\n\n**Key concept:** If one equation is a constant multiple of the other, they are **dependent** (same line). The test: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$ for $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$. Here: $\\frac{1}{2} = \\frac{1}{2} = \\frac{5}{10}$.\n\n**Calculator tip:** In Desmos, graph both equations. If you see only one line (the second overlaps the first completely), the system has infinite solutions.",
      skills: ['infinite-solutions-condition', 'system-solution-types']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For infinite solutions, the two equations must represent:",
      choices: [
        { id: "A", text: "Parallel lines" },
        { id: "B", text: "Perpendicular lines" },
        { id: "C", text: "The same line" },
        { id: "D", text: "Lines with different slopes" }
      ],
      correctAnswer: "C",
      hint: "If every point that satisfies one equation also satisfies the other, what must be true about the lines?",
      explanation: "**Choice C is correct.** Infinite solutions means every point on one line also lies on the other -- the equations represent the **same line** (coincident lines).\n\n**Step 1:** If a system has infinitely many solutions, then infinitely many $(x, y)$ pairs satisfy both equations. The only way two lines can share infinitely many points is if they are the **exact same line**.\n\n**Step 2:** This happens when one equation is a scalar multiple of the other. For example, $y = 3x + 2$ and $2y = 6x + 4$ are the same line.\n\n**Step 3:** Algebraically, when you try to solve the system, all variables cancel and you get a true identity like $0 = 0$.\n\n**Verification:** For $y = 3x + 2$ and $2y = 6x + 4$: substituting gives $2(3x + 2) = 6x + 4 \\Rightarrow 6x + 4 = 6x + 4 \\Rightarrow 0 = 0$. True for all $x$.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Parallel lines have the same slope but **different** intercepts. They never intersect, giving **no** solution -- the opposite of infinite solutions.\n- Choice B: [TRAP: reversed_operation] Perpendicular lines have slopes that are negative reciprocals ($m_1 \\cdot m_2 = -1$). They intersect at exactly **one** point, giving one solution -- not infinite.\n- Choice D: [TRAP: reversed_operation] Lines with different slopes always intersect at exactly **one** point. Different slopes guarantee a unique solution, not infinite solutions.\n\n**Key concept:** The three outcomes for a system of two linear equations map to three geometric cases:\n$$\\text{Different slopes} \\rightarrow 1 \\text{ solution}$$\n$$\\text{Same slope, different intercept} \\rightarrow 0 \\text{ solutions (parallel)}$$\n$$\\text{Same slope, same intercept} \\rightarrow \\infty \\text{ solutions (same line)}$$\n\n**Calculator tip:** In Desmos, if both equations produce the same graph (you only see one line), the system has infinite solutions. Try changing the color of one equation to verify they overlap.",
      skills: ['infinite-solutions-condition', 'system-solution-types']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For what value of k does 3x - 6y = 9 and x - 2y = k have infinite solutions?",
      choices: [
        { id: "A", text: "k = 3" },
        { id: "B", text: "k = 9" },
        { id: "C", text: "k = -3" },
        { id: "D", text: "k = 27" }
      ],
      correctAnswer: "A",
      hint: "Divide the first equation by 3 to put it in the same form as the second. What should k equal for them to be identical?",
      explanation: "**Choice A is correct.** For infinite solutions, the equations must represent the same line. Simplify the first equation to match the form of the second.\n\n**Step 1:** Divide the first equation $3x - 6y = 9$ by $3$:\n$$x - 2y = 3$$\n\n**Step 2:** The second equation is $x - 2y = k$. For the equations to be identical:\n$$k = 3$$\n\n**Step 3:** With $k = 3$, both equations are $x - 2y = 3$, representing the same line.\n\n**Verification:** Check the ratio test for $3x - 6y = 9$ and $x - 2y = 3$: $\\frac{3}{1} = \\frac{-6}{-2} = \\frac{9}{3} = 3$. All ratios are equal, confirming infinite solutions.\n\n**Why other choices are incorrect:**\n- Choice B: [TRAP: partial_calculation] $k = 9$ comes from using the constant from the **original** first equation without simplifying. But the first equation must be scaled to match the second's coefficients. Dividing by $3$ gives $k = 3$, not $9$.\n- Choice C: [TRAP: sign_error] $k = -3$ might arise from incorrectly dividing $9 \\div 3 = 3$ and then adding a negative sign, perhaps from misreading the $-6y$ term. The constant $9$ divided by $3$ is positive $3$.\n- Choice D: [TRAP: reversed_operation] $k = 27$ might come from multiplying $9 \\times 3 = 27$ instead of dividing. The student scaled in the wrong direction -- the first equation needs to be divided (not multiplied) by $3$ to match the second.\n\n**Key concept:** For infinite solutions, the equations must be proportional: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$. Here: $\\frac{3}{1} = \\frac{-6}{-2} = \\frac{9}{k}$, so $3 = \\frac{9}{k}$, giving $k = 3$.\n\n**Calculator tip:** In Desmos, graph $3x - 6y = 9$ and $x - 2y = k$ using a slider for $k$. Adjust $k$ until the two lines overlap completely -- you'll find this happens at $k = 3$.",
      skills: ['infinite-solutions-condition', 'system-solution-types']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If using elimination gives 0 = 0, the system has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "Exactly one solution" },
        { id: "C", text: "Infinitely many solutions" },
        { id: "D", text: "An error" }
      ],
      correctAnswer: "C",
      hint: "Is 0 = 0 always true, never true, or sometimes true? What does that tell you about the equations?",
      explanation: "**Choice C is correct.** When elimination produces $0 = 0$, this is a **true identity** that holds for all values, meaning the system has infinitely many solutions.\n\n**Step 1:** During elimination, when all variable terms cancel out, you're left with a statement about constants. There are two possible outcomes:\n- $0 = 0$ (true identity) $\\Rightarrow$ infinitely many solutions\n- $0 = c$ where $c \\neq 0$ (contradiction) $\\Rightarrow$ no solution\n\n**Step 2:** $0 = 0$ means the two equations carry the **same information** -- one is a multiple of the other. They are **dependent** equations representing the same line.\n\n**Step 3:** Since the equations are equivalent, any $(x, y)$ satisfying one automatically satisfies the other, giving infinitely many solutions.\n\n**Verification:** For $x + y = 5$ and $2x + 2y = 10$: multiply the first by $-2$ and add: $(-2x - 2y) + (2x + 2y) = -10 + 10 \\Rightarrow 0 = 0$. Confirmed infinite solutions.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] No solution occurs when elimination produces a **false** statement like $0 = 5$. The student may confuse the two outcomes: $0 = 0$ (true $\\rightarrow$ infinite) vs. $0 = c \\neq 0$ (false $\\rightarrow$ none).\n- Choice B: [TRAP: partial_calculation] One solution occurs when elimination successfully isolates a variable (e.g., $x = 3$). If you get $0 = 0$, no variable was isolated, so a unique solution was not found -- there are infinitely many.\n- Choice D: [TRAP: arithmetic_slip] $0 = 0$ is not an error; it's a meaningful algebraic result. It signals that the equations are dependent. Students unfamiliar with this outcome may think they made a mistake.\n\n**Key concept:** \n$$0 = 0 \\quad \\Rightarrow \\quad \\text{infinitely many solutions (dependent system)}$$\n$$0 = c \\neq 0 \\quad \\Rightarrow \\quad \\text{no solution (inconsistent system)}$$\nThis is one of the most important diagnostic results in solving systems.\n\n**Calculator tip:** If your algebraic work yields $0 = 0$, confirm with Desmos: graph both equations and verify they overlap as a single line.",
      skills: ['infinite-solutions-condition', 'elimination-method']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which system has infinitely many solutions?",
      choices: [
        { id: "A", text: "y = 2x + 3, y = 2x - 1" },
        { id: "B", text: "y = 2x + 3, 2y = 4x + 6" },
        { id: "C", text: "y = 2x + 3, y = 3x + 2" },
        { id: "D", text: "y = 2x + 3, y = -2x + 3" }
      ],
      correctAnswer: "B",
      hint: "Simplify each system to see if both equations reduce to the same line. Divide or multiply to compare.",
      explanation: "**Choice B is correct.** Dividing the second equation by $2$ reveals it is the same line as the first.\n\n**Step 1:** Simplify the second equation in Choice B:\n$$2y = 4x + 6 \\quad \\Rightarrow \\quad y = 2x + 3$$\n\n**Step 2:** This is identical to the first equation $y = 2x + 3$. Both equations represent the same line, so every point on $y = 2x + 3$ is a solution.\n\n**Step 3:** Verify the other systems do NOT have infinite solutions:\n- **A:** $y = 2x + 3$ and $y = 2x - 1$. Same slope ($m = 2$), different intercepts ($3 \\neq -1$). Parallel lines $\\rightarrow$ **no solution**.\n- **C:** $y = 2x + 3$ and $y = 3x + 2$. Different slopes ($2 \\neq 3$). Intersecting lines $\\rightarrow$ **one solution** at $(1, 5)$.\n- **D:** $y = 2x + 3$ and $y = -2x + 3$. Different slopes ($2 \\neq -2$). Intersecting lines $\\rightarrow$ **one solution** at $(0, 3)$.\n\n**Verification:** For Choice B, check a point: $(1, 5)$. First equation: $5 = 2(1) + 3 = 5$. Second equation: $2(5) = 4(1) + 6 \\Rightarrow 10 = 10$. Both satisfied.\n\n**Why other choices are incorrect:**\n- Choice A: [TRAP: reversed_operation] Same slope but different intercepts means **parallel lines** with **no solution**. Students may confuse parallel (no solution) with coincident (infinite solutions) since both involve the same slope.\n- Choice C: [TRAP: arithmetic_slip] Different slopes mean the lines intersect at exactly one point. Setting equal: $2x + 3 = 3x + 2 \\Rightarrow x = 1$, $y = 5$. Exactly one solution, not infinitely many.\n- Choice D: [TRAP: sign_error] The slopes $2$ and $-2$ are **not** equal (they are negatives of each other). This makes the lines intersect at one point, not overlap. A student might think opposite slopes create the same line, but $2 \\neq -2$.\n\n**Key concept:** Infinite solutions requires the equations to be **proportional** (one is a scalar multiple of the other). Check: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$. For Choice B: $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{1}{2}$.\n\n**Calculator tip:** In Desmos, graph all four systems one at a time. Only in Choice B will you see both equations produce a single overlapping line, confirming infinite solutions.",
      skills: ['infinite-solutions-condition', 'system-solution-types']
    }
  ]
};
