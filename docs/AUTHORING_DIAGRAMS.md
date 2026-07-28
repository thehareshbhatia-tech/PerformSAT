# Authoring diagrams for question stems

## Explanation figures (```seva-figure``` blocks) — 2026-07-28

Explanations can carry inline figures too. Embed a fenced block anywhere in the
explanation string; the body is JSON in the exact `{ type, params }` shape the
`QuestionDiagram` dispatcher accepts, plus an optional `caption`:

    ```seva-figure
    {"type":"rightTriangle","params":{"vertices":[[0,0],[9,0],[9,12]],"sideLabels":["9","12","15"],"rightAngleVertex":1},"caption":"The $9$-$12$-$15$ right triangle."}
    ```

Rules:

- The figure attaches to whatever section it sits in (Fast Way, a step, the
  Full Solution body, the takeaway…). Put it at the moment the reader needs to
  SEE the setup — usually right after the sentence that describes it.
- The figure must match the item's exact numbers. A generic decorative diagram
  is worse than none.
- **No backslashes in captions** (plain `$9$`-style math only). Inside the JS
  string literal a `\\pi` loses an escaping layer and becomes invalid JSON —
  `npm run bank:validate` catches this, but don't author it.
- `npm run bank:validate` fails on malformed JSON, unknown types, unclosed
  fences, and stray ``` runs. The render path strips anything invalid so
  students never see raw JSON — which is exactly why the lint must gate it.
- Preview: `http://localhost:3000/#__diag=<id>` now renders the full
  SolutionExplanation (figures included) under each item.

Pilot references: bank-geo-318 (rightTriangle in Fast Way), bank-alg-108
(linearGraph), bank-am-019 (parabola), bank-ps-032 (dotPlot), bank-geo-022
(circleWithSector).

When a question stem references a visual artifact — a scatterplot, a data set,
a histogram, a figure, a graph, a table — the item **must** carry a `diagram`
field with the visual data. A stem that says "the scatterplot below shows..."
without an accompanying `diagram` block is a bug.

This is the contract:

> If the stem mentions it, it must be rendered.

## How to add a diagram block

Every item supports an optional `diagram` field:

```js
{
  id: 'bank-alg-203',
  // ...
  question: 'The scatterplot shows plant height (cm) versus days of growth, ...',
  diagram: {
    type: 'scatterplot',           // see § Renderer types below
    params: { /* per-type params */ }
  },
  choices: [/*...*/],
  correctAnswer: 'A',
  // ...
}
```

The renderer router lives in `src/components/QuestionDiagrams.jsx` (see the
`QuestionDiagram` switch). All three drill shells
(`AssignedPracticeShell`, `AdaptivePracticeShell`, `PracticeTest`) mount the
diagram automatically when present.

## Renderer types in use

| `type`               | When to use                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `scatterplot`        | Stem mentions "scatterplot", "data points", "line of best fit", "residual" |
| `dotPlot`            | Stem lists a discrete data set ("the data set 4, 7, 9, 12, 15") — use this for mean/median/range items |
| `barChart`           | Stem mentions "histogram", "bar chart", "bar graph", or distribution buckets |
| `dataTable`          | Stem refers to a multi-column table of data                                |
| `twoWayTable`        | Stem refers to a two-way / contingency table (categorical)                 |
| `rightTriangle`      | Stem references a right-triangle figure                                    |
| `triangleWithAngles` | Stem references angle measures inside a triangle                           |
| `circleWithSector`   | Stem references a circle + sector / arc / inscribed shape                  |
| `linearGraph`        | Stem references the graph of a single line                                 |
| `parabola`           | Stem references the graph of a quadratic                                   |
| ...                  | See `src/components/QuestionDiagrams.jsx` for the full switch              |

## Scatterplot params (the most common diagram type)

```js
diagram: { type: 'scatterplot', params: {
  // Required
  points: [[x1,y1], [x2,y2], /* ... 8-12 points scattered around the line */],

  // Range
  xMin: 0, xMax: 10,
  yMin: 0, yMax: 32,

  // Spacing — pick steps so the grid has 5-12 lines per axis (denser is noisy).
  xGridStep: 1,        // gridline spacing (default 1)
  yGridStep: 4,
  xLabelStep: 2,       // tick-label spacing (default = grid step)
  yLabelStep: 8,

  // Axis labels — supply contextual labels when the stem provides context
  // (e.g. "test scores vs hours studied"). Skip them for abstract x/y questions
  // — the renderer falls back to a small italic 'y' at the top of the y-axis.
  xLabel: 'Days of growth',
  yLabel: 'Plant height (cm)',

  // Optional title above the chart
  title: undefined,

  // Best-fit line — dashed blue, drawn from (xMin, slope*xMin+intercept) to
  // (xMax, slope*xMax+intercept). Pass when the stem cites the equation.
  bestFitLine: { slope: 2.5, intercept: 4 },

  // Residual highlighting — pass `highlightPoint: [x, y]` for stems that
  // single out a specific data point ("the data point at (5, 13)").
  // Renders the highlight in brand orange and (with `showResidual: true`)
  // draws a dashed orange residual line to the best-fit line.
  highlightPoint: [5, 13],
  highlightLabel: '(5, 13)',
  showResidual: true,
} },
```

### How to pick `points` (hand-authoring)

Generate 8-12 points scattered around the stated line equation with **realistic
noise** (about ±10% of the y-range). Don't use a deterministic helper — each
item should have plausible-looking noise that doesn't feel mechanical.

Quick check: when you've picked points, mentally regress them. The slope and
intercept of the regression should land within ±10% of the stated equation.
The pilot items (bank-alg-{203,204,207}) are good references.

For residual items, the highlight point's offset from the line should match
the stated residual (e.g., for residual = +2 with line y=2x+1 and point x=5:
predicted y = 11, so highlight y = 13 → +2).

### Range and step recipe (when the stem doesn't fix them)

| y-range | yGridStep | yLabelStep |
|---------|-----------|-----------|
| 0–12    | 1         | 2         |
| 0–32    | 4         | 8         |
| 0–60    | 5         | 10        |
| 0–120   | 10        | 20        |
| 0–1000  | 100       | 200       |

Same logic for x. **Don't pick a `gridStep` of 1 when the range is > 24** —
the renderer will draw 24+ vertical white lines and the chart looks busy.

## Data-set / mean / median items (use `dotPlot`)

Stems that say "a data set has values 4, 7, 9, 11, 12 — what is the mean?"
should render the values as a dot plot:

```js
diagram: { type: 'dotPlot', params: {
  values: [4, 7, 9, 9, 11, 12],
  xMin: 0, xMax: 15,
  xLabel: 'Score',
} },
```

For purely conceptual stems ("a data set has mean 25 and median 22; if each
value is increased by 8..."), **do not invent a data set** — the question is
about how mean/median respond to a uniform shift, not about specific values.
Skip the `diagram` field.

## When NOT to add a diagram

- The stem doesn't reference a visual at all (most algebra word problems).
- The stem describes statistics symbolically without specific values
  (mean of 25, median of 22 with no listed values).
- The stem asks for an identity / proof / definition with no concrete data.

## Renderer extension procedure

If a stem references a visual the current router can't draw:

1. Add a `case '<new-type>':` in the `QuestionDiagram` switch
   in `src/components/QuestionDiagrams.jsx` (around line ~775).
2. Render via a dedicated component (place new ones in
   `src/components/graphs/` and import).
3. Add at least one example to the dev preview gallery (open
   `http://localhost:3000/#__diag=<some-id>` to verify visually).
4. Update this doc with the new type in the table above.

## Visual iteration during authoring

Open `http://localhost:3000/#__diag=<id-list>` in a dev session — bypasses
the drill flow and renders just the question + diagram + choices. Supports:

- Bank items: `#__diag=bank-alg-203,bank-alg-204`
- Test items: `#__diag=test10:4,test10M2Easy:14`
- All scatterplot stems: `#__diag=ALL_SCATTER`

The preview component is at `src/components/__DiagramPreview.jsx` — gated on
URL hash so it never reaches production users.

## Missing-diagram lint

`npm run bank:validate` runs `scripts/auditMissingDiagrams.mjs --strict`
after the regular bank checks. The script scans every math/RW bank item
and every practice-test item, looks for stems that reference a visual
artifact (`scatterplot`, `box plot`, `histogram`, `the figure`, `the
table`, etc.), and exits non-zero on any item without a `diagram` (or, for
R&W table cues, a `questionTable`).

Run `npm run bank:audit:diagrams` for the non-strict human-readable report.

## Box plot — single vs comparison

`SATBoxPlot` accepts either a single five-number summary as top-level
fields OR a `distributions: [...]` array for side-by-side comparison plots
sharing the same axis. Use comparison form when the stem compares two or
more distributions ("Class A vs Class B", "before vs after"):

```js
diagram: { type: 'boxPlot', params: {
  distributions: [
    { label: 'Class A', min: 50, q1: 60, median: 75, q3: 90, max: 95 },
    { label: 'Class B', min: 50, q1: 68, median: 75, q3: 82, max: 95 },
  ],
  xMin: 45, xMax: 100, xGridStep: 5, xLabelStep: 10, xLabel: 'Test score',
} },
```
