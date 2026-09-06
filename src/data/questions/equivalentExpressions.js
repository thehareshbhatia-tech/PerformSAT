// Practice questions for Equivalent Expressions module
// Questions are organized by SECTION (question type)

export const equivalentExpressionsQuestions = {
  // Section: Equivalent Expressions
  "Equivalent Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows the number of units of each supply a bakery buys and the price per unit, in dollars, in terms of $x$. Which expression represents the total amount, in dollars, the bakery pays for these supplies?",
      diagram: { type: "dataTable", params: { headers: ["Supply", "Number of units", "Price per unit (dollars)"], rows: [["Flour sacks", "4", "x + 3"], ["Yeast packets", "3", "2x − 1"]] } },
      choices: [
        { id: "A", text: "$10x + 2$" },
        { id: "B", text: "$10x + 9$" },
        { id: "C", text: "$10x + 15$" },
        { id: "D", text: "$21x + 14$" }
      ],
      correctAnswer: "B",
      hint: "Each row contributes (number of units)(price per unit); distribute each product completely before you combine anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $4(x+3)=4x+12$ and $3(2x-1)=6x-3$; adding gives $10x+9$ — choice B.\n\n**The Full Solution:**\nStep 1: The flour sacks cost $4(x+3)=4x+12$ dollars.\nStep 2: The yeast packets cost $3(2x-1)=6x-3$ dollars.\nStep 3: Add the two costs and combine like terms: $(4x+6x)+(12-3)=10x+9$.\nStep 4: Check with a number. At $x=2$ the unit prices are $5$ and $3$ dollars, so the bill is $4(5)+3(3)=29$ dollars, and $10(2)+9=29$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10x + 2$): multiplies each quantity by only the $x$-term and copies the constants over untouched: $4x+3+6x-1$.\n* Choice C ($10x + 15$): distributes the $3$ across $2x-1$ as $6x+3$, losing the subtraction sign on the constant.\n* Choice D ($21x + 14$): adds the two unit prices first, $(x+3)+(2x-1)=3x+2$, then multiplies by the total number of units, $7$ — but the two supplies have different unit counts.\n\n**Test Day Takeaway:** Distribute the multiplier across every term inside the parentheses, sign included, and only then collect like terms. A quick numerical check with a convenient value of $x$ catches a dropped sign in seconds.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The expression $(4y+9)(4y-9)$ is equivalent to which of the following expressions?",
      choices: [
        { id: "A", text: "$8y^{2}-81$" },
        { id: "B", text: "$16y^{2}-81$" },
        { id: "C", text: "$16y^{2}+81$" },
        { id: "D", text: "$16y^{2}-72y-81$" }
      ],
      correctAnswer: "B",
      hint: "The two binomials differ only in the sign of the second term — look at what that does to the two middle products.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A sum times a difference leaves $(4y)^{2}-9^{2}=16y^{2}-81$ — choice B.\n\n**The Full Solution:**\nStep 1: Expand: $(4y+9)(4y-9)=16y^{2}-36y+36y-81$.\nStep 2: The middle terms $-36y$ and $+36y$ are opposites, so they add to $0$.\nStep 3: What remains is $16y^{2}-81$. Check at $y=1$: $(13)(-5)=-65$, and $16-81=-65$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8y^{2}-81$): adds $4y$ to itself instead of squaring it; the correct first term is $4y\\cdot 4y = 16y^{2}$.\n* Choice C ($16y^{2}+81$): treats the product as a sum of squares, $(4y)^{2}+9^{2}$; the last pair of terms multiplies to $9(-9)=-81$, so the constant is negative.\n* Choice D ($16y^{2}-72y-81$): mis-signs both middle products as $-36y$ and $-36y$, so they add to $-72y$ instead of cancelling.\n\n**Test Day Takeaway:** $(A+B)(A-B)=A^{2}-B^{2}$: recognizing the pattern removes the middle terms before you write them down, and squaring $4y$ means squaring the coefficient too.",
      skills: ["difference-of-squares"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which of the following is equivalent to $\\frac{18a^{5}b^{2}}{6a^{2}b^{5}}$, where $a>0$ and $b>0$?",
      choices: [
        { id: "A", text: "$3a^{3}b^{3}$" },
        { id: "B", text: "$\\frac{3a^{3}}{b^{3}}$" },
        { id: "C", text: "$\\frac{3a^{7}}{b^{7}}$" },
        { id: "D", text: "$\\frac{12a^{3}}{b^{3}}$" }
      ],
      correctAnswer: "B",
      hint: "Handle the coefficients and each variable separately, and watch which variable has the larger exponent on top.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $18\\div 6=3$, $a^{5-2}=a^{3}$, and $b^{2-5}=b^{-3}$, so the $b^{3}$ lands in the denominator: $\\frac{3a^{3}}{b^{3}}$ — choice B.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\frac{18}{6}=3$.\nStep 2: Subtract exponents on $a$: $a^{5-2}=a^{3}$, which stays in the numerator.\nStep 3: Subtract exponents on $b$: $b^{2-5}=b^{-3}$, and a negative exponent means the factor belongs in the denominator, giving $\\frac{3a^{3}}{b^{3}}$.\nStep 4: Check at $a=b=2$: the original is $\\frac{18(32)(4)}{6(4)(32)}=3$, and $\\frac{3(8)}{8}=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3a^{3}b^{3}$): subtracts the $b$ exponents but leaves the result in the numerator, ignoring that $b^{2-5}$ is negative.\n* Choice C ($\\frac{3a^{7}}{b^{7}}$): adds the exponents instead of subtracting them: $a^{5+2}$ and $b^{2+5}$.\n* Choice D ($\\frac{12a^{3}}{b^{3}}$): subtracts the coefficients, $18-6=12$, instead of dividing them.\n\n**Test Day Takeaway:** Division of like bases subtracts exponents; a negative result just moves that factor across the fraction bar. Coefficients divide — they never subtract.",
      skills: ["simplifying-rational-expressions", "exponent-laws"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The expression $9m^{2}-30m+25$ can be written in the form $(am+b)^{2}$, where $a$ and $b$ are constants and $a>0$. What is the value of $a+b$?",
      choices: [
        { id: "A", text: "$-12$" },
        { id: "B", text: "$-2$" },
        { id: "C", text: "$8$" },
        { id: "D", text: "$34$" }
      ],
      correctAnswer: "B",
      hint: "Expand $(am+b)^{2}$ in general first, then match it term by term against the given trinomial.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $9m^{2}=(3m)^{2}$ and $25=(-5)^{2}$, and $2(3)(-5)=-30$ matches the middle term, so $a=3$, $b=-5$ and $a+b=-2$ — choice B.\n\n**The Full Solution:**\nStep 1: Expanding the target form gives $(am+b)^{2}=a^{2}m^{2}+2abm+b^{2}$.\nStep 2: Match the squared term: $a^{2}=9$, and since $a>0$, $a=3$.\nStep 3: Match the middle term: $2ab=-30$, so $2(3)b=-30$ and $b=-5$. That is consistent with $b^{2}=25$.\nStep 4: Then $a+b=3+(-5)=-2$. Check: $(3m-5)^{2}=9m^{2}-30m+25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): takes $a=3$ correctly but reads $b$ as half the middle coefficient, $\\frac{-30}{2}=-15$, giving $3+(-15)$.\n* Choice C ($8$): gets both magnitudes right but keeps $b=5$; the negative middle term forces $b$ to be negative.\n* Choice D ($34$): uses the coefficients $9$ and $25$ themselves as $a$ and $b$ rather than their square roots.\n\n**Test Day Takeaway:** To match a form, expand the form symbolically and line up coefficients. The sign of the middle term, not the constant term, is what decides the sign of $b$.",
      skills: ["perfect-square-trinomial"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which of the following is equivalent to $(3c-5d)^{2}-(3c+5d)^{2}$, where $c$ and $d$ are constants?",
      choices: [
        { id: "A", text: "$-60cd$" },
        { id: "B", text: "$0$" },
        { id: "C", text: "$60cd$" },
        { id: "D", text: "$18c^{2}+50d^{2}$" }
      ],
      correctAnswer: "A",
      hint: "Expand both squares in full before subtracting, and keep the parentheses around the second square while you distribute the minus sign.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** Both squares carry $9c^{2}+25d^{2}$, so those cancel; only the middle terms survive: $-30cd-(+30cd)=-60cd$ — choice A.\n\n**The Full Solution:**\nStep 1: Expand the first square: $(3c-5d)^{2}=9c^{2}-30cd+25d^{2}$.\nStep 2: Expand the second square: $(3c+5d)^{2}=9c^{2}+30cd+25d^{2}$.\nStep 3: Subtract, distributing the minus sign across all three terms: $(9c^{2}-30cd+25d^{2})-9c^{2}-30cd-25d^{2}=-60cd$.\nStep 4: Check at $c=1$, $d=1$: $(-2)^{2}-(8)^{2}=4-64=-60$, and $-60(1)(1)=-60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): assumes squaring distributes over the terms, so both squares would expand to $9c^{2}+25d^{2}$ and cancel completely.\n* Choice C ($60cd$): subtracts in the wrong order, computing $(3c+5d)^{2}-(3c-5d)^{2}$ instead.\n* Choice D ($18c^{2}+50d^{2}$): adds the two squares rather than subtracting them: the $\\pm 30cd$ terms cancel and the squares double to $18c^{2}+50d^{2}$.\n\n**Test Day Takeaway:** A difference of two squared binomials keeps only the cross terms. Distribute the subtraction across every term of the second expansion — that dropped minus sign is the whole trap.",
      skills: ["perfect-square-trinomial"]
    }
  ]
};
