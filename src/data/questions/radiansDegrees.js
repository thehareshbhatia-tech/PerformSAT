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
      explanation: "**Choice B is correct.** Convert degrees to radians using the conversion factor $\\frac{\\pi}{180}$.\n\n**Step 1:** Multiply by the conversion factor:\n$$180° \\times \\frac{\\pi}{180} = \\frac{180\\pi}{180} = \\pi$$\n\n**Why other choices are incorrect:**\n• Choice A ($\\pi/2$): This is the radian equivalent of $90°$, not $180°$. Picking this suggests halving somewhere unnecessarily — a partial calculation error.\n• Choice C ($2\\pi$): This equals $360°$ (a full rotation). Choosing this means you doubled instead of converting — a reversed operation trap.\n• Choice D ($180\\pi$): This results from multiplying $180 \\times \\pi$ without dividing by $180$. You forgot the conversion factor is $\\pi/180$, not just $\\pi$.\n\n**Key concept:** $180° = \\pi$ radians. This is the single most important radian-degree fact on the SAT. Memorize it and derive everything else from it.\n\n**Calculator tip:** On Desmos, type $180 \\cdot \\pi / 180$ to verify.",
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
      explanation: "**Choice A is correct.** Convert radians to degrees using the factor $\\frac{180}{\\pi}$.\n\n**Step 1:** Multiply by the conversion factor:\n$$\\frac{\\pi}{6} \\times \\frac{180}{\\pi} = \\frac{180}{6} = 30°$$\n\nThe $\\pi$ cancels, leaving simple arithmetic.\n\n**Why other choices are incorrect:**\n• Choice B ($45°$): This is $\\pi/4$ radians, not $\\pi/6$. Choosing this means you confused common radian values — a conceptual gap in the unit circle.\n• Choice C ($60°$): This is $\\pi/3$ radians. [TRAP: reversed operation] You may have multiplied $6 \\times 10$ or confused $\\pi/6$ with $\\pi/3$ — these are the most commonly swapped radian values on the SAT.\n• Choice D ($90°$): This is $\\pi/2$ radians. Picking this suggests a fundamental mix-up of radian benchmarks.\n\n**Key concept:** To convert radians → degrees, multiply by $\\frac{180}{\\pi}$. To convert degrees → radians, multiply by $\\frac{\\pi}{180}$. The key is knowing which direction: radians are smaller numbers, degrees are bigger.\n\n**Note:** Memorize: $\\pi/6 = 30°$, $\\pi/4 = 45°$, $\\pi/3 = 60°$, $\\pi/2 = 90°$. These appear on nearly every SAT.",
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
      explanation: "**Choice B is correct.** A full rotation of $360°$ converts to $2\\pi$ radians.\n\n**Step 1:** Apply the conversion:\n$$360° \\times \\frac{\\pi}{180} = \\frac{360\\pi}{180} = 2\\pi$$\n\n**Step 2:** Verify with the benchmark: since $180° = \\pi$, then $360° = 2 \\times 180° = 2\\pi$. ✓\n\n**Why other choices are incorrect:**\n• Choice A ($\\pi$): [TRAP: partial calculation] This is only $180°$ — a half rotation, not a full one. This is the most common trap: students who know $180° = \\pi$ forget to double it for a full rotation.\n• Choice C ($360\\pi$): You multiplied $360 \\times \\pi$ without dividing by $180$. This is a procedural error — you forgot the full conversion factor.\n• Choice D ($\\pi/2$): This is just $90°$, a quarter rotation. This suggests a fundamental conceptual gap in radian measure.\n\n**Key concept:** A full circle = $360° = 2\\pi$ radians. A semicircle = $180° = \\pi$ radians. These two facts are the foundation of all radian problems on the SAT.",
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
      explanation: "**Choice B is correct.** Convert $45°$ to radians by multiplying by $\\frac{\\pi}{180}$.\n\n**Step 1:** Set up the conversion:\n$$45° \\times \\frac{\\pi}{180} = \\frac{45\\pi}{180}$$\n\n**Step 2:** Simplify the fraction by dividing numerator and denominator by $45$:\n$$\\frac{45\\pi}{180} = \\frac{\\pi}{4}$$\n\n**Verification:** $\\frac{\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{180}{4} = 45°$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($\\pi/6$): This equals $30°$, not $45°$. [TRAP: reversed operation] Students often confuse the common radian values. $\\pi/6$ corresponds to the smallest common angle.\n• Choice C ($\\pi/3$): This equals $60°$. It's adjacent to $\\pi/4$ in the list of common angles, making it an easy mix-up — a careless error for students who haven't firmly memorized the unit circle.\n• Choice D ($\\pi/2$): This equals $90°$. Picking this means you doubled $45°$ before converting, or confused the relationship.\n\n**Key concept:** The conversion shortcut: divide the degree by $180$ and attach $\\pi$. So $45/180 = 1/4$, giving $\\pi/4$.\n\n**Note:** The four must-know conversions: $30° = \\pi/6$, $45° = \\pi/4$, $60° = \\pi/3$, $90° = \\pi/2$.",
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
      explanation: "**Choice C is correct.** Convert $\\frac{3\\pi}{2}$ radians to degrees.\n\n**Step 1:** Multiply by $\\frac{180}{\\pi}$:\n$$\\frac{3\\pi}{2} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{2} = \\frac{540}{2} = 270°$$\n\n**Step 2:** Verify using benchmarks: $\\frac{3\\pi}{2} = 3 \\times \\frac{\\pi}{2} = 3 \\times 90° = 270°$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($90°$): This is $\\pi/2$ radians — only one-third of the correct answer. [TRAP: partial calculation] You may have used just $\\pi/2$ instead of $3\\pi/2$, forgetting the coefficient of $3$.\n• Choice B ($180°$): This is $\\pi$ radians. Choosing this suggests you divided by $3$ somewhere or confused $3\\pi/2$ with $\\pi$.\n• Choice D ($360°$): This is $2\\pi$ radians. [TRAP: off by one step] You may have rounded $3\\pi/2$ up to $2\\pi$, or thought \"three-halves of $\\pi$ is close to $2\\pi$.\" Close, but not equal.\n\n**Key concept:** $\\frac{3\\pi}{2}$ represents three-quarters of a full rotation ($270°$). On the unit circle, this points straight down (negative $y$-axis).\n\n**Calculator tip:** On Desmos, type $\\frac{3\\pi}{2} \\cdot \\frac{180}{\\pi}$ to confirm $270$.",
      skills: ['radians-to-degrees']
    }
  ]
};
