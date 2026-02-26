export const functionsLessonTabs = {

  1: {
    moduleId: 'functions',
    title: 'What Is a Function?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A function is a rule that assigns exactly one output to every input — the single most tested idea in SAT algebra.',
        blocks: [
          {
            type: 'text',
            content: 'Think of a function as a **machine**: you feed in a number (the **input**), the machine follows a rule, and it spits out exactly **one** number (the **output**). If the same input could produce two different outputs, the rule is *not* a function.',
          },
          {
            type: 'keyInsight',
            content: 'The **domain** is the set of all allowed inputs ($x$-values). The **range** is the set of all possible outputs ($y$-values). On the SAT, domain restrictions usually come from division by zero or square roots of negatives.',
          },
          {
            type: 'table',
            title: 'Function vs. Not a Function',
            headers: ['Rule', 'Function?', 'Why?'],
            rows: [
              ['$y = 2x + 1$', 'Yes', 'Every $x$ gives exactly one $y$'],
              ['$y^2 = x$ (solved for $y$)', 'No', '$x = 4$ gives $y = 2$ and $y = -2$'],
              ['$y = \\pm\\sqrt{x}$', 'No', 'Two outputs for each positive input'],
              ['$y = x^2$', 'Yes', 'Even though $x = 3$ and $x = -3$ both give $9$, each input still maps to one output'],
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
            title: '"For How Many Values of $x$…"',
            content: 'Recognition cue: "for how many values of $x$ does $f(x) = k$" is a reverse-lookup problem. First move: scan the output column of the table (or draw $y = k$ on the graph) and count intersections. Each intersection is one valid $x$-value.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Forward and Reverse',
            wrong: '"$f(x) = 3$" — student plugs $3$ into the function instead of searching for outputs equal to $3$.',
            correction: '$f(x) = 3$ means "which inputs produce output $3$?" You search the output column for $3$, not the input column. $f(3)$ (no equation) would be the forward lookup.',
          },
          {
            type: 'tip',
            content: 'Decision rule: $f(3)$ → go to input $3$, read the output. $f(x) = 3$ → find every input whose output is $3$. The position of the number (inside parentheses vs. after the equals sign) determines the direction of the lookup.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing "Two Inputs → Same Output" with "Not a Function"',
            wrong: 'Students see $f(2) = 4$ and $f(-2) = 4$ and think it fails the function test.',
            correction: 'Different inputs **can** share the same output. A function only fails when **one input** produces **multiple outputs**. $f(x) = x^2$ is a perfectly valid function.',
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
        summary: 'Function notation $f(x)$ is just a compact way to name a rule and specify its input — it is not multiplication.',
        blocks: [
          {
            type: 'text',
            content: 'When you see $f(x) = 3x - 7$, read it as "the function $f$, applied to input $x$, gives $3x - 7$." The letter $f$ is the name of the rule; the parentheses hold the input — they do **not** mean multiply.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '🏷️', label: 'f', description: 'Name of the function (could be g, h, p …)' },
              { icon: '📥', label: '(x)', description: 'Input slot — whatever you place here gets substituted everywhere x appears' },
              { icon: '📤', label: '= 3x − 7', description: 'Output rule — the recipe applied to the input' },
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Interpreting $f(a) = b$',
            content: 'The statement $f(a) = b$ means: "When the input is $a$, the output is $b$." On a graph, this corresponds to the point $(a, b)$.',
          },
        ],
      },
      methods: {
        title: 'Evaluating with Notation',
        summary: 'Replace every $x$ in the rule with whatever sits inside the parentheses.',
        blocks: [
          {
            type: 'steps',
            title: 'Evaluating $f(3)$ when $f(x) = 2x^2 - x + 4$',
            items: [
              'Write the rule: $f(x) = 2x^2 - x + 4$',
              'Replace every $x$ with $3$: $f(3) = 2(3)^2 - (3) + 4$',
              'Compute: $= 2(9) - 3 + 4 = 18 - 3 + 4 = 19$',
              'Answer: $f(3) = 19$',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $g(x) = x^2 + 2x$, what is $g(a+1)$?',
            steps: [
              { label: 'Substitute', content: 'Replace $x$ with $(a+1)$: $g(a+1) = (a+1)^2 + 2(a+1)$' },
              { label: 'Expand', content: '$= a^2 + 2a + 1 + 2a + 2$' },
              { label: 'Simplify', content: '$= a^2 + 4a + 3$' },
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
            title: 'Graph Reading: Forward vs. Reverse',
            content: '"What is $f(2)$?" → go to $x = 2$, read the $y$-value. "For what value of $x$ is $f(x) = 2$?" → draw $y = 2$ mentally, find where it crosses the graph, read the $x$-value(s). The question stem tells you which axis to start from.',
          },
          {
            type: 'trapCard',
            title: 'Reading $f(x) = 2$ as $f(2)$',
            wrong: 'Student reads "$f(x) = 2$" and plugs $2$ into the function.',
            correction: '$f(x) = 2$ asks "which inputs give output $2$?" — search horizontally at $y = 2$. $f(2)$ asks "what is the output at input $2$?" — search vertically at $x = 2$. They are opposite operations.',
          },
          {
            type: 'tip',
            content: 'On graph questions, trace your finger along the correct axis first. Forward ($f(a)$): start on the $x$-axis, go vertical to the curve, read $y$. Reverse ($f(x) = b$): start on the $y$-axis, go horizontal to the curve, read $x$.',
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
            content: 'You already know the basic move: replace $x$ with a number and compute. SAT-level evaluation ramps up with **expressions as inputs**, **nested functions**, and **using outputs to find unknowns**.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Numeric input', formula: '$f(3)$', note: 'Plug in 3 for every x' },
              { label: 'Expression input', formula: '$f(2a)$', note: 'Plug in 2a for every x' },
              { label: 'Nested', formula: '$f(g(x))$', note: 'Evaluate g(x) first, feed result into f' },
            ],
          },
        ],
      },
      methods: {
        title: 'Substitution Techniques',
        summary: 'From simple plug-in to composition — master the three levels the SAT tests.',
        blocks: [
          {
            type: 'steps',
            title: 'Nested Function Evaluation',
            items: [
              'Given $f(x) = x + 5$ and $g(x) = 2x$, find $f(g(3))$',
              '**Inner first:** $g(3) = 2(3) = 6$',
              '**Outer next:** $f(6) = 6 + 5 = 11$',
              'Answer: $f(g(3)) = 11$',
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Let $h(x) = 3x - 1$. If $h(k) = 14$, what is $k$?',
            steps: [
              { label: 'Set up', content: '$h(k) = 3k - 1 = 14$' },
              { label: 'Solve', content: '$3k = 15$, so $k = 5$' },
              { label: 'Verify', content: '$h(5) = 3(5) - 1 = 14$ ✓' },
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
            title: 'Composition: Inside-Out',
            content: 'Recognition cue: nested parentheses like $f(g(x))$ or $g(f(3))$. First move: **always evaluate the innermost function first**. For $g(f(3))$: compute $f(3)$ to get a number, then feed that number into $g$.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Order of Evaluation',
            wrong: 'For $f(g(3))$, student computes $f(3)$ first, then feeds that into $g$.',
            correction: '$f(g(3))$ reads "apply $g$ first, then $f$." Evaluate the inner function ($g(3)$) first, then use that result as the input to the outer function ($f$).',
          },
          {
            type: 'tip',
            content: 'Decision rule: if the input is a number ($g(f(2))$), evaluate step by step — inner first, then outer. If the input is $x$ ($f(g(x))$), replace every $x$ in the outer function with the full inner expression and simplify algebraically.',
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
    },
  },

};
