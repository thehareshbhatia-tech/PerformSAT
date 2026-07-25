#!/usr/bin/env node
// Builds "solved in N seconds" speedrun videos: a Bluebook-looking question on
// white, then a real Desmos solve typed out live, then the answer.
//
//   node speedrun.mjs speedruns/vertex-minimum.json
//   node speedrun.mjs                                  # every spec in speedruns/
//
// Output: out/<slug>/<slug>.mp4 (1080x1920, 30fps, silent — the trending sound
// goes on in the TikTok app at post time, same as the photo-mode carousels).
//
// The question chrome deliberately mimics the digital SAT rather than Seva's
// navy brand system: recognition of the real test interface is the hook, and
// the calculator really is Desmos, so the solve is not a mockup.
import {
  readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, copyFileSync, mkdtempSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const HERE = dirname(fileURLToPath(import.meta.url));
const BROWSE = join(homedir(), '.claude/skills/gstack/browse/dist/browse');
if (!existsSync(BROWSE)) {
  console.error(`browse binary not found at ${BROWSE} — run the gstack browse setup first.`);
  process.exit(1);
}
let FFMPEG;
try { FFMPEG = require('ffmpeg-static'); } catch { FFMPEG = 'ffmpeg'; }

const browse = (...args) => execFileSync(BROWSE, args, { encoding: 'utf8' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DESMOS_API =
  'https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

const W = 1080;
const H = 1920;
const LIME = '#C6EE4E';
const ORANGE = '#D5572B';
const NAVY = '#1E2A3A';

const specFiles = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(join(HERE, 'speedruns')).filter((f) => f.endsWith('.json')).sort()
      .map((f) => join(HERE, 'speedruns', f));

if (!specFiles.length) {
  console.error('No spec JSON files found in speedruns/.');
  process.exit(1);
}

// ── Frame markup ─────────────────────────────────────────────────────────────
const LETTERS = ['A', 'B', 'C', 'D'];

const shell = (body) => `<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing:border-box; }
  html,body { margin:0; padding:0; width:${W}px; height:${H}px; background:#fff;
    font-family:-apple-system,"Helvetica Neue",Arial,sans-serif; color:#111; }
  .stage { width:${W}px; height:${H}px; padding:64px 56px; display:flex;
    flex-direction:column; justify-content:center; position:relative; }
  .qnum { position:absolute; top:64px; left:56px; right:56px; }
  .qnum { display:flex; align-items:center; gap:0; }
  .qnum b { background:#111; color:#fff; font-size:38px; font-weight:700;
    padding:10px 22px; border-radius:4px 0 0 4px; }
  .qnum span { flex:1; height:58px; background:#dcdcdc; border-radius:0 4px 4px 0; }
  .eq { text-align:center; font-family:"Times New Roman",Times,serif; font-size:58px;
    margin:14px 0 40px; }
  .eq i { font-style:italic; }
  .stem { text-align:center; font-size:44px; line-height:1.42; margin-bottom:52px; }
  .stem i { font-family:"Times New Roman",Times,serif; font-style:italic; }
  .choice { display:flex; align-items:center; gap:26px; border:3px solid #111;
    border-radius:999px; padding:22px 34px; margin-bottom:26px; font-size:44px; }
  .choice .l { width:64px; height:64px; flex:0 0 64px; border:3px solid #111;
    border-radius:50%; display:flex; align-items:center; justify-content:center;
    font-size:36px; }
  .choice.correct { background:${LIME}; border-color:${LIME}; font-weight:700; }
  .choice.correct .l { border-color:#111; background:#fff; }
  .choice.trap { border-color:${ORANGE}; }
  .choice.trap .tag { margin-left:auto; background:${ORANGE}; color:#fff; font-size:24px;
    font-weight:700; letter-spacing:.08em; padding:8px 16px; border-radius:6px; }
  .calc { margin-top:8px; border:2px solid #d5d5d5; border-radius:10px; overflow:hidden; }
  .calc img { display:block; width:100%; }
  .sticker { position:absolute; left:50%; top:52%; transform:translate(-50%,-50%) rotate(-3deg);
    background:${LIME}; color:${NAVY}; font-family:"Baloo 2",sans-serif; font-weight:800;
    font-size:92px; line-height:1.08; text-align:center; padding:34px 56px; border-radius:20px;
    white-space:nowrap; box-shadow:0 18px 40px rgba(0,0,0,.18); }
  .note { margin-top:40px; font-size:40px; line-height:1.4; background:#f4f4f2;
    border-left:12px solid ${ORANGE}; padding:30px 34px; border-radius:8px; }
  .note.win { border-left-color:${LIME}; }
  .brand { position:absolute; left:56px; bottom:44px; font-family:"Baloo 2",sans-serif;
    font-weight:800; font-size:42px; letter-spacing:.02em; }
  .brand .s{color:${ORANGE}} .brand .e{color:${ORANGE}} .brand .v{color:#9A72C8} .brand .a{color:${LIME}}
  .url { position:absolute; right:56px; bottom:50px; font-size:30px; color:#9a9a9a;
    letter-spacing:.06em; }
</style>
<div class="stage">${body}
  <div class="brand"><span class="s">S</span><span class="e">E</span><span class="v">V</span><span class="a">A</span></div>
  <div class="url">sevaprep.com</div>
</div>`;

// The digital SAT sets function names in serif italic; matching it is most of
// why the frame reads as the real thing.
const mathify = (s) => s.replace(/\bf\b/g, '<i>f</i>').replace(/\bx\b/g, '<i>x</i>');

const questionBlock = (spec, { revealCorrect = false, showTrap = false } = {}) => `
  <div class="qnum"><b>${spec.number}</b><span></span></div>
  <div class="eq">${mathify(spec.equation)}</div>
  <div class="stem">${mathify(spec.stem)}</div>
  ${spec.choices.map((c, i) => {
    const cls = revealCorrect && i === spec.correct ? ' correct'
      : showTrap && i === spec.trap ? ' trap' : '';
    const tag = showTrap && i === spec.trap ? '<span class="tag">THE TRAP</span>' : '';
    return `<div class="choice${cls}"><span class="l">${LETTERS[i]}</span><span>${c}</span>${tag}</div>`;
  }).join('')}`;

// ── Desmos frame capture ─────────────────────────────────────────────────────
// One page load, then expressions are pushed in progressively so the graph is
// drawn by the real engine on every frame rather than faked.
async function captureDesmosFrames(spec, work) {
  const CW = 960;
  const CH = 760;
  const html = `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0}#calc{width:${CW}px;height:${CH}px}
.dcg-slider-container{display:none !important}</style>
<div id="calc"></div>
<script src="${DESMOS_API}"></script>
<script>
  window.calc = Desmos.GraphingCalculator(document.getElementById('calc'), {
    keypad:false, zoomButtons:false, settingsMenu:false, expressionsTopbar:false,
    border:false, fontSize:22, lockViewport:true
  });
  window.calc.setMathBounds(${JSON.stringify(spec.desmos.bounds)});
  window.ready = true;
</script>`;
  const page = join(work, 'calc.html');
  writeFileSync(page, html);

  browse('viewport', `${CW}x${CH}`);
  browse('goto', `file://${page}`);
  await sleep(3000);
  if (browse('js', "typeof window.ready !== 'undefined' ? 'yes' : 'no'").trim() !== 'yes') {
    throw new Error('Desmos failed to initialize');
  }

  const typed = spec.desmos.typed;
  // Type in chunks so the clip feels like someone entering it, not a cut.
  const steps = [];
  for (let i = 3; i < typed.length; i += 2) steps.push(typed.slice(0, i));
  steps.push(typed);

  const frames = [];
  for (const [i, partial] of steps.entries()) {
    browse('js', `window.calc.setExpressions([{id:'f',latex:${JSON.stringify(partial)}}]); 'ok'`);
    await sleep(260);
    const out = join(work, `desmos-${String(i).padStart(2, '0')}.png`);
    browse('screenshot', '--selector', '#calc', out);
    frames.push(out);
  }

  // Settled graph, then the vertex called out with a labelled point.
  const { x, y } = spec.desmos.vertex;
  browse(
    'js',
    `window.calc.setExpressions([{id:'v',latex:${JSON.stringify(`(${x},${y})`)},color:'#D5572B',pointSize:16,label:'minimum',showLabel:true}]); 'ok'`
  );
  await sleep(700);
  const vertexFrame = join(work, 'desmos-vertex.png');
  browse('screenshot', '--selector', '#calc', vertexFrame);

  return { frames, vertexFrame };
}

// ── Compose one 1080x1920 frame ──────────────────────────────────────────────
async function shoot(bodyHtml, outPath, work, idx) {
  const page = join(work, `frame-${idx}.html`);
  writeFileSync(page, shell(bodyHtml));
  browse('viewport', `${W}x${H}`);
  browse('goto', `file://${page}`);
  await sleep(650);
  browse('screenshot', outPath);
}

const dataUri = (p) => `data:image/png;base64,${readFileSync(p).toString('base64')}`;

// ── Main ─────────────────────────────────────────────────────────────────────
for (const file of specFiles) {
  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const slug = spec.slug || basename(file, '.json');
  const work = mkdtempSync('/private/tmp/seva-speedrun-');
  const outDir = join(HERE, 'out', slug);
  mkdirSync(outDir, { recursive: true });

  const { frames: calcFrames, vertexFrame } = await captureDesmosFrames(spec, work);

  const plan = [];
  const push = (html, seconds) => plan.push({ html, seconds });

  // 1 — the hook: real-looking question, timer promise.
  push(
    `${questionBlock(spec)}<div class="sticker">SOLVED IN<br>${spec.seconds} SECONDS</div>`,
    2.2
  );
  // 2 — the solve, typed live.
  for (const f of calcFrames) {
    push(
      `<div class="qnum"><b>${spec.number}</b><span></span></div>
       <div class="eq">${mathify(spec.equation)}</div>
       <div class="calc"><img src="${dataUri(f)}"></div>`,
      0.22
    );
  }
  // 3 — vertex called out.
  push(
    `<div class="qnum"><b>${spec.number}</b><span></span></div>
     <div class="eq">${mathify(spec.equation)}</div>
     <div class="calc"><img src="${dataUri(vertexFrame)}"></div>
     <div class="note win">${spec.takeaway}</div>`,
    3.0
  );
  // 4 — answer + the trap that sits next to it.
  push(questionBlock(spec, { revealCorrect: true, showTrap: true }), 3.0);
  // 5 — why it matters.
  push(
    `${questionBlock(spec, { revealCorrect: true })}
     <div class="note">${spec.trapNote}</div>`,
    2.6
  );

  const pngs = [];
  for (const [i, step] of plan.entries()) {
    const p = join(work, `out-${String(i).padStart(3, '0')}.png`);
    await shoot(step.html, p, work, i);
    pngs.push({ path: p, seconds: step.seconds });
  }

  const args = [];
  for (const f of pngs) args.push('-loop', '1', '-t', String(f.seconds), '-i', f.path);
  const filter = pngs.map((_, i) => `[${i}:v]`).join('') + `concat=n=${pngs.length}:v=1:a=0[v]`;
  const mp4 = join(outDir, `${slug}.mp4`);
  execFileSync(
    FFMPEG,
    [...args, '-filter_complex', filter, '-map', '[v]', '-r', '30',
      '-pix_fmt', 'yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-y', mp4],
    { stdio: 'pipe' }
  );

  copyFileSync(pngs[0].path, join(outDir, 'cover.png'));
  if (spec.caption) writeFileSync(join(outDir, 'caption.txt'), `${spec.caption}\n`);
  const total = plan.reduce((s, p) => s + p.seconds, 0);
  console.log(`${slug}: ${pngs.length} frames, ${total.toFixed(1)}s -> out/${slug}/${slug}.mp4`);
}
