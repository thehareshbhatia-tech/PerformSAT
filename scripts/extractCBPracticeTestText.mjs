#!/usr/bin/env node
/**
 * Extract plain text from the College Board PT 4-11 practice-test PDFs into
 * `scripts/generated/pdf-text/*.txt` so the lint can run a copyright-distance
 * check against the official tests in addition to the Educator QBank.
 *
 * Source PDFs:  reference/college-board/sat-practice-test-{4..11}-digital.pdf
 * Output dir:   scripts/generated/pdf-text/sat-practice-test-{4..11}-digital.txt
 *
 * Implementation: shells out to Python's pdfplumber (already present on
 * macOS dev setups). We deliberately avoid adding a Node PDF dependency
 * since this is a one-time bootstrap that runs alongside fetchCBQuestionBank.
 *
 * Usage:
 *   node scripts/extractCBPracticeTestText.mjs              # extract any missing
 *   node scripts/extractCBPracticeTestText.mjs --refresh    # re-extract all
 */

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const PDF_DIR = path.join(ROOT, 'reference', 'college-board');
const OUT_DIR = path.join(ROOT, 'scripts', 'generated', 'pdf-text');

const REFRESH = process.argv.includes('--refresh');

function ensurePython() {
  const r = spawnSync('python3', ['-c', 'import pdfplumber; print(pdfplumber.__version__)'], { encoding: 'utf8' });
  if (r.status !== 0) {
    console.error('python3 + pdfplumber required. Install with:');
    console.error('  python3 -m pip install pdfplumber');
    process.exit(2);
  }
}

function extract(pdfPath, txtPath) {
  const script = `
import pdfplumber, sys
with pdfplumber.open(sys.argv[1]) as pdf:
    pages = [(p.extract_text() or '') for p in pdf.pages]
sys.stdout.write('\\n\\n'.join(pages))
`;
  const r = spawnSync('python3', ['-c', script, pdfPath], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) {
    throw new Error(`pdfplumber failed for ${pdfPath}: ${r.stderr || '(no stderr)'}`);
  }
  fs.writeFileSync(txtPath, r.stdout);
  return r.stdout.length;
}

function main() {
  if (!fs.existsSync(PDF_DIR)) {
    console.error(`PDF source dir missing: ${PDF_DIR}`);
    process.exit(1);
  }
  ensurePython();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const pdfs = fs.readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf')).sort();
  if (pdfs.length === 0) {
    console.error(`No PDFs found in ${PDF_DIR}`);
    process.exit(1);
  }

  let extracted = 0, cached = 0;
  for (const f of pdfs) {
    const out = path.join(OUT_DIR, f.replace(/\.pdf$/, '.txt'));
    if (!REFRESH && fs.existsSync(out)) {
      cached++;
      continue;
    }
    const chars = extract(path.join(PDF_DIR, f), out);
    console.log(`  ${f} -> ${path.relative(ROOT, out)} (${chars} chars)`);
    extracted++;
  }
  console.log(`\n${extracted} extracted, ${cached} cached. Output: ${path.relative(ROOT, OUT_DIR)}`);
}

main();
