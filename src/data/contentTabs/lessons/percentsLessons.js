export const percentsLessonTabs = {
  1: {
    moduleId: 'percents',
    title: 'Introduction to Percents',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Percent means "per hundred." Every percent problem reduces to fractions and decimals — master the conversions and the rest follows.',
        blocks: [
          {
            type: 'formula',
            label: 'The Percent Identity',
            content: '$$p\\% = \\frac{p}{100}$$',
          },
          {
            type: 'text',
            content: 'The word **percent** comes from the Latin *per centum* — "for every hundred." So $45\\%$ means $45$ out of every $100$, written as $\\frac{45}{100}$ or $0.45$. These three representations are completely interchangeable.',
          },
          {
            type: 'keyInsight',
            content: 'Converting **percent → decimal** is the single most-used micro-skill in SAT percent problems. Every time $p\\%$ appears in a calculation, replace it with $\\frac{p}{100}$ or its decimal form before doing anything else.',
          },
          {
            type: 'table',
            title: 'Converting Between Forms',
            headers: [
              'From → To',
              'Method',
              'Example',
            ],
            rows: [
              [
                'Percent → Decimal',
                'Divide by $100$ (move decimal 2 left)',
                '$35\\% \\to 0.35$',
              ],
              [
                'Decimal → Percent',
                'Multiply by $100$ (move decimal 2 right)',
                '$0.08 \\to 8\\%$',
              ],
              [
                'Fraction → Percent',
                'Divide numerator by denominator, then $\\times 100$',
                '$\\frac{3}{8} = 0.375 \\to 37.5\\%$',
              ],
              [
                'Percent → Fraction',
                'Put over $100$ and simplify',
                '$60\\% = \\frac{60}{100} = \\frac{3}{5}$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Decimal-Point Drift',
            wrong: '$4\\%$ converted as $0.4$ instead of $0.04$ — the decimal moved only one place left.',
            correction: 'Move the decimal **two** places left: $4\\% = 0.04$. Quick check: $0.4 = 40\\%$, which is $10\\times$ too large.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Fraction ↔ Percent Conversion',
            items: [
              'Start with the fraction $\\frac{a}{b}$.',
              'Divide: $a \\div b$ to get a decimal.',
              'Multiply by $100$ to get a percent.',
              'To reverse: divide the percent by $100$, then simplify the fraction.',
            ],
          },
          {
            type: 'steps',
            title: 'Fraction ↔ Percent Conversion',
            items: [
              'Start with the fraction $\\frac{a}{b}$.',
              'Divide: $a \\div b$ to get a decimal.',
              'Multiply by $100$ to get a percent.',
              'To reverse: divide the percent by $100$, then simplify the fraction.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'Express $\\frac{7}{20}$ as a percent.',
            answer: '$7 \\div 20 = 0.35$. Then $0.35 \\times 100 = 35\\%$.',
          },
        ],
      },
    },
  },

  2: {
    moduleId: 'percents',
    title: 'Percent Of Questions',
    sections: {
      learn: {
        title: 'Learn',
        summary: '"What is 30% of 200?" is the most common percent question format. It always translates to multiplication.',
        blocks: [
          {
            type: 'formula',
            label: 'The Is / Of Equation',
            content: '$$\\text{Part} = \\frac{\\text{Percent}}{100} \\times \\text{Whole}$$',
          },
          {
            type: 'text',
            content: 'Every "percent of" question follows one equation. The word **is** means equals, **of** means multiply, and the percent converts to a decimal.',
          },
          {
            type: 'keyInsight',
            content: 'Only **three** unknowns can be asked: the **part**, the **percent**, or the **whole**. Identify which one is missing, plug the other two into $\\text{Part} = \\frac{\\%}{100} \\times \\text{Whole}$, and solve.',
          },
          {
            type: 'table',
            title: 'Translation Guide',
            headers: [
              'English',
              'Algebra',
            ],
            rows: [
              [
                'What **is** $30\\%$ **of** $200$?',
                '$x = 0.30 \\times 200$',
              ],
              [
                '$45$ **is** what percent **of** $180$?',
                '$45 = \\frac{p}{100} \\times 180$',
              ],
              [
                '$60$ **is** $25\\%$ **of** what?',
                '$60 = 0.25 \\times w$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Swapping Part and Whole',
            wrong: '"$15$ is what percent of $60$?" — student computes $\\frac{60}{15} = 4 = 400\\%$.',
            correction: 'The number after "of" is the **whole** (denominator): $\\frac{15}{60} = 0.25 = 25\\%$. Part ÷ Whole, not Whole ÷ Part.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'What is $15\\%$ of $240$?',
            steps: [
              {
                label: 'Convert',
                content: '$15\\% = 0.15$',
              },
              {
                label: 'Multiply',
                content: '$0.15 \\times 240 = 36$',
              },
              {
                label: 'Answer',
                content: '$36$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$72$ is what percent of $240$?',
            answer: '$\\frac{72}{240} = 0.30$. Then $0.30 \\times 100 = 30\\%$.',
          },
        ],
      },
    },
  },

  3: {
    moduleId: 'percents',
    title: 'Simple Percent Of #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Finding the part when the percent and whole are given: multiply the decimal form of the percent by the whole.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Part',
            content: '$$\\text{Part} = \\frac{p}{100} \\times \\text{Whole}$$',
          },
          {
            type: 'text',
            content: 'When a problem gives both the percent and the whole and asks "how much?" or "what is?", the unknown is the **part**. Convert the percent to a decimal, then multiply.',
          },
          {
            type: 'keyInsight',
            content: 'The percent always divides by $100$ before multiplying. Skipping this conversion is the single most frequent arithmetic error in percent problems.',
          },
          {
            type: 'trapCard',
            title: 'Forgetting to Divide by 100',
            wrong: '$25\\%$ of $60$ computed as $25 \\times 60 = 1{,}500$ instead of $0.25 \\times 60$.',
            correction: '$25\\% = 0.25$. Then $0.25 \\times 60 = 15$. The raw percent number must be converted before multiplying.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A class has $120$ students. If $40\\%$ are enrolled in AP courses, how many students are in AP courses?',
            steps: [
              {
                label: 'Convert',
                content: '$40\\% = 0.40$',
              },
              {
                label: 'Multiply',
                content: '$0.40 \\times 120 = 48$',
              },
              {
                label: 'Answer',
                content: '$48$ students',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A class has $120$ students. If $40\\%$ are enrolled in AP courses, how many students are in AP courses?',
            answer: '$48$ students',
          },
        ],
      },
    },
  },

  4: {
    moduleId: 'percents',
    title: 'Simple Percent Of #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Finding the whole when the part and percent are given: divide the part by the decimal form of the percent.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Whole',
            content: '$$\\text{Whole} = \\frac{\\text{Part}}{p/100}$$',
          },
          {
            type: 'text',
            content: 'When a problem says "$a$ is $p\\%$ of what number?", the part ($a$) and percent ($p$) are known. Divide the part by the decimal form of the percent to recover the whole.',
          },
          {
            type: 'keyInsight',
            content: 'Dividing by a number less than $1$ always produces a result **larger** than the dividend. Since the decimal form of any percent below $100\\%$ is less than $1$, the whole will always exceed the part. Use this as a sanity check.',
          },
          {
            type: 'trapCard',
            title: 'Multiplying Instead of Dividing',
            wrong: '"$30$ is $20\\%$ of what?" — student computes $30 \\times 0.20 = 6$ instead of dividing.',
            correction: 'Finding the whole requires **division**: $\\frac{30}{0.20} = 150$. The whole must be larger than the part.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$18$ is $30\\%$ of what number?',
            steps: [
              {
                label: 'Convert',
                content: '$30\\% = 0.30$',
              },
              {
                label: 'Divide',
                content: '$\\frac{18}{0.30} = 60$',
              },
              {
                label: 'Verify',
                content: '$0.30 \\times 60 = 18$ ✓',
              },
              {
                label: 'Answer',
                content: '$60$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$18$ is $30\\%$ of what number?',
            answer: '$60$',
          },
        ],
      },
    },
  },

  5: {
    moduleId: 'percents',
    title: 'Simple Percent Of #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Finding the percent when the part and whole are given: divide the part by the whole, then multiply by 100.',
        blocks: [
          {
            type: 'formula',
            label: 'Find the Percent',
            content: '$$\\text{Percent} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$$',
          },
          {
            type: 'text',
            content: 'When a problem asks "$a$ is what percent of $b$?", the part is $a$ and the whole is $b$. Divide $a$ by $b$ to get a decimal, then multiply by $100$ to express it as a percent.',
          },
          {
            type: 'keyInsight',
            content: 'The number immediately after the word **"of"** is always the whole (the denominator). Misidentifying the whole is the most common error in this problem type.',
          },
          {
            type: 'trapCard',
            title: 'Flipping the Fraction',
            wrong: '"$12$ is what percent of $48$?" — student computes $\\frac{48}{12} = 4 = 400\\%$.',
            correction: '$\\frac{12}{48} = 0.25 = 25\\%$. The part ($12$) is the numerator; the whole ($48$) is the denominator.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: '$27$ is what percent of $90$?',
            steps: [
              {
                label: 'Divide',
                content: '$\\frac{27}{90} = 0.30$',
              },
              {
                label: 'Convert',
                content: '$0.30 \\times 100 = 30\\%$',
              },
              {
                label: 'Answer',
                content: '$30\\%$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: '$27$ is what percent of $90$?',
            answer: '$30\\%$',
          },
        ],
      },
    },
  },

  6: {
    moduleId: 'percents',
    title: 'Complex Percent Of',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Complex percent-of problems layer multiple percents or successive operations — translate each piece separately, then combine.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Successive Percent Of',
                formula: '$\\frac{a}{100} \\times \\frac{b}{100} \\times W$',
                note: '$a\\%$ of $b\\%$ of $W$',
              },
              {
                label: 'Tax + Tip on Price',
                formula: '$P \\times (1 + r_{\\text{tax}}) \\times (1 + r_{\\text{tip}})$',
                note: 'Apply each multiplier in sequence',
              },
              {
                label: 'Percent of a Sum',
                formula: '$\\frac{p}{100} \\times (A + B)$',
                note: 'Compute the sum first, then take the percent',
              },
            ],
          },
          {
            type: 'text',
            content: 'A "complex" percent-of problem involves more than one percent operation. Common forms: successive percent-of (percent of a percent), combined quantities (total after tax and tip), or problems where the whole itself is a percent-derived quantity.',
          },
          {
            type: 'keyInsight',
            content: 'When two percents are applied in succession, multiply their decimal forms — do not add them. $20\\%$ of $50\\%$ of $n$ is $0.20 \\times 0.50 \\times n = 0.10n = 10\\%$ of $n$, not $70\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Adding Successive Percents',
            wrong: '$30\\%$ of $40\\%$ of $200$ — student adds $30 + 40 = 70\\%$ and gets $140$.',
            correction: '$0.30 \\times 0.40 = 0.12$. Then $0.12 \\times 200 = 24$. Successive percents multiply; they do not add.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A store offers a $20\\%$ discount on a $\\$150$ jacket, then charges $8\\%$ sales tax on the discounted price. What is the final price?',
            steps: [
              {
                label: 'Discount',
                content: '$150 \\times 0.80 = 120$',
              },
              {
                label: 'Tax',
                content: '$120 \\times 1.08 = 129.60$',
              },
              {
                label: 'Answer',
                content: '$\\$129.60$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A store offers a $20\\%$ discount on a $\\$150$ jacket, then charges $8\\%$ sales tax on the discounted price. What is the final price?',
            answer: '$\\$129.60$',
          },
        ],
      },
    },
  },

  7: {
    moduleId: 'percents',
    title: 'Conceptual Percent Of',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Conceptual percent-of problems test understanding of what percent relationships mean — often without requiring computation.',
        blocks: [
          {
            type: 'formula',
            label: 'Reciprocal Percent Relationship',
            content: '$$\\text{If } A = \\frac{p}{100} \\cdot B, \\text{ then } B = \\frac{100}{p} \\cdot A$$',
          },
          {
            type: 'text',
            content: 'These problems probe the **structure** of $\\text{Part} = \\frac{\\%}{100} \\times \\text{Whole}$ rather than asking for a specific number. The most tested concept: if $A$ is $p\\%$ of $B$, then $B$ is $\\frac{10{,}000}{p}\\%$ of $A$ — the relationship is **not** symmetric.',
          },
          {
            type: 'keyInsight',
            content: 'Percent-of is asymmetric: $20$ is $25\\%$ of $80$, but $80$ is $400\\%$ of $20$. The reverse percent is $\\frac{10{,}000}{p}\\%$, not $(100 - p)\\%$.',
          },
          {
            type: 'trapCard',
            title: 'Assuming Symmetry',
            wrong: '"$a$ is $40\\%$ of $b$" — student concludes "$b$ is $60\\%$ of $a$" using the complement.',
            correction: '$a = 0.40b$, so $b = \\frac{a}{0.40} = 2.5a = 250\\%$ of $a$. The complement $60\\%$ has no role here.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'If $x$ is $30\\%$ of $y$, then $y$ is what percent of $x$?',
            steps: [
              {
                label: 'Write equation',
                content: '$x = 0.30y$',
              },
              {
                label: 'Solve for $y$',
                content: '$y = \\frac{x}{0.30} = \\frac{10x}{3}$',
              },
              {
                label: 'Convert',
                content: '$\\frac{10}{3} \\approx 3.\\overline{3}$, so $y \\approx 333.\\overline{3}\\%$ of $x$',
              },
              {
                label: 'Answer',
                content: '$333\\frac{1}{3}\\%$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'If $x$ is $30\\%$ of $y$, then $y$ is what percent of $x$?',
            answer: '$333\\frac{1}{3}\\%$',
          },
        ],
      },
    },
  },

  8: {
    moduleId: 'percents',
    title: 'Percent Change',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Percent change measures how much a quantity grew or shrank relative to its starting value.',
        blocks: [
          {
            type: 'formula',
            label: 'Percent Change Formula',
            content: '$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$',
          },
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Multiplier for Increase',
                formula: '$(1 + r)$',
                note: '$r = p/100$',
              },
              {
                label: 'Multiplier for Decrease',
                formula: '$(1 - r)$',
                note: '$r = p/100$',
              },
              {
                label: 'Find New from Old',
                formula: '$\\text{New} = \\text{Old} \\times (1 \\pm r)$',
                note: '$+$ for increase, $-$ for decrease',
              },
              {
                label: 'Find Old from New',
                formula: '$\\text{Old} = \\frac{\\text{New}}{1 \\pm r}$',
                note: 'Divide by the multiplier to reverse',
              },
            ],
          },
          {
            type: 'text',
            content: 'The denominator is always the **original** (old) value — the value *before* the change. A positive result indicates an increase; a negative result indicates a decrease.',
          },
          {
            type: 'keyInsight',
            content: 'A $\\$40 \\to \\$50$ increase is $25\\%$, but a $\\$50 \\to \\$40$ decrease is only $20\\%$. The same dollar amount produces **different** percents because the denominator (original value) changes. This asymmetry is tested repeatedly.',
          },
          {
            type: 'trapCard',
            title: 'Using the New Value as the Base',
            wrong: 'Price goes from $\\$80$ to $\\$100$. Student computes $\\frac{20}{100} = 20\\%$ using the new value as denominator.',
            correction: 'The denominator must be the **original** value: $\\frac{100 - 80}{80} = \\frac{20}{80} = 25\\%$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Percent Change Calculation',
            items: [
              'Identify the **original** (before) and **new** (after) values.',
              'Compute the difference: $\\text{New} - \\text{Original}$.',
              'Divide by the **original**: $\\frac{\\text{difference}}{\\text{Original}}$.',
              'Multiply by $100$ to convert to a percent.',
              'State whether the result is an increase or decrease.',
            ],
          },
          {
            type: 'steps',
            title: 'Percent Change Calculation',
            items: [
              'Identify the **original** (before) and **new** (after) values.',
              'Compute the difference: $\\text{New} - \\text{Original}$.',
              'Divide by the **original**: $\\frac{\\text{difference}}{\\text{Original}}$.',
              'Multiply by $100$ to convert to a percent.',
              'State whether the result is an increase or decrease.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A stock price rises from $\\$40$ to $\\$50$. What is the percent increase?',
            answer: '$\\frac{50 - 40}{40} \\times 100 = \\frac{10}{40} \\times 100 = 25\\%$ increase.',
          },
        ],
      },
    },
  },

  9: {
    moduleId: 'percents',
    title: 'Simple Percent Change',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Simple percent change problems give two explicit values and ask for the percent increase or decrease — apply the formula directly.',
        blocks: [
          {
            type: 'formula',
            label: 'Percent Change',
            content: '$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$$',
          },
          {
            type: 'text',
            content: 'Both the original and new values are stated explicitly. Time words like "was," "started at," or "before" signal the original; "is now," "became," or "after" signal the new value.',
          },
          {
            type: 'keyInsight',
            content: 'The earlier value is the original (denominator) and the later value is the new (numerator component). Reversing these values produces a different — and incorrect — answer.',
          },
          {
            type: 'trapCard',
            title: 'Dividing by the Wrong Value',
            wrong: 'Population drops from $500$ to $400$. Student computes $\\frac{100}{400} = 25\\%$ using the new value.',
            correction: 'The original is $500$: $\\frac{100}{500} = 20\\%$ decrease. Always divide by the value that came first chronologically.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A gym had $200$ members last year and $230$ members this year. What is the percent increase?',
            steps: [
              {
                label: 'Find change',
                content: '$230 - 200 = 30$',
              },
              {
                label: 'Divide by original',
                content: '$\\frac{30}{200} = 0.15$',
              },
              {
                label: 'Convert',
                content: '$0.15 \\times 100 = 15\\%$',
              },
              {
                label: 'Answer',
                content: '$15\\%$ increase',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A gym had $200$ members last year and $230$ members this year. What is the percent increase?',
            answer: '$15\\%$ increase',
          },
        ],
      },
    },
  },

  10: {
    moduleId: 'percents',
    title: 'Complex Percent Change #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Successive percent changes require multiplier chaining — multiply the individual multipliers rather than adding the percents.',
        blocks: [
          {
            type: 'formula',
            label: 'Successive Percent Changes',
            content: '$$\\text{Final} = \\text{Start} \\times (1 \\pm r_1) \\times (1 \\pm r_2) \\times \\cdots$$',
          },
          {
            type: 'keyInsight',
            content: 'A $20\\%$ increase followed by a $20\\%$ decrease does **not** return to the starting value. The combined multiplier is $1.20 \\times 0.80 = 0.96$, a net $4\\%$ decrease. Equal-magnitude increase and decrease always produce a net loss.',
          },
          {
            type: 'table',
            title: 'Common Successive Change Results',
            headers: [
              'Changes',
              'Combined Multiplier',
              'Net Effect',
            ],
            rows: [
              [
                '$+10\\%$ then $+10\\%$',
                '$1.10 \\times 1.10 = 1.21$',
                '$+21\\%$ (not $+20\\%$)',
              ],
              [
                '$+20\\%$ then $-20\\%$',
                '$1.20 \\times 0.80 = 0.96$',
                '$-4\\%$ (not $0\\%$)',
              ],
              [
                '$+50\\%$ then $-50\\%$',
                '$1.50 \\times 0.50 = 0.75$',
                '$-25\\%$ (not $0\\%$)',
              ],
              [
                '$-10\\%$ then $-10\\%$',
                '$0.90 \\times 0.90 = 0.81$',
                '$-19\\%$ (not $-20\\%$)',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Adding Percents Instead of Multiplying',
            wrong: 'A $15\\%$ increase then a $10\\%$ increase — student adds $15 + 10 = 25\\%$ total increase.',
            correction: '$1.15 \\times 1.10 = 1.265$. The net increase is $26.5\\%$, not $25\\%$. Multipliers compound; percents do not simply add.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'A stock rises $25\\%$ in January, then falls $20\\%$ in February. What is the net percent change?',
            steps: [
              {
                label: 'Multipliers',
                content: 'January: $1.25$; February: $0.80$',
              },
              {
                label: 'Combine',
                content: '$1.25 \\times 0.80 = 1.00$',
              },
              {
                label: 'Net change',
                content: '$(1.00 - 1) \\times 100 = 0\\%$',
              },
              {
                label: 'Answer',
                content: 'No net change',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A stock rises $25\\%$ in January, then falls $20\\%$ in February. What is the net percent change?',
            answer: 'No net change',
          },
        ],
      },
    },
  },

  11: {
    moduleId: 'percents',
    title: 'Complex Percent Change #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Finding an original value before a percent change requires dividing by the multiplier, not subtracting the percent from the result.',
        blocks: [
          {
            type: 'formula',
            label: 'Reversing a Percent Change',
            content: '$$\\text{Original} = \\frac{\\text{Final}}{1 \\pm r}$$',
          },
          {
            type: 'text',
            content: 'When a problem gives the **result after** a percent change and asks for the **original**, divide the final value by the multiplier. Subtracting the percent from the final value uses the **wrong base** — the percent was applied to the original, not to the final.',
          },
          {
            type: 'keyInsight',
            content: 'After a $25\\%$ increase to $\\$150$: the correct original is $\\frac{150}{1.25} = \\$120$. The wrong approach — $25\\%$ of $150 = 37.50$, then $150 - 37.50 = 112.50$ — fails because $25\\%$ of $150 \\neq 25\\%$ of the unknown original.',
          },
          {
            type: 'trapCard',
            title: 'Subtracting the Percent of the Final',
            wrong: 'After a $20\\%$ increase, the result is $\\$360$. Student computes $20\\%$ of $360 = 72$, then $360 - 72 = 288$.',
            correction: '$\\text{Original} = \\frac{360}{1.20} = 300$. The $20\\%$ was calculated on the original ($300$), not on the final ($360$).',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'After a $30\\%$ discount, a television costs $\\$490$. What was the original price?',
            steps: [
              {
                label: 'Multiplier',
                content: '$30\\%$ decrease → $1 - 0.30 = 0.70$',
              },
              {
                label: 'Divide',
                content: '$\\frac{490}{0.70} = 700$',
              },
              {
                label: 'Verify',
                content: '$700 \\times 0.70 = 490$ ✓',
              },
              {
                label: 'Answer',
                content: '$\\$700$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'After a $30\\%$ discount, a television costs $\\$490$. What was the original price?',
            answer: '$\\$700$',
          },
        ],
      },
    },
  },

  12: {
    moduleId: 'percents',
    title: 'Complex Percent Change #3',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Percent change between computed quantities — the "original" and "new" values themselves require calculation, often involving areas, volumes, or products.',
        blocks: [
          {
            type: 'formula',
            label: 'Percent Change with Expressions',
            content: '$$\\text{Percent Change} = \\frac{\\text{New Expression} - \\text{Original Expression}}{\\text{Original Expression}} \\times 100$$',
          },
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Side increases by $r$',
                formula: 'Area multiplier: $(1+r)^2$',
                note: '$20\\%$ side increase → $44\\%$ area increase',
              },
              {
                label: 'Radius increases by $r$',
                formula: 'Circle area multiplier: $(1+r)^2$',
                note: 'Area scales with the square of the radius',
              },
              {
                label: 'Edge increases by $r$',
                formula: 'Volume multiplier: $(1+r)^3$',
                note: '$10\\%$ edge increase → $33.1\\%$ volume increase',
              },
            ],
          },
          {
            type: 'keyInsight',
            content: 'When a linear dimension changes by $p\\%$, the area changes by $((1+r)^2 - 1) \\times 100\\%$ and the volume by $((1+r)^3 - 1) \\times 100\\%$. Simply doubling the percent for area (e.g., "$20\\%$ side → $40\\%$ area") is a common but incorrect shortcut.',
          },
          {
            type: 'trapCard',
            title: 'Doubling the Percent for Area',
            wrong: 'Side increases $20\\%$, so student concludes area increases by $2 \\times 20\\% = 40\\%$.',
            correction: 'Area multiplier: $(1.20)^2 = 1.44$. Area increases $44\\%$, not $40\\%$. The linear shortcut omits the $r^2$ cross-term.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The radius of a circle increases by $15\\%$. By what percent does the area increase?',
            steps: [
              {
                label: 'Area multiplier',
                content: '$(1.15)^2 = 1.3225$',
              },
              {
                label: 'Net change',
                content: '$(1.3225 - 1) \\times 100 = 32.25\\%$',
              },
              {
                label: 'Answer',
                content: 'The area increases by $32.25\\%$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The radius of a circle increases by $15\\%$. By what percent does the area increase?',
            answer: 'The area increases by $32.25\\%$',
          },
        ],
      },
    },
  },

  13: {
    moduleId: 'percents',
    title: 'Percent Models',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'The multiplier model turns repeated percent changes into a single exponential expression — the standard approach for growth and decay problems.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Increase by $p\\%$',
                formula: '$\\times (1 + \\frac{p}{100})$',
                note: '$15\\%$ increase → $\\times 1.15$',
              },
              {
                label: 'Decrease by $p\\%$',
                formula: '$\\times (1 - \\frac{p}{100})$',
                note: '$20\\%$ decrease → $\\times 0.80$',
              },
              {
                label: 'Compound Growth',
                formula: '$A = P(1 + r)^t$',
                note: '$P$ = initial, $r$ = rate, $t$ = periods',
              },
              {
                label: 'Compound Decay',
                formula: '$A = P(1 - r)^t$',
                note: '$P$ = initial, $r$ = rate, $t$ = periods',
              },
            ],
          },
          {
            type: 'text',
            content: 'Instead of computing a percent and adding/subtracting at each step, a **multiplier** handles both operations at once. For **repeated** changes over time, raise the multiplier to a power.',
          },
          {
            type: 'keyInsight',
            content: 'The **base** of the exponential is the multiplier, not the rate. $b = 1.08$ means $8\\%$ growth, not $108\\%$. $b = 0.75$ means $25\\%$ decay, not $75\\%$. The rate is always the distance between the base and $1$.',
          },
          {
            type: 'table',
            title: 'Interpreting the Base of an Exponential',
            headers: [
              'Base $b$',
              'Meaning',
              'Rate',
            ],
            rows: [
              [
                '$b > 1$',
                'Growth',
                'Rate $= (b - 1) \\times 100\\%$',
              ],
              [
                '$0 < b < 1$',
                'Decay',
                'Rate $= (1 - b) \\times 100\\%$',
              ],
              [
                '$b = 1$',
                'No change',
                'Rate $= 0\\%$',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Confusing the Rate with the Base',
            wrong: 'In $A = 500(1.06)^t$, student states the growth rate is $1.06$ or $106\\%$.',
            correction: 'The base is $1.06$; the growth **rate** is $1.06 - 1 = 0.06 = 6\\%$. The base is the multiplier per period.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'steps',
            title: 'Compound Percent Change',
            items: [
              'Convert the rate to a decimal: $r = \\frac{p}{100}$.',
              'Build the multiplier: $(1 + r)$ for growth, $(1 - r)$ for decay.',
              'Raise to the power $t$: $(1 \\pm r)^t$.',
              'Multiply by the initial value: $A = P \\times (1 \\pm r)^t$.',
            ],
          },
          {
            type: 'steps',
            title: 'Compound Percent Change',
            items: [
              'Convert the rate to a decimal: $r = \\frac{p}{100}$.',
              'Build the multiplier: $(1 + r)$ for growth, $(1 - r)$ for decay.',
              'Raise to the power $t$: $(1 \\pm r)^t$.',
              'Multiply by the initial value: $A = P \\times (1 \\pm r)^t$.',
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A car depreciates by $15\\%$ per year. If worth $\\$24{,}000$ today, what will it be worth in $3$ years?',
            answer: 'Multiplier: $0.85$. $A = 24{,}000 \\times (0.85)^3 = 24{,}000 \\times 0.6141 \\approx \\$14{,}739$.',
          },
        ],
      },
    },
  },

  14: {
    moduleId: 'percents',
    title: 'Simple Percent Model',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'A simple percent model applies a single repeated percent change over time using $A = P(1 \\pm r)^t$.',
        blocks: [
          {
            type: 'formula',
            label: 'Exponential Growth / Decay',
            content: '$$A = P(1 \\pm r)^t$$',
          },
          {
            type: 'text',
            content: 'Three of the four quantities ($A$, $P$, $r$, $t$) are given; the task is to find the fourth. The most common variant provides $P$, $r$, and $t$ and asks for $A$.',
          },
          {
            type: 'keyInsight',
            content: 'The exponent $t$ must match the **period** of the rate $r$. If $r$ is an annual rate, $t$ must be in years. If $r$ is monthly, $t$ must be in months. Mismatched units produce wildly wrong answers.',
          },
          {
            type: 'trapCard',
            title: 'Using the Percent as the Base',
            wrong: 'Account grows at $5\\%$ per year — student writes $A = P(5)^t$ instead of $A = P(1.05)^t$.',
            correction: 'The base is $1 + 0.05 = 1.05$, not $5$. The rate must be converted to a decimal and added to $1$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Easy',
            problem: 'A $\\$1{,}000$ investment earns $6\\%$ interest per year. What is its value after $5$ years?',
            steps: [
              {
                label: 'Identify',
                content: '$P = 1{,}000$, $r = 0.06$, $t = 5$',
              },
              {
                label: 'Compute base',
                content: '$1 + 0.06 = 1.06$',
              },
              {
                label: 'Apply',
                content: '$A = 1{,}000 \\times (1.06)^5 = 1{,}000 \\times 1.3382 \\approx 1{,}338.23$',
              },
              {
                label: 'Answer',
                content: '$\\$1{,}338.23$',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A $\\$1{,}000$ investment earns $6\\%$ interest per year. What is its value after $5$ years?',
            answer: '$\\$1{,}338.23$',
          },
        ],
      },
    },
  },

  15: {
    moduleId: 'percents',
    title: 'Complex Percent Model',
    sections: {
      learn: {
        title: 'Learn',
        summary: `Complex percent models involve solving for the rate, time, or initial value — or interpreting models where the compounding period differs from the exponent's time unit.`,
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Solve for $P$',
                formula: '$P = \\frac{A}{(1 \\pm r)^t}$',
                note: 'Divide both sides by the growth/decay factor',
              },
              {
                label: 'Solve for $r$',
                formula: '$1 \\pm r = \\left(\\frac{A}{P}\\right)^{1/t}$',
                note: 'Take the $t$-th root of both sides',
              },
              {
                label: 'Different compounding',
                formula: '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$',
                note: '$n$ = compounds per period',
              },
            ],
          },
          {
            type: 'text',
            content: 'An exponent of $12t$ means monthly compounding ($12$ periods per year for $t$ years). The base gives the per-period rate, not the annual rate. In $A = 1{,}200(1.005)^{12t}$, the monthly rate is $0.5\\%$.',
          },
          {
            type: 'keyInsight',
            content: 'The coefficient of $t$ in the exponent reveals the compounding frequency. $12t$ → monthly; $4t$ → quarterly; $365t$ → daily. The base is the per-period multiplier, and the annual rate requires raising the base to the number of periods: $(1 + r_{\\text{period}})^n - 1$.',
          },
          {
            type: 'trapCard',
            title: 'Confusing Monthly Rate with Annual Rate',
            wrong: 'In $A = 500(1.02)^{4t}$, student states the annual growth rate is $2\\%$.',
            correction: '$1.02$ is the **quarterly** rate ($2\\%$ per quarter). Annual rate: $(1.02)^4 - 1 = 0.0824 = 8.24\\%$.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: `The function $V(t) = 18{,}000(0.85)^t$ models a car's value where $t$ is years after purchase. What was the purchase price, and by what percent does the value decrease each year?`,
            steps: [
              {
                label: 'Initial value',
                content: '$P = 18{,}000$ (the coefficient)',
              },
              {
                label: 'Base',
                content: '$b = 0.85 < 1$ → decay',
              },
              {
                label: 'Rate',
                content: '$r = 1 - 0.85 = 0.15 = 15\\%$ per year',
              },
              {
                label: 'Answer',
                content: 'Purchase price: $\\$18{,}000$; depreciates $15\\%$ per year',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: `The function $V(t) = 18{,}000(0.85)^t$ models a car's value where $t$ is years after purchase. What was the purchase price, and by what percent does the value decrease each year?`,
            answer: 'Purchase price: $\\$18{,}000$; depreciates $15\\%$ per year',
          },
        ],
      },
    },
  },

  16: {
    moduleId: 'percents',
    title: 'Conceptual Percent Model #1',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Interpreting what each component of $A = P \\cdot b^t$ means in context — SAT questions test structural understanding, not just computation.',
        blocks: [
          {
            type: 'text',
            content: 'A model like $P(t) = 500(1.06)^t$ may be paired with questions about what $500$ and $1.06$ represent in the given scenario. These questions test structural understanding of exponentials.',
          },
          {
            type: 'keyInsight',
            content: 'The base is **not** the growth rate. $b = 1.06$ means $6\\%$ growth, not $106\\%$. $b = 0.92$ means $8\\%$ decay, not $92\\%$. The rate is always the distance between the base and $1$.',
          },
          {
            type: 'table',
            title: 'Anatomy of an Exponential Model',
            headers: [
              'Component',
              'Symbol',
              'Meaning',
            ],
            rows: [
              [
                'Coefficient',
                '$P$',
                'Initial value at $t = 0$',
              ],
              [
                'Base',
                '$b = (1 \\pm r)$',
                'Multiplier per period',
              ],
              [
                'Rate from base',
                '$r$',
                'Percent change per period: $b - 1$ (growth) or $1 - b$ (decay)',
              ],
              [
                'Exponent',
                '$t$',
                'Number of periods elapsed',
              ],
              [
                'Output',
                '$A$',
                'Value after $t$ periods',
              ],
            ],
          },
          {
            type: 'trapCard',
            title: 'Stating the Base as the Rate',
            wrong: 'In $f(t) = 200(1.12)^t$, student claims the growth rate is $1.12$ or $112\\%$.',
            correction: 'The growth **rate** is $1.12 - 1 = 0.12 = 12\\%$. The base $1.12$ is the multiplier per period, not the rate.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Medium',
            problem: 'The number of subscribers to a newsletter is modeled by $S(t) = 1{,}200(1.08)^t$, where $t$ is months since launch. What do $1{,}200$ and $1.08$ represent?',
            steps: [
              {
                label: '$1{,}200$',
                content: 'The initial subscriber count at launch ($t = 0$)',
              },
              {
                label: '$1.08$ is the base',
                content: 'Monthly multiplier',
              },
              {
                label: 'Rate',
                content: '$1.08 - 1 = 0.08 = 8\\%$ growth per month',
              },
              {
                label: 'Answer',
                content: 'Launched with $1{,}200$ subscribers; grows $8\\%$ monthly',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'The number of subscribers to a newsletter is modeled by $S(t) = 1{,}200(1.08)^t$, where $t$ is months since launch. What do $1{,}200$ and $1.08$ represent?',
            answer: 'Launched with $1{,}200$ subscribers; grows $8\\%$ monthly',
          },
        ],
      },
    },
  },

  17: {
    moduleId: 'percents',
    title: 'Conceptual Percent Model #2',
    sections: {
      learn: {
        title: 'Learn',
        summary: 'Advanced interpretation: comparing models, rewriting in equivalent forms, and estimating doubling time or half-life.',
        blocks: [
          {
            type: 'formulaGrid',
            items: [
              {
                label: 'Doubling Time',
                formula: '$t \\approx \\frac{72}{\\text{percent rate}}$',
                note: 'Rule of 72 — approximation for doubling',
              },
              {
                label: 'Half-Life',
                formula: '$t \\approx \\frac{72}{\\text{percent rate}}$',
                note: 'Same rule applies to decay',
              },
              {
                label: 'Equivalent Annual Rate',
                formula: '$(1 + r_{\\text{annual}}) = (1 + r_{\\text{period}})^n$',
                note: '$n$ = periods per year',
              },
            ],
          },
          {
            type: 'text',
            content: 'Beyond single-model interpretation, SAT questions ask you to compare two models, rewrite a model in an equivalent form for a different time unit, or estimate doubling time and half-life.',
          },
          {
            type: 'keyInsight',
            content: 'Two models with the same base but different coefficients grow at the same rate but start at different levels. Two models with the same coefficient but different bases start equally but diverge over time. The base controls long-term behavior; the coefficient controls short-term position.',
          },
          {
            type: 'trapCard',
            title: 'Comparing Models by Initial Value Alone',
            wrong: '$f(t) = 500(1.03)^t$ always exceeds $g(t) = 300(1.10)^t$ because $500 > 300$.',
            correction: 'For small $t$, $f > g$. But $g$ grows faster ($10\\%$ vs. $3\\%$), so $g$ overtakes $f$ at $t \\approx 7.7$ years. Compare both base and coefficient.',
          },
        ],
      },
      practice: {
        title: 'Practice',
        blocks: [
          {
            type: 'example',
            difficulty: 'Hard',
            problem: 'A population is modeled by $P(t) = 5{,}000(1.12)^t$, where $t$ is years. Rewrite to show the monthly growth rate.',
            steps: [
              {
                label: 'Current form',
                content: '$P(t) = 5{,}000(1.12)^t$ with $t$ in years',
              },
              {
                label: 'Convert base',
                content: '$1.12^{1/12} \\approx 1.00949$',
              },
              {
                label: 'Rewrite',
                content: '$P(m) = 5{,}000(1.00949)^m$ where $m$ is months',
              },
              {
                label: 'Monthly rate',
                content: '$1.00949 - 1 = 0.00949 \\approx 0.949\\%$ per month',
              },
            ],
          },
          {
            type: 'checkpointQuestion',
            question: 'A population is modeled by $P(t) = 5{,}000(1.12)^t$, where $t$ is years. Rewrite to show the monthly growth rate.',
            answer: '$1.00949 - 1 = 0.00949 \\approx 0.949\\%$ per month',
          },
        ],
      },
    },
  },
};
