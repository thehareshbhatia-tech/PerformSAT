#!/usr/bin/env node
/**
 * auditCBCoverage.mjs — checks the Practice Bank against the official
 * College Board taxonomy (19 math skills + 11 R&W skills).
 *
 * Reports:
 *   1. UNMAPPED — surfaced patterns NOT in PATTERN_TO_CB_SKILL. These either
 *      need a mapping entry or shouldn't be on the bank at all.
 *   2. THIN — CB skills with <20 drillable items in the bank.
 *   3. EMPTY — CB skills with 0 items (gaps to fill).
 *   4. DUPLICATES — multiple patterns that map to the same CB skill AND look
 *      semantically identical (heuristic: same kebab-case prefix or
 *      reversed-name match).
 *
 * Output:
 *   stdout: human-readable summary
 *   scripts/audit-output/cb-coverage.json
 *
 * Run: node scripts/auditCBCoverage.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(__dirname, 'audit-output');
const TMP = path.join(__dirname, '.tmp-cb-audit');

const MIN_POOL = 4;
const THIN_THRESHOLD = 20;

const BANK_SHARDS = ['algebra', 'problemSolving', 'advancedMath', 'geometry'];
const TOPIC_DOMAIN = {
  linearEquations:       { slug: 'linear-equations',       domain: 'algebra' },
  systems:               { slug: 'systems',                domain: 'algebra' },
  functions:             { slug: 'functions',              domain: 'algebra' },
  equivalentExpressions: { slug: 'equivalent-expressions', domain: 'algebra' },
  quadratics:            { slug: 'quadratics',             domain: 'advanced-math' },
  exponents:             { slug: 'exponents',              domain: 'advanced-math' },
  transformations:       { slug: 'transformations',        domain: 'advanced-math' },
  percents:              { slug: 'percents',               domain: 'problem-solving' },
  dimensionalAnalysis:   { slug: 'dimensional-analysis',   domain: 'problem-solving' },
  statistics:            { slug: 'statistics',             domain: 'problem-solving' },
  circles:               { slug: 'circles',                domain: 'geometry' },
  triangles:             { slug: 'triangles',              domain: 'geometry' },
  volume:                { slug: 'volume',                 domain: 'geometry' },
  radiansDegrees:        { slug: 'radians-degrees',        domain: 'geometry' },
};
const TOPIC_EXPORT_NAME = {
  linearEquations: 'linearEquationsQuestions',
  systems: 'systemsQuestions',
  functions: 'functionsQuestions',
  equivalentExpressions: 'equivalentExpressionsQuestions',
  quadratics: 'quadraticsQuestions',
  exponents: 'exponentsQuestions',
  transformations: 'transformationsQuestions',
  percents: 'percentsQuestions',
  dimensionalAnalysis: 'dimensionalAnalysisQuestions',
  statistics: 'statisticsQuestions',
  circles: 'circlesQuestions',
  triangles: 'trianglesQuestions',
  volume: 'volumeQuestions',
  radiansDegrees: 'radiansDegreesQuestions',
};

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;

async function loadAliasMap() {
  const aliasSrc = await fs.readFile(path.join(ROOT, 'src/data/questions/extractSatPattern.js'), 'utf8');
  const block = aliasSrc.match(/Object\.freeze\(\{([\s\S]*?)\}\)/);
  if (!block) throw new Error('PATTERN_ALIASES block not found');
  const aliasMap = new Map();
  for (const m of block[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) {
    aliasMap.set(m[1], m[2]);
  }
  return aliasMap;
}

async function loadBank() {
  await fs.rm(TMP, { recursive: true, force: true });
  await fs.mkdir(TMP, { recursive: true });

  const shards = {};
  for (const s of BANK_SHARDS) {
    const src = await fs.readFile(path.join(ROOT, `src/data/questions/bank/${s}.js`), 'utf8');
    const dst = path.join(TMP, `${s}.mjs`);
    await fs.writeFile(dst, src, 'utf8');
    shards[s] = await import(pathToFileURL(dst).href);
  }
  const handAuthored = [
    ...shards.algebra.algebraBank,
    ...shards.problemSolving.problemSolvingBank,
    ...shards.advancedMath.advancedMathBank,
    ...shards.geometry.geometryBank,
  ];

  const topicItems = [];
  for (const [filename, meta] of Object.entries(TOPIC_DOMAIN)) {
    const src = await fs.readFile(path.join(ROOT, `src/data/questions/${filename}.js`), 'utf8');
    const dst = path.join(TMP, `topic-${filename}.mjs`);
    await fs.writeFile(dst, src, 'utf8');
    const mod = await import(pathToFileURL(dst).href);
    const exportName = TOPIC_EXPORT_NAME[filename];
    const byModule = mod[exportName] || {};
    for (const [sectionName, questions] of Object.entries(byModule)) {
      for (const q of (questions || [])) {
        if (!q || !Array.isArray(q.choices) || q.choices.length < 2) continue;
        topicItems.push({
          ...q,
          id: `topic-${meta.slug}-${slugify(sectionName)}-${q.id}`,
          domain: meta.domain,
        });
      }
    }
  }
  await fs.rm(TMP, { recursive: true, force: true });
  return [...handAuthored, ...topicItems];
}

async function loadCBTaxonomy() {
  const src = await fs.readFile(path.join(ROOT, 'src/data/questions/cbSkillTaxonomy.js'), 'utf8');
  const dst = path.join(TMP, 'cbSkillTaxonomy.mjs');
  await fs.mkdir(TMP, { recursive: true });
  await fs.writeFile(dst, src, 'utf8');
  const mod = await import(pathToFileURL(dst).href);
  await fs.rm(TMP, { recursive: true, force: true });
  return mod;
}

function makeExtract(aliasMap) {
  return function extract(expl) {
    if (!expl) return null;
    const m = expl.match(SAT_PATTERN_RE);
    if (!m) return null;
    const raw = slugify(m[1]);
    return aliasMap.get(raw) || raw;
  };
}

const isDrillable = q => Array.isArray(q.choices) && q.choices.length >= 2;

async function main() {
  const aliasMap = await loadAliasMap();
  const extract = makeExtract(aliasMap);
  const bank = (await loadBank()).filter(isDrillable);
  const { PATTERN_TO_CB_SKILL, CB_MATH_SKILLS } = await loadCBTaxonomy();

  // Pattern counts (post-alias)
  const patternCounts = new Map();
  const itemsByPattern = new Map();
  for (const q of bank) {
    const p = extract(q.explanation);
    if (!p) continue;
    patternCounts.set(p, (patternCounts.get(p) || 0) + 1);
    if (!itemsByPattern.has(p)) itemsByPattern.set(p, []);
    itemsByPattern.get(p).push(q.id);
  }

  // Surfaced (≥MIN_POOL items) — these are what students see in the UI.
  const surfaced = [...patternCounts.entries()]
    .filter(([, c]) => c >= MIN_POOL)
    .sort((a, b) => b[1] - a[1]);

  // ── (1) UNMAPPED ───────────────────────────────────────────────────────────
  const unmapped = surfaced.filter(([slug]) => !PATTERN_TO_CB_SKILL[slug]);

  // ── (2 + 3) per-skill counts ──────────────────────────────────────────────
  const skillCounts = new Map(); // cbSkillSlug → { items: n, patterns: n, patternList: [] }
  for (const skill of CB_MATH_SKILLS) {
    skillCounts.set(skill.slug, { skill, items: 0, patterns: 0, patternList: [] });
  }
  for (const [pattern, count] of patternCounts) {
    const skillSlug = PATTERN_TO_CB_SKILL[pattern];
    if (!skillSlug) continue;
    const entry = skillCounts.get(skillSlug);
    if (!entry) continue;
    entry.items += count;
    entry.patterns++;
    entry.patternList.push({ pattern, count });
  }
  for (const e of skillCounts.values()) {
    e.patternList.sort((a, b) => b.count - a.count);
  }

  const thin = [...skillCounts.values()]
    .filter(e => e.items > 0 && e.items < THIN_THRESHOLD)
    .sort((a, b) => a.items - b.items);
  const empty = [...skillCounts.values()].filter(e => e.items === 0);
  const healthy = [...skillCounts.values()]
    .filter(e => e.items >= THIN_THRESHOLD)
    .sort((a, b) => b.items - a.items);

  // ── (4) DUPLICATES (heuristic) ────────────────────────────────────────────
  const duplicates = [];
  const surfacedSet = new Set(surfaced.map(([s]) => s));
  const checked = new Set();
  for (const [aSlug] of surfaced) {
    for (const [bSlug] of surfaced) {
      if (aSlug === bSlug || checked.has(`${bSlug}|${aSlug}`)) continue;
      checked.add(`${aSlug}|${bSlug}`);
      // Same CB skill + reversed-name match
      const sameSkill = PATTERN_TO_CB_SKILL[aSlug] && PATTERN_TO_CB_SKILL[aSlug] === PATTERN_TO_CB_SKILL[bSlug];
      if (!sameSkill) continue;
      const aParts = new Set(aSlug.split('-'));
      const bParts = new Set(bSlug.split('-'));
      const intersect = [...aParts].filter(p => bParts.has(p));
      const total = new Set([...aParts, ...bParts]).size;
      // Heuristic: ≥75% shared tokens → likely duplicates
      if (intersect.length / total >= 0.75) {
        duplicates.push({ a: aSlug, b: bSlug, skill: PATTERN_TO_CB_SKILL[aSlug] });
      }
    }
  }

  // ── Output ────────────────────────────────────────────────────────────────
  const out = {
    timestamp: new Date().toISOString(),
    config: { minPool: MIN_POOL, thinThreshold: THIN_THRESHOLD },
    counts: {
      totalDrillable: bank.length,
      surfacedPatterns: surfaced.length,
      unmappedCount: unmapped.length,
      thinSkills: thin.length,
      emptySkills: empty.length,
      duplicateCandidates: duplicates.length,
    },
    unmapped: unmapped.map(([p, c]) => ({ pattern: p, count: c })),
    duplicates,
    skills: {
      healthy: healthy.map(e => ({ slug: e.skill.slug, label: e.skill.label, code: e.skill.code, items: e.items, patterns: e.patterns, topPatterns: e.patternList.slice(0, 5) })),
      thin: thin.map(e => ({ slug: e.skill.slug, label: e.skill.label, code: e.skill.code, items: e.items, patterns: e.patterns, patternList: e.patternList })),
      empty: empty.map(e => ({ slug: e.skill.slug, label: e.skill.label, code: e.skill.code })),
    },
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUT_DIR, 'cb-coverage.json'), JSON.stringify(out, null, 2), 'utf8');

  // Human-readable summary
  console.log('═══ CB COVERAGE AUDIT ═══════════════════════════════════════════');
  console.log(`Bank: ${bank.length} drillable items, ${surfaced.length} surfaced patterns (≥${MIN_POOL})`);
  console.log(`CB skills: 19 math — ${healthy.length} healthy, ${thin.length} thin, ${empty.length} empty`);
  console.log('');

  if (unmapped.length) {
    console.log(`⚠ UNMAPPED (${unmapped.length} patterns) — need a row in PATTERN_TO_CB_SKILL or removal from bank:`);
    unmapped.forEach(([p, c]) => console.log(`    ${c.toString().padStart(3)} ${p}`));
    console.log('');
  } else {
    console.log('✓ All surfaced patterns are mapped to a CB skill');
    console.log('');
  }

  if (duplicates.length) {
    console.log(`⚠ DUPLICATE CANDIDATES (${duplicates.length}) — review for consolidation:`);
    duplicates.forEach(d => console.log(`    [${d.skill}] ${d.a}  ↔  ${d.b}`));
    console.log('');
  }

  console.log('━━━ HEALTHY skills (≥' + THIN_THRESHOLD + ' items) ━━━');
  healthy.forEach(e => console.log(`  ${e.items.toString().padStart(3)} items / ${e.patterns.toString().padStart(2)} patterns — ${e.skill.code} ${e.skill.label}`));
  console.log('');

  if (thin.length) {
    console.log(`━━━ THIN skills (<${THIN_THRESHOLD} items, needs backfill) ━━━`);
    thin.forEach(e => console.log(`  ${e.items.toString().padStart(3)} items / ${e.patterns.toString().padStart(2)} patterns — ${e.skill.code} ${e.skill.label}`));
    console.log('');
  }

  if (empty.length) {
    console.log(`━━━ EMPTY skills (0 surfaced items, GAP) ━━━`);
    empty.forEach(e => console.log(`      0 items —              ${e.skill.code} ${e.skill.label}`));
    console.log('');
  }

  console.log(`Wrote: scripts/audit-output/cb-coverage.json`);

  // Exit non-zero if there are unmapped patterns — this is a hard violation.
  if (unmapped.length > 0) process.exit(2);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
