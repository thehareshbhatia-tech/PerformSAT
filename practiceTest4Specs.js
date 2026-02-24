/**
 * DIAGRAM SPECIFICATIONS - SAT Practice Test 4
 * 
 * PURPOSE: This file contains the exact visual data extracted from the official
 * College Board SAT Practice Test 4 PDF. Feed this file to Claude Code along with
 * your practice test file, and it can update the questions with proper diagrams.
 * 
 * HOW TO USE WITH CLAUDE CODE:
 * 1. Give Claude Code this file
 * 2. Say: "Update practiceTest5.js to use the diagram specifications from this file.
 *    Replace any text descriptions in brackets with the proper diagram objects."
 * 
 * EXTRACTED BY: Claude (claude.ai) - which can see and read images/PDFs
 */

export const practiceTest4DiagramSpecs = {
  
  // ============================================
  // MODULE 1
  // ============================================
  
  module1: {
    
    // Question 1 - Bar Graph (Activity voting)
    question1: {
      diagramType: "barChart",
      description: "Bar graph showing number of students who voted for each of 5 activities",
      params: {
        data: [
          { label: "1", value: 20 },
          { label: "2", value: 35 },
          { label: "3", value: 48 },
          { label: "4", value: 25 },
          { label: "5", value: 50 }
        ],
        xLabel: "Activity",
        yLabel: "Number of students",
        yMax: 50,
        yStep: 5
      },
      answer: "C", // 48 students chose activity 3
    },

    // Question 8 - Table (Linear function values)
    question8: {
      diagramType: "table",
      description: "Table showing x and f(x) values for a linear function",
      params: {
        headers: ["x", "f(x)"],
        rows: [
          ["0", "29"],
          ["1", "32"],
          ["2", "35"]
        ]
      },
      answer: "A", // f(x) = 3x + 29
    },

    // Question 9 - Two Similar Right Triangles
    question9: {
      diagramType: "similarTriangles",
      description: "Two right triangles PQR and STU, where P corresponds to S",
      params: {
        triangle1: {
          vertices: ["P", "Q", "R"],
          rightAngleAt: "R",
          orientation: "left" // P at bottom left, Q at top, R at bottom right
        },
        triangle2: {
          vertices: ["S", "T", "U"],
          rightAngleAt: "U",
          orientation: "right" // S at bottom left, T at top, U at bottom right
        },
        note: "Figures not drawn to scale"
      },
      answer: "B", // 72° (since angle Q = 18°, and P corresponds to S, angle S = 90 - 18 = 72°)
    },

    // Question 10 - Scatterplot
    question10: {
      diagramType: "scatterplot",
      description: "Scatterplot showing relationship between x and y with positive correlation",
      params: {
        points: [
          [1, 1], [2, 3], [2, 3.5], [3, 3], [3, 4],
          [4, 4], [4, 5], [5, 5], [5, 4.5], [6, 5],
          [6, 5.5], [7, 5], [7, 6], [8, 8], [9, 9], [10, 9]
        ],
        xLabel: "x",
        yLabel: "y",
        xRange: [0, 10],
        yRange: [0, 10],
        gridLines: true
      },
      answer: "C", // y = 9.4 + 0.9x (positive slope, y-intercept around 0.9)
    },

    // Question 12 - Linear Graph (V-shape or line through quadrants)
    question12: {
      diagramType: "linearGraph",
      description: "Graph of a linear function passing through quadrants",
      params: {
        // Line passes through approximately (-4, 0) and (0, -8)
        slope: -2,
        yIntercept: -8,
        xRange: [-10, 10],
        yRange: [-16, 16],
        showPoints: [[-4, 0], [0, -8]],
        gridLines: true
      },
      answer: "A", // y = -2x - 8
    },

    // Questions 2, 3, 4, 5, 6, 7, 11, 13-27 have NO diagrams (text/equation only)
    
  },

  // ============================================
  // MODULE 2
  // ============================================
  
  module2: {
    
    // Question 1 - Line Graph (Chipmunks over years)
    question1: {
      diagramType: "lineGraph",
      description: "Line graph showing estimated number of chipmunks from 1989-1999",
      params: {
        data: [
          { year: "1989", value: 100 },
          { year: "1990", value: 75 },
          { year: "1991", value: 50 },
          { year: "1992", value: 75 },
          { year: "1993", value: 100 },
          { year: "1994", value: 150 },
          { year: "1995", value: 200 },  // Peak
          { year: "1996", value: 175 },
          { year: "1997", value: 125 },
          { year: "1998", value: 175 },
          { year: "1999", value: 125 }
        ],
        xLabel: "Year",
        yLabel: "Estimated number\nof chipmunks",
        yMax: 200,
        yStep: 50,
        showDataPoints: true
      },
      answer: "C", // 1995 (highest point on graph)
    },

    // Question 8 - Table (Function h(x) = x² - 3)
    question8: {
      diagramType: "table",
      description: "Multiple choice with tables showing x and h(x) values",
      note: "This question has 4 table options as answer choices, not a single diagram",
      // The correct table is option B: x=1,2,3 → h(x)=-2,1,6
      answer: "B",
    },

    // Question 13 - Two-way Table (Tiles: color and shape)
    question13: {
      diagramType: "table",
      description: "Two-way table showing distribution of 100 tiles by color and shape",
      params: {
        headers: ["", "Red", "Blue", "Yellow", "Total"],
        rows: [
          ["Square", "10", "20", "25", "55"],
          ["Pentagon", "20", "10", "15", "45"],
          ["Total", "30", "30", "40", "100"]
        ]
      },
      answer: "0.3", // or 3/10 or 30/100 (probability of red = 30/100)
    },

    // Question 16 - Parallel Lines Cut by Transversal
    question16: {
      diagramType: "parallelLines",
      description: "Lines m and n are parallel, cut by transversal t. Angles x, y, z marked.",
      params: {
        lines: ["t", "m", "n"],
        parallelLines: ["m", "n"],
        transversal: "t",
        angles: {
          x: { position: "upper-left of m intersection", type: "variable" },
          y: { position: "upper-left of n intersection", type: "variable" },
          z: { position: "lower-right of n intersection", type: "variable" }
        },
        note: "Figure not drawn to scale",
        // x and y are corresponding angles (equal when parallel)
        // z and y are supplementary (z + y = 180) OR z = x (alternate interior)
      },
      givenInfo: "x = 6k + 13, y = 8k - 29",
      answer: "C", // z = 41°
    },

    // Question 22 - System of Linear Equations Graph
    question22: {
      diagramType: "linearSystemGraph",
      description: "Graph showing two intersecting lines",
      params: {
        lines: [
          { slope: -0.25, yIntercept: -4, color: "#000" },  // Line 1
          { slope: 1, yIntercept: 6, color: "#000" }        // Line 2 (approximate)
        ],
        xRange: [-10, 10],
        yRange: [-10, 10],
        intersection: [-4, 2],  // Approximate intersection point
        gridLines: true
      },
      answer: "B", // Exactly one solution (the intersection point)
    },

    // Question 24 - Dot Plot
    question24: {
      diagramType: "dotPlot",
      description: "Dot plot showing 15 values in Data Set A",
      params: {
        title: "Data Set A",
        data: [
          { value: 22, count: 1 },
          { value: 23, count: 4 },
          { value: 24, count: 4 },
          { value: 25, count: 4 },
          { value: 26, count: 2 }
        ],
        xRange: [22, 26],
        totalPoints: 15
      },
      answer: "C", // Median increases by 56, range stays the same
    },

  }
};

/**
 * QUICK REFERENCE: Which questions have diagrams
 * 
 * MODULE 1:
 * - Q1:  Bar chart (activity voting)
 * - Q8:  Table (linear function)
 * - Q9:  Triangle geometry (similar triangles)
 * - Q10: Scatterplot
 * - Q12: Linear graph
 * 
 * MODULE 2:
 * - Q1:  Line graph (chipmunks)
 * - Q8:  Tables in answer choices
 * - Q13: Two-way table
 * - Q16: Parallel lines geometry
 * - Q22: System of equations graph
 * - Q24: Dot plot
 */

export default practiceTest4DiagramSpecs;
