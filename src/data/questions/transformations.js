// Practice questions for Transformations module
// Questions are organized by SECTION (question type)

export const transformationsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $p$ is defined by $p(x)=x^{2}$. In the $xy$-plane, the graph of $y=p(x)-6$ is the graph of $y=p(x)$ shifted in which of the following ways?",
      choices: [
        { id: "A", text: "Down $6$ units" },
        // distractor: reads the outside -6 as a horizontal move
        { id: "B", text: "Left $6$ units" },
        // distractor: reads the outside -6 as a shift right
        { id: "C", text: "Right $6$ units" },
        // distractor: reverses the sign of an outside constant
        { id: "D", text: "Up $6$ units" }
      ],
      correctAnswer: "A",
      hint: "Decide first whether the $-6$ acts on the input of $p$ or on its output.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The $-6$ sits outside $p$, so it lowers every output by $6$: the graph slides down $6$.\n\n**The Full Solution:**\nStep 1: In $p(x)-6$ the subtraction happens after $p$ has produced its output, so only $y$-values change.\nStep 2: A point $(a,b)$ on $y=p(x)$ becomes $(a,\\,b-6)$ on $y=p(x)-6$; the $x$-coordinate never moves.\nStep 3: Check with the lowest point: $(0,0)$ on $y=p(x)$ becomes $(0,-6)$, exactly $6$ units lower. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Left $6$ units): a horizontal move requires a change inside $p$, such as $p(x+6)$; here the $6$ is outside.\n* Choice C (Right $6$ units): right $6$ would be $p(x-6)$ — the subtraction would have to be attached to $x$, not to the output.\n* Choice D (Up $6$ units): the sign is read backwards; outside constants move the graph in the direction of their own sign, so $-6$ means down.\n\n**Test Day Takeaway:** Outside the function, constants act on $y$ and read straight: $+k$ raises the graph, $-k$ lowers it.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $q$ is defined by $q(x)=\\sqrt{x}$, and the leftmost point of the graph of $y=q(x)$ in the $xy$-plane is the origin. What is the leftmost point of the graph of $y=q(x-9)$?",
      choices: [
        // distractor: moves the endpoint left instead of right
        { id: "A", text: "$(-9,0)$" },
        // distractor: applies the shift to the y-coordinate
        { id: "B", text: "$(0,-9)$" },
        // distractor: applies the shift to the y-coordinate with the wrong sign
        { id: "C", text: "$(0,9)$" },
        { id: "D", text: "$(9,0)$" }
      ],
      correctAnswer: "D",
      hint: "Ask which input makes the quantity under the radical equal to $0$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The radical starts where $x-9=0$, so the endpoint moves from $x=0$ to $x=9$ and stays on the $x$-axis.\n\n**The Full Solution:**\nStep 1: $q(x-9)=\\sqrt{x-9}$, which is defined only when $x-9\\ge 0$, that is, when $x\\ge 9$.\nStep 2: At the smallest allowed input, $x=9$, the output is $\\sqrt{9-9}=\\sqrt{0}=0$.\nStep 3: So the leftmost point is $(9,0)$ — the origin translated $9$ units right, with no vertical movement. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9,0)$): treats $x-9$ as a shift left; inside the function the graph moves opposite to the sign.\n* Choice B ($(0,-9)$): applies the $9$ to the output, which would require $q(x)-9$.\n* Choice C ($(0,9)$): applies the $9$ to the output and reverses its sign as well.\n\n**Test Day Takeaway:** For a change inside the function, set the inside expression equal to the old input value and solve for the new $x$.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For a function $m$, the graph of $y=-m(x)$ in the $xy$-plane can be obtained by reflecting the graph of $y=m(x)$ across which of the following lines?",
      choices: [
        // distractor: reflects through the origin instead of the x-axis
        { id: "A", text: "The line $y=-x$" },
        // distractor: confuses a sign change with taking the inverse
        { id: "B", text: "The line $y=x$" },
        { id: "C", text: "The $x$-axis" },
        // distractor: confuses -m(x) with m(-x)
        { id: "D", text: "The $y$-axis" }
      ],
      correctAnswer: "C",
      hint: "Track what the negative sign does to a single point $(a,b)$ on the graph of $m$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Negating the output sends $(a,b)$ to $(a,-b)$ — the $x$-coordinate is fixed and the height flips, which is a mirror in the $x$-axis.\n\n**The Full Solution:**\nStep 1: The negative sign is applied after $m$ evaluates, so it multiplies every output by $-1$.\nStep 2: A point $(a,b)$ on $y=m(x)$ therefore corresponds to $(a,-b)$ on $y=-m(x)$: same horizontal position, opposite height.\nStep 3: Points above the $x$-axis land the same distance below it, and points on the axis stay put — the definition of a reflection across the $x$-axis. Check: if $m(4)=7$, then $-m(4)=-7$, and $(4,7)$ and $(4,-7)$ are mirror images in the $x$-axis. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (the line $y=-x$): reflecting across $y=-x$ sends $(a,b)$ to $(-b,-a)$, which mixes the coordinates; only the output changed here.\n* Choice B (the line $y=x$): reflecting across $y=x$ swaps the coordinates and produces the inverse relation, not a sign change.\n* Choice D (the $y$-axis): that reflection is $m(-x)$, with the negative sign attached to the input rather than to the output.\n\n**Test Day Takeaway:** A negative outside the function flips $y$ (reflection in the $x$-axis); a negative inside flips $x$ (reflection in the $y$-axis).",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $w$ is defined by $w(x)=|x|$. Which of the following describes the graph of $y=5w(x)$ compared with the graph of $y=w(x)$ in the $xy$-plane?",
      choices: [
        // distractor: attaches the multiplier to the input
        { id: "A", text: "A horizontal compression by a factor of $5$" },
        // distractor: attaches the multiplier to the input and inverts it
        { id: "B", text: "A horizontal stretch by a factor of $5$" },
        // distractor: reverses stretch and compression
        { id: "C", text: "A vertical compression by a factor of $\\frac{1}{5}$" },
        { id: "D", text: "A vertical stretch by a factor of $5$" }
      ],
      correctAnswer: "D",
      hint: "Multiplying outside the function changes one coordinate of every point — decide which one.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The factor $5$ multiplies the output, so every height is $5$ times as large: a vertical stretch by $5$.\n\n**The Full Solution:**\nStep 1: $5w(x)=5|x|$ takes the value of $w$ at an input and multiplies it by $5$; the input itself is untouched.\nStep 2: A point $(a,b)$ on $y=w(x)$ becomes $(a,5b)$, so the graph is pulled away from the $x$-axis.\nStep 3: Check: $w(3)=3$ while $5w(3)=15$, so $(3,3)$ becomes $(3,15)$ — five times as high at the same $x$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (horizontal compression by $5$): that comes from $w(5x)$, a factor attached to the input, not to the output.\n* Choice B (horizontal stretch by $5$): that would be $w\\!\\left(\\frac{x}{5}\\right)$; no horizontal change occurs when the multiplier is outside.\n* Choice C (vertical compression by $\\frac{1}{5}$): the direction of the scaling is reversed; a factor greater than $1$ outside stretches vertically.\n\n**Test Day Takeaway:** A multiplier outside the function scales $y$; a multiplier inside scales $x$ by the reciprocal.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, a function $d$ is defined for every $x>0$, and its graph lies entirely in quadrants I and IV. The graph of $y=d(-x)$ lies entirely in which quadrants?",
      choices: [
        // distractor: keeps the original quadrants and adds the mirror image
        { id: "A", text: "Quadrants I and II" },
        // distractor: treats d(-x) as leaving the graph unchanged
        { id: "B", text: "Quadrants I and IV" },
        { id: "C", text: "Quadrants II and III" },
        // distractor: reflects across the x-axis instead of the y-axis
        { id: "D", text: "Quadrants III and IV" }
      ],
      correctAnswer: "C",
      hint: "Follow one point $(a,b)$ with $a>0$ through the substitution and watch only the sign of its first coordinate.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** Replacing $x$ with $-x$ sends $(a,b)$ to $(-a,b)$, so every point keeps its height but crosses to the left half-plane: I becomes II and IV becomes III.\n\n**The Full Solution:**\nStep 1: If $(a,b)$ is on the graph of $y=d(x)$, then $d(a)=b$. For $y=d(-x)$, the input $-a$ gives $d(-(-a))=d(a)=b$, so $(-a,b)$ is on the new graph.\nStep 2: Because $d$ is defined only for $x>0$, every original point has $a>0$, so every new point has first coordinate $-a<0$: the entire graph sits left of the $y$-axis.\nStep 3: Heights are unchanged, so points that were in quadrant I ($b>0$) move to quadrant II, and points that were in quadrant IV ($b<0$) move to quadrant III. Check: $(2,5)\\to(-2,5)$ and $(2,-5)\\to(-2,-5)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (quadrants I and II): keeps a copy of the original graph; a reflection relocates the points rather than duplicating them.\n* Choice B (quadrants I and IV): assumes $d(-x)$ leaves the graph in place, which would require $d$ to satisfy $d(-x)=d(x)$.\n* Choice D (quadrants III and IV): flips the heights instead of the inputs — that is the effect of $-d(x)$.\n\n**Test Day Takeaway:** A negative inside the function reflects across the $y$-axis: first coordinates change sign, second coordinates do not.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The function $r$ is defined by $r(x)=4x-9$. In the $xy$-plane, the graph of $y=r(x)+5$ is a translation of the graph of $y=r(x)$. Which translation is it?",
      choices: [
        // distractor: reverses the sign of an outside constant
        { id: "A", text: "$5$ units down" },
        // distractor: treats the outside +5 as an inside change
        { id: "B", text: "$5$ units left" },
        // distractor: treats the outside +5 as a horizontal shift
        { id: "C", text: "$5$ units right" },
        { id: "D", text: "$5$ units up" }
      ],
      correctAnswer: "D",
      hint: "Compare the two outputs at the same input and see which one is larger.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Adding $5$ after $r$ evaluates raises every output by $5$, a translation up $5$ units.\n\n**The Full Solution:**\nStep 1: $r(x)+5=(4x-9)+5=4x-4$, a line with the same slope $4$ but a $y$-intercept $5$ units higher.\nStep 2: Equal slopes mean the lines are parallel, so the change must be a pure vertical translation.\nStep 3: Check at $x=0$: $r(0)=-9$ and $r(0)+5=-4$, and $-4$ is $5$ units above $-9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$ units down): reverses the sign; the output grows by $5$, so the graph rises.\n* Choice B ($5$ units left): a left shift comes from $r(x+5)$, where the $5$ is attached to the input.\n* Choice C ($5$ units right): a right shift comes from $r(x-5)$; no change was made inside the function.\n\n**Test Day Takeaway:** For a line, adding a constant outside changes only the $y$-intercept — same slope, whole graph lifted.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "The function $t$ is defined by $t(x)=|x|$. In the $xy$-plane, the graph of $y=t(x+8)$ can be produced by moving the graph of $y=t(x)$ how far and in which direction?",
      choices: [
        // distractor: treats the inside +8 as a vertical shift down
        { id: "A", text: "$8$ units down" },
        { id: "B", text: "$8$ units left" },
        // distractor: moves the graph in the direction of the sign
        { id: "C", text: "$8$ units right" },
        // distractor: treats the inside +8 as a vertical shift up
        { id: "D", text: "$8$ units up" }
      ],
      correctAnswer: "B",
      hint: "Find the input that now produces the corner of the V.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The corner occurs where the inside expression is $0$: $x+8=0$ gives $x=-8$, so the graph slid $8$ units left.\n\n**The Full Solution:**\nStep 1: $t(x+8)=|x+8|$, and the vertex of an absolute value graph sits where the expression inside the bars equals $0$.\nStep 2: Solving $x+8=0$ gives $x=-8$, so the vertex has moved from $(0,0)$ to $(-8,0)$.\nStep 3: Every other point moves with it: the point $(3,3)$ on $y=t(x)$ corresponds to $(-5,3)$ on $y=t(x+8)$, again $8$ units left. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$ units down): a downward move needs $t(x)-8$, with the constant outside the absolute value.\n* Choice C ($8$ units right): the classic reversal: inside the function, $+8$ moves the graph in the negative direction.\n* Choice D ($8$ units up): an upward move needs $t(x)+8$; here the $8$ is inside the bars, so the change is horizontal.\n\n**Test Day Takeaway:** Inside the function the graph moves opposite to the sign: $+8$ inside means $8$ units left.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The function $z$ is defined by $z(x)=x^{2}$, and the lowest point of the graph of $y=z(x)$ in the $xy$-plane is $(0,0)$. What is the lowest point of the graph of $y=z(x-7)+4$?",
      choices: [
        // distractor: shifts left instead of right
        { id: "A", text: "$(-7,4)$" },
        // distractor: swaps the two coordinates
        { id: "B", text: "$(4,7)$" },
        // distractor: reverses the sign of the outside constant
        { id: "C", text: "$(7,-4)$" },
        { id: "D", text: "$(7,4)$" }
      ],
      correctAnswer: "D",
      hint: "Handle the inside change and the outside change one at a time, each on its own coordinate.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Inside, $x-7$ moves the low point $7$ units right; outside, $+4$ lifts it $4$ units: $(0,0)\\to(7,4)$.\n\n**The Full Solution:**\nStep 1: $z(x-7)=(x-7)^{2}$ is smallest when $x-7=0$, that is, at $x=7$, so the horizontal position moves from $0$ to $7$.\nStep 2: The $+4$ is added after squaring, so it raises the minimum output from $0$ to $0+4=4$.\nStep 3: The lowest point is therefore $(7,4)$. Check: $z(7-7)+4=0+4=4$, and any other $x$ gives $(x-7)^{2}>0$, hence a larger value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-7,4)$): moves left instead of right; $z(x-7)$ shifts the graph in the positive direction.\n* Choice B ($(4,7)$): assigns the inside number to the height and the outside number to the horizontal position — the roles are swapped.\n* Choice C ($(7,-4)$): reverses the sign of the outside constant, which adds rather than subtracts height.\n\n**Test Day Takeaway:** Vertex bookkeeping: the inside constant changes $x$ and reverses its sign; the outside constant changes $y$ and keeps its sign.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The point $(36,6)$ lies on the graph of $y=h(x)$ in the $xy$-plane, where $h(x)=\\sqrt{x}$. Which point lies on the graph of $y=\\frac{1}{3}h(x)$?",
      choices: [
        // distractor: scales both coordinates
        { id: "A", text: "$(12,2)$" },
        // distractor: scales the input instead of the output
        { id: "B", text: "$(12,6)$" },
        { id: "C", text: "$(36,2)$" },
        // distractor: multiplies by 3 instead of dividing
        { id: "D", text: "$(36,18)$" }
      ],
      correctAnswer: "C",
      hint: "The factor is applied after $h$ produces its output, so only one coordinate can change.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The input stays $36$ and the output is divided by $3$: $\\frac{1}{3}(6)=2$, giving $(36,2)$.\n\n**The Full Solution:**\nStep 1: At $x=36$, $h(36)=\\sqrt{36}=6$, which is the height given in the problem.\nStep 2: The new function multiplies that output by $\\frac{1}{3}$: $\\frac{1}{3}h(36)=\\frac{1}{3}(6)=2$.\nStep 3: The input was never altered, so the point is $(36,2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(12,2)$): divides both coordinates by $3$; the factor outside the function touches the output only.\n* Choice B ($(12,6)$): divides the input by $3$, which is the effect of $h\\!\\left(\\frac{x}{3}\\right)$, not of $\\frac{1}{3}h(x)$.\n* Choice D ($(36,18)$): multiplies the output by $3$ instead of dividing by $3$.\n\n**Test Day Takeaway:** A factor outside the function scales heights only: $(a,b)$ becomes $(a,cb)$.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "The graph of $y=j(x)$ is obtained by first reflecting the graph of $y=k(x)$ across the $x$-axis and then raising the result $9$ units. Which equation defines $j$?",
      choices: [
        // distractor: shifts up before reflecting, which flips the direction of the shift
        { id: "A", text: "$j(x)=-k(x)-9$" },
        { id: "B", text: "$j(x)=-k(x)+9$" },
        // distractor: places the vertical shift inside the function
        { id: "C", text: "$j(x)=-k(x+9)$" },
        // distractor: reflects across the y-axis
        { id: "D", text: "$j(x)=k(-x)+9$" }
      ],
      correctAnswer: "B",
      hint: "Write the two steps in the order performed and apply the second one to the result of the first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Reflecting gives $-k(x)$; raising that by $9$ adds $9$ to it, so $j(x)=-k(x)+9$.\n\n**The Full Solution:**\nStep 1: Reflecting across the $x$-axis negates every output, producing the intermediate function $-k(x)$.\nStep 2: Raising a graph $9$ units adds $9$ to whatever function is being graphed, so the result is $-k(x)+9$.\nStep 3: Check with a sample value: if $k(2)=4$, the reflection sends the point $(2,4)$ to $(2,-4)$, and the lift sends it to $(2,5)$. The formula agrees: $-k(2)+9=-4+9=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($j(x)=-k(x)-9$): applies the lift before the reflection: $-\\left(k(x)+9\\right)=-k(x)-9$ pushes the graph down, not up.\n* Choice C ($j(x)=-k(x+9)$): puts the $9$ inside the function, which shifts the graph horizontally instead of vertically.\n* Choice D ($j(x)=k(-x)+9$): negates the input, reflecting across the $y$-axis rather than the $x$-axis.\n\n**Test Day Takeaway:** Order matters when a reflection meets a vertical shift: reflect first, then add the shift to the reflected expression.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Graph
  "Transformations from Graph": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the $xy$-plane, the graph of $y=x^{2}$ is translated so that its lowest point is $(5,-3)$. Which equation could define the translated graph?",
      choices: [
        // distractor: swaps the coordinates of the vertex
        { id: "A", text: "$y=(x-3)^{2}-5$" },
        { id: "B", text: "$y=(x-5)^{2}-3$" },
        // distractor: reverses the sign of the vertical coordinate
        { id: "C", text: "$y=(x-5)^{2}+3$" },
        // distractor: copies the sign of h into the parentheses
        { id: "D", text: "$y=(x+5)^{2}-3$" }
      ],
      correctAnswer: "B",
      hint: "In vertex form, the number paired with $x$ inside the parentheses appears with the opposite sign of the horizontal position.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Vertex form is $y=(x-h)^{2}+k$ with vertex $(h,k)$, so $(5,-3)$ gives $y=(x-5)^{2}-3$.\n\n**The Full Solution:**\nStep 1: Translating $y=x^{2}$ without changing its shape produces an equation of the form $y=(x-h)^{2}+k$, whose lowest point is $(h,k)$.\nStep 2: Matching $(h,k)$ to the required lowest point gives $h=5$ and $k=-3$.\nStep 3: Substituting yields $y=(x-5)^{2}-3$. Check: at $x=5$, $y=0-3=-3$, and every other $x$ makes $(x-5)^{2}>0$, so $(5,-3)$ is indeed the lowest point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=(x-3)^{2}-5$): uses $3$ as the horizontal position and $-5$ as the height, swapping the two coordinates of the vertex.\n* Choice C ($y=(x-5)^{2}+3$): gets the horizontal move right but places the vertex $3$ units above the axis instead of below it.\n* Choice D ($y=(x+5)^{2}-3$): reads the $5$ directly into the parentheses; a vertex at $x=5$ requires the factor $x-5$.\n\n**Test Day Takeaway:** Read a translated parabola straight off vertex form: $(x-h)$ inside means the vertex is at $x=h$, and $+k$ outside means it is at height $k$.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The point $(6,11)$ lies on the graph of $y=f(x)$ in the $xy$-plane. The function $g$ is defined by $g(x)=f(x)-4$. Which point must lie on the graph of $y=g(x)$?",
      choices: [
        // distractor: subtracts the shift from the x-coordinate
        { id: "A", text: "$(2,11)$" },
        { id: "B", text: "$(6,7)$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$(6,15)$" },
        // distractor: adds the shift to the x-coordinate
        { id: "D", text: "$(10,11)$" }
      ],
      correctAnswer: "B",
      hint: "Evaluate the definition of $g$ at the input you already know something about.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(6)=f(6)-4=11-4=7$, so the point is $(6,7)$.\n\n**The Full Solution:**\nStep 1: The point $(6,11)$ tells you that $f(6)=11$.\nStep 2: The definition $g(x)=f(x)-4$ evaluated at $x=6$ gives $g(6)=f(6)-4$.\nStep 3: Substituting, $g(6)=11-4=7$, so $(6,7)$ is on the graph of $g$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,11)$): subtracts $4$ from the input; the $-4$ is outside the function and cannot move a point horizontally.\n* Choice C ($(6,15)$): adds $4$ instead of subtracting it.\n* Choice D ($(10,11)$): adds $4$ to the input, treating an outside change as a horizontal shift.\n\n**Test Day Takeaway:** When a constant sits outside the function, keep the input and adjust the output.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of $y=f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x)=f(x-2)-6$. The graph of $y=g(x)$ attains its maximum value at which point?",
      diagram: { type: "quadraticVertex", params: { vertex: [-3, 5], a: -0.5, showVertex: true } },
      choices: [
        // distractor: shifts left instead of right
        { id: "A", text: "$(-5,-1)$" },
        // distractor: reverses the direction of both shifts
        { id: "B", text: "$(-5,11)$" },
        { id: "C", text: "$(-1,-1)$" },
        // distractor: adds 6 instead of subtracting
        { id: "D", text: "$(-1,11)$" }
      ],
      correctAnswer: "C",
      hint: "Read the highest point of the graph shown, then move it once horizontally and once vertically.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The peak of $f$ is at $(-3,5)$; moving right $2$ and down $6$ puts the peak of $g$ at $(-1,-1)$.\n\n**The Full Solution:**\nStep 1: From the graph, the greatest value of $f$ is $5$, attained at $x=-3$, so the high point is $(-3,5)$.\nStep 2: The inside change $x-2$ shifts the graph right $2$ units: $-3+2=-1$.\nStep 3: The outside $-6$ lowers every output: $5-6=-1$. The maximum of $g$ occurs at $(-1,-1)$. Check: $g(-1)=f(-1-2)-6=f(-3)-6=5-6=-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5,-1)$): shifts left instead of right; $f(x-2)$ moves the graph in the positive direction.\n* Choice B ($(-5,11)$): reverses both changes at once — left instead of right and up instead of down.\n* Choice D ($(-1,11)$): adds $6$ to the height instead of subtracting it.\n\n**Test Day Takeaway:** Extreme points travel with the graph: apply the horizontal rule to the $x$-coordinate and the vertical rule to the $y$-coordinate.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The V-shaped graph of $y=f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x)=-f(x)+1$. What are the coordinates of the vertex of the graph of $y=g(x)$?",
      diagram: { type: "absoluteValue", params: { vertex: [2, -5], slope: 1 } },
      choices: [
        // distractor: reflects across the y-axis instead of the x-axis
        { id: "A", text: "$(-2,6)$" },
        // distractor: omits the reflection
        { id: "B", text: "$(2,-4)$" },
        // distractor: subtracts 1 after reflecting
        { id: "C", text: "$(2,4)$" },
        { id: "D", text: "$(2,6)$" }
      ],
      correctAnswer: "D",
      hint: "Apply the negative sign to the height of the vertex before you use the $+1$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The vertex sits at $(2,-5)$; negating the height gives $5$, and adding $1$ gives $(2,6)$.\n\n**The Full Solution:**\nStep 1: The corner of the V shown is at $(2,-5)$, so $f(2)=-5$.\nStep 2: $g(2)=-f(2)+1=-(-5)+1=5+1=6$, and the reflection plus vertical shift keep the corner at the same input, $x=2$.\nStep 3: The vertex of $g$ is $(2,6)$; the V now opens downward, so this point is the maximum. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2,6)$): negates the input as well, which is the effect of $f(-x)$, not of $-f(x)$.\n* Choice B ($(2,-4)$): skips the reflection and only adds $1$: $-5+1=-4$.\n* Choice C ($(2,4)$): reflects correctly but then subtracts $1$ instead of adding it: $5-1=4$.\n\n**Test Day Takeaway:** With $-f(x)+d$, flip the sign of the output first and add the constant to the flipped value.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y=f(x)$ has $x$-intercept $(3,0)$ and $y$-intercept $(0,-8)$. The function $g$ is defined by $g(x)=4f(x)$. Which of the following gives the intercepts of the graph of $y=g(x)$?",
      choices: [
        { id: "A", text: "$x$-intercept $(3,0)$ and $y$-intercept $(0,-32)$" },
        // distractor: adds the factor to the output
        { id: "B", text: "$x$-intercept $(3,0)$ and $y$-intercept $(0,-4)$" },
        // distractor: divides the output by the factor
        { id: "C", text: "$x$-intercept $(3,0)$ and $y$-intercept $(0,-2)$" },
        // distractor: scales the x-intercept as well
        { id: "D", text: "$x$-intercept $(12,0)$ and $y$-intercept $(0,-32)$" }
      ],
      correctAnswer: "A",
      hint: "Ask what multiplying an output by $4$ does to a height of $0$ and to a height of $-8$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiplying outputs by $4$ leaves a zero output at zero, so the $x$-intercept stays at $(3,0)$, while the $y$-intercept becomes $4(-8)=-32$.\n\n**The Full Solution:**\nStep 1: The given intercepts say $f(3)=0$ and $f(0)=-8$.\nStep 2: At $x=3$: $g(3)=4f(3)=4(0)=0$, so $(3,0)$ is still an $x$-intercept — a vertical stretch never moves a point that already lies on the $x$-axis.\nStep 3: At $x=0$: $g(0)=4f(0)=4(-8)=-32$, so the $y$-intercept is $(0,-32)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y$-intercept $(0,-4)$): adds $4$ to the output instead of multiplying by it: $-8+4=-4$.\n* Choice C ($y$-intercept $(0,-2)$): divides by $4$ rather than multiplying: $-8\\div 4=-2$.\n* Choice D ($x$-intercept $(12,0)$): stretches the input as well; a factor outside the function scales heights only, so $x$-intercepts are fixed.\n\n**Test Day Takeaway:** A vertical stretch fixes every $x$-intercept and multiplies every other height, the $y$-intercept included.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The graph shown in the $xy$-plane is the image of the graph of $y=x^{2}$ after a single translation. Which translation was applied?",
      diagram: { type: "quadraticVertex", params: { vertex: [-4, 0], a: 1, showVertex: true } },
      choices: [
        // distractor: attaches the -4 to the height instead of to the input
        { id: "A", text: "$4$ units down" },
        { id: "B", text: "$4$ units left" },
        // distractor: moves the vertex in the wrong direction
        { id: "C", text: "$4$ units right" },
        // distractor: reads the size of the move but assigns it to the height, ignoring the sign
        { id: "D", text: "$4$ units up" }
      ],
      correctAnswer: "B",
      hint: "Compare the lowest point of the curve drawn with the lowest point of $y=x^{2}$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The low point has moved from $(0,0)$ to $(-4,0)$ — same height, $4$ units in the negative direction.\n\n**The Full Solution:**\nStep 1: The graph of $y=x^{2}$ has its lowest point at the origin.\nStep 2: The curve drawn has the same shape with its lowest point at $(-4,0)$.\nStep 3: Only the first coordinate changed, and it decreased by $4$, so the translation is $4$ units left. Check: $y=(x+4)^{2}$ has its minimum where $x+4=0$, at $x=-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$ units down): the lowest point is still on the $x$-axis, so no vertical movement occurred.\n* Choice C ($4$ units right): a right translation would put the low point at $(4,0)$, on the other side of the $y$-axis.\n* Choice D ($4$ units up): an upward translation would lift the low point off the $x$-axis to $(0,4)$.\n\n**Test Day Takeaway:** Identify a translation by tracking one recognizable point — for a parabola, the vertex is the easiest one.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "The graph of $y=f(x)$ in the $xy$-plane passes through the point $(0,7)$. Which point must lie on the graph of $y=f(x-5)$?",
      choices: [
        // distractor: shifts left instead of right
        { id: "A", text: "$(-5,7)$" },
        // distractor: applies the shift to the output
        { id: "B", text: "$(0,2)$" },
        // distractor: applies the shift to the output with the wrong sign
        { id: "C", text: "$(0,12)$" },
        { id: "D", text: "$(5,7)$" }
      ],
      correctAnswer: "D",
      hint: "Find the value of $x$ that makes $x-5$ equal to the input you already know.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Setting $x-5=0$ gives $x=5$, and the output there is $f(0)=7$, so $(5,7)$ is on the new graph.\n\n**The Full Solution:**\nStep 1: The given point says $f(0)=7$.\nStep 2: For $y=f(x-5)$ to use that known output, the inside expression must equal $0$: $x-5=0$, so $x=5$.\nStep 3: At $x=5$ the value is $f(5-5)=f(0)=7$, giving the point $(5,7)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5,7)$): moves left; inside the function, subtracting $5$ shifts the graph right.\n* Choice B ($(0,2)$): subtracts $5$ from the output, which would require $f(x)-5$.\n* Choice C ($(0,12)$): adds $5$ to the output, again treating an inside change as a vertical one.\n\n**Test Day Takeaway:** For $f(x-c)$, add $c$ to the $x$-coordinate of every known point and leave the height alone.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The parabola shown in the $xy$-plane is the graph of $y=f(x)$. If $g(x)=f(x+6)+5$, what are the coordinates of the lowest point of the graph of $y=g(x)$?",
      diagram: { type: "quadraticVertex", params: { vertex: [2, -7], a: 1, showVertex: true } },
      choices: [
        // distractor: subtracts the outside constant
        { id: "A", text: "$(-4,-12)$" },
        { id: "B", text: "$(-4,-2)$" },
        // distractor: shifts right instead of left
        { id: "C", text: "$(8,-2)$" },
        // distractor: reverses both constants
        { id: "D", text: "$(8,-12)$" }
      ],
      correctAnswer: "B",
      hint: "Locate the vertex on the figure first; the two constants then act on separate coordinates.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex shown is $(2,-7)$; $x+6$ moves it $6$ left and $+5$ lifts it $5$, giving $(-4,-2)$.\n\n**The Full Solution:**\nStep 1: The parabola opens upward with its lowest point at $(2,-7)$, so $f(2)=-7$ is the minimum value of $f$.\nStep 2: Inside the function, $x+6$ shifts the graph $6$ units left: $2-6=-4$.\nStep 3: Outside, $+5$ raises every output: $-7+5=-2$. The lowest point of $g$ is $(-4,-2)$. Check: $g(-4)=f(-4+6)+5=f(2)+5=-7+5=-2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-4,-12)$): subtracts $5$ from the minimum instead of adding it.\n* Choice C ($(8,-2)$): shifts right; a $+6$ inside the function moves the graph left.\n* Choice D ($(8,-12)$): reverses the direction of both constants.\n\n**Test Day Takeaway:** Split the work: inside constants move $x$ against their sign, outside constants move $y$ with their sign.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $y=f(x)$ is reflected across the $y$-axis, and the resulting graph is then translated right $3$ units. Which equation defines the final graph?",
      choices: [
        // distractor: reflects across the wrong axis
        { id: "A", text: "$y=-f(x-3)$" },
        // distractor: translates up instead of right
        { id: "B", text: "$y=f(-x)+3$" },
        // distractor: translates the reflected graph left
        { id: "C", text: "$y=f(-x-3)$" },
        { id: "D", text: "$y=f(3-x)$" }
      ],
      correctAnswer: "D",
      hint: "Perform the reflection first, then substitute $x-3$ everywhere the input appears in that result.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** The reflection gives $f(-x)$; translating right $3$ replaces $x$ with $x-3$, producing $f(-(x-3))=f(3-x)$.\n\n**The Full Solution:**\nStep 1: Reflecting across the $y$-axis negates the input, so the intermediate equation is $y=f(-x)$.\nStep 2: A translation right $3$ units replaces every $x$ in that equation with $x-3$: $y=f(-(x-3))$.\nStep 3: Simplifying the input gives $y=f(3-x)$. Check: if $f(0)=1$, then the original point $(0,1)$ is unmoved by the reflection and lands at $(3,1)$; the formula gives $f(3-3)=f(0)=1$ at $x=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=-f(x-3)$): negates the output, which reflects across the $x$-axis instead of the $y$-axis.\n* Choice B ($y=f(-x)+3$): adds $3$ outside, translating the reflected graph up rather than right.\n* Choice C ($y=f(-x-3)$): equals $f(-(x+3))$, which translates the reflected graph $3$ units left.\n\n**Test Day Takeaway:** After a reflection, substitute the horizontal shift into the whole input expression — do not just append it.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y=f(x)$ crosses the $x$-axis at exactly two points, where $x=-6$ and $x=2$. At what values of $x$ does the graph of $y=f(x+4)$ cross the $x$-axis?",
      choices: [
        // distractor: multiplies the zeros by 4
        { id: "A", text: "$x=-24$ and $x=8$" },
        { id: "B", text: "$x=-10$ and $x=-2$" },
        // distractor: leaves the zeros unchanged
        { id: "C", text: "$x=-6$ and $x=2$" },
        // distractor: shifts the zeros right
        { id: "D", text: "$x=-2$ and $x=6$" }
      ],
      correctAnswer: "B",
      hint: "Each crossing happens when the expression inside $f$ equals a value that already made $f$ zero.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Solve $x+4=-6$ and $x+4=2$ to get $x=-10$ and $x=-2$: the whole picture slides $4$ units left.\n\n**The Full Solution:**\nStep 1: The crossings of $f$ tell you that $f(-6)=0$ and $f(2)=0$, and that $f$ has no other zeros.\nStep 2: For $y=f(x+4)$ to equal $0$, the input $x+4$ must be one of those two numbers.\nStep 3: $x+4=-6$ gives $x=-10$, and $x+4=2$ gives $x=-2$. Check: $f(-10+4)=f(-6)=0$ and $f(-2+4)=f(2)=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-24$ and $x=8$): multiplies the crossings by $4$; the $4$ is added inside, not multiplied.\n* Choice C ($x=-6$ and $x=2$): assumes the crossings are unchanged, which holds for a vertical stretch but not for a horizontal shift.\n* Choice D ($x=-2$ and $x=6$): moves the crossings $4$ units right; a $+4$ inside the function moves the graph left.\n\n**Test Day Takeaway:** To relocate a zero after an inside change, set the inside expression equal to the old zero and solve.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y=f(x)$ has exactly one $x$-intercept, at $(9,0)$. The function $g$ is defined by $g(x)=f(x)+7$. Which of the following must be true about the graph of $y=g(x)$?",
      choices: [
        // distractor: moves the intercept left by the shift
        { id: "A", text: "It passes through $(2,0)$." },
        // distractor: assumes the x-intercept is preserved
        { id: "B", text: "It passes through $(9,0)$." },
        { id: "C", text: "It passes through $(9,7)$." },
        // distractor: adds the shift to the x-coordinate
        { id: "D", text: "It passes through $(16,0)$." }
      ],
      correctAnswer: "C",
      hint: "The only value of $f$ you are given is at a single input — use it and nothing else.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The intercept says $f(9)=0$, so $g(9)=0+7=7$ and the point $(9,7)$ is guaranteed.\n\n**The Full Solution:**\nStep 1: The $x$-intercept $(9,0)$ means $f(9)=0$; the problem gives no other value of $f$.\nStep 2: Evaluating the definition at that input, $g(9)=f(9)+7=0+7=7$, so $(9,7)$ lies on the graph of $g$.\nStep 3: Nothing forces $g$ to have an $x$-intercept at any particular place: raising the graph $7$ units can move a crossing anywhere, or remove it entirely. Only $(9,7)$ must be on the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2,0)$): subtracts $7$ from the input; an outside constant cannot move a point horizontally.\n* Choice B ($(9,0)$): assumes the $x$-intercept survives the shift, but $g(9)=7$, not $0$.\n* Choice D ($(16,0)$): adds $7$ to the input rather than to the output.\n\n**Test Day Takeaway:** A vertical shift preserves inputs, not intercepts: the guaranteed new point is $(a,\\,f(a)+k)$.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The graph of $y=f(x)$ in the $xy$-plane is a parabola with vertex $(-3,6)$. The function $g$ is defined by $g(x)=2f(x+5)-9$. What is the vertex of the graph of $y=g(x)$?",
      choices: [
        // distractor: applies the vertical shift before the stretch
        { id: "A", text: "$(-8,-6)$" },
        { id: "B", text: "$(-8,3)$" },
        // distractor: omits the vertical shift
        { id: "C", text: "$(-8,12)$" },
        // distractor: shifts right instead of left
        { id: "D", text: "$(2,3)$" }
      ],
      correctAnswer: "B",
      hint: "Three things happen to the vertex, and only one of them changes its first coordinate.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** $x+5$ moves the vertex to $x=-8$; the height becomes $2(6)-9=3$, so the vertex is $(-8,3)$.\n\n**The Full Solution:**\nStep 1: Inside the function, $x+5$ shifts the graph $5$ units left, so the vertex moves from $x=-3$ to $x=-3-5=-8$.\nStep 2: The factor $2$ multiplies the output first: $2(6)=12$. Then the $-9$ lowers it: $12-9=3$.\nStep 3: The vertex of $g$ is $(-8,3)$. Check: $g(-8)=2f(-8+5)-9=2f(-3)-9=2(6)-9=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-8,-6)$): subtracts $9$ before doubling: $2(6-9)=-6$, but the $-9$ is applied after the stretch.\n* Choice C ($(-8,12)$): stretches the height but never applies the $-9$.\n* Choice D ($(2,3)$): shifts right; a $+5$ inside the function moves the graph left.\n\n**Test Day Takeaway:** Outside operations act in written order: multiply the height first, then add or subtract.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Table
  "Transformations from Table": [
    {
      id: 1,
      difficulty: "easy",
      question: "For a function $f$, $f(4)=15$. The function $g$ is defined by $g(x)=f(x)+8$. What is the value of $g(4)$?",
      choices: [
        // distractor: subtracts the constant
        { id: "A", text: "$7$" },
        // distractor: omits the constant
        { id: "B", text: "$15$" },
        { id: "C", text: "$23$" },
        // distractor: multiplies by the constant
        { id: "D", text: "$120$" }
      ],
      correctAnswer: "C",
      hint: "Substitute the input into the definition of $g$ and use the one output of $f$ you were given.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(4)=f(4)+8=15+8=23$.\n\n**The Full Solution:**\nStep 1: The definition of $g$ says: evaluate $f$ at the same input, then add $8$.\nStep 2: At $x=4$, $f(4)=15$, so $g(4)=15+8$.\nStep 3: Therefore $g(4)=23$. Check: subtracting $8$ from $23$ returns $15$, the given value of $f(4)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts $8$ instead of adding it: $15-8=7$.\n* Choice B ($15$): reports $f(4)$ and never applies the $+8$.\n* Choice D ($120$): multiplies by $8$ rather than adding: $15\\cdot 8=120$.\n\n**Test Day Takeaway:** An outside $+k$ is a single addition applied to the output — never to the input, and never as a factor.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For a function $f$, $f(2)=9$. The function $h$ is defined by $h(x)=f(x-6)$. What is the value of $h(8)$?",
      choices: [
        // distractor: reports the input rather than the output
        { id: "A", text: "$2$" },
        // distractor: applies the inside shift to the output
        { id: "B", text: "$3$" },
        { id: "C", text: "$9$" },
        // distractor: adds the shift to the output
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "C",
      hint: "Work out which input of $f$ the expression $x-6$ produces when $x=8$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $h(8)=f(8-6)=f(2)=9$.\n\n**The Full Solution:**\nStep 1: The definition of $h$ says: subtract $6$ from the input, then hand the result to $f$.\nStep 2: At $x=8$, the input passed to $f$ is $8-6=2$.\nStep 3: Since $f(2)=9$, it follows that $h(8)=9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the input handed to $f$ instead of the output that comes back.\n* Choice B ($3$): subtracts $6$ from the output: $9-6=3$. The $-6$ is inside the function, so it acts on the input.\n* Choice D ($15$): adds $6$ to the output: $9+6=15$.\n\n**Test Day Takeaway:** An inside change is done before $f$ acts; simplify the input first, then look up the output.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For the function $f$, the table shows the value of $f(x)$ at four values of $x$. The function $g$ is defined by $g(x)=-f(x)$. What is the value of $g(3)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "5"], ["3", "8"], ["6", "-2"], ["9", "11"]] } },
      choices: [
        { id: "A", text: "$-8$" },
        // distractor: reads the wrong row
        { id: "B", text: "$-5$" },
        // distractor: negates the value at x = 6
        { id: "C", text: "$2$" },
        // distractor: omits the negative sign
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "A",
      hint: "Read the row for the input you need, then decide what the negative sign changes.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The table gives $f(3)=8$, and $g(3)=-f(3)=-8$.\n\n**The Full Solution:**\nStep 1: Locate $x=3$ in the table; the corresponding output is $f(3)=8$.\nStep 2: The definition $g(x)=-f(x)$ multiplies that output by $-1$.\nStep 3: So $g(3)=-8$. Check: the graph of $g$ is the graph of $f$ reflected across the $x$-axis, so a height of $8$ becomes a height of $-8$ at the same input. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): negates the output in the row $x=0$ instead of the row $x=3$.\n* Choice C ($2$): negates the output in the row $x=6$: $-(-2)=2$.\n* Choice D ($8$): reports $f(3)$ itself and never applies the negative sign.\n\n**Test Day Takeaway:** A negative outside the function changes the sign of the output and nothing else.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $g$ is defined by $g(x)=f(x+7)-3$, where $f$ is a function with $f(9)=20$. What is the value of $g(2)$?",
      choices: [
        // distractor: applies both constants to the output
        { id: "A", text: "$10$" },
        // distractor: applies the inside constant to the output
        { id: "B", text: "$13$" },
        { id: "C", text: "$17$" },
        // distractor: reverses the sign of the outside constant
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "C",
      hint: "The $7$ and the $3$ act on different things: one changes the input, the other changes the output.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $g(2)=f(2+7)-3=f(9)-3=20-3=17$.\n\n**The Full Solution:**\nStep 1: Inside the function, the input becomes $2+7=9$, which is exactly the input whose output you know.\nStep 2: That gives $f(9)=20$ as the value coming out of $f$.\nStep 3: The $-3$ is applied to that output: $g(2)=20-3=17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): subtracts both constants from the output: $20-7-3=10$.\n* Choice B ($13$): subtracts the inside $7$ from the output: $20-7=13$.\n* Choice D ($23$): adds $3$ instead of subtracting it: $20+3=23$.\n\n**Test Day Takeaway:** Sort the constants by position: the one inside the parentheses builds the input, the one outside adjusts the output.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined at the four values of $x$ listed in the table. If $g(x)=2f(x-1)+3$, what is the value of $g(5)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["2", "1"], ["4", "-4"], ["6", "5"], ["8", "7"]] } },
      choices: [
        // distractor: omits the outside constant
        { id: "A", text: "$-8$" },
        { id: "B", text: "$-5$" },
        // distractor: adds the constant before stretching
        { id: "C", text: "$-2$" },
        // distractor: shifts the input in the wrong direction
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      hint: "Reduce the input first, look the output up in the table, and only then handle the $2$ and the $3$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $g(5)=2f(4)+3=2(-4)+3=-5$.\n\n**The Full Solution:**\nStep 1: The input handed to $f$ is $5-1=4$, and the table gives $f(4)=-4$.\nStep 2: Multiply that output by $2$: $2(-4)=-8$.\nStep 3: Add $3$ to the result: $-8+3=-5$, so $g(5)=-5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): stops after doubling and never adds the $3$.\n* Choice C ($-2$): adds the $3$ before doubling: $2(-4+3)=-2$. The $3$ sits outside the factor $2$, so it is added last.\n* Choice D ($13$): uses $f(6)=5$, shifting the input the wrong way: $2(5)+3=13$.\n\n**Test Day Takeaway:** Read a composed rule right to left on the input and left to right on the output: shift the input, then stretch, then shift the height.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The graph of $y=f(x)$ in the $xy$-plane passes through $(0,4)$. The function $r$ is defined by $r(x)=f(x)-9$. What is the value of $r(0)$?",
      choices: [
        // distractor: reports the shift alone
        { id: "A", text: "$-9$" },
        { id: "B", text: "$-5$" },
        // distractor: omits the shift
        { id: "C", text: "$4$" },
        // distractor: adds instead of subtracts
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      hint: "Translate the point into a statement about $f$ before you use the rule for $r$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The point gives $f(0)=4$, so $r(0)=4-9=-5$.\n\n**The Full Solution:**\nStep 1: A graph passing through $(0,4)$ means the output at the input $0$ is $4$: $f(0)=4$.\nStep 2: The definition $r(x)=f(x)-9$ evaluated at $x=0$ gives $r(0)=f(0)-9$.\nStep 3: So $r(0)=4-9=-5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): reports the size of the shift and ignores the value of $f(0)$.\n* Choice C ($4$): reports $f(0)$ without applying the $-9$.\n* Choice D ($13$): adds $9$ instead of subtracting it.\n\n**Test Day Takeaway:** A point on a graph is a ready-made function value: $(a,b)$ means $f(a)=b$.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "The function $f$ is defined only at the five inputs listed in the table. If $k(x)=f(x+2)$, what is the value of $k(0)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-4", "9"], ["-2", "5"], ["0", "1"], ["2", "-3"], ["4", "-7"]] } },
      choices: [
        // distractor: applies the shift twice
        { id: "A", text: "$-7$" },
        { id: "B", text: "$-3$" },
        // distractor: omits the shift
        { id: "C", text: "$1$" },
        // distractor: shifts the input in the wrong direction
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "B",
      hint: "Simplify $x+2$ at the given input, then find that number in the left column.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $k(0)=f(0+2)=f(2)=-3$.\n\n**The Full Solution:**\nStep 1: The rule for $k$ adds $2$ to the input before $f$ is applied, so $k(0)=f(2)$.\nStep 2: The row with $x=2$ in the table gives $f(2)=-3$.\nStep 3: Therefore $k(0)=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): uses the row $x=4$, adding the shift twice.\n* Choice C ($1$): uses the row $x=0$ and never applies the shift.\n* Choice D ($5$): uses the row $x=-2$, subtracting $2$ from the input instead of adding it.\n\n**Test Day Takeaway:** With $f(x+c)$, compute the new input first; the table lookup happens after the arithmetic, not before.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "For a function $f$, $f(3)=11$, and the function $g$ is defined by $g(x)=f(x-4)$. For what value of $x$ is $g(x)=11$?",
      choices: [
        // distractor: subtracts the shift instead of adding it
        { id: "A", text: "$-1$" },
        // distractor: reuses the input of f
        { id: "B", text: "$3$" },
        { id: "C", text: "$7$" },
        // distractor: confuses the output with the input
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "C",
      hint: "You are given the output; work backwards to the input that produces it.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $g(x)=f(x-4)$ equals $11$ when $x-4=3$, so $x=7$.\n\n**The Full Solution:**\nStep 1: The only input known to produce the output $11$ is $3$, since $f(3)=11$.\nStep 2: For $g(x)=f(x-4)$ to return that same output, the inside expression must equal $3$: $x-4=3$.\nStep 3: Solving gives $x=7$. Check: $g(7)=f(7-4)=f(3)=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): subtracts $4$ from $3$ instead of adding it: the shift moves the graph right, so inputs increase.\n* Choice B ($3$): reuses the input for $f$; $g$ needs a different input to reach the same output.\n* Choice D ($11$): reports the output as if it were the input.\n\n**Test Day Takeaway:** Going backwards through $f(x-c)$ means solving $x-c=a$, which adds $c$ to the original input.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The functions $f$ and $g$ satisfy $g(x)=f(x)+6$ for every $x$. The table shows four values of $g$. What is the value of $f(3)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "20"], ["2", "13"], ["3", "8"], ["4", "5"]] } },
      choices: [
        { id: "A", text: "$2$" },
        // distractor: omits the shift
        { id: "B", text: "$8$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$14$" },
        // distractor: reads the wrong row
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "A",
      hint: "The relationship is stated in terms of $g$; rearrange it so that $f$ stands alone.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** From $g(x)=f(x)+6$, $f(x)=g(x)-6$, and the table gives $g(3)=8$, so $f(3)=2$.\n\n**The Full Solution:**\nStep 1: Solving $g(x)=f(x)+6$ for $f$ gives $f(x)=g(x)-6$.\nStep 2: The row $x=3$ of the table gives $g(3)=8$.\nStep 3: Therefore $f(3)=8-6=2$. Check: $f(3)+6=2+6=8=g(3)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): reports $g(3)$ and never undoes the shift.\n* Choice C ($14$): adds $6$ instead of subtracting: the table already contains the raised values.\n* Choice D ($20$): reads the row $x=1$ rather than the row $x=3$.\n\n**Test Day Takeaway:** When the table lists the transformed function, run the transformation backwards to recover the original.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The graph of $y=f(x)$ in the $xy$-plane contains the point $(-6,18)$. The function $g$ is defined by $g(x)=\\frac{1}{2}f(x)+4$. What is the value of $g(-6)$?",
      choices: [
        // distractor: omits the vertical shift
        { id: "A", text: "$9$" },
        // distractor: adds before scaling
        { id: "B", text: "$11$" },
        { id: "C", text: "$13$" },
        // distractor: omits the scaling
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "C",
      hint: "Halve the output before the $4$ joins in — the factor is written closest to $f$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** $g(-6)=\\frac{1}{2}(18)+4=9+4=13$.\n\n**The Full Solution:**\nStep 1: The given point tells you that $f(-6)=18$, and the input is unchanged by the transformation.\nStep 2: The factor $\\frac{1}{2}$ acts on that output: $\\frac{1}{2}(18)=9$.\nStep 3: Adding $4$ gives $g(-6)=9+4=13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): halves the output but drops the $+4$.\n* Choice B ($11$): adds $4$ before halving: $\\frac{18+4}{2}=11$, which would require the form $\\frac{1}{2}\\left(f(x)+4\\right)$.\n* Choice D ($22$): adds $4$ without halving: $18+4=22$.\n\n**Test Day Takeaway:** A vertical stretch or compression multiplies the output first; the vertical shift is applied to the scaled value.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "medium",
      question: "A function $f$ satisfies $f(-5)=13$ and $f(-1)=6$. The function $g$ is defined by $g(x)=f(x-2)$. What is the value of $g(-3)$?",
      choices: [
        // distractor: uses the wrong input and shifts the output
        { id: "A", text: "$4$" },
        // distractor: shifts the input the wrong way
        { id: "B", text: "$6$" },
        // distractor: applies the inside shift to the output
        { id: "C", text: "$11$" },
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "D",
      hint: "Two outputs of $f$ are given; only one of them belongs to the input you actually need.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** $g(-3)=f(-3-2)=f(-5)=13$.\n\n**The Full Solution:**\nStep 1: The rule for $g$ subtracts $2$ from the input before $f$ is applied: $g(-3)=f(-3-2)$.\nStep 2: That input is $-5$, and the problem states $f(-5)=13$.\nStep 3: So $g(-3)=13$. The value $f(-1)=6$ belongs to a different input and is not used. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): uses the wrong output and then subtracts $2$ from it: $6-2=4$.\n* Choice B ($6$): adds $2$ to the input instead of subtracting: $f(-3+2)=f(-1)=6$.\n* Choice C ($11$): subtracts $2$ from the correct output: $13-2=11$. The $-2$ is inside the function.\n\n**Test Day Takeaway:** Do the input arithmetic first; the constant inside the parentheses never touches the output.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The table shows the value of the function $f$ at four inputs. The function $g$ is defined by $g(x)=f(2x)$. What is the value of $x$ for which $g(x)=11$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "5"], ["2", "-3"], ["4", "11"], ["8", "6"]] } },
      choices: [
        { id: "A", text: "$2$" },
        // distractor: does not undo the doubling
        { id: "B", text: "$4$" },
        // distractor: doubles instead of halving
        { id: "C", text: "$8$" },
        // distractor: confuses the output with the input
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "A",
      hint: "Find which input of $f$ returns $11$, then ask what $x$ makes $2x$ equal to it.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** The table gives $f(4)=11$, so $2x=4$ and $x=2$.\n\n**The Full Solution:**\nStep 1: Scanning the table, the output $11$ occurs in the row $x=4$, so $f(4)=11$.\nStep 2: For $g(x)=f(2x)$ to equal $11$, the input handed to $f$ must be $4$: $2x=4$.\nStep 3: Dividing gives $x=2$. Check: $g(2)=f(2\\cdot 2)=f(4)=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports the input of $f$ without undoing the doubling.\n* Choice C ($8$): doubles $4$ instead of halving it, which is the effect of $f\\!\\left(\\frac{x}{2}\\right)$.\n* Choice D ($11$): reports the output as if it were the input.\n\n**Test Day Takeaway:** With $f(2x)$, every feature of $f$ appears at half its original input — solve $2x=a$, do not double.",
      skills: ["function-transformations"]
    },
    {
      id: 13,
      difficulty: "hard",
      question: "The function $h$ is defined by $h(x)=3f(x)-8$, where the values of $f$ are given in the table. What is the greatest of the four values of $h(x)$ determined by the table?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "2"], ["3", "-4"], ["5", "6"], ["7", "5"]] } },
      choices: [
        // distractor: subtracts before multiplying
        { id: "A", text: "$-6$" },
        // distractor: uses the largest input instead of the largest output
        { id: "B", text: "$7$" },
        { id: "C", text: "$10$" },
        // distractor: omits the constant term
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      hint: "Decide which row of the table gives the largest value of $h$ before doing any arithmetic.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The largest output in the table is $f(5)=6$, and $3(6)-8=10$.\n\n**The Full Solution:**\nStep 1: Tripling and then subtracting $8$ is an increasing operation, so the greatest value of $h$ occurs at the input with the greatest value of $f$.\nStep 2: The table's outputs are $2$, $-4$, $6$, and $5$; the greatest is $6$, at $x=5$.\nStep 3: So the greatest value is $h(5)=3(6)-8=18-8=10$. Check the runner-up: $h(7)=3(5)-8=7<10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): subtracts $8$ before tripling: $3(6-8)=-6$.\n* Choice B ($7$): evaluates $h$ only at the largest value of $x$: $3(5)-8=7$, but the largest input is not the largest output.\n* Choice D ($18$): triples the largest output and forgets the $-8$.\n\n**Test Day Takeaway:** When a transformation is increasing, the extreme value of the new function sits above the extreme value of the old one.",
      skills: ["function-transformations"]
    },
    {
      id: 14,
      difficulty: "hard",
      question: "For a function $f$, $f(-1)=2$, $f(2)=9$, and $f(5)=17$. The function $g$ is defined by $g(x)=f(x+3)-f(x-3)$. What is the value of $g(2)$?",
      choices: [
        // distractor: reverses the order of subtraction
        { id: "A", text: "$-15$" },
        // distractor: shifts the outputs instead of the inputs
        { id: "B", text: "$6$" },
        { id: "C", text: "$15$" },
        // distractor: adds instead of subtracting
        { id: "D", text: "$19$" }
      ],
      correctAnswer: "C",
      hint: "Build the two inputs separately before you subtract anything.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** $g(2)=f(5)-f(-1)=17-2=15$.\n\n**The Full Solution:**\nStep 1: The first term uses the input $2+3=5$, giving $f(5)=17$.\nStep 2: The second term uses the input $2-3=-1$, giving $f(-1)=2$.\nStep 3: Subtracting in the order written, $g(2)=17-2=15$. The value $f(2)=9$ is never needed. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): subtracts in the reverse order: $f(-1)-f(5)=2-17=-15$.\n* Choice B ($6$): applies the $\\pm 3$ to the outputs instead of the inputs: $(9+3)-(9-3)=6$.\n* Choice D ($19$): adds the two values instead of subtracting: $17+2=19$.\n\n**Test Day Takeaway:** In a difference of shifted values, evaluate each piece at its own input and keep the written order of subtraction.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Transformations from Expression
  "Transformations from Expression": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function $f$ is defined by $f(x)=x^{2}$. Which of the following expressions is equivalent to $f(x-6)$?",
      choices: [
        // distractor: flips the sign of the substituted input
        { id: "A", text: "$(x+6)^{2}$" },
        { id: "B", text: "$(x-6)^{2}$" },
        // distractor: applies the constant after the rule
        { id: "C", text: "$x^{2}-6$" },
        // distractor: squares the terms separately
        { id: "D", text: "$x^{2}-36$" }
      ],
      correctAnswer: "B",
      hint: "Substitute the entire quantity $x-6$ wherever the rule for $f$ shows an $x$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The rule squares its input, and the input is now $x-6$, so the result is $(x-6)^{2}$.\n\n**The Full Solution:**\nStep 1: $f$ takes whatever it is handed and squares it.\nStep 2: Here it is handed $x-6$, so $f(x-6)=(x-6)^{2}$.\nStep 3: Check with a number: $f(10-6)=f(4)=16$, and $(10-6)^{2}=16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x+6)^{2}$): changes the sign inside the parentheses; the substituted input is $x-6$ exactly as written.\n* Choice C ($x^{2}-6$): subtracts $6$ after squaring, which describes $f(x)-6$ instead.\n* Choice D ($x^{2}-36$): squares each term separately; $(x-6)^{2}$ expands to $x^{2}-12x+36$, not $x^{2}-36$.\n\n**Test Day Takeaway:** Substitution replaces $x$ with the whole new input, parentheses and all.",
      skills: ["function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The function $f$ is defined by $f(x)=5x-8$. Which expression is equivalent to $-f(x)$?",
      choices: [
        // distractor: negates only the leading term
        { id: "A", text: "$-5x-8$" },
        { id: "B", text: "$-5x+8$" },
        // distractor: omits the negation entirely
        { id: "C", text: "$5x-8$" },
        // distractor: negates only the constant term
        { id: "D", text: "$5x+8$" }
      ],
      correctAnswer: "B",
      hint: "The negative sign multiplies the entire output, so every term feels it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $-f(x)=-(5x-8)=-5x+8$.\n\n**The Full Solution:**\nStep 1: $-f(x)$ means multiply the whole expression $5x-8$ by $-1$.\nStep 2: Distributing gives $-1(5x)+(-1)(-8)=-5x+8$.\nStep 3: Check at $x=2$: $f(2)=2$, so $-f(2)=-2$, and $-5(2)+8=-2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5x-8$): negates only the first term; the $-8$ must change sign as well.\n* Choice C ($5x-8$): leaves the expression untouched, as though $-f(x)$ meant $f(x)$.\n* Choice D ($5x+8$): negates only the constant term and leaves the $x$-term alone.\n\n**Test Day Takeaway:** A leading negative distributes over every term of the output — check the sign of each one.",
      skills: ["function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function $g$ is defined by $g(x)=|x|$, and the function $k$ is defined by $k(x)=g(x+7)-3$. Which of the following expressions defines $k(x)$?",
      choices: [
        // distractor: flips the sign inside the bars
        { id: "A", text: "$|x-7|-3$" },
        { id: "B", text: "$|x+7|-3$" },
        // distractor: flips the sign of the outside constant
        { id: "C", text: "$|x+7|+3$" },
        // distractor: merges the inside and outside constants
        { id: "D", text: "$|x+4|$" }
      ],
      correctAnswer: "B",
      hint: "The $7$ belongs inside the absolute value bars and the $3$ belongs outside them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Feeding $x+7$ into $g$ gives $|x+7|$, and the $-3$ is applied afterwards, so $k(x)=|x+7|-3$.\n\n**The Full Solution:**\nStep 1: $g$ takes the absolute value of its input, and the input is $x+7$, so $g(x+7)=|x+7|$.\nStep 2: The $-3$ is written outside $g$, so it is subtracted from that result.\nStep 3: So $k(x)=|x+7|-3$. Check at $x=-7$: $|-7+7|-3=-3$, the lowest possible value, matching the vertex of the shifted V. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($|x-7|-3$): reverses the sign inside the bars; the substituted input is $x+7$.\n* Choice C ($|x+7|+3$): reverses the sign of the outside constant.\n* Choice D ($|x+4|$): combines $7$ and $-3$ inside the bars; the two constants act at different stages and cannot be merged.\n\n**Test Day Takeaway:** Inside constants ride along with the input; outside constants are applied to the finished output.",
      skills: ["function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x)=x^{3}+2x$, and the function $u$ is defined by $u(x)=f(-x)$. Which of the following expressions is equivalent to $u(x)$?",
      choices: [
        { id: "A", text: "$-x^{3}-2x$" },
        // distractor: misses the sign on the linear term
        { id: "B", text: "$-x^{3}+2x$" },
        // distractor: misses the sign on the cubic term
        { id: "C", text: "$x^{3}-2x$" },
        // distractor: treats the function as unchanged
        { id: "D", text: "$x^{3}+2x$" }
      ],
      correctAnswer: "A",
      hint: "Replace every $x$ with $-x$ and simplify each power separately.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $(-x)^{3}=-x^{3}$ and $2(-x)=-2x$, so $u(x)=-x^{3}-2x$.\n\n**The Full Solution:**\nStep 1: Substituting gives $f(-x)=(-x)^{3}+2(-x)$.\nStep 2: An odd power keeps the negative sign: $(-x)^{3}=-x^{3}$. The linear term becomes $-2x$.\nStep 3: So $u(x)=-x^{3}-2x$. Check at $x=1$: $u(1)=f(-1)=-1-2=-3$, and $-1^{3}-2(1)=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-x^{3}+2x$): negates the cubic term but forgets that $2(-x)=-2x$.\n* Choice C ($x^{3}-2x$): negates the linear term only; $(-x)^{3}$ is negative too.\n* Choice D ($x^{3}+2x$): assumes the substitution changes nothing, which is true only for even-power terms.\n\n**Test Day Takeaway:** Under $x\\to -x$, odd-power terms flip sign and even-power terms do not.",
      skills: ["function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $h$ is defined by $h(x)=\\sqrt{x}$, and the function $w$ is defined by $w(x)=-3h(x-4)+7$. Which of the following expressions defines $w(x)$?",
      choices: [
        // distractor: flips the sign of the vertical shift
        { id: "A", text: "$-3\\sqrt{x-4}-7$" },
        { id: "B", text: "$-3\\sqrt{x-4}+7$" },
        // distractor: flips the sign of the horizontal shift
        { id: "C", text: "$-3\\sqrt{x+4}+7$" },
        // distractor: moves the reflection inside the radical
        { id: "D", text: "$3\\sqrt{4-x}+7$" }
      ],
      correctAnswer: "B",
      hint: "Only one of the three constants belongs under the radical.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $h(x-4)=\\sqrt{x-4}$; multiplying by $-3$ and adding $7$ gives $w(x)=-3\\sqrt{x-4}+7$.\n\n**The Full Solution:**\nStep 1: The input to $h$ is $x-4$, so $h(x-4)=\\sqrt{x-4}$ — the $4$ is the only constant that goes under the radical.\nStep 2: The factor $-3$ multiplies that square root, producing $-3\\sqrt{x-4}$.\nStep 3: Finally $+7$ is added to the result: $w(x)=-3\\sqrt{x-4}+7$. Check at $x=8$: $h(4)=2$, so $w(8)=-3(2)+7=1$, and the expression gives $-3\\sqrt{4}+7=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3\\sqrt{x-4}-7$): reverses the sign of the outside constant.\n* Choice C ($-3\\sqrt{x+4}+7$): reverses the sign of the input shift; the substitution is $x-4$.\n* Choice D ($3\\sqrt{4-x}+7$): moves the negative sign under the radical, which reflects the graph horizontally instead of vertically.\n\n**Test Day Takeaway:** Build a composed expression in stages: substitute the input, apply the multiplier, then add the constant.",
      skills: ["function-transformations"]
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The function $f$ is defined by $f(x)=x^{2}+9$. Which expression is equivalent to $f(x)-5$?",
      choices: [
        // distractor: treats the outside constant as a substitution
        { id: "A", text: "$(x-5)^{2}+9$" },
        // distractor: drops the original constant term
        { id: "B", text: "$x^{2}-5$" },
        { id: "C", text: "$x^{2}+4$" },
        // distractor: adds instead of subtracts
        { id: "D", text: "$x^{2}+14$" }
      ],
      correctAnswer: "C",
      hint: "Write out the whole rule for $f$ first, then attach the $-5$ to it.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $f(x)-5=(x^{2}+9)-5=x^{2}+4$.\n\n**The Full Solution:**\nStep 1: $f(x)$ is the entire expression $x^{2}+9$.\nStep 2: Subtracting $5$ affects only the constant term: $9-5=4$.\nStep 3: So $f(x)-5=x^{2}+4$. Check at $x=3$: $f(3)=18$, and $18-5=13$, which matches $3^{2}+4=13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-5)^{2}+9$): substitutes $x-5$ into the rule; the $-5$ here is outside the function.\n* Choice B ($x^{2}-5$): drops the constant $9$ from the original rule.\n* Choice D ($x^{2}+14$): adds $5$ instead of subtracting it.\n\n**Test Day Takeaway:** An outside constant merges with the constant term; an inside constant changes what gets squared.",
      skills: ["function-transformations"]
    },
    {
      id: 7,
      difficulty: "easy",
      question: "The function $g$ is defined by $g(x)=7x$. Which expression is equivalent to $g(x+3)$?",
      choices: [
        // distractor: flips the sign after distributing
        { id: "A", text: "$7x-21$" },
        // distractor: fails to distribute the coefficient
        { id: "B", text: "$7x+3$" },
        { id: "C", text: "$7x+21$" },
        // distractor: adds the constant to the coefficient
        { id: "D", text: "$10x$" }
      ],
      correctAnswer: "C",
      hint: "After substituting, remember that the multiplier reaches both terms of the new input.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(x+3)=7(x+3)=7x+21$.\n\n**The Full Solution:**\nStep 1: The rule multiplies its input by $7$, and the input is now $x+3$.\nStep 2: So $g(x+3)=7(x+3)$.\nStep 3: Distributing gives $7x+21$. Check at $x=1$: $g(4)=28$, and $7(1)+21=28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7x-21$): distributes the $7$ but flips the sign of the constant.\n* Choice B ($7x+3$): forgets to distribute: the $7$ multiplies the $3$ as well.\n* Choice D ($10x$): adds $3$ to the coefficient instead of to the input.\n\n**Test Day Takeaway:** Substitute first, then distribute — the multiplier applies to every part of the new input.",
      skills: ["function-transformations"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x)=x^{2}-6x$. The function $g$ is defined by $g(x)=f(x+2)$. Which expression is equivalent to $g(x)$?",
      choices: [
        // distractor: substitutes the opposite shift
        { id: "A", text: "$x^{2}-10x+16$" },
        // distractor: treats the shift as an outside constant
        { id: "B", text: "$x^{2}-6x+2$" },
        { id: "C", text: "$x^{2}-2x-8$" },
        // distractor: substitutes in only one term
        { id: "D", text: "$x^{2}-2x+4$" }
      ],
      correctAnswer: "C",
      hint: "Every occurrence of $x$ in the rule must be replaced before you expand anything.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $g(x)=(x+2)^{2}-6(x+2)=x^{2}+4x+4-6x-12=x^{2}-2x-8$.\n\n**The Full Solution:**\nStep 1: Substituting $x+2$ into both terms of the rule gives $g(x)=(x+2)^{2}-6(x+2)$.\nStep 2: Expanding: $(x+2)^{2}=x^{2}+4x+4$ and $-6(x+2)=-6x-12$.\nStep 3: Combining, $x^{2}+4x+4-6x-12=x^{2}-2x-8$. Check at $x=0$: $g(0)=f(2)=4-12=-8$, and the expression gives $-8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2}-10x+16$): substitutes $x-2$ instead of $x+2$, which shifts the graph the wrong way.\n* Choice B ($x^{2}-6x+2$): adds $2$ to the output, which describes $f(x)+2$.\n* Choice D ($x^{2}-2x+4$): substitutes into the squared term only, leaving $-6x$ untouched.\n\n**Test Day Takeaway:** Replace $x$ everywhere it appears in the rule — a partial substitution changes the function.",
      skills: ["function-transformations"]
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The function $f$ is defined by $f(x)=4x-1$. The function $v$ is defined by $v(x)=f(-x)+6$. Which of the following expressions represents $v(x)$?",
      choices: [
        // distractor: subtracts the outside constant
        { id: "A", text: "$-4x-7$" },
        { id: "B", text: "$-4x+5$" },
        // distractor: negates the constant term of the rule
        { id: "C", text: "$-4x+7$" },
        // distractor: omits the input negation
        { id: "D", text: "$4x+5$" }
      ],
      correctAnswer: "B",
      hint: "The negative belongs to the input only; the constant term of the rule is not part of the substitution.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(-x)=4(-x)-1=-4x-1$, and adding $6$ gives $v(x)=-4x+5$.\n\n**The Full Solution:**\nStep 1: Substituting $-x$ into the rule gives $f(-x)=4(-x)-1=-4x-1$.\nStep 2: The $+6$ is applied to that output: $-4x-1+6$.\nStep 3: Combining constants gives $v(x)=-4x+5$. Check at $x=1$: $f(-1)=-5$, so $v(1)=-5+6=1$, which matches $-4(1)+5=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4x-7$): subtracts $6$ instead of adding it.\n* Choice C ($-4x+7$): negates the constant term as well: substitution replaces $x$, not the $-1$.\n* Choice D ($4x+5$): never negates the input, treating $f(-x)$ as $f(x)$.\n\n**Test Day Takeaway:** Substitute into the variable positions only, then combine like terms with the outside constant.",
      skills: ["function-transformations"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The function $g$ is defined by $g(x)=x^{3}-4x^{2}$, and the function $c$ is defined by $c(x)=-g(x)$. Which expression is equivalent to $c(x)$?",
      choices: [
        // distractor: negates only the leading term
        { id: "A", text: "$-x^{3}-4x^{2}$" },
        { id: "B", text: "$-x^{3}+4x^{2}$" },
        // distractor: omits the negation
        { id: "C", text: "$x^{3}-4x^{2}$" },
        // distractor: negates only the second term
        { id: "D", text: "$x^{3}+4x^{2}$" }
      ],
      correctAnswer: "B",
      hint: "Distribute the negative sign across both terms and watch what happens to the one that is already negative.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $c(x)=-\\left(x^{3}-4x^{2}\\right)=-x^{3}+4x^{2}$.\n\n**The Full Solution:**\nStep 1: $c(x)$ multiplies the entire rule for $g$ by $-1$.\nStep 2: The first term becomes $-x^{3}$; the second, already negative, becomes $+4x^{2}$.\nStep 3: So $c(x)=-x^{3}+4x^{2}$. Check at $x=1$: $g(1)=1-4=-3$, so $c(1)=3$, and $-1+4=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-x^{3}-4x^{2}$): negates the leading term only and leaves $-4x^{2}$ negative.\n* Choice C ($x^{3}-4x^{2}$): reproduces $g$ itself; nothing was negated.\n* Choice D ($x^{3}+4x^{2}$): negates the second term only.\n\n**Test Day Takeaway:** Reflecting across the $x$-axis flips the sign of every term, including the ones that are already negative.",
      skills: ["function-transformations"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x)=|3x+4|$. The function $d$ is defined by $d(x)=f(x-2)$. Which of the following expressions is equivalent to $d(x)$?",
      choices: [
        // distractor: treats the shift as an outside constant
        { id: "A", text: "$|3x+4|-2$" },
        { id: "B", text: "$|3x-2|$" },
        // distractor: fails to distribute the coefficient
        { id: "C", text: "$|3x+2|$" },
        // distractor: substitutes the opposite shift
        { id: "D", text: "$|3x+10|$" }
      ],
      correctAnswer: "B",
      hint: "The coefficient $3$ multiplies the whole substituted input, not just the $x$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $d(x)=|3(x-2)+4|=|3x-6+4|=|3x-2|$.\n\n**The Full Solution:**\nStep 1: Substituting $x-2$ for $x$ in the rule gives $d(x)=|3(x-2)+4|$.\nStep 2: Distributing inside the bars: $3(x-2)=3x-6$, so the expression becomes $|3x-6+4|$.\nStep 3: Combining constants gives $d(x)=|3x-2|$. Check at $x=2$: $d(2)=f(0)=|4|=4$, and $|3(2)-2|=|4|=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($|3x+4|-2$): applies the $-2$ outside the bars, which shifts the graph down instead of right.\n* Choice C ($|3x+2|$): subtracts $2$ from the constant without multiplying by $3$ first: $4-2=2$ ignores the distribution.\n* Choice D ($|3x+10|$): substitutes $x+2$: $3(x+2)+4=3x+10$, shifting the graph the wrong way.\n\n**Test Day Takeaway:** When the input carries a coefficient, distribute before combining — a shift of $c$ changes the constant by $ac$, not by $c$.",
      skills: ["function-transformations"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x)=x^{2}+5x$, and the function $g$ is defined by $g(x)=f(x-3)+2$. Which expression defines $g(x)$?",
      choices: [
        // distractor: omits the outside constant
        { id: "A", text: "$x^{2}-x-6$" },
        { id: "B", text: "$x^{2}-x-4$" },
        // distractor: treats the inside shift as an outside shift
        { id: "C", text: "$x^{2}+5x-1$" },
        // distractor: substitutes the opposite shift
        { id: "D", text: "$x^{2}+11x+26$" }
      ],
      correctAnswer: "B",
      hint: "Do the substitution completely, expand, and only then add the constant that sits outside $f$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** $(x-3)^{2}+5(x-3)+2=x^{2}-6x+9+5x-15+2=x^{2}-x-4$.\n\n**The Full Solution:**\nStep 1: Substituting $x-3$ into both terms of $f$ gives $f(x-3)=(x-3)^{2}+5(x-3)$.\nStep 2: Expanding: $(x-3)^{2}=x^{2}-6x+9$ and $5(x-3)=5x-15$, so $f(x-3)=x^{2}-x-6$.\nStep 3: Adding the outside $2$ gives $g(x)=x^{2}-x-4$. Check at $x=3$: $g(3)=f(0)+2=0+2=2$, and $9-3-4=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2}-x-6$): stops at $f(x-3)$ and never adds the outside $2$.\n* Choice C ($x^{2}+5x-1$): applies both constants outside: $x^{2}+5x-3+2$, treating the $-3$ as a vertical shift.\n* Choice D ($x^{2}+11x+26$): substitutes $x+3$ instead of $x-3$, moving the graph left rather than right.\n\n**Test Day Takeaway:** A composed rule is built inside-out: substitute, expand, combine, then apply the outside constant.",
      skills: ["function-transformations"]
    }
  ],

  // Section: Difficult Transformations
  // Based on "System of Equations Method" and "Answer Choice Method" from videos
  "Difficult Transformations": [
    {
      id: 1,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $y=f(x)$ is shown, where $f(x)=\\dfrac{a}{x+b}$ and $a$ and $b$ are constants. The graph passes through $(0,4)$ and $(3,2)$. The function $g$ is defined by $g(x)=f(x+4)$. Which equation could define $g$?",
      diagram: { type: "rationalFunction", params: { a: 12, b: 3, showPoints: [[0, 4], [3, 2]] } },
      choices: [
        // distractor: subtracts the shift from b
        { id: "A", text: "$g(x)=\\dfrac{12}{x-1}$" },
        // distractor: replaces b with the shift
        { id: "B", text: "$g(x)=\\dfrac{12}{x+4}$" },
        { id: "C", text: "$g(x)=\\dfrac{12}{x+7}$" },
        // distractor: applies the shift to the numerator
        { id: "D", text: "$g(x)=\\dfrac{16}{x+3}$" }
      ],
      correctAnswer: "C",
      hint: "Use the two marked points to pin down $a$ and $b$ first; the shift is the last step, not the first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** The points give $f(x)=\\dfrac{12}{x+3}$, and replacing $x$ with $x+4$ turns the denominator into $x+7$.\n\n**The Full Solution:**\nStep 1: The point $(0,4)$ gives $\\dfrac{a}{0+b}=4$, so $a=4b$. The point $(3,2)$ gives $\\dfrac{a}{3+b}=2$, so $a=6+2b$.\nStep 2: Setting the two expressions equal: $4b=6+2b$, so $2b=6$, $b=3$, and $a=12$. Thus $f(x)=\\dfrac{12}{x+3}$.\nStep 3: Then $g(x)=f(x+4)=\\dfrac{12}{(x+4)+3}=\\dfrac{12}{x+7}$. Check: $g(-1)=\\dfrac{12}{6}=2$ and $f(3)=\\dfrac{12}{6}=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{12}{x-1}$): subtracts $4$ from the constant; $f(x+4)$ increases the denominator's constant to $3+4=7$.\n* Choice B ($\\dfrac{12}{x+4}$): replaces the denominator with the shift itself instead of substituting $x+4$ into $x+3$.\n* Choice D ($\\dfrac{16}{x+3}$): adds the shift to the numerator; a horizontal shift never changes $a$.\n\n**Test Day Takeaway:** For $f(x)=\\dfrac{a}{x+b}$, the shift $f(x+c)$ leaves $a$ alone and turns the denominator into $x+(b+c)$.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 2,
      difficulty: "hard",
      question: "The curve shown in the $xy$-plane is the graph of $y=f(x)$, where $f(x)=\\dfrac{a}{x+b}$ for constants $a$ and $b$. The function $h$ is defined by $h(x)=f(x-2)$. What is an equation of the vertical asymptote of the graph of $y=h(x)$?",
      diagram: { type: "rationalFunction", params: { a: 10, b: -4, showPoints: [[6, 5], [9, 2]] } },
      choices: [
        // distractor: negates the shifted constant a second time
        { id: "A", text: "$x=-6$" },
        // distractor: shifts the asymptote in the wrong direction
        { id: "B", text: "$x=2$" },
        // distractor: never applies the shift
        { id: "C", text: "$x=4$" },
        { id: "D", text: "$x=6$" }
      ],
      correctAnswer: "D",
      hint: "The dashed line locates the input that $f$ cannot accept; ask which input $h$ cannot accept.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** $f$ blows up at $x=4$, and $h(x)=f(x-2)$ blows up where $x-2=4$, that is, at $x=6$.\n\n**The Full Solution:**\nStep 1: The graph shows a vertical asymptote at $x=4$, so the denominator $x+b$ is zero there, meaning $b=-4$ and $f(x)=\\dfrac{a}{x-4}$.\nStep 2: Then $h(x)=f(x-2)=\\dfrac{a}{(x-2)-4}=\\dfrac{a}{x-6}$.\nStep 3: The denominator is zero when $x=6$, so the asymptote of $h$ is $x=6$ — the original asymptote moved right $2$ units. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x=-6$): applies the sign-reversal rule a second time, reading $\\dfrac{a}{x-6}$ as having asymptote $x=-6$.\n* Choice B ($x=2$): moves the asymptote left; $f(x-2)$ shifts the graph, asymptote included, to the right.\n* Choice C ($x=4$): reports the asymptote of $f$ and never applies the shift.\n\n**Test Day Takeaway:** An asymptote is part of the graph: shift it exactly as you shift every point.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 3,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x)=(x-h)^{2}+k$, where $h$ and $k$ are constants, and the graph of $y=f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x)=f(x+6)$. If $g(x)=(x-p)^{2}+q$, where $p$ and $q$ are constants, what is the value of $p+q$?",
      diagram: { type: "quadraticVertex", params: { vertex: [4, -5], a: 1, showVertex: true } },
      choices: [
        { id: "A", text: "$-7$" },
        // distractor: reads p with the wrong sign
        { id: "B", text: "$-3$" },
        // distractor: ignores the shift
        { id: "C", text: "$-1$" },
        // distractor: shifts right instead of left
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      hint: "Write $g$ in the same vertex form as $f$ and read $p$ off with its sign, not its size.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~45s):** The graph gives $f(x)=(x-4)^{2}-5$, so $g(x)=(x+2)^{2}-5$, meaning $p=-2$, $q=-5$, and $p+q=-7$.\n\n**The Full Solution:**\nStep 1: The vertex shown is $(4,-5)$, so $h=4$ and $k=-5$, giving $f(x)=(x-4)^{2}-5$.\nStep 2: Substituting, $g(x)=f(x+6)=\\left((x+6)-4\\right)^{2}-5=(x+2)^{2}-5$.\nStep 3: To match the form $(x-p)^{2}+q$, write $(x+2)^{2}$ as $\\left(x-(-2)\\right)^{2}$, so $p=-2$ and $q=-5$, and $p+q=-7$. Check: the vertex of $g$ is $(-2,-5)$, which is the vertex of $f$ moved $6$ units left. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): reads $p$ as $2$ from $(x+2)^{2}$; the form requires $x-p$, so $p=-2$.\n* Choice C ($-1$): uses the vertex of $f$ itself: $4+(-5)=-1$, ignoring the shift.\n* Choice D ($5$): shifts right instead of left: $10+(-5)=5$.\n\n**Test Day Takeaway:** In $(x-p)^{2}+q$ the constant $p$ carries the opposite sign of what appears inside the parentheses.",
      skills: ["function-transformations", "vertex-form"]
    },
    {
      id: 4,
      difficulty: "hard",
      question: "The graph of $y=f(x)$ is shown in the $xy$-plane, where $f(x)=|x-c|+d$ and $c$ and $d$ are constants. The function $g$ is defined by $g(x)=-f(x+3)+4$. What is the maximum value of $g$?",
      diagram: { type: "absoluteValue", params: { vertex: [-1, 6], slope: 1 } },
      choices: [
        // distractor: adds the constant before reflecting
        { id: "A", text: "$-10$" },
        // distractor: omits the vertical shift
        { id: "B", text: "$-6$" },
        { id: "C", text: "$-2$" },
        // distractor: omits the reflection
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      hint: "A horizontal shift cannot change how high or low a graph reaches — concentrate on what the other two operations do to the extreme value.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** The least value of $f$ is $6$; negating makes it the greatest value $-6$, and adding $4$ gives $-2$.\n\n**The Full Solution:**\nStep 1: The V shown has its corner at $(-1,6)$, so the smallest value of $f$ is $6$.\nStep 2: The inside $x+3$ slides the graph left but leaves every output unchanged, so $f(x+3)$ still has least value $6$.\nStep 3: Negating turns that least value into the greatest value of $-f(x+3)$, namely $-6$; adding $4$ raises it to $-6+4=-2$. Check: at $x=-4$, $g(-4)=-f(-1)+4=-6+4=-2$, and every other input gives a smaller value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): adds $4$ before reflecting: $-(6+4)=-10$, but the $+4$ is applied after the negation.\n* Choice B ($-6$): reflects correctly but never adds the $4$.\n* Choice D ($10$): ignores the reflection and computes $6+4$, which would be the maximum only if the graph still opened upward.\n\n**Test Day Takeaway:** Reflection converts a minimum into a maximum; apply the outside constant to the reflected value, not before it.",
      skills: ["function-transformations", "combined-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The function $f$ is defined by $f(x)=\\dfrac{a}{x+b}$, where $a$ and $b$ are constants, and the graph of $y=f(x)$ passes through the marked points $(1,6)$ and $(5,2)$ in the $xy$-plane. The function $m$ is defined by $m(x)=2f(x+4)-7$. What is the value of $m(-3)$?",
      diagram: { type: "rationalFunction", params: { a: 12, b: 1, showPoints: [[1, 6], [5, 2]] } },
      choices: [
        // distractor: applies the outside constant before the stretch
        { id: "A", text: "$-2$" },
        // distractor: treats the factor 2 as an added constant
        { id: "B", text: "$1$" },
        { id: "C", text: "$5$" },
        // distractor: omits the outside constant
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "C",
      hint: "Work out which input of $f$ the shift produces before deciding whether you need $a$ and $b$ at all.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** $m(-3)=2f(1)-7$, and the marked point gives $f(1)=6$, so $m(-3)=12-7=5$.\n\n**The Full Solution:**\nStep 1: The rule hands $f$ the input $-3+4=1$, and the graph marks the point $(1,6)$, so $f(1)=6$ — the constants $a$ and $b$ are never needed.\nStep 2: The factor $2$ acts on that output first: $2(6)=12$.\nStep 3: The $-7$ is applied to the stretched value: $12-7=5$, so $m(-3)=5$. Check with the constants: $\\dfrac{a}{1+b}=6$ and $\\dfrac{a}{5+b}=2$ give $4b=4$, so $b=1$ and $a=12$; then $f(1)=\\dfrac{12}{2}=6$ and $2(6)-7=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): subtracts $7$ before doubling: $2(6-7)=-2$. The $-7$ sits outside the factor $2$, so it is applied last.\n* Choice B ($1$): treats the $2$ as a quantity added to the output rather than a multiplier: $6+2-7=1$.\n* Choice D ($12$): stretches the output correctly but never applies the $-7$.\n\n**Test Day Takeaway:** When the shift lands on a labeled point, read the output off the figure — then apply the outside operations in written order, multiplier first.",
      skills: ["function-transformations", "system-of-equations"]
    },
    {
      id: 6,
      difficulty: "hard",
      question: "Three points on the graph of $y=f(x)$ are shown in the $xy$-plane. The function $g$ is defined by $g(x)=f(x+2)-5$. Which of the following points must lie on the graph of $y=g(x)$?",
      diagram: { type: "coordinatePoints", params: { points: [[-3, 4], [1, -2], [5, 6]] } },
      choices: [
        { id: "A", text: "$(-1,-7)$" },
        // distractor: adds the vertical shift
        { id: "B", text: "$(-1,3)$" },
        // distractor: shifts the input right
        { id: "C", text: "$(3,-7)$" },
        // distractor: reverses both shifts
        { id: "D", text: "$(3,3)$" }
      ],
      correctAnswer: "A",
      hint: "Choose one plotted point, ask which input of $g$ reaches it, and then adjust the height.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** The plotted point $(1,-2)$ gives $g(-1)=f(1)-5=-7$, so $(-1,-7)$ is on the graph of $g$.\n\n**The Full Solution:**\nStep 1: The plotted points say $f(-3)=4$, $f(1)=-2$, and $f(5)=6$.\nStep 2: For the input $1$ to reach $f$, the input to $g$ must satisfy $x+2=1$, so $x=-1$.\nStep 3: Then $g(-1)=f(1)-5=-2-5=-7$, giving the point $(-1,-7)$. The other plotted points give $(-5,-1)$ and $(3,1)$, neither of which appears among the choices. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-1,3)$): adds $5$ to the height instead of subtracting it.\n* Choice C ($(3,-7)$): shifts the input right; a $+2$ inside the function moves points left.\n* Choice D ($(3,3)$): reverses both changes: right instead of left and up instead of down.\n\n**Test Day Takeaway:** Convert a plotted point into a statement $f(a)=b$, then solve the inside expression for the new input.",
      skills: ["function-transformations", "combined-transformations"]
    },
    {
      id: 7,
      difficulty: "hard",
      question: "The graph of $y=f(x)$ is shown in the $xy$-plane, and its $x$-intercepts are $(-4,0)$ and $(2,0)$. The function $g$ is defined by $g(x)=f(x-5)$. What is the distance between the two $x$-intercepts of the graph of $y=g(x)$?",
      diagram: { type: "quadraticIntercepts", params: { intercepts: [-4, 2] } },
      choices: [
        // distractor: subtracts the shift from the distance
        { id: "A", text: "$1$" },
        // distractor: reports the shift itself
        { id: "B", text: "$5$" },
        { id: "C", text: "$6$" },
        // distractor: adds the shift to the distance
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "C",
      hint: "Locate both new intercepts before measuring, and notice what a translation does to distances.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Both intercepts move right $5$, to $x=1$ and $x=7$, so the distance is still $7-1=6$.\n\n**The Full Solution:**\nStep 1: $f(-4)=0$ and $f(2)=0$, so $g(x)=f(x-5)$ is zero when $x-5=-4$ or $x-5=2$.\nStep 2: Solving gives $x=1$ and $x=7$: the intercepts are $(1,0)$ and $(7,0)$.\nStep 3: The distance between them is $7-1=6$, the same as the original distance $2-(-4)=6$, because a translation moves both points equally. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracts the shift from the distance: $6-5=1$.\n* Choice B ($5$): reports the size of the shift rather than the separation of the intercepts.\n* Choice D ($11$): adds the shift to the distance: $6+5=11$.\n\n**Test Day Takeaway:** A horizontal translation relocates every point by the same amount, so distances between features are unchanged.",
      skills: ["function-transformations", "x-intercepts"]
    },
    {
      id: 8,
      difficulty: "hard",
      question: "For constants $a$ and $b$, the function $f$ satisfies $f(x)=\\dfrac{a}{x+b}$, and the curve drawn in the $xy$-plane is its graph, with marked points $(0,5)$ and $(2,3)$. The graph of $y=p(x)$ is the graph of $y=f(x)$ raised $4$ units. Which of the following defines $p$?",
      diagram: { type: "rationalFunction", params: { a: 15, b: 3, showPoints: [[0, 5], [2, 3]] } },
      choices: [
        // distractor: lowers instead of raising the graph
        { id: "A", text: "$p(x)=\\dfrac{15}{x+3}-4$" },
        { id: "B", text: "$p(x)=\\dfrac{15}{x+3}+4$" },
        // distractor: moves the constant into the denominator
        { id: "C", text: "$p(x)=\\dfrac{15}{x+7}$" },
        // distractor: adds the constant to the numerator
        { id: "D", text: "$p(x)=\\dfrac{19}{x+3}$" }
      ],
      correctAnswer: "B",
      hint: "Test the choices against a height you can compute: raising a graph adds to the finished output.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The marked points give $f(x)=\\dfrac{15}{x+3}$, and raising the graph $4$ units adds $4$ to the whole output.\n\n**The Full Solution:**\nStep 1: From $(0,5)$: $\\dfrac{a}{b}=5$, so $a=5b$. From $(2,3)$: $\\dfrac{a}{2+b}=3$, so $a=6+3b$.\nStep 2: Setting these equal gives $5b=6+3b$, so $b=3$ and $a=15$, and $f(x)=\\dfrac{15}{x+3}$.\nStep 3: Raising the graph $4$ units means $p(x)=f(x)+4=\\dfrac{15}{x+3}+4$. Check against the choices at $x=0$: $p(0)$ must be $5+4=9$, and only this equation gives $\\dfrac{15}{3}+4=9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{15}{x+3}-4$): lowers the graph instead of raising it.\n* Choice C ($\\dfrac{15}{x+7}$): puts the $4$ into the denominator, which would shift the graph horizontally.\n* Choice D ($\\dfrac{19}{x+3}$): adds $4$ to the numerator; that changes the shape of the curve rather than lifting it.\n\n**Test Day Takeaway:** An outside constant is added to the entire fraction — it never migrates into the numerator or the denominator.",
      skills: ["function-transformations", "answer-choice-method"]
    },
    {
      id: 9,
      difficulty: "hard",
      question: "The three plotted points lie on the graph of $y=f(x)$ in the $xy$-plane, and the function $g$ is defined by $g(x)=-2f(x)+1$. What is the largest value that $g$ takes at those three inputs?",
      diagram: { type: "coordinatePoints", params: { points: [[-2, 3], [2, -4], [6, 1]] } },
      choices: [
        // distractor: uses the largest value of f, ignoring the sign reversal
        { id: "A", text: "$-5$" },
        // distractor: uses the largest input instead of comparing outputs
        { id: "B", text: "$-1$" },
        // distractor: omits the constant
        { id: "C", text: "$8$" },
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "D",
      hint: "Apply the rule at each plotted point before deciding which one wins.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** A negative multiplier reverses the ranking, so the least output of $f$ wins: $g(2)=-2(-4)+1=9$.\n\n**The Full Solution:**\nStep 1: The plotted points give $f(-2)=3$, $f(2)=-4$, and $f(6)=1$.\nStep 2: Applying the rule at each input: $g(-2)=-2(3)+1=-5$, $g(2)=-2(-4)+1=9$, and $g(6)=-2(1)+1=-1$.\nStep 3: Comparing $-5$, $9$, and $-1$, the largest value is $9$. Check: multiplying by $-2$ reverses order, so the smallest value of $f$, namely $-4$, produces the largest value of $g$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): starts from the greatest value of $f$, $f(-2)=3$, and computes $-2(3)+1=-5$; the negative factor changes which point wins.\n* Choice B ($-1$): evaluates at the greatest input, $x=6$, rather than comparing the three outputs: $-2(1)+1=-1$.\n* Choice C ($8$): picks the right point but stops after multiplying: $-2(-4)=8$, with the $+1$ never applied.\n\n**Test Day Takeaway:** A negative vertical stretch flips the ranking of outputs, so the minimum of $f$ becomes the maximum of the transformed function.",
      skills: ["function-transformations", "combined-transformations"]
    }
  ]
};
