// Practice Test 5 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest5M2Easy = {
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
      question: "A climbing gym charges a one-time enrollment fee of $\\$30$ plus $\\$10$ for each visit. So far, Nadia has paid the gym $\\$70$ in total. For how many visits has she paid?",
      choices: [
        // distractor: stops at 70 - 30 = 40 without dividing
        { id: "A", text: "$40$" },
        { id: "B", text: "$4$" },
        // distractor: ignores the enrollment fee — 70 / 10
        { id: "C", text: "$7$" },
        // distractor: adds the fee instead of subtracting — (70 + 30) / 10
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Equation from a Fee-Plus-Rate Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Take out the one-time fee: $70 - 30 = 40$ was spent on visits, and $\\frac{40}{10} = 4$ visits.\n\n**The Full Solution:**\nStep 1: Let $v$ be the number of visits. Total paid $=$ fee $+$ $10$ per visit: $30 + 10v = 70$.\nStep 2: Subtract the fee: $10v = 40$.\nStep 3: Divide by the per-visit cost: $v = 4$.\nStep 4: Check: $30 + 10(4) = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): stops at $70 - 30 = 40$ — that is dollars spent on visits, not the number of visits.\n* Choice C ($7$): divides the whole $\\$70$ by $\\$10$, ignoring the enrollment fee.\n* Choice D ($10$): adds the fee instead of removing it, $\\frac{70 + 30}{10}$.\n\n**Test Day Takeaway:** In fee-plus-rate problems, subtract the one-time amount first, then divide by the per-unit rate.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in centimeters, of a square with side length $7$ centimeters?",
      correctAnswer: "28",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~5s):** A square's perimeter is $4s = 4 \\cdot 7 = 28$ cm.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, so its perimeter is $4$ times one side.\nStep 2: $4 \\cdot 7 = 28$ centimeters.\n\n**Common Mistakes:** Computing the area $7^2 = 49$; adding only two sides for $7 + 7 = 14$.\n\n**Test Day Takeaway:** Square perimeter $= 4s$; square area $= s^2$. Read which one the question asks for.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $t(x) = 4x + 9$, what is the value of $t(-2)$?",
      choices: [
        // distractor: uses +2 instead of -2
        { id: "A", text: "$17$" },
        { id: "B", text: "$1$" },
        // distractor: subtracts 9 instead of adding — -8 - 9
        { id: "C", text: "$-17$" },
        // distractor: sign slip on the final sum
        { id: "D", text: "$-1$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = -2$: $t(-2) = 4(-2) + 9 = -8 + 9 = 1$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $-2$, keeping the parentheses: $t(-2) = 4(-2) + 9$.\nStep 2: Multiply first: $4(-2) = -8$.\nStep 3: Add: $-8 + 9 = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): substitutes $+2$ instead of $-2$, giving $8 + 9$.\n* Choice C ($-17$): subtracts the $9$ instead of adding it, $-8 - 9$.\n* Choice D ($-1$): flips the sign of the correct sum $-8 + 9$.\n\n**Test Day Takeaway:** Wrap a negative input in parentheses before substituting: $4(-2)$ is $-8$, and adding $9$ to $-8$ moves right on the number line, to $1$.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A bakery uses $2$ cups of flour for every $5$ cookies. How many cups of flour are needed to make $35$ cookies?",
      choices: [
        // distractor: subtracts 35 - 5 = 30, then halves
        { id: "A", text: "$15$" },
        // distractor: adds 35 + 2 = 37
        { id: "B", text: "$37$" },
        { id: "C", text: "$14$" },
        // distractor: switches the ratio backwards
        { id: "D", text: "$87.5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $35$ cookies is $7$ batches of $5$, and each batch needs $2$ cups, so $7 \\cdot 2 = 14$ cups.\n\n**The Full Solution:**\nStep 1: Set up matching categories: $\\frac{\\text{flour}}{\\text{cookies}} = \\frac{2}{5} = \\frac{f}{35}$.\nStep 2: Cross-multiply: $5f = 2 \\cdot 35 = 70$.\nStep 3: Divide: $f = \\frac{70}{5} = 14$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): mis-set the proportion using subtraction.\n* Choice B ($37$): added $35 + 2$ instead of scaling the ratio.\n* Choice D ($87.5$): flipped the ratio to $\\frac{5}{2} = \\frac{f}{35}$, giving $f = 87.5$.\n\n**Test Day Takeaway:** Keep the same category on top in both fractions, then cross-multiply and solve.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the slope of the line with equation $y = 7 - \\dfrac{2}{3}x$?",
      choices: [
        // distractor: reads the leading constant as the slope
        { id: "A", text: "$7$" },
        { id: "B", text: "$-\\dfrac{2}{3}$" },
        // distractor: drops the negative
        { id: "C", text: "$\\dfrac{2}{3}$" },
        // distractor: flips the fraction
        { id: "D", text: "$-\\dfrac{3}{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Rewrite in $y = mx + b$ order: $y = -\\dfrac{2}{3}x + 7$. The slope is the coefficient of $x$: $-\\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: The terms are written constant-first, so reorder: $y = 7 - \\dfrac{2}{3}x$ is the same as $y = -\\dfrac{2}{3}x + 7$.\nStep 2: Match to $y = mx + b$: slope $m = -\\dfrac{2}{3}$ (the subtraction carries the negative sign), $y$-intercept $b = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): grabs the first number in the equation, but $7$ is the $y$-intercept.\n* Choice C ($\\dfrac{2}{3}$): drops the negative that the subtraction sign attaches to the $x$-term.\n* Choice D ($-\\dfrac{3}{2}$): flips the fraction — that would be a perpendicular slope.\n\n**Test Day Takeaway:** The slope is whatever multiplies $x$, sign included — even when the equation lists the constant first. Reorder mentally before reading off $m$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In a right triangle, one of the acute angles measures $34^{\\circ}$. What is the measure, in degrees, of the other acute angle?",
      correctAnswer: "56",
      explanation: "**SAT Pattern: Acute Angles of a Right Triangle**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~5s):** The two acute angles of a right triangle add to $90^{\\circ}$, so the other one is $90 - 34 = 56$.\n\n**The Full Solution:**\nStep 1: The three angles of any triangle sum to $180^{\\circ}$, and the right angle uses $90^{\\circ}$ of that.\nStep 2: The two acute angles must share the remaining $180 - 90 = 90^{\\circ}$.\nStep 3: The other acute angle is $90 - 34 = 56^{\\circ}$.\n\n**Common Mistakes:** Subtracting from $180$ instead of $90$ ($180 - 34 = 146$, impossible for an acute angle); or subtracting from $100$ ($100 - 34 = 66$).\n\n**Test Day Takeaway:** In a right triangle, the two acute angles are complementary — they always add to $90^{\\circ}$.",
      skills: ["triangle-angle-sum", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of six test scores is $82$. Five of the scores are $78$, $85$, $90$, $76$, and $88$. What is the sixth score?",
      choices: [
        // distractor: averages the five given
        { id: "A", text: "$83.4$" },
        // distractor: gives the total sum needed
        { id: "B", text: "$492$" },
        { id: "C", text: "$75$" },
        // distractor: subtracts mean from sum of five
        { id: "D", text: "$335$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Required total is $6 \\cdot 82 = 492$; the five known scores sum to $417$, so the sixth is $492 - 417 = 75$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total, so the six scores must sum to $6 \\cdot 82 = 492$.\nStep 2: Add the five known scores: $78 + 85 + 90 + 76 + 88 = 417$.\nStep 3: Subtract: sixth score $= 492 - 417 = 75$.\nStep 4: Check: $\\frac{492}{6} = 82$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($83.4$): averaged only the five known scores, $\\frac{417}{5} = 83.4$.\n* Choice B ($492$): reported the required total instead of the missing score.\n* Choice D ($335$): subtracted in the wrong direction, $417 - 82 = 335$.\n\n**Test Day Takeaway:** Mean $\\times$ count gives the total; subtract the known sum to recover a missing value.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to $x^2 - 7x + 10 = 0$?",
      choices: [
        // distractor: signs flipped
        { id: "A", text: "$x = -2 \\text{ or } x = -5$" },
        { id: "B", text: "$x = 2 \\text{ or } x = 5$" },
        // distractor: sum and product mistaken for roots
        { id: "C", text: "$x = 7 \\text{ or } x = 10$" },
        // distractor: drops one root
        { id: "D", text: "$x = 10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $10$ and sum $-7$: that's $-2$ and $-5$, so $(x - 2)(x - 5) = 0$ and $x = 2$ or $x = 5$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = 10$ and whose sum is $b = -7$.\nStep 2: Those numbers are $-2$ and $-5$, so $x^2 - 7x + 10 = (x - 2)(x - 5)$.\nStep 3: Set each factor to $0$: $x = 2$ or $x = 5$.\nStep 4: Check: $2^2 - 7(2) + 10 = 0$ and $5^2 - 7(5) + 10 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -2$ or $x = -5$): used the factor numbers as roots without flipping their signs.\n* Choice C ($x = 7$ or $x = 10$): mistook $b$ and $c$ for the roots.\n* Choice D ($x = 10$): solved only part of the equation and reported one wrong value.\n\n**Test Day Takeaway:** The roots of $(x - p)(x - q) = 0$ are $+p$ and $+q$ — the opposite sign of what sits inside each factor.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "$18$ is $30\\%$ of what number?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Finding the Whole from a Percent**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~5s):** $0.30 \\cdot n = 18 \\Rightarrow n = \\frac{18}{0.30} = 60$.\n\n**The Full Solution:**\nStep 1: \"$18$ is $30\\%$ of what number\" translates to $18 = 0.30 \\cdot n$.\nStep 2: Divide both sides by $0.30$: $n = \\frac{18}{0.30} = 60$.\nStep 3: Check: $30\\%$ of $60$ is $0.30 \\cdot 60 = 18$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing ($18 \\cdot 0.30 = 5.4$) — that finds $30\\%$ OF $18$, a different question; or dividing by $30$ without converting ($\\frac{18}{30} = 0.6$).\n\n**Test Day Takeaway:** \"$a$ is $p\\%$ of what\" means the whole is unknown: whole $= a \\div (p$ as a decimal$)$. The answer must be larger than $a$ whenever $p < 100$.",
      skills: ["percents", "percent-of-number"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through $(1, 3)$ and $(5, 11)$?",
      choices: [
        // distractor: switches Δy and Δx
        { id: "A", text: "$\\dfrac{1}{2}$" },
        { id: "B", text: "$2$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$\\dfrac{14}{6}$" },
        // distractor: subtracts in wrong direction
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(1, 3)$ and $(5, 11)$.\nStep 2: $m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): inverted the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($\\frac{14}{6}$): added coordinates instead of subtracting, $\\frac{11 + 3}{5 + 1}$.\n* Choice D ($-2$): subtracted in opposite orders top and bottom, flipping the sign.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$ — subtract in the same order in both the numerator and denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A jar contains $6$ red, $9$ green, and $5$ yellow candies. If one candy is selected at random, what is the probability that it is green?",
      choices: [
        // distractor: uses red count
        { id: "A", text: "$\\dfrac{6}{20}$" },
        { id: "B", text: "$\\dfrac{9}{20}$" },
        // distractor: divides by non-green count
        { id: "C", text: "$\\dfrac{9}{11}$" },
        // distractor: uses yellow count
        { id: "D", text: "$\\dfrac{5}{20}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total candies $= 6 + 9 + 5 = 20$, and $9$ are green, so $P(\\text{green}) = \\frac{9}{20}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable (green) $= 9$; total $= 6 + 9 + 5 = 20$.\nStep 3: $P(\\text{green}) = \\frac{9}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{20}$): used the red count in the numerator.\n* Choice C ($\\frac{9}{11}$): divided by the non-green count $6 + 5 = 11$ instead of the total.\n* Choice D ($\\frac{5}{20}$): used the yellow count in the numerator.\n\n**Test Day Takeaway:** The probability denominator is the full total, including the favorable group itself.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $6$ in., width $5$ in., and height $4$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "120",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~5s):** Multiply all three dimensions: $6 \\cdot 5 \\cdot 4 = 120$ cubic inches.\n\n**The Full Solution:**\nStep 1: A box's volume is $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 6 \\cdot 5 \\cdot 4 = 120$ cubic inches.\n\n**Common Mistakes:** Adding dimensions for $6 + 5 + 4 = 15$; multiplying only two for $6 \\cdot 5 = 30$; computing surface area instead of volume.\n\n**Test Day Takeaway:** Rectangular-box volume is length $\\times$ width $\\times$ height — multiply all three dimensions.",
      skills: ["volume-prism", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system $y = 3x - 2$ and $y = x + 4$?",
      choices: [
        // distractor: swaps coordinates
        { id: "A", text: "$(7, 3)$" },
        { id: "B", text: "$(3, 7)$" },
        // distractor: adds the two right-hand sides
        { id: "C", text: "$(2, 6)$" },
        // distractor: uses x = 0
        { id: "D", text: "$(0, 4)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations are solved for $y$, so set them equal: $3x - 2 = x + 4 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Then $y = 3 + 4 = 7$, giving $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Both right-hand sides equal $y$, so they equal each other: $3x - 2 = x + 4$.\nStep 2: Subtract $x$ from both sides: $2x - 2 = 4$, then add $2$: $2x = 6$, so $x = 3$.\nStep 3: Substitute into the simpler equation: $y = x + 4 = 3 + 4 = 7$.\nStep 4: Check the other equation: $y = 3(3) - 2 = 7$. $\\checkmark$ The solution is $(3, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice A $(7, 3)$: swaps the $x$- and $y$-values — $7$ is $y$, not $x$.\n* Choice C $(2, 6)$: an arbitrary point that satisfies neither equation.\n* Choice D $(0, 4)$: stops at the $y$-intercept of the second line instead of solving the system.\n\n**Test Day Takeaway:** When both equations are already solved for the same variable, set the expressions equal, solve for the other variable, then back-substitute.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bacteria colony triples every hour. If the population starts at $20$, which expression gives the population after $h$ hours?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$20 + 3h$" },
        { id: "B", text: "$20 \\cdot 3^{h}$" },
        // distractor: confuses base and coefficient
        { id: "C", text: "$3 \\cdot 20^{h}$" },
        // distractor: tripled value once and added linearly
        { id: "D", text: "$60 + 20h$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Triples every hour\" means multiply by $3$ each hour, starting from $20$. After $h$ hours: $20 \\cdot 3^{h}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P(h) = P_0 \\cdot r^{h}$, where $P_0$ is the starting amount and $r$ is the per-hour growth factor.\nStep 2: Here $P_0 = 20$ and tripling gives $r = 3$, so $P(h) = 20 \\cdot 3^{h}$.\nStep 3: Sanity-check: $h = 0$ gives $20$; $h = 1$ gives $60$; $h = 2$ gives $180$ — each hour is $3$ times the last. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $20 + 3h$: linear growth — adds $3$ each hour instead of multiplying.\n* Choice C $3 \\cdot 20^{h}$: swaps the roles — uses $20$ as the base and $3$ as the starting amount.\n* Choice D $60 + 20h$: triples once for the first hour, then grows linearly after.\n\n**Test Day Takeaway:** \"Triples/doubles/halves every period\" signals exponential. The starting value sits in front; the growth factor is the base raised to the time variable.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the two acute angles measure $x^{\\circ}$ and $y^{\\circ}$. If $\\sin(x^{\\circ}) = 0.6$, what is the value of $\\cos(y^{\\circ})$?",
      choices: [
        // distractor: subtracts from 1
        { id: "A", text: "$0.4$" },
        { id: "B", text: "$0.6$" },
        // distractor: computes cos(x°) instead of cos(y°)
        { id: "C", text: "$0.8$" },
        // distractor: squares the given value
        { id: "D", text: "$0.36$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Cofunction Identity for Complementary Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The acute angles of a right triangle are complementary, and $\\cos(y^{\\circ}) = \\sin(90^{\\circ} - y^{\\circ}) = \\sin(x^{\\circ}) = 0.6$.\n\n**The Full Solution:**\nStep 1: In a right triangle the acute angles sum to $90^{\\circ}$, so $x + y = 90$.\nStep 2: The side opposite angle $x$ is the side adjacent to angle $y$. So $\\sin(x^{\\circ}) = \\dfrac{\\text{that side}}{\\text{hypotenuse}} = \\cos(y^{\\circ})$.\nStep 3: Therefore $\\cos(y^{\\circ}) = \\sin(x^{\\circ}) = 0.6$ — no computation needed.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): subtracts from $1$, misapplying $\\sin^2 + \\cos^2 = 1$ without the squares.\n* Choice C ($0.8$): computes $\\cos(x^{\\circ}) = \\sqrt{1 - 0.36}$ — the cosine of the WRONG angle.\n* Choice D ($0.36$): squares the given value, again misusing the Pythagorean identity.\n\n**Test Day Takeaway:** For complementary angles, $\\sin(x^{\\circ}) = \\cos(90^{\\circ} - x^{\\circ})$. The SAT loves this: the sine of one acute angle IS the cosine of the other.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A train travels at a constant speed of $60$ miles per hour. How many miles will it travel in $3$ hours and $15$ minutes?",
      correctAnswer: "195",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $195$.**\n\n**The Fast Way (~10s):** $15$ minutes is $0.25$ hour, so the time is $3.25$ hours. Distance $= 60 \\times 3.25 = 195$ miles.\n\n**The Full Solution:**\nStep 1: Convert the time to hours: $3$ hr $15$ min $= 3 + \\frac{15}{60} = 3.25$ hours.\nStep 2: Apply distance $=$ rate $\\times$ time: $60 \\cdot 3.25 = 195$ miles.\n\n**Common Mistakes:** Writing the time as $3.15$ hours gives $60 \\times 3.15 = 189$; ignoring the extra $15$ minutes gives $60 \\times 3 = 180$.\n\n**Test Day Takeaway:** Convert minutes to a decimal fraction of an hour before multiplying: $15$ min $= 0.25$ hr, $30$ min $= 0.5$ hr, $45$ min $= 0.75$ hr.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $2(3x - 5) = 4x + 8$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "$1$" },
        // distractor: misreads different constants as a contradiction
        { id: "B", text: "$0$" },
        // distractor: assumes matching x-terms means identity
        { id: "C", text: "Infinitely many" },
        // distractor: quadratic-like answer
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Counting Solutions of a Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $6x - 10 = 4x + 8$. The $x$-coefficients differ ($6 \\ne 4$), so the equation has exactly one solution.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $2(3x - 5) = 6x - 10$.\nStep 2: The equation is $6x - 10 = 4x + 8$. Because the $x$-coefficients are different, the two lines cross exactly once.\nStep 3: Solve it to confirm: $2x = 18 \\Rightarrow x = 9$. Check: $2(27 - 5) = 44$ and $4(9) + 8 = 44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): zero solutions requires matching $x$-terms with different constants (like $6x - 10 = 6x + 8$) — not the case here.\n* Choice C (Infinitely many): that requires both sides identical after simplifying; $6x - 10$ and $4x + 8$ are not.\n* Choice D ($2$): a quadratic-style count; a linear equation can never have exactly two solutions.\n\n**Test Day Takeaway:** Simplify both sides, then compare $x$-coefficients: different $\\Rightarrow$ one solution; same coefficient, different constants $\\Rightarrow$ none; identical sides $\\Rightarrow$ infinitely many.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and passes through the point $(8, 6)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Radius via Distance Formula**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** The radius is the distance from $(0, 0)$ to $(8, 6)$: $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. This is a $6$-$8$-$10$ triangle, twice the $3$-$4$-$5$.\n\n**The Full Solution:**\nStep 1: The radius equals the distance from the center to any point on the circle.\nStep 2: Apply the distance formula: $r = \\sqrt{(8 - 0)^2 + (6 - 0)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.\nStep 3: Check with the circle equation $x^2 + y^2 = r^2$: $8^2 + 6^2 = 64 + 36 = 100 = 10^2$. $\\checkmark$\n\n**Common Mistakes:** Adding without squaring gives $8 + 6 = 14$; forgetting the square root leaves $100$; reporting the diameter $20$ instead of the radius.\n\n**Test Day Takeaway:** The equation $x^2 + y^2 = r^2$ is the distance formula in disguise — the radius is the distance from the center to any point on the circle.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $h$ is defined by $h(x) = x^2 - 2x$. What is the value of $h(5) - h(4)$?",
      choices: [
        // distractor: evaluates h(5 - 4) = h(1)
        { id: "A", text: "$-1$" },
        // distractor: reports h(5) alone
        { id: "B", text: "$15$" },
        { id: "C", text: "$7$" },
        // distractor: adds h(5) + h(4) instead of subtracting
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Difference of Two Function Values**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $h(5) = 25 - 10 = 15$ and $h(4) = 16 - 8 = 8$, so $h(5) - h(4) = 15 - 8 = 7$.\n\n**The Full Solution:**\nStep 1: Evaluate each value separately. $h(5) = 5^2 - 2(5) = 25 - 10 = 15$.\nStep 2: $h(4) = 4^2 - 2(4) = 16 - 8 = 8$.\nStep 3: Subtract: $h(5) - h(4) = 15 - 8 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): collapses the expression to $h(5 - 4) = h(1) = 1 - 2 = -1$. Function values do not subtract inside the parentheses.\n* Choice B ($15$): computes $h(5)$ and stops, ignoring the $- h(4)$.\n* Choice D ($23$): adds the two values, $15 + 8$, instead of subtracting.\n\n**Test Day Takeaway:** $h(a) - h(b)$ means evaluate twice, then subtract the outputs. It is NOT the same as $h(a - b)$.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, which of the following is the equation of a line parallel to the line with equation $2x + 3y = 6$?",
      choices: [
        // distractor: drops the negative when isolating y
        { id: "A", text: "$y = \\dfrac{2}{3}x + 1$" },
        { id: "B", text: "$y = -\\dfrac{2}{3}x + 5$" },
        // distractor: flips the coefficients into -3/2
        { id: "C", text: "$y = -\\dfrac{3}{2}x + 2$" },
        // distractor: reads the x-coefficient 2 as the slope
        { id: "D", text: "$y = 2x - 3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Slopes from Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Solve for $y$: $3y = -2x + 6 \\Rightarrow y = -\\dfrac{2}{3}x + 2$. The slope is $-\\dfrac{2}{3}$, and the only choice with that slope is $y = -\\dfrac{2}{3}x + 5$.\n\n**The Full Solution:**\nStep 1: Convert $2x + 3y = 6$ to slope-intercept form. Subtract $2x$: $3y = -2x + 6$.\nStep 2: Divide by $3$: $y = -\\dfrac{2}{3}x + 2$, so the slope is $-\\dfrac{2}{3}$.\nStep 3: Parallel lines have equal slopes and different intercepts. Choice B has slope $-\\dfrac{2}{3}$ and intercept $5 \\ne 2$, so it is a distinct parallel line.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\dfrac{2}{3}x + 1$): loses the negative sign when moving $2x$ across the equals sign.\n* Choice C ($y = -\\dfrac{3}{2}x + 2$): flips the coefficients into $-\\dfrac{3}{2}$ — that is the reciprocal, not the slope.\n* Choice D ($y = 2x - 3$): reads the $x$-coefficient $2$ straight off standard form as if it were the slope.\n\n**Test Day Takeaway:** A line in standard form $Ax + By = C$ has slope $-\\dfrac{A}{B}$. Convert to $y = mx + b$ (or use that shortcut) before comparing slopes.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between minutes exercised per day $x$ and resting heart rate $y$ for $30$ adults. The line of best fit is $\\hat{y} = -0.4x + 78$. According to the model, by how many beats per minute does resting heart rate decrease for each additional minute of daily exercise?",
      diagram: { type: "scatterplot", params: {
        points: [[10,76],[20,72],[30,68],[40,60],[50,60],[60,52],[70,52],[80,44],[90,42]],
        xMin: 0, xMax: 100, yMin: 30, yMax: 90,
        xGridStep: 10, yGridStep: 5, xLabelStep: 20, yLabelStep: 10,
        xLabel: "Daily exercise (min)", yLabel: "Resting heart rate",
        bestFitLine: { slope: -0.4, intercept: 78 },
      } },
      correctAnswer: ".4",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.4$.**\n\n**The Fast Way (~10s):** The slope $-0.4$ means $y$ falls by $0.4$ for each one-minute increase in $x$, so the decrease is $0.4$ beats per minute.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit change in $x$.\nStep 2: Here $m = -0.4$, so each extra minute of exercise predicts a change of $-0.4$ beats per minute.\nStep 3: The question asks how much heart rate decreases, which is the size of that change: $0.4$.\n\n**Common Mistakes:** Answering $-0.4$ (the question wants the magnitude of the decrease, a positive number); reporting $78$ (the intercept) or $77.6$ (the predicted heart rate at $x = 1$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope is the per-unit rate of change. A negative slope means a decrease, and \"how much does it decrease\" asks for the magnitude.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of items sold by category in two stores.\n\n| | Books | Toys | Total |\n|---|---|---|---|\n| Store A | $30$ | $50$ | $80$ |\n| Store B | $45$ | $35$ | $80$ |\n| Total | $75$ | $85$ | $160$ |\n\nWhat fraction of all the books sold were sold at Store B?",
      choices: [
        // distractor: total books over total sales
        { id: "A", text: "$\\dfrac{75}{160}$" },
        // distractor: Store B books over Store B total
        { id: "B", text: "$\\dfrac{45}{80}$" },
        { id: "C", text: "$\\dfrac{45}{75}$" },
        // distractor: Store B books over overall total
        { id: "D", text: "$\\dfrac{45}{160}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all the books\" sets the denominator to total books $= 75$. Store B sold $45$ books, so the fraction is $\\frac{45}{75}$.\n\n**The Full Solution:**\nStep 1: \"What fraction of all the books\" restricts the group to books only, so the denominator is the books total: $30 + 45 = 75$.\nStep 2: The numerator is the books sold at Store B: $45$.\nStep 3: The fraction is $\\frac{45}{75}$, which reduces to $\\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A $\\frac{75}{160}$: fraction of all sales that were books, not the requested group.\n* Choice B $\\frac{45}{80}$: fraction of Store B's sales that were books (denominator is Store B's total).\n* Choice D $\\frac{45}{160}$: uses the grand total $160$ instead of just the books.\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all the books\" $\\Rightarrow$ books total; \"of Store B\" $\\Rightarrow$ Store B total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest5M2Easy;
