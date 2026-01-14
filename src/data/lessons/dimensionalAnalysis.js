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
        { type: "text", content: "**Dimensional Analysis** is a way to check that a formula or calculation makes sense by looking at the **units**." },
        { type: "dimensionalAnalysisRules" },
        { type: "dimensionalAnalysisExample" }
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
        { type: "text", content: "When a unit is **squared** or **cubed**, the **entire conversion factor** must also be squared or cubed. You are converting the unit **twice** (or three times), not once." },
        { type: "squaredUnitsWarning" },
        { type: "squaredUnitsExample1" },
        { type: "squaredUnitsExample2" },
        { type: "whySquareConversion" }
      ]
    }
  },
  { id: 4, title: "Squared Units Example", type: "video", duration: "8 min", section: "Squared & Cubic Units", videoId: "46FIIVQweZA", hero: { tagline: "PRACTICE", subtitle: "Simple squared conversion" } },
  { id: 5, title: "Multi-Step Squared Units", type: "video", duration: "10 min", section: "Squared & Cubic Units", videoId: "SdOgadn-vRk", hero: { tagline: "ADVANCED", subtitle: "Complex conversion chains" } }
];
