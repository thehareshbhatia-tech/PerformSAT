export const functionsLessonTabs = {

  1: {
    moduleId: 'functions',
    title: 'What Is a Function?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A function is a rule that assigns exactly one output to every input.',
        blocks: [
          {
            type: 'text',
            content: 'A function is a rule that takes an **input**, applies a defined operation, and produces exactly **one output**. If a single input could produce two different outputs, the rule is not a function.',
          },
          {
            type: 'formula',
            label: 'Function Machine Model',
            content: '$$\\text{input } x \\;\\longrightarrow\\; \\boxed{\\text{rule}} \\;\\longrightarrow\\; \\text{output } f(x)$$',
          },
          {
            type: 'keyInsight',
            content: 'The **domain** is the set of all allowed inputs ($x$-values). The **range** is the set of all possible outputs ($y$-values). On the SAT, domain restrictions typically arise from division by zero ($x$ in a denominator) or square roots of negatives ($x$ under a radical).',
          },
          {
            type: 'table',
            title: 'Function vs. Not a Function',
            headers: ['Rule', 'Function?', 'Why?'],
            rows: [
              ['$y = 2x + 1$', 'Yes', 'Every $x$ gives exactly one $y$'],
              ['$y^2 = x$ (solved for $y$)', 'No', '$x = 4$ gives $y = 2$ and $y = -2$'],
              ['$y = \\pm\\sqrt{x}$', 'No', 'Two outputs for each positive input'],
              ['$y = x^2$', 'Yes', 'Each input maps to one output, even though $f(2) = f(-2) = 4$'],
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Vertical Line Test',
            content: 'Draw (or imagine) vertical lines across a graph. If **any** vertical line hits the curve more than once, it is **not** a function. A circle fails; a parabola opening up or down passes.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"For How Many Values of $x$..."',
            content: 'Recognition cue: the phrase "for how many values of $x$ does $f(x) = k$." First move: scan the output column of a table (or draw $y = k$ on the graph) and count intersections. Each intersection is one valid $x$-value.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Forward and Reverse Lookups',
            wrong: '"$f(x) = 3$" -- student plugs $3$ into the function instead of searching for outputs equal to $3$.',
            correction: '$f(x) = 3$ asks "which inputs produce output $3$?" Search the output column for $3$, not the input column. $f(3)$ (no equation) is the forward lookup.',
          },
          {
            type: 'tip',
            content: 'Decision rule: $f(3)$ -- go to input $3$, read the output. $f(x) = 3$ -- find every input whose output is $3$. The position of the number (inside parentheses vs. after the equals sign) determines the direction.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Determining Whether a Rule Is a Function',
            items: [
              'Check: does every input produce **exactly one** output?',
              'For an equation: solve for $y$. If the solution includes $\\pm$, it is not a function.',
              'For a graph: apply the vertical line test. If any vertical line crosses the curve more than once, it fails.',
              'For a table: scan the input column. If any input appears with two different outputs, it is not a function.',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing "Two Inputs, Same Output" with "Not a Function"',
            wrong: 'Student sees $f(2) = 4$ and $f(-2) = 4$ and thinks the function test fails.',
            correction: 'Different inputs **can** share the same output. A function only fails when **one input** produces **multiple outputs**. $f(x) = x^2$ is a valid function.',
          },
          {
            type: 'trapCard',
            title: 'Ignoring Domain Restrictions',
            wrong: 'Student evaluates $f(x) = \\frac{1}{x - 3}$ at $x = 3$ and writes $f(3) = \\frac{1}{0}$.',
            correction: '$x = 3$ is not in the domain because it creates division by zero. When the SAT asks for domain, exclude values that make the denominator zero or produce a negative under a square root.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The function $f$ is defined by the table below. For how many values of $x$ does $f(x) = 5$?\n\n| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n|---|---|---|---|---|---|\n| $f(x)$ | $5$ | $3$ | $5$ | $7$ | $5$ |',
            steps: [
              { label: 'Identify the task', content: 'Find every input whose output equals $5$.' },
              { label: 'Scan outputs', content: '$f(1) = 5$ \\checkmark, $f(2) = 3$ \\times, $f(3) = 5$ \\checkmark, $f(4) = 7$ \\times, $f(5) = 5$ \\checkmark' },
              { label: 'Count', content: 'Three values of $x$ give $f(x) = 5$: $x = 1, 3, 5$.' },
              { label: 'Answer', content: '$3$' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'functions',
    title: 'Function Notation',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Function notation $f(x)$ names a rule and specifies its input -- it is not multiplication.',
        blocks: [
          {
            type: 'text',
            content: 'When you see $f(x) = 3x - 7$, read it as "the function $f$, applied to input $x$, gives $3x - 7$." The letter $f$ is the name of the rule; the parentheses hold the input -- they do **not** mean multiply.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Function name', formula: '$f$', note: 'The label for the rule (could be g, h, p, etc.)' },
              { label: 'Input slot', formula: '$(x)$', note: 'Whatever you place here gets substituted for x' },
              { label: 'Output rule', formula: '$= 3x - 7$', note: 'The recipe applied to the input' },
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Interpreting $f(a) = b$',
            content: 'The statement $f(a) = b$ means: "When the input is $a$, the output is $b$." On a graph, this corresponds to the point $(a, b)$.',
          },
          {
            type: 'keyInsight',
            content: 'Multiple functions can coexist in one problem. $f(x) = 2x + 1$ and $g(x) = x^2$ are two separate rules with separate names. The SAT uses different letters to signal different rules acting on the same or different inputs.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Graph Reading: Forward vs. Reverse',
            content: '"What is $f(2)$?" -- go to $x = 2$, read the $y$-value. "For what value of $x$ is $f(x) = 2$?" -- draw $y = 2$ mentally, find where it crosses the graph, read the $x$-value(s). The question stem tells you which axis to start from.',
          },
          {
            type: 'trapCard',
            title: 'Reading $f(x) = 2$ as $f(2)$',
            wrong: 'Student reads "$f(x) = 2$" and plugs $2$ into the function.',
            correction: '$f(x) = 2$ asks "which inputs give output $2$?" -- search horizontally at $y = 2$. $f(2)$ asks "what is the output at input $2$?" -- search vertically at $x = 2$. They are opposite operations.',
          },
          {
            type: 'tip',
            content: 'On graph questions, trace along the correct axis first. Forward ($f(a)$): start on the $x$-axis, go vertical to the curve, read $y$. Reverse ($f(x) = b$): start on the $y$-axis, go horizontal to the curve, read $x$.',
          },
        ],
      },
      methods: {
        title: 'Evaluating with Notation',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating $f(3)$ when $f(x) = 2x^2 - x + 4$',
            items: [
              'Write the rule: $f(x) = 2x^2 - x + 4$',
              'Replace every $x$ with $3$: $f(3) = 2(3)^2 - (3) + 4$',
              'Compute step by step: $= 2(9) - 3 + 4 = 18 - 3 + 4 = 19$',
              'Answer: $f(3) = 19$',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Treating $f(x)$ as $f \\cdot x$',
            wrong: 'Student sees $f(x) = 3x$ and interprets $f(5)$ as $f \\times 5$.',
            correction: '$f(5)$ means "apply the rule $f$ to input $5$": substitute $5$ for $x$ in the rule. $f(5) = 3(5) = 15$. The parentheses denote input, not multiplication.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Up $f$ and $g$ in Multi-Function Problems',
            wrong: 'Problem defines $f(x) = x + 3$ and $g(x) = 2x$. Student evaluates $f(4)$ using the $g$ rule.',
            correction: 'When a problem defines multiple functions, match each letter to its own rule before substituting. Label each rule clearly in your work.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $g(x) = x^2 + 2x$, what is $g(a + 1)$?',
            steps: [
              { label: 'Substitute', content: 'Replace $x$ with $(a + 1)$: $g(a + 1) = (a + 1)^2 + 2(a + 1)$' },
              { label: 'Expand', content: '$= a^2 + 2a + 1 + 2a + 2$' },
              { label: 'Simplify', content: '$= a^2 + 4a + 3$' },
            ],
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'functions',
    title: 'Evaluating Functions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Evaluating a function means substituting a given value (or expression) for the input variable and simplifying.',
        blocks: [
          {
            type: 'text',
            content: 'The basic move is: replace $x$ with a given value and compute. SAT-level evaluation adds complexity with **expressions as inputs**, **nested functions (composition)**, and **using outputs to find unknowns**.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Numeric input', formula: '$f(3)$', note: 'Plug in $3$ for every $x$' },
              { label: 'Expression input', formula: '$f(2a)$', note: 'Plug in $2a$ for every $x$' },
              { label: 'Nested (composition)', formula: '$f(g(x))$', note: 'Evaluate $g(x)$ first, feed result into $f$' },
              { label: 'Reverse', formula: '$f(x) = k$', note: 'Set the rule equal to $k$ and solve for $x$' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'When substituting an expression, always wrap it in parentheses. For $f(x) = x^2$ and input $-3$: write $f(-3) = (-3)^2 = 9$, not $-3^2 = -9$. The parentheses ensure the exponent applies to the full input.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Composition: Inside-Out',
            content: 'Recognition cue: nested parentheses like $f(g(x))$ or $g(f(3))$. First move: **always evaluate the innermost function first**. For $g(f(3))$: compute $f(3)$ to get a number, then feed that number into $g$.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Order of Composition',
            wrong: 'For $f(g(3))$, student computes $f(3)$ first, then feeds that into $g$.',
            correction: '$f(g(3))$ reads "apply $g$ first, then $f$." Evaluate the inner function ($g(3)$) first, then use that result as the input to the outer function ($f$).',
          },
          {
            type: 'tip',
            content: 'Decision rule: if the input is a number ($g(f(2))$), evaluate step by step -- inner first, then outer. If the input is $x$ ($f(g(x))$), replace every $x$ in the outer function with the full inner expression and simplify algebraically.',
          },
        ],
      },
      methods: {
        title: 'Substitution Techniques',
        blocks: [
          {
            type: 'steps',
            title: 'Nested Function Evaluation',
            items: [
              'Given $f(x) = x + 5$ and $g(x) = 2x$, find $f(g(3))$.',
              '**Inner first:** $g(3) = 2(3) = 6$',
              '**Outer next:** $f(6) = 6 + 5 = 11$',
              'Answer: $f(g(3)) = 11$',
            ],
          },
          {
            type: 'steps',
            title: 'Reverse Evaluation (Finding the Input)',
            items: [
              'Given $h(x) = 3x - 1$, find $k$ such that $h(k) = 14$.',
              'Set the rule equal to $14$: $3k - 1 = 14$',
              'Solve: $3k = 15$, so $k = 5$',
              'Verify: $h(5) = 3(5) - 1 = 14$ \\checkmark',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Composition Order Reversal',
            wrong: 'For $f(g(3))$, student evaluates $f(3)$ first, then plugs into $g$.',
            correction: 'Always start with the **innermost** function. $f(g(3))$ means evaluate $g(3)$ first, then feed that result into $f$.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting Parentheses on Substitution',
            wrong: '$f(x) = x^2$ and input is $-3$: student writes $-3^2 = -9$.',
            correction: 'Wrap the substituted value in parentheses: $(-3)^2 = 9$. The square applies to the entire input, including its sign.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Let $f(x) = 2x - 3$ and $g(x) = x^2 + 1$. Find $g(f(4))$.',
            steps: [
              { label: 'Inner first', content: '$f(4) = 2(4) - 3 = 8 - 3 = 5$' },
              { label: 'Outer next', content: '$g(5) = (5)^2 + 1 = 25 + 1 = 26$' },
              { label: 'Answer', content: '$g(f(4)) = 26$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $f(x) = x^2 + 3x$ and $f(a) = 28$, what is one possible value of $a$?',
            steps: [
              { label: 'Set up', content: '$a^2 + 3a = 28$' },
              { label: 'Rearrange', content: '$a^2 + 3a - 28 = 0$' },
              { label: 'Factor', content: '$(a + 7)(a - 4) = 0$' },
              { label: 'Solve', content: '$a = -7$ or $a = 4$' },
            ],
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'functions',
    title: 'Simple Function Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Direct evaluation: given a function rule and a specific input, substitute and simplify to find the output.',
        blocks: [
          {
            type: 'text',
            content: 'The most straightforward function problem gives you a rule like $f(x) = 2x^2 - 5x + 3$ and asks for a specific output such as $f(4)$. Replace every $x$ with the given number, then follow order of operations carefully.',
          },
          {
            type: 'formula',
            label: 'Substitution Rule',
            content: '$$f(a) = \\text{[replace every } x \\text{ in the rule with } a\\text{]}$$',
          },
          {
            type: 'keyInsight',
            content: 'Exponents before multiplication, multiplication before addition. The most common arithmetic mistake on these problems is squaring before applying a negative sign: $(-3)^2 = 9$, but $-3^2 = -9$. Always use parentheses around your substitution.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Evaluation',
            content: 'Recognition cue: a function is defined and the question asks "$\\text{What is } f(k)$?" for a specific number $k$. First move: write out the rule, replace $x$ with $k$ everywhere, and compute step by step.',
          },
          {
            type: 'trapCard',
            title: 'Sign Errors with Negative Inputs',
            wrong: '$f(x) = x^2 - 4x$. Student evaluates $f(-2)$ as $-2^2 - 4(-2) = -4 + 8 = 4$.',
            correction: 'Wrap the input in parentheses: $f(-2) = (-2)^2 - 4(-2) = 4 + 8 = 12$. $(-2)^2 = 4$, not $-4$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Direct Evaluation Procedure',
            items: [
              'Write out the function rule.',
              'Replace every instance of $x$ with the given input, using parentheses.',
              'Evaluate exponents first, then multiplication, then addition/subtraction.',
              'Simplify to a single number.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'If $f(x) = 3x^2 - 2x + 1$, what is $f(-2)$?',
            steps: [
              { label: 'Substitute', content: '$f(-2) = 3(-2)^2 - 2(-2) + 1$' },
              { label: 'Exponents', content: '$= 3(4) - 2(-2) + 1$' },
              { label: 'Multiply', content: '$= 12 + 4 + 1$' },
              { label: 'Answer', content: '$f(-2) = 17$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
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
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Reverse lookup: given that $f(x) = k$, find the input $x$ that produces the specified output.',
        blocks: [
          {
            type: 'text',
            content: 'Instead of plugging in a number to find the output, a reverse-lookup problem tells you the output and asks you to find the input. You set the function rule equal to the given value and solve the resulting equation.',
          },
          {
            type: 'formula',
            label: 'Reverse Evaluation Setup',
            content: '$$f(x) = k \\;\\Longrightarrow\\; \\text{replace } f(x) \\text{ with its rule, set equal to } k, \\text{ solve for } x$$',
          },
          {
            type: 'keyInsight',
            content: 'A quadratic function can yield two solutions when you set $f(x) = k$. Always check whether the problem asks for "a value" (pick either) or "the positive value" (pick accordingly). Read the constraints in the question stem.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Reverse Lookup',
            content: 'Recognition cue: "For what value of $x$ is $f(x) = 10$?" or "If $f(a) = 10$, what is $a$?" First move: write the function rule, set it equal to $10$, and solve the equation for the variable.',
          },
          {
            type: 'trapCard',
            title: 'Plugging the Output Into the Function',
            wrong: '"$f(x) = 10$" -- student computes $f(10)$ instead of solving the equation $\\text{rule} = 10$.',
            correction: '$f(x) = 10$ means the output is $10$ and $x$ is unknown. Set the rule equal to $10$ and solve. $f(10)$ would be a forward evaluation with input $10$.',
          },
          {
            type: 'tip',
            content: 'After solving, verify by plugging your answer back into the original function. If $f(a) = k$, substitute $a$ into the rule and confirm the result equals $k$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving $f(x) = k$',
            items: [
              'Write the function rule in place of $f(x)$.',
              'Set the expression equal to $k$.',
              'Solve the resulting equation (linear or quadratic) for $x$.',
              'If the equation is quadratic, check for two solutions and apply any given constraints.',
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
            problem: 'If $f(x) = 4x - 7$, for what value of $x$ is $f(x) = 13$?',
            steps: [
              { label: 'Set up', content: '$4x - 7 = 13$' },
              { label: 'Add $7$', content: '$4x = 20$' },
              { label: 'Divide by $4$', content: '$x = 5$' },
              { label: 'Verify', content: '$f(5) = 4(5) - 7 = 20 - 7 = 13$ \\checkmark' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
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
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Table-based functions: the rule is not given as a formula -- read inputs and outputs directly from a table.',
        blocks: [
          {
            type: 'text',
            content: 'Some SAT problems define a function entirely through a table of values. There is no formula to plug into. Instead, you look up input-output pairs directly. Forward lookup: find the row with the given input and read the output. Reverse lookup: find the row(s) with the given output and read the input(s).',
          },
          {
            type: 'table',
            title: 'Example Table',
            headers: ['$x$', '$f(x)$'],
            rows: [
              ['$-1$', '$4$'],
              ['$0$', '$1$'],
              ['$1$', '$0$'],
              ['$2$', '$1$'],
              ['$3$', '$4$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'A table can show that a function is not one-to-one: in the table above, $f(-1) = f(3) = 4$ and $f(0) = f(2) = 1$. Two inputs sharing the same output is perfectly valid. However, if the question asks "$f(x) = 4$, find $x$," both $x = -1$ and $x = 3$ are correct -- look for the phrasing to know if one or all solutions are expected.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Table Lookup Questions',
            content: 'Recognition cue: a table of $x$ and $f(x)$ values with questions like "$\\text{What is } f(2)$?" or "$f(x) = 0 \\text{ for which } x$?" First move: identify whether the question gives you an input (look right for the output) or an output (scan the output column for matches, read the input).',
          },
          {
            type: 'trapCard',
            title: 'Looking in the Wrong Column',
            wrong: 'Asked to find $f(2)$, student scans the $f(x)$ column for $2$ instead of finding input $x = 2$.',
            correction: '$f(2)$ means "input is $2$." Locate $x = 2$ in the input column, then read across to the output column. The answer is $f(2) = 1$.',
          },
          {
            type: 'tip',
            content: 'Underline the word "input" or "output" in the question to orient yourself before scanning the table. This avoids the column-swap error.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Working with Function Tables',
            items: [
              'Determine the direction: forward ($f(a) = ?$) or reverse ($f(x) = k$).',
              'Forward: find the input value in the $x$-column, read the output from the $f(x)$-column.',
              'Reverse: scan the $f(x)$-column for the given output, read the corresponding $x$-value(s).',
              'Count all matches if the question asks "how many values."',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Using the table: $x$: $-1, 0, 1, 2, 3$; $f(x)$: $4, 1, 0, 1, 4$. What is $f(f(1))$?',
            steps: [
              { label: 'Inner first', content: '$f(1) = 0$ (from the table, input $1$ gives output $0$)' },
              { label: 'Outer next', content: '$f(0) = 1$ (from the table, input $0$ gives output $1$)' },
              { label: 'Answer', content: '$f(f(1)) = 1$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Using the same table ($x$: $-1, 0, 1, 2, 3$; $f(x)$: $4, 1, 0, 1, 4$), for how many values of $x$ does $f(x) = 1$?',
            answer: '$f(x) = 1$ when $x = 0$ and $x = 2$. Answer: $2$ values.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'functions',
    title: 'Simple Function Example #4 (Word Problem)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Functions in context: the input and output represent real-world quantities, and the question asks you to interpret or evaluate them.',
        blocks: [
          {
            type: 'text',
            content: 'A word-problem function defines a relationship in context -- for example, $C(n) = 15n + 50$ might model the total cost $C$, in dollars, of renting a venue for $n$ hours. The mechanics (substitution, solving) are identical to abstract problems, but the SAT also asks you to **interpret** what inputs, outputs, and constants represent.',
          },
          {
            type: 'formula',
            label: 'Context Model Example',
            content: '$$C(n) = 15n + 50$$',
          },
          {
            type: 'keyInsight',
            content: 'In the model $C(n) = 15n + 50$: the coefficient $15$ is the **rate** (cost per additional hour), the constant $50$ is the **initial value** (the base fee at $n = 0$), and $C(n)$ is the **total output** (total cost). SAT questions ask you to identify which part is which.',
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
            content: 'Recognition cue: a contextual function followed by "what does $15$ represent in the equation?" First move: identify whether the number is the coefficient of the variable (rate/slope) or the standalone constant (initial value/y-intercept). Pair the coefficient with "per [input unit]" and the constant with "starting/initial/base."',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Rate with the Initial Value',
            wrong: '$C(n) = 15n + 50$. Student says $50$ represents the cost per hour.',
            correction: '$50$ is the constant term -- it represents the base fee (the cost when $n = 0$). $15$ is the coefficient of $n$ -- it represents the cost **per hour**.',
          },
          {
            type: 'tip',
            content: 'Rate keywords: **per**, **each**, **every**, **for each additional**. Initial-value keywords: **base**, **starting**, **flat fee**, **at time zero**. Match the keyword in the answer choices to the position of the number in the equation.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving Context-Based Function Problems',
            items: [
              'Identify what the input variable and output variable represent.',
              'If the question asks for an output: substitute the given input into the function and simplify.',
              'If the question asks for an input: set the function equal to the given output and solve.',
              'If the question asks for interpretation: identify the coefficient (rate) and constant (initial value) and describe each in the units given by the problem.',
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
            problem: 'A plumber charges a flat fee of $\\$75$ plus $\\$40$ per hour. The total charge is modeled by $T(h) = 40h + 75$, where $h$ is the number of hours worked. A customer was charged $\\$235$. How many hours did the plumber work?',
            steps: [
              { label: 'Set up', content: '$40h + 75 = 235$' },
              { label: 'Subtract $75$', content: '$40h = 160$' },
              { label: 'Divide by $40$', content: '$h = 4$' },
              { label: 'Interpret', content: 'The plumber worked $4$ hours.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The temperature of a cooling liquid is modeled by $T(m) = -3m + 80$, where $T$ is the temperature in degrees Fahrenheit and $m$ is the number of minutes. What does $-3$ represent in this model?',
            answer: '$-3$ is the coefficient of $m$, so it represents the rate of change: the temperature decreases by $3$ degrees Fahrenheit **per minute**.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'functions',
    title: 'Complex Functions Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Composition of functions: evaluate $f(g(x))$ by working from the inside out.',
        blocks: [
          {
            type: 'text',
            content: 'Composition chains two functions together: the output of the inner function becomes the input of the outer function. $f(g(x))$ means "first apply $g$ to $x$, then apply $f$ to that result." The notation $(f \\circ g)(x)$ means the same thing.',
          },
          {
            type: 'formula',
            label: 'Composition',
            content: '$$f(g(x)) = f\\!\\left(\\text{[result of } g(x)\\text{]}\\right)$$',
          },
          {
            type: 'keyInsight',
            content: 'Order matters: $f(g(x))$ and $g(f(x))$ are generally **not** the same. With $f(x) = x + 1$ and $g(x) = 2x$: $f(g(3)) = f(6) = 7$, but $g(f(3)) = g(4) = 8$. Always read the notation to determine which function is applied first.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Numeric vs. Algebraic Composition',
            content: 'Recognition cue: if the innermost input is a number ($f(g(3))$), evaluate step by step -- compute $g(3)$ first, then feed that number into $f$. If the input is a variable ($f(g(x))$), substitute the entire expression for $g(x)$ into $f$ and simplify algebraically.',
          },
          {
            type: 'trapCard',
            title: 'Reversing the Order',
            wrong: 'For $f(g(2))$, student evaluates $f(2)$ first, then plugs the result into $g$.',
            correction: 'The innermost function acts first. $f(g(2))$: compute $g(2)$, then apply $f$ to that result. Think of it as peeling layers from the inside out.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating a Composition (Numeric)',
            items: [
              'Identify the inner function and its input.',
              'Evaluate the inner function to get a number.',
              'Use that number as the input to the outer function.',
              'Evaluate the outer function to get the final answer.',
            ],
          },
          {
            type: 'steps',
            title: 'Evaluating a Composition (Algebraic)',
            items: [
              'Write out the outer function\'s rule.',
              'Wherever $x$ appears in the outer rule, replace it with the **entire** inner function expression.',
              'Expand and simplify.',
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
            problem: 'Let $f(x) = x^2 - 1$ and $g(x) = 3x + 2$. Find $f(g(1))$.',
            steps: [
              { label: 'Inner first', content: '$g(1) = 3(1) + 2 = 5$' },
              { label: 'Outer next', content: '$f(5) = (5)^2 - 1 = 25 - 1 = 24$' },
              { label: 'Answer', content: '$f(g(1)) = 24$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If $f(x) = x + 4$ and $g(x) = 2x$, what is $g(f(5))$?',
            answer: '$f(5) = 5 + 4 = 9$. Then $g(9) = 2(9) = 18$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'functions',
    title: 'Complex Functions Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Piecewise functions use different rules for different intervals of the input.',
        blocks: [
          {
            type: 'text',
            content: 'A **piecewise function** defines two or more rules, each applying to a specific interval of $x$-values. To evaluate, first determine which interval your input falls in, then apply the corresponding rule. The SAT typically presents these with two or three pieces.',
          },
          {
            type: 'formula',
            label: 'Piecewise Function Example',
            content: '$$f(x) = \\begin{cases} 2x + 1 & \\text{if } x < 3 \\\\ x^2 - 4 & \\text{if } x \\geq 3 \\end{cases}$$',
          },
          {
            type: 'keyInsight',
            content: 'The boundary value (where the conditions switch) is the critical decision point. Check whether the boundary uses $<$ or $\\leq$ to determine which rule applies at that exact value. For the example above, at $x = 3$: use the second rule ($x \\geq 3$), so $f(3) = 3^2 - 4 = 5$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Choosing the Correct Piece',
            content: 'Recognition cue: a function defined with cases or conditions like "if $x \\leq 0$" and "if $x > 0$." First move: read the input value, check each condition, identify which rule applies, then substitute into that rule only.',
          },
          {
            type: 'trapCard',
            title: 'Using the Wrong Rule',
            wrong: 'For $f(x)$ above, student evaluates $f(3)$ using $2x + 1$ and gets $7$.',
            correction: 'Since $3 \\geq 3$, the second rule applies: $f(3) = 3^2 - 4 = 5$. Always check the inequality direction ($<$ vs. $\\leq$) at the boundary.',
          },
          {
            type: 'tip',
            content: 'Circle or underline the inequality symbols in piecewise definitions before evaluating. A boundary input like $x = 3$ belongs to whichever piece includes the "equal to" part ($\\leq$ or $\\geq$).',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating a Piecewise Function',
            items: [
              'Read the input value.',
              'Check each condition to determine which interval contains the input.',
              'Pay attention to whether the boundary uses $<$/$>$ (strict) or $\\leq$/$\\geq$ (inclusive).',
              'Substitute the input into the matching rule and simplify.',
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
            problem: 'Let $f(x) = \\begin{cases} x + 6 & \\text{if } x \\leq 2 \\\\ 3x & \\text{if } x > 2 \\end{cases}$. Find $f(2) + f(5)$.',
            steps: [
              { label: '$f(2)$', content: 'Since $2 \\leq 2$, use the first rule: $f(2) = 2 + 6 = 8$' },
              { label: '$f(5)$', content: 'Since $5 > 2$, use the second rule: $f(5) = 3(5) = 15$' },
              { label: 'Add', content: '$f(2) + f(5) = 8 + 15 = 23$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'If $g(x) = \\begin{cases} -2x & \\text{if } x < 0 \\\\ x^2 + 1 & \\text{if } x \\geq 0 \\end{cases}$, what is $g(-3) + g(2)$?',
            answer: '$g(-3)$: since $-3 < 0$, use $-2(-3) = 6$. $g(2)$: since $2 \\geq 0$, use $(2)^2 + 1 = 5$. Sum: $6 + 5 = 11$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'functions',
    title: 'Complex Functions Example #3 (Polynomial)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Higher-degree polynomial functions: evaluate, factor, or apply the Remainder Theorem to find values and zeros.',
        blocks: [
          {
            type: 'text',
            content: 'A polynomial function like $p(x) = x^3 - 4x^2 + x + 6$ follows the same evaluation rules as simpler functions, but the higher degree introduces more zeros and more computation. The **Remainder Theorem** provides a shortcut: when $p(x)$ is divided by $(x - a)$, the remainder equals $p(a)$.',
          },
          {
            type: 'formula',
            label: 'Remainder Theorem',
            content: '$$\\text{If } p(x) \\div (x - a), \\text{ then remainder} = p(a)$$',
          },
          {
            type: 'keyInsight',
            content: 'A direct consequence: if $p(a) = 0$, then $(x - a)$ is a **factor** of $p(x)$. This is the Factor Theorem. The SAT uses it in reverse: "If $(x - 3)$ is a factor of $p(x)$, what is the value of $p(3)$?" The answer is always $0$.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Factor Theorem on the SAT',
            content: 'Recognition cue: "$(x - c)$ is a factor of $p(x)$" or "the remainder when $p(x)$ is divided by $(x - c)$." First move: for the factor statement, set $p(c) = 0$ and solve. For the remainder, evaluate $p(c)$ directly -- that numerical result is the remainder.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error with $(x - a)$',
            wrong: '"$(x + 2)$ is a factor." Student plugs in $x = 2$.',
            correction: '$(x + 2) = (x - (-2))$, so $a = -2$. Plug in $x = -2$, not $x = 2$. Always negate the constant inside the factor to find the zero.',
          },
          {
            type: 'tip',
            content: 'To find the value to substitute: set the factor equal to zero. $(x - 5) = 0 \\Rightarrow x = 5$. $(x + 3) = 0 \\Rightarrow x = -3$. This eliminates sign confusion.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using the Remainder/Factor Theorem',
            items: [
              'Identify the factor or divisor: $(x - a)$.',
              'Set the factor equal to zero to find $a$: $x - a = 0 \\Rightarrow x = a$.',
              'Evaluate $p(a)$ by substituting $a$ into the polynomial.',
              'If the problem states $(x - a)$ is a factor, set $p(a) = 0$ and solve for any unknown coefficients.',
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
            problem: 'If $(x - 2)$ is a factor of $p(x) = x^3 + kx^2 - 8x + 4$, what is the value of $k$?',
            steps: [
              { label: 'Apply Factor Theorem', content: 'Since $(x - 2)$ is a factor, $p(2) = 0$.' },
              { label: 'Substitute $x = 2$', content: '$(2)^3 + k(2)^2 - 8(2) + 4 = 0$' },
              { label: 'Simplify', content: '$8 + 4k - 16 + 4 = 0$' },
              { label: 'Combine', content: '$4k - 4 = 0$' },
              { label: 'Solve', content: '$k = 1$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'What is the remainder when $p(x) = x^3 - 3x + 5$ is divided by $(x + 1)$?',
            answer: 'Set $x + 1 = 0 \\Rightarrow x = -1$. Evaluate: $p(-1) = (-1)^3 - 3(-1) + 5 = -1 + 3 + 5 = 7$. The remainder is $7$.',
          },
        ],
      },
    },
  },

};
