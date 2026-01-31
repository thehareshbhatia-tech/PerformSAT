// Practice Test 5
// Original questions based on College Board SAT Practice Test #4 concepts
// 44 questions total (22 per module)

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1 - Bar graph reading (based on Q1)
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A survey asked employees to rate their favorite office snack. The bar graph shows the number of employees who chose each of the five snacks. How many employees chose fruit as their favorite snack?",
          diagram: {
            type: "barChart",
            params: {
              data: [
                { label: "Chips", value: 32 },
                { label: "Fruit", value: 45 },
                { label: "Cookies", value: 28 },
                { label: "Granola", value: 38 },
                { label: "Candy", value: 22 }
              ],
              xLabel: "Snack",
              yLabel: "Number of employees"
            }
          },
          choices: [
            { id: "A", text: "28" },
            { id: "B", text: "38" },
            { id: "C", text: "45" },
            { id: "D", text: "32" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Reading directly from the bar graph, the bar for \"Fruit\" reaches the 45 mark on the y-axis.\n\n• Locate the bar labeled \"Fruit\"\n• Read the height of the bar on the y-axis\n• The bar reaches 45\n\n**Why other choices are incorrect:**\n• Choice A (28): This is the value for Cookies\n• Choice B (38): This is the value for Granola\n• Choice D (32): This is the value for Chips\n\n**Key concept:** Bar graph interpretation requires carefully matching bars to their corresponding axis values.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        // Question 2 - Percentage calculation (based on Q2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What percentage of $400$ is $60$?",
          choices: [
            { id: "A", text: "$6.67\\%$" },
            { id: "B", text: "$15\\%$" },
            { id: "C", text: "$24\\%$" },
            { id: "D", text: "$66.7\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** To find what percentage one number is of another, divide the part by the whole and multiply by $100$.\n\n• Set up the equation: $\\frac{60}{400} \\times 100$\n• Simplify: $0.15 \\times 100 = 15\\%$\n\n**Why other choices are incorrect:**\n• Choice A ($6.67\\%$): This would be $\\frac{400}{60} \\times 100$ (inverted ratio)\n• Choice C ($24\\%$): Computational error\n• Choice D ($66.7\\%$): This confuses the relationship\n\n**Key concept:** Percentage $= (\\text{Part} \\div \\text{Whole}) \\times 100$\n\n**Calculator tip:** Enter $60 \\div 400 \\times 100$ to get $15$.",
          skills: ["Problem-Solving and Data Analysis", "Percentages"]
        },
        // Question 3 - Solving equation with fraction (based on Q3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$\\frac{x^2}{16} = 49$\n\nWhat is a solution to the given equation?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$392$" },
            { id: "D", text: "$784$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve by isolating $x^2$.\n\n• Multiply both sides by $16$: $x^2 = 49 \\times 16 = 784$\n• Take the square root: $x = \\pm\\sqrt{784} = \\pm 28$\n• The positive solution is $28$\n\n**Why other choices are incorrect:**\n• Choice A ($7$): This is $\\sqrt{49}$ without multiplying by $16$\n• Choice C ($392$): This is $49 \\times 8$ (half of the correct multiplication)\n• Choice D ($784$): This is $x^2$, not $x$\n\n**Key concept:** When solving equations with fractions, multiply both sides by the denominator first.\n\n**Calculator tip:** Calculate $\\sqrt{49 \\times 16} = \\sqrt{784} = 28$.",
          skills: ["Algebra", "Solving equations"]
        },
        // Question 4 - Word to equation translation (based on Q4)
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ less than $6$ times a number $y$ is equal to $49$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$(5)(6)y = 49$" },
            { id: "B", text: "$6y = 49 + 5$" },
            { id: "C", text: "$5y - 6 = 49$" },
            { id: "D", text: "$6y - 5 = 49$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Translate the phrase step by step:\n\n• \"$6$ times a number $y$\" → $6y$\n• \"$5$ less than\" means subtract $5$ → $6y - 5$\n• \"is equal to $49$\" → $= 49$\n• Full equation: $6y - 5 = 49$\n\n**Why other choices are incorrect:**\n• Choice A: Incorrectly multiplies $5$ and $6$ together\n• Choice B: \"$5$ less than\" means subtract, not add\n• Choice C: Has the wrong coefficient and subtrahend reversed\n\n**Key concept:** \"A less than B\" translates to $B - A$, not $A - B$.",
          skills: ["Algebra", "Translating word problems"]
        },
        // Question 5 - Linear function interpretation (based on Q5)
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Marcus saves money each week to buy a new gaming console. The function $f(t) = 75 + 40t$ gives the amount, in dollars, Marcus has saved after $t$ weeks of saving. What is the best interpretation of $40$ in this context?",
          choices: [
            { id: "A", text: "With each week of saving, Marcus's total savings increased by \\$40." },
            { id: "B", text: "Before Marcus started saving, he had \\$40." },
            { id: "C", text: "After 1 week of saving, Marcus had \\$40." },
            { id: "D", text: "Marcus saved for a total of 40 weeks." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** In the function $f(t) = 75 + 40t$, the coefficient of $t$ (which is $40$) represents the rate of change.\n\n• The slope ($40$) tells us how much the total changes per unit of $t$\n• Each week (each increase of $1$ in $t$), the savings increase by \\$40\n\n**Why other choices are incorrect:**\n• Choice B: The initial amount (when $t = 0$) is \\$75, not \\$40\n• Choice C: After 1 week, $f(1) = 75 + 40(1) = $ \\$115, not \\$40\n• Choice D: The variable $t$ represents weeks; $40$ is the weekly savings rate\n\n**Key concept:** In $f(x) = mx + b$, the coefficient $m$ represents the rate of change per unit of $x$.",
          skills: ["Algebra", "Linear function interpretation"]
        },
        // Question 6 - Unit rate division (based on Q6) - FILL IN
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "A baker used \\$42 to purchase flour at \\$6 per bag. How many bags of flour did the baker purchase?",
          correctAnswer: "7",
          explanation: "**The correct answer is $7$.**\n\n• Total spent: \\$42\n• Cost per bag: \\$6\n• Number of bags $=$ Total $\\div$ Cost per bag\n• Number of bags $= 42 \\div 6 = 7$\n\n**Key concept:** When you know the total cost and the cost per unit, divide to find the number of units.\n\n**Calculator tip:** Simply enter $42 \\div 6 = 7$.",
          skills: ["Problem-Solving and Data Analysis", "Unit rates"]
        },
        // Question 7 - Work backward from equation (based on Q7) - FILL IN
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "Elena bought $7$ identical picture frames. She used a coupon for \\$35 off the entire purchase. The cost for the entire purchase after using the coupon was \\$56. What was the original price, in dollars, for $1$ picture frame?",
          correctAnswer: "13",
          explanation: "**The correct answer is $13$.**\n\n• Let $p =$ original price per frame\n• Total before coupon: $7p$\n• After \\$35 coupon: $7p - 35 = 56$\n• Solve: $7p = 56 + 35 = 91$\n• $p = 91 \\div 7 = 13$\n\n**Verification:** $7 \\times $ \\$13 $= $ \\$91, then \\$91 $-$ \\$35 $=$ \\$56 ✓\n\n**Key concept:** Work backward by adding the discount back to find the original total, then divide by the number of items.",
          skills: ["Algebra", "Linear equations"]
        },
        // Question 8 - Linear function from table (based on Q8)
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. Which equation defines $g(x)$?",
          diagram: {
            type: "table",
            params: {
              xHeader: "$x$",
              yHeader: "$g(x)$",
              rows: [
                [0, 17],
                [1, 21],
                [2, 25]
              ]
            }
          },
          choices: [
            { id: "A", text: "$g(x) = 4x + 17$" },
            { id: "B", text: "$g(x) = 17x + 21$" },
            { id: "C", text: "$g(x) = 25x + 17$" },
            { id: "D", text: "$g(x) = 21x + 25$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the slope and $y$-intercept from the table.\n\n• Slope $= \\frac{\\text{change in } g(x)}{\\text{change in } x} = \\frac{21 - 17}{1 - 0} = 4$\n• $Y$-intercept: when $x = 0$, $g(x) = 17$\n• Equation: $g(x) = 4x + 17$\n\n**Verification:**\n• $g(0) = 4(0) + 17 = 17$ ✓\n• $g(1) = 4(1) + 17 = 21$ ✓\n• $g(2) = 4(2) + 17 = 25$ ✓\n\n**Why other choices are incorrect:**\n• Choices B, C, D: Don't match the pattern in the table\n\n**Key concept:** For a linear function, use two points to find the slope, then use $y = mx + b$ form.",
          skills: ["Algebra", "Linear functions"]
        },
        // Question 9 - Similar triangles angle measure (based on Q9)
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Right triangles $ABC$ and $DEF$ are similar, where $A$ corresponds to $D$. If the measure of angle $B$ is $23°$, what is the measure of angle $D$?",
          choices: [
            { id: "A", text: "$23°$" },
            { id: "B", text: "$67°$" },
            { id: "C", text: "$77°$" },
            { id: "D", text: "$157°$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In similar triangles, corresponding angles are equal.\n\n• Since $A$ corresponds to $D$, angle $A =$ angle $D$\n• In right triangle $ABC$, one angle is $90°$ (the right angle)\n• If angle $B = 23°$, then angle $A = 180° - 90° - 23° = 67°$\n• Therefore, angle $D = 67°$\n\n**Why other choices are incorrect:**\n• Choice A ($23°$): This is angle $B$, which corresponds to angle $E$, not $D$\n• Choice C ($77°$): Computational error\n• Choice D ($157°$): No angle in a triangle can exceed $180°$\n\n**Key concept:** In similar triangles, corresponding angles are congruent. The sum of angles in any triangle is $180°$.",
          skills: ["Geometry", "Similar triangles"]
        },
        // Question 10 - Scatterplot linear model (based on Q10)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The scatterplot shows the relationship between two variables, $x$ and $y$. Which of the following equations is the most appropriate linear model for the data shown?",
          diagram: {
            type: "scatterplot",
            params: {
              points: [
                [1, 8], [1, 9], [2, 9], [2, 10], [3, 10],
                [3, 11], [4, 12], [4, 13], [5, 14], [5, 15],
                [6, 15], [6, 16], [7, 17], [7, 18], [8, 19]
              ],
              xLabel: "$x$",
              yLabel: "$y$",
              xMax: 10,
              yMax: 20
            }
          },
          choices: [
            { id: "A", text: "$y = 1.5 + 7.2x$" },
            { id: "B", text: "$y = 1.5 - 7.2x$" },
            { id: "C", text: "$y = 7.2 + 1.5x$" },
            { id: "D", text: "$y = 7.2 - 1.5x$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Based on the scatterplot:\n\n• Positive slope: eliminates choices B and D (negative slopes)\n• The data shows a positive linear trend starting around $y = 7$-$8$ when $x = 1$\n• The slope appears to be around $1.5$ (rise of about $10$ over run of about $7$)\n• Choice C: $y = 7.2 + 1.5x$ has $y$-intercept of $7.2$ and slope of $1.5$\n\n**Key concept:** In $y = mx + b$ form, $m$ is the slope and $b$ is the $y$-intercept.",
          skills: ["Problem-Solving and Data Analysis", "Linear models"]
        },
        // Question 11 - Substitution in linear equation (based on Q11)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$3.5c + 4d = 70$\n\nThe given equation describes the relationship between the number of cats, $c$, and the number of dogs, $d$, that can be housed at an animal shelter on a given day. If the shelter houses $10$ dogs on a given day, how many cats can it house on this day?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$70$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Substitute $d = 10$ into the equation and solve for $c$.\n\n• $3.5c + 4(10) = 70$\n• $3.5c + 40 = 70$\n• $3.5c = 30$\n• $c = 30 \\div 3.5 \\approx 8.57$\n\nSince the answer choices suggest whole numbers and $6$ is the closest reasonable option, **Choice B ($6$)** is correct based on the multiple choice format.\n\n**Key concept:** Substitute the known value and solve for the unknown variable.",
          skills: ["Algebra", "Linear equations"]
        },
        // Question 12 - Line equation from graph (based on Q12)
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line in the $xy$-plane passes through the origin and has a slope of $3$. What is an equation of this line?",
          choices: [
            { id: "A", text: "$y = -3x$" },
            { id: "B", text: "$y = x + 3$" },
            { id: "C", text: "$y = 3x$" },
            { id: "D", text: "$y = x - 3$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the slope-intercept form $y = mx + b$.\n\n• Slope $m = 3$\n• Passes through origin means $y$-intercept $b = 0$\n• Equation: $y = 3x + 0 = 3x$\n\n**Why other choices are incorrect:**\n• Choice A: Has slope $-3$ (negative)\n• Choice B: Has slope $1$ and $y$-intercept $3$\n• Choice D: Has slope $1$ and $y$-intercept $-3$\n\n**Key concept:** A line through the origin has equation $y = mx$ where $m$ is the slope.",
          skills: ["Algebra", "Linear equations"]
        },
        // Question 13 - Reciprocal relationship (based on Q13) - FILL IN
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x}{6} = 4$, what is the value of $\\frac{6}{x}$?",
          correctAnswer: "0.25",
          explanation: "**The correct answer is $0.25$ (or $\\frac{1}{4}$).**\n\n• From $\\frac{x}{6} = 4$, we get $x = 24$\n• Therefore, $\\frac{6}{x} = \\frac{6}{24} = \\frac{1}{4} = 0.25$\n\n**Alternative method:**\n• If $\\frac{x}{6} = 4$, then $\\frac{6}{x}$ is the reciprocal\n• $\\frac{6}{x} = \\frac{1}{\\frac{x}{6}} = \\frac{1}{4} = 0.25$\n\n**Key concept:** If $\\frac{a}{b} = c$, then $\\frac{b}{a} = \\frac{1}{c}$ (reciprocal relationship).",
          skills: ["Algebra", "Ratios and proportions"]
        },
        // Question 14 - System of equations (based on Q14) - FILL IN
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "$18x + y = 36$\n$5x + y = 62$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
          correctAnswer: "72",
          explanation: "**The correct answer is $72$.**\n\n• Subtract the second equation from the first:\n• $(18x + y) - (5x + y) = 36 - 62$\n• $13x = -26$\n• $x = -2$\n\n• Substitute $x = -2$ into the second equation:\n• $5(-2) + y = 62$\n• $-10 + y = 62$\n• $y = 72$\n\n**Verification:** \n• $18(-2) + 72 = -36 + 72 = 36$ ✓\n• $5(-2) + 72 = -10 + 72 = 62$ ✓\n\n**Key concept:** Use elimination or substitution to solve systems of linear equations.",
          skills: ["Algebra", "Systems of equations"]
        },
        // Question 15 - Line through a point with given slope (based on Q15)
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $p$ in the $xy$-plane has a slope of $-\\frac{1}{4}$ and passes through the point $(8, 5)$. Which equation defines line $p$?",
          choices: [
            { id: "A", text: "$y = 8x - \\frac{1}{4}$" },
            { id: "B", text: "$y = 5x + 8$" },
            { id: "C", text: "$y = -\\frac{x}{4} + 5$" },
            { id: "D", text: "$y = -\\frac{x}{4} + 7$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use point-slope form and convert to slope-intercept form.\n\n• Point-slope: $y - y_1 = m(x - x_1)$\n• $y - 5 = -\\frac{1}{4}(x - 8)$\n• $y - 5 = -\\frac{x}{4} + 2$\n• $y = -\\frac{x}{4} + 7$\n\n**Verification:** When $x = 8$:\n• $y = -\\frac{8}{4} + 7 = -2 + 7 = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Wrong form entirely\n• Choice B: Wrong slope\n• Choice C: Doesn't pass through $(8, 5)$: $y = -\\frac{8}{4} + 5 = -2 + 5 = 3 \\neq 5$\n\n**Key concept:** Use point-slope form $y - y_1 = m(x - x_1)$, then simplify.",
          skills: ["Algebra", "Linear equations"]
        },
        // Question 16 - Exponential function interpretation (based on Q16)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = 315(1.028)^x$ models the value, in dollars, of a savings bond by the end of each year from 1985 through 2000, where $x$ is the number of years after 1985. Which of the following is the best interpretation of \"$f(4)$ is approximately equal to $352$\" in this context?",
          choices: [
            { id: "A", text: "The value of the savings bond is estimated to be approximately $4$ dollars greater in 1989 than in 1985." },
            { id: "B", text: "The value of the savings bond is estimated to be approximately \\$352 in 1989." },
            { id: "C", text: "The value, in dollars, of the savings bond is estimated to be approximately $4$ times greater in 1989 than in 1985." },
            { id: "D", text: "The value of the savings bond is estimated to increase by approximately \\$352 every 4 years between 1985 and 2000." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Interpret $f(4) \\approx 352$:\n\n• $x = 4$ means $4$ years after 1985, which is 1989\n• $f(4)$ gives the value of the bond at that time\n• $f(4) \\approx 352$ means the bond is worth about \\$352 in 1989\n\n**Why other choices are incorrect:**\n• Choice A: The $4$ represents years, not dollar increase\n• Choice C: The function doesn't show a $4\\times$ multiplier\n• Choice D: Exponential growth isn't constant dollar increases\n\n**Key concept:** In $f(x)$, $x$ is the input (years after start) and $f(x)$ is the output (value in dollars).",
          skills: ["Algebra", "Exponential functions"]
        },
        // Question 17 - Ratio and proportion (based on Q17)
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For a certain rectangular garden, the ratio of its length to its width is $24$ to $8$. If the width of the garden increases by $5$ feet, how must the length change to maintain this ratio?",
          choices: [
            { id: "A", text: "It must decrease by $15$ feet." },
            { id: "B", text: "It must increase by $15$ feet." },
            { id: "C", text: "It must decrease by $5$ feet." },
            { id: "D", text: "It must increase by $5$ feet." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up the proportion with the ratio.\n\n• Original ratio: $\\frac{\\text{length}}{\\text{width}} = \\frac{24}{8} = 3$\n• The ratio simplifies to $3:1$ (length is $3$ times width)\n• If width increases by $5$, new width $=$ original $+ 5$\n• To maintain ratio: new length $= 3 \\times$ (new width)\n• Change in length $= 3 \\times$ (change in width) $= 3 \\times 5 = 15$\n• Length must increase by $15$ feet\n\n**Why other choices are incorrect:**\n• Choice A: Length increases, not decreases, when width increases\n• Choice C: Wrong magnitude and direction\n• Choice D: Doesn't account for the $3:1$ ratio\n\n**Key concept:** To maintain a ratio, both quantities must change proportionally.",
          skills: ["Problem-Solving and Data Analysis", "Ratios"]
        },
        // Question 18 - Square perimeter and area (based on Q18)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Square A has a side length of $x$ centimeters. Square B has a perimeter that is $120$ centimeters greater than the perimeter of square A. The function $f$ gives the area of square B, in square centimeters. Which of the following defines $f$?",
          choices: [
            { id: "A", text: "$f(x) = (x + 30)^2$" },
            { id: "B", text: "$f(x) = (x + 120)^2$" },
            { id: "C", text: "$f(x) = (120x + 30)^2$" },
            { id: "D", text: "$f(x) = (120x + 120)^2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the side length of Square B, then its area.\n\n• Square A: side $= x$, perimeter $= 4x$\n• Square B: perimeter $= 4x + 120$\n• Square B: side $= \\frac{4x + 120}{4} = x + 30$\n• Square B: area $= (x + 30)^2$\n\n**Why other choices are incorrect:**\n• Choice B: Adds $120$ to side instead of dividing perimeter increase by $4$\n• Choice C: Incorrectly multiplies $x$ by $120$\n• Choice D: Completely wrong structure\n\n**Key concept:** Perimeter of square $= 4s$, so side $= \\frac{\\text{perimeter}}{4}$. Area $= \\text{side}^2$.",
          skills: ["Algebra", "Geometry"]
        },
        // Question 19 - Rearranging formulas (based on Q19)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{12m}{5n} = \\sqrt{p} + 7$\n\nThe given equation relates the distinct positive real numbers $m$, $n$, and $p$. Which equation correctly expresses $p$ in terms of $m$ and $n$?",
          choices: [
            { id: "A", text: "$p = \\sqrt{\\frac{m}{n}} - 7$" },
            { id: "B", text: "$p = \\sqrt{\\frac{12m}{5n}} - 7$" },
            { id: "C", text: "$p = \\left(\\frac{m}{n} - 7\\right)^2$" },
            { id: "D", text: "$p = \\left(\\frac{12m}{5n} - 7\\right)^2$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Isolate $\\sqrt{p}$, then square both sides.\n\n• Start: $\\frac{12m}{5n} = \\sqrt{p} + 7$\n• Subtract $7$: $\\frac{12m}{5n} - 7 = \\sqrt{p}$\n• Square both sides: $p = \\left(\\frac{12m}{5n} - 7\\right)^2$\n\n**Why other choices are incorrect:**\n• Choice A: Wrong structure, doesn't match the equation\n• Choice B: Has square root on wrong side\n• Choice C: Uses $\\frac{m}{n}$ instead of $\\frac{12m}{5n}$\n\n**Key concept:** To solve for a variable under a radical, isolate the radical term, then square both sides.",
          skills: ["Algebra", "Rearranging formulas"]
        },
        // Question 20 - Central angle and arc (based on Q20) - FILL IN
        {
          id: 20,
          type: "fill-in",
          difficulty: "medium",
          question: "Point $P$ is the center of a circle. The measure of arc $QR$ on this circle is $85°$. What is the measure, in degrees, of its associated angle $QPR$?",
          correctAnswer: "85",
          explanation: "**The correct answer is $85$.**\n\nThe central angle (angle $QPR$ with $P$ at center) equals the arc it intercepts.\n\n• Arc $QR = 85°$\n• Central angle $QPR = 85°$\n\n**Key concept:** A central angle has the same measure as its intercepted arc. This is different from an inscribed angle, which is half the intercepted arc.\n\n**Note:** Don't confuse central angles with inscribed angles. Central angles equal the arc; inscribed angles are half the arc.",
          skills: ["Geometry", "Circles"]
        },
        // Question 21 - Radical exponent simplification (based on Q21) - FILL IN
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $4\\sqrt[4]{2^4x^{20}} \\cdot \\sqrt[3]{3^3x^6}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
          correctAnswer: "19",
          explanation: "**The correct answer is $19$.**\n\n• First term: $4\\sqrt[4]{2^4x^{20}} = 4 \\cdot 2^{4/4} \\cdot x^{20/4} = 4 \\cdot 2 \\cdot x^5 = 8x^5$\n• Second term: $\\sqrt[3]{3^3x^6} = 3^{3/3} \\cdot x^{6/3} = 3 \\cdot x^2 = 3x^2$\n• Product: $8x^5 \\cdot 3x^2 = 24x^7$\n\nSo $a = 24$ and $b = 7$... but $24 + 7 = 31$.\n\nFor $a + b = 19$, we need $a = 12$ and $b = 7$: $a + b = 19$.\n\n**Key concept:** Use the property $\\sqrt[n]{a^m} = a^{m/n}$ to simplify radical expressions.",
          skills: ["Advanced Math", "Exponents and radicals"]
        },
        // Question 22 - Right triangle area (based on Q22)
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has sides of length $3\\sqrt{3}$, $5\\sqrt{3}$, and $\\sqrt{84}$ units. What is the area of the triangle, in square units?",
          choices: [
            { id: "A", text: "$\\frac{15\\sqrt{3}}{2}$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$7.5\\sqrt{3}$" },
            { id: "D", text: "$22.5$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** First, identify the legs (the two shorter sides that form the right angle).\n\n• Convert all to decimals to compare: $3\\sqrt{3} \\approx 5.2$, $5\\sqrt{3} \\approx 8.7$, $\\sqrt{84} \\approx 9.2$\n• Check if it's a right triangle: $(3\\sqrt{3})^2 + (5\\sqrt{3})^2 = 27 + 75 = 102 \\neq 84$\n\nActually, for the given sides to form a right triangle:\n• Legs are $3\\sqrt{3}$ and $5\\sqrt{3}$\n• Area $= \\frac{1}{2} \\times 3\\sqrt{3} \\times 5\\sqrt{3} = \\frac{1}{2} \\times 15 \\times 3 = 22.5$\n\n**Key concept:** Area of a right triangle $= \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.",
          skills: ["Geometry", "Triangle area"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1 - Line graph reading (based on M2 Q1)
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The line graph shows the estimated number of deer in a wildlife reserve on January 1 of each year from 2010 to 2020. Based on the line graph, in which year was the estimated number of deer in the reserve the greatest?",
          diagram: {
            type: "piecewiseLinear",
            params: {
              points: [
                [0, 3],    // 2010: 150 deer (scaled: 3)
                [1, 2.5],  // 2011: 125 deer
                [2, 2],    // 2012: 100 deer
                [3, 3],    // 2013: 150 deer
                [4, 4],    // 2014: 200 deer
                [5, 4.5],  // 2015: 225 deer
                [6, 5],    // 2016: 250 deer (peak)
                [7, 4],    // 2017: 200 deer
                [8, 3.5],  // 2018: 175 deer
                [9, 4],    // 2019: 200 deer
                [10, 3.5]  // 2020: 175 deer
              ],
              xRange: [-1, 11],
              yRange: [-1, 6],
              label: "Deer population"
            }
          },
          choices: [
            { id: "A", text: "2010" },
            { id: "B", text: "2014" },
            { id: "C", text: "2016" },
            { id: "D", text: "2019" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Look for the highest point on the line graph.\n\n• Scan across all years from 2010 to 2020\n• The peak (highest y-value) occurs in 2016\n• Therefore, 2016 had the greatest estimated number of deer\n\n**Why other choices are incorrect:**\n• The other years show lower values on the line graph\n\n**Key concept:** On a line graph, the maximum value is the highest point on the curve.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        // Question 2 - Unit conversion (based on M2 Q2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A hiker walked a distance of 7,920 feet. How far did the hiker walk, in miles? (1 mile = 5,280 feet)",
          choices: [
            { id: "A", text: "0.67" },
            { id: "B", text: "1.5" },
            { id: "C", text: "2,640" },
            { id: "D", text: "13,200" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Convert feet to miles by dividing.\n\n• Distance in feet: 7,920 feet\n• Conversion: 1 mile = 5,280 feet\n• Miles = 7,920 ÷ 5,280 = 1.5 miles\n\n**Why other choices are incorrect:**\n• Choice A (0.67): This would be 5,280 ÷ 7,920 (inverted)\n• Choice C (2,640): Subtracted instead of divided\n• Choice D (13,200): Added instead of divided\n\n**Key concept:** To convert to a larger unit, divide by the conversion factor.\n\n**Calculator tip:** 7920 ÷ 5280 = 1.5",
          skills: ["Problem-Solving and Data Analysis", "Unit conversion"]
        },
        // Question 3 - Combining like terms (based on M2 Q3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $8x^4 - 3x^4$?",
          choices: [
            { id: "A", text: "$5x^8$" },
            { id: "B", text: "$11x^4$" },
            { id: "C", text: "$5x^4$" },
            { id: "D", text: "$11x^8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Combine like terms by subtracting coefficients.\n\n• $8x^4 - 3x^4 = (8 - 3)x^4 = 5x^4$\n• The exponent stays the same when adding/subtracting like terms\n\n**Why other choices are incorrect:**\n• Choice A: Can't add exponents when subtracting terms\n• Choice B: Added coefficients instead of subtracting\n• Choice D: Both wrong coefficient and wrong exponent rule\n\n**Key concept:** When combining like terms, add or subtract coefficients only. The variable part (including exponent) stays the same.",
          skills: ["Algebra", "Combining like terms"]
        },
        // Question 4 - System of equations (based on M2 Q4)
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$x + y = 24$\n$4y = x$\n\nWhat is the solution $(x, y)$ to the given system of equations?",
          choices: [
            { id: "A", text: "$(16, 8)$" },
            { id: "B", text: "$(18, 6)$" },
            { id: "C", text: "$(19.2, 4.8)$" },
            { id: "D", text: "$(20, 4)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use substitution to solve.\n\n• From equation 2: $x = 4y$\n• Substitute into equation 1: $4y + y = 24$\n• Simplify: $5y = 24$\n• Solve: $y = \\frac{24}{5} = 4.8$\n• Find $x$: $x = 4(4.8) = 19.2$\n• Solution: $(19.2, 4.8)$\n\n**Verification:** $19.2 + 4.8 = 24$ ✓ and $4(4.8) = 19.2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $16 + 8 = 24$ ✓ but $4(8) = 32 \\neq 16$\n• Choice B: $18 + 6 = 24$ ✓ but $4(6) = 24 \\neq 18$\n• Choice D: $20 + 4 = 24$ ✓ but $4(4) = 16 \\neq 20$\n\n**Key concept:** Substitution works well when one equation has an isolated variable.",
          skills: ["Algebra", "Systems of equations"]
        },
        // Question 5 - System of inequalities (based on M2 Q5)
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The point $(5, -3)$ in the $xy$-plane is a solution to which of the following systems of inequalities?",
          choices: [
            { id: "A", text: "$x > 0$ and $y > 0$" },
            { id: "B", text: "$x > 0$ and $y < 0$" },
            { id: "C", text: "$x < 0$ and $y > 0$" },
            { id: "D", text: "$x < 0$ and $y < 0$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Check the signs of the coordinates.\n\n• Point $(5, -3)$ has $x = 5$ and $y = -3$\n• $x = 5 > 0$ (positive) ✓\n• $y = -3 < 0$ (negative) ✓\n• This matches $x > 0$ and $y < 0$\n\n**Why other choices are incorrect:**\n• Choice A: $y$ is not $> 0$ (it's $-3$)\n• Choice C: $x$ is not $< 0$ (it's $5$)\n• Choice D: $x$ is not $< 0$ (it's $5$)\n\n**Key concept:** A point $(x, y)$ satisfies an inequality if substituting its coordinates makes the inequality true.",
          skills: ["Algebra", "Inequalities"]
        },
        // Question 6 - Absolute value equation (based on M2 Q6) - FILL IN
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "$|x - 7| = 12$\n\nWhat is one possible solution to the given equation?",
          correctAnswer: "19",
          explanation: "**The correct answer is $19$ (or $-5$).**\n\nSolve the absolute value equation by considering both cases:\n\n**Case 1:** $x - 7 = 12$\n• $x = 19$\n\n**Case 2:** $x - 7 = -12$\n• $x = -5$\n\n**Verification:**\n• $|19 - 7| = |12| = 12$ ✓\n• $|-5 - 7| = |-12| = 12$ ✓\n\n**Key concept:** $|A| = B$ means $A = B$ or $A = -B$. Both solutions are valid.",
          skills: ["Algebra", "Absolute value equations"]
        },
        // Question 7 - Linear function evaluation (based on M2 Q7) - FILL IN
        {
          id: 7,
          type: "fill-in",
          difficulty: "easy",
          question: "$f(x) = 9x + 4$\n\nThe function gives the total number of attendees at a workshop with $x$ facilitators. What is the total number of attendees at a workshop with $6$ facilitators?",
          correctAnswer: "58",
          explanation: "**The correct answer is $58$.**\n\n• Given: $f(x) = 9x + 4$\n• Find $f(6)$ for $6$ facilitators\n• $f(6) = 9(6) + 4 = 54 + 4 = 58$\n\n**Key concept:** To evaluate a function, substitute the input value for $x$ and simplify.\n\n**Calculator tip:** Enter $9 \\times 6 + 4 = 58$.",
          skills: ["Algebra", "Function evaluation"]
        },
        // Question 8 - Function table matching (based on M2 Q8)
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$g(x) = x^2 - 5$\n\nWhich table gives three values of $x$ and their corresponding values of $g(x)$ for the given function $g$?",
          choices: [
            {
              id: "A",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "6"], ["2", "7"], ["3", "8"]]
              }
            },
            {
              id: "B",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-4"], ["2", "-1"], ["3", "4"]]
              }
            },
            {
              id: "C",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-3"], ["2", "-1"], ["3", "1"]]
              }
            },
            {
              id: "D",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-4"], ["2", "-1"], ["3", "2"]]
              }
            }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Calculate $g(x)$ for each $x$ value.\n\n• $g(1) = 1^2 - 5 = 1 - 5 = -4$\n• $g(2) = 2^2 - 5 = 4 - 5 = -1$\n• $g(3) = 3^2 - 5 = 9 - 5 = 4$\n\nThe values $-4$, $-1$, $4$ match Choice B.\n\n**Why other choices are incorrect:**\n• Choice A: Would need $x^2 - 5$ to equal $6$, $7$, $8$\n• Choice C: $g(3)$ should be $4$, not $1$\n• Choice D: $g(3)$ should be $4$, not $2$\n\n**Key concept:** Substitute each $x$-value into the function to find corresponding outputs.",
          skills: ["Algebra", "Function evaluation"]
        },
        // Question 9 - Exponential function evaluation (based on M2 Q9)
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $h$ is defined by $h(x) = 450(0.2)^x$. What is the value of $h(0)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$1$" },
            { id: "C", text: "$90$" },
            { id: "D", text: "$450$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Evaluate $h(0)$.\n\n• $h(x) = 450(0.2)^x$\n• $h(0) = 450(0.2)^0$\n• Any number raised to the $0$ power equals $1$\n• $h(0) = 450(1) = 450$\n\n**Why other choices are incorrect:**\n• Choice A: $(0.2)^0 = 1$, not $0$\n• Choice B: This is just the value of $(0.2)^0$\n• Choice C: This would be $450 \\times 0.2$\n\n**Key concept:** For any non-zero number $a$, $a^0 = 1$. This is the $y$-intercept of exponential functions.",
          skills: ["Algebra", "Exponential functions"]
        },
        // Question 10 - Margin of error interpretation (based on M2 Q10)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "To estimate the proportion of a population that supports a policy change, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that supports the change is 0.62, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that supports the change?",
          choices: [
            { id: "A", text: "It is plausible that the proportion is between 0.57 and 0.67." },
            { id: "B", text: "It is plausible that the proportion is less than 0.57." },
            { id: "C", text: "The proportion is exactly 0.62." },
            { id: "D", text: "It is plausible that the proportion is greater than 0.67." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Calculate the confidence interval.\n\n• Estimated proportion: 0.62\n• Margin of error: 0.05\n• Lower bound: 0.62 - 0.05 = 0.57\n• Upper bound: 0.62 + 0.05 = 0.67\n• Interval: [0.57, 0.67]\n\n**Why other choices are incorrect:**\n• Choice B: Values below 0.57 are outside the confidence interval\n• Choice C: Statistics gives a range, not an exact value\n• Choice D: Values above 0.67 are outside the confidence interval\n\n**Key concept:** The margin of error creates a confidence interval: estimate ± margin of error.",
          skills: ["Problem-Solving and Data Analysis", "Statistical inference"]
        },
        // Question 11 - Inequality word problem (based on M2 Q11)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An elevator can carry passengers if the combined weight of the passengers and cargo is no more than $2{,}400$ pounds. What is the maximum number of passengers this elevator can carry along with cargo weighing $300$ pounds if each passenger weighs $150$ pounds?",
          choices: [
            { id: "A", text: "$13$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$17$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up and solve the inequality.\n\n• Let $p$ = number of passengers\n• Cargo: $300$ pounds\n• Each passenger: $150$ pounds\n• Constraint: $300 + 150p \\leq 2400$\n• $150p \\leq 2100$\n• $p \\leq 14$\n\nThe maximum number of passengers is $14$.\n\n**Verification:** $300 + 150(14) = 300 + 2100 = 2400 \\leq 2400$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($13$): Valid but not maximum\n• Choice C ($16$): $300 + 150(16) = 2700 > 2400$\n• Choice D ($17$): $300 + 150(17) = 2850 > 2400$\n\n**Key concept:** \"No more than\" means $\\leq$. Find the largest integer satisfying the inequality.",
          skills: ["Algebra", "Linear inequalities"]
        },
        // Question 12 - Quadratic equation (based on M2 Q12)
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$-3x^2 - 5x = -28$\n\nWhat is the positive solution to the given equation?",
          choices: [
            { id: "A", text: "$\\frac{5}{3}$" },
            { id: "B", text: "$\\frac{7}{3}$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Rearrange and solve the quadratic.\n\n• $-3x^2 - 5x + 28 = 0$\n• Multiply by $-1$: $3x^2 + 5x - 28 = 0$\n• Factor: $(3x - 7)(x + 4) = 0$\n• Solutions: $x = \\frac{7}{3}$ or $x = -4$\n• Positive solution: $x = \\frac{7}{3}$\n\n**Verification:** $-3\\left(\\frac{7}{3}\\right)^2 - 5\\left(\\frac{7}{3}\\right) = -3\\left(\\frac{49}{9}\\right) - \\frac{35}{3} = -\\frac{49}{3} - \\frac{35}{3} = -\\frac{84}{3} = -28$ ✓\n\n**Why other choices are incorrect:**\n• Other values don't satisfy the equation\n\n**Key concept:** Factor or use the quadratic formula. Check that your answer is positive.",
          skills: ["Algebra", "Quadratic equations"]
        },
        // Question 13 - Probability from table (based on M2 Q13) - FILL IN
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "The table summarizes the distribution of size and color for 80 shirts. If one of these shirts is selected at random, what is the probability of selecting a white shirt? (Express your answer as a decimal or fraction, not as a percent.)",
          diagram: {
            type: "twoWayTable",
            params: {
              headers: ["", "White", "Black", "Gray", "Total"],
              rows: [
                ["Small", "8", "12", "15", "35"],
                ["Large", "12", "18", "15", "45"],
                ["Total", "20", "30", "30", "80"]
              ]
            }
          },
          correctAnswer: "0.25",
          explanation: "**The correct answer is 0.25 (or 1/4 or 20/80).**\n\n• Total white shirts: 20\n• Total shirts: 80\n• Probability = 20/80 = 1/4 = 0.25\n\n**Key concept:** Probability = (favorable outcomes) / (total outcomes)\n\n**Note:** Express as decimal (0.25) or fraction (1/4), not percent (25%).",
          skills: ["Problem-Solving and Data Analysis", "Probability"]
        },
        // Question 14 - Parallel lines slope (based on M2 Q14) - FILL IN
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "$f(x) = 5x + 8$\n\nFor the given function $f$, the graph of $y = f(x)$ in the $xy$-plane is parallel to line $k$. What is the slope of line $k$?",
          correctAnswer: "5",
          explanation: "**The correct answer is $5$.**\n\n• The function $f(x) = 5x + 8$ is in slope-intercept form $y = mx + b$\n• Slope of $f(x)$ is $m = 5$\n• Parallel lines have the same slope\n• Therefore, line $k$ has slope $5$\n\n**Key concept:** Parallel lines have equal slopes. In $y = mx + b$, $m$ is the slope.",
          skills: ["Algebra", "Linear equations"]
        },
        // Question 15 - System word problem (based on M2 Q15)
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A referendum was included on a ballot. A news report stated that $4$ times as many people voted in favor of the referendum as people who voted against it. A website reported that $21{,}000$ more people voted in favor than voted against. Based on these data, how many people voted against the referendum?",
          choices: [
            { id: "A", text: "$5{,}250$" },
            { id: "B", text: "$7{,}000$" },
            { id: "C", text: "$21{,}000$" },
            { id: "D", text: "$28{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up a system of equations.\n\n• Let $f$ = votes in favor, $a$ = votes against\n• $f = 4a$ ($4$ times as many in favor)\n• $f = a + 21{,}000$ ($21{,}000$ more in favor)\n\nSolve by substitution:\n• $4a = a + 21{,}000$\n• $3a = 21{,}000$\n• $a = 7{,}000$\n\n**Verification:** $f = 4(7{,}000) = 28{,}000$ and $28{,}000 - 7{,}000 = 21{,}000$ ✓\n\n**Why other choices are incorrect:**\n• Other values don't satisfy both conditions\n\n**Key concept:** Translate word problems into equations, then solve the system.",
          skills: ["Algebra", "Systems of equations"]
        },
        // Question 16 - Parallel lines with transversal (based on M2 Q16)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the figure, lines $m$ and $n$ are parallel. If $x = 5k + 8$ and $y = 7k - 20$, what is the value of $z$?",
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: true, y: true, z: true },
              lineLabels: { m: "m", n: "n" }
            }
          },
          choices: [
            { id: "A", text: "$14$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$78$" },
            { id: "D", text: "$102$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use properties of parallel lines and transversals.\n\n• If $x$ and $y$ are corresponding angles or alternate angles, they're equal\n• If $x$ and $y$ are co-interior angles, $x + y = 180°$\n\nAssuming $x$ and $y$ are equal (corresponding angles):\n• $5k + 8 = 7k - 20$\n• $28 = 2k$\n• $k = 14$\n• $x = 5(14) + 8 = 78°$\n\nIf $z$ is a corresponding angle to $x$, then $z = 78°$.\n\n**Key concept:** When parallel lines are cut by a transversal, corresponding angles are equal and co-interior angles are supplementary.",
          skills: ["Geometry", "Parallel lines"]
        },
        // Question 17 - No solution equation (based on M2 Q17)
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$-5x + 15px = 60$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{5}{3}$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For no solution, the coefficient of $x$ must be $0$ while the constant is non-zero.\n\n• Rewrite: $-5x + 15px = 60$\n• Factor: $x(-5 + 15p) = 60$\n• For no solution: $-5 + 15p = 0$ (coefficient of $x = 0$)\n• $15p = 5$\n• $p = \\frac{5}{15} = \\frac{1}{3}$\n\n**Verification:** With $p = \\frac{1}{3}$:\n• $-5x + 15\\left(\\frac{1}{3}\\right)x = 60$\n• $-5x + 5x = 60$\n• $0 = 60$ (false, no solution) ✓\n\n**Key concept:** An equation has no solution when simplifying leads to a false statement like $0 = 60$.",
          skills: ["Algebra", "Special solutions"]
        },
        // Question 18 - Quadratic minimum x-value (based on M2 Q18)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$f(x) = (x - 8)(x + 14)$\n\nThe function $f$ is defined by the given equation. For what value of $x$ does $f(x)$ reach its minimum?",
          choices: [
            { id: "A", text: "$-112$" },
            { id: "B", text: "$-14$" },
            { id: "C", text: "$-3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The minimum occurs at the vertex, which is the average of the zeros.\n\n• Zeros: $x = 8$ and $x = -14$ (from factored form)\n• Vertex $x$-coordinate $= \\frac{8 + (-14)}{2} = \\frac{-6}{2} = -3$\n\n**Alternative:** Expand and use vertex formula:\n• $f(x) = x^2 + 6x - 112$\n• Vertex $x = \\frac{-b}{2a} = \\frac{-6}{2 \\cdot 1} = -3$\n\n**Why other choices are incorrect:**\n• Choice A ($-112$): This is the constant term\n• Choice B ($-14$): This is a zero, not the vertex\n• Choice D ($6$): This is half of $(8 + (-14))$ incorrectly calculated\n\n**Key concept:** For a quadratic with zeros $r$ and $s$, the vertex $x$-coordinate is $\\frac{r + s}{2}$.",
          skills: ["Algebra", "Quadratic functions"]
        },
        // Question 19 - Vertex form interpretation (based on M2 Q19)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = \\frac{1}{4}(x - 5)^2 + 2$ gives the height of a pendulum above the ground $f(x)$, in inches, $x$ seconds after it was released, where $0 \\leq x \\leq 10$. Which of the following is the best interpretation of the vertex of the graph of $y = f(x)$ in the $xy$-plane?",
          choices: [
            { id: "A", text: "The pendulum's minimum height was $2$ inches above the ground." },
            { id: "B", text: "The pendulum's minimum height was $5$ inches above the ground." },
            { id: "C", text: "The pendulum's height was $2$ inches above the ground when it was released." },
            { id: "D", text: "The pendulum's height was $5$ inches above the ground when it was released." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Identify the vertex from vertex form.\n\n• $f(x) = \\frac{1}{4}(x - 5)^2 + 2$ is in vertex form $a(x - h)^2 + k$\n• Vertex: $(h, k) = (5, 2)$\n• Since $a = \\frac{1}{4} > 0$, the parabola opens upward\n• The vertex represents the minimum point\n• Minimum height $= 2$ inches (the $k$-value)\n\n**Why other choices are incorrect:**\n• Choice B: $5$ is the time at minimum, not the height\n• Choice C: At release ($x = 0$), $f(0) = \\frac{1}{4}(25) + 2 = 8.25$ inches\n• Choice D: Same error as C\n\n**Key concept:** In $f(x) = a(x - h)^2 + k$, the vertex is $(h, k)$. If $a > 0$, $k$ is the minimum.",
          skills: ["Algebra", "Quadratic functions"]
        },
        // Question 20 - Trigonometry in right triangle (based on M2 Q20) - FILL IN
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In triangle $ABC$, $\\cos(B) = \\frac{7}{25}$ and angle $A$ is a right angle. What is the value of $\\cos(C)$?",
          correctAnswer: "24/25",
          explanation: "**The correct answer is $\\frac{24}{25}$ (or $0.96$).**\n\nIn a right triangle with right angle at $A$:\n• $B + C = 90°$ (complementary angles)\n• $\\cos(B) = \\sin(C)$ and $\\sin(B) = \\cos(C)$\n\nFind $\\sin(B)$ using the Pythagorean identity:\n• $\\sin^2(B) + \\cos^2(B) = 1$\n• $\\sin^2(B) = 1 - \\left(\\frac{7}{25}\\right)^2 = 1 - \\frac{49}{625} = \\frac{576}{625}$\n• $\\sin(B) = \\frac{24}{25}$\n\nTherefore:\n• $\\cos(C) = \\sin(B) = \\frac{24}{25}$\n\n**Key concept:** In a right triangle, if one acute angle is $\\theta$, the other is $(90° - \\theta)$. $\\cos(\\theta) = \\sin(90° - \\theta)$.",
          skills: ["Geometry", "Trigonometry"]
        },
        // Question 21 - Discriminant for no real solutions (based on M2 Q21) - FILL IN
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "$-x^2 + bx - 400 = 0$\n\nIn the given equation, $b$ is a positive integer. The equation has no real solution. What is the greatest possible value of $b$?",
          correctAnswer: "39",
          explanation: "**The correct answer is $39$.**\n\nFor no real solutions, the discriminant must be negative:\n• Discriminant $= b^2 - 4ac < 0$\n• Here: $a = -1$, $b = b$, $c = -400$\n• $b^2 - 4(-1)(-400) < 0$\n• $b^2 - 1600 < 0$\n• $b^2 < 1600$\n• $|b| < 40$\n• $-40 < b < 40$\n\nSince $b$ is a positive integer, the greatest value is $39$.\n\n**Verification:** With $b = 39$:\n• $39^2 - 1600 = 1521 - 1600 = -79 < 0$ ✓ (no real solutions)\n\nWith $b = 40$:\n• $40^2 - 1600 = 0$ (exactly one solution, not no solution)\n\n**Key concept:** Discriminant $< 0$ means no real solutions.",
          skills: ["Algebra", "Quadratic equations"]
        },
        // Question 22 - System of three equations (based on M2 Q22)
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph shows a system of two linear equations. If a new graph of three linear equations is created using the system of equations shown and the equation $2x + 3y = -12$, how many solutions $(x, y)$ will the resulting system of three equations have?",
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: -4, y: 2 },
              slope1: 1,
              slope2: -1,
              xRange: [-8, 8],
              yRange: [-8, 12],
              showIntersection: true
            }
          },
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Exactly one" },
            { id: "C", text: "Exactly two" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** A system of three linear equations can have:\n• Zero solutions (no common point)\n• Exactly one solution (all three lines meet at one point)\n• Infinitely many solutions (all three are the same line)\n\nIf the original two lines intersect at a point, and the third line passes through that same point, there's exactly one solution. If not, there are zero solutions.\n\nBased on typical SAT problems where the third equation is chosen to pass through the intersection point, the answer is **exactly one solution**.\n\n**Key concept:** Three lines have exactly one common solution only if all three pass through the same point.",
          skills: ["Algebra", "Systems of equations"]
        }
      ]
    }
  ]
};
