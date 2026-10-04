// Practice Test 2 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-7 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H.
// Figure density lifted to official ~20%: M1 carries 5 diagram items
// (Q6 two-way table, Q7 right triangle, Q9 scatterplot, Q13 data table,
// Q16 right triangle), M2 carries 4 (Q3 data table, Q4 similar triangles,
// Q11 right triangle, Q12 dot plot). Numeric MC choices sorted ascending.

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
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
  band: 3,
  question: "The dot plot shows the number of packages delivered by each of $10$ drivers during one hour. What is the mean of the data set?",
  diagram: { type: "dotPlot", params: { data: [{ value: 2, count: 3 }, { value: 4, count: 1 }, { value: 5, count: 1 }, { value: 6, count: 1 }, { value: 8, count: 2 }, { value: 12, count: 2 }], xMin: 1, xMax: 13, xLabel: "Packages delivered" } },
  choices: [
    // distractor: reports the mode, the value plotted most often (2), instead of the mean
    { id: "A", text: "$2$" },
    // distractor: reports the median, the average of the fifth and sixth values (5+6)/2=5.5
    { id: "B", text: "$5.5$" },
    { id: "C", text: "$6.1$" },
    // distractor: reports the range, 12-2=10, which measures spread rather than center
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Each dot is one driver: $2, 2, 2, 4, 5, 6, 8, 8, 12, 12$. The ten values total $61$, so the mean is $\\frac{61}{10} = 6.1$.\n\n**The Full Solution:**\nStep 1: Read one value for every dot, including the repeats. Three dots above $2$, one each above $4$, $5$, and $6$, two above $8$, and two above $12$ give the ten values $2, 2, 2, 4, 5, 6, 8, 8, 12, 12$.\nStep 2: Add them: $2 + 2 + 2 + 4 + 5 + 6 + 8 + 8 + 12 + 12 = 61$.\nStep 3: The mean is the sum divided by the number of values: $\\frac{61}{10} = 6.1$. Check: $10 \\times 6.1 = 61$, the total read from the plot ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the mode, the value with the tallest stack. The most common value is not the average, and here it sits at the bottom of the data.\n* Choice B ($5.5$): reports the median, the average of the fifth and sixth values, $\\frac{5 + 6}{2}$. The two large values of $12$ pull the mean above the median, so the two differ.\n* Choice D ($10$): reports the range, $12 - 2$. Range describes how spread out the values are, not where their center is.\n\n**Test Day Takeaway:** On a dot plot, count dots rather than tick marks: a stack of $k$ dots contributes that value $k$ times to the sum and adds $k$ to the divisor.",
  skills: ["calculate-mean"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Based on a random sample of trucks at a toll plaza, the mean idling time for all trucks at the plaza is estimated to be $47.0$ seconds. The plausible values for this mean are from $43.4$ seconds to $50.6$ seconds. What is the margin of error for this estimate?",
  choices: [
    // distractor: halves the margin a second time, dividing the full interval width 7.2 by 4 instead of by 2
    { id: "A", text: "$1.8$" },
    { id: "B", text: "$3.6$" },
    // distractor: reports the full width of the plausible-value interval, 50.6-43.4=7.2, instead of half of it
    { id: "C", text: "$7.2$" },
    // distractor: reports the lower endpoint of the interval, 43.4, rather than the distance from the estimate to that endpoint
    { id: "D", text: "$43.4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The margin of error is the distance from the estimate to either endpoint: $47.0 - 43.4 = 3.6$.\n\n**The Full Solution:**\nStep 1: A margin of error $E$ turns an estimate into the interval from estimate $-\\,E$ to estimate $+\\,E$. Here the estimate is $47.0$ seconds and the interval runs from $43.4$ to $50.6$ seconds.\nStep 2: Subtract to find $E$ from the lower endpoint: $47.0 - 43.4 = 3.6$ seconds.\nStep 3: The margin of error is $3.6$ seconds. Check with the upper endpoint: $47.0 + 3.6 = 50.6$ seconds, which matches the stated interval ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.8$): halves the width once too often. The full interval is $7.2$ seconds wide; halving gives the margin $3.6$, but halving again gives $1.8$.\n* Choice C ($7.2$): reports the entire width of the interval, $50.6 - 43.4 = 7.2$. The margin of error is only the half-width, the reach on each side of the estimate.\n* Choice D ($43.4$): reports the lower endpoint itself. An endpoint is a plausible value for the mean idling time, not a distance.\n\n**Test Day Takeaway:** Margin of error is a radius, not a diameter: it is the distance from the point estimate to an endpoint, so it is always half the width of the plausible-value interval.",
  skills: ["margin-of-error"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The equation $M = 320 - 7.5t$ gives the mass $M$, in grams, of a tray of apple slices after $t$ minutes of drying. What is the best interpretation of $7.5$ in this context?",
  choices: [
    { id: "A", text: "The mass of the tray of apple slices decreases by $7.5$ grams each minute." },
    // distractor: drops the minus sign in front of 7.5 and reads a decrease as an increase
    { id: "B", text: "The mass of the tray of apple slices increases by $7.5$ grams each minute." },
    // distractor: interprets 7.5 as the initial mass, which is the constant term 320, not the coefficient of t
    { id: "C", text: "The mass of the tray of apple slices is $7.5$ grams before drying begins." },
    // distractor: inverts the rate, reading 7.5 as minutes per gram instead of grams per minute
    { id: "D", text: "The mass of the tray of apple slices decreases by $1$ gram every $7.5$ minutes." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The coefficient of $t$ is $-7.5$, so $M$ falls by $7.5$ grams for each additional minute of drying.\n\n**The Full Solution:**\nStep 1: Write the equation in slope-intercept form: $M = -7.5t + 320$. The slope is $-7.5$ and the $M$-intercept is $320$.\nStep 2: Slope is the change in the output for a one-unit change in the input, so each additional minute changes $M$ by $-7.5$ grams, a loss of $7.5$ grams per minute.\nStep 3: So $7.5$ is the number of grams the mass decreases each minute. Check: at $t = 0$, $M = 320$ grams; at $t = 1$, $M = 320 - 7.5 = 312.5$ grams. The drop is $7.5$ grams in one minute ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (an increase of $7.5$ grams per minute): keeps the magnitude but drops the minus sign in $-7.5t$. Substituting $t = 1$ gives $312.5$ grams, less than the starting $320$ grams, so the mass is falling.\n* Choice C (a starting mass of $7.5$ grams): assigns $7.5$ the role of the starting amount. The mass at $t = 0$ is the constant term, $320$ grams, not $7.5$ grams.\n* Choice D ($1$ gram every $7.5$ minutes): flips the units. Losing $1$ gram every $7.5$ minutes is a rate of about $0.13$ gram per minute, not $7.5$ grams per minute.\n\n**Test Day Takeaway:** Read the slope with its units attached, output units per input unit, and let the sign tell you the direction; the constant term, never the slope, is the starting value.",
  skills: ["slope-intercept-form"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$12n + 6n + 45 = 315$\nWhat value of $n$ is the solution to the given equation?",
  choices: [
    // distractor: folds the constant 45 in with the coefficients, solving 63n=315 to get 5
    { id: "A", text: "$5$" },
    { id: "B", text: "$15$" },
    // distractor: divides 315 by 18 without first subtracting the constant 45, giving 17.5
    { id: "C", text: "$17.5$" },
    // distractor: adds 45 to both sides instead of subtracting it, solving 18n=360 to get 20
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Combine the like terms to get $18n + 45 = 315$, so $18n = 270$ and $n = 15$.\n\n**The Full Solution:**\nStep 1: Combine the two terms that contain $n$: $12n + 6n = 18n$, so the equation becomes $18n + 45 = 315$.\nStep 2: Subtract $45$ from both sides to isolate the variable term: $18n = 270$.\nStep 3: Divide both sides by $18$: $n = 15$. Check: $12(15) + 6(15) + 45 = 180 + 90 + 45 = 315$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): treats $45$ as another coefficient of $n$, solving $63n = 315$ to get $5$. The $45$ has no $n$ attached, so it cannot join $12n$ and $6n$.\n* Choice C ($17.5$): combines the like terms correctly but divides before subtracting, computing $\\frac{315}{18} = 17.5$ and leaving the $45$ unaccounted for.\n* Choice D ($20$): moves the $45$ to the other side with the wrong sign, solving $18n = 315 + 45 = 360$ to get $20$.\n\n**Test Day Takeaway:** Only terms carrying the same variable combine; strip the lone constant off with the opposite operation before you divide by the coefficient.",
  skills: ["combining-like-terms"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the $xy$-plane, line $j$ passes through the point $(6, -3)$ and is parallel to the line with equation $4x + 3y = 21$. Which equation defines line $j$?",
  choices: [
    // distractor: swaps the coefficients of x and y, which changes the slope to -3/4, then fits the point (6, -3)
    { id: "A", text: "$3x + 4y = 6$" },
    { id: "B", text: "$4x + 3y = 15$" },
    // distractor: repeats the given line itself and never uses the point (6, -3)
    { id: "C", text: "$4x + 3y = 21$" },
    // distractor: flips the sign of the y term, giving slope 4/3, then fits the point: 4(6) - 3(-3) = 33
    { id: "D", text: "$4x - 3y = 33$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A line parallel to $4x + 3y = 21$ keeps the left side $4x + 3y$, so only the constant changes. Substituting $(6, -3)$ gives $4(6) + 3(-3) = 15$.\n\n**The Full Solution:**\nStep 1: Solve $4x + 3y = 21$ for $y$: $3y = -4x + 21$, so $y = -\\frac{4}{3}x + 7$. The given line has slope $-\\frac{4}{3}$.\nStep 2: Line $j$ is parallel, so it also has slope $-\\frac{4}{3}$, and any line with that slope can be written $4x + 3y = c$ for some constant $c$.\nStep 3: Line $j$ passes through $(6, -3)$, so $c = 4(6) + 3(-3) = 24 - 9 = 15$, and line $j$ is $4x + 3y = 15$. Check: $4(6) + 3(-3) = 15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 4y = 6$): swaps the coefficients of $x$ and $y$, which changes the slope to $-\\frac{3}{4}$. Parallel means the slope is unchanged, so both coefficients must stay where they are.\n* Choice C ($4x + 3y = 21$): is the given line itself. It has the right slope, but $4(6) + 3(-3) = 15$, not $21$, so it does not pass through $(6, -3)$.\n* Choice D ($4x - 3y = 33$): passes through $(6, -3)$ but has slope $\\frac{4}{3}$, because the sign of the $y$ term was flipped. That line crosses the given line rather than running parallel to it.\n\n**Test Day Takeaway:** In standard form, two lines are parallel exactly when the $x$ and $y$ coefficients match; keep that side untouched and let the given point set the constant.",
  skills: ["writing-parallel-equation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the rate at which each of three conveyor belts loads crates, in crates per minute. At the rate shown, how many crates does conveyor belt B load in $3.5$ hours?",
  questionTable: { headers: ["Conveyor belt", "Rate (crates per minute)"], rows: [["A", "30"], ["B", "24"], ["C", "18"]] },
  choices: [
    // distractor: multiplies the per-minute rate by 3.5 without converting hours to minutes, giving 24(3.5)=84
    { id: "A", text: "$84$" },
    // distractor: converts only one hour, computing 24(60)=1440 and ignoring the remaining 2.5 hours
    { id: "B", text: "$1{,}440$" },
    { id: "C", text: "$5{,}040$" },
    // distractor: reads conveyor A's rate of 30 crates per minute instead of conveyor B's, giving 30(210)=6300
    { id: "D", text: "$6{,}300$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $3.5$ hours is $3.5(60) = 210$ minutes, and conveyor belt B loads $24$ crates per minute, so $24(210) = 5{,}040$ crates.\n\n**The Full Solution:**\nStep 1: The rate is given per minute, so convert the running time to minutes: $3.5 \\text{ hours} \\times \\frac{60 \\text{ minutes}}{1 \\text{ hour}} = 210$ minutes.\nStep 2: Read conveyor belt B's row: $24$ crates per minute. Set up the proportion $\\frac{24 \\text{ crates}}{1 \\text{ minute}} = \\frac{c \\text{ crates}}{210 \\text{ minutes}}$.\nStep 3: Solve: $c = 24(210) = 5{,}040$ crates. Check the units: $\\frac{\\text{crates}}{\\text{minute}} \\times \\text{minutes} = \\text{crates}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($84$): multiplies $24$ by $3.5$ directly, mixing a per-minute rate with a time in hours. That product, $84$, is the number of crates loaded in $3.5$ minutes.\n* Choice B ($1{,}440$): converts one hour only, computing $24(60) = 1{,}440$, and never accounts for the other $2.5$ hours.\n* Choice D ($6{,}300$): uses the rate in conveyor belt A's row, $30$ crates per minute, giving $30(210) = 6{,}300$ crates.\n\n**Test Day Takeaway:** Make the time units match the rate's units before multiplying, and confirm you pulled the row the question actually names.",
  skills: ["unit-conversion"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, a triangle has vertices at $(-4, 1)$, $(-4, 13)$, and $(6, 7)$. What is the area, in square units, of the triangle?",
  choices: [
    // distractor: uses the rise 6 and run 10 between (-4, 1) and (6, 7) as the base and height, giving (1/2)(10)(6) = 30
    { id: "A", text: "$30$" },
    // distractor: uses the y-coordinate 7 of the third vertex as the height instead of the horizontal distance 10, giving (1/2)(12)(7) = 42
    { id: "B", text: "$42$" },
    { id: "C", text: "$60$" },
    // distractor: multiplies base by height without the factor of one half, giving 12(10) = 120
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertices $(-4, 1)$ and $(-4, 13)$ form a vertical base of length $12$, and $(6, 7)$ is $10$ units to the right of the line $x = -4$, so the area is $\\frac{1}{2}(12)(10) = 60$.\n\n**The Full Solution:**\nStep 1: Two vertices share the $x$-coordinate $-4$, so the side joining them is vertical. Use it as the base: its length is $13 - 1 = 12$.\nStep 2: The height is the perpendicular distance from the third vertex, $(6, 7)$, to the line $x = -4$ that contains the base: $6 - (-4) = 10$.\nStep 3: Area $= \\frac{1}{2}(\\text{base})(\\text{height}) = \\frac{1}{2}(12)(10) = 60$ square units. Check with the shoelace formula: $\\frac{1}{2}\\left|(-4)(13 - 7) + (-4)(7 - 1) + 6(1 - 13)\\right| = \\frac{1}{2}\\left|-24 - 24 - 72\\right| = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): uses the run $10$ and the rise $6$ from $(-4, 1)$ to $(6, 7)$ as base and height, $\\frac{1}{2}(10)(6) = 30$. Those two lengths are legs of a different, smaller triangle.\n* Choice B ($42$): uses the third vertex's $y$-coordinate, $7$, as the height, $\\frac{1}{2}(12)(7) = 42$. The height to a vertical base is a horizontal distance.\n* Choice D ($120$): multiplies base by height and forgets the $\\frac{1}{2}$, giving the area of the rectangle $12$ by $10$.\n\n**Test Day Takeaway:** When two vertices share an $x$- or $y$-coordinate, use that side as the base; the height is then just the horizontal or vertical distance from the third vertex to that side.",
  skills: ["triangle-area"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$f(x) = \\frac{2}{5}x - 9$\nThe function $f$ is defined by the given equation. For what value of $x$ is $f(x) = 13$?",
  correctAnswer: "55",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $55$.**\n\n**The Fast Way (~20s):** $\\frac{2}{5}x - 9 = 13$ gives $\\frac{2}{5}x = 22$, and multiplying by $\\frac{5}{2}$ gives $x = 55$.\n\n**The Full Solution:**\nStep 1: The output is given, so set the rule equal to it: $\\frac{2}{5}x - 9 = 13$.\nStep 2: Add $9$ to both sides: $\\frac{2}{5}x = 22$.\nStep 3: Divide both sides by $\\frac{2}{5}$, which is the same as multiplying by $\\frac{5}{2}$: $x = 22 \\cdot \\frac{5}{2} = 55$. Check: $f(55) = \\frac{2}{5}(55) - 9 = 22 - 9 = 13$ ✓\n\n**Common Mistakes:**\n* $10$: subtracts $9$ from $13$ instead of adding, solving $\\frac{2}{5}x = 4$.\n* $8.8$: multiplies $22$ by $\\frac{2}{5}$ instead of dividing by it, undoing the coefficient in the wrong direction.\n* $-3.8$: evaluates $f(13)$ rather than solving $f(x) = 13$, answering the reverse question.\n\n**Test Day Takeaway:** When the output of a function is given and the input is unknown, undo the operations in reverse order: clear the constant first, then the coefficient.",
  skills: ["function-evaluation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Of the seeds in a bag, $60\\%$ are variety R and the rest are variety S. Of the variety R seeds, $85\\%$ germinate, and of the variety S seeds, $60\\%$ germinate. If a seed that germinated is selected at random, what is the probability that it is variety S?",
  choices: [
    // distractor: reports the joint probability 0.40(0.60) = 0.24, the share of all seeds that are variety S and germinate, without dividing by the share that germinate
    { id: "A", text: "$0.24$" },
    { id: "B", text: "$0.32$" },
    // distractor: reports 0.40, the share of all seeds that are variety S, ignoring the information that the seed germinated
    { id: "C", text: "$0.40$" },
    // distractor: reverses the condition and reports 0.60, the germination rate among variety S seeds
    { id: "D", text: "$0.60$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Out of $100$ seeds, $51$ are variety R seeds that germinate and $24$ are variety S seeds that germinate, so the probability is $\\frac{24}{75} = 0.32$.\n\n**The Full Solution:**\nStep 1: Imagine the bag holds $100$ seeds. Variety R accounts for $60$ of them and variety S for the other $40$.\nStep 2: Count the germinating seeds in each group: $0.85(60) = 51$ from variety R and $0.60(40) = 24$ from variety S, for $51 + 24 = 75$ germinating seeds in all.\nStep 3: The seed is selected from the $75$ that germinated, so the probability that it is variety S is $\\frac{24}{75} = 0.32$. Check: the probability that it is variety R is $\\frac{51}{75} = 0.68$, and $0.32 + 0.68 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.24$): computes $0.40(0.60) = 0.24$, the share of all the seeds that are both variety S and germinate. The seed is chosen only from the germinating seeds, so divide by $0.75$, not by $1$.\n* Choice C ($0.40$): reports the share of all the seeds that are variety S, ignoring that the seed is known to have germinated. Variety R germinates more often, so it makes up more of the germinating seeds.\n* Choice D ($0.60$): reports the germination rate among variety S seeds, the probability of germinating given variety S, which is the reverse of what is asked.\n\n**Test Day Takeaway:** In a conditional probability, the denominator is the group the selection is made from (here, the germinating seeds), not the whole population.",
  skills: ["conditional-probability"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A right triangle has legs of lengths $6\\sqrt{5}$ centimeters and $10\\sqrt{5}$ centimeters. What is the area, in square centimeters, of the triangle?",
  correctAnswer: "150",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~20s):** The legs are the base and height, so the area is $\\frac{1}{2}(6\\sqrt{5})(10\\sqrt{5}) = \\frac{1}{2}(60)(5) = 150$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs are perpendicular, so one leg is the base and the other is the height: area $= \\frac{1}{2}(6\\sqrt{5})(10\\sqrt{5})$.\nStep 2: Multiply the whole-number parts and the radical parts separately: $6 \\cdot 10 = 60$ and $\\sqrt{5} \\cdot \\sqrt{5} = 5$, so the product of the legs is $60 \\cdot 5 = 300$.\nStep 3: Take half: $\\frac{1}{2}(300) = 150$ square centimeters. Check: $6\\sqrt{5} \\approx 13.42$ and $10\\sqrt{5} \\approx 22.36$, and $\\frac{1}{2}(13.42)(22.36) \\approx 150.0$ ✓\n\n**Common Mistakes:**\n* $300$: multiplies the legs correctly but forgets the factor of $\\frac{1}{2}$ in the triangle area formula.\n* $30$: treats $\\sqrt{5} \\cdot \\sqrt{5}$ as $1$ instead of $5$, computing $\\frac{1}{2}(60) = 30$.\n\n**Test Day Takeaway:** When the legs carry the same radical, $\\sqrt{a} \\cdot \\sqrt{a} = a$ clears the radicals, so the area comes out as a whole number.",
  skills: ["triangle-area"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$2$", "$51$"], ["$5$", "$42$"], ["$9$", "$30$"], ["$14$", "$15$"]] },
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: inverts the ratio, dividing the change in x by the change in f(x) to get 3/(-9) = -1/3
    { id: "B", text: "$-\\frac{1}{3}$" },
    // distractor: inverts the ratio and drops the sign, reporting 1/3
    { id: "C", text: "$\\frac{1}{3}$" },
    // distractor: subtracts the coordinates in opposite orders, computing (51 - 42)/(5 - 2) = 3 instead of (42 - 51)/(5 - 2)
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** From $(2, 51)$ to $(5, 42)$, $f(x)$ falls $9$ as $x$ rises $3$, so the slope is $\\frac{-9}{3} = -3$.\n\n**The Full Solution:**\nStep 1: Read two rows of the table as points on the graph: $(2, 51)$ and $(5, 42)$.\nStep 2: Apply the slope formula: $\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{42 - 51}{5 - 2} = \\frac{-9}{3} = -3$.\nStep 3: The slope of a line is the same between any two of its points. Check with the last two rows: $\\frac{15 - 30}{14 - 9} = \\frac{-15}{5} = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{3}$): divides the change in $x$ by the change in $f(x)$, $\\frac{3}{-9}$, which is the reciprocal of the slope.\n* Choice C ($\\frac{1}{3}$): makes the same inversion and also drops the negative sign, even though $f(x)$ decreases as $x$ increases.\n* Choice D ($3$): subtracts in opposite orders, computing $\\frac{51 - 42}{5 - 2} = 3$. Both differences must start from the same point, or the sign flips.\n\n**Test Day Takeaway:** Slope is change in $y$ over change in $x$, with both differences taken in the same order; a quick look at whether the outputs rise or fall confirms the sign.",
  skills: ["slope-from-points"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Renting a tent costs a flat fee of \\$45 plus \\$18 per day. Kai paid a total of \\$207 to rent a tent for $d$ days. Which equation represents this situation?",
  choices: [
    // distractor: attaches the \$45 flat fee to each day and charges the \$18 daily rate only once, swapping the two amounts
    { id: "A", text: "$45d + 18 = 207$" },
    // distractor: subtracts the flat fee from the daily charges instead of adding it to them
    { id: "B", text: "$18d - 45 = 207$" },
    { id: "C", text: "$18d + 45 = 207$" },
    // distractor: adds the flat fee to the daily rate and charges the combined \$63 every day, as though the fee were paid daily
    { id: "D", text: "$63d = 207$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The daily charge is $18d$ dollars and the flat fee is added once, so the total is $18d + 45 = 207$.\n\n**The Full Solution:**\nStep 1: The rental costs \\$18 for each of the $d$ days, so the daily charges come to $18d$ dollars.\nStep 2: The \\$45 flat fee is paid once, no matter how many days, so it is added to the daily charges: the total cost is $18d + 45$ dollars.\nStep 3: Kai's total was \\$207, so $18d + 45 = 207$. Check: solving gives $18d = 162$ and $d = 9$, and $18(9) + 45 = 162 + 45 = 207$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45d + 18 = 207$): swaps the two amounts, charging the \\$45 fee every day and the \\$18 rate only once.\n* Choice B ($18d - 45 = 207$): subtracts the flat fee. A fee adds to the total cost; it does not reduce it.\n* Choice D ($63d = 207$): combines the fee and the daily rate into \\$63 per day, which charges the flat fee once for every day of the rental.\n\n**Test Day Takeaway:** In a \"flat fee plus a rate\" situation, the rate multiplies the variable and the one-time fee stands alone as the constant term.",
  skills: ["word-problem-to-equation"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A jar contains $6$ green marbles and $4$ purple marbles. If two of these marbles are selected at random without replacement, what is the probability that both are green? (Express your answer as a decimal or fraction, not as a percent.)",
  correctAnswer: "1/3",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{1}{3}$.**\n\n**The Fast Way (~25s):** $\\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: The jar holds $6 + 4 = 10$ marbles, $6$ of them green, so the probability that the first marble selected is green is $\\frac{6}{10}$.\nStep 2: The first marble is not replaced. If it was green, $5$ green marbles remain among $9$ marbles, so the probability that the second is also green is $\\frac{5}{9}$.\nStep 3: Multiply the two probabilities: $\\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$. Check by counting ordered pairs: $\\frac{6 \\cdot 5}{10 \\cdot 9} = \\frac{30}{90} = \\frac{1}{3}$ ✓\n\n**Common Mistakes:**\n* $\\frac{9}{25}$: multiplies $\\frac{6}{10}$ by itself, treating the selection as if the first marble were returned to the jar.\n* $\\frac{3}{10}$: lowers the green count to $5$ but leaves the total at $10$, updating the numerator without the denominator.\n* $\\frac{3}{5}$: stops after the first selection and reports the probability for one marble instead of two.\n\n**Test Day Takeaway:** Without replacement, both counts drop by one before the second selection; update the numerator and the denominator together, then multiply.",
  skills: ["probability-basics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the xy-plane, line $m$ passes through the points $(-3, 8)$ and $(5, 2)$. Line $n$ is perpendicular to line $m$. What is the slope of line $n$?",
  choices: [
    // distractor: flips -3/4 to -4/3 but keeps the negative sign instead of changing it
    { id: "A", text: "$-\\frac{4}{3}$" },
    // distractor: reports the slope of line m itself, -3/4, which would make the lines parallel
    { id: "B", text: "$-\\frac{3}{4}$" },
    // distractor: changes the sign of -3/4 without taking the reciprocal, giving 3/4
    { id: "C", text: "$\\frac{3}{4}$" },
    { id: "D", text: "$\\frac{4}{3}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Line $m$ has slope $\\frac{2 - 8}{5 - (-3)} = -\\frac{3}{4}$, and the negative reciprocal of $-\\frac{3}{4}$ is $\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Use the two given points to find the slope of line $m$: $\\frac{2 - 8}{5 - (-3)} = \\frac{-6}{8} = -\\frac{3}{4}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$, so the slope $s$ of line $n$ satisfies $-\\frac{3}{4}s = -1$.\nStep 3: Multiply both sides by $-\\frac{4}{3}$: $s = \\frac{4}{3}$. Check: $-\\frac{3}{4} \\cdot \\frac{4}{3} = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): flips the fraction but leaves the sign negative. The product $-\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = 1$, not $-1$, so those lines are not perpendicular.\n* Choice B ($-\\frac{3}{4}$): repeats the slope of line $m$. Two lines with equal slopes are parallel, never perpendicular.\n* Choice C ($\\frac{3}{4}$): changes the sign but skips the reciprocal. Here $-\\frac{3}{4} \\cdot \\frac{3}{4} = -\\frac{9}{16}$, which is not $-1$.\n\n**Test Day Takeaway:** Perpendicular slopes require both moves at once, flip the fraction and switch the sign, and the check is quick: their product must be exactly $-1$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$y = x^{2} + 4x + 3$\n$y = mx - 6$\nIn the given system of equations, $m$ is a positive constant. If the graphs of the two equations in the $xy$-plane intersect at exactly one point, what is the value of $m$?",
  choices: [
    // distractor: solves (4 - m)^2 = 36 correctly but reports the negative root, m = -2, which the condition that m is positive rules out
    { id: "A", text: "$-2$" },
    // distractor: sets only the linear coefficient 4 - m equal to zero and never uses the -4ac part of the discriminant
    { id: "B", text: "$4$" },
    // distractor: drops the factor of 4 in the discriminant, solving (4 - m)^2 = 9 instead of (4 - m)^2 = 36, and reports the larger root 7
    { id: "C", text: "$7$" },
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Setting the two expressions for $y$ equal gives $x^2 + (4 - m)x + 9 = 0$; exactly one solution means $(4 - m)^2 - 36 = 0$, so $m = -2$ or $m = 10$, and the positive value is $10$.\n\n**The Full Solution:**\nStep 1: Substitute $mx - 6$ for $y$ in the first equation: $mx - 6 = x^2 + 4x + 3$, which rearranges to $x^2 + (4 - m)x + 9 = 0$.\nStep 2: The graphs intersect at exactly one point when this quadratic has exactly one real root, which happens when its discriminant is $0$: $(4 - m)^2 - 4(1)(9) = 0$, so $(4 - m)^2 = 36$.\nStep 3: Then $4 - m = 6$ or $4 - m = -6$, so $m = -2$ or $m = 10$. Since $m$ is positive, $m = 10$. Check: with $m = 10$ the quadratic is $x^2 - 6x + 9 = (x - 3)^2 = 0$, a single root $x = 3$, and both equations give $y = 24$ there ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): is the other root of $(4 - m)^2 = 36$. It also makes the graphs meet at exactly one point, at $x = -3$, but the stem requires $m$ to be positive.\n* Choice B ($4$): sets only the coefficient $4 - m$ equal to $0$. Then the quadratic is $x^2 + 9 = 0$, which has no real solutions at all.\n* Choice C ($7$): forgets the $4$ in $b^2 - 4ac$, solving $(4 - m)^2 = 9$ and taking the larger root.\n\n**Test Day Takeaway:** A line and a parabola meet at exactly one point when the quadratic you get by substitution has discriminant $0$; solve for the parameter, then use the stated condition to choose between the roots.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, point $B$ lies on $\\overline{AD}$ and point $C$ lies on $\\overline{AE}$. The area of triangle $ABC$ is $48$ square units. What is the area, in square units, of quadrilateral $BCED$?",
  diagram: { type: "nestedRightTriangles", params: { labels: { A: "A", B: "B", C: "C", D: "D", E: "E" }, sideLabels: { AC: "6", CE: "9" }, figureNote: true } },
  correctAnswer: "252",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is $252$.**\n\n**The Fast Way (~45s):** $AE = 6 + 9 = 15$, so the similarity ratio is $\\frac{15}{6} = \\frac{5}{2}$ and triangle $ADE$ has area $48 \\cdot \\frac{25}{4} = 300$. The quadrilateral is $300 - 48 = 252$.\n\n**The Full Solution:**\nStep 1: The figure marks right angles at $C$ and $E$. Triangles $ABC$ and $ADE$ share $\\angle A$ and each has a right angle ($\\angle ACB$ and $\\angle AED$), so they are similar. The corresponding sides along the shared ray are $AC = 6$ and $AE = 6 + 9 = 15$.\nStep 2: Areas of similar figures scale as the square of the linear ratio: $\\left(\\frac{15}{6}\\right)^2 = \\frac{25}{4}$. So triangle $ADE$ has area $48 \\cdot \\frac{25}{4} = 300$ square units.\nStep 3: Quadrilateral $BCED$ is what is left when the small triangle is removed from the large one: $300 - 48 = 252$ square units. Check: the removed piece is $\\frac{48}{300} = \\frac{4}{25}$ of the whole, exactly the square of $\\frac{2}{5}$ ✓\n\n**Common Mistakes:** Entering $300$ (the area of triangle $ADE$, forgetting to remove the small triangle that the quadrilateral excludes); entering $120$ (scaling the area by the linear ratio $\\frac{5}{2}$ instead of its square, $48 \\cdot \\frac{5}{2} = 120$); entering $72$ (making that same linear-ratio error and then subtracting, $120 - 48 = 72$).\n\n**Test Day Takeaway:** Areas of similar figures scale by the square of the side ratio; for the region between two nested similar figures, compute both areas first and subtract only at the end.",
  skills: ["similar-triangles"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$f(x) = -4x^{2} + 24x + c$\nThe function $f$ is defined by the given equation, where $c$ is a constant. The maximum value of $f(x)$ is $41$. What is the value of $f(0)$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: completes the square without factoring -4 out of the x-terms, writing the vertex value as 9 + c = 41 and getting c = 32
    { id: "B", text: "$32$" },
    // distractor: reports the maximum value, 41, as f(0), treating the maximum as the constant term
    { id: "C", text: "$41$" },
    // distractor: places the vertex at x = -3 by using b/(2a) without the negative sign, solving -36 - 72 + c = 41 to get c = 149
    { id: "D", text: "$149$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The vertex is at $x = -\\frac{24}{2(-4)} = 3$, and $f(3) = -36 + 72 + c = 36 + c = 41$, so $c = 5$; since $f(0) = c$, the answer is $5$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^2$ is negative, so the graph opens downward and the maximum occurs at the vertex, $x = -\\frac{b}{2a} = -\\frac{24}{2(-4)} = 3$.\nStep 2: The maximum value is $f(3) = -4(9) + 24(3) + c = 36 + c$. Setting $36 + c = 41$ gives $c = 5$.\nStep 3: Then $f(0) = -4(0)^2 + 24(0) + 5 = 5$. Check: in vertex form $f(x) = -4(x - 3)^2 + 41$, and $f(0) = -4(9) + 41 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($32$): completes the square without factoring out $-4$, treating the vertex value as $9 + c$ instead of $36 + c$, which gives $c = 32$.\n* Choice C ($41$): reports the maximum value as $f(0)$. The graph reaches $41$ at $x = 3$, not at $x = 0$.\n* Choice D ($149$): drops the negative sign in $-\\frac{b}{2a}$, puts the vertex at $x = -3$, and solves $-36 - 72 + c = 41$ to get $c = 149$.\n\n**Test Day Takeaway:** For $f(x) = ax^2 + bx + c$, the value $f(0)$ is just $c$; find $c$ by evaluating $f$ at the vertex $x = -\\frac{b}{2a}$ and setting that equal to the given maximum.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$q(x) = x^{2} - 6x + 1$\nThe function $q$ is defined by the given equation. The function $r$ is defined by $r(x) = q(x + 4)$. In the $xy$-plane, the graph of $y = r(x)$ has its vertex at $(a, b)$. What is the value of $a + b$?",
  choices: [
    { id: "A", text: "$-9$" },
    // distractor: never applies the shift and uses the vertex of q, (3, -8), giving 3 + (-8) = -5
    { id: "B", text: "$-5$" },
    // distractor: shifts the vertex 4 units right instead of left, to (7, -8), giving 7 + (-8) = -1
    { id: "C", text: "$-1$" },
    // distractor: locates the vertex of q at x = -3 by using b/(2a) without the negative sign, then shifts to (-7, 28), giving 21
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The vertex of $q$ is $(3, -8)$, and replacing $x$ with $x + 4$ shifts the graph $4$ units left, to $(-1, -8)$, so $a + b = -9$.\n\n**The Full Solution:**\nStep 1: Complete the square: $q(x) = x^2 - 6x + 9 - 8 = (x - 3)^2 - 8$, so the vertex of the graph of $q$ is $(3, -8)$.\nStep 2: Then $r(x) = q(x + 4) = (x + 4 - 3)^2 - 8 = (x + 1)^2 - 8$, so the vertex of the graph of $r$ is $(-1, -8)$. Adding $4$ inside the function moves the graph $4$ units left.\nStep 3: So $a = -1$ and $b = -8$, and $a + b = -9$. Check: $r(-1) = q(3) = 9 - 18 + 1 = -8$, and $r(-2) = r(0) = -7$, symmetric about $x = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): uses the vertex of $q$, $(3, -8)$, and never applies the transformation.\n* Choice C ($-1$): shifts the vertex $4$ units right, to $(7, -8)$. Replacing $x$ with $x + 4$ moves the graph left.\n* Choice D ($21$): finds the vertex of $q$ at $x = -3$ by dropping the sign in $-\\frac{b}{2a}$, uses $q(-3) = 28$, and shifts to $(-7, 28)$.\n\n**Test Day Takeaway:** For $r(x) = q(x + h)$ with $h > 0$, the graph moves $h$ units left and the $y$-coordinate of the vertex does not change; find the original vertex first, then shift it.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In triangle $PQR$, the measure of angle $P$ is $3x^\\circ$ and the measure of angle $Q$ is $(2x + 10)^\\circ$. An exterior angle of the triangle at vertex $R$ has measure $(4x + 30)^\\circ$. What is the measure, in degrees, of angle $R$?",
  choices: [
    // distractor: stops at the value of x, 20, instead of substituting it back to find an angle measure
    { id: "A", text: "$20$" },
    // distractor: reports the measure of angle P, 3(20) = 60 degrees, rather than angle R
    { id: "B", text: "$60$" },
    { id: "C", text: "$70$" },
    // distractor: reports the exterior angle, 4(20) + 30 = 110 degrees, instead of the interior angle supplementary to it
    { id: "D", text: "$110$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** An exterior angle equals the sum of the two remote interior angles, so $4x + 30 = 3x + (2x + 10)$, giving $x = 20$; the exterior angle is $110^\\circ$, so angle $R$ is $180^\\circ - 110^\\circ = 70^\\circ$.\n\n**The Full Solution:**\nStep 1: The exterior angle at $R$ and the interior angle at $R$ form a linear pair, and the three interior angles sum to $180^\\circ$, so the exterior angle equals the sum of angles $P$ and $Q$: $4x + 30 = 3x + 2x + 10$.\nStep 2: Simplify: $4x + 30 = 5x + 10$, so $x = 20$.\nStep 3: The exterior angle measures $4(20) + 30 = 110^\\circ$, so angle $R$ measures $180^\\circ - 110^\\circ = 70^\\circ$. Check: angle $P = 60^\\circ$, angle $Q = 2(20) + 10 = 50^\\circ$, and $60 + 50 + 70 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): stops at $x = 20$. That is the value of the variable, not the measure of an angle.\n* Choice B ($60$): reports angle $P$, $3(20) = 60^\\circ$, instead of angle $R$.\n* Choice D ($110$): reports the exterior angle at $R$. The interior angle is its supplement, $180^\\circ - 110^\\circ$.\n\n**Test Day Takeaway:** An exterior angle of a triangle equals the sum of the two interior angles that are not next to it; solve for the variable, then make sure you report the angle the question names.",
  skills: ["triangle-angle-sum"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$2x^{3} + ax^{2} - 29x + 30 = (x - 2)(2x^{2} + bx + c)$\nIn the given equation, $a$, $b$, and $c$ are constants. The equation is true for all values of $x$. What is the value of $b$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~40s):** Matching constant terms gives $-2c = 30$, so $c = -15$; matching $x$-terms gives $c - 2b = -29$, so $-15 - 2b = -29$ and $b = 7$.\n\n**The Full Solution:**\nStep 1: Expand the right side: $(x - 2)(2x^2 + bx + c) = 2x^3 + (b - 4)x^2 + (c - 2b)x - 2c$.\nStep 2: The constant terms must match: $-2c = 30$, so $c = -15$. The $x$-terms must match: $c - 2b = -29$, so $-15 - 2b = -29$, which gives $-2b = -14$ and $b = 7$.\nStep 3: The $x^2$-terms give $a = b - 4 = 3$, so the left side is $2x^3 + 3x^2 - 29x + 30$. Check: $(x - 2)(2x^2 + 7x - 15) = 2x^3 + 7x^2 - 15x - 4x^2 - 14x + 30 = 2x^3 + 3x^2 - 29x + 30$ ✓\n\n**Common Mistakes:**\n* $3$: reports the value of $a$, the coefficient of $x^2$ on the left side, instead of $b$.\n* $-15$: reports the value of $c$, the first constant found, instead of continuing to $b$.\n* $22$: makes a sign error in the constant term, taking $c = 15$, and then solves $15 - 2b = -29$.\n\n**Test Day Takeaway:** When an equation is true for all values of $x$, the coefficients of like terms on the two sides must be equal; expand the factored side and match the terms you know; the constant and $x$-terms here determine $b$ without ever needing $a$.",
  skills: ["finding-roots-factoring"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the quadratic function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. The equation $f(x) = -22$ has two solutions. What is the product of the solutions?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$-16$"], ["$3$", "$-40$"], ["$5$", "$-40$"], ["$7$", "$-16$"]] },
  choices: [
    // distractor: applies the product rule to f(x) = 0 instead of f(x) = -22, reporting 5/3 as the product
    { id: "A", text: "$\\frac{5}{3}$" },
    // distractor: reports the sum of the two solutions, 24/3 = 8, instead of their product
    { id: "B", text: "$8$" },
    { id: "C", text: "$9$" },
    // distractor: reads the product off 3x^2 - 24x + 27 = 0 as the constant 27, forgetting to divide by the leading coefficient 3
    { id: "D", text: "$27$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** The table's symmetry gives $f(x) = 3(x - 4)^2 - 43$, so $f(x) = -22$ becomes $3x^2 - 24x + 27 = 0$ and the product of the roots is $\\frac{27}{3} = 9$.\n\n**The Full Solution:**\nStep 1: The table pairs $f(3) = f(5) = -40$ and $f(1) = f(7) = -16$, so the axis of symmetry is $x = 4$ and $f(x) = a(x - 4)^2 + c$. From $f(3) = a + c = -40$ and $f(1) = 9a + c = -16$, subtracting gives $8a = 24$, so $a = 3$ and $c = -43$.\nStep 2: Expand: $f(x) = 3(x - 4)^2 - 43 = 3x^2 - 24x + 5$. Setting $f(x) = -22$ gives $3x^2 - 24x + 5 = -22$, or $3x^2 - 24x + 27 = 0$.\nStep 3: For $ax^2 + bx + c = 0$ the product of the roots is $\\frac{c}{a} = \\frac{27}{3} = 9$. Check: dividing through by $3$ gives $x^2 - 8x + 9 = 0$, whose discriminant $64 - 36 = 28$ is positive, so two distinct solutions really do exist and their product is $9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{3}$): applies the product rule to $f(x) = 0$, whose constant term is $5$. Moving the $-22$ across changes the constant to $27$, and only that equation has the two solutions in question.\n* Choice B ($8$): reports the sum of the roots, $\\frac{-(-24)}{3} = 8$. Sum uses $-\\frac{b}{a}$; product uses $\\frac{c}{a}$.\n* Choice D ($27$): reads the constant term $27$ as the product directly, skipping the division by the leading coefficient $3$.\n\n**Test Day Takeaway:** Matching outputs in a table locate the axis of symmetry, which is enough to rebuild the quadratic; once the equation is written equal to zero, the sum of the roots is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$.",
  skills: ["quadratic-factoring"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $h(t) = -5t^{2} + 180t$ gives the height, in meters, of a rocket $t$ seconds after it is launched. For how many seconds is the height of the rocket at least $1{,}375$ meters?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~50s):** Solving $-5t^2 + 180t = 1{,}375$ reduces to $t^2 - 36t + 275 = 0$, whose roots are $t = 11$ and $t = 25$, so the rocket is at least $1{,}375$ meters high for $25 - 11 = 14$ seconds.\n\n**The Full Solution:**\nStep 1: The question asks when $-5t^2 + 180t \\ge 1{,}375$, so find the boundary times by solving the equation $-5t^2 + 180t = 1{,}375$.\nStep 2: Rearrange to $5t^2 - 180t + 1{,}375 = 0$ and divide every term by $5$: $t^2 - 36t + 275 = 0$. Factoring gives $(t - 11)(t - 25) = 0$, so $t = 11$ and $t = 25$.\nStep 3: The parabola opens downward, so the height is at least $1{,}375$ meters exactly between those two times, an interval $25 - 11 = 14$ seconds long. Check: $h(11) = -605 + 1{,}980 = 1{,}375$ and $h(18) = -1{,}620 + 3{,}240 = 1{,}620$, above $1{,}375$, so the times inside the interval do qualify ✓\n\n**Common Mistakes:**\n* $11$: reports the time when the rocket first reaches $1{,}375$ meters, not how long it stays at or above that height.\n* $25$: reports the time when the rocket falls back below $1{,}375$ meters, again a time rather than a length of time.\n* $36$: adds the two boundary times, $11 + 25$, instead of subtracting them.\n\n**Test Day Takeaway:** A \"for how many seconds\" question about a downward-opening quadratic asks for the width of the interval between the two boundary solutions, so solve the equation first and then subtract.",
  skills: ["quadratics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 2 — Math Module 2 (22 questions)
// Flow: E at 1,2,12 · M at 3,4,6,7,10,14,16 ·
// H at 5,8,9,11,13,15,17,18,19,20,21,22. Breather easy at Q12 (range).
// Official-calibration recreation 2026-08-31: fresh scenarios throughout;
// warm-ups Q1-5 all carry a trap or 2+ steps (percent-of-previous growth,
// first-visit pricing, added-value mean shift, perimeter scaling, radian sum).
// Diagrams at Q3 (data table), Q4 (similar triangles), Q11 (right triangle),
// Q12 (dot plot).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the distance between the two points shown in the $xy$-plane?",
  diagram: { type: "coordinatePoints", params: { points: [[-3, -2], [5, 3]], xMin: -6, xMax: 8, yMin: -5, yMax: 7 } },
  choices: [
    // distractor: makes a sign slip on the x-coordinates, using 5 + (-3) = 2 instead of 5 - (-3) = 8 as the horizontal distance: sqrt(2^2 + 5^2) = sqrt(29)
    { id: "A", text: "$\\sqrt{29}$" },
    // distractor: subtracts the squared distances instead of adding them: sqrt(8^2 - 5^2) = sqrt(39)
    { id: "B", text: "$\\sqrt{39}$" },
    { id: "C", text: "$\\sqrt{89}$" },
    // distractor: adds the horizontal and vertical distances, 8 + 5 = 13, instead of using the Pythagorean relationship
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The points are $(-3, -2)$ and $(5, 3)$, which are $8$ units apart horizontally and $5$ units apart vertically, so the distance is $\\sqrt{8^2 + 5^2} = \\sqrt{89}$.\n\n**The Full Solution:**\nStep 1: Read the coordinates of the two points from the grid: $(-3, -2)$ and $(5, 3)$.\nStep 2: Find the horizontal and vertical distances: $5 - (-3) = 8$ and $3 - (-2) = 5$.\nStep 3: Apply the distance formula: $d = \\sqrt{8^2 + 5^2} = \\sqrt{64 + 25} = \\sqrt{89}$. Check: $\\sqrt{89} \\approx 9.4$, which is longer than the longer leg, $8$, and shorter than the sum of the legs, $13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{29}$): computes the horizontal distance as $5 + (-3) = 2$. Subtracting a negative coordinate means adding its absolute value: $5 - (-3) = 8$.\n* Choice B ($\\sqrt{39}$): subtracts the squares, $64 - 25 = 39$. The distance formula adds the squared legs.\n* Choice D ($13$): adds the two legs, $8 + 5 = 13$. That is the length of a path along the grid lines, which is always longer than the straight segment.\n\n**Test Day Takeaway:** Read both coordinates from the grid, subtract carefully when a coordinate is negative, and then add the squares of the two differences under a single square root.",
  skills: ["coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A theater sold $58$ tickets for a total of $\\$1{,}040$. Adult tickets cost $\\$32$ each, and child tickets cost $\\$8$ each. How many adult tickets did the theater sell?",
  choices: [
    // distractor: prices every ticket as a child ticket, then divides the leftover money by the adult price instead of by the price difference: (1040 - 464)/32 = 18
    { id: "A", text: "$18$" },
    { id: "B", text: "$24$" },
    // distractor: treats every sale as one adult ticket paired with one child ticket, computing 1040/(32 + 8) = 26
    { id: "C", text: "$26$" },
    // distractor: solves the system correctly but reports 34, the number of child tickets
    { id: "D", text: "$34$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** If all $58$ tickets were child tickets, the total would be $8(58) = 464$ dollars. Each adult ticket adds $32 - 8 = 24$ dollars, so there are $\\frac{1040 - 464}{24} = 24$ adult tickets.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of adult tickets and $c$ the number of child tickets. The number of tickets gives $a + c = 58$, and the money gives $32a + 8c = 1040$.\nStep 2: Substitute $c = 58 - a$ into the second equation: $32a + 8(58 - a) = 1040$, so $32a + 464 - 8a = 1040$ and $24a = 576$.\nStep 3: Divide: $a = 24$. Check: $c = 58 - 24 = 34$, and $32(24) + 8(34) = 768 + 272 = 1040$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): finds the leftover $1040 - 464 = 576$ dollars but divides by $32$. Each adult ticket adds only $\\$24$ beyond the $\\$8$ already counted, so the leftover must be divided by $24$.\n* Choice C ($26$): assumes the tickets were sold in adult-and-child pairs costing $\\$40$, giving $\\frac{1040}{40} = 26$. Nothing in the problem pairs the tickets.\n* Choice D ($34$): the number of child tickets, the value of the other variable.\n\n**Test Day Takeaway:** In a count-and-value system, price every item at the cheaper rate first; the money left over, divided by the difference in price, counts the more expensive items.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the number of students in three grades at a school who chose each of three after-school activities. One of these students will be selected at random. What is the probability of selecting a student who chose music, given that the student is not in grade $9$?",
  questionTable: { headers: ["Grade", "Art", "Music", "Sports", "Total"], rows: [["$9$", "$26$", "$40$", "$34$", "$100$"], ["$10$", "$31$", "$38$", "$35$", "$104$"], ["$11$", "$17$", "$22$", "$17$", "$56$"], ["Total", "$74$", "$100$", "$86$", "$260$"]] },
  choices: [
    // distractor: uses the correct numerator 60 but divides by the grand total 260 instead of the 160 students not in grade 9, giving 3/13
    { id: "A", text: "$\\frac{3}{13}$" },
    // distractor: counts only grade 10 in the numerator, using 38/160 = 19/80 and leaving out grade 11's 22 music students
    { id: "B", text: "$\\frac{19}{80}$" },
    { id: "C", text: "$\\frac{3}{8}$" },
    // distractor: reverses the condition, computing the probability that a student is not in grade 9 given that the student chose music: 60/100 = 3/5
    { id: "D", text: "$\\frac{3}{5}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Students not in grade $9$ are in grades $10$ and $11$: $104 + 56 = 160$ students, and $38 + 22 = 60$ of them chose music. The probability is $\\frac{60}{160} = \\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: The condition \"not in grade $9$\" restricts the group to grades $10$ and $11$, so the denominator is $104 + 56 = 160$, not $260$.\nStep 2: Within that group, count the students who chose music: $38$ in grade $10$ and $22$ in grade $11$, for $60$ students.\nStep 3: Divide: $\\frac{60}{160} = \\frac{3}{8}$. Check: the music students outside grade $9$ are $100 - 40 = 60$, matching Step 2 ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{13}$): counts the numerator correctly as $60$ but divides by the grand total, $260$. A conditional probability uses only the students who meet the condition.\n* Choice B ($\\frac{19}{80}$): uses the right denominator, $160$, but counts only grade $10$'s $38$ music students. \"Not in grade $9$\" includes grade $11$ as well.\n* Choice D ($\\frac{3}{5}$): computes $\\frac{60}{100}$, the probability that a student is not in grade $9$ given that the student chose music. That reverses the condition.\n\n**Test Day Takeaway:** In a conditional probability, write the denominator first: it is the total of the group named after \"given that.\" Then count the part of that group the question asks about.",
  skills: ["conditional-probability", "two-way-table"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "A rectangle has a diagonal of length $37$ centimeters. One side of the rectangle has a length of $12$ centimeters. What is the length, in centimeters, of the longer side?",
  correctAnswer: "35",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 35.**\n\n**The Fast Way (~20s):** The diagonal is the hypotenuse of a right triangle whose legs are two sides of the rectangle, so $37^{2} - 12^{2} = 1369 - 144 = 1225$, and $\\sqrt{1225} = 35$ centimeters.\n\n**The Full Solution:**\nStep 1: A diagonal divides a rectangle into two right triangles. In each one the diagonal is the hypotenuse and two sides of the rectangle are the legs.\nStep 2: Apply the Pythagorean theorem with legs $12$ and $b$ and hypotenuse $37$: $12^{2} + b^{2} = 37^{2}$, so $144 + b^{2} = 1369$ and $b^{2} = 1225$.\nStep 3: Take the positive square root: $b = 35$ centimeters, which is greater than $12$, so it is the longer side. Check: $12^{2} + 35^{2} = 144 + 1225 = 1369 = 37^{2}$ ✓\n\n**Common Mistakes:**\n* $25$: subtracts the given lengths, $37 - 12$, as though the sides combined directly rather than through their squares.\n* $39$: adds the squares, $\\sqrt{37^{2} + 12^{2}} \\approx 38.9$, which treats the diagonal as a leg. The diagonal is the longest segment in the rectangle, so every side must come out shorter than $37$.\n* $49$: adds the two given lengths, $37 + 12$.\n\n**Test Day Takeaway:** A rectangle's diagonal is the hypotenuse of the right triangle it forms with two sides, so it stands alone in $a^{2} + b^{2} = c^{2}$; a missing side comes from subtracting squares, never from subtracting the lengths.",
  skills: ["pythagorean-theorem"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "Two lines intersect at a point, forming four angles. Two of the angles each have measure $a^{\\circ}$, and the other two each have measure $b^{\\circ}$, where $b = a + 46$. What is the value of $b$?",
  choices: [
    // distractor: reports the given difference of 46 between the two angle measures as though it were the value of b
    { id: "A", text: "$46$" },
    // distractor: solves correctly but reports a = 67 instead of b
    { id: "B", text: "$67$" },
    { id: "C", text: "$113$" },
    // distractor: computes 180 - 46 = 134 and stops, never splitting the remaining 134 degrees between a and b
    { id: "D", text: "$134$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** An angle of measure $a^{\\circ}$ and an angle of measure $b^{\\circ}$ are adjacent and form a straight line, so $a + b = 180$. Substituting $b = a + 46$ gives $2a + 46 = 180$, so $a = 67$ and $b = 113$.\n\n**The Full Solution:**\nStep 1: When two lines intersect, vertical angles are equal, so the two angles of measure $a^{\\circ}$ are vertical angles, as are the two of measure $b^{\\circ}$. Each angle of measure $a^{\\circ}$ is adjacent to an angle of measure $b^{\\circ}$, and adjacent angles here form a linear pair: $a + b = 180$.\nStep 2: Substitute $b = a + 46$: $a + (a + 46) = 180$, so $2a = 134$ and $a = 67$.\nStep 3: Then $b = 67 + 46 = 113$. Check: $67 + 113 + 67 + 113 = 360$, the total of the angles around a point ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($46$): treats the difference between the two measures as one of the measures.\n* Choice B ($67$): the value of $a$, not $b$.\n* Choice D ($134$): computes $180 - 46 = 134$ and stops. That is $2a$, the amount left after the difference is set aside, not $b$.\n\n**Test Day Takeaway:** Two intersecting lines form two pairs of equal vertical angles, and any two adjacent angles are supplementary; writing $a + b = 180$ turns the relationship into a one-variable equation.",
  skills: ["angles"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows selected values of the functions $f$ and $g$. What is the value of $f(g(6))$?",
  questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["$2$", "$15$", "$8$"], ["$4$", "$33$", "$2$"], ["$6$", "$21$", "$4$"], ["$8$", "$27$", "$6$"]] },
  choices: [
    // distractor: stops at g(6) = 4 and never evaluates f at that output
    { id: "A", text: "$4$" },
    // distractor: evaluates f at 6 instead of at g(6), reading f(6) = 21
    { id: "B", text: "$21$" },
    // distractor: adds the two entries in the row x = 6, computing 21 + 4 = 25 instead of composing the functions
    { id: "C", text: "$25$" },
    { id: "D", text: "$33$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** From the table, $g(6) = 4$, and $f(4) = 33$, so $f(g(6)) = 33$.\n\n**The Full Solution:**\nStep 1: In $f(g(6))$ the inner function is evaluated first, so start with $g(6)$.\nStep 2: In the row $x = 6$, the $g(x)$ column gives $g(6) = 4$.\nStep 3: Evaluate $f$ at that output, using the row $x = 4$: $f(4) = 33$. Check: the second lookup uses the row $x = 4$ and the $f(x)$ column, not the row $x = 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the value of $g(6)$. That is only the input to $f$.\n* Choice B ($21$): the value of $f(6)$. The input to $f$ is $g(6)$, not $6$.\n* Choice C ($25$): adds the two values in the row $x = 6$, $21 + 4 = 25$. Composition feeds one output into the other function; it does not add them.\n\n**Test Day Takeaway:** In a composition, the inner function's output becomes the outer function's input, so the second lookup is almost always in a different row of the table.",
  skills: ["function-composition"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$7x + 4y = 61$\n$4x + 7y = 38$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is 9.**\n\n**The Fast Way (~25s):** Adding the equations gives $11x + 11y = 99$, so $x + y = \\frac{99}{11} = 9$.\n\n**The Full Solution:**\nStep 1: The coefficients of $x$ and $y$ are swapped between the two equations, so adding them gives equal coefficients: $(7x + 4x) + (4y + 7y) = 61 + 38$.\nStep 2: Simplify: $11x + 11y = 99$, or $11(x + y) = 99$.\nStep 3: Divide by $11$: $x + y = 9$. Check: subtracting the equations gives $3x - 3y = 23$, so $x = \\frac{25}{3}$ and $y = \\frac{2}{3}$; then $7\\left(\\frac{25}{3}\\right) + 4\\left(\\frac{2}{3}\\right) = \\frac{183}{3} = 61$ and $\\frac{25}{3} + \\frac{2}{3} = 9$ ✓\n\n**Common Mistakes:**\n* $99$: adds the equations and stops. That is the value of $11x + 11y$, which still has to be divided by $11$.\n* $4.5$: divides $99$ by $22$, the sum of all four coefficients, instead of by $11$.\n* $7.666$: subtracts the equations instead of adding them, getting $3(x - y) = 23$ and $x - y = \\frac{23}{3}$. That is the difference of the variables, not their sum.\n\n**Test Day Takeaway:** When a question asks for a combination such as $x + y$, look for a way to add or subtract the equations to produce that combination directly; here $x$ and $y$ are fractions, so solving for each one is the slow route.",
  skills: ["elimination-method"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{\\sqrt[3]{27^{2x}}\\left(9^{x+1}\\right)}{3^{5x}}$\nFor all real values of $x$, which expression is equivalent to the given expression?",
  choices: [
    // distractor: rewrites 9 to the (x+1) as 3 to the (2x+1), doubling the x in the exponent but not the 1
    { id: "A", text: "$3^{1-x}$" },
    { id: "B", text: "$3^{2-x}$" },
    // distractor: converts 27 to 3 cubed but never applies the cube root, leaving 3 to the 6x in the numerator
    { id: "C", text: "$3^{3x+2}$" },
    // distractor: adds the denominator's exponent instead of subtracting it, giving 2x + (2x+2) + 5x
    { id: "D", text: "$3^{9x+2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** In base $3$ the numerator is $3^{2x} \\cdot 3^{2x+2} = 3^{4x+2}$, and dividing by $3^{5x}$ subtracts $5x$, leaving $3^{2-x}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical in base $3$: $27^{2x} = (3^{3})^{2x} = 3^{6x}$, and a cube root divides the exponent by $3$, so $\\sqrt[3]{3^{6x}} = 3^{2x}$.\nStep 2: Rewrite the other factor: $9^{x+1} = (3^{2})^{x+1} = 3^{2x+2}$. Multiplying powers of the same base adds exponents, so the numerator is $3^{2x} \\cdot 3^{2x+2} = 3^{4x+2}$.\nStep 3: Dividing powers of the same base subtracts exponents: $\\frac{3^{4x+2}}{3^{5x}} = 3^{4x+2-5x} = 3^{2-x}$. Check at $x = 1$: the expression is $\\frac{3^{2}(9^{2})}{3^{5}} = \\frac{9 \\cdot 81}{243} = 3$, and $3^{2-1} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3^{1-x}$): rewrites $9^{x+1}$ as $3^{2x+1}$. Raising $3^{2}$ to the power $x+1$ doubles the entire exponent, giving $2x+2$, so the constant term is $2$.\n* Choice C ($3^{3x+2}$): converts $27$ to $3^{3}$ but never applies the cube root, leaving $6x + (2x+2) - 5x = 3x+2$. A cube root is the exponent $\\frac{1}{3}$, so it divides $6x$ by $3$.\n* Choice D ($3^{9x+2}$): adds the denominator's exponent instead of subtracting it: $2x + (2x+2) + 5x = 9x+2$. Division of powers with the same base subtracts.\n\n**Test Day Takeaway:** Put every base and every radical into one common base before combining anything; after that a product adds exponents and a quotient subtracts them, and the answer can be read straight off.",
  skills: ["exponent-laws"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ is perpendicular to the line with equation $3x + 2y = 19$ and passes through the point $(12, 5)$. Which equation defines line $j$?",
  choices: [
    // distractor: uses the given line's own slope, -3/2, which gives a line parallel to it through (12, 5): 5 + 18 = 23
    { id: "A", text: "$y = -\\frac{3}{2}x + 23$" },
    // distractor: takes the reciprocal of the slope without changing its sign, using -2/3: 5 + 8 = 13
    { id: "B", text: "$y = -\\frac{2}{3}x + 13$" },
    { id: "C", text: "$y = \\frac{2}{3}x - 3$" },
    // distractor: changes the sign of the slope without taking the reciprocal, using 3/2: 5 - 18 = -13
    { id: "D", text: "$y = \\frac{3}{2}x - 13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The given line has slope $-\\frac{3}{2}$, so line $j$ has slope $\\frac{2}{3}$. Its $y$-intercept is $5 - \\frac{2}{3}(12) = 5 - 8 = -3$, so line $j$ is $y = \\frac{2}{3}x - 3$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $3x + 2y = 19$ gives $y = -\\frac{3}{2}x + \\frac{19}{2}$, so its slope is $-\\frac{3}{2}$.\nStep 2: Slopes of perpendicular lines are negative reciprocals, so the slope of line $j$ is $\\frac{2}{3}$.\nStep 3: Substitute $(12, 5)$ into $y = \\frac{2}{3}x + b$: $5 = 8 + b$, so $b = -3$ and line $j$ is $y = \\frac{2}{3}x - 3$. Check: $\\left(-\\frac{3}{2}\\right)\\left(\\frac{2}{3}\\right) = -1$, and $\\frac{2}{3}(12) - 3 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 23$): uses the given line's slope, which makes line $j$ parallel to the given line instead of perpendicular.\n* Choice B ($y = -\\frac{2}{3}x + 13$): takes the reciprocal but keeps the negative sign.\n* Choice D ($y = \\frac{3}{2}x - 13$): changes the sign but does not take the reciprocal.\n\n**Test Day Takeaway:** Every choice passes through $(12, 5)$, so the point cannot decide the answer; the slope does. Read the slope from $Ax + By = C$ as $-\\frac{A}{B}$, then flip it and change its sign.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\frac{4x^{2} - 81}{2x^{2} - 5x - 63}$, where $x > 7$?",
  choices: [
    // distractor: misfactors the denominator as (2x + 9)(x + 7), a sign slip in the linear factor, then cancels 2x + 9 and is left with x + 7 on the bottom
    { id: "A", text: "$\\frac{2x - 9}{x + 7}$" },
    { id: "B", text: "$\\frac{2x - 9}{x - 7}$" },
    // distractor: cancels the wrong factor of the numerator, keeping 2x + 9 rather than 2x - 9
    { id: "C", text: "$\\frac{2x + 9}{x - 7}$" },
    // distractor: misfactors the denominator as (2x - 9)(x + 7) and cancels 2x - 9, keeping 2x + 9 over x + 7
    { id: "D", text: "$\\frac{2x + 9}{x + 7}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The numerator is a difference of squares, $(2x - 9)(2x + 9)$, and the denominator factors as $(2x + 9)(x - 7)$. Dividing out $2x + 9$ leaves $\\frac{2x - 9}{x - 7}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $4x^{2} - 81 = (2x)^{2} - 9^{2} = (2x - 9)(2x + 9)$.\nStep 2: Factor the denominator. Two numbers with product $2(-63) = -126$ and sum $-5$ are $9$ and $-14$, so $2x^{2} - 5x - 63 = 2x^{2} + 9x - 14x - 63 = x(2x + 9) - 7(2x + 9) = (2x + 9)(x - 7)$.\nStep 3: Divide out the common factor $2x + 9$, which is not zero for $x > 7$: the expression equals $\\frac{2x - 9}{x - 7}$. Check at $x = 9$: $\\frac{324 - 81}{162 - 45 - 63} = \\frac{243}{54} = 4.5$, and $\\frac{2(9) - 9}{9 - 7} = \\frac{9}{2} = 4.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2x - 9}{x + 7}$): factors the denominator as $(2x + 9)(x + 7)$, which expands to $2x^{2} + 23x + 63$, not the given denominator.\n* Choice C ($\\frac{2x + 9}{x - 7}$): factors correctly but divides out $2x - 9$, a factor that appears only in the numerator.\n* Choice D ($\\frac{2x + 9}{x + 7}$): factors the denominator as $(2x - 9)(x + 7)$, which expands to $2x^{2} + 5x - 63$. At $x = 9$ this choice gives $\\frac{27}{16}$, not $4.5$.\n\n**Test Day Takeaway:** Factor the numerator and denominator completely before dividing out anything, and confirm a factorization by expanding it; one sign slip changes which factor survives.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The perimeter of the right triangle shown is $90$ centimeters, and $\\cos J = \\frac{12}{13}$. What is the length, in centimeters, of $\\overline{JK}$?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 5]], labels: ["J", "K", "L"], sideLabels: ["", "", ""], rightAngleVertex: 1, figureNote: true } },
  choices: [
    // distractor: reads 12 off the cosine ratio as a length, never scaling the 5-12-13 triangle up to a perimeter of 90
    { id: "A", text: "$12$" },
    // distractor: reports KL, the leg opposite angle J, which is 15 centimeters
    { id: "B", text: "$15$" },
    { id: "C", text: "$36$" },
    // distractor: reports JL, the hypotenuse, which is 39 centimeters
    { id: "D", text: "$39$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $\\cos J = \\frac{12}{13}$ makes the sides $12k$, $5k$, and $13k$, so the perimeter is $30k = 90$ and $k = 3$. Then $JK = 12(3) = 36$ centimeters.\n\n**The Full Solution:**\nStep 1: The right angle is at $K$, so $\\overline{JL}$ is the hypotenuse and $\\overline{JK}$ is the leg adjacent to angle $J$. Cosine is adjacent over hypotenuse, so $\\frac{JK}{JL} = \\frac{12}{13}$; write $JK = 12k$ and $JL = 13k$.\nStep 2: The third side follows from the Pythagorean theorem: $KL = \\sqrt{(13k)^{2} - (12k)^{2}} = \\sqrt{25k^{2}} = 5k$, the $5$-$12$-$13$ triple.\nStep 3: The perimeter gives $12k + 5k + 13k = 30k = 90$, so $k = 3$ and $JK = 12(3) = 36$ centimeters. Check: $36 + 15 + 39 = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): takes the numerator of the ratio as an actual length. A trig ratio fixes only the shape of the triangle; the perimeter fixes its size, and here every side triples.\n* Choice B ($15$): the length of $\\overline{KL}$, the leg opposite angle $J$. Cosine uses the adjacent leg, so $\\overline{JK}$ is the $12k$ side.\n* Choice D ($39$): the hypotenuse $\\overline{JL}$, the $13k$ side. The question asks for a leg, and the hypotenuse is the denominator of the cosine ratio, not the numerator.\n\n**Test Day Takeaway:** Turn a trig ratio into side lengths with one scale factor $k$, then let the perimeter solve for $k$: the ratio gives the shape and the perimeter gives the size.",
  skills: ["soh-cah-toa"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of a linear model for a data set passes through the points $(4, 23)$ and $(16, 59)$ in the $xy$-plane. The data point $(10, k)$ is the same vertical distance above the graph as the data point $(22, 68)$ is below it. What is the value of $k$?",
  choices: [
    // distractor: subtracts the 9-unit distance from the model's value at x = 10, placing the point below the graph instead of above it: 41 - 9 = 32
    { id: "A", text: "$32$" },
    // distractor: reports the model's value at x = 10, 41, never applying the 9-unit distance
    { id: "B", text: "$41$" },
    { id: "C", text: "$50$" },
    // distractor: reads 'the same vertical distance' as meaning the two data points have the same y-value, copying 68
    { id: "D", text: "$68$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The model is $y = 3x + 11$, which gives $77$ at $x = 22$, so $(22, 68)$ is $9$ below the graph. At $x = 10$ the model gives $41$, so $k = 41 + 9 = 50$.\n\n**The Full Solution:**\nStep 1: Find the model. Its slope is $\\frac{59 - 23}{16 - 4} = 3$, and $23 = 3(4) + b$ gives $b = 11$, so the model is $y = 3x + 11$.\nStep 2: At $x = 22$ the model gives $3(22) + 11 = 77$, so the data point $(22, 68)$ is $77 - 68 = 9$ units below the graph.\nStep 3: At $x = 10$ the model gives $3(10) + 11 = 41$. The data point $(10, k)$ is $9$ units above the graph, so $k = 41 + 9 = 50$. Check: $50 - 41 = 9$ and $77 - 68 = 9$, equal distances on opposite sides of the graph ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): computes $41 - 9$, which places $(10, k)$ below the graph. The point is above it.\n* Choice B ($41$): the model's value at $x = 10$; a data point with that value would lie on the graph.\n* Choice D ($68$): copies the other point's $y$-value. The two points are the same distance from the graph, not the same height.\n\n**Test Day Takeaway:** Find the model's value at the given $x$-value first, then add the vertical distance for a point above the graph or subtract it for a point below.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\frac{x^{2} - 64}{x - 8} = 16$\nHow many solutions does the given equation have?",
  choices: [
    { id: "A", text: "Zero" },
    // distractor: simplifies to x + 8 = 16 and accepts x = 8 without checking that x = 8 makes the denominator zero
    { id: "B", text: "Exactly one" },
    // distractor: clears the denominator to get x^2 - 16x + 64 = 0 and assumes a quadratic must have two solutions, missing the repeated root at the excluded value
    { id: "C", text: "Exactly two" },
    // distractor: treats the factorization of the numerator as making the whole equation an identity
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** For $x \\ne 8$ the left side simplifies to $x + 8$, so the equation becomes $x + 8 = 16$, giving $x = 8$. That is the one value the denominator forbids, so the equation has no solution.\n\n**The Full Solution:**\nStep 1: The denominator $x - 8$ cannot be zero, so $x = 8$ is excluded.\nStep 2: Factor the numerator: $x^{2} - 64 = (x - 8)(x + 8)$. For $x \\ne 8$, the equation becomes $x + 8 = 16$, so $x = 8$.\nStep 3: The only candidate is the excluded value, so the equation has zero solutions. Check by multiplying both sides by $x - 8$: $x^{2} - 64 = 16x - 128$ gives $x^{2} - 16x + 64 = (x - 8)^{2} = 0$, whose only root is the excluded $x = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): solves $x + 8 = 16$ and reports $x = 8$ without checking it. A value that makes a denominator zero is never a solution.\n* Choice C (Exactly two): assumes $x^{2} - 16x + 64 = 0$ has two roots. It is a perfect square with one repeated root, and that root is excluded.\n* Choice D (Infinitely many): treats $\\frac{x^{2} - 64}{x - 8} = x + 8$ as if it made the equation true for every $x$. The right side is the fixed number $16$.\n\n**Test Day Takeaway:** Write down the excluded values before solving a rational equation; if the only candidate solution is excluded, the equation has no solution.",
  skills: ["rational-expressions"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The positive number $p$ is $150\\%$ of $m$ and $60\\%$ of $n$. The number $m$ is how many times $n$?",
  choices: [
    { id: "A", text: "$0.4$" },
    // distractor: reads the second condition as saying m itself is 60% of n, reporting 0.6 without using the 150% relationship
    { id: "B", text: "$0.6$" },
    // distractor: multiplies the two given factors, 1.5 and 0.6, to get 0.9
    { id: "C", text: "$0.9$" },
    // distractor: answers the reversed question, computing n as a multiple of m: 1.5/0.6 = 2.5
    { id: "D", text: "$2.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The two descriptions of $p$ give $1.5m = 0.6n$, so $m = \\frac{0.6}{1.5}n = 0.4n$.\n\n**The Full Solution:**\nStep 1: \"$p$ is $150\\%$ of $m$\" means $p = 1.5m$, and \"$p$ is $60\\%$ of $n$\" means $p = 0.6n$.\nStep 2: Both expressions equal $p$, so $1.5m = 0.6n$.\nStep 3: Divide both sides by $1.5$: $m = 0.4n$, so $m$ is $0.4$ times $n$. Check with $n = 100$: $p = 60$ and $m = \\frac{60}{1.5} = 40$, and $\\frac{40}{100} = 0.4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.6$): applies the $60\\%$ directly to $m$. The $60\\%$ describes $p$, and $p$ is larger than $m$.\n* Choice C ($0.9$): multiplies $1.5$ by $0.6$. The two percents describe the same number, so one must be divided by the other.\n* Choice D ($2.5$): computes $\\frac{1.5}{0.6} = 2.5$, which is $n$ as a multiple of $m$, the reverse of what is asked.\n\n**Test Day Takeaway:** When two percent statements describe the same number, write each as an equation for that number and set them equal; then check that the ratio you report is in the order the question names.",
  skills: ["percent-word-problems", "percent-of-value"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The length of a rectangle is $1.5$ times its width. If the length were increased by $6$ centimeters and the width were decreased by $3$ centimeters, the area would stay the same. What is the area, in square centimeters, of the rectangle?",
  choices: [
    // distractor: applies the changes to the wrong sides, solving (1.5w - 3)(w + 6) = 1.5w^2 to get w = 3, a 4.5-by-3 rectangle with area 13.5
    { id: "A", text: "$13.5$" },
    // distractor: multiplies the -3 by w instead of by 1.5w when expanding, getting 3w - 18 = 0, so w = 6 and the area is 9(6) = 54
    { id: "B", text: "$54$" },
    // distractor: finds the correct 18-by-12 rectangle but reports its perimeter, 2(18 + 12) = 60, instead of its area
    { id: "C", text: "$60$" },
    { id: "D", text: "$216$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** With width $w$, the equation $(1.5w + 6)(w - 3) = 1.5w^{2}$ expands to $1.5w^{2} + 1.5w - 18 = 1.5w^{2}$, so $w = 12$. The rectangle is $18$ by $12$, and its area is $216$ square centimeters.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width, so the length is $1.5w$ and the area is $1.5w^{2}$. The changed rectangle measures $1.5w + 6$ by $w - 3$, and its area is the same: $(1.5w + 6)(w - 3) = 1.5w^{2}$.\nStep 2: Expand the left side: $1.5w^{2} - 4.5w + 6w - 18 = 1.5w^{2} + 1.5w - 18$. Subtracting $1.5w^{2}$ from both sides leaves $1.5w - 18 = 0$, so $w = 12$.\nStep 3: The width is $12$ centimeters and the length is $1.5(12) = 18$ centimeters, so the area is $18 \\times 12 = 216$ square centimeters. Check: the changed rectangle is $18 + 6 = 24$ by $12 - 3 = 9$, and $24 \\times 9 = 216$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13.5$): adds the $6$ centimeters to the width and takes the $3$ centimeters from the length, solving $(1.5w - 3)(w + 6) = 1.5w^{2}$. That gives $6w - 18 = 0$, $w = 3$, and a $4.5$ by $3$ rectangle.\n* Choice B ($54$): multiplies the $-3$ by $w$ instead of by $1.5w$ when expanding, which leaves $3w - 18 = 0$, so $w = 6$ and the area is $9 \\times 6 = 54$.\n* Choice C ($60$): finds the correct $18$ by $12$ rectangle but reports its perimeter, $2(18 + 12) = 60$, instead of its area.\n\n**Test Day Takeaway:** When a change to the sides leaves the area unchanged, set the new area equal to the old one; the squared terms cancel, leaving a linear equation for the width.",
  skills: ["triangle-area"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the number of students in a music program who play each instrument. What percent of these students play the cello?",
  questionTable: { headers: ["Instrument", "Number of students"], rows: [["Violin", "$160$"], ["Flute", "$120$"], ["Cello", "$80$"], ["Oboe", "$40$"]] },
  choices: [
    // distractor: reads the oboe row instead, computing 40/400 = 10 percent
    { id: "A", text: "$10\\%$" },
    { id: "B", text: "$20\\%$" },
    // distractor: divides the cello count by the violin count, 80/160 = 50 percent, instead of by the total number of students
    { id: "C", text: "$50\\%$" },
    // distractor: reports the percent of students who play an instrument other than the cello, 320/400 = 80 percent
    { id: "D", text: "$80\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The four rows total $400$ students, and $\\frac{80}{400} = 0.2$, or $20\\%$.\n\n**The Full Solution:**\nStep 1: The table gives no total, so build one: $160 + 120 + 80 + 40 = 400$ students.\nStep 2: Write the part over the whole, with the cello count on top: $\\frac{80}{400}$.\nStep 3: Convert to a percent: $\\frac{80}{400} = 0.2 = 20\\%$. Check: $20\\%$ of $400$ is $80$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10\\%$): uses the oboe row, $\\frac{40}{400} = 10\\%$. The two smallest counts sit next to each other, so the row has to be read carefully.\n* Choice C ($50\\%$): divides by the violin count, $\\frac{80}{160} = 50\\%$. The whole is every student in the program, not the largest single group.\n* Choice D ($80\\%$): reports the complement, $\\frac{320}{400} = 80\\%$, the percent of students who play some other instrument.\n\n**Test Day Takeaway:** When a table lists categories but no total, build the total first; that sum is the denominator of every percent-of-a-whole question.",
  skills: ["percent-of-value"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$4^{3t} = 8^{t + 10}$\nWhat value of $t$ is the solution to the given equation?",
  choices: [
    // distractor: sets 3t = t + 10 without rewriting the bases as powers of 2, giving t = 5
    { id: "A", text: "$5$" },
    { id: "B", text: "$10$" },
    // distractor: rewrites 8 as 2 to the fourth power instead of the third, solving 6t = 4t + 40 to get t = 20
    { id: "C", text: "$20$" },
    // distractor: stops at 3t = 30 and reports 30 instead of dividing by 3
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** In base $2$ the equation is $2^{6t} = 2^{3t + 30}$, so $6t = 3t + 30$ and $t = 10$.\n\n**The Full Solution:**\nStep 1: Write both bases as powers of $2$: $4^{3t} = \\left(2^{2}\\right)^{3t} = 2^{6t}$ and $8^{t + 10} = \\left(2^{3}\\right)^{t + 10} = 2^{3t + 30}$.\nStep 2: Powers of the same base are equal only when the exponents are equal, so $6t = 3t + 30$.\nStep 3: Solve: $3t = 30$, so $t = 10$. Check: $4^{30} = 2^{60}$ and $8^{20} = 2^{60}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): sets the exponents equal while the bases are still $4$ and $8$. Exponents can be compared only when the bases match.\n* Choice C ($20$): writes $8$ as $2^{4}$, giving $6t = 4t + 40$. In fact $8 = 2^{3}$; $2^{4} = 16$.\n* Choice D ($30$): stops at $3t = 30$ without dividing by $3$.\n\n**Test Day Takeaway:** Rewrite both sides with the same base before setting exponents equal, and finish the linear equation all the way to the variable.",
  skills: ["exponential-functions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 3x + 6$. If $3f(a + 4) = 7f(a)$, what is the value of $a$?",
  choices: [
    // distractor: switches the coefficients, solving 7f(a + 4) = 3f(a), or 7(3a + 18) = 3(3a + 6), to get a = -9
    { id: "A", text: "$-9$" },
    // distractor: treats f(a + 4) as f(a) + 4, solving 3(3a + 10) = 7(3a + 6) to get a = -1
    { id: "B", text: "$-1$" },
    { id: "C", text: "$1$" },
    // distractor: solves correctly for a but reports a + 4 = 5
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $f(a + 4) = 3a + 18$ and $f(a) = 3a + 6$, so $3(3a + 18) = 7(3a + 6)$ gives $9a + 54 = 21a + 42$ and $a = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $a + 4$ for $x$: $f(a + 4) = 3(a + 4) + 6 = 3a + 18$. Also, $f(a) = 3a + 6$.\nStep 2: Substitute both into the given equation: $3(3a + 18) = 7(3a + 6)$, so $9a + 54 = 21a + 42$.\nStep 3: Solve: $12 = 12a$, so $a = 1$. Check: $f(5) = 21$ and $f(1) = 9$, and $3(21) = 63 = 7(9)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): puts the $7$ with $f(a + 4)$ and the $3$ with $f(a)$, solving $7(3a + 18) = 3(3a + 6)$.\n* Choice B ($-1$): writes $f(a + 4)$ as $f(a) + 4 = 3a + 10$, adding $4$ to the output instead of the input.\n* Choice D ($5$): finds $a = 1$ and then reports $a + 4$.\n\n**Test Day Takeaway:** To evaluate $f(a + 4)$, replace every $x$ in the rule with $a + 4$; for a linear function the output changes by the slope times the shift, not by the shift itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$4(3n - 7) = 11n + 6$\nIf $n$ is the solution to the given equation, what is the value of $3n - 7$?",
  choices: [
    // distractor: distributes 4 over -7 as +28, solving 12n + 28 = 11n + 6 to get n = -22 and 3n - 7 = -73
    { id: "A", text: "$-73$" },
    // distractor: multiplies only the 3n by 4, solving 12n - 7 = 11n + 6 to get n = 13 and 3n - 7 = 32
    { id: "B", text: "$32$" },
    // distractor: solves correctly for n = 34 but reports n instead of 3n - 7
    { id: "C", text: "$34$" },
    { id: "D", text: "$95$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Distribute: $12n - 28 = 11n + 6$, so $n = 34$. Then $3n - 7 = 3(34) - 7 = 95$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$ to both terms in the parentheses: $12n - 28 = 11n + 6$.\nStep 2: Subtract $11n$ from both sides and add $28$ to both sides: $n = 34$.\nStep 3: The question asks for $3n - 7$, not $n$: $3(34) - 7 = 95$. Check: $4(95) = 380$ and $11(34) + 6 = 380$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-73$): distributes the $4$ as $12n + 28$, changing the sign of the constant. That gives $n = -22$ and $3n - 7 = -73$.\n* Choice B ($32$): multiplies only the first term in the parentheses by $4$, giving $12n - 7 = 11n + 6$, $n = 13$, and $3n - 7 = 32$.\n* Choice C ($34$): the value of $n$, not of $3n - 7$.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses, and reread the question before choosing: when it asks for an expression such as $3n - 7$, the value of $n$ is only a step.",
  skills: ["combining-like-terms"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A tank contains $1{,}450$ liters of water. Each day, $38$ liters of water are removed from the tank and $12$ liters are added. What is the least number of whole days after which the tank will contain fewer than $900$ liters of water?",
  choices: [
    { id: "A", text: "$22$" },
    // distractor: solves 26d > 900, treating 900 as the amount removed rather than the amount remaining, giving 34.6 and rounding up to 35
    { id: "B", text: "$35$" },
    // distractor: divides 1450 by 38, ignoring both the 12 liters added each day and the 900-liter level, giving 38.2 and rounding up to 39
    { id: "C", text: "$39$" },
    // distractor: finds when the tank would be empty, 1450/26 = 55.8, and rounds up to 56
    { id: "D", text: "$56$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The tank loses $38 - 12 = 26$ liters a day, so $1450 - 26d < 900$ gives $26d > 550$ and $d > 21.15$. The least whole number of days is $22$.\n\n**The Full Solution:**\nStep 1: Each day the amount of water decreases by $38 - 12 = 26$ liters, so after $d$ days the tank contains $1450 - 26d$ liters.\nStep 2: Write the inequality: $1450 - 26d < 900$, so $550 < 26d$ and $d > \\frac{550}{26} \\approx 21.15$.\nStep 3: The least whole number greater than $21.15$ is $22$. Check: after $21$ days the tank contains $1450 - 546 = 904$ liters, and after $22$ days it contains $1450 - 572 = 878$ liters ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): solves $26d > 900$, as if $900$ liters had to be removed. The $900$ liters is the amount that remains, so $1450 - 900 = 550$ liters are removed.\n* Choice C ($39$): divides $1450$ by $38$, ignoring the $12$ liters added each day and the $900$-liter level.\n* Choice D ($56$): finds when the tank would be empty, not when it first contains fewer than $900$ liters.\n\n**Test Day Takeaway:** Combine opposing daily changes into one net rate before writing the inequality, then round to the whole number that actually satisfies it.",
  skills: ["inequalities"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the balance, in dollars, of a savings account at the end of each of the first four quarters after the account was opened. Interest is compounded quarterly. Which of the following equations represents the balance $B$, in dollars, $t$ years after the account was opened?",
  questionTable: { headers: ["Quarter", "Balance (dollars)"], rows: [["$1$", "$8{,}120.00$"], ["$2$", "$8{,}241.80$"], ["$3$", "$8{,}365.43$"], ["$4$", "$8{,}490.91$"]] },
  choices: [
    // distractor: uses the quarterly factor 1.015 but applies it once per year instead of four times
    { id: "A", text: "$B = 8000(1.015)^{t}$" },
    // distractor: compounds a 6% annual rate once per year, which does not match the quarterly balances in the table
    { id: "B", text: "$B = 8000(1.06)^{t}$" },
    // distractor: applies the annual factor 1.06 in each of the 4t quarters
    { id: "C", text: "$B = 8000(1.06)^{4t}$" },
    { id: "D", text: "$B = 8000(1.015)^{4t}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Each quarter multiplies the balance by $\\frac{8241.80}{8120} = 1.015$, and the starting balance was $\\frac{8120}{1.015} = 8000$. In $t$ years there are $4t$ quarters, so $B = 8000(1.015)^{4t}$.\n\n**The Full Solution:**\nStep 1: Divide consecutive balances: $\\frac{8241.80}{8120} = 1.015$ and $\\frac{8365.43}{8241.80} \\approx 1.015$, so the balance is multiplied by $1.015$ each quarter.\nStep 2: Find the starting balance: $\\frac{8120}{1.015} = 8000$ dollars.\nStep 3: There are $4$ quarters in a year, so after $t$ years the balance is $B = 8000(1.015)^{4t}$. Check at $t = 1$: $8000(1.015)^{4} \\approx 8490.91$, the balance at the end of quarter $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($B = 8000(1.015)^{t}$): applies the quarterly factor once per year. At $t = 1$ it gives $8{,}120$, the balance after one quarter.\n* Choice B ($B = 8000(1.06)^{t}$): compounds $6\\%$ once per year, giving $8{,}480$ after one year instead of $8{,}490.91$.\n* Choice C ($B = 8000(1.06)^{4t}$): applies the annual factor every quarter, giving about $10{,}099.82$ after one year.\n\n**Test Day Takeaway:** Find the growth factor from the ratio of consecutive table values, then make the exponent count the number of those periods in the time unit the question uses.",
  skills: ["exponential-functions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $P(m) = 540(1.25)^{\\frac{m}{4}}$ gives the estimated number of subscribers to a newsletter $m$ months after the newsletter was launched. Which statement is the best interpretation of $1.25$ in this context?",
  choices: [
    { id: "A", text: "The estimated number of subscribers increases by $25\\%$ every $4$ months." },
    // distractor: ignores the division by 4 in the exponent and attaches the 25% increase to a single month
    { id: "B", text: "The estimated number of subscribers increases by $25\\%$ every month." },
    // distractor: spreads the 25% increase evenly over the 4 months, 25/4 = 6.25%, instead of recognizing growth is multiplicative
    { id: "C", text: "The estimated number of subscribers increases by $6.25\\%$ every month." },
    // distractor: reads the factor 1.25 itself as the percent increase instead of subtracting 1 to get 25%
    { id: "D", text: "The estimated number of subscribers increases by $125\\%$ every $4$ months." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The exponent $\\frac{m}{4}$ increases by $1$ each time $m$ increases by $4$, and each such step multiplies the estimate by $1.25$, a $25\\%$ increase every $4$ months.\n\n**The Full Solution:**\nStep 1: In $a(b)^{x}$, the value is multiplied by $b$ each time $x$ increases by $1$. Here the exponent is $\\frac{m}{4}$, not $m$.\nStep 2: The exponent increases by $1$ when $m$ increases by $4$, so the estimate is multiplied by $1.25$ every $4$ months.\nStep 3: A factor of $1.25$ is an increase of $1.25 - 1 = 0.25$, or $25\\%$. Check: $P(0) = 540$ and $P(4) = 540(1.25) = 675$, and $\\frac{675 - 540}{540} = 0.25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: attaches the $25\\%$ increase to one month. The monthly factor is $1.25^{\\frac{1}{4}} \\approx 1.057$, so $P(1) \\approx 571$, not $675$.\n* Choice C: divides $25\\%$ by $4$. Growth compounds, so $6.25\\%$ a month for $4$ months gives $1.0625^{4} \\approx 1.274$, not $1.25$.\n* Choice D: reports the factor $1.25$ as the increase. A factor of $1.25$ makes the new value $125\\%$ of the old one, which is a $25\\%$ increase.\n\n**Test Day Takeaway:** Read $b^{\\frac{m}{k}}$ as \"multiplied by $b$ every $k$ units,\" and subtract $1$ from the factor before calling it a percent increase.",
  skills: ["exponential-growth-decay"]
}
      ]
    }
  ]
};

export default practiceTest2;
