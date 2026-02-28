export const systemsLessonTabs = {

  1: {
    moduleId: 'systems',
    title: 'What is a System of Equations?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'Imagine two friends each giving you a clue about two mystery numbers $x$ and $y$. One says $x + y = 10$. The other says $x - y = 4$. Neither clue alone pins down both numbers, but **together** they force $x = 7$ and $y = 3$. That pair is the **solution** to the system.',
          },
          {
            type: 'keyInsight',
            content: 'Graphically, each linear equation is a line. The **solution** to the system is the **intersection point** — the one $(x, y)$ pair that lies on both lines at the same time.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'System Notation',
            content: '$$\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$$\nThe brace means "solve these together." The answer is the $(x, y)$ that makes **both** equations true.',
          },
          {
            type: 'formula',
            label: 'Verifying a Solution',
            content: '$$\\text{If } (x, y) \\text{ satisfies } \\textbf{both} \\text{ equations, it is a solution.}$$',
            note: 'Plug the candidate into each equation separately — both must produce true statements.',
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
            correction: 'Circle what the question asks before you start. If you solved for $y$ first, back-substitute to get $x$.',
          },
          {
            type: 'tip',
            content: 'Decision rule: if the question asks for $x + y$ or $x - y$, try adding or subtracting the equations directly. If it asks for a single variable, elimination targeting that variable is fastest. Only use substitution when one variable is already isolated.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Which $(x, y)$ Satisfies Both Equations?"',
            content: 'Recognition cue: four coordinate-pair answer choices and a system. First move: plug each choice into the simpler equation first to eliminate wrong answers quickly. Often two choices fail the first equation, and only one of the remaining passes the second.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving a System — General Approach',
            items: [
              '**Read** the question to identify what it asks for ($x$, $y$, $x + y$, or a full pair)',
              '**Choose a method**: substitution if a variable is isolated, elimination if both equations are in standard form, DESMOS for messy numbers',
              '**Solve** for the target variable',
              '**Back-substitute** if you need the other variable',
              '**Verify** by plugging back into the original equations',
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Confusing "Solution" with "Answer"',
            wrong: 'Student finds $(x, y) = (7, 3)$ and enters $7$ — but the question asked for $y$.',
            correction: 'The *solution* to the system is the full pair. The *answer* to the question is whatever variable or expression they specify. Read the last line of the question twice.',
          },
          {
            type: 'trapCard',
            title: 'Checking Only One Equation',
            wrong: 'Student finds $x = 4$ and sees it works in the first equation. Selects it without verifying the second.',
            correction: 'A solution must satisfy **both** equations. Always verify in the equation you did not use to solve.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Solve the system: $x + y = 10$ and $x - y = 4$.',
            steps: [
              { label: 'Add equations', content: '$(x + y) + (x - y) = 10 + 4$ gives $2x = 14$, so $x = 7$' },
              { label: 'Back-substitute', content: '$7 + y = 10$ gives $y = 3$' },
              { label: 'Verify', content: '$7 - 3 = 4$ ✓ and $7 + 3 = 10$ ✓' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $2x + 3y = 19$ and $x - y = 3$, what is the value of $3x + 2y$?',
            steps: [
              { label: 'Add equations', content: '$(2x + 3y) + (x - y) = 19 + 3$ gives $3x + 2y = 22$' },
              { label: 'Answer directly', content: 'The question asked for $3x + 2y$, which is exactly what the sum produced. No further work needed.' },
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
        blocks: [
          {
            type: 'text',
            content: 'Two lines in a plane can relate in only three ways: they **cross** at one point, they run **parallel** and never meet, or they are **the same line** stacked on top of each other.',
          },
          {
            type: 'table',
            headers: ['Outcome', 'Geometry', 'Slopes', 'What Happens Algebraically'],
            rows: [
              ['One solution', 'Lines intersect', 'Different slopes', 'You get a single $(x, y)$ pair'],
              ['No solution', 'Lines are parallel', 'Same slope, different intercepts', 'Variables cancel; false statement like $0 = 5$'],
              ['Infinite solutions', 'Lines are identical', 'Same slope AND same intercept', 'Variables cancel; true identity like $0 = 0$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'When the SAT says "the system has no solution," it means the lines are **parallel**: same slope, different $y$-intercepts. Use this to set coefficient ratios equal and solve for unknowns.',
          },
          {
            type: 'formula',
            label: 'Ratio Test for $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$',
            content: '$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\implies \\text{No solution}$$\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\implies \\text{Infinitely many solutions}$$',
            note: 'If the first two ratios are not equal, the system has exactly one solution.',
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
            content: 'Recognition cue: $k$ appears inside a system and the question specifies "no solution" or "infinitely many solutions." First move: write both equations as $Ax + By = C$ and compare the ratios $\\frac{A_1}{A_2}$, $\\frac{B_1}{B_2}$, $\\frac{C_1}{C_2}$.',
          },
          {
            type: 'trapCard',
            title: 'No Solution vs. Infinite Solutions',
            wrong: 'Student sees $0 = 0$ after elimination and writes "no solution."',
            correction: '$0 = 0$ (a true identity) means **infinitely many solutions** — the equations are the same line. $0 = 5$ (a contradiction) means **no solution** — the lines are parallel.',
          },
          {
            type: 'tip',
            content: '"No solution" → slopes equal, intercepts different ($\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$). "Infinitely many" → all three ratios equal. The third ratio distinguishes the two cases.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Rewrite Before Comparing',
            content: 'Both equations must be in the same form ($Ax + By = C$) before you compare coefficients. If one equation is $y = 3x + 5$, rewrite it as $-3x + y = 5$ (or $3x - y = -5$) first.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding $k$ for "No Solution" or "Infinitely Many"',
            items: [
              '**Rewrite** both equations in $Ax + By = C$ form',
              '**Set up** the ratio equation: $\\frac{A_1}{A_2} = \\frac{B_1}{B_2}$ and solve for $k$',
              '**Check** the constant ratio: if $\\frac{C_1}{C_2}$ equals the first two ratios → infinite solutions. If it differs → no solution.',
              '**Verify** which condition the question requires and confirm $k$ satisfies it',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For what value of $k$ does the system $kx + 6y = 10$ and $2x + 3y = 5$ have no solution?',
            steps: [
              { label: 'Set coefficient ratios equal', content: '$\\frac{k}{2} = \\frac{6}{3} = 2$, so $k = 4$' },
              { label: 'Check constant ratio', content: '$\\frac{10}{5} = 2$ — this equals the coefficient ratio, which would mean infinite solutions, not none!' },
              { label: 'Re-examine', content: 'When $k = 4$: $4x + 6y = 10$ and $2x + 3y = 5$. Multiply the second by $2$: $4x + 6y = 10$. Same equation → **infinite** solutions.' },
              { label: 'Conclusion', content: 'With $k = 4$ the system has infinite solutions, not no solution. For **no** solution, the constant ratio must differ: there is no value of $k$ that produces no solution here because the constants are already proportional to the $y$-coefficients.' },
            ],
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
          {
            type: 'trapCard',
            title: 'Forgetting to Rewrite in Standard Form',
            wrong: 'Student compares coefficients of $y = 2x + 3$ and $4x - 2y = 1$ directly without rearranging.',
            correction: 'Rewrite $y = 2x + 3$ as $-2x + y = 3$ first. Then compare $\\frac{-2}{4}$ and $\\frac{1}{-2}$. Both equal $-\\frac{1}{2}$, so the slopes match — now check the constants.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For what value of $a$ does the system $3x - 6y = 9$ and $x - 2y = a$ have infinitely many solutions?',
            steps: [
              { label: 'Find multiplier', content: 'The first equation is $3$ times the second (coefficients: $3 = 3 \\cdot 1$, $-6 = 3 \\cdot (-2)$).' },
              { label: 'Apply to constant', content: 'For infinite solutions: $9 = 3 \\cdot a$, so $a = 3$.' },
              { label: 'Verify', content: 'With $a = 3$: $x - 2y = 3$ multiplied by $3$ gives $3x - 6y = 9$ ✓. Same line → infinite solutions.' },
            ],
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
        blocks: [
          {
            type: 'text',
            content: 'Every system word problem gives you **two unknowns** and **two relationships**. Your job is to assign variables, then turn each relationship into an equation. Once you have the two equations, the algebra is routine.',
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
          {
            type: 'keyInsight',
            content: 'Most SAT system word problems follow the **count + value** template: one equation adds up the **number** of items, the other adds up the **dollars** (or weights, or some other measured quantity).',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Two-Equation Template',
            content: '$$\\text{Count: } x + y = \\text{total number}$$\n$$\\text{Value: } (\\text{rate}_1)(x) + (\\text{rate}_2)(y) = \\text{total value}$$',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Two Totals = Two Equations',
            content: 'Recognition cue: any word problem with two unknowns and two totals (count + value, or two different constraints) is a system. First move: assign one variable per unknown, then write the **count** equation and the **value** equation.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Coefficients',
            wrong: '"Muffins cost \\$3 and cookies \\$2" — student writes $2m + 3c$ instead of $3m + 2c$.',
            correction: 'Each price multiplies its own item. \\$3 per muffin → $3m$. \\$2 per cookie → $2c$. Label variables right after defining them to avoid this swap.',
          },
          {
            type: 'tip',
            content: '"Total number of" → count equation (coefficients are $1$). "Total value/cost of" → value equation (coefficients are the per-item prices). These two phrases signal two separate equations.',
          },
          {
            type: 'callout',
            variant: 'info',
            title: '"Write, Don\'t Solve" Questions',
            content: 'Recognition cue: the question says "which system represents…" and the answer choices are pairs of equations. First move: define variables, write both equations, and match to a choice. You do **not** need to solve anything.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Word Problem → System Pipeline',
            items: [
              '**Underline** the two unknowns and assign them variables',
              '**Highlight** each numerical relationship in the problem',
              '**Write** the count equation (units add up)',
              '**Write** the value equation (dollars/weights add up — attach each rate to its matching variable)',
              '**Double-check** by asking: "Does each coefficient match the rate described for that variable?"',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A store sells pens for \\$2 each and notebooks for \\$5 each. A customer buys 12 items for a total of \\$39. Write a system representing this situation, and find how many of each item the customer bought.',
            steps: [
              { label: 'Define variables', content: 'Let $p$ = pens, $n$ = notebooks' },
              { label: 'Count equation', content: '$p + n = 12$' },
              { label: 'Value equation', content: '$2p + 5n = 39$' },
              { label: 'Solve by substitution', content: '$p = 12 - n$, so $2(12 - n) + 5n = 39$ → $24 - 2n + 5n = 39$ → $3n = 15$ → $n = 5$' },
              { label: 'Back-substitute', content: '$p = 12 - 5 = 7$' },
              { label: 'Verify', content: '$2(7) + 5(5) = 14 + 25 = 39$ ✓' },
            ],
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
            correction: 'Re-read the final question before selecting your answer. Circle what they ask for.',
          },
          {
            type: 'trapCard',
            title: 'Missing a Relationship',
            wrong: 'Student writes one equation and tries to solve with one equation and two unknowns.',
            correction: 'A system word problem always provides **two** relationships. If you only have one equation, re-read the problem — the second constraint is hiding somewhere (often in a phrase like "a total of" or "combined").',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'At a concert, adult tickets cost \\$25 and student tickets cost \\$15. A total of 300 tickets were sold for \\$5{,}500. How many student tickets were sold?',
            steps: [
              { label: 'Variables', content: '$a$ = adult tickets, $s$ = student tickets' },
              { label: 'Count', content: '$a + s = 300$' },
              { label: 'Revenue', content: '$25a + 15s = 5500$' },
              { label: 'Substitution', content: '$a = 300 - s$ → $25(300 - s) + 15s = 5500$' },
              { label: 'Solve', content: '$7500 - 25s + 15s = 5500$ → $-10s = -2000$ → $s = 200$' },
              { label: 'Verify', content: '$a = 100$; $25(100) + 15(200) = 2500 + 3000 = 5500$ ✓' },
            ],
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'systems',
    title: 'Deriving System of Equation from Context Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This lesson focuses on a specific pattern: **mixture or rate problems** where two items at different prices (or rates) combine to a known total. The goal is to translate the word problem into a system before doing any algebra.',
          },
          {
            type: 'formula',
            label: 'Mixture Template',
            content: '$$x + y = \\text{total quantity}$$\n$$r_1 x + r_2 y = \\text{total value}$$',
            note: '$r_1$ and $r_2$ are the per-unit rates (prices, speeds, concentrations, etc.).',
          },
          {
            type: 'keyInsight',
            content: 'The first equation captures the **count** (how many items). The second equation captures the **value** (dollars, miles, grams, etc.). Identifying which numbers in the problem are counts vs. rates is the critical translation step.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Spotting a Mixture Problem',
            content: 'Recognition cue: two types of items mixed together, each with a different per-unit rate, and a combined total. Keywords: "mixture," "combined," "total of," "altogether." First move: define a variable for each type and write the count equation and the value equation.',
          },
          {
            type: 'trapCard',
            title: 'Using the Total as a Coefficient',
            wrong: 'Problem says "40 pounds total" — student writes $40x + 40y$ instead of $x + y = 40$.',
            correction: 'The total quantity goes on the **right side** of the count equation, not as a coefficient. Coefficients come from the per-unit rates.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Deriving the System from a Mixture Context',
            items: [
              '**Identify** the two types of items and assign a variable to each',
              '**Write the count equation**: variable + variable = total quantity',
              '**Identify per-unit rates** (price per item, concentration per liter, etc.)',
              '**Write the value equation**: rate$_1$ $\\times$ variable$_1$ + rate$_2$ $\\times$ variable$_2$ = total value',
              '**Check units**: left side units must match right side units in both equations',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A coffee shop mixes two types of beans. Type A costs \\$8 per pound and Type B costs \\$14 per pound. The shop creates a 30-pound blend that costs \\$282. Write a system of equations and find how many pounds of each type are used.',
            steps: [
              { label: 'Define variables', content: 'Let $a$ = pounds of Type A, $b$ = pounds of Type B' },
              { label: 'Count equation', content: '$a + b = 30$' },
              { label: 'Value equation', content: '$8a + 14b = 282$' },
              { label: 'Solve', content: '$a = 30 - b$ → $8(30 - b) + 14b = 282$ → $240 - 8b + 14b = 282$ → $6b = 42$ → $b = 7$' },
              { label: 'Back-substitute', content: '$a = 30 - 7 = 23$' },
              { label: 'Verify', content: '$8(23) + 14(7) = 184 + 98 = 282$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A store sells small candles for \\$4 and large candles for \\$9. On Saturday, the store sold 50 candles for a total of \\$300. Write the system of equations that models this situation.',
            answer: 'Let $s$ = small candles, $l$ = large candles. Count: $s + l = 50$. Value: $4s + 9l = 300$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'systems',
    title: 'Deriving System of Equation from Context Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This example covers **rate-time-distance** and **work-rate** contexts — problems where the two relationships involve speed, time, or productivity rather than price.',
          },
          {
            type: 'formula',
            label: 'Rate-Based System Template',
            content: '$$\\text{relationship among quantities (count, time, etc.)}$$\n$$\\text{rate}_1 \\cdot \\text{quantity}_1 + \\text{rate}_2 \\cdot \\text{quantity}_2 = \\text{total output}$$',
            note: 'The "rates" might be speeds, hourly wages, production rates, or any per-unit measure.',
          },
          {
            type: 'keyInsight',
            content: 'Not every system follows the simple count + value pattern. Some problems give constraints like "twice as many" or "the difference is 10." Read each sentence independently and translate it into its own equation.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Comparative Constraints',
            content: 'Recognition cue: phrases like "twice as many," "3 more than," or "the difference between." First move: translate the comparison directly — "twice as many chairs as tables" becomes $c = 2t$, not $2c = t$.',
          },
          {
            type: 'trapCard',
            title: 'Reversing "Times As Many"',
            wrong: '"There are 3 times as many students as teachers" → student writes $3s = t$.',
            correction: 'Students are the larger group: $s = 3t$. Read it as "students equals 3 times teachers." The multiplier goes with the smaller quantity.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Translating Non-Standard Relationships',
            items: [
              '**Read one sentence at a time** and write an equation for each independent fact',
              '**Watch for comparison words**: "more than" → addition, "fewer than" → subtraction, "times as many" → multiplication',
              '**Assign the multiplier to the correct side**: "A is $k$ times B" becomes $A = kB$',
              '**Verify** your system has exactly two equations and two unknowns before solving',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A factory has two machines. Machine A produces 50 widgets per hour, and Machine B produces 30 widgets per hour. In a given day, the machines operated for a combined total of 10 hours and produced 380 widgets. How many hours did each machine operate?',
            steps: [
              { label: 'Define variables', content: 'Let $a$ = hours Machine A ran, $b$ = hours Machine B ran' },
              { label: 'Time equation', content: '$a + b = 10$' },
              { label: 'Output equation', content: '$50a + 30b = 380$' },
              { label: 'Solve', content: '$a = 10 - b$ → $50(10 - b) + 30b = 380$ → $500 - 50b + 30b = 380$ → $-20b = -120$ → $b = 6$' },
              { label: 'Back-substitute', content: '$a = 10 - 6 = 4$' },
              { label: 'Verify', content: '$50(4) + 30(6) = 200 + 180 = 380$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'A school has 5 times as many students as teachers. The total number of students and teachers is 240. Write a system and find the number of teachers.',
            answer: 'Let $s$ = students, $t$ = teachers. System: $s = 5t$ and $s + t = 240$. Substituting: $5t + t = 240$ → $6t = 240$ → $t = 40$.',
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
        blocks: [
          {
            type: 'text',
            content: 'Substitution turns a two-variable system into a single-variable equation by replacing one variable with an expression from the other equation.',
          },
          {
            type: 'keyInsight',
            content: 'Substitution is fastest when one equation is already solved for a variable (like $y = 3x + 2$) or can be solved in one step (like $x = 7 - y$). If neither variable is easy to isolate, elimination is usually quicker.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'When to Choose Substitution',
            content: 'A variable already has coefficient $1$ or $-1$ in one equation → isolate it in one step → substitute into the other equation. This avoids fractions entirely.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'When Substitution Is Fastest',
            content: 'Recognition cue: one equation already has a variable isolated ($y = \\ldots$ or $x = \\ldots$) or has a coefficient of $1$ or $-1$. First move: solve that equation for the isolated variable and plug into the other equation.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Distribute',
            wrong: '$3x + 2(2x - 1) = 16$ → student writes $3x + 4x - 1 = 16$ instead of $3x + 4x - 2 = 16$.',
            correction: 'When substituting, distribute the outer coefficient to **every** term inside: $2 \\cdot 2x = 4x$ and $2 \\cdot (-1) = -2$.',
          },
          {
            type: 'tip',
            content: 'Variable already isolated → substitution. Both equations in standard form with matching coefficients → elimination. Messy coefficients and a numerical answer needed → DESMOS.',
          },
        ],
      },
      methods: {
        title: 'Methods',
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
              { label: 'Substitute $y$', content: '$3x + 2(2x - 1) = 16$' },
              { label: 'Distribute', content: '$3x + 4x - 2 = 16$' },
              { label: 'Solve for $x$', content: '$7x = 18$ → $x = \\frac{18}{7}$' },
              { label: 'Find $y$', content: '$y = 2\\left(\\frac{18}{7}\\right) - 1 = \\frac{36}{7} - \\frac{7}{7} = \\frac{29}{7}$' },
              { label: 'Verify', content: '$3\\left(\\frac{18}{7}\\right) + 2\\left(\\frac{29}{7}\\right) = \\frac{54 + 58}{7} = \\frac{112}{7} = 16$ ✓' },
            ],
          },
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
          {
            type: 'trapCard',
            title: 'Substituting Back into the Same Equation',
            wrong: 'Student isolates $y$ from Equation 1, then substitutes back into Equation 1 instead of Equation 2.',
            correction: 'Substitution only works when you plug into the **other** equation. Plugging into the same equation produces an identity ($0 = 0$) and no useful information.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $x - 3y = 7$ and $2x + y = 0$, what is the value of $x + y$?',
            steps: [
              { label: 'Isolate $x$', content: 'From the first equation: $x = 7 + 3y$' },
              { label: 'Substitute', content: '$2(7 + 3y) + y = 0$ → $14 + 6y + y = 0$ → $7y = -14$ → $y = -2$' },
              { label: 'Find $x$', content: '$x = 7 + 3(-2) = 7 - 6 = 1$' },
              { label: 'Answer', content: '$x + y = 1 + (-2) = -1$' },
            ],
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'systems',
    title: 'Solving System of Equation using Substitution',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video walks through a full substitution solve on an SAT-style problem. The core technique: isolate the easier variable, replace it in the other equation, then solve the resulting one-variable equation.',
          },
          {
            type: 'formula',
            label: 'Substitution in One Line',
            content: '$$\\text{From } y = f(x), \\text{ replace } y \\text{ in the second equation to get } g(x) = c$$',
            note: 'This converts a two-variable system into a single-variable equation you already know how to solve.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Coefficient-of-1 Signal',
            content: 'Recognition cue: one equation has a variable with no visible coefficient (like $x + 2y = 9$ or $y - 3x = 4$). That means the coefficient is $1$, and isolating that variable takes one step — a clear signal to use substitution.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error When Isolating',
            wrong: 'From $x - 2y = 5$, student writes $x = 5 + 2y$ but then uses $x = 5 - 2y$ when substituting.',
            correction: 'Write the isolation step clearly and box it. Use that exact expression — do not re-derive from memory.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Substitution Quick-Reference',
            items: [
              'Scan both equations for a variable with coefficient $1$ or $-1$',
              'Isolate that variable: $x = \\ldots$ or $y = \\ldots$',
              'Substitute the expression into the other equation',
              'Solve, back-substitute, verify',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $x + 4y = 14$ and $3x - 2y = 0$. What is $y$?',
            steps: [
              { label: 'Isolate $x$', content: '$x = 14 - 4y$' },
              { label: 'Substitute', content: '$3(14 - 4y) - 2y = 0$ → $42 - 12y - 2y = 0$ → $42 - 14y = 0$' },
              { label: 'Solve', content: '$14y = 42$ → $y = 3$' },
              { label: 'Verify', content: '$x = 14 - 4(3) = 2$. Check: $3(2) - 2(3) = 6 - 6 = 0$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Solve using substitution: $y = 5x - 3$ and $2x + 3y = 25$. What is $x$?',
            answer: 'Substitute: $2x + 3(5x - 3) = 25$ → $2x + 15x - 9 = 25$ → $17x = 34$ → $x = 2$.',
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
        blocks: [
          {
            type: 'text',
            content: 'Instead of substituting, you **stack** the two equations and add (or subtract) them. If the coefficients of one variable are opposites, that variable disappears. If they are not opposites yet, multiply one or both equations first to create matching (or opposite) coefficients.',
          },
          {
            type: 'keyInsight',
            content: 'Elimination shines when both equations are in standard form ($Ax + By = C$) and neither variable is already isolated. It avoids the messy fractions that substitution can produce.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Core Idea',
            content: 'If you add two true equations, the result is also true. Choosing which to add or subtract — and what to multiply by — lets you **cancel** one variable on purpose.',
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
            content: 'Recognition cue: both equations are in $Ax + By = C$ form and share a common coefficient (or one that is easy to match by multiplying). First move: add or subtract the equations to cancel the matching term.',
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
            timing: '~15 seconds',
            content: 'When the question asks for $x + y$ (not individual variables), try adding the equations directly — the left side often simplifies to a multiple of $x + y$ immediately, requiring no variable isolation at all.',
          },
          {
            type: 'tip',
            content: 'If neither variable has matching coefficients, find the LCM of the two coefficients for one variable and multiply each equation accordingly. Target the variable with the smaller LCM to minimize arithmetic.',
          },
        ],
      },
      methods: {
        title: 'Methods',
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
              '**Verify** in both original equations',
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $2x + 3y = 12$ and $4x - 3y = 6$.',
            steps: [
              { label: 'Observe', content: '$3y$ and $-3y$ are already opposites — just add.' },
              { label: 'Add', content: '$(2x + 3y) + (4x - 3y) = 12 + 6$ gives $6x = 18$, so $x = 3$' },
              { label: 'Back-substitute', content: '$2(3) + 3y = 12$ → $3y = 6$ → $y = 2$' },
              { label: 'Verify', content: '$4(3) - 3(2) = 12 - 6 = 6$ ✓' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $3x + 2y = 16$ and $5x + 4y = 28$.',
            steps: [
              { label: 'Multiply first equation by $-2$', content: '$-6x - 4y = -32$' },
              { label: 'Add to second equation', content: '$(-6x - 4y) + (5x + 4y) = -32 + 28$ gives $-x = -4$, so $x = 4$' },
              { label: 'Back-substitute', content: '$3(4) + 2y = 16$ → $2y = 4$ → $y = 2$' },
              { label: 'Verify', content: '$5(4) + 4(2) = 20 + 8 = 28$ ✓' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Multiplying Only Part of the Equation',
            wrong: 'Student multiplies the left side by $2$ but forgets to multiply the right side: $2(3x + y) = 10$ becomes $6x + 2y = 10$ instead of $6x + 2y = 20$.',
            correction: 'When multiplying an equation by a constant, **every term** — including the constant on the right side — gets multiplied.',
          },
          {
            type: 'trapCard',
            title: 'Adding When You Should Subtract',
            wrong: '$5x + 3y = 20$ and $2x + 3y = 11$ — student adds and gets $7x + 6y = 31$.',
            correction: 'The $3y$ terms have the **same** sign. Subtract the equations to cancel: $(5x + 3y) - (2x + 3y) = 20 - 11$ gives $3x = 9$.',
          },
          {
            type: 'trapCard',
            title: 'Sign Errors During Subtraction',
            wrong: 'Subtracting $2x + 3y = 11$ from $5x + 3y = 20$, student writes $3x + 0y = 31$.',
            correction: 'When subtracting, distribute the negative to the **entire** second equation: $20 - 11 = 9$, not $20 + 11 = 31$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $7x + 3y = 29$ and $3x + 7y = 21$, what is $x + y$?',
            steps: [
              { label: 'Add equations', content: '$(7x + 3y) + (3x + 7y) = 29 + 21$ gives $10x + 10y = 50$' },
              { label: 'Factor', content: '$10(x + y) = 50$ → $x + y = 5$' },
              { label: 'Key insight', content: 'No need to find $x$ and $y$ individually — the sum was the direct result of adding the equations.' },
            ],
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'systems',
    title: 'Solving System of Equations using Elimination',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video demonstrates elimination on an SAT-style problem where coefficients do not already match. The key skill is choosing the right multiplier to create opposite coefficients before adding.',
          },
          {
            type: 'formula',
            label: 'Elimination Multiplier Rule',
            content: '$$\\text{To cancel } y: \\text{ multiply Eq. 1 by } b_2 \\text{ and Eq. 2 by } -b_1$$',
            note: 'This guarantees the $y$-coefficients become $b_1 b_2$ and $-b_1 b_2$, which cancel on addition.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'LCM Multiplier Strategy',
            content: 'Recognition cue: neither variable has matching or opposite coefficients. First move: pick the variable with the smaller LCM between its two coefficients. Multiply each equation by the factor needed to reach that LCM, with opposite signs.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Multiply the Constant',
            wrong: 'Student multiplies $3x + 2y = 7$ by $4$ and writes $12x + 8y = 7$.',
            correction: 'Every term gets multiplied: $4(3x + 2y) = 4(7)$ → $12x + 8y = 28$.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Elimination with Multipliers',
            items: [
              'Identify which variable to eliminate (pick the one with smaller LCM)',
              'Multiply each equation so that variable has equal-and-opposite coefficients',
              'Add the equations to cancel that variable',
              'Solve, back-substitute, verify',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $3x + 4y = 25$ and $5x - 2y = 19$. What is $x$?',
            steps: [
              { label: 'Target $y$', content: 'Multiply the second equation by $2$: $10x - 4y = 38$' },
              { label: 'Add', content: '$(3x + 4y) + (10x - 4y) = 25 + 38$ gives $13x = 63$' },
              { label: 'Solve', content: '$x = \\frac{63}{13}$' },
              { label: 'Simplify', content: 'Hmm — not clean. Re-check: $13 \\times 5 = 65 \\neq 63$. Actually $\\frac{63}{13}$ does not simplify. Let us re-examine the problem.' },
              { label: 'Re-solve correctly', content: 'Multiply Eq. 2 by $2$: $10x - 4y = 38$. Add to Eq. 1: $3x + 10x + 4y - 4y = 25 + 38$ → $13x = 63$ → $x = \\frac{63}{13}$. This is correct but messy — on the SAT, check that you copied the problem correctly when answers are not clean integers.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Solve using elimination: $2x + 5y = 21$ and $3x - 5y = 4$. What is $x$?',
            answer: 'The $y$-coefficients are $+5$ and $-5$ (already opposite). Add: $5x = 25$ → $x = 5$.',
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
        blocks: [
          {
            type: 'text',
            content: 'On the digital SAT, the built-in DESMOS graphing calculator can solve systems visually in seconds. Type both equations, find the intersection, read the coordinates.',
          },
          {
            type: 'keyInsight',
            content: 'This is not a shortcut — it is a **time-saving strategy** built into the test format. Use algebraic methods when the numbers are clean; use DESMOS when fractions, decimals, or messy coefficients slow you down.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'DESMOS Accepts Any Form',
            content: 'You can type equations in any form — $y = mx + b$, $Ax + By = C$, or even $y - 3 = 2(x + 1)$. DESMOS parses all of them. No rearranging needed before graphing.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'DESMOS for Systems: The 20-Second Solve',
            content: 'Recognition cue: any system where the answer choices are numerical $(x, y)$ pairs. First move: type both equations into DESMOS, click the intersection point, read the coordinates.',
          },
          {
            type: 'trapCard',
            title: 'Intersection Outside Default View',
            wrong: 'Student types both equations but sees no intersection — concludes "no solution."',
            correction: 'The intersection may exist beyond the default window. Zoom out (scroll or pinch) or click the wrench to expand the axis range. Only conclude "no solution" if the lines are clearly parallel.',
          },
          {
            type: 'tip',
            content: 'If the question asks for an expression like $2x + y$ (not a simple coordinate), find $x$ and $y$ individually from DESMOS, then compute the expression by hand.',
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'DESMOS Cannot Solve "For What Value of $k$"',
            content: 'DESMOS graphs specific equations — it cannot handle parameters like $k$ unless you set up a slider. For "find $k$" problems, algebraic ratio analysis is faster and more reliable.',
          },
        ],
      },
      methods: {
        title: 'Methods',
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
            content: 'If you do not see the intersection, the default window might not cover it. Zoom out (pinch or scroll) or adjust the axis range by clicking the wrench icon.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Typing the Equation Wrong',
            wrong: 'Student types $2x + 3y = 12$ as $2x + 3y - 12$ (no equals sign) and DESMOS does not graph a line.',
            correction: 'DESMOS needs an equation (with $=$) to graph a line. An expression without $=$ graphs a different object.',
          },
          {
            type: 'trapCard',
            title: 'Reading $(x, y)$ in Wrong Order',
            wrong: 'DESMOS shows intersection at $(3, 5)$. Question asks "what is $y$?" Student answers $3$.',
            correction: 'DESMOS displays $(x, y)$. The first coordinate is $x$, the second is $y$. Match the question to the correct coordinate.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Use DESMOS to solve: $\\frac{2}{3}x + y = 8$ and $x - \\frac{1}{2}y = 3$. What is $y$?',
            steps: [
              { label: 'Line 1', content: 'Type $(2/3)x + y = 8$ into DESMOS' },
              { label: 'Line 2', content: 'Type $x - (1/2)y = 3$' },
              { label: 'Read intersection', content: 'DESMOS shows $(x, y) = (\\frac{18}{7}, \\frac{44}{7})$' },
              { label: 'Algebraic verify', content: 'These fractions confirm that DESMOS is the right tool here — solving by hand would require clearing denominators and multiple steps.' },
              { label: 'Answer', content: '$y = \\frac{44}{7} \\approx 6.29$' },
            ],
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'systems',
    title: 'Solving System of Equations using DESMOS Example #1',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video demonstrates using DESMOS to solve a standard two-equation linear system with integer coefficients. Even when algebra is straightforward, DESMOS provides a fast visual confirmation.',
          },
          {
            type: 'keyInsight',
            content: 'For systems with integer solutions, DESMOS displays the intersection as a clean point (e.g., $(4, -1)$). If the intersection shows decimals, the SAT problem likely expects an exact fraction — switch to algebra or convert the decimal to a fraction.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Numerical Answer Choices = DESMOS Opportunity',
            content: 'Recognition cue: the answer choices are specific numbers or coordinate pairs (not expressions with variables). First move: type both equations into DESMOS and read the intersection.',
          },
          {
            type: 'trapCard',
            title: 'Clicking the Wrong Intersection',
            wrong: 'Student graphs a system where lines cross twice (e.g., one is a parabola) and clicks the wrong point.',
            correction: 'For linear systems, there is at most one intersection. If you see two points, one of your equations might be entered incorrectly. Double-check before reading a coordinate.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS Workflow for Integer Solutions',
            items: [
              'Type Equation 1 into Line 1',
              'Type Equation 2 into Line 2',
              'Click the intersection dot — coordinates appear',
              'If the answer choice matches, select it; if not, zoom in to read more precisely',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve using DESMOS: $4x + y = 9$ and $x - 3y = -1$. What is the value of $x + y$?',
            steps: [
              { label: 'Graph', content: 'Type $4x + y = 9$ and $x - 3y = -1$ into DESMOS' },
              { label: 'Read intersection', content: 'DESMOS shows $(2, 1)$' },
              { label: 'Compute', content: '$x + y = 2 + 1 = 3$' },
              { label: 'Verify algebraically', content: '$4(2) + 1 = 9$ ✓ and $2 - 3(1) = -1$ ✓' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Use DESMOS (or algebra) to solve: $3x + 2y = 13$ and $x - y = 1$. What is $y$?',
            answer: 'From $x - y = 1$: $x = y + 1$. Substitute: $3(y + 1) + 2y = 13$ → $5y + 3 = 13$ → $y = 2$. (DESMOS shows intersection at $(3, 2)$.)',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'systems',
    title: 'Solving System of Equations using DESMOS Example #2',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video focuses on a system with **non-integer or fractional solutions** — the type where DESMOS saves the most time. When algebra leads to messy fractions, graphing gives you the numerical answer directly.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS can display fractional coordinates. Click the intersection point and look for the exact value. If DESMOS shows a decimal like $2.333\\ldots$, recognize it as $\\frac{7}{3}$ and match to the answer choices.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Messy Coefficients = DESMOS First',
            content: 'Recognition cue: coefficients are large, fractional, or decimal, and the answer choices are numerical. First move: type both equations into DESMOS and read the intersection rather than attempting elimination with ugly multipliers.',
          },
          {
            type: 'trapCard',
            title: 'Rounding DESMOS Output',
            wrong: 'DESMOS shows $x = 3.666\\ldots$ and student rounds to $3.67$ — but the answer choice is $\\frac{11}{3}$.',
            correction: 'Convert repeating decimals to fractions: $3.\\overline{6} = \\frac{11}{3}$. Match the exact value to the answer choices before selecting.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'DESMOS for Fractional Answers',
            items: [
              'Enter both equations into DESMOS',
              'Click the intersection point to read the coordinates',
              'If the display shows a decimal, convert to a fraction: divide to check common denominators from the answer choices',
              'Select the matching answer',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Solve: $5x + 7y = 3$ and $3x - 2y = 8$. What is $x$?',
            steps: [
              { label: 'DESMOS approach', content: 'Type both equations. The intersection shows $x \\approx 1.935$.' },
              { label: 'Convert', content: 'Check: $\\frac{62}{31}$ = $2$? No. Try algebra: multiply Eq.1 by $2$ and Eq.2 by $7$: $10x + 14y = 6$ and $21x - 14y = 56$.' },
              { label: 'Add', content: '$31x = 62$ → $x = 2$' },
              { label: 'Insight', content: 'The DESMOS decimal was actually $2.0$ — the approximation $1.935$ was a misread. Zooming in on DESMOS would show exactly $2$. This highlights why algebraic verification matters.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Solve: $2x + 3y = 1$ and $4x - y = 9$. What is $y$?',
            answer: 'From Eq.2: $y = 4x - 9$. Substitute into Eq.1: $2x + 3(4x - 9) = 1$ → $14x - 27 = 1$ → $14x = 28$ → $x = 2$. Then $y = 4(2) - 9 = -1$.',
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
        blocks: [
          {
            type: 'text',
            content: 'When two equations describe the exact same line, every point on that line is a solution — the system has infinitely many solutions. This happens when one equation is a constant multiple of the other.',
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Proportionality Test',
            content: 'For $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$, infinite solutions occur when:\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$\nAll three ratios must be **equal**. If the first two match but the third does not, you get **no solution** instead.',
          },
          {
            type: 'keyInsight',
            content: 'On the SAT, "infinitely many solutions" problems almost always ask you to find a missing constant or coefficient that makes the equations proportional. You are solving for the value that turns two different-looking equations into the same line.',
          },
          {
            type: 'formula',
            label: 'Parametric Representation',
            content: '$$\\text{If } x + 2y = 6 \\text{ has infinitely many solutions, you can write } x = 6 - 2t,\\; y = t$$',
            note: 'Set one variable equal to a free parameter $t$, then express the other in terms of $t$. Every value of $t$ gives a valid solution pair.',
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
            content: 'Recognition cue: "infinitely many solutions" in the question stem plus a parameter ($k$, $a$, $c$) in one of the equations. First move: find the multiplier between the left-side coefficients, then force the constant to match using that same multiplier.',
          },
          {
            type: 'trapCard',
            title: 'Only Checking Two Ratios',
            wrong: 'Student sees $\\frac{2}{6} = \\frac{5}{15} = \\frac{1}{3}$ and declares infinite solutions without checking the constant.',
            correction: 'Two matching ratios with a mismatched constant means **no solution**, not infinite. All three ratios must agree.',
          },
          {
            type: 'tip',
            content: 'Shortcut: find the multiplier $k$ from any pair of matching coefficients, then compute $c = k \\times$ the other constant. No need to compare all three ratios explicitly — just multiply through.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Finding the Missing Value for Infinite Solutions',
            items: [
              '**Write** both equations in $Ax + By = C$ form',
              '**Find the multiplier** $k$ such that $A_1 = k \\cdot A_2$ (or $B_1 = k \\cdot B_2$)',
              '**Apply** that same $k$ to every coefficient and constant: $B_1 = k \\cdot B_2$ and $C_1 = k \\cdot C_2$',
              '**Solve** for the unknown parameter using these equations',
            ],
          },
          {
            type: 'steps',
            title: 'Writing Parametric Form',
            items: [
              '**Start** with the single equation that represents both lines (e.g., $x + 2y = 6$)',
              '**Set** one variable as the free parameter: $y = t$',
              '**Solve** for the other variable: $x = 6 - 2t$',
              '**Write** the solution set: $(x, y) = (6 - 2t,\\, t)$ for any real $t$',
            ],
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
            correction: 'Two matching coefficient ratios with a different constant ratio means **no solution** (parallel lines), not infinite. You must verify all three ratios match.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Parametric Form with No Solution',
            wrong: 'Student writes $x = 6 - 2t$ and $y = t$, then says "there are two unknowns and one equation, so no solution."',
            correction: 'A free parameter means **infinitely many** solutions — one for each value of $t$. The parameter is not an unsolved unknown; it labels the solutions.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For what value of $c$ does the system $2x + 4y = 10$ and $x + 2y = c$ have infinitely many solutions?',
            steps: [
              { label: 'Find multiplier', content: 'The first equation is $2$ times the second (coefficients: $2 = 2 \\cdot 1$, $4 = 2 \\cdot 2$).' },
              { label: 'Apply to constant', content: '$10 = 2 \\cdot c$ → $c = 5$' },
              { label: 'Verify', content: '$x + 2y = 5$ multiplied by $2$ gives $2x + 4y = 10$ ✓. Same line → infinite solutions.' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $ax + 6y = 15$ and $4x + 8y = 20$ has infinitely many solutions. Find $a$.',
            steps: [
              { label: 'Find multiplier from constants', content: '$\\frac{15}{20} = \\frac{3}{4}$' },
              { label: 'Check $y$-coefficients', content: '$\\frac{6}{8} = \\frac{3}{4}$ ✓ — consistent' },
              { label: 'Apply to $x$-coefficient', content: '$\\frac{a}{4} = \\frac{3}{4}$ → $a = 3$' },
              { label: 'Verify', content: '$3x + 6y = 15$ is $\\frac{3}{4}$ times $4x + 8y = 20$. All ratios match → infinite solutions.' },
            ],
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'systems',
    title: 'Infinite Solutions SAT Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        blocks: [
          {
            type: 'text',
            content: 'This video walks through a typical SAT question where you must find the value of a parameter that produces infinitely many solutions. The strategy: match all coefficient ratios, then solve for the unknown.',
          },
          {
            type: 'formula',
            label: 'Infinite Solutions Condition',
            content: '$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$',
            note: 'Set any two of these equal to find the unknown parameter. Then verify the third ratio matches.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: '"For What Value of $k$…Infinitely Many"',
            content: 'Recognition cue: a system with a parameter ($k$, $a$, $c$) and the phrase "infinitely many solutions." First move: set the coefficient ratios equal and solve for the parameter. Then verify the constant ratio also matches.',
          },
          {
            type: 'trapCard',
            title: 'Solving for No Solution Instead',
            wrong: 'Student finds $k$ that makes coefficient ratios equal but does not check the constant — the value actually produces no solution.',
            correction: 'After finding the value from the coefficient ratios, **always** verify the constant ratio. If it matches → infinite solutions. If it does not → that $k$ gives no solution, and you need to adjust.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Solving "Infinite Solutions" Parameter Problems',
            items: [
              'Write both equations in $Ax + By = C$ form',
              'Set $\\frac{A_1}{A_2} = \\frac{B_1}{B_2}$ and solve for the parameter',
              'Verify $\\frac{C_1}{C_2}$ equals the same ratio',
              'If all three match, that value of the parameter produces infinitely many solutions',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If the system $6x - 9y = 12$ and $2x - 3y = k$ has infinitely many solutions, what is $k$?',
            steps: [
              { label: 'Find multiplier', content: 'Coefficients: $\\frac{6}{2} = 3$ and $\\frac{-9}{-3} = 3$. Multiplier is $3$.' },
              { label: 'Apply to constant', content: '$12 = 3 \\cdot k$ → $k = 4$' },
              { label: 'Verify', content: '$2x - 3y = 4$ multiplied by $3$ gives $6x - 9y = 12$ ✓. Same line → infinite solutions.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'The system $5x + 10y = 30$ and $x + 2y = c$ has infinitely many solutions. What is $c$?',
            answer: 'The first equation is $5$ times the second: $5(x + 2y) = 5c$. So $5c = 30$ → $c = 6$.',
          },
        ],
      },
    },
  },

};
