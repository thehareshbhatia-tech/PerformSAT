#!/usr/bin/env node
// Captures real Desmos calculator screenshots for carousel/video slides.
//
//   node desmos-shot.mjs shots/solve-linear.json      # one spec
//   node desmos-shot.mjs                              # every spec in shots/
//
// Spec JSON: { name, width?, height?, fontSize?, projectorMode?, expressions: [...], bounds: {...} }
//
// projectorMode is ON by default: it thickens curves and enlarges axis numbers,
// which is the difference between a screenshot that survives phone-sized viewing
// and one that doesn't. Set it false only if a shot needs the thin default.
//
// To show a point's coordinates the way Desmos itself does, give the point
// `showLabel: true` with `label: ""` — an empty label falls back to Desmos'
// native coordinate readout in its own math type. Add `dragMode: "NONE"` or the
// point renders with a draggable grey halo.
// Expression objects pass straight through to Desmos.GraphingCalculator.setExpressions —
// use secret:true on label-point expressions to keep the expression list showing only
// the equations you'd actually type.
//
// Output: shots/<name>.png (same-engine calculator UI as Bluebook's embedded Desmos).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, copyFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BROWSE = join(homedir(), '.claude/skills/gstack/browse/dist/browse');
if (!existsSync(BROWSE)) {
  console.error(`browse binary not found at ${BROWSE}`);
  process.exit(1);
}
const browse = (...args) => execFileSync(BROWSE, args, { encoding: 'utf8' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const argPaths = process.argv.slice(2);
const specFiles = argPaths.length
  ? argPaths
  : readdirSync(join(HERE, 'shots')).filter((f) => f.endsWith('.json')).sort().map((f) => join(HERE, 'shots', f));

if (!specFiles.length) {
  console.error('No shot spec JSON files found in shots/.');
  process.exit(1);
}

// The demo API key from desmos.com/api docs — fine for internal rendering.
const API = 'https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

for (const file of specFiles) {
  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const name = spec.name || basename(file, '.json');
  const W = spec.width || 1500;
  const H = spec.height || 1000;

  const work = mkdtempSync('/private/tmp/seva-desmos-');
  const htmlPath = join(work, 'calc.html');
  writeFileSync(
    htmlPath,
    `<!doctype html><meta charset="utf-8">
<style>
  html, body { margin:0; padding:0; }
  #calc { width:${W}px; height:${H}px; }
  .dcg-slider-container { display:none !important; }
</style>
<div id="calc"></div>
<script src="${API}"></script>
<script>
  window.calculator = Desmos.GraphingCalculator(document.getElementById('calc'), {
    keypad:false, zoomButtons:false, settingsMenu:false, expressionsTopbar:false,
    border:false, fontSize:${spec.fontSize || 24}, lockViewport:true,
    projectorMode:${spec.projectorMode === false ? 'false' : 'true'}
  });
  window.calculator.setExpressions(${JSON.stringify(spec.expressions)});
  ${spec.bounds ? `window.calculator.setMathBounds(${JSON.stringify(spec.bounds)});` : ''}
  window.calcReady = true;
</script>`
  );

  browse('viewport', `${W}x${H}`);
  browse('goto', `file://${htmlPath}`);
  await sleep(2500); // calculator.js load + first paint
  const ready = browse('js', "typeof window.calcReady !== 'undefined' ? 'yes' : 'no'").trim();
  if (ready !== 'yes') {
    console.error(`${name}: calculator failed to initialize`);
    process.exit(1);
  }
  await sleep(600);
  // Strip the interactive chrome before capturing: the delete X on each row and
  // the histogram/boxplot settings block ("Bar Heights", "Exclude Outliers").
  // These are DOM, so a style override works — unlike the attribution badge,
  // which Desmos draws into the graph canvas itself.
  browse('js', `document.querySelectorAll('.dcg-top-level-delete, .dcg-visualization-parameters-container, .dcg-toggles-container').forEach((e) => e.style.setProperty('display', 'none', 'important')); 'ok'`);
  await sleep(200);
  mkdirSync(join(HERE, 'shots'), { recursive: true });
  const tmpPng = join(work, `${name}.png`);
  browse('screenshot', '--selector', '#calc', tmpPng);
  copyFileSync(tmpPng, join(HERE, 'shots', `${name}.png`));

  // Desmos draws its labels as bare text straight over the gridlines, which is
  // unreadable once a curve runs behind them. Instead of labelling in Desmos,
  // emit the pixel position of each point so the carousel can draw a boxed
  // readout on top — the same white bubble Desmos shows when you click a point.
  if (Array.isArray(spec.readouts) && spec.readouts.length) {
    const gb = JSON.parse(browse('js', 'JSON.stringify(window.calculator.graphpaperBounds)'));
    const m = gb.mathCoordinates;
    const px = gb.pixelCoordinates;
    const placed = spec.readouts.map((r) => {
      const [mx, my] = r.point;
      const x = px.left + ((mx - m.left) / m.width) * px.width;
      const y = px.top + ((m.top - my) / m.height) * px.height;
      return {
        text: r.text,
        place: r.place || 'right',
        leftPct: Number(((x / W) * 100).toFixed(3)),
        topPct: Number(((y / H) * 100).toFixed(3)),
      };
    });
    writeFileSync(join(HERE, 'shots', `${name}.readouts.json`), `${JSON.stringify(placed, null, 2)}\n`);
  }
  console.log(`${name}: ${W}x${H} -> shots/${name}.png`);
}
