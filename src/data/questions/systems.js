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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Two lines either cross once, run parallel, or sit on top of each other — that is exactly \"no solution, one solution, or infinitely many.\" Choice C.\n\n**The Full Solution:**\nStep 1: Two distinct lines that cross meet at one point: exactly one solution.\nStep 2: Two lines with equal slopes but different intercepts never meet: no solution.\nStep 3: Two equations that describe the same line share every point: infinitely many solutions.\nThose are the only three outcomes, so C is the complete list.\n\n**Why the wrong answers are tempting:**\n* Choice A: counts only the intersecting case and ignores parallel and coincident lines.\n* Choice B: adds the parallel case but still misses the same-line case (infinitely many).\n* Choice D: two straight lines can never meet at exactly two points — if they share two points they share all of them.\n\n**Test Day Takeaway:** A linear system has $0$, $1$, or infinitely many solutions — never any other finite number.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** One intersection point means each equation adds new information that the other doesn't — that's the definition of an independent system. Choice C.\n\n**The Full Solution:**\nStep 1: Match each label to its number of solutions. Independent (consistent) means exactly one solution.\nStep 2: Lines that cross at one point have different slopes, so neither equation is a multiple of the other — they are independent.\nStep 3: That single crossing point is the unique $(x,y)$ solution, confirming C.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"Inconsistent\" means no solution (parallel lines), not one.\n* Choice B: \"Dependent\" means the equations describe the same line, giving infinitely many solutions.\n* Choice D: \"Parallel\" lines never meet, so a parallel system has no solution at all.\n\n**Test Day Takeaway:** Independent $\\Rightarrow$ different slopes $\\Rightarrow$ exactly one solution. Inconsistent $\\Rightarrow$ none; dependent $\\Rightarrow$ infinitely many.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** \"No solution\" means the lines never share a point, which can only happen when they are parallel — same slope, different intercept. Choice C.\n\n**The Full Solution:**\nStep 1: A solution is a point on both lines. No solution means no shared point.\nStep 2: Two distinct lines that never meet must have equal slopes: $m_1=m_2$ with $b_1 \\neq b_2$.\nStep 3: Setting $y=3x+1$ equal to $y=3x+5$ gives $1=5$, a contradiction — confirming parallel lines produce no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: lines that intersect at one point give exactly one solution, not zero.\n* Choice B: identical lines share every point, giving infinitely many solutions.\n* Choice D: perpendicular lines have slopes that are negative reciprocals and always cross once, so they give one solution.\n\n**Test Day Takeaway:** No solution $\\Leftrightarrow$ parallel lines $\\Leftrightarrow$ same slope, different intercept.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** A solution must make every equation true at once, so it is the point(s) that satisfy all equations. Choice C.\n\n**The Full Solution:**\nStep 1: A system groups equations that must hold simultaneously.\nStep 2: A solution is an ordered pair that satisfies all of them, which is where the graphs meet.\nStep 3: For $x+y=5$ and $x-y=1$, the point $(3,2)$ works in both: $3+2=5$ and $3-2=1$. That shared point is the solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: a $y$-intercept is just where one line meets the $y$-axis; it need not satisfy the other equation.\n* Choice B: slope is a rate, not a point — a solution is an ordered pair $(x,y)$.\n* Choice D: an $x$-intercept of only the first line ignores the second equation entirely.\n\n**Test Day Takeaway:** A solution to a system must satisfy every equation simultaneously — substitute it into all of them and each must be true.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Plug $(2,3)$ into both equations. $2+3=5$ holds and $2(2)-3=1$ holds, so the point satisfies the whole system. Choice A.\n\n**The Full Solution:**\nStep 1: Test equation 1: $x+y=5 \\Rightarrow 2+3=5$. $\\checkmark$\nStep 2: Test equation 2: $2x-y=1 \\Rightarrow 2(2)-3=4-3=1$. $\\checkmark$\nStep 3: Both equations are true, so $(2,3)$ is a solution to the system — answer \"Yes.\"\n\n**Why the wrong answers are tempting:**\n* Choice B: would be right only if the second equation failed, but $2(2)-3=1$ checks out.\n* Choice C: would be right only if the first equation failed, but $2+3=5$ checks out.\n* Choice D: comes from arithmetic slips like $2(2)-3=-1$ (forgetting to multiply) or $2+3=6$. Done carefully, both hold.\n\n**Test Day Takeaway:** To verify a candidate solution, substitute it into every equation — it counts only if all of them come out true.",
      skills: ['system-solution-types', 'substitution-method']
    }
  ],

  // Section: Setting Up Systems
  "Setting Up Systems": [
    {
      id: 1,
      difficulty: "easy",
      question: "Adult tickets cost \\$8 and child tickets cost \\$5. Total sales were \\$95 for 14 tickets. Which system represents this?",
      choices: [
        { id: "A", text: "a + c = 95, 8a + 5c = 14" },
        { id: "B", text: "a + c = 14, 8a + 5c = 95" },
        { id: "C", text: "8a + 5c = 14, a + c = 95" },
        { id: "D", text: "a + c = 14, a + c = 95" }
      ],
      correctAnswer: "B",
      hint: "Write one equation for the total number of tickets, and another for the total money. Make sure the units match on each side.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Count the tickets in one equation, count the dollars in the other: $a+c=14$ and $8a+5c=95$. Choice B.\n\n**The Full Solution:**\nStep 1: Let $a$ be adult tickets and $c$ be child tickets.\nStep 2: Quantity equation — 14 tickets total: $a+c=14$.\nStep 3: Value equation — adults bring $\\$8$ each, children $\\$5$ each, totaling $\\$95$: $8a+5c=95$. That pair is Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the constants, claiming 95 tickets and $\\$14$ in sales — the right sides are reversed.\n* Choice C: same reversed assignment as A, with $8a+5c$ (dollars) set to $14$ and $a+c$ (tickets) set to $95$.\n* Choice D: sets $a+c$ to two different values, which is a contradiction rather than this scenario.\n\n**Test Day Takeaway:** Mixture and ticket problems need a quantity equation (how many) and a value equation (how much money); price coefficients belong only in the value equation.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A store sells pens for \\$2 and notebooks for \\$5. Maria spent \\$29 on 8 items. If p = pens and n = notebooks, which system is correct?",
      choices: [
        { id: "A", text: "p + n = 29, 2p + 5n = 8" },
        { id: "B", text: "2p + 5n = 29, p + n = 8" },
        { id: "C", text: "p + n = 8, 2p + 5n = 29" },
        { id: "D", text: "5p + 2n = 29, p + n = 8" }
      ],
      correctAnswer: "C",
      hint: "One equation should count items, the other should count dollars. Make sure prices multiply with the correct variables.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Items go in the count equation and dollars in the value equation: $p+n=8$ and $2p+5n=29$. Choice C.\n\n**The Full Solution:**\nStep 1: Let $p$ be pens and $n$ be notebooks.\nStep 2: Quantity equation — 8 items total: $p+n=8$.\nStep 3: Value equation — pens cost $\\$2$ each, notebooks $\\$5$ each, totaling $\\$29$: $2p+5n=29$. That matches Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: sets the count equation to $29$ (a dollar amount) and the cost equation to $8$ (a count) — the right sides are swapped.\n* Choice B: lists the same two equations as C but in the reverse order, with the value equation first; C is the conventional quantity-first form $p+n=8$, $2p+5n=29$.\n* Choice D: assigns the $\\$5$ price to pens and $\\$2$ to notebooks; pens cost $\\$2$, so the coefficient of $p$ must be $2$.\n\n**Test Day Takeaway:** Always pair each price with its own variable — $(\\text{price per item}) \\times (\\text{number of that item})$ — and put the count in a separate quantity equation.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** \"Sum is 20\" is $x+y=20$; \"difference is 6\" is $x-y=6$. Choice A.\n\n**The Full Solution:**\nStep 1: Translate \"the sum of two numbers is 20\" directly to $x+y=20$.\nStep 2: Translate \"their difference is 6\" to $x-y=6$.\nStep 3: Check by solving: adding gives $2x=26$, so $x=13$ and $y=7$; indeed $13+7=20$ and $13-7=6$. Choice A holds.\n\n**Why the wrong answers are tempting:**\n* Choice B: assigns the sum to $6$ and the difference to $20$, reversing the two given values.\n* Choice C: uses $xy$ and $\\frac{x}{y}$ — that's product and quotient, not sum and difference, and it's nonlinear.\n* Choice D: writes $x+y=26$ (adding the two given numbers) and $xy=6$ (a product), neither of which translates the wording.\n\n**Test Day Takeaway:** Translate keywords literally — sum $\\to +$, difference $\\to -$, product $\\to \\times$, quotient $\\to \\div$.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Use $d=rt$. Downstream: $(b+c)\\cdot 2 = 30 \\Rightarrow b+c=15$. Upstream: $(b-c)\\cdot 3 = 18 \\Rightarrow b-c=6$. Choice C is the unsimplified pair, Choice A is the simplified pair — both are correct, so the answer is D.\n\n**The Full Solution:**\nStep 1: Downstream the current helps, so the effective rate is $b+c$: $2(b+c)=30$.\nStep 2: Upstream the current opposes, so the effective rate is $b-c$: $3(b-c)=18$. These two equations are exactly Choice C.\nStep 3: Divide each by its time: $b+c=15$ and $b-c=6$. Those are Choice A. Since A and C describe the same system, \"Both A and C\" — Choice D — is the answer.\n\n**Why the wrong answers are tempting:**\n* Choice A: correct, but not the only correct option, so it's incomplete.\n* Choice B: sets $b+c=30$ and $b-c=18$, confusing the distance with the rate; you must divide distance by time.\n* Choice C: also correct on its own, but again not the only correct option.\n\n**Test Day Takeaway:** For current and wind problems use $d=rt$ with effective rate $b+c$ (with) or $b-c$ (against); when \"both\" is offered, check whether two forms describe the same system.",
      skills: ['setting-up-systems', 'word-problem-to-equation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Coffee A costs \\$4/lb and Coffee B costs \\$7/lb. To make 10 lbs of a blend costing \\$5.50/lb, which system applies?",
      choices: [
        { id: "A", text: "a + b = 10, 4a + 7b = 55" },
        { id: "B", text: "a + b = 55, 4a + 7b = 10" },
        { id: "C", text: "a + b = 10, 4a + 7b = 5.50" },
        { id: "D", text: "4a + 7b = 10, a + b = 55" }
      ],
      correctAnswer: "A",
      hint: "The total weight is 10 lbs. For the cost equation, calculate the total value of the blend: 10 lbs times \\$5.50/lb.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Weight equation $a+b=10$; value equation uses total cost $10 \\times \\$5.50 = \\$55$, so $4a+7b=55$. Choice A.\n\n**The Full Solution:**\nStep 1: Let $a$ and $b$ be pounds of Coffee A and Coffee B.\nStep 2: Weight equation — the blend is 10 lbs: $a+b=10$.\nStep 3: Value equation — the blend's total cost is $10 \\times \\$5.50 = \\$55$, and A contributes $4a$, B contributes $7b$: $4a+7b=55$. That is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the right sides, setting the weight sum to $55$ and the cost to $10$ — units don't match.\n* Choice C: uses the per-pound price $\\$5.50$ instead of the total value $\\$55$; $4a+7b$ is total dollars, so it must equal $55$.\n* Choice D: same reversed swap as B, with the cost expression set to a weight and vice versa.\n\n**Test Day Takeaway:** In mixture problems the value equation uses total value, not unit price: $\\text{total value} = \\text{unit price} \\times \\text{total amount}$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $y$ is already $2x$, so $x+2x=9 \\Rightarrow 3x=9 \\Rightarrow x=3$. Choice B.\n\n**The Full Solution:**\nStep 1: Substitute $y=2x$ into $x+y=9$: $x+2x=9$.\nStep 2: Combine: $3x=9$, so $x=3$.\nStep 3: Check: $y=2(3)=6$ and $x+y=3+6=9$. Choice B holds.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): comes from a slip in combining terms or dividing $9$ by the wrong number.\n* Choice C ($6$): that's the value of $y$, not $x$ — solved for the wrong variable.\n* Choice D ($9$): just reads off the constant on the right side without substituting.\n\n**Test Day Takeaway:** When one variable is already isolated, substitute it straight into the other equation to collapse the system to a single unknown.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $x=3y-1$ into $2x+y=12$: $2(3y-1)+y=12 \\Rightarrow 7y-2=12 \\Rightarrow y=2$. Choice A.\n\n**The Full Solution:**\nStep 1: Substitute $x=3y-1$ into $2x+y=12$: $2(3y-1)+y=12$.\nStep 2: Distribute and combine: $6y-2+y=12 \\Rightarrow 7y-2=12$.\nStep 3: Solve: $7y=14$, so $y=2$. Check: $x=3(2)-1=5$ and $2(5)+2=12$. Choice A holds.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): that's the value of $x$, not $y$ — solved for the wrong variable.\n* Choice C ($7$): comes from failing to distribute the $2$ to the $-1$, getting $7y=13$ and then miscalculating.\n* Choice D ($14$): that's $7y$ before dividing by $7$ — stopped one step early.\n\n**Test Day Takeaway:** When distributing during substitution, multiply every term inside the parentheses: $2(3y-1)=6y-2$, not $6y-1$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Scan for a variable with coefficient $1$ or $-1$. In $3x + y = 10$ the $y$ has coefficient $1$, so solving the first equation for $y$ gives the cleanest substitution.\n\n**The Full Solution:**\nStep 1: List the coefficients. First equation $3x + y = 10$: $x$ has $3$, $y$ has $1$. Second equation $2x - 3y = 1$: $x$ has $2$, $y$ has $-3$.\nStep 2: Isolating a variable with coefficient $1$ avoids fractions. Only the $y$ in the first equation qualifies: $y = 10 - 3x$.\nStep 3: Every other isolation creates a fraction — for example $x = \\frac{10 - y}{3}$ or $x = \\frac{1 + 3y}{2}$ — so Choice B is the efficient pick.\n\n**Why the wrong answers are tempting:**\n* Choice A: solving $3x + y = 10$ for $x$ gives $x = \\frac{10 - y}{3}$ — a fraction from the start.\n* Choice C: solving $2x - 3y = 1$ for $x$ gives $x = \\frac{1 + 3y}{2}$ — also fractional.\n* Choice D: any equation technically works, but the question asks for the *best* first step, and the coefficient-$1$ variable is clearly fastest.\n\n**Test Day Takeaway:** For substitution, isolate the variable whose coefficient is $1$ or $-1$ first — it keeps the algebra fraction-free.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations are already $y = \\ldots$, so set the right sides equal: $x + 4 = 3x - 2 \\Rightarrow x = 3$, then $y = 3 + 4 = 7$, giving $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Set the expressions for $y$ equal: $x + 4 = 3x - 2$.\nStep 2: Solve: $4 + 2 = 3x - x \\Rightarrow 6 = 2x \\Rightarrow x = 3$.\nStep 3: Back-substitute into $y = x + 4$: $y = 3 + 4 = 7$. Check the other equation: $3(3) - 2 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $(1, 5)$ satisfies $y = x + 4$ but not $y = 3x - 2$ (that gives $1$, not $5$) — a student who checks only one equation stops here.\n* Choice C: $(2, 6)$ satisfies $y = x + 4$ but $y = 3x - 2$ gives $4 \\neq 6$.\n* Choice D: $(4, 8)$ satisfies $y = x + 4$ but $y = 3x - 2$ gives $10 \\neq 8$.\n\n**Test Day Takeaway:** When both equations are solved for the same variable, set the right sides equal — the equal-values method skips a substitution step.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Solve the second equation for $x$ (coefficient $1$): $x = 1 - 2y$. Substitute into the first: $2(1 - 2y) - y = 7 \\Rightarrow -5y = 5 \\Rightarrow y = -1$, then $x = 3$, so $x + y = 2$.\n\n**The Full Solution:**\nStep 1: From $x + 2y = 1$, isolate $x$: $x = 1 - 2y$.\nStep 2: Substitute into $2x - y = 7$: $2(1 - 2y) - y = 7$.\nStep 3: Distribute and solve: $2 - 4y - y = 7 \\Rightarrow -5y = 5 \\Rightarrow y = -1$.\nStep 4: Find $x$: $x = 1 - 2(-1) = 3$. Then $x + y = 3 + (-1) = 2$.\nStep 5: Check both equations: $2(3) - (-1) = 7$ and $3 + 2(-1) = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): a sign slip during distribution flips the result negative.\n* Choice C ($3$): that's $x$ alone — the question asks for $x + y$, so $y = -1$ must be added.\n* Choice D ($8$): adding the two right-hand sides $7 + 1$ instead of solving the system.\n\n**Test Day Takeaway:** When a question asks for an expression like $x + y$, solve for both variables and combine — never stop at a single variable.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$ terms are $+y$ and $-y$, so add the equations: $2x = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Add $x + y = 10$ and $x - y = 2$: $(x + y) + (x - y) = 12$, so $2x = 12$.\nStep 2: Divide: $x = 6$.\nStep 3: Check: $x + y = 10$ gives $y = 4$, and $x - y = 6 - 4 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): that's the value of $y$, not $x$.\n* Choice C ($8$): subtracting instead of adding gives $2y = 8$, and $8$ is mistaken for the answer.\n* Choice D ($12$): stopping at $2x = 12$ without dividing by $2$.\n\n**Test Day Takeaway:** When one variable appears with opposite signs, add the equations to cancel it in a single step.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $x$ terms match ($3x$ in both), so subtract: $(3x + 2y) - (3x - 2y) = 12 \\Rightarrow 4y = 12 \\Rightarrow y = 3$.\n\n**The Full Solution:**\nStep 1: Subtract the second equation from the first: $(3x + 2y) - (3x - 2y) = 12 - 0$.\nStep 2: Distribute the negative: $3x + 2y - 3x + 2y = 4y = 12$.\nStep 3: Divide: $y = 3$. Check: $3x + 2(3) = 12 \\Rightarrow x = 2$, and $3(2) - 2(3) = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): that's the value of $x$, not $y$.\n* Choice C ($4$): mishandling the subtracted negative so the $y$ terms cancel instead of add.\n* Choice D ($6$): adding the equations gives $6x = 12$; $6$ is a leftover from that wrong path.\n\n**Test Day Takeaway:** Equal coefficients call for subtraction. Subtracting $(3x - 2y)$ flips both signs to $-3x + 2y$ — distribute the negative to every term.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** To kill $x$, the question asks only what to multiply the *first* equation by. Scaling $2x + 3y = 8$ by $5$ makes its $x$ term $10x$, matching the $10x$ that the second equation reaches when doubled.\n\n**The Full Solution:**\nStep 1: The $x$ coefficients are $2$ and $5$; their LCM is $10$.\nStep 2: Multiply the first equation by $\\frac{10}{2} = 5$: $5(2x + 3y = 8) \\Rightarrow 10x + 15y = 40$.\nStep 3: Pair it with the doubled second equation $10x - 4y = 2$; subtracting eliminates $x$. The factor for the first equation is $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): gives $4x + 6y = 16$, whose $4x$ matches nothing in $5x - 2y = 1$.\n* Choice C ($-5$): produces $-10x - 15y = -40$, but without scaling the second equation the $x$ terms don't cancel.\n* Choice D ($5$ and the second by $2$): a valid full strategy, but the question asks only for the *first* equation's factor, which is $5$.\n\n**Test Day Takeaway:** To eliminate a variable, scale each equation by $\\frac{\\text{LCM}}{\\text{its coefficient}}$ — and answer exactly what the question asks for, not the whole procedure.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Multiply $4x + y = 11$ by $-3$ to make the $y$ terms opposites, then add to $2x + 3y = 13$: $-10x = -20 \\Rightarrow x = 2$, and $y = 11 - 8 = 3$, giving $(2, 3)$.\n\n**The Full Solution:**\nStep 1: Scale the first equation by $-3$: $-12x - 3y = -33$.\nStep 2: Add to $2x + 3y = 13$: $(-12x - 3y) + (2x + 3y) = -33 + 13 \\Rightarrow -10x = -20$.\nStep 3: Solve: $x = 2$. Substitute into $4x + y = 11$: $8 + y = 11 \\Rightarrow y = 3$.\nStep 4: Check: $2(2) + 3(3) = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: $(3, 2)$ swaps $x$ and $y$ — $4(3) + 2 = 14 \\neq 11$.\n* Choice C: $(1, 7)$ fits the first equation but $2(1) + 3(7) = 23 \\neq 13$; comes from a sign slip on the $-3$ multiplication.\n* Choice D: $(4, -5)$ fits the first equation but $2(4) + 3(-5) = -7 \\neq 13$.\n\n**Test Day Takeaway:** Scale one equation so a variable's coefficients become opposites, then add — and verify the pair in the equation you didn't use to build it.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The $5y$ terms match, so subtract: $(3x + 5y) - (2x + 5y) = 29 - 24 \\Rightarrow x = 5$. The question wants $5x$, so $5x = 25$.\n\n**The Full Solution:**\nStep 1: Subtract the first equation from the second to cancel $y$: $(3x + 5y) - (2x + 5y) = 29 - 24$.\nStep 2: That leaves $x = 5$.\nStep 3: The question asks for $5x$, not $x$: $5x = 5(5) = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): that's $x$, but the question asks for $5x$.\n* Choice B ($10$): computing $5 + 5$ (adding) instead of $5 \\times 5$ (multiplying).\n* Choice D ($53$): adding the right-hand sides $24 + 29$ instead of subtracting them.\n\n**Test Day Takeaway:** Solve for the variable, then read the target again — the SAT often asks for $5x$ or $x + y$, not $x$ itself.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** The solution to a system is the point that lies on both graphs — the intersection point(s).\n\n**The Full Solution:**\nStep 1: A solution $(x, y)$ must satisfy every equation, so it must lie on every graph at once.\nStep 2: The only point(s) on both lines are where they cross — the intersection.\nStep 3: In Desmos, click the intersection to read the coordinates. For $y = 2x + 1$ and $y = -x + 7$, that point is $(2, 5)$: $2(2) + 1 = 5$ and $-2 + 7 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $y$-intercepts belong to each line individually (where $x = 0$), not to the system.\n* Choice B: $x$-intercepts are likewise per-line (where $y = 0$), not the shared solution.\n* Choice D: \"the highest point\" has no meaning for lines, which extend without bound.\n\n**Test Day Takeaway:** A system's solution is always the intersection of its graphs — type both equations in Desmos and click where they meet.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Parallel lines never cross, so no point satisfies both equations — the system has no solution.\n\n**The Full Solution:**\nStep 1: Parallel lines share the same slope but have different $y$-intercepts: $m_1 = m_2$, $b_1 \\neq b_2$.\nStep 2: They stay a fixed distance apart and never meet, so there is no intersection point.\nStep 3: With no common point, no $(x, y)$ satisfies both equations — the system is inconsistent. Example: $y = 2x + 1$ and $y = 2x + 5$ never intersect.\n\n**Why the wrong answers are tempting:**\n* Choice A: one solution requires the lines to cross once, which parallel lines never do.\n* Choice B: two distinct lines meet at most once, so \"two solutions\" is impossible.\n* Choice D: infinitely many solutions happens only when the lines coincide, not when they are parallel and distinct.\n\n**Test Day Takeaway:** Same slope, different intercept means parallel lines and no solution — an inconsistent system.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Lines that overlap completely are the same line, so every point on it solves both equations — infinitely many solutions.\n\n**The Full Solution:**\nStep 1: If two equations graph as the same line, one is a scalar multiple of the other — for example $y = 2x + 3$ and $2y = 4x + 6$.\nStep 2: Every point on that line satisfies both equations, and a line holds infinitely many points.\nStep 3: Algebraically, elimination collapses to $0 = 0$, the signal of a dependent system. Points like $(0, 3)$, $(1, 5)$, $(2, 7)$ all work.\n\n**Why the wrong answers are tempting:**\n* Choice A: no solution describes parallel, non-meeting lines — the opposite of full overlap.\n* Choice B: one solution means a single crossing point; overlapping lines share far more.\n* Choice C: two distinct lines meet at most once, so \"two solutions\" never applies here.\n\n**Test Day Takeaway:** Coincident lines (one equation a multiple of the other) give infinitely many solutions; watch for elimination reducing to $0 = 0$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Desmos solves a system fastest when you type both equations and click their intersection point.\n\n**The Full Solution:**\nStep 1: On the digital SAT, Desmos is embedded — enter each equation in the expression list.\nStep 2: Desmos plots both automatically; clicking the intersection shows the exact coordinates, which is the solution.\nStep 3: This is faster than hand algebra and removes the chance of arithmetic slips.\n\n**Why the wrong answers are tempting:**\n* Choice A: graphing one equation shows a single line and reveals nothing about where the system is solved.\n* Choice C: guess-and-check is slow and error-prone when Desmos gives the exact point instantly.\n* Choice D: substitution works, but using *only* it ignores the faster built-in graphing tool.\n\n**Test Day Takeaway:** For systems on the digital SAT, type both equations into Desmos and click the intersection — exact answer, no algebra errors.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Both lines have slope $2$ but different $y$-intercepts ($1$ and $-3$), so they are parallel and never meet. No intersection means no solution.\n\n**The Full Solution:**\nStep 1: Read the slopes and intercepts straight off slope-intercept form. Line 1: slope $2$, intercept $1$. Line 2: slope $2$, intercept $-3$.\nStep 2: Equal slopes with unequal intercepts $\\Rightarrow$ parallel lines.\nStep 3: Set them equal to confirm: $2x+1=2x-3 \\Rightarrow 1=-3$, a contradiction. No $x$ works, so the system has no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0,1)$): that is the $y$-intercept of the first line only; in line 2, $2(0)-3=-3 \\neq 1$, so it satisfies just one equation.\n* Choice B ($(2,1)$): testing line 1 gives $2(2)+1=5 \\neq 1$, so this point lies on neither line.\n* Choice C (infinitely many): that requires the two lines to be identical. Same slope but different intercepts makes them parallel, not coincident.\n\n**Test Day Takeaway:** Same slope and different intercept $\\Rightarrow$ parallel $\\Rightarrow$ no solution. Same slope and same intercept $\\Rightarrow$ one line $\\Rightarrow$ infinitely many. Different slopes $\\Rightarrow$ one solution.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Divide the second equation by $2$: $2x+2y=10 \\Rightarrow x+y=5$. That is the first equation, so both describe the same line and every point on it is a solution.\n\n**The Full Solution:**\nStep 1: Simplify $2x+2y=10$ by dividing through by $2$ to get $x+y=5$.\nStep 2: This matches the first equation exactly, so the two equations represent the same line.\nStep 3: Every $(x,y)$ on $x+y=5$ satisfies both, so there are infinitely many solutions: $(0,5)$, $(1,4)$, $(2,3)$, and so on.\n\n**Why the wrong answers are tempting:**\n* Choice A (no solution): that needs parallel-but-distinct lines (same slope, different intercept). These equations are identical, not distinct.\n* Choice B (one solution): that needs two different lines crossing at a single point. Here both equations are the same line, so no single point is unique.\n* Choice C (two solutions): a system of two linear equations can never have exactly two solutions — the count is $0$, $1$, or infinitely many.\n\n**Test Day Takeaway:** If one equation is a constant multiple of the other, the lines are identical and the system has infinitely many solutions.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Two lines can only share infinitely many points if they are literally the same line — every point on one is a point on the other.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means infinitely many $(x,y)$ pairs satisfy both equations at once.\nStep 2: Two distinct lines meet at most once, so the only way to get infinitely many shared points is for the lines to coincide.\nStep 3: This happens when one equation is a scalar multiple of the other; solving algebraically collapses to a true identity like $0=0$.\n\n**Why the wrong answers are tempting:**\n* Choice A (parallel lines): same slope, different intercepts — they never meet, giving no solution, the opposite of infinite.\n* Choice B (perpendicular lines): slopes are negative reciprocals ($m_1 \\cdot m_2 = -1$); they cross at exactly one point.\n* Choice D (different slopes): always intersect at exactly one point, so one solution, not infinitely many.\n\n**Test Day Takeaway:** Map slopes to solution counts — different slopes give one solution, same slope with different intercepts gives none, same slope with same intercept (the same line) gives infinitely many.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide $3x-6y=9$ by $3$ to get $x-2y=3$. To match $x-2y=k$, you need $k=3$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions the two equations must be the same line.\nStep 2: Scale the first equation to the second's coefficients: $3x-6y=9 \\Rightarrow x-2y=3$.\nStep 3: Comparing with $x-2y=k$ forces $k=3$. Both equations then read $x-2y=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($k=9$): kept the constant from the unscaled first equation; you must divide by $3$ first, which gives $3$.\n* Choice C ($k=-3$): sign slip — $9 \\div 3$ is $+3$, not $-3$.\n* Choice D ($k=27$): multiplied $9 \\times 3$ instead of dividing; the first equation must be scaled down, not up.\n\n**Test Day Takeaway:** For infinitely many solutions the coefficients and constant must be proportional: $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$. Here $\\frac{3}{1}=\\frac{-6}{-2}=\\frac{9}{k}$ gives $k=3$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $0=0$ is always true, so the two equations carry the same information — a dependent system with infinitely many solutions.\n\n**The Full Solution:**\nStep 1: When elimination cancels all variable terms, you are left with a statement about constants only.\nStep 2: $0=0$ is a true identity, which means one equation is a multiple of the other and they describe the same line.\nStep 3: Because the equations are equivalent, every $(x,y)$ that satisfies one satisfies both, giving infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A (no solution): that comes from a false statement like $0=5$, not $0=0$. The two outcomes are easy to swap.\n* Choice B (exactly one solution): one solution requires isolating a variable, such as $x=3$. Reaching $0=0$ means no variable was pinned down.\n* Choice D (an error): $0=0$ is a valid, meaningful result signaling dependence, not a mistake.\n\n**Test Day Takeaway:** After elimination, $0=0$ means infinitely many solutions (dependent), while $0=c$ with $c \\neq 0$ means no solution (inconsistent).",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** In Choice B, divide $2y=4x+6$ by $2$ to get $y=2x+3$ — the same line as the first equation, so infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Simplify the second equation in Choice B: $2y=4x+6 \\Rightarrow y=2x+3$.\nStep 2: This is identical to the first equation $y=2x+3$, so both describe one line and every point on it is a solution.\nStep 3: Confirm the others fail: A has equal slopes but different intercepts (parallel, no solution); C and D have different slopes (one intersection each).\n\n**Why the wrong answers are tempting:**\n* Choice A: same slope $2$, intercepts $3$ and $-1$ — parallel lines with no solution, often confused with coincident lines.\n* Choice C: slopes $2$ and $3$ differ; setting $2x+3=3x+2$ gives $x=1$, $y=5$ — exactly one solution.\n* Choice D: slopes $2$ and $-2$ are opposite, not equal, so the lines cross at $(0,3)$ — one solution, not infinitely many.\n\n**Test Day Takeaway:** A system has infinitely many solutions only when one equation is a scalar multiple of the other; check that $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$.",
      skills: ['infinite-solutions-condition', 'system-solution-types']
    }
  ]
};
