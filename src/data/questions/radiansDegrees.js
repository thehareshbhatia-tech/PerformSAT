// Practice questions for Radians & Degrees module
// Questions are organized by SECTION (question type)

export const radiansDegreesQuestions = {
  // Section: Converting Angles
  "Converting Angles": [
    {
      id: 1,
      difficulty: "easy",
      question: "Convert 180° to radians.",
      choices: [
        { id: "A", text: "π/2" },
        { id: "B", text: "π" },
        { id: "C", text: "2π" },
        { id: "D", text: "180π" }
      ],
      correctAnswer: "B",
      hint: "To convert degrees to radians, multiply the degree value by π/180. Think about what happens when the numerator and denominator simplify.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $180^\\circ$ is the defining half-circle benchmark: $180^\\circ = \\pi$ radians. Done.\n\n**The Full Solution:**\nStep 1: Convert degrees to radians by multiplying by $\\frac{\\pi}{180}$.\nStep 2: $180^\\circ \\times \\frac{\\pi}{180} = \\frac{180\\pi}{180} = \\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\pi}{2}$): that is $90^\\circ$, a quarter turn — halved one step too far.\n* Choice C ($2\\pi$): that is $360^\\circ$, a full rotation — doubled instead of taken straight across.\n* Choice D ($180\\pi$): multiplied $180 \\times \\pi$ but forgot to divide by $180$.\n\n**Test Day Takeaway:** Anchor every radian conversion to $180^\\circ = \\pi$. From there, $90^\\circ = \\frac{\\pi}{2}$ and $360^\\circ = 2\\pi$ follow instantly.",
      skills: ['degrees-to-radians']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Convert π/6 radians to degrees.",
      choices: [
        { id: "A", text: "30°" },
        { id: "B", text: "45°" },
        { id: "C", text: "60°" },
        { id: "D", text: "90°" }
      ],
      correctAnswer: "A",
      hint: "To convert radians to degrees, multiply by 180/π. Notice that the π in the numerator and denominator will cancel out.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Multiply by $\\frac{180}{\\pi}$ so the $\\pi$ cancels: $\\frac{\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{180}{6} = 30^\\circ$.\n\n**The Full Solution:**\nStep 1: To go radians to degrees, multiply by $\\frac{180}{\\pi}$.\nStep 2: $\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{180}{6} = 30^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($45^\\circ$): that is $\\frac{\\pi}{4}$, not $\\frac{\\pi}{6}$ — a swapped benchmark.\n* Choice C ($60^\\circ$): that is $\\frac{\\pi}{3}$; $\\frac{\\pi}{6}$ and $\\frac{\\pi}{3}$ are the most commonly confused pair.\n* Choice D ($90^\\circ$): that is $\\frac{\\pi}{2}$ — a deeper benchmark mix-up.\n\n**Test Day Takeaway:** Radians to degrees means multiply by $\\frac{180}{\\pi}$. Memorize the four anchors: $\\frac{\\pi}{6}=30^\\circ$, $\\frac{\\pi}{4}=45^\\circ$, $\\frac{\\pi}{3}=60^\\circ$, $\\frac{\\pi}{2}=90^\\circ$.",
      skills: ['radians-to-degrees']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "How many radians are in a full rotation (360°)?",
      choices: [
        { id: "A", text: "π" },
        { id: "B", text: "2π" },
        { id: "C", text: "360π" },
        { id: "D", text: "π/2" }
      ],
      correctAnswer: "B",
      hint: "Remember that 180° equals π radians. A full rotation is twice a half rotation, so think about how that relationship scales.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A half turn is $180^\\circ = \\pi$, so a full turn is double: $360^\\circ = 2\\pi$.\n\n**The Full Solution:**\nStep 1: Convert with $\\frac{\\pi}{180}$: $360^\\circ \\times \\frac{\\pi}{180} = \\frac{360\\pi}{180} = 2\\pi$.\nStep 2: Sanity check against the benchmark — $360^\\circ = 2 \\times 180^\\circ = 2\\pi$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\pi$): that is only $180^\\circ$, a half rotation — forgot to double.\n* Choice C ($360\\pi$): multiplied $360 \\times \\pi$ without dividing by $180$.\n* Choice D ($\\frac{\\pi}{2}$): that is $90^\\circ$, a quarter turn — far short of a full circle.\n\n**Test Day Takeaway:** A full circle is $2\\pi$ radians; a half circle is $\\pi$. These two facts anchor every radian problem.",
      skills: ['radian-measure-understanding', 'degrees-to-radians']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Convert 45° to radians.",
      choices: [
        { id: "A", text: "π/6" },
        { id: "B", text: "π/4" },
        { id: "C", text: "π/3" },
        { id: "D", text: "π/2" }
      ],
      correctAnswer: "B",
      hint: "Use the conversion factor π/180 to convert degrees to radians. After multiplying, simplify the fraction by finding the greatest common factor of 45 and 180.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide the degree measure by $180$ and attach $\\pi$: $\\frac{45}{180} = \\frac{1}{4}$, so $45^\\circ = \\frac{\\pi}{4}$.\n\n**The Full Solution:**\nStep 1: Multiply by $\\frac{\\pi}{180}$: $45^\\circ \\times \\frac{\\pi}{180} = \\frac{45\\pi}{180}$.\nStep 2: Divide top and bottom by $45$: $\\frac{45\\pi}{180} = \\frac{\\pi}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{\\pi}{6}$): that is $30^\\circ$ — a swapped benchmark angle.\n* Choice C ($\\frac{\\pi}{3}$): that is $60^\\circ$ — adjacent to $\\frac{\\pi}{4}$ on the unit circle, an easy mix-up.\n* Choice D ($\\frac{\\pi}{2}$): that is $90^\\circ$ — doubled $45^\\circ$ before converting.\n\n**Test Day Takeaway:** Degrees to radians: put the degree over $180$, simplify, and attach $\\pi$. So $45/180 = 1/4$ gives $\\frac{\\pi}{4}$.",
      skills: ['degrees-to-radians']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Convert 3π/2 radians to degrees.",
      choices: [
        { id: "A", text: "90°" },
        { id: "B", text: "180°" },
        { id: "C", text: "270°" },
        { id: "D", text: "360°" }
      ],
      correctAnswer: "C",
      hint: "Multiply the radian value by 180/π to convert to degrees. The π will cancel, leaving you with a simple arithmetic calculation.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{3\\pi}{2} = 3 \\times \\frac{\\pi}{2} = 3 \\times 90^\\circ = 270^\\circ$.\n\n**The Full Solution:**\nStep 1: Multiply by $\\frac{180}{\\pi}$ so the $\\pi$ cancels: $\\frac{3\\pi}{2} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{2}$.\nStep 2: $\\frac{540}{2} = 270^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($90^\\circ$): that is $\\frac{\\pi}{2}$ — dropped the coefficient $3$.\n* Choice B ($180^\\circ$): that is $\\pi$ — divided away the $\\frac{3}{2}$ or confused it with a half turn.\n* Choice D ($360^\\circ$): that is $2\\pi$ — rounded $\\frac{3\\pi}{2}$ up to a full rotation.\n\n**Test Day Takeaway:** Break a radian multiple into the benchmark times its coefficient: $\\frac{3\\pi}{2} = 3 \\cdot \\frac{\\pi}{2}$, and $\\frac{\\pi}{2} = 90^\\circ$ lands you at $270^\\circ$.",
      skills: ['radians-to-degrees']
    }
  ]
};
