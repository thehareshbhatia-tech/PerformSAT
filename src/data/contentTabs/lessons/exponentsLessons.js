export const exponentsLessonTabs = {

  // ───────────────────────────────────────────────────────
  // SECTION 1: Laws of Exponents
  // ───────────────────────────────────────────────────────

  1: {
    moduleId: 'exponents',
    title: 'Laws of Exponents',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The exponent laws let you simplify expressions without expanding — master these rules and the SAT becomes fast algebra.',
        blocks: [
          {
            type: 'text',
            content: 'An **exponent** tells you how many times a base is multiplied by itself: $a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ times}}$. The laws of exponents are shortcuts that let you combine and simplify without writing out every factor.',
          },
          {
            type: 'table',
            title: 'The Six Essential Laws',
            headers: ['Law', 'Rule', 'Example'],
            rows: [
              ['Product Rule', '$a^m \\cdot a^n = a^{m+n}$', '$x^3 \\cdot x^4 = x^7$'],
              ['Quotient Rule', '$\\frac{a^m}{a^n} = a^{m-n}$', '$\\frac{x^5}{x^2} = x^3$'],
              ['Power Rule', '$(a^m)^n = a^{mn}$', '$(x^3)^2 = x^6$'],
              ['Zero Exponent', '$a^0 = 1$', '$7^0 = 1$'],
              ['Negative Exponent', '$a^{-n} = \\frac{1}{a^n}$', '$x^{-2} = \\frac{1}{x^2}$'],
              ['Power of a Product', '$(ab)^n = a^n b^n$', '$(2x)^3 = 8x^3$'],
            ],
          },
          {
            type: 'formula',
            label: 'Fractional Exponents',
            content: '$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$',
            note: 'The denominator of the fraction becomes the root index; the numerator stays as the power.',
          },
          {
            type: 'keyInsight',
            content: 'The product and quotient rules only work when the **bases are the same**. You can combine $x^3 \\cdot x^5$ but NOT $x^3 \\cdot y^5$ — different bases stay separate.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Exponent Equation: Match the Bases',
            content: 'Recognition cue: an equation with $x$ in multiple exponent positions or "what is the value of $a$?" First move: apply product rule (add exponents when multiplying), quotient rule (subtract when dividing), power rule (multiply for nested exponents). Set the resulting exponent equal to the target.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Exponents Instead of Adding',
            wrong: '$x^3 \\cdot x^4 = x^{12}$ — student multiplied $3 \\times 4$.',
            correction: 'Multiplication of same bases means **add** exponents: $x^{3+4} = x^7$. The power rule ($x^{3 \\cdot 4} = x^{12}$) applies to $(x^3)^4$, not $x^3 \\cdot x^4$.',
          },
          {
            type: 'trapCard',
            title: 'Distributing an Exponent Over Addition',
            wrong: '$(x + y)^2 = x^2 + y^2$.',
            correction: '$(x + y)^2 = x^2 + 2xy + y^2$. The power-of-a-product rule applies to **multiplication** $(xy)^2 = x^2 y^2$, not addition.',
          },
          {
            type: 'tip',
            content: 'Decision rule: same-base multiplication -> add exponents. Same-base division -> subtract. Power of a power -> multiply. If bases differ, rewrite as a common base (e.g., $8 = 2^3$, $27 = 3^3$) before combining.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simplifying a Multi-Rule Expression',
            items: [
              'Rewrite every base as a prime power if possible (e.g., $8 = 2^3$, $27 = 3^3$)',
              'Apply the **power rule** to clear nested exponents: $(a^m)^n = a^{mn}$',
              'Apply the **product rule** to combine same-base multiplication: $a^m \\cdot a^n = a^{m+n}$',
              'Apply the **quotient rule** to handle division: $\\frac{a^m}{a^n} = a^{m-n}$',
              'Convert negative exponents to fractions if the answer requires it: $a^{-n} = \\frac{1}{a^n}$',
            ],
          },
          {
            type: 'steps',
            title: 'Converting Fractional Exponents to Radicals',
            items: [
              'Identify the numerator $m$ and denominator $n$ of the fractional exponent',
              'The denominator $n$ becomes the **root index**: $a^{1/n} = \\sqrt[n]{a}$',
              'The numerator $m$ becomes the **power**: $a^{m/n} = \\sqrt[n]{a^m}$',
              'Simplify the radical if possible',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Multiplying Exponents Instead of Adding',
            wrong: '$x^3 \\cdot x^4 = x^{12}$. Student multiplied the exponents.',
            correction: 'When bases are the **same** and you **multiply**, you **add** exponents: $x^3 \\cdot x^4 = x^{3+4} = x^7$.',
          },
          {
            type: 'trapCard',
            title: 'Distributing an Exponent Over Addition',
            wrong: '$(x + y)^2 = x^2 + y^2$. Student distributed the exponent.',
            correction: '$(x + y)^2 = x^2 + 2xy + y^2$. The power-of-a-product rule applies to **multiplication**, not addition.',
          },
          {
            type: 'trapCard',
            title: 'Negative Exponent Means Negative Number',
            wrong: '$2^{-3} = -8$. Student made the result negative.',
            correction: '$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. A negative exponent means **reciprocal**, not a negative answer.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Simplify: $\\frac{(2x^3)^2 \\cdot x^{-1}}{4x^2}$',
            steps: [
              { label: 'Expand numerator', content: '$(2x^3)^2 = 4x^6$, so numerator $= 4x^6 \\cdot x^{-1} = 4x^5$' },
              { label: 'Divide', content: '$\\frac{4x^5}{4x^2} = x^{5-2} = x^3$' },
              { label: 'Answer', content: '$x^3$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $8^{2x} \\cdot 4^x = 2^{15}$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite in base 2', content: '$8 = 2^3$ and $4 = 2^2$, so $(2^3)^{2x} \\cdot (2^2)^x = 2^{15}$' },
              { label: 'Apply power rule', content: '$2^{6x} \\cdot 2^{2x} = 2^{15}$' },
              { label: 'Product rule', content: '$2^{6x + 2x} = 2^{15} \\Rightarrow 2^{8x} = 2^{15}$' },
              { label: 'Set exponents equal', content: '$8x = 15 \\Rightarrow x = \\frac{15}{8}$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'exponents',
    title: 'Simple Laws of Exponents (Product Rule) Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The product rule lets you combine same-base multiplication by adding exponents.',
        blocks: [
          {
            type: 'formula',
            label: 'Product Rule',
            content: '$$a^m \\cdot a^n = a^{m+n}$$',
            note: 'Bases must be identical. Add the exponents; do not multiply them.',
          },
          {
            type: 'text',
            content: 'When you multiply powers that share the same base, the result keeps that base and the exponent is the **sum** of the individual exponents. This works because $a^m \\cdot a^n$ means $m$ copies of $a$ times $n$ copies of $a$ — a total of $m + n$ copies.',
          },
          {
            type: 'keyInsight',
            content: 'The product rule extends to any number of factors: $a^2 \\cdot a^5 \\cdot a^3 = a^{2+5+3} = a^{10}$. Each factor must share the same base.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Simplify $x^a \\cdot x^b$" — Add the Exponents',
            content: 'Recognition cue: two or more same-base terms being multiplied. First move: verify bases match, then add all exponents. If bases differ, check whether they can be rewritten as powers of a common base.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Instead of Adding',
            wrong: '$x^4 \\cdot x^5 = x^{20}$. Student multiplied $4 \\times 5$.',
            correction: 'Product rule means **add**: $x^{4+5} = x^9$. Multiplying exponents applies only to the **power rule** $(x^4)^5 = x^{20}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying the Product Rule',
            items: [
              'Confirm all factors share the **same base**',
              'Add the exponents: $m + n + \\ldots$',
              'Write the result as $a^{\\text{sum}}$',
              'If coefficients are present (e.g., $3x^2 \\cdot 5x^4$), multiply coefficients separately: $15x^6$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $x^{a+2} \\cdot x^{3a} = x^{14}$, what is the value of $a$?',
            steps: [
              { label: 'Apply product rule', content: '$x^{(a+2) + 3a} = x^{14}$' },
              { label: 'Simplify exponent', content: '$x^{4a+2} = x^{14}$' },
              { label: 'Set exponents equal', content: '$4a + 2 = 14 \\Rightarrow 4a = 12 \\Rightarrow a = 3$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Simplify $2x^3 \\cdot 5x^7$.',
            answer: 'Multiply coefficients: $2 \\times 5 = 10$. Add exponents: $3 + 7 = 10$. Result: $10x^{10}$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'exponents',
    title: 'Simple Laws of Exponents (Quotient Rule) Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The quotient rule lets you simplify same-base division by subtracting exponents.',
        blocks: [
          {
            type: 'formula',
            label: 'Quotient Rule',
            content: '$$\\frac{a^m}{a^n} = a^{m-n}$$',
            note: 'Bases must be identical. Subtract the denominator exponent from the numerator exponent.',
          },
          {
            type: 'text',
            content: 'Dividing powers with the same base cancels common factors. Out of $m$ copies of $a$ in the numerator and $n$ copies in the denominator, $n$ copies cancel, leaving $m - n$ copies. If $m < n$, the result is a negative exponent: $a^{m-n} = \\frac{1}{a^{n-m}}$.',
          },
          {
            type: 'keyInsight',
            content: 'The quotient rule naturally produces the zero-exponent rule as a special case: $\\frac{a^n}{a^n} = a^{n-n} = a^0 = 1$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Simplify $\\frac{x^a}{x^b}$" — Subtract the Exponents',
            content: 'Recognition cue: a fraction with same-base powers in the numerator and denominator. First move: subtract the bottom exponent from the top exponent. If the result is negative, rewrite as a reciprocal.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting in the Wrong Order',
            wrong: '$\\frac{x^3}{x^7} = x^4$. Student computed $7 - 3$ instead of $3 - 7$.',
            correction: 'Top minus bottom: $x^{3-7} = x^{-4} = \\frac{1}{x^4}$. The numerator exponent always comes first in the subtraction.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Applying the Quotient Rule',
            items: [
              'Confirm the numerator and denominator share the **same base**',
              'Subtract: top exponent minus bottom exponent',
              'If the result is negative, convert: $a^{-k} = \\frac{1}{a^k}$',
              'If coefficients are present, divide them separately: $\\frac{12x^5}{4x^2} = 3x^3$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Simplify $\\frac{6x^8}{3x^3}$ completely.',
            steps: [
              { label: 'Divide coefficients', content: '$\\frac{6}{3} = 2$' },
              { label: 'Subtract exponents', content: '$x^{8-3} = x^5$' },
              { label: 'Answer', content: '$2x^5$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Simplify $\\frac{x^4}{x^{10}}$.',
            answer: '$x^{4-10} = x^{-6} = \\frac{1}{x^6}$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'exponents',
    title: 'Fractional Exponents Simple Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A fractional exponent combines a power and a root into one notation.',
        blocks: [
          {
            type: 'formula',
            label: 'Fractional Exponent Rule',
            content: '$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$',
            note: 'Denominator = root index, Numerator = power',
          },
          {
            type: 'text',
            content: 'The fraction $\\frac{m}{n}$ in the exponent splits into two operations: the **denominator** $n$ tells you which root to take, and the **numerator** $m$ tells you which power to raise to. You can apply them in either order — root first then power, or power first then root.',
          },
          {
            type: 'table',
            title: 'Common Fractional Exponents',
            headers: ['Expression', 'Meaning', 'Value'],
            rows: [
              ['$8^{1/3}$', '$\\sqrt[3]{8}$', '$2$'],
              ['$16^{1/2}$', '$\\sqrt{16}$', '$4$'],
              ['$27^{2/3}$', '$\\left(\\sqrt[3]{27}\\right)^2 = 3^2$', '$9$'],
              ['$4^{3/2}$', '$\\left(\\sqrt{4}\\right)^3 = 2^3$', '$8$'],
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Rewrite Using Radicals" or "Evaluate $a^{p/q}$"',
            content: 'Recognition cue: a fractional exponent that needs converting to radical form or evaluating. First move: take the $n$th root of the base, then raise to the $m$th power. Taking the root first keeps the numbers small.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Numerator and Denominator',
            wrong: '$8^{2/3}$: student takes the square root of $8$, then cubes it.',
            correction: 'Denominator $= 3$ is the root, numerator $= 2$ is the power: $\\sqrt[3]{8} = 2$, then $2^2 = 4$. Root index is always the denominator.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating a Fractional Exponent',
            items: [
              'Read the denominator $n$ — this is your root index',
              'Compute $\\sqrt[n]{a}$ (take the $n$th root of the base)',
              'Raise the result to the power $m$ (the numerator)',
              'Simplify if needed',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Evaluate $32^{2/5}$.',
            steps: [
              { label: 'Identify root', content: 'Denominator is $5$, so take the 5th root: $\\sqrt[5]{32} = 2$' },
              { label: 'Apply power', content: 'Numerator is $2$: $2^2 = 4$' },
              { label: 'Answer', content: '$32^{2/5} = 4$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Evaluate $125^{2/3}$.',
            answer: '$\\sqrt[3]{125} = 5$, then $5^2 = 25$. So $125^{2/3} = 25$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'exponents',
    title: 'Fractional Exponents Complex Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Complex fractional exponent problems combine multiple rules — rewrite bases, apply the power rule, then simplify.',
        blocks: [
          {
            type: 'text',
            content: 'When fractional exponents appear in multi-step expressions, the strategy is to convert everything to a common prime base, apply the power rule to clear nested exponents, then use the product or quotient rule to combine. The fractional arithmetic is the hardest part.',
          },
          {
            type: 'formula',
            label: 'Key Chain',
            content: '$$\\left(a^{m/n}\\right)^p = a^{mp/n}$$',
            note: 'Power rule still works: multiply the exponents, keeping the fraction.',
          },
          {
            type: 'keyInsight',
            content: 'Negative fractional exponents combine both ideas: $a^{-m/n} = \\frac{1}{a^{m/n}} = \\frac{1}{\\sqrt[n]{a^m}}$. Flip to the reciprocal (negative exponent), then take the root and power (fractional exponent).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Nested Fractional Exponents',
            content: 'Recognition cue: an expression like $(x^{a/b})^{c/d}$ or $\\frac{x^{a/b}}{x^{c/d}}$. First move: apply the power rule (multiply fractions) or quotient rule (subtract fractions). Reduce the resulting fraction.',
          },
          {
            type: 'trapCard',
            title: 'Fraction Arithmetic Errors',
            wrong: '$x^{2/3} \\cdot x^{1/2} = x^{3/5}$. Student added numerators and denominators separately.',
            correction: 'Adding fractions requires a common denominator: $\\frac{2}{3} + \\frac{1}{2} = \\frac{4}{6} + \\frac{3}{6} = \\frac{7}{6}$. Result: $x^{7/6}$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simplifying Complex Fractional Exponent Expressions',
            items: [
              'Rewrite any radicals as fractional exponents: $\\sqrt[n]{a} = a^{1/n}$',
              'Apply the power rule to nested exponents: multiply the fractions',
              'Use the product/quotient rule: add or subtract the fractional exponents',
              'Find a common denominator when adding or subtracting fractions',
              'Simplify the final fraction and convert back to radical form if required',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Simplify $\\frac{x^{3/4} \\cdot x^{1/2}}{x^{1/4}}$.',
            steps: [
              { label: 'Numerator (product rule)', content: '$x^{3/4} \\cdot x^{1/2} = x^{3/4 + 2/4} = x^{5/4}$' },
              { label: 'Quotient rule', content: '$\\frac{x^{5/4}}{x^{1/4}} = x^{5/4 - 1/4} = x^{4/4} = x^1$' },
              { label: 'Answer', content: '$x$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Simplify $(x^{2/3})^{3/4}$.',
            answer: 'Multiply exponents: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$. Result: $x^{1/2} = \\sqrt{x}$.',
          },
        ],
      },
    },
  },

  // ───────────────────────────────────────────────────────
  // SECTION 2: Comparing Exponential Expressions
  // ───────────────────────────────────────────────────────

  6: {
    moduleId: 'exponents',
    title: 'Comparing Exponential Expressions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'To compare expressions with exponents, rewrite them with a common base — then compare exponents directly.',
        blocks: [
          {
            type: 'text',
            content: 'You can\'t easily compare $8^4$ and $4^6$ by computing — the numbers are huge. Instead, rewrite both with the **same base** and compare the exponents. Since $8 = 2^3$ and $4 = 2^2$, you get $8^4 = 2^{12}$ and $4^6 = 2^{12}$. They\'re equal!',
          },
          {
            type: 'keyInsight',
            content: 'When two expressions share the same base: **larger exponent = larger value** (assuming base $> 1$). For bases between 0 and 1, the relationship flips — larger exponent gives a **smaller** value.',
          },
          {
            type: 'table',
            title: 'Common Base Conversions',
            headers: ['Number', 'As Power of 2', 'As Power of 3'],
            rows: [
              ['$4$', '$2^2$', '---'],
              ['$8$', '$2^3$', '---'],
              ['$16$', '$2^4$', '---'],
              ['$32$', '$2^5$', '---'],
              ['$9$', '---', '$3^2$'],
              ['$27$', '---', '$3^3$'],
              ['$81$', '---', '$3^4$'],
            ],
          },
          {
            type: 'comparison',
            title: 'Base Greater Than 1 vs. Base Between 0 and 1',
            items: [
              { label: 'Base $> 1$', content: '**Larger exponent = larger value.**\n$2^5 = 32$ and $2^3 = 8$, so $2^5 > 2^3$.' },
              { label: '$0 < $ Base $< 1$', content: '**Larger exponent = smaller value.**\n$(\\frac{1}{2})^5 = \\frac{1}{32}$ and $(\\frac{1}{2})^3 = \\frac{1}{8}$, so $(\\frac{1}{2})^5 < (\\frac{1}{2})^3$.' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"$a^x = b$" — Solve by Matching Bases',
            content: 'Recognition cue: an equation with the variable in the exponent and both sides expressible as powers of the same base. First move: rewrite both sides with a common base, then set exponents equal. $8^x = 32$ becomes $2^{3x} = 2^5$, giving $3x = 5$, so $x = \\frac{5}{3}$.',
          },
          {
            type: 'trapCard',
            title: 'Bases Between 0 and 1',
            wrong: 'Student assumes $\\left(\\frac{1}{3}\\right)^2 < \\left(\\frac{1}{3}\\right)^3$ because $2 < 3$.',
            correction: 'For bases between $0$ and $1$, larger exponents give **smaller** values. $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$ and $\\left(\\frac{1}{3}\\right)^3 = \\frac{1}{27}$. Since $\\frac{1}{9} > \\frac{1}{27}$, the inequality flips.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Match Bases First',
            wrong: 'Student compares $4^5$ and $8^3$ by comparing exponents $5 > 3$ and concludes $4^5 > 8^3$.',
            correction: 'Exponents can only be compared directly when the bases are the same. Rewrite: $4^5 = (2^2)^5 = 2^{10}$ and $8^3 = (2^3)^3 = 2^9$. Since $10 > 9$, $4^5 > 8^3$ happens to be correct, but the reasoning required matching bases first.',
          },
          {
            type: 'tip',
            content: 'Decision rule: same-base comparison -> compare exponents directly (for base $> 1$: larger exponent = larger value; for $0 < $ base $< 1$: reverse). Different bases -> rewrite as a common base first, then compare.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Comparing Two Exponential Expressions',
            items: [
              'Identify a **common base** for both expressions (often 2, 3, or 5)',
              'Rewrite each expression using the common base and the power rule: $(a^m)^n = a^{mn}$',
              'Compare the resulting exponents — larger exponent wins (for base $> 1$)',
            ],
          },
          {
            type: 'steps',
            title: 'Solving Equations by Matching Bases',
            items: [
              'Rewrite both sides with the **same base**',
              'Since $a^m = a^n$ implies $m = n$ (for $a > 0, a \\neq 1$), set exponents equal',
              'Solve the resulting linear equation',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Inequality Reversal for Fractional Bases',
            wrong: '$\\left(\\frac{1}{2}\\right)^3 > \\left(\\frac{1}{2}\\right)^5$ because $3 < 5$. Wait --- that\'s actually correct!',
            correction: 'For $0 < \\text{base} < 1$, the inequality **reverses**: raising to a higher power makes the value **smaller**. $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ and $\\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$, so $\\frac{1}{8} > \\frac{1}{32}$.',
          },
          {
            type: 'trapCard',
            title: 'Comparing Without a Common Base',
            wrong: '"$3^4 = 81$ and $4^3 = 64$, so $3^4 > 4^3$." Student computed both values, which works here but fails for large exponents.',
            correction: 'For small values, direct computation is fine. For larger exponents, rewriting with a common base is the only reliable approach. Build the habit of matching bases.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $2^{3x} = 16^2$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite 16', content: '$16 = 2^4$, so $16^2 = (2^4)^2 = 2^8$' },
              { label: 'Match exponents', content: '$2^{3x} = 2^8 \\Rightarrow 3x = 8$' },
              { label: 'Solve', content: '$x = \\frac{8}{3}$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $9^{x+1} = 27^x$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite in base 3', content: '$9 = 3^2$ and $27 = 3^3$' },
              { label: 'Apply power rule', content: '$(3^2)^{x+1} = (3^3)^x \\Rightarrow 3^{2(x+1)} = 3^{3x}$' },
              { label: 'Set exponents equal', content: '$2(x + 1) = 3x$' },
              { label: 'Solve', content: '$2x + 2 = 3x \\Rightarrow x = 2$' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'exponents',
    title: 'Simple Exponential Expression Comparison Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Basic comparison problems give two expressions with related bases — rewrite them with a common base and compare exponents.',
        blocks: [
          {
            type: 'text',
            content: 'In a straightforward comparison, both bases are powers of the same small prime (usually 2 or 3). Rewrite each expression, apply the power rule to get a single exponent, and compare. The expression with the larger exponent is greater (when the common base is $> 1$).',
          },
          {
            type: 'formula',
            label: 'Comparison Strategy',
            content: '$$\\text{If } a^p \\text{ and } a^q \\text{ share base } a > 1, \\text{ then } a^p > a^q \\iff p > q$$',
          },
          {
            type: 'keyInsight',
            content: 'Memorize powers of 2 ($2, 4, 8, 16, 32, 64$) and powers of 3 ($3, 9, 27, 81$). These appear in nearly every SAT comparison problem.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Is Greater: $a^m$ or $b^n$?"',
            content: 'Recognition cue: two exponential expressions with different bases that are both powers of a small prime. First move: identify the common base, rewrite, and compare the resulting exponents.',
          },
          {
            type: 'trapCard',
            title: 'Comparing Exponents Without Matching Bases',
            wrong: '$4^6$ vs. $8^4$: student says $4^6$ is larger because $6 > 4$.',
            correction: 'You cannot compare exponents directly when the bases differ. Rewrite in base 2: $4^6 = 2^{12}$ and $8^4 = 2^{12}$. They are equal.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Basic Exponential Comparison',
            items: [
              'Express each base as a power of the smallest possible prime ($2, 3, 5, \\ldots$)',
              'Apply the power rule: $(p^a)^b = p^{ab}$',
              'Compare the resulting exponents on the common base',
              'Larger exponent = larger value (when base $> 1$)',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Which is greater: $16^3$ or $8^4$?',
            steps: [
              { label: 'Rewrite in base 2', content: '$16 = 2^4$ so $16^3 = 2^{12}$; $8 = 2^3$ so $8^4 = 2^{12}$' },
              { label: 'Compare', content: '$2^{12} = 2^{12}$' },
              { label: 'Answer', content: 'They are equal.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'Which is greater: $27^2$ or $9^3$?',
            answer: '$27^2 = (3^3)^2 = 3^6$ and $9^3 = (3^2)^3 = 3^6$. They are equal.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'exponents',
    title: 'Complex Exponential Expression Comparison Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Advanced comparison problems introduce variables in exponents, fractional bases, or multi-step rewrites.',
        blocks: [
          {
            type: 'text',
            content: 'When a comparison involves variables, set the two expressions equal using a common base, then solve for the variable. When fractional bases appear, remember that the exponent-comparison rule **reverses** for $0 < b < 1$.',
          },
          {
            type: 'comparison',
            title: 'Variable Exponent Equations',
            items: [
              { label: 'Standard Approach', content: 'Rewrite both sides with the same base, then equate exponents.\n$4^x = 32$ becomes $2^{2x} = 2^5$, so $2x = 5$, giving $x = \\frac{5}{2}$.' },
              { label: 'Fractional Base Approach', content: 'A fraction base flips the inequality.\n$\\left(\\frac{1}{4}\\right)^x > \\left(\\frac{1}{4}\\right)^3$ means $x < 3$ because the base is between 0 and 1.' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'When both sides of an equation have the form $a^{f(x)} = a^{g(x)}$ with $a > 0, a \\neq 1$, the equation reduces to $f(x) = g(x)$. This transforms an exponential problem into a simple algebra problem.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Variable Exponent Problems',
            content: 'Recognition cue: "For what value of $x$ is $a^{f(x)} = b^{g(x)}$?" where $a$ and $b$ share a common base. First move: rewrite both sides with the common base, equate the exponents, and solve the resulting equation.',
          },
          {
            type: 'trapCard',
            title: 'Inequality Direction with Fractional Bases',
            wrong: '$\\left(\\frac{1}{2}\\right)^x > \\left(\\frac{1}{2}\\right)^4$. Student concludes $x > 4$.',
            correction: 'For a base between 0 and 1, a **larger** exponent gives a **smaller** value. The correct inequality is $x < 4$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving Exponential Equations with Variable Exponents',
            items: [
              'Rewrite all bases as powers of a single prime',
              'Apply the power rule to consolidate each side into a single exponent',
              'Set the exponents equal (valid when the common base $a > 0, a \\neq 1$)',
              'Solve the resulting algebraic equation for the variable',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $\\left(\\frac{1}{8}\\right)^{x-1} = 16^x$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite in base 2', content: '$\\frac{1}{8} = 2^{-3}$ and $16 = 2^4$' },
              { label: 'Apply power rule', content: '$(2^{-3})^{x-1} = (2^4)^x \\Rightarrow 2^{-3(x-1)} = 2^{4x}$' },
              { label: 'Expand and equate', content: '$-3x + 3 = 4x$' },
              { label: 'Solve', content: '$3 = 7x \\Rightarrow x = \\frac{3}{7}$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'If $4^{2x+1} = 8^x$, find $x$.',
            answer: 'Rewrite in base 2: $2^{2(2x+1)} = 2^{3x}$, so $4x + 2 = 3x$, giving $x = -2$.',
          },
        ],
      },
    },
  },

  // ───────────────────────────────────────────────────────
  // SECTION 3: Exponential Functions
  // ───────────────────────────────────────────────────────

  9: {
    moduleId: 'exponents',
    title: 'Exponential Functions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'An exponential function has the variable in the exponent — it models growth and decay with constant percentage change.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Function',
            content: '$$f(x) = a \\cdot b^x$$',
            note: '$a$ = initial value (when $x = 0$), $b$ = growth/decay factor',
          },
          {
            type: 'text',
            content: 'Unlike linear functions (constant additive change), exponential functions have **constant multiplicative change**. Each time $x$ increases by 1, the output is multiplied by $b$. This makes exponential growth accelerate rapidly and exponential decay slow down gradually.',
          },
          {
            type: 'comparison',
            title: 'Growth vs. Decay',
            items: [
              { label: 'Growth ($b > 1$)', content: '**Direction:** Increases as $x$ increases\n**Factor:** $b > 1$ (e.g., $1.05$ for 5% growth)\n**Graph:** Curves upward steeply\n**Real-World:** Population, compound interest' },
              { label: 'Decay ($0 < b < 1$)', content: '**Direction:** Decreases as $x$ increases\n**Factor:** $0 < b < 1$ (e.g., $0.85$ for 15% decay)\n**Graph:** Curves downward toward zero\n**Real-World:** Depreciation, radioactive decay' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The value of $a$ is always the **$y$-intercept**: plug in $x = 0$ and get $f(0) = a \\cdot b^0 = a \\cdot 1 = a$. If a question asks "what does $a$ represent?" the answer is the **initial amount**.',
          },
          {
            type: 'table',
            title: 'Factor vs. Rate',
            headers: ['Given Phrase', 'Factor $b$', 'Rate $r$'],
            rows: [
              ['Grows by $8\\%$ per year', '$b = 1.08$', '$r = 0.08$'],
              ['Decays by $15\\%$ per year', '$b = 0.85$', '$r = 0.15$'],
              ['Doubles every period', '$b = 2$', '$r = 1.00$ (100%)'],
              ['Loses half its value', '$b = 0.5$', '$r = 0.50$ (50%)'],
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Function Models..." = Identify $a$ and $b$',
            content: 'Recognition cue: a word problem describing percentage growth or decay over time. First move: identify the initial value ($a$) and compute the multiplier ($b = 1 \\pm r$). Growth uses $1 + r$; decay uses $1 - r$. The exponent is the time variable.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Factor with Rate',
            wrong: '"Grows by $8\\%$ per year" leads student to write $b = 8$ or $b = 0.08$.',
            correction: '$8\\%$ growth means the factor is $1 + 0.08 = 1.08$. The factor $b$ is always close to $1$. If $b > 1$, it is growth; if $0 < b < 1$, it is decay.',
          },
          {
            type: 'trapCard',
            title: 'Using Addition Instead of Multiplication',
            wrong: '"A population grows 10% per year from 1,000." After 2 years: $1{,}000 + 100 + 100 = 1{,}200$.',
            correction: 'Exponential growth compounds: $1{,}000 \\times 1.10^2 = 1{,}210$. The extra $\\$10$ comes from 10% growth on year 1\'s gain.',
          },
          {
            type: 'tip',
            content: 'To extract the rate from a given equation: $b = 1.08$ means growth rate is $|b - 1| = 0.08 = 8\\%$. $b = 0.75$ means decay rate is $|1 - b| = 0.25 = 25\\%$. The phrasing is "by what percent does the value change each year?"',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Building an Exponential Model from a Word Problem',
            items: [
              'Identify the **initial value** $a$ (the amount at time $x = 0$)',
              'Identify the **rate** $r$ (the percent change per period, as a decimal)',
              'Determine growth or decay: growth -> $b = 1 + r$; decay -> $b = 1 - r$',
              'Write the model: $f(x) = a \\cdot b^x$',
              'If the period of change differs from the $x$-unit, adjust the exponent: e.g., doubles every 3 hours -> $f(t) = a \\cdot 2^{t/3}$',
            ],
          },
          {
            type: 'steps',
            title: 'Extracting Rate from a Given Equation',
            items: [
              'Identify $b$ (the base raised to the variable power)',
              'If $b > 1$: growth rate $= b - 1$, convert to percent',
              'If $0 < b < 1$: decay rate $= 1 - b$, convert to percent',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Addition Instead of Multiplication',
            wrong: 'A population grows 10% per year from 1,000: "After 2 years: $1{,}000 + 100 + 100 = 1{,}200$."',
            correction: 'Exponential growth compounds: $1{,}000 \\times 1.10^2 = 1{,}210$. The extra $\\$10$ comes from 10% growth on year 1\'s $\\$100$ gain.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Base ($b$) with the Rate ($r$)',
            wrong: '"The function $f(x) = 500(1.08)^x$ grows by $1.08\\%$ per unit."',
            correction: 'The growth **factor** is $1.08$, which means the growth **rate** is ${0.08} = 8\\%$. The rate is $b - 1$, not $b$ itself.',
          },
          {
            type: 'trapCard',
            title: 'Misidentifying the Initial Value',
            wrong: '$f(x) = 200 \\cdot 3^x$ has initial value $200 \\cdot 3 = 600$.',
            correction: 'The initial value is $f(0) = 200 \\cdot 3^0 = 200 \\cdot 1 = 200$. Plug in $x = 0$ — the $b^x$ term becomes $1$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A colony of bacteria doubles every 3 hours. At $t = 0$ there are 500 bacteria. How many bacteria are there after 12 hours?',
            steps: [
              { label: 'Identify model', content: '$f(t) = 500 \\cdot 2^{t/3}$ (doubles every 3 hours)' },
              { label: 'Plug in $t = 12$', content: '$f(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4$' },
              { label: 'Compute', content: '$f(12) = 500 \\cdot 16 = 8{,}000$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A radioactive substance has a half-life of 5 years. A sample currently has 200 grams. After how many years will less than 25 grams remain?',
            steps: [
              { label: 'Set up inequality', content: '$200 \\cdot \\left(\\frac{1}{2}\\right)^{t/5} < 25$' },
              { label: 'Divide by 200', content: '$\\left(\\frac{1}{2}\\right)^{t/5} < \\frac{1}{8}$' },
              { label: 'Rewrite $\\frac{1}{8}$', content: '$\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$' },
              { label: 'Compare exponents', content: '$\\frac{t}{5} > 3 \\Rightarrow t > 15$ years (inequality flips because base is between 0 and 1)' },
            ],
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'exponents',
    title: 'Simple Exponential Function Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Basic exponential function problems ask you to evaluate the function at a given input or identify $a$ and $b$ from a description.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Function',
            content: '$$f(x) = a \\cdot b^x$$',
            note: '$a$ = value at $x = 0$ (initial value), $b$ = multiplier per unit increase in $x$',
          },
          {
            type: 'text',
            content: 'To evaluate, plug in the given $x$ and simplify. To build the function from a description, extract $a$ (initial value) and $b$ (growth/decay factor). A growth rate of $r$ means $b = 1 + r$; a decay rate of $r$ means $b = 1 - r$.',
          },
          {
            type: 'keyInsight',
            content: 'Every time $x$ increases by 1, the output is multiplied by $b$. If a table shows $f(0) = 100$, $f(1) = 150$, $f(2) = 225$, then $b = \\frac{150}{100} = 1.5$ and $a = 100$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Is the Value After $n$ Periods?"',
            content: 'Recognition cue: a function $f(x) = a \\cdot b^x$ or a description involving repeated multiplication. First move: identify $a$ and $b$, then substitute the given $x$-value and compute.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Include the Initial Value',
            wrong: '$f(x) = 500 \\cdot 1.06^x$. For $x = 3$: student computes $1.06^3 = 1.191$ and answers $1.191$.',
            correction: 'Multiply by $a$: $f(3) = 500 \\cdot 1.06^3 = 500 \\cdot 1.191 = 595.5$. The initial value $a$ is part of the function.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating an Exponential Function',
            items: [
              'Identify $a$ and $b$ from the equation or context',
              'Substitute the given value of $x$ into $f(x) = a \\cdot b^x$',
              'Compute $b^x$ first, then multiply by $a$',
              'Round only if the problem specifies',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A car is purchased for $\\$25{,}000$ and loses $12\\%$ of its value each year. What is the car worth after 5 years?',
            steps: [
              { label: 'Identify $a$ and $b$', content: '$a = 25{,}000$, $b = 1 - 0.12 = 0.88$' },
              { label: 'Set up', content: '$f(5) = 25{,}000 \\cdot 0.88^5$' },
              { label: 'Compute', content: '$0.88^5 \\approx 0.5277$, so $f(5) \\approx 25{,}000 \\times 0.5277 \\approx 13{,}193$' },
              { label: 'Answer', content: 'Approximately $\\$13{,}193$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A savings account starts with $\\$1{,}000$ and earns $5\\%$ interest per year. Write the function and find the balance after 3 years.',
            answer: '$f(t) = 1{,}000 \\cdot 1.05^t$. After 3 years: $f(3) = 1{,}000 \\cdot 1.05^3 = 1{,}000 \\cdot 1.157625 = \\$1{,}157.63$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'exponents',
    title: 'Interpreting Exponential Functions Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Interpretation questions ask what the constants in $f(x) = a \\cdot b^x$ mean in context.',
        blocks: [
          {
            type: 'text',
            content: 'Given an equation like $P(t) = 2{,}400 \\cdot (1.03)^t$, the SAT asks: "What does $2{,}400$ represent? What does $1.03$ represent?" The answers always map to the same roles: $a$ is the **initial value** and $b$ encodes the **rate of change**.',
          },
          {
            type: 'table',
            title: 'Interpreting the Constants',
            headers: ['Constant', 'Role', 'How to State It in Context'],
            rows: [
              ['$a$', 'Initial value', 'The value of the quantity when the independent variable is $0$'],
              ['$b$', 'Growth/decay factor', 'The multiplier applied each period'],
              ['$b - 1$ (if $b > 1$)', 'Growth rate', 'The percent increase per period'],
              ['$1 - b$ (if $0 < b < 1$)', 'Decay rate', 'The percent decrease per period'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The exponent\'s coefficient matters too. In $f(t) = 500 \\cdot 2^{t/3}$, the $\\frac{1}{3}$ means the doubling happens every **3** units of $t$, not every 1 unit. Always read the exponent structure to determine the period of change.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"What Does the Number Represent?"',
            content: 'Recognition cue: an exponential equation modeling a real-world scenario, followed by "what does [constant] represent in context?" First move: determine whether the constant is $a$ (initial value), $b$ (growth/decay factor), or derived from $b$ (the rate). State the meaning using the units from the problem.',
          },
          {
            type: 'trapCard',
            title: 'Stating Factor Instead of Rate',
            wrong: '"$P(t) = 5{,}000(1.07)^t$ models a population. The population grows by $1.07$ each year."',
            correction: 'The population is **multiplied** by $1.07$ each year, meaning it grows by $7\\%$ (not $1.07\\%$, not $107\\%$). Rate $= b - 1 = 0.07 = 7\\%$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Interpreting an Exponential Model',
            items: [
              'Identify $a$: the coefficient in front of the exponential term. State: "The initial [quantity] is $a$ [units]."',
              'Identify $b$: the base of the exponential. If $b > 1$, state: "The [quantity] increases by $(b-1) \\times 100\\%$ per [period]." If $0 < b < 1$, state: "The [quantity] decreases by $(1-b) \\times 100\\%$ per [period]."',
              'Check the exponent: if it is $t/k$ instead of $t$, the change happens every $k$ periods, not every single period',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The function $V(t) = 18{,}000 \\cdot (0.82)^t$ models the value, in dollars, of a car $t$ years after purchase. (a) What was the purchase price? (b) By what percent does the value decrease each year?',
            steps: [
              { label: 'Purchase price', content: '$V(0) = 18{,}000 \\cdot (0.82)^0 = 18{,}000$. The purchase price was $\\$18{,}000$.' },
              { label: 'Decay rate', content: '$1 - b = 1 - 0.82 = 0.18 = 18\\%$' },
              { label: 'Answer', content: '(a) $\\$18{,}000$ (b) The car loses $18\\%$ of its value each year.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'The number of subscribers to a streaming service is modeled by $S(t) = 50{,}000 \\cdot (1.12)^t$, where $t$ is the number of months. What does $1.12$ tell you?',
            answer: 'The base $b = 1.12$ means the subscriber count is multiplied by $1.12$ each month, corresponding to a $12\\%$ monthly increase.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'exponents',
    title: 'Complex Exponential Function Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Advanced exponential function problems involve finding an unknown constant, converting between equivalent forms, or handling non-standard periods.',
        blocks: [
          {
            type: 'text',
            content: 'The SAT tests harder exponential function skills: working backward from two data points to find $a$ and $b$, rewriting $f(x) = a \\cdot b^{x/k}$ in equivalent forms, and connecting exponential and percent-change models. These problems combine algebraic manipulation with conceptual understanding.',
          },
          {
            type: 'formula',
            label: 'Equivalent Forms',
            content: '$$a \\cdot b^{x/k} = a \\cdot \\left(b^{1/k}\\right)^x$$',
            note: 'Rewriting shifts the period: doubling every 3 years ($2^{t/3}$) is the same as multiplying by $2^{1/3} \\approx 1.26$ every year.',
          },
          {
            type: 'keyInsight',
            content: 'To find $b$ from two data points $(x_1, y_1)$ and $(x_2, y_2)$: divide $\\frac{y_2}{y_1} = b^{x_2 - x_1}$, then take the appropriate root. To find $a$: plug $b$ and either point back into $y = a \\cdot b^x$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Finding the Model from Data Points',
            content: 'Recognition cue: two data points and a request to find the exponential function or predict a future value. First move: set up $\\frac{y_2}{y_1} = b^{x_2 - x_1}$ to find $b$, then solve for $a$ using one of the points.',
          },
          {
            type: 'trapCard',
            title: 'Mismatching the Exponent Period',
            wrong: '"Doubles every 3 years" with $t$ in years. Student writes $f(t) = a \\cdot 2^{3t}$.',
            correction: 'If the quantity doubles every 3 years, the exponent is $t/3$, not $3t$. $f(t) = a \\cdot 2^{t/3}$. At $t = 3$: $2^{3/3} = 2^1 = 2$ (doubled). At $t = 3$ with the wrong formula: $2^{9}$ = 512 (far too much).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding $a$ and $b$ from Two Data Points',
            items: [
              'Write two equations: $y_1 = a \\cdot b^{x_1}$ and $y_2 = a \\cdot b^{x_2}$',
              'Divide: $\\frac{y_2}{y_1} = b^{x_2 - x_1}$',
              'Solve for $b$: $b = \\left(\\frac{y_2}{y_1}\\right)^{1/(x_2 - x_1)}$',
              'Substitute $b$ and one data point into $y = a \\cdot b^x$ to find $a$',
            ],
          },
          {
            type: 'steps',
            title: 'Rewriting the Period',
            items: [
              'Start with $f(x) = a \\cdot b^{x/k}$ (change happens every $k$ periods)',
              'Rewrite: $b^{x/k} = \\left(b^{1/k}\\right)^x$',
              'The new base $b^{1/k}$ gives the per-single-period multiplier',
              'Compute the per-period rate: $r = b^{1/k} - 1$',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A population is $800$ at $t = 0$ and $3{,}200$ at $t = 6$. Assuming exponential growth, find the annual growth factor and the population at $t = 10$.',
            steps: [
              { label: 'Set up ratio', content: '$\\frac{3{,}200}{800} = b^{6-0} \\Rightarrow 4 = b^6$' },
              { label: 'Solve for $b$', content: '$b = 4^{1/6} = (2^2)^{1/6} = 2^{1/3} \\approx 1.26$' },
              { label: 'Interpret', content: 'The population grows by approximately $26\\%$ per year' },
              { label: 'Predict $t = 10$', content: '$f(10) = 800 \\cdot (2^{1/3})^{10} = 800 \\cdot 2^{10/3} \\approx 800 \\cdot 10.08 \\approx 8{,}063$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'A medication has $400$ mg in the bloodstream at $t = 0$ and $100$ mg at $t = 4$ hours. Write the exponential decay function.',
            answer: '$\\frac{100}{400} = b^4 \\Rightarrow b^4 = \\frac{1}{4} \\Rightarrow b = \\left(\\frac{1}{4}\\right)^{1/4} = \\frac{1}{\\sqrt{2}} \\approx 0.707$. The function is $f(t) = 400 \\cdot \\left(\\frac{1}{\\sqrt{2}}\\right)^t$, or equivalently $f(t) = 400 \\cdot 2^{-t/2}$.',
          },
        ],
      },
    },
  },

};
