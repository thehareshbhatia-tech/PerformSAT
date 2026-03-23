export const volumeLessonTabs = {
  "1": {
    "moduleId": "volume",
    "title": "What is Volume?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Volume measures the three-dimensional space inside a solid, always expressed in cubic units.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is Volume?"
          },
          {
            "type": "text",
            "content": "Volume measures the amount of 3D space inside a solid. While area is measured in square units ($\\text{cm}^2$), volume is measured in **cubic** units ($\\text{cm}^3$)."
          },
          {
            "type": "text",
            "content": "On the SAT, volume formulas are provided on the reference sheet — you do not need to memorize them. Your job is to (1) identify the correct shape, (2) plug in the right values (especially radius vs diameter), and (3) compute accurately."
          },
          {
            "type": "formula",
            "label": "What is Volume? — Core Rule",
            "content": "$$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "A cylinder has diameter $6$ and height $10$. Radius $= 3$. $V = \\pi(3)^2(10) = 90\\pi$. NOT $\\pi(6)^2(10)$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students use area formulas when volume is asked, or use diameter where the formula requires radius. The reference sheet says $r$, not $d$. Step 1: Identify the shape. Step 2: Check — did they give radius or diameter? If diameter, divide by $2$. Step 3: Plug into the formula from the reference sheet."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Write full formula with labels before plugging values. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is Volume?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Volume question tied to \"What is Volume?\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: unit scaling error). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (unit scaling error), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cylinder has radius $3$ and height $8$. A cone has the same base and height. What is the combined volume of both shapes in terms of $\\pi$?",
            "answer": "Cylinder: $V = \\pi(3)^2(8) = 72\\pi$. Cone: $V = \\frac{1}{3}(72\\pi) = 24\\pi$. Combined: $72\\pi + 24\\pi = 96\\pi$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "volume",
    "title": "Volume of a Rectangular Prism",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A rectangular prism (box) has the simplest volume formula: multiply length by width by height.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Rectangular Prism"
          },
          {
            "type": "text",
            "content": "A rectangular prism is just a box. Its volume is length $\\times$ width $\\times$ height. This is the simplest 3D volume formula."
          },
          {
            "type": "text",
            "content": "$V = lwh$. On the SAT, these appear in word problems: \"a box is $5$ cm long, $3$ cm wide, and $8$ cm tall.\" Just multiply the three dimensions. For surface area: $SA = 2(lw + lh + wh)$."
          },
          {
            "type": "formula",
            "label": "Volume of a Rectangular Prism — Core Rule",
            "content": "$$V=lwh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Box: $4 \\times 6 \\times 3$. Volume $= 72$ cubic units. Surface area $= 2(24 + 12 + 18) = 108$ square units."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse volume (cubic units) with surface area (square units). Volume fills the inside; surface area covers the outside. Volume = $lwh$ (one multiplication). Surface area = $2(lw + lh + wh)$ (sum of face areas). Check which one the question asks."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Label length, width, and height explicitly before multiplying. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Rectangular Prism\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A shipping box is $18$ inches long, $12$ inches wide, and $8$ inches tall. What is its volume?",
            "steps": [
              {
                "label": "Identify values",
                "content": "$l = 18$, $w = 12$, $h = 8$"
              },
              {
                "label": "Apply formula",
                "content": "$V = 18 \\times 12 \\times 8$"
              },
              {
                "label": "Compute",
                "content": "$V = 1{,}728 \\text{ in}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A rectangular pool is $15$ m long and $8$ m wide. It holds $600 \\text{ m}^3$ of water. What is the depth of the pool?",
            "answer": "$600 = 15 \\times 8 \\times d = 120d$. So $d = \\frac{600}{120} = 5$ m."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "volume",
    "title": "Simple Volume of Rectangular Prism",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct application of $V = lwh$ when all three dimensions are given explicitly.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Rectangular Prism"
          },
          {
            "type": "text",
            "content": "A rectangular prism is just a box. Its volume is length $\\times$ width $\\times$ height. This is the simplest 3D volume formula."
          },
          {
            "type": "text",
            "content": "$V = lwh$. On the SAT, these appear in word problems: \"a box is $5$ cm long, $3$ cm wide, and $8$ cm tall.\" Just multiply the three dimensions. For surface area: $SA = 2(lw + lh + wh)$."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Rectangular Prism — Core Rule",
            "content": "$$V=lwh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Box: $4 \\times 6 \\times 3$. Volume $= 72$ cubic units. Surface area $= 2(24 + 12 + 18) = 108$ square units."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse volume (cubic units) with surface area (square units). Volume fills the inside; surface area covers the outside. Volume = $lwh$ (one multiplication). Surface area = $2(lw + lh + wh)$ (sum of face areas). Check which one the question asks."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Label length, width, and height explicitly before multiplying. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Rectangular Prism\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A storage bin is $2.5$ feet long, $1.5$ feet wide, and $2$ feet deep. How many cubic feet can it hold?",
            "steps": [
              {
                "label": "Identify values",
                "content": "$l = 2.5$, $w = 1.5$, $h = 2$"
              },
              {
                "label": "Multiply",
                "content": "$V = 2.5 \\times 1.5 \\times 2 = 7.5 \\text{ ft}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A storage bin is $2.5$ feet long, $1.5$ feet wide, and $2$ feet deep. How many cubic feet can it hold?",
            "answer": "$V = 2.5 \\times 1.5 \\times 2 = 7.5 \\text{ ft}^3$"
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "volume",
    "title": "Complex Volume of Rectangular Prism",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multi-step rectangular prism problems combine $V = lwh$ with algebra, unit conversions, or shape comparisons.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Volume of Rectangular Prism"
          },
          {
            "type": "text",
            "content": "A rectangular prism is just a box. Its volume is length $\\times$ width $\\times$ height. This is the simplest 3D volume formula."
          },
          {
            "type": "text",
            "content": "$V = lwh$. On the SAT, these appear in word problems: \"a box is $5$ cm long, $3$ cm wide, and $8$ cm tall.\" Just multiply the three dimensions. For surface area: $SA = 2(lw + lh + wh)$."
          },
          {
            "type": "formula",
            "label": "Complex Volume of Rectangular Prism — Core Rule",
            "content": "$$V=lwh$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Box: $4 \\times 6 \\times 3$. Volume $= 72$ cubic units. Surface area $= 2(24 + 12 + 18) = 108$ square units."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students confuse volume (cubic units) with surface area (square units). Volume fills the inside; surface area covers the outside. Volume = $lwh$ (one multiplication). Surface area = $2(lw + lh + wh)$ (sum of face areas). Check which one the question asks."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Label length, width, and height explicitly before multiplying. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Volume of Rectangular Prism\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A crate is $3$ ft long, $18$ in wide, and $2$ ft tall. What is its volume in cubic inches?",
            "steps": [
              {
                "label": "Convert to inches",
                "content": "$l = 3 \\times 12 = 36$ in, $w = 18$ in, $h = 2 \\times 12 = 24$ in"
              },
              {
                "label": "Compute",
                "content": "$V = 36 \\times 18 \\times 24 = 15{,}552 \\text{ in}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A crate is $3$ ft long, $18$ in wide, and $2$ ft tall. What is its volume in cubic inches?",
            "answer": "$V = 36 \\times 18 \\times 24 = 15{,}552 \\text{ in}^3$"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "volume",
    "title": "Volume of a Cube",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A cube is a rectangular prism with all edges equal. Volume reduces to a single edge length cubed.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Cube"
          },
          {
            "type": "text",
            "content": "Volume of a Cube (Cube) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Volume of a Cube (Cube) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Identify the solid first: cube means one edge length, then cube it."
          },
          {
            "type": "formula",
            "label": "Volume of a Cube — Core Rule",
            "content": "$$V=s^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Volume of a Cube (Cube) problems is using cylinder/cone/sphere formulas on cube problems. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Identify the solid first: cube means one edge length, then cube it. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Cube\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A cube has a volume of $343 \\text{ cm}^3$. What is the total surface area?",
            "steps": [
              {
                "label": "Find side",
                "content": "$s = \\sqrt[3]{343} = 7$ cm"
              },
              {
                "label": "Surface area",
                "content": "$SA = 6(7)^2 = 6 \\times 49 = 294 \\text{ cm}^2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The side length of Cube B is twice the side length of Cube A. If Cube A has volume $27$, what is the volume of Cube B?",
            "answer": "$s_A = \\sqrt[3]{27} = 3$. $s_B = 2(3) = 6$. $V_B = 6^3 = 216$. Shortcut: doubling every linear dimension multiplies volume by $2^3 = 8$, so $V_B = 8 \\times 27 = 216$."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "volume",
    "title": "Simple Volume of Cube Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct computation of cube volume from a given side length, or side length from a given volume.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Cube Example"
          },
          {
            "type": "text",
            "content": "Simple Volume of Cube Example (Cube) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Volume of Cube Example (Cube) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Identify the solid first: cube means one edge length, then cube it."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Cube Example — Core Rule",
            "content": "$$V=s^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Volume of Cube Example (Cube) problems is using cylinder/cone/sphere formulas on cube problems. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Identify the solid first: cube means one edge length, then cube it. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Cube Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A cube has an edge length of $6$ cm. What is the volume, and what is the area of one face?",
            "steps": [
              {
                "label": "Volume",
                "content": "$V = 6^3 = 216 \\text{ cm}^3$"
              },
              {
                "label": "Face area",
                "content": "$A = 6^2 = 36 \\text{ cm}^2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cube has an edge length of $6$ cm. What is the volume, and what is the area of one face?",
            "answer": "$A = 6^2 = 36 \\text{ cm}^2$"
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "volume",
    "title": "Volume of a Cylinder",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A cylinder is a circle extruded upward. Multiply the circular base area by the height.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Cylinder"
          },
          {
            "type": "text",
            "content": "A cylinder is a circle extended into 3D. Its volume is the area of the circular base times the height: $V = \\pi r^2 h$."
          },
          {
            "type": "text",
            "content": "The formula $V = \\pi r^2 h$ combines the base area ($\\pi r^2$) with the height ($h$). On the SAT, the main trap is using diameter instead of radius."
          },
          {
            "type": "formula",
            "label": "Volume of a Cylinder — Core Rule",
            "content": "$$V=\\pi r^2h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Cylinder: diameter $= 8$, height $= 5$. Radius $= 4$. $V = \\pi(4)^2(5) = 80\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "If the problem says \"the diameter of the base is $10$,\" students plug $10$ into $r$, getting $V = 100\\pi h$ instead of the correct $V = 25\\pi h$. Circle \"radius\" or \"diameter\" in the problem. If diameter, divide by $2$ BEFORE plugging in. Write $r = d/2$ as your first step."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert diameter to radius before squaring. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Cylinder\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Volume question tied to \"Volume of a Cylinder\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: unit scaling error). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (unit scaling error), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cylindrical tank with radius $5$ ft and height $12$ ft is filled at a rate of $10\\pi$ cubic feet per minute. How many minutes to fill the tank completely?",
            "answer": "$V = \\pi(5)^2(12) = 300\\pi \\text{ ft}^3$. Time $= \\frac{300\\pi}{10\\pi} = 30$ minutes."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "volume",
    "title": "Simple Volume of Cylinder Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct application of $V = \\pi r^2 h$ when radius and height are given explicitly.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Cylinder Example"
          },
          {
            "type": "text",
            "content": "A cylinder is a circle extended into 3D. Its volume is the area of the circular base times the height: $V = \\pi r^2 h$."
          },
          {
            "type": "text",
            "content": "The formula $V = \\pi r^2 h$ combines the base area ($\\pi r^2$) with the height ($h$). On the SAT, the main trap is using diameter instead of radius."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Cylinder Example — Core Rule",
            "content": "$$V=\\pi r^2h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Cylinder: diameter $= 8$, height $= 5$. Radius $= 4$. $V = \\pi(4)^2(5) = 80\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "If the problem says \"the diameter of the base is $10$,\" students plug $10$ into $r$, getting $V = 100\\pi h$ instead of the correct $V = 25\\pi h$. Circle \"radius\" or \"diameter\" in the problem. If diameter, divide by $2$ BEFORE plugging in. Write $r = d/2$ as your first step."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert diameter to radius before squaring. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Cylinder Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A cylindrical jar has a radius of $4$ cm and a height of $15$ cm. What is the volume in terms of $\\pi$?",
            "steps": [
              {
                "label": "Square the radius",
                "content": "$r^2 = 4^2 = 16$"
              },
              {
                "label": "Multiply by height",
                "content": "$16 \\times 15 = 240$"
              },
              {
                "label": "Attach $\\pi$",
                "content": "$V = 240\\pi \\text{ cm}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cylindrical jar has a radius of $4$ cm and a height of $15$ cm. What is the volume in terms of $\\pi$?",
            "answer": "$V = 240\\pi \\text{ cm}^3$"
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "volume",
    "title": "Complex Volume of Cylinder Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Multi-step cylinder problems involve reverse-solving, comparing cylinders, or combining volume with fill rates.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Volume of Cylinder Example"
          },
          {
            "type": "text",
            "content": "A cylinder is a circle extended into 3D. Its volume is the area of the circular base times the height: $V = \\pi r^2 h$."
          },
          {
            "type": "text",
            "content": "The formula $V = \\pi r^2 h$ combines the base area ($\\pi r^2$) with the height ($h$). On the SAT, the main trap is using diameter instead of radius."
          },
          {
            "type": "formula",
            "label": "Complex Volume of Cylinder Example — Core Rule",
            "content": "$$V=\\pi r^2h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Cylinder: diameter $= 8$, height $= 5$. Radius $= 4$. $V = \\pi(4)^2(5) = 80\\pi$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "If the problem says \"the diameter of the base is $10$,\" students plug $10$ into $r$, getting $V = 100\\pi h$ instead of the correct $V = 25\\pi h$. Circle \"radius\" or \"diameter\" in the problem. If diameter, divide by $2$ BEFORE plugging in. Write $r = d/2$ as your first step."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert diameter to radius before squaring. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Volume of Cylinder Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "Cylinder A has radius $3$ and height $10$. Cylinder B has twice the radius and half the height. What is $\\frac{V_B}{V_A}$?",
            "steps": [
              {
                "label": "Cylinder A",
                "content": "$V_A = \\pi(3)^2(10) = 90\\pi$"
              },
              {
                "label": "Cylinder B",
                "content": "$r_B = 6$, $h_B = 5$. $V_B = \\pi(6)^2(5) = 180\\pi$"
              },
              {
                "label": "Ratio",
                "content": "$\\frac{180\\pi}{90\\pi} = 2$"
              },
              {
                "label": "Shortcut",
                "content": "Factor analysis: $\\left(\\frac{6}{3}\\right)^2 \\times \\frac{5}{10} = 4 \\times \\frac{1}{2} = 2$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Cylinder A has radius $3$ and height $10$. Cylinder B has twice the radius and half the height. What is $\\frac{V_B}{V_A}$?",
            "answer": "Factor analysis: $\\left(\\frac{6}{3}\\right)^2 \\times \\frac{5}{10} = 4 \\times \\frac{1}{2} = 2$"
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "volume",
    "title": "Volume of a Sphere",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A sphere's volume depends solely on its radius. The $r^3$ dependence makes scaling questions especially prominent.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Sphere"
          },
          {
            "type": "text",
            "content": "Volume of a Sphere (Sphere) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Volume of a Sphere (Sphere) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$."
          },
          {
            "type": "formula",
            "label": "Volume of a Sphere — Core Rule",
            "content": "$$V=\\frac{4}{3}\\pi r^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Volume of a Sphere (Sphere) problems is using the area formula instead of sphere volume. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Sphere\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Volume question tied to \"Volume of a Sphere\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: unit scaling error). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (unit scaling error), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A sphere has a volume of $288\\pi$. What is its radius?",
            "answer": "$\\frac{4}{3}\\pi r^3 = 288\\pi \\Rightarrow r^3 = 288 \\times \\frac{3}{4} = 216 \\Rightarrow r = \\sqrt[3]{216} = 6$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "volume",
    "title": "Simple Volume of Sphere Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct application of $V = \\frac{4}{3}\\pi r^3$ with a given radius or diameter.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Sphere Example"
          },
          {
            "type": "text",
            "content": "Simple Volume of Sphere Example (Sphere) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Volume of Sphere Example (Sphere) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Sphere Example — Core Rule",
            "content": "$$V=\\frac{4}{3}\\pi r^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Volume of Sphere Example (Sphere) problems is using the area formula instead of sphere volume. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Sphere Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A spherical ornament has a diameter of $6$ cm. What is its volume in terms of $\\pi$?",
            "steps": [
              {
                "label": "Find radius",
                "content": "$r = \\frac{6}{2} = 3$ cm"
              },
              {
                "label": "Cube the radius",
                "content": "$3^3 = 27$"
              },
              {
                "label": "Apply formula",
                "content": "$V = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi \\text{ cm}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A spherical ornament has a diameter of $6$ cm. What is its volume in terms of $\\pi$?",
            "answer": "$V = \\frac{4}{3}\\pi(27) = \\frac{108\\pi}{3} = 36\\pi \\text{ cm}^3$"
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "volume",
    "title": "Complex Volume of Sphere Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Advanced sphere problems involve hemispheres, reverse-solving for radius, or comparing two spheres.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Volume of Sphere Example"
          },
          {
            "type": "text",
            "content": "Complex Volume of Sphere Example (Sphere) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Volume of Sphere Example (Sphere) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$."
          },
          {
            "type": "formula",
            "label": "Complex Volume of Sphere Example — Core Rule",
            "content": "$$V=\\frac{4}{3}\\pi r^3$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Volume of Sphere Example (Sphere) problems is using the area formula instead of sphere volume. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Check exponent and coefficient: sphere volume always includes $\\frac{4}{3}$ and $r^3$. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Volume of Sphere Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Sphere A has radius $r$ and Sphere B has radius $3r$. Express $V_B$ as a multiple of $V_A$.",
            "steps": [
              {
                "label": "Ratio",
                "content": "$\\frac{V_B}{V_A} = \\frac{\\frac{4}{3}\\pi(3r)^3}{\\frac{4}{3}\\pi r^3} = \\frac{(3r)^3}{r^3} = \\frac{27r^3}{r^3} = 27$"
              },
              {
                "label": "Result",
                "content": "$V_B = 27\\, V_A$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Sphere A has radius $r$ and Sphere B has radius $3r$. Express $V_B$ as a multiple of $V_A$.",
            "answer": "$V_B = 27\\, V_A$"
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "volume",
    "title": "Volume of a Cone",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A cone is one-third of a cylinder with the same base and height. The $\\frac{1}{3}$ factor is the defining feature.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Cone"
          },
          {
            "type": "text",
            "content": "Volume of a Cone (Cone) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Volume of a Cone (Cone) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute cylinder volume first, then take one-third."
          },
          {
            "type": "formula",
            "label": "Volume of a Cone — Core Rule",
            "content": "$$V=\\frac{1}{3}\\pi r^2h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Volume of a Cone (Cone) problems is forgetting the $\\frac{1}{3}$ in cone volume. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute cylinder volume first, then take one-third. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Cone\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "An ice cream cone has diameter $8$ cm and height $12$ cm. What is the volume in terms of $\\pi$?",
            "steps": [
              {
                "label": "Find radius",
                "content": "$r = \\frac{8}{2} = 4$ cm"
              },
              {
                "label": "Apply formula",
                "content": "$V = \\frac{1}{3}\\pi(4)^2(12) = \\frac{1}{3}\\pi(16)(12) = \\frac{192\\pi}{3}$"
              },
              {
                "label": "Simplify",
                "content": "$V = 64\\pi \\text{ cm}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cone and a cylinder share the same circular base (radius $6$) and the same height. The cylinder's volume is $360pi$. What is the cone's volume?",
            "answer": "$V_{\\text{cone}} = \\frac{1}{3} V_{\\text{cylinder}} = \\frac{360\\pi}{3} = 120\\pi$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "volume",
    "title": "Simple Volume of Cone Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct application of $V = \\frac{1}{3}\\pi r^2 h$ with given radius (or diameter) and height.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Cone Example"
          },
          {
            "type": "text",
            "content": "Simple Volume of Cone Example (Cone) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Volume of Cone Example (Cone) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute cylinder volume first, then take one-third."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Cone Example — Core Rule",
            "content": "$$V=\\frac{1}{3}\\pi r^2h$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Volume of Cone Example (Cone) problems is forgetting the $\\frac{1}{3}$ in cone volume. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute cylinder volume first, then take one-third. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Cone Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume in terms of $\\pi$?",
            "steps": [
              {
                "label": "Compute $r^2 \\cdot h$",
                "content": "$6^2 \\times 10 = 360$"
              },
              {
                "label": "Divide by $3$",
                "content": "$\\frac{360}{3} = 120$"
              },
              {
                "label": "Final answer",
                "content": "$V = 120\\pi \\text{ cm}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume in terms of $\\pi$?",
            "answer": "$V = 120\\pi \\text{ cm}^3$"
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "volume",
    "title": "Volume of a Triangular Prism",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A triangular prism has two triangular faces connected by rectangles. Volume equals the triangle's area times the prism's length.",
        "blocks": [
          {
            "type": "heading",
            "content": "Volume of a Triangular Prism"
          },
          {
            "type": "text",
            "content": "Volume of a Triangular Prism (Triangular Prism) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Volume of a Triangular Prism (Triangular Prism) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. First find the triangular base area, then multiply by prism length."
          },
          {
            "type": "formula",
            "label": "Volume of a Triangular Prism — Core Rule",
            "content": "$$V=Bh=\\left(\\frac{1}{2}b_\\triangle h_\\triangle\\right)L$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Volume of a Triangular Prism (Triangular Prism) problems is using triangle area alone and forgetting prism length. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "First find the triangular base area, then multiply by prism length. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Volume of a Triangular Prism\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Volume question tied to \"Volume of a Triangular Prism\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: using area formula instead of volume). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$V_{\\text{cyl}} = \\pi r^2 h,\\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h,\\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (using area formula instead of volume), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A triangular prism has a volume of $180 ext{ in}^3$. Its triangular face has base $12$ in and height $5$ in. What is the prism's length?",
            "answer": "Triangle area $= \\frac{1}{2}(12)(5) = 30 \\text{ in}^2$. Length $= \\frac{180}{30} = 6$ in."
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "volume",
    "title": "Simple Volume of Triangular Prism Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Direct application of $V = \\frac{1}{2}bh \\cdot l$ with given triangle dimensions and prism length.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Volume of Triangular Prism Example"
          },
          {
            "type": "text",
            "content": "Simple Volume of Triangular Prism Example (Triangular Prism) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Volume of Triangular Prism Example (Triangular Prism) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. First find the triangular base area, then multiply by prism length."
          },
          {
            "type": "formula",
            "label": "Simple Volume of Triangular Prism Example — Core Rule",
            "content": "$$V=Bh=\\left(\\frac{1}{2}b_\\triangle h_\\triangle\\right)L$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Volume of Triangular Prism Example (Triangular Prism) problems is using triangle area alone and forgetting prism length. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "First find the triangular base area, then multiply by prism length. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Volume of Triangular Prism Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A wedge-shaped doorstop has a triangular cross-section with base $5$ cm and height $3$ cm. The doorstop is $12$ cm long. What is its volume?",
            "steps": [
              {
                "label": "Triangle area",
                "content": "$A = \\frac{1}{2}(5)(3) = 7.5 \\text{ cm}^2$"
              },
              {
                "label": "Volume",
                "content": "$V = 7.5 \\times 12 = 90 \\text{ cm}^3$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A wedge-shaped doorstop has a triangular cross-section with base $5$ cm and height $3$ cm. The doorstop is $12$ cm long. What is its volume?",
            "answer": "$V = 7.5 \\times 12 = 90 \\text{ cm}^3$"
          }
        ]
      }
    }
  }
};
