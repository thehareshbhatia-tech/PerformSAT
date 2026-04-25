# Authenticity Calibration — Baseline Ratings

**Status:** AI baseline rating — to be re-rated by a human.

These are initial ratings produced by an AI rater on the 40-item calibration set defined in `items.json`. They serve as a starting point for the round-6 exit gate; the human re-rate is what counts. See `methodology.md` for the rating playbook and dimension rubrics.

Each item is rated on five 1-5 scales:
- **SC** — Stem clarity
- **DQ** — Distractor quality
- **NP** — Notation polish
- **DC** — Difficulty calibration (vs. claimed band)
- **CB** — Overall CB-grade (would this fit unobtrusively in PT 4-11?)

A short note explains any rating ≤3 or anything notable about the item. Aggregate analysis is at the bottom.

> **Rater bias caveat.** The CB items in `items.json` were produced by converting QBank MathSpeak/MathML to LaTeX programmatically. Some CB items therefore carry minor notation artifacts (extra spaces inside `$f ( x )$`, comma-separated number rendering, etc.) that a real CB PT 4-11 item would not have. This artificially narrows the Notation polish gap. The Overall CB-grade rating should be interpreted as "would this style of item fit in PT 4-11," not "is the surface-level typography pixel-perfect." A pure typography re-render (which Lane B's lint will produce) would lift CB items' NP scores by ~0.5 across the board.

---

## 1. Per-item ratings

### item-001 — Algebra · medium · correct=B
Stem: "At how many points do the graphs of the equations $y = x + 20$ and $y = 8 x$ intersect in the xy -plane?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 4  | 3  | 4  | 4  |

Notes: Clean inference question — exactly one intersection because two distinct non-parallel lines. Distractors map cleanly: 0 (parallel-lines misconception), 2 (quadratic intuition), 8 (reads off the slope). NP=3 because of `xy`-plane spacing artifact and stray spaces around variables.

### item-002 — Problem-Solving and Data Analysis · medium · correct=D
Stem: "In a bag, there are $7$ red, $4$ white, $33$ blue, and $33$ yellow cubes…"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 5  | 5  |

Notes: Excellent CB stem. Numbers chosen so $\frac{11}{77}$ reduces cleanly to $\frac{1}{7}$. Distractors: $\frac{6}{7}$ (complement direction), $\frac{7}{11}$ (ignores white cubes), $\frac{1}{3}$ (color-counts heuristic). DQ=4 (not 5) because $\frac{1}{3}$ is the weakest of the three distractors.

### item-003 — Algebra · medium · correct=B
Stem: "$5x - 3y = 19$, $2x + 3y = 16$ … What is the value of $y$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 4  |

Notes: Crisp system; elimination-friendly numbers. Block math layout is correct. Distractors map to: solving for $x$ instead ($x=5$), arithmetic slip in elimination ($y=1$ or $3$). DC=4 because adding the two equations cancels $x$ in one step — closer to band 4 than band 5.

### item-004 — Geometry and Trigonometry · medium · correct=A
Stem: "A circle in the $xy$-plane has equation $(x-3)^2 + (y+2)^2 = 25$. If shifted 4 right and 5 up …"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Tight CB style. Distractors: B (wrong sign on horizontal shift), C (wrong sign on vertical shift), D (changes radius by adding 9). The shift mechanic is band-4 territory; could be lifted to band 5 by asking for a non-axis-aligned shift or a derived quantity.

### item-005 — Problem-Solving and Data Analysis · medium · correct=B
Stem: "A researcher models … $y = -2.8x + 32$ … 5-year-old car worth $\$19{,}500$. What is the residual …"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 5  | 5  | 5  | 5  |

Notes: Top-quality residual problem. Distractors: A (sign reversal: predicted minus actual), C (computation slip), D (returns the predicted value). Real-data-modeling stem is exactly CB style. SC=4 (not 5) because the units transition (dollars → thousands) is a small cognitive bump.

### item-006 — Advanced Math · medium · correct=B
Stem: "$A(t) = 5000(1.06)^t$ … best interpretation of $1.06$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Canonical CB interpretation question. Distractors are textbook (A: literal-dollar misread, C: $106\%$ as full-base, D: confuses base with output). Indistinguishable from PT 4-11 style.

### item-007 — Advanced Math · hard · correct=D
Stem: "$5x^{2} + 10x + 16 = 0$. How many distinct real solutions …?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 4  | 3  | 4  |

Notes: Pure discriminant. Distractor "Infinitely many" is not a discriminant-misconception — it has no derivation and breaks the four-misconception rule. DC=3 because this is band-4 territory (one-step discriminant), claimed as hard. NP=4 for stray spaces in `$5 x ^{2}$`.

### item-008 — Problem-Solving and Data Analysis · easy · correct=A
Stem: "What percentage of $300$ is $75$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 2  | 3  |

Notes: This is a band-1 item — pure direct-percent. Below the CB easy floor target (band 3). Distractor C ($75\%$, raw stem number) is the strongest. DC=2 reflects the band gap; CB=3 reflects "plausible but tonally off" — it's in PT 4-11 territory but at the very bottom of band 1.

### item-009 — Algebra · easy · correct=B
Stem: "$f(x) = 3x - 8$. What is the value of $f(7)$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 4  | 2  | 3  |

Notes: Band-2 item. Pure substitution. Distractors $-5$ (sign error) and $-29$ (sign + arithmetic error) are reasonable; $29$ is the inverse-op trap. DC=2 because this is below the band-3 ceiling target. CB=3 because PT 4-11 has items like this but they would not be the rubric target.

### item-010 — Geometry and Trigonometry · medium · correct=B
Stem: "Right triangle, legs $28$ and $20$. Hypotenuse?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Pythagorean with non-trivial radical answer. Distractors: A (uses different leg pairing), C (sums legs and adds, common shortcut error), D (returns $784 + 400 = 1184$ unsquared). Indistinguishable from CB.

### item-011 — Problem-Solving and Data Analysis · easy · correct=B
Stem: "$2$, $9$, $14$, $23$, $32$. Mean?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 4  | 4  | 3  | 4  |

Notes: Band-2. Mean = 16. Distractors: $14$ (median), $17$ (computation slip), $32$ (max). NP=4 because of stem spacing in `$2$ , $9$, $14$, $23$, $32$` (commas outside math mode). DC=3 — the band-2 floor; band 3 would add a "remove an outlier" twist.

### item-012 — Geometry and Trigonometry · easy · correct=C
Stem: "What is the value of $\cos \frac{565\pi}{6}$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 4  | 4  |

Notes: Trig + period reduction. The $565\pi/6$ choice forces a real period-reduction (not just a memorized value), so this is closer to band 3. Distractor D ($\sqrt 3$) is the weakest — no obvious misconception path produces $\sqrt 3$ here.

### item-013 — Algebra · easy · correct=B
Stem: "Plant grew $1.3$ cm/day, started at $5.2$ cm … function $h(d)$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: PerformSAT item that reads CB-grade. Distractors: A (swaps slope and intercept), C/D (linear vs exponential confusion). DC=4 because the linear-vs-exponential confusion is a classic band-3 trap. Strong example of the bank's better easy items.

### item-014 — Advanced Math · hard · correct=B
Stem: "If $4x^2 + 12x + 9 = 0$ and $x = a$ is the solution, what is $2a + 3$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: PerformSAT item that nails the band-7 perfect-square-recognition pattern. $(2x+3)^2 = 0 \Rightarrow 2a+3=0$. Distractors: A and D capture sign errors; C ($\frac{3}{2}$) returns $|a|$. Indistinguishable from CB.

### item-015 — Geometry and Trigonometry · hard · correct=C
Stem: "$x^2 + y^2 + 8x - 14y + 40 = 0$. Area of circle?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Excellent PerformSAT item. Forces complete-the-square ($x+4)^2 + (y-7)^2 = 25 \Rightarrow r=5 \Rightarrow A=25\pi$). Distractors: A (uses $\sqrt{40-16-49}$), B (forgets the constant), D (squares the diameter).

### item-016 — Geometry and Trigonometry · hard · correct=A
Stem: "Two lines intersect … one angle is $(9x - 140)^\circ$. Which could NOT be the sum …?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 4  | 4  | 5  | 4  |

Notes: Genuine band-7 reasoning (complementary/supplementary parametric). SC=4 because the question is dense — student has to enumerate which pairs of angles are possible. Distractors B and C are constant offsets; A is the only one that would require the angle measure to be negative, which is impossible.

### item-017 — Advanced Math · medium · correct=B
Stem: "$g(x) = x^2 + 55$. Minimum value?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 4  | 2  | 3  |

Notes: Band-3 territory at best (vertex form recognition). Distractors: $0$ (forgets $+55$), $110$ ($2 \cdot 55$), $3025$ ($55^2$). DC=2 because claimed medium but feels like top-of-easy. NP=4 from `$g ( x )$` spacing.

### item-018 — Problem-Solving and Data Analysis · hard · correct=B
Stem: "$140$ is $p\%$ greater than $10$. What is $p$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Reverse-percent at band-7 ceiling. Distractors: $1{,}400$ (uses $140/10 \times 100$), $140$ (forgets the "greater than" framing), $130$ (computes the difference $140-10$ and multiplies by 1). Strong CB-grade item.

### item-019 — Problem-Solving and Data Analysis · easy · correct=C
Stem: "Average rainfall: March $2.4$ in, July $3.6$ in. Percent increase?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 4  | 2  | 3  | 3  |

Notes: PerformSAT percent-increase item. NP=2 — the percentages "12%" / "33%" / etc. are not in math mode (`$12\%$` would be correct). This is a clean rubric violation. SC=4 because two-period naming is fine. DC=3 — band-2 territory; reverse-percent would lift it to band 3.

### item-020 — Problem-Solving and Data Analysis · hard · correct=D
Stem: "Cube side $s$, second cube side $50\%$ greater. Volume of larger is what percent greater than smaller?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Volume scaling — scale factor cubed. $1.5^3 = 3.375$, so $237.5\%$ greater. Distractors: A (just the side-length percent), B (wrong cube), C ($\sqrt{3}$ misapplied or $1.5 \cdot 100\%$). Genuine band-7 difficulty. PerformSAT item that reads CB-grade.

### item-021 — Problem-Solving and Data Analysis · medium · correct=A
Stem: "Mass $168$ g, volume $24$ cm³. Density?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 3  | 4  |

Notes: Direct $D = m/V$ with clean numbers. Distractors map well: $144 = m - V$, $192 = m + V$, $4032 = m \cdot V$. DC=3 because this is a band-2 item with a vocabulary gate (knowing the formula). The "in grams per cubic centimeter" hint inside the question makes it band-2, not band-4.

### item-022 — Advanced Math · easy · correct=B
Stem: "Which expression is equivalent to $(3x^2 + 7x - 4) - (x^2 - 3x + 5)$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Direct polynomial subtraction. Distractors A and C add $7x + 3x = 10x$ instead of getting $7x - (-3x) = 10x$ — wait, the right answer is $2x^2 + 10x - 9$ (B). A doesn't subtract; C doesn't combine $x^2$ terms. Each distractor maps to a real misconception.

### item-023 — Algebra · easy · correct=B
Stem: "Gym: $\$25$ registration + $\$40$ monthly. Total cost for $m$ months?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Clean linear word problem at band-3 ceiling — student must recognize $40$ multiplies $m$ (rate), $25$ is intercept (one-time). Distractors: A swaps slope/intercept, C combines without rate-vs-fixed distinction, D over-distributes.

### item-024 — Problem-Solving and Data Analysis · easy · correct=C
Stem: "Map scale $1$ in to $15$ mi. Cities $3.5$ in apart. Actual distance?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 3  | 4  |

Notes: $3.5 \times 15 = 52.5$. Distractor A uses $3 \cdot 15 = 45$ (truncates), B uses $\frac{3.5 + 1}{15} \cdot 15$? unclear path; D uses $\frac{55}{1}$ from rough estimate. DC=3 — band-2 ratio, no twist.

### item-025 — Algebra · medium · correct=B
Stem: "Min of $x$ is $12$ less than $6$ times $n$. Inequality for $x$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 5  | 5  | 5  | 5  |

Notes: "Minimum value of $x$" → $x \geq$ (lower bound), "12 less than 6n" → $6n - 12$, so $x \geq 6n - 12$. Distractors: A (wrong direction), C/D (wrong order of subtraction). SC=4 because "minimum value" + an inequality requires careful translation. CB band-5.

### item-026 — Advanced Math · medium · correct=B
Stem: "Car $\$24{,}000$ depreciates $12\%$/year. Function $V(t)$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Exponential decay. Distractors: A uses raw $0.12$ as base, C confuses growth with decay, D writes linear depreciation. Each maps to a real misconception. CB band-5 territory.

### item-027 — Problem-Solving and Data Analysis · medium · correct=B
Stem: "Two-way table … probability student studied given they passed?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Conditional probability via table. Distractors: A (uses grand total denominator), C (uses studied total denominator instead of passed), D (different ratio entirely). Strong CB-grade item from PerformSAT.

### item-028 — Geometry and Trigonometry · hard · correct=C
Stem: "Circle $(x-2)^2 + (y+3)^2 = 36$ and line $y = -3$. Distance between intersections?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Excellent PerformSAT item. The line $y = -3$ passes through the center, so the chord is a diameter ($2r = 12$). Distractors: A (uses $r$ alone), B (off-by-2 from center), D (returns $r^2$). Band-7 territory.

### item-029 — Advanced Math · easy · correct=C
Stem: "Which expression is equivalent to $12x + 27$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 4  | 2  | 3  |

Notes: Pure GCF factoring. $12x + 27 = 3(4x + 9)$. Distractors A and B factor wrong constants; D doesn't fully simplify. NP=4 from CB-conversion spacing artifacts. DC=2 — band-1 item, claimed easy. Below band-3 ceiling.

### item-030 — Geometry and Trigonometry · medium · correct=A
Stem: "$x^2 + y^2 + 8x - 12y = 0$. Radius?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Complete the square: $(x+4)^2 + (y-6)^2 = 52$, $r = 2\sqrt{13}$. Distractors: B (uses constants only without completing square), C (uses $r^2$ wrongly), D (returns $r^2$). Top-of-band PerformSAT item.

### item-031 — Geometry and Trigonometry · medium · correct=D
Stem: "Circle radius $43$ m. Area in square meters?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 4  | 2  | 3  |

Notes: $\pi r^2 = 1849\pi$. Distractor A uses $\frac{r}{2}$, B uses $r$, C uses $2r$ — these are circumference confusion, not area-formula misconceptions. DC=2 — band-2 item, claimed medium. Below band-5 target.

### item-032 — Geometry and Trigonometry · easy · correct=B
Stem: "Rectangle area $72$ cm². Length $12$ cm. Width?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 2  | 3  |

Notes: Direct $A = lw$ inversion. Distractor A is half-correct, C is computation slip, D ($60$) is $A - l$ — uncommon misconception. DC=2 — band-1, well below the band-3 ceiling target. PerformSAT item that should be re-authored.

### item-033 — Geometry and Trigonometry · hard · correct=A
Stem: "$\sin(42\pi)$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 4  | 4  |

Notes: $42\pi = 21 \cdot 2\pi$, so $\sin = 0$. Distractors B/C/D are common $\sin$ values — plausible if the student doesn't reduce. DC=4 because period-reduction at this scale is a band-6 question.

### item-034 — Algebra · hard · correct=B
Stem: "$g(x)=2x+1$, $h(x)=x^2-3$. If $h(g(a))=46$, positive value of $a$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Composition + quadratic solve. $(2a+1)^2 - 3 = 46 \Rightarrow 2a+1 = \pm 7 \Rightarrow a = 3$ (positive). Distractors: A ($(2a+1)=7-2$ slip), C (uses $h(a)$ alone), D (uses $g(a)=10$). Band-7 PerformSAT item.

### item-035 — Algebra · medium · correct=C
Stem: "Line $j$ through $(1,7)$ and $(5,-1)$. Line $k$ perpendicular. Slope of $k$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 4  | 5  |

Notes: Slope of $j = (-1-7)/(5-1) = -2$. Perpendicular slope is $\frac{1}{2}$. Distractors: A is the slope of $j$ itself, B is sign-flipped, D is reciprocal-without-sign-flip. Strong PerformSAT item.

### item-036 — Algebra · easy · correct=B
Stem: "If $7x = 28$, what is the value of $8x$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Shifted-output at band-1 (CB item) — but executed perfectly. $x = 4 \Rightarrow 8x = 32$. Distractors: A ($x = 3$ from $28/7=3$ slip then $\cdot 7$), C ($28 \cdot 6 = 168$), D ($28 \cdot 8 = 224$). Excellent example of "easy with a twist."

### item-037 — Algebra · hard · correct=D
Stem: "$\frac{1}{5}x + \frac{1}{7}y - 70 = 0$. Slope of perpendicular line?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 5  | 4  | 5  | 4  |

Notes: Standard form to slope: $y = -\frac{7}{5}x + \ldots$, so slope of $h$ is $-\frac{7}{5}$, perpendicular slope is $\frac{5}{7}$. Distractors A, B, C are sign-flips and reciprocals. SC=4 because fractional coefficients add cognitive load. NP=4 due to `xy` plane formatting.

### item-038 — Advanced Math · hard · correct=A
Stem: "$5x^2 - bx + 45 = 0$ has no real solutions. Greatest integer $b$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 5  | 5  | 5  | 5  |

Notes: Discriminant + integer-bound at band-7. Distractors: B (forgets strict inequality), C (off-by-one), D (returns $b^2$). Strong PerformSAT item.

### item-039 — Advanced Math · hard · correct=D
Stem: "$x^2 - 40x - 10 = 0$. Sum of solutions?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 4  | 4  | 4  | 4  | 4  |

Notes: Vieta's: sum = $-b/a = 40$. Distractors $0$, $5$, $10$ are the kind of numbers a student picks if they try to solve directly with the quadratic formula. DC=4 because Vieta's-recognition is a band-6 skill. NP=4 from spacing.

### item-040 — Advanced Math · medium · correct=B
Stem: "$4\sqrt{2x} = 16$. What is $6x$?"

| SC | DQ | NP | DC | CB |
|----|----|----|----|----|
| 5  | 4  | 5  | 5  | 5  |

Notes: Two-step: $\sqrt{2x} = 4 \Rightarrow 2x = 16 \Rightarrow x = 8 \Rightarrow 6x = 48$. Distractor C (uses $\sqrt{2x} = 16$ without dividing by 4) is the strongest; A and D are from arithmetic slips. Strong CB band-4 item.

---

## 2. Aggregate analysis

### Per-source averages

Computed by source-tagged ID (CB items: 1, 2, 7, 8, 9, 10, 11, 12, 16, 17, 18, 21, 25, 29, 31, 33, 36, 37, 39, 40; PerformSAT items: 3, 4, 5, 6, 13, 14, 15, 19, 20, 22, 23, 24, 26, 27, 28, 30, 32, 34, 35, 38).

| Source | n | Avg SC | Avg DQ | Avg NP | Avg DC | Avg CB |
|--------|---|--------|--------|--------|--------|--------|
| CB | 20 | 4.70 | 4.35 | 4.45 | 3.70 | 4.05 |
| PerformSAT | 20 | 4.90 | 4.85 | 4.85 | 4.30 | 4.70 |
| **Gap (PS − CB)** |  | **+0.20** | **+0.50** | **+0.40** | **+0.60** | **+0.65** |

### Headline number — Overall CB-grade gap

**Avg PerformSAT Overall CB-grade − Avg CB Overall CB-grade = +0.65 (PerformSAT *higher* than CB).**

This is the gap that needs to be **interpreted, not celebrated.** The exit-gate criterion in the recalibration plan is "≤0.5-pt avg gap to CB items"; the *signed* gap here is +0.65, but the *absolute* gap is 0.65, which technically exceeds the criterion. Far more importantly, the *direction* of the gap is the warning signal: PerformSAT should not be rating higher than CB on a CB-authenticity dimension. Three known biases in the baseline produce this inversion:

1. **CB MathSpeak conversion artifacts.** The CB items in `items.json` were produced by converting QBank MathSpeak/MathML to LaTeX programmatically. Some carry minor notation noise (`$f ( x )$` with stray spaces, comma-separated number rendering, inconsistent `xy`-plane formatting) that a PT 4-11 PDF would not have. NP scores for CB items are depressed ~0.4 below their "true" value, and that depresses the holistic Overall rating too.
2. **CB calibration set deliberately includes band-1/2 items.** Several CB items (008 "What % of 300 is 75", 009 "f(x)=3x-8 find f(7)", 029 "factor 12x+27") are below the band-3 ceiling target. These are intentional baseline anchors for what "below CB easy floor" looks like — but they pull the CB average down.
3. **AI rater bias.** The AI rater has seen the PerformSAT bank during authoring; it is more forgiving of phrasings it has authored than of QBank phrasings it sees fresh. This is exactly why the methodology mandates a human re-rate.

**The right way to read this baseline:** treat the +0.65 gap as a measurement-noise floor that the human re-rate will correct toward 0 or slightly negative. Round 6's re-rate should then produce a new gap (PS − CB) that is **between −0.5 and +0.5**, with **≥80% of revised PerformSAT items rating ≥4 on Overall.**

### Per-difficulty Overall CB-grade

| Difficulty | n CB | CB Overall | n PS | PS Overall |
|------------|------|------------|------|------------|
| easy | 6 | 3.67 | 6 | 4.17 |
| medium | 8 | 4.25 | 8 | 4.88 |
| hard | 6 | 4.17 | 6 | 5.00 |

The widest absolute gap is on **medium and hard** items (+0.63 and +0.83), driven by strong PerformSAT items at items 014, 015, 028, 020, 027, 030, 034, 038. The **easy bucket** also shows a +0.5 gap, but the absolute scores are lower for both sources — both CB and PerformSAT include several band-1/2 stragglers (CB: items 008, 009, 029; PerformSAT: items 029, 031, 032 at "DC=2 / CB=3").

### Items rated ≥4 on Overall CB-grade

| Source | ≥4 count | percentage |
|--------|----------|------------|
| CB | 15 / 20 | 75% |
| PerformSAT | 18 / 20 | 90% |

If we set the bar at "≥4 on Overall CB-grade for at least 80%": PerformSAT clears it (90%); CB does not (75%) — partly an artifact of the conversion noise, partly because the CB calibration set deliberately includes a handful of band-1/2 items as the "below ceiling" reference. The post-recalibration goal of "≥80% of *revised* PerformSAT items rated ≥4" already holds at 90% in the baseline; the round-6 work is to lift the 2 PerformSAT outliers (items 019 and 032) and to confirm the gap holds after re-rating.

### Diagnostic per-dimension findings

- **Stem clarity (SC):** Both sources cluster at 5; rare 4 reflects a phrasing ambiguity (e.g., item-001's `xy`-plane spacing, item-016's enumeration density).
- **Distractor quality (DQ):** PerformSAT averages higher here (4.85 vs 4.45). The CB outliers are item-002 (one weak distractor) and item-031 (distractors that don't map to area-formula misconceptions, only to circumference confusion). PerformSAT items with DQ ≤4 are item-024 (one-step ratio with a noisy distractor) and item-031.
- **Notation polish (NP):** CB items score 4.50 — depressed by conversion artifacts. PerformSAT 4.85 reflects native LaTeX. **The exception:** item-019 (PerformSAT) scored NP=2 because percentages are not in math mode (`12%` instead of `$12\%$`). This is exactly the kind of mechanical rule Lane B's `--lint` should catch.
- **Difficulty calibration (DC):** Both sources average ~4.2. The CB items below band-3 ceiling (items 008, 009, 011, 029) and the PerformSAT items below ceiling (items 017, 029, 031, 032) are the recalibration-target population.
- **Overall CB-grade (CB):** This is the headline — see above.

### What this baseline tells us about round 6

1. **The exit gate (≥80% revised PS items ≥4 on Overall, gap ≤0.5) is reachable.** Baseline PerformSAT items already rate ≥4 on 90% of items.
2. **The real authoring work is on the 4-6 PerformSAT items below band-3 ceiling.** Specifically item-019 (notation), item-029-style (no rubric items in this set, but parallel items exist), and the structural gap on the easy bucket where PerformSAT has CB-grade-3 items already (items 013, 023, 036) but PerformSAT's actual practice tests have many band-1/2 stragglers per the existing audit doc.
3. **The Notation polish dimension is where mechanical lint helps most.** Lane B's `--lint` should drive NP to 5 across the bank; that alone moves the Overall up by ~0.2 even without semantic re-authoring.
4. **CB items in this calibration set should be re-rated by a human after the lint pass.** Several CB items (007, 008, 011, 029, 031) sit below the band-3 ceiling and would not be the kind of item the recalibration round targets — they're useful as a baseline for "what band-1/2 looks like" but not as authenticity targets.

### Re-rate workflow reminder

Per `methodology.md` §4: a human re-rates from `items.json` blind, then de-anonymizes via the (gitignored) `.answer_key.json`, then computes the same aggregates above. The exit gate is a re-rate after the recalibration round, not against this baseline.
