#!/usr/bin/env node
/**
 * Regenerate knowledge/graph/INDEX.md and knowledge/graph/MISCONCEPTIONS.md
 * from the node corpus. Run after adding or editing graph nodes.
 *
 *   node scripts/buildGraphIndexes.mjs          # write both files
 *   node scripts/buildGraphIndexes.mjs --check  # verify links only, no writes
 *
 * Also verifies every [[link]] resolves to a real node id and exits 1 on
 * dangling links, so it doubles as the graph's integrity gate.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'knowledge', 'graph');
const CHECK_ONLY = process.argv.includes('--check');

const SECTION_LAYOUT = {
  rw: {
    label: 'Reading & Writing',
    domains: [
      ['information-and-ideas', 'Information & Ideas'],
      ['craft-and-structure', 'Craft & Structure'],
      ['expression-of-ideas', 'Expression of Ideas'],
      ['standard-english-conventions', 'Standard English Conventions'],
      ['cross-cutting', 'Cross-cutting'],
    ],
  },
  math: {
    label: 'Math',
    domains: [
      ['algebra', 'Algebra'],
      ['advanced-math', 'Advanced Math'],
      ['problem-solving-data-analysis', 'Problem-Solving & Data Analysis'],
      ['geometry-trigonometry', 'Geometry & Trigonometry'],
      ['cross-cutting', 'Cross-cutting'],
    ],
  },
};

function parseNode(file, section) {
  const src = fs.readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return null; // not a node file (e.g. SCOPE-EXCLUSIONS.md)
  const get = (key) => {
    const m = fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    return m ? m[1].trim() : '';
  };
  const id = get('id');
  if (!id) return null;
  const domain = get('domain');
  const skill = get('skill').replace(/^\[|\]$/g, '');
  const what = src.match(/## What it is\s*\n+([\s\S]*?)(?=\n##|\n$)/);
  let firstSentence = '';
  if (what) {
    const text = what[1].replace(/\s+/g, ' ').trim();
    const m = text.match(/^.*?[.!?](?=\s|$)/);
    firstSentence = (m ? m[0] : text).slice(0, 240);
  }
  const links = [...src.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]);
  const misconceptions = [];
  const misc = src.match(/## Misconceptions\s*\n+([\s\S]*?)(?=\n## |\n$)/);
  if (misc) {
    for (const m of misc[1].matchAll(/^- \*\*([a-z0-9-]+)\*\*\s*[—–-]+\s*([\s\S]*?)(?=\n- \*\*|\n*$)/gm)) {
      const body = m[2].replace(/\s+/g, ' ').trim();
      const first = body.match(/^.*?[.!?](?=\s|$)/);
      misconceptions.push({ id: m[1], text: (first ? first[0] : body).slice(0, 300) });
    }
  }
  // Frontmatter edges also count as links for integrity checking.
  for (const key of ['prereqs', 'unlocks', 'related']) {
    const v = get(key);
    if (v) for (const t of v.replace(/^\[|\]$/g, '').split(',')) {
      const id2 = t.trim();
      if (/^[a-z0-9-]+$/.test(id2)) links.push(id2);
    }
  }
  return { id, section, domain, skill, firstSentence, links, misconceptions, file };
}

const nodes = [];
for (const section of ['rw', 'math']) {
  for (const f of fs.readdirSync(path.join(ROOT, section)).sort()) {
    if (!f.endsWith('.md')) continue;
    const node = parseNode(path.join(ROOT, section, f), section);
    if (node) nodes.push(node);
  }
}

// Link integrity
const ids = new Set(nodes.map((n) => n.id));
let dangling = 0;
for (const n of nodes) {
  for (const l of n.links) {
    if (!ids.has(l)) {
      console.error(`DANGLING: [[${l}]] in ${path.relative(ROOT, n.file)}`);
      dangling++;
    }
  }
}
const rw = nodes.filter((n) => n.section === 'rw');
const math = nodes.filter((n) => n.section === 'math');
const miscCount = nodes.reduce((s, n) => s + n.misconceptions.length, 0);
console.log(`${nodes.length} nodes (R&W ${rw.length}, Math ${math.length}), ${miscCount} misconceptions, ${dangling} dangling links`);
if (dangling) process.exit(1);
if (CHECK_ONLY) process.exit(0);

// ── INDEX.md ──────────────────────────────────────────────────────────────
let idx = `# SAT Knowledge Graph — Index

${nodes.length} concept nodes (source-free, original synthesis of four reference works + our own expertise). One file per node under \`graph/rw/\` and \`graph/math/\`. Schema in \`../SCHEMA.md\`; misconception rollup in \`MISCONCEPTIONS.md\`. Regenerate this file + MISCONCEPTIONS.md with \`node scripts/buildGraphIndexes.mjs\`. Deliberate scope exclusions: \`math/SCOPE-EXCLUSIONS.md\`.

**Counts:** R&W ${rw.length} · Math ${math.length} · ${miscCount} named misconceptions. Every \`[[link]]\` resolves to a real node (0 dangling).
`;
for (const section of ['rw', 'math']) {
  const layout = SECTION_LAYOUT[section];
  const pool = nodes.filter((n) => n.section === section);
  idx += `\n## ${layout.label}\n`;
  const seen = new Set();
  for (const [domain, label] of layout.domains) {
    const group = pool.filter((n) => n.domain === domain);
    group.forEach((n) => seen.add(n.id));
    if (!group.length) continue;
    idx += `\n### ${label}  (${group.length})\n\n`;
    for (const n of group) {
      idx += `- **[${n.id}](${section}/${path.basename(n.file)})** — ${n.firstSentence}  _(skill: ${n.skill})_\n`;
    }
  }
  const orphans = pool.filter((n) => !seen.has(n.id));
  if (orphans.length) {
    idx += `\n### Other  (${orphans.length})\n\n`;
    for (const n of orphans) {
      idx += `- **[${n.id}](${section}/${path.basename(n.file)})** — ${n.firstSentence}  _(skill: ${n.skill})_ [domain: ${n.domain}]\n`;
    }
  }
}
fs.writeFileSync(path.join(ROOT, 'INDEX.md'), idx);

// ── MISCONCEPTIONS.md ─────────────────────────────────────────────────────
let mi = `# Misconception Index — tutor diagnostic backbone

${miscCount} named misconceptions across ${nodes.length} nodes, each with its formation cause. Primary artifact for tutor prompt injection: when a student misses an item mapped to a node, the tutor loads that node's misconceptions + diagnostic indicators to name the ROOT CAUSE, not just mark wrong. Regenerated by \`node scripts/buildGraphIndexes.mjs\`.

Format: \`node-id\` → **misconception-id** — belief & why it forms (first sentence).
`;
for (const section of ['rw', 'math']) {
  mi += `\n## ${SECTION_LAYOUT[section].label}\n`;
  for (const n of nodes.filter((x) => x.section === section && x.misconceptions.length)) {
    mi += `\n**\`${n.id}\`**\n`;
    for (const m of n.misconceptions) {
      mi += `- **${m.id}** — ${m.text}\n`;
    }
  }
}
fs.writeFileSync(path.join(ROOT, 'MISCONCEPTIONS.md'), mi);
console.log('Wrote INDEX.md and MISCONCEPTIONS.md');
