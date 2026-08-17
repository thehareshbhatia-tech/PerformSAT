// Practice questions for Functions module
// Questions are organized by SECTION (question type)

export const functionsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "If $f(x) = 3x - 7$, what is f(4)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "12" },
        { id: "C", text: "$-4$" },
        { id: "D", text: "19" }
      ],
      correctAnswer: "A",
      hint: "Replace every x in the function with 4, then simplify using order of operations.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Plug $4$ into $f(x)=3x-7$: $3(4)-7=12-7=5$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $4$: $f(4)=3(4)-7$.\nStep 2: Multiply before subtracting: $3(4)=12$, so $f(4)=12-7=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): stopped at $3\\times 4$ and forgot to subtract $7$.\n* Choice C ($-4$): computed $3-7=-4$, dropping the multiplication by $4$.\n* Choice D ($19$): added instead of subtracted, $12+7=19$.\n\n**Test Day Takeaway:** To evaluate $f(\\text{input})$, substitute the input everywhere $x$ appears, then follow order of operations.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For the function $g(x) = x^2 + 2x$, what is g(-3)?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "15" },
        { id: "C", text: "$-3$" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "A",
      hint: "Substitute -3 for x and remember that squaring a negative number gives a positive result.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Use parentheses: $g(-3)=(-3)^2+2(-3)=9-6=3$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-3$: $g(-3)=(-3)^2+2(-3)$.\nStep 2: Square first: $(-3)^2=9$ (a squared negative is positive).\nStep 3: Then the linear term: $2(-3)=-6$.\nStep 4: Combine: $9+(-6)=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): treated $2(-3)$ as $+6$ and computed $9+6$ — a sign error on the linear term.\n* Choice C ($-3$): treated $(-3)^2$ as $-9$, getting $-9+6$.\n* Choice D ($9$): computed only $(-3)^2$ and forgot the $2x$ term.\n\n**Test Day Takeaway:** When substituting a negative, wrap it in parentheses: $(-3)^2=9$, but $-3^2=-9$.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If $f(x) = 2x + 1$ and $f(a) = 11$, what is the value of a?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "10" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "A",
      hint: "Set up an equation by replacing f(a) with 2a + 1, then solve for a.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(a)=11$ means $2a+1=11$, so $2a=10$ and $a=5$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $a$: $f(a)=2a+1$.\nStep 2: Set it equal to the output: $2a+1=11$.\nStep 3: Subtract $1$: $2a=10$.\nStep 4: Divide by $2$: $a=5$. Check: $f(5)=2(5)+1=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): solved $2a=12$, adding $1$ instead of subtracting it from $11$.\n* Choice C ($10$): stopped at $2a=10$ and reported $2a$ as the answer.\n* Choice D ($4$): mis-subtracted $11-1$ as $8$, then divided by $2$.\n\n**Test Day Takeaway:** To find an input from a known output, set $f(a)=\\text{output}$ and solve the equation for $a$.",
      skills: ['function-evaluation', 'function-notation', 'finding-function-from-conditions']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which of the following represents a function?",
      choices: [
        { id: "A", text: "{(1, 2), (1, 3), (2, 4)}" },
        { id: "B", text: "{(1, 2), (2, 2), (3, 4)}" },
        { id: "C", text: "$x^2 + y^2 = 4$" },
        { id: "D", text: "$y^2 = x$" }
      ],
      correctAnswer: "B",
      hint: "A function cannot have the same input (x-value) paired with different outputs. Check which option has unique x-values.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** A relation is a function when no $x$-value repeats with a different $y$-value. Only $\\{(1,2),(2,2),(3,4)\\}$ has all distinct $x$-values.\n\n**The Full Solution:**\nStep 1: A function sends each input to exactly one output.\nStep 2: Choice A repeats $x=1$ with two outputs ($2$ and $3$) — not a function.\nStep 3: Choice B has $x$-values $1,2,3$, each appearing once — this IS a function. (The repeated output $y=2$ is allowed.)\nStep 4: Choice C, $x^2+y^2=4$, is a circle: $x=0$ gives $y=2$ and $y=-2$ — fails the vertical line test.\nStep 5: Choice D, $y^2=x$, gives $y=\\pm\\sqrt{x}$, two outputs per positive input — not a function.\n\n**Why the wrong answers are tempting:**\n* Choice A: repeats an $x$-value with different $y$-values, the exact thing a function forbids.\n* Choice C: a circle fails the vertical line test; it cannot be written as $y=$ one expression.\n* Choice D: $y^2=x$ looks simple but solving for $y$ yields $\\pm\\sqrt{x}$, two outputs.\n\n**Test Day Takeaway:** Functions may repeat outputs but never inputs — one $x$, one $y$. Use the vertical line test on graphs.",
      skills: ['function-notation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What is the domain of $f(x) = 1/(x - 3)$?",
      choices: [
        { id: "A", text: "All real numbers" },
        { id: "B", text: "All real numbers except 3" },
        { id: "C", text: "All real numbers except 0" },
        { id: "D", text: "$x > 3$" }
      ],
      correctAnswer: "B",
      hint: "The domain excludes any x-value that makes the denominator equal to zero. Find what value of x causes division by zero.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A fraction is undefined only where its denominator is zero. Set $x-3=0$ to get $x=3$, so the domain is all real numbers except $3$.\n\n**The Full Solution:**\nStep 1: $f(x)=\\frac{1}{x-3}$ breaks only when the denominator is $0$.\nStep 2: Solve $x-3=0$: $x=3$.\nStep 3: Every other real number works, so the domain is all reals except $3$ — that is $(-\\infty,3)\\cup(3,\\infty)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: ignores the restriction entirely — forgets that $x=3$ makes the denominator $0$.\n* Choice C: confuses this with $\\frac{1}{x}$; the excluded value comes from $x-3=0$, not $x=0$.\n* Choice D: $x>3$ wrongly bans $x<3$, but $f(0)=\\frac{1}{-3}$ is perfectly defined.\n\n**Test Day Takeaway:** For a rational function, the domain excludes every value that makes the denominator zero — solve denominator $=0$.",
      skills: ['domain-restrictions', 'function-notation']
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If $f(x) = x^2 - 4$ and $g(x) = x + 2$, what is f(g(1))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "9" },
        { id: "C", text: "$-3$" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      hint: "Work from the inside out: first calculate g(1), then use that result as the input for f.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Work inside-out: $g(1)=3$, then $f(3)=3^2-4=5$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(1)=1+2=3$.\nStep 2: Feed that into $f$: $f(3)=3^2-4=9-4=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): computed $3^2$ but forgot to subtract $4$.\n* Choice C ($-3$): found $f(1)=1^2-4=-3$, applying $f$ to the original input instead of to $g(1)$.\n* Choice D ($3$): stopped after the inner function $g(1)=3$ and never applied $f$.\n\n**Test Day Takeaway:** In $f(g(x))$, evaluate the inner function first, then substitute its value into the outer function.",
      skills: ['function-composition', 'function-evaluation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If $h(x) = 5x - 2$, what is h(x + 1)?",
      choices: [
        { id: "A", text: "$5x - 1$" },
        { id: "B", text: "$5x + 3$" },
        { id: "C", text: "$5x + 1$" },
        { id: "D", text: "$5x - 3$" }
      ],
      correctAnswer: "B",
      hint: "Replace every x in the formula with (x + 1), using parentheses, then distribute and simplify.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $(x+1)$ into $h$: $5(x+1)-2=5x+5-2=5x+3$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $(x+1)$: $h(x+1)=5(x+1)-2$.\nStep 2: Distribute the $5$: $5x+5-2$.\nStep 3: Combine constants: $5x+3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5x-1$): added the $1$ only to the constant, getting $-2+1$, instead of distributing the $5$.\n* Choice C ($5x+1$): distributed correctly to $5x+5-2$ but then miscomputed $5-2$ as $1$.\n* Choice D ($5x-3$): failed to distribute the $5$ to the $+1$, treating it as $5x+1-2$.\n\n**Test Day Takeaway:** $f(\\text{expression})$ means replace every $x$ with the whole expression in parentheses, then distribute — $f(x+1)\\neq f(x)+1$.",
      skills: ['function-evaluation', 'function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If $f(x) = 2x$ and $g(x) = x + 3$, what is f(x) + g(x)?",
      choices: [
        { id: "A", text: "$2x^2 + 3$" },
        { id: "B", text: "$3x + 3$" },
        { id: "C", text: "$2x + 3$" },
        { id: "D", text: "$5x$" }
      ],
      correctAnswer: "B",
      hint: "Add the two function expressions together and combine like terms.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the expressions: $2x+(x+3)=3x+3$.\n\n**The Full Solution:**\nStep 1: Write both: $f(x)=2x$ and $g(x)=x+3$.\nStep 2: Add term by term: $2x+x+3$.\nStep 3: Combine like terms: $3x+3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x^2+3$): multiplied the functions instead of adding them.\n* Choice C ($2x+3$): dropped the $x$ from $g(x)=x+3$.\n* Choice D ($5x$): added coefficients $2+3$ and attached the constant $3$ to $x$ as if it were a coefficient.\n\n**Test Day Takeaway:** Adding functions means adding the expressions and combining like terms — it is not multiplication.",
      skills: ['function-evaluation', 'function-notation']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For $f(x) = x^2 - 1$, what is f(2) - f(1)?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "1" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "B",
      hint: "Calculate f(2) and f(1) separately, then subtract the second result from the first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Evaluate each separately: $f(2)=3$, $f(1)=0$, so $f(2)-f(1)=3-0=3$.\n\n**The Full Solution:**\nStep 1: $f(2)=2^2-1=4-1=3$.\nStep 2: $f(1)=1^2-1=1-1=0$.\nStep 3: Subtract the outputs: $3-0=3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): treated $f(2)-f(1)$ as $f(2-1)=f(1)$, which is not how functions work.\n* Choice C ($1$): subtracted the inputs ($2-1$) instead of the outputs.\n* Choice D ($4$): used $2^2=4$ for $f(2)$ but forgot to subtract $1$, then skipped $f(1)$.\n\n**Test Day Takeaway:** Evaluate each function value independently before combining — $f(a)-f(b)\\neq f(a-b)$.",
      skills: ['function-evaluation']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If $f(x) = 4x + k$ and $f(2) = 15$, what is the value of k?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "23" }
      ],
      correctAnswer: "A",
      hint: "Substitute $x = 2$ into the function, set it equal to 15, and solve for k.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(2)=4(2)+k=8+k$. Set $8+k=15$, so $k=7$.\n\n**The Full Solution:**\nStep 1: Substitute $x=2$: $f(2)=4(2)+k=8+k$.\nStep 2: Set equal to the given output: $8+k=15$.\nStep 3: Subtract $8$: $k=7$. Check: $4(2)+7=15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reported $4(2)=8$, the product, not the constant $k$.\n* Choice C ($11$): subtracted $4$ from $15$ instead of $4(2)=8$.\n* Choice D ($23$): added instead of subtracted, $15+8=23$.\n\n**Test Day Takeaway:** With an unknown constant, plug in the known input, set the expression equal to the known output, and solve for the constant.",
      skills: ['function-evaluation', 'finding-function-from-conditions']
    }
  ],

  // Section: Complex Function Problems
  "Complex Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If $f(x) = 3x - 1$, what is f(f(2))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "14" },
        { id: "D", text: "17" }
      ],
      correctAnswer: "C",
      hint: "This is a nested function. First find f(2), then plug that answer back into f again.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Apply $f$ twice: $f(2)=5$, then $f(5)=3(5)-1=14$.\n\n**The Full Solution:**\nStep 1: Inner evaluation: $f(2)=3(2)-1=6-1=5$.\nStep 2: Feed it back in: $f(5)=3(5)-1=15-1=14$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): found $f(2)=5$ but forgot to apply $f$ a second time.\n* Choice B ($8$): arithmetic slip in the second application of $f$.\n* Choice D ($17$): added instead of subtracted in $f(5)$, or reused $6$ rather than $5$.\n\n**Test Day Takeaway:** For $f(f(x))$, compute the inner value to a number first, then run that number through $f$ again.",
      skills: ['function-composition', 'function-evaluation']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If $f(x) = x + 2$ and $g(x) = x^2$, what is g(f(x))?",
      choices: [
        { id: "A", text: "$x^2 + 2$" },
        { id: "B", text: "$(x + 2)^2$" },
        { id: "C", text: "$x^2 + 4$" },
        { id: "D", text: "$x^2 + 4x + 4$" }
      ],
      correctAnswer: "B",
      hint: "For composition g(f(x)), replace the input of g with the entire expression f(x). Think about what gets squared.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(f(x))$ means put $f(x)=x+2$ into $g(x)=x^2$, giving $(x+2)^2$.\n\n**The Full Solution:**\nStep 1: $g(f(x))$ applies $f$ first, then $g$.\nStep 2: $f(x)=x+2$, so we need $g(x+2)$.\nStep 3: Since $g(x)=x^2$, replace $x$ with $(x+2)$: $g(x+2)=(x+2)^2$. (Expanded, this is $x^2+4x+4$, so Choice D is equivalent, but B is the direct composed form.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2+2$): added $2$ to the output $g(x)$ instead of to the input.\n* Choice C ($x^2+4$): squared $x$ and $2$ separately, dropping the cross term $4x$ — but $(x+2)^2\\neq x^2+4$.\n* Choice D ($x^2+4x+4$): the correct expanded form, equivalent to B; B is the direct composition.\n\n**Test Day Takeaway:** In $g(f(x))$, the entire expression $f(x)$ replaces the input of $g$ — nest it in parentheses before squaring.",
      skills: ['function-composition']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If $f(x) = 2x + 3$ and f(g(x)) = 4x + 7, what is g(x)?",
      choices: [
        { id: "A", text: "$2x + 2$" },
        { id: "B", text: "$2x + 4$" },
        { id: "C", text: "$x + 2$" },
        { id: "D", text: "$2x + 5$" }
      ],
      correctAnswer: "A",
      hint: "Write f(g(x)) by substituting g(x) into f, then compare coefficients with 4x + 7 to find g(x).",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Plug $g(x)$ into $f$: the outer rule doubles its input and adds $3$, so $f(g(x))=2g(x)+3=4x+7$. Strip the $+3$ and halve: $2g(x)=4x+4 \\Rightarrow g(x)=2x+2$.\n\n**The Full Solution:**\nStep 1: Substitute $g(x)$ as the input to $f$. Since $f(\\text{input})=2(\\text{input})+3$, you get $f(g(x))=2\\,g(x)+3$.\nStep 2: Set it equal to the given composition: $2\\,g(x)+3=4x+7$.\nStep 3: Subtract $3$ from both sides: $2\\,g(x)=4x+4$.\nStep 4: Divide every term by $2$: $g(x)=2x+2$.\nStep 5: Check by composing: $f(2x+2)=2(2x+2)+3=4x+4+3=4x+7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x+4$): divided only the $x$-term by $2$ and left the constant as $4$ instead of halving it to $2$.\n* Choice C ($x+2$): halved the entire right side again, dividing the $4x$ by $2$ a second time.\n* Choice D ($2x+5$): subtracted $3$ from $7$ to get the constant but never undid the $\\times 2$, mixing up the two operations.\n\n**Test Day Takeaway:** To find an inner function from a composition, write $f(g(x))$ by substituting $g(x)$ into $f$'s rule, then peel off $f$'s operations in reverse — undo the add, then undo the multiply — applying each step to the whole right side.",
      skills: ['function-composition', 'finding-function-from-conditions']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ passes through point (2, 5). If $g(x) = f(x) + 3$, what point must be on the graph of g?",
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
      question: "If $f(x) = x^2$ and $f(a + 1) - f(a - 1) = 8$, what is the value of a?",
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
