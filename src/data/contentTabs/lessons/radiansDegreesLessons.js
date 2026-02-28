export const radiansDegreesLessonTabs = {

  // ─── LESSON 1: RADIANS & DEGREES ─────────────────────────────────

  1: {
    moduleId: 'radians-degrees',
    title: 'Radians & Degrees',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Degrees and radians are two units for measuring angles. One radian is the angle subtended by an arc whose length equals the radius of the circle.',
        blocks: [
          {
            type: 'text',
            content: 'Imagine wrapping the **radius** of a circle along its circumference. The angle that arc subtends at the center is exactly **one radian**. Because the circumference is $2\\pi r$, a full circle contains $2\\pi$ radians, which equals $360°$. Half a circle is $\\pi$ radians $= 180°$.',
          },
          {
            type: 'formula',
            label: 'The Fundamental Equivalence',
            content: '$$180° = \\pi \\text{ radians}$$',
            note: 'Every conversion between degrees and radians derives from this single relationship.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Degrees to Radians', formula: '$\\text{rad} = \\text{deg} \\times \\frac{\\pi}{180}$', note: 'Multiply by $\\frac{\\pi}{180}$' },
              { label: 'Radians to Degrees', formula: '$\\text{deg} = \\text{rad} \\times \\frac{180}{\\pi}$', note: 'Multiply by $\\frac{180}{\\pi}$' },
            ],
          },
          {
            type: 'table',
            title: 'Common Angle Equivalents',
            headers: ['Degrees', 'Radians', 'Fraction of a Circle'],
            rows: [
              ['$0°$', '$0$', 'None'],
              ['$30°$', '$\\frac{\\pi}{6}$', '$\\frac{1}{12}$'],
              ['$45°$', '$\\frac{\\pi}{4}$', '$\\frac{1}{8}$'],
              ['$60°$', '$\\frac{\\pi}{3}$', '$\\frac{1}{6}$'],
              ['$90°$', '$\\frac{\\pi}{2}$', '$\\frac{1}{4}$'],
              ['$120°$', '$\\frac{2\\pi}{3}$', '$\\frac{1}{3}$'],
              ['$180°$', '$\\pi$', '$\\frac{1}{2}$'],
              ['$270°$', '$\\frac{3\\pi}{2}$', '$\\frac{3}{4}$'],
              ['$360°$', '$2\\pi$', 'Full circle'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The conversion factor is a fraction equal to $1$: $\\frac{\\pi}{180°} = 1$ and $\\frac{180°}{\\pi} = 1$. Multiplying by it changes the unit without changing the angle\'s size — the unwanted unit cancels.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Direct Conversion',
            content: 'Recognition cue: "Convert $X$ degrees to radians" or "Express $Y$ radians in degrees." First move: multiply by $\\frac{\\pi}{180}$ (degrees to radians) or $\\frac{180}{\\pi}$ (radians to degrees).',
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Radian Values in Trig Expressions',
            content: 'Recognition cue: $\\sin\\left(\\frac{\\pi}{6}\\right)$ or $\\cos\\left(\\frac{\\pi}{4}\\right)$ appears in a problem. First move: convert the radian argument to degrees to identify the reference angle, then evaluate the trig function.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying by the Wrong Fraction',
            wrong: 'To convert $60°$ to radians, student computes $60 \\times \\frac{180}{\\pi} = \\frac{10{,}800}{\\pi}$.',
            correction: 'Degrees to radians uses $\\frac{\\pi}{180}$, not $\\frac{180}{\\pi}$. Correct: $60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}$. Sanity check: radian values are small numbers (often involving $\\pi$). A result in the thousands signals the wrong direction.',
          },
          {
            type: 'tip',
            content: 'Memorize the five anchor angles: $30° = \\frac{\\pi}{6}$, $45° = \\frac{\\pi}{4}$, $60° = \\frac{\\pi}{3}$, $90° = \\frac{\\pi}{2}$, $180° = \\pi$. Every other standard angle is a multiple of these.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Converting Degrees to Radians',
            items: [
              'Write the degree value and multiply by $\\frac{\\pi}{180}$.',
              'Simplify the numerical fraction $\\frac{\\text{deg}}{180}$ before attaching $\\pi$.',
              'Express the result as a fraction times $\\pi$ (e.g., $\\frac{5\\pi}{6}$).',
            ],
          },
          {
            type: 'steps',
            title: 'Converting Radians to Degrees',
            items: [
              'Write the radian value and multiply by $\\frac{180}{\\pi}$.',
              'Cancel $\\pi$ from numerator and denominator.',
              'Compute the remaining arithmetic to get a degree value.',
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'Quick Sanity Checks',
            content: 'Radian answers are typically small numbers with $\\pi$ (like $\\frac{\\pi}{3}$, $\\frac{5\\pi}{4}$). Degree answers are ordinary numbers (like $45$, $120$, $315$). If your radians result is $10{,}800$ or your degrees result is $0.005$, the conversion went the wrong way.',
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Dropping $\\pi$ from the Answer',
            wrong: '$45° = \\frac{45}{180} = \\frac{1}{4}$ radians.',
            correction: '$45° = \\frac{45}{180} \\times \\pi = \\frac{\\pi}{4}$ radians. The factor $\\pi$ is part of the result — omitting it gives a number roughly $3.14$ times too small.',
          },
          {
            type: 'trapCard',
            title: 'Not Simplifying the Fraction',
            wrong: '$150° = \\frac{150\\pi}{180}$ radians (left unsimplified).',
            correction: 'Reduce $\\frac{150}{180} = \\frac{5}{6}$ first, giving $\\frac{5\\pi}{6}$. SAT answer choices are always in lowest terms.',
          },
          {
            type: 'trapCard',
            title: 'Calculator in the Wrong Mode',
            wrong: 'Evaluating $\\sin\\left(\\frac{\\pi}{6}\\right)$ with the calculator set to degree mode returns $\\sin(0.5236°) \\approx 0.00914$ instead of $0.5$.',
            correction: 'When the argument is in radians, the calculator must be in radian mode. On DESMOS, toggle the mode in the calculator settings.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $150°$ to radians.',
            steps: [
              { label: 'Set up', content: '$150 \\times \\frac{\\pi}{180}$' },
              { label: 'Simplify fraction', content: '$\\frac{150}{180} = \\frac{5}{6}$' },
              { label: 'Answer', content: '$\\frac{5\\pi}{6}$ radians' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $\\frac{7\\pi}{4}$ radians to degrees.',
            steps: [
              { label: 'Set up', content: '$\\frac{7\\pi}{4} \\times \\frac{180}{\\pi}$' },
              { label: 'Cancel $\\pi$', content: '$\\frac{7}{4} \\times 180$' },
              { label: 'Compute', content: '$\\frac{7 \\times 180}{4} = \\frac{1260}{4} = 315$' },
              { label: 'Answer', content: '$315°$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'An angle measures $\\frac{5\\pi}{12}$ radians. Express it in degrees and identify which quadrant it lies in.',
            steps: [
              { label: 'Convert', content: '$\\frac{5\\pi}{12} \\times \\frac{180}{\\pi} = \\frac{5 \\times 180}{12} = \\frac{900}{12} = 75$' },
              { label: 'Degrees', content: '$75°$' },
              { label: 'Quadrant', content: '$0° < 75° < 90°$, so the angle is in **Quadrant I**.' },
            ],
          },
        ],
      },
    },
  },

  // ─── LESSON 2: SIMPLE CONVERTING RADIANS TO DEGREES EXAMPLE ──────

  2: {
    moduleId: 'radians-degrees',
    title: 'Simple Converting Radians to Degrees Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Converting radians to degrees requires a single multiplication by $\\frac{180}{\\pi}$, then simplifying.',
        blocks: [
          {
            type: 'formula',
            label: 'Radians to Degrees',
            content: '$$\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}$$',
          },
          {
            type: 'text',
            content: 'When a radian value contains $\\pi$ in the numerator, the $\\pi$ cancels with the $\\pi$ in the denominator of $\\frac{180}{\\pi}$, leaving pure arithmetic. For example, $\\frac{2\\pi}{3} \\times \\frac{180}{\\pi} = \\frac{2 \\times 180}{3} = 120°$.',
          },
          {
            type: 'keyInsight',
            content: 'After cancelling $\\pi$, the problem reduces to multiplying a simple fraction by $180$. Simplify the fraction with $180$ **before** multiplying to avoid large numbers.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Recognizing Radian-to-Degree Problems',
            content: 'Recognition cue: the given angle contains $\\pi$ (e.g., $\\frac{3\\pi}{4}$) and the answer choices are plain numbers (e.g., $135$, $225$). First move: multiply by $\\frac{180}{\\pi}$ and cancel $\\pi$.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying by $\\frac{\\pi}{180}$ Instead',
            wrong: '$\\frac{\\pi}{3} \\times \\frac{\\pi}{180} = \\frac{\\pi^2}{540}$.',
            correction: 'Radians to degrees uses $\\frac{180}{\\pi}$: $\\frac{\\pi}{3} \\times \\frac{180}{\\pi} = \\frac{180}{3} = 60°$. If $\\pi$ does not cancel, the direction is wrong.',
          },
          {
            type: 'tip',
            content: 'After cancelling $\\pi$, check whether $180$ shares a common factor with the denominator. $\\frac{180}{6} = 30$, $\\frac{180}{4} = 45$, $\\frac{180}{3} = 60$, $\\frac{180}{2} = 90$. These shortcuts speed up the arithmetic.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Radians to Degrees Procedure',
            items: [
              'Write the radian value as a fraction with $\\pi$ in the numerator (e.g., $\\frac{a\\pi}{b}$).',
              'Multiply by $\\frac{180}{\\pi}$.',
              'Cancel $\\pi$ from numerator and denominator.',
              'Simplify: $\\frac{a \\times 180}{b}$. Reduce before multiplying.',
              'State the result in degrees.',
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $\\frac{\\pi}{6}$ radians to degrees.',
            steps: [
              { label: 'Set up', content: '$\\frac{\\pi}{6} \\times \\frac{180}{\\pi}$' },
              { label: 'Cancel $\\pi$', content: '$\\frac{180}{6}$' },
              { label: 'Compute', content: '$30$' },
              { label: 'Answer', content: '$30°$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Convert $\\frac{5\\pi}{3}$ radians to degrees.',
            steps: [
              { label: 'Set up', content: '$\\frac{5\\pi}{3} \\times \\frac{180}{\\pi}$' },
              { label: 'Cancel $\\pi$', content: '$\\frac{5 \\times 180}{3}$' },
              { label: 'Simplify', content: '$\\frac{180}{3} = 60$, so $5 \\times 60 = 300$' },
              { label: 'Answer', content: '$300°$' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'Convert $\\frac{3\\pi}{4}$ radians to degrees.',
            answer: '$\\frac{3\\pi}{4} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{4} = \\frac{540}{4} = 135°$.',
          },
        ],
      },
    },
  },

  // ─── LESSON 3: USING DESMOS IN RADIAN MODE ───────────────────────

  3: {
    moduleId: 'radians-degrees',
    title: 'Using DESMOS Calculator in Radian Mode Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The DESMOS calculator defaults to radian mode. In this mode, trig functions interpret their inputs as radians, so $\\sin(\\pi/6) = 0.5$.',
        blocks: [
          {
            type: 'text',
            content: 'The SAT provides a built-in DESMOS graphing calculator. By default, DESMOS operates in **radian mode**, meaning trig functions treat every input as a radian value. Entering $\\sin(\\pi/6)$ returns $0.5$ because $\\frac{\\pi}{6}$ radians $= 30°$.',
          },
          {
            type: 'steps',
            title: 'Confirming / Setting Radian Mode in DESMOS',
            items: [
              'Open the DESMOS calculator.',
              'Click the **wrench icon** (settings) in the top-right corner.',
              'Under "Angle Mode," verify that **Radians** is selected.',
              'If it shows "Degrees," click to toggle to "Radians."',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Mode Mismatch Produces Wrong Answers',
            content: 'If DESMOS is in degree mode and you enter $\\sin(\\pi/6)$, it interprets the input as $\\sin(0.5236°)$, returning $\\approx 0.00914$ instead of $0.5$. Always verify the mode matches the unit of your angle.',
          },
          {
            type: 'keyInsight',
            content: 'Use radian mode whenever the angle is expressed with $\\pi$ (e.g., $\\frac{\\pi}{4}$, $\\frac{2\\pi}{3}$). Use degree mode whenever the angle is a plain number of degrees (e.g., $45°$, $120°$).',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Evaluating Trig at Radian Arguments',
            content: 'Recognition cue: a trig expression with $\\pi$ in the argument, such as $\\cos\\left(\\frac{\\pi}{3}\\right)$. First move: ensure DESMOS is in radian mode, then type the expression directly.',
          },
          {
            type: 'trapCard',
            title: 'Wrong Calculator Mode',
            wrong: 'Student enters $\\sin(\\pi/6)$ in degree mode and gets $0.00914$.',
            correction: 'Switch to radian mode. $\\sin(\\pi/6) = 0.5$. The decimal $0.00914$ is $\\sin(0.5236°)$, which treats the radian value as a tiny degree angle.',
          },
          {
            type: 'tip',
            content: 'Quick verification: in radian mode, $\\sin(\\pi/2)$ returns exactly $1$ and $\\cos(\\pi)$ returns exactly $-1$. Type either one to confirm you are in the correct mode before proceeding.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS in Radian Mode for a Trig Calculation',
            items: [
              'Open DESMOS and confirm radian mode via the wrench icon.',
              'Type the trig expression exactly as given (e.g., $\\sin(\\pi/6)$).',
              'Read the result: DESMOS displays the exact decimal.',
              'If the problem requires an exact value (like $\\frac{\\sqrt{2}}{2}$), recognize common decimals: $0.5 = \\frac{1}{2}$, $0.7071 \\approx \\frac{\\sqrt{2}}{2}$, $0.8660 \\approx \\frac{\\sqrt{3}}{2}$.',
            ],
          },
          {
            type: 'table',
            title: 'Common Radian-Mode Results',
            headers: ['Expression', 'DESMOS Output', 'Exact Value'],
            rows: [
              ['$\\sin(\\pi/6)$', '$0.5$', '$\\frac{1}{2}$'],
              ['$\\cos(\\pi/4)$', '$0.7071...$', '$\\frac{\\sqrt{2}}{2}$'],
              ['$\\sin(\\pi/3)$', '$0.8660...$', '$\\frac{\\sqrt{3}}{2}$'],
              ['$\\cos(\\pi/2)$', '$0$', '$0$'],
              ['$\\sin(\\pi)$', '$0$', '$0$'],
              ['$\\tan(\\pi/4)$', '$1$', '$1$'],
            ],
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to evaluate $\\sin\\left(\\frac{\\pi}{6}\\right)$.',
            steps: [
              { label: 'Set mode', content: 'Open DESMOS, click the wrench icon, select **Radians**.' },
              { label: 'Enter expression', content: 'Type: $\\sin(\\pi/6)$' },
              { label: 'Read result', content: 'DESMOS displays $0.5$.' },
              { label: 'Answer', content: '$\\sin\\left(\\frac{\\pi}{6}\\right) = 0.5 = \\frac{1}{2}$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Use DESMOS to evaluate $\\cos\\left(\\frac{5\\pi}{4}\\right)$.',
            steps: [
              { label: 'Set mode', content: 'Confirm DESMOS is in radian mode.' },
              { label: 'Enter expression', content: 'Type: $\\cos(5\\pi/4)$' },
              { label: 'Read result', content: 'DESMOS displays $-0.7071...$' },
              { label: 'Interpret', content: '$-0.7071... = -\\frac{\\sqrt{2}}{2}$. The angle $\\frac{5\\pi}{4} = 225°$ is in Quadrant III where cosine is negative.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You enter $\\cos(\\pi/3)$ in DESMOS and get $0.5$. Is DESMOS in the correct mode? What is the exact value?',
            answer: 'Yes, DESMOS is in radian mode (correct for a $\\pi$-based input). $\\cos\\left(\\frac{\\pi}{3}\\right) = 0.5 = \\frac{1}{2}$.',
          },
        ],
      },
    },
  },

  // ─── LESSON 4: USING DESMOS IN DEGREE MODE ───────────────────────

  4: {
    moduleId: 'radians-degrees',
    title: 'Using DESMOS Calculator in Degree Mode Example',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Switching DESMOS to degree mode lets trig functions interpret inputs as degrees, so $\\sin(30) = 0.5$ without needing to convert to radians first.',
        blocks: [
          {
            type: 'text',
            content: 'When an SAT problem states angles in degrees (e.g., "find $\\sin(30°)$"), switching DESMOS to degree mode allows direct entry without converting to radians. In degree mode, $\\sin(30) = 0.5$ because DESMOS reads $30$ as $30°$.',
          },
          {
            type: 'steps',
            title: 'Switching DESMOS to Degree Mode',
            items: [
              'Open the DESMOS calculator.',
              'Click the **wrench icon** (settings) in the top-right corner.',
              'Under "Angle Mode," select **Degrees**.',
              'Verify by typing $\\sin(90)$ — the result should be $1$.',
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Radian Input in Degree Mode',
            content: 'If DESMOS is in degree mode and you enter $\\sin(\\pi/6)$, it computes $\\sin(0.5236°) \\approx 0.00914$, not $0.5$. Degree mode is only correct when the input is a degree value.',
          },
          {
            type: 'keyInsight',
            content: 'Degree mode eliminates one conversion step: instead of converting $30°$ to $\\frac{\\pi}{6}$ and then entering $\\sin(\\pi/6)$, just type $\\sin(30)$ directly. Use degree mode when the problem gives angles as plain numbers of degrees.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Degree-Based Trig on the SAT',
            content: 'Recognition cue: the problem uses degree symbols ($30°$, $45°$, $60°$) or says "in degrees." First move: switch DESMOS to degree mode, then enter the number directly (without the $°$ symbol).',
          },
          {
            type: 'trapCard',
            title: 'Leaving DESMOS in Radian Mode for Degree Problems',
            wrong: 'Student enters $\\sin(30)$ in radian mode and gets $-0.9880...$',
            correction: 'In radian mode, $\\sin(30)$ computes $\\sin(30 \\text{ radians})$, which is approximately $-0.9880$. Switch to degree mode first: $\\sin(30) = 0.5$.',
          },
          {
            type: 'tip',
            content: 'Quick verification for degree mode: $\\sin(90) = 1$, $\\cos(0) = 1$, $\\tan(45) = 1$. If any of these return unexpected values, the calculator is in the wrong mode.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Using DESMOS in Degree Mode for a Trig Calculation',
            items: [
              'Open DESMOS and switch to degree mode via the wrench icon.',
              'Type the trig function with the degree value as a plain number: $\\sin(30)$, $\\cos(60)$, $\\tan(45)$.',
              'Read the decimal result from DESMOS.',
              'Match to an exact value if needed: $0.5 = \\frac{1}{2}$, $0.8660... = \\frac{\\sqrt{3}}{2}$, $0.7071... = \\frac{\\sqrt{2}}{2}$.',
            ],
          },
          {
            type: 'table',
            title: 'Common Degree-Mode Results',
            headers: ['Expression', 'DESMOS Output', 'Exact Value'],
            rows: [
              ['$\\sin(30)$', '$0.5$', '$\\frac{1}{2}$'],
              ['$\\cos(45)$', '$0.7071...$', '$\\frac{\\sqrt{2}}{2}$'],
              ['$\\sin(60)$', '$0.8660...$', '$\\frac{\\sqrt{3}}{2}$'],
              ['$\\cos(90)$', '$0$', '$0$'],
              ['$\\tan(45)$', '$1$', '$1$'],
              ['$\\sin(90)$', '$1$', '$1$'],
            ],
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'When to Use Which Mode',
            content: 'Angle written with $\\pi$ (e.g., $\\frac{\\pi}{4}$, $\\frac{2\\pi}{3}$) → **radian mode**.\nAngle written as a number of degrees (e.g., $45°$, $120°$) → **degree mode**.\nMismatch between input and mode produces incorrect output.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Use DESMOS to evaluate $\\sin(30°)$.',
            steps: [
              { label: 'Set mode', content: 'Open DESMOS, click the wrench icon, select **Degrees**.' },
              { label: 'Enter expression', content: 'Type: $\\sin(30)$' },
              { label: 'Read result', content: 'DESMOS displays $0.5$.' },
              { label: 'Answer', content: '$\\sin(30°) = 0.5 = \\frac{1}{2}$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'Use DESMOS to find $\\cos(120°)$.',
            steps: [
              { label: 'Set mode', content: 'Confirm DESMOS is in degree mode.' },
              { label: 'Enter expression', content: 'Type: $\\cos(120)$' },
              { label: 'Read result', content: 'DESMOS displays $-0.5$.' },
              { label: 'Interpret', content: '$\\cos(120°) = -\\frac{1}{2}$. The angle $120°$ is in Quadrant II where cosine is negative.' },
            ],
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            question: 'You type $\\sin(90)$ in DESMOS and get $0.8940$. What went wrong, and what should the correct result be?',
            answer: 'DESMOS is in radian mode, computing $\\sin(90 \\text{ radians}) \\approx 0.8940$. Switch to degree mode: $\\sin(90°) = 1$.',
          },
        ],
      },
    },
  },
};
