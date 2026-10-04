// Practice questions for Systems module
// Questions are organized by SECTION (question type)

export const systemsQuestions = {
  // Section: Introduction
  "Introduction": [
    {
      id: 1,
      difficulty: "easy",
      question: "$y = 3x - 4$\n$y = -x + 8$\nHow many solutions does the given system of equations have?",
      choices: [
        // distractor: zero solutions requires parallel, distinct lines, but the slopes $3$ and $-1$ are not equal.
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.
        { id: "C", text: "Exactly two" },
        // distractor: infinitely many solutions requires the two equations to describe the same line, which would force equal slopes and equal $y$-intercepts.
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "Compare the slopes of the two lines before counting anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The slopes $3$ and $-1$ are different, so the lines cross exactly once and the system has exactly one solution.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form, with slopes $3$ and $-1$.\nStep 2: Two lines with different slopes are not parallel, so they intersect at exactly one point in the $xy$-plane.\nStep 3: That intersection point is the only ordered pair that satisfies both equations, so the system has exactly one solution. Check: $3x - 4 = -x + 8$ gives $4x = 12$, so $x = 3$ and $y = 5$, a single ordered pair ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: zero solutions requires parallel, distinct lines, but the slopes $3$ and $-1$ are not equal.\n* Choice C: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.\n* Choice D: infinitely many solutions requires the two equations to describe the same line, which would force equal slopes and equal $y$-intercepts.\n\n**Test Day Takeaway:** Count solutions from the slopes first: different slopes give one solution, and equal slopes give either none or infinitely many.",
      skills: ["system-solution-types"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The graph of a system of linear equations is shown. What is the solution $(x, y)$ to the system?",
      diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: -1 }, slope1: 1, slope2: -2, xRange: [-6, 6], yRange: [-6, 6], showIntersection: false } },
      choices: [
        // distractor: pairs the two $y$-intercepts, $-3$ and $3$, as if they formed a solution.
        { id: "A", text: "$(-3, 3)$" },
        // distractor: reverses the coordinates of the intersection point.
        { id: "B", text: "$(-1, 2)$" },
        { id: "C", text: "$(2, -1)$" },
        // distractor: reads the $x$-coordinate correctly but drops the negative sign on the $y$-coordinate.
        { id: "D", text: "$(2, 1)$" }
      ],
      correctAnswer: "C",
      hint: "The solution is the one point that lies on both lines at once.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The two lines cross at $(2, -1)$, which is the only point on both graphs.\n\n**The Full Solution:**\nStep 1: An ordered pair solves a system of two linear equations exactly when it lies on both graphs.\nStep 2: The only point shared by the two lines is their point of intersection.\nStep 3: Reading across and up from that point gives $x = 2$ and $y = -1$, so the solution is $(2, -1)$. Check: the lines shown are $y = x - 3$ and $y = -2x + 3$, and $2 - 3 = -1$ while $-2(2) + 3 = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-3, 3)$): pairs the two $y$-intercepts, $-3$ and $3$, as if they formed a solution.\n* Choice B ($(-1, 2)$): reverses the coordinates of the intersection point.\n* Choice D ($(2, 1)$): reads the $x$-coordinate correctly but drops the negative sign on the $y$-coordinate.\n\n**Test Day Takeaway:** On a graphed system, the solution is the intersection point, read as $(x, y)$ in that order. Intercepts are not solutions.",
      skills: ["system-solution-types"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$6x - 4y = 10$\nOne of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?",
      choices: [
        // distractor: this is the given equation divided by $2$, so the two equations describe the same line and the system has infinitely many solutions.
        { id: "A", text: "$3x - 2y = 5$" },
        { id: "B", text: "$3x - 2y = 8$" },
        // distractor: the sign of the $y$-coefficient changes, so the slopes differ and the lines meet at exactly one point.
        { id: "C", text: "$3x + 2y = 8$" },
        // distractor: the coefficients are swapped, which again changes the slope and gives exactly one solution.
        { id: "D", text: "$2x - 3y = 8$" }
      ],
      correctAnswer: "B",
      hint: "Compare the coefficients of $x$ and $y$, then compare the constants.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** Dividing the given equation by $2$ gives $3x - 2y = 5$. Keeping those coefficients but changing the constant to $8$ produces a parallel, distinct line.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution exactly when its graphs are parallel and distinct.\nStep 2: Two equations in the form $ax + by = c$ are parallel when their $x$- and $y$-coefficients are proportional. Halving the given equation gives $3x - 2y = 5$, so the second equation must have coefficients proportional to $3$ and $-2$.\nStep 3: The equation $3x - 2y = 8$ has exactly those coefficients but a different constant, so the lines are parallel and distinct and the system has no solution. Check: subtracting the two equations gives $0 = -3$, which is never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x - 2y = 5$): this is the given equation divided by $2$, so the two equations describe the same line and the system has infinitely many solutions.\n* Choice C ($3x + 2y = 8$): the sign of the $y$-coefficient changes, so the slopes differ and the lines meet at exactly one point.\n* Choice D ($2x - 3y = 8$): the coefficients are swapped, which again changes the slope and gives exactly one solution.\n\n**Test Day Takeaway:** For no solution, match the coefficient ratio and break the constant. Matching everything gives infinitely many solutions instead.",
      skills: ["system-solution-types", "parallel-line-slope"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the initial fee and the hourly rate charged by each of two rental companies. For each company, the total cost $y$, in dollars, of renting for $x$ hours is given by a linear equation. The graphs of the two equations in the $xy$-plane intersect at the point $(6, 102)$. What is the best interpretation of $102$ in this context?",
      diagram: { type: "dataTable", params: { headers: ["Company", "Initial fee (dollars)", "Hourly rate (dollars)"], rows: [["P", "30", "12"], ["Q", "54", "8"]] } },
      choices: [
        // distractor: describes the first coordinate, $6$, which is the number of hours, not the cost.
        { id: "A", text: "The number of hours for which the two companies charge the same total cost" },
        { id: "B", text: "The total cost, in dollars, of renting from either company for $6$ hours" },
        // distractor: at the intersection the two costs are equal, so their difference is $\$0$, not $\$102$.
        { id: "C", text: "The difference, in dollars, between the two total costs after $6$ hours" },
        // distractor: the hourly rates are $\$12$ and $\$8$ and they are not equal; $102$ is a total, not a rate.
        { id: "D", text: "The hourly rate, in dollars, charged by each company" }
      ],
      correctAnswer: "B",
      hint: "Decide what each coordinate measures before interpreting either one.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** At the intersection the two costs are equal, so $102$ is the shared total cost after $6$ hours.\n\n**The Full Solution:**\nStep 1: The two cost equations are $y = 30 + 12x$ for company P and $y = 54 + 8x$ for company Q, where $x$ is the number of hours and $y$ is the total cost in dollars.\nStep 2: The intersection point satisfies both equations, so at $x = 6$ hours the two companies charge the same amount.\nStep 3: The second coordinate of the point is that shared cost, $\\$102$. Check: $30 + 12(6) = 102$ and $54 + 8(6) = 102$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the first coordinate, $6$, which is the number of hours, not the cost.\n* Choice C: at the intersection the two costs are equal, so their difference is $\\$0$, not $\\$102$.\n* Choice D: the hourly rates are $\\$12$ and $\\$8$ and they are not equal; $102$ is a total, not a rate.\n\n**Test Day Takeaway:** The solution of a system in context is a pair of measurements. Name the units of each coordinate before choosing an interpretation.",
      skills: ["system-solution-types"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$y = \\frac{3}{4}x - 2$\n$6x - 8y = 20$\nHow many solutions does the given system of equations have?",
      choices: [
        { id: "A", text: "Zero" },
        // distractor: sees two equations written in different forms and assumes the lines must cross; substitution shows the $x$-terms cancel, leaving no value of $x$ to find.
        { id: "B", text: "Exactly one" },
        // distractor: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.
        { id: "C", text: "Exactly two" },
        // distractor: notices that the $x$-terms cancel but stops there; the leftover statement $16 = 20$ is false, so the lines are parallel and distinct, not the same line.
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      hint: "Substitute the first equation into the second and see what is left.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** Substituting gives $6x - 8\\left(\\frac{3}{4}x - 2\\right) = 20$, or $6x - 6x + 16 = 20$, which simplifies to $16 = 20$. That is never true, so there is no solution.\n\n**The Full Solution:**\nStep 1: Substitute $\\frac{3}{4}x - 2$ for $y$ in the second equation: $6x - 8\\left(\\frac{3}{4}x - 2\\right) = 20$.\nStep 2: Distribute the $-8$: $6x - 6x + 16 = 20$, so the $x$-terms cancel and the equation becomes $16 = 20$.\nStep 3: A false statement with no variable left means no ordered pair satisfies both equations, so the system has zero solutions. Check: solving $6x - 8y = 20$ for $y$ gives $y = \\frac{3}{4}x - \\frac{5}{2}$, which has the same slope as $y = \\frac{3}{4}x - 2$ but a different $y$-intercept, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: sees two equations written in different forms and assumes the lines must cross; substitution shows the $x$-terms cancel, leaving no value of $x$ to find.\n* Choice C: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.\n* Choice D: notices that the $x$-terms cancel but stops there; the leftover statement $16 = 20$ is false, so the lines are parallel and distinct, not the same line.\n\n**Test Day Takeaway:** When substitution makes the variable disappear, read the statement that remains: a false one such as $16 = 20$ means zero solutions, and a true one such as $0 = 0$ means infinitely many.",
      skills: ["system-solution-types", "substitution-method"]
    }
  ],

  // Section: Setting Up Systems
  "Setting Up Systems": [
    {
      id: 1,
      difficulty: "easy",
      question: "A theater sold $x$ balcony tickets and $y$ floor tickets for a concert, $240$ tickets in all, for a total of $\\$4{,}500$. The table shows the price of each type of ticket. Which of the following systems of equations represents this situation?",
      diagram: { type: "dataTable", params: { headers: ["Ticket type", "Price (dollars)"], rows: [["Balcony", "15"], ["Floor", "24"]] } },
      choices: [
        { id: "A", text: "$x + y = 240$ and $15x + 24y = 4500$" },
        // distractor: assigns the dollar total to the count equation and the ticket total to the revenue equation, swapping the two constants.
        { id: "B", text: "$x + y = 4500$ and $15x + 24y = 240$" },
        // distractor: attaches each price to the wrong variable, charging $\$24$ for balcony tickets and $\$15$ for floor tickets.
        { id: "C", text: "$x + y = 240$ and $24x + 15y = 4500$" },
        // distractor: adds the two prices and applies the sum to every ticket, which would be correct only if each buyer bought one of each type.
        { id: "D", text: "$x + y = 240$ and $39(x + y) = 4500$" }
      ],
      correctAnswer: "A",
      hint: "One equation should count tickets and the other should total dollars.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Tickets give $x + y = 240$; dollars give $15x + 24y = 4500$, since each balcony ticket brings $\\$15$ and each floor ticket $\\$24$.\n\n**The Full Solution:**\nStep 1: The number of tickets sold is $x + y$, and that total is $240$, so $x + y = 240$.\nStep 2: Balcony tickets bring in $15x$ dollars and floor tickets bring in $24y$ dollars.\nStep 3: The revenue equation is therefore $15x + 24y = 4500$. Check: $x = 140$ and $y = 100$ satisfy both equations, since $140 + 100 = 240$ and $15(140) + 24(100) = 2100 + 2400 = 4500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: assigns the dollar total to the count equation and the ticket total to the revenue equation, swapping the two constants.\n* Choice C: attaches each price to the wrong variable, charging $\\$24$ for balcony tickets and $\\$15$ for floor tickets.\n* Choice D: adds the two prices and applies the sum to every ticket, which would be correct only if each buyer bought one of each type.\n\n**Test Day Takeaway:** Build one equation per quantity being totaled: a count equation and a money equation. Keep each price attached to its own variable.",
      skills: ["setting-up-systems", "word-problem-to-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A bakery packed $218$ muffins into $s$ small boxes and $l$ large boxes, $32$ boxes in all. Each small box holds $4$ muffins and each large box holds $9$ muffins. Which of the following systems of equations represents this situation?",
      choices: [
        // distractor: swaps the two totals, using $218$ as the number of boxes and $32$ as the number of muffins.
        { id: "A", text: "$s + l = 218$ and $4s + 9l = 32$" },
        { id: "B", text: "$s + l = 32$ and $4s + 9l = 218$" },
        // distractor: attaches each capacity to the wrong box size.
        { id: "C", text: "$s + l = 32$ and $9s + 4l = 218$" },
        // distractor: adds the two capacities and applies the sum to every box, which assumes each box holds $13$ muffins.
        { id: "D", text: "$s + l = 32$ and $13(s + l) = 218$" }
      ],
      correctAnswer: "B",
      hint: "One equation counts the boxes; the other counts the muffins inside them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Boxes give $s + l = 32$; muffins give $4s + 9l = 218$.\n\n**The Full Solution:**\nStep 1: The bakery used $32$ boxes altogether, so $s + l = 32$.\nStep 2: The small boxes hold $4s$ muffins and the large boxes hold $9l$ muffins.\nStep 3: Since $218$ muffins were packed, $4s + 9l = 218$. Check: $s = 14$ and $l = 18$ satisfy both, since $14 + 18 = 32$ and $4(14) + 9(18) = 56 + 162 = 218$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the two totals, using $218$ as the number of boxes and $32$ as the number of muffins.\n* Choice C: attaches each capacity to the wrong box size.\n* Choice D: adds the two capacities and applies the sum to every box, which assumes each box holds $13$ muffins.\n\n**Test Day Takeaway:** In a two-container word problem, one equation counts the containers and the other counts what is inside them. Match each capacity to its own variable.",
      skills: ["setting-up-systems", "word-problem-to-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A garden has $r$ orchids and $f$ ferns, $178$ plants in all. The number of orchids is $14$ more than $3$ times the number of ferns. Which of the following systems of equations represents this situation?",
      choices: [
        { id: "A", text: "$r = 3f + 14$ and $r + f = 178$" },
        // distractor: reverses the comparison, making the ferns $14$ more than $3$ times the orchids.
        { id: "B", text: "$f = 3r + 14$ and $r + f = 178$" },
        // distractor: multiplies after adding, $3(f + 14)$, which triples the $14$ as well.
        { id: "C", text: "$r = 3(f + 14)$ and $r + f = 178$" },
        // distractor: subtracts $14$ instead of adding it, making the orchids fewer than $3$ times the ferns.
        { id: "D", text: "$r = 3f - 14$ and $r + f = 178$" }
      ],
      correctAnswer: "A",
      hint: "Translate the comparison sentence left to right, then write the total.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** \"The number of orchids is $14$ more than $3$ times the number of ferns\" is $r = 3f + 14$, and the total gives $r + f = 178$.\n\n**The Full Solution:**\nStep 1: The phrase \"$3$ times the number of ferns\" is $3f$, and \"$14$ more than\" that quantity adds $14$, giving $r = 3f + 14$.\nStep 2: The two kinds of plants together number $178$, so $r + f = 178$.\nStep 3: These two equations form the system. Check: $f = 41$ and $r = 137$ satisfy both, since $3(41) + 14 = 137$ and $137 + 41 = 178$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses the comparison, making the ferns $14$ more than $3$ times the orchids.\n* Choice C: multiplies after adding, $3(f + 14)$, which triples the $14$ as well.\n* Choice D: subtracts $14$ instead of adding it, making the orchids fewer than $3$ times the ferns.\n\n**Test Day Takeaway:** Translate a comparison left to right, and keep the added constant outside the multiplication unless the sentence groups it inside.",
      skills: ["setting-up-systems", "word-problem-to-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A cyclist rode $66$ kilometers with the wind in $2$ hours and then $42$ kilometers against the wind in $2$ hours. The cyclist's speed without wind is $c$ kilometers per hour and the wind's speed is $w$ kilometers per hour. Which of the following systems of equations represents this situation?",
      choices: [
        { id: "A", text: "$2(c + w) = 66$ and $2(c - w) = 42$" },
        // distractor: assigns the longer distance to the trip against the wind, which would make the wind slow the cyclist down over the greater distance.
        { id: "B", text: "$2(c + w) = 42$ and $2(c - w) = 66$" },
        // distractor: omits the $2$ hours, equating a speed with a distance.
        { id: "C", text: "$c + w = 66$ and $c - w = 42$" },
        // distractor: multiplies only the cyclist’s speed by the time, leaving the wind term untimed.
        { id: "D", text: "$2c + w = 66$ and $2c - w = 42$" }
      ],
      correctAnswer: "A",
      hint: "Wind adds to the cyclist’s speed one way and subtracts from it the other way; distance is speed times time.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** With the wind the speed is $c + w$ and with $2$ hours of riding the distance is $2(c + w) = 66$; against the wind it is $2(c - w) = 42$.\n\n**The Full Solution:**\nStep 1: Riding with the wind, the cyclist's effective speed is $c + w$; riding against it, the effective speed is $c - w$.\nStep 2: Distance equals speed times time, and each ride lasts $2$ hours, so the distances are $2(c + w)$ and $2(c - w)$.\nStep 3: Setting those equal to the given distances yields $2(c + w) = 66$ and $2(c - w) = 42$. Check: $c = 27$ and $w = 6$ give $2(33) = 66$ and $2(21) = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: assigns the longer distance to the trip against the wind, which would make the wind slow the cyclist down over the greater distance.\n* Choice C: omits the $2$ hours, equating a speed with a distance.\n* Choice D: multiplies only the cyclist's speed by the time, leaving the wind term untimed.\n\n**Test Day Takeaway:** For with-and-against problems, write the two combined speeds first, then multiply each by its own time before setting it equal to a distance.",
      skills: ["setting-up-systems", "word-problem-to-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Ana will mix $x$ liters of solution A with $y$ liters of solution B to make $40$ liters of a solution that is $24\\%$ salt by volume. The table shows the percent of salt by volume in each solution. Which of the following systems of equations represents this situation?",
      diagram: { type: "dataTable", params: { headers: ["Solution", "Concentration (percent salt by volume)"], rows: [["A", "15"], ["B", "30"]] } },
      choices: [
        { id: "A", text: "$x + y = 40$ and $0.15x + 0.30y = 9.6$" },
        // distractor: sets the salt equation equal to the percent, $24$, instead of the $9.6$ liters of salt that percent represents.
        { id: "B", text: "$x + y = 40$ and $0.15x + 0.30y = 24$" },
        // distractor: writes the concentrations as whole percents on the left while keeping liters on the right, mixing two different units.
        { id: "C", text: "$x + y = 40$ and $15x + 30y = 9.6$" },
        // distractor: swaps the two totals, using the liters of salt as the total volume and the total volume as the amount of salt.
        { id: "D", text: "$x + y = 9.6$ and $0.15x + 0.30y = 40$" }
      ],
      correctAnswer: "A",
      hint: "One equation tracks liters of liquid; the other tracks liters of salt.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~50s):** Volume gives $x + y = 40$. The mixture holds $0.24(40) = 9.6$ liters of salt, so $0.15x + 0.30y = 9.6$.\n\n**The Full Solution:**\nStep 1: The two solutions together make $40$ liters, so $x + y = 40$.\nStep 2: Solution A contributes $0.15x$ liters of salt and solution B contributes $0.30y$ liters of salt.\nStep 3: The mixture is $24$ percent salt, so it contains $0.24(40) = 9.6$ liters of salt, giving $0.15x + 0.30y = 9.6$. Check: $x = 16$ and $y = 24$ satisfy both, since $16 + 24 = 40$ and $0.15(16) + 0.30(24) = 2.4 + 7.2 = 9.6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: sets the salt equation equal to the percent, $24$, instead of the $9.6$ liters of salt that percent represents.\n* Choice C: writes the concentrations as whole percents on the left while keeping liters on the right, mixing two different units.\n* Choice D: swaps the two totals, using the liters of salt as the total volume and the total volume as the amount of salt.\n\n**Test Day Takeaway:** In a mixture problem the second equation must balance the same substance on both sides. Convert the target percent into an actual amount before writing it.",
      skills: ["setting-up-systems", "word-problem-to-equation"]
    }
  ],

  // Section: Substitution Method
  "Substitution Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "$y = 24 - 3x$\n$5x + 2y = 44$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
      choices: [
        // distractor: reaches $-x = -4$ but drops the negative sign on the left, writing $x = -4$.
        { id: "A", text: "$-4$" },
        { id: "B", text: "$4$" },
        // distractor: substitutes without distributing the $2$, solving $5x + 24 - 3x = 44$, or $2x = 20$.
        { id: "C", text: "$10$" },
        // distractor: solves the system correctly but reports $y$ instead of $x$.
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "B",
      hint: "Replace $y$ in the second equation with the whole expression $24 - 3x$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Substituting gives $5x + 2(24 - 3x) = 44$, so $-x + 48 = 44$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Substitute $24 - 3x$ for $y$ in the second equation: $5x + 2(24 - 3x) = 44$.\nStep 2: Distribute the $2$ and combine like terms: $5x + 48 - 6x = 44$, so $-x + 48 = 44$.\nStep 3: Subtract $48$ from both sides to get $-x = -4$, so $x = 4$. Check: $y = 24 - 3(4) = 12$, and $5(4) + 2(12) = 20 + 24 = 44$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): reaches $-x = -4$ but drops the negative sign on the left, writing $x = -4$.\n* Choice C ($10$): substitutes without distributing the $2$, solving $5x + 24 - 3x = 44$, or $2x = 20$.\n* Choice D ($12$): solves the system correctly but reports $y$ instead of $x$.\n\n**Test Day Takeaway:** Put the substituted expression in parentheses and distribute the coefficient to every term, then reread which variable the question asks for.",
      skills: ["substitution-method"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$x = 4y - 30$\n$x + y = 280$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
      choices: [
        // distractor: flips the sign of the $30$, substituting $4y + 30$ and solving $5y + 30 = 280$.
        { id: "A", text: "$50$" },
        // distractor: drops the $-30$ when substituting, solving $4y + y = 280$.
        { id: "B", text: "$56$" },
        { id: "C", text: "$62$" },
        // distractor: solves the system correctly but reports $x$ instead of $y$.
        { id: "D", text: "$218$" }
      ],
      correctAnswer: "C",
      hint: "Replace $x$ in the second equation with the whole expression $4y - 30$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Substituting $4y - 30$ for $x$ gives $(4y - 30) + y = 280$, so $5y = 310$ and $y = 62$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so replace $x$ in the second equation: $(4y - 30) + y = 280$.\nStep 2: Combine like terms: $5y - 30 = 280$, so $5y = 310$.\nStep 3: Divide by $5$ to get $y = 62$. Check: $x = 4(62) - 30 = 218$, and $218 + 62 = 280$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): flips the sign of the $30$, substituting $4y + 30$ and solving $5y + 30 = 280$.\n* Choice B ($56$): drops the $-30$ when substituting, solving $4y + y = 280$.\n* Choice D ($218$): solves the system correctly but reports $x$ instead of $y$.\n\n**Test Day Takeaway:** Substitute the whole expression, sign and constant included, then reread which of the two variables the question names.",
      skills: ["substitution-method"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$y = 3x - 3$\n$4x + cy = 42$\nThe solution to the given system of equations is $(3, y)$, where $c$ is a constant. What is the value of $c$?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: divides $42$ by the $y$-value $6$ without first subtracting $4(3) = 12$.
        { id: "B", text: "$7$" },
        // distractor: adds $12$ instead of subtracting it, computing $\frac{42 + 12}{6} = 9$.
        { id: "C", text: "$9$" },
        // distractor: divides by the $x$-value $3$ instead of the $y$-value $6$, computing $\frac{42 - 12}{3} = 10$.
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "A",
      hint: "Find $y$ first, then substitute both coordinates into the second equation.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** With $x = 3$, the first equation gives $y = 3(3) - 3 = 6$, so $4(3) + 6c = 42$ and $c = 5$.\n\n**The Full Solution:**\nStep 1: Find $y$ from the first equation: $y = 3(3) - 3 = 6$, so the solution is $(3, 6)$.\nStep 2: Substitute $x = 3$ and $y = 6$ into the second equation: $4(3) + c(6) = 42$, or $12 + 6c = 42$.\nStep 3: Subtract $12$ and divide by $6$: $6c = 30$, so $c = 5$. Check: $4(3) + 5(6) = 12 + 30 = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): divides $42$ by the $y$-value $6$ without first subtracting $4(3) = 12$.\n* Choice C ($9$): adds $12$ instead of subtracting it, computing $\\frac{42 + 12}{6} = 9$.\n* Choice D ($10$): divides by the $x$-value $3$ instead of the $y$-value $6$, computing $\\frac{42 - 12}{3} = 10$.\n\n**Test Day Takeaway:** When a constant is unknown, find every coordinate of the solution first; then the equation with the constant has only one unknown left.",
      skills: ["substitution-method"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$y = 4x + 7$\n$3x + y = 49$\nWhat is the solution $(x, y)$ to the given system of equations?",
      choices: [
        // distractor: finds $x = 6$ but drops the $+7$ when finding $y$, computing $y = 4(6) = 24$.
        { id: "A", text: "$(6, 24)$" },
        { id: "B", text: "$(6, 31)$" },
        // distractor: adds $7$ to $49$ instead of subtracting it, solving $7x = 56$ to get $x = 8$ and then $y = 39$.
        { id: "C", text: "$(8, 39)$" },
        // distractor: solves the system correctly but writes the coordinates in reverse order.
        { id: "D", text: "$(31, 6)$" }
      ],
      correctAnswer: "B",
      hint: "Substitute $4x + 7$ for $y$, solve for $x$, then go back for $y$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Substituting gives $3x + 4x + 7 = 49$, so $7x = 42$, $x = 6$, and $y = 4(6) + 7 = 31$.\n\n**The Full Solution:**\nStep 1: Substitute $4x + 7$ for $y$ in the second equation: $3x + (4x + 7) = 49$.\nStep 2: Combine like terms and subtract $7$: $7x = 42$, so $x = 6$.\nStep 3: Substitute $x = 6$ into the first equation: $y = 4(6) + 7 = 31$, so the solution is $(6, 31)$. Check: $3(6) + 31 = 18 + 31 = 49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(6, 24)$): finds $x = 6$ but drops the $+7$ when finding $y$, computing $y = 4(6) = 24$.\n* Choice C ($(8, 39)$): adds $7$ to $49$ instead of subtracting it, solving $7x = 56$ to get $x = 8$ and then $y = 39$.\n* Choice D ($(31, 6)$): solves the system correctly but writes the coordinates in reverse order.\n\n**Test Day Takeaway:** After solving for one variable, substitute back into the equation you started from and keep every term; then write the pair in $(x, y)$ order.",
      skills: ["substitution-method"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$2x - y = 7$\n$6x + ky = 5$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
      choices: [
        // distractor: inverts the slope comparison, setting $-\frac{k}{6} = 2$.
        { id: "A", text: "$-12$" },
        { id: "B", text: "$-3$" },
        // distractor: drops the negative sign when reading the slope of $6x + ky = 5$, setting $\frac{6}{k} = 2$.
        { id: "C", text: "$3$" },
        // distractor: both inverts the ratio and drops the sign, setting $\frac{k}{6} = 2$.
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "B",
      hint: "Substitute $y = 2x - 7$ into the second equation and watch the coefficient of $x$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~55s):** Substituting $y = 2x - 7$ into the second equation gives $(6 + 2k)x = 5 + 7k$. The $x$-term vanishes when $6 + 2k = 0$, so $k = -3$, and the equation becomes the false statement $0 = -16$.\n\n**The Full Solution:**\nStep 1: Solve the first equation for $y$: $y = 2x - 7$.\nStep 2: Substitute into the second equation: $6x + k(2x - 7) = 5$, which becomes $(6 + 2k)x = 5 + 7k$.\nStep 3: Whenever $6 + 2k \\ne 0$, this gives exactly one value of $x$. If $6 + 2k = 0$, the left side is $0$ while the right side is $5 + 7k$; with $k = -3$ that is $0 = -16$, which is false, so the system has no solution. Thus $k = -3$. Check: with $k = -3$ the second equation is $6x - 3y = 5$, or $2x - y = \\frac{5}{3}$, which is parallel to and distinct from $2x - y = 7$, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): inverts the slope comparison, setting $-\\frac{k}{6} = 2$.\n* Choice C ($3$): drops the negative sign when reading the slope of $6x + ky = 5$, setting $\\frac{6}{k} = 2$.\n* Choice D ($12$): both inverts the ratio and drops the sign, setting $\\frac{k}{6} = 2$.\n\n**Test Day Takeaway:** Carry the parameter through the substitution and watch the coefficient of the surviving variable. When it hits zero, check the constant side: a false statement means no solution.",
      skills: ["substitution-method"]
    }
  ],

  // Section: Elimination Method
  "Elimination Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x + 4y = 23$\n$x - 4y = 7$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
      choices: [
        // distractor: solves the system but reports $y$ instead of $x$.
        { id: "A", text: "$2$" },
        // distractor: adds the left sides but subtracts the right sides, writing $2x = 23 - 7 = 16$.
        { id: "B", text: "$8$" },
        { id: "C", text: "$15$" },
        // distractor: adds correctly to get $2x = 30$ but stops before dividing by $2$.
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "C",
      hint: "Look at the $y$-terms: what happens if you add the equations?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Adding the equations cancels the $y$-terms: $2x = 30$, so $x = 15$.\n\n**The Full Solution:**\nStep 1: The $y$-terms $4y$ and $-4y$ are opposites, so adding the equations eliminates $y$.\nStep 2: Add the left sides and the right sides: $(x + 4y) + (x - 4y) = 23 + 7$, so $2x = 30$.\nStep 3: Divide by $2$: $x = 15$. Check: from the first equation $4y = 23 - 15 = 8$, so $y = 2$, and $15 - 4(2) = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): solves the system but reports $y$ instead of $x$.\n* Choice B ($8$): adds the left sides but subtracts the right sides, writing $2x = 23 - 7 = 16$.\n* Choice D ($30$): adds correctly to get $2x = 30$ but stops before dividing by $2$.\n\n**Test Day Takeaway:** When one variable has opposite coefficients, add the equations; do the same operation to both sides, and finish by dividing.",
      skills: ["elimination-method"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$x + y = 40$\n$2x + 3y = 96$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
      choices: [
        // distractor: subtracts the doubled first equation from the second in the wrong order, getting $-y = -16$, and drops the negative on the left.
        { id: "A", text: "$-16$" },
        { id: "B", text: "$16$" },
        // distractor: solves the system correctly but reports $x$ instead of $y$.
        { id: "C", text: "$24$" },
        // distractor: divides $96$ by $3$, which treats $x$ as if it were $0$.
        { id: "D", text: "$32$" }
      ],
      correctAnswer: "B",
      hint: "Multiply the first equation so that one variable has matching coefficients.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Doubling the first equation gives $2x + 2y = 80$; subtracting it from $2x + 3y = 96$ leaves $y = 16$.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $2$ so the $x$-coefficients match: $2x + 2y = 80$.\nStep 2: Subtract this from the second equation: $(2x + 3y) - (2x + 2y) = 96 - 80$, so $y = 16$.\nStep 3: Then $x = 40 - 16 = 24$. Check: $2(24) + 3(16) = 48 + 48 = 96$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): subtracts the doubled first equation from the second in the wrong order, getting $-y = -16$, and drops the negative on the left.\n* Choice C ($24$): solves the system correctly but reports $x$ instead of $y$.\n* Choice D ($32$): divides $96$ by $3$, which treats $x$ as if it were $0$.\n\n**Test Day Takeaway:** Scale one equation so a variable has the same coefficient in both, subtract, and keep track of which variable survives.",
      skills: ["elimination-method"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$4x + 5y = 26$\n$6x - 7y = 10$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
      choices: [
        // distractor: subtracts the left sides in one order and the right sides in the other: $-29y = 78 - 20$, giving $y = -2$.
        { id: "A", text: "$-2$" },
        { id: "B", text: "$2$" },
        // distractor: solves the system correctly but reports $x$ instead of $y$.
        { id: "C", text: "$4$" },
        // distractor: subtracts $-14y$ as if it were $+14y$, getting $15y - 14y = y$ and $y = 58$.
        { id: "D", text: "$58$" }
      ],
      correctAnswer: "B",
      hint: "Scale both equations so the $x$-coefficients match, then subtract.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply the first equation by $3$ and the second by $2$: $12x + 15y = 78$ and $12x - 14y = 20$. Subtracting gives $29y = 58$, so $y = 2$.\n\n**The Full Solution:**\nStep 1: The least common multiple of the $x$-coefficients $4$ and $6$ is $12$, so multiply the first equation by $3$ and the second by $2$: $12x + 15y = 78$ and $12x - 14y = 20$.\nStep 2: Subtract the second from the first: $15y - (-14y) = 78 - 20$, so $29y = 58$.\nStep 3: Divide by $29$: $y = 2$. Check: $4x + 5(2) = 26$ gives $x = 4$, and $6(4) - 7(2) = 24 - 14 = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): subtracts the left sides in one order and the right sides in the other: $-29y = 78 - 20$, giving $y = -2$.\n* Choice C ($4$): solves the system correctly but reports $x$ instead of $y$.\n* Choice D ($58$): subtracts $-14y$ as if it were $+14y$, getting $15y - 14y = y$ and $y = 58$.\n\n**Test Day Takeaway:** When no coefficient matches, scale both equations to a common multiple, and subtract in the same order on both sides, minding a negative coefficient.",
      skills: ["elimination-method"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A garden center sold $150$ seedlings for a total of $\\$630$. The table shows the price of each type of seedling. How many tree seedlings were sold?",
      diagram: { type: "dataTable", params: { headers: ["Seedling type", "Price (dollars)"], rows: [["Shrub", "3"], ["Tree", "5"]] } },
      choices: [
        // distractor: solves the system but reports $s$, the number of shrub seedlings.
        { id: "A", text: "$60$" },
        // distractor: assumes the two types sold in equal numbers, $\frac{150}{2}$, which the money total does not support.
        { id: "B", text: "$75$" },
        { id: "C", text: "$90$" },
        // distractor: divides the total by the price of a tree seedling, $\frac{630}{5}$, as if every seedling sold were a tree.
        { id: "D", text: "$126$" }
      ],
      correctAnswer: "C",
      hint: "Write one equation for the number of seedlings and one for the money, then scale the first to match a coefficient in the second.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** With $s + t = 150$ and $3s + 5t = 630$, tripling the first and subtracting gives $2t = 180$, so $t = 90$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of shrub seedlings and $t$ the number of tree seedlings. Then $s + t = 150$ and $3s + 5t = 630$.\nStep 2: Multiply the first equation by $3$ to get $3s + 3t = 450$, matching the $3s$ term.\nStep 3: Subtract from the money equation: $(3s + 5t) - (3s + 3t) = 630 - 450$, so $2t = 180$ and $t = 90$. Check: $s = 60$, and $3(60) + 5(90) = 180 + 450 = 630$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): solves the system but reports $s$, the number of shrub seedlings.\n* Choice B ($75$): assumes the two types sold in equal numbers, $\\frac{150}{2}$, which the money total does not support.\n* Choice D ($126$): divides the total by the price of a tree seedling, $\\frac{630}{5}$, as if every seedling sold were a tree.\n\n**Test Day Takeaway:** Scale the count equation by one of the prices so a variable cancels. Then label your answer with the variable the question named.",
      skills: ["elimination-method"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$4x + 9y = 57$\n$9x + 4y = 47$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
      choices: [
        // distractor: reports the value of $x$ instead of the requested sum $x + y$.
        { id: "A", text: "$3$" },
        // distractor: reports the value of $y$ instead of the requested sum $x + y$.
        { id: "B", text: "$5$" },
        { id: "C", text: "$8$" },
        // distractor: adds the two equations correctly but stops at $13x + 13y = 104$ without dividing by $13$.
        { id: "D", text: "$104$" }
      ],
      correctAnswer: "C",
      hint: "The question asks only for $x + y$, so you may not need $x$ and $y$ separately.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Adding the two equations gives $13x + 13y = 104$, so $x + y = \\frac{104}{13} = 8$.\n\n**The Full Solution:**\nStep 1: The coefficients of $x$ and $y$ are swapped between the equations, so add them: $(4x + 9y) + (9x + 4y) = 57 + 47$.\nStep 2: The left side collects to $13x + 13y$ and the right side is $104$, so $13(x + y) = 104$.\nStep 3: Divide both sides by $13$ to get $x + y = 8$. Check: subtracting the equations gives $5x - 5y = -10$, so $x - y = -2$; with $x + y = 8$ that gives $x = 3$ and $y = 5$, and $4(3) + 9(5) = 12 + 45 = 57$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the value of $x$ instead of the requested sum $x + y$.\n* Choice B ($5$): reports the value of $y$ instead of the requested sum $x + y$.\n* Choice D ($104$): adds the two equations correctly but stops at $13x + 13y = 104$ without dividing by $13$.\n\n**Test Day Takeaway:** When a system asks for $x + y$ rather than one variable, add the equations first. Swapped coefficients often collapse into a multiple of $x + y$ in one step.",
      skills: ["elimination-method"]
    }
  ],

  // Section: DESMOS Method
  "DESMOS Method": [
    {
      id: 1,
      difficulty: "easy",
      question: "The graph of a system of two linear equations is shown. The solution to the system is $(x, y)$. What is the value of $x$?",
      diagram: { type: "twoLineGraph", params: { intersection: { x: -3, y: 1 }, slope1: 2, slope2: -1, xRange: [-6, 6], yRange: [-6, 8], showIntersection: false } },
      choices: [
        { id: "A", text: "$-3$" },
        // distractor: reads the $x$-intercept of the line with negative slope instead of the intersection point.
        { id: "B", text: "$-2$" },
        // distractor: reports the $y$-coordinate of the intersection point.
        { id: "C", text: "$1$" },
        // distractor: reads the $y$-intercept of the steeper line.
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "A",
      hint: "Find the point where the two lines cross, then read only its $x$-coordinate.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The lines cross at $(-3, 1)$, so the $x$-coordinate of the solution is $-3$.\n\n**The Full Solution:**\nStep 1: A point is a solution to the system exactly when it lies on both lines, which happens only at the intersection.\nStep 2: The lines cross three units left of the $y$-axis and one unit above the $x$-axis, at $(-3, 1)$.\nStep 3: The $x$-coordinate of that point is $-3$. Check: the lines shown are $y = 2x + 7$ and $y = -x - 2$, and $2(-3) + 7 = 1$ while $-(-3) - 2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): reads the $x$-intercept of the line with negative slope instead of the intersection point.\n* Choice C ($1$): reports the $y$-coordinate of the intersection point.\n* Choice D ($7$): reads the $y$-intercept of the steeper line.\n\n**Test Day Takeaway:** Locate the crossing point first, then read the coordinate the question names. Intercepts belong to one line only, so they are never solutions to the system.",
      skills: ["graphing-systems", "system-solution-types"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$2x + 3y = 6$\n$y = -\\frac{2}{3}x + 5$\nAt how many points do the graphs of the given equations intersect in the $xy$-plane?",
      choices: [
        { id: "A", text: "Zero" },
        // distractor: assumes any two distinct lines must cross, but lines with equal slopes never do.
        { id: "B", text: "Exactly one" },
        // distractor: two distinct lines can share at most one point, so exactly two is impossible.
        { id: "C", text: "Exactly two" },
        // distractor: this happens only when the two equations describe the same line, which would require equal $y$-intercepts as well as equal slopes.
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      hint: "Rewrite the first equation in slope-intercept form before comparing the two lines.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Both lines have slope $-\\frac{2}{3}$ but $y$-intercepts $2$ and $5$, so they are parallel and never meet.\n\n**The Full Solution:**\nStep 1: Solve $2x + 3y = 6$ for $y$: $3y = -2x + 6$, so $y = -\\frac{2}{3}x + 2$.\nStep 2: The second line is $y = -\\frac{2}{3}x + 5$. The slopes are equal, $-\\frac{2}{3}$, but the $y$-intercepts $2$ and $5$ are different.\nStep 3: Parallel and distinct lines never intersect, so the two lines share zero points. Check: setting the right sides equal gives $2 = 5$, which is never true ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes any two distinct lines must cross, but lines with equal slopes never do.\n* Choice C: two distinct lines can share at most one point, so exactly two is impossible.\n* Choice D: this happens only when the two equations describe the same line, which would require equal $y$-intercepts as well as equal slopes.\n\n**Test Day Takeaway:** Convert to slope-intercept form before judging a graph. Equal slopes with different intercepts always means no points in common.",
      skills: ["graphing-systems", "system-solution-types", "parallel-line-slope"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Two lines are graphed in the $xy$-plane, as shown. The point $(x, y)$ lies on both lines. What is the value of $x + y$?",
      diagram: { type: "twoLineGraph", params: { intersection: { x: 4, y: -2 }, slope1: -1, slope2: 0.5, xRange: [-6, 6], yRange: [-6, 6], showIntersection: false } },
      choices: [
        // distractor: reports the $y$-coordinate alone instead of the sum.
        { id: "A", text: "$-2$" },
        { id: "B", text: "$2$" },
        // distractor: reports the $x$-coordinate alone instead of the sum.
        { id: "C", text: "$4$" },
        // distractor: computes $x - y$ instead of $x + y$, dropping the negative sign on $y$.
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "B",
      hint: "Read both coordinates of the crossing point before combining them.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The lines cross at $(4, -2)$, so $x + y = 4 + (-2) = 2$.\n\n**The Full Solution:**\nStep 1: A point lying on both lines must be their point of intersection.\nStep 2: The lines cross four units right of the $y$-axis and two units below the $x$-axis, so $x = 4$ and $y = -2$.\nStep 3: Therefore $x + y = 4 + (-2) = 2$. Check: the lines shown are $y = -x + 2$ and $y = \\frac{1}{2}x - 4$, and both give $y = -2$ when $x = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the $y$-coordinate alone instead of the sum.\n* Choice C ($4$): reports the $x$-coordinate alone instead of the sum.\n* Choice D ($6$): computes $x - y$ instead of $x + y$, dropping the negative sign on $y$.\n\n**Test Day Takeaway:** Read a graphed solution as a full ordered pair, then perform the arithmetic the question asks for. Watch signs below the $x$-axis.",
      skills: ["graphing-systems", "system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A bike shop offers two rental plans. Plan A costs $\\$20$ plus $\\$3.50$ per hour, and Plan B costs $\\$48$ plus $\\$1.75$ per hour. For how many hours of rental do the two plans cost the same amount?",
      choices: [
        // distractor: divides the $\$28$ difference in base fees by Plan A's rate alone, $\frac{28}{3.50} = 8$, ignoring that Plan B also charges by the hour.
        { id: "A", text: "$8$" },
        { id: "B", text: "$16$" },
        // distractor: reports the difference in base fees, $48 - 20 = 28$, which is a dollar amount, not a number of hours.
        { id: "C", text: "$28$" },
        // distractor: adds the two base fees, $48 + 20 = 68$.
        { id: "D", text: "$68$" }
      ],
      correctAnswer: "B",
      hint: "Write a cost equation for each plan and find where the two are equal.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Setting $20 + 3.50h = 48 + 1.75h$ gives $1.75h = 28$, so $h = 16$ hours.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of hours. Plan A costs $20 + 3.50h$ dollars and Plan B costs $48 + 1.75h$ dollars.\nStep 2: The costs are equal where the graphs of $y = 20 + 3.50h$ and $y = 48 + 1.75h$ intersect: $20 + 3.50h = 48 + 1.75h$, so $1.75h = 28$ and $h = 16$.\nStep 3: Check both plans at $h = 16$. Plan A: $20 + 3.50(16) = 76$ dollars. Plan B: $48 + 1.75(16) = 76$ dollars, so the lines meet at $(16, 76)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): divides the $\\$28$ difference in base fees by Plan A's rate alone, $\\frac{28}{3.50} = 8$, ignoring that Plan B also charges by the hour.\n* Choice C ($28$): reports the difference in base fees, $48 - 20 = 28$, which is a dollar amount, not a number of hours.\n* Choice D ($68$): adds the two base fees, $48 + 20 = 68$.\n\n**Test Day Takeaway:** Two cost plans are equal where the gap in fixed fees is closed by the difference in rates: divide the fee difference by the rate difference.",
      skills: ["graphing-systems"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, line $\\ell$ passes through the points $(-2, -9)$ and $(4, 3)$. Line $\\ell$ intersects the graph of $3x + y = 25$ at the point $(a, b)$. What is the value of $a + b$?",
      choices: [
        // distractor: reports $a$ alone instead of the requested sum.
        { id: "A", text: "$6$" },
        // distractor: reports $b$ alone instead of the requested sum.
        { id: "B", text: "$7$" },
        { id: "C", text: "$13$" },
        // distractor: multiplies the two coordinates instead of adding them.
        { id: "D", text: "$42$" }
      ],
      correctAnswer: "C",
      hint: "You need an equation for line $\\ell$ before the two lines can be compared.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~55s):** Line $\\ell$ has slope $2$ and equation $y = 2x - 5$. Solving with $3x + y = 25$ gives $(6, 7)$, so $a + b = 13$.\n\n**The Full Solution:**\nStep 1: The slope of line $\\ell$ is $\\frac{3 - (-9)}{4 - (-2)} = \\frac{12}{6} = 2$, and using the point $(4, 3)$ gives $y = 2x - 5$.\nStep 2: Substitute into $3x + y = 25$: $3x + (2x - 5) = 25$, so $5x = 30$ and $x = 6$.\nStep 3: Then $y = 2(6) - 5 = 7$, so $a = 6$, $b = 7$, and $a + b = 13$. Check: $3(6) + 7 = 25$, and $(-2, -9)$ satisfies $y = 2x - 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $a$ alone instead of the requested sum.\n* Choice B ($7$): reports $b$ alone instead of the requested sum.\n* Choice D ($42$): multiplies the two coordinates instead of adding them.\n\n**Test Day Takeaway:** When a line is described by two points rather than an equation, build its equation first. Only then can it be paired with the other equation as a system.",
      skills: ["graphing-systems", "system-solution-types", "parallel-line-slope"]
    }
  ],

  // Section: Infinite Solutions
  "Infinite Solutions": [
    {
      id: 1,
      difficulty: "easy",
      question: "$y = 3x - 5$\n$9x - 3y = 15$\nWhich statement about the graphs of the given equations in the $xy$-plane is true?",
      choices: [
        // distractor: notices the equal slopes but stops there; the $y$-intercepts also match, so the lines coincide instead of running parallel.
        { id: "A", text: "They are parallel and distinct." },
        // distractor: assumes two equations always describe two crossing lines, which fails when the equations are multiples of each other.
        { id: "B", text: "They intersect at exactly one point." },
        // distractor: two lines can share at most one point unless they coincide entirely, so exactly two shared points is impossible.
        { id: "C", text: "They intersect at exactly two points." },
        { id: "D", text: "They are the same line." }
      ],
      correctAnswer: "D",
      hint: "Rewrite the second equation in slope-intercept form and compare it with the first.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Dividing $9x - 3y = 15$ by $3$ gives $3x - y = 5$, or $y = 3x - 5$, which is the first equation.\n\n**The Full Solution:**\nStep 1: Solve $9x - 3y = 15$ for $y$: $-3y = -9x + 15$, so $y = 3x - 5$.\nStep 2: That is exactly the first equation, so the two equations are equivalent.\nStep 3: Equivalent equations have identical graphs, so the two lines coincide and every point on one lies on the other. Check: the second equation is $3$ times the equation $3x - y = 5$, so it adds no new information ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: notices the equal slopes but stops there; the $y$-intercepts also match, so the lines coincide instead of running parallel.\n* Choice B: assumes two equations always describe two crossing lines, which fails when the equations are multiples of each other.\n* Choice C: two lines can share at most one point unless they coincide entirely, so exactly two shared points is impossible.\n\n**Test Day Takeaway:** Before counting intersections, reduce each equation to slope-intercept form. Matching slope and intercept means one line, not two.",
      skills: ["infinite-solutions-condition", "system-solution-types"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$3x + 12y = 45$\n$x + 4y = 15$\nHow many solutions does the given system of equations have?",
      choices: [
        // distractor: sees that the coefficients are proportional and assumes the lines are parallel and distinct, without checking that the constants scale by the same factor.
        { id: "A", text: "Zero" },
        // distractor: assumes two different-looking equations must describe two different lines that cross once.
        { id: "B", text: "Exactly one" },
        // distractor: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.
        { id: "C", text: "Exactly two" },
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "D",
      hint: "Is one equation a multiple of the other, constant included?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Dividing $3x + 12y = 45$ by $3$ gives $x + 4y = 15$, the second equation, so the system has infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Compare the coefficients: $\\frac{3}{1} = 3$ and $\\frac{12}{4} = 3$, so the $x$- and $y$-coefficients scale by the same factor.\nStep 2: Compare the constants: $\\frac{45}{15} = 3$, the same factor.\nStep 3: The first equation is exactly $3$ times the second, so both describe the same line and every point on it is a solution. Check: $(15, 0)$ and $(3, 3)$ satisfy both equations ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: sees that the coefficients are proportional and assumes the lines are parallel and distinct, without checking that the constants scale by the same factor.\n* Choice B: assumes two different-looking equations must describe two different lines that cross once.\n* Choice C: two distinct lines meet at most once, so a system of two linear equations can never have exactly two solutions.\n\n**Test Day Takeaway:** Equal coefficient ratios mean parallel or identical lines; the constant decides. If it scales too, there are infinitely many solutions.",
      skills: ["infinite-solutions-condition", "system-solution-types"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$6x + ky = 30$\n$9x + 12y = 45$\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
      choices: [
        // distractor: copies the first equation's $x$-coefficient, $6$, instead of scaling the $12$.
        { id: "A", text: "$6$" },
        { id: "B", text: "$8$" },
        // distractor: copies the second equation's $y$-coefficient, $12$, ignoring the $\frac{2}{3}$ scaling.
        { id: "C", text: "$12$" },
        // distractor: inverts the ratio and computes $12 \cdot \frac{9}{6} = 18$.
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      hint: "Find the factor that turns $9x$ into $6x$ and $45$ into $30$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Scaling $9x + 12y = 45$ by $\\frac{2}{3}$ turns $9x$ into $6x$ and $45$ into $30$, so $12y$ must become $8y$.\n\n**The Full Solution:**\nStep 1: A system has infinitely many solutions only when every term of one equation is the same multiple of the matching term of the other. The $x$-terms give the factor $\\frac{6}{9} = \\frac{2}{3}$.\nStep 2: The constants agree with that factor: $\\frac{30}{45} = \\frac{2}{3}$.\nStep 3: So the $y$-terms must satisfy $\\frac{k}{12} = \\frac{2}{3}$, giving $k = 8$. Check: $\\frac{2}{3}$ of $9x + 12y = 45$ is $6x + 8y = 30$, the first equation ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): copying the first equation's $x$-coefficient instead of scaling the $12$.\n* Choice C ($12$): copying the second equation's $y$-coefficient and ignoring the $\\frac{2}{3}$ scaling.\n* Choice D ($18$): inverting the ratio and computing $12 \\cdot \\frac{9}{6} = 18$, which scales the wrong direction.\n\n**Test Day Takeaway:** One factor must carry every term, both coefficients and the constant, or the two equations are different lines.",
      skills: ["infinite-solutions-condition", "system-solution-types"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$2x - 5y = 3$\n$-6x + 15y = -9$\nThe point $(a, 3)$ is a solution to the given system of equations. What is the value of $a$?",
      choices: [
        // distractor: subtracts $15$ from $3$ instead of adding, solving $2a = -12$.
        { id: "A", text: "$-6$" },
        // distractor: reads the $3$ in $(a, 3)$ as the value of $a$, mixing up the two coordinates.
        { id: "B", text: "$3$" },
        { id: "C", text: "$9$" },
        // distractor: reaches $2a = 18$ but stops before dividing by $2$.
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      hint: "Compare the two equations before doing any elimination.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The second equation is $-3$ times the first, so any point on the first line is a solution. Then $2a - 5(3) = 3$ gives $a = 9$.\n\n**The Full Solution:**\nStep 1: Multiplying $2x - 5y = 3$ by $-3$ gives $-6x + 15y = -9$, so the two equations describe the same line and the system has infinitely many solutions. Eliminating $x$ would leave only $0 = 0$.\nStep 2: So $(a, 3)$ is a solution exactly when it lies on the line $2x - 5y = 3$: $2a - 5(3) = 3$, or $2a - 15 = 3$.\nStep 3: Add $15$ and divide by $2$: $2a = 18$, so $a = 9$. Check: $-6(9) + 15(3) = -54 + 45 = -9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): subtracts $15$ from $3$ instead of adding, solving $2a = -12$.\n* Choice B ($3$): reads the $3$ in $(a, 3)$ as the value of $a$, mixing up the two coordinates.\n* Choice D ($18$): reaches $2a = 18$ but stops before dividing by $2$.\n\n**Test Day Takeaway:** When elimination would wipe out both variables, the equations are the same line; a single equation then pins down the missing coordinate.",
      skills: ["infinite-solutions-condition", "elimination-method"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which of the following systems of linear equations has infinitely many solutions?",
      choices: [
        // distractor: doubling the first equation gives $4x - 10y = 18$, not $20$, so those lines are parallel and distinct and the system has no solution.
        { id: "A", text: "$2x - 5y = 9$ and $4x - 10y = 20$" },
        { id: "B", text: "$3x + 7y = 12$ and $-9x - 21y = -36$" },
        // distractor: doubling the first equation gives $2x + 8y = 12$, not $6$, so again the lines are parallel and distinct.
        { id: "C", text: "$x + 4y = 6$ and $2x + 8y = 6$" },
        // distractor: the sign of the $y$-coefficient changes, so the slopes differ and the lines meet at exactly one point.
        { id: "D", text: "$5x - 2y = 8$ and $5x + 2y = 8$" }
      ],
      correctAnswer: "B",
      hint: "Test whether one equation in each pair is a single constant multiple of the other, constant term included.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~55s):** Multiplying $3x + 7y = 12$ by $-3$ gives $-9x - 21y = -36$, so the two equations describe the same line.\n\n**The Full Solution:**\nStep 1: A system has infinitely many solutions exactly when one equation is a nonzero multiple of the other, coefficients and constant alike.\nStep 2: In choice B the $x$-coefficients give the factor $\\frac{-9}{3} = -3$, and the $y$-coefficients agree since $-3(7) = -21$.\nStep 3: The constant also scales: $-3(12) = -36$, so the second equation is exactly $-3$ times the first and the system has infinitely many solutions. Check: dividing the second equation by $-3$ reproduces the first ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: doubling the first equation gives $4x - 10y = 18$, not $20$, so those lines are parallel and distinct and the system has no solution.\n* Choice C: doubling the first equation gives $2x + 8y = 12$, not $6$, so again the lines are parallel and distinct.\n* Choice D: the sign of the $y$-coefficient changes, so the slopes differ and the lines meet at exactly one point.\n\n**Test Day Takeaway:** Check the constant last. A pair whose coefficients scale but whose constant does not is the classic no-solution trap hiding among infinitely-many choices.",
      skills: ["infinite-solutions-condition", "system-solution-types"]
    }
  ]
};
