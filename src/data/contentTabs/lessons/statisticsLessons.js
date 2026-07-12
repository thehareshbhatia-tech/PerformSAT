export const statisticsLessonTabs = {
  "1": {
    "moduleId": "statistics",
    "title": "What is the Mean?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The mean (average) is the sum of all values divided by the count. On the SAT, mean questions often ask you to find a missing value or understand how changes affect the average.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is the Mean?"
          },
          {
            "type": "text",
            "content": "The mean (average) is the sum of all values divided by the count. It is the \"balance point\" of the data — the value where the data would balance if placed on a number line."
          },
          {
            "type": "text",
            "content": "$\\bar{x} = \\frac{\\sum x}{n}$. On the SAT, mean questions usually involve: (1) finding a missing value given the mean, (2) understanding how adding/removing a value changes the mean, (3) combining two groups. For a missing value: $\\text{sum} = \\text{mean} \\times n$, then subtract the known values. For example, the mean of $4, 8, 10, 14$ is $\\frac{4 + 8 + 10 + 14}{4} = \\frac{36}{4} = 9$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "What is the Mean? — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Five test scores: $72, 85, 90, 88, x$. Mean $= 84$. Sum $= 84 \\times 5 = 420$. Known sum $= 335$. So $x = 420 - 335 = 85$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "When combining groups, students average the two means instead of computing the weighted mean. If group A (10 students, mean 80) and group B (30 students, mean 90), the combined mean is NOT $(80 + 90)/2 = 85$. Combined mean $= \\frac{\\text{total sum}}{\\text{total count}} = \\frac{10(80) + 30(90)}{40} = \\frac{3500}{40} = 87.5$. Always use total sum ÷ total count."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is the Mean?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "The mean of $6$ numbers is $15$. Five of the numbers are $12, 18, 9, 20, 14$. What is the sixth number?",
            "steps": [
              {
                "label": "Total sum",
                "content": "Sum $= 15 \\times 6 = 90$."
              },
              {
                "label": "Known sum",
                "content": "$12 + 18 + 9 + 20 + 14 = 73$."
              },
              {
                "label": "Missing value",
                "content": "$90 - 73 = 17$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A data set has values $6, 8, 16, 4, 17, 26, 8, 5, 5, 5$. What is the mean?",
            "answer": "Sum $= 100$. Count $= 10$. Mean $= 100 \\div 10 = 10$."
          }
        ]
      }
    }
  },
  "2": {
    "moduleId": "statistics",
    "title": "Simple Calculating Mean Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Mean = sum of all data values ÷ quantity of data values. For the set {6, 8, 16, 4, 17, 26, 8, 5, 5, 5}, the sum is 100 and there are 10 values, so the mean is 10.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Mean Example"
          },
          {
            "type": "text",
            "content": "Simple Calculating Mean Example (Mean) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Mean Example (Mean) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute total sum and total count first, then divide. For example, for $10$ data values that sum to $250$, the mean is $\\frac{250}{10} = 25$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Mean Example — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Mean Example (Mean) problems is averaging averages without weighting by group size. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Mean Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the mean of: $6, 8, 16, 4, 17, 26, 8, 5, 5, 5$.",
            "steps": [
              {
                "label": "Count",
                "content": "$10$ values."
              },
              {
                "label": "Sum",
                "content": "$6 + 8 + 16 + 4 + 17 + 26 + 8 + 5 + 5 + 5 = 100$."
              },
              {
                "label": "Divide",
                "content": "Mean $= 100 \\div 10 = 10$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the mean of $4, 9, 11, 16$.",
            "answer": "Sum $= 40$, Count $= 4$. Mean $= 40/4 = 10$."
          }
        ]
      }
    }
  },
  "3": {
    "moduleId": "statistics",
    "title": "Simple Calculating Mean Example (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "type mean( followed by all values separated by commas) into DESMOS. It returns the answer instantly — no manual arithmetic needed.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Mean Example (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Simple Calculating Mean Example (DESMOS Method) (Mean) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Mean Example (DESMOS Method) (Mean) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute total sum and total count first, then divide. Now this specific example can also be solved simply using Desmos. What happens is you simply write mean on Desmos and enter the data set as it is given to you. 6 comma 8 comma 16 comma 4 comma 17 comma 26 comma 8 and comma 5 three times. Clearly show."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Mean Example (DESMOS Method) — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Mean Example (DESMOS Method) (Mean) problems is averaging averages without weighting by group size. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Mean Example (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Use DESMOS to find the mean of $3, 7, 12, 8, 20$.",
            "steps": [
              {
                "label": "Type in DESMOS",
                "content": "$\\text{mean}(3, 7, 12, 8, 20)$."
              },
              {
                "label": "Read result",
                "content": "DESMOS returns $10$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What would you type into DESMOS to find the mean of $3, 7, 12, 8, 20$?",
            "answer": "$\\text{mean}(3, 7, 12, 8, 20)$. DESMOS returns $10$."
          }
        ]
      }
    }
  },
  "4": {
    "moduleId": "statistics",
    "title": "How Outliers Affect the Mean",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "An outlier pulls the mean in its direction — high outlier increases the mean, low outlier decreases it. The median is resistant to outliers.",
        "blocks": [
          {
            "type": "heading",
            "content": "How Outliers Affect the Mean"
          },
          {
            "type": "text",
            "content": "An outlier is an extremely high or low value that pulls the mean toward it. The median, however, barely moves — it only depends on the middle position, not the extreme values."
          },
          {
            "type": "text",
            "content": "On the SAT: \"which measure is most affected by the outlier?\" → **mean**. \"Which measure best represents the typical value when there's an outlier?\" → **median**. A high outlier increases the mean; a low outlier decreases it. The median only shifts by one position at most. For example, adding the outlier $100$ to $\\{2, 4, 6\\}$ jumps the mean from $4$ to $28$, while the median moves only from $4$ to $5$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "How Outliers Affect the Mean — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Data: $2, 3, 4, 5, 100$. Mean $= 22.8$ (pulled up by $100$). Median $= 4$ (unaffected by $100$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think both mean and median are equally affected. CB designs questions where removing an outlier changes the mean dramatically but barely touches the median. Mean = sensitive to outliers (extreme values). Median = resistant to outliers (middle value). Mode = unaffected unless the outlier is repeated."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"How Outliers Affect the Mean\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Data set X: $149, 144, 148, 136, 139$. Data set Y adds the value $121$. How does the mean of Y compare to the mean of X?",
            "steps": [
              {
                "label": "Conceptual check",
                "content": "The original values are all in the $130$-$150$ range. Adding $121$ (below all values) will pull the mean down."
              },
              {
                "label": "Answer",
                "content": "Mean of Y < Mean of X. No calculation needed."
              },
              {
                "label": "Verify",
                "content": "Mean of X $= 716/5 = 143.2$. Mean of Y $= 837/6 = 139.5$ ✓."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A class of $20$ students has a mean test score of $78$. A new student scores $100$. Does the mean increase, decrease, or stay the same?",
            "answer": "The new score ($100$) is above the current mean ($78$), so the mean increases."
          }
        ]
      }
    }
  },
  "5": {
    "moduleId": "statistics",
    "title": "Outlier Affecting Mean Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "data set Y = data set X plus one additional large value. Since the new value is above the existing mean, it pulls the mean of Y upward. You can reason this without computing.",
        "blocks": [
          {
            "type": "heading",
            "content": "Outlier Affecting Mean Example #1"
          },
          {
            "type": "text",
            "content": "An outlier is an extremely high or low value that pulls the mean toward it. The median, however, barely moves — it only depends on the middle position, not the extreme values."
          },
          {
            "type": "text",
            "content": "As above, an outlier pulls the mean but barely moves the median. For example, if data set $Y$ is data set $X$ with one extra low value added, the mean of $Y$ is less than the mean of $X$, even though every original value is unchanged."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Outlier Affecting Mean Example #1 — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Data: $2, 3, 4, 5, 100$. Mean $= 22.8$ (pulled up by $100$). Median $= 4$ (unaffected by $100$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think both mean and median are equally affected. CB designs questions where removing an outlier changes the mean dramatically but barely touches the median. Mean = sensitive to outliers (extreme values). Median = resistant to outliers (middle value). Mode = unaffected unless the outlier is repeated."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Outlier Affecting Mean Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Set A: $10, 12, 14, 16, 18$. Set B adds $40$ to Set A. Which has a larger mean?",
            "steps": [
              {
                "label": "Mean of A",
                "content": "$70/5 = 14$."
              },
              {
                "label": "Compare",
                "content": "$40 > 14$, so adding it pulls the mean up."
              },
              {
                "label": "Answer",
                "content": "Set B has the larger mean."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: $4, 7, 9, 12, 8$. Set B: $4, 7, 9, 12, 8, 30$. Which set has the larger mean?",
            "answer": "Mean of A $= 40/5 = 8$. The added value $30 > 8$, so Set B has a larger mean."
          }
        ]
      }
    }
  },
  "6": {
    "moduleId": "statistics",
    "title": "Outlier Affecting Mean Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "adding a low outlier (121 eggs) to sea turtle nest data pulls the mean downward. The outlier is not massive, so the shift is moderate — but the direction is clear.",
        "blocks": [
          {
            "type": "heading",
            "content": "Outlier Affecting Mean Example #2"
          },
          {
            "type": "text",
            "content": "An outlier is an extremely high or low value that pulls the mean toward it. The median, however, barely moves — it only depends on the middle position, not the extreme values."
          },
          {
            "type": "text",
            "content": "On the SAT: \"which measure is most affected by the outlier?\" → **mean**. \"Which measure best represents the typical value when there's an outlier?\" → **median**. A high outlier increases the mean; a low outlier decreases it. The median only shifts by one position at most. Five whatever a type of sea turtle each have a nest. The table shows an original data set of the number of eggs that each turtle laid in its nest. A six nest with 121 eggs is added to create a new data set. Which of the following correctly compares t."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Outlier Affecting Mean Example #2 — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Data: $2, 3, 4, 5, 100$. Mean $= 22.8$ (pulled up by $100$). Median $= 4$ (unaffected by $100$)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think both mean and median are equally affected. CB designs questions where removing an outlier changes the mean dramatically but barely touches the median. Mean = sensitive to outliers (extreme values). Median = resistant to outliers (middle value). Mode = unaffected unless the outlier is repeated."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Outlier Affecting Mean Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Data: $50, 55, 60, 65$ (mean $= 57.5$). Adding $30$. Does the mean increase or decrease?",
            "steps": [
              {
                "label": "Compare",
                "content": "$30 < 57.5$."
              },
              {
                "label": "Answer",
                "content": "Mean decreases. New mean $= 260/5 = 52$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Original data: $149, 144, 148, 136, 139$ (mean $\\approx 143$). A 6th value of $121$ is added. Does the mean increase or decrease?",
            "answer": "$121 < 143$, so the mean decreases. New mean $= 837/6 = 139.5$."
          }
        ]
      }
    }
  },
  "7": {
    "moduleId": "statistics",
    "title": "Finding Mean of a Combined Data Set",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "to find the mean of a combined data set, recover each group's total sum (Sum = Mean × Count), add the sums, then divide by the combined count. You CANNOT simply average the two means.",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Mean of a Combined Data Set"
          },
          {
            "type": "text",
            "content": "Finding Mean of a Combined Data Set (Mean) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Finding Mean of a Combined Data Set (Mean) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute total sum and total count first, then divide. Data set A consists of the heights of 75 buildings and has a mean of 32 m. Data set B consists the height of 50 buildings and has a mean of 62 m. Data set C consists of the heights of 125 buildings from data sets A and B. What does it mean in meters."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Finding Mean of a Combined Data Set — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Finding Mean of a Combined Data Set (Mean) problems is averaging averages without weighting by group size. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Mean of a Combined Data Set\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Class A ($20$ students) has a mean score of $75$. Class B ($30$ students) has a mean score of $85$. What is the combined mean?",
            "steps": [
              {
                "label": "Sum A",
                "content": "$75 \\times 20 = 1500$."
              },
              {
                "label": "Sum B",
                "content": "$85 \\times 30 = 2550$."
              },
              {
                "label": "Combined",
                "content": "Total $= 4050$, Count $= 50$. Mean $= 4050/50 = 81$."
              },
              {
                "label": "Trap check",
                "content": "Simple average would give $80$ — wrong because the groups are different sizes."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Group A: mean $= 32$, count $= 75$. Group B: mean $= 62$, count $= 50$. Combined mean?",
            "answer": "$2400 + 3100 = 5500$. Combined count $= 125$. Mean $= 5500/125 = 44$."
          }
        ]
      }
    }
  },
  "8": {
    "moduleId": "statistics",
    "title": "What is the Median?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The median is the middle value when data is sorted. It is resistant to outliers — unlike the mean, one extreme value barely changes it.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is the Median?"
          },
          {
            "type": "text",
            "content": "The median is the middle value when all data points are sorted in order. If there is an even number of values, the median is the average of the two middle values."
          },
          {
            "type": "text",
            "content": "Step 1: Sort all values from least to greatest. Step 2: If $n$ is odd, the median is the value at position $(n+1)/2$. If $n$ is even, the median is the average of the values at positions $n/2$ and $n/2 + 1$. For example, the median of the sorted list $3, 7, 8, 12, 20$ ($n = 5$) is the third value, $8$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "What is the Median? — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Data: $7, 2, 9, 4, 5$. Sorted: $2, 4, 5, 7, 9$. Median $= 5$ (third of five values)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students forget to sort the data first and pick the middle of the unsorted list, which is just a random value. Always sort first. Circle the middle value(s). If two middle values, average them."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is the Median?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the median of: $73, 74, 75, 77, 79, 82, 84, 85, 91$.",
            "steps": [
              {
                "label": "Already sorted",
                "content": "Data is in order ✓."
              },
              {
                "label": "Count",
                "content": "$9$ values (odd), so median is at position $(9+1)/2 = 5$."
              },
              {
                "label": "Answer",
                "content": "The 5th value is $79$. Median $= 79$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Find the median of: $3, 4, 5, 5, 7, 8$.",
            "answer": "$6$ values (even). Average positions $3$ and $4$: $(5 + 5)/2 = 5$. Median $= 5$."
          }
        ]
      }
    }
  },
  "9": {
    "moduleId": "statistics",
    "title": "Finding Median from a Frequency Table",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "For frequency tables, use cumulative counting to find which group contains the median position. You don't need to list every value — just count through the frequencies.",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Median from a Frequency Table"
          },
          {
            "type": "text",
            "content": "Finding Median from a Frequency Table (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Finding Median from a Frequency Table (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). For example, in a frequency table listing $9$ values in all, the median is the $5$th value: count up through the cumulative frequencies until you reach position $5$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Finding Median from a Frequency Table — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Finding Median from a Frequency Table (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Median from a Frequency Table\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Frequency table: 0-9 employees ($3$ restaurants), 10-19 ($4$), 20-29 ($5$), 30-39 ($3$), 40-49 ($2$). What range contains the median?",
            "steps": [
              {
                "label": "Total",
                "content": "$n = 17$."
              },
              {
                "label": "Position",
                "content": "$(17+1)/2 = 9$th value."
              },
              {
                "label": "Cumulative",
                "content": "Row 1: $3$. Row 2: $7$. Row 3: $12$. Since $7 < 9 \\leq 12$, the 9th value is in Row 3."
              },
              {
                "label": "Answer",
                "content": "Median is in the $20$-$29$ range."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Frequency table: value $1$ (freq $4$), value $2$ (freq $6$), value $3$ (freq $3$), value $4$ (freq $7$). Find the median.",
            "answer": "$n = 20$. Positions $10$ and $11$. Cumulative: $4, 10, 13, 20$. Position $10$ in value $2$, position $11$ in value $3$. Median $= (2+3)/2 = 2.5$."
          }
        ]
      }
    }
  },
  "10": {
    "moduleId": "statistics",
    "title": "Simple Calculating Median Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "arrange all values lowest to greatest, then find the middle value. For 9 values, the median is at position 5. Answer: median = 79.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Median Example #1"
          },
          {
            "type": "text",
            "content": "Simple Calculating Median Example #1 (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Median Example #1 (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). For example, the median of the sorted list $5, 9, 11, 15$ ($n = 4$) is the average of the middle two: $\\frac{9 + 11}{2} = 10$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Median Example #1 — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Median Example #1 (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Median Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the median of sorted data: $5, 8, 12, 15, 20$.",
            "steps": [
              {
                "label": "Count",
                "content": "$5$ values (odd)."
              },
              {
                "label": "Position",
                "content": "$(5+1)/2 = 3$rd value."
              },
              {
                "label": "Answer",
                "content": "Median $= 12$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Sorted data: $73, 74, 75, 77, 79, 82, 84, 85, 91$. What is the median?",
            "answer": "$9$ values. Position $(9+1)/2 = 5$. The 5th value is $79$."
          }
        ]
      }
    }
  },
  "11": {
    "moduleId": "statistics",
    "title": "Simple Calculating Median Example #1 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "type median(73,74,75,77,79,82,84,85,91) directly into DESMOS to get 79 instantly. No sorting or counting needed.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Median Example #1 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Simple Calculating Median Example #1 (DESMOS Method) (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Median Example #1 (DESMOS Method) (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). Now this exact example can also be solved simply using Desmos. You would just simply type out median on Desmos and enter the data values within parenthesis. 73 comma 74 comma 75 comma 77 comma 79 comma 82 comma 84 comma 85 comma 91. And just like tha."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Median Example #1 (DESMOS Method) — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Median Example #1 (DESMOS Method) (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Median Example #1 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Use DESMOS: $\\text{median}(15, 8, 22, 3, 11)$.",
            "steps": [
              {
                "label": "Type",
                "content": "$\\text{median}(15, 8, 22, 3, 11)$."
              },
              {
                "label": "Result",
                "content": "DESMOS returns $11$."
              },
              {
                "label": "Verify",
                "content": "Sorted: $3, 8, 11, 15, 22$. Middle $= 11$ ✓."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "What do you type in DESMOS to find the median of $8, 3, 12, 5, 7$?",
            "answer": "$\\text{median}(8, 3, 12, 5, 7)$. DESMOS returns $7$."
          }
        ]
      }
    }
  },
  "12": {
    "moduleId": "statistics",
    "title": "Simple Calculating Median Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when there are two numbers in the middle (even count), you must average them. The instructor calls this \"the trick.\" Answer: median = 5.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Median Example #2"
          },
          {
            "type": "text",
            "content": "Simple Calculating Median Example #2 (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Median Example #2 (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). For example, sort $14, 3, 9, 3, 20$ to $3, 3, 9, 14, 20$; with $n = 5$ the median is the middle value, $9$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Median Example #2 — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Median Example #2 (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Median Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the median of: $3, 5, 7, 9, 11, 13$.",
            "steps": [
              {
                "label": "Count",
                "content": "$6$ values (even)."
              },
              {
                "label": "Middle two",
                "content": "Positions $3$ and $4$: values $7$ and $9$."
              },
              {
                "label": "Average",
                "content": "$(7 + 9)/2 = 8$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Sorted data: $2, 4, 6, 8, 10, 12$. What is the median?",
            "answer": "$6$ values. Positions $3$ and $4$: values $6$ and $8$. Median $= (6 + 8)/2 = 7$."
          }
        ]
      }
    }
  },
  "13": {
    "moduleId": "statistics",
    "title": "Simple Calculating Median Example #2 (DESMOS Method)",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "DESMOS handles even-count medians automatically — it averages the two middle values for you. Type median(values) and get the answer.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Median Example #2 (DESMOS Method)"
          },
          {
            "type": "text",
            "content": "Simple Calculating Median Example #2 (DESMOS Method) (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Median Example #2 (DESMOS Method) (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). Now this exact question can also be solved simply using Desmos. What happens is you simply write median in Desmos and you just enter your data values with a comma in between each value. And we can clearly see that the median is five."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Median Example #2 (DESMOS Method) — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Median Example #2 (DESMOS Method) (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Median Example #2 (DESMOS Method)\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Verify $\\text{median}(3, 5, 7, 9, 11, 13) = 8$ by hand.",
            "steps": [
              {
                "label": "Even count",
                "content": "$6$ values. Positions $3$ and $4$: $7$ and $9$."
              },
              {
                "label": "Average",
                "content": "$(7+9)/2 = 8$ ✓."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "DESMOS gives median(2, 4, 6, 8, 10, 12) = 7. Verify by hand.",
            "answer": "$6$ values. Positions $3$ and $4$: $6$ and $8$. Average: $(6+8)/2 = 7$ ✓."
          }
        ]
      }
    }
  },
  "14": {
    "moduleId": "statistics",
    "title": "Finding Median from Frequency Table",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "use (n+1)/2 for odd n to find the median position. Cumulatively add frequencies to locate which range holds that position.",
        "blocks": [
          {
            "type": "heading",
            "content": "Finding Median from Frequency Table"
          },
          {
            "type": "text",
            "content": "Finding Median from Frequency Table (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Finding Median from Frequency Table (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). For example, for $17$ restaurants the median is the $9$th value: read up the cumulative frequencies in the table until you pass position $9$."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Finding Median from Frequency Table — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Finding Median from Frequency Table (Median) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Finding Median from Frequency Table\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Frequency table: value $10$ (freq $3$), value $20$ (freq $5$), value $30$ (freq $4$). Find the median.",
            "steps": [
              {
                "label": "Total",
                "content": "$n = 12$. Positions $6$ and $7$."
              },
              {
                "label": "Cumulative",
                "content": "Row 1: $3$. Row 2: $8$. Both positions fall in value $20$."
              },
              {
                "label": "Answer",
                "content": "Median $= 20$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Frequency table: score $60$ (freq $2$), $70$ (freq $5$), $80$ (freq $8$), $90$ (freq $3$), $100$ (freq $2$). Find the median.",
            "answer": "$n = 20$. Positions $10$ and $11$. Cumulative: $2, 7, 15, 18, 20$. Both fall in score $80$. Median $= 80$."
          }
        ]
      }
    }
  },
  "15": {
    "moduleId": "statistics",
    "title": "Comparing Mean & Median of Two Data Sets",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "adding a large outlier increased the mean but left the median unchanged at 17. Both middle positions still fell in the same frequency group.",
        "blocks": [
          {
            "type": "heading",
            "content": "Comparing Mean & Median of Two Data Sets"
          },
          {
            "type": "text",
            "content": "Comparing Mean & Median of Two Data Sets (Median) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Comparing Mean & Median of Two Data Sets (Median) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Compute total sum and total count first, then divide. The frequency table summarizes a data set of the weights rounded to the nearest pound of 72 toes. A weight of 39 pounds is added to the original data set, creating a new data set of the weights rounded to the nearest pound of 72 toes. What statement."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "The mean is the balance point of the data set."
          },
          {
            "type": "formula",
            "label": "Comparing Mean & Median of Two Data Sets — Core Rule",
            "content": "$$\\bar{x}=\\frac{\\sum x}{n}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Comparing Mean & Median of Two Data Sets (Median) problems is averaging averages without weighting by group size. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Compute total sum and total count first, then divide. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Comparing Mean & Median of Two Data Sets\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Set A: $5, 10, 15, 20, 25$. Set B adds $100$. Compare mean and median changes.",
            "steps": [
              {
                "label": "Mean",
                "content": "A: $15$. B: $175/6 \\approx 29.2$. Big change."
              },
              {
                "label": "Median",
                "content": "A: $15$. B: $(15+20)/2 = 17.5$. Small change."
              },
              {
                "label": "Answer",
                "content": "Mean changed dramatically; median barely moved."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A data set of $70$ values has median $17$. A value of $39$ is added. Does the median change?",
            "answer": "Probably not. The new median position shifts slightly, but with $70+$ values, one addition rarely moves the median."
          }
        ]
      }
    }
  },
  "16": {
    "moduleId": "statistics",
    "title": "What is the Mode?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "The mode is the most frequently occurring value. A data set can have one mode, multiple modes, or no mode.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is the Mode?"
          },
          {
            "type": "text",
            "content": "What is the Mode? (Mode) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, What is the Mode? (Mode) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. For example, in $2, 4, 4, 4, 7, 9$ the mode is $4$, the value that appears most often."
          },
          {
            "type": "formula",
            "label": "What is the Mode? — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in What is the Mode? (Mode) problems is wrong denominator in conditional probability. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is the Mode?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Find the mode of: $4, 7, 2, 7, 3, 7, 5, 2, 8$.",
            "steps": [
              {
                "label": "Count repeats",
                "content": "$7$ appears $3$ times, $2$ appears $2$ times, all others once."
              },
              {
                "label": "Answer",
                "content": "Mode $= 7$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Data: $10, 20, 20, 30, 30, 40$. What is the mode?",
            "answer": "Both $20$ and $30$ appear twice. Bimodal: modes are $20$ and $30$."
          }
        ]
      }
    }
  },
  "17": {
    "moduleId": "statistics",
    "title": "What is the Range?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Range = Maximum − Minimum. It measures total spread. Adding a constant to all values does NOT change the range.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is the Range?"
          },
          {
            "type": "text",
            "content": "What is the Range? (Range) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, What is the Range? (Range) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. For example, a data set with maximum $52$ and minimum $23$ has range $52 - 23 = 29$."
          },
          {
            "type": "formula",
            "label": "What is the Range? — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in What is the Range? (Range) problems is interval misread in margin-of-error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is the Range?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Data: $3, 7, 12, 15, 22$. What is the range?",
            "steps": [
              {
                "label": "Extremes",
                "content": "Max $= 22$, Min $= 3$."
              },
              {
                "label": "Range",
                "content": "$22 - 3 = 19$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: $5, 8, 12, 15, 20$. Set B adds $10$ to each: $15, 18, 22, 25, 30$. Compare ranges.",
            "answer": "Both have range $= 15$. Adding a constant doesn't change the range."
          }
        ]
      }
    }
  },
  "18": {
    "moduleId": "statistics",
    "title": "Simple Calculating Range Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "range = maximum − minimum. For seven scores with max = 52 and min = 23, range = 29.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Calculating Range Example"
          },
          {
            "type": "text",
            "content": "Simple Calculating Range Example (Range) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Calculating Range Example (Range) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. For example, subtract the least value from the greatest: a set spanning $23$ to $52$ has range $52 - 23 = 29$."
          },
          {
            "type": "formula",
            "label": "Simple Calculating Range Example — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Calculating Range Example (Range) problems is mean/median confusion under outliers. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Calculating Range Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Data: $15, 28, 33, 42, 50$. Find the range.",
            "steps": [
              {
                "label": "Extremes",
                "content": "Max $= 50$, Min $= 15$."
              },
              {
                "label": "Range",
                "content": "$50 - 15 = 35$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Scores: $23, 34, 41, 29, 52, 38, 47$. What is the range?",
            "answer": "Max $= 52$, Min $= 23$. Range $= 29$."
          }
        ]
      }
    }
  },
  "19": {
    "moduleId": "statistics",
    "title": "Comparing Median & Range of Two Data Sets",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "when a constant is added to every value, the median changes but the range stays the same. Addition shifts center, not spread.",
        "blocks": [
          {
            "type": "heading",
            "content": "Comparing Median & Range of Two Data Sets"
          },
          {
            "type": "text",
            "content": "Comparing Median & Range of Two Data Sets (Range) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Comparing Median & Range of Two Data Sets (Range) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Sort first, then locate one middle value (odd n) or average two (even n). For example, if data set $B$ is data set $A$ with $56$ added to every value, the median increases by $56$ but the range is unchanged, since shifting every value keeps the spread the same."
          },
          {
            "type": "diagramRef",
            "visualType": "meanMedianDiagram",
            "description": "A sorted data set with the median (middle value) highlighted."
          },
          {
            "type": "formula",
            "label": "Comparing Median & Range of Two Data Sets — Core Rule",
            "content": "$$\\text{Median}=\\text{middle value after sorting}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Comparing Median & Range of Two Data Sets (Range) problems is taking the middle of an unsorted list. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Sort first, then locate one middle value (odd n) or average two (even n). On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Comparing Median & Range of Two Data Sets\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Set A: $3, 7, 12, 18, 25$. Set B adds $10$ to each. Compare median and range.",
            "steps": [
              {
                "label": "Median",
                "content": "A: $12$. B: $22$ (shifted by $10$)."
              },
              {
                "label": "Range",
                "content": "A: $22$. B: $22$. Unchanged."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: median $40$, range $25$. Set B adds $56$ to each value. Median and range of B?",
            "answer": "Median $= 96$. Range $= 25$ (unchanged)."
          }
        ]
      }
    }
  },
  "20": {
    "moduleId": "statistics",
    "title": "What is Standard Deviation?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Standard deviation measures spread from the mean. You will NOT calculate it on the SAT — just compare distributions visually.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is Standard Deviation?"
          },
          {
            "type": "text",
            "content": "What is Standard Deviation? (Standard Deviation) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, What is Standard Deviation? (Standard Deviation) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. Each of the dot plots shown represents the number of glue sticks brought in by each student for two classes, class A and class B. Which statement best compares the standard deviations of the number of glue sticks brought in by each student for these."
          },
          {
            "type": "formula",
            "label": "What is Standard Deviation? — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in What is Standard Deviation? (Standard Deviation) problems is interval misread in margin-of-error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is Standard Deviation?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Class A scores: mostly $78$-$82$. Class B scores: $55$ to $100$. Which has larger SD?",
            "steps": [
              {
                "label": "Compare spread",
                "content": "A is clustered ($4$-point range). B is widespread ($45$-point range)."
              },
              {
                "label": "Answer",
                "content": "Class B has larger standard deviation."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: $\\{10, 10, 10, 10\\}$. Set B: $\\{8, 9, 11, 12\\}$. Compare SDs.",
            "answer": "Set A: all identical → SD $= 0$. Set B: has spread → SD $> 0$. B has larger SD."
          }
        ]
      }
    }
  },
  "21": {
    "moduleId": "statistics",
    "title": "Simple Standard Deviation Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "two dot plots that are shifted copies of each other have EQUAL standard deviations. SD depends on shape/spread, not position.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Standard Deviation Example"
          },
          {
            "type": "text",
            "content": "Simple Standard Deviation Example (Standard Deviation) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Simple Standard Deviation Example (Standard Deviation) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. Each of the dot plots shown represents the number of glue sticks brought in by each student for two classes, class A and class B. Which statement best compares the standard deviations of the number of glue sticks brought in by each student for these."
          },
          {
            "type": "formula",
            "label": "Simple Standard Deviation Example — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Simple Standard Deviation Example (Standard Deviation) problems is mean/median confusion under outliers. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Standard Deviation Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Set A: $2, 4, 6, 8, 10$. Set B: $102, 104, 106, 108, 110$. Compare SDs.",
            "steps": [
              {
                "label": "Observe",
                "content": "B is A shifted by $100$. Same spread pattern."
              },
              {
                "label": "Answer",
                "content": "Standard deviations are equal."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: {3, 4, 5, 5, 6, 7}. Set B: {13, 14, 15, 15, 16, 17}. Compare SDs.",
            "answer": "B is A shifted right by $10$. Same spread → same SD."
          }
        ]
      }
    }
  },
  "22": {
    "moduleId": "statistics",
    "title": "Complex Standard Deviation Example",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "same median does NOT mean same standard deviation. If one set is more clustered and another more spread out, their SDs differ even if medians match.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complex Standard Deviation Example"
          },
          {
            "type": "text",
            "content": "Complex Standard Deviation Example (Standard Deviation) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Complex Standard Deviation Example (Standard Deviation) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. The dot plots represent the distribution of values in data sets A and B. Which of the following statements must be true? Statement one says the median of data set A is equal to the median of data set B. Statement two says the standard deviation of da."
          },
          {
            "type": "formula",
            "label": "Complex Standard Deviation Example — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Complex Standard Deviation Example (Standard Deviation) problems is wrong denominator in conditional probability. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complex Standard Deviation Example\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Set A: $14, 15, 15, 15, 16$. Set B: $10, 12, 15, 18, 20$. Both have median $15$. Compare SDs.",
            "steps": [
              {
                "label": "Set A",
                "content": "Values within $1$ of center. Very clustered."
              },
              {
                "label": "Set B",
                "content": "Values span $10$ units. More spread."
              },
              {
                "label": "Answer",
                "content": "Set B has larger SD despite same median."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Set A: $\\{10, 14, 15, 15, 16, 20\\}$. Set B: $\\{5, 10, 15, 15, 20, 25\\}$. Same median. Compare SDs.",
            "answer": "A is more clustered (range $10$). B is more spread (range $20$). B has larger SD."
          }
        ]
      }
    }
  },
  "23": {
    "moduleId": "statistics",
    "title": "What is Margin of Error?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Margin of error creates a confidence interval: sample statistic ± margin of error. You cannot say the population value IS the sample statistic — only that it's likely within the interval.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is Margin of Error?"
          },
          {
            "type": "text",
            "content": "The margin of error tells you how much a survey result might differ from the true population value. A confidence interval is: sample statistic $\\pm$ margin of error."
          },
          {
            "type": "text",
            "content": "On the SAT: \"68% of respondents prefer X, with a margin of error of $\\pm 3\\%$\" means the true value is between $65\\%$ and $71\\%$. Larger sample → smaller margin of error. The SAT tests interpretation, not calculation. To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has a characteristic is 0.49 with an assoc."
          },
          {
            "type": "formula",
            "label": "What is Margin of Error? — Core Rule",
            "content": "$$\\text{Interval}=\\hat{p}\\pm\\text{MOE}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Survey: $55\\% \\pm 4\\%$. Confidence interval: $[51\\%, 59\\%]$. We cannot conclude the true value exceeds $60\\%$ because $59\\% < 60\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think a larger margin of error means the study is more reliable (it is the opposite). Others confuse the confidence interval boundaries with the margin of error itself. Margin of error = half the width of the confidence interval. Bigger sample → narrower interval → more precision → smaller margin of error."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Find lower and upper bounds first, then interpret claims against the full interval. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is Margin of Error?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$49\\%$ support a policy, MoE $= 4\\%$. Which is plausible? (A) $0.42$ (B) $0.46$ (C) $0.54$ (D) $0.60$",
            "steps": [
              {
                "label": "Interval",
                "content": "$[0.45, 0.53]$."
              },
              {
                "label": "Check",
                "content": "(B) $0.46$ is inside ✓."
              },
              {
                "label": "Answer",
                "content": "**(B)**."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Sample mean: $\\$4.23$, MoE: $\\$0.08$. Is $\\$4.30$ plausible?",
            "answer": "Interval: $[\\$4.15, \\$4.31]$. $\\$4.30$ is inside → yes, plausible."
          }
        ]
      }
    }
  },
  "24": {
    "moduleId": "statistics",
    "title": "Simple Margin of Error Example #1",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "proportion estimated at 0.49 with MoE 0.04. Confidence interval = [0.45, 0.53]. Any value in this range is plausible.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Margin of Error Example #1"
          },
          {
            "type": "text",
            "content": "The margin of error tells you how much a survey result might differ from the true population value. A confidence interval is: sample statistic $\\pm$ margin of error."
          },
          {
            "type": "text",
            "content": "On the SAT: \"68% of respondents prefer X, with a margin of error of $\\pm 3\\%$\" means the true value is between $65\\%$ and $71\\%$. Larger sample → smaller margin of error. The SAT tests interpretation, not calculation. To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has a characteristic is 0.49 with an assoc."
          },
          {
            "type": "formula",
            "label": "Simple Margin of Error Example #1 — Core Rule",
            "content": "$$\\text{Interval}=\\hat{p}\\pm\\text{MOE}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Survey: $55\\% \\pm 4\\%$. Confidence interval: $[51\\%, 59\\%]$. We cannot conclude the true value exceeds $60\\%$ because $59\\% < 60\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think a larger margin of error means the study is more reliable (it is the opposite). Others confuse the confidence interval boundaries with the margin of error itself. Margin of error = half the width of the confidence interval. Bigger sample → narrower interval → more precision → smaller margin of error."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Find lower and upper bounds first, then interpret claims against the full interval. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Margin of Error Example #1\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Estimate: $0.62$, MoE: $0.03$. Is $0.58$ plausible?",
            "steps": [
              {
                "label": "Interval",
                "content": "$[0.59, 0.65]$."
              },
              {
                "label": "Check",
                "content": "$0.58 < 0.59$, outside."
              },
              {
                "label": "Answer",
                "content": "Not plausible."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Estimate: $0.49$, MoE: $0.04$. Is $0.54$ plausible?",
            "answer": "Interval: $[0.45, 0.53]$. $0.54 > 0.53$ → NOT plausible."
          }
        ]
      }
    }
  },
  "25": {
    "moduleId": "statistics",
    "title": "Simple Margin of Error Example #2",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "mean price $4.23 with MoE $0.08. Plausible range: $4.15 to $4.31. Increasing sample size reduces MoE.",
        "blocks": [
          {
            "type": "heading",
            "content": "Simple Margin of Error Example #2"
          },
          {
            "type": "text",
            "content": "The margin of error tells you how much a survey result might differ from the true population value. A confidence interval is: sample statistic $\\pm$ margin of error."
          },
          {
            "type": "text",
            "content": "On the SAT: \"68% of respondents prefer X, with a margin of error of $\\pm 3\\%$\" means the true value is between $65\\%$ and $71\\%$. Larger sample → smaller margin of error. The SAT tests interpretation, not calculation. An analyst collected data on the price of a carton of grape tomatoes at 30 locations selected at random in Utah. The mean price of a carton of grape tomatoes in Utah was estimated to be $4.23 with an estimated margin error of 8. Which of the followin."
          },
          {
            "type": "formula",
            "label": "Simple Margin of Error Example #2 — Core Rule",
            "content": "$$\\text{Interval}=\\hat{p}\\pm\\text{MOE}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "Survey: $55\\% \\pm 4\\%$. Confidence interval: $[51\\%, 59\\%]$. We cannot conclude the true value exceeds $60\\%$ because $59\\% < 60\\%$."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students think a larger margin of error means the study is more reliable (it is the opposite). Others confuse the confidence interval boundaries with the margin of error itself. Margin of error = half the width of the confidence interval. Bigger sample → narrower interval → more precision → smaller margin of error."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Find lower and upper bounds first, then interpret claims against the full interval. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Simple Margin of Error Example #2\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "Sample mean: $72$, MoE: $5$. Which are plausible: $65$, $68$, $75$, $80$?",
            "steps": [
              {
                "label": "Interval",
                "content": "$[67, 77]$."
              },
              {
                "label": "Check each",
                "content": "$65$ (no), $68$ (yes), $75$ (yes), $80$ (no)."
              },
              {
                "label": "Answer",
                "content": "$68$ and $75$ are plausible."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Sample mean: $\\$4.23$, MoE: $\\$0.08$. Researcher doubles sample size. What happens to MoE?",
            "answer": "MoE decreases. Larger samples produce narrower confidence intervals."
          }
        ]
      }
    }
  },
  "26": {
    "moduleId": "statistics",
    "title": "What is Probability?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Probability = favorable outcomes ÷ total outcomes. Always between 0 and 1. The SAT tests whether you pick the right numerator and denominator.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is Probability?"
          },
          {
            "type": "text",
            "content": "Conditional probability asks: \"given that something is already true, what is the probability of another event?\" It narrows the sample space to only the cases where the condition holds."
          },
          {
            "type": "text",
            "content": "Probability is the number of favorable outcomes divided by the total number of equally likely outcomes: $P(\\text{event}) = \\frac{\\text{favorable}}{\\text{total}}$. Every probability is between $0$ and $1$. For example, the probability of drawing a red marble from a bag of $4$ red and $6$ blue marbles is $\\frac{4}{10} = 0.4$."
          },
          {
            "type": "formula",
            "label": "What is Probability? — Core Rule",
            "content": "$$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "50 males total, 20 prefer math. $P(\\text{math} \\mid \\text{male}) = 20/50 = 0.40$. NOT $20/200$ (grand total)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the grand total instead of the conditional group total. \"Given male\" means the denominator is the total number of males, not all students. \"Given B\" → denominator is B's total. Numerator is the overlap of A and B. Ignore everything outside of B."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Given B means denominator is restricted to group B only. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is Probability?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Bag: $3$ red, $5$ blue, $2$ green. What is $P(\\text{blue})$?",
            "steps": [
              {
                "label": "Favorable",
                "content": "$5$ blue."
              },
              {
                "label": "Total",
                "content": "$3 + 5 + 2 = 10$."
              },
              {
                "label": "Answer",
                "content": "$P = 5/10 = 1/2$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$52$-card deck. What is $P(\\text{heart})$?",
            "answer": "$13/52 = 1/4 = 0.25$."
          }
        ]
      }
    }
  },
  "27": {
    "moduleId": "statistics",
    "title": "Complementary Probability",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "P(not A) = 1 − P(A). If it's easier to find the complement, find that and subtract from 1.",
        "blocks": [
          {
            "type": "heading",
            "content": "Complementary Probability"
          },
          {
            "type": "text",
            "content": "Conditional probability asks: \"given that something is already true, what is the probability of another event?\" It narrows the sample space to only the cases where the condition holds."
          },
          {
            "type": "text",
            "content": "The complement rule: $P(\\text{not } A) = 1 - P(A)$. When a question asks for \"at least one\" or \"none,\" it is often faster to compute the complement. For example, if the probability of rain is $0.3$, the probability of no rain is $1 - 0.3 = 0.7$."
          },
          {
            "type": "formula",
            "label": "Complementary Probability — Core Rule",
            "content": "$$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "50 males total, 20 prefer math. $P(\\text{math} \\mid \\text{male}) = 20/50 = 0.40$. NOT $20/200$ (grand total)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the grand total instead of the conditional group total. \"Given male\" means the denominator is the total number of males, not all students. \"Given B\" → denominator is B's total. Numerator is the overlap of A and B. Ignore everything outside of B."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Given B means denominator is restricted to group B only. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Complementary Probability\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Easy",
            "problem": "Bag: $3$ red, $5$ blue, $2$ green. $P(\\text{not blue})$?",
            "steps": [
              {
                "label": "P(blue)",
                "content": "$5/10 = 0.5$."
              },
              {
                "label": "Complement",
                "content": "$1 - 0.5 = 0.5$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "Die rolled. $P(\\text{not } 6)$?",
            "answer": "$1 - 1/6 = 5/6$."
          }
        ]
      }
    }
  },
  "28": {
    "moduleId": "statistics",
    "title": "What is Conditional Probability?",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Conditional probability restricts the sample space. \"Given that\" or \"among those who\" tells you to change the denominator to that group's total.",
        "blocks": [
          {
            "type": "heading",
            "content": "What is Conditional Probability?"
          },
          {
            "type": "text",
            "content": "Conditional probability asks: \"given that something is already true, what is the probability of another event?\" It narrows the sample space to only the cases where the condition holds."
          },
          {
            "type": "text",
            "content": "$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$. On the SAT, this usually appears with a two-way frequency table: \"given that a student is male, what is the probability they prefer math?\" means look at the MALE row only, then divide the math count by the male total. For example, if $30$ of $50$ male students prefer math, then $P(\\text{math} \\mid \\text{male}) = \\frac{30}{50} = 0.6$."
          },
          {
            "type": "formula",
            "label": "What is Conditional Probability? — Core Rule",
            "content": "$$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Example",
            "content": "50 males total, 20 prefer math. $P(\\text{math} \\mid \\text{male}) = 20/50 = 0.40$. NOT $20/200$ (grand total)."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Students divide by the grand total instead of the conditional group total. \"Given male\" means the denominator is the total number of males, not all students. \"Given B\" → denominator is B's total. Numerator is the overlap of A and B. Ignore everything outside of B."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Given B means denominator is restricted to group B only. Use the correction rule above as your final verification step before selecting an answer."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"What is Conditional Probability?\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "$200$ students: $80$ play sports, $30$ of those also play music. $P(\\text{music} \\mid \\text{sports})$?",
            "steps": [
              {
                "label": "Given group",
                "content": "Sports: $80$."
              },
              {
                "label": "Both",
                "content": "Sports AND music: $30$."
              },
              {
                "label": "Answer",
                "content": "$30/80 = 3/8 = 0.375$."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$55$ prefer math, $30$ of those are female. $P(\\text{female} \\mid \\text{math})$?",
            "answer": "$30/55 \\approx 0.545$."
          }
        ]
      }
    }
  },
  "29": {
    "moduleId": "statistics",
    "title": "Reading Two-Way Tables",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "Two-way tables organize data by two categorical variables. The SAT asks for probabilities, conditional probabilities, and relative frequency comparisons from these tables.",
        "blocks": [
          {
            "type": "heading",
            "content": "Reading Two-Way Tables"
          },
          {
            "type": "text",
            "content": "Reading Two-Way Tables (Two-Way Tables) is a foundational skill on the SAT Math section. Understanding the underlying concept — not just memorizing formulas — allows you to recognize the pattern in seconds, regardless of how the question is worded."
          },
          {
            "type": "text",
            "content": "On the SAT, Reading Two-Way Tables (Two-Way Tables) questions test your ability to translate wording into math. The key is a two-step decision process: first, identify exactly what the question is asking (value, relationship, count, or behavior). Second, choose the representation — algebraic, graphical, or numerical — that exposes the answer most directly. Decide the statistic type first, then apply its dedicated rule. For example, in a two-way table, the probability that a randomly chosen student is a female who prefers science is the female-and-science cell divided by the grand total."
          },
          {
            "type": "formula",
            "label": "Reading Two-Way Tables — Core Rule",
            "content": "$$\\bar{x} = \\frac{\\sum x}{n},\\quad P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$$",
            "note": "Use this after identifying what the question asks. Do not apply blindly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "On the SAT, the most common mistake in Reading Two-Way Tables (Two-Way Tables) problems is interval misread in margin-of-error. This happens because students rush through the setup phase, reading the question quickly and making assumptions about what is being asked. Before computing, re-read the question and underline the exact quantity it asks for. After solving, verify that your answer matches the requested form (value, equation, expression, or description). This two-second check eliminates the most common trap."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Decide the statistic type first, then apply its dedicated rule. On test day, spend the first 5 seconds on recognition (what type of problem is this?) and the last 5 seconds on verification (does my answer match what was asked?)."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Reading Two-Way Tables\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "From the table: find $P(\\text{Female} \\mid \\text{Math})$ and $P(\\text{Math} \\mid \\text{Female})$.",
            "steps": [
              {
                "label": "P(Female | Math)",
                "content": "Given Math ($55$). Female AND Math $= 30$. $P = 30/55 \\approx 0.545$."
              },
              {
                "label": "P(Math | Female)",
                "content": "Given Female ($50$). Female AND Math $= 30$. $P = 30/50 = 0.6$."
              },
              {
                "label": "Key",
                "content": "Different probabilities — the \"given\" group changes the denominator."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "$P(\\text{Male AND English})$? $P(\\text{English} \\mid \\text{Male})$?",
            "answer": "Joint: $25/100 = 0.25$. Conditional: $25/50 = 0.5$."
          }
        ]
      }
    }
  },
  "30": {
    "moduleId": "statistics",
    "title": "Box Plots & Histograms",
    "sections": {
      "learn": {
        "title": "Learn",
        "summary": "A box plot is a five-number picture (min, Q1, median, Q3, max) where each segment holds about 25% of the data; a histogram groups data into bins. Both let you read the median but hide the exact mean.",
        "blocks": [
          {
            "type": "heading",
            "content": "Box Plots & Histograms"
          },
          {
            "type": "text",
            "content": "A box plot summarizes a data set with five numbers: the minimum, the first quartile $Q_1$, the median, the third quartile $Q_3$, and the maximum. The rectangle spans $Q_1$ to $Q_3$, a line inside marks the median, and two whiskers reach out to the smallest and largest values."
          },
          {
            "type": "text",
            "content": "The box holds the middle $50\\%$ of the data, and each of the four segments — the two whiskers and the two halves of the box — contains about $25\\%$ of the values. A segment's width shows how spread out that quarter is, not how many points it holds: a wide whisker still contains a quarter of the data, just stretched over more values. The interquartile range measures the spread of that middle half."
          },
          {
            "type": "formula",
            "label": "Interquartile Range — Middle 50% Spread",
            "content": "$$\\text{IQR} = Q_3 - Q_1$$",
            "note": "The box (Q1 to Q3) always contains the middle 50% of the data. IQR is its width."
          },
          {
            "type": "callout",
            "variant": "success",
            "title": "Quick Read",
            "content": "Box plot with min $12$, $Q_1 = 20$, median $26$, $Q_3 = 34$, max $50$. Middle $50\\%$ lies between $20$ and $34$. IQR $= 34 - 20 = 14$. Range $= 50 - 12 = 38$."
          },
          {
            "type": "table",
            "headers": ["What a box plot shows", "What a box plot hides"],
            "rows": [
              ["The five-number summary (min, Q1, median, Q3, max)", "The mean of the data"],
              ["Range, IQR, and skew (the stretched side is the tail)", "The number of data points (the count)"],
              ["The fraction above or below any quartile (~25% per segment)", "Any individual data value"]
            ]
          },
          {
            "type": "text",
            "content": "A histogram groups the data into equal-width bins and draws a bar whose height is the count of values in each bin. You can find the median bin by counting up the frequencies, and you can compare the shapes of two distributions. Because the individual values are bundled into bins, a histogram — like any grouped data — lets you estimate the mean but never compute it exactly."
          },
          {
            "type": "heading",
            "content": "Common Mistake"
          },
          {
            "type": "text",
            "content": "Two box-plot misreads cost the most points. First, treating a wide box or whisker as \"more data\": every segment holds about $25\\%$ of the values regardless of width, so width means spread, not count. Second, reading the middle line as the mean: that line is the median, and a box plot cannot show the mean at all. When a question asks you to compare the means of two box plots, check whether the display can even answer — often the correct choice is that it cannot be determined."
          },
          {
            "type": "heading",
            "content": "Test-Day Strategy"
          },
          {
            "type": "text",
            "content": "Label the five numbers against the axis first, then translate the question into five-number arithmetic: range is max minus min, IQR is $Q_3 - Q_1$, and the middle $50\\%$ sits between $Q_1$ and $Q_3$. Before answering anything about the mean, the count, or a single value, confirm the display can actually determine it."
          }
        ]
      },
      "practice": {
        "title": "Practice",
        "summary": "Put \"Box Plots & Histograms\" into practice with a worked example and a checkpoint question.",
        "blocks": [
          {
            "type": "example",
            "difficulty": "Medium",
            "problem": "A box plot shows minimum $12$, $Q_1 = 20$, median $= 26$, $Q_3 = 34$, maximum $= 50$. Find the interquartile range and the two values the middle $50\\%$ of the data falls between.",
            "steps": [
              {
                "label": "Middle 50%",
                "content": "The box spans $Q_1$ to $Q_3$, so the middle half of the data lies between $20$ and $34$."
              },
              {
                "label": "IQR",
                "content": "$\\text{IQR} = Q_3 - Q_1 = 34 - 20 = 14$."
              },
              {
                "label": "Sanity check",
                "content": "The full range is $50 - 12 = 38$, wider than the IQR because the whiskers stretch past the box."
              }
            ]
          },
          {
            "type": "checkpointQuestion",
            "question": "A histogram groups $30$ test scores into bins: $60$-$69$ ($4$ students), $70$-$79$ ($12$), $80$-$89$ ($9$), $90$-$99$ ($5$). Which bin contains the median, and can you compute the exact mean from the histogram?",
            "answer": "$n = 30$, so the median is the average of the $15$th and $16$th values. Cumulative counts: $4, 16, 25, 30$. Both the $15$th and $16$th values fall in the $70$-$79$ bin, so the median is in $70$-$79$. You cannot compute the exact mean — grouped bins hide each student's exact score, so a histogram gives only an estimate."
          }
        ]
      }
    }
  }
};
