// Practice questions for Dimensional Analysis module
// Questions are organized by SECTION (question type)

export const dimensionalAnalysisQuestions = {
  // Section: Unit Conversion Basics
  "Unit Conversion Basics": [
    {
      id: 1,
      difficulty: "easy",
      question: "If 1 mile = 5,280 feet, how many feet are in 3.5 miles?",
      choices: [
        { id: "A", text: "1,508.57 feet" },
        { id: "B", text: "15,840 feet" },
        { id: "C", text: "18,480 feet" },
        { id: "D", text: "52,800 feet" }
      ],
      correctAnswer: "C",
      hint: "Multiply the number of miles by the conversion factor to convert from miles to feet.",
      explanation: "3.5 miles × (5,280 feet/1 mile) = 18,480 feet. The miles unit cancels, leaving feet."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A car travels at 60 miles per hour. What is its speed in miles per minute?",
      choices: [
        { id: "A", text: "1 mile per minute" },
        { id: "B", text: "3,600 miles per minute" },
        { id: "C", text: "0.5 miles per minute" },
        { id: "D", text: "60 miles per minute" }
      ],
      correctAnswer: "A",
      hint: "Think about how many minutes are in one hour, then set up your conversion factor so the hour units cancel.",
      explanation: "60 miles/hour × (1 hour/60 minutes) = 1 mile/minute. The hour units cancel."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If 1 kilogram = 2.2 pounds, how many kilograms is 110 pounds?",
      choices: [
        { id: "A", text: "50 kilograms" },
        { id: "B", text: "242 kilograms" },
        { id: "C", text: "107.8 kilograms" },
        { id: "D", text: "22 kilograms" }
      ],
      correctAnswer: "A",
      hint: "Set up the conversion factor with pounds in the denominator so that pounds cancel out, leaving kilograms.",
      explanation: "110 pounds × (1 kilogram/2.2 pounds) = 50 kilograms. The pounds unit cancels."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Convert 5,400 seconds to hours.",
      choices: [
        { id: "A", text: "0.5 hours" },
        { id: "B", text: "1.5 hours" },
        { id: "C", text: "90 hours" },
        { id: "D", text: "324,000 hours" }
      ],
      correctAnswer: "B",
      hint: "This requires two conversion steps: first convert seconds to minutes, then minutes to hours.",
      explanation: "5,400 seconds × (1 minute/60 seconds) × (1 hour/60 minutes) = 5,400/3,600 = 1.5 hours."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A recipe calls for 3 cups of flour. If 1 cup = 8 fluid ounces, how many fluid ounces of flour is needed?",
      choices: [
        { id: "A", text: "0.375 fluid ounces" },
        { id: "B", text: "11 fluid ounces" },
        { id: "C", text: "24 fluid ounces" },
        { id: "D", text: "64 fluid ounces" }
      ],
      correctAnswer: "C",
      hint: "Multiply the number of cups by the number of fluid ounces per cup.",
      explanation: "3 cups × (8 fluid ounces/1 cup) = 24 fluid ounces."
    }
  ],

  // Section: Squared & Cubic Units
  "Squared & Cubic Units": [
    {
      id: 1,
      difficulty: "easy",
      question: "If 1 foot = 12 inches, how many square inches are in 1 square foot?",
      choices: [
        { id: "A", text: "12 square inches" },
        { id: "B", text: "24 square inches" },
        { id: "C", text: "144 square inches" },
        { id: "D", text: "1,728 square inches" }
      ],
      correctAnswer: "C",
      hint: "When converting area (square units), remember to apply the conversion factor twice - once for each dimension.",
      explanation: "1 ft² = (1 ft)² = (12 in)² = 144 in². When converting area, you must square the conversion factor."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Convert 3 square meters to square centimeters. (1 m = 100 cm)",
      choices: [
        { id: "A", text: "300 cm²" },
        { id: "B", text: "3,000 cm²" },
        { id: "C", text: "30,000 cm²" },
        { id: "D", text: "300,000 cm²" }
      ],
      correctAnswer: "C",
      hint: "For area conversions, square the linear conversion factor (100) before multiplying.",
      explanation: "3 m² × (100 cm/1 m)² = 3 × 10,000 cm² = 30,000 cm². The conversion factor must be squared."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "How many cubic feet are in 1 cubic yard? (1 yard = 3 feet)",
      choices: [
        { id: "A", text: "3 cubic feet" },
        { id: "B", text: "9 cubic feet" },
        { id: "C", text: "27 cubic feet" },
        { id: "D", text: "81 cubic feet" }
      ],
      correctAnswer: "C",
      hint: "For volume (cubic units), you need to cube the linear conversion factor to account for all three dimensions.",
      explanation: "1 yd³ = (1 yd)³ = (3 ft)³ = 27 ft³. When converting volume, you must cube the conversion factor."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A room has an area of 180 square feet. What is this area in square yards? (1 yard = 3 feet)",
      choices: [
        { id: "A", text: "20 square yards" },
        { id: "B", text: "60 square yards" },
        { id: "C", text: "540 square yards" },
        { id: "D", text: "1,620 square yards" }
      ],
      correctAnswer: "A",
      hint: "Since you're converting to a larger unit (yards), you'll divide. Remember to square the conversion factor for area.",
      explanation: "180 ft² × (1 yd/3 ft)² = 180 × (1/9) yd² = 20 yd². Divide by 9 (the square of 3)."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A tank holds 8,000 cubic centimeters. What is its volume in liters? (1 liter = 1,000 cm³)",
      choices: [
        { id: "A", text: "0.8 liters" },
        { id: "B", text: "8 liters" },
        { id: "C", text: "80 liters" },
        { id: "D", text: "8,000,000 liters" }
      ],
      correctAnswer: "B",
      hint: "Use the given relationship directly - this is already a cubic conversion, so no additional exponent is needed.",
      explanation: "8,000 cm³ × (1 liter/1,000 cm³) = 8 liters. This is a direct cubic conversion."
    }
  ]
};
