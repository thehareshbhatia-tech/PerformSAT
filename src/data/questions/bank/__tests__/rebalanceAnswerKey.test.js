import { rebalanceAnswerKey, isCanonicalExplanation } from '../rebalanceAnswerKey';
import { questionBank } from '../index';
import { algebraBank } from '../algebra';
import { problemSolvingBank } from '../problemSolving';
import { advancedMathBank } from '../advancedMath';
import { geometryBank } from '../geometry';

const makeItem = (over = {}) => ({
  id: 'bank-x-001',
  type: 'multiple-choice',
  choices: [
    { id: 'A', text: '100' },
    { id: 'B', text: '75' },
    { id: 'C', text: '200' },
    { id: 'D', text: '600' },
  ],
  correctAnswer: 'A',
  explanation:
    '**Choice A is correct.** The rate is $100$.\n' +
    '* Choice B ($75$): wrong divisor.\n' +
    '* Choice C ($200$): doubled.\n' +
    '* Choice D ($600$): used the rise.',
  ...over,
});

const contentOf = (c) => { const { id, ...rest } = c; return JSON.stringify(rest); };
const correctContent = (item) => contentOf(item.choices.find((c) => c.id === item.correctAnswer));
const statedCorrectLetter = (item) => {
  const m = String(item.explanation).replace(/\$[^$]*\$/g, '§').match(/choice\s+([A-D])\s+is\s+correct/i);
  return m ? m[1].toUpperCase() : null;
};

describe('rebalanceAnswerKey — invariants (hold whether or not the item moves)', () => {
  // Sweep many ids so we exercise all four target slots.
  const ids = Array.from({ length: 40 }, (_, i) => `bank-x-${String(i).padStart(3, '0')}`);

  test('never changes WHICH answer is correct (content preserved)', () => {
    for (const id of ids) {
      const src = makeItem({ id });
      const out = rebalanceAnswerKey(src);
      expect(correctContent(out)).toBe(correctContent(src));
    }
  });

  test('the explanation "Choice X is correct" always matches the new correctAnswer', () => {
    for (const id of ids) {
      const out = rebalanceAnswerKey(makeItem({ id }));
      expect(statedCorrectLetter(out)).toBe(out.correctAnswer);
    }
  });

  test('every "Choice L ($value$)" distractor ref matches the choice now at L', () => {
    for (const id of ids) {
      const out = rebalanceAnswerKey(makeItem({ id }));
      const byLetter = Object.fromEntries(out.choices.map((c) => [c.id, c.text]));
      const re = /Choice ([A-D]) \(\$([^$]+)\$\)/g;
      let m;
      while ((m = re.exec(out.explanation)) !== null) {
        expect(byLetter[m[1]]).toBe(m[2]);
      }
    }
  });

  test('is deterministic (same id → same correctAnswer) and idempotent', () => {
    const a = rebalanceAnswerKey(makeItem({ id: 'bank-x-007' }));
    const b = rebalanceAnswerKey(makeItem({ id: 'bank-x-007' }));
    expect(b.correctAnswer).toBe(a.correctAnswer);
    // applying again is a no-op (the id already maps to its slot)
    const c = rebalanceAnswerKey(a);
    expect(c.correctAnswer).toBe(a.correctAnswer);
    expect(correctContent(c)).toBe(correctContent(a));
  });

  test('actually moves at least some items off A (the swap path runs)', () => {
    const moved = ids.filter((id) => rebalanceAnswerKey(makeItem({ id })).correctAnswer !== 'A');
    expect(moved.length).toBeGreaterThan(0);
  });
});

describe('rebalanceAnswerKey — skips items it cannot safely transform', () => {
  test('non-multiple-choice item is returned unchanged (same reference)', () => {
    const fillIn = makeItem({ type: 'fill-in', choices: undefined });
    expect(rebalanceAnswerKey(fillIn)).toBe(fillIn);
  });

  test('item with a non-canonical letter ref e.g. "(A)" is returned unchanged', () => {
    const item = makeItem({ id: 'bank-x-noncanon', explanation: '**Choice A is correct.** Pick (A), not the others.' });
    expect(rebalanceAnswerKey(item)).toBe(item);
  });

  test('item missing a "Choice X is correct" line is returned unchanged', () => {
    const item = makeItem({ explanation: 'The answer follows from the slope.' });
    expect(rebalanceAnswerKey(item)).toBe(item);
  });

  test('non-A,B,C,D id order is returned unchanged', () => {
    const item = makeItem({ choices: [{ id: 'B', text: '1' }, { id: 'A', text: '2' }, { id: 'C', text: '3' }, { id: 'D', text: '4' }] });
    expect(rebalanceAnswerKey(item)).toBe(item);
  });

  test('isCanonicalExplanation does not flag geometric point labels', () => {
    expect(isCanonicalExplanation('**Choice A is correct.** Point A lies on line B.', 'A')).toBe(true);
  });
});

describe('rebalanceAnswerKey — bank-wide guarantees (real data)', () => {
  const rawById = new Map(
    [...algebraBank, ...problemSolvingBank, ...advancedMathBank, ...geometryBank].map((q) => [q.id, q])
  );
  // Only the four hand-authored shards (the skewed set); topic items pass through.
  const servedMcq = questionBank.filter((q) => q.type === 'multiple-choice' && rawById.has(q.id));

  test('correctness preserved for EVERY item (correct choice content unchanged vs source)', () => {
    const broken = servedMcq.filter((q) => correctContent(q) !== correctContent(rawById.get(q.id)));
    expect(broken.map((q) => q.id)).toEqual([]);
  });

  test('every canonical explanation "Choice X is correct" matches the served correctAnswer', () => {
    const mismatched = servedMcq.filter((q) => {
      const stated = statedCorrectLetter(q);
      return stated && stated !== q.correctAnswer;
    });
    expect(mismatched.map((q) => q.id)).toEqual([]);
  });

  test('served answer-key distribution is roughly uniform (each 18%-32%, was 59% A)', () => {
    const pos = { A: 0, B: 0, C: 0, D: 0 };
    servedMcq.forEach((q) => { pos[q.correctAnswer] = (pos[q.correctAnswer] || 0) + 1; });
    const total = servedMcq.length;
    for (const L of ['A', 'B', 'C', 'D']) {
      const pct = (pos[L] / total) * 100;
      expect(pct).toBeGreaterThanOrEqual(18);
      expect(pct).toBeLessThanOrEqual(32);
    }
  });
});
