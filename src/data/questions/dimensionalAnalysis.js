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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Going from a bigger unit to a smaller one, you multiply: $3.5 \\times 5{,}280 = 18{,}480$ feet.\n\n**The Full Solution:**\nStep 1: Set up the conversion so miles cancel: $3.5 \\text{ miles} \\times \\frac{5{,}280 \\text{ feet}}{1 \\text{ mile}}$.\nStep 2: Multiply: $3.5 \\times 5{,}280 = 18{,}480$ feet.\nStep 3: Check by reversing: $18{,}480 \\div 5{,}280 = 3.5$ miles. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}508.57$): divided instead of multiplying, $5{,}280 \\div 3.5$ — wrong direction.\n* Choice B ($15{,}840$): converted only $3$ miles, dropping the $0.5$.\n* Choice D ($52{,}800$): multiplied by $10$ instead of $3.5$, a place-value slip.\n\n**Test Day Takeaway:** Bigger unit to smaller unit means more of them, so multiply by the conversion factor; smaller to bigger means divide.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** There are $60$ minutes in an hour, so $\\frac{60 \\text{ miles}}{60 \\text{ minutes}} = 1$ mile per minute.\n\n**The Full Solution:**\nStep 1: Write the rate with a factor that cancels hours: $\\frac{60 \\text{ miles}}{1 \\text{ hour}} \\times \\frac{1 \\text{ hour}}{60 \\text{ minutes}}$.\nStep 2: Hours cancel, leaving $\\frac{60}{60} = 1$ mile per minute.\nStep 3: Check by reversing: $1$ mile/min $\\times 60$ min/hr $= 60$ mph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3{,}600$): multiplied by $60$ instead of dividing — flips the factor and gives an impossible speed.\n* Choice C ($0.5$): divided $60$ by $120$ instead of $60$.\n* Choice D ($60$): left the number unchanged, doing no conversion at all.\n\n**Test Day Takeaway:** Convert only the unit you want to change, and orient the factor so the unwanted unit sits opposite where it currently is, so it cancels.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** Pounds to kilograms means going to a bigger unit, so divide: $110 \\div 2.2 = 50$ kg.\n\n**The Full Solution:**\nStep 1: Set up the factor so pounds cancel: $110 \\text{ lb} \\times \\frac{1 \\text{ kg}}{2.2 \\text{ lb}}$.\nStep 2: Divide: $\\frac{110}{2.2} = 50$ kg.\nStep 3: Check by reversing: $50 \\times 2.2 = 110$ lb. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($242$): multiplied by $2.2$ instead of dividing — that converts kg to lb, the wrong direction.\n* Choice C ($107.8$): subtracted $2.2$ from $110$, which is not a conversion at all.\n* Choice D ($22$): treated the factor as $\\frac{110}{5}$ or $2.2 \\times 10$, neither of which applies the conversion.\n\n**Test Day Takeaway:** A kilogram is bigger than a pound, so $110$ pounds is fewer kilograms — when the unit gets bigger, divide.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** There are $3{,}600$ seconds in an hour, so $5{,}400 \\div 3{,}600 = 1.5$ hours.\n\n**The Full Solution:**\nStep 1: Seconds to minutes: $5{,}400 \\text{ sec} \\times \\frac{1 \\text{ min}}{60 \\text{ sec}} = 90$ min.\nStep 2: Minutes to hours: $90 \\text{ min} \\times \\frac{1 \\text{ hr}}{60 \\text{ min}} = 1.5$ hr.\nStep 3: Check by reversing: $1.5 \\times 60 \\times 60 = 5{,}400$ seconds. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): a stray division or rounding error — half of nothing relevant here.\n* Choice C ($90$): stopped after the first step (seconds to minutes) and forgot to convert minutes to hours.\n* Choice D ($324{,}000$): multiplied by $60$ instead of dividing — the wrong direction down the chain.\n\n**Test Day Takeaway:** Chain the factors so each unwanted unit cancels; for seconds to hours, that is dividing by $60 \\times 60 = 3{,}600$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Each cup is $8$ fluid ounces, so $3 \\times 8 = 24$ fluid ounces.\n\n**The Full Solution:**\nStep 1: Set up the factor so cups cancel: $3 \\text{ cups} \\times \\frac{8 \\text{ fl oz}}{1 \\text{ cup}}$.\nStep 2: Multiply: $3 \\times 8 = 24$ fl oz.\nStep 3: Check by reversing: $24 \\div 8 = 3$ cups. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.375$): divided $3 \\div 8$ instead of multiplying — that converts fluid ounces to cups.\n* Choice B ($11$): added $3 + 8$, which never works for a conversion.\n* Choice D ($64$): computed $8 \\times 8$, using $8$ cups instead of $3$.\n\n**Test Day Takeaway:** A cup is the bigger unit, so going to fluid ounces means more of them — multiply by the per-cup factor.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Area is two-dimensional, so square the linear factor: $12^2 = 144$ square inches.\n\n**The Full Solution:**\nStep 1: Start from the linear conversion $1 \\text{ ft} = 12 \\text{ in}$ and square both sides.\nStep 2: $(1 \\text{ ft})^2 = (12 \\text{ in})^2 \\Rightarrow 1 \\text{ ft}^2 = 144 \\text{ in}^2$.\nStep 3: Check: $\\sqrt{144} = 12$, matching $12 \\text{ in} = 1 \\text{ ft}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): used the linear factor once, forgetting area has two dimensions.\n* Choice B ($24$): doubled the factor ($12 \\times 2$) instead of squaring it.\n* Choice D ($1{,}728$): cubed the factor ($12^3$), which is the volume conversion, not area.\n\n**Test Day Takeaway:** For area, square the linear factor; for volume, cube it. Length uses factor$^1$, area factor$^2$, volume factor$^3$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Square the linear factor: $1 \\text{ m}^2 = 100^2 = 10{,}000 \\text{ cm}^2$, so $3 \\times 10{,}000 = 30{,}000 \\text{ cm}^2$.\n\n**The Full Solution:**\nStep 1: Square the linear factor $\\frac{100 \\text{ cm}}{1 \\text{ m}}$ to get $\\frac{10{,}000 \\text{ cm}^2}{1 \\text{ m}^2}$.\nStep 2: Multiply by the given area: $3 \\text{ m}^2 \\times 10{,}000 = 30{,}000 \\text{ cm}^2$.\nStep 3: Check by reversing: $30{,}000 \\div 10{,}000 = 3 \\text{ m}^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($300$): used the linear factor $100$ once instead of squaring it.\n* Choice B ($3{,}000$): used $1{,}000$ ($10^3$) instead of $100^2 = 10{,}000$.\n* Choice D ($300{,}000$): over-converted, multiplying by $100{,}000$ instead of $10{,}000$.\n\n**Test Day Takeaway:** For an area conversion, square the linear factor before multiplying — $100$ cm per m becomes $10{,}000$ cm$^2$ per m$^2$.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** Volume is three-dimensional, so cube the linear factor: $3^3 = 27$ cubic feet.\n\n**The Full Solution:**\nStep 1: Start from $1 \\text{ yd} = 3 \\text{ ft}$ and cube both sides.\nStep 2: $(1 \\text{ yd})^3 = (3 \\text{ ft})^3 \\Rightarrow 1 \\text{ yd}^3 = 27 \\text{ ft}^3$.\nStep 3: Check: $\\sqrt[3]{27} = 3$, matching $3 \\text{ ft} = 1 \\text{ yd}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): used the linear factor without raising it to any power.\n* Choice B ($9$): squared the factor ($3^2$), which is the area conversion, not volume.\n* Choice D ($81$): raised $3$ to the fourth power instead of the third.\n\n**Test Day Takeaway:** Volume conversion cubes the linear factor: length factor$^1$, area factor$^2$, volume factor$^3$.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Going to the bigger area unit, divide by the squared factor: $180 \\div 3^2 = 180 \\div 9 = 20$ square yards.\n\n**The Full Solution:**\nStep 1: Since $1 \\text{ yd} = 3 \\text{ ft}$, the area factor is $\\left(\\frac{1 \\text{ yd}}{3 \\text{ ft}}\\right)^2 = \\frac{1 \\text{ yd}^2}{9 \\text{ ft}^2}$.\nStep 2: Multiply, which divides by $9$: $180 \\text{ ft}^2 \\times \\frac{1 \\text{ yd}^2}{9 \\text{ ft}^2} = \\frac{180}{9} = 20 \\text{ yd}^2$.\nStep 3: Check by reversing: $20 \\times 9 = 180 \\text{ ft}^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($60$): divided by the linear factor $3$ instead of the squared factor $9$.\n* Choice C ($540$): multiplied by $3$ instead of dividing by $9$ — wrong direction and wrong power.\n* Choice D ($1{,}620$): multiplied by $9$ instead of dividing by it.\n\n**Test Day Takeaway:** A square yard is bigger than a square foot, so the area number gets smaller — divide by the squared factor, $3^2 = 9$.",
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
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** The factor $1 \\text{ L} = 1{,}000 \\text{ cm}^3$ is already cubic, so just divide: $8{,}000 \\div 1{,}000 = 8$ liters.\n\n**The Full Solution:**\nStep 1: Set up the factor so cm$^3$ cancels: $8{,}000 \\text{ cm}^3 \\times \\frac{1 \\text{ liter}}{1{,}000 \\text{ cm}^3}$.\nStep 2: Divide: $\\frac{8{,}000}{1{,}000} = 8$ liters.\nStep 3: Check by reversing: $8 \\times 1{,}000 = 8{,}000 \\text{ cm}^3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.8$): divided by $10{,}000$, adding an extra power that the given factor does not need.\n* Choice C ($80$): divided by $100$ instead of $1{,}000$, mixing up the cm-to-m factor.\n* Choice D ($8{,}000{,}000$): multiplied by $1{,}000$ instead of dividing — wrong direction.\n\n**Test Day Takeaway:** When a conversion is already stated in the target dimension (here liters to cm$^3$), use it directly — do not square or cube it again.",
      skills: ['squared-cubed-units']
    }
  ]
};
