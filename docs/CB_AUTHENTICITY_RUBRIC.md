# CB Authenticity Rubric

> The hard requirement for the Module 1+2 recalibration round: every PerformSAT item's stem, choices, distractors, and explanation must read as if it had been pulled from the College Board Educator QBank or one of the official PT 4-11 digital tests. Items that violate any rule in this rubric fail and must be re-authored.

This rubric is distilled from:
- The 8 official CB digital practice tests (PT 4-11, in `reference/college-board/`).
- The 1,756-item Educator QBank (`scripts/generated/cbEducatorQBank.json`), specifically the 945 cached MCQ items with stem and answer-option content.
- Past PerformSAT calibration drift documented in `module1-test-1-upgrade-proposal.md`.

The rubric is enforced two ways:
1. Manual review against the Authenticity Calibration Set (`docs/calibration_set/`) — round 6's exit gate.
2. The `--lint` mode in `scripts/calibrateModule.mjs` (Lane B) — automated checks for the easier rules (LaTeX delimiters, distractor count, explanation pattern).

---

## 1. Stem patterns by difficulty band

The CB digital SAT Math test sorts items into 7 score bands. Items in the same difficulty bucket (E/M/H) span 2-3 bands; the band tells you "where in the bucket" the item sits.

| score_band | difficulty bucket | what it feels like |
|------------|-------------------|--------------------|
| 1 | easy | one-step translation; trivial substitution |
| 2 | easy | one-step with a tiny twist (units, sign, or order) |
| 3 | easy | shifted-output, reverse-percent, or two-quantity ratio |
| 4 | medium | two-step setup; system inference; interpret slope/intercept in context |
| 5 | medium | multi-step with one buried operation (factor, distribute, then solve) |
| 6 | hard | concept fusion (e.g., discriminant + system, or vertex form + coordinate geometry) |
| 7 | hard | function transformation, compound condition, or non-obvious algebraic identity |

The recalibration target is to lift every existing PerformSAT item to **top-of-band** (3 / 5 / 7) — easy items at band 3, medium at band 5, hard at band 7.

### 1.1 Shifted-output (easy ceiling, band 3)

Pattern: solve for a related expression, not the variable itself. The student who "stops one step early" reports the variable's value as the answer.

**CB QBank reference (e.g., `2050beca-5f4f-41a5-92ca-3fcf29a6cc77`, "Linear functions" / band 2):** the function $f$ is given by an explicit linear formula; the question asks for $f$ at a specific input. Students who do not actually substitute give the formula's intercept as the answer.

**PerformSAT-style ceiling:** instead of asking for $f(7)$ directly, ask for $f(7) + 5$ or "what is $2 \cdot f(7) - 1$?". This forces one extra step beyond pure substitution.

> Worked example (PerformSAT version):
>
> *If $3x - 8 = 7$, what is the value of $3x + 8$?*
>
> Choices: $5$ (stops at $x$, returns $x$ instead of $3x+8$), $15$ (returns $3x$ instead of $3x+8$), $19$ (subtracts $8$ where it should add), $23$ (correct).
>
> The right-answer reasoning: $3x - 8 = 7 \Rightarrow 3x = 15 \Rightarrow 3x + 8 = 23$. The student never has to find $x$ explicitly — recognizing that the requested expression differs from the given one by exactly $+16$ is faster.

### 1.2 Reverse-percent (easy ceiling, band 3)

Pattern: given a part as a percent of an unknown total, find the total. Distinct from "find a percent of a known total" (which is band 1).

**CB QBank reference (`82528d01-5c88-4cef-8a3b-5a072a0671dc`, "Probability" / band 4 — same skill family):** colored cubes in a bag, asked the probability that a randomly selected cube is "neither blue nor yellow". Reverse logic: count what's *left*, not what's named.

> Worked example (PerformSAT version):
>
> *If $35\%$ of a city's population is under age 18, and there are $1{,}260$ residents under age 18, what is the city's total population?*
>
> Choices: $441$ (multiplies $1260 \times 0.35$ — applies the percent forward), $4{,}536$ (uses $0.35$ correctly but divides $1{,}260$ by $0.65$ instead, the "complement" trap), $3{,}600$ (correct: $1260 / 0.35$), $1{,}904$ (uses $1260 / 0.66$ — rounding error compounding the wrong base).

### 1.3 Two-step setup (medium, band 4-5)

Pattern: the stem gives an equation or system, then asks for a quantity at a *shifted* input. Two operations between the given setup and the answer.

**CB QBank reference (`item-003` in calibration set, "Systems of two linear equations" / medium):** a 2×2 linear system; ask only for $y$, not the full $(x, y)$. Students who solve for $x$ first and then try to back-solve for $y$ make sign errors; the elimination shortcut (add the two equations to cancel $x$) gets the answer in one step.

> Worked example (PerformSAT version):
>
> *The function $g$ is defined by $g(x) = 4x + 3$. The function $h$ is defined by $h(x) = g(x - 2) + 1$. What is the value of $h(5)$?*
>
> Distractors target: applying the shift in the wrong direction ($g(5+2)+1 = 32$), forgetting the $+1$ tail ($g(5-2) = 15$), and "stops early" by computing $g(5) = 23$.

### 1.4 System inference (medium-hard, band 5-6)

Pattern: two equations describe a real-world context; question asks about a derived quantity that requires combining both equations (often subtraction or substitution).

**CB QBank reference (calibration set `item-018`, "Percentages" / hard band 6 ish):** "$140$ is $p\%$ greater than $10$. What is $p$?" — single-equation but the *interpretation* of "$p\%$ greater" is the trap. Many students compute $140/10 = 14 \to 14\%$ or $140 - 10 = 130 \to 130\%$ instead of the correct $((140-10)/10) \cdot 100 = 1{,}300$.

> Worked example (PerformSAT version):
>
> *The total cost of $a$ adult tickets and $c$ child tickets is given by $12a + 7c = 184$. If a group buys $2$ more adult tickets than child tickets, how many child tickets did they buy?*

### 1.5 Concept fusion (hard, band 6-7)

Pattern: two distinct skills required in the same item — discriminant AND a coefficient inference, or vertex form AND coordinate translation, or exponent rules AND a substitution.

**CB QBank reference (calibration set `item-038`, "Quadratic equations" / hard band 7):** "$5x^2 - bx + 45 = 0$ has no real solutions. What is the greatest integer value of $b$?" — fuses discriminant analysis ($b^2 - 4ac < 0$) with an integer-bounding step ($b^2 < 900 \Rightarrow |b| < 30 \Rightarrow b \leq 29$).

> Worked example (PerformSAT version):
>
> *The parabola defined by $y = 2(x - h)^2 + k$ has its vertex at the point $(3, -8)$ and passes through $(1, 0)$. What is the value of $h + k$?*

### 1.6 Function transformation (hard, band 7)

Pattern: composition with a horizontal/vertical shift, reflection, or scaling.

**CB QBank reference (calibration set `item-034`, "Function composition" / hard):** $g(x) = 2x + 1$, $h(x) = x^2 - 3$, $h(g(a)) = 46 \Rightarrow$ find positive $a$. Forces the student to solve $h(2a+1) = 46$ algebraically, not just chain through.

> Worked example (PerformSAT version):
>
> *If $f(x) = x^2$ and $g(x) = f(x - 2) + 5$, for what value of $x$ does $g$ attain its minimum?*

---

## 2. Distractor logic — the four-misconception rule

Every MCQ item must follow this distractor pattern. **No random/nonsense distractors.** Each wrong answer must correspond to a specific, namable student error.

| Slot | Misconception | How it produces the wrong answer |
|------|---------------|----------------------------------|
| 1 | "stops one step early" | Returns an intermediate value (e.g., $x$ when the question asks for $3x+8$) |
| 2 | "applies the inverse operation" | Adds where they should subtract, divides where they should multiply, or sign error |
| 3 | "off-by-one / wrong base" | Uses the wrong reference quantity (e.g., divides by the grand total when the conditional total is correct), or a procedural slip in arithmetic |
| 4 | correct | The answer |

The order of slots is **shuffled** in the actual MCQ — A/B/C/D is randomized so the misconception map is not pattern-detectable. The four slots are conceptual, not positional.

When authoring an explanation (see §5), the "Why the wrong answers are tempting" block must explicitly name each misconception. If a distractor cannot be mapped to a specific misconception, it fails this rubric and must be replaced.

### Distractor smell tests

A distractor fails the rubric if any of these are true:
- It is a "round number" with no derivation (e.g., $100$ when no quantity in the stem produces $100$).
- It has the wrong magnitude (e.g., correct answer is $\frac{1}{2}$ and a distractor is $50$).
- It is the *negation* of the correct answer with no plausible sign-error path.
- Two distractors map to the *same* misconception.

### Worked CB-paired example

CB-style item (paraphrased from QBank `item-002` in calibration set, Probability, band 4):

> *In a bag, there are $7$ red, $4$ white, $33$ blue, and $33$ yellow cubes. If one cube is selected at random, what is the probability of selecting a cube that is **neither** blue nor yellow?*
>
> A. $\frac{6}{7}$  — uses $66/77$ wrongly: counts blue+yellow as numerator (the **inverse-op** error)
>
> B. $\frac{7}{11}$ — counts only red ($\frac{7}{77}$) reduced wrongly (off-by-one / partial complement)
>
> C. $\frac{1}{3}$ — guesses based on "three of four colors are bad" (random ratio)
>
> D. $\frac{1}{7}$ — correct: $\frac{11}{77} = \frac{1}{7}$

Choice C is the weak link in this item — it is the kind of distractor we would replace in a PerformSAT version. A stronger replacement: $\frac{11}{77}$ (the unreduced correct value), which catches a student who computed correctly but failed to simplify. That is a real misconception with a name; "guessing based on a ratio of color counts" is not.

---

## 3. LaTeX & formatting

These rules are mechanical — Lane B's `--lint` enforces them.

### Inline vs. block math

- Inline math: `$ ... $`
- Block math: `$$ ... $$`
- **Never use `\( ... \)` or `\[ ... \]`.** These render correctly in some Markdown engines but break our pipeline.

### Variables, constants, and units

- Variables auto-italicize inside math mode: write `$x$`, not `$\textit{x}$`.
- Multi-character variable names that should be roman use `\text{}`: `$\text{rate}$`, `$v_{\text{max}}$`.
- Units are roman, with a thin space between number and unit: `$25 \text{ cm}^2$`, `$5.2 \text{ centimeters}$`.
- Currency uses `\$`: `$\$24{,}000$`. The `{,}` keeps comma spacing tight inside math mode.
- Percent: `$25\%$` (not `25%`).
- Degree: `$180^{\circ}$` (not `180 degrees` and not `$180\degree$`).

### Common patterns

- Fractions: `$\frac{a}{b}$`. Avoid stacked-display fractions in inline contexts.
- Square roots: `$\sqrt{x}$`. Cube root: `$\sqrt[3]{x}$`.
- Exponents: `$x^2$`, `$x^{n+1}$`. Brace any exponent with more than one character.
- Subscripts: `$a_n$`, `$a_{n+1}$`.
- Coordinate pairs: `$(x, y)$` — math-mode comma renders correctly; do not write `$(x,y)$` (the no-space form looks tight).
- Function notation: `$f(x) = 3x + 2$` (space around `=`), and the function name is roman: `$\sin(x)$`, `$\log(x)$`, `$\ln(x)$`, not `$sin(x)$`.

### Tables

Markdown tables; each cell that contains a number wraps it in `$...$`. See `practiceTest1.js` Q7 for a canonical two-way-table example.

### Don't

- Don't use HTML inside questions (no `<sub>`, `<sup>`, `&times;`, etc.).
- Don't leave bare HTML entities (`&#x02212;` for minus, `&#x000B0;` for degree). These leak from raw QBank scrapes; the pipeline must decode them or reject the item.
- Don't mix MathSpeak phrasing into LaTeX (e.g., `StartFraction 1 Over 2 EndFraction` should be `\frac{1}{2}`).

---

## 4. Score_band → E/M/H mapping

Mapping locked by the recalibration plan:

| QBank `score_band_range_cd` | PerformSAT `difficulty` | Authoring target |
|------|------|------|
| 1 | easy | Below floor — too easy. Re-author or upgrade. |
| 2 | easy | Acceptable but bottom-of-bucket. |
| **3** | **easy** | **Top-of-bucket. This is the band-3 ceiling target.** |
| 4 | medium | Bottom-of-bucket. |
| **5** | **medium** | **Top-of-bucket. This is the band-5 ceiling target.** |
| 6 | hard | Bottom-of-bucket. Acceptable. |
| **7** | **hard** | **Top-of-bucket. This is the band-7 ceiling target.** |

Round 6 explicitly aims for the **bolded** rows. An "easy" PerformSAT item should feel like a band-3 CB item — a one-step problem with a recognizable shifted-output, reverse-percent, or two-quantity ratio twist — never a pure substitution.

---

## 5. Explanation pattern

Existing PerformSAT explanations open with `**SAT Pattern: ...**` then `**Choice X is correct.**`, then walk through the solution. Keep this — it is good pedagogy and consistent across the bank. The rule is to ensure the named pattern maps to a CB-recognized authoring archetype (the patterns in §1).

### Required structure

```
**SAT Pattern: <name>**

**Choice X is correct.**

**The Fast Way (~Ns):** <one-line shortcut, with rough timing>

**The Full Solution:**
<step-by-step worked solution; one operation per line; numbered or bulleted>

**Why the wrong answers are tempting:**
* Choice A: <misconception name + numeric path that produces this answer>
* Choice B: <misconception name + numeric path>
* Choice C: <misconception name + numeric path>
* (Skip the correct choice in this list.)

**Test Day Takeaway:** <one-sentence rule the student should memorize>
```

### Pattern-name registry

Approved pattern names (use these verbatim; keep the bank's pattern vocabulary tight):

- Word-to-Expression Translation
- Percent of a Whole, Reverse-Percent, Percent Increase/Decrease
- Proportion Solving
- Interpret Slope in Context, Interpret Intercept in Context, Interpret Coefficient in Context
- Line from Two Points, Perpendicular Slope, Parallel Slope
- Two-Way Table Conditional Probability, Marginal Probability
- Quadratic — Discriminant Test, Quadratic — Vieta's Sum/Product, Quadratic — Completing the Square
- Function Composition, Function Transformation, Shifted Output
- System of Equations — Elimination, System of Equations — Substitution
- Circle in Standard Form, Circle in General Form (complete the square)
- Right Triangle — Pythagorean, Right Triangle — Trig Ratios
- Volume Scaling, Surface Area
- Exponential Growth/Decay, Compound Interest

**Added round 7 (Test-1 recalibration):**

- Function Evaluation, Combining Like Terms, Multi-Step Linear Equation
- Margin of Error, Residual, Outlier Effect
- Discriminant Analysis (replaces "Discriminant — No Real Solutions")
- Composite Surface Area, Composite Solid Surface Area
- Tangent Line and Discriminant
- Vertex Form to Standard Form, Vertex Form Maximum, Vertex Form from Two Conditions
- Matching Coefficients, Rational Expression Simplification
- Three-Variable System, Three-Variable Elimination, Three-Equation Contradiction
- Conditional Probability from Two-Way Table, Conditional Probability with Percent
- Scatterplot Line of Best Fit
- Unit Conversion, Inequality Boundary
- Exponent Rules with Radicals, Common-Base Exponent Simplification
- Reverse-Percent Multi-Step, No-Solution Condition, System Equivalence Check
- Sum of Parts Ratio, Mean from List
- Cylinder Volume, Right Triangle Trigonometry with Perimeter
- Perpendicular Line Through Point
- Complete the Square — Non-Square Radius
- Discriminant with Integer Bound
- Percent Greater Than, Function Composition Inverse

If you need a pattern not in this list, add it here in the same PR rather than coining a new name ad-hoc.

### Why-each-distractor-is-wrong rule

The "Why the wrong answers are tempting" block is mandatory and must explicitly name the misconception (see §2). An explanation that says "Choice A is incorrect" without a derivation fails this rubric.

---

## 6. Worked side-by-side examples

Each pair shows a real cached CB QBank item next to a "this is what we would write" PerformSAT version that applies the same pattern. The CB items are paraphrased from `cbEducatorQBank.json`; the QBank ID is shown for verification.

### Pair A — Shifted-output (easy)

| Real CB QBank item (`2050beca-5f4f-41a5-92ca-3fcf29a6cc77`, "Linear functions", band 2) | PerformSAT version (top-of-band-3) |
|---|---|
| The function $f$ is defined by $f(x) = 3x - 8$. What is the value of $f(7)$? | If $3x - 8 = 7$, what is the value of $3x + 8$? |
| Choices: $13$ (correct), $-29$, $-5$, $29$. Correct path: $3 \cdot 7 - 8 = 13$. | Choices: $5$ (returns $x$), $15$ (returns $3x$), $19$ (subtracts $8$), $23$ (correct). |

The CB version is band-2 (a one-step substitution). The PerformSAT version preserves the linear-function structure but moves the question from "find the value" to "find a related quantity," which is the band-3 shifted-output ceiling.

### Pair B — Reverse-percent (easy)

| Real CB QBank item (`item-008` in calibration set, paraphrased) | PerformSAT version |
|---|---|
| What percentage of $300$ is $75$? Choices: $25\%$, $50\%$, $75\%$, $225\%$. | If $35\%$ of a city's population is under age 18, and there are $1{,}260$ residents under age 18, what is the city's total population? |
| Direct percent — band 1. The trap is choice C ($75\%$, the raw number from the stem) — a stops-early misconception. | Reverse-percent — band 3 ceiling. Distractors: forward percent, complement-base error, division slip. |

### Pair C — Two-step setup (medium)

| Real CB QBank item (`item-003` in calibration set, "Systems") | PerformSAT version |
|---|---|
| The system $5x - 3y = 19$ and $2x + 3y = 16$ has solution $(x, y)$. What is $y$? | The function $g$ is defined by $g(x) = 4x + 3$. The function $h$ is defined by $h(x) = g(x - 2) + 1$. What is $h(5)$? |
| Add equations to eliminate $y$ — wait, to eliminate $x$? Add gives $7x = 35 \Rightarrow x = 5$; back-substitute for $y = 2$. The trap is solving for $x$ and reporting it. | Distractors target: applying the shift in the wrong direction, forgetting the $+1$ tail, computing $g(5)$ directly. |

### Pair D — System inference (medium-hard)

| Real CB QBank item (`item-014` in calibration set, "Quadratic single solution") | PerformSAT version |
|---|---|
| If $4x^2 + 12x + 9 = 0$ and $x = a$ is the solution, what is $2a + 3$? | The total cost of $a$ adult tickets and $c$ child tickets is $12a + 7c = 184$. If a group buys $2$ more adult tickets than children, how many child tickets did they buy? |
| Recognize $4x^2 + 12x + 9 = (2x + 3)^2$, so $2x + 3 = 0 \Rightarrow 2a + 3 = 0$. The "stops one step early" student computes $a = -3/2$ and reports it; the perfect-square recognition shortcut returns $0$ in two operations. | The student writes a second equation $a = c + 2$, substitutes $12(c+2) + 7c = 184 \Rightarrow 19c = 160$ — uh, doesn't divide cleanly. Pick numbers so it does. |

### Pair E — Concept fusion (hard)

| Real CB QBank item (`item-038` in calibration set, "Quadratic — discriminant" / band 7) | PerformSAT version |
|---|---|
| The equation $5x^2 - bx + 45 = 0$ has no real solutions. What is the greatest integer value of $b$? | The parabola defined by $y = 2(x - h)^2 + k$ has its vertex at $(3, -8)$ and passes through $(1, 0)$. What is the value of $h + k$? |
| Discriminant + integer-bound: $b^2 - 4 \cdot 5 \cdot 45 < 0 \Rightarrow b^2 < 900 \Rightarrow |b| < 30 \Rightarrow b \leq 29$. Distractors: $30$ (forgets strict inequality), $31$ (off-by-two), $900$ (returns $b^2$). | Vertex form + plug-in: $h = 3$, $k = -8$, then verify with the second point ($y = 2(1-3)^2 + (-8) = 0$ ✓), so $h + k = -5$. Distractors: $11$ (sign flip on $k$), $-11$ (sign flip on $h$), $0$ (computes $h - k$). |

### Pair F — Function transformation (hard)

| Real CB QBank item (`item-034` in calibration set, "Function composition" / hard) | PerformSAT version |
|---|---|
| Let $g(x) = 2x + 1$ and $h(x) = x^2 - 3$. If $h(g(a)) = 46$, what is a positive value of $a$? | If $f(x) = x^2$ and $g(x) = f(x - 2) + 5$, for what value of $x$ does $g$ attain its minimum? |
| Solve $(2a+1)^2 - 3 = 46 \Rightarrow (2a+1)^2 = 49 \Rightarrow 2a + 1 = \pm 7 \Rightarrow a = 3$ (positive). | $g$ is the parabola $f$ shifted right $2$ and up $5$, so the minimum is at $x = 2$. Distractors: $-2$ (shift direction), $0$ (forgets shift), $5$ (confuses up-shift with $x$-shift). |

---

## 7. Common drift modes (anti-patterns we have seen and must avoid)

These are real failures from past PerformSAT calibration rounds:

1. **Pure-substitution easy items.** Q1 "$50 - 4n$ change" is a CB band-1 stem dressed up. PerformSAT easy items must be band-3 ceiling — the shifted-output, reverse-percent, or ratio twist must be present.
2. **Random distractors.** "Choice C: $36$" with no derivation. Every distractor must be reachable from a named misconception.
3. **Domain over-concentration.** Test 1 M1 currently has 9 Advanced Math + 7 Algebra + 4 PSDA + 2 Geo-Trig. Real CB M1 is closer to 7/6/5/4. Re-balance per the recalibration plan §"Module 1 target structure."
4. **Mixed LaTeX delimiters.** Some legacy items use `\(...\)` (KaTeX-style). Always use `$...$`.
5. **Bare HTML entities from QBank scrapes.** When fetching CB items as reference material, decode `&#x02212;` → `-`, `&#x000B0;` → `°`, etc. before rendering. The calibration-set builder rejects items with raw entities.
6. **MathSpeak leakage.** Phrases like "StartFraction", "Superscript", "left parenthesis" must never appear in a final stem — they are alttext artifacts from MathML extraction.

---

## 8. Lint checks (Lane B reference)

The `scripts/calibrateModule.mjs --lint` mode in Lane B should mechanically enforce:

- [ ] MC items have exactly 4 choices.
- [ ] Each MC choice has an `id` of A/B/C/D and non-empty `text`.
- [ ] `correctAnswer` matches one of the choice IDs.
- [ ] `band` field present and in 1-7.
- [ ] No `\(...\)` or `\[...\]` LaTeX delimiters anywhere in question/explanation.
- [ ] No bare HTML entities (`&#xNNNN;`, `&[a-z]+;` other than `&amp;`/`&lt;`/`&gt;`).
- [ ] No MathSpeak residue (`StartFraction`, `EndFraction`, `Superscript`, `Baseline`, etc.).
- [ ] Explanation opens with `**SAT Pattern: ...**` and contains `**Choice X is correct.**`.
- [ ] Explanation contains a "Why the wrong answers are tempting" section.
- [ ] Each distractor has a misconception comment in source (`// distractor: stops one step early`).
- [ ] Pattern name in explanation appears in the registry (§5).
- [ ] IP uniqueness gate: Jaccard ≤ 0.78 AND 3-gram overlap ≤ 0.60 vs every cached QBank stem.

The semantic checks (the four-misconception rule, top-of-band stem patterns) cannot be linted — those are enforced by the calibration set in `docs/calibration_set/`.
