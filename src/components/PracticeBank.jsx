import React, { useMemo, useState } from 'react';
import {
  questionBank as mathQuestionBank,
  getQuestionsBySatPatterns,
  getQuestionsByDomain as getMathQuestionsByDomain,
  getQuestionsByCBSkill,
} from '../data/questions/bank';
import {
  rwQuestionBank,
  RW_DOMAINS,
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
  getQuestionsByDomain as getRWQuestionsByDomain,
} from '../data/questions/rwBank';
import { extractSatPattern } from '../data/questions/extractSatPattern';
import {
  CB_MATH_SKILLS,
  CB_MATH_DOMAIN_LABELS,
  CB_RW_DOMAIN_LABELS,
  CB_RW_SKILLS,
  PATTERN_TO_CB_SKILL,
} from '../data/questions/cbSkillTaxonomy';
import { formatPatternLabel } from '../services/selectors/missedPatternLabel';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';

// Patterns with fewer items than this are hidden — too thin a pool for a
// satisfying drill. The 4-7 range still surfaces (with real count) so
// students see what's authored even when it falls short of a full round.
const MIN_PATTERN_POOL = 4;

const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_SKILL = 15;
const DRILL_COUNT_PER_DOMAIN = 20;

// AssignedPracticeShell only supports multiple-choice — fill-in items can't
// be answered there. Count only drillable items so displayed pool sizes
// match what students actually get on launch.
const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

/**
 * Build the math categorization: domain → CB skill → pattern.
 * Runs once at module load. Each domain card surfaces its CB skills (one
 * card section per skill); each skill section lists the patterns with
 * ≥MIN_PATTERN_POOL items in a responsive grid.
 */
function buildMathCategories() {
  // patternCounts: pattern → count of drillable items
  const patternCounts = new Map();
  const cbSkillItemCount = new Map();
  const domainTotals = new Map();

  for (const q of mathQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain || 'algebra';
    domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);

    const pattern = extractSatPattern(q.explanation);
    if (!pattern) continue;
    patternCounts.set(pattern, (patternCounts.get(pattern) || 0) + 1);

    const cbSkill = PATTERN_TO_CB_SKILL[pattern];
    if (cbSkill) {
      cbSkillItemCount.set(cbSkill, (cbSkillItemCount.get(cbSkill) || 0) + 1);
    }
  }

  // Group CB skills by domain in the canonical order, with the patterns
  // surfaced under each.
  const domainOrder = ['algebra', 'advanced-math', 'problem-solving', 'geometry'];
  return domainOrder
    .filter(d => domainTotals.has(d))
    .map(domainSlug => {
      const skillsInDomain = CB_MATH_SKILLS.filter(s => s.domain === domainSlug);
      const cbSkills = skillsInDomain
        .map(skill => {
          const total = cbSkillItemCount.get(skill.slug) || 0;
          const patterns = Object.entries(PATTERN_TO_CB_SKILL)
            .filter(([, sSlug]) => sSlug === skill.slug)
            .map(([patternSlug]) => ({
              slug: patternSlug,
              label: formatPatternLabel(patternSlug),
              count: patternCounts.get(patternSlug) || 0,
            }))
            .filter(p => p.count >= MIN_PATTERN_POOL)
            .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
          return { ...skill, total, patterns };
        })
        // Hide empty CB skills (e.g., Q.G. before backfill) from the UI.
        // They're tracked in the CB-coverage audit, not surfaced to students.
        .filter(skill => skill.total > 0);
      return {
        domain: domainSlug,
        label: CB_MATH_DOMAIN_LABELS[domainSlug] || domainSlug,
        total: domainTotals.get(domainSlug) || 0,
        cbSkills,
      };
    });
}

/**
 * R&W categorization. R&W is simpler: each canonical College Board skill
 * already maps 1:1 to a domain. No pattern layer below.
 */
function buildRWCategories() {
  const skillCounts = new Map();
  const domainTotals = new Map();
  for (const q of rwQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain;
    if (domain) domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);
    (q.skills || []).forEach(sid => {
      skillCounts.set(sid, (skillCounts.get(sid) || 0) + 1);
    });
  }

  return RW_DOMAINS.map(domain => {
    const skills = CB_RW_SKILLS
      .filter(s => s.domain === domain)
      .map(skill => ({
        ...skill,
        count: skillCounts.get(skill.slug) || 0,
      }))
      .filter(s => s.count > 0)
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
    return {
      domain,
      label: CB_RW_DOMAIN_LABELS[domain] || domain,
      total: domainTotals.get(domain) || 0,
      skills,
    };
  });
}

const MATH_CATEGORIES = buildMathCategories();
const RW_CATEGORIES = buildRWCategories();

// ── UI ──────────────────────────────────────────────────────────────────────

const SECTION_TABS = [
  { id: 'math', label: 'Math' },
  { id: 'rw', label: 'Reading & Writing' },
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const PracticeBank = ({ onStartPractice }) => {
  const [section, setSection] = useState('math');

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';

  const totalAvailable = useMemo(
    () => categories.reduce((acc, c) => acc + c.total, 0),
    [categories],
  );

  const launchPatternDrill = (slug, label) => {
    const pool = getQuestionsBySatPatterns([slug]).filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_TYPE);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${label}`,
      source: 'practice-bank',
      section: 'math',
    });
  };

  const launchCBSkillDrill = (skillSlug, skillLabel) => {
    const pool = getQuestionsByCBSkill(skillSlug).filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_SKILL);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${skillLabel} (mixed)`,
      source: 'practice-bank-skill',
      section: 'math',
    });
  };

  const launchRWSkillDrill = (slug, label) => {
    const pool = getRWQuestionsBySkillIds([slug]).filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_SKILL);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${label}`,
      source: 'practice-bank',
      section: 'rw',
    });
  };

  const launchDomainMixed = (domain, label) => {
    const fetch = section === 'math' ? getMathQuestionsByDomain : getRWQuestionsByDomain;
    const pool = fetch(domain).filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_DOMAIN);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${label} (mixed)`,
      source: 'practice-bank-domain',
      section,
    });
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: `${spacing.xl} ${spacing.xl} ${spacing['3xl']}` }}>
      {/* Header */}
      <div style={{ marginBottom: spacing.xl }}>
        <h1 style={{
          fontFamily: typography.narrative,
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.semibold,
          color: colors.text.primary,
          margin: 0,
          letterSpacing: typography.letterSpacing.tight,
        }}>
          Practice by Question Type
        </h1>
        <p style={{
          fontFamily: typography.narrative,
          fontSize: typography.sizes.base,
          color: colors.text.secondary,
          margin: `${spacing.xs} 0 0`,
        }}>
          Browse by official College Board skill, then pick a specific question
          type to drill. All items are hand-authored to mirror the digital SAT.
        </p>
      </div>

      {/* Section pills */}
      <div role="tablist" aria-label="Section" style={{
        display: 'inline-flex',
        gap: spacing.xs,
        backgroundColor: colors.surface.gray,
        padding: '4px',
        borderRadius: radius.full,
        marginBottom: spacing.xl,
      }}>
        {SECTION_TABS.map(tab => {
          const active = tab.id === section;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active}
              onClick={() => setSection(tab.id)}
              style={{
                fontFamily: typography.fontFamily,
                fontSize: typography.sizes.sm,
                fontWeight: active ? typography.weights.semibold : typography.weights.medium,
                color: active ? colors.text.inverse : colors.text.secondary,
                backgroundColor: active ? colors.accent.orange : 'transparent',
                border: 'none',
                borderRadius: radius.full,
                padding: `${spacing.xs} ${spacing.lg}`,
                cursor: 'pointer',
                transition: `all ${transitions.fast}`,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Summary line */}
      <div style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.sizes.sm,
        color: colors.text.tertiary,
        marginBottom: spacing.lg,
      }}>
        {totalAvailable.toLocaleString()} {sectionLabel.toLowerCase()} questions in the bank
      </div>

      {/* Domain cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
        {categories.map(cat => (
          section === 'math'
            ? <MathDomainCard
                key={cat.domain}
                cat={cat}
                onPatternClick={launchPatternDrill}
                onSkillClick={launchCBSkillDrill}
                onDomainMixedClick={launchDomainMixed}
              />
            : <RWDomainCard
                key={cat.domain}
                cat={cat}
                onSkillClick={launchRWSkillDrill}
                onDomainMixedClick={launchDomainMixed}
              />
        ))}
      </div>
    </div>
  );
};

// ── Math: Domain card with CB-skill subsections ─────────────────────────────

const MathDomainCard = ({ cat, onPatternClick, onSkillClick, onDomainMixedClick }) => {
  const visibleSkills = cat.cbSkills.filter(s => s.total > 0);
  const hasContent = visibleSkills.length > 0;

  return (
    <section style={{
      backgroundColor: colors.surface.white,
      border: `1px solid ${colors.surface.grayDark}`,
      borderRadius: radius.lg,
      padding: spacing.lg,
      boxShadow: shadows.sm,
    }}>
      {/* Domain header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: spacing.md,
        marginBottom: spacing.md,
        flexWrap: 'wrap',
      }}>
        <div>
          <h2 style={{
            fontFamily: typography.narrative,
            fontSize: typography.sizes.lg,
            fontWeight: typography.weights.semibold,
            color: colors.text.primary,
            margin: 0,
            letterSpacing: typography.letterSpacing.tight,
          }}>
            {cat.label}
          </h2>
          <div style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xs,
            color: colors.text.tertiary,
            marginTop: '2px',
          }}>
            {cat.total.toLocaleString()} questions · {visibleSkills.length} College Board skill{visibleSkills.length === 1 ? '' : 's'}
          </div>
        </div>
        {hasContent && (
          <DomainMixedButton onClick={() => onDomainMixedClick(cat.domain, cat.label)} />
        )}
      </div>

      {/* CB Skill sections */}
      {!hasContent ? (
        <EmptyMessage />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
          {visibleSkills.map(skill => (
            <CBSkillSection
              key={skill.slug}
              skill={skill}
              onPatternClick={onPatternClick}
              onSkillClick={onSkillClick}
            />
          ))}
        </div>
      )}
    </section>
  );
};

const CBSkillSection = ({ skill, onPatternClick, onSkillClick }) => {
  const hasPatterns = skill.patterns.length > 0;

  return (
    <div style={{
      borderLeft: `3px solid ${colors.accent.orangeLight}`,
      paddingLeft: spacing.md,
    }}>
      {/* Skill header row */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: spacing.sm,
        flexWrap: 'wrap',
        marginBottom: spacing.sm,
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h3 style={{
            fontFamily: typography.narrative,
            fontSize: typography.sizes.base,
            fontWeight: typography.weights.semibold,
            color: colors.text.primary,
            margin: 0,
          }}>
            {skill.label}
          </h3>
          <div style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xs,
            color: colors.text.tertiary,
            marginTop: '2px',
          }}>
            {skill.total} question{skill.total === 1 ? '' : 's'}
            {hasPatterns && ` · ${skill.patterns.length} specific question type${skill.patterns.length === 1 ? '' : 's'}`}
          </div>
        </div>
        <button
          onClick={() => onSkillClick(skill.slug, skill.label)}
          style={pillButtonStyle}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeMuted; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeLight; }}
        >
          Practice ({Math.min(skill.total, DRILL_COUNT_PER_SKILL)} mixed)
        </button>
      </div>

      {/* Pattern grid (specific question types) */}
      {hasPatterns ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: spacing.xs,
        }}>
          {skill.patterns.map(pat => (
            <QuestionTypeRow
              key={pat.slug}
              item={pat}
              onClick={() => onPatternClick(pat.slug, pat.label)}
            />
          ))}
        </div>
      ) : (
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.xs,
          color: colors.text.tertiary,
          fontStyle: 'italic',
          padding: `${spacing.xs} 0`,
        }}>
          Mixed practice only — specific question types coming soon.
        </div>
      )}
    </div>
  );
};

// ── R&W: Domain card with CB skill rows (no pattern layer) ──────────────────

const RWDomainCard = ({ cat, onSkillClick, onDomainMixedClick }) => {
  const hasItems = cat.skills.length > 0;

  return (
    <section style={{
      backgroundColor: colors.surface.white,
      border: `1px solid ${colors.surface.grayDark}`,
      borderRadius: radius.lg,
      padding: spacing.lg,
      boxShadow: shadows.sm,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: spacing.md,
        marginBottom: spacing.md,
        flexWrap: 'wrap',
      }}>
        <div>
          <h2 style={{
            fontFamily: typography.narrative,
            fontSize: typography.sizes.lg,
            fontWeight: typography.weights.semibold,
            color: colors.text.primary,
            margin: 0,
            letterSpacing: typography.letterSpacing.tight,
          }}>
            {cat.label}
          </h2>
          <div style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xs,
            color: colors.text.tertiary,
            marginTop: '2px',
          }}>
            {cat.total.toLocaleString()} questions · {cat.skills.length} College Board skill{cat.skills.length === 1 ? '' : 's'}
          </div>
        </div>
        {hasItems && (
          <DomainMixedButton onClick={() => onDomainMixedClick(cat.domain, cat.label)} />
        )}
      </div>

      {!hasItems ? (
        <EmptyMessage />
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: spacing.xs,
        }}>
          {cat.skills.map(item => (
            <QuestionTypeRow
              key={item.slug}
              item={{ label: item.label, count: item.count }}
              onClick={() => onSkillClick(item.slug, item.label)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

// ── Shared subcomponents ────────────────────────────────────────────────────

const DomainMixedButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      ...pillButtonStyle,
      fontSize: typography.sizes.sm,
      padding: `${spacing.xs} ${spacing.md}`,
    }}
    onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeMuted; }}
    onMouseLeave={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeLight; }}
  >
    Mixed practice ({DRILL_COUNT_PER_DOMAIN})
  </button>
);

const EmptyMessage = () => (
  <div style={{
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
    color: colors.text.tertiary,
    fontStyle: 'italic',
    padding: spacing.md,
    textAlign: 'center',
  }}>
    No question types yet. Authoring is ongoing.
  </div>
);

const QuestionTypeRow = ({ item, onClick }) => {
  const disabled = item.count === 0;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: typography.fontFamily,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.sm,
        textAlign: 'left',
        padding: `${spacing.sm} ${spacing.md}`,
        borderRadius: radius.md,
        border: `1px solid ${colors.surface.grayDark}`,
        backgroundColor: colors.surface.white,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: `all ${transitions.fast}`,
        width: '100%',
      }}
      onMouseEnter={e => {
        if (disabled) return;
        e.currentTarget.style.borderColor = colors.accent.orange;
        e.currentTarget.style.backgroundColor = colors.accent.orangeLight;
      }}
      onMouseLeave={e => {
        if (disabled) return;
        e.currentTarget.style.borderColor = colors.surface.grayDark;
        e.currentTarget.style.backgroundColor = colors.surface.white;
      }}
    >
      <span style={{
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.medium,
        color: colors.text.primary,
        flex: 1,
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {item.label}
      </span>
      <span style={{
        fontSize: typography.sizes.xs,
        fontWeight: typography.weights.semibold,
        color: colors.text.tertiary,
        backgroundColor: colors.surface.gray,
        borderRadius: radius.full,
        padding: `2px 10px`,
        flexShrink: 0,
      }}>
        {item.count}
      </span>
    </button>
  );
};

const pillButtonStyle = {
  fontFamily: typography.fontFamily,
  fontSize: typography.sizes.xs,
  fontWeight: typography.weights.semibold,
  color: colors.accent.orange,
  backgroundColor: colors.accent.orangeLight,
  border: 'none',
  borderRadius: radius.md,
  padding: `${spacing.xs} ${spacing.sm}`,
  cursor: 'pointer',
  transition: `all ${transitions.fast}`,
  whiteSpace: 'nowrap',
};

export default PracticeBank;
