/**
 * authorConfig.mjs — emit data/author-config.json: for each thin reading bucket,
 * the target skill, how many candidates to author, the exact question stem, and
 * 2-3 anchor items (real bank items of that type) so authoring agents match the
 * bank's voice + difficulty. Consumed as `args` by author.workflow.js.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, 'data');

const items = JSON.parse(readFileSync(join(DATA, 'reading-items.json'), 'utf8'));
const det = JSON.parse(readFileSync(join(DATA, 'deterministic.json'), 'utf8'));
const llm = JSON.parse(readFileSync(join(DATA, 'classification.json'), 'utf8'));
const typeOf = (id) => det[id] ?? llm[id] ?? null;

const byId = new Map(items.map((q) => [q.id, q]));

// Over-generate to absorb grader rejects; target final >=6 per bucket.
const PLAN = [
  { bucket: 'wic-example-or-illustration', skill: 'words-in-context',                author: 6 },
  { bucket: 'inf-prediction-expectation',  skill: 'inferences',                      author: 8 },
  { bucket: 'rs-emphasize-similarity',     skill: 'rhetorical-synthesis',            author: 8 },
  { bucket: 'rs-present-claim',            skill: 'rhetorical-synthesis',            author: 5 },
  { bucket: 'coe-text-illustrate-quote',   skill: 'command-of-evidence-textual',     author: 8 },
];

const config = PLAN.map((p) => {
  const anchorIds = items.filter((q) => typeOf(q.id) === p.bucket).map((q) => q.id).slice(0, 3);
  const anchors = anchorIds.map((id) => {
    const q = byId.get(id);
    return {
      passage: q.passage || null,
      studentNotes: q.studentNotes || null,
      question: q.question,
      choices: q.choices,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    };
  });
  return { ...p, current: anchorIds.length, anchors };
});

writeFileSync(join(DATA, 'author-config.json'), JSON.stringify(config, null, 1));
console.log('Wrote data/author-config.json');
for (const c of config) {
  console.log(`  ${c.bucket.padEnd(30)} skill=${c.skill.padEnd(28)} author=${c.author}  anchors=${c.anchors.length}`);
}
