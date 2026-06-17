import { rwQuestionBank } from '../index';
import { deriveRWPattern } from '../deriveRWPattern';
import { RW_GRAMMAR_TYPE_BY_ID, getAuthoritativeGrammarType } from '../rwGrammarType';

/**
 * Pins the authoritative R&W grammar-type categorization (rwGrammarType.js).
 *
 * Background: the practice bank's Form/Structure/Sense "question types"
 * (Subject-verb agreement, Verb tense, Modifier placement, ...) used to be
 * inferred from explanation prose, which mis-filed items — most visibly, a
 * verb-tense item showed up under "Modifier placement," and subject-verb items
 * leaked into the verb-tense bucket. These tests guarantee the categorization
 * is now authoritative and stays correct as the bank evolves.
 */

const VALID_SLUGS = new Set([
  'fss-subject-verb-agreement', 'fss-verb-tense', 'fss-modifier-placement',
  'fss-parallelism', 'fss-pronoun', 'fss-possessive', 'fss-comparison',
]);

const fssItems = rwQuestionBank.filter(q => q.skill === 'form-structure-and-sense');
const liveFssIds = new Set(fssItems.map(q => q.sourceQuestionId));

describe('rwGrammarType — authoritative FSS categorization', () => {
  it('there are 72 live Form/Structure/Sense items', () => {
    expect(fssItems.length).toBe(72);
  });

  it('every live FSS item has an authoritative entry (none falls back to the heuristic)', () => {
    const untagged = fssItems.filter(
      q => !Object.prototype.hasOwnProperty.call(RW_GRAMMAR_TYPE_BY_ID, q.sourceQuestionId),
    );
    expect(untagged.map(q => q.sourceQuestionId)).toEqual([]);
  });

  it('the map has no stale keys — every key is a live FSS item id', () => {
    const stale = Object.keys(RW_GRAMMAR_TYPE_BY_ID).filter(k => !liveFssIds.has(Number(k)));
    expect(stale).toEqual([]);
    expect(Object.keys(RW_GRAMMAR_TYPE_BY_ID).length).toBe(72);
  });

  it('every non-null value is a valid fss-* slug', () => {
    const bad = Object.entries(RW_GRAMMAR_TYPE_BY_ID)
      .filter(([, v]) => v !== null && !VALID_SLUGS.has(v));
    expect(bad).toEqual([]);
  });

  // ── The headline bug: the Modifiers bucket must hold only modifier items ────
  it('the Modifier-placement bucket contains exactly its 11 genuine modifier items', () => {
    const inModifierBucket = fssItems
      .filter(q => deriveRWPattern(q) === 'fss-modifier-placement')
      .map(q => q.sourceQuestionId)
      .sort((a, b) => a - b);
    expect(inModifierBucket).toEqual([122, 247, 249, 349, 549, 649, 749, 847, 1022, 1149, 1249]);
  });

  it('no subject-verb-agreement or verb-tense item is filed under Modifier placement', () => {
    const leaked = fssItems.filter((q) => {
      const t = deriveRWPattern(q);
      const meta = RW_GRAMMAR_TYPE_BY_ID[q.sourceQuestionId];
      return t === 'fss-modifier-placement'
        && (meta === 'fss-subject-verb-agreement' || meta === 'fss-verb-tense');
    });
    expect(leaked).toEqual([]);
  });

  it('item 420 — a past-perfect VERB-TENSE item — is no longer mis-filed as a modifier', () => {
    const item = rwQuestionBank.find(q => q.sourceQuestionId === 420);
    expect(item).toBeTruthy();
    expect(deriveRWPattern(item)).toBe('fss-verb-tense');
  });

  // ── Precedence: authoritative tag beats the explanation heuristic ───────────
  it('the authoritative tag overrides an explanation that would trip the heuristic', () => {
    // This explanation would make the prose heuristic return modifier-placement,
    // but item 420 is authoritatively verb-tense.
    const item = {
      skill: 'form-structure-and-sense',
      sourceQuestionId: 420,
      explanation: 'The opening participial phrase must modify the subject of the main clause.',
      correctAnswer: 'A',
      choices: [{ id: 'A', text: 'had pulled' }],
    };
    expect(deriveRWPattern(item)).toBe('fss-verb-tense');
  });

  it('an authoritative null short-circuits the heuristic (routes Tier-3)', () => {
    const item = {
      skill: 'form-structure-and-sense',
      sourceQuestionId: 845, // mapped to null ('other')
      explanation: 'The introductory modifier must attach to the subject that follows.',
      correctAnswer: 'A',
      choices: [{ id: 'A', text: 'x' }],
    };
    expect(deriveRWPattern(item)).toBeNull();
  });

  it('an untagged FSS item still falls through to the fallback heuristic', () => {
    const item = {
      skill: 'form-structure-and-sense',
      id: 999999, // not in the authoritative map
      explanation: 'The singular subject requires subject-verb agreement with a singular verb.',
      correctAnswer: 'A',
      choices: [{ id: 'A', text: 'x' }],
    };
    expect(getAuthoritativeGrammarType(item)).toBeUndefined();
    expect(deriveRWPattern(item)).toBe('fss-subject-verb-agreement');
  });
});

describe('rwGrammarType — keying invariant', () => {
  it('raw question ids are globally unique across the 648-item bank', () => {
    // The authoritative map keys on raw id; it must be unambiguous across BOTH
    // item shapes deriveRWPattern sees (flattened sourceQuestionId / bundle id).
    const seen = new Map();
    rwQuestionBank.forEach((q) => {
      const raw = q.sourceQuestionId != null ? q.sourceQuestionId : q.id;
      seen.set(raw, (seen.get(raw) || 0) + 1);
    });
    const dupes = [...seen.entries()].filter(([, n]) => n > 1);
    expect(dupes).toEqual([]);
  });
});
