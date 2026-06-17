// Practice Test 9 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest9M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "Which of the following is equivalent to $7 + 3x + 2 - x$?",
      choices: [
        // distractor: drops the constant
        { id: "A", text: "$2x$" },
        { id: "B", text: "$2x + 9$" },
        // distractor: adds variables incorrectly
        { id: "C", text: "$4x + 9$" },
        // distractor: subtracts wrong direction
        { id: "D", text: "$-2x + 9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Group the constants and the variables: $7+2=9$ and $3x-x=2x$, giving $2x+9$.\n\n**The Full Solution:**\nStep 1: Collect the variable terms: $3x-x=2x$.\nStep 2: Collect the constants: $7+2=9$.\nStep 3: Combine: $2x+9$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x$): keeps the variable term but drops the constants.\n* Choice C ($4x+9$): adds the coefficients $3+1=4$ instead of subtracting for $3x-x$.\n* Choice D ($-2x+9$): subtracts in the wrong direction, getting $x-3x$.\n\n**Test Day Takeaway:** Combine like terms by collecting all variable terms together and all constants together, then adding or subtracting within each group.",
      skills: ["combining-like-terms", "equivalent-expressions"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $\\dfrac{3}{4} + \\dfrac{1}{2}$? Express your answer as a decimal.",
      correctAnswer: "1.25",
      explanation: "**SAT Pattern: Adding Fractions with Different Denominators**\n\n**The correct answer is $1.25$.**\n\n**The Fast Way (~10s):** Rewrite $\\frac{1}{2}$ as $\\frac{2}{4}$: $\\frac{3}{4}+\\frac{2}{4}=\\frac{5}{4}=1.25$.\n\n**The Full Solution:**\nStep 1: The least common denominator of $4$ and $2$ is $4$.\nStep 2: Convert: $\\frac{1}{2}=\\frac{2}{4}$.\nStep 3: Add the numerators over the common denominator: $\\frac{3}{4}+\\frac{2}{4}=\\frac{5}{4}$.\nStep 4: As a decimal, $\\frac{5}{4}=1.25$.\n\n**Common Mistakes:** Adding straight across to get $\\frac{4}{6}$; forgetting to convert $\\frac{1}{2}$ before adding.\n\n**Test Day Takeaway:** To add fractions, find a common denominator first, then add only the numerators. Convert to a decimal as the final step.",
      skills: ["arithmetic"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $4y - 1 = 11$, what is the value of $y$?",
      choices: [
        // distractor: divides 11 by 4
        { id: "A", text: "$\\dfrac{11}{4}$" },
        // distractor: stops one step early — gives 4y
        { id: "B", text: "$12$" },
        { id: "C", text: "$3$" },
        // distractor: subtracts instead of adds
        { id: "D", text: "$\\dfrac{5}{2}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Add $1$ to both sides, then divide by $4$: $4y=12 \\Rightarrow y=3$.\n\n**The Full Solution:**\nStep 1: Start from $4y-1=11$. Add $1$ to both sides: $4y=12$.\nStep 2: Divide both sides by $4$: $y=3$. That is choice C.\nStep 3: Check: $4(3)-1=12-1=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{4}$): divides $11$ by $4$ without first adding $1$.\n* Choice B ($12$): stops at $4y=12$ instead of dividing by $4$.\n* Choice D ($\\frac{5}{2}$): subtracts $1$ from $11$ to get $10$, then divides by $4$.\n\n**Test Day Takeaway:** In a linear equation, undo addition and subtraction first, then undo multiplication and division — reverse the order of operations.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the perimeter of a square with side length $7$ centimeters?",
      choices: [
        // distractor: gives the area
        { id: "A", text: "$49$ cm" },
        { id: "B", text: "$28$ cm" },
        // distractor: doubles instead of quadruples
        { id: "C", text: "$14$ cm" },
        // distractor: takes 3 sides
        { id: "D", text: "$21$ cm" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perimeter of a Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Perimeter $=4\\times\\text{side}=4\\times 7=28$ cm.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, and perimeter is the total distance around.\nStep 2: $P=4s=4\\times 7=28$ cm. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$ cm): computes the area $s^2=7^2$ instead of the perimeter.\n* Choice C ($14$ cm): adds only $2$ sides.\n* Choice D ($21$ cm): adds only $3$ sides.\n\n**Test Day Takeaway:** For a square, perimeter $=4s$ and area $=s^2$. Keep the two formulas straight — perimeter is a length, area is a square of a length.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Maya buys $3$ notebooks at $\\$2.50$ each and $2$ pens at $\\$1.25$ each. What is the total cost, in dollars?",
      choices: [
        // distractor: stops at one item
        { id: "A", text: "$\\$7.50$" },
        // distractor: gives one item only
        { id: "B", text: "$\\$2.50$" },
        { id: "C", text: "$\\$10.00$" },
        // distractor: adds quantities and prices
        { id: "D", text: "$\\$8.75$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Multi-Item Total Cost**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Notebooks: $3\\times 2.50=7.50$. Pens: $2\\times 1.25=2.50$. Total: $7.50+2.50=\\$10.00$.\n\n**The Full Solution:**\nStep 1: Cost of the notebooks: $3\\times\\$2.50=\\$7.50$.\nStep 2: Cost of the pens: $2\\times\\$1.25=\\$2.50$.\nStep 3: Add the two amounts: $\\$7.50+\\$2.50=\\$10.00$. That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$7.50$): gives only the notebook cost.\n* Choice B ($\\$2.50$): gives only the pen cost (or the price of one notebook).\n* Choice D ($\\$8.75$): mixes the quantities and prices instead of multiplying each pair.\n\n**Test Day Takeaway:** For a multi-item total, multiply each quantity by its own price, then add the results.",
      skills: ["word-problem-to-equation", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A circle has a diameter of $14$. What is the circumference of the circle, in terms of $\\pi$? (Provide just the integer coefficient of $\\pi$.)",
      correctAnswer: "14",
      explanation: "**SAT Pattern: Circumference from Diameter**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~5s):** $C=\\pi d=14\\pi$, so the coefficient of $\\pi$ is $14$.\n\n**The Full Solution:**\nStep 1: Circumference is $C=2\\pi r=\\pi d$.\nStep 2: The diameter is given as $14$, so $C=\\pi\\times 14=14\\pi$.\nStep 3: The integer coefficient of $\\pi$ is $14$.\n\n**Common Mistakes:** Treating $14$ as the radius and getting $28\\pi$; using the area formula $\\pi r^2$ for $49\\pi$; halving the diameter and reporting $7\\pi$.\n\n**Test Day Takeaway:** Since $C=\\pi d$, use the diameter directly when it is given — no need to convert to radius first.",
      skills: ["circumference", "circles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $x$ in the equation $\\dfrac{2x}{5} = 6$?",
      choices: [
        // distractor: divides 6 by 2 alone
        { id: "A", text: "$3$" },
        { id: "B", text: "$15$" },
        // distractor: stops one step early
        { id: "C", text: "$30$" },
        // distractor: applies inverse op
        { id: "D", text: "$\\dfrac{6}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Equation with Fractional Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by the reciprocal $\\frac{5}{2}$: $x=6\\times\\frac{5}{2}=15$.\n\n**The Full Solution:**\nStep 1: Start from $\\frac{2x}{5}=6$. Multiply both sides by $5$: $2x=30$.\nStep 2: Divide both sides by $2$: $x=15$. That is choice B.\nStep 3: Check: $\\frac{2(15)}{5}=\\frac{30}{5}=6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides $6$ by $2$ and ignores the denominator $5$.\n* Choice C ($30$): stops at $2x=30$ instead of dividing by $2$.\n* Choice D ($\\frac{6}{5}$): divides $6$ by $5$, the wrong operation for clearing the fraction.\n\n**Test Day Takeaway:** To solve $\\frac{ax}{b}=c$, clear the fraction by multiplying by $b$, then divide by $a$ — or multiply once by the reciprocal $\\frac{b}{a}$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $x^2 = 64$ and $x < 0$, what is the value of $x$?",
      choices: [
        // distractor: gives positive root
        { id: "A", text: "$8$" },
        { id: "B", text: "$-8$" },
        // distractor: divides 64 by 2
        { id: "C", text: "$-32$" },
        // distractor: doesn't square root
        { id: "D", text: "$-64$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Square Root with Sign Restriction**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x^2=64 \\Rightarrow x=\\pm 8$. The constraint $x<0$ selects $x=-8$.\n\n**The Full Solution:**\nStep 1: Take the square root of both sides: $x=\\pm\\sqrt{64}=\\pm 8$.\nStep 2: Apply the restriction $x<0$, which rules out $+8$ and leaves $x=-8$. That is choice B.\nStep 3: Check: $(-8)^2=64$ and $-8<0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): the positive root, ignoring the constraint $x<0$.\n* Choice C ($-32$): divides $64$ by $2$ instead of taking the square root.\n* Choice D ($-64$): negates $64$ without taking the square root at all.\n\n**Test Day Takeaway:** $x^2=k$ has two solutions, $x=\\pm\\sqrt{k}$. A sign constraint such as $x<0$ tells you which root to keep.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot below shows weight ($x$, in pounds) versus height ($y$, in inches) for a group of dogs. The data show a positive linear association. Which of the following is a reasonable interpretation?",
      diagram: { type: "scatterplot", params: {
        points: [[8,9],[12,11],[20,13],[25,14],[35,16],[45,18],[55,20],[65,21],[80,24],[95,26]],
        xMin: 0, xMax: 110, yMin: 0, yMax: 30,
        xGridStep: 10, yGridStep: 2, xLabelStep: 20, yLabelStep: 5,
        xLabel: "Weight (lb)", yLabel: "Height (in)",
        bestFitLine: { slope: 0.2, intercept: 8 },
      } },
      choices: [
        // distractor: confuses correlation with causation
        { id: "A", text: "Heavier dogs are taller because of their weight." },
        { id: "B", text: "On average, dogs that weigh more tend to be taller." },
        // distractor: confuses positive with negative
        { id: "C", text: "Dogs that weigh more tend to be shorter on average." },
        // distractor: claims perfect relationship
        { id: "D", text: "Every dog that weighs more is taller than every dog that weighs less." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Interpreting Scatterplot Association**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A positive linear association means $x$ and $y$ tend to rise together, so heavier dogs tend to be taller on average — choice B.\n\n**The Full Solution:**\nStep 1: A positive association means as weight ($x$) increases, height ($y$) tends to increase.\nStep 2: An association describes a trend, not a guarantee for every dog, and it does not establish cause. The hedge \"on average\" captures exactly that.\nStep 3: Choice B states the trend with the correct hedge.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims weight *causes* height — association is not causation.\n* Choice C: describes a negative association, the wrong direction.\n* Choice D: overstates the trend as holding for every single dog.\n\n**Test Day Takeaway:** Read scatterplot language carefully: \"positive\" means the variables increase together, and always phrase the interpretation with \"tends to\" or \"on average\" — never claim every point fits.",
      skills: ["scatterplots", "statistics"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A ramp is in the shape of a right triangle. The horizontal base is $24$ inches and the vertical height is $10$ inches. What is the length, in inches, of the ramp's surface (the hypotenuse)?",
      correctAnswer: "26",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~10s):** $24$ and $10$ are $2\\times 12$ and $2\\times 5$, so this is the $5$-$12$-$13$ triple scaled by $2$. The hypotenuse is $2\\times 13=26$.\n\n**The Full Solution:**\nStep 1: The legs are $24$ and $10$, so $c^2=24^2+10^2=576+100=676$.\nStep 2: $c=\\sqrt{676}=26$ inches.\nStep 3: Confirm the shortcut: $24=2\\times 12$, $10=2\\times 5$, so the hypotenuse is $2\\times 13=26$.\n\n**Common Mistakes:** Adding the legs without squaring to get $34$; subtracting the squares; mis-evaluating $\\sqrt{676}$.\n\n**Test Day Takeaway:** Recognize Pythagorean triples and their multiples — $5$-$12$-$13$ scales to $10$-$24$-$26$. Spotting the pattern beats squaring and adding.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $f(x) = 2x^2 - 1$, what is the value of $f(3) - f(1)$?",
      choices: [
        // distractor: gives only f(3)
        { id: "A", text: "$17$" },
        { id: "B", text: "$16$" },
        // distractor: only f(1)
        { id: "C", text: "$1$" },
        // distractor: adds f(3) + f(1)
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(3)=2(9)-1=17$ and $f(1)=2(1)-1=1$, so $f(3)-f(1)=17-1=16$.\n\n**The Full Solution:**\nStep 1: Evaluate $f(3)=2(3)^2-1=2(9)-1=17$.\nStep 2: Evaluate $f(1)=2(1)^2-1=2-1=1$.\nStep 3: Subtract: $f(3)-f(1)=17-1=16$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): gives just $f(3)$ and forgets to subtract.\n* Choice C ($1$): gives just $f(1)$.\n* Choice D ($18$): adds $f(3)+f(1)$ instead of subtracting.\n\n**Test Day Takeaway:** $f(a)-f(b)$ is two separate evaluations followed by one subtraction — compute each value first, then combine.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A rectangle has length twice its width. If the perimeter is $36$, what is the width?",
      choices: [
        // distractor: gives length
        { id: "A", text: "$12$" },
        { id: "B", text: "$6$" },
        // distractor: divides perimeter by 4
        { id: "C", text: "$9$" },
        // distractor: divides by 2
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rectangle from Perimeter and Side Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Let width $=w$, so length $=2w$. Then perimeter $=2w+2(2w)=6w=36$, giving $w=6$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width; the length is $2w$.\nStep 2: Perimeter $=2(\\text{length})+2(\\text{width})=2(2w)+2w=6w$.\nStep 3: Set $6w=36$, so $w=6$. That is choice B.\nStep 4: Check: length $=2(6)=12$, and $2(12)+2(6)=24+12=36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): gives the length instead of the width.\n* Choice C ($9$): divides the perimeter by $4$, treating the figure like a square.\n* Choice D ($18$): gives half the perimeter.\n\n**Test Day Takeaway:** When sides are related by \"twice\" or \"three times,\" let the smaller side be the variable, write the others in terms of it, then apply the perimeter constraint.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A pizzeria sells pizzas at $\\$12$ each. After a $25\\%$ price increase, what is the new price, in dollars?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Percent Increase**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~10s):** A $25\\%$ increase means you pay $125\\%$ of the old price: $12 \\times 1.25 = 15$ dollars.\n\n**The Full Solution:**\nStep 1: A percent increase multiplies by $(1 + r)$. Here $r = 0.25$, so the factor is $1.25$.\nStep 2: New price $= 12 \\times 1.25 = 15$ dollars.\n\nAlternative: the increase amount is $0.25 \\times 12 = 3$, so the new price is $12 + 3 = 15$.\n\n**Common Mistakes:** Adding $25$ to $12$ as if $25\\%$ meant $\\$25$, landing on $37$; treating it as a discount and computing $12 \\times 0.75 = 9$; reporting just the $\\$3$ increase instead of the new price.\n\n**Test Day Takeaway:** For a percent increase, multiply by $(1 + r)$; for a percent decrease, multiply by $(1 - r)$, where $r$ is the percent in decimal form.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Two angles in a triangle measure $50^{\\circ}$ and $70^{\\circ}$. What is the measure of the third angle?",
      choices: [
        // distractor: subtracts wrong way — gives 70 - 50 + 40 etc.
        { id: "A", text: "$40^{\\circ}$" },
        { id: "B", text: "$60^{\\circ}$" },
        // distractor: gives a remainder of 50 + 70 directly
        { id: "C", text: "$120^{\\circ}$" },
        // distractor: uses 360 instead of 180
        { id: "D", text: "$240^{\\circ}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The angles sum to $180^\\circ$, so the third is $180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$.\n\n**The Full Solution:**\nStep 1: The three interior angles of any triangle add to $180^\\circ$.\nStep 2: Third angle $= 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($40^\\circ$): a subtraction slip, dropping or mishandling part of $50^\\circ + 70^\\circ$.\n* Choice C ($120^\\circ$): the sum of the two known angles, $50^\\circ + 70^\\circ$, stopping one step early.\n* Choice D ($240^\\circ$): uses $360^\\circ$ (a quadrilateral's angle sum) instead of $180^\\circ$.\n\n**Test Day Takeaway:** A triangle's angles sum to $180^\\circ$; a quadrilateral's to $360^\\circ$; an $n$-gon's to $180(n-2)$ degrees.",
      skills: ["triangle-angle-sum", "triangles"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $5x + 2y = 21$ and $y = x$, what is the value of $x$?",
      choices: [
        // distractor: divides 21 by 5
        { id: "A", text: "$\\dfrac{21}{5}$" },
        { id: "B", text: "$3$" },
        // distractor: divides 21 by 2
        { id: "C", text: "$\\dfrac{21}{2}$" },
        // distractor: stops one step early — gives 7x
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Since $y = x$, replace $y$: $5x + 2x = 21 \\Rightarrow 7x = 21 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x$ into $5x + 2y = 21$ to get $5x + 2x = 21$.\nStep 2: Combine: $7x = 21$.\nStep 3: Divide: $x = 3$. Check: $y = 3$ and $5(3) + 2(3) = 15 + 6 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{5}$): divides $21$ by $5$, ignoring the $2y$ term entirely.\n* Choice C ($\\frac{21}{2}$): divides $21$ by $2$, the wrong coefficient.\n* Choice D ($21$): reports the right side $21$ instead of solving for $x$.\n\n**Test Day Takeaway:** Substitution: use the simpler equation to replace one variable, then combine like terms and solve.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A polynomial is given by $p(x) = x(x - 3)(x + 5)$. What is $p(0)$?",
      correctAnswer: "0",
      explanation: "**SAT Pattern: Function at a Root**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~3s):** $p(0)$ has a leading factor of $x$, which becomes $0$, so the whole product is $0$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 0$: $p(0) = 0 \\cdot (0 - 3)(0 + 5)$.\nStep 2: The first factor is $0$, so $p(0) = 0 \\cdot (-3)(5) = 0$.\n\n**Common Mistakes:** Computing $(0 - 3)(0 + 5) = -15$ and forgetting the leading $x$ factor; accidentally evaluating at $x = 1$ instead of $x = 0$.\n\n**Test Day Takeaway:** Anything times $0$ is $0$. Scan a product for a factor that vanishes before grinding through arithmetic.",
      skills: ["function-evaluation", "polynomial-operations"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A bookstore has $200$ books in stock. Of these, $60$ are fiction and $80$ are non-fiction; the rest are reference books. What percent of the books are reference books?",
      choices: [
        // distractor: forgets to divide by total
        { id: "A", text: "$60\\%$" },
        { id: "B", text: "$30\\%$" },
        // distractor: uses fiction count
        { id: "C", text: "$40\\%$" },
        // distractor: subtracts instead of computing percent
        { id: "D", text: "$20\\%$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent of a Whole — Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Reference books $= 200 - 60 - 80 = 60$, so the percent is $\\frac{60}{200} = 30\\%$.\n\n**The Full Solution:**\nStep 1: Subtract the known categories: $200 - 60 - 80 = 60$ reference books.\nStep 2: Convert to a percent of the total: $\\frac{60}{200} \\times 100 = 30\\%$, which is choice B.\n\nCheck: fiction $\\frac{60}{200} = 30\\%$, non-fiction $\\frac{80}{200} = 40\\%$, reference $30\\%$; together $30\\% + 40\\% + 30\\% = 100\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60\\%$): reports the count of reference books ($60$) as a percent.\n* Choice C ($40\\%$): the percent of non-fiction, not reference.\n* Choice D ($20\\%$): uses the difference $80 - 60 = 20$ as a percent.\n\n**Test Day Takeaway:** Percent of a whole $= \\frac{\\text{count}}{\\text{total}} \\times 100$. Find the missing count first, then divide by the full total.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "What is the value of $\\sqrt{50} + \\sqrt{8}$? (Simplify the radicals first.)",
      choices: [
        // distractor: adds inside the radical
        { id: "A", text: "$\\sqrt{58}$" },
        { id: "B", text: "$7\\sqrt{2}$" },
        // distractor: stops at one term
        { id: "C", text: "$5\\sqrt{2}$" },
        // distractor: multiplies coefficients
        { id: "D", text: "$10\\sqrt{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Simplifying and Adding Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\sqrt{50} = 5\\sqrt{2}$ and $\\sqrt{8} = 2\\sqrt{2}$, so the sum is $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: Factor out perfect squares. $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$ and $\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$.\nStep 2: Both terms now have $\\sqrt{2}$, so add the coefficients: $5\\sqrt{2} + 2\\sqrt{2} = 7\\sqrt{2}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{58}$): adds the radicands directly, as if $\\sqrt{50} + \\sqrt{8} = \\sqrt{58}$.\n* Choice C ($5\\sqrt{2}$): gives only the simplified $\\sqrt{50}$, dropping the second term.\n* Choice D ($10\\sqrt{2}$): multiplies the coefficients ($5 \\cdot 2$) instead of adding them.\n\n**Test Day Takeaway:** $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$. Simplify each radical to $k\\sqrt{m}$ form, then add only the coefficients of like radicals.",
      skills: ["radical-expressions", "exponent-rules"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If a savings account earns $4\\%$ simple interest per year and a deposit of $\\$500$ is made, how much interest, in dollars, is earned after $3$ years?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Simple Interest**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** $I = P \\cdot r \\cdot t = 500 \\times 0.04 \\times 3 = 60$ dollars.\n\n**The Full Solution:**\nStep 1: Use simple interest $I = Prt$ with $P = 500$, $r = 0.04$, $t = 3$.\nStep 2: $I = 500 \\times 0.04 \\times 3 = 20 \\times 3 = 60$ dollars.\n\nAlternative: $4\\%$ of $\\$500$ is $\\$20$ per year; over $3$ years that is $\\$60$.\n\n**Common Mistakes:** Skipping the percent-to-decimal step and computing $500 \\times 4 \\times 3 = 6000$; reporting the ending balance $\\$560$ instead of the interest; applying a compound-interest formula when simple interest is asked.\n\n**Test Day Takeaway:** Simple interest is $I = Prt$. Convert the percent to a decimal first, and read whether the question wants the interest or the final balance.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A box contains $30$ balls: $12$ red, $10$ blue, and $8$ green. If two balls are drawn at random WITH REPLACEMENT, what is the probability that both are red?",
      choices: [
        // distractor: adds probabilities
        { id: "A", text: "$\\dfrac{24}{30}$" },
        { id: "B", text: "$\\dfrac{4}{25}$" },
        // distractor: uses one draw only
        { id: "C", text: "$\\dfrac{2}{5}$" },
        // distractor: uses without-replacement formula
        { id: "D", text: "$\\dfrac{132}{870}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Independent Probability with Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $P(\\text{red}) = \\frac{12}{30} = \\frac{2}{5}$. With replacement: $\\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$.\n\n**The Full Solution:**\nStep 1: One draw: $P(\\text{red}) = \\frac{12}{30} = \\frac{2}{5}$.\nStep 2: With replacement, the box resets, so the two draws are independent. Multiply: $\\frac{2}{5} \\cdot \\frac{2}{5} = \\frac{4}{25}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{24}{30}$): doubles the red count instead of multiplying probabilities.\n* Choice C ($\\frac{2}{5}$): the probability for a single draw, stopping one step early.\n* Choice D ($\\frac{132}{870}$): uses the without-replacement product $\\frac{12}{30} \\cdot \\frac{11}{29}$.\n\n**Test Day Takeaway:** With replacement, draws are independent, so multiply the same probability. Without replacement, the second draw uses adjusted counts.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "If $f(x) = \\dfrac{x + 4}{x - 2}$, what is the value of $f(6)$?",
      choices: [
        // distractor: subtracts instead of adds
        { id: "A", text: "$\\dfrac{2}{4}$" },
        { id: "B", text: "$\\dfrac{5}{2}$" },
        // distractor: switches numerator and denominator
        { id: "C", text: "$\\dfrac{2}{5}$" },
        // distractor: stops one step early
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Rational Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(6) = \\frac{6 + 4}{6 - 2} = \\frac{10}{4} = \\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$ into both numerator and denominator: $f(6) = \\frac{6 + 4}{6 - 2}$.\nStep 2: Simplify: $\\frac{10}{4} = \\frac{5}{2}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{4}$): swaps the operations, treating the numerator as $6 - 4$.\n* Choice C ($\\frac{2}{5}$): the reciprocal of the correct answer, from flipping numerator and denominator.\n* Choice D ($10$): evaluates only the numerator $6 + 4$ and ignores the denominator.\n\n**Test Day Takeaway:** For a rational function, substitute into the numerator and denominator separately, then reduce the fraction.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A spinner is divided into $5$ equal sectors numbered $1$ through $5$. The spinner is spun once. What is the probability that the result is an even number?",
      correctAnswer: "2/5",
      explanation: "**SAT Pattern: Counting Favorable Outcomes**\n\n**The correct answer is $\\frac{2}{5}$ (or $0.4$).**\n\n**The Fast Way (~5s):** The even sectors in $\\{1, 2, 3, 4, 5\\}$ are $2$ and $4$, so $P = \\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Favorable outcomes (even): $2$ and $4$, a count of $2$.\nStep 2: Total outcomes: $1, 2, 3, 4, 5$, a count of $5$.\nStep 3: Probability $= \\frac{2}{5} = 0.4$.\n\n**Common Mistakes:** Counting $0$ as even when there is no $0$ on the spinner; including odd numbers in the favorable count; using a total other than $5$.\n\n**Test Day Takeaway:** Probability is favorable over total. When the outcomes are few, list the favorable ones explicitly to avoid a miscount.",
      skills: ["probability-basics", "statistics"]
    }
  ]
};

export default practiceTest9M2Easy;
