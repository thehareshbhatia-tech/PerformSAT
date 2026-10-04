// Practice Test 1 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-7 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/8M/11H.
// Figure density lifted to official ~20%: M1 carries 4 diagram items,
// M2 carries 6. Numeric MC choices sorted ascending (official convention).

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1 — Math",
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
  question: "A $400$-gram sample of a metal alloy contains only copper, tin, lead, and zinc. The table shows the percent of the sample's mass made up by each of three of these metals. What is the mass, in grams, of the zinc in the sample?",
  questionTable: { headers: ["Metal", "Percent of sample mass"], rows: [["Copper", "62%"], ["Tin", "3%"], ["Lead", "5%"]] },
  choices: [
    // distractor: reports the leftover percent (30) as a number of grams instead of taking 30% of 400
    { id: "A", text: "$30$" },
    { id: "B", text: "$120$" },
    // distractor: omits lead from the sum of listed percents, using 100-62-3=35 and computing 0.35(400)=140
    { id: "C", text: "$140$" },
    // distractor: finds the combined mass of the three listed metals, 0.70(400)=280, instead of the remainder
    { id: "D", text: "$280$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The three listed metals account for $62 + 3 + 5 = 70$ percent of the mass, so zinc is the complement, $30\\%$. Then $0.30(400) = 120$ grams.\n\n**The Full Solution:**\nStep 1: Add the listed percents: copper, tin, and lead together make up $62\\% + 3\\% + 5\\% = 70\\%$ of the sample's mass.\nStep 2: Everything that is not one of those three metals is zinc, so zinc makes up $100\\% - 70\\% = 30\\%$ of the mass.\nStep 3: Take $30\\%$ of the $400$-gram sample: $0.30(400) = 120$ grams. Check: $120 + 0.70(400) = 120 + 280 = 400$ grams, the whole sample ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): reports the leftover percent, $30$, as though it were a mass. The percent still has to be applied to the $400$-gram total, and $30\\%$ of $400$ is $120$, not $30$.\n* Choice C ($140$): leaves lead out of the sum, using $100\\% - 62\\% - 3\\% = 35\\%$ and computing $0.35(400) = 140$ grams.\n* Choice D ($280$): finds the combined mass of the three metals the table lists, $0.70(400) = 280$ grams, which is the part the question does not ask for.\n\n**Test Day Takeaway:** When a table lists parts of a whole and one part is described only as the remainder, subtract the listed percents from $100\\%$ first, then apply that percent to the total.",
  skills: ["percent-of-value"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A rope is $y$ yards long. Which expression represents the length of the rope, in inches? ($1$ yard $= 3$ feet and $1$ foot $= 12$ inches)",
  choices: [
    // distractor: divides by the conversion factors instead of multiplying, giving y/36 (yards per inch rather than inches)
    { id: "A", text: "$\\frac{y}{36}$" },
    // distractor: stops after the first conversion and gives the length in feet, 3y, not in inches
    { id: "B", text: "$3y$" },
    // distractor: adds the two conversion factors, 3 + 12 = 15, instead of multiplying them
    { id: "C", text: "$15y$" },
    { id: "D", text: "$36y$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** One yard is $3$ feet and each foot is $12$ inches, so one yard is $3(12) = 36$ inches and $y$ yards is $36y$ inches.\n\n**The Full Solution:**\nStep 1: Convert yards to feet. Each yard is $3$ feet, so $y$ yards is $3y$ feet.\nStep 2: Convert feet to inches. Each foot is $12$ inches, so $3y$ feet is $12(3y)$ inches.\nStep 3: Multiply: $12(3y) = 36y$ inches. Check with $y = 2$: two yards is $6$ feet, or $6(12) = 72$ inches, and $36(2) = 72$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{y}{36}$): divides instead of multiplying. Inches are smaller than yards, so the number of inches must be larger than $y$, not smaller.\n* Choice B ($3y$): stops after the first conversion. This is the length in feet, not in inches.\n* Choice C ($15y$): adds the factors, $3 + 12 = 15$. Conversion factors in a chain are multiplied, not added.\n\n**Test Day Takeaway:** In a chain of unit conversions, multiply the factors; a quick check is that converting to a smaller unit always gives a bigger number.",
  skills: ["unit-conversion"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Maya budgets a total of \\$540 each month for groceries and transportation. Her grocery budget is \\$120 more than twice her transportation budget. What is her monthly transportation budget, in dollars?",
  choices: [
    { id: "A", text: "$140$" },
    // distractor: divides the total by 3 without removing the extra 120, computing 540/3 = 180
    { id: "B", text: "$180$" },
    // distractor: reads '120 more than twice' as '120 less than twice', solving 3t - 120 = 540 to get 220
    { id: "C", text: "$220$" },
    // distractor: solves the system correctly but reports the grocery budget, 400, instead of the transportation budget
    { id: "D", text: "$400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** With $t$ for transportation, the two budgets give $(2t + 120) + t = 540$, so $3t = 420$ and $t = 140$.\n\n**The Full Solution:**\nStep 1: Let $g$ be the grocery budget and $t$ the transportation budget, in dollars. The total gives $g + t = 540$, and \"$120$ dollars more than twice\" gives $g = 2t + 120$.\nStep 2: Substitute the second equation into the first: $(2t + 120) + t = 540$, which simplifies to $3t + 120 = 540$.\nStep 3: Subtract $120$ and divide by $3$: $3t = 420$, so $t = 140$. Check: the grocery budget would be $2(140) + 120 = 400$, and $400 + 140 = 540$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($180$): divides the total by $3$ and stops, computing $540 \\div 3 = 180$. That would be right only if the grocery budget were exactly twice the transportation budget, with no extra $120$.\n* Choice C ($220$): reverses the comparison, treating the grocery budget as $120$ less than twice the transportation budget. That gives $3t - 120 = 540$ and $t = 220$.\n* Choice D ($400$): solves the system correctly but reports the grocery budget. The question asks for transportation.\n\n**Test Day Takeaway:** Name both unknowns, write one equation per sentence, and substitute; the constant in \"more than twice\" belongs in the equation, not in the final division.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Points $Q(1, 9)$ and $R(25, 2)$ lie in the $xy$-plane. What is the length of $\\overline{QR}$?",
  choices: [
    // distractor: gives the vertical change between the points, 9 - 2 = 7, instead of the distance
    { id: "A", text: "$7$" },
    // distractor: gives the horizontal change between the points, 25 - 1 = 24, instead of the distance
    { id: "B", text: "$24$" },
    { id: "C", text: "$25$" },
    // distractor: adds the horizontal and vertical changes, 24 + 7 = 31, instead of using the distance formula
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The horizontal change is $25 - 1 = 24$ and the vertical change is $9 - 2 = 7$, a $7$-$24$-$25$ right triangle, so $QR = 25$.\n\n**The Full Solution:**\nStep 1: Find the horizontal change from $Q(1, 9)$ to $R(25, 2)$: $25 - 1 = 24$.\nStep 2: Find the vertical change: $9 - 2 = 7$.\nStep 3: Apply the distance formula: $\\sqrt{24^{2} + 7^{2}} = \\sqrt{576 + 49} = \\sqrt{625} = 25$. Check: $25$ is greater than both $24$ and $7$ and less than their sum, $31$, as the long side of a right triangle must be ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports the vertical change alone. That is one leg of the right triangle formed by the two changes, not the distance.\n* Choice B ($24$): reports the horizontal change alone, the longer leg, instead of the hypotenuse.\n* Choice D ($31$): adds the two changes, $24 + 7 = 31$. That is the length of the path that goes across and then down, which is longer than the straight segment.\n\n**Test Day Takeaway:** The distance between two points is the hypotenuse of the right triangle built from the horizontal and vertical changes, so it must exceed each change but be less than their sum.",
  skills: ["coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$7x - 12 > 3x + 41$\nWhat is the least integer value of $x$ that satisfies the given inequality?",
  choices: [
    // distractor: moves the 3x to the left side without changing its sign, solving 10x > 53 and rounding 5.3 up to 6
    { id: "A", text: "$6$" },
    // distractor: moves -12 to the right side without changing its sign, solving 4x > 41-12 = 29 and rounding 7.25 up to 8
    { id: "B", text: "$8$" },
    // distractor: rounds 13.25 down to 13, which does not satisfy the strict inequality
    { id: "C", text: "$13$" },
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Collecting terms gives $4x > 53$, so $x > 13.25$, and the least integer greater than $13.25$ is $14$.\n\n**The Full Solution:**\nStep 1: Subtract $3x$ from both sides: $4x - 12 > 41$.\nStep 2: Add $12$ to both sides: $4x > 53$, so $x > \\frac{53}{4} = 13.25$.\nStep 3: The inequality is strict, so $x$ must be greater than $13.25$; the least integer that qualifies is $14$. Check: $7(14) - 12 = 86$ and $3(14) + 41 = 83$, and $86 > 83$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): moves the $3x$ to the left side without changing its sign, solving $10x > 53$, then rounds $5.3$ up to $6$. Testing it fails: $7(6) - 12 = 30$ is not greater than $3(6) + 41 = 59$.\n* Choice B ($8$): moves the $-12$ to the right side without changing its sign, solving $4x > 41 - 12 = 29$, then rounds $7.25$ up to $8$.\n* Choice C ($13$): rounds $13.25$ down. Testing it fails: $7(13) - 12 = 79$ is not greater than $3(13) + 41 = 80$.\n\n**Test Day Takeaway:** Solve first, then round in the direction the inequality points; with a strict $>$, round a non-integer boundary up, and always test the integer you choose in the original inequality.",
  skills: ["inequalities"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "The bar graph shows the number of hours of sunshine in a city during each of five months. What percent of the total hours of sunshine for the five months occurred in June and July combined?",
  diagram: { type: "barChart", params: { data: [{ label: "Mar", value: 150 }, { label: "Apr", value: 200 }, { label: "May", value: 300 }, { label: "Jun", value: 250 }, { label: "Jul", value: 350 }], xAxisLabel: "Month", yAxisLabel: "Hours of sunshine", yMax: 400, yStep: 50 } },
  choices: [
    // distractor: uses the June bar alone, 250/1250 = 20%
    { id: "A", text: "$20\\%$" },
    // distractor: uses the July bar alone, 350/1250 = 28%
    { id: "B", text: "$28\\%$" },
    { id: "C", text: "$48\\%$" },
    // distractor: gives the percent contributed by the other three months, the complement of 48%
    { id: "D", text: "$52\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The five bars total $1{,}250$ hours, and June plus July is $250 + 350 = 600$ hours, so the share is $\\frac{600}{1{,}250} = 48\\%$.\n\n**The Full Solution:**\nStep 1: Read the five bar heights against the gridlines: $150$, $200$, $300$, $250$, and $350$ hours.\nStep 2: Find the whole and the part. The five-month total is $150 + 200 + 300 + 250 + 350 = 1{,}250$ hours, and the part in question is $250 + 350 = 600$ hours.\nStep 3: Divide and convert: $\\frac{600}{1{,}250} = 0.48 = 48\\%$. Check: $48\\%$ of $1{,}250$ is $600$, which matches the two bars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): uses the June bar alone, $\\frac{250}{1{,}250} = 20\\%$, and ignores July.\n* Choice B ($28\\%$): uses the July bar alone, $\\frac{350}{1{,}250} = 28\\%$, and ignores June.\n* Choice D ($52\\%$): gives the share of the remaining three months, $\\frac{650}{1{,}250} = 52\\%$, the complement of the requested percent.\n\n**Test Day Takeaway:** When a question asks about two categories combined, add the parts before dividing; the denominator is still every bar in the display.",
  skills: ["percent-of-value"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Triangle $ABC$ is similar to triangle $RST$, where $A$ corresponds to $R$ and $B$ corresponds to $S$. The perimeters of triangles $ABC$ and $RST$ are $63$ and $84$, respectively, and $AB = 18$. What is the length of $\\overline{RS}$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is 24.**\n\n**The Fast Way (~30s):** Perimeters of similar triangles are in the same ratio as corresponding sides, so the scale factor is $\\frac{84}{63} = \\frac{4}{3}$ and $RS = 18 \\cdot \\frac{4}{3} = 24$.\n\n**The Full Solution:**\nStep 1: In similar triangles every length, the perimeter included, is multiplied by the same scale factor $k$ from one triangle to the other, so $k = \\frac{\\text{perimeter of } RST}{\\text{perimeter of } ABC}$.\nStep 2: Compute the factor: $k = \\frac{84}{63} = \\frac{4}{3}$.\nStep 3: Apply it to the corresponding side: $RS = \\frac{4}{3}(18) = 24$. Check: $\\frac{24}{18} = \\frac{4}{3}$, the same ratio as $\\frac{84}{63}$ ✓\n\n**Common Mistakes:**\n* $13.5$: inverts the scale factor, computing $18 \\cdot \\frac{63}{84} = 13.5$. That shrinks the side even though triangle $RST$ is the larger triangle.\n* $39$: adds the difference of the perimeters, computing $18 + (84 - 63) = 39$. Similar triangles are related by a multiplier, never by a constant difference.\n* $1.333$: stops after finding the scale factor $\\frac{4}{3}$ and never multiplies it by $AB$.\n\n**Test Day Takeaway:** A ratio of perimeters is the same as the ratio of any pair of corresponding sides, so a perimeter pair can stand in for a side pair without finding a single other length.",
  skills: ["similar-triangles"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A savings account has an initial balance of \\$8,000 and earns $4\\%$ annual interest, compounded quarterly. No other deposits or withdrawals are made. Which expression gives the balance, in dollars, of the account after $t$ years?",
  choices: [
    // distractor: divides the annual rate by 4 but leaves the exponent as t, counting only one compounding period per year
    { id: "A", text: "$8{,}000(1.01)^{t}$" },
    { id: "B", text: "$8{,}000(1.01)^{4t}$" },
    // distractor: multiplies the exponent by 4 but never divides the 4% annual rate by 4, applying a full 4% four times a year
    { id: "C", text: "$8{,}000(1.04)^{4t}$" },
    // distractor: divides the exponent by 4 instead of multiplying it, and leaves the annual rate undivided
    { id: "D", text: "$8{,}000(1.04)^{\\frac{t}{4}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each quarter the balance is multiplied by $1 + \\frac{0.04}{4} = 1.01$, and there are $4t$ quarters in $t$ years, so the balance is $8{,}000(1.01)^{4t}$.\n\n**The Full Solution:**\nStep 1: Find the growth per period. Compounded quarterly, the $4\\%$ annual rate becomes $\\frac{4\\%}{4} = 1\\%$ per quarter, so each quarter the balance is multiplied by $1.01$.\nStep 2: Count the periods. There are four quarters in a year, so in $t$ years the multiplier $1.01$ is applied $4t$ times.\nStep 3: Combine with the initial balance: the account holds $8{,}000(1.01)^{4t}$ dollars. Check with $t = 1$: $8{,}000(1.01)^{4} \\approx 8{,}324.83$, a little more than the $8{,}320$ that a single yearly application of $4\\%$ would give, which is what compounding four times a year should do ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8{,}000(1.01)^{t}$): uses the quarterly multiplier but only $t$ periods, so the balance grows once a year at the quarterly rate.\n* Choice C ($8{,}000(1.04)^{4t}$): counts $4t$ periods but applies the full annual $4\\%$ each time, which is four times too much growth.\n* Choice D ($8{,}000(1.04)^{\\frac{t}{4}}$): divides the exponent by $4$ rather than multiplying, which would model growth once every four years.\n\n**Test Day Takeaway:** When interest is compounded $n$ times a year, divide the annual rate by $n$ and multiply the number of years by $n$; the two adjustments always move in opposite directions.",
  skills: ["exponential-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A library lent $420$ books in June, which was $20\\%$ more than the number of books it lent in May. How many books did the library lend in May?",
  choices: [
    // distractor: takes 20% off the June figure, computing 0.80(420) = 336, instead of dividing by 1.20
    { id: "A", text: "$336$" },
    { id: "B", text: "$350$" },
    // distractor: subtracts 20 books from 420 rather than reversing a 20 percent increase
    { id: "C", text: "$400$" },
    // distractor: increases the June figure by 20% instead of reversing the increase, computing 1.20(420) = 504
    { id: "D", text: "$504$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** June is $1.20$ times May, so May is $\\frac{420}{1.20} = 350$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of books lent in May. Being $20\\%$ more than May means June equals $m + 0.20m = 1.20m$.\nStep 2: Substitute the known June total: $1.20m = 420$.\nStep 3: Divide: $m = \\frac{420}{1.20} = 350$. Check: $20\\%$ of $350$ is $70$, and $350 + 70 = 420$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($336$): removes $20\\%$ of the June total, computing $0.80(420) = 336$. The $20\\%$ was taken of the smaller May figure, so it cannot be undone by subtracting $20\\%$ of June.\n* Choice C ($400$): subtracts $20$ books instead of a percent, computing $420 - 20 = 400$.\n* Choice D ($504$): applies the increase again, computing $1.20(420) = 504$, which moves in the wrong direction.\n\n**Test Day Takeaway:** To undo a percent increase, divide by the growth multiplier; subtracting the same percent from the larger number always overshoots, because the percent was based on the smaller one.",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$|2x - c| = 18$\nIn the given equation, $c$ is a constant. The solutions to the equation are $-3$ and $15$. What is the value of $c$?",
  choices: [
    // distractor: pairs the solution -3 with the positive case, solving 2(-3) - c = 18 to get -24
    { id: "A", text: "$-24$" },
    // distractor: takes c to be the midpoint of the two solutions, (-3 + 15)/2 = 6, ignoring the coefficient 2 on x
    { id: "B", text: "$6$" },
    { id: "C", text: "$12$" },
    // distractor: pairs the solution 15 with the negative case, solving 2(15) - c = -18 to get 48
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The larger solution goes with the positive case: $2(15) - c = 18$ gives $c = 12$.\n\n**The Full Solution:**\nStep 1: The equation $|2x - c| = 18$ splits into $2x - c = 18$ and $2x - c = -18$. The positive case gives the larger value of $x$, so $x = 15$ goes with $2x - c = 18$.\nStep 2: Substitute $x = 15$: $2(15) - c = 18$, so $30 - c = 18$ and $c = 12$.\nStep 3: Confirm with the other solution: $|2(-3) - 12| = |-18| = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): pairs $-3$ with the positive case, solving $-6 - c = 18$. Testing it at $x = 15$ gives $|30 + 24| = 54$, not $18$.\n* Choice B ($6$): takes the midpoint of the solutions, $\\frac{-3 + 15}{2} = 6$. The midpoint is where $2x - c = 0$, which is $x = \\frac{c}{2}$, so $c$ is twice the midpoint.\n* Choice D ($48$): pairs $15$ with the negative case, solving $30 - c = -18$. Testing it at $x = -3$ gives $|-6 - 48| = 54$, not $18$.\n\n**Test Day Takeaway:** With a constant inside absolute value bars, substitute one known solution into the matching case, then verify the constant with the other solution.",
  skills: ["combining-like-terms"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The perimeter of right triangle $ABC$ shown is $36$. What is the value of $\\sin A$?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [12, 0], [12, 9]], labels: ["A", "C", "B"], sideLabels: ["", "9", ""], rightAngleVertex: 1 } },
  choices: [
    // distractor: divides BC by 27, the combined length of the other two sides, instead of by the hypotenuse 15
    { id: "A", text: "$\\frac{1}{3}$" },
    { id: "B", text: "$\\frac{3}{5}$" },
    // distractor: computes tan A = 9/12 (opposite over adjacent) instead of sin A
    { id: "C", text: "$\\frac{3}{4}$" },
    // distractor: computes cos A = 12/15 (adjacent over hypotenuse) instead of sin A
    { id: "D", text: "$\\frac{4}{5}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The other two sides total $36 - 9 = 27$, and the only right triangle with a leg of $9$ and the remaining two sides summing to $27$ is the $9$-$12$-$15$ triangle, so $\\sin A = \\frac{9}{15} = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: Let $b = AC$ and $c = AB$. The perimeter gives $9 + b + c = 36$, so $b + c = 27$.\nStep 2: The Pythagorean theorem gives $c^{2} - b^{2} = 9^{2} = 81$. Factoring, $(c - b)(c + b) = 81$, and since $c + b = 27$, it follows that $c - b = 3$.\nStep 3: Solving $c + b = 27$ and $c - b = 3$ gives $c = 15$ and $b = 12$, so $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{9}{15} = \\frac{3}{5}$. Check: $9 + 12 + 15 = 36$ and $9^{2} + 12^{2} = 225 = 15^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}$): divides the leg $9$ by $27$, the combined length of the two unknown sides, rather than by the hypotenuse $15$.\n* Choice C ($\\frac{3}{4}$): computes $\\tan A = \\frac{9}{12}$, opposite over adjacent, instead of opposite over hypotenuse.\n* Choice D ($\\frac{4}{5}$): computes $\\cos A = \\frac{12}{15}$, adjacent over hypotenuse, which is the ratio for the other acute angle's sine.\n\n**Test Day Takeaway:** When a perimeter is given with one leg, use $(c - b)(c + b) = a^{2}$ to split the remaining length into the two sides; then label opposite, adjacent, and hypotenuse relative to the named angle before writing the ratio.",
  skills: ["soh-cah-toa"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$f(x) = mx + 96$\nIn the given function $f$, $m$ is a constant. If $f(12) = 60$, what is the value of $m$?",
  correctAnswer: "-3",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**The correct answer is -3.**\n\n**The Fast Way (~25s):** The function goes from $f(0) = 96$ to $f(12) = 60$, so $m = \\frac{60 - 96}{12} = -3$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 12$ into the function: $f(12) = 12m + 96$.\nStep 2: Set this equal to the given value: $12m + 96 = 60$.\nStep 3: Subtract $96$ and divide by $12$: $12m = -36$, so $m = -3$. Check: $f(12) = -3(12) + 96 = -36 + 96 = 60$ ✓\n\n**Common Mistakes:**\n* $3$: reverses the subtraction, computing $\\frac{96 - 60}{12} = 3$. The output falls from $96$ to $60$, so the slope must be negative.\n* $-36$: stops at the step $12m = -36$ and reports that value instead of dividing by $12$.\n* $13$: adds $96$ instead of subtracting it, computing $\\frac{60 + 96}{12} = 13$.\n\n**Test Day Takeaway:** In $mx + b$ form the constant term is the value at $x = 0$, so substitute the one other known point and solve for $m$; the sign of $m$ must match the direction the output moves.",
  skills: ["slope-intercept-form"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $k$ passes through the points $(-4, 1)$ and $(8, 10)$. Line $j$ is perpendicular to line $k$ and passes through the point $(3, -2)$. Which equation defines line $j$?",
  choices: [
    // distractor: takes the reciprocal of the slope 3/4 without changing its sign, using 4/3
    { id: "A", text: "$y = \\frac{4}{3}x - 6$" },
    // distractor: keeps the slope 3/4 of line k, producing a line parallel to k rather than perpendicular to it
    { id: "B", text: "$y = \\frac{3}{4}x - \\frac{17}{4}$" },
    // distractor: changes the sign of the slope without taking the reciprocal, using -3/4
    { id: "C", text: "$y = -\\frac{3}{4}x + \\frac{1}{4}$" },
    { id: "D", text: "$y = -\\frac{4}{3}x + 2$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Line $k$ has slope $\\frac{10 - 1}{8 - (-4)} = \\frac{3}{4}$, so line $j$ has slope $-\\frac{4}{3}$; through $(3, -2)$ that gives $y = -\\frac{4}{3}x + 2$.\n\n**The Full Solution:**\nStep 1: Find the slope of line $k$ from its two points: $\\frac{10 - 1}{8 - (-4)} = \\frac{9}{12} = \\frac{3}{4}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals, so line $j$ has slope $-\\frac{4}{3}$.\nStep 3: Substitute the point $(3, -2)$ into $y = -\\frac{4}{3}x + b$: $-2 = -4 + b$, so $b = 2$ and the equation is $y = -\\frac{4}{3}x + 2$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$, and $-\\frac{4}{3}(3) + 2 = -2$, so the line passes through $(3, -2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{4}{3}x - 6$): flips the fraction but keeps it positive. The product of the slopes is then $1$, not $-1$.\n* Choice B ($y = \\frac{3}{4}x - \\frac{17}{4}$): reuses the slope of line $k$, which produces a line parallel to $k$ through $(3, -2)$ instead of a perpendicular one.\n* Choice C ($y = -\\frac{3}{4}x + \\frac{1}{4}$): changes only the sign and skips the reciprocal, so the product of the slopes is $-\\frac{9}{16}$.\n\n**Test Day Takeaway:** Perpendicular means flip the fraction and change the sign; multiply the two slopes as a check, since only a product of exactly $-1$ confirms a right angle.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$6x + ay = 15$\n$9x - 12y = 4$\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
  correctAnswer: "-8",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is -8.**\n\n**The Fast Way (~35s):** No solution means the $x$- and $y$-coefficients are proportional but the constants are not: $\\frac{6}{9} = \\frac{a}{-12}$, so $a = -8$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct, which happens when the coefficients of $x$ and $y$ are in the same ratio but the constants are not.\nStep 2: Set the coefficient ratios equal: $\\frac{6}{9} = \\frac{a}{-12}$, so $9a = -72$.\nStep 3: Divide: $a = -8$. Check: the first equation becomes $6x - 8y = 15$, whose coefficients are $\\frac{2}{3}$ of $9$ and $-12$, but $\\frac{2}{3}(4) = \\frac{8}{3}$, not $15$, so the lines are parallel and distinct and the system has no solution ✓\n\n**Common Mistakes:**\n* $8$: drops the negative sign on the $-12$, solving $\\frac{6}{9} = \\frac{a}{12}$.\n* $-4.5$: pairs the coefficients incorrectly, solving $\\frac{6}{-12} = \\frac{a}{9}$.\n* $-12$: makes the $y$-coefficients equal without scaling, even though the $x$-coefficients $6$ and $9$ are not equal.\n\n**Test Day Takeaway:** No solution means equal slopes with different intercepts; solve for the constant from the coefficient ratio, then confirm the constants are not in that same ratio, which would make the system have infinitely many solutions instead.",
  skills: ["system-solution-types"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Data set A consists of $40$ values and has a mean of $88$ and a standard deviation of $12$. Data set B is created by multiplying each value in data set A by $1.25$ and then subtracting $15$. What is the standard deviation of data set B?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**The correct answer is 15.**\n\n**The Fast Way (~30s):** Multiplying every value by $1.25$ multiplies the standard deviation by $1.25$, and subtracting the same amount from every value leaves it unchanged, so the standard deviation of data set B is $1.25(12) = 15$.\n\n**The Full Solution:**\nStep 1: Write the rule. If $v$ is a value in data set A, the corresponding value in data set B is $1.25v - 15$.\nStep 2: Handle the two operations separately. Multiplying every value by a constant stretches the spread by that same constant, so the standard deviation becomes $1.25(12) = 15$. Subtracting $15$ from every value slides the whole data set down without changing how far apart the values are, so it does not change the standard deviation.\nStep 3: The standard deviation of data set B is therefore $15$. Check: two values $20$ apart in data set A become $1.25(20) = 25$ apart after the multiplication and stay $25$ apart after the subtraction, which is exactly the $1.25$ stretch and no shift effect ✓\n\n**Common Mistakes:**\n* $0$: subtracts $15$ from the standard deviation as well, computing $1.25(12) - 15 = 0$. A shift moves the center, not the spread.\n* $12$: assumes neither operation changes the standard deviation. The multiplication by $1.25$ does change it.\n* $95$: reports the mean of data set B, $1.25(88) - 15 = 95$, instead of its standard deviation.\n\n**Test Day Takeaway:** Adding or subtracting a constant shifts the mean and leaves the standard deviation alone; multiplying by a constant scales both. Apply each operation to the right statistic separately.",
  skills: ["data-analysis"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The points $(-3, 1)$, $(5, -3)$, and $(4, 6)$ shown in the $xy$-plane are the vertices of a triangle. What is the area, in square units, of the triangle?",
  diagram: { type: "coordinatePoints", params: { points: [[-3, 1], [5, -3], [4, 6]], xMin: -5, xMax: 7, yMin: -5, yMax: 8 } },
  choices: [
    { id: "A", text: "$34$" },
    // distractor: boxes the triangle in the 8 by 9 rectangle but reports the combined area of the three corner right triangles, 17.5 + 4.5 + 16 = 38, instead of subtracting it from 72
    { id: "B", text: "$38$" },
    // distractor: omits the factor of 1/2, reporting the 68 produced before the final halving
    { id: "C", text: "$68$" },
    // distractor: gives the area of the smallest rectangle with horizontal and vertical sides that contains the triangle, 8 by 9 = 72
    { id: "D", text: "$72$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Enclose the triangle in the rectangle from $x = -3$ to $x = 5$ and $y = -3$ to $y = 6$, area $8(9) = 72$, then remove the three corner right triangles of areas $17.5$, $4.5$, and $16$: $72 - 38 = 34$ square units.\n\n**The Full Solution:**\nStep 1: Draw the smallest rectangle with horizontal and vertical sides that contains all three vertices. Its sides lie on $x = -3$, $x = 5$, $y = -3$, and $y = 6$, so its area is $8 \\times 9 = 72$ square units.\nStep 2: The rectangle minus the triangle leaves three right triangles at the corners. Their legs are $7$ and $5$, giving $17.5$; $1$ and $9$, giving $4.5$; and $8$ and $4$, giving $16$. Together they cover $17.5 + 4.5 + 16 = 38$ square units.\nStep 3: Subtract: $72 - 38 = 34$ square units. Check with the coordinate formula $\\frac{1}{2}\\left|x_{1}(y_{2} - y_{3}) + x_{2}(y_{3} - y_{1}) + x_{3}(y_{1} - y_{2})\\right| = \\frac{1}{2}|27 + 25 + 16| = 34$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($38$): boxes the triangle correctly but reports the combined area of the three corner right triangles, $17.5 + 4.5 + 16 = 38$. That is the part of the rectangle outside the triangle, so it must be subtracted from $72$.\n* Choice C ($68$): stops at the absolute value $|27 + 25 + 16| = 68$ and never applies the factor $\\frac{1}{2}$.\n* Choice D ($72$): gives the area of the enclosing rectangle rather than the triangle inside it.\n\n**Test Day Takeaway:** When no side of a coordinate triangle is horizontal or vertical, box it in and subtract the corner right triangles; the boxed rectangle is always an upper bound, so an answer equal to it is wrong by construction.",
  skills: ["triangle-area"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = -3x^{2} + kx - 27$, where $k$ is a positive constant, intersects the $x$-axis at exactly one point. What is the value of $k$?",
  correctAnswer: "18",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is 18.**\n\n**The Fast Way (~40s):** Touching the $x$-axis at exactly one point means $-3x^{2} + kx - 27 = 0$ has exactly one real solution, so the discriminant is $0$: $k^{2} - 4(-3)(-27) = 0$, so $k^{2} = 324$ and, since $k$ is positive, $k = 18$.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $y = 0$, so the equation $-3x^{2} + kx - 27 = 0$ must have exactly one real solution. A quadratic equation $ax^{2} + bx + c = 0$ has exactly one real solution when $b^{2} - 4ac = 0$; here $a = -3$, $b = k$, and $c = -27$.\nStep 2: Substitute: $k^{2} - 4(-3)(-27) = 0$. The product $4(-3)(-27)$ is $324$, so $k^{2} = 324$.\nStep 3: Since $k$ is positive, $k = \\sqrt{324} = 18$. Check: $-3x^{2} + 18x - 27 = -3(x^{2} - 6x + 9) = -3(x - 3)^{2}$, which equals $0$ only at $x = 3$, so the graph touches the $x$-axis only at $(3, 0)$ ✓\n\n**Common Mistakes:**\n* $324$: stops after solving $k^{2} = 324$ and reports $k^{2}$ instead of $k$.\n* $9$: leaves out the factor of $4$ in the discriminant, solving $k^{2} = 3(27) = 81$.\n* $-18$: takes the negative square root of $324$ even though $k$ is a positive constant.\n\n**Test Day Takeaway:** \"Exactly one real solution\" for a quadratic always means $b^{2} - 4ac = 0$; write the discriminant with signs intact, and finish by taking the square root the sign condition allows.",
  skills: ["discriminant-analysis"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\left(\\frac{1}{9}\\right)^{x} = 27^{x - 5}$\nWhat value of $x$ is the solution to the given equation?",
  choices: [
    // distractor: distributes the exponent as 3x + 15 rather than 3x - 15, solving -2x = 3x + 15
    { id: "A", text: "$-3$" },
    // distractor: rewrites 1/9 as 9 to the -x but never converts to base 3, equating -x = x - 5
    { id: "B", text: "$\\frac{5}{2}$" },
    { id: "C", text: "$3$" },
    // distractor: drops the reciprocal, reading the left side as 9 to the x, and solves 2x = 3(x - 5)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Both sides become powers of $3$: $3^{-2x} = 3^{3x - 15}$. Equating exponents gives $-2x = 3x - 15$, so $x = 3$.\n\n**The Full Solution:**\nStep 1: Write each base as a power of $3$. Since $\\frac{1}{9} = 3^{-2}$ and $27 = 3^{3}$, the equation becomes $\\left(3^{-2}\\right)^{x} = \\left(3^{3}\\right)^{x - 5}$.\nStep 2: Multiply the exponents on each side: $3^{-2x} = 3^{3x - 15}$. Powers of the same base are equal only when the exponents are equal, so $-2x = 3x - 15$.\nStep 3: Solve: $15 = 5x$, so $x = 3$. Check: $\\left(\\frac{1}{9}\\right)^{3} = \\frac{1}{729}$ and $27^{-2} = \\frac{1}{729}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): uses $3(x - 5) = 3x + 15$, distributing the $3$ but flipping the sign of the $-5$.\n* Choice B ($\\frac{5}{2}$): handles the reciprocal, writing $9^{-x} = 27^{x - 5}$, then equates exponents while the bases are still $9$ and $27$. Exponents may be compared only once both sides carry the same base.\n* Choice D ($15$): reads $\\frac{1}{9}$ as $9$, so the left exponent comes out $2x$ instead of $-2x$.\n\n**Test Day Takeaway:** A fraction base carries a negative exponent: $\\frac{1}{9} = 3^{-2}$, not $3^{2}$. Convert every base to the same prime first, then set the exponents equal.",
  skills: ["exponential-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + bx + 36 = 0$\nIn the given equation, $b$ is a positive integer. If the equation has two distinct real solutions, what is the least possible value of $b$?",
  choices: [
    // distractor: omits the factor of 4 in the discriminant, solving b^2 > 36 and taking the least integer above 6
    { id: "A", text: "$7$" },
    // distractor: reverses the inequality to b^2 < 144 and reports the greatest integer b for which the equation has no real solutions
    { id: "B", text: "$11$" },
    // distractor: uses b^2 - 4ac >= 0, which allows b = 12 and a single repeated solution
    { id: "C", text: "$12$" },
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Two distinct real solutions require $b^{2} - 4(1)(36) > 0$, so $b^{2} > 144$ and $b > 12$; the least positive integer is $13$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has two distinct real solutions exactly when its discriminant is positive. Here $a = 1$, $b = b$, and $c = 36$.\nStep 2: Write the condition: $b^{2} - 4(1)(36) > 0$, so $b^{2} > 144$.\nStep 3: With $b$ positive, $b > 12$, and the least integer greater than $12$ is $13$. Check: $b = 13$ gives $169 - 144 = 25 > 0$, two distinct solutions ($x = -4$ and $x = -9$), while $b = 12$ gives $144 - 144 = 0$, a single repeated solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): drops the factor of $4$, solving $b^{2} > 36$ and taking the least integer above $6$. At $b = 7$ the discriminant is $49 - 144 = -95$, so the equation has no real solutions.\n* Choice B ($11$): reverses the inequality to $b^{2} < 144$, which describes the values of $b$ for which the equation has no real solutions.\n* Choice C ($12$): allows the discriminant to equal $0$. That gives one repeated solution, $x = -6$, not two distinct solutions.\n\n**Test Day Takeaway:** Translate \"two distinct real solutions\" into a strict discriminant inequality first, then round toward the side the inequality allows; a strict inequality never permits the boundary value itself.",
  skills: ["discriminant-analysis"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$3x^{2} - 30x + 82$\nThe given expression is equivalent to $a(x - h)^{2} + k$, where $a$, $h$, and $k$ are constants. What is the value of $h + k$?",
  choices: [
    // distractor: reports h alone, the x-coordinate of the vertex, without adding k
    { id: "A", text: "$5$" },
    // distractor: reports k alone, the constant in vertex form, without adding h
    { id: "B", text: "$7$" },
    { id: "C", text: "$12$" },
    // distractor: subtracts 25 rather than 3(25) = 75 when completing the square, producing k = 57 and h + k = 62
    { id: "D", text: "$62$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Factoring $3$ from the first two terms gives $3(x^{2} - 10x) + 82 = 3(x - 5)^{2} - 75 + 82 = 3(x - 5)^{2} + 7$, so $h = 5$, $k = 7$, and $h + k = 12$.\n\n**The Full Solution:**\nStep 1: Factor the leading coefficient out of the variable terms only: $3x^{2} - 30x + 82 = 3\\left(x^{2} - 10x\\right) + 82$.\nStep 2: Complete the square inside the parentheses. Half of $-10$ is $-5$, and $(-5)^{2} = 25$, so $x^{2} - 10x = (x - 5)^{2} - 25$. Substituting gives $3\\left[(x - 5)^{2} - 25\\right] + 82 = 3(x - 5)^{2} - 75 + 82$.\nStep 3: Combine the constants: $3(x - 5)^{2} + 7$, so $h = 5$ and $k = 7$, and $h + k = 12$. Check at $x = 0$: the original gives $82$, and $3(0 - 5)^{2} + 7 = 75 + 7 = 82$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports $h$ alone, but the question asks for the sum $h + k$.\n* Choice B ($7$): reports $k$ alone, the other half of the sum.\n* Choice D ($62$): subtracts only $25$ instead of $3(25) = 75$, giving $k = 57$ and $h + k = 62$. The $25$ sits inside the parentheses, so it is multiplied by the $3$ on the way out.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, the constant you add and subtract while completing the square must be multiplied by that coefficient before it leaves the parentheses; check the finished form at $x = 0$ to confirm.",
  skills: ["quadratics"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows four values of $x$ and their corresponding values of $f(x)$, where $f(x) = a(x - h)^{2} + k$ and $a$, $h$, and $k$ are constants. What is the value of $f(9)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$7$"], ["$2$", "$-5$"], ["$6$", "$-5$"], ["$8$", "$7$"]] },
  correctAnswer: "16",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is 16.**\n\n**The Fast Way (~50s):** The equal outputs at $x = 2$ and $x = 6$ put the axis of symmetry at $h = 4$; then $4a + k = -5$ and $16a + k = 7$ give $a = 1$ and $k = -9$, so $f(9) = 25 - 9 = 16$.\n\n**The Full Solution:**\nStep 1: Find $h$. A quadratic takes equal values at inputs equally far from the axis of symmetry. Since $f(2) = f(6) = -5$, the axis is halfway between them: $h = \\frac{2 + 6}{2} = 4$.\nStep 2: Find $a$ and $k$. Substituting $x = 2$ gives $a(2 - 4)^{2} + k = -5$, or $4a + k = -5$. Substituting $x = 0$ gives $a(0 - 4)^{2} + k = 7$, or $16a + k = 7$. Subtracting, $12a = 12$, so $a = 1$ and then $k = -5 - 4 = -9$.\nStep 3: Evaluate: $f(x) = (x - 4)^{2} - 9$, so $f(9) = (9 - 4)^{2} - 9 = 25 - 9 = 16$. Check against the table: $f(8) = (8 - 4)^{2} - 9 = 16 - 9 = 7$, which matches ✓\n\n**Common Mistakes:**\n* $44$: takes the axis of symmetry to be $x = 2$ because $-5$ is the smallest tabulated output, computing $(9 - 2)^{2} - 5 = 44$. The smallest listed output is not necessarily the minimum.\n* $20$: locates the axis at $x = 4$ correctly but keeps $k = -5$ from the table instead of solving for the true minimum $-9$, computing $25 - 5 = 20$.\n* $-4$: forgets to square the difference, computing $(9 - 4) + (-9) = -4$.\n\n**Test Day Takeaway:** Two inputs with the same output hand you the axis of symmetry for free; average them to get $h$, then use any two table rows to solve for $a$ and $k$ before evaluating anywhere else.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a right triangle, the length of the hypotenuse is $16$ centimeters and the length of one leg is half the length of the hypotenuse. What is the area, in square centimeters, of the triangle?",
  choices: [
    // distractor: treats the second leg as 8 as well, computing (1/2)(8)(8) = 32
    { id: "A", text: "$32$" },
    { id: "B", text: "$32\\sqrt{3}$" },
    // distractor: uses the hypotenuse 16 as the base and the known leg 8 as the height: (1/2)(16)(8) = 64
    { id: "C", text: "$64$" },
    // distractor: finds the second leg 8*sqrt(3) correctly but omits the factor of 1/2, giving (8)(8*sqrt(3)) = 64*sqrt(3)
    { id: "D", text: "$64\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The known leg is $\\frac{16}{2} = 8$, so the other leg is $\\sqrt{16^{2} - 8^{2}} = \\sqrt{192} = 8\\sqrt{3}$ and the area is $\\frac{1}{2}(8)\\left(8\\sqrt{3}\\right) = 32\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse has length $16$, so the leg that is half the hypotenuse has length $\\frac{1}{2}(16) = 8$ centimeters.\nStep 2: Call the other leg $b$ and apply the Pythagorean theorem: $8^{2} + b^{2} = 16^{2}$, so $b^{2} = 256 - 64 = 192$ and $b = \\sqrt{192} = \\sqrt{64 \\cdot 3} = 8\\sqrt{3}$.\nStep 3: The two legs meet at the right angle, so they serve as base and height: the area is $\\frac{1}{2}\\left(8\\right)\\left(8\\sqrt{3}\\right) = 32\\sqrt{3}$ square centimeters. Check: $32\\sqrt{3} \\approx 55.4$, which is less than $64$, the area of a right triangle with legs $8$ and $16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): assumes the two legs are equal, using $\\frac{1}{2}(8)(8)$. A leg equal to half the hypotenuse forces a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle, not an isosceles one.\n* Choice C ($64$): pairs the hypotenuse with a leg, $\\frac{1}{2}(16)(8)$. The hypotenuse is never a base-height pair with a leg, because they do not meet at a right angle.\n* Choice D ($64\\sqrt{3}$): finds both legs correctly but reports their product instead of half of it.\n\n**Test Day Takeaway:** Area uses the two legs, so any item that hands you the hypotenuse is hiding one Pythagorean step. Simplify the radical by pulling out the largest perfect square, then halve.",
  skills: ["triangle-area"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 1 — Math Module 2 (22 questions)
// Flow: E at 1,5,17 · M at 2,3,4,6,9,11,13,19 ·
// H at 7,8,10,12,14,15,16,18,20,21,22. Breather easy at Q17 (range).
// Official-calibration recreation 2026-08-31: fresh scenarios throughout;
// diagrams at Q3 (parallel lines), Q6 (scatterplot residual), Q7 (table),
// Q10 (two-way table), Q14 (nested triangles), Q22 (frequency table).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the figure shown, lines $\\ell$ and $m$ intersect at a point. What is the value of $y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(5x - 12)°", "y°", "(3x + 28)°"], lineLabels: ["l", "m"], angle0Measure: 88 } },
  choices: [
    // distractor: reports x = 20 instead of the angle measure the question asks for
    { id: "A", text: "$20$" },
    // distractor: gives the opposite angle itself, 5(20) - 12 = 88, rather than its supplement y
    { id: "B", text: "$88$" },
    { id: "C", text: "$92$" },
    // distractor: solves 5x - 12 = 3x + 28 as 2x = 28 - 12 = 16, so x = 8, the angle is 28, and y = 152
    { id: "D", text: "$152$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Vertical angles are equal, so $5x - 12 = 3x + 28$ gives $x = 20$ and an angle of $88^\\circ$. The adjacent angle $y$ is its supplement: $180 - 88 = 92$.\n\n**The Full Solution:**\nStep 1: The angles measuring $(5x - 12)^\\circ$ and $(3x + 28)^\\circ$ lie on opposite sides of the intersection point, so they are vertical angles and therefore congruent: $5x - 12 = 3x + 28$.\nStep 2: Subtract $3x$ from both sides to get $2x - 12 = 28$, then add $12$ to get $2x = 40$, so $x = 20$. Substituting back, that angle measures $5(20) - 12 = 88$ degrees.\nStep 3: The angle measuring $y$ degrees shares a side with the $88^\\circ$ angle and the two together form a straight line, so $y + 88 = 180$ and $y = 92$. Check: the four angles are $88$, $92$, $88$, and $92$, and they total $360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): this is $x$, the value of the variable, not an angle measure. Solving the equation is only the first of two steps.\n* Choice B ($88$): this is the measure of the two vertical angles themselves. The angle marked $y$ degrees is adjacent to them, so it is the supplement, not the equal partner.\n* Choice D ($152$): comes from moving the $-12$ the wrong way and solving $2x = 28 - 12 = 16$. That gives $x = 8$, an angle of $28^\\circ$, and $y = 180 - 28 = 152$.\n\n**Test Day Takeaway:** Where two lines intersect, mark which pair is vertical (equal measures) and which pair is linear (measures summing to $180^\\circ$) before writing any equation. Most misses on this pattern land exactly one supplement away from the answer.",
  skills: ["angles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{5}{2}x = \\frac{3}{4}y + 6$\nThe given equation is one of the two equations in a system of linear equations. The system has infinitely many solutions. Which equation could be the second equation in this system?",
  choices: [
    // distractor: clears the fractions in the variable terms but leaves the constant at 6, which gives a parallel line and a system with no solution
    { id: "A", text: "$10x - 3y = 6$" },
    { id: "B", text: "$20x - 6y = 48$" },
    // distractor: moves the y-term to the left side without changing its sign before scaling
    { id: "C", text: "$20x + 6y = 48$" },
    // distractor: clears each fraction with its own denominator, multiplying the x-term by 2 but the y-term and the constant by 4
    { id: "D", text: "$5x - 3y = 24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiplying the given equation by $4$ gives $10x - 3y = 24$. The second equation must be a nonzero multiple of this one, and doubling it gives $20x - 6y = 48$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions only when both equations describe the same line, so the second equation must be a nonzero multiple of the first.\nStep 2: Multiply every term of the given equation by $4$ to clear the fractions: $10x = 3y + 24$. Subtracting $3y$ from both sides gives $10x - 3y = 24$.\nStep 3: Multiplying $10x - 3y = 24$ by $2$ gives $20x - 6y = 48$, which is choice B. Check with the point $(3, 2)$: $\\frac{5}{2}(3) = 7.5$ and $\\frac{3}{4}(2) + 6 = 7.5$, and $20(3) - 6(2) = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10x - 3y = 6$): the variable terms match, but the constant was never multiplied by $4$. Same coefficients with a different constant give a parallel line, so that system has no solution.\n* Choice C ($20x + 6y = 48$): moves $3y$ to the left side without changing its sign, which produces a line with a different slope.\n* Choice D ($5x - 3y = 24$): clears each fraction with its own denominator, multiplying the $x$-term by $2$ but the rest of the equation by $4$. An equation must be multiplied by one number throughout.\n\n**Test Day Takeaway:** Infinitely many solutions means the two equations are the same line: every coefficient and the constant are scaled by one common factor. Matching only the variable terms gives parallel lines and no solution.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "In triangle $ABC$, the measure of angle $A$ is $48^{\\circ}$, and the measure of angle $B$ is twice the measure of angle $C$. What is the measure, in degrees, of angle $B$?",
  correctAnswer: "88",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $88$.**\n\n**The Fast Way (~25s):** Angles $B$ and $C$ share $180 - 48 = 132$ degrees in a $2 : 1$ split, so angle $C$ measures $44^{\\circ}$ and angle $B$ measures $88^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Let $c$ be the measure, in degrees, of angle $C$. Then angle $B$ measures $2c$ degrees.\nStep 2: The interior angles of a triangle sum to $180^{\\circ}$, so $48 + 2c + c = 180$, which gives $3c = 132$ and $c = 44$.\nStep 3: Angle $B$ measures $2(44) = 88$ degrees. Check: $48 + 88 + 44 = 180$ ✓\n\n**Common Mistakes:**\n* $44$: solves for $c$ correctly but enters the measure of angle $C$ instead of angle $B$.\n* $132$: stops after subtracting $48$ from $180$ and enters the combined measure of angles $B$ and $C$.\n* $66$: splits the remaining $132$ degrees evenly between angles $B$ and $C$ instead of in a $2 : 1$ ratio.\n\n**Test Day Takeaway:** Let the smaller angle be the variable so the larger one is a clean multiple, subtract the known angle from $180$ first, and enter the angle the question names.",
  skills: ["triangle-angle-sum"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(-7, 4)$ and $(3, -12)$ is $(a, b)$. What is the value of $ab$?",
  choices: [
    // distractor: drops the negative on -12 and averages 4 and 12 to get b = 8, giving (-2)(8) = -16
    { id: "A", text: "$-16$" },
    // distractor: reports b, the y-coordinate of the midpoint, instead of the product ab
    { id: "B", text: "$-4$" },
    // distractor: reports a, the x-coordinate of the midpoint, instead of the product ab
    { id: "C", text: "$-2$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The midpoint is $\\left(\\frac{-7 + 3}{2}, \\frac{4 + (-12)}{2}\\right) = (-2, -4)$, so $ab = (-2)(-4) = 8$.\n\n**The Full Solution:**\nStep 1: The midpoint of the segment with endpoints $(x_1, y_1)$ and $(x_2, y_2)$ is $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.\nStep 2: The x-coordinate is $a = \\frac{-7 + 3}{2} = \\frac{-4}{2} = -2$, and the y-coordinate is $b = \\frac{4 + (-12)}{2} = \\frac{-8}{2} = -4$.\nStep 3: The product is $ab = (-2)(-4) = 8$. Check: $(-2, -4)$ is $\\sqrt{5^{2} + 8^{2}} = \\sqrt{89}$ from $(-7, 4)$ and $\\sqrt{5^{2} + 8^{2}} = \\sqrt{89}$ from $(3, -12)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): drops the negative sign on $-12$ and averages $4$ and $12$ to get $b = 8$, then multiplies $(-2)(8)$.\n* Choice B ($-4$): this is $b$, the y-coordinate of the midpoint, not the product $ab$.\n* Choice C ($-2$): this is $a$, the x-coordinate of the midpoint, again reported before the final multiplication.\n\n**Test Day Takeaway:** Average each coordinate separately and keep every sign, then reread the question: it asks for a value built from the midpoint, not the midpoint itself.",
  skills: ["coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a health fair, $45\\%$ of the visitors were over age $50$. Of these visitors, $30\\%$ had high blood pressure. If a visitor is selected at random, what is the probability that the visitor is over age $50$ and has high blood pressure?",
  choices: [
    { id: "A", text: "$13.5\\%$" },
    // distractor: subtracts the two percents, 45 - 30 = 15, instead of multiplying them
    { id: "B", text: "$15\\%$" },
    // distractor: reports the probability of high blood pressure given that the visitor is over age 50, not the probability of both
    { id: "C", text: "$30\\%$" },
    // distractor: adds the two percents, 45 + 30 = 75
    { id: "D", text: "$75\\%$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The $30\\%$ applies only to the visitors over age $50$, so multiply: $0.45 \\times 0.30 = 0.135$, which is $13.5\\%$.\n\n**The Full Solution:**\nStep 1: Suppose there were $1{,}000$ visitors. Then $45\\%$ of them, or $450$, were over age $50$.\nStep 2: The $30\\%$ is a percent of that group, not of all visitors, so the number who were over age $50$ and had high blood pressure is $0.30 \\times 450 = 135$.\nStep 3: The probability that a randomly selected visitor is in both groups is $\\frac{135}{1{,}000} = 0.135$, or $13.5\\%$. Check: $13.5\\%$ is less than both $45\\%$ and $30\\%$, as it must be for a share of a share ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($15\\%$): subtracts, $45 - 30 = 15$. Subtraction compares the two percents; it does not find the visitors in both groups.\n* Choice C ($30\\%$): this is the probability of high blood pressure given that the visitor is over age $50$, the conditional probability the question gives, not the one it asks for.\n* Choice D ($75\\%$): adds the two percents. That cannot be right, since only $45\\%$ of the visitors are over age $50$ at all.\n\n**Test Day Takeaway:** A percent \"of\" a subgroup is a rate inside that subgroup. To find the share of everyone, multiply the two rates, and confirm the result is smaller than either one.",
  skills: ["conditional-probability"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the percent decrease from the previous year in the number of visitors to a park. What was the percent decrease in the number of visitors to the park from $2020$ to $2023$?",
  diagram: { type: "dataTable", params: { headers: ["Year", "Percent decrease from previous year"], rows: [["2021", "10%"], ["2022", "25%"], ["2023", "20%"]] } },
  choices: [
    // distractor: adds the three yearly decreases to 55 and then reports what is left, 100 - 55 = 45
    { id: "A", text: "$45\\%$" },
    { id: "B", text: "$46\\%$" },
    // distractor: computes the surviving fraction 0.90(0.75)(0.80) = 0.54 and reports 54 percent as the decrease instead of what remains
    { id: "C", text: "$54\\%$" },
    // distractor: adds the three yearly percent decreases: 10 + 25 + 20 = 55
    { id: "D", text: "$55\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply what remains each year: $0.90 \\times 0.75 \\times 0.80 = 0.54$. If $54\\%$ of the visitors remain, the decrease is $100\\% - 54\\% = 46\\%$.\n\n**The Full Solution:**\nStep 1: Let $V$ be the number of visitors in $2020$. A $10\\%$ decrease leaves $90\\%$, so the $2021$ number is $0.90V$.\nStep 2: A $25\\%$ decrease leaves $75\\%$ of that, so the $2022$ number is $0.75(0.90V) = 0.675V$. A $20\\%$ decrease leaves $80\\%$ of that, so the $2023$ number is $0.80(0.675V) = 0.54V$.\nStep 3: The number fell from $V$ to $0.54V$, a drop of $0.46V$, which is $46\\%$ of the $2020$ number. Check with $V = 1{,}200$: the yearly numbers are $1{,}080$, $810$, and $648$, and $\\frac{1{,}200 - 648}{1{,}200} = 0.46$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45\\%$): adds the three decreases to get $55\\%$ and then reports the remainder, $100 - 55 = 45$.\n* Choice C ($54\\%$): this is the percent of the $2020$ visitors that remains in $2023$, not the percent decrease.\n* Choice D ($55\\%$): adds $10 + 25 + 20$. Each decrease is taken on a smaller number than the one before, so the percents cannot be added.\n\n**Test Day Takeaway:** Successive percent changes multiply. Track what remains each year ($0.90$, $0.75$, $0.80$), multiply, and subtract the product from $1$ at the end.",
  skills: ["percent-change"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$9(x - 2) - 3x = 2(x + 8) - 6$\nWhat value of $x$ is the solution to the given equation?",
  choices: [
    // distractor: moves the constant the wrong way: from 6x - 18 = 2x + 10 writes 4x = 10 - 18 = -8, so x = -2
    { id: "A", text: "$-2$" },
    // distractor: multiplies the 9 by x only, so the left side becomes 6x - 2 and the equation gives x = 3
    { id: "B", text: "$3$" },
    // distractor: multiplies the 2 by x only, so the right side becomes 2x + 2 and the equation gives x = 5
    { id: "C", text: "$5$" },
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Simplify each side first: the left side is $6x - 18$ and the right side is $2x + 10$. Then $4x = 28$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Distribute on the left side: $9(x - 2) - 3x = 9x - 18 - 3x = 6x - 18$.\nStep 2: Distribute on the right side: $2(x + 8) - 6 = 2x + 16 - 6 = 2x + 10$.\nStep 3: Solve $6x - 18 = 2x + 10$: subtracting $2x$ gives $4x - 18 = 10$, adding $18$ gives $4x = 28$, so $x = 7$. Check: $9(5) - 21 = 24$ and $2(15) - 6 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): comes from $4x = 10 - 18$, subtracting the $18$ instead of adding it when moving the constant across the equals sign.\n* Choice B ($3$): multiplies $9$ by $x$ but not by $-2$, so the left side becomes $6x - 2$ and the equation gives $x = 3$.\n* Choice C ($5$): multiplies $2$ by $x$ but not by $8$, so the right side becomes $2x + 2$ and the equation gives $x = 5$.\n\n**Test Day Takeaway:** Simplify each side completely before moving anything across the equals sign. Both distribution slips here produce answers close to the real one.",
  skills: ["combining-like-terms"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = a(b)^{x}$, where $a$ and $b$ are positive constants. If $f(0) = 96$ and $f(3) = 12$, what is the value of $f(5)$?",
  choices: [
    // distractor: treats the ratio 12/96 = 1/8 as the factor for a single increase of 1 in x and multiplies f(3) by it
    { id: "A", text: "$1.5$" },
    { id: "B", text: "$3$" },
    // distractor: applies one halving between x = 3 and x = 5 instead of two
    { id: "C", text: "$6$" },
    // distractor: applies the two remaining halvings to f(0) rather than to f(3), computing 96 divided by 4
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\frac{f(3)}{f(0)} = \\frac{12}{96} = \\frac{1}{8}$, so $b^{3} = \\frac{1}{8}$ and $b = \\frac{1}{2}$. Then $f(5) = 96\\left(\\frac{1}{2}\\right)^{5} = 3$.\n\n**The Full Solution:**\nStep 1: Substituting $0$ for $x$ gives $f(0) = a(b)^{0} = a$, so $a = 96$.\nStep 2: Substituting $3$ for $x$ gives $96b^{3} = 12$, so $b^{3} = \\frac{12}{96} = \\frac{1}{8}$ and $b = \\frac{1}{2}$. The function is $f(x) = 96\\left(\\frac{1}{2}\\right)^{x}$.\nStep 3: Substituting $5$ for $x$ gives $f(5) = 96\\left(\\frac{1}{2}\\right)^{5} = \\frac{96}{32} = 3$. Check by stepping from $f(3) = 12$: $f(4) = 6$ and $f(5) = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): uses $\\frac{1}{8}$ as the factor for each increase of $1$ in $x$, so it multiplies $12$ by $\\frac{1}{8}$. The value $\\frac{1}{8}$ covers three steps, not one, so it is $b^{3}$.\n* Choice C ($6$): moves one step from $f(3)$ instead of two. From $x = 3$ to $x = 5$ the factor is $b^{2}$.\n* Choice D ($24$): multiplies $f(0)$ by $\\left(\\frac{1}{2}\\right)^{2}$, applying the leftover exponent $5 - 3$ to the wrong starting value.\n\n**Test Day Takeaway:** In $f(x) = a(b)^{x}$ the value at $x = 0$ is $a$, and a ratio of two outputs is $b$ raised to the gap between their inputs. Take that root before using $b$ anywhere else.",
  skills: ["exponential-growth-decay"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$2x + 3y = 35$\n$y = 4x - 7$\nThe given system of equations has exactly one solution $(x, y)$. What is the value of $y$?",
  choices: [
    // distractor: flips the sign of the constant when distributing, solving 2x + 12x + 21 = 35 to get x = 1 and then y = -3
    { id: "A", text: "$-3$" },
    // distractor: solves the system correctly but reports x instead of the requested y
    { id: "B", text: "$4$" },
    // distractor: multiplies only the 4x by 3, using 2x + 12x - 7 = 35 to get x = 3 and then y = 5
    { id: "C", text: "$5$" },
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Substituting $4x - 7$ for $y$ gives $2x + 3(4x - 7) = 35$, so $14x = 56$ and $x = 4$. Then $y = 4(4) - 7 = 9$.\n\n**The Full Solution:**\nStep 1: The second equation already gives $y$ in terms of $x$, so replace $y$ in the first equation: $2x + 3(4x - 7) = 35$.\nStep 2: Distribute the $3$ across both terms: $2x + 12x - 21 = 35$, so $14x - 21 = 35$, $14x = 56$, and $x = 4$.\nStep 3: Substitute back into $y = 4x - 7$: $y = 4(4) - 7 = 9$. Check in the first equation: $2(4) + 3(9) = 8 + 27 = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): comes from $2x + 12x + 21 = 35$, which keeps the $3$ but loses the minus sign on the $-7$. That gives $x = 1$ and $y = -3$.\n* Choice B ($4$): this is $x$. The work is right, but the question asks for the other coordinate.\n* Choice C ($5$): comes from $2x + 12x - 7 = 35$, multiplying only the first term inside the parentheses by $3$. That gives $x = 3$ and $y = 5$.\n\n**Test Day Takeaway:** Multiply the whole substituted expression, sign included, by the coefficient in front of it. Then reread the last line: the variable you solve for first is often not the one being asked about.",
  skills: ["substitution-method"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Of the $600$ athletes at a track meet, $35\\%$ ran in distance events, and $\\frac{2}{5}$ of the distance runners set a personal best. Of the other athletes, $150$ set a personal best. If one athlete is selected at random, what is the probability of selecting an athlete who set a personal best?",
  choices: [
    // distractor: counts only the 84 distance runners who set a personal best, giving 84/600
    { id: "A", text: "$0.14$" },
    // distractor: counts only the 150 other athletes who set a personal best, giving 150/600
    { id: "B", text: "$0.25$" },
    { id: "C", text: "$0.39$" },
    // distractor: takes 2/5 of all 600 athletes instead of 2/5 of the 210 distance runners, giving (240 + 150)/600 = 0.65
    { id: "D", text: "$0.65$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Distance runners: $0.35(600) = 210$, of whom $\\frac{2}{5}(210) = 84$ set a personal best. Add the $150$ others: $\\frac{84 + 150}{600} = 0.39$.\n\n**The Full Solution:**\nStep 1: The number of distance runners is $35\\%$ of $600$, or $0.35(600) = 210$. The other $600 - 210 = 390$ athletes did not run in distance events.\nStep 2: Of the $210$ distance runners, $\\frac{2}{5}(210) = 84$ set a personal best. Of the other $390$ athletes, $150$ did. In total, $84 + 150 = 234$ athletes set a personal best.\nStep 3: The probability is the number of athletes who set a personal best divided by the total number of athletes: $\\frac{234}{600} = 0.39$. Check: $\\frac{84}{600} + \\frac{150}{600} = 0.14 + 0.25 = 0.39$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.14$): uses $\\frac{84}{600}$, counting only the distance runners who set a personal best and leaving out the other $150$.\n* Choice B ($0.25$): uses $\\frac{150}{600}$, counting only the other athletes who set a personal best and leaving out the $84$.\n* Choice D ($0.65$): takes $\\frac{2}{5}$ of all $600$ athletes, $240$, instead of $\\frac{2}{5}$ of the $210$ distance runners, giving $\\frac{240 + 150}{600} = 0.65$. The $\\frac{2}{5}$ applies only to the distance runners.\n\n**Test Day Takeaway:** For a probability over the whole group, build one complete count across every subgroup, add, and only then divide by the overall total.",
  skills: ["probability-basics"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the functions $f$ and $g$, the table shows five values of $x$ and their corresponding values of $f(x)$ and $g(x)$. For one of the values of $x$ in the table, $x = a$, the value of $g(f(a))$ is $5$. What is the value of $f(g(a))$?",
  questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["$1$", "$4$", "$3$"], ["$2$", "$1$", "$5$"], ["$3$", "$5$", "$2$"], ["$4$", "$3$", "$1$"], ["$5$", "$2$", "$4$"]] },
  choices: [
    // distractor: stops at f(a) = 2, the inner output found on the way to identifying a
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    // distractor: reports g(a) = 4 without applying f to it
    { id: "C", text: "$4$" },
    // distractor: reports the input a = 5 itself instead of the requested value f(g(a))
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** In the table, $g(x) = 5$ only when $x = 2$, and $f(x) = 2$ only when $x = 5$, so $a = 5$. Then $g(5) = 4$ and $f(4) = 3$.\n\n**The Full Solution:**\nStep 1: Work $g(f(a)) = 5$ from the outside in. In the $g(x)$ column, the only output of $5$ occurs at $x = 2$, so $f(a)$ must equal $2$.\nStep 2: In the $f(x)$ column, the only output of $2$ occurs at $x = 5$, so $a = 5$.\nStep 3: Evaluate $f(g(a)) = f(g(5))$. From the table, $g(5) = 4$ and $f(4) = 3$. Check forward: $f(5) = 2$ and $g(2) = 5$, confirming $a = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is $f(a)$, the inner value found on the way to identifying $a$.\n* Choice C ($4$): this is $g(a) = g(5)$, the inner function of the requested composition; $f$ is never applied to it.\n* Choice D ($5$): this is $a$ itself, which also matches the $5$ in the given equation.\n\n**Test Day Takeaway:** Read a composition from a table one lookup at a time, inside first, then outside, and label each intermediate value so you do not stop at $f(a)$ or $g(a)$.",
  skills: ["function-composition"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A bakery's weekly profit, in hundreds of dollars, when it charges $x$ dollars for a cake is modeled by $p(x) = -x^{2} + 14x - 40$. What is the greatest integer value of $x$ for which the model predicts a positive weekly profit?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~40s):** Factor: $-x^{2} + 14x - 40 = -(x - 4)(x - 10)$, which is positive only for $4 < x < 10$. The greatest integer less than $10$ is $9$.\n\n**The Full Solution:**\nStep 1: A positive profit means $p(x) > 0$, so solve $-x^{2} + 14x - 40 > 0$. Multiplying by $-1$ and reversing the inequality gives $x^{2} - 14x + 40 < 0$.\nStep 2: Factor: $x^{2} - 14x + 40 = (x - 4)(x - 10)$. The product is negative exactly when $x$ is between the zeros, so $4 < x < 10$.\nStep 3: The greatest integer less than $10$ is $9$. Check: $p(9) = -81 + 126 - 40 = 5$, which is positive, while $p(10) = -100 + 140 - 40 = 0$, which is not ✓\n\n**Common Mistakes:**\n* $10$: enters the larger zero. At $x = 10$ the model predicts a profit of exactly $0$, which is not positive.\n* $4$: enters the smaller zero, which is the lower end of the interval, not its greatest integer.\n* $7$: enters the $x$-value of the vertex, where the profit is greatest, instead of the greatest price that still gives a positive profit.\n\n**Test Day Takeaway:** For a downward-opening quadratic, \"positive\" means strictly between the zeros. Find the zeros, decide whether the endpoints count, then step inside the interval.",
  skills: ["quadratics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$7x + 2y = 35$\n$2x + 7y = 55$\nThe values of $x$ and $y$ satisfy the given system of equations. What is the value of $x + y$?",
  choices: [
    // distractor: subtracts the equations instead of adding them, reaching -5x + 5y = 20 and reporting y - x = 4
    { id: "A", text: "$4$" },
    // distractor: adds the equations to 9x + 9y = 90 but divides by 18, the sum of all four coefficients, instead of by 9
    { id: "B", text: "$5$" },
    { id: "C", text: "$10$" },
    // distractor: adds the two right sides and stops, reporting 90 without dividing by the common factor of 9
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Adding the two equations gives $9x + 9y = 90$, so $x + y = 10$.\n\n**The Full Solution:**\nStep 1: The coefficients are mirror images of each other, $7$ and $2$ on top, $2$ and $7$ below, so adding the equations lines up the variables: $(7x + 2x) + (2y + 7y) = 35 + 55$.\nStep 2: Combine: $9x + 9y = 90$, which factors as $9(x + y) = 90$.\nStep 3: Divide both sides by $9$: $x + y = 10$. Check by solving fully: $x = 3$ and $y = 7$, and $7(3) + 2(7) = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the equations rather than adding them, giving $-5x + 5y = 20$, or $y - x = 4$. That is the difference of the two values, not their sum.\n* Choice B ($5$): divides $90$ by $18$, treating the left side as $18$ copies of $x + y$. There are $9$: the coefficients add to $9$ for each variable, not across both.\n* Choice D ($90$): stops at $35 + 55$. That is $9$ times the requested value.\n\n**Test Day Takeaway:** When a question asks for $x + y$ rather than for $x$ or $y$, add or subtract the equations first and look for the combination. Mirrored coefficients are the signal that one step finishes the item.",
  skills: ["elimination-method"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} + 12x - 8y + c = 0$\nIn the $xy$-plane, the graph of the given equation is a circle with radius $10$, where $c$ is a constant. What is the value of $c$?",
  correctAnswer: "-48",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-48$.**\n\n**The Fast Way (~45s):** Completing both squares moves $36$ and $16$ to the right side: $52 - c = r^{2} = 100$, so $c = -48$.\n\n**The Full Solution:**\nStep 1: Complete the square in $x$: $x^{2} + 12x = (x + 6)^{2} - 36$. Complete the square in $y$: $y^{2} - 8y = (y - 4)^{2} - 16$.\nStep 2: The equation becomes $(x + 6)^{2} - 36 + (y - 4)^{2} - 16 + c = 0$, so $(x + 6)^{2} + (y - 4)^{2} = 52 - c$. The right side equals $r^{2}$.\nStep 3: The radius is $10$, so $52 - c = 10^{2} = 100$, which gives $c = -48$. Check: with $c = -48$ the equation is $(x + 6)^{2} + (y - 4)^{2} = 100$, a circle centered at $(-6, 4)$ with radius $10$ ✓\n\n**Common Mistakes:**\n* $48$: solves $52 - c = 100$ as $c = 100 - 52$, losing the sign when isolating $c$.\n* $42$: sets $52 - c$ equal to the radius, $10$, instead of the radius squared.\n* $-64$: completes the square in $x$ only, solving $36 - c = 100$ and ignoring the $-8y$ term.\n\n**Test Day Takeaway:** Completing the square adds a positive number to the right side for each variable. Set the collected right side equal to $r^{2}$, not $r$, and solve for the constant last.",
  skills: ["circle-equation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$\\frac{x^{2} - 9}{x - 3} = 6$\nWhich of the following is true about the given equation?",
  choices: [
    { id: "A", text: "The equation has no solution." },
    // distractor: solves x + 3 = 6 to get x = 3 and never checks that x = 3 makes the denominator zero
    { id: "B", text: "The equation has exactly one solution, $3$." },
    // distractor: adds 3 to 6 instead of subtracting when solving x + 3 = 6, reporting x = 9
    { id: "C", text: "The equation has exactly one solution, $9$." },
    // distractor: sets the numerator x squared minus 9 equal to zero and reports both of its zeros
    { id: "D", text: "The equation has exactly two solutions, $-3$ and $3$." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The left side equals $x + 3$ for every $x$ except $3$, and $x + 3 = 6$ gives only $x = 3$, the one value the original equation excludes.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $x^{2} - 9 = (x - 3)(x + 3)$. So $\\frac{x^{2} - 9}{x - 3} = x + 3$ for every $x$ except $x = 3$, where the denominator is $0$.\nStep 2: Solve the simplified equation: $x + 3 = 6$, so $x = 3$.\nStep 3: Substituting $x = 3$ into the original equation makes the denominator $3 - 3 = 0$, so the left side is undefined and $x = 3$ is not a solution. There is no other candidate, so the equation has no solution. Check: for any $x \\neq 3$, the left side is $x + 3 \\neq 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): this is what the simplified equation gives. Cancelling the factor $x - 3$ is valid only where it is nonzero, so $x = 3$ must be tested and rejected.\n* Choice C ($9$): comes from solving $x + 3 = 6$ by adding $3$ to both sides instead of subtracting it.\n* Choice D ($-3$ and $3$): sets the numerator equal to $0$ and lists its zeros. That finds where the fraction equals $0$, not where it equals $6$.\n\n**Test Day Takeaway:** After cancelling a factor in a rational equation, check every candidate against the original denominator. If the only candidate is an excluded value, the equation has no solution.",
  skills: ["rational-expressions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the quadratic function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. The graph of $y = f(x)$ in the $xy$-plane has two x-intercepts. What is the distance between the two x-intercepts?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$-21$"], ["$1$", "$-24$"], ["$4$", "$-21$"]] },
  choices: [
    // distractor: adds the two x-intercepts, -3 and 7, instead of measuring the distance between them
    { id: "A", text: "$4$" },
    // distractor: reports 5, the distance from the axis of symmetry x = 2 to one intercept, which is half the distance asked for
    { id: "B", text: "$5$" },
    // distractor: reports the larger x-intercept, 7, rather than the distance between the two
    { id: "C", text: "$7$" },
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** $f(0) = f(4)$, so the axis of symmetry is $x = 2$. With $f(1) = -24$ the function is $f(x) = (x - 2)^{2} - 25$, whose zeros are $2 \\pm 5$, a distance of $10$ apart.\n\n**The Full Solution:**\nStep 1: Write $f(x) = a(x - h)^{2} + k$. The table shows $f(0)$ and $f(4)$ are both $-21$, so $x = 0$ and $x = 4$ sit the same distance from the axis of symmetry, which puts $h$ halfway between them at $h = 2$.\nStep 2: Use the other two rows. From $f(1) = -24$: $a(1 - 2)^{2} + k = a + k = -24$. From $f(0) = -21$: $a(0 - 2)^{2} + k = 4a + k = -21$. Subtracting gives $3a = 3$, so $a = 1$ and $k = -25$, and $f(x) = (x - 2)^{2} - 25$.\nStep 3: Set $f(x) = 0$: $(x - 2)^{2} = 25$, so $x - 2 = \\pm 5$ and the intercepts are $x = -3$ and $x = 7$. The distance between them is $7 - (-3) = 10$. Check in standard form: $f(x) = x^{2} - 4x - 21 = (x - 7)(x + 3)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): adds the intercepts, $-3 + 7$. The sum of the zeros is a real feature of the quadratic, but a distance is a difference.\n* Choice B ($5$): stops at the horizontal shift from the vertex to one intercept. The two intercepts sit on opposite sides of the axis, so the gap is twice that.\n* Choice C ($7$): reports the larger intercept itself, the last number written down before subtracting.\n\n**Test Day Takeaway:** Two equal outputs pin the axis of symmetry halfway between their inputs. From there one more table row fixes the vertex form, and the intercepts fall symmetrically on either side.",
  skills: ["quadratics"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A bag contains $18$ marbles, and $6$ of the marbles are red. Two marbles will be selected at random from the bag, one after the other, without replacement. What is the probability that exactly one of the two selected marbles is red?",
  choices: [
    // distractor: counts only the red-then-not-red order and never adds the not-red-then-red order
    { id: "A", text: "$\\frac{4}{17}$" },
    // distractor: reports 6/18, the probability that a single selected marble is red
    { id: "B", text: "$\\frac{1}{3}$" },
    // distractor: treats the selections as independent, as if the first marble were replaced, computing 2(1/3)(2/3) = 4/9
    { id: "C", text: "$\\frac{4}{9}$" },
    { id: "D", text: "$\\frac{8}{17}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice D is correct.**\n\n**The Fast Way (~50s):** Exactly one red can happen in two orders, each with probability $\\frac{6}{18} \\cdot \\frac{12}{17} = \\frac{4}{17}$. Adding the two orders gives $\\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: Red first, then not red: $\\frac{6}{18} \\cdot \\frac{12}{17} = \\frac{72}{306} = \\frac{4}{17}$. After one red marble is removed, $17$ marbles remain and $12$ of them are not red.\nStep 2: Not red first, then red: $\\frac{12}{18} \\cdot \\frac{6}{17} = \\frac{72}{306} = \\frac{4}{17}$.\nStep 3: The two orders cannot both happen, so add them: $\\frac{4}{17} + \\frac{4}{17} = \\frac{8}{17}$. Check by counting pairs: $\\frac{6 \\cdot 12}{\\binom{18}{2}} = \\frac{72}{153} = \\frac{8}{17}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{17}$): counts only the red-then-not-red order and leaves out the not-red-then-red order.\n* Choice B ($\\frac{1}{3}$): this is $\\frac{6}{18}$, the probability that one selected marble is red, not the probability for a pair.\n* Choice C ($\\frac{4}{9}$): computes $2 \\cdot \\frac{1}{3} \\cdot \\frac{2}{3}$, as if the first marble were put back. Without replacement, the second selection is out of $17$ marbles.\n\n**Test Day Takeaway:** For \"exactly one\" without replacement, list every order, shrink the total by one for the second selection, and add the orders.",
  skills: ["probability-basics"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$2y = 5x - 8$\n$ky = 15x + m$\nIn the given system of equations, $k$ and $m$ are constants. The system has infinitely many solutions. What is the value of $k + m$?",
  choices: [
    // distractor: finds m = -24 correctly but reports m alone instead of k + m
    { id: "A", text: "$-24$" },
    // distractor: multiplies the right side by 3 to get m = -24 but leaves k at 2, giving 2 + (-24) = -22
    { id: "B", text: "$-22$" },
    { id: "C", text: "$-18$" },
    // distractor: finds k = 6 correctly but reports k alone instead of k + m
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Matching $5x$ to $15x$ means the first equation was multiplied by $3$: $6y = 15x - 24$. So $k = 6$, $m = -24$, and $k + m = -18$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions only when the two equations describe the same line, so the second equation must be the first multiplied by a single constant.\nStep 2: The $x$-coefficient changes from $5$ to $15$, so the constant multiple is $3$. Multiplying $2y = 5x - 8$ by $3$ gives $6y = 15x - 24$.\nStep 3: Matching terms with $ky = 15x + m$ gives $k = 6$ and $m = -24$, so $k + m = -18$. Check: both equations simplify to $y = \\frac{5}{2}x - 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): this is $m$ alone. The question asks for $k + m$.\n* Choice B ($-22$): multiplies the right side by $3$ but leaves the $y$-coefficient at $2$. Every term, including $2y$, must be multiplied by $3$.\n* Choice D ($6$): this is $k$ alone, the other half of the sum.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a constant multiple of the other. Find the multiple from a pair of matching coefficients, then apply it to every term.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $P(t) = 1{,}450(1.06)^{t}$ gives the estimated population of a town $t$ years after $2016$. What is the best interpretation of $1.06$ in this context?",
  choices: [
    // distractor: reads the growth factor as a fixed number of people added each year, which would make the model linear
    { id: "A", text: "The estimated population increases by $1.06$ people each year." },
    { id: "B", text: "The estimated population increases by $6\\%$ each year." },
    // distractor: reads the factor 1.06 as a 106 percent increase instead of 100 percent of the population plus 6 percent
    { id: "C", text: "The estimated population increases by $106\\%$ each year." },
    // distractor: reads the factor 1.06 itself as the percent increase
    { id: "D", text: "The estimated population increases by $1.06\\%$ each year." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** In $a(b)^{t}$, the base $b$ is the yearly multiplier. Here $b = 1.06 = 1 + 0.06$, so the estimated population grows by $6\\%$ each year.\n\n**The Full Solution:**\nStep 1: The function has the form $P(t) = a(b)^{t}$, where $a = 1{,}450$ is the estimated population in $2016$ and $b = 1.06$ is the factor applied each year.\nStep 2: Multiplying by $1.06$ keeps $100\\%$ of the population and adds $6\\%$ of it, since $1.06 = 1 + 0.06$.\nStep 3: So the estimated population increases by $6\\%$ each year. Check: $P(1) = 1{,}450(1.06) = 1{,}537$, and $1{,}537 - 1{,}450 = 87$, which is $6\\%$ of $1{,}450$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.06$ people): treats the factor as an amount added each year. Adding a fixed amount describes a linear model, not an exponential one.\n* Choice C ($106\\%$): reads $1.06$ as $106\\%$ growth. A $106\\%$ increase would more than double the population each year, a factor of $2.06$.\n* Choice D ($1.06\\%$): reads the factor itself as the percent. A $1.06\\%$ increase corresponds to a factor of $1.0106$.\n\n**Test Day Takeaway:** In an exponential model, subtract $1$ from the base to get the rate of change: a base of $1.06$ means $6\\%$ growth, and a base of $0.94$ would mean $6\\%$ decay.",
  skills: ["exponential-growth-decay"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The width of a rectangle is $7$ units less than its length. Each diagonal of the rectangle has a length of $17$ units. What is the length, in units, of the rectangle?",
  choices: [
    // distractor: solves the quadratic correctly but reports the width, 15 - 7 = 8, instead of the length
    { id: "A", text: "$8$" },
    // distractor: sets the sum of the length and width equal to the diagonal: L + (L - 7) = 17 gives L = 12
    { id: "B", text: "$12$" },
    // distractor: squares L - 7 as L^2 - 49, so L^2 + L^2 - 49 = 289 gives L^2 = 169 and L = 13
    { id: "C", text: "$13$" },
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** A diagonal and two sides form a right triangle, so $L^{2} + (L - 7)^{2} = 17^{2}$. This simplifies to $(L - 15)(L + 8) = 0$, and a length is positive, so $L = 15$.\n\n**The Full Solution:**\nStep 1: Let $L$ be the length of the rectangle, so the width is $L - 7$. A diagonal is the hypotenuse of a right triangle whose legs are the length and the width: $L^{2} + (L - 7)^{2} = 17^{2}$.\nStep 2: Expand: $L^{2} + L^{2} - 14L + 49 = 289$, so $2L^{2} - 14L - 240 = 0$, or $L^{2} - 7L - 120 = 0$.\nStep 3: Factor: $(L - 15)(L + 8) = 0$. A length must be positive, so $L = 15$. Check: the width is $8$, and $15^{2} + 8^{2} = 225 + 64 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): this is the width, $15 - 7$. The question asks for the length.\n* Choice B ($12$): sets $L + (L - 7) = 17$, adding the sides as if they lay along the diagonal. The sides and the diagonal are related by the Pythagorean theorem, not by addition.\n* Choice C ($13$): squares $L - 7$ as $L^{2} - 49$, dropping the middle term $-14L$. Then $2L^{2} - 49 = 289$ gives $L = 13$.\n\n**Test Day Takeaway:** A rectangle's diagonal is the hypotenuse of a right triangle with the length and width as legs. Expand $(L - 7)^{2}$ fully, solve, and keep the positive root.",
  skills: ["pythagorean-theorem"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the right triangle shown, $\\tan(P) = \\frac{3}{4}$. What is the length of $\\overline{PR}$?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [36, 0], [36, 27]], labels: ["P", "Q", "R"], sideLabels: ["36", "", ""], rightAngleVertex: 1 } },
  choices: [
    // distractor: reports QR, the leg opposite angle P, instead of the hypotenuse PR
    { id: "A", text: "$27$" },
    { id: "B", text: "$45$" },
    // distractor: scales the 3-4-5 triple from the wrong leg, treating PQ as the side of length 3 and computing (36/3)(5) = 60
    { id: "C", text: "$60$" },
    // distractor: adds the two legs, 36 + 27, instead of applying the Pythagorean theorem
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\tan(P) = \\frac{QR}{PQ} = \\frac{3}{4}$ with $PQ = 36$ gives $QR = 27$. The legs $27$ and $36$ are a $3$-$4$-$5$ triple scaled by $9$, so $PR = 45$.\n\n**The Full Solution:**\nStep 1: The right angle is at $Q$, so for angle $P$ the opposite leg is $QR$, the adjacent leg is $PQ = 36$, and the hypotenuse is $PR$.\nStep 2: $\\tan(P) = \\frac{QR}{PQ}$, so $\\frac{QR}{36} = \\frac{3}{4}$ and $QR = 27$.\nStep 3: By the Pythagorean theorem, $PR = \\sqrt{36^{2} + 27^{2}} = \\sqrt{1{,}296 + 729} = \\sqrt{2{,}025} = 45$. Check: $\\frac{QR}{PQ} = \\frac{27}{36} = \\frac{3}{4}$ and $27 : 36 : 45 = 3 : 4 : 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): this is $QR$, the leg opposite angle $P$, not the hypotenuse.\n* Choice C ($60$): matches the $3$ in the ratio to $PQ$, the adjacent leg, so the scale factor becomes $12$ and the hypotenuse $5(12) = 60$. The adjacent leg corresponds to the $4$.\n* Choice D ($63$): adds the two legs, $36 + 27$. The hypotenuse is found with the Pythagorean theorem, not by addition.\n\n**Test Day Takeaway:** Label opposite, adjacent and hypotenuse from the angle named before using a ratio, then match each side to the correct number in the $3$-$4$-$5$ triple.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the distribution of the number of goals a soccer team scored in each of its $26$ games last season. What is the median number of goals the team scored per game?",
  diagram: { type: "dataTable", params: { headers: ["Goals scored", "Number of games"], rows: [["1", "5"], ["2", "8"], ["3", "4"], ["4", "6"], ["5", "3"]] } },
  choices: [
    // distractor: reports the mode, the goal total with the greatest number of games, instead of the median
    { id: "A", text: "$2$" },
    { id: "B", text: "$2.5$" },
    // distractor: uses only the 14th value and skips averaging it with the 13th
    { id: "C", text: "$3$" },
    // distractor: finds the median of the frequency column 3, 4, 5, 6, 8 instead of the median of the data
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** With $26$ games, the median is the mean of the $13$th and $14$th values. The running totals $5$, $13$, $17$ put the $13$th value at $2$ goals and the $14$th at $3$ goals, so the median is $2.5$.\n\n**The Full Solution:**\nStep 1: The number of games is $5 + 8 + 4 + 6 + 3 = 26$, an even number, so the median is the mean of the $13$th and $14$th values when the data are listed in order.\nStep 2: List cumulatively: games $1$ through $5$ had $1$ goal, games $6$ through $13$ had $2$ goals, and games $14$ through $17$ had $3$ goals. So the $13$th value is $2$ and the $14$th value is $3$.\nStep 3: The median is $\\frac{2 + 3}{2} = 2.5$. Check: $13$ values are $2$ or fewer and $13$ values are $3$ or more, so $2.5$ splits the data in half ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the mode, the number of goals with the most games, not the median.\n* Choice C ($3$): uses only the $14$th value instead of the mean of the $13$th and $14$th values.\n* Choice D ($5$): finds the median of the frequency column, $3$, $4$, $5$, $6$, $8$, instead of the median of the goals.\n\n**Test Day Takeaway:** In a frequency table, the median comes from the data values, not the frequencies. Find the middle position from the total count, then use running totals to locate it.",
  skills: ["find-median"]
}
      ]
    }
  ]
};

export default practiceTest1;
