export const trianglesLessonTabs = {
  "1": {
    "moduleId": "triangles",
    "title": "What is a Triangle?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A triangle is a three-sided polygon whose interior angles always sum to $180°$.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is a Triangle?"
          },
          {
            "type": "text",
            "content": "A triangle has three sides, three angles, and those angles always add to $180°$. This single fact — the angle sum property — is the foundation of nearly every triangle question on the SAT."
          },
          {
            "type": "text",
            "content": "On the SAT, the angle-sum property is tested directly (\"find the third angle\") and indirectly (in multi-step problems). If two angles are given, the third is $180° - (\\text{angle}_1 + \\text{angle}_2)$. In isosceles triangles, two equal sides mean two equal base angles. For example, in triangle $ABC$ with $\\angle B = 52°$ and $\\angle C = 17°$, the third angle is $\\angle A = 180° - (52° + 17°) = 111°$."
          },
          {
            "type": "formula",
            "label": "What is a Triangle? — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle with angles $40°$, $65°$, and $x$: $x = 180 - 40 - 65 = 75°$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the equation correctly but forget that an exterior angle equals the sum of the two non-adjacent interior angles — not $180°$ minus one angle. Interior angles: sum to $180°$. Exterior angle at any vertex = sum of the two remote interior angles. Write the correct formula first."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is a Triangle?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In $\\triangle ABC$, $\\angle A = 50°$ and the exterior angle at $C$ is $130°$. Find $\\angle B$.",
            "steps": [
              {
                "label": "Interior at C",
                "content": "$\\angle C = 180° - 130° = 50°$"
              },
              {
                "label": "Angle sum",
                "content": "$\\angle B = 180° - 50° - 50° = 80°$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In an isosceles triangle, the two equal angles each measure $55°$. What is the vertex angle?",
            "answer": "$180° - 55° - 55° = 70°$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "triangles",
    "title": "Types of Triangles by Angles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Triangles are also classified by their largest angle — acute, right, or obtuse.",
        "blocks": [
          {
            "type": "heading",
            "content": "Types of Triangles by Angles"
          },
          {
            "type": "text",
            "content": "Types of Triangles by Angles (Triangle Fundamentals) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Types of Triangles by Angles (Triangle Fundamentals) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, in triangle $ABC$ with $\\angle B = 52°$ and $\\angle C = 17°$, the third angle is $180° - 69° = 111°$ — obtuse, so this is an obtuse triangle."
          },
          {
            "type": "formula",
            "label": "Types of Triangles by Angles — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Types of Triangles by Angles (Triangle Fundamentals) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Types of Triangles by Angles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Triangles question tied to \"Types of Triangles by Angles\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: similarity proportion mismatch). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (similarity proportion mismatch), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A triangle has sides $7$, $8$, and $10$. Is it acute, right, or obtuse?",
            "answer": "$c = 10$: $7^2 + 8^2 = 49 + 64 = 113$. $10^2 = 100$. Since $113 > 100$, the triangle is **acute**."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "triangles",
    "title": "Triangle Inequality Theorem",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Not every set of three lengths can form a triangle — the two shorter sides must sum to more than the longest.",
        "blocks": [
          {
            "type": "heading",
            "content": "Triangle Inequality Theorem"
          },
          {
            "type": "text",
            "content": "Triangle Inequality Theorem (Triangle Fundamentals) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Triangle Inequality Theorem (Triangle Fundamentals) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, sides of length $4$, $7$, and $x$ form a triangle only when $7 - 4 < x < 7 + 4$, i.e. $3 < x < 11$."
          },
          {
            "type": "formula",
            "label": "Triangle Inequality Theorem — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Triangle Inequality Theorem (Triangle Fundamentals) problems is special triangle ratio misuse. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Triangle Inequality Theorem\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Triangles question tied to \"Triangle Inequality Theorem\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: special triangle ratio misuse). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (special triangle ratio misuse), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Two sides of a triangle are $6$ and $10$. How many integer lengths are possible for the third side?",
            "answer": "$|10 - 6| < c < 10 + 6$ gives $4 < c < 16$. Integer values: $5, 6, 7, \\ldots, 15$ — that is $15 - 5 + 1 = 11$ values."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "triangles",
    "title": "Simple Angles of a Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Finding a missing angle uses one rule: the three interior angles sum to $180°$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Angles of a Triangle Example"
          },
          {
            "type": "text",
            "content": "Simple Angles of a Triangle Example (Angles of a Triangle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Angles of a Triangle Example (Angles of a Triangle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, if $\\angle B = 52°$ and $\\angle C = 17°$, then $\\angle A = 180° - 69° = 111°$."
          },
          {
            "type": "formula",
            "label": "Simple Angles of a Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Angles of a Triangle Example (Angles of a Triangle) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Angles of a Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In $\\triangle PQR$, $\\angle P = 45°$ and an exterior angle at $R$ measures $115°$. What is $\\angle Q$?",
            "steps": [
              {
                "label": "Find interior angle at R",
                "content": "The interior angle at $R$ is supplementary to the exterior angle: $\\angle R = 180° - 115° = 65°$."
              },
              {
                "label": "Apply angle sum property",
                "content": "$\\angle P + \\angle Q + \\angle R = 180°$, so $45° + \\angle Q + 65° = 180°$."
              },
              {
                "label": "Solve for angle Q",
                "content": "$\\angle Q = 180° - 45° - 65° = 70°$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A triangle has angles $3x°$, $5x°$, and $60°$. Find $x$.",
            "answer": "$3x + 5x + 60 = 180$ → $8x = 120$ → $x = 15$."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "triangles",
    "title": "Complex Angles of a Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Harder angle problems combine the $180°$ sum with exterior angles, algebraic expressions, or multi-triangle diagrams.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Angles of a Triangle Example"
          },
          {
            "type": "text",
            "content": "Complex Angles of a Triangle Example (Angles of a Triangle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Angles of a Triangle Example (Angles of a Triangle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, if $\\angle R = 63°$, then $\\angle S$ must satisfy $\\angle S < 180° - 63° = 117°$, so any measure below $117°$ that leaves a positive third angle is possible."
          },
          {
            "type": "formula",
            "label": "Complex Angles of a Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Angles of a Triangle Example (Angles of a Triangle) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Angles of a Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In $\\triangle ABC$, $\\angle A = (2x + 5)°$, $\\angle B = (3x - 10)°$, and the exterior angle at $C$ is $(4x + 15)°$. Find $\\angle A$.",
            "steps": [
              {
                "label": "Use the Exterior Angle Theorem",
                "content": "The exterior angle at $C$ equals the sum of the two remote interior angles: $(4x + 15) = (2x + 5) + (3x - 10)$."
              },
              {
                "label": "Solve for x",
                "content": "$4x + 15 = 5x - 5$ gives $x = 20$."
              },
              {
                "label": "Substitute back",
                "content": "$\\angle A = 2(20) + 5 = 45°$."
              },
              {
                "label": "Verify",
                "content": "$\\angle B = 3(20) - 10 = 50°$. Exterior at $C = 4(20) + 15 = 95°$. Check: $45° + 50° = 95°$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In $\\triangle DEF$, $\\angle D = (4x)°$, $\\angle E = (x + 30)°$, and $\\angle F = (2x + 10)°$. Find $\\angle D$.",
            "answer": "$4x + (x + 30) + (2x + 10) = 180$ → $7x + 40 = 180$ → $x = 20$. So $\\angle D = 4(20) = 80°$."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "triangles",
    "title": "Area of a Triangle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The area of a triangle is half the product of its base and perpendicular height.",
        "blocks": [
          {
            "type": "heading",
            "content": "Area of a Triangle"
          },
          {
            "type": "text",
            "content": "Area of a Triangle (Area of a Triangle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Area of a Triangle (Area of a Triangle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Height must be perpendicular to the chosen base. For example, in a right triangle the two legs serve as base and height, so the area is $\\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$."
          },
          {
            "type": "diagramRef",
            "visualType": "triangleAreaDiagram",
            "description": "Triangle with base and perpendicular height labeled."
          },
          {
            "type": "formula",
            "label": "Area of a Triangle — Core Rule",
            "content": "$$A=\\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Area of a Triangle (Area of a Triangle) problems is using a slant side as the height instead of the perpendicular height. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Height must be perpendicular to the chosen base. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Area of a Triangle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A triangle has a base of $12$ cm and an area of $42$ cm$^2$. What is the height?",
            "steps": [
              {
                "label": "Set up",
                "content": "$42 = \\frac{1}{2}(12)(h)$"
              },
              {
                "label": "Simplify",
                "content": "$42 = 6h$"
              },
              {
                "label": "Solve",
                "content": "$h = 7$ cm"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has legs of length $9$ and $12$. What is its area?",
            "answer": "$A = \\frac{1}{2}(9)(12) = 54$ square units."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "triangles",
    "title": "Simple Area of a Right Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "In a right triangle, the legs are perpendicular — plug them directly into the area formula.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Area of a Right Triangle Example"
          },
          {
            "type": "text",
            "content": "Simple Area of a Right Triangle Example (Area of a Triangle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Area of a Right Triangle Example (Area of a Triangle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, a right triangle with legs $6$ in and $8$ in has area $\\frac{1}{2} \\times 6 \\times 8 = 24$ square inches."
          },
          {
            "type": "diagramRef",
            "visualType": "triangleAreaDiagram",
            "description": "Triangle with base and height labeled: Area = ½ × base × height."
          },
          {
            "type": "formula",
            "label": "Simple Area of a Right Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Area of a Right Triangle Example (Area of a Triangle) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Area of a Right Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A right triangle has legs of length $6$ and $8$. What is the area of the triangle?",
            "steps": [
              {
                "label": "Identify base and height",
                "content": "In a right triangle, the two legs are perpendicular, so they serve as base and height directly."
              },
              {
                "label": "Apply the area formula",
                "content": "$A = \\frac{1}{2}(\\text{leg}_1)(\\text{leg}_2) = \\frac{1}{2}(6)(8)$."
              },
              {
                "label": "Compute",
                "content": "$A = \\frac{1}{2}(48) = 24$ square units."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has a leg of $8$ and a hypotenuse of $10$. What is the area?",
            "answer": "Find the other leg: $b = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$. Area $= \\frac{1}{2}(8)(6) = 24$ square units."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "triangles",
    "title": "Complex Area of a Right Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex area problems require finding a missing leg via the Pythagorean theorem before computing the area.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Area of a Right Triangle Example"
          },
          {
            "type": "text",
            "content": "Complex Area of a Right Triangle Example (Area of a Triangle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Area of a Right Triangle Example (Area of a Triangle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, a right triangle with legs $2\\sqrt{2}$ and $6\\sqrt{2}$ and hypotenuse $\\sqrt{80}$ has area $\\frac{1}{2}(2\\sqrt{2})(6\\sqrt{2}) = \\frac{1}{2}(12 \\times 2) = 12$ square units."
          },
          {
            "type": "diagramRef",
            "visualType": "triangleAreaDiagram",
            "description": "Triangle with base and height labeled: Area = ½ × base × height."
          },
          {
            "type": "formula",
            "label": "Complex Area of a Right Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Area of a Right Triangle Example (Area of a Triangle) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Area of a Right Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A right triangle has a hypotenuse of $15$ and one leg of $9$. What is the area of the triangle?",
            "steps": [
              {
                "label": "Find the missing leg",
                "content": "$b = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$."
              },
              {
                "label": "Identify base and height",
                "content": "The two legs are $9$ and $12$. These are perpendicular, so use them as base and height."
              },
              {
                "label": "Compute the area",
                "content": "$A = \\frac{1}{2}(9)(12) = 54$ square units."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has a hypotenuse of $17$ and one leg of $8$. Find the area.",
            "answer": "Missing leg $= \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. Area $= \\frac{1}{2}(8)(15) = 60$ square units. (Uses the $8$-$15$-$17$ triple.)"
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "triangles",
    "title": "What Are Similar Triangles?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Similar triangles have the same shape but different sizes — their angles match and their sides are proportional.",
        "blocks": [
          {
            "type": "heading",
            "content": "What Are Similar Triangles?"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. For example, if right triangles $LMN$ and $PQR$ are similar with $M$ corresponding to $Q$, then $\\angle Q = \\angle M = 53°$, since corresponding angles of similar triangles are equal."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "What Are Similar Triangles? — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What Are Similar Triangles?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$\\triangle ABC \\sim \\triangle DEF$. If $AB = 6$, $DE = 9$, and $BC = 8$, find $EF$.",
            "steps": [
              {
                "label": "Scale factor",
                "content": "$k = \\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$"
              },
              {
                "label": "Proportion",
                "content": "$EF = BC \\times k = 8 \\times \\frac{3}{2} = 12$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Two similar triangles have corresponding sides of $4$ and $10$. If the smaller triangle has area $24$, what is the area of the larger?",
            "answer": "Scale factor $= \\frac{10}{4} = \\frac{5}{2}$. Area ratio $= \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$. Area $= 24 \\times \\frac{25}{4} = 150$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "triangles",
    "title": "How to Identify Similar Triangles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Three quick tests can prove similarity — AA is by far the most common on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "How to Identify Similar Triangles"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. For example, two triangles are similar by AA when two pairs of angles match; their corresponding angles are then equal, so if $M$ corresponds to $Q$ and $\\angle M = 53°$, then $\\angle Q = 53°$."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "How to Identify Similar Triangles — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"How to Identify Similar Triangles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Triangles question tied to \"How to Identify Similar Triangles\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: area/perimeter confusion). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (area/perimeter confusion), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$\\overline{DE} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AD = 4$, $DB = 6$, and $BC = 15$. Find $DE$.",
            "answer": "$AB = 4 + 6 = 10$. $\\frac{AD}{AB} = \\frac{DE}{BC}$ → $\\frac{4}{10} = \\frac{DE}{15}$ → $DE = 6$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "triangles",
    "title": "Simple Similar Triangles Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When similarity is confirmed, set up a proportion between corresponding sides to find the unknown.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Similar Triangles Example #1"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. As above, corresponding angles are equal: if $M$ corresponds to $Q$ and $\\angle M = 53°$, then $\\angle Q = 53°$."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "Simple Similar Triangles Example #1 — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Similar Triangles Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$\\triangle ABC \\sim \\triangle DEF$. If $AB = 3$, $DE = 5$, and $BC = 9$, find $EF$.",
            "steps": [
              {
                "label": "Find the scale factor",
                "content": "$k = \\frac{DE}{AB} = \\frac{5}{3}$."
              },
              {
                "label": "Set up the proportion",
                "content": "$\\frac{AB}{DE} = \\frac{BC}{EF}$ gives $\\frac{3}{5} = \\frac{9}{EF}$."
              },
              {
                "label": "Cross-multiply and solve",
                "content": "$3 \\cdot EF = 5 \\cdot 9 = 45$, so $EF = 15$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$\\triangle PQR \\sim \\triangle XYZ$. $PQ = 4$, $XY = 10$, and $QR = 6$. Find $YZ$.",
            "answer": "Scale factor $= \\frac{10}{4} = \\frac{5}{2}$. $YZ = 6 \\times \\frac{5}{2} = 15$."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "triangles",
    "title": "Simple Similar Triangles Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A line parallel to one side of a triangle creates a smaller similar triangle inside — the most common SAT setup.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Similar Triangles Example #2"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. For example, if $PQR \\sim STU$ with $P$ corresponding to $S$, then $\\angle S = \\angle P$; use the triangle's known angles (including any right angle) and the $180°$ sum to find it."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "Simple Similar Triangles Example #2 — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Similar Triangles Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. If $AD = 4$, $DB = 8$, and $BC = 18$, find $DE$.",
            "steps": [
              {
                "label": "Compute the full side",
                "content": "$AB = AD + DB = 4 + 8 = 12$."
              },
              {
                "label": "Set up the proportion",
                "content": "By AA similarity, $\\frac{AD}{AB} = \\frac{DE}{BC}$, so $\\frac{4}{12} = \\frac{DE}{18}$."
              },
              {
                "label": "Cross-multiply and solve",
                "content": "$12 \\cdot DE = 4 \\cdot 18 = 72$, so $DE = 6$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$\\overline{MN} \\parallel \\overline{BC}$ in $\\triangle ABC$. $AM = 5$, $MB = 10$, $BC = 21$. Find $MN$.",
            "answer": "$AB = 5 + 10 = 15$. $\\frac{AM}{AB} = \\frac{MN}{BC}$ → $\\frac{5}{15} = \\frac{MN}{21}$ → $MN = 7$."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "triangles",
    "title": "Simple Similar Triangles Example #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Shadow and height problems use similar triangles formed by parallel sun rays hitting objects of different heights.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Similar Triangles Example #3"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. For example, if $XYZ \\sim RST$ with $Z$ corresponding to $T$ and $\\angle Z = 20°$, then $\\angle T = 20°$ — the side relationship $2XY = RS$ does not change corresponding angles."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "Simple Similar Triangles Example #3 — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Similar Triangles Example #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A $6$-ft person casts a $4$-ft shadow at the same time a flagpole casts a $20$-ft shadow. How tall is the flagpole?",
            "steps": [
              {
                "label": "Recognize similar triangles",
                "content": "Parallel sun rays create right triangles with equal angles, so the triangles are similar by AA."
              },
              {
                "label": "Set up the proportion",
                "content": "$\\frac{\\text{height}_{\\text{person}}}{\\text{shadow}_{\\text{person}}} = \\frac{\\text{height}_{\\text{pole}}}{\\text{shadow}_{\\text{pole}}}$, giving $\\frac{6}{4} = \\frac{h}{20}$."
              },
              {
                "label": "Cross-multiply and solve",
                "content": "$4h = 6 \\times 20 = 120$, so $h = 30$ ft."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A $5$-ft pole casts a $3$-ft shadow. At the same time, a building casts a $24$-ft shadow. How tall is the building?",
            "answer": "$\\frac{5}{3} = \\frac{h}{24}$ → $h = \\frac{5 \\times 24}{3} = 40$ ft."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "triangles",
    "title": "Simple Similar Triangles Example #4",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Overlapping triangles that share a common angle often produce AA similarity.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Similar Triangles Example #4"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. For example, if triangles $EFG$ and $JKL$ are congruent with $E$ corresponding to $J$, then $\\angle J = \\angle E = 45°$."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "Simple Similar Triangles Example #4 — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Similar Triangles Example #4\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$\\triangle ADE$ shares vertex $A$ with $\\triangle ABC$, and $\\triangle ADE \\sim \\triangle ABC$. If $AD = 6$, $DB = 4$, and $DE = 9$, find $BC$.",
            "steps": [
              {
                "label": "Find the full side",
                "content": "$AB = AD + DB = 6 + 4 = 10$."
              },
              {
                "label": "Set up the proportion",
                "content": "$\\frac{AD}{AB} = \\frac{DE}{BC}$, so $\\frac{6}{10} = \\frac{9}{BC}$."
              },
              {
                "label": "Cross-multiply and solve",
                "content": "$6 \\cdot BC = 10 \\cdot 9 = 90$, so $BC = 15$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$\\triangle ADE \\sim \\triangle ABC$ with $AD = 5$, $AB = 15$, and $DE = 7$. Find $BC$.",
            "answer": "$\\frac{AD}{AB} = \\frac{DE}{BC}$ → $\\frac{5}{15} = \\frac{7}{BC}$ → $BC = 21$."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "triangles",
    "title": "Complex Similar Triangles Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex similarity problems combine the scale factor with area or perimeter in multi-step reasoning.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Similar Triangles Example"
          },
          {
            "type": "text",
            "content": "Similar triangles have the same shape but different sizes. All corresponding angles are equal, and all corresponding sides are in the same ratio (the scale factor)."
          },
          {
            "type": "text",
            "content": "On the SAT, similarity is established by AA (two pairs of equal angles), SAS, or SSS ratio. Once similar, set up a proportion: $\\frac{\\text{side}_1}{\\text{corresponding side}_2} = \\frac{\\text{side}_1}{\\text{corresponding side}_2}$. Cross-multiply and solve. In right triangle ABC, angle C is a right angle and BC equals 162. Point D is on side AB is connected by a line segment with point E on side AC such that line segment DE is parallel to side BC and CE equals 2 AE. What is the length of line segment DE."
          },
          {
            "type": "diagramRef",
            "visualType": "similarTrianglesDiagram",
            "description": "Two similar triangles with matching angles and proportional sides."
          },
          {
            "type": "formula",
            "label": "Complex Similar Triangles Example — Core Rule",
            "content": "$$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Triangle $ABC \\sim DEF$ with $AB = 6$, $DE = 9$, $BC = 8$. Scale factor $= 9/6 = 3/2$. So $EF = 8 \\times 3/2 = 12$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students set up the proportion with non-corresponding sides — matching a leg to a hypotenuse or the wrong order of vertices. Label the triangles with matching vertices. Then each ratio uses sides from the SAME position in each triangle. Check: ratios should all simplify to the same scale factor."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Match vertices first, then set up proportions with corresponding sides. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Similar Triangles Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$\\triangle PQR \\sim \\triangle XYZ$ with $PQ = 4$ and $XY = 6$. The area of $\\triangle PQR$ is $20$. What is the area of $\\triangle XYZ$?",
            "steps": [
              {
                "label": "Find the side scale factor",
                "content": "$k = \\frac{XY}{PQ} = \\frac{6}{4} = \\frac{3}{2}$."
              },
              {
                "label": "Square for the area ratio",
                "content": "Area ratio $= k^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$."
              },
              {
                "label": "Compute the area",
                "content": "Area of $\\triangle XYZ = 20 \\times \\frac{9}{4} = 45$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$ and $DE = 10$. If the area of $\\triangle ABC = 27$, find the area of $\\triangle DEF$.",
            "answer": "$k = \\frac{10}{6} = \\frac{5}{3}$. Area ratio $= \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$. Area $= 27 \\times \\frac{25}{9} = 75$."
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "triangles",
    "title": "Right Triangles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A right triangle has one $90°$ angle, making it the most formula-rich triangle on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "Right Triangles"
          },
          {
            "type": "text",
            "content": "Right Triangles (Right Triangles & Pythagorean Theorem) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Right Triangles (Right Triangles & Pythagorean Theorem) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, for a right triangle with legs $A = 4$ and $B = 5$, the hypotenuse is $C = \\sqrt{A^2 + B^2} = \\sqrt{4^2 + 5^2} = \\sqrt{41}$."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c illustrating a² + b² = c²."
          },
          {
            "type": "formula",
            "label": "Right Triangles — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Right Triangles (Right Triangles & Pythagorean Theorem) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Right Triangles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Triangles question tied to \"Right Triangles\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: area/perimeter confusion). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (area/perimeter confusion), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In a right triangle, one acute angle is $28°$. What is the other acute angle?",
            "answer": "The two acute angles sum to $90°$: $90° - 28° = 62°$."
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "triangles",
    "title": "The Pythagorean Theorem",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "In any right triangle, the square of the hypotenuse equals the sum of the squares of the two legs.",
        "blocks": [
          {
            "type": "heading",
            "content": "The Pythagorean Theorem"
          },
          {
            "type": "text",
            "content": "The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle."
          },
          {
            "type": "text",
            "content": "On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples. For example, with legs $4$ and $5$, the hypotenuse is $\\sqrt{4^2 + 5^2} = \\sqrt{41}$, since $a^2 + b^2 = c^2$."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c labeled."
          },
          {
            "type": "formula",
            "label": "The Pythagorean Theorem — Core Rule",
            "content": "$$a^2+b^2=c^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong. The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Hypotenuse is always opposite the 90° angle and alone on one side of the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"The Pythagorean Theorem\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A right triangle has legs $9$ and $12$. Find the hypotenuse.",
            "steps": [
              {
                "label": "Recognize",
                "content": "$9$-$12$-$?$ is the $3$-$4$-$5$ triple $\\times 3$, so the hypotenuse is $15$."
              },
              {
                "label": "Verify",
                "content": "$9^2 + 12^2 = 81 + 144 = 225 = 15^2$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has legs $(x)$ and $(x + 7)$ and hypotenuse $(x + 8)$. Find $x$.",
            "answer": "$x^2 + (x + 7)^2 = (x + 8)^2$ → $x^2 + x^2 + 14x + 49 = x^2 + 16x + 64$ → $x^2 - 2x - 15 = 0$ → $(x - 5)(x + 3) = 0$. Since $x > 0$, $x = 5$. (Legs $5$ and $12$, hypotenuse $13$.)"
          }
        ]
      }
    }
  },
  "18": {
    "moduleId": "triangles",
    "title": "Simple Pythagorean Theorem Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The most direct Pythagorean problems give two sides and ask for the third.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Pythagorean Theorem Example #1"
          },
          {
            "type": "text",
            "content": "The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle."
          },
          {
            "type": "text",
            "content": "On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples. As above, apply $a^2 + b^2 = c^2$: legs $4$ and $5$ give hypotenuse $\\sqrt{4^2 + 5^2} = \\sqrt{41}$."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c labeled."
          },
          {
            "type": "formula",
            "label": "Simple Pythagorean Theorem Example #1 — Core Rule",
            "content": "$$a^2+b^2=c^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong. The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Hypotenuse is always opposite the 90° angle and alone on one side of the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Pythagorean Theorem Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A right triangle has a hypotenuse of $10$ and one leg of $6$. Find the other leg.",
            "steps": [
              {
                "label": "Write the Pythagorean equation",
                "content": "$a^2 + 6^2 = 10^2$."
              },
              {
                "label": "Isolate the unknown",
                "content": "$a^2 = 100 - 36 = 64$."
              },
              {
                "label": "Solve",
                "content": "$a = \\sqrt{64} = 8$. (This is the $6$-$8$-$10$ triple, a multiple of $3$-$4$-$5$.)"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has a hypotenuse of $25$ and one leg of $7$. Find the other leg.",
            "answer": "$b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. (The $7$-$24$-$25$ triple.)"
          }
        ]
      }
    }
  },
  "19": {
    "moduleId": "triangles",
    "title": "Simple Pythagorean Theorem Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The distance formula on the coordinate plane is the Pythagorean theorem in disguise.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Pythagorean Theorem Example #2"
          },
          {
            "type": "text",
            "content": "The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle."
          },
          {
            "type": "text",
            "content": "On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples. For example, in right triangle $ABC$ with the right angle at $B$, $AB = 10\\sqrt{37}$ and $BC = 24\\sqrt{37}$, so $AC = \\sqrt{(10\\sqrt{37})^2 + (24\\sqrt{37})^2} = \\sqrt{676 \\times 37} = 26\\sqrt{37}$."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c labeled."
          },
          {
            "type": "formula",
            "label": "Simple Pythagorean Theorem Example #2 — Core Rule",
            "content": "$$a^2+b^2=c^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong. The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Hypotenuse is always opposite the 90° angle and alone on one side of the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Pythagorean Theorem Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What is the distance between the points $(1, 2)$ and $(4, 6)$?",
            "steps": [
              {
                "label": "Find the horizontal and vertical distances",
                "content": "$\\Delta x = 4 - 1 = 3$ and $\\Delta y = 6 - 2 = 4$."
              },
              {
                "label": "Apply the distance formula",
                "content": "$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16}$."
              },
              {
                "label": "Simplify",
                "content": "$d = \\sqrt{25} = 5$. (Recognize the $3$-$4$-$5$ triple.)"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the distance between $(2, 1)$ and $(7, 13)$.",
            "answer": "$\\Delta x = 5$, $\\Delta y = 12$. Recognize $5$-$12$-$13$ triple: $d = 13$."
          }
        ]
      }
    }
  },
  "20": {
    "moduleId": "triangles",
    "title": "Simple Pythagorean Theorem Example #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Word problems involving ladders, ramps, or diagonals all reduce to right triangles.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Pythagorean Theorem Example #3"
          },
          {
            "type": "text",
            "content": "The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle."
          },
          {
            "type": "text",
            "content": "On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples. For example, if one leg is $43.2$ mm and the hypotenuse is $196.8$ mm, the other leg is $\\sqrt{196.8^2 - 43.2^2} = \\sqrt{36864} = 192$ mm."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c labeled."
          },
          {
            "type": "formula",
            "label": "Simple Pythagorean Theorem Example #3 — Core Rule",
            "content": "$$a^2+b^2=c^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong. The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Hypotenuse is always opposite the 90° angle and alone on one side of the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Pythagorean Theorem Example #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A rectangular field is $30$ meters wide and $40$ meters long. A runner wants to cut diagonally across the field. How far does the runner travel?",
            "steps": [
              {
                "label": "Identify the right triangle",
                "content": "The diagonal of the rectangle is the hypotenuse, and the width and length are the legs."
              },
              {
                "label": "Apply the Pythagorean theorem",
                "content": "$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500}$."
              },
              {
                "label": "Simplify",
                "content": "$d = 50$ meters. (This is the $3$-$4$-$5$ triple scaled by $10$.)"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A ship sails $9$ km north, then $12$ km east. How far is it from its starting point?",
            "answer": "Legs $= 9$ and $12$, so distance $= 15$ km. ($3$-$4$-$5$ triple $\\times 3$.)"
          }
        ]
      }
    }
  },
  "21": {
    "moduleId": "triangles",
    "title": "Complex Pythagorean Theorem Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex problems require applying the Pythagorean theorem twice or combining it with area and algebra.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Pythagorean Theorem Example"
          },
          {
            "type": "text",
            "content": "The Pythagorean theorem $a^2 + b^2 = c^2$ applies ONLY to right triangles. $c$ is always the hypotenuse — the longest side, opposite the right angle."
          },
          {
            "type": "text",
            "content": "On the SAT, you use it to find a missing side when two sides are given. CB also tests Pythagorean triples — integer side lengths that satisfy the theorem without computation: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples. For example, legs $24$ cm and $21$ cm give hypotenuse $\\sqrt{24^2 + 21^2} = \\sqrt{1017} = 3\\sqrt{113}$, so $d = 113$."
          },
          {
            "type": "diagramRef",
            "visualType": "rightTriangleDiagram",
            "description": "A right triangle with legs a, b and hypotenuse c labeled."
          },
          {
            "type": "formula",
            "label": "Complex Pythagorean Theorem Example — Core Rule",
            "content": "$$a^2+b^2=c^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A right triangle has legs $6$ and $8$. Hypotenuse: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. (This is a $3$-$4$-$5$ triple $\\times 2$.)"
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students label the wrong side as the hypotenuse — especially in word problems where the triangle is described but not drawn. If the longest side is squared on the wrong side of the equation, the answer is wrong. The hypotenuse is ALWAYS the side opposite the $90°$ angle and ALWAYS the longest side. It goes alone on one side: $a^2 + b^2 = c^2$ where $c$ = hypotenuse."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Hypotenuse is always opposite the 90° angle and alone on one side of the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Pythagorean Theorem Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In $\\triangle ABC$, $AB = 10$, $AC = 17$, and $BC = 21$. An altitude from $A$ meets $\\overline{BC}$ at point $D$. Find $AD$.",
            "steps": [
              {
                "label": "Set up variables",
                "content": "Let $BD = x$, so $DC = 21 - x$, and let $AD = h$."
              },
              {
                "label": "Write two Pythagorean equations",
                "content": "From $\\triangle ABD$: $x^2 + h^2 = 10^2 = 100$. From $\\triangle ACD$: $(21 - x)^2 + h^2 = 17^2 = 289$."
              },
              {
                "label": "Subtract to eliminate h",
                "content": "$(21 - x)^2 - x^2 = 189$. Expanding: $441 - 42x + x^2 - x^2 = 189$, so $441 - 42x = 189$."
              },
              {
                "label": "Solve for x, then h",
                "content": "$42x = 252$, so $x = 6$. Then $h = \\sqrt{100 - 36} = \\sqrt{64} = 8$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In $\\triangle ABC$, $AB = 13$, $BC = 14$, $AC = 15$. An altitude from $A$ meets $\\overline{BC}$ at $D$. Find $AD$.",
            "answer": "Let $BD = x$, $DC = 14 - x$, $AD = h$. From $\\triangle ABD$: $x^2 + h^2 = 169$. From $\\triangle ACD$: $(14 - x)^2 + h^2 = 225$. Subtract: $196 - 28x = 56$ → $x = 5$. Then $h = \\sqrt{169 - 25} = 12$."
          }
        ]
      }
    }
  },
  "22": {
    "moduleId": "triangles",
    "title": "Introduction to Trigonometry (SOH CAH TOA)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Sine, cosine, and tangent relate an acute angle in a right triangle to ratios of its sides.",
        "blocks": [
          {
            "type": "heading",
            "content": "Introduction to Trigonometry (SOH CAH TOA)"
          },
          {
            "type": "text",
            "content": "Introduction to Trigonometry (SOH CAH TOA) (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Introduction to Trigonometry (SOH CAH TOA) (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, $\\sin$ of an angle is the opposite side over the hypotenuse (SOH): if the side opposite angle $A$ is $3$ and the hypotenuse is $5$, then $\\sin A = \\frac{3}{5}$."
          },
          {
            "type": "formula",
            "label": "Introduction to Trigonometry (SOH CAH TOA) — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Introduction to Trigonometry (SOH CAH TOA) (Trigonometric Ratios) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Introduction to Trigonometry (SOH CAH TOA)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Triangles question tied to \"Introduction to Trigonometry (SOH CAH TOA)\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: area/perimeter confusion). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (area/perimeter confusion), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In right $\\triangle PQR$ with the right angle at $Q$, $PQ = 5$ and $PR = 13$. Find $\\sin P$ and $\\cos P$.",
            "answer": "$QR = \\sqrt{13^2 - 5^2} = 12$. Relative to $P$: Opposite $= QR = 12$, Adjacent $= PQ = 5$, Hypotenuse $= PR = 13$. So $\\sin P = \\frac{12}{13}$ and $\\cos P = \\frac{5}{13}$."
          }
        ]
      }
    }
  },
  "23": {
    "moduleId": "triangles",
    "title": "Simple Trigonometric Ratios Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Computing a trig ratio from given side lengths requires correctly identifying opposite, adjacent, and hypotenuse.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Trigonometric Ratios Example #1"
          },
          {
            "type": "text",
            "content": "Simple Trigonometric Ratios Example #1 (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Trigonometric Ratios Example #1 (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, using SOH, $\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}}$: read the side opposite $A$ and the hypotenuse from the figure and form the ratio."
          },
          {
            "type": "formula",
            "label": "Simple Trigonometric Ratios Example #1 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Trigonometric Ratios Example #1 (Trigonometric Ratios) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Trigonometric Ratios Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In right $\\triangle ABC$ with the right angle at $C$, $AC = 8$, $BC = 15$, and $AB = 17$. Find $\\sin A$, $\\cos A$, and $\\tan A$.",
            "steps": [
              {
                "label": "Identify sides relative to angle A",
                "content": "Opposite to $A$ is $BC = 15$. Adjacent to $A$ is $AC = 8$. Hypotenuse is $AB = 17$."
              },
              {
                "label": "Compute sin A",
                "content": "$\\sin A = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{15}{17}$."
              },
              {
                "label": "Compute cos A",
                "content": "$\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{8}{17}$."
              },
              {
                "label": "Compute tan A",
                "content": "$\\tan A = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{15}{8}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In right $\\triangle ABC$ with right angle at $C$, $AC = 3$, $BC = 4$, $AB = 5$. Find $\\tan B$.",
            "answer": "Relative to $B$: Opposite $= AC = 3$, Adjacent $= BC = 4$. $\\tan B = \\frac{3}{4}$."
          }
        ]
      }
    }
  },
  "24": {
    "moduleId": "triangles",
    "title": "Simple Trigonometric Ratios Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When a trig value and one side are given, set up an equation and solve for the unknown side.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Trigonometric Ratios Example #2"
          },
          {
            "type": "text",
            "content": "Simple Trigonometric Ratios Example #2 (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Trigonometric Ratios Example #2 (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, using CAH, $\\cos x = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$: if the side adjacent to $x$ is $11$, divide it by the hypotenuse."
          },
          {
            "type": "formula",
            "label": "Simple Trigonometric Ratios Example #2 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Trigonometric Ratios Example #2 (Trigonometric Ratios) problems is special triangle ratio misuse. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Trigonometric Ratios Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In a right triangle, the hypotenuse is $26$ and one acute angle is $30°$. Find the length of the side adjacent to the $30°$ angle.",
            "steps": [
              {
                "label": "Choose the right ratio",
                "content": "We know the hypotenuse and want the adjacent side, so use cosine: $\\cos 30° = \\frac{\\text{Adj}}{\\text{Hyp}}$."
              },
              {
                "label": "Substitute known values",
                "content": "$\\cos 30° = \\frac{x}{26}$. From the reference sheet, $\\cos 30° = \\frac{\\sqrt{3}}{2}$."
              },
              {
                "label": "Solve for x",
                "content": "$x = 26 \\times \\frac{\\sqrt{3}}{2} = 13\\sqrt{3}$."
              },
              {
                "label": "Trap check",
                "content": "A common mistake is dividing instead of multiplying: writing $x = \\frac{\\cos 30°}{26}$. Since the unknown is in the numerator, you multiply the hypotenuse by the trig value."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A right triangle has a hypotenuse of $20$ and one angle of $35°$. Find the opposite side. ($\\sin 35° \\approx 0.574$)",
            "answer": "$\\sin 35° = \\frac{\\text{Opp}}{20}$ → $\\text{Opp} = 20 \\times 0.574 = 11.48$."
          }
        ]
      }
    }
  },
  "25": {
    "moduleId": "triangles",
    "title": "Simple Trigonometric Ratios Example #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The complementary identity $\\sin \\theta = \\cos(90° - \\theta)$ is one of the most directly tested trig facts on the SAT.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Trigonometric Ratios Example #3"
          },
          {
            "type": "text",
            "content": "Simple Trigonometric Ratios Example #3 (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Trigonometric Ratios Example #3 (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, in right triangle $JKL$ with the right angle at $J$, if $\\cos K = \\frac{24}{51}$, then $JK = 24$ and $KL = 51$ give $JL = \\sqrt{51^2 - 24^2} = 45$, so $\\cos L = \\frac{45}{51} = \\frac{15}{17}$."
          },
          {
            "type": "formula",
            "label": "Simple Trigonometric Ratios Example #3 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Trigonometric Ratios Example #3 (Trigonometric Ratios) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Trigonometric Ratios Example #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $\\sin(4x - 10)° = \\cos(2x + 4)°$, what is the value of $x$?",
            "steps": [
              {
                "label": "Recall the complementary identity",
                "content": "$\\sin \\theta = \\cos(90° - \\theta)$. So $\\sin A = \\cos B$ when $A + B = 90°$."
              },
              {
                "label": "Set up the equation",
                "content": "$(4x - 10) + (2x + 4) = 90$."
              },
              {
                "label": "Solve",
                "content": "$6x - 6 = 90$ gives $6x = 96$, so $x = 16$."
              },
              {
                "label": "Trap check",
                "content": "Do not set the two angle expressions equal ($4x - 10 = 2x + 4$). The identity requires the angles to be **complementary** (sum to $90°$), not equal."
              },
              {
                "label": "Verify",
                "content": "$\\sin(4(16) - 10)° = \\sin 54°$ and $\\cos(2(16) + 4)° = \\cos 36°$. Since $54° + 36° = 90°$, these are equal."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $\\sin(3x + 10)° = \\cos(2x - 5)°$, find $x$.",
            "answer": "$(3x + 10) + (2x - 5) = 90$ → $5x + 5 = 90$ → $x = 17$. Check: $61° + 29° = 90°$ ✓."
          }
        ]
      }
    }
  },
  "26": {
    "moduleId": "triangles",
    "title": "Simple Trigonometric Ratios Example #4",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When one trig ratio is given as a fraction, you can find any other ratio of the same angle by reconstructing the triangle.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Trigonometric Ratios Example #4"
          },
          {
            "type": "text",
            "content": "Simple Trigonometric Ratios Example #4 (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Trigonometric Ratios Example #4 (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, if $FGH \\sim JKL$ with $F$ corresponding to $J$, then $\\sin J = \\sin F = \\frac{308}{317}$, since similar triangles share corresponding angle measures."
          },
          {
            "type": "formula",
            "label": "Simple Trigonometric Ratios Example #4 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Trigonometric Ratios Example #4 (Trigonometric Ratios) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Trigonometric Ratios Example #4\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $\\sin B = \\frac{5}{13}$ and $B$ is an acute angle, what is $\\cos B$?",
            "steps": [
              {
                "label": "Identify known sides",
                "content": "$\\sin B = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{5}{13}$, so Opposite $= 5$ and Hypotenuse $= 13$."
              },
              {
                "label": "Recognize the Pythagorean triple",
                "content": "$5$ and $13$ suggest a $5$-$12$-$13$ triple. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$."
              },
              {
                "label": "Compute cos B",
                "content": "$\\cos B = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{12}{13}$."
              },
              {
                "label": "Trap check",
                "content": "Do not flip the fraction to get $\\cos B = \\frac{13}{5}$. Cosine is still a ratio with the hypotenuse in the denominator — it must be less than $1$ for an acute angle."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $\\cos B = \\frac{8}{17}$, find $\\sin B$ and $\\tan B$.",
            "answer": "Adjacent $= 8$, Hypotenuse $= 17$. Opposite $= \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$. $\\sin B = \\frac{15}{17}$, $\\tan B = \\frac{15}{8}$."
          }
        ]
      }
    }
  },
  "27": {
    "moduleId": "triangles",
    "title": "Simple Trigonometric Ratios Example #5",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Angle of elevation and depression problems form right triangles with horizontal ground and a line of sight.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Trigonometric Ratios Example #5"
          },
          {
            "type": "text",
            "content": "Simple Trigonometric Ratios Example #5 (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Trigonometric Ratios Example #5 (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, in right triangle $RST$ with $\\angle R + \\angle S = 90°$, the two acute angles are complementary, so $\\cos S = \\sin R = \\frac{\\sqrt{15}}{4}$."
          },
          {
            "type": "formula",
            "label": "Simple Trigonometric Ratios Example #5 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Trigonometric Ratios Example #5 (Trigonometric Ratios) problems is special triangle ratio misuse. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Trigonometric Ratios Example #5\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "From a point on the ground $60$ meters from the base of a building, the angle of elevation to the roof is $30°$. What is the height of the building?",
            "steps": [
              {
                "label": "Draw the right triangle",
                "content": "The horizontal distance ($60$ m) is the adjacent side, the building height ($h$) is the opposite side, and the angle of elevation ($30°$) is measured from the horizontal."
              },
              {
                "label": "Choose the ratio",
                "content": "We know adjacent and want opposite, so use tangent: $\\tan 30° = \\frac{h}{60}$."
              },
              {
                "label": "Solve",
                "content": "$h = 60 \\times \\tan 30° = 60 \\times \\frac{\\sqrt{3}}{3} = \\frac{60\\sqrt{3}}{3} = 20\\sqrt{3} \\approx 34.6$ meters."
              },
              {
                "label": "Trap check",
                "content": "The elevation angle is measured from the **horizontal**, not the vertical. If you mistakenly measured from the vertical, you would use $\\tan 60°$ and get $60\\sqrt{3} \\approx 103.9$ m — a building taller than the distance to it, which should signal an error."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "From $50$ m away from a building, the angle of elevation to the top is $60°$. Find the height. ($\\tan 60° = \\sqrt{3} \\approx 1.732$)",
            "answer": "$\\tan 60° = \\frac{h}{50}$ → $h = 50\\sqrt{3} \\approx 86.6$ m."
          }
        ]
      }
    }
  },
  "28": {
    "moduleId": "triangles",
    "title": "Complex Trigonometric Ratios Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex trig problems combine ratios with area formulas, the Pythagorean identity, or multi-shape diagrams.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Trigonometric Ratios Example"
          },
          {
            "type": "text",
            "content": "Complex Trigonometric Ratios Example (Trigonometric Ratios) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Trigonometric Ratios Example (Trigonometric Ratios) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, in right triangle $XYZ$ with the right angle at $Z$, $YZ = 24$, and $\\tan X = \\frac{12}{35} = \\frac{YZ}{XZ}$, we get $XZ = 70$ and hypotenuse $XY = \\sqrt{24^2 + 70^2} = 74$, so the perimeter is $24 + 70 + 74 = 168$ units."
          },
          {
            "type": "formula",
            "label": "Complex Trigonometric Ratios Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Trigonometric Ratios Example (Trigonometric Ratios) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Trigonometric Ratios Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "In a right triangle, $\\sin \\theta = \\frac{3}{5}$ where $\\theta$ is one of the acute angles. If the hypotenuse is $20$, what is the area of the triangle?",
            "steps": [
              {
                "label": "Find the opposite side",
                "content": "$\\sin \\theta = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{3}{5}$. With hypotenuse $= 20$: Opposite $= 20 \\times \\frac{3}{5} = 12$."
              },
              {
                "label": "Find the adjacent side",
                "content": "Using the Pythagorean identity: $\\cos \\theta = \\sqrt{1 - \\sin^2 \\theta} = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$. So Adjacent $= 20 \\times \\frac{4}{5} = 16$."
              },
              {
                "label": "Trap check",
                "content": "Do not write $\\sin \\theta + \\cos \\theta = 1$. The identity uses **squares**: $\\sin^2 \\theta + \\cos^2 \\theta = 1$. Also, the area formula uses the two legs, not the hypotenuse."
              },
              {
                "label": "Compute the area",
                "content": "$A = \\frac{1}{2} \\times 12 \\times 16 = 96$."
              },
              {
                "label": "Verify with triple",
                "content": "The sides are $12$, $16$, $20$ — the $3$-$4$-$5$ triple scaled by $4$. Check: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $\\sin \\theta = \\frac{3}{5}$, find $\\cos \\theta$ and $\\tan \\theta$ using identities.",
            "answer": "$\\cos \\theta = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$. $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta} = \\frac{3/5}{4/5} = \\frac{3}{4}$."
          }
        ]
      }
    }
  },
  "29": {
    "moduleId": "triangles",
    "title": "The 45-45-90 Triangle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A 45-45-90 triangle is an isosceles right triangle with a fixed side ratio.",
        "blocks": [
          {
            "type": "heading",
            "content": "The 45-45-90 Triangle"
          },
          {
            "type": "text",
            "content": "The 45-45-90 Triangle (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, The 45-45-90 Triangle (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, a $45$-$45$-$90$ triangle with hypotenuse $58$ has legs $\\frac{58}{\\sqrt{2}} = 29\\sqrt{2}$, so its perimeter is $58 + 2(29\\sqrt{2}) = 58 + 58\\sqrt{2}$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "The 45-45-90 Triangle — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in The 45-45-90 Triangle (Special Right Triangles) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"The 45-45-90 Triangle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A right isosceles triangle has a hypotenuse of $8$. What is the length of each leg?",
            "steps": [
              {
                "label": "Identify the triangle type",
                "content": "A right isosceles triangle is a 45-45-90 triangle, with sides in the ratio $x : x : x\\sqrt{2}$."
              },
              {
                "label": "Set up the equation",
                "content": "Hypotenuse $= x\\sqrt{2} = 8$, so $x = \\frac{8}{\\sqrt{2}}$."
              },
              {
                "label": "Simplify",
                "content": "$x = \\frac{8}{\\sqrt{2}} \\times \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$."
              },
              {
                "label": "Trap check",
                "content": "Do not multiply the hypotenuse by $\\sqrt{2}$ — that gives $8\\sqrt{2} \\approx 11.3$, which is larger than the hypotenuse. Going from hypotenuse to leg, you **divide** by $\\sqrt{2}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A 45-45-90 triangle has a hypotenuse of $6\\sqrt{2}$. Find the leg length.",
            "answer": "Leg $= \\frac{6\\sqrt{2}}{\\sqrt{2}} = 6$."
          }
        ]
      }
    }
  },
  "30": {
    "moduleId": "triangles",
    "title": "Simple 45-45-90 Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Apply the $1:1:\\sqrt{2}$ ratio directly when one measurement of a 45-45-90 triangle is given.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple 45-45-90 Triangle Example"
          },
          {
            "type": "text",
            "content": "Simple 45-45-90 Triangle Example (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple 45-45-90 Triangle Example (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. As above, a $45$-$45$-$90$ triangle with hypotenuse $58$ has legs $29\\sqrt{2}$ each, giving perimeter $58 + 58\\sqrt{2}$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "Simple 45-45-90 Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple 45-45-90 Triangle Example (Special Right Triangles) problems is special triangle ratio misuse. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple 45-45-90 Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A square has a diagonal of length $12$. What is the perimeter of the square?",
            "steps": [
              {
                "label": "Connect to a 45-45-90 triangle",
                "content": "A square's diagonal divides it into two 45-45-90 triangles. The diagonal is the hypotenuse and each side of the square is a leg."
              },
              {
                "label": "Apply the ratio",
                "content": "In a 45-45-90 triangle: hypotenuse $= x\\sqrt{2}$. So $x\\sqrt{2} = 12$, giving $x = \\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$."
              },
              {
                "label": "Trap check",
                "content": "A common error is saying both legs equal the hypotenuse because the triangle is isosceles. Isosceles means the two **legs** are equal to each other, not equal to the hypotenuse."
              },
              {
                "label": "Find the perimeter",
                "content": "$P = 4 \\times 6\\sqrt{2} = 24\\sqrt{2}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A square has a diagonal of $14\\sqrt{2}$. What is the side length?",
            "answer": "The diagonal is the hypotenuse of a 45-45-90 triangle. Side $= \\frac{14\\sqrt{2}}{\\sqrt{2}} = 14$."
          }
        ]
      }
    }
  },
  "31": {
    "moduleId": "triangles",
    "title": "Complex 45-45-90 Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex 45-45-90 problems combine the ratio with area, perimeter, or multi-shape geometry.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex 45-45-90 Triangle Example"
          },
          {
            "type": "text",
            "content": "Complex 45-45-90 Triangle Example (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex 45-45-90 Triangle Example (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, if a $45$-$45$-$90$ triangle has perimeter $94 + 94\\sqrt{2}$, then with leg $L$ the perimeter is $L(2 + \\sqrt{2}) = 94(1 + \\sqrt{2})$, giving $L = 47\\sqrt{2}$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "Complex 45-45-90 Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex 45-45-90 Triangle Example (Special Right Triangles) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex 45-45-90 Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A 45-45-90 triangle has an area of $50$. What is the length of the hypotenuse?",
            "steps": [
              {
                "label": "Set up the area equation",
                "content": "Both legs of a 45-45-90 triangle equal $x$, so $A = \\frac{1}{2}x \\cdot x = \\frac{1}{2}x^2$."
              },
              {
                "label": "Solve for the leg",
                "content": "$\\frac{1}{2}x^2 = 50$, so $x^2 = 100$ and $x = 10$."
              },
              {
                "label": "Trap check",
                "content": "Do not stop at $x^2 = 100$ and report the leg as $100$. You must take the square root: $x = \\sqrt{100} = 10$."
              },
              {
                "label": "Find the hypotenuse",
                "content": "Hypotenuse $= x\\sqrt{2} = 10\\sqrt{2}$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A 45-45-90 triangle has an area of $50$. Find the hypotenuse.",
            "answer": "$\\frac{1}{2}x^2 = 50$ → $x^2 = 100$ → $x = 10$. Hypotenuse $= 10\\sqrt{2}$."
          }
        ]
      }
    }
  },
  "32": {
    "moduleId": "triangles",
    "title": "The 30-60-90 Triangle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A 30-60-90 triangle has a fixed side ratio — knowing any one side determines all three.",
        "blocks": [
          {
            "type": "heading",
            "content": "The 30-60-90 Triangle"
          },
          {
            "type": "text",
            "content": "The 30-60-90 Triangle (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, The 30-60-90 Triangle (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, in a $30$-$60$-$90$ triangle the sides are in ratio $1 : \\sqrt{3} : 2$, so if the short leg is $5$, the long leg is $5\\sqrt{3}$ and the hypotenuse is $10$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "The 30-60-90 Triangle — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in The 30-60-90 Triangle (Special Right Triangles) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"The 30-60-90 Triangle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In a 30-60-90 triangle, the hypotenuse is $18$. Find the lengths of both legs.",
            "steps": [
              {
                "label": "Recall the 30-60-90 ratio",
                "content": "Short leg $:$ long leg $:$ hypotenuse $= x : x\\sqrt{3} : 2x$."
              },
              {
                "label": "Find the short leg",
                "content": "Hypotenuse $= 2x = 18$, so $x = 9$. The short leg (opposite $30°$) is $9$."
              },
              {
                "label": "Find the long leg",
                "content": "Long leg $= x\\sqrt{3} = 9\\sqrt{3}$ (opposite $60°$)."
              },
              {
                "label": "Trap check",
                "content": "Do not confuse $\\sqrt{3}$ and $2$ in the ratio. The hypotenuse gets the factor of $2$, not $\\sqrt{3}$. Writing hypotenuse $= x\\sqrt{3}$ would give wrong side lengths."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A 30-60-90 triangle has a long leg of $9\\sqrt{3}$. Find the short leg and hypotenuse.",
            "answer": "Short leg $= \\frac{9\\sqrt{3}}{\\sqrt{3}} = 9$. Hypotenuse $= 2 \\times 9 = 18$."
          }
        ]
      }
    }
  },
  "33": {
    "moduleId": "triangles",
    "title": "Simple 30-60-90 Triangle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Find the short leg first — all other sides of a 30-60-90 triangle follow from it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple 30-60-90 Triangle Example"
          },
          {
            "type": "text",
            "content": "Simple 30-60-90 Triangle Example (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple 30-60-90 Triangle Example (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, the angles must sum to $180°$: $90° + 30° + x = 180°$ gives $x = 60°$, so the triangle is $30$-$60$-$90$; then $\\tan(30°) = \\frac{1}{\\sqrt{3}}$ and $\\tan(60°) = \\sqrt{3}$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "Simple 30-60-90 Triangle Example — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple 30-60-90 Triangle Example (Special Right Triangles) problems is special triangle ratio misuse. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple 30-60-90 Triangle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In a 30-60-90 triangle, the longer leg is $6\\sqrt{3}$. Find the shorter leg and the hypotenuse.",
            "steps": [
              {
                "label": "Recall the ratio",
                "content": "Short leg $:$ long leg $:$ hypotenuse $= x : x\\sqrt{3} : 2x$."
              },
              {
                "label": "Find the short leg from the long leg",
                "content": "Long leg $= x\\sqrt{3} = 6\\sqrt{3}$, so $x = 6$. The short leg is $6$."
              },
              {
                "label": "Find the hypotenuse",
                "content": "Hypotenuse $= 2x = 2(6) = 12$."
              },
              {
                "label": "Trap check",
                "content": "Do not multiply the long leg by $\\sqrt{3}$ to get the hypotenuse. That gives $6\\sqrt{3} \\times \\sqrt{3} = 18$, which is too large. Always find the short leg first, then double it for the hypotenuse."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "In a 30-60-90 triangle, the short leg is $9$. Find the long leg and hypotenuse.",
            "answer": "Long leg $= 9\\sqrt{3}$. Hypotenuse $= 18$."
          }
        ]
      }
    }
  },
  "34": {
    "moduleId": "triangles",
    "title": "Complex 30-60-90 Triangle Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The area of an equilateral triangle with side $s$ is $\\frac{s^2\\sqrt{3}}{4}$, derived from the 30-60-90 ratio.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex 30-60-90 Triangle Example #1"
          },
          {
            "type": "text",
            "content": "Complex 30-60-90 Triangle Example #1 (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex 30-60-90 Triangle Example #1 (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, an equilateral triangle with perimeter $624$ cm has side $208$ cm; its height is $\\frac{208\\sqrt{3}}{2} = 104\\sqrt{3}$, so $k = 104$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "Complex 30-60-90 Triangle Example #1 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex 30-60-90 Triangle Example #1 (Special Right Triangles) problems is area/perimeter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex 30-60-90 Triangle Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "An equilateral triangle has a perimeter of $36$. What is the area of the triangle?",
            "steps": [
              {
                "label": "Find the side length",
                "content": "Perimeter $= 3s = 36$, so $s = 12$."
              },
              {
                "label": "Find the height using 30-60-90",
                "content": "Drop an altitude to split the equilateral triangle into two 30-60-90 triangles. The short leg (half the base) is $\\frac{12}{2} = 6$, and the height (long leg) is $6\\sqrt{3}$."
              },
              {
                "label": "Trap check",
                "content": "Do not use the side as the height. The height of an equilateral triangle is $\\frac{s\\sqrt{3}}{2}$, which is **shorter** than the side. Using $A = \\frac{1}{2}(12)(12) = 72$ is incorrect."
              },
              {
                "label": "Compute the area",
                "content": "$A = \\frac{1}{2}bh = \\frac{1}{2}(12)(6\\sqrt{3}) = 36\\sqrt{3}$. (Or directly: $A = \\frac{s^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$.)"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "An equilateral triangle has an area of $16\\sqrt{3}$. Find the side length.",
            "answer": "$\\frac{s^2\\sqrt{3}}{4} = 16\\sqrt{3}$ → $s^2 = 64$ → $s = 8$."
          }
        ]
      }
    }
  },
  "35": {
    "moduleId": "triangles",
    "title": "Complex 30-60-90 Triangle Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Regular hexagons decompose into six equilateral triangles, making the 30-60-90 ratio essential for hexagon problems.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex 30-60-90 Triangle Example #2"
          },
          {
            "type": "text",
            "content": "Complex 30-60-90 Triangle Example #2 (Special Right Triangles) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex 30-60-90 Triangle Example #2 (Special Right Triangles) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Tag triangle type first (right/similar/isosceles) before computing. For example, an equilateral triangle with perimeter $852$ cm has side $284$ cm; its circumradius is $R = \\frac{\\text{side}}{\\sqrt{3}} = \\frac{284}{\\sqrt{3}} = \\frac{284\\sqrt{3}}{3}$, so matching $R = W\\sqrt{3}$ gives $W = \\frac{284}{3}$."
          },
          {
            "type": "diagramRef",
            "visualType": "specialTrianglesDiagram",
            "description": "45-45-90 and 30-60-90 triangles with their fixed side ratios."
          },
          {
            "type": "formula",
            "label": "Complex 30-60-90 Triangle Example #2 — Core Rule",
            "content": "$$a^2 + b^2 = c^2,\\quad \\text{Area} = \\frac{1}{2}bh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex 30-60-90 Triangle Example #2 (Special Right Triangles) problems is similarity proportion mismatch. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Tag triangle type first (right/similar/isosceles) before computing. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex 30-60-90 Triangle Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A regular hexagon has an apothem (center to the midpoint of a side) of $5\\sqrt{3}$. What is the area of the hexagon?",
            "steps": [
              {
                "label": "Find the side length from the apothem",
                "content": "The apothem of a regular hexagon is $\\frac{s\\sqrt{3}}{2}$. Setting $\\frac{s\\sqrt{3}}{2} = 5\\sqrt{3}$ gives $s = 10$."
              },
              {
                "label": "Trap check",
                "content": "Do not use the apothem directly as the side length. The apothem ($5\\sqrt{3} \\approx 8.66$) is shorter than the actual side ($10$). Plugging the apothem into the area formula without converting gives the wrong answer."
              },
              {
                "label": "Find the area of one equilateral triangle",
                "content": "$A_{\\text{triangle}} = \\frac{s^2\\sqrt{3}}{4} = \\frac{100\\sqrt{3}}{4} = 25\\sqrt{3}$."
              },
              {
                "label": "Compute the hexagon area",
                "content": "$A_{\\text{hex}} = 6 \\times 25\\sqrt{3} = 150\\sqrt{3}$. (Equivalently, $A = \\frac{3s^2\\sqrt{3}}{2} = \\frac{3(100)\\sqrt{3}}{2} = 150\\sqrt{3}$.)"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A regular hexagon has side length $4$. Find its area.",
            "answer": "$A = \\frac{3(4)^2\\sqrt{3}}{2} = \\frac{48\\sqrt{3}}{2} = 24\\sqrt{3}$."
          }
        ]
      }
    }
  },
  "36": {
    "moduleId": "triangles",
    "title": "Cofunctions & Complementary Angles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The cofunction identity says $\\sin\\theta = \\cos(90° - \\theta)$, because the two acute angles of a right triangle are complementary.",
        "blocks": [
          {
            "type": "heading",
            "content": "Cofunctions & Complementary Angles"
          },
          {
            "type": "text",
            "content": "In any right triangle, the two acute angles must sum to $90°$ — they are complementary. Because sine measures the opposite side and cosine measures the adjacent side, one acute angle's sine equals the other acute angle's cosine. The prefix \"co-\" in cosine literally means \"complement of.\""
          },
          {
            "type": "text",
            "content": "On the SAT, cofunction items rarely require computing an actual ratio. The key move is recognition: when a sine is set equal to a cosine, the two angles are complementary, so their measures add to $90°$. This works whether the angles are given as numbers or hidden inside algebraic expressions. For example, if $\\sin(x°) = \\cos(y°)$ for acute angles, then $x + y = 90$."
          },
          {
            "type": "formula",
            "label": "Cofunction Identity — Core Rule",
            "content": "$$\\sin\\theta = \\cos(90° - \\theta), \\quad \\cos\\theta = \\sin(90° - \\theta)$$",
            "note": "Use when a sine is set equal to a cosine: the angles are complementary, so they sum to $90°$."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "If $\\sin(2x°) = \\cos(3x°)$, the angles are complementary: $2x + 3x = 90$, so $x = 18$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students apply \"add to $90$\" whenever two trig values are equal — even $\\sin(x°) = \\sin(y°)$. The complement rule only applies when the two functions are DIFFERENT (a sine set equal to a cosine, or a tangent to a cotangent). If the same function appears on both sides, the acute angles are simply equal. Check which functions you are comparing before setting up the equation."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decision rule: when you see a sine set equal to a cosine, then the angles are complementary — first write \"they sum to $90°$\" and solve, rather than hunting for the actual ratio. The same trigger applies to tangent and cotangent: $\\tan\\theta = \\dfrac{1}{\\tan(90° - \\theta)}$, so $\\tan(30°)$ and $\\tan(60°)$ are reciprocals."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Cofunctions & Complementary Angles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "In a right triangle, $\\sin(A) = \\cos(B)$, where $A$ and $B$ are the two acute angles. If $A = (4x + 10)°$ and $B = (x + 20)°$, find the value of $x$.",
            "steps": [
              {
                "label": "Recognize the cofunction relationship",
                "content": "$\\sin(A) = \\cos(B)$ means $A$ and $B$ are complementary, so $A + B = 90°$."
              },
              {
                "label": "Set up the equation",
                "content": "$(4x + 10) + (x + 20) = 90$, which simplifies to $5x + 30 = 90$."
              },
              {
                "label": "Solve for x",
                "content": "$5x = 60$, so $x = 12$."
              },
              {
                "label": "Verify",
                "content": "$A = 4(12) + 10 = 58°$ and $B = 12 + 20 = 32°$. Check: $58° + 32° = 90°$. ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $\\sin(x°) = \\cos(52°)$ and $x$ is acute, what is the value of $x$?",
            "answer": "The angles are complementary, so $x + 52 = 90$, giving $x = 38$."
          }
        ]
      }
    }
  }
};
