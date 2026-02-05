# Gemini Image Generation Prompts for Practice Test 2

Use these prompts with Gemini to generate SAT-style images for the questions that need them.

## Image Requirements
- **Style**: Clean, SAT-style black and white diagrams
- **Format**: PNG with transparent or white background
- **Size**: Approximately 400x300 pixels
- **Font**: Clear, sans-serif labels

---

## Module 1, Question 8 (m1_q8.png)
**Linear Function Graph - g(2) = 8**

**Prompt:**
```
Create a clean SAT-style coordinate plane graph showing a linear function g(x).

Requirements:
- Standard xy-coordinate grid with x-axis from -2 to 6 and y-axis from -2 to 12
- Tick marks at every integer with labels at 0, 2, 4, 6 on x-axis and 0, 4, 8, 12 on y-axis
- A straight line that passes through the points (0, 4) and (2, 8)
- The line should extend beyond these points
- Label the line "y = g(x)" in italic
- Label axes with "x" and "y" in italic
- Black lines on white background
- Clean, professional SAT test style
```

**Expected values:** g(0) = 4, g(2) = 8 (slope = 2, y-intercept = 4)

---

## Module 1, Question 13 (m1_q13.png)
**Function Graph - f(x) = 2.5 has 3 solutions**

**Prompt:**
```
Create a clean SAT-style coordinate plane graph showing a wavy function y = f(x) that crosses the horizontal line y = 2.5 exactly three times.

Requirements:
- Standard xy-coordinate grid with x-axis from -4 to 6 and y-axis from -2 to 6
- Tick marks at integers, labels at key values
- A smooth curve (like a cubic or wavy function) that:
  - Crosses y = 2.5 at approximately x = -2, x = 1, and x = 4
  - Has local maximum above y = 2.5 and local minimum below y = 2.5
- Show a dashed horizontal line at y = 2.5 (optional)
- Label the curve "y = f(x)" in italic
- Label axes with "x" and "y" in italic
- Black lines on white background
- Clean, professional SAT test style
```

**Key requirement:** The graph must cross y = 2.5 exactly 3 times.

---

## Module 1, Question 16 (m1_q16.png)
**Function Graph for Transformation - g(x) = f(x) + 2**

**Prompt:**
```
Create a clean SAT-style coordinate plane graph showing a function y = f(x).

Requirements:
- Standard xy-coordinate grid with x-axis from -4 to 4 and y-axis from -6 to 6
- Tick marks at integers, labels at key values
- A piecewise linear function or curved function where:
  - f(0) = 3 (so that g(0) = 5 after shifting up 2)
  - f(1) = -2 (so that g(1) = 0 after shifting up 2)
  - The function should be clearly readable
- Mark the points (0, 3) and (1, -2) with small dots
- Label the curve "y = f(x)" in italic
- Label axes with "x" and "y" in italic
- Black lines on white background
- Clean, professional SAT test style
```

**Key values:** f(0) = 3, f(1) = -2 (for the transformation question)

---

## Module 1, Question 20 (m1_q20.png)
**Dot Plots - Set 1 vs Set 2 (Same SD, Different Means)**

**Prompt:**
```
Create two SAT-style dot plots stacked vertically, labeled "Set 1" and "Set 2".

Requirements for Set 1 (top):
- Number line from 1 to 9
- Dots centered around value 3-4
- Example distribution: dots at 2(1 dot), 3(2 dots), 4(3 dots), 5(2 dots), 6(1 dot)
- Symmetric spread

Requirements for Set 2 (bottom):
- Same number line from 1 to 9
- Dots centered around value 5-6 (shifted right from Set 1)
- Same shape/spread as Set 1 but shifted right
- Example: dots at 4(1 dot), 5(2 dots), 6(3 dots), 7(2 dots), 8(1 dot)

Key visual requirement:
- Both plots should have the SAME shape (same standard deviation)
- Set 2 should be clearly centered at a HIGHER value than Set 1
- This represents: equal SDs, but Mean of Set 1 < Mean of Set 2
- Clean black dots on white background
- Clear axis labels showing numbers
```

**Answer clue:** Standard deviations are equal; Mean of Set 1 < Mean of Set 2 (Answer C)

---

## Module 2, Question 18 (m2_q18.png)
**Dot Plots - Data Set J vs Data Set K (Same Mean, Different SDs)**

**Prompt:**
```
Create two SAT-style dot plots stacked vertically, labeled "Data Set J" and "Data Set K".

Requirements for Data Set J (top):
- Number line from 1 to 11
- Dots spread widely around center value 6
- Example distribution: dots at 2(1), 3(1), 4(1), 5(2), 6(2), 7(2), 8(1), 9(1), 10(1)
- Wide spread from center (high standard deviation)

Requirements for Data Set K (bottom):
- Same number line from 1 to 11
- Dots tightly clustered around the same center value 6
- Example: dots at 5(3), 6(4), 7(3)
- Narrow spread (low standard deviation)

Key visual requirement:
- Both plots should be centered at the SAME value (same mean)
- Data Set J should be clearly MORE SPREAD OUT than Data Set K
- This represents: equal means, but SD of J > SD of K
- Clean black dots on white background
- Clear axis labels showing numbers
```

**Answer clue:** Means are equal; SD of J > SD of K (Answer D)

---

## File Naming Convention
After generating each image, save as:
- `m1_q8.png` - Module 1, Question 8
- `m1_q13.png` - Module 1, Question 13
- `m1_q16.png` - Module 1, Question 16
- `m1_q20.png` - Module 1, Question 20
- `m2_q18.png` - Module 2, Question 18

## Directory
Save all images to:
`/public/images/questions/practiceTest2/`
