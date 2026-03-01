export const radiansDegreesLessonTabs = {
  1: {
    moduleId: 'radians-degrees',
    title: 'Radians & Degrees',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Degrees and radians are two units for measuring angles. A full rotation equals 360° or 2π radians, and every conversion rests on the identity 180° = π radians.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Degrees → Radians',
                formula: '$\\text{rad} = \\text{deg} \\times \\dfrac{\\pi}{180}$',
                note: 'Multiply by π/180',
              },
              {
                label: 'Radians → Degrees',
                formula: '$\\text{deg} = \\text{rad} \\times \\dfrac{180}{\\pi}$',
                note: 'Multiply by 180/π',
              },
            ],
          },
          {
            type: 'text',
            content: `One **radian** is the central angle subtended by an arc whose length equals the circle's radius. Because a full circumference is $2\pi r$, a complete revolution spans $2\pi$ radians. Half a revolution is $\pi$ radians, which equals $180°$. This single equivalence — $180° = \pi$ rad — drives both conversion directions.`,
          },
          {
            type: 'keyInsight',
            content: `Each conversion factor — $\frac{\pi}{180}$ and $\frac{180}{\pi}$ — equals $1$ because $\pi$ rad $= 180°$. Multiplying by either changes the unit without changing the angle's size; the unwanted unit cancels algebraically.`,
          },
          {
            type: 'table',
            headers: [
              'Degrees',
              'Radians',
              'Fraction of Circle',
            ],
            rows: [
              [
                '$30°$',
                '$\\frac{\\pi}{6}$',
                '$\\frac{1}{12}$',
              ],
              [
                '$45°$',
                '$\\frac{\\pi}{4}$',
                '$\\frac{1}{8}$',
              ],
              [
                '$60°$',
                '$\\frac{\\pi}{3}$',
                '$\\frac{1}{6}$',
              ],
              [
                '$90°$',
                '$\\frac{\\pi}{2}$',
                '$\\frac{1}{4}$',
              ],
              [
                '$120°$',
                '$\\frac{2\\pi}{3}$',
                '$\\frac{1}{3}$',
              ],
              [
                '$180°$',
                '$\\pi$',
                '$\\frac{1}{2}$',
              ],
              [
                '$270°$',
                '$\\frac{3\\pi}{2}$',
                '$\\frac{3}{4}$',
              ],
              [
                '$360°$',
                '$2\\pi$',
                '$1$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Using the Inverted Fraction',
            wrong: 'Converting $60°$ to radians: $60 \\times \\frac{180}{\\pi} = \\frac{10{,}800}{\\pi}$.',
            correction: 'Degrees-to-radians requires $\\frac{\\pi}{180}$, not $\\frac{180}{\\pi}$. Correct: $60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}$. Radian values of standard angles are small multiples of $\\pi$ — a result in the thousands signals the fraction is flipped.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $150°$ to radians.',
            steps: [
              {
                label: 'Apply factor',
                content: '$150 \\times \\frac{\\pi}{180}$',
              },
              {
                label: 'Reduce',
                content: '$\\frac{150}{180} = \\frac{5}{6}$',
              },
              {
                label: 'Answer',
                content: '$\\dfrac{5\\pi}{6}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $210°$ to radians and state the quadrant.',
            answer: '$210 \\times \\frac{\\pi}{180} = \\frac{210\\pi}{180} = \\frac{7\\pi}{6}$. Because $180° < 210° < 270°$, the angle is in Quadrant III.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'radians-degrees',
    title: 'Simple Converting Radians to Degrees Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Converting a radian value to degrees requires one multiplication by 180/π. When the radian expression contains π in the numerator, π cancels and the problem reduces to a simple fraction times 180.',
        blocks: [
          {
            type: 'formula',
            label: 'Radians → Degrees',
            content: '$$\\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}$$',
          },
          {
            type: 'text',
            content: 'Most Digital SAT radian values take the form $\\frac{a\\pi}{b}$. Multiplying by $\\frac{180}{\\pi}$ cancels $\\pi$, leaving $\\frac{a \\cdot 180}{b}$. Dividing $180$ by the denominator first keeps the arithmetic small: $\\frac{180}{6} = 30$, $\\frac{180}{4} = 45$, $\\frac{180}{3} = 60$, $\\frac{180}{2} = 90$.',
          },
          {
            type: 'keyInsight',
            content: 'After $\\pi$ cancels, the entire problem becomes one fraction times $180$. Simplifying the denominator into $180$ before multiplying by the numerator eliminates large intermediate products.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying by $\\frac{\\pi}{180}$ Instead',
            wrong: '$\\frac{\\pi}{3} \\times \\frac{\\pi}{180} = \\frac{\\pi^2}{540}$ — produces an irrational $\\pi^2$ term.',
            correction: 'Radians-to-degrees uses $\\frac{180}{\\pi}$: $\\frac{\\pi}{3} \\times \\frac{180}{\\pi} = \\frac{180}{3} = 60°$. When $\\pi$ fails to cancel, the conversion fraction is inverted.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Convert $\\frac{\\pi}{6}$ radians to degrees.',
            steps: [
              {
                label: 'Multiply',
                content: '$\\frac{\\pi}{6} \\times \\frac{180}{\\pi}$',
              },
              {
                label: 'Cancel $\\pi$',
                content: '$\\frac{180}{6}$',
              },
              {
                label: 'Answer',
                content: '$30°$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Convert $\\frac{\\pi}{6}$ radians to degrees.',
            answer: '$30°$',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'radians-degrees',
    title: 'Using DESMOS Calculator in Radian Mode Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The DESMOS graphing calculator on the Digital SAT defaults to radian mode, where trig functions interpret inputs as radian values — entering sin(π/6) returns 0.5 because π/6 radians equals 30°.',
        blocks: [
          {
            type: 'text',
            content: 'In radian mode, DESMOS treats every argument to $\\sin$, $\\cos$, and $\\tan$ as a radian measurement. Typing $\\sin(\\pi/6)$ computes the sine of $\\frac{\\pi}{6}$ radians ($30°$), returning $0.5$. The **wrench icon** in the top-right corner of the calculator toggles between radian and degree mode.',
          },
          {
            type: 'keyInsight',
            content: 'Quick mode verification: $\\sin(\\pi/2)$ returns exactly $1$ in radian mode. Any other result means the calculator is set to degree mode and must be toggled via the wrench icon.',
          },
          {
            type: 'table',
            headers: [
              'DESMOS Input',
              'Decimal Output',
              'Exact Value',
            ],
            rows: [
              [
                '$\\sin(\\pi/6)$',
                '$0.5$',
                '$\\frac{1}{2}$',
              ],
              [
                '$\\cos(\\pi/4)$',
                '$0.7071$',
                '$\\frac{\\sqrt{2}}{2}$',
              ],
              [
                '$\\sin(\\pi/3)$',
                '$0.8660$',
                '$\\frac{\\sqrt{3}}{2}$',
              ],
              [
                '$\\cos(\\pi/2)$',
                '$0$',
                '$0$',
              ],
              [
                '$\\tan(\\pi/4)$',
                '$1$',
                '$1$',
              ],
              [
                '$\\sin(\\pi)$',
                '$0$',
                '$0$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Calculator Set to Degree Mode',
            wrong: 'Entering $\\sin(\\pi/6)$ in degree mode returns $0.00914$ instead of $0.5$.',
            correction: 'Degree mode interprets $\\pi/6 \\approx 0.5236$ as $0.5236°$, a tiny angle whose sine is nearly zero. Switching to radian mode gives $\\sin(\\pi/6) = 0.5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Evaluate $\\sin\\!\\left(\\frac{\\pi}{6}\\right)$ using DESMOS.',
            steps: [
              {
                label: 'Set mode',
                content: 'Click the wrench icon → confirm **Radians** is selected.',
              },
              {
                label: 'Enter',
                content: 'Type $\\sin(\\pi/6)$.',
              },
              {
                label: 'Read output',
                content: 'DESMOS displays $0.5$.',
              },
              {
                label: 'Exact value',
                content: '$\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Evaluate $\\sin\\!\\left(\\frac{\\pi}{6}\\right)$ using DESMOS.',
            answer: '$\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'radians-degrees',
    title: 'Using DESMOS Calculator in Degree Mode Example',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Switching DESMOS to degree mode causes trig functions to interpret inputs as degrees — typing sin(30) returns 0.5 without requiring a prior conversion to radians.',
        blocks: [
          {
            type: 'text',
            content: 'When a problem states angles in degrees, switching DESMOS to degree mode allows direct entry: $\\sin(30) = 0.5$, $\\cos(60) = 0.5$, $\\tan(45) = 1$. Click the **wrench icon** and select **Degrees** to enable this mode. DESMOS then treats every numeric argument as a degree value.',
          },
          {
            type: 'keyInsight',
            content: 'Degree mode eliminates a conversion step: instead of converting $45°$ to $\\frac{\\pi}{4}$ and entering $\\sin(\\pi/4)$, type $\\sin(45)$ directly to get $0.7071$.',
          },
          {
            type: 'table',
            headers: [
              'DESMOS Input (Degree Mode)',
              'Output',
              'Exact Value',
            ],
            rows: [
              [
                '$\\sin(30)$',
                '$0.5$',
                '$\\frac{1}{2}$',
              ],
              [
                '$\\cos(45)$',
                '$0.7071$',
                '$\\frac{\\sqrt{2}}{2}$',
              ],
              [
                '$\\sin(60)$',
                '$0.8660$',
                '$\\frac{\\sqrt{3}}{2}$',
              ],
              [
                '$\\cos(90)$',
                '$0$',
                '$0$',
              ],
              [
                '$\\tan(45)$',
                '$1$',
                '$1$',
              ],
              [
                '$\\sin(90)$',
                '$1$',
                '$1$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Radian Mode with Degree Inputs',
            wrong: 'Entering $\\sin(30)$ in radian mode returns $-0.9880$ instead of $0.5$.',
            correction: 'Radian mode interprets $30$ as $30$ radians ($\\approx 1718.9°$), far from $30°$. Switch to degree mode: $\\sin(30) = 0.5$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'Evaluate $\\sin(30°)$ using DESMOS.',
            steps: [
              {
                label: 'Set mode',
                content: 'Click the wrench icon → select **Degrees**.',
              },
              {
                label: 'Enter',
                content: 'Type $\\sin(30)$.',
              },
              {
                label: 'Read output',
                content: 'DESMOS displays $0.5$.',
              },
              {
                label: 'Exact value',
                content: '$\\sin(30°) = \\frac{1}{2}$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Evaluate $\\sin(30°)$ using DESMOS.',
            answer: '$\\sin(30°) = \\frac{1}{2}$',
          },
        ],
      },
    },
  },
};
