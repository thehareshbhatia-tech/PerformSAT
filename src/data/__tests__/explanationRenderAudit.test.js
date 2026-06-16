/* eslint-disable */
/**
 * explanationRenderAudit.test.js — GROUND-TRUTH render audit (not a real test).
 *
 * Pushes every explanation / stem / choice in the corpus through a FAITHFUL
 * copy of the production render pipeline (preprocessMath → MathText steps →
 * KaTeX) with throwOnError:true so we capture the failures the live app hides
 * behind throwOnError:false. Also runs static detectors for SILENT mis-renders
 * that KaTeX accepts but draws wrong (x^12, V_new, unicode inside $...$, odd $).
 *
 * Run:  CI=true npx react-scripts test --watchAll=false \
 *         --testPathPattern=explanationRenderAudit
 * Output: scripts/audit-output/explanation-render-audit.{json,md}
 *
 * This file is disposable scaffolding for the explanation-quality batch.
 */
const fs = require('fs');
const path = require('path');
const katex = require('katex');

// ── Corpus imports (babel-jest transpiles ESM → CJS) ───────────────────────
const mathBank = require('../questions/bank');
const rwBank = require('../questions/rwBank');
const practiceTests = require('../practiceTests');
let topicQuestions = {};
try { topicQuestions = require('../questions'); } catch (e) { /* optional */ }

// ════════════════════════════════════════════════════════════════════════════
// VERBATIM COPY of the preprocessor from SolutionExplanation.jsx (lines 9-22).
// Copied (not imported) because the source functions are module-private. If the
// source changes, this audit drifts — acceptable for a one-shot audit.
// ════════════════════════════════════════════════════════════════════════════
function grabLeft(s,p){let i=p-1;while(i>=0&&s[i]===' ')i--;if(i<0)return{start:p,text:''};if(s[i]==='}'){let d=1;i--;while(i>=0&&d>0){if(s[i]==='}')d++;if(s[i]==='{')d--;i--;}if(i>=0&&s[i]==='}'){let d2=1;i--;while(i>=0&&d2>0){if(s[i]==='}')d2++;if(s[i]==='{')d2--;i--;}}if(i>=0){let ce=i;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')return{start:i,text:s.substring(i,p).trim()};i=ce;}return{start:i+1,text:s.substring(i+1,p).trim()};}if(s[i]===')'){let d=1;i--;while(i>=0&&d>0){if(s[i]===')')d++;if(s[i]==='(')d--;i--;}return{start:i,text:s.substring(i,p).trim()};}if(/[\d.,}]/.test(s[i])){let e=i+1;while(i>=0&&/[\d.,{}]/.test(s[i]))i--;if(i>=0&&s[i]==='-')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}if(/[a-zA-Z]/.test(s[i])){let e=i+1;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}return{start:i,text:s[i]};}
function grabRight(s,p){let i=p;while(i<s.length&&s[i]===' ')i++;if(i>=s.length)return{end:p,text:''};if(s[i]==='\\'){let j=i+1;if(j<s.length&&s[j]==='$'){j++;while(j<s.length&&/[\d.,]/.test(s[j]))j++;return{end:j,text:s.substring(i,j)};}while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;const cmd=s.substring(i,j);const g=cmd==='\\frac'?2:['\\sqrt','\\text','\\overline'].includes(cmd)?1:0;for(let k=0;k<g;k++){while(j<s.length&&s[j]===' ')j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}}return{end:j,text:s.substring(i,j)};}if(s[i]==='{'){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}return{end:j,text:s.substring(i,j)};}if(s[i]==='('){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='(')d++;if(s[j]===')')d--;j++;}if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d2=1;j++;while(j<s.length&&d2>0){if(s[j]==='{')d2++;if(s[j]==='}')d2--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[\d\-]/.test(s[i])){let j=i;if(s[j]==='-')j++;while(j<s.length&&/[\d.,{}]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[a-zA-Z]/.test(s[i])){let j=i;while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}return{end:i+1,text:s[i]};}
function textSpans(s){const spans=[];const re=/\\(?:text|textbf|textit|textrm|mathrm|operatorname)\s*\{/g;let m;while((m=re.exec(s))){let j=m.index+m[0].length,d=1;while(j<s.length&&d>0){if(s[j]==='{')d++;else if(s[j]==='}')d--;j++;}spans.push([m.index,j]);}return spans;}
function inSpans(spans,i){return spans.some(([a,b])=>i>=a&&i<b);}
function convertLatexDiv(l){if(!l.includes('\\div'))return l;let r=l,n=0;while(r.includes('\\div')&&n++<20){const i=r.indexOf('\\div');const skip=inSpans(textSpans(r),i);let L,R;if(!skip){L=grabLeft(r,i);R=grabRight(r,i+4);}if(skip||!L.text||!R.text||r[L.start-1]==='_'||r[L.start-1]==='^'||r[R.end]==='_'||r[R.end]==='^'){r=r.substring(0,i)+'\x03'+r.substring(i+4);continue;}r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r.replace(/\x03/g,'\\div');}
function convertSlashDiv(l){if(!l.includes('/'))return l;let r=l,n=0;while(r.includes('/')&&n++<30){const i=r.indexOf('/');if(i>0&&r[i-1]==='\\'){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}if(inSpans(textSpans(r),i)){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}const L=grabLeft(r,i),R=grabRight(r,i+1);if(!L.text||!R.text||r[L.start-1]==='_'||r[L.start-1]==='^'||r[R.end]==='_'||r[R.end]==='^'){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r.replace(/\x00/g,'/');}
function convertPlainDiv(t){if(!t.includes('÷'))return t;return t.replace(/(\()?(\\\$)?(\d[\d,.]*)\s*÷\s*(\\\$)?(\d[\d,.]*)\)?/g,(m,p,c1,n,c2,d)=>{const fN=(c1||'')+n.replace(/,/g,'{,}'),fD=(c2||'')+d.replace(/,/g,'{,}');return p?'$\\left(\\frac{'+fN+'}{'+fD+'}\\right)$':'$\\frac{'+fN+'}{'+fD+'}$';});}
function cvtSlash(s){s=s.replace(/\(([^)]+)\)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*\(([^)]+)\)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');return s;}
function convertPlainSlash(t){if(!t.includes('/'))return t;const parts=[];let last=0;const re=/\$\$[\s\S]*?\$\$|\$[^$]+?\$/g;let m;while((m=re.exec(t))!==null){if(m.index>last)parts.push(cvtSlash(t.substring(last,m.index)));parts.push(m[0]);last=m.index+m[0].length;}if(last<t.length)parts.push(cvtSlash(t.substring(last)));return parts.join('');}
function preprocessMath(t){if(!t)return t;let r=t;r=r.replace(/\$\\div\$/g,'÷');r=r.replace(/\$\$([\s\S]*?)\$\$/g,(m,l)=>'$$'+convertSlashDiv(convertLatexDiv(l))+'$$');r=r.replace(/\$([^\$]+?)\$/g,(m,l)=>'$'+convertSlashDiv(convertLatexDiv(l))+'$');r=convertPlainDiv(r);r=convertPlainSlash(r);return r;}

// ════════════════════════════════════════════════════════════════════════════
// FAITHFUL copy of MathText extraction (steps 0,0.4,1,2,3,4) but with
// throwOnError:true so we CAPTURE the errors the app swallows.
// Returns { errors: [{latex, message, mode}], rendered: string }
// ════════════════════════════════════════════════════════════════════════════
function renderViaMathText(inputText) {
  const errors = [];
  if (!inputText) return { errors };
  let result = String(inputText);
  result = result.replace(/[​‌‍⁠﻿]/g, '').replace(/ /g, ' ');
  const ESCAPED_DOLLAR = '';
  result = result.replace(/\\\$/g, ESCAPED_DOLLAR);
  const NEWLINE = '';
  result = result.replace(/\n/g, NEWLINE);
  const CURRENCY = '';
  const currencies = [];
  const trimmed = result.trim();
  const isMathExpression =
    (trimmed.startsWith('$') && trimmed.endsWith('$')) ||
    (trimmed.startsWith('$$') && trimmed.endsWith('$$'));
  if (!isMathExpression) {
    result = result.replace(/\$(\d+(?:,\d{3})*\.\d{2})(?=[\s,;:.!?)}\]]|$)/g, (m, a) => {
      currencies.push(a); return CURRENCY;
    });
  }
  // math rendered BEFORE any markdown-italic step (matches hardened MathText) —
  // display math
  result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, latex) => {
    const clean = latex.replace(new RegExp(NEWLINE, 'g'), '\n').replace(new RegExp(ESCAPED_DOLLAR, 'g'), '\\$');
    try { return katex.renderToString(clean.trim(), { displayMode: true, throwOnError: true, strict: false }); }
    catch (e) { errors.push({ latex: clean.trim(), message: e.message, mode: 'display' }); return match; }
  });
  // inline math
  result = result.replace(/\$([^\$]+?)\$/g, (match, latex) => {
    const clean = latex.replace(new RegExp(NEWLINE, 'g'), '\n').replace(new RegExp(ESCAPED_DOLLAR, 'g'), '\\$');
    try { return katex.renderToString(clean.trim(), { displayMode: false, throwOnError: true, strict: false }); }
    catch (e) { errors.push({ latex: clean.trim(), message: e.message, mode: 'inline' }); return match; }
  });
  return { errors };
}

// ── Static detectors for SILENT mis-renders (KaTeX accepts, draws wrong) ────
function staticFlags(field, raw) {
  const flags = [];
  const s = String(raw);

  // odd number of unescaped $ that aren't currency → guaranteed mis-pairing
  const dollarsNoCurrency = s
    .replace(/\\\$/g, '')                                  // escaped currency
    .replace(/\$\d+(?:,\d{3})*\.\d{2}/g, '');              // $12.50 currency
  const dollarCount = (dollarsNoCurrency.match(/\$/g) || []).length;
  if (dollarCount % 2 === 1) flags.push({ cat: 'unbalanced-dollars', detail: `${dollarCount} unescaped $`, sev: 'high' });

  // walk each $...$ segment for inner problems
  const segRe = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$/g;
  let m;
  while ((m = segRe.exec(s)) !== null) {
    const inner = m[1] !== undefined ? m[1] : m[2];
    if (inner === undefined) continue;
    // multi-char superscript without braces:  2^10  x^23
    if (/\^\s*-?\d{2,}/.test(inner) || /\^\s*[A-Za-z]{2,}/.test(inner))
      flags.push({ cat: 'silent-superscript', detail: inner.match(/\^\s*-?[\dA-Za-z]{2,}/)[0], seg: inner, sev: 'high' });
    // multi-char subscript without braces:  V_new  x_12
    if (/_\s*\d{2,}/.test(inner) || /_\s*[A-Za-z]{2,}/.test(inner))
      flags.push({ cat: 'silent-subscript', detail: inner.match(/_\s*[\dA-Za-z]{2,}/)[0], seg: inner, sev: 'med' });
    // unicode math chars inside math mode (should be LaTeX commands)
    const uni = inner.match(/[√²³¼½¾×÷≤≥≠≈∞π°±∓·•→⇒∑∏∫√µΔΩθαβ]/g);
    if (uni) flags.push({ cat: 'unicode-in-math', detail: [...new Set(uni)].join(''), seg: inner, sev: 'med' });
    // unbalanced braces within the segment
    const opens = (inner.match(/(?<!\\)\{/g) || []).length;
    const closes = (inner.match(/(?<!\\)\}/g) || []).length;
    if (opens !== closes) flags.push({ cat: 'unbalanced-braces', detail: `{${opens} }${closes}`, seg: inner, sev: 'high' });
  }

  // asterisk-in-math corruption: a $...$ segment that contains * and the whole
  // string has another * (so step-0.4 italic regex can inject <em> into latex)
  if (/\$[^$]*\*[^$]*\$/.test(s)) flags.push({ cat: 'italic-asterisk-in-math', detail: 'has * inside $...$', sev: 'med' });

  return flags;
}

// ── Generic deep walk: collect every node carrying a question/explanation ───
function collectItems(root, source) {
  const out = [];
  const seen = new WeakSet();
  const visit = (node, depth) => {
    if (!node || typeof node !== 'object' || depth > 12) return;
    if (seen.has(node)) return;
    seen.add(node);
    if (Array.isArray(node)) { node.forEach((n) => visit(n, depth + 1)); return; }
    const hasText = typeof node.explanation === 'string' || typeof node.question === 'string';
    if (hasText) {
      out.push({
        source,
        id: node.id != null ? String(node.id) : '(no-id)',
        explanation: typeof node.explanation === 'string' ? node.explanation : null,
        question: typeof node.question === 'string' ? node.question : null,
        choices: Array.isArray(node.choices)
          ? node.choices.map((c) => (typeof c === 'string' ? c : c && (c.text || c.label))).filter(Boolean)
          : [],
      });
    }
    for (const k of Object.keys(node)) {
      if (k === 'choices') continue;
      visit(node[k], depth + 1);
    }
  };
  visit(root, 0);
  return out;
}

test('audit explanation/stem/choice rendering across the full corpus', () => {
  // ── assemble corpus ──
  const items = [];
  items.push(...collectItems(mathBank.questionBank || [], 'math-bank'));
  items.push(...collectItems(rwBank.rwQuestionBank || [], 'rw-bank'));
  const tests = typeof practiceTests.getAllPracticeTests === 'function'
    ? practiceTests.getAllPracticeTests()
    : Object.values(practiceTests).filter((v) => v && typeof v === 'object');
  tests.forEach((t) => {
    const label = `pt-${(t && (t.id || t.testNumber || t.name)) || '?'}`;
    items.push(...collectItems(t, label));
  });
  // topic question files (legacy)
  Object.values(topicQuestions).forEach((v) => { if (v && typeof v === 'object') items.push(...collectItems(v, 'topic')); });

  // ── run pipeline + detectors ──
  const findings = [];
  const fieldTexts = (it) => {
    const fs2 = [];
    if (it.explanation) fs2.push(['explanation', it.explanation, true]);
    if (it.question) fs2.push(['question', it.question, false]);
    it.choices.forEach((c, i) => fs2.push([`choice[${i}]`, c, false]));
    return fs2;
  };

  let scanned = 0;
  for (const it of items) {
    for (const [field, text, isExpl] of fieldTexts(it)) {
      scanned++;
      // (a) faithful render: explanation goes through preprocessMath first
      const pre = isExpl ? preprocessMath(text) : text;
      const { errors: preErrors } = renderViaMathText(pre);
      // (b) raw render (no preprocess) to attribute converter-induced breakage
      const { errors: rawErrors } = renderViaMathText(text);
      const rawMsgs = new Set(rawErrors.map((e) => e.latex + '||' + e.message));

      for (const e of preErrors) {
        const converterInduced = isExpl && !rawMsgs.has(e.latex + '||' + e.message);
        findings.push({
          source: it.source, id: it.id, field,
          cat: converterInduced ? 'katex-error-converter-induced' : 'katex-error-author',
          message: e.message.replace(/\s+/g, ' ').slice(0, 200),
          latex: e.latex.slice(0, 160),
          sev: 'high',
        });
      }
      // static silent-render flags on the ORIGINAL text
      for (const f of staticFlags(field, text)) {
        findings.push({ source: it.source, id: it.id, field, cat: f.cat, detail: f.detail, latex: (f.seg || '').slice(0, 160), sev: f.sev });
      }
    }
  }

  // ── aggregate ──
  const byCat = {};
  const bySource = {};
  for (const f of findings) {
    byCat[f.cat] = (byCat[f.cat] || 0) + 1;
    bySource[f.source] = (bySource[f.source] || 0) + 1;
  }
  const itemsAffected = new Set(findings.map((f) => f.source + '::' + f.id)).size;

  const outDir = path.join(process.cwd(), 'scripts', 'audit-output');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'explanation-render-audit.json'),
    JSON.stringify({ scannedFields: scanned, totalItems: items.length, itemsAffected, byCat, bySource, findings }, null, 2));

  // markdown summary (top 60 per category)
  let md = `# Explanation Render Audit\n\n`;
  md += `- Items walked: **${items.length}**\n- Text fields scanned: **${scanned}**\n- Items with ≥1 finding: **${itemsAffected}**\n- Total findings: **${findings.length}**\n\n`;
  md += `## By category\n\n| category | count |\n|---|---|\n`;
  Object.entries(byCat).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => { md += `| ${c} | ${n} |\n`; });
  md += `\n## By source\n\n| source | findings |\n|---|---|\n`;
  Object.entries(bySource).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => { md += `| ${c} | ${n} |\n`; });
  md += `\n## Examples by category (up to 25 each)\n`;
  const cats = Object.keys(byCat).sort((a, b) => byCat[b] - byCat[a]);
  for (const c of cats) {
    md += `\n### ${c} (${byCat[c]})\n\n`;
    findings.filter((f) => f.cat === c).slice(0, 25).forEach((f) => {
      md += `- \`${f.source}\` **${f.id}** _${f.field}_ — ${f.message || f.detail || ''} · \`${(f.latex || '').replace(/`/g, '')}\`\n`;
    });
  }
  fs.writeFileSync(path.join(outDir, 'explanation-render-audit.md'), md);

  // eslint-disable-next-line no-console
  console.log(`\n[AUDIT] items=${items.length} fields=${scanned} affectedItems=${itemsAffected} findings=${findings.length}`);
  console.log('[AUDIT] byCat=', JSON.stringify(byCat));
  console.log('[AUDIT] bySource=', JSON.stringify(bySource));
  console.log(`[AUDIT] wrote ${outDir}/explanation-render-audit.{json,md}`);

  expect(items.length).toBeGreaterThan(0);
});
