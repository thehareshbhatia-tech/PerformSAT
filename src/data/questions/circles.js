// Practice questions for Circles module
// Questions are organized by SECTION (question type)

export const circlesQuestions = {
  // Section: Circle Fundamentals
  "Circle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "The diameter of a circle is $34$ millimeters. What is the radius of the circle, in millimeters?",
      choices: [
        // distractor: halves the diameter twice
        { id: "A", text: "$8.5$" },
        { id: "B", text: "$17$" },
        // distractor: reports the diameter unchanged
        { id: "C", text: "$34$" },
        // distractor: doubles instead of halving
        { id: "D", text: "$68$" }
      ],
      correctAnswer: "B",
      hint: "The two lengths differ by a single factor of $2$ — decide which one of the pair is longer.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A radius is half a diameter, so $r = \\frac{34}{2} = 17$ millimeters.\n\n**The Full Solution:**\nStep 1: For every circle, $d = 2r$, so $r = \\frac{d}{2}$.\nStep 2: Substitute $d = 34$: $r = \\frac{34}{2} = 17$ millimeters.\nStep 3: Check by reversing the step: two radii of $17$ millimeters laid end to end span $34$ millimeters, the given diameter.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8.5$): halves the diameter a second time, reporting $\\frac{34}{4}$.\n* Choice C ($34$): reports the diameter without converting it.\n* Choice D ($68$): doubles the diameter, applying $d = 2r$ in the wrong direction.\n\n**Test Day Takeaway:** Radius and diameter are one factor of $2$ apart. Name which one the question handed you before you multiply or divide.",
      skills: ["circle-parts"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circle has a radius of $11$ inches. What is the length, in inches, of a diameter of the circle?",
      choices: [
        // distractor: halves the radius
        { id: "A", text: "$5.5$" },
        // distractor: reports the radius
        { id: "B", text: "$11$" },
        { id: "C", text: "$22$" },
        // distractor: squares the radius
        { id: "D", text: "$121$" }
      ],
      correctAnswer: "C",
      hint: "Cross the circle straight through its center and count how many radii you travel.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** A diameter is twice a radius, so $d = 2(11) = 22$ inches.\n\n**The Full Solution:**\nStep 1: A diameter runs from one side of the circle to the other through the center, so it is made of two radii: $d = 2r$.\nStep 2: Substitute $r = 11$: $d = 2(11) = 22$ inches.\nStep 3: Check: half of $22$ is $11$, the given radius.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.5$): halves the radius instead of doubling it.\n* Choice B ($11$): repeats the radius, treating the two words as interchangeable.\n* Choice D ($121$): squares the radius, a habit borrowed from the area formula $A = \\pi r^2$.\n\n**Test Day Takeaway:** Doubling is the only operation that turns a radius into a diameter. Squaring belongs to area, never to a length.",
      skills: ["circle-parts"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Point $M$ is the center of a circle, and point $N$ lies on the circle. If $MN = 9.5$, what is the length of a diameter of the circle?",
      choices: [
        // distractor: halves MN instead of doubling it
        { id: "A", text: "$4.75$" },
        // distractor: reports the radius
        { id: "B", text: "$9.5$" },
        { id: "C", text: "$19$" },
        // distractor: squares MN
        { id: "D", text: "$90.25$" }
      ],
      correctAnswer: "C",
      hint: "Decide what kind of segment $\\overline{MN}$ is before you convert anything.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\overline{MN}$ runs from the center to a point on the circle, so it is a radius; the diameter is $2(9.5) = 19$.\n\n**The Full Solution:**\nStep 1: A radius is a segment from the center to any point on the circle, so $MN = 9.5$ is a radius.\nStep 2: A diameter is twice a radius: $d = 2r = 2(9.5)$.\nStep 3: $d = 19$. Check: $\\frac{19}{2} = 9.5$, which matches $MN$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.75$): halves $MN$ instead of doubling it, converting in the wrong direction.\n* Choice B ($9.5$): reports the radius itself and skips the conversion the question asks for.\n* Choice D ($90.25$): squares $9.5$, importing the $r^2$ from the area formula into a length question.\n\n**Test Day Takeaway:** Center-to-circle is always a radius. Classify the segment first; the arithmetic afterwards is one step.",
      skills: ["circle-parts"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Points $A$ and $B$ lie on a circle with center $O$, and the measure of angle $AOB$ is $110^\\circ$. What is the measure, in degrees, of angle $OAB$?",
      choices: [
        { id: "A", text: "$35$" },
        // distractor: halves the central angle, treating OAB as an inscribed angle
        { id: "B", text: "$55$" },
        // distractor: computes 180 - 110 = 70 and never splits it between the two base angles
        { id: "C", text: "$70$" },
        // distractor: repeats the central angle 110
        { id: "D", text: "$110$" }
      ],
      correctAnswer: "A",
      hint: "What do segments $\\overline{OA}$ and $\\overline{OB}$ have in common?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Triangle $AOB$ is isosceles, so the two base angles share $180 - 110 = 70$ degrees, giving $35$ each.\n\n**The Full Solution:**\nStep 1: $OA$ and $OB$ are both radii, so triangle $AOB$ is isosceles with $OA = OB$.\nStep 2: Angles $OAB$ and $OBA$ are the base angles opposite those equal sides, so they are equal.\nStep 3: The angles of the triangle total $180$, so $2(\\text{angle } OAB) = 180 - 110 = 70$ and angle $OAB = 35$. Check: $35 + 35 + 110 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($55$): halves the central angle, which is the rule for an inscribed angle, not a base angle.\n* Choice C ($70$): stops at $180 - 110 = 70$, the total of the two base angles.\n* Choice D ($110$): repeats the central angle instead of finding a base angle.\n\n**Test Day Takeaway:** Any triangle with two radii as sides is isosceles, so its base angles are equal.",
      skills: ["circle-parts"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure shown, $\\overline{PQ}$ is a diameter of the circle with center $W$, and point $R$ lies on the circle. If $PQ = 10$ and $PR = 6$, what is the length of $\\overline{QR}$?",
      diagram: { type: "circleWithInscribedTriangle", params: { labels: { A: "P", B: "Q", C: "R", O: "W" }, angleAtAValue: 53, showDiameter: true, showCenter: true, showRightAngleAtC: false, figureNote: true } },
      choices: [
        // distractor: subtracts the two given lengths
        { id: "A", text: "$4$" },
        // distractor: assumes the triangle is isosceles
        { id: "B", text: "$6$" },
        { id: "C", text: "$8$" },
        // distractor: reports the diameter
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      hint: "Ask what the diameter $\\overline{PQ}$ forces the angle at $R$ to be.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** An angle inscribed in a semicircle is a right angle, so triangle $PRQ$ is right with hypotenuse $10$; $QR = \\sqrt{10^2 - 6^2} = 8$.\n\n**The Full Solution:**\nStep 1: $R$ lies on the circle and $\\overline{PQ}$ is a diameter, so $\\angle PRQ$ is inscribed in a semicircle and measures $90^{\\circ}$.\nStep 2: In right triangle $PRQ$, the diameter is the hypotenuse: $PR^2 + QR^2 = PQ^2$, so $36 + QR^2 = 100$.\nStep 3: $QR^2 = 64$, so $QR = 8$. Check: $6$-$8$-$10$ is the $3$-$4$-$5$ triple scaled by $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the given lengths, $10 - 6$, as if $P$, $R$, and $Q$ were collinear.\n* Choice B ($6$): copies $PR$, assuming the triangle is isosceles when nothing in the figure forces that.\n* Choice D ($10$): reports the diameter, the length already given.\n\n**Test Day Takeaway:** A diameter plus a third point on the circle is a right triangle every time, with the diameter as the hypotenuse.",
      skills: ["circle-parts"]
    }
  ],

  // Section: Area Problems
  "Area Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "The radius of a circle is $7$ meters. What is the area, in square meters, of the circle?",
      choices: [
        // distractor: uses pi times r
        { id: "A", text: "$7\\pi$" },
        // distractor: computes the circumference
        { id: "B", text: "$14\\pi$" },
        { id: "C", text: "$49\\pi$" },
        // distractor: cubes the radius
        { id: "D", text: "$343\\pi$" }
      ],
      correctAnswer: "C",
      hint: "Only one of the two circle formulas squares the radius.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = \\pi r^2 = \\pi(7)^2 = 49\\pi$ square meters.\n\n**The Full Solution:**\nStep 1: The area of a circle with radius $r$ is $A = \\pi r^2$.\nStep 2: The radius is $7$ meters, so $A = \\pi(7)^2$.\nStep 3: $7^2 = 49$, giving $A = 49\\pi$ square meters. Check: doubling the radius to $14$ meters would give $196\\pi$, four times as much — the quadrupling that only an area does.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7\\pi$): uses $\\pi r$ and never squares the radius.\n* Choice B ($14\\pi$): computes the circumference $2\\pi r$, a length rather than an area.\n* Choice D ($343\\pi$): cubes the radius, which is the shape of a volume formula.\n\n**Test Day Takeaway:** Area squares the radius; circumference doubles it. Let the units decide — square meters calls for the squared radius.",
      skills: ["circle-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circle has a diameter of $18$ inches. What is the area of the circle, in square inches?",
      choices: [
        // distractor: computes the circumference
        { id: "A", text: "$18\\pi$" },
        { id: "B", text: "$81\\pi$" },
        // distractor: doubles the correct area
        { id: "C", text: "$162\\pi$" },
        // distractor: uses the diameter as the radius
        { id: "D", text: "$324\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Convert before you square, not after.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The radius is $\\frac{18}{2} = 9$, so $A = \\pi(9)^2 = 81\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: The area formula needs a radius: $r = \\frac{d}{2} = \\frac{18}{2} = 9$ inches.\nStep 2: Substitute into $A = \\pi r^2$: $A = \\pi(9)^2$.\nStep 3: $A = 81\\pi$ square inches. Check: a $9$-inch radius gives a circumference of $18\\pi$, a different quantity with different units.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\pi$): computes $2\\pi r = 18\\pi$, the distance around the circle rather than the region it encloses.\n* Choice C ($162\\pi$): doubles the correct area, as if doubling a radius doubled the area it encloses.\n* Choice D ($324\\pi$): substitutes the diameter for the radius, computing $\\pi(18)^2$.\n\n**Test Day Takeaway:** When a circle question hands you a diameter, halve it in the first line of work — before any squaring happens.",
      skills: ["circle-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the figure, square $ABCD$ is inscribed in the circle with center $O$. If the side length of the square is $6$, what is the area of the circle?",
      diagram: { type: "circleWithSquare", params: { labels: { A: "A", B: "B", C: "C", D: "D", O: "O" }, showDiagonals: true, figureNote: true } },
      choices: [
        // distractor: takes the radius to be half the side, 3
        { id: "A", text: "$9\\pi$" },
        { id: "B", text: "$18\\pi$" },
        // distractor: uses the side length 6 as the radius
        { id: "C", text: "$36\\pi$" },
        // distractor: uses the full diagonal as the radius
        { id: "D", text: "$72\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Which segment of the square stretches all the way across the circle?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The square's diagonal $6\\sqrt{2}$ is a diameter, so the radius is $3\\sqrt{2}$ and the area is $\\pi(3\\sqrt{2})^2 = 18\\pi$.\n\n**The Full Solution:**\nStep 1: All four vertices of the square lie on the circle, so a diagonal of the square, such as $\\overline{AC}$, is a diameter of the circle.\nStep 2: A square with side length $6$ has diagonal $6\\sqrt{2}$, so the radius is $3\\sqrt{2}$.\nStep 3: The area is $\\pi r^2 = \\pi(3\\sqrt{2})^2 = 18\\pi$. Check: $(3\\sqrt{2})^2 = 9 \\cdot 2 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\pi$): uses half the side, $3$, as the radius, which is the distance from $O$ to a side rather than to a vertex.\n* Choice C ($36\\pi$): uses the side length $6$ as the radius.\n* Choice D ($72\\pi$): uses the diagonal $6\\sqrt{2}$ as the radius instead of as the diameter.\n\n**Test Day Takeaway:** When a square is inscribed in a circle, the square's diagonal, not its side, is the circle's diameter.",
      skills: ["circle-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the radius, in centimeters, of each of three circles. The area of circle $C$ is how many times the area of circle $A$?",
      diagram: { type: "dataTable", params: { headers: ["Circle", "Radius (centimeters)"], rows: [["A", "3"], ["B", "5"], ["C", "12"]] } },
      choices: [
        // distractor: compares the radii
        { id: "A", text: "$4$" },
        { id: "B", text: "$16$" },
        // distractor: subtracts the areas
        { id: "C", text: "$135$" },
        // distractor: never divides by the area of circle A
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "B",
      hint: "Scaling a radius does not scale an area by the same factor.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Areas scale as the square of the radius, and the radii are in the ratio $\\frac{12}{3} = 4$, so the areas are in the ratio $4^2 = 16$.\n\n**The Full Solution:**\nStep 1: Circle $A$ has area $\\pi(3)^2 = 9\\pi$ square centimeters.\nStep 2: Circle $C$ has area $\\pi(12)^2 = 144\\pi$ square centimeters.\nStep 3: The ratio is $\\frac{144\\pi}{9\\pi} = 16$. Check: $16 = 4^2$, the square of the radius ratio, as expected.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): compares the radii, $\\frac{12}{3}$, and stops before squaring.\n* Choice C ($135$): subtracts the areas, $144\\pi - 9\\pi$, and reports the coefficient of $\\pi$ instead of dividing.\n* Choice D ($144$): reports the area of circle $C$ divided by $\\pi$ and never divides by the area of circle $A$.\n\n**Test Day Takeaway:** Multiply a radius by $k$ and the area is multiplied by $k^2$. The comparison question is always about the squared factor.",
      skills: ["circle-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, square $ABCD$ is inscribed in a circle with center $O$. The area of the square is $72$. What is the area of the circle?",
      diagram: { type: "circleWithSquare", params: { labels: { A: "A", B: "B", C: "C", D: "D", O: "O" }, showDiagonals: false, figureNote: true } },
      choices: [
        // distractor: uses half a side as the radius
        { id: "A", text: "$18\\pi$" },
        { id: "B", text: "$36\\pi$" },
        // distractor: uses the square area as r squared
        { id: "C", text: "$72\\pi$" },
        // distractor: uses the diagonal as the radius
        { id: "D", text: "$144\\pi$" }
      ],
      correctAnswer: "B",
      hint: "A diameter of the circle is hiding inside the square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The square's side is $\\sqrt{72} = 6\\sqrt{2}$, so its diagonal is $6\\sqrt{2} \\cdot \\sqrt{2} = 12$. That diagonal is a diameter, so $r = 6$ and the circle's area is $36\\pi$.\n\n**The Full Solution:**\nStep 1: From $s^2 = 72$, the side length is $s = 6\\sqrt{2}$.\nStep 2: A square's diagonal is $s\\sqrt{2}$, so the diagonal is $6\\sqrt{2} \\cdot \\sqrt{2} = 12$. All four vertices lie on the circle, so this diagonal passes through $O$ and is a diameter.\nStep 3: The radius is $\\frac{12}{2} = 6$, so the area is $\\pi(6)^2 = 36\\pi$. Check: $r^2 = 36$ is half of $72$, which matches the fact that the square's area is $2r^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\pi$): uses half a side, $3\\sqrt{2}$, as the radius, which reaches only the midpoint of a side, not a vertex.\n* Choice C ($72\\pi$): treats the square's area as $r^2$ and multiplies it by $\\pi$.\n* Choice D ($144\\pi$): uses the whole diagonal $12$ as the radius instead of as the diameter.\n\n**Test Day Takeaway:** For a square inscribed in a circle, the square's diagonal is the circle's diameter. Convert side to diagonal with the factor $\\sqrt{2}$.",
      skills: ["circle-area"]
    }
  ],

  // Section: Circumference & Arc Length
  "Circumference & Arc Length": [
    {
      id: 1,
      difficulty: "easy",
      question: "A circle has a diameter of $2.8$ meters. What is the circumference of the circle, in meters?",
      choices: [
        // distractor: multiplies pi by the radius 1.4 instead of the diameter
        { id: "A", text: "$1.4\\pi$" },
        // distractor: computes the area pi(1.4)^2 = 1.96pi
        { id: "B", text: "$1.96\\pi$" },
        { id: "C", text: "$2.8\\pi$" },
        // distractor: doubles the diameter before multiplying by pi
        { id: "D", text: "$5.6\\pi$" }
      ],
      correctAnswer: "C",
      hint: "Decide whether the given length is a radius or a diameter before choosing a formula.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Circumference is $\\pi d$, so the circumference is $\\pi(2.8) = 2.8\\pi$ meters.\n\n**The Full Solution:**\nStep 1: The circumference of a circle with diameter $d$ is $C = \\pi d$.\nStep 2: Substitute $d = 2.8$: $C = \\pi(2.8)$.\nStep 3: $C = 2.8\\pi$ meters. Check: the radius is $1.4$, and $2\\pi(1.4) = 2.8\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.4\\pi$): multiplies $\\pi$ by the radius $1.4$, which gives only half the circumference.\n* Choice B ($1.96\\pi$): computes the area $\\pi(1.4)^2 = 1.96\\pi$, which is not a length.\n* Choice D ($5.6\\pi$): doubles the diameter as if the given number were the radius.\n\n**Test Day Takeaway:** Check whether the number given is a radius or a diameter before choosing between $2\\pi r$ and $\\pi d$.",
      skills: ["circumference"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The circumference of a circle is $50\\pi$. What is the length of the diameter of the circle?",
      choices: [
        // distractor: reports the radius
        { id: "A", text: "$25$" },
        { id: "B", text: "$50$" },
        // distractor: doubles the diameter
        { id: "C", text: "$100$" },
        // distractor: computes the area
        { id: "D", text: "$625\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Match the quantity you were given to the formula that already contains it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $C = \\pi d$, so $d = \\frac{50\\pi}{\\pi} = 50$.\n\n**The Full Solution:**\nStep 1: Circumference in terms of the diameter is $C = \\pi d$.\nStep 2: Substitute $C = 50\\pi$: $50\\pi = \\pi d$.\nStep 3: Divide both sides by $\\pi$: $d = 50$. Check: with $r = 25$, $2\\pi(25) = 50\\pi$, the given circumference.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): divides by $2\\pi$ and reports the radius, not the diameter the question asked for.\n* Choice C ($100$): doubles the diameter, treating $C = \\pi d$ as if it were $C = 2\\pi d$.\n* Choice D ($625\\pi$): computes the area $\\pi(25)^2$, an area where a length was requested.\n\n**Test Day Takeaway:** Writing $C = \\pi d$ instead of $C = 2\\pi r$ removes a conversion step whenever the diameter is what you want.",
      skills: ["circumference"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the figure shown, $O$ is the center of the circle, the radius of the circle is $15$, and the measure of angle $AOB$ is $72^\\circ$. What is the length of the minor arc $AB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 72, angleLabel: "72°", radius: 15, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
      choices: [
        // distractor: uses pi*r instead of 2*pi*r for the circumference
        { id: "A", text: "$3\\pi$" },
        { id: "B", text: "$6\\pi$" },
        // distractor: uses the diameter 30 in place of the radius
        { id: "C", text: "$12\\pi$" },
        // distractor: reports the whole circumference 30pi
        { id: "D", text: "$30\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Compare the given angle with a full turn of $360^\\circ$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $72^\\circ$ is one fifth of a full turn, and one fifth of $2\\pi(15) = 30\\pi$ is $6\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference of the circle is $2\\pi r = 2\\pi(15) = 30\\pi$.\nStep 2: Minor arc $AB$ is $\\dfrac{72}{360} = \\dfrac{1}{5}$ of the circle.\nStep 3: Multiply: $\\dfrac{1}{5}(30\\pi) = 6\\pi$. Check: five such arcs would total $30\\pi$, the whole circumference ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\pi$): uses $\\pi r = 15\\pi$ as the circumference, half of the true value.\n* Choice C ($12\\pi$): uses the diameter $30$ where the radius belongs, doubling the answer.\n* Choice D ($30\\pi$): reports the entire circumference instead of the fifth of it that the arc covers.\n\n**Test Day Takeaway:** An arc is the same fraction of the circumference as its central angle is of $360^\\circ$.",
      skills: ["arc-length"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the figure shown, $O$ is the center of the circle and the radius of the circle is $9$. The length of minor arc $AB$ is $5\\pi$. What is the measure, in degrees, of angle $AOB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 100, showAngleLabel: false, radius: 9, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
      choices: [
        // distractor: uses 4*pi*r = 36pi as the circumference, halving the fraction
        { id: "A", text: "$50$" },
        { id: "B", text: "$100$" },
        // distractor: uses pi*r = 9pi as the circumference
        { id: "C", text: "$200$" },
        // distractor: reports the major arc's angle, 360 - 100
        { id: "D", text: "$260$" }
      ],
      correctAnswer: "B",
      hint: "First ask what fraction of the whole circumference the arc covers.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The circumference is $18\\pi$, and $\\dfrac{5\\pi}{18\\pi} = \\dfrac{5}{18}$ of $360$ is $100$.\n\n**The Full Solution:**\nStep 1: The circumference is $2\\pi(9) = 18\\pi$.\nStep 2: Minor arc $AB$ is $\\dfrac{5\\pi}{18\\pi} = \\dfrac{5}{18}$ of the circumference.\nStep 3: The central angle is that same fraction of $360$: $\\dfrac{5}{18}(360) = 100$ degrees. Check: $\\dfrac{100}{360}(18\\pi) = 5\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): uses $36\\pi$ as the circumference, doubling the true value and halving the angle.\n* Choice C ($200$): uses $\\pi r = 9\\pi$ as the circumference, so the fraction doubles.\n* Choice D ($260$): gives $360 - 100$, the angle that belongs to the major arc.\n\n**Test Day Takeaway:** Turn an arc length into a fraction of the circumference first; that fraction is also the fraction of $360^\\circ$.",
      skills: ["arc-length"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, points $A$ and $B$ lie on the circle with center $O$. The length of minor arc $AB$ is $6\\pi$, and the length of major arc $AB$ is $18\\pi$. What is the radius of the circle?",
      diagram: { type: "circleWithSector", params: { centralAngle: 90, showAngleLabel: false, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: treats the minor arc as the whole circumference
        { id: "A", text: "$3$" },
        // distractor: treats the major arc as the whole circumference
        { id: "B", text: "$9$" },
        { id: "C", text: "$12$" },
        // distractor: divides by pi instead of 2 pi
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "C",
      hint: "Together, the two arcs account for one full trip around the circle.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The two arcs make up the whole circumference: $6\\pi + 18\\pi = 24\\pi = 2\\pi r$, so $r = 12$.\n\n**The Full Solution:**\nStep 1: Two points split a circle into two arcs whose lengths add to the circumference: $C = 6\\pi + 18\\pi = 24\\pi$.\nStep 2: Set $2\\pi r = 24\\pi$.\nStep 3: Divide by $2\\pi$: $r = 12$. Check: the minor arc is $\\frac{6\\pi}{24\\pi} = \\frac{1}{4}$ of the circle, a $90^{\\circ}$ central angle, which is consistent with a major arc three times as long.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): treats the minor arc alone as the circumference, solving $2\\pi r = 6\\pi$.\n* Choice B ($9$): treats the major arc alone as the circumference, solving $2\\pi r = 18\\pi$.\n* Choice D ($24$): divides the circumference by $\\pi$ rather than by $2\\pi$, reporting the diameter's value as a radius.\n\n**Test Day Takeaway:** Minor arc plus major arc is always the full circumference. Adding them first turns a two-arc problem into a one-step equation.",
      skills: ["arc-length"]
    }
  ],

  // Section: Sector Area
  "Sector Area": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the figure, $O$ is the center of the circle, the radius of the circle is $6$, and the measure of angle $AOB$ is $60^\\circ$. What is the area of sector $AOB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 60, angleLabel: "60°", radius: 6, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", showRadiusLabel: true, figureNote: true } },
      choices: [
        // distractor: computes the arc length (1/6)(12pi) = 2pi
        { id: "A", text: "$2\\pi$" },
        { id: "B", text: "$6\\pi$" },
        // distractor: reports the whole circumference 12pi
        { id: "C", text: "$12\\pi$" },
        // distractor: reports the whole circle's area 36pi
        { id: "D", text: "$36\\pi$" }
      ],
      correctAnswer: "B",
      hint: "How many sectors like this one make up the whole circle?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** One sixth of the circle's area $36\\pi$ is $6\\pi$.\n\n**The Full Solution:**\nStep 1: The whole circle has area $\\pi r^2 = \\pi(6)^2 = 36\\pi$.\nStep 2: A $60^\\circ$ central angle covers $\\dfrac{60}{360} = \\dfrac{1}{6}$ of the circle.\nStep 3: Multiply: $\\dfrac{1}{6}(36\\pi) = 6\\pi$. Check: six such sectors give $6(6\\pi) = 36\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\pi$): computes the arc length, $\\dfrac{1}{6}(12\\pi)$, which is a length rather than an area.\n* Choice C ($12\\pi$): reports the whole circumference.\n* Choice D ($36\\pi$): reports the area of the entire circle rather than the sector.\n\n**Test Day Takeaway:** A sector's area is the same fraction of $\\pi r^2$ as its angle is of $360^\\circ$.",
      skills: ["sector-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circle has a radius of $10$. A sector of this circle has a central angle of $72^{\\circ}$. What is the area of the sector?",
      choices: [
        // distractor: computes the arc length
        { id: "A", text: "$4\\pi$" },
        { id: "B", text: "$20\\pi$" },
        // distractor: doubles the area formula
        { id: "C", text: "$40\\pi$" },
        // distractor: reports the area of the whole circle
        { id: "D", text: "$100\\pi$" }
      ],
      correctAnswer: "B",
      hint: "$72^{\\circ}$ is a friendly fraction of $360^{\\circ}$ — simplify it before multiplying.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\frac{72}{360} = \\frac{1}{5}$, and the circle's area is $100\\pi$, so the sector's area is $20\\pi$.\n\n**The Full Solution:**\nStep 1: The circle's area is $\\pi(10)^2 = 100\\pi$.\nStep 2: The sector's central angle is $\\frac{72}{360} = \\frac{1}{5}$ of a full turn.\nStep 3: The sector's area is $\\frac{1}{5}(100\\pi) = 20\\pi$. Check: five congruent sectors of area $20\\pi$ make up the $100\\pi$ circle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\pi$): takes $\\frac{1}{5}$ of the circumference $20\\pi$, producing a length instead of an area.\n* Choice C ($40\\pi$): uses $2\\pi r^2$ for the circle's area, importing the $2$ from the circumference formula.\n* Choice D ($100\\pi$): reports the area of the whole circle rather than of the sector.\n\n**Test Day Takeaway:** Reduce the angle fraction before you multiply; $\\frac{72}{360} = \\frac{1}{5}$ turns the arithmetic into a single step.",
      skills: ["sector-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the figure shown, $O$ is the center of the circle, and the area of sector $AOB$ is $16\\pi$. What is the radius of the circle?",
      diagram: { type: "circleWithSector", params: { centralAngle: 90, angleLabel: "90°", showRadiusLabel: false, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: solves pi*r^2 = 16pi and forgets the quarter
        { id: "A", text: "$4$" },
        { id: "B", text: "$8$" },
        // distractor: reports the coefficient 16 from the given area
        { id: "C", text: "$16$" },
        // distractor: reports r^2 = 64 instead of r
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      hint: "The area you are given belongs to only part of the circle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** A quarter of $\\pi r^2$ equals $16\\pi$, so $\\pi r^2 = 64\\pi$ and $r = 8$.\n\n**The Full Solution:**\nStep 1: A $90^\\circ$ sector is $\\dfrac{1}{4}$ of the circle, so $\\dfrac{1}{4}\\pi r^2 = 16\\pi$.\nStep 2: Multiply both sides by $4$: $\\pi r^2 = 64\\pi$, so $r^2 = 64$.\nStep 3: Take the positive root: $r = 8$. Check: $\\dfrac{1}{4}\\pi(8)^2 = 16\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves $\\pi r^2 = 16\\pi$, treating the sector's area as the whole circle's.\n* Choice C ($16$): reports the number multiplying $\\pi$ in the given area.\n* Choice D ($64$): reports $r^2$ and skips the square root.\n\n**Test Day Takeaway:** Undo the fraction of the circle first; only then take the square root.",
      skills: ["sector-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A circle has a radius of $5$, and a sector of the circle has an area of $5\\pi$. What is the measure, in degrees, of the central angle of the sector?",
      choices: [
        // distractor: uses 180 degrees for a full turn
        { id: "A", text: "$36$" },
        { id: "B", text: "$72$" },
        // distractor: compares against the circumference
        { id: "C", text: "$180$" },
        // distractor: divides by pi r instead of pi r squared
        { id: "D", text: "$360$" }
      ],
      correctAnswer: "B",
      hint: "Find the whole circle's area first; the sector's share of it sets the angle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The circle's area is $25\\pi$, so the sector is $\\frac{5\\pi}{25\\pi} = \\frac{1}{5}$ of it, and $\\frac{1}{5}(360^{\\circ}) = 72^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The circle's area is $\\pi(5)^2 = 25\\pi$.\nStep 2: The sector's share of the area is $\\frac{5\\pi}{25\\pi} = \\frac{1}{5}$.\nStep 3: That same share of a full turn is $\\frac{1}{5}(360^{\\circ}) = 72^{\\circ}$. Check: $\\frac{72}{360}(25\\pi) = 5\\pi$, the given sector area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): applies the correct fraction $\\frac{1}{5}$ to $180^{\\circ}$ instead of to a full $360^{\\circ}$ turn.\n* Choice C ($180$): divides the sector's area by the circumference $10\\pi$, getting $\\frac{1}{2}$ of a turn.\n* Choice D ($360$): divides by $\\pi r = 5\\pi$ instead of $\\pi r^2$, which makes the sector look like the whole circle.\n\n**Test Day Takeaway:** Compare like with like: an area against an area. Mixing a sector area with a circumference is what produces the half-turn trap.",
      skills: ["sector-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, $O$ is the center of the circle and the measure of angle $AOB$ is $135^{\\circ}$. The area of sector $AOB$ is $54\\pi$. What is the length of the minor arc $AB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 135, showAngleLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: uses pi r for the circumference
        { id: "A", text: "$\\frac{9\\pi}{2}$" },
        { id: "B", text: "$9\\pi$" },
        // distractor: reports the full circumference
        { id: "C", text: "$24\\pi$" },
        // distractor: never takes the square root
        { id: "D", text: "$108\\pi$" }
      ],
      correctAnswer: "B",
      hint: "One radius unlocks both formulas — get it out of the area before you touch the arc.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~50s):** $\\frac{135}{360} = \\frac{3}{8}$, so $\\frac{3}{8}\\pi r^2 = 54\\pi$ gives $r = 12$; the arc is then $\\frac{3}{8}(24\\pi) = 9\\pi$.\n\n**The Full Solution:**\nStep 1: The sector is $\\frac{135}{360} = \\frac{3}{8}$ of the circle, so $\\frac{3}{8}\\pi r^2 = 54\\pi$.\nStep 2: Multiply by $\\frac{8}{3}$: $\\pi r^2 = 144\\pi$, so $r^2 = 144$ and $r = 12$.\nStep 3: The circumference is $2\\pi(12) = 24\\pi$, and the arc is $\\frac{3}{8}(24\\pi) = 9\\pi$. Check: the shortcut $A = \\frac{1}{2}sr$ gives $\\frac{1}{2}(9\\pi)(12) = 54\\pi$, the given area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9\\pi}{2}$): uses $\\pi r = 12\\pi$ as the circumference, halving the arc.\n* Choice C ($24\\pi$): reports the full circumference instead of the $\\frac{3}{8}$ of it that the angle cuts off.\n* Choice D ($108\\pi$): uses $r = 144$ without taking the square root: $\\frac{3}{8}(2\\pi \\cdot 144)$.\n\n**Test Day Takeaway:** The same angle fraction serves area and arc. Solve for $r$ once, then reuse it.",
      skills: ["sector-area"]
    }
  ],

  // Section: Equation of a Circle
  "Equation of a Circle": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the $xy$-plane, the center of a circle is $(-6, 8)$ and the radius of the circle is $10$. Which equation represents this circle?",
      choices: [
        // distractor: copies the center's coordinates with their own signs
        { id: "A", text: "$(x - 6)^2 + (y + 8)^2 = 100$" },
        // distractor: puts the radius 10 on the right instead of 100
        { id: "B", text: "$(x + 6)^2 + (y - 8)^2 = 10$" },
        { id: "C", text: "$(x + 6)^2 + (y - 8)^2 = 100$" },
        // distractor: keeps the +8 sign for the y-coordinate of the center
        { id: "D", text: "$(x + 6)^2 + (y + 8)^2 = 100$" }
      ],
      correctAnswer: "C",
      hint: "Write the center first, then decide what number belongs on the right side.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Center $(-6, 8)$ and radius $10$ give $(x + 6)^2 + (y - 8)^2 = 100$.\n\n**The Full Solution:**\nStep 1: The circle is the set of points exactly $10$ units from its center, $(-6, 8)$.\nStep 2: Standard form is $(x - h)^2 + (y - k)^2 = r^2$ with $h = -6$ and $k = 8$, so the binomials are $x + 6$ and $y - 8$.\nStep 3: Square the radius: $r^2 = 100$, giving $(x + 6)^2 + (y - 8)^2 = 100$. Check: the point $(4, 8)$ is $10$ units away and satisfies $100 + 0 = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: copies the coordinates $-6$ and $8$ directly into the binomials, describing a circle centered at $(6, -8)$.\n* Choice B: writes the radius $10$ on the right side instead of $r^2 = 100$.\n* Choice D: keeps the sign of the $y$-coordinate, placing the center at $(-6, -8)$.\n\n**Test Day Takeaway:** Each binomial holds the opposite of a center coordinate, and the right side is always the square of the radius.",
      skills: ["circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$(x - 9)^2 + (y + 4)^2 = 144$\nIn the $xy$-plane, the graph of the given equation is a circle. What is the radius of the circle?",
      choices: [
        { id: "A", text: "$12$" },
        // distractor: doubles 12 and reports the diameter
        { id: "B", text: "$24$" },
        // distractor: halves 144
        { id: "C", text: "$72$" },
        // distractor: reports 144, which is the square of the radius
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "A",
      hint: "The number on the right side is not the radius itself.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The right side is $r^2 = 144$, so the radius is $\\sqrt{144} = 12$.\n\n**The Full Solution:**\nStep 1: Compare with $(x - h)^2 + (y - k)^2 = r^2$; here $r^2 = 144$.\nStep 2: Take the positive square root: $r = 12$.\nStep 3: The radius of the circle is $12$. Check: the point $(21, -4)$ is $12$ units from the center $(9, -4)$ and satisfies $144 + 0 = 144$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): doubles the radius and reports the diameter.\n* Choice C ($72$): halves $144$ instead of taking its square root.\n* Choice D ($144$): reports $r^2$ straight from the equation.\n\n**Test Day Takeaway:** The right side of the standard form is the square of the radius, so one square root is always owed.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$(x - 2)^2 + (y + 7)^2 = 64$\nThe graph of the given equation in the $xy$-plane is a circle. The point $(2, t)$ lies on the circle, where $t$ is a positive constant. What is the value of $t$?",
      choices: [
        // distractor: takes the negative square root, which the condition t > 0 rules out
        { id: "A", text: "$-15$" },
        { id: "B", text: "$1$" },
        // distractor: reports the radius 8
        { id: "C", text: "$8$" },
        // distractor: solves t + 7 = 64 without taking a square root
        { id: "D", text: "$57$" }
      ],
      correctAnswer: "B",
      hint: "What happens to the first square when $x$ equals $2$?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** At $x = 2$ the first square vanishes, so $(t + 7)^2 = 64$ and the positive choice is $t = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $(2 - 2)^2 + (t + 7)^2 = 64$, so $(t + 7)^2 = 64$.\nStep 2: Take both square roots: $t + 7 = 8$ or $t + 7 = -8$, giving $t = 1$ or $t = -15$.\nStep 3: The problem states $t$ is positive, so $t = 1$. Check: $(2 - 2)^2 + (1 + 7)^2 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): the other square root, ruled out because $t$ must be positive.\n* Choice C ($8$): reports the radius instead of the coordinate.\n* Choice D ($57$): solves $t + 7 = 64$, skipping the square root entirely.\n\n**Test Day Takeaway:** Substituting a coordinate that matches the center kills one square and leaves a simple equation to solve.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$(x + 7)^2 + (y - 3)^2 = 64$\nThe graph of the given equation in the $xy$-plane is a circle. Which of the following is a true statement about this circle?",
      choices: [
        // distractor: assumes the origin is one radius away, though its distance is the square root of 58
        { id: "A", text: "The circle passes through the origin." },
        // distractor: compares the radius 8 with the center's height 3
        { id: "B", text: "The circle is tangent to the $x$-axis." },
        { id: "C", text: "The point $(1, 3)$ lies on the circle." },
        // distractor: reads the center as (-7, -3)
        { id: "D", text: "The center of the circle lies in Quadrant III." }
      ],
      correctAnswer: "C",
      hint: "Start by writing down the center and the radius.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The center is $(-7, 3)$ with radius $8$, and $(1, 3)$ sits exactly $8$ units to its right.\n\n**The Full Solution:**\nStep 1: Standard form gives center $(-7, 3)$ and $r = \\sqrt{64} = 8$.\nStep 2: Test the point: $(1 + 7)^2 + (3 - 3)^2 = 64 + 0 = 64$, which matches the right side.\nStep 3: So $(1, 3)$ lies on the circle. Check: the horizontal distance from $-7$ to $1$ is $8$, exactly the radius ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the origin is $\\sqrt{49 + 9} = \\sqrt{58} \\approx 7.62$ units from the center, not $8$.\n* Choice B: tangency to the $x$-axis would need the center's height $3$ to equal the radius $8$.\n* Choice D: reads the center as $(-7, -3)$; the actual center $(-7, 3)$ lies in Quadrant II.\n\n**Test Day Takeaway:** Extract the center and radius first, then every statement about a circle becomes a one-line check.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A circle in the $xy$-plane has center $(6, k)$ and radius $10$, where $k$ is a constant. If the circle passes through the origin, what are all possible values of $k$?",
      choices: [
        // distractor: keeps only the negative square root
        { id: "A", text: "$-8$ only" },
        // distractor: subtracts 6 from 10 instead of using the distance formula
        { id: "B", text: "$4$ only" },
        // distractor: keeps only the positive square root
        { id: "C", text: "$8$ only" },
        { id: "D", text: "$-8$ and $8$" }
      ],
      correctAnswer: "D",
      hint: "How far is $(6, k)$ from the origin?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** The origin is on the circle, so $6^2 + k^2 = 10^2$, giving $k^2 = 64$ and $k = \\pm 8$.\n\n**The Full Solution:**\nStep 1: The circle is $(x - 6)^2 + (y - k)^2 = 100$.\nStep 2: Substituting $(0, 0)$ gives $36 + k^2 = 100$, so $k^2 = 64$.\nStep 3: Both square roots satisfy every condition, so $k = -8$ or $k = 8$. Check: centers $(6, 8)$ and $(6, -8)$ are each $\\sqrt{36 + 64} = 10$ units from the origin ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$ only): keeps just the negative root, though nothing rules out the positive one.\n* Choice B ($4$ only): subtracts $6$ from $10$ as if the distances added along a line.\n* Choice C ($8$ only): keeps just the positive root.\n\n**Test Day Takeaway:** When a squared unknown is left, report both roots unless the problem rules one out.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Circle Transformations
  "Circle Transformations": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x^2 + y^2 = 49$\nThe graph of the given equation in the $xy$-plane is a circle. The circle is translated $5$ units to the left. Which of the following equations represents the translated circle?",
      choices: [
        { id: "A", text: "$(x + 5)^2 + y^2 = 49$" },
        // distractor: shifts right
        { id: "B", text: "$(x - 5)^2 + y^2 = 49$" },
        // distractor: shifts vertically
        { id: "C", text: "$x^2 + (y + 5)^2 = 49$" },
        // distractor: changes the size too
        { id: "D", text: "$(x + 5)^2 + y^2 = 54$" }
      ],
      correctAnswer: "A",
      hint: "Ask what happens to the center, and only to the center.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The center moves from $(0, 0)$ to $(-5, 0)$ and the radius is unchanged, so the equation is $(x + 5)^2 + y^2 = 49$.\n\n**The Full Solution:**\nStep 1: The original circle has center $(0, 0)$ and radius $7$.\nStep 2: Moving $5$ units left subtracts $5$ from the $x$-coordinate, so the new center is $(-5, 0)$.\nStep 3: With $h = -5$ and $k = 0$, the equation is $(x + 5)^2 + y^2 = 49$. Check: the leftmost point moves from $(-7, 0)$ to $(-12, 0)$, exactly $5$ units left.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x - 5)^2 + y^2 = 49$): $(x - 5)^2$ puts the center at $(5, 0)$, a shift to the right.\n* Choice C ($x^2 + (y + 5)^2 = 49$): moves the circle down instead of left, changing the wrong coordinate.\n* Choice D ($(x + 5)^2 + y^2 = 54$): adds the translation distance to $r^2$, resizing a circle that should only have moved.\n\n**Test Day Takeaway:** A translation touches $h$ and $k$ and never touches $r^2$. Inside the parentheses, the sign is the opposite of the direction of travel.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Circle $P$ in the $xy$-plane has equation $(x - 1)^2 + (y + 6)^2 = 16$. Circle $Q$ is the result of translating circle $P$ so that its center is at $(4, -2)$. Which equation represents circle $Q$?",
      choices: [
        { id: "A", text: "$(x - 4)^2 + (y + 2)^2 = 16$" },
        // distractor: flips the signs of the new center
        { id: "B", text: "$(x + 4)^2 + (y - 2)^2 = 16$" },
        // distractor: replaces r squared with r
        { id: "C", text: "$(x - 4)^2 + (y + 2)^2 = 4$" },
        // distractor: applies the shift twice
        { id: "D", text: "$(x - 7)^2 + (y - 2)^2 = 16$" }
      ],
      correctAnswer: "A",
      hint: "Only one part of the equation is allowed to change here.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The new center is $(4, -2)$ and the radius still satisfies $r^2 = 16$, so the equation is $(x - 4)^2 + (y + 2)^2 = 16$.\n\n**The Full Solution:**\nStep 1: A translation moves the center but preserves the radius, so $r^2 = 16$ carries over unchanged.\nStep 2: Substitute $h = 4$ and $k = -2$ into $(x - h)^2 + (y - k)^2 = r^2$.\nStep 3: The equation is $(x - 4)^2 + (y + 2)^2 = 16$. Check: the center moved from $(1, -6)$ to $(4, -2)$, a shift of $3$ right and $4$ up, which is a rigid motion.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x + 4)^2 + (y - 2)^2 = 16$): flips both signs, placing the center at $(-4, 2)$.\n* Choice C ($(x - 4)^2 + (y + 2)^2 = 4$): replaces $r^2 = 16$ with the radius $4$.\n* Choice D ($(x - 7)^2 + (y - 2)^2 = 16$): computes the shift $(3, 4)$ and applies it a second time, landing the center at $(7, 2)$.\n\n**Test Day Takeaway:** When the destination center is handed to you, write it straight into standard form. Recomputing the shift only creates a chance to apply it twice.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, a circle with center $(0, 0)$ and radius $4$ is dilated about the origin by a scale factor of $3$. Which of the following equations represents the image of the circle?",
      choices: [
        // distractor: substitutes 3x and 3y
        { id: "A", text: "$x^2 + y^2 = \\frac{16}{9}$" },
        // distractor: writes r where r squared belongs
        { id: "B", text: "$x^2 + y^2 = 12$" },
        // distractor: scales r squared only once
        { id: "C", text: "$x^2 + y^2 = 48$" },
        { id: "D", text: "$x^2 + y^2 = 144$" }
      ],
      correctAnswer: "D",
      hint: "A dilation scales the radius, but the equation stores the radius squared.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The radius becomes $3(4) = 12$, so $r^2 = 144$ and the image is $x^2 + y^2 = 144$.\n\n**The Full Solution:**\nStep 1: A dilation centered at the origin with scale factor $3$ multiplies every distance from the origin by $3$, so the radius becomes $12$.\nStep 2: The center stays at the origin, so the equation is $x^2 + y^2 = r^2$ with $r = 12$.\nStep 3: $x^2 + y^2 = 144$. Check: the point $(4, 0)$ maps to $(12, 0)$, and $12^2 + 0 = 144$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 + y^2 = \\frac{16}{9}$): substitutes $3x$ and $3y$ into the original equation, which shrinks the circle by a factor of $3$ instead of enlarging it.\n* Choice B ($x^2 + y^2 = 12$): writes the new radius $12$ on the right side where $r^2$ belongs.\n* Choice C ($x^2 + y^2 = 48$): multiplies $r^2 = 16$ by the scale factor once, giving $48$, instead of by the scale factor squared.\n\n**Test Day Takeaway:** Scale the radius, then square it. Multiplying $r^2$ by $k$ instead of $k^2$ is the classic dilation slip.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Circle $A$ in the $xy$-plane has center $(-3, 6)$ and radius $4$. Circle $B$ is the image of circle $A$ after a translation of $5$ units to the right and $2$ units down. Which equation represents circle $B$?",
      choices: [
        // distractor: writes the radius 4 on the right instead of its square
        { id: "A", text: "$(x - 2)^2 + (y - 4)^2 = 4$" },
        // distractor: reverses the signs of the new center, using (-2, -4)
        { id: "B", text: "$(x + 2)^2 + (y + 4)^2 = 16$" },
        { id: "C", text: "$(x - 2)^2 + (y - 4)^2 = 16$" },
        // distractor: translates 5 left and 2 up, landing the center at (-8, 8)
        { id: "D", text: "$(x + 8)^2 + (y - 8)^2 = 16$" }
      ],
      correctAnswer: "C",
      hint: "Ask what the translation changes and what it leaves alone.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The center moves from $(-3, 6)$ to $(2, 4)$ and the radius stays $4$, so the equation is $(x - 2)^2 + (y - 4)^2 = 16$.\n\n**The Full Solution:**\nStep 1: Moving $5$ units right adds $5$ to the $x$-coordinate: $-3 + 5 = 2$.\nStep 2: Moving $2$ units down subtracts $2$ from the $y$-coordinate: $6 - 2 = 4$.\nStep 3: A translation does not resize a circle, so the radius is still $4$ and the equation is $(x - 2)^2 + (y - 4)^2 = 4^2 = 16$. Check: the center $(2, 4)$ satisfies $x - 2 = 0$ and $y - 4 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($= 4$): puts the radius on the right side instead of the radius squared, $16$.\n* Choice B: reverses the signs inside the squares, which describes a circle centered at $(-2, -4)$.\n* Choice D: translates the center the wrong way, to $(-8, 8)$.\n\n**Test Day Takeaway:** In standard form the numbers inside the parentheses are the opposite of the center's coordinates, and the right side is always the square of the radius.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$(x + 1)^2 + (y - 2)^2 = 49$\nIn the $xy$-plane, the graph of the given equation is the image of circle $C$ after a translation of $6$ units up. Which of the following equations represents circle $C$?",
      choices: [
        // distractor: translates up a second time
        { id: "A", text: "$(x + 1)^2 + (y - 8)^2 = 49$" },
        { id: "B", text: "$(x + 1)^2 + (y + 4)^2 = 49$" },
        // distractor: undoes the shift horizontally
        { id: "C", text: "$(x + 7)^2 + (y - 2)^2 = 49$" },
        // distractor: changes the radius instead of the center
        { id: "D", text: "$(x + 1)^2 + (y - 2)^2 = 43$" }
      ],
      correctAnswer: "B",
      hint: "You are being handed the destination, so run the translation backwards.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The image's center is $(-1, 2)$; undoing a $6$-unit rise puts the original center at $(-1, -4)$, so the original equation is $(x + 1)^2 + (y + 4)^2 = 49$.\n\n**The Full Solution:**\nStep 1: Read the image's center from its equation: $(-1, 2)$, with $r^2 = 49$.\nStep 2: The translation added $6$ to the original $y$-coordinate, so the original $y$-coordinate is $2 - 6 = -4$; the $x$-coordinate is unchanged.\nStep 3: The original circle is $(x + 1)^2 + (y + 4)^2 = 49$. Check: translating $(-1, -4)$ up $6$ units returns $(-1, 2)$, the image's center.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 1)^2 + (y - 8)^2 = 49$): translates up again instead of undoing the move, placing the center at $(-1, 8)$.\n* Choice C ($(x + 7)^2 + (y - 2)^2 = 49$): undoes the shift along the $x$-axis, moving the center to $(-7, 2)$.\n* Choice D ($(x + 1)^2 + (y - 2)^2 = 43$): subtracts $6$ from $r^2$, changing the circle's size rather than its position.\n\n**Test Day Takeaway:** When a question gives you the image, reverse the transformation. Up $6$ is undone by down $6$, and the radius never enters the arithmetic.",
      skills: ["circle-equation", "function-transformations"]
    }
  ],

  // Section: Domain, Range & Intersections
  "Domain, Range & Intersections": [
    {
      id: 1,
      difficulty: "easy",
      question: "$(x + 3)^2 + (y - 1)^2 = 16$\nThe graph of the given equation in the $xy$-plane is a circle. What is the minimum value of $x$ for any point $(x, y)$ on the circle?",
      choices: [
        // distractor: subtracts r squared
        { id: "A", text: "$-19$" },
        { id: "B", text: "$-7$" },
        // distractor: reports the center
        { id: "C", text: "$-3$" },
        // distractor: adds the radius instead
        { id: "D", text: "$1$" }
      ],
      correctAnswer: "B",
      hint: "Picture the leftmost point of the circle relative to its center.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The center is $(-3, 1)$ and the radius is $4$, so the smallest $x$-value is $-3 - 4 = -7$.\n\n**The Full Solution:**\nStep 1: In standard form the center is $(-3, 1)$ and $r^2 = 16$, so $r = 4$.\nStep 2: Horizontally the circle reaches $4$ units on either side of the center, so $x$ ranges from $-3 - 4$ to $-3 + 4$.\nStep 3: The least value is $-7$. Check: at $x = -7$, the equation gives $16 + (y - 1)^2 = 16$, so $y = 1$ and the point $(-7, 1)$ is on the circle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-19$): subtracts $r^2 = 16$ from the center's $x$-coordinate instead of the radius.\n* Choice C ($-3$): reports the center's $x$-coordinate, which is the middle of the range rather than its edge.\n* Choice D ($1$): adds the radius, giving the greatest $x$-value instead of the least.\n\n**Test Day Takeaway:** A circle's $x$-values run from $h - r$ to $h + r$. Take the square root of the constant before you go anywhere near the center.",
      skills: ["circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$(x - 4)^2 + (y + 1)^2 = 9$\nThe graph of the given equation in the $xy$-plane is a circle. Which of the following is the set of all $x$-coordinates of points on the circle?",
      choices: [
        // distractor: reads the center's x-coordinate as -4
        { id: "A", text: "$-7 \\le x \\le -1$" },
        // distractor: uses 9 as the radius instead of 3
        { id: "B", text: "$-5 \\le x \\le 13$" },
        // distractor: centers the interval at the origin instead of at x = 4
        { id: "C", text: "$-3 \\le x \\le 3$" },
        { id: "D", text: "$1 \\le x \\le 7$" }
      ],
      correctAnswer: "D",
      hint: "How far left and right of the center does the circle reach?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The center is at $x = 4$ and the radius is $3$, so $x$ runs from $1$ to $7$.\n\n**The Full Solution:**\nStep 1: Compare with $(x - h)^2 + (y - k)^2 = r^2$: the center is $(4, -1)$ and $r^2 = 9$, so $r = 3$.\nStep 2: No point of the circle is farther than $3$ units from the center, so the $x$-coordinates satisfy $4 - 3 \\le x \\le 4 + 3$.\nStep 3: That is $1 \\le x \\le 7$. Check: the points $(1, -1)$ and $(7, -1)$ both satisfy the equation ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7 \\le x \\le -1$): reads the center's $x$-coordinate as $-4$ instead of $4$.\n* Choice B ($-5 \\le x \\le 13$): uses $9$ as the radius rather than as $r^2$.\n* Choice C ($-3 \\le x \\le 3$): centers the interval at the origin and ignores the shift to $x = 4$.\n\n**Test Day Takeaway:** A circle's $x$-values span one radius on each side of the center's $x$-coordinate.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$(x - 5)^2 + (y - k)^2 = 16$\nIn the given equation, $k$ is a constant. In the $xy$-plane, the graph of the equation is a circle tangent to the $x$-axis with its center above the $x$-axis. What is the value of $k$?",
      choices: [
        // distractor: places the center below the axis, where its y-coordinate is negative
        { id: "A", text: "$-4$" },
        { id: "B", text: "$4$" },
        // distractor: uses the diameter 8 as the distance from the center to the axis
        { id: "C", text: "$8$" },
        // distractor: uses r^2 = 16 as the radius
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "B",
      hint: "How far from the $x$-axis must the center sit for exactly one contact point?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The radius is $4$, so a circle tangent to the $x$-axis with its center above the axis has its center $4$ units up: $k = 4$.\n\n**The Full Solution:**\nStep 1: From $r^2 = 16$, the radius is $4$.\nStep 2: Touching a line at exactly one point means the distance from the center $(5, k)$ to the $x$-axis equals the radius, so $|k| = 4$.\nStep 3: The center is above the axis, so $k = 4$. Check: the lowest point of the circle is $(5, 0)$, and every other point has $y > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): satisfies $|k| = 4$ but puts the center below the axis, contradicting the given condition.\n* Choice C ($8$): uses the diameter as the distance to the axis, which would leave a gap of $4$.\n* Choice D ($16$): uses $r^2$ as the radius.\n\n**Test Day Takeaway:** A circle is tangent to a line exactly when the distance from its center to that line equals its radius.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$(x - 5)^2 + (y + 2)^2 = 25$\nIn the $xy$-plane, at how many points does the graph of the given equation intersect the $y$-axis?",
      choices: [
        // distractor: substitutes x = 0, gets (y + 2)^2 = 0, and reads it as having no solution
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: compares the radius with the center's y-coordinate, 2, instead of its x-coordinate
        { id: "C", text: "Exactly two" },
        // distractor: treats the equation as describing the axis itself rather than a circle
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "How far does the center sit from the $y$-axis?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The center $(5, -2)$ sits $5$ units from the $y$-axis, exactly one radius, so the circle touches the axis once.\n\n**The Full Solution:**\nStep 1: The equation gives center $(5, -2)$ and $r = \\sqrt{25} = 5$.\nStep 2: The distance from $(5, -2)$ to the $y$-axis is the $x$-coordinate of the center, $5$.\nStep 3: Distance equals radius, so the circle meets the $y$-axis at exactly one point. Check: setting $x = 0$ gives $25 + (y + 2)^2 = 25$, whose only solution is $y = -2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): substitutes $x = 0$, reaches $(y + 2)^2 = 0$, and mistakes a zero right side for no solution.\n* Choice C (Exactly two): compares the radius with the center's $y$-coordinate, $-2$, which measures the distance to the wrong axis.\n* Choice D (Infinitely many): would require the graph to be the axis itself rather than a circle.\n\n**Test Day Takeaway:** Compare the distance from the center to a line with the radius: less gives two points, equal gives one, greater gives none.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$x^2 + y^2 = 8$\n$y = x + 4$\nHow many solutions does the given system of equations have?",
      choices: [
        // distractor: drops the 8, solving 2x^2 + 8x + 16 = 0, which has no real roots
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: assumes a line always cuts twice
        { id: "C", text: "Exactly two" },
        // distractor: confuses tangency with coincidence
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "How far is the line from the center of the circle compared with the radius?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Substituting gives $x^2 + (x + 4)^2 = 8$, which simplifies to $(x + 2)^2 = 0$ — a repeated root, so the line is tangent to the circle and the system has exactly one solution.\n\n**The Full Solution:**\nStep 1: Substitute $y = x + 4$ into the circle: $x^2 + (x + 4)^2 = 8$.\nStep 2: Expand and collect: $2x^2 + 8x + 16 = 8$, so $2x^2 + 8x + 8 = 0$ and $x^2 + 4x + 4 = 0$.\nStep 3: This factors as $(x + 2)^2 = 0$, whose only solution is $x = -2$, giving the single solution $(-2, 2)$. Check: the discriminant $4^2 - 4(1)(4) = 0$, the signature of tangency.\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): forgets to subtract $8$ and solves $2x^2 + 8x + 16 = 0$, whose discriminant $64 - 128$ is negative.\n* Choice C (Exactly two): assumes a line that reaches the circle must cross it twice; here the distance from the origin to the line is $2\\sqrt{2}$, exactly the radius.\n* Choice D (Infinitely many): treats a tangent line as if it lay along the circle.\n\n**Test Day Takeaway:** Substitute, collect into a quadratic, and read the discriminant: positive gives two points, zero gives one, negative gives none.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Converting to Standard Form
  "Converting to Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "$x^2 + y^2 - 6x + 20y + 84 = 0$\nIn the $xy$-plane, the graph of the given equation is a circle. What are the coordinates of the center of the circle?",
      choices: [
        // distractor: reads the coefficients off with their signs
        { id: "A", text: "$(-6, 20)$" },
        // distractor: halves but keeps the signs
        { id: "B", text: "$(-3, 10)$" },
        { id: "C", text: "$(3, -10)$" },
        // distractor: negates without halving
        { id: "D", text: "$(6, -20)$" }
      ],
      correctAnswer: "C",
      hint: "Completing the square needs only half of each linear coefficient.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Half of $-6$ is $-3$ and half of $20$ is $10$, so the completed squares are $(x - 3)^2$ and $(y + 10)^2$, putting the center at $(3, -10)$.\n\n**The Full Solution:**\nStep 1: Send the constant across and group like variables: $\\left(x^2 - 6x\\right) + \\left(y^2 + 20y\\right) = -84$.\nStep 2: Add $\\left(\\frac{-6}{2}\\right)^2 = 9$ and $\\left(\\frac{20}{2}\\right)^2 = 100$ to both sides: $(x - 3)^2 + (y + 10)^2 = -84 + 9 + 100$.\nStep 3: The right side is $25$, so the circle is $(x - 3)^2 + (y + 10)^2 = 25$, centered at $(3, -10)$ with radius $5$. Check: expanding that form returns $x^2 + y^2 - 6x + 20y + 84 = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-6, 20)$): reads the linear coefficients straight off the equation, with no halving and no sign change.\n* Choice B ($(-3, 10)$): halves both coefficients but keeps their signs, forgetting that standard form subtracts the center.\n* Choice D ($(6, -20)$): flips the signs of the full coefficients without halving them.\n\n**Test Day Takeaway:** Halve the linear coefficient, then flip its sign. Those two moves take you from general form to the center in one pass.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$x^2 + y^2 + 18x - 4y + 60 = 0$\nIn the $xy$-plane, the graph of the given equation is a circle. What is the radius of the circle?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: reports 25, which is the square of the radius
        { id: "B", text: "$25$" },
        // distractor: reports the constant term 60
        { id: "C", text: "$60$" },
        // distractor: computes 81 + 4 = 85 and never subtracts 60
        { id: "D", text: "$85$" }
      ],
      correctAnswer: "A",
      hint: "Group the $x$-terms and the $y$-terms and complete each square before you read off the radius.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Completing both squares gives $(x + 9)^2 + (y - 2)^2 = 81 + 4 - 60 = 25$, so the radius is $5$.\n\n**The Full Solution:**\nStep 1: Group the terms: $(x^2 + 18x) + (y^2 - 4y) = -60$.\nStep 2: Complete each square by adding $81$ and $4$ to both sides: $(x + 9)^2 + (y - 2)^2 = -60 + 81 + 4$.\nStep 3: The right side is $25$, so $r^2 = 25$ and $r = 5$. Check: the point $(-4, 2)$ satisfies $25 + 0 = 25$ and sits $5$ units from the center $(-9, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): reports $r^2$ rather than $r$.\n* Choice C ($60$): reports the constant term $60$ straight from the equation.\n* Choice D ($85$): adds $81 + 4$ and forgets to move the $60$ across.\n\n**Test Day Takeaway:** After completing both squares the right side is $r^2$, so one square root still remains.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table shows equations of circles $P$ and $Q$ in the $xy$-plane. What is the distance between the centers of the two circles?",
      questionTable: { headers: ["Circle", "Equation"], rows: [["$P$", "$x^2 + y^2 - 12x + 4y + 15 = 0$"], ["$Q$", "$x^2 + y^2 + 4x - 8y + 11 = 0$"]] },
      choices: [
        // distractor: reports only the vertical separation, 6
        { id: "A", text: "$6$" },
        // distractor: reports only the horizontal separation, 8
        { id: "B", text: "$8$" },
        { id: "C", text: "$10$" },
        // distractor: adds 8 + 6 instead of using the Pythagorean theorem
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "C",
      hint: "Only the centers matter here, not the sizes of the circles.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The centers are $(6, -2)$ and $(-2, 4)$, and the $8$-$6$-$10$ right triangle gives a distance of $10$.\n\n**The Full Solution:**\nStep 1: For circle $P$, half of $-12$ is $-6$ and half of $4$ is $2$, so its center is $(6, -2)$.\nStep 2: For circle $Q$, half of $4$ is $2$ and half of $-8$ is $-4$, so its center is $(-2, 4)$.\nStep 3: The separations are $6 - (-2) = 8$ and $-2 - 4 = -6$, so the distance is $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. Check: $64 + 36 = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports only the vertical separation of the centers.\n* Choice B ($8$): reports only the horizontal separation.\n* Choice D ($14$): adds the two separations, $8 + 6$, instead of combining them with the Pythagorean theorem.\n\n**Test Day Takeaway:** The center of $x^2 + y^2 + Dx + Ey + F = 0$ is $\\left(-\\dfrac{D}{2}, -\\dfrac{E}{2}\\right)$ — no completing the square is needed just to locate it.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$x^2 + y^2 + 6x - 16y + 48 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the greatest $y$-coordinate of any point on the circle?",
      choices: [
        // distractor: reports the radius 5
        { id: "A", text: "$5$" },
        // distractor: reports the y-coordinate of the center
        { id: "B", text: "$8$" },
        { id: "C", text: "$13$" },
        // distractor: adds r^2 = 25 to the center's y-coordinate instead of r = 5
        { id: "D", text: "$33$" }
      ],
      correctAnswer: "C",
      hint: "Where on a circle is the $y$-coordinate largest?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The circle is centered at $(-3, 8)$ with radius $5$, so its highest point is at $y = 8 + 5 = 13$.\n\n**The Full Solution:**\nStep 1: Group the terms: $(x^2 + 6x) + (y^2 - 16y) = -48$.\nStep 2: Complete both squares: $(x + 3)^2 + (y - 8)^2 = -48 + 9 + 64 = 25$, so the center is $(-3, 8)$ and the radius is $5$.\nStep 3: Every point lies within $5$ units of the center, so the greatest $y$-coordinate is $8 + 5 = 13$. Check: $(-3, 13)$ gives $0 + 25 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the radius rather than a coordinate of a point on the circle.\n* Choice B ($8$): reports the center's height, which is the middle of the circle, not its top.\n* Choice D ($33$): adds $r^2 = 25$ to the center's height instead of the radius $5$.\n\n**Test Day Takeaway:** The extreme $y$-values on a circle are the center's $y$-coordinate plus and minus the radius.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$x^2 + y^2 - 8x + 10y + c = 0$\nIn the given equation, $c$ is a constant. The graph of the equation in the $xy$-plane is a circle. Which of the following must be true?",
      choices: [
        { id: "A", text: "$c < 41$" },
        // distractor: moves 41 to the wrong side, requiring c < -41
        { id: "B", text: "$c < -41$" },
        // distractor: solves 41 + c > 0 instead of 41 - c > 0
        { id: "C", text: "$c > -41$" },
        // distractor: reverses the inequality after finding 41
        { id: "D", text: "$c > 41$" }
      ],
      correctAnswer: "A",
      hint: "After both squares are completed, what has to be true of the number left on the right side?",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** Completing the squares gives $r^2 = 41 - c$, and $41 - c > 0$ means $c < 41$.\n\n**The Full Solution:**\nStep 1: Group the terms: $(x^2 - 8x) + (y^2 + 10y) = -c$.\nStep 2: Complete both squares by adding $16$ and $25$: $(x - 4)^2 + (y + 5)^2 = 16 + 25 - c = 41 - c$.\nStep 3: The graph is a circle only if its radius is positive, so $41 - c > 0$ and $c < 41$. Check: $c = 40$ gives $r^2 = 1$, a genuine circle, while $c = 41$ collapses the graph to the single point $(4, -5)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($c < -41$): moves $41$ to the wrong side of the inequality.\n* Choice C ($c > -41$): treats the constant as $41 + c$ rather than $41 - c$.\n* Choice D ($c > 41$): finds $41$ correctly but reverses the direction, which makes the right side negative.\n\n**Test Day Takeaway:** A general-form equation is a real circle only while the completed-square right side stays strictly positive.",
      skills: ["completing-square-circles", "circle-equation"]
    }
  ],

  // Section: Tangent Lines
  "Tangent Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "Line $\\ell$ is tangent at point $T$ to a circle with center $O$. Which of the following must be true?",
      choices: [
        // distractor: parallel lines would never touch the radius
        { id: "A", text: "Line $\\ell$ is parallel to $\\overline{OT}$." },
        { id: "B", text: "Line $\\ell$ is perpendicular to $\\overline{OT}$." },
        // distractor: a line through the center is a secant
        { id: "C", text: "Line $\\ell$ contains $\\overline{OT}$." },
        // distractor: bisecting would send the line through the interior
        { id: "D", text: "Line $\\ell$ bisects $\\overline{OT}$." }
      ],
      correctAnswer: "B",
      hint: "A tangent touches at exactly one point, so think about the shortest path from the center to that line.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The radius drawn to the point of tangency is the shortest segment from the center to the line, and the shortest such segment is always perpendicular to the line.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ meets the circle only at $T$, so every other point of the line lies outside the circle.\nStep 2: That makes $OT$ the shortest distance from $O$ to the line, since any other point of the line is farther than one radius from $O$.\nStep 3: The shortest segment from a point to a line is perpendicular to it, so line $\\ell$ is perpendicular to $\\overline{OT}$. Check: every point $P$ on line $\\ell$ other than $T$ lies outside the circle, so $OP > OT$, which is exactly what makes $T$ the foot of the perpendicular.\n\n**Why the wrong answers are tempting:**\n* Choice A: a line parallel to $\\overline{OT}$ could never meet it, yet line $\\ell$ passes through $T$, an endpoint of that radius.\n* Choice C: a line through the center cuts the circle at two points, making it a secant rather than a tangent.\n* Choice D: bisecting $\\overline{OT}$ would force the line through the interior of the circle, producing two intersection points.\n\n**Test Day Takeaway:** Radius drawn to the point of tangency, right angle guaranteed. That right angle is what turns most tangent problems into right-triangle problems.",
      skills: ["tangent-lines"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, a circle with center $(0, 0)$ passes through the point $(3, 4)$. What is the slope of the line that is tangent to the circle at $(3, 4)$?",
      choices: [
        // distractor: negates the radius slope without inverting it
        { id: "A", text: "$-\\dfrac{4}{3}$" },
        { id: "B", text: "$-\\dfrac{3}{4}$" },
        // distractor: inverts the radius slope but keeps it positive
        { id: "C", text: "$\\dfrac{3}{4}$" },
        // distractor: reports the radius slope itself
        { id: "D", text: "$\\dfrac{4}{3}$" }
      ],
      correctAnswer: "B",
      hint: "Draw the radius from the center to $(3, 4)$ first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The radius to $(3, 4)$ has slope $\\dfrac{4}{3}$, so the tangent's slope is $-\\dfrac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The radius runs from $(0, 0)$ to $(3, 4)$, so its slope is $\\dfrac{4 - 0}{3 - 0} = \\dfrac{4}{3}$.\nStep 2: A tangent line is perpendicular to the radius at the point of contact.\nStep 3: The perpendicular slope is the negative reciprocal, $-\\dfrac{3}{4}$. Check: $\\dfrac{4}{3} \\cdot \\left(-\\dfrac{3}{4}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{4}{3}$): negates the radius slope without flipping it.\n* Choice C ($\\dfrac{3}{4}$): flips the radius slope but leaves it positive.\n* Choice D ($\\dfrac{4}{3}$): reports the slope of the radius itself.\n\n**Test Day Takeaway:** Tangent and radius meet at a right angle, so their slopes are negative reciprocals.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Segments $\\overline{PA}$ and $\\overline{PB}$ are tangent to a circle at points $A$ and $B$, respectively. If $PA = 4x - 5$ and $PB = 2x + 7$, what is the length of $\\overline{PA}$?",
      choices: [
        // distractor: reports x
        { id: "A", text: "$6$" },
        { id: "B", text: "$19$" },
        // distractor: drops the constant term
        { id: "C", text: "$24$" },
        // distractor: adds both segments
        { id: "D", text: "$38$" }
      ],
      correctAnswer: "B",
      hint: "Two tangent segments drawn from the same external point are related in a way that gives you an equation.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** Tangent segments from a common external point are congruent, so $4x - 5 = 2x + 7$ gives $x = 6$ and $PA = 4(6) - 5 = 19$.\n\n**The Full Solution:**\nStep 1: $\\overline{PA}$ and $\\overline{PB}$ are tangent to the same circle from the same external point, so $PA = PB$.\nStep 2: Solve $4x - 5 = 2x + 7$: subtracting $2x$ gives $2x - 5 = 7$, so $2x = 12$ and $x = 6$.\nStep 3: $PA = 4(6) - 5 = 19$. Check: $PB = 2(6) + 7 = 19$, the same length.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports the value of $x$ instead of substituting it back into the expression for the length.\n* Choice C ($24$): evaluates $4x$ at $x = 6$ but drops the $-5$.\n* Choice D ($38$): adds $PA$ and $PB$, reporting the combined length of both tangent segments.\n\n**Test Day Takeaway:** Solving for $x$ is the middle of the problem, not the end. Substitute back into whatever expression the question actually names.",
      skills: ["tangent-lines"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Point $T$ lies on a circle with center $O$ and radius $9$. Line $\\ell$ is tangent to the circle at $T$, and point $P$ on line $\\ell$ is $12$ units from $T$. What is the length of $\\overline{OP}$?",
      choices: [
        // distractor: subtracts the lengths
        { id: "A", text: "$3$" },
        { id: "B", text: "$15$" },
        // distractor: adds the lengths
        { id: "C", text: "$21$" },
        // distractor: reports the square
        { id: "D", text: "$225$" }
      ],
      correctAnswer: "B",
      hint: "The radius drawn to the point of tangency meets the tangent line at a right angle.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius and the tangent form a right angle at $T$, so $OP = \\sqrt{9^2 + 12^2} = 15$.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ is tangent at $T$, so it is perpendicular to $\\overline{OT}$, and triangle $OTP$ has a right angle at $T$.\nStep 2: The legs are $OT = 9$ and $TP = 12$, and $\\overline{OP}$ is the hypotenuse: $OP^2 = 81 + 144 = 225$.\nStep 3: $OP = 15$. Check: $9$-$12$-$15$ is the $3$-$4$-$5$ triple scaled by $3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts the two lengths, $12 - 9$, as though the three points were collinear.\n* Choice C ($21$): adds the two lengths, which would be the path from $O$ to $T$ to $P$, not the straight-line distance.\n* Choice D ($225$): reports $OP^2$ without taking the square root.\n\n**Test Day Takeaway:** Draw the radius to the point of tangency and a right triangle appears. Almost every tangent-length question is the Pythagorean theorem in disguise.",
      skills: ["tangent-lines"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, a circle has center $(3, 5)$ and passes through the point $(7, 2)$. Line $\\ell$ is tangent to the circle at $(7, 2)$. Which equation defines line $\\ell$?",
      choices: [
        // distractor: inverts without changing the sign
        { id: "A", text: "$y = -\\frac{4}{3}x + \\frac{34}{3}$" },
        // distractor: uses the radius slope
        { id: "B", text: "$y = -\\frac{3}{4}x + \\frac{29}{4}$" },
        // distractor: changes the sign without inverting
        { id: "C", text: "$y = \\frac{3}{4}x - \\frac{13}{4}$" },
        { id: "D", text: "$y = \\frac{4}{3}x - \\frac{22}{3}$" }
      ],
      correctAnswer: "D",
      hint: "Find the radius's slope first; the tangent line is perpendicular to it at the point where they meet.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~60s):** The radius has slope $\\frac{2 - 5}{7 - 3} = -\\frac{3}{4}$, so the tangent's slope is $\\frac{4}{3}$; through $(7, 2)$ that is $y = \\frac{4}{3}x - \\frac{22}{3}$.\n\n**The Full Solution:**\nStep 1: The radius joins $(3, 5)$ and $(7, 2)$, so its slope is $\\frac{2 - 5}{7 - 3} = -\\frac{3}{4}$.\nStep 2: The tangent line is perpendicular to that radius, so its slope is the negative reciprocal, $\\frac{4}{3}$.\nStep 3: Point-slope form gives $y - 2 = \\frac{4}{3}(x - 7)$, so $y = \\frac{4}{3}x - \\frac{28}{3} + 2 = \\frac{4}{3}x - \\frac{22}{3}$. Check: at $x = 7$, $y = \\frac{28 - 22}{3} = 2$, the point of tangency.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{4}{3}x + \\frac{34}{3}$): inverts the radius's slope but keeps it negative, so the line is not perpendicular.\n* Choice B ($y = -\\frac{3}{4}x + \\frac{29}{4}$): uses the radius's own slope $-\\frac{3}{4}$ for the tangent line.\n* Choice C ($y = \\frac{3}{4}x - \\frac{13}{4}$): changes the sign of the radius's slope without inverting it.\n\n**Test Day Takeaway:** Perpendicular means flip and negate, both moves. Every choice here passes through the point of tangency, so only the slope separates them.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    }
  ]
};
