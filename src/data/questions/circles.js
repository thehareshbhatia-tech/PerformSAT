// Practice questions for Circles module
// Questions are organized by SECTION (question type)

export const circlesQuestions = {
  // Section: Circle Fundamentals
  "Circle Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "A circle has a diameter of $34$ millimeters. What is the length, in millimeters, of a radius of this circle?",
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
      question: "A clock face is a circle with a radius of $11$ inches. What is the length, in inches, of a diameter of the clock face?",
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
      question: "Point $M$ is the center of a circle, and point $N$ lies on that circle. If $MN = 9.5$, what is the length of a diameter of the circle?",
      choices: [
        // distractor: treats MN as a diameter
        { id: "A", text: "$4.75$" },
        // distractor: reports the radius
        { id: "B", text: "$9.5$" },
        { id: "C", text: "$19$" },
        // distractor: squares MN
        { id: "D", text: "$90.25$" }
      ],
      correctAnswer: "C",
      hint: "Decide what kind of segment $\\overline{MN}$ is before you convert anything.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\overline{MN}$ runs from the center to a point on the circle, so it is a radius; the diameter is $2(9.5) = 19$.\n\n**The Full Solution:**\nStep 1: A radius is a segment from the center to any point on the circle, so $MN = 9.5$ is a radius.\nStep 2: A diameter is twice a radius: $d = 2r = 2(9.5)$.\nStep 3: $d = 19$. Check: $\\frac{19}{2} = 9.5$, which matches $MN$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.75$): halves $MN$, treating the given segment as a diameter rather than a radius.\n* Choice B ($9.5$): reports the radius itself and skips the conversion the question asks for.\n* Choice D ($90.25$): squares $9.5$, importing the $r^2$ from the area formula into a length question.\n\n**Test Day Takeaway:** Center-to-circle is always a radius. Classify the segment first; the arithmetic afterwards is one step.",
      skills: ["circle-parts"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a circle, $\\overline{PQ}$ is a chord that does not pass through the center. Which of the following must be true?",
      choices: [
        // distractor: no chord exceeds the diameter
        { id: "A", text: "$\\overline{PQ}$ is longer than a diameter of the circle." },
        // distractor: true only for one special chord length
        { id: "B", text: "$\\overline{PQ}$ has the same length as a radius of the circle." },
        { id: "C", text: "Both endpoints of $\\overline{PQ}$ lie on the circle." },
        // distractor: true for at most one diameter
        { id: "D", text: "$\\overline{PQ}$ is perpendicular to every diameter of the circle." }
      ],
      correctAnswer: "C",
      hint: "Argue from the definition of a chord, not from one particular picture of one.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** A chord is by definition a segment whose two endpoints are on the circle, so Choice C restates the definition.\n\n**The Full Solution:**\nStep 1: A chord joins two points of the circle; every other property depends on which chord you draw.\nStep 2: Test the other statements against a short chord and a long one. A chord near the edge is much shorter than a radius; a chord near the center is nearly as long as a diameter.\nStep 3: Only the endpoint condition survives both tests, so Choice C is the statement that must be true. Check: a chord drawn near the edge of the circle is far shorter than a radius, and one drawn near the center is nearly a diameter, yet both still have their endpoints on the circle.\n\n**Why the wrong answers are tempting:**\n* Choice A: no chord is longer than a diameter, since the diameter is the longest chord a circle has.\n* Choice B: a chord can equal a radius, but only for one specific length; most chords do not.\n* Choice D: exactly one diameter is perpendicular to a given chord (the one through its midpoint), not every diameter.\n\n**Test Day Takeaway:** On a *must be true* question, hunt for the statement that follows from the definition, then break the others with one extreme example.",
      skills: ["circle-parts"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, $\\overline{PQ}$ is a diameter of a circle with center $W$, and point $R$ lies on the circle. If $PQ = 10$ and $PR = 6$, what is the length of $\\overline{QR}$?",
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
      question: "A rotating sprinkler waters a circular region with a radius of $7$ feet. What is the area, in square feet, of the region it waters?",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $A = \\pi r^2 = \\pi(7)^2 = 49\\pi$ square feet.\n\n**The Full Solution:**\nStep 1: The watered region is a full circle, so its area is $A = \\pi r^2$.\nStep 2: The radius is $7$ feet, so $A = \\pi(7)^2$.\nStep 3: $7^2 = 49$, giving $A = 49\\pi$ square feet. Check: doubling the radius to $14$ feet would give $196\\pi$, four times as much — the quadrupling that only an area does.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7\\pi$): uses $\\pi r$ and never squares the radius.\n* Choice B ($14\\pi$): computes the circumference $2\\pi r$, a length rather than an area.\n* Choice D ($343\\pi$): cubes the radius, which is the shape of a volume formula.\n\n**Test Day Takeaway:** Area squares the radius; circumference doubles it. Let the units decide — square feet calls for the squared radius.",
      skills: ["circle-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circular serving tray has a diameter of $18$ inches. What is the area, in square inches, of the tray?",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The radius is $\\frac{18}{2} = 9$, so $A = \\pi(9)^2 = 81\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: The area formula needs a radius: $r = \\frac{d}{2} = \\frac{18}{2} = 9$ inches.\nStep 2: Substitute into $A = \\pi r^2$: $A = \\pi(9)^2$.\nStep 3: $A = 81\\pi$ square inches. Check: a $9$-inch radius gives a circumference of $18\\pi$, a different quantity with different units.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\pi$): computes $2\\pi r = 18\\pi$, the distance around the tray rather than the surface it covers.\n* Choice C ($162\\pi$): doubles the correct area, as if doubling a radius doubled the area it encloses.\n* Choice D ($324\\pi$): substitutes the diameter for the radius, computing $\\pi(18)^2$.\n\n**Test Day Takeaway:** When a circle question hands you a diameter, halve it in the first line of work — before any squaring happens.",
      skills: ["circle-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The area of a circular reflecting pool is $121\\pi$ square meters. What is the circumference, in meters, of the pool?",
      choices: [
        // distractor: stops at the radius and attaches pi
        { id: "A", text: "$11\\pi$" },
        { id: "B", text: "$22\\pi$" },
        // distractor: repeats the given area
        { id: "C", text: "$121\\pi$" },
        // distractor: uses 121 as the radius
        { id: "D", text: "$242\\pi$" }
      ],
      correctAnswer: "B",
      hint: "The radius is the bridge between the two formulas.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\pi r^2 = 121\\pi$ gives $r = 11$, so $C = 2\\pi(11) = 22\\pi$ meters.\n\n**The Full Solution:**\nStep 1: Set the area formula equal to the given area: $\\pi r^2 = 121\\pi$, so $r^2 = 121$.\nStep 2: Take the positive square root: $r = 11$ meters.\nStep 3: Substitute into $C = 2\\pi r$: $C = 2\\pi(11) = 22\\pi$ meters. Check: $\\pi(11)^2 = 121\\pi$, the given area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($11\\pi$): stops at the radius $11$ and attaches a $\\pi$ instead of finishing the circumference formula.\n* Choice C ($121\\pi$): repeats the given area, which measures square meters, not meters.\n* Choice D ($242\\pi$): uses $r = 121$ in $C = 2\\pi r$, skipping the square root.\n\n**Test Day Takeaway:** Area and circumference never talk to each other directly. Solve for $r$ in the middle and both formulas open up.",
      skills: ["circle-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table gives the radius, in centimeters, of each of three circular mirrors. The area of mirror $C$ is how many times the area of mirror $A$?",
      diagram: { type: "dataTable", params: { headers: ["Mirror", "Radius (centimeters)"], rows: [["A", "3"], ["B", "5"], ["C", "12"]] } },
      choices: [
        // distractor: compares the radii
        { id: "A", text: "$4$" },
        { id: "B", text: "$16$" },
        // distractor: subtracts the areas
        { id: "C", text: "$135$" },
        // distractor: never divides by mirror A
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "B",
      hint: "Scaling a radius does not scale an area by the same factor.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Areas scale as the square of the radius, and the radii are in the ratio $\\frac{12}{3} = 4$, so the areas are in the ratio $4^2 = 16$.\n\n**The Full Solution:**\nStep 1: Mirror $A$ has area $\\pi(3)^2 = 9\\pi$ square centimeters.\nStep 2: Mirror $C$ has area $\\pi(12)^2 = 144\\pi$ square centimeters.\nStep 3: The ratio is $\\frac{144\\pi}{9\\pi} = 16$. Check: $16 = 4^2$, the square of the radius ratio, as expected.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): compares the radii, $\\frac{12}{3}$, and stops before squaring.\n* Choice C ($135$): subtracts the areas, $144\\pi - 9\\pi$, and reports the coefficient of $\\pi$ instead of dividing.\n* Choice D ($144$): reports mirror $C$'s area divided by $\\pi$ and never divides by mirror $A$'s area.\n\n**Test Day Takeaway:** Multiply a radius by $k$ and the area is multiplied by $k^2$. The comparison question is always about the squared factor.",
      skills: ["circle-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, square $ABCD$ is inscribed in a circle with center $O$. If the area of square $ABCD$ is $72$ square centimeters, what is the area, in square centimeters, of the circle?",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The square's side is $\\sqrt{72} = 6\\sqrt{2}$, so its diagonal is $6\\sqrt{2} \\cdot \\sqrt{2} = 12$. That diagonal is a diameter, so $r = 6$ and the circle's area is $36\\pi$.\n\n**The Full Solution:**\nStep 1: From $s^2 = 72$, the side length is $s = 6\\sqrt{2}$ centimeters.\nStep 2: A square's diagonal is $s\\sqrt{2}$, so the diagonal is $6\\sqrt{2} \\cdot \\sqrt{2} = 12$ centimeters. Because all four vertices lie on the circle, this diagonal passes through $O$ and is a diameter.\nStep 3: The radius is $\\frac{12}{2} = 6$, so the area is $\\pi(6)^2 = 36\\pi$ square centimeters. Check: $r^2 = 36$ is half of $72$, which matches the fact that the square's area is $2r^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\pi$): uses half a side, $3\\sqrt{2}$, as the radius, which reaches only the midpoint of a side, not a vertex.\n* Choice C ($72\\pi$): treats the square's area as $r^2$ and multiplies it by $\\pi$.\n* Choice D ($144\\pi$): uses the whole diagonal $12$ as the radius instead of as the diameter.\n\n**Test Day Takeaway:** For a square inscribed in a circle, the square's diagonal is the circle's diameter. Convert side to diagonal with the factor $\\sqrt{2}$.",
      skills: ["circle-area"]
    }
  ],

  // Section: Circumference & Arc Length
  "Circumference & Arc Length": [
    {
      id: 1,
      difficulty: "easy",
      question: "A circular fountain has a radius of $13$ feet. What is the circumference, in feet, of the fountain?",
      choices: [
        // distractor: uses pi times r
        { id: "A", text: "$13\\pi$" },
        { id: "B", text: "$26\\pi$" },
        // distractor: uses 2 pi d
        { id: "C", text: "$52\\pi$" },
        // distractor: computes the area
        { id: "D", text: "$169\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Circumference grows with the radius itself, not with its square.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $C = 2\\pi r = 2\\pi(13) = 26\\pi$ feet.\n\n**The Full Solution:**\nStep 1: The circumference of a circle is $C = 2\\pi r$.\nStep 2: Substitute $r = 13$: $C = 2\\pi(13)$.\nStep 3: $C = 26\\pi$ feet. Check: the equivalent form $C = \\pi d$ with $d = 26$ gives the same $26\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($13\\pi$): uses $\\pi r$, dropping the factor of $2$ that turns a radius into a diameter.\n* Choice C ($52\\pi$): applies $2\\pi d$, doubling a length that was already doubled.\n* Choice D ($169\\pi$): computes the area $\\pi r^2$, which is measured in square feet.\n\n**Test Day Takeaway:** $C = 2\\pi r$ and $C = \\pi d$ are the same rule. Whichever you use, the radius appears to the first power.",
      skills: ["circumference"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circular tabletop has a circumference of $50\\pi$ centimeters. What is the length, in centimeters, of a diameter of the tabletop?",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $C = \\pi d$, so $d = \\frac{50\\pi}{\\pi} = 50$ centimeters.\n\n**The Full Solution:**\nStep 1: Circumference in terms of the diameter is $C = \\pi d$.\nStep 2: Substitute $C = 50\\pi$: $50\\pi = \\pi d$.\nStep 3: Divide both sides by $\\pi$: $d = 50$ centimeters. Check: with $r = 25$, $2\\pi(25) = 50\\pi$, the given circumference.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): divides by $2\\pi$ and reports the radius, not the diameter the question asked for.\n* Choice C ($100$): doubles the diameter, treating $C = \\pi d$ as if it were $C = 2\\pi d$.\n* Choice D ($625\\pi$): computes the area $\\pi(25)^2$, an area where a length was requested.\n\n**Test Day Takeaway:** Writing $C = \\pi d$ instead of $C = 2\\pi r$ removes a conversion step whenever the diameter is what you want.",
      skills: ["circumference"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the figure, $O$ is the center of the circle, $OA = 18$, and the measure of $\\angle AOB$ is $40^{\\circ}$. What is the length of minor arc $AB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 40, radius: 18, showRadiusLabel: true, showAngleLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: leaves the radius out
        { id: "A", text: "$\\frac{2\\pi}{9}$" },
        // distractor: uses pi r for the circumference
        { id: "B", text: "$2\\pi$" },
        { id: "C", text: "$4\\pi$" },
        // distractor: reports the whole circumference
        { id: "D", text: "$36\\pi$" }
      ],
      correctAnswer: "C",
      hint: "Compare the central angle with a full turn of $360^{\\circ}$ first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The arc is $\\frac{40}{360} = \\frac{1}{9}$ of the circumference $36\\pi$, so its length is $4\\pi$.\n\n**The Full Solution:**\nStep 1: The circumference is $C = 2\\pi(18) = 36\\pi$.\nStep 2: A central angle of $40^{\\circ}$ cuts off $\\frac{40}{360} = \\frac{1}{9}$ of the circle.\nStep 3: The arc length is $\\frac{1}{9}(36\\pi) = 4\\pi$. Check: nine such arcs would total $36\\pi$, the full circumference.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2\\pi}{9}$): multiplies $\\frac{40}{360}$ by $2\\pi$ but leaves the radius out of the circumference.\n* Choice B ($2\\pi$): uses $\\pi r = 18\\pi$ as the circumference, half of what it should be.\n* Choice D ($36\\pi$): reports the entire circumference instead of the piece the angle cuts off.\n\n**Test Day Takeaway:** Arc length is $\\frac{\\text{central angle}}{360} \\cdot 2\\pi r$. Write the fraction first, and the rest is one multiplication.",
      skills: ["arc-length"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the figure, $O$ is the center of the circle and $OA = 15$. If minor arc $AB$ has length $10\\pi$, what is the measure, in degrees, of $\\angle AOB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 120, radius: 15, showRadiusLabel: true, showAngleLabel: false, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: reports the radian measure
        { id: "A", text: "$\\frac{2\\pi}{3}$" },
        // distractor: uses 180 degrees for a full turn
        { id: "B", text: "$60$" },
        { id: "C", text: "$120$" },
        // distractor: uses pi r as the circumference
        { id: "D", text: "$240$" }
      ],
      correctAnswer: "C",
      hint: "The whole circumference is the yardstick the arc has to be measured against.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The circumference is $30\\pi$, so the arc is $\\frac{10\\pi}{30\\pi} = \\frac{1}{3}$ of the circle, and $\\frac{1}{3}(360^{\\circ}) = 120^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The circumference is $C = 2\\pi(15) = 30\\pi$.\nStep 2: The arc is the fraction $\\frac{10\\pi}{30\\pi} = \\frac{1}{3}$ of the circle.\nStep 3: The central angle is that same fraction of a full turn: $\\frac{1}{3}(360^{\\circ}) = 120^{\\circ}$. Check: $\\frac{120}{360}(30\\pi) = 10\\pi$, the given arc length.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2\\pi}{3}$): solves $s = r\\theta$ and reports the radian measure where degrees were requested.\n* Choice B ($60$): uses $180^{\\circ}$ as a full turn, halving every angle.\n* Choice D ($240$): uses $\\pi r = 15\\pi$ as the circumference, which doubles the fraction to $\\frac{2}{3}$.\n\n**Test Day Takeaway:** Arc-to-circumference and angle-to-$360^{\\circ}$ are the same ratio. Set them equal and solve for whichever one is missing.",
      skills: ["arc-length"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, points $A$ and $B$ divide the circle into a minor arc of length $6\\pi$ and a major arc of length $18\\pi$. What is the radius of the circle?",
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
      question: "In the figure, $O$ is the center of the circle, $OA = 6$, and the measure of $\\angle AOB$ is $120^{\\circ}$. What is the area of sector $AOB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 120, radius: 6, showRadiusLabel: true, showAngleLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B", figureNote: true } },
      choices: [
        // distractor: computes the arc length
        { id: "A", text: "$4\\pi$" },
        { id: "B", text: "$12\\pi$" },
        // distractor: reports the whole circle
        { id: "C", text: "$36\\pi$" },
        // distractor: uses the diameter as the radius
        { id: "D", text: "$48\\pi$" }
      ],
      correctAnswer: "B",
      hint: "Decide first what fraction of the whole circle the sector covers.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The sector is $\\frac{120}{360} = \\frac{1}{3}$ of the circle, whose area is $36\\pi$, so the sector's area is $12\\pi$.\n\n**The Full Solution:**\nStep 1: The circle's area is $\\pi r^2 = \\pi(6)^2 = 36\\pi$.\nStep 2: A central angle of $120^{\\circ}$ takes $\\frac{120}{360} = \\frac{1}{3}$ of that area.\nStep 3: The sector's area is $\\frac{1}{3}(36\\pi) = 12\\pi$. Check: three such sectors tile the circle, and $3(12\\pi) = 36\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\pi$): computes $\\frac{1}{3}$ of the circumference $12\\pi$, which is the arc length, not the area.\n* Choice C ($36\\pi$): reports the area of the entire circle and never applies the fraction.\n* Choice D ($48\\pi$): uses the diameter $12$ in place of the radius: $\\frac{1}{3}\\pi(12)^2$.\n\n**Test Day Takeaway:** Sector area is $\\frac{\\text{central angle}}{360} \\cdot \\pi r^2$. The same fraction with $2\\pi r$ gives the arc — pick the one whose units the question wants.",
      skills: ["sector-area"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A circular stained-glass window has a radius of $10$ inches. One pane of the window is a sector with a central angle of $72^{\\circ}$. What is the area, in square inches, of that pane?",
      choices: [
        // distractor: computes the arc length
        { id: "A", text: "$4\\pi$" },
        { id: "B", text: "$20\\pi$" },
        // distractor: doubles the area formula
        { id: "C", text: "$40\\pi$" },
        // distractor: reports the whole window
        { id: "D", text: "$100\\pi$" }
      ],
      correctAnswer: "B",
      hint: "$72^{\\circ}$ is a friendly fraction of $360^{\\circ}$ — simplify it before multiplying.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\frac{72}{360} = \\frac{1}{5}$, and the window's area is $100\\pi$, so the pane covers $20\\pi$ square inches.\n\n**The Full Solution:**\nStep 1: The window's area is $\\pi(10)^2 = 100\\pi$ square inches.\nStep 2: The pane's central angle is $\\frac{72}{360} = \\frac{1}{5}$ of a full turn.\nStep 3: The pane's area is $\\frac{1}{5}(100\\pi) = 20\\pi$ square inches. Check: five congruent panes of $20\\pi$ each rebuild the $100\\pi$ window.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4\\pi$): takes $\\frac{1}{5}$ of the circumference $20\\pi$, producing a length instead of an area.\n* Choice C ($40\\pi$): uses $2\\pi r^2$ for the circle's area, importing the $2$ from the circumference formula.\n* Choice D ($100\\pi$): reports the area of the whole window rather than of one pane.\n\n**Test Day Takeaway:** Reduce the angle fraction before you multiply; $\\frac{72}{360} = \\frac{1}{5}$ turns the arithmetic into a single step.",
      skills: ["sector-area"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the figure, $O$ is the center of the circle and the measure of $\\angle POQ$ is $60^{\\circ}$. If the area of sector $POQ$ is $24\\pi$, what is the radius of the circle?",
      diagram: { type: "circleWithSector", params: { centralAngle: 60, showAngleLabel: true, labelCenter: "O", labelPoint1: "P", labelPoint2: "Q", figureNote: true } },
      choices: [
        // distractor: ignores the sector fraction
        { id: "A", text: "$2\\sqrt{6}$" },
        { id: "B", text: "$12$" },
        // distractor: uses the arc-length formula
        { id: "C", text: "$72$" },
        // distractor: stops at r squared
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "B",
      hint: "The angle tells you what fraction of the circle's area you were handed.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** The sector is $\\frac{1}{6}$ of the circle, so the circle's area is $6(24\\pi) = 144\\pi$, giving $r^2 = 144$ and $r = 12$.\n\n**The Full Solution:**\nStep 1: A $60^{\\circ}$ central angle takes $\\frac{60}{360} = \\frac{1}{6}$ of the circle, so $\\frac{1}{6}\\pi r^2 = 24\\pi$.\nStep 2: Multiply both sides by $6$: $\\pi r^2 = 144\\pi$, so $r^2 = 144$.\nStep 3: $r = 12$. Check: $\\frac{1}{6}\\pi(12)^2 = \\frac{144\\pi}{6} = 24\\pi$, the given sector area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2\\sqrt{6}$): solves $\\pi r^2 = 24\\pi$ and never undoes the $\\frac{1}{6}$.\n* Choice C ($72$): uses the arc-length formula $\\frac{1}{6}(2\\pi r) = 24\\pi$, which is a length equation.\n* Choice D ($144$): finds $r^2 = 144$ correctly and reports it without taking the square root.\n\n**Test Day Takeaway:** Working backwards from a sector, undo the angle fraction first and the square last.",
      skills: ["sector-area"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a circle of radius $5$, a sector has an area of $5\\pi$ square units. What is the measure, in degrees, of the sector's central angle?",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The circle's area is $25\\pi$, so the sector is $\\frac{5\\pi}{25\\pi} = \\frac{1}{5}$ of it, and $\\frac{1}{5}(360^{\\circ}) = 72^{\\circ}$.\n\n**The Full Solution:**\nStep 1: The circle's area is $\\pi(5)^2 = 25\\pi$ square units.\nStep 2: The sector's share of the area is $\\frac{5\\pi}{25\\pi} = \\frac{1}{5}$.\nStep 3: That same share of a full turn is $\\frac{1}{5}(360^{\\circ}) = 72^{\\circ}$. Check: $\\frac{72}{360}(25\\pi) = 5\\pi$, the given sector area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): applies the correct fraction $\\frac{1}{5}$ to $180^{\\circ}$ instead of to a full $360^{\\circ}$ turn.\n* Choice C ($180$): divides the sector's area by the circumference $10\\pi$, getting $\\frac{1}{2}$ of a turn.\n* Choice D ($360$): divides by $\\pi r = 5\\pi$ instead of $\\pi r^2$, which makes the sector look like the whole circle.\n\n**Test Day Takeaway:** Compare like with like: an area against an area. Mixing a sector area with a circumference is what produces the half-turn trap.",
      skills: ["sector-area"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the figure, $O$ is the center of the circle and the measure of $\\angle AOB$ is $135^{\\circ}$. If the area of sector $AOB$ is $54\\pi$, what is the length of minor arc $AB$?",
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
      question: "In the $xy$-plane, the equation $(x + 7)^2 + (y - 4)^2 = 81$ defines a circle. What are the coordinates of the center of this circle?",
      choices: [
        // distractor: copies the y-term sign as written
        { id: "A", text: "$(-7, -4)$" },
        { id: "B", text: "$(-7, 4)$" },
        // distractor: swaps the coordinates
        { id: "C", text: "$(4, -7)$" },
        // distractor: reads both signs off the equation
        { id: "D", text: "$(7, -4)$" }
      ],
      correctAnswer: "B",
      hint: "Line the equation up term by term against $(x - h)^2 + (y - k)^2 = r^2$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$; matching gives $h = -7$ and $k = 4$, so the center is $(-7, 4)$.\n\n**The Full Solution:**\nStep 1: Rewrite each factor as a subtraction: $(x + 7)^2 = (x - (-7))^2$ and $(y - 4)^2$ is already in that form.\nStep 2: Read off $h = -7$ and $k = 4$.\nStep 3: The center is $(-7, 4)$. Check: substituting the center's coordinates makes both squares zero, as it should.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-7, -4)$): negates the $x$-value correctly but also negates the $4$, even though $(y - 4)^2$ is already in standard form.\n* Choice C ($(4, -7)$): swaps the two coordinates after negating them.\n* Choice D ($(7, -4)$): copies the signs straight out of the equation without negating either one.\n\n**Test Day Takeaway:** Standard form subtracts the center. A plus sign inside the parentheses means a negative coordinate.",
      skills: ["circle-equation"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The graph of $(x - 5)^2 + (y + 9)^2 = 144$ in the $xy$-plane is a circle. What is the radius of the circle?",
      choices: [
        { id: "A", text: "$12$" },
        // distractor: reports the diameter
        { id: "B", text: "$24$" },
        // distractor: halves the constant
        { id: "C", text: "$72$" },
        // distractor: reports r squared
        { id: "D", text: "$144$" }
      ],
      correctAnswer: "A",
      hint: "The number on the right side of the equation is not the radius itself.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The right side is $r^2$, so $r = \\sqrt{144} = 12$.\n\n**The Full Solution:**\nStep 1: In standard form $(x - h)^2 + (y - k)^2 = r^2$, the constant on the right is the square of the radius.\nStep 2: Set $r^2 = 144$.\nStep 3: $r = 12$, taking the positive root because a radius is a length. Check: $12^2 = 144$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): doubles the radius and reports the diameter.\n* Choice C ($72$): halves the constant, treating $144$ as a diameter rather than as $r^2$.\n* Choice D ($144$): reports $r^2$ straight from the equation.\n\n**Test Day Takeaway:** Take the square root before you answer anything about a radius. The equation always stores $r^2$.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, a circle has center $(0, -6)$ and radius $\\frac{5}{2}$. Which of the following equations defines this circle?",
      choices: [
        { id: "A", text: "$x^2 + (y + 6)^2 = \\frac{25}{4}$" },
        // distractor: flips the sign of the center
        { id: "B", text: "$x^2 + (y - 6)^2 = \\frac{25}{4}$" },
        // distractor: never squares the radius
        { id: "C", text: "$x^2 + (y + 6)^2 = \\frac{5}{2}$" },
        // distractor: squares only the numerator
        { id: "D", text: "$x^2 + (y + 6)^2 = \\frac{25}{2}$" }
      ],
      correctAnswer: "A",
      hint: "Two details decide this one: the sign inside the parentheses and whether the radius has been squared.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** With $h = 0$ and $k = -6$, the equation is $x^2 + (y + 6)^2 = \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$.\n\n**The Full Solution:**\nStep 1: Standard form is $(x - h)^2 + (y - k)^2 = r^2$.\nStep 2: Substitute $h = 0$ and $k = -6$: $(x - 0)^2 + (y - (-6))^2 = x^2 + (y + 6)^2$.\nStep 3: Square the radius: $\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$. Check: the point $\\left(0, -\\frac{7}{2}\\right)$ is $\\frac{5}{2}$ above the center, and $0 + \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 + (y - 6)^2 = \\frac{25}{4}$): uses $(y - 6)^2$, which places the center at $(0, 6)$ instead of $(0, -6)$.\n* Choice C ($x^2 + (y + 6)^2 = \\frac{5}{2}$): leaves the radius unsquared on the right side.\n* Choice D ($x^2 + (y + 6)^2 = \\frac{25}{2}$): squares only the numerator of $\\frac{5}{2}$, forgetting that the denominator is squared too.\n\n**Test Day Takeaway:** Square the whole fraction, top and bottom, and let a negative center coordinate become a plus sign inside the parentheses.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of $x^2 + y^2 = 90$ in the $xy$-plane is a circle. What is the radius of the circle, in simplest radical form?",
      choices: [
        { id: "A", text: "$3\\sqrt{10}$" },
        // distractor: halves the constant
        { id: "B", text: "$45$" },
        // distractor: reports r squared
        { id: "C", text: "$90$" },
        // distractor: squares instead of taking a root
        { id: "D", text: "$8{,}100$" }
      ],
      correctAnswer: "A",
      hint: "Look for a perfect-square factor hiding inside $90$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $r = \\sqrt{90} = \\sqrt{9 \\cdot 10} = 3\\sqrt{10}$.\n\n**The Full Solution:**\nStep 1: The circle is centered at the origin with $r^2 = 90$.\nStep 2: Factor out the largest perfect square: $90 = 9 \\cdot 10$.\nStep 3: $r = \\sqrt{9}\\sqrt{10} = 3\\sqrt{10}$. Check: $\\left(3\\sqrt{10}\\right)^2 = 9(10) = 90$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45$): halves $90$, treating the constant as a diameter.\n* Choice C ($90$): reports $r^2$ without taking a square root.\n* Choice D ($8{,}100$): squares $90$ instead of taking its square root.\n\n**Test Day Takeaway:** When $r^2$ is not a perfect square, split off the largest square factor rather than reaching for a decimal.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The point $(2, 0)$ lies on a circle in the $xy$-plane whose center is $(6, -3)$. Which of the following equations defines this circle?",
      choices: [
        // distractor: uses the given point as the center
        { id: "A", text: "$(x - 2)^2 + y^2 = 25$" },
        // distractor: copies the center without negating
        { id: "B", text: "$(x + 6)^2 + (y - 3)^2 = 25$" },
        // distractor: puts r where r squared belongs
        { id: "C", text: "$(x - 6)^2 + (y + 3)^2 = 5$" },
        { id: "D", text: "$(x - 6)^2 + (y + 3)^2 = 25$" }
      ],
      correctAnswer: "D",
      hint: "The two given points do different jobs: one locates the circle, the pair sets its size.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** The radius runs from $(6, -3)$ to $(2, 0)$, so $r^2 = 4^2 + 3^2 = 25$, and standard form about $(6, -3)$ is $(x - 6)^2 + (y + 3)^2 = 25$.\n\n**The Full Solution:**\nStep 1: From center to point, the horizontal change is $2 - 6 = -4$ and the vertical change is $0 - (-3) = 3$.\nStep 2: The distance formula gives $r^2 = (-4)^2 + 3^2 = 16 + 9 = 25$, so $r = 5$ — a $3$-$4$-$5$ triangle.\nStep 3: Standard form is $(x - h)^2 + (y - k)^2 = r^2$ with $h = 6$ and $k = -3$, so the circle is $(x - 6)^2 + (y + 3)^2 = 25$. Check: substituting $(2, 0)$ gives $16 + 9 = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 2)^2 + y^2 = 25$): builds the equation around $(2, 0)$, the point on the circle, instead of around the center.\n* Choice B ($(x + 6)^2 + (y - 3)^2 = 25$): copies the center's coordinates into the parentheses without negating them, placing the center at $(-6, 3)$.\n* Choice C ($(x - 6)^2 + (y + 3)^2 = 5$): writes the radius $5$ on the right where $r^2 = 25$ belongs.\n\n**Test Day Takeaway:** The distance formula hands you $r^2$ directly — the very number standard form wants. Taking a square root here only creates a step you have to undo.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Circle Transformations
  "Circle Transformations": [
    {
      id: 1,
      difficulty: "easy",
      question: "In the $xy$-plane, the circle $x^2 + y^2 = 49$ is translated $5$ units to the left. Which equation defines the image of the circle?",
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
      question: "The circle $(x - 1)^2 + (y + 6)^2 = 16$ is translated in the $xy$-plane so that its center moves to $(4, -2)$. Which equation defines the translated circle?",
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
      question: "In the $xy$-plane, a circle with center at the origin and radius $4$ is dilated about the origin by a scale factor of $3$. Which equation defines the image?",
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
      question: "In the $xy$-plane, the circle $(x + 4)^2 + (y - 1)^2 = 25$ is reflected across the $x$-axis. Which of the following equations defines the image of the circle?",
      choices: [
        // distractor: reflects across the y-axis
        { id: "A", text: "$(x - 4)^2 + (y - 1)^2 = 25$" },
        { id: "B", text: "$(x + 4)^2 + (y + 1)^2 = 25$" },
        // distractor: leaves the circle unchanged
        { id: "C", text: "$(x + 4)^2 + (y - 1)^2 = 25$" },
        // distractor: reflects through the origin
        { id: "D", text: "$(x - 4)^2 + (y + 1)^2 = 25$" }
      ],
      correctAnswer: "B",
      hint: "Track where the center $(-4, 1)$ lands.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Reflecting across the $x$-axis sends the center $(-4, 1)$ to $(-4, -1)$, so the image is $(x + 4)^2 + (y + 1)^2 = 25$.\n\n**The Full Solution:**\nStep 1: The given circle has center $(-4, 1)$ and radius $5$.\nStep 2: A reflection across the $x$-axis keeps $x$ and negates $y$, so the center becomes $(-4, -1)$; the radius is unchanged.\nStep 3: The image is $(x + 4)^2 + (y + 1)^2 = 25$. Check: the original and its image are the same distance from the $x$-axis, one unit above and one unit below.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 4)^2 + (y - 1)^2 = 25$): negates the $x$-coordinate, which is a reflection across the $y$-axis.\n* Choice C ($(x + 4)^2 + (y - 1)^2 = 25$): repeats the original equation, as if the center were already on the axis of reflection.\n* Choice D ($(x - 4)^2 + (y + 1)^2 = 25$): negates both coordinates, which is a reflection through the origin.\n\n**Test Day Takeaway:** Reflecting across the $x$-axis changes the sign of $y$ only. Apply it to the center and copy the radius.",
      skills: ["circle-equation", "function-transformations"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A circle in the $xy$-plane is translated $6$ units up with no change in its size. The image of the translated circle has equation $(x + 1)^2 + (y - 2)^2 = 49$. Which equation defines the original circle?",
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
      question: "In the $xy$-plane, the graph of $(x + 3)^2 + (y - 1)^2 = 16$ is a circle. What is the least possible value of $x$ for a point $(x, y)$ on this circle?",
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
      question: "The graph of $x^2 + (y - 7)^2 = 9$ in the $xy$-plane is a circle. Which of the following describes all possible values of $y$ for points on this circle?",
      choices: [
        // distractor: uses a center of -7
        { id: "A", text: "$-10 \\le y \\le -4$" },
        // distractor: ignores the vertical shift
        { id: "B", text: "$-3 \\le y \\le 3$" },
        // distractor: uses 9 as the radius
        { id: "C", text: "$-2 \\le y \\le 16$" },
        { id: "D", text: "$4 \\le y \\le 10$" }
      ],
      correctAnswer: "D",
      hint: "The center's height sets the middle of the range; the radius sets how far the circle reaches from it.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The center is $(0, 7)$ with radius $3$, so $y$ runs from $7 - 3 = 4$ to $7 + 3 = 10$.\n\n**The Full Solution:**\nStep 1: Matching standard form gives center $(0, 7)$ and $r^2 = 9$, so $r = 3$.\nStep 2: Vertically the circle reaches $3$ units above and below the center: from $7 - 3$ to $7 + 3$.\nStep 3: The values of $y$ satisfy $4 \\le y \\le 10$. Check: at $y = 4$ the equation gives $x^2 + 9 = 9$, so $x = 0$ and $(0, 4)$ is the lowest point.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10 \\le y \\le -4$): reads $(y - 7)^2$ as a downward shift and centers the range at $-7$.\n* Choice B ($-3 \\le y \\le 3$): ignores the shift entirely and centers the range at $0$.\n* Choice C ($-2 \\le y \\le 16$): uses $9$ as the radius rather than as $r^2$, stretching the range to $7 \\pm 9$.\n\n**Test Day Takeaway:** Range for a circle is $k - r$ to $k + r$. Both the center's coordinate and the square root have to be handled before you write the interval.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $x^2 + (y - 3)^2 = 4$ and the line $y = -1$ have how many points of intersection?",
      choices: [
        { id: "A", text: "Zero" },
        // distractor: uses 4 as the radius instead of r squared
        { id: "B", text: "Exactly one" },
        // distractor: ignores the vertical shift
        { id: "C", text: "Exactly two" },
        // distractor: treats the line as part of the circle
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      hint: "Compare the line's distance from the center with the radius.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** The circle has center $(0, 3)$ and radius $2$, so it reaches down only to $y = 1$; the line $y = -1$ passes below it and never meets it.\n\n**The Full Solution:**\nStep 1: In standard form the center is $(0, 3)$ and $r^2 = 4$, so $r = 2$.\nStep 2: Vertically the circle covers $1 \\le y \\le 5$, since it reaches $2$ units above and below the center, and $-1$ is outside that interval.\nStep 3: Substituting confirms it: $x^2 + (-1 - 3)^2 = 4$ gives $x^2 = -12$, which has no real solution, so there are zero points of intersection. Check: the distance from $(0, 3)$ to the line $y = -1$ is $4$, greater than the radius $2$.\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): uses $4$ as the radius instead of as $r^2$, which would stretch the circle down to $y = -1$ and make the line tangent.\n* Choice C (Exactly two): ignores the vertical shift and centers the circle at the origin, where a line $1$ unit below the center would cut a circle of radius $2$ twice.\n* Choice D (Infinitely many): treats the line as though it lay along the circle.\n\n**Test Day Takeaway:** Distance from center to line versus radius decides it: less than gives two points, equal gives one, greater gives none.",
      skills: ["circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph of $x^2 + y^2 = 64$ is a circle centered at the origin. At which points does this circle intersect the $y$-axis?",
      choices: [
        // distractor: uses 64 as the radius
        { id: "A", text: "$(0, -64)$ and $(0, 64)$" },
        { id: "B", text: "$(0, -8)$ and $(0, 8)$" },
        // distractor: reports the x-intercepts
        { id: "C", text: "$(-8, 0)$ and $(8, 0)$" },
        // distractor: halves the radius
        { id: "D", text: "$(0, -4)$ and $(0, 4)$" }
      ],
      correctAnswer: "B",
      hint: "Every point on the $y$-axis has $x = 0$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Setting $x = 0$ gives $y^2 = 64$, so $y = \\pm 8$ and the points are $(0, -8)$ and $(0, 8)$.\n\n**The Full Solution:**\nStep 1: A point on the $y$-axis has $x = 0$.\nStep 2: Substitute: $0^2 + y^2 = 64$, so $y^2 = 64$.\nStep 3: $y = 8$ or $y = -8$, giving $(0, 8)$ and $(0, -8)$. Check: the circle is centered at the origin with radius $8$, so it meets each axis exactly $8$ units out.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -64)$ and $(0, 64)$): uses $64$ itself as the radius instead of taking the square root.\n* Choice C ($(-8, 0)$ and $(8, 0)$): solves for the $x$-intercepts and reports those points instead.\n* Choice D ($(0, -4)$ and $(0, 4)$): halves the radius, as if $8$ were a diameter.\n\n**Test Day Takeaway:** Substituting $x = 0$ turns any curve into its $y$-intercepts. For a circle centered at the origin, they are $\\pm r$.",
      skills: ["circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, the graph of $x^2 + y^2 = 8$ is a circle centered at the origin, and the line $y = x + 4$ is graphed in the same plane. At how many points do the line and the circle intersect?",
      choices: [
        // distractor: misreads the constant as no solution
        { id: "A", text: "Zero" },
        { id: "B", text: "Exactly one" },
        // distractor: assumes a line always cuts twice
        { id: "C", text: "Exactly two" },
        // distractor: confuses tangency with coincidence
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "B",
      hint: "How far is the line from the center compared with the radius?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Substituting gives $x^2 + (x + 4)^2 = 8$, which simplifies to $(x + 2)^2 = 0$ — a repeated root, so the line is tangent and meets the circle once.\n\n**The Full Solution:**\nStep 1: Substitute $y = x + 4$ into the circle: $x^2 + (x + 4)^2 = 8$.\nStep 2: Expand and collect: $2x^2 + 8x + 16 = 8$, so $2x^2 + 8x + 8 = 0$ and $x^2 + 4x + 4 = 0$.\nStep 3: This factors as $(x + 2)^2 = 0$, whose only solution is $x = -2$, giving the single point $(-2, 2)$. Check: the discriminant $4^2 - 4(1)(4) = 0$, the signature of tangency.\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): stops at $2x^2 + 8x + 8 = 0$ and reads the positive constant as evidence of no solution.\n* Choice C (Exactly two): assumes a line that reaches the circle must cross it twice; here the distance from the origin to the line is $2\\sqrt{2}$, exactly the radius.\n* Choice D (Infinitely many): treats a tangent line as if it lay along the circle.\n\n**Test Day Takeaway:** Substitute, collect into a quadratic, and read the discriminant: positive gives two points, zero gives one, negative gives none.",
      skills: ["circle-equation"]
    }
  ],

  // Section: Converting to Standard Form
  "Converting to Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "A circle in the $xy$-plane is defined by the equation $x^2 + y^2 - 6x + 20y + 84 = 0$. What are the coordinates of the center of this circle?",
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
      question: "In the $xy$-plane, the equation $x^2 + y^2 - 12x + 4y - 9 = 0$ defines a circle. What is the radius of this circle?",
      choices: [
        // distractor: takes the root of the constant
        { id: "A", text: "$3$" },
        // distractor: never moves the constant
        { id: "B", text: "$2\\sqrt{10}$" },
        { id: "C", text: "$7$" },
        // distractor: reports r squared
        { id: "D", text: "$49$" }
      ],
      correctAnswer: "C",
      hint: "The constant term has to move across the equal sign before the squares are completed.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x - 6)^2 + (y + 2)^2 = 9 + 36 + 4 = 49$, so $r = 7$.\n\n**The Full Solution:**\nStep 1: Move the constant: $\\left(x^2 - 12x\\right) + \\left(y^2 + 4y\\right) = 9$.\nStep 2: Add $\\left(\\frac{-12}{2}\\right)^2 = 36$ and $\\left(\\frac{4}{2}\\right)^2 = 4$ to both sides: $(x - 6)^2 + (y + 2)^2 = 9 + 36 + 4$.\nStep 3: $r^2 = 49$, so $r = 7$. Check: expanding $(x - 6)^2 + (y + 2)^2 = 49$ gives $x^2 + y^2 - 12x + 4y - 9 = 0$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): takes the square root of the constant term $9$ and calls it the radius.\n* Choice B ($2\\sqrt{10}$): leaves the $-9$ on the left, using $r^2 = 36 + 4 = 40$.\n* Choice D ($49$): reports $r^2$ instead of the radius.\n\n**Test Day Takeaway:** Every constant you add on the left must also be added on the right, and the original constant moves over first.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The equation $x^2 + y^2 + 16y = 0$ defines a circle in the $xy$-plane whose center lies on the $y$-axis. What is the radius of this circle?",
      choices: [
        // distractor: halves the completed value
        { id: "A", text: "$4$" },
        { id: "B", text: "$8$" },
        // distractor: reports the coefficient
        { id: "C", text: "$16$" },
        // distractor: reports r squared
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "B",
      hint: "There is no $x$-term to complete here — only the $y$-terms need work.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $x^2 + (y + 8)^2 = 64$, so $r = 8$.\n\n**The Full Solution:**\nStep 1: The $x$-terms are already a perfect square, so only $y^2 + 16y$ needs completing.\nStep 2: Add $\\left(\\frac{16}{2}\\right)^2 = 64$ to both sides: $x^2 + (y + 8)^2 = 64$.\nStep 3: $r^2 = 64$, so $r = 8$. Check: the circle has center $(0, -8)$ and passes through the origin, whose distance from $(0, -8)$ is $8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): halves the $8$ from the completed square, treating it as a diameter.\n* Choice C ($16$): reports the coefficient of $y$ from the original equation.\n* Choice D ($64$): reports $r^2$ without taking the square root.\n\n**Test Day Takeaway:** A missing linear term means that variable's square is already complete. Add to both sides only for the variable that needs it.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The equation $x^2 + y^2 + 6x - 8y + 21 = 0$ defines a circle in the $xy$-plane. What is the value of $r^2$ for this circle?",
      choices: [
        // distractor: reports the radius
        { id: "A", text: "$2$" },
        { id: "B", text: "$4$" },
        // distractor: never moves the 21
        { id: "C", text: "$25$" },
        // distractor: adds 21 instead of subtracting
        { id: "D", text: "$46$" }
      ],
      correctAnswer: "B",
      hint: "Whatever you add on the left has to show up on the right as well.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Completing the squares gives $(x + 3)^2 + (y - 4)^2 = -21 + 9 + 16 = 4$, so $r^2 = 4$.\n\n**The Full Solution:**\nStep 1: Move the constant: $\\left(x^2 + 6x\\right) + \\left(y^2 - 8y\\right) = -21$.\nStep 2: Add $\\left(\\frac{6}{2}\\right)^2 = 9$ and $\\left(\\frac{-8}{2}\\right)^2 = 16$ to both sides: $(x + 3)^2 + (y - 4)^2 = -21 + 9 + 16$.\nStep 3: $r^2 = 4$. Check: expanding $(x + 3)^2 + (y - 4)^2 = 4$ gives $x^2 + 6x + 9 + y^2 - 8y + 16 = 4$, which rearranges to the original equation.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the radius $r = 2$ rather than $r^2$, which is what the question asked for.\n* Choice C ($25$): adds $9 + 16$ but never moves the $+21$ to the right side.\n* Choice D ($46$): adds $21$ to $9 + 16$ instead of subtracting it.\n\n**Test Day Takeaway:** The right side after completing both squares is $r^2$, not $r$. Read the question to see which one it wants.",
      skills: ["completing-square-circles", "circle-equation"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A circle in the $xy$-plane has center $(4, -1)$ and radius $6$. Which of the following equations, written in general form, defines this circle?",
      choices: [
        { id: "A", text: "$x^2 + y^2 - 8x + 2y - 19 = 0$" },
        // distractor: uses r instead of r squared
        { id: "B", text: "$x^2 + y^2 - 8x + 2y + 11 = 0$" },
        // distractor: adds 36 instead of subtracting
        { id: "C", text: "$x^2 + y^2 - 8x + 2y + 53 = 0$" },
        // distractor: flips the linear signs
        { id: "D", text: "$x^2 + y^2 + 8x - 2y - 19 = 0$" }
      ],
      correctAnswer: "A",
      hint: "Write the standard form first, then expand and collect every constant.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~45s):** Standard form is $(x - 4)^2 + (y + 1)^2 = 36$; expanding gives $x^2 + y^2 - 8x + 2y + 17 = 36$, or $x^2 + y^2 - 8x + 2y - 19 = 0$.\n\n**The Full Solution:**\nStep 1: With center $(4, -1)$ and $r = 6$, standard form is $(x - 4)^2 + (y + 1)^2 = 36$.\nStep 2: Expand: $x^2 - 8x + 16 + y^2 + 2y + 1 = 36$.\nStep 3: Collect and move everything to one side: $x^2 + y^2 - 8x + 2y + 17 - 36 = 0$, so the constant is $-19$. Check: half of $-8$ is $-4$ and half of $2$ is $1$, returning the center $(4, -1)$, and $16 + 1 + 19 = 36 = r^2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 + y^2 - 8x + 2y + 11 = 0$): uses the radius $6$ in place of $r^2 = 36$, leaving a constant of $17 - 6 = 11$.\n* Choice C ($x^2 + y^2 - 8x + 2y + 53 = 0$): adds $36$ instead of subtracting it, giving $17 + 36 = 53$.\n* Choice D ($x^2 + y^2 + 8x - 2y - 19 = 0$): flips the signs of both linear terms, which relocates the center to $(-4, 1)$.\n\n**Test Day Takeaway:** Going from standard to general form, the constant is $h^2 + k^2 - r^2$. Expanding carefully beats guessing the sign.",
      skills: ["completing-square-circles", "circle-equation"]
    }
  ],

  // Section: Tangent Lines
  "Tangent Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "A line is tangent to a circle at point $T$, and $O$ is the center of the circle. Which of the following must be true about the tangent line and $\\overline{OT}$?",
      choices: [
        // distractor: parallel lines would never touch the radius
        { id: "A", text: "The tangent line is parallel to $\\overline{OT}$." },
        { id: "B", text: "The tangent line is perpendicular to $\\overline{OT}$." },
        // distractor: a line through the center is a secant
        { id: "C", text: "The tangent line contains $\\overline{OT}$." },
        // distractor: bisecting would send the line through the interior
        { id: "D", text: "The tangent line bisects $\\overline{OT}$." }
      ],
      correctAnswer: "B",
      hint: "A tangent touches at exactly one point, so think about the shortest path from the center to that line.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The radius drawn to the point of tangency is the shortest segment from the center to the line, and the shortest such segment is always perpendicular to the line.\n\n**The Full Solution:**\nStep 1: A tangent line meets the circle only at $T$, so every other point of the line lies outside the circle.\nStep 2: That makes $OT$ the shortest distance from $O$ to the line, since any other point of the line is farther than one radius from $O$.\nStep 3: The shortest segment from a point to a line is perpendicular to it, so the tangent line is perpendicular to $\\overline{OT}$. Check: every point $P$ on the tangent line other than $T$ lies outside the circle, so $OP > OT$, which is exactly what makes $T$ the foot of the perpendicular.\n\n**Why the wrong answers are tempting:**\n* Choice A: a line parallel to $\\overline{OT}$ could never meet it, yet the tangent line passes through $T$, an endpoint of that radius.\n* Choice C: a line through the center cuts the circle at two points, making it a secant rather than a tangent.\n* Choice D: bisecting $\\overline{OT}$ would force the line through the interior of the circle, producing two intersection points.\n\n**Test Day Takeaway:** Radius drawn to the point of tangency, right angle guaranteed. That right angle is what turns most tangent problems into right-triangle problems.",
      skills: ["tangent-lines"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, a circle has center $(2, -1)$, and a line is tangent to the circle at the point $(5, 3)$. What is the slope of the radius drawn to the point of tangency?",
      choices: [
        // distractor: negates the slope
        { id: "A", text: "$-\\frac{4}{3}$" },
        // distractor: gives the tangent line slope
        { id: "B", text: "$-\\frac{3}{4}$" },
        // distractor: divides run by rise
        { id: "C", text: "$\\frac{3}{4}$" },
        { id: "D", text: "$\\frac{4}{3}$" }
      ],
      correctAnswer: "D",
      hint: "The radius runs from the center to the point of tangency, so only those two points matter here.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** The radius joins $(2, -1)$ and $(5, 3)$, so its slope is $\\frac{3 - (-1)}{5 - 2} = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: The radius to the point of tangency has endpoints $(2, -1)$ and $(5, 3)$.\nStep 2: Slope is $\\frac{y_2 - y_1}{x_2 - x_1} = \\frac{3 - (-1)}{5 - 2}$.\nStep 3: The slope is $\\frac{4}{3}$. Check: moving $3$ right and $4$ up from $(2, -1)$ lands exactly on $(5, 3)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): negates the rise, as if the point of tangency were below the center.\n* Choice B ($-\\frac{3}{4}$): reports the slope of the tangent line, which is the negative reciprocal of what was asked.\n* Choice C ($\\frac{3}{4}$): divides the run by the rise instead of the rise by the run.\n\n**Test Day Takeaway:** Read which segment the question wants. The radius and the tangent line at the same point have negative reciprocal slopes, so mixing them up is a one-character error with a whole-answer cost.",
      skills: ["tangent-lines", "perpendicular-negative-reciprocal"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "From a point $P$ outside a circle, tangent segments $\\overline{PA}$ and $\\overline{PB}$ are drawn, touching the circle at $A$ and $B$. If $PA = 4x - 5$ and $PB = 2x + 7$, what is the length of $\\overline{PA}$?",
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
      question: "A line is tangent to a circle of radius $9$ at point $T$, and point $P$ lies on that tangent line with $PT = 12$. What is the distance from the center of the circle to $P$?",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius and the tangent form a right angle at $T$, so $OP = \\sqrt{9^2 + 12^2} = 15$.\n\n**The Full Solution:**\nStep 1: Let $O$ be the center. Because the tangent line is perpendicular to $\\overline{OT}$, triangle $OTP$ has a right angle at $T$.\nStep 2: The legs are $OT = 9$ and $TP = 12$, and $\\overline{OP}$ is the hypotenuse: $OP^2 = 81 + 144 = 225$.\nStep 3: $OP = 15$. Check: $9$-$12$-$15$ is the $3$-$4$-$5$ triple scaled by $3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts the two lengths, $12 - 9$, as though the three points were collinear.\n* Choice C ($21$): adds the two lengths, which would be the path from $O$ to $T$ to $P$, not the straight-line distance.\n* Choice D ($225$): reports $OP^2$ without taking the square root.\n\n**Test Day Takeaway:** Draw the radius to the point of tangency and a right triangle appears. Almost every tangent-length question is the Pythagorean theorem in disguise.",
      skills: ["tangent-lines"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, a circle with center $(3, 5)$ passes through the point $(7, 2)$. Which of the following equations defines the line that is tangent to this circle at $(7, 2)$?",
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
