// Practice questions for Dimensional Analysis module
// Questions are organized by SECTION (question type)

export const dimensionalAnalysisQuestions = {
  // Section: Unit Conversion Basics
  "Unit Conversion Basics": [
    {
      id: 1,
      question: "If 1 mile = 5,280 feet, how many feet are in 3.5 miles?",
      choices: [
        { id: "A", text: "1,508.57 feet" },
        { id: "B", text: "15,840 feet" },
        { id: "C", text: "18,480 feet" },
        { id: "D", text: "52,800 feet" }
      ],
      correctAnswer: "C",
      explanation: "3.5 miles × (5,280 feet/1 mile) = 18,480 feet. The miles unit cancels, leaving feet."
    },
    {
      id: 2,
      question: "A car travels at 60 miles per hour. What is its speed in miles per minute?",
      choices: [
        { id: "A", text: "1 mile per minute" },
        { id: "B", text: "3,600 miles per minute" },
        { id: "C", text: "0.5 miles per minute" },
        { id: "D", text: "60 miles per minute" }
      ],
      correctAnswer: "A",
      explanation: "60 miles/hour × (1 hour/60 minutes) = 1 mile/minute. The hour units cancel."
    },
    {
      id: 3,
      question: "If 1 kilogram = 2.2 pounds, how many kilograms is 110 pounds?",
      choices: [
        { id: "A", text: "50 kilograms" },
        { id: "B", text: "242 kilograms" },
        { id: "C", text: "107.8 kilograms" },
        { id: "D", text: "22 kilograms" }
      ],
      correctAnswer: "A",
      explanation: "110 pounds × (1 kilogram/2.2 pounds) = 50 kilograms. The pounds unit cancels."
    },
    {
      id: 4,
      question: "Convert 5,400 seconds to hours.",
      choices: [
        { id: "A", text: "0.5 hours" },
        { id: "B", text: "1.5 hours" },
        { id: "C", text: "90 hours" },
        { id: "D", text: "324,000 hours" }
      ],
      correctAnswer: "B",
      explanation: "5,400 seconds × (1 minute/60 seconds) × (1 hour/60 minutes) = 5,400/3,600 = 1.5 hours."
    },
    {
      id: 5,
      question: "A recipe calls for 3 cups of flour. If 1 cup = 8 fluid ounces, how many fluid ounces of flour is needed?",
      choices: [
        { id: "A", text: "0.375 fluid ounces" },
        { id: "B", text: "11 fluid ounces" },
        { id: "C", text: "24 fluid ounces" },
        { id: "D", text: "64 fluid ounces" }
      ],
      correctAnswer: "C",
      explanation: "3 cups × (8 fluid ounces/1 cup) = 24 fluid ounces."
    }
  ],

  // Section: Squared & Cubic Units
  "Squared & Cubic Units": [
    {
      id: 1,
      question: "If 1 foot = 12 inches, how many square inches are in 1 square foot?",
      choices: [
        { id: "A", text: "12 square inches" },
        { id: "B", text: "24 square inches" },
        { id: "C", text: "144 square inches" },
        { id: "D", text: "1,728 square inches" }
      ],
      correctAnswer: "C",
      explanation: "1 ft² = (1 ft)² = (12 in)² = 144 in². When converting area, you must square the conversion factor."
    },
    {
      id: 2,
      question: "Convert 3 square meters to square centimeters. (1 m = 100 cm)",
      choices: [
        { id: "A", text: "300 cm²" },
        { id: "B", text: "3,000 cm²" },
        { id: "C", text: "30,000 cm²" },
        { id: "D", text: "300,000 cm²" }
      ],
      correctAnswer: "C",
      explanation: "3 m² × (100 cm/1 m)² = 3 × 10,000 cm² = 30,000 cm². The conversion factor must be squared."
    },
    {
      id: 3,
      question: "How many cubic feet are in 1 cubic yard? (1 yard = 3 feet)",
      choices: [
        { id: "A", text: "3 cubic feet" },
        { id: "B", text: "9 cubic feet" },
        { id: "C", text: "27 cubic feet" },
        { id: "D", text: "81 cubic feet" }
      ],
      correctAnswer: "C",
      explanation: "1 yd³ = (1 yd)³ = (3 ft)³ = 27 ft³. When converting volume, you must cube the conversion factor."
    },
    {
      id: 4,
      question: "A room has an area of 180 square feet. What is this area in square yards? (1 yard = 3 feet)",
      choices: [
        { id: "A", text: "20 square yards" },
        { id: "B", text: "60 square yards" },
        { id: "C", text: "540 square yards" },
        { id: "D", text: "1,620 square yards" }
      ],
      correctAnswer: "A",
      explanation: "180 ft² × (1 yd/3 ft)² = 180 × (1/9) yd² = 20 yd². Divide by 9 (the square of 3)."
    },
    {
      id: 5,
      question: "A tank holds 8,000 cubic centimeters. What is its volume in liters? (1 liter = 1,000 cm³)",
      choices: [
        { id: "A", text: "0.8 liters" },
        { id: "B", text: "8 liters" },
        { id: "C", text: "80 liters" },
        { id: "D", text: "8,000,000 liters" }
      ],
      correctAnswer: "B",
      explanation: "8,000 cm³ × (1 liter/1,000 cm³) = 8 liters. This is a direct cubic conversion."
    }
  ]
};
