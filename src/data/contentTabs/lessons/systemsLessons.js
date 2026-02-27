export const systemsLessonTabs = {

  1: {
    moduleId: 'systems',
    title: 'What Is a System of Equations?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A system is two (or more) equations with the same variables — the solution must satisfy both simultaneously.',
        blocks: [
          {
            type: 'text',
            content: 'Imagine two friends each giving you a clue about two mystery numbers $x$ and $y$. One says $x + y = 10$. The other says $x - y = 4$. Neither clue alone pins down both numbers, but **together** they force $x = 7$ and $y = 3$. That pair is the **solution** to the system.',
          },
          {
            type: 'keyInsight',
            content: 'Graphically, each equation is a line. The **solution** to the system is the **intersection point** — the one $(x, y)$ pair that lies on both lines at the same time.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'System Notation',
            content: '$$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$$\nThe brace means "solve these together." The answer is the $(x, y)$ that makes **both** equations true.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"Find $x$" — Not "$x$ and $y$"',
            content: 'Recognition cue: if the question asks for only **one** variable, you may not need to solve the full system. First move: try adding or subtracting the equations — often one variable cancels immediately, giving the asked-for variable directly.',
          },
          {
            type: 'trapCard',
            title: 'Solving for the Wrong Variable',
            wrong: 'Question asks "What is $x$?" Student solves the system, finds $y = 3$, and selects $3$ as the answer.',
            correction: 'Circle what the question asks before you start. If you solved for $y$ first, back-substitute to get $x$. The answer is $x$, not $y$.',
          },
          {
            type: 'tip',
            content: 'Decision rule: if the question asks for $x + y$ or $x - y$, try adding or subtracting the equations directly. If it asks for a single variable, elimination targeting that variable is fastest. Only use substitution when one variable is already isolated.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Solve the system: $x + y = 10$ and $x - y = 4$.',
            steps: [
              { label: 'Add equations', content: '$(x + y) + (x - y) = 10 + 4$ → $2x = 14$ → $x = 7$' },
              { label: 'Back-substitute', content: '$7 + y = 10$ → $y = 3$' },
              { label: 'Verify', content: '$7 - 3 = 4$ ✓ and $7 + 3 = 10$ ✓' },
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'systems',
    title: 'Types of Solutions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A system of two linear equations has exactly one solution, no solution, or infinitely many — nothing else is possible.',
        blocks: [
          {
            type: 'text',
            content: 'Two lines in a plane can relate in only three ways: they **cross** at one point, they run **parallel** and never meet, or they are **the same line** stacked on top of each other.',
          },
          {
            type: 'table',
            title: 'Three Possible Outcomes',
            headers: ['Outcome', 'Geometry', 'Slopes', 'What Happens Algebraically'],
            rows: [
              ['One solution', 'Lines intersect', 'Different slopes', 'You get a single $(x, y)$ pair'],
              ['No solution', 'Lines are parallel', 'Same slope, different intercepts', 'Variables cancel; you get a false statement like $0 = 5$'],
              ['Infinite solutions', 'Lines are identical', 'Same slope AND same intercept', 'Variables cancel; you get a true identity like $0 = 0$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'When the SAT says "the system has no solution," it means the lines are **parallel**: same slope, different $y$-intercepts. Use this to set coefficients equal and solve for unknowns.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"For What Value of $k$…" = Solution-Count Problem',
            content: 'Recognition cue: whenever $k$ appears inside a system and the question specifies "no solution" or "infinitely many solutions," you are being asked to set coefficient ratios. First move: write both equations as $Ax + By = C$ and compare the ratios $\\frac{A_1}{A_2}$, $\\frac{B_1}{B_2}$, $\\frac{C_1}{C_2}$.',
          },
          {
            type: 'trapCard',
            title: 'No Solution vs. Infinite Solutions',
            wrong: 'Student sees $0 = 0$ after elimination and writes "no solution."',
            correction: '$0 = 0$ (a true identity) means **infinitely many solutions** — the equations are the same line. $0 = 5$ (a contradiction) means **no solution** — the lines are parallel.',
          },
          {
            type: 'tip',
            content: 'Decision rule: "no solution" → slopes equal, intercepts different ($\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$). "Infinitely many" → all three ratios equal ($\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$). The third ratio is what distinguishes the two cases.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Mixing Up No Solution and Infinite Solutions',
            wrong: 'Student sees $0 = 0$ after solving and writes "no solution."',
            correction: '$0 = 0$ is a **true** identity — that means **infinitely many** solutions. A **false** statement like $0 = 7$ means no solution.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'systems',
    title: 'Writing Systems from Word Problems',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The hardest part of a word-problem system is translation — once you have two equations, the algebra is routine.',
        blocks: [
          {
            type: 'text',
            content: 'Every system word problem gives you **two unknowns** and **two relationships**. Your job is to assign variables, then turn each relationship into an equation.',
          },
          {
            type: 'steps',
            title: 'Translation Framework',
            items: [
              '**Define variables** — pick letters and write what they represent (e.g., $a$ = adult tickets, $c$ = child tickets)',
              '**Find relationship 1** — usually a total count: $a + c = 200$',
              '**Find relationship 2** — usually a total value/cost: $15a + 8c = 2{,}340$',
              '**Solve** the resulting system using substitution or elimination',
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
            title: 'Two-Equation Template',
            content: 'Recognition cue: any word problem with two unknowns and two totals (count + value, or two different constraints) is a system. First move: assign one variable per unknown, then write the **count** equation (items add up) and the **value** equation (dollars/weights add up).',
          },
          {
            type: 'trapCard',
            title: 'Swapping Coefficients',
            wrong: '"Muffins cost \\$3 and cookies \\$2" → student writes $2m + 3c$ instead of $3m + 2c$.',
            correction: 'Each price multiplies its own item. \\$3 per muffin → $3m$, \\$2 per cookie → $2c$. Label variables right after defining them to avoid this swap.',
          },
          {
            type: 'tip',
            content: '"Total number of" → count equation (coefficients are $1$). "Total value/cost of" → value equation (coefficients are the per-item prices). These two phrases are the signal to write two separate equations.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Swapping Coefficients',
            wrong: '"Muffins cost \\$3 and cookies \\$2" → student writes $2m + 3c$ instead of $3m + 2c$.',
            correction: 'The **price** attaches to the **matching item**. \\$3 per muffin → coefficient of $m$ is $3$.',
          },
          {
            type: 'trapCard',
            title: 'Answering the Wrong Variable',
            wrong: 'Student correctly finds $c = 30$ but the question asked for muffins.',
            correction: 'Always re-read the final question before choosing your answer. Circle what they ask for.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'systems',
    title: 'Solving by Substitution',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Substitution turns a two-variable system into a single-variable equation by replacing one variable with an expression.',
        blocks: [
          {
            type: 'text',
            content: 'The idea is simple: if one equation already tells you what $y$ equals in terms of $x$ (or vice versa), **plug** that expression into the other equation. Now you have one equation with one unknown — and you already know how to solve those.',
          },
          {
            type: 'keyInsight',
            content: 'Substitution is fastest when one equation is already solved for a variable (like $y = 3x + 2$) or can be solved in one step (like $x = 7 - y$). If neither variable is easy to isolate, elimination is usually quicker.',
          },
        ],
      },
      methods: {
        title: 'Step-by-Step Method',
        blocks: [
          {
            type: 'steps',
            title: 'Substitution Procedure',
            items: [
              '**Isolate** one variable in one equation (pick the one with coefficient $1$ or $-1$)',
              '**Substitute** that expression into the other equation',
              '**Solve** the resulting single-variable equation',
              '**Back-substitute** to find the other variable',
              '**Check** both values in both original equations',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $y = 2x - 1$ and $3x + 2y = 16$',
            steps: [
              { label: 'Substitute', content: '$3x + 2(2x - 1) = 16$' },
              { label: 'Distribute', content: '$3x + 4x - 2 = 16$' },
              { label: 'Solve for x', content: '$7x = 18$ → $x = \\frac{18}{7}$' },
              { label: 'Find y', content: '$y = 2\\left(\\frac{18}{7}\\right) - 1 = \\frac{36}{7} - \\frac{7}{7} = \\frac{29}{7}$' },
              { label: 'Verify', content: '$3\\left(\\frac{18}{7}\\right) + 2\\left(\\frac{29}{7}\\right) = \\frac{54 + 58}{7} = \\frac{112}{7} = 16$ ✓' },
            ],
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: 'When Substitution Is Fastest', content: 'Recognition cue: one equation already has a variable isolated ($y = ...$, $x = ...$) or has a coefficient of $1$ or $-1$. First move: solve that equation for the isolated variable and plug it into the other equation. This avoids the messy multiplications that elimination sometimes requires.' },
          { type: 'trapCard', title: 'Forgetting to Distribute', wrong: '$3x + 2(2x - 1) = 16$ → student writes $3x + 4x - 1 = 16$ instead of $3x + 4x - 2 = 16$.', correction: 'When substituting, distribute the outer coefficient to **every** term inside: $2 \\cdot 2x = 4x$ and $2 \\cdot (-1) = -2$.' },
          { type: 'tip', content: '**Decision rule:** Variable already isolated → substitution. Both equations in standard form with matching coefficients → elimination. Messy coefficients and only need a numerical answer → DESMOS.' },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Forgetting to Distribute',
            wrong: '$3x + 2(2x - 1) = 16$ → student writes $3x + 4x - 1 = 16$, forgetting to multiply $-1$ by $2$.',
            correction: 'Distribute the outer coefficient to **every** term inside the parentheses: $2 \\cdot 2x = 4x$ and $2 \\cdot (-1) = -2$.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'systems',
    title: 'Solving by Elimination',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Elimination adds or subtracts equations so that one variable cancels out entirely.',
        blocks: [
          {
            type: 'text',
            content: 'Instead of substituting, you **stack** the two equations and add (or subtract) them. If the coefficients of one variable are opposites, that variable disappears. If they\'re not opposites yet, multiply one or both equations first to create matching (or opposite) coefficients.',
          },
          {
            type: 'keyInsight',
            content: 'Elimination shines when both equations are in standard form ($Ax + By = C$) and neither variable is already isolated. It avoids the messy fractions that substitution can produce.',
          },
        ],
      },
      methods: {
        title: 'Step-by-Step Method',
        blocks: [
          {
            type: 'steps',
            title: 'Elimination Procedure',
            items: [
              '**Align** both equations in $Ax + By = C$ form',
              '**Multiply** one or both equations so one variable has equal-and-opposite coefficients',
              '**Add** the equations — the targeted variable cancels',
              '**Solve** for the remaining variable',
              '**Back-substitute** to find the eliminated variable',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $2x + 3y = 12$ and $4x - 3y = 6$.',
            steps: [
              { label: 'Observe', content: '$3y$ and $-3y$ are already opposites — just add!' },
              { label: 'Add', content: '$6x = 18$ → $x = 3$' },
              { label: 'Back-substitute', content: '$2(3) + 3y = 12$ → $3y = 6$ → $y = 2$' },
              { label: 'Verify', content: '$4(3) - 3(2) = 12 - 6 = 6$ ✓' },
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
            title: 'Elimination First-Move',
            content: 'Recognition cue: both equations are in $Ax + By = C$ form and share a common coefficient. First move: add or subtract the equations to cancel the matching term. If coefficients don\'t match yet, multiply one equation to create opposites before adding.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting Instead of Adding (or Vice Versa)',
            wrong: 'Coefficients $+2y$ and $+2y$ — student adds the equations, getting $8x + 4y = 32$, and nothing cancels.',
            correction: 'Same-sign matching coefficients require **subtraction** to cancel. Opposite signs require **addition**. Check the signs before choosing your operation.',
          },
          {
            type: 'strategyCard',
            title: 'Ask-for-Sum Shortcut',
            icon: '⚡',
            timing: '~15s',
            content: 'When the question asks for $x + y$ (not individual variables), try adding the equations directly — the left side often simplifies to a multiple of $x + y$ immediately, requiring no variable isolation at all.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'systems',
    title: 'Solving with DESMOS',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'On the digital SAT, the built-in DESMOS graphing calculator can solve systems visually in seconds.',
        blocks: [
          {
            type: 'text',
            content: 'DESMOS is available on every question of the SAT math section. For systems, you can type both equations directly — DESMOS graphs them and displays the intersection point on screen. No algebra required.',
          },
          {
            type: 'keyInsight',
            content: 'This is not a "lazy" method — it is a **time-saving strategy** endorsed by the test format itself. Use algebraic methods when the numbers are clean; use DESMOS when fractions, decimals, or messy coefficients slow you down.',
          },
        ],
      },
      methods: {
        title: 'DESMOS Procedure',
        blocks: [
          {
            type: 'steps',
            title: 'Graphing a System in DESMOS',
            items: [
              '**Line 1**: Type the first equation exactly as given (e.g., $2x + 3y = 12$)',
              '**Line 2**: Type the second equation (e.g., $x - y = 1$)',
              '**Click** the intersection point — DESMOS highlights it and shows $(x, y)$ coordinates',
              '**Read** the answer and enter it',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Watch for Zoom Issues',
            content: 'If you don\'t see the intersection, the default window might not cover it. Zoom out (pinch or scroll) or adjust the axis range by clicking the wrench icon. Intersections far from the origin are easy to miss.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          { type: 'callout', variant: 'info', title: 'DESMOS for Systems: The 20-Second Solve', content: 'Recognition cue: any system where the answer choices are numerical $(x, y)$ pairs. First move: type both equations into DESMOS, click the intersection point, read the coordinates. This works for linear, quadratic, and even mixed systems.' },
          { type: 'trapCard', title: 'Intersection Outside Default View', wrong: 'Student types both equations but sees no intersection — concludes "no solution."', correction: 'The intersection may exist beyond the default window. Zoom out (scroll or pinch) or click the wrench to expand the axis range. Only conclude "no solution" if the lines are clearly parallel.' },
          { type: 'tip', content: '**When to skip DESMOS:** If the question asks for an expression like $2x + y$ (not a simple coordinate), algebra is faster because DESMOS doesn\'t directly compute combined expressions. Use DESMOS to find $x$ and $y$ individually, then combine.' },
        ],
      },
      speedStrategy: {
        title: 'When to Use DESMOS vs. Algebra',
        blocks: [
          {
            type: 'comparison',
            title: 'DESMOS vs. By-Hand',
            items: [
              { label: 'Use DESMOS When…', content: '• Coefficients are large or fractional\n• The question only asks for a numerical answer\n• You want a quick check of your algebraic work' },
              { label: 'Use Algebra When…', content: '• The question asks for an expression (like $x + y$)\n• Coefficients cancel nicely\n• You need to find a parameter like $k$' },
            ],
          },
          {
            type: 'tip',
            content: 'Even when solving algebraically, plug your answer into DESMOS to verify. A 5-second check can prevent a careless error from costing you a point.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'systems',
    title: 'Infinite Solutions & Parametric Form',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'When two equations describe the exact same line, every point on that line is a solution — the system has infinitely many.',
        blocks: [
          {
            type: 'text',
            content: 'If you can multiply one equation by a constant and get the other equation, they are **the same line in disguise**. There is no single intersection point because the lines overlap everywhere.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Proportionality Test',
            content: 'For $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$, infinite solutions occur when:\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$\nAll three ratios must be **equal**. If the first two match but the third doesn\'t, you get **no solution** instead.',
          },
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Does the system $x + 2y = 6$ and $3x + 6y = 18$ have infinite solutions?',
            steps: [
              { label: 'Check ratios', content: '$\\frac{1}{3} = \\frac{2}{6} = \\frac{6}{18}$ → all equal $\\frac{1}{3}$' },
              { label: 'Conclusion', content: 'Yes — the second equation is simply $3$ times the first. Every $(x, y)$ on $x + 2y = 6$ is a solution.' },
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
            title: '"Infinitely Many Solutions" = Same Line',
            content: 'Recognition cue: "infinitely many solutions" means both equations are the same line in disguise. First move: find the multiplier between the left-side coefficients, then apply that same multiplier to the constant. If $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = k$, then $c_2 = k \\cdot c_1$.',
          },
          {
            type: 'trapCard',
            title: 'Only Checking Two Ratios',
            wrong: 'Student sees $\\frac{2}{6} = \\frac{5}{15} = \\frac{1}{3}$ and declares infinite solutions without checking the constant.',
            correction: 'Two matching ratios with a mismatched constant ($\\frac{c_1}{c_2} \\neq \\frac{1}{3}$) means **no solution**, not infinite. All three ratios must agree.',
          },
          {
            type: 'tip',
            content: 'Shortcut: find the multiplier $k$ from any pair of matching coefficients, then compute $c = k \\times$ the other constant. No need to compare all three ratios explicitly — just multiply through.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Checking Only Two Ratios',
            wrong: 'Student sees $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$ and concludes infinite solutions without checking the constant ratio.',
            correction: 'Two matching ratios with a different constant ratio means **no solution** (parallel lines), not infinite. You must verify all three ratios match.',
          },
        ],
      },
    },
  },

};
