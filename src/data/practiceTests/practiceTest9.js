// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: music production, wildlife, restaurants, e-commerce

export const practiceTest9 = {
  id: "practice-test-9",
  title: "Practice Test 9",
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
  question: "In a bag of 40 marbles, 14 are blue and the rest are red. What percentage of the marbles are red?",
  choices: [
    { id: "A", text: "35%" },
    { id: "B", text: "55%" },
    { id: "C", text: "65%" },
    { id: "D", text: "74%" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Basic percent**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** Red marbles = $40 - 14 = 26$. Percentage = $\\frac{26}{40} \\times 100 = 65\\%$.\n\n**The Full Solution:**\nRed = $40 - 14 = 26$.\n$\\frac{26}{40} = \\frac{13}{20} = 0.65 = 65\\%$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Computes $14/40 = 35\\%$ (that's the blue percentage).\n\\u2022 B: Estimates or makes an arithmetic error.\n\\u2022 D: Confuses with another fraction.\n\n**Test Day Takeaway:** Read carefully whether the question asks about the specified group or the remaining group.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Two angles of a triangle measure $47\\degree$ and $65\\degree$. What is the measure of the third angle?",
  choices: [
    { id: "A", text: "$58\\degree$" },
    { id: "B", text: "$68\\degree$" },
    { id: "C", text: "$78\\degree$" },
    { id: "D", text: "$112\\degree$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle angle sum**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $180 - 47 - 65 = 180 - 112 = 68\\degree$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180\\degree$.\nThird angle = $180 - 47 - 65 = 68\\degree$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Subtracts from wrong total or makes arithmetic error.\n\\u2022 C: $180 - 47 - 55 = 78$ (misreads 65 as 55).\n\\u2022 D: This is the sum of the two given angles, not the third angle.\n\n**Test Day Takeaway:** Triangle angles always sum to $180\\degree$. Subtract the known angles.",
  skills: ["angles", "triangles"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A fair six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
  choices: [
    { id: "A", text: "$\\frac{1}{6}$" },
    { id: "B", text: "$\\frac{1}{3}$" },
    { id: "C", text: "$\\frac{2}{3}$" },
    { id: "D", text: "$\\frac{1}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic probability**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Numbers greater than 4: $\\{5, 6\\}$. That's 2 outcomes out of 6. Probability = $\\frac{2}{6} = \\frac{1}{3}$.\n\n**The Full Solution:**\nA six-sided die has outcomes $\\{1, 2, 3, 4, 5, 6\\}$.\nNumbers greater than 4: $\\{5, 6\\}$ = 2 favorable outcomes.\nProbability = $\\frac{\\text{favorable}}{\\text{total}} = \\frac{2}{6} = \\frac{1}{3}$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Counts only one number (like just 5 or just 6).\n\\u2022 C: Counts numbers 4 or less ($\\frac{4}{6} = \\frac{2}{3}$), the complement.\n\\u2022 D: Includes 4 in 'greater than 4' ($\\{4, 5, 6\\} \\Rightarrow 3/6$).\n\n**Test Day Takeaway:** 'Greater than 4' means 5 and 6 only. 'At least 4' would include 4.",
  skills: ["probability"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $h(t) = 320 - 40t$ models the height, in feet, of an elevator $t$ seconds after it begins descending. How many seconds does it take for the elevator to reach the ground floor (height of 0)?",
  choices: [
    { id: "A", text: "6" },
    { id: "B", text: "8" },
    { id: "C", text: "40" },
    { id: "D", text: "280" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear model -- find zero**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Set $h(t) = 0$: $320 - 40t = 0 \\Rightarrow 40t = 320 \\Rightarrow t = 8$.\n\n**The Full Solution:**\n$320 - 40t = 0$\n$40t = 320$\n$t = \\frac{320}{40} = 8$ seconds.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Divides $320/40$ incorrectly or uses $360/60$.\n\\u2022 C: Gives the rate (40), not the time.\n\\u2022 D: Computes $320 - 40 = 280$ (plugs in $t = 1$).\n\n**Test Day Takeaway:** To find when a quantity reaches 0, set the function equal to 0 and solve.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A rectangle has a length of 12 cm and a width of 7 cm. What is the perimeter of the rectangle, in centimeters?",
  choices: [
    { id: "A", text: "19" },
    { id: "B", text: "38" },
    { id: "C", text: "84" },
    { id: "D", text: "34" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rectangle perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Perimeter = $2(12 + 7) = 2(19) = 38$.\n\n**The Full Solution:**\nPerimeter of a rectangle = $2l + 2w = 2(12) + 2(7) = 24 + 14 = 38$ cm.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Computes $l + w = 19$ but forgets to multiply by 2.\n\\u2022 C: Computes the area ($12 \\times 7 = 84$) instead of the perimeter.\n\\u2022 D: Might compute $2(12) + 7 + 3 = 34$ by mistake.\n\n**Test Day Takeaway:** Perimeter = $2(l + w)$. Don't confuse perimeter with area.",
  skills: ["area"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Two similar triangles have corresponding sides in the ratio $3:5$. If the area of the smaller triangle is $27$ square inches, what is the area of the larger triangle?",
  choices: [
    { id: "A", text: "45" },
    { id: "B", text: "75" },
    { id: "C", text: "135" },
    { id: "D", text: "225" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar triangles -- area ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** If sides are in ratio $3:5$, areas are in ratio $3^2:5^2 = 9:25$. So $\\frac{27}{A} = \\frac{9}{25}$, giving $A = \\frac{27 \\times 25}{9} = 75$.\n\n**The Full Solution:**\nFor similar figures, the ratio of areas equals the square of the ratio of corresponding sides.\nSide ratio = $\\frac{3}{5}$, so area ratio = $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.\n$\\frac{\\text{small area}}{\\text{large area}} = \\frac{9}{25}$\n$\\frac{27}{\\text{large area}} = \\frac{9}{25}$\nLarge area = $\\frac{27 \\times 25}{9} = \\frac{675}{9} = 75$ square inches.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses the side ratio directly: $27 \\times \\frac{5}{3} = 45$.\n\\u2022 C: Computes $27 \\times 5 = 135$.\n\\u2022 D: Squares everything: $27 \\times (5/3)^2 \neq 225$. Actually $225 = 9 \\times 25$, mixing up the computation.\n\n**Test Day Takeaway:** Area scales as the SQUARE of the side ratio. Volume scales as the CUBE.",
  skills: ["similar-triangles", "area", "ratios"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A spinner is divided into sections colored red, blue, and green. The probability of landing on red is $0.35$ and the probability of landing on blue is $0.25$. If the spinner is spun twice, what is the probability of landing on green both times?",
  choices: [
    { id: "A", text: "0.16" },
    { id: "B", text: "0.40" },
    { id: "C", text: "0.80" },
    { id: "D", text: "0.08" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Independent compound probability**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** $P(\\text{green}) = 1 - 0.35 - 0.25 = 0.40$. Two independent spins: $P(\\text{green both}) = 0.40 \\times 0.40 = 0.16$.\n\n**The Full Solution:**\nThe probabilities must sum to 1:\n$P(\\text{green}) = 1 - 0.35 - 0.25 = 0.40$.\n\nSince the spins are independent:\n$P(\\text{green both}) = P(\\text{green}) \\times P(\\text{green}) = 0.40 \\times 0.40 = 0.16$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Gives $P(\\text{green})$ for one spin, not two.\n\\u2022 C: Doubles the single-spin probability instead of squaring.\n\\u2022 D: Multiplies $0.40 \\times 0.20$, confusing the green probability.\n\n**Test Day Takeaway:** For independent events, multiply the individual probabilities. For 'both,' use $P(A) \\times P(B)$.",
  skills: ["probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "In an isosceles triangle, the two equal sides each measure 13 cm and the base measures 10 cm. What is the area of the triangle, in square centimeters?",
  correctAnswer: "60",
  explanation: "**The correct answer is $60$.**\n\n**The Full Solution:**\nIn an isosceles triangle, the height from the apex to the base bisects the base.\nHalf-base = $10/2 = 5$ cm.\nUsing the Pythagorean theorem: $h^2 + 5^2 = 13^2$\n$h^2 = 169 - 25 = 144$\n$h = 12$ cm.\n\nArea = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 10 \\times 12 = 60$ sq cm.\n\n**Common Mistakes:**\n\\u2022 Using $13$ as the height instead of computing it.\n\\u2022 Forgetting to halve the base when applying the Pythagorean theorem.\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. \\u2713. Area = $\\frac{1}{2}(10)(12) = 60$. \\u2713",
  skills: ["triangles", "area"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A data set of 10 values has a mean of 24. When an 11th value is added, the new mean becomes 26. What is the 11th value?",
  choices: [
    { id: "A", text: "46" },
    { id: "B", text: "26" },
    { id: "C", text: "48" },
    { id: "D", text: "50" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: New mean after adding a value**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Original sum = $10 \\times 24 = 240$. New sum = $11 \\times 26 = 286$. The 11th value = $286 - 240 = 46$.\n\n**The Full Solution:**\nSum of original 10 values = $10 \\times 24 = 240$.\nSum of all 11 values = $11 \\times 26 = 286$.\n11th value = $286 - 240 = 46$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Assumes the new value equals the new mean.\n\\u2022 C: Computes $240 + 2(11) = 262$, or $24 + 24 = 48$.\n\\u2022 D: Adds $26$ to $24$, getting $50$.\n\n**Test Day Takeaway:** To find a new value, compute both sums (before and after) and subtract.",
  skills: ["statistics"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "In the $xy$-plane, triangle $ABC$ has vertices $A(1, 2)$, $B(7, 2)$, and $C(4, 8)$. What is the area of triangle $ABC$?",
  choices: [
    { id: "A", text: "15" },
    { id: "B", text: "18" },
    { id: "C", text: "24" },
    { id: "D", text: "36" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area of triangle from coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $A$ and $B$ are on the line $y = 2$, so $AB$ is the base = $7 - 1 = 6$. The height is the vertical distance from $C$ to $y = 2$: $8 - 2 = 6$. Area = $\\frac{1}{2}(6)(6) = 18$.\n\n**The Full Solution:**\nBase $AB$: both points have $y = 2$, so base = $|7 - 1| = 6$.\nHeight: perpendicular distance from $C(4, 8)$ to line $y = 2$ is $|8 - 2| = 6$.\nArea = $\\frac{1}{2} \\times 6 \\times 6 = 18$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Might use height of $5$ from miscounting.\n\\u2022 C: Forgets the $\\frac{1}{2}$ but uses different base/height.\n\\u2022 D: Computes $6 \\times 6 = 36$ (forgets the $\\frac{1}{2}$).\n\n**Test Day Takeaway:** When two vertices share a coordinate, use that side as the base. Height is the perpendicular distance from the third vertex.",
  skills: ["coordinate-geometry", "area", "triangles"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "A bag contains 5 red, 3 blue, and 2 green marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are red? Express your answer as a simplified fraction.",
  correctAnswer: "2/9",
  explanation: "**The correct answer is $\\frac{2}{9}$.**\n\n**The Full Solution:**\nTotal marbles = $5 + 3 + 2 = 10$.\nP(first red) = $\\frac{5}{10} = \\frac{1}{2}$.\nAfter drawing one red marble: 4 red remain, 9 total remain.\nP(second red | first red) = $\\frac{4}{9}$.\nP(both red) = $\\frac{1}{2} \\times \\frac{4}{9} = \\frac{4}{18} = \\frac{2}{9}$.\n\n**Common Mistakes:**\n\\u2022 Using replacement: $\\frac{5}{10} \\times \\frac{5}{10} = \\frac{1}{4}$. The problem says without replacement.\n\\u2022 Not reducing: $\\frac{4}{18}$ should be simplified to $\\frac{2}{9}$.\n\n**Verification:** $\\frac{5}{10} \\times \\frac{4}{9} = \\frac{20}{90} = \\frac{2}{9} \\approx 0.222$. \\u2713",
  skills: ["probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The scatterplot below shows data for 12 students with a line of best fit $y = 0.8x + 15$, where $x$ is hours of study and $y$ is test score. A student studies 20 hours and scores 28. Is this student's actual score above or below the predicted score, and by how much?",
  choices: [
    { id: "A", text: "Below by 3" },
    { id: "B", text: "Above by 3" },
    { id: "C", text: "Below by 5" },
    { id: "D", text: "Above by 5" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Predicted: $0.8(20) + 15 = 16 + 15 = 31$. Actual = 28. Residual = $28 - 31 = -3$. So below by 3.\n\n**The Full Solution:**\nPredicted score = $0.8(20) + 15 = 16 + 15 = 31$.\nActual score = 28.\nResidual = actual $-$ predicted = $28 - 31 = -3$.\nThe negative residual means the student scored 3 points below the predicted value.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Reverses the subtraction order.\n\\u2022 C: Computes $0.8(20) = 16$, then $28 - 16 = 12$... doesn't match. Uses wrong predicted value.\n\\u2022 D: Combines errors.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Negative = below the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Morning | Afternoon | Total |\n|---|---|---|---|\n| Weekday | 85 | 55 | 140 |\n| Weekend | 35 | 75 | 110 |\n| Total | 120 | 130 | 250 |\n\nA gym tracked when members visit. If a randomly selected visit occurred in the afternoon, what is the probability it was on a weekend?",
  choices: [
    { id: "A", text: "$\\frac{75}{250}$" },
    { id: "B", text: "$\\frac{75}{110}$" },
    { id: "C", text: "$\\frac{75}{130}$" },
    { id: "D", text: "$\\frac{55}{130}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional probability from two-way table**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** Given afternoon (column total = 130). Weekend afternoons = 75. Probability = $\\frac{75}{130} = \\frac{15}{26}$.\n\n**The Full Solution:**\nThe condition is 'afternoon,' so restrict to the Afternoon column (total = 130).\nWeekend afternoon visits = 75.\n$P(\\text{weekend} | \\text{afternoon}) = \\frac{75}{130} = \\frac{15}{26}$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses the grand total 250 instead of the afternoon total.\n\\u2022 B: Uses the weekend row total 110 as the denominator.\n\\u2022 D: Gives the probability of a weekday afternoon visit given afternoon.\n\n**Test Day Takeaway:** 'Given [condition]' means the condition's total becomes the denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "In a right triangle, one acute angle measures $35\\degree$. What is the measure of the other acute angle, in degrees?",
  correctAnswer: "55",
  explanation: "**The correct answer is $55$.**\n\n**The Full Solution:**\nIn a right triangle, one angle is $90\\degree$.\nThe sum of all angles = $180\\degree$.\nOther acute angle = $180 - 90 - 35 = 55\\degree$.\n\n**Common Mistakes:**\n\\u2022 Subtracting from $180$ without accounting for the right angle: $180 - 35 = 145$.\n\\u2022 Subtracting from $90$: $90 - 35 = 55$. This actually gives the correct answer since the two acute angles in a right triangle sum to $90\\degree$.\n\n**Verification:** $90 + 35 + 55 = 180$. \\u2713",
  skills: ["angles", "triangles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Triangle $PQR$ has vertices $P(0, 0)$, $Q(8, 0)$, and $R(4, 8)$. What is the length of the median from vertex $Q$ to the midpoint of side $PR$?",
  choices: [
    { id: "A", text: "$\\sqrt{34}$" },
    { id: "B", text: "$\\sqrt{45}$" },
    { id: "C", text: "$\\sqrt{52}$" },
    { id: "D", text: "$\\sqrt{61}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Median of a triangle using coordinates**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Midpoint of $PR$: $M = \\left(\\frac{0+4}{2}, \\frac{0+8}{2}\\right) = (2, 4)$. Distance $QM = \\sqrt{(8-2)^2 + (0-4)^2} = \\sqrt{36 + 16} = \\sqrt{52}$.\n\n**The Full Solution:**\nA median connects a vertex to the midpoint of the opposite side.\nMidpoint of $PR$: $M = \\left(\\frac{0+4}{2}, \\frac{0+8}{2}\\right) = (2, 4)$.\n\nLength of median $QM$:\n$QM = \\sqrt{(8-2)^2 + (0-4)^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses the wrong midpoint or makes an arithmetic error.\n\\u2022 B: Uses the midpoint of $QR$ instead of $PR$.\n\\u2022 D: Computes the distance from $Q$ to $R$ directly: $\\sqrt{16+64} = \\sqrt{80}$. Not this either, but errors lead here.\n\n**Test Day Takeaway:** A median connects a vertex to the midpoint of the opposite side. Use the midpoint formula, then the distance formula.",
  skills: ["coordinate-geometry", "triangles"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A circle has the equation $x^2 + y^2 - 6x + 8y - 11 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "6" },
    { id: "C", text: "11" },
    { id: "D", text: "36" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: General form to standard form of a circle**\n\n**Choice B is correct.**\n\n**The Fast Way (25s):** Complete the square: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 = 36$. So $(x-3)^2 + (y+4)^2 = 36$. Radius = $\\sqrt{36} = 6$.\n\n**The Full Solution:**\n$x^2 + y^2 - 6x + 8y - 11 = 0$\n$(x^2 - 6x) + (y^2 + 8y) = 11$\n\nComplete the square for $x$: $(x^2 - 6x + 9) = (x-3)^2$, add 9 to both sides.\nComplete the square for $y$: $(y^2 + 8y + 16) = (y+4)^2$, add 16 to both sides.\n$(x-3)^2 + (y+4)^2 = 11 + 9 + 16 = 36$\n\nRadius = $\\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Might take $\\sqrt{16} = 4$ from the $y$-completion only.\n\\u2022 C: Uses 11 from the original equation.\n\\u2022 D: Gives $r^2 = 36$ but doesn't take the square root.\n\n**Test Day Takeaway:** To find a circle's radius from general form, complete the square for both $x$ and $y$, then take $r = \\sqrt{\\text{right side}}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In right triangle $ABC$ with the right angle at $C$, $\\sin A = \\frac{5}{13}$. If $BC = 10$, what is the length of the hypotenuse $AB$?",
  choices: [
    { id: "A", text: "24" },
    { id: "B", text: "26" },
    { id: "C", text: "12" },
    { id: "D", text: "13" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right triangle trigonometry with scaling**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{AB} = \\frac{5}{13}$. Since $BC = 10 = 5 \\times 2$, the scale factor is 2. So $AB = 13 \\times 2 = 26$.\n\n**The Full Solution:**\nIn right triangle $ABC$ with right angle at $C$:\n$\\sin A = \\frac{\\text{side opposite } A}{\\text{hypotenuse}} = \\frac{BC}{AB} = \\frac{5}{13}$.\n\nSo $\\frac{BC}{AB} = \\frac{5}{13}$.\n$\\frac{10}{AB} = \\frac{5}{13}$\n$AB = \\frac{10 \\times 13}{5} = 26$.\n\nThis is a $5$-$12$-$13$ triple scaled by 2: sides $10$-$24$-$26$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Gives the other leg $AC = 24$, not the hypotenuse.\n\\u2022 C: Divides $10 \\times 13 / 5$ incorrectly.\n\\u2022 D: Uses the unscaled hypotenuse from the $5$-$12$-$13$ triple.\n\n**Test Day Takeaway:** When $\\sin A = a/c$ and you know the opposite side, set up the proportion $\\frac{\\text{given side}}{\\text{unknown}} = \\frac{a}{c}$ and solve.",
  skills: ["triangles", "ratios"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  question: "A box contains 4 red balls, 3 blue balls, and 5 green balls. Three balls are drawn at random without replacement. What is the total number of ways to choose 3 balls from the box?",
  correctAnswer: "220",
  explanation: "**The correct answer is $220$.**\n\n**The Full Solution:**\nTotal balls = $4 + 3 + 5 = 12$.\nThe number of ways to choose 3 from 12 is:\n$\\binom{12}{3} = \\frac{12!}{3! \\cdot 9!} = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = \\frac{1320}{6} = 220$.\n\n**Common Mistakes:**\n\\u2022 Using permutations instead of combinations: $12 \\times 11 \\times 10 = 1320$ (order doesn't matter here).\n\\u2022 Multiplying choices from each color separately.\n\n**Verification:** $\\frac{12 \\times 11 \\times 10}{6} = \\frac{1320}{6} = 220$. \\u2713",
  skills: ["probability"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the equation of a circle is $x^2 + y^2 = 25$. A line with equation $y = x + k$ is tangent to the circle. What is the positive value of $k$?",
  choices: [
    { id: "A", text: "$5$" },
    { id: "B", text: "$5\\sqrt{2}$" },
    { id: "C", text: "$\\frac{25}{2}$" },
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent line to a circle -- discriminant method**\n\n**Choice B is correct.**\n\n**The Fast Way (25s):** Substitute $y = x + k$ into $x^2 + y^2 = 25$:\n$x^2 + (x+k)^2 = 25$\n$x^2 + x^2 + 2kx + k^2 = 25$\n$2x^2 + 2kx + (k^2 - 25) = 0$\nTangent means discriminant = 0:\n$(2k)^2 - 4(2)(k^2 - 25) = 0$\n$4k^2 - 8k^2 + 200 = 0$\n$-4k^2 + 200 = 0$\n$k^2 = 50$\n$k = \\pm 5\\sqrt{2}$\nPositive value: $k = 5\\sqrt{2}$.\n\n**The Full Solution:**\nSubstitute $y = x + k$ into the circle equation:\n$x^2 + (x + k)^2 = 25$\n$2x^2 + 2kx + k^2 - 25 = 0$\n\nFor the line to be tangent, the discriminant equals 0:\n$\\Delta = (2k)^2 - 4(2)(k^2 - 25) = 0$\n$4k^2 - 8k^2 + 200 = 0$\n$-4k^2 = -200$\n$k^2 = 50$\n$k = \\pm \\sqrt{50} = \\pm 5\\sqrt{2}$\n\nThe positive value is $k = 5\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses the radius 5 directly.\n\\u2022 C: Computes $k^2/2 = 25$.\n\\u2022 D: Uses $r^2 = 25$ as $k$.\n\n**Test Day Takeaway:** For a tangent line, substitute into the curve equation and set discriminant = 0.",
  skills: ["circle-equations", "discriminant", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Two sides of a triangle have lengths 7 and 11. The angle between these two sides is $90\\degree$. What is the area of the triangle?",
  choices: [
    { id: "A", text: "$\\frac{77}{2}$" },
    { id: "B", text: "$77$" },
    { id: "C", text: "$\\frac{77\\sqrt{2}}{2}$" },
    { id: "D", text: "$\\sqrt{170}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right triangle area**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** The two given sides are the legs of the right triangle. Area = $\\frac{1}{2}(7)(11) = \\frac{77}{2}$.\n\n**The Full Solution:**\nSince the included angle is $90\\degree$, the two sides are the legs of a right triangle.\nArea = $\\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2 = \\frac{1}{2} \\times 7 \\times 11 = \\frac{77}{2} = 38.5$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Forgets the $\\frac{1}{2}$: $7 \\times 11 = 77$.\n\\u2022 C: Applies a formula for non-right triangles involving $\\sin$.\n\\u2022 D: Computes the hypotenuse $\\sqrt{7^2 + 11^2} = \\sqrt{170}$.\n\n**Test Day Takeaway:** When the included angle is $90\\degree$, the two sides are the legs, and area = $\\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.",
  skills: ["area", "triangles"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  question: "Two similar rectangles have perimeters of 28 cm and 42 cm, respectively. If the area of the smaller rectangle is 40 square cm, what is the area of the larger rectangle, in square cm?",
  correctAnswer: "90",
  explanation: "**The correct answer is $90$.**\n\n**The Full Solution:**\nSince the rectangles are similar, the ratio of their perimeters equals the ratio of their corresponding sides.\nPerimeter ratio = $\\frac{28}{42} = \\frac{2}{3}$.\n\nThe ratio of areas = square of the side ratio = $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\n\n$\\frac{\\text{smaller area}}{\\text{larger area}} = \\frac{4}{9}$\n$\\frac{40}{\\text{larger area}} = \\frac{4}{9}$\nLarger area = $\\frac{40 \\times 9}{4} = \\frac{360}{4} = 90$ sq cm.\n\n**Common Mistakes:**\n\\u2022 Using the perimeter ratio directly: $40 \\times \\frac{3}{2} = 60$. Wrong -- area scales as the square.\n\\u2022 Computing $(3/2)^2 = 9/4$ but applying it incorrectly.\n\n**Verification:** Side ratio $2:3$, area ratio $4:9$. $40 \\times \\frac{9}{4} = 90$. \\u2713",
  skills: ["similar-triangles", "area", "ratios"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In triangle $DEF$, $DE = 9$, $EF = 12$, and $DF = 15$. Triangle $DEF$ is similar to triangle $XYZ$, where vertex $X$ corresponds to vertex $D$. If $XY = 6$, what is the perimeter of triangle $XYZ$?",
  choices: [
    { id: "A", text: "18" },
    { id: "B", text: "24" },
    { id: "C", text: "30" },
    { id: "D", text: "36" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar triangles -- scale factor and perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $DE$ corresponds to $XY$. Scale factor = $\\frac{XY}{DE} = \\frac{6}{9} = \\frac{2}{3}$. Perimeter of $DEF$ = $9 + 12 + 15 = 36$. Perimeter of $XYZ$ = $36 \\times \\frac{2}{3} = 24$.\n\n**The Full Solution:**\nSince $X$ corresponds to $D$, $Y$ corresponds to $E$, and $Z$ corresponds to $F$:\n$\\frac{XY}{DE} = \\frac{6}{9} = \\frac{2}{3}$.\n\nAll sides of $XYZ$ are $\\frac{2}{3}$ of the corresponding sides of $DEF$:\n$XY = 6$, $YZ = 12 \\times \\frac{2}{3} = 8$, $XZ = 15 \\times \\frac{2}{3} = 10$.\n\nPerimeter = $6 + 8 + 10 = 24$.\n\nNote: $9$-$12$-$15$ is a $3$-$4$-$5$ triple scaled by 3 (so it's a right triangle), and $6$-$8$-$10$ is the same triple scaled by 2.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses ratio $\\frac{1}{2}$ instead of $\\frac{2}{3}$ on the perimeter.\n\\u2022 C: Gives the perimeter of a triangle with sides $6, 12, 12$ (wrong correspondence).\n\\u2022 D: Gives the perimeter of $DEF$, not $XYZ$.\n\n**Test Day Takeaway:** For similar figures, perimeters scale with the side ratio (not the square). Find the scale factor from corresponding sides.",
  skills: ["similar-triangles", "ratios", "triangles"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An e-commerce site lists a product for $\\$80$. During a sale, the price is reduced by $\\$20$. What is the sale price?",
          choices: [
            { id: "A", text: "$\\$20$" },
            { id: "B", text: "$\\$40$" },
            { id: "C", text: "$\\$60$" },
            { id: "D", text: "$\\$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Subtraction**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $80 - 20 = 60$.\n\n**The Full Solution:**\nSale price $= \\$80 - \\$20 = \\$60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$20$): This is the discount amount, not the sale price.\n• Choice B ($\\$40$): $80 \\div 2$, as if the price were cut in half.\n• Choice D ($\\$100$): $80 + 20$, adding instead of subtracting.\n\n**Test Day Takeaway:** Sale price $=$ original price $-$ discount.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{x}{4} = 9$, what is the value of $x$?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 36.**\n\n**The Fast Way (5 seconds):** $x = 9 \\times 4 = 36$.\n\n**The Full Solution:**\n$\\frac{x}{4} = 9$\n$x = 9 \\times 4 = 36$\n\n**Common Mistakes to Avoid:**\n• Dividing: $9 \\div 4 = 2.25$.\n\n**Verification:** $\\frac{36}{4} = 9$ ✓\n\n**Test Day Takeaway:** To undo division, multiply both sides by the denominator.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A wildlife sanctuary has $24$ mammals and $36$ birds. What is the ratio of mammals to birds in simplest form?",
          choices: [
            { id: "A", text: "$1:2$" },
            { id: "B", text: "$2:3$" },
            { id: "C", text: "$3:4$" },
            { id: "D", text: "$4:6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Simplifying Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $24:36 = \\frac{24}{36} = \\frac{2}{3}$, so $2:3$.\n\n**The Full Solution:**\n$\\text{GCF}(24, 36) = 12$\n$\\frac{24}{12} : \\frac{36}{12} = 2:3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1:2$): Wrong simplification.\n• Choice C ($3:4$): Reversed or wrong simplification.\n• Choice D ($4:6$): Partially simplified (divide by $6$, not $12$).\n\n**Test Day Takeaway:** Divide both parts by their GCF to simplify a ratio.",
          skills: ["ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A restaurant manager records the number of customers each day for a week: $45, 52, 48, 55, 60, 50, 40$. What is the median number of customers?",
          choices: [
            { id: "A", text: "$48$" },
            { id: "B", text: "$50$" },
            { id: "C", text: "$52$" },
            { id: "D", text: "$55$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Order the data: $40, 45, 48, 50, 52, 55, 60$. The middle value (4th of 7) is $50$.\n\n**The Full Solution:**\nSorted: $40, 45, 48, \\mathbf{50}, 52, 55, 60$\n$7$ values, so the median is the $\\frac{7+1}{2} = 4$th value $= 50$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($48$): The 3rd value, not the 4th.\n• Choice C ($52$): The 5th value.\n• Choice D ($55$): The 6th value.\n\n**Test Day Takeaway:** To find the median: sort the data, then find the middle value.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A song is $3$ minutes and $30$ seconds long. How many seconds is the song?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 210.**\n\n**The Fast Way (10 seconds):** $3 \\times 60 + 30 = 180 + 30 = 210$.\n\n**The Full Solution:**\n$3$ minutes $= 3 \\times 60 = 180$ seconds\n$180 + 30 = 210$ seconds\n\n**Common Mistakes to Avoid:**\n• Getting $330$ from $3 \\times 100 + 30$.\n• Getting $90$ from $3 \\times 30$.\n\n**Verification:** $210 \\div 60 = 3$ remainder $30$, which is $3$ min $30$ sec ✓\n\n**Test Day Takeaway:** Convert minutes to seconds by multiplying by $60$, then add remaining seconds.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $5(x - 2) = 3x + 6$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multi-Step Equation with Distribution**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $5x - 10 = 3x + 6$. $2x = 16$. $x = 8$.\n\n**The Full Solution:**\n$5(x - 2) = 3x + 6$\n$5x - 10 = 3x + 6$\n$5x - 3x = 6 + 10$\n$2x = 16$\n$x = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $16 \\div 4$ instead of $16 \\div 2$.\n• Choice B ($6$): From $5x - 10 = 3x + 6$, getting $2x = 12$ (arithmetic error on $6 + 10$).\n• Choice D ($11$): From $5x - 10 = 3x + 6$, getting $2x = 22$ ($-10 + 6 = -4$, then $5x - 3x = 4 + ... $).\n\n**Test Day Takeaway:** Distribute first, collect variable terms on one side, constants on the other.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A music producer mixes $3$ tracks per hour. Another producer mixes $5$ tracks per hour. If they work together, how many hours will it take to mix $24$ tracks?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Combined Rate Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Combined rate $= 3 + 5 = 8$ tracks/hour. Time $= 24 \\div 8 = 3$ hours.\n\n**The Full Solution:**\nRate together $= 3 + 5 = 8$ tracks per hour\nTime $= \\frac{24}{8} = 3$ hours\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $24 \\div 12$ or a miscalculation.\n• Choice C ($4$): From $24 \\div 6$.\n• Choice D ($6$): From $24 \\div (5-3+2)$ or similar.\n\n**Test Day Takeaway:** Combined rates add. Time $=$ total work $\\div$ combined rate.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $x^2 + 7x + 12 = 0$, what is the positive difference between the two solutions?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Factoring a Quadratic**\n\n**The correct answer is 1.**\n\n**The Fast Way (15 seconds):** Factor: $(x+3)(x+4) = 0$, so $x = -3$ or $x = -4$. Positive difference $= |-3 - (-4)| = 1$.\n\n**The Full Solution:**\n$x^2 + 7x + 12 = (x+3)(x+4) = 0$\n$x = -3$ or $x = -4$\nPositive difference $= |-3-(-4)| = |-3+4| = |1| = 1$\n\n**Common Mistakes to Avoid:**\n• Reporting $-3$ or $-4$ instead of the difference.\n• Getting $7$ from $|-3| + |-4| = 3 + 4$.\n\n**Verification:** $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ ✓. $(-4)^2 + 7(-4) + 12 = 16 - 28 + 12 = 0$ ✓.\n\n**Test Day Takeaway:** \"Positive difference\" means the absolute value of the difference between the two solutions.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An online store's weekly sales data follows a linear trend. In week $2$, sales were $\\$800$, and in week $6$, sales were $\\$1{,}200$. What were the predicted sales in week $10$?",
          choices: [
            { id: "A", text: "$\\$1{,}400$" },
            { id: "B", text: "$\\$1{,}500$" },
            { id: "C", text: "$\\$1{,}600$" },
            { id: "D", text: "$\\$2{,}000$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Linear Growth from Two Data Points**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Rate $= \\frac{1200 - 800}{6 - 2} = \\frac{400}{4} = 100$ per week. From week $6$ to week $10$: $1200 + 100(4) = 1600$.\n\n**The Full Solution:**\nSlope $= \\frac{1200 - 800}{6 - 2} = \\frac{400}{4} = 100$\nWeek $10$: $1200 + 100(10 - 6) = 1200 + 400 = 1600$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$1{,}400$): Only extends $2$ weeks instead of $4$.\n• Choice B ($\\$1{,}500$): From a rate of $\\frac{400}{3}$ or miscounting weeks.\n• Choice D ($\\$2{,}000$): Doubles $\\$1{,}000$ or adds $\\$800$ to $\\$1{,}200$.\n\n**Test Day Takeaway:** Find the rate, then multiply by the number of additional periods.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{x^{10}}{x^4}$?",
          choices: [
            { id: "A", text: "$x^{2.5}$" },
            { id: "B", text: "$x^6$" },
            { id: "C", text: "$x^{14}$" },
            { id: "D", text: "$x^{40}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{x^{10}}{x^4} = x^{10-4} = x^6$.\n\n**The Full Solution:**\n$\\frac{x^{10}}{x^4} = x^{10-4} = x^6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($x^{2.5}$): Divides exponents instead of subtracting.\n• Choice C ($x^{14}$): Adds exponents (multiplication rule).\n• Choice D ($x^{40}$): Multiplies exponents (power rule).\n\n**Test Day Takeaway:** When dividing like bases, subtract the exponents.",
          skills: ["exponent-rules"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A restaurant's daily profit $P$ in dollars is given by $P = 8n - 200$, where $n$ is the number of customers. How many customers are needed for the restaurant to break even ($P = 0$)?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$25$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$40$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Linear Equation in Context (Break-Even)**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $8n - 200 = 0$, $8n = 200$, $n = 25$.\n\n**The Full Solution:**\n$P = 0$:\n$8n - 200 = 0$\n$8n = 200$\n$n = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From $200 \\div 10$.\n• Choice C ($30$): From $200 \\div 6.67$.\n• Choice D ($40$): From $200 \\div 5$.\n\n**Test Day Takeaway:** Break-even means profit $= 0$. Set the equation to zero and solve.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "If $f(x) = 3x^2 - x + 2$, what is $f(-2)$?",
          correctAnswer: "16",
          explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is 16.**\n\n**The Fast Way (15 seconds):** $f(-2) = 3(4) - (-2) + 2 = 12 + 2 + 2 = 16$.\n\n**The Full Solution:**\n$f(-2) = 3(-2)^2 - (-2) + 2$\n$= 3(4) + 2 + 2$\n$= 12 + 2 + 2$\n$= 16$\n\n**Common Mistakes to Avoid:**\n• Computing $(-2)^2 = -4$ instead of $4$.\n• Getting $3(4) - 2 + 2 = 12$ — forgetting that $-(-2) = +2$.\n\n**Verification:** $3(4) - (-2) + 2 = 12 + 2 + 2 = 16$ ✓\n\n**Test Day Takeaway:** $(-2)^2 = 4$ (positive). $-(-2) = +2$. Both signs flip when substituting negatives.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below is given.\n\n$x + y = 10$\n$2x - y = 5$\n\nWhat is the value of $y$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Add the equations: $3x = 15$, $x = 5$. Then $y = 10 - 5 = 5$.\n\n**The Full Solution:**\n$x + y = 10$\n$2x - y = 5$\nAdd: $3x = 15$, $x = 5$.\n$y = 10 - 5 = 5$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From a subtraction error.\n• Choice C ($7$): From $x = 3$, then $y = 7$.\n• Choice D ($15$): This is $3x$, not $y$.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add to eliminate $y$ — or to find $x$ first, then $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A circular stage has a radius of $10$ feet. What is the area of the stage in square feet?",
          choices: [
            { id: "A", text: "$20\\pi$" },
            { id: "B", text: "$50\\pi$" },
            { id: "C", text: "$100\\pi$" },
            { id: "D", text: "$400\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $A = \\pi r^2 = \\pi(10)^2 = 100\\pi$.\n\n**The Full Solution:**\n$A = \\pi r^2 = \\pi (10)^2 = 100\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20\\pi$): Uses $2\\pi r$ (circumference formula) instead of $\\pi r^2$.\n• Choice B ($50\\pi$): From $\\pi(10)(5)$ or a half-area error.\n• Choice D ($400\\pi$): From using diameter ($20$) instead of radius.\n\n**Test Day Takeaway:** Area of a circle $= \\pi r^2$. Circumference $= 2\\pi r$. Don't mix them up.",
          skills: ["circles", "area"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "An e-commerce site offers a $15\\%$ discount on a $\\$120$ item. What is the sale price in dollars?",
          correctAnswer: "102",
          explanation: "**SAT Pattern: Percent Discount**\n\n**The correct answer is 102.**\n\n**The Fast Way (15 seconds):** Discount $= 0.15 \\times 120 = 18$. Sale price $= 120 - 18 = 102$.\n\nOr: $120 \\times 0.85 = 102$.\n\n**The Full Solution:**\n$15\\%$ of $120 = 0.15 \\times 120 = 18$\nSale price $= 120 - 18 = 102$\n\n**Common Mistakes to Avoid:**\n• Answering $18$ (the discount, not the sale price).\n• Computing $120 \\times 0.15 = 18$ and stopping.\n\n**Verification:** $\\frac{120 - 102}{120} = \\frac{18}{120} = 0.15 = 15\\%$ ✓\n\n**Test Day Takeaway:** Sale price $=$ original $\\times (1 - \\text{discount rate})$.",
          skills: ["percents", "word-problems"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = -4(x + 1)^2 + 16$ has a maximum value. What is this maximum value?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Maximum from Vertex Form**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** In $g(x) = -4(x+1)^2 + 16$, vertex form gives maximum $= k = 16$ (since $a = -4 < 0$).\n\n**The Full Solution:**\n$g(x) = -4(x + 1)^2 + 16$ is in vertex form $a(x-h)^2 + k$.\nVertex: $(-1, 16)$.\nSince $a = -4 < 0$, the parabola opens downward, so the maximum is $y = 16$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-4$): The coefficient $a$, not the maximum.\n• Choice B ($-1$): The $x$-coordinate of the vertex.\n• Choice C ($4$): From $|-4| = 4$.\n\n**Test Day Takeaway:** In vertex form, the max (if $a < 0$) or min (if $a > 0$) is $k$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x - 2} = 4$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\frac{14}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Square both sides: $3x - 2 = 16$. $3x = 18$. $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x - 2} = 4$\n$3x - 2 = 16$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $\\sqrt{3(2) - 2} = \\sqrt{4} = 2 \\neq 4$.\n• Choice B ($4$): Uses the right side directly.\n• Choice D ($\\frac{14}{3}$): From $3x - 2 = 4$ instead of $3x - 2 = 16$ (forgetting to square).\n\n**Verification:** $\\sqrt{3(6) - 2} = \\sqrt{16} = 4$ ✓\n\n**Test Day Takeaway:** Square both sides to remove the radical, then solve the linear equation.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume of the cone, in cubic centimeters, divided by $\\pi$? ($V = \\frac{1}{3}\\pi r^2 h$)",
          correctAnswer: "120",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is 120.**\n\n**The Fast Way (10 seconds):** $V = \\frac{1}{3}\\pi(36)(10) = \\frac{360\\pi}{3} = 120\\pi$. Divided by $\\pi$: $120$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6)^2(10) = \\frac{1}{3}\\pi(360) = 120\\pi$\n$\\frac{V}{\\pi} = 120$\n\n**Common Mistakes to Avoid:**\n• Forgetting $\\frac{1}{3}$: $\\pi(36)(10) = 360\\pi$.\n• Answering $120\\pi$ when the question asks for $V/\\pi$.\n\n**Verification:** $\\frac{1}{3}(36)(10) = \\frac{360}{3} = 120$ ✓\n\n**Test Day Takeaway:** Cone volume $= \\frac{1}{3} \\times$ cylinder volume. Don't forget the $\\frac{1}{3}$.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $m$ does the system below have no solution?\n\n$3x + 4y = 12$\n$9x + my = 15$",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$36$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Solution — Parallel Lines**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** No solution means parallel lines. Multiply the first equation by $3$: $9x + 12y = 36$. Compare with $9x + my = 15$. For parallel lines: $m = 12$ (same left side) but $15 \\neq 36$ (different right side).\n\n**The Full Solution:**\nMultiply first equation by $3$: $9x + 12y = 36$\nSecond equation: $9x + my = 15$\n\nFor no solution: $\\frac{9}{9} = \\frac{m}{12} \\neq \\frac{15}{36}$\n$\\frac{m}{12} = 1$\nWait, let me redo: $\\frac{9}{9} = \\frac{4}{m/3}$... \n\nSimpler: for the lines to be parallel, the ratio of coefficients must be equal: $\\frac{9}{3} = \\frac{m}{4}$, so $3 = \\frac{m}{4}$, $m = 12$.\nCheck constants: $\\frac{15}{12} \\neq 3$, so no solution ✓.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): The original $y$-coefficient.\n• Choice B ($8$): $4 \\times 2$.\n• Choice D ($36$): $12 \\times 3$ or the scaled constant.\n\n**Test Day Takeaway:** No solution: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A restaurant's customer base grows by $5\\%$ each month. If it starts with $400$ customers, which expression models the number of customers after $m$ months?",
          choices: [
            { id: "A", text: "$400 + 5m$" },
            { id: "B", text: "$400(0.05)^m$" },
            { id: "C", text: "$400(1.05)^m$" },
            { id: "D", text: "$400(1.5)^m$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $5\\%$ growth means multiply by $1.05$ each month. Model: $400(1.05)^m$.\n\n**The Full Solution:**\nGrowth rate $= 5\\% = 0.05$\nGrowth factor $= 1 + 0.05 = 1.05$\nModel: $400(1.05)^m$\n\n**Why the wrong answers are tempting:**\n• Choice A ($400 + 5m$): Linear growth, not exponential.\n• Choice B ($400(0.05)^m$): Uses the rate instead of $1 +$ rate. After $1$ month: $400(0.05) = 20$.\n• Choice D ($400(1.5)^m$): Uses $50\\%$ growth instead of $5\\%$.\n\n**Test Day Takeaway:** Growth factor $= 1 +$ rate. The initial value goes in front.",
          skills: ["exponential-functions"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the parabola $y = x^2 + 4x + c$ passes through the point $(2, 10)$. What is the value of $c$?",
          correctAnswer: "-2",
          explanation: "**SAT Pattern: Finding a Parameter from a Known Point**\n\n**The correct answer is -2.**\n\n**The Fast Way (15 seconds):** Plug in $(2, 10)$: $10 = (2)^2 + 4(2) + c = 4 + 8 + c = 12 + c$. So $c = -2$.\n\n**The Full Solution:**\n$y = x^2 + 4x + c$\nSubstitute $(2, 10)$:\n$10 = 4 + 8 + c$\n$10 = 12 + c$\n$c = -2$\n\n**Common Mistakes to Avoid:**\n• Getting $c = 2$ from $10 - 8 = 2$ (forgetting the $x^2$ term).\n• Getting $c = -6$ from $10 - 16 = -6$ (computing $4(2) = 16$ instead of $4 + 8$).\n\n**Verification:** $y = (2)^2 + 4(2) + (-2) = 4 + 8 - 2 = 10$ ✓\n\n**Test Day Takeaway:** Substitute the given point into the equation and solve for the unknown constant.",
          skills: ["quadratic-functions", "solving-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangle $PQR$, $\\angle Q = 90°$, $PQ = 6$, and $QR = 8$. What is $\\cos(R)$?",
          choices: [
            { id: "A", text: "$\\frac{6}{10}$" },
            { id: "B", text: "$\\frac{8}{10}$" },
            { id: "C", text: "$\\frac{6}{8}$" },
            { id: "D", text: "$\\frac{10}{8}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trigonometry (SOH-CAH-TOA)**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Hypotenuse $PR = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. $\\cos(R) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{QR}{PR} = \\frac{8}{10}$.\n\n**The Full Solution:**\n$PR = \\sqrt{PQ^2 + QR^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\nFrom angle $R$:\n- Adjacent side $= QR = 8$\n- Opposite side $= PQ = 6$\n- Hypotenuse $= PR = 10$\n\n$\\cos(R) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{8}{10} = \\frac{4}{5}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{6}{10}$): This is $\\sin(R)$, not $\\cos(R)$.\n• Choice C ($\\frac{6}{8}$): This is $\\tan(R)$ or a ratio without the hypotenuse.\n• Choice D ($\\frac{10}{8}$): This is $\\sec(R)$, the reciprocal of cosine.\n\n**Test Day Takeaway:** CAH: $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$. Identify which sides are adjacent and opposite to the given angle.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest9;
