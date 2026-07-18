# Extraction Manifest — book → chapter → page map

Rendered page images are session-scratchpad artifacts (gone once the session's scratchpad is
cleaned). Re-render with PyMuPDF at 150 DPI / JPEG q80. As of 2026-07-18 the four source PDFs
are no longer on the Desktop — they sit in the iCloud Trash
(`~/Library/Mobile Documents/.Trash/`), so rescue them to a durable location before they're
purged. JPG page numbering equals PDF page numbering (verified: page counts 175/218/425/212
match the tables below).

Status legend: [ ] pending, [~] extracting, [x] raw notes done

**SYNTHESIS COMPLETE (2026-07-11):** raw notes → unified source-free graph in `graph/` — 163 nodes
(67 R&W, 96 math), 664 named misconceptions, 0 dangling links. Consumer artifacts: `graph/INDEX.md`
(navigable by section→domain→skill) and `graph/MISCONCEPTIONS.md` (tutor-injection backbone).
Originality verified: 0 source/author names, 0 book-coined terms, book frequency claims flagged
`unverified-claim` in 118 nodes (not asserted as fact until checked vs our bank/official tests).
Next: task #8 — apply graph to Learn tab (R&W first) + tutor misconception injection.

## reading — The Critical Reader 5th Ed (Meltzer), 175 JPGs, printed→JPG offset +1

| # | Chapter | JPGs | Type | Status |
|---|---|---|---|---|
| — | Question Stems by Category + Suggested Reading + How to Use | p0012–p0015 | instruction | [x] |
| 1 | Overview of SAT Reading | p0016–p0029 | instruction | [x] |
| 2 | Vocabulary in Context | p0030–p0061 | instruction | [x] |
| 3 | Making the Leap | p0062–p0073 | instruction | [x] |
| 4 | The Big Picture | p0074–p0091 | instruction | [x] |
| 5 | Literal Comprehension | p0092–p0102 | instruction | [x] |
| 6 | Reading for Function | p0103–p0121 | instruction | [x] |
| 7 | Text Completions | p0122–p0133 | instruction | [x] |
| 8 | Supporting & Undermining | p0134–p0145 | instruction | [x] |
| 9 | Graphs and Charts | p0146–p0159 | instruction | [x] |
| 10 | Paired Passages | p0160–p0169 | instruction | [x] |

Exercises + answers are embedded inline in chapters (no back-of-book key).

## grammar — Ultimate Guide to SAT Grammar 6th Ed (Meltzer), 218 JPGs, printed→JPG offset +2

| Ch | Title | JPGs | Type | Status |
|----|-------|------|------|--------|
| — | Intro + Cheat Sheet | p0009–p0010 | instruction | [x] |
| 1 | Transitions | p0013–p0028 | instruction | [x] |
| 2 | Specific Focus ("Student Notes") | p0029–p0038 | instruction | [x] |
| — | Parts of Speech | p0041–p0046 | instruction | [x] |
| 3 | Sentences and Fragments | p0047–p0060 | instruction | [x] |
| 4 | Joining and Separating Sentences | p0061–p0073 | instruction | [x] |
| 5 | Joining Sentences and Fragments | p0074–p0082 | instruction | [x] |
| 6 | Non-Essential & Essential Clauses | p0083–p0107 | instruction | [x] |
| 7 | Additional Comma Uses and Misuses | p0108–p0114 | instruction | [x] |
| — | Cumulative Review I | p0115–p0120 | exercises | [x] |
| 8 | Verbs: Agreement and Tense | p0123–p0144 | instruction | [x] |
| 9 | Pronouns | p0145–p0156 | instruction | [x] |
| 10 | Apostrophes | p0157–p0163 | instruction | [x] |
| 11 | Modification | p0164–p0170 | instruction | [x] |
| 12 | Parallel Structure | p0171–p0175 | instruction | [x] |
| — | Cumulative Review II | p0176–p0179 | exercises | [x] |
| — | Practice Sets: All Chapters | p0180–p0194 | exercises | [x] |
| A/B | Word Pairs; Question Marks | p0197–p0202 | instruction | [x] |
| — | Answer Key | p0203–p0215 | answer-key | [x] |

## math-orange — 1600.io Orange Book Vol I+II, 425 JPGs (each JPG = 2 printed pages, left=even right=odd)

Anomalies: p0194 duplicates p0193; p0297 duplicates p0298 — skip both. Chapters share boundary JPGs. Scan gaps found during extraction: printed pp. 502–503 (ch14 §14.3 opener) and pp. 710–711 (ch20) absent; content recovered from chapter recaps, nothing material lost. Ch21 note: chapter teaches engineered-shortcut recognition, NOT multi-concept composites — composite grammar must come from synthesis + our bank.

| Ch | Title | JPGs | Status |
|----|-------|------|--------|
| 0 | Foundations | p0016–p0027 | [x] |
| 1 | Linear Relationships | p0027–p0037 | [x] |
| 2 | Slope-Intercept Form | p0037–p0059 | [x] |
| 3 | Standard Form / Parallel & Perpendicular | p0059–p0072 | [x] |
| 4 | Systems of Linear Equations | p0072–p0094 | [x] |
| 5 | Linear Inequalities & Absolute Value | p0094–p0115 | [x] |
| 6 | Exponents & Radicals | p0115–p0129 | [x] |
| 7 | Intro to Polynomials | p0129–p0137 | [x] |
| 8 | Solving Quadratic Equations | p0137–p0169 | [x] |
| 9 | Extraneous Solutions / Dividing Polynomials | p0169–p0193 | [x] |
| 10 | Graphs of Quadratics & Polynomials | p0195–p0219 | [x] |
| 11 | Number of Zeros / Complex Numbers | p0219–p0229 | [x] |
| 12 | Ratios, Probability, Proportions | p0229–p0245 | [x] |
| 13 | Percentages | p0245–p0261 | [x] |
| 14 | Exponential Relationships | p0261–p0276 | [x] |
| 15 | Scatterplots & Line Graphs | p0276–p0288 | [x] |
| 16 | Functions | p0288–p0301 | [x] |
| 17 | Statistics | p0301–p0321 | [x] |
| 18 | Unit Conversions | p0321–p0332 | [x] |
| 19 | Angles, Triangles, Trigonometry | p0332–p0366 | [x] |
| 20 | Circles and Volume | p0366–p0400 | [x] |
| 21 | "Wormholes" (multi-concept composites) | p0400–p0422 | [x] |

## math-panda — College Panda Digital SAT Math (Phu), 212 JPGs (2 pages/JPG; skip p0100 duplicate; p0024/p0025 are singles)

Chapters share boundary JPGs (chapters often start on the right half). Answer key for ALL chapters: p0158–p0212.

| Ch | Title | JPGs | Status |
|----|-------|------|--------|
| 1–3 | Exponents & Radicals; Expressions; Manipulating Equations | p0006–p0024 | [x] |
| 4–6 | Other Equations; Functions; Lines & Linear | p0025–p0042 | [x] |
| 7–9 | Interpreting Linear Models; Percent; Exponential vs Linear | p0043–p0058 | [x] |
| 10–12 | Rates/Conversions/Ratios; Word Problems; Quadratic Equations | p0059–p0073 | [x] |
| 13–14 | Systems; Inequalities | p0074–p0089 | [x] |
| 15–16 | Function Transformations; Quadratic Functions | p0089–p0101 | [x] |
| 17–19 | Angles; Triangles; Circles | p0101–p0121 | [x] |
| 20–22 | Radians; Trigonometry; Area/Perimeter/Volume | p0121–p0135 | [x] |
| 23–26 | Reading Data; Probability; Statistics I+II | p0136–p0158 | [x] |
| 27 | Answer key (explanation-style + trap analysis) | p0158–p0212 | [x] |
