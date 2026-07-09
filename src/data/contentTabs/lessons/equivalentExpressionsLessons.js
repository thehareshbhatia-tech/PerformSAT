export const equivalentExpressionsLessonTabs = {
  "1": {
    "moduleId": "equivalent-expressions",
    "title": "Equivalent Expressions",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Two expressions are equivalent when they produce the same value for every allowed input; the SAT tests this by having you expand, factor, or simplify one form into another.",
        "blocks": [
          {
            "type": "heading",
            "content": "Equivalent Expressions"
          },
          {
            "type": "text",
            "content": "Two expressions are **equivalent** when they produce the same value for every allowed input. On the SAT the phrasing is almost always \"which expression is equivalent to ...\" or \"... is equivalent to ... for all values of $x$,\" and sometimes the reverse, \"which of the following is NOT equivalent.\" The words *for all values of $x$* are the signal: the two forms must agree as polynomials, term for term, not merely at one convenient number."
          },
          {
            "type": "text",
            "content": "There are two reliable ways to prove equivalence. The first is algebraic: expand, factor, or simplify one form until it matches the target. The second is numerical: substitute a value and compare. Substitution is fast because Desmos is built in — graph $y_1$ as the original and $y_2$ as a candidate, and equivalent expressions trace the same graph. You can also enter $y_1 - y_2$: if it stays flat at $0$ across the window, the two expressions are equivalent. One caution: test two or three values and avoid $x = 0$ and $x = 1$, which often hide a difference (for example $x^2$ and $2x$ agree at $x = 2$ but nowhere else useful)."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Substitution in action",
            "content": "Is $(x-3)(x+3)$ equivalent to $x^2 - 9$? Substitute $x = 4$: the product is $(1)(7) = 7$, and $16 - 9 = 7$. Try $x = -2$: $(-5)(1) = -5$, and $4 - 9 = -5$. Two matches with values other than $0$ and $1$ confirm the difference-of-squares identity — no expanding required."
          },
          {
            "type": "formulaGrid",
            "items": [
              { "label": "Distribute", "formula": "$a(b+c)=ab+ac$" },
              { "label": "Difference of squares", "formula": "$a^2-b^2=(a-b)(a+b)$" },
              { "label": "Perfect-square trinomial", "formula": "$a^2\\pm 2ab+b^2=(a\\pm b)^2$" },
              { "label": "Factor a trinomial", "formula": "$x^2+(p+q)x+pq=(x+p)(x+q)$" }
            ]
          },
          {
            "type": "heading",
            "content": "Expand, Distribute, Combine"
          },
          {
            "type": "text",
            "content": "Expanding removes parentheses by distribution: every inside term is multiplied by the outside factor, and a negative factor flips each sign, so $-4(3x-7)=-12x+28$. For two binomials, multiply each term of the first across the second (the First, Outer, Inner, Last products): $(2x+3)(4x-5)=8x^2-10x+12x-15$, and the Outer and Inner terms combine to $8x^2+2x-15$. Track the signs when you add them — adding the magnitudes ($10+12$) instead of the signed sum is a classic distractor. To combine like terms, add the coefficients of terms sharing the same variable and exponent; the exponent never changes, so $7x^2+4x^2=11x^2$, never $11x^4$. Subtracting a polynomial distributes the minus to every term: $(3x^2+5x-2)-(x^2-4x+7)=2x^2+9x-9$. When a problem states an expression equals, say, $4x^2+16x+6$ for all $x$, expand and match coefficients column by column ($x^2$ with $x^2$, $x$ with $x$, constant with constant); each column becomes a small equation you solve for the unknown constants."
          },
          {
            "type": "trapCard",
            "title": "Distributing a negative",
            "wrong": "$-3(x-4)=-3x-12$",
            "correction": "A negative times a negative is positive: $-3\\cdot(-4)=+12$, so $-3(x-4)=-3x+12$. A dropped or flipped sign is the most common way points leak here — distribute the sign to every term inside the parentheses."
          },
          {
            "type": "heading",
            "content": "Factoring in Four Moves"
          },
          {
            "type": "text",
            "content": "Factoring reverses expansion, and four moves cover almost every case. **Greatest common factor:** pull out what all terms share, $6x^2+9x=3x(2x+3)$. **Difference of squares:** $a^2-b^2=(a-b)(a+b)$, where the $a$ may carry a coefficient, so $4x^2-25=(2x-5)(2x+5)$ because $4x^2=(2x)^2$. **Trinomials:** if the leading coefficient is $1$, find two numbers multiplying to the constant and adding to the middle coefficient, giving $x^2+5x+6=(x+2)(x+3)$; if it is not $1$, split the middle term using two numbers that multiply to $a\\cdot c$ and add to $b$, so $2x^2-x-3=(2x-3)(x+1)$ from $-3$ and $2$. **Grouping:** for four terms, factor in pairs, $x^3-x^2+3x-3=x^2(x-1)+3(x-1)=(x-1)(x^2+3)$."
          },
          {
            "type": "table",
            "title": "Factoring patterns at a glance",
            "headers": ["Pattern", "Example", "Factored form"],
            "rows": [
              ["GCF", "$6x^2+9x$", "$3x(2x+3)$"],
              ["Difference of squares", "$4x^2-25$", "$(2x-5)(2x+5)$"],
              ["Trinomial, lead $1$", "$x^2+5x+6$", "$(x+2)(x+3)$"],
              ["Trinomial, lead $\\neq 1$", "$2x^2-x-3$", "$(2x-3)(x+1)$"],
              ["Grouping", "$x^3-x^2+3x-3$", "$(x-1)(x^2+3)$"]
            ]
          },
          {
            "type": "heading",
            "content": "Rational Expressions and Their Traps"
          },
          {
            "type": "text",
            "content": "A rational expression is a ratio of polynomials, and simplifying one always begins the same way: factor the numerator and denominator completely, then cancel only whole matching *factors*. For $\\dfrac{x^2-25}{x^2+5x}$, factor to $\\dfrac{(x-5)(x+5)}{x(x+5)}$ and cancel $(x+5)$ to get $\\dfrac{x-5}{x}$. To multiply, factor everything and cancel across both fractions first: $\\dfrac{x^2-4}{x+3}\\cdot\\dfrac{x+3}{x-2}=x+2$. To add two rationals such as $\\dfrac{3}{x-1}+\\dfrac{2}{x+2}$, build the common denominator $(x-1)(x+2)$, rewrite each numerator over it, and combine: $\\dfrac{3(x+2)+2(x-1)}{(x-1)(x+2)}=\\dfrac{5x+4}{(x-1)(x+2)}$. Each cancelled factor remains an excluded value — that is what *for all values of $x$ where the expression is defined* means. The costly trap is cancelling *terms* instead of *factors*: $\\dfrac{x^2+x}{x}=x+1$ because the numerator factors as $x(x+1)$, and it is never $x^2+1$; a single piece of a sum can never be cancelled on its own. Distractors are built from exactly these slips — a sign error in the difference of squares, keeping the wrong factor, cancelling too much, or leaving a numerator unfactored so nothing cancels."
          },
          {
            "type": "keyInsight",
            "content": "One habit ties the whole topic together: match the tool to the form the answer choices are in. If the choices are expanded, expand; if they are factored, factor; if the expression is a fraction, factor top and bottom and cancel factors. When the algebra gets heavy, fall back on substitution — plug two or three values other than $0$ and $1$ into the original and a choice, and equal outputs settle equivalence in seconds."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Two worked examples and three checkpoint questions covering factoring, rational simplification, matching coefficients, and the equivalence distractors.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Which expression is equivalent to $\\dfrac{4x^2 - 9}{2x^2 - x - 3}$ for all values of $x$ where the expression is defined?",
            "steps": [
              {
                "label": "Factor the numerator",
                "content": "It is a difference of squares with $2x$ and $3$: $4x^2-9=(2x-3)(2x+3)$."
              },
              {
                "label": "Factor the denominator",
                "content": "Split the middle with two numbers multiplying to $2\\cdot(-3)=-6$ and adding to $-1$, namely $-3$ and $2$: $2x^2-x-3=(2x-3)(x+1)$."
              },
              {
                "label": "Cancel the common factor",
                "content": "$\\dfrac{(2x-3)(2x+3)}{(2x-3)(x+1)}=\\dfrac{2x+3}{x+1}$ for $x\\neq \\tfrac{3}{2}$ and $x\\neq -1$."
              },
              {
                "label": "Check",
                "content": "At $x=2$: $\\dfrac{16-9}{8-2-3}=\\dfrac{7}{3}$ and $\\dfrac{2(2)+3}{2+1}=\\dfrac{7}{3}$. $\\checkmark$"
              }
            ]
          },
          {
            "type": "example",
            "difficulty": "Hard",
            "problem": "The expression $3(2x^2 + ax) - 2(x^2 + x - b)$ is equivalent to $4x^2 + 16x + 6$ for all values of $x$, where $a$ and $b$ are constants. What is $a + b$?",
            "steps": [
              {
                "label": "Expand each product",
                "content": "$3(2x^2+ax)=6x^2+3ax$ and $-2(x^2+x-b)=-2x^2-2x+2b$."
              },
              {
                "label": "Combine like terms",
                "content": "$(6-2)x^2+(3a-2)x+2b=4x^2+(3a-2)x+2b$."
              },
              {
                "label": "Match coefficients",
                "content": "The $x$ term gives $3a-2=16$, so $a=6$; the constant gives $2b=6$, so $b=3$. Note the constant is $2b$, not $b$."
              },
              {
                "label": "Answer",
                "content": "$a+b=6+3=9$. $\\checkmark$"
              }
            ]
          },
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Which expression is equivalent to $(5x^2 - 2x + 7) - (2x^2 + 4x - 3)$?",
            "steps": [
              {
                "label": "Distribute the minus sign",
                "content": "Flip the sign of every term in the second group: $5x^2 - 2x + 7 - 2x^2 - 4x + 3$."
              },
              {
                "label": "Combine like terms",
                "content": "$x^2$: $5-2=3$. $x$: $-2-4=-6$. Constant: $7+3=10$."
              },
              {
                "label": "Write the result",
                "content": "$3x^2 - 6x + 10$."
              },
              {
                "label": "Check",
                "content": "At $x=1$: original $=(5-2+7)-(2+4-3)=10-3=7$, and $3-6+10=7$. $\\checkmark$ The frequent slip is forgetting to flip $+4x$ and $-3$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Which expression is equivalent to $2(x + 3)(x - 1)$?",
            "answer": "FOIL the binomials first: $(x+3)(x-1)=x^2+2x-3$. Then distribute the $2$: $2(x^2+2x-3)=2x^2+4x-6$. Check at $x=1$: original $=2(4)(0)=0$ and $2+4-6=0$. $\\checkmark$"
          },
          {
            "type": "checkpointQuestion",
            "question": "Simplify $\\dfrac{x^2 + 8x + 16}{x^2 - 16}$ for all values of $x$ where it is defined.",
            "answer": "The numerator is a perfect square, $(x+4)^2$; the denominator is a difference of squares, $(x-4)(x+4)$. Cancel exactly one $(x+4)$: $\\dfrac{(x+4)(x+4)}{(x-4)(x+4)}=\\dfrac{x+4}{x-4}$ for $x\\neq \\pm 4$. Cancelling both $(x+4)$ factors, which would give $\\dfrac{1}{x-4}$, is the trap."
          },
          {
            "type": "checkpointQuestion",
            "question": "Which of these is NOT equivalent to $-4(3x - 7)$?  (i) $-12x + 28$   (ii) $28 - 12x$   (iii) $-12x - 28$",
            "answer": "Distributing gives $-4\\cdot 3x=-12x$ and $-4\\cdot(-7)=+28$, so $-4(3x-7)=-12x+28$. Forms (i) and (ii) are that same expression reordered. Form (iii) keeps the wrong sign on the constant, so it is NOT equivalent."
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
