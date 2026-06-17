// Practice questions for Transformations module
// Questions are organized by SECTION (question type)

export const transformationsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x², what transformation does f(x) + 3 represent?",
      choices: [
        { id: "A", text: "Shift 3 units right" },
        { id: "B", text: "Shift 3 units left" },
        { id: "C", text: "Shift 3 units up" },
        { id: "D", text: "Shift 3 units down" }
      ],
      correctAnswer: "C",
      hint: "When a constant is added outside the function, it affects the y-values (outputs). Think about what happens to every point's height.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A constant added *outside* the function, $f(x)+3$, raises every output by $3$ — a shift up $3$.\n\n**The Full Solution:**\nStep 1: In $f(x)+3$, the $+3$ acts on the output. Every $y$-value gains $3$, while $x$ stays put.\nStep 2: A point $(a,b)$ on $f$ becomes $(a,\\,b+3)$. Check: $(0,0)$ moves to $(0,3)$ and $(2,4)$ moves to $(2,7)$ — the whole graph rises $3$.\n\n**Why the wrong answers are tempting:**\n* Choice A (right $3$): a horizontal move needs an *inside* change, $f(x-3)$ — not this outside $+3$.\n* Choice B (left $3$): left is $f(x+3)$, again an inside change; the $+3$ here is outside.\n* Choice D (down $3$): $f(x)-3$ shifts down. A $+$ outside means up, not down.\n\n**Test Day Takeaway:** Outside changes act on $y$ and read *directly*: $f(x)+k$ goes up by $k$, $f(x)-k$ goes down by $k$.",
      skills: ['function-transformations']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If g(x) = √x, what transformation does g(x - 2) represent?",
      choices: [
        { id: "A", text: "Shift 2 units right" },
        { id: "B", text: "Shift 2 units left" },
        { id: "C", text: "Shift 2 units up" },
        { id: "D", text: "Shift 2 units down" }
      ],
      correctAnswer: "A",
      hint: "Changes inside the parentheses affect horizontal movement, and they work opposite to what you might expect. If you subtract, which way does the graph move?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Subtracting *inside* the function, $g(x-2)$, shifts the graph right $2$ — inside changes move opposite to the sign.\n\n**The Full Solution:**\nStep 1: $g(x-2)=\\sqrt{x-2}$ replaces $x$ with $x-2$, an inside change, so the effect is horizontal.\nStep 2: The rule $f(x-h)$ shifts *right* by $h$. Here $h=2$, so the graph moves right $2$.\nStep 3: Confirm with the start point: $\\sqrt{x}$ begins at $(0,0)$; $\\sqrt{x-2}$ needs $x-2\\ge 0$, so $x\\ge 2$ — the start is now $(2,0)$, exactly right $2$.\n\n**Why the wrong answers are tempting:**\n* Choice B (left $2$): the classic trap — \"minus\" feels like left, but inside changes flip; $g(x+2)$ goes left.\n* Choice C (up $2$): vertical shifts come from outside, like $g(x)+2$; this change is inside.\n* Choice D (down $2$): down is $g(x)-2$, an outside change, not this inside subtraction.\n\n**Test Day Takeaway:** Inside changes move *opposite* to the sign: $f(x-h)$ goes right $h$, $f(x+h)$ goes left $h$.",
      skills: ['function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of y = -f(x) is a reflection of y = f(x) across the:",
      choices: [
        { id: "A", text: "x-axis" },
        { id: "B", text: "y-axis" },
        { id: "C", text: "line y = x" },
        { id: "D", text: "origin" }
      ],
      correctAnswer: "A",
      hint: "The negative sign is outside the function, so it affects the outputs (y-values). Negating all y-values flips the graph over which axis?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** A negative *outside* the function, $y=-f(x)$, flips every output sign — a reflection across the $x$-axis.\n\n**The Full Solution:**\nStep 1: $-f(x)$ multiplies each output by $-1$, an outside change affecting $y$.\nStep 2: A point $(a,b)$ becomes $(a,-b)$: $x$ stays, $y$ flips. Points above the axis drop below and vice versa.\nStep 3: That is precisely a mirror across the $x$-axis. Check: $f(x)=x^2$ hits $(2,4)$, so $-f(x)=-x^2$ hits $(2,-4)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y$-axis): that reflection is $f(-x)$, with the negative *inside* the function.\n* Choice C (line $y=x$): reflecting over $y=x$ swaps $x$ and $y$ (the inverse), not a sign flip.\n* Choice D (origin): an origin reflection needs $-f(-x)$ — both input and output negated.\n\n**Test Day Takeaway:** Negative *outside* reflects across the $x$-axis; negative *inside* ($f(-x)$) reflects across the $y$-axis.",
      skills: ['function-transformations']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If h(x) = |x|, what does 2h(x) do to the graph?",
      choices: [
        { id: "A", text: "Horizontal compression by 2" },
        { id: "B", text: "Horizontal stretch by 2" },
        { id: "C", text: "Vertical stretch by 2" },
        { id: "D", text: "Vertical compression by 2" }
      ],
      correctAnswer: "C",
      hint: "Multiplying outside the function affects the y-values. When you multiply every output by 2, does the graph get taller or shorter?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiplying *outside* by a factor greater than $1$, $2h(x)$, doubles every output — a vertical stretch by $2$.\n\n**The Full Solution:**\nStep 1: $2h(x)=2|x|$ multiplies each output by $2$, an outside change affecting $y$.\nStep 2: Every point moves farther from the $x$-axis: $(3,3)$ becomes $(3,6)$, $(1,1)$ becomes $(1,2)$. The graph grows taller.\nStep 3: A factor $>1$ outside is a vertical stretch.\n\n**Why the wrong answers are tempting:**\n* Choice A (horizontal compression): that needs a multiplier *inside*, $h(2x)$; the $2$ here is outside.\n* Choice B (horizontal stretch): a horizontal stretch uses a fractional inside factor, $h\\left(\\frac{1}{2}x\\right)$.\n* Choice D (vertical compression): compression needs $0<a<1$; since $a=2>1$, the graph stretches.\n\n**Test Day Takeaway:** For $a\\cdot f(x)$ (outside): $|a|>1$ stretches vertically, $0<|a|<1$ compresses vertically.",
      skills: ['function-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which transformation does f(-x) represent?",
      choices: [
        { id: "A", text: "Reflection across x-axis" },
        { id: "B", text: "Reflection across y-axis" },
        { id: "C", text: "Shift left" },
        { id: "D", text: "Shift right" }
      ],
      correctAnswer: "B",
      hint: "The negative sign is inside the function, affecting the inputs (x-values). Negating x-values swaps left and right sides of the graph.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A negative *inside* the function, $f(-x)$, swaps left and right — a reflection across the $y$-axis.\n\n**The Full Solution:**\nStep 1: $f(-x)$ negates the input, an inside change affecting horizontal behavior.\nStep 2: A point $(a,b)$ becomes $(-a,b)$: $y$ stays, $x$ flips sign. The left and right halves trade places.\nStep 3: That swap is a mirror across the $y$-axis. Check: $f(x)=\\sqrt{x}$ hits $(4,2)$, so $f(-x)=\\sqrt{-x}$ hits $(-4,2)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x$-axis): that reflection is $-f(x)$, with the negative *outside*.\n* Choice C (shift left): a left shift is $f(x+c)$; negating the input mirrors, it does not translate.\n* Choice D (shift right): a right shift is $f(x-c)$; $f(-x)$ produces a mirror image, not a slide.\n\n**Test Day Takeaway:** Negative *inside* reflects across the $y$-axis; negative *outside* reflects across the $x$-axis. The negative sits on the same side as the axis it names.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(x) = 3x + 2, what transformation does f(x) - 7 represent?",
      choices: [
        { id: "A", text: "Shift 7 units right" },
        { id: "B", text: "Shift 7 units left" },
        { id: "C", text: "Shift 7 units up" },
        { id: "D", text: "Shift 7 units down" }
      ],
      correctAnswer: "D",
      hint: "When a constant is subtracted outside the function, it affects the y-values (outputs). Subtracting makes outputs smaller.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Subtracting a constant *outside*, $f(x)-7$, drops every output by $7$ — a shift down $7$.\n\n**The Full Solution:**\nStep 1: $f(x)-7$ subtracts $7$ from each output, an outside change affecting $y$.\nStep 2: Every point $(x,y)$ becomes $(x,\\,y-7)$. Check: $f(0)=3(0)+2=2$, so $f(0)-7=-5$ — the point $(0,2)$ drops to $(0,-5)$, a fall of $7$.\n\n**Why the wrong answers are tempting:**\n* Choice A (right $7$): right is $f(x-7)$, an inside change; this $-7$ is outside.\n* Choice B (left $7$): left is $f(x+7)$, also inside; outside changes never move horizontally.\n* Choice C (up $7$): up would be $f(x)+7$. The minus sign means down.\n\n**Test Day Takeaway:** Outside changes read directly: $f(x)+k$ goes up, $f(x)-k$ goes down — no sign flip.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If g(x) = |x|, what transformation does g(x + 5) represent?",
      choices: [
        { id: "A", text: "Shift 5 units right" },
        { id: "B", text: "Shift 5 units left" },
        { id: "C", text: "Shift 5 units up" },
        { id: "D", text: "Shift 5 units down" }
      ],
      correctAnswer: "B",
      hint: "Changes inside the parentheses affect horizontal movement, and they work opposite to what you expect. Adding shifts which way?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding a constant *inside* the function, $g(x+5)$, shifts the graph left $5$ — inside changes move opposite to the sign.\n\n**The Full Solution:**\nStep 1: $g(x+5)=|x+5|$ replaces $x$ with $x+5$, an inside change, so the effect is horizontal.\nStep 2: The rule $f(x+h)$ shifts *left* by $h$. Here $h=5$, so the graph moves left $5$.\nStep 3: Confirm with the vertex: $|x|$ has its vertex at $(0,0)$; for $|x+5|$ set $x+5=0\\Rightarrow x=-5$. New vertex $(-5,0)$, exactly left $5$.\n\n**Why the wrong answers are tempting:**\n* Choice A (right $5$): the common trap — \"$+5$\" feels like right, but inside changes flip; $+5$ goes left.\n* Choice C (up $5$): up needs an outside change, $g(x)+5=|x|+5$; this $+5$ is inside.\n* Choice D (down $5$): down is $g(x)-5=|x|-5$, also outside; inside changes are always horizontal.\n\n**Test Day Takeaway:** Inside changes move *opposite* to the sign: $f(x+h)$ goes left $h$, $f(x-h)$ goes right $h$.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The function f(x) = x² has its vertex at (0, 0). What is the vertex of f(x - 4) + 6?",
      choices: [
        { id: "A", text: "(4, 6)" },
        { id: "B", text: "(-4, 6)" },
        { id: "C", text: "(4, -6)" },
        { id: "D", text: "(-4, -6)" }
      ],
      correctAnswer: "A",
      hint: "Apply both transformations: (x - 4) affects horizontal position (remember the opposite rule), and +6 affects vertical position.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(x-4)+6$ shifts the vertex right $4$ (inside, opposite sign) and up $6$ (outside, direct): $(0,0)\\to(4,6)$.\n\n**The Full Solution:**\nStep 1: The inside $(x-4)$ moves the graph right $4$, so the $x$-coordinate goes $0\\to 4$.\nStep 2: The outside $+6$ moves the graph up $6$, so the $y$-coordinate goes $0\\to 6$.\nStep 3: New vertex $(4,6)$. Check: $(x-4)^2+6$ at $x=4$ gives $(0)^2+6=6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $(-4,6)$: read $x-4$ as a left shift; inside changes go opposite, so $x-4$ moves right.\n* Choice C $(4,-6)$: correct horizontal move, but $+6$ shifts up, not down.\n* Choice D $(-4,-6)$: both directions misread.\n\n**Test Day Takeaway:** For $f(x-h)+k$, the vertex moves from $(x_0,y_0)$ to $(x_0+h,\\,y_0+k)$.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "If h(x) = √x, what does the transformation below do to the graph?",
      questionFormula: { fraction: { numerator: "1", denominator: "3" }, textAfter: "h(x)" },
      choices: [
        { id: "A", text: "Horizontal compression by 3" },
        { id: "B", text: "Horizontal stretch by 3" },
        { id: "C", text: "Vertical stretch by 3" },
        { id: "D", text: "Vertical compression by 3" }
      ],
      correctAnswer: "D",
      hint: "Multiplying outside the function affects the y-values. When you multiply every output by 1/3, does the graph get taller or shorter?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Multiplying *outside* by a fraction between $0$ and $1$, $\\frac{1}{3}h(x)$, shrinks every output — a vertical compression by $3$.\n\n**The Full Solution:**\nStep 1: $\\frac{1}{3}h(x)=\\frac{1}{3}\\sqrt{x}$ multiplies each output by $\\frac{1}{3}$, an outside change affecting $y$.\nStep 2: Since $0<\\frac{1}{3}<1$, every point pulls toward the $x$-axis — the graph gets shorter. Check: $h(9)=3$ becomes $\\frac{1}{3}(3)=1$.\nStep 3: A factor between $0$ and $1$ outside is a vertical compression.\n\n**Why the wrong answers are tempting:**\n* Choice A (horizontal compression): that needs a multiplier $>1$ *inside*, $h(3x)$; this factor is outside.\n* Choice B (horizontal stretch): a horizontal stretch uses a fractional inside factor, $h\\left(\\frac{1}{3}x\\right)$.\n* Choice C (vertical stretch): a stretch needs a factor $>1$, like $3h(x)$; since $\\frac{1}{3}<1$, it compresses.\n\n**Test Day Takeaway:** For $a\\cdot f(x)$ (outside): $0<|a|<1$ compresses vertically, $|a|>1$ stretches vertically.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "Which expression represents a reflection across the x-axis AND a shift up 4 units?",
      choices: [
        { id: "A", text: "-f(x) + 4" },
        { id: "B", text: "-f(x) - 4" },
        { id: "C", text: "f(-x) + 4" },
        { id: "D", text: "-f(x + 4)" }
      ],
      correctAnswer: "A",
      hint: "Reflection across x-axis means negating the output (-f(x)). Shifting up means adding to the result. Combine these in the right order.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Reflect across the $x$-axis ($-f(x)$), then shift up $4$ (add $4$ outside): $-f(x)+4$.\n\n**The Full Solution:**\nStep 1: Reflection across the $x$-axis negates the output: $f(x)\\to -f(x)$.\nStep 2: Shifting up $4$ adds $4$ after: $-f(x)\\to -f(x)+4$.\nStep 3: Check with $(1,2)$ on $f$: reflect to $(1,-2)$, then up $4$ to $(1,2)$ — both moves applied. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-f(x)-4$): reflects correctly but shifts *down* $4$; the minus gives the wrong vertical direction.\n* Choice C ($f(-x)+4$): $f(-x)$ reflects across the *$y$-axis*, not the $x$-axis; the negative must be outside.\n* Choice D ($-f(x+4)$): reflects across the $x$-axis but the inside $+4$ shifts *left* $4$ — there is no up shift.\n\n**Test Day Takeaway:** $-f(x)+k$ combines an $x$-axis reflection with a vertical shift: negate the output, then add $k$.",
      skills: ['function-transformations']
    }
  ],

  // Section: Transformations from Graph
  "Transformations from Graph": [
    {
      id: 1,
      difficulty: "easy",
      question: "The vertex of f(x) = x² is at (0, 0). If a transformed parabola has vertex at (3, -2), which transformation was applied?",
      choices: [
        { id: "A", text: "f(x - 3) - 2" },
        { id: "B", text: "f(x + 3) - 2" },
        { id: "C", text: "f(x - 3) + 2" },
        { id: "D", text: "f(x + 3) + 2" }
      ],
      correctAnswer: "A",
      hint: "Track each coordinate separately. To move the x-coordinate right, you subtract inside the parentheses. To move the y-coordinate down, you subtract outside.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** To move the vertex from $(0,0)$ to $(3,-2)$: right $3$ is $f(x-3)$ (opposite sign), down $2$ is $-2$ outside, so $f(x-3)-2$.\n\n**The Full Solution:**\nStep 1: The $x$-coordinate goes $0\\to 3$ (right $3$). A right shift of $3$ is $f(x-3)$, since inside changes flip the sign.\nStep 2: The $y$-coordinate goes $0\\to -2$ (down $2$). A down shift of $2$ subtracts $2$ outside: $f(x-3)-2$.\nStep 3: Check: $(x-3)^2-2$ at $x=3$ gives $(0)^2-2=-2$. Vertex $(3,-2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x+3)-2$): $f(x+3)$ shifts *left* $3$, landing the vertex at $(-3,-2)$.\n* Choice C ($f(x-3)+2$): right $3$ is correct, but $+2$ shifts up, giving $(3,2)$.\n* Choice D ($f(x+3)+2$): both moves reversed — left $3$ and up $2$, giving $(-3,2)$.\n\n**Test Day Takeaway:** To send the vertex to $(h,k)$, use $f(x-h)+k$ — the inside sign is always opposite to the horizontal direction.",
      skills: ['function-transformations']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Graph of f(x) passes through (2, 5). After transformation g(x) = f(x) - 3, what point is on g(x)?",
      choices: [
        { id: "A", text: "(2, 8)" },
        { id: "B", text: "(2, 2)" },
        { id: "C", text: "(5, 5)" },
        { id: "D", text: "(-1, 5)" }
      ],
      correctAnswer: "B",
      hint: "Subtracting 3 outside the function only changes the y-values. The x-coordinate stays the same.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(x)=f(x)-3$ subtracts $3$ from $y$ and leaves $x$ alone: $(2,5)\\to(2,2)$.\n\n**The Full Solution:**\nStep 1: $f(x)-3$ is an outside change, so only the $y$-coordinate moves; $x$ stays at $2$.\nStep 2: $g(2)=f(2)-3=5-3=2$. New point $(2,2)$.\n\n**Why the wrong answers are tempting:**\n* Choice A $(2,8)$: comes from $f(x)+3$ — adding instead of subtracting.\n* Choice C $(5,5)$: shifts the $x$-coordinate; outside changes never touch $x$.\n* Choice D $(-1,5)$: moves $x$ left $3$ — that would be the inside change $f(x+3)$.\n\n**Test Day Takeaway:** For $f(x)-k$, every point $(a,b)$ becomes $(a,\\,b-k)$ — only $y$ changes.",
      skills: ['function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) has a maximum at (4, 6), where is the maximum of f(x - 1) + 2?",
      choices: [
        { id: "A", text: "(3, 8)" },
        { id: "B", text: "(5, 8)" },
        { id: "C", text: "(3, 4)" },
        { id: "D", text: "(5, 4)" }
      ],
      correctAnswer: "B",
      hint: "Apply each transformation step by step: (x - 1) shifts horizontally, and +2 shifts vertically. Remember that horizontal shifts work opposite to the sign.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Inside $-1$ shifts right $1$ ($4\\to5$); outside $+2$ shifts up $2$ ($6\\to8$). New max: $(5,8)$.\n\n**The Full Solution:**\nStep 1: $f(x-1)$ is an inside change, so it moves the graph horizontally — opposite the sign. The $-1$ shifts right $1$: the $x$-coordinate goes $4\\to 4+1=5$.\nStep 2: The $+2$ is outside, so it shifts up $2$: the $y$-coordinate goes $6\\to 6+2=8$.\nStep 3: The maximum is now at $(5,8)$. Check: $f(5-1)+2=f(4)+2=6+2=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $(3,8)$: shifted left $1$ instead of right — moving in the direction of the $-1$ sign rather than opposite it.\n* Choice C $(3,4)$: both directions flipped — left $1$ and down $2$ instead of right $1$ and up $2$.\n* Choice D $(5,4)$: correct horizontal move, but subtracted $2$ from $y$; that would be $f(x-1)-2$.\n\n**Test Day Takeaway:** For $f(x-h)+k$, a marked point $(a,b)$ moves to $(a+h,\\;b+k)$. Inside changes flip the sign and act on $x$; outside changes act on $y$ as written.",
      skills: ['function-transformations']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of y = f(x) is reflected across the x-axis and shifted up 4 units. Which equation represents this?",
      choices: [
        { id: "A", text: "y = -f(x) + 4" },
        { id: "B", text: "y = -f(x) - 4" },
        { id: "C", text: "y = f(-x) + 4" },
        { id: "D", text: "y = -f(x + 4)" }
      ],
      correctAnswer: "A",
      hint: "Build the transformation step by step. First apply the reflection (which involves a negative sign), then the vertical shift (which involves adding or subtracting).",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Reflecting across the $x$-axis negates the output: $-f(x)$. Shifting up $4$ adds $4$ outside: $-f(x)+4$.\n\n**The Full Solution:**\nStep 1: Reflection across the $x$-axis flips every output sign, so $f(x)$ becomes $-f(x)$. The negative sits outside the function.\nStep 2: Shifting up $4$ adds $4$ to the whole expression: $-f(x)+4$.\nStep 3: Spot-check with a point. If $f$ passes through $(0,1)$, reflecting gives $(0,-1)$, then up $4$ gives $(0,3)$. The formula agrees: $-f(0)+4=-1+4=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $-f(x)-4$: reflects correctly but shifts down $4$, not up.\n* Choice C $f(-x)+4$: $f(-x)$ reflects across the $y$-axis, not the $x$-axis. For an $x$-axis reflection the negative must be outside.\n* Choice D $-f(x+4)$: reflects across the $x$-axis but the $+4$ is inside, shifting left $4$ — there is no vertical shift at all.\n\n**Test Day Takeaway:** $-f(x)$ flips across the $x$-axis; $f(-x)$ flips across the $y$-axis. A vertical shift goes outside the function: $-f(x)+k$.",
      skills: ['function-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If y = f(x) has y-intercept at (0, 3), what is the y-intercept of y = 2f(x)?",
      choices: [
        { id: "A", text: "(0, 3)" },
        { id: "B", text: "(0, 5)" },
        { id: "C", text: "(0, 6)" },
        { id: "D", text: "(2, 3)" }
      ],
      correctAnswer: "C",
      hint: "The y-intercept occurs when x = 0. Multiply the original y-value by 2 to find the new y-intercept.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A factor outside, $2f(x)$, doubles every $y$-value. The intercept $(0,3)$ becomes $(0,2\\cdot 3)=(0,6)$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is where $x=0$, so evaluate $y=2f(0)$.\nStep 2: The original intercept gives $f(0)=3$, so $y=2(3)=6$.\nStep 3: New $y$-intercept: $(0,6)$. The $x$-value stays $0$ because the $2$ multiplies the output only. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $(0,3)$: kept the original intercept and ignored the factor of $2$.\n* Choice B $(0,5)$: computed $3+2=5$, treating the transformation as $f(x)+2$ instead of $2f(x)$.\n* Choice D $(2,3)$: moved the $x$-coordinate by $2$; the factor is outside, so it scales $y$, not $x$.\n\n**Test Day Takeaway:** For $a\\cdot f(x)$, multiply each $y$-value by $a$. The intercept $(0,b)$ becomes $(0,ab)$ — the $x$-coordinate never changes.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The graph of f(x) = x² has vertex at (0, 0). A transformed graph has vertex at (-2, 0). Which transformation was applied?",
      choices: [
        { id: "A", text: "f(x - 2)" },
        { id: "B", text: "f(x + 2)" },
        { id: "C", text: "f(x) - 2" },
        { id: "D", text: "f(x) + 2" }
      ],
      correctAnswer: "B",
      hint: "The vertex moved left 2 units (x changed from 0 to -2, y stayed at 0). Which transformation shifts the graph left?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The vertex moved left $2$ with $y$ unchanged — a horizontal shift left. Shift left uses $f(x+h)$, so $f(x+2)$.\n\n**The Full Solution:**\nStep 1: The vertex went from $(0,0)$ to $(-2,0)$. Only $x$ changed, so this is purely horizontal.\nStep 2: A shift left $h$ units is $f(x+h)$. With $h=2$, that is $f(x+2)$.\nStep 3: Check: $f(x+2)=(x+2)^2$, and at $x=-2$ this is $(-2+2)^2=0$, putting the vertex at $(-2,0)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $f(x-2)$: shifts right $2$, giving vertex $(2,0)$ — the sign is read literally instead of as the opposite direction.\n* Choice C $f(x)-2$: an outside change, shifting down $2$ to give vertex $(0,-2)$.\n* Choice D $f(x)+2$: an outside change, shifting up $2$ to give vertex $(0,2)$; here $y$ moved, not $x$.\n\n**Test Day Takeaway:** Inside the function, the sign is always opposite the direction. Left $h$: $f(x+h)$. Right $h$: $f(x-h)$.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "Graph of f(x) passes through (0, 4). After transformation g(x) = f(x - 3), which point is on g(x)?",
      choices: [
        { id: "A", text: "(3, 4)" },
        { id: "B", text: "(-3, 4)" },
        { id: "C", text: "(0, 1)" },
        { id: "D", text: "(0, 7)" }
      ],
      correctAnswer: "A",
      hint: "f(x - 3) shifts the graph right 3 units. The point (0, 4) moves right, so x increases while y stays the same.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(x-3)$ shifts right $3$, so $(0,4)$ becomes $(3,4)$.\n\n**The Full Solution:**\nStep 1: $f(x-3)$ replaces $x$ with $x-3$ inside, which is a horizontal shift — opposite the sign, so right $3$.\nStep 2: The point $(0,4)$ moves to $(0+3,\\;4)=(3,4)$; the $y$-value is untouched.\nStep 3: Check: $g(3)=f(3-3)=f(0)=4$, so $(3,4)$ lies on $g$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $(-3,4)$: shifted left $3$, following the $-3$ sign instead of reversing it.\n* Choice C $(0,1)$: subtracted $3$ from $y$, as if the change were $f(x)-3$; the $-3$ is inside, so it acts on $x$.\n* Choice D $(0,7)$: added $3$ to $y$, as if the change were $f(x)+3$.\n\n**Test Day Takeaway:** For $f(x-h)$, every point $(a,b)$ slides to $(a+h,b)$. Only the $x$-coordinate moves.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The minimum of f(x) is at (1, -3). Where is the minimum of g(x) = f(x + 4) - 1?",
      choices: [
        { id: "A", text: "(-3, -4)" },
        { id: "B", text: "(5, -4)" },
        { id: "C", text: "(-3, -2)" },
        { id: "D", text: "(5, -2)" }
      ],
      correctAnswer: "A",
      hint: "Apply each transformation: (x + 4) shifts left 4 units, -1 shifts down 1 unit. Track the minimum point through both shifts.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Inside $+4$ shifts left $4$ ($1\\to-3$); outside $-1$ shifts down $1$ ($-3\\to-4$). New min: $(-3,-4)$.\n\n**The Full Solution:**\nStep 1: $f(x+4)$ is an inside change. The $+4$ moves the graph left $4$: $x$ goes $1\\to 1-4=-3$.\nStep 2: The $-1$ is outside, shifting down $1$: $y$ goes $-3\\to -3-1=-4$.\nStep 3: New minimum: $(-3,-4)$. Check: $g(-3)=f(-3+4)-1=f(1)-1=-3-1=-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $(5,-4)$: shifted right $4$; the inside $+4$ means left, not right.\n* Choice C $(-3,-2)$: correct horizontal move, but went up $1$ instead of down — the outside $-1$ lowers $y$.\n* Choice D $(5,-2)$: both moves reversed — right $4$ and up $1$ instead of left $4$ and down $1$.\n\n**Test Day Takeaway:** For $f(x+h)+k$, the point $(a,b)$ moves to $(a-h,\\;b+k)$. Inside additions push left; outside subtractions push down.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The graph of y = f(x) is reflected across the y-axis and then shifted right 2 units. Which equation represents this?",
      choices: [
        { id: "A", text: "y = f(-x - 2)" },
        { id: "B", text: "y = f(-x + 2)" },
        { id: "C", text: "y = f(-(x - 2))" },
        { id: "D", text: "y = -f(x - 2)" }
      ],
      correctAnswer: "C",
      hint: "Reflect across y-axis first: f(-x). Then shift right 2: replace x with (x - 2). Be careful about where the negative sign goes!",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Reflect across the $y$-axis to get $f(-x)$, then shift right $2$ by replacing $x$ with $x-2$ in that reflected function: $f(-(x-2))$.\n\n**The Full Solution:**\nStep 1: A $y$-axis reflection replaces $x$ with $-x$: $f(-x)$.\nStep 2: Shifting the result right $2$ means substituting $x-2$ wherever $x$ appears in the reflected form, which is $f(-(x-2))$.\nStep 3: Verify with a point. If $f$ passes through $(3,5)$: reflect to $(-3,5)$, then shift right $2$ to $(-1,5)$. The formula gives $f(-((-1)-2))=f(-(-3))=f(3)=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $f(-x-2)$: equals $f(-(x+2))$, which shifts left $2$ after reflecting, the wrong direction.\n* Choice B $f(-x+2)$: although this algebraically equals the correct form, the SAT presents the answer in the cleanly factored shape $f(-(x-2))$ that shows the right-$2$ shift explicitly.\n* Choice D $-f(x-2)$: the negative is outside, so it reflects across the $x$-axis, not the $y$-axis.\n\n**Test Day Takeaway:** Apply transformations in order. To reflect across the $y$-axis then shift right $h$, write $f(-(x-h))$ so the shift sits cleanly inside the reflected argument.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "If the x-intercepts of f(x) are at x = -1 and x = 5, what are the x-intercepts of f(x - 3)?",
      choices: [
        { id: "A", text: "x = -4 and x = 2" },
        { id: "B", text: "x = 2 and x = 8" },
        { id: "C", text: "x = -1 and x = 5" },
        { id: "D", text: "x = -4 and x = 8" }
      ],
      correctAnswer: "B",
      hint: "f(x - 3) shifts the entire graph right 3 units. Each x-intercept moves right by 3.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(x-3)$ shifts everything right $3$, so the intercepts $-1$ and $5$ become $2$ and $8$.\n\n**The Full Solution:**\nStep 1: $f(x-3)$ moves the whole graph right $3$ (inside $-3$ acts in the opposite direction).\nStep 2: Shift each $x$-intercept right $3$: $-1+3=2$ and $5+3=8$.\nStep 3: New $x$-intercepts: $x=2$ and $x=8$. Check: $f(2-3)=f(-1)=0$ and $f(8-3)=f(5)=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $x=-4$ and $x=2$: shifted left $3$, following the sign instead of reversing it.\n* Choice C $x=-1$ and $x=5$: the original intercepts, with the shift never applied.\n* Choice D $x=-4$ and $x=8$: shifted the two intercepts in opposite directions; both must move the same way.\n\n**Test Day Takeaway:** $f(x-h)$ moves every feature — intercepts, vertex, all points — right by $h$: $x_0\\to x_0+h$.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "If y = f(x) has x-intercept at (4, 0), what is the x-intercept of y = -f(x) + 5?",
      choices: [
        { id: "A", text: "(4, 0)" },
        { id: "B", text: "(4, 5)" },
        { id: "C", text: "(-4, 0)" },
        { id: "D", text: "Cannot be determined without more information" }
      ],
      correctAnswer: "D",
      hint: "At the original x-intercept (4, 0), the transformed function gives -f(4) + 5 = -0 + 5 = 5. Is this a new x-intercept?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The old zero $x=4$ stops being a zero: $-f(4)+5=5$. The new zeros need $f(x)=5$, which one point of $f$ cannot pin down.\n\n**The Full Solution:**\nStep 1: At the original intercept, $f(4)=0$. After the transformation, the value there is $-f(4)+5=-0+5=5$, so $(4,0)$ becomes $(4,5)$ — not on the $x$-axis.\nStep 2: An $x$-intercept of $y=-f(x)+5$ needs $-f(x)+5=0$, i.e. $f(x)=5$.\nStep 3: All we know is $f(4)=0$. Where $f$ equals $5$ depends on the rest of the function, which is unknown, so the new $x$-intercept cannot be determined.\n\n**Why the wrong answers are tempting:**\n* Choice A $(4,0)$: assumes the intercept stays put, but $-f(4)+5=5\\neq 0$.\n* Choice B $(4,5)$: this point is on the new graph, yet $y=5$ means it is not an $x$-intercept.\n* Choice C $(-4,0)$: invents a $y$-axis reflection; $-f(x)$ flips across the $x$-axis, leaving $x$ unchanged.\n\n**Test Day Takeaway:** A vertical shift moves $x$-intercepts to wherever $f(x)=k$. Finding them requires the whole function, not a single known point.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The vertex of a parabola f(x) is at (2, -4). After applying the transformation g(x) = 3f(x - 1) + 2, where is the new vertex?",
      choices: [
        { id: "A", text: "(3, -10)" },
        { id: "B", text: "(1, -10)" },
        { id: "C", text: "(3, -14)" },
        { id: "D", text: "(3, 2)" }
      ],
      correctAnswer: "A",
      hint: "Break it down: (x - 1) shifts right 1, multiplying by 3 stretches vertically (affects y-value at vertex), and +2 shifts up.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Right $1$ sends $x:2\\to3$. The factor $3$ then the $+2$ send $y:-4\\to 3(-4)+2=-10$. New vertex: $(3,-10)$.\n\n**The Full Solution:**\nStep 1: $(x-1)$ shifts right $1$, so the vertex $x$-coordinate goes $2\\to 2+1=3$.\nStep 2: The factor $3$ multiplies the output: $y=-4\\to 3(-4)=-12$.\nStep 3: The outside $+2$ then shifts up $2$: $-12+2=-10$.\nStep 4: New vertex $(3,-10)$. Check: $g(3)=3f(3-1)+2=3f(2)+2=3(-4)+2=-10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B $(1,-10)$: shifted left $1$; the $(x-1)$ moves right.\n* Choice C $(3,-14)$: computed $3(-4)-2=-14$, subtracting the $2$ instead of adding it.\n* Choice D $(3,2)$: ignored the stretch and only added $2$ to the original $y$; the $\\times 3$ must come before the $+2$.\n\n**Test Day Takeaway:** For $a\\cdot f(x-h)+k$ with vertex $(x_0,y_0)$, the new vertex is $(x_0+h,\\;a\\cdot y_0+k)$. Stretch first, then add the vertical shift.",
      skills: ['function-transformations']
    }
  ],

  // Section: Transformations from Table
  "Transformations from Table": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(2) = 7, what is g(2) if g(x) = f(x) + 5?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "7" },
        { id: "C", text: "12" },
        { id: "D", text: "35" }
      ],
      correctAnswer: "C",
      hint: "Substitute x = 2 into g(x) = f(x) + 5. You already know what f(2) equals.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** The $+5$ is outside, so $g(2)=f(2)+5=7+5=12$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x)+5$, so at $x=2$, $g(2)=f(2)+5$.\nStep 2: Substitute the given $f(2)=7$: $g(2)=7+5=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $2$: computed $7-5$, subtracting instead of adding.\n* Choice B $7$: just $f(2)$, with the $+5$ ignored.\n* Choice D $35$: computed $7\\times 5$, multiplying instead of adding.\n\n**Test Day Takeaway:** For $g(x)=f(x)+k$, look up $f$ at the same input and add $k$: $g(a)=f(a)+k$.",
      skills: ['function-transformations']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(3) = 8, what is h(5) if h(x) = f(x - 2)?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "8" },
        { id: "C", text: "10" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "First calculate what goes into f: when x = 5, what is (x - 2)? Does that value match something you know about f?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $h(5)=f(5-2)=f(3)=8$.\n\n**The Full Solution:**\nStep 1: $h(x)=f(x-2)$, so evaluate the inside first: $h(5)=f(5-2)$.\nStep 2: $5-2=3$, and the problem gives $f(3)=8$, so $h(5)=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $6$: computed $f(3)-2=6$; the $-2$ is inside, changing the input, not the output.\n* Choice C $10$: added $2$ to the output, as if the change acted on $y$.\n* Choice D Cannot determine: assumes you need $f(5)$, but $h(5)$ asks for $f(3)$, which is given.\n\n**Test Day Takeaway:** For $h(x)=f(x-c)$, evaluate the inside first: $h(a)=f(a-c)$. You need $f$ at the shifted input.",
      skills: ['function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Given the table: f(1) = 4, f(2) = 7, f(3) = 10. If g(x) = -f(x), what is g(2)?",
      choices: [
        { id: "A", text: "−7" },
        { id: "B", text: "7" },
        { id: "C", text: "−2" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      hint: "Find f(2) from the table first, then apply the negative sign to that result.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** A negative outside the function flips the sign of the output, so $g(2)=-f(2)=-7$.\n\n**The Full Solution:**\nStep 1: $g(x)=-f(x)$ keeps the input and negates the output.\nStep 2: From the table, $f(2)=7$.\nStep 3: $g(2)=-f(2)=-(7)=-7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): just $f(2)$, ignoring the negative sign entirely.\n* Choice C ($-2$): negates the input ($-x=-2$) instead of the output — that would be $f(-x)$, not $-f(x)$.\n* Choice D ($14$): treats $-f(x)$ as $2f(x)$ and doubles $f(2)$ instead of negating it.\n\n**Test Day Takeaway:** A factor outside $f$ acts on the output. $-f(x)$ means evaluate $f$ normally, then flip the sign.",
      skills: ['function-transformations']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If f(4) = 10 and g(x) = f(x + 3) - 2, what is g(1)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "15" }
      ],
      correctAnswer: "B",
      hint: "Work from the inside out: when x = 1, calculate (x + 3) first to see which f-value you need, then subtract 2 from the result.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Work inside-out: the $+3$ is inside, so $g(1)=f(1+3)-2=f(4)-2=10-2=8$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+3)-2$. The $+3$ changes the input; the $-2$ changes the output.\nStep 2: Inside first: $1+3=4$, so $g(1)=f(4)-2$.\nStep 3: $f(4)=10$, so $g(1)=10-2=8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): misapplies the constants, e.g. $f(1)$-based arithmetic; the $+3$ is inside the input, not added to the output.\n* Choice C ($11$): computes $f(4)+1$ — adds instead of subtracting, or confuses the two constants.\n* Choice D ($15$): computes $f(4)+3+2$, treating both constants as outside additions.\n\n**Test Day Takeaway:** For $g(x)=f(x+a)+b$, evaluate the inside $x+a$ first, look up $f$ there, then apply the outside $+b$.",
      skills: ['function-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Table shows: x = [0, 1, 2], f(x) = [5, 8, 11]. For g(x) = 2f(x), what is g(1)?",
      choices: [
        { id: "A", text: "8" },
        { id: "B", text: "10" },
        { id: "C", text: "16" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Look up f(1) in the table, then multiply that value by 2.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A multiplier outside $f$ scales the output, so $g(1)=2\\cdot f(1)=2\\times 8=16$.\n\n**The Full Solution:**\nStep 1: $g(x)=2f(x)$ keeps the input and doubles the output.\nStep 2: From the table, $f(1)=8$.\nStep 3: $g(1)=2\\times 8=16$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): just $f(1)$, ignoring the multiplier of $2$.\n* Choice B ($10$): computes $f(1)+2$ — adds $2$ instead of multiplying by $2$.\n* Choice D ($22$): uses $2\\cdot f(2)=2(11)$, the wrong table entry; you need $f(1)$, not $f(2)$.\n\n**Test Day Takeaway:** For $g(x)=a\\cdot f(x)$, find $f$ at the given input first, then multiply by $a$.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(0) = 5, what is g(0) if g(x) = f(x) - 3?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "−3" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = 0 into g(x) = f(x) - 3. Use the given value of f(0).",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The $-3$ is outside, so subtract it from the output: $g(0)=f(0)-3=5-3=2$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x)-3$ keeps the input and lowers the output by $3$.\nStep 2: $f(0)=5$ is given.\nStep 3: $g(0)=5-3=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): just $f(0)$, ignoring the $-3$ shift.\n* Choice C ($8$): computes $f(0)+3$ — adds instead of subtracting.\n* Choice D ($-3$): reports only the shift constant, ignoring $f(0)$.\n\n**Test Day Takeaway:** For $g(x)=f(x)-k$, evaluate $f$ at the same input, then subtract $k$ from the result.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If f(4) = 12, what is h(6) if h(x) = f(x - 2)?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "12" },
        { id: "C", text: "14" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "When x = 6, what is (x - 2)? Find f of that value.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $-2$ is inside, so it sets the input: $h(6)=f(6-2)=f(4)=12$.\n\n**The Full Solution:**\nStep 1: $h(x)=f(x-2)$ changes the input only.\nStep 2: $6-2=4$, so $h(6)=f(4)$.\nStep 3: $f(4)=12$ is given, so $h(6)=12$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): computes $f(4)-2$, applying the $-2$ to the output; it belongs inside, on the input.\n* Choice C ($14$): computes $f(4)+2$ — adds instead of recognizing the inside change.\n* Choice D (Cannot determine): assumes you need $f(6)$; but $h(6)=f(4)$, and $f(4)$ is given.\n\n**Test Day Takeaway:** An inside change redirects the input. For $h(x)=f(x-c)$, compute $x-c$ first, then look up $f$ there.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "Given the table: f(0) = 2, f(1) = 5, f(2) = 8. If g(x) = f(x - 1), what is g(2)?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "g(2) = f(2 - 1) = f(1). Look up f(1) in the table.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $-1$ inside redirects the lookup: $g(2)=f(2-1)=f(1)=5$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x-1)$ changes the input only.\nStep 2: $2-1=1$, so $g(2)=f(1)$.\nStep 3: From the table, $f(1)=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reads $f(0)=2$, the wrong entry — likely confusing input with output.\n* Choice C ($8$): uses $f(2)=8$, the original input; the $-1$ inside shifts the lookup to $x=1$.\n* Choice D (Cannot determine): $f(1)$ is explicitly in the table, so the value is determined.\n\n**Test Day Takeaway:** For $g(x)=f(x-c)$, compute $x-c$ first, then look up that value. $g(2)=f(1)$, not $f(2)$.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "Given: f(1) = 3, f(2) = 7, f(3) = 11. If g(x) = f(x) + 4, what is g(2)?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "11" },
        { id: "C", text: "15" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "B",
      hint: "g(2) = f(2) + 4. Find f(2) from the given information, then add 4.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $+4$ is outside, so add it to the output: $g(2)=f(2)+4=7+4=11$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x)+4$ keeps the input and raises the output by $4$.\nStep 2: From the table, $f(2)=7$.\nStep 3: $g(2)=7+4=11$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): just $f(2)$, ignoring the $+4$ shift.\n* Choice C ($15$): uses $f(3)+4=11+4$, the wrong table entry; you need $f(2)$, not $f(3)$.\n* Choice D ($6$): subtracts instead of adds, or otherwise misapplies the constant.\n\n**Test Day Takeaway:** For $g(x)=f(x)+k$, the input stays the same — just add $k$ to the output.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "If f(5) = 20 and g(x) = f(x + 2) - 6, what is g(3)?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "16" },
        { id: "C", text: "20" },
        { id: "D", text: "26" }
      ],
      correctAnswer: "A",
      hint: "First find what goes into f: when x = 3, calculate (x + 2). Then subtract 6 from the f-value.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Inside first, then outside: $g(3)=f(3+2)-6=f(5)-6=20-6=14$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+2)-6$. The $+2$ changes the input; the $-6$ changes the output.\nStep 2: $3+2=5$, so $g(3)=f(5)-6$.\nStep 3: $f(5)=20$, so $g(3)=20-6=14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): an arithmetic slip such as $20-4$, mishandling the subtraction.\n* Choice C ($20$): just $f(5)$, forgetting the outside $-6$.\n* Choice D ($26$): computes $f(5)+6$ — adds instead of subtracting.\n\n**Test Day Takeaway:** For $g(x)=f(x+a)+b$, compute the inside $x+a$, look up $f$ there, then apply the outside $+b$ — two operations, in order.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "medium",
      question: "Table shows: x = [1, 2, 3, 4], f(x) = [6, 9, 12, 15]. For g(x) = f(x + 1), what is g(1)?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "9" },
        { id: "C", text: "12" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "B",
      hint: "g(1) = f(1 + 1) = f(2). Look up f(2) in the table.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $+1$ inside shifts the lookup forward: $g(1)=f(1+1)=f(2)=9$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+1)$ changes the input only.\nStep 2: $1+1=2$, so $g(1)=f(2)$.\nStep 3: From the table, $f(2)=9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): uses $f(1)=6$, the original input, without applying the $+1$ shift.\n* Choice C ($12$): uses $f(3)=12$, as if the shift were $+2$ instead of $+1$.\n* Choice D ($3$): no table value equals $3$; likely a misapplied subtraction.\n\n**Test Day Takeaway:** For $g(x)=f(x+c)$, the $+c$ inside means look ahead $c$ steps. $g(1)=f(2)$, not $f(1)$.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "Given: f(2) = 8, f(4) = 14. If g(x) = f(2x), what is g(1)?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "8" },
        { id: "C", text: "14" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "g(1) = f(2 × 1) = f(2). You're given f(2) in the problem.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The $2x$ inside sets the input: $g(1)=f(2\\times 1)=f(2)=8$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(2x)$ multiplies the input before $f$ acts.\nStep 2: $2\\times 1=2$, so $g(1)=f(2)$.\nStep 3: From the given data, $f(2)=8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): computes $\\frac{f(2)}{2}=4$, dividing the output by $2$; the multiplier is inside, on the input.\n* Choice C ($14$): uses $f(4)=14$, as if computing $g(2)=f(2\\times 2)$; wrong input.\n* Choice D (Cannot determine): assumes you need $f(1)$; but $g(1)=f(2)$, which is given.\n\n**Test Day Takeaway:** For $g(x)=f(cx)$, the multiplier is inside. Compute $cx$ first, then look up $f$ there. $g(1)=f(2)$.",
      skills: ['function-transformations']
    },
    {
      id: 13,
      difficulty: "hard",
      question: "Table: x = [0, 2, 4, 6], f(x) = [1, 5, 9, 13]. If h(x) = 3f(x) - 2, what is h(4)?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "25" },
        { id: "C", text: "27" },
        { id: "D", text: "29" }
      ],
      correctAnswer: "B",
      hint: "First find f(4) from the table, then apply the transformation: multiply by 3, then subtract 2.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Stretch then shift: $h(4)=3f(4)-2=3(9)-2=25$.\n\n**The Full Solution:**\nStep 1: $h(x)=3f(x)-2$. The $3$ scales the output; the $-2$ shifts it.\nStep 2: From the table, $f(4)=9$.\nStep 3: $h(4)=3(9)-2=27-2=25$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): computes $f(4)-2=7$, forgetting to multiply by $3$ first.\n* Choice C ($27$): computes $3f(4)=27$, applying the stretch but dropping the $-2$ shift.\n* Choice D ($29$): computes $3(9)+2=29$ — adds instead of subtracting.\n\n**Test Day Takeaway:** For $h(x)=a\\cdot f(x)+b$, multiply by $a$ first, then add $b$. Order matters: stretch before shift.",
      skills: ['function-transformations']
    },
    {
      id: 14,
      difficulty: "hard",
      question: "If f(3) = 10 and g(x) = f(x - 2) + f(x + 2), and we also know f(1) = 4 and f(5) = 16, what is g(3)?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "20" },
        { id: "C", text: "26" },
        { id: "D", text: "30" }
      ],
      correctAnswer: "B",
      hint: "g(3) = f(3-2) + f(3+2) = f(1) + f(5). Look up both values from the given information.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Each term is a separate lookup: $g(3)=f(3-2)+f(3+2)=f(1)+f(5)=4+16=20$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x-2)+f(x+2)$. Evaluate each term on its own.\nStep 2: First term: $3-2=1$, so $f(1)=4$.\nStep 3: Second term: $3+2=5$, so $f(5)=16$.\nStep 4: $g(3)=4+16=20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): uses $f(1)+f(3)=4+10$, taking $f(3)$ instead of $f(5)$ for the second term.\n* Choice C ($26$): uses $f(3)+f(5)=10+16$, taking $f(3)$ instead of $f(1)$ for the first term.\n* Choice D ($30$): adds an extra $f(3)$, summing $f(1)+f(3)+f(5)=4+10+16$.\n\n**Test Day Takeaway:** When a function is built from a sum of values, evaluate each term independently, then add. The given $f(3)=10$ is a decoy here.",
      skills: ['function-transformations']
    }
  ],

  // Section: Transformations from Expression
  "Transformations from Expression": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x², what is f(x + 3)?",
      choices: [
        { id: "A", text: "x² + 3" },
        { id: "B", text: "x² + 6x + 9" },
        { id: "C", text: "(x + 3)²" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace every x in f(x) = x² with (x + 3). Then consider whether the factored form and expanded form are equivalent.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Replace every $x$ with $(x+3)$ to get $(x+3)^2$ (Choice C). Expanding gives $x^2+6x+9$ (Choice B). Same expression, two forms, so both are right.\n\n**The Full Solution:**\nStep 1: $f(x)=x^2$, so $f(x+3)=(x+3)^2$. That is exactly Choice C.\nStep 2: Expand: $(x+3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$. That is exactly Choice B.\nStep 3: Choices B and C are the same number for every $x$, so the complete answer is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2+3$): this is $f(x)+3$, not $f(x+3)$. The $+3$ goes inside the squared expression, not added on after.\n* Choice B alone: $x^2+6x+9$ is correct, but it is not the only correct form — Choice C is equal to it.\n* Choice C alone: $(x+3)^2$ is correct, but Choice B is its expansion. Picking just one misses that D covers both.\n\n**Test Day Takeaway:** To evaluate $f(x+c)$, substitute $(x+c)$ for every $x$. A factored form and its expansion are always equal — if both appear as options, \"both\" is usually the intended answer.",
      skills: ['function-transformations']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(x) = 2x - 1, what is -f(x)?",
      choices: [
        { id: "A", text: "−2x − 1" },
        { id: "B", text: "−2x + 1" },
        { id: "C", text: "2x + 1" },
        { id: "D", text: "−2x" }
      ],
      correctAnswer: "B",
      hint: "Multiply the entire expression (2x - 1) by -1. Remember to distribute the negative to both terms.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $-f(x)$ flips the sign of every term: $-(2x-1)=-2x+1$.\n\n**The Full Solution:**\nStep 1: $-f(x)=-(2x-1)$.\nStep 2: Distribute the negative to both terms: $-(2x)-(-1)=-2x+1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2x-1$): only the first term was negated; the $-1$ must also flip to $+1$.\n* Choice C ($2x+1$): only the constant flipped; the $2x$ must also become $-2x$.\n* Choice D ($-2x$): a simplification slip that drops the constant. The constant is $+1$, not $0$.\n\n**Test Day Takeaway:** $-f(x)$ multiplies the entire output by $-1$, so every term changes sign: $-(ax+b)=-ax-b$.",
      skills: ['function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If g(x) = |x|, what is g(x - 4) + 2?",
      choices: [
        { id: "A", text: "|x - 4| + 2" },
        { id: "B", text: "|x| - 2" },
        { id: "C", text: "|x + 4| + 2" },
        { id: "D", text: "|x - 2| + 4" }
      ],
      correctAnswer: "A",
      hint: "Replace x with (x - 4) inside the absolute value, then add 2 to the entire expression.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x-4)$ means $|x-4|$, then the outside $+2$ stays outside: $|x-4|+2$.\n\n**The Full Solution:**\nStep 1: $g(x)=|x|$, so $g(x-4)=|x-4|$ — substitute $(x-4)$ for $x$ inside.\nStep 2: The $+2$ is an outside change, so add it after: $g(x-4)+2=|x-4|+2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($|x|-2$): drops the horizontal shift entirely and subtracts instead of adds. The outside change is $+2$.\n* Choice C ($|x+4|+2$): wrong inside sign. $g(x-4)=|x-4|$, a shift right, not $|x+4|$.\n* Choice D ($|x-2|+4$): swaps the two constants. The $4$ belongs inside (the input shift) and the $2$ outside.\n\n**Test Day Takeaway:** For $g(x-h)+k$, put the input shift $h$ inside the function and the output shift $k$ outside — keep the two constants in their own places.",
      skills: ['function-transformations']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If f(x) = x³, what is f(-x)?",
      choices: [
        { id: "A", text: "x³" },
        { id: "B", text: "-x³" },
        { id: "C", text: "(-x)³ = -x³" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace x with (-x) and simplify. Remember that a negative number raised to an odd power stays negative.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** $f(-x)=(-x)^3=-x^3$. Choice C states the substitution, Choice B states the result — both are right, so D.\n\n**The Full Solution:**\nStep 1: $f(x)=x^3$, so $f(-x)=(-x)^3$, which is Choice C.\nStep 2: Simplify: $(-x)^3=(-1)^3 \\cdot x^3=-x^3$, which is Choice B.\nStep 3: B and C are the same value, so the complete answer is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^3$): this would mean $f(-x)=f(x)$, true only for even functions. $x^3$ is odd, so $f(-x)=-f(x)$.\n* Choice B alone ($-x^3$): correct value, but Choice C is the equivalent unsimplified form.\n* Choice C alone ($(-x)^3=-x^3$): correct, but it equals Choice B. Picking one misses that D covers both.\n\n**Test Day Takeaway:** For an odd power, $(-x)^n=-x^n$; for an even power, $(-x)^n=x^n$. That sign behavior is exactly what makes a function odd or even.",
      skills: ['function-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If h(x) = √x, what is 3h(x) - 1?",
      choices: [
        { id: "A", text: "3√x - 1" },
        { id: "B", text: "√(3x - 1)" },
        { id: "C", text: "√(3x) - 1" },
        { id: "D", text: "3(√x - 1)" }
      ],
      correctAnswer: "A",
      hint: "The 3 multiplies the output of h(x), not the input. Write out h(x) first, then multiply by 3 and subtract 1.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Both the $3$ and the $-1$ act on the output, so they stay outside the root: $3\\sqrt{x}-1$.\n\n**The Full Solution:**\nStep 1: $h(x)=\\sqrt{x}$, so $3h(x)=3\\sqrt{x}$ — the $3$ multiplies the result of the root.\nStep 2: Subtract $1$ from that result: $3h(x)-1=3\\sqrt{x}-1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{3x-1}$): puts both the $3$ and the $-1$ under the radical. Neither belongs inside.\n* Choice C ($\\sqrt{3x}-1$): puts the $3$ inside as $h(3x)$. But $3h(x)=3\\sqrt{x}$, not $\\sqrt{3x}$.\n* Choice D ($3(\\sqrt{x}-1)$): distributes to $3\\sqrt{x}-3$. The $-1$ is a separate outside shift, not multiplied by $3$.\n\n**Test Day Takeaway:** In $a\\cdot f(x)+b$, the $a$ scales the output and the $b$ shifts it — neither one enters the function's argument, so $3\\sqrt{x}-1 \\neq \\sqrt{3x-1}$.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(x) = x² + 1, what is f(x) - 4?",
      choices: [
        { id: "A", text: "x² - 3" },
        { id: "B", text: "x² + 5" },
        { id: "C", text: "(x - 4)² + 1" },
        { id: "D", text: "x² - 4" }
      ],
      correctAnswer: "A",
      hint: "f(x) - 4 means take the entire expression for f(x) and subtract 4 from it.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(x)-4$ just shifts the output down: $(x^2+1)-4=x^2-3$.\n\n**The Full Solution:**\nStep 1: $f(x)-4=(x^2+1)-4$.\nStep 2: Combine the constants: $x^2+(1-4)=x^2-3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2+5$): added $4$ instead of subtracting. The shift is $-4$.\n* Choice C ($(x-4)^2+1$): this is $f(x-4)$ — the $4$ went inside as a horizontal shift. The problem subtracts outside.\n* Choice D ($x^2-4$): subtracted $4$ but dropped the $+1$. Subtract from the whole output: $(x^2+1)-4=x^2-3$.\n\n**Test Day Takeaway:** $f(x)-k$ lowers the entire output by $k$; combine it with the function's existing constant: $x^2+c$ becomes $x^2+(c-k)$.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If g(x) = 5x, what is g(x - 2)?",
      choices: [
        { id: "A", text: "5x - 2" },
        { id: "B", text: "5x - 10" },
        { id: "C", text: "5(x - 2)" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace every x in g(x) = 5x with (x - 2). Then simplify to see if it matches any answer.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** $g(x-2)=5(x-2)$ (Choice C), which distributes to $5x-10$ (Choice B). Same value, so D.\n\n**The Full Solution:**\nStep 1: $g(x)=5x$, so $g(x-2)=5(x-2)$ — substitute $(x-2)$ for $x$. That is Choice C.\nStep 2: Distribute: $5(x-2)=5x-10$. That is Choice B.\nStep 3: B and C are the same expression, so the complete answer is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5x-2$): subtracted $2$ from $5x$ without distributing the $5$. The correct product is $5(x-2)=5x-10$.\n* Choice B alone ($5x-10$): correct, but it equals the factored Choice C.\n* Choice C alone ($5(x-2)$): correct, but it equals the distributed Choice B. Picking one misses that D covers both.\n\n**Test Day Takeaway:** Substituting $(x-c)$ into $g(x)=ax$ gives $a(x-c)=ax-ac$ — always distribute the coefficient through the shift.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "If f(x) = x² - 2x, what is f(x + 1)?",
      choices: [
        { id: "A", text: "x² - 1" },
        { id: "B", text: "x² + 1" },
        { id: "C", text: "x² - 2x + 1" },
        { id: "D", text: "x² - 2x - 1" }
      ],
      correctAnswer: "A",
      hint: "Replace every x with (x + 1): f(x + 1) = (x + 1)² - 2(x + 1). Expand and simplify.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $(x+1)$ everywhere: $(x+1)^2-2(x+1)$. The $+2x$ from the square cancels the $-2x$, leaving $x^2-1$.\n\n**The Full Solution:**\nStep 1: $f(x)=x^2-2x$, so $f(x+1)=(x+1)^2-2(x+1)$.\nStep 2: Expand $(x+1)^2=x^2+2x+1$ and $-2(x+1)=-2x-2$.\nStep 3: Combine: $x^2+2x+1-2x-2=x^2+(2x-2x)+(1-2)=x^2-1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2+1$): right that the $x$-terms cancel, but the constants combine to $1-2=-1$, not $+1$.\n* Choice C ($x^2-2x+1$): only expanded $(x+1)^2$ and forgot to apply the $-2(x+1)$ term.\n* Choice D ($x^2-2x-1$): missed that $(x+1)^2$ supplies a $+2x$ that cancels the $-2x$; the $x$-terms should vanish.\n\n**Test Day Takeaway:** For $f(x+c)$ on a multi-term function, substitute into every $x$, expand each piece separately, then collect like terms — watch for $x$-terms that cancel.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "If f(x) = 2x + 3, what is f(-x) + 5?",
      choices: [
        { id: "A", text: "−2x + 8" },
        { id: "B", text: "−2x − 2" },
        { id: "C", text: "2x + 8" },
        { id: "D", text: "−2x + 3" }
      ],
      correctAnswer: "A",
      hint: "First find f(-x) by replacing x with (-x), then add 5 to the result.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Negate the input first: $f(-x)=2(-x)+3=-2x+3$. Then add $5$: $-2x+8$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $(-x)$ in $f(x)=2x+3$: $f(-x)=2(-x)+3=-2x+3$.\nStep 2: Add the outside $5$: $f(-x)+5=-2x+3+5=-2x+8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2x-2$): comes from negating the whole output, $-f(x)+5$, instead of negating only the input. Those are different operations.\n* Choice C ($2x+8$): this is $f(x)+5$ — the input was never negated, so the $x$-coefficient stayed $+2$ instead of $-2$.\n* Choice D ($-2x+3$): this is $f(-x)$ with the $+5$ shift forgotten.\n\n**Test Day Takeaway:** $f(-x)+k$ is two steps: replace $x$ with $-x$ inside the formula, then add $k$ to the result. Reflecting the input is not the same as negating the output.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "If g(x) = x³, what is -g(x)?",
      choices: [
        { id: "A", text: "(-x)³" },
        { id: "B", text: "-x³" },
        { id: "C", text: "x³" },
        { id: "D", text: "Both A and B" }
      ],
      correctAnswer: "B",
      hint: "The negative is outside the function, so it multiplies the entire output. Don't replace x with -x.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $-g(x)$ negates the output: $-(x^3)=-x^3$.\n\n**The Full Solution:**\nStep 1: $g(x)=x^3$, so $-g(x)=-(x^3)$.\nStep 2: That is $-x^3$, Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-x)^3$): this is $g(-x)$ — negating the input, not the output. It happens to equal $-x^3$ for a cube, but it describes the reflection across the $y$-axis, a different transformation.\n* Choice C ($x^3$): ignores the negation entirely; $-g(x)$ is not $g(x)$.\n* Choice D (Both A and B): tempting because the two values match for odd powers, but $-g(x)$ asks specifically for negating the output, so $(-x)^3$ in Choice A is the wrong description.\n\n**Test Day Takeaway:** $-g(x)$ reflects across the $x$-axis (output negated); $g(-x)$ reflects across the $y$-axis (input negated). For odd functions they give equal values, but they are distinct operations.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "If f(x) = |x - 3|, what is f(x + 5) - 2?",
      choices: [
        { id: "A", text: "|x + 2| - 2" },
        { id: "B", text: "|x + 8| - 2" },
        { id: "C", text: "|x - 3| + 3" },
        { id: "D", text: "|x + 2| + 3" }
      ],
      correctAnswer: "A",
      hint: "Replace x with (x + 5) inside the expression, simplify, then subtract 2.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $(x+5)$ inside: $|(x+5)-3|=|x+2|$. Then the outside $-2$ stays: $|x+2|-2$.\n\n**The Full Solution:**\nStep 1: $f(x)=|x-3|$, so $f(x+5)=|(x+5)-3|=|x+2|$.\nStep 2: Subtract $2$ outside: $f(x+5)-2=|x+2|-2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($|x+8|-2$): added $5+3=8$ inside instead of $5-3=2$. The inside simplifies to $x+2$.\n* Choice C ($|x-3|+3$): used the untouched $f(x)=|x-3|$ and just tacked on $5-2=3$, skipping the inside substitution.\n* Choice D ($|x+2|+3$): correct inside, but the outside shift is $-2$, not $+3$.\n\n**Test Day Takeaway:** When the function already holds a shift, the new input shift combines with it: $|(x+c)-3|=|x+(c-3)|$. Simplify inside first, then apply outside changes.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "If f(x) = 3x² - 2x + 1, what is -f(x)?",
      choices: [
        { id: "A", text: "−3x² + 2x − 1" },
        { id: "B", text: "3x² + 2x + 1" },
        { id: "C", text: "−3x² − 2x − 1" },
        { id: "D", text: "3x² - 2x - 1" }
      ],
      correctAnswer: "A",
      hint: "Multiply the entire expression by -1. Distribute the negative to every term.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** $-f(x)$ flips every coefficient: $-(3x^2-2x+1)=-3x^2+2x-1$.\n\n**The Full Solution:**\nStep 1: $-f(x)=-(3x^2-2x+1)$.\nStep 2: Distribute the $-1$ to each term: $-3x^2+2x-1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x^2+2x+1$): only the middle term's sign flipped; all three must change.\n* Choice C ($-3x^2-2x-1$): flipped the first and last terms but left $-2x$ negative; it should become $+2x$.\n* Choice D ($3x^2-2x-1$): only the last term flipped — that is $f(x)-2$, not $-f(x)$.\n\n**Test Day Takeaway:** $-f(x)$ negates the whole output: for $ax^2+bx+c$ it becomes $-ax^2-bx-c$, with every single coefficient changing sign.",
      skills: ['function-transformations']
    }
  ],

  // Section: Difficult Transformations
  // Based on "System of Equations Method" and "Answer Choice Method" from videos
  "Difficult Transformations": [
    {
      id: 1,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The partial graph of y = f(x) is shown. If g(x) = f(x + 4), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 6, b: 2, showPoints: [[0, 3], [1, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "6", denominator: "x" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 6" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "3", denominator: "x + 2" } }
      ],
      correctAnswer: "C",
      hint: "Read two points from the graph to set up a system of equations. Solve for a and b, then apply the transformation.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Read two points off the graph to nail down $f(x)=\\frac{6}{x+2}$, then $f(x+4)$ just bumps the denominator constant by $4$: $\\frac{6}{x+6}$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(0,3)$ and $(1,2)$. With $f(x)=\\frac{a}{x+b}$, the point $(0,3)$ gives $3=\\frac{a}{b}$, so $a=3b$.\nStep 2: The point $(1,2)$ gives $2=\\frac{a}{1+b}$. Substitute $a=3b$: $2(1+b)=3b \\Rightarrow 2+2b=3b \\Rightarrow b=2$, so $a=6$. Thus $f(x)=\\frac{6}{x+2}$.\nStep 3: $g(x)=f(x+4)=\\frac{6}{(x+4)+2}=\\frac{6}{x+6}$, which is Choice C.\nStep 4: Check: $g(0)=\\frac{6}{6}=1$ and $f(4)=\\frac{6}{6}=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{x}$): keeps the right $a=6$ but drops $b$ to $0$ instead of carrying it through as $b+4=6$.\n* Choice B ($\\frac{6}{x+4}$): replaced the whole denominator with $x+4$ rather than substituting $(x+4)$ for $x$ in $x+2$, which gives $x+6$.\n* Choice D ($\\frac{3}{x+2}$): changed the numerator and left the denominator alone; a horizontal shift only touches the input $x$, never $a$.\n\n**Test Day Takeaway:** For $f(x)=\\frac{a}{x+b}$, the shift $f(x+c)$ leaves $a$ fixed and turns the denominator into $x+(b+c)$.",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 2,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The partial graph of y = f(x) is shown. If g(x) = f(x − 2), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 8, b: 2, showPoints: [[0, 4], [2, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "8", denominator: "x + 4" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "8", denominator: "x" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "8", denominator: "x + 2" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "4", denominator: "x − 2" } }
      ],
      correctAnswer: "B",
      hint: "Read two points from the graph, solve for a and b, then apply the transformation g(x) = f(x - 2).",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Two points pin $f(x)=\\frac{8}{x+2}$. Then $f(x-2)$ makes the denominator $(x-2)+2=x$, leaving $\\frac{8}{x}$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(0,4)$ and $(2,2)$. With $f(x)=\\frac{a}{x+b}$, the point $(0,4)$ gives $4=\\frac{a}{b}$, so $a=4b$.\nStep 2: The point $(2,2)$ gives $2=\\frac{a}{2+b}$. Substitute $a=4b$: $2(2+b)=4b \\Rightarrow 4+2b=4b \\Rightarrow b=2$, so $a=8$. Thus $f(x)=\\frac{8}{x+2}$.\nStep 3: $g(x)=f(x-2)=\\frac{8}{(x-2)+2}=\\frac{8}{x}$, which is Choice B.\nStep 4: Check: $g(4)=\\frac{8}{4}=2$ and $f(2)=\\frac{8}{4}=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{x+4}$): added $2$ to the constant instead of subtracting; $f(x-2)$ gives $(x-2)+2=x$, not $x+4$.\n* Choice C ($\\frac{8}{x+2}$): this is $f(x)$ untouched — the shift was never applied.\n* Choice D ($\\frac{4}{x-2}$): changed the numerator and mishandled the shift; only the denominator's constant moves, and $a$ stays $8$.\n\n**Test Day Takeaway:** $f(x-c)$ replaces the denominator $x+b$ with $x+(b-c)$. When $c=b$, the constant cancels to leave just $x$.",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 3,
      difficulty: "hard",
      question: "The function f is defined by f(x) = (x - h)² + k. The graph of f has its vertex at (3, -4). If g(x) = f(x + 5), what are the coordinates of the vertex of the graph of g?",
      diagram: {
        type: "quadraticVertex",
        params: { vertex: [3, -4], direction: "up", showVertex: true }
      },
      choices: [
        { id: "A", text: "(8, -4)" },
        { id: "B", text: "(-2, -4)" },
        { id: "C", text: "(3, 1)" },
        { id: "D", text: "(-2, 1)" }
      ],
      correctAnswer: "B",
      hint: "The transformation g(x) = f(x + 5) shifts the graph horizontally. Adding inside the function shifts left (opposite direction). The y-coordinate stays the same.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(x+5)$ shifts the graph left $5$, and an inside change moves only the $x$-coordinate: $(3,-4)\\to(-2,-4)$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+5)$. The $+5$ is inside the function, so the graph slides left $5$ — opposite the sign.\nStep 2: The vertical position is untouched, so only the $x$-coordinate changes: $3-5=-2$. The vertex is $(-2,-4)$, which is Choice B.\nStep 3: Check by rewriting: $f(x)=(x-3)^2-4$, so $g(x)=((x+5)-3)^2-4=(x+2)^2-4$, with vertex at $x=-2$, $y=-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(8,-4)$): shifted right $5$ instead of left; a $+5$ inside moves the graph left.\n* Choice C ($(3,1)$): added $5$ to the $y$-coordinate, treating the inside change as if it were outside.\n* Choice D ($(-2,1)$): applied the shift to both coordinates; an inside change affects horizontal position only.\n\n**Test Day Takeaway:** $f(x+c)$ shifts left by $c$ and changes only the $x$-coordinate; the vertex's $y$-value is fixed under any inside shift.",
      skills: ['function-transformations', 'vertex-form']
    },
    {
      id: 4,
      difficulty: "hard",
      question: "The function f is defined by f(x) = |x + 2| - 3. The vertex of the graph of f is at (-2, -3). If g(x) = f(x - 4) + 2, what are the coordinates of the vertex of the graph of g?",
      diagram: {
        type: "absoluteValue",
        params: { vertex: [-2, -3], slope: 1 }
      },
      choices: [
        { id: "A", text: "(2, -1)" },
        { id: "B", text: "(-6, -1)" },
        { id: "C", text: "(2, -5)" },
        { id: "D", text: "(-6, -5)" }
      ],
      correctAnswer: "A",
      hint: "Apply both transformations step by step. f(x - 4) shifts right 4 units. The +2 outside shifts up 2 units.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(x-4)$ shifts right $4$ (inside, opposite sign) and $+2$ shifts up $2$ (outside, same sign): $(-2,-3)\\to(2,-1)$.\n\n**The Full Solution:**\nStep 1: The inside change $x-4$ moves the graph right $4$, so the $x$-coordinate goes $-2+4=2$.\nStep 2: The outside $+2$ moves the graph up $2$, so the $y$-coordinate goes $-3+2=-1$.\nStep 3: The new vertex is $(2,-1)$, which is Choice A.\nStep 4: Check by rewriting: $g(x)=|(x-4)+2|-3+2=|x-2|-1$, with vertex at $x=2$, $y=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-6,-1)$): shifted left $4$ instead of right; $f(x-4)$ moves the graph right.\n* Choice C ($(2,-5)$): correct horizontal move, but shifted down $2$ instead of up; a $+2$ outside means up.\n* Choice D ($(-6,-5)$): reversed both directions — left and down.\n\n**Test Day Takeaway:** For $f(x-h)+k$, the vertex moves to $(x_0+h,\\;y_0+k)$: inside uses the opposite sign, outside uses the direct sign.",
      skills: ['function-transformations', 'combined-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. From the graph, f(1) = 6 and f(5) = 2. If g(x) = f(x + 4), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 12, b: 1, showPoints: [[1, 6], [5, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "12", denominator: "x + 6" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "12", denominator: "x + 2" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "12", denominator: "x − 2" } }
      ],
      correctAnswer: "A",
      hint: "Set up two equations using the given function values. Solve for a and b, then apply the transformation.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The two points fix $f(x)=\\frac{12}{x+2}$. Then $f(x+4)$ keeps the numerator at $12$ and pushes the denominator constant to $2+4=6$: $\\frac{12}{x+6}$.\n\n**The Full Solution:**\nStep 1: With $f(x)=\\frac{a}{x+b}$, divide the two given values to clear $a$: $\\frac{f(1)}{f(5)}=\\frac{6}{2}=\\frac{5+b}{1+b}$.\nStep 2: Solve $3(1+b)=5+b \\Rightarrow 3+3b=5+b \\Rightarrow 2b=2 \\Rightarrow b=2$. Back-substitute: $6=\\frac{a}{1+2}$, so $a=12$. Thus $f(x)=\\frac{12}{x+2}$.\nStep 3: Apply the shift: $g(x)=f(x+4)=\\frac{12}{(x+4)+2}=\\frac{12}{x+6}$, which is Choice A.\nStep 4: Check the shape: the vertical asymptote at $x=-2$ moves to $x=-6$ under a left shift of $4$, matching the $\\frac{12}{x+6}$ form. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{12}{x+2}$): this is $f(x)$ itself; the $+4$ shift was never applied to the denominator.\n* Choice C ($\\frac{6}{x+4}$): halved the numerator to $6$; a horizontal shift never changes $a$.\n* Choice D ($\\frac{12}{x-2}$): subtracted in the denominator; $f(x+4)$ increases the denominator constant, it does not decrease it.\n\n**Test Day Takeaway:** Solve the two-point system for $a$ and $b$ first, then apply $f(x+c)=\\frac{a}{x+(b+c)}$ — the numerator never moves.",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 6,
      difficulty: "hard",
      question: "The graph of y = f(x) passes through the points (2, 5) and (4, 9). The function g is defined by g(x) = f(x - 3) + 2. Which point must be on the graph of g?",
      diagram: {
        type: "coordinatePoints",
        params: { points: [[2, 5], [4, 9]], labels: ["(2, 5)", "(4, 9)"] }
      },
      choices: [
        { id: "A", text: "(5, 7)" },
        { id: "B", text: "(7, 11)" },
        { id: "C", text: "(1, 7)" },
        { id: "D", text: "(-1, 3)" }
      ],
      correctAnswer: "B",
      hint: "For g(x) = f(x - 3) + 2, the (x - 3) shifts right 3 units, and the +2 shifts up 2 units. Apply both to one of the given points.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(x)=f(x-3)+2$ shifts every point right $3$ and up $2$. Map the known point $(4,9)$: $(4+3,\\;9+2)=(7,11)$.\n\n**The Full Solution:**\nStep 1: The inside $x-3$ moves points right $3$; the outside $+2$ moves them up $2$.\nStep 2: Apply this to $(4,9)$ from $f$: $x\\to 4+3=7$ and $y\\to 9+2=11$, giving $(7,11)$, which is Choice B.\nStep 3: Check: $g(7)=f(7-3)+2=f(4)+2=9+2=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5,7)$): this is the image of the other listed point $(2,5)$ under the same rule; the question targets the image of $(4,9)$.\n* Choice C ($(1,7)$): shifted left $3$ instead of right; $f(x-3)$ moves points right.\n* Choice D ($(-1,3)$): reversed both shifts — left $3$ and down $2$.\n\n**Test Day Takeaway:** For $g(x)=f(x-h)+k$, every point $(a,b)$ on $f$ maps to $(a+h,\\;b+k)$ on $g$.",
      skills: ['function-transformations', 'combined-transformations']
    },
    {
      id: 7,
      difficulty: "hard",
      question: "The quadratic function f has x-intercepts at x = -1 and x = 5. If g(x) = f(x + 3), what are the x-intercepts of the graph of g?",
      diagram: {
        type: "quadraticIntercepts",
        params: { intercepts: [-1, 5], direction: "up" }
      },
      choices: [
        { id: "A", text: "x = 2 and x = 8" },
        { id: "B", text: "x = -4 and x = 2" },
        { id: "C", text: "x = -1 and x = 5" },
        { id: "D", text: "x = -4 and x = 8" }
      ],
      correctAnswer: "B",
      hint: "g(x) = f(x + 3) shifts the graph left 3 units. Each x-intercept shifts left by 3.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(x+3)$ shifts left $3$, so subtract $3$ from each intercept: $-1-3=-4$ and $5-3=2$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+3)$. The $+3$ inside moves the graph left $3$ — opposite the sign.\nStep 2: Each $x$-intercept slides the same way: $-1\\to-4$ and $5\\to 2$. The new intercepts are $x=-4$ and $x=2$, which is Choice B.\nStep 3: Check: $g(-4)=f(-4+3)=f(-1)=0$ and $g(2)=f(2+3)=f(5)=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=2$ and $x=8$): shifted right $3$; seeing $+3$, students add instead of subtract, but $f(x+3)$ moves left.\n* Choice C ($x=-1$ and $x=5$): the original intercepts with no shift applied.\n* Choice D ($x=-4$ and $x=8$): shifted one intercept left and the other right; both must move the same direction.\n\n**Test Day Takeaway:** $f(x+c)$ moves every $x$-intercept from $x_0$ to $x_0-c$ — all features shift the same direction and amount.",
      skills: ['function-transformations', 'x-intercepts']
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The graph passes through (0, 3) and (1, 2). Using the answer choice method: if g(x) = f(x + 2), which equation could define g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 6, b: 2, showPoints: [[0, 3], [1, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 2" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "3", denominator: "x + 1" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "6", denominator: "x" } }
      ],
      correctAnswer: "A",
      hint: "Answer Choice Method: Work backwards from each answer. If g(x) = f(x + 2), then f(x) = g(x - 2). Test which answer gives f(0) = 3 and f(1) = 2.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Since $g(x)=f(x+2)$, reverse it: $f(x)=g(x-2)$. Plug Choice A in — $\\frac{6}{(x-2)+4}=\\frac{6}{x+2}$ — and it hits both points $(0,3)$ and $(1,2)$.\n\n**The Full Solution:**\nStep 1: $g(x)=f(x+2)$ rearranges to $f(x)=g(x-2)$, so a correct $g$ must give back the original $f$ when shifted by $-2$.\nStep 2: Test Choice A, $g(x)=\\frac{6}{x+4}$: $f(x)=g(x-2)=\\frac{6}{(x-2)+4}=\\frac{6}{x+2}$.\nStep 3: Check the known points: $f(0)=\\frac{6}{2}=3$ and $f(1)=\\frac{6}{3}=2$. Both match, so Choice A is confirmed.\nStep 4: Forward check: $g(x)=f(x+2)=\\frac{6}{(x+2)+2}=\\frac{6}{x+4}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{6}{x+2}$): this is $f(x)$ itself; the shift was never applied, so $g(x)\\neq f(x)$.\n* Choice C ($\\frac{3}{x+1}$): testing gives $f(x)=\\frac{3}{x-1}$, so $f(0)=-3\\neq 3$.\n* Choice D ($\\frac{6}{x}$): testing gives $f(x)=\\frac{6}{x-2}$, so $f(0)=-3\\neq 3$.\n\n**Test Day Takeaway:** With answer choices in hand, invert the transformation — if $g(x)=f(x+c)$, then $f(x)=g(x-c)$ — and check each candidate against the known points.",
      skills: ['function-transformations', 'answer-choice-method']
    },
    {
      id: 9,
      difficulty: "hard",
      question: "The graph of y = f(x) passes through the points (1, 4) and (3, 10). The function g is defined by g(x) = 2f(x - 1). Which point must be on the graph of g?",
      diagram: {
        type: "coordinatePoints",
        params: { points: [[1, 4], [3, 10]], labels: ["(1, 4)", "(3, 10)"] }
      },
      choices: [
        { id: "A", text: "(2, 8)" },
        { id: "B", text: "(0, 8)" },
        { id: "C", text: "(4, 20)" },
        { id: "D", text: "(2, 20)" }
      ],
      correctAnswer: "C",
      hint: "For g(x) = 2f(x - 1), first apply the horizontal shift (x - 1 shifts right 1), then the vertical stretch (multiply y by 2).",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(x)=2f(x-1)$ shifts right $1$ and stretches $y$ by $2$. Map $(3,10)$: $(3+1,\\;2\\cdot 10)=(4,20)$.\n\n**The Full Solution:**\nStep 1: The inside $x-1$ moves points right $1$; the factor $2$ outside multiplies each $y$-value by $2$.\nStep 2: Apply to $(3,10)$ from $f$: $x\\to 3+1=4$ and $y\\to 2\\cdot 10=20$, giving $(4,20)$, which is Choice C.\nStep 3: Check: $g(4)=2f(4-1)=2f(3)=2(10)=20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,8)$): this is the image of the other listed point $(1,4)$ under the same rule; the question targets the image of $(3,10)$.\n* Choice B ($(0,8)$): shifted left $1$ instead of right, landing on $g(0)=2f(-1)$, which the given data does not determine.\n* Choice D ($(2,20)$): used the correct stretched $y=20$ from $(3,10)$ but shifted left to $x=2$; $f(x-1)$ moves right, to $x=4$.\n\n**Test Day Takeaway:** For $a\\cdot f(x-h)$, a point $(x_0,y_0)$ maps to $(x_0+h,\\;a\\cdot y_0)$: shift the input, scale the output.",
      skills: ['function-transformations', 'combined-transformations']
    }
  ]
};
