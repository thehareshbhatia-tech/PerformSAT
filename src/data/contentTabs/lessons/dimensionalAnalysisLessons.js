export const dimensionalAnalysisLessonTabs = {
  "1": {
    "moduleId": "dimensional-analysis",
    "title": "Dimensional Analysis",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Dimensional analysis converts between units by multiplying by fractions equal to $1$, guaranteeing the value stays unchanged while the unit transforms.",
        "blocks": [
          {
            "type": "heading",
            "content": "Dimensional Analysis"
          },
          {
            "type": "text",
            "content": "Dimensional analysis is unit conversion — multiplying by conversion factors that equal $1$ so the value changes form but not magnitude. Units cancel just like numbers in fractions."
          },
          {
            "type": "text",
            "content": "Set up a chain of fractions where the unit you want to cancel appears in the denominator. Write units on every number. Cancel units left to right. The remaining unit should be your target. A printer produces posters at a constant rate of 42 posters per minute. At what rate in posters per hour does a printer produce the posters? Okay, this is a simple dimensional analysis or a unit conversion question because we are simply converting fr."
          },
          {
            "type": "formula",
            "label": "Dimensional Analysis — Core Rule",
            "content": "$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Convert $5$ miles to feet: $5\\ \\text{mi} \\times \\frac{5280\\ \\text{ft}}{1\\ \\text{mi}} = 26{,}400\\ \\text{ft}$. \"mi\" cancels."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students flip the conversion factor — putting the unit they want to cancel in the numerator instead of the denominator. This multiplies the unit instead of canceling it. The unit you want to GET RID OF goes in the denominator. The unit you WANT goes in the numerator. Check: the old unit should cancel."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write units on every number and cancel units left-to-right. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Dimensional Analysis\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Convert $3$ miles to feet.",
            "steps": [
              {
                "label": "Set up",
                "content": "$3 \\text{ mi} \\times \\frac{5{,}280 \\text{ ft}}{1 \\text{ mi}}$"
              },
              {
                "label": "Cancel",
                "content": "mi in the numerator and mi in the denominator cancel"
              },
              {
                "label": "Compute",
                "content": "$3 \\times 5{,}280 = 15{,}840$"
              },
              {
                "label": "Answer",
                "content": "$15{,}840$ feet"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A hose delivers water at $5$ gallons per minute. Express this rate in quarts per hour. ($1$ gallon $= 4$ quarts)",
            "answer": "$\\frac{5 \\text{ gal}}{1 \\text{ min}} \\times \\frac{4 \\text{ qt}}{1 \\text{ gal}} \\times \\frac{60 \\text{ min}}{1 \\text{ hr}} = 5 \\times 4 \\times 60 = 1{,}200$ quarts per hour."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "dimensional-analysis",
    "title": "Simple Dimensional Analysis",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Simple dimensional analysis uses one or two conversion factors in a single multiplication chain.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Dimensional Analysis"
          },
          {
            "type": "text",
            "content": "Dimensional analysis is unit conversion — multiplying by conversion factors that equal $1$ so the value changes form but not magnitude. Units cancel just like numbers in fractions."
          },
          {
            "type": "text",
            "content": "Set up a chain of fractions where the unit you want to cancel appears in the denominator. Write units on every number. Cancel units left to right. The remaining unit should be your target. A printer produces posters at a constant rate of 42 posters per minute. At what rate in posters per hour does a printer produce the posters? Okay, this is a simple dimensional analysis or a unit conversion question because we are simply converting fr."
          },
          {
            "type": "formula",
            "label": "Simple Dimensional Analysis — Core Rule",
            "content": "$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Convert $5$ miles to feet: $5\\ \\text{mi} \\times \\frac{5280\\ \\text{ft}}{1\\ \\text{mi}} = 26{,}400\\ \\text{ft}$. \"mi\" cancels."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students flip the conversion factor — putting the unit they want to cancel in the numerator instead of the denominator. This multiplies the unit instead of canceling it. The unit you want to GET RID OF goes in the denominator. The unit you WANT goes in the numerator. Check: the old unit should cancel."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write units on every number and cancel units left-to-right. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Dimensional Analysis\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Convert $7$ feet to inches.",
            "steps": [
              {
                "label": "Set up",
                "content": "$7 \\text{ ft} \\times \\frac{12 \\text{ in}}{1 \\text{ ft}}$"
              },
              {
                "label": "Cancel",
                "content": "ft cancels, leaving inches"
              },
              {
                "label": "Compute",
                "content": "$7 \\times 12 = 84$"
              },
              {
                "label": "Answer",
                "content": "$84$ inches"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $7$ feet to inches.",
            "answer": "$84$ inches"
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "dimensional-analysis",
    "title": "Squared & Cubic Units",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Converting area or volume units requires raising the linear conversion factor to the same power as the unit dimension.",
        "blocks": [
          {
            "type": "heading",
            "content": "Squared & Cubic Units"
          },
          {
            "type": "text",
            "content": "When converting squared or cubic units, you must apply the conversion factor twice (for squared) or three times (for cubic). This is because area and volume are multi-dimensional."
          },
          {
            "type": "text",
            "content": "$1\\ \\text{ft}^2 = (12\\ \\text{in})^2 = 144\\ \\text{in}^2$. $1\\ \\text{ft}^3 = (12\\ \\text{in})^3 = 1728\\ \\text{in}^3$. The conversion factor gets raised to the same power as the unit. Certain town has an area of 4.36 square miles. What is the area in square yards of this town knowing that 1 mile is equal to 1,760 yard? Okay, this is a very simple unit conversion or dimensional analysis question. The units that we are given are squ."
          },
          {
            "type": "formula",
            "label": "Squared & Cubic Units — Core Rule",
            "content": "$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Convert $2\\ \\text{m}^2$ to $\\text{cm}^2$: $2 \\times (100)^2 = 2 \\times 10{,}000 = 20{,}000\\ \\text{cm}^2$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students multiply by $12$ instead of $144$ when converting square feet to square inches. The factor is squared for area, cubed for volume. Square the conversion factor for area. Cube it for volume. $1\\ \\text{yd}^2 = 9\\ \\text{ft}^2$ (not $3$). $1\\ \\text{yd}^3 = 27\\ \\text{ft}^3$ (not $3$)."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write units on every number and cancel units left-to-right. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Squared & Cubic Units\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Dimensional Analysis question tied to \"Squared & Cubic Units\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: conversion factor upside-down). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (conversion factor upside-down), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A fish tank holds $2 \\text{ ft}^3$ of water. How many cubic inches is that?",
            "answer": "$1 \\text{ ft} = 12 \\text{ in}$, so $1 \\text{ ft}^3 = 12^3 = 1{,}728 \\text{ in}^3$. Therefore $2 \\times 1{,}728 = 3{,}456 \\text{ in}^3$."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "dimensional-analysis",
    "title": "Squared Units Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Squared-unit conversion squares the linear factor because area spans two length dimensions.",
        "blocks": [
          {
            "type": "heading",
            "content": "Squared Units Example"
          },
          {
            "type": "text",
            "content": "Squared Units Example (Squared & Cubic Units) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Squared Units Example (Squared & Cubic Units) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Write units on every number and cancel units left-to-right. Certain town has an area of 4.36 square miles. What is the area in square yards of this town knowing that 1 mile is equal to 1,760 yard? Okay, this is a very simple unit conversion or dimensional analysis question. The units that we are given are squ."
          },
          {
            "type": "formula",
            "label": "Squared Units Example — Core Rule",
            "content": "$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Squared Units Example (Squared & Cubic Units) problems is unit cancellation skipped. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write units on every number and cancel units left-to-right. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Squared Units Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Convert $5 \\text{ ft}^2$ to square inches.",
            "steps": [
              {
                "label": "Linear factor",
                "content": "$1$ ft $= 12$ in"
              },
              {
                "label": "Square",
                "content": "$12^2 = 144$"
              },
              {
                "label": "Multiply",
                "content": "$5 \\times 144 = 720$"
              },
              {
                "label": "Answer",
                "content": "$720 \\text{ in}^2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $5 \\text{ ft}^2$ to square inches.",
            "answer": "$720 \\text{ in}^2$"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "dimensional-analysis",
    "title": "Multi-Step Squared Units",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When no single factor connects two squared (or cubed) units, chain multiple linear conversions and raise each to the power of the unit dimension.",
        "blocks": [
          {
            "type": "heading",
            "content": "Multi-Step Squared Units"
          },
          {
            "type": "text",
            "content": "Multi-Step Squared Units (Squared & Cubic Units) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Multi-Step Squared Units (Squared & Cubic Units) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Write units on every number and cancel units left-to-right. The speed of a vehicle is increasing at a rate of 7.3 m/s squared. What is this rate in miles per minute squared round to the nearest 10th? Use 1 mile is equal to 1,609 m. Okay, this is a little bit of advanced dimensional analysis or unit conversion."
          },
          {
            "type": "formula",
            "label": "Multi-Step Squared Units — Core Rule",
            "content": "$$\\text{value}\\times\\frac{\\text{target unit}}{\\text{current unit}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Multi-Step Squared Units (Squared & Cubic Units) problems is multi-step ratio chaining errors. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write units on every number and cancel units left-to-right. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Multi-Step Squared Units\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Convert $1{,}296 \\text{ in}^2$ to square yards.",
            "steps": [
              {
                "label": "Linear chain",
                "content": "$1$ yd $= 3$ ft $= 36$ in"
              },
              {
                "label": "Square combined factor",
                "content": "$1 \\text{ yd}^2 = 36^2 = 1{,}296 \\text{ in}^2$"
              },
              {
                "label": "Divide",
                "content": "$\\frac{1{,}296}{1{,}296} = 1$"
              },
              {
                "label": "Answer",
                "content": "$1 \\text{ yd}^2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $1{,}296 \\text{ in}^2$ to square yards.",
            "answer": "$1 \\text{ yd}^2$"
          }
        ]
      }
    }
  }
};
