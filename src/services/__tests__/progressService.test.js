/**
 * Tests for markLessonComplete / markLessonIncomplete.
 *
 * Guards the Firestore dotted-key merge trap: set()+merge treats dotted keys
 * as LITERAL field names (only update() splits dots into nested field paths),
 * so the first-lesson create branch must write a NESTED completedLessons map
 * and markLessonIncomplete must go through updateDoc for its dotted path.
 *
 * The mock mirrors practiceTestService.test.js: update() applies dotted keys
 * as nested paths (faithful), set()+merge keeps keys literal (faithful).
 */

jest.mock('../../firebase/config', () => ({ db: { __isFakeDb: true } }));

jest.mock('firebase/firestore', () => {
  const store = new Map();

  const deepClone = (v) => {
    if (v === null || typeof v !== 'object') return v;
    if (Array.isArray(v)) return v.map(deepClone);
    const out = {};
    Object.keys(v).forEach(k => { out[k] = deepClone(v[k]); });
    return out;
  };

  // update() semantics: dotted keys are nested field PATHS.
  const applyDotted = (target, updates) => {
    const out = deepClone(target);
    Object.entries(updates).forEach(([key, value]) => {
      if (!key.includes('.')) {
        out[key] = deepClone(value);
        return;
      }
      const parts = key.split('.');
      let cursor = out;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!cursor[part] || typeof cursor[part] !== 'object') {
          cursor[part] = {};
        }
        cursor = cursor[part];
      }
      cursor[parts[parts.length - 1]] = deepClone(value);
    });
    return out;
  };

  // set()+merge semantics: keys are LITERAL (dots are NOT path separators);
  // plain-object values deep-merge, everything else replaces.
  const mergeLiteral = (target, patch) => {
    const isPlainObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
    const out = deepClone(target);
    Object.entries(patch).forEach(([key, value]) => {
      out[key] = (isPlainObj(value) && isPlainObj(out[key]))
        ? mergeLiteral(out[key], value)
        : deepClone(value);
    });
    return out;
  };

  return {
    __getStore: () => store,
    __resetStore: () => { store.clear(); },

    doc: (...args) => ({ __path: args.slice(1).join('/') }),
    getDoc: async (ref) => {
      const data = store.get(ref.__path);
      return {
        exists: () => data !== undefined,
        data: () => deepClone(data),
      };
    },
    setDoc: async (ref, data, options) => {
      if (options?.merge) {
        store.set(ref.__path, mergeLiteral(store.get(ref.__path) || {}, data));
      } else {
        store.set(ref.__path, deepClone(data));
      }
    },
    updateDoc: async (ref, data) => {
      store.set(ref.__path, applyDotted(store.get(ref.__path) || {}, data));
    },
    serverTimestamp: () => ({ __serverTimestamp: true }),
    increment: (n) => ({ __increment: n }),
  };
});

const { markLessonComplete, markLessonIncomplete, markChapterComplete, markChapterIncomplete } = require('../progressService');

const firestoreMock = require('firebase/firestore');
const getStore = () => firestoreMock.__getStore();

beforeEach(() => {
  firestoreMock.__resetStore();
  jest.clearAllMocks();
});

describe('markLessonComplete — first lesson (progress doc missing)', () => {
  test('writes completedLessons as a NESTED map, never a literal dotted field', async () => {
    await markLessonComplete('u1', 'algebra', 3, { title: 'Slope', type: 'video' });

    const main = getStore().get('progress/u1');
    expect(main).toBeTruthy();
    expect(Object.keys(main).some((k) => k.includes('.'))).toBe(false);
    expect(main.completedLessons['algebra-3']).toMatchObject({
      completed: true,
      moduleId: 'algebra',
      lessonId: 3,
      lessonTitle: 'Slope',
      lessonType: 'video',
    });
    expect(main.totalLessonsCompleted).toBe(1);
    expect(main.totalModulesCompleted).toBe(0);
  });
});

describe('markLessonComplete — existing doc', () => {
  test('merges the new lesson into the nested map, keeping siblings', async () => {
    getStore().set('progress/u1', {
      userId: 'u1',
      completedLessons: { 'algebra-1': { completed: true } },
      totalLessonsCompleted: 1,
    });

    await markLessonComplete('u1', 'algebra', 2, { title: 'Systems', type: 'video' });

    const main = getStore().get('progress/u1');
    expect(main.completedLessons['algebra-1']).toBeTruthy();
    expect(main.completedLessons['algebra-2'].completed).toBe(true);
    expect(main.totalLessonsCompleted).toEqual({ __increment: 1 });
  });
});

describe('markLessonIncomplete', () => {
  test('flips the NESTED entry to completed:false via a dot-path update (no literal dotted field)', async () => {
    getStore().set('progress/u1', {
      userId: 'u1',
      completedLessons: { 'algebra-3': { completed: true, moduleId: 'algebra', lessonId: 3 } },
      totalLessonsCompleted: 1,
    });

    await markLessonIncomplete('u1', 'algebra', 3);

    const main = getStore().get('progress/u1');
    expect(Object.keys(main).some((k) => k.includes('.'))).toBe(false);
    expect(main.completedLessons['algebra-3'].completed).toBe(false);
    // Other lesson fields survive the flip (spread of the existing entry).
    expect(main.completedLessons['algebra-3'].moduleId).toBe('algebra');
    expect(main.totalLessonsCompleted).toEqual({ __increment: -1 });
  });

  test('is a no-op when the lesson was not completed', async () => {
    getStore().set('progress/u1', { userId: 'u1', completedLessons: {} });

    await markLessonIncomplete('u1', 'algebra', 3);

    const main = getStore().get('progress/u1');
    expect(main.completedLessons).toEqual({});
    expect(main.totalLessonsCompleted).toBeUndefined();
  });

  test('is a no-op when the progress doc does not exist', async () => {
    await markLessonIncomplete('ghost', 'algebra', 3);
    expect(getStore().get('progress/ghost')).toBeUndefined();
  });
});

describe('markChapterComplete — first chapter (progress doc missing)', () => {
  test('writes chaptersRead as a NESTED map, never a literal dotted field', async () => {
    await markChapterComplete('u1', 'math-quadratics', { title: 'Quadratics', unitId: 'math-advanced' });

    const main = getStore().get('progress/u1');
    expect(main).toBeTruthy();
    expect(Object.keys(main).some((k) => k.includes('.'))).toBe(false);
    expect(main.chaptersRead['math-quadratics']).toMatchObject({
      completed: true,
      chapterId: 'math-quadratics',
      chapterTitle: 'Quadratics',
      unitId: 'math-advanced',
    });
  });
});

describe('markChapterComplete — existing doc', () => {
  test('merges the new chapter into the nested map, keeping siblings', async () => {
    getStore().set('progress/u1', {
      userId: 'u1',
      chaptersRead: { 'math-functions': { completed: true } },
    });

    await markChapterComplete('u1', 'math-systems', { title: 'Systems' });

    const main = getStore().get('progress/u1');
    expect(main.chaptersRead['math-functions']).toBeTruthy();
    expect(main.chaptersRead['math-systems'].completed).toBe(true);
    expect(Object.keys(main).some((k) => k.includes('.'))).toBe(false);
  });
});

describe('markChapterIncomplete', () => {
  test('flips the NESTED entry to completed:false via a dot-path update', async () => {
    getStore().set('progress/u1', {
      userId: 'u1',
      chaptersRead: { 'math-circles': { completed: true, chapterId: 'math-circles', unitId: 'math-geometry' } },
    });

    await markChapterIncomplete('u1', 'math-circles');

    const main = getStore().get('progress/u1');
    expect(Object.keys(main).some((k) => k.includes('.'))).toBe(false);
    expect(main.chaptersRead['math-circles'].completed).toBe(false);
    expect(main.chaptersRead['math-circles'].unitId).toBe('math-geometry');
  });

  test('is a no-op when the chapter was not read', async () => {
    getStore().set('progress/u1', { userId: 'u1', chaptersRead: {} });
    await markChapterIncomplete('u1', 'math-circles');
    const main = getStore().get('progress/u1');
    expect(main.chaptersRead).toEqual({});
  });

  test('is a no-op when the progress doc does not exist', async () => {
    await markChapterIncomplete('ghost', 'math-circles');
    expect(getStore().get('progress/ghost')).toBeUndefined();
  });
});
