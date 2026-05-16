#!/usr/bin/env node
/**
 * auditPracticeBank.mjs — surface-area audit for the Practice Bank UI.
 *
 * Reads the live bank (math + R&W) the way production does:
 *   - 4 bank shards (algebra/advancedMath/problemSolving/geometry)
 *   - 14 topic files flattened into namespaced `topic-*` IDs
 *   - 12 R&W practice-test bundles flattened by skill
 *
 * Output:
 *   scripts/audit-output/practice-bank-inventory.json
 *   scripts/audit-output/practice-bank-inventory.md  (human-readable)
 *
 * Strategy: each source module stands alone (no relative imports except
 * `src/data/questions/index.js` which we sidestep by importing topic files
 * directly). We copy each file to a `.mjs` temp file and dynamic-import it.
 *
 * Run: node scripts/auditPracticeBank.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(__dirname, 'audit-output');
const TMP = path.join(__dirname, '.tmp-audit');

const MIN_POOL = 4;

const BANK_SHARDS = ['algebra', 'problemSolving', 'advancedMath', 'geometry'];

// Topic file → domain (mirrors src/data/questions/bank/index.js TOPIC_DOMAIN)
const TOPIC_DOMAIN = {
  'linearEquations':       { slug: 'linear-equations',       domain: 'algebra' },
  'systems':               { slug: 'systems',                domain: 'algebra' },
  'functions':             { slug: 'functions',              domain: 'algebra' },
  'equivalentExpressions': { slug: 'equivalent-expressions', domain: 'algebra' },
  'quadratics':            { slug: 'quadratics',             domain: 'advanced-math' },
  'exponents':             { slug: 'exponents',              domain: 'advanced-math' },
  'transformations':       { slug: 'transformations',        domain: 'advanced-math' },
  'percents':              { slug: 'percents',               domain: 'problem-solving' },
  'dimensionalAnalysis':   { slug: 'dimensional-analysis',   domain: 'problem-solving' },
  'statistics':            { slug: 'statistics',             domain: 'problem-solving' },
  'circles':               { slug: 'circles',                domain: 'geometry' },
  'triangles':             { slug: 'triangles',              domain: 'geometry' },
  'volume':                { slug: 'volume',                 domain: 'geometry' },
  'radiansDegrees':        { slug: 'radians-degrees',        domain: 'geometry' },
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

const MATH_DOMAIN_LABEL = {
  'algebra': 'Algebra',
  'advanced-math': 'Advanced Math',
  'problem-solving': 'Problem-Solving and Data Analysis',
  'geometry': 'Geometry and Trigonometry',
};

const RW_DOMAIN_LABEL = {
  'information-and-ideas': 'Information and Ideas',
  'craft-and-structure': 'Craft and Structure',
  'standard-english-conventions': 'Standard English Conventions',
  'expression-of-ideas': 'Expression of Ideas',
};

const RW_SKILL_LABEL = {
  'central-ideas-and-details': 'Central Ideas and Details',
  'inferences': 'Inferences',
  'command-of-evidence-textual': 'Command of Evidence (Textual)',
  'command-of-evidence-quantitative': 'Command of Evidence (Quantitative)',
  'words-in-context': 'Words in Context',
  'text-structure-and-purpose': 'Text Structure and Purpose',
  'cross-text-connections': 'Cross-Text Connections',
  'boundaries': 'Boundaries',
  'form-structure-and-sense': 'Form, Structure, and Sense',
  'transitions': 'Transitions',
  'rhetorical-synthesis': 'Rhetorical Synthesis',
};

const RW_SKILL_TO_DOMAIN = {
  'central-ideas-and-details': 'information-and-ideas',
  'inferences': 'information-and-ideas',
  'command-of-evidence-textual': 'information-and-ideas',
  'command-of-evidence-quantitative': 'information-and-ideas',
  'words-in-context': 'craft-and-structure',
  'text-structure-and-purpose': 'craft-and-structure',
  'cross-text-connections': 'craft-and-structure',
  'boundaries': 'standard-english-conventions',
  'form-structure-and-sense': 'standard-english-conventions',
  'transitions': 'expression-of-ideas',
  'rhetorical-synthesis': 'expression-of-ideas',
};

async function copyToMjs(srcFile, dstFile) {
  let src = await fs.readFile(srcFile, 'utf8');
  await fs.writeFile(dstFile, src, 'utf8');
}

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

const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;
function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
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

async function loadMathBank() {
  await fs.rm(TMP, { recursive: true, force: true });
  await fs.mkdir(TMP, { recursive: true });

  // Shards
  const shards = {};
  for (const s of BANK_SHARDS) {
    const dst = path.join(TMP, `${s}.mjs`);
    await copyToMjs(path.join(ROOT, `src/data/questions/bank/${s}.js`), dst);
    shards[s] = await import(pathToFileURL(dst).href);
  }
  const handAuthored = [
    ...shards.algebra.algebraBank,
    ...shards.problemSolving.problemSolvingBank,
    ...shards.advancedMath.advancedMathBank,
    ...shards.geometry.geometryBank,
  ];

  // Topic files
  const topicItems = [];
  for (const [filename, meta] of Object.entries(TOPIC_DOMAIN)) {
    const dst = path.join(TMP, `topic-${filename}.mjs`);
    await copyToMjs(path.join(ROOT, `src/data/questions/${filename}.js`), dst);
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
          type: q.type || 'multiple-choice',
          skills: Array.isArray(q.skills) ? q.skills : [],
          sourceModuleId: meta.slug,
          sourceSectionName: sectionName,
        });
      }
    }
  }
  return [...handAuthored, ...topicItems];
}

async function loadRWBank() {
  const items = [];
  for (let i = 1; i <= 12; i++) {
    const file = path.join(ROOT, `src/data/practiceTests/practiceTest${i}RW.js`);
    const dst = path.join(TMP, `practiceTest${i}RW.mjs`);
    await copyToMjs(file, dst);
    const mod = await import(pathToFileURL(dst).href);
    const exportName = `practiceTest${i}RW`;
    const bundle = mod[exportName] || mod.default || {};
    // Walk modules → sections → questions
    const modules = bundle.modules || bundle.Modules || [];
    const moduleEntries = Array.isArray(modules) ? modules : Object.values(modules);
    for (const m of moduleEntries) {
      const qs = m.questions || m.items || [];
      for (const q of qs) {
        if (!q || !Array.isArray(q.choices) || q.choices.length < 2) continue;
        items.push({ ...q, testNum: i });
      }
    }
  }
  return items;
}

function buildMath(bank, extract) {
  const byDomain = new Map();
  const stemsByPattern = new Map();
  for (const q of bank) {
    if (!isDrillable(q)) continue;
    const d = q.domain || 'algebra';
    if (!byDomain.has(d)) byDomain.set(d, { total: 0, patterns: new Map() });
    byDomain.get(d).total++;
    const p = extract(q.explanation);
    if (!p) continue;
    const dEntry = byDomain.get(d);
    dEntry.patterns.set(p, (dEntry.patterns.get(p) || 0) + 1);
    if (!stemsByPattern.has(p)) stemsByPattern.set(p, []);
    if (stemsByPattern.get(p).length < 3) {
      const stem = (q.question || '').slice(0, 220).replace(/\s+/g, ' ');
      stemsByPattern.get(p).push({ id: q.id, stem, skills: q.skills, sourceStyleRef: q.sourceStyleRef });
    }
  }

  const order = ['algebra', 'advanced-math', 'problem-solving', 'geometry'];
  return order.filter(d => byDomain.has(d)).map(d => {
    const e = byDomain.get(d);
    const patterns = [...e.patterns.entries()]
      .map(([slug, count]) => ({ slug, count, samples: stemsByPattern.get(slug) || [] }))
      .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
    return {
      domain: d,
      label: MATH_DOMAIN_LABEL[d],
      total: e.total,
      surfaced: patterns.filter(p => p.count >= MIN_POOL),
      hidden: patterns.filter(p => p.count < MIN_POOL),
    };
  });
}

function buildRW(items) {
  const skillCounts = new Map();
  const samplesBySkill = new Map();
  const domainTotals = new Map();

  for (const it of items) {
    const d = it.domain;
    if (d) domainTotals.set(d, (domainTotals.get(d) || 0) + 1);
    // R&W items use `skill` (singular) — fold to a single-entry list.
    const skills = Array.isArray(it.skills) && it.skills.length
      ? it.skills
      : (it.skill ? [it.skill] : []);
    for (const s of skills) {
      skillCounts.set(s, (skillCounts.get(s) || 0) + 1);
      if (!samplesBySkill.has(s)) samplesBySkill.set(s, []);
      if (samplesBySkill.get(s).length < 3) {
        const stem = (it.question || '').slice(0, 220).replace(/\s+/g, ' ');
        samplesBySkill.get(s).push({ test: it.testNum, id: it.id, stem });
      }
    }
  }

  const order = ['information-and-ideas', 'craft-and-structure', 'standard-english-conventions', 'expression-of-ideas'];
  return order.map(d => ({
    domain: d,
    label: RW_DOMAIN_LABEL[d],
    total: domainTotals.get(d) || 0,
    skills: Object.entries(RW_SKILL_TO_DOMAIN)
      .filter(([, dom]) => dom === d)
      .map(([slug]) => ({
        slug,
        label: RW_SKILL_LABEL[slug],
        count: skillCounts.get(slug) || 0,
        samples: samplesBySkill.get(slug) || [],
      }))
      .sort((a, b) => b.count - a.count),
  }));
}

async function main() {
  const aliasMap = await loadAliasMap();
  const extract = makeExtract(aliasMap);
  const mathBank = await loadMathBank();
  const rwBank = await loadRWBank();
  const math = buildMath(mathBank, extract);
  const rw = buildRW(rwBank);

  await fs.rm(TMP, { recursive: true, force: true });

  const out = {
    timestamp: new Date().toISOString(),
    config: { minPool: MIN_POOL },
    aliasEntries: aliasMap.size,
    math: {
      totalItems: mathBank.filter(isDrillable).length,
      totalSurfacedPatterns: math.reduce((a, d) => a + d.surfaced.length, 0),
      domains: math,
    },
    rw: {
      totalItems: rwBank.filter(isDrillable).length,
      domains: rw,
    },
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUT_DIR, 'practice-bank-inventory.json'), JSON.stringify(out, null, 2), 'utf8');

  const lines = [
    '# Practice Bank Inventory',
    '',
    `Generated: ${out.timestamp}`,
    `Min pool: ${MIN_POOL} items`,
    `Alias entries: ${out.aliasEntries}`,
    '',
    '## Math',
    `Total drillable items: **${out.math.totalItems}**`,
    `Total surfaced patterns: **${out.math.totalSurfacedPatterns}**`,
    '',
  ];
  for (const d of math) {
    lines.push(`### ${d.label} (${d.total} items, ${d.surfaced.length} surfaced patterns)`);
    lines.push('');
    if (d.hidden.length) {
      lines.push(`<sub>${d.hidden.length} hidden patterns each have <${MIN_POOL} items and aren't shown to students.</sub>`);
      lines.push('');
    }
    for (const p of d.surfaced) {
      lines.push(`- **${p.slug}** — ${p.count} items`);
      for (const s of p.samples) {
        lines.push(`  - \`${s.id}\` — ${s.stem.slice(0, 150)}…`);
      }
    }
    lines.push('');
  }

  lines.push('## R&W');
  lines.push(`Total drillable items: **${out.rw.totalItems}**`);
  lines.push('');
  for (const d of rw) {
    lines.push(`### ${d.label} (${d.total} items, ${d.skills.length} skills)`);
    lines.push('');
    for (const s of d.skills) {
      lines.push(`- **${s.label}** (\`${s.slug}\`) — ${s.count} items`);
      for (const sample of s.samples) {
        lines.push(`  - PT${sample.test} — ${sample.stem.slice(0, 150)}…`);
      }
    }
    lines.push('');
  }

  await fs.writeFile(path.join(OUT_DIR, 'practice-bank-inventory.md'), lines.join('\n'), 'utf8');

  console.log(`Math: ${out.math.totalItems} drillable, ${out.math.totalSurfacedPatterns} surfaced patterns (≥${MIN_POOL})`);
  console.log(`R&W:  ${out.rw.totalItems} drillable`);
  console.log(`Wrote: scripts/audit-output/practice-bank-inventory.{json,md}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
