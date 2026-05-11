import { extractSatPattern } from '../../questions/extractSatPattern';
import { practiceTest1 } from '../practiceTest1';
import { practiceTest2 } from '../practiceTest2';
import { practiceTest3 } from '../practiceTest3';
import { practiceTest4 } from '../practiceTest4';
import { practiceTest5 } from '../practiceTest5';
import { practiceTest6 } from '../practiceTest6';
import { practiceTest7 } from '../practiceTest7';
import { practiceTest8 } from '../practiceTest8';
import { practiceTest9 } from '../practiceTest9';
import { practiceTest10 } from '../practiceTest10';
import { practiceTest11 } from '../practiceTest11';
import { practiceTest12 } from '../practiceTest12';

const ALL_TESTS = [
  { name: 'PT1', test: practiceTest1 },
  { name: 'PT2', test: practiceTest2 },
  { name: 'PT3', test: practiceTest3 },
  { name: 'PT4', test: practiceTest4 },
  { name: 'PT5', test: practiceTest5 },
  { name: 'PT6', test: practiceTest6 },
  { name: 'PT7', test: practiceTest7 },
  { name: 'PT8', test: practiceTest8 },
  { name: 'PT9', test: practiceTest9 },
  { name: 'PT10', test: practiceTest10 },
  { name: 'PT11', test: practiceTest11 },
  { name: 'PT12', test: practiceTest12 },
];

// Drill routing Tier 1 (exact SAT Pattern) depends on every test-bundle
// item carrying `**SAT Pattern: <Title>**` in its explanation. If a new
// test item ships without one, diagnosis will silently omit it from
// `missedPatterns` — the cascade still works (falls to Tier 2/3), but
// Tier 1 precision degrades. Catch this at test time.

describe('practice test bundle integrity — SAT Pattern coverage', () => {
  ALL_TESTS.forEach(({ name, test }) => {
    describe(`${name}`, () => {
      it('every item has a parseable **SAT Pattern: <Title>** in its explanation', () => {
        const offenders = [];
        test.modules.forEach((mod, modIdx) => {
          (mod.questions || []).forEach((q, qIdx) => {
            const pattern = extractSatPattern(q.explanation);
            if (!pattern) {
              offenders.push(
                `${name} module-${modIdx} q${qIdx + 1} (id=${q.id}): no parseable SAT Pattern`,
              );
            }
          });
        });
        expect(offenders).toEqual([]);
      });
    });
  });

  it('all 12 tests combined cover at least 500 items (sanity check)', () => {
    let total = 0;
    ALL_TESTS.forEach(({ test }) => {
      test.modules.forEach(mod => {
        total += (mod.questions || []).length;
      });
    });
    // 12 tests × 44 items/test = 528. Floor at 500 to allow for the
    // M2Easy alternates which aren't in this list, without locking in
    // the exact count.
    expect(total).toBeGreaterThanOrEqual(500);
  });
});
