export const equivalentExpressionsLessonTabs = {

  1: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Two expressions are equivalent when they produce the same value for every possible input. The SAT tests whether you can move fluently between different forms.',
        blocks: [
          {
            type: 'text',
            content: 'An **equivalent expression** is a different way of writing the same quantity. $2(x + 3)$ and $2x + 6$ look different, but they equal each other for every value of $x$. Rewriting expressions is the core skill — you transform one form into another using distribution, factoring, or combining like terms.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Distribute', formula: '$a(b + c) = ab + ac$', note: 'Expand parentheses' },
              { label: 'Factor (GCF)', formula: '$ab + ac = a(b + c)$', note: 'Pull out the common factor' },
              { label: 'FOIL', formula: '$(a+b)(c+d) = ac + ad + bc + bd$', note: 'Multiply two binomials' },
              { label: 'Combine Like Terms', formula: '$3x + 5x = 8x$', note: 'Same variable and exponent' },
              { label: 'Difference of Squares', formula: '$a^2 - b^2 = (a+b)(a-b)$', note: 'High-frequency SAT pattern' },
              { label: 'Perfect Square', formula: '$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$', note: 'Trinomial that factors to a square' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The SAT shows four answer choices and asks "which is equivalent?" Your job is to recognize **which algebraic move** connects the given expression to one of the choices — distributing, factoring, or combining. Scan the answer choices first to determine which direction to go.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Like Terms Rule',
            content: 'Terms can be combined **only** when they share the same variable(s) raised to the same power(s).\n\n$3x^2 + 5x^2 = 8x^2$ (combinable)\n$3x^2 + 5x$ (NOT combinable — different powers)',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Expression Is Equivalent?"',
            content: 'Recognition cue: a given expression and four choices written in different forms. First move: look at the answer choices. If they are expanded, distribute the given expression. If they are factored, look for a GCF or special pattern (difference of squares, perfect-square trinomial). Let the answer format dictate your first algebraic move.',
          },
          {
            type: 'trapCard',
            title: 'Distributing a Negative Incorrectly',
            wrong: '$-(3x - 7) = -3x - 7$. Student negated only the first term.',
            correction: 'The negative sign flips **every** term inside: $-(3x - 7) = -3x + 7$. Subtraction becomes addition when negated.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Which Form Reveals...?"',
            content: 'Recognition cue: a quadratic expression and a question about a specific property (e.g., "zeros," "minimum value"). The SAT gives you four rewritten forms and asks which one reveals the requested information. Match the property to the form: factored reveals zeros, vertex form reveals min/max, standard form reveals the $y$-intercept.',
          },
          {
            type: 'trapCard',
            title: 'Combining Unlike Terms',
            wrong: '$3x^2 + 5x = 8x^3$. Student added coefficients and exponents.',
            correction: '$3x^2$ and $5x$ have **different** exponents — they cannot be combined. The expression $3x^2 + 5x$ is already fully simplified.',
          },
          {
            type: 'tip',
            content: '**Verification shortcut:** Plug $x = 2$ (or any convenient number) into both the given expression and each answer choice. The equivalent one produces the same value. This works every time and takes under 20 seconds.',
          },
          {
            type: 'tip',
            content: '**DESMOS verification:** On the digital SAT, graph $y_1 = \\text{(given expression)}$ and $y_2 = \\text{(answer choice)}$. If the graphs overlap perfectly, the expressions are equivalent. This is a definitive check.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Strategy: Match the Target Form',
            items: [
              'Look at the **answer choices** first — are they factored or expanded?',
              'If answers are expanded: **distribute** the given expression using $a(b+c) = ab + ac$ or FOIL',
              'If answers are factored: look for a **GCF** or special pattern (difference of squares, perfect-square trinomial)',
              'After your move, **combine like terms** and compare to the choices',
              'If stuck, plug in a number to eliminate wrong answers',
            ],
          },
          {
            type: 'steps',
            title: 'Factoring a Trinomial $ax^2 + bx + c$',
            items: [
              'Find two numbers that **multiply** to $a \\cdot c$ and **add** to $b$',
              'If $a = 1$: factor directly as $(x + p)(x + q)$ where $p \\cdot q = c$ and $p + q = b$',
              'If $a \\neq 1$: rewrite the middle term using the two numbers, then factor by grouping',
              'Verify by re-expanding the factored result',
            ],
          },
          {
            type: 'table',
            title: 'Special Products to Recognize',
            headers: ['Pattern', 'Expanded Form', 'Factored Form'],
            rows: [
              ['Difference of Squares', '$a^2 - b^2$', '$(a + b)(a - b)$'],
              ['Perfect Square (sum)', '$a^2 + 2ab + b^2$', '$(a + b)^2$'],
              ['Perfect Square (diff)', '$a^2 - 2ab + b^2$', '$(a - b)^2$'],
              ['Sum of cubes', '$a^3 + b^3$', '$(a + b)(a^2 - ab + b^2)$'],
            ],
          },
          {
            type: 'steps',
            title: 'Simplifying Rational Expressions',
            items: [
              'Factor the numerator and denominator completely',
              'Cancel any **common factors** (not common terms)',
              'Write the simplified result with the restriction that canceled factors $\\neq 0$',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Error When Distributing a Negative',
            wrong: '$-(3x - 7) = -3x - 7$. Student distributed the negative to the first term but not the second.',
            correction: '$-(3x - 7) = -3x + 7$. The negative sign flips **every** term inside the parentheses. Rewrite $-(A - B)$ as $-A + B$.',
          },
          {
            type: 'trapCard',
            title: 'Combining Unlike Terms',
            wrong: '$3x^2 + 5x = 8x^3$. Student added coefficients and exponents.',
            correction: '$3x^2$ and $5x$ have **different** exponents, so they cannot be combined. The expression $3x^2 + 5x$ is already simplified.',
          },
          {
            type: 'trapCard',
            title: '"Cancel" Across Addition',
            wrong: '$\\frac{x + 4}{x} = 4$. Student "canceled" the $x$ from numerator and denominator.',
            correction: 'You can only cancel **factors** (multiplication), not **terms** (addition). Split: $\\frac{x}{x} + \\frac{4}{x} = 1 + \\frac{4}{x}$.',
          },
          {
            type: 'trapCard',
            title: 'Squaring a Binomial Incorrectly',
            wrong: '$(x + 3)^2 = x^2 + 9$. Student squared each term but forgot the middle term.',
            correction: '$(x + 3)^2 = x^2 + 2(x)(3) + 9 = x^2 + 6x + 9$. Use the identity $(a+b)^2 = a^2 + 2ab + b^2$.',
          },
          {
            type: 'trapCard',
            title: 'Distributing an Exponent Over Addition',
            wrong: '$(2x + 3)^2 = 4x^2 + 9$. Student distributed the exponent.',
            correction: 'Exponents distribute over **multiplication**, not addition. $(2x+3)^2 = (2x+3)(2x+3) = 4x^2 + 12x + 9$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Which expression is equivalent to $4x^2 - 25$?',
            steps: [
              { label: 'Recognize pattern', content: '$4x^2 = (2x)^2$ and $25 = 5^2$ — this is a difference of squares' },
              { label: 'Apply formula', content: '$a^2 - b^2 = (a+b)(a-b)$ with $a = 2x$, $b = 5$' },
              { label: 'Factor', content: '$(2x + 5)(2x - 5)$' },
              { label: 'Verify', content: 'FOIL: $(2x)(2x) + (2x)(-5) + (5)(2x) + (5)(-5) = 4x^2 - 10x + 10x - 25 = 4x^2 - 25$ \\checkmark' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Which expression is equivalent to $(3x + 2)(x - 4) - (x - 4)$?',
            steps: [
              { label: 'Spot the common factor', content: '$(x - 4)$ appears in both terms' },
              { label: 'Factor out $(x-4)$', content: '$(x - 4)[(3x + 2) - 1]$' },
              { label: 'Simplify bracket', content: '$(x - 4)(3x + 1)$' },
              { label: 'Expand to verify', content: '$3x^2 + x - 12x - 4 = 3x^2 - 11x - 4$ \\checkmark' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $\\frac{x^2 + 5x + 6}{x + 2}$ is equivalent to $x + k$ for all $x \\neq -2$, what is $k$?',
            steps: [
              { label: 'Factor numerator', content: '$x^2 + 5x + 6 = (x + 2)(x + 3)$' },
              { label: 'Cancel common factor', content: '$\\frac{(x+2)(x+3)}{x+2} = x + 3$' },
              { label: 'Match', content: '$x + k = x + 3$, so $k = 3$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Using DESMOS graphing to verify algebraic equivalence — if two expressions produce identical graphs, they are equivalent.',
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, you have access to a built-in DESMOS graphing calculator. One of its most powerful uses is **verifying equivalence visually**: graph the original expression and each answer choice. If two graphs overlap perfectly (same curve, no gaps), the expressions are equivalent for all inputs.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'DESMOS Equivalence Test',
            content: 'Type $y_1 = \\text{(original expression)}$ and $y_2 = \\text{(candidate)}$ into DESMOS.\n\n**Same graph** = equivalent expressions\n**Different graphs** = not equivalent\n\nThis works for polynomials, rational expressions, and radical expressions.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS verification is a **confirmation tool**, not a replacement for algebra. Use it to check your algebraic work or to quickly eliminate wrong answer choices when short on time.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Distribute, Then Compare',
            content: 'Recognition cue: a product of two binomials or a coefficient multiplied by a grouped expression, with four expanded-form answer choices. First move: distribute (or FOIL) and combine like terms. Compare your result to the choices.',
          },
          {
            type: 'trapCard',
            title: 'Missing the Middle Term When FOILing',
            wrong: '$(x + 4)(x - 3) = x^2 - 12$. Student multiplied the first terms and last terms only.',
            correction: 'FOIL produces four terms: $(x)(x) + (x)(-3) + (4)(x) + (4)(-3) = x^2 - 3x + 4x - 12 = x^2 + x - 12$. The middle terms combine to give $+x$.',
          },
          {
            type: 'tip',
            content: 'After distributing, sort terms by descending power of $x$ before comparing to the answer choices. The SAT always presents choices in standard form: highest power first, then descending.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Verification Method',
            items: [
              'Open the DESMOS calculator (click the calculator icon on any math question)',
              'In the first line, type the original expression as $y = ...$',
              'In the second line, type the answer choice you want to test as $y = ...$',
              'If both lines produce the **exact same graph** (the second line overlaps the first completely), the expressions are equivalent',
              'If the graphs differ at any point, the expressions are **not** equivalent — move to the next choice',
            ],
          },
          {
            type: 'steps',
            title: 'Algebraic Approach: Distribute and Combine',
            items: [
              'Distribute every coefficient across its grouped terms',
              'Apply FOIL for binomial products: First, Outer, Inner, Last',
              'Collect all like terms and combine them',
              'Write the result in standard form (descending powers)',
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
            problem: 'Which expression is equivalent to $2(x + 3)(x - 1)$?',
            steps: [
              { label: 'FOIL the binomials', content: '$(x + 3)(x - 1) = x^2 - x + 3x - 3 = x^2 + 2x - 3$' },
              { label: 'Distribute the $2$', content: '$2(x^2 + 2x - 3) = 2x^2 + 4x - 6$' },
              { label: 'Verify with DESMOS', content: 'Graph $y = 2(x+3)(x-1)$ and $y = 2x^2 + 4x - 6$ — both produce the same parabola \\checkmark' },
              { label: 'Answer', content: '$2x^2 + 4x - 6$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Which expression is equivalent to $3(x - 2)(x + 5)$?',
            answer: 'FOIL: $(x-2)(x+5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$. Distribute: $3(x^2 + 3x - 10) = 3x^2 + 9x - 30$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'equivalent-expressions',
    title: 'Equivalent Expressions Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Factoring and simplifying rational expressions to find equivalent forms — pull out common factors and cancel.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT equivalence questions go in reverse: instead of expanding, you must **factor** or **simplify**. This includes pulling out a GCF, recognizing special patterns (difference of squares, perfect-square trinomials), or simplifying a rational expression by canceling common factors between numerator and denominator.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'GCF Factoring', formula: '$6x^2 + 9x = 3x(2x + 3)$', note: 'Factor out the greatest common factor' },
              { label: 'Difference of Squares', formula: '$x^2 - 16 = (x+4)(x-4)$', note: 'Both terms are perfect squares separated by subtraction' },
              { label: 'Cancel Common Factors', formula: '$\\frac{(x+2)(x-3)}{x+2} = x - 3$', note: 'Cancel the shared factor; note $x \\neq -2$' },
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Canceling Requires Factors, Not Terms',
            content: 'You can cancel $\\frac{(x+2)(x-3)}{(x+2)} = x - 3$ because $(x+2)$ is a **factor** of both.\n\nYou **cannot** cancel $\\frac{x + 5}{x} = 5$ because $x$ is a **term** in the numerator, not a factor of the entire numerator.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Simplify a Rational Expression',
            content: 'Recognition cue: a fraction with a polynomial numerator and a binomial (or polynomial) denominator. First move: factor the numerator completely, then cancel any factor that matches the denominator.',
          },
          {
            type: 'trapCard',
            title: 'Canceling Terms Instead of Factors',
            wrong: '$\\frac{x^2 + 3x}{x} = x + 3x = 4x$. Student canceled $x$ from one term but not the other.',
            correction: '$\\frac{x^2 + 3x}{x} = \\frac{x(x + 3)}{x} = x + 3$. Factor the numerator **first**, then cancel the common **factor** of $x$.',
          },
          {
            type: 'tip',
            content: 'When you cancel a factor from a rational expression, the result is only valid where the canceled factor is nonzero. On the SAT, this restriction is often stated as "$x \\neq ...$" in the problem stem — read it, because it confirms you are on the right track.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Simplifying a Rational Expression',
            items: [
              'Factor the numerator completely (GCF, then trinomial or special pattern)',
              'Factor the denominator completely',
              'Identify and cancel any **common factors** between numerator and denominator',
              'Write the simplified expression and note any excluded $x$-values',
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
            problem: 'Which expression is equivalent to $\\frac{x^2 - 9}{x^2 + 5x + 6}$ for $x \\neq -3$?',
            steps: [
              { label: 'Factor numerator', content: '$x^2 - 9 = (x+3)(x-3)$ (difference of squares)' },
              { label: 'Factor denominator', content: '$x^2 + 5x + 6 = (x+2)(x+3)$' },
              { label: 'Cancel $(x+3)$', content: '$\\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x-3}{x+2}$' },
              { label: 'Verify with $x = 1$', content: 'Original: $\\frac{1-9}{1+5+6} = \\frac{-8}{12} = -\\frac{2}{3}$. Simplified: $\\frac{1-3}{1+2} = \\frac{-2}{3}$ \\checkmark' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Simplify $\\frac{x^2 + 7x + 12}{x + 3}$ for $x \\neq -3$.',
            answer: 'Factor numerator: $x^2 + 7x + 12 = (x+3)(x+4)$. Cancel: $\\frac{(x+3)(x+4)}{x+3} = x + 4$.',
          },
        ],
      },
    },
  },

};
