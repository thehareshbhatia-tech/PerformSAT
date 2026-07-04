/**
 * GUARD TEST — "no test result silently fails to save, ever again."
 *
 * A full practice test persists a per-attempt snapshot of every question the
 * student saw (see practiceTestService.recordPracticeTestResult). Some questions
 * carry 2D data Firestore HARD-REJECTS — a table question's questionTable.rows
 * is [["Facebook","54%"],…] (a nested array), and diagram params can hold the
 * same shape. One such field used to reject the whole save transaction and lose
 * the student's score.
 *
 * This test walks EVERY question in EVERY practice test (both modules + the
 * Module-2 Easy variant) and the entire R&W bank, builds the exact snapshot row
 * the app persists, and asserts:
 *   1. sanitizeForFirestore() leaves ZERO Firestore-hostile values, and
 *   2. restoreFromFirestore(sanitizeForFirestore(row)) === row (lossless).
 *
 * If anyone adds a new table / matrix / scatter question (or any nested-array
 * field) to any test or the bank, this proves the save path still handles it.
 * If the sanitizer is ever removed or weakened, this fails.
 */

const {
  sanitizeForFirestore,
  restoreFromFirestore,
  findFirestoreHostileValues,
} = require('../../utils/firestoreSafe');
const { getAllPracticeTests } = require('../practiceTests');
const { rwQuestionBank } = require('../questions/rwBank');

// Same skill-normalization the snapshot builder uses (diagnosticEngine).
const getQuestionSkills = (q) => {
  if (Array.isArray(q?.skills)) return q.skills;
  if (typeof q?.skill === 'string' && q.skill) return [q.skill];
  return [];
};

// EXACT field set persisted per question in PracticeTest.jsx's questionsSnapshot.
const buildSnapshotRow = (q, section, modIdx, qIdx) => ({
  id: q.id,
  type: q.type,
  stem: q.stem ?? q.question ?? null,
  choices: q.choices || null,
  correctAnswer: q.correctAnswer ?? null,
  explanation: q.explanation ?? null,
  difficulty: q.difficulty || null,
  band: q.band ?? null,
  skills: getQuestionSkills(q),
  passage: q.passage ?? null,
  passages: q.passages ?? null,
  studentNotes: q.studentNotes ?? null,
  questionContinued: q.questionContinued ?? null,
  diagram: q.diagram ?? null,
  questionTable: q.questionTable ?? null,
  questionFormula: q.questionFormula ?? null,
  section: section ?? null,
  moduleIndex: modIdx,
  questionIndex: qIdx,
});

// Collect every persisted question row across the whole catalog + bank.
const collectRows = () => {
  const rows = [];
  getAllPracticeTests().forEach((test) => {
    const modules = [
      ...(test.modules || []),
      ...(test.module2Easy ? [test.module2Easy] : []),
    ];
    modules.forEach((mod, modIdx) => {
      (mod.questions || []).forEach((q, qIdx) => {
        rows.push({
          label: `${test.id} / mod${modIdx} / q${qIdx} (id=${q.id})`,
          row: buildSnapshotRow(q, mod.section, modIdx, qIdx),
        });
      });
    });
  });
  rwQuestionBank.forEach((q, i) => {
    rows.push({
      label: `rwBank[${i}] (id=${q.id})`,
      row: buildSnapshotRow(q, 'reading-writing', 0, i),
    });
  });
  return rows;
};

const ALL_ROWS = collectRows();

describe('Firestore snapshot safety (data-layer guard)', () => {
  test('catalog is non-trivial (sanity — the guard actually has data)', () => {
    // 12 tests × ~98 questions + 678 bank items → thousands of rows.
    expect(ALL_ROWS.length).toBeGreaterThan(1000);
  });

  test('at least one real question carries a nested array (guard is not vacuous)', () => {
    // If this ever hits zero, table/diagram data changed shape — revisit whether
    // this guard still exercises the nested-array path it exists to protect.
    const withNested = ALL_ROWS.filter(
      ({ row }) => findFirestoreHostileValues(row).nestedArrays.length > 0
    );
    expect(withNested.length).toBeGreaterThan(0);
  });

  test('EVERY question snapshot is Firestore-safe after sanitize, and round-trips losslessly', () => {
    const failures = [];
    ALL_ROWS.forEach(({ label, row }) => {
      const safe = sanitizeForFirestore(row);
      const hostile = findFirestoreHostileValues(safe);
      if (
        hostile.nestedArrays.length ||
        hostile.undefinedValues.length ||
        hostile.nonFinite.length
      ) {
        failures.push(`${label}: still hostile after sanitize → ${JSON.stringify(hostile)}`);
        return;
      }
      // Lossless: what the reader gets back must equal what the student saw.
      // (JSON compare tolerates undefined→null: the snapshot row null-guards its
      // own fields, so there are no undefineds to drop here.)
      const restored = restoreFromFirestore(safe);
      if (JSON.stringify(restored) !== JSON.stringify(row)) {
        failures.push(`${label}: round-trip not lossless`);
      }
    });
    expect(failures).toEqual([]);
  });
});
