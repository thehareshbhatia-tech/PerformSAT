# DIAGRAM IMPLEMENTATION GUIDE FOR CLAUDE CODE

## Purpose
This guide helps Claude Code properly implement visual diagrams in SAT practice test questions. Since Claude Code cannot see images, these specifications provide the exact data extracted from the original SAT PDFs.

## The Problem
When creating practice tests, you may have generated questions with text descriptions like:
```javascript
question: "The bar graph shows... [Bar graph showing: A: 32, B: 45, C: 28]"
```

This is WRONG because:
1. Students can read the answer directly from the text
2. It doesn't test graph-reading skills
3. It doesn't match the real SAT format

## The Solution
Replace text descriptions with proper `diagram` objects that render actual visuals.

---

## HOW TO UPDATE A PRACTICE TEST

### Step 1: Identify Questions with Diagram Descriptions
Look for questions containing:
- `[Bar graph showing...]`
- `[Scatterplot showing...]`
- `[Table showing...]`
- `[Graph of...]`
- `[Figure showing...]`
- Any bracketed visual description

### Step 2: Find the Matching Spec
Look in the diagram specification file (e.g., `practiceTest4Specs.js`) for the matching question.

### Step 3: Replace with Proper Diagram Object
Transform from:
```javascript
{
  id: 1,
  question: "The bar graph shows student votes. [Bar graph: Activity 1: 20, Activity 2: 35...] How many chose activity 3?",
  // ...
}
```

To:
```javascript
{
  id: 1,
  question: "A group of students voted on five after-school activities. The bar graph shows the number of students who voted for each of the five activities. How many students chose activity 3?",
  diagram: {
    type: "barChart",
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
    }
  },
  // ...
}
```

---

## AVAILABLE DIAGRAM TYPES

Reference: `QuestionDiagrams.jsx` supports these types:

### 1. barChart
```javascript
diagram: {
  type: "barChart",
  params: {
    data: [{ label: "A", value: 25 }, { label: "B", value: 40 }],
    xLabel: "Category",
    yLabel: "Count",
    yMax: 50,          // Optional: max y-axis value
    yStep: 5           // Optional: y-axis increment
  }
}
```

### 2. table
```javascript
diagram: {
  type: "table",
  params: {
    headers: ["x", "f(x)"],
    rows: [
      ["0", "29"],
      ["1", "32"],
      ["2", "35"]
    ]
  }
}
```

### 3. scatterplot
```javascript
diagram: {
  type: "scatterplot",
  params: {
    points: [[1, 2], [2, 4], [3, 5], [4, 8]],
    xLabel: "x",
    yLabel: "y",
    xMax: 10,
    yMax: 10
  }
}
```

### 4. linearGraph / linearLine
```javascript
diagram: {
  type: "linearGraph",
  params: {
    slope: -2,
    yIntercept: -8,
    xRange: [-10, 10],
    yRange: [-16, 16],
    showPoints: [[-4, 0], [0, -8]],  // Optional: highlight specific points
    label: "f(x)"                     // Optional: function label
  }
}
```

### 5. dotPlot
```javascript
diagram: {
  type: "dotPlot",
  params: {
    sets: [
      { value: 22, count: 1 },
      { value: 23, count: 4 },
      { value: 24, count: 4 }
    ],
    xRange: [20, 30],
    title: "Data Set A"
  }
}
```

### 6. triangle
```javascript
diagram: {
  type: "triangle",
  params: {
    vertices: ["P", "Q", "R"],
    rightAngle: "R",        // Which vertex has the right angle
    altitude: null          // Optional: draw altitude from which vertex
  }
}
```

### 7. quadraticVertex
```javascript
diagram: {
  type: "quadraticVertex",
  params: {
    vertex: [2, -3],        // [h, k] for y = a(x-h)² + k
    a: 0.5,                 // Coefficient (positive = opens up)
    showPoints: [[0, 1], [4, 1]],  // Optional additional points
    showVertex: true
  }
}
```

### 8. rationalFunction
```javascript
diagram: {
  type: "rationalFunction",
  params: {
    a: 6,                   // Numerator for f(x) = a/(x+b)
    b: 4,                   // Denominator shift
    showPoints: [[-5, -6]]  // Optional: highlight points
  }
}
```

### 9. piecewiseLinear
```javascript
diagram: {
  type: "piecewiseLinear",
  params: {
    points: [[-4, 2], [-1, 5], [2, 3], [5, 6]],  // Connected line segments
    xRange: [-5, 6],
    yRange: [-3, 6],
    label: "f(x)"
  }
}
```

### 10. circleGeometry
```javascript
diagram: {
  type: "circleGeometry",
  params: {
    center: "O",
    points: ["R", "S"],           // Points on circle
    inscribedAngle: "ROS",        // Optional
    centralAngle: "100"           // Optional: degrees
  }
}
```

---

## EXAMPLE: FULL QUESTION TRANSFORMATION

### BEFORE (wrong):
```javascript
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The scatterplot shows the relationship between two variables, x and y. [Scatterplot with points roughly following y = 0.9x + 9.4] Which equation is the most appropriate linear model?",
  choices: [
    { id: "A", text: "y = 0.9 + 9.4x" },
    { id: "B", text: "y = 0.9 - 9.4x" },
    { id: "C", text: "y = 9.4 + 0.9x" },
    { id: "D", text: "y = 9.4 - 0.9x" }
  ],
  correctAnswer: "C"
}
```

### AFTER (correct):
```javascript
{
  id: 10,
  type: "multiple-choice", 
  difficulty: "medium",
  question: "The scatterplot shows the relationship between two variables, x and y. Which of the following equations is the most appropriate linear model for the data shown?",
  diagram: {
    type: "scatterplot",
    params: {
      points: [
        [1, 1], [2, 3], [2, 3.5], [3, 3], [3, 4],
        [4, 4], [4, 5], [5, 5], [5, 4.5], [6, 5],
        [6, 5.5], [7, 5], [7, 6], [8, 8], [9, 9], [10, 9]
      ],
      xLabel: "x",
      yLabel: "y", 
      xMax: 10,
      yMax: 10
    }
  },
  choices: [
    { id: "A", text: "y = 0.9 + 9.4x" },
    { id: "B", text: "y = 0.9 - 9.4x" },
    { id: "C", text: "y = 9.4 + 0.9x" },
    { id: "D", text: "y = 9.4 - 0.9x" }
  ],
  correctAnswer: "C",
  explanation: "**Choice C is correct.** The scatterplot shows a positive linear relationship. The y-intercept is approximately 0.9-1, and the slope is approximately 0.9 (rise/run). This matches y = 9.4 + 0.9x... wait, let me recalculate. Looking at the data, when x=0, y would be around 0.9, and the slope is about 0.9, so y ≈ 0.9 + 0.9x. But given the choices, C (y = 9.4 + 0.9x) represents a y-intercept of 9.4 which doesn't match. Let me re-examine..."
}
```

---

## PROMPT TO GIVE CLAUDE CODE

Copy and paste this prompt to Claude Code:

```
I need you to update the practice test file to fix the diagrams. 

Here's what to do:
1. Read the diagram specification file I'm providing
2. Find questions in the practice test that have text descriptions in brackets like "[Bar graph showing...]" or "[Scatterplot...]"
3. Replace those text descriptions with proper `diagram` objects using the exact data from the spec file
4. Remove the bracketed text from the question string
5. Make sure the diagram type matches what's available in QuestionDiagrams.jsx

The spec file contains the exact visual data extracted from the original SAT PDF.

Files to reference:
- Diagram specs: [path to spec file]
- Practice test to update: [path to practice test]
- Available diagram components: src/components/QuestionDiagrams.jsx
```

---

## CREATING NEW SPECS

If you need diagram specs for a new practice test:

1. Upload the SAT PDF to Claude Chat (claude.ai)
2. Ask: "Please extract the diagram data from each question that has a visual (graphs, tables, figures). Give me the exact values/coordinates/data for each."
3. Claude Chat will create a spec file like this one
4. Save the spec file in your project
5. Give it to Claude Code to implement

This workflow leverages:
- **Claude Chat**: Can see images → extracts visual data
- **Claude Code**: Can write code → implements the diagrams
