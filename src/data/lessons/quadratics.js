export const quadraticsLessons = [
  // Section 1: Overview
  {
    id: 1,
    title: "Introduction to Quadratics",
    type: "lesson",
    duration: "8 min",
    section: "Overview",
    hero: {
      tagline: "THE PARABOLA",
      subtitle: "When x gets squared"
    },
    content: {
      blocks: [
        { type: "text", content: "Think about what happens when you throw a basketball toward the hoop. The ball doesn't travel in a straight line — it follows a curved arc. That arc? It's a **parabola**, and the math behind it is a **quadratic equation**. Quadratics show up everywhere: the path of a projectile, the shape of a satellite dish, the profit curve of a business. On the SAT, quadratics are one of the *highest-frequency topics* in the entire math section — you'll see 4 to 6 questions on every test." },
        { type: "quadraticIntro" },
        { type: "text", content: "Here's the key insight that separates quadratics from everything else you've studied: the **x²** term. In a linear equation like y = 3x + 2, doubling x just doubles the output. But in a quadratic, doubling x *quadruples* the x² part. That's why quadratics curve — the outputs don't grow at a constant rate, they accelerate. This accelerating behavior is what creates the parabola shape." },
        { type: "quadraticStandardForm" },
        { type: "text", content: "Each coefficient in standard form tells you something specific. The **a** value controls the shape — how steep or flat the parabola is, and whether it opens up or down. The **b** value shifts the axis of symmetry left or right. The **c** value is the *y-intercept* — the point where the parabola crosses the y-axis. On the SAT, they love asking about c because it's the easiest to read directly from the equation." },
        { type: "parabolaDirection" },
        { type: "text", content: "**SAT trap alert:** When the SAT asks about the *minimum* or *maximum* value, they're testing whether you know the connection between the sign of **a** and the direction of the parabola. If a > 0, the parabola opens up, so the vertex is a *minimum*. If a < 0, it opens down, so the vertex is a *maximum*. Students lose easy points by mixing these up. Quick memory trick: positive a = smiley face (opens up, minimum at the bottom), negative a = frowny face (opens down, maximum at the top)." },
        { type: "text", content: "One more thing the SAT tests: the *width* of the parabola. A larger |a| value makes the parabola *narrower* (it shoots up or down faster), while a smaller |a| value makes it *wider* (it spreads out more gently). You won't need to calculate exact widths, but you should be able to compare two parabolas and identify which has the larger |a| based on their shapes." }
      ]
    }
  },
  // Section 2: Roots
  {
    id: 2,
    title: "Roots of a Quadratic",
    type: "lesson",
    duration: "8 min",
    section: "Roots",
    hero: {
      tagline: "WHERE Y = 0",
      subtitle: "Finding the x-intercepts"
    },
    content: {
      blocks: [
        { type: "text", content: "Imagine you're tracking the height of a ball after it's been kicked. It goes up, reaches a peak, and comes back down. At what moments is the ball *on the ground*? Those moments — where the height equals zero — are the **roots** of the equation. Finding roots is one of the most fundamental skills in all of algebra, and it's absolutely central to SAT math. You'll use roots to answer questions about x-intercepts, to factor expressions, and to solve equations set equal to zero." },
        { type: "rootsIntro" },
        { type: "text", content: "Here's something that trips up a lot of students: the SAT uses *four different names* for the exact same concept. When a question says 'find the zeros,' it means the same thing as 'find the roots,' which means the same thing as 'find the x-intercepts,' which means the same thing as 'find the solutions.' They deliberately rotate through these terms to test whether you recognize they're all asking the same question. Don't let the vocabulary fool you." },
        { type: "rootsSynonyms" },
        { type: "text", content: "Graphically, roots are where the parabola crosses or touches the x-axis. This is because the x-axis is where **y = 0**, so any point on the x-axis satisfies the equation when you set y equal to zero. A quadratic can have **two roots** (crosses the x-axis twice), **one root** (just touches the x-axis at the vertex), or **no real roots** (the entire parabola floats above or below the x-axis). The SAT loves testing whether you can determine the *number* of roots from a graph." },
        { type: "rootsOnGraph" },
        { type: "text", content: "**Common SAT question patterns for roots:** (1) 'What are the x-intercepts of the graph?' — just read where it crosses the x-axis. (2) 'How many solutions does the equation have?' — count the x-intercepts. (3) 'If x = 3 is a solution, which could be the equation?' — plug in x = 3 and see which equation gives zero. (4) 'What is the sum/product of the solutions?' — for ax² + bx + c = 0, the sum of roots is *−b/a* and the product is *c/a*. This shortcut can save you from solving the whole equation." },
        { type: "text", content: "**Pro tip for the SAT:** When you see a quadratic equation set equal to zero, your first instinct should be to try factoring. If the equation factors cleanly, you'll find the roots in seconds. If it doesn't factor easily, use DESMOS — type in the equation and look for where the graph crosses the x-axis. Save the quadratic formula for when neither factoring nor DESMOS is practical (which is rare on the SAT)." }
      ]
    }
  },
  { id: 3, title: "Finding Roots Via Graph", type: "video", duration: "8 min", section: "Roots", videoId: "HjtgJosvHus", hero: { tagline: "GRAPHICAL", subtitle: "Reading x-intercepts" } },
  { id: 4, title: "Finding Roots Via Factoring", type: "video", duration: "10 min", section: "Roots", videoId: "Ilf751ezqtM", hero: { tagline: "FACTORING", subtitle: "Breaking apart quadratics" } },
  { id: 5, title: "Finding Roots Via Completing the Square", type: "video", duration: "10 min", section: "Roots", videoId: "WVhrFVpiqik", hero: { tagline: "COMPLETING SQUARE", subtitle: "Algebraic method" } },
  { id: 6, title: "Finding Roots Via DESMOS", type: "video", duration: "8 min", section: "Roots", videoId: "vOfds1-LBx4", hero: { tagline: "DESMOS METHOD", subtitle: "Visual root finding" } },
  { id: 7, title: "Complex Finding the Roots via DESMOS", type: "video", duration: "10 min", section: "Roots", videoId: "06R53pBYjs0", hero: { tagline: "ADVANCED", subtitle: "Complex DESMOS approach" } },
  // Section 3: Vertex
  {
    id: 8,
    title: "The Vertex",
    type: "lesson",
    duration: "8 min",
    section: "Vertex",
    hero: {
      tagline: "THE TURNING POINT",
      subtitle: "Max or min of the parabola"
    },
    content: {
      blocks: [
        { type: "text", content: "Every parabola has one special point — the spot where it changes direction. Think of a roller coaster: there's that single moment at the very top (or very bottom) of the hill where you stop going up and start going down. That turning point is the **vertex**. On the SAT, vertex questions are among the most common quadratic problems. They test whether you can find the vertex, interpret what it means, and distinguish between the x-coordinate and the y-coordinate." },
        { type: "vertexIntro" },
        { type: "text", content: "The vertex formula **x = −b / 2a** is not given on the SAT reference sheet — you must memorize it. This formula gives you the **x-coordinate** of the vertex from standard form (y = ax² + bx + c). Once you have the x-coordinate, plug it back into the original equation to get the **y-coordinate**. Together, (x, y) is your vertex. Here's a helpful way to remember it: the −b/2a formula is actually the midpoint between the two roots. The vertex always sits exactly halfway between the x-intercepts, which makes geometric sense — a parabola is symmetric." },
        { type: "vertexFormula", notGiven: true },
        { type: "text", content: "The vertex has real-world meaning in word problems. If the quadratic represents the height of a ball, the vertex tells you the *maximum height*. If it represents profit, the vertex is the *maximum profit*. If it represents cost, the vertex might be the *minimum cost*. The SAT will frame these as context problems: 'A ball is thrown upward... what is the maximum height?' or 'A company's profit is modeled by... at what number of units is profit maximized?' In every case, you're finding the vertex." },
        { type: "vertexWhereVsWhat" },
        { type: "text", content: "The WHERE vs WHAT distinction is *the* most common SAT trap on vertex questions. Read the question carefully: 'At what value of x does the maximum occur?' wants the **x-coordinate** (WHERE). 'What is the maximum value?' wants the **y-coordinate** (WHAT). Students who rush through the problem often find the vertex correctly but then give the wrong coordinate. Circle the word 'where' or 'what' in the question before you start solving — it takes one second and prevents a careless mistake." },
        { type: "text", content: "**DESMOS shortcut:** On the digital SAT, type the quadratic equation into DESMOS and look for the vertex visually. You can click on the turning point to get its exact coordinates. This is often faster than using the formula, especially when the coefficients are messy. However, you should still know the formula because some questions give you the equation with unknown coefficients (like y = 2x² − 4kx + 3) and ask you to find the vertex in terms of k — DESMOS can't help there." }
      ]
    }
  },
  {
    id: 9,
    title: "Vertex Form",
    type: "lesson",
    duration: "7 min",
    section: "Vertex",
    hero: {
      tagline: "a(x - h)² + k",
      subtitle: "The vertex-revealing form"
    },
    content: {
      blocks: [
        { type: "text", content: "Standard form (y = ax² + bx + c) is great for some things — you can read the y-intercept instantly and use the coefficients to calculate roots. But it hides the vertex. You have to do work to find it. **Vertex form** solves that problem: it's a way of writing the exact same equation so the vertex coordinates are right there in front of you, no calculation needed." },
        { type: "vertexFormIntro" },
        { type: "text", content: "In vertex form, **y = a(x − h)² + k**, the vertex is at the point **(h, k)**. But watch out for the most common trap: notice it says **(x − h)**, with a *minus* sign. So if you see y = 2(x − 3)² + 5, the vertex is (3, 5) — the h value is positive 3 because the formula has a minus built in. But if you see y = 2(x + 3)² + 5, the vertex is (−3, 5) — the plus sign means h is actually −3. The SAT exploits this sign confusion constantly." },
        { type: "vertexFormFormula", notGiven: true },
        { type: "text", content: "The **a** value in vertex form means the same thing as in standard form — it controls direction (up or down) and width (narrow or wide). The **h** value shifts the parabola left or right from the origin. The **k** value shifts it up or down. Think of it like moving a basic y = x² parabola around the coordinate plane: h moves it horizontally, k moves it vertically." },
        { type: "text", content: "**SAT question patterns with vertex form:** (1) 'What is the minimum value of the function?' — just read k (if a > 0). (2) 'The function has a maximum at x = 4. Which equation could represent the function?' — look for h = 4 in the answer choices. (3) 'Rewrite in vertex form' — you'll need to complete the square (covered in a video lesson). (4) Converting between standard and vertex form — expand (x − h)² to go from vertex to standard, or complete the square to go from standard to vertex." },
        { type: "text", content: "**Why vertex form matters for the SAT:** The SAT frequently gives you an equation in vertex form and asks about the vertex — OR gives you vertex information and asks you to write the equation. Being fluent in both directions (reading the vertex from the form, and writing the form given a vertex) is essential. Also remember: vertex form is *not* on the reference sheet. You need to have y = a(x − h)² + k memorized cold." }
      ]
    }
  },
  { id: 10, title: "Finding the Vertex from a Graph", type: "video", duration: "8 min", section: "Vertex", videoId: "KSvSDNTvwOQ", hero: { tagline: "PRACTICE", subtitle: "Reading vertex from graph" } },
  { id: 11, title: "Finding the Vertex from an Equation", type: "video", duration: "10 min", section: "Vertex", videoId: "XQ2Tw8hzjPk", hero: { tagline: "PRACTICE", subtitle: "Calculate vertex" } },
  { id: 12, title: "Transformation of Vertex", type: "video", duration: "10 min", section: "Vertex", videoId: "R-f4HyaOsZY", hero: { tagline: "TRANSFORMATIONS", subtitle: "Moving the vertex" } },
  { id: 13, title: "Transformation of Vertex (DESMOS Method)", type: "video", duration: "8 min", section: "Vertex", videoId: "iKRlQJg463E", hero: { tagline: "DESMOS METHOD", subtitle: "Visual vertex shifts" } },
  // Section 4: Discriminant
  {
    id: 14,
    title: "The Discriminant",
    type: "lesson",
    duration: "9 min",
    section: "Discriminant",
    hero: {
      tagline: "b² - 4ac",
      subtitle: "How many solutions?"
    },
    content: {
      blocks: [
        { type: "text", content: "Here's a powerful question: *without actually solving* a quadratic equation, can you figure out how many solutions it has? Yes — and the tool that lets you do this is called the **discriminant**. Think of it like an X-ray for quadratic equations. Instead of going through the full process of factoring or using the quadratic formula, you just calculate one number and it tells you whether the equation has two solutions, one solution, or no real solutions at all." },
        { type: "discriminantIntro" },
        { type: "text", content: "The discriminant comes from the quadratic formula. Remember that the quadratic formula has a square root in it: **√(b² − 4ac)**. The expression under the square root — **b² − 4ac** — is the discriminant. Why does it determine the number of solutions? Because the square root is what creates the ± split. If the value under the root is positive, you get two different answers (one with + and one with −). If it's zero, both answers are the same. If it's negative, you can't take the square root of a negative number, so there are no real solutions." },
        { type: "discriminantFormula", notGiven: true },
        { type: "text", content: "Let's connect this to what you see on the graph. When **D > 0**, the parabola crosses the x-axis at two points — two x-intercepts, two solutions. When **D = 0**, the parabola just barely touches the x-axis at one point — the vertex sits right on the x-axis, giving you a 'double root.' When **D < 0**, the parabola floats entirely above (or below) the x-axis and never touches it — no x-intercepts, no real solutions." },
        { type: "discriminantCases" },
        { type: "text", content: "The SAT loves discriminant questions because they test *conceptual understanding*, not just computation. The most common format: they give you a quadratic with a missing coefficient (like ax² + 6x + c = 0) and tell you something about the number of solutions. You set up an inequality using the discriminant and solve for the missing value. For example, 'the equation has no real solutions' means D < 0, so you'd write b² − 4ac < 0 and solve. 'Exactly one solution' means D = 0. 'Two distinct solutions' means D > 0." },
        { type: "discriminantWhenToUse" },
        { type: "text", content: "**Advanced SAT pattern — Discriminant with systems:** Some harder SAT questions combine the discriminant with systems of equations. They'll give you a line and a parabola, ask you to find when they have exactly one intersection point (tangent), no intersection, or two intersections. The trick: substitute the linear equation into the quadratic, rearrange into standard form, then use the discriminant on the resulting equation. If D = 0, the line is tangent to the parabola. This is a high-difficulty question that appears on nearly every SAT." },
        { type: "text", content: "**Quick check before moving on:** The discriminant formula b² − 4ac is NOT on the SAT reference sheet — you must memorize it. But here's good news: you only need to remember *one* formula, and it has a clear pattern. The 'b²' comes first (square the middle coefficient), then subtract '4ac' (four times the first coefficient times the last). Practice calculating it a few times and it becomes automatic." }
      ]
    }
  },
  { id: 15, title: "Simple Discriminant Question #1", type: "video", duration: "8 min", section: "Discriminant", videoId: "HvmcHvs4aJw", hero: { tagline: "PRACTICE", subtitle: "Basic discriminant" } },
  { id: 16, title: "Simple Discriminant Question #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "qC4zH3TPEPs", hero: { tagline: "DESMOS METHOD", subtitle: "Visual approach" } },
  { id: 17, title: "Simple Discriminant Question #2", type: "video", duration: "8 min", section: "Discriminant", videoId: "3T7p7HIovK0", hero: { tagline: "PRACTICE", subtitle: "More practice" } },
  { id: 18, title: "Simple Discriminant Question #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "QH6bXCWIYaU", hero: { tagline: "DESMOS METHOD", subtitle: "Visual solution" } },
  { id: 19, title: "Complex Discriminant Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "z8eu9oFwk2I", hero: { tagline: "ADVANCED", subtitle: "Challenging discriminant" } },
  { id: 20, title: "Simple Discriminant System Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "uGGb383xfu4", hero: { tagline: "SYSTEMS", subtitle: "Discriminant in systems" } },
  { id: 21, title: "Simple Discriminant System Question (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "skD4XM2RIgw", hero: { tagline: "DESMOS METHOD", subtitle: "Visual system approach" } },
  { id: 22, title: "Complex Discriminant System Question", type: "video", duration: "12 min", section: "Discriminant", videoId: "l6yMmy60gFA", hero: { tagline: "ADVANCED", subtitle: "Complex system" } },
  // Section 5: Deriving Standard Form
  {
    id: 23,
    title: "Deriving Standard Form from a Graph",
    type: "lesson",
    duration: "8 min",
    section: "Deriving Standard Form",
    hero: {
      tagline: "GRAPH → EQUATION",
      subtitle: "Building the equation"
    },
    content: {
      blocks: [
        { type: "text", content: "So far, you've been going from *equations to graphs* — given a quadratic, you find the roots, vertex, and shape. Now we flip the script. The SAT will show you a **graph of a parabola** and ask: *which equation represents this graph?* This is a reverse-engineering skill, and it requires you to extract information from the picture and build the equation piece by piece. These questions appear on nearly every SAT, and students who practice this skill gain a real edge." },
        { type: "derivingStandardFormIntro" },
        { type: "text", content: "The method you choose depends on what information is visible on the graph. Can you clearly see the **vertex** and one other point? Use vertex form. Can you see the **two x-intercepts** (roots) and one other point? Use factored form. Can you identify **three points** with clear coordinates but not the vertex or roots? Use the system of equations method. On the SAT, the graph always has enough labeled points or grid-intersections to use at least one of these methods — your job is to identify *which* information is easiest to read." },
        { type: "derivingStandardFormMethods" },
        { type: "text", content: "Let's talk strategy for reading graphs on the SAT. First, check if the vertex sits on a grid intersection — if it does, vertex form is usually fastest. Second, check if the x-intercepts are integers — if they are, factored form is your friend. Third, always verify your equation against a point you *didn't* use to build it. If the equation passes through that check point, you're golden. If not, you made an arithmetic error somewhere. This verification step takes 10 seconds and saves you from wrong answers." },
        { type: "text", content: "**The y-intercept shortcut:** In every parabola graphed on the SAT, the y-intercept (where the graph crosses the y-axis) is visible. In standard form y = ax² + bx + c, the y-intercept is simply **c** — the constant term. So if you can read the y-intercept from the graph, you immediately know c. This often lets you eliminate 2 or 3 answer choices without doing any real work. Always check the y-intercept first." },
        { type: "derivingStandardFormTips" },
        { type: "text", content: "**Common mistakes to avoid:** (1) Forgetting to solve for **a** — many students find the roots or vertex and write the equation without determining the value of a. You always need a third piece of information (another point on the graph) to pin down a. (2) Sign errors in vertex form — remember it's (x − h), so if the vertex is at x = −2, you write (x − (−2))² = (x + 2)². (3) Not checking your answer — plug a known point from the graph into your final equation to verify it works." }
      ]
    }
  },
  { id: 24, title: "Deriving Standard Form From Graph", type: "video", duration: "10 min", section: "Deriving Standard Form", videoId: "K66XHuhQy-U", hero: { tagline: "PRACTICE", subtitle: "Graph to standard form" } },
  { id: 25, title: "Deriving Standard Form From Graph (DESMOS Method)", type: "video", duration: "8 min", section: "Deriving Standard Form", videoId: "QpUMRFoMUMo", hero: { tagline: "DESMOS METHOD", subtitle: "Visual derivation" } },
  { id: 26, title: "Complex Deriving Standard Form (Vertex Form Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "0ijCFEhltcg", hero: { tagline: "VERTEX FORM", subtitle: "Using vertex form" } },
  { id: 27, title: "Complex Deriving Standard Form (System of Equations Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "G6dJDa4sFCU", hero: { tagline: "SYSTEMS", subtitle: "System of equations method" } }
];
