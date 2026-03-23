export const percentsLessonTabs = {
  "1": {
    "moduleId": "percents",
    "title": "Introduction to Percents",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Percent means \"per hundred.\" Every percent problem reduces to fractions and decimals — master the conversions and the rest follows.",
        "blocks": [
          {
            "type": "heading",
            "content": "Introduction to Percents"
          },
          {
            "type": "text",
            "content": "Percent means \"per hundred.\" $45\\%$ simply means $45$ out of $100$, or $0.45$ as a decimal, or $\\frac{45}{100}$ as a fraction."
          },
          {
            "type": "text",
            "content": "Converting between forms: Percent → decimal: divide by $100$ (move decimal left $2$). Decimal → percent: multiply by $100$. Fraction → percent: divide numerator by denominator, then multiply by $100$. The SAT tests whether you can move fluidly between these forms."
          },
          {
            "type": "formula",
            "label": "Introduction to Percents — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "$72\\% = 0.72 = \\frac{72}{100} = \\frac{18}{25}$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students move the decimal the wrong direction: $5\\% = 0.50$ (wrong) instead of $0.05$ (correct). Percent to decimal: always move the decimal point two places LEFT. $5\\% = 0.05$, $150\\% = 1.50$."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Introduction to Percents\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Percents question tied to \"Introduction to Percents\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: double percent change direction mistake). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (double percent change direction mistake), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Express $\\frac{7}{20}$ as a percent.",
            "answer": "$7 \\div 20 = 0.35$. Then $0.35 \\times 100 = 35\\%$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "percents",
    "title": "Percent Of Questions",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "\"What is 30% of 200?\" is the most common percent question format. It always translates to multiplication.",
        "blocks": [
          {
            "type": "heading",
            "content": "Percent Of Questions"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Percent Of Questions — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Percent Of Questions\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "What is $15\\%$ of $240$?",
            "steps": [
              {
                "label": "Convert",
                "content": "$15\\% = 0.15$"
              },
              {
                "label": "Multiply",
                "content": "$0.15 \\times 240 = 36$"
              },
              {
                "label": "Answer",
                "content": "$36$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$72$ is what percent of $240$?",
            "answer": "$\\frac{72}{240} = 0.30$. Then $0.30 \\times 100 = 30\\%$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "percents",
    "title": "Simple Percent Of #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Finding the part when the percent and whole are given: multiply the decimal form of the percent by the whole.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Percent Of #1"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Simple Percent Of #1 — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Percent Of #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A class has $120$ students. If $40\\%$ are enrolled in AP courses, how many students are in AP courses?",
            "steps": [
              {
                "label": "Convert",
                "content": "$40\\% = 0.40$"
              },
              {
                "label": "Multiply",
                "content": "$0.40 \\times 120 = 48$"
              },
              {
                "label": "Answer",
                "content": "$48$ students"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A class has $120$ students. If $40\\%$ are enrolled in AP courses, how many students are in AP courses?",
            "answer": "$48$ students"
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "percents",
    "title": "Simple Percent Of #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Finding the whole when the part and percent are given: divide the part by the decimal form of the percent.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Percent Of #2"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Simple Percent Of #2 — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Percent Of #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "$18$ is $30\\%$ of what number?",
            "steps": [
              {
                "label": "Convert",
                "content": "$30\\% = 0.30$"
              },
              {
                "label": "Divide",
                "content": "$\\frac{18}{0.30} = 60$"
              },
              {
                "label": "Verify",
                "content": "$0.30 \\times 60 = 18$ ✓"
              },
              {
                "label": "Answer",
                "content": "$60$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$18$ is $30\\%$ of what number?",
            "answer": "$60$"
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "percents",
    "title": "Simple Percent Of #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Finding the percent when the part and whole are given: divide the part by the whole, then multiply by 100.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Percent Of #3"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Simple Percent Of #3 — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Percent Of #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "$27$ is what percent of $90$?",
            "steps": [
              {
                "label": "Divide",
                "content": "$\\frac{27}{90} = 0.30$"
              },
              {
                "label": "Convert",
                "content": "$0.30 \\times 100 = 30\\%$"
              },
              {
                "label": "Answer",
                "content": "$30\\%$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$27$ is what percent of $90$?",
            "answer": "$30\\%$"
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "percents",
    "title": "Complex Percent Of",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex percent-of problems layer multiple percents or successive operations — translate each piece separately, then combine.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Percent Of"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Complex Percent Of — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Percent Of\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A store offers a $20\\%$ discount on a $\\$150$ jacket, then charges $8\\%$ sales tax on the discounted price. What is the final price?",
            "steps": [
              {
                "label": "Discount",
                "content": "$150 \\times 0.80 = 120$"
              },
              {
                "label": "Tax",
                "content": "$120 \\times 1.08 = 129.60$"
              },
              {
                "label": "Answer",
                "content": "$\\$129.60$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A store offers a $20\\%$ discount on a $\\$150$ jacket, then charges $8\\%$ sales tax on the discounted price. What is the final price?",
            "answer": "$\\$129.60$"
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "percents",
    "title": "Conceptual Percent Of",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Conceptual percent-of problems test understanding of what percent relationships mean — often without requiring computation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Conceptual Percent Of"
          },
          {
            "type": "text",
            "content": "\"What is $30\\%$ of $200$?\" translates directly to math: \"what\" = $x$, \"is\" = $=$, \"percent\" = $/100$, \"of\" = $\\times$. So: $x = 0.30 \\times 200 = 60$."
          },
          {
            "type": "text",
            "content": "The word \"of\" always means multiply. Set up the equation by translating English to math: **is** → $=$, **of** → $\\times$, **what** → $x$, **percent** → $\\div 100$. Then solve."
          },
          {
            "type": "formula",
            "label": "Conceptual Percent Of — Core Rule",
            "content": "$$\\text{part}=\\left(\\frac{p}{100}\\right)\\times\\text{whole}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "\"$45$ is what percent of $180$?\" → $45 = \\frac{x}{100} \\times 180$ → $x = \\frac{45 \\times 100}{180} = 25\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students reverse \"percent of\" vs \"what percent.\" \"$20$ is what percent of $80$?\" is $20 = \\frac{x}{100} \\times 80$, not $x = 0.20 \\times 80$. Translate word by word. \"Is\" places the equals sign. \"Of\" places multiplication. Solve for the unknown."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Translate words explicitly: is = equals, of = multiply, what = unknown. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Conceptual Percent Of\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "If $x$ is $30\\%$ of $y$, then $y$ is what percent of $x$?",
            "steps": [
              {
                "label": "Write equation",
                "content": "$x = 0.30y$"
              },
              {
                "label": "Solve for $y$",
                "content": "$y = \\frac{x}{0.30} = \\frac{10x}{3}$"
              },
              {
                "label": "Convert",
                "content": "$\\frac{10}{3} \\approx 3.\\overline{3}$, so $y \\approx 333.\\overline{3}\\%$ of $x$"
              },
              {
                "label": "Answer",
                "content": "$333\\frac{1}{3}\\%$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "If $x$ is $30\\%$ of $y$, then $y$ is what percent of $x$?",
            "answer": "$333\\frac{1}{3}\\%$"
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "percents",
    "title": "Percent Change",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Percent change measures how much a quantity grew or shrank relative to its starting value.",
        "blocks": [
          {
            "type": "heading",
            "content": "Percent Change"
          },
          {
            "type": "text",
            "content": "Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original."
          },
          {
            "type": "text",
            "content": "$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, \"by what percent did X increase?\" always means: difference divided by the ORIGINAL value."
          },
          {
            "type": "formula",
            "label": "Percent Change — Core Rule",
            "content": "$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$. Denominator = ORIGINAL value. Always. If the problem says \"increase,\" the original is the smaller number. If \"decrease,\" the original is the larger number."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Original value always belongs in the denominator. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Percent Change\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A store's original price is $\\$80$. A sign says \"$150\\%$ of the original price.\" What is the new price? What would the price be if it were \"increased by $150\\%$\" instead?",
            "steps": [
              {
                "label": "Translate \"150% of\"",
                "content": "\"$150\\%$ **of**\" means multiply directly: $1.50 \\times 80 = \\$120$."
              },
              {
                "label": "Translate \"increased by 150%\"",
                "content": "\"Increased **by** $150\\%$\" means add $150\\%$ of the original on top of the original: $80 + 1.50 \\times 80 = 80 + 120 = \\$200$. Equivalently, $\\times (1 + 1.50) = \\times 2.50$, so $2.50 \\times 80 = \\$200$."
              },
              {
                "label": "Compare",
                "content": "\"$150\\%$ of\" gives $\\$120$; \"increased by $150\\%$\" gives $\\$200$. The difference is $\\$80$ — the entire original price."
              },
              {
                "label": "Decision rule",
                "content": "**\"Of\"** → multiply the percent directly. **\"By\"** → add to $100\\%$ first, then multiply."
              },
              {
                "label": "Answer",
                "content": "\"$150\\%$ of the original price\" = $\\$120$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A stock price rises from $\\$40$ to $\\$50$. What is the percent increase?",
            "answer": "$\\frac{50 - 40}{40} \\times 100 = \\frac{10}{40} \\times 100 = 25\\%$ increase."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "percents",
    "title": "Simple Percent Change",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Simple percent change problems give two explicit values and ask for the percent increase or decrease — apply the formula directly.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Percent Change"
          },
          {
            "type": "text",
            "content": "Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original."
          },
          {
            "type": "text",
            "content": "$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, \"by what percent did X increase?\" always means: difference divided by the ORIGINAL value."
          },
          {
            "type": "formula",
            "label": "Simple Percent Change — Core Rule",
            "content": "$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$. Denominator = ORIGINAL value. Always. If the problem says \"increase,\" the original is the smaller number. If \"decrease,\" the original is the larger number."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Original value always belongs in the denominator. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Percent Change\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A gym had $200$ members last year and $230$ members this year. What is the percent increase?",
            "steps": [
              {
                "label": "Find change",
                "content": "$230 - 200 = 30$"
              },
              {
                "label": "Divide by original",
                "content": "$\\frac{30}{200} = 0.15$"
              },
              {
                "label": "Convert",
                "content": "$0.15 \\times 100 = 15\\%$"
              },
              {
                "label": "Answer",
                "content": "$15\\%$ increase"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A gym had $200$ members last year and $230$ members this year. What is the percent increase?",
            "answer": "$15\\%$ increase"
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "percents",
    "title": "Complex Percent Change #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Successive percent changes require multiplier chaining — multiply the individual multipliers rather than adding the percents.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Percent Change #1"
          },
          {
            "type": "text",
            "content": "Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original."
          },
          {
            "type": "text",
            "content": "$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, \"by what percent did X increase?\" always means: difference divided by the ORIGINAL value."
          },
          {
            "type": "formula",
            "label": "Complex Percent Change #1 — Core Rule",
            "content": "$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$. Denominator = ORIGINAL value. Always. If the problem says \"increase,\" the original is the smaller number. If \"decrease,\" the original is the larger number."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Original value always belongs in the denominator. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Percent Change #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A stock price increases by $25\\%$ on Monday and decreases by $25\\%$ on Tuesday. Is the price back to its original value?",
            "steps": [
              {
                "label": "Monday multiplier",
                "content": "A $25\\%$ increase means $\\times 1.25$."
              },
              {
                "label": "Tuesday multiplier",
                "content": "A $25\\%$ decrease means $\\times 0.75$."
              },
              {
                "label": "Combine multipliers",
                "content": "$1.25 \\times 0.75 = 0.9375$."
              },
              {
                "label": "Interpret",
                "content": "$0.9375 = 1 - 0.0625$, so the net effect is a $6.25\\%$ **decrease** — not $0\\%$. Equal-magnitude increases and decreases never cancel out."
              },
              {
                "label": "Answer",
                "content": "No. The stock ends $6.25\\%$ below its original price."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A stock price increases by $25\\%$ on Monday and decreases by $25\\%$ on Tuesday. Is the price back to its original value?",
            "answer": "No. Combined multiplier: $1.25 \\times 0.75 = 0.9375$, a net $6.25\\%$ decrease."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "percents",
    "title": "Complex Percent Change #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Finding an original value before a percent change requires dividing by the multiplier, not subtracting the percent from the result.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Percent Change #2"
          },
          {
            "type": "text",
            "content": "Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original."
          },
          {
            "type": "text",
            "content": "$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, \"by what percent did X increase?\" always means: difference divided by the ORIGINAL value."
          },
          {
            "type": "formula",
            "label": "Complex Percent Change #2 — Core Rule",
            "content": "$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$. Denominator = ORIGINAL value. Always. If the problem says \"increase,\" the original is the smaller number. If \"decrease,\" the original is the larger number."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Original value always belongs in the denominator. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Percent Change #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "After a $20\\%$ discount, a jacket costs $\\$56$. What was the original price?",
            "steps": [
              {
                "label": "Identify the multiplier",
                "content": "A $20\\%$ discount means the customer pays $80\\%$ of the original: multiplier $= 1 - 0.20 = 0.80$."
              },
              {
                "label": "Set up the equation",
                "content": "$\\text{Original} \\times 0.80 = 56$."
              },
              {
                "label": "Solve by dividing",
                "content": "$\\text{Original} = \\frac{56}{0.80} = 70$."
              },
              {
                "label": "Show the common mistake",
                "content": "Wrong approach: $20\\%$ of $56 = 11.20$, then $56 + 11.20 = 67.20$. This fails because $20\\%$ of $56$ is not $20\\%$ of the original — the discount was applied to the unknown original, not to $56$."
              },
              {
                "label": "Answer",
                "content": "The original price was $\\$70$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "After a $20\\%$ discount, a jacket costs $\\$56$. What was the original price?",
            "answer": "$\\frac{56}{0.80} = \\$70$. Dividing by the multiplier reverses the discount correctly."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "percents",
    "title": "Complex Percent Change #3",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Percent change between computed quantities — the \"original\" and \"new\" values themselves require calculation, often involving areas, volumes, or products.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Percent Change #3"
          },
          {
            "type": "text",
            "content": "Percent change measures how much a value increased or decreased relative to its **original** (starting) value. The denominator is always the original."
          },
          {
            "type": "text",
            "content": "$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Positive result = increase. Negative result = decrease. On the SAT, \"by what percent did X increase?\" always means: difference divided by the ORIGINAL value."
          },
          {
            "type": "formula",
            "label": "Complex Percent Change #3 — Core Rule",
            "content": "$$\\text{Percent change}=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Price goes from $\\$80$ to $\\$100$. Change $= \\frac{100 - 80}{80} \\times 100\\% = 25\\%$ increase."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the new value instead of the old value. If price goes from $\\$50$ to $\\$60$, the increase is $\\frac{10}{50} = 20\\%$, not $\\frac{10}{60} \\approx 16.7\\%$. Denominator = ORIGINAL value. Always. If the problem says \"increase,\" the original is the smaller number. If \"decrease,\" the original is the larger number."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Original value always belongs in the denominator. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Percent Change #3\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The radius of a circle increases by $15\\%$. By what percent does the area increase?",
            "steps": [
              {
                "label": "Area multiplier",
                "content": "$(1.15)^2 = 1.3225$"
              },
              {
                "label": "Net change",
                "content": "$(1.3225 - 1) \\times 100 = 32.25\\%$"
              },
              {
                "label": "Answer",
                "content": "The area increases by $32.25\\%$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The radius of a circle increases by $15\\%$. By what percent does the area increase?",
            "answer": "The area increases by $32.25\\%$"
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "percents",
    "title": "Percent Models",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The multiplier model turns repeated percent changes into a single exponential expression — the standard approach for growth and decay problems.",
        "blocks": [
          {
            "type": "heading",
            "content": "Percent Models"
          },
          {
            "type": "text",
            "content": "Percent Models (Percent Model Questions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Percent Models (Percent Model Questions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert percent language to decimal equations before solving."
          },
          {
            "type": "formula",
            "label": "Percent Models — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Percent Models (Percent Model Questions) problems is double percent change direction mistake. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Percent Models\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "SAT-style Percents question tied to \"Percent Models\": choose the fastest valid method, avoid the trap answer, and justify your final selection.",
            "steps": [
              {
                "label": "Recognize the SAT pattern",
                "content": "Identify the hidden structure first (module pattern: double percent change direction mistake). Convert wording to a clean algebraic setup before computing."
              },
              {
                "label": "Execute the most efficient method",
                "content": "Apply the core rule directly: $$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$. Keep signs/units explicit to prevent distractor-level mistakes."
              },
              {
                "label": "Trap audit + answer",
                "content": "Eliminate the most likely trap (double percent change direction mistake), then confirm the final choice matches the question target exactly."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A car depreciates by $15\\%$ per year. If worth $\\$24{,}000$ today, what will it be worth in $3$ years?",
            "answer": "Multiplier: $0.85$. $A = 24{,}000 \\times (0.85)^3 = 24{,}000 \\times 0.6141 \\approx \\$14{,}739$."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "percents",
    "title": "Simple Percent Model",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A simple percent model applies a single repeated percent change over time using $A = P(1 \\pm r)^t$.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Percent Model"
          },
          {
            "type": "text",
            "content": "Simple Percent Model (Percent Model Questions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Percent Model (Percent Model Questions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert percent language to decimal equations before solving."
          },
          {
            "type": "formula",
            "label": "Simple Percent Model — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Percent Model (Percent Model Questions) problems is reverse percent setup error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Percent Model\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "A $\\$1{,}000$ investment earns $6\\%$ interest per year. What is its value after $5$ years?",
            "steps": [
              {
                "label": "Identify",
                "content": "$P = 1{,}000$, $r = 0.06$, $t = 5$"
              },
              {
                "label": "Compute base",
                "content": "$1 + 0.06 = 1.06$"
              },
              {
                "label": "Apply",
                "content": "$A = 1{,}000 \\times (1.06)^5 = 1{,}000 \\times 1.3382 \\approx 1{,}338.23$"
              },
              {
                "label": "Answer",
                "content": "$\\$1{,}338.23$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A $\\$1{,}000$ investment earns $6\\%$ interest per year. What is its value after $5$ years?",
            "answer": "$\\$1{,}338.23$"
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "percents",
    "title": "Complex Percent Model",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Complex percent models involve solving for the rate, time, or initial value — or interpreting models where the compounding period differs from the exponent's time unit.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Percent Model"
          },
          {
            "type": "text",
            "content": "Complex Percent Model (Percent Model Questions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Percent Model (Percent Model Questions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert percent language to decimal equations before solving."
          },
          {
            "type": "formula",
            "label": "Complex Percent Model — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Percent Model (Percent Model Questions) problems is percent of vs percent increase confusion. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Percent Model\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The function $V(t) = 18{,}000(0.85)^t$ models a car's value where $t$ is years after purchase. What was the purchase price, and by what percent does the value decrease each year?",
            "steps": [
              {
                "label": "Initial value",
                "content": "$P = 18{,}000$ (the coefficient)"
              },
              {
                "label": "Base",
                "content": "$b = 0.85 < 1$ → decay"
              },
              {
                "label": "Rate",
                "content": "$r = 1 - 0.85 = 0.15 = 15\\%$ per year"
              },
              {
                "label": "Answer",
                "content": "Purchase price: $\\$18{,}000$; depreciates $15\\%$ per year"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The function $V(t) = 18{,}000(0.85)^t$ models a car's value where $t$ is years after purchase. What was the purchase price, and by what percent does the value decrease each year?",
            "answer": "Purchase price: $\\$18{,}000$; depreciates $15\\%$ per year"
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "percents",
    "title": "Conceptual Percent Model #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Interpreting what each component of $A = P \\cdot b^t$ means in context — SAT questions test structural understanding, not just computation.",
        "blocks": [
          {
            "type": "heading",
            "content": "Conceptual Percent Model #1"
          },
          {
            "type": "text",
            "content": "Conceptual Percent Model #1 (Percent Model Questions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Conceptual Percent Model #1 (Percent Model Questions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert percent language to decimal equations before solving."
          },
          {
            "type": "formula",
            "label": "Conceptual Percent Model #1 — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Conceptual Percent Model #1 (Percent Model Questions) problems is double percent change direction mistake. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Conceptual Percent Model #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The number of subscribers to a newsletter is modeled by $S(t) = 1{,}200(1.08)^t$, where $t$ is months since launch. What do $1{,}200$ and $1.08$ represent?",
            "steps": [
              {
                "label": "$1{,}200$",
                "content": "The initial subscriber count at launch ($t = 0$)"
              },
              {
                "label": "$1.08$ is the base",
                "content": "Monthly multiplier"
              },
              {
                "label": "Rate",
                "content": "$1.08 - 1 = 0.08 = 8\\%$ growth per month"
              },
              {
                "label": "Answer",
                "content": "Launched with $1{,}200$ subscribers; grows $8\\%$ monthly"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "The number of subscribers to a newsletter is modeled by $S(t) = 1{,}200(1.08)^t$, where $t$ is months since launch. What do $1{,}200$ and $1.08$ represent?",
            "answer": "Launched with $1{,}200$ subscribers; grows $8\\%$ monthly"
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "percents",
    "title": "Conceptual Percent Model #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Advanced interpretation: comparing models, rewriting in equivalent forms, and estimating doubling time or half-life.",
        "blocks": [
          {
            "type": "heading",
            "content": "Conceptual Percent Model #2"
          },
          {
            "type": "text",
            "content": "Conceptual Percent Model #2 (Percent Model Questions) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Conceptual Percent Model #2 (Percent Model Questions) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Convert percent language to decimal equations before solving."
          },
          {
            "type": "formula",
            "label": "Conceptual Percent Model #2 — Core Rule",
            "content": "$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Conceptual Percent Model #2 (Percent Model Questions) problems is reverse percent setup error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Convert percent language to decimal equations before solving. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Conceptual Percent Model #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "A population is modeled by $P(t) = 5{,}000(1.12)^t$, where $t$ is years. Rewrite to show the monthly growth rate.",
            "steps": [
              {
                "label": "Current form",
                "content": "$P(t) = 5{,}000(1.12)^t$ with $t$ in years"
              },
              {
                "label": "Convert base",
                "content": "$1.12^{1/12} \\approx 1.00949$"
              },
              {
                "label": "Rewrite",
                "content": "$P(m) = 5{,}000(1.00949)^m$ where $m$ is months"
              },
              {
                "label": "Monthly rate",
                "content": "$1.00949 - 1 = 0.00949 \\approx 0.949\\%$ per month"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A population is modeled by $P(t) = 5{,}000(1.12)^t$, where $t$ is years. Rewrite to show the monthly growth rate.",
            "answer": "$1.00949 - 1 = 0.00949 \\approx 0.949\\%$ per month"
          }
        ]
      }
    }
  }
};
