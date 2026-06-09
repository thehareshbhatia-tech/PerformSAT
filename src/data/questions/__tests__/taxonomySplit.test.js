/**
 * Stage 2a bundle-split guard: the pure-constant modules (bank/aliases.js,
 * rwBank/taxonomy.js) are the single source of truth, and the bank indexes
 * re-export the SAME bindings. If someone re-defines one of these constants
 * back in an index file instead of editing the pure module, the identity
 * checks here break — preventing silent drift between the corpus-free and
 * corpus-coupled import paths.
 */
import * as bankIndex from '../bank';
import * as bankAliases from '../bank/aliases';
import * as rwIndex from '../rwBank';
import * as rwTaxonomy from '../rwBank/taxonomy';

describe('bank/aliases.js re-export equivalence', () => {
  it('bank index re-exports SKILL_ALIAS_MAP by identity', () => {
    expect(bankIndex.SKILL_ALIAS_MAP).toBe(bankAliases.SKILL_ALIAS_MAP);
    expect(Object.keys(bankAliases.SKILL_ALIAS_MAP).length).toBeGreaterThan(100);
  });

  it('bank index re-exports DRILL_ROUTING_THRESHOLDS by identity, frozen, calibrated', () => {
    expect(bankIndex.DRILL_ROUTING_THRESHOLDS).toBe(bankAliases.DRILL_ROUTING_THRESHOLDS);
    expect(Object.isFrozen(bankAliases.DRILL_ROUTING_THRESHOLDS)).toBe(true);
    expect(bankAliases.DRILL_ROUTING_THRESHOLDS).toEqual({
      TIER1_PATTERN: 8,
      TIER2_STYLE: 12,
    });
  });
});

describe('rwBank/taxonomy.js re-export equivalence', () => {
  it('rwBank index re-exports every taxonomy name by identity', () => {
    expect(rwIndex.RW_CANONICAL_SKILLS).toBe(rwTaxonomy.RW_CANONICAL_SKILLS);
    expect(rwIndex.RW_DOMAINS).toBe(rwTaxonomy.RW_DOMAINS);
    expect(rwIndex.RW_SKILL_ALIAS_MAP).toBe(rwTaxonomy.RW_SKILL_ALIAS_MAP);
    expect(rwIndex.getSkillSection).toBe(rwTaxonomy.getSkillSection);
    expect(rwIndex.RW_TIER1_PATTERN_THRESHOLD).toBe(rwTaxonomy.RW_TIER1_PATTERN_THRESHOLD);
  });

  it('keeps the calibrated R&W Tier-1 threshold', () => {
    expect(rwTaxonomy.RW_TIER1_PATTERN_THRESHOLD).toBe(8);
  });

  it('getSkillSection classifies rw vs math skills', () => {
    expect(rwTaxonomy.getSkillSection('boundaries')).toBe('rw');
    expect(rwTaxonomy.getSkillSection('rhetorical-synthesis')).toBe('rw');
    expect(rwTaxonomy.getSkillSection('slope-intercept-form')).toBe('math');
    expect(rwTaxonomy.getSkillSection(undefined)).toBe('math');
  });

  it('every canonical R&W skill resolves through the alias map to itself', () => {
    rwTaxonomy.RW_CANONICAL_SKILLS.forEach((skill) => {
      expect(rwTaxonomy.RW_SKILL_ALIAS_MAP[skill]).toContain(skill);
    });
  });
});
