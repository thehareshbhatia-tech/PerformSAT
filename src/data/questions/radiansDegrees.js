// Practice questions for Radians & Degrees module
// Questions are organized by SECTION (question type)

export const radiansDegreesQuestions = {
  // Section: Converting Angles
  "Converting Angles": [
    {
      id: 1,
      difficulty: "easy",
      question: "An angle has a measure of $210^{\\circ}$. What is the measure of this angle, in radians?",
      choices: [
        { id: "A", text: "$\\frac{7\\pi}{12}$" },
        { id: "B", text: "$\\frac{6\\pi}{7}$" },
        { id: "C", text: "$\\frac{7\\pi}{6}$" },
        { id: "D", text: "$\\frac{7\\pi}{3}$" }
      ],
      correctAnswer: "C",
      hint: "A straight angle is $180^{\\circ}$, and a straight angle is also $\\pi$ radians — that pairing is the conversion factor.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply by $\\frac{\\pi}{180}$: $210\\cdot\\frac{\\pi}{180}=\\frac{7\\pi}{6}$ — choice C.\n\n**The Full Solution:**\nStep 1: To move from degrees to radians, multiply the degree measure by $\\frac{\\pi}{180}$: $210\\cdot\\frac{\\pi}{180}=\\frac{210\\pi}{180}$.\nStep 2: Reduce the fraction by $30$: $\\frac{210}{180}=\\frac{7}{6}$, so the measure is $\\frac{7\\pi}{6}$ radians.\nStep 3: Check the size: $\\frac{7\\pi}{6}$ is a little more than $\\pi$, and $\\pi$ radians is $180^{\\circ}$, so the angle should be a little more than $180^{\\circ}$. It is $210^{\\circ}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7\\pi}{12}$): divides by $360$ instead of $180$, using a full rotation where a straight angle belongs: $\\frac{210\\pi}{360}=\\frac{7\\pi}{12}$.\n* Choice B ($\\frac{6\\pi}{7}$): inverts the conversion factor and computes $\\frac{180\\pi}{210}=\\frac{6\\pi}{7}$ — that is degrees per radian, not radians per degree.\n* Choice D ($\\frac{7\\pi}{3}$): divides by $90$ instead of $180$: $\\frac{210\\pi}{90}=\\frac{7\\pi}{3}$, an angle larger than a full rotation.\n\n**Test Day Takeaway:** Degrees to radians multiplies by $\\frac{\\pi}{180}$; radians to degrees multiplies by $\\frac{180}{\\pi}$. Sanity-check the result against $\\pi \\leftrightarrow 180^{\\circ}$ before you commit.",
      skills: ["degrees-to-radians"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "An angle has a measure of $\\frac{5\\pi}{4}$ radians. What is the measure of this angle, in degrees?",
      choices: [
        { id: "A", text: "$45^{\\circ}$" },
        { id: "B", text: "$112.5^{\\circ}$" },
        { id: "C", text: "$225^{\\circ}$" },
        { id: "D", text: "$450^{\\circ}$" }
      ],
      correctAnswer: "C",
      hint: "Multiplying a radian measure by $\\frac{180}{\\pi}$ cancels the $\\pi$ — the arithmetic that is left is easy.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply by $\\frac{180}{\\pi}$: the $\\pi$ cancels and $\\frac{5(180)}{4}=225$ — choice C.\n\n**The Full Solution:**\nStep 1: To move from radians to degrees, multiply by $\\frac{180}{\\pi}$: $\\frac{5\\pi}{4}\\cdot\\frac{180}{\\pi}$.\nStep 2: The factor of $\\pi$ cancels, leaving $\\frac{5(180)}{4}=\\frac{900}{4}=225$ degrees.\nStep 3: Check the size: $\\frac{5\\pi}{4}$ sits between $\\pi$ and $\\frac{3\\pi}{2}$, so the degree measure must sit between $180^{\\circ}$ and $270^{\\circ}$. $225^{\\circ}$ does. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($45^{\\circ}$): converts only the $\\frac{\\pi}{4}$ and drops the factor of $5$ in the numerator.\n* Choice B ($112.5^{\\circ}$): multiplies by $\\frac{90}{\\pi}$, treating $\\pi$ radians as a right angle instead of a straight angle: $\\frac{5(90)}{4}=112.5$.\n* Choice D ($450^{\\circ}$): multiplies by $\\frac{360}{\\pi}$, pairing $\\pi$ with a full rotation: $\\frac{5(360)}{4}=450$, more than one full turn.\n\n**Test Day Takeaway:** Write the conversion as a fraction and let the units cancel: $\\pi$ in the numerator must cancel with $\\pi$ in the denominator, which tells you which way the factor goes.",
      skills: ["radians-to-degrees"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the circle shown, central angle $AOB$ measures $135^{\\circ}$ and the radius of the circle is $8$ centimeters. What is the length, in centimeters, of arc $AB$?",
      diagram: { type: "circleWithSector", params: { centralAngle: 135, radius: 8, showRadiusLabel: true, labelCenter: "O", labelPoint1: "A", labelPoint2: "B" } },
      choices: [
        { id: "A", text: "$\\frac{3\\pi}{4}$" },
        { id: "B", text: "$6\\pi$" },
        { id: "C", text: "$12\\pi$" },
        { id: "D", text: "$24\\pi$" }
      ],
      correctAnswer: "B",
      hint: "The arc-length relationship $s = r\\theta$ only works when $\\theta$ is measured in radians.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $135^{\\circ}=\\frac{3\\pi}{4}$ radians, and $s = r\\theta = 8\\left(\\frac{3\\pi}{4}\\right)=6\\pi$ — choice B.\n\n**The Full Solution:**\nStep 1: Convert the central angle: $135\\cdot\\frac{\\pi}{180}=\\frac{3\\pi}{4}$ radians.\nStep 2: Apply the arc-length relationship with the radian measure: $s = r\\theta = 8\\left(\\frac{3\\pi}{4}\\right)=6\\pi$ centimeters.\nStep 3: Check with the fraction of the circle: the sector is $\\frac{135}{360}=\\frac{3}{8}$ of the circle, and $\\frac{3}{8}$ of the circumference $2\\pi(8)=16\\pi$ is $6\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3\\pi}{4}$): converts the angle correctly but stops there, reporting the radian measure instead of multiplying by the radius.\n* Choice C ($12\\pi$): uses the diameter, $16$, in place of the radius: $16\\left(\\frac{3\\pi}{4}\\right)=12\\pi$.\n* Choice D ($24\\pi$): computes the sector's area, $\\frac{1}{2}r^{2}\\theta=\\frac{1}{2}(64)\\left(\\frac{3\\pi}{4}\\right)=24\\pi$, rather than the arc's length.\n\n**Test Day Takeaway:** Arc length is $r\\theta$ and sector area is $\\frac{1}{2}r^{2}\\theta$ — both demand radians. Convert first, then decide which of the two the question asked for.",
      skills: ["radian-measure-understanding", "degrees-to-radians"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The measure of angle $R$ is $18^{\\circ}$ greater than the measure of angle $S$, and the measure of angle $S$ is $54^{\\circ}$. What is the measure of angle $R$, in radians?",
      choices: [
        { id: "A", text: "$\\frac{\\pi}{5}$" },
        { id: "B", text: "$\\frac{3\\pi}{10}$" },
        { id: "C", text: "$\\frac{2\\pi}{5}$" },
        { id: "D", text: "$\\frac{4\\pi}{5}$" }
      ],
      correctAnswer: "C",
      hint: "Two moves, in order: find the degree measure the question actually asks about, then convert that measure.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $m\\angle R = 54 + 18 = 72$ degrees, and $72\\cdot\\frac{\\pi}{180}=\\frac{2\\pi}{5}$ — choice C.\n\n**The Full Solution:**\nStep 1: Angle $R$ exceeds angle $S$ by $18^{\\circ}$, so $m\\angle R = 54 + 18 = 72$ degrees.\nStep 2: Convert to radians: $72\\cdot\\frac{\\pi}{180}=\\frac{72\\pi}{180}$, which reduces by $36$ to $\\frac{2\\pi}{5}$.\nStep 3: Check: $\\frac{2\\pi}{5}=0.4\\pi$, and $0.4$ of a straight angle is $0.4(180)=72$ degrees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\pi}{5}$): divides by $360$ rather than $180$: $\\frac{72\\pi}{360}=\\frac{\\pi}{5}$.\n* Choice B ($\\frac{3\\pi}{10}$): converts angle $S$, $54^{\\circ}$, instead of angle $R$: $\\frac{54\\pi}{180}=\\frac{3\\pi}{10}$.\n* Choice D ($\\frac{4\\pi}{5}$): divides by $90$ rather than $180$: $\\frac{72\\pi}{90}=\\frac{4\\pi}{5}$, twice the correct measure.\n\n**Test Day Takeaway:** When a question stacks a comparison on top of a conversion, finish the comparison first — converting the wrong angle produces a choice that is always on the list.",
      skills: ["degrees-to-radians"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A circle has a radius of $r$, where $r > 0$. An arc of this circle has a length of $\\frac{7\\pi r}{10}$. What is the degree measure of the central angle that bounds this arc?",
      choices: [
        { id: "A", text: "$\\frac{7\\pi}{10}$" },
        { id: "B", text: "$63^{\\circ}$" },
        { id: "C", text: "$126^{\\circ}$" },
        { id: "D", text: "$252^{\\circ}$" }
      ],
      correctAnswer: "C",
      hint: "Solve $s = r\\theta$ for $\\theta$ before you convert anything — watch what happens to $r$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\theta=\\frac{s}{r}=\\frac{7\\pi}{10}$ radians once $r$ cancels; multiplying by $\\frac{180}{\\pi}$ gives $126$ degrees — choice C.\n\n**The Full Solution:**\nStep 1: Arc length satisfies $s = r\\theta$ with $\\theta$ in radians, so $\\theta = \\frac{s}{r} = \\frac{7\\pi r}{10r} = \\frac{7\\pi}{10}$. The radius cancels, so the angle does not depend on the size of the circle.\nStep 2: Convert that radian measure to degrees: $\\frac{7\\pi}{10}\\cdot\\frac{180}{\\pi}=\\frac{7(180)}{10}=126$ degrees.\nStep 3: Check by fractions of a turn: $126^{\\circ}$ is $\\frac{126}{360}=\\frac{7}{20}$ of the circle, and $\\frac{7}{20}$ of the circumference $2\\pi r$ is $\\frac{7\\pi r}{10}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7\\pi}{10}$): is the correct radian measure, but the question asks for the degree measure — the conversion step is missing.\n* Choice B ($63^{\\circ}$): multiplies by $\\frac{90}{\\pi}$ instead of $\\frac{180}{\\pi}$, pairing $\\pi$ radians with a right angle: $\\frac{7(90)}{10}=63$.\n* Choice D ($252^{\\circ}$): multiplies by $\\frac{360}{\\pi}$, pairing $\\pi$ radians with a full rotation: $\\frac{7(360)}{10}=252$, which is twice too large.\n\n**Test Day Takeaway:** An arc length written as a multiple of $r$ pins the central angle by itself — divide out the radius, then convert. Read the last four words of the stem to see which unit the answer needs.",
      skills: ["radians-to-degrees"]
    }
  ]
};
