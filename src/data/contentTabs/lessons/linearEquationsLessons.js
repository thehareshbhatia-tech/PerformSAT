export const linearEquationsLessonTabs = {
  1: {
    moduleId: 'linear-equations',
    title: 'What Is a Linear Equation?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The SAT tests linear equations through three forms — each reveals different information instantly, and CB designs questions to punish students who pick the wrong form.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Slope-Intercept',
                formula: '$y = mx + b$',
                note: 'Read slope ($m$) & y-int ($b$) instantly',
              },
              {
                label: 'Point-Slope',
                formula: '$y - y_1 = m(x - x_1)$',
                note: 'Build from one point + slope — fastest for "through (a, b)" questions',
              },
              {
                label: 'Standard Form',
                formula: '$Ax + By = C$',
                note: 'x-int $= C/A$, y-int $= C/B$, slope $= -A/B$ — no rearranging needed',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The SAT never asks "what is a linear equation?" It gives you one and tests whether you can **read the right number from the right form**. Slope-intercept reveals slope and y-intercept. Standard form reveals both intercepts ($C/A$ and $C/B$) and slope ($-A/B$). Point-slope reveals a point the line passes through. CB designs answer choices so that students who convert to the wrong form waste 60+ seconds and still fall for sign errors mid-conversion. **Decision rule:** look at what the question asks, then pick the form that shows it directly — never convert unless forced.',
          },
          {
            type: 'trapCard',
            title: 'The "convert everything to slope-intercept" reflex',
            wrong: 'Problem: "$3x + 4y = 24$. What is the $x$-intercept?" Student converts to $y = -\\frac{3}{4}x + 6$, sets $y = 0$, solves $\\frac{3}{4}x = 6$, gets $x = 8$ — correct but took 40 seconds.',
            correction: 'In standard form the $x$-intercept is $C/A = 24/3 = 8$ — a 3-second read. CB puts the $y$-intercept ($6$) as a wrong answer because students who convert see it first and second-guess themselves. **Rule: if it\'s in standard form and asks for an intercept, read it directly.**',
          },
          {
            type: 'strategyCard',
            title: 'Answer-Choice Form Matching',
            icon: '⚡',
            timing: '~5s',
            content: 'Before solving, glance at the answer choices. If they\'re all in standard form ($Ax + By = C$), work in standard form. If they\'re in slope-intercept form, convert once. Matching the answer-choice form eliminates a final conversion step and saves 15–20 seconds on medium/hard problems. This also catches sign-flip errors — if your answer doesn\'t match any choice, you likely have a sign wrong.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The equation $6x + 3y = 18$ represents a line in the $xy$-plane. What is the $y$-intercept of this line?\n(A) $2$\n(B) $3$\n(C) $6$\n(D) $18$',
            steps: [
              {
                label: 'Recognize the form',
                content: 'The equation is in standard form $Ax + By = C$ with $A = 6$, $B = 3$, $C = 18$.',
              },
              {
                label: 'Read the y-intercept directly',
                content: 'In standard form, the $y$-intercept $= C/B = 18/3 = 6$.',
              },
              {
                label: 'Trap check',
                content: '(B) is the value of $B$ itself — trap for students who confuse the coefficient with the intercept. (A) $2$ is the slope magnitude $|{-A/B}| = 2$. (D) $18$ is $C$ undivided. CB always includes these three distractors on standard-form intercept questions.',
              },
              {
                label: 'Answer',
                content: '**(C) $6$**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The equation $5x - 2y = 20$ represents a line. Without converting to slope-intercept form, find both intercepts and the slope.',
            answer: '$x$-intercept: $C/A = 20/5 = 4$. $y$-intercept: $C/B = 20/(-2) = -10$. Slope: $-A/B = -5/(-2) = 5/2$. Three values in under 10 seconds — no conversion needed.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'linear-equations',
    title: 'What Is the Slope?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'On the SAT, slope is never just "rise over run." It is always the **per-unit rate** in context — and CB always offers the y-intercept labeled as the slope to trap you.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope Formula',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{rise}}{\\text{run}}$$',
          },
          {
            type: 'keyInsight',
            content: 'The SAT almost never asks "what is the slope?" in isolation. The question is always **"what does the slope MEAN in this context?"** A gym charges \\$25/month with a \\$50 sign-up fee: $y = 25x + 50$. CB offers both numbers as answer choices for both parts. The only way to not fall for the swap: **slope = the "per" quantity** (per month, per mile, per item). **Intercept = the flat/fixed/initial value.** The words "per," "each," "every" are the trigger — that number is always the slope.',
          },
          {
            type: 'trapCard',
            title: 'The slope/intercept swap',
            wrong: 'Problem: "A taxi charges \\$2.50 per mile plus a \\$3 base fare. What does the $3$ represent?" Student picks "the rate per mile."',
            correction: '"Per mile" = slope (\\$2.50). The \\$3 is paid before any miles — it\'s the y-intercept (starting value). CB puts both numbers as answer choices labeled in reverse. **Fix: circle the word "per" — that number is always the slope. The other number is the intercept.**',
          },
          {
            type: 'strategyCard',
            title: 'The 5-Second Keyword Scan',
            icon: '⚡',
            timing: '~5s',
            content: 'Before reading answer choices, circle two numbers in the word problem: the one attached to **"per/each/every"** (slope) and the one attached to **"initial/base/starting/fee/already"** (intercept). This 5-second scan prevents the #1 trap on linear context questions. If the problem says "decreases by" or "loses" — that slope is negative.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A plumber charges a \\$60 service fee plus \\$45 per hour. The total cost $C$ for $h$ hours is $C = 45h + 60$. What does $45$ represent in this context?\n(A) The total cost after one hour\n(B) The service fee\n(C) The cost for each additional hour of labor\n(D) The number of hours worked',
            steps: [
              {
                label: 'Keyword scan',
                content: '"\\$45 **per** hour" — the word "per" tags this as the slope.',
              },
              {
                label: 'Confirm position in equation',
                content: '$45$ is the coefficient of $h$ (the variable). Coefficient of the variable = slope.',
              },
              {
                label: 'Trap check',
                content: '(B) "the service fee" is the intercept (\\$60) — this is the classic CB swap, offering the other number for the wrong role. (A) is $45(1) + 60 = 105$, a calculation trap.',
              },
              {
                label: 'Answer',
                content: '**(C)** The cost for each additional hour of labor.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The equation $T = -3d + 72$ models the temperature $T$ (°F) of a cooling drink $d$ minutes after being placed outside. What is the slope, and what does it mean?',
            answer: 'Slope $= -3$. The drink\'s temperature **decreases** by $3$°F **per minute**. The negative sign means the quantity is going down. The $72$ is the starting temperature (y-intercept).',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from Two Coordinates',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Two points determine the slope — and from there, the full equation. The SAT tests whether you can keep the subtraction order consistent and avoid the sign trap.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from Two Points',
            content: '$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$',
          },
          {
            type: 'keyInsight',
            content: 'Once you have slope, the full equation is one step away: plug $m$ and either point into **point-slope form** $y - y_1 = m(x - x_1)$. This two-step pipeline — slope first, then equation — handles nearly every "find the equation" SAT question. The SAT gives you two points (sometimes disguised as function notation like $f(2) = 7$) and tests if you can execute this pipeline without a sign error.',
          },
          {
            type: 'trapCard',
            title: 'Subtraction order mismatch',
            wrong: 'Points $(2, 5)$ and $(6, 17)$. Student writes $\\frac{17 - 5}{2 - 6} = \\frac{12}{-4} = -3$.',
            correction: 'The numerator subtracts $(y_2 - y_1)$ but the denominator subtracts $(x_1 - x_2)$ — opposite order. Both must follow the same order: $\\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$. **Rule: whichever point you put first on top, put first on the bottom too.**',
          },
          {
            type: 'strategyCard',
            title: 'Sign check shortcut',
            icon: '⚡',
            timing: '~3s',
            content: 'Before computing, glance at the two points: does $y$ increase or decrease as $x$ increases? If $y$ goes up, slope is positive. If $y$ goes down, slope is negative. This 3-second visual check catches sign errors instantly — if your calculation disagrees with the direction, you flipped the order somewhere.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line passes through $(2, 7)$ and $(5, 16)$. What is the equation in slope-intercept form?',
            steps: [
              {
                label: 'Direction check',
                content: 'As $x$ goes from $2$ to $5$ (increases), $y$ goes from $7$ to $16$ (increases). Slope must be positive.',
              },
              {
                label: 'Compute slope',
                content: '$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$ ✓ Positive, matches our check.',
              },
              {
                label: 'Point-slope → slope-intercept',
                content: '$y - 7 = 3(x - 2) \\Rightarrow y = 3x - 6 + 7 = 3x + 1$',
              },
              {
                label: 'Answer',
                content: '$y = 3x + 1$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the slope of the line through $(-1, 4)$ and $(3, -8)$. Before calculating, predict: is the slope positive or negative?',
            answer: 'As $x$ increases from $-1$ to $3$, $y$ decreases from $4$ to $-8$ — slope must be negative. $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$. Confirmed negative.',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from a Table',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The SAT gives you a table and expects you to find slope — but the $x$-values don\'t always increase by $1$. Dividing by the actual $\\Delta x$ is the trap that catches most students.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'From any two rows in a table: slope $= \\frac{\\Delta y}{\\Delta x}$. The critical mistake: students read the $y$-column changes and write that as the slope, forgetting to divide by the actual $x$-column step. When $x$ increases by $1$, the shortcut works. When $x$ increases by $2$, $3$, or $5$, you **must divide**. The SAT deliberately uses non-unit $x$-steps to trigger this error.',
          },
          {
            type: 'table',
            headers: ['$x$', '$y$'],
            rows: [
              ['$0$', '$1$'],
              ['$2$', '$7$'],
              ['$4$', '$13$'],
              ['$6$', '$19$'],
            ],
          },
          {
            type: 'trapCard',
            title: 'Non-uniform $x$-step ignored',
            wrong: 'Table has $x = 0, 2, 4, 6$. Between rows, $y$ increases by $6$ each time. Student writes slope $= 6$.',
            correction: 'The $x$-step is $2$, not $1$. Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{6}{2} = 3$. **Rule: always check the $x$-column spacing before dividing.** CB uses $x$-steps of $2$, $3$, $5$, or $10$ specifically to bait this trap.',
          },
          {
            type: 'strategyCard',
            title: 'The $x = 0$ row shortcut',
            icon: '⚡',
            timing: '~3s',
            content: 'Scan the table for a row where $x = 0$. If it exists, the $y$-value in that row **is** the y-intercept — no algebra needed. In the table above, $x = 0$ gives $y = 1$, so $b = 1$ instantly. Combine with slope to get the equation in under 15 seconds.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'For the linear function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$.\n| $x$ | $f(x)$ |\n|---|---|\n| $0$ | $29$ |\n| $1$ | $32$ |\n| $2$ | $35$ |\nWhich equation defines $f(x)$?\n(A) $f(x) = 3x + 29$\n(B) $f(x) = 29x + 3$\n(C) $f(x) = 32x + 29$\n(D) $f(x) = 29x + 32$',
            steps: [
              {
                label: 'Find slope',
                content: '$\\Delta y = 32 - 29 = 3$, $\\Delta x = 1 - 0 = 1$. Slope $= 3/1 = 3$. Eliminate (B), (C), and (D) immediately — only (A) has slope $3$.',
              },
              {
                label: 'Confirm y-intercept',
                content: 'The $x = 0$ row gives $f(0) = 29$, so $b = 29$. Equation: $f(x) = 3x + 29$.',
              },
              {
                label: 'Trap check',
                content: '(B) swaps slope and intercept — the classic CB move. The "29" attached to $x$ would mean slope $= 29$, which is wrong.',
              },
              {
                label: 'Answer',
                content: '**(A)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A table shows: $x = 3, 6, 9, 12$ and $y = 5, 11, 17, 23$. What is the slope? What mistake would students make if they didn\'t check $\\Delta x$?',
            answer: '$\\Delta y = 6$, $\\Delta x = 3$. Slope $= 6/3 = 2$. Students who ignore $\\Delta x$ would write slope $= 6$, which is triple the actual answer.',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'linear-equations',
    title: 'Determining Slope from a Graph',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The SAT shows you a graph and gives four equation choices. Your first move: check whether the line goes up or down — that alone eliminates half the choices.',
        blocks: [
          {
            type: 'formula',
            label: 'Slope from a Graph',
            content: '$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$',
          },
          {
            type: 'keyInsight',
            content: 'From the video: the instructor\'s first move on any graph question is to check **direction**. Line going downward left-to-right → slope is negative → immediately cross out every positive-slope answer choice. That one observation cuts the choices in half in 3 seconds. Then differentiate the remaining choices by the y-intercept (where the line crosses the $y$-axis). This two-step elimination — direction first, then y-intercept — solves most graph-to-equation questions without computing the exact slope.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting the negative sign on a downhill line',
            wrong: 'Line goes downhill. Student counts rise $= 10$, run $= 15$, writes slope $= \\frac{10}{15} = \\frac{2}{3}$.',
            correction: 'A downhill line has **negative** slope. The rise is $-10$ (you\'re going down). Slope $= \\frac{-10}{15} = -\\frac{2}{3}$. CB always includes both $+\\frac{2}{3}$ and $-\\frac{2}{3}$ as answer choices to exploit this exact mistake.',
          },
          {
            type: 'strategyCard',
            title: 'Direction → Y-intercept → Eliminate',
            icon: '⚡',
            timing: '~10s',
            content: 'Step 1: Line going up or down? Eliminate all choices with the wrong sign. Step 2: Where does the line cross the $y$-axis? Eliminate choices with the wrong intercept. Often this alone identifies the answer without computing the exact slope. Only calculate rise/run if two choices remain.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A scatter plot shows data points with a line of best fit going **downward** from left to right, crossing the $y$-axis at approximately $10$. Which equation best models the data?\n(A) $y = 8x + 10$\n(B) $y = -\\frac{2}{3}x + 10$\n(C) $y = \\frac{2}{3}x - 10$\n(D) $y = -8x - 10$',
            steps: [
              {
                label: 'Step 1: Direction',
                content: 'Line goes **downward** → slope is negative. Eliminate (A) and (C) — both have positive slopes.',
              },
              {
                label: 'Step 2: Y-intercept',
                content: 'Line crosses $y$-axis at $\\approx 10$ (positive). Eliminate (D) — its intercept is $-10$.',
              },
              {
                label: 'Confirm',
                content: 'Only (B) remains: negative slope $(-\\frac{2}{3})$ and positive intercept $(10)$. No slope calculation needed.',
              },
              {
                label: 'Answer',
                content: '**(B)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A line on a graph passes through $(0, 40)$ and $(60, 0)$. Using rise/run, what is the slope? Why is the sign negative?',
            answer: 'Rise $= 0 - 40 = -40$, Run $= 60 - 0 = 60$. Slope $= -40/60 = -2/3$. The line goes downward (from $y = 40$ to $y = 0$), so rise is negative. The $y$-intercept is $40$ (where $x = 0$).',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'linear-equations',
    title: 'What is the Y-Intercept?',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The y-intercept is where $x = 0$ — the starting value before anything changes. The SAT tests whether you can identify it in context and not swap it with the slope.',
        blocks: [
          {
            type: 'formula',
            label: 'Finding the Y-Intercept',
            content: '$$\\text{Set } x = 0: \\quad y = m(0) + b = b$$',
          },
          {
            type: 'keyInsight',
            content: 'In every SAT word problem, the y-intercept is the **"before" number** — the value that exists before any $x$-activity happens. "A tank **starts with** 500 gallons" → $b = 500$. "A phone plan has a \\$40 **base** fee" → $b = 40$. "She **already had** 12 books" → $b = 12$. The intercept is always the quantity at $x = 0$, which in real-world terms means "before any time passes / before any units are purchased / before any miles are driven." CB tests this by asking "what does the constant term represent?" and offering the rate as a distractor.',
          },
          {
            type: 'trapCard',
            title: 'Confusing rate with starting value',
            wrong: 'Problem: "A water tank starts with $500$ gallons and drains at $15$ gallons per minute. What does $500$ represent?" Student picks "the rate of change."',
            correction: '"Starts with" = initial value = y-intercept. "Per minute" = rate = slope. The $500$ is the y-intercept because it\'s what exists at $t = 0$ before any draining occurs. **Rule: "starts/initial/base/fee/already" = intercept. "Per/each/every" = slope.**',
          },
          {
            type: 'strategyCard',
            title: 'Plug in zero — always works',
            icon: '⚡',
            timing: '~5s',
            content: 'Any time the question asks for the y-intercept: **set $x = 0$ and evaluate**. Works on all three forms without converting. For $Ax + By = C$: set $x = 0$, get $By = C$, so $y = C/B$. For point-slope: set $x = 0$ and simplify. Never rearrange the whole equation first — just plug in zero.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A water tank starts with $500$ gallons and drains at $15$ gallons per minute. Which equation models the water level $W$ after $t$ minutes, and what is the y-intercept in context?\n(A) $W = 15t + 500$\n(B) $W = -15t + 500$\n(C) $W = 500t - 15$\n(D) $W = -500t + 15$',
            steps: [
              {
                label: 'Keyword scan',
                content: '"\\$15 **per** minute" → slope. "**Starts with** 500" → y-intercept. "Drains" → negative rate.',
              },
              {
                label: 'Build equation',
                content: 'Slope $= -15$ (draining = decreasing). Intercept $= 500$. So $W = -15t + 500$.',
              },
              {
                label: 'Trap check',
                content: '(A) has $+15$ — misses the "drain" negative. (C) swaps slope and intercept completely. (D) swaps AND misapplies the negative.',
              },
              {
                label: 'Answer',
                content: '**(B)**. The y-intercept ($500$) means the tank holds 500 gallons at $t = 0$, before draining starts.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'In the equation $C = 0.12m + 40$, where $C$ is monthly cost and $m$ is minutes used, what does $40$ represent? What does $0.12$ represent?',
            answer: '$40$ is the y-intercept — the base monthly cost at $m = 0$ (before any minutes are used). $0.12$ is the slope — the cost **per** additional minute. At $m = 0$: $C = 0.12(0) + 40 = 40$.',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Context',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Context questions give you a story and expect $y = mx + b$. The video shows: find slope from the "for every" statement, then plug in the given coordinate to solve for $b$.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'From the video: the approach is always the same two-step pipeline. **Step 1:** Find slope from context — "for every increase in $x$ by 1, $y$ increases by 8" means slope $= 8/1 = 8$. **Step 2:** Plug in the given coordinate to find $b$ — "when $x = 2$, $y = 18$" gives you $(2, 18)$, so $18 = 8(2) + b$, giving $b = 2$. Full equation: $y = 8x + 2$. This pipeline works for every context-to-equation question on the SAT.',
          },
          {
            type: 'trapCard',
            title: 'Negative rate missed',
            wrong: '"A candle is $12$ inches tall and burns at $0.5$ inches per hour." Student writes $h = 0.5t + 12$.',
            correction: 'Burning **reduces** height. The rate is $-0.5$: $h = -0.5t + 12$. Words like "burns," "drains," "loses," "decreases," "depreciates" all signal a **negative slope**. CB always offers the positive-slope version as answer choice (A) or (B).',
          },
          {
            type: 'strategyCard',
            title: 'Slope-first elimination',
            icon: '⚡',
            timing: '~8s',
            content: 'From the video: "Right off the bat, the correct answer must be choice C because that has the correct slope." Find slope from context first, then immediately cross out every answer choice with the wrong slope. Often only one choice survives. If two remain, check the y-intercept by plugging in the given point.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The relationship between two variables $x$ and $y$ is linear. For every increase in the value of $x$ by $1$, the value of $y$ increases by $8$. When the value of $x$ is $2$, the value of $y$ is $18$. Which equation represents this relationship?\n(A) $y = 2x + 18$\n(B) $y = 2x + 8$\n(C) $y = 8x + 2$\n(D) $y = 18x + 2$',
            steps: [
              {
                label: 'Find slope from context',
                content: '"For every increase in $x$ by $1$, $y$ increases by $8$" → $m = \\frac{8}{1} = 8$. Eliminate (A) and (B) — wrong slope.',
              },
              {
                label: 'Plug in coordinate to find $b$',
                content: '"When $x = 2$, $y = 18$" → the point $(2, 18)$. Plug in: $18 = 8(2) + b \\Rightarrow b = 2$.',
              },
              {
                label: 'Trap check',
                content: '(D) uses $18$ as slope — it\'s the $y$-value, not the rate. (A) uses $2$ as slope — it\'s the $x$-value.',
              },
              {
                label: 'Answer',
                content: '**(C) $y = 8x + 2$**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A streaming service charges a one-time activation fee of \\$15 plus \\$9.50 per month. Write the equation for total cost $C$ after $m$ months. Which number is slope, and which is intercept?',
            answer: '"\\$9.50 **per** month" = slope. "One-time fee of \\$15" = y-intercept. $C = 9.50m + 15$. CB would offer $C = 15m + 9.50$ as a swap distractor.',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Graph (Example 1)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: read the y-intercept where the line crosses the $y$-axis, check slope direction (up/down), then eliminate. Most graph questions don\'t require calculating exact slope.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video strategy for graph-to-equation questions: **(1)** Check slope direction — "this line is going downwards, so my slope must be **negative**. This allows me to cross out answer choices C and D." **(2)** Read the y-intercept — "my graph intercepts the y-axis around positive 10." **(3)** Only the choice matching both survives. This direction → intercept → eliminate pipeline solves most graph questions in under 15 seconds without computing exact slope.',
          },
          {
            type: 'trapCard',
            title: 'Reading the wrong axis for the intercept',
            wrong: 'Student reads where the line crosses the $x$-axis (horizontal) at $x = 15$ and writes $b = 15$.',
            correction: 'The **y**-intercept is where the line crosses the **vertical** ($y$-) axis at $x = 0$. The $x$-intercept is where $y = 0$. CB puts both intercept values as answer choices — make sure you\'re reading the right axis.',
          },
          {
            type: 'strategyCard',
            title: 'Answer choices not in $y = mx + b$? Convert first.',
            icon: '⚡',
            timing: '~15s',
            content: 'From the video: when answer choices are in standard form like $8x + 12y = 480$, you can\'t see slope and intercept directly. The instructor converts: subtract $8x$, divide by $12$, giving $y = -\\frac{2}{3}x + 40$. Now slope $(-\\frac{2}{3})$ and intercept $(40)$ are visible. Only convert the choices that survived your direction/intercept elimination — never convert all four.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line on a graph goes **downward** from left to right, crossing the $y$-axis at $\\approx 40$. Two points on the line are $(0, 40)$ and $(60, 0)$. Which equation could represent this line?\n(A) $y = 8x + 10$\n(B) $8x + 12y = 480$\n(C) $y = \\frac{2}{3}x - 10$\n(D) $y = -\\frac{2}{3}x - 10$',
            steps: [
              {
                label: 'Direction check',
                content: 'Line goes downward → slope is negative. Eliminate (A) (positive slope) and (C) (positive slope).',
              },
              {
                label: 'Y-intercept check',
                content: 'Line crosses $y$-axis at $+40$. (D) has intercept $-10$ — eliminate. Only (B) remains.',
              },
              {
                label: 'Verify (B)',
                content: 'Convert: $12y = -8x + 480 \\Rightarrow y = -\\frac{2}{3}x + 40$. Negative slope ✓ Intercept $40$ ✓',
              },
              {
                label: 'Answer',
                content: '**(B)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A line crosses the $y$-axis at $(0, 3)$ and passes through $(2, 9)$. What is the equation? Find it in under 15 seconds.',
            answer: 'Y-intercept $= 3$ (read directly). Slope $= \\frac{9 - 3}{2 - 0} = 3$. Equation: $y = 3x + 3$. Total time: ~10 seconds.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Graph (Example 2)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When the y-intercept isn\'t visible or the answer choices are in standard form, find two clear points, compute rise/run, and match to the choices.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'From the video: the instructor finds two clear lattice points on the graph, then counts "to get from this point to the next, I must rise $-10$ units and run $+15$ units, so my slope is $-10/15 = -2/3$." When answer choices are in standard form ($Ax + By = C$), you must convert each surviving choice to $y = mx + b$ to verify. The instructor converts choice B: $8x + 12y = 480$ → $y = -\\frac{2}{3}x + 40$ — matching both slope and intercept.',
          },
          {
            type: 'trapCard',
            title: 'Estimating a non-integer intercept by eye',
            wrong: 'The y-intercept appears to be around $2.5$, so the student writes $b = 2.5$ and picks the closest answer.',
            correction: 'Eyeballing introduces errors. Use two lattice points to compute slope algebraically, then solve $b = y_1 - mx_1$ for the exact intercept. A \\$0.5 error changes which answer choice is correct.',
          },
          {
            type: 'strategyCard',
            title: 'Desmos verification for graph questions',
            icon: '⚡',
            timing: '~15s',
            content: 'On the digital SAT, type each surviving answer choice into Desmos and see which graph matches the one shown. This is especially useful when answer choices are in standard form and conversion is tedious. Type the equation, check if the line direction and intercepts match.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A line passes through $(3, 5)$ and $(6, 11)$, but the $y$-axis is not visible. Write the equation in slope-intercept form.',
            steps: [
              {
                label: 'Compute slope',
                content: '$m = \\frac{11 - 5}{6 - 3} = \\frac{6}{3} = 2$',
              },
              {
                label: 'Use point-slope',
                content: '$y - 5 = 2(x - 3) \\Rightarrow y = 2x - 6 + 5 = 2x - 1$',
              },
              {
                label: 'Verify with second point',
                content: 'Check $(6, 11)$: $2(6) - 1 = 11$ ✓',
              },
              {
                label: 'Answer',
                content: '$y = 2x - 1$. The intercept $b = -1$ wasn\'t readable from the graph — algebra was required.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A line passes through $(4, 3)$ and $(10, 0)$. Find the equation. What is the y-intercept?',
            answer: 'Slope $= \\frac{0 - 3}{10 - 4} = \\frac{-3}{6} = -\\frac{1}{2}$. Using $(10, 0)$: $y - 0 = -\\frac{1}{2}(x - 10) \\Rightarrow y = -\\frac{1}{2}x + 5$. Y-intercept $= 5$.',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from a Table',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: "$f(x)$ is just another way of saying $y$." Find slope from the change in $y$ over change in $x$, then check if $x = 0$ is in the table — that row gives you $b$ for free.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video\'s approach: **(1)** "The $x$ is the input, the $f(x)$ is just another way of saying $y$." Reframe the table as $(x, y)$ pairs. **(2)** Compute slope: $\\frac{\\Delta y}{\\Delta x}$ from any two rows. **(3)** Check if $x = 0$ exists in the table — "when $x$ is zero, the $y$ is $29$, and so that\'s our $b$ value." If $x = 0$ isn\'t there, plug any row into $y = mx + b$ and solve for $b$. **(4)** Eliminate by slope first — "answer A is the only one that has the correct slope."',
          },
          {
            type: 'trapCard',
            title: 'Slope/intercept swap in answer choices',
            wrong: 'Table: $x = 0, 1, 2$ and $f(x) = 29, 32, 35$. Slope $= 3$, intercept $= 29$. Student picks $f(x) = 29x + 3$.',
            correction: 'That answer has slope $29$ and intercept $3$ — the classic CB swap. The slope ($3$) is the **change per unit**, not the starting value. The intercept ($29$) is the $f(0)$ value. **Rule: slope is always the coefficient of $x$, intercept is always the standalone constant.**',
          },
          {
            type: 'strategyCard',
            title: 'Slope-first elimination from tables',
            icon: '⚡',
            timing: '~10s',
            content: 'Compute slope from any two rows. Then scan all four answer choices for that slope value (the coefficient of $x$). From the video: finding slope = 3 instantly eliminated three choices. Most table-to-equation questions can be solved by slope alone without even finding $b$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A table shows:\n| $x$ | $f(x)$ |\n|---|---|\n| $0$ | $29$ |\n| $1$ | $32$ |\n| $2$ | $35$ |\nWhich equation defines $f(x)$?\n(A) $f(x) = 3x + 29$\n(B) $f(x) = 29x + 3$\n(C) $f(x) = 32x$\n(D) $f(x) = 35x - 6$',
            steps: [
              {
                label: 'Find slope',
                content: '$\\Delta y = 32 - 29 = 3$, $\\Delta x = 1 - 0 = 1$. Slope $= 3$. Only (A) has slope $3$ — done.',
              },
              {
                label: 'Verify with $x = 0$ row',
                content: '$f(0) = 29$ → $b = 29$. Equation: $f(x) = 3x + 29$ ✓',
              },
              {
                label: 'Trap check',
                content: '(B) swaps slope and intercept. (C) uses $f(1) = 32$ as slope. (D) uses $f(2) = 35$ as slope.',
              },
              {
                label: 'Answer',
                content: '**(A)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Table: $x = 2, 5, 8, 11$ and $y = 3, 12, 21, 30$. Find slope and the full equation. Watch the $x$-step.',
            answer: '$\\Delta y = 12 - 3 = 9$, $\\Delta x = 5 - 2 = 3$. Slope $= 9/3 = 3$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow b = -3$. Equation: $y = 3x - 3$.',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'linear-equations',
    title: 'Deriving Linear Equations from Function Notation',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: "$f(0) = 8$ and $f(1) = 12$" — all function notation follows the form $f(x) = y$. Input is $x$, output is $y$. Two statements give you two points.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video\'s key teaching: "All function notation always follows $f(x) = y$. This is your input, this is your output. You always input an $x$-value and get an output of a $y$-value." So $f(0) = 8$ gives the point $(0, 8)$ and $f(1) = 12$ gives $(1, 12)$. Two points → slope → equation. **Bonus:** $f(0)$ is always the y-intercept because it\'s the output when $x = 0$. The instructor emphasizes: "we\'re not always given that $x = 0$ coordinate, so you must know the algebraic approach."',
          },
          {
            type: 'trapCard',
            title: 'Treating $f(3)$ as multiplication',
            wrong: 'Student sees $f(3) = 10$ and writes "$f \\times 3 = 10$, so $f = \\frac{10}{3}$."',
            correction: '$f(3) = 10$ means "the function $f$ evaluated at $x = 3$ outputs $10$." It\'s the point $(3, 10)$, not a product. The parentheses in $f(3)$ mean "input," not "multiply."',
          },
          {
            type: 'strategyCard',
            title: '$f(0)$ = instant y-intercept',
            icon: '⚡',
            timing: '~3s',
            content: 'If you see $f(0) = k$ in the problem, that\'s $b = k$ immediately — the y-intercept is handed to you. From the video: "the y-intercept is where the $x$-value happens to be zero, and that is luckily given to us." Scan for $f(0)$ before doing any other work.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'In the linear function $f$, $f(0) = 8$ and $f(1) = 12$. Which equation defines $f$?\n(A) $f(x) = 12x$\n(B) $f(x) = 8x + 12$\n(C) $f(x) = 12x + 8$\n(D) $f(x) = 4x + 8$',
            steps: [
              {
                label: 'Translate to coordinates',
                content: '$f(0) = 8$ → $(0, 8)$. $f(1) = 12$ → $(1, 12)$.',
              },
              {
                label: 'Slope',
                content: '$m = \\frac{12 - 8}{1 - 0} = 4$. Eliminate (A) slope $12$, (B) slope $8$, (C) slope $12$.',
              },
              {
                label: 'Y-intercept',
                content: '$f(0) = 8$ → $b = 8$ directly. Equation: $f(x) = 4x + 8$.',
              },
              {
                label: 'Answer',
                content: '**(D)**. (A) uses the $f(1)$ value as slope. (C) also uses $12$ as slope — CB\'s favorite distractor here.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A linear function satisfies $g(2) = 7$ and $g(5) = 16$. Find $g(x)$ and then evaluate $g(0)$.',
            answer: 'Slope $= \\frac{16 - 7}{5 - 2} = 3$. Using $(2, 7)$: $7 = 3(2) + b \\Rightarrow b = 1$. $g(x) = 3x + 1$. $g(0) = 1$ (the y-intercept).',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'linear-equations',
    title: 'Parallel Lines',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the videos: "No solution → no intersection → parallel → same slope, different intercept." This logic chain is the backbone of 5+ question types on the SAT.',
        blocks: [
          {
            type: 'formula',
            label: 'Parallel Condition',
            content: '$$\\text{Parallel} \\iff m_1 = m_2 \\text{ and } b_1 \\neq b_2$$',
          },
          {
            type: 'keyInsight',
            content: 'The SAT tests parallel lines in two ways: **(1) Direct:** "Which line is parallel to $y = 3x + 5$?" — just match the slope. **(2) Systems:** "The system has no solution. Find $k$." — no solution means no intersection, which means the lines are parallel, which means same slope. The video teaches this chain: **no solution → no intersection → parallel → same slope, different intercept.** Memorize this chain — it appears on nearly every SAT.',
          },
          {
            type: 'trapCard',
            title: 'Same slope + same intercept = same line, not parallel',
            wrong: 'Student sets slopes equal, finds $k = 4$, but at $k = 4$ the equations become identical ($y = 2x + 3$ and $y = 2x + 3$).',
            correction: 'Same slope + same intercept = the **same line** (infinitely many solutions), not parallel (zero solutions). After finding $k$, always verify the intercepts are **different**. CB frequently includes the "same line" $k$-value as a distractor.',
          },
          {
            type: 'strategyCard',
            title: 'Coefficient ratio shortcut for systems',
            icon: '⚡',
            timing: '~10s',
            content: 'For $A_1x + B_1y = C_1$ and $A_2x + B_2y = C_2$: compare $\\frac{A_1}{A_2}$ and $\\frac{B_1}{B_2}$ and $\\frac{C_1}{C_2}$. If the first two ratios match but the third doesn\'t → **no solution** (parallel). If all three match → **infinitely many** (same line). If the first two differ → **one solution** (intersecting).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'The function $f$ is defined by $f(x) = 2x + 3$. The graph of $y = f(x)$ is parallel to line $j$. What is the slope of line $j$?',
            steps: [
              {
                label: 'Identify slope of $f$',
                content: '$f(x) = 2x + 3$ → slope $= 2$.',
              },
              {
                label: 'Apply parallel rule',
                content: 'Parallel lines have the **same slope**. Slope of line $j = 2$.',
              },
              {
                label: 'That\'s it',
                content: 'From the video: "Function $f$ is parallel to line $j$ and parallel lines have the same slope. Therefore, the slope of line $j$ must be $2$." No calculation needed beyond reading the slope.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Write the equation of the line parallel to $y = 4x - 3$ that passes through $(2, 1)$.',
            answer: 'Parallel → same slope $= 4$. Point-slope: $y - 1 = 4(x - 2) \\Rightarrow y = 4x - 7$. Different intercept ($-7 \\neq -3$) ✓ — confirmed parallel, not the same line.',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: when told "parallel to $y = 7x + 4$ through $(0, 5)$," copy the slope, then plug in the point. The y-intercept is the only thing that changes.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video shows: "If this line is parallel to $y = 7x + 4$, this line must clearly have the same exact slope as $y = 7x + 4$. Therefore, the slope must also be $7$." Then plug in the given point $(0, 5)$ to find $b = 5$. Final equation: $y = 7x + 5$. **Two-step process: (1) copy slope, (2) plug in point for $b$.** When the point is $(0, b)$, the y-intercept is handed to you — $b = 5$ instantly.',
          },
          {
            type: 'trapCard',
            title: 'Using perpendicular slope instead of parallel',
            wrong: 'Problem says "parallel to $y = 3x + 1$." Student computes negative reciprocal: slope $= -\\frac{1}{3}$.',
            correction: '**Parallel = same slope.** Perpendicular = negative reciprocal. These are the two most confused words on the SAT. **Rule: underline "parallel" or "perpendicular" before computing.** Parallel means copy the slope exactly.',
          },
          {
            type: 'strategyCard',
            title: 'Given $(0, b)$? Skip the algebra.',
            icon: '⚡',
            timing: '~5s',
            content: 'When the given point has $x = 0$ (like $(0, 5)$), the y-intercept is the $y$-value directly — no need to solve $b = y - mx$. Copy the slope, write the intercept, done. From the video: "we can plug in $0$ for $x$ and $5$ for $y$... $b$ is clearly $5$."',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is the equation of the line that passes through $(0, 5)$ and is parallel to $y = 7x + 4$?\n(A) $y = 4x + 5$\n(B) $y = 5x + 7$\n(C) $y = 7x + 5$\n(D) $y = 7x + 4$',
            steps: [
              {
                label: 'Copy slope',
                content: 'Parallel → same slope $= 7$. Eliminate (A) and (B) — wrong slopes.',
              },
              {
                label: 'Check intercept',
                content: 'Point $(0, 5)$ → $b = 5$. (D) has $b = 4$ (that\'s the original line). (C) has $b = 5$ ✓',
              },
              {
                label: 'Trap check',
                content: '(D) is the original line itself — a trap for students who copy the entire equation instead of just the slope.',
              },
              {
                label: 'Answer',
                content: '**(C)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the equation parallel to $y = -2x + 5$ through $(3, 1)$.',
            answer: 'Slope $= -2$. Point-slope: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 7$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines Question #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'When the original line is in standard form, you must first extract the slope as $-A/B$ before building the parallel line.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'From the video: "In order to clearly tell what the slope is, I must first get this line into $y = mx + b$ form." For standard form $Ax + By = C$, the shortcut is slope $= -A/B$. But **watch the sign of $B$** — if $B$ is negative, the double negative flips the slope positive. This sign error is the #1 mistake on standard-form parallel questions.',
          },
          {
            type: 'trapCard',
            title: 'Sign error with double negative',
            wrong: 'From $4x - 2y = 10$, student writes slope $= -\\frac{4}{2} = -2$, forgetting that $B = -2$ (not $+2$).',
            correction: '$B$ is $-2$ (include the sign). Slope $= -\\frac{A}{B} = -\\frac{4}{-2} = +2$. The negative $B$ flips the slope sign. **Rule: when you see a minus sign before $y$, the slope will be positive.**',
          },
          {
            type: 'strategyCard',
            title: 'Standard form → slope in 5 seconds',
            icon: '⚡',
            timing: '~5s',
            content: 'For $Ax + By = C$: slope $= -A/B$. Don\'t rearrange the whole equation — just read $A$ and $B$ (with their signs) and compute the ratio. Then negate. Practice: $3x + 5y = 7$ → slope $= -3/5$. $2x - 3y = 9$ → slope $= -2/(-3) = +2/3$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Line $\\ell$: $4x - 2y = 10$. Write the equation of the line parallel to $\\ell$ through $(1, 3)$.',
            steps: [
              {
                label: 'Extract slope from standard form',
                content: '$A = 4$, $B = -2$. Slope $= -A/B = -4/(-2) = +2$. Note: $B$ is negative.',
              },
              {
                label: 'Parallel line through $(1, 3)$',
                content: '$y - 3 = 2(x - 1) \\Rightarrow y = 2x + 1$',
              },
              {
                label: 'Verify',
                content: 'At $(1, 3)$: $2(1) + 1 = 3$ ✓. Slopes match ($2 = 2$), intercepts differ ($1 \\neq -5$) ✓',
              },
              {
                label: 'Answer',
                content: '$y = 2x + 1$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the slope of $6x - 3y = 9$ using the $-A/B$ shortcut. Then write the parallel line through $(2, 4)$.',
            answer: 'Slope $= -6/(-3) = 2$. Using $(2, 4)$: $y - 4 = 2(x - 2) \\Rightarrow y = 2x$.',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'linear-equations',
    title: 'Simple Parallel Lines in a System Question',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: "No solution must mean no intersection. And no intersection must mean these lines are parallel. Parallel lines have the same slope but different y-intercept."',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video\'s logic chain for every "no solution" question: **No solution → no intersection → parallel → same slope, different intercept.** The instructor shows: given $y = 6x + 18$, the parallel line must have slope $6$ and a different intercept. Choice (A) has slope $6$ but also intercept $18$ — "making these the same exact lines and therefore not parallel." Choice (B) has slope $6$ and different intercept — "making these lines parallel, meaning they\'ll never intersect, meaning they\'ll have no solution."',
          },
          {
            type: 'trapCard',
            title: 'Same slope + same intercept ≠ "no solution"',
            wrong: 'Given $y = 6x + 18$. Student picks $y = 6x + 18$ because "it has the same slope." But same slope AND same intercept = same line = infinitely many solutions.',
            correction: 'No solution requires **same slope, DIFFERENT intercept**. Same everything = same line = infinite solutions. CB always includes the "same line" option as a distractor. **Check both slope AND intercept.**',
          },
          {
            type: 'strategyCard',
            title: 'Elimination by slope, then intercept',
            icon: '⚡',
            timing: '~10s',
            content: 'Step 1: Find the slope of the given equation. Eliminate any choice with a different slope (those would intersect). Step 2: From the surviving choices, eliminate any with the same intercept (that would be the same line). The remaining choice is the answer.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'One equation in a system is $y = 6x + 18$. The system has no solution. Which could be the second equation?\n(A) $y = 6x + 18$\n(B) $y = 6x + 10$\n(C) $y = -6x + 18$\n(D) $y = 3x + 18$',
            steps: [
              {
                label: 'No solution → parallel → same slope',
                content: 'Given slope $= 6$. Eliminate (C) slope $-6$ and (D) slope $3$ — wrong slopes.',
              },
              {
                label: 'Check intercepts differ',
                content: '(A) has intercept $18$ — same as given, so it\'s the **same line** (infinite solutions, not zero). (B) has intercept $10 \\neq 18$ — different intercept ✓',
              },
              {
                label: 'Answer',
                content: '**(B)**. Same slope ($6$), different intercept ($10 \\neq 18$) → parallel → no solution.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $2x + 3y = 7$ and $6x + ky = 10$ has no solution. What is $k$?',
            answer: 'No solution → parallel → slopes match. Slope 1: $-2/3$. Slope 2: $-6/k$. Set equal: $2/3 = 6/k \\Rightarrow 2k = 18 \\Rightarrow k = 9$. Check intercepts: $7/3 \\neq 10/9$ ✓',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: when coefficients are fractions, isolate $y$ in both equations, identify the slopes, set them equal, and cross-multiply to solve for the constant.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video walks through a complex problem with fractional coefficients: $-\\frac{3}{2}y - \\frac{1}{4}x = \\frac{2}{3}$ and $py - \\frac{9}{2}x = 1$. The approach: **(1)** Isolate $y$ in each equation to find slope. **(2)** Equation 1 slope = $\\frac{1}{12}$, Equation 2 slope = $\\frac{1}{2p}$. **(3)** Set equal: $\\frac{1}{12} = \\frac{1}{2p}$. **(4)** Cross-multiply to solve: $2p = 12$, so $p = 6$. The difficulty is purely algebraic — the logic is always the same "no solution → parallel → same slope."',
          },
          {
            type: 'trapCard',
            title: 'Dropping the expression parentheses',
            wrong: 'From $(k+1)x + 4y = 10$, student writes $A = k$ instead of $A = k + 1$.',
            correction: 'The entire expression $(k+1)$ is the coefficient of $x$. Slope $= -\\frac{k+1}{4}$. Preserve the full expression. **Rule: whatever is multiplied by $x$ — the whole thing — is $A$.**',
          },
          {
            type: 'strategyCard',
            title: 'Cross-multiply when fractions face each other',
            icon: '⚡',
            timing: '~10s',
            content: 'From the video: "Whenever you have two fractions on opposite ends of an equal sign, you are able to cross multiply." $\\frac{a}{b} = \\frac{c}{d}$ becomes $ad = bc$. This eliminates fraction arithmetic entirely and is faster than finding common denominators.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $(k+1)x + 4y = 10$ and $3x + 2y = 7$ has no solution. What is the value of $k$?',
            steps: [
              {
                label: 'Extract slopes',
                content: 'Eq 1: slope $= -\\frac{k+1}{4}$. Eq 2: slope $= -\\frac{3}{2}$.',
              },
              {
                label: 'Set slopes equal (parallel)',
                content: '$\\frac{k+1}{4} = \\frac{3}{2}$',
              },
              {
                label: 'Cross-multiply',
                content: '$2(k+1) = 12 \\Rightarrow 2k + 2 = 12 \\Rightarrow k = 5$',
              },
              {
                label: 'Verify intercepts differ',
                content: 'Eq 1: $\\frac{10}{4} = 2.5$. Eq 2: $\\frac{7}{2} = 3.5$. Different ✓ → confirmed parallel, not same line.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $(2k)x + 6y = 4$ and $5x + 3y = 9$ has no solution. Find $k$.',
            answer: 'Slopes: $-\\frac{2k}{6} = -\\frac{k}{3}$ and $-\\frac{5}{3}$. Set equal: $\\frac{k}{3} = \\frac{5}{3} \\Rightarrow k = 5$. Intercepts: $\\frac{4}{6} \\neq \\frac{9}{3}$ ✓',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #1 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: graph both equations in Desmos, add a slider for the unknown constant, and adjust until the lines become parallel (no intersection).',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video\'s Desmos approach: **(1)** "We can graph these two equations just the way they\'re given on Desmos." **(2)** "We are able to add a slider for the $p$ value and manipulate the second equation until these lines are parallel." **(3)** "You will constantly adjust the $p$ value until you find the value that makes these two lines parallel." The key insight: parallel lines have **no intersection point** — Desmos shows this clearly when the lines run side-by-side at every zoom level.',
          },
          {
            type: 'trapCard',
            title: 'Slider range doesn\'t include the answer',
            wrong: 'Default slider is $-10$ to $10$, but the answer is $p = 28$. Student assumes no solution exists.',
            correction: 'From the video: "Within this limit of $-10$ to $10$, there\'s no sign of this line becoming parallel. So let\'s change that limit. Let\'s make it $-30$ to $30$." **Always widen the slider range if you don\'t find the answer in the default window.**',
          },
          {
            type: 'strategyCard',
            title: 'Desmos parallel verification',
            icon: '⚡',
            timing: '~20s',
            content: 'From the video: "If you zoom all the way out, Desmos always gives you the intersection point." If you see an intersection at any zoom level, the lines aren\'t parallel yet — keep adjusting. When you zoom all the way out and see **no intersection** and the lines run perfectly side-by-side, you\'ve found the right value.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Using Desmos, find the value of $p$ that makes $2x + 5y = 8$ and $px + 10y = 3$ have no solution.',
            steps: [
              {
                label: 'Enter in Desmos',
                content: 'Type both equations. Desmos creates a slider for $p$ automatically.',
              },
              {
                label: 'Adjust slider',
                content: 'Move $p$ until the lines are parallel (no intersection visible at any zoom). This happens at $p = 4$.',
              },
              {
                label: 'Verify algebraically',
                content: 'Slopes: $-2/5$ and $-4/10 = -2/5$. Equal ✓. Intercepts: $8/5 \\neq 3/10$. Different ✓.',
              },
              {
                label: 'Answer',
                content: '$p = 4$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You enter $3x + 4y = 8$ and $kx + 8y = 5$ into Desmos. At what $k$-value do the lines become parallel?',
            answer: 'Slopes match: $3/4 = k/8 \\Rightarrow k = 6$. In Desmos, the slider shows no intersection at $k = 6$.',
          },
        ],
      },
    },
  },

  18: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: when coefficients involve $r$ and fractions, isolate $y$ in both equations, identify slopes, set them equal, and cross-multiply. The difficulty is algebraic, not conceptual.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video solves $48x - 64y = 48y + 24$ and $r(-12x + 3) = y$ by isolating $y$ in each: line 1 slope $= 48/112$, line 2 slope $= -12/r$. Since parallel means same slope: $48/112 = -12/r$. Cross-multiply: $48r = -12 \\times 112 \\Rightarrow r = -28$. **Key pattern: when the unknown is in the denominator, cross-multiplication is the move.**',
          },
          {
            type: 'trapCard',
            title: 'Distribution error in coefficient',
            wrong: 'From $(k-2)x + 3y = 7$, student writes slope $= -k/3$, dropping the $-2$.',
            correction: 'The full coefficient of $x$ is $(k-2)$. Slope $= -\\frac{k-2}{3}$. Preserve the entire expression. Distribute only when cross-multiplying.',
          },
          {
            type: 'strategyCard',
            title: 'Isolate $y$ first, always',
            icon: '⚡',
            timing: '~15s',
            content: 'From the video: "In order to clearly tell what the slopes are, I must first get these lines into $y = mx + b$ form. Which means I must isolate the $y$ values." Rearranging to $y = mx + b$ makes slopes visible. Once both slopes are visible, set them equal and solve.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'The system $(k-2)x + 3y = 7$ and $5x + 6y = 11$ has no solution. Find $k$.',
            steps: [
              {
                label: 'Extract slopes',
                content: 'Eq 1: slope $= -\\frac{k-2}{3}$. Eq 2: slope $= -\\frac{5}{6}$.',
              },
              {
                label: 'Set equal and cross-multiply',
                content: '$\\frac{k-2}{3} = \\frac{5}{6} \\Rightarrow 6(k-2) = 15 \\Rightarrow 6k - 12 = 15 \\Rightarrow k = \\frac{27}{6} = \\frac{9}{2}$',
              },
              {
                label: 'Verify intercepts differ',
                content: '$7/3 \\neq 11/6$ ✓ → confirmed parallel.',
              },
              {
                label: 'Answer',
                content: '$k = \\frac{9}{2}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $(k-1)x + 6y = 10$ and $4x + 3y = 8$ has no solution. Find $k$.',
            answer: 'Slopes: $-\\frac{k-1}{6}$ and $-\\frac{4}{3}$. Set equal: $\\frac{k-1}{6} = \\frac{4}{3} \\Rightarrow 3(k-1) = 24 \\Rightarrow k = 9$.',
          },
        ],
      },
    },
  },

  19: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #2 (DESMOS Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: the same problem solved purely in Desmos — graph both equations, manipulate the slider, widen the range if needed, and watch for the lines to become parallel.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video demonstrates: "Within this limit of $-10$ to $+10$, there\'s no sign of the line becoming parallel. So let\'s change that limit to $-30$ to $+30$." Then: "if we move in the negative direction, it definitely looks like these lines will become parallel. If we make $r = -28$, there is no intersection. These lines are parallel, giving me my answer."',
          },
          {
            type: 'trapCard',
            title: 'Lines look parallel but aren\'t',
            wrong: 'At $r = -26$, lines look parallel in the default view. Student submits $r = -26$.',
            correction: 'From the video: "If we make $r = -26$, notice there\'s an intersection right here and they\'re not parallel." Near-parallel lines can look identical in a small window. **Always zoom all the way out** — if there\'s an intersection anywhere, they\'re not parallel.',
          },
          {
            type: 'strategyCard',
            title: 'Desmos slider: when to widen the range',
            icon: '⚡',
            timing: '~20s',
            content: 'If you sweep the entire default slider ($-10$ to $10$) and never see parallel lines, click the slider endpoints and change them to $-50$ to $50$. The answer is often outside the default range on hard problems. From the video: the answer was $r = -28$, well outside the default window.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Using Desmos, find $r$ that makes $(2r-1)x + 6y = 5$ parallel to $3x + 2y = 8$.',
            steps: [
              {
                label: 'Enter equations in Desmos',
                content: 'Type both. Desmos creates a slider for $r$.',
              },
              {
                label: 'Algebraic setup',
                content: 'Eq 2 slope: $-3/2$. Eq 1 slope: $-(2r-1)/6$. Set equal: $\\frac{2r-1}{6} = \\frac{3}{2}$.',
              },
              {
                label: 'Cross-multiply',
                content: '$2(2r-1) = 18 \\Rightarrow 4r - 2 = 18 \\Rightarrow r = 5$',
              },
              {
                label: 'Desmos confirmation',
                content: 'Set slider to $r = 5$. Zoom out — no intersection visible. Lines are parallel ✓',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'You enter $(3k)x + 8y = 5$ and $6x + 4y = 11$ into Desmos. At what $k$-value are the lines parallel?',
            answer: 'Slopes match: $3k/8 = 6/4 \\Rightarrow 3k/8 = 3/2 \\Rightarrow 6k = 24 \\Rightarrow k = 4$.',
          },
        ],
      },
    },
  },

  20: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines in a System Question #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: an alternative approach — rearrange both sides of the equation into separate lines, then set slopes equal. "Since both sides are equal, I can set them equal to $y$."',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video shows a creative reframe for equations like $21px - 3x = 84$: "I will add $3x$ on both sides. Since both sides are equal to each other, I can set them equal to the same thing — I will set them equal to $y$." This creates two separate lines: line 1 ($y = 21px$) and line 2 ($y = 3x + 84$). No solution means these lines are parallel, so $21p = 3$, giving $p = 1/7$.',
          },
          {
            type: 'trapCard',
            title: 'Denominator sign oversight',
            wrong: 'From $3x - ky = 10$, student writes slope $= -3/k$, ignoring the negative on $k$.',
            correction: '$B = -k$. Slope $= -A/B = -3/(-k) = +3/k$. The negative in front of $k$ flips the slope sign. **Always include the sign of $B$ when extracting slope from standard form.**',
          },
          {
            type: 'strategyCard',
            title: 'Split into two lines when one equation looks weird',
            icon: '⚡',
            timing: '~15s',
            content: 'From the video: when you see an equation like $21px - 3x = 84$ with no $y$, the trick is to set both sides equal to $y$: left side becomes line 1, right side becomes line 2 (a horizontal line $y = 84$ or add $3x$ first). Now it\'s a parallel lines problem. "The slope of line 1 is $21p$. The slope of line 2 is $3$. And so we set them equal."',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In the equation $21px - 3x = 84$, $p$ is a constant. The equation has no solution. What is $p$?',
            steps: [
              {
                label: 'Reframe as two lines',
                content: 'Add $3x$ to both sides: $21px = 3x + 84$. Set both equal to $y$: Line 1: $y = 21px$. Line 2: $y = 3x + 84$.',
              },
              {
                label: 'No solution → parallel → same slope',
                content: 'Slope of line 1: $21p$. Slope of line 2: $3$. Set equal: $21p = 3$.',
              },
              {
                label: 'Solve',
                content: '$p = \\frac{3}{21} = \\frac{1}{7}$',
              },
              {
                label: 'Answer',
                content: '$p = \\frac{1}{7}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The system $4x + ky = 20$ and $2x - 3y = 7$ has no solution. Find $k$.',
            answer: 'Slopes: $-4/k$ and $-2/(-3) = 2/3$. Set equal: $-4/k = 2/3 \\Rightarrow -12 = 2k \\Rightarrow k = -6$.',
          },
        ],
      },
    },
  },

  21: {
    moduleId: 'linear-equations',
    title: 'Complex Parallel Lines #3 (Answer Choices Method)',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: when algebra is messy, plug each answer choice into the equation and check if it produces "no solution" ($0 = \\text{non-zero}$).',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video shows the answer-choice plugging method: "Since this question gives us answer choices, we can plug them in." Plug $p = 0$: "$-28$... since $p = 0$ allows us to solve for $x$, that\'s definitely not no-solution." Plug $p = 1/7$: "gives us $0x$. Anything times $0$ is $0$, and $0$ is clearly not equal to $84$. Therefore, that is what no solution looks like." **No solution means: after simplifying, you get $0 = \\text{nonzero}$ — a contradiction.**',
          },
          {
            type: 'trapCard',
            title: 'Matching slopes but missing the intercept check',
            wrong: 'Student finds slopes match at $k = 6$ but doesn\'t verify intercepts differ — the lines might be identical.',
            correction: 'From the video on the earlier problem: "answer choice A has the same slope but also the same y-intercept, making these the same exact lines." Equal slopes + equal intercepts = same line = infinitely many solutions, NOT zero. **Always verify intercepts are different.**',
          },
          {
            type: 'strategyCard',
            title: 'The "0 = nonzero" test',
            icon: '⚡',
            timing: '~15s',
            content: 'Plug each answer choice into the equation. Combine like terms. If the variable cancels out and you\'re left with $0 = \\text{some number}$ — that\'s no solution. If you can still solve for the variable — that\'s a valid solution. From the video: $0x = 84$ → "$0$ is clearly not equal to $84$. That is what no solution looks like."',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'In the equation $21px - 3x = 84$, $p$ is a constant. The equation has no solution. What is $p$?\n(A) $0$\n(B) $\\frac{1}{7}$\n(C) $3$\n(D) $7$',
            steps: [
              {
                label: 'Test (A): $p = 0$',
                content: '$21(0)x - 3x = 84 \\Rightarrow -3x = 84 \\Rightarrow x = -28$. Has a solution — eliminate.',
              },
              {
                label: 'Test (B): $p = 1/7$',
                content: '$21(\\frac{1}{7})x - 3x = 84 \\Rightarrow 3x - 3x = 84 \\Rightarrow 0 = 84$. **Contradiction** — no solution ✓',
              },
              {
                label: 'Why this works',
                content: 'When $p = 1/7$, the $x$-terms cancel ($3x - 3x = 0x$), leaving $0 = 84$, which is impossible. That\'s the definition of "no solution."',
              },
              {
                label: 'Answer',
                content: '**(B) $p = \\frac{1}{7}$**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'System: $kx + 4y = 12$ and $3x + 2y = 5$. Choices: (A) $2$ (B) $4$ (C) $6$ (D) $8$. Which gives no solution?',
            answer: 'Test (C) $k = 6$: slopes $= -6/4 = -3/2$ and $-3/2$. Equal. Intercepts: $12/4 = 3$ vs $5/2 = 2.5$. Different. **Answer: (C)**.',
          },
        ],
      },
    },
  },

  22: {
    moduleId: 'linear-equations',
    title: 'Perpendicular Lines',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: perpendicular means "opposite reciprocal" — opposite (change the sign) AND reciprocal (flip the fraction). Two operations, not one.',
        blocks: [
          {
            type: 'formula',
            label: 'Perpendicular Slope',
            content: '$$m_1 \\cdot m_2 = -1 \\qquad\\text{i.e.}\\qquad m_2 = -\\frac{1}{m_1}$$',
          },
          {
            type: 'keyInsight',
            content: 'From the video: "The slope of line $R$ must be the **opposite reciprocal** of the slope of line $P$. Opposite meaning that negative will now become a positive, and reciprocal meaning that we will flip this fraction." The slope was $-9$ ($= -9/1$). Opposite: $+9/1$. Reciprocal: $1/9$. So the perpendicular slope is $+1/9$. **Two operations.** CB gives answer choices with just the reciprocal (forgot the sign flip) or just the negative (forgot the flip) — every time.',
          },
          {
            type: 'trapCard',
            title: 'Flip without negating (or negate without flipping)',
            wrong: 'Given slope $= -9$. Student writes perpendicular slope $= \\frac{1}{9}$ (flipped but didn\'t change the sign to get $\\frac{1}{9}$... wait, that\'s actually correct from $-9$). Alternative: Given slope $= 2$. Student writes $\\frac{1}{2}$ (flipped but not negated).',
            correction: 'From slope $= 2$: the reciprocal is $1/2$, the opposite is $-1/2$. You need BOTH operations. Check: $2 \\times (-1/2) = -1$ ✓. CB always includes $+1/2$ (flipped only) and $-2$ (negated only) as wrong answers.',
          },
          {
            type: 'strategyCard',
            title: 'Product check: $m_1 \\times m_2 = -1$',
            icon: '⚡',
            timing: '~3s',
            content: 'After computing the perpendicular slope, multiply it by the original. If the product is $-1$, you\'re correct. If it\'s $+1$, you forgot to negate. If it\'s anything else, you made an arithmetic error. This 3-second check catches the #1 perpendicular mistake.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Line $P$ is defined by $2y + 18x = 9$. Line $R$ is perpendicular to line $P$. What is the slope of line $R$?\n(A) $-9$\n(B) $9$\n(C) $\\frac{1}{9}$\n(D) $-\\frac{1}{9}$',
            steps: [
              {
                label: 'Get line $P$ into $y = mx + b$',
                content: 'From the video: subtract $18x$: $2y = -18x + 9$. Divide by $2$: $y = -9x + \\frac{9}{2}$. Slope of $P = -9$.',
              },
              {
                label: 'Opposite reciprocal',
                content: 'Opposite: $-9 \\to +9$. Reciprocal: $9 \\to \\frac{1}{9}$. Perpendicular slope $= +\\frac{1}{9}$.',
              },
              {
                label: 'Product check',
                content: '$(-9) \\times (\\frac{1}{9}) = -1$ ✓',
              },
              {
                label: 'Answer',
                content: '**(C) $\\frac{1}{9}$**. (A) is the original slope. (D) forgot the sign change.',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'What is the slope perpendicular to $y = \\frac{3}{7}x - 4$? Do the product check.',
            answer: 'Given slope $= 3/7$. Opposite: $-3/7$. Reciprocal: $-7/3$. Check: $(3/7)(-7/3) = -1$ ✓. Perpendicular slope $= -7/3$.',
          },
        ],
      },
    },
  },

  23: {
    moduleId: 'linear-equations',
    title: 'Simple Perpendicular Lines Question',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Compute the opposite reciprocal, then use point-slope with the given point. The video eliminates wrong slopes first, then verifies the point.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The answer-choice elimination strategy for perpendicular questions: if the original slope is $\\frac{2}{3}$, the perpendicular slope is $-\\frac{3}{2}$. CB always includes four traps among the choices: **(A)** the parallel slope $\\frac{2}{3}$, **(B)** the correct $-\\frac{3}{2}$, **(C)** the reciprocal without the sign flip $\\frac{3}{2}$, **(D)** the negative without the flip $-\\frac{2}{3}$. Know which operation you\'re missing and you\'ll never pick the wrong one.',
          },
          {
            type: 'trapCard',
            title: 'Confusing parallel and perpendicular keywords',
            wrong: 'Problem says "perpendicular." Student keeps slope $= 2/3$ (parallel behavior).',
            correction: 'Parallel = **same** slope. Perpendicular = **opposite reciprocal** slope. The SAT relies on you misreading one word. **Underline "parallel" or "perpendicular" before touching the math.**',
          },
          {
            type: 'strategyCard',
            title: 'Eliminate by slope, then verify point',
            icon: '⚡',
            timing: '~10s',
            content: 'Step 1: Compute the perpendicular slope. Eliminate every choice with the wrong slope (usually eliminates 3 of 4). Step 2: Plug the given point into the surviving choice to confirm. Most perpendicular questions are solved by slope elimination alone.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'What is the equation of the line perpendicular to $y = \\frac{2}{3}x + 1$ that passes through $(4, -2)$?\n(A) $y = \\frac{2}{3}x - \\frac{14}{3}$\n(B) $y = -\\frac{3}{2}x + 4$\n(C) $y = \\frac{3}{2}x - 8$\n(D) $y = -\\frac{2}{3}x + \\frac{2}{3}$',
            steps: [
              {
                label: 'Perpendicular slope',
                content: 'Given slope $= 2/3$. Opposite reciprocal $= -3/2$. Only (B) has slope $-3/2$.',
              },
              {
                label: 'Trap identification',
                content: '(A) slope $2/3$ = parallel. (C) slope $3/2$ = flipped but not negated. (D) slope $-2/3$ = negated but not flipped.',
              },
              {
                label: 'Verify point $(4, -2)$',
                content: '$-\\frac{3}{2}(4) + 4 = -6 + 4 = -2$ ✓',
              },
              {
                label: 'Answer',
                content: '**(B)**',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Find the equation perpendicular to $y = -4x + 3$ through $(8, 5)$.',
            answer: 'Perpendicular slope $= +1/4$. Check: $(-4)(1/4) = -1$ ✓. Point-slope: $y - 5 = \\frac{1}{4}(x - 8) \\Rightarrow y = \\frac{1}{4}x + 3$.',
          },
        ],
      },
    },
  },

  24: {
    moduleId: 'linear-equations',
    title: 'Complex Perpendicular Lines Question',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'From the video: find unknown constants $a$ and $b$ by using the perpendicular relationship, then use Desmos to verify among the answer choices.',
        blocks: [
          {
            type: 'keyInsight',
            content: 'The video\'s approach for complex perpendicular problems: **(1)** Get line 1 into $y = mx + b$ to find its slope ($-5/7$). **(2)** The perpendicular slope must be $+7/5$. **(3)** Get line 2 into $y = mx + b$ — the slope comes out as $-a/b$. **(4)** Set $-a/b = 7/5$ and solve: "the $b$ value must be $5$ and the $a$ value must be $-7$." **(5)** Plug $a$ and $b$ into the answer choices and graph in Desmos to verify which pair is perpendicular.',
          },
          {
            type: 'trapCard',
            title: 'Standard form slope extraction omits the negative',
            wrong: 'From $5x + 3y = 15$, student writes slope $= 5/3$ instead of $-5/3$.',
            correction: 'Slope from $Ax + By = C$ is $-A/B = -5/3$, not $+5/3$. Missing the negative means the perpendicular slope will also be wrong (wrong sign). **Always include the negative in $-A/B$.**',
          },
          {
            type: 'strategyCard',
            title: 'Desmos to verify perpendicular',
            icon: '⚡',
            timing: '~20s',
            content: 'From the video: "Now that I\'ve figured out what $a$ and $b$ are, I can rewrite the equations in my answer choices... and graph them onto Desmos." Graph each answer choice pair — perpendicular lines form a clear right angle (90°). "Answer choice A is clearly not perpendicular. Answer choice B clearly creates perpendicular lines because these lines create right angles."',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Line $\\ell$: $5x + 3y = 15$. Line $m$ is perpendicular to $\\ell$ and passes through the $x$-intercept of $\\ell$. What is the equation of line $m$?',
            steps: [
              {
                label: 'Find x-intercept of $\\ell$',
                content: 'Set $y = 0$: $5x = 15 \\Rightarrow x = 3$. Point: $(3, 0)$.',
              },
              {
                label: 'Slope of $\\ell$',
                content: '$m_{\\ell} = -A/B = -5/3$',
              },
              {
                label: 'Perpendicular slope',
                content: 'Opposite reciprocal of $-5/3$: flip → $-3/5$, negate → $+3/5$. Check: $(-5/3)(3/5) = -1$ ✓',
              },
              {
                label: 'Build equation through $(3, 0)$',
                content: '$y - 0 = \\frac{3}{5}(x - 3) \\Rightarrow y = \\frac{3}{5}x - \\frac{9}{5}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Line $\\ell$: $2x - 5y = 10$. A perpendicular line passes through the y-intercept of $\\ell$. Find the perpendicular line\'s equation.',
            answer: 'Y-intercept of $\\ell$: set $x = 0 \\Rightarrow y = -2$, giving $(0, -2)$. Slope of $\\ell$: $-2/(-5) = 2/5$. Perpendicular slope: $-5/2$. Check: $(2/5)(-5/2) = -1$ ✓. Equation: $y = -\\frac{5}{2}x - 2$.',
          },
        ],
      },
    },
  },
};
