// Practice questions for Radians & Degrees module
// Questions are organized by SECTION (question type)

export const radiansDegreesQuestions = {
  // Section: Converting Angles
  "Converting Angles": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the measure, in radians, of an angle that measures $135^{\\circ}$?",
      choices: [
        // distractor: divides by 360 instead of 180: 135 pi / 360 = 3 pi / 8
        { id: "A", text: "$\\frac{3\\pi}{8}$" },
        { id: "B", text: "$\\frac{3\\pi}{4}$" },
        // distractor: inverts the fraction, computing 180 pi / 135 = 4 pi / 3
        { id: "C", text: "$\\frac{4\\pi}{3}$" },
        // distractor: divides by 90 instead of 180: 135 pi / 90 = 3 pi / 2
        { id: "D", text: "$\\frac{3\\pi}{2}$" }
      ],
      correctAnswer: "B",
      hint: "A straight angle is $180^{\\circ}$ and also $\\pi$ radians.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply by $\\frac{\\pi}{180}$: $135 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{4}$.\n\n**The Full Solution:**\nStep 1: A straight angle measures $180^{\\circ}$, which is $\\pi$ radians, so $1^{\\circ} = \\frac{\\pi}{180}$ radians.\nStep 2: Multiply: $135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180}$.\nStep 3: Simplify by dividing numerator and denominator by $45$: $\\frac{3\\pi}{4}$. Check: $\\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = 135$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3\\pi}{8}$): divides by $360$ instead of $180$: $\\frac{135\\pi}{360}$.\n* Choice C ($\\frac{4\\pi}{3}$): inverts the fraction, computing $\\frac{180\\pi}{135}$.\n* Choice D ($\\frac{3\\pi}{2}$): divides by $90$ instead of $180$: $\\frac{135\\pi}{90}$.\n\n**Test Day Takeaway:** Degrees to radians: multiply by $\\frac{\\pi}{180}$. A quick sense check: $135^{\\circ}$ is less than $180^{\\circ}$, so the answer must be less than $\\pi$.",
      skills: ["degrees-to-radians"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "An angle has a measure of $\\frac{5\\pi}{9}$ radians. What is the measure of the angle, in degrees?",
      choices: [
        // distractor: uses 90 degrees in place of pi: 5(90)/9 = 50
        { id: "A", text: "$50$" },
        { id: "B", text: "$100$" },
        // distractor: uses 360 degrees in place of pi: 5(360)/9 = 200
        { id: "C", text: "$200$" },
        // distractor: divides by 3 instead of 9: 5(180)/3 = 300
        { id: "D", text: "$300$" }
      ],
      correctAnswer: "B",
      hint: "Replace $\\pi$ with $180^{\\circ}$ and simplify.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Replace $\\pi$ with $180^{\\circ}$: $\\frac{5(180)}{9} = 100$.\n\n**The Full Solution:**\nStep 1: $\\pi$ radians equals $180^{\\circ}$, so multiply a radian measure by $\\frac{180}{\\pi}$ to get degrees.\nStep 2: Multiply: $\\frac{5\\pi}{9} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{9}$.\nStep 3: Simplify: $\\frac{900}{9} = 100$. Check: $100 \\cdot \\frac{\\pi}{180} = \\frac{5\\pi}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): uses $90^{\\circ}$ in place of $\\pi$: $\\frac{5(90)}{9} = 50$.\n* Choice C ($200$): uses $360^{\\circ}$ in place of $\\pi$: $\\frac{5(360)}{9} = 200$.\n* Choice D ($300$): divides by $3$ instead of $9$: $\\frac{5(180)}{3} = 300$.\n\n**Test Day Takeaway:** Radians to degrees: multiply by $\\frac{180}{\\pi}$, which amounts to replacing $\\pi$ with $180$.",
      skills: ["radians-to-degrees"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The circle shown has center $O$ and a radius of $9$. The measure of angle $AOB$ is $120^{\\circ}$. What is the length of arc $AB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 120, radius: 9, showRadiusLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B" } },
      choices: [
        // distractor: converts the angle to radians but never multiplies by the radius
        { id: "A", text: "$\\frac{2\\pi}{3}$" },
        // distractor: divides by 360 instead of 180 when converting, using pi/3
        { id: "B", text: "$3\\pi$" },
        { id: "C", text: "$6\\pi$" },
        // distractor: uses the diameter, 18, in place of the radius
        { id: "D", text: "$12\\pi$" }
      ],
      correctAnswer: "C",
      hint: "The arc-length relationship $s = r\\theta$ works only when $\\theta$ is in radians.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $120^{\\circ} = \\frac{2\\pi}{3}$ radians, so the arc length is $9 \\cdot \\frac{2\\pi}{3} = 6\\pi$.\n\n**The Full Solution:**\nStep 1: Convert the central angle to radians: $120 \\cdot \\frac{\\pi}{180} = \\frac{2\\pi}{3}$.\nStep 2: Arc length is the radius times the central angle in radians: $s = r\\theta$.\nStep 3: Substitute: $s = 9 \\cdot \\frac{2\\pi}{3} = 6\\pi$. Check with the fraction of the circle: $\\frac{120}{360} = \\frac{1}{3}$ of the circumference $18\\pi$ is $6\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2\\pi}{3}$): converts the angle to radians but never multiplies by the radius.\n* Choice B ($3\\pi$): divides by $360$ instead of $180$ when converting, using $\\frac{\\pi}{3}$ for the angle.\n* Choice D ($12\\pi$): uses the diameter, $18$, in place of the radius.\n\n**Test Day Takeaway:** The formula $s = r\\theta$ requires $\\theta$ in radians; converting first and then multiplying by the radius avoids both common slips.",
      skills: ["radian-measure-understanding", "degrees-to-radians"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The measure of angle $R$ is $\\frac{2\\pi}{9}$ radians. The measure of angle $S$ is $55^{\\circ}$ greater than the measure of angle $R$. What is the measure, in degrees, of angle $S$?",
      choices: [
        // distractor: converts angle R to 40 degrees and stops before adding 55
        { id: "A", text: "$40$" },
        // distractor: uses 90 degrees in place of pi, so R becomes 20 degrees
        { id: "B", text: "$75$" },
        { id: "C", text: "$95$" },
        // distractor: uses 360 degrees in place of pi, so R becomes 80 degrees
        { id: "D", text: "$135$" }
      ],
      correctAnswer: "C",
      hint: "Convert angle $R$ to degrees before you add.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\frac{2\\pi}{9}$ radians is $\\frac{2(180)}{9} = 40^{\\circ}$, so angle $S$ measures $40 + 55 = 95^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Convert angle $R$ to degrees by replacing $\\pi$ with $180^{\\circ}$: $\\frac{2(180)}{9} = 40^{\\circ}$.\nStep 2: Angle $S$ is $55^{\\circ}$ greater than angle $R$.\nStep 3: So angle $S$ measures $40^{\\circ} + 55^{\\circ} = 95^{\\circ}$. Check: $95^{\\circ} - 55^{\\circ} = 40^{\\circ}$, and $40 \\cdot \\frac{\\pi}{180} = \\frac{2\\pi}{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): converts angle $R$ correctly but stops before adding $55^{\\circ}$.\n* Choice B ($75$): uses $90^{\\circ}$ in place of $\\pi$, so angle $R$ becomes $20^{\\circ}$.\n* Choice D ($135$): uses $360^{\\circ}$ in place of $\\pi$, so angle $R$ becomes $80^{\\circ}$.\n\n**Test Day Takeaway:** Put both measures in the same unit before adding; to convert radians to degrees, replace $\\pi$ with $180$.",
      skills: ["degrees-to-radians"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$x^{2} + y^{2} = 100$\nThe given equation represents a circle in the $xy$-plane. An arc of this circle has length $4\\pi$. What is the measure, in degrees, of the central angle that intercepts this arc?",
      choices: [
        // distractor: uses 100 as the radius instead of its square root, so theta = 4 pi / 100
        { id: "A", text: "$7.2$" },
        // distractor: uses the diameter, 20, in place of the radius
        { id: "B", text: "$36$" },
        { id: "C", text: "$72$" },
        // distractor: converts 4 pi to degrees without dividing by the radius
        { id: "D", text: "$720$" }
      ],
      correctAnswer: "C",
      hint: "Find the radius from the equation, then use $s = r\\theta$ before converting.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The radius is $\\sqrt{100} = 10$, so the central angle is $\\frac{4\\pi}{10} = \\frac{2\\pi}{5}$ radians, which is $\\frac{2(180)}{5} = 72^{\\circ}$.\n\n**The Full Solution:**\nStep 1: An equation of the form $x^{2} + y^{2} = r^{2}$ is a circle centered at the origin with radius $r$. Here $r^{2} = 100$, so $r = 10$.\nStep 2: Arc length is $s = r\\theta$ with $\\theta$ in radians, so $4\\pi = 10\\theta$ and $\\theta = \\frac{2\\pi}{5}$.\nStep 3: Convert to degrees: $\\frac{2\\pi}{5} \\cdot \\frac{180}{\\pi} = 72^{\\circ}$. Check with the fraction of the circle: the circumference is $20\\pi$, and $\\frac{72}{360}(20\\pi) = 4\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.2$): uses $100$ as the radius instead of its square root, so $\\theta = \\frac{4\\pi}{100}$.\n* Choice B ($36$): uses the diameter, $20$, in place of the radius.\n* Choice D ($720$): converts $4\\pi$ itself to degrees without dividing by the radius.\n\n**Test Day Takeaway:** Read the radius from $x^{2} + y^{2} = r^{2}$ as a square root, find the angle in radians with $\\theta = \\frac{s}{r}$, and then convert to degrees.",
      skills: ["radians-to-degrees"]
    }
  ]
};
