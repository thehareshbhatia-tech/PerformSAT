export const dimensionalAnalysisLessons = [
  // Section 1: Unit Conversion Basics
  {
    id: 1,
    title: "Dimensional Analysis",
    type: "lesson",
    duration: "6 min",
    section: "Unit Conversion Basics",
    hero: {
      tagline: "UNIT CONVERSION",
      subtitle: "Making units work for you"
    },
    content: {
      blocks: [
        { type: "text", content: "Here's a question: if someone tells you a car is traveling at 60, does that mean anything? 60 miles per hour? 60 kilometers per hour? 60 meters per second? Without **units**, a number is meaningless. **Dimensional analysis** is the technique of tracking units through a calculation to make sure your answer comes out in the right units — and to convert between different units systematically. It's like having a GPS for your math: even if you're not sure of the route, the units will guide you to the right answer." },
        { type: "text", content: "**The Core Idea — Conversion Factors as Fractions:** Every unit conversion can be written as a fraction that equals 1. For example, since 1 foot = 12 inches, the fraction 12 inches / 1 foot = 1. Multiplying by 1 doesn't change the value — it only changes the units. So to convert 5 feet to inches: 5 feet × (12 inches / 1 foot) = 60 inches. The \"feet\" units cancel, and you're left with inches. That's it. That's the whole method." },
        { type: "dimensionalAnalysisRules" },
        { type: "text", content: "**Why This Matters on the SAT:** Dimensional analysis questions appear on nearly every SAT. They're often disguised as word problems about rates, speeds, pricing, or unit conversions. The SAT doesn't call it \"dimensional analysis\" — instead you'll see: \"A machine produces 150 widgets per hour. How many widgets does it produce in 3 days?\" The key is chaining conversion factors: widgets/hour × hours/day × days." },
        { type: "text", content: "**The Step-by-Step Method:**\n\n1. **Write down what you have** (with its units)\n2. **Write down what you want** (the target units)\n3. **Build a chain of fractions** where each fraction equals 1, and units cancel step by step\n4. **Cancel units** diagonally — if \"hours\" appears in a numerator and denominator, they cancel\n5. **Multiply all numerators, divide by all denominators** — and check that only your target unit remains" },
        { type: "dimensionalAnalysisExample" },
        { type: "text", content: "**SAT Trap — Setting Up the Fraction Upside Down:** The most common mistake is flipping the conversion factor. If 1 mile = 5,280 feet, you might need 5280 ft / 1 mi OR 1 mi / 5280 ft — depending on which unit you're trying to cancel. **Always put the unit you want to cancel in the opposite position** (if it's in the numerator of your starting value, put it in the denominator of your conversion factor)." },
        { type: "text", content: "**SAT Trap — Multi-Step Conversions:** The SAT loves chain conversions: converting seconds → minutes → hours, or inches → feet → yards. Don't try to do it in one giant leap. Set up each conversion as a separate fraction in your chain. Slow and systematic beats fast and wrong." },
        { type: "text", content: "**Key Takeaway:** Dimensional analysis is unit cancellation. Write your conversion factors as fractions, cancel units step by step, and the math takes care of itself. If your final answer has the wrong units, something in your setup is flipped." }
      ]
    }
  },
  { id: 2, title: "Simple Dimensional Analysis", type: "video", duration: "8 min", section: "Unit Conversion Basics", videoId: "8Pt_Ie0ibQw", hero: { tagline: "PRACTICE", subtitle: "Basic unit conversion example" } },
  // Section 2: Squared & Cubic Units
  {
    id: 3,
    title: "Squared & Cubic Units",
    type: "lesson",
    duration: "7 min",
    section: "Squared & Cubic Units",
    hero: {
      tagline: "ADVANCED",
      subtitle: "When dimensions multiply"
    },
    content: {
      blocks: [
        { type: "text", content: "This is where dimensional analysis gets tricky — and where the SAT catches most students. When you're converting **squared units** (like ft² to in²) or **cubed units** (like m³ to cm³), you can't just use the conversion factor once. You have to apply it **for each dimension**. This feels counterintuitive at first, so let's build the understanding step by step." },
        { type: "text", content: "**The Intuition — Why You Must Square the Factor:** Think about a square that's 1 foot on each side. Its area is 1 ft². Now, 1 foot = 12 inches, so each side is 12 inches. The area in square inches is 12 × 12 = **144 in²**. Notice: 1 ft² = 144 in², NOT 12 in². You had to multiply by 12 **twice** — once for each dimension. If you only multiplied by 12, you'd be off by a factor of 12. This is the #1 trap on the SAT for unit conversion problems." },
        { type: "squaredUnitsWarning" },
        { type: "text", content: "**The Rule:**\n\n• For **squared units** (area): square the conversion factor. Since 1 ft = 12 in, then 1 ft² = (12)² in² = 144 in²\n• For **cubed units** (volume): cube the conversion factor. Since 1 ft = 12 in, then 1 ft³ = (12)³ in³ = 1,728 in³\n\nAlternatively, just apply the regular conversion factor multiple times in your chain — the math will handle the squaring/cubing automatically." },
        { type: "squaredUnitsExample1" },
        { type: "squaredUnitsExample2" },
        { type: "text", content: "**SAT Question Patterns:**\n\n• **Area conversion:** \"A room is 200 square feet. How many square inches is that?\" (200 × 144 = 28,800 in²)\n• **Volume conversion:** \"A tank holds 5 cubic meters. How many cubic centimeters is that?\" (5 × 1,000,000 = 5,000,000 cm³, because 1 m = 100 cm and 100³ = 1,000,000)\n• **Embedded in word problems:** The conversion might be part of a larger problem about paint coverage, water capacity, or material costs" },
        { type: "whySquareConversion" },
        { type: "text", content: "**SAT Trap — The \"Just Multiply Once\" Mistake:** If you see answer choices where one is 12× and another is 144× the starting value, the test is checking whether you know to square the conversion factor. The wrong answer (12×) is always there as a tempting trap. Similarly for cubic: if choices include 100× and 1,000,000×, the cubic conversion (100³) gives you 1,000,000." },
        { type: "text", content: "**Key Takeaway:** Squared units need the conversion factor squared. Cubed units need it cubed. This is because area has two dimensions and volume has three. When in doubt, write out the chain and cancel units — if you set it up correctly, the squaring/cubing happens naturally." }
      ]
    }
  },
  { id: 4, title: "Squared Units Example", type: "video", duration: "8 min", section: "Squared & Cubic Units", videoId: "46FIIVQweZA", hero: { tagline: "PRACTICE", subtitle: "Simple squared conversion" } },
  { id: 5, title: "Multi-Step Squared Units", type: "video", duration: "10 min", section: "Squared & Cubic Units", videoId: "SdOgadn-vRk", hero: { tagline: "ADVANCED", subtitle: "Complex conversion chains" } }
];
