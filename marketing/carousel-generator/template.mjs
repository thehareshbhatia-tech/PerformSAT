// Builds the render HTML for one carousel post — Seva design system v3 "structured editorial".
// Every slide shares one anatomy: number (top-left), chip row, title, content, callout, footer.
// One left-aligned column, consistent spacing rhythm, no rotation, unified radii.
// Tri-color roles: purple = topic/labels, orange = trap/action, lime = answer/highlight.
//
// Slide types: cover, formula, rule, trap, question, reveal, cta.
// Text fields support *italic*, **bold**, ==lime highlight==, ^^orange highlight^^,
// x^{2} superscripts; unicode math chars (² − ÷ ·) pass through.
import { BRAND as B } from './brand.mjs';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /&amp;(nbsp|thinsp|middot|times|divide|minus|plusmn|deg|radic|infin|ne|le|ge|rarr|sup[0-9]|sub[0-9]|#\d+);/g,
      '&$1;'
    );
// `...`   → unbreakable math run (never wraps mid-expression)
// \frac{a}{b} → real stacked fraction
const md = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, '<span class="nowrap">$1</span>')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="frac"><span>$1</span><span>$2</span></span>')
    .replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '<span class="sqrt"><sup class="idx">$1</sup><span class="rad">&radic;</span><span class="rdc">$2</span></span>')
    .replace(/\\sqrt\{([^}]+)\}/g, '<span class="sqrt"><span class="rad">&radic;</span><span class="rdc">$1</span></span>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/==(.+?)==/g, '<mark class="lime">$1</mark>')
    .replace(/\^\^(.+?)\^\^/g, '<mark class="orange">$1</mark>')
    .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');

// Visible length of a formula line, ignoring markup, for font sizing.
const fLen = (s) =>
  String(s)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, (_, a, b) => (a.length > b.length ? a : b))
    .replace(/\^\{([^}]+)\}/g, '$1')
    .replace(/`/g, '').length;

// `formula` may be a string or an array of lines (each on its own row).
const formulaHtml = (f) => {
  const lines = Array.isArray(f) ? f : [f];
  return `<div class="formula-group">${lines
    .map((l) => `<div class="formula${fLen(l) > 24 ? ' small' : ''}">${md(l)}</div>`)
    .join('')}</div>`;
};

const footer = `<div class="footer"><span class="wm"><span class="wm-s">S</span><span class="wm-e">E</span><span class="wm-v">V</span><span class="wm-a">A</span></span><span class="site">${B.site}</span></div>`;

const tribars = `<div class="tribars"><span></span><span></span><span></span></div>`;

const chip = (text, cls = 'purple') => `<span class="chip ${cls}">${md(text)}</span>`;

const callout = (text, label) =>
  `<div class="callout">${label ? `<span class="callout-label">${label}</span>` : ''}<span>${md(text)}</span></div>`;

const wordPills = (words) =>
  `<div class="pills">${String(words)
    .split('·')
    .map((w) => `<span class="pill">${md(w.trim())}</span>`)
    .join('')}</div>`;

const choicePills = (choices, { correct, trap, compact } = {}) =>
  `<div class="choices${compact ? ' compact' : ''}">${choices
    .map((c, i) => {
      let cls = 'choice';
      let tag = '';
      if (correct === i) {
        cls += ' correct';
        tag = `<span class="tag lime-tag">&#10003;</span>`;
      } else if (trap === i) {
        cls += ' trapped';
        tag = `<span class="tag trap-tag">THE TRAP</span>`;
      } else if (correct != null) {
        cls += ' faded';
      }
      return `<div class="${cls}"><b>${'ABCD'[i]}</b><span>${md(c)}</span>${tag}</div>`;
    })
    .join('')}</div>`;

const RENDER = {
  cover: (s) => `
    ${tribars}
    <div class="chiprow">${chip(s.eyebrow)}</div>
    ${s.stamp ? `<div class="stamp">${md(s.stamp)}</div>` : ''}
    <h1>${md(s.title)}</h1>
    ${s.badge ? callout(s.badge, 'SAVE') : ''}
    <div class="swipe">swipe &rarr;</div>`,

  formula: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}</div>
    <h2>${md(s.title)}</h2>
    <div class="card">
      ${formulaHtml(s.formula)}
      ${
        s.cases?.length
          ? `<div class="cases">${s.cases
              .map(([k, v]) => `<div class="case"><b>${md(k)}</b><span>${md(v)}</span></div>`)
              .join('')}</div>`
          : ''
      }
    </div>
    ${s.tip ? callout(s.tip, 'TIP') : ''}`,

  rule: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}</div>
    <h2>${md(s.title)}</h2>
    ${s.words ? wordPills(s.words) : ''}
    <div class="body">${md(s.body)}</div>
    ${s.tip ? callout(s.tip, 'TIP') : ''}`,

  trap: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}${chip('THE TRAP', 'orange')}</div>
    <h2>${md(s.title)}</h2>
    ${s.formula ? `<div class="card center">${formulaHtml(s.formula)}</div>` : ''}
    <div class="body">${md(s.body)}</div>
    ${s.tip ? callout(s.tip, 'TIP') : ''}`,

  question: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}</div>
    <div class="stem">${md(s.stem)}</div>
    ${choicePills(s.choices)}
    ${s.prompt ? callout(s.prompt, 'YOU') : ''}`,

  // With choices, the lime-checked pill announces the answer, so the headline slot
  // restates the QUESTION (auto-inherited from the preceding question slide) —
  // viewers land here mid-swipe and need the context back.
  reveal: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}</div>
    ${
      s.choices
        ? `${s.stem ? `<div class="reveal-stem"><span class="q">Q</span><span>${md(s.stem)}</span></div>` : ''}
           ${choicePills(s.choices, { correct: s.correct, trap: s.trap, compact: true })}`
        : `<h2>${md(s.title)}</h2>`
    }
    <div class="body">${md(s.body)}</div>
    ${s.tip ? callout(s.tip, 'WHY') : ''}`,

  // Real Desmos screenshot slide — s._shotData is a data URI injected by generate.mjs
  // from shots/<s.shot>. The white card frames the calculator UI like a device window.
  shot: (s) => `
    <div class="chiprow">${chip(s.eyebrow)}${s.step ? chip(s.step, 'orange') : ''}</div>
    <h2>${md(s.title)}</h2>
    <div class="shot-card"><img src="${s._shotData}"></div>
    ${s.tip ? callout(s.tip, 'TIP') : ''}`,

  cta: (s) => `
    ${tribars}
    <div class="chiprow">${chip(s.eyebrow)}</div>
    <h2 class="cta-title">${md(s.title)}</h2>
    ${
      s.points?.length
        ? `<div class="cta-points">${s.points
            .map((p) => `<div class="cta-point"><span class="chk">&#10003;</span><span>${md(p)}</span></div>`)
            .join('')}</div>`
        : ''
    }
    <div class="cta-btn">${s.button ? md(s.button) : 'Start your free trial'}<span class="cta-site">&rarr; link in bio</span></div>
    <div class="cta-note">${
      s.keyword
        ? `Comment &quot;${esc(s.keyword)}&quot; and we'll DM you the link`
        : md(s.note || '3-day free trial &middot; cancel anytime &middot; ' + B.site)
    }</div>`,
};

export function buildHtml(post) {
  const total = post.slides.length;
  // Reveal slides inherit the question stem from the nearest preceding question slide.
  let lastStem = null;
  for (const s of post.slides) {
    if (s.type === 'question') lastStem = s.stem;
    if (s.type === 'reveal' && s.choices && !s.stem && lastStem) s.stem = lastStem;
  }
  const slides = post.slides
    .map((s, i) => {
      const render = RENDER[s.type];
      if (!render) throw new Error(`unknown slide type "${s.type}" (slide ${i + 1})`);
      const theme = s.theme || 'navy';
      const num =
        s.type === 'cover'
          ? ''
          : `<div class="num">${String(i + 1).padStart(2, '0')}<span>&thinsp;/&thinsp;${String(total).padStart(2, '0')}</span></div>`;
      return `<div class="slide ${theme} is-${s.type}" id="s${i + 1}">${num}<div class="col">${render(s)}</div>${footer}</div>`;
    })
    .join('\n');

  return `<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${B.fontsHref}" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#222; display:flex; flex-direction:column; gap:40px; padding:40px; }

  .slide {
    width:${B.width}px; height:${B.height}px; position:relative; overflow:hidden;
    display:flex; flex-direction:column; justify-content:flex-start;
    font-family:${B.fontBody}, sans-serif; padding:210px 96px 170px;
  }
  .is-cover { justify-content:center; padding-top:140px; }
  .is-reveal { padding-top:180px; }
  .is-cta { padding-top:190px; }
  .is-question { padding-top:180px; }
  .is-question .chiprow { margin-bottom:36px; }
  .col { display:flex; flex-direction:column; align-items:flex-start; text-align:left; width:100%; }
  .navy {
    background:
      linear-gradient(rgba(250,247,242,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250,247,242,.04) 1px, transparent 1px),
      ${B.navy};
    background-size: 56px 56px, 56px 56px, 100% 100%;
    color:${B.cream};
  }
  .cream {
    background:
      linear-gradient(rgba(30,42,58,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30,42,58,.05) 1px, transparent 1px),
      ${B.cream};
    background-size: 56px 56px, 56px 56px, 100% 100%;
    color:${B.navy};
  }

  /* ---- fixed chrome ---- */
  .num {
    position:absolute; top:92px; left:96px;
    font-family:${B.fontDisplay}; font-weight:800; font-size:36px; color:${B.logoLime};
  }
  .num span { color:rgba(250,247,242,.4); font-size:28px; font-weight:700; }
  .tribars { position:absolute; top:92px; right:96px; display:flex; flex-direction:column; gap:10px; }
  .tribars span { width:96px; height:20px; border-radius:10px; }
  .tribars span:nth-child(1) { background:${B.logoOrange}; }
  .tribars span:nth-child(2) { background:${B.logoPurple}; }
  .tribars span:nth-child(3) { background:${B.logoLime}; }
  .footer {
    position:absolute; bottom:64px; left:96px; right:96px;
    display:flex; align-items:baseline; justify-content:space-between;
  }
  .wm { font-family:${B.fontLogo}, cursive; font-weight:800; font-size:44px; letter-spacing:.02em; }
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
  .site { font-size:34px; font-weight:600; letter-spacing:.06em; color:rgba(250,247,242,.5); }
  .cream .site { color:rgba(30,42,58,.45); }

  /* ---- chips ---- */
  .chiprow { display:flex; gap:16px; margin-bottom:44px; }
  .chip {
    display:inline-block; font-family:${B.fontDisplay}; font-weight:700; font-size:30px;
    letter-spacing:.12em; text-transform:uppercase; color:#fff;
    padding:12px 30px; border-radius:999px;
  }
  .chip.purple { background:${B.logoPurple}; }
  .chip.orange { background:${B.logoOrange}; }

  /* ---- cover date-stamp (the test-date plate; distinct from chips and marks) ---- */
  .stamp {
    display:inline-block; font-family:${B.fontDisplay}; font-weight:800; font-size:48px;
    letter-spacing:.08em; text-transform:uppercase;
    background:${B.logoLime}; color:${B.navy};
    padding:20px 38px; border-radius:14px; margin-bottom:44px;
    box-shadow:0 12px 32px rgba(0,0,0,.3);
  }

  /* ---- type ---- */
  h1 { font-family:${B.fontDisplay}; font-weight:800; font-size:96px; line-height:1.1; margin-bottom:56px; }
  h2 { font-family:${B.fontDisplay}; font-weight:800; font-size:64px; line-height:1.15; margin-bottom:36px; }
  .cta-title { font-size:68px; }
  mark { border-radius:12px; padding:0 16px; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
  mark.lime { background:${B.logoLime}; color:${B.navy}; }
  mark.orange { background:${B.logoOrange}; color:#fff; }
  sup { font-size:.6em; }
  .body { font-size:42px; line-height:1.55; font-weight:400; max-width:880px; margin-bottom:8px; }
  .is-reveal .body { font-size:38px; line-height:1.45; }
  .stem { font-size:48px; line-height:1.45; font-weight:700; max-width:880px; margin-bottom:34px; }
  .reveal-stem {
    display:flex; align-items:baseline; gap:24px; width:100%;
    background:rgba(255,255,255,.07); border-left:12px solid ${B.logoPurple};
    border-radius:14px; padding:20px 30px; margin-bottom:28px;
    font-size:36px; line-height:1.4; font-weight:700; color:${B.cream};
  }
  .reveal-stem .q {
    font-family:${B.fontDisplay}; font-weight:800; font-size:32px;
    color:${B.logoPurple}; flex:none;
  }
  .cream .reveal-stem { background:rgba(30,42,58,.06); color:${B.navy}; }

  /* ---- cards ---- */
  .card {
    background:#fff; color:${B.navy}; border-radius:24px; padding:44px 52px;
    width:100%; box-shadow:0 16px 44px rgba(0,0,0,.28); margin-bottom:36px;
  }
  .card.center { text-align:center; }
  .formula-group { display:flex; flex-direction:column; gap:28px; align-items:center; width:100%; }
  .formula { font-style:italic; font-weight:600; font-size:60px; line-height:1.3; text-align:center; }
  .formula.small { font-size:50px; }
  .nowrap { white-space:nowrap; }
  .frac {
    display:inline-flex; flex-direction:column; vertical-align:middle;
    margin:0 10px; font-size:.78em; line-height:1.15; text-align:center;
  }
  .frac > span:first-child { border-bottom:4px solid currentColor; padding:0 14px 6px; }
  .frac > span:last-child { padding-top:6px; }
  .sqrt { display:inline-flex; align-items:flex-start; white-space:nowrap; position:relative; }
  .sqrt:has(.idx) { padding-left:0.14em; }
  .sqrt sup.idx {
    position:absolute; left:-0.08em; top:0.16em;
    font-size:.38em; line-height:1; vertical-align:baseline;
  }
  .sqrt .rad { line-height:1.05; }
  .sqrt .rdc { line-height:1.05; border-top:4px solid currentColor; padding:0.1em 0.12em 0 0.02em; }
  .cases { margin-top:32px; border-top:2px solid rgba(30,42,58,.12); padding-top:26px; }
  .case { display:flex; align-items:baseline; gap:26px; font-size:38px; line-height:1.4; padding:7px 0; }
  .case b { color:${B.logoPurple}; font-weight:800; font-family:${B.fontDisplay}; white-space:nowrap; }

  /* ---- pills ---- */
  .pills { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:40px; }
  .pill {
    background:${B.logoLime}; color:${B.navy}; font-weight:800; font-size:38px;
    font-family:${B.fontDisplay}; padding:16px 34px; border-radius:999px;
  }

  /* ---- answer choices ---- */
  .choices { display:flex; flex-direction:column; gap:16px; width:100%; margin-bottom:10px; }
  .choices.compact { gap:14px; margin-bottom:34px; }
  .choice {
    display:flex; align-items:center; gap:28px; position:relative;
    background:#fff; color:${B.navy}; border-radius:20px; padding:20px 34px;
    font-size:40px; font-weight:600; box-shadow:0 10px 28px rgba(0,0,0,.22);
  }
  .choices.compact .choice { padding:16px 30px; font-size:36px; border-radius:16px; }
  .choice b {
    font-family:${B.fontDisplay}; font-weight:800; color:#fff; background:${B.logoPurple};
    width:58px; height:58px; border-radius:50%; flex:none;
    display:flex; align-items:center; justify-content:center; font-size:34px;
  }
  .choices.compact .choice b { width:48px; height:48px; font-size:30px; }
  .choice.correct { background:${B.logoLime}; }
  .choice.correct b { background:${B.navy}; }
  .choice.trapped { outline:5px solid ${B.logoOrange}; outline-offset:-5px; }
  .choice.faded { opacity:.4; }
  .tag { position:absolute; right:24px; top:50%; transform:translateY(-50%); font-family:${B.fontDisplay}; font-weight:800; }
  .trap-tag { background:${B.logoOrange}; color:#fff; font-size:24px; padding:8px 18px; border-radius:10px; }
  .lime-tag { color:${B.navy}; font-size:40px; }

  /* ---- callout (one style for tips, badges, prompts) ---- */
  .callout {
    display:flex; align-items:baseline; gap:24px; width:100%;
    background:#fff; color:${B.navy}; border-left:14px solid ${B.logoOrange};
    border-radius:16px; padding:22px 34px; margin-top:28px;
    font-size:34px; line-height:1.45; font-weight:600;
    box-shadow:0 10px 28px rgba(0,0,0,.22);
  }
  .callout-label {
    font-family:${B.fontDisplay}; font-weight:800; font-size:28px; letter-spacing:.1em;
    color:${B.logoOrange}; flex:none;
  }

  /* ---- desmos shot ---- */
  .shot-card {
    background:#fff; border-radius:24px; padding:16px; width:100%;
    box-shadow:0 16px 44px rgba(0,0,0,.28); margin-bottom:8px;
  }
  .shot-card img { width:100%; display:block; border-radius:14px; }

  .swipe {
    position:absolute; bottom:150px; right:96px;
    font-family:${B.fontDisplay}; font-weight:800; font-size:38px; color:${B.logoLime};
  }

  /* ---- CTA ---- */
  .cta-points { display:flex; flex-direction:column; gap:24px; margin-bottom:52px; }
  .cta-point { display:flex; gap:26px; align-items:flex-start; font-size:42px; line-height:1.4; font-weight:600; max-width:880px; }
  .cta-point .chk {
    flex:none; width:54px; height:54px; border-radius:50%; margin-top:2px;
    background:${B.logoLime}; color:${B.navy};
    display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:800;
  }
  .cta-btn {
    display:flex; align-items:center; justify-content:space-between; width:100%;
    background:${B.logoLime}; color:${B.navy};
    font-family:${B.fontDisplay}; font-weight:800; font-size:44px; line-height:1.2;
    padding:30px 44px; border-radius:20px; margin-bottom:26px;
    white-space:nowrap; box-shadow:0 16px 44px rgba(0,0,0,.35);
  }
  .cta-site { font-weight:800; opacity:.75; font-size:40px; }
  .cta-note { font-size:34px; font-weight:600; color:rgba(250,247,242,.6); }
</style>
${slides}`;
}
