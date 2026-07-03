/**
 * customDrillPool.js — pure composition for the Practice Bank "Build a drill"
 * panel. Given a caller-supplied candidate id list (the union of the selected
 * topics' question ids) plus the student's per-question history, it applies the
 * two active filters — question difficulty and pool status (all / unseen /
 * missed) — and returns both the fully-filtered id list AND the live
 * availability counts each chip row needs to label and enable/disable itself.
 *
 * The counts are CROSS-COMPUTED so each row shows what you'd get if you clicked
 * one of its chips given the OTHER row's current selection:
 *   - `byDifficulty` is computed after applying `poolFilter` only.
 *   - `byPool`       is computed after applying `difficulty` only.
 * The fully-filtered `ids` (both filters applied) is what the drill launches
 * from. Pure + null-safe; no Math.random here (the caller shuffles).
 */

/** Difficulty assumed for a question with no (or an unrecognized) tag. */
const DEFAULT_DIFFICULTY = 'medium';

/**
 * Resolve a question's difficulty from a Map or plain-object lookup, coercing
 * anything missing / unrecognized to 'medium'. Tolerates number-vs-string id
 * keys for the Map case (objects auto-stringify their keys).
 *
 * @param {Map<string|number, string>|Object<string, string>|null|undefined} difficultyById
 * @param {string|number} id
 * @returns {'easy'|'medium'|'hard'}
 */
function lookupDifficulty(difficultyById, id) {
  if (!difficultyById) return DEFAULT_DIFFICULTY;
  let val;
  if (typeof difficultyById.get === 'function') {
    val = difficultyById.get(id);
    if (val === undefined) val = difficultyById.get(String(id));
  } else {
    val = difficultyById[id];
  }
  return val === 'easy' || val === 'medium' || val === 'hard' ? val : DEFAULT_DIFFICULTY;
}

/**
 * A question's pool status against the student's history: 'unseen' (no record),
 * 'missed' (last attempt wrong), or 'seen' (has a record, last attempt right).
 *
 * @param {Object<string, {c: boolean}>|null|undefined} bankPractice
 * @param {string|number} id
 * @returns {'unseen'|'missed'|'seen'}
 */
function poolStatus(bankPractice, id) {
  const rec = bankPractice ? bankPractice[String(id)] : undefined;
  if (!rec) return 'unseen';
  return rec.c === false ? 'missed' : 'seen';
}

/**
 * Compose the custom-drill candidate pool for the given filter selection.
 *
 * Use when building the "Build a drill" panel: pass the topic-scoped candidate
 * ids plus the two active filters, then read `ids` for the launch pool and
 * `counts` to label / disable each chip.
 *
 * @param {Object} args
 * @param {Array<string|number>} args.qids - candidate ids (topic-scoped union), order preserved
 * @param {Map<string|number, string>|Object<string, string>|null} args.difficultyById - id → 'easy'|'medium'|'hard' (missing → 'medium')
 * @param {Object<string, {c: boolean, n: number, t: string}>|null} args.bankPractice - per-question history
 * @param {'all'|'easy'|'medium'|'hard'} [args.difficulty='all'] - difficulty filter
 * @param {'all'|'unseen'|'missed'} [args.poolFilter='all'] - pool-status filter
 * @returns {{ ids: Array<string|number>, counts: { byDifficulty: {all:number, easy:number, medium:number, hard:number}, byPool: {all:number, unseen:number, missed:number} } }}
 */
export function composeCustomPool({
  qids,
  difficultyById,
  bankPractice,
  difficulty = 'all',
  poolFilter = 'all',
} = {}) {
  const list = Array.isArray(qids) ? qids : [];
  const diff = difficulty || 'all';
  const pool = poolFilter || 'all';

  const byDifficulty = { all: 0, easy: 0, medium: 0, hard: 0 };
  const byPool = { all: 0, unseen: 0, missed: 0 };
  const ids = [];

  for (const id of list) {
    const d = lookupDifficulty(difficultyById, id);         // always easy|medium|hard
    const status = poolStatus(bankPractice, id);            // unseen|missed|seen
    const passesDifficulty = diff === 'all' || d === diff;
    const passesPool = pool === 'all' || status === pool;

    // byDifficulty: candidates passing the pool filter, bucketed by difficulty
    // → what each difficulty chip would yield given the current pool selection.
    if (passesPool) {
      byDifficulty.all += 1;
      byDifficulty[d] += 1;
    }
    // byPool: candidates passing the difficulty filter, bucketed by pool status
    // → what each pool chip would yield given the current difficulty selection.
    if (passesDifficulty) {
      byPool.all += 1;
      if (status === 'unseen') byPool.unseen += 1;
      else if (status === 'missed') byPool.missed += 1;
    }
    // The launch pool: both filters applied, input order preserved.
    if (passesDifficulty && passesPool) ids.push(id);
  }

  return { ids, counts: { byDifficulty, byPool } };
}
