export const percentsLessons = [
  // Section 1: Percent Fundamentals
  {
    id: 1,
    title: "Introduction to Percents",
    type: "lesson",
    duration: "5 min",
    section: "Percent Fundamentals",
    hero: {
      tagline: "FUNDAMENTALS",
      subtitle: "Parts per hundred"
    },
    content: {
      blocks: [
        { type: "percentIntro" },
        { type: "percentTypesIntro" },
        { type: "text", content: "At its core, a percent is just a **fraction with a denominator of 100**. The word itself — \"per cent\" — literally means \"per hundred.\" When you say 45%, you're saying 45 out of every 100. That's it. Everything else in this topic builds on that single idea." },
        { type: "text", content: "**Why percents dominate the SAT:** Percent questions appear in nearly every SAT math section because they show up everywhere in real life — taxes, tips, discounts, interest rates, data analysis. The College Board uses percents to test whether you can reason about proportional relationships, not just push symbols around." },
        { type: "text", content: "**The three conversions you must have on autopilot:**\n\n• Percent → Decimal: move the decimal point **two places left** (45% = 0.45)\n• Decimal → Percent: move the decimal point **two places right** (0.07 = 7%)\n• Percent → Fraction: put the number over 100 and simplify (25% = 25/100 = 1/4)" },
        { type: "text", content: "**SAT trap — percents greater than 100% and less than 1%:** Students often freeze when they see 250% or 0.5%. But the rules don't change. 250% = 2.50 (more than doubling). 0.5% = 0.005 (a tiny sliver). The SAT includes these specifically to rattle students who memorized steps without understanding them." },
        { type: "text", content: "**Three types of percent problems on the SAT:** Almost every percent question falls into one of three categories: (1) **Percent Of** — finding a part of a whole, (2) **Percent Change** — measuring how much something increased or decreased, (3) **Percent Models** — using exponential expressions to model repeated percent changes over time. This module covers all three, and knowing which type you're facing is half the battle." },
        { type: "text", content: "**Build this reflex:** Whenever you see the word \"percent\" in an SAT problem, immediately ask yourself: \"Am I finding a part, measuring a change, or modeling growth/decay?\" Categorizing the problem first prevents you from using the wrong formula — a common reason students get percent questions wrong even when they know the math." }
      ]
    }
  },
  // Section 2: Percent Of Questions
  {
    id: 2,
    title: "Percent Of Questions",
    type: "lesson",
    duration: "6 min",
    section: "Percent Of Questions",
    hero: {
      tagline: "CORE SKILL",
      subtitle: "Finding parts of a whole"
    },
    content: {
      blocks: [
        { type: "percentOfIntro" },
        { type: "percentOfTranslationTable" },
        { type: "percentOfWorkedExample" },
        { type: "text", content: "\"Percent of\" questions are the most fundamental percent problems, and the SAT uses them as building blocks for harder questions. The core idea is simple: you're finding a **piece of a whole**. \"What is 30% of 200?\" means \"what is 30 hundredths of 200?\"" },
        { type: "text", content: "**The translation method** is the fastest strategy for these problems. English words map directly to math operations:\n\n• \"what\" → x (the unknown)\n• \"is\" → = (equals)\n• \"of\" → × (multiply)\n• \"percent\" → ÷ 100 (divide by 100)\n\nSo \"What is 30% of 200?\" becomes x = (30/100) × 200 = 60." },
        { type: "text", content: "**SAT question patterns:** The test asks \"percent of\" in three flavors:\n\n1. **Find the part:** \"What is 15% of 80?\" (Multiply: 0.15 × 80 = 12)\n2. **Find the percent:** \"12 is what percent of 80?\" (Divide: 12/80 = 0.15 = 15%)\n3. **Find the whole:** \"12 is 15% of what number?\" (Divide: 12/0.15 = 80)\n\nEach flavor rearranges the same relationship: **Part = Percent × Whole**. If you know two of the three, you can always find the third." },
        { type: "text", content: "**Common SAT trap — reading too fast:** The difference between \"what percent OF 80 IS 12\" and \"what percent OF 12 IS 80\" is enormous, yet the words look similar when you're rushing. Always identify which number is the **whole** (comes after \"of\") and which is the **part** (comes after \"is\"). Mixing them up gives you the reciprocal answer — and that reciprocal will almost certainly be one of the wrong answer choices." },
        { type: "text", content: "**Pro tip for speed:** On straightforward \"percent of\" calculations, convert the percent to a decimal and multiply. But when the numbers are friendly — like 25% (= 1/4) or 10% (= 1/10) — using the fraction form is faster. Knowing that 25% of something means dividing by 4, or that 10% means moving the decimal one place left, gives you a mental-math edge that saves time for harder problems." }
      ]
    }
  },
  { id: 3, title: "Simple Percent Of #1", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "4u5Z8BzlibM", hero: { tagline: "PRACTICE", subtitle: "Basic calculation" } },
  { id: 4, title: "Simple Percent Of #2", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "ogabppfe6XQ", hero: { tagline: "PRACTICE", subtitle: "More examples" } },
  { id: 5, title: "Simple Percent Of #3", type: "video", duration: "8 min", section: "Percent Of Questions", videoId: "-JUF3R5ZHmU", hero: { tagline: "PRACTICE", subtitle: "Building fluency" } },
  { id: 6, title: "Complex Percent Of", type: "video", duration: "10 min", section: "Percent Of Questions", videoId: "jAR4wJ_Btuw", hero: { tagline: "ADVANCED", subtitle: "Multi-step problems" } },
  { id: 7, title: "Conceptual Percent Of", type: "video", duration: "10 min", section: "Percent Of Questions", videoId: "3cPc_xtceig", hero: { tagline: "DEEP DIVE", subtitle: "Understanding why" } },
  // Section 3: Percent Change Questions
  {
    id: 8,
    title: "Percent Change",
    type: "lesson",
    duration: "6 min",
    section: "Percent Change Questions",
    hero: {
      tagline: "INCREASE & DECREASE",
      subtitle: "Measuring growth and decline"
    },
    content: {
      blocks: [
        { type: "percentChangeIntro" },
        { type: "percentIncreaseFormula" },
        { type: "percentDecreaseFormula" },
        { type: "percentChangeKeyInsight" },
        { type: "text", content: "Percent change measures **how much something grew or shrank relative to where it started**. The keyword there is \"relative\" — a $10 increase means very different things depending on whether the original price was $20 (a 50% increase) or $1,000 (a 1% increase). The SAT loves this concept because it tests proportional reasoning, not just arithmetic." },
        { type: "text", content: "**The universal formula:** Percent Change = (|New − Original| / Original) × 100. The result is an increase if the new value is larger, and a decrease if the new value is smaller. The **original** value is always in the denominator — always divide by where you started." },
        { type: "text", content: "**The multiplier shortcut:** Instead of calculating the change and dividing, many strong test-takers use a multiplier approach:\n\n• A **20% increase** means the new value is **1.20 × original** (you keep 100% and add 20%)\n• A **35% decrease** means the new value is **0.65 × original** (you keep 100% and subtract 35%)\n\nThis shortcut is especially powerful when the SAT asks you to work backward from the new value to find the original." },
        { type: "text", content: "**The #1 SAT trap with percent change — dividing by the wrong number:** If a shirt's price increases from $40 to $50, the percent increase is (10/40) × 100 = 25%. But if it drops from $50 back to $40, the percent decrease is (10/50) × 100 = 20%. The change is the same $10, but the percent is different because the **original** changed. The SAT puts both 20% and 25% in the answer choices to catch students who divide by the wrong value." },
        { type: "text", content: "**Successive percent changes don't add up:** A 10% increase followed by a 10% decrease does NOT bring you back to the original. If you start at 100, a 10% increase gives you 110. Then a 10% decrease from 110 gives you 99 — you lost a dollar. This is because the second percent applies to the NEW value, not the original. The SAT tests this exact misunderstanding." },
        { type: "text", content: "**Reverse percent change problems:** The SAT may tell you the percent change and the new value, then ask for the original. Example: \"After a 20% increase, the price is $60. What was the original price?\" Students who divide 60 by 0.20 get 300 (wrong). The correct approach: Original × 1.20 = 60, so Original = 60 / 1.20 = $50. When working backward, divide by the multiplier, never by just the percent." }
      ]
    }
  },
  { id: 9, title: "Simple Percent Change", type: "video", duration: "8 min", section: "Percent Change Questions", videoId: "_wCBskbQnxM", hero: { tagline: "PRACTICE", subtitle: "Basic change calculation" } },
  { id: 10, title: "Complex Percent Change #1", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "3TF-HvTO3yY", hero: { tagline: "ADVANCED", subtitle: "Multi-step problems" } },
  { id: 11, title: "Complex Percent Change #2", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "QgZQtaqOH0Q", hero: { tagline: "ADVANCED", subtitle: "Challenging scenarios" } },
  { id: 12, title: "Complex Percent Change #3", type: "video", duration: "10 min", section: "Percent Change Questions", videoId: "1B0scCTKYcc", hero: { tagline: "ADVANCED", subtitle: "Real-world applications" } },
  // Section 4: Percent Model Questions
  {
    id: 13,
    title: "Percent Models",
    type: "lesson",
    duration: "5 min",
    section: "Percent Model Questions",
    hero: {
      tagline: "MODELING",
      subtitle: "Exponential growth patterns"
    },
    content: {
      blocks: [
        { type: "percentModelIntro" },
        { type: "percentModelFormulaPremium" },
        { type: "text", content: "Percent models take everything you've learned about percent change and **extend it over time**. Instead of a single increase or decrease, you're dealing with repeated changes — a population growing 5% every year, a car losing 15% of its value annually, or a bank account earning interest each month. The math for this is exponential, and the SAT tests it regularly." },
        { type: "text", content: "**Why exponential, not linear?** If a town of 10,000 grows by 5% per year, it gains 500 people the first year (5% of 10,000). But the second year, it gains 525 people (5% of 10,500 — the new, larger population). Each year the growth amount itself grows. That compounding effect is what makes it exponential rather than a straight line." },
        { type: "text", content: "**Anatomy of the model:** In the standard form **f(t) = a · bᵗ**, every piece tells a story:\n\n• **a** (the coefficient) = the **starting value** — the amount at time zero\n• **b** (the base) = the **multiplier per time period** — this is 1 + r for growth or 1 − r for decay\n• **t** (the exponent) = the **number of time periods** that have passed\n• **r** = the percent rate expressed as a decimal" },
        { type: "text", content: "**SAT question patterns for percent models:**\n\n1. \"What does the 0.85 represent?\" — It's the multiplier. Since it's less than 1, the quantity is decreasing. The decay rate is 1 − 0.85 = 0.15 = 15% per period.\n2. \"What is the initial value?\" — It's the coefficient **a**, the number in front of the exponential expression.\n3. \"After how many years will the value reach X?\" — Plug in for f(t) and solve for t (often by testing answer choices).\n4. \"What does the exponent represent?\" — The number of time periods." },
        { type: "text", content: "**Critical SAT trap — misreading the base:** When the model is f(t) = 500(1.03)ᵗ, the growth rate is 3%, NOT 103%. The base is 1.03, but you must subtract 1 to find the rate. Similarly, if the base is 0.92, the decay rate is 8% (1 − 0.92), not 92%. The SAT deliberately places both the base and the rate among the answer choices." },
        { type: "text", content: "**Time period mismatches:** If interest compounds monthly but the question asks about years, or if a population grows annually but the question asks about decades, you need to adjust the exponent. The SAT will give you a model like P(t) = 1000(1.005)¹²ᵗ and ask what happens each year versus each month. The inner rate (0.5% per month) and the effective annual rate are different — and the test checks whether you can tell them apart." },
        { type: "text", content: "**Intuition builder:** Think of the base **b** as a snapshot of one time step. If b = 1.08, imagine every time period the quantity gets multiplied by 1.08 — it keeps 100% of itself and gains 8% more. If b = 0.75, every time period it keeps only 75% of itself — losing 25% each round. Visualizing the multiplier this way makes interpretation questions feel obvious instead of confusing." }
      ]
    }
  },
  { id: 14, title: "Simple Percent Model", type: "video", duration: "8 min", section: "Percent Model Questions", videoId: "gCuT1uatMx0", hero: { tagline: "PRACTICE", subtitle: "Basic modeling" } },
  { id: 15, title: "Complex Percent Model", type: "video", duration: "10 min", section: "Percent Model Questions", videoId: "1yAG9QEoLDs", hero: { tagline: "ADVANCED", subtitle: "Multi-step modeling" } },
  { id: 16, title: "Conceptual Percent Model #1", type: "video", duration: "8 min", section: "Percent Model Questions", videoId: "ou7EbU-Gj0w", hero: { tagline: "DEEP DIVE", subtitle: "Understanding the model" } },
  { id: 17, title: "Conceptual Percent Model #2", type: "video", duration: "10 min", section: "Percent Model Questions", videoId: "F7YlV88yC1M", hero: { tagline: "DEEP DIVE", subtitle: "Advanced concepts" } }
];
