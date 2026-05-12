#!/usr/bin/env bun
/**
 * upgradePercentItems.mjs — wrap 5 bare percent items in CB-voice context.
 *
 * The items below were originally written as bare math drills:
 *   "What is $30\%$ of $80$?"
 *   "What is $15\%$ of $200$?"
 *   "$18$ is what percent of $60$?"
 *   "What is $20\%$ of $50$?"
 *   "What is $75\%$ of $40$?"
 *
 * Real CB items at this difficulty wrap the math in a real-world context:
 *
 *   "Of the [N] [items] in a [collection], [P]% are [type]. How many of
 *    the [items] in [collection] are [type]?"
 *
 * The math, choices, correct answers, and distractor reasoning are all
 * preserved. Only the stem gets the context wrapper. Each new stem is
 * 80-160 chars (matching CB density) instead of 18-25 chars.
 *
 * Additionally, the distractor reasoning for items with weak bullets
 * (specifically bank-ps-180's Choice C "guesses a midpoint") is tightened.
 *
 * Run:
 *   bun scripts/rewrites/upgradePercentItems.mjs --dry
 *   bun scripts/rewrites/upgradePercentItems.mjs
 */

import { promises as fs } from 'node:fs';

const FILE = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/problemSolving.js';

const ITEM_EDITS = [
  {
    id: 'bank-ps-180',
    edits: [
      {
        find: "question: 'What is $30\\\\%$ of $80$?',",
        replace: "question: 'Of the $80$ books in a library mystery section, $30\\\\%$ are new arrivals. How many of the books in this section are new arrivals?',",
      },
      {
        find: '* Choice C ($50$): adds ($30 + 80/4$? or $80 - 30$) — guesses a midpoint.',
        replace: '* Choice C ($50$): subtracts the percent from the whole ($80 - 30 = 50$) — uses the wrong operation between the two given numbers.',
      },
    ],
  },
  {
    id: 'bank-ps-181',
    edits: [{
      find: "question: 'What is $15\\\\%$ of $200$?',",
      replace: "question: 'A school librarian orders $200$ books for the new school year, and $15\\\\%$ of the books are reference texts. How many of the books are reference texts?',",
    }],
  },
  {
    id: 'bank-ps-184',
    edits: [{
      find: "question: '$18$ is what percent of $60$?',",
      replace: "question: 'Of the $60$ students in a freshman class, $18$ are enrolled in advanced math. What percent of the students in the freshman class are enrolled in advanced math?',",
    }],
  },
  {
    id: 'bank-ps-188',
    edits: [{
      find: "question: 'What is $20\\\\%$ of $50$?',",
      replace: "question: 'A company has $50$ employees. If $20\\\\%$ of the employees attended a training session, how many employees attended the session?',",
    }],
  },
  {
    id: 'bank-ps-189',
    edits: [{
      find: "question: 'What is $75\\\\%$ of $40$?',",
      replace: "question: 'A coffee shop sold $40$ drinks during the morning rush. If $75\\\\%$ of the drinks sold were coffee, how many of the drinks sold were coffee?',",
    }],
  },
];

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let src = await fs.readFile(FILE, 'utf8');
  let applied = 0;
  let skipped = 0;

  for (const item of ITEM_EDITS) {
    const startIdx = src.indexOf(`{ id: '${item.id}',`);
    if (startIdx === -1) {
      console.log(`SKIP ${item.id}: id not found`);
      skipped++;
      continue;
    }
    // Find end: first createdAt:'...',} after startIdx
    let pos = startIdx + 100;
    let itemEnd = -1;
    while (pos < startIdx + 4000 && pos < src.length) {
      const candidate = src.indexOf('createdAt:', pos);
      if (candidate === -1) break;
      const after = src.slice(candidate, candidate + 100);
      const m = after.match(/^createdAt:\s*'[\d-]+'\s*\},?/);
      if (m) { itemEnd = candidate + m[0].length; break; }
      pos = candidate + 1;
    }
    if (itemEnd === -1) {
      console.log(`SKIP ${item.id}: item end not found`);
      skipped++;
      continue;
    }

    const before = src.slice(0, startIdx);
    let slice = src.slice(startIdx, itemEnd);
    const after = src.slice(itemEnd);

    for (const edit of item.edits) {
      if (!slice.includes(edit.find)) {
        console.log(`SKIP ${item.id}: anchor not found — ${edit.find.slice(0, 60)}...`);
        skipped++;
        continue;
      }
      if (slice.split(edit.find).length - 1 > 1) {
        console.log(`SKIP ${item.id}: ambiguous`);
        skipped++;
        continue;
      }
      // Function-callback replace to bypass $-token interpretation
      slice = slice.replace(edit.find, () => edit.replace);
      console.log(`OK   ${item.id}: ${edit.find.slice(0, 60)}...`);
      applied++;
    }

    src = before + slice + after;
  }

  if (!dryRun && applied > 0) await fs.writeFile(FILE, src);
  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${applied} edits applied, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
