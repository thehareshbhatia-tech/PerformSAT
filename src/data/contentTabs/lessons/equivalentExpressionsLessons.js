export const equivalentExpressionsLessonTabs = {
  "1": {
    "moduleId": "equivalent-expressions",
    "title": "Equivalent Expressions",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Two expressions are equivalent when they yield the same value for every possible input.",
        "blocks": [
          {
            "type": "heading",
            "content": "Equivalent Expressions"
          },
          {
            "type": "text",
            "content": "Two expressions are equivalent if they produce the same value for every possible input. On the SAT, you prove equivalence by expanding, factoring, or simplifying one expression into the other."
          },
          {
            "type": "text",
            "content": "Three main strategies: (1) **Expand** — distribute and combine like terms to see if they match. (2) **Factor** — pull out common factors or use special identities ($a^2 - b^2 = (a-b)(a+b)$). (3) **Plug in** — substitute a simple value into both expressions; if the results differ, they are NOT equivalent. For instance, $(2x - 5)(2x + 5)$ expands to $4x^2 - 25$, so those two expressions are equivalent for every $x$."
          },
          {
            "type": "formula",
            "label": "Equivalent Expressions — Core Rule",
            "content": "$$a(b+c)=ab+ac,\\quad x^2-y^2=(x-y)(x+y)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Is $\\frac{x^2 - 9}{x + 3}$ equivalent to $x - 3$? Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ ✓ (for $x \\neq -3$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students cancel terms incorrectly in fractions. $\\frac{x^2 + x}{x} = x + 1$, NOT $x^2 + 1$. You can only cancel factors, not terms. Factor the numerator first, THEN cancel common factors with the denominator. Never cancel individual terms across a fraction bar."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Expand and refactor strategically to reveal what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Equivalent Expressions\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Which expression is equivalent to $4x^2 - 25$?",
            "steps": [
              {
                "label": "Recognize the pattern",
                "content": "$4x^2 = (2x)^2$ and $25 = 5^2$ — two perfect squares separated by subtraction."
              },
              {
                "label": "Apply the identity",
                "content": "$a^2 - b^2 = (a+b)(a-b)$ with $a = 2x$ and $b = 5$."
              },
              {
                "label": "Factor",
                "content": "$(2x + 5)(2x - 5)$"
              },
              {
                "label": "Verify",
                "content": "FOIL: $(2x)(2x) + (2x)(-5) + (5)(2x) + (5)(-5) = 4x^2 - 10x + 10x - 25 = 4x^2 - 25$ \\checkmark"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Which expression is equivalent to $(3x + 2)(x - 4) - (x - 4)$?",
            "answer": "The binomial $(x - 4)$ appears in both terms. Factor it out: $(x - 4)[(3x + 2) - 1] = (x - 4)(3x + 1)$. Verify: $3x^2 + x - 12x - 4 = 3x^2 - 11x - 4$ \\checkmark."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "equivalent-expressions",
    "title": "Equivalent Expressions Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Expanding products by distributing coefficients and using FOIL, then verifying with DESMOS.",
        "blocks": [
          {
            "type": "heading",
            "content": "Equivalent Expressions Example #1"
          },
          {
            "type": "text",
            "content": "Two expressions are equivalent if they produce the same value for every possible input. On the SAT, you prove equivalence by expanding, factoring, or simplifying one expression into the other."
          },
          {
            "type": "text",
            "content": "Using the same strategies, pick the approach that fits the answer choices: expand when they are in expanded form, factor when they are factored, and plug in a value when you just need to test equivalence quickly."
          },
          {
            "type": "formula",
            "label": "Equivalent Expressions Example #1 — Core Rule",
            "content": "$$a(b+c)=ab+ac,\\quad x^2-y^2=(x-y)(x+y)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Is $\\frac{x^2 - 9}{x + 3}$ equivalent to $x - 3$? Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ ✓ (for $x \\neq -3$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students cancel terms incorrectly in fractions. $\\frac{x^2 + x}{x} = x + 1$, NOT $x^2 + 1$. You can only cancel factors, not terms. Factor the numerator first, THEN cancel common factors with the denominator. Never cancel individual terms across a fraction bar."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Expand and refactor strategically to reveal what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Equivalent Expressions Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Which expression is equivalent to $(x + 4)(x - 3)$?",
            "steps": [
              {
                "label": "Apply FOIL",
                "content": "First: $x \\cdot x = x^2$. Outer: $x \\cdot (-3) = -3x$. Inner: $4 \\cdot x = 4x$. Last: $4 \\cdot (-3) = -12$."
              },
              {
                "label": "Combine all four products",
                "content": "$x^2 - 3x + 4x - 12$"
              },
              {
                "label": "Combine like terms",
                "content": "$-3x + 4x = x$"
              },
              {
                "label": "Answer",
                "content": "$(x + 4)(x - 3) = x^2 + x - 12$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Which expression is equivalent to $2(x + 3)(x - 1)$?",
            "answer": "FOIL first: $(x+3)(x-1) = x^2 - x + 3x - 3 = x^2 + 2x - 3$. Then distribute the $2$: $2(x^2 + 2x - 3) = 2x^2 + 4x - 6$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "equivalent-expressions",
    "title": "Equivalent Expressions Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Simplifying rational expressions by factoring numerator and denominator and canceling common factors.",
        "blocks": [
          {
            "type": "heading",
            "content": "Equivalent Expressions Example #2"
          },
          {
            "type": "text",
            "content": "Two expressions are equivalent if they produce the same value for every possible input. On the SAT, you prove equivalence by expanding, factoring, or simplifying one expression into the other."
          },
          {
            "type": "text",
            "content": "For example, to simplify $\\frac{42a}{k} + 42ak$ with $k > 0$, combine over a common denominator: $\\frac{42a}{k} + 42ak = \\frac{42a + 42ak^2}{k} = \\frac{42a(1 + k^2)}{k}$."
          },
          {
            "type": "formula",
            "label": "Equivalent Expressions Example #2 — Core Rule",
            "content": "$$a(b+c)=ab+ac,\\quad x^2-y^2=(x-y)(x+y)$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Is $\\frac{x^2 - 9}{x + 3}$ equivalent to $x - 3$? Factor: $\\frac{(x-3)(x+3)}{x+3} = x - 3$ ✓ (for $x \\neq -3$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students cancel terms incorrectly in fractions. $\\frac{x^2 + x}{x} = x + 1$, NOT $x^2 + 1$. You can only cancel factors, not terms. Factor the numerator first, THEN cancel common factors with the denominator. Never cancel individual terms across a fraction bar."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Expand and refactor strategically to reveal what the question asks. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Equivalent Expressions Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Simplify $\\frac{x^2 + 3x}{x}$, where $x \\neq 0$.",
            "steps": [
              {
                "label": "Factor the numerator",
                "content": "$x^2 + 3x = x(x + 3)$"
              },
              {
                "label": "Rewrite the fraction",
                "content": "$\\frac{x(x + 3)}{x}$"
              },
              {
                "label": "Cancel the common factor",
                "content": "The factor $x$ appears in both numerator and denominator, so they cancel."
              },
              {
                "label": "Answer",
                "content": "$\\frac{x^2 + 3x}{x} = x + 3$ for $x \\neq 0$"
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Simplify $\\frac{x^2 - 9}{x^2 + 5x + 6}$ for $x \\neq -3$.",
            "answer": "Factor numerator: $x^2 - 9 = (x+3)(x-3)$ (difference of squares). Factor denominator: $x^2 + 5x + 6 = (x+2)(x+3)$. Cancel $(x+3)$: $\\frac{(x+3)(x-3)}{(x+2)(x+3)} = \\frac{x - 3}{x + 2}$."
          }
        ]
      }
    }
  }
};
