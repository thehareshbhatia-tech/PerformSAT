import {
  rwQuestionBank,
  RW_CANONICAL_SKILLS,
  RW_DOMAINS,
  RW_SKILL_ALIAS_MAP,
  getQuestionById,
  getQuestionsBySkillIds,
  getQuestionsByDomain,
  getTargetedWeaknessSet,
  getBankStats,
} from '../index';

// ─── Bank composition ───────────────────────────────────────────────────────

describe('rwBank composition', () => {
  it('exports a non-empty flattened bank', () => {
    expect(Array.isArray(rwQuestionBank)).toBe(true);
    expect(rwQuestionBank.length).toBeGreaterThan(500);
  });

  it('exposes the 11 canonical R&W skills', () => {
    expect(RW_CANONICAL_SKILLS).toHaveLength(11);
    expect(RW_CANONICAL_SKILLS).toContain('words-in-context');
    expect(RW_CANONICAL_SKILLS).toContain('rhetorical-synthesis');
    expect(RW_CANONICAL_SKILLS).toContain('boundaries');
  });

  it('exposes the 4 R&W domains', () => {
    expect(RW_DOMAINS).toHaveLength(4);
    expect(RW_DOMAINS).toContain('information-and-ideas');
    expect(RW_DOMAINS).toContain('craft-and-structure');
    expect(RW_DOMAINS).toContain('standard-english-conventions');
    expect(RW_DOMAINS).toContain('expression-of-ideas');
  });

  it('every flattened item has the required namespaced ID + section + skill array', () => {
    for (const q of rwQuestionBank) {
      expect(typeof q.id).toBe('string');
      expect(q.id.startsWith('rw-test')).toBe(true);
      expect(q.section).toBe('rw');
      expect(Array.isArray(q.skills)).toBe(true);
      expect(q.skills).toHaveLength(1);
      expect(q.skills[0]).toBe(q.skill);
    }
  });

  it('every item has a canonical skill from the 11-element set', () => {
    const set = new Set(RW_CANONICAL_SKILLS);
    for (const q of rwQuestionBank) {
      expect(set.has(q.skill)).toBe(true);
    }
  });

  it('every item has a canonical domain from the 4-element set', () => {
    const set = new Set(RW_DOMAINS);
    for (const q of rwQuestionBank) {
      expect(set.has(q.domain)).toBe(true);
    }
  });

  it('every item has 2+ choices and a correctAnswer that is one of them', () => {
    for (const q of rwQuestionBank) {
      expect(Array.isArray(q.choices)).toBe(true);
      expect(q.choices.length).toBeGreaterThanOrEqual(2);
      const ids = q.choices.map(c => c.id);
      expect(ids).toContain(q.correctAnswer);
    }
  });

  // T6 — locks in the flatten-time MCQ filter so the Try-Similar dispatcher
  // never gets a fill-in or student-produced-response shape it can't render.
  it('no item escapes the flatten with a non-MCQ shape (T6)', () => {
    for (const q of rwQuestionBank) {
      // type, when present, must be 'multiple-choice' (not 'fill-in' or 'spr')
      if (q.type !== undefined) {
        expect(q.type).toBe('multiple-choice');
      }
      // The shape itself must be MCQ — a stricter check than the type field.
      expect(Array.isArray(q.choices)).toBe(true);
      expect(q.choices.length).toBeGreaterThanOrEqual(2);
      // correctAnswer must be the id of one of the choices, not free-text.
      const choiceIds = q.choices.map(c => c.id);
      expect(choiceIds).toContain(q.correctAnswer);
    }
  });

  it('all IDs are unique across the bank', () => {
    const ids = new Set(rwQuestionBank.map(q => q.id));
    expect(ids.size).toBe(rwQuestionBank.length);
  });

  it('every item carries provenance fields (sourceTest, sourceModuleId, sourceQuestionId)', () => {
    for (const q of rwQuestionBank) {
      expect(typeof q.sourceTest).toBe('number');
      expect(q.sourceTest).toBeGreaterThanOrEqual(1);
      expect(q.sourceTest).toBeLessThanOrEqual(12);
      expect(typeof q.sourceModuleId).toBe('string');
      expect(typeof q.sourceQuestionId).toBe('number');
    }
  });

  it('every item has either passage, passages, or studentNotes (3 R&W content shapes)', () => {
    for (const q of rwQuestionBank) {
      const hasReadable =
        (typeof q.passage === 'string' && q.passage.length > 0)
        || (Array.isArray(q.passages) && q.passages.length >= 2)
        || (q.studentNotes && Array.isArray(q.studentNotes.bullets));
      expect(hasReadable).toBe(true);
    }
  });

  it('calculatorAllowed is always false on R&W items', () => {
    for (const q of rwQuestionBank) {
      expect(q.calculatorAllowed).toBe(false);
    }
  });
});

// ─── Skill resolution / alias map ───────────────────────────────────────────

describe('rwBank skill resolution', () => {
  it('resolves canonical skill IDs', () => {
    const items = getQuestionsBySkillIds(['words-in-context']);
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(q => q.skill === 'words-in-context')).toBe(true);
  });

  it('resolves capitalized variants via alias map', () => {
    const canonical = getQuestionsBySkillIds(['transitions']).length;
    const aliased = getQuestionsBySkillIds(['Transitions']).length;
    expect(aliased).toBe(canonical);
    expect(aliased).toBeGreaterThan(0);
  });

  it('resolves space-separated variants via alias map', () => {
    const canonical = getQuestionsBySkillIds(['words-in-context']).length;
    const aliased = getQuestionsBySkillIds(['words in context']).length;
    expect(aliased).toBe(canonical);
  });

  it('resolves "vocabulary" → words-in-context', () => {
    const items = getQuestionsBySkillIds(['vocabulary']);
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(q => q.skill === 'words-in-context')).toBe(true);
  });

  it('resolves "grammar" → form-structure-and-sense', () => {
    const items = getQuestionsBySkillIds(['grammar']);
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(q => q.skill === 'form-structure-and-sense')).toBe(true);
  });

  it('alias map includes all 11 canonical skills', () => {
    for (const sid of RW_CANONICAL_SKILLS) {
      expect(RW_SKILL_ALIAS_MAP).toHaveProperty(sid);
    }
  });

  it('returns [] for unknown skill IDs', () => {
    expect(getQuestionsBySkillIds(['definitely-not-a-skill'])).toEqual([]);
  });
});

// ─── getQuestionById ────────────────────────────────────────────────────────

describe('rwBank getQuestionById', () => {
  it('returns the item for a valid namespaced ID', () => {
    const sample = rwQuestionBank[0];
    expect(getQuestionById(sample.id)).toBe(sample);
  });

  it('returns null for an unknown ID', () => {
    expect(getQuestionById('rw-test99-module-99-9999')).toBe(null);
    expect(getQuestionById('bank-alg-001')).toBe(null);
    expect(getQuestionById(undefined)).toBe(null);
  });
});

// ─── getQuestionsBySkillIds options ─────────────────────────────────────────

describe('rwBank getQuestionsBySkillIds options', () => {
  it('respects the difficulty filter', () => {
    const easy = getQuestionsBySkillIds(['words-in-context'], { difficulty: 'easy' });
    expect(easy.length).toBeGreaterThan(0);
    expect(easy.every(q => q.difficulty === 'easy')).toBe(true);
  });

  it('respects excludeIds', () => {
    const all = getQuestionsBySkillIds(['words-in-context']);
    const exclude = all.slice(0, 3).map(q => q.id);
    const excluded = getQuestionsBySkillIds(['words-in-context'], { excludeIds: exclude });
    expect(excluded.length).toBe(all.length - 3);
    for (const q of excluded) expect(exclude).not.toContain(q.id);
  });

  it('respects limit', () => {
    const limited = getQuestionsBySkillIds(['words-in-context'], { limit: 5 });
    expect(limited).toHaveLength(5);
  });
});

// ─── getQuestionsByDomain ───────────────────────────────────────────────────

describe('rwBank getQuestionsByDomain', () => {
  it('returns items in the requested domain', () => {
    const items = getQuestionsByDomain('craft-and-structure');
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(q => q.domain === 'craft-and-structure')).toBe(true);
  });

  it('returns [] for an unknown domain', () => {
    expect(getQuestionsByDomain('not-a-domain')).toEqual([]);
  });
});

// ─── getTargetedWeaknessSet ─────────────────────────────────────────────────

describe('rwBank getTargetedWeaknessSet', () => {
  it('returns a balanced drill set for a single weak skill', () => {
    const items = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'words-in-context' }],
      count: 10,
    });
    expect(items.length).toBeGreaterThan(0);
    expect(items.length).toBeLessThanOrEqual(10);
    expect(items.every(q => q.skill === 'words-in-context')).toBe(true);
  });

  it('honors the difficulty mix', () => {
    const items = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'transitions' }],
      difficultyMix: { easy: 0.0, medium: 0.0, hard: 1.0 },
      count: 5,
    });
    if (items.length === 0) return; // no hard items at this skill — acceptable
    expect(items.every(q => q.difficulty === 'hard')).toBe(true);
  });

  it('excludes IDs from the result', () => {
    const initial = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'boundaries' }],
      count: 5,
    });
    if (initial.length === 0) return;
    const excludeIds = initial.map(q => q.id);
    const second = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'boundaries' }],
      excludeIds,
      count: 50,
    });
    for (const q of second) expect(excludeIds).not.toContain(q.id);
  });

  it('falls back to domain when skill returns empty', () => {
    const items = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'unknown-skill', domain: 'craft-and-structure' }],
      count: 5,
    });
    expect(items.length).toBeGreaterThan(0);
    expect(items.every(q => q.domain === 'craft-and-structure')).toBe(true);
  });
});

// ─── Phase 4 P3 / R&W Tier-1 cascade ─────────────────────────────────────────
//
// RESOLVED (Phase 4 P3): the TODO #1 audit deferred R&W exact-match routing
// because <1% of items carry **SAT Pattern: <Title>** explanation headers (the
// math signal). P3 instead derives a pattern from always-present fields
// (correct-choice punctuation, leading transition word, question stem) via
// deriveRWPattern, giving boundaries / transitions / text-structure a Tier-1
// pattern -> Tier-3 skill cascade. deriveRWPattern's own test pins the exact
// per-pattern counts; these pin the cascade behavior + the Tier-3 iron-rule.

describe('rwBank Tier-1 cascade (Phase 4 P3)', () => {
  it('still has near-zero explanation-header patterns (why P3 derives instead)', () => {
    // Documents the original blocker: explanation headers remain too sparse to
    // route on. P3 does NOT add headers; it derives rwPattern from item fields.
    const withHeader = rwQuestionBank.filter(
      (q) => typeof q.explanation === 'string' && /\*\*SAT Pattern:/.test(q.explanation),
    );
    expect(withHeader.length).toBeLessThan(20);
  });

  it('fires Tier-1 for a real pattern slug above threshold', () => {
    const items = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'boundaries', domain: 'standard-english-conventions', missedPatterns: ['boundaries-semicolon'] }],
      count: 10,
    });
    expect(items.length).toBeGreaterThan(0);
    // Tier-1 pool is exactly the pattern's items, not the whole skill.
    expect(items.every((q) => q.rwPattern === 'boundaries-semicolon')).toBe(true);
  });

  it('★IRON RULE★ — a weakness with no missedPatterns routes Tier-3 (skill pool), unchanged', () => {
    const noPattern = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'boundaries', domain: 'standard-english-conventions' }],
      count: 10,
    });
    const fakePattern = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'boundaries', domain: 'standard-english-conventions', missedPatterns: ['does-not-exist'] }],
      count: 10,
    });
    // A non-matching pattern pool (< threshold) falls through to the same
    // Tier-3 skill pool as omitting missedPatterns entirely.
    expect(noPattern.length).toBe(fakePattern.length);
    expect(noPattern.every((q) => q.skills.includes('boundaries'))).toBe(true);
  });

  it('accepts a weakness with missedPatterns (no-op, API symmetry with math bank)', () => {
    const items = getTargetedWeaknessSet({
      weakSkills: [
        {
          skillId: 'words-in-context',
          domain: 'craft-and-structure',
          // missedPatterns is accepted but ignored — R&W has no pattern data.
          missedPatterns: ['hypothetical-r-and-w-pattern'],
        },
      ],
      count: 5,
    });
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
    expect(items.every((q) => q.skills.includes('words-in-context'))).toBe(true);
  });

  it('★REGRESSION★ — passing missedPatterns vs omitting it returns equivalent shape', () => {
    // Pin the parity invariant. Both forms return items from the same skill
    // pool; the missedPatterns argument is a no-op for R&W.
    const a = getTargetedWeaknessSet({
      weakSkills: [{ skillId: 'transitions', domain: 'expression-of-ideas' }],
      count: 10,
    });
    const b = getTargetedWeaknessSet({
      weakSkills: [
        { skillId: 'transitions', domain: 'expression-of-ideas', missedPatterns: ['some-pattern'] },
      ],
      count: 10,
    });
    // Same skill, same domain → same eligible pool. Counts match.
    expect(a.length).toBe(b.length);
    // Both pools draw from the same skill bucket
    const aSkills = new Set(a.flatMap((q) => q.skills));
    const bSkills = new Set(b.flatMap((q) => q.skills));
    expect(aSkills.has('transitions') && bSkills.has('transitions')).toBe(true);
  });
});

// ─── getBankStats ───────────────────────────────────────────────────────────

describe('rwBank getBankStats', () => {
  it('reports a count matching the bank length', () => {
    const stats = getBankStats();
    expect(stats.total).toBe(rwQuestionBank.length);
  });

  it('reports per-domain counts that sum to total', () => {
    const stats = getBankStats();
    const sum = Object.values(stats.byDomain).reduce((a, b) => a + b, 0);
    expect(sum).toBe(stats.total);
  });

  it('reports per-difficulty counts that sum to total', () => {
    const stats = getBankStats();
    const sum = Object.values(stats.byDifficulty).reduce((a, b) => a + b, 0);
    expect(sum).toBe(stats.total);
  });

  it('reports per-source-test counts spanning 12 tests', () => {
    const stats = getBankStats();
    expect(Object.keys(stats.bySourceTest)).toHaveLength(12);
  });

  it('reports per-skill counts for all 11 canonical skills', () => {
    const stats = getBankStats();
    for (const sid of RW_CANONICAL_SKILLS) {
      expect(stats.bySkill[sid]).toBeGreaterThan(0);
    }
  });
});
