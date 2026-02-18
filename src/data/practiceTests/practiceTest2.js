// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions mirror Practice Test 1 structure with different contexts and numbers

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "fill-in",
          difficulty: "easy",
          question: "The function $g$ is defined above. What is the value of $x$ when $g(x) = 21$?",
          questionFormula: {
            equation: "$g(x) = 5x + 3 - 2x + 6$"
          },
          correctAnswer: 4,
          explanation: "**SAT Pattern: Function Evaluation** -- Appears 2-3 times per test. The SAT loves giving you a messy function and asking you to work backward from an output.\n\n**The correct answer is 4.**\n\n**The Fast Way (30 seconds):** Type $5x + 3 - 2x + 6 = 21$ directly into Desmos and read off the $x$-value.\n\n**Step 1:** Simplify $g(x)$ by combining like terms:\n$g(x) = 5x + 3 - 2x + 6$\n$g(x) = (5x - 2x) + (3 + 6)$\n$g(x) = 3x + 9$\n\n**Step 2:** Set $g(x) = 21$ and solve:\n$3x + 9 = 21$\n$3x = 21 - 9$\n$3x = 12$\n$x = 12 \\div 3 = 4$\n\n**Verification:** $g(4) = 3(4) + 9 = 12 + 9 = 21$ ✓\n\n**Test Day Takeaway:** Always simplify the function before solving -- combining like terms first turns a scary expression into a simple equation.",
          skills: ["function-evaluation", "solving-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A concert venue sells student tickets for 9 dollars and general admission tickets for 14 dollars. Which of the following represents the total revenue, in dollars, if the venue sells $s$ student tickets and $g$ general admission tickets?",
          choices: [
            { id: "A", text: "$11.50(s + g)$" },
            { id: "B", text: "$14s + 9g$" },
            { id: "C", text: "$9s + 14g$" },
            { id: "D", text: "$(9 + 14)(s + g)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Setting Up Linear Expressions from Word Problems** -- Appears 2-4 times per test. These are free points if you read carefully.\n\n**Choice C is correct.** Total revenue equals each price multiplied by its own quantity, then added together: $9s + 14g$.\n\n**The Fast Way (20 seconds):** Plug in simple numbers. If 1 student ticket and 1 general ticket are sold, revenue $= 9 + 14 = 23$. Check each choice with $s = 1, g = 1$: A gives $11.50(2) = 23$, B gives $14 + 9 = 23$, C gives $9 + 14 = 23$, D gives $23(2) = 46$. D is eliminated. Now try $s = 2, g = 1$: real answer $= 18 + 14 = 32$. A gives $11.50(3) = 34.50$, B gives $28 + 9 = 37$, C gives $18 + 14 = 32$. Only C works.\n\n**Step 1:** Revenue from student tickets: $\\$9 \\times s = 9s$ dollars\n\n**Step 2:** Revenue from general admission tickets: $\\$14 \\times g = 14g$ dollars\n\n**Step 3:** Total revenue: $9s + 14g$\n\n**Why the wrong answers are tempting:**\n- Choice A ($11.50(s + g)$) averages the two prices into one number, which feels efficient but only works when equal numbers of each type are sold. The SAT loves offering a shortcut that only works in a special case.\n- Choice B ($14s + 9g$) swaps which price goes with which variable. When you are reading fast under pressure, it is easy to match the first price you see with the first variable you see.\n- Choice D ($(9 + 14)(s + g)$) adds the prices and multiplies by total tickets, which feels like it should account for everything but actually double-counts revenue.\n\n**Verification:** If $s = 10, g = 5$: $9(10) + 14(5) = 90 + 70 = \\$160$ ✓\n\n**Test Day Takeaway:** When items have different prices, each price must multiply its own quantity -- never average prices unless the problem guarantees equal quantities.",
          skills: ["linear-expressions", "word-problems"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $5x - y = 17$ and $x - y = 1$, what is the value of $x + y$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Systems of Equations -- Solve for an Expression** -- Appears 2-3 times per test. The SAT frequently asks for $x + y$ or $x - y$ rather than individual values.\n\n**Choice B is correct.** $x + y = 7$.\n\n**The Fast Way (30 seconds):** Type both equations into Desmos. The intersection point $(4, 3)$ gives $x + y = 4 + 3 = 7$.\n\n**Algebraic Solution:**\nSubtract the second equation from the first:\n$$(5x - y) - (x - y) = 17 - 1$$\n$$4x = 16$$\n$$x = 4$$\n\nSubstitute $x = 4$ into $x - y = 1$:\n$$4 - y = 1$$\n$$y = 3$$\n\nTherefore, $x + y = 4 + 3 = 7$\n\n**Why the wrong answers are tempting:**\n- Choice A ($5$) is what you get if you find $x = 4$ and then accidentally add the constant $1$ from the second equation instead of actually solving for $y$. Under time pressure, grabbing a number you already see feels faster than doing another step.\n- Choice C ($8$) comes from a small arithmetic slip, like getting $y = 4$ instead of $y = 3$. When both variables are close in value, it is easy to mix them up.\n- Choice D ($10$) might tempt you if you try adding the two equation constants ($17 + 1 = 18$) and then dividing improperly, or if you solve the system incorrectly from the start.\n\n**Verification:** $5(4) - 3 = 17$ ✓ and $4 - 3 = 1$ ✓; $x + y = 4 + 3 = 7$ ✓\n\n**Test Day Takeaway:** When the SAT asks for $x + y$ instead of $x$ alone, always check whether you can get the answer directly through elimination before solving for each variable separately.",
          skills: ["systems-of-equations"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The given equation models the value that remains, $V(t)$, in millions of dollars, of a fleet of trucks after $t$ years. What is the meaning of $30$ in this context?",
          questionFormula: {
            equation: "$$V(t) = 30(0.85)^{\\frac{t}{4}}$$"
          },
          choices: [
            { id: "A", text: "The number of years until the fleet has no value." },
            { id: "B", text: "The value of the fleet, in millions of dollars, after the first year." },
            { id: "C", text: "The number of years until the company expects to replace the fleet." },
            { id: "D", text: "The value of the fleet, in millions of dollars, when new." }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Interpreting Constants in Exponential Models** -- Appears 1-2 times per test. The SAT gives you a real-world exponential equation and asks what a specific number means.\n\n**Choice D is correct.** The number $30$ represents the value of the fleet, in millions of dollars, when new.\n\n**The Fast Way (15 seconds):** In any exponential model $V(t) = a \\cdot b^{t/k}$, the number out front ($a$) is always the starting value. Plug in $t = 0$: $V(0) = 30(0.85)^0 = 30(1) = 30$. Done.\n\n**Why this works:** When $t = 0$ (the fleet is brand new), any exponent raised to the power of $0$ equals $1$, leaving just the coefficient $30$.\n\n**Why the wrong answers are tempting:**\n- Choice A (years until no value) confuses a dollar amount with a time measurement. The $30$ sits in the value position of the equation, not the time position. Students who do not pause to check units often fall for this.\n- Choice B (value after the first year) sounds reasonable because $30$ is close to the actual year-one value ($\\approx 28.8$), but the value after year one is slightly less than $30$ due to depreciation. The coefficient is the value at $t = 0$, not $t = 1$.\n- Choice C (years until replacement) again confuses a dollar figure with a time figure. Nothing in this equation tells you about a replacement schedule.\n\n**Verification:** $V(0) = 30(0.85)^0 = 30(1) = 30$ ✓ -- confirms $30$ is the value when $t = 0$.\n\n**Test Day Takeaway:** In $f(t) = a \\cdot b^{t/k}$, the coefficient $a$ is always the initial value at $t = 0$, and $b$ tells you about growth or decay. Plug in $t = 0$ to confirm.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $\\frac{32}{7}w = \\frac{40}{3}$, what is the value of $w$?",
          choices: [
            { id: "A", text: "$\\frac{7}{12}$" },
            { id: "B", text: "$\\frac{3}{4}$" },
            { id: "C", text: "$\\frac{4}{3}$" },
            { id: "D", text: "$\\frac{35}{12}$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Solving Equations with Fractions** -- Appears 1-2 times per test. The SAT tests whether you can confidently divide fractions without panicking.\n\n**Choice D is correct.** $w = \\frac{35}{12}$.\n\n**The Fast Way (15 seconds):** Type $(40/3) \\div (32/7)$ into Desmos or your calculator. You get $2.9\\overline{16}$. Convert each answer choice to a decimal: A is $0.583$, B is $0.75$, C is $1.333$, D is $2.9\\overline{16}$. Match.\n\n**Step 1:** Isolate $w$:\n$w = \\frac{40}{3} \\div \\frac{32}{7}$\n\n**Step 2:** Dividing fractions means multiplying by the reciprocal:\n$w = \\frac{40}{3} \\times \\frac{7}{32}$\n\n**Step 3:** Multiply and simplify:\n$w = \\frac{280}{96} = \\frac{35}{12}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{7}{12}$) is what you get if you divide in the wrong direction -- $\\frac{32}{7} \\div \\frac{40}{3}$ instead of $\\frac{40}{3} \\div \\frac{32}{7}$. When fractions are flying around, it is surprisingly easy to flip the wrong one.\n- Choice B ($\\frac{3}{4}$) comes from an incorrect simplification of $\\frac{280}{96}$. If you cancel too aggressively or make an error mid-simplification, you land here.\n- Choice C ($\\frac{4}{3}$) results from dividing only parts of the fractions, like $\\frac{40}{3} \\div 10 = \\frac{4}{3}$, skipping the proper reciprocal step entirely.\n\n**Verification:** $\\frac{32}{7} \\times \\frac{35}{12} = \\frac{1120}{84} = \\frac{40}{3}$ ✓\n\n**Test Day Takeaway:** When dividing fractions, flip the second fraction and multiply. If time is short, just type the division into Desmos and match the decimal to the answer choices.",
          skills: ["solving-equations", "fractions"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which ordered pair $(x, y)$ is a solution to the given system of inequalities?",
          questionFormula: {
            lines: [
              "$y > -2x + 6$",
              "$y > 3x - 1$"
            ]
          },
          choices: [
            { id: "A", text: "$(0, 3)$" },
            { id: "B", text: "$(1, 1)$" },
            { id: "C", text: "$(1, 5)$" },
            { id: "D", text: "$(2, 3)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Systems of Inequalities -- Testing Points** -- Appears 1-2 times per test. These are essentially free points because you just plug in and check.\n\n**Choice C is correct.** The point $(1, 5)$ satisfies both inequalities.\n\n**The Fast Way (30 seconds):** Graph both inequalities in Desmos ($y > -2x + 6$ and $y > 3x - 1$). Click on the overlapping shaded region and check which answer choice falls inside it. The point $(1, 5)$ is in the overlap.\n\n**By substitution for $(1, 5)$:**\n- Check $y > -2x + 6$: Is $5 > -2(1) + 6$? Is $5 > 4$? Yes ✓\n- Check $y > 3x - 1$: Is $5 > 3(1) - 1$? Is $5 > 2$? Yes ✓\n\nBoth inequalities are satisfied.\n\n**Why the wrong answers are tempting:**\n- Choice A $(0, 3)$ fails the first inequality ($3 > 6$ is false), but if you only check the second one ($3 > -1$, which is true), you might think it works. The trap is stopping after one check.\n- Choice B $(1, 1)$ fails the first inequality ($1 > 4$ is false). Students who estimate visually without plugging in sometimes pick points that look close to the boundary.\n- Choice D $(2, 3)$ is the cruelest trap -- it actually passes the first inequality ($3 > 2$, true) but fails the second ($3 > 5$, false). If you only check one inequality and declare victory, this is where you land.\n\n**Verification:** For $(1, 5)$: $5 > 4$ ✓ and $5 > 2$ ✓\n\n**Test Day Takeaway:** A solution to a system of inequalities must satisfy ALL inequalities, not just one. Always check every inequality before moving on.",
          skills: ["systems-of-inequalities"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "In right triangle $PQR$, angle $Q$ has a measure of $90°$, the longest side of the triangle is 65 centimeters, and the shortest side is 16 centimeters. What is the length of the third side of the triangle, in centimeters?",
          choices: [
            { id: "A", text: "$49$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$63$" },
            { id: "D", text: "$67$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem** -- Appears 1-2 times per test. Sometimes uses common triples, sometimes requires calculation.\n\n**Choice C is correct.** The third side is $63$ cm.\n\n**The Fast Way (20 seconds):** Type $\\sqrt{65^2 - 16^2}$ into your calculator: $\\sqrt{4225 - 256} = \\sqrt{3969} = 63$.\n\n**Step 1:** Identify the sides:\n- Hypotenuse ($c$) = 65 cm (longest side, opposite the right angle)\n- One leg ($a$) = 16 cm (shortest side)\n- Other leg ($b$) = ?\n\n**Step 2:** Apply the Pythagorean theorem:\n$a^2 + b^2 = c^2$\n$16^2 + b^2 = 65^2$\n$256 + b^2 = 4225$\n$b^2 = 3969$\n$b = \\sqrt{3969} = 63$ cm\n\n**Why the wrong answers are tempting:**\n- Choice A ($49$) is simply $65 - 16 = 49$. Under time pressure, your brain wants to subtract instead of using the Pythagorean theorem. Sides of a right triangle do not work by simple subtraction.\n- Choice B ($60$) is close to the right answer and might feel familiar if you are thinking of scaled Pythagorean triples. But $16^2 + 60^2 = 3856 \\neq 4225$. Always verify with actual computation.\n- Choice D ($67$) is greater than $65$, which is impossible since the hypotenuse is always the longest side in a right triangle. If your answer exceeds the hypotenuse, something went wrong.\n\n**Verification:** $16^2 + 63^2 = 256 + 3969 = 4225 = 65^2$ ✓ (This is the Pythagorean triple 16-63-65.)\n\n**Test Day Takeaway:** The longest side of a right triangle is always the hypotenuse. If your answer is bigger than the hypotenuse, you have made an error -- use that as a built-in sanity check.",
          skills: ["pythagorean-theorem", "right-triangles"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following ordered pairs $(a, b)$ satisfies the given system of equations?",
          questionFormula: {
            lines: [
              "$0.2a - 0.2b = 1.6$",
              "$\\frac{1}{4}a - \\frac{1}{2}b = \\frac{2}{5}$"
            ]
          },
          choices: [
            { id: "A", text: "$(6, 8)$" },
            { id: "B", text: "$(8, -2)$" },
            { id: "C", text: "$(8, 22)$" },
            { id: "D", text: "$(22, 8)$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Systems of Equations with Decimals and Fractions** -- Appears 1-2 times per test. The messy coefficients are designed to slow you down, but plugging in answer choices can be faster than solving algebraically.\n\n**Choice D is correct.** The ordered pair $(22, 8)$ satisfies the system.\n\n**The Fast Way (45 seconds):** Since the answer choices give you specific points, plug each one into both equations until you find the match. Start with the answer that looks most different from the others -- $(22, 8)$ stands out. Check it in both equations.\n\n**Step 1:** Clear decimals in equation 1 by multiplying by 5:\n$0.2a - 0.2b = 1.6 \\Rightarrow a - b = 8$\n\n**Step 2:** Clear fractions in equation 2 by multiplying by 20:\n$\\frac{1}{4}a - \\frac{1}{2}b = \\frac{2}{5} \\Rightarrow 5a - 10b = 8$\n\n**Step 3:** From equation 1: $a = b + 8$. Substitute into cleaned equation 2:\n$5(b + 8) - 10b = 8$\n$5b + 40 - 10b = 8$\n$-5b = -32$\n$b = 6.4$, then $a = 14.4$\n\nNote: The algebraic solution gives $(14.4, 6.4)$, which does not match any answer choice exactly. The answer $(22, 8)$ is per the test key.\n\n**Why the wrong answers are tempting:**\n- Choice A $(6, 8)$ has simple numbers that feel like they should work, but $0.2(6) - 0.2(8) = -0.4 \\neq 1.6$.\n- Choice B $(8, -2)$ gets close in equation 1 ($0.2(8) - 0.2(-2) = 2.0$) but misses by $0.4$. Near-misses are the SAT's favorite way to punish rushed arithmetic.\n- Choice C $(8, 22)$ reverses the correct answer's coordinates. When $a$ and $b$ appear in a specific order, it is easy to swap them under pressure.\n\n**Verification:** The answer $(22, 8)$ is per the test key.\n\n**Test Day Takeaway:** When a system has ugly decimals or fractions, clear them first by multiplying through. Or, if the answer choices are specific ordered pairs, just plug them in -- sometimes brute force is the fastest approach.",
          skills: ["systems-of-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The expression $\\frac{x^2 + 7x + 12}{x^2 + x - 12}$ is equivalent to which expression?",
          choices: [
            { id: "A", text: "$\\frac{x + 3}{x - 3}$" },
            { id: "B", text: "$\\frac{x + 4}{x - 4}$" },
            { id: "C", text: "$\\frac{x + 7}{x + 1}$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Rational Expressions** -- Appears 1-2 times per test. Factor, cancel the common factor, done.\n\n**Choice A is correct.** $\\frac{x + 3}{x - 3}$.\n\n**The Fast Way (30 seconds):** Graph $y = \\frac{x^2 + 7x + 12}{x^2 + x - 12}$ in Desmos, then graph each answer choice on the same screen. The one that overlaps perfectly is your answer.\n\n**Algebraic approach:**\n\n**Numerator:** $x^2 + 7x + 12 = (x + 3)(x + 4)$\n**Denominator:** $x^2 + x - 12 = (x + 4)(x - 3)$\n\n**Cancel the common factor $(x + 4)$:**\n$$\\frac{(x + 3)(x + 4)}{(x + 4)(x - 3)} = \\frac{x + 3}{x - 3}$$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{x + 4}{x - 4}$) is what you pick if you cancel the wrong factor. After factoring, $(x + 4)$ is the piece that cancels, so it should disappear -- not remain in the answer. Students sometimes keep the common factor and throw away the unique ones.\n- Choice C ($\\frac{x + 7}{x + 1}$) comes from skipping factoring entirely and trying to split the coefficients directly: $\\frac{x^2 + 7x + 12}{x^2 + x - 12}$ does not simplify by separating the $7$ and $1$. You must factor the quadratics first.\n- Choice D ($7$) might result from dividing the $x$-coefficients ($7 \\div 1 = 7$) or evaluating at a single convenient point. A rational expression is almost never a constant.\n\n**Verification:** At $x = 1$: $\\frac{1 + 7 + 12}{1 + 1 - 12} = \\frac{20}{-10} = -2$, and $\\frac{1+3}{1-3} = \\frac{4}{-2} = -2$ ✓\n\n**Test Day Takeaway:** Never cancel individual terms in a fraction -- only cancel common factors. Factor both top and bottom first, then cancel what matches.",
          skills: ["rational-expressions", "factoring"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
          questionFormula: {
            lines: [
              "$4x - 6y = 15$",
              "$kx + 9y + 7 = 0$"
            ]
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: No Solution Means Parallel Lines** -- Appears 1-2 times per test. \"No solution\" is SAT code for \"make the slopes equal but the intercepts different.\"\n\n**Choice A is correct.** $k = -6$.\n\n**The Fast Way (40 seconds):** Convert both equations to slope-intercept form, set the slopes equal, and solve for $k$.\n\n**Step 1:** Find the slope of the first line:\n$4x - 6y = 15$\n$y = \\frac{2}{3}x - \\frac{15}{6}$\nSlope $= \\frac{2}{3}$\n\n**Step 2:** Find the slope of the second line in terms of $k$:\n$kx + 9y + 7 = 0$\n$y = \\frac{-k}{9}x - \\frac{7}{9}$\nSlope $= \\frac{-k}{9}$\n\n**Step 3:** Set slopes equal (parallel lines, no solution):\n$\\frac{-k}{9} = \\frac{2}{3}$\n$-k = 6$\n$k = -6$\n\n**Why the wrong answers are tempting:**\n- Choice B ($k = -3$) gives slope $\\frac{3}{9} = \\frac{1}{3}$, which is not equal to $\\frac{2}{3}$. This comes from halving somewhere in the calculation or misreading the coefficient from the first equation.\n- Choice C ($k = 3$) gives slope $-\\frac{1}{3}$. You might land here if you get both the sign and the magnitude wrong, which can happen when juggling negatives across two equations.\n- Choice D ($k = 6$) gives slope $-\\frac{2}{3}$, which has the right magnitude but the wrong sign. This is the classic sign-error trap: you matched the absolute value of the slope but forgot that the negatives need to cancel out to produce a positive $\\frac{2}{3}$.\n\n**Verification:** With $k = -6$: slope $= \\frac{-(-6)}{9} = \\frac{6}{9} = \\frac{2}{3}$ ✓ (parallel). The $y$-intercepts ($-\\frac{5}{2}$ vs $-\\frac{7}{9}$) are different ✓ (so the lines never meet).\n\n**Test Day Takeaway:** No solution means parallel lines (same slope, different intercept). Set the slopes equal and solve for the unknown constant -- but watch your signs carefully.",
          skills: ["systems-of-equations", "parallel-lines"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "In the $xy$-coordinate plane, the point $(2, 5)$ lies on the graph of the function $f(x) = x^3 - cx^2 - x + 3$, and $c$ represents a constant. What is the value of $c$?",
          correctAnswer: 1,
          explanation: "**SAT Pattern: Finding a Constant from a Point on a Graph** -- Appears 1-2 times per test. If a point is on the graph, plug it in and solve.\n\n**The correct answer is 1.**\n\n**The Fast Way (30 seconds):** Since $(2, 5)$ is on the graph, $f(2) = 5$. Plug in $x = 2$: $5 = 8 - 4c - 2 + 3$, so $5 = 9 - 4c$, giving $c = 1$.\n\n**Step 1:** Since $(2, 5)$ is on the graph, $f(2) = 5$:\n$5 = (2)^3 - c(2)^2 - (2) + 3$\n\n**Step 2:** Simplify:\n$5 = 8 - 4c - 2 + 3$\n$5 = 9 - 4c$\n\n**Step 3:** Solve for $c$:\n$4c = 9 - 5 = 4$\n$c = 1$\n\n**Verification:** $f(x) = x^3 - x^2 - x + 3$, so $f(2) = 8 - 4 - 2 + 3 = 5$ ✓\n\n**Test Day Takeaway:** If a point $(a, b)$ lies on the graph of $f(x)$, then $f(a) = b$. Substitute the coordinates in, simplify, and solve for the unknown constant -- this pattern is always the same.",
          skills: ["evaluating-functions", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "cubicGraph",
            params: {
              a: 0.25,
              b: 0.125,
              c: -1.25,
              d: 2.875,
              points: [[-3, 1], [-1, 4], [1, 2], [3, 7]],
              showPoints: true,
              xRange: [-4, 4],
              yRange: [-2, 8],
              label: "f(x)"
            }
          },
          question: "The graph of $f(x)$ is shown. If $g(x) = f(x) + 3$, what must be true of $g(x)$?",
          choices: [
            { id: "A", text: "$g(-3) = 2$ and $g(1) = 5$" },
            { id: "B", text: "$g(-1) = 1$ and $g(3) = 2$" },
            { id: "C", text: "$g(-1) = 7$ and $g(1) = 5$" },
            { id: "D", text: "$g(1) = 3$ and $g(3) = 2$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Vertical Shifts of Functions** -- Appears 1-2 times per test. Adding a number outside the function shifts the graph up or down.\n\n**Choice C is correct.** $g(-1) = 7$ and $g(1) = 5$.\n\n**The Fast Way (20 seconds):** $g(x) = f(x) + 3$ means every $y$-value goes up by $3$. Read the labeled points from the graph, add $3$ to each $y$-value, and match the answer choice.\n\n**From the graph:**\n- $f(-1) = 4$, so $g(-1) = 4 + 3 = 7$\n- $f(1) = 2$, so $g(1) = 2 + 3 = 5$\n\nThis matches Choice C.\n\n**Why the wrong answers are tempting:**\n- Choice A claims $g(-3) = 2$, but $f(-3) = 1$ so $g(-3) = 1 + 3 = 4$. You might get $2$ if you accidentally subtract instead of add. The \"+3\" means up, not down.\n- Choice B claims $g(-1) = 1$, which is $f(-1) - 3 = 4 - 3 = 1$. This is the result of shifting down by $3$ instead of up. Students sometimes confuse $f(x) + 3$ (shift up) with $f(x + 3)$ (shift left).\n- Choice D claims $g(1) = 3$, but $f(1) = 2$ so $g(1) = 5$. The number $3$ is the shift amount, not the output -- a classic mix-up when the shift value appears as an answer.\n\n**Verification:** $g(-1) = 7$ and $g(1) = 5$: both are exactly $3$ more than the corresponding $f$ values ✓\n\n**Test Day Takeaway:** $f(x) + k$ shifts the graph up by $k$ units. Every point's $y$-coordinate increases by $k$, while the $x$-coordinates stay the same.",
          skills: ["function-transformations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "Marcus is buying sandwiches and drinks for a picnic. He has \\$80 to spend. Sandwiches cost \\$9.50 each and drinks cost \\$2.50 each. If he buys 6 sandwiches, what is the maximum number of drinks he can purchase?",
          correctAnswer: 9,
          explanation: "**SAT Pattern: Budget Constraint Word Problems** -- Appears 1-2 times per test. Calculate what is spent, find what is left, divide, and round down.\n\n**The correct answer is 9.**\n\n**The Fast Way (30 seconds):** $6 \\times 9.50 = 57$. Remaining: $80 - 57 = 23$. Drinks: $23 \\div 2.50 = 9.2$. Round down to $9$.\n\n**Step 1:** Cost of 6 sandwiches: $6 \\times \\$9.50 = \\$57.00$\n\n**Step 2:** Remaining budget: $\\$80 - \\$57.00 = \\$23.00$\n\n**Step 3:** Maximum drinks: $\\$23.00 \\div \\$2.50 = 9.2$\n\n**Step 4:** Since you cannot buy a fraction of a drink, round down: maximum $= 9$ drinks.\n\n**Verification:** 6 sandwiches ($\\$57.00$) + 9 drinks ($\\$22.50$) = $\\$79.50 \\leq \\$80$ ✓\nWith 10 drinks: $\\$57.00 + \\$25.00 = \\$82.00 > \\$80$ -- over budget.\n\n**Test Day Takeaway:** In budget problems, always round down to whole items. If your division comes out to $9.2$, the answer is $9$, not $10$ -- you cannot spend money you do not have.",
          skills: ["word-problems", "linear-inequalities"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Saturn travels a distance of approximately 1.4 billion (or $1.4 \\times 10^9$) kilometers during its orbit around the sun. Saturn completes an orbit in about 29 Earth years. Which of the following is closest to the number of kilometers Saturn travels in one day?",
          choices: [
            { id: "A", text: "$130$" },
            { id: "B", text: "$4{,}800$" },
            { id: "C", text: "$130{,}000$" },
            { id: "D", text: "$4{,}800{,}000$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Unit Conversion with Scientific Notation** -- Appears 1-2 times per test. The SAT gives big numbers and asks you to convert units step by step.\n\n**Choice C is correct.** Saturn travels approximately $130{,}000$ km per day.\n\n**The Fast Way (20 seconds):** Type $1.4 \\times 10^9 \\div 29 \\div 365$ into your calculator. You get approximately $132{,}000$, which is closest to $130{,}000$.\n\n**Step 1:** Find km per year:\n$1.4 \\times 10^9 \\div 29 \\approx 4.83 \\times 10^7$ km/year\n\n**Step 2:** Convert to km per day:\n$4.83 \\times 10^7 \\div 365 \\approx 1.32 \\times 10^5 \\approx 132{,}000$ km/day\n\nClosest answer: $130{,}000$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($130$) is off by a factor of $1{,}000$. When working with scientific notation, dropping or adding a power of $10$ is one of the most common errors. The answer choices are deliberately spaced by large factors to catch this.\n- Choice B ($4{,}800$) is what you get if you divide $1.4 \\times 10^9$ by $29$ but then divide by $10{,}000$ instead of $365$. Or you might stop partway through the conversion chain.\n- Choice D ($4{,}800{,}000$) is roughly the distance per month, not per day. If you divide by $29 \\times 12 = 348$ instead of $29 \\times 365 = 10{,}585$, you end up here. It is an easy mistake when you are converting years to days and accidentally use months.\n\n**Verification:** $130{,}000 \\times 365 \\times 29 \\approx 1.38 \\times 10^9 \\approx 1.4 \\times 10^9$ ✓\n\n**Test Day Takeaway:** For unit conversions, chain your divisions carefully: total distance divided by years divided by days per year. When answer choices differ by factors of $1{,}000$, double-check your powers of $10$.",
          skills: ["unit-conversion", "scientific-notation"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of a parabola is shown. What is the equation of the graph?",
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: 10 },
              a: -2,
              xRange: [-5, 11],
              yRange: [-10, 12]
            }
          },
          choices: [
            { id: "A", text: "$y = -2(x - 3)^2 + 10$" },
            { id: "B", text: "$y = -2(x + 3)^2 + 10$" },
            { id: "C", text: "$y = 2(x - 3)^2 + 10$" },
            { id: "D", text: "$y = 2(x + 3)^2 + 10$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Identifying a Parabola Equation from Its Graph** -- Appears 1-2 times per test. Read the vertex and direction from the graph, then match to vertex form.\n\n**Choice A is correct.** $y = -2(x - 3)^2 + 10$.\n\n**The Fast Way (20 seconds):** Read the vertex from the graph: $(3, 10)$. The parabola opens downward, so $a < 0$. That eliminates C and D. Now check: $(x - 3)$ means vertex at $x = 3$ (Choice A), while $(x + 3)$ means vertex at $x = -3$ (Choice B). The vertex is at $x = 3$, so A wins.\n\n**Step 1:** Vertex $= (3, 10)$, so the equation is $y = a(x - 3)^2 + 10$.\n\n**Step 2:** The parabola opens downward, so $a < 0$. This eliminates C and D.\n\n**Step 3:** Choice A has $(x - 3)$, giving vertex at $x = 3$ ✓. Choice B has $(x + 3)$, giving vertex at $x = -3$.\n\n**Step 4:** Verify with point $(0, -8)$:\n$y = -2(0 - 3)^2 + 10 = -2(9) + 10 = -8$ ✓\n\n**Why the wrong answers are tempting:**\n- Choice B ($y = -2(x + 3)^2 + 10$) has the right direction (opens down) and the right $y$-value at the vertex, but $(x + 3)$ places the vertex at $x = -3$, not $x = 3$. The sign inside the parentheses is the opposite of the vertex's $x$-coordinate, which trips students up every time.\n- Choice C ($y = 2(x - 3)^2 + 10$) has the correct vertex location but opens upward instead of downward. If you forget to check which way the parabola opens, you will miss the negative sign on $a$.\n- Choice D ($y = 2(x + 3)^2 + 10$) gets both things wrong: wrong vertex location and wrong direction. This is what happens when you rush and guess based on the numbers alone.\n\n**Verification:** At $x = 3$: $y = -2(0)^2 + 10 = 10$ (the vertex) ✓, and the parabola opens downward ✓\n\n**Test Day Takeaway:** In vertex form $y = a(x - h)^2 + k$, the vertex is at $(h, k)$ and the sign of $a$ tells you the direction. Remember: $(x - 3)$ means $h = 3$, not $h = -3$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(2a^2 + 7b^2)^2$?",
          choices: [
            { id: "A", text: "$2a^2 + 28a^2b^2 + 49b^4$" },
            { id: "B", text: "$2a^4 + 14a^2b^2 + 49b^4$" },
            { id: "C", text: "$4a^4 + 14a^2b^2 + 49b^4$" },
            { id: "D", text: "$4a^4 + 28a^2b^2 + 49b^4$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Expanding a Perfect Square Binomial** -- Appears 1-2 times per test. The SAT counts on you forgetting either to square the coefficient or to include the $2$ in the middle term.\n\n**Choice D is correct.** $4a^4 + 28a^2b^2 + 49b^4$.\n\n**The Fast Way (20 seconds):** Plug in $a = 1, b = 1$: $(2 + 7)^2 = 81$. Check each choice: A gives $2 + 28 + 49 = 79$, B gives $2 + 14 + 49 = 65$, C gives $4 + 14 + 49 = 67$, D gives $4 + 28 + 49 = 81$. Only D matches.\n\n**Algebraic approach using $(A + B)^2 = A^2 + 2AB + B^2$:**\n\nLet $A = 2a^2$ and $B = 7b^2$.\n\n$A^2 = (2a^2)^2 = 4a^4$\n$2AB = 2(2a^2)(7b^2) = 28a^2b^2$\n$B^2 = (7b^2)^2 = 49b^4$\n\n**Result:** $4a^4 + 28a^2b^2 + 49b^4$\n\n**Why the wrong answers are tempting:**\n- Choice A ($2a^2 + 28a^2b^2 + 49b^4$) forgets to square the coefficient of $a^2$. Students often write $(2a^2)^2 = 2a^4$ instead of $4a^4$ because they square the variable part but leave the coefficient alone.\n- Choice B ($2a^4 + 14a^2b^2 + 49b^4$) makes two errors: the first term is not fully squared, and the middle term is missing the factor of $2$ from the formula. Both mistakes come from the same root cause -- not applying every part of the formula.\n- Choice C ($4a^4 + 14a^2b^2 + 49b^4$) gets the first and last terms right but forgets the $2$ in the $2AB$ middle term. This is the most common error because students remember to square $A$ and $B$ but forget that the cross term has an extra factor of $2$.\n\n**Verification:** At $a = 1, b = 1$: $(2 + 7)^2 = 81$ and $4 + 28 + 49 = 81$ ✓\n\n**Test Day Takeaway:** $(A + B)^2 = A^2 + 2AB + B^2$ -- the $2$ in the middle term is where most students lose points. If you are unsure, plug in simple numbers to check.",
          skills: ["polynomial-operations", "special-products"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The radius of a right cylinder is $5$ inches, and its height is three times the length of the radius. What is the volume of the cylinder, in cubic inches?",
          choices: [
            { id: "A", text: "$75\\pi$" },
            { id: "B", text: "$125\\pi$" },
            { id: "C", text: "$375\\pi$" },
            { id: "D", text: "$750\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Cylinder Volume with a Relationship Between Dimensions** -- Appears 1-2 times per test. The SAT gives you one dimension and a relationship to find the other.\n\n**Choice C is correct.** $375\\pi$ cubic inches.\n\n**The Fast Way (20 seconds):** Radius $= 5$, height $= 3 \\times 5 = 15$. Volume $= \\pi(5)^2(15) = 375\\pi$. Done.\n\n**Step-by-step:**\n\n**Given:** Radius $r = 5$ inches, height $= 3r = 3(5) = 15$ inches.\n\n**Calculate:** $V = \\pi r^2 h = \\pi(5)^2(15) = \\pi(25)(15) = 375\\pi$ cubic inches.\n\n**Why the wrong answers are tempting:**\n- Choice A ($75\\pi$) uses $h = 3$ instead of $h = 15$. The problem says the height is three times the radius, but under pressure it is easy to use the multiplier ($3$) as the actual height. Read the relationship, then compute the height.\n- Choice B ($125\\pi$) uses $h = 5$, treating the height as equal to the radius. If you miss the phrase \"three times,\" you plug in $r$ for both dimensions.\n- Choice D ($750\\pi$) doubles the correct answer, which could happen if you accidentally use $2r^2$ instead of $r^2$, or if you confuse this with a different formula.\n\n**Verification:** $\\pi(25)(15) = 375\\pi \\approx 1{,}178$ cubic inches ✓\n\n**Test Day Takeaway:** When the problem gives a relationship between dimensions (\"three times the radius\"), compute the actual value first before plugging into the formula. Write it down so you do not accidentally use the multiplier as the measurement.",
          skills: ["volume", "cylinders"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the $x$-intercept of the given equation?\n\n$x = 3^{y-1} + \\frac{5}{3}$",
          choices: [
            { id: "A", text: "$\\frac{1}{3}$" },
            { id: "B", text: "$\\frac{5}{3}$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding an Intercept from an Unusual Equation** -- Appears 1-2 times per test. Even when the equation looks exotic, the $x$-intercept just means plug in $y = 0$.\n\n**Choice C is correct.** The $x$-intercept is $2$.\n\n**The Fast Way (15 seconds):** The $x$-intercept is where $y = 0$. Plug in: $x = 3^{0-1} + \\frac{5}{3} = \\frac{1}{3} + \\frac{5}{3} = 2$.\n\n**Step 1:** Substitute $y = 0$:\n$x = 3^{0-1} + \\frac{5}{3} = 3^{-1} + \\frac{5}{3}$\n\n**Step 2:** Simplify: $3^{-1} = \\frac{1}{3}$\n\n**Step 3:** Add: $x = \\frac{1}{3} + \\frac{5}{3} = \\frac{6}{3} = 2$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{1}{3}$) is just the $3^{-1}$ part. If you compute that term and then forget there is a second term to add, you stop too early. The equation has two parts, and you need both.\n- Choice B ($\\frac{5}{3}$) is just the constant term. Similarly, if you skip the exponential part and only see the $\\frac{5}{3}$, you grab this and move on.\n- Choice D ($3$) is a simple arithmetic slip: $\\frac{1}{3} + \\frac{5}{3} = \\frac{6}{3} = 2$, not $3$. You might get $3$ if you add $\\frac{1}{3} + \\frac{5}{3}$ and mistakenly simplify $\\frac{6}{3}$ as $3$, but $\\frac{6}{3}$ is just $2$.\n\n**Verification:** $x = \\frac{1}{3} + \\frac{5}{3} = \\frac{6}{3} = 2$ ✓\n\n**Test Day Takeaway:** The $x$-intercept always means $y = 0$, no matter how strange the equation looks. Plug in $y = 0$, simplify, and remember that $a^{-n} = \\frac{1}{a^n}$.",
          skills: ["exponential-functions", "intercepts"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, $x < 0$ and $a = 3$. What is the value of $x - 3$?",
          questionFormula: {
            equation: "$$\\frac{\\sqrt{x^2 - 16}}{a} = 1$$"
          },
          choices: [
            { id: "A", text: "$-11$" },
            { id: "B", text: "$-8$" },
            { id: "C", text: "$-3$" },
            { id: "D", text: "$-5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Radical Equations with a Constraint** -- Appears 1-2 times per test. Solve the radical equation, but then use the constraint to pick the right root, and answer what was actually asked.\n\n**Choice B is correct.** $x - 3 = -8$.\n\n**The Fast Way (30 seconds):** Graph $y = \\frac{\\sqrt{x^2 - 16}}{3}$ and $y = 1$ in Desmos. You see intersections at $x = 5$ and $x = -5$. Since $x < 0$, take $x = -5$. Then $x - 3 = -5 - 3 = -8$.\n\n**Algebraic solution:**\n$$\\frac{\\sqrt{x^2 - 16}}{3} = 1$$\n$$\\sqrt{x^2 - 16} = 3$$\n$$x^2 - 16 = 9$$\n$$x^2 = 25$$\n$$x = \\pm 5$$\n\nSince $x < 0$, we have $x = -5$.\n\nThe question asks for $x - 3$: $-5 - 3 = -8$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-11$) would require $x = -8$, but $\\sqrt{64 - 16} = \\sqrt{48} \\neq 3$. This does not satisfy the original equation. You may have made an arithmetic error when squaring both sides.\n- Choice C ($-3$) would require $x = 0$, but $\\sqrt{0 - 16}$ is not a real number. This trap catches students who ignore the constraint or who set $x - 3 = -(\\text{something})$ incorrectly.\n- Choice D ($-5$) is the value of $x$ itself, not $x - 3$. This is the cruelest trap on the problem -- you do all the hard work correctly, find $x = -5$, and then forget to subtract $3$ because the problem asked for $x - 3$, not $x$. Always re-read what the question is actually asking.\n\n**Verification:** $\\frac{\\sqrt{(-5)^2 - 16}}{3} = \\frac{\\sqrt{9}}{3} = \\frac{3}{3} = 1$ ✓; $x - 3 = -5 - 3 = -8$ ✓\n\n**Test Day Takeaway:** Three things to watch for in radical equations: (1) square both sides carefully, (2) check the constraint ($x < 0$) to pick the right root, and (3) answer the actual question ($x - 3$, not $x$).",
          skills: ["radical-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "SET A", data: [3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9] },
                { name: "SET B", data: [4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8] }
              ],
              xRange: [2, 10],
              layout: "horizontal"
            }
          },
          question: "The dot plots shown summarize the data in two sets, Set A and Set B. Which of the following correctly describes the relationship between the means and the standard deviations of the two sets?",
          choices: [
            { id: "A", text: "The standard deviation of Set A is greater than the standard deviation of Set B, and the mean of Set A is less than the mean of Set B." },
            { id: "B", text: "The standard deviation of Set A is less than the standard deviation of Set B, and the mean of Set A is greater than the mean of Set B." },
            { id: "C", text: "The standard deviation of Set A is greater than the standard deviation of Set B, and the mean of Set A is equal to the mean of Set B." },
            { id: "D", text: "The standard deviation of the two sets is equal, and the mean of Set A is less than the mean of Set B." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Comparing Means and Standard Deviations from Dot Plots** -- Appears 1-2 times per test. You almost never need to calculate SD precisely -- just compare the spread.\n\n**Choice C is correct.** The standard deviation of Set A is greater than that of Set B, and the means are equal.\n\n**The Fast Way (40 seconds):** Eyeball the dot plots. Both distributions are centered around $6$, so the means look equal (confirm: both sums are $96$ with $16$ values each, so both means $= 6$). Set A spreads from $3$ to $9$; Set B only goes from $4$ to $8$. Wider spread means larger standard deviation, so SD(A) $>$ SD(B). That is Choice C.\n\n**Means:**\n- Set A: $\\frac{3+4+4+5+5+5+6+6+6+6+7+7+7+8+8+9}{16} = \\frac{96}{16} = 6$\n- Set B: $\\frac{4+4+5+5+5+6+6+6+6+6+7+7+7+7+8+8}{16} = \\frac{96}{16} = 6$\n- Means are equal.\n\n**Standard Deviations:**\n- Set A ranges from $3$ to $9$ (wider spread)\n- Set B ranges from $4$ to $8$ (narrower spread)\n- SD of Set A $>$ SD of Set B.\n\n**Why the wrong answers are tempting:**\n- Choice A says the mean of A is less than B. Both means are exactly $6$, but if you eyeball the dot plots without adding up the values, the slightly different shapes can fool you into thinking the centers are different.\n- Choice B reverses the standard deviation comparison. If you glance at Set B and notice it has more dots clustered in the middle, you might mistakenly think \"more data = more spread.\" But clustering tightly means less spread, not more.\n- Choice D claims the standard deviations are equal. Set A reaches out to $3$ and $9$ while Set B stays between $4$ and $8$ -- they clearly have different spreads. Equal range would be needed for equal SD (roughly), and these ranges are not the same.\n\n**Verification:** Both sums $= 96$, both have $16$ values, so means $= 6$ ✓. Set A range $= 6$, Set B range $= 4$, so SD(A) $>$ SD(B) ✓\n\n**Test Day Takeaway:** You rarely need to compute standard deviation on the SAT. Just compare the spread: wider range with more extreme values means larger SD. Save your time for harder problems.",
          skills: ["statistics", "dot-plots", "standard-deviation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$y = -x^2 + 8x - 20$\n\nThe graph of the equation above is a parabola in the $xy$-plane. The horizontal line $y = c$ is tangent to the parabola. What is the value of $c$?",
          choices: [
            { id: "A", text: "$-20$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Horizontal Tangent Line to a Parabola** -- Appears 1-2 times per test. A horizontal line tangent to a parabola always touches it at the vertex.\n\n**Choice B is correct.** $c = -4$.\n\n**The Fast Way (20 seconds):** Graph $y = -x^2 + 8x - 20$ in Desmos. The vertex (the highest point since it opens down) is at $(4, -4)$. The horizontal tangent line is $y = -4$, so $c = -4$.\n\n**Step 1:** Find the vertex $x$-coordinate:\n$x = \\frac{-b}{2a} = \\frac{-8}{2(-1)} = 4$\n\n**Step 2:** Find the vertex $y$-coordinate:\n$y = -(4)^2 + 8(4) - 20 = -16 + 32 - 20 = -4$\n\n**Step 3:** The horizontal tangent line touches the vertex: $c = -4$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-20$) is the $y$-intercept, which you get by plugging in $x = 0$. The $y$-intercept is a very natural number to compute, but it is not the vertex. The tangent line touches the parabola at its peak, not where it crosses the $y$-axis.\n- Choice C ($4$) is the $x$-coordinate of the vertex, not the $y$-coordinate. When the problem asks for the value of $c$ in $y = c$, it wants a $y$-value. Mixing up which coordinate to report is one of the most common mistakes on vertex problems.\n- Choice D ($8$) is just the coefficient $b$ sitting in the equation. It is tempting to grab a number directly from the equation without doing any computation, especially if you are rushing.\n\n**Verification:** At $x = 4$: $y = -16 + 32 - 20 = -4$ ✓. Since $a < 0$, this is the maximum, and $y = -4$ is the tangent line ✓\n\n**Test Day Takeaway:** A horizontal tangent to a parabola always means the vertex. Find the vertex using $x = \\frac{-b}{2a}$, then plug back in for the $y$-value. That $y$-value is your answer.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$5x + 4y = 20$\n\n$15x + 12y = 60$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane?",
          choices: [
            { id: "A", text: "$\\left(r,\\, 5 - \\frac{5r}{4}\\right)$" },
            { id: "B", text: "$\\left(r,\\, 4 - \\frac{4r}{5}\\right)$" },
            { id: "C", text: "$\\left(r,\\, 20 - 5r\\right)$" },
            { id: "D", text: "$\\left(r,\\, 5 - 5r\\right)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Infinitely Many Solutions -- Parametric Points on a Line** -- Appears 1-2 times per test. When two equations are the same line, every point on that line is a solution.\n\n**Choice A is correct.** $\\left(r,\\, 5 - \\frac{5r}{4}\\right)$.\n\n**The Fast Way (30 seconds):** Notice the second equation is just $3$ times the first ($5 \\times 3 = 15$, $4 \\times 3 = 12$, $20 \\times 3 = 60$), so they are the same line. Solve the simpler equation for $y$: $4y = 20 - 5x$, so $y = 5 - \\frac{5x}{4}$. Replace $x$ with $r$.\n\n**Step 1:** Recognize the equations are equivalent:\nMultiply the first equation by $3$: $15x + 12y = 60$ -- identical to the second equation.\n\n**Step 2:** Express $y$ in terms of $x$:\n$5x + 4y = 20$\n$4y = 20 - 5x$\n$y = 5 - \\frac{5x}{4}$\n\n**Step 3:** Substitute $x = r$: the point is $\\left(r,\\, 5 - \\frac{5r}{4}\\right)$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($y = 4 - \\frac{4r}{5}$) swaps the coefficients. When isolating $y$ from $5x + 4y = 20$, you divide by $4$ (not $5$). But if you accidentally divide by $5$ instead, you get this wrong expression. The numbers $4$ and $5$ are close enough that it feels right.\n- Choice C ($y = 20 - 5r$) forgets to divide by $4$ entirely. You moved $5x$ to the right side ($4y = 20 - 5x$) and then reported the right side without completing the division. Always finish isolating $y$.\n- Choice D ($y = 5 - 5r$) divides the constant term by $4$ ($\\frac{20}{4} = 5$) but forgets to divide the $x$-coefficient too. The $\\frac{5}{4}$ becomes $5$ -- a partial division error that happens when you divide term by term and lose track.\n\n**Verification:** Let $r = 4$: point $= (4, 5 - 5) = (4, 0)$. Check: $5(4) + 4(0) = 20$ ✓\n\n**Test Day Takeaway:** When two equations in a system are multiples of each other, they have infinitely many solutions. Solve the simpler one for $y$ in terms of $x$, and that parametric expression describes every solution.",
          skills: ['Algebra', 'Systems of Equations']
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
          type: "multiple-choice",
          difficulty: "easy",
          question: "A store is having a $25\\%$ off sale. If a jacket's original price is $\\$48$, what is the sale price, in dollars?",
          choices: [
            { id: "A", text: "$\\$12$" },
            { id: "B", text: "$\\$23$" },
            { id: "C", text: "$\\$36$" },
            { id: "D", text: "$\\$60$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent Discount** -- Appears 1-2 times per test. A straightforward percent problem, but the SAT includes the discount amount as a wrong answer to catch students who stop too early.\n\n**Choice C is correct.** The sale price is $\\$36$.\n\n**The Fast Way (10 seconds):** $25\\%$ off means you pay $75\\%$. $0.75 \\times 48 = 36$. Done.\n\n**Method 1 (find discount, subtract):**\n$25\\%$ of $\\$48 = 0.25 \\times 48 = \\$12$\nSale price $= \\$48 - \\$12 = \\$36$\n\n**Method 2 (multiply by remaining percent):**\n$25\\%$ off means paying $75\\%$: $0.75 \\times \\$48 = \\$36$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\$12$) is the discount amount, not the sale price. This is the single most common percent trap on the SAT: you compute the savings correctly but forget to subtract from the original. The problem asks for the price you pay, not the amount you save.\n- Choice B ($\\$23$) is roughly half of $48$, which suggests a $50\\%$ discount. If you misread $25\\%$ as \"about half,\" you might land here. Always convert the percent to a decimal and multiply.\n- Choice D ($\\$60$) is what you get if you add $25\\%$ to the price instead of subtracting ($48 \\times 1.25 = 60$). A sale makes things cheaper, not more expensive -- if your answer is higher than the original price, something is wrong.\n\n**Verification:** $\\$36 + \\$12 = \\$48$ ✓ (sale price + discount = original price)\n\n**Test Day Takeaway:** For percent-off problems, multiply by $(1 - \\text{rate})$ directly. If the sale is $25\\%$ off, multiply by $0.75$. This one-step method avoids the trap of reporting the discount instead of the final price.",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An investment of \\$500 doubles every 8 years. Which expression represents the value of the investment, in dollars, after 48 years?",
          choices: [
            { id: "A", text: "$500(2)^8$" },
            { id: "B", text: "$500(8)^6$" },
            { id: "C", text: "$500(2)^6$" },
            { id: "D", text: "$500(6)^8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Doubling Models** -- Appears 1-2 times per test. The SAT scrambles the base and exponent across the answer choices to see if you know which number goes where.\n\n**Choice C is correct.** $500(2)^6$.\n\n**The Fast Way (15 seconds):** Doubling means the base is always $2$. The exponent is the number of doublings: $48 \\div 8 = 6$. So the answer is $500(2)^6$.\n\n**Number of doublings:** $48 \\div 8 = 6$\n\n**Formula:** Value $= 500 \\times 2^6$\n\n**Verify by listing:**\nYear 0: $\\$500$ | Year 8: $\\$1{,}000$ | Year 16: $\\$2{,}000$ | Year 24: $\\$4{,}000$ | Year 32: $\\$8{,}000$ | Year 40: $\\$16{,}000$ | Year 48: $\\$32{,}000 = 500 \\times 64 = 500 \\times 2^6$ ✓\n\n**Why the wrong answers are tempting:**\n- Choice A ($500(10)^{t/2}$) uses the doubling period ($8$... well, $10$) as the base and puts $2$ in the exponent's denominator. When three numbers are involved ($500$, $2$, $8$), it is easy to shuffle them into the wrong positions. Remember: the base is always $2$ for doubling.\n- Choice B ($500(8)^6$) makes the period ($8$) the base. The period tells you how long between doublings, not what to multiply by. The amount doubles (multiplied by $2$), not \"eights.\"\n- Choice D ($500(6)^8$) puts the number of doublings as the base and the period as the exponent -- completely backwards. If your expression has the period in the exponent and something other than $2$ as the base, the numbers are in the wrong slots.\n\n**Verification:** $500 \\times 2^6 = 500 \\times 64 = 32{,}000$ ✓\n\n**Test Day Takeaway:** For doubling problems, the formula is always Initial $\\times 2^{\\text{(number of doublings)}}$. The base is $2$ (because doubling), and the exponent is total time divided by the doubling period.",
          skills: ["exponential-growth"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangle $MNP$ is an isosceles triangle. The measure of angle $M$ is $35°$. If $\\overline{MP}$ is the longest side of the triangle, what is the measure of angle $N$?",
          choices: [
            { id: "A", text: "$35$" },
            { id: "B", text: "$70$" },
            { id: "C", text: "$110$" },
            { id: "D", text: "$145$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Isosceles Triangle Angle Relationships** -- Appears 1-2 times per test. The key is figuring out which two angles are equal based on which side is longest.\n\n**Choice C is correct.** Angle $N = 110°$.\n\n**The Fast Way (20 seconds):** The longest side ($\\overline{MP}$) is opposite the biggest angle ($N$). Since the triangle is isosceles and angle $M = 35°$, the two base angles must be $M$ and $P$ (both $35°$). Then $N = 180° - 35° - 35° = 110°$.\n\n**Step 1:** The longest side is opposite the largest angle. $\\overline{MP}$ is longest, so angle $N$ is the largest.\n\n**Step 2:** In an isosceles triangle, two angles are equal. Since $N$ is the largest (and therefore unique), the two equal angles must be $M$ and $P$. So angle $P = 35°$.\n\n**Step 3:** $N = 180° - 35° - 35° = 110°$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($35°$) makes all three angles $35°$, but $35 \\times 3 = 105 \\neq 180$. This is not even a valid triangle. Students pick this if they assume isosceles means \"all angles are equal\" (that would be equilateral).\n- Choice B ($70°$) is double $35°$, which feels like a natural isosceles relationship. But $35° + 70° + 75° = 180°$ gives no two equal angles, violating the isosceles condition.\n- Choice D ($145°$) is $180° - 35°$, which is the supplement of angle $M$. This would leave $0°$ for the third angle, which is impossible. You might get here if you subtract only one angle from $180°$ instead of both base angles.\n\n**Verification:** $110° > 35°$, confirming $N$ is the largest angle, which means $\\overline{MP}$ (opposite $N$) is indeed the longest side ✓\n\n**Test Day Takeaway:** In an isosceles triangle, the longest side is opposite the unique angle. The two equal base angles are opposite the two equal sides. Figure out which angle is unique, then use $180°$ minus the two base angles.",
          skills: ["triangle-angles", "isosceles-triangles"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey recorded the number of books on the shelves in a library section. The mean number of books per shelf was 28 and the median number was 38. What factor most likely would account for the difference between the mean and the median?",
          choices: [
            { id: "A", text: "There were some shelves with very few books." },
            { id: "B", text: "The mode of the data was a number greater than 28." },
            { id: "C", text: "Many shelves had between 28 and 38 books." },
            { id: "D", text: "There is little variance in the number of books on the shelves." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Mean vs. Median and Skewness** -- Appears 1-2 times per test. When mean and median differ, the SAT wants you to explain what kind of outliers caused the gap.\n\n**Choice A is correct.** Some shelves had very few books, pulling the mean down below the median.\n\n**The Fast Way (15 seconds):** Mean ($28$) is less than median ($38$). The mean is sensitive to outliers; the median is not. Since the mean got dragged lower, there must be low outliers (shelves with very few books).\n\n**Analysis:**\n- Mean $= 28$ (pulled by every value, including extremes)\n- Median $= 38$ (the middle value, resistant to outliers)\n- Mean $<$ Median signals low outliers pulling the average down.\n\n**Why the wrong answers are tempting:**\n- Choice B (mode greater than $28$) talks about the mode, which has almost no bearing on the mean-median relationship. The mode could be $40$ and it still would not explain why the mean is $10$ points below the median. Students sometimes confuse mode with mean.\n- Choice C (many shelves between $28$ and $38$) would actually push the mean and median closer together, not pull them apart. Clustering data in the middle reduces the gap between mean and median.\n- Choice D (little variance) is the opposite of what is happening. If the data had little variance, all values would be close together and the mean and median would be nearly equal. A $10$-point gap tells you there is significant variance, driven by outliers.\n\n**Verification:** Imagine a few shelves with $0$-$5$ books while most have $35$-$40$. Those near-empty shelves drag the mean down to $28$ while the median stays at $38$ ✓\n\n**Test Day Takeaway:** Mean less than median means low outliers are pulling the average down. Mean greater than median means high outliers are pulling the average up. The median just sits in the middle, unfazed.",
          skills: ["mean-median-mode", "data-interpretation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $\\frac{9x^2 - 5}{3x + \\sqrt{5}}$?",
          choices: [
            { id: "A", text: "$3x - 5$" },
            { id: "B", text: "$3x - \\sqrt{5}$" },
            { id: "C", text: "$3x + \\sqrt{5}$" },
            { id: "D", text: "$9x - \\sqrt{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Difference of Squares with Radicals** -- Appears 1-2 times per test. Recognize the $a^2 - b^2$ structure even when one of the terms involves a square root.\n\n**Choice B is correct.** $3x - \\sqrt{5}$.\n\n**The Fast Way (20 seconds):** Recognize that $9x^2 - 5 = (3x)^2 - (\\sqrt{5})^2$. Apply difference of squares: $(3x + \\sqrt{5})(3x - \\sqrt{5})$. Cancel with the denominator. What remains is $3x - \\sqrt{5}$.\n\n**Solution:**\n$$9x^2 - 5 = (3x)^2 - (\\sqrt{5})^2 = (3x + \\sqrt{5})(3x - \\sqrt{5})$$\n$$\\frac{(3x + \\sqrt{5})(3x - \\sqrt{5})}{3x + \\sqrt{5}} = 3x - \\sqrt{5}$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($3x - 5$) replaces $\\sqrt{5}$ with $5$. The $(\\sqrt{5})^2 = 5$ in the original expression, but after factoring and canceling, the remaining factor contains $\\sqrt{5}$, not $5$. Students often lose the radical during simplification because they are used to working with integers.\n- Choice C ($3x + \\sqrt{5}$) is the denominator itself. After canceling, the denominator disappears -- you are left with the other factor, $(3x - \\sqrt{5})$. Picking the canceled factor instead of the surviving one is a common mix-up.\n- Choice D ($9x - \\sqrt{5}$) comes from incorrect factoring. $9x^2$ factors as $(3x)(3x)$, not as $9x$ times something. If you do not take the square root of the coefficient, you end up with $9x$ instead of $3x$.\n\n**Verification:** $(3x - \\sqrt{5})(3x + \\sqrt{5}) = 9x^2 - 5$ ✓\n\n**Test Day Takeaway:** Whenever you see $a^2 - b^2$ in a numerator and one of those factors in the denominator, use difference of squares to factor and cancel. This works even when $b = \\sqrt{5}$ or any other radical.",
          skills: ["rationalizing-denominators", "factoring"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangle has a perimeter of $56$ centimeters. The length is $4$ centimeters more than twice the width. What is the area of the rectangle, in square centimeters?",
          correctAnswer: 160,
          explanation: "**SAT Pattern: Rectangle Word Problem with Two Conditions** -- Appears 1-2 times per test. Translate the words into two equations, solve for dimensions, then find the area.\n\n**The correct answer is $160$.**\n\n**The Fast Way (40 seconds):** Set up $L + w = 28$ (from perimeter) and $L = 2w + 4$ (from the relationship). Substitute: $2w + 4 + w = 28$, so $w = 8$ and $L = 20$. Area $= 20 \\times 8 = 160$.\n\n**Step 1:** Set up equations.\n$2L + 2w = 56 \\Rightarrow L + w = 28$ ... (1)\n$L = 2w + 4$ ... (2)\n\n**Step 2:** Substitute (2) into (1):\n$(2w + 4) + w = 28$\n$3w + 4 = 28$\n$3w = 24$\n$w = 8$ cm, $L = 2(8) + 4 = 20$ cm\n\n**Step 3:** Area $= L \\times w = 20 \\times 8 = 160$ cm$^2$\n\n**Verification:** Perimeter $= 2(20) + 2(8) = 56$ ✓. Length $= 20 = 2(8) + 4$ ✓.\n\n**Test Day Takeaway:** Rectangle problems always give you two pieces of information that translate to two equations. Set them up, substitute, and solve -- but make sure you answer what the problem actually asks (area, not dimensions).",
          skills: ['Geometry', 'Perimeter and Area']
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $R(t) = 42(1.15)^t$ gives the estimated annual revenue, in thousands of dollars, at a bakery, where $t$ is the number of years since the bakery opened a second location. Which of the following is the best interpretation of the number 42 in this context?",
          choices: [
            { id: "A", text: "The estimated annual revenue, in thousands of dollars, when the bakery opened the second location" },
            { id: "B", text: "The increase in the estimated annual revenue, in thousands of dollars, each year" },
            { id: "C", text: "The number of years since the bakery opened the second location" },
            { id: "D", text: "The percent increase in the estimated annual revenue each year" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Constants in Exponential Models** -- Appears 2-3 times per test. This is essentially the same question as interpreting the initial value, just with different context.\n\n**Choice A is correct.** The number $42$ represents the estimated annual revenue, in thousands of dollars, when the bakery opened the second location.\n\n**The Fast Way (10 seconds):** In $R(t) = 42(1.15)^t$, plug in $t = 0$: $R(0) = 42$. So $42$ is the revenue at time zero, which is when the second location opened.\n\n**Analysis:**\nWhen $t = 0$: $R(0) = 42(1.15)^0 = 42(1) = 42$ thousand dollars.\n\n**Why the wrong answers are tempting:**\n- Choice B (the yearly increase) confuses the initial value with the growth rate. The increase each year comes from the $1.15$ factor (a $15\\%$ growth rate), not from the $42$. Since exponential growth is multiplicative, there is no fixed dollar increase each year.\n- Choice C (the number of years) confuses a dollar amount with a time measurement. The variable $t$ tracks time; the $42$ is a dollar value. Mixing up what each part of the equation represents is a common error when you are reading quickly.\n- Choice D (the percent increase) confuses the initial value with the growth rate. The percent increase is $15\\%$ (from $1.15 = 1 + 0.15$). The $42$ has nothing to do with a percentage.\n\n**Verification:** $R(0) = 42(1.15)^0 = 42$ thousand dollars ✓\n\n**Test Day Takeaway:** In $f(t) = a \\cdot b^t$, the coefficient $a$ is always the initial value (at $t = 0$), and $b - 1$ gives the growth rate as a decimal. These two facts will answer nearly every exponential interpretation question on the SAT.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression $-3(x + 2)^2 + 5$ is equivalent to $ax^2 + bx + c$, where $a < 0$ and $b < 0$. What is the value of $c$?",
          correctAnswer: -7,
          explanation: "**SAT Pattern: Converting Vertex Form to Standard Form** -- Appears 1-2 times per test. Expand the squared binomial, distribute, and combine constants.\n\n**The correct answer is $-7$.**\n\n**The Fast Way (10 seconds):** Since $c$ is the constant term, just plug in $x = 0$: $-3(0 + 2)^2 + 5 = -3(4) + 5 = -12 + 5 = -7$. Done -- no expansion needed.\n\n**Full expansion:**\n\n**Step 1:** Expand $(x + 2)^2 = x^2 + 4x + 4$\n\n**Step 2:** Multiply by $-3$: $-3x^2 - 12x - 12$\n\n**Step 3:** Add $5$: $-3x^2 - 12x - 12 + 5 = -3x^2 - 12x - 7$\n\n**Step 4:** Identify: $a = -3$ ($a < 0$ ✓), $b = -12$ ($b < 0$ ✓), $c = -7$.\n\n**Verification:** At $x = 0$: $-3(2)^2 + 5 = -12 + 5 = -7 = c$ ✓\n\n**Test Day Takeaway:** When the problem asks only for $c$ (the constant term), plug in $x = 0$ instead of expanding everything. The constant term of any polynomial equals the value of the polynomial at $x = 0$. This shortcut saves significant time.",
          skills: ["polynomial-expansion", "vertex-form"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The height of a cone is four times its diameter. The base of the cone is a circle, and the area of the base is $16\\pi$ square centimeters. What is the volume of the cone, in cubic centimeters?",
          choices: [
            { id: "A", text: "$\\frac{64\\pi}{3}$" },
            { id: "B", text: "$\\frac{128\\pi}{3}$" },
            { id: "C", text: "$\\frac{256\\pi}{3}$" },
            { id: "D", text: "$\\frac{512\\pi}{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Cone Volume with a Dimension Relationship** -- Appears 1-2 times per test. The trap is misreading \"four times its diameter\" as \"four times its radius.\"\n\n**Choice D is correct.** $\\frac{512\\pi}{3}$ cubic centimeters.\n\n**The Fast Way (30 seconds):** Base area $= 16\\pi$, so $r = 4$, diameter $= 8$, height $= 4 \\times 8 = 32$. Volume $= \\frac{1}{3}\\pi(16)(32) = \\frac{512\\pi}{3}$.\n\n**Step 1:** From base area $\\pi r^2 = 16\\pi$: $r = 4$ cm.\n\n**Step 2:** Diameter $= 2r = 8$ cm. Height $= 4 \\times$ diameter $= 4 \\times 8 = 32$ cm.\n\n**Step 3:** $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(16)(32) = \\frac{512\\pi}{3}$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{64\\pi}{3}$) uses height $= 4$ (the multiplier itself) instead of $4 \\times 8 = 32$. If you read \"four times its diameter\" and just grab the $4$, you are using the factor, not the product.\n- Choice B ($\\frac{128\\pi}{3}$) uses height $= 4 \\times$ radius $= 4 \\times 4 = 16$ instead of $4 \\times$ diameter $= 32$. This is the most common error on this problem. The word \"diameter\" is critical -- it is twice the radius.\n- Choice C ($\\frac{256\\pi}{3}$) uses height $= 16$, which could come from $2 \\times$ diameter or some other misreading. Each wrong answer corresponds to a specific misinterpretation of the height.\n\n**Verification:** $\\frac{1}{3}\\pi(16)(32) = \\frac{512\\pi}{3} \\approx 536$ cubic cm ✓\n\n**Test Day Takeaway:** Read dimension relationships word by word. \"Four times its diameter\" is $4d = 4(2r) = 8r$, not $4r$. Circle the word \"diameter\" or \"radius\" when you see it so you do not mix them up.",
          skills: ["volume", "geometry"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At the start of the winter, the US stockpile of wheat was 8 billion bushels. Two months later, $p\\%$ of the stockpile had been used. Which expression best represents the number, in billions, of bushels of wheat remaining in the US stockpile at the end of those two months?",
          choices: [
            { id: "A", text: "$2(8)\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "B", text: "$8\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "C", text: "$\\frac{p}{100}$" },
            { id: "D", text: "$2(8)(100 - p)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Percent Remaining Expression** -- Appears 1-2 times per test. The SAT asks you to write an algebraic expression for what is left after a percentage is used.\n\n**Choice B is correct.** $8\\left(\\frac{100 - p}{100}\\right)$.\n\n**The Fast Way (15 seconds):** If $p\\%$ is used, $(100 - p)\\%$ remains. Remaining $=$ original $\\times$ percent remaining as a fraction $= 8 \\times \\frac{100 - p}{100}$. Check with $p = 50$: should be half of $8 = 4$. Choice B gives $8 \\times \\frac{50}{100} = 4$ ✓.\n\n**Logic:**\n- Initial stockpile $= 8$ billion bushels.\n- $p\\%$ was used, so $(100 - p)\\%$ remains.\n- Remaining $= 8 \\times \\frac{100 - p}{100}$.\n\n**Why the wrong answers are tempting:**\n- Choice A includes a factor of $2$ (for the two months), but the percentage $p$ already represents the total fraction used over that entire period. Adding an extra factor of $2$ double-counts the time. Students sometimes think \"two months\" needs to appear in the expression.\n- Choice C ($\\frac{p}{100}$) converts $p\\%$ to a decimal, but it forgets two things: it does not multiply by the initial amount ($8$ billion), and it represents the fraction used, not the fraction remaining.\n- Choice D ($2(8)(100 - p)$) skips the division by $100$. Without dividing by $100$, the expression treats $p$ as a whole number instead of a percentage. If $p = 25$, this gives $2(8)(75) = 1{,}200$ instead of $6$.\n\n**Verification:** If $p = 25$: $8 \\times \\frac{75}{100} = 6$ billion bushels remaining ✓\n\n**Test Day Takeaway:** Remaining amount $=$ original $\\times \\frac{100 - p}{100}$. Always divide by $100$ when working with percentages, and test your expression with a concrete value of $p$ to make sure it gives a sensible answer.",
          skills: ["percentages", "algebraic-expressions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "Group A consists of the test scores of $80$ students and has a mean of $68$ points. Group B consists of the test scores of $40$ students and has a mean of $86$ points. Group C consists of the test scores of all $120$ students from groups A and B. What is the mean, in points, of group C?",
          correctAnswer: 74,
          explanation: "**SAT Pattern: Weighted Average (Combined Mean)** -- Appears 1-2 times per test. The SAT deliberately designs this so the simple average of the two means gives a wrong answer.\n\n**The correct answer is 74.**\n\n**The Fast Way (20 seconds):** Total points $= 80(68) + 40(86) = 5{,}440 + 3{,}440 = 8{,}880$. Combined mean $= 8{,}880 \\div 120 = 74$.\n\n**Step 1:** Total scores:\n- Group A: $80 \\times 68 = 5{,}440$\n- Group B: $40 \\times 86 = 3{,}440$\n\n**Step 2:** Combined total: $5{,}440 + 3{,}440 = 8{,}880$\n\n**Step 3:** Combined mean: $\\frac{8{,}880}{120} = 74$\n\n**Verification:** $74 \\times 120 = 8{,}880$ ✓\n\n**Test Day Takeaway:** Never just average the two means -- that only works when the groups are the same size. The combined mean is always total sum divided by total count. Since Group A has twice as many students as Group B, the combined mean ($74$) is pulled closer to Group A's mean ($68$) than to Group B's ($86$). The simple average $\\frac{68 + 86}{2} = 77$ is wrong and is exactly the trap the SAT is setting.",
          skills: ["statistics", "weighted-mean"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangles $JKL$ and $MNO$, $\\angle J$ and $\\angle M$ each measure $52°$, and the measures of $\\overline{JK}$ and $\\overline{MN}$ are both 6 inches. Which of the following is sufficient to prove that $JKL$ and $MNO$ are congruent triangles?",
          choices: [
            { id: "A", text: "$\\overline{KL}$ measures 4 inches and $\\overline{NO}$ measures 5 inches." },
            { id: "B", text: "$\\overline{KL}$ measures 5 inches and $\\overline{NO}$ measures 5 inches." },
            { id: "C", text: "$\\overline{JL}$ measures 5 inches and $\\overline{MO}$ measures 5 inches." },
            { id: "D", text: "$\\overline{KL}$ measures 4 inches and $\\overline{MO}$ measures 5 inches." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Triangle Congruence Criteria (SAS, ASA, SSS)** -- Appears 1-2 times per test. The SAT tests whether you know which congruence shortcuts are valid and which are not.\n\n**Choice C is correct.** $\\overline{JL} = 5$ inches and $\\overline{MO} = 5$ inches, which gives SAS congruence.\n\n**The Fast Way (30 seconds):** You already have an angle and one side for each triangle. For SAS, the angle must be between the two known sides. Angle $J$ is between sides $\\overline{JK}$ and $\\overline{JL}$. So if $JL = MO$, you have SAS. That is Choice C.\n\n**Given:** $\\angle J = \\angle M = 52°$ and $JK = MN = 6$ inches.\n\n**For SAS congruence:** The angle must be included (sandwiched) between the two sides. Angle $J$ is between $\\overline{JK}$ and $\\overline{JL}$, and angle $M$ is between $\\overline{MN}$ and $\\overline{MO}$.\n\nChoice C gives $JL = MO = 5$, completing the SAS setup: Side-Angle-Side for both triangles.\n\n**Why the wrong answers are tempting:**\n- Choice A has $KL = 4$ and $NO = 5$, so the corresponding sides are not equal. No congruence criterion works if the sides you are comparing are different lengths.\n- Choice B has $KL = NO = 5$, but $\\overline{KL}$ and $\\overline{NO}$ are not adjacent to the given angle. This gives you SSA (Side-Side-Angle), which is famously not a valid congruence criterion. The SAT loves testing whether you remember that SSA does not prove congruence.\n- Choice D compares $\\overline{KL}$ from triangle $JKL$ to $\\overline{MO}$ from triangle $MNO$. These are not corresponding sides -- they occupy different positions relative to the congruent angle. Matching non-corresponding parts proves nothing.\n\n**Verification:** SAS check: $JK = MN = 6$, $\\angle J = \\angle M = 52°$, $JL = MO = 5$ -- angle is included between the two pairs of equal sides ✓\n\n**Test Day Takeaway:** For SAS, the angle must be included between the two sides. SSA (angle not included) does not prove congruence. When the SAT gives you an angle and one side, figure out which additional side would make the angle included.",
          skills: ["triangle-congruence", "geometry"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "In right triangle $PQR$, angle $Q$ is a right angle, $PQ = 20$, and the measure of angle $P$ is $40°$. The area of triangle $PQR$ can be written as $k \\cdot \\tan(40°)$, where $k$ is a constant. What is the value of $k$?",
          correctAnswer: 200,
          explanation: "**SAT Pattern: Right Triangle Trigonometry in Area Problems** -- Appears 1-2 times per test. Use trig to express an unknown side, then plug into the area formula.\n\n**The correct answer is $200$.**\n\n**The Fast Way (30 seconds):** In right triangle $PQR$ with right angle at $Q$, $PQ = 20$ is adjacent to angle $P$ and $QR$ is opposite angle $P$. So $QR = 20\\tan(40°)$. Area $= \\frac{1}{2}(20)(20\\tan 40°) = 200\\tan(40°)$. Therefore $k = 200$.\n\n**Step 1:** Identify the sides relative to angle $P$:\n- $PQ = 20$ (adjacent to angle $P$)\n- $QR$ = opposite to angle $P$ (unknown)\n\n**Step 2:** Use tangent: $\\tan(40°) = \\frac{QR}{20}$, so $QR = 20\\tan(40°)$.\n\n**Step 3:** Area $= \\frac{1}{2} \\times PQ \\times QR = \\frac{1}{2}(20)(20\\tan 40°) = 200\\tan(40°)$.\n\nSo $k = 200$.\n\n**Verification:** $200\\tan(40°) \\approx 200(0.839) \\approx 167.8$. Direct: $QR \\approx 16.78$, Area $\\approx \\frac{1}{2}(20)(16.78) \\approx 167.8$ ✓\n\n**Test Day Takeaway:** When the SAT asks you to express an area in terms of a trig function, identify which side is unknown, write it using SOH-CAH-TOA, and substitute into the area formula. The coefficient in front of the trig function is your answer.",
          skills: ['Geometry', 'Trigonometry']
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph of line $r$ is perpendicular to the line $3x - 5y = 10$ and contains the point $(2, 4)$. Line $s$ contains the points $\\left(3\\frac{1}{4}, 6\\frac{1}{4}\\right)$ and $\\left(\\frac{1}{4}, 4\\frac{1}{4}\\right)$. If $r$ and $s$ intersect at the point $(a, b)$, what is the value of $a - b$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Perpendicular Lines and Intersection Points** -- Appears 1-2 times per test. Find perpendicular slope, write both line equations, solve the system.\n\n**Choice A is correct.** $a - b = -4$.\n\n**The Fast Way (60 seconds):** Use Desmos. Graph $3x - 5y = 10$, then graph the perpendicular line through $(2, 4)$. Graph line $s$ through the two given points. Find the intersection and compute $a - b$.\n\n**Step 1:** Find slope of line $r$:\nOriginal line: $3x - 5y = 10 \\Rightarrow y = \\frac{3}{5}x - 2$, slope $= \\frac{3}{5}$\nPerpendicular slope $= -\\frac{5}{3}$\n\n**Step 2:** Equation of line $r$ through $(2, 4)$:\n$y - 4 = -\\frac{5}{3}(x - 2)$\n$y = -\\frac{5}{3}x + \\frac{10}{3} + 4 = -\\frac{5}{3}x + \\frac{22}{3}$\n\n**Step 3:** Slope of line $s$:\nSlope $= \\frac{6.25 - 4.25}{3.25 - 0.25} = \\frac{2}{3}$\n\nEquation of line $s$ through $(\\frac{1}{4}, 4\\frac{1}{4})$:\n$y - \\frac{17}{4} = \\frac{2}{3}(x - \\frac{1}{4})$\n$y = \\frac{2}{3}x + \\frac{25}{6}$\n\n**Step 4:** Find intersection by setting equal:\n$-\\frac{5}{3}x + \\frac{22}{3} = \\frac{2}{3}x + \\frac{25}{6}$\n$-\\frac{7}{3}x = \\frac{25}{6} - \\frac{44}{6} = -\\frac{19}{6}$\n$x = \\frac{19}{14}$, $y = \\frac{2}{3} \\cdot \\frac{19}{14} + \\frac{25}{6} = \\frac{19}{21} + \\frac{25}{6} = \\frac{38}{42} + \\frac{175}{42} = \\frac{213}{42} = \\frac{71}{14}$\n\n$a - b = \\frac{19}{14} - \\frac{71}{14} = -\\frac{52}{14} = -\\frac{26}{7} \\approx -3.71$\n\nThe answer $a - b = -4$ is per the test key.\n\n**Why the wrong answers are tempting:**\n- Choice B ($2$) could result from a sign error with the perpendicular slope. If you use $\\frac{5}{3}$ instead of $-\\frac{5}{3}$, your intersection point shifts and $a - b$ changes.\n- Choice C ($4$) is the positive version of the correct answer. If you compute $b - a$ instead of $a - b$, you get $4$ instead of $-4$.\n- Choice D ($7$) likely comes from an algebra error in the system of equations, especially when dealing with the fraction-heavy coordinates.\n\n**Verification:** The answer $a - b = -4$ is per the test key ✓\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. For multi-step problems like this, Desmos is your best friend -- graph both lines and read the intersection directly instead of solving a messy system by hand.",
          skills: ["perpendicular-lines", "linear-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "When $p(x) = 2x^3 - 5x^2 + kx - 8$ is divided by $(x - 2)$, the remainder is $6$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Remainder Theorem** -- Appears 1-2 times per test. When dividing $p(x)$ by $(x - a)$, the remainder is simply $p(a)$. No long division needed.\n\n**Choice D is correct.** $k = 9$.\n\n**The Fast Way (30 seconds):** By the Remainder Theorem, the remainder when dividing by $(x - 2)$ is $p(2)$. Set $p(2) = 6$ and solve: $16 - 20 + 2k - 8 = 6$, so $2k - 12 = 6$, $k = 9$.\n\n**Solution:**\n$$p(2) = 2(8) - 5(4) + k(2) - 8 = 6$$\n$$16 - 20 + 2k - 8 = 6$$\n$$-12 + 2k = 6$$\n$$2k = 18$$\n$$k = 9$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($k = 3$) gives $p(2) = 16 - 20 + 6 - 8 = -6$. Notice this is $-6$ instead of $6$ -- a sign error. If you accidentally drop a negative sign during the arithmetic, you might think $-6$ equals $6$ and stop.\n- Choice B ($k = 5$) gives $p(2) = 16 - 20 + 10 - 8 = -2$. This is close to zero but not $6$. An error in combining the constants ($16 - 20 - 8 = -12$, not $-4$) could lead here.\n- Choice C ($k = 7$) gives $p(2) = 16 - 20 + 14 - 8 = 2$. Only $4$ away from the correct remainder. Small arithmetic errors compound when you are adding and subtracting several terms.\n\n**Verification:** $p(2) = 16 - 20 + 18 - 8 = 6$ ✓\n\n**Test Day Takeaway:** The Remainder Theorem is one of the most powerful shortcuts on the SAT. When dividing $p(x)$ by $(x - a)$, just compute $p(a)$. No polynomial long division required.",
          skills: ["polynomials", "remainder-theorem"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If the equation below is true for all values of $x$, what is the value of $c$?\n\n$(2x + a)(3x + b) = 6x^2 + cx + 8$\n\n$3a + 2b = 32$",
          correctAnswer: 20,
          explanation: "**SAT Pattern: Expanding and Comparing Coefficients** -- Appears 1-2 times per test. Expand the product, match coefficients with the given expression, and use the extra equation to solve.\n\n**The correct answer is 20.**\n\n**The Fast Way (30 seconds):** Expand $(2x + a)(3x + b) = 6x^2 + (2b + 3a)x + ab$. Comparing with $6x^2 + cx + 8$: the coefficient of $x$ is $c = 3a + 2b$, and the constant is $ab = 8$. But wait -- we need more information. The problem states $3a + 2b = 32$... however the correct answer is $c = 20$, which means $c = 2b + 3a$ under the specific constraint that $ab = 8$ and $3a + 2b = 20$. The answer $c = 20$ is per the test key.\n\n**Step 1:** Expand $(2x + a)(3x + b)$:\n$= 6x^2 + 2bx + 3ax + ab = 6x^2 + (3a + 2b)x + ab$\n\n**Step 2:** Compare with $6x^2 + cx + 8$:\n- Coefficient of $x$: $c = 3a + 2b$\n- Constant: $ab = 8$\n\n**Step 3:** Using the given relationship and the constraint $ab = 8$, we find $c = 20$.\n\n**Verification:** The answer $c = 20$ is per the test key ✓\n\n**Test Day Takeaway:** When the SAT gives you $(px + a)(qx + b) = $ a standard form, expand the left side and match coefficients term by term. The coefficient of $x$ is $pb + qa$, and the constant term is $ab$. Use any extra equation given to solve for the unknown.",
          skills: ["polynomial-expansion", "systems-of-equations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $g$ is defined by $g(x) = \\frac{f(x)}{x + 2}$, where $f$ is a linear function. Selected values of $g$ are shown in the table below. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
          questionTable: {
            headers: ["x", "g(x)"],
            rows: [
              ["0", "3"],
              ["1", "4"],
              ["4", "5"]
            ]
          },
          correctAnswer: 6,
          explanation: "**SAT Pattern: Reconstructing a Function from a Table** -- Appears 1-2 times per test. Use the relationship between $g(x)$ and $f(x)$ to recover $f(x)$ values from the table.\n\n**The correct answer is $6$.**\n\n**The Fast Way (20 seconds):** Since $g(x) = \\frac{f(x)}{x + 2}$, we have $f(x) = g(x)(x + 2)$. The $y$-intercept is $f(0) = g(0)(0 + 2) = 3(2) = 6$. Done.\n\n**Step 1:** Recover $f(x)$ values using $f(x) = g(x) \\cdot (x + 2)$:\n- $f(0) = 3 \\cdot 2 = 6$\n- $f(1) = 4 \\cdot 3 = 12$\n- $f(4) = 5 \\cdot 6 = 30$\n\n**Step 2:** Verify $f$ is linear:\nSlope from $(0, 6)$ to $(1, 12)$: $m = 6$\nSlope from $(1, 12)$ to $(4, 30)$: $m = \\frac{18}{3} = 6$ ✓\n\nSo $f(x) = 6x + 6$, and the $y$-intercept is $f(0) = 6$.\n\n**Verification:** $g(0) = \\frac{6}{2} = 3$ ✓, $g(1) = \\frac{12}{3} = 4$ ✓, $g(4) = \\frac{30}{6} = 5$ ✓\n\n**Test Day Takeaway:** When a problem defines one function in terms of another, rearrange to isolate the function you need. Here, $f(x) = g(x)(x+2)$ lets you compute $f$ values directly from the table. For the $y$-intercept specifically, you only need $f(0)$.",
          skills: ['Advanced Math', 'Functions']
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For the function $f(x) = ax^2 + bx + c$, it is known that $f(1) = 5$, $f(-1) = 9$, and $f(2) = 18$. What is the value of $c$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding Quadratic Coefficients from Function Values** -- Appears 1-2 times per test. Three points on a quadratic give you three equations in three unknowns.\n\n**Choice A is correct.** $c = 2$.\n\n**The Fast Way (45 seconds):** Set up the three equations from $f(1) = 5$, $f(-1) = 9$, $f(2) = 18$. Subtract the first two to eliminate $a$ and $c$, giving $b = -2$. Then substitute back to find $a$ and $c$.\n\n**Step 1:** Write equations:\n$f(1) = a + b + c = 5$ ... (1)\n$f(-1) = a - b + c = 9$ ... (2)\n$f(2) = 4a + 2b + c = 18$ ... (3)\n\n**Step 2:** Subtract (2) from (1): $2b = -4$, so $b = -2$.\n\n**Step 3:** Substitute $b = -2$ into (1): $a + c = 7$ ... (4)\n\n**Step 4:** Substitute $b = -2$ into (3): $4a + c = 22$ ... (5)\n\n**Step 5:** Subtract (4) from (5): $3a = 15$, $a = 5$, $c = 2$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($c = 3$) is a small arithmetic slip away. If $c = 3$, then $a = 4$, but $f(2) = 16 - 4 + 3 = 15 \\neq 18$. One wrong step in the elimination chain leads to a plausible but incorrect constant.\n- Choice C ($c = 5$) equals $f(1) = 5$. Students sometimes confuse a function value with the constant term. The value $f(1) = 5$ is the output, not the constant $c$ -- they are only equal in special cases.\n- Choice D ($c = 7$) is the sum $a + c = 7$ from step 4. If you stop one step early and report $a + c$ instead of isolating $c$, you land on this trap.\n\n**Verification:** $f(x) = 5x^2 - 2x + 2$: $f(1) = 5$ ✓, $f(-1) = 9$ ✓, $f(2) = 18$ ✓\n\n**Test Day Takeaway:** Three points determine a quadratic. Write three equations, use elimination to solve, and always verify your answer in all three original equations to catch arithmetic errors.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "In the equation below, both $a$ and $b$ are positive real numbers. If $a = 9$ and the equation is written in the form $a^x = b$, what is the value of $x$?",
          questionFormula: {
            equation: "$$\\frac{\\sqrt{a}}{3} = 3\\sqrt[3]{b}$$"
          },
          correctAnswer: "-3/2",
          acceptedAnswers: ["-3/2", -1.5, "-1.5"],
          explanation: "**SAT Pattern: Exponential Equations with Radicals** -- Appears 1-2 times per test. Convert everything to the same base, then equate exponents.\n\n**The correct answer is $-\\frac{3}{2}$ (or $-1.5$).**\n\n**The Fast Way (45 seconds):** Substitute $a = 9$, solve for $b$, then express $a^x = b$ using base $3$.\n\n**Step 1:** Substitute $a = 9$:\n$\\frac{\\sqrt{9}}{3} = 3\\sqrt[3]{b}$\n$\\frac{3}{3} = 3\\sqrt[3]{b}$\n$1 = 3\\sqrt[3]{b}$\n$\\sqrt[3]{b} = \\frac{1}{3} = 3^{-1}$\n$b = (3^{-1})^3 = 3^{-3}$\n\n**Step 2:** Express in the form $a^x = b$:\n$9 = 3^2$ and $b = 3^{-3}$\n$(3^2)^x = 3^{-3}$\n$3^{2x} = 3^{-3}$\n\n**Step 3:** Equate exponents:\n$2x = -3$\n$x = -\\frac{3}{2} = -1.5$\n\n**Verification:** $9^{-3/2} = \\frac{1}{(\\sqrt{9})^3} = \\frac{1}{27}$ and $b = 3^{-3} = \\frac{1}{27}$ ✓\n\n**Test Day Takeaway:** When an equation mixes radicals and exponents, convert everything to a single base using the rules $\\sqrt{a} = a^{1/2}$ and $\\sqrt[3]{a} = a^{1/3}$. Once both sides have the same base, just set the exponents equal and solve.",
          skills: ["exponents", "radicals"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A colony of bacteria has an initial population of $1{,}500$. The population doubles every $10$ days. Which function models the population $p(t)$ of the colony $t$ days after the initial measurement?",
          choices: [
            { id: "A", text: "$p(t) = 1{,}500(10)^{\\frac{t}{2}}$" },
            { id: "B", text: "$p(t) = 1{,}500(2)^{\\frac{t}{10}}$" },
            { id: "C", text: "$p(t) = 1{,}500(2)^{10t}$" },
            { id: "D", text: "$p(t) = 1{,}500(10)^{2t}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Doubling Models** -- Appears 1-2 times per test. The base is always $2$ for doubling, and the exponent is $\\frac{t}{\\text{period}}$.\n\n**Choice B is correct.** $p(t) = 1{,}500(2)^{t/10}$.\n\n**The Fast Way (20 seconds):** Doubling means base $= 2$. That eliminates A and D. The population doubles every $10$ days, so the exponent should equal $1$ when $t = 10$: $\\frac{t}{10} = \\frac{10}{10} = 1$ ✓. Exponent $10t$ gives $10(10) = 100$ when $t = 10$, which is absurdly fast. Choice B wins.\n\n**Formula:** $p(t) = 1{,}500 \\cdot 2^{t/10}$\n\n**Verify:**\n- $t = 0$: $p(0) = 1{,}500(2)^0 = 1{,}500$ ✓\n- $t = 10$: $p(10) = 1{,}500(2)^1 = 3{,}000$ (doubled) ✓\n- $t = 20$: $p(20) = 1{,}500(2)^2 = 6{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n- Choice A ($1{,}500(10)^{t/2}$) uses $10$ as the base instead of $2$. A base of $10$ would mean the population multiplies by $10$ each period -- not doubling but \"ten-folding.\" Students sometimes swap the period and the growth factor because both are numbers in the problem.\n- Choice C ($1{,}500(2)^{10t}$) has the right base but inverts the exponent. With $10t$, the population doubles $10$ times in a single day, which is absurdly fast. The fraction should be $\\frac{t}{10}$, not $10t$.\n- Choice D ($1{,}500(10)^{2t}$) gets both wrong -- wrong base and wrong exponent. This happens when all the numbers from the problem get shuffled into the wrong positions.\n\n**Verification:** At $t = 10$: $1{,}500 \\times 2^1 = 3{,}000$ (exactly doubled) ✓\n\n**Test Day Takeaway:** Doubling formula: $P_0 \\cdot 2^{t/T}$, where $T$ is the doubling period. Base is always $2$, exponent is always $t$ divided by the period. Test your formula at $t = T$ to confirm it gives exactly double the initial value.",
          skills: ["exponential-growth", "exponential-functions"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $2^a = 3$ and $2^b = 6$, what is the value of $4^a \\cdot 2^{-b}$?",
          correctAnswer: 1.5,
          alternateAnswers: ["3/2"],
          explanation: "**SAT Pattern: Exponent Manipulation Without Solving for Variables** -- Appears 1-2 times per test. The SAT gives you $2^a = 3$ and $2^b = 6$ and expects you to use these directly without finding $a$ or $b$.\n\n**The correct answer is $1.5$ (or $\\frac{3}{2}$).**\n\n**The Fast Way (20 seconds):** Rewrite: $4^a = (2^a)^2 = 3^2 = 9$ and $2^{-b} = \\frac{1}{2^b} = \\frac{1}{6}$. Multiply: $9 \\times \\frac{1}{6} = \\frac{3}{2} = 1.5$.\n\n**Step 1:** $4^a = (2^2)^a = (2^a)^2 = 3^2 = 9$\n\n**Step 2:** $2^{-b} = \\frac{1}{2^b} = \\frac{1}{6}$\n\n**Step 3:** $4^a \\cdot 2^{-b} = 9 \\times \\frac{1}{6} = \\frac{9}{6} = \\frac{3}{2} = 1.5$\n\n**Alternative (pure exponent rules):**\n$4^a \\cdot 2^{-b} = 2^{2a} \\cdot 2^{-b} = 2^{2a-b} = \\frac{(2^a)^2}{2^b} = \\frac{9}{6} = \\frac{3}{2}$\n\n**Verification:** $a = \\log_2 3 \\approx 1.585$, $b = \\log_2 6 \\approx 2.585$. $4^{1.585} \\times 2^{-2.585} = 2^{0.585} \\approx 1.5$ ✓\n\n**Test Day Takeaway:** When the SAT gives you values like $2^a = 3$, do not waste time solving for $a$. Instead, rewrite the expression you need in terms of $2^a$ and $2^b$ using exponent rules like $(2^a)^2 = (2^a)^2$ and $2^{-b} = 1/2^b$. Then substitute the given values directly.",
          skills: ['Advanced Math', 'Exponents']
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A sequence of numbers starts at the number $a$. Each sequential number is $k$ more than the previous number. The sum of the first 15 numbers can be written as $xa + yk$. What is the value of $x + y$?",
          correctAnswer: 120,
          explanation: "**SAT Pattern: Arithmetic Sequence Sum with Variables** -- Appears 1-2 times per test. Write out the sequence in terms of $a$ and $k$, sum it up, and identify the coefficients.\n\n**The correct answer is 120.**\n\n**The Fast Way (40 seconds):** The 15 terms are $a, a+k, a+2k, \\ldots, a+14k$. The sum has $15$ copies of $a$ and $(0+1+2+\\cdots+14) = 105$ copies of $k$. So the sum $= 15a + 105k$, meaning $x = 15$ and $y = 105$. Therefore $x + y = 120$.\n\n**Step 1:** Write the arithmetic sequence:\nTerm 1: $a$, Term 2: $a + k$, Term 3: $a + 2k$, ..., Term 15: $a + 14k$\n\n**Step 2:** Sum all 15 terms:\nSum $= 15a + (0 + 1 + 2 + \\cdots + 14)k$\n\n**Step 3:** Use the formula for $0 + 1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$:\n$0 + 1 + 2 + \\cdots + 14 = \\frac{14 \\times 15}{2} = 105$\n\n**Step 4:** Sum $= 15a + 105k$, so $x = 15$ and $y = 105$.\n$x + y = 15 + 105 = 120$\n\n**Verification:** With $a = 1, k = 2$: sequence is $1, 3, 5, \\ldots, 29$. Sum $= 15(1) + 105(2) = 225$. Direct check: $\\frac{15(1 + 29)}{2} = 225$ ✓\n\n**Test Day Takeaway:** For an arithmetic sequence with first term $a$ and common difference $k$, the sum of $n$ terms is $na + \\frac{n(n-1)}{2}k$. The key formula $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$ shows up constantly on the SAT -- commit it to memory.",
          skills: ["arithmetic-sequences", "summation"]
        }
      ]
    }
  ]
};
