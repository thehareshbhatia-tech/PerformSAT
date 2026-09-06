// Practice questions for Functions module
// Questions are organized by SECTION (question type)

export const functionsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "A machine's total setup time, in minutes, for $x$ parts is given by $g(x) = 8x + 13$. What is the value of $g(6)$?",
      choices: [
        // distractor: subtracts the constant instead of adding it
        { id: "A", text: "$35$" },
        { id: "B", text: "$61$" },
        // distractor: multiplies 13 by 8 and adds the input
        { id: "C", text: "$110$" },
        // distractor: adds before multiplying
        { id: "D", text: "$152$" }
      ],
      correctAnswer: "B",
      hint: "Replace every $x$ in the rule with $6$, then multiply before you add.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $6$ for $x$: $8(6) + 13 = 48 + 13 = 61$.\n\n**The Full Solution:**\nStep 1: The notation $g(6)$ asks for the output of $g$ when the input is $6$, so replace $x$ with $6$ in $g(x) = 8x + 13$.\nStep 2: Multiply first: $8(6) = 48$.\nStep 3: Add the constant: $48 + 13 = 61$. Check by reversing the steps: $61 - 13 = 48$, and $48 \\div 8 = 6$, the input. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): subtracts the constant instead of adding it, giving $48 - 13$.\n* Choice C ($110$): multiplies the constant by $8$ and then adds the input, giving $8(13) + 6$.\n* Choice D ($152$): adds inside the parentheses first, giving $8(6 + 13)$, which ignores order of operations.\n\n**Test Day Takeaway:** $g(6)$ means substitute $6$ for the variable everywhere it appears, then follow order of operations — multiplication before addition.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $h$ is defined by $h(x) = x^2 - 3x + 2$ for all real numbers $x$. What is the value of $h(-4)$?",
      choices: [
        // distractor: treats (-4)^2 as -16
        { id: "A", text: "$-2$" },
        // distractor: reads -3(-4) as -12
        { id: "B", text: "$6$" },
        // distractor: drops the constant term
        { id: "C", text: "$28$" },
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "D",
      hint: "Wrap the negative input in parentheses before squaring, and watch the sign of the middle term.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** $h(-4) = (-4)^2 - 3(-4) + 2 = 16 + 12 + 2 = 30$.\n\n**The Full Solution:**\nStep 1: Substitute $-4$ for $x$, keeping the parentheses: $h(-4) = (-4)^2 - 3(-4) + 2$.\nStep 2: Square first. A negative squared is positive, so $(-4)^2 = 16$.\nStep 3: Handle the middle term: $-3(-4) = +12$. Then $16 + 12 + 2 = 30$. Check with a second route: $h(x) = (x - 1)(x - 2)$, and $(-5)(-6) = 30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): treats $(-4)^2$ as $-16$, giving $-16 + 12 + 2$.\n* Choice B ($6$): reads $-3(-4)$ as $-12$, giving $16 - 12 + 2$.\n* Choice C ($28$): stops at $16 + 12$ and never adds the constant term $2$.\n\n**Test Day Takeaway:** Two sign traps live in the same substitution: $(-4)^2$ is positive, and subtracting a negative adds.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x) = 4x - 12$. If $f(c) = 44$ for some constant $c$, what is the value of $c$?",
      choices: [
        // distractor: subtracts 12 instead of adding it back
        { id: "A", text: "$8$" },
        // distractor: ignores the constant term
        { id: "B", text: "$11$" },
        { id: "C", text: "$14$" },
        // distractor: reports 4c instead of c
        { id: "D", text: "$56$" }
      ],
      correctAnswer: "C",
      hint: "Set the rule equal to $44$; undo the subtraction before you undo the multiplication.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $4c - 12 = 44$ gives $4c = 56$, so $c = 14$.\n\n**The Full Solution:**\nStep 1: $f(c)$ means substitute $c$ for $x$, so $f(c) = 4c - 12$.\nStep 2: Set that equal to the given output: $4c - 12 = 44$. Add $12$ to both sides: $4c = 56$.\nStep 3: Divide both sides by $4$: $c = 14$. Check: $f(14) = 4(14) - 12 = 56 - 12 = 44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): subtracts the constant instead of adding it back, solving $4c = 44 - 12 = 32$.\n* Choice B ($11$): divides the output by the coefficient and ignores the $-12$ entirely.\n* Choice D ($56$): stops at $4c = 56$ and reports $4c$ rather than $c$.\n\n**Test Day Takeaway:** Working backward from an output means undoing the operations in reverse order: addition or subtraction first, then multiplication or division.",
      skills: ["function-evaluation", "function-notation", "finding-function-from-conditions"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Each of the following sets lists the ordered pairs $(x, y)$ of a relation. For which set is $y$ a function of $x$?",
      choices: [
        // distractor: input 3 is paired with two outputs
        { id: "A", text: "$\\{(3, 1), (3, 4), (8, 6)\\}$" },
        { id: "B", text: "$\\{(0, 7), (2, 7), (5, 7)\\}$" },
        // distractor: the repeated input 4 is not adjacent
        { id: "C", text: "$\\{(4, 2), (9, 5), (4, 5)\\}$" },
        // distractor: one input with three outputs
        { id: "D", text: "$\\{(6, 0), (6, 1), (6, 2)\\}$" }
      ],
      correctAnswer: "B",
      hint: "A set fails only when the same first coordinate is paired with two different second coordinates.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Scan the first coordinates. Only in choice B are they all different: $0$, $2$, and $5$.\n\n**The Full Solution:**\nStep 1: $y$ is a function of $x$ when every input $x$ is paired with exactly one output $y$.\nStep 2: In choice B the inputs are $0$, $2$, and $5$, all distinct, so no input receives two outputs.\nStep 3: The repeated output $7$ is not a problem — a function may send several inputs to the same output. Check the vertical-line idea: the three points sit at three different $x$-values, so no vertical line meets the set twice. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the input $3$ appears with the outputs $1$ and $4$.\n* Choice C: the input $4$ appears with the outputs $2$ and $5$; the two pairs are not next to each other, so the repeat is easy to miss.\n* Choice D: every pair has the input $6$, so one input is matched with three different outputs.\n\n**Test Day Takeaway:** Check the inputs, not the outputs. Repeated outputs are allowed; a repeated input with different outputs is what breaks a function.",
      skills: ["function-notation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x) = \\dfrac{x + 5}{x^2 - 7x + 10}$, where $x$ is a real number. Which of the following is the domain of $f$?",
      choices: [
        // distractor: excludes the numerator's zero instead
        { id: "A", text: "All real numbers $x$ such that $x \\neq -5$" },
        // distractor: sign error when factoring the denominator
        { id: "B", text: "All real numbers $x$ such that $x \\neq -5$ and $x \\neq -2$" },
        { id: "C", text: "All real numbers $x$ such that $x \\neq 2$ and $x \\neq 5$" },
        // distractor: also removes the numerator's zero
        { id: "D", text: "All real numbers $x$ such that $x \\neq -5$, $x \\neq 2$, and $x \\neq 5$" }
      ],
      correctAnswer: "C",
      hint: "The rule only breaks where the denominator is zero, so factor the bottom first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $x^2 - 7x + 10 = (x - 2)(x - 5)$, so the only excluded inputs are $2$ and $5$.\n\n**The Full Solution:**\nStep 1: A quotient is undefined exactly where its denominator equals $0$, so solve $x^2 - 7x + 10 = 0$.\nStep 2: Factor: two numbers with product $10$ and sum $-7$ are $-2$ and $-5$, so $x^2 - 7x + 10 = (x - 2)(x - 5)$ and the zeros are $x = 2$ and $x = 5$.\nStep 3: Every other real number gives a defined output, so the domain is all real numbers except $2$ and $5$. Check $x = -5$: $f(-5) = \\frac{0}{25 + 35 + 10} = 0$, a perfectly good output, so $-5$ stays in the domain. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: excludes $-5$, the value that makes the NUMERATOR zero; a zero numerator gives the output $0$, not an undefined value.\n* Choice B: factors the denominator as $(x + 2)(x + 5)$, which expands to $x^2 + 7x + 10$ — the wrong middle sign.\n* Choice D: removes $2$ and $5$ correctly but also removes $-5$, treating a zero numerator as undefined.\n\n**Test Day Takeaway:** For a rational function, the domain question is only about the denominator. A zero on top is an output of $0$; a zero on the bottom is an excluded input.",
      skills: ["domain-restrictions", "function-notation"]
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The functions $p$ and $q$ are defined by $p(x) = x^2 + 1$ and $q(x) = 2x - 3$. What is the value of $p(q(4))$?",
      choices: [
        // distractor: stops at the inner value q(4)
        { id: "A", text: "$5$" },
        // distractor: adds p(4) and q(4)
        { id: "B", text: "$22$" },
        { id: "C", text: "$26$" },
        // distractor: composes in the wrong order
        { id: "D", text: "$31$" }
      ],
      correctAnswer: "C",
      hint: "Work from the inside out: evaluate the inner function first, then feed that number into the outer one.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $q(4) = 5$, and $p(5) = 25 + 1 = 26$.\n\n**The Full Solution:**\nStep 1: In $p(q(4))$ the inner function is evaluated first: $q(4) = 2(4) - 3 = 8 - 3 = 5$.\nStep 2: That output becomes the input of $p$: $p(5) = 5^2 + 1$.\nStep 3: $p(5) = 25 + 1 = 26$. Check with the composite rule: $p(q(x)) = (2x - 3)^2 + 1$, and at $x = 4$ that is $5^2 + 1 = 26$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stops after the inner step and reports $q(4)$.\n* Choice B ($22$): adds the two separate outputs, $p(4) + q(4) = 17 + 5$, instead of composing them.\n* Choice D ($31$): composes in the wrong order, computing $q(p(4)) = q(17) = 31$.\n\n**Test Day Takeaway:** Composition is not commutative. Read $p(q(4))$ from the inside out, and the parentheses tell you which function acts first.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $k$ is defined by $k(x) = 6x + 5$, where $x$ is a real number. Which of the following is equivalent to $k(x - 2)$?",
      choices: [
        // distractor: drops the constant +5
        { id: "A", text: "$6x - 12$" },
        { id: "B", text: "$6x - 7$" },
        // distractor: subtracts 2 from the constant instead of substituting
        { id: "C", text: "$6x + 3$" },
        // distractor: flips the sign inside the input
        { id: "D", text: "$6x + 17$" }
      ],
      correctAnswer: "B",
      hint: "Substitute the whole quantity $x - 2$ wherever $x$ appears, then distribute before combining constants.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $k(x - 2) = 6(x - 2) + 5 = 6x - 12 + 5 = 6x - 7$.\n\n**The Full Solution:**\nStep 1: The input of $k$ is now the expression $x - 2$, so write $k(x - 2) = 6(x - 2) + 5$.\nStep 2: Distribute the $6$ across both terms: $6(x - 2) = 6x - 12$.\nStep 3: Combine the constants: $6x - 12 + 5 = 6x - 7$. Check at $x = 3$: $k(1) = 6(1) + 5 = 11$, and $6(3) - 7 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6x - 12$): distributes correctly but drops the $+5$ from the original rule.\n* Choice C ($6x + 3$): subtracts $2$ from the constant term instead of substituting, giving $5 - 2 = 3$.\n* Choice D ($6x + 17$): substitutes $x + 2$, flipping the sign inside the input, and gets $6x + 12 + 5$.\n\n**Test Day Takeaway:** When the input is an expression, put it in parentheses and distribute; only the variable is replaced, never the constant term.",
      skills: ["function-evaluation", "function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table gives the values of the linear functions $f$ and $g$ at three values of $x$. Which expression is equivalent to $f(x) + g(x)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["1", "7", "8"], ["2", "10", "7"], ["3", "13", "6"]] } },
      choices: [
        // distractor: keeps only f's intercept
        { id: "A", text: "$2x + 4$" },
        { id: "B", text: "$2x + 13$" },
        // distractor: uses the value at x = 1 as the intercept
        { id: "C", text: "$2x + 15$" },
        // distractor: adds slope magnitudes, ignoring g's sign
        { id: "D", text: "$4x + 13$" }
      ],
      correctAnswer: "B",
      hint: "Add the two outputs at each $x$ first, then find the line that fits those three sums.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The sums are $15$, $17$, $19$ — a rise of $2$ per step — so the sum is $2x + 13$.\n\n**The Full Solution:**\nStep 1: Add the two table values at each input: $7 + 8 = 15$, $10 + 7 = 17$, and $13 + 6 = 19$.\nStep 2: The inputs go up by $1$ and the sums go up by $2$, so the sum function is linear with slope $2$.\nStep 3: Back up one step from $x = 1$: at $x = 0$ the sum would be $15 - 2 = 13$, so $f(x) + g(x) = 2x + 13$. Check at $x = 3$: $2(3) + 13 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x + 4$): finds the slope of the sum correctly but keeps only $f$'s $y$-intercept of $4$.\n* Choice C ($2x + 15$): uses the sum at $x = 1$ as the $y$-intercept without backing up to $x = 0$.\n* Choice D ($4x + 13$): adds the sizes of the two slopes, $3$ and $1$, ignoring that $g$ decreases.\n\n**Test Day Takeaway:** To add two linear functions, add their outputs column by column; the slopes add with their signs and so do the intercepts.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x) = x^2 + 6x$, where $x$ is a real number. What is the value of $f(5) - f(3)$?",
      choices: [
        // distractor: evaluates f(5-3)
        { id: "A", text: "$16$" },
        { id: "B", text: "$28$" },
        // distractor: drops the sign on the last term of f(3)
        { id: "C", text: "$64$" },
        // distractor: adds the outputs instead of subtracting
        { id: "D", text: "$82$" }
      ],
      correctAnswer: "B",
      hint: "Evaluate the function separately at each input, then subtract the two outputs.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(5) = 55$ and $f(3) = 27$, so the difference is $55 - 27 = 28$.\n\n**The Full Solution:**\nStep 1: $f(5) = 5^2 + 6(5) = 25 + 30 = 55$.\nStep 2: $f(3) = 3^2 + 6(3) = 9 + 18 = 27$.\nStep 3: Subtract the outputs: $55 - 27 = 28$. Check by factoring the difference: $f(5) - f(3) = (25 - 9) + 6(5 - 3) = 16 + 12 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): subtracts the inputs first and evaluates $f(5 - 3) = f(2) = 4 + 12$.\n* Choice C ($64$): distributes the subtraction over only the first term of $f(3)$, computing $25 + 30 - 9 + 18$.\n* Choice D ($82$): adds the two outputs instead of subtracting them.\n\n**Test Day Takeaway:** $f(5) - f(3)$ is never $f(5 - 3)$ for a nonlinear function; evaluate first, subtract second, and bracket the whole second output.",
      skills: ["function-evaluation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x) = ax + 9$, where $a$ is a constant. If the graph of $y = f(x)$ passes through the point $(-3, 24)$, what is the value of $f(5)$?",
      choices: [
        // distractor: forgets the constant 9
        { id: "A", text: "$-25$" },
        { id: "B", text: "$-16$" },
        // distractor: reports a instead of f(5)
        { id: "C", text: "$-5$" },
        // distractor: sign error solving for a
        { id: "D", text: "$34$" }
      ],
      correctAnswer: "B",
      hint: "Use the given output to pin down $a$ first, then evaluate at the new input.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $-3a + 9 = 24$ gives $a = -5$, so $f(5) = -25 + 9 = -16$.\n\n**The Full Solution:**\nStep 1: The point $(-3, 24)$ on the graph says $f(-3) = 24$, so $a(-3) + 9 = 24$, or $-3a + 9 = 24$.\nStep 2: Subtract $9$: $-3a = 15$, so $a = -5$ and $f(x) = -5x + 9$.\nStep 3: Evaluate at the requested input: $f(5) = -5(5) + 9 = -25 + 9 = -16$. Check the first condition again: $-5(-3) + 9 = 15 + 9 = 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): finds $a = -5$ and computes $-5(5)$ but forgets to add the constant $9$.\n* Choice C ($-5$): reports the constant $a$ rather than the requested output $f(5)$.\n* Choice D ($34$): solves $-3a = 15$ as $a = 5$, dropping the negative sign, and gets $5(5) + 9$.\n\n**Test Day Takeaway:** When a rule contains an unknown constant, one input-output pair determines it; write the full rule before evaluating anywhere else.",
      skills: ["function-evaluation", "finding-function-from-conditions"]
    }
  ],

  // Section: Complex Function Problems
  "Complex Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows the value of the function $f$ at four inputs. What is the value of $f(f(3))$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "3"], ["2", "5"], ["3", "4"], ["4", "1"]] } },
      choices: [
        { id: "A", text: "$1$" },
        // distractor: starts from x = 4 instead of x = 3
        { id: "B", text: "$3$" },
        // distractor: stops at the inner value f(3)
        { id: "C", text: "$4$" },
        // distractor: adds f(3) and f(4)
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      hint: "Look up the inner output in the table first, then treat that number as a new input.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(3) = 4$, and the row for $4$ gives $f(4) = 1$.\n\n**The Full Solution:**\nStep 1: Read the inner value. The row with $x = 3$ shows $f(3) = 4$.\nStep 2: Replace the inside: $f(f(3)) = f(4)$.\nStep 3: Read $f(4)$ from the row with $x = 4$: $f(4) = 1$. Check the order — applying $f$ twice starting at $3$ gives $3 \\to 4 \\to 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): starts from the wrong input and computes $f(f(4)) = f(1) = 3$.\n* Choice C ($4$): stops after the inner step and reports $f(3)$.\n* Choice D ($5$): adds the two table values $f(3) + f(4) = 4 + 1$ instead of composing them.\n\n**Test Day Takeaway:** With a table, composition is two lookups: find the inner output, then find that number in the input column.",
      skills: ["function-composition", "function-evaluation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Functions $u$ and $v$ are defined by $u(x) = x - 4$ and $v(x) = x^2$. Which of the following is equivalent to $v(u(x))$?",
      choices: [
        // distractor: treats the square as a difference of squares
        { id: "A", text: "$x^2 - 16$" },
        // distractor: reverses the order of composition
        { id: "B", text: "$x^2 - 4$" },
        { id: "C", text: "$(x - 4)^2$" },
        // distractor: drops the cross term
        { id: "D", text: "$x^2 + 16$" }
      ],
      correctAnswer: "C",
      hint: "The inner rule acts first: put all of $u(x)$ into the input slot of $v$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $v$ squares its input, and its input here is $u(x) = x - 4$, so $v(u(x)) = (x - 4)^2$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function symbolically: $u(x) = x - 4$.\nStep 2: Feed that entire expression into $v$, which squares whatever it receives: $v(u(x)) = (x - 4)^2$.\nStep 3: Expanded, that is $x^2 - 8x + 16$, which matches choice C. Check at $x = 6$: $u(6) = 2$ and $v(2) = 4$, while $(6 - 4)^2 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 - 16$): treats $(x - 4)^2$ as a difference of squares, $x^2 - 4^2$.\n* Choice B ($x^2 - 4$): composes in the reverse order, computing $u(v(x)) = x^2 - 4$.\n* Choice D ($x^2 + 16$): squares each term separately and drops the cross term $-8x$.\n\n**Test Day Takeaway:** Squaring a binomial always produces three terms; $(x - 4)^2$ is $(x - 4)(x - 4)$, never $x^2 - 16$.",
      skills: ["function-composition"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The functions $f$ and $g$ are defined so that $f(x) = 5x - 2$ and $f(g(x)) = 15x + 8$ for all values of $x$. Which of the following defines $g(x)$?",
      choices: [
        // distractor: subtracts 2 instead of adding it
        { id: "A", text: "$3x + \\frac{6}{5}$" },
        { id: "B", text: "$3x + 2$" },
        // distractor: divides only the x-term by 5
        { id: "C", text: "$3x + 8$" },
        // distractor: never divides by 5
        { id: "D", text: "$15x + 10$" }
      ],
      correctAnswer: "B",
      hint: "Replace the input of $f$ with $g(x)$, set the result equal to the given composite, and solve.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $5g(x) - 2 = 15x + 8$ gives $5g(x) = 15x + 10$, so $g(x) = 3x + 2$.\n\n**The Full Solution:**\nStep 1: The rule for $f$ applies to whatever it receives, so $f(g(x)) = 5\\,g(x) - 2$.\nStep 2: Set this equal to the given composite: $5\\,g(x) - 2 = 15x + 8$. Add $2$ to both sides: $5\\,g(x) = 15x + 10$.\nStep 3: Divide every term by $5$: $g(x) = 3x + 2$. Check: $f(3x + 2) = 5(3x + 2) - 2 = 15x + 10 - 2 = 15x + 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + \\frac{6}{5}$): subtracts $2$ from both sides instead of adding it, giving $\\frac{15x + 6}{5}$.\n* Choice C ($3x + 8$): divides only the $x$-term by $5$ and leaves the constant untouched.\n* Choice D ($15x + 10$): isolates $5\\,g(x)$ correctly but never divides by $5$.\n\n**Test Day Takeaway:** Treat the inner function as a single unknown quantity, solve for it as you would for a variable, and divide EVERY term at the end.",
      skills: ["function-composition", "finding-function-from-conditions"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of the linear function $f$ is shown, and the point $(3, 5)$ lies on the graph. The function $g$ is defined by $g(x) = f(x) - 4$. Which point must lie on the graph of $y = g(x)$?",
      diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -1, xRange: [-6, 6], yRange: [-10, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[3, 5]], label: "f" } },
      choices: [
        // distractor: shifts the input left instead of the output down
        { id: "A", text: "$(-1, 5)$" },
        { id: "B", text: "$(3, 1)$" },
        // distractor: adds 4 instead of subtracting
        { id: "C", text: "$(3, 9)$" },
        // distractor: shifts the input right
        { id: "D", text: "$(7, 5)$" }
      ],
      correctAnswer: "B",
      hint: "Subtracting a constant from the output moves every point in one direction only.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $g(3) = f(3) - 4 = 5 - 4 = 1$, so $(3, 1)$ is on the graph of $g$.\n\n**The Full Solution:**\nStep 1: The marked point says $f(3) = 5$.\nStep 2: The rule $g(x) = f(x) - 4$ changes only the output, so $g(3) = f(3) - 4 = 5 - 4 = 1$.\nStep 3: An input of $3$ with an output of $1$ is the point $(3, 1)$. Check with the graph's equation $f(x) = 2x - 1$: $g(x) = 2x - 5$, and $g(3) = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-1, 5)$): shifts the point $4$ units left, treating the $-4$ as a change to the input.\n* Choice C ($(3, 9)$): adds $4$ to the output instead of subtracting it.\n* Choice D ($(7, 5)$): shifts the point $4$ units right, again changing the input rather than the output.\n\n**Test Day Takeaway:** A constant added or subtracted OUTSIDE the function moves the graph vertically; a constant inside the parentheses moves it horizontally.",
      skills: ["function-transformations", "function-evaluation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x) = x^2 + 3$. If $f(t + 2) - f(t) = 32$, where $t$ is a constant, what is the value of $t$?",
      choices: [
        // distractor: mis-factors the difference as 4(t + 2)
        { id: "A", text: "$6$" },
        { id: "B", text: "$7$" },
        // distractor: drops the constant in the difference
        { id: "C", text: "$8$" },
        // distractor: adds 4 instead of subtracting
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "B",
      hint: "Expand $f(t + 2)$ completely before subtracting; the squared terms cancel.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** The difference simplifies to $4t + 4$, and $4t + 4 = 32$ gives $t = 7$.\n\n**The Full Solution:**\nStep 1: Expand the shifted output: $f(t + 2) = (t + 2)^2 + 3 = t^2 + 4t + 4 + 3 = t^2 + 4t + 7$.\nStep 2: Subtract the other output: $f(t + 2) - f(t) = (t^2 + 4t + 7) - (t^2 + 3) = 4t + 4$.\nStep 3: Solve $4t + 4 = 32$: $4t = 28$, so $t = 7$. Check: $f(9) - f(7) = 84 - 52 = 32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): factors the difference as $4(t + 2)$ instead of $4(t + 1)$ and solves $t + 2 = 8$.\n* Choice C ($8$): drops the constant term of the difference and solves $4t = 32$.\n* Choice D ($9$): adds $4$ to both sides instead of subtracting it, solving $4t = 36$.\n\n**Test Day Takeaway:** For a quadratic rule, a difference of outputs collapses to a linear expression once the squared terms cancel — expand fully before you subtract.",
      skills: ["function-evaluation", "finding-function-from-conditions"]
    }
  ]
};
