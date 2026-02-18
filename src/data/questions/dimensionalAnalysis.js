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
      explanation: "**Choice C is correct.** Multiply the given miles by the feet-per-mile conversion factor so that miles cancel and feet remain.\n\n**Step 1:** Set up the conversion with miles in the denominator so units cancel:\n$$3.5 \\text{ miles} \\times \\frac{5{,}280 \\text{ feet}}{1 \\text{ mile}}$$\n\n**Step 2:** Multiply:\n$$3.5 \\times 5{,}280 = 18{,}480 \\text{ feet}$$\n\n**Verification:** $18{,}480 \\div 5{,}280 = 3.5$ miles. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation]. Dividing $5{,}280 \\div 3.5 = 1{,}508.57$. This reverses the operation—you should multiply, not divide, when converting to a smaller unit.\n• Choice B: [TRAP: partial_calculation]. $3 \\times 5{,}280 = 15{,}840$. This only converts 3 miles instead of 3.5 miles, ignoring the decimal portion.\n• Choice D: [TRAP: arithmetic_slip]. $10 \\times 5{,}280 = 52{,}800$. This multiplies by 10 instead of 3.5, likely a place-value error.\n\n**Key concept:** To convert from a larger unit to a smaller unit, multiply by the conversion factor: $\\text{larger unit} \\times \\frac{\\text{smaller units}}{1 \\text{ larger unit}}$.\n\n**Calculator tip:** On Desmos, type 3.5*5280 to compute directly.",
      skills: ['unit-conversion']
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
      explanation: "**Choice A is correct.** Convert the time unit from hours to minutes by multiplying by a conversion factor that cancels hours.\n\n**Step 1:** Write the rate and set up the conversion factor so hours cancel:\n$$\\frac{60 \\text{ miles}}{1 \\text{ hour}} \\times \\frac{1 \\text{ hour}}{60 \\text{ minutes}}$$\n\n**Step 2:** Cancel hours and compute:\n$$\\frac{60}{60} = 1 \\text{ mile per minute}$$\n\n**Verification:** $1 \\text{ mile/min} \\times 60 \\text{ min/hr} = 60 \\text{ mph}$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation]. $60 \\times 60 = 3{,}600$. This multiplies by 60 instead of dividing—reversing the conversion factor produces an absurdly high speed.\n• Choice C: [TRAP: arithmetic_slip]. Getting 0.5 suggests dividing 60 by 120 or a miscalculation. The correct divisor is 60, not 120.\n• Choice D: [TRAP: partial_calculation]. Keeping the original number 60 unchanged means no conversion was performed at all.\n\n**Key concept:** When converting rates, only convert the unit you want to change. Place the conversion factor so the unwanted unit cancels: $\\frac{\\text{miles}}{\\text{hour}} \\times \\frac{\\text{hour}}{\\text{minutes}}$.\n\n**Calculator tip:** On Desmos, type 60/60 to confirm the result.",
      skills: ['unit-conversion', 'rate-conversion']
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
      explanation: "**Choice A is correct.** Divide the weight in pounds by the conversion factor (2.2 lb per kg) so that pounds cancel and kilograms remain.\n\n**Step 1:** Set up the conversion factor with pounds in the denominator:\n$$110 \\text{ lb} \\times \\frac{1 \\text{ kg}}{2.2 \\text{ lb}}$$\n\n**Step 2:** Divide:\n$$\\frac{110}{2.2} = 50 \\text{ kg}$$\n\n**Verification:** $50 \\text{ kg} \\times 2.2 = 110 \\text{ lb}$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation]. $110 \\times 2.2 = 242$. This multiplies by the conversion factor instead of dividing—converting the wrong direction (kg to lb instead of lb to kg).\n• Choice C: [TRAP: arithmetic_slip]. $110 - 2.2 = 107.8$. This subtracts the conversion factor instead of dividing, which is not a valid unit conversion operation.\n• Choice D: [TRAP: partial_calculation]. The number 22 comes from misreading the factor as simply $2.2 \\times 10$ or confusing $110 \\div 5$. Neither approach correctly applies the conversion.\n\n**Key concept:** When converting to a larger unit (pounds to kilograms), divide: $\\text{value in smaller unit} \\times \\frac{1 \\text{ larger unit}}{\\text{conversion factor}}$.\n\n**Calculator tip:** On Desmos, type 110/2.2 to confirm.",
      skills: ['unit-conversion']
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
      explanation: "**Choice B is correct.** This requires a two-step conversion chain: seconds to minutes, then minutes to hours.\n\n**Step 1:** Convert seconds to minutes:\n$$5{,}400 \\text{ sec} \\times \\frac{1 \\text{ min}}{60 \\text{ sec}} = 90 \\text{ min}$$\n\n**Step 2:** Convert minutes to hours:\n$$90 \\text{ min} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}} = 1.5 \\text{ hr}$$\n\n**Verification:** $1.5 \\text{ hr} \\times 60 \\times 60 = 1.5 \\times 3{,}600 = 5{,}400$ seconds. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. $5{,}400 \\div 3{,}600 = 1.5$, but choosing 0.5 suggests only dividing once by some factor or a rounding error. Students may confuse 0.5 with half of something.\n• Choice C: [TRAP: partial_calculation]. $5{,}400 \\div 60 = 90$. This only completes the first step (seconds to minutes) and stops, forgetting to convert minutes to hours.\n• Choice D: [TRAP: reversed_operation]. $5{,}400 \\times 60 = 324{,}000$. This multiplies by 60 instead of dividing—going the wrong direction in the conversion chain.\n\n**Key concept:** Multi-step conversions chain conversion factors together: $\\text{seconds} \\times \\frac{\\text{min}}{\\text{sec}} \\times \\frac{\\text{hr}}{\\text{min}}$. Equivalently, divide by $3{,}600$ since $60 \\times 60 = 3{,}600$.\n\n**Calculator tip:** On Desmos, type 5400/3600 or 5400/60/60 for the same result.",
      skills: ['unit-conversion', 'rate-conversion']
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
      explanation: "**Choice C is correct.** Multiply the number of cups by the fluid ounces per cup so that cups cancel.\n\n**Step 1:** Set up the conversion factor:\n$$3 \\text{ cups} \\times \\frac{8 \\text{ fl oz}}{1 \\text{ cup}}$$\n\n**Step 2:** Multiply:\n$$3 \\times 8 = 24 \\text{ fl oz}$$\n\n**Verification:** $24 \\div 8 = 3$ cups. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation]. $3 \\div 8 = 0.375$. This divides by the conversion factor instead of multiplying—reversing the operation converts fluid ounces to cups, not cups to fluid ounces.\n• Choice B: [TRAP: arithmetic_slip]. $3 + 8 = 11$. This adds instead of multiplying, which is never correct for unit conversions.\n• Choice D: [TRAP: arithmetic_slip]. $8 \\times 8 = 64$. This multiplies $8 \\times 8$ instead of $3 \\times 8$, likely confusing 8 cups with 3 cups.\n\n**Key concept:** Direct unit conversion uses multiplication: $\\text{quantity} \\times \\frac{\\text{desired unit}}{\\text{given unit}}$. Always check that the given unit cancels.\n\n**Calculator tip:** On Desmos, type 3*8 to confirm the result.",
      skills: ['unit-conversion']
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
      explanation: "**Choice C is correct.** For area (square) units, you must square the linear conversion factor because area has two dimensions.\n\n**Step 1:** Write the linear conversion and square both sides:\n$$1 \\text{ ft} = 12 \\text{ in} \\implies (1 \\text{ ft})^2 = (12 \\text{ in})^2$$\n\n**Step 2:** Evaluate the square:\n$$1 \\text{ ft}^2 = 144 \\text{ in}^2$$\n\n**Verification:** $\\sqrt{144} = 12$, confirming $12 \\text{ in} = 1 \\text{ ft}$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. $1 \\times 12 = 12$. This applies the linear conversion factor only once instead of squaring it—forgetting that area is two-dimensional.\n• Choice B: [TRAP: arithmetic_slip]. $12 \\times 2 = 24$. This doubles the factor instead of squaring it, confusing $12^2$ with $12 \\times 2$.\n• Choice D: [TRAP: reversed_operation]. $12^3 = 1{,}728$. This cubes the factor instead of squaring it—applying the cubic conversion rather than the area conversion.\n\n**Key concept:** Area conversion requires squaring the linear factor: $1 \\text{ ft}^2 = (12)^2 \\text{ in}^2 = 144 \\text{ in}^2$. In general, $1 \\text{ unit}^2 = (\\text{factor})^2 \\text{ smaller units}^2$.\n\n**Calculator tip:** On Desmos, type 12^2 to confirm 144.",
      skills: ['squared-cubed-units']
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
      explanation: "**Choice C is correct.** Since we are converting area units, the linear conversion factor (100 cm/m) must be squared.\n\n**Step 1:** Square the linear conversion factor:\n$$\\left(\\frac{100 \\text{ cm}}{1 \\text{ m}}\\right)^2 = \\frac{10{,}000 \\text{ cm}^2}{1 \\text{ m}^2}$$\n\n**Step 2:** Multiply by the given area:\n$$3 \\text{ m}^2 \\times 10{,}000 = 30{,}000 \\text{ cm}^2$$\n\n**Verification:** $30{,}000 \\div 10{,}000 = 3 \\text{ m}^2$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. $3 \\times 100 = 300$. This applies the linear factor only once, forgetting to square it for area conversion.\n• Choice B: [TRAP: partial_calculation]. $3 \\times 1{,}000 = 3{,}000$. This uses $100 \\times 10$ or $10^3$ instead of $100^2 = 10{,}000$, mixing up exponent rules.\n• Choice D: [TRAP: arithmetic_slip]. $3 \\times 100{,}000 = 300{,}000$. This uses $100^2 \\times 10 = 100{,}000$ or cubes the factor ($100^3$?), over-converting the units.\n\n**Key concept:** For area: multiply by $(\\text{factor})^2$. Here, $1 \\text{ m}^2 = (100)^2 \\text{ cm}^2 = 10{,}000 \\text{ cm}^2$.\n\n**Calculator tip:** On Desmos, type 3*100^2 to get 30,000.",
      skills: ['squared-cubed-units']
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
      explanation: "**Choice C is correct.** For volume (cubic) units, the linear conversion factor must be cubed because volume has three dimensions.\n\n**Step 1:** Write the linear conversion and cube both sides:\n$$1 \\text{ yd} = 3 \\text{ ft} \\implies (1 \\text{ yd})^3 = (3 \\text{ ft})^3$$\n\n**Step 2:** Evaluate the cube:\n$$1 \\text{ yd}^3 = 27 \\text{ ft}^3$$\n\n**Verification:** $\\sqrt[3]{27} = 3$, confirming $3 \\text{ ft} = 1 \\text{ yd}$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation]. Uses the linear factor $3$ without raising it to any power—treating the volume conversion as if it were a simple linear conversion.\n• Choice B: [TRAP: partial_calculation]. $3^2 = 9$. This squares the factor instead of cubing it—applying the area conversion formula instead of the volume formula.\n• Choice D: [TRAP: arithmetic_slip]. $3^4 = 81$. This raises 3 to the fourth power instead of the third, over-applying the exponent.\n\n**Key concept:** Volume conversion requires cubing the linear factor: $1 \\text{ yd}^3 = (3)^3 \\text{ ft}^3 = 27 \\text{ ft}^3$. Pattern: linear uses factor$^1$, area uses factor$^2$, volume uses factor$^3$.\n\n**Calculator tip:** On Desmos, type 3^3 to confirm 27.",
      skills: ['squared-cubed-units']
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
      explanation: "**Choice A is correct.** Converting from a smaller area unit (ft²) to a larger area unit (yd²) requires dividing by the squared linear factor.\n\n**Step 1:** Square the linear conversion factor. Since $1 \\text{ yd} = 3 \\text{ ft}$:\n$$\\left(\\frac{1 \\text{ yd}}{3 \\text{ ft}}\\right)^2 = \\frac{1 \\text{ yd}^2}{9 \\text{ ft}^2}$$\n\n**Step 2:** Multiply (which effectively divides by 9):\n$$180 \\text{ ft}^2 \\times \\frac{1 \\text{ yd}^2}{9 \\text{ ft}^2} = \\frac{180}{9} = 20 \\text{ yd}^2$$\n\n**Verification:** $20 \\text{ yd}^2 \\times 9 = 180 \\text{ ft}^2$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation]. $180 \\div 3 = 60$. This divides by the linear factor (3) instead of the squared factor (9)—forgetting to square for area.\n• Choice C: [TRAP: reversed_operation]. $180 \\times 3 = 540$. This multiplies by 3 instead of dividing by 9, converting in the wrong direction.\n• Choice D: [TRAP: reversed_operation]. $180 \\times 9 = 1{,}620$. This multiplies by $3^2 = 9$ instead of dividing—completely reversing the conversion direction.\n\n**Key concept:** When converting to a larger unit, divide by the squared factor: $\\text{ft}^2 \\div (\\text{factor})^2 = \\text{yd}^2$. Here, $180 \\div 3^2 = 180 \\div 9 = 20$.\n\n**Calculator tip:** On Desmos, type 180/3^2 to get 20.",
      skills: ['squared-cubed-units']
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
      explanation: "**Choice B is correct.** The relationship $1 \\text{ liter} = 1{,}000 \\text{ cm}^3$ is already given in cubic units, so no additional exponent is needed.\n\n**Step 1:** Set up the conversion factor with cm³ in the denominator:\n$$8{,}000 \\text{ cm}^3 \\times \\frac{1 \\text{ liter}}{1{,}000 \\text{ cm}^3}$$\n\n**Step 2:** Divide:\n$$\\frac{8{,}000}{1{,}000} = 8 \\text{ liters}$$\n\n**Verification:** $8 \\text{ liters} \\times 1{,}000 = 8{,}000 \\text{ cm}^3$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: arithmetic_slip]. $8{,}000 \\div 10{,}000 = 0.8$. This divides by $10{,}000$ instead of $1{,}000$, perhaps incorrectly squaring or cubing an extra factor.\n• Choice C: [TRAP: partial_calculation]. $8{,}000 \\div 100 = 80$. This divides by $100$ instead of $1{,}000$, perhaps confusing the cm-to-m linear factor with the cm³-to-liter conversion.\n• Choice D: [TRAP: reversed_operation]. $8{,}000 \\times 1{,}000 = 8{,}000{,}000$. This multiplies by $1{,}000$ instead of dividing—completely reversing the conversion direction.\n\n**Key concept:** When a conversion is already given in the target dimension (e.g., $1 \\text{ L} = 1{,}000 \\text{ cm}^3$), use it directly without squaring or cubing. Only raise the factor to a power when converting a linear relationship to area or volume.\n\n**Calculator tip:** On Desmos, type 8000/1000 to confirm the result.",
      skills: ['squared-cubed-units']
    }
  ]
};
