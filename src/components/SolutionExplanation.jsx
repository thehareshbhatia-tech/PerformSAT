import React, { useState, useMemo } from 'react';
import { MathText } from './MathText';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';

// ═══════════════════════════════════════════════════════════════════════════════
// MATH PREPROCESSOR — \div and ÷ → \frac{}{}
// ═══════════════════════════════════════════════════════════════════════════════

function grabLeft(s,p){let i=p-1;while(i>=0&&s[i]===' ')i--;if(i<0)return{start:p,text:''};if(s[i]==='}'){let d=1;i--;while(i>=0&&d>0){if(s[i]==='}')d++;if(s[i]==='{')d--;i--;}if(i>=0&&s[i]==='}'){let d2=1;i--;while(i>=0&&d2>0){if(s[i]==='}')d2++;if(s[i]==='{')d2--;i--;}}if(i>=0){let ce=i;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')return{start:i,text:s.substring(i,p).trim()};i=ce;}return{start:i+1,text:s.substring(i+1,p).trim()};}if(s[i]===')'){let d=1;i--;while(i>=0&&d>0){if(s[i]===')')d++;if(s[i]==='(')d--;i--;}return{start:i,text:s.substring(i,p).trim()};}if(/[\d.,}]/.test(s[i])){let e=i+1;while(i>=0&&/[\d.,{}]/.test(s[i]))i--;if(i>=0&&s[i]==='-')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}if(/[a-zA-Z]/.test(s[i])){let e=i+1;while(i>=0&&/[a-zA-Z]/.test(s[i]))i--;if(i>=0&&s[i]==='\\')i--;return{start:i+1,text:s.substring(i+1,e).trim()};}return{start:i,text:s[i]};}

function grabRight(s,p){let i=p;while(i<s.length&&s[i]===' ')i++;if(i>=s.length)return{end:p,text:''};if(s[i]==='\\'){let j=i+1;if(j<s.length&&s[j]==='$'){j++;while(j<s.length&&/[\d.,]/.test(s[j]))j++;return{end:j,text:s.substring(i,j)};}while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;const cmd=s.substring(i,j);const g=cmd==='\\frac'?2:['\\sqrt','\\text','\\overline'].includes(cmd)?1:0;for(let k=0;k<g;k++){while(j<s.length&&s[j]===' ')j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}}return{end:j,text:s.substring(i,j)};}if(s[i]==='{'){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}return{end:j,text:s.substring(i,j)};}if(s[i]==='('){let d=1,j=i+1;while(j<s.length&&d>0){if(s[j]==='(')d++;if(s[j]===')')d--;j++;}if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d2=1;j++;while(j<s.length&&d2>0){if(s[j]==='{')d2++;if(s[j]==='}')d2--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[\d\-]/.test(s[i])){let j=i;if(s[j]==='-')j++;while(j<s.length&&/[\d.,{}]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}if(/[a-zA-Z]/.test(s[i])){let j=i;while(j<s.length&&/[a-zA-Z]/.test(s[j]))j++;if(j<s.length&&s[j]==='^'){j++;if(j<s.length&&s[j]==='{'){let d=1;j++;while(j<s.length&&d>0){if(s[j]==='{')d++;if(s[j]==='}')d--;j++;}}else if(j<s.length)j++;}return{end:j,text:s.substring(i,j)};}return{end:i+1,text:s[i]};}

// Brace-matched spans of \text{...}, \mathrm{...} etc. — \frac is illegal in
// text mode, so a "/" inside one is a literal (e.g. "km/min") and must NOT be
// converted to \frac. Recomputed each loop iteration because r mutates.
function textSpans(s){const spans=[];const re=/\\(?:text|textbf|textit|textrm|mathrm|operatorname)\s*\{/g;let m;while((m=re.exec(s))){let j=m.index+m[0].length,d=1;while(j<s.length&&d>0){if(s[j]==='{')d++;else if(s[j]==='}')d--;j++;}spans.push([m.index,j]);}return spans;}
function inSpans(spans,i){return spans.some(([a,b])=>i>=a&&i<b);}
function convertLatexDiv(l){if(!l.includes('\\div'))return l;let r=l,n=0;while(r.includes('\\div')&&n++<20){const i=r.indexOf('\\div');const skip=inSpans(textSpans(r),i);let L,R;if(!skip){L=grabLeft(r,i);R=grabRight(r,i+4);}if(skip||!L.text||!R.text||r[L.start-1]==='_'||r[L.start-1]==='^'||r[R.end]==='_'||r[R.end]==='^'){r=r.substring(0,i)+'\x03'+r.substring(i+4);continue;}r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r.replace(/\x03/g,'\\div');}

function convertSlashDiv(l){if(!l.includes('/'))return l;let r=l,n=0;while(r.includes('/')&&n++<30){const i=r.indexOf('/');if(i>0&&r[i-1]==='\\'){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}if(inSpans(textSpans(r),i)){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}const L=grabLeft(r,i),R=grabRight(r,i+1);if(!L.text||!R.text||r[L.start-1]==='_'||r[L.start-1]==='^'||r[R.end]==='_'||r[R.end]==='^'){r=r.substring(0,i)+'\x00'+r.substring(i+1);continue;}r=r.substring(0,L.start)+'\\frac{'+L.text+'}{'+R.text+'}'+r.substring(R.end);}return r.replace(/\x00/g,'/');}

function convertPlainDiv(t){if(!t.includes('÷'))return t;return t.replace(/(\()?(\\\$)?(\d[\d,.]*)\s*÷\s*(\\\$)?(\d[\d,.]*)\)?/g,(m,p,c1,n,c2,d)=>{const fN=(c1||'')+n.replace(/,/g,'{,}'),fD=(c2||'')+d.replace(/,/g,'{,}');return p?'$\\left(\\frac{'+fN+'}{'+fD+'}\\right)$':'$\\frac{'+fN+'}{'+fD+'}$';});}

function convertPlainSlash(t){if(!t.includes('/'))return t;const parts=[];let last=0;const re=/\$\$[\s\S]*?\$\$|\$[^$]+?\$/g;let m;while((m=re.exec(t))!==null){if(m.index>last)parts.push(cvtSlash(t.substring(last,m.index)));parts.push(m[0]);last=m.index+m[0].length;}if(last<t.length)parts.push(cvtSlash(t.substring(last)));return parts.join('');}
function cvtSlash(s){s=s.replace(/\(([^)]+)\)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*\(([^)]+)\)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');s=s.replace(/(\d[\d,.]*)\s*\/\s*(\d[\d,.]*)/g,(m,n,d)=>'$\\frac{'+n+'}{'+d+'}$');return s;}

// preprocessMath is now a NO-OP. Authored explanations are valid, self-contained
// LaTeX — KaTeX renders \div, inline /, and \frac natively, so no rewriting is
// needed. The old auto-converters (/ and \div → \frac, prose-slash → \frac) did
// more harm than good once content was authored to spec: they corrupted clean
// source (`4.5\% \div 100` → `\frac{%}{100}`; the prose-slash pass mis-handled
// escaped \$ inside inline math and split `2^{1/10}` across injected $). The
// helpers are retained (dead) to keep the diff small; remove on next cleanup.
function preprocessMath(t){return t;}
void grabLeft; void grabRight; void textSpans; void inSpans;
void convertLatexDiv; void convertSlashDiv; void convertPlainDiv; void cvtSlash; void convertPlainSlash;

// ═══════════════════════════════════════════════════════════════════════════════
// PRESENTATION ADAPTER — parses raw explanation into semantic sections
// ═══════════════════════════════════════════════════════════════════════════════

function parseExplanation(raw) {
  const text = preprocessMath(raw);
  if (!text) return { satPattern: '', answer: '', answerDetail: '', equation: null, fastWay: null, sections: [], whyWrong: null, verification: null, takeaway: null };

  const lines = text.split('\n');
  const sections = [];
  let satPattern = '', answer = '', answerDetail = '', equation = null;
  let fastWay = null, verification = null, takeaway = null, whyWrong = null;
  let cur = null, stepN = 0;

  const flush = () => { if (cur) { cur.content = cur.content.trim(); if (cur.content || cur.bullets.length) sections.push({ ...cur }); } cur = null; };
  const make = (type, extra = {}) => { flush(); cur = { type, content: '', bullets: [], ...extra }; };

  const extractEq = (str) => {
    if (equation) return;
    const m2 = str.match(/\$\$(.+?)\$\$/);
    if (m2) { equation = '$$' + m2[1] + '$$'; return; }
    const all = [...str.matchAll(/\$([^$]+?)\$/g)];
    for (const a of all) { if (/[=\\]/.test(a[1]) && a[1].length > 3) { equation = '$' + a[1] + '$'; return; } }
  };

  for (const line of lines) {
    const t = line.trim(); if (!t) continue; let m;

    // SAT Pattern header (first bold line before the answer)
    if ((m = t.match(/^\*\*SAT Pattern:\s*(.+?)\*\*(.*)$/)) && !satPattern) {
      satPattern = m[1].trim();
      const rest = (m[2] || '').replace(/^[\s—–-]+/, '').trim();
      if (rest) answerDetail = rest;
      continue;
    }

    // Answer verdict
    if ((m = t.match(/^\*\*(?:Choice ([A-D]) is correct\.?|The correct answer is (.+?)\.?)\*\*(.*)$/)) && !answer) {
      answer = m[1] ? 'Choice ' + m[1] + ' is correct' : 'The correct answer is ' + m[2];
      const rest = (m[3] || '').trim();
      if (rest) answerDetail = answerDetail ? answerDetail + ' ' + rest : rest;
      continue;
    }

    // "The Fast Way"
    if ((m = t.match(/^\*\*The Fast Way(?:\s*\([^)]*\))?:?\*\*\s*(.*)$/))) {
      flush();
      fastWay = { content: m[1] || '', bullets: [] };
      cur = fastWay;
      continue;
    }

    // "The Full Solution" header — collect its body as the walkthrough.
    // (Previously this just flushed, so every body line leaked into
    // `answerDetail` and rendered as one dense paragraph wall — the exact
    // readability complaint this section type fixes.)
    if (/^\*\*The Full Solution:?\*\*/.test(t)) { make('solution'); continue; }

    // Steps
    if ((m = t.match(/^\*\*Step (\d+)[:.]\*\*\s*(.*)$/))) { stepN = +m[1]; make('step', { number: stepN, title: m[2] }); continue; }
    if ((m = t.match(/^\*\*Step(?:\s+[^*]+)?:?\*\*\s*(.*)$/i))) { stepN++; make('step', { number: stepN, title: m[1] }); continue; }

    // Methods / Cases
    if ((m = t.match(/^\*\*Method (\d+)[:.]\*\*\s*(.*)$/))) { make('method', { number: +m[1], title: m[2] }); continue; }
    if ((m = t.match(/^\*\*Case (\d+)[:.]\*\*\s*(.*)$/))) { make('case', { number: +m[1], title: m[2] }); continue; }

    // Why wrong
    if (/^\*\*Why (?:the )?(?:other )?(?:wrong )?(?:choices|answers)/.test(t) || /^\*\*Why simple average/.test(t) || /^\*\*Common (?:Mistakes|errors|wrong answers)/i.test(t)) {
      flush();
      whyWrong = { content: '', bullets: [] };
      cur = whyWrong;
      continue;
    }

    // Verification
    if ((m = t.match(/^\*\*Verif(?:ication|y)(?:[^:]*)?:?\*\*\s*(.*)$/i))) {
      flush();
      verification = { content: m[1] || '', bullets: [] };
      cur = verification;
      continue;
    }

    // Test Day Takeaway
    if ((m = t.match(/^\*\*Test Day (?:Takeaway|Tip):?\*\*\s*(.*)$/i))) {
      flush();
      takeaway = { content: m[1] || '', bullets: [] };
      cur = takeaway;
      continue;
    }

    // Key concept / formula / callouts
    if ((m = t.match(/^\*\*Key (?:concept|insight|rule|principle|identities|ratios):?\*\*\s*(.*)$/i))) { extractEq(m[1] || ''); make('key-concept', { content: m[1] }); continue; }
    if ((m = t.match(/^\*\*(?:Key )?[Ff]ormula:?\*\*\s*(.*)$/))) { extractEq(m[1] || ''); make('formula', { content: m[1] }); continue; }
    if ((m = t.match(/^\*\*Calculator tip:?\*\*\s*(.*)$/i))) { make('calculator-tip', { content: m[1] }); continue; }
    if ((m = t.match(/^\*\*Note:?\*\*\s*(.*)$/i))) { make('note', { content: m[1] }); continue; }
    if ((m = t.match(/^\*\*Alternative(?:\s+\w+)?(?:\s*\([^)]*\))?:?\*\*\s*(.*)$/i))) { make('alternative', { content: m[1] }); continue; }
    if ((m = t.match(/^\*\*Desmos (?:Shortcut|Tip|Verification):?\*\*\s*(.*)$/i))) { make('calculator-tip', { content: m[1] }); continue; }

    // Generic bold heading fallback
    if ((m = t.match(/^\*\*([^*]+?):?\*\*\s*(.*)$/)) && !cur) {
      const h = m[1].trim();
      if (/^(?:Choice|The correct)/i.test(h)) continue;
      stepN++; make('step', { number: stepN, title: h, content: m[2] }); continue;
    }

    // Bullet lines — •, -, –, or markdown "* " (the house format's bullet;
    // the (?!\*) guard keeps **bold** headers from matching)
    if ((m = t.match(/^(?:[•\-–]|\*(?!\*))\s*(.+)$/)) && cur) { cur.bullets.push(m[1]); continue; }

    // Continuation text
    if (cur) { cur.content += (cur.content ? '\n' : '') + t; }
    else { answerDetail = answerDetail ? answerDetail + ' ' + t : t; }
  }
  flush();

  // Extract equation from callouts if not found yet
  if (!equation) {
    for (const s of sections) {
      if (s.type === 'formula' || s.type === 'key-concept') {
        const c = s.content + ' ' + (s.bullets || []).join(' ');
        const m2 = c.match(/\$\$(.+?)\$\$/);
        if (m2) { equation = '$$' + m2[1] + '$$'; break; }
        const all = [...c.matchAll(/\$([^$]+?)\$/g)];
        for (const a of all) { if (/[=\\]/.test(a[1]) && a[1].length > 3) { equation = '$' + a[1] + '$'; break; } }
        if (equation) break;
      }
    }
  }

  return { satPattern, answer, answerDetail, equation, fastWay, sections, whyWrong, verification, takeaway };
}

// ═══════════════════════════════════════════════════════════════════════════════
// RENDERING HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

const strip = t => (t || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const RichText = ({ text, size = '15px', color, lineHeight = '1.55' }) => {
  if (!text) return null;
  const ls = strip(text).split('\n').filter(l => l.trim());
  return (
    <div style={{ fontSize: size, color: color || colors.text.primary, letterSpacing: '0' }}>
      {ls.map((l, i) => <div key={i} style={{ lineHeight, marginBottom: '8px' }}><MathText text={l} /></div>)}
    </div>
  );
};

const BulletList = ({ items, color }) => {
  if (!items?.length) return null;
  return (
    <div style={{ marginTop: '6px' }}>
      {items.map((b, i) => (
        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', fontSize: '15px', lineHeight: '1.55', color: color || colors.text.primary }}>
          <span style={{ color: colors.text.muted, flexShrink: 0, marginTop: '5px', fontSize: '7px' }}>●</span>
          <span style={{ flex: 1, minWidth: 0 }}><MathText text={strip(b)} /></span>
        </div>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANTIC SECTION CARDS
// ═══════════════════════════════════════════════════════════════════════════════

const SectionFade = ({ children, delay = 0 }) => (
  <div style={{
    animation: `solutionFadeIn 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms both`,
  }}>
    {children}
  </div>
);

const StepCard = ({ number, title, content, bullets, isLast }) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '28px' }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '50%',
        background: colors.semantic.info, color: colors.text.inverse,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '13px', fontWeight: '700', flexShrink: 0, position: 'relative', zIndex: 1
      }}>{number}</div>
      {!isLast && <div style={{ width: '2px', flex: 1, background: colors.semantic.infoLight, marginTop: '6px', borderRadius: '1px' }} />}
    </div>
    <div style={{ flex: 1, paddingBottom: isLast ? 0 : '20px', minWidth: 0 }}>
      {title && (
        <div style={{ fontSize: '15px', fontWeight: '600', color: colors.text.primary, lineHeight: '28px', marginBottom: '6px' }}>
          <MathText text={strip(title)} />
        </div>
      )}
      {content && <RichText text={content} />}
      {bullets?.length > 0 && <BulletList items={bullets} />}
    </div>
  </div>
);

const MethodCard = ({ number, title, content, bullets, label }) => (
  <div style={{
    background: colors.surface.white, borderRadius: '16px', overflow: 'hidden',
    border: `1px solid rgba(0,0,0,0.06)`, boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
  }}>
    <div style={{ padding: '20px 24px' }}>
      <div style={{
        fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
        color: colors.text.muted, letterSpacing: '0.04em', marginBottom: '12px'
      }}>
        {label || 'METHOD ' + number}{title ? ' — ' : ''}{title && <MathText text={strip(title)} />}
      </div>
      <RichText text={content} />
      {bullets?.length > 0 && <BulletList items={bullets} />}
    </div>
  </div>
);

const FastWayCard = ({ content, bullets }) => {
  if (!content && !bullets?.length) return null;
  return (
    <div style={{
      background: 'rgba(34, 197, 94, 0.04)',
      border: `1px solid rgba(34, 197, 94, 0.15)`,
      borderRadius: '16px', padding: '20px 24px', position: 'relative', overflow: 'hidden',
      boxShadow: 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8.5 1.5L3 9.5h4.5l-1 5 5.5-8H7.5l1-5z" stroke="var(--color-success-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{
          fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
          color: colors.semantic.success, letterSpacing: '0.04em'
        }}>FAST METHOD</span>
      </div>
      <RichText text={content} color={colors.text.primary} />
      <BulletList items={bullets} />
    </div>
  );
};

// Split a why-wrong bullet into its choice letter (the red chip) + body.
// Handles both house formats:
//   "Choice A ($75$): divides the rise by the run."  (June-2026 parenthetical)
//   "Choice B: misreads the slope."                   (legacy bare colon)
// `[\s:]+` must NOT consume `(` — eating the parenthetical's open paren left
// a dangling "75): ..." body (a trailing `\)?` strip can only repair a paren
// at end-of-string), so the body keeps its parens balanced instead.
const parseChoiceBullet = (item) => item.match(/^(?:Choice\s+)?([A-D])[\s:]+(.+)$/);

const WhyWrongCard = ({ content, bullets, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const items = bullets?.length ? bullets : content ? content.split('\n').filter(l => l.trim()) : [];
  if (!items.length) return null;

  return (
    <div style={{
      background: colors.surface.white, borderRadius: '16px',
      border: `1px solid rgba(0,0,0,0.06)`, overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke={colors.semantic.error} strokeWidth="1.5" />
            <path d="M6 6l4 4M10 6l-4 4" stroke={colors.semantic.error} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{
            fontSize: '15px', fontWeight: typography.weights.semibold,
            color: colors.text.primary, letterSpacing: '0'
          }}>Why Other Choices Are Wrong</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: `transform ${transitions.normal}`
        }}>
          <path d="M3 4.5l3 3 3-3" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px' }}>
          {items.map((item, idx) => {
            const cm = parseChoiceBullet(item);
            // Internal trap-classification tags ([TRAP: reversed_operation])
            // ship inside some bank-item bullets — humanize them into a small
            // label instead of leaking raw snake_case at students.
            let body = cm ? cm[2] : item;
            let trapLabel = null;
            const tm = body.match(/^\[TRAP:\s*([a-z_ -]+)\]\s*(.*)$/i);
            if (tm) {
              trapLabel = tm[1].replace(/[_-]+/g, ' ').trim();
              trapLabel = trapLabel.charAt(0).toUpperCase() + trapLabel.slice(1);
              body = tm[2];
            }
            const trapTag = trapLabel ? (
              <span style={{
                display: 'inline-block', padding: '1px 8px', marginRight: '8px',
                borderRadius: radius.full, background: colors.semantic.errorLight,
                color: colors.semantic.error, fontSize: typography.sizes.xs,
                fontWeight: typography.weights.semibold, whiteSpace: 'nowrap',
                verticalAlign: '1px',
              }}>{trapLabel}</span>
            ) : null;
            return (
              <div key={idx} style={{
                display: 'flex', gap: '12px', padding: '12px 0',
                borderTop: idx > 0 ? `1px solid rgba(0,0,0,0.05)` : 'none',
                alignItems: 'flex-start'
              }}>
                {cm ? <>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: colors.semantic.errorLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: typography.weights.bold,
                    color: colors.semantic.error, flexShrink: 0, marginTop: '2px'
                  }}>{cm[1]}</div>
                  <span style={{ fontSize: '15px', lineHeight: '1.75', color: colors.text.secondary, flex: 1, minWidth: 0 }}>
                    {trapTag}<MathText text={strip(body)} />
                  </span>
                </> : <>
                  <span style={{ color: colors.text.muted, flexShrink: 0, marginTop: '7px', fontSize: '8px' }}>●</span>
                  <span style={{ fontSize: '15px', lineHeight: '1.55', color: colors.text.secondary, flex: 1, minWidth: 0 }}>
                    {trapTag}<MathText text={strip(body)} />
                  </span>
                </>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const VerificationCard = ({ content, bullets }) => {
  if (!content && !bullets?.length) return null;
  return (
    <div style={{
      background: colors.surface.white, borderRadius: '16px',
      border: `1px solid rgba(0,0,0,0.06)`, padding: '20px 24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke={colors.semantic.success} strokeWidth="1.5" />
          <path d="M5.5 8l2 2 3.5-4" stroke={colors.semantic.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{
          fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
          color: colors.semantic.success, letterSpacing: '0.04em'
        }}>VERIFICATION</span>
      </div>
      <RichText text={content} size="15px" color={colors.text.secondary} />
      <BulletList items={bullets} color={colors.text.secondary} />
    </div>
  );
};

const TakeawayCard = ({ content, bullets }) => {
  if (!content && !bullets?.length) return null;
  return (
    <div style={{
      background: 'rgba(59, 130, 246, 0.04)',
      borderRadius: '16px', padding: '20px 24px',
      border: `1px solid rgba(59, 130, 246, 0.15)`,
      boxShadow: 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path d="M8 2a4 4 0 014 4c0 1.5-.8 2.5-1.5 3.2-.4.4-.5.8-.5 1.3v.5H6v-.5c0-.5-.1-.9-.5-1.3C4.8 8.5 4 7.5 4 6a4 4 0 014-4z" stroke={colors.semantic.info} strokeWidth="1.5" />
          <path d="M6 13h4M7 14.5h2" stroke={colors.semantic.info} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{
          fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
          color: colors.semantic.info, letterSpacing: '0.04em'
        }}>TEST DAY TAKEAWAY</span>
      </div>
      <RichText text={content} size="15px" color={colors.text.primary} />
      <BulletList items={bullets} />
    </div>
  );
};

const CALLOUT_CONFIG = {
  'key-concept': { label: 'KEY CONCEPT', color: colors.semantic.info },
  'calculator-tip': { label: 'CALCULATOR TIP', color: colors.semantic.info },
  'note': { label: 'NOTE', color: colors.text.muted },
  'formula': { label: 'FORMULA', color: colors.semantic.info },
  'alternative': { label: 'ALTERNATIVE', color: colors.text.muted },
};

// ═══════════════════════════════════════════════════════════════════════════════
// DISCLOSURE — collapsible wrapper for the depth layers (walkthrough etc.)
// ═══════════════════════════════════════════════════════════════════════════════

const Disclosure = ({ label, sublabel, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      background: colors.surface.white, borderRadius: '16px',
      border: `1px solid rgba(0,0,0,0.06)`, overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%', padding: '16px 24px', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', minWidth: 0 }}>
          <span style={{ fontSize: '15px', fontWeight: typography.weights.semibold, color: colors.text.primary }}>
            {label}
          </span>
          {sublabel && (
            <span style={{ fontSize: typography.sizes.xs, color: colors.text.muted, whiteSpace: 'nowrap' }}>
              {sublabel}
            </span>
          )}
        </div>
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{
          flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: `transform ${transitions.normal}`
        }}>
          <path d="M3 4.5l3 3 3-3" stroke={colors.text.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div style={{ padding: '0 24px 20px' }}>{children}</div>}
    </div>
  );
};

const CalloutCard = ({ type, content, bullets }) => {
  const cfg = CALLOUT_CONFIG[type] || { label: 'NOTE', color: colors.text.muted };
  return (
    <div style={{
      padding: '20px 24px', background: colors.surface.white,
      borderRadius: '16px', border: `1px solid rgba(0,0,0,0.06)`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <div style={{
        fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
        color: cfg.color, letterSpacing: '0.04em', marginBottom: '10px',
        display: 'flex', alignItems: 'center', gap: '8px'
      }}>{cfg.label}</div>
      {content && <RichText text={content} size="15px" color={colors.text.primary} />}
      {bullets?.length > 0 && <BulletList items={bullets} />}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// KEYFRAME INJECTION
// ═══════════════════════════════════════════════════════════════════════════════

const styleId = 'solution-explanation-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes solutionFadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

const SolutionExplanation = ({ explanation, isCorrect }) => {
  const parsed = useMemo(() => parseExplanation(explanation), [explanation]);

  if (!explanation) {
    return (
      <div style={{ padding: spacing.xl, textAlign: 'center', color: colors.text.muted, fontSize: typography.sizes.sm }}>
        No explanation available.
      </div>
    );
  }

  const { satPattern, answer, answerDetail, equation, fastWay, sections, whyWrong, verification, takeaway } = parsed;
  const solution = sections.find(s => s.type === 'solution');
  const steps = sections.filter(s => s.type === 'step');
  const methods = sections.filter(s => s.type === 'method');
  const cases = sections.filter(s => s.type === 'case');
  const calloutTypes = ['key-concept', 'calculator-tip', 'note', 'formula', 'alternative'];
  const callouts = sections.filter(s => calloutTypes.includes(s.type));
  const hasWalkthrough = !!(solution || steps.length || methods.length || cases.length || callouts.length || verification || equation);
  const hasBody = hasWalkthrough || whyWrong || fastWay || takeaway;

  let animDelay = 0;
  const nextDelay = () => { animDelay += 60; return animDelay; };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

      {/* ── SAT Pattern Badge ─────────────────────────────────────── */}
      {satPattern && (
        <SectionFade delay={nextDelay()}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', background: colors.semantic.infoLight,
            borderRadius: radius.full, marginBottom: '16px', alignSelf: 'flex-start',
            border: `1px solid ${colors.semantic.info}`,
          }}>
            <span style={{
              fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
              color: colors.semantic.info, letterSpacing: '-0.01em'
            }}>{satPattern}</span>
          </div>
        </SectionFade>
      )}

      {/* ── Answer Verdict ────────────────────────────────────────── */}
      {answer && (
        <SectionFade delay={nextDelay()}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              fontSize: typography.sizes.xl, fontWeight: typography.weights.bold,
              color: colors.text.primary, letterSpacing: typography.letterSpacing.tight, lineHeight: '1.3',
            }}>
              <MathText text={strip(answer)} />
            </div>
            {answerDetail && (
              <div style={{
                marginTop: '10px', fontSize: '15px', lineHeight: '1.75',
                color: colors.text.secondary
              }}>
                <MathText text={strip(answerDetail)} />
              </div>
            )}
          </div>
        </SectionFade>
      )}

      {/* ── Fast Way — the 10-second read, always visible ─────────── */}
      {fastWay && (
        <SectionFade delay={nextDelay()}>
          <div style={{ marginBottom: '12px' }}>
            <FastWayCard content={fastWay.content} bullets={fastWay.bullets} />
          </div>
        </SectionFade>
      )}

      {/* ── Full walkthrough — one tap away (auto-open when there is
             no Fast Way, so legacy content is never hidden) ────────── */}
      {hasWalkthrough && (
        <SectionFade delay={nextDelay()}>
          <div style={{ marginBottom: '12px' }}>
            <Disclosure label="Full walkthrough" sublabel="every step, written out" defaultOpen={!fastWay}>

              {equation && (
                <div style={{
                  background: colors.surface.subtle || 'rgba(0,0,0,0.02)', borderRadius: '12px',
                  padding: '14px 18px', textAlign: 'center', marginBottom: '14px',
                }}>
                  <div style={{
                    fontSize: typography.sizes.xs, fontWeight: typography.weights.bold,
                    color: colors.text.muted, letterSpacing: typography.letterSpacing.wider, marginBottom: '8px'
                  }}>EQUATION USED</div>
                  <div style={{ fontSize: '17px', color: colors.text.primary, lineHeight: '1.9' }}>
                    <MathText text={strip(equation)} />
                  </div>
                </div>
              )}

              {solution && (
                <div style={{ paddingTop: '4px' }}>
                  <RichText text={solution.content} />
                  <BulletList items={solution.bullets} />
                </div>
              )}

              {steps.length > 0 && (
                <div style={{ paddingTop: '8px' }}>
                  {steps.map((s, i) => <StepCard key={i} {...s} isLast={i === steps.length - 1} />)}
                </div>
              )}

              {methods.length > 0 && (
                <div style={{
                  display: 'grid', gridTemplateColumns: methods.length === 2 ? '1fr 1fr' : '1fr',
                  gap: '12px', marginTop: '12px'
                }}>
                  {methods.map((m, i) => <MethodCard key={i} {...m} />)}
                </div>
              )}
              {cases.length > 0 && (
                <div style={{
                  display: 'grid', gridTemplateColumns: cases.length === 2 ? '1fr 1fr' : '1fr',
                  gap: '12px', marginTop: '12px'
                }}>
                  {cases.map((c, i) => <MethodCard key={i} {...c} label={'CASE ' + c.number} />)}
                </div>
              )}

              {callouts.map((c, i) => (
                <div key={i} style={{ marginTop: '12px' }}>
                  <CalloutCard type={c.type} content={c.content} bullets={c.bullets} />
                </div>
              ))}

              {verification && (
                <div style={{ marginTop: '12px' }}>
                  <VerificationCard content={verification.content} bullets={verification.bullets} />
                </div>
              )}

            </Disclosure>
          </div>
        </SectionFade>
      )}

      {/* ── Why Wrong — one tap away ──────────────────────────────── */}
      {whyWrong && (
        <SectionFade delay={nextDelay()}>
          <div style={{ marginBottom: '12px' }}>
            <WhyWrongCard bullets={whyWrong.bullets} content={whyWrong.content} defaultOpen={false} />
          </div>
        </SectionFade>
      )}

      {/* ── Takeaway — one sentence, always visible ───────────────── */}
      {takeaway && (
        <SectionFade delay={nextDelay()}>
          <TakeawayCard content={takeaway.content} bullets={takeaway.bullets} />
        </SectionFade>
      )}

      {/* ── Fallback ──────────────────────────────────────────────── */}
      {/* Fires when the explanation is plain prose with no **bold** markdown
          headers — the parser collects every continuation line into
          `answerDetail`, so the legacy `!hasBody && !answerDetail` guard left
          new R&W content (Tests 1/2/7 reauthored under RW_PIPELINE_PLAN.md)
          rendering an empty Solution Explanation panel. CB-style
          explanations don't use **SAT Pattern:**, **Choice X is correct.**,
          or **Step N:** structure; they read as continuous prose with a
          "Why the wrong answers are tempting:" section. Render the raw
          explanation via RichText whenever no structured `answer` was
          extracted; RichText handles newlines, bullets, and inline math. */}
      {!hasBody && !answer && (
        <div style={{ padding: '8px 0' }}>
          <RichText text={explanation} />
        </div>
      )}
    </div>
  );
};

// Exported for unit tests — the parser is the contract between the authored
// explanation format and the layered presentation.
export { parseExplanation, parseChoiceBullet };

export default SolutionExplanation;
