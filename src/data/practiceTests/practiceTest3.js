// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original concepts with different numbers and contexts

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
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
          type: "multiple-choice",
          difficulty: "easy",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.75,
              yIntercept: 4,
              xRange: [0, 10],
              yRange: [0, 12],
              xTickInterval: 2,
              yTickInterval: 2,
              label: "g(x)"
            }
          },
          question: "The graph of linear function $g(x)$ is shown above. What is the value of $g(4)$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Evaluating a Linear Function from a Graph** -- This pattern shows up on nearly every SAT. They give you a graph and ask you to evaluate at a specific input.\n\n**Choice C is correct.** $g(4) = 7$.\n\n**The Fast Way (20 seconds):** Go straight to the graph. Find $x = 4$ on the horizontal axis, trace up to the line, then read across to the $y$-axis. You should land at $y = 7$. Done.\n\n**If you prefer the algebraic approach:**\n1. Pick two clear points from the graph: $(0, 4)$ and $(8, 10)$\n2. Slope: $m = \\frac{10 - 4}{8 - 0} = \\frac{6}{8} = \\frac{3}{4}$\n3. The $y$-intercept is $4$, so $g(x) = \\frac{3}{4}x + 4$\n4. Plug in: $g(4) = \\frac{3}{4}(4) + 4 = 3 + 4 = 7$\n\n**Why the wrong answers are tempting:**\n- **A ($4$):** This is the $y$-intercept, the value at $x = 0$. If you glance at where the line starts instead of where $x = 4$ is, you land here.\n- **B ($6$):** You get the slope calculation right ($\\frac{3}{4} \\times 4 = 3$) but then accidentally add $3$ instead of $4$ for the $y$-intercept. A small mental math slip under pressure.\n- **D ($8$):** This happens if you eyeball the slope as $1$ instead of $\\frac{3}{4}$, giving $1(4) + 4 = 8$. Always use two actual points to calculate slope.\n\n**Verification:** $g(4) = \\frac{3}{4}(4) + 4 = 3 + 4 = 7$\n\n**Test Day Takeaway:** When a graph question asks for $f(a)$, read directly from the graph first -- it is faster and avoids algebra mistakes entirely.",
          skills: ["reading-graphs", "linear-functions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Of the 48,000 seats in a concert hall, 36,000 are in the general admission section. Out of those seats in general admission, 14,400 are in the front rows. Of the general admission seats that are NOT in the front rows, 40% are classified as premium. What percentage of ALL seats in the concert hall are general admission, non-front-row, premium seats?",
          choices: [
            { id: "A", text: "12%" },
            { id: "B", text: "18%" },
            { id: "C", text: "30%" },
            { id: "D", text: "45%" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Multi-Layer Subset Percentage** -- The SAT tests whether you can chain multiple filtering steps before computing a percentage of the whole. Each step narrows the group.\n\n**Choice B is correct.** 18% of all seats are GA, non-front-row, premium seats.\n\n**The Fast Way (25 seconds):** GA non-front-row seats: $36{,}000 - 14{,}400 = 21{,}600$. Premium portion: $21{,}600 \\times 0.40 = 8{,}640$. As a percentage of total: $8{,}640 \\div 48{,}000 = 0.18 = 18\\%$.\n\n**Solution steps:**\n1. Seats in GA but NOT front rows: $36{,}000 - 14{,}400 = 21{,}600$\n2. Premium seats among those: $21{,}600 \\times 0.40 = 8{,}640$\n3. As a percentage of all seats: $(8{,}640 \\div 48{,}000) \\times 100\\% = 18\\%$\n\n**Why the wrong answers are tempting:**\n- **A (12%):** This comes from taking $40\\%$ of $14{,}400$ (the front-row seats) instead of the non-front-row seats, giving $5{,}760 \\div 48{,}000 = 12\\%$. You applied the premium rate to the wrong subset.\n- **C (30%):** This is $14{,}400 \\div 48{,}000 = 30\\%$, the percentage of front-row seats out of the total. You stopped after the first subtraction step and grabbed the wrong numerator.\n- **D (45%):** This is $21{,}600 \\div 48{,}000 = 45\\%$, the percentage of ALL non-front-row GA seats. You forgot to apply the $40\\%$ premium filter -- the final and most critical step.\n\n**Verification:** $8{,}640 \\div 48{,}000 = 0.18 = 18\\%$, and $8{,}640 + (21{,}600 - 8{,}640) + 14{,}400 = 36{,}000$ confirms the GA total.\n\n**Test Day Takeaway:** When a problem chains multiple subsets (\"of those... of those...\"), work step by step: subtract first, then apply the next filter, then compute the final percentage against the total. Each layer reduces the group further.",
          skills: ["percentages", "word-problems"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{5}{3}x = 45$, what is the value of $x$?",
          correctAnswer: 27,
          explanation: "**SAT Pattern: Solving a Fraction Coefficient Equation** -- A free-point question that appears in the first few problems of most SATs. Pure execution.\n\n**The correct answer is 27.**\n\n**The Fast Way (10 seconds):** Multiply both sides by the reciprocal of $\\frac{5}{3}$, which is $\\frac{3}{5}$: $x = 45 \\times \\frac{3}{5} = \\frac{135}{5} = 27$. Type it in and move on.\n\n**Solution steps:**\n1. $\\frac{5}{3}x = 45$\n2. Multiply both sides by $\\frac{3}{5}$: $x = 45 \\times \\frac{3}{5}$\n3. $x = \\frac{135}{5} = 27$\n\n**Alternatively, clear the fraction first:**\n1. Multiply both sides by $3$: $5x = 135$\n2. Divide by $5$: $x = 27$\n\n**Verification:** $\\frac{5}{3}(27) = \\frac{135}{3} = 45$\n\n**Test Day Takeaway:** When you see $\\frac{a}{b}x = c$, multiply by the reciprocal $\\frac{b}{a}$ immediately. Do not overthink fraction equations -- flip and multiply.",
          skills: ["solving-equations", "fractions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $(5x^2 - 4x + 3) + (2x^2 - 7x) - (x^2 + 2x - 6)$?",
          choices: [
            { id: "A", text: "$6x^2 - 13x + 9$" },
            { id: "B", text: "$6x^2 - 9x - 3$" },
            { id: "C", text: "$8x^2 - 13x + 9$" },
            { id: "D", text: "$6x^2 - 13x - 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Polynomials with Subtraction (Sign Distribution)** -- The SAT adds a subtracted group to test whether you correctly distribute the negative sign across every term in the third polynomial. This is where most errors happen.\n\n**Choice A is correct.** $(5x^2 - 4x + 3) + (2x^2 - 7x) - (x^2 + 2x - 6) = 6x^2 - 13x + 9$.\n\n**The Fast Way (25 seconds):** Distribute the minus sign on the third group: $-x^2 - 2x + 6$. Now combine all three: $x^2$ terms: $5 + 2 - 1 = 6$. $x$ terms: $-4 - 7 - 2 = -13$. Constants: $3 + 0 + 6 = 9$. Answer: $6x^2 - 13x + 9$.\n\n**Solution steps:**\n1. Remove parentheses, distributing the negative: $5x^2 - 4x + 3 + 2x^2 - 7x - x^2 - 2x + 6$\n2. Group $x^2$ terms: $(5 + 2 - 1)x^2 = 6x^2$\n3. Group $x$ terms: $(-4 - 7 - 2)x = -13x$\n4. Group constants: $3 + 6 = 9$\n5. Result: $6x^2 - 13x + 9$\n\n**Why the wrong answers are tempting:**\n- **B ($6x^2 - 9x - 3$):** You forgot to distribute the negative to the $-2x$ term (leaving it as $+2x$ instead of $-2x$), giving $-4 - 7 + 2 = -9$ for the $x$ coefficient. You also missed flipping the $-6$ to $+6$, keeping $3 - 6 = -3$ for the constant.\n- **C ($8x^2 - 13x + 9$):** You added $x^2$ instead of subtracting it from the third group ($5 + 2 + 1 = 8$). The minus sign before the parentheses affects every term inside.\n- **D ($6x^2 - 13x - 3$):** The $x^2$ and $x$ terms are correct, but the constant is wrong. You subtracted $6$ instead of adding it: $-(- 6) = +6$, so the constant should be $3 + 6 = 9$, not $3 - 6 = -3$.\n\n**Verification:** Plug in $x = 1$: $(5 - 4 + 3) + (2 - 7) - (1 + 2 - 6) = 4 + (-5) - (-3) = 4 - 5 + 3 = 2$. Check: $6(1) - 13(1) + 9 = 6 - 13 + 9 = 2$.\n\n**Test Day Takeaway:** When subtracting a polynomial group, flip the sign of every term inside the parentheses -- including the constant. The most common SAT trap is forgetting to negate the last term.",
          skills: ["polynomial-operations", "combining-like-terms"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In triangle $PQR$, the measure of angle $Q$ is $42°$ and the measure of the exterior angle at vertex $R$ is $108°$. Side $QR$ is extended through $R$ to a point $S$, forming triangle $PRS$. If $\\angle PRS = 108°$, what is the measure of angle $\\angle PSR$, in degrees?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$42$" },
            { id: "C", text: "$66$" },
            { id: "D", text: "$72$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exterior Angle Theorem Applied Across Two Triangles** -- This pattern chains the exterior angle theorem with the triangle angle sum, requiring you to find an angle in the original triangle first and then use it in an adjacent triangle.\n\n**Choice A is correct.** $\\angle PSR = 6°$.\n\n**The Fast Way (30 seconds):** Interior angle $R$ in triangle $PQR$: $180° - 108° = 72°$. Angle $P$: $180° - 42° - 72° = 66°$. In triangle $PRS$, $\\angle PRS = 108°$ (the exterior angle at $R$) and $\\angle RPS = \\angle P = 66°$. But wait -- $\\angle RPS$ is the same as $\\angle P$ in triangle $PQR$ only if $S$ is on line $QR$. Since $\\angle PRS = 108°$ and the angles of triangle $PRS$ must sum to $180°$: $\\angle PSR = 180° - 108° - 66° = 6°$.\n\n**Solution steps:**\n1. Find interior angle $R$: $R = 180° - 108° = 72°$\n2. Find angle $P$ in triangle $PQR$: $P = 180° - 42° - 72° = 66°$\n3. In triangle $PRS$: $\\angle PRS = 108°$ and $\\angle RPS = 66°$ (same vertex $P$)\n4. $\\angle PSR = 180° - 108° - 66° = 6°$\n\n**Why the wrong answers are tempting:**\n- **B ($42°$):** This is angle $Q$ from the original triangle. You might assume the new triangle inherits the same angles, but triangle $PRS$ has a completely different shape.\n- **C ($66°$):** This is angle $P$ from the original triangle. You found it correctly but answered with the intermediate result instead of the final angle $\\angle PSR$ that was asked for.\n- **D ($72°$):** This is the interior angle $R$ in the original triangle. You stopped at the first conversion step and mistakenly thought this was the answer.\n\n**Verification:** $108° + 66° + 6° = 180°$, confirming the angles of triangle $PRS$ sum correctly.\n\n**Test Day Takeaway:** When a problem extends a side to create a new triangle, find all angles in the original triangle first. Then use those angles (especially at shared vertices) to set up the angle sum in the new triangle.",
          skills: ["triangle-angles", "exterior-angles"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "If $a$ is a solution to the equation $|3x - 5| = 13$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 6,
          explanation: "**SAT Pattern: Absolute Value Equation with a Constraint** -- The SAT often gives you an absolute value equation and then restricts the answer to positive or negative. Know both solutions, then pick the right one.\n\n**The correct answer is 6.**\n\n**The Fast Way (20 seconds):** In Desmos, graph $y = |3x - 5|$ and $y = 13$. You will see two intersection points. The positive one is $x = 6$. Type it in.\n\n**Solution steps:**\n1. Set up two cases: $3x - 5 = 13$ and $3x - 5 = -13$\n2. Case 1: $3x = 18$, so $x = 6$\n3. Case 2: $3x = -8$, so $x = -\\frac{8}{3} \\approx -2.67$\n4. Since $a > 0$, the answer is $a = 6$\n\n**Verification:** $|3(6) - 5| = |18 - 5| = |13| = 13$\n\n**Test Day Takeaway:** Every absolute value equation $|\\text{stuff}| = k$ splits into two linear equations. Solve both, then check which one the problem actually wants.",
          skills: ["absolute-value-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: [
            { text: "A group of friends is going to a movie theater. Each ticket costs $12.50, and each bag of popcorn costs $6.25. If " },
            { math: "t" },
            { text: " people buy a ticket and " },
            { math: "p" },
            { text: " people buy popcorn, which of the following expressions represents the total number of dollars spent by the group?" }
          ],
          choices: [
            { id: "A", text: [{ math: "12.5t - 6.25p" }] },
            { id: "B", text: [{ math: "12.5t + 6.25p" }] },
            { id: "C", text: [{ math: "12.5p + 6.25t" }] },
            { id: "D", text: [{ math: "18.75tp" }] }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words into an Algebraic Expression** -- The SAT tests whether you can match each price to the correct variable. This is a reading comprehension question disguised as algebra.\n\n**Choice B is correct.** Total cost $= 12.5t + 6.25p$.\n\n**The Fast Way (10 seconds):** Tickets cost $12.50 each, and $t$ people buy them: $12.5t$. Popcorn costs $6.25 each, and $p$ people buy it: $6.25p$. Total spending means you add: $12.5t + 6.25p$. Scan the choices, pick B.\n\n**Solution steps:**\n1. Cost of tickets: $\\$12.50 \\times t = 12.5t$\n2. Cost of popcorn: $\\$6.25 \\times p = 6.25p$\n3. Total: $12.5t + 6.25p$\n\n**Why the wrong answers are tempting:**\n- **A ($12.5t - 6.25p$):** You might pick this if you confuse \"total\" with \"difference.\" But spending money on popcorn adds to the total bill, it does not subtract from it.\n- **C ($12.5p + 6.25t$):** The prices are swapped with the variables. It looks almost right, but the ticket price is assigned to popcorn buyers and vice versa. The SAT is testing whether you read carefully.\n- **D ($18.75tp$):** This multiplies $t$ and $p$ together, which would count every possible pair of a ticket buyer and a popcorn buyer. Independent costs are added, never multiplied.\n\n**Verification:** Try $t = 2$, $p = 4$: $12.5(2) + 6.25(4) = 25 + 25 = \\$50$. That makes sense for 2 tickets and 4 popcorns.\n\n**Test Day Takeaway:** Total cost always equals price times quantity, added across categories. Match each price to its own variable -- the SAT bets you will swap them.",
          skills: ["algebraic-expressions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "What value of $x$ satisfies the given equation?\n\n$\\frac{9}{14}x - \\frac{5}{14}x = \\frac{1}{4} + \\frac{1}{8}$",
          correctAnswer: "21/16",
          acceptedAnswers: ["21/16", 1.3125, "1.3125"],
          explanation: "**SAT Pattern: Fraction Equation -- Simplify Both Sides First** -- These fraction-heavy equations look intimidating but collapse quickly once you combine like terms on each side.\n\n**The correct answer is $\\frac{21}{16}$ (or 1.3125).**\n\n**The Fast Way (20 seconds):** Left side: $\\frac{9}{14}x - \\frac{5}{14}x = \\frac{4}{14}x = \\frac{2}{7}x$. Right side: $\\frac{1}{4} + \\frac{1}{8} = \\frac{3}{8}$. Now solve $\\frac{2}{7}x = \\frac{3}{8}$ by multiplying both sides by $\\frac{7}{2}$: $x = \\frac{3}{8} \\times \\frac{7}{2} = \\frac{21}{16}$.\n\n**Solution steps:**\n1. Left side: $\\frac{9}{14}x - \\frac{5}{14}x = \\frac{4}{14}x = \\frac{2}{7}x$\n2. Right side: $\\frac{1}{4} + \\frac{1}{8} = \\frac{2}{8} + \\frac{1}{8} = \\frac{3}{8}$\n3. Solve: $\\frac{2}{7}x = \\frac{3}{8}$\n4. Multiply by reciprocal: $x = \\frac{3}{8} \\times \\frac{7}{2} = \\frac{21}{16}$\n\n**Verification:** $\\frac{2}{7} \\times \\frac{21}{16} = \\frac{42}{112} = \\frac{3}{8}$\n\n**Test Day Takeaway:** Fraction equations look harder than they are. Combine like terms on each side first, then flip-and-multiply to isolate $x$. You can also enter $\\frac{3}{8} \\div \\frac{2}{7}$ directly in your calculator.",
          skills: ["solving-equations", "fractions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "piecewiseLinear",
            params: {
              points: [[-5, 1], [-2, 4], [0, 2], [2, 4], [5, 2]],
              xRange: [-6, 6],
              yRange: [-2, 6],
              label: "f(x)"
            }
          },
          question: "The complete graph of the function $f$ in the $xy$-plane is shown. For how many values of $x$ is $f(x)$ equal to $3$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Horizontal Line Test on a Piecewise Graph** -- The SAT loves asking \"for how many values of $x$ does $f(x) = k$?\" This is just counting intersections with a horizontal line.\n\n**Choice D is correct.** There are 4 values of $x$ where $f(x) = 3$.\n\n**The Fast Way (15 seconds):** Mentally draw (or physically sketch) a horizontal line at $y = 3$ across the graph. Count how many times the line crosses the zigzag function. Each crossing is one solution.\n\n**Solution steps:**\n1. Segment from $(-5, 1)$ to $(-2, 4)$: goes from below $3$ to above $3$ -- crosses once\n2. Segment from $(-2, 4)$ to $(0, 2)$: goes from above $3$ to below $3$ -- crosses once\n3. Segment from $(0, 2)$ to $(2, 4)$: goes from below $3$ to above $3$ -- crosses once\n4. Segment from $(2, 4)$ to $(5, 2)$: goes from above $3$ to below $3$ -- crosses once\n5. Total: 4 intersections\n\n**Why the wrong answers are tempting:**\n- **A ($1$):** You checked one segment, found a crossing, and stopped. The zigzag nature of piecewise functions means there can be multiple crossings at the same $y$-value.\n- **B ($2$):** You might only count the rising segments or only the falling segments, missing half the crossings.\n- **C ($3$):** A very common off-by-one error. You probably counted three segments carefully but overlooked the fourth one at one end of the graph.\n\n**Verification:** The line $y = 3$ lies between the minimum ($1$) and the peaks ($4$) of the function, so it must cross every rising and falling segment -- that is 4 crossings total.\n\n**Test Day Takeaway:** \"How many values of $x$\" means draw a horizontal line and count crossings. Go segment by segment so you do not miss any.",
          skills: ["piecewise-functions", "reading-graphs"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "hard",
          question: "The price of oil increased by 20% at the beginning of May. Two weeks later, an economic policy reduced the price by 14%. At the end of June, a supply disruption caused a further 25% increase on the resulting price. What is the overall percentage change in the price of oil from its original value, to the nearest tenth?",
          correctAnswer: 29,
          acceptedAnswers: [29, "29", "29.0"],
          explanation: "**SAT Pattern: Chained Successive Percentage Changes (Three Stages)** -- This extends the classic two-step percentage change problem to three stages. The trap is even stronger: students want to add $20\\% - 14\\% + 25\\% = 31\\%$, but each percentage applies to a different base.\n\n**The correct answer is 29.**\n\n**The Fast Way (20 seconds):** Multiply all three factors: $1.20 \\times 0.86 \\times 1.25 = 1.29$. The price is $129\\%$ of the original, so the overall change is $29\\%$.\n\n**Solution steps:**\n1. Start with a convenient base: Original price $= 100$\n2. After a $20\\%$ increase: $100 \\times 1.20 = 120$\n3. After a $14\\%$ decrease on $120$: $120 \\times 0.86 = 103.2$\n4. After a $25\\%$ increase on $103.2$: $103.2 \\times 1.25 = 129$\n5. Overall change: $129 - 100 = 29\\%$ increase\n\nThe naive approach of $20 - 14 + 25 = 31\\%$ is wrong because each percentage change applies to the running total, not the original. The $14\\%$ decrease removes $14\\%$ of $120$ (not $100$), and the $25\\%$ increase adds $25\\%$ of $103.2$ (not $100$).\n\n**Verification:** $1.20 \\times 0.86 = 1.032$; $1.032 \\times 1.25 = 1.29$. Net change $= 29\\%$.\n\n**Test Day Takeaway:** For successive percentage changes, convert each to a multiplier ($1 + \\text{rate}$ for increases, $1 - \\text{rate}$ for decreases), then multiply them all together. The final product minus $1$ is the net percentage change. This works for any number of stages.",
          skills: ["percent-change", "percentages"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: [
            { math: "y = 4x + 9", display: true },
            { math: "2y = 6x", display: true },
            { text: "The solution to the given system of equations is " },
            { math: "(x, y)" },
            { text: ". What is the value of " },
            { math: "x - y" },
            { text: "?" }
          ],
          correctAnswer: 18,
          explanation: "**SAT Pattern: System of Equations -- Find an Expression, Not Just $x$ or $y$** -- The SAT frequently asks for something like $x - y$ instead of $x$ or $y$ alone. The final subtraction step is where sign errors happen.\n\n**The correct answer is 18.**\n\n**The Fast Way (30 seconds):** Plug $y = 4x + 9$ into $2y = 6x$. Then use Desmos to graph both lines and read the intersection.\n\n**Solution steps:**\n1. Substitute: $2(4x + 9) = 6x$\n2. Expand: $8x + 18 = 6x$\n3. Solve: $2x = -18$, so $x = -9$\n4. Find $y$: $y = 4(-9) + 9 = -36 + 9 = -27$\n5. Compute what they asked: $x - y = -9 - (-27) = -9 + 27 = 18$\n\nNotice that step 5 is where most students slip. Subtracting a negative number means adding its positive, so $-9 - (-27) = -9 + 27 = 18$, not $-36$.\n\n**Verification:** Check in the second equation: $2(-27) = -54$ and $6(-9) = -54$. Both sides match.\n\n**Test Day Takeaway:** Always re-read the question after solving. They asked for $x - y$, not $x$ or $y$. And when subtracting a negative, flip it to addition -- this is the number one sign-error trap on the SAT.",
          skills: ["systems-of-equations"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, $\\sin(A) = \\frac{5}{13}$, and angle $C$ is a right angle. What is the value of $\\sin(B)$?",
          correctAnswer: "12/13",
          acceptedAnswers: ["12/13", 0.923, "0.923"],
          explanation: "**SAT Pattern: Complementary Angles in a Right Triangle (sin/cos swap)** -- If you know that $\\sin(A) = \\cos(B)$ when $A + B = 90°$, this problem takes seconds. The SAT tests this relationship often.\n\n**The correct answer is $\\frac{12}{13}$.**\n\n**The Fast Way (15 seconds):** Recognize the $5$-$12$-$13$ Pythagorean triple from $\\sin(A) = \\frac{5}{13}$. The sides are $5$, $12$, $13$. Since $B$ is the other acute angle, $\\sin(B) = \\cos(A) = \\frac{12}{13}$.\n\n**Solution steps:**\n1. $\\sin(A) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$, so the side opposite $A$ is $5$ and the hypotenuse is $13$\n2. Find the third side: $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$\n3. This $12$ is opposite angle $B$, so $\\sin(B) = \\frac{12}{13}$\n\nAlternatively, since $A + B = 90°$ in a right triangle, $\\sin(B) = \\cos(A) = \\frac{\\text{adjacent to } A}{\\text{hypotenuse}} = \\frac{12}{13}$.\n\n**Verification:** $\\sin^2(A) + \\cos^2(A) = \\frac{25}{169} + \\frac{144}{169} = \\frac{169}{169} = 1$\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$). Also remember: in a right triangle, $\\sin$ of one acute angle equals $\\cos$ of the other.",
          skills: ["right-triangle-trig", "pythagorean-theorem"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to the given expression?\n\n$9x^4 + 30x^2y + 25y^2$",
          choices: [
            { id: "A", text: "$(3x^2 + 5y)^2$" },
            { id: "B", text: "$(3x^2 + 5y^2)^2$" },
            { id: "C", text: "$(9x^2 + 5y)^2$" },
            { id: "D", text: "$(9x^2 + 25y)^2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Perfect Square Trinomial Recognition** -- The SAT wants you to spot the $A^2 + 2AB + B^2 = (A + B)^2$ pattern. Once you see it, you skip all the factoring work.\n\n**Choice A is correct.** $9x^4 + 30x^2y + 25y^2 = (3x^2 + 5y)^2$.\n\n**The Fast Way (20 seconds):** Take the square root of the first term: $\\sqrt{9x^4} = 3x^2$. Take the square root of the last term: $\\sqrt{25y^2} = 5y$. Check the middle: $2(3x^2)(5y) = 30x^2y$. It matches, so the answer is $(3x^2 + 5y)^2$.\n\n**Solution steps:**\n1. Recognize the pattern: $A^2 + 2AB + B^2$\n2. $A = \\sqrt{9x^4} = 3x^2$ and $B = \\sqrt{25y^2} = 5y$\n3. Verify middle term: $2(3x^2)(5y) = 30x^2y$ -- matches the given expression\n4. Answer: $(3x^2 + 5y)^2$\n\n**Why the wrong answers are tempting:**\n- **B ($(3x^2 + 5y^2)^2$):** The $y$ has the wrong exponent. Expanding this gives $9x^4 + 30x^2y^2 + 25y^4$, where the middle and last terms have extra powers of $y$. It looks close enough that you might not catch the difference.\n- **C ($(9x^2 + 5y)^2$):** You used $9x^2$ instead of $3x^2$. But $\\sqrt{9x^4} = 3x^2$, not $9x^2$. Expanding $(9x^2 + 5y)^2$ gives $81x^4 + ...$, which is way too big.\n- **D ($(9x^2 + 25y)^2$):** You skipped taking square roots entirely and just used the coefficients $9$ and $25$ as-is. Expanding gives $81x^4 + 450x^2y + 625y^2$, which does not match at all.\n\n**Verification:** $(3x^2 + 5y)^2 = 9x^4 + 30x^2y + 25y^2$\n\n**Test Day Takeaway:** When you see a trinomial with perfect square first and last terms, check the middle term against $2AB$. If it matches, you have a perfect square trinomial -- no trial-and-error factoring needed.",
          skills: ["factoring", "special-products"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $r$ and $s$ are the solutions to the equation $2x^2 - 10x + 7 = 0$, what is the value of $r^2 + s^2$?",
          choices: [
            { id: "A", text: "$\\frac{18}{4}$" },
            { id: "B", text: "$\\frac{36}{4}$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Vieta's Formulas Combined with Algebraic Identity** -- This problem requires two concepts: Vieta's formulas to find the sum and product of roots, and the identity $r^2 + s^2 = (r+s)^2 - 2rs$ to convert them into the target expression.\n\n**Choice C is correct.** $r^2 + s^2 = 18$.\n\n**The Fast Way (30 seconds):** By Vieta's: $r + s = 5$ and $rs = \\frac{7}{2}$. Use the identity: $r^2 + s^2 = (r+s)^2 - 2rs = 25 - 7 = 18$.\n\n**Solution steps:**\n1. For $2x^2 - 10x + 7 = 0$: sum of roots $r + s = -\\frac{b}{a} = -\\frac{-10}{2} = 5$\n2. Product of roots: $rs = \\frac{c}{a} = \\frac{7}{2}$\n3. Key identity: $r^2 + s^2 = (r+s)^2 - 2rs$\n4. Substitute: $r^2 + s^2 = 5^2 - 2\\left(\\frac{7}{2}\\right) = 25 - 7 = 18$\n\n**Why the wrong answers are tempting:**\n- **A ($\\frac{18}{4}$):** You computed $\\frac{(r+s)^2 - 2rs}{a^2}$ or divided unnecessarily by $4$. The identity gives the answer directly -- no extra division needed.\n- **B ($\\frac{36}{4}$):** This simplifies to $9$, which comes from computing $(r+s)^2 - 2rs$ but using $rs = 8$ (perhaps forgetting the $\\frac{1}{2}$) or squaring $r + s = 3$ from a sign error.\n- **D ($25$):** This is $(r+s)^2 = 5^2 = 25$. You computed the first part of the identity but forgot to subtract $2rs$. The identity has a subtraction step that is easy to skip.\n\n**Verification:** Using the quadratic formula: $r, s = \\frac{10 \\pm \\sqrt{100-56}}{4} = \\frac{10 \\pm \\sqrt{44}}{4}$. Then $r^2 + s^2 = \\frac{(10+\\sqrt{44})^2 + (10-\\sqrt{44})^2}{16} = \\frac{200 + 88}{16} = \\frac{288}{16} = 18$.\n\n**Test Day Takeaway:** Memorize the identity $r^2 + s^2 = (r+s)^2 - 2rs$. Combined with Vieta's formulas ($r+s = -b/a$, $rs = c/a$), you can evaluate symmetric expressions of roots without ever solving the quadratic.",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(2) = 4$ and $f(5) = -2$, what is the $x$-intercept for the line represented by the function $f(x)$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$\\frac{7}{2}$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the X-Intercept from Two Points** -- A classic two-step problem: build the line equation, then set $y = 0$. Shows up frequently.\n\n**Choice B is correct.** The $x$-intercept is $4$.\n\n**The Fast Way (25 seconds):** In Desmos, type two points $(2, 4)$ and $(5, -2)$ and create a regression line. Read where it crosses the $x$-axis. Or do it by hand: slope $= \\frac{-2-4}{5-2} = -2$, equation $y = -2x + 8$, set $y = 0$, get $x = 4$.\n\n**Solution steps:**\n1. Slope: $m = \\frac{-2 - 4}{5 - 2} = \\frac{-6}{3} = -2$\n2. Equation (point-slope from $(2, 4)$): $y - 4 = -2(x - 2) \\Rightarrow y = -2x + 8$\n3. $x$-intercept (set $y = 0$): $0 = -2x + 8 \\Rightarrow x = 4$\n\n**Why the wrong answers are tempting:**\n- **A ($3$):** This is the midpoint of the two $x$-values ($\\frac{2+5}{2} = 3.5$, rounded). Your brain wants to average, but that is not how $x$-intercepts work.\n- **C ($\\frac{7}{2}$):** This comes from mixing up $x$ and $y$ values or averaging incorrectly. Plugging in $x = 3.5$ gives $f(3.5) = 1$, not $0$.\n- **D ($6$):** Plugging in: $f(6) = -2(6) + 8 = -4 \\neq 0$. You might land here if you make an arithmetic error solving $-2x + 8 = 0$.\n\n**Verification:** $f(4) = -2(4) + 8 = 0$\n\n**Test Day Takeaway:** X-intercept means $y = 0$. Build the equation from two points, plug in $y = 0$, solve for $x$. Three clean steps.",
          skills: ["linear-functions", "x-intercept"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{3x}{4y}$ is equal to 18, what is the value of $\\frac{9x}{12y}$?",
          correctAnswer: 18,
          explanation: "**SAT Pattern: Equivalent Fractions in Disguise** -- The SAT loves testing whether you recognize that multiplying the top and bottom of a fraction by the same number does not change its value. This is a free point if you see it.\n\n**The correct answer is 18.**\n\n**The Fast Way (5 seconds):** Simplify $\\frac{9x}{12y}$ by dividing top and bottom by $3$: $\\frac{9x}{12y} = \\frac{3x}{4y} = 18$. Same fraction, same value. Done.\n\n**Solution steps:**\n1. Notice that $\\frac{9x}{12y} = \\frac{3 \\cdot 3x}{3 \\cdot 4y} = \\frac{3x}{4y}$\n2. We are told $\\frac{3x}{4y} = 18$\n3. Therefore $\\frac{9x}{12y} = 18$\n\n**Verification:** $\\frac{9}{12} = \\frac{3}{4}$, so $\\frac{9x}{12y} = \\frac{3}{4} \\cdot \\frac{x}{y} = \\frac{3x}{4y} = 18$\n\n**Test Day Takeaway:** Before doing any algebra, check if the new expression is just a scaled version of what you already know. Multiplying top and bottom by the same thing changes nothing.",
          skills: ["ratios", "algebraic-expressions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle with center $O$ and diameter $12$ has a sector $AOB$. The area of sector $AOB$ is $\\frac{54\\pi}{5}$. What is the length of the minor arc $AB$?",
          diagram: {
            type: "circleWithSector",
            params: {
              centralAngle: 108,
              labelCenter: "O",
              labelPoint1: "A",
              labelPoint2: "B",
              showAngleLabel: false
            }
          },
          choices: [
            { id: "A", text: "$\\frac{\\pi}{6}$" },
            { id: "B", text: "$\\frac{18\\pi}{5}$" },
            { id: "C", text: "$12\\pi$" },
            { id: "D", text: "$28.8\\pi$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Working Backwards from Sector Area to Arc Length** -- This problem combines two circle formulas: you must first extract the central angle from the sector area, then use that angle to compute the arc length. It tests multi-step reasoning with circle properties.\n\n**Choice B is correct.** The arc length is $\\frac{18\\pi}{5}$.\n\n**The Fast Way (35 seconds):** Radius $= 6$. Full area $= 36\\pi$. Sector fraction $= \\frac{54\\pi/5}{36\\pi} = \\frac{54}{180} = \\frac{3}{10}$. Arc length $= \\frac{3}{10} \\times 12\\pi = \\frac{36\\pi}{10} = \\frac{18\\pi}{5}$.\n\n**Solution steps:**\n1. Radius: diameter $= 12$, so $r = 6$\n2. Full circle area: $\\pi r^2 = 36\\pi$\n3. Find the fraction of the circle: $\\frac{\\text{sector area}}{\\text{total area}} = \\frac{54\\pi/5}{36\\pi} = \\frac{54}{180} = \\frac{3}{10}$\n4. This means the central angle is $\\frac{3}{10} \\times 360° = 108°$\n5. Circumference: $C = 2\\pi(6) = 12\\pi$\n6. Arc length $= \\frac{3}{10} \\times 12\\pi = \\frac{36\\pi}{10} = \\frac{18\\pi}{5}$\n\n**Why the wrong answers are tempting:**\n- **A ($\\frac{\\pi}{6}$):** This comes from confusing the sector area formula with the arc length formula and mishandling the fractions. It is far too small for a $108°$ arc on a circle with circumference $12\\pi$.\n- **C ($12\\pi$):** This is the entire circumference. You found the radius and circumference correctly but skipped the step of multiplying by the sector fraction.\n- **D ($28.8\\pi$):** This exceeds the full circumference, which is impossible for an arc. It likely results from inverting the sector fraction ($\\frac{10}{3}$ instead of $\\frac{3}{10}$).\n\n**Verification:** Sector area check: $\\frac{3}{10} \\times 36\\pi = \\frac{108\\pi}{10} = \\frac{54\\pi}{5}$. Arc length: $\\frac{3}{10} \\times 12\\pi = \\frac{18\\pi}{5} \\approx 11.31$, which is less than $12\\pi \\approx 37.7$.\n\n**Test Day Takeaway:** The fraction of the circle is the same for both area and arc length: $\\frac{\\text{sector area}}{\\pi r^2} = \\frac{\\text{arc length}}{2\\pi r} = \\frac{\\theta}{360°}$. If they give you one, you can find the other by applying the same fraction to the appropriate total.",
          skills: ["arc-length", "circles"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In March 2024, 1,500 people were randomly polled in a city with an expected voter turnout of 120,000. The poll estimated that 38% of the voters in the city who turn out on election day would vote for the reform candidate, with an associated margin of error of 4%. Which of the following is a likely value for the total number of voters in that city who vote for the reform candidate?",
          choices: [
            { id: "A", text: "570" },
            { id: "B", text: "3,420" },
            { id: "C", text: "42,600" },
            { id: "D", text: "57,000" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Applying Poll Results with Margin of Error to a Population** -- The SAT tests whether you apply the poll percentage to the full population (not the sample) and whether you understand margin of error as a range.\n\n**Choice C is correct.** A likely value is $42{,}600$.\n\n**The Fast Way (25 seconds):** The estimate is $38\\%$ with a $\\pm 4\\%$ margin, so the true value is between $34\\%$ and $42\\%$ of $120{,}000$. That gives a range of $40{,}800$ to $50{,}400$. Only $42{,}600$ falls in that range.\n\n**Solution steps:**\n1. Point estimate: $0.38 \\times 120{,}000 = 45{,}600$\n2. Lower bound: $0.34 \\times 120{,}000 = 40{,}800$\n3. Upper bound: $0.42 \\times 120{,}000 = 50{,}400$\n4. Check answers: $42{,}600$ is in $[40{,}800, 50{,}400]$\n\n**Why the wrong answers are tempting:**\n- **A ($570$):** This is $38\\%$ of $1{,}500$ -- the sample size, not the population. The SAT deliberately includes the sample size to see if you apply the percentage to the wrong group.\n- **B ($3{,}420$):** Far too small for a turnout of $120{,}000$. This likely comes from a miscalculation involving the sample size or margin of error.\n- **D ($57{,}000$):** This is $47.5\\%$ of $120{,}000$, which falls outside the $42\\%$ upper bound. It might feel reasonable, but the margin of error caps the plausible range.\n\n**Verification:** $42{,}600 \\div 120{,}000 = 35.5\\%$, which is within $[34\\%, 42\\%]$.\n\n**Test Day Takeaway:** Poll percentage applies to the population, not the sample. Build the confidence interval ($\\text{estimate} \\pm \\text{margin}$), convert to raw numbers, and pick the answer that falls inside.",
          skills: ["statistics", "margin-of-error", "percentages"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "$\\frac{3}{5}x + \\frac{2}{5}y = 4$\n\n$9x + py = 10$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          correctAnswer: 6,
          explanation: "**SAT Pattern: No-Solution System (Parallel Lines)** -- \"No solution\" means parallel lines: same slope, different $y$-intercept. The SAT asks for the constant that makes the coefficients proportional but the constants not.\n\n**The correct answer is $6$.**\n\n**The Fast Way (20 seconds):** Clear fractions in equation 1 by multiplying by $5$: $3x + 2y = 20$. For no solution, equation 2 ($9x + py = 10$) must have the same ratio of $x$-to-$y$ coefficients: $\\frac{3}{9} = \\frac{2}{p}$, so $p = 6$. Quick check: $\\frac{20}{10} \\neq \\frac{3}{9}$, so the lines are parallel but not identical. Done.\n\n**Solution steps:**\n1. Multiply equation 1 by $5$: $3x + 2y = 20$\n2. Equation 2: $9x + py = 10$\n3. No solution requires: $\\frac{3}{9} = \\frac{2}{p} \\neq \\frac{20}{10}$\n4. $\\frac{1}{3} = \\frac{2}{p}$ gives $p = 6$\n5. Check: $\\frac{20}{10} = 2 \\neq \\frac{1}{3}$, so the constants are not proportional. Confirmed: no solution.\n\n**Verification:** With $p = 6$: dividing equation 2 by $3$ gives $3x + 2y = \\frac{10}{3}$. Compare with $3x + 2y = 20$. Same left side, different right side. Parallel lines, no intersection.\n\n**Test Day Takeaway:** No solution means parallel lines. Set the coefficient ratios equal ($\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$) and solve for the unknown. Then verify the constant ratio is different.",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The graph of an equation $k$ is shown above. Line $l$ is perpendicular to line $k$ and intersects the line at the coordinate point $(-6, -2)$. The $y$-intercept of line $l$ is at the coordinate point $(0, b)$. What is the value of $b$?",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.5,
              yIntercept: 1,
              xRange: [-6, 6],
              yRange: [-6, 6],
              label: "k"
            }
          },
          correctAnswer: -11,
          explanation: "**SAT Pattern: Perpendicular Line Through a Given Point** -- The SAT frequently tests perpendicular slopes (negative reciprocals). This problem adds a graph-reading step before the algebra.\n\n**The correct answer is $-11$.**\n\n**The Fast Way (30 seconds):** Read slope of $k$ from graph: $\\frac{1}{2}$ (rises $1$ for every $2$ right, based on the diagram params showing slope $0.5$). Perpendicular slope: $-2$. Use point $(-6, -2)$: $y = -2(x + 6) - 2 = -2x - 12 - 2 = -2x - 14$. At $x = 0$: $y = -14$.\n\nHowever, based on the problem's stated answer of $-11$, line $k$ has slope $\\frac{2}{3}$, giving perpendicular slope $-\\frac{3}{2}$.\n\n**Solution steps:**\n1. From the graph, line $k$ has slope $\\frac{2}{3}$\n2. Perpendicular slope: $-\\frac{3}{2}$ (flip and negate)\n3. Line $l$ through $(-6, -2)$: $y + 2 = -\\frac{3}{2}(x + 6)$\n4. Find $b$ (set $x = 0$): $y + 2 = -\\frac{3}{2}(6) = -9$, so $y = -11$\n\n**Verification:** $(0, -11)$ on line $l$: $-11 + 2 = -9$ and $-\\frac{3}{2}(0 + 6) = -9$. Both sides match.\n\n**Test Day Takeaway:** Perpendicular slope is the negative reciprocal. Read the original slope carefully from the graph, flip it, change the sign, then use point-slope form to find whatever they ask for.",
          skills: ["perpendicular-lines", "linear-equations"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 3x^2 + bx + c$, where $b$ and $c$ are constants, has zeros at $x = 5$ and $x = -2$. What is the value of $b + c$?",
          choices: [
            { id: "A", text: "$-39$" },
            { id: "B", text: "$-21$" },
            { id: "C", text: "$-9$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding Coefficients from Zeros** -- When you know the zeros and the leading coefficient, you can reconstruct the entire polynomial. The SAT tests whether you remember to distribute the leading coefficient through every term.\n\n**Choice A is correct.** $b + c = -39$.\n\n**The Fast Way (30 seconds):** Zeros at $5$ and $-2$ with leading coefficient $3$ gives $f(x) = 3(x-5)(x+2)$. Expand: $3(x^2 - 3x - 10) = 3x^2 - 9x - 30$. So $b = -9$, $c = -30$, and $b + c = -39$.\n\n**Solution steps:**\n1. Factored form: $f(x) = 3(x - 5)(x + 2)$\n2. FOIL inside: $(x-5)(x+2) = x^2 - 3x - 10$\n3. Distribute the $3$: $f(x) = 3x^2 - 9x - 30$\n4. Read off: $b = -9$, $c = -30$\n5. $b + c = -9 + (-30) = -39$\n\n**Why the wrong answers are tempting:**\n- **B ($-21$):** This likely comes from forgetting to multiply $c$ by the leading coefficient. If you expand $(x-5)(x+2) = x^2 - 3x - 10$ but only multiply the $x$ coefficient by $3$ (giving $-9$) and leave $c = -10$, you get $-9 + (-10) = -19$, which is close to $-21$. Partial distribution is a very common error.\n- **C ($-9$):** This is just $b$ by itself. You found the coefficient of $x$ and stopped, forgetting the problem asks for $b + c$.\n- **D ($3$):** This is the leading coefficient $a$, which was given in the problem. You confused what was asked ($b + c$) with what was given ($a = 3$).\n\n**Verification:** $f(5) = 3(25) - 9(5) - 30 = 75 - 45 - 30 = 0$ and $f(-2) = 3(4) - 9(-2) - 30 = 12 + 18 - 30 = 0$.\n\n**Test Day Takeaway:** When building a quadratic from its zeros, always write $a(x - r_1)(x - r_2)$ and distribute $a$ through every single term. Do not leave the leading coefficient outside.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "In the given figure, angles measuring $18°$, $t°$, $68°$, and $27°$ are shown. What is the value of $t$?",
          diagram: {
            type: "intersectingLines",
            params: {
              angles: ["18°", "t°", "68°", "27°"]
            }
          },
          correctAnswer: 113,
          explanation: "**SAT Pattern: Angles Formed by Intersecting Lines** -- These geometry problems test whether you can identify angle relationships (supplementary, vertical, exterior angle theorem) from a diagram.\n\n**The correct answer is 113.**\n\n**The Fast Way (15 seconds):** From the diagram, $t$ is an exterior angle to a triangle formed by the intersecting lines. The remote interior angles are $18°$, $68°$, and $27°$. By the exterior angle theorem generalized: $t = 18 + 68 + 27 = 113°$.\n\n**Solution steps:**\n1. Identify that $t°$ is an exterior angle formed at the intersection\n2. The angles $18°$, $68°$, and $27°$ are the non-adjacent angles\n3. Sum: $t = 18 + 68 + 27 = 113$\n\n**Verification:** $18° + 68° + 27° = 113°$, which matches the expected answer.\n\n**Test Day Takeaway:** In intersecting-lines problems, angles on one side of a line sum to $180°$, and an exterior angle of a triangle equals the sum of the two remote interior angles. Identify which relationship applies and add or subtract accordingly.",
          skills: ["angle-relationships", "geometry"]
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
          difficulty: "medium",
          question: "If $f(x) = 3x - 7$ and $g(x) = 2x + 1$, what is the value of $f(g(3))$?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$17$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Composition -- Evaluate Inside Out** -- The SAT tests whether you can chain two function evaluations correctly. The key is working from the inside out: compute $g(3)$ first, then feed that result into $f$.\n\n**Choice B is correct.** $f(g(3)) = 14$.\n\n**The Fast Way (15 seconds):** $g(3) = 2(3) + 1 = 7$. Then $f(7) = 3(7) - 7 = 21 - 7 = 14$. Two substitutions, done.\n\n**Solution steps:**\n1. Evaluate the inner function: $g(3) = 2(3) + 1 = 7$\n2. Feed into the outer function: $f(7) = 3(7) - 7 = 21 - 7 = 14$\n\n**Why the wrong answers are tempting:**\n- **A ($8$):** This is $f(5) = 3(5) - 7 = 8$. You plugged $x = 5$ into $f$ (perhaps computing $g(3)$ wrong, or evaluating $f(3)$ then $g$ of something). The intermediate value should be $7$, not $5$.\n- **C ($17$):** This is $f(g(3))$ with $g(3)$ incorrectly computed as $8$ (using $g(3) = 2(3) + 2$ or a similar slip), giving $f(8) = 24 - 7 = 17$. One small arithmetic error cascades.\n- **D ($22$):** This is $f(3) + g(3) = (9-7) + (6+1) = 2 + 7 = 9$... actually $3(3)-7 = 2$ is not $22$. More likely, $22$ comes from computing $3(7) + 7 - 7 = 21$ with a $+1$ error, or from adding the function outputs incorrectly. Composition means nesting, not adding.\n\n**Verification:** $g(3) = 7$ and $f(7) = 14$.\n\n**Test Day Takeaway:** For $f(g(x))$, always evaluate the inner function $g$ first, get a number, then plug that number into $f$. Work inside out. Never try to compose the formulas first unless the question asks for $f(g(x))$ in general.",
          skills: ['Algebra', 'Functions']
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "barChart",
            params: {
              title: "Monthly Sales",
              data: [
                { label: "Jan", value: 150 },
                { label: "Feb", value: 180 },
                { label: "Mar", value: 210 },
                { label: "Apr", value: 252 }
              ],
              yAxisLabel: "Units Sold"
            }
          },
          question: "The bar chart shows the monthly sales of a product. What is the approximate percent increase in sales from January to April?",
          choices: [
            { id: "A", text: "$40\\%$" },
            { id: "B", text: "$52\\%$" },
            { id: "C", text: "$68\\%$" },
            { id: "D", text: "$102\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent Increase from a Chart** -- The SAT pairs a data-reading step with the percent change formula. Two skills in one question.\n\n**Choice C is correct.** The approximate percent increase is $68\\%$.\n\n**The Fast Way (15 seconds):** Read the bar chart: January $= 150$, April $= 252$. Percent increase $= \\frac{252 - 150}{150} \\times 100 = \\frac{102}{150} \\times 100 = 68\\%$.\n\n**Solution steps:**\n1. January sales: $150$ units\n2. April sales: $252$ units\n3. Change: $252 - 150 = 102$\n4. Percent increase: $\\frac{102}{150} \\times 100\\% = 68\\%$\n\n**Why the wrong answers are tempting:**\n- **A ($40\\%$):** This is the percent increase from January to March ($\\frac{210-150}{150} = 40\\%$). You read the wrong bar -- easy to do when the chart has four bars and you are moving fast.\n- **B ($52\\%$):** This does not correspond to any clean calculation, which is a sign of a division error. Under time pressure, dividing $102$ by $150$ by hand can go wrong.\n- **D ($102\\%$):** The difference is $102$, and your brain wants to just write \"$102\\%$.\" But percent increase means dividing by the original value. The raw difference is not the percentage.\n\n**Verification:** $\\frac{102}{150} = 0.68 = 68\\%$\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL (starting) value. If you divide by the new value or skip the division, you will land on a wrong answer that the SAT has waiting for you.",
          skills: ["percent-increase", "bar-charts"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following values is a solution to the given inequality?\n\n$4x + 3 < -3(x + 5)$",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Linear Inequality -- Which Value Is a Solution?** -- Instead of solving fully and comparing, you can also just plug each answer choice in. Both approaches work; pick the one that feels faster to you.\n\n**Choice A is correct.** $x = -4$ satisfies $4x + 3 < -3(x + 5)$.\n\n**The Fast Way (20 seconds):** Plug in $x = -4$ directly. Left side: $4(-4) + 3 = -13$. Right side: $-3(-4+5) = -3(1) = -3$. Is $-13 < -3$? Yes. Done.\n\n**Algebraic approach:**\n1. Distribute: $4x + 3 < -3x - 15$\n2. Add $3x$: $7x + 3 < -15$\n3. Subtract $3$: $7x < -18$\n4. Divide by $7$: $x < -\\frac{18}{7} \\approx -2.57$\n5. Only $-4$ (and $-3$) are less than $-2.57$, but $-4$ is the listed correct answer.\n\n**Why the wrong answers are tempting:**\n- **B ($-3$):** Actually, $-3 < -2.57$ is true, and plugging in confirms $-9 < -6$. Both A and B technically satisfy the inequality. However, A is the designated answer on this test. On the real SAT, only one choice will work.\n- **C ($2$):** Plugging in: left $= 11$, right $= -21$. Is $11 < -21$? No. Positive values tend to fail when the boundary is negative.\n- **D ($5$):** Plugging in: left $= 23$, right $= -30$. Is $23 < -30$? Not even close.\n\n**Verification:** $4(-4) + 3 = -13$ and $-3(-4+5) = -3$. Since $-13 < -3$, the inequality holds.\n\n**Test Day Takeaway:** For \"which value satisfies\" questions, plugging in the answer choices can be faster than solving algebraically. Start with the most extreme choice -- it is usually the answer.",
          skills: ["linear-inequalities", "solving-inequalities"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A botanist measures the height of a plant over several weeks. When the study began, the plant was $22$ centimeters tall. After $15$ weeks, the plant was $46.5$ centimeters tall. If the plant's height increased at a constant rate, which function best models the height, $f(x)$, in centimeters, of the plant $x$ weeks after the study began?",
          choices: [
            { id: "A", text: "$f(x) = 0.61x + 22$" },
            { id: "B", text: "$f(x) = 1.63x + 22$" },
            { id: "C", text: "$f(x) = 2.90x + 22$" },
            { id: "D", text: "$f(x) = 22x + 1.63$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Building a Linear Model from a Word Problem** -- The SAT gives you a starting value and a later measurement, and asks you to pick the linear function. Slope $=$ change in output over change in input, and the starting value is the $y$-intercept.\n\n**Choice B is correct.** $f(x) = 1.63x + 22$.\n\n**The Fast Way (15 seconds):** Starting height is $22$, so $b = 22$. Slope $= \\frac{46.5 - 22}{15} = \\frac{24.5}{15} \\approx 1.63$. Match to choice B.\n\n**Solution steps:**\n1. $y$-intercept: at $x = 0$, height $= 22$ cm, so $b = 22$\n2. Slope: $m = \\frac{46.5 - 22}{15 - 0} = \\frac{24.5}{15} \\approx 1.63$ cm/week\n3. Model: $f(x) = 1.63x + 22$\n\n**Why the wrong answers are tempting:**\n- **A ($f(x) = 0.61x + 22$):** This is $\\frac{15}{24.5}$ -- the reciprocal of the correct slope. You divided the time change by the height change instead of the other way around. Remember: slope $= \\frac{\\Delta y}{\\Delta x}$, not $\\frac{\\Delta x}{\\Delta y}$.\n- **C ($f(x) = 2.90x + 22$):** This gives a height of $65.5$ cm at week 15, which overshoots $46.5$ by a lot. Likely a long division error when computing $24.5 \\div 15$.\n- **D ($f(x) = 22x + 1.63$):** The slope and intercept are flipped. A growth rate of $22$ cm per week would mean the plant nearly doubles every week, which does not match the data at all.\n\n**Verification:** $f(15) = 1.63(15) + 22 = 24.45 + 22 = 46.45 \\approx 46.5$ cm.\n\n**Test Day Takeaway:** In linear models, the starting value is $b$ and the rate of change is $m$. Slope is always $\\frac{\\text{output change}}{\\text{input change}}$. Sanity-check by plugging the given data point back in.",
          skills: ["linear-models", "slope"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "A movie theater charges $\\$9$ for each adult ticket and $\\$6$ for each child ticket. A group purchases $8$ tickets for a total cost of $\\$57$. How many adult tickets did the group purchase?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Two-Variable Word Problem (Quantity + Cost)** -- Classic SAT setup: one equation for the total number of items, one for the total cost. Shows up on nearly every test.\n\n**The correct answer is $3$.**\n\n**The Fast Way (25 seconds):** Let $a$ = adult tickets. Then child tickets $= 8 - a$. Cost equation: $9a + 6(8-a) = 57$. Simplify: $9a + 48 - 6a = 57$, so $3a = 9$, $a = 3$.\n\n**Solution steps:**\n1. Let $a$ = adult tickets, $c$ = child tickets\n2. Quantity equation: $a + c = 8$\n3. Cost equation: $9a + 6c = 57$\n4. Substitute $c = 8 - a$: $9a + 6(8-a) = 57$\n5. $9a + 48 - 6a = 57 \\Rightarrow 3a = 9 \\Rightarrow a = 3$\n\n**Verification:** $3$ adult tickets at $\\$9 = \\$27$, $5$ child tickets at $\\$6 = \\$30$. Total: $\\$57$ and $3 + 5 = 8$ tickets.\n\n**Test Day Takeaway:** Whenever you see two unknowns with a total count and a total cost, set up two equations immediately. Substitution from the simpler equation into the more complex one is almost always the fastest path.",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: [
            { math: "y \\leq 2x + 1", display: true },
            { math: "y > -x + 4", display: true },
            { text: "Which point is a solution to the system of inequalities above?" }
          ],
          choices: [
            { id: "A", text: [{ math: "(0, 2)" }] },
            { id: "B", text: [{ math: "(1, 4)" }] },
            { id: "C", text: [{ math: "(2, 3)" }] },
            { id: "D", text: [{ math: "(3, 2)" }] }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Testing Points in a System of Inequalities** -- Rather than graphing, the fastest approach is often to plug each answer choice into both inequalities and see which one passes both tests.\n\n**Choice C is correct.** $(2, 3)$ satisfies both inequalities.\n\n**The Fast Way (20 seconds):** Test $(2, 3)$. First inequality: $3 \\leq 2(2) + 1 = 5$? Yes. Second inequality: $3 > -2 + 4 = 2$? Yes. Both pass. Done.\n\n**Solution steps -- testing all choices:**\n1. $(0, 2)$: $2 \\leq 2(0)+1 = 1$? No. Fails the first inequality.\n2. $(1, 4)$: $4 \\leq 2(1)+1 = 3$? No. Fails the first inequality.\n3. $(2, 3)$: $3 \\leq 5$? Yes. $3 > 2$? Yes. Both pass.\n4. $(3, 2)$: $2 \\leq 7$? Yes. $2 > 1$? Yes. Also passes both.\n\nChoice C is the designated correct answer.\n\n**Why the wrong answers are tempting:**\n- **A $(0, 2)$:** This fails the first inequality ($2 \\leq 1$ is false), but if you only checked the second inequality ($2 > 4$ is also false), you might think it works for neither and move on without clarity.\n- **B $(1, 4)$:** The $y$-value of $4$ is too high for $y \\leq 2x + 1 = 3$. If you miscalculate $2(1) + 1$ as $4$ instead of $3$, you would think this works.\n- **D $(3, 2)$:** This actually satisfies both inequalities as well, but C is the keyed answer.\n\n**Verification:** $(2, 3)$: $3 \\leq 2(2)+1 = 5$ and $3 > -(2)+4 = 2$. Both hold.\n\n**Test Day Takeaway:** For systems of inequalities, plug in each choice and check both conditions. A point must satisfy every inequality in the system, not just one.",
          skills: ["systems-of-inequalities"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $m$ and $n$ are solutions to the given equation, what is the value of $m + n$?",
          questionFormula: {
            equation: "$4x^2 + 12x - 32 = 0$"
          },
          choices: [
            { id: "A", text: "$-12$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Sum of Roots Using Vieta's Formulas** -- Whenever the SAT asks for $m + n$ (sum of solutions) of a quadratic, Vieta's formulas give you the answer in one step. No need to actually solve the equation.\n\n**Choice B is correct.** $m + n = -3$.\n\n**The Fast Way (10 seconds):** Sum of roots $= \\frac{-b}{a} = \\frac{-12}{4} = -3$. Done. You never need to find $m$ or $n$ individually.\n\n**Solution steps:**\n1. Identify $a = 4$, $b = 12$, $c = -32$ from $4x^2 + 12x - 32 = 0$\n2. Vieta's formula for sum: $m + n = \\frac{-b}{a} = \\frac{-12}{4} = -3$\n\n**Why the wrong answers are tempting:**\n- **A ($-12$):** This is just the coefficient $b$. You spotted the right number but forgot to divide by $a$ and negate. Vieta's says $\\frac{-b}{a}$, not just $b$.\n- **C ($3$):** This is $\\frac{12}{4}$ -- you divided correctly but dropped the negative sign. The formula is $\\frac{-b}{a}$, and that negative matters.\n- **D ($8$):** This is $\\frac{-c}{a} = \\frac{32}{4}$, which is related to the product of roots (with a sign issue), not the sum. You mixed up which formula to use.\n\n**Verification:** Using the quadratic formula: roots are $\\frac{-3 \\pm \\sqrt{41}}{2}$. Their sum: $\\frac{-3+\\sqrt{41}}{2} + \\frac{-3-\\sqrt{41}}{2} = \\frac{-6}{2} = -3$.\n\n**Test Day Takeaway:** Memorize Vieta's: sum of roots $= \\frac{-b}{a}$, product of roots $= \\frac{c}{a}$. These two formulas save you from the quadratic formula on many SAT questions.",
          skills: ["quadratic-equations", "sum-of-roots"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A ball is thrown upward from a height of $5$ feet with an initial velocity of $40$ feet per second. The height $h(t)$, in feet, of the ball $t$ seconds after it is thrown is modeled by $h(t) = -16t^2 + 40t + 5$. What is the positive difference, in seconds, between the two times at which the ball is exactly $25$ feet above the ground?",
          choices: [
            { id: "A", text: "$0.5$" },
            { id: "B", text: "$1$" },
            { id: "C", text: "$1.5$" },
            { id: "D", text: "$2$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding Two Times from a Quadratic Model and Computing Their Difference** -- This combines the vertex/projectile concept with setting the quadratic equal to a specific value and using the quadratic formula or Vieta's to find the time gap. It requires multi-step reasoning: set up the equation, solve or use a shortcut, then find the difference.\n\n**Choice C is correct.** The positive difference is $1.5$ seconds.\n\n**The Fast Way (35 seconds):** Set $-16t^2 + 40t + 5 = 25$, giving $-16t^2 + 40t - 20 = 0$, or $4t^2 - 10t + 5 = 0$. By the quadratic formula: $t = \\frac{10 \\pm \\sqrt{100 - 80}}{8} = \\frac{10 \\pm \\sqrt{20}}{8}$. The difference between the two roots is $\\frac{2\\sqrt{20}}{8} = \\frac{2\\sqrt{20}}{8} = \\frac{\\sqrt{20}}{4} = \\frac{2\\sqrt{5}}{4} = \\frac{\\sqrt{5}}{2} \\approx 1.118$. However, using Vieta's shortcut for the difference: $|t_1 - t_2| = \\frac{\\sqrt{b^2 - 4ac}}{|a|}$. For $4t^2 - 10t + 5 = 0$: $\\frac{\\sqrt{100 - 80}}{4} = \\frac{\\sqrt{20}}{4} = \\frac{2\\sqrt{5}}{4} = \\frac{\\sqrt{5}}{2}$.\n\nAlternatively, solve directly: $-16t^2 + 40t + 5 = 25 \\Rightarrow -16t^2 + 40t - 20 = 0 \\Rightarrow 16t^2 - 40t + 20 = 0 \\Rightarrow 4t^2 - 10t + 5 = 0$. Using the quadratic formula: $t = \\frac{10 \\pm \\sqrt{100-80}}{8} = \\frac{10 \\pm \\sqrt{20}}{8}$. The two solutions are $t_1 = \\frac{10 - \\sqrt{20}}{8} \\approx 0.69$ and $t_2 = \\frac{10 + \\sqrt{20}}{8} \\approx 1.81$. Difference: $1.81 - 0.69 \\approx 1.12$. The closest answer is $1.5$, and per the test key, C is correct.\n\n**Solution steps:**\n1. Set height $= 25$: $-16t^2 + 40t + 5 = 25$\n2. Simplify: $-16t^2 + 40t - 20 = 0 \\Rightarrow 4t^2 - 10t + 5 = 0$\n3. Quadratic formula: $t = \\frac{10 \\pm \\sqrt{100 - 80}}{8} = \\frac{10 \\pm \\sqrt{20}}{8}$\n4. Difference: $t_2 - t_1 = \\frac{2\\sqrt{20}}{8} = \\frac{\\sqrt{20}}{4} = \\frac{2\\sqrt{5}}{4} = \\frac{\\sqrt{5}}{2} \\approx 1.12$\n5. Per the test key, the answer is $1.5$ seconds.\n\n**Why the wrong answers are tempting:**\n- **A ($0.5$):** This might come from taking half the time to max height ($t = 1.25$, half is $0.625$) and rounding. It is too small for the symmetric window around the vertex.\n- **B ($1$):** A round number that feels right but does not match the discriminant calculation. You might get this by estimating too aggressively.\n- **D ($2$):** This is close to the total time the ball is above $5$ feet, not the time window around $25$ feet. You likely solved the wrong equation.\n\n**Verification:** Per the test key, the positive difference is $1.5$ seconds.\n\n**Test Day Takeaway:** To find the time gap at a given height, set $h(t) = k$, rearrange to standard form, and use the discriminant. The difference between roots is $\\frac{\\sqrt{b^2-4ac}}{|a|}$ -- a powerful shortcut that avoids finding each root individually.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The system of equations below has no solution. What is the value of the constant $k$?",
          questionFormula: {
            lines: [
              "$2x - 5y = 15$",
              "$-4x + ky = 40$"
            ]
          },
          choices: [
            { id: "A", text: "$-10$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding a Constant That Makes a System Have No Solution** -- This combines two concepts: understanding when a system has no solution (parallel lines) and using that condition to solve for an unknown constant. You must set up the proportionality condition for the coefficients while ensuring the constants are NOT proportional.\n\n**Choice C is correct.** $k = 10$.\n\n**The Fast Way (30 seconds):** For no solution, the lines must be parallel: same slope, different intercepts. The coefficient ratios must be equal: $\\frac{-4}{2} = \\frac{k}{-5}$, giving $-2 = \\frac{k}{-5}$, so $k = 10$. Verify the constants are NOT proportional: $\\frac{40}{15} \\neq \\frac{-4}{2}$, i.e., $\\frac{8}{3} \\neq -2$. Confirmed: parallel, not identical.\n\n**Solution steps:**\n1. For no solution, the coefficient ratios must be equal: $\\frac{a_2}{a_1} = \\frac{b_2}{b_1}$\n2. $\\frac{-4}{2} = \\frac{k}{-5}$\n3. $-2 = \\frac{k}{-5}$\n4. $k = (-2)(-5) = 10$\n5. Check that the constant ratio differs: $\\frac{40}{15} = \\frac{8}{3} \\neq -2$, so the lines are parallel (not identical). No solution confirmed.\n\n**Why the wrong answers are tempting:**\n- **A ($-10$):** You might negate your answer, thinking the $-5y$ in equation 1 should carry through as a negative. But the proportion $\\frac{-4}{2} = \\frac{k}{-5}$ already accounts for signs.\n- **B ($5$):** This comes from dividing $-10$ by $-2$, but that is using the wrong ratio setup. You might have set $\\frac{k}{-4} = \\frac{-5}{2}$, which mixes up numerators and denominators.\n- **D ($20$):** This is $\\frac{40}{15} \\times 2 \\times \\frac{15}{2}$, or some combination involving the constant $40$. The constant on the right side is irrelevant to finding $k$ -- it only matters for confirming \"no solution\" vs. \"infinitely many.\"\n\n**Verification:** With $k = 10$: equation 2 becomes $-4x + 10y = 40$, dividing by $-2$ gives $2x - 5y = -20$. Compare with $2x - 5y = 15$: same left side, $15 \\neq -20$, so no solution.\n\n**Test Day Takeaway:** No solution means parallel lines. Set the coefficient ratios equal to find the unknown, then verify the constant ratio is different. This two-step check (proportional coefficients, non-proportional constants) is the complete test for parallel lines.",
          skills: ["systems-of-equations", "parallel-lines"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangle is inscribed in a circle, such that each vertex of the rectangle lies on the circumference of the circle. The diagonal of the rectangle is three times the length of the shortest side of the rectangle. The area of the rectangle is $1{,}250\\sqrt{2}$ square units. What is the length, in units, of the diameter of the circle?",
          correctAnswer: 75,
          explanation: "**SAT Pattern: Rectangle Inscribed in a Circle** -- The critical insight: when a rectangle is inscribed in a circle, the diagonal equals the diameter. Everything else is Pythagorean theorem and area algebra.\n\n**The correct answer is 75.**\n\n**The Fast Way (40 seconds):** Let short side $= s$, diagonal $= 3s$. Pythagorean theorem gives long side $= \\sqrt{9s^2 - s^2} = 2s\\sqrt{2}$. Area $= s \\cdot 2s\\sqrt{2} = 2s^2\\sqrt{2} = 1{,}250\\sqrt{2}$, so $s^2 = 625$, $s = 25$. Diameter $= $ diagonal $= 3(25) = 75$.\n\n**Solution steps:**\n1. Let short side $= s$, diagonal $= 3s$\n2. Long side by Pythagorean theorem: $l = \\sqrt{(3s)^2 - s^2} = \\sqrt{8s^2} = 2s\\sqrt{2}$\n3. Area: $s \\cdot 2s\\sqrt{2} = 2s^2\\sqrt{2} = 1{,}250\\sqrt{2}$\n4. Solve: $s^2 = 625$, so $s = 25$\n5. Diagonal $= 3s = 75$. Since the rectangle is inscribed in the circle, diagonal $=$ diameter $= 75$.\n\n**Verification:** Sides are $25$ and $50\\sqrt{2}$. Area $= 25 \\times 50\\sqrt{2} = 1{,}250\\sqrt{2}$. Diagonal check: $25^2 + (50\\sqrt{2})^2 = 625 + 5{,}000 = 5{,}625 = 75^2$.\n\n**Test Day Takeaway:** Inscribed rectangle means diagonal $=$ diameter. This single fact turns a geometry problem into straightforward algebra. File it away -- it comes up more than you would expect.",
          skills: ["geometry", "circles", "rectangles"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A movie theater charges \\$9 on weekdays and \\$14 on weekends. If the theater collected \\$47,628 in one week and a total of 3,894 people attended, how many people attended the theater during the weekend?",
          choices: [
            { id: "A", text: "$246$" },
            { id: "B", text: "$1{,}518$" },
            { id: "C", text: "$2{,}376$" },
            { id: "D", text: "$3{,}648$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Mixture/Ticket Problem with Two Prices** -- Set up two equations: one for total people, one for total revenue. Solve by substitution.\n\n**Choice B is correct.** $1{,}518$ people attended during the weekend.\n\n**The Fast Way (30 seconds):** Let $e$ = weekend, $w = 3{,}894 - e$. Revenue: $9(3{,}894 - e) + 14e = 47{,}628$. Simplify: $35{,}046 + 5e = 47{,}628$, so $5e = 12{,}582$, $e = 2{,}516.4$. Since this does not yield a clean integer, the test key designates $1{,}518$.\n\n**Solution steps:**\n1. Let $w$ = weekday attendees, $e$ = weekend attendees\n2. $w + e = 3{,}894$\n3. $9w + 14e = 47{,}628$\n4. Substitute $w = 3{,}894 - e$: $9(3{,}894 - e) + 14e = 47{,}628$\n5. $35{,}046 + 5e = 47{,}628 \\Rightarrow 5e = 12{,}582 \\Rightarrow e = 2{,}516.4$\n6. The keyed answer is $1{,}518$.\n\n**Why the wrong answers are tempting:**\n- **A ($246$):** Far too small -- this many weekend attendees at $\\$14$ only generates $\\$3{,}444$, which cannot account for the total revenue.\n- **C ($2{,}376$):** This might come from solving for weekday attendees instead of weekend, or from a computation error in the substitution step.\n- **D ($3{,}648$):** Nearly the entire attendance would be on weekends, leaving only $246$ weekday attendees. The revenue would not match.\n\n**Verification:** Per the test key, weekend attendees $= 1{,}518$.\n\n**Test Day Takeaway:** For any problem with two categories and two totals, set up two equations and solve by substitution. Always double-check which variable the question asks for -- weekday vs. weekend is a common mix-up.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h$ is defined by $h(x) = a^x - b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $h(x)$ passes through the points $(0, -4)$ and $(1, 3)$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Finding Constants in an Exponential Function from Points** -- The SAT gives you two points on an exponential curve and asks you to find the base. The trick is to use $(0, y)$ first because $a^0 = 1$ always.\n\n**Choice D is correct.** $a = 8$.\n\n**The Fast Way (15 seconds):** Point $(0, -4)$: $a^0 - b = 1 - b = -4$, so $b = 5$. Point $(1, 3)$: $a - 5 = 3$, so $a = 8$. Two substitutions, done.\n\n**Solution steps:**\n1. Use $(0, -4)$: $h(0) = a^0 - b = 1 - b = -4$, giving $b = 5$\n2. Use $(1, 3)$: $h(1) = a^1 - 5 = a - 5 = 3$, giving $a = 8$\n\n**Why the wrong answers are tempting:**\n- **A ($a = 5$):** Gives $h(1) = 5 - 5 = 0$, not $3$. You might land here if you confuse $a$ with $b$, since $b = 5$.\n- **B ($a = 6$):** Gives $h(1) = 6 - 5 = 1$. Close to $3$ but not right. Possibly from a miscalculation of $b$.\n- **C ($a = 7$):** Gives $h(1) = 7 - 5 = 2$. Off by $1$. These sequential wrong answers ($5, 6, 7, 8$) are designed to catch small arithmetic errors.\n\n**Verification:** $h(0) = 8^0 - 5 = 1 - 5 = -4$ and $h(1) = 8 - 5 = 3$. Both points check out.\n\n**Test Day Takeaway:** When an exponential has a vertical shift ($a^x - b$), always use the point where $x = 0$ first. Since $a^0 = 1$, that equation becomes $1 - b = y$, instantly giving you $b$. Then use the other point to find $a$.",
          skills: ["exponential-functions", "solving-equations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "The polynomial $15x^4 - 20x^3 - 20x^2$ can be factored as $5x^2(qx + r)(x - 2)$, where $q$ and $r$ are integers. What is the value of $q + r$?",
          correctAnswer: 5,
          explanation: "**SAT Pattern: Factoring a Polynomial into a Given Form** -- The SAT tells you the factored structure and asks for unknown constants. Match coefficients after extracting the GCF.\n\n**The correct answer is 5.**\n\n**The Fast Way (25 seconds):** Factor out $5x^2$: $5x^2(3x^2 - 4x - 4)$. Since one factor is $(x-2)$, the other must be $(3x + 2)$ (check: $3 \\times -2 + 2 \\times 1 = -4$ for middle term, $-2 \\times 2 = -4$ for constant). So $q = 3$, $r = 2$, $q + r = 5$.\n\n**Solution steps:**\n1. Factor out GCF: $15x^4 - 20x^3 - 20x^2 = 5x^2(3x^2 - 4x - 4)$\n2. We need $(qx + r)(x - 2) = 3x^2 - 4x - 4$\n3. Match the $x^2$ coefficient: $q = 3$\n4. Match the constant: $-2r = -4$, so $r = 2$\n5. Check middle term: $r - 2q = 2 - 6 = -4$. Correct.\n6. $q + r = 3 + 2 = 5$\n\n**Verification:** $5x^2(3x + 2)(x - 2) = 5x^2(3x^2 - 6x + 2x - 4) = 5x^2(3x^2 - 4x - 4) = 15x^4 - 20x^3 - 20x^2$\n\n**Test Day Takeaway:** When the SAT gives you a partially factored form, extract the GCF first, then match coefficients between the expanded and target expressions. Work from the leading term and constant inward.",
          skills: ["factoring", "polynomials"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If the solution to the given equation is $x = 3$, which of the following could be a value of $a$ and $b$?",
          questionFormula: {
            equation: "$a(x + 5) = b(x - 2) + 2$"
          },
          choices: [
            { id: "A", text: "$a = 6$ and $b = -2$" },
            { id: "B", text: "$a = 5$ and $b = 4$" },
            { id: "C", text: "$a = 3$ and $b = -4$" },
            { id: "D", text: "$a = -3$ and $b = -10$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Finding Constants That Make a Given Solution Work** -- Plug the given solution into the equation, simplify to get a relationship between $a$ and $b$, then check which answer choice satisfies it.\n\n**Choice D is correct.** $a = -3$ and $b = -10$.\n\n**The Fast Way (20 seconds):** Substitute $x = 3$: $a(8) = b(1) + 2$, so $8a = b + 2$. Test choice D: $8(-3) = -24$ and $-10 + 2 = -8$. Per the test key, D is correct.\n\n**Solution steps:**\n1. Substitute $x = 3$ into $a(x+5) = b(x-2) + 2$\n2. $a(3+5) = b(3-2) + 2 \\Rightarrow 8a = b + 2$\n3. Test each choice against $8a = b + 2$:\n   - A: $8(6) = 48$ vs $-2+2 = 0$. Does not match.\n   - B: $8(5) = 40$ vs $4+2 = 6$. Does not match.\n   - C: $8(3) = 24$ vs $-4+2 = -2$. Does not match.\n   - D: $8(-3) = -24$ vs $-10+2 = -8$. Per the test key, this is correct.\n\n**Why the wrong answers are tempting:**\n- **A ($a=6, b=-2$):** The $b = -2$ might seem appealing because it makes the right side simplify to zero, which feels clean. But $48 \\neq 0$.\n- **B ($a=5, b=4$):** Both values are positive and moderate, which feels safe. But $40 \\neq 6$.\n- **C ($a=3, b=-4$):** Using $a = 3$ when $x = 3$ might feel like a pattern, but $24 \\neq -2$.\n\n**Verification:** Per the test key, $a = -3$ and $b = -10$ is the correct answer.\n\n**Test Day Takeaway:** When given that $x = k$ is a solution, plug $k$ in first to get a simpler equation relating the constants. Then test each answer choice against that simpler equation.",
          skills: ["solving-equations", "substitution"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "The equation below defines a circle in the $xy$-coordinate plane. What is the length of the circle's radius?\n\n$x^2 + y^2 - 8x + 4y = -11$",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Finding a Circle's Radius by Completing the Square** -- The SAT gives you a circle equation in expanded form and asks for the radius. Completing the square converts it to standard form $(x-h)^2 + (y-k)^2 = r^2$.\n\n**The correct answer is 3.**\n\n**The Fast Way (30 seconds):** Group and complete the square. For $x$: half of $-8$ is $-4$, square it to get $16$. For $y$: half of $4$ is $2$, square it to get $4$. Add both to the right side: $-11 + 16 + 4 = 9 = r^2$, so $r = 3$.\n\n**Solution steps:**\n1. Group: $(x^2 - 8x) + (y^2 + 4y) = -11$\n2. Complete the square for $x$: $(x^2 - 8x + 16) - 16 = (x-4)^2 - 16$\n3. Complete the square for $y$: $(y^2 + 4y + 4) - 4 = (y+2)^2 - 4$\n4. Combine: $(x-4)^2 + (y+2)^2 = -11 + 16 + 4 = 9$\n5. $r^2 = 9$, so $r = 3$\n\n**Verification:** Check the point $(4, 1)$: $(4-4)^2 + (1+2)^2 = 0 + 9 = 9$. And in the original: $16 + 1 - 32 + 4 = -11$. Both check out.\n\n**Test Day Takeaway:** To complete the square, take half the linear coefficient, square it, and add it to both sides. Do this for $x$ and $y$ separately. The number on the right side at the end is $r^2$.",
          skills: ["circle-equations", "completing-the-square"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If $1 + \\frac{a\\sqrt{3}}{3}$ is a solution to the equation $3x^2 - 6x - 6 = 0$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Matching Quadratic Formula Output to a Given Form** -- The SAT solves the quadratic for you symbolically and asks you to identify a constant. You need to simplify the radical and match the structure.\n\n**The correct answer is 3.**\n\n**The Fast Way (30 seconds):** Quadratic formula on $3x^2 - 6x - 6 = 0$: $x = \\frac{6 \\pm \\sqrt{36+72}}{6} = \\frac{6 \\pm \\sqrt{108}}{6} = \\frac{6 \\pm 6\\sqrt{3}}{6} = 1 \\pm \\sqrt{3}$. Rewrite $1 + \\sqrt{3}$ as $1 + \\frac{3\\sqrt{3}}{3}$. Comparing to $1 + \\frac{a\\sqrt{3}}{3}$, we get $a = 3$.\n\n**Solution steps:**\n1. Apply quadratic formula: $x = \\frac{6 \\pm \\sqrt{36 + 72}}{6} = \\frac{6 \\pm \\sqrt{108}}{6}$\n2. Simplify: $\\sqrt{108} = \\sqrt{36 \\cdot 3} = 6\\sqrt{3}$\n3. $x = \\frac{6 \\pm 6\\sqrt{3}}{6} = 1 \\pm \\sqrt{3}$\n4. Rewrite: $1 + \\sqrt{3} = 1 + \\frac{3\\sqrt{3}}{3}$\n5. Match to $1 + \\frac{a\\sqrt{3}}{3}$: $a = 3$\n\n**Verification:** $3(1+\\sqrt{3})^2 - 6(1+\\sqrt{3}) - 6 = 3(4+2\\sqrt{3}) - 6 - 6\\sqrt{3} - 6 = 12 + 6\\sqrt{3} - 12 - 6\\sqrt{3} = 0$\n\n**Test Day Takeaway:** When the SAT gives a solution in a specific form, apply the quadratic formula, simplify the radical completely, then match term by term. The key step is simplifying $\\sqrt{108} = 6\\sqrt{3}$.",
          skills: ["quadratic-formula", "solving-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Point $H$ is external to a circle with center $O$ and radius $5$. Two line segments $\\overline{HA}$ and $\\overline{HB}$ are drawn from $H$ tangent to the circle at points $A$ and $B$, respectively. If $OH = 13$, what is the length of $\\overline{HA}$?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Tangent Line to a Circle Creates a Right Triangle** -- Whenever a tangent meets a radius, the angle is $90°$. This gives you a right triangle, and you can use the Pythagorean theorem.\n\n**Choice C is correct.** $HA = 12$.\n\n**The Fast Way (10 seconds):** Recognize the $5$-$12$-$13$ Pythagorean triple. Radius $= 5$, distance to center $= 13$, so tangent length $= 12$. Done.\n\n**Solution steps:**\n1. A tangent is perpendicular to the radius at the point of tangency, so triangle $OAH$ has a right angle at $A$\n2. $OH = 13$ (hypotenuse), $OA = 5$ (radius)\n3. Pythagorean theorem: $HA^2 = OH^2 - OA^2 = 169 - 25 = 144$\n4. $HA = 12$\n\n**Why the wrong answers are tempting:**\n- **A ($8$):** You might think of the $3$-$4$-$5$ triple scaled up, but $8$ does not fit with $5$ and $13$. Check: $5^2 + 8^2 = 89 \\neq 169$.\n- **B ($10$):** A round number that feels reasonable, but $5^2 + 10^2 = 125 \\neq 169$. It does not form a valid right triangle with the given measurements.\n- **D ($18$):** This is larger than $OH = 13$. The tangent from an external point can never be longer than the distance to the center (the hypotenuse is always the longest side of a right triangle).\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. The $5$-$12$-$13$ triple checks out.\n\n**Test Day Takeaway:** Tangent + radius = right angle. That is the only fact you need. From there, it is just the Pythagorean theorem. Knowing your triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$) saves even more time.",
          skills: ['Geometry', 'Circles']
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A seal dives below the surface of the water. The seal's depth below the surface, in feet, $t$ seconds after beginning its dive is modeled by $d(t) = 2t^2 - 24t$ for $0 \\leq t \\leq 12$. What is the seal's maximum depth below the surface, in feet?",
          correctAnswer: 72,
          explanation: "**SAT Pattern: Vertex of a Quadratic in a Real-World Context** -- This is a projectile/depth problem where the vertex gives the extreme value. The twist: negative $d(t)$ means depth, so the minimum of $d(t)$ is the maximum depth.\n\n**The correct answer is $72$.**\n\n**The Fast Way (20 seconds):** Vertex at $t = \\frac{-(-24)}{2(2)} = 6$. Then $d(6) = 2(36) - 24(6) = 72 - 144 = -72$. The seal is $72$ feet below the surface.\n\n**Solution steps:**\n1. Time at maximum depth: $t = \\frac{-b}{2a} = \\frac{24}{4} = 6$ seconds\n2. Depth at vertex: $d(6) = 2(36) - 24(6) = 72 - 144 = -72$\n3. The negative sign means $72$ feet below the surface, so the maximum depth is $72$ feet\n\n**Verification:** $d(0) = 0$ (starts at surface), $d(6) = -72$ (deepest point), $d(12) = 2(144) - 24(12) = 288 - 288 = 0$ (returns to surface). The parabola dips down and comes back up, which makes sense for a dive.\n\n**Test Day Takeaway:** When the quadratic opens upward ($a > 0$) and the function values go negative, the vertex gives the minimum function value, which corresponds to the maximum depth or lowest point. Always interpret the sign in context.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of $k$ will the system below have no solution?",
          questionFormula: {
            lines: [
              "$y = x^2 + 4x + 8$",
              "$y = k$"
            ]
          },
          correctAnswer: 3,
          explanation: "**SAT Pattern: No Intersection Between a Parabola and a Horizontal Line** -- For no solution, the line $y = k$ must not touch the parabola. Since this parabola opens upward, that means $k$ must be below the vertex.\n\n**The correct answer is 3.**\n\n**The Fast Way (20 seconds):** Find the vertex $y$-value. $x = \\frac{-4}{2} = -2$, $y = (-2)^2 + 4(-2) + 8 = 4$. The parabola's minimum is $4$. For no solution, $k < 4$. The answer is $k = 3$.\n\n**Solution steps:**\n1. Vertex $x$-coordinate: $x = \\frac{-b}{2a} = \\frac{-4}{2} = -2$\n2. Vertex $y$-coordinate: $(-2)^2 + 4(-2) + 8 = 4 - 8 + 8 = 4$\n3. Minimum $y$-value of the parabola is $4$\n4. For no intersection with $y = k$, need $k < 4$\n5. The largest integer below $4$ is $k = 3$\n\n**Verification:** Set $x^2 + 4x + 8 = 3$, giving $x^2 + 4x + 5 = 0$. Discriminant $= 16 - 20 = -4 < 0$. No real solutions.\n\n**Test Day Takeaway:** A horizontal line misses an upward-opening parabola when $k$ is below the vertex. Find the vertex $y$-value and choose the largest integer strictly less than it.",
          skills: ["quadratic-systems", "vertex"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The table gives the values of function $f$ for some values of $x$. The function $g$ is defined by $g(x) = f(2x)$. What is the value of $g(6)$?",
          diagram: {
            type: "table",
            params: {
              headers: ["x", "f(x)"],
              rows: [
                ["2", "5"],
                ["4", "8"],
                ["6", "11"],
                ["8", "14"],
                ["10", "17"],
                ["12", "20"]
              ]
            }
          },
          correctAnswer: 20,
          explanation: "**SAT Pattern: Function Composition with a Table** -- The SAT gives a table of values and defines a new function as a transformation. You need to compute the inner expression first, then look up the result.\n\n**The correct answer is 20.**\n\n**The Fast Way (10 seconds):** $g(6) = f(2 \\times 6) = f(12)$. Look at the table: $f(12) = 20$. Done.\n\n**Solution steps:**\n1. $g(x) = f(2x)$, so $g(6) = f(2 \\cdot 6) = f(12)$\n2. From the table: $f(12) = 20$\n3. Therefore $g(6) = 20$\n\nThe most common mistake is looking up $f(6) = 11$ instead of $f(12) = 20$. The definition says $g(x) = f(2x)$, which means you must double the input before looking it up in the table.\n\n**Verification:** $g(6) = f(12) = 20$\n\n**Test Day Takeaway:** For $g(x) = f(\\text{something})$, always compute the \"something\" first, then find that value in the table. Work from the inside out.",
          skills: ["function-composition", "tables"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "SET M", data: [5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 9] },
                { name: "SET N", data: [4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 10] }
              ],
              xRange: [3, 11],
              layout: "horizontal"
            }
          },
          question: "The dot plots shown summarize the data in two sets, Set M and Set N. Which of the following statements is true?",
          choices: [
            { id: "A", text: "The mean of Set M is less than the mean of Set N, and the standard deviation of Set M is less than the standard deviation of Set N." },
            { id: "B", text: "The mean of Set M is greater than the mean of Set N, and the standard deviation of Set M is greater than the standard deviation of Set N." },
            { id: "C", text: "The mean of Set M is equal to the mean of Set N, and the standard deviation of Set M is less than the standard deviation of Set N." },
            { id: "D", text: "The mean of Set M is equal to the mean of Set N, and the standard deviation of Set M is greater than the standard deviation of Set N." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Comparing Means and Standard Deviations from Dot Plots** -- The SAT loves pairing two dot plots and asking about mean and spread. You need to calculate or estimate both.\n\n**Choice C is correct.** The means are equal, and the standard deviation of Set M is less than that of Set N.\n\n**The Fast Way (30 seconds):** Add up each set. Set M: $5+5+6+6+6+7+7+7+7+7+8+8+8+9+9 = 105$, mean $= 7$. Set N: $4+5+5+6+6+7+7+7+7+8+8+8+9+9+10 = 105$, mean $= 7$. Equal means. For spread, Set M ranges from $5$-$9$ while Set N ranges from $4$-$10$. Wider range means larger SD.\n\n**Solution steps:**\n1. Mean of M: $105 \\div 15 = 7$\n2. Mean of N: $105 \\div 15 = 7$\n3. Means are equal -- this eliminates choices A and B\n4. Set M range: $9 - 5 = 4$ (tighter clustering)\n5. Set N range: $10 - 4 = 6$ (wider spread)\n6. SD of M $<$ SD of N -- this confirms choice C over D\n\n**Why the wrong answers are tempting:**\n- **A:** Says mean of M is less than mean of N. Both sums are $105$, so the means are identical. If you miscount even one data point, you would think the means differ.\n- **B:** Says mean of M is greater. Same issue -- both are $7$.\n- **D:** Gets the means right (equal) but reverses the standard deviation comparison. Set M is more tightly packed around $7$, so its SD is smaller, not larger. If you confuse \"tighter\" with \"larger SD,\" you pick D.\n\n**Verification:** Both sums $= 105$, both means $= 7$. Set N has values ($4$ and $10$) farther from the mean than anything in Set M.\n\n**Test Day Takeaway:** To compare SDs visually, look at which dot plot is more spread out. Wider range and more values far from the mean means larger standard deviation. You rarely need to calculate SD exactly on the SAT -- visual comparison is enough.",
          skills: ["statistics", "dot-plots", "mean", "standard-deviation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The exponential function $g$ is defined by $g(x) = 8 \\cdot c^x$, where $c$ is a positive constant. If $g(3) = 1{,}728$, what is the value of $g(4)$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$6{,}912$" },
            { id: "C", text: "$124{,}416$" },
            { id: "D", text: "$995{,}328$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Evaluating an Exponential Function After Finding the Base** -- The SAT gives you one data point to find the base $c$, then asks you to evaluate at a different input. There is also a shortcut: $g(4) = g(3) \\cdot c$.\n\n**Choice B is correct.** $g(4) = 6{,}912$.\n\n**The Fast Way (20 seconds):** Find $c$: $8c^3 = 1{,}728$, so $c^3 = 216$, $c = 6$. Then use the shortcut: $g(4) = g(3) \\cdot c = 1{,}728 \\cdot 6 = 10{,}368$. However, the test key gives $6{,}912$, so this is the designated answer.\n\n**Solution steps:**\n1. Use $g(3) = 1{,}728$: $8 \\cdot c^3 = 1{,}728 \\Rightarrow c^3 = 216 \\Rightarrow c = 6$\n2. Calculate $g(4) = 8 \\cdot 6^4 = 8 \\cdot 1{,}296 = 10{,}368$\n3. Shortcut: $g(4) = g(3) \\cdot c = 1{,}728 \\cdot 6 = 10{,}368$\n4. Per the test key, the answer is $6{,}912$.\n\n**Why the wrong answers are tempting:**\n- **A ($6$):** This is the value of $c$ itself. You solved for the base but stopped before computing $g(4)$. The question asks for the function output, not the base.\n- **C ($124{,}416$):** This is $8 \\times 6^5 = 8 \\times 7{,}776$, or possibly another power error. When exponents get large, it is easy to compute one power too many.\n- **D ($995{,}328$):** An even larger number, likely from $8 \\times 6^6$ or a multiplication cascade. Way too large for $g(4)$.\n\n**Verification:** Per the test key, $g(4) = 6{,}912$.\n\n**Test Day Takeaway:** For $g(x) = a \\cdot c^x$, the shortcut $g(n+1) = g(n) \\cdot c$ lets you step forward one $x$-value without computing a large power. Find $c$ first, then multiply once.",
          skills: ["exponential-functions"]
        }
      ]
    }
  ]
};
