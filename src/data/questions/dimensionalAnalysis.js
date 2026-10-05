// Practice questions for Dimensional Analysis module
// Questions are organized by SECTION (question type)

export const dimensionalAnalysisQuestions = {
  // Section: Unit Conversion Basics
  "Unit Conversion Basics": [
    {
      id: 1,
      difficulty: "easy",
      question: "A bookshelf is $7.5$ feet tall. What is the height, in inches, of the bookshelf? ($1$ foot $= 12$ inches)",
      choices: [
        // distractor: divides by 12 instead of multiplying
        { id: "A", text: "$0.625$" },
        // distractor: adds 12 instead of multiplying
        { id: "B", text: "$19.5$" },
        // distractor: converts only the 7 whole feet
        { id: "C", text: "$84$" },
        { id: "D", text: "$90$" }
      ],
      correctAnswer: "D",
      hint: "An inch is smaller than a foot, so the number of inches must be larger than the number of feet.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** $7.5(12) = 90$ inches.\n\n**The Full Solution:**\nStep 1: Write the conversion so that feet cancel: $7.5 \\text{ feet} \\times \\frac{12 \\text{ inches}}{1 \\text{ foot}}$.\nStep 2: Multiply: $7.5(12) = 90$.\nStep 3: The bookshelf is $90$ inches tall. Check: $7$ feet is $84$ inches and the extra half foot is $6$ inches, and $84 + 6 = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.625$): divides by $12$ instead of multiplying: $7.5 \\div 12 = 0.625$.\n* Choice B ($19.5$): adds the conversion factor to the measurement: $7.5 + 12 = 19.5$.\n* Choice C ($84$): converts only the whole number of feet, $7(12) = 84$, and drops the extra half foot.\n\n**Test Day Takeaway:** Converting to a smaller unit always gives a larger number, so multiply by the conversion factor.",
      skills: ["unit-conversion"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A conveyor belt carries $2{,}700$ boxes per hour. This rate is equivalent to $k$ boxes per minute. What is the value of $k$?",
      choices: [
        // distractor: divides by 3,600 seconds instead of 60 minutes
        { id: "A", text: "$0.75$" },
        // distractor: divides by 100 instead of 60
        { id: "B", text: "$27$" },
        { id: "C", text: "$45$" },
        // distractor: multiplies by 60 instead of dividing
        { id: "D", text: "$162{,}000$" }
      ],
      correctAnswer: "C",
      hint: "A minute is a small part of an hour, so the count per minute must be smaller than the count per hour.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** An hour is $60$ minutes, so $k = \\frac{2{,}700}{60} = 45$.\n\n**The Full Solution:**\nStep 1: Write the rate as a fraction: $\\frac{2{,}700 \\text{ boxes}}{1 \\text{ hour}}$.\nStep 2: Multiply by $\\frac{1 \\text{ hour}}{60 \\text{ minutes}}$ so that hours cancel: $\\frac{2{,}700}{60}$ boxes per minute.\nStep 3: $\\frac{2{,}700}{60} = 45$, so $k = 45$. Check: $45$ boxes per minute for $60$ minutes is $45(60) = 2{,}700$ boxes ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.75$): divides by $3{,}600$, the number of seconds in an hour, instead of $60$.\n* Choice B ($27$): divides by $100$, as if an hour had $100$ minutes.\n* Choice D ($162{,}000$): multiplies by $60$ instead of dividing, which gives more boxes per minute than per hour.\n\n**Test Day Takeaway:** A rate per minute is smaller than the same rate per hour; divide by $60$.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table shows the masses, in grams, of four rock samples. What is the total mass, in kilograms, of the four samples? ($1$ kilogram $= 1{,}000$ grams)",
      diagram: { type: "dataTable", params: { headers: ["Sample", "Mass (grams)"], rows: [["W", "1,250"], ["X", "860"], ["Y", "2,340"], ["Z", "550"]] } },
      choices: [
        // distractor: divides by 10,000 instead of 1,000
        { id: "A", text: "$0.5$" },
        { id: "B", text: "$5$" },
        // distractor: divides by 100 instead of 1,000
        { id: "C", text: "$50$" },
        // distractor: reports the total in grams without converting
        { id: "D", text: "$5{,}000$" }
      ],
      correctAnswer: "B",
      hint: "Add the four masses in grams, then convert the total once.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** The masses total $5{,}000$ grams, and $5{,}000 \\div 1{,}000 = 5$ kilograms.\n\n**The Full Solution:**\nStep 1: Add the masses in the table: $1{,}250 + 860 + 2{,}340 + 550 = 5{,}000$ grams.\nStep 2: Each kilogram is $1{,}000$ grams, so divide by $1{,}000$: $\\frac{5{,}000}{1{,}000}$.\nStep 3: The total mass is $5$ kilograms. Check: $5(1{,}000) = 5{,}000$ grams, the sum of the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.5$): divides the total by $10{,}000$ instead of $1{,}000$.\n* Choice C ($50$): divides the total by $100$, as if $1$ kilogram were $100$ grams.\n* Choice D ($5{,}000$): is the total in grams, before the conversion to kilograms.\n\n**Test Day Takeaway:** Add in the unit the table uses, then convert the single total once.",
      skills: ["unit-conversion"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$d = 15t$\nThe equation gives the distance $d$, in centimeters, that a toy robot travels in $t$ seconds. What is the robot's speed, in meters per hour? ($1$ meter $= 100$ centimeters)",
      choices: [
        // distractor: multiplies by 60 instead of 3,600 seconds per hour
        { id: "A", text: "$9$" },
        { id: "B", text: "$540$" },
        // distractor: multiplies by 60 and skips the centimeter-to-meter conversion
        { id: "C", text: "$900$" },
        // distractor: leaves the distance in centimeters
        { id: "D", text: "$54{,}000$" }
      ],
      correctAnswer: "B",
      hint: "Convert the centimeters and the seconds one at a time.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** The robot goes $15$ centimeters per second, or $0.15$ meter per second, and $0.15(3{,}600) = 540$ meters per hour.\n\n**The Full Solution:**\nStep 1: The coefficient $15$ is the speed: $15$ centimeters per second.\nStep 2: Convert the units: $15 \\cdot \\frac{1}{100} \\cdot 3{,}600$, since there are $100$ centimeters in a meter and $3{,}600$ seconds in an hour.\nStep 3: $\\frac{15(3{,}600)}{100} = 540$ meters per hour. Check: $540$ meters is $54{,}000$ centimeters, and $\\frac{54{,}000}{3{,}600} = 15$ centimeters per second ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): multiplies by $60$ instead of $3{,}600$, converting seconds to minutes rather than to hours.\n* Choice C ($900$): multiplies by $60$ and never converts centimeters to meters.\n* Choice D ($54{,}000$): converts seconds to hours but leaves the distance in centimeters.\n\n**Test Day Takeaway:** Convert one unit at a time and write each factor so the unwanted unit cancels; an hour is $3{,}600$ seconds.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A machine fills $r$ bottles per minute. Which expression represents the number of hours it takes the machine to fill $b$ bottles?",
      choices: [
        // distractor: multiplies b by the rate instead of dividing
        { id: "A", text: "$\\frac{br}{60}$" },
        { id: "B", text: "$\\frac{b}{60r}$" },
        // distractor: multiplies the minutes by 60 instead of dividing
        { id: "C", text: "$\\frac{60b}{r}$" },
        // distractor: inverts the correct expression
        { id: "D", text: "$\\frac{60r}{b}$" }
      ],
      correctAnswer: "B",
      hint: "Try easy numbers: how long do 240 bottles take at 2 bottles per minute?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~40s):** Filling $b$ bottles takes $\\frac{b}{r}$ minutes, which is $\\frac{b}{60r}$ hours.\n\n**The Full Solution:**\nStep 1: At $r$ bottles per minute, $b$ bottles take $\\frac{b}{r}$ minutes.\nStep 2: An hour is $60$ minutes, so divide by $60$: $\\frac{b}{r} \\div 60 = \\frac{b}{60r}$ hours.\nStep 3: The expression is $\\frac{b}{60r}$. Check: with $r = 2$ and $b = 240$, the machine needs $120$ minutes, or $2$ hours, and $\\frac{240}{60(2)} = 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{br}{60}$): multiplies the number of bottles by the rate instead of dividing by it.\n* Choice C ($\\frac{60b}{r}$): finds the time in minutes, $\\frac{b}{r}$, then multiplies by $60$ instead of dividing.\n* Choice D ($\\frac{60r}{b}$): inverts the correct expression, dividing the rate by the number of bottles instead of the number of bottles by the rate.\n\n**Test Day Takeaway:** Time equals amount divided by rate; then convert minutes to hours by dividing by $60$, and test with easy numbers.",
      skills: ["unit-conversion"]
    }
  ],

  // Section: Squared & Cubic Units
  "Squared & Cubic Units": [
    {
      id: 1,
      difficulty: "easy",
      question: "A rug has an area of $15$ square yards. What is the area, in square feet, of the rug? ($1$ yard $= 3$ feet)",
      choices: [
        // distractor: divides by 3 instead of multiplying by 9
        { id: "A", text: "$5$" },
        // distractor: multiplies by 3 instead of 9
        { id: "B", text: "$45$" },
        { id: "C", text: "$135$" },
        // distractor: multiplies by 27, the cubic factor
        { id: "D", text: "$405$" }
      ],
      correctAnswer: "C",
      hint: "Picture how many one-foot squares fit inside a square yard.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** A square yard is $3 \\times 3 = 9$ square feet, so $15(9) = 135$.\n\n**The Full Solution:**\nStep 1: A square yard is a square $3$ feet on each side, so $1$ square yard $= 3^2 = 9$ square feet.\nStep 2: Multiply the area by $9$: $15(9)$.\nStep 3: The area is $135$ square feet. Check: $135 \\div 9 = 15$ square yards ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides by $3$ instead of multiplying, which gives fewer square feet than square yards.\n* Choice B ($45$): multiplies by $3$, the factor for length, instead of by $3^2 = 9$.\n* Choice D ($405$): multiplies by $3^3 = 27$, the factor for cubic units.\n\n**Test Day Takeaway:** Square units convert with the square of the length factor: $1$ square yard is $9$ square feet, not $3$.",
      skills: ["squared-cubed-units"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "How many square centimeters are equivalent to $2.4$ square meters? ($1$ meter $= 100$ centimeters)",
      choices: [
        // distractor: divides by 100 instead of multiplying
        { id: "A", text: "$0.024$" },
        // distractor: multiplies by 100 instead of 100^2
        { id: "B", text: "$240$" },
        { id: "C", text: "$24{,}000$" },
        // distractor: multiplies by 100^3, the cubic factor
        { id: "D", text: "$2{,}400{,}000$" }
      ],
      correctAnswer: "C",
      hint: "Apply the conversion factor once for each dimension of the unit.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $1$ square meter is $100^2 = 10{,}000$ square centimeters, so $2.4(10{,}000) = 24{,}000$.\n\n**The Full Solution:**\nStep 1: A square meter is a square $100$ centimeters on each side, so $1$ square meter $= 100^2 = 10{,}000$ square centimeters.\nStep 2: Multiply: $2.4(10{,}000)$.\nStep 3: The area is $24{,}000$ square centimeters. Check: $24{,}000 \\div 10{,}000 = 2.4$ square meters ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.024$): divides by $100$ instead of multiplying.\n* Choice B ($240$): multiplies by $100$, the factor for length, instead of by $100^2$.\n* Choice D ($2{,}400{,}000$): multiplies by $100^3 = 1{,}000{,}000$, the factor for cubic units.\n\n**Test Day Takeaway:** For square units, apply the length factor twice.",
      skills: ["squared-cubed-units"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A box has interior dimensions of $50$ centimeters by $40$ centimeters by $30$ centimeters. What is the volume, in cubic meters, of the interior of the box? ($1$ meter $= 100$ centimeters)",
      choices: [
        { id: "A", text: "$0.06$" },
        // distractor: divides by 100^2 instead of 100^3
        { id: "B", text: "$6$" },
        // distractor: divides by 1,000 instead of 100^3
        { id: "C", text: "$60$" },
        // distractor: divides by 100 instead of 100^3
        { id: "D", text: "$600$" }
      ],
      correctAnswer: "A",
      hint: "Change each dimension to meters before multiplying.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** In meters the box is $0.5$ by $0.4$ by $0.3$, so its volume is $0.5(0.4)(0.3) = 0.06$ cubic meter.\n\n**The Full Solution:**\nStep 1: Convert each dimension to meters: $0.5$ meter, $0.4$ meter, and $0.3$ meter.\nStep 2: Multiply: $0.5(0.4) = 0.2$ and $0.2(0.3) = 0.06$.\nStep 3: The volume is $0.06$ cubic meter. Check: in centimeters the volume is $50(40)(30) = 60{,}000$ cubic centimeters, and $\\frac{60{,}000}{100^3} = 0.06$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): divides $60{,}000$ by $100^2 = 10{,}000$, the factor for square units.\n* Choice C ($60$): divides $60{,}000$ by $1{,}000$, as if a cubic meter were $1{,}000$ cubic centimeters.\n* Choice D ($600$): divides $60{,}000$ by $100$, the factor for length.\n\n**Test Day Takeaway:** Converting each length before multiplying avoids choosing the wrong power; a cubic meter is $100^3$ cubic centimeters.",
      skills: ["squared-cubed-units"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The table shows the length and width, in feet, of each of three rectangular sections of a floor. What is the area, in square yards, of the three sections combined? ($1$ yard $= 3$ feet)",
      diagram: { type: "dataTable", params: { headers: ["Section", "Length (feet)", "Width (feet)"], rows: [["A", "12", "9"], ["B", "15", "12"], ["C", "6", "9"]] } },
      choices: [
        { id: "A", text: "$38$" },
        // distractor: divides by 3 instead of 9
        { id: "B", text: "$114$" },
        // distractor: reports the area in square feet
        { id: "C", text: "$342$" },
        // distractor: multiplies by 9 instead of dividing
        { id: "D", text: "$3{,}078$" }
      ],
      correctAnswer: "A",
      hint: "Total the three areas in square feet first; only the last step uses yards.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The areas are $108 + 180 + 54 = 342$ square feet, and $342 \\div 9 = 38$ square yards.\n\n**The Full Solution:**\nStep 1: Find each area in square feet: $12(9) = 108$, $15(12) = 180$, and $6(9) = 54$.\nStep 2: Add: $108 + 180 + 54 = 342$ square feet.\nStep 3: A square yard is $3^2 = 9$ square feet, so $342 \\div 9 = 38$ square yards. Check: $38(9) = 342$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($114$): divides by $3$ instead of $3^2 = 9$.\n* Choice C ($342$): is the total area in square feet, before the conversion.\n* Choice D ($3{,}078$): multiplies by $9$ instead of dividing.\n\n**Test Day Takeaway:** Total the areas in the units given, then convert once, dividing by the square of the length factor.",
      skills: ["squared-cubed-units"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "An empty tank with a volume of $4.5$ cubic feet is filled with water at a rate of $216$ cubic inches per second. How many seconds does it take to fill the tank? ($1$ foot $= 12$ inches)",
      choices: [
        // distractor: converts cubic feet with 12 instead of 12^3
        { id: "A", text: "$0.25$" },
        // distractor: converts cubic feet with 144 instead of 1,728
        { id: "B", text: "$3$" },
        { id: "C", text: "$36$" },
        // distractor: reports the volume in cubic inches instead of the time
        { id: "D", text: "$7{,}776$" }
      ],
      correctAnswer: "C",
      hint: "The volume and the rate use different cubic units; make them agree before you divide.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** $4.5$ cubic feet is $4.5(1{,}728) = 7{,}776$ cubic inches, and $7{,}776 \\div 216 = 36$ seconds.\n\n**The Full Solution:**\nStep 1: A cubic foot is $12^3 = 1{,}728$ cubic inches, so the tank holds $4.5(1{,}728) = 7{,}776$ cubic inches.\nStep 2: Time is volume divided by rate: $\\frac{7{,}776}{216}$.\nStep 3: $\\frac{7{,}776}{216} = 36$ seconds. Check: $216(36) = 7{,}776$ cubic inches, which is $\\frac{7{,}776}{1{,}728} = 4.5$ cubic feet ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.25$): converts the tank's volume with a factor of $12$ instead of $12^3$: $\\frac{4.5(12)}{216} = 0.25$.\n* Choice B ($3$): converts with $12^2 = 144$, the factor for square units: $\\frac{4.5(144)}{216} = 3$.\n* Choice D ($7{,}776$): is the volume of the tank in cubic inches, not the time to fill it.\n\n**Test Day Takeaway:** Make the volume and the rate use the same cubic unit before dividing; a cubic foot is $12^3$ cubic inches.",
      skills: ["squared-cubed-units"]
    }
  ]
};
