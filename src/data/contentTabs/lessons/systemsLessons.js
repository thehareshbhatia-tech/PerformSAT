export const systemsLessonTabs = {
  1: {
    moduleId: 'systems',
    title: 'What is a System of Equations?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A system of equations pairs two equations with two unknowns. The solution is the ordered pair that satisfies both equations simultaneously — graphically, the intersection of their lines.',
        blocks: [
          {
            type: 'formula',
            label: 'System Notation',
            content: '$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$$',
            note: 'The brace means "solve these together." The answer is the $(x, y)$ pair that makes both equations true at the same time.',
          },
          {
            type: 'text',
            content: 'Imagine two friends each give you a clue about two mystery numbers $x$ and $y$. One says $x + y = 10$. The other says $x - y = 4$. Neither clue alone pins down both numbers, but **together** they force $x = 7$ and $y = 3$. That ordered pair is the **solution** to the system.',
          },
          {
            type: 'keyInsight',
            content: 'Each linear equation graphs as a line. The solution to the system is the **intersection point** — the single $(x, y)$ pair that lies on both lines simultaneously.',
          },
          {
            type: 'trapCard',
            title: 'Solving for the Wrong Variable',
            wrong: 'Question asks "What is $x$?" Student solves the system, finds $y = 3$, and selects $3$ as the answer without computing $x$.',
            correction: 'Circle what the question asks before solving. If you find $y$ first, back-substitute to get $x$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Solve the system: $x + y = 10$ and $x - y = 4$.',
            steps: [
              {
                label: 'Add the equations',
                content: '$(x + y) + (x - y) = 10 + 4$ gives $2x = 14$, so $x = 7$',
              },
              {
                label: 'Back-substitute',
                content: '$7 + y = 10$, so $y = 3$',
              },
              {
                label: 'Verify in both',
                content: '$7 + 3 = 10$ ✓ and $7 - 3 = 4$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Is $(3, 4)$ a solution to the system $2x + y = 10$ and $x - y = -1$?',
            answer: 'Check Eq. 1: $2(3) + 4 = 10$ ✓. Check Eq. 2: $3 - 4 = -1$ ✓. Yes — $(3, 4)$ satisfies both equations, so it is a solution.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'systems',
    title: 'Types of Solutions',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Two lines can cross once (one solution), run parallel (no solution), or overlap completely (infinitely many solutions). The ratio of coefficients determines which case applies.',
        blocks: [
          {
            type: 'formula',
            label: 'Ratio Test for $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$',
            content: '$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\implies \\text{No solution}$$\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\implies \\text{Infinitely many solutions}$$',
            note: 'When the first two ratios are unequal, the system has exactly one solution.',
          },
          {
            type: 'text',
            content: 'Two lines in a plane relate in exactly three ways: they **cross** at one point, they run **parallel** and never meet, or they are the **same line** stacked on top of each other.',
          },
          {
            type: 'keyInsight',
            content: '"No solution" means the lines are **parallel**: same slope, different $y$-intercepts. Set the coefficient ratios equal and solve for the unknown parameter to find the value that creates this condition.',
          },
          {
            type: 'table',
            headers: [
              'Outcome',
              'Geometry',
              'Slopes',
              'Algebraic Signal',
            ],
            rows: [
              [
                'One solution',
                'Lines intersect',
                'Different slopes',
                'Solving yields a unique $(x, y)$',
              ],
              [
                'No solution',
                'Parallel lines',
                'Same slope, different intercepts',
                'Variables cancel → false statement ($0 = 5$)',
              ],
              [
                'Infinitely many',
                'Identical lines',
                'Same slope and intercept',
                'Variables cancel → true identity ($0 = 0$)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing $0 = 0$ with $0 = 5$',
            wrong: 'After elimination, student reaches $0 = 0$ and writes "no solution" because both sides equal zero.',
            correction: '$0 = 0$ is a true identity → **infinitely many** solutions (same line). $0 = 5$ is a contradiction → **no solution** (parallel lines). The truth value of the final statement determines the outcome.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For what value of $a$ does $3x - 6y = 9$ and $x - 2y = a$ have infinitely many solutions?',
            steps: [
              {
                label: 'Find the multiplier',
                content: 'Coefficients: $\\frac{3}{1} = 3$ and $\\frac{-6}{-2} = 3$. The multiplier is $3$.',
              },
              {
                label: 'Apply to the constant',
                content: 'For infinite solutions: $9 = 3 \\cdot a$, so $a = 3$.',
              },
              {
                label: 'Verify',
                content: '$x - 2y = 3$ multiplied by $3$ gives $3x - 6y = 9$ ✓. Same line → infinite solutions.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'How many solutions does the system $4x + 6y = 12$ and $2x + 3y = 5$ have?',
            answer: 'Ratios: $\\frac{4}{2} = 2$ and $\\frac{6}{3} = 2$, but $\\frac{12}{5} \\neq 2$. Coefficient ratios match while the constant ratio differs → **no solution** (parallel lines).',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'systems',
    title: 'Writing Systems from Word Problems',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'System word problems provide two unknowns and two relationships. Assign a variable to each unknown, translate each relationship into an equation, and the algebra becomes routine.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Count Equation',
                formula: '$x + y = \\text{total number}$',
                note: 'Adds up how many items',
              },
              {
                label: 'Value Equation',
                formula: '$(\\text{rate}_1)(x) + (\\text{rate}_2)(y) = \\text{total value}$',
                note: 'Adds up dollars, weight, etc.',
              },
            ],
          },
          {
            type: 'text',
            content: 'Every system word problem provides **two unknowns** and **two relationships**. The task: assign variables, then convert each relationship into an equation. Most SAT word problems follow the **count + value** template.',
          },
          {
            type: 'keyInsight',
            content: 'One equation counts items (coefficients are $1$). The other multiplies each item by its per-unit rate (price, speed, weight). These two structures cover the vast majority of SAT system word problems.',
          },
          {
            type: 'trapCard',
            title: 'Swapping Coefficients with Variables',
            wrong: '"Muffins cost \\$3 and cookies cost \\$2" — student writes $2m + 3c = 50$ instead of $3m + 2c = 50$.',
            correction: 'Each price multiplies its own item: \\$3 per muffin → $3m$, \\$2 per cookie → $2c$. Write the rate next to its variable immediately after reading.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A store sells pens for \\$2 each and notebooks for \\$5 each. A customer buys 12 items totaling \\$39. How many notebooks were purchased?',
            steps: [
              {
                label: 'Define variables',
                content: 'Let $p$ = pens, $n$ = notebooks',
              },
              {
                label: 'Count equation',
                content: '$p + n = 12$',
              },
              {
                label: 'Value equation',
                content: '$2p + 5n = 39$',
              },
              {
                label: 'Substitute',
                content: '$p = 12 - n$, so $2(12 - n) + 5n = 39$ → $24 - 2n + 5n = 39$ → $3n = 15$ → $n = 5$',
              },
              {
                label: 'Verify',
                content: '$p = 7$; revenue = $2(7) + 5(5) = 14 + 25 = 39$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'At a concert, adult tickets cost \\$25 and student tickets cost \\$15. A total of 300 tickets were sold for \\$5{,}500. Write the system of equations.',
            answer: 'Let $a$ = adult tickets, $s$ = student tickets. Count: $a + s = 300$. Revenue: $25a + 15s = 5500$.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'systems',
    title: 'Deriving System of Equation from Context Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Mixture problems combine two items at different per-unit rates to reach a known total. Translate the count and value into two equations.',
        blocks: [
          {
            type: 'formula',
            label: 'Mixture Template',
            content: '$$x + y = \\text{total quantity}$$\n$$r_1 x + r_2 y = \\text{total value}$$',
            note: '$r_1$ and $r_2$ are the per-unit rates (prices, concentrations, speeds).',
          },
          {
            type: 'text',
            content: '**Mixture problems** appear when two types of items (beans, ticket tiers, chemical solutions) combine at different per-unit rates to produce a known total quantity and total value.',
          },
          {
            type: 'keyInsight',
            content: 'The first equation counts items; the second prices them. Identifying which numbers in the problem are **counts** vs. **rates** is the critical translation step.',
          },
          {
            type: 'trapCard',
            title: 'Using the Total Quantity as a Coefficient',
            wrong: 'Problem says "40 pounds total" — student writes $40x + 40y$ instead of $x + y = 40$.',
            correction: 'The total quantity belongs on the **right side** of the count equation. Coefficients come from the per-unit rates, not the total amount.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Tickets to a school play cost \\$5 for students and \\$8 for adults. A total of 200 tickets were sold for \\$1{,}180. How many student tickets were sold?',
            steps: [
              {
                label: 'Define variables',
                content: 'Let $s$ = student tickets and $a$ = adult tickets.',
              },
              {
                label: 'Write the count equation',
                content: '$s + a = 200$ (total tickets)',
              },
              {
                label: 'Write the value equation',
                content: '$5s + 8a = 1180$ (total revenue)',
              },
              {
                label: 'Solve by substitution',
                content: 'From the count equation: $a = 200 - s$. Substitute into the value equation:\n$$5s + 8(200 - s) = 1180$$\n$$5s + 1600 - 8s = 1180$$\n$$-3s = -420$$\n$$s = 140$$',
              },
              {
                label: 'Verify',
                content: '$a = 200 - 140 = 60$. Check revenue: $5(140) + 8(60) = 700 + 480 = 1180$ ✓. Answer: **140 student tickets**.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A coffee shop mixes Type A beans (\\$8/lb) with Type B beans (\\$14/lb) to create a 30-pound blend costing \\$282. Write the system.',
            answer: 'Let $a$ = pounds of Type A, $b$ = pounds of Type B. Count: $a + b = 30$. Value: $8a + 14b = 282$.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'systems',
    title: 'Deriving System of Equation from Context Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Not every system follows count + value. Comparative constraints ("twice as many," "the difference is 10") produce equations directly from relationship phrases.',
        blocks: [
          {
            type: 'formula',
            label: 'Comparison Translations',
            content: '$$A \\text{ is } k \\text{ times } B \\;\\Longrightarrow\\; A = kB$$\n$$A \\text{ is } d \\text{ more than } B \\;\\Longrightarrow\\; A = B + d$$',
          },
          {
            type: 'text',
            content: 'Some word problems replace the count equation with a **comparative constraint**: "twice as many students as teachers" or "the difference between the two groups is 15." Each comparison phrase becomes its own equation.',
          },
          {
            type: 'keyInsight',
            content: '"$A$ is $k$ times $B$" translates to $A = kB$. The multiplier always attaches to the **smaller** group. Reversing this assignment is the single most common translation error on comparison problems.',
          },
          {
            type: 'trapCard',
            title: 'Reversing "Times As Many"',
            wrong: '"There are 3 times as many students as teachers" → student writes $3s = t$ instead of $s = 3t$.',
            correction: 'Students are the larger group: $s = 3t$. Read it as "students equals 3 times teachers." The multiplier attaches to the smaller quantity.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A school has 3 times as many students as teachers. The total number of students and teachers is 120. How many teachers are there?',
            steps: [
              {
                label: 'Define variables',
                content: 'Let $s$ = number of students and $t$ = number of teachers.',
              },
              {
                label: 'Write the comparison equation',
                content: '"3 times as many students as teachers" → $s = 3t$',
              },
              {
                label: 'Write the total equation',
                content: '$s + t = 120$',
              },
              {
                label: 'Substitute',
                content: 'Replace $s$ with $3t$:\n$$3t + t = 120$$\n$$4t = 120$$\n$$t = 30$$',
              },
              {
                label: 'Verify',
                content: '$s = 3(30) = 90$. Check: $90 + 30 = 120$ ✓ and $90 = 3(30)$ ✓. Answer: **30 teachers**.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `A factory has two machines. Machine A produces 50 widgets/hour and Machine B produces 30 widgets/hour. They ran a combined 10 hours and made 380 widgets. Write the system and find Machine B's hours.`,
            answer: 'Let $a$ = hours for A, $b$ = hours for B. Time: $a + b = 10$. Output: $50a + 30b = 380$. Substitute $a = 10 - b$: $500 - 50b + 30b = 380$ → $-20b = -120$ → $b = 6$ hours.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'systems',
    title: 'Solving by Substitution',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Substitution replaces one variable with an expression from the other equation, reducing a two-variable system to a single-variable equation.',
        blocks: [
          {
            type: 'formula',
            label: 'Substitution Pattern',
            content: '$$\\text{From } y = f(x),\\; \\text{replace } y \\text{ in } g(x, y) = c \\text{ to get } g(x,\\, f(x)) = c$$',
            note: 'The result is a single equation in $x$ — standard one-variable algebra from there.',
          },
          {
            type: 'text',
            content: 'Substitution converts a two-variable system into a one-variable equation. Isolate one variable in one equation, then replace that variable everywhere it appears in the other equation.',
          },
          {
            type: 'keyInsight',
            content: 'Substitution is fastest when one variable already has coefficient $1$ or $-1$, so isolating it requires no division and introduces no fractions. If both variables have larger coefficients, elimination is usually quicker.',
          },
          {
            type: 'trapCard',
            title: 'Incomplete Distribution After Substituting',
            wrong: '$3x + 2(2x - 1) = 16$ → student writes $3x + 4x - 1 = 16$, distributing $2$ to $2x$ but not to $-1$.',
            correction: 'Distribute to **every** term inside: $2(2x) = 4x$ and $2(-1) = -2$. The correct expansion is $3x + 4x - 2 = 16$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $x - 3y = 7$ and $2x + y = 0$, what is $x + y$?',
            steps: [
              {
                label: 'Isolate $x$',
                content: 'From Eq. 1: $x = 7 + 3y$',
              },
              {
                label: 'Substitute into Eq. 2',
                content: '$2(7 + 3y) + y = 0$ → $14 + 6y + y = 0$ → $7y = -14$ → $y = -2$',
              },
              {
                label: 'Find $x$',
                content: '$x = 7 + 3(-2) = 7 - 6 = 1$',
              },
              {
                label: 'Answer',
                content: '$x + y = 1 + (-2) = -1$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve by substitution: $y = 4x + 1$ and $3x - 2y = -12$. What is $x$?',
            answer: 'Substitute: $3x - 2(4x + 1) = -12$ → $3x - 8x - 2 = -12$ → $-5x = -10$ → $x = 2$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'systems',
    title: 'Solving System of Equation using Substitution',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Practice applying substitution to an SAT-style system. The coefficient-of-1 signal indicates substitution as the optimal method.',
        blocks: [
          {
            type: 'formula',
            label: 'One-Step Isolation',
            content: '$$x + 2y = 9 \\;\\Longrightarrow\\; x = 9 - 2y$$',
            note: 'Coefficient of $1$ on $x$ means no division — move the other terms to the right side.',
          },
          {
            type: 'text',
            content: 'A coefficient of $1$ (or $-1$) on any variable in either equation is the clearest signal to choose substitution. Isolating that variable takes one step and avoids fractions entirely.',
          },
          {
            type: 'trapCard',
            title: 'Sign Error When Isolating Then Substituting',
            wrong: 'From $x - 2y = 5$, student correctly writes $x = 5 + 2y$ but then substitutes $x = 5 - 2y$ from memory mid-problem.',
            correction: 'Write the isolation step clearly and box it. Copy that exact expression into the other equation — do not re-derive from memory.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve the system $y = 3x - 1$ and $2x + y = 9$. Which method is best, and what is $x$?',
            steps: [
              {
                label: 'Choose the method',
                content: 'Since $y$ is already isolated in the first equation, **substitution** is the natural choice — no rearranging needed.',
              },
              {
                label: 'Substitute $y = 3x - 1$ into $2x + y = 9$',
                content: '$$2x + (3x - 1) = 9$$\n$$5x - 1 = 9$$\n$$5x = 10$$\n$$x = 2$$',
              },
              {
                label: 'Find $y$',
                content: '$y = 3(2) - 1 = 5$',
              },
              {
                label: 'Verify in the second equation',
                content: '$2(2) + 5 = 4 + 5 = 9$ ✓. Answer: $x = 2$.',
              },
            ],
          },
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
      learn: {
        title: 'Learn',
        summary: 'Elimination stacks two equations and adds (or subtracts) them so one variable cancels. Multiply first when coefficients do not already match.',
        blocks: [
          {
            type: 'formula',
            label: 'Elimination Multiplier Rule',
            content: '$$\\text{To cancel } y:\\; \\text{multiply Eq.\\,1 by } b_2 \\text{ and Eq.\\,2 by } {-b_1}$$',
            note: 'This produces $y$-coefficients $b_1 b_2$ and $-b_1 b_2$, which sum to zero.',
          },
          {
            type: 'text',
            content: 'Instead of substituting, **stack** the two equations and add (or subtract) them. If the coefficients of one variable are opposites, that variable vanishes. If they are not opposites yet, multiply one or both equations to create matching coefficients with opposite signs.',
          },
          {
            type: 'keyInsight',
            content: 'Elimination excels when both equations are in standard form ($Ax + By = C$) and no variable is already isolated. It avoids the messy fractions that substitution can introduce.',
          },
          {
            type: 'trapCard',
            title: 'Adding Same-Sign Coefficients Instead of Subtracting',
            wrong: 'Equations have $+2y$ and $+2y$. Student adds both equations, producing $4y$, and nothing cancels.',
            correction: 'Same-sign matching coefficients require **subtraction** to cancel. Opposite-sign coefficients require **addition**. Check signs before choosing the operation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve: $2x + 3y = 12$ and $4x - 3y = 6$.',
            steps: [
              {
                label: 'Observe',
                content: 'The $y$-coefficients $+3$ and $-3$ are already opposites.',
              },
              {
                label: 'Add',
                content: '$(2x + 3y) + (4x - 3y) = 12 + 6$ → $6x = 18$ → $x = 3$',
              },
              {
                label: 'Back-substitute',
                content: '$2(3) + 3y = 12$ → $3y = 6$ → $y = 2$',
              },
              {
                label: 'Verify',
                content: '$4(3) - 3(2) = 12 - 6 = 6$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $7x + 3y = 29$ and $3x + 7y = 21$, what is $x + y$?',
            answer: 'Add the equations: $(7x + 3y) + (3x + 7y) = 29 + 21$ → $10x + 10y = 50$ → $10(x + y) = 50$ → $x + y = 5$.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'systems',
    title: 'Solving System of Equations using Elimination',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Practice elimination when coefficients require multipliers. The LCM strategy minimizes arithmetic effort.',
        blocks: [
          {
            type: 'formula',
            label: 'LCM Multiplier Strategy',
            content: '$$\\text{LCM}(b_1,\\, b_2) = L \\;\\Longrightarrow\\; \\text{multiply Eq.\\,1 by } \\frac{L}{b_1},\\; \\text{Eq.\\,2 by } \\frac{-L}{b_2}$$',
            note: 'This produces $y$-coefficients $+L$ and $-L$, which cancel on addition.',
          },
          {
            type: 'text',
            content: 'When neither variable has matching or opposite coefficients, multiply one or both equations so a chosen variable lines up for cancellation. Target the variable whose coefficients have the **smallest LCM** to minimize arithmetic.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Only the Left Side of an Equation',
            wrong: 'Student multiplies $3x + 2y = 7$ by $4$ and writes $12x + 8y = 7$ instead of $12x + 8y = 28$.',
            correction: 'Scaling an equation means multiplying **every** term — both sides: $4(3x + 2y) = 4(7)$ → $12x + 8y = 28$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve the system $3x + 4y = 10$ and $5x + 2y = 8$ using elimination.',
            steps: [
              {
                label: 'Choose which variable to eliminate',
                content: 'The $y$-coefficients ($4$ and $2$) have a small LCM of $4$. Multiply Eq. 2 by $-2$ to create opposite $y$-coefficients.',
              },
              {
                label: 'Scale Eq. 2',
                content: '$-2(5x + 2y) = -2(8)$ gives $-10x - 4y = -16$. Remember: multiply **both** sides.',
              },
              {
                label: 'Add the equations',
                content: '$(3x + 4y) + (-10x - 4y) = 10 + (-16)$\n$$-7x = -6$$\n$$x = \\frac{6}{7}$$',
              },
              {
                label: 'Back-substitute for $y$',
                content: '$5\\!\\left(\\frac{6}{7}\\right) + 2y = 8$ → $\\frac{30}{7} + 2y = 8$ → $2y = \\frac{26}{7}$ → $y = \\frac{13}{7}$',
              },
              {
                label: 'Verify in Eq. 1',
                content: '$3\\!\\left(\\frac{6}{7}\\right) + 4\\!\\left(\\frac{13}{7}\\right) = \\frac{18}{7} + \\frac{52}{7} = \\frac{70}{7} = 10$ ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve using elimination: $2x + 5y = 21$ and $3x - 5y = 4$. What is $x$?',
            answer: 'The $y$-coefficients are $+5$ and $-5$ (already opposite). Add: $(2x + 5y) + (3x - 5y) = 21 + 4$ → $5x = 25$ → $x = 5$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'systems',
    title: 'Solving with DESMOS',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The built-in DESMOS graphing calculator on the Digital SAT solves systems visually: type both equations, find the intersection, read the coordinates.',
        blocks: [
          {
            type: 'formula',
            label: 'DESMOS Input Format',
            content: '$$\\text{Line 1: } 2x + 3y = 12 \\qquad \\text{Line 2: } x - y = 1$$',
            note: 'Click the intersection dot to display $(x, y)$ coordinates.',
          },
          {
            type: 'text',
            content: 'On the Digital SAT, DESMOS is available as a built-in tool. For systems, type each equation on its own line and the graph displays both lines. The intersection point gives the solution.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS accepts equations in **any** algebraic form — $y = mx + b$, $Ax + By = C$, or even point-slope like $y - 3 = 2(x + 1)$. No rearranging is needed before graphing.',
          },
          {
            type: 'trapCard',
            title: 'Intersection Not Visible in Default Window',
            wrong: 'Student types both equations but sees no intersection on screen — writes "no solution" without adjusting the view.',
            correction: 'The intersection may lie beyond the default view. Zoom out or adjust the axis range with the wrench icon. Only conclude "no solution" if the lines are visibly parallel.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Use DESMOS to solve: $\\frac{2}{3}x + y = 8$ and $x - \\frac{1}{2}y = 3$. What is $y$?',
            steps: [
              {
                label: 'Enter Line 1',
                content: 'Type $(2/3)x + y = 8$ into DESMOS',
              },
              {
                label: 'Enter Line 2',
                content: 'Type $x - (1/2)y = 3$',
              },
              {
                label: 'Read intersection',
                content: 'Click the intersection dot and read the $y$-coordinate',
              },
              {
                label: 'Why DESMOS wins here',
                content: 'Clearing fractions algebraically requires multiplying by $6$ across both equations, then elimination. DESMOS skips all of that.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve (by DESMOS or algebra): $4x + y = 9$ and $x - 3y = -1$. What is $x + y$?',
            answer: 'DESMOS shows the intersection at $(2, 1)$. So $x + y = 2 + 1 = 3$. Verify: $4(2) + 1 = 9$ ✓ and $2 - 3(1) = -1$ ✓.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'systems',
    title: 'Solving System of Equations using DESMOS Example #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Solving a system with integer coefficients via DESMOS. Clean integer intersections appear as exact points; decimal outputs may need fraction conversion.',
        blocks: [
          {
            type: 'formula',
            label: 'DESMOS System Input',
            content: '$$\\text{Line 1:}\\; A_1 x + B_1 y = C_1 \\qquad \\text{Line 2:}\\; A_2 x + B_2 y = C_2$$',
            note: 'Type each equation on its own line; click the intersection dot to read $(x, y)$.',
          },
          {
            type: 'text',
            content: 'For systems with integer solutions, DESMOS displays the intersection as a clean point like $(4, -1)$. If the coordinates appear as decimals, the answer choices likely expect an exact fraction — convert before selecting.',
          },
          {
            type: 'keyInsight',
            content: 'DESMOS serves as both a **solving** and a **verification** tool. After computing algebraically, graphing provides a visual sanity check that catches arithmetic mistakes.',
          },
          {
            type: 'trapCard',
            title: 'Reading $(x, y)$ Coordinates in the Wrong Order',
            wrong: 'DESMOS shows intersection at $(3, 5)$. Question asks for $y$. Student selects $3$ instead of $5$.',
            correction: 'DESMOS always displays $(x, y)$ — the first value is $x$, the second is $y$. Match the requested variable to the correct position.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Solve using DESMOS: $5x - 2y = 11$ and $3x + 4y = 1$. What is $y$?',
            steps: [
              {
                label: 'Enter the equations',
                content: 'Type $5x - 2y = 11$ on Line 1 and $3x + 4y = 1$ on Line 2 in DESMOS.',
              },
              {
                label: 'Read the intersection',
                content: 'DESMOS displays the intersection point. Click the dot to read the coordinates.',
              },
              {
                label: 'Algebraic verification',
                content: 'Multiply Eq. 1 by $2$: $10x - 4y = 22$. Add to Eq. 2: $13x = 23$ → $x = \\frac{23}{13}$.\nSubstitute back: $3\\!\\left(\\frac{23}{13}\\right) + 4y = 1$ → $4y = 1 - \\frac{69}{13} = -\\frac{56}{13}$ → $y = -\\frac{14}{13}$.',
              },
              {
                label: 'Read the answer correctly',
                content: 'DESMOS displays $(x, y)$ — the **first** coordinate is $x$, the **second** is $y$. The question asks for $y$, so the answer is $-\\frac{14}{13}$.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Use DESMOS (or algebra) to solve: $3x + 2y = 13$ and $x - y = 1$. What is $y$?',
            answer: 'From $x - y = 1$: $x = y + 1$. Substitute: $3(y + 1) + 2y = 13$ → $5y + 3 = 13$ → $y = 2$. DESMOS confirms the intersection at $(3, 2)$.',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'systems',
    title: 'Solving System of Equations using DESMOS Example #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Solving a system with fractional or decimal solutions — the scenario where DESMOS saves the most time over algebraic methods.',
        blocks: [
          {
            type: 'text',
            content: 'When coefficients are large, fractional, or decimal, algebraic methods produce messy intermediate steps. DESMOS gives the numerical answer directly — convert any repeating decimals to fractions to match answer choices.',
          },
          {
            type: 'keyInsight',
            content: 'Common DESMOS decimal-to-fraction conversions: $0.\\overline{3} = \\frac{1}{3}$, $0.\\overline{6} = \\frac{2}{3}$, $0.25 = \\frac{1}{4}$, $0.1\\overline{6} = \\frac{1}{6}$. Recognizing these patterns avoids rounding errors.',
          },
          {
            type: 'table',
            headers: [
              'DESMOS Decimal',
              'Exact Fraction',
            ],
            rows: [
              [
                '$0.\\overline{3}$',
                '$\\frac{1}{3}$',
              ],
              [
                '$0.\\overline{6}$',
                '$\\frac{2}{3}$',
              ],
              [
                '$0.25$',
                '$\\frac{1}{4}$',
              ],
              [
                '$0.1\\overline{6}$',
                '$\\frac{1}{6}$',
              ],
              [
                '$0.\\overline{142857}$',
                '$\\frac{1}{7}$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Rounding Instead of Converting to a Fraction',
            wrong: 'DESMOS shows $x = 3.666\\ldots$ and student rounds to $3.67$ — but the answer choice is $\\frac{11}{3}$.',
            correction: 'Convert repeating decimals: $3.\\overline{6} = 3\\frac{2}{3} = \\frac{11}{3}$. Match the exact value to the answer choices, not a rounded approximation.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Use DESMOS to solve $7x + 3y = 5$ and $2x - 9y = 1$. What is $x$?',
            steps: [
              {
                label: 'Graph both equations',
                content: 'Enter $7x + 3y = 5$ and $2x - 9y = 1$ in DESMOS. Click the intersection point.',
              },
              {
                label: 'Read the DESMOS output',
                content: 'DESMOS shows a decimal value. If it reads $x \\approx 0.6923\\ldots$, recognize this as a repeating decimal.',
              },
              {
                label: 'Convert to an exact fraction',
                content: 'Algebraically: multiply Eq. 1 by $3$: $21x + 9y = 15$. Add to Eq. 2: $23x = 16$ → $x = \\frac{16}{23}$.\nCheck: $\\frac{16}{23} \\approx 0.6957$, confirming the DESMOS reading.',
              },
              {
                label: 'Match the answer choice',
                content: 'If the choices list $\\frac{16}{23}$, select it. Never round a repeating decimal — convert to the exact fraction.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Solve: $5x + 7y = 3$ and $3x - 2y = 8$. What is $x$?',
            answer: 'Multiply Eq. 1 by $2$ and Eq. 2 by $7$: $10x + 14y = 6$ and $21x - 14y = 56$. Add: $31x = 62$ → $x = 2$.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'systems',
    title: 'Infinite Solutions & Parametric Form',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When two equations describe the same line, every point on that line is a solution. The proportionality test identifies this case, and parametric form expresses the infinite solution set.',
        blocks: [
          {
            type: 'formula',
            label: 'Proportionality Test',
            content: '$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\implies \\text{infinitely many solutions}$$',
            note: 'All three ratios must be equal. If only the coefficient ratios match while the constant ratio differs, the system has no solution (parallel lines).',
          },
          {
            type: 'formula',
            label: 'Parametric Representation',
            content: '$$\\text{If } x + 2y = 6,\\; \\text{set } y = t \\;\\Longrightarrow\\; x = 6 - 2t$$',
            note: 'Every real value of $t$ produces a valid solution pair $(6 - 2t,\\, t)$.',
          },
          {
            type: 'text',
            content: 'When one equation is a constant multiple of the other, both describe the **same line**. Every point on that shared line satisfies both equations, giving the system infinitely many solutions.',
          },
          {
            type: 'keyInsight',
            content: 'SAT "infinitely many solutions" problems almost always ask for a missing constant or coefficient that makes two equations proportional. The task: find the value that turns two different-looking equations into the same line.',
          },
          {
            type: 'trapCard',
            title: 'Matching Two Ratios but Ignoring the Third',
            wrong: 'Student sets $\\frac{2}{6} = \\frac{5}{15}$ and declares infinite solutions without checking the constant ratio $\\frac{c_1}{c_2}$.',
            correction: 'Two matching coefficient ratios with a different constant ratio means **no solution**, not infinite. All three ratios must agree for the lines to be identical.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $ax + 6y = 15$ and $4x + 8y = 20$ has infinitely many solutions. Find $a$.',
            steps: [
              {
                label: 'Multiplier from constants',
                content: '$\\frac{15}{20} = \\frac{3}{4}$',
              },
              {
                label: 'Check $y$-coefficients',
                content: '$\\frac{6}{8} = \\frac{3}{4}$ ✓ — consistent',
              },
              {
                label: 'Apply to $x$-coefficient',
                content: '$\\frac{a}{4} = \\frac{3}{4}$ → $a = 3$',
              },
              {
                label: 'Verify',
                content: '$3x + 6y = 15$ is $\\frac{3}{4}$ of $4x + 8y = 20$. All ratios match → infinite solutions.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'For what value of $c$ does the system $2x + 4y = 10$ and $x + 2y = c$ have infinitely many solutions?',
            answer: 'The first equation is $2$ times the second: $2(x + 2y) = 2c$, so $2c = 10$ → $c = 5$. Verification: $x + 2y = 5$ scaled by $2$ gives $2x + 4y = 10$ ✓.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'systems',
    title: 'Infinite Solutions SAT Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Walkthrough of a typical SAT problem asking for the parameter value that produces infinitely many solutions, using the coefficient-ratio method.',
        blocks: [
          {
            type: 'formula',
            label: 'Infinite-Solutions Condition',
            content: '$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$$',
            note: 'Set any two ratios equal to find the parameter, then verify the third ratio matches.',
          },
          {
            type: 'text',
            content: 'The standard approach: write both equations in $Ax + By = C$ form, compute the ratio from the known coefficients, and force every term — including the unknown parameter — to share that same ratio.',
          },
          {
            type: 'trapCard',
            title: 'Finding the Value for No Solution Instead of Infinite',
            wrong: 'Student makes the coefficient ratios equal but neglects the constant, accidentally producing the value for no solution instead of infinite.',
            correction: 'After setting the coefficient ratios equal, verify that $\\frac{C_1}{C_2}$ also matches. If it does → infinite solutions. If it differs → that parameter value actually gives no solution.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The system $kx + 3y = 12$ and $4x + 6y = 8$ has no solution. What is the value of $k$?',
            steps: [
              {
                label: 'Recall the no-solution condition',
                content: 'No solution means parallel lines: the coefficient ratios are equal, but the constant ratio is different.\n$$\\frac{k}{4} = \\frac{3}{6} \\neq \\frac{12}{8}$$',
              },
              {
                label: 'Set the coefficient ratios equal',
                content: '$\\frac{k}{4} = \\frac{3}{6} = \\frac{1}{2}$, so $k = 4 \\cdot \\frac{1}{2} = 2$.',
              },
              {
                label: 'Verify the constant ratio differs',
                content: '$\\frac{12}{8} = \\frac{3}{2}$, but the coefficient ratio is $\\frac{1}{2}$. Since $\\frac{3}{2} \\neq \\frac{1}{2}$, the system is indeed inconsistent (parallel lines).',
              },
              {
                label: 'Answer',
                content: '$k = 2$. With this value, both equations have slope $-\\frac{1}{2}$ but different $y$-intercepts, confirming no solution.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If the system $6x - 9y = 12$ and $2x - 3y = k$ has infinitely many solutions, what is $k$?',
            answer: 'Multiplier: $\\frac{6}{2} = 3$ and $\\frac{-9}{-3} = 3$. Apply to constant: $12 = 3k$ → $k = 4$. Verify: $3(2x - 3y) = 6x - 9y = 12$ ✓.',
          },
        ],
      },
    },
  },
};
