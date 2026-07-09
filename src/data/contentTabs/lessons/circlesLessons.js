export const circlesLessonTabs = {
  "1": {
    "moduleId": "circles",
    "title": "Parts of a Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A circle is defined by its center and radius. Every other part — diameter, chord, arc, sector, tangent — builds on these two ideas.",
        "blocks": [
          {
            "type": "heading",
            "content": "Parts of a Circle"
          },
          {
            "type": "text",
            "content": "Every circle question on the SAT starts with one relationship: the diameter is twice the radius ($d = 2r$). Everything else — area, circumference, arc length — is built from the radius."
          },
          {
            "type": "text",
            "content": "Key parts: **Radius** ($r$) = center to edge. **Diameter** ($d = 2r$) = edge to edge through center. **Circumference** ($C = 2\\pi r$) = distance around. **Area** ($A = \\pi r^2$) = space inside. The SAT often gives the diameter and expects you to convert to radius before applying formulas."
          },
          {
            "type": "diagramRef",
            "visualType": "circlePartsDiagram",
            "description": "Circle with radius, diameter, and circumference labeled."
          },
          {
            "type": "formula",
            "label": "Parts of a Circle — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A circle has diameter $14$. Radius $= 7$. Area $= \\pi(7)^2 = 49\\pi$. Circumference $= 2\\pi(7) = 14\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students plug the diameter directly into $\\pi r^2$, getting an area $4\\times$ too large. If diameter $= 10$, then $r = 5$ and $A = 25\\pi$, not $100\\pi$. First step on every circle problem: \"Am I given radius or diameter?\" If diameter, divide by $2$ immediately and write $r = d/2$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Parts of a Circle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A circle has a diameter of $14$. A central angle of $90°$ intercepts an arc. Find the arc length and the area of the corresponding sector.",
            "steps": [
              {
                "label": "Find radius",
                "content": "$r = \\frac{14}{2} = 7$"
              },
              {
                "label": "Fraction of circle",
                "content": "$\\frac{90}{360} = \\frac{1}{4}$"
              },
              {
                "label": "Arc length",
                "content": "$\\frac{1}{4} \\times 2\\pi(7) = \\frac{14\\pi}{4} = \\frac{7\\pi}{2}$"
              },
              {
                "label": "Sector area",
                "content": "$\\frac{1}{4} \\times \\pi(7)^2 = \\frac{49\\pi}{4}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has radius $5$. What is its diameter, circumference, and area?",
            "answer": "Diameter $= 2(5) = 10$. Circumference $= 2\\pi(5) = 10\\pi$. Area $= \\pi(5)^2 = 25\\pi$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "circles",
    "title": "Area of a Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The area of a circle depends only on its radius — square the radius, multiply by $\\pi$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Area of a Circle"
          },
          {
            "type": "text",
            "content": "Area measures the space inside the circle. It grows with the **square** of the radius — doubling the radius quadruples the area."
          },
          {
            "type": "text",
            "content": "$A = \\pi r^2$. On the SAT, area questions test: (1) basic computation from radius or diameter, (2) reverse — given the area, find the radius, (3) comparison — how does area change when radius changes? Since $A \\propto r^2$, if $r$ doubles, $A$ quadruples."
          },
          {
            "type": "diagramRef",
            "visualType": "circlePartsDiagram",
            "description": "Circle with radius r labeled — area fills the interior."
          },
          {
            "type": "formula",
            "label": "Area of a Circle — Core Rule",
            "content": "$$A=\\pi r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A circle has area $36\\pi$. Then $r^2 = 36$, so $r = 6$. Circumference $= 2\\pi(6) = 12\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse area ($\\pi r^2$) with circumference ($2\\pi r$). Both have $\\pi$ and $r$, but area uses $r$ squared. Area = space INSIDE (squared). Circumference = distance AROUND (not squared). If the answer has $r^2$, it is area."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "If the problem hands you a diameter, halve it before touching $\\pi r^2$ — squaring the diameter instead of the radius inflates the area by a factor of 4, and that inflated value is almost always waiting in the answer choices. Before selecting, ask: did I square the radius, or the diameter?"
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Area of a Circle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Circle A has radius $3$ and Circle B has radius $9$. How many times greater is the area of Circle B?",
            "steps": [
              {
                "label": "Areas",
                "content": "$A_A = \\pi(3)^2 = 9\\pi$, $A_B = \\pi(9)^2 = 81\\pi$"
              },
              {
                "label": "Ratio",
                "content": "$\\frac{81\\pi}{9\\pi} = 9$ times greater"
              },
              {
                "label": "Shortcut",
                "content": "Radius tripled ($\\times 3$), so area increases by $3^2 = 9$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has a diameter of $20$. What is its area?",
            "answer": "$r = \\frac{20}{2} = 10$. Area $= \\pi(10)^2 = 100\\pi$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "circles",
    "title": "Circumference of a Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Circumference is the distance around a circle — think of it as the circle's perimeter.",
        "blocks": [
          {
            "type": "heading",
            "content": "Circumference of a Circle"
          },
          {
            "type": "text",
            "content": "Circumference of a Circle (Circle Fundamentals) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Circumference of a Circle (Circle Fundamentals) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Circumference is distance around, not interior area."
          },
          {
            "type": "diagramRef",
            "visualType": "circlePartsDiagram",
            "description": "Circumference is the full distance around the circle."
          },
          {
            "type": "formula",
            "label": "Circumference of a Circle — Core Rule",
            "content": "$$C=2\\pi r=\\pi d$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Circumference of a Circle (Circle Fundamentals) problems is using area formula when circumference is asked. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Circumference is distance around, not interior area. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Circumference of a Circle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A wheel has a circumference of $24\\pi$ inches. What is the area of the circle?",
            "steps": [
              {
                "label": "Solve for $r$",
                "content": "$24\\pi = 2\\pi r \\Rightarrow r = 12$"
              },
              {
                "label": "Compute area",
                "content": "$A = \\pi(12)^2 = 144\\pi$ square inches"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circular fountain has a radius of $8$ feet. How much decorative edging is needed to go around it once?",
            "answer": "$C = 2\\pi(8) = 16\\pi \\approx 50.27$ feet."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "circles",
    "title": "Simple Circle Area Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A straightforward circle area problem: given a measurement, find the area using $A = \\pi r^2$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Circle Area Example"
          },
          {
            "type": "text",
            "content": "Simple Circle Area Example (Area Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Circle Area Example (Area Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately."
          },
          {
            "type": "formula",
            "label": "Simple Circle Area Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Circle Area Example (Area Problems) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Circle Area Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A circular garden has a diameter of $20$ feet. What is the area of the garden?",
            "steps": [
              {
                "label": "Find radius",
                "content": "$r = \\frac{20}{2} = 10$ feet"
              },
              {
                "label": "Apply formula",
                "content": "$A = \\pi(10)^2 = 100\\pi \\approx 314.16$ square feet"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circular garden has a diameter of $20$ feet. What is the area of the garden?",
            "answer": "$A = \\pi(10)^2 = 100\\pi \\approx 314.16$ square feet"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "circles",
    "title": "Complex Circle Area Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multi-step area problems require extracting the radius from another quantity before computing area.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Circle Area Example"
          },
          {
            "type": "text",
            "content": "Complex Circle Area Example (Area Problems) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Circle Area Example (Area Problems) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, if circle $A$ has radius $3N$ and circle $B$ has radius $129N$, the area ratio is $\\left(\\frac{129N}{3N}\\right)^2 = 43^2 = 1849$, so circle $B$'s area is $1849$ times circle $A$'s."
          },
          {
            "type": "formula",
            "label": "Complex Circle Area Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Circle Area Example (Area Problems) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Circle Area Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Circle A has an area of $25\\pi$. Circle B has a radius that is $3$ times the radius of Circle A. What is the area of Circle B?",
            "steps": [
              {
                "label": "Find $r_A$",
                "content": "$\\pi r_A^2 = 25\\pi \\Rightarrow r_A = 5$"
              },
              {
                "label": "Find $r_B$",
                "content": "$r_B = 3 \\times 5 = 15$"
              },
              {
                "label": "Area of B",
                "content": "$A_B = \\pi(15)^2 = 225\\pi$"
              },
              {
                "label": "Shortcut check",
                "content": "Radius tripled, so area scales by $3^2 = 9$: $25\\pi \\times 9 = 225\\pi$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Circle A has an area of $25\\pi$. Circle B has a radius that is $3$ times the radius of Circle A. What is the area of Circle B?",
            "answer": "Radius tripled, so area scales by $3^2 = 9$: $25\\pi \\times 9 = 225\\pi$."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "circles",
    "title": "Arc Length",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Arc length is a fraction of the full circumference, determined by the central angle.",
        "blocks": [
          {
            "type": "heading",
            "content": "Arc Length"
          },
          {
            "type": "text",
            "content": "An arc is a portion of the circumference. Arc length is the \"fraction of the circle\" times the full circumference."
          },
          {
            "type": "text",
            "content": "Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r$ (degrees) or $s = r\\theta$ (radians). The SAT gives you the central angle and radius, and asks for the arc. The key: arc length is a **proportion** of the full circumference. For example, the circumference is $C = 2\\pi r = \\pi d$; an arc that spans $90°$ is $\\frac{90}{360} = \\frac{1}{4}$ of that full circumference."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Arc length is a fraction of the circumference, determined by the central angle."
          },
          {
            "type": "formula",
            "label": "Arc Length — Core Rule",
            "content": "$$s=\\frac{\\theta}{360^\\circ}\\cdot2\\pi r\\quad\\text{or}\\quad s=r\\theta\\ (\\theta\\text{ in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Central angle $= 90°$, radius $= 4$. Arc length $= \\frac{90}{360} \\times 2\\pi(4) = \\frac{1}{4} \\times 8\\pi = 2\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students use the formula for area of a sector ($\\frac{\\theta}{360°} \\times \\pi r^2$) when the question asks for arc length, or vice versa. Arc length has $2\\pi r$, sector area has $\\pi r^2$. Arc LENGTH → $\\frac{\\theta}{360} \\times 2\\pi r$ (distance around). Sector AREA → $\\frac{\\theta}{360} \\times \\pi r^2$ (space inside). Length = $1D$, Area = $2D$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Arc length uses circumference proportion, not area proportion. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Arc Length\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A circle has radius $10$. What is the length of an arc intercepted by a $72°$ central angle?",
            "steps": [
              {
                "label": "Fraction",
                "content": "$\\frac{72}{360} = \\frac{1}{5}$"
              },
              {
                "label": "Circumference",
                "content": "$2\\pi(10) = 20\\pi$"
              },
              {
                "label": "Arc length",
                "content": "$\\frac{1}{5} \\times 20\\pi = 4\\pi$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has diameter $18$. Find the arc length intercepted by a $120°$ central angle.",
            "answer": "$r = 9$. $\\frac{120}{360} = \\frac{1}{3}$. Circumference $= 2\\pi(9) = 18\\pi$. Arc length $= \\frac{1}{3} \\times 18\\pi = 6\\pi$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "circles",
    "title": "Simple Circumference Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A direct circumference problem: given radius or diameter, compute the distance around the circle.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Circumference Example"
          },
          {
            "type": "text",
            "content": "Simple Circumference Example (Circumference & Arc Length) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Circumference Example (Circumference & Arc Length) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Circumference is distance around, not interior area. For example, the circumference is $C = 2\\pi r = \\pi d$: multiply the radius by $2\\pi$, or the diameter by $\\pi$."
          },
          {
            "type": "diagramRef",
            "visualType": "circlePartsDiagram",
            "description": "Circumference is the full distance around the circle."
          },
          {
            "type": "formula",
            "label": "Simple Circumference Example — Core Rule",
            "content": "$$C=2\\pi r=\\pi d$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Circumference Example (Circumference & Arc Length) problems is using area formula when circumference is asked. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Circumference is distance around, not interior area. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Circumference Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A circular track has a diameter of $50$ meters. What is the distance around the track?",
            "steps": [
              {
                "label": "Apply formula",
                "content": "$C = \\pi d = 50\\pi \\approx 157.1$ meters"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circular track has a diameter of $50$ meters. What is the distance around the track?",
            "answer": "$C = \\pi d = 50\\pi \\approx 157.1$ meters"
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "circles",
    "title": "Conceptual Arc Length Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Conceptual arc length problems test proportional reasoning: if one arc and its angle are known, any other arc on the same circle can be found by scaling.",
        "blocks": [
          {
            "type": "heading",
            "content": "Conceptual Arc Length Example"
          },
          {
            "type": "text",
            "content": "An arc is a portion of the circumference. Arc length is the \"fraction of the circle\" times the full circumference."
          },
          {
            "type": "text",
            "content": "Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r$ (degrees) or $s = r\\theta$ (radians). The SAT gives you the central angle and radius, and asks for the arc. The key: arc length is a **proportion** of the full circumference. For example, a central angle equals the measure of the arc it subtends, so if arc $RS$ measures $100°$, the central angle $\\angle ROS$ is also $100°$."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Arc length is a fraction of the circumference, determined by the central angle."
          },
          {
            "type": "formula",
            "label": "Conceptual Arc Length Example — Core Rule",
            "content": "$$s=\\frac{\\theta}{360^\\circ}\\cdot2\\pi r\\quad\\text{or}\\quad s=r\\theta\\ (\\theta\\text{ in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Central angle $= 90°$, radius $= 4$. Arc length $= \\frac{90}{360} \\times 2\\pi(4) = \\frac{1}{4} \\times 8\\pi = 2\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students use the formula for area of a sector ($\\frac{\\theta}{360°} \\times \\pi r^2$) when the question asks for arc length, or vice versa. Arc length has $2\\pi r$, sector area has $\\pi r^2$. Arc LENGTH → $\\frac{\\theta}{360} \\times 2\\pi r$ (distance around). Sector AREA → $\\frac{\\theta}{360} \\times \\pi r^2$ (space inside). Length = $1D$, Area = $2D$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Arc length uses circumference proportion, not area proportion. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Conceptual Arc Length Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "On a circle, a $40°$ arc has length $6$. What is the length of a $100°$ arc on the same circle?",
            "steps": [
              {
                "label": "Set up ratio",
                "content": "$\\frac{\\ell_2}{6} = \\frac{100}{40}$"
              },
              {
                "label": "Solve",
                "content": "$\\ell_2 = 6 \\times \\frac{100}{40} = 6 \\times 2.5 = 15$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "On a circle, a $40°$ arc has length $6$. What is the length of a $100°$ arc on the same circle?",
            "answer": "$\\ell_2 = 6 \\times \\frac{100}{40} = 6 \\times 2.5 = 15$"
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "circles",
    "title": "Calculating Arc Length Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A computational arc length problem requiring the full formula: combine the central angle fraction with the circumference.",
        "blocks": [
          {
            "type": "heading",
            "content": "Calculating Arc Length Example"
          },
          {
            "type": "text",
            "content": "An arc is a portion of the circumference. Arc length is the \"fraction of the circle\" times the full circumference."
          },
          {
            "type": "text",
            "content": "Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r$ (degrees) or $s = r\\theta$ (radians). The SAT gives you the central angle and radius, and asks for the arc. The key: arc length is a **proportion** of the full circumference. For example, if a circle has circumference $36$ and arc $AC$ subtends a central angle $\\theta$, then arc $AC = \\frac{\\theta}{360°} \\times 36$."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Arc length is a fraction of the circumference, determined by the central angle."
          },
          {
            "type": "formula",
            "label": "Calculating Arc Length Example — Core Rule",
            "content": "$$s=\\frac{\\theta}{360^\\circ}\\cdot2\\pi r\\quad\\text{or}\\quad s=r\\theta\\ (\\theta\\text{ in radians})$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Central angle $= 90°$, radius $= 4$. Arc length $= \\frac{90}{360} \\times 2\\pi(4) = \\frac{1}{4} \\times 8\\pi = 2\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students use the formula for area of a sector ($\\frac{\\theta}{360°} \\times \\pi r^2$) when the question asks for arc length, or vice versa. Arc length has $2\\pi r$, sector area has $\\pi r^2$. Arc LENGTH → $\\frac{\\theta}{360} \\times 2\\pi r$ (distance around). Sector AREA → $\\frac{\\theta}{360} \\times \\pi r^2$ (space inside). Length = $1D$, Area = $2D$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Arc length uses circumference proportion, not area proportion. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Calculating Arc Length Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A circle has a diameter of $18$. Find the length of an arc intercepted by a $120°$ central angle.",
            "steps": [
              {
                "label": "Find radius",
                "content": "$r = \\frac{18}{2} = 9$"
              },
              {
                "label": "Simplify fraction",
                "content": "$\\frac{120}{360} = \\frac{1}{3}$"
              },
              {
                "label": "Circumference",
                "content": "$2\\pi(9) = 18\\pi$"
              },
              {
                "label": "Arc length",
                "content": "$\\frac{1}{3} \\times 18\\pi = 6\\pi$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has a diameter of $18$. Find the length of an arc intercepted by a $120°$ central angle.",
            "answer": "$\\frac{1}{3} \\times 18\\pi = 6\\pi$"
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "circles",
    "title": "Sector Area",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A sector is a \"pizza slice\" of the circle. Its area is the same fraction of the full area as the central angle is of $360°$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Sector Area"
          },
          {
            "type": "text",
            "content": "Sector Area (Sector Area) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Sector Area (Sector Area) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sector area is a fraction of the full circle area. For example, a sector spanning central angle $\\theta$ has area $\\frac{\\theta}{360°} \\times \\pi r^2$ — the same fraction of the full circle that the angle is of $360°$."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Sector area is a pie-slice fraction of the total circle area."
          },
          {
            "type": "formula",
            "label": "Sector Area — Core Rule",
            "content": "$$A_{\\text{sector}}=\\frac{\\theta}{360^\\circ}\\cdot\\pi r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Sector Area (Sector Area) problems is using arc length formula for sector area. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sector area is a fraction of the full circle area. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Sector Area\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the area of a sector with central angle $60°$ and radius $6$.",
            "steps": [
              {
                "label": "Fraction",
                "content": "$\\frac{60}{360} = \\frac{1}{6}$"
              },
              {
                "label": "Full area",
                "content": "$\\pi(6)^2 = 36\\pi$"
              },
              {
                "label": "Sector area",
                "content": "$\\frac{1}{6} \\times 36\\pi = 6\\pi$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has area $100\\pi$. What is the area of the region outside a $90°$ sector (the shaded complement)?",
            "answer": "The $90°$ sector has area $\\frac{1}{4} \\times 100\\pi = 25\\pi$. The complement: $100\\pi - 25\\pi = 75\\pi$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "circles",
    "title": "Simple Sector Area Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A straightforward sector area problem: given the central angle and radius, compute the sector's area directly.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Sector Area Example"
          },
          {
            "type": "text",
            "content": "Simple Sector Area Example (Sector Area) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Sector Area Example (Sector Area) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sector area is a fraction of the full circle area. For example, a shaded sector spanning $90°$ of a circle of radius $r$ has area $\\frac{90}{360} \\times \\pi r^2 = \\frac{\\pi r^2}{4}$."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Sector area is a pie-slice fraction of the total circle area."
          },
          {
            "type": "formula",
            "label": "Simple Sector Area Example — Core Rule",
            "content": "$$A_{\\text{sector}}=\\frac{\\theta}{360^\\circ}\\cdot\\pi r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Sector Area Example (Sector Area) problems is using arc length formula for sector area. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sector area is a fraction of the full circle area. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Sector Area Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A sector has a central angle of $90°$ and a radius of $8$. What is the sector's area?",
            "steps": [
              {
                "label": "Fraction",
                "content": "$\\frac{90}{360} = \\frac{1}{4}$"
              },
              {
                "label": "Full area",
                "content": "$\\pi(8)^2 = 64\\pi$"
              },
              {
                "label": "Sector area",
                "content": "$\\frac{1}{4} \\times 64\\pi = 16\\pi$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A sector has a central angle of $90°$ and a radius of $8$. What is the sector's area?",
            "answer": "$\\frac{1}{4} \\times 64\\pi = 16\\pi$"
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "circles",
    "title": "Complex Sector Area Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multi-step sector area problems where the radius or angle must be derived before applying $A = \\frac{\\theta}{360} \\times \\pi r^2$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Sector Area Example"
          },
          {
            "type": "text",
            "content": "Complex Sector Area Example (Sector Area) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Sector Area Example (Sector Area) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sector area is a fraction of the full circle area. As above, the shaded sector's area is the fraction $\\frac{\\theta}{360°}$ of the full circle area $\\pi r^2$."
          },
          {
            "type": "diagramRef",
            "visualType": "arcLengthDiagram",
            "description": "Sector area is a pie-slice fraction of the total circle area."
          },
          {
            "type": "formula",
            "label": "Complex Sector Area Example — Core Rule",
            "content": "$$A_{\\text{sector}}=\\frac{\\theta}{360^\\circ}\\cdot\\pi r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Sector Area Example (Sector Area) problems is using arc length formula for sector area. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sector area is a fraction of the full circle area. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Sector Area Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A circle has circumference $24\\pi$. A sector of this circle has an arc length of $4\\pi$. What is the area of this sector?",
            "steps": [
              {
                "label": "Find radius",
                "content": "$C = 24\\pi \\Rightarrow 2\\pi r = 24\\pi \\Rightarrow r = 12$"
              },
              {
                "label": "Find angle",
                "content": "$\\frac{\\theta}{360} \\times 24\\pi = 4\\pi \\Rightarrow \\frac{\\theta}{360} = \\frac{1}{6} \\Rightarrow \\theta = 60°$"
              },
              {
                "label": "Sector area",
                "content": "$\\frac{60}{360} \\times \\pi(12)^2 = \\frac{1}{6} \\times 144\\pi = 24\\pi$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle has circumference $24\\pi$. A sector of this circle has an arc length of $4\\pi$. What is the area of this sector?",
            "answer": "$\\frac{60}{360} \\times \\pi(12)^2 = \\frac{1}{6} \\times 144\\pi = 24\\pi$"
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "circles",
    "title": "Standard Form of a Circle Equation",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The standard form of a circle equation gives you the center and radius at a glance.",
        "blocks": [
          {
            "type": "heading",
            "content": "Standard Form of a Circle Equation"
          },
          {
            "type": "text",
            "content": "The equation of a circle in the coordinate plane is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius."
          },
          {
            "type": "text",
            "content": "On the SAT, the equation often appears in expanded form: $x^2 + y^2 + Dx + Ey + F = 0$. To find center and radius, you must **complete the square** for both $x$ and $y$ terms. The center is the opposite sign of what appears in the parentheses. For example, $(x - 3)^2 + (y - k)^2 = 64$ has center $(3, k)$ and radius $\\sqrt{64} = 8$."
          },
          {
            "type": "diagramRef",
            "visualType": "circleEquationDiagram",
            "description": "Circle on a coordinate plane showing center (h, k) and radius r."
          },
          {
            "type": "formula",
            "label": "Standard Form of a Circle Equation — Core Rule",
            "content": "$$(x-h)^2+(y-k)^2=r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$(x + 1)^2 + (y - 4)^2 = 16$. Center: $(-1, 4)$. Radius: $\\sqrt{16} = 4$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "In $(x - 3)^2 + (y + 2)^2 = 25$, the center is $(3, -2)$ and $r = 5$. Students write center $(-3, 2)$ — flipping signs like the vertex form trap in quadratics. Same rule as vertex form: the sign inside is the OPPOSITE of the coordinate. $(x - 3)$ means $h = +3$. $(y + 2)$ means $k = -2$. And $r^2 = 25$ means $r = 5$, not $25$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Read signs carefully: the center is (h, k), with opposite signs from the equation. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Standard Form of a Circle Equation\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "What are the center and radius of $(x + 5)^2 + (y - 2)^2 = 81$?",
            "steps": [
              {
                "label": "Identify $h$",
                "content": "$(x + 5)^2 = (x - (-5))^2$, so $h = -5$"
              },
              {
                "label": "Identify $k$",
                "content": "$(y - 2)^2$ gives $k = 2$"
              },
              {
                "label": "Find $r$",
                "content": "$r^2 = 81 \\Rightarrow r = 9$"
              },
              {
                "label": "Answer",
                "content": "Center $= (-5, 2)$, radius $= 9$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the center and radius of $(x + 7)^2 + (y - 5)^2 = 144$.",
            "answer": "Center $= (-7, 5)$, radius $= \\sqrt{144} = 12$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "circles",
    "title": "Simple Extracting Center & Radius from Standard Form",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Given a circle equation in standard form, read off the center and radius by reversing the signs and square-rooting.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Extracting Center & Radius from Standard Form"
          },
          {
            "type": "text",
            "content": "Simple Extracting Center & Radius from Standard Form (Equation of a Circle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Extracting Center & Radius from Standard Form (Equation of a Circle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, $(x - 3)^2 + (y - k)^2 = 64$ has center $(3, k)$ and radius $8$, since $r = \\sqrt{64}$."
          },
          {
            "type": "diagramRef",
            "visualType": "circleEquationDiagram",
            "description": "Circle on a coordinate plane showing center (h, k) and radius r."
          },
          {
            "type": "formula",
            "label": "Simple Extracting Center & Radius from Standard Form — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Extracting Center & Radius from Standard Form (Equation of a Circle) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Extracting Center & Radius from Standard Form\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the center and radius: $(x - 4)^2 + (y + 3)^2 = 64$.",
            "steps": [
              {
                "label": "Center",
                "content": "$h = 4$, $k = -3$ (reverse the $+3$). Center $= (4, -3)$."
              },
              {
                "label": "Radius",
                "content": "$r = \\sqrt{64} = 8$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the center and radius: $(x - 4)^2 + (y + 3)^2 = 64$.",
            "answer": "$r = \\sqrt{64} = 8$"
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "circles",
    "title": "Simple Extracting Diameter from Standard Form",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When a question asks for the diameter, find the radius first from the standard form equation, then double it.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Extracting Diameter from Standard Form"
          },
          {
            "type": "text",
            "content": "Simple Extracting Diameter from Standard Form (Equation of a Circle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Extracting Diameter from Standard Form (Equation of a Circle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, $(x - 5)^2 + (y - 3)^2 = 16$ has radius $\\sqrt{16} = 4$, so its diameter is $2 \\times 4 = 8$."
          },
          {
            "type": "diagramRef",
            "visualType": "circleEquationDiagram",
            "description": "Circle on a coordinate plane showing center (h, k) and radius r."
          },
          {
            "type": "formula",
            "label": "Simple Extracting Diameter from Standard Form — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Extracting Diameter from Standard Form (Equation of a Circle) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Extracting Diameter from Standard Form\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "What is the diameter of the circle $(x + 2)^2 + (y - 8)^2 = 25$?",
            "steps": [
              {
                "label": "Find $r$",
                "content": "$r = \\sqrt{25} = 5$"
              },
              {
                "label": "Find $d$",
                "content": "$d = 2(5) = 10$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What is the diameter of the circle $(x + 2)^2 + (y - 8)^2 = 25$?",
            "answer": "$d = 2(5) = 10$"
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "circles",
    "title": "Complex Extracting Diameter (Conceptual Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When two endpoints of a diameter are given, the center is the midpoint and the diameter is the distance between them.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Extracting Diameter (Conceptual Method)"
          },
          {
            "type": "text",
            "content": "Complex Extracting Diameter (Conceptual Method) (Equation of a Circle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Extracting Diameter (Conceptual Method) (Equation of a Circle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, if a diameter has endpoints $(2a, 4)$ and $(2a, 14)$, the radius is half the distance between them: $r = \\frac{14 - 4}{2} = 5$."
          },
          {
            "type": "diagramRef",
            "visualType": "circleEquationDiagram",
            "description": "Circle on a coordinate plane showing center (h, k) and radius r."
          },
          {
            "type": "formula",
            "label": "Complex Extracting Diameter (Conceptual Method) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Extracting Diameter (Conceptual Method) (Equation of a Circle) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Extracting Diameter (Conceptual Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The endpoints of a diameter of a circle are $(-1, 2)$ and $(7, 8)$. Find the center, radius, and equation.",
            "steps": [
              {
                "label": "Center (midpoint)",
                "content": "$\\left(\\frac{-1+7}{2}, \\frac{2+8}{2}\\right) = (3, 5)$"
              },
              {
                "label": "Diameter (distance)",
                "content": "$d = \\sqrt{(7-(-1))^2 + (8-2)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$"
              },
              {
                "label": "Radius",
                "content": "$r = \\frac{10}{2} = 5$"
              },
              {
                "label": "Equation",
                "content": "$(x - 3)^2 + (y - 5)^2 = 25$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The endpoints of a diameter of a circle are $(-1, 2)$ and $(7, 8)$. Find the center, radius, and equation.",
            "answer": "$(x - 3)^2 + (y - 5)^2 = 25$"
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "circles",
    "title": "Complex Extracting Diameter (Plug-In Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Substitute a known point on the circle into the equation to solve for the radius, then double for the diameter.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Extracting Diameter (Plug-In Method)"
          },
          {
            "type": "text",
            "content": "Complex Extracting Diameter (Plug-In Method) (Equation of a Circle) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Extracting Diameter (Plug-In Method) (Equation of a Circle) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. Now we can simply solve this exact question by also plugging in a coordinate. Understand this. Both of the coordinates that you are given whether it's the 2a 4 or the 2a 14 are in the form of x comma y. You can plug in the x value with its correspond."
          },
          {
            "type": "diagramRef",
            "visualType": "circleEquationDiagram",
            "description": "Circle on a coordinate plane showing center (h, k) and radius r."
          },
          {
            "type": "formula",
            "label": "Complex Extracting Diameter (Plug-In Method) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Extracting Diameter (Plug-In Method) (Equation of a Circle) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Extracting Diameter (Plug-In Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A circle with center $(2, -1)$ passes through the point $(5, 3)$. What is the diameter?",
            "steps": [
              {
                "label": "Plug in",
                "content": "$(5 - 2)^2 + (3 - (-1))^2 = r^2$"
              },
              {
                "label": "Simplify",
                "content": "$9 + 16 = r^2 \\Rightarrow r^2 = 25$"
              },
              {
                "label": "Radius",
                "content": "$r = 5$"
              },
              {
                "label": "Diameter",
                "content": "$d = 2(5) = 10$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A circle with center $(2, -1)$ passes through the point $(5, 3)$. What is the diameter?",
            "answer": "$d = 2(5) = 10$"
          }
        ]
      }
    }
  },
  "18": {
    "moduleId": "circles",
    "title": "Transformations of Circles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Transforming a circle means moving its center or changing its radius — both are visible in the standard-form equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Transformations of Circles"
          },
          {
            "type": "text",
            "content": "Transformations of Circles (Circle Transformations) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Transformations of Circles (Circle Transformations) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, $x^2 + (y - 1)^2 = 49$ (center $(0, 1)$) shifted down $2$ units has center $(0, -1)$, giving $x^2 + (y + 1)^2 = 49$."
          },
          {
            "type": "formula",
            "label": "Transformations of Circles — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Transformations of Circles (Circle Transformations) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Transformations of Circles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Circle $C_1$: $(x - 1)^2 + (y + 3)^2 = 4$. Write the equation of $C_2$, which is $C_1$ shifted $5$ units right and $2$ units up with the radius doubled.",
            "steps": [
              {
                "label": "Original",
                "content": "Center $(1, -3)$, radius $= 2$"
              },
              {
                "label": "Shift center",
                "content": "$(1 + 5,\\; -3 + 2) = (6, -1)$"
              },
              {
                "label": "Scale radius",
                "content": "$2 \\times 2 = 4$, so $r^2 = 16$"
              },
              {
                "label": "New equation",
                "content": "$(x - 6)^2 + (y + 1)^2 = 16$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Circle: $(x - 1)^2 + (y + 2)^2 = 4$. Shift $3$ left and double the radius. New equation?",
            "answer": "Center $(1, -2) \\to (1-3, -2) = (-2, -2)$. Radius $2 \\to 4$, so $r^2 = 16$. New equation: $(x + 2)^2 + (y + 2)^2 = 16$."
          }
        ]
      }
    }
  },
  "19": {
    "moduleId": "circles",
    "title": "Simple Circle Transformations Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A single-step translation: shift a circle left, right, up, or down and write the new equation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Circle Transformations Example"
          },
          {
            "type": "text",
            "content": "Simple Circle Transformations Example (Circle Transformations) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Circle Transformations Example (Circle Transformations) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. As above, shifting a circle down $2$ moves its center from $(0, 1)$ to $(0, -1)$: $x^2 + (y + 1)^2 = 49$."
          },
          {
            "type": "formula",
            "label": "Simple Circle Transformations Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Circle Transformations Example (Circle Transformations) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Circle Transformations Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "The circle $(x - 2)^2 + (y + 5)^2 = 16$ is shifted $3$ units to the right. What is the new equation?",
            "steps": [
              {
                "label": "Original center",
                "content": "$(2, -5)$"
              },
              {
                "label": "New center",
                "content": "$(2 + 3, -5) = (5, -5)$"
              },
              {
                "label": "New equation",
                "content": "$(x - 5)^2 + (y + 5)^2 = 16$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The circle $(x - 2)^2 + (y + 5)^2 = 16$ is shifted $3$ units to the right. What is the new equation?",
            "answer": "$(x - 5)^2 + (y + 5)^2 = 16$"
          }
        ]
      }
    }
  },
  "20": {
    "moduleId": "circles",
    "title": "Complex Circle Transformations Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multi-step transformations combining translation and scaling: shift the center AND change the radius.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Circle Transformations Example"
          },
          {
            "type": "text",
            "content": "Complex Circle Transformations Example (Circle Transformations) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Circle Transformations Example (Circle Transformations) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. Circle A which is shown is defined by the equation x + 2 ^2 + y^2 = 9. Circle B which is not shown is the result of shifting circle A down 6 units and increasing the radius so that the radius of circle B is 2 * the radius of circle A. Which equation."
          },
          {
            "type": "formula",
            "label": "Complex Circle Transformations Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Circle Transformations Example (Circle Transformations) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Circle Transformations Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Circle: $(x + 3)^2 + (y - 4)^2 = 9$. It is shifted $6$ units right, $4$ units down, and the radius is tripled. Write the new equation.",
            "steps": [
              {
                "label": "Original",
                "content": "Center $(-3, 4)$, $r = 3$"
              },
              {
                "label": "Shift center",
                "content": "$(-3 + 6, 4 - 4) = (3, 0)$"
              },
              {
                "label": "Scale radius",
                "content": "$3 \\times 3 = 9$, so $r^2 = 81$"
              },
              {
                "label": "New equation",
                "content": "$(x - 3)^2 + y^2 = 81$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Circle: $(x + 3)^2 + (y - 4)^2 = 9$. It is shifted $6$ units right, $4$ units down, and the radius is tripled. Write the new equation.",
            "answer": "$(x - 3)^2 + y^2 = 81$"
          }
        ]
      }
    }
  },
  "21": {
    "moduleId": "circles",
    "title": "Domain & Range of a Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A circle's domain and range are closed intervals determined by the center and radius.",
        "blocks": [
          {
            "type": "heading",
            "content": "Domain & Range of a Circle"
          },
          {
            "type": "text",
            "content": "Domain & Range of a Circle (Domain, Range & Intersections) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Domain & Range of a Circle (Domain, Range & Intersections) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, on a circle of radius $r$ centered at $(h, k)$, any point $(a, b)$ has $a$ between $h - r$ and $h + r$ — that range of $x$-values is the circle's domain."
          },
          {
            "type": "formula",
            "label": "Domain & Range of a Circle — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Domain & Range of a Circle (Domain, Range & Intersections) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Domain & Range of a Circle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Find the domain and range of the circle $(x + 2)^2 + (y - 5)^2 = 49$.",
            "steps": [
              {
                "label": "Identify",
                "content": "Center $= (-2, 5)$, radius $= \\sqrt{49} = 7$"
              },
              {
                "label": "Domain",
                "content": "$[-2 - 7,\\; -2 + 7] = [-9, 5]$"
              },
              {
                "label": "Range",
                "content": "$[5 - 7,\\; 5 + 7] = [-2, 12]$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What is the domain and range of $x^2 + y^2 = 36$?",
            "answer": "Center $(0, 0)$, $r = 6$. Domain $= [-6, 6]$. Range $= [-6, 6]$."
          }
        ]
      }
    }
  },
  "22": {
    "moduleId": "circles",
    "title": "Determining Domain & Range Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Practice extracting domain and range from various circle equations by identifying the center and radius first.",
        "blocks": [
          {
            "type": "heading",
            "content": "Determining Domain & Range Example"
          },
          {
            "type": "text",
            "content": "Determining Domain & Range Example (Domain, Range & Intersections) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Determining Domain & Range Example (Domain, Range & Intersections) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. As above, the possible $x$-values $a$ run from $h - r$ to $h + r$; test each choice against that interval."
          },
          {
            "type": "formula",
            "label": "Determining Domain & Range Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Determining Domain & Range Example (Domain, Range & Intersections) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Determining Domain & Range Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Find the domain and range: $(x - 4)^2 + (y + 6)^2 = 100$.",
            "steps": [
              {
                "label": "Center",
                "content": "$(4, -6)$"
              },
              {
                "label": "Radius",
                "content": "$r = \\sqrt{100} = 10$"
              },
              {
                "label": "Domain",
                "content": "$[4 - 10, 4 + 10] = [-6, 14]$"
              },
              {
                "label": "Range",
                "content": "$[-6 - 10, -6 + 10] = [-16, 4]$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the domain and range: $(x - 4)^2 + (y + 6)^2 = 100$.",
            "answer": "$[-6 - 10, -6 + 10] = [-16, 4]$"
          }
        ]
      }
    }
  },
  "23": {
    "moduleId": "circles",
    "title": "Intersecting Y-Axis at Exactly One Point Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A circle intersects the $y$-axis at exactly one point when the distance from the center to the $y$-axis equals the radius.",
        "blocks": [
          {
            "type": "heading",
            "content": "Intersecting Y-Axis at Exactly One Point Example"
          },
          {
            "type": "text",
            "content": "Intersecting Y-Axis at Exactly One Point Example (Domain, Range & Intersections) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Intersecting Y-Axis at Exactly One Point Example (Domain, Range & Intersections) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, a circle touches the $y$-axis at exactly one point when its radius equals the distance from its center to that axis, i.e. $r = |h|$."
          },
          {
            "type": "formula",
            "label": "Intersecting Y-Axis at Exactly One Point Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Intersecting Y-Axis at Exactly One Point Example (Domain, Range & Intersections) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Intersecting Y-Axis at Exactly One Point Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "For what value of $r$ does $(x - 4)^2 + (y + 1)^2 = r^2$ intersect the $y$-axis at exactly one point?",
            "steps": [
              {
                "label": "Center",
                "content": "$(4, -1)$"
              },
              {
                "label": "Distance to $y$-axis",
                "content": "$|4| = 4$"
              },
              {
                "label": "Tangency condition",
                "content": "$r = 4$"
              },
              {
                "label": "Verify",
                "content": "Set $x = 0$: $(0-4)^2 + (y+1)^2 = 16 \\Rightarrow 16 + (y+1)^2 = 16 \\Rightarrow y = -1$. One point: $(0, -1)$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "For what value of $r$ does $(x - 4)^2 + (y + 1)^2 = r^2$ intersect the $y$-axis at exactly one point?",
            "answer": "Set $x = 0$: $(0-4)^2 + (y+1)^2 = 16 \\Rightarrow 16 + (y+1)^2 = 16 \\Rightarrow y = -1$. One point: $(0, -1)$."
          }
        ]
      }
    }
  },
  "24": {
    "moduleId": "circles",
    "title": "Intersecting Y-Axis at One Point (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Use DESMOS to visually verify axis tangency — graph the circle equation and observe the intersection.",
        "blocks": [
          {
            "type": "heading",
            "content": "Intersecting Y-Axis at One Point (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Intersecting Y-Axis at One Point (DESMOS Method) (Domain, Range & Intersections) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Intersecting Y-Axis at One Point (DESMOS Method) (Domain, Range & Intersections) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. Now, this exact question can also be solved using Desmos. You can simply enter the equations of your answer choices exactly the way they're given and see how many times they intersect the y- axis. If we look at answer choice A, notice that this circl."
          },
          {
            "type": "formula",
            "label": "Intersecting Y-Axis at One Point (DESMOS Method) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Intersecting Y-Axis at One Point (DESMOS Method) (Domain, Range & Intersections) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Intersecting Y-Axis at One Point (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Use DESMOS to verify whether $(x - 5)^2 + (y - 3)^2 = 25$ is tangent to the $y$-axis.",
            "steps": [
              {
                "label": "Graph it",
                "content": "Enter $(x - 5)^2 + (y - 3)^2 = 25$ into DESMOS."
              },
              {
                "label": "Observe",
                "content": "The circle touches the $y$-axis at exactly one point: $(0, 3)$."
              },
              {
                "label": "Verify algebraically",
                "content": "Center $(5, 3)$, $r = 5$. Distance to $y$-axis $= |5| = 5 = r$. Tangent confirmed."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Use DESMOS to verify whether $(x - 5)^2 + (y - 3)^2 = 25$ is tangent to the $y$-axis.",
            "answer": "Center $(5, 3)$, $r = 5$. Distance to $y$-axis $= |5| = 5 = r$. Tangent confirmed."
          }
        ]
      }
    }
  },
  "25": {
    "moduleId": "circles",
    "title": "Completing the Square for Circles",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "When a circle equation is given in expanded (general) form, completing the square converts it to standard form so you can read the center and radius.",
        "blocks": [
          {
            "type": "heading",
            "content": "Completing the Square for Circles"
          },
          {
            "type": "text",
            "content": "Completing the Square for Circles (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Completing the Square for Circles (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, for $x^2 + x + y^2 + y = \\frac{199}{2}$, complete the square: $\\left(x + \\frac{1}{2}\\right)^2 + \\left(y + \\frac{1}{2}\\right)^2 = \\frac{199}{2} + \\frac{1}{4} + \\frac{1}{4} = 100$, so the radius is $\\sqrt{100} = 10$."
          },
          {
            "type": "diagramRef",
            "visualType": "parabolaFromGraphDiagram",
            "description": "Completing the square converts standard form to vertex form, revealing the turning point."
          },
          {
            "type": "formula",
            "label": "Completing the Square for Circles — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Completing the Square for Circles (Converting to Standard Form) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Completing the Square for Circles\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Write $x^2 + y^2 - 6x + 10y + 18 = 0$ in standard form. Find the center and radius.",
            "steps": [
              {
                "label": "Group & move constant",
                "content": "$(x^2 - 6x) + (y^2 + 10y) = -18$"
              },
              {
                "label": "Complete square for $x$",
                "content": "Half of $-6$ is $-3$; $(-3)^2 = 9$. Add $9$ to both sides: $(x^2 - 6x + 9) + (y^2 + 10y) = -18 + 9$"
              },
              {
                "label": "Complete square for $y$",
                "content": "Half of $10$ is $5$; $5^2 = 25$. Add $25$ to both sides: $(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$"
              },
              {
                "label": "Factor",
                "content": "$(x - 3)^2 + (y + 5)^2 = 16$"
              },
              {
                "label": "Read off",
                "content": "Center $= (3, -5)$, radius $= \\sqrt{16} = 4$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Convert $x^2 + y^2 + 8x - 2y - 8 = 0$ to standard form and find the radius.",
            "answer": "$(x^2 + 8x + 16) + (y^2 - 2y + 1) = 8 + 16 + 1 = 25$. $(x + 4)^2 + (y - 1)^2 = 25$. Radius $= 5$."
          }
        ]
      }
    }
  },
  "26": {
    "moduleId": "circles",
    "title": "Deriving Standard Form to Determine Radius #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complete the square on a general-form circle equation to convert it to standard form and extract the radius.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form to Determine Radius #1"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form to Determine Radius #1 (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form to Determine Radius #1 (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. As above, completing the square on $x^2 + x + y^2 + y = \\frac{199}{2}$ gives $\\left(x + \\frac{1}{2}\\right)^2 + \\left(y + \\frac{1}{2}\\right)^2 = 100$, so $r = 10$."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form to Determine Radius #1 — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form to Determine Radius #1 (Converting to Standard Form) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form to Determine Radius #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Find the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.",
            "steps": [
              {
                "label": "Group",
                "content": "$(x^2 + 8x) + (y^2 - 2y) = 8$"
              },
              {
                "label": "Complete $x$",
                "content": "$\\left(\\frac{8}{2}\\right)^2 = 16$. Add to both sides: $(x^2 + 8x + 16) + (y^2 - 2y) = 24$"
              },
              {
                "label": "Complete $y$",
                "content": "$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x + 4)^2 + (y^2 - 2y + 1) = 25$"
              },
              {
                "label": "Factor",
                "content": "$(x + 4)^2 + (y - 1)^2 = 25$"
              },
              {
                "label": "Radius",
                "content": "$r = \\sqrt{25} = 5$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.",
            "answer": "$r = \\sqrt{25} = 5$"
          }
        ]
      }
    }
  },
  "27": {
    "moduleId": "circles",
    "title": "Deriving Standard Form — Radius #1 (DESMOS)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Use DESMOS to verify your algebraic conversion from general form to standard form and confirm the radius visually.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form — Radius #1 (DESMOS)"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form — Radius #1 (DESMOS) (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form — Radius #1 (DESMOS) (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. Now this exact question can also be solved using only Desmos. What you do is you take the equation just the way it is given to you and enter it into Desmos and you'll get the graph of a circle. Now Desmos always gives you the maximum and the minimum."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form — Radius #1 (DESMOS) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form — Radius #1 (DESMOS) (Converting to Standard Form) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form — Radius #1 (DESMOS)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Verify that $x^2 + y^2 + 8x - 2y - 8 = 0$ converts to $(x + 4)^2 + (y - 1)^2 = 25$ using DESMOS.",
            "steps": [
              {
                "label": "Line 1",
                "content": "Type: $x^2 + y^2 + 8x - 2y - 8 = 0$"
              },
              {
                "label": "Line 2",
                "content": "Type: $(x + 4)^2 + (y - 1)^2 = 25$"
              },
              {
                "label": "Observe",
                "content": "Both produce the same circle centered at $(-4, 1)$ with radius $5$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Verify that $x^2 + y^2 + 8x - 2y - 8 = 0$ converts to $(x + 4)^2 + (y - 1)^2 = 25$ using DESMOS.",
            "answer": "Both produce the same circle centered at $(-4, 1)$ with radius $5$."
          }
        ]
      }
    }
  },
  "28": {
    "moduleId": "circles",
    "title": "Deriving Standard Form — Center #1 (DESMOS)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Find the center of a circle in general form using the shortcut $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$, then verify with DESMOS.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form — Center #1 (DESMOS)"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form — Center #1 (DESMOS) (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form — Center #1 (DESMOS) (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. Now a lot of you might ask well okay this method works to find the radius but does this method also work to find the circle center. Yes it does. After you have extracted the maximum and the minimum point you can simply find the midpoint between the t."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form — Center #1 (DESMOS) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form — Center #1 (DESMOS) (Converting to Standard Form) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form — Center #1 (DESMOS)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Find the center of $x^2 + y^2 - 10x + 4y + 13 = 0$.",
            "steps": [
              {
                "label": "Identify coefficients",
                "content": "$D = -10$, $E = 4$"
              },
              {
                "label": "Center shortcut",
                "content": "$\\left(-\\frac{-10}{2}, -\\frac{4}{2}\\right) = (5, -2)$"
              },
              {
                "label": "Verify (optional)",
                "content": "Graph in DESMOS: the circle is centered at $(5, -2)$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the center of $x^2 + y^2 - 10x + 4y + 13 = 0$.",
            "answer": "Graph in DESMOS: the circle is centered at $(5, -2)$."
          }
        ]
      }
    }
  },
  "29": {
    "moduleId": "circles",
    "title": "Deriving Standard Form to Determine Radius #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A second completing-the-square example with coefficients that produce non-perfect-square radii.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form to Determine Radius #2"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form to Determine Radius #2 (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form to Determine Radius #2 (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, rewrite the general equation $x^2 + y^2 + Dx + Ey + F = 0$ into standard form by completing the square; the right-hand side is $r^2$, so the radius is its square root."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form to Determine Radius #2 — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form to Determine Radius #2 (Converting to Standard Form) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form to Determine Radius #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Find the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$.",
            "steps": [
              {
                "label": "Group",
                "content": "$(x^2 - 2x) + (y^2 + 6y) = 10$"
              },
              {
                "label": "Complete $x$",
                "content": "$\\left(\\frac{-2}{2}\\right)^2 = 1$. Add to both sides: $(x^2 - 2x + 1) + (y^2 + 6y) = 11$"
              },
              {
                "label": "Complete $y$",
                "content": "$\\left(\\frac{6}{2}\\right)^2 = 9$. Add to both sides: $(x - 1)^2 + (y + 3)^2 = 20$"
              },
              {
                "label": "Radius",
                "content": "$r = \\sqrt{20} = 2\\sqrt{5}$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$.",
            "answer": "$r = \\sqrt{20} = 2\\sqrt{5}$"
          }
        ]
      }
    }
  },
  "30": {
    "moduleId": "circles",
    "title": "Deriving Standard Form — Radius #2 (DESMOS)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Verify the radius found by completing the square using DESMOS — especially useful when the radius involves a radical.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form — Radius #2 (DESMOS)"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form — Radius #2 (DESMOS) (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form — Radius #2 (DESMOS) (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. As above, graph the equation in DESMOS; the radius is the distance from the center to any point on the circle, read directly from the plot."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form — Radius #2 (DESMOS) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form — Radius #2 (DESMOS) (Converting to Standard Form) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form — Radius #2 (DESMOS)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Verify that the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$ is $2\\sqrt{5}$ using DESMOS.",
            "steps": [
              {
                "label": "Graph",
                "content": "Enter $x^2 + y^2 - 2x + 6y - 10 = 0$ in DESMOS."
              },
              {
                "label": "Center",
                "content": "The circle is centered at approximately $(1, -3)$."
              },
              {
                "label": "Check radius",
                "content": "Rightmost point at $x \\approx 5.47$. So $r \\approx 5.47 - 1 = 4.47 \\approx 2\\sqrt{5}$. Confirmed."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Verify that the radius of $x^2 + y^2 - 2x + 6y - 10 = 0$ is $2\\sqrt{5}$ using DESMOS.",
            "answer": "Rightmost point at $x \\approx 5.47$. So $r \\approx 5.47 - 1 = 4.47 \\approx 2\\sqrt{5}$. Confirmed."
          }
        ]
      }
    }
  },
  "31": {
    "moduleId": "circles",
    "title": "Deriving Standard Form — Center #2 (DESMOS)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A second DESMOS-assisted example: convert a general form equation, find the center, and verify graphically.",
        "blocks": [
          {
            "type": "heading",
            "content": "Deriving Standard Form — Center #2 (DESMOS)"
          },
          {
            "type": "text",
            "content": "Deriving Standard Form — Center #2 (DESMOS) (Converting to Standard Form) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Deriving Standard Form — Center #2 (DESMOS) (Converting to Standard Form) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, in DESMOS the center is the midpoint of the circle's extreme points: average the greatest and least $x$-values for the center's $x$, and the greatest and least $y$-values for its $y$."
          },
          {
            "type": "formula",
            "label": "Deriving Standard Form — Center #2 (DESMOS) — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Deriving Standard Form — Center #2 (DESMOS) (Converting to Standard Form) problems is arc length proportion error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Deriving Standard Form — Center #2 (DESMOS)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Find the center of $x^2 + y^2 - 14x + 8y + 1 = 0$ and verify with DESMOS.",
            "steps": [
              {
                "label": "Shortcut",
                "content": "$D = -14$, $E = 8$. Center $= \\left(-\\frac{-14}{2}, -\\frac{8}{2}\\right) = (7, -4)$"
              },
              {
                "label": "Full verification",
                "content": "$(x^2 - 14x + 49) + (y^2 + 8y + 16) = -1 + 49 + 16 = 64$. $(x - 7)^2 + (y + 4)^2 = 64$. Center $(7, -4)$."
              },
              {
                "label": "DESMOS",
                "content": "Graph confirms center at $(7, -4)$, radius $= 8$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the center of $x^2 + y^2 - 14x + 8y + 1 = 0$ and verify with DESMOS.",
            "answer": "Graph confirms center at $(7, -4)$, radius $= 8$."
          }
        ]
      }
    }
  },
  "32": {
    "moduleId": "circles",
    "title": "Tangent Lines to a Circle",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A tangent line touches a circle at exactly one point and is always perpendicular to the radius at that point.",
        "blocks": [
          {
            "type": "heading",
            "content": "Tangent Lines to a Circle"
          },
          {
            "type": "text",
            "content": "Tangent Lines to a Circle (Tangent Lines) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Tangent Lines to a Circle (Tangent Lines) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. For example, if a circle is centered at $(-1, 1)$ and line $t$ is tangent at $(5, -4)$, then $t$ is perpendicular to the radius: the radius slope is $\\frac{-4 - 1}{5 - (-1)} = -\\frac{5}{6}$, so $t$ has slope $\\frac{6}{5}$ and passes through $(5, -4)$."
          },
          {
            "type": "formula",
            "label": "Tangent Lines to a Circle — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Tangent Lines to a Circle (Tangent Lines) problems is center form sign flip. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Tangent Lines to a Circle\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A circle has center $O$ and radius $5$. Point $P$ is $13$ units from $O$. A tangent from $P$ touches the circle at $T$. Find $PT$.",
            "steps": [
              {
                "label": "Set up",
                "content": "$OT \\perp PT$ (radius $\\perp$ tangent), so $\\triangle OTP$ is a right triangle."
              },
              {
                "label": "Known sides",
                "content": "$OT = 5$ (radius), $OP = 13$ (given)"
              },
              {
                "label": "Pythagorean theorem",
                "content": "$PT^2 + 25 = 169 \\Rightarrow PT^2 = 144$"
              },
              {
                "label": "Answer",
                "content": "$PT = 12$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the tangent line to $x^2 + y^2 = 100$ at the point $(6, 8)$.",
            "answer": "Center $(0,0)$. Radius slope $= \\frac{8}{6} = \\frac{4}{3}$. Tangent slope $= -\\frac{3}{4}$. Equation: $y - 8 = -\\frac{3}{4}(x - 6)$, simplifying to $y = -\\frac{3}{4}x + \\frac{25}{2}$."
          }
        ]
      }
    }
  },
  "33": {
    "moduleId": "circles",
    "title": "Tangent Line to a Circle Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A full tangent-line example: find the equation of a tangent to a circle at a given point using the perpendicularity property.",
        "blocks": [
          {
            "type": "heading",
            "content": "Tangent Line to a Circle Example"
          },
          {
            "type": "text",
            "content": "Tangent Line to a Circle Example (Tangent Lines) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Tangent Line to a Circle Example (Tangent Lines) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert wording into radius-first quantities immediately. As above, the tangent at $(5, -4)$ is perpendicular to the radius from $(-1, 1)$: radius slope $-\\frac{5}{6}$ gives tangent slope $\\frac{6}{5}$, so any point on $t$ satisfies $y + 4 = \\frac{6}{5}(x - 5)$."
          },
          {
            "type": "formula",
            "label": "Tangent Line to a Circle Example — Core Rule",
            "content": "$$A = \\pi r^2,\\ C = 2\\pi r,\\ (x-h)^2 + (y-k)^2 = r^2$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Tangent Line to a Circle Example (Tangent Lines) problems is radius/diameter confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert wording into radius-first quantities immediately. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Tangent Line to a Circle Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Find the equation of the tangent line to $(x - 2)^2 + (y + 1)^2 = 50$ at the point $(7, 4)$.",
            "steps": [
              {
                "label": "Center",
                "content": "$(2, -1)$"
              },
              {
                "label": "Radius slope",
                "content": "$m_r = \\frac{4 - (-1)}{7 - 2} = \\frac{5}{5} = 1$"
              },
              {
                "label": "Tangent slope",
                "content": "$m_t = -\\frac{1}{1} = -1$"
              },
              {
                "label": "Point-slope form",
                "content": "$y - 4 = -1(x - 7)$"
              },
              {
                "label": "Simplify",
                "content": "$y = -x + 11$"
              },
              {
                "label": "Verify point on circle",
                "content": "$(7-2)^2 + (4+1)^2 = 25 + 25 = 50$ ✓"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the equation of the tangent line to $(x - 2)^2 + (y + 1)^2 = 50$ at the point $(7, 4)$.",
            "answer": "$(7-2)^2 + (4+1)^2 = 25 + 25 = 50$ ✓"
          }
        ]
      }
    }
  }
};
