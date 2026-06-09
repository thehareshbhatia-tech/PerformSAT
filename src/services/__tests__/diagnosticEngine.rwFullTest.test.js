/**
 * diagnosticEngine.rwFullTest.test.js — R&W visibility in full-test diagnosis.
 *
 * Regression suite for the root defect where runDiagnostic read `q.skills`
 * (array, math shape) directly instead of normalizing through
 * getQuestionSkills(), so every R&W test-bundle item (which carries
 * `q.skill`, singular) entered analysis with ZERO skills:
 *   - analyzeSkills emitted no R&W weaknesses (drill pipeline starved)
 *   - deriveRWPattern slugs were computed but dropped (no skillMap entry)
 *   - inferDomain([]) defaulted ~54 R&W items per full test into 'algebra',
 *     corrupting math domain accuracy, projections, and prioritizedActions.
 *
 * Fixtures mirror the REAL source shapes: math questions in test-bundle/bank
 * shape (skills: string[]), R&W questions in R&W test-bundle shape
 * (skill: string — see src/data/practiceTests/practiceTest1RW.js).
 */

import { runDiagnostic, getQuestionSkills } from '../diagnosticEngine';
import { RW_DOMAINS } from '../../data/questions/rwBank/taxonomy';

const MATH_DOMAINS = ['algebra', 'problem-solving', 'advanced-math', 'geometry'];

// ── Fixture builders ────────────────────────────────────────────────────────

const mkMathQ = ({ id, skills, satPatternTitle, difficulty = 'easy' }) => ({
  id,
  type: 'multiple-choice',
  difficulty,
  skills,
  correctAnswer: 'B',
  choices: [
    { id: 'A', text: 'wrong' },
    { id: 'B', text: 'right' },
    { id: 'C', text: 'also-wrong' },
    { id: 'D', text: 'still-wrong' },
  ],
  explanation: satPatternTitle
    ? `**SAT Pattern: ${satPatternTitle}**\n\nChoice B is correct.\n\nDetails.`
    : 'No SAT Pattern header here.',
});

// R&W test-bundle shape: `skill` SINGULAR, no `skills` array, no SAT Pattern
// header in the explanation. `correctText` lets each test plant the
// punctuation / transition signal deriveRWPattern keys off.
const mkRWQ = ({ id, skill, correctText, question = 'Which choice completes the text?', difficulty = 'easy' }) => ({
  id,
  type: 'multiple-choice',
  difficulty,
  band: 2,
  skill,
  passage: 'A short original passage written for this fixture.',
  question,
  choices: [
    { id: 'A', text: 'a plainly wrong choice' },
    { id: 'B', text: correctText },
    { id: 'C', text: 'another wrong choice' },
    { id: 'D', text: 'a final wrong choice' },
  ],
  correctAnswer: 'B',
  explanation: 'The correct answer is B. Plain R&W explanation, no pattern header.',
});

// Mixed full test: module 0 = math, module 1 = R&W (mirrors buildFullTest's
// merged R&W+Math composite, which is how full tests run in production).
const buildMixedTest = () => ({
  id: 'synthetic-mixed-test',
  title: 'Synthetic mixed full test',
  modules: [
    {
      id: 'module-1',
      questions: [
        mkMathQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
        mkMathQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
        mkMathQ({ id: 3, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
      ],
    },
    {
      id: 'module-2',
      questions: [
        // boundaries ×3 — correct choice carries a semicolon → deriveRWPattern
        // emits 'boundaries-semicolon'.
        mkRWQ({ id: 101, skill: 'boundaries', correctText: 'the ecologist; she had' }),
        mkRWQ({ id: 102, skill: 'boundaries', correctText: 'the survey; its results' }),
        mkRWQ({ id: 103, skill: 'boundaries', correctText: 'the reef; both teams' }),
        // transitions ×2 — correct choice leads with a contrast word →
        // 'transitions-contrast'.
        mkRWQ({ id: 104, skill: 'transitions', correctText: 'However,' }),
        mkRWQ({ id: 105, skill: 'transitions', correctText: 'Nevertheless,' }),
        // words-in-context ×2 — no deterministic pattern (always Tier-3).
        mkRWQ({ id: 106, skill: 'words-in-context', correctText: 'livelihoods' }),
        mkRWQ({ id: 107, skill: 'words-in-context', correctText: 'remains' }),
      ],
    },
  ],
});

// Student answers: math 1/3 (Q1+Q2 wrong), boundaries 0/3, transitions 0/2,
// words-in-context 1/2 (one right, one wrong — 50% is NOT weak per the
// `< 0.5` rule). All misses are attempted (not blank) so they classify as
// real errors, not UNANSWERED.
const MIXED_ANSWERS = {
  '0-0': 'A', '0-1': 'A', '0-2': 'B',
  '1-0': 'A', '1-1': 'C', '1-2': 'D',
  '1-3': 'A', '1-4': 'C',
  '1-5': 'B', '1-6': 'A',
};

const runMixed = () => runDiagnostic(buildMixedTest(), MIXED_ANSWERS, { questionDetails: {} });

// ── (a) R&W weaknesses appear with section 'rw' and real skill ids ─────────

describe('runDiagnostic on a mixed math+R&W full test', () => {
  it('emits R&W weaknesses with section "rw", real skillIds, and R&W domains', () => {
    const result = runMixed();
    const boundaries = result.skillAnalysis.weakSkills.find(w => w.skillId === 'boundaries');
    const transitions = result.skillAnalysis.weakSkills.find(w => w.skillId === 'transitions');

    expect(boundaries).toBeDefined();
    expect(boundaries.section).toBe('rw');
    expect(boundaries.domain).toBe('standard-english-conventions');
    expect(boundaries.total).toBe(3);
    expect(boundaries.correct).toBe(0);
    expect(boundaries.name).toBeTruthy();

    expect(transitions).toBeDefined();
    expect(transitions.section).toBe('rw');
    expect(transitions.domain).toBe('expression-of-ideas');
  });

  it('math weaknesses still come out section "math" alongside R&W ones', () => {
    const result = runMixed();
    const ratios = result.skillAnalysis.weakSkills.find(w => w.skillId === 'ratios');
    expect(ratios).toBeDefined();
    expect(ratios.section).toBe('math');
    expect(ratios.missedPatterns).toEqual(
      expect.arrayContaining(['sum-of-parts-ratio', 'reverse-percent']),
    );
  });

  // ── (b) missedPatterns carry deriveRWPattern slugs ────────────────────────

  it('R&W weaknesses carry deriveRWPattern slugs in missedPatterns', () => {
    const result = runMixed();
    const boundaries = result.skillAnalysis.weakSkills.find(w => w.skillId === 'boundaries');
    const transitions = result.skillAnalysis.weakSkills.find(w => w.skillId === 'transitions');

    expect(boundaries.missedPatterns).toEqual(['boundaries-semicolon']);
    expect(transitions.missedPatterns).toEqual(['transitions-contrast']);
  });

  it('pattern-less R&W skills aggregate with empty missedPatterns (Tier-3 fallback)', () => {
    const result = runMixed();
    const wic = result.skillAnalysis.allSkills.find(s => s.skillId === 'words-in-context');
    expect(wic).toBeDefined();
    expect(wic.section).toBe('rw');
    expect(wic.missedPatterns).toEqual([]);
  });

  // ── (c) no R&W item lands in a math domain ───────────────────────────────

  it('classifies every R&W question into an R&W domain, never a math domain', () => {
    const result = runMixed();
    const rwItems = result.questionAnalysis.filter(q => q.moduleIndex === 1);
    expect(rwItems).toHaveLength(7);
    rwItems.forEach(q => {
      expect(RW_DOMAINS).toContain(q.domain);
      expect(MATH_DOMAINS).not.toContain(q.domain);
    });
  });

  it('does NOT create an algebra domain entry from R&W misses (the pollution bug)', () => {
    // The fixture has zero algebra questions; before the fix, all 7 R&W
    // items inferDomain([])-defaulted into 'algebra'.
    const result = runMixed();
    expect(result.domainAnalysis.find(d => d.domain === 'algebra')).toBeUndefined();
    expect(result.scoreProjection.domainProjections.find(p => p.domain === 'algebra')).toBeUndefined();
  });

  it('R&W domain entries carry section "rw", display names, and the R&W skills', () => {
    const result = runMixed();
    const sec = result.domainAnalysis.find(d => d.domain === 'standard-english-conventions');
    expect(sec).toBeDefined();
    expect(sec.section).toBe('rw');
    expect(sec.displayName).toBe('Standard English Conventions');
    expect(sec.total).toBe(3);
    expect(sec.skills).toEqual(['boundaries']);

    const proj = result.scoreProjection.domainProjections.find(p => p.domain === 'standard-english-conventions');
    expect(proj).toBeDefined();
    expect(proj.domainName).toBe('Standard English Conventions');
  });

  it('math domain entries contain only math skills (no cross-contamination)', () => {
    const result = runMixed();
    result.domainAnalysis
      .filter(d => MATH_DOMAINS.includes(d.domain))
      .forEach(d => {
        expect(d.section).toBe('math');
        d.skills.forEach(s => expect(['ratios']).toContain(s));
      });
  });

  it('R&W domain actions never claim a math SAT weight ("0% of the SAT")', () => {
    const result = runMixed();
    const rwActions = result.prioritizedActions.filter(
      a => a.type === 'domain' && RW_DOMAINS.includes(a.domain),
    );
    expect(rwActions.length).toBeGreaterThan(0);
    rwActions.forEach(a => {
      expect(a.description).not.toMatch(/0% of the SAT/);
    });
  });
});

// ── (d) math-only behavior unchanged ─────────────────────────────────────────

describe('math-only behavior is unchanged (iron rule)', () => {
  const buildMathOnlyTest = () => ({
    id: 'synthetic-math-test',
    title: 'Synthetic math-only test',
    modules: [
      {
        id: 'module-1',
        questions: [
          mkMathQ({ id: 1, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
          mkMathQ({ id: 2, skills: ['ratios'], satPatternTitle: 'Reverse-Percent' }),
          mkMathQ({ id: 3, skills: ['ratios'], satPatternTitle: 'Sum of Parts Ratio' }),
          // Legacy item with NO skills field at all — must keep the historic
          // inferDomain([]) → 'algebra' default.
          mkMathQ({ id: 4, skills: undefined, satPatternTitle: null }),
        ],
      },
    ],
  });

  it('all skills and domains stay math; skill-less items still default to algebra', () => {
    const result = runDiagnostic(
      buildMathOnlyTest(),
      { '0-0': 'A', '0-1': 'A', '0-2': 'B', '0-3': 'A' },
      { questionDetails: {} },
    );

    result.skillAnalysis.allSkills.forEach(s => expect(s.section).toBe('math'));
    result.domainAnalysis.forEach(d => {
      expect(MATH_DOMAINS).toContain(d.domain);
      expect(d.section).toBe('math');
    });
    // The skill-less legacy item keeps its historic algebra default.
    const legacyItem = result.questionAnalysis.find(q => q.questionIndex === 3);
    expect(legacyItem.skills).toEqual([]);
    expect(legacyItem.domain).toBe('algebra');
    // Math domain actions keep the SAT-weight clause byte-identical.
    const mathDomainAction = result.prioritizedActions.find(
      a => a.type === 'domain' && MATH_DOMAINS.includes(a.domain),
    );
    if (mathDomainAction) {
      expect(mathDomainAction.description).toMatch(/, which is \d+% of the SAT$/);
    }
  });
});

// ── getQuestionSkills export (the normalizer PracticeTest now shares) ───────

describe('getQuestionSkills (exported normalizer)', () => {
  it('returns the array as-is for math bundle shape', () => {
    expect(getQuestionSkills({ skills: ['ratios', 'percent'] })).toEqual(['ratios', 'percent']);
  });
  it('wraps the singular R&W bundle shape', () => {
    expect(getQuestionSkills({ skill: 'words-in-context' })).toEqual(['words-in-context']);
  });
  it('prefers the array when both shapes are present', () => {
    expect(getQuestionSkills({ skills: ['a'], skill: 'b' })).toEqual(['a']);
  });
  it('returns [] for missing/empty shapes', () => {
    expect(getQuestionSkills({})).toEqual([]);
    expect(getQuestionSkills({ skill: '' })).toEqual([]);
    expect(getQuestionSkills(null)).toEqual([]);
  });
});

// ── PracticeTest call sites are pinned to the normalizer ─────────────────────
//
// The three persistence sites in PracticeTest.jsx (questionDetails,
// questionsSnapshot, recordSkillAttempts skillEntries) regressed by reading
// `q.skills` directly. Pin them at the source level (same approach as
// src/__tests__/bundleGuard.test.js) so a refactor can't silently re-starve
// the R&W pipeline. This also covers "recordSkillAttempts receives R&W
// skills": the skillEntries builder maps through getQuestionSkills, whose
// R&W behavior is unit-tested above.

describe('PracticeTest.jsx skill-extraction call sites', () => {
  const fs = require('fs');
  const path = require('path');
  const src = fs.readFileSync(
    path.join(__dirname, '..', '..', 'components', 'PracticeTest.jsx'),
    'utf8',
  );

  it('imports getQuestionSkills from the diagnostic engine', () => {
    expect(src).toMatch(/import\s*\{[^}]*getQuestionSkills[^}]*\}\s*from\s*'\.\.\/services\/diagnosticEngine'/);
  });

  it('never persists raw q.skills (the shape that drops R&W)', () => {
    expect(src).not.toMatch(/skills:\s*q\.skills\s*\|\|\s*\[\]/);
  });

  it('builds recordSkillAttempts entries through getQuestionSkills', () => {
    const skillEntriesBlock = src.slice(src.indexOf('const skillEntries = []'), src.indexOf('Skill entries to record'));
    expect(skillEntriesBlock).toContain('getQuestionSkills(q)');
    expect(skillEntriesBlock).not.toMatch(/q\.skills\s*&&/);
  });
});
