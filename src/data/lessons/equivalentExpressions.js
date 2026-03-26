export const equivalentExpressionsLessons = [
  {
    id: 1,
    title: "Equivalent Expressions",
    type: "lesson",
    duration: "4 min",
    section: "Equivalent Expressions",
    hero: {
      tagline: "ALGEBRA FOUNDATIONS",
      subtitle: "Same value, different form"
    },
    content: {
      blocks: [
        { type: "text", content: "Two expressions are **equivalent** if they produce the **exact same value** for every possible input. For example, 2(x + 3) and 2x + 6 look different, but plug in ANY number for x and you'll get the same result. The SAT tests this concept constantly — roughly 3-5 questions per test ask you to identify, simplify, or verify equivalent expressions. Mastering this topic is one of the highest-value investments you can make." },
        { type: "equivalentExpressionsIntro" },
        { type: "text", content: "**Why Equivalent Expressions Matter:** In algebra, rewriting an expression in a different form often reveals hidden information. Factored form shows you the zeros. Standard form shows you the coefficients. Vertex form shows you the peak. The SAT asks you to recognize that all these forms are equivalent — they're just different outfits on the same mathematical idea." },
        { type: "text", content: "**The Two Main Approaches:**\n\n**Approach 1 — Algebraic Manipulation:** Use distribution, factoring, combining like terms, or exponent rules to transform one expression into another. This is the \"textbook\" method and works when the algebra is clean.\n\n**Approach 2 — Substitution (The Desmos Power Move):** Plug in a specific value for the variable and check if both expressions give the same result. If they do for 2-3 different values, they're almost certainly equivalent. This is faster and more reliable for complex expressions, and it's the secret weapon most top scorers use." },
        { type: "equivalentExpressionsMethod" },
        { type: "text", content: "**SAT Question Patterns:**\n\n• **\"Which expression is equivalent to...\"** — Simplify or transform the given expression and match an answer choice\n• **\"Which of the following is NOT equivalent to...\"** — Test each answer choice; the odd one out is the answer\n• **Factoring questions:** Given expanded form, find the factored form (or vice versa)\n• **Combining rational expressions:** Adding fractions with polynomial denominators\n• **Exponent simplification:** Using exponent rules to rewrite expressions" },
        { type: "equivalentExpressionsExample" },
        { type: "text", content: "**SAT Trap — Testing Only One Value:** If you use the substitution method, never test with just ONE value. Two different expressions can coincidentally give the same output for a single input. For example, x² and 2x both equal 4 when x = 2, but they're not equivalent. **Always test at least 2-3 different values** (avoid 0 and 1, which can mask differences). Good test values: x = 2, x = 3, x = −1." },
        { type: "text", content: "**SAT Trap — Sign Errors in Distribution:** The SAT loves expressions like −3(x − 4). Students often write −3x − 12 instead of the correct −3x + 12. When you distribute a negative across a subtraction, the double negative becomes positive. If you catch yourself rushing through distribution, slow down — this is where free points are lost." },
        { type: "text", content: "**The Desmos Strategy:** On the digital SAT, you have Desmos built in. Here's the power move: type the original expression as y₁ and an answer choice as y₂. If the graphs overlap perfectly, they're equivalent. You can also type y₁ − y₂ and if it equals 0 for all x values, they're equivalent. This visual confirmation is fast and foolproof." },
        { type: "text", content: "**Key Takeaway:** Equivalent expressions are different forms of the same mathematical relationship. You can verify equivalence algebraically (simplify both sides) or numerically (plug in values). On the SAT, the substitution/Desmos method is often faster and safer than pure algebra. Always test multiple values and watch for sign errors in distribution." }
      ]
    }
  },
  { id: 2, title: "Equivalent Expressions Example #1", type: "video", duration: "6 min", section: "Equivalent Expressions", videoId: "2if86_b5ljE", hero: { tagline: "DESMOS METHOD", subtitle: "Visual verification technique" } },
  { id: 3, title: "Equivalent Expressions Example #2", type: "video", duration: "6 min", section: "Equivalent Expressions", videoId: "rJvyuTF9_Uw", hero: { tagline: "DESMOS METHOD", subtitle: "More practice problems" } }
];
