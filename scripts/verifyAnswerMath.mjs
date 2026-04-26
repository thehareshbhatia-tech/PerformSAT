#!/usr/bin/env node

/**
 * verifyAnswerMath.mjs
 *
 * Comprehensive mathematical verification of all 528 practice-test questions.
 *
 * HIGH-CONFIDENCE checks (low false-positive rate):
 *   1. MC: "Choice X is correct" in explanation vs correctAnswer field
 *   2. Fill-in: "The correct answer is X" vs correctAnswer field
 *   3. Multi-number sum chains in correct-section of explanation
 *   4. Table data internal consistency (row/column totals)
 *   5. Bar chart totals
 *   6. Programmatic mean computation verification
 *   7. Programmatic percentage verification
 *
 * Note: LaTeX thousands separators like $24{,}000$ are normalized before
 * arithmetic checks. "Why the wrong answers are tempting" sections are
 * excluded from arithmetic checks (they contain intentional errors).
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(new URL('.', import.meta.url).pathname, '..', 'src', 'data', 'practiceTests');

const issues = [];
let totalQuestions = 0;
let totalFillIn = 0;
let totalMC = 0;

// ── File parsing ──

function extractTestData(filePath, testNum) {
  const raw = readFileSync(filePath, 'utf-8');
  const varName = `practiceTest${testNum}`;
  const pat = new RegExp(`export\\s+const\\s+${varName}\\s*=\\s*`);
  const match = raw.match(pat);
  if (!match) { console.error(`No export for ${varName}`); return null; }
  const after = raw.slice(match.index + match[0].length);
  let depth = 0, end = -1, inStr = false, strCh = '', esc = false;
  for (let i = 0; i < after.length; i++) {
    const c = after[i];
    if (esc) { esc = false; continue; }
    if (c === '\\' && inStr) { esc = true; continue; }
    if (inStr) { if (c === strCh) inStr = false; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end === -1) { console.error(`No closing brace for ${varName}`); return null; }
  try { return new Function(`return (${after.slice(0, end)});`)(); }
  catch (e) { console.error(`Parse error ${varName}: ${e.message}`); return null; }
}

// ── Helpers ──

function getQuestionText(q) {
  if (typeof q.question === 'string') return q.question;
  if (Array.isArray(q.question))
    return q.question.map(p => typeof p === 'string' ? p : (p.text || (p.math ? `$${p.math}$` : ''))).join(' ');
  return '';
}

function mkLabel(testId, modTitle, qi, qId) {
  return `[${testId}] ${modTitle}, Q${qi + 1} (id: ${qId})`;
}

function snip(text, max = 90) {
  if (!text) return '(no text)';
  const c = text.replace(/\s+/g, ' ').trim();
  return c.length <= max ? c : c.slice(0, max) + '...';
}

function parseFrac(s) {
  if (!s) return null;
  const m = s.trim().match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (m) { const d = parseFloat(m[2]); return d ? parseFloat(m[1]) / d : null; }
  return null;
}

function toNum(s) {
  if (!s) return NaN;
  const c = s.trim().replace(/,/g, '');
  const f = parseFrac(c);
  return f !== null ? f : parseFloat(c);
}

function answersMatch(stated, correctAnswer, altAnswers) {
  const sn = toNum(stated);
  if (isNaN(sn)) return true;
  return [correctAnswer, ...(altAnswers || [])].some(c => {
    const cn = toNum(c);
    return !isNaN(cn) && Math.abs(sn - cn) < 0.05;
  });
}

// Normalize LaTeX thousands: $24{,}000$ -> 24000, $2{,}700$ -> 2700
function normLatexNums(text) {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/(\d)\{,\}(\d)/g, '$1$2');
}

function extractNumList(text) {
  if (!text || typeof text !== 'string') return null;
  let s = text.replace(/\$\$/g, '').replace(/\$/g, '');
  s = s.replace(/\\text\{[^}]*\}/g, '').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '');
  const m = s.match(/(-?\d+(?:\.\d+)?(?:\s*,\s*-?\d+(?:\.\d+)?){2,})/);
  return m ? m[1].split(',').map(x => parseFloat(x.trim())).filter(n => !isNaN(n)) : null;
}

// Get the "correct answer" section of explanation, excluding "Why wrong" parts
function correctSection(expl) {
  if (!expl) return '';
  const m = expl.match(/\*\*(?:Why the wrong|Common Mistakes)/i);
  return m ? expl.slice(0, m.index) : expl;
}

function addIssue(lbl, desc) { issues.push(`${lbl}: ${desc}`); }

// ═══════════════════════════════════════════════════════════
// CHECK 1: MC "Choice X is correct" matches correctAnswer
// ═══════════════════════════════════════════════════════════

function checkMCChoiceLetter(q, lbl) {
  const expl = q.explanation || '';
  const ca = String(q.correctAnswer).trim();
  const found = new Set();
  for (const p of [/\*\*Choice\s+([A-D])\s+is\s+correct\.?\*\*/gi, /Choice\s+([A-D])\s+is\s+correct/gi]) {
    let m; while ((m = p.exec(expl)) !== null) found.add(m[1].toUpperCase());
  }
  if (found.size > 0 && !found.has(ca)) {
    addIssue(lbl,
      `CHOICE LETTER MISMATCH -- correctAnswer="${ca}" but explanation says ` +
      `"Choice ${[...found].join('/')} is correct". Question: "${snip(getQuestionText(q))}"`
    );
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 2: Fill-in "The correct answer is X" matches
// ═══════════════════════════════════════════════════════════

function checkFillInStatedAnswer(q, lbl) {
  const expl = normLatexNums(q.explanation || '');
  const ca = String(q.correctAnswer).trim();

  // Match "The correct answer is VALUE" where VALUE is a number
  // Handle: integers, decimals, negatives, fractions, LaTeX-formatted numbers
  const pat = /The\s+correct\s+answer\s+is\s+\*?\*?\s*\$?\s*(-?\d[\d,]*(?:\.\d+)?(?:\/\d+)?)\s*(?:\(or\s+[^)]*\))?\s*\$?\s*\*?\*?/gi;
  let m;
  while ((m = pat.exec(expl)) !== null) {
    let stated = m[1].replace(/,/g, '').trim();
    if (/^[A-D]$/i.test(stated)) continue;
    if (!answersMatch(stated, ca, q.alternateAnswers)) {
      addIssue(lbl,
        `STATED ANSWER MISMATCH -- correctAnswer="${ca}" but explanation says ` +
        `"The correct answer is ${m[1]}". Question: "${snip(getQuestionText(q))}"`
      );
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 3: Multi-number sum chains
// ═══════════════════════════════════════════════════════════

function checkSumChains(q, lbl) {
  const expl = normLatexNums(q.explanation || '');
  const qText = getQuestionText(q);
  const cs = correctSection(expl);

  // Match "$A + B + C + ... = Z$" (at least 3 addends, all positive/integer/decimal)
  // Use a more careful approach: find all $...$ segments, then check for sum patterns
  const mathSegments = [...cs.matchAll(/\$([^$]+)\$/g)];
  for (const seg of mathSegments) {
    const content = seg[1].replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').trim();
    // Check if it's a pure addition chain: "N + N + N + ... = N"
    const sumMatch = content.match(/^(-?\d+(?:\.\d+)?(?:\s*\+\s*-?\d+(?:\.\d+)?){2,})\s*=\s*(-?\d+(?:\.\d+)?)$/);
    if (sumMatch) {
      const nums = sumMatch[1].split('+').map(s => parseFloat(s.trim()));
      const stated = parseFloat(sumMatch[2]);
      if (nums.some(isNaN) || isNaN(stated)) continue;
      const actual = nums.reduce((a, b) => a + b, 0);
      if (Math.abs(actual - stated) > 0.05) {
        addIssue(lbl,
          `SUM COMPUTATION ERROR -- ${nums.join(' + ')} stated as ${stated} ` +
          `but actual sum = ${actual.toFixed(2)}. Question: "${snip(qText)}"`
        );
      }
    }
  }

  // Also check for sum chains inside \frac{}{} notation
  // Pattern: \frac{A+B+C+...+Z}{N} = \frac{S}{N}
  const fracPat = /\\frac\{(-?\d+(?:\.\d+)?(?:\s*\+\s*-?\d+(?:\.\d+)?){2,})\}\{(\d+)\}\s*=\s*\\frac\{(\d+(?:\.\d+)?)\}\{(\d+)\}/g;
  let fm;
  while ((fm = fracPat.exec(cs)) !== null) {
    const nums = fm[1].split('+').map(s => parseFloat(s.trim()));
    const statedNumer = parseFloat(fm[3]);
    if (nums.some(isNaN) || isNaN(statedNumer)) continue;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    if (Math.abs(actualSum - statedNumer) > 0.05) {
      addIssue(lbl,
        `SUM IN FRACTION ERROR -- \\frac{${nums.join('+')}}{${fm[2]}} claims numerator sum = ${statedNumer} ` +
        `but actual sum = ${actualSum.toFixed(2)}. Question: "${snip(qText)}"`
      );
    }
  }

  // Also check: "Sum = N" patterns where the preceding text lists numbers
  // e.g., "Set N: $4+5+5+6+6+7+7+7+7+8+8+8+9+9+10 = 105$"
  // This is already caught by the $...$ segment check above
}

// ═══════════════════════════════════════════════════════════
// CHECK 4: Isolated LaTeX arithmetic in $...$
// Only: A × B = C, A ÷ B = C (two operands, in correct section)
// Normalize thousands separators first
// ═══════════════════════════════════════════════════════════

function checkLatexArithmetic(q, lbl) {
  const rawExpl = q.explanation || '';
  const expl = normLatexNums(rawExpl);
  const qText = getQuestionText(q);
  const cs = correctSection(expl);

  // Find all $...$ segments in correct section
  const segs = [...cs.matchAll(/\$([^$]+)\$/g)];
  for (const seg of segs) {
    let c = seg[1].replace(/[{}]/g, '');

    // Division: A \div B = C  (or A ÷ B = C)
    const divMatch = c.match(/^(.*)(\d+(?:\.\d+)?)\s*(?:\\div|÷)\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)(.*)$/);
    if (divMatch) {
      // Ensure A is an isolated number (not part of a larger expression)
      const before = divMatch[1].trim();
      const a = parseFloat(divMatch[2]), b = parseFloat(divMatch[3]), stated = parseFloat(divMatch[4]);
      // Skip if there's content before A that makes it part of a chain
      if (before && /\d/.test(before)) continue;
      if (b === 0) continue;
      const computed = a / b;
      if (Math.abs(computed - stated) > 0.05 && Math.abs(computed - stated) / Math.max(1, Math.abs(computed)) > 0.01) {
        addIssue(lbl,
          `DIVISION ERROR in explanation -- ${divMatch[2]} ÷ ${divMatch[3]} stated as ${divMatch[4]} ` +
          `but actual = ${computed.toFixed(4)}. Question: "${snip(qText)}"`
        );
      }
    }

    // Multiplication: A \times B = C  (or A \cdot B = C)
    const mulMatch = c.match(/^(.*)(\d+(?:\.\d+)?)\s*(?:\\times|\\cdot|×)\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)(.*)$/);
    if (mulMatch) {
      const before = mulMatch[1].trim();
      const a = parseFloat(mulMatch[2]), b = parseFloat(mulMatch[3]), stated = parseFloat(mulMatch[4]);
      if (before && /\d/.test(before)) continue;
      const computed = a * b;
      if (Math.abs(computed - stated) > Math.max(0.5, Math.abs(computed) * 0.01)) {
        addIssue(lbl,
          `MULTIPLICATION ERROR in explanation -- ${mulMatch[2]} × ${mulMatch[3]} stated as ${mulMatch[4]} ` +
          `but actual = ${computed.toFixed(2)}. Question: "${snip(qText)}"`
        );
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 5: Table data internal consistency
// ═══════════════════════════════════════════════════════════

function checkTableData(q, lbl) {
  const qText = getQuestionText(q);
  const d = q.diagram;
  if (!d || d.type !== 'table') return;
  const { headers, rows } = d.params || {};
  if (!headers || !rows) return;

  const tColIdx = headers.findIndex(h => /total/i.test(h));
  const tRowIdx = rows.findIndex(r => /total/i.test(r[0]));
  if (tColIdx < 0 && tRowIdx < 0) return;

  // Row totals
  if (tColIdx > 0) {
    for (let ri = 0; ri < rows.length; ri++) {
      if (ri === tRowIdx) continue;
      const nums = [];
      for (let ci = 1; ci < rows[ri].length; ci++) {
        if (ci === tColIdx) continue;
        const n = parseFloat(rows[ri][ci]); if (!isNaN(n)) nums.push(n);
      }
      const st = parseFloat(rows[ri][tColIdx]);
      if (nums.length > 0 && !isNaN(st)) {
        const comp = nums.reduce((a, b) => a + b, 0);
        if (Math.abs(comp - st) > 0.05) {
          addIssue(lbl, `TABLE ROW TOTAL -- "${rows[ri][0]}": ${nums.join(' + ')} = ${comp} but stated ${st}. Q: "${snip(qText)}"`);
        }
      }
    }
  }
  // Col totals
  if (tRowIdx >= 0) {
    for (let ci = 1; ci < headers.length; ci++) {
      const nums = [];
      for (let ri = 0; ri < rows.length; ri++) {
        if (ri === tRowIdx) continue;
        const n = parseFloat(rows[ri][ci]); if (!isNaN(n)) nums.push(n);
      }
      const st = parseFloat(rows[tRowIdx][ci]);
      if (nums.length > 0 && !isNaN(st)) {
        const comp = nums.reduce((a, b) => a + b, 0);
        if (Math.abs(comp - st) > 0.05) {
          addIssue(lbl, `TABLE COL TOTAL -- "${headers[ci]}": ${nums.join(' + ')} = ${comp} but stated ${st}. Q: "${snip(qText)}"`);
        }
      }
    }
  }
}

// Also questionTable
function checkQuestionTable(q, lbl) {
  if (!q.questionTable) return;
  const { headers, rows } = q.questionTable;
  if (!headers || !rows) return;
  const pCol = headers.findIndex(h => /percent/i.test(h));
  if (pCol >= 0) {
    const pcts = rows.map(r => parseFloat(r[pCol])).filter(n => !isNaN(n));
    if (pcts.length > 0) {
      const total = pcts.reduce((a, b) => a + b, 0);
      if (Math.abs(total - 100) > 0.5) {
        addIssue(lbl, `QUESTION TABLE PCTS -- sum=${total.toFixed(1)}% (expected ~100%). Q: "${snip(getQuestionText(q))}"`);
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 6: Bar chart totals
// ═══════════════════════════════════════════════════════════

function checkBarChart(q, lbl) {
  const qText = getQuestionText(q);
  const d = q.diagram;
  if (!d || d.type !== 'barChart') return;
  const data = d.params?.data;
  if (!data) return;
  // Look for "of $N$ students/people" in question
  const m = qText.match(/(?:each of|of)\s*\$?(\d+)\$?\s+(?:college\s+)?(?:student|people|respondent|participant|employee)/i);
  if (m) {
    const stated = parseInt(m[1]);
    const computed = data.reduce((s, d) => s + (d.value || 0), 0);
    if (stated > 0 && computed > 0 && stated !== computed) {
      addIssue(lbl, `BAR CHART TOTAL -- Question says ${stated} but data sums to ${computed}. Q: "${snip(qText)}"`);
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 7: Programmatic mean verification (fill-in)
// ═══════════════════════════════════════════════════════════

function checkMeanMath(q, lbl) {
  const qText = getQuestionText(q);
  const fText = q.questionFormula?.equation || '';
  const combined = (qText + ' ' + fText).toLowerCase();
  const ca = String(q.correctAnswer).trim();
  const cn = toNum(ca);
  if (isNaN(cn)) return;
  if (!combined.includes('mean') && !combined.includes('average')) return;

  const nums = extractNumList(fText) || extractNumList(qText);
  if (!nums || nums.length < 2) return;
  const sum = nums.reduce((a, b) => a + b, 0);

  // "new mean becomes X"
  const nmm = combined.match(/new mean (?:becomes?|is|equals?)\s*\$?(\d+(?:\.\d+)?)/);
  if (nmm) {
    const target = parseFloat(nmm[1]);
    const added = target * (nums.length + 1) - sum;
    if (Math.abs(cn - added) > 0.1 && !answersMatch(String(added), ca, q.alternateAnswers)) {
      addIssue(lbl, `MEAN MATH -- sum=${sum}, target mean=${target}, ${nums.length + 1} values => added should be ${added.toFixed(2)}, but correctAnswer="${ca}". Q: "${snip(qText)}"`);
    }
    return;
  }

  // "mean increases by X"
  const im = combined.match(/mean (?:\w+ )?increases? by (?:exactly )?\$?(\d+(?:\.\d+)?)/);
  if (im) {
    const incr = parseFloat(im[1]);
    const origMean = sum / nums.length;
    const target = origMean + incr;
    const added = target * (nums.length + 1) - sum;
    if (Math.abs(cn - added) > 0.1 && !answersMatch(String(added), ca, q.alternateAnswers)) {
      addIssue(lbl, `MEAN MATH -- sum=${sum}, orig mean=${origMean.toFixed(2)}, +${incr} => target=${target.toFixed(2)}, added should be ${added.toFixed(2)}, but correctAnswer="${ca}". Q: "${snip(qText)}"`);
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 8: Programmatic percentage verification (fill-in)
// ═══════════════════════════════════════════════════════════

function checkPercentMath(q, lbl) {
  if (q.type !== 'fill-in') return;
  const qText = getQuestionText(q);
  const combined = qText.toLowerCase();
  const ca = String(q.correctAnswer).trim();
  const cn = toNum(ca);
  if (isNaN(cn)) return;
  if (!combined.includes('%') && !combined.includes('percent')) return;

  let clean = qText.replace(/\$\$/g, '').replace(/\$/g, '');
  clean = clean.replace(/\\%/g, '%').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '');

  // "survey of N people: X% A and Y% B ... how many more"
  const sm = clean.match(/(\d+)\s*people.*?(\d+(?:\.\d+)?)\s*%\s*preferred.*?(\d+(?:\.\d+)?)\s*%\s*preferred/i);
  if (sm && combined.includes('how many more')) {
    const total = parseFloat(sm[1]), a = parseFloat(sm[2]), b = parseFloat(sm[3]);
    const diff = total * (a - b) / 100;
    if (Math.abs(cn - diff) > 0.5)
      addIssue(lbl, `PERCENT MATH -- ${total} * (${a}% - ${b}%) = ${diff}, but correctAnswer="${ca}". Q: "${snip(qText)}"`);
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 9: Dot plot data -- verify sum referenced in explanation
// ═══════════════════════════════════════════════════════════

function checkDotPlotData(q, lbl) {
  const d = q.diagram;
  if (!d || d.type !== 'dotPlot') return;
  const sets = d.params?.sets;
  if (!sets) return;
  const qText = getQuestionText(q);
  const expl = normLatexNums(q.explanation || '');
  const cs = correctSection(expl);

  // For each set, compute sum and check if explanation references a different sum
  for (const s of sets) {
    if (!s.data || s.data.length === 0) continue;
    const sum = s.data.reduce((a, b) => a + b, 0);
    const mean = sum / s.data.length;

    // Look for "Set X: sum = N" or "N / count = mean" patterns
    // Also look for sum chains that match this set's data
  }

  // More broadly: find any sum chain in the explanation whose addends match
  // a dot plot dataset, and verify
  const mathSegs = [...cs.matchAll(/\$([^$]+)\$/g)];
  for (const seg of mathSegs) {
    const content = seg[1].replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').trim();
    const sumMatch = content.match(/^(-?\d+(?:\.\d+)?(?:\s*\+\s*-?\d+(?:\.\d+)?){2,})\s*=\s*(-?\d+(?:\.\d+)?)$/);
    if (!sumMatch) continue;
    const nums = sumMatch[1].split('+').map(x => parseFloat(x.trim()));
    const stated = parseFloat(sumMatch[2]);
    if (nums.some(isNaN) || isNaN(stated)) continue;
    const actual = nums.reduce((a, b) => a + b, 0);
    // Already handled by checkSumChains, but specifically note if this
    // matches a dot plot dataset
    if (Math.abs(actual - stated) > 0.05) {
      // Check if these numbers match any dataset
      for (const s of sets) {
        const sorted1 = [...nums].sort((a,b) => a-b);
        const sorted2 = [...s.data].sort((a,b) => a-b);
        if (sorted1.length === sorted2.length &&
            sorted1.every((v, i) => v === sorted2[i])) {
          addIssue(lbl,
            `DOT PLOT SUM ERROR -- ${s.name || 'dataset'}: ${nums.join(' + ')} stated as ${stated} ` +
            `but actual sum of dot plot data = ${actual}. This may affect the correctAnswer. ` +
            `Q: "${snip(qText)}"`
          );
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// CHECK 10: Verify bar chart values match question context
// ═══════════════════════════════════════════════════════════

function checkBarChartValues(q, lbl) {
  const d = q.diagram;
  if (!d || d.type !== 'barChart') return;
  const data = d.params?.data;
  if (!data) return;
  const qText = getQuestionText(q);
  const ca = String(q.correctAnswer).trim();

  // If the question asks "how many X had value Y", check bar chart
  if (q.type === 'multiple-choice') {
    const howManyMatch = qText.match(/[Hh]ow many.*?(?:exactly|had|got|reported|received)\s*(?:getting\s*)?\$?(\d+(?:\.\d+)?)\$?/);
    if (howManyMatch) {
      const targetLabel = howManyMatch[1];
      const bar = data.find(d => d.label === targetLabel);
      if (bar) {
        // The correct answer should match the bar's value
        const correctChoice = q.choices?.find(c => c.id === ca);
        if (correctChoice) {
          let ct = correctChoice.text;
          if (Array.isArray(ct)) ct = ct.map(p => p.math || p.text || '').join('');
          if (typeof ct !== 'string') ct = String(ct || '');
          ct = ct.replace(/\$/g, '').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').trim();
          const choiceVal = parseFloat(ct);
          if (!isNaN(choiceVal) && choiceVal !== bar.value) {
            addIssue(lbl,
              `BAR CHART VALUE -- Question asks about label "${targetLabel}", bar value is ${bar.value}, ` +
              `but correctAnswer choice "${ca}" has value ${choiceVal}. Q: "${snip(qText)}"`
            );
          }
        }
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════
// Process
// ═══════════════════════════════════════════════════════════

function processTest(testNum) {
  const fp = join(DATA_DIR, `practiceTest${testNum}.js`);
  let td;
  try { td = extractTestData(fp, testNum); }
  catch (e) { console.error(`Error: practiceTest${testNum}.js: ${e.message}`); return; }
  if (!td) return;

  const testId = td.id || `practice-test-${testNum}`;

  for (const mod of (td.modules || [])) {
    const modTitle = mod.title || mod.id || 'Unknown';
    for (let qi = 0; qi < (mod.questions || []).length; qi++) {
      const q = mod.questions[qi];
      totalQuestions++;
      const qId = q.id ?? '??';
      const l = mkLabel(testId, modTitle, qi, qId);

      if (q.type === 'multiple-choice') {
        totalMC++;
        checkMCChoiceLetter(q, l);
      } else if (q.type === 'fill-in') {
        totalFillIn++;
        checkFillInStatedAnswer(q, l);
        checkMeanMath(q, l);
        checkPercentMath(q, l);
      }

      // All types
      checkSumChains(q, l);
      checkLatexArithmetic(q, l);
      checkTableData(q, l);
      checkQuestionTable(q, l);
      checkBarChart(q, l);
      checkDotPlotData(q, l);
      checkBarChartValues(q, l);
    }
  }
}

// ═══════════════════════════════════════════════════════════
// Run
// ═══════════════════════════════════════════════════════════

console.log('=== Practice Test Mathematical Verification ===');
console.log('Checking practiceTest1.js through practiceTest12.js\n');

for (let i = 1; i <= 12; i++) {
  console.log(`Processing practiceTest${i}.js ...`);
  processTest(i);
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total questions checked: ${totalQuestions}`);
console.log(`  Multiple-choice: ${totalMC}`);
console.log(`  Fill-in: ${totalFillIn}`);
console.log(`\nFindings: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n=== ALL FINDINGS ===\n');
  const unique = [...new Set(issues)];
  for (const i of unique) { console.log(i); console.log(''); }
  if (unique.length < issues.length)
    console.log(`(${issues.length - unique.length} duplicate entries removed)`);
} else {
  console.log('\nNo issues found.');
}

console.log('\n=== END ===');
