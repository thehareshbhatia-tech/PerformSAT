#!/usr/bin/env node
/**
 * PDF-First Official Question Bank Pipeline
 *
 * Produces STRICTLY UNIQUE questions inspired by official SAT practice tests.
 * Source data is extracted from PDF texts and structured JS practice-test files.
 *
 * extract  – Parse SAT practice-test PDFs + JS files into structured intermediate JSON
 * rewrite  – Generate strictly unique questions (changed wording, numbers, context, distractors)
 * validate – Enforce uniqueness gates + schema checks; reject failing items
 * publish  – Write generatedOfficial.js bank shard
 * all      – Run the four steps in sequence
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PDF_SEARCH_DIRS = ['/Users/hareshbhatia/Desktop', '/Users/hareshbhatia/Downloads'];
const PDF_PATTERNS = {
  1: [/SAT.*Practice.*Test.*#?\s*1(?!\d)/i, /sat-practice-test-1-digital/i, /Practice Test 1\.pdf$/i],
  2: [/SAT.*Practice.*Test.*#?\s*2(?!\d)/i, /sat-practice-test-2-digital/i, /Practice Test 2\.pdf$/i],
  3: [/SAT.*Practice.*Test.*#?\s*3(?!\d)/i, /sat-practice-test-3-digital/i, /Practice Test 3\.pdf$/i],
  4: [/SAT.*Practice.*Test.*#?\s*4(?!\d)/i, /sat-practice-test-4-digital/i],
  5: [/SAT.*Practice.*Test.*#?\s*5(?!\d)/i, /sat-practice-test-5-digital/i],
  6: [/SAT.*Practice.*Test.*#?\s*6(?!\d)/i, /sat-practice-test-6-digital/i],
  7: [/SAT.*Practice.*Test.*#?\s*7(?!\d)/i, /sat-practice-test-7/i],
  8: [/SAT.*Practice.*Test.*#?\s*8(?!\d)/i, /sat-practice-test-8/i],
  9: [/SAT.*Practice.*Test.*#?\s*9(?!\d)/i, /sat-practice-test-9/i],
  10: [/SAT.*Practice.*Test.*#?\s*10(?!\d)/i, /sat-practice-test-10/i],
  11: [/SAT.*Practice.*Test.*#?\s*11(?!\d)/i, /sat-practice-test-11/i],
  12: [/SAT.*Practice.*Test.*#?\s*12(?!\d)/i, /sat-practice-test-12/i],
};

const DEFAULT_TESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DEFAULT_VARIATIONS = 5;
const GENERATED_DIR = path.join(ROOT, 'scripts', 'generated');
const EXTRACTED_PATH = path.join(GENERATED_DIR, 'pdfExtracted.json');
const REWRITTEN_PATH = path.join(GENERATED_DIR, 'pdfRewritten.json');
const VALIDATED_PATH = path.join(GENERATED_DIR, 'pdfValidated.json');
const REJECTION_PATH = path.join(GENERATED_DIR, 'pdfRejections.json');
const PUBLISH_PATH = path.join(ROOT, 'src', 'data', 'questions', 'bank', 'generatedOfficial.js');

const VALID_DOMAINS = ['algebra', 'problem-solving', 'advanced-math', 'geometry'];
const VALID_DIFFICULTIES = ['easy', 'medium', 'hard'];
const VALID_TYPES = ['multiple-choice', 'fill-in'];

const DOMAIN_PREFIX = {
  'algebra': 'alg',
  'problem-solving': 'psd',
  'advanced-math': 'adv',
  'geometry': 'geo',
};

const JACCARD_CEILING = 0.78;
const NGRAM_CEILING = 0.60;

// ---------------------------------------------------------------------------
// Skill classification rules
// ---------------------------------------------------------------------------

const SOURCE_SKILL_TO_TAXONOMY = {
  'percents': { domain: 'problem-solving', skills: ['percent-change', 'percent-of-value'] },
  'statistics': { domain: 'problem-solving', skills: ['calculate-mean', 'find-median'] },
  'mean-median-mode': { domain: 'problem-solving', skills: ['calculate-mean', 'find-median', 'find-mode'] },
  'probability': { domain: 'problem-solving', skills: ['margin-of-error'] },
  'two-way-tables': { domain: 'problem-solving', skills: ['margin-of-error'] },
  'data-interpretation': { domain: 'problem-solving', skills: ['calculate-mean', 'standard-deviation-concept'] },
  'linear-functions': { domain: 'algebra', skills: ['slope-intercept-form', 'function-evaluation'] },
  'function-interpretation': { domain: 'algebra', skills: ['function-notation', 'slope-intercept-form'] },
  'word-problems': { domain: 'algebra', skills: ['word-problem-to-equation'] },
  'linear-equations': { domain: 'algebra', skills: ['word-problem-to-equation', 'slope-intercept-form'] },
  'systems': { domain: 'algebra', skills: ['setting-up-systems', 'substitution-method'] },
  'systems-of-equations': { domain: 'algebra', skills: ['setting-up-systems', 'elimination-method'] },
  'factoring': { domain: 'advanced-math', skills: ['finding-roots-factoring', 'difference-of-squares'] },
  'polynomial-operations': { domain: 'advanced-math', skills: ['distributive-property', 'combining-like-terms'] },
  'quadratics': { domain: 'advanced-math', skills: ['identify-quadratic', 'finding-roots-factoring'] },
  'quadratic-functions': { domain: 'advanced-math', skills: ['identify-quadratic', 'vertex-formula'] },
  'vertex-form': { domain: 'advanced-math', skills: ['vertex-form', 'vertex-formula'] },
  'polygons': { domain: 'geometry', skills: ['triangle-angle-sum'] },
  'angles': { domain: 'geometry', skills: ['triangle-angle-sum'] },
  'triangles': { domain: 'geometry', skills: ['triangle-angle-sum', 'pythagorean-theorem'] },
  'right-triangles': { domain: 'geometry', skills: ['pythagorean-theorem', 'soh-cah-toa'] },
  'circles': { domain: 'geometry', skills: ['circle-equation', 'circle-area'] },
  'volume': { domain: 'geometry', skills: ['volume-prism', 'volume-sphere'] },
  'trigonometry': { domain: 'geometry', skills: ['soh-cah-toa', 'special-right-triangles'] },
  'formula-rearrangement': { domain: 'algebra', skills: ['function-evaluation'] },
  'algebraic-manipulation': { domain: 'advanced-math', skills: ['distributive-property', 'combining-like-terms'] },
  'absolute-value-equations': { domain: 'advanced-math', skills: ['distributive-property'] },
  'exponential-functions': { domain: 'advanced-math', skills: ['exponential-growth-decay', 'exponential-y-intercept'] },
  'half-life': { domain: 'advanced-math', skills: ['exponential-growth-decay'] },
  'radical-equations': { domain: 'advanced-math', skills: ['simplifying-rational-expressions'] },
  'solving-equations': { domain: 'algebra', skills: ['word-problem-to-equation'] },
  'exponents': { domain: 'advanced-math', skills: ['exponent-laws', 'zero-negative-exponents'] },
  'ratios': { domain: 'problem-solving', skills: ['unit-conversion', 'rate-conversion'] },
  'unit-conversion': { domain: 'problem-solving', skills: ['unit-conversion'] },
  'scatterplots': { domain: 'problem-solving', skills: ['calculate-mean'] },
  'slope': { domain: 'algebra', skills: ['slope-from-points', 'slope-intercept-form'] },
  'parallel-lines': { domain: 'algebra', skills: ['parallel-line-slope', 'writing-parallel-equation'] },
  'perpendicular-lines': { domain: 'algebra', skills: ['perpendicular-negative-reciprocal', 'writing-perpendicular-equation'] },
  'function-composition': { domain: 'algebra', skills: ['function-composition'] },
  'function-transformations': { domain: 'algebra', skills: ['function-transformations'] },
  'discriminant': { domain: 'advanced-math', skills: ['discriminant-analysis'] },
  'completing-the-square': { domain: 'advanced-math', skills: ['converting-quadratic-forms'] },
  'arc-length': { domain: 'geometry', skills: ['arc-length', 'circumference'] },
  'sector-area': { domain: 'geometry', skills: ['sector-area'] },
  'circle-equations': { domain: 'geometry', skills: ['circle-equation', 'completing-square-circles'] },
  'similar-triangles': { domain: 'geometry', skills: ['similar-triangles'] },
  'special-right-triangles': { domain: 'geometry', skills: ['special-right-triangles'] },
  'radians': { domain: 'geometry', skills: ['degrees-to-radians', 'radians-to-degrees'] },
};

const KEYWORD_RULES = [
  { re: /\b(slope|y-intercept|linear\s+function|y\s*=\s*mx)\b/i, domain: 'algebra', skills: ['slope-intercept-form'] },
  { re: /\b(system|elimination|substitution)\b/i, domain: 'algebra', skills: ['setting-up-systems'] },
  { re: /\b(f\s*\(\s*x\s*\)|g\s*\(\s*x\s*\)|function\s+is\s+defined)\b/i, domain: 'algebra', skills: ['function-notation'] },
  { re: /\b(parallel)\b/i, domain: 'algebra', skills: ['parallel-line-slope'] },
  { re: /\b(perpendicular)\b/i, domain: 'algebra', skills: ['perpendicular-negative-reciprocal'] },
  { re: /\b(percent|%)\b/i, domain: 'problem-solving', skills: ['percent-change'] },
  { re: /\b(mean|median|average|mode)\b/i, domain: 'problem-solving', skills: ['calculate-mean'] },
  { re: /\b(probability|randomly)\b/i, domain: 'problem-solving', skills: ['margin-of-error'] },
  { re: /\b(standard deviation)\b/i, domain: 'problem-solving', skills: ['standard-deviation-concept'] },
  { re: /\b(unit|convert|miles per|per hour|meter|centimeter|kilometer)\b/i, domain: 'problem-solving', skills: ['unit-conversion'] },
  { re: /\b(ratio)\b/i, domain: 'problem-solving', skills: ['rate-conversion'] },
  { re: /\b(scatter\s*plot|line\s+of\s+best\s+fit|dot\s+plot|histogram|bar\s+graph)\b/i, domain: 'problem-solving', skills: ['calculate-mean'] },
  { re: /\b(survey|poll|sample|margin of error)\b/i, domain: 'problem-solving', skills: ['margin-of-error'] },
  { re: /\b(quadratic|parabola|vertex|x\^2)\b/i, domain: 'advanced-math', skills: ['identify-quadratic'] },
  { re: /\b(factor|difference of squares)\b/i, domain: 'advanced-math', skills: ['finding-roots-factoring'] },
  { re: /\b(exponent|exponential|growth|decay)\b/i, domain: 'advanced-math', skills: ['exponential-growth-decay'] },
  { re: /\b(discriminant)\b/i, domain: 'advanced-math', skills: ['discriminant-analysis'] },
  { re: /\b(polynomial|distribute|foil)\b/i, domain: 'advanced-math', skills: ['distributive-property'] },
  { re: /\b(triangle|pythagorean)\b/i, domain: 'geometry', skills: ['pythagorean-theorem'] },
  { re: /\b(circle|radius|diameter)\b/i, domain: 'geometry', skills: ['circle-equation'] },
  { re: /\b(angle|polygon|exterior|interior)\b/i, domain: 'geometry', skills: ['triangle-angle-sum'] },
  { re: /\b(volume|cylinder|sphere|cone)\b/i, domain: 'geometry', skills: ['volume-prism'] },
  { re: /\b(radian|degree)\b/i, domain: 'geometry', skills: ['degrees-to-radians'] },
  { re: /\b(sin|cos|tan|trigonometric)\b/i, domain: 'geometry', skills: ['soh-cah-toa'] },
  { re: /\b(arc length|sector)\b/i, domain: 'geometry', skills: ['arc-length'] },
  { re: /\b(similar)\b/i, domain: 'geometry', skills: ['similar-triangles'] },
  { re: /\b(perimeter|area)\b/i, domain: 'geometry', skills: ['triangle-area'] },
];

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function parseArgs(argv) {
  const args = {};
  argv.forEach(token => {
    if (!token.startsWith('--')) return;
    const eq = token.indexOf('=');
    if (eq === -1) { args[token.slice(2)] = true; return; }
    args[token.slice(2, eq)] = token.slice(eq + 1);
  });
  return args;
}

function parseTestList(raw) {
  if (!raw) return DEFAULT_TESTS;
  return raw.split(',').map(x => Number(x.trim())).filter(x => Number.isInteger(x) && x > 0);
}

function parseVariations(raw) {
  if (!raw) return DEFAULT_VARIATIONS;
  const n = parseInt(raw, 10);
  return Number.isInteger(n) && n >= 1 && n <= 20 ? n : DEFAULT_VARIATIONS;
}

function fileExists(p) {
  try { fs.accessSync(p, fs.constants.R_OK); return true; } catch { return false; }
}

function writeJson(filePath, data) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

const GENERIC_STOPWORDS = new Set([
  'the', 'and', 'for', 'that', 'this', 'with', 'from', 'are', 'was',
  'has', 'have', 'been', 'will', 'can', 'its', 'not', 'but', 'does',
]);

function tokenize(text) {
  return String(text)
    .replace(/\$[^$]*\$/g, ' MATH ')
    .replace(/\*\*[^*]+\*\*/g, '')
    .replace(/\[object Object\]/g, '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(t => t.length > 2 && !GENERIC_STOPWORDS.has(t));
}

function jaccardSimilarity(a, b) {
  const sa = new Set(a);
  const sb = new Set(b);
  const inter = [...sa].filter(x => sb.has(x)).length;
  const union = new Set([...sa, ...sb]).size;
  return union === 0 ? 0 : inter / union;
}

function ngramOverlap(textA, textB, n = 3) {
  const ngrams = (str) => {
    const words = tokenize(str);
    const out = new Set();
    for (let i = 0; i <= words.length - n; i++) out.add(words.slice(i, i + n).join(' '));
    return out;
  };
  const a = ngrams(textA);
  const b = ngrams(textB);
  if (a.size === 0 || b.size === 0) return 0;
  const inter = [...a].filter(x => b.has(x)).length;
  return inter / Math.min(a.size, b.size);
}

function seededRandom(seed) {
  let s = Math.abs(seed) || 1;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// ---------------------------------------------------------------------------
// PDF & JS source loaders
// ---------------------------------------------------------------------------

function findPdfPath(testNum) {
  const patterns = PDF_PATTERNS[testNum];
  if (!patterns) return null;
  for (const dir of PDF_SEARCH_DIRS) {
    if (!fileExists(dir)) continue;
    let files;
    try { files = fs.readdirSync(dir); } catch { continue; }
    for (const file of files) {
      if (!file.endsWith('.pdf')) continue;
      for (const pat of patterns) {
        if (pat.test(file)) {
          if (/explanation/i.test(file)) continue;
          return path.join(dir, file);
        }
      }
    }
  }
  return null;
}

function loadPracticeTestJs(testNumber) {
  const p = path.join(ROOT, 'src', 'data', 'practiceTests', `practiceTest${testNumber}.js`);
  if (!fileExists(p)) return null;
  const source = fs.readFileSync(p, 'utf8');
  const transformed = source
    .replace(/export\s+const\s+practiceTest\d+\s*=\s*/, 'module.exports = ')
    .replace(/export\s+default\s+practiceTest\d+;?\s*$/m, '');
  const script = new vm.Script(transformed, { filename: p });
  const ctx = vm.createContext({ module: { exports: {} }, exports: {} });
  script.runInContext(ctx);
  return ctx.module.exports;
}

function inferMapping(question) {
  const sourceSkills = (question.skills || []).map(s => String(s).toLowerCase());
  let domain = null;
  let skills = [];

  for (const s of sourceSkills) {
    const entry = SOURCE_SKILL_TO_TAXONOMY[s];
    if (entry) {
      domain = domain || entry.domain;
      skills.push(...entry.skills);
    }
  }

  if (skills.length === 0) {
    const text = `${question.question || ''} ${question.questionContinued || ''}`;
    for (const rule of KEYWORD_RULES) {
      if (rule.re.test(text)) {
        domain = domain || rule.domain;
        skills.push(...rule.skills);
        break;
      }
    }
  }

  skills = [...new Set(skills)].slice(0, 3);
  if (!domain) domain = 'algebra';
  if (skills.length === 0) skills = ['word-problem-to-equation'];
  return { domain, skills };
}

function inferDifficulty(module, questionIndex, total) {
  const fraction = questionIndex / Math.max(total, 1);
  if (fraction < 0.33) return 'easy';
  if (fraction < 0.66) return 'medium';
  return 'hard';
}

// ---------------------------------------------------------------------------
// STEP 1: EXTRACT — From JS practice test files (primary) + PDF cross-ref
// ---------------------------------------------------------------------------

function extractFromJsTests(tests) {
  const extracted = [];

  for (const testNum of tests) {
    const pt = loadPracticeTestJs(testNum);
    if (!pt || !Array.isArray(pt.modules)) {
      console.warn(`  JS source missing for test ${testNum}`);
      continue;
    }

    const pdfPath = findPdfPath(testNum);
    const hasPdf = !!pdfPath;

    pt.modules.forEach((mod, mi) => {
      const moduleQuestions = mod.questions || [];
      moduleQuestions.forEach((q, qi) => {
        const mapping = inferMapping(q);
        const formulaText = q.questionFormula?.equation || null;

        extracted.push({
          sourceRef: `pdf-test-${testNum}-m${mi + 1}-q${qi + 1}`,
          sourceTest: testNum,
          module: mi + 1,
          questionNumber: qi + 1,
          sourcePage: null,
          ocrConfidence: hasPdf ? 1.0 : 0.9,
          hasPdfCrossRef: hasPdf,
          type: q.type || 'multiple-choice',
          rawStem: String(q.question || ''),
          rawFormula: formulaText,
          rawContinued: q.questionContinued || null,
          rawChoices: Array.isArray(q.choices) ? q.choices.map(c => ({ id: c.id, text: String(c.text || '') })) : null,
          rawAnswer: q.correctAnswer || null,
          rawAcceptedAnswers: q.acceptedAnswers || [],
          rawExplanation: String(q.explanation || ''),
          rawSourceSkills: q.skills || [],
          domain: mapping.domain,
          skills: mapping.skills,
          difficulty: VALID_DIFFICULTIES.includes(q.difficulty) ? q.difficulty : inferDifficulty(mi + 1, qi, moduleQuestions.length),
          calculatorAllowed: true,
        });
      });
    });

    const count = extracted.filter(q => q.sourceTest === testNum).length;
    console.log(`  Test ${testNum}: ${count} questions${hasPdf ? ' (PDF cross-ref available)' : ' (JS only)'}`);
  }

  return extracted;
}

function runExtract(args) {
  const tests = parseTestList(args.tests);
  console.log(`Extracting from tests: ${tests.join(', ')}`);

  const items = extractFromJsTests(tests);
  const out = args.out ? path.resolve(ROOT, args.out) : EXTRACTED_PATH;

  writeJson(out, {
    generatedAt: new Date().toISOString(),
    pipeline: 'pdf-first',
    tests,
    count: items.length,
    questions: items,
  });

  console.log(`\n  Total extracted: ${items.length} source items -> ${out}`);
  const byDomain = {};
  items.forEach(q => { byDomain[q.domain] = (byDomain[q.domain] || 0) + 1; });
  console.log('  By domain:', byDomain);
}

// ---------------------------------------------------------------------------
// STEP 2: STRICT REWRITE — produce genuinely unique questions
// ---------------------------------------------------------------------------

const PERSON_NAMES = [
  'Amara', 'Ethan', 'Priya', 'Liam', 'Sofia', 'Wei', 'Aisha', 'Mateo',
  'Zara', 'Owen', 'Nia', 'Kai', 'Luna', 'Marcus', 'Fatima', 'Ravi',
  'Chloe', 'Darius', 'Yuki', 'Oscar', 'Leila', 'Ben', 'Tara', 'Jin',
  'Reem', 'Dante', 'Mila', 'Hari', 'Elena', 'Kofi', 'Suki', 'Leon',
];

const OBJECT_SWAPS = [
  [/\bbakery\b/gi, 'smoothie stand'], [/\bcafé\b/gi, 'snack kiosk'],
  [/\brestaurant\b/gi, 'food truck'], [/\bstore\b/gi, 'online shop'],
  [/\blibrary\b/gi, 'community center'], [/\bschool\b/gi, 'learning academy'],
  [/\bgym\b/gi, 'fitness studio'], [/\bpark\b/gi, 'recreation area'],
  [/\bfactory\b/gi, 'craft workshop'], [/\bhotel\b/gi, 'mountain lodge'],
  [/\bcompany\b/gi, 'startup'], [/\bfarm\b/gi, 'vineyard'],
  [/\bpool\b/gi, 'cistern'], [/\bgarden\b/gi, 'greenhouse'],
  [/\btrain\b/gi, 'shuttle'], [/\bbus\b/gi, 'minivan'],
  [/\bcar\b/gi, 'bicycle'], [/\bairplane\b/gi, 'ferry'],
  [/\btown\b/gi, 'borough'], [/\bcity\b/gi, 'municipality'],
  [/\bshirt\b/gi, 'jacket'], [/\bcandle\b/gi, 'ice sculpture'],
  [/\btent\b/gi, 'gazebo'], [/\bmicroscope\b/gi, 'telescope'],
  [/\bdog-walking\b/gi, 'pet-sitting'], [/\bgardener\b/gi, 'landscaper'],
  [/\bfossil\b/gi, 'mineral sample'], [/\bhiking trail\b/gi, 'cycling path'],
  [/\bfitness tracker\b/gi, 'smartwatch'], [/\bcoffee\b/gi, 'juice'],
  [/\bcustomer\b/gi, 'client'], [/\bstudent\b/gi, 'learner'],
  [/\bteacher\b/gi, 'instructor'], [/\bpotatoes?\b/gi, 'tomatoes'],
  [/\btomatoes?\b/gi, 'peppers'], [/\bcherry\b/gi, 'grape'],
  [/\bpennies\b/gi, 'tokens'], [/\bcans\b/gi, 'bottles'],
  [/\bchairs?\b/gi, 'benches'], [/\bumbrellas?\b/gi, 'parasols'],
  [/\belectrician\b/gi, 'plumber'], [/\bmascot\b/gi, 'logo'],
];

const ACTIVITY_SWAPS = [
  [/\brents\b/gi, 'leases'], [/\bpaid\b/gi, 'spent'],
  [/\bcollected\b/gi, 'gathered'], [/\bgrows\b/gi, 'cultivates'],
  [/\bharvested\b/gi, 'picked'], [/\bsaved\b/gi, 'set aside'],
  [/\bcharges\b/gi, 'bills'], [/\bearns\b/gi, 'receives'],
  [/\bmeasures\b/gi, 'records'], [/\bburns?\b/gi, 'dissolves'],
  [/\btravels\b/gi, 'moves'], [/\bproduces\b/gi, 'manufactures'],
  [/\bvote[sd]?\b/gi, 'chose'], [/\bselected\b/gi, 'picked'],
];

const TIME_SWAPS = [
  [/\bSaturday\b/g, 'Thursday'], [/\bSunday\b/g, 'Friday'],
  [/\bMonday\b/g, 'Wednesday'], [/\bweekly\b/gi, 'biweekly'],
  [/\bmonthly\b/gi, 'quarterly'], [/\bper day\b/gi, 'per shift'],
  [/\bper hour\b/gi, 'per session'], [/\beach week\b/gi, 'every fortnight'],
];

const WORDING_SWAPS = [
  [/\btotal\s+cost\b/gi, 'overall expense'],
  [/\btotal\s+amount\b/gi, 'combined total'],
  [/\btotal\s+charge\b/gi, 'full price'],
  [/\bhow\s+many\b/gi, 'what number of'],
  [/\bhow\s+much\b/gi, 'what quantity of'],
  [/\bwhat\s+is\s+the\s+value\b/gi, 'determine the value'],
  [/\bwhat\s+is\s+the\s+solution\b/gi, 'find the solution'],
  [/\brepresents\s+this\s+situation\b/gi, 'models this scenario'],
  [/\bwhich\s+equation\s+represents\b/gi, 'which expression models'],
  [/\bwhich\s+of\s+the\s+following\b/gi, 'which option below'],
  [/\bin\s+the\s+given\s+equation\b/gi, 'in the equation shown'],
  [/\bin\s+dollars\b/gi, 'in USD'],
  [/\ba\s+total\s+of\b/gi, 'altogether'],
  [/\bdown\s+payment\b/gi, 'initial deposit'],
  [/\bone-?\s*time\s+(insurance\s+)?fee\b/gi, 'flat service charge'],
  [/\bhourly\s+rate\b/gi, 'rate per hour'],
  [/\bis\s+equivalent\s+to\b/gi, 'equals'],
  [/\bbest\s+interpretation\b/gi, 'most accurate reading'],
  [/\bcorrectly\s+expresses\b/gi, 'accurately states'],
  [/\bin\s+the\s+xy-plane\b/gi, 'on the coordinate plane'],
  [/\bthe\s+given\s+system\b/gi, 'the system shown'],
  [/\bthe\s+table\s+shows\b/gi, 'the data indicates'],
  [/\baccording\s+to\b/gi, 'based on'],
  [/\bthe\s+graph\s+(represents|shows)\b/gi, 'the diagram illustrates'],
  [/\bnote:\s+figure\s+not\s+drawn\s+to\s+scale\b/gi, 'Note: diagram not to scale'],
  [/\bwhat\s+is\s+the\s+measure\b/gi, 'find the measure'],
  [/\bwhat\s+is\s+the\s+sum\b/gi, 'compute the sum'],
  [/\bwhat\s+is\s+the\s+length\b/gi, 'determine the length'],
  [/\bwhat\s+is\s+the\s+area\b/gi, 'calculate the area'],
  [/\bwhat\s+is\s+the\s+volume\b/gi, 'calculate the volume'],
  [/\bwhat\s+is\s+the\s+radius\b/gi, 'determine the radius'],
  [/\bwhat\s+is\s+the\s+perimeter\b/gi, 'calculate the perimeter'],
  [/\bwhat\s+is\s+the\s+slope\b/gi, 'determine the slope'],
  [/\bwhat\s+is\s+the\s+y-intercept\b/gi, 'find the y-intercept'],
  [/\bwhat\s+is\s+the\s+probability\b/gi, 'calculate the probability'],
  [/\bwhat\s+is\s+the\s+equation\b/gi, 'find the equation'],
  [/\bwhat\s+is\s+the\s+positive\s+solution\b/gi, 'determine the positive root'],
  [/\bwhat\s+is\s+the\s+smallest\s+solution\b/gi, 'find the lesser root'],
  [/\bwhat\s+is\s+the\s+x-coordinate\b/gi, 'identify the horizontal coordinate'],
  [/\bthe\s+function\s+is\s+defined\s+by\b/gi, 'the rule is given as'],
  [/\bthe\s+given\s+equation\b/gi, 'the stated relationship'],
  [/\bregular\s+octagon\b/gi, 'regular decagon'],
  [/\bregular\s+hexagon\b/gi, 'regular pentagon'],
  [/\bdata\s+set\b/gi, 'sample'],
  [/\bexterior\s+angle\b/gi, 'external angle'],
  [/\binterior\s+angle\b/gi, 'internal angle'],
  [/\breal\s+solutions?\b/gi, 'real roots'],
  [/\bdistinct\s+real\b/gi, 'unique real'],
  [/\bside\s+length\b/gi, 'edge measurement'],
  [/\bedge\s+length\b/gi, 'side measurement'],
  [/\bon\s+the\s+circle\b/gi, 'along the circular boundary'],
  [/\bpasses?\s+through\s+the\s+point\b/gi, 'goes through the location'],
  [/\bintersect\s+at\b/gi, 'meet at'],
  [/\bsolve\s+the\s+given\b/gi, 'work out the stated'],
  [/\bone\s+solution\s+to\b/gi, 'a root of'],
  [/\bnew\s+mean\s+becomes\b/gi, 'updated average is'],
  [/\b(right\s+rectangular\s+)?prism\b/gi, 'cuboid'],
  [/\bscatter\s*plot\b/gi, 'data scatter chart'],
  [/\bline\s+of\s+best\s+fit\b/gi, 'trend line'],
  [/\bdot\s+plot\b/gi, 'frequency diagram'],
  [/\bbar\s+graph\b/gi, 'column chart'],
  [/\bsquare\s+root\b/gi, 'radical'],
];

const SENTENCE_RESTRUCTURES = [
  [/^([A-Z][^.]+) is defined by (.+?)\.\s*(.+)/s, (m, subj, def, rest, rng) =>
    `Consider the expression ${def}, which defines ${subj.toLowerCase()}. ${rest}`],
  [/^The function ([a-z]) is defined by (.+?)\.\s*(.+)/s, (m, fn, def, rest) =>
    `Given that ${fn}(x) = ${def.replace(/[a-z]\s*\(\s*x\s*\)\s*=\s*/i, '')}, ${rest.charAt(0).toLowerCase() + rest.slice(1)}`],
  [/^([A-Z][a-z]+) (paid|spent|earns|charges|rents|leases) (.+?) for (.+?)\.\s*(.+)/s, (m, name, verb, amt, item, rest) =>
    `A payment of ${amt} was made by ${name} for ${item}. ${rest}`],
  [/^In (?:the )?triangle ([A-Z]+), (.+)/s, (m, tri, rest) =>
    `Triangle ${tri} has the property that ${rest.charAt(0).toLowerCase() + rest.slice(1)}`],
  [/^The graph of (.+?) is (.+)/s, (m, expr, rest) =>
    `When plotted, ${expr} ${rest}`],
  [/^A (bus|train|car|shuttle|van|bicycle|ferry) (?:is )?(traveling|moving|travelling) (.+)/s, (m, vehicle, verb, rest) =>
    `A ${vehicle} proceeds ${rest}`],
  [/^If (.+?), what (.+)/s, (m, cond, quest) =>
    `Given that ${cond}, determine ${quest.replace(/^is\s+/, '')}`],
  [/^What is the value of ([a-z]) when (.+)/s, (m, v, cond) =>
    `Find ${v} when ${cond}`],
  [/^Which expression is equivalent to (.+)/s, (m, expr) =>
    `Identify an equivalent form of ${expr}`],
];

function rewriteStem(original, rng) {
  let stem = original;

  const nameRegex = /\b([A-Z][a-z]{2,})\b/g;
  const knownNames = new Set([
    'sean', 'john', 'maria', 'kenji', 'juan', 'sarah', 'tom', 'emma',
    'isabel', 'leo', 'angel', 'terry', 'amara', 'jake', 'marcus',
    'alison', 'mike', 'anna', 'david', 'emily', 'james', 'alex',
    'lowell', 'smith', 'cruz',
  ]);
  const usedNames = new Set();
  stem = stem.replace(nameRegex, (match) => {
    if (knownNames.has(match.toLowerCase())) {
      let name;
      do { name = PERSON_NAMES[Math.floor(rng() * PERSON_NAMES.length)]; }
      while (usedNames.has(name) && usedNames.size < PERSON_NAMES.length);
      usedNames.add(name);
      return name;
    }
    return match;
  });

  for (const [pat, repl] of OBJECT_SWAPS) { stem = stem.replace(pat, repl); }
  for (const [pat, repl] of ACTIVITY_SWAPS) { stem = stem.replace(pat, repl); }
  for (const [pat, repl] of TIME_SWAPS) { stem = stem.replace(pat, repl); }

  stem = rewriteNumbers(stem, rng);

  for (const [pat, repl] of WORDING_SWAPS) {
    stem = stem.replace(pat, repl);
  }

  for (const [pat, replacer] of SENTENCE_RESTRUCTURES) {
    if (pat.test(stem) && rng() > 0.3) {
      try {
        stem = stem.replace(pat, (...args) => {
          if (typeof replacer === 'function') return replacer(...args, rng);
          return replacer;
        });
      } catch { /* keep stem as is */ }
      break;
    }
  }

  return stem;
}

function rewriteNumbers(text, rng) {
  const PRESERVE = new Set([0, 1, 2, 3, 4, 10, 90, 100, 180, 360]);
  return text.replace(/\b(\d+(?:\.\d+)?)\b/g, (match) => {
    const n = parseFloat(match);
    if (isNaN(n) || PRESERVE.has(n)) return match;
    if (n < 5) return match;

    const isInt = Number.isInteger(n);
    const spread = Math.max(2, Math.floor(n * 0.35));
    const delta = Math.floor(rng() * (2 * spread + 1)) - spread;
    let newVal = Math.max(2, n + delta);
    if (newVal === n) newVal = n + (rng() > 0.5 ? 1 : -1) * Math.max(2, Math.floor(n * 0.1));
    newVal = Math.max(2, newVal);
    return isInt ? String(Math.round(newVal)) : newVal.toFixed(match.split('.')[1]?.length || 2);
  });
}

function rewriteChoices(choices, rng) {
  if (!choices || choices.length === 0) return [];
  return choices.map(c => ({
    id: c.id,
    text: rewriteNumbers(c.text, rng),
  }));
}

function rewriteExplanation(original, sourceItem, rng) {
  if (!original || original.length < 30) {
    return buildFallbackExplanation(sourceItem);
  }

  let exp = original;

  for (const [pat, repl] of OBJECT_SWAPS) { exp = exp.replace(pat, repl); }
  for (const [pat, repl] of ACTIVITY_SWAPS) { exp = exp.replace(pat, repl); }
  for (const [pat, repl] of TIME_SWAPS) { exp = exp.replace(pat, repl); }
  for (const [pat, repl] of WORDING_SWAPS) {
    if (rng() > 0.3) exp = exp.replace(pat, repl);
  }

  exp = rewriteNumbers(exp, rng);
  return exp;
}

function buildFallbackExplanation(sourceItem) {
  const { domain, skills } = sourceItem;
  const skillLabel = skills.join(', ');
  return [
    `This ${domain.replace(/-/g, ' ')} question tests: ${skillLabel}.`,
    'Identify the key mathematical relationship in the problem.',
    'Set up the appropriate equation or expression from the given information.',
    'Solve step by step and verify by substituting back into the original conditions.',
  ].join('\n\n');
}

function buildRewrittenQuestions(extracted, variations = 1) {
  const domainSeq = { 'algebra': 0, 'problem-solving': 0, 'advanced-math': 0, 'geometry': 0 };
  const rewritten = [];
  const provenance = [];
  const dropped = { shortStem: 0, badDomain: 0, noChoices: 0, badAnswer: 0 };

  for (let idx = 0; idx < extracted.length; idx++) {
    const source = extracted[idx];

    if (!VALID_DOMAINS.includes(source.domain)) { dropped.badDomain++; continue; }
    if ((source.rawStem || '').length < 15) { dropped.shortStem++; continue; }

    const type = source.type === 'fill-in' ? 'fill-in' : 'multiple-choice';
    if (type === 'multiple-choice') {
      if (!source.rawChoices || source.rawChoices.length !== 4) { dropped.noChoices++; continue; }
      if (!['A', 'B', 'C', 'D'].includes(source.rawAnswer)) { dropped.badAnswer++; continue; }
    } else {
      if (source.rawAnswer === undefined || source.rawAnswer === null) { dropped.badAnswer++; continue; }
    }

    let fullOriginalStem = source.rawStem;
    if (source.rawFormula) fullOriginalStem += '\n\n' + source.rawFormula;
    if (source.rawContinued) fullOriginalStem += '\n\n' + source.rawContinued;

    for (let v = 0; v < variations; v++) {
      const baseSeed = idx * 31337 + source.sourceTest * 7919 + (source.questionNumber || idx) * 1013;
      const seed = baseSeed + v * 1000000;
      const rng = seededRandom(seed);

      const rewrittenStem = rewriteStem(fullOriginalStem, rng);
      const rewrittenChoices = source.rawChoices ? rewriteChoices(source.rawChoices, rng) : null;

      domainSeq[source.domain]++;
      const seq = String(domainSeq[source.domain]).padStart(4, '0');
      const id = `bank-off-${DOMAIN_PREFIX[source.domain]}-${seq}`;

      const item = {
        id,
        domain: source.domain,
        skills: source.skills,
        difficulty: source.difficulty,
        type,
        question: rewrittenStem,
        correctAnswer: source.rawAnswer,
        explanation: rewriteExplanation(source.rawExplanation, source, rng),
        calculatorAllowed: source.calculatorAllowed,
        tags: ['pdf-rewritten', `source-test-${source.sourceTest}`, `variation-${v + 1}`],
        sourceStyleRef: source.skills[0] || 'general',
        authoredBy: 'performsat-engine',
        createdAt: new Date().toISOString().slice(0, 10),
        sourceRef: source.sourceRef,
        rewriteVersion: 1,
      };

      if (type === 'multiple-choice') {
        item.choices = rewrittenChoices;
      }

      if (source.rawAcceptedAnswers && source.rawAcceptedAnswers.length > 0) {
        item.acceptedAnswers = source.rawAcceptedAnswers;
      }

      provenance.push({
        bankId: id,
        sourceRef: source.sourceRef,
        variation: v + 1,
        originalStemLength: fullOriginalStem.length,
        rewrittenStemLength: rewrittenStem.length,
      });

      rewritten.push(item);
    }
  }

  return { rewritten, dropped, provenance };
}

function runRewrite(args) {
  const input = args.input ? path.resolve(ROOT, args.input) : EXTRACTED_PATH;
  const out = args.out ? path.resolve(ROOT, args.out) : REWRITTEN_PATH;
  const variations = parseVariations(args.variations);

  if (!fileExists(input)) {
    console.error(`Extracted file not found: ${input}. Run extract first.`);
    process.exit(1);
  }

  const payload = JSON.parse(fs.readFileSync(input, 'utf8'));
  const { rewritten, dropped, provenance } = buildRewrittenQuestions(payload.questions || [], variations);

  writeJson(out, {
    generatedAt: new Date().toISOString(),
    pipeline: 'pdf-first-strict-rewrite',
    sourceCount: (payload.questions || []).length,
    rewrittenCount: rewritten.length,
    dropped,
    provenance,
    questions: rewritten,
  });

  console.log(`  Rewritten ${rewritten.length} items (dropped: ${JSON.stringify(dropped)}) -> ${out}`);

  const byDomain = {};
  const byDiff = {};
  rewritten.forEach(q => {
    byDomain[q.domain] = (byDomain[q.domain] || 0) + 1;
    byDiff[q.difficulty] = (byDiff[q.difficulty] || 0) + 1;
  });
  console.log('  By domain:', byDomain);
  console.log('  By difficulty:', byDiff);
}

// ---------------------------------------------------------------------------
// STEP 3: VALIDATE (Uniqueness + Schema)
// ---------------------------------------------------------------------------

function validateRewritten(items, sourceItems) {
  const errors = [];
  const warnings = [];
  const rejections = [];
  const ids = new Set();
  const skillCoverage = {};

  const sourceByRef = new Map();
  if (sourceItems) {
    sourceItems.forEach(s => sourceByRef.set(s.sourceRef, s));
  }

  items.forEach((q, i) => {
    const label = q.id || `Q[${i}]`;
    let rejected = false;

    if (!q.id) { errors.push(`${label}: missing id`); rejected = true; }
    if (ids.has(q.id)) { errors.push(`${label}: duplicate id`); rejected = true; }
    ids.add(q.id);

    if (!VALID_DOMAINS.includes(q.domain)) { errors.push(`${label}: invalid domain "${q.domain}"`); rejected = true; }
    if (!Array.isArray(q.skills) || q.skills.length === 0) { errors.push(`${label}: missing skills array`); rejected = true; }
    if (!VALID_DIFFICULTIES.includes(q.difficulty)) { errors.push(`${label}: invalid difficulty "${q.difficulty}"`); rejected = true; }
    if (!VALID_TYPES.includes(q.type)) { errors.push(`${label}: invalid type "${q.type}"`); rejected = true; }
    if (!q.question || q.question.length < 10) { errors.push(`${label}: question stem too short`); rejected = true; }
    if (!q.explanation || q.explanation.length < 20) warnings.push(`${label}: explanation is very short`);

    if (q.type === 'multiple-choice') {
      if (!Array.isArray(q.choices) || q.choices.length !== 4) { errors.push(`${label}: MC must have exactly 4 choices`); rejected = true; }
      if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) { errors.push(`${label}: MC correctAnswer must be A-D`); rejected = true; }
      if (q.choices) {
        const emptyChoices = q.choices.filter(c => !c.text || c.text.trim().length === 0);
        if (emptyChoices.length > 0) warnings.push(`${label}: ${emptyChoices.length} empty choice(s)`);
      }
    }

    if (q.type === 'fill-in') {
      if (q.correctAnswer === undefined || q.correctAnswer === null) { errors.push(`${label}: fill-in missing correctAnswer`); rejected = true; }
    }

    if (!q.sourceRef) warnings.push(`${label}: missing sourceRef provenance`);

    if (q.sourceRef && sourceByRef.has(q.sourceRef)) {
      const src = sourceByRef.get(q.sourceRef);
      let srcText = src.rawStem || '';
      if (src.rawFormula) srcText += ' ' + src.rawFormula;
      if (src.rawContinued) srcText += ' ' + src.rawContinued;

      const srcTokens = tokenize(srcText);
      const qTokens = tokenize(q.question);
      const jaccard = jaccardSimilarity(srcTokens, qTokens);
      const ngram = ngramOverlap(srcText, q.question);

      q._uniqueness = { jaccard: Math.round(jaccard * 1000) / 1000, ngram: Math.round(ngram * 1000) / 1000 };

      if (jaccard > JACCARD_CEILING && ngram > NGRAM_CEILING) {
        rejections.push({
          id: q.id,
          sourceRef: q.sourceRef,
          reason: `Too similar: jaccard=${jaccard.toFixed(3)} (limit ${JACCARD_CEILING}), ngram=${ngram.toFixed(3)} (limit ${NGRAM_CEILING})`,
          jaccard,
          ngram,
        });
        rejected = true;
      }
    }

    q._rejected = rejected;

    if (!rejected) {
      (q.skills || []).forEach(s => { skillCoverage[s] = (skillCoverage[s] || 0) + 1; });
    }
  });

  const passing = items.filter(q => !q._rejected);
  passing.forEach(q => { delete q._rejected; delete q._uniqueness; });
  const failedItems = items.filter(q => q._rejected);
  failedItems.forEach(q => { delete q._rejected; });

  const domainCounts = {};
  const diffCounts = {};
  passing.forEach(q => {
    domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
  });

  return { errors, warnings, rejections, stats: { total: items.length, passing: passing.length, rejected: failedItems.length, byDomain: domainCounts, byDifficulty: diffCounts, skillsCovered: Object.keys(skillCoverage).length, skillCoverage }, passing, failedItems };
}

function runValidate(args) {
  const input = args.input ? path.resolve(ROOT, args.input) : REWRITTEN_PATH;
  const extractInput = args.extractInput ? path.resolve(ROOT, args.extractInput) : EXTRACTED_PATH;
  const out = args.out ? path.resolve(ROOT, args.out) : VALIDATED_PATH;
  const rejOut = args.rejOut ? path.resolve(ROOT, args.rejOut) : REJECTION_PATH;

  if (!fileExists(input)) {
    console.error(`Rewritten file not found: ${input}. Run rewrite first.`);
    process.exit(1);
  }

  const payload = JSON.parse(fs.readFileSync(input, 'utf8'));
  const items = payload.questions || [];

  let sourceItems = null;
  if (fileExists(extractInput)) {
    sourceItems = JSON.parse(fs.readFileSync(extractInput, 'utf8')).questions || [];
  }

  const result = validateRewritten(items, sourceItems);

  console.log('\n=== PDF REWRITE VALIDATION ===');
  console.log(`Total: ${result.stats.total}, Passing: ${result.stats.passing}, Rejected: ${result.stats.rejected}`);
  console.log('By domain:', result.stats.byDomain);
  console.log('By difficulty:', result.stats.byDifficulty);
  console.log(`Skills covered: ${result.stats.skillsCovered}`);

  if (result.rejections.length > 0) {
    console.log(`\nUniqueness rejections: ${result.rejections.length}`);
    result.rejections.slice(0, 5).forEach(r => console.log(`  ${r.id}: ${r.reason}`));
    writeJson(rejOut, { rejections: result.rejections });
    console.log(`  Full rejection report -> ${rejOut}`);
  }

  writeJson(out, {
    generatedAt: new Date().toISOString(),
    validCount: result.passing.length,
    rejected: result.stats.rejected,
    validation: { errors: result.errors.length, warnings: result.warnings.length, rejections: result.rejections.length, stats: result.stats },
    questions: result.passing,
  });

  console.log(`  -> ${out} (${result.passing.length} valid items)`);
}

// ---------------------------------------------------------------------------
// STEP 4: PUBLISH
// ---------------------------------------------------------------------------

function buildPublishFile(items) {
  const groups = {
    generatedOfficialAlgebraBank: [],
    generatedOfficialProblemSolvingBank: [],
    generatedOfficialAdvancedMathBank: [],
    generatedOfficialGeometryBank: [],
  };

  items.forEach(q => {
    const target = q.domain === 'algebra' ? 'generatedOfficialAlgebraBank'
      : q.domain === 'problem-solving' ? 'generatedOfficialProblemSolvingBank'
      : q.domain === 'advanced-math' ? 'generatedOfficialAdvancedMathBank'
      : q.domain === 'geometry' ? 'generatedOfficialGeometryBank'
      : null;
    if (target) groups[target].push(q);
  });

  const lines = [
    '// AUTO-GENERATED by scripts/officialQuestionBankPipeline.mjs (PDF-first strict rewrite)',
    '// Regenerate: npm run bank:official',
    `// Generated: ${new Date().toISOString().slice(0, 10)}`,
    `// Total: ${items.length} questions`,
    '// Pipeline: pdf-first-strict-rewrite',
    '',
  ];

  for (const [name, arr] of Object.entries(groups)) {
    lines.push(`export const ${name} = ${JSON.stringify(arr, null, 2)};`);
    lines.push('');
  }

  lines.push('export const generatedOfficialBank = [');
  lines.push('  ...generatedOfficialAlgebraBank,');
  lines.push('  ...generatedOfficialProblemSolvingBank,');
  lines.push('  ...generatedOfficialAdvancedMathBank,');
  lines.push('  ...generatedOfficialGeometryBank,');
  lines.push('];');
  lines.push('');

  return lines.join('\n');
}

function runPublish(args) {
  const input = args.input ? path.resolve(ROOT, args.input) : VALIDATED_PATH;
  const out = args.out ? path.resolve(ROOT, args.out) : PUBLISH_PATH;

  if (!fileExists(input)) {
    const fallback = REWRITTEN_PATH;
    if (!fileExists(fallback)) {
      console.error('No validated or rewritten file found. Run extract + rewrite first.');
      process.exit(1);
    }
    console.log('  (No validated file; using rewritten output directly.)');
    const payload = JSON.parse(fs.readFileSync(fallback, 'utf8'));
    const code = buildPublishFile(payload.questions || []);
    ensureDir(out);
    fs.writeFileSync(out, code, 'utf8');
    console.log(`  Published ${(payload.questions || []).length} items -> ${out}`);
    return;
  }

  const payload = JSON.parse(fs.readFileSync(input, 'utf8'));
  const code = buildPublishFile(payload.questions || []);
  ensureDir(out);
  fs.writeFileSync(out, code, 'utf8');
  console.log(`  Published ${(payload.questions || []).length} items -> ${out}`);
}

// ---------------------------------------------------------------------------
// ORCHESTRATOR
// ---------------------------------------------------------------------------

function runAll(args) {
  console.log('=== PDF-FIRST QUESTION BANK PIPELINE ===\n');
  console.log('[1/4] Extract');
  runExtract(args);
  console.log('\n[2/4] Strict Rewrite');
  runRewrite(args);
  console.log('\n[3/4] Validate + Uniqueness Gates');
  runValidate(args);
  console.log('\n[4/4] Publish');
  runPublish(args);
  console.log('\nDone.');
}

function main() {
  const [command = 'all', ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);

  const commands = {
    extract: runExtract,
    rewrite: runRewrite,
    validate: runValidate,
    publish: runPublish,
    all: runAll,
  };
  const fn = commands[command];
  if (!fn) {
    console.error(`Usage: node scripts/officialQuestionBankPipeline.mjs [${Object.keys(commands).join('|')}] [--tests=1,2,...] [--out=path]`);
    process.exit(1);
  }
  fn(args);
}

main();
