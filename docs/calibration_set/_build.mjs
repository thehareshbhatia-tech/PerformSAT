// Builder script — produces calibration items.json and .answer_key.json
// This is a build artifact that will be deleted after the calibration set is generated.
import fs from 'fs';

const REPO = '/Users/hareshbhatia/PerformSAT';
const OUT_DIR = '/Users/hareshbhatia/PerformSAT/.claude/worktrees/agent-a6b5f7b7966ef3dd6/docs/calibration_set';

const bank = JSON.parse(fs.readFileSync(`${REPO}/scripts/generated/cbEducatorQBank.json`, 'utf8'));
const idx = JSON.parse(fs.readFileSync(`${REPO}/scripts/generated/cbEducatorQBankIndex.json`, 'utf8'));

// Maps for common natural-language fractions (e.g. "six sevenths" → \frac{6}{7})
const NUM_WORDS = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15 };
const ORD_WORDS = { half:2, third:3, fourth:4, fifth:5, sixth:6, seventh:7, eighth:8, ninth:9, tenth:10, eleventh:11, twelfth:12, thirteenth:13, fourteenth:14, fifteenth:15, sixteenth:16, twentieth:20, hundredth:100 };

function ms2tex(s) {
  if (s == null) return '';
  let t = s;
  const replace = (re, sub) => { t = t.replace(re, sub); };
  // Natural-language fractions: "X Y(s)" e.g. "one half", "two thirds", "six sevenths"
  // Match num word + ord word optionally with trailing 's'
  const numAlt = Object.keys(NUM_WORDS).join('|');
  const ordAlt = Object.keys(ORD_WORDS).join('|');
  const fracRe = new RegExp(`\\b(${numAlt})\\s+(${ordAlt})s?\\b`, 'gi');
  replace(fracRe, (_, n, d) => `\\frac{${NUM_WORDS[n.toLowerCase()]}}{${ORD_WORDS[d.toLowerCase()]}}`);
  // "X over Y" alt phrasing
  replace(/\b(\d+)\s+over\s+(\d+)\b/g, '\\frac{$1}{$2}');
  replace(/\bpi\b/g, '\\pi');
  replace(/\btheta\b/g, '\\theta');
  replace(/\balpha\b/g, '\\alpha');
  replace(/\bbeta\b/g, '\\beta');
  for (let i = 0; i < 6; i++) replace(/StartFraction\s+([^]+?)\s+Over\s+([^]+?)\s+EndFraction/g, '\\frac{$1}{$2}');
  for (let i = 0; i < 4; i++) {
    replace(/RootIndex\s+(\d+)\s+StartRoot\s+([^]+?)\s+EndRoot/g, '\\sqrt[$1]{$2}');
    replace(/StartRoot\s+([^]+?)\s+EndRoot/g, '\\sqrt{$1}');
  }
  for (let i = 0; i < 3; i++) replace(/StartAbsoluteValue\s+([^]+?)\s+EndAbsoluteValue/g, '\\left| $1 \\right|');
  for (let i = 0; i < 4; i++) {
    replace(/Superscript\s+([^\s]+?)\s+Baseline/g, '^{$1}');
    replace(/Superscript\s+left parenthesis\s+([^]+?)\s+right parenthesis\s+Baseline/g, '^{($1)}');
  }
  replace(/\bsquared\b/g, '^{2}');
  replace(/\bcubed\b/g, '^{3}');
  replace(/Subscript\s+([^\s]+?)\s+Baseline/g, '_{$1}');
  replace(/\bsine\b/g, '\\sin');
  replace(/\bcosine\b/g, '\\cos');
  replace(/\btangent\b/g, '\\tan');
  replace(/\bcot(an|angent)?\b/g, '\\cot');
  replace(/\bsecant\b/g, '\\sec');
  replace(/\bcosecant\b/g, '\\csc');
  replace(/\bnatural log of\b/g, '\\ln');
  replace(/\blogarithm of\b/g, '\\log');
  // Compound comparisons FIRST (longest match wins). These must run before "less than"/"equals".
  replace(/\s*greater than or equal to\s*/g, ' \\geq ');
  replace(/\s*greater than or equals?\s*/g, ' \\geq ');
  replace(/\s*less than or equal to\s*/g, ' \\leq ');
  replace(/\s*less than or equals?\s*/g, ' \\leq ');
  replace(/\s*not equal to\s*/g, ' \\neq ');
  replace(/\s*not equals?\s*/g, ' \\neq ');
  replace(/\s*approximately equals?\s*/g, ' \\approx ');
  replace(/\s*plus or minus\s*/g, ' \\pm ');
  // Then atomic comparisons
  replace(/\s+greater than\s+/g, ' > ');
  replace(/\s+less than\s+/g, ' < ');
  replace(/\s+plus\s+/g, ' + ');
  replace(/\s+minus\s+/g, ' - ');
  replace(/\s+times\s+/g, ' \\cdot ');
  replace(/\s+divided by\s+/g, ' \\div ');
  replace(/\s+equals\s+/g, ' = ');
  replace(/\bleft parenthesis\b/g, '(');
  replace(/\bright parenthesis\b/g, ')');
  replace(/\bleft bracket\b/g, '[');
  replace(/\bright bracket\b/g, ']');
  replace(/\bleft brace\b/g, '\\{');
  replace(/\bright brace\b/g, '\\}');
  replace(/\bupper\s+([A-Z])\b/g, '$1');
  replace(/\bnegative\s+/g, '-');
  replace(/(\d+)\s+degrees?\b/g, '$1^{\\circ}');
  // standalone "degree(s)" after a closing paren
  replace(/\)\s+degrees?\b/g, ')^{\\circ}');
  replace(/(\d+)\s+percent\b/g, '$1\\%');
  // "% sign" leak from screen-reader phrasing
  replace(/\\%\s+sign\b/g, '\\%');
  replace(/\bpercent sign\b/g, '\\%');
  // HTML numeric entities for common Unicode chars
  replace(/&#x02212;/g, '-');     // U+2212 minus sign
  replace(/&#x0002B;/g, '+');     // plus
  replace(/&#x000B7;/g, '\\cdot ');
  replace(/&#x000D7;/g, '\\times ');
  replace(/&#x000F7;/g, '\\div ');
  replace(/&#x000B0;/g, '^{\\circ}');
  replace(/&#x002265;/g, '\\geq ');
  replace(/&#x002264;/g, '\\leq ');
  replace(/&#x002260;/g, '\\neq ');
  replace(/&#x000B1;/g, '\\pm ');
  replace(/&#x003C0;/g, '\\pi ');
  // Generic decimal entities
  replace(/&#x[0-9a-fA-F]+;/g, '?');
  replace(/&#\d+;/g, '?');
  replace(/&nbsp;/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

// stemPlain uses [...] as math delimiters but bracket pairs may contain ] characters from
// constructs like "left bracket"; the source [ ... ] markers are top-level only. We handle
// nested by splitting on top-level brackets.
function splitMathSegments(s) {
  // Top-level [...] markers. "left bracket"/"right bracket" inside MathSpeak does not produce
  // a real "[" character, so a simple regex with non-greedy + balanced split works.
  const out = [];
  let i = 0, depth = 0, start = 0, mathStart = -1;
  while (i < s.length) {
    const c = s[i];
    if (c === '[' && depth === 0) {
      out.push({ text: false, content: s.slice(start, i) });
      mathStart = i + 1;
      depth = 1;
    } else if (c === '[' && depth > 0) {
      depth++;
    } else if (c === ']' && depth > 0) {
      depth--;
      if (depth === 0) {
        out.push({ text: true, content: s.slice(mathStart, i) });
        // mark the next text segment to start after the closing bracket
        start = i + 1;
      }
    }
    i++;
  }
  out.push({ text: false, content: s.slice(start) });
  return out;
}

// Decode HTML entities; used both inside and outside math segments.
function decodeEntitiesText(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/&#x02212;/gi, '-')
    .replace(/&#x0002B;/gi, '+')
    .replace(/&#x000B7;/gi, '\\cdot ')
    .replace(/&#x000D7;/gi, '\\times ')
    .replace(/&#x000F7;/gi, '\\div ')
    .replace(/&#x000B0;/gi, '°')
    .replace(/&#x002265;/gi, '\\geq ')
    .replace(/&#x002264;/gi, '\\leq ')
    .replace(/&#x002260;/gi, '\\neq ')
    .replace(/&#x000B1;/gi, '\\pm ')
    .replace(/&#x003C0;/gi, '\\pi ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stemToText(stemPlain) {
  if (!stemPlain) return '';
  const decoded = decodeEntitiesText(stemPlain);
  const segs = splitMathSegments(decoded);
  return segs.map(seg => seg.text ? ('$' + ms2tex(seg.content) + '$') : seg.content)
    .join('').replace(/\s+/g, ' ').trim();
}
function optToText(contentPlain) {
  if (!contentPlain) return '';
  return stemToText(contentPlain);
}

const TARGETS = [
  { domain: 'Algebra', easy: 2, medium: 2, hard: 1 },
  { domain: 'Advanced Math', easy: 1, medium: 2, hard: 2 },
  { domain: 'Problem-Solving and Data Analysis', easy: 2, medium: 2, hard: 1 },
  { domain: 'Geometry and Trigonometry', easy: 1, medium: 2, hard: 2 }
];

const buckets = {};
for (const meta of idx) {
  const full = bank.items[meta.external_id];
  if (!full || !full.answerOptions || full.type !== 'mcq' || !full.stemHtml) continue;
  if (!full.stemPlain || full.stemPlain.length < 30) continue;
  if (full.stemPlain.length > 400) continue;
  if (/\b(graph|figure|shown|table)\s/i.test(full.stemPlain)) continue;
  // Reject items whose stemPlain has no math delimiters [...] OR has bare HTML entities;
  // those indicate the stem rendering layer dropped math markup.
  if (!/\[/.test(full.stemPlain)) continue;
  if (full.stemPlain.includes('&#') || full.stemPlain.includes('&amp;')) continue;
  const key = `${meta.primary_class_cd_desc}|${meta.difficulty}`;
  if (!buckets[key]) buckets[key] = [];
  buckets[key].push({ meta, full });
}
for (const key of Object.keys(buckets)) {
  buckets[key].sort((a, b) => a.full.stemPlain.length - b.full.stemPlain.length);
}

// Quality check: after conversion, the stem and options should not contain raw MathSpeak
// leftovers like "Start...", "End...", "Superscript", "Baseline", etc.
const MATHSPEAK_RESIDUE = /\b(Start|End|Superscript|Subscript|Baseline|RootIndex|StartFraction|EndFraction|StartRoot|EndRoot|left parenthesis|right parenthesis|left bracket|right bracket|left brace|right brace|StartLayout|EndLayout|StartBinomialOrMatrix|EndBinomialOrMatrix|ModifyingAbove|ModifyingBelow|StartUnderOver|UnderOver|RowZ|2nd Row|sign\b)\b/;
// Bare math tokens that mean we missed wrapping
const BARE_MATH_TOKEN = /\b(comma|equals|plus or minus|approximately equals|or equals|less than or|greater than or|not equals|alttext)\b/i;
// Also reject natural-language fractions that didn't translate (e.g. "one eighty fourth")
const NATLANG_FRAC = /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\s+(eight|seven|six|five|four|three|two|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred)\s+(half|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|fifteenth|twentieth|hundredth)\b/i;
const ENTITY_LEAK = /&#x?[0-9a-fA-F]+;|&[a-zA-Z]+;/;

function passesQualityGate(stem, choices) {
  if (MATHSPEAK_RESIDUE.test(stem)) return false;
  if (NATLANG_FRAC.test(stem)) return false;
  if (ENTITY_LEAK.test(stem)) return false;
  if (BARE_MATH_TOKEN.test(stem)) return false;
  for (const c of choices) {
    if (MATHSPEAK_RESIDUE.test(c.text)) return false;
    if (NATLANG_FRAC.test(c.text)) return false;
    if (ENTITY_LEAK.test(c.text)) return false;
    if (BARE_MATH_TOKEN.test(c.text)) return false;
  }
  return true;
}

const cbItems = [];
const usedSkills = new Set();
for (const target of TARGETS) {
  for (const [diff, count, label] of [['E', target.easy, 'easy'], ['M', target.medium, 'medium'], ['H', target.hard, 'hard']]) {
    const bucket = buckets[`${target.domain}|${diff}`] || [];
    let picked = 0, i = 0;
    while (picked < count && i < bucket.length) {
      const cand = bucket[i++];
      const skillKey = cand.meta.skill_desc;
      if (usedSkills.has(skillKey)) continue;
      // Run conversion + quality gate
      const stem = stemToText(cand.full.stemPlain);
      const choices = cand.full.answerOptions.map(o => ({ id: o.letter, text: optToText(o.contentPlain) }));
      if (!passesQualityGate(stem, choices)) continue;
      usedSkills.add(skillKey);
      cbItems.push({ ...cand, _stem: stem, _choices: choices, claimedDifficulty: label, claimedDomain: target.domain });
      picked++;
    }
    let j = 0;
    while (picked < count && j < bucket.length) {
      const cand = bucket[j++];
      const stem = stemToText(cand.full.stemPlain);
      const choices = cand.full.answerOptions.map(o => ({ id: o.letter, text: optToText(o.contentPlain) }));
      if (!passesQualityGate(stem, choices)) continue;
      cbItems.push({ ...cand, _stem: stem, _choices: choices, claimedDifficulty: label, claimedDomain: target.domain });
      picked++;
    }
  }
}

console.log('CB items picked:', cbItems.length);

const cbBuilt = cbItems.map((c) => {
  return {
    _source: 'CB',
    _qbankId: c.meta.external_id,
    _band: c.meta.score_band_range_cd,
    _skill: c.meta.skill_desc,
    stem: c._stem,
    choices: c._choices,
    correctAnswer: c.full.correctAnswer[0],
    claimedDifficulty: c.claimedDifficulty,
    claimedDomain: c.claimedDomain
  };
});

const SKILL_TO_DOMAIN = {
  'word-problems': 'Algebra', 'solving-equations': 'Algebra', 'linear-functions': 'Algebra',
  'slope': 'Algebra', 'systems-of-equations': 'Algebra', 'function-interpretation': 'Algebra',
  'quadratic-equations': 'Advanced Math', 'polynomial-operations': 'Advanced Math',
  'factoring': 'Advanced Math', 'discriminant': 'Advanced Math', 'vertex-form': 'Advanced Math',
  'exponent-rules': 'Advanced Math', 'exponential-functions': 'Advanced Math',
  'rational-expressions': 'Advanced Math', 'radical-expressions': 'Advanced Math',
  'percents': 'Problem-Solving and Data Analysis', 'ratios': 'Problem-Solving and Data Analysis',
  'two-way-tables': 'Problem-Solving and Data Analysis', 'probability': 'Problem-Solving and Data Analysis',
  'statistics': 'Problem-Solving and Data Analysis', 'scatterplots': 'Problem-Solving and Data Analysis',
  'margin-of-error': 'Problem-Solving and Data Analysis',
  'angles': 'Geometry and Trigonometry', 'area': 'Geometry and Trigonometry',
  'volume': 'Geometry and Trigonometry', 'surface-area': 'Geometry and Trigonometry',
  'circle-equations': 'Geometry and Trigonometry', 'coordinate-geometry': 'Geometry and Trigonometry',
  'similar-triangles': 'Geometry and Trigonometry', 'triangles': 'Geometry and Trigonometry',
  'trigonometry': 'Geometry and Trigonometry'
};
function inferDomain(skills = []) {
  for (const s of skills) if (SKILL_TO_DOMAIN[s]) return SKILL_TO_DOMAIN[s];
  return 'Algebra';
}
function loadTest(name) {
  let code = fs.readFileSync(`${REPO}/src/data/practiceTests/${name}.js`, 'utf8');
  code = code.replace(/export const (\w+)/g, 'globalThis.$1');
  code = code.replace(/export default [^;]+;?/g, '');
  eval(code);
  return globalThis[name];
}

// Per the lane plan we sample from M1+M2 of practiceTests 1-3 first; if a (domain, difficulty)
// cell is empty there, we widen to PT 4-12. Most picks come from PT 1-3.
const PRIMARY_TESTS = ['practiceTest1', 'practiceTest2', 'practiceTest3'];
const FALLBACK_TESTS = ['practiceTest4', 'practiceTest5', 'practiceTest6', 'practiceTest7', 'practiceTest8', 'practiceTest9', 'practiceTest10', 'practiceTest11', 'practiceTest12'];

function buildPool(testNames, primary) {
  const out = [];
  for (let ti = 0; ti < testNames.length; ti++) {
    const t = loadTest(testNames[ti]);
    for (const mod of t.modules) {
      for (const q of mod.questions) {
        if (q.type !== 'multiple-choice') continue;
        out.push({ testName: testNames[ti], module: mod.id, primary, ...q, domain: inferDomain(q.skills || []) });
      }
    }
  }
  return out;
}
const psPrimary = buildPool(PRIMARY_TESTS, true);
const psFallback = buildPool(FALLBACK_TESTS, false);
const psPool = [...psPrimary, ...psFallback];
console.log('PS pool size (primary + fallback):', psPrimary.length, '+', psFallback.length);

// Two-tier buckets: prefer items from primary tests; fall back to PT 4-12 only if needed
const psBuckets = {}; // primary
const psBucketsFB = {}; // fallback
for (const q of psPool) {
  const k = `${q.domain}|${q.difficulty}`;
  if (q.primary) {
    if (!psBuckets[k]) psBuckets[k] = [];
    psBuckets[k].push(q);
  } else {
    if (!psBucketsFB[k]) psBucketsFB[k] = [];
    psBucketsFB[k].push(q);
  }
}

function pseudoShuffle(arr, seed) {
  const a = arr.slice();
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const psTargets = [
  { domain: 'Algebra', easy: 2, medium: 2, hard: 1 },
  { domain: 'Advanced Math', easy: 1, medium: 2, hard: 2 },
  { domain: 'Problem-Solving and Data Analysis', easy: 2, medium: 2, hard: 1 },
  { domain: 'Geometry and Trigonometry', easy: 1, medium: 2, hard: 2 }
];

const psPicked = [];
const usedIds = new Set();
let seed = 42;
for (const t of psTargets) {
  for (const [diff, count, label] of [['easy', t.easy, 'easy'], ['medium', t.medium, 'medium'], ['hard', t.hard, 'hard']]) {
    const primary = psBuckets[`${t.domain}|${diff}`] || [];
    const fallback = psBucketsFB[`${t.domain}|${diff}`] || [];
    const shuffledPrimary = pseudoShuffle(primary, seed += 11);
    const shuffledFallback = pseudoShuffle(fallback, seed += 11);
    let picked = 0;
    for (const q of [...shuffledPrimary, ...shuffledFallback]) {
      const key = `${q.testName}|${q.module}|${q.id}`;
      if (usedIds.has(key)) continue;
      usedIds.add(key);
      psPicked.push({ ...q, claimedDifficulty: label, claimedDomain: t.domain });
      picked++;
      if (picked >= count) break;
    }
    if (picked < count) console.warn(`UNDERFILLED: ${t.domain} ${diff}: got ${picked}/${count}`);
  }
}

console.log('PS items picked:', psPicked.length);

// Decode common HTML entities that may appear in PerformSAT stems
function decodeEntities(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/&#x02212;/g, '-')
    .replace(/&#x0002B;/g, '+')
    .replace(/&#x000B7;/g, '\\cdot ')
    .replace(/&#x000D7;/g, '\\times ')
    .replace(/&#x000F7;/g, '\\div ')
    .replace(/&#x000B0;/g, '^{\\circ}')
    .replace(/&#x002265;/g, '\\geq ')
    .replace(/&#x002264;/g, '\\leq ')
    .replace(/&#x002260;/g, '\\neq ')
    .replace(/&#x000B1;/g, '\\pm ')
    .replace(/&#x003C0;/g, '\\pi ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

const psBuilt = psPicked.map((q) => ({
  _source: 'PerformSAT',
  _testName: q.testName, _module: q.module, _qid: q.id,
  _skills: q.skills || [],
  stem: decodeEntities(q.question),
  choices: q.choices.map(c => ({ id: c.id, text: decodeEntities(c.text) })),
  correctAnswer: q.correctAnswer,
  claimedDifficulty: q.claimedDifficulty,
  claimedDomain: q.claimedDomain
}));

const all = pseudoShuffle([...cbBuilt, ...psBuilt], 12345);
const finalItems = all.map((it, i) => ({ id: 'item-' + String(i + 1).padStart(3, '0'), ...it }));

const anonymized = finalItems.map(it => {
  const { _source, _qbankId, _band, _skill, _testName, _module, _qid, _skills, ...clean } = it;
  return clean;
});
const answerKey = finalItems.map(it => ({
  id: it.id,
  source: it._source,
  qbankId: it._qbankId || null,
  band: it._band || null,
  cbSkill: it._skill || null,
  perfTest: it._testName || null,
  perfModule: it._module || null,
  perfQid: it._qid || null,
  perfSkills: it._skills || null,
  claimedDifficulty: it.claimedDifficulty,
  claimedDomain: it.claimedDomain,
  correctAnswer: it.correctAnswer
}));

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(`${OUT_DIR}/items.json`, JSON.stringify(anonymized, null, 2));
fs.writeFileSync(`${OUT_DIR}/.answer_key.json`, JSON.stringify(answerKey, null, 2));

console.log('Wrote items.json with', anonymized.length, 'items');

const summary = { CB: 0, PS: 0, byDomain: {}, byDifficulty: {} };
for (const it of finalItems) {
  if (it._source === 'CB') summary.CB++; else summary.PS++;
  summary.byDomain[`${it.claimedDomain}|${it._source}`] = (summary.byDomain[`${it.claimedDomain}|${it._source}`] || 0) + 1;
  summary.byDifficulty[`${it.claimedDifficulty}|${it._source}`] = (summary.byDifficulty[`${it.claimedDifficulty}|${it._source}`] || 0) + 1;
}
console.log(JSON.stringify(summary, null, 2));
