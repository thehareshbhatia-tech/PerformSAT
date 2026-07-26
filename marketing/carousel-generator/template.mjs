// Builds the render HTML for one carousel post — Seva design system v4 "marked-up artifact".
//
// The v3 "structured editorial" language (pill chips, white plates, checkmark CTAs)
// read as machine-made at a glance — because every slide was the same scaffold with
// text swapped. v4 inverts it: every slide is built around a REAL-looking artifact —
// a Bluebook-style question screenshot, a Desmos screenshot — and the only loud layer
// is what a tutor's marker would add: one rough orange ring, one handwritten note.
//
// Rules of the language:
//   - flat navy ground, no grid texture, no pills, no plates, no checkmark lists
//   - kickers are small letterspaced caps, muted
//   - ONE handwritten element (Caveat) and/or ONE rough marker stroke per slide, orange
//   - question/reveal slides render an authentic Bluebook card: grey header bar,
//     black number box, Mark for Review flag, ABC strike tool, serif stems (Tinos)
//   - Desmos shots sit directly on the ground as screenshots — no white card frame;
//     coordinate readouts become marker rings + handwritten labels, not plates
//
// Slide types: cover, formula, rule, trap, question, reveal, shot, cta.
// Text fields support *italic*, **bold**, ==marker underline==, ^^orange^^,
// x^{2} superscripts, `nowrap`, \frac{a}{b}, \sqrt{x}; newlines become line breaks.
import katex from 'katex';
import { BRAND as B } from './brand.mjs';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /&amp;(nbsp|thinsp|middot|times|divide|minus|plusmn|deg|radic|infin|ne|le|ge|rarr|larr|mdash|ndash|hellip|sup[0-9]|sub[0-9]|#\d+);/g,
      '&$1;'
    );

// ── seeded roughness ─────────────────────────────────────────────────────────
// Marker strokes must wobble, but the same post must render the same PNG twice —
// so the wobble is seeded per use-site, never Math.random().
const seedFrom = (s) =>
  [...String(s)].reduce((h, c) => (Math.imul(h ^ c.charCodeAt(0), 2654435761) >>> 0), 0x9e3779b9);
const mulberry32 = (a) => () => {
  a |= 0; a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Smooth path through points (quadratic midpoint trick) — reads as one marker pull.
function smoothPath(pts, close = false) {
  if (pts.length < 3) return '';
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  let d = `M ${mid(pts[0], pts[1]).map((n) => n.toFixed(1)).join(' ')}`;
  const n = pts.length;
  const last = close ? n + 1 : n - 1;
  for (let i = 1; i < last; i++) {
    const p = pts[i % n];
    const m = mid(p, pts[(i + 1) % n]);
    d += ` Q ${p[0].toFixed(1)} ${p[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`;
  }
  return d;
}

// A hand-pulled ellipse in a 200×80 box: two slightly different passes, like a
// marker circling something without lifting cleanly.
function roughRingPaths(seed) {
  const rand = mulberry32(seedFrom(seed));
  // The ellipse hugs the box edges (ry near half-height) so whatever it circles
  // stays readable inside it — wobble only pushes outward, never through content.
  const pass = (grow) => {
    const pts = [];
    const n = 12;
    const start = rand() * Math.PI * 2;
    for (let i = 0; i < n; i++) {
      const a = start + (i / n) * Math.PI * 2;
      const rx = 90 * grow + rand() * 5;
      const ry = 33 * grow + rand() * 4;
      pts.push([100 + Math.cos(a) * rx, 40 + Math.sin(a) * ry]);
    }
    return smoothPath(pts, true);
  };
  return [pass(1), pass(1.03 + rand() * 0.03)];
}

const ring = (seed, cls = '') => {
  const [p1, p2] = roughRingPaths(seed);
  return `<svg class="ring ${cls}" viewBox="0 0 200 80" preserveAspectRatio="none">
    <path d="${p1}" vector-effect="non-scaling-stroke"/>
    <path d="${p2}" vector-effect="non-scaling-stroke" opacity=".6"/>
  </svg>`;
};

// A wavy marker underline in a 300×22 box.
function roughUnderline(seed) {
  const rand = mulberry32(seedFrom(seed));
  const line = (y0) => {
    const pts = [];
    for (let i = 0; i <= 6; i++) pts.push([4 + (i / 6) * 292, y0 + (rand() - 0.5) * 7]);
    return smoothPath(pts);
  };
  return `<svg class="hw-u-svg" viewBox="0 0 300 22" preserveAspectRatio="none">
    <path d="${line(8)}" vector-effect="non-scaling-stroke"/>
    <path d="${line(15)}" vector-effect="non-scaling-stroke" opacity=".55"/>
  </svg>`;
}

// A small rough arrow in a 120×60 box, pointing left toward what the note names.
function roughArrow(seed) {
  const rand = mulberry32(seedFrom(seed));
  const w = (n) => n + (rand() - 0.5) * 8;
  const shaft = smoothPath([[112, w(14)], [70, w(26)], [30, w(38)], [8, w(46)]]);
  return `<svg class="hw-arrow" viewBox="0 0 120 60">
    <path d="${shaft}" vector-effect="non-scaling-stroke"/>
    <path d="M ${w(26)} ${w(30)} L 8 46 L ${w(30)} ${w(50)}" vector-effect="non-scaling-stroke"/>
  </svg>`;
}

// ── inline markup ────────────────────────────────────────────────────────────
// $...$ runs are real LaTeX, typeset server-side by KaTeX at build time (the
// headless renderer doesn't reliably run page scripts). They're parked before
// the other replacements run so ^{}, *, and \frac inside math reach KaTeX
// untouched — note math is pulled from the RAW string, before esc().
let mdSeq = 0; // varies underline wobble between uses within one post
const md = (s) => {
  const math = [];
  const parked = String(s ?? '').replace(/\$([^$]+)\$/g, (_, m) => {
    math.push(katex.renderToString(m, { throwOnError: false }));
    return `\u0000${math.length - 1}\u0000`;
  });
  return mdBody(esc(parked)).replace(/\u0000(\d+)\u0000/g, (_, i) => `<span class="tex">${math[i]}</span>`);
};
const mdBody = (s) =>
  s
    .replace(/\n/g, '<br>')
    .replace(/`([^`]+)`/g, '<span class="nowrap">$1</span>')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="frac"><span>$1</span><span>$2</span></span>')
    .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '<span class="sqrt"><sup class="idx">$1</sup><span class="rad">&radic;</span><span class="rdc">$2</span></span>')
    .replace(/\\sqrt\{([^}]+)\}/g, '<span class="sqrt"><span class="rad">&radic;</span><span class="rdc">$1</span></span>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/==(.+?)==/g, (_, t) => `<span class="hw-u">${t}${roughUnderline(`u${mdSeq++}${t}`)}</span>`)
    .replace(/\^\^(.+?)\^\^/g, '<span class="accent">$1</span>')
    .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');

const footer = `<div class="footer"><span class="wm"><span class="wm-s">S</span><span class="wm-e">E</span><span class="wm-v">V</span><span class="wm-a">A</span></span><span class="site">${B.site}</span></div>`;

const kicker = (text) => (text ? `<div class="kick">${md(text)}</div>` : '');

// Handwritten margin line — the one loud element a slide gets.
const hw = (text, cls = '') => (text ? `<div class="hw ${cls}">${md(text)}</div>` : '');

// ── the Bluebook card ────────────────────────────────────────────────────────
const flagSvg = `<svg viewBox="0 0 24 24" class="bb-flag"><path d="M6 3v18M6 4h11l-2.5 4L17 12H6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
const abcSvg = `<svg viewBox="0 0 64 34" class="bb-abc"><text x="4" y="24" font-size="19" font-weight="600" font-family="Arial" fill="#333" letter-spacing="1">ABC</text><line x1="4" y1="27" x2="58" y2="7" stroke="#333" stroke-width="2"/></svg>`;

// Authentic-feel Bluebook question card. `opts.correct` gets a marker ring,
// `opts.trap` gets a handwritten margin note (`opts.trapNote`), rest fade slightly.
function bluebookCard(s, { compact = false, correct = null, trap = null, trapNote = null, seed = 'q' } = {}) {
  const stemLen = String(s.stem || '').length;
  const stemCls = stemLen > 150 ? ' long' : '';
  const choices = (s.choices || [])
    .map((c, i) => {
      let cls = 'bb-choice';
      let note = '';
      let ringSvg = '';
      if (correct === i) {
        cls += ' is-correct';
        ringSvg = ring(`${seed}-ring${i}`, 'ring-choice');
      } else if (trap === i && trapNote) {
        cls += ' is-trap';
        note = `<span class="trap-note">${roughArrow(`${seed}-arr`)}<span>${md(trapNote)}</span></span>`;
      } else if (correct != null) {
        cls += ' is-faded';
      }
      // The ring wraps only the letter+answer cluster — a tutor circles the pick,
      // not the whole empty row.
      return `<div class="${cls}"><span class="bb-pick"><span class="bb-letter">${'ABCD'[i]}</span><span class="bb-choice-text">${md(c)}</span>${ringSvg}</span>${note}</div>`;
    })
    .join('');
  return `<div class="bb-card${compact ? ' compact' : ''}">
    <div class="bb-head">
      <span class="bb-num">${s.qnum || '13'}</span>
      ${flagSvg}<span class="bb-mark">Mark for Review</span>
      ${abcSvg}
    </div>
    <div class="bb-body">
      <div class="bb-stem${stemCls}">${md(s.stem)}</div>
      <div class="bb-choices">${choices}</div>
    </div>
  </div>`;
}

// ── slide renderers ──────────────────────────────────────────────────────────
const RENDER = {
  cover: (s, i, post) => `
    ${kicker(s.eyebrow)}
    <h1>${md(s.title)}</h1>
    ${hw(s.hand, 'hw-cover')}
    ${s._artData ? `<div class="cover-art"><img src="${s._artData}"></div>` : ''}
    <div class="swipe">swipe &rarr;</div>`,

  question: (s, i, post) => `
    ${kicker(s.eyebrow)}
    ${bluebookCard(s, { seed: `${post.slug}-q${i}` })}
    ${hw(s.hand || s.prompt, 'hw-below')}`,

  reveal: (s, i, post) => `
    ${kicker(s.eyebrow || 'The answer')}
    ${s.choices
      ? bluebookCard(s, {
          compact: true,
          correct: s.correct,
          trap: s.trap,
          trapNote: s.trapNote,
          seed: `${post.slug}-r${i}`,
        })
      : `<h2>${md(s.title)}</h2>`}
    <div class="body reveal-body">${md(s.body)}</div>`,

  // Desmos screenshot straight on the ground — a screenshot, not a framed poster
  // element. Readout coordinates (from desmos-shot.mjs) become marker rings with
  // handwritten labels, the way a tutor circles the point that matters.
  shot: (s, i, post) => `
    ${kicker(s.eyebrow)}
    <h2 class="shot-title">${md(s.title)}</h2>
    ${s.question ? `<div class="shot-q">${md(s.question)}</div>` : ''}
    <div class="shot-figure">
      <img src="${s._shotData}">
      ${(s._readouts || [])
        .map(
          (r, j) => `<span class="readout place-${r.place}" style="left:${r.leftPct}%;top:${r.topPct}%">
            ${ring(`${post.slug}-s${i}-${j}`, 'ring-point')}
            <span class="readout-label">${esc(r.text)}</span>
          </span>`
        )
        .join('')}
    </div>
    ${s.caption || s.tip ? `<div class="caption">${md(s.caption || s.tip)}</div>` : ''}
    ${hw(s.hand, 'hw-below')}`,

  formula: (s) => `
    ${kicker(s.eyebrow)}
    <h2>${md(s.title)}</h2>
    <div class="formula-group">${(Array.isArray(s.formula) ? s.formula : [s.formula])
      .map((l) => `<div class="formula">${md(l)}</div>`)
      .join('')}</div>
    ${s.cases?.length
      ? `<div class="cases">${s.cases
          .map(([k, v]) => `<div class="case"><b>${md(k)}</b><span>${md(v)}</span></div>`)
          .join('')}</div>`
      : ''}
    ${s.caption || s.tip ? `<div class="caption">${md(s.caption || s.tip)}</div>` : ''}`,

  rule: (s) => `
    ${kicker(s.eyebrow)}
    <h2>${md(s.title)}</h2>
    <div class="body">${md(s.body)}</div>
    ${hw(s.hand, 'hw-below')}
    ${s.caption || s.tip ? `<div class="caption">${md(s.caption || s.tip)}</div>` : ''}`,

  trap: (s) => `
    ${kicker(s.eyebrow ? `${s.eyebrow} &middot; the trap` : 'the trap')}
    <h2>${md(s.title)}</h2>
    ${s.formula ? `<div class="formula-group">${(Array.isArray(s.formula) ? s.formula : [s.formula]).map((l) => `<div class="formula">${md(l)}</div>`).join('')}</div>` : ''}
    <div class="body">${md(s.body)}</div>
    ${s.caption || s.tip ? `<div class="caption">${md(s.caption || s.tip)}</div>` : ''}`,

  cta: (s) => `
    ${kicker(s.eyebrow)}
    <h2 class="cta-title">${md(s.title)}</h2>
    ${s.body ? `<div class="body">${md(s.body)}</div>` : ''}
    ${hw(s.hand || 'free 3-day trial — link in bio', 'hw-cta')}
    ${s.note ? `<div class="cta-note">${md(s.note)}</div>` : ''}`,
};

export function buildHtml(post) {
  mdSeq = seedFrom(post.slug || 'post') % 997;
  const total = post.slides.length;
  // Reveal slides inherit the question stem + number from the nearest preceding
  // question slide — viewers land mid-swipe and need the context back.
  let lastStem = null;
  let lastQnum = null;
  for (const s of post.slides) {
    if (s.type === 'question') { lastStem = s.stem; lastQnum = s.qnum; }
    if (s.type === 'reveal' && s.choices) {
      if (!s.stem && lastStem) s.stem = lastStem;
      if (!s.qnum && lastQnum) s.qnum = lastQnum;
    }
  }
  const slides = post.slides
    .map((s, i) => {
      const render = RENDER[s.type];
      if (!render) throw new Error(`unknown slide type "${s.type}" (slide ${i + 1})`);
      const num =
        s.type === 'cover'
          ? `<div class="tribars"><span></span><span></span><span></span></div>`
          : `<div class="num">${i + 1}<span> / ${total}</span></div>`;
      return `<div class="slide is-${s.type}" id="s${i + 1}">${num}<div class="col">${render(s, i, post)}</div>${footer}</div>`;
    })
    .join('\n');

  return `<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${B.fontsHref}" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Tinos:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#222; display:flex; flex-direction:column; gap:40px; padding:40px; }

  .slide {
    width:${B.width}px; height:${B.height}px; position:relative; overflow:hidden;
    display:flex; flex-direction:column; justify-content:flex-start;
    font-family:${B.fontBody}, sans-serif; padding:150px 88px 150px;
    background:${B.navy}; color:${B.cream};
  }
  .is-cover { justify-content:center; padding-top:120px; }
  .is-cta { justify-content:center; padding-top:120px; }
  .col { display:flex; flex-direction:column; align-items:flex-start; text-align:left; width:100%; position:relative; }

  /* ---- quiet chrome ---- */
  .num {
    position:absolute; top:70px; left:88px;
    font-family:${B.fontBody}; font-weight:700; font-size:28px; color:rgba(250,247,242,.55);
  }
  .num span { color:rgba(250,247,242,.3); font-size:28px; }
  .tribars { position:absolute; top:74px; right:88px; display:flex; flex-direction:column; gap:7px; }
  .tribars span { width:64px; height:13px; border-radius:7px; }
  .tribars span:nth-child(1) { background:${B.logoOrange}; }
  .tribars span:nth-child(2) { background:${B.logoPurple}; }
  .tribars span:nth-child(3) { background:${B.logoLime}; }
  .footer {
    position:absolute; bottom:56px; left:88px; right:88px;
    display:flex; align-items:baseline; justify-content:space-between;
  }
  .wm { font-family:${B.fontLogo}, cursive; font-weight:800; font-size:38px; letter-spacing:.02em; }
  .wm-s {
    background:linear-gradient(180deg,
      ${B.logoOrange} 0%, ${B.logoOrange} 38%,
      ${B.logoPurple} 38%, ${B.logoPurple} 66%,
      ${B.logoLime} 66%, ${B.logoLime} 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .wm-e { color:${B.logoOrange}; }
  .wm-v { color:${B.logoPurple}; }
  .wm-a { color:${B.logoLime}; }
  .site { font-size:28px; font-weight:600; letter-spacing:.05em; color:rgba(250,247,242,.4); }

  .kick {
    font-family:${B.fontBody}; font-weight:700; font-size:27px; letter-spacing:.22em;
    text-transform:uppercase; color:rgba(250,247,242,.5); margin-bottom:34px;
  }

  /* ---- type ---- */
  h1 { font-family:${B.fontDisplay}; font-weight:800; font-size:92px; line-height:1.12; margin-bottom:40px; }
  h2 { font-family:${B.fontDisplay}; font-weight:800; font-size:58px; line-height:1.16; margin-bottom:32px; }
  .shot-title { font-size:52px; margin-bottom:36px; }
  .cta-title { font-size:66px; max-width:860px; }
  sup { font-size:.6em; }
  .accent { color:${B.orange}; }
  .katex { font-size:1.06em; }
  .tex { white-space:nowrap; }
  .body { font-size:40px; line-height:1.55; font-weight:400; max-width:880px; color:rgba(250,247,242,.92); }
  .reveal-body { margin-top:36px; font-size:36px; line-height:1.5; }
  .caption { margin-top:30px; font-size:34px; line-height:1.5; max-width:880px; color:rgba(250,247,242,.75); }
  .nowrap { white-space:nowrap; }
  .frac {
    display:inline-flex; flex-direction:column; vertical-align:middle;
    margin:0 10px; font-size:.78em; line-height:1.15; text-align:center;
  }
  .frac > span:first-child { border-bottom:3px solid currentColor; padding:0 12px 5px; }
  .frac > span:last-child { padding-top:5px; }
  .sqrt { display:inline-flex; align-items:flex-start; white-space:nowrap; position:relative; }
  .sqrt sup.idx { position:absolute; left:-0.08em; top:0.16em; font-size:.38em; line-height:1; }
  .sqrt .rad { line-height:1.05; }
  .sqrt .rdc { line-height:1.05; border-top:3px solid currentColor; padding:0.1em 0.12em 0 0.02em; }

  /* ---- handwriting + marker ---- */
  .hw {
    font-family:'Caveat', cursive; font-weight:700; color:${B.orange};
    font-size:52px; line-height:1.15; transform:rotate(-2.2deg);
  }
  .hw-cover { margin-top:6px; font-size:56px; }
  .hw-below { margin-top:34px; align-self:flex-end; margin-right:8px; }
  .hw-cta { margin-top:44px; font-size:58px; }
  .hw-u { position:relative; white-space:nowrap; }
  .hw-u-svg {
    position:absolute; left:-2%; right:-2%; bottom:-0.16em; width:104%; height:.22em;
    fill:none; stroke:${B.orange}; stroke-width:5px; stroke-linecap:round;
  }
  .ring { position:absolute; overflow:visible; fill:none; stroke:${B.orange}; stroke-width:6px; stroke-linecap:round; }
  .hw-arrow { width:64px; height:34px; fill:none; stroke:${B.orange}; stroke-width:5px; stroke-linecap:round; stroke-linejoin:round; flex:none; }

  /* ---- Bluebook card ---- */
  .bb-card {
    width:100%; background:#fff; border-radius:10px; overflow:visible;
    box-shadow:0 30px 70px rgba(0,0,0,.45); color:#141414; position:relative;
  }
  .bb-head {
    display:flex; align-items:center; gap:16px;
    background:#f1f1ef; border-bottom:1px solid #d8d8d4;
    border-radius:10px 10px 0 0; padding:16px 26px;
  }
  .bb-num {
    background:#1a1a1a; color:#fff; font-family:Arial, sans-serif; font-weight:700;
    font-size:28px; width:50px; height:50px; display:flex; align-items:center; justify-content:center;
  }
  .bb-flag { width:30px; height:30px; color:#444; margin-left:6px; }
  .bb-mark { font-family:Arial, sans-serif; font-size:24px; color:#444; }
  .bb-abc { width:64px; height:34px; margin-left:auto; }
  .bb-body { padding:38px 44px 42px; }
  .bb-stem { font-family:'Tinos', Georgia, serif; font-size:36px; line-height:1.55; margin-bottom:34px; }
  .bb-stem.long { font-size:32px; }
  .bb-card.compact .bb-stem { font-size:30px; line-height:1.45; margin-bottom:26px; }
  .bb-choices { display:flex; flex-direction:column; gap:16px; }
  .bb-card.compact .bb-choices { gap:13px; }
  .bb-choice {
    position:relative; display:flex; align-items:center;
    border:1.5px solid #888; border-radius:8px; padding:16px 24px;
    font-family:'Tinos', Georgia, serif; font-size:33px;
  }
  .bb-card.compact .bb-choice { padding:11px 22px; font-size:30px; }
  .bb-pick { position:relative; display:flex; align-items:center; gap:22px; }
  .bb-letter {
    font-family:Arial, sans-serif; font-weight:600; font-size:24px; color:#141414;
    border:2px solid #141414; border-radius:50%; width:44px; height:44px; flex:none;
    display:flex; align-items:center; justify-content:center;
  }
  .bb-card.compact .bb-letter { width:38px; height:38px; font-size:21px; }
  .bb-choice.is-faded { opacity:.45; }
  .bb-pick .ring-choice { left:-30px; top:-16px; width:calc(100% + 60px); height:calc(100% + 32px); }
  .trap-note {
    position:absolute; right:18px; top:50%; transform:translateY(-50%) rotate(-2.5deg);
    display:flex; align-items:center; gap:10px;
    font-family:'Caveat', cursive; font-weight:700; font-size:36px; color:${B.orange};
    white-space:nowrap;
  }

  /* ---- Desmos shot ---- */
  /* The question the screenshot answers, styled as a Bluebook fragment so the
     viewer sees test material first, then the calculator move that solves it. */
  .shot-q {
    width:100%; background:#fff; color:#141414;
    font-family:'Tinos', Georgia, serif; font-size:31px; line-height:1.45;
    border:1px solid rgba(0,0,0,.25); border-radius:8px; padding:20px 30px;
    margin-bottom:22px; box-shadow:0 14px 34px rgba(0,0,0,.3);
  }
  .shot-figure { position:relative; width:100%; }
  .shot-figure img {
    width:100%; display:block; border-radius:10px;
    border:1px solid rgba(0,0,0,.35); box-shadow:0 30px 70px rgba(0,0,0,.45);
  }
  .readout { position:absolute; width:0; height:0; }
  .readout .ring-point {
    left:-62px; top:-40px; width:124px; height:80px;
  }
  .readout-label {
    position:absolute; white-space:nowrap;
    font-family:'Caveat', cursive; font-weight:700; font-size:40px; color:${B.orange};
  }
  .place-right .readout-label { left:72px; top:-26px; transform:rotate(-2deg); }
  .place-left .readout-label { right:72px; top:-26px; transform:rotate(2deg); }
  .place-above .readout-label { left:-40px; bottom:48px; transform:rotate(-2.5deg); }
  .place-below .readout-label { left:-40px; top:48px; transform:rotate(-2deg); }

  /* ---- cover ---- */
  .cover-art {
    margin-top:52px; width:88%; align-self:center;
    transform:rotate(-2deg); border-radius:10px; overflow:hidden;
    border:1px solid rgba(0,0,0,.35); box-shadow:0 30px 70px rgba(0,0,0,.5);
  }
  .cover-art img { width:100%; display:block; }
  .is-cover .col { position:static; }
  .swipe {
    position:absolute; bottom:126px; right:88px;
    font-weight:600; font-size:30px; color:rgba(250,247,242,.45);
  }

  /* ---- formula / cases ---- */
  .formula-group { display:flex; flex-direction:column; gap:26px; width:100%; margin:14px 0 8px; }
  .formula { font-family:'Tinos', Georgia, serif; font-style:italic; font-size:58px; line-height:1.3; color:${B.cream}; }
  .cases { margin-top:34px; border-top:1px solid rgba(250,247,242,.18); padding-top:26px; width:100%; }
  .case { display:flex; align-items:baseline; gap:26px; font-size:36px; line-height:1.45; padding:7px 0; }
  .case b { color:${B.logoPurple}; font-weight:800; font-family:${B.fontDisplay}; white-space:nowrap; }

  /* ---- CTA ---- */
  .cta-note { margin-top:30px; font-size:32px; font-weight:600; color:rgba(250,247,242,.45); }
</style>
${slides}`;
}
