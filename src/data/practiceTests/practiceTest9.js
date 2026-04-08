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
  question: "A study of 12 students produces the line of best fit $y = 0.8x + 15$, where $x$ is hours of study and $y$ is test score. A student studies 20 hours and scores 28. Is this student's actual score above or below the predicted score, and by how much?",
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
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "A store sells a jacket for \\$72 after a 20% discount. What was the original price of the jacket?",
  choices: [{ id: "A", text: "\\$86.40" }, { id: "B", text: "\\$90" }, { id: "C", text: "\\$92" }, { id: "D", text: "\\$57.60" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Discount**\n\n**Choice B is correct.**\n\n**The Fast Way:** If the jacket is 20% off, you pay 80% of the original. So $72 = 0.80x$, giving $x = 90$.\n\n**The Full Solution:**\nLet $x$ be the original price. A 20% discount means the sale price is $x - 0.20x = 0.80x$. Setting $0.80x = 72$ and dividing both sides by $0.80$ gives $x = 90$.\n\n**Why the wrong answers are tempting:**\n• A: This adds 20% to 72, but the discount was taken off the original, not added to the sale price.\n• C: Arithmetic error from dividing incorrectly.\n• D: This subtracts 20% from 72 instead of working backward.\n\n**Test Day Takeaway:** When finding an original price before a discount, divide the sale price by $(1 - \\text{discount rate})$.",
  skills: ["percents"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "The function $f(x) = 3x - 7$ models the cost, in dollars, of renting a bicycle for $x$ hours. What does the number 3 represent in this context?",
  choices: [{ id: "A", text: "The total cost for 1 hour" }, { id: "B", text: "The cost per hour of renting the bicycle" }, { id: "C", text: "The initial rental fee" }, { id: "D", text: "The number of hours rented" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way:** In $f(x) = 3x - 7$, the coefficient of $x$ is the rate of change — the cost per hour.\n\n**The Full Solution:**\nIn a linear function $f(x) = mx + b$, the slope $m$ represents the rate of change per unit of $x$. Here $m = 3$, so for each additional hour, the cost increases by \\$3. The constant $-7$ would represent a fixed component (like a credit or adjustment), not the hourly rate.\n\n**Why the wrong answers are tempting:**\n• A: The total cost for 1 hour is $f(1) = 3(1) - 7 = -4$, not 3.\n• C: The initial fee would be the constant term, $-7$, not the coefficient of $x$.\n• D: The number of hours is the input $x$, not the coefficient.\n\n**Test Day Takeaway:** The coefficient of the variable in a linear model is always the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "A data set has a mean of 45 and a standard deviation of 6. Which of the following values is more than 2 standard deviations above the mean?",
  choices: [{ id: "A", text: "52" }, { id: "B", text: "56" }, { id: "C", text: "57" }, { id: "D", text: "58" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Standard Deviation Boundaries**\n\n**Choice D is correct.**\n\n**The Fast Way:** Two standard deviations above the mean is $45 + 2(6) = 57$. We need a value strictly greater than 57, which is 58.\n\n**The Full Solution:**\nThe boundary for 2 standard deviations above the mean is $\\mu + 2\\sigma = 45 + 12 = 57$. A value \"more than\" 2 standard deviations above must exceed 57. Only 58 > 57.\n\n**Why the wrong answers are tempting:**\n• A: 52 is just over 1 standard deviation above the mean.\n• B: 56 is less than 2 standard deviations above.\n• C: 57 is exactly 2 standard deviations above, not more than.\n\n**Test Day Takeaway:** \"More than\" means strictly greater than the boundary — read inequality language carefully.",
  skills: ["statistics"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "If $\\frac{x}{4} = \\frac{3}{8}$, what is the value of $2x$?",
  choices: [{ id: "A", text: "$\\frac{3}{2}$" }, { id: "B", text: "3" }, { id: "C", text: "$\\frac{3}{4}$" }, { id: "D", text: "6" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way:** Cross-multiply: $8x = 12$, so $x = \\frac{3}{2}$. Then $2x = 3$.\n\n**The Full Solution:**\nFrom $\\frac{x}{4} = \\frac{3}{8}$, multiply both sides by 4: $x = \\frac{12}{8} = \\frac{3}{2}$. Therefore $2x = 2 \\cdot \\frac{3}{2} = 3$.\n\n**Why the wrong answers are tempting:**\n• A: This is $x$, not $2x$.\n• C: This comes from dividing instead of multiplying.\n• D: This doubles the wrong intermediate value.\n\n**Test Day Takeaway:** Always check what the question asks for — here it's $2x$, not $x$.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "In a right triangle, one leg has length 5 and the hypotenuse has length 13. What is the length of the other leg?",
  choices: [{ id: "A", text: "8" }, { id: "B", text: "10" }, { id: "C", text: "12" }, { id: "D", text: "$\\sqrt{194}$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way:** Recognize the 5-12-13 Pythagorean triple.\n\n**The Full Solution:**\nUsing $a^2 + b^2 = c^2$: $5^2 + b^2 = 13^2$, so $25 + b^2 = 169$, giving $b^2 = 144$ and $b = 12$.\n\n**Why the wrong answers are tempting:**\n• A: This is $13 - 5$, subtracting instead of using the Pythagorean theorem.\n• B: A common guess between 8 and 12.\n• D: This adds the squares ($25 + 169 = 194$) instead of subtracting.\n\n**Test Day Takeaway:** Memorize common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.",
  skills: ["triangles"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "A biologist models a bacteria population with $P(t) = 800 \\cdot 2^{t/3}$, where $t$ is measured in hours. By what percent does the population increase every 3 hours?",
  choices: [{ id: "A", text: "50%" }, { id: "B", text: "100%" }, { id: "C", text: "200%" }, { id: "D", text: "300%" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice B is correct.**\n\n**The Fast Way:** When $t$ increases by 3, the exponent increases by 1, so the population is multiplied by $2^1 = 2$. Going from $P$ to $2P$ is a 100% increase.\n\n**The Full Solution:**\nCompare $P(t+3)$ to $P(t)$:\n$\\frac{P(t+3)}{P(t)} = \\frac{800 \\cdot 2^{(t+3)/3}}{800 \\cdot 2^{t/3}} = 2^{3/3} = 2$.\nThe population doubles every 3 hours. A doubling is a 100% increase (the new amount minus the old, divided by the old: $\\frac{2P - P}{P} = 1 = 100\\%$).\n\n**Why the wrong answers are tempting:**\n• A: Confuses doubling with a 50% increase.\n• C: This treats the multiplier 2 as a 200% increase, but 200% increase means tripling.\n• D: Misapplies the growth factor.\n\n**Test Day Takeaway:** A growth factor of $k$ means a $(k-1) \\times 100\\%$ increase, not $k \\times 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "A survey of 200 students asked about their preferred study method. Of the 120 students who preferred group study, 78 were upperclassmen. Of the 80 students who preferred solo study, 32 were upperclassmen. What fraction of upperclassmen preferred solo study?",
  choices: [{ id: "A", text: "$\\frac{32}{80}$" }, { id: "B", text: "$\\frac{32}{110}$" }, { id: "C", text: "$\\frac{32}{200}$" }, { id: "D", text: "$\\frac{78}{110}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way:** Total upperclassmen = $78 + 32 = 110$. Of these, 32 preferred solo study: $\\frac{32}{110}$.\n\n**The Full Solution:**\nThe question asks for the fraction of upperclassmen (not all students) who preferred solo study. First find the total number of upperclassmen: $78 + 32 = 110$. The fraction who preferred solo study is $\\frac{32}{110}$.\n\n**Why the wrong answers are tempting:**\n• A: This divides by all solo-study students (80), not all upperclassmen.\n• C: This divides by all students (200).\n• D: This gives the fraction of upperclassmen who preferred group study.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the given condition (here, \"of upperclassmen\").",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "Line $p$ passes through the points $(2, 5)$ and $(6, 17)$. Line $q$ is parallel to line $p$ and passes through the point $(0, -4)$. What is the $y$-coordinate of the point on line $q$ where $x = 10$?",
  correctAnswer: "26",
  explanation: "**SAT Pattern: Parallel Lines Same Slope**\n\n**The correct answer is 26.**\n\n**The Fast Way:** Slope of $p$: $\\frac{17-5}{6-2} = 3$. Line $q$: $y = 3x - 4$. At $x = 10$: $y = 30 - 4 = 26$.\n\n**The Full Solution:**\nThe slope of line $p$ is $m = \\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$. Since line $q$ is parallel, it also has slope 3. Using the point $(0, -4)$, line $q$ is $y = 3x - 4$. Substituting $x = 10$: $y = 3(10) - 4 = 26$.\n\n**Test Day Takeaway:** Parallel lines share the same slope. Once you have the slope and a point, write the equation and plug in.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "The expression $\\frac{12x^5 y^3}{4x^2 y^7}$ is equivalent to which of the following?",
  choices: [{ id: "A", text: "$\\frac{3x^7}{y^{10}}$" }, { id: "B", text: "$\\frac{3x^3}{y^4}$" }, { id: "C", text: "$3x^3 y^4$" }, { id: "D", text: "$\\frac{3x^{\\frac{5}{2}}}{y^{\\frac{7}{3}}}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules for Division**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\frac{12}{4} = 3$, $x^{5-2} = x^3$, $y^{3-7} = y^{-4} = \\frac{1}{y^4}$. Result: $\\frac{3x^3}{y^4}$.\n\n**The Full Solution:**\nWhen dividing like bases, subtract exponents: $\\frac{12x^5 y^3}{4x^2 y^7} = \\frac{12}{4} \\cdot x^{5-2} \\cdot y^{3-7} = 3x^3 y^{-4} = \\frac{3x^3}{y^4}$.\n\n**Why the wrong answers are tempting:**\n• A: Adds exponents instead of subtracting.\n• C: Flips the sign on the $y$ exponent.\n• D: Divides exponents instead of subtracting.\n\n**Test Day Takeaway:** When dividing powers with the same base, subtract the exponents. The SAT typically expects positive exponents in the answer.",
  skills: ["exponent-rules"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y + 5)^2 = 49$. What is the area of the circle?",
  choices: [{ id: "A", text: "$7\\pi$" }, { id: "B", text: "$14\\pi$" }, { id: "C", text: "$49\\pi$" }, { id: "D", text: "$2401\\pi$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice C is correct.**\n\n**The Fast Way:** From the equation, $r^2 = 49$, so area $= \\pi r^2 = 49\\pi$.\n\n**The Full Solution:**\nThe standard form $(x-h)^2 + (y-k)^2 = r^2$ gives $r^2 = 49$, so $r = 7$. The area of a circle is $\\pi r^2 = \\pi(49) = 49\\pi$.\n\n**Why the wrong answers are tempting:**\n• A: Confuses area with $r\\pi$ (uses the radius multiplied by $\\pi$).\n• B: Uses the diameter ($2r = 14$) times $\\pi$.\n• D: Squares $r^2$ again to get $49^2 = 2401$.\n\n**Test Day Takeaway:** In the circle equation, the right side is already $r^2$. Don't square it again when finding area.",
  skills: ["circle-equations", "area"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "If $2(3x - 4) + 5 = 7x - 1$, what is the value of $x$?",
  correctAnswer: "-2",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is -2.**\n\n**The Fast Way:** Expand: $6x - 8 + 5 = 7x - 1$, so $6x - 3 = 7x - 1$. Subtract $6x$: $-3 = x - 1$. Add 1: $x = -2$.\n\n**The Full Solution:**\n$2(3x - 4) + 5 = 7x - 1$\n$6x - 8 + 5 = 7x - 1$\n$6x - 3 = 7x - 1$\n$-3 + 1 = 7x - 6x$\n$-2 = x$\n\n**Test Day Takeaway:** Distribute first, combine like terms, then isolate the variable.",
  skills: ["solving-equations"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "A researcher surveys a random sample of 500 voters in a city and finds that 58% support a new policy, with a margin of error of 4 percentage points at a 95% confidence level. Which of the following is the best interpretation?",
  choices: [{ id: "A", text: "Exactly 58% of all voters in the city support the policy." }, { id: "B", text: "Between 54% and 62% of the sample support the policy." }, { id: "C", text: "It is plausible that between 54% and 62% of all voters in the city support the policy." }, { id: "D", text: "If the survey were repeated, 95% of respondents would say they support the policy." }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way:** The margin of error creates a confidence interval for the population parameter: $58\\% \\pm 4\\%$ = between 54% and 62%. This applies to the whole population, not just the sample.\n\n**The Full Solution:**\nA margin of error of 4% at 95% confidence means we are 95% confident that the true population proportion falls between $58\\% - 4\\% = 54\\%$ and $58\\% + 4\\% = 62\\%$. The interval estimates the population value, not the sample value.\n\n**Why the wrong answers are tempting:**\n• A: A sample statistic estimates but doesn't determine the exact population value.\n• B: We already know the sample result; the margin of error applies to the population.\n• D: The 95% refers to confidence in the interval, not the percentage of supporters.\n\n**Test Day Takeaway:** Margin of error gives an interval for the population parameter, not the sample statistic.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "A quadratic function has vertex $(4, -3)$ and passes through the point $(6, 5)$. Which of the following is the equation of this function?",
  choices: [{ id: "A", text: "$f(x) = 2(x - 4)^2 - 3$" }, { id: "B", text: "$f(x) = (x - 4)^2 - 3$" }, { id: "C", text: "$f(x) = 2(x + 4)^2 - 3$" }, { id: "D", text: "$f(x) = -2(x - 4)^2 - 3$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form with Parameter Finding**\n\n**Choice A is correct.**\n\n**The Fast Way:** Vertex form: $f(x) = a(x-4)^2 - 3$. Plug in $(6,5)$: $5 = a(4) - 3$, so $a = 2$.\n\n**The Full Solution:**\nVertex form is $f(x) = a(x-h)^2 + k$ with vertex $(h,k) = (4,-3)$:\n$f(x) = a(x-4)^2 - 3$.\nSubstitute the point $(6, 5)$:\n$5 = a(6-4)^2 - 3 = 4a - 3$\n$8 = 4a$\n$a = 2$\nSo $f(x) = 2(x-4)^2 - 3$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $a = 1$, which gives $f(6) = 4 - 3 = 1 \neq 5$.\n• C: Wrong sign on the $h$ value.\n• D: Negative $a$ would open downward, giving $f(6) = -8 - 3 = -11$.\n\n**Test Day Takeaway:** Vertex form + one extra point lets you solve for the leading coefficient $a$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 14, type: "fill-in", difficulty: "medium",
  question: "In a bag, the ratio of red marbles to blue marbles is $5:3$. If there are 40 marbles in the bag total and all marbles are either red or blue, how many red marbles are there?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Ratio to Actual Count**\n\n**The correct answer is 25.**\n\n**The Fast Way:** Total parts = $5 + 3 = 8$. Each part = $40 \\div 8 = 5$. Red marbles = $5 \\times 5 = 25$.\n\n**The Full Solution:**\nThe ratio $5:3$ means for every 8 marbles, 5 are red and 3 are blue. With 40 total marbles: $\\frac{5}{8} \\times 40 = 25$ red marbles.\n\n**Test Day Takeaway:** Add ratio parts to get the total ratio, then scale to the actual total.",
  skills: ["ratios"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The equation $-2x^2 + bx - 50 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [{ id: "A", text: "19" }, { id: "B", text: "20" }, { id: "C", text: "21" }, { id: "D", text: "14" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant for No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** No real solutions when $b^2 - 4ac < 0$. Here $a = -2$, $c = -50$: $b^2 - 4(-2)(-50) < 0$, so $b^2 < 400$, meaning $-20 < b < 20$. Greatest integer: 19.\n\n**The Full Solution:**\nFor $-2x^2 + bx - 50 = 0$, the discriminant is:\n$\\Delta = b^2 - 4(-2)(-50) = b^2 - 400$\nFor no real solutions: $\\Delta < 0$\n$b^2 - 400 < 0$\n$b^2 < 400$\n$|b| < 20$\n$-20 < b < 20$\nThe greatest integer value of $b$ is 19.\n\n**Why the wrong answers are tempting:**\n• B: At $b = 20$, $\\Delta = 0$, so there's exactly one real solution, not none.\n• C: At $b = 21$, $\\Delta = 41 > 0$, so there are two real solutions.\n• D: This is valid but not the greatest.\n\n**Test Day Takeaway:** For \"no real solutions,\" set the discriminant strictly less than zero and find the boundary.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A savings account earns interest so that the balance is modeled by $B(t) = 2400\\left(1.005\\right)^{12t}$, where $t$ is the number of years. Which of the following is closest to the annual interest rate?",
  choices: [{ id: "A", text: "0.5%" }, { id: "B", text: "5%" }, { id: "C", text: "6%" }, { id: "D", text: "6.17%" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest — Effective Annual Rate**\n\n**Choice D is correct.**\n\n**The Fast Way:** The monthly rate is 0.5%. The annual multiplier is $(1.005)^{12} \\approx 1.0617$, so the annual rate is about 6.17%.\n\n**The Full Solution:**\nThe model $B(t) = 2400(1.005)^{12t}$ can be rewritten as $B(t) = 2400\\left((1.005)^{12}\\right)^t$. Computing $(1.005)^{12}$:\n$(1.005)^{12} \\approx 1.06168$\nSo the effective annual growth factor is about 1.0617, which means an annual rate of approximately 6.17%.\n\n**Why the wrong answers are tempting:**\n• A: This is the monthly rate, not the annual rate.\n• B: This is $0.5\\% \\times 10$, an incorrect scaling.\n• C: This is $0.5\\% \\times 12 = 6\\%$, the nominal rate, not the effective annual rate.\n\n**Test Day Takeaway:** To find the effective annual rate from a monthly compounding model, raise the monthly factor to the 12th power.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 17, type: "multiple-choice", difficulty: "hard",
  question: "Two similar triangles have a ratio of corresponding sides of $3:5$. If the area of the smaller triangle is 27 square centimeters, what is the area of the larger triangle, in square centimeters?",
  choices: [{ id: "A", text: "45" }, { id: "B", text: "75" }, { id: "C", text: "135" }, { id: "D", text: "225" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way:** Area ratio = (side ratio)$^2$ = $(\\frac{5}{3})^2 = \\frac{25}{9}$. Larger area = $27 \\times \\frac{25}{9} = 75$.\n\n**The Full Solution:**\nFor similar figures, if the ratio of corresponding sides is $k$, the ratio of areas is $k^2$. The side ratio (larger to smaller) is $\\frac{5}{3}$, so the area ratio is $\\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.\nArea of larger triangle = $27 \\times \\frac{25}{9} = 3 \\times 25 = 75$ square centimeters.\n\n**Why the wrong answers are tempting:**\n• A: This uses the linear ratio ($27 \\times \\frac{5}{3} = 45$) instead of squaring it.\n• C: This uses $27 \\times 5 = 135$.\n• D: This squares the entire ratio incorrectly.\n\n**Test Day Takeaway:** Side ratio $k$ gives area ratio $k^2$ and volume ratio $k^3$.",
  skills: ["similar-triangles", "area"]
},
{
  id: 18, type: "fill-in", difficulty: "hard",
  question: "If $x + 2y + z = 13$, $2x - y + 3z = 9$, and $3x + y + 2z = 16$, what is the value of $x + y + z$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: System of Three Equations**\n\n**The correct answer is 9.**\n\n**The Fast Way:** Add Eq1 and Eq2: $3x + y + 4z = 22$. Subtract Eq3: $2z = 6$, so $z = 3$. Then back-substitute.\n\n**The Full Solution:**\nAdd Eq1 and Eq2: $(x+2y+z) + (2x-y+3z) = 13 + 9$, giving $3x + y + 4z = 22$.\nSubtract Eq3: $(3x+y+4z) - (3x+y+2z) = 22 - 16$, giving $2z = 6$, so $z = 3$.\n\nSubstitute $z = 3$ into Eq2: $2x - y + 9 = 9$, so $y = 2x$.\nSubstitute into Eq1: $x + 2(2x) + 3 = 13$, so $5x = 10$ and $x = 2$.\nThen $y = 4$ and $z = 3$.\n\n$x + y + z = 2 + 4 + 3 = 9$.\n\n**Test Day Takeaway:** For 3-variable systems, add or subtract pairs of equations to eliminate variables. Look for combinations that simplify cleanly.",
  skills: ["systems-of-equations"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "The following data set shows a class of 10 students' quiz scores: $5, 6, 6, 7, 7, 7, 8, 8, 9, 10$. If a score of 2 is added to the data set, which of the following statements is true?",
  choices: [{ id: "A", text: "The median decreases by 1 and the range increases by 3." }, { id: "B", text: "The median decreases by 0.5 and the range increases by 3." }, { id: "C", text: "The median stays the same and the range increases by 3." }, { id: "D", text: "The median decreases by 0.5 and the range increases by 5." }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Effect of Adding an Outlier on Statistics**\n\n**Choice C is correct.**\n\n**The Fast Way:** Original: 10 values, median = average of 5th and 6th = $\\frac{7+7}{2} = 7$, range = $10 - 5 = 5$. New: 11 values $\\{2, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10\\}$, median = 6th value = 7, range = $10 - 2 = 8$. Median unchanged, range increased by 3.\n\n**The Full Solution:**\nOriginal data (sorted): $5, 6, 6, 7, 7, 7, 8, 8, 9, 10$.\nMedian (10 values) = $\\frac{7+7}{2} = 7$. Range = $10 - 5 = 5$.\n\nNew data (sorted): $2, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10$.\nMedian (11 values) = 6th value = 7. Range = $10 - 2 = 8$.\n\nMedian change: $7 - 7 = 0$ (unchanged).\nRange change: $8 - 5 = 3$ (increased by 3).\n\n**Why the wrong answers are tempting:**\n• A: The median doesn't decrease because the added value shifts the position but the middle value is still 7.\n• B: This assumes the median always shifts when a value is added.\n• D: The range increases by 3 ($10-2=8$ vs. $10-5=5$), not by 5.\n\n**Test Day Takeaway:** Adding a low outlier extends the range but may not change the median if the middle values are unaffected.",
  skills: ["statistics"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "For the equation $\\sqrt{5x + 11} = x + 1$, what is the sum of all real solutions?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Radical Equation with Extraneous Solutions**\n\n**The correct answer is 5.**\n\n**The Fast Way:** Square both sides: $5x + 11 = x^2 + 2x + 1$, so $x^2 - 3x - 10 = 0$, giving $(x-5)(x+2) = 0$.\n\n**The Full Solution:**\nSquare both sides (requiring $x + 1 \\geq 0$, i.e., $x \\geq -1$):\n$5x + 11 = (x+1)^2 = x^2 + 2x + 1$\n$0 = x^2 - 3x - 10 = (x-5)(x+2)$\n$x = 5$ or $x = -2$\n\nCheck $x = 5$: $\\sqrt{25 + 11} = \\sqrt{36} = 6$ and $5 + 1 = 6$ ✓\nCheck $x = -2$: $x + 1 = -1 < 0$, but $\\sqrt{1} = 1 \neq -1$ ✗\n\nOnly $x = 5$ is valid. The sum of all real solutions is 5.\n\n**Test Day Takeaway:** Always check solutions to radical equations — squaring can introduce extraneous roots.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "A rectangular prism has dimensions $4 \\times 6 \\times 10$. A second rectangular prism has dimensions that are each 50% greater than the corresponding dimensions of the first. What is the ratio of the volume of the first prism to the volume of the second prism?",
  choices: [{ id: "A", text: "$\\frac{2}{3}$" }, { id: "B", text: "$\\frac{4}{9}$" }, { id: "C", text: "$\\frac{8}{27}$" }, { id: "D", text: "$\\frac{1}{2}$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: 3D Scaling — Volume Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way:** Each dimension is scaled by $1.5 = \\frac{3}{2}$. Volume scales by $\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$. Ratio of first to second: $\\frac{8}{27}$.\n\n**The Full Solution:**\nFirst prism: $V_1 = 4 \\times 6 \\times 10 = 240$.\nSecond prism dimensions: $4(1.5) \\times 6(1.5) \\times 10(1.5) = 6 \\times 9 \\times 15 = 810$.\nRatio: $\\frac{240}{810} = \\frac{8}{27}$.\n\nAlternatively, since all dimensions scale by $\\frac{3}{2}$, the volume ratio is $\\frac{1}{(3/2)^3} = \\frac{1}{27/8} = \\frac{8}{27}$.\n\n**Why the wrong answers are tempting:**\n• A: This is the linear ratio $\\frac{2}{3}$, not cubed.\n• B: This is the squared ratio $\\left(\\frac{2}{3}\\right)^2$, for area not volume.\n• D: Assumes doubling instead of 50% increase.\n\n**Test Day Takeaway:** When all dimensions scale by factor $k$: length ratio = $k$, area ratio = $k^2$, volume ratio = $k^3$.",
  skills: ["volume", "ratios"]
},
{
  id: 22, type: "multiple-choice", difficulty: "hard",
  question: "In triangle $ABC$, angle $C$ is a right angle, $BC = 7$, and $\\sin A = \\frac{7}{25}$. What is the perimeter of triangle $ABC$?",
  choices: [{ id: "A", text: "40" }, { id: "B", text: "56" }, { id: "C", text: "49" }, { id: "D", text: "32" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trig — Finding Sides**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{BC}{AB} = \\frac{7}{25}$. So $AB = 25$. Then $AC = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$. Perimeter = $7 + 24 + 25 = 56$.\n\n**The Full Solution:**\nIn right triangle $ABC$ with right angle at $C$:\n$\\sin A = \\frac{\\text{opposite to } A}{\\text{hypotenuse}} = \\frac{BC}{AB} = \\frac{7}{AB}$\nGiven $\\sin A = \\frac{7}{25}$, we get $AB = 25$.\nUsing the Pythagorean theorem: $AC = \\sqrt{AB^2 - BC^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$.\nPerimeter = $BC + AC + AB = 7 + 24 + 25 = 56$.\n\n**Why the wrong answers are tempting:**\n• A: Uses an incorrect leg length.\n• C: Computes $7 \\times 7 = 49$, conflating area concepts.\n• D: Uses a wrong Pythagorean calculation.\n\n**Test Day Takeaway:** Recognize the 7-24-25 Pythagorean triple. $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$.",
  skills: ["trigonometry", "triangles"]
}
      ]
    }
  ]
};

export default practiceTest9;
