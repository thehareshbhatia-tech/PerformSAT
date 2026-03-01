export const equivalentExpressionsLessonTabs = {
  1: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Two expressions are equivalent when they yield the same value for every possible input.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Distribute',
                formula: '$a(b + c) = ab + ac$',
                note: 'Expand parentheses by multiplying each term inside',
              },
              {
                label: 'Factor (GCF)',
                formula: '$ab + ac = a(b + c)$',
                note: 'Extract the greatest common factor',
              },
              {
                label: 'FOIL',
                formula: '$(a+b)(c+d) = ac + ad + bc + bd$',
                note: 'Multiply two binomials — four products',
              },
              {
                label: 'Combine Like Terms',
                formula: '$3x^2 + 5x^2 = 8x^2$',
                note: 'Same variable raised to the same power',
              },
              {
                label: 'Difference of Squares',
                formula: '$a^2 - b^2 = (a+b)(a-b)$',
                note: 'Two perfect squares separated by subtraction',
              },
              {
                label: 'Perfect Square Trinomial',
                formula: '$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$',
                note: 'Trinomial that factors into a squared binomial',
              },
            ],
          },
          {
            type: 'text',
            content: 'An **equivalent expression** rewrites a quantity in a different algebraic form without changing its value. $2(x + 3)$ and $2x + 6$ look different, but substituting any number for $x$ produces the same result in both. Three core moves generate equivalent forms: **distributing** (expanding parentheses), **factoring** (extracting common factors or applying special patterns), and **combining like terms** (merging terms with the same variable and exponent).',
          },
          {
            type: 'keyInsight',
            content: 'Scan the **answer choices before working**. If the choices are in expanded form, distribute or FOIL the given expression. If the choices are in factored form, look for a GCF or a special pattern. The answer format dictates the direction of your algebraic move — working in the wrong direction wastes time.',
          },
          {
            type: 'trapCard',
            title: 'Distributing a Negative Sign Incorrectly',
            wrong: '$-(3x - 7) = -3x - 7$. The negative was applied to the first term but not the second, leaving the sign of $7$ unchanged.',
            correction: 'The negative sign flips **every** term inside: $-(3x - 7) = -3x + 7$. Rewrite internally first: $-(3x + (-7)) = -3x + 7$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Which expression is equivalent to $4x^2 - 25$?',
            steps: [
              {
                label: 'Recognize the pattern',
                content: '$4x^2 = (2x)^2$ and $25 = 5^2$ — two perfect squares separated by subtraction.',
              },
              {
                label: 'Apply the identity',
                content: '$a^2 - b^2 = (a+b)(a-b)$ with $a = 2x$ and $b = 5$.',
              },
              {
                label: 'Factor',
                content: '$(2x + 5)(2x - 5)$',
              },
              {
                label: 'Verify',
                content: 'FOIL: $(2x)(2x) + (2x)(-5) + (5)(2x) + (5)(-5) = 4x^2 - 10x + 10x - 25 = 4x^2 - 25$ \\checkmark',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Which expression is equivalent to $(3x + 2)(x - 4) - (x - 4)$?',
            answer: 'The binomial $(x - 4)$ appears in both terms. Factor it out: $(x - 4)[(3x + 2) - 1] = (x - 4)(3x + 1)$. Verify: $3x^2 + x - 12x - 4 = 3x^2 - 11x - 4$ \\checkmark.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Expanding products by distributing coefficients and using FOIL, then verifying with DESMOS.',
        blocks: [
          {
            type: 'text',
            content: 'Many equivalence questions present a product — a coefficient multiplied by a binomial, or two binomials multiplied together — and ask for the expanded form. The process: apply FOIL or distribute to remove all parentheses, combine like terms, and write the result in **standard form** (descending powers of $x$). The built-in DESMOS calculator provides a fast visual check: graph both expressions and confirm the curves overlap.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS is a **confirmation tool**, not a substitute for algebra. Use it to verify your algebraic work or to eliminate wrong choices when time is short. For straightforward products, distributing and combining is faster than graphing.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'DESMOS Equivalence Test',
            content: 'Type $y_1 = \\text{(original expression)}$ and $y_2 = \\text{(candidate answer)}$ on separate lines.\n\n**Same graph** → expressions are equivalent.\n**Any separation** → expressions are not equivalent.\n\nThis works for polynomials, rational expressions, and radicals.',
          },
          {
            type: 'trapCard',
            title: 'Dropping the Middle Terms in FOIL',
            wrong: '$(x + 4)(x - 3) = x^2 - 12$. Only the First and Last products were computed; the Outer and Inner terms were skipped entirely.',
            correction: 'FOIL yields four products: $x^2 - 3x + 4x - 12$. The two middle terms combine: $-3x + 4x = x$. Correct result: $x^2 + x - 12$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$(x + 4)(x - 3) = x^2 - 12$. Only the First and Last products were computed; the Outer and Inner terms were skipped entirely.',
            steps: [
              {
                label: 'Correct approach',
                content: 'FOIL yields four products: $x^2 - 3x + 4x - 12$. The two middle terms combine: $-3x + 4x = x$. Correct result: $x^2 + x - 12$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Which expression is equivalent to $2(x + 3)(x - 1)$?',
            answer: 'FOIL first: $(x+3)(x-1) = x^2 - x + 3x - 3 = x^2 + 2x - 3$. Then distribute the $2$: $2(x^2 + 2x - 3) = 2x^2 + 4x - 6$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Simplifying rational expressions by factoring numerator and denominator and canceling common factors.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'GCF Extraction',
                formula: '$6x^2 + 9x = 3x(2x + 3)$',
                note: 'Pull out the largest factor common to every term',
              },
              {
                label: 'Difference of Squares',
                formula: '$x^2 - 16 = (x + 4)(x - 4)$',
                note: 'Both terms are perfect squares separated by subtraction',
              },
              {
                label: 'Factor-Cancel',
                formula: '$\\frac{(x+2)(x-3)}{x+2} = x - 3$',
                note: 'Cancel the shared factor; restriction: $x \\neq -2$',
              },
            ],
          },
          {
            type: 'text',
            content: 'Some equivalence problems require the reverse direction: instead of expanding, **factor** the numerator and denominator of a fraction and then cancel the shared factor. The simplified expression equals the original everywhere the canceled factor is nonzero. The problem stem typically states this restriction explicitly (e.g., "$x \\neq -3$").',
          },
          {
            type: 'keyInsight',
            content: 'Cancellation applies only to **factors** (connected by multiplication), never to **terms** (connected by addition or subtraction). $\\frac{x + 5}{x}$ cannot be simplified by "crossing out" $x$. Splitting into $\\frac{x}{x} + \\frac{5}{x} = 1 + \\frac{5}{x}$ is valid — direct cancellation of a term is not.',
          },
          {
            type: 'trapCard',
            title: 'Canceling a Term Instead of a Factor',
            wrong: '$\\frac{x^2 + 3x}{x} = x + 3x = 4x$. The $x$ in the denominator was subtracted from one term of the numerator rather than divided from the whole expression.',
            correction: 'Factor the numerator first: $\\frac{x(x + 3)}{x} = x + 3$. Because $x$ is a factor of the entire numerator, it cancels with the denominator cleanly.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: '$\\frac{x^2 + 3x}{x} = x + 3x = 4x$. The $x$ in the denominator was subtracted from one term of the numerator rather than divided from the whole expression.',
            steps: [
              {
                label: 'Correct approach',
                content: 'Factor the numerator first: $\\frac{x(x + 3)}{x} = x + 3$. Because $x$ is a factor of the entire numerator, it cancels with the denominator cleanly.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Simplify $\\frac{x^2 - 9}{x^2 + 5x + 6}$ for $x \\neq -3$.',
            answer: 'Factor numerator: $x^2 - 9 = (x+3)(x-3)$ (difference of squares). Factor denominator: $x^2 + 5x + 6 = (x+2)(x+3)$. Cancel $(x+3)$: $\\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x - 3}{x + 2}$.',
          },
        ],
      },
    },
  },
};
