export const quadraticsLessons = [
  // Section 1: Overview
  {
    id: 1,
    title: "Introduction to Quadratics",
    type: "lesson",
    duration: "6 min",
    section: "Overview",
    hero: {
      tagline: "THE PARABOLA",
      subtitle: "When x gets squared"
    },
    content: {
      blocks: [
        { type: "quadraticIntro" },
        { type: "quadraticStandardForm" },
        { type: "parabolaDirection" }
      ]
    }
  },
  // Section 2: Roots
  {
    id: 2,
    title: "Roots of a Quadratic",
    type: "lesson",
    duration: "6 min",
    section: "Roots",
    hero: {
      tagline: "WHERE Y = 0",
      subtitle: "Finding the x-intercepts"
    },
    content: {
      blocks: [
        { type: "rootsIntro" },
        { type: "rootsSynonyms" },
        { type: "rootsOnGraph" }
      ]
    }
  },
  { id: 3, title: "Finding Roots Via Graph", type: "video", duration: "8 min", section: "Roots", videoId: "HjtgJosvHus", hero: { tagline: "GRAPHICAL", subtitle: "Reading x-intercepts" } },
  { id: 4, title: "Finding Roots Via Factoring", type: "video", duration: "10 min", section: "Roots", videoId: "Ilf751ezqtM", hero: { tagline: "FACTORING", subtitle: "Breaking apart quadratics" } },
  { id: 5, title: "Finding Roots Via Completing the Square", type: "video", duration: "10 min", section: "Roots", videoId: "WVhrFVpiqik", hero: { tagline: "COMPLETING SQUARE", subtitle: "Algebraic method" } },
  { id: 6, title: "Finding Roots Via DESMOS", type: "video", duration: "8 min", section: "Roots", videoId: "vOfds1-LBx4", hero: { tagline: "DESMOS METHOD", subtitle: "Visual root finding" } },
  { id: 7, title: "Complex Finding the Roots via DESMOS", type: "video", duration: "10 min", section: "Roots", videoId: "06R53pBYjs0", hero: { tagline: "ADVANCED", subtitle: "Complex DESMOS approach" } },
  // Section 3: Vertex
  {
    id: 8,
    title: "The Vertex",
    type: "lesson",
    duration: "6 min",
    section: "Vertex",
    hero: {
      tagline: "THE TURNING POINT",
      subtitle: "Max or min of the parabola"
    },
    content: {
      blocks: [
        { type: "vertexIntro" },
        { type: "vertexFormula", notGiven: true },
        { type: "vertexWhereVsWhat" }
      ]
    }
  },
  {
    id: 9,
    title: "Vertex Form",
    type: "lesson",
    duration: "5 min",
    section: "Vertex",
    hero: {
      tagline: "a(x - h)² + k",
      subtitle: "The vertex-revealing form"
    },
    content: {
      blocks: [
        { type: "vertexFormIntro" },
        { type: "vertexFormFormula", notGiven: true }
      ]
    }
  },
  { id: 10, title: "Finding the Vertex from a Graph", type: "video", duration: "8 min", section: "Vertex", videoId: "KSvSDNTvwOQ", hero: { tagline: "PRACTICE", subtitle: "Reading vertex from graph" } },
  { id: 11, title: "Finding the Vertex from an Equation", type: "video", duration: "10 min", section: "Vertex", videoId: "XQ2Tw8hzjPk", hero: { tagline: "PRACTICE", subtitle: "Calculate vertex" } },
  { id: 12, title: "Transformation of Vertex", type: "video", duration: "10 min", section: "Vertex", videoId: "R-f4HyaOsZY", hero: { tagline: "TRANSFORMATIONS", subtitle: "Moving the vertex" } },
  { id: 13, title: "Transformation of Vertex (DESMOS Method)", type: "video", duration: "8 min", section: "Vertex", videoId: "iKRlQJg463E", hero: { tagline: "DESMOS METHOD", subtitle: "Visual vertex shifts" } },
  // Section 4: Discriminant
  {
    id: 14,
    title: "The Discriminant",
    type: "lesson",
    duration: "7 min",
    section: "Discriminant",
    hero: {
      tagline: "b² - 4ac",
      subtitle: "How many solutions?"
    },
    content: {
      blocks: [
        { type: "discriminantIntro" },
        { type: "discriminantFormula", notGiven: true },
        { type: "discriminantCases" },
        { type: "discriminantWhenToUse" }
      ]
    }
  },
  { id: 15, title: "Simple Discriminant Question #1", type: "video", duration: "8 min", section: "Discriminant", videoId: "HvmcHvs4aJw", hero: { tagline: "PRACTICE", subtitle: "Basic discriminant" } },
  { id: 16, title: "Simple Discriminant Question #1 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "qC4zH3TPEPs", hero: { tagline: "DESMOS METHOD", subtitle: "Visual approach" } },
  { id: 17, title: "Simple Discriminant Question #2", type: "video", duration: "8 min", section: "Discriminant", videoId: "3T7p7HIovK0", hero: { tagline: "PRACTICE", subtitle: "More practice" } },
  { id: 18, title: "Simple Discriminant Question #2 (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "QH6bXCWlYaU", hero: { tagline: "DESMOS METHOD", subtitle: "Visual solution" } },
  { id: 19, title: "Complex Discriminant Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "z8eu9oFwk2I", hero: { tagline: "ADVANCED", subtitle: "Challenging discriminant" } },
  { id: 20, title: "Simple Discriminant System Question", type: "video", duration: "10 min", section: "Discriminant", videoId: "uGGb383xfu4", hero: { tagline: "SYSTEMS", subtitle: "Discriminant in systems" } },
  { id: 21, title: "Simple Discriminant System Question (DESMOS Method)", type: "video", duration: "8 min", section: "Discriminant", videoId: "skD4XM2RIgw", hero: { tagline: "DESMOS METHOD", subtitle: "Visual system approach" } },
  { id: 22, title: "Complex Discriminant System Question", type: "video", duration: "12 min", section: "Discriminant", videoId: "l6yMmy60gFA", hero: { tagline: "ADVANCED", subtitle: "Complex system" } },
  // Section 5: Deriving Standard Form
  {
    id: 23,
    title: "Deriving Standard Form from a Graph",
    type: "lesson",
    duration: "6 min",
    section: "Deriving Standard Form",
    hero: {
      tagline: "GRAPH → EQUATION",
      subtitle: "Building the equation"
    },
    content: {
      blocks: [
        { type: "derivingStandardFormIntro" },
        { type: "derivingStandardFormMethods" },
        { type: "derivingStandardFormTips" }
      ]
    }
  },
  { id: 24, title: "Deriving Standard Form From Graph", type: "video", duration: "10 min", section: "Deriving Standard Form", videoId: "K66XHuhQy-U", hero: { tagline: "PRACTICE", subtitle: "Graph to standard form" } },
  { id: 25, title: "Deriving Standard Form From Graph (DESMOS Method)", type: "video", duration: "8 min", section: "Deriving Standard Form", videoId: "QpUMRFoMUMo", hero: { tagline: "DESMOS METHOD", subtitle: "Visual derivation" } },
  { id: 26, title: "Complex Deriving Standard Form (Vertex Form Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "0ijCFEhltcg", hero: { tagline: "VERTEX FORM", subtitle: "Using vertex form" } },
  { id: 27, title: "Complex Deriving Standard Form (System of Equations Method)", type: "video", duration: "12 min", section: "Deriving Standard Form", videoId: "G6dJDa4sFCU", hero: { tagline: "SYSTEMS", subtitle: "System of equations method" } }
];
