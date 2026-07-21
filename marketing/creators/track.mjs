#!/usr/bin/env node
// Creator outreach tracker — prints the roster as a status table.
//
//   node track.mjs            # everyone
//   node track.mjs --active   # hide passed/dead threads
//
// Data lives in creators.json (gitignored — personal emails + deal terms).
// Update status/lastTouchAt/nextAction by hand as threads move; statuses:
// contacted → replied → negotiating → agreed → live | passed
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const { creators } = JSON.parse(readFileSync(join(HERE, 'creators.json'), 'utf8'));

const activeOnly = process.argv.includes('--active');
const rows = creators.filter((c) => !activeOnly || c.status !== 'passed');

const cols = [
  ['name', 'Creator', (c) => c.name],
  ['handle', 'Handle', (c) => Object.values(c.handles || {})[0] || '—'],
  ['status', 'Status', (c) => c.status],
  ['code', 'Code', (c) => c.promoCode || (c.plannedCode ? `(${c.plannedCode})` : '—')],
  ['touch', 'Last touch', (c) => c.lastTouchAt || '—'],
  ['next', 'Next action', (c) => c.nextAction || '—'],
];
const widths = cols.map(([, header, get]) =>
  Math.max(header.length, ...rows.map((c) => String(get(c)).length)),
);
const line = (cells) =>
  cells.map((s, i) => String(s).padEnd(widths[i])).join('  ');

console.log(line(cols.map(([, h]) => h)));
console.log(line(widths.map((w) => '-'.repeat(w))));
for (const c of rows) console.log(line(cols.map(([, , get]) => get(c))));
