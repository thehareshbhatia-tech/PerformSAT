export const functionsLessonTabs = {
  1: {
    moduleId: 'functions',
    title: 'What Is a Function?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A function is a rule that assigns exactly one output to every input.',
        blocks: [
          {
            type: 'formula',
            label: 'Function Machine Model',
            content: '$$\\text{input } x \\;\\longrightarrow\\; \\boxed{\\text{rule}} \\;\\longrightarrow\\; \\text{output } f(x)$$',
          },
          {
            type: 'text',
            content: 'A function takes an **input**, applies a fixed rule, and produces exactly **one output**. Two different inputs may share the same output, but a single input can never produce two different outputs.',
          },
          {
            type: 'keyInsight',
            content: 'The **vertical line test** settles graph-based questions: if any vertical line crosses the curve more than once, the graph does not represent a function. A circle fails; a parabola passes. The **domain** is the set of all allowed inputs; restrictions arise from division by zero or square roots of negatives.',
          },
          {
            type: 'table',
            title: 'Function vs. Not a Function',
            headers: [
              'Rule',
              'Function?',
              'Why?',
            ],
            rows: [
              [
                '$y = 2x + 1$',
                'Yes',
                'Every $x$ gives exactly one $y$',
              ],
              [
                '$y^2 = x$ (solved for $y$)',
                'No',
                '$x = 4$ gives $y = 2$ and $y = -2$',
              ],
              [
                '$y = \\pm\\sqrt{x}$',
                'No',
                'Two outputs for each positive input',
              ],
              [
                '$y = x^2$',
                'Yes',
                'Each input maps to one output, even though $f(2) = f(-2) = 4$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing Forward and Reverse Lookups',
            wrong: '"$f(x) = 3$" — student plugs $3$ into the function: $f(3) = 2(3) + 1 = 7$.',
            correction: '$f(x) = 3$ asks "which inputs produce output $3$?" Search the output column for $3$, or set the rule equal to $3$ and solve. $f(3)$ is the forward lookup — a completely different question.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The function $f$ is defined by the table below. For how many values of $x$ does $f(x) = 5$?\n\n| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n|---|---|---|---|---|---|\n| $f(x)$ | $5$ | $3$ | $5$ | $7$ | $5$ |',
            steps: [
              {
                label: 'Identify the task',
                content: 'Find every input whose output equals $5$.',
              },
              {
                label: 'Scan outputs',
                content: '$f(1) = 5$ ✓, $f(2) = 3$ ✗, $f(3) = 5$ ✓, $f(4) = 7$ ✗, $f(5) = 5$ ✓',
              },
              {
                label: 'Count',
                content: 'Three values of $x$ produce $f(x) = 5$: $x = 1, 3, 5$.',
              },
              {
                label: 'Answer',
                content: '$\\boxed{3}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A relation maps inputs to outputs: $1 \\to 4$, $2 \\to 7$, $3 \\to 4$, $4 \\to 9$. Is this a function? Why or why not?',
            answer: 'Yes. Every input maps to exactly one output. Inputs $1$ and $3$ both produce $4$, but that is allowed — a function fails only when one input gives two different outputs.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'functions',
    title: 'Function Notation',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Function notation $f(x)$ names a rule and specifies its input — it is not multiplication.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Function name',
                formula: '$f$',
                note: 'The label for the rule (could be $g$, $h$, $p$, etc.)',
              },
              {
                label: 'Input slot',
                formula: '$(x)$',
                note: 'Whatever value you place here gets substituted for $x$',
              },
              {
                label: 'Output rule',
                formula: '$= 3x - 7$',
                note: 'The operation applied to the input',
              },
            ],
          },
          {
            type: 'text',
            content: '$f(x) = 3x - 7$ reads: "the function $f$, applied to input $x$, outputs $3x - 7$." The letter $f$ names the rule; the parentheses hold the input — they do **not** indicate multiplication.',
          },
          {
            type: 'keyInsight',
            content: '$f(a) = b$ means: "When the input is $a$, the output is $b$." On a graph, this corresponds to the point $(a, b)$. Multiple functions ($f$, $g$, $h$) can coexist in one problem — each letter names a separate rule with its own definition.',
          },
          {
            type: 'trapCard',
            title: 'Treating $f(x)$ as $f \\cdot x$',
            wrong: 'Student sees $f(x) = 3x$ and interprets $f(5)$ as $f \\times 5$, searching for a numerical value of "$f$."',
            correction: '$f(5)$ means "substitute $5$ for $x$ in the rule": $f(5) = 3(5) = 15$. The parentheses denote input, not multiplication.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $g(x) = x^2 + 2x$, what is $g(a + 1)$?',
            steps: [
              {
                label: 'Substitute',
                content: 'Replace $x$ with $(a + 1)$: $g(a + 1) = (a + 1)^2 + 2(a + 1)$',
              },
              {
                label: 'Expand',
                content: '$= a^2 + 2a + 1 + 2a + 2$',
              },
              {
                label: 'Simplify',
                content: '$= a^2 + 4a + 3$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $f(x) = 2x^2 - x + 4$, what is $f(3)$?',
            answer: '$f(3) = 2(3)^2 - (3) + 4 = 2(9) - 3 + 4 = 18 - 3 + 4 = 19$',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'functions',
    title: 'Evaluating Functions',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Evaluating a function means substituting a given value or expression for the input variable and simplifying.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Numeric input',
                formula: '$f(3)$',
                note: 'Plug in $3$ for every $x$',
              },
              {
                label: 'Expression input',
                formula: '$f(2a)$',
                note: 'Plug in $2a$ for every $x$',
              },
              {
                label: 'Composition',
                formula: '$f(g(x))$',
                note: 'Evaluate $g(x)$ first, feed result into $f$',
              },
              {
                label: 'Reverse',
                formula: '$f(x) = k$',
                note: 'Set the rule equal to $k$ and solve for $x$',
              },
            ],
          },
          {
            type: 'text',
            content: 'Basic evaluation replaces $x$ with a number. SAT-level evaluation adds three layers: **expressions as inputs** ($f(2a)$), **nested functions** ($f(g(x))$, called composition), and **reverse evaluation** ($f(x) = k$, solve for $x$).',
          },
          {
            type: 'keyInsight',
            content: 'When substituting, always wrap the input in parentheses. For $f(x) = x^2$: $f(-3) = (-3)^2 = 9$. Without parentheses, $-3^2 = -9$ — the exponent applies only to $3$, not the sign.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Order of Composition',
            wrong: 'For $f(g(3))$ with $f(x) = x + 5$ and $g(x) = 2x$: student computes $f(3) = 8$ first, then $g(8) = 16$.',
            correction: '$f(g(3))$: inner first → $g(3) = 2(3) = 6$, then outer → $f(6) = 6 + 5 = 11$. The innermost parentheses always execute first.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Let $f(x) = 2x - 3$ and $g(x) = x^2 + 1$. Find $g(f(4))$.',
            steps: [
              {
                label: 'Inner first',
                content: '$f(4) = 2(4) - 3 = 8 - 3 = 5$',
              },
              {
                label: 'Outer next',
                content: '$g(5) = (5)^2 + 1 = 25 + 1 = 26$',
              },
              {
                label: 'Answer',
                content: '$g(f(4)) = 26$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $h(x) = 3x - 1$, find the value of $k$ such that $h(k) = 14$.',
            answer: '$3k - 1 = 14 \\Rightarrow 3k = 15 \\Rightarrow k = 5$. Verify: $h(5) = 3(5) - 1 = 14$ ✓',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'functions',
    title: 'Simple Function Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Direct evaluation: substitute a specific input into a function rule and simplify.',
        blocks: [
          {
            type: 'formula',
            label: 'Substitution Pattern',
            content: '$$f(a) = \\text{[replace every } x \\text{ in the rule with } a\\text{]}$$',
          },
          {
            type: 'text',
            content: 'Direct evaluation gives a rule like $f(x) = 2x^2 - 5x + 3$ and asks for a specific output such as $f(4)$. Replace every $x$ with the given number, then follow order of operations carefully.',
          },
          {
            type: 'keyInsight',
            content: 'Exponents before multiplication, multiplication before addition. The most common arithmetic error on evaluation problems: $(-3)^2 = 9$, but $-3^2 = -9$. Parentheses around the substituted value prevent sign mistakes.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error with Negative Inputs',
            wrong: '$f(x) = x^2 - 4x$. Student evaluates $f(-2)$ as $-2^2 - 4(-2) = -4 + 8 = 4$.',
            correction: 'Wrap the input: $f(-2) = (-2)^2 - 4(-2) = 4 + 8 = 12$. Without parentheses, $-2^2$ becomes $-(2^2) = -4$ instead of $(-2)^2 = 4$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $f(x) = 3x^2 - 5x + 2$, what is $f(-2)$?',
            steps: [
              {
                label: 'Substitute $-2$ for $x$',
                content: '$f(-2) = 3(-2)^2 - 5(-2) + 2$',
              },
              {
                label: 'Evaluate exponent',
                content: '$(-2)^2 = 4$, so $f(-2) = 3(4) - 5(-2) + 2$',
              },
              {
                label: 'Multiply',
                content: '$= 12 + 10 + 2$',
              },
              {
                label: 'Answer',
                content: '$f(-2) = 24$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $g(x) = x^3 - 2x$, what is $g(3)$?',
            answer: '$g(3) = (3)^3 - 2(3) = 27 - 6 = 21$',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'functions',
    title: 'Simple Function Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Reverse evaluation: given the output, set the function rule equal to it and solve for the input.',
        blocks: [
          {
            type: 'formula',
            label: 'Reverse Evaluation Setup',
            content: '$$f(x) = k \\;\\Longrightarrow\\; \\text{replace } f(x) \\text{ with its rule, set equal to } k, \\text{ solve for } x$$',
          },
          {
            type: 'text',
            content: 'A reverse-lookup problem states the output and asks for the input. Set the function rule equal to the given output value and solve the resulting equation for $x$.',
          },
          {
            type: 'keyInsight',
            content: 'A quadratic rule can yield two solutions when set equal to a constant. Read the question stem: "a value" means either solution works; "the positive value" requires selecting accordingly.',
          },
          {
            type: 'trapCard',
            title: 'Plugging the Output Into the Function',
            wrong: '"$f(x) = 10$" — student computes $f(10) = 4(10) - 7 = 33$ and selects $33$ as the answer.',
            correction: '$f(x) = 10$ means the output is $10$ and $x$ is unknown. Set the rule equal to $10$: $4x - 7 = 10 \\Rightarrow x = \\frac{17}{4}$. Forward evaluation ($f(10)$) is a different question.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The function $f$ is defined by $f(x) = 4x - 7$. For what value of $x$ does $f(x) = 10$?',
            steps: [
              {
                label: 'Set the rule equal to the output',
                content: '$4x - 7 = 10$',
              },
              {
                label: 'Isolate $x$',
                content: '$4x = 17$',
              },
              {
                label: 'Divide',
                content: '$x = \\frac{17}{4}$',
              },
              {
                label: 'Verify',
                content: '$f\\!\\left(\\frac{17}{4}\\right) = 4\\!\\left(\\frac{17}{4}\\right) - 7 = 17 - 7 = 10$ \\checkmark',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $g(x) = x^2 + 5$, for what positive value of $x$ is $g(x) = 30$?',
            answer: '$x^2 + 5 = 30 \\Rightarrow x^2 = 25 \\Rightarrow x = 5$ (positive value)',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'functions',
    title: 'Simple Function Example #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Table-based functions: read inputs and outputs directly from a table instead of a formula.',
        blocks: [
          {
            type: 'text',
            content: 'Some problems define a function entirely through a table of values — no formula is given. Forward lookup: find the given input in the $x$-column and read the output. Reverse lookup: scan the $f(x)$-column for the given output and read the corresponding input(s).',
          },
          {
            type: 'keyInsight',
            content: 'A table can show different inputs sharing the same output ($f(-1) = f(3) = 4$). This is valid. When the question asks "$f(x) = 4$, find $x$," both $x = -1$ and $x = 3$ are correct — check whether the problem asks for one value or all values.',
          },
          {
            type: 'table',
            title: 'Example Function Table',
            headers: [
              '$x$',
              '$f(x)$',
            ],
            rows: [
              [
                '$-1$',
                '$4$',
              ],
              [
                '$0$',
                '$1$',
              ],
              [
                '$1$',
                '$0$',
              ],
              [
                '$2$',
                '$1$',
              ],
              [
                '$3$',
                '$4$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Looking in the Wrong Column',
            wrong: 'Asked for $f(2)$, student scans the $f(x)$ column for the value $2$ and reads $x = 1$ or $x = -1$.',
            correction: '$f(2)$ means "input is $2$." Find $x = 2$ in the input column, then read across to the output: $f(2) = 1$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The table defines function $f$:\n\n| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |\n|---|---|---|---|---|---|\n| $f(x)$ | $4$ | $1$ | $0$ | $1$ | $4$ |\n\nFind $f(f(2))$.',
            steps: [
              {
                label: 'Evaluate the inner function',
                content: 'Find $x = 2$ in the input row: $f(2) = 1$.',
              },
              {
                label: 'Feed the result back into $f$',
                content: 'Now evaluate $f(1)$: find $x = 1$ in the input row → $f(1) = 0$.',
              },
              {
                label: 'Answer',
                content: '$f(f(2)) = f(1) = 0$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Using the table ($x$: $-1, 0, 1, 2, 3$; $f(x)$: $4, 1, 0, 1, 4$), what is $f(f(1))$?',
            answer: 'Inner: $f(1) = 0$ (from the table). Outer: $f(0) = 1$ (from the table). So $f(f(1)) = 1$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'functions',
    title: 'Simple Function Example #4 (Word Problem)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Functions in context: the input and output represent real-world quantities, and the question asks you to evaluate or interpret them.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Coefficient',
                formula: '$15$',
                note: 'Rate — cost per additional hour',
              },
              {
                label: 'Constant',
                formula: '$50$',
                note: 'Initial value — base fee when $n = 0$',
              },
              {
                label: 'Output',
                formula: '$C(n)$',
                note: 'Total cost for $n$ hours',
              },
            ],
          },
          {
            type: 'text',
            content: '$C(n) = 15n + 50$ might model the total cost $C$, in dollars, of renting a venue for $n$ hours. The mechanics (substitution, solving) are identical to abstract problems, but context problems also ask what the parts of the equation **represent**.',
          },
          {
            type: 'keyInsight',
            content: 'Rate keywords: **per**, **each**, **every**, **for each additional**. Initial-value keywords: **base**, **starting**, **flat fee**, **at time zero**. Match the keyword in the answer choices to the position of the number in the equation.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Rate and Initial Value',
            wrong: '$C(n) = 15n + 50$. Student selects "$50$ is the cost per hour" and "$15$ is the flat fee."',
            correction: '$50$ is the constant term — the base fee when $n = 0$. $15$ is the coefficient of $n$ — the cost per additional hour. The coefficient always pairs with "per [unit]."',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A plumber charges a flat fee of $\\$75$ plus $\\$40$ per hour. The total cost is modeled by $C(h) = 40h + 75$. How much does a $3$-hour job cost, and what does the number $75$ represent?',
            steps: [
              {
                label: 'Substitute $h = 3$',
                content: '$C(3) = 40(3) + 75 = 120 + 75$',
              },
              {
                label: 'Compute',
                content: '$C(3) = 195$. The $3$-hour job costs $\\$195$.',
              },
              {
                label: 'Interpret the constant',
                content: '$75$ is the value of $C(0)$ — the cost when $h = 0$ hours. It represents the flat fee charged before any hourly work begins.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The temperature of a cooling liquid is modeled by $T(m) = -3m + 80$, where $T$ is degrees Fahrenheit and $m$ is minutes. What does $-3$ represent?',
            answer: '$-3$ is the coefficient of $m$: the temperature decreases by $3$ degrees Fahrenheit per minute (rate of change).',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'functions',
    title: 'Complex Functions Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Composition chains two functions: the output of the inner function becomes the input of the outer function.',
        blocks: [
          {
            type: 'formula',
            label: 'Composition Definition',
            content: '$$f(g(x)) = f\\!\\left(\\text{[output of } g(x)\\text{]}\\right)$$',
          },
          {
            type: 'text',
            content: '$f(g(x))$ means "apply $g$ to $x$ first, then apply $f$ to that result." The notation $(f \\circ g)(x)$ is equivalent. Order matters: $f(g(x))$ and $g(f(x))$ generally produce different outputs.',
          },
          {
            type: 'keyInsight',
            content: 'With $f(x) = x + 1$ and $g(x) = 2x$: $f(g(3)) = f(6) = 7$, but $g(f(3)) = g(4) = 8$. Reversing the order changes the answer. Always read the notation to determine which function acts first.',
          },
          {
            type: 'trapCard',
            title: 'Reversing the Composition Order',
            wrong: 'For $f(g(2))$ with $f(x) = x + 4$ and $g(x) = 2x$: student computes $f(2) = 6$ first, then $g(6) = 12$.',
            correction: 'Inner first: $g(2) = 2(2) = 4$. Outer next: $f(4) = 4 + 4 = 8$. The function closest to the input number executes first.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Let $f(x) = x + 4$ and $g(x) = 2x$. What is $f(g(2))$?',
            steps: [
              {
                label: 'Evaluate the inner function first',
                content: '$g(2) = 2(2) = 4$',
              },
              {
                label: 'Feed the result into the outer function',
                content: '$f(4) = 4 + 4 = 8$',
              },
              {
                label: 'Answer',
                content: '$f(g(2)) = 8$',
              },
              {
                label: 'Verify order matters',
                content: 'Compare: $g(f(2)) = g(6) = 12 \\neq 8$. Reversing the order changes the answer.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $f(x) = x + 4$ and $g(x) = 2x$, what is $g(f(5))$?',
            answer: 'Inner: $f(5) = 5 + 4 = 9$. Outer: $g(9) = 2(9) = 18$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'functions',
    title: 'Complex Functions Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A piecewise function uses different rules for different intervals of the input.',
        blocks: [
          {
            type: 'formula',
            label: 'Piecewise Example',
            content: '$$f(x) = \\begin{cases} 2x + 1 & \\text{if } x < 3 \\\\ x^2 - 4 & \\text{if } x \\geq 3 \\end{cases}$$',
          },
          {
            type: 'text',
            content: 'A **piecewise function** defines two or more rules, each applying to a specific interval of $x$-values. To evaluate, first determine which interval contains the input, then apply only the corresponding rule.',
          },
          {
            type: 'keyInsight',
            content: 'The boundary value is the decision point. At $x = 3$ above: $\\geq$ includes equality, so use the second rule: $f(3) = 3^2 - 4 = 5$. Always check whether the boundary uses $<$ (excludes the value) or $\\leq$ (includes it) before substituting.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Rule at the Boundary',
            wrong: 'Student evaluates $f(3)$ using the first piece $2x + 1$ and gets $2(3) + 1 = 7$.',
            correction: '$3 \\geq 3$ satisfies the second condition, so $f(3) = 3^2 - 4 = 5$. The boundary belongs to whichever piece includes the "equal to" part ($\\leq$ or $\\geq$).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Let $f(x) = \\begin{cases} 2x + 1 & \\text{if } x < 3 \\\\ x^2 - 4 & \\text{if } x \\geq 3 \\end{cases}$. Find $f(3) + f(1)$.',
            steps: [
              {
                label: 'Determine which piece to use for $f(3)$',
                content: '$3 \\geq 3$, so use the second rule: $f(3) = (3)^2 - 4 = 9 - 4 = 5$.',
              },
              {
                label: 'Determine which piece to use for $f(1)$',
                content: '$1 < 3$, so use the first rule: $f(1) = 2(1) + 1 = 3$.',
              },
              {
                label: 'Add',
                content: '$f(3) + f(1) = 5 + 3 = 8$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $g(x) = \\begin{cases} -2x & \\text{if } x < 0 \\\\ x^2 + 1 & \\text{if } x \\geq 0 \\end{cases}$, what is $g(-3) + g(2)$?',
            answer: '$g(-3)$: $-3 < 0$, use first rule → $-2(-3) = 6$. $g(2)$: $2 \\geq 0$, use second rule → $(2)^2 + 1 = 5$. Sum: $6 + 5 = 11$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'functions',
    title: 'Complex Functions Example #3 (Polynomial)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The Remainder Theorem connects polynomial evaluation to division: the remainder of $p(x) \\div (x - a)$ equals $p(a)$.',
        blocks: [
          {
            type: 'formula',
            label: 'Remainder Theorem',
            content: '$$p(x) \\div (x - a) \\;\\Longrightarrow\\; \\text{remainder} = p(a)$$',
          },
          {
            type: 'text',
            content: 'A polynomial like $p(x) = x^3 - 4x^2 + x + 6$ follows the same evaluation rules as simpler functions, but higher degree means more terms and more zeros. The **Remainder Theorem** provides a shortcut: dividing $p(x)$ by $(x - a)$ always leaves a remainder equal to $p(a)$.',
          },
          {
            type: 'keyInsight',
            content: 'Direct consequence (**Factor Theorem**): if $p(a) = 0$, then $(x - a)$ is a factor of $p(x)$ with zero remainder. SAT usage in reverse: "$(x - 3)$ is a factor of $p(x)$" immediately means $p(3) = 0$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error with $(x + a)$ Factors',
            wrong: '"$(x + 2)$ is a factor." Student substitutes $x = 2$: $p(2) = (2)^3 + (2)^2 - 6 = 6 \\neq 0$, gets confused.',
            correction: '$(x + 2) = (x - (-2))$, so $a = -2$. Substitute $x = -2$. Set the factor equal to zero first: $x + 2 = 0 \\Rightarrow x = -2$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $(x + 2)$ is a factor of $p(x) = x^3 + 3x^2 - 4$, find the value of $p(-2)$ and explain why.',
            steps: [
              {
                label: 'Identify $a$ from the factor',
                content: '$(x + 2) = (x - (-2))$, so $a = -2$.',
              },
              {
                label: 'Apply the Factor Theorem',
                content: 'If $(x - a)$ is a factor, then $p(a) = 0$. Therefore $p(-2) = 0$.',
              },
              {
                label: 'Verify by substitution',
                content: '$p(-2) = (-2)^3 + 3(-2)^2 - 4 = -8 + 12 - 4 = 0$ \\checkmark',
              },
              {
                label: 'Answer',
                content: '$p(-2) = 0$ because $(x + 2)$ divides $p(x)$ with no remainder.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the remainder when $p(x) = x^3 - 3x + 5$ is divided by $(x + 1)$?',
            answer: '$x + 1 = 0 \\Rightarrow x = -1$. Evaluate: $p(-1) = (-1)^3 - 3(-1) + 5 = -1 + 3 + 5 = 7$. The remainder is $7$.',
          },
        ],
      },
    },
  },
};
