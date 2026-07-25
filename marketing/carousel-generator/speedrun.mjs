#!/usr/bin/env node
// Builds "solved in N seconds" speedrun videos: a Bluebook-looking question on
// white, a real Desmos solve typed out live in a calculator panel that opens
// over the question the way it does in the actual test, then the answer.
//
//   node speedrun.mjs speedruns/vertex-minimum.json
//   node speedrun.mjs                                  # every spec in speedruns/
//
// Output: out/<slug>/<slug>.mp4 — 1080x1920, 30fps, with a synced keystroke
// track (clicks land on the frames where characters appear).
//
// Two rules hold the whole thing together:
//   1. The question block is byte-identical on every frame and sits at a fixed
//      top, so nothing shifts between cuts. The calculator is an overlay, never
//      a replacement — that is what makes it read as one continuous take.
//   2. The chrome mimics the digital SAT rather than Seva's navy brand system.
//      Recognition of the real test interface is the hook.
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
const ff = (args) => execFileSync(FFMPEG, args, { stdio: 'pipe' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DESMOS_API =
  'https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';

const W = 1080;
const H = 1920;
const LIME = '#C6EE4E';
const ORANGE = '#D5572B';
const NAVY = '#1E2A3A';

// Calculator overlay geometry — the capture is sized to the panel so the
// screenshot is never rescaled and the Desmos type stays crisp.
// pad keeps the graph clear of the rounded corner — Desmos' "powered by"
// attribution sits bottom-right and must not be clipped.
const PANEL = { top: 690, left: 40, width: W - 80, height: 1080, bar: 66, row: 92, pad: 22 };
const CW = PANEL.width - PANEL.pad * 2;
const CH = PANEL.height - PANEL.bar - PANEL.row - PANEL.pad * 2;

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
// The digital SAT sets function names and variables in serif italic; matching
// it is most of why the frame reads as the real thing.
const mathify = (s) => s.replace(/\bf\b/g, '<i>f</i>').replace(/\bx\b/g, '<i>x</i>');

const shell = (body) => `<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing:border-box; }
  html,body { margin:0; padding:0; width:${W}px; height:${H}px; background:#fff;
    font-family:-apple-system,"Helvetica Neue",Arial,sans-serif; color:#111;
    -webkit-font-smoothing:antialiased; }
  .stage { width:${W}px; height:${H}px; position:relative; overflow:hidden; }

  /* Fixed anchors — identical on every frame, so nothing shifts between cuts. */
  .qnum { position:absolute; top:60px; left:56px; right:56px;
    display:flex; align-items:center; }
  .qnum b { background:#111; color:#fff; font-size:36px; font-weight:700;
    padding:9px 20px; border-radius:4px 0 0 4px; }
  .qnum span { flex:1; height:54px; background:#e2e2e2; border-radius:0 4px 4px 0; }

  .head { position:absolute; top:172px; left:56px; right:56px; }
  .eq { text-align:center; font-family:"Times New Roman",Times,serif; font-size:56px;
    margin:0 0 34px; }
  .eq i { font-style:italic; }
  .stem { text-align:center; font-size:42px; line-height:1.4; margin:0 0 44px; }
  .stem i { font-family:"Times New Roman",Times,serif; font-style:italic; }

  .choice { display:flex; align-items:center; gap:24px; border:3px solid #111;
    border-radius:999px; padding:20px 32px; margin-bottom:24px; font-size:42px;
    background:#fff; }
  .choice .l { width:60px; height:60px; flex:0 0 60px; border:3px solid #111;
    border-radius:50%; display:flex; align-items:center; justify-content:center;
    font-size:34px; }
  .choice.correct { background:${LIME}; border-color:${LIME}; font-weight:700; }
  .choice.trap { border-color:${ORANGE}; border-width:4px; }
  .choice .tag { margin-left:auto; background:${ORANGE}; color:#fff; font-size:22px;
    font-weight:700; letter-spacing:.09em; padding:7px 14px; border-radius:5px; }

  /* Calculator opens over the question, as it does in the real test. */
  .panel { position:absolute; top:${PANEL.top}px; left:${PANEL.left}px;
    width:${PANEL.width}px; height:${PANEL.height}px; background:#fff;
    border:1px solid #cfcfcf; border-radius:14px; overflow:hidden;
    box-shadow:0 26px 70px rgba(0,0,0,.22); }
  .panel .bar { height:${PANEL.bar}px; background:#f2f2f2; border-bottom:1px solid #e0e0e0;
    display:flex; align-items:center; padding:0 22px; font-size:26px; color:#5a5a5a;
    letter-spacing:.04em; font-weight:600; }
  .panel .bar .dots { display:flex; gap:9px; margin-right:18px; }
  .panel .bar .dots i { width:14px; height:14px; border-radius:50%; background:#d0d0d0;
    display:block; }
  /* Desmos renders its own badge into the graph canvas but truncates it at these
     widths, so the attribution is stated here where it is always legible. */
  .panel .bar .attrib { margin-left:auto; font-size:22px; color:#9b9b9b; font-weight:500;
    letter-spacing:.02em; }
  .panel .body { padding:${PANEL.pad}px; }
  .panel img { display:block; width:${CW}px; height:${CH}px; }
  /* Desmos' own expression row, redrawn here so the graph gets the full panel
     instead of sharing it with a mostly-empty list. */
  .exprow { height:${PANEL.row}px; display:flex; align-items:center; gap:18px;
    padding:0 22px; border-bottom:1px solid #e6e6e6; background:#fff; }
  .exprow .n { color:#a8a8a8; font-size:24px; width:22px; }
  .exprow .swatch { width:20px; height:20px; border-radius:50%; background:#2d70b3;
    flex:0 0 20px; }
  .exprow .tex { font-family:"Times New Roman",Times,serif; font-size:40px;
    white-space:nowrap; }
  .exprow .tex i { font-style:italic; }
  .exprow .caret { width:3px; height:44px; background:#111; margin-left:3px; }

  .sticker { position:absolute; left:50%; top:56%; transform:translate(-50%,-50%) rotate(-3deg);
    background:${LIME}; color:${NAVY}; font-family:"Baloo 2",sans-serif; font-weight:800;
    font-size:88px; line-height:1.1; text-align:center; padding:32px 54px; border-radius:20px;
    white-space:nowrap; box-shadow:0 18px 44px rgba(0,0,0,.2); }

  .note { position:absolute; left:56px; right:56px; bottom:150px; font-size:38px;
    line-height:1.4; background:#f5f5f3; border-left:12px solid ${ORANGE};
    padding:28px 32px; border-radius:8px; }
  .note.win { border-left-color:${LIME}; }

  .brand { position:absolute; left:56px; bottom:44px; font-family:"Baloo 2",sans-serif;
    font-weight:800; font-size:40px; letter-spacing:.02em; }
  .brand .o{color:${ORANGE}} .brand .p{color:#9A72C8} .brand .g{color:${LIME}}
  .url { position:absolute; right:56px; bottom:50px; font-size:28px; color:#a2a2a2;
    letter-spacing:.06em; }
</style>
<div class="stage">${body}
  <div class="brand"><span class="o">S</span><span class="o">E</span><span class="p">V</span><span class="g">A</span></div>
  <div class="url">sevaprep.com</div>
</div>`;

// Byte-identical on every frame apart from the answer styling, which changes
// colour only — never height — so the choices never move.
const question = (spec, { revealCorrect = false, showTrap = false } = {}) => `
  <div class="qnum"><b>${spec.number}</b><span></span></div>
  <div class="head">
    <div class="eq">${mathify(spec.equation)}</div>
    <div class="stem">${mathify(spec.stem)}</div>
    ${spec.choices.map((c, i) => {
      const cls = revealCorrect && i === spec.correct ? ' correct'
        : showTrap && i === spec.trap ? ' trap' : '';
      const tag = showTrap && i === spec.trap ? '<span class="tag">THE TRAP</span>' : '';
      return `<div class="choice${cls}"><span class="l">${LETTERS[i]}</span><span>${c}</span>${tag}</div>`;
    }).join('')}
  </div>`;

// Latex as Desmos displays it, not as it is typed.
const prettyTex = (latex) => latex
  .replace(/-/g, '−')
  .replace(/\*/g, '·')
  .replace(/([a-z])/gi, '<i>$1</i>');

const panel = (imgUri, { typed = null, caret = false } = {}) => `
  <div class="panel">
    <div class="bar"><span class="dots"><i></i><i></i><i></i></span>Calculator
      <span class="attrib">powered by Desmos</span></div>
    <div class="exprow">
      <span class="n">1</span><span class="swatch"></span>
      <span class="tex">${typed ? prettyTex(typed) : ''}</span>
      ${caret ? '<span class="caret"></span>' : ''}
    </div>
    <div class="body"><img src="${imgUri}"></div>
  </div>`;

// ── Desmos capture ───────────────────────────────────────────────────────────
// The page loads once and expressions are pushed in progressively, so every
// frame is drawn by the real engine rather than faked.
async function captureDesmos(spec, work) {
  const page = join(work, 'calc.html');
  writeFileSync(page, `<!doctype html><meta charset="utf-8">
<style>
  html,body{margin:0;padding:0;background:#fff}
  /* Desmos anchors its attribution to the calculator's bottom-right corner and
     lets it bleed past the element box, so capture a slightly larger frame. */
  #shot{width:${CW}px;height:${CH}px;background:#fff;display:flex;
    align-items:center;justify-content:center}
  #calc{width:${CW - 80}px;height:${CH - 110}px}
</style>
<div id="shot"><div id="calc"></div></div>
<script src="${DESMOS_API}"></script>
<script>
  window.calc = Desmos.GraphingCalculator(document.getElementById('calc'), {
    keypad:false, zoomButtons:false, settingsMenu:false, expressionsTopbar:false,
    expressions:false, border:false, fontSize:24, lockViewport:true
  });
  window.calc.setMathBounds(${JSON.stringify(spec.desmos.bounds)});
  window.ready = true;
</script>`);

  browse('viewport', `${CW}x${CH}`);
  browse('goto', `file://${page}`);
  await sleep(3000);
  if (browse('js', "typeof window.ready !== 'undefined' ? 'yes' : 'no'").trim() !== 'yes') {
    throw new Error('Desmos failed to initialize');
  }

  const typed = spec.desmos.typed;
  const shot = async (name) => {
    const p = join(work, `${name}.png`);
    browse('screenshot', '--selector', '#shot', p);
    return p;
  };

  const empty = await shot('calc-empty');

  // One character at a time: the keystroke track syncs to these frames.
  const typing = [];
  for (let i = 1; i <= typed.length; i++) {
    browse('js', `window.calc.setExpressions([{id:'f',latex:${JSON.stringify(typed.slice(0, i))}}]); 'ok'`);
    await sleep(150);
    typing.push(await shot(`calc-t${String(i).padStart(2, '0')}`));
  }

  await sleep(500);
  const settled = await shot('calc-settled');

  const { x, y } = spec.desmos.vertex;
  browse('js', `window.calc.setExpressions([{id:'v',latex:${JSON.stringify(`(${x},${y})`)},color:'#D5572B',pointSize:18,label:'minimum',showLabel:true}]); 'ok'`);
  await sleep(700);
  const vertex = await shot('calc-vertex');

  return { empty, typing, settled, vertex };
}

async function shoot(bodyHtml, outPath, work, idx) {
  const page = join(work, `frame-${idx}.html`);
  writeFileSync(page, shell(bodyHtml));
  browse('viewport', `${W}x${H}`);
  browse('goto', `file://${page}`);
  await sleep(600);
  browse('screenshot', outPath);
}

const dataUri = (p) => `data:image/png;base64,${readFileSync(p).toString('base64')}`;

// ── Audio ────────────────────────────────────────────────────────────────────
// Keystroke ticks and a soft reveal chime, synthesised so there is nothing to
// license. The trending sound still goes on top in the TikTok app.
function buildAudio(work, clickTimes, revealTime, totalSec) {
  const click = join(work, 'click.wav');
  ff(['-f', 'lavfi', '-i', 'anoisesrc=d=0.06:c=white:a=0.9', '-af',
    'highpass=f=1400,lowpass=f=7000,afade=t=out:st=0.004:d=0.05,volume=0.5',
    '-ar', '44100', '-ac', '2', '-y', click]);

  const chime = join(work, 'chime.wav');
  ff(['-f', 'lavfi', '-i', 'sine=frequency=784:duration=0.5', '-af',
    'afade=t=out:st=0.05:d=0.45,volume=0.16', '-ar', '44100', '-ac', '2', '-y', chime]);

  const inputs = [];
  const parts = [];
  clickTimes.forEach((t, i) => {
    inputs.push('-i', click);
    parts.push(`[${i}:a]adelay=${Math.round(t * 1000)}|${Math.round(t * 1000)}[c${i}]`);
  });
  const ci = clickTimes.length;
  inputs.push('-i', chime);
  parts.push(`[${ci}:a]adelay=${Math.round(revealTime * 1000)}|${Math.round(revealTime * 1000)}[c${ci}]`);

  const labels = clickTimes.map((_, i) => `[c${i}]`).join('') + `[c${ci}]`;
  const filter = `${parts.join(';')};${labels}amix=inputs=${ci + 1}:normalize=0,apad=whole_dur=${totalSec}[a]`;

  const out = join(work, 'audio.wav');
  ff([...inputs, '-filter_complex', filter, '-map', '[a]', '-t', String(totalSec),
    '-ar', '44100', '-ac', '2', '-y', out]);
  return out;
}

// ── Main ─────────────────────────────────────────────────────────────────────
for (const file of specFiles) {
  const spec = JSON.parse(readFileSync(file, 'utf8'));
  const slug = spec.slug || basename(file, '.json');
  const work = mkdtempSync('/private/tmp/seva-speedrun-');
  const outDir = join(HERE, 'out', slug);
  mkdirSync(outDir, { recursive: true });

  const calc = await captureDesmos(spec, work);

  const plan = [];
  const push = (html, seconds, tag) => plan.push({ html, seconds, tag });

  const q = question(spec);
  const typed = spec.desmos.typed;
  push(`${q}<div class="sticker">SOLVED IN<br>${spec.seconds} SECONDS</div>`, 1.9, 'hook');
  push(`${q}${panel(dataUri(calc.empty), { caret: true })}`, 0.45, 'open');
  calc.typing.forEach((f, i) => {
    push(`${q}${panel(dataUri(f), { typed: typed.slice(0, i + 1), caret: true })}`, 0.13, 'key');
  });
  push(`${q}${panel(dataUri(calc.settled), { typed })}`, 0.7, 'settle');
  push(`${q}${panel(dataUri(calc.vertex), { typed })}`, 2.4, 'vertex');
  push(
    `${question(spec, { revealCorrect: true, showTrap: true })}
     <div class="note win">${spec.takeaway}</div>`,
    3.2,
    'reveal'
  );
  push(
    `${question(spec, { revealCorrect: true, showTrap: true })}
     <div class="note">${spec.trapNote}</div>`,
    2.6,
    'trap'
  );

  const pngs = [];
  for (const [i, step] of plan.entries()) {
    const p = join(work, `out-${String(i).padStart(3, '0')}.png`);
    await shoot(step.html, p, work, i);
    pngs.push(p);
  }

  // Cue sheet from the same plan that drives the video, so audio cannot drift.
  const clickTimes = [];
  let revealTime = 0;
  let t = 0;
  for (const step of plan) {
    if (step.tag === 'key') clickTimes.push(t + 0.02);
    if (step.tag === 'reveal') revealTime = t;
    t += step.seconds;
  }
  const total = t;

  const silent = join(work, 'silent.mp4');
  const vArgs = [];
  plan.forEach((step, i) => vArgs.push('-loop', '1', '-t', String(step.seconds), '-i', pngs[i]));
  const concat = plan.map((_, i) => `[${i}:v]`).join('') + `concat=n=${plan.length}:v=1:a=0[v]`;
  ff([...vArgs, '-filter_complex', concat, '-map', '[v]', '-r', '30', '-pix_fmt', 'yuv420p',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-y', silent]);

  const audio = buildAudio(work, clickTimes, revealTime, total);
  const mp4 = join(outDir, `${slug}.mp4`);
  ff(['-i', silent, '-i', audio, '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k',
    '-shortest', '-y', mp4]);

  copyFileSync(pngs[0], join(outDir, 'cover.png'));
  if (spec.caption) writeFileSync(join(outDir, 'caption.txt'), `${spec.caption}\n`);
  console.log(
    `${slug}: ${plan.length} frames, ${total.toFixed(1)}s, ${clickTimes.length} keystrokes -> out/${slug}/${slug}.mp4`
  );
}
