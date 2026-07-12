export const exponentsLessons = [
  // Section 1: Laws of Exponents
  {
    id: 1,
    title: "Laws of Exponents",
    type: "lesson",
    duration: "8 min",
    section: "Laws of Exponents",
    hero: {
      tagline: "THE RULES",
      subtitle: "Master the exponent laws"
    },
    content: {
      blocks: [
        { type: "exponentLawsIntro" },
        { type: "exponentRulesGrid", notGiven: true },
        { type: "text", content: "Exponents are **shorthand for repeated multiplication**, just like multiplication is shorthand for repeated addition. When you write x⁵, you mean x × x × x × x × x. Every exponent law flows naturally from this definition — they aren't arbitrary rules to memorize, they're logical consequences of what exponents actually mean." },
        { type: "text", content: "**Why these laws dominate the SAT:** The SAT tests exponent rules more than almost any other algebra topic. They appear as standalone simplification questions, inside radical expressions, within exponential functions, and buried in word problems. If you truly understand the six core rules, you can handle every variation the test throws at you." },
        { type: "text", content: "**The six laws, built from intuition:**\n\n• **Product Rule** (xᵃ · xᵇ = xᵃ⁺ᵇ): Multiplying same bases? You're combining groups of x's, so add the exponents.\n• **Quotient Rule** (xᵃ / xᵇ = xᵃ⁻ᵇ): Dividing same bases? You're canceling x's, so subtract the exponents.\n• **Power Rule** ((xᵃ)ᵇ = xᵃᵇ): A power raised to a power? Each of the b groups contains a copies of x, so multiply the exponents.\n• **Zero Exponent** (x⁰ = 1): Anything divided by itself is 1, and xⁿ/xⁿ = xⁿ⁻ⁿ = x⁰.\n• **Negative Exponent** (x⁻ⁿ = 1/xⁿ): A negative exponent means \"take the reciprocal\" — it moves the base from numerator to denominator or vice versa.\n• **Fractional Exponent** (x^(1/n) = ⁿ√x): A fraction in the exponent means a root — the denominator is the root index, the numerator is the power." },
        { type: "text", content: "**SAT trap #1 — applying rules to different bases:** The product and quotient rules ONLY work when the bases are the same. x³ · y² cannot be simplified to (xy)⁵. Students who rush through problems often combine unlike bases — and the SAT places that wrong answer right there waiting." },
        { type: "text", content: "**SAT trap #2 — confusing add vs. multiply:** When bases are multiplied (x³ · x⁴), you ADD exponents to get x⁷. When a power is raised to a power ((x³)⁴), you MULTIPLY exponents to get x¹². Mixing these up is one of the most common mistakes on the test, and the wrong answer from using the incorrect operation will always appear as a choice." },
        { type: "text", content: "**Fractional exponents deserve extra attention.** The SAT asks about these frequently and many students are uncomfortable with them. Remember: the **denominator** of the fractional exponent is the **root**, and the **numerator** is the **power**. So x^(2/3) = ³√(x²). You can apply the root first or the power first — whichever is easier with the given numbers." },
        { type: "text", content: "**Strategy tip:** When an SAT problem gives you expressions with different-looking bases (like 4, 8, and 16), try rewriting everything as powers of a common base (2² = 4, 2³ = 8, 2⁴ = 16). Once all bases match, you can apply the exponent laws freely. This \"common base\" strategy unlocks many problems that initially look unsolvable." }
      ]
    }
  },
  { id: 2, title: "Simple Laws of Exponents (Product Rule) Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "wtzpclGJjwA", hero: { tagline: "PRODUCT RULE", subtitle: "Multiplying same bases" } },
  { id: 3, title: "Simple Laws of Exponents (Quotient Rule) Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "rGbR2Sje0yg", hero: { tagline: "QUOTIENT RULE", subtitle: "Dividing same bases" } },
  { id: 4, title: "Fractional Exponents Simple Example", type: "video", duration: "8 min", section: "Laws of Exponents", videoId: "wt4jURbliN8", hero: { tagline: "FRACTIONS", subtitle: "Roots as exponents" } },
  { id: 5, title: "Fractional Exponents Complex Example", type: "video", duration: "10 min", section: "Laws of Exponents", videoId: "MsEOg94CW2A", hero: { tagline: "ADVANCED", subtitle: "Complex fractional exponents" } },
  // Section 2: Comparing Exponential Expressions
  {
    id: 6,
    title: "Comparing Exponential Expressions",
    type: "lesson",
    duration: "6 min",
    section: "Comparing Exponential Expressions",
    hero: {
      tagline: "WHICH IS BIGGER?",
      subtitle: "Comparing exponential values"
    },
    content: {
      blocks: [
        { type: "comparingExpIntro" },
        { type: "goldenRuleExponents" },
        { type: "text", content: "Comparing exponential expressions is all about answering one question: **are these two expressions equal, or is one bigger?** The SAT frames this as \"Which of the following is equivalent to...\" or \"If xᵃ = xᵇ, what is the value of a − b?\" In every case, the strategy is the same: **get the bases to match, then compare or set the exponents equal.**" },
        { type: "text", content: "**The Golden Rule of Exponents:** If the bases are the same and the expressions are equal, then the exponents must be equal. This works because exponential functions are one-to-one — each exponent produces a unique output. So if 2ᵃ = 2ᵇ, then a = b. Period. This one principle solves a huge proportion of SAT exponent problems." },
        { type: "text", content: "**Step-by-step strategy:**\n\n1. **Rewrite** all terms using the same base (find the smallest common base — often 2, 3, or 5)\n2. **Apply** exponent laws to simplify each side\n3. **Set exponents equal** (if the bases match and the expressions are equal)\n4. **Solve** the resulting equation" },
        { type: "example", title: "Worked Example", content: "If 8ˣ = 2⁹, what is the value of x?\n\nRewrite 8 as 2³: (2³)ˣ = 2⁹\nApply power rule: 2³ˣ = 2⁹\nBases match, so: 3x = 9\nSolve: x = **3**" },
        { type: "text", content: "**SAT trap — different-looking bases that are secretly related:** The numbers 4, 8, 16, 32, 64 are all powers of 2. The numbers 9, 27, 81 are all powers of 3. The numbers 25, 125, 625 are all powers of 5. When you see these in an exponent problem, your first move should be to rewrite them using the common base. The SAT counts on students not seeing the relationship." },
        { type: "text", content: "**What about negative and fractional exponents?** The golden rule still works. If (1/4) appears in a problem, rewrite it as 2⁻² (since 1/4 = 1/2² = 2⁻²). If √3 appears, rewrite it as 3^(1/2). Converting everything to the same base with exponent notation is the key that unlocks comparison." },
        { type: "text", content: "**When bases can't be made equal:** Occasionally the SAT gives you expressions where the bases are genuinely different (like 2ˣ and 3ˣ). In those cases, you can't use the golden rule directly. Instead, test specific values or use the answer choices. But this is rare — in most SAT exponent problems, a common base exists and the golden rule applies." }
      ]
    }
  },
  { id: 7, title: "Simple Exponential Expression Comparison Example", type: "video", duration: "8 min", section: "Comparing Exponential Expressions", videoId: "7Jvib5zG3DY", hero: { tagline: "PRACTICE", subtitle: "Basic comparison" } },
  { id: 8, title: "Complex Exponential Expression Comparison Example", type: "video", duration: "10 min", section: "Comparing Exponential Expressions", videoId: "pj7ULfiKJGw", hero: { tagline: "ADVANCED", subtitle: "Complex comparison" } },
  // Section 3: Exponential Functions
  {
    id: 9,
    title: "Exponential Functions",
    type: "lesson",
    duration: "7 min",
    section: "Exponential Functions",
    hero: {
      tagline: "GROWTH & DECAY",
      subtitle: "Functions that multiply"
    },
    content: {
      blocks: [
        { type: "exponentialFunctionIntro" },
        { type: "exponentialFunctionFormula", notGiven: true },
        { type: "growthVsDecay" },
        { type: "text", content: "An exponential function is a function where the variable is in the **exponent**, not the base. This is what makes it fundamentally different from linear or quadratic functions. While a linear function adds the same amount each step and a quadratic function's growth rate increases steadily, an exponential function **multiplies by the same factor each step** — producing dramatic acceleration that catches many students off guard." },
        { type: "text", content: "**Real-world intuition:** Think about bacteria doubling every hour. After 1 hour: 2 bacteria. After 10 hours: 1,024. After 20 hours: over 1 million. The numbers start small and feel slow, then suddenly explode. That's the signature of exponential growth. Exponential decay works the same way but in reverse — a car losing 20% of its value each year, or a medicine being eliminated from the bloodstream." },
        { type: "text", content: "**How to tell growth from decay at a glance:**\n\n• If the base **b > 1**, the function grows (each step multiplies by something bigger than 1)\n• If **0 < b < 1**, the function decays (each step multiplies by something smaller than 1)\n• If **b = 1**, the function is constant (flat line — technically not exponential)\n• If **b ≤ 0**, the function is undefined for real-number exponents (the SAT won't test this)" },
        { type: "text", content: "**SAT interpretation questions — the most common pattern:** The SAT gives you a model like f(t) = 500(1.06)ᵗ and asks what each component means. Here is how to read it like a sentence: \"Starting at 500, the quantity increases by 6% per time period.\" The coefficient (500) is always the **initial amount**. The base (1.06) is the **growth multiplier** — subtract 1 to get the rate (0.06 = 6%). The exponent (t) counts the **number of time periods**." },
        { type: "text", content: "**SAT trap — confusing exponential with linear:** If a population increases by 50 people per year, that's linear (f(t) = 50t + initial). If it increases by 5% per year, that's exponential (f(t) = initial × 1.05ᵗ). The word \"by\" is ambiguous in English, so read carefully: a fixed amount of change is linear; a fixed percentage of change is exponential. The SAT intentionally uses similar wording for both to test whether you can distinguish them." },
        { type: "text", content: "**The initial value shortcut:** In any exponential function f(t) = a · bᵗ, plugging in t = 0 gives f(0) = a · b⁰ = a · 1 = a. So the coefficient **a** is literally the value at time zero. If a word problem says \"there were initially 2,000 people\" and gives you four exponential models, you can eliminate any model where the coefficient isn't 2,000 — without doing any further math." },
        { type: "text", content: "**Graphing insight:** Exponential functions have a horizontal asymptote — a line the graph approaches but never crosses. For basic growth and decay (f(t) = a · bᵗ with a > 0), that asymptote is the x-axis (y = 0). The function gets infinitely close to zero but never reaches it. This is why radioactive materials never fully decay to zero — the exponential model says there's always a tiny fraction left." }
      ]
    }
  },
  { id: 10, title: "Simple Exponential Function Example", type: "video", duration: "8 min", section: "Exponential Functions", videoId: "l7O1iak-Zh8", hero: { tagline: "PRACTICE", subtitle: "Basic exponential function" } },
  { id: 11, title: "Interpreting Exponential Functions Example", type: "video", duration: "10 min", section: "Exponential Functions", videoId: "aySy8jrjpRU", hero: { tagline: "INTERPRETATION", subtitle: "Understanding meaning" } },
  { id: 12, title: "Complex Exponential Function Example", type: "video", duration: "10 min", section: "Exponential Functions", videoId: "dTcLpzbW3Rg", hero: { tagline: "ADVANCED", subtitle: "Challenging scenarios" } },
  {
    id: 13,
    title: "Changing the Time Unit",
    type: "lesson",
    duration: "6 min",
    section: "Exponential Functions",
    hero: {
      tagline: "MATCH THE UNITS",
      subtitle: "Convert the compounding period"
    },
    content: {
      blocks: [
        { type: "text", content: "In an exponential model f(t) = a · bᵗ, the **exponent counts how many times the growth factor has been applied**. The rate lives in the base, and the exponent must count in the same time unit the rate was quoted in. When the input variable is measured in a different unit than the rate, you must convert the exponent — not the base." },
        { type: "text", content: "**The two questions to ask every time:** (1) What unit is the input variable measured in? (2) What is the length of one full rate period? Write the exponent so that advancing the input by exactly one rate period advances the exponent by exactly 1. If a quantity grows 7% per year but t is measured in months, one year is 12 months, so the exponent is t/12: f(t) = a · (1.07)^(t/12)." },
        { type: "text", content: "**\"Doubles every 3 years\" means the exponent is t/3.** After 3 years the factor must have applied once, so the exponent must equal 1 when t = 3 — that forces t/3, giving a · 2^(t/3). The same machinery handles any interval: \"every 4 years\" gives t/4; a process that repeats every 18 minutes, written as a function of hours h, gives 60h/18 because one hour is 60 minutes." },
        { type: "text", content: "**Going the other direction (coarser input).** A monthly process written as a function of years t needs 12 applications per year, so the exponent is 12t: a · b^(12t). Notice the direction — a **finer** input unit (months instead of years) means **more** input steps per factor application, so the coefficient on the exponent shrinks (t/12); a **coarser** input unit means fewer input steps, so the coefficient grows (12t)." },
        { type: "example", title: "Worked Example", content: "A colony grows by 20% every 5 hours. Write the model as a function of hours t.\n\nBase from the rate: b = 1 + 0.20 = 1.20\nOne full rate period is 5 hours, so the exponent must equal 1 when t = 5.\nThat forces exponent t/5: f(t) = a · (1.20)^(t/5)\nCheck: at t = 5, exponent = 1, so the factor applies exactly once — **correct**." },
        { type: "text", content: "**The classic yearly → monthly rewrite.** You can also change the *unit of the base* instead of the exponent, using b^t = (b^(1/12))^(12t). Reading a · bᵗ (t in years) as a · (b^(1/12))^(12t) re-expresses the yearly factor b as an equivalent monthly factor b^(1/12) applied 12 times per year. The value is identical — you have only changed the cadence of the description, never the rate." },
        { type: "text", content: "**SAT trap — the inverted conversion.** The most common error is multiplying when you should divide (12t vs t/12) because \"12 months per year\" suggests ×12 regardless of direction. Substituting one full rate period is a good check (the exponent should equal 1), but it can pass on an upside-down setup too — so always confirm the direction: read the finished expression back as a sentence. (1.07)^(t/12) says \"grows 7% every 12 months\"; (1.07)^(12t) says \"grows 7% twelve times per year.\" If the sentence contradicts the story, the conversion is flipped." }
      ]
    }
  }
];
