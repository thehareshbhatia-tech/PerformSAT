export const exponentsLessonTabs = {

  1: {
    moduleId: 'exponents',
    title: 'Laws of Exponents',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'The exponent laws let you simplify expressions without expanding — master these rules and the SAT becomes fast algebra.',
        blocks: [
          {
            type: 'text',
            content: 'An **exponent** tells you how many times a base is multiplied by itself: $a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ times}}$. The laws of exponents are shortcuts that let you combine and simplify without writing out every factor.',
          },
          {
            type: 'table',
            title: 'The Six Essential Laws',
            headers: ['Law', 'Rule', 'Example'],
            rows: [
              ['Product Rule', '$a^m \\cdot a^n = a^{m+n}$', '$x^3 \\cdot x^4 = x^7$'],
              ['Quotient Rule', '$\\frac{a^m}{a^n} = a^{m-n}$', '$\\frac{x^5}{x^2} = x^3$'],
              ['Power Rule', '$(a^m)^n = a^{mn}$', '$(x^3)^2 = x^6$'],
              ['Zero Exponent', '$a^0 = 1$', '$7^0 = 1$'],
              ['Negative Exponent', '$a^{-n} = \\frac{1}{a^n}$', '$x^{-2} = \\frac{1}{x^2}$'],
              ['Power of a Product', '$(ab)^n = a^n b^n$', '$(2x)^3 = 8x^3$'],
            ],
          },
          {
            type: 'keyInsight',
            content: 'The product and quotient rules only work when the **bases are the same**. You can combine $x^3 \\cdot x^5$ but NOT $x^3 \\cdot y^5$ — different bases stay separate.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT disguises exponent laws inside fraction simplification, radical-to-exponent conversion, and scientific notation.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Typical Prompt',
            content: '"If $\\frac{x^a \\cdot x^3}{x^2} = x^7$, what is the value of $a$?" — Apply the laws: numerator exponents add ($a + 3$), then subtract the denominator ($-2$): $a + 3 - 2 = 7$, so $a = 6$.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Fractional Exponents', formula: '$a^{1/n} = \\sqrt[n]{a}$', note: 'Converts radicals ↔ exponents' },
              { label: 'General Fractional', formula: '$a^{m/n} = \\sqrt[n]{a^m}$', note: 'Numerator = power, denominator = root' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Multiplying Exponents Instead of Adding',
            wrong: '$x^3 \\cdot x^4 = x^{12}$. Student multiplied the exponents.',
            correction: 'When bases are the **same** and you **multiply**, you **add** exponents: $x^3 \\cdot x^4 = x^{3+4} = x^7$.',
          },
          {
            type: 'trapCard',
            title: 'Distributing an Exponent Over Addition',
            wrong: '$(x + y)^2 = x^2 + y^2$. Student distributed the exponent.',
            correction: '$(x + y)^2 = x^2 + 2xy + y^2$. The power-of-a-product rule applies to **multiplication**, not addition.',
          },
          {
            type: 'trapCard',
            title: 'Negative Exponent Means Negative Number',
            wrong: '$2^{-3} = -8$. Student made the result negative.',
            correction: '$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. A negative exponent means **reciprocal**, not a negative answer.',
          },
        ],
      },
      speedStrategy: {
        title: 'Speed & Strategy',
        blocks: [
          {
            type: 'strategyCard',
            title: 'Convert Everything to Same Base',
            icon: '⚡',
            timing: '~20s',
            content: 'When you see $8^x \\cdot 4^y$, rewrite as powers of 2: $8 = 2^3$, $4 = 2^2$. Now apply laws: $(2^3)^x \\cdot (2^2)^y = 2^{3x} \\cdot 2^{2y} = 2^{3x+2y}$. Same base = one clean expression.',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'exponents',
    title: 'Comparing Exponential Expressions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'To compare expressions with exponents, rewrite them with a common base — then compare exponents directly.',
        blocks: [
          {
            type: 'text',
            content: 'You can\'t easily compare $8^4$ and $4^6$ by computing — the numbers are huge. Instead, rewrite both with the **same base** and compare the exponents. Since $8 = 2^3$ and $4 = 2^2$, you get $8^4 = 2^{12}$ and $4^6 = 2^{12}$. They\'re equal!',
          },
          {
            type: 'keyInsight',
            content: 'When two expressions share the same base: **larger exponent = larger value** (assuming base $> 1$). For bases between 0 and 1, the relationship flips — larger exponent gives a **smaller** value.',
          },
          {
            type: 'table',
            title: 'Common Base Conversions',
            headers: ['Number', 'As Power of 2', 'As Power of 3'],
            rows: [
              ['$4$', '$2^2$', '—'],
              ['$8$', '$2^3$', '—'],
              ['$16$', '$2^4$', '—'],
              ['$32$', '$2^5$', '—'],
              ['$9$', '—', '$3^2$'],
              ['$27$', '—', '$3^3$'],
              ['$81$', '—', '$3^4$'],
            ],
          },
        ],
      },
      methods: {
        title: 'Methods',
        blocks: [
          {
            type: 'steps',
            title: 'Comparing Two Exponential Expressions',
            items: [
              'Identify a **common base** for both expressions (often 2, 3, or 5)',
              'Rewrite each expression using the common base and the power rule: $(a^m)^n = a^{mn}$',
              'Compare the resulting exponents — larger exponent wins (for base $> 1$)',
            ],
          },
          {
            type: 'steps',
            title: 'Solving Equations by Matching Bases',
            items: [
              'Rewrite both sides with the **same base**',
              'Since $a^m = a^n$ implies $m = n$ (for $a > 0, a \\neq 1$), set exponents equal',
              'Solve the resulting linear equation',
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
            problem: 'If $2^{3x} = 16^2$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite 16', content: '$16 = 2^4$, so $16^2 = (2^4)^2 = 2^8$' },
              { label: 'Match exponents', content: '$2^{3x} = 2^8 \\Rightarrow 3x = 8$' },
              { label: 'Solve', content: '$x = \\frac{8}{3}$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'If $9^{x+1} = 27^x$, what is the value of $x$?',
            steps: [
              { label: 'Rewrite in base 3', content: '$9 = 3^2$ and $27 = 3^3$' },
              { label: 'Apply power rule', content: '$(3^2)^{x+1} = (3^3)^x \\Rightarrow 3^{2(x+1)} = 3^{3x}$' },
              { label: 'Set exponents equal', content: '$2(x + 1) = 3x$' },
              { label: 'Solve', content: '$2x + 2 = 3x \\Rightarrow x = 2$' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Bases Between 0 and 1',
            wrong: '$\\left(\\frac{1}{2}\\right)^3 > \\left(\\frac{1}{2}\\right)^5$ because $3 < 5$. Wait — that\'s actually correct!',
            correction: 'For $0 < \\text{base} < 1$, the inequality **reverses**: raising to a higher power makes the value **smaller**. $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ and $\\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}$, so $\\frac{1}{8} > \\frac{1}{32}$ ✓.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'exponents',
    title: 'Exponential Functions',
    sections: {
      coreConcepts: {
        title: 'Core Concepts',
        summary: 'An exponential function has the variable in the exponent — it models growth and decay with constant percentage change.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Function',
            content: '$$f(x) = a \\cdot b^x$$',
            note: '$a$ = initial value (when $x = 0$), $b$ = growth/decay factor',
          },
          {
            type: 'text',
            content: 'Unlike linear functions (constant additive change), exponential functions have **constant multiplicative change**. Each time $x$ increases by 1, the output is multiplied by $b$. This makes exponential growth accelerate rapidly and exponential decay slow down gradually.',
          },
          {
            type: 'comparison',
            title: 'Growth vs. Decay',
            items: [
              { label: 'Growth ($b > 1$)', content: '**Direction:** Increases as $x$ increases\n**Factor:** $b > 1$ (e.g., $1.05$ for 5% growth)\n**Graph:** Curves upward steeply\n**Real-World:** Population, compound interest' },
              { label: 'Decay ($0 < b < 1$)', content: '**Direction:** Decreases as $x$ increases\n**Factor:** $0 < b < 1$ (e.g., $0.85$ for 15% decay)\n**Graph:** Curves downward toward zero\n**Real-World:** Depreciation, radioactive decay' },
            ],
          },
          {
            type: 'keyInsight',
            content: 'The value of $a$ is always the **$y$-intercept**: plug in $x = 0$ and get $f(0) = a \\cdot b^0 = a \\cdot 1 = a$. If the SAT asks "what does $a$ represent?" the answer is the **initial amount**.',
          },
        ],
      },
      satPatterns: {
        title: 'SAT Patterns',
        summary: 'The SAT tests whether you can identify $a$ and $b$ in context and determine growth vs. decay.',
        blocks: [
          {
            type: 'callout',
            variant: 'info',
            title: 'Bluebook Phrasing',
            content: '"A car purchased for \\$25,000 loses 12% of its value each year. Which function models the car\'s value after $t$ years?" — $a = 25{,}000$ (initial value), $b = 1 - 0.12 = 0.88$ (decay factor). Answer: $V(t) = 25{,}000 \\cdot 0.88^t$.',
          },
          {
            type: 'formulaGrid',
            items: [
              { label: 'Growth by $r\\%$', formula: '$f(x) = a(1 + r)^x$', note: 'e.g., 5% growth → $b = 1.05$' },
              { label: 'Decay by $r\\%$', formula: '$f(x) = a(1 - r)^x$', note: 'e.g., 15% decay → $b = 0.85$' },
              { label: 'Doubling Time', formula: '$a \\cdot 2^{x/d}$', note: '$d$ = time to double' },
              { label: 'Half-Life', formula: '$a \\cdot \\left(\\frac{1}{2}\\right)^{x/h}$', note: '$h$ = half-life period' },
            ],
          },
          {
            type: 'tip',
            content: 'To find the **percent change** from the equation: if $b = 1.08$, the growth rate is $8\\%$. If $b = 0.75$, the decay rate is $25\\%$. Just compare $b$ to $1$.',
          },
        ],
      },
      workedExamples: {
        title: 'Worked Example',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A colony of bacteria doubles every 3 hours. At $t = 0$ there are 500 bacteria. How many bacteria are there after 12 hours?',
            steps: [
              { label: 'Identify model', content: '$f(t) = 500 \\cdot 2^{t/3}$ (doubles every 3 hours)' },
              { label: 'Plug in $t = 12$', content: '$f(12) = 500 \\cdot 2^{12/3} = 500 \\cdot 2^4$' },
              { label: 'Compute', content: '$f(12) = 500 \\cdot 16 = 8{,}000$' },
            ],
          },
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A radioactive substance has a half-life of 5 years. A sample currently has 200 grams. After how many years will less than 25 grams remain?',
            steps: [
              { label: 'Set up inequality', content: '$200 \\cdot \\left(\\frac{1}{2}\\right)^{t/5} < 25$' },
              { label: 'Divide by 200', content: '$\\left(\\frac{1}{2}\\right)^{t/5} < \\frac{1}{8}$' },
              { label: 'Rewrite $\\frac{1}{8}$', content: '$\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$' },
              { label: 'Compare exponents', content: '$\\frac{t}{5} > 3 \\Rightarrow t > 15$ years' },
            ],
          },
        ],
      },
      commonTraps: {
        title: 'Common Traps',
        blocks: [
          {
            type: 'trapCard',
            title: 'Using Addition Instead of Multiplication',
            wrong: 'A population grows 10% per year from 1,000: "After 2 years: $1{,}000 + 100 + 100 = 1{,}200$."',
            correction: 'Exponential growth compounds: $1{,}000 \\times 1.10^2 = 1{,}210$. The extra $\\$10$ comes from 10% growth on year 1\'s $\\$100$ gain.',
          },
          {
            type: 'trapCard',
            title: 'Confusing the Base ($b$) with the Rate ($r$)',
            wrong: '"The function $f(x) = 500(1.08)^x$ grows by $1.08\\%$ per unit."',
            correction: 'The growth **factor** is $1.08$, which means the growth **rate** is $0.08 = 8\\%$. The rate is $b - 1$, not $b$ itself.',
          },
        ],
      },
    },
  },

};
