// Practice questions for Functions module
// Questions are organized by SECTION (question type)

export const functionsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = 3x - 7, what is f(4)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "12" },
        { id: "C", text: "−4" },
        { id: "D", text: "19" }
      ],
      correctAnswer: "A",
      hint: "Replace every x in the function with 4, then simplify using order of operations.",
      explanation: "**Choice A is correct.** Substituting $x = 4$ into $f(x) = 3x - 7$ gives $5$.\n\n**Step 1:** Replace every $x$ with $4$ in the function rule: $f(4) = 3(4) - 7$.\n\n**Step 2:** Multiply first (order of operations): $3(4) = 12$, so $f(4) = 12 - 7 = 5$.\n\n**Verification:** $f(4) = 3(4) - 7 = 12 - 7 = 5$. Choice A = 5. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation]. $12$ is the result of $3 \\times 4$ alone — this student multiplied but forgot to subtract $7$.\n• Choice C: [TRAP: sign_error]. $-4$ comes from computing $3 - 7 = -4$ while dropping the multiplication by $4$.\n• Choice D: [TRAP: reversed_operation]. $19$ results from adding instead of subtracting: $12 + 7 = 19$.\n\n**Key concept:** Function evaluation means replacing $x$ with the input value everywhere it appears: $f(a) = 3a - 7$.\n\n**Calculator tip:** On Desmos, type $f(x) = 3x - 7$ in one line, then type $f(4)$ in the next line to instantly see the output.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For the function g(x) = x² + 2x, what is g(-3)?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "15" },
        { id: "C", text: "−3" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "A",
      hint: "Substitute -3 for x and remember that squaring a negative number gives a positive result.",
      explanation: "**Choice A is correct.** Evaluating $g(-3)$ requires careful handling of the negative sign in both terms.\n\n**Step 1:** Substitute $x = -3$ into $g(x) = x^2 + 2x$: $g(-3) = (-3)^2 + 2(-3)$.\n\n**Step 2:** Compute $(-3)^2 = 9$ (squaring a negative gives a positive).\n\n**Step 3:** Compute $2(-3) = -6$.\n\n**Step 4:** Combine: $g(-3) = 9 + (-6) = 9 - 6 = 3$.\n\n**Verification:** $(-3)^2 + 2(-3) = 9 - 6 = 3$. Choice A = 3. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error]. $15$ results from computing $9 + 6$, treating $2(-3)$ as $+6$ instead of $-6$ — a sign error on the linear term.\n• Choice C: [TRAP: sign_error]. $-3$ comes from computing $-9 + 6$, mistakenly treating $(-3)^2$ as $-9$ instead of $+9$.\n• Choice D: [TRAP: partial_calculation]. $9$ is only the first term $(-3)^2$ — this student forgot to add the second term $2(-3)$.\n\n**Key concept:** When substituting a negative value, always use parentheses: $(-3)^2 = 9$, but $-3^2 = -9$. This distinction is critical on the SAT.\n\n**Calculator tip:** In Desmos, enter $g(x) = x^2 + 2x$, then evaluate $g(-3)$. The parentheses are handled automatically.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x + 1 and f(a) = 11, what is the value of a?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "10" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "A",
      hint: "Set up an equation by replacing f(a) with 2a + 1, then solve for a.",
      explanation: "**Choice A is correct.** Since $f(a) = 11$, we set $2a + 1 = 11$ and solve for $a$.\n\n**Step 1:** Replace $x$ with $a$ in $f(x) = 2x + 1$: $f(a) = 2a + 1$.\n\n**Step 2:** Set $f(a) = 11$: $$2a + 1 = 11$$\n\n**Step 3:** Subtract $1$ from both sides: $2a = 10$.\n\n**Step 4:** Divide both sides by $2$: $a = 5$.\n\n**Verification:** $f(5) = 2(5) + 1 = 10 + 1 = 11$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip]. $a = 6$ comes from solving $2a = 12$ — forgetting to subtract $1$ from $11$ first, or mistakenly adding $1$ to get $12$.\n• Choice C: [TRAP: partial_calculation]. $10$ is the value of $2a$ (the intermediate step), not the value of $a$ itself. The student stopped one step too early.\n• Choice D: [TRAP: reversed_operation]. $a = 4$ results from subtracting $1$ correctly but then dividing $8$ by $2$ — an arithmetic error in the subtraction step ($11 - 1 = 10$, not $8$).\n\n**Key concept:** To find an input from an output, set $f(a) = \\text{output}$ and solve the resulting equation for $a$. This is the inverse process of function evaluation.\n\n**Calculator tip:** In Desmos, graph $y = 2x + 1$ and $y = 11$, then find their intersection point. The $x$-coordinate of the intersection is $a$.",
      skills: ['function-evaluation', 'function-notation', 'finding-function-from-conditions']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which of the following represents a function?",
      choices: [
        { id: "A", text: "{(1, 2), (1, 3), (2, 4)}" },
        { id: "B", text: "{(1, 2), (2, 2), (3, 4)}" },
        { id: "C", text: "x² + y² = 4" },
        { id: "D", text: "y² = x" }
      ],
      correctAnswer: "B",
      hint: "A function cannot have the same input (x-value) paired with different outputs. Check which option has unique x-values.",
      explanation: "**Choice B is correct.** In set $\\{(1, 2), (2, 2), (3, 4)\\}$, every $x$-value maps to exactly one $y$-value, satisfying the definition of a function.\n\n**Step 1:** Recall the definition: a function assigns each input ($x$-value) to exactly one output ($y$-value).\n\n**Step 2:** Check each option for repeated $x$-values with different $y$-values:\n- Choice A: $x = 1$ maps to both $2$ and $3$ — NOT a function.\n- Choice B: $x = 1 \\to 2$, $x = 2 \\to 2$, $x = 3 \\to 4$ — each $x$ has one $y$. This IS a function.\n- Choice C: $x^2 + y^2 = 4$ is a circle, which fails the vertical line test (e.g., $x = 0$ gives $y = 2$ and $y = -2$).\n- Choice D: $y^2 = x$ means $y = \\pm\\sqrt{x}$, so each positive $x$ gives two $y$-values — NOT a function.\n\n**Verification:** In Choice B, the $x$-values are $\\{1, 2, 3\\}$ — all distinct. Each has a unique output. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation]. Students confuse the rule — a function CAN have the same $y$-value for different $x$-values (like Choice B does), but CANNOT have the same $x$-value produce different $y$-values.\n• Choice C: A circle is not a function because vertical lines cross it at two points. The equation cannot be written as $y = \\text{one expression}$.\n• Choice D: [TRAP: reversed_operation]. Students may think $y^2 = x$ is a function because it \"looks simple,\" but solving for $y$ gives $y = \\pm\\sqrt{x}$, producing two outputs per input.\n\n**Key concept:** The vertical line test: if any vertical line crosses a graph more than once, the relation is NOT a function. Equivalently, no $x$-value can appear twice with different $y$-values.",
      skills: ['function-notation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What is the domain of f(x) = 1/(x - 3)?",
      choices: [
        { id: "A", text: "All real numbers" },
        { id: "B", text: "All real numbers except 3" },
        { id: "C", text: "All real numbers except 0" },
        { id: "D", text: "x > 3" }
      ],
      correctAnswer: "B",
      hint: "The domain excludes any x-value that makes the denominator equal to zero. Find what value of x causes division by zero.",
      explanation: "**Choice B is correct.** The function $f(x) = \\frac{1}{x - 3}$ is undefined only when its denominator equals zero, which happens at $x = 3$.\n\n**Step 1:** Identify the restriction: division by zero is undefined, so set the denominator equal to zero: $x - 3 = 0$.\n\n**Step 2:** Solve: $x = 3$.\n\n**Step 3:** The domain is all real numbers EXCEPT $x = 3$. In interval notation: $(-\\infty, 3) \\cup (3, \\infty)$.\n\n**Verification:** At $x = 3$: $f(3) = \\frac{1}{3 - 3} = \\frac{1}{0}$, which is undefined. At any other value, say $x = 4$: $f(4) = \\frac{1}{4 - 3} = 1$, which is defined. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. \"All real numbers\" ignores the domain restriction entirely. Students who pick this forget to check for division by zero.\n• Choice C: [TRAP: reversed_operation]. \"All real numbers except $0$\" confuses $f(x) = \\frac{1}{x - 3}$ with $f(x) = \\frac{1}{x}$. The excluded value comes from solving $x - 3 = 0$, not $x = 0$.\n• Choice D: [TRAP: reversed_operation]. $x > 3$ is too restrictive — the function is perfectly defined for $x < 3$ as well (e.g., $f(0) = \\frac{1}{-3} = -\\frac{1}{3}$). This student may have confused domain restrictions with inequality constraints.\n\n**Key concept:** For rational functions $f(x) = \\frac{p(x)}{q(x)}$, the domain excludes all values where $q(x) = 0$. Always solve $\\text{denominator} = 0$ to find excluded values.\n\n**Calculator tip:** In Desmos, graph $y = \\frac{1}{x - 3}$. Notice the vertical asymptote at $x = 3$ — that is the excluded value.",
      skills: ['domain-restrictions', 'function-notation']
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x² - 4 and g(x) = x + 2, what is f(g(1))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "9" },
        { id: "C", text: "−3" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      hint: "Work from the inside out: first calculate g(1), then use that result as the input for f.",
      explanation: "**Choice A is correct.** For composition $f(g(1))$, work inside-out: first evaluate $g(1)$, then feed the result into $f$.\n\n**Step 1:** Evaluate the inner function: $g(1) = 1 + 2 = 3$.\n\n**Step 2:** Now evaluate the outer function at that result: $f(3) = 3^2 - 4 = 9 - 4 = 5$.\n\n**Verification:** $f(g(1)) = f(3) = 9 - 4 = 5$. Choice A = 5. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation]. $9$ is $3^2$, the result of squaring $g(1) = 3$ without subtracting $4$. This student stopped one step too early in evaluating $f(3)$.\n• Choice C: [TRAP: reversed_operation]. $-3$ comes from evaluating $f(1) = 1^2 - 4 = -3$ — computing $f(1)$ instead of $f(g(1))$. This student applied $f$ to the original input rather than to $g(1)$.\n• Choice D: [TRAP: partial_calculation]. $3$ is just the value of $g(1) = 1 + 2 = 3$. This student evaluated only the inner function and forgot to apply $f$ to the result.\n\n**Key concept:** In function composition $f(g(x))$, always evaluate the innermost function first. Think of it as a two-step process: $g$ transforms the input, then $f$ transforms $g$'s output.\n\n**Calculator tip:** In Desmos, define $f(x) = x^2 - 4$ and $g(x) = x + 2$. Then type $f(g(1))$ — Desmos handles the composition automatically.",
      skills: ['function-composition', 'function-evaluation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If h(x) = 5x - 2, what is h(x + 1)?",
      choices: [
        { id: "A", text: "5x - 1" },
        { id: "B", text: "5x + 3" },
        { id: "C", text: "5x + 1" },
        { id: "D", text: "5x - 3" }
      ],
      correctAnswer: "B",
      hint: "Replace every x in the formula with (x + 1), using parentheses, then distribute and simplify.",
      explanation: "**Choice B is correct.** To find $h(x + 1)$, substitute $(x + 1)$ for every $x$ in $h(x) = 5x - 2$.\n\n**Step 1:** Replace $x$ with $(x + 1)$: $h(x + 1) = 5(x + 1) - 2$.\n\n**Step 2:** Distribute the $5$: $= 5x + 5 - 2$.\n\n**Step 3:** Combine constant terms: $= 5x + 3$.\n\n**Verification:** Test with a specific value. Let $x = 0$: $h(0 + 1) = h(1) = 5(1) - 2 = 3$. And our answer gives $5(0) + 3 = 3$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip]. $5x - 1$ results from computing $-2 + 1 = -1$, as if only $1$ was added to the constant instead of properly distributing $5(x + 1)$.\n• Choice C: [TRAP: partial_calculation]. $5x + 1$ comes from distributing incorrectly — getting $5x + 5 - 2$ but then miscalculating $5 - 2$ as $1$ instead of $3$, or forgetting to distribute the $5$ to the $+1$.\n• Choice D: [TRAP: sign_error]. $5x - 3$ comes from treating the substitution as $5x + 1 - 2$ (failing to distribute $5$ across both terms in the parentheses), yielding $5x - 1$, then possibly another sign error.\n\n**Key concept:** When evaluating $f(\\text{expression})$, replace EVERY instance of $x$ in $f(x)$ with the entire expression, using parentheses: $f(x + 1) \\neq f(x) + 1$.\n\n**Calculator tip:** In Desmos, define $h(x) = 5x - 2$, then type $h(x + 1)$. Desmos will simplify it, confirming the result.",
      skills: ['function-evaluation', 'function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x and g(x) = x + 3, what is f(x) + g(x)?",
      choices: [
        { id: "A", text: "2x² + 3" },
        { id: "B", text: "3x + 3" },
        { id: "C", text: "2x + 3" },
        { id: "D", text: "5x" }
      ],
      correctAnswer: "B",
      hint: "Add the two function expressions together and combine like terms.",
      explanation: "**Choice B is correct.** Adding two functions means adding their expressions: $f(x) + g(x) = 2x + (x + 3) = 3x + 3$.\n\n**Step 1:** Write out both function expressions: $f(x) = 2x$ and $g(x) = x + 3$.\n\n**Step 2:** Add them: $f(x) + g(x) = 2x + (x + 3)$.\n\n**Step 3:** Combine like terms: $2x + x + 3 = 3x + 3$.\n\n**Verification:** Test with $x = 1$: $f(1) + g(1) = 2(1) + (1 + 3) = 2 + 4 = 6$. Our answer: $3(1) + 3 = 6$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation]. $2x^2 + 3$ results from multiplying $f(x) \\cdot g(x) = 2x(x + 3) = 2x^2 + 6x$, then further simplifying incorrectly. This student confused addition of functions with multiplication.\n• Choice C: [TRAP: partial_calculation]. $2x + 3$ comes from writing $f(x)$ and $g(x)$ side by side but forgetting that $g(x)$ contributes an additional $x$ term. The $x$ from $g(x) = x + 3$ was dropped.\n• Choice D: [TRAP: partial_calculation]. $5x$ likely results from adding all coefficients ($2 + 3 = 5$) and attaching them to $x$, treating the constant $3$ in $g(x)$ as a coefficient of $x$ instead of a separate constant term.\n\n**Key concept:** When adding functions, add the expressions term by term and combine like terms: $(f + g)(x) = f(x) + g(x)$. Addition of functions is NOT multiplication.\n\n**Calculator tip:** In Desmos, define $f(x) = 2x$ and $g(x) = x + 3$, then graph $y = f(x) + g(x)$ and $y = 3x + 3$ to confirm they overlap.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For f(x) = x² - 1, what is f(2) - f(1)?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "1" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "B",
      hint: "Calculate f(2) and f(1) separately, then subtract the second result from the first.",
      explanation: "**Choice B is correct.** Evaluate each function value separately, then subtract: $f(2) - f(1) = 3 - 0 = 3$.\n\n**Step 1:** Evaluate $f(2)$: $f(2) = 2^2 - 1 = 4 - 1 = 3$.\n\n**Step 2:** Evaluate $f(1)$: $f(1) = 1^2 - 1 = 1 - 1 = 0$.\n\n**Step 3:** Subtract: $f(2) - f(1) = 3 - 0 = 3$.\n\n**Verification:** $3 - 0 = 3$. Choice B = 3. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation]. $2$ comes from computing $f(2 - 1) = f(1) = 0$ or from thinking $f(2) - f(1) = f(2 - 1) = f(1) = 0$, then making an arithmetic error. Remember: $f(2) - f(1) \\neq f(2 - 1)$.\n• Choice C: [TRAP: partial_calculation]. $1$ could result from computing only the difference of the inputs ($2 - 1 = 1$) rather than the difference of the outputs, or from mistakenly computing $f(1) = 1$ (forgetting to subtract $1$).\n• Choice D: [TRAP: partial_calculation]. $4$ is the value of $2^2$ alone — this student may have computed only the $x^2$ part of $f(2)$ without subtracting $1$, or computed $f(2) = 4$ and then skipped the subtraction of $f(1)$.\n\n**Key concept:** Function arithmetic requires evaluating each function value independently first. A critical SAT trap: $f(a) - f(b) \\neq f(a - b)$ in general. Functions do not \"distribute\" over subtraction.\n\n**Calculator tip:** In Desmos, define $f(x) = x^2 - 1$, then compute $f(2) - f(1)$ directly in a new expression line.",
      skills: ['function-evaluation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If f(x) = 4x + k and f(2) = 15, what is the value of k?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "23" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = 2 into the function, set it equal to 15, and solve for k.",
      explanation: "**Choice A is correct.** Substituting $x = 2$ into $f(x) = 4x + k$ and setting it equal to $15$ lets us solve for $k$.\n\n**Step 1:** Substitute $x = 2$: $f(2) = 4(2) + k = 8 + k$.\n\n**Step 2:** Set equal to the given output: $8 + k = 15$.\n\n**Step 3:** Solve for $k$: $k = 15 - 8 = 7$.\n\n**Verification:** $f(2) = 4(2) + 7 = 8 + 7 = 15$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: off_by_one]. $k = 8$ is the value of $4(2)$, not $k$. This student computed $4 \\times 2 = 8$ and stopped, confusing the intermediate product with the unknown constant.\n• Choice C: [TRAP: partial_calculation]. $k = 11$ comes from computing $15 - 4 = 11$, using the coefficient $4$ instead of $4(2) = 8$. The student forgot to multiply $4$ by $2$ before subtracting.\n• Choice D: [TRAP: reversed_operation]. $k = 23$ comes from adding instead of subtracting: $15 + 8 = 23$. When isolating $k$ in $8 + k = 15$, we subtract $8$, not add it.\n\n**Key concept:** When a function contains an unknown constant, substitute a known input-output pair to create an equation and solve: $f(a) = \\text{known value} \\Rightarrow$ plug in $a$, set equal, solve for the constant.\n\n**Calculator tip:** In Desmos, use a slider for $k$: type $f(x) = 4x + k$ and adjust $k$ until $f(2) = 15$.",
      skills: ['function-evaluation', 'finding-function-from-conditions']
    }
  ],

  // Section: Complex Function Problems
  "Complex Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = 3x - 1, what is f(f(2))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "14" },
        { id: "D", text: "17" }
      ],
      correctAnswer: "C",
      hint: "This is a nested function. First find f(2), then plug that answer back into f again.",
      explanation: "**Choice C is correct.** This is iterated composition: apply $f$ twice. First find $f(2)$, then feed that result back into $f$.\n\n**Step 1:** Evaluate the inner function: $f(2) = 3(2) - 1 = 6 - 1 = 5$.\n\n**Step 2:** Now evaluate $f$ at that result: $f(f(2)) = f(5) = 3(5) - 1 = 15 - 1 = 14$.\n\n**Verification:** $f(2) = 5$, then $f(5) = 14$. Choice C = 14. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. $5$ is the value of $f(2) = 3(2) - 1 = 5$. This student correctly evaluated the inner function but forgot to apply $f$ a second time.\n• Choice B: [TRAP: arithmetic_slip]. $8$ could come from computing $f(2) = 3(2) - 1 = 5$, then miscalculating $f(5) = 3(5) - 1$ as $10 - 1 = 9$... no, $8$ likely results from computing $3(2) + 2 = 8$ or another arithmetic error in the second application.\n• Choice D: [TRAP: reversed_operation]. $17$ comes from computing $f(5) = 3(5) + 2 = 17$ or $3(6) - 1 = 17$ — adding instead of subtracting, or using $6$ instead of $5$ in the second step.\n\n**Key concept:** For iterated functions $f(f(x))$, always work inside-out. Compute $f(x)$ first to get a number, then use that number as the new input to $f$. The key trap is stopping after one evaluation.\n\n**Calculator tip:** In Desmos, define $f(x) = 3x - 1$. Then type $f(f(2))$ — Desmos will compute the nested composition directly.",
      skills: ['function-composition', 'function-evaluation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(x) = x + 2 and g(x) = x², what is g(f(x))?",
      choices: [
        { id: "A", text: "x² + 2" },
        { id: "B", text: "(x + 2)²" },
        { id: "C", text: "x² + 4" },
        { id: "D", text: "x² + 4x + 4" }
      ],
      correctAnswer: "B",
      hint: "For composition g(f(x)), replace the input of g with the entire expression f(x). Think about what gets squared.",
      explanation: "**Choice B is correct.** For $g(f(x))$, replace the input of $g$ with the entire expression $f(x) = x + 2$, giving $(x + 2)^2$.\n\n**Step 1:** Identify the composition order: $g(f(x))$ means apply $f$ first, then $g$.\n\n**Step 2:** Since $f(x) = x + 2$, we need $g(x + 2)$.\n\n**Step 3:** Since $g(x) = x^2$, replace $x$ with $(x + 2)$: $g(x + 2) = (x + 2)^2$.\n\n**Verification:** Test with $x = 1$: $f(1) = 3$, $g(3) = 9$. Our answer: $(1 + 2)^2 = 9$. ✓\n\nNote: Choice D, $x^2 + 4x + 4$, is the expanded form of $(x + 2)^2$ and is mathematically equivalent. On the SAT, either form would be accepted, but B is the direct composed form.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. $x^2 + 2$ comes from computing $g(x) + 2 = x^2 + 2$ instead of $g(x + 2) = (x + 2)^2$. This student added $2$ to the output of $g$ rather than to the input.\n• Choice C: [TRAP: arithmetic_slip]. $x^2 + 4$ incorrectly squares $x$ and $2$ separately: $x^2 + 2^2 = x^2 + 4$. But $(x + 2)^2 \\neq x^2 + 4$; the cross term $4x$ is missing.\n\n**Key concept:** In composition $g(f(x))$, the entire expression $f(x)$ replaces the input variable of $g$. The most common error is applying the operations separately rather than nesting them: $(x + 2)^2 = x^2 + 4x + 4$, not $x^2 + 4$.\n\n**Calculator tip:** In Desmos, define both functions separately, then type $g(f(x))$. Compare the graph to $y = (x + 2)^2$ to confirm they are identical.",
      skills: ['function-composition']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x + 3 and f(g(x)) = 4x + 7, what is g(x)?",
      choices: [
        { id: "A", text: "2x + 2" },
        { id: "B", text: "2x + 4" },
        { id: "C", text: "x + 2" },
        { id: "D", text: "2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Write f(g(x)) by substituting g(x) into f, then compare coefficients with 4x + 7 to find g(x).",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Plug $g(x)$ into $f$: the outer rule doubles its input and adds $3$, so $f(g(x))=2g(x)+3=4x+7$. Strip the $+3$ and halve: $2g(x)=4x+4 \\Rightarrow g(x)=2x+2$.\n\n**The Full Solution:**\nStep 1: Substitute $g(x)$ as the input to $f$. Since $f(\\text{input})=2(\\text{input})+3$, you get $f(g(x))=2\\,g(x)+3$.\nStep 2: Set it equal to the given composition: $2\\,g(x)+3=4x+7$.\nStep 3: Subtract $3$ from both sides: $2\\,g(x)=4x+4$.\nStep 4: Divide every term by $2$: $g(x)=2x+2$.\nStep 5: Check by composing: $f(2x+2)=2(2x+2)+3=4x+4+3=4x+7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x+4$): divided only the $x$-term by $2$ and left the constant as $4$ instead of halving it to $2$.\n* Choice C ($x+2$): halved the entire right side again, dividing the $4x$ by $2$ a second time.\n* Choice D ($2x+5$): subtracted $3$ from $7$ to get the constant but never undid the $\\times 2$, mixing up the two operations.\n\n**Test Day Takeaway:** To find an inner function from a composition, write $f(g(x))$ by substituting $g(x)$ into $f$'s rule, then peel off $f$'s operations in reverse — undo the add, then undo the multiply — applying each step to the whole right side.",
      skills: ['function-composition', 'finding-function-from-conditions']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of y = f(x) passes through point (2, 5). If g(x) = f(x) + 3, what point must be on the graph of g?",
      choices: [
        { id: "A", text: "(2, 5)" },
        { id: "B", text: "(2, 8)" },
        { id: "C", text: "(5, 5)" },
        { id: "D", text: "(5, 8)" }
      ],
      correctAnswer: "B",
      hint: "Adding 3 to a function shifts all y-values up by 3. The x-coordinate stays the same.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The $+3$ sits outside $f$, so it raises every output by $3$ and leaves $x$ alone. The point $(2,5)$ becomes $(2,5+3)=(2,8)$.\n\n**The Full Solution:**\nStep 1: The point $(2,5)$ on $f$ means $f(2)=5$.\nStep 2: Evaluate $g$ at the same input: $g(2)=f(2)+3=5+3=8$.\nStep 3: So $(2,8)$ lies on the graph of $g$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,5)$): ignored the $+3$ entirely and reused the original point on $f$.\n* Choice C ($(5,5)$): added $3$ to the $x$-coordinate instead of the $y$-coordinate; the shift is vertical, not horizontal.\n* Choice D ($(5,8)$): shifted both coordinates by $3$, but only the output changes.\n\n**Test Day Takeaway:** For $g(x)=f(x)+k$, a $+k$ outside the function shifts the graph vertically: every point $(a,b)$ becomes $(a,b+k)$ and the $x$-coordinate stays put.",
      skills: ['function-transformations', 'function-evaluation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If f(x) = x² and f(a + 1) - f(a - 1) = 8, what is the value of a?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "B",
      hint: "Expand (a + 1)² and (a - 1)² using FOIL, then subtract and simplify. Many terms will cancel.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Use difference of squares: $(a+1)^2-(a-1)^2=\\big[(a+1)+(a-1)\\big]\\big[(a+1)-(a-1)\\big]=(2a)(2)=4a$. Set $4a=8$, so $a=2$.\n\n**The Full Solution:**\nStep 1: Substitute into $f(x)=x^2$: $f(a+1)-f(a-1)=(a+1)^2-(a-1)^2$.\nStep 2: Expand each square: $(a+1)^2=a^2+2a+1$ and $(a-1)^2=a^2-2a+1$.\nStep 3: Subtract: $(a^2+2a+1)-(a^2-2a+1)=4a$.\nStep 4: Set equal to $8$: $4a=8$, so $a=2$.\nStep 5: Check: $f(3)-f(1)=9-1=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): divided $8$ by $8$ instead of by $4$, treating the coefficient of $a$ as $8$.\n* Choice C ($3$): an expansion slip that produced $2a+2=8$ rather than $4a=8$.\n* Choice D ($4$): lost a $2a$ term during the subtraction, getting $2a=8$ instead of $4a=8$.\n\n**Test Day Takeaway:** When you see $A^2-B^2$, factor it as $(A+B)(A-B)$ before expanding — here it collapses the whole difference to $4a$ in one line.",
      skills: ['function-evaluation', 'finding-function-from-conditions']
    }
  ]
};
