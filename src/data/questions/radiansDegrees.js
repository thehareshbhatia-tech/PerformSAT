// Practice questions for Radians & Degrees module
// Questions are organized by SECTION (question type)

export const radiansDegreesQuestions = {
  // Section: Converting Angles
  "Converting Angles": [
    {
      id: 1,
      question: "Convert 180° to radians.",
      choices: [
        { id: "A", text: "π/2" },
        { id: "B", text: "π" },
        { id: "C", text: "2π" },
        { id: "D", text: "180π" }
      ],
      correctAnswer: "B",
      explanation: "To convert degrees to radians, multiply by π/180: 180° × (π/180) = π radians."
    },
    {
      id: 2,
      question: "Convert π/6 radians to degrees.",
      choices: [
        { id: "A", text: "30°" },
        { id: "B", text: "45°" },
        { id: "C", text: "60°" },
        { id: "D", text: "90°" }
      ],
      correctAnswer: "A",
      explanation: "To convert radians to degrees, multiply by 180/π: (π/6) × (180/π) = 180/6 = 30°."
    },
    {
      id: 3,
      question: "How many radians are in a full rotation (360°)?",
      choices: [
        { id: "A", text: "π" },
        { id: "B", text: "2π" },
        { id: "C", text: "360π" },
        { id: "D", text: "π/2" }
      ],
      correctAnswer: "B",
      explanation: "360° × (π/180) = 2π radians. A full rotation is 2π radians."
    },
    {
      id: 4,
      question: "Convert 45° to radians.",
      choices: [
        { id: "A", text: "π/6" },
        { id: "B", text: "π/4" },
        { id: "C", text: "π/3" },
        { id: "D", text: "π/2" }
      ],
      correctAnswer: "B",
      explanation: "45° × (π/180) = 45π/180 = π/4 radians."
    },
    {
      id: 5,
      question: "Convert 3π/2 radians to degrees.",
      choices: [
        { id: "A", text: "90°" },
        { id: "B", text: "180°" },
        { id: "C", text: "270°" },
        { id: "D", text: "360°" }
      ],
      correctAnswer: "C",
      explanation: "(3π/2) × (180/π) = 3 × 180/2 = 540/2 = 270°."
    }
  ]
};
