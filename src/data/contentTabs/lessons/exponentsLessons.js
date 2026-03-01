export const exponentsLessonTabs = {
  1: {
    moduleId: 'exponents',
    title: 'Laws of Exponents',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Exponent laws transform complex expressions into single powers — product, quotient, and power rules handle most Digital SAT exponent problems.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Product Rule',
                formula: '$a^m \\cdot a^n = a^{m+n}$',
                note: 'Same base, multiply → add exponents',
              },
              {
                label: 'Quotient Rule',
                formula: '$\\dfrac{a^m}{a^n} = a^{m-n}$',
                note: 'Same base, divide → subtract exponents',
              },
              {
                label: 'Power Rule',
                formula: '$(a^m)^n = a^{mn}$',
                note: 'Power of a power → multiply exponents',
              },
              {
                label: 'Zero Exponent',
                formula: '$a^0 = 1$',
                note: 'Any nonzero base to the zero power equals $1$',
              },
              {
                label: 'Negative Exponent',
                formula: '$a^{-n} = \\dfrac{1}{a^n}$',
                note: 'Negative exponent → reciprocal',
              },
              {
                label: 'Power of a Product',
                formula: '$(ab)^n = a^n b^n$',
                note: 'Distribute the exponent over multiplication',
              },
            ],
          },
          {
            type: 'formula',
            label: 'Fractional Exponents',
            content: '$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$',
          },
          {
            type: 'text',
            content: 'An **exponent** tells you how many times a base is multiplied by itself: $a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ times}}$. Six rules let you simplify without expanding every factor.',
          },
          {
            type: 'keyInsight',
            content: 'The product and quotient rules require **identical bases**. $x^3 \\cdot x^5 = x^8$ works because both bases are $x$. The expression $x^3 \\cdot y^5$ cannot be combined — different bases stay separate.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Exponents Instead of Adding',
            wrong: '$x^3 \\cdot x^4 = x^{12}$ — student multiplied $3 \\times 4$ instead of adding.',
            correction: 'Same-base multiplication means **add** exponents: $x^{3+4} = x^7$. Multiplying exponents is the power rule: $(x^3)^4 = x^{12}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Simplify: $\\dfrac{(2x^3)^2 \\cdot x^{-1}}{4x^2}$',
            steps: [
              {
                label: 'Expand the numerator',
                content: '$(2x^3)^2 = 4x^6$, so the numerator is $4x^6 \\cdot x^{-1} = 4x^{5}$',
              },
              {
                label: 'Divide',
                content: '$\\dfrac{4x^5}{4x^2} = x^{5-2} = x^3$',
              },
              {
                label: 'Answer',
                content: '$x^3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Simplify $\\dfrac{(3x^2)^3}{9x^4}$.',
            answer: '$(3x^2)^3 = 27x^6$. Then $\\dfrac{27x^6}{9x^4} = 3x^{6-4} = 3x^2$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'exponents',
    title: 'Simple Laws of Exponents (Product Rule) Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The product rule consolidates same-base multiplication into a single power by adding exponents.',
        blocks: [
          {
            type: 'formula',
            label: 'Product Rule',
            content: '$$a^m \\cdot a^n = a^{m+n}$$',
          },
          {
            type: 'text',
            content: 'Multiplying $a^m \\cdot a^n$ means writing $m$ copies of $a$ followed by $n$ copies — a total of $m + n$ copies. The rule extends to any number of factors: $a^2 \\cdot a^5 \\cdot a^3 = a^{2+5+3} = a^{10}$.',
          },
          {
            type: 'keyInsight',
            content: 'Coefficients multiply normally while exponents add: $3x^4 \\cdot 5x^2 = 15x^6$. Treat the numeric part and the variable part separately.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Instead of Adding Exponents',
            wrong: '$x^4 \\cdot x^5 = x^{20}$ — student computed $4 \\times 5$ for the new exponent.',
            correction: 'Product rule: **add** exponents. $x^{4+5} = x^9$. Multiplying exponents applies only to the power rule: $(x^4)^5 = x^{20}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$x^4 \\cdot x^5 = x^{20}$ — student computed $4 \\times 5$ for the new exponent.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Product rule: **add** exponents. $x^{4+5} = x^9$. Multiplying exponents applies only to the power rule: $(x^4)^5 = x^{20}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $x^{a+2} \\cdot x^{3a} = x^{14}$, what is the value of $a$?',
            answer: 'Product rule: $x^{(a+2)+3a} = x^{4a+2} = x^{14}$. Set exponents equal: $4a + 2 = 14 \\Rightarrow a = 3$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'exponents',
    title: 'Simple Laws of Exponents (Quotient Rule) Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The quotient rule simplifies same-base division by subtracting the denominator exponent from the numerator exponent.',
        blocks: [
          {
            type: 'formula',
            label: 'Quotient Rule',
            content: '$$\\frac{a^m}{a^n} = a^{m-n}$$',
          },
          {
            type: 'text',
            content: 'Dividing same-base powers cancels common factors. Of $m$ copies in the numerator and $n$ in the denominator, $n$ cancel, leaving $m - n$ copies. If $m < n$, the result is a negative exponent: $a^{m-n} = \\dfrac{1}{a^{n-m}}$.',
          },
          {
            type: 'keyInsight',
            content: 'The zero-exponent rule is a special case of the quotient rule: $\\dfrac{a^n}{a^n} = a^{n-n} = a^0 = 1$.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting in the Wrong Direction',
            wrong: '$\\dfrac{x^3}{x^7} = x^4$ — student computed $7 - 3$ instead of $3 - 7$.',
            correction: 'Top minus bottom: $x^{3-7} = x^{-4} = \\dfrac{1}{x^4}$. The numerator exponent always comes first in the subtraction.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\dfrac{x^3}{x^7} = x^4$ — student computed $7 - 3$ instead of $3 - 7$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Top minus bottom: $x^{3-7} = x^{-4} = \\dfrac{1}{x^4}$. The numerator exponent always comes first in the subtraction.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Simplify $\\dfrac{12x^8}{4x^{11}}$.',
            answer: 'Divide coefficients: $\\dfrac{12}{4} = 3$. Subtract exponents: $x^{8-11} = x^{-3} = \\dfrac{1}{x^3}$. Result: $\\dfrac{3}{x^3}$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'exponents',
    title: 'Fractional Exponents Simple Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A fractional exponent packs a root and a power into one notation: denominator = root index, numerator = power.',
        blocks: [
          {
            type: 'formula',
            label: 'Fractional Exponent Rule',
            content: '$$a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$',
          },
          {
            type: 'text',
            content: 'The denominator $n$ of the fraction tells you which root to take; the numerator $m$ tells you which power to raise to. Either order works — root first then power, or power first then root — but taking the root first keeps numbers small. Example: $27^{2/3} = (\\sqrt[3]{27})^2 = 3^2 = 9$.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Numerator and Denominator Roles',
            wrong: '$8^{2/3}$: student takes $\\sqrt{8}$ (square root) then cubes the result.',
            correction: 'Denominator $3$ = root index, numerator $2$ = power. Correct: $\\sqrt[3]{8} = 2$, then $2^2 = 4$. The root index is always the bottom of the fraction.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$8^{2/3}$: student takes $\\sqrt{8}$ (square root) then cubes the result.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Denominator $3$ = root index, numerator $2$ = power. Correct: $\\sqrt[3]{8} = 2$, then $2^2 = 4$. The root index is always the bottom of the fraction.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Evaluate $32^{3/5}$.',
            answer: '$\\sqrt[5]{32} = 2$, then $2^3 = 8$. So $32^{3/5} = 8$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'exponents',
    title: 'Fractional Exponents Complex Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Multi-step fractional exponent problems require converting radicals, multiplying or adding fractional exponents, and careful fraction arithmetic.',
        blocks: [
          {
            type: 'formula',
            label: 'Power Rule with Fractions',
            content: '$$\\left(a^{m/n}\\right)^p = a^{mp/n}$$',
          },
          {
            type: 'text',
            content: 'When fractional exponents appear in products, quotients, or nested powers, convert every radical to exponent form first, then apply the standard rules. The power rule still works: $(a^{m/n})^p = a^{mp/n}$. The product rule still works: $a^{m/n} \\cdot a^{p/q} = a^{m/n + p/q}$. The hardest part is the fraction arithmetic.',
          },
          {
            type: 'keyInsight',
            content: 'Negative fractional exponents combine both ideas: $a^{-m/n} = \\dfrac{1}{a^{m/n}} = \\dfrac{1}{\\sqrt[n]{a^m}}$. Flip to the reciprocal (negative exponent), then apply root and power (fractional part).',
          },
          {
            type: 'trapCard',
            title: 'Adding Fractions Incorrectly',
            wrong: '$x^{2/3} \\cdot x^{1/2} = x^{3/5}$ — student added numerators and denominators separately.',
            correction: 'Fraction addition requires a common denominator: $\\dfrac{2}{3} + \\dfrac{1}{2} = \\dfrac{4}{6} + \\dfrac{3}{6} = \\dfrac{7}{6}$. Result: $x^{7/6}$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$x^{2/3} \\cdot x^{1/2} = x^{3/5}$ — student added numerators and denominators separately.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Fraction addition requires a common denominator: $\\dfrac{2}{3} + \\dfrac{1}{2} = \\dfrac{4}{6} + \\dfrac{3}{6} = \\dfrac{7}{6}$. Result: $x^{7/6}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Simplify $\\dfrac{x^{3/4} \\cdot x^{1/2}}{x^{1/4}}$.',
            answer: 'Numerator: $x^{3/4 + 2/4} = x^{5/4}$. Quotient rule: $x^{5/4 - 1/4} = x^{4/4} = x$.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'exponents',
    title: 'Comparing Exponential Expressions',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Rewrite exponential expressions with a common base, then compare exponents directly — larger exponent wins when the base exceeds 1.',
        blocks: [
          {
            type: 'text',
            content: 'Computing $8^4$ and $4^6$ directly produces unwieldy numbers. A better strategy: rewrite both with the **same base**. Since $8 = 2^3$ and $4 = 2^2$, the expressions become $2^{12}$ and $2^{12}$ — equal. Once two expressions share a base, a simple exponent comparison settles which is larger.',
          },
          {
            type: 'keyInsight',
            content: 'For base $> 1$: larger exponent = larger value ($2^5 > 2^3$). For base between $0$ and $1$: the relationship **reverses** — larger exponent = smaller value. $(\\frac{1}{2})^5 < (\\frac{1}{2})^3$ because repeated multiplication by a fraction shrinks the result further.',
          },
          {
            type: 'table',
            title: 'Common Base Conversions',
            headers: [
              'Number',
              'As Power of 2',
              'As Power of 3',
            ],
            rows: [
              [
                '$4$',
                '$2^2$',
                '---',
              ],
              [
                '$8$',
                '$2^3$',
                '---',
              ],
              [
                '$16$',
                '$2^4$',
                '---',
              ],
              [
                '$32$',
                '$2^5$',
                '---',
              ],
              [
                '$9$',
                '---',
                '$3^2$',
              ],
              [
                '$27$',
                '---',
                '$3^3$',
              ],
              [
                '$81$',
                '---',
                '$3^4$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Comparing Exponents on Different Bases',
            wrong: '$4^5$ vs. $8^3$: student says $4^5$ is larger because $5 > 3$, without rewriting bases.',
            correction: 'Exponent comparison only works on the **same** base. Rewrite: $4^5 = 2^{10}$ and $8^3 = 2^9$. Now $10 > 9$ confirms $4^5 > 8^3$, but the reasoning required a common base first.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $2^{3x} = 16^2$, what is the value of $x$?',
            steps: [
              {
                label: 'Rewrite 16',
                content: '$16 = 2^4$, so $16^2 = (2^4)^2 = 2^8$',
              },
              {
                label: 'Match exponents',
                content: '$2^{3x} = 2^8 \\Rightarrow 3x = 8$',
              },
              {
                label: 'Solve',
                content: '$x = \\dfrac{8}{3}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Which is greater: $4^8$ or $32^3$? Justify using a common base.',
            answer: '$4^8 = (2^2)^8 = 2^{16}$ and $32^3 = (2^5)^3 = 2^{15}$. Since $16 > 15$, $4^8 > 32^3$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'exponents',
    title: 'Simple Exponential Expression Comparison Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Basic comparison problems give two expressions whose bases are both small prime powers — rewrite and compare.',
        blocks: [
          {
            type: 'formula',
            label: 'Same-Base Comparison',
            content: '$$\\text{If } a > 1, \\text{ then } a^p > a^q \\iff p > q$$',
          },
          {
            type: 'text',
            content: 'In a straightforward comparison, both bases are powers of the same prime (usually $2$ or $3$). Rewrite each, apply the power rule to condense into a single exponent on the common base, and compare.',
          },
          {
            type: 'keyInsight',
            content: 'Memorize powers of small primes — $2^1$ through $2^{10}$ and $3^1$ through $3^5$. These values recycle across nearly every exponent comparison problem on the Digital SAT.',
          },
          {
            type: 'trapCard',
            title: 'Skipping the Common-Base Step',
            wrong: '$4^6$ vs. $8^4$: student says $4^6$ is larger because $6 > 4$ and $4$ is close to $8$.',
            correction: 'Rewrite in base 2: $4^6 = 2^{12}$ and $8^4 = 2^{12}$. They are **equal**. Exponents can only be compared directly when the bases match.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$4^6$ vs. $8^4$: student says $4^6$ is larger because $6 > 4$ and $4$ is close to $8$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Rewrite in base 2: $4^6 = 2^{12}$ and $8^4 = 2^{12}$. They are **equal**. Exponents can only be compared directly when the bases match.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
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
      learn: {
        title: 'Learn',
        summary: 'Advanced comparison problems introduce variables in exponents or fractional bases, requiring algebraic equations after matching bases.',
        blocks: [
          {
            type: 'formula',
            label: 'Equating Exponents',
            content: '$$a^{f(x)} = a^{g(x)} \\;\\Longrightarrow\\; f(x) = g(x) \\quad (a > 0,\\; a \\neq 1)$$',
          },
          {
            type: 'text',
            content: 'When a comparison involves variables, rewrite both sides with a common base and set the exponents equal to form an equation. When fractional bases appear, the ordering rule reverses: for $0 < b < 1$, a larger exponent yields a **smaller** value.',
          },
          {
            type: 'keyInsight',
            content: 'Reciprocal bases are handled the same way: $\\dfrac{1}{8} = 2^{-3}$. Rewrite as a power of $2$ with a negative exponent, then apply the power rule normally.',
          },
          {
            type: 'trapCard',
            title: 'Reversing the Inequality for Fractional Bases',
            wrong: '$(\\frac{1}{2})^x > (\\frac{1}{2})^4$ — student concludes $x > 4$ by comparing exponents directly.',
            correction: 'For a base between $0$ and $1$, larger exponents give smaller values. The correct conclusion is $x < 4$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$(\\frac{1}{2})^x > (\\frac{1}{2})^4$ — student concludes $x > 4$ by comparing exponents directly.',
            steps: [
              {
                label: 'Correct approach',
                content: 'For a base between $0$ and $1$, larger exponents give smaller values. The correct conclusion is $x < 4$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $\\left(\\frac{1}{8}\\right)^{x-1} = 16^x$, find $x$.',
            answer: '$\\frac{1}{8} = 2^{-3}$ and $16 = 2^4$. Power rule: $2^{-3(x-1)} = 2^{4x}$. Expand: $-3x + 3 = 4x \\Rightarrow 7x = 3 \\Rightarrow x = \\frac{3}{7}$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'exponents',
    title: 'Exponential Functions',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'An exponential function places the variable in the exponent — the output changes by a constant percentage each period.',
        blocks: [
          {
            type: 'formula',
            label: 'Standard Form',
            content: '$$f(x) = a \\cdot b^x$$',
          },
          {
            type: 'text',
            content: 'Unlike linear functions (constant additive change), exponential functions have **constant multiplicative change**. Each time $x$ increases by $1$, the output is multiplied by $b$. The constant $a$ is the **initial value** — the output when $x = 0$ — and $b$ is the **growth/decay factor**.',
          },
          {
            type: 'keyInsight',
            content: '$a$ is always the $y$-intercept: $f(0) = a \\cdot b^0 = a$. If $b > 1$, the function models **growth**. If $0 < b < 1$, the function models **decay**. The rate of change is $|b - 1|$ expressed as a percent.',
          },
          {
            type: 'table',
            title: 'Growth Factor vs. Rate',
            headers: [
              'Description',
              'Factor $b$',
              'Rate $r$',
            ],
            rows: [
              [
                'Grows by $8\\%$ per year',
                '$b = 1.08$',
                '$r = 0.08$',
              ],
              [
                'Decays by $15\\%$ per year',
                '$b = 0.85$',
                '$r = 0.15$',
              ],
              [
                'Doubles every period',
                '$b = 2$',
                '$r = 1.00$',
              ],
              [
                'Loses half its value',
                '$b = 0.5$',
                '$r = 0.50$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing the Factor with the Rate',
            wrong: '"Grows by $8\\%$ per year" — student writes $b = 0.08$ or $b = 8$ in the model.',
            correction: '$8\\%$ growth means the factor is $1 + 0.08 = 1.08$. The factor $b$ is always near $1$: slightly above for growth, slightly below for decay.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A colony of bacteria doubles every 3 hours. At $t = 0$ there are 500 bacteria. How many are there after 12 hours?',
            steps: [
              {
                label: 'Build the model',
                content: '$f(t) = 500 \\cdot 2^{t/3}$ (doubles every 3 hours)',
              },
              {
                label: 'Substitute $t = 12$',
                content: '$f(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4$',
              },
              {
                label: 'Compute',
                content: '$f(12) = 500 \\cdot 16 = 8{,}000$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A car purchased for $\\$25{,}000$ loses $12\\%$ of its value each year. Write the exponential model and find the value after 5 years.',
            answer: '$f(t) = 25{,}000 \\cdot 0.88^t$. After 5 years: $f(5) = 25{,}000 \\cdot 0.88^5 \\approx 25{,}000 \\times 0.5277 \\approx \\$13{,}193$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'exponents',
    title: 'Simple Exponential Function Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Basic exponential function problems ask you to evaluate $f(x) = a \\cdot b^x$ at a given input or build the function from a description.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Function',
            content: '$$f(x) = a \\cdot b^x$$',
          },
          {
            type: 'text',
            content: 'To evaluate: substitute the given $x$ and simplify. To build: extract $a$ (initial value at $x = 0$) and $b$ (growth factor $1 + r$ or decay factor $1 - r$). A table of values reveals $b$ as the ratio of consecutive outputs: $b = \\dfrac{f(x+1)}{f(x)}$.',
          },
          {
            type: 'keyInsight',
            content: 'Every time $x$ increases by $1$, the output is multiplied by $b$. If a table shows $f(0) = 100$, $f(1) = 150$, $f(2) = 225$, then $b = \\frac{150}{100} = 1.5$ and $a = 100$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Multiply by the Initial Value',
            wrong: '$f(x) = 500 \\cdot 1.06^x$. At $x = 3$: student computes $1.06^3 \\approx 1.191$ and answers $1.191$.',
            correction: 'The initial value is part of the function: $f(3) = 500 \\cdot 1.06^3 \\approx 500 \\times 1.191 = 595.5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$f(x) = 500 \\cdot 1.06^x$. At $x = 3$: student computes $1.06^3 \\approx 1.191$ and answers $1.191$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The initial value is part of the function: $f(3) = 500 \\cdot 1.06^3 \\approx 500 \\times 1.191 = 595.5$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A savings account starts at $\\$1{,}000$ with $5\\%$ annual interest. Write the function and find the balance after 3 years.',
            answer: '$f(t) = 1{,}000 \\cdot 1.05^t$. After 3 years: $f(3) = 1{,}000 \\cdot 1.05^3 \\approx \\$1{,}157.63$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'exponents',
    title: 'Interpreting Exponential Functions Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Interpretation questions ask what the constants in $f(x) = a \\cdot b^x$ mean in real-world context.',
        blocks: [
          {
            type: 'text',
            content: 'Given $P(t) = 2{,}400 \\cdot (1.03)^t$, a typical question asks: "What does $2{,}400$ represent? What does $1.03$ represent?" Each constant maps to a specific role: $a$ = **initial value**, $b$ = **factor per period**, and $b - 1$ or $1 - b$ = **rate of change**.',
          },
          {
            type: 'keyInsight',
            content: 'The exponent structure determines the period of change. In $f(t) = 500 \\cdot 2^{t/3}$, the $\\frac{1}{3}$ means doubling happens every **3** units of $t$, not every single unit.',
          },
          {
            type: 'table',
            title: 'Interpreting the Constants',
            headers: [
              'Constant',
              'Role',
              'How to State in Context',
            ],
            rows: [
              [
                '$a$',
                'Initial value',
                'The quantity when $x = 0$',
              ],
              [
                '$b$ (if $b > 1$)',
                'Growth factor',
                'Multiplied by $b$ each period',
              ],
              [
                '$b - 1$ (if $b > 1$)',
                'Growth rate',
                'Increases by $(b-1) \\times 100\\%$ per period',
              ],
              [
                '$1 - b$ (if $0 < b < 1$)',
                'Decay rate',
                'Decreases by $(1-b) \\times 100\\%$ per period',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Reporting the Factor as the Rate',
            wrong: '"$P(t) = 5{,}000(1.07)^t$" — student says the population grows by $1.07\\%$ each year.',
            correction: 'The factor is $1.07$, so the growth **rate** is $1.07 - 1 = 0.07 = 7\\%$. The population grows by $7\\%$ per year, not $1.07\\%$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"$P(t) = 5{,}000(1.07)^t$" — student says the population grows by $1.07\\%$ each year.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The factor is $1.07$, so the growth **rate** is $1.07 - 1 = 0.07 = 7\\%$. The population grows by $7\\%$ per year, not $1.07\\%$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The value of a car is modeled by $V(t) = 18{,}000 \\cdot (0.82)^t$, where $t$ is years after purchase. What was the purchase price, and by what percent does the value decrease each year?',
            answer: 'Purchase price: $V(0) = 18{,}000$. Decay rate: $1 - 0.82 = 0.18 = 18\\%$ decrease per year.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'exponents',
    title: 'Complex Exponential Function Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Advanced problems require building the model from data points, converting between equivalent period forms, or handling non-standard exponents.',
        blocks: [
          {
            type: 'formula',
            label: 'Equivalent Period Form',
            content: '$$a \\cdot b^{x/k} = a \\cdot \\left(b^{1/k}\\right)^x$$',
          },
          {
            type: 'text',
            content: 'Higher-difficulty exponential problems involve working backward from two data points to find $a$ and $b$, or rewriting $f(x) = a \\cdot b^{x/k}$ to express the per-unit multiplier. These problems combine algebraic manipulation with conceptual understanding of exponential behavior.',
          },
          {
            type: 'keyInsight',
            content: 'To find $b$ from two data points $(x_1, y_1)$ and $(x_2, y_2)$: divide $\\dfrac{y_2}{y_1} = b^{x_2 - x_1}$, then take the appropriate root. To find $a$: substitute $b$ and either point back into $y = a \\cdot b^x$.',
          },
          {
            type: 'trapCard',
            title: 'Misplacing the Period in the Exponent',
            wrong: '"Doubles every 3 years" with $t$ in years — student writes $f(t) = a \\cdot 2^{3t}$.',
            correction: 'The exponent is $t/3$, not $3t$. Check: at $t = 3$, $2^{3/3} = 2$ (doubled). With $3t$: at $t = 3$, $2^{9} = 512$ — far too large.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '"Doubles every 3 years" with $t$ in years — student writes $f(t) = a \\cdot 2^{3t}$.',
            steps: [
              {
                label: 'Correct approach',
                content: 'The exponent is $t/3$, not $3t$. Check: at $t = 3$, $2^{3/3} = 2$ (doubled). With $3t$: at $t = 3$, $2^{9} = 512$ — far too large.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A population is $800$ at $t = 0$ and $3{,}200$ at $t = 6$. Find the annual growth factor $b$.',
            answer: '$\\frac{3{,}200}{800} = b^6 \\Rightarrow 4 = b^6 \\Rightarrow b = 4^{1/6} = (2^2)^{1/6} = 2^{1/3} \\approx 1.26$. The population grows by approximately $26\\%$ per year.',
          },
        ],
      },
    },
  },
};
