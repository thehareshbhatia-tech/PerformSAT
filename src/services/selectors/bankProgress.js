/**
 * Pure read accessors over the per-question `bankPractice` map
 * (`{ [questionId]: { c: lastCorrect, n: attempts, t: iso } }`) that the
 * Practice Bank uses to show per-question-type progress.
 */

/**
 * Aggregates progress over a set of question IDs against the bankPractice map.
 *
 * @param {Array<string|number>} ids - question ids belonging to a type / skill / section
 * @param {Object<string, {c: boolean, n: number}>|null|undefined} bankPractice
 * @returns {{ total: number, practiced: number, correct: number, accuracy: number|null }}
 *   `accuracy` is a 0-100 integer over practiced items, or null when none practiced.
 */
export function progressForIds(ids, bankPractice) {
  const list = Array.isArray(ids) ? ids : [];
  const bp = bankPractice || {};
  let practiced = 0;
  let correct = 0;
  for (const id of list) {
    const rec = bp[String(id)];
    if (rec) {
      practiced += 1;
      if (rec.c) correct += 1;
    }
  }
  return {
    total: list.length,
    practiced,
    correct,
    accuracy: practiced > 0 ? Math.round((correct / practiced) * 100) : null,
  };
}

/**
 * Total practiced/correct across the whole bankPractice map (section-agnostic).
 *
 * @param {Object<string, {c: boolean}>|null|undefined} bankPractice
 * @returns {{ practiced: number, correct: number, accuracy: number|null }}
 */
export function overallBankProgress(bankPractice) {
  const entries = Object.values(bankPractice || {});
  const practiced = entries.length;
  const correct = entries.filter(r => r && r.c).length;
  return {
    practiced,
    correct,
    accuracy: practiced > 0 ? Math.round((correct / practiced) * 100) : null,
  };
}
