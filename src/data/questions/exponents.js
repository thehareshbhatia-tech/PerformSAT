// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which expression is equivalent to $(4x^{3})^{2}$?",
      choices: [
        // distractor: raises x^3 to the second power but leaves the coefficient 4 unsquared
        { id: "A", text: "$4x^{6}$" },
        // distractor: multiplies the coefficient 4 by the exponent 2 instead of squaring it
        { id: "B", text: "$8x^{6}$" },
        // distractor: squares the coefficient but adds the exponents 3 + 2 instead of multiplying them
        { id: "C", text: "$16x^{5}$" },
        { id: "D", text: "$16x^{6}$" }
      ],
      correctAnswer: "D",
      hint: "Both the coefficient and the power of x are inside the parentheses.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** Square each factor: $4^{2} = 16$ and $(x^{3})^{2} = x^{6}$, so the expression is $16x^{6}$.\n\n**The Full Solution:**\nStep 1: A power of a product is the product of the powers: $(4x^{3})^{2} = 4^{2}(x^{3})^{2}$.\nStep 2: Square the coefficient: $4^{2} = 16$.\nStep 3: Raise a power to a power by multiplying exponents: $(x^{3})^{2} = x^{6}$, so the expression is $16x^{6}$. Check: at $x = 1$, $(4 \\cdot 1)^{2} = 16$ and $16(1)^{6} = 16$; at $x = 2$, $(4 \\cdot 8)^{2} = 1{,}024$ and $16(64) = 1{,}024$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x^{6}$): applies the exponent to $x^{3}$ only; the $4$ is inside the parentheses, so it is squared too.\n* Choice B ($8x^{6}$): multiplies $4$ by $2$ instead of computing $4^{2}$.\n* Choice C ($16x^{5}$): adds the exponents $3$ and $2$. Adding exponents is for multiplying powers of the same base, not for raising a power to a power.\n\n**Test Day Takeaway:** An exponent outside parentheses applies to every factor inside: raise the coefficient to that power and multiply the variable's exponents.",
      skills: ["exponent-laws"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$n^{7} \\cdot n^{-3}$\nWhich expression is equivalent to the given expression, where $n > 0$?",
      choices: [
        // distractor: multiplies the exponents 7 and -3 instead of adding them
        { id: "A", text: "$n^{-21}$" },
        { id: "B", text: "$n^{4}$" },
        // distractor: subtracts -3 from 7 instead of adding, getting 7 - (-3) = 10
        { id: "C", text: "$n^{10}$" },
        // distractor: multiplies the exponents and drops the negative sign
        { id: "D", text: "$n^{21}$" }
      ],
      correctAnswer: "B",
      hint: "Multiplying powers of the same base keeps that base.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the exponents: $n^{7} \\cdot n^{-3} = n^{7 + (-3)} = n^{4}$.\n\n**The Full Solution:**\nStep 1: Both factors are powers of the same base, $n$, so the product is $n$ raised to the sum of the exponents.\nStep 2: Add: $7 + (-3) = 4$.\nStep 3: The expression is equivalent to $n^{4}$. Check: with $n = 2$, $2^{7} \\cdot 2^{-3} = \\frac{128}{8} = 16 = 2^{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($n^{-21}$): multiplies the exponents, which is the rule for a power raised to a power, not for a product of powers.\n* Choice C ($n^{10}$): subtracts the exponents, $7 - (-3) = 10$; subtraction is the rule for a quotient of powers.\n* Choice D ($n^{21}$): multiplies the exponents and also drops the negative sign.\n\n**Test Day Takeaway:** Same base, multiplying: add the exponents, keeping track of negative signs; a negative exponent simply lowers the total.",
      skills: ["exponent-laws"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which expression is equivalent to $\\frac{(3x^{2})^{3}}{9x^{4}}$, where $x > 0$?",
      choices: [
        // distractor: cubes x^2 but not the coefficient 3, so the numerator becomes 3x^6
        { id: "A", text: "$\\frac{1}{3}x^{2}$" },
        // distractor: multiplies the coefficient 3 by the exponent 3, getting 9x^6 in the numerator
        { id: "B", text: "$x^{2}$" },
        // distractor: adds the exponents 2 + 3 in the numerator, getting 27x^5
        { id: "C", text: "$3x$" },
        { id: "D", text: "$3x^{2}$" }
      ],
      correctAnswer: "D",
      hint: "Simplify the numerator completely before dividing.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** The numerator is $27x^{6}$, and $\\frac{27x^{6}}{9x^{4}} = 3x^{2}$.\n\n**The Full Solution:**\nStep 1: Cube each factor in the numerator: $(3x^{2})^{3} = 3^{3}(x^{2})^{3} = 27x^{6}$.\nStep 2: Divide the coefficients: $\\frac{27}{9} = 3$.\nStep 3: Subtract the exponents of $x$: $\\frac{x^{6}}{x^{4}} = x^{2}$, so the expression is $3x^{2}$. Check: at $x = 2$, $\\frac{(12)^{3}}{9(16)} = \\frac{1{,}728}{144} = 12$ and $3(2)^{2} = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}x^{2}$): cubes $x^{2}$ but leaves the coefficient as $3$, so it computes $\\frac{3x^{6}}{9x^{4}}$.\n* Choice B ($x^{2}$): computes $3 \\cdot 3 = 9$ instead of $3^{3} = 27$, so the coefficients cancel.\n* Choice C ($3x$): adds the exponents $2$ and $3$ to get $x^{5}$ in the numerator; a power of a power multiplies the exponents.\n\n**Test Day Takeaway:** Work from the inside out: apply the outer exponent to every factor, then divide coefficients and subtract exponents of the same base.",
      skills: ["exponent-laws"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the value of $\\left(\\frac{2}{3}\\right)^{-3}$?",
      choices: [
        // distractor: takes the reciprocal correctly but also makes the result negative, treating the negative exponent as a negative sign
        { id: "A", text: "$-\\frac{27}{8}$" },
        // distractor: cubes 2/3 and ignores the negative sign in the exponent
        { id: "B", text: "$\\frac{8}{27}$" },
        { id: "C", text: "$\\frac{27}{8}$" },
        // distractor: takes the reciprocal 3/2 and multiplies it by 3 instead of cubing it
        { id: "D", text: "$\\frac{9}{2}$" }
      ],
      correctAnswer: "C",
      hint: "A negative exponent means reciprocal; it does not make the value negative.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** $\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^{3} = \\frac{27}{8}$.\n\n**The Full Solution:**\nStep 1: A negative exponent indicates a reciprocal: $\\left(\\frac{2}{3}\\right)^{-3} = \\frac{1}{\\left(\\frac{2}{3}\\right)^{3}} = \\left(\\frac{3}{2}\\right)^{3}$.\nStep 2: Cube the numerator and the denominator: $\\frac{3^{3}}{2^{3}} = \\frac{27}{8}$.\nStep 3: The value is $\\frac{27}{8}$. Check: $\\frac{27}{8} \\cdot \\left(\\frac{2}{3}\\right)^{3} = \\frac{27}{8} \\cdot \\frac{8}{27} = 1$, so the two are reciprocals ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{27}{8}$): reads the negative exponent as a negative sign on the result. A positive base raised to any power is positive.\n* Choice B ($\\frac{8}{27}$): cubes $\\frac{2}{3}$ but ignores the negative sign, so it gives $\\left(\\frac{2}{3}\\right)^{3}$.\n* Choice D ($\\frac{9}{2}$): takes the reciprocal and then multiplies by $3$: $\\frac{3}{2} \\cdot 3 = \\frac{9}{2}$. The exponent calls for $\\frac{3}{2} \\cdot \\frac{3}{2} \\cdot \\frac{3}{2}$.\n\n**Test Day Takeaway:** A negative exponent on a fraction flips the fraction; then apply the exponent as a positive power to both the numerator and the denominator.",
      skills: ["zero-negative-exponents"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "$\\frac{\\sqrt[3]{x^{10}}}{x^{-\\frac{2}{3}}} = x^{a}$\nIn the given equation, $x > 0$ and $a$ is a constant. What is the value of $a$?",
      choices: [
        // distractor: subtracts 2/3 instead of subtracting -2/3, getting 10/3 - 2/3 = 8/3
        { id: "A", text: "$\\frac{8}{3}$" },
        { id: "B", text: "$4$" },
        // distractor: treats the cube root as a square root, writing x^5 in the numerator and getting 5 + 2/3
        { id: "C", text: "$\\frac{17}{3}$" },
        // distractor: ignores the cube root, using x^10 in the numerator and getting 10 + 2/3
        { id: "D", text: "$\\frac{32}{3}$" }
      ],
      correctAnswer: "B",
      hint: "Write the numerator as a power of x with a fractional exponent.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[3]{x^{10}} = x^{\\frac{10}{3}}$, and dividing by $x^{-\\frac{2}{3}}$ adds $\\frac{2}{3}$ to the exponent: $\\frac{10}{3} + \\frac{2}{3} = 4$.\n\n**The Full Solution:**\nStep 1: A cube root is a power of $\\frac{1}{3}$, so $\\sqrt[3]{x^{10}} = x^{\\frac{10}{3}}$.\nStep 2: Dividing powers of the same base subtracts the exponents: $\\frac{x^{\\frac{10}{3}}}{x^{-\\frac{2}{3}}} = x^{\\frac{10}{3} - \\left(-\\frac{2}{3}\\right)} = x^{\\frac{12}{3}}$.\nStep 3: Simplify: $\\frac{12}{3} = 4$, so $a = 4$. Check: with $x = 8$, $\\sqrt[3]{8^{10}} = 2^{10} = 1{,}024$ and $8^{-\\frac{2}{3}} = \\frac{1}{4}$, so the quotient is $4{,}096 = 8^{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{3}$): subtracts $\\frac{2}{3}$ rather than $-\\frac{2}{3}$; dividing by a negative power raises the exponent.\n* Choice C ($\\frac{17}{3}$): treats the cube root as a square root, writing the numerator as $x^{5}$ and getting $5 + \\frac{2}{3}$.\n* Choice D ($\\frac{32}{3}$): ignores the cube root and uses $x^{10}$, getting $10 + \\frac{2}{3}$.\n\n**Test Day Takeaway:** Convert every root to a fractional exponent first; then a quotient of powers is a subtraction of exponents, and subtracting a negative exponent adds.",
      skills: ["exponent-laws"]
    }
  ],

  // Section: Comparing Exponential Expressions
  "Comparing Exponential Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which expression is equivalent to $(2x^{3})(5x^{4})$?",
      choices: [
        // distractor: adds the coefficients instead of multiplying them
        { id: "A", text: "$7x^{7}$" },
        // distractor: adds the coefficients and multiplies the exponents
        { id: "B", text: "$7x^{12}$" },
        { id: "C", text: "$10x^{7}$" },
        // distractor: multiplies the exponents instead of adding them
        { id: "D", text: "$10x^{12}$" }
      ],
      correctAnswer: "C",
      hint: "Multiply the coefficients; add the exponents of x.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** $2 \\cdot 5 = 10$ and $x^{3} \\cdot x^{4} = x^{3 + 4} = x^{7}$.\n\n**The Full Solution:**\nStep 1: Group the numbers and the powers of $x$: $(2 \\cdot 5)(x^{3} \\cdot x^{4})$.\nStep 2: Multiply the coefficients: $2 \\cdot 5 = 10$.\nStep 3: Multiply powers with the same base by adding exponents: $x^{3} \\cdot x^{4} = x^{7}$. So the product is $10x^{7}$. Check: at $x = 1$, $(2)(5) = 10$ and $10(1)^{7} = 10$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7x^{7}$): adds the coefficients $2 + 5$ instead of multiplying them.\n* Choice B ($7x^{12}$): adds the coefficients and multiplies the exponents, reversing both rules.\n* Choice D ($10x^{12}$): multiplies the exponents $3 \\cdot 4$; exponents are added when the bases are multiplied.\n\n**Test Day Takeaway:** Product of monomials: coefficients multiply, exponents add.",
      skills: ["comparing-exponentials"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$\\frac{3^{10}}{9^{3}}$\nWhich expression is equivalent to the given expression?",
      choices: [
        // distractor: rewrites 9^3 as 3^9 by multiplying 3 by 3 in the exponent, then subtracts 10 - 9
        { id: "A", text: "$3^{1}$" },
        { id: "B", text: "$3^{4}$" },
        // distractor: subtracts the exponents 10 - 3 without first rewriting 9 as a power of 3
        { id: "C", text: "$3^{7}$" },
        // distractor: adds the exponents 10 + 3 and ignores the different bases
        { id: "D", text: "$3^{13}$" }
      ],
      correctAnswer: "B",
      hint: "Rewrite both powers with the same base first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $9^{3} = (3^{2})^{3} = 3^{6}$, so $\\frac{3^{10}}{3^{6}} = 3^{4}$.\n\n**The Full Solution:**\nStep 1: Write $9$ as a power of $3$: $9 = 3^{2}$, so $9^{3} = (3^{2})^{3} = 3^{6}$.\nStep 2: Now both powers have base $3$: $\\frac{3^{10}}{3^{6}}$.\nStep 3: Subtract the exponents: $3^{10 - 6} = 3^{4}$. Check: $3^{10} = 59{,}049$ and $9^{3} = 729$, and $\\frac{59{,}049}{729} = 81 = 3^{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3^{1}$): rewrites $9^{3}$ as $3^{9}$; $9^{3} = (3^{2})^{3}$, and the exponents multiply to $6$, not $9$.\n* Choice C ($3^{7}$): subtracts $10 - 3$ even though the bases $3$ and $9$ are different.\n* Choice D ($3^{13}$): adds the exponents, which is the rule for multiplying, and ignores the different bases.\n\n**Test Day Takeaway:** Exponent rules work only on a common base; rewrite $4$, $8$, $9$, $27$, and similar numbers as powers of $2$ or $3$ before combining.",
      skills: ["comparing-exponentials", "exponent-laws"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$\\left(\\frac{1}{16}\\right)^{x} = 2^{kx}$\nIn the given equation, $k$ is a constant. If the equation is true for all values of $x$, what is the value of $k$?",
      choices: [
        { id: "A", text: "$-4$" },
        // distractor: confuses a reciprocal with a root, writing 1/16 as 2^(-1/4)
        { id: "B", text: "$-\\frac{1}{4}$" },
        // distractor: writes 1/16 as 2^(1/4), confusing the reciprocal with a fourth root and dropping the negative
        { id: "C", text: "$\\frac{1}{4}$" },
        // distractor: writes 16 as 2^4 but forgets that the reciprocal makes the exponent negative
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "A",
      hint: "Write 1/16 as a power of 2.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\frac{1}{16} = 2^{-4}$, so $\\left(\\frac{1}{16}\\right)^{x} = 2^{-4x}$ and $k = -4$.\n\n**The Full Solution:**\nStep 1: Write $16$ as a power of $2$: $16 = 2^{4}$, so $\\frac{1}{16} = 2^{-4}$.\nStep 2: Raise to the power $x$: $\\left(2^{-4}\\right)^{x} = 2^{-4x}$.\nStep 3: For $2^{-4x} = 2^{kx}$ to hold for all $x$, the exponents must match, so $k = -4$. Check: at $x = 1$, $\\frac{1}{16} = 2^{-4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{4}$): treats $\\frac{1}{16}$ as a fourth root of $2$; a reciprocal changes the sign of the exponent but does not invert the exponent.\n* Choice C ($\\frac{1}{4}$): inverts the exponent and drops the sign; $2^{\\frac{1}{4}}$ is about $1.19$, not $\\frac{1}{16}$.\n* Choice D ($4$): uses $16 = 2^{4}$ but forgets that $\\frac{1}{16}$ is the reciprocal, which makes the exponent negative.\n\n**Test Day Takeaway:** A fraction like $\\frac{1}{16}$ is a power of $2$ with a negative exponent; rewrite the base first, then multiply exponents.",
      skills: ["comparing-exponentials"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which expression is equivalent to $\\sqrt[3]{x^{2}} \\cdot \\sqrt[3]{x^{4}}$, where $x > 0$?",
      choices: [
        // distractor: multiplies the exponents 2/3 and 4/3 instead of adding them
        { id: "A", text: "$x^{\\frac{8}{9}}$" },
        { id: "B", text: "$x^{2}$" },
        // distractor: multiplies 2 and 4 inside the root, getting the cube root of x^8
        { id: "C", text: "$x^{\\frac{8}{3}}$" },
        // distractor: adds the exponents 2 and 4 but drops the cube root
        { id: "D", text: "$x^{6}$" }
      ],
      correctAnswer: "B",
      hint: "Write each cube root as a power with a fractional exponent.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^{\\frac{2}{3}} \\cdot x^{\\frac{4}{3}} = x^{\\frac{6}{3}} = x^{2}$.\n\n**The Full Solution:**\nStep 1: A cube root is the power $\\frac{1}{3}$: $\\sqrt[3]{x^{2}} = x^{\\frac{2}{3}}$ and $\\sqrt[3]{x^{4}} = x^{\\frac{4}{3}}$.\nStep 2: Multiply by adding exponents: $\\frac{2}{3} + \\frac{4}{3} = \\frac{6}{3}$.\nStep 3: $\\frac{6}{3} = 2$, so the product is $x^{2}$. Check: with $x = 8$, $\\sqrt[3]{64} \\cdot \\sqrt[3]{4096} = 4 \\cdot 16 = 64 = 8^{2}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{\\frac{8}{9}}$): multiplies the exponents $\\frac{2}{3} \\cdot \\frac{4}{3}$ instead of adding them.\n* Choice C ($x^{\\frac{8}{3}}$): multiplies $x^{2}$ and $x^{4}$ as if the result were $x^{8}$, then takes the cube root.\n* Choice D ($x^{6}$): adds $2 + 4$ but drops the cube root.\n\n**Test Day Takeaway:** Turn roots into fractional exponents; then the ordinary exponent rules apply.",
      skills: ["comparing-exponentials", "exponent-laws"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If $\\frac{9^{x}}{3^{y}} = 243$, what is the value of $2x - y$?",
      choices: [
        // distractor: subtracts the exponents in the wrong order, writing the quotient as 3^(y - 2x)
        { id: "A", text: "$-5$" },
        // distractor: writes 243 as 9^(5/2) and matches it to the exponent of 9 without rewriting 3^y in base 9
        { id: "B", text: "$\\frac{5}{2}$" },
        { id: "C", text: "$5$" },
        // distractor: writes 243 as 3^5 and then doubles the 5, applying 9 = 3^2 to the whole equation
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      hint: "Write every number in the equation as a power of 3.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\frac{9^{x}}{3^{y}} = \\frac{3^{2x}}{3^{y}} = 3^{2x - y}$, and $243 = 3^{5}$, so $2x - y = 5$.\n\n**The Full Solution:**\nStep 1: Rewrite the numerator: $9^{x} = (3^{2})^{x} = 3^{2x}$.\nStep 2: Divide powers of $3$ by subtracting exponents: $\\frac{3^{2x}}{3^{y}} = 3^{2x - y}$.\nStep 3: Since $243 = 3^{5}$, the equation $3^{2x - y} = 3^{5}$ gives $2x - y = 5$. Check: $x = 3$ and $y = 1$ satisfy $2x - y = 5$, and $\\frac{9^{3}}{3^{1}} = \\frac{729}{3} = 243$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): subtracts the exponents in the wrong order; dividing by $3^{y}$ subtracts $y$ from $2x$.\n* Choice B ($\\frac{5}{2}$): writes $243$ as $9^{\\frac{5}{2}}$ and matches it to $9^{x}$, leaving $3^{y}$ in a different base.\n* Choice D ($10$): writes $243 = 3^{5}$ correctly, then doubles the $5$ as if the conversion $9 = 3^{2}$ applied to the right side too.\n\n**Test Day Takeaway:** When an exponent expression like $2x - y$ is asked for, rewrite every term with one base; the expression usually appears as the single exponent.",
      skills: ["comparing-exponentials", "exponent-laws"]
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      difficulty: "easy",
      question: "For the exponential function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. Which equation defines $f$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$6$"], ["$1$", "$12$"], ["$2$", "$24$"], ["$3$", "$48$"]] },
      choices: [
        // distractor: swaps the initial value and the growth factor
        { id: "A", text: "$f(x) = 2(6)^{x}$" },
        { id: "B", text: "$f(x) = 6(2)^{x}$" },
        // distractor: uses the difference 12 - 6 = 6 between the first two outputs as the growth factor
        { id: "C", text: "$f(x) = 6(6)^{x}$" },
        // distractor: uses f(1) = 12 as the initial value instead of f(0) = 6
        { id: "D", text: "$f(x) = 12(2)^{x}$" }
      ],
      correctAnswer: "B",
      hint: "Compare each output with the one before it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(0) = 6$ is the initial value, and each output is $2$ times the one before it, so $f(x) = 6(2)^{x}$.\n\n**The Full Solution:**\nStep 1: An exponential function can be written as $f(x) = a(b)^{x}$, where $a = f(0)$. The table gives $f(0) = 6$, so $a = 6$.\nStep 2: Each output is multiplied by the same factor when $x$ increases by $1$: $\\frac{12}{6} = \\frac{24}{12} = \\frac{48}{24} = 2$, so $b = 2$.\nStep 3: The function is $f(x) = 6(2)^{x}$. Check: $f(3) = 6(2)^{3} = 6(8) = 48$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = 2(6)^{x}$): swaps the initial value and the growth factor; it gives $f(0) = 2$, not $6$.\n* Choice C ($f(x) = 6(6)^{x}$): uses the difference $12 - 6 = 6$ as the growth factor; exponential growth is found by dividing consecutive outputs, not subtracting them.\n* Choice D ($f(x) = 12(2)^{x}$): uses $f(1) = 12$ as the starting value; the value of $a$ in $a(b)^{x}$ is the output at $x = 0$.\n\n**Test Day Takeaway:** For an exponential table, read $a$ at $x = 0$ and find $b$ by dividing any output by the one before it.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The table shows the number of cells in a sample $t$ hours after the sample was prepared. The number of cells triples every hour. How many cells are in the sample when $t = 5$?",
      diagram: { type: "table", params: { xHeader: "t (hours)", yHeader: "Number of cells", rows: [["0", "50"], ["1", "150"], ["2", "450"]] } },
      choices: [
        // distractor: treats the growth as linear, multiplying 50 by 3 and then by 5
        { id: "A", text: "$750$" },
        // distractor: triples only 4 times, computing 50(3)^4
        { id: "B", text: "$4{,}050$" },
        { id: "C", text: "$12{,}150$" },
        // distractor: triples 6 times, computing 50(3)^6
        { id: "D", text: "$36{,}450$" }
      ],
      correctAnswer: "C",
      hint: "Count how many times the number triples between t = 0 and t = 5.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** The sample starts with $50$ cells and triples $5$ times, so it has $50(3)^{5} = 50(243) = 12{,}150$ cells.\n\n**The Full Solution:**\nStep 1: At $t = 0$ there are $50$ cells, and the number is multiplied by $3$ each hour, so the number of cells is $50(3)^{t}$.\nStep 2: Substitute $t = 5$: $50(3)^{5}$, and $3^{5} = 243$.\nStep 3: Multiply: $50(243) = 12{,}150$ cells. Check: continuing the table, $450 \\to 1{,}350 \\to 4{,}050 \\to 12{,}150$ at $t = 3, 4, 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($750$): treats the growth as linear, computing $50 \\cdot 3 \\cdot 5$; tripling every hour is repeated multiplication.\n* Choice B ($4{,}050$): multiplies by $3$ only $4$ times, which is the number of cells at $t = 4$.\n* Choice D ($36{,}450$): multiplies by $3$ six times, counting one hour too many.\n\n**Test Day Takeaway:** For repeated growth, the exponent equals the number of growth periods since $t = 0$; count the steps from the starting row, not the rows.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The table shows the value $v$, in dollars, of a machine $t$ years after it was purchased. Which of the following equations represents this relationship?",
      diagram: { type: "dataTable", params: { headers: ["Years after purchase, t", "Value, v (dollars)"], rows: [["0", "5,000"], ["1", "4,000"], ["2", "3,200"], ["3", "2,560"]] } },
      choices: [
        // distractor: uses the first year's drop of 1,000 dollars as a constant yearly decrease, which does not match the later years
        { id: "A", text: "$v = 5{,}000 - 1{,}000t$" },
        // distractor: uses the 20% lost each year as the multiplier instead of the 80% that remains
        { id: "B", text: "$v = 5{,}000(0.2)^{t}$" },
        { id: "C", text: "$v = 5{,}000(0.8)^{t}$" },
        // distractor: treats the 20% change as an increase
        { id: "D", text: "$v = 5{,}000(1.2)^{t}$" }
      ],
      correctAnswer: "C",
      hint: "Check whether the value drops by the same amount each year or by the same factor.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Each value is $0.8$ times the previous one, and the value at $t = 0$ is $5{,}000$, so $v = 5{,}000(0.8)^{t}$.\n\n**The Full Solution:**\nStep 1: The differences are $1{,}000$, $800$, and $640$, so the decrease is not constant and the relationship is not linear.\nStep 2: The ratios are $\\frac{4{,}000}{5{,}000} = \\frac{3{,}200}{4{,}000} = \\frac{2{,}560}{3{,}200} = 0.8$, so the value is multiplied by $0.8$ each year, starting from $5{,}000$.\nStep 3: The equation is $v = 5{,}000(0.8)^{t}$. Check: $5{,}000(0.8)^{3} = 5{,}000(0.512) = 2{,}560$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($v = 5{,}000 - 1{,}000t$): fits the first year only; at $t = 2$ it gives $3{,}000$, not $3{,}200$.\n* Choice B ($v = 5{,}000(0.2)^{t}$): uses the $20\\%$ lost each year as the multiplier; the factor is the $80\\%$ that remains.\n* Choice D ($v = 5{,}000(1.2)^{t}$): describes a value that grows by $20\\%$ each year, but the values in the table decrease.\n\n**Test Day Takeaway:** If equal steps in $t$ multiply the output by the same factor, the model is exponential; for a decrease of $r\\%$ per step, the factor is $1 - \\frac{r}{100}$.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$g(x) = a(2)^{x}$\nIn the given function, $a$ is a constant, and $g(3) = 56$. What is the y-intercept of the graph of $y = g(x)$ in the $xy$-plane?",
      choices: [
        { id: "A", text: "$(0, 7)$" },
        // distractor: divides 56 by 2 only twice
        { id: "B", text: "$(0, 14)$" },
        // distractor: divides 56 by 2 only once
        { id: "C", text: "$(0, 28)$" },
        // distractor: uses g(3) as the y-intercept
        { id: "D", text: "$(0, 56)$" }
      ],
      correctAnswer: "A",
      hint: "The y-intercept is (0, g(0)), and g(0) = a.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** $g(3) = 8a = 56$, so $a = 7$, and the y-intercept is $(0, g(0)) = (0, 7)$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $g(3) = a(2)^{3} = 8a$.\nStep 2: Set $8a = 56$, so $a = 7$.\nStep 3: The y-intercept is $(0, g(0))$, and $g(0) = 7(2)^{0} = 7$. Check: $7(2)^{3} = 7 \\cdot 8 = 56$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 14)$): divides $56$ by $2$ only twice, which gives $g(1)$.\n* Choice C ($(0, 28)$): divides $56$ by $2$ only once, which gives $g(2)$.\n* Choice D ($(0, 56)$): uses the value at $x = 3$ as if it were the value at $x = 0$.\n\n**Test Day Takeaway:** For $f(x) = a(b)^{x}$, the y-intercept is always $(0, a)$.",
      skills: ["exponential-y-intercept"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A sample of a substance has a mass of $300$ grams. The mass of the sample decreases by $15\\%$ every $8$ years. The function $m$ gives the mass, in grams, of the sample $t$ years from now. Which equation defines $m$?",
      choices: [
        // distractor: uses the 15% lost as the factor instead of the 85% that remains
        { id: "A", text: "$m(t) = 300(0.15)^{\\frac{t}{8}}$" },
        // distractor: applies the 15% decrease every year instead of every 8 years
        { id: "B", text: "$m(t) = 300(0.85)^{t}$" },
        // distractor: multiplies t by 8, which applies the decrease 8 times a year
        { id: "C", text: "$m(t) = 300(0.85)^{8t}$" },
        { id: "D", text: "$m(t) = 300(0.85)^{\\frac{t}{8}}$" }
      ],
      correctAnswer: "D",
      hint: "The exponent must count how many 8-year periods have passed.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** Each $8$-year period leaves $85\\%$ of the mass, and $t$ years contain $\\frac{t}{8}$ such periods, so $m(t) = 300(0.85)^{\\frac{t}{8}}$.\n\n**The Full Solution:**\nStep 1: A decrease of $15\\%$ leaves $100\\% - 15\\% = 85\\%$, so the mass is multiplied by $0.85$ once every $8$ years.\nStep 2: In $t$ years there are $\\frac{t}{8}$ periods of $8$ years, so the exponent is $\\frac{t}{8}$.\nStep 3: Starting from $300$ grams, $m(t) = 300(0.85)^{\\frac{t}{8}}$. Check: $m(8) = 300(0.85)^{1} = 255$, which is $15\\%$ less than $300$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($m(t) = 300(0.15)^{\\frac{t}{8}}$): uses the $15\\%$ that is lost as the factor; after $8$ years it leaves only $45$ grams, an $85\\%$ decrease.\n* Choice B ($m(t) = 300(0.85)^{t}$): applies the $15\\%$ decrease every year, so after $8$ years the sample would have lost far more than $15\\%$.\n* Choice C ($m(t) = 300(0.85)^{8t}$): multiplies $t$ by $8$, which applies the decrease $8$ times each year instead of once every $8$ years.\n\n**Test Day Takeaway:** When a change happens once every $p$ years, the exponent is $\\frac{t}{p}$; test your model at $t = p$ to confirm it applies the change exactly once.",
      skills: ["exponential-growth-decay"]
    }
  ]
};
