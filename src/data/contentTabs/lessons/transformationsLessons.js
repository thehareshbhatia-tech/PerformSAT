export const transformationsLessonTabs = {

  1: {
    moduleId: 'transformations',
    title: 'What Is a Transformation?',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'A transformation changes the position, size, or shape of a graph. The SAT focuses on four types — all governed by simple algebraic rules.',
        blocks: [
          {
            type: 'text',
            content: 'A **transformation** takes a parent function $f(x)$ and produces a new function by shifting, flipping, stretching, or compressing it. On the SAT you will rarely graph by hand — instead, you need to read what a transformation **does** from the equation.',
          },
          {
            type: 'iconRow',
            items: [
              { icon: '➡️', label: 'Translation', description: 'Slides the graph without changing shape' },
              { icon: '🪞', label: 'Reflection', description: 'Flips the graph across an axis' },
              { icon: '↕️', label: 'Vertical Stretch/Compress', description: 'Makes the graph taller or shorter' },
              { icon: '↔️', label: 'Horizontal Stretch/Compress', description: 'Makes the graph wider or narrower' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'Every transformation modifies $f(x)$ in one of two places: **outside** the function (affects $y$, behaves as expected) or **inside** the parentheses (affects $x$, behaves *opposite* to what you might guess). This inside/outside distinction is the key to all transformation questions.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Words → Equation Translation',
            content: 'Recognition cue: "the graph of $g$ is the graph of $f$ shifted/reflected/stretched…" First move: translate each word into algebra. "Left $2$" → $f(x+2)$. "Up $5$" → $+5$. Combine: $g(x) = f(x+2) + 5$. Apply horizontal changes inside, vertical changes outside.',
          },
          {
            type: 'trapCard',
            title: 'Horizontal Direction Is Reversed',
            wrong: '"Shifted right $3$" → student writes $f(x + 3)$.',
            correction: 'Horizontal shifts work opposite to intuition. Right $3$ → $f(x - 3)$. Left $3$ → $f(x + 3)$. The sign inside the parentheses is **opposite** the direction.',
          },
          {
            type: 'tip',
            content: 'When two graphs are shown side by side, pick a clear point on the original (e.g., the vertex). Find where it moved on the new graph. The horizontal and vertical displacement directly give you the shift values.',
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'table',
            title: 'Transformation Cheat Sheet (Preview)',
            headers: ['Transformation', 'Algebraic Form', 'Direction / Effect'],
            rows: [
              ['Shift up $k$', '$f(x) + k$', 'Every $y$-value increases by $k$'],
              ['Shift down $k$', '$f(x) - k$', 'Every $y$-value decreases by $k$'],
              ['Shift right $h$', '$f(x - h)$', 'Every point moves right $h$ units'],
              ['Shift left $h$', '$f(x + h)$', 'Every point moves left $h$ units'],
              ['Reflect over $x$-axis', '$-f(x)$', 'All $y$-values negate'],
              ['Reflect over $y$-axis', '$f(-x)$', 'All $x$-values negate'],
              ['Vertical stretch by $a$', '$a \\cdot f(x)$, $a > 1$', 'Graph gets taller'],
              ['Vertical compress by $a$', '$a \\cdot f(x)$, $0 < a < 1$', 'Graph gets shorter'],
            ],
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'transformations',
    title: 'Vertical Translations (Up & Down)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Adding a constant **outside** the function slides the graph up or down — the most intuitive transformation.',
        blocks: [
          {
            type: 'text',
            content: 'If $g(x) = f(x) + k$, then every output of $f$ is increased by $k$. The graph moves **up** $k$ units when $k > 0$ and **down** $|k|$ units when $k < 0$. The shape stays identical.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Shift Up', formula: '$g(x) = f(x) + k$', note: 'k > 0 → moves up' },
              { label: 'Shift Down', formula: '$g(x) = f(x) - k$', note: 'k > 0 → moves down' },
            ],
          },
          {
            type: 'comparison',
            items: [
              {
                label: 'Correct',
                variant: 'correct',
                content: '$f(x) = x^2$, shifted up $3$:\n$g(x) = x^2 + 3$\nVertex moves from $(0, 0)$ to $(0, 3)$.',
              },
              {
                label: 'Common Mistake',
                variant: 'wrong',
                content: 'Student writes $g(x) = (x + 3)^2$ — this is a **horizontal** shift, not vertical. The $+3$ is inside the parentheses.',
              },
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
            problem: 'The function $f$ is defined by $f(x) = 2x + 1$. The graph of $g$ is the graph of $f$ translated $4$ units down. What is $g(x)$?',
            steps: [
              { label: 'Apply rule', content: 'Down $4$ → subtract $4$ outside: $g(x) = f(x) - 4$' },
              { label: 'Substitute', content: '$g(x) = (2x + 1) - 4 = 2x - 3$' },
              { label: 'Answer', content: '$g(x) = 2x - 3$' },
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
            title: 'Vertex Form Shortcut for Vertical Shifts',
            content: 'Recognition cue: $y = a(x - h)^2 + k$ with vertex $(h, k)$. A vertical translation changes only $k$. If the vertex moves from $(2, 5)$ to $(2, 8)$, the graph shifted **up $3$** — just add $3$ to $k$.',
          },
          {
            type: 'trapCard',
            title: 'Mixing Vertical and Horizontal',
            wrong: '"Shifted up $3$" → student writes $f(x) = (x - 3)^2$ instead of $f(x) = x^2 + 3$.',
            correction: 'Up/down is **outside** the function ($+k$ or $-k$). Left/right is **inside** the parentheses ($x \\pm h$). Adding $3$ inside moves left, not up.',
          },
          {
            type: 'tip',
            content: 'Quick check: if only the $y$-coordinates of points changed, it is a vertical shift. If only the $x$-coordinates changed, it is a horizontal shift. If both changed, it is a combined translation.',
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'If $f(x) = |x|$ is shifted down $7$ units, what is the new function?',
            answer: '$g(x) = |x| - 7$. The vertex moves from $(0, 0)$ to $(0, -7)$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'transformations',
    title: 'Horizontal Translations (Left & Right)',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'Horizontal translations modify the input — and work opposite to what you might expect. This is the #1 transformation trap on the SAT.',
        blocks: [
          {
            type: 'text',
            content: 'If $g(x) = f(x - h)$, the graph shifts **right** $h$ units. If $g(x) = f(x + h)$, the graph shifts **left** $h$ units. Yes — the sign is *opposite* to the direction.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Shift Right', formula: '$g(x) = f(x - h)$', note: 'Subtract inside → moves right' },
              { label: 'Shift Left', formula: '$g(x) = f(x + h)$', note: 'Add inside → moves left' },
            ],
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Why Is It Backwards?',
            content: 'Think of it this way: $f(x - 3)$ means the function "waits" $3$ extra units before producing each output. To get the output that $f$ originally gave at $x = 0$, you now need $x = 3$. So the whole graph slides **right** by $3$.',
          },
          {
            type: 'keyInsight',
            content: 'Quick mnemonic: **inside the parentheses, the sign lies**. $f(x - 3)$ moves right (not left). $f(x + 5)$ moves left (not right). Always go opposite the sign you see.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The vertex of $f(x) = (x - 1)^2 + 4$ is at $(1, 4)$. The graph of $g$ is obtained by shifting $f$ left $6$ units and down $2$ units. What is $g(x)$?',
            steps: [
              { label: 'Horizontal shift', content: 'Left $6$: replace $x$ with $(x + 6)$ → $(x + 6 - 1)^2 = (x + 5)^2$' },
              { label: 'Vertical shift', content: 'Down $2$: subtract $2$ → $+4 - 2 = +2$' },
              { label: 'Combine', content: '$g(x) = (x + 5)^2 + 2$' },
              { label: 'Verify vertex', content: 'New vertex: $(-5, 2)$. Original $(1,4)$ moved left $6$, down $2$: $(1-6, 4-2) = (-5, 2)$ ✓' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Sign Confusion',
            wrong: '"Shift right 4" → $f(x + 4)$. Student adds because "right is positive."',
            correction: 'Horizontal translations work opposite: **right** $4$ → $f(x - 4)$. The subtraction makes the function "start later."',
          },
          {
            type: 'trapCard',
            title: 'Mixed-Up Order',
            wrong: 'Student applies vertical shift first, then horizontal, and gets a different answer.',
            correction: 'For translations, the order does not matter — but you must apply horizontal shifts **inside** and vertical shifts **outside**. Don\'t mix them up.',
          },
        ],
      },
      checkpoint: {
        title: 'Checkpoint',
        blocks: [
          {
            type: 'checkpointQuestion',
            number: 1,
            question: 'The graph of $y = \\sqrt{x}$ is shifted right $9$ units. Write the new equation.',
            answer: '$y = \\sqrt{x - 9}$. (Subtract $9$ inside because horizontal shifts are "opposite.")',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'transformations',
    title: 'Transformation Rules Summary',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'This is the complete reference for all function transformations tested on the SAT — bookmark this.',
        blocks: [
          {
            type: 'text',
            content: 'Every transformation falls into one of two categories: **outside** the function (affects $y$, behaves intuitively) or **inside** the function (affects $x$, behaves opposite). Here is the full table:',
          },
          {
            type: 'table',
            title: 'Complete Transformation Table',
            headers: ['Transformation', 'Equation', 'Effect on Graph'],
            rows: [
              ['Vertical shift up $k$', '$f(x) + k$', 'Slides up $k$ units'],
              ['Vertical shift down $k$', '$f(x) - k$', 'Slides down $k$ units'],
              ['Horizontal shift right $h$', '$f(x - h)$', 'Slides right $h$ units'],
              ['Horizontal shift left $h$', '$f(x + h)$', 'Slides left $h$ units'],
              ['Reflect over $x$-axis', '$-f(x)$', 'Flips upside-down (negate $y$)'],
              ['Reflect over $y$-axis', '$f(-x)$', 'Flips left-right (negate $x$)'],
              ['Vertical stretch by $a$', '$a \\cdot f(x)$, $a > 1$', 'Taller / steeper'],
              ['Vertical compress by $a$', '$a \\cdot f(x)$, $0 < a < 1$', 'Shorter / flatter'],
              ['Horizontal compress by $b$', '$f(bx)$, $b > 1$', 'Narrower'],
              ['Horizontal stretch by $b$', '$f(bx)$, $0 < b < 1$', 'Wider'],
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Reading a Transformed Equation',
            items: [
              'Start from the **innermost** operation on $x$ (inside the function)',
              'Identify horizontal shifts ($x - h$ or $x + h$) and horizontal stretches ($bx$)',
              'Move **outside**: identify vertical stretches ($a \\cdot$), reflections ($-$), and vertical shifts ($+k$ or $-k$)',
              'Translate each piece into a geometric description: "shifted right $h$, stretched by $a$, moved up $k$"',
            ],
          },
          {
            type: 'callout',
            variant: 'memorize',
            title: 'The Inside/Outside Rule',
            content: '**Outside** the function → affects $y$ → behaves as expected.\n**Inside** the parentheses → affects $x$ → behaves **opposite**.\nThis single principle explains every transformation direction.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Examples',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'Describe all transformations applied to $f(x)$ to produce $g(x) = -2f(x - 3) + 1$.',
            steps: [
              { label: 'Inside: $x - 3$', content: 'Horizontal shift **right $3$**' },
              { label: 'Factor: $2$', content: 'Vertical **stretch** by factor of $2$' },
              { label: 'Negative: $-$', content: 'Reflection over the **$x$-axis**' },
              { label: 'Outside: $+1$', content: 'Vertical shift **up $1$**' },
              { label: 'Summary', content: 'Right $3$, vertically stretched by $2$, reflected over $x$-axis, up $1$.' },
            ],
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Plug-In One Point',
            icon: '⚡',
            timing: '~15s',
            content: 'If you forget the rules: pick a known point on $f$ — say $(2, 5)$. Apply each transformation numerically to the coordinates. Check which answer choice contains that resulting point. This works every time.',
          },
          {
            type: 'tip',
            content: 'On the digital SAT, use DESMOS. Type the parent function, then type the transformed version. Visually confirm the shift direction and magnitude in seconds.',
          },
        ],
      },
    },
  },
};
