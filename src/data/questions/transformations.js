// Practice questions for Transformations module
// Questions are organized by SECTION (question type)

export const transformationsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "$p(x) = x^{2}$\nIn the $xy$-plane, how does the graph of $y = p(x) - 6$ compare with the graph of $y = p(x)$?",
      choices: [
        { id: "A", text: "It is shifted down $6$ units." },
        // distractor: reads the outside -6 as a horizontal move to the left
        { id: "B", text: "It is shifted left $6$ units." },
        // distractor: reads the outside -6 as a horizontal move to the right
        { id: "C", text: "It is shifted right $6$ units." },
        // distractor: reverses the sign of an outside constant
        { id: "D", text: "It is shifted up $6$ units." }
      ],
      correctAnswer: "A",
      hint: "Decide whether the $-6$ changes the input of $p$ or its output.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The $-6$ sits outside $p$, so it lowers every output by $6$: the graph moves down $6$ units.\n\n**The Full Solution:**\nStep 1: In $p(x) - 6$ the subtraction happens after $p$ produces its output, so only the $y$-values change.\nStep 2: A point $(a, b)$ on $y = p(x)$ becomes $(a, b - 6)$ on $y = p(x) - 6$; the $x$-coordinate does not move.\nStep 3: Check with the vertex: $(0, 0)$ on $y = x^{2}$ becomes $(0, -6)$ on $y = x^{2} - 6$, which is $6$ units lower ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (It is shifted left $6$ units.): a horizontal move needs a change inside $p$, such as $p(x + 6)$; here the $6$ is outside.\n* Choice C (It is shifted right $6$ units.): moving right $6$ would be $p(x - 6)$, with the $6$ attached to $x$, not to the output.\n* Choice D (It is shifted up $6$ units.): the sign is read backward; an outside constant moves the graph in the direction of its own sign, so $-6$ means down.\n\n**Test Day Takeaway:** Outside the function, constants act on $y$ and read straight: $+k$ raises the graph and $-k$ lowers it.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$q(x) = \\sqrt{x}$\nWhat is the $x$-intercept of the graph of $y = q(x - 9)$ in the $xy$-plane?",
      choices: [
        // distractor: shifts the graph left 9 instead of right 9
        { id: "A", text: "$(-9, 0)$" },
        // distractor: takes the square root of 9 as the shift
        { id: "B", text: "$(3, 0)$" },
        { id: "C", text: "$(9, 0)$" },
        // distractor: solves sqrt(x) - 9 = 0, treating the shift as vertical
        { id: "D", text: "$(81, 0)$" }
      ],
      correctAnswer: "C",
      hint: "Find the input that makes the expression under the square root equal to $0$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{x - 9} = 0$ only when $x = 9$, so the $x$-intercept is $(9, 0)$.\n\n**The Full Solution:**\nStep 1: The graph of $y = q(x - 9)$ is the graph of $y = \\sqrt{x - 9}$.\nStep 2: An $x$-intercept has $y = 0$: $\\sqrt{x - 9} = 0$ gives $x - 9 = 0$, so $x = 9$.\nStep 3: Check: $q(9 - 9) = \\sqrt{0} = 0$, so $(9, 0)$ is on the graph ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9, 0)$): this moves the starting point of $y = \\sqrt{x}$ left $9$; subtracting $9$ inside moves it right.\n* Choice B ($(3, 0)$): this takes $\\sqrt{9} = 3$ as the shift; the whole $9$ is subtracted from $x$ before the root is taken.\n* Choice D ($(81, 0)$): this solves $\\sqrt{x} - 9 = 0$, which is a vertical shift; here the $9$ is inside the root.\n\n**Test Day Takeaway:** A change inside the function moves the graph sideways, opposite to the sign you see: $q(x - 9)$ moves right $9$.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$f(x) = -(x - 3)^{2} + 5$\nIn the $xy$-plane, the graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ down $8$ units. What is the maximum value of $g(x)$?",
      choices: [
        // distractor: uses only the shift, forgetting the maximum value 5 of f
        { id: "A", text: "$-8$" },
        { id: "B", text: "$-3$" },
        // distractor: reports the x-coordinate of the vertex instead of the maximum value
        { id: "C", text: "$3$" },
        // distractor: shifts the graph up 8 units instead of down
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      hint: "Find the maximum value of $f$, then apply the vertical shift.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The maximum value of $f$ is $5$, and shifting down $8$ units gives $5 - 8 = -3$.\n\n**The Full Solution:**\nStep 1: The term $-(x - 3)^{2}$ is never positive, so the maximum value of $f$ is $5$, at $x = 3$.\nStep 2: Shifting the graph down $8$ units subtracts $8$ from every output: $g(x) = f(x) - 8$.\nStep 3: So the maximum value of $g$ is $5 - 8 = -3$.\n\nCheck: $g(3) = -(0)^{2} + 5 - 8 = -3$, and any other $x$ gives a smaller value. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): uses the shift alone and ignores the maximum of $f$.\n* Choice C ($3$): is the $x$-coordinate of the vertex, where the maximum occurs.\n* Choice D ($13$): adds $8$, which is a shift up.\n\n**Test Day Takeaway:** A vertical shift changes the maximum or minimum value by the size of the shift and leaves its $x$-coordinate alone.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For the function $v$, $v(x) = 26$ only when $x = 12$. The function $w$ is defined by $w(x) = v(x - 5) - 7$. If $w(a) = 19$, what is the value of $a$?",
      choices: [
        // distractor: subtracts the shift of 5 from 12 instead of adding it
        { id: "A", text: "$7$" },
        // distractor: stops at the input of v and forgets the shift
        { id: "B", text: "$12$" },
        { id: "C", text: "$17$" },
        // distractor: reports the output value of v instead of an input
        { id: "D", text: "$26$" }
      ],
      correctAnswer: "C",
      hint: "Undo the $-7$ first, then decide what input $v$ must receive.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $v(a - 5) = 19 + 7 = 26$, so $a - 5 = 12$ and $a = 17$.\n\n**The Full Solution:**\nStep 1: $w(a) = 19$ means $v(a - 5) - 7 = 19$, so $v(a - 5) = 26$.\nStep 2: The only input that gives $v$ an output of $26$ is $12$, so $a - 5 = 12$.\nStep 3: Therefore $a = 17$. Check: $w(17) = v(12) - 7 = 26 - 7 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): this computes $12 - 5$; the input of $v$ is $a - 5$, so $a$ is $5$ more than $12$.\n* Choice B ($12$): $12$ is the input that $v$ needs, not the value of $a$ itself.\n* Choice D ($26$): $26$ is an output of $v$; the question asks for an input of $w$.\n\n**Test Day Takeaway:** Peel the outside change off first, then solve for the input inside.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$f(x) = (x - 3)(x + 5)$\nWhen the graph of $y = f(x)$ is shifted up $9$ units in the $xy$-plane, the result is the graph of $y = g(x)$. What is the minimum value of $g(x)$?",
      choices: [
        // distractor: shifts the graph down 9 units instead of up
        { id: "A", text: "$-25$" },
        // distractor: finds the minimum value of f but forgets the shift
        { id: "B", text: "$-16$" },
        { id: "C", text: "$-7$" },
        // distractor: reports the x-coordinate of the vertex instead of the minimum value
        { id: "D", text: "$-1$" }
      ],
      correctAnswer: "C",
      hint: "The vertex lies halfway between the $x$-intercepts.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The vertex of $f$ is at $x = -1$, halfway between $3$ and $-5$, so the minimum of $f$ is $f(-1) = -16$ and the minimum of $g$ is $-16 + 9 = -7$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts of $f$ are $3$ and $-5$, so the vertex is at $x = \\frac{3 + (-5)}{2} = -1$.\nStep 2: The minimum value of $f$ is $f(-1) = (-4)(4) = -16$.\nStep 3: Shifting up $9$ units adds $9$ to every output, so the minimum value of $g$ is $-16 + 9 = -7$.\n\nCheck: $g(x) = (x - 3)(x + 5) + 9 = x^{2} + 2x - 6 = (x + 1)^{2} - 7$, whose minimum is $-7$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): subtracts $9$, which is a shift down.\n* Choice B ($-16$): is the minimum of $f$, before the shift.\n* Choice D ($-1$): is the $x$-coordinate of the vertex, not the minimum value.\n\n**Test Day Takeaway:** From factored form, the vertex is halfway between the zeros; a vertical shift then moves the minimum value by the shift.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "$r(x) = 4x - 9$\nIn the $xy$-plane, the graph of $y = s(x)$ is the result of shifting the graph of $y = r(x)$ up $5$ units. Which equation defines function $s$?",
      choices: [
        // distractor: shifts the graph down 5 units
        { id: "A", text: "$s(x) = 4x - 14$" },
        { id: "B", text: "$s(x) = 4x - 4$" },
        // distractor: replaces the constant -9 with 5
        { id: "C", text: "$s(x) = 4x + 5$" },
        // distractor: shifts the graph left 5 units by computing r(x + 5)
        { id: "D", text: "$s(x) = 4x + 11$" }
      ],
      correctAnswer: "B",
      hint: "Shifting up adds to the output of $r$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $s(x) = r(x) + 5 = 4x - 9 + 5 = 4x - 4$.\n\n**The Full Solution:**\nStep 1: Shifting a graph up $5$ units adds $5$ to every output, so $s(x) = r(x) + 5$.\nStep 2: $s(x) = (4x - 9) + 5 = 4x - 4$.\nStep 3: Check: $r(0) = -9$ and $s(0) = -4$, which is $5$ units higher ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($s(x) = 4x - 14$): this subtracts $5$, which shifts the graph down.\n* Choice C ($s(x) = 4x + 5$): this replaces $-9$ with $5$ instead of adding $5$ to it.\n* Choice D ($s(x) = 4x + 11$): this is $r(x + 5) = 4(x + 5) - 9$, which shifts the graph left $5$ units.\n\n**Test Day Takeaway:** A vertical shift changes only the constant term: add $k$ to move up $k$ units.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "$t(x) = |x|$\nThe graph of $y = t(x + 8)$ in the $xy$-plane is the graph of $y = t(x)$ translated in which of the following ways?",
      choices: [
        // distractor: treats the inside +8 as a vertical move down
        { id: "A", text: "$8$ units down" },
        { id: "B", text: "$8$ units left" },
        // distractor: moves in the direction of the sign inside
        { id: "C", text: "$8$ units right" },
        // distractor: treats the inside +8 as a vertical move up
        { id: "D", text: "$8$ units up" }
      ],
      correctAnswer: "B",
      hint: "Find the input that makes $x + 8$ equal to $0$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex of $y = |x + 8|$ is where $x + 8 = 0$, at $x = -8$: the graph moved $8$ units left.\n\n**The Full Solution:**\nStep 1: The $+8$ is inside $t$, so it changes the input and moves the graph sideways.\nStep 2: The vertex of $y = |x|$ is at $x = 0$; the vertex of $y = |x + 8|$ is where $x + 8 = 0$, so $x = -8$.\nStep 3: The vertex moved from $(0, 0)$ to $(-8, 0)$, which is $8$ units left. Check: $t(-8 + 8) = t(0) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$ units down): a vertical move needs a constant outside $t$, as in $t(x) - 8$.\n* Choice C ($8$ units right): inside changes work opposite to their sign; $+8$ moves the graph left.\n* Choice D ($8$ units up): $t(x) + 8$ would move the graph up; here the $8$ is added to the input.\n\n**Test Day Takeaway:** Inside the function, read the sign backward: $f(x + h)$ moves left $h$ and $f(x - h)$ moves right $h$.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "$f(x) = x^{3} - 2x$\nIn the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ left $4$ units and down $6$ units. Which equation defines $g$?",
      choices: [
        // distractor: replaces x with x - 4, which shifts right
        { id: "A", text: "$g(x) = (x - 4)^{3} - 2(x - 4) - 6$" },
        // distractor: adds 6, which shifts up
        { id: "B", text: "$g(x) = (x + 4)^{3} - 2(x + 4) + 6$" },
        // distractor: replaces x with x + 4 in only one term
        { id: "C", text: "$g(x) = (x + 4)^{3} - 2x - 6$" },
        { id: "D", text: "$g(x) = (x + 4)^{3} - 2(x + 4) - 6$" }
      ],
      correctAnswer: "D",
      hint: "Replace every $x$ in $f$ with the same new input, then adjust the output.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Left $4$ means $f(x + 4)$ and down $6$ means subtract $6$: $g(x) = (x + 4)^{3} - 2(x + 4) - 6$.\n\n**The Full Solution:**\nStep 1: Moving left $4$ units replaces $x$ with $x + 4$: $f(x + 4) = (x + 4)^{3} - 2(x + 4)$.\nStep 2: Moving down $6$ units subtracts $6$ from every output: $g(x) = f(x + 4) - 6$.\nStep 3: So $g(x) = (x + 4)^{3} - 2(x + 4) - 6$. Check: $f(0) = 0$, so $(0, 0)$ should move to $(-4, -6)$, and $g(-4) = 0 - 0 - 6 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = (x - 4)^{3} - 2(x - 4) - 6$): replacing $x$ with $x - 4$ moves the graph right, not left.\n* Choice B ($g(x) = (x + 4)^{3} - 2(x + 4) + 6$): adding $6$ moves the graph up, not down.\n* Choice C ($g(x) = (x + 4)^{3} - 2x - 6$): the new input must replace every $x$; changing only the cubed term is not a translation of $f$.\n\n**Test Day Takeaway:** A horizontal shift replaces every $x$ in the rule; a vertical shift adds to the whole rule.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "$u(x) = n(x - 10) - 24$\nThe function $u$ is defined by the given equation, where $n$ is another function. If $u(35) = 176$, what is the value of $n(25)$?",
      choices: [
        // distractor: subtracts 24 from 176 instead of adding it back
        { id: "A", text: "$152$" },
        // distractor: reports u(35) and ignores the -24
        { id: "B", text: "$176$" },
        // distractor: adds 24 and then also subtracts the shift of 10 from the output
        { id: "C", text: "$190$" },
        { id: "D", text: "$200$" }
      ],
      correctAnswer: "D",
      hint: "Substitute $x = 35$; the input to $n$ becomes $35 - 10$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** $u(35) = n(25) - 24$, so $n(25) = 176 + 24 = 200$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 35$: $u(35) = n(35 - 10) - 24 = n(25) - 24$.\nStep 2: So $n(25) - 24 = 176$.\nStep 3: Add $24$ to both sides: $n(25) = 200$. Check: $200 - 24 = 176 = u(35)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($152$): this subtracts $24$ from $176$; to undo $-24$, add $24$.\n* Choice B ($176$): this is $u(35)$ itself; the $-24$ still has to be undone.\n* Choice C ($190$): this adds $24$ but also subtracts $10$; the $10$ changes the input, not the output.\n\n**Test Day Takeaway:** Substitute the input first; the resulting equation shows which operation to undo.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "$f(x) = 7(2)^{x}$\nThe function $h$ is defined by $h(x) = f(x + 3)$. Which equation defines $h$?",
      choices: [
        // distractor: adds 3 to the base instead of to the exponent
        { id: "A", text: "$h(x) = 7(5)^{x}$" },
        // distractor: multiplies 7 by 2 only once, as if the input increased by 1
        { id: "B", text: "$h(x) = 14(2)^{x}$" },
        // distractor: multiplies 7 by the shift 3 instead of by 2^3
        { id: "C", text: "$h(x) = 21(2)^{x}$" },
        { id: "D", text: "$h(x) = 56(2)^{x}$" }
      ],
      correctAnswer: "D",
      hint: "Rewrite $(2)^{x + 3}$ as a product of two powers of $2$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** $h(x) = 7(2)^{x + 3} = 7(2)^{3}(2)^{x} = 56(2)^{x}$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $x + 3$ in the rule for $f$: $h(x) = f(x + 3) = 7(2)^{x + 3}$.\nStep 2: By the product rule for exponents, $(2)^{x + 3} = (2)^{3}(2)^{x} = 8(2)^{x}$.\nStep 3: So $h(x) = 7(8)(2)^{x} = 56(2)^{x}$. Check: $h(0) = 56$, and $f(3) = 7(8) = 56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h(x) = 7(5)^{x}$): this adds $3$ to the base; the $3$ belongs in the exponent.\n* Choice B ($h(x) = 14(2)^{x}$): this multiplies by $2$ only once, which matches a shift of $1$, not $3$.\n* Choice C ($h(x) = 21(2)^{x}$): this multiplies $7$ by $3$; raising the exponent by $3$ multiplies by $2^{3} = 8$.\n\n**Test Day Takeaway:** For an exponential function, $f(x + k)$ multiplies the starting value by the base raised to the power $k$.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Graph
  "Transformations from Graph": [
    {
      id: 1,
      difficulty: "easy",
      question: "The graph of $y = x^{2}$ in the $xy$-plane is translated so that its vertex is at $(5, -3)$. Which of the following equations represents the translated graph?",
      choices: [
        // distractor: swaps the roles of the two coordinates
        { id: "A", text: "$y = (x - 3)^{2} - 5$" },
        { id: "B", text: "$y = (x - 5)^{2} - 3$" },
        // distractor: flips the sign of the vertical shift
        { id: "C", text: "$y = (x - 5)^{2} + 3$" },
        // distractor: flips the sign of the horizontal shift
        { id: "D", text: "$y = (x + 5)^{2} - 3$" }
      ],
      correctAnswer: "B",
      hint: "Write the vertex form $y = (x - h)^{2} + k$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex $(h, k) = (5, -3)$ gives $y = (x - 5)^{2} - 3$.\n\n**The Full Solution:**\nStep 1: A parabola $y = x^{2}$ translated to vertex $(h, k)$ has equation $y = (x - h)^{2} + k$.\nStep 2: Here $h = 5$ and $k = -3$, so $y = (x - 5)^{2} - 3$.\nStep 3: Check: at $x = 5$, $y = 0 - 3 = -3$, and $y \\ge -3$ everywhere, so $(5, -3)$ is the vertex ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = (x - 3)^{2} - 5$): this puts the $y$-coordinate inside and the $x$-coordinate outside; its vertex is $(3, -5)$.\n* Choice C ($y = (x - 5)^{2} + 3$): this moves the vertex up $3$; its vertex is $(5, 3)$.\n* Choice D ($y = (x + 5)^{2} - 3$): this moves the vertex left $5$; its vertex is $(-5, -3)$.\n\n**Test Day Takeaway:** In $y = (x - h)^{2} + k$, the vertex is $(h, k)$: the sign inside is opposite to $h$, the sign outside matches $k$.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If the point $(3, 14)$ lies on the graph of $y = h(x)$ in the $xy$-plane, which point lies on the graph of $y = h(x) + 6$?",
      choices: [
        // distractor: moves the point left 6 as if the 6 were inside h
        { id: "A", text: "$(-3, 14)$" },
        // distractor: subtracts 6 from the y-coordinate
        { id: "B", text: "$(3, 8)$" },
        { id: "C", text: "$(3, 20)$" },
        // distractor: adds 6 to the x-coordinate
        { id: "D", text: "$(9, 14)$" }
      ],
      correctAnswer: "C",
      hint: "An outside $+6$ changes only the $y$-coordinate.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $h(3) = 14$, so at $x = 3$ the new graph has $y = 14 + 6 = 20$.\n\n**The Full Solution:**\nStep 1: The point $(3, 14)$ on $y = h(x)$ means $h(3) = 14$.\nStep 2: At $x = 3$, $y = h(3) + 6 = 14 + 6 = 20$.\nStep 3: So $(3, 20)$ is on the new graph, $6$ units above $(3, 14)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-3, 14)$): this treats the $6$ as a change to the input; adding $6$ outside $h$ leaves $x$ alone.\n* Choice B ($(3, 8)$): this subtracts $6$; adding $6$ to every output moves the graph up.\n* Choice D ($(9, 14)$): this adds $6$ to the $x$-coordinate, which would be a horizontal shift.\n\n**Test Day Takeaway:** $h(x) + k$ moves every point straight up $k$ units: $(a, b)$ becomes $(a, b + k)$.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ is shown. If $g(x) = f(x - 2) - 6$, what is the maximum value of $g(x)$?",
      diagram: { type: "quadraticVertex", params: { vertex: [-3, 5], a: -0.5, showVertex: true } },
      choices: [
        // distractor: gives the x-coordinate of the maximum of f
        { id: "A", text: "$-3$" },
        { id: "B", text: "$-1$" },
        // distractor: gives the maximum of f and ignores the -6
        { id: "C", text: "$5$" },
        // distractor: adds 6 instead of subtracting it
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "B",
      hint: "A horizontal shift does not change the greatest value; only the outside constant does.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The greatest value of $f$ is $5$, so the greatest value of $g$ is $5 - 6 = -1$.\n\n**The Full Solution:**\nStep 1: From the graph, the highest point of $y = f(x)$ is $(-3, 5)$, so the maximum value of $f(x)$ is $5$.\nStep 2: The inside $x - 2$ moves the graph right $2$ units, which does not change any output; the outside $-6$ lowers every output by $6$.\nStep 3: The maximum value of $g(x)$ is $5 - 6 = -1$. Check: $g(-1) = f(-3) - 6 = 5 - 6 = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): $-3$ is where $f$ reaches its maximum, not the maximum value.\n* Choice C ($5$): this is the maximum of $f$; the $-6$ outside lowers it.\n* Choice D ($11$): this adds $6$; the outside $-6$ moves the graph down.\n\n**Test Day Takeaway:** Horizontal shifts move where an extreme occurs; only vertical changes alter the extreme value.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ is shown. The function $g$ is defined by $g(x) = f(x - 3) - 6$. What is the minimum value of $g(x)$?",
      diagram: { type: "absoluteValue", params: { vertex: [-1, 4], slope: 1 } },
      choices: [
        // distractor: gives an x-value, moving the vertex x-coordinate -1 three units left instead of right
        { id: "A", text: "$-4$" },
        { id: "B", text: "$-2$" },
        // distractor: gives the x-value where g reaches its minimum, -1 + 3 = 2, instead of the minimum value
        { id: "C", text: "$2$" },
        // distractor: reports the minimum value of f and leaves out the - 6
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "B",
      hint: "The minimum of $g$ comes from the lowest point of the graph of $f$; only the outside change moves it up or down.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The lowest point of the graph of $f$ is $(-1, 4)$, so the minimum value of $f$ is $4$. Subtracting $6$ lowers every output by $6$, so the minimum value of $g$ is $4 - 6 = -2$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph of $y = f(x)$ is $(-1, 4)$, so the minimum value of $f(x)$ is $4$.\nStep 2: The $x - 3$ inside $f$ shifts the graph $3$ units right, which changes where the minimum occurs but not its value.\nStep 3: The $-6$ shifts the graph $6$ units down, so the minimum value of $g(x)$ is $4 - 6 = -2$. Check: $g(2) = f(2 - 3) - 6 = f(-1) - 6 = 4 - 6 = -2$, and since $f(x) \\ge 4$ for every $x$, $g(x) \\ge -2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): this is an $x$-value, and it moves $-1$ three units left instead of right.\n* Choice C ($2$): this is where $g$ reaches its minimum, $-1 + 3 = 2$, not the minimum value.\n* Choice D ($4$): this is the minimum value of $f$; the $-6$ still has to be applied.\n\n**Test Day Takeaway:** For $g(x) = f(x - h) + k$, the minimum value is the minimum of $f$ plus $k$; the shift inside the parentheses only moves where it happens.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For the function $f$, $f(4) = 12$. The function $g$ is defined by $g(x) = f(x - 6) - 1$. Which of the following must be true?",
      choices: [
        // distractor: uses x = 4 - 6, shifting the input the wrong way
        { id: "A", text: "$g(-2) = 11$" },
        // distractor: shifts the input the wrong way and adds 1 instead of subtracting it
        { id: "B", text: "$g(-2) = 13$" },
        { id: "C", text: "$g(10) = 11$" },
        // distractor: uses the right input but adds 1 instead of subtracting it
        { id: "D", text: "$g(10) = 13$" }
      ],
      correctAnswer: "C",
      hint: "Find the value of $x$ that makes $x - 6 = 4$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $g$ uses $f(4)$ when $x - 6 = 4$, so $x = 10$, and $g(10) = 12 - 1 = 11$.\n\n**The Full Solution:**\nStep 1: The only known value of $f$ is $f(4) = 12$, so the input to $f$ must be $4$: $x - 6 = 4$, which gives $x = 10$.\nStep 2: Substitute $x = 10$: $g(10) = f(10 - 6) - 1 = f(4) - 1$.\nStep 3: So $g(10) = 12 - 1 = 11$. Check: $g(-2) = f(-8) - 1$, and $f(-8)$ is not given, so choices A and B need not be true ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(-2) = 11$): this uses $x = 4 - 6 = -2$; but $g(-2) = f(-8) - 1$, which uses $f(-8)$, not $f(4)$.\n* Choice B ($g(-2) = 13$): this uses the wrong input and also adds $1$ instead of subtracting it.\n* Choice D ($g(10) = 13$): the input is right, but the $-1$ outside $f$ lowers the output to $11$.\n\n**Test Day Takeaway:** Find the input that makes the expression inside $f$ equal the known input, then apply the operation outside $f$.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The graph shown in the $xy$-plane is the result of a single translation of the graph of $y = x^{2}$. Which of the following describes this translation?",
      diagram: { type: "quadraticVertex", params: { vertex: [-4, 0], a: 1, showVertex: true } },
      choices: [
        // distractor: reads the horizontal move as vertical
        { id: "A", text: "$4$ units down" },
        { id: "B", text: "$4$ units left" },
        // distractor: reverses the direction of the move
        { id: "C", text: "$4$ units right" },
        // distractor: reads the horizontal move as vertical and reverses it
        { id: "D", text: "$4$ units up" }
      ],
      correctAnswer: "B",
      hint: "Compare the vertex shown with the vertex of $y = x^{2}$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The vertex moved from $(0, 0)$ to $(-4, 0)$: $4$ units left.\n\n**The Full Solution:**\nStep 1: The vertex of $y = x^{2}$ is $(0, 0)$.\nStep 2: The vertex of the graph shown is $(-4, 0)$; the $y$-coordinate is unchanged and the $x$-coordinate decreased by $4$.\nStep 3: So the translation is $4$ units left, and the graph shown is $y = (x + 4)^{2}$. Check: at $x = -4$, $y = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$ units down): the vertex is still on the $x$-axis, so the graph did not move down.\n* Choice C ($4$ units right): the vertex is to the left of the origin, at $x = -4$.\n* Choice D ($4$ units up): the vertex has $y = 0$, so the graph did not move up.\n\n**Test Day Takeaway:** Track one landmark point, usually the vertex, and read the move straight off its coordinates.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "In the $xy$-plane, the graph of $y = f(x)$ passes through the point $(2, -3)$. Which point must lie on the graph of $y = f(x + 4)$?",
      choices: [
        { id: "A", text: "$(-2, -3)$" },
        // distractor: applies the shift to both coordinates
        { id: "B", text: "$(-2, 1)$" },
        // distractor: treats the shift as vertical, adding 4 to the y-coordinate
        { id: "C", text: "$(2, 1)$" },
        // distractor: moves the point right 4 instead of left 4
        { id: "D", text: "$(6, -3)$" }
      ],
      correctAnswer: "A",
      hint: "Find the input $x$ for which $x + 4 = 2$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(x + 4) = f(2) = -3$ when $x = -2$, so $(-2, -3)$ is on the new graph.\n\n**The Full Solution:**\nStep 1: The point $(2, -3)$ means $f(2) = -3$.\nStep 2: On $y = f(x + 4)$, the input $x = -2$ gives $f(-2 + 4) = f(2) = -3$.\nStep 3: So $(-2, -3)$ is on the new graph: the point moved $4$ units left ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-2, 1)$): the inside change moves only the $x$-coordinate; the output is still $f(2) = -3$.\n* Choice C ($(2, 1)$): this is a vertical shift, $f(x) + 4$; the $4$ here is inside $f$.\n* Choice D ($(6, -3)$): adding $4$ inside moves the graph left, not right.\n\n**Test Day Takeaway:** $f(x + h)$ moves every point $(a, b)$ to $(a - h, b)$.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The graph of $y = f(x)$ is shown. For the function $g$, $g(x) = f(x - 3) - 4$. What are the coordinates of the maximum point of the graph of $y = g(x)$?",
      diagram: { type: "quadraticVertex", params: { vertex: [-1, 6], a: -1, showVertex: true } },
      choices: [
        // distractor: moves the maximum point left 3 instead of right 3
        { id: "A", text: "$(-4, 2)$" },
        // distractor: reverses the direction of both shifts
        { id: "B", text: "$(-4, 10)$" },
        { id: "C", text: "$(2, 2)$" },
        // distractor: adds 4 to the y-coordinate instead of subtracting it
        { id: "D", text: "$(2, 10)$" }
      ],
      correctAnswer: "C",
      hint: "Read the highest point of the graph of $f$, then move it horizontally and vertically.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The maximum point $(-1, 6)$ moves right $3$ and down $4$, to $(2, 2)$.\n\n**The Full Solution:**\nStep 1: From the graph, the maximum point (the vertex) of $y = f(x)$ is $(-1, 6)$.\nStep 2: The inside $x - 3$ moves the graph right $3$: $-1 + 3 = 2$. The outside $-4$ moves it down $4$: $6 - 4 = 2$.\nStep 3: The maximum point of $y = g(x)$ is $(2, 2)$. Check: $g(2) = f(-1) - 4 = 6 - 4 = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4, 2)$): $f(x - 3)$ moves the graph right, so the $x$-coordinate increases by $3$.\n* Choice B ($(-4, 10)$): this reverses both moves: left instead of right and up instead of down.\n* Choice D ($(2, 10)$): this moves the point up $4$; subtracting $4$ outside $f$ moves it down.\n\n**Test Day Takeaway:** Move the vertex with the transformation: the inside constant acts on $x$ with the opposite sign, the outside constant acts on $y$ as written.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $y = f(x)$ is translated right $3$ units and up $2$ units. Which equation represents the resulting graph?",
      choices: [
        // distractor: replaces x with x + 3, which moves the graph left
        { id: "A", text: "$y = f(x + 3) + 2$" },
        // distractor: swaps the two shifts
        { id: "B", text: "$y = f(x - 2) + 3$" },
        // distractor: subtracts 2, which moves the graph down
        { id: "C", text: "$y = f(x - 3) - 2$" },
        { id: "D", text: "$y = f(x - 3) + 2$" }
      ],
      correctAnswer: "D",
      hint: "A horizontal shift changes the input; a vertical shift changes the output.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Right $3$ replaces $x$ with $x - 3$, and up $2$ adds $2$ to the output: $y = f(x - 3) + 2$.\n\n**The Full Solution:**\nStep 1: Moving the graph right $3$ units means each output now occurs at an input $3$ greater, so replace $x$ with $x - 3$: $y = f(x - 3)$.\nStep 2: Moving the graph up $2$ units adds $2$ to every output: $y = f(x - 3) + 2$.\nStep 3: Check with a point: $(0, f(0))$ on the original graph should move to $(3, f(0) + 2)$, and substituting $x = 3$ gives $y = f(0) + 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = f(x + 3) + 2$): replacing $x$ with $x + 3$ moves the graph $3$ units left, not right.\n* Choice B ($y = f(x - 2) + 3$): this swaps the shifts, moving the graph right $2$ units and up $3$ units.\n* Choice C ($y = f(x - 3) - 2$): subtracting $2$ moves the graph down, not up.\n\n**Test Day Takeaway:** The graph of $y = f(x - h) + k$ is the graph of $y = f(x)$ moved right $h$ units and up $k$ units.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "$f(x) = x^{2} + 4x - 21$\nThe function $g$ is defined by $g(x) = f(x + 4)$. What is the sum of the $x$-coordinates of the $x$-intercepts of the graph of $y = g(x)$ in the $xy$-plane?",
      choices: [
        { id: "A", text: "$-12$" },
        // distractor: subtracts 4 from the sum once instead of from each intercept
        { id: "B", text: "$-8$" },
        // distractor: gives the sum for f and ignores the shift
        { id: "C", text: "$-4$" },
        // distractor: moves both intercepts right 4 instead of left 4
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      hint: "Find the $x$-intercepts of $f$, then move each one.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** $f$ has zeros $-7$ and $3$ (sum $-4$); each moves left $4$, so the sum drops by $8$ to $-12$.\n\n**The Full Solution:**\nStep 1: $x^{2} + 4x - 21 = (x + 7)(x - 3)$, so the graph of $f$ crosses the $x$-axis at $x = -7$ and $x = 3$.\nStep 2: $g(x) = f(x + 4)$ moves the graph left $4$, so its $x$-intercepts are at $x = -11$ and $x = -1$.\nStep 3: The sum is $-11 + (-1) = -12$. Check: $g(-11) = f(-7) = 0$ and $g(-1) = f(3) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-8$): this subtracts $4$ from the sum once; both intercepts move, so the sum decreases by $8$.\n* Choice C ($-4$): this is the sum of the $x$-intercepts of $f$; the graph of $g$ is shifted.\n* Choice D ($4$): this moves both intercepts right $4$; $f(x + 4)$ moves the graph left.\n\n**Test Day Takeaway:** A horizontal shift moves every $x$-intercept by the same amount, so a sum of two intercepts moves twice as far.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "For the function $f$, $f(x) = 0$ only when $x = -6$ or $x = 8$. The function $g$ is defined by $g(x) = f(x + 5)$. What is the sum of all values of $x$ for which $g(x) = 0$?",
      choices: [
        { id: "A", text: "$-8$" },
        // distractor: subtracts 5 from the sum of the zeros of f only once instead of once for each solution
        { id: "B", text: "$-3$" },
        // distractor: adds the zeros of f and ignores the shift
        { id: "C", text: "$2$" },
        // distractor: solves x - 5 = -6 and x - 5 = 8, shifting the wrong way
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "A",
      hint: "Set the whole input $x + 5$ equal to each zero of $f$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** $x + 5 = -6$ gives $x = -11$, and $x + 5 = 8$ gives $x = 3$; the sum is $-11 + 3 = -8$.\n\n**The Full Solution:**\nStep 1: $g(x) = 0$ means $f(x + 5) = 0$, which happens only when $x + 5 = -6$ or $x + 5 = 8$.\nStep 2: So $x = -11$ or $x = 3$.\nStep 3: The sum is $-11 + 3 = -8$. Check: $g(-11) = f(-6) = 0$ and $g(3) = f(8) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): this subtracts $5$ from $-6 + 8 = 2$ once; each of the two solutions is $5$ less than a zero of $f$, so the sum is $10$ less.\n* Choice C ($2$): this is $-6 + 8$, the sum of the zeros of $f$; the shift inside $f$ changes them.\n* Choice D ($12$): this uses $x - 5$, which gives $-1$ and $13$; adding $5$ inside $f$ moves the graph left, not right.\n\n**Test Day Takeaway:** The graph of $y = f(x + 5)$ is the graph of $y = f(x)$ moved $5$ units left, so every zero decreases by $5$.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "$f(x) = x^{2} + 6x + 2$\nThe function $g$ is defined by $g(x) = f(x + 4) - 9$. What is the vertex of the graph of $y = g(x)$ in the $xy$-plane?",
      choices: [
        { id: "A", text: "$(-7, -16)$" },
        // distractor: adds 9 to the y-coordinate instead of subtracting it
        { id: "B", text: "$(-7, 2)$" },
        // distractor: applies the vertical shift but not the horizontal shift
        { id: "C", text: "$(-3, -16)$" },
        // distractor: moves the vertex 4 units right instead of left
        { id: "D", text: "$(1, -16)$" }
      ],
      correctAnswer: "A",
      hint: "Find the vertex of the graph of $f$ first, then apply both shifts.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The graph of $f$ has vertex $(-3, -7)$; $f(x + 4) - 9$ moves it left $4$ and down $9$, to $(-7, -16)$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph of $y = x^{2} + 6x + 2$ has $x = -\\frac{6}{2(1)} = -3$, and $f(-3) = 9 - 18 + 2 = -7$, so the vertex is $(-3, -7)$.\nStep 2: Replacing $x$ with $x + 4$ moves the graph left $4$ units, and subtracting $9$ moves it down $9$ units.\nStep 3: The vertex of the graph of $g$ is $(-3 - 4, -7 - 9) = (-7, -16)$. Check: $g(x) = (x + 4)^{2} + 6(x + 4) + 2 - 9 = x^{2} + 14x + 33$, whose vertex has $x = -\\frac{14}{2} = -7$, and $g(-7) = 49 - 98 + 33 = -16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-7, 2)$): this adds $9$ to $-7$; subtracting $9$ outside $f$ moves the graph down.\n* Choice C ($(-3, -16)$): this moves the vertex down but leaves out the shift of $4$ units left.\n* Choice D ($(1, -16)$): this moves the vertex $4$ units right; adding $4$ inside $f$ moves the graph left.\n\n**Test Day Takeaway:** Find the vertex of $f$, then move it: $x + 4$ inside $f$ means $4$ units left, and $-9$ outside means $9$ units down.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Table
  "Transformations from Table": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$ and $g(x)$. Which of the following equations represents the relationship between $f$ and $g$?",
      questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["$1$", "$18$", "$26$"], ["$2$", "$23$", "$31$"], ["$3$", "$31$", "$39$"], ["$4$", "$40$", "$48$"]] },
      choices: [
        { id: "A", text: "$g(x) = f(x) + 8$" },
        // distractor: subtracts the gap instead of adding it
        { id: "B", text: "$g(x) = f(x) - 8$" },
        // distractor: treats a constant difference as a factor
        { id: "C", text: "$g(x) = 8f(x)$" },
        // distractor: puts the 8 inside f, which changes the input
        { id: "D", text: "$g(x) = f(x + 8)$" }
      ],
      correctAnswer: "A",
      hint: "Compare $g(x)$ with $f(x)$ in each row.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** In every row $g(x)$ is $8$ more than $f(x)$: $26 - 18 = 31 - 23 = 39 - 31 = 48 - 40 = 8$.\n\n**The Full Solution:**\nStep 1: Subtract in each row: $26 - 18 = 8$, $31 - 23 = 8$, $39 - 31 = 8$, and $48 - 40 = 8$.\nStep 2: The difference is the same for every $x$, so $g(x) = f(x) + 8$.\nStep 3: Check with $x = 3$: $f(3) + 8 = 31 + 8 = 39 = g(3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($g(x) = f(x) - 8$): every $g(x)$ is greater than $f(x)$, so $8$ is added, not subtracted.\n* Choice C ($g(x) = 8f(x)$): $8f(1) = 144$, not $26$; the rows differ by $8$, they are not $8$ times as large.\n* Choice D ($g(x) = f(x + 8)$): adding $8$ to the input would use $f(9)$ for $x = 1$; the table shows the outputs differ by $8$ at the same input.\n\n**Test Day Takeaway:** Same input, constant gap in output: that is a vertical shift, $f(x) + k$.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$g(x) = f(x) + 6$\nIn the given equation, $f$ is a function. If $f(10) = 88$, what is the value of $g(10)$?",
      choices: [
        // distractor: subtracts 6 instead of adding it
        { id: "A", text: "$82$" },
        // distractor: reports f(10) and ignores the +6
        { id: "B", text: "$88$" },
        { id: "C", text: "$94$" },
        // distractor: multiplies 88 by 6 instead of adding 6
        { id: "D", text: "$528$" }
      ],
      correctAnswer: "C",
      hint: "Substitute $10$ for $x$ in the given equation.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(10) = f(10) + 6 = 88 + 6 = 94$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 10$: $g(10) = f(10) + 6$.\nStep 2: It's given that $f(10) = 88$, so $g(10) = 88 + 6$.\nStep 3: $g(10) = 94$. Check: $94 - 88 = 6$, the amount the equation adds ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($82$): this subtracts $6$; the equation adds $6$ to the output of $f$.\n* Choice B ($88$): this is $f(10)$; the $+6$ still has to be applied.\n* Choice D ($528$): this multiplies $88$ by $6$; the equation adds $6$.\n\n**Test Day Takeaway:** Substitute the input into the outer rule first, then use the given value of $f$.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For the function $f$, selected values of $f(x)$ appear in the table. If $h(x) = f(x - 3) + 8$, what is the value of $h(3)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-3", "7"], ["0", "-2"], ["3", "4"], ["6", "11"]] } },
      choices: [
        // distractor: subtracts 8 instead of adding it
        { id: "A", text: "$-10$" },
        { id: "B", text: "$6$" },
        // distractor: uses f(3), ignoring the shift inside f
        { id: "C", text: "$12$" },
        // distractor: uses f(6), shifting the input the wrong way
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "B",
      hint: "Find the input that $f$ receives when $x = 3$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $h(3) = f(0) + 8 = -2 + 8 = 6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $h(3) = f(3 - 3) + 8 = f(0) + 8$.\nStep 2: The table gives $f(0) = -2$.\nStep 3: So $h(3) = -2 + 8 = 6$. Check: the input $3 - 3 = 0$ is in the table, and its output $-2$ raised by $8$ is $6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): this is $f(0) - 8$; the $+8$ raises the output.\n* Choice C ($12$): this is $f(3) + 8$; the input to $f$ is $3 - 3$, not $3$.\n* Choice D ($19$): this is $f(6) + 8$, which uses $3 + 3$ instead of $3 - 3$.\n\n**Test Day Takeaway:** Evaluate the inside first: $h(3)$ needs $f$ at $3 - 3$, and then the $+8$ applies to that output.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For the functions $f$ and $g$, the table shows four values of $x$ and their corresponding values of $f(x)$ and $g(x)$. Which equation could define $g$ in terms of $f$?",
      questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["$1$", "$12$", "$4$"], ["$2$", "$17$", "$7$"], ["$3$", "$24$", "$12$"], ["$4$", "$33$", "$19$"]] },
      choices: [
        // distractor: compares outputs at the same x, which gives no constant gap
        { id: "A", text: "$g(x) = f(x) - 5$" },
        // distractor: shifts the input the wrong way
        { id: "B", text: "$g(x) = f(x + 1) - 5$" },
        // distractor: adds 5 instead of subtracting it
        { id: "C", text: "$g(x) = f(x - 1) + 5$" },
        { id: "D", text: "$g(x) = f(x - 1) - 5$" }
      ],
      correctAnswer: "D",
      hint: "Compare each $g(x)$ with the value of $f$ one row earlier.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** $g(2) = 7 = 12 - 5 = f(1) - 5$, and the pattern holds in each later row: $g(x) = f(x - 1) - 5$.\n\n**The Full Solution:**\nStep 1: Same-row differences are $8$, $10$, $12$, $14$, not constant, so the relationship is not just a vertical shift.\nStep 2: Compare each $g(x)$ with $f(x - 1)$: $g(2) = 7 = 12 - 5$, $g(3) = 12 = 17 - 5$, $g(4) = 19 = 24 - 5$.\nStep 3: So $g(x) = f(x - 1) - 5$. Check: $f(3) - 5 = 24 - 5 = 19 = g(4)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = f(x) - 5$): at $x = 1$ this gives $12 - 5 = 7$, but $g(1) = 4$.\n* Choice B ($g(x) = f(x + 1) - 5$): at $x = 1$ this gives $f(2) - 5 = 12$, but $g(1) = 4$; the input moves the wrong way.\n* Choice C ($g(x) = f(x - 1) + 5$): at $x = 2$ this gives $f(1) + 5 = 17$, but $g(2) = 7$.\n\n**Test Day Takeaway:** When same-row gaps are not constant, compare across rows: a horizontal shift lines up $g(x)$ with a different row of $f$.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The table shows five values of $x$ and their corresponding values of $f(x)$. The function $g$ is defined by $g(x) = f(x - 1) + 5$. For what value of $x$ does $g(x) = 3$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$6$"], ["$1$", "$1$"], ["$2$", "$-2$"], ["$3$", "$8$"], ["$4$", "$3$"]] },
      choices: [
        // distractor: finds f(2) = -2 and then subtracts 1 from 2, shifting the input the wrong way
        { id: "A", text: "$1$" },
        // distractor: finds f(2) = -2 and reports 2, the input to f, instead of the value of x
        { id: "B", text: "$2$" },
        { id: "C", text: "$3$" },
        // distractor: ignores the + 5, looks for f(x - 1) = 3, finds f(4) = 3, and solves x - 1 = 4
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "C",
      hint: "First find the value $f(x - 1)$ must equal, then find that value in the table.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $g(x) = 3$ means $f(x - 1) + 5 = 3$, so $f(x - 1) = -2$. The table gives $f(2) = -2$, so $x - 1 = 2$ and $x = 3$.\n\n**The Full Solution:**\nStep 1: Set the definition of $g$ equal to $3$: $f(x - 1) + 5 = 3$, so $f(x - 1) = -2$.\nStep 2: In the table, the only input with output $-2$ is $2$, so $x - 1 = 2$.\nStep 3: Solve: $x = 3$. Check: $g(3) = f(3 - 1) + 5 = f(2) + 5 = -2 + 5 = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): finds the input $2$ but subtracts $1$ instead of adding it; $g(1) = f(0) + 5 = 11$.\n* Choice B ($2$): stops at the input to $f$; $2$ is the value of $x - 1$, not of $x$.\n* Choice D ($5$): drops the $+ 5$ and looks for an output of $3$, finding $f(4) = 3$; but $g(5) = f(4) + 5 = 8$.\n\n**Test Day Takeaway:** To solve $g(x) = c$ when $g$ is built from $f$, undo the outside change first to find the needed output of $f$, then undo the inside change to find $x$.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "$g(x) = f(x - 4)$\nThe function $g$ is defined by the given equation, where $f$ is another function. If $f(2) = 15$, what is the value of $g(6)$?",
      choices: [
        // distractor: reports the input of f instead of its output
        { id: "A", text: "$2$" },
        // distractor: subtracts 4 from the output instead of from the input
        { id: "B", text: "$11$" },
        { id: "C", text: "$15$" },
        // distractor: adds 4 to the output
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "C",
      hint: "Substitute $6$ for $x$ in the given equation.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(6) = f(6 - 4) = f(2) = 15$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$: $g(6) = f(6 - 4)$.\nStep 2: Since $6 - 4 = 2$, $g(6) = f(2)$.\nStep 3: It's given that $f(2) = 15$, so $g(6) = 15$. Check: the $4$ changes only the input to $f$, so the output $15$ is unchanged ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the input to $f$, not the value of $f$.\n* Choice B ($11$): this subtracts $4$ from the output; the $4$ is subtracted from the input.\n* Choice D ($19$): this adds $4$ to the output; nothing is added outside $f$.\n\n**Test Day Takeaway:** In $g(x) = f(x - 4)$, the $4$ changes the input only; the output of $f$ passes through unchanged.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "The table shows pairs of values of $x$ and $f(x)$ for the function $f$. The function $k$ is defined by $k(x) = f(x - 2)$. What is the value of $k(1)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-3", "7"], ["-1", "3"], ["1", "-1"], ["3", "-5"], ["5", "-9"]] } },
      choices: [
        // distractor: shifts the input in the wrong direction
        { id: "A", text: "$-5$" },
        // distractor: omits the shift
        { id: "B", text: "$-1$" },
        { id: "C", text: "$3$" },
        // distractor: applies the shift twice
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "C",
      hint: "Compute the input $f$ receives when $x = 1$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $k(1) = f(1 - 2) = f(-1) = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 1$: $k(1) = f(1 - 2) = f(-1)$.\nStep 2: The table shows $f(-1) = 3$.\nStep 3: Therefore $k(1) = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): this uses the row $x = 3$, adding $2$ to the input instead of subtracting it.\n* Choice B ($-1$): this uses the row $x = 1$ and never applies the shift.\n* Choice D ($7$): this uses the row $x = -3$, subtracting $2$ twice.\n\n**Test Day Takeaway:** With $f(x - c)$, compute the new input first; the table lookup comes after the arithmetic.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $g$ is defined by $g(x) = f(x) + k$, where $k$ is a constant. If $g(4) = 31$, what is the value of $g(7)$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$8$"], ["$4$", "$19$"], ["$7$", "$26$"], ["$10$", "$33$"]] },
      choices: [
        // distractor: reports f(7) without adding the constant k
        { id: "A", text: "$26$" },
        // distractor: repeats the given value g(4)
        { id: "B", text: "$31$" },
        { id: "C", text: "$38$" },
        // distractor: adds the constant to f(10) instead of f(7)
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "C",
      hint: "Use the one input where both $f$ and $g$ are known to find $k$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The table gives $f(4) = 19$, so $k = 31 - 19 = 12$ and $g(7) = 26 + 12 = 38$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$: $g(4) = f(4) + k$. The table gives $f(4) = 19$, so $31 = 19 + k$ and $k = 12$.\nStep 2: The same constant is added at every input, so $g(7) = f(7) + 12$.\nStep 3: The table gives $f(7) = 26$, so $g(7) = 26 + 12 = 38$. Check: $g(4) = 19 + 12 = 31$, matching the given value ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($26$): reports $f(7)$ without adding the constant $k$.\n* Choice B ($31$): repeats the given value of $g(4)$.\n* Choice D ($45$): adds $k$ to $f(10) = 33$, the value for the wrong input.\n\n**Test Day Takeaway:** Find the constant from the input where both functions are known, then apply it at the input the question asks about.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The table shows four values of $x$ and their corresponding values of $g(x)$, where $g(x) = f(x - 1) + 6$. What is the value of $f(3)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "20"], ["2", "13"], ["3", "8"], ["4", "5"]] } },
      choices: [
        { id: "A", text: "$-1$" },
        // distractor: ignores the shift and computes g(3) - 6
        { id: "B", text: "$2$" },
        // distractor: shifts the wrong way and computes g(2) - 6
        { id: "C", text: "$7$" },
        // distractor: uses the right row but adds 6 to g(4) instead of subtracting
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "A",
      hint: "Find the input $x$ that makes $x - 1$ equal to $3$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $f(3)$ appears in $g(x)$ when $x - 1 = 3$, so $g(4) = f(3) + 6$, and $f(3) = 5 - 6 = -1$.\n\n**The Full Solution:**\nStep 1: The expression $f(x - 1)$ equals $f(3)$ when $x - 1 = 3$, that is, when $x = 4$.\nStep 2: Substitute $x = 4$: $g(4) = f(3) + 6$. The table gives $g(4) = 5$, so $5 = f(3) + 6$.\nStep 3: Subtract $6$ from both sides: $f(3) = -1$. Check: $g(4) = f(3) + 6 = -1 + 6 = 5$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): ignores the shift and uses the row $x = 3$, computing $8 - 6$.\n* Choice C ($7$): shifts the wrong way and uses the row $x = 2$, computing $13 - 6$.\n* Choice D ($11$): uses the correct row but adds $6$ to $g(4)$ instead of subtracting it.\n\n**Test Day Takeaway:** To recover $f$ at a given input, solve for the $x$ that produces that input inside $g$, then undo the outside operation.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $g$ is defined by $g(x) = f(x - 4)$. What value of $x$ satisfies $g(x) = 27$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$9$"], ["$2$", "$15$"], ["$3$", "$27$"], ["$4$", "$44$"]] },
      choices: [
        // distractor: finds the input 3 where f(x) = 27, then subtracts 4 instead of adding
        { id: "A", text: "$-1$" },
        // distractor: stops at the input 3 where f(x) = 27
        { id: "B", text: "$3$" },
        { id: "C", text: "$7$" },
        // distractor: adds 4 to the output 27 instead of to the input
        { id: "D", text: "$31$" }
      ],
      correctAnswer: "C",
      hint: "First find the input at which $f$ equals $27$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The table gives $f(3) = 27$, so $g(x) = 27$ when $x - 4 = 3$, which gives $x = 7$.\n\n**The Full Solution:**\nStep 1: Since $g(x) = f(x - 4)$, the equation $g(x) = 27$ means $f(x - 4) = 27$.\nStep 2: The table shows $f(3) = 27$, and $27$ appears only once in the table, so $x - 4 = 3$.\nStep 3: Add $4$ to both sides: $x = 7$. Check: $g(7) = f(7 - 4) = f(3) = 27$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): finds $f(3) = 27$ but subtracts $4$ from $3$ instead of adding it.\n* Choice B ($3$): stops at the input of $f$ and never accounts for the shift.\n* Choice D ($31$): adds $4$ to the output $27$ rather than to the input.\n\n**Test Day Takeaway:** For $g(x) = f(x - h)$, each output of $f$ appears in $g$ at an input $h$ units greater.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "medium",
      question: "For the function $f$, $f(-2) = 5$, $f(0) = -1$, and $f(3) = 8$. If $h(x) = f(x + 2) - 3$, which of the following must be true?",
      choices: [
        { id: "A", text: "$h(1) = 5$" },
        // distractor: uses the right input but adds 3 instead of subtracting it
        { id: "B", text: "$h(1) = 11$" },
        // distractor: uses x = 3, ignoring the shift inside f
        { id: "C", text: "$h(3) = 5$" },
        // distractor: uses x = 3 + 2, shifting the input the wrong way
        { id: "D", text: "$h(5) = 5$" }
      ],
      correctAnswer: "A",
      hint: "For each choice, find which value of $f$ the expression $h(x)$ actually uses.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $h(1) = f(3) - 3 = 8 - 3 = 5$.\n\n**The Full Solution:**\nStep 1: $h(x)$ uses $f$ at $x + 2$, so a statement about $h$ can be checked only when $x + 2$ is $-2$, $0$, or $3$, that is, when $x = -4$, $-2$, or $1$.\nStep 2: Of the choices, only $h(1)$ uses a known value: $h(1) = f(1 + 2) - 3 = f(3) - 3$.\nStep 3: So $h(1) = 8 - 3 = 5$, which is choice A. Check: $h(3) = f(5) - 3$ and $h(5) = f(7) - 3$ use values of $f$ that are not given, so choices C and D need not be true ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($h(1) = 11$): the input is right, but this adds $3$; the $-3$ lowers the output.\n* Choice C ($h(3) = 5$): this ignores the shift; $h(3)$ uses $f(5)$, which is not given.\n* Choice D ($h(5) = 5$): this moves the input the wrong way; $h(5)$ uses $f(7)$, which is not given.\n\n**Test Day Takeaway:** $h(x) = f(x + 2) - 3$ reads $f$ at $x + 2$ and then lowers the output by $3$.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $g$ is defined by $g(x) = f(x - 3) + 4$, and $g(c) = 23$, where $c$ is a constant. What is the value of $c$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$2$", "$5$"], ["$4$", "$12$"], ["$6$", "$19$"], ["$8$", "$30$"]] },
      choices: [
        // distractor: subtracts 3 from 6 instead of adding it
        { id: "A", text: "$3$" },
        // distractor: finds the input of f, 6, and ignores the shift
        { id: "B", text: "$6$" },
        { id: "C", text: "$9$" },
        // distractor: reports the value of f(c - 3) instead of c
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "C",
      hint: "Undo the $+4$ first to find the value of $f(c - 3)$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $f(c - 3) = 23 - 4 = 19$; the table gives $f(6) = 19$, so $c - 3 = 6$ and $c = 9$.\n\n**The Full Solution:**\nStep 1: Since $g(c) = 23$, $f(c - 3) + 4 = 23$, so $f(c - 3) = 19$.\nStep 2: In the table, $f(x) = 19$ when $x = 6$, so $c - 3 = 6$.\nStep 3: So $c = 9$. Check: $g(9) = f(6) + 4 = 19 + 4 = 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this is $6 - 3$; since $c - 3 = 6$, add $3$ to get $c$.\n* Choice B ($6$): this is the input to $f$, $c - 3$, not $c$.\n* Choice D ($19$): this is the value of $f(c - 3)$, an output, not $c$.\n\n**Test Day Takeaway:** Undo the operation outside $f$, read the input from the table, and then undo the shift inside $f$.",
      skills: ["function-transformations"]
    },
    {
      id: 13,
      difficulty: "hard",
      question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $h$ is defined by $h(x) = f(x - 2) + 5$. What is the $y$-coordinate of the $y$-intercept of the graph of $y = h(x)$ in the $xy$-plane?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-2", "-9"], ["0", "3"], ["2", "-1"], ["4", "6"]] } },
      choices: [
        // distractor: subtracts 5 instead of adding it
        { id: "A", text: "$-14$" },
        { id: "B", text: "$-4$" },
        // distractor: uses f(2), shifting the input the wrong way
        { id: "C", text: "$4$" },
        // distractor: uses f(0), ignoring the shift inside f
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "B",
      hint: "The $y$-intercept is where $x = 0$; find the input that $f$ receives then.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $h(0) = f(-2) + 5 = -9 + 5 = -4$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of the graph of $y = h(x)$ is at $x = 0$: $h(0) = f(0 - 2) + 5 = f(-2) + 5$.\nStep 2: The table gives $f(-2) = -9$.\nStep 3: So $h(0) = -9 + 5 = -4$. Check: the point $(-2, -9)$ on the graph of $f$ moves right $2$ units and up $5$ units to $(0, -4)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): this is $f(-2) - 5$; the $+5$ raises the output.\n* Choice C ($4$): this is $f(2) + 5$, which uses $0 + 2$ instead of $0 - 2$.\n* Choice D ($8$): this is $f(0) + 5$; the input to $f$ is $0 - 2$, not $0$.\n\n**Test Day Takeaway:** To find a $y$-intercept, evaluate at $x = 0$; with $f(x - 2)$, that means reading $f$ at $-2$.",
      skills: ["function-transformations"]
    },
    {
      id: 14,
      difficulty: "hard",
      question: "The equation $f(x) = 7$ has exactly two solutions, $x = 3$ and $x = 8$. The function $g$ is defined by $g(x) = f(x + k)$, where $k$ is a constant. If $g(-2) = 7$ and $g(3) = 7$, what is the value of $k$?",
      choices: [
        // distractor: subtracts in the wrong order, computing 3 - 8 or -2 - 3
        { id: "A", text: "$-5$" },
        // distractor: notices g(3) = f(3) = 7 when k = 0 but ignores the condition g(-2) = 7
        { id: "B", text: "$0$" },
        { id: "C", text: "$5$" },
        // distractor: pairs -2 with 8 instead of 3, so g(3) would use f(13)
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      hint: "Each of $-2 + k$ and $3 + k$ must be one of the two solutions of $f(x) = 7$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The inputs $-2$ and $3$ must slide onto $3$ and $8$, which takes $k = 5$.\n\n**The Full Solution:**\nStep 1: $g(-2) = f(-2 + k)$ and $g(3) = f(3 + k)$, so $-2 + k$ and $3 + k$ must each be $3$ or $8$.\nStep 2: The two inputs $-2 + k$ and $3 + k$ differ by $5$, and so do $3$ and $8$, so $-2 + k = 3$ and $3 + k = 8$.\nStep 3: Either equation gives $k = 5$. Check: $g(-2) = f(3) = 7$ and $g(3) = f(8) = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): subtracts in the wrong order, computing $-2 - 3$ instead of $3 - (-2)$.\n* Choice B ($0$): makes $g(3) = f(3) = 7$ true but ignores $g(-2) = 7$, which would require $f(-2) = 7$.\n* Choice D ($10$): pairs $-2$ with $8$, but then $g(3) = f(13)$, which is not $7$.\n\n**Test Day Takeaway:** In $f(x + k)$, the input $x$ is read at $x + k$, so set each shifted input equal to a known solution and check both conditions.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Expression
  "Transformations from Expression": [
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = x^{2} + 5$\nThe graph of $y = g(x)$ is the result of shifting the graph of $y = f(x)$ down $12$ units in the $xy$-plane. Which equation defines $g$?",
      choices: [
        // distractor: shifts the graph 12 units left instead of down
        { id: "A", text: "$g(x) = (x + 12)^{2} + 5$" },
        // distractor: shifts the graph 12 units right instead of down
        { id: "B", text: "$g(x) = (x - 12)^{2} + 5$" },
        // distractor: shifts the graph 12 units up instead of down
        { id: "C", text: "$g(x) = x^{2} + 17$" },
        { id: "D", text: "$g(x) = x^{2} - 7$" }
      ],
      correctAnswer: "D",
      hint: "A vertical shift changes the output, not the input.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Shifting down $12$ units subtracts $12$ from every output: $g(x) = x^{2} + 5 - 12 = x^{2} - 7$.\n\n**The Full Solution:**\nStep 1: Shifting a graph down $12$ units lowers every $y$-value by $12$, so $g(x) = f(x) - 12$.\nStep 2: Substitute the given function: $g(x) = (x^{2} + 5) - 12$.\nStep 3: Combine the constants: $g(x) = x^{2} - 7$. Check: $f(0) = 5$ and $g(0) = -7$, which is $12$ units lower ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = (x + 12)^{2} + 5$): replaces $x$ with $x + 12$, a shift $12$ units left.\n* Choice B ($g(x) = (x - 12)^{2} + 5$): replaces $x$ with $x - 12$, a shift $12$ units right.\n* Choice C ($g(x) = x^{2} + 17$): adds $12$, a shift up instead of down.\n\n**Test Day Takeaway:** Up and down change the output, $f(x) \\pm k$; left and right change the input, $f(x \\pm h)$.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$f(x) = 3x^{2} - 4$\nThe function $g$ is defined by $g(x) = f(x) + 9$. What is the value of $g(2)$?",
      choices: [
        // distractor: subtracts 9 from f(2) instead of adding it
        { id: "A", text: "$-1$" },
        // distractor: stops at f(2) and never adds 9
        { id: "B", text: "$8$" },
        { id: "C", text: "$17$" },
        // distractor: squares 3x instead of x, computing (6)^2 - 4 + 9
        { id: "D", text: "$41$" }
      ],
      correctAnswer: "C",
      hint: "Evaluate $f(2)$ first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $f(2) = 3(4) - 4 = 8$, so $g(2) = 8 + 9 = 17$.\n\n**The Full Solution:**\nStep 1: Since $g(x) = f(x) + 9$, $g(2) = f(2) + 9$.\nStep 2: Evaluate $f(2)$: $3(2)^{2} - 4 = 3(4) - 4 = 8$.\nStep 3: Add $9$: $g(2) = 8 + 9 = 17$. Check: $g(x) = 3x^{2} + 5$, and $3(4) + 5 = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): subtracts $9$ from $f(2)$ instead of adding it.\n* Choice B ($8$): stops at $f(2)$ and never adds $9$.\n* Choice D ($41$): squares $3x$ instead of $x$, computing $6^{2} - 4 + 9$.\n\n**Test Day Takeaway:** To evaluate $f(x) + c$, find the value of $f$ at the input, then add $c$.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$f(x) = (x - 4)^{2} + 30$\nIn the $xy$-plane, the graph of $y = f(x - b)$, where $b$ is a constant, is a parabola with vertex $(11, 30)$. What is the value of $b$?",
      choices: [
        // distractor: reverses the direction of the shift and gets 4 - 11
        { id: "A", text: "$-7$" },
        // distractor: reports the x-coordinate of the vertex of the graph of f
        { id: "B", text: "$4$" },
        { id: "C", text: "$7$" },
        // distractor: adds the two x-coordinates, 11 + 4
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "C",
      hint: "Find the vertex of the graph of $y = f(x)$ first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex moves from $(4, 30)$ to $(11, 30)$, a shift of $7$ units right, so $b = 7$.\n\n**The Full Solution:**\nStep 1: The graph of $y = f(x)$ has vertex $(4, 30)$.\nStep 2: Replacing $x$ with $x - b$ gives $f(x - b) = (x - b - 4)^{2} + 30$, whose vertex has $x$-coordinate $b + 4$.\nStep 3: Set $b + 4 = 11$, so $b = 7$. Check: $f(x - 7) = (x - 11)^{2} + 30$, with vertex $(11, 30)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): reverses the direction of the shift, computing $4 - 11$.\n* Choice B ($4$): reports the $x$-coordinate of the vertex of the original graph.\n* Choice D ($15$): adds the two $x$-coordinates instead of finding their difference.\n\n**Test Day Takeaway:** The graph of $y = f(x - b)$ is the graph of $y = f(x)$ shifted $b$ units right, so $b$ is the change in the $x$-coordinate of any point.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$f(x) = x^{2} + 4x - 5$\nThe function $u$ is defined by $u(x) = f(x - 1)$. Which expression is equivalent to $u(x)$?",
      choices: [
        // distractor: subtracts 1 from the output, finding f(x) - 1
        { id: "A", text: "$x^{2} + 4x - 6$" },
        // distractor: writes (x - 1)^2 as x^2 + 1, dropping the middle term
        { id: "B", text: "$x^{2} + 4x - 8$" },
        { id: "C", text: "$x^{2} + 2x - 8$" },
        // distractor: replaces x with x + 1 instead of x - 1
        { id: "D", text: "$x^{2} + 6x$" }
      ],
      correctAnswer: "C",
      hint: "Replace every $x$ in $f(x)$ with $x - 1$, then expand.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $u(x) = (x - 1)^{2} + 4(x - 1) - 5 = x^{2} - 2x + 1 + 4x - 4 - 5 = x^{2} + 2x - 8$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $x - 1$: $u(x) = (x - 1)^{2} + 4(x - 1) - 5$.\nStep 2: Expand: $(x - 1)^{2} = x^{2} - 2x + 1$ and $4(x - 1) = 4x - 4$, so $u(x) = x^{2} - 2x + 1 + 4x - 4 - 5$.\nStep 3: Combine like terms: $u(x) = x^{2} + 2x - 8$. Check: $u(1) = f(0) = -5$, and $1^{2} + 2(1) - 8 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} + 4x - 6$): this is $f(x) - 1$; the $-1$ belongs inside $f$, with $x$.\n* Choice B ($x^{2} + 4x - 8$): this writes $(x - 1)^{2}$ as $x^{2} + 1$ and drops the middle term, $-2x$.\n* Choice D ($x^{2} + 6x$): this is $f(x + 1)$; the input is $x - 1$.\n\n**Test Day Takeaway:** To find $f(x - 1)$, replace every $x$ with $x - 1$ and expand; $(x - 1)^{2}$ has a middle term, $-2x$.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y = f(x)$ has exactly two x-intercepts, $(-6, 0)$ and $(10, 0)$. The function $g$ is defined by $g(x) = f(x - k)$, where $k$ is a positive constant. If the graph of $y = g(x)$ passes through the point $(-2, 0)$, what is the value of $k$?",
      choices: [
        { id: "A", text: "$4$" },
        // distractor: computes 10 - 2 instead of solving -2 - k = 10
        { id: "B", text: "$8$" },
        // distractor: solves -2 - k = 10, which gives k = -12, and drops the negative sign
        { id: "C", text: "$12$" },
        // distractor: finds the distance between the two x-intercepts of f
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "A",
      hint: "At an x-intercept of $g$, the input $-2 - k$ must equal an x-intercept of $f$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** $g(-2) = f(-2 - k) = 0$, so $-2 - k = -6$ or $-2 - k = 10$; $k = 4$ or $k = -12$, and $k$ is positive, so $k = 4$.\n\n**The Full Solution:**\nStep 1: Since $(-2, 0)$ is on the graph of $g$, $g(-2) = f(-2 - k) = 0$.\nStep 2: The value of $f$ is $0$ only at $x = -6$ and $x = 10$, so $-2 - k = -6$, which gives $k = 4$, or $-2 - k = 10$, which gives $k = -12$.\nStep 3: Since $k$ is positive, $k = 4$. Check: $g(-2) = f(-2 - 4) = f(-6) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): this is $10 - 2$; solving $-2 - k = 10$ gives $k = -12$, not $8$.\n* Choice C ($12$): $-2 - k = 10$ gives $k = -12$, which is not positive; dropping the sign does not make it a solution.\n* Choice D ($16$): this is the distance from $-6$ to $10$, which does not involve the point $(-2, 0)$.\n\n**Test Day Takeaway:** Each x-intercept of the graph of $y = f(x - k)$ is $k$ more than an x-intercept of the graph of $y = f(x)$.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "$g(x) = f(x) - 15$\nFor the given function $g$, $g(20) = 62$. What is the value of $f(20)$?",
      choices: [
        // distractor: applies the 15 to the input, computing 20 - 15
        { id: "A", text: "$5$" },
        // distractor: subtracts 15 from 62 instead of adding it
        { id: "B", text: "$47$" },
        // distractor: repeats the given value g(20)
        { id: "C", text: "$62$" },
        { id: "D", text: "$77$" }
      ],
      correctAnswer: "D",
      hint: "Substitute $x = 20$ into the given equation.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** $62 = f(20) - 15$, so $f(20) = 77$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 20$ into the given equation: $g(20) = f(20) - 15$.\nStep 2: Replace $g(20)$ with $62$: $62 = f(20) - 15$.\nStep 3: Add $15$ to both sides: $f(20) = 77$. Check: $77 - 15 = 62$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): applies the $15$ to the input, computing $20 - 15$.\n* Choice B ($47$): subtracts $15$ from $62$ instead of adding it.\n* Choice C ($62$): repeats the given value of $g(20)$.\n\n**Test Day Takeaway:** The outputs of $f(x) - 15$ are $15$ less than the outputs of $f$, so recover $f$ by adding $15$ back.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "In the $xy$-plane, the graph of $y = f(x)$ crosses the x-axis only at $(8, 0)$. If $g(x) = f(x + 2)$, what is the x-intercept of the graph of $y = g(x)$?",
      choices: [
        // distractor: divides 8 by 2
        { id: "A", text: "$(4, 0)$" },
        { id: "B", text: "$(6, 0)$" },
        // distractor: shifts the intercept 2 units right instead of left
        { id: "C", text: "$(10, 0)$" },
        // distractor: multiplies 8 by 2
        { id: "D", text: "$(16, 0)$" }
      ],
      correctAnswer: "B",
      hint: "Solve $x + 2 = 8$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(x) = 0$ when $x + 2 = 8$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: $f$ equals $0$ only at $8$, so $g(x) = f(x + 2)$ equals $0$ only when $x + 2 = 8$.\nStep 2: Subtract $2$ from both sides: $x = 6$.\nStep 3: The x-intercept of the graph of $y = g(x)$ is $(6, 0)$. Check: $g(6) = f(6 + 2) = f(8) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(4, 0)$): divides $8$ by $2$, treating the shift as a compression.\n* Choice C ($(10, 0)$): moves the intercept $2$ units right instead of left.\n* Choice D ($(16, 0)$): multiplies $8$ by $2$, treating the shift as a stretch.\n\n**Test Day Takeaway:** The graph of $y = f(x + 2)$ is the graph of $y = f(x)$ shifted $2$ units left, so every x-intercept moves left $2$.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "$g(x) = f(x + 7) - 4$\nThe graph of $y = g(x)$ in the $xy$-plane passes through the point $(0, 11)$. What is the value of $f(7)$?",
      choices: [
        // distractor: subtracts 4 from 11 instead of adding it
        { id: "A", text: "$7$" },
        // distractor: reports g(0) instead of f(7)
        { id: "B", text: "$11$" },
        { id: "C", text: "$15$" },
        // distractor: adds the shift 7 to 11 instead of undoing the 4
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      hint: "Substitute $x = 0$ into the given equation.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $g(0) = f(7) - 4 = 11$, so $f(7) = 15$.\n\n**The Full Solution:**\nStep 1: The point $(0, 11)$ is on the graph, so $g(0) = 11$.\nStep 2: Substitute $x = 0$ into the given equation: $g(0) = f(0 + 7) - 4 = f(7) - 4$, so $f(7) - 4 = 11$.\nStep 3: Add $4$ to both sides: $f(7) = 15$. Check: $g(0) = 15 - 4 = 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts $4$ from $11$ instead of adding it.\n* Choice B ($11$): reports $g(0)$, not $f(7)$.\n* Choice D ($18$): adds the shift $7$ to $11$; the $7$ changes the input, not the output.\n\n**Test Day Takeaway:** Substitute the known point into the transformed equation; the inside shift tells you which value of $f$ you have found.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "$f(x) = \\dfrac{6}{x - 2}$\nThe function $f$ is defined by the given equation. If $g(x) = f(x + 4) - 1$, which equation defines $g$?",
      choices: [
        // distractor: substitutes x - 4 for x instead of x + 4, getting (x - 4) - 2 = x - 6
        { id: "A", text: "$g(x) = \\dfrac{6}{x - 6} - 1$" },
        { id: "B", text: "$g(x) = \\dfrac{6}{x + 2} - 1$" },
        // distractor: replaces the whole denominator x - 2 with x + 4 instead of substituting x + 4 for x
        { id: "C", text: "$g(x) = \\dfrac{6}{x + 4} - 1$" },
        // distractor: adds 2 instead of subtracting it, getting (x + 4) + 2 = x + 6
        { id: "D", text: "$g(x) = \\dfrac{6}{x + 6} - 1$" }
      ],
      correctAnswer: "B",
      hint: "Replace every $x$ in $f(x)$ with $x + 4$, simplify the denominator, then subtract $1$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(x + 4) = \\dfrac{6}{(x + 4) - 2} = \\dfrac{6}{x + 2}$, so $g(x) = \\dfrac{6}{x + 2} - 1$.\n\n**The Full Solution:**\nStep 1: Substitute $x + 4$ for $x$ in $f$: $f(x + 4) = \\dfrac{6}{(x + 4) - 2}$.\nStep 2: Simplify the denominator: $(x + 4) - 2 = x + 2$, so $f(x + 4) = \\dfrac{6}{x + 2}$.\nStep 3: Subtract $1$: $g(x) = \\dfrac{6}{x + 2} - 1$. Check: $g(1) = f(5) - 1 = \\dfrac{6}{3} - 1 = 1$, and $\\dfrac{6}{1 + 2} - 1 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = \\dfrac{6}{x - 6} - 1$): substitutes $x - 4$ instead of $x + 4$.\n* Choice C ($g(x) = \\dfrac{6}{x + 4} - 1$): replaces the whole denominator with $x + 4$, losing the $-2$ that is already there.\n* Choice D ($g(x) = \\dfrac{6}{x + 6} - 1$): adds $2$ to $x + 4$ instead of subtracting it.\n\n**Test Day Takeaway:** To find $f(x + h)$, substitute $x + h$ for every $x$ in $f$ and simplify; the constants already in the rule stay.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "$f(x) = x^{2} - 3x$\nThe function $g$ is defined by $g(x) = f(x + 2)$. Which expression is equivalent to $g(x)$?",
      choices: [
        // distractor: expands (x + 2)^2 as x^2 + 4
        { id: "A", text: "$x^{2} - 3x - 2$" },
        // distractor: adds 2 to the output, computing f(x) + 2
        { id: "B", text: "$x^{2} - 3x + 2$" },
        { id: "C", text: "$x^{2} + x - 2$" },
        // distractor: distributes -3 over (x + 2) as -3x + 6
        { id: "D", text: "$x^{2} + x + 10$" }
      ],
      correctAnswer: "C",
      hint: "Replace every $x$ in $f(x)$ with $x + 2$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** $(x + 2)^{2} - 3(x + 2) = x^{2} + 4x + 4 - 3x - 6 = x^{2} + x - 2$.\n\n**The Full Solution:**\nStep 1: Substitute $x + 2$ for $x$: $g(x) = (x + 2)^{2} - 3(x + 2)$.\nStep 2: Expand: $(x + 2)^{2} = x^{2} + 4x + 4$ and $-3(x + 2) = -3x - 6$.\nStep 3: Combine like terms: $g(x) = x^{2} + x - 2$. Check with $x = 1$: $g(1) = f(3) = 9 - 9 = 0$, and $1 + 1 - 2 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} - 3x - 2$): expands $(x + 2)^{2}$ as $x^{2} + 4$, dropping the middle term.\n* Choice B ($x^{2} - 3x + 2$): adds $2$ to the output, which is $f(x) + 2$, not $f(x + 2)$.\n* Choice D ($x^{2} + x + 10$): distributes $-3$ over $(x + 2)$ as $-3x + 6$.\n\n**Test Day Takeaway:** For $f(x + h)$, substitute $x + h$ for every $x$ and expand fully; a quick check at one value of $x$ catches sign errors.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "$f(x) = (x + 4)(x - 2)^{2}$\nIn the $xy$-plane, the graph of $y = h(x)$ is the result of translating the graph of $y = f(x)$ down $5$ units. If the graph of $y = h(x)$ passes through the point $(1, k)$, where $k$ is a constant, what is the value of $k$?",
      choices: [
        // distractor: evaluates (1 - 2)^2 as -2, so f(1) = -10, then subtracts 5
        { id: "A", text: "$-15$" },
        { id: "B", text: "$0$" },
        // distractor: finds f(1) = 5 and forgets the translation
        { id: "C", text: "$5$" },
        // distractor: adds 5, which translates the graph up
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      hint: "Find $f(1)$ first; the translation changes only the output.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(1) = (5)(-1)^{2} = 5$, and moving down $5$ units gives $k = 5 - 5 = 0$.\n\n**The Full Solution:**\nStep 1: Translating the graph down $5$ units subtracts $5$ from every output, so $h(x) = f(x) - 5$.\nStep 2: $f(1) = (1 + 4)(1 - 2)^{2} = (5)(1) = 5$.\nStep 3: So $k = h(1) = 5 - 5 = 0$. Check: $(1, 5)$ is on the graph of $f$, and moving it down $5$ units gives $(1, 0)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): this evaluates $(1 - 2)^{2}$ as $-2$; the square of $-1$ is $1$.\n* Choice C ($5$): this is $f(1)$; the translation down $5$ units still has to be applied.\n* Choice D ($10$): adding $5$ moves the graph up, not down.\n\n**Test Day Takeaway:** A vertical translation changes only the $y$-coordinates: evaluate $f$ at the given $x$, then shift the result.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The function $f$ has a maximum value of $5$ at $x = 1$ and a minimum value of $-3$ at $x = 6$. The function $g$ is defined by $g(x) = f(x - 2) + 3$. Which of the following must be true?",
      choices: [
        // distractor: moves the maximum 2 units left instead of right
        { id: "A", text: "The maximum value of $g$ is $8$, at $x = -1$." },
        { id: "B", text: "The maximum value of $g$ is $8$, at $x = 3$." },
        // distractor: moves the minimum right but leaves out the +3
        { id: "C", text: "The minimum value of $g$ is $-3$, at $x = 8$." },
        // distractor: moves the minimum 2 units left instead of right
        { id: "D", text: "The minimum value of $g$ is $0$, at $x = 4$." }
      ],
      correctAnswer: "B",
      hint: "Track the maximum and minimum points: the shift inside $f$ moves $x$, and the shift outside moves $y$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $g(x) = f(x - 2) + 3$ moves every point of the graph of $f$ right $2$ and up $3$, so the maximum $(1, 5)$ moves to $(3, 8)$.\n\n**The Full Solution:**\nStep 1: Replacing $x$ with $x - 2$ moves the graph of $f$ right $2$ units, and adding $3$ moves it up $3$ units.\nStep 2: The maximum of $f$, $5$ at $x = 1$, becomes a maximum of $5 + 3 = 8$ at $x = 1 + 2 = 3$.\nStep 3: The minimum of $f$, $-3$ at $x = 6$, becomes a minimum of $-3 + 3 = 0$ at $x = 6 + 2 = 8$, so only choice B matches. Check: $g(3) = f(1) + 3 = 5 + 3 = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the maximum value $8$ is right, but it moves left instead of right; it occurs at $x = 3$.\n* Choice C: this moves the minimum right but leaves out the $+3$, which raises every output; the minimum value of $g$ is $0$.\n* Choice D: the minimum value $0$ is right, but it moves left instead of right; it occurs at $x = 8$.\n\n**Test Day Takeaway:** Under $g(x) = f(x - h) + k$, every point $(a, b)$ on the graph of $f$ moves to $(a + h, b + k)$, including the maximum and the minimum.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Difficult Transformations
  // Based on "System of Equations Method" and "Answer Choice Method" from videos
  "Difficult Transformations": [
    {
      id: 1,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown. For what value of $c$ does the graph of $y = f(x) + c$ have exactly one point in common with the x-axis?",
      diagram: { type: "parabola", params: { vertex: { h: 3, k: 4 }, a: -1, xRange: [-2, 8], yRange: [-8, 6], showVertex: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
      choices: [
        { id: "A", text: "$-4$" },
        // distractor: negates the x-coordinate of the vertex, 3, instead of its y-coordinate
        { id: "B", text: "$-3$" },
        // distractor: reports the x-coordinate of the vertex
        { id: "C", text: "$3$" },
        // distractor: reports the maximum value 4 without negating it
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      hint: "The parabola opens downward, so only its highest point can touch the x-axis alone.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** The vertex is $(3, 4)$, so the graph must move down $4$ units: $c = -4$.\n\n**The Full Solution:**\nStep 1: The graph is a parabola that opens downward with vertex $(3, 4)$, so the maximum value of $f$ is $4$.\nStep 2: Adding $c$ shifts every point vertically by $c$, so the maximum value of $f(x) + c$ is $4 + c$.\nStep 3: A downward-opening parabola meets the x-axis exactly once only when its vertex is on the x-axis, so $4 + c = 0$ and $c = -4$. Check: $f(x) - 4$ has vertex $(3, 0)$ and is negative for every other $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): negates the $x$-coordinate of the vertex instead of its $y$-coordinate.\n* Choice C ($3$): reports the $x$-coordinate of the vertex; a vertical shift depends on the height.\n* Choice D ($4$): reports the maximum value without negating it; adding $4$ moves the graph farther from the x-axis.\n\n**Test Day Takeaway:** Exactly one point in common with the x-axis means the vertex lands on the x-axis, so shift by the opposite of its $y$-coordinate.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 2,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown, where $f(x) = \\dfrac{a}{x + b}$ and $a$ and $b$ are constants. If $h(x) = f(x - 2)$, which equation defines $h$?",
      diagram: { type: "rationalFunction", params: { a: 10, b: -4, showPoints: [[6, 5], [9, 2]] } },
      choices: [
        // distractor: subtracts 2 from a instead of from the input x
        { id: "A", text: "$h(x) = \\dfrac{8}{x - 4}$" },
        // distractor: adds 2 to b, which moves the graph 2 units left
        { id: "B", text: "$h(x) = \\dfrac{10}{x - 2}$" },
        // distractor: is the equation of f, with no shift
        { id: "C", text: "$h(x) = \\dfrac{10}{x - 4}$" },
        { id: "D", text: "$h(x) = \\dfrac{10}{x - 6}$" }
      ],
      correctAnswer: "D",
      hint: "Use the two marked points to find $a$ and $b$, then replace $x$ with $x - 2$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~45s):** The marked points give $f(x) = \\dfrac{10}{x - 4}$, so $h(x) = \\dfrac{10}{(x - 2) - 4} = \\dfrac{10}{x - 6}$.\n\n**The Full Solution:**\nStep 1: The points $(6, 5)$ and $(9, 2)$ are on the graph: $\\dfrac{a}{6 + b} = 5$ and $\\dfrac{a}{9 + b} = 2$, so $5(6 + b) = 2(9 + b)$, $3b = -12$, and $b = -4$; then $a = 5(6 - 4) = 10$.\nStep 2: So $f(x) = \\dfrac{10}{x - 4}$.\nStep 3: $h(x) = f(x - 2) = \\dfrac{10}{(x - 2) - 4} = \\dfrac{10}{x - 6}$. Check: $(6, 5)$ should move $2$ units right to $(8, 5)$, and $h(8) = \\dfrac{10}{2} = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h(x) = \\dfrac{8}{x - 4}$): this subtracts $2$ from $a$; the shift changes the input $x$, not the numerator.\n* Choice B ($h(x) = \\dfrac{10}{x - 2}$): this adds $2$ to $b$ instead of subtracting it, which moves the graph $2$ units left.\n* Choice C ($h(x) = \\dfrac{10}{x - 4}$): this is $f(x)$ itself, before the shift.\n\n**Test Day Takeaway:** To find $f(x - 2)$, replace every $x$ in the rule for $f$ with $x - 2$; the graph moves $2$ units right.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 3,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown, where $f(x) = (x - h)^{2} + k$ and $h$ and $k$ are constants. The function $g$ is defined by $g(x) = f(x + 6)$, and $g(x) = (x - p)^{2} + q$, where $p$ and $q$ are constants. What is the value of $p + q$?",
      diagram: { type: "quadraticVertex", params: { vertex: [4, -5], a: 1, showVertex: true } },
      choices: [
        { id: "A", text: "$-7$" },
        // distractor: takes p = 2, reading x + 6 inside (x - p) with the wrong sign
        { id: "B", text: "$-3$" },
        // distractor: uses the vertex of the graph of f, 4 + (-5)
        { id: "C", text: "$-1$" },
        // distractor: shifts the vertex 6 units right, using p = 10
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      hint: "Read the vertex from the graph, then decide which way $f(x + 6)$ moves it.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** The vertex $(4, -5)$ moves $6$ units left to $(-2, -5)$, so $p + q = -2 + (-5) = -7$.\n\n**The Full Solution:**\nStep 1: The graph shows the vertex $(4, -5)$, so $h = 4$ and $k = -5$.\nStep 2: $g(x) = f(x + 6) = (x + 6 - 4)^{2} - 5 = (x + 2)^{2} - 5$.\nStep 3: In the form $(x - p)^{2} + q$, $p = -2$ and $q = -5$, so $p + q = -7$. Check: $g(-2) = f(4) = -5$, the minimum of $f$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): writes $(x + 2)^{2}$ as $(x - 2)^{2}$, taking $p = 2$.\n* Choice C ($-1$): adds the coordinates of the vertex of the graph of $f$, ignoring the shift.\n* Choice D ($5$): shifts the vertex $6$ units right, to $(10, -5)$.\n\n**Test Day Takeaway:** Adding inside the function, $f(x + 6)$, moves the graph left; match the result to $(x - p)^{2} + q$ carefully, since $p$ is the opposite of the number added.",
      skills: ["function-transformations", "vertex-form"]
    },
    {
      id: 4,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown, where $f(x) = |x - c| + d$ and $c$ and $d$ are constants. If $g(x) = f(x + 3) - 4$, what is the $y$-coordinate of the $y$-intercept of the graph of $y = g(x)$?",
      diagram: { type: "absoluteValue", params: { vertex: [-1, 6], slope: 1 } },
      choices: [
        // distractor: evaluates f(0) - 4, leaving out the shift inside f
        { id: "A", text: "$3$" },
        // distractor: evaluates f(-3) - 4, shifting the wrong way
        { id: "B", text: "$4$" },
        { id: "C", text: "$6$" },
        // distractor: finds f(3) = 10 and forgets to subtract 4
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      hint: "Read $c$ and $d$ from the vertex, then find $g(0)$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The vertex $(-1, 6)$ gives $f(x) = |x + 1| + 6$, so $g(0) = f(3) - 4 = 10 - 4 = 6$.\n\n**The Full Solution:**\nStep 1: The graph of $y = |x - c| + d$ has its vertex at $(c, d)$; the vertex shown is $(-1, 6)$, so $f(x) = |x + 1| + 6$.\nStep 2: The $y$-intercept of the graph of $g$ is at $x = 0$: $g(0) = f(0 + 3) - 4 = f(3) - 4$.\nStep 3: $f(3) = |3 + 1| + 6 = 10$, so $g(0) = 10 - 4 = 6$. Check: $g(x) = |x + 4| + 2$, and $g(0) = 4 + 2 = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this is $f(0) - 4$; the input to $f$ is $0 + 3$, not $0$.\n* Choice B ($4$): this is $f(-3) - 4$, which uses $x - 3$ inside $f$ instead of $x + 3$.\n* Choice D ($10$): this is $f(3)$; the $-4$ outside $f$ still has to be applied.\n\n**Test Day Takeaway:** To find a $y$-intercept, evaluate the function at $x = 0$; with $f(x + 3)$, that means reading $f$ at $3$.",
      skills: ["function-transformations", "combined-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown. The function $g$ is defined by $g(x) = f(x + 1) - 7$. If $g(a) = 0$, what is the value of $a$?",
      diagram: { type: "piecewiseLinear", params: { points: [[0, 1], [3, 10], [7, 8], [12, 11]], xRange: [0, 12], yRange: [0, 12], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
      choices: [
        { id: "A", text: "$1$" },
        // distractor: finds the input where f(x) = 7 and ignores the shift
        { id: "B", text: "$2$" },
        // distractor: shifts the wrong way, adding 1 to the input 2
        { id: "C", text: "$3$" },
        // distractor: reports the output 7 instead of an input
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "A",
      hint: "First find the value of $f(a + 1)$, then read the graph.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** $f(a + 1) - 7 = 0$ gives $f(a + 1) = 7$; the graph reaches $7$ only at $x = 2$, so $a + 1 = 2$ and $a = 1$.\n\n**The Full Solution:**\nStep 1: Set $g(a) = 0$: $f(a + 1) - 7 = 0$, so $f(a + 1) = 7$.\nStep 2: On the graph, $f(x) = 7$ only at $x = 2$: the segment from $(0, 1)$ to $(3, 10)$ rises $3$ units per unit and passes through $(2, 7)$, and the rest of the graph stays at or above $8$.\nStep 3: So $a + 1 = 2$ and $a = 1$. Check: $g(1) = f(2) - 7 = 7 - 7 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): finds the input where $f(x) = 7$ but ignores the shift inside $f(a + 1)$.\n* Choice C ($3$): shifts the wrong way, adding $1$ to $2$.\n* Choice D ($7$): reports the needed output of $f$ instead of the input.\n\n**Test Day Takeaway:** Undo the operation outside $f$ to get a value of $f$, read its input from the graph, then undo the shift inside $f$.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 6,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ consists of the four points shown. Which of the following is a point on the graph of $y = f(x + 3) - 4$?",
      diagram: { type: "coordinatePoints", params: { points: [[-4, 3], [-1, -2], [2, 5], [5, 1]], xMin: -8, xMax: 8, yMin: -8, yMax: 8 } },
      choices: [
        // distractor: moves the point (2, 5) left 4 and down 3, swapping the two shifts
        { id: "A", text: "$(-2, 2)$" },
        { id: "B", text: "$(-1, 1)$" },
        // distractor: moves the point (2, 5) left 3 but up 4 instead of down
        { id: "C", text: "$(-1, 9)$" },
        // distractor: moves the point (2, 5) right 3 instead of left
        { id: "D", text: "$(5, 1)$" }
      ],
      correctAnswer: "B",
      hint: "Each point $(a, b)$ on the graph of $f$ moves to $(a - 3, b - 4)$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Move each point $3$ units left and $4$ units down: $(2, 5)$ moves to $(-1, 1)$.\n\n**The Full Solution:**\nStep 1: The graph of $y = f(x + 3) - 4$ is the graph of $y = f(x)$ moved $3$ units left and $4$ units down, so each point $(a, b)$ moves to $(a - 3, b - 4)$.\nStep 2: The four points move to $(-7, -1)$, $(-4, -6)$, $(-1, 1)$, and $(2, -3)$.\nStep 3: Of these, only $(-1, 1)$ is a choice. Check: at $x = -1$, $y = f(-1 + 3) - 4 = f(2) - 4 = 5 - 4 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, 2)$): this moves $(2, 5)$ left $4$ and down $3$, swapping the two shifts.\n* Choice C ($(-1, 9)$): this moves $(2, 5)$ up $4$; subtracting $4$ outside $f$ moves the graph down.\n* Choice D ($(5, 1)$): this moves $(2, 5)$ right $3$; adding $3$ inside $f$ moves the graph left.\n\n**Test Day Takeaway:** Adding a number inside $f$ moves the graph left; subtracting a number outside $f$ moves it down.",
      skills: ["function-transformations", "combined-transformations"]
    },
    {
      id: 7,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown, and its x-intercepts are $(-4, 0)$ and $(2, 0)$. The function $g$ is defined by $g(x) = f(x - 5)$. What is the sum of the x-coordinates of the x-intercepts of the graph of $y = g(x)$?",
      diagram: { type: "quadraticIntercepts", params: { intercepts: [-4, 2] } },
      choices: [
        // distractor: solves x + 5 = -4 and x + 5 = 2, shifting the wrong way
        { id: "A", text: "$-12$" },
        // distractor: adds the x-intercepts of f and ignores the shift
        { id: "B", text: "$-2$" },
        // distractor: adds 5 to the sum only once instead of once for each intercept
        { id: "C", text: "$3$" },
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "D",
      hint: "Each x-intercept of the graph of $g$ is where $x - 5$ equals an x-intercept of the graph of $f$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** Moving the graph $5$ units right moves the x-intercepts to $(1, 0)$ and $(7, 0)$, and $1 + 7 = 8$.\n\n**The Full Solution:**\nStep 1: $g(x) = 0$ when $f(x - 5) = 0$, which happens when $x - 5 = -4$ or $x - 5 = 2$.\nStep 2: So $x = 1$ or $x = 7$.\nStep 3: The sum is $1 + 7 = 8$. Check: $g(1) = f(-4) = 0$ and $g(7) = f(2) = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): this uses $x + 5$, which gives $-9$ and $-3$; subtracting $5$ inside $f$ moves the graph right.\n* Choice B ($-2$): this is $-4 + 2$, the sum for $f$; the shift moves both intercepts.\n* Choice C ($3$): this adds $5$ to $-2$ once; each of the two intercepts moves $5$ units, so the sum increases by $10$.\n\n**Test Day Takeaway:** The graph of $y = f(x - 5)$ is the graph of $y = f(x)$ moved $5$ units right, so each x-intercept increases by $5$.",
      skills: ["function-transformations", "x-intercepts"]
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The graph of $y = f(x)$ is shown, where $f(x) = \\dfrac{a}{x + b}$ and $a$ and $b$ are constants. The graph of $y = p(x)$ is the result of shifting the graph of $y = f(x)$ up $4$ units. Which equation defines $p$?",
      diagram: { type: "rationalFunction", params: { a: 15, b: 3, showPoints: [[0, 5], [2, 3]] } },
      choices: [
        // distractor: shifts down instead of up
        { id: "A", text: "$p(x) = \\dfrac{15}{x + 3} - 4$" },
        { id: "B", text: "$p(x) = \\dfrac{15}{x + 3} + 4$" },
        // distractor: adds 4 to the input, a shift left
        { id: "C", text: "$p(x) = \\dfrac{15}{x + 7}$" },
        // distractor: adds 4 to the numerator instead of to the whole function
        { id: "D", text: "$p(x) = \\dfrac{19}{x + 3}$" }
      ],
      correctAnswer: "B",
      hint: "Use the two marked points to find $a$ and $b$ first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The points $(0, 5)$ and $(2, 3)$ give $f(x) = \\dfrac{15}{x + 3}$, and a shift up $4$ adds $4$ to the output.\n\n**The Full Solution:**\nStep 1: From $(0, 5)$: $\\dfrac{a}{b} = 5$, so $a = 5b$. From $(2, 3)$: $\\dfrac{a}{2 + b} = 3$, so $a = 6 + 3b$.\nStep 2: Then $5b = 6 + 3b$, so $b = 3$ and $a = 15$; thus $f(x) = \\dfrac{15}{x + 3}$.\nStep 3: Shifting up $4$ units adds $4$ to every output: $p(x) = \\dfrac{15}{x + 3} + 4$. Check: $p(0) = 5 + 4 = 9$, which is $4$ units above $(0, 5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: subtracts $4$, which shifts the graph down.\n* Choice C: adds $4$ to the input, which shifts the graph $4$ units left.\n* Choice D: adds $4$ to the numerator, which stretches the graph instead of shifting it.\n\n**Test Day Takeaway:** A vertical shift adds to the whole function, outside every other operation.",
      skills: ["function-transformations", "answer-choice-method"]
    },
    {
      id: 9,
      difficulty: "hard",
      question: "The three points shown lie on the graph of $y = f(x)$. The function $g$ is defined by $g(x) = f(x - 4) + 7$. What is the value of $g(2)$?",
      diagram: { type: "coordinatePoints", params: { points: [[-2, 3], [2, -4], [6, 1]] } },
      choices: [
        // distractor: subtracts 7 instead of adding it
        { id: "A", text: "$-4$" },
        // distractor: uses f(2), ignoring the shift inside f
        { id: "B", text: "$3$" },
        // distractor: uses f(6), shifting the input the wrong way
        { id: "C", text: "$8$" },
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "D",
      hint: "$g(2)$ uses the value of $f$ at $2 - 4$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** $g(2) = f(-2) + 7 = 3 + 7 = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $g(2) = f(2 - 4) + 7 = f(-2) + 7$.\nStep 2: The point $(-2, 3)$ is on the graph of $f$, so $f(-2) = 3$.\nStep 3: So $g(2) = 3 + 7 = 10$. Check: the point $(-2, 3)$ moves right $4$ units and up $7$ units to $(2, 10)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): this is $f(-2) - 7$; the $+7$ raises the output.\n* Choice B ($3$): this is $f(2) + 7 = -4 + 7$; the input to $f$ is $2 - 4$, not $2$.\n* Choice C ($8$): this is $f(6) + 7 = 1 + 7$, which uses $2 + 4$ instead of $2 - 4$.\n\n**Test Day Takeaway:** Evaluate the inside first: $g(2)$ reads $f$ at $2 - 4$, and then the $+7$ applies to that output.",
      skills: ["function-transformations", "combined-transformations"]
    }
  ]
};
