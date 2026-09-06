// Practice questions for Triangles module
// Questions are organized by SECTION (question type)

export const trianglesQuestions = {
  // Section: Triangle Fundamentals
  "Triangle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "In triangle $JKL$, the measures of angles $J$, $K$, and $L$ are $x°$, $y°$, and $z°$, respectively. What is the value of $x + y + z$?",
      choices: [
        // distractor: the measure of a single right angle, not the total of all three angles
        { id: "A", text: "$90$" },
        { id: "B", text: "$180$" },
        // distractor: adds an extra $90$ to the correct total, as if a right angle were counted separately
        { id: "C", text: "$270$" },
        // distractor: the interior-angle sum of a quadrilateral, not of a triangle
        { id: "D", text: "$360$" }
      ],
      correctAnswer: "B",
      hint: "Draw any triangle you like and add its three angle measures — the total never changes.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The interior angles of any triangle add to $180°$, so $x + y + z = 180$.\n\n**The Full Solution:**\nStep 1: The Triangle Angle Sum Theorem states that the three interior angles of every triangle have measures totaling $180°$.\nStep 2: Here those measures are $x°$, $y°$, and $z°$, so $x° + y° + z° = 180°$.\nStep 3: Reading off the numerical values gives $x + y + z = 180$.\n\nVerification: An equilateral triangle has angles $60°$, $60°$, and $60°$, and $60 + 60 + 60 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($90$): the measure of a single right angle, not the total of all three angles.\n* Choice C ($270$): adds an extra $90$ to the correct total, as if a right angle were counted separately.\n* Choice D ($360$): the interior-angle sum of a quadrilateral, not of a triangle.\n\n**Test Day Takeaway:** Every triangle carries exactly $180°$ of interior angle and every quadrilateral carries $360°$. Fixing those two numbers turns most angle questions into one subtraction.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The side lengths of a triangle are $11$, $11$, and $17$. Which of the following best describes this triangle?",
      choices: [
        // distractor: requires all three side lengths to be equal, but $17 \neq 11$
        { id: "A", text: "Equilateral" },
        { id: "B", text: "Isosceles" },
        // distractor: would require $11^2 + 11^2 = 17^2$, and $242 \neq 289$
        { id: "C", text: "Right" },
        // distractor: requires no two sides to be equal, but two sides here measure $11$
        { id: "D", text: "Scalene" }
      ],
      correctAnswer: "B",
      hint: "Count how many of the three lengths are equal to each other.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Exactly two of the three side lengths are equal, so the triangle is isosceles.\n\n**The Full Solution:**\nStep 1: Classify by sides: equilateral means all three lengths equal, isosceles means exactly two equal, and scalene means no two equal.\nStep 2: Compare the given lengths: $11 = 11$, while $11 \\neq 17$.\nStep 3: Exactly two sides match, so the triangle is isosceles.\n\nVerification: The two equal sides force two equal angles, which is exactly what an isosceles triangle has. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Equilateral): requires all three side lengths to be equal, but $17 \\neq 11$.\n* Choice C (Right): would require $11^2 + 11^2 = 17^2$, and $242 \\neq 289$.\n* Choice D (Scalene): requires no two sides to be equal, but two sides here measure $11$.\n\n**Test Day Takeaway:** Classify by counting how many side lengths match — three, two, or none — before testing anything else.",
      skills: ["triangle-types"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In isosceles triangle $PQR$, $PQ = PR$ and the measure of angle $P$ is $34°$. What is the measure, in degrees, of angle $Q$?",
      choices: [
        // distractor: copies the given vertex angle instead of finding a base angle
        { id: "A", text: "$34$" },
        { id: "B", text: "$73$" },
        // distractor: treats $34°$ as one of the two equal base angles and reports $180 - 34 - 34$
        { id: "C", text: "$112$" },
        // distractor: subtracts $34$ from $180$ but never splits the remainder between the two equal angles
        { id: "D", text: "$146$" }
      ],
      correctAnswer: "B",
      hint: "Equal sides sit opposite equal angles — decide which two angles must match here.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Angles $Q$ and $R$ are equal, so each measures $\\frac{180 - 34}{2} = 73$.\n\n**The Full Solution:**\nStep 1: Because $PQ = PR$, the angles opposite those sides — angles $R$ and $Q$ — have equal measure.\nStep 2: The three angles total $180°$: $34 + m\\angle Q + m\\angle R = 180$, so $m\\angle Q + m\\angle R = 146$.\nStep 3: The two are equal, so $m\\angle Q = \\frac{146}{2} = 73$.\n\nVerification: $34 + 73 + 73 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($34$): copies the given vertex angle instead of finding a base angle.\n* Choice C ($112$): treats $34°$ as one of the two equal base angles and reports $180 - 34 - 34$.\n* Choice D ($146$): subtracts $34$ from $180$ but never splits the remainder between the two equal angles.\n\n**Test Day Takeaway:** In an isosceles triangle the equal angles sit opposite the equal sides: subtract the vertex angle from $180$, then halve.",
      skills: ["triangle-angle-sum", "triangle-types"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Two sides of a triangle have lengths $8$ and $15$. Which of the following could be the length of the third side?",
      choices: [
        // distractor: $5 + 8 = 13$, which is less than $15$, so the three lengths cannot close into a triangle
        { id: "A", text: "$5$" },
        // distractor: equals the difference $15 - 8$, which flattens the triangle into a segment
        { id: "B", text: "$7$" },
        { id: "C", text: "$12$" },
        // distractor: equals the sum $15 + 8$, which also flattens the triangle into a segment
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "C",
      hint: "Compare each choice to the sum and to the difference of the two lengths you were given.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The third side must lie strictly between $15 - 8 = 7$ and $15 + 8 = 23$, and only $12$ does.\n\n**The Full Solution:**\nStep 1: The Triangle Inequality requires the sum of any two side lengths to be greater than the third.\nStep 2: Let $x$ be the third length. Then $x + 8 > 15$ gives $x > 7$, and $8 + 15 > x$ gives $x < 23$.\nStep 3: So $7 < x < 23$, and among the choices only $12$ satisfies this.\n\nVerification: $8 + 12 = 20 > 15$, $8 + 15 = 23 > 12$, and $12 + 15 = 27 > 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): $5 + 8 = 13$, which is less than $15$, so the three lengths cannot close into a triangle.\n* Choice B ($7$): equals the difference $15 - 8$, which flattens the triangle into a segment.\n* Choice D ($23$): equals the sum $15 + 8$, which also flattens the triangle into a segment.\n\n**Test Day Takeaway:** A third side always lands strictly between the difference and the sum of the other two — both endpoints are excluded.",
      skills: ["triangle-inequality"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $ABC$, $AB = AC$ and the measure of angle $A$ is $x°$. If triangle $ABC$ is an obtuse triangle, which of the following gives all possible values of $x$?",
      choices: [
        // distractor: describes the vertex angles for which angle $A$ is the smallest angle, not the obtuse cases
        { id: "A", text: "$0 < x < 60$" },
        // distractor: the range that keeps angle $A$ acute, which leaves the triangle acute rather than obtuse
        { id: "B", text: "$0 < x < 90$" },
        // distractor: makes angle $A$ the largest angle but still less than $90°$, so no angle is obtuse
        { id: "C", text: "$60 < x < 90$" },
        { id: "D", text: "$90 < x < 180$" }
      ],
      correctAnswer: "D",
      hint: "Only one angle in a triangle can be larger than $90°$ — decide which one it has to be here.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~45s):** The two base angles are equal, so only the vertex angle can exceed $90°$: $90 < x < 180$.\n\n**The Full Solution:**\nStep 1: Since $AB = AC$, angles $B$ and $C$ are equal; call each $y°$, so $x + 2y = 180$.\nStep 2: If a base angle were obtuse then $y > 90$, so $2y > 180$, which is impossible. The obtuse angle must therefore be angle $A$.\nStep 3: Angle $A$ is obtuse exactly when $x > 90$, and $x < 180$ is needed to leave positive base angles, so $90 < x < 180$.\n\nVerification: $x = 100$ leaves base angles of $40°$ each and an obtuse triangle, while $x = 80$ leaves base angles of $50°$ and an acute triangle. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0 < x < 60$): describes the vertex angles for which angle $A$ is the smallest angle, not the obtuse cases.\n* Choice B ($0 < x < 90$): the range that keeps angle $A$ acute, which leaves the triangle acute rather than obtuse.\n* Choice C ($60 < x < 90$): makes angle $A$ the largest angle but still less than $90°$, so no angle is obtuse.\n\n**Test Day Takeaway:** A triangle has at most one non-acute angle. In an isosceles triangle that angle can only be the one between the two equal sides.",
      skills: ["triangle-types"]
    }
  ],

  // Section: Angles of a Triangle
  "Angles of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "In triangle $GHJ$ shown, the measure of angle $G$ is $28°$ and the measure of angle $H$ is $96°$. What is the measure, in degrees, of angle $J$?",
      diagram: { type: "triangleWithAngles", params: { vertexLabels: ["G", "H", "J"], angleLabels: ["28°", "96°", ""], figureNote: true } },
      choices: [
        { id: "A", text: "$56$" },
        // distractor: subtracts only angle $H$ from $180$, ignoring angle $G$
        { id: "B", text: "$84$" },
        // distractor: adds the two given measures instead of subtracting their sum from $180$
        { id: "C", text: "$124$" },
        // distractor: subtracts only angle $G$ from $180$, ignoring angle $H$
        { id: "D", text: "$152$" }
      ],
      correctAnswer: "A",
      hint: "Combine the two angles you already know before going anywhere near $180$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $m\\angle J = 180 - 28 - 96 = 56$.\n\n**The Full Solution:**\nStep 1: The interior angles of triangle $GHJ$ satisfy $m\\angle G + m\\angle H + m\\angle J = 180$.\nStep 2: Substitute the given measures: $28 + 96 + m\\angle J = 180$, so $124 + m\\angle J = 180$.\nStep 3: Subtract $124$ from both sides: $m\\angle J = 56$.\n\nVerification: $28 + 96 + 56 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($84$): subtracts only angle $H$ from $180$, ignoring angle $G$.\n* Choice C ($124$): adds the two given measures instead of subtracting their sum from $180$.\n* Choice D ($152$): subtracts only angle $G$ from $180$, ignoring angle $H$.\n\n**Test Day Takeaway:** Add the two known angles once, then subtract that single sum from $180$.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "An exterior angle at vertex $C$ of triangle $ABC$ has a measure of $142°$. What is the sum, in degrees, of the measures of angles $A$ and $B$?",
      choices: [
        // distractor: gives the interior angle at $C$, the supplement, rather than the sum of the other two angles
        { id: "A", text: "$38$" },
        // distractor: halves the exterior angle, assuming angles $A$ and $B$ are equal
        { id: "B", text: "$71$" },
        { id: "C", text: "$142$" },
        // distractor: subtracts the exterior angle from $360$ instead of using the exterior angle relationship
        { id: "D", text: "$218$" }
      ],
      correctAnswer: "C",
      hint: "Find the interior angle at $C$ first, then use the $180°$ total.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** An exterior angle equals the sum of the two remote interior angles, so $m\\angle A + m\\angle B = 142$.\n\n**The Full Solution:**\nStep 1: The interior angle at $C$ is the supplement of the exterior angle: $180 - 142 = 38$.\nStep 2: The three interior angles total $180$: $m\\angle A + m\\angle B + 38 = 180$.\nStep 3: So $m\\angle A + m\\angle B = 142$, the measure of the exterior angle itself.\n\nVerification: $142 + 38 = 180$, so the exterior and interior angles at $C$ are supplementary. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($38$): gives the interior angle at $C$, the supplement, rather than the sum of the other two angles.\n* Choice B ($71$): halves the exterior angle, assuming angles $A$ and $B$ are equal.\n* Choice D ($218$): subtracts the exterior angle from $360$ instead of using the exterior angle relationship.\n\n**Test Day Takeaway:** An exterior angle of a triangle equals the sum of the two interior angles it does not touch.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In right triangle $LMN$, angle $M$ is a right angle and the measure of angle $L$ is $5$ times the measure of angle $N$. What is the measure, in degrees, of angle $L$?",
      choices: [
        // distractor: gives angle $N$, the smaller of the two acute angles
        { id: "A", text: "$15$" },
        // distractor: splits $180$ instead of $90$ into six equal parts and reports the smaller angle
        { id: "B", text: "$30$" },
        { id: "C", text: "$75$" },
        // distractor: splits $180$ instead of $90$ and reports the larger angle
        { id: "D", text: "$150$" }
      ],
      correctAnswer: "C",
      hint: "The right angle already uses up half of the $180°$ total.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The two acute angles total $90°$, so $6n = 90$, $n = 15$, and angle $L$ is $5(15) = 75$.\n\n**The Full Solution:**\nStep 1: The angles total $180°$ and angle $M$ is $90°$, so $m\\angle L + m\\angle N = 90$.\nStep 2: Let $m\\angle N = n$. Then $m\\angle L = 5n$, and $5n + n = 90$ gives $6n = 90$, so $n = 15$.\nStep 3: Therefore $m\\angle L = 5(15) = 75$.\n\nVerification: $75 + 15 + 90 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): gives angle $N$, the smaller of the two acute angles.\n* Choice B ($30$): splits $180$ instead of $90$ into six equal parts and reports the smaller angle.\n* Choice D ($150$): splits $180$ instead of $90$ and reports the larger angle.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary, so set the equation up on $90$, not on $180$.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In triangle $ABC$, the measure of angle $A$ is $47°$ and the measure of angle $B$ is $43°$. Which of the following must be true?",
      choices: [
        { id: "A", text: "Triangle $ABC$ is a right triangle." },
        // distractor: classifies from the two given acute angles alone and never computes angle $C$
        { id: "B", text: "Triangle $ABC$ is an acute triangle." },
        // distractor: follows from a slip such as $47 + 43 = 80$, which would leave $100°$ for angle $C$
        { id: "C", text: "Triangle $ABC$ is an obtuse triangle." },
        // distractor: angle $C$ measures $90°$, making it the largest angle rather than the smallest
        { id: "D", text: "Angle $C$ is the smallest angle of triangle $ABC$." }
      ],
      correctAnswer: "A",
      hint: "Two angles are given; find the third before deciding what kind of triangle this is.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** $47 + 43 = 90$, so angle $C$ measures $180 - 90 = 90°$ and the triangle is right.\n\n**The Full Solution:**\nStep 1: The interior angles satisfy $47 + 43 + m\\angle C = 180$.\nStep 2: Combine the known measures: $90 + m\\angle C = 180$, so $m\\angle C = 90$.\nStep 3: A triangle containing a $90°$ angle is a right triangle.\n\nVerification: $47 + 43 + 90 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Triangle $ABC$ is an acute triangle.): classifies from the two given acute angles alone and never computes angle $C$.\n* Choice C (Triangle $ABC$ is an obtuse triangle.): follows from a slip such as $47 + 43 = 80$, which would leave $100°$ for angle $C$.\n* Choice D (Angle $C$ is the smallest angle of triangle $ABC$.): angle $C$ measures $90°$, making it the largest angle rather than the smallest.\n\n**Test Day Takeaway:** When the two given angles add to $90$, the third is a right angle — compute the third angle before classifying.",
      skills: ["triangle-angle-sum"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $RST$, the measure of angle $S$ is $12°$ greater than the measure of angle $R$, and the measure of angle $T$ is twice the measure of angle $S$. What is the measure, in degrees, of angle $T$?",
      choices: [
        // distractor: gives angle $R$, the angle the other two were described from
        { id: "A", text: "$36$" },
        // distractor: gives angle $S$, stopping one step short of angle $T$
        { id: "B", text: "$48$" },
        // distractor: doubles angle $R$ instead of angle $S$, which yields $4a + 12 = 180$ and $a = 42$
        { id: "C", text: "$84$" },
        { id: "D", text: "$96$" }
      ],
      correctAnswer: "D",
      hint: "Let the angle the others are described from be a variable, then write the other two in terms of it.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~45s):** With $m\\angle R = a$ the angles are $a$, $a + 12$, and $2a + 24$; $4a + 36 = 180$ gives $a = 36$ and $m\\angle T = 96$.\n\n**The Full Solution:**\nStep 1: Let $m\\angle R = a$. Then $m\\angle S = a + 12$ and $m\\angle T = 2(a + 12) = 2a + 24$.\nStep 2: The angles total $180$: $a + (a + 12) + (2a + 24) = 180$, so $4a + 36 = 180$.\nStep 3: Then $4a = 144$ and $a = 36$, so $m\\angle T = 2(36 + 12) = 96$.\n\nVerification: $36 + 48 + 96 = 180$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): gives angle $R$, the angle the other two were described from.\n* Choice B ($48$): gives angle $S$, stopping one step short of angle $T$.\n* Choice C ($84$): doubles angle $R$ instead of angle $S$, which yields $4a + 12 = 180$ and $a = 42$.\n\n**Test Day Takeaway:** Name the angle every other angle is described from, write the rest in terms of it, and set the total to $180$.",
      skills: ["triangle-angle-sum"]
    }
  ],

  // Section: Area of a Triangle
  "Area of a Triangle": [
    {
      id: 1,
      difficulty: "easy",
      question: "A triangle has a base of length $14$ centimeters and a corresponding height of $9$ centimeters. What is the area, in square centimeters, of the triangle?",
      choices: [
        // distractor: adds the base and the height instead of multiplying them
        { id: "A", text: "$23$" },
        // distractor: divides the product by $4$ rather than by $2$
        { id: "B", text: "$31.5$" },
        { id: "C", text: "$63$" },
        // distractor: multiplies base by height but omits the factor $\frac{1}{2}$
        { id: "D", text: "$126$" }
      ],
      correctAnswer: "C",
      hint: "A triangle fills exactly half of the rectangle built on the same base and height.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = \\frac{1}{2}(14)(9) = 63$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is $A = \\frac{1}{2}bh$, where $h$ is the height drawn to base $b$.\nStep 2: Substitute $b = 14$ and $h = 9$: $A = \\frac{1}{2}(14)(9)$.\nStep 3: $\\frac{1}{2}(126) = 63$ square centimeters.\n\nVerification: $2(63) = 126 = 14 \\cdot 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds the base and the height instead of multiplying them.\n* Choice B ($31.5$): divides the product by $4$ rather than by $2$.\n* Choice D ($126$): multiplies base by height but omits the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Halve one factor before multiplying — it keeps the arithmetic small and stops the missing $\\frac{1}{2}$.",
      skills: ["triangle-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In triangle $MNP$, the altitude drawn to side $\\overline{MN}$ has length $16$ centimeters. If the area of triangle $MNP$ is $176$ square centimeters, what is the length, in centimeters, of $\\overline{MN}$?",
      choices: [
        // distractor: divides the area by the altitude without doubling it first, effectively solving $bh = 176$
        { id: "A", text: "$11$" },
        { id: "B", text: "$22$" },
        // distractor: halves the area and stops, never bringing the altitude into the calculation
        { id: "C", text: "$88$" },
        // distractor: reports $2A = 352$, stopping just before the division by the altitude
        { id: "D", text: "$352$" }
      ],
      correctAnswer: "B",
      hint: "Put what you know into the area formula and solve for the one missing factor.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $MN = \\frac{2A}{h} = \\frac{352}{16} = 22$.\n\n**The Full Solution:**\nStep 1: The altitude to $\\overline{MN}$ is the height that pairs with base $MN$, so $A = \\frac{1}{2}(MN)(16)$.\nStep 2: Substitute the area: $176 = 8(MN)$.\nStep 3: Divide by $8$: $MN = 22$ centimeters.\n\nVerification: $\\frac{1}{2}(22)(16) = 176$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): divides the area by the altitude without doubling it first, effectively solving $bh = 176$.\n* Choice C ($88$): halves the area and stops, never bringing the altitude into the calculation.\n* Choice D ($352$): reports $2A = 352$, stopping just before the division by the altitude.\n\n**Test Day Takeaway:** A base and the altitude drawn to it are the only pair the area formula accepts — clear the $\\frac{1}{2}$ into $2A = bh$ and the rest is one division.",
      skills: ["triangle-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The base of a triangle is multiplied by $3$ and its height is multiplied by $\\frac{1}{2}$. The area of the resulting triangle is $k$ times the area of the original triangle. What is the value of $k$?",
      choices: [
        // distractor: inverts both factors, using $\frac{1}{3}$ and $2$
        { id: "A", text: "$\\frac{2}{3}$" },
        { id: "B", text: "$\\frac{3}{2}$" },
        // distractor: applies only the change to the base and ignores the height
        { id: "C", text: "$3$" },
        // distractor: adds the two factors, $3 + \frac{1}{2}$, instead of multiplying them
        { id: "D", text: "$\\frac{7}{2}$" }
      ],
      correctAnswer: "B",
      hint: "Write the new base and new height into the area formula and compare with the original.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Area scales by the product of the two factors: $3 \\cdot \\frac{1}{2} = \\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: The original area is $A = \\frac{1}{2}bh$.\nStep 2: The new base is $3b$ and the new height is $\\frac{1}{2}h$, so $A^{\\prime} = \\frac{1}{2}(3b)\\left(\\frac{1}{2}h\\right) = \\frac{3}{2}\\left(\\frac{1}{2}bh\\right)$.\nStep 3: Therefore $A^{\\prime} = \\frac{3}{2}A$, so $k = \\frac{3}{2}$.\n\nVerification: A triangle with $b = 4$ and $h = 6$ has area $12$; the new one has $b = 12$ and $h = 3$, area $18$, and $\\frac{18}{12} = \\frac{3}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{3}$): inverts both factors, using $\\frac{1}{3}$ and $2$.\n* Choice C ($3$): applies only the change to the base and ignores the height.\n* Choice D ($\\frac{7}{2}$): adds the two factors, $3 + \\frac{1}{2}$, instead of multiplying them.\n\n**Test Day Takeaway:** Scaling a base and a height multiplies the area by the product of the two scale factors, never by their sum.",
      skills: ["triangle-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A right triangle has a hypotenuse of length $17$ centimeters and one leg of length $8$ centimeters. What is the area, in square centimeters, of the triangle?",
      diagram: { type: "rightTriangle", params: { sideLabels: ["8", "", "17"], rightAngleVertex: 1, figureNote: true } },
      choices: [
        { id: "A", text: "$60$" },
        // distractor: uses the hypotenuse as the second leg, computing $\frac{1}{2}(8)(17)$
        { id: "B", text: "$68$" },
        // distractor: finds the missing leg correctly but omits the factor $\frac{1}{2}$
        { id: "C", text: "$120$" },
        // distractor: multiplies the leg by the hypotenuse and also omits the $\frac{1}{2}$
        { id: "D", text: "$136$" }
      ],
      correctAnswer: "A",
      hint: "The two perpendicular sides are the base and the height, and only one of them is given.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The missing leg is $\\sqrt{17^2 - 8^2} = 15$, so the area is $\\frac{1}{2}(8)(15) = 60$.\n\n**The Full Solution:**\nStep 1: The legs of a right triangle are perpendicular, so they serve as base and height; find the second leg first.\nStep 2: By the Pythagorean theorem, $8^2 + b^2 = 17^2$, so $b^2 = 289 - 64 = 225$ and $b = 15$.\nStep 3: Area $= \\frac{1}{2}(8)(15) = 60$ square centimeters.\n\nVerification: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($68$): uses the hypotenuse as the second leg, computing $\\frac{1}{2}(8)(17)$.\n* Choice C ($120$): finds the missing leg correctly but omits the factor $\\frac{1}{2}$.\n* Choice D ($136$): multiplies the leg by the hypotenuse and also omits the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** The legs of a right triangle are its base and height — the hypotenuse is never a height.",
      skills: ["triangle-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "An equilateral triangle has a perimeter of $36$ centimeters. What is the area, in square centimeters, of the triangle?",
      choices: [
        { id: "A", text: "$36\\sqrt{3}$" },
        // distractor: uses a full side as the height, computing $\frac{1}{2}(12)(12)$
        { id: "B", text: "$72$" },
        // distractor: finds the height correctly but omits the factor $\frac{1}{2}$
        { id: "C", text: "$72\\sqrt{3}$" },
        // distractor: uses the perimeter $36$ as the side length in $\frac{s^2\sqrt{3}}{4}$
        { id: "D", text: "$324\\sqrt{3}$" }
      ],
      correctAnswer: "A",
      hint: "Find one side first, then drop the altitude and use the $30°$-$60°$-$90°$ ratios.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~45s):** Each side is $12$ and the height is $6\\sqrt{3}$, so the area is $\\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: All three sides are equal, so each side measures $\\frac{36}{3} = 12$ centimeters.\nStep 2: The altitude splits the triangle into two $30°$-$60°$-$90°$ triangles with shorter leg $6$, so the height is $6\\sqrt{3}$.\nStep 3: Area $= \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3}$ square centimeters.\n\nVerification: The direct formula agrees: $\\frac{s^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($72$): uses a full side as the height, computing $\\frac{1}{2}(12)(12)$.\n* Choice C ($72\\sqrt{3}$): finds the height correctly but omits the factor $\\frac{1}{2}$.\n* Choice D ($324\\sqrt{3}$): uses the perimeter $36$ as the side length in $\\frac{s^2\\sqrt{3}}{4}$.\n\n**Test Day Takeaway:** Split an equilateral triangle down the middle: its height is always $\\frac{\\sqrt{3}}{2}$ times a side.",
      skills: ["triangle-area", "special-right-triangles"]
    }
  ],

  // Section: Similar Triangles
  "Similar Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "Triangle $PQR$ is similar to triangle $STU$, where $P$, $Q$, and $R$ correspond to $S$, $T$, and $U$, respectively. If $PQ = 10$, $QR = 14$, and $ST = 25$, what is the length of $\\overline{TU}$?",
      diagram: { type: "similarTriangles", params: { triangle1: { labels: ["P", "Q", "R"], sideLabels: ["10", "14", ""] }, triangle2: { labels: ["S", "T", "U"], sideLabels: ["25", "", ""] }, figureNote: true } },
      choices: [
        // distractor: divides by the scale factor instead of multiplying by it
        { id: "A", text: "$5.6$" },
        // distractor: adds the difference $25 - 10$ to $14$ rather than scaling
        { id: "B", text: "$29$" },
        { id: "C", text: "$35$" },
        // distractor: multiplies $14$ by $25$ without dividing by $10$
        { id: "D", text: "$350$" }
      ],
      correctAnswer: "C",
      hint: "Compare the two corresponding sides you know to get a single ratio.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The scale factor is $\\frac{25}{10} = 2.5$, so $TU = 2.5(14) = 35$.\n\n**The Full Solution:**\nStep 1: Corresponding sides of similar triangles are proportional: $\\frac{ST}{PQ} = \\frac{TU}{QR}$.\nStep 2: Substitute the given lengths: $\\frac{25}{10} = \\frac{TU}{14}$.\nStep 3: Cross multiply: $10 \\cdot TU = 350$, so $TU = 35$.\n\nVerification: $\\frac{25}{10} = 2.5$ and $\\frac{35}{14} = 2.5$, the same factor. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.6$): divides by the scale factor instead of multiplying by it.\n* Choice B ($29$): adds the difference $25 - 10$ to $14$ rather than scaling.\n* Choice D ($350$): multiplies $14$ by $25$ without dividing by $10$.\n\n**Test Day Takeaway:** Build the proportion with both numerators from the same triangle; one factor governs every pair of corresponding sides.",
      skills: ["similar-triangles"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Two similar triangles have corresponding side lengths in the ratio $2:5$. The perimeter of the larger triangle is $60$ centimeters. What is the perimeter, in centimeters, of the smaller triangle?",
      choices: [
        // distractor: divides by $5$ and stops, giving one part of the ratio instead of two
        { id: "A", text: "$12$" },
        { id: "B", text: "$24$" },
        // distractor: halves the larger perimeter, as if the ratio were $1:2$
        { id: "C", text: "$30$" },
        // distractor: multiplies by $\frac{5}{2}$, scaling up instead of down
        { id: "D", text: "$150$" }
      ],
      correctAnswer: "B",
      hint: "A perimeter is built out of side lengths, so it scales the same way a single side does.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Perimeters share the side ratio: $60 \\cdot \\frac{2}{5} = 24$.\n\n**The Full Solution:**\nStep 1: All corresponding lengths in similar triangles share one ratio, and a perimeter is a sum of lengths, so the perimeters are in the ratio $2:5$.\nStep 2: Let $p$ be the smaller perimeter. Then $\\frac{p}{60} = \\frac{2}{5}$.\nStep 3: Cross multiply: $5p = 120$, so $p = 24$ centimeters.\n\nVerification: $\\frac{24}{60} = \\frac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): divides by $5$ and stops, giving one part of the ratio instead of two.\n* Choice C ($30$): halves the larger perimeter, as if the ratio were $1:2$.\n* Choice D ($150$): multiplies by $\\frac{5}{2}$, scaling up instead of down.\n\n**Test Day Takeaway:** Perimeter scales by the side ratio itself; only area scales by its square.",
      skills: ["similar-triangles"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Two similar triangles have areas of $50$ square centimeters and $98$ square centimeters. What is the ratio of a side length of the smaller triangle to the corresponding side length of the larger triangle?",
      choices: [
        { id: "A", text: "$5:7$" },
        // distractor: reverses the order, giving larger to smaller
        { id: "B", text: "$7:5$" },
        // distractor: reports the reduced ratio of the areas without taking its square root
        { id: "C", text: "$25:49$" },
        // distractor: takes a square root a second time, after the side ratio has already been found
        { id: "D", text: "$\\sqrt{5}:\\sqrt{7}$" }
      ],
      correctAnswer: "A",
      hint: "Areas of similar figures compare by the square of the ratio their sides use.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** $\\frac{50}{98} = \\frac{25}{49}$, and the side ratio is $\\sqrt{\\frac{25}{49}} = \\frac{5}{7}$.\n\n**The Full Solution:**\nStep 1: For similar figures, the ratio of the areas equals the square of the ratio of corresponding sides.\nStep 2: Reduce the area ratio: $\\frac{50}{98} = \\frac{25}{49}$, so $\\left(\\frac{s_1}{s_2}\\right)^2 = \\frac{25}{49}$.\nStep 3: Take the positive square root: $\\frac{s_1}{s_2} = \\frac{5}{7}$, or $5:7$.\n\nVerification: $\\left(\\frac{5}{7}\\right)^2 = \\frac{25}{49} = \\frac{50}{98}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7:5$): reverses the order, giving larger to smaller.\n* Choice C ($25:49$): reports the reduced ratio of the areas without taking its square root.\n* Choice D ($\\sqrt{5}:\\sqrt{7}$): takes a square root a second time, after the side ratio has already been found.\n\n**Test Day Takeaway:** Areas carry the square of the side ratio: reduce the area ratio first, then take exactly one square root.",
      skills: ["similar-triangles"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Triangle $ABC$ is similar to triangle $DEF$, and each side length of triangle $DEF$ is $\\frac{2}{3}$ times the corresponding side length of triangle $ABC$. If the area of triangle $ABC$ is $90$ square units, what is the area, in square units, of triangle $DEF$?",
      choices: [
        { id: "A", text: "$40$" },
        // distractor: multiplies by $\frac{2}{3}$ once instead of squaring the scale factor
        { id: "B", text: "$60$" },
        // distractor: inverts the ratio and uses $\frac{3}{2}$ once
        { id: "C", text: "$135$" },
        // distractor: inverts the ratio and squares it, using $\frac{9}{4}$
        { id: "D", text: "$202.5$" }
      ],
      correctAnswer: "A",
      hint: "The factor that applies to area is not the same as the one that applies to length.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Area scales by $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$, so the area is $90 \\cdot \\frac{4}{9} = 40$.\n\n**The Full Solution:**\nStep 1: Corresponding lengths scale by $\\frac{2}{3}$, so areas scale by $\\left(\\frac{2}{3}\\right)^2$.\nStep 2: $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.\nStep 3: The area of triangle $DEF$ is $90 \\cdot \\frac{4}{9} = 40$ square units.\n\nVerification: $\\frac{40}{90} = \\frac{4}{9} = \\left(\\frac{2}{3}\\right)^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): multiplies by $\\frac{2}{3}$ once instead of squaring the scale factor.\n* Choice C ($135$): inverts the ratio and uses $\\frac{3}{2}$ once.\n* Choice D ($202.5$): inverts the ratio and squares it, using $\\frac{9}{4}$.\n\n**Test Day Takeaway:** Shrink every length by a factor and the area shrinks by that factor squared.",
      skills: ["similar-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In triangle $ABC$, point $D$ lies on $\\overline{AB}$ and point $E$ lies on $\\overline{AC}$ so that $\\overline{DE}$ is parallel to $\\overline{BC}$. If $AD = 6$, $DB = 4$, and $BC = 20$, what is the length of $\\overline{DE}$?",
      choices: [
        // distractor: uses $\frac{DB}{AB} = \frac{4}{10}$ instead of $\frac{AD}{AB}$
        { id: "A", text: "$8$" },
        { id: "B", text: "$12$" },
        // distractor: subtracts $AD$ from $BC$ rather than scaling
        { id: "C", text: "$14$" },
        // distractor: uses $\frac{AD}{DB} = \frac{6}{4}$, comparing the two pieces of $\overline{AB}$ instead of a piece to the whole
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "B",
      hint: "The whole side $\\overline{AB}$, not the piece $\\overline{DB}$, is what $\\overline{AD}$ should be compared with.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~50s):** $AB = 6 + 4 = 10$, so $DE = 20 \\cdot \\frac{6}{10} = 12$.\n\n**The Full Solution:**\nStep 1: Because $\\overline{DE}$ is parallel to $\\overline{BC}$, triangles $ADE$ and $ABC$ have congruent corresponding angles and are similar.\nStep 2: The scale factor compares a side of $ADE$ to the whole corresponding side: $\\frac{AD}{AB} = \\frac{6}{6 + 4} = \\frac{3}{5}$.\nStep 3: So $DE = \\frac{3}{5}(20) = 12$.\n\nVerification: $\\frac{12}{20} = \\frac{3}{5} = \\frac{6}{10}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): uses $\\frac{DB}{AB} = \\frac{4}{10}$ instead of $\\frac{AD}{AB}$.\n* Choice C ($14$): subtracts $AD$ from $BC$ rather than scaling.\n* Choice D ($30$): uses $\\frac{AD}{DB} = \\frac{6}{4}$, comparing the two pieces of $\\overline{AB}$ instead of a piece to the whole.\n\n**Test Day Takeaway:** When a parallel segment cuts a triangle, compare a piece to the whole side, never a piece to the other piece.",
      skills: ["similar-triangles"]
    }
  ],

  // Section: Right Triangles & Pythagorean Theorem
  "Right Triangles & Pythagorean Theorem": [
    {
      id: 1,
      difficulty: "easy",
      question: "In right triangle $ABC$, angle $C$ is a right angle, $AC = 20$, and $CB = 21$. What is the length of $\\overline{AB}$?",
      diagram: { type: "rightTriangle", params: { labels: ["A", "C", "B"], sideLabels: ["20", "21", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: averages the two legs
        { id: "A", text: "$20.5$" },
        { id: "B", text: "$29$" },
        // distractor: adds the legs instead of applying the Pythagorean theorem
        { id: "C", text: "$41$" },
        // distractor: stops at $AB^2$ without taking the square root
        { id: "D", text: "$841$" }
      ],
      correctAnswer: "B",
      hint: "Identify the side opposite the right angle before writing the theorem down.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $AB = \\sqrt{20^2 + 21^2} = \\sqrt{841} = 29$.\n\n**The Full Solution:**\nStep 1: Angle $C$ is the right angle, so $\\overline{AB}$ is the hypotenuse.\nStep 2: $AC^2 + CB^2 = AB^2$ gives $400 + 441 = AB^2$, so $AB^2 = 841$.\nStep 3: $AB = \\sqrt{841} = 29$.\n\nVerification: $20^2 + 21^2 = 400 + 441 = 841$ and $29^2 = 841$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20.5$): averages the two legs.\n* Choice C ($41$): adds the legs instead of applying the Pythagorean theorem.\n* Choice D ($841$): stops at $AB^2$ without taking the square root.\n\n**Test Day Takeaway:** The side opposite the right angle is the hypotenuse, and it is always the side isolated on its own.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A rectangular garden plot measures $24$ meters by $45$ meters. What is the length, in meters, of a straight path connecting two opposite corners of the plot?",
      choices: [
        // distractor: subtracts the two side lengths
        { id: "A", text: "$21$" },
        { id: "B", text: "$51$" },
        // distractor: adds the two side lengths
        { id: "C", text: "$69$" },
        // distractor: stops at the square of the path length
        { id: "D", text: "$2{,}601$" }
      ],
      correctAnswer: "B",
      hint: "Two sides of the plot and the path enclose a right triangle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The path is $\\sqrt{24^2 + 45^2} = \\sqrt{2601} = 51$ meters.\n\n**The Full Solution:**\nStep 1: The path and two sides of the rectangle form a right triangle with legs $24$ and $45$.\nStep 2: $24^2 + 45^2 = 576 + 2025 = 2601$.\nStep 3: The path length is $\\sqrt{2601} = 51$ meters.\n\nVerification: $51^2 = 2601 = 576 + 2025$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): subtracts the two side lengths.\n* Choice C ($69$): adds the two side lengths.\n* Choice D ($2{,}601$): stops at the square of the path length.\n\n**Test Day Takeaway:** A diagonal of a rectangle cuts it into two right triangles whose legs are the sides of the rectangle.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In right triangle $DEF$, angle $E$ is a right angle, $DE = 15$, and $EF = 8$. Point $G$ is the midpoint of $\\overline{DF}$. What is the length of $\\overline{DG}$?",
      choices: [
        { id: "A", text: "$8.5$" },
        // distractor: averages the two legs instead of halving the hypotenuse
        { id: "B", text: "$11.5$" },
        // distractor: gives $DF$, the whole hypotenuse, instead of half of it
        { id: "C", text: "$17$" },
        // distractor: adds the two legs
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "A",
      hint: "Find the hypotenuse before doing anything with the word midpoint.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** $DF = \\sqrt{15^2 + 8^2} = 17$, so $DG = \\frac{17}{2} = 8.5$.\n\n**The Full Solution:**\nStep 1: Angle $E$ is the right angle, so $\\overline{DF}$ is the hypotenuse: $DF^2 = 15^2 + 8^2 = 225 + 64 = 289$.\nStep 2: $DF = \\sqrt{289} = 17$.\nStep 3: $G$ is the midpoint of $\\overline{DF}$, so $DG = \\frac{1}{2}(17) = 8.5$.\n\nVerification: $8.5 + 8.5 = 17$, the full hypotenuse. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($11.5$): averages the two legs instead of halving the hypotenuse.\n* Choice C ($17$): gives $DF$, the whole hypotenuse, instead of half of it.\n* Choice D ($23$): adds the two legs.\n\n**Test Day Takeaway:** Finish the Pythagorean step, then read the question again to see what it actually asks for.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In right triangle $XYZ$, angle $Y$ is a right angle, the hypotenuse $\\overline{XZ}$ has length $26$, and leg $\\overline{XY}$ has length $24$. What is the length of $\\overline{YZ}$?",
      diagram: { type: "rightTriangle", params: { labels: ["X", "Y", "Z"], sideLabels: ["24", "", "26"], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: subtracts the two given lengths instead of their squares
        { id: "A", text: "$2$" },
        { id: "B", text: "$10$" },
        // distractor: averages the hypotenuse and the given leg
        { id: "C", text: "$25$" },
        // distractor: adds the two given lengths
        { id: "D", text: "$50$" }
      ],
      correctAnswer: "B",
      hint: "The hypotenuse is the one given, so the missing side comes out of a subtraction.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $YZ = \\sqrt{26^2 - 24^2} = \\sqrt{100} = 10$.\n\n**The Full Solution:**\nStep 1: Angle $Y$ is the right angle, so $\\overline{XZ}$ is the hypotenuse and $\\overline{XY}$ and $\\overline{YZ}$ are the legs.\nStep 2: $24^2 + YZ^2 = 26^2$, so $YZ^2 = 676 - 576 = 100$.\nStep 3: $YZ = \\sqrt{100} = 10$.\n\nVerification: $24^2 + 10^2 = 576 + 100 = 676 = 26^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the two given lengths instead of their squares.\n* Choice C ($25$): averages the hypotenuse and the given leg.\n* Choice D ($50$): adds the two given lengths.\n\n**Test Day Takeaway:** Solving for a leg subtracts squares, not lengths: square first, subtract, then take the root.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In right triangle $ABC$, angle $C$ is a right angle. The legs have lengths $AC = x$ and $BC = x + 7$, and the hypotenuse has length $AB = 17$. What is the value of $x$?",
      choices: [
        // distractor: solves $x + (x + 7) = 17$, adding the legs to reach the hypotenuse
        { id: "A", text: "$5$" },
        { id: "B", text: "$8$" },
        // distractor: subtracts $7$ from the hypotenuse
        { id: "C", text: "$10$" },
        // distractor: gives $BC = x + 7$ instead of $x$ itself
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      hint: "Write the theorem with the expressions in place, then expand before solving.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~60s):** $x^2 + (x + 7)^2 = 289$ reduces to $x^2 + 7x - 120 = 0$, so $x = 8$.\n\n**The Full Solution:**\nStep 1: The legs are $x$ and $x + 7$ and the hypotenuse is $17$, so $x^2 + (x + 7)^2 = 17^2$.\nStep 2: Expand: $x^2 + x^2 + 14x + 49 = 289$, so $2x^2 + 14x - 240 = 0$, or $x^2 + 7x - 120 = 0$.\nStep 3: Factor: $(x + 15)(x - 8) = 0$. A length must be positive, so $x = 8$.\n\nVerification: The legs are $8$ and $15$, and $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): solves $x + (x + 7) = 17$, adding the legs to reach the hypotenuse.\n* Choice C ($10$): subtracts $7$ from the hypotenuse.\n* Choice D ($15$): gives $BC = x + 7$ instead of $x$ itself.\n\n**Test Day Takeaway:** When the legs are expressions, square them into a quadratic and throw out the negative root.",
      skills: ["pythagorean-theorem"]
    }
  ],

  // Section: Trigonometric Ratios
  "Trigonometric Ratios": [
    {
      id: 1,
      difficulty: "easy",
      question: "In right triangle $KLM$, angle $L$ is a right angle, $KL = 24$, $LM = 7$, and $KM = 25$. What is the value of $\\sin K$?",
      diagram: { type: "rightTriangle", params: { labels: ["K", "L", "M"], sideLabels: ["24", "7", "25"], rightAngleVertex: 1, figureNote: true } },
      choices: [
        { id: "A", text: "$\\frac{7}{25}$" },
        // distractor: the value of $\tan K$, using the adjacent leg in the denominator instead of the hypotenuse
        { id: "B", text: "$\\frac{7}{24}$" },
        // distractor: the value of $\cos K$, using the adjacent leg in the numerator
        { id: "C", text: "$\\frac{24}{25}$" },
        // distractor: the reciprocal of $\tan K$, swapping the opposite and adjacent legs
        { id: "D", text: "$\\frac{24}{7}$" }
      ],
      correctAnswer: "A",
      hint: "Sine pairs the side across from the angle with the longest side of the triangle.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\sin K$ is opposite over hypotenuse: $\\frac{LM}{KM} = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: Angle $L$ is the right angle, so $\\overline{KM}$ is the hypotenuse.\nStep 2: The leg opposite angle $K$ is $\\overline{LM}$, of length $7$.\nStep 3: Therefore $\\sin K = \\frac{7}{25}$.\n\nVerification: $\\left(\\frac{7}{25}\\right)^2 + \\left(\\frac{24}{25}\\right)^2 = \\frac{49 + 576}{625} = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{7}{24}$): the value of $\\tan K$, using the adjacent leg in the denominator instead of the hypotenuse.\n* Choice C ($\\frac{24}{25}$): the value of $\\cos K$, using the adjacent leg in the numerator.\n* Choice D ($\\frac{24}{7}$): the reciprocal of $\\tan K$, swapping the opposite and adjacent legs.\n\n**Test Day Takeaway:** Locate the hypotenuse first, then read opposite and adjacent from the angle actually named in the ratio.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In right triangle $PQR$, angle $Q$ is a right angle and $\\tan R = \\frac{5}{12}$. What is the value of $\\tan P$?",
      choices: [
        // distractor: the value of $\sin R$, built from the same legs but with hypotenuse $13$
        { id: "A", text: "$\\frac{5}{13}$" },
        // distractor: repeats $\tan R$ instead of switching to the other acute angle
        { id: "B", text: "$\\frac{5}{12}$" },
        // distractor: the value of $\cos R$, again bringing in the hypotenuse
        { id: "C", text: "$\\frac{12}{13}$" },
        { id: "D", text: "$\\frac{12}{5}$" }
      ],
      correctAnswer: "D",
      hint: "A leg opposite one acute angle is adjacent to the other one.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Angles $P$ and $R$ are complementary, so their opposite and adjacent legs swap: $\\tan P = \\frac{12}{5}$.\n\n**The Full Solution:**\nStep 1: $\\tan R = \\frac{PQ}{QR} = \\frac{5}{12}$, since $\\overline{PQ}$ is opposite angle $R$ and $\\overline{QR}$ is adjacent to it.\nStep 2: For angle $P$ those roles reverse: $\\overline{QR}$ is opposite and $\\overline{PQ}$ is adjacent.\nStep 3: So $\\tan P = \\frac{QR}{PQ} = \\frac{12}{5}$.\n\nVerification: $\\tan P \\cdot \\tan R = \\frac{12}{5} \\cdot \\frac{5}{12} = 1$, as it must be for complementary angles. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{13}$): the value of $\\sin R$, built from the same legs but with hypotenuse $13$.\n* Choice B ($\\frac{5}{12}$): repeats $\\tan R$ instead of switching to the other acute angle.\n* Choice C ($\\frac{12}{13}$): the value of $\\cos R$, again bringing in the hypotenuse.\n\n**Test Day Takeaway:** The two acute angles of a right triangle have reciprocal tangents.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In right triangle $UVW$, angle $V$ is a right angle and $\\sin U = \\frac{8}{17}$. If the hypotenuse $\\overline{UW}$ has length $51$, what is the length of $\\overline{VW}$?",
      choices: [
        // distractor: reads the numerator of the ratio as an actual length
        { id: "A", text: "$8$" },
        { id: "B", text: "$24$" },
        // distractor: gives $UV$, the leg adjacent to angle $U$
        { id: "C", text: "$45$" },
        // distractor: repeats the hypotenuse
        { id: "D", text: "$51$" }
      ],
      correctAnswer: "B",
      hint: "The ratio $\\frac{8}{17}$ and the ratio of the two real lengths are the same fraction.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\sin U = \\frac{VW}{UW}$, so $VW = 51 \\cdot \\frac{8}{17} = 24$.\n\n**The Full Solution:**\nStep 1: Angle $V$ is the right angle, so $\\overline{UW}$ is the hypotenuse and $\\overline{VW}$ is the leg opposite angle $U$.\nStep 2: $\\sin U = \\frac{VW}{UW}$ gives $\\frac{VW}{51} = \\frac{8}{17}$.\nStep 3: Cross multiply: $17 \\cdot VW = 408$, so $VW = 24$.\n\nVerification: $\\frac{24}{51} = \\frac{8}{17}$, the given ratio. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reads the numerator of the ratio as an actual length.\n* Choice C ($45$): gives $UV$, the leg adjacent to angle $U$.\n* Choice D ($51$): repeats the hypotenuse.\n\n**Test Day Takeaway:** A trigonometric ratio is a proportion: set it equal to the ratio of the real lengths and solve.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In right triangle $RST$, angle $T$ is a right angle, leg $\\overline{RT}$ has length $9$, and leg $\\overline{TS}$ has length $40$. What is the value of $\\cos R$?",
      choices: [
        { id: "A", text: "$\\frac{9}{41}$" },
        // distractor: the value of $\tan R$, dividing by the opposite leg instead of the hypotenuse
        { id: "B", text: "$\\frac{9}{40}$" },
        // distractor: the value of $\sin R$, putting the opposite leg in the numerator
        { id: "C", text: "$\\frac{40}{41}$" },
        // distractor: the reciprocal of $\tan R$, swapping the two legs
        { id: "D", text: "$\\frac{40}{9}$" }
      ],
      correctAnswer: "A",
      hint: "The denominator of a cosine is the hypotenuse, and that length is not given yet.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** $RS = \\sqrt{9^2 + 40^2} = 41$, so $\\cos R = \\frac{9}{41}$.\n\n**The Full Solution:**\nStep 1: Angle $T$ is the right angle, so $\\overline{RS}$ is the hypotenuse: $RS^2 = 9^2 + 40^2 = 81 + 1600 = 1681$.\nStep 2: $RS = \\sqrt{1681} = 41$.\nStep 3: $\\cos R$ is adjacent over hypotenuse: $\\frac{RT}{RS} = \\frac{9}{41}$.\n\nVerification: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{40}$): the value of $\\tan R$, dividing by the opposite leg instead of the hypotenuse.\n* Choice C ($\\frac{40}{41}$): the value of $\\sin R$, putting the opposite leg in the numerator.\n* Choice D ($\\frac{40}{9}$): the reciprocal of $\\tan R$, swapping the two legs.\n\n**Test Day Takeaway:** Cosine needs the hypotenuse, so compute the hypotenuse before writing the ratio down.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In right triangle $JKL$, angle $L$ is a right angle and $\\sin J = \\frac{3}{5}$. If the perimeter of triangle $JKL$ is $60$, what is the length of $\\overline{KL}$?",
      choices: [
        { id: "A", text: "$15$" },
        // distractor: gives $JL$, the leg adjacent to angle $J$
        { id: "B", text: "$20$" },
        // distractor: gives $JK$, the hypotenuse
        { id: "C", text: "$25$" },
        // distractor: applies the ratio $\frac{3}{5}$ directly to the perimeter
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "A",
      hint: "A ratio of $3$ to $5$ fixes the shape only, so introduce a multiplier for the actual lengths.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~60s):** The sides are $3k$, $4k$, and $5k$; $12k = 60$ gives $k = 5$, so $KL = 15$.\n\n**The Full Solution:**\nStep 1: $\\sin J = \\frac{KL}{JK} = \\frac{3}{5}$, so the opposite leg and the hypotenuse are $3k$ and $5k$ for some positive $k$.\nStep 2: The third side is $\\sqrt{(5k)^2 - (3k)^2} = 4k$, so the perimeter is $3k + 4k + 5k = 12k$.\nStep 3: $12k = 60$ gives $k = 5$, so $KL = 3(5) = 15$.\n\nVerification: $15 + 20 + 25 = 60$ and $\\frac{15}{25} = \\frac{3}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): gives $JL$, the leg adjacent to angle $J$.\n* Choice C ($25$): gives $JK$, the hypotenuse.\n* Choice D ($36$): applies the ratio $\\frac{3}{5}$ directly to the perimeter.\n\n**Test Day Takeaway:** A given sine fixes the shape but not the size — introduce a scale factor and let the perimeter pin it down.",
      skills: ["soh-cah-toa"]
    }
  ],

  // Section: Special Right Triangles
  "Special Right Triangles": [
    {
      id: 1,
      difficulty: "easy",
      question: "A $45°$-$45°$-$90°$ triangle has legs of length $11$ centimeters. What is the length, in centimeters, of its hypotenuse?",
      diagram: { type: "rightTriangle", params: { labels: ["45°", "", "45°"], sideLabels: ["11", "11", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: adds the legs and then takes a square root, instead of adding their squares
        { id: "A", text: "$\\sqrt{22}$" },
        { id: "B", text: "$11\\sqrt{2}$" },
        // distractor: uses $\sqrt{3}$, which belongs to the $30°$-$60°$-$90°$ ratios
        { id: "C", text: "$11\\sqrt{3}$" },
        // distractor: doubles a leg, which is the $30°$-$60°$-$90°$ hypotenuse rule
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      hint: "The two legs are equal, so the Pythagorean theorem gives twice one square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** In a $45°$-$45°$-$90°$ triangle the hypotenuse is $\\sqrt{2}$ times a leg, so it is $11\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The two legs are equal, so the sides are in the ratio $1 : 1 : \\sqrt{2}$.\nStep 2: With each leg $11$, the hypotenuse is $11\\sqrt{2}$ centimeters.\nStep 3: Check with the Pythagorean theorem: $11^2 + 11^2 = 242$ and $(11\\sqrt{2})^2 = 121(2) = 242$.\n\nVerification: $11\\sqrt{2} \\approx 15.6$, longer than either leg and shorter than their sum of $22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{22}$): adds the legs and then takes a square root, instead of adding their squares.\n* Choice C ($11\\sqrt{3}$): uses $\\sqrt{3}$, which belongs to the $30°$-$60°$-$90°$ ratios.\n* Choice D ($22$): doubles a leg, which is the $30°$-$60°$-$90°$ hypotenuse rule.\n\n**Test Day Takeaway:** Leg to hypotenuse in a $45°$-$45°$-$90°$ triangle multiplies by $\\sqrt{2}$; going the other way divides.",
      skills: ["special-right-triangles"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a $30°$-$60°$-$90°$ triangle, the side opposite the $30°$ angle has length $9$. What is the length of the side opposite the $90°$ angle?",
      diagram: { type: "rightTriangle", params: { labels: ["30°", "", "60°"], sideLabels: ["", "9", ""], rightAngleVertex: 1, figureNote: true } },
      choices: [
        // distractor: uses $\sqrt{2}$, which belongs to the $45°$-$45°$-$90°$ ratios
        { id: "A", text: "$9\\sqrt{2}$" },
        // distractor: gives the side opposite the $60°$ angle
        { id: "B", text: "$9\\sqrt{3}$" },
        { id: "C", text: "$18$" },
        // distractor: triples the shorter leg instead of doubling it
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "C",
      hint: "The side opposite the largest angle is the hypotenuse — compare it with the shortest side.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The hypotenuse is twice the side opposite the $30°$ angle: $2(9) = 18$.\n\n**The Full Solution:**\nStep 1: The side opposite the $90°$ angle is the hypotenuse.\nStep 2: In a $30°$-$60°$-$90°$ triangle the sides are in the ratio $1 : \\sqrt{3} : 2$, shortest to longest.\nStep 3: The shorter leg is $9$, so the hypotenuse is $2(9) = 18$.\n\nVerification: $9^2 + (9\\sqrt{3})^2 = 81 + 243 = 324 = 18^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\sqrt{2}$): uses $\\sqrt{2}$, which belongs to the $45°$-$45°$-$90°$ ratios.\n* Choice B ($9\\sqrt{3}$): gives the side opposite the $60°$ angle.\n* Choice D ($27$): triples the shorter leg instead of doubling it.\n\n**Test Day Takeaway:** The shorter leg of a $30°$-$60°$-$90°$ triangle is exactly half the hypotenuse.",
      skills: ["special-right-triangles"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The hypotenuse of a $45°$-$45°$-$90°$ triangle has length $14$ centimeters. What is the length, in centimeters, of each leg of the triangle?",
      choices: [
        // distractor: halves the hypotenuse, which is the $30°$-$60°$-$90°$ rule
        { id: "A", text: "$7$" },
        { id: "B", text: "$7\\sqrt{2}$" },
        // distractor: brings in $\sqrt{3}$ from the $30°$-$60°$-$90°$ ratios
        { id: "C", text: "$7\\sqrt{3}$" },
        // distractor: multiplies by $\sqrt{2}$ instead of dividing by it
        { id: "D", text: "$14\\sqrt{2}$" }
      ],
      correctAnswer: "B",
      hint: "Undo the $\\sqrt{2}$ that turned a leg into the hypotenuse.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** Each leg is $\\frac{14}{\\sqrt{2}} = 7\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The legs are equal; call each $\\ell$, so the sides are $\\ell : \\ell : \\ell\\sqrt{2}$.\nStep 2: $\\ell\\sqrt{2} = 14$, so $\\ell = \\frac{14}{\\sqrt{2}}$.\nStep 3: Rationalize: $\\frac{14}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2}$.\n\nVerification: $(7\\sqrt{2})^2 + (7\\sqrt{2})^2 = 98 + 98 = 196 = 14^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): halves the hypotenuse, which is the $30°$-$60°$-$90°$ rule.\n* Choice C ($7\\sqrt{3}$): brings in $\\sqrt{3}$ from the $30°$-$60°$-$90°$ ratios.\n* Choice D ($14\\sqrt{2}$): multiplies by $\\sqrt{2}$ instead of dividing by it.\n\n**Test Day Takeaway:** Hypotenuse to leg in a $45°$-$45°$-$90°$ triangle means dividing by $\\sqrt{2}$ and rationalizing.",
      skills: ["special-right-triangles"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In right triangle $ABC$, the measure of angle $A$ is $30°$, the measure of angle $B$ is $60°$, and $AB = 22$. What is the length of $\\overline{AC}$?",
      choices: [
        // distractor: gives $BC$, the side opposite the $30°$ angle
        { id: "A", text: "$11$" },
        // distractor: uses the $45°$-$45°$-$90°$ ratio
        { id: "B", text: "$11\\sqrt{2}$" },
        { id: "C", text: "$11\\sqrt{3}$" },
        // distractor: multiplies the hypotenuse by $\sqrt{3}$ without halving it first
        { id: "D", text: "$22\\sqrt{3}$" }
      ],
      correctAnswer: "C",
      hint: "Work through the shortest side before reaching for $\\sqrt{3}$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\overline{AB}$ is the hypotenuse, so $BC = 11$ and $AC = 11\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Angle $C$ measures $180 - 30 - 60 = 90°$, so $\\overline{AB}$ is the hypotenuse.\nStep 2: The side opposite the $30°$ angle is $\\overline{BC}$, half the hypotenuse: $BC = 11$.\nStep 3: The side opposite the $60°$ angle is $\\overline{AC}$, which is $\\sqrt{3}$ times the shorter leg: $AC = 11\\sqrt{3}$.\n\nVerification: $11^2 + (11\\sqrt{3})^2 = 121 + 363 = 484 = 22^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): gives $BC$, the side opposite the $30°$ angle.\n* Choice B ($11\\sqrt{2}$): uses the $45°$-$45°$-$90°$ ratio.\n* Choice D ($22\\sqrt{3}$): multiplies the hypotenuse by $\\sqrt{3}$ without halving it first.\n\n**Test Day Takeaway:** Build a $30°$-$60°$-$90°$ triangle from its shortest side: halve the hypotenuse, then multiply by $\\sqrt{3}$.",
      skills: ["special-right-triangles"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In an equilateral triangle, the altitude drawn to one of the sides has length $12$ centimeters. What is the perimeter, in centimeters, of the triangle?",
      choices: [
        // distractor: gives one side length rather than the perimeter
        { id: "A", text: "$8\\sqrt{3}$" },
        // distractor: divides $24$ by $3$ instead of by $\sqrt{3}$, getting a side of $8$ and a perimeter of $24$
        { id: "B", text: "$24$" },
        // distractor: triples the altitude, treating the altitude itself as a side
        { id: "C", text: "$36$" },
        { id: "D", text: "$24\\sqrt{3}$" }
      ],
      correctAnswer: "D",
      hint: "The altitude of an equilateral triangle is not one of its sides — split the triangle in half first.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~60s):** $\\frac{s\\sqrt{3}}{2} = 12$ gives $s = 8\\sqrt{3}$, so the perimeter is $24\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The altitude splits the equilateral triangle into two $30°$-$60°$-$90°$ triangles in which the altitude is the longer leg and a full side is the hypotenuse.\nStep 2: If a side is $s$, the altitude is $\\frac{s\\sqrt{3}}{2}$. Setting $\\frac{s\\sqrt{3}}{2} = 12$ gives $s = \\frac{24}{\\sqrt{3}} = 8\\sqrt{3}$.\nStep 3: The perimeter is $3s = 24\\sqrt{3}$.\n\nVerification: With $s = 8\\sqrt{3} \\approx 13.86$, half a side is about $6.93$ and $\\sqrt{13.86^2 - 6.93^2} \\approx 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\sqrt{3}$): gives one side length rather than the perimeter.\n* Choice B ($24$): divides $24$ by $3$ instead of by $\\sqrt{3}$, getting a side of $8$ and a perimeter of $24$.\n* Choice C ($36$): triples the altitude, treating the altitude itself as a side.\n\n**Test Day Takeaway:** The altitude of an equilateral triangle is the longer leg of a $30°$-$60°$-$90°$ triangle, never a side of it.",
      skills: ["special-right-triangles"]
    }
  ]
};
