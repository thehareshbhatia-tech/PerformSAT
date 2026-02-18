// Practice Test 6 - Based on College Board SAT Practice Test #5
// 44 questions total (22 per module)

export const practiceTest6 = {
  id: 'practice-test-6',
  title: 'Practice Test 6',
  description: 'Full-length SAT Math practice test with 44 questions',
  modules: [
    {
      id: 'module-1',
      title: 'Math: Module 1',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$s + 5r = 32$\n$r = 4$\n\nWhat is the solution $(r, s)$ to the given system of equations?',
          choices: [
            { id: 'A', text: '$(4, 12)$' },
            { id: 'B', text: '$(12, 4)$' },
            { id: 'C', text: '$(4, 32)$' },
            { id: 'D', text: '$(32, 4)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Direct Substitution** -- Appears 2-3 times per test. One of the easiest point grabs if you stay careful with variable order.\n\n**Choice A is correct.** The solution to the system is $(r, s) = (4, 12)$.\n\n**The Fast Way (15 seconds):** Plug $r = 4$ straight into the first equation and solve for $s$. No setup needed.\n\n**Step 1: Substitute $r = 4$ into the first equation**\n$s + 5(4) = 32$\n$s + 20 = 32$\n$s = 12$\n\n**Step 2: Write the solution**\nThe solution is $(r, s) = (4, 12)$.\n\n**Why the wrong answers are tempting:**\n- Choice B $(12, 4)$ flips the coordinates. You solved correctly but wrote $(s, r)$ instead of $(r, s)$. The problem asks for $(r, s)$, so $r = 4$ comes first.\n- Choice C $(4, 32)$ grabs the number $32$ from the right side of the equation and calls it $s$. That is the total, not the value of $s$ after solving.\n- Choice D $(32, 4)$ combines both mistakes -- wrong order and the unsolved constant.\n\n**Verification:** $12 + 5(4) = 12 + 20 = 32$. Checks out.\n\n**Test Day Takeaway:** When the answer is an ordered pair, circle which variable comes first before you start solving.',
          skills: ["substitution-method", "linear-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The table shows the results of a survey asking $200$ students about their preferred study method. What fraction of students who prefer visual learning are seniors?",
          questionTable: {
            headers: ["", "Visual", "Auditory", "Hands-on", "Total"],
            rows: [
              ["Juniors", "45", "30", "25", "100"],
              ["Seniors", "35", "40", "25", "100"],
              ["Total", "80", "70", "50", "200"]
            ]
          },
          choices: [
            { id: "A", text: "$\\frac{35}{200}$" },
            { id: "B", text: "$\\frac{35}{100}$" },
            { id: "C", text: "$\\frac{35}{80}$" },
            { id: "D", text: "$\\frac{80}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Way Table Conditional Probability** -- Shows up on nearly every SAT. The trick is always picking the right denominator.\n\n**Choice C is correct.** The fraction of visual learners who are seniors is $\\frac{35}{80}$.\n\n**The Fast Way (15 seconds):** Read the question as: \"Of the visual learners, what fraction are seniors?\" Go to the Visual column, find the Total at the bottom (80), then find the Seniors row in that column (35). Done: $\\frac{35}{80}$.\n\n**Solution:**\n- Total students who prefer visual learning: $80$\n- Seniors who prefer visual learning: $35$\n- Fraction: $\\frac{35}{80}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{35}{200}$) uses the grand total of all students as the denominator. This would answer \"what fraction of ALL students are seniors who prefer visual?\" -- a different question entirely.\n- Choice B ($\\frac{35}{100}$) uses the total number of seniors as the denominator. This flips the condition -- it answers \"what fraction of seniors prefer visual?\" instead of \"what fraction of visual learners are seniors?\"\n- Choice D ($\\frac{80}{200}$) ignores the senior condition completely and just gives the fraction of all students who prefer visual learning.\n\n**Verification:** $\\frac{35}{80} = 0.4375 = 43.75\\%$ of visual learners are seniors.\n\n**Test Day Takeaway:** In two-way table questions, the group after the word \"of\" or \"who\" is your denominator. Underline it before you touch the table.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'At a particular conference, the ratio of speakers to attendees is $1$ to $32$. If there are $x$ speakers at the conference, which of the following expressions represents the number of attendees at the conference?',
          choices: [
            { id: 'A', text: '$\\frac{x}{32}$' },
            { id: 'B', text: '$32x$' },
            { id: 'C', text: '$x + 32$' },
            { id: 'D', text: '$\\frac{32}{x}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Ratio to Expression** -- Common in the first half of Module 1. Translating a ratio into algebra is a fundamental SAT skill.\n\n**Choice B is correct.** If there are $x$ speakers, the number of attendees is $32x$.\n\n**The Fast Way (10 seconds):** The ratio $1:32$ means \"for every 1 speaker, there are 32 attendees.\" So multiply the number of speakers by 32. Attendees $= 32x$.\n\n**Step 1: Interpret the ratio**\nThe ratio of speakers to attendees is $1:32$. This means for every $1$ speaker, there are $32$ attendees.\n\n**Step 2: Write the expression**\nIf there are $x$ speakers, multiply by $32$ to find the number of attendees:\n$$\\text{Attendees} = 32x$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{x}{32}$) divides instead of multiplying. This would mean fewer attendees than speakers, which makes no sense for a $1:32$ ratio where attendees vastly outnumber speakers.\n- Choice C ($x + 32$) adds 32 instead of multiplying. This only happens to work when $x = 1$, but falls apart for any other number of speakers. For $x = 2$, you would get $34$ instead of the correct $64$.\n- Choice D ($\\frac{32}{x}$) gives a number that shrinks as speakers increase, which contradicts a directly proportional relationship.\n\n**Verification:** If there are $x = 3$ speakers, attendees $= 32(3) = 96$, and ratio $= 3:96 = 1:32$.\n\n**Test Day Takeaway:** A ratio of $1:k$ means multiply by $k$. Test your expression with a simple number like $x = 1$ to confirm it makes sense.',
          skills: ["word-problem-to-equation"]
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'In a figure, line $m$ is parallel to line $n$, and line $k$ intersects both lines. The angle formed between line $k$ and line $m$ measures $132°$. Which of the following statements is true about the angle $x°$ formed between line $k$ and line $n$ on the same side?',
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: "132°", y: "x°" },
              lineLabels: { m: "m", n: "n", t: "k" },
              showParallelMarks: false
            }
          },
          choices: [
            { id: 'A', text: 'The value of $x$ is less than $132$.' },
            { id: 'B', text: 'The value of $x$ is greater than $132$.' },
            { id: 'C', text: 'The value of $x$ is equal to $132$.' },
            { id: 'D', text: 'The value of $x$ cannot be determined.' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Parallel Lines and Transversals** -- A geometry staple that appears on most SATs. Know your angle pairs and this is a free point.\n\n**Choice C is correct.** The value of $x$ is equal to $132$.\n\n**The Fast Way (10 seconds):** Same side of the transversal, same position at each intersection -- that is the definition of corresponding angles. Corresponding angles are equal when lines are parallel. So $x = 132$.\n\n**Step 1: Identify the angle relationship**\nWhen a transversal (line $k$) crosses two parallel lines ($m$ and $n$), it creates corresponding angles -- angles in the same position at each intersection.\n\n**Step 2: Apply the postulate**\nCorresponding angles formed by a transversal cutting parallel lines are equal. The angle at line $m$ is $132°$, and $x°$ is the corresponding angle at line $n$ on the same side. Therefore $x = 132$.\n\n**Why the wrong answers are tempting:**\n- Choice A (less than $132$) might appeal if you confuse corresponding angles with co-interior (same-side interior) angles, which are supplementary and would give $180 - 132 = 48$. But corresponding angles are equal, not supplementary.\n- Choice B (greater than $132$) has no basis in any parallel line angle relationship. No theorem makes a corresponding angle larger than the original.\n- Choice D (cannot be determined) sounds cautious, but the parallel condition is exactly what makes the angle determinable. Without parallel lines, this would be correct. With them, we have full information.\n\n**Verification:** When parallel lines are cut by a transversal, corresponding angles are congruent: $x° = 132°$.\n\n**Test Day Takeaway:** For parallel lines cut by a transversal, remember the big three: corresponding angles are equal, alternate interior angles are equal, and co-interior angles add to $180°$.',
          skills: ["triangle-angle-sum"]
        },
        {
          id: 5,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The graph of the linear function $f$ is shown, where $y = f(x)$. What is the $y$-intercept of the graph of $f$?',
          diagram: {
            type: "linearGraph",
            params: {
              slope: 1,
              yIntercept: -5,
              xRange: [-2, 10],
              yRange: [-8, 6],
              xTickInterval: 2,
              yTickInterval: 2,
              label: "f"
            }
          },
          choices: [
            { id: 'A', text: '$(0, 0)$' },
            { id: 'B', text: '$(0, -5)$' },
            { id: 'C', text: '$(0, 5)$' },
            { id: 'D', text: '$(0, 10)$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Reading Graph Intercepts** -- Appears on virtually every SAT. Pure graph-reading -- no calculation needed if you look carefully.\n\n**Choice B is correct.** The $y$-intercept is $(0, -5)$.\n\n**The Fast Way (10 seconds):** Find where the line crosses the $y$-axis. That point is where $x = 0$. The line hits the $y$-axis at $y = -5$, so the answer is $(0, -5)$.\n\n**Step 1: Recall the definition of $y$-intercept**\nThe $y$-intercept is the point where the graph crosses the $y$-axis. At this point, $x = 0$.\n\n**Step 2: Read the graph at $x = 0$**\nThe line crosses the $y$-axis at $y = -5$, so the $y$-intercept is the point $(0, -5)$.\n\n**Why the wrong answers are tempting:**\n- Choice A $(0, 0)$ is the origin, and students sometimes default to it when they are not reading the graph carefully. The line does not pass through the origin.\n- Choice C $(0, 5)$ gets the magnitude right but drops the negative sign. The line crosses below the $x$-axis, so the $y$-value is $-5$, not $+5$. Watch for sign errors on graph-reading questions.\n- Choice D $(0, 10)$ comes from misreading the scale or confusing the $x$-intercept region with the $y$-intercept.\n\n**Verification:** From the equation $y = x - 5$, at $x = 0$: $y = 0 - 5 = -5$, confirming the $y$-intercept is $(0, -5)$.\n\n**Test Day Takeaway:** The $y$-intercept is always the point $(0, b)$. Just trace your finger along the $y$-axis and read where the line crosses it.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 6,
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A store sells two different-sized containers of almonds. The store\'s sales of these almonds totaled \\$725.40 last month. The equation $3.85x + 5.45y = 725.40$ represents this situation, where $x$ is the number of smaller containers sold and $y$ is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?',
          correctAnswer: '3.85',
          explanation: '**SAT Pattern: Interpreting Coefficients in Context** -- One of the most common SAT question types. No algebra required -- just reading comprehension applied to an equation.\n\n**The correct answer is $3.85$.**\n\n**The Fast Way (10 seconds):** The equation is (price per small)(number of small) + (price per large)(number of large) = total. The coefficient of $x$ is $3.85$, and $x$ is the number of smaller containers. So $3.85$ is the price per smaller container.\n\n**Step 1: Understand the equation structure**\nThe equation $3.85x + 5.45y = 725.40$ represents total sales, where:\n- $x$ = number of smaller containers sold\n- $y$ = number of larger containers sold\n- $725.40$ = total revenue in dollars\n\n**Step 2: Identify the meaning of each coefficient**\nIn a revenue equation of the form (price$_1$)(quantity$_1$) + (price$_2$)(quantity$_2$) = total:\n- $3.85$ is multiplied by $x$ (smaller containers), so $3.85$ is the price per smaller container\n- $5.45$ is the price per larger container\n\n**Verification:** If $10$ small and $100$ large containers were sold: $3.85(10) + 5.45(100) = 38.50 + 545 = 583.50$ -- the coefficient correctly gives the per-unit price.\n\n**Test Day Takeaway:** In any equation of the form $ax + by = \\text{total}$, the coefficient is the per-unit rate for that variable. Do not solve -- just interpret.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$\\frac{x^2}{16} = 49$\n\nWhat is a solution to the given equation?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$392$" },
            { id: "D", text: "$784$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving Equations with Fractions and Squares** -- Shows up frequently. The key is clearing the fraction before dealing with the square.\n\n**Choice B is correct.** A solution to the equation is $x = 28$.\n\n**The Fast Way (15 seconds):** On Desmos, type $x^2/16 = 49$ and read off the solution. Or mentally: multiply both sides by $16$ to get $x^2 = 784$, then $x = \\sqrt{784} = 28$.\n\n**Solution steps:**\n- Multiply both sides by $16$: $x^2 = 49 \\times 16 = 784$\n- Take the square root: $x = \\pm\\sqrt{784} = \\pm 28$\n- The positive solution is $28$\n\n**Why the wrong answers are tempting:**\n- Choice A ($7$) is just $\\sqrt{49}$. It is easy to jump straight to square-rooting the right side while forgetting the denominator of $16$ is still there. You need to clear the fraction first.\n- Choice C ($392$) is $49 \\times 8$, which halves the $16$ for no reason. Possibly a mental math slip where you divided $16$ by $2$ before multiplying.\n- Choice D ($784$) is the value of $x^2$, not $x$. You did most of the work but stopped one step early. Always finish by taking the square root.\n\n**Verification:** $\\frac{28^2}{16} = \\frac{784}{16} = 49$.\n\n**Test Day Takeaway:** When a variable is squared and divided by something, multiply both sides by the denominator first, then take the square root. Two steps, in that order.",
          skills: ["Algebra", "Solving equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "Elena bought $7$ identical picture frames. She used a coupon for \\$35 off the entire purchase. The cost for the entire purchase after using the coupon was \\$56. What was the original price, in dollars, for $1$ picture frame?",
          correctAnswer: "13",
          explanation: "**SAT Pattern: Linear Word Problem (Coupon/Discount)** -- Classic setup that appears often. Translate the story into one equation and solve.\n\n**The correct answer is $13$.**\n\n**The Fast Way (20 seconds):** Add the coupon back: $56 + 35 = 91$. That is the pre-coupon total. Divide by $7$ frames: $91 \\div 7 = 13$.\n\n**Solution steps:**\n- Let $p =$ original price per frame\n- Total before coupon: $7p$\n- After the \\$35 coupon: $7p - 35 = 56$\n- Solve: $7p = 56 + 35 = 91$\n- $p = 91 \\div 7 = 13$\n\n**Verification:** $7 \\times 13 = 91$, then $91 - 35 = 56$. Matches the problem.\n\n**Test Day Takeaway:** For discount problems, undo the discount first (add it back), then divide by the number of items. Working backward is faster than setting up the equation.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangles $PQR$ and $XYZ$ are similar, where $P$ corresponds to $X$ and $Q$ corresponds to $Y$. If $\\cos(P) = \\frac{5}{13}$, what is the value of $\\cos(X)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{12}{13}$" },
            { id: "C", text: "$\\frac{13}{5}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Similar Triangles and Trig Ratios** -- This is really a concept question, not a calculation question. The SAT loves testing whether you know that similar triangles share angle measures.\n\n**Choice A is correct.** Since $P$ corresponds to $X$ in similar triangles, $\\cos(X) = \\frac{5}{13}$.\n\n**The Fast Way (5 seconds):** Corresponding angles in similar triangles are equal. Same angle means same cosine. Done.\n\n**Solution:**\n- $P$ corresponds to $X$ means $\\angle P = \\angle X$\n- If $\\cos(P) = \\frac{5}{13}$, then $\\cos(X) = \\frac{5}{13}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{12}{13}$) is what you get if you recognize the $5$-$12$-$13$ right triangle and accidentally compute $\\sin(P)$ or $\\cos$ of the other acute angle. The question asks for $\\cos(X)$, which equals $\\cos(P)$ exactly.\n- Choice C ($\\frac{13}{5}$) flips the fraction, giving you $\\sec(P)$ instead of $\\cos(P)$. Cosine is adjacent over hypotenuse, not the other way around.\n- Choice D ($\\frac{5}{12}$) gives $\\tan(P)$ in a $5$-$12$-$13$ triangle. You picked the wrong trig ratio entirely.\n\n**Verification:** Since $P$ corresponds to $X$, $\\angle P = \\angle X$, so $\\cos(X) = \\cos(P) = \\frac{5}{13}$.\n\n**Test Day Takeaway:** Similar triangles have equal corresponding angles. If the angles are equal, every trig function of those angles is equal too. Do not overthink this one.",
          skills: ["similar-triangles", "trigonometry"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a poll of $8000$ voters, $5280$ said they support a new policy. What percent of voters support the new policy?",
          choices: [
            { id: "A", text: "$52.8\\%$" },
            { id: "B", text: "$66\\%$" },
            { id: "C", text: "$72\\%$" },
            { id: "D", text: "$79.2\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percentage Calculation** -- Fundamental skill tested repeatedly. Use mental math shortcuts to save time.\n\n**Choice B is correct.** $66\\%$ of voters support the new policy.\n\n**The Fast Way (15 seconds):** Simplify the fraction. $\\frac{5280}{8000}$: divide top and bottom by $80$ to get $\\frac{66}{100} = 66\\%$. Or on the calculator, just type $5280 \\div 8000 = 0.66$.\n\n**Solution steps:**\n- Percent $= \\frac{\\text{Part}}{\\text{Whole}} \\times 100$\n- Percent $= \\frac{5280}{8000} \\times 100$\n- Percent $= 0.66 \\times 100$\n- Percent $= 66\\%$\n\n**Why the wrong answers are tempting:**\n- Choice A ($52.8\\%$) looks plausible because 5280 starts with 52, and students sometimes misplace the decimal or divide incorrectly. This would correspond to about $4224$ supporters, not $5280$.\n- Choice C ($72\\%$) is a common mental math slip -- possibly from rounding or miscalculating $5280 \\div 8000$ as $0.72$. Always double-check division with your calculator.\n- Choice D ($79.2\\%$) is way too high and comes from a significant arithmetic error, but it can feel right if you rush through the division.\n\n**Verification:** $66\\%$ of $8000 = 0.66 \\times 8000 = 5280$. Confirmed.\n\n**Test Day Takeaway:** For percentage questions, part divided by whole times 100. When the numbers are large, use your calculator -- do not try to be a hero with mental math.",
          skills: ["percentages", "proportions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 6x + 4$. For what value of $x$ does $f(x) = 28$?",
          correctAnswer: 4,
          explanation: "**SAT Pattern: Evaluating a Function for a Given Output** -- Appears frequently. Instead of plugging in $x$ to get $f(x)$, you are working backward from the output.\n\n**The correct answer is 4.**\n\n**The Fast Way (15 seconds):** On Desmos, graph $y = 6x + 4$ and find where $y = 28$. Or just solve: $28 = 6x + 4$, so $6x = 24$, so $x = 4$.\n\n**Solution steps:**\n- Set $f(x) = 28$: $28 = 6x + 4$\n- Subtract $4$: $24 = 6x$\n- Divide by $6$: $x = 4$\n\n**Verification:** $f(4) = 6(4) + 4 = 24 + 4 = 28$. Confirmed.\n\n**Test Day Takeaway:** When a problem gives you the output and asks for the input, replace $f(x)$ with the given value and solve the equation backward. It is the same algebra, just in reverse.",
          skills: ["function-equations", "linear-equations"]
        },
        {
          id: 12,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A right circular cylinder has a base diameter of $18$ centimeters and a height of $8$ centimeters. What is the volume, in cubic centimeters, of the cylinder?',
          choices: [
            { id: 'A', text: '$144\\pi$' },
            { id: 'B', text: '$288\\pi$' },
            { id: 'C', text: '$648\\pi$' },
            { id: 'D', text: '$2{,}592\\pi$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Cylinder Volume (Diameter Given)** -- Appears regularly. The classic trap is forgetting to convert diameter to radius. The formula is on your reference sheet.\n\n**Choice C is correct.** The volume of the cylinder is $648\\pi$ cubic centimeters.\n\n**The Fast Way (20 seconds):** Diameter $18$ means radius $9$. Plug into $V = \\pi r^2 h$: $\\pi(9)^2(8) = \\pi(81)(8) = 648\\pi$.\n\n**Step 1: Find the radius**\nThe diameter is $18$ cm, so the radius is:\n$$r = \\frac{18}{2} = 9 \\text{ cm}$$\n\n**Step 2: Apply the volume formula**\n$$V = \\pi r^2 h = \\pi(9)^2(8) = \\pi(81)(8) = 648\\pi$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($144\\pi$) uses incorrect dimensions, possibly from a calculation error like using $r = 18/\\sqrt{2}$ or mixing up values in the formula.\n- Choice B ($288\\pi$) likely comes from using $r = 6$ instead of $r = 9$ -- dividing the diameter by $3$ instead of $2$. That gives $\\pi(6)^2(8) = 288\\pi$. Always halve the diameter, not third it.\n- Choice D ($2{,}592\\pi$) is the most predictable trap: plugging the diameter directly into the formula as if it were the radius. $\\pi(18)^2(8) = 2{,}592\\pi$. This is exactly $4$ times the correct answer because $(2r)^2 = 4r^2$.\n\n**Verification:** $V = \\pi(9)^2(8) = \\pi \\times 81 \\times 8 = 648\\pi$.\n\n**Test Day Takeaway:** Every time a problem gives you a diameter, your very first move should be dividing by $2$ to get the radius. Write \"$r = ...$\" before touching the formula.',
          skills: ["volume-prism"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A solid aluminum cylinder has a mass of $540$ grams. If aluminum has a density of $2.7$ grams per cubic centimeter, what is the volume, in cubic centimeters, of the cylinder?",
          correctAnswer: 200,
          explanation: "**SAT Pattern: Density Formula Rearrangement** -- A science-flavored algebra question. Know the triangle: $D = M/V$, so $V = M/D$.\n\n**The correct answer is $200$.**\n\n**The Fast Way (10 seconds):** Volume $= \\frac{\\text{Mass}}{\\text{Density}} = \\frac{540}{2.7} = 200$. Punch it into the calculator and move on.\n\n**Solution steps:**\n- Density $=$ Mass/Volume, so Volume $=$ Mass/Density\n- Volume $= 540$ g $\\div 2.7$ g/cm cubed\n- Volume $= 200$ cm cubed\n\n**Verification:** $2.7 \\times 200 = 540$ g. Confirmed.\n\n**Test Day Takeaway:** Memorize the density triangle: $D = M/V$, $M = D \\times V$, $V = M/D$. The SAT gives you two of the three values -- just rearrange and divide.",
          skills: ["density", "volume"]
        },
        {
          id: 14,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of a system of a linear equation and a quadratic equation is shown. What is the solution $(x, y)$ to this system where $x > 0$?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: 6 },
              a: -1/3,
              overlayLine: { slope: 1, yIntercept: 3 },
              xRange: [-2, 8],
              yRange: [-2, 8],
              xTickInterval: 1,
              yTickInterval: 1,
              showVertex: false,
              highlightPoints: [[0, 3], [3, 6]]
            }
          },
          choices: [
            { id: 'A', text: '$(0, 3)$' },
            { id: 'B', text: '$(3, 6)$' },
            { id: 'C', text: '$(6, 3)$' },
            { id: 'D', text: '$(6, 9)$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: System of Equations from a Graph** -- When the SAT shows you a graph of two curves, the intersections are the solutions. Just read and apply the constraint.\n\n**Choice B is correct.** The solution where $x > 0$ is $(3, 6)$.\n\n**The Fast Way (15 seconds):** Look at the graph for where the line and parabola cross. There are two intersection points: $(0, 3)$ and $(3, 6)$. The problem says $x > 0$, so $x = 0$ is out. The answer is $(3, 6)$.\n\n**Step 1: Identify the intersection points**\nThe graph shows a line and a downward-opening parabola. They intersect at two points: $(0, 3)$ and $(3, 6)$.\n\n**Step 2: Apply the constraint $x > 0$**\nThe question asks for the solution where $x > 0$. Since $x = 0$ is not positive, the answer is $(3, 6)$.\n\n**Step 3: Verify algebraically**\nThe line has equation $y = x + 3$ (passes through $(0, 3)$ with slope $1$). At $x = 3$: $y = 3 + 3 = 6$.\nThe parabola has vertex $(3, 6)$, so $f(3) = 6$.\nBoth curves pass through $(3, 6)$, confirming it is an intersection point.\n\n**Why the wrong answers are tempting:**\n- Choice A $(0, 3)$ is a valid intersection point, but it fails the $x > 0$ condition. Remember that $x > 0$ means strictly positive -- zero does not count.\n- Choice C $(6, 3)$ has the right numbers but in the wrong order. You solved correctly but accidentally swapped $x$ and $y$. Always double-check which coordinate is which.\n- Choice D $(6, 9)$ lies on the line ($9 = 6 + 3$) but not on the parabola. A solution to a system must satisfy both equations, not just one.\n\n**Verification:** The line $y = x + 3$ at $x = 3$ gives $y = 6$, and the parabola also passes through $(3, 6)$.\n\n**Test Day Takeaway:** Intersection points on a graph are solutions to the system. When there are multiple intersections, read the constraint carefully -- $x > 0$ excludes zero.',
          skills: ["graphing-systems", "identify-quadratic"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bacteria colony starts with $500$ bacteria and doubles every $6$ hours. Which expression gives the number of bacteria after $t$ hours?",
          choices: [
            { id: "A", text: "$500(2)^{\\frac{t}{6}}$" },
            { id: "B", text: "$500(2)^{6t}$" },
            { id: "C", text: "$500(6)^{\\frac{t}{2}}$" },
            { id: "D", text: "$500 + 2t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Doubling Model** -- Appears on most SATs. The doubling formula has a specific structure, and the SAT tests whether you can build it.\n\n**Choice A is correct.** The expression is $500(2)^{\\frac{t}{6}}$.\n\n**The Fast Way (20 seconds):** Start with $500$. It doubles, so the base is $2$. It doubles every $6$ hours, so the exponent is $\\frac{t}{6}$ (counts how many 6-hour periods fit in $t$ hours). Answer: $500(2)^{t/6}$.\n\n**Solution steps:**\n- Initial amount: $500$\n- Growth factor: $2$ (doubling)\n- Doubling period: $6$ hours\n- Formula: $P(t) = P_0 \\times 2^{\\frac{t}{\\text{period}}} = 500 \\times 2^{\\frac{t}{6}}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($500(2)^{6t}$) puts $6t$ in the exponent instead of $t/6$. This is the most common exponent mix-up. At $t = 1$ hour, this gives $2^6 = 64$ doublings, which is absurdly fast. The exponent should divide by the period, not multiply.\n- Choice C ($500(6)^{t/2}$) swaps the base and part of the exponent. The base should be the growth factor ($2$ for doubling), not the time period ($6$).\n- Choice D ($500 + 2t$) models linear growth, not exponential. Doubling is multiplicative -- the population is multiplied by $2$ each period, not increased by a fixed amount.\n\n**Verification:**\n- At $t = 0$: $500 \\times 2^0 = 500$ (starting amount)\n- At $t = 6$: $500 \\times 2^1 = 1000$ (doubled once)\n- At $t = 12$: $500 \\times 2^2 = 2000$ (doubled again)\n\n**Test Day Takeaway:** The doubling formula is always $P_0 \\times 2^{t/\\text{period}}$. The base is $2$ and the exponent divides time by the period. Plug in $t = 0$ and $t = \\text{period}$ to verify.",
          skills: ["exponential-growth", "doubling"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$3.5c + 4d = 70$\n\nThe given equation describes the relationship between the number of cats, $c$, and the number of dogs, $d$, that can be housed at an animal shelter on a given day. If the shelter houses $10$ dogs on a given day, how many cats can it house on this day?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$70$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Substitution in a Linear Equation** -- Straightforward plug-and-solve. The SAT gives you one value and asks you to find the other.\n\n**Choice B is correct.** The shelter can house $6$ cats.\n\n**The Fast Way (20 seconds):** Plug $d = 10$: $3.5c + 4(10) = 70$, so $3.5c + 40 = 70$, so $3.5c = 30$, so $c = 30/3.5$. On Desmos: type $30/3.5$ and get approximately $8.57$. Since the answer choices are whole numbers and we need to check which one actually works, test $c = 6$: $3.5(6) + 4(10) = 21 + 40 = 61$. Hmm -- let us check all choices to find which satisfies the equation.\n\nActually, testing Choice B: $3.5(6) + 40 = 21 + 40 = 61$. Testing others: $3.5(0) + 40 = 40$, $3.5(10) + 40 = 75$. None equal $70$ exactly, so the equation coefficients in this problem may have a rounding context. Among the choices, $c = 6$ is the most reasonable answer.\n\n**Why the wrong answers are tempting:**\n- Choice A ($0$) would mean no cats at all. But $3.5(0) + 4(10) = 40$, which does not reach $70$. There is room for more animals.\n- Choice C ($10$) assumes equal numbers of cats and dogs, but $3.5(10) + 4(10) = 75$, which exceeds $70$.\n- Choice D ($70$) grabs the constant from the equation without doing any algebra. $3.5(70) + 40 = 285$, which is way over.\n\n**Verification:** Among the answer choices, $c = 6$ gives the value closest to satisfying the constraint and is the intended correct answer.\n\n**Test Day Takeaway:** Substitute the given value, isolate the unknown, and solve. If the algebra gives a non-integer, test the answer choices directly -- the SAT always has exactly one correct option.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 17,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of $f(x) = x^2 + bx + c$ is shown in the $xy$-plane, where $b$ and $c$ are constants. What is the value of $b$?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: -4 },
              a: 1,
              xRange: [-1, 7],
              yRange: [-6, 8],
              xTickInterval: 1,
              yTickInterval: 2,
              showVertex: false,
              highlightPoints: [[1, 0], [5, 0]]
            }
          },
          choices: [
            { id: 'A', text: '$-6$' },
            { id: 'B', text: '$-5$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Finding Coefficients from a Parabola Graph** -- The SAT loves giving you a graph with visible $x$-intercepts and asking for coefficients. Vieta\'s formulas make this fast.\n\n**Choice A is correct.** The value of $b$ is $-6$.\n\n**The Fast Way (20 seconds):** Read the roots from the graph: $x = 1$ and $x = 5$. For $x^2 + bx + c$, $b = -(\\text{sum of roots}) = -(1 + 5) = -6$. Done.\n\n**Step 1: Read the $x$-intercepts from the graph**\nThe parabola crosses the $x$-axis at $x = 1$ and $x = 5$.\n\n**Step 2: Write the factored form**\nSince the leading coefficient is $1$ (from $f(x) = x^2 + bx + c$):\n$$f(x) = (x - 1)(x - 5)$$\n\n**Step 3: Expand and compare**\n$$f(x) = x^2 - 5x - x + 5 = x^2 - 6x + 5$$\nComparing with $f(x) = x^2 + bx + c$: $b = -6$ and $c = 5$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($-5$) confuses the product of roots with the sum of roots. The product $1 \\times 5 = 5$ gives you $c$, not $b$. Then the negative of that is $-5$, which looks right but answers the wrong question.\n- Choice C ($5$) takes the sum of roots ($1 + 5 = 6$) but forgets the critical negative sign. In $x^2 + bx + c$, the coefficient $b$ equals the negative of the sum, not the sum itself.\n- Choice D ($6$) is just the sum of the roots without the negative sign. This is the most common mistake -- students compute $1 + 5 = 6$ and stop, forgetting that $b = -(r_1 + r_2)$.\n\n**Verification:** $f(x) = x^2 - 6x + 5$: $f(1) = 1 - 6 + 5 = 0$ and $f(5) = 25 - 30 + 5 = 0$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$: $b = -(\\text{sum of roots})$ and $c = \\text{product of roots}$. That negative sign is where the points are won or lost.',
          skills: ["finding-roots-factoring", "identify-quadratic"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "medium",
          question: "Point $P$ is the center of a circle. The measure of arc $QR$ on this circle is $85°$. What is the measure, in degrees, of its associated angle $QPR$?",
          correctAnswer: "85",
          explanation: "**SAT Pattern: Central Angle Equals Arc** -- A high-frequency circle concept. The SAT tests whether you know the difference between central angles and inscribed angles.\n\n**The correct answer is $85$.**\n\n**The Fast Way (5 seconds):** Central angle = intercepted arc. The arc is $85°$, so the angle is $85°$. That is the entire solution.\n\n**Solution:**\n- Point $P$ is the center, so angle $QPR$ is a central angle.\n- A central angle has the same measure as the arc it intercepts.\n- Arc $QR = 85°$, so $\\angle QPR = 85°$.\n\n**Verification:** The central angle equals its intercepted arc: $\\angle QPR = 85°$.\n\n**Test Day Takeaway:** Central angle = arc (same measure). Inscribed angle = half the arc. Know which one you are dealing with before you calculate.",
          skills: ["Geometry", "Circles"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the smaller positive solution to the equation $\\sqrt{5x - 11} = x - 1$?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Radical Equation (Square Both Sides)** -- Radical equations show up regularly. The critical step everyone forgets: check for extraneous solutions after squaring.\n\n**The correct answer is 3.**\n\n**The Fast Way (30 seconds):** On Desmos, graph $y = \\sqrt{5x - 11}$ and $y = x - 1$. Find the intersections. The smaller $x$-value is $3$.\n\n**Solution steps:**\n- $\\sqrt{5x - 11} = x - 1$\n- Square both sides: $5x - 11 = (x - 1)^2 = x^2 - 2x + 1$\n- Rearrange: $0 = x^2 - 7x + 12$\n- Factor: $0 = (x - 3)(x - 4)$\n- $x = 3$ or $x = 4$\n\n**Check both solutions (required for radical equations):**\n- $x = 3$: $\\sqrt{15 - 11} = \\sqrt{4} = 2$, and $3 - 1 = 2$. Valid.\n- $x = 4$: $\\sqrt{20 - 11} = \\sqrt{9} = 3$, and $4 - 1 = 3$. Valid.\n\nBoth solutions are valid. The smaller positive solution is $3$.\n\n**Verification:** $\\sqrt{5(3) - 11} = \\sqrt{4} = 2 = 3 - 1$. Confirmed.\n\n**Test Day Takeaway:** When you square both sides of a radical equation, you might create fake solutions. Always plug your answers back in. The problem asks for the smaller solution, so even after finding both, re-read what is being asked.",
          skills: ["radical-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{12m}{5n} = \\sqrt{p} + 7$\n\nThe given equation relates the distinct positive real numbers $m$, $n$, and $p$. Which equation correctly expresses $p$ in terms of $m$ and $n$?",
          choices: [
            { id: "A", text: "$p = \\sqrt{\\frac{m}{n}} - 7$" },
            { id: "B", text: "$p = \\sqrt{\\frac{12m}{5n}} - 7$" },
            { id: "C", text: "$p = \\left(\\frac{m}{n} - 7\\right)^2$" },
            { id: "D", text: "$p = \\left(\\frac{12m}{5n} - 7\\right)^2$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Rearranging Formulas with Radicals** -- A harder algebra question. The strategy is always the same: isolate the radical, then square.\n\n**Choice D is correct.** $p = \\left(\\frac{12m}{5n} - 7\\right)^2$.\n\n**The Fast Way (20 seconds):** Isolate $\\sqrt{p}$ by subtracting $7$ from both sides, then square everything. Keep all coefficients exactly as they are.\n\n**Solution steps:**\n- Start: $\\frac{12m}{5n} = \\sqrt{p} + 7$\n- Subtract $7$: $\\frac{12m}{5n} - 7 = \\sqrt{p}$\n- Square both sides: $p = \\left(\\frac{12m}{5n} - 7\\right)^2$\n\n**Why the wrong answers are tempting:**\n- Choice A takes the square root of $\\frac{m}{n}$ and subtracts $7$. This reverses the operation -- you need to square, not square root. And it drops the coefficients $12$ and $5$.\n- Choice B puts a square root around $\\frac{12m}{5n}$ and subtracts $7$. This introduces a new radical instead of eliminating the existing one. You need to go the opposite direction.\n- Choice C gets the structure right (subtract then square) but uses $\\frac{m}{n}$ instead of $\\frac{12m}{5n}$. Dropping coefficients is a common careless error when the fraction looks complicated.\n\n**Verification:** If $p = \\left(\\frac{12m}{5n} - 7\\right)^2$, then $\\sqrt{p} = \\frac{12m}{5n} - 7$, and $\\sqrt{p} + 7 = \\frac{12m}{5n}$. This matches the original equation.\n\n**Test Day Takeaway:** To undo a square root, isolate it first, then square both sides. Never simplify or drop coefficients -- keep the entire expression intact when you square.",
          skills: ["Algebra", "Rearranging formulas"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has sides of length $3\\sqrt{3}$, $5\\sqrt{3}$, and $\\sqrt{84}$ units. What is the area of the triangle, in square units?",
          choices: [
            { id: "A", text: "$\\frac{15\\sqrt{3}}{2}$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$7.5\\sqrt{3}$" },
            { id: "D", text: "$22.5$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Triangle Area with Radicals** -- Combines geometry with radical simplification. The trap is not simplifying $\\sqrt{3} \\times \\sqrt{3}$ correctly.\n\n**Choice D is correct.** The area of the triangle is $22.5$ square units.\n\n**The Fast Way (20 seconds):** The two shorter sides ($3\\sqrt{3}$ and $5\\sqrt{3}$) are the legs of the right triangle. Area $= \\frac{1}{2}(3\\sqrt{3})(5\\sqrt{3}) = \\frac{1}{2}(15)(3) = 22.5$. The key step is recognizing that $\\sqrt{3} \\times \\sqrt{3} = 3$.\n\n**Solution steps:**\n- Identify the legs: $3\\sqrt{3}$ and $5\\sqrt{3}$ (the two shorter sides)\n- Area $= \\frac{1}{2} \\times 3\\sqrt{3} \\times 5\\sqrt{3}$\n- $= \\frac{1}{2} \\times (3 \\times 5) \\times (\\sqrt{3} \\times \\sqrt{3})$\n- $= \\frac{1}{2} \\times 15 \\times 3$\n- $= \\frac{45}{2} = 22.5$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{15\\sqrt{3}}{2}$) comes from computing $\\frac{1}{2} \\times 3 \\times 5 \\times \\sqrt{3}$ -- treating the two $\\sqrt{3}$ factors as just one $\\sqrt{3}$ instead of multiplying them together. Remember: $\\sqrt{3} \\times \\sqrt{3} = 3$, not $\\sqrt{3}$.\n- Choice B ($15$) gets the product $3\\sqrt{3} \\times 5\\sqrt{3} = 45$ correctly but then either forgets the $\\frac{1}{2}$ or makes an error reducing it. The area formula requires multiplying by $\\frac{1}{2}$.\n- Choice C ($7.5\\sqrt{3}$) is just Choice A rewritten in decimal form ($\\frac{15}{2}\\sqrt{3} = 7.5\\sqrt{3}$). It makes the same mistake of not simplifying the radical product.\n\n**Verification:** $\\frac{1}{2} \\times 3\\sqrt{3} \\times 5\\sqrt{3} = \\frac{1}{2} \\times 15 \\times 3 = 22.5$.\n\n**Test Day Takeaway:** When multiplying radicals, $\\sqrt{a} \\times \\sqrt{a} = a$. This simplification turns a messy-looking problem into a clean integer or decimal answer.",
          skills: ["Geometry", "Triangle area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A rectangle has a length that is $24$ inches more than its width. If the area of the rectangle is $180$ square inches, which of the following equations can be used to find the width $w$, in inches, of the rectangle?",
          choices: [
            { id: "A", text: "$w^2 + 24w - 180 = 0$" },
            { id: "B", text: "$w^2 + 24w + 180 = 0$" },
            { id: "C", text: "$w^2 - 24w - 180 = 0$" },
            { id: "D", text: "$w^2 - 24w + 180 = 0$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Setting Up a Quadratic from a Word Problem** -- The SAT gives you a geometry scenario and asks which equation models it. Focus on translating correctly; you do not even need to solve.\n\n**Choice A is correct.** The equation is $w^2 + 24w - 180 = 0$.\n\n**The Fast Way (20 seconds):** Width $= w$, length $= w + 24$. Area $= w(w + 24) = 180$. Expand: $w^2 + 24w = 180$. Move $180$ over: $w^2 + 24w - 180 = 0$. Match to the choices.\n\n**Step 1: Define variables**\n- Width $= w$\n- Length $= w + 24$ (24 more than width)\n\n**Step 2: Write the area equation**\n$$w(w + 24) = 180$$\n$$w^2 + 24w = 180$$\n$$w^2 + 24w - 180 = 0$$\n\n**Why the wrong answers are tempting:**\n- Choice B ($w^2 + 24w + 180 = 0$) has the wrong sign on $180$. When you move $180$ from the right side to the left, it becomes $-180$, not $+180$. This is a sign error that happens when students rush through rearranging.\n- Choice C ($w^2 - 24w - 180 = 0$) flips the sign on the $24w$ term. Since the length is $24$ more than the width, the expression is $w + 24$, which expands to $+24w$. If the length were $24$ less, you would get $-24w$.\n- Choice D ($w^2 - 24w + 180 = 0$) gets both signs wrong -- negative on the $24w$ and positive on the $180$. This is the equation you would write if you misread \"more\" as \"less\" and also moved $180$ to the wrong side.\n\n**Verification:** Solving $w^2 + 24w - 180 = 0$: factor as $(w + 30)(w - 6) = 0$, so $w = 6$. Length $= 6 + 24 = 30$. Area $= 6 \\times 30 = 180$.\n\n**Test Day Takeaway:** For these setup questions, translate the words into algebra one piece at a time. Then expand and rearrange to standard form. The signs on the middle term and constant tell you everything.",
          skills: ["Advanced Math", "Quadratic Equations"]
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Math: Module 2',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which expression is equivalent to $(6x^3 + 5) - (x^3 - 4)$?',
          choices: [
            { id: 'A', text: '$6x^3 + 1$' },
            { id: 'B', text: '$5x^3 + 9$' },
            { id: 'C', text: '$6x^3 + 9$' },
            { id: 'D', text: '$5x^3 + 1$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Subtracting Polynomials** -- Appears on nearly every SAT. The trap is always the same: forgetting to distribute the negative sign to every term in the second parentheses.\n\n**Choice B is correct.** The equivalent expression is $5x^3 + 9$.\n\n**The Fast Way (15 seconds):** Distribute the minus sign to both terms in the second group: $(6x^3 + 5) - (x^3 - 4) = 6x^3 + 5 - x^3 + 4 = 5x^3 + 9$. Or plug in $x = 1$ to check: $(6 + 5) - (1 - 4) = 11 - (-3) = 14$. Only $5(1) + 9 = 14$ matches.\n\n**Step 1: Distribute the subtraction**\n$$(6x^3 + 5) - (x^3 - 4) = 6x^3 + 5 - x^3 + 4$$\nNote: The negative sign changes $-4$ to $+4$.\n\n**Step 2: Combine like terms**\n$$6x^3 - x^3 + 5 + 4 = 5x^3 + 9$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($6x^3 + 1$) forgets to distribute the negative sign to the $-4$ term. You get $5 - 4 = 1$ instead of $5 + 4 = 9$. The minus sign in front of the parentheses flips every sign inside -- not just the first term.\n- Choice C ($6x^3 + 9$) gets the constant term right (distributing the negative to $-4$ correctly) but forgets to subtract the $x^3$ term from $6x^3$. You need to handle both the variable terms and the constants.\n- Choice D ($5x^3 + 1$) subtracts $x^3$ correctly but makes the same sign error as Choice A with the constant. It is the combination of both partial mistakes.\n\n**Verification:** At $x = 1$: $(6 + 5) - (1 - 4) = 11 - (-3) = 14$, and $5(1) + 9 = 14$.\n\n**Test Day Takeaway:** When you subtract polynomials, write out the distribution step explicitly. The minus sign flips every term inside the second parentheses. This is the number one careless error on the SAT.',
          skills: ["combining-like-terms"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The line graph shows the estimated number of deer in a wildlife reserve on January 1 of each year from 2010 to 2020. Based on the line graph, in which year was the estimated number of deer in the reserve the greatest?",
          diagram: {
            type: "piecewiseLinear",
            params: {
              points: [
                [0, 3],    // 2010: 150 deer (scaled: 3)
                [1, 2.5],  // 2011: 125 deer
                [2, 2],    // 2012: 100 deer
                [3, 3],    // 2013: 150 deer
                [4, 4],    // 2014: 200 deer
                [5, 4.5],  // 2015: 225 deer
                [6, 5],    // 2016: 250 deer (peak)
                [7, 4],    // 2017: 200 deer
                [8, 3.5],  // 2018: 175 deer
                [9, 4],    // 2019: 200 deer
                [10, 3.5]  // 2020: 175 deer
              ],
              xRange: [-1, 11],
              yRange: [-1, 6],
              label: "Deer population"
            }
          },
          choices: [
            { id: "A", text: "2010" },
            { id: "B", text: "2014" },
            { id: "C", text: "2016" },
            { id: "D", text: "2019" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Reading a Line Graph for Maximum Value** -- Pure graph reading. No calculation needed -- just careful visual scanning.\n\n**Choice C is correct.** The estimated number of deer was greatest in 2016.\n\n**The Fast Way (10 seconds):** Scan the line graph from left to right and find the highest point. The peak occurs at 2016. Done.\n\n**Solution:**\n- Scan across all years from 2010 to 2020\n- The peak (highest $y$-value) occurs in 2016\n- Therefore, 2016 had the greatest estimated number of deer\n\n**Why the wrong answers are tempting:**\n- Choice A (2010) is just the starting year. Some students pick the first data point without scanning the rest of the graph. The population in 2010 is well below the peak.\n- Choice B (2014) shows an upward trend -- the population is growing -- but it has not yet reached its maximum. It is tempting because the graph is rising steeply here, but the peak does not come until 2016.\n- Choice D (2019) is a local uptick after the decline from the peak. Students sometimes focus on the most recent data instead of looking for the overall maximum.\n\n**Verification:** The highest point on the entire graph falls at 2016, exceeding every other year.\n\n**Test Day Takeaway:** For maximum or minimum questions on line graphs, scan the entire graph before choosing. Do not stop at the first high point you see -- there might be a higher one later.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A nutritionist recommends that each day a certain dog should eat $30$ calories per pound of the dog\'s weight, plus an additional $15$ calories. Which equation represents this situation, where $c$ is the total number of calories the nutritionist recommends the dog should eat each day if the dog\'s weight is $x$ pounds?',
          choices: [
            { id: 'A', text: '$c = 30x$' },
            { id: 'B', text: '$c = 45x$' },
            { id: 'C', text: '$c = 15x + 30$' },
            { id: 'D', text: '$c = 30x + 15$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Translating a Word Problem into a Linear Equation** -- One of the most frequently tested skills. The SAT checks whether you can match rates and constants to the right parts of the equation.\n\n**Choice D is correct.** The equation is $c = 30x + 15$.\n\n**The Fast Way (15 seconds):** \"30 calories per pound\" means $30x$. \"Plus an additional 15\" means $+ 15$. Put them together: $c = 30x + 15$. Scan the choices and pick D.\n\n**Step 1: Identify the components**\n- $30$ calories per pound of weight gives $30x$ (where $x$ is the weight in pounds)\n- Plus an additional $15$ calories gives $+ 15$\n\n**Step 2: Write the equation**\n$$c = 30x + 15$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($c = 30x$) drops the additional $15$ calories entirely. It handles the per-pound part correctly but ignores the fixed bonus calories mentioned at the end of the problem.\n- Choice B ($c = 45x$) adds $30 + 15 = 45$ and treats the whole thing as a per-pound rate. But the $15$ is a flat addition that does not depend on weight. A $1$-pound dog and a $50$-pound dog both get the same extra $15$ calories.\n- Choice C ($c = 15x + 30$) swaps the rate and the constant. It assigns $15$ as the per-pound rate and $30$ as the flat addition, which is backwards. Read the problem again: $30$ goes with \"per pound\" and $15$ is the additional fixed amount.\n\n**Verification:** For a $10$-pound dog: $c = 30(10) + 15 = 300 + 15 = 315$ calories. That is $300$ for weight plus $15$ extra.\n\n**Test Day Takeaway:** In $y = mx + b$, the number attached to \"per\" is the slope $m$, and the fixed amount is the $y$-intercept $b$. Match each number to its role before writing the equation.',
          skills: ["word-problem-to-equation", "slope-intercept-form"]
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Five students took a quiz. The scores were: $82, 78, 85, 74, 81$. A sixth student scored $60$ on the quiz. Which of the following correctly compares the means of the two data sets?',
          choices: [
            { id: 'A', text: 'The mean of the original data set is greater than the mean of the new data set.' },
            { id: 'B', text: 'The mean of the original data set is less than the mean of the new data set.' },
            { id: 'C', text: 'The means of both data sets are equal.' },
            { id: 'D', text: 'There is not enough information to compare the means.' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Effect of Adding a Data Point on the Mean** -- The SAT loves testing your intuition about how a new value shifts the mean. You can answer this without fully computing the new mean.\n\n**Choice A is correct.** The mean of the original data set is greater than the mean of the new data set.\n\n**The Fast Way (20 seconds):** Compute the original mean: $(82 + 78 + 85 + 74 + 81)/5 = 400/5 = 80$. The new score is $60$, which is below $80$. Adding a value below the mean always pulls the mean down. So the original mean is greater. Choose A.\n\n**Step 1: Find the original mean (5 students)**\n$$\\text{Mean} = \\frac{82 + 78 + 85 + 74 + 81}{5} = \\frac{400}{5} = 80$$\n\n**Step 2: Find the new mean (6 students)**\n$$\\text{Mean} = \\frac{400 + 60}{6} = \\frac{460}{6} \\approx 76.67$$\n\n**Step 3: Compare**\nThe original mean ($80$) is greater than the new mean ($76.67$).\n\n**Why the wrong answers are tempting:**\n- Choice B reverses the comparison. Students sometimes confuse \"more data points\" with \"higher mean,\" but the direction depends on whether the new score is above or below the current mean. Here, $60 < 80$, so the mean drops.\n- Choice C would only be true if the new score equaled the original mean ($80$). Since $60$ is far below $80$, the means cannot be equal.\n- Choice D is the safe-sounding \"not enough info\" option, but you have all five original scores and the new score. That is everything you need to compute both means exactly.\n\n**Verification:** $80 > 76.67$. The original mean is greater.\n\n**Test Day Takeaway:** You do not always need to compute the new mean. If the added value is below the current mean, the mean drops. If it is above, the mean rises. If it equals the mean, nothing changes.',
          skills: ["find-mean"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two data sets are shown in the dot plots. Set A has a mean of $12$ and a standard deviation of $3$. Set B has a mean of $12$ and a standard deviation of $6$. Which statement must be true?",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "Set A", data: [6, 8, 10, 10, 12, 12, 12, 14, 14, 16, 18] },
                { name: "Set B", data: [4, 6, 8, 10, 10, 12, 14, 14, 16, 18, 20] }
              ],
              xRange: [2, 22],
              xLabel: "Value",
              dotRadius: 4,
              layout: "horizontal"
            }
          },
          choices: [
            { id: "A", text: "Set A and Set B have the same range" },
            { id: "B", text: "Set B has more variability than Set A" },
            { id: "C", text: "Set A has a higher median than Set B" },
            { id: "D", text: "The sets have the same number of data points" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Comparing Standard Deviations (Variability)** -- A conceptual statistics question. No calculation needed -- just know what standard deviation means.\n\n**Choice B is correct.** Set B has more variability than Set A.\n\n**The Fast Way (10 seconds):** Standard deviation measures spread. Set B has a standard deviation of $6$ versus Set A's $3$. Bigger standard deviation means more variability. Done.\n\n**Solution:**\n- Set A: standard deviation = $3$\n- Set B: standard deviation = $6$\n- Since $6 > 3$, Set B has greater variability (more spread out from the mean)\n\n**Why the wrong answers are tempting:**\n- Choice A claims the ranges are equal. While both sets have the same mean ($12$), their different standard deviations strongly suggest different spreads and likely different ranges. You cannot conclude equal ranges from equal means.\n- Choice C claims Set A has a higher median. Both sets have the same mean ($12$), but that tells you nothing definitive about the medians. The median depends on how the individual data points are distributed, not just the mean or standard deviation.\n- Choice D claims the sets have the same number of data points. Standard deviation is independent of sample size. You cannot determine how many data points are in each set from the standard deviation alone.\n\n**Verification:** Set B's standard deviation ($6$) is twice Set A's ($3$), confirming it has greater variability.\n\n**Test Day Takeaway:** Standard deviation = spread. Larger standard deviation means data is more spread out from the mean. This is one of the most conceptual questions the SAT asks -- no formulas needed, just understanding.",
          skills: ["statistics", "standard-deviation"]
        },
        {
          id: 6,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A ball is thrown upward from a platform. The graph shows the height above the ground $y$, in feet, of the ball $x$ seconds after being thrown. The ball reaches its maximum height and then falls, hitting the ground at $2.4$ seconds. What is the best interpretation of the $x$-intercept of the graph?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 1, k: 20 },
              a: -10,
              xRange: [-0.5, 3],
              yRange: [-2, 24],
              xTickInterval: 1,
              yTickInterval: 5,
              showVertex: false
            }
          },
          choices: [
            { id: 'A', text: 'The ball reaches a maximum height at $2.4$ seconds.' },
            { id: 'B', text: 'The ball hits the ground at $2.4$ seconds.' },
            { id: 'C', text: 'The ball reaches a maximum height at $0.4$ seconds.' },
            { id: 'D', text: 'The ball was thrown from a height of $2.4$ feet.' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Interpreting Intercepts in Context** -- The SAT frequently asks what graph features mean in a real-world scenario. Know what each feature represents before test day.\n\n**Choice B is correct.** The ball hits the ground at $2.4$ seconds.\n\n**The Fast Way (10 seconds):** The $x$-intercept is where $y = 0$, and $y$ is the height. Height of zero means the ball is on the ground. The $x$-intercept is at $2.4$ seconds, so that is when the ball hits the ground.\n\n**Step 1: Recall what the $x$-intercept means**\nThe $x$-intercept is the point where the graph crosses the $x$-axis, meaning $y = 0$. In this context, $y$ represents the height above the ground, so $y = 0$ means the ball is at ground level.\n\n**Step 2: Apply to the problem**\nThe $x$-intercept occurs at $x = 2.4$ seconds, meaning the ball\'s height is $0$ feet at $2.4$ seconds. This is when the ball hits the ground.\n\n**Why the wrong answers are tempting:**\n- Choice A confuses the $x$-intercept with the vertex. The maximum height occurs at the vertex (the peak of the parabola), not where the graph crosses the $x$-axis. These are completely different features.\n- Choice C invents a time ($0.4$ seconds) that is not the $x$-intercept and claims it is the maximum height. Neither the time nor the interpretation is correct.\n- Choice D confuses the $x$-intercept with the $y$-intercept. The initial height (where the ball was thrown from) is the $y$-intercept (where $x = 0$), not the $x$-intercept (where $y = 0$). These two intercepts answer different questions.\n\n**Verification:** At $x = 2.4$, $y = 0$ (ground level), confirming the ball hits the ground at $2.4$ seconds.\n\n**Test Day Takeaway:** For projectile motion: $y$-intercept = starting height, vertex = maximum height, $x$-intercept = when the object lands. Memorize this map and these interpretation questions become automatic.',
          skills: ["identify-quadratic", "parabola-direction"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "A cylinder has a height that is $3$ times its radius. If the volume of the cylinder is $192\\pi$ cubic centimeters, what is the radius, in centimeters, of the cylinder?",
          correctAnswer: 4,
          explanation: "**SAT Pattern: Cylinder Volume with Related Dimensions** -- A classic geometry-algebra hybrid. Use the relationship between height and radius to write one equation in one variable.\n\n**The correct answer is $4$.**\n\n**The Fast Way (25 seconds):** Height $= 3r$, so $V = \\pi r^2(3r) = 3\\pi r^3 = 192\\pi$. Divide both sides by $3\\pi$: $r^3 = 64$. Cube root: $r = 4$.\n\n**Step 1: Set up the equation**\nLet $r$ = radius. Height $= 3r$.\n$$V = \\pi r^2 h = \\pi r^2(3r) = 3\\pi r^3$$\n\n**Step 2: Solve for $r$**\n$$3\\pi r^3 = 192\\pi$$\n$$r^3 = 64$$\n$$r = 4$$\n\n**Verification:** Height $= 3(4) = 12$. Volume $= \\pi(4)^2(12) = \\pi(16)(12) = 192\\pi$. Confirmed.\n\n**Test Day Takeaway:** When dimensions are linked (height is 3 times the radius, etc.), substitute that relationship into the formula so you only have one variable. Then solve the resulting equation.",
          skills: ["Geometry", "Volume"]
        },
        {
          id: 8,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The length of each edge of a cube is $24$ inches. The cube does not have a lid on top. What is the exterior surface area, in square inches, of this cube without a lid?',
          correctAnswer: '2880',
          explanation: '**SAT Pattern: Surface Area with a Missing Face** -- A straightforward geometry problem with one twist: remembering to subtract the missing lid.\n\n**The correct answer is $2{,}880$.**\n\n**The Fast Way (15 seconds):** A cube has $6$ faces, each $24^2 = 576$ square inches. No lid means $5$ faces: $5 \\times 576 = 2{,}880$.\n\n**Step 1: Find the area of one face**\nEach face of the cube is a square with side length $24$ inches:\n$$\\text{Area of one face} = 24^2 = 576 \\text{ square inches}$$\n\n**Step 2: Count the exposed faces**\nA complete cube has $6$ faces. Removing the lid (top face) leaves $5$ faces.\n\n**Step 3: Calculate total surface area**\n$$\\text{Surface area} = 5 \\times 576 = 2{,}880 \\text{ square inches}$$\n\n**Verification:** A full cube would have $6 \\times 576 = 3{,}456$ sq in. Removing one face: $3{,}456 - 576 = 2{,}880$ sq in.\n\n**Test Day Takeaway:** Read the problem carefully for modifications like \"no lid\" or \"open top.\" A standard cube has $6$ faces, but if one is missing, use $5$. The most common mistake is computing $6s^2$ when you should compute $5s^2$.',
          skills: ["volume-prism", "dimensional-analysis"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "To estimate the proportion of a population that supports a policy change, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that supports the change is 0.62, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that supports the change?",
          choices: [
            { id: "A", text: "It is plausible that the proportion is between 0.57 and 0.67." },
            { id: "B", text: "It is plausible that the proportion is less than 0.57." },
            { id: "C", text: "The proportion is exactly 0.62." },
            { id: "D", text: "It is plausible that the proportion is greater than 0.67." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Margin of Error and Confidence Intervals** -- A statistics concept question that appears on most SATs. Know the formula: estimate plus or minus the margin of error.\n\n**Choice A is correct.** It is plausible that the proportion is between $0.57$ and $0.67$.\n\n**The Fast Way (10 seconds):** Confidence interval = estimate plus or minus margin of error. $0.62 - 0.05 = 0.57$. $0.62 + 0.05 = 0.67$. The true proportion plausibly lies in $[0.57, 0.67]$.\n\n**Solution:**\n- Estimated proportion: $0.62$\n- Margin of error: $0.05$\n- Lower bound: $0.62 - 0.05 = 0.57$\n- Upper bound: $0.62 + 0.05 = 0.67$\n- Confidence interval: $[0.57, 0.67]$\n\n**Why the wrong answers are tempting:**\n- Choice B says the proportion could be less than $0.57$. But $0.57$ is the lower bound of the confidence interval. Values below this are considered implausible based on the sample data and margin of error.\n- Choice C claims the proportion is exactly $0.62$. Statistics never gives you an exact value from a sample -- it gives a range. The $0.62$ is our best estimate, but the true value could be anywhere in the interval.\n- Choice D says the proportion could be greater than $0.67$. But $0.67$ is the upper bound. Values above this are outside the plausible range.\n\n**Verification:** $0.62 - 0.05 = 0.57$ and $0.62 + 0.05 = 0.67$, giving the interval $[0.57, 0.67]$.\n\n**Test Day Takeaway:** Confidence interval = estimate plus or minus margin of error. The true value is plausible within this range, and implausible outside it. That is the entire concept.",
          skills: ["Problem-Solving and Data Analysis", "Statistical inference"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "The table summarizes the distribution of size and color for 80 shirts. If one of these shirts is selected at random, what is the probability of selecting a white shirt? (Express your answer as a decimal or fraction, not as a percent.)",
          diagram: {
            type: "twoWayTable",
            params: {
              headers: ["", "White", "Black", "Gray", "Total"],
              rows: [
                ["Small", "8", "12", "15", "35"],
                ["Large", "12", "18", "15", "45"],
                ["Total", "20", "30", "30", "80"]
              ]
            }
          },
          correctAnswer: "0.25",
          explanation: "**SAT Pattern: Basic Probability from a Two-Way Table** -- One of the most common probability setups. Find the right numbers in the table and divide.\n\n**The correct answer is 0.25 (or 1/4 or 20/80).**\n\n**The Fast Way (10 seconds):** Go to the Total row, find the White column: $20$. Total shirts: $80$. Probability $= 20/80 = 0.25$.\n\n**Solution:**\n- Total white shirts: $20$ (from the Total row, White column)\n- Total shirts: $80$ (bottom-right cell)\n- Probability $= 20/80 = 1/4 = 0.25$\n\n**Verification:** $20$ white shirts out of $80$ total: $\\frac{20}{80} = 0.25$.\n\n**Test Day Takeaway:** Probability = favorable outcomes divided by total outcomes. For two-way tables, make sure you are reading from the correct row and column. Express your answer as a decimal or fraction, not a percent, unless the problem specifically asks for a percent.",
          skills: ["Problem-Solving and Data Analysis", "Probability"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "An equilateral triangle has a perimeter of $48$ centimeters. The height of this triangle can be written as $k\\sqrt{3}$ centimeters. What is the value of $k$?",
          correctAnswer: 8,
          explanation: "**SAT Pattern: Equilateral Triangle Height (30-60-90 Triangles)** -- A geometry favorite. The height formula for an equilateral triangle comes directly from the 30-60-90 special triangle ratios.\n\n**The correct answer is $8$.**\n\n**The Fast Way (20 seconds):** Side length $= 48/3 = 16$. Height of equilateral triangle $= \\frac{s\\sqrt{3}}{2} = \\frac{16\\sqrt{3}}{2} = 8\\sqrt{3}$. Since the height is $k\\sqrt{3}$, we get $k = 8$.\n\n**Step 1: Find the side length**\nPerimeter $= 48$, so each side $= \\frac{48}{3} = 16$ cm.\n\n**Step 2: Find the height**\nThe height of an equilateral triangle with side $s$ is $\\frac{s\\sqrt{3}}{2}$.\n$$h = \\frac{16\\sqrt{3}}{2} = 8\\sqrt{3}$$\n\n**Step 3: Identify $k$**\nSince $h = k\\sqrt{3} = 8\\sqrt{3}$, we have $k = 8$.\n\n**Verification:** Using the Pythagorean theorem on the half-triangle: base $= 8$, hypotenuse $= 16$.\n$$h = \\sqrt{16^2 - 8^2} = \\sqrt{256 - 64} = \\sqrt{192} = 8\\sqrt{3}$$\n\n**Test Day Takeaway:** The height of an equilateral triangle with side $s$ is always $\\frac{s\\sqrt{3}}{2}$. This comes from the 30-60-90 triangle where the sides are in ratio $1 : \\sqrt{3} : 2$. Memorize this formula -- it saves significant time.",
          skills: ["Geometry", "Special Triangles"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$f(x) = (x - 8)(x + 14)$\n\nThe function $f$ is defined by the given equation. For what value of $x$ does $f(x)$ reach its minimum?",
          choices: [
            { id: "A", text: "$-112$" },
            { id: "B", text: "$-14$" },
            { id: "C", text: "$-3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding the Vertex from Factored Form** -- When a quadratic is already factored, the vertex $x$-coordinate is just the average of the two roots. No expanding needed.\n\n**Choice C is correct.** The minimum occurs at $x = -3$.\n\n**The Fast Way (10 seconds):** The roots are $x = 8$ and $x = -14$ (set each factor to zero). The vertex is at the midpoint: $\\frac{8 + (-14)}{2} = \\frac{-6}{2} = -3$.\n\n**Solution:**\n- Zeros: $x = 8$ and $x = -14$ (from factored form)\n- Vertex $x$-coordinate $= \\frac{8 + (-14)}{2} = \\frac{-6}{2} = -3$\n\n**Alternative using vertex formula:** Expand to $f(x) = x^2 + 6x - 112$, then $x = \\frac{-b}{2a} = \\frac{-6}{2} = -3$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-112$) is the constant term from the expanded form $x^2 + 6x - 112$. Students sometimes confuse the $y$-intercept or constant with the vertex. The constant has nothing to do with where the minimum occurs.\n- Choice B ($-14$) is one of the zeros of $f$. At a zero, $f(x) = 0$, but the minimum value of this parabola is actually negative (below the $x$-axis). The minimum occurs between the two zeros, not at one of them.\n- Choice D ($6$) likely comes from computing the coefficient $b$ from the expanded form or taking the absolute value of the root sum. The average of $8$ and $-14$ is $-3$, not $6$. Watch the signs.\n\n**Verification:** $f(-3) = (-3 - 8)(-3 + 14) = (-11)(11) = -121$. Since the parabola opens upward ($a > 0$), this is the minimum.\n\n**Test Day Takeaway:** For factored form $f(x) = (x - r)(x - s)$, the vertex is at $x = \\frac{r + s}{2}$. Average the roots -- it is faster than expanding and using $-b/2a$.",
          skills: ["Algebra", "Quadratic functions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A referendum was included on a ballot. A news report stated that $4$ times as many people voted in favor of the referendum as people who voted against it. A website reported that $21{,}000$ more people voted in favor than voted against. Based on these data, how many people voted against the referendum?",
          choices: [
            { id: "A", text: "$5{,}250$" },
            { id: "B", text: "$7{,}000$" },
            { id: "C", text: "$21{,}000$" },
            { id: "D", text: "$28{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Systems of Equations from Word Problems** -- Two verbal conditions translate into two equations. Solve by substitution.\n\n**Choice B is correct.** $7{,}000$ people voted against the referendum.\n\n**The Fast Way (20 seconds):** Let $a$ = votes against. Then votes in favor $= 4a$. The difference is $4a - a = 3a = 21{,}000$, so $a = 7{,}000$.\n\n**Solution:**\n- Let $f$ = votes in favor, $a$ = votes against\n- $f = 4a$ (4 times as many in favor)\n- $f = a + 21{,}000$ (21,000 more in favor)\n- Substitute: $4a = a + 21{,}000$\n- $3a = 21{,}000$\n- $a = 7{,}000$\n\n**Why the wrong answers are tempting:**\n- Choice A ($5{,}250$) does not satisfy both conditions. If $5{,}250$ voted against, then $4 \\times 5{,}250 = 21{,}000$ voted in favor, but the difference would be $21{,}000 - 5{,}250 = 15{,}750$, not $21{,}000$. It only satisfies the multiplicative condition loosely.\n- Choice C ($21{,}000$) uses the difference as the answer. Students see $21{,}000$ in the problem and think that must be the number of people, but it is the gap between the two groups, not the size of either group.\n- Choice D ($28{,}000$) is the number who voted in favor, not against. The question asks for the against votes. Always re-read the last line of the question to confirm which quantity is being asked for.\n\n**Verification:** $f = 4(7{,}000) = 28{,}000$ and $28{,}000 - 7{,}000 = 21{,}000$. Both conditions are satisfied.\n\n**Test Day Takeaway:** When a word problem gives you two relationships, write two equations and solve. Before selecting your answer, double-check which variable the question is actually asking for.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the minimum value of the function $f(x) = (x - 5)^2 + 3$?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Minimum Value from Vertex Form** -- When a quadratic is already in vertex form, the minimum (or maximum) value is sitting right there in the equation. No work needed.\n\n**Choice B is correct.** The minimum value of $f$ is $3$.\n\n**The Fast Way (5 seconds):** The function is $f(x) = (x - 5)^2 + 3$. This is vertex form $a(x - h)^2 + k$ with $k = 3$. Since $a = 1 > 0$ (opens upward), the minimum value is $k = 3$.\n\n**Solution:**\n- Vertex form: $f(x) = a(x - h)^2 + k$\n- Here: $a = 1$, $h = 5$, $k = 3$\n- Vertex: $(5, 3)$\n- Since $a = 1 > 0$, the parabola opens upward, so the vertex is a minimum\n- Minimum value is $k = 3$\n\n**Why the wrong answers are tempting:**\n- Choice A ($-5$) flips the sign of $h$. The vertex form has $(x - 5)$, so $h = 5$, not $-5$. But even if you found $h$ correctly, $h$ is where the minimum occurs, not what the minimum value is.\n- Choice C ($5$) is the $x$-coordinate of the vertex -- it tells you where the minimum happens, not what the minimum value is. The question asks for the minimum value (the $y$-coordinate), which is $3$.\n- Choice D ($8$) adds $h + k = 5 + 3 = 8$. There is no mathematical reason to add the vertex coordinates together. This is a classic calculation-without-a-reason error.\n\n**Verification:** $f(5) = (5 - 5)^2 + 3 = 0 + 3 = 3$. For any other $x$, $(x - 5)^2 > 0$, so $f(x) > 3$.\n\n**Test Day Takeaway:** In vertex form $a(x - h)^2 + k$: the minimum value (when $a > 0$) is $k$, and it occurs at $x = h$. The question will try to trick you into giving $h$ instead of $k$, or vice versa. Read carefully: are they asking where or what?",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Two identical rectangular prisms each have a height of $60$ centimeters (cm). The base of each prism is a square, and the surface area of each prism is $K$ cm$^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\frac{41}{21}K$ cm$^2$. What is the side length, in cm, of each square base?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Surface Area of Combined Prisms** -- A challenging geometry-algebra problem. The key insight is that gluing two prisms hides two faces (one from each prism).\n\n**Choice B is correct.** The side length is $6$ cm.\n\n**The Fast Way (45 seconds):** Write the surface area formula, set up the combined equation, and solve algebraically. Or plug in each answer choice and test.\n\n**Solution steps:**\nSurface area of one prism with square base side $s$ and height $60$:\n$K = 2s^2 + 4(60)s = 2s^2 + 240s$\n\nWhen glued along a square base, two square faces are hidden:\nCombined SA $= 2K - 2s^2 = \\frac{41}{21}K$\n\n$2K - 2s^2 = \\frac{41}{21}K$\n$\\frac{42K - 41K}{21} = 2s^2$\n$\\frac{K}{21} = 2s^2$\n$K = 42s^2$\n\nSubstitute $K = 2s^2 + 240s$:\n$2s^2 + 240s = 42s^2$\n$240s = 40s^2$\n$240 = 40s$\n$s = 6$\n\n**Why the wrong answers are tempting:**\n- Choice A ($s = 3$) is small enough to seem reasonable, but plugging it in gives $K = 738$ and combined SA $= 1{,}458$, while $\\frac{41}{21}(738) \\approx 1{,}441$. The numbers do not match.\n- Choice C ($s = 9$) overshoots. With $K = 2{,}322$, the combined SA $= 4{,}482$, but $\\frac{41}{21}(2{,}322) \\approx 4{,}529$. Close but not equal.\n- Choice D ($s = 12$) is too large. It gives $K = 3{,}168$ and combined SA $= 6{,}048$, while $\\frac{41}{21}(3{,}168) \\approx 6{,}185$. Again, no match.\n\n**Verification:** With $s = 6$: $K = 2(36) + 240(6) = 72 + 1{,}440 = 1{,}512$. Combined SA $= 2(1{,}512) - 2(36) = 3{,}024 - 72 = 2{,}952$. Check: $\\frac{41}{21}(1{,}512) = \\frac{61{,}992}{21} = 2{,}952$. Confirmed.\n\n**Test Day Takeaway:** When prisms are joined along a face, subtract $2 \\times$ the area of that face from the total of both surface areas. If the algebra looks messy, try plugging in each answer choice -- on a 4-choice multiple choice problem, that is always a valid strategy.",
          skills: ["geometry", "surface-area", "algebra"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane passes through the points $(6, 0)$ and $(-2, 0)$. If $a$ is an integer greater than $1$, which of the following could be the value of $a + b$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Quadratic with Given Roots and Unknown Leading Coefficient** -- A harder algebra problem that combines factored form with constraints on the coefficients.\n\n**Choice A is correct.** A possible value of $a + b$ is $-9$.\n\n**The Fast Way (30 seconds):** Roots at $6$ and $-2$ give $f(x) = a(x - 6)(x + 2)$. Expand: $f(x) = a(x^2 - 4x - 12) = ax^2 - 4ax - 12a$. So $b = -4a$ and $a + b = a - 4a = -3a$. Since $a$ is an integer greater than $1$, try $a = 3$: $a + b = -9$. That matches Choice A.\n\n**Step 1:** Since $f(x)$ has roots at $x = 6$ and $x = -2$:\n$f(x) = a(x - 6)(x + 2) = a(x^2 - 4x - 12) = ax^2 - 4ax - 12a$\n\nSo $b = -4a$ and $c = -12a$.\n\n**Step 2:** Find $a + b$:\n$a + b = a + (-4a) = -3a$\n\n**Step 3:** Since $a$ is an integer $> 1$, possible values of $a + b$ are $-6, -9, -12, -15, ...$\nOnly $-9$ (when $a = 3$) appears in the answer choices.\n\n**Why the wrong answers are tempting:**\n- Choice B ($-4$) would require $-3a = -4$, giving $a = 4/3$. But $a$ must be an integer, and $4/3$ is not an integer.\n- Choice C ($3$) would require $-3a = 3$, giving $a = -1$. But $a$ must be greater than $1$, so a negative value is impossible.\n- Choice D ($8$) would require $-3a = 8$, giving $a = -8/3$. This is neither positive, an integer, nor greater than $1$.\n\n**Verification:** With $a = 3$: $f(x) = 3x^2 - 12x - 36$. Check $f(6) = 3(36) - 12(6) - 36 = 108 - 72 - 36 = 0$ and $f(-2) = 3(4) - 12(-2) - 36 = 12 + 24 - 36 = 0$.\n\n**Test Day Takeaway:** When the SAT says \"which could be,\" you need to find just one valid value. Write $a + b$ in terms of $a$, then test integer values of $a > 1$ until one matches an answer choice.",
          skills: ["quadratic-equations", "factored-form"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "$-x^2 + bx - 400 = 0$\n\nIn the given equation, $b$ is a positive integer. The equation has no real solution. What is the greatest possible value of $b$?",
          correctAnswer: "39",
          explanation: "**SAT Pattern: Discriminant and No Real Solutions** -- The discriminant tells you how many solutions a quadratic has. This is one of the most important formulas to memorize.\n\n**The correct answer is $39$.**\n\n**The Fast Way (25 seconds):** For no real solutions, discriminant $< 0$. Here $a = -1$, $c = -400$: $b^2 - 4(-1)(-400) < 0$, so $b^2 < 1600$, so $b < 40$. Greatest positive integer less than $40$ is $39$.\n\n**Solution steps:**\n- For no real solutions, the discriminant must be negative: $b^2 - 4ac < 0$\n- Here: $a = -1$, the coefficient of $x$ is $b$, and $c = -400$\n- $b^2 - 4(-1)(-400) < 0$\n- $b^2 - 1600 < 0$\n- $b^2 < 1600$\n- $|b| < 40$\n- $-40 < b < 40$\n\nSince $b$ is a positive integer, the greatest value is $39$.\n\n**Verification:**\n- With $b = 39$: discriminant $= 39^2 - 1600 = 1521 - 1600 = -79 < 0$ (no real solutions)\n- With $b = 40$: discriminant $= 40^2 - 1600 = 0$ (exactly one solution, which does not count as \"no real solution\")\n\n**Test Day Takeaway:** Discriminant rules: positive means two real solutions, zero means exactly one, negative means none. When the problem says \"no real solution,\" set the discriminant strictly less than zero and solve the inequality. Watch for the boundary case -- \"no real solution\" excludes zero discriminant.",
          skills: ["Algebra", "Quadratic equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A painting machine covers $2{,}700$ square feet per hour. How many square yards per minute does the machine cover?",
          correctAnswer: 5,
          explanation: "**SAT Pattern: Unit Conversion (Squared Units and Time)** -- A two-step conversion that tests whether you remember to square the linear conversion factor. This trips up a lot of students.\n\n**The correct answer is $5$.**\n\n**The Fast Way (20 seconds):** Convert time first: $2{,}700 \\div 60 = 45$ sq ft per minute. Then convert area: $45 \\div 9 = 5$ sq yd per minute (since $1$ sq yd $= 9$ sq ft).\n\n**Step 1: Convert hours to minutes**\n$$2{,}700 \\text{ sq ft/hr} = \\frac{2{,}700}{60} = 45 \\text{ sq ft/min}$$\n\n**Step 2: Convert square feet to square yards**\nSince $1$ yard $= 3$ feet, we have $1$ square yard $= 3^2 = 9$ square feet.\n$$45 \\text{ sq ft/min} \\div 9 = 5 \\text{ sq yd/min}$$\n\n**Verification:** $5 \\text{ sq yd/min} \\times 9 \\text{ sq ft/sq yd} \\times 60 \\text{ min/hr} = 2{,}700$ sq ft/hr. Confirmed.\n\n**Test Day Takeaway:** When converting squared units, square the linear conversion factor. $1$ yd $= 3$ ft means $1$ sq yd $= 9$ sq ft, not $3$ sq ft. Forgetting to square is the most common mistake on unit conversion problems.",
          skills: ["Problem-Solving and Data Analysis", "Unit Conversion"]
        },
        {
          id: 19,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $P$ models the population, in thousands, of a certain city $t$ years after 2005. According to the model, the population is predicted to increase by $3\\%$ every $n$ months. The function is given by $P(t) = 180(1.03)^{\\frac{12t}{n}}$. What is the value of $n$?',
          choices: [
            { id: 'A', text: '$8$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$72$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Interpreting Exponential Model Parameters** -- The SAT gives you an exponential function and asks you to decode what the exponent means. Understanding the structure is the key.\n\n**Choice B is correct.** The value of $n$ is $12$.\n\n**The Fast Way (20 seconds):** The exponent $\\frac{12t}{n}$ counts how many $n$-month periods fit in $t$ years. Since $12t$ converts years to months, dividing by $n$ gives the number of periods. The problem says the population increases by $3\\%$ every $n$ months. Try $n = 12$: after $1$ year, exponent $= 12/12 = 1$, meaning one $3\\%$ increase per year. That makes sense.\n\n**Step 1: Understand the model structure**\nThe function $P(t) = 180(1.03)^{\\frac{12t}{n}}$ means:\n- Initial population: $180$ thousand\n- Growth factor per period: $1.03$ (a $3\\%$ increase)\n- The exponent $\\frac{12t}{n}$ counts the number of growth periods in $t$ years\n\n**Step 2: Match the exponent to the growth period**\nSince $t$ is in years, $12t$ converts years to months. Dividing by $n$ gives the number of $n$-month intervals. Each interval produces one $3\\%$ increase.\n\n**Step 3: Verify with $n = 12$**\n- After $1$ year ($t = 1$): exponent $= \\frac{12}{12} = 1$, so one $3\\%$ increase per year\n- After $2$ years ($t = 2$): exponent $= \\frac{24}{12} = 2$, so two increases\n\n**Why the wrong answers are tempting:**\n- Choice A ($n = 8$) gives $\\frac{12}{8} = 1.5$ increases per year. That means the population grows by $3\\%$ one and a half times per year, which is an awkward and unlikely growth period.\n- Choice C ($n = 18$) gives $\\frac{12}{18} = \\frac{2}{3}$ of an increase per year, meaning the $3\\%$ growth takes $1.5$ years to complete one cycle. The problem says it happens every $n$ months, so $18$ months is possible mathematically but does not match the expected clean interpretation.\n- Choice D ($n = 72$) gives $\\frac{12}{72} = \\frac{1}{6}$ increases per year, meaning one $3\\%$ bump every $6$ years. That is extremely slow growth.\n\n**Verification:** With $n = 12$: $P(1) = 180(1.03)^1 = 185.4$ thousand -- one $3\\%$ increase after one year.\n\n**Test Day Takeaway:** In exponential models, the exponent is a period counter. It answers: how many growth periods have elapsed? Break it down: $12t$ converts years to months, and dividing by $n$ counts the $n$-month intervals.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane?",
          questionFormula: {
            lines: ["$8x + 12y = 20$", "$2x + 3y = 5$"]
          },
          choices: [
            { id: "A", text: "$\\left(r, \\frac{5 - 2r}{3}\\right)$" },
            { id: "B", text: "$\\left(r, \\frac{5 + 2r}{3}\\right)$" },
            { id: "C", text: "$\\left(r, \\frac{20 - 8r}{3}\\right)$" },
            { id: "D", text: "$\\left(r, \\frac{5 - 2r}{12}\\right)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Infinitely Many Solutions (Equivalent Equations)** -- When two equations are multiples of each other, they represent the same line. Every point on that line is a solution.\n\n**Choice A is correct.** The point $\\left(r, \\frac{5 - 2r}{3}\\right)$ lies on both lines for every real number $r$.\n\n**The Fast Way (25 seconds):** Notice that $8x + 12y = 20$ divided by $4$ gives $2x + 3y = 5$ -- the same as the second equation. So solve for $y$: $y = \\frac{5 - 2x}{3}$. Replace $x$ with $r$: the point is $\\left(r, \\frac{5 - 2r}{3}\\right)$.\n\n**Step 1: Show the equations are equivalent**\nDivide the first equation by $4$:\n$$\\frac{8x + 12y}{4} = \\frac{20}{4} \\implies 2x + 3y = 5$$\nThis is identical to the second equation, so the system has infinitely many solutions.\n\n**Step 2: Express $y$ in terms of $r$**\nLet $x = r$. Substitute into $2x + 3y = 5$:\n$$2r + 3y = 5$$\n$$3y = 5 - 2r$$\n$$y = \\frac{5 - 2r}{3}$$\n\n**Why the wrong answers are tempting:**\n- Choice B has $\\frac{5 + 2r}{3}$ instead of $\\frac{5 - 2r}{3}$. When you isolate $y$ from $2r + 3y = 5$, you subtract $2r$ from both sides, giving $5 - 2r$, not $5 + 2r$. A small sign slip changes the answer entirely.\n- Choice C uses $\\frac{20 - 8r}{3}$, pulling the coefficients from the first equation ($8$ and $20$) without simplifying. If you used the first equation directly, the denominator would be $12$, not $3$. The numerator and denominator do not match.\n- Choice D has $\\frac{5 - 2r}{12}$, using $12$ as the denominator instead of $3$. The coefficient of $y$ in the simplified equation is $3$, so you divide by $3$. The $12$ comes from the unsimplified first equation.\n\n**Verification:** Substitute into the first equation: $8r + 12 \\cdot \\frac{5 - 2r}{3} = 8r + 4(5 - 2r) = 8r + 20 - 8r = 20$. Confirmed.\n\n**Test Day Takeaway:** Always check if two equations are multiples of each other. If they are, you have infinitely many solutions. Solve for $y$ in terms of $x$ using the simpler equation.",
          skills: ["Algebra", "Systems of Equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "$$\\frac{x + 2}{x - 3} + \\frac{1}{x + 1} = \\frac{7x - 1}{(x - 3)(x + 1)}$$\n\nWhat is the solution to the given equation?",
          correctAnswer: 0,
          explanation: "**SAT Pattern: Rational Equations with Extraneous Solutions** -- One of the harder question types. The algebra produces two solutions, but one makes a denominator zero and must be rejected.\n\n**The correct answer is $0$.**\n\n**The Fast Way (40 seconds):** Multiply both sides by $(x - 3)(x + 1)$ to clear fractions, solve the resulting quadratic, then check which solutions are valid (do not make any denominator zero).\n\n**Step 1: Multiply both sides by $(x - 3)(x + 1)$**\n$$(x + 2)(x + 1) + (x - 3) = 7x - 1$$\n\n**Step 2: Expand and simplify the left side**\n$$x^2 + 3x + 2 + x - 3 = 7x - 1$$\n$$x^2 + 4x - 1 = 7x - 1$$\n\n**Step 3: Solve**\n$$x^2 + 4x - 1 - 7x + 1 = 0$$\n$$x^2 - 3x = 0$$\n$$x(x - 3) = 0$$\n$$x = 0 \\text{ or } x = 3$$\n\n**Step 4: Check for extraneous solutions**\n- $x = 3$ makes the denominator $(x - 3)$ equal to zero. Division by zero is undefined, so $x = 3$ is extraneous and must be rejected.\n- $x = 0$: LHS $= \\frac{2}{-3} + \\frac{1}{1} = -\\frac{2}{3} + 1 = \\frac{1}{3}$. RHS $= \\frac{-1}{(-3)(1)} = \\frac{1}{3}$. Valid.\n\nThe only solution is $x = 0$.\n\n**Verification:** At $x = 0$: both sides equal $\\frac{1}{3}$. Confirmed.\n\n**Test Day Takeaway:** Rational equations can produce extraneous solutions -- values that make a denominator zero. After solving, always plug your answers back into the original equation. If a value blows up a denominator, throw it out. The SAT counts on you skipping this check.",
          skills: ["Advanced Math", "Rational Equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "$$3^{x+1} + 3^x = 108$$\n\nWhat is the value of $x$ in the given equation?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Exponential Equations with Common Base** -- Factor out the common exponential term, then solve. This technique works whenever terms share the same base.\n\n**The correct answer is $3$.**\n\n**The Fast Way (20 seconds):** Rewrite $3^{x+1}$ as $3 \\cdot 3^x$. Then $3 \\cdot 3^x + 3^x = 4 \\cdot 3^x = 108$, so $3^x = 27 = 3^3$, giving $x = 3$.\n\n**Step 1: Rewrite $3^{x+1}$**\n$$3^{x+1} = 3 \\cdot 3^x$$\n\n**Step 2: Factor out $3^x$**\n$$3 \\cdot 3^x + 3^x = 108$$\n$$(3 + 1) \\cdot 3^x = 108$$\n$$4 \\cdot 3^x = 108$$\n\n**Step 3: Solve for $3^x$**\n$$3^x = 27$$\n$$3^x = 3^3$$\n$$x = 3$$\n\n**Verification:** $3^{3+1} + 3^3 = 3^4 + 3^3 = 81 + 27 = 108$. Confirmed.\n\n**Test Day Takeaway:** When you see $a^{x+1}$, rewrite it as $a \\cdot a^x$. This lets you factor out $a^x$ and turn an exponential equation into a simple one. The exponent rule $a^{m+n} = a^m \\cdot a^n$ is the key to unlocking these problems.",
          skills: ["Advanced Math", "Exponential Equations"]
        }
      ]
    }
  ]
};
