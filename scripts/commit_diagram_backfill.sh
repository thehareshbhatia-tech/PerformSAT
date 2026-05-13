#!/usr/bin/env bash
# One-shot validate + test + commit for the scatterplot diagram backfill.
# Run from PerformSAT root:  bash scripts/commit_diagram_backfill.sh
# (Or just paste the body line-by-line into a working terminal.)
set -e
cd "$(dirname "$0")/.."

echo "━━━ 1/4 bank validate ━━━"
npm run bank:validate

echo ""
echo "━━━ 2/4 syntax check on edited test files ━━━"
for f in \
  src/data/practiceTests/practiceTest5.js \
  src/data/practiceTests/practiceTest6.js \
  src/data/practiceTests/practiceTest10.js \
  src/data/practiceTests/practiceTest11.js \
  src/data/practiceTests/practiceTest2M2Easy.js \
  src/data/practiceTests/practiceTest3M2Easy.js \
  src/data/practiceTests/practiceTest4M2Easy.js \
  src/data/practiceTests/practiceTest5M2Easy.js \
  src/data/practiceTests/practiceTest6M2Easy.js \
  src/data/practiceTests/practiceTest7M2Easy.js \
  src/data/practiceTests/practiceTest8M2Easy.js \
  src/data/practiceTests/practiceTest9M2Easy.js \
  src/data/practiceTests/practiceTest10M2Easy.js \
  src/data/practiceTests/practiceTest12M2Easy.js
do
  node --check "$f" && echo "  ok  $f"
done

echo ""
echo "━━━ 3/4 bank-related jest specs ━━━"
CI=true npx react-scripts test --watchAll=false --testPathPattern="bank|practiceTest" 2>&1 | tail -10

echo ""
echo "━━━ 4/4 commit ━━━"
git add \
  src/components/QuestionDiagrams.jsx \
  src/components/__DiagramPreview.jsx \
  src/data/questions/bank/problemSolving.js \
  src/data/practiceTests/practiceTest5.js \
  src/data/practiceTests/practiceTest6.js \
  src/data/practiceTests/practiceTest10.js \
  src/data/practiceTests/practiceTest11.js \
  src/data/practiceTests/practiceTest2M2Easy.js \
  src/data/practiceTests/practiceTest3M2Easy.js \
  src/data/practiceTests/practiceTest4M2Easy.js \
  src/data/practiceTests/practiceTest5M2Easy.js \
  src/data/practiceTests/practiceTest6M2Easy.js \
  src/data/practiceTests/practiceTest7M2Easy.js \
  src/data/practiceTests/practiceTest8M2Easy.js \
  src/data/practiceTests/practiceTest9M2Easy.js \
  src/data/practiceTests/practiceTest10M2Easy.js \
  src/data/practiceTests/practiceTest12M2Easy.js \
  docs/AUTHORING_DIAGRAMS.md \
  scripts/commit_diagram_backfill.sh

git commit -m "feat(diagrams): scatterplot backfill — 25 items + highlight/residual renderer

- ScatterplotDiagram: add highlightPoint, highlightLabel, showResidual props
  for residual-style questions where one specific data point matters. Renders
  the highlight in brand orange + larger; with showResidual draws a dashed
  vertical residual line down/up to the best-fit line.
- problemSolving bank (11 items): bank-ps-{084,085,086,088,091,132,133,134,
  137,138,139} now carry diagram blocks. Five residual items (084/085/086/
  088/091) use the new highlight props; the prediction items (132-139) get
  background scatter + line of best fit.
- Practice tests (14 items across 12 files): practiceTest5/6/10/11 and ten
  M2Easy variants (2,3,4,5,6,7,8,9,10,12). Same patterns as the bank items.
- DiagramPreview: extend to look up test items via 'test<N>[M2Easy]:<id>'
  so we can verify test items in isolation. lookupTestItem now collects
  every matching id and prefers a diagrammed match: practice tests reuse
  1-22 across Module 1 and Module 2, so first-match returned the wrong
  module for 4 of these items (test10:4, test11:9, test5:10, test6:8).
- docs/AUTHORING_DIAGRAMS.md: encodes the rule that stem-mentioned visuals
  MUST carry a diagram block, with the renderer-types table and a recipe
  for hand-authoring scatterplot params.
- scripts/commit_diagram_backfill.sh: this script, kept for posterity.

Closes the user's complaint that 'scatterplots question type don't even show
a scatterplot.' All 28 stems that mention scatterplot now render one
(3 already shipped in the pilot ccd1639, 25 in this commit). 8 abstract
data-set / mean items (task #3) and the visual-reference lint rule (task #5)
are deferred to a follow-up.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
"

echo ""
echo "Done. Push with: git push origin main"
