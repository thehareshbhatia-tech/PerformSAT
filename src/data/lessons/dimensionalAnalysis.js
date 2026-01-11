export const dimensionalAnalysisLessons = [
  // Section 1: Unit Conversion Basics
  {
    id: 1,
    title: "Dimensional Analysis (Unit Conversion)",
    type: "lesson",
    duration: "6 min",
    section: "Unit Conversion Basics",
    content: {
      blocks: [
        { type: "text", content: "**Dimensional Analysis** is a way to check that a formula or calculation makes sense by looking at the **units**." },
        { type: "dimensionalAnalysisRules" },
        { type: "dimensionalAnalysisExample" }
      ]
    }
  },
  { id: 2, title: "Simple Dimensional Analysis Question", type: "video", duration: "8 min", section: "Unit Conversion Basics", videoId: "8Pt_Ie0ibQw" },
  // Section 2: Squared & Cubic Units
  {
    id: 3,
    title: "Dimensional Analysis with Squared/Cubic Units",
    type: "lesson",
    duration: "7 min",
    section: "Squared & Cubic Units",
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
  { id: 4, title: "Simple Dimensional Analysis with Squared Units", type: "video", duration: "8 min", section: "Squared & Cubic Units", videoId: "46FIIVQweZA" },
  { id: 5, title: "Multi-Step Dimensional Analysis with Squared Units", type: "video", duration: "10 min", section: "Squared & Cubic Units", videoId: "SdOgadn-vRk" }
];
