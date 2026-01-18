// Practice questions for Percents module
// Questions are organized by SECTION (question type)

export const percentsQuestions = {
  // Section: Percent Fundamentals
  "Percent Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is 25% expressed as a decimal?",
      choices: [
        { id: "A", text: "0.025" },
        { id: "B", text: "0.25" },
        { id: "C", text: "2.5" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Remember that 'percent' means 'per hundred.' To convert a percent to a decimal, think about how many hundredths it represents.",
      explanation: "To convert a percent to a decimal, divide by 100: 25% = 25/100 = 0.25."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Express 0.375 as a percent.",
      choices: [
        { id: "A", text: "0.375%" },
        { id: "B", text: "3.75%" },
        { id: "C", text: "37.5%" },
        { id: "D", text: "375%" }
      ],
      correctAnswer: "C",
      hint: "Converting a decimal to a percent is the reverse of converting a percent to a decimal. Think about what operation undoes division by 100.",
      explanation: "To convert a decimal to a percent, multiply by 100: 0.375 × 100 = 37.5%."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "What is 3/5 expressed as a percent?",
      choices: [
        { id: "A", text: "35%" },
        { id: "B", text: "53%" },
        { id: "C", text: "60%" },
        { id: "D", text: "65%" }
      ],
      correctAnswer: "C",
      hint: "First convert the fraction to a decimal by dividing the numerator by the denominator, then convert that decimal to a percent.",
      explanation: "Convert fraction to decimal: 3/5 = 0.6. Then convert to percent: 0.6 × 100 = 60%."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which is greatest: 45%, 0.4, or 2/5?",
      choices: [
        { id: "A", text: "45%" },
        { id: "B", text: "0.4" },
        { id: "C", text: "2/5" },
        { id: "D", text: "They are all equal" }
      ],
      correctAnswer: "A",
      hint: "To compare values in different forms, convert them all to the same form. Try converting everything to decimals first.",
      explanation: "Convert all to decimals: 45% = 0.45, 0.4 = 0.4, 2/5 = 0.4. Since 0.45 > 0.4, 45% is greatest."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What percent of 200 is 50?",
      choices: [
        { id: "A", text: "4%" },
        { id: "B", text: "25%" },
        { id: "C", text: "40%" },
        { id: "D", text: "250%" }
      ],
      correctAnswer: "B",
      hint: "Set up the equation: (unknown percent) × 200 = 50. Solve for the unknown by dividing, then convert to a percent.",
      explanation: "Set up: x% of 200 = 50. So (x/100) × 200 = 50. Solving: 2x = 50, x = 25. Answer: 25%."
    }
  ],

  // Section: Percent Of Questions
  "Percent Of Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is 30% of 80?",
      choices: [
        { id: "A", text: "24" },
        { id: "B", text: "26.67" },
        { id: "C", text: "50" },
        { id: "D", text: "110" }
      ],
      correctAnswer: "A",
      hint: "The word 'of' in math means multiply. Convert the percent to a decimal first, then multiply by the whole amount.",
      explanation: "30% of 80 = 0.30 × 80 = 24."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If 40% of a number is 28, what is the number?",
      choices: [
        { id: "A", text: "11.2" },
        { id: "B", text: "68" },
        { id: "C", text: "70" },
        { id: "D", text: "112" }
      ],
      correctAnswer: "C",
      hint: "Let the unknown number be x. Write an equation: 0.40 × x = 28, then solve for x by dividing both sides.",
      explanation: "Let x = the number. 0.40x = 28. So x = 28/0.40 = 70."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A shirt originally costs $60. If it is 15% off, what is the discount amount?",
      choices: [
        { id: "A", text: "$4" },
        { id: "B", text: "$9" },
        { id: "C", text: "$45" },
        { id: "D", text: "$51" }
      ],
      correctAnswer: "B",
      hint: "The discount amount is the percent off applied to the original price. Find 15% of the original price.",
      explanation: "Discount = 15% of $60 = 0.15 × 60 = $9."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a class of 25 students, 60% are girls. How many boys are in the class?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "15" },
        { id: "C", text: "20" },
        { id: "D", text: "40" }
      ],
      correctAnswer: "A",
      hint: "If 60% are girls, what percent are boys? Remember that the total must equal 100%.",
      explanation: "Girls = 60% of 25 = 15. Boys = 25 - 15 = 10. Or: Boys = 40% of 25 = 0.40 × 25 = 10."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A store sold 120 items on Monday. If this represents 24% of their weekly sales, what were the total weekly sales?",
      choices: [
        { id: "A", text: "28.8 items" },
        { id: "B", text: "144 items" },
        { id: "C", text: "500 items" },
        { id: "D", text: "576 items" }
      ],
      correctAnswer: "C",
      hint: "You know that 24% of the total equals 120. Set up an equation with the total as the unknown and solve for it.",
      explanation: "Let x = weekly sales. 24% of x = 120. So 0.24x = 120. x = 120/0.24 = 500 items."
    }
  ],

  // Section: Percent Change Questions
  "Percent Change Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "A price increases from $80 to $100. What is the percent increase?",
      choices: [
        { id: "A", text: "20%" },
        { id: "B", text: "25%" },
        { id: "C", text: "80%" },
        { id: "D", text: "125%" }
      ],
      correctAnswer: "B",
      hint: "Use the percent change formula: (change ÷ original) × 100. First find how much the price changed, then divide by the starting value.",
      explanation: "Percent change = (change/original) × 100 = (20/80) × 100 = 25%."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A population decreases from 500 to 400. What is the percent decrease?",
      choices: [
        { id: "A", text: "10%" },
        { id: "B", text: "20%" },
        { id: "C", text: "25%" },
        { id: "D", text: "100%" }
      ],
      correctAnswer: "B",
      hint: "Percent decrease uses the same formula as percent increase: (change ÷ original) × 100. The original is always the starting value.",
      explanation: "Percent decrease = (change/original) × 100 = (100/500) × 100 = 20%."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A stock increases by 20% one year and decreases by 20% the next year. If it started at $100, what is its final value?",
      choices: [
        { id: "A", text: "$96" },
        { id: "B", text: "$100" },
        { id: "C", text: "$104" },
        { id: "D", text: "$120" }
      ],
      correctAnswer: "A",
      hint: "Work through each change step by step. After the increase, find the new value, then apply the decrease to that new value, not the original.",
      explanation: "After 20% increase: $100 × 1.20 = $120. After 20% decrease: $120 × 0.80 = $96. The percents don't cancel!"
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A shirt's price was reduced by 30% to $35. What was the original price?",
      choices: [
        { id: "A", text: "$45.50" },
        { id: "B", text: "$50" },
        { id: "C", text: "$65" },
        { id: "D", text: "$105" }
      ],
      correctAnswer: "B",
      hint: "If the price was reduced by 30%, the sale price represents 70% of the original. Set up an equation where 70% of the original equals $35.",
      explanation: "After 30% off, you pay 70%. So 0.70 × original = $35. Original = $35/0.70 = $50."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If a number is increased by 50% and then decreased by 50%, the final result is what percent of the original?",
      choices: [
        { id: "A", text: "25%" },
        { id: "B", text: "50%" },
        { id: "C", text: "75%" },
        { id: "D", text: "100%" }
      ],
      correctAnswer: "C",
      hint: "Try picking a simple starting number like 100. Apply the 50% increase first, then apply the 50% decrease to your new value.",
      explanation: "Let original = 100. After +50%: 150. After -50%: 150 × 0.50 = 75. This is 75% of original."
    }
  ],

  // Section: Percent Model Questions
  "Percent Model Questions": [
    {
      id: 1,
      difficulty: "easy",
      question: "A survey found that 35% of 400 respondents prefer product A. How many respondents prefer product A?",
      choices: [
        { id: "A", text: "35" },
        { id: "B", text: "114" },
        { id: "C", text: "140" },
        { id: "D", text: "365" }
      ],
      correctAnswer: "C",
      hint: "This is a 'percent of' problem. Convert 35% to a decimal and multiply by the total number of respondents.",
      explanation: "Number preferring A = 35% of 400 = 0.35 × 400 = 140 respondents."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In a solution, 15% is acid and the rest is water. If there are 120 mL of water, how much acid is there?",
      choices: [
        { id: "A", text: "18 mL" },
        { id: "B", text: "21.18 mL" },
        { id: "C", text: "102 mL" },
        { id: "D", text: "138 mL" }
      ],
      correctAnswer: "B",
      hint: "If acid is 15% of the solution, then water must be 85%. Use the water amount to find the total solution first, then calculate the acid.",
      explanation: "Water = 85% of total (since acid is 15%). So 0.85 × total = 120. Total = 141.18 mL. Acid = 0.15 × 141.18 ≈ 21.18 mL."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A salesperson earns a 6% commission on sales. If they earn $450 in commission, what were their total sales?",
      choices: [
        { id: "A", text: "$27" },
        { id: "B", text: "$2,700" },
        { id: "C", text: "$7,500" },
        { id: "D", text: "$75,000" }
      ],
      correctAnswer: "C",
      hint: "Commission equals the percent rate times total sales. Set up the equation: 6% × (total sales) = $450, then solve for total sales.",
      explanation: "6% × sales = $450. So 0.06 × sales = 450. Sales = 450/0.06 = $7,500."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "A tank is 40% full and contains 240 gallons of water. What is the total capacity of the tank?",
      choices: [
        { id: "A", text: "96 gallons" },
        { id: "B", text: "360 gallons" },
        { id: "C", text: "600 gallons" },
        { id: "D", text: "960 gallons" }
      ],
      correctAnswer: "C",
      hint: "The 240 gallons represents 40% of the tank's total capacity. Set up an equation to find what number 240 is 40% of.",
      explanation: "40% of capacity = 240. So 0.40 × capacity = 240. Capacity = 240/0.40 = 600 gallons."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A test has 80 questions. To pass, you need at least 75%. What is the minimum number of questions you must answer correctly?",
      choices: [
        { id: "A", text: "55" },
        { id: "B", text: "60" },
        { id: "C", text: "75" },
        { id: "D", text: "80" }
      ],
      correctAnswer: "B",
      hint: "Find 75% of the total number of questions. This gives you the minimum number of correct answers needed to pass.",
      explanation: "Minimum correct = 75% of 80 = 0.75 × 80 = 60 questions."
    }
  ]
};
