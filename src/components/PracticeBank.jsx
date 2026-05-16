import React, { useMemo, useState } from 'react';
import {
  questionBank as mathQuestionBank,
  getQuestionsBySatPatterns,
  getQuestionsByDomain as getMathQuestionsByDomain,
} from '../data/questions/bank';
import {
  rwQuestionBank,
  RW_DOMAINS,
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
  getQuestionsByDomain as getRWQuestionsByDomain,
} from '../data/questions/rwBank';
import { extractSatPattern } from '../data/questions/extractSatPattern';
import { formatPatternLabel } from '../services/selectors/missedPatternLabel';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';

// Display labels for canonical domain slugs.
const MATH_DOMAIN_LABEL = {
  'algebra': 'Algebra',
  'advanced-math': 'Advanced Math',
  'problem-solving': 'Problem-Solving and Data Analysis',
  'geometry': 'Geometry and Trigonometry',
};

const RW_DOMAIN_LABEL = {
  'information-and-ideas': 'Information and Ideas',
  'craft-and-structure': 'Craft and Structure',
  'standard-english-conventions': 'Standard English Conventions',
  'expression-of-ideas': 'Expression of Ideas',
};

const RW_SKILL_LABEL = {
  'central-ideas-and-details': 'Central Ideas and Details',
  'inferences': 'Inferences',
  'command-of-evidence-textual': 'Command of Evidence (Textual)',
  'command-of-evidence-quantitative': 'Command of Evidence (Quantitative)',
  'words-in-context': 'Words in Context',
  'text-structure-and-purpose': 'Text Structure and Purpose',
  'cross-text-connections': 'Cross-Text Connections',
  'boundaries': 'Boundaries',
  'form-structure-and-sense': 'Form, Structure, and Sense',
  'transitions': 'Transitions',
  'rhetorical-synthesis': 'Rhetorical Synthesis',
};

const RW_SKILL_TO_DOMAIN = {
  'central-ideas-and-details': 'information-and-ideas',
  'inferences': 'information-and-ideas',
  'command-of-evidence-textual': 'information-and-ideas',
  'command-of-evidence-quantitative': 'information-and-ideas',
  'words-in-context': 'craft-and-structure',
  'text-structure-and-purpose': 'craft-and-structure',
  'cross-text-connections': 'craft-and-structure',
  'boundaries': 'standard-english-conventions',
  'form-structure-and-sense': 'standard-english-conventions',
  'transitions': 'expression-of-ideas',
  'rhetorical-synthesis': 'expression-of-ideas',
};

// Patterns with fewer items than this are hidden from the browse list — too
// thin a pool for a satisfying drill. Patterns with 4-7 still surface (with
// their real count) so students can see what's authored even when it falls
// short of a full round.
const MIN_PATTERN_POOL = 4;

const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_DOMAIN = 15;

// AssignedPracticeShell only supports multiple-choice — fill-in items can't
// be answered there. Count only drillable items so the displayed pool size
// matches what students actually get when they launch.
const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

/**
 * Builds the math categorization once at module load.
 * For each domain → { patterns: [{slug, label, count}], total }.
 * Patterns are derived from each bank item's explanation header.
 */
function buildMathCategories() {
  const byDomainPattern = new Map(); // domain → Map(pattern → count)
  const domainTotals = new Map();

  for (const q of mathQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain || 'algebra';
    domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);

    const pattern = extractSatPattern(q.explanation);
    if (!pattern) continue;

    if (!byDomainPattern.has(domain)) byDomainPattern.set(domain, new Map());
    const patternCounts = byDomainPattern.get(domain);
    patternCounts.set(pattern, (patternCounts.get(pattern) || 0) + 1);
  }

  const domainOrder = ['algebra', 'advanced-math', 'problem-solving', 'geometry'];
  return domainOrder
    .filter(d => domainTotals.has(d))
    .map(domain => {
      const patternCounts = byDomainPattern.get(domain) || new Map();
      const patterns = [...patternCounts.entries()]
        .filter(([, count]) => count >= MIN_PATTERN_POOL)
        .map(([slug, count]) => ({ slug, label: formatPatternLabel(slug), count }))
        .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
      return {
        domain,
        label: MATH_DOMAIN_LABEL[domain] || domain,
        total: domainTotals.get(domain) || 0,
        patterns,
      };
    });
}

/**
 * Builds R&W categorization. Each canonical skill maps to one domain.
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
    const skills = Object.entries(RW_SKILL_TO_DOMAIN)
      .filter(([, d]) => d === domain)
      .map(([slug]) => ({
        slug,
        label: RW_SKILL_LABEL[slug] || slug,
        count: skillCounts.get(slug) || 0,
      }))
      .filter(s => s.count > 0)
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
    return {
      domain,
      label: RW_DOMAIN_LABEL[domain] || domain,
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

const PracticeBank = ({ onStartPractice }) => {
  const [section, setSection] = useState('math');

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';

  const totalAvailable = useMemo(
    () => categories.reduce((acc, c) => acc + c.total, 0),
    [categories],
  );

  const launchPatternDrill = (slug, label) => {
    const pool = getQuestionsBySatPatterns([slug])
      .filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_TYPE);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${label}`,
      source: 'practice-bank',
      section: 'math',
    });
  };

  const launchRWSkillDrill = (slug, label) => {
    const pool = getRWQuestionsBySkillIds([slug])
      .filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_PER_TYPE);
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
          Pick a question type to start a {DRILL_COUNT_PER_TYPE}-question drill, or run a {DRILL_COUNT_PER_DOMAIN}-question
          mixed set across a whole domain. All items are hand-authored.
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
          <DomainCard
            key={cat.domain}
            cat={cat}
            section={section}
            onPatternClick={launchPatternDrill}
            onSkillClick={launchRWSkillDrill}
            onMixedClick={launchDomainMixed}
          />
        ))}
      </div>
    </div>
  );
};

// ── Subcomponents ────────────────────────────────────────────────────────────

const DomainCard = ({ cat, section, onPatternClick, onSkillClick, onMixedClick }) => {
  const items = section === 'math' ? cat.patterns : cat.skills;
  const hasItems = items.length > 0;

  return (
    <section style={{
      backgroundColor: colors.surface.white,
      border: `1px solid ${colors.surface.grayDark}`,
      borderRadius: radius.lg,
      padding: spacing.lg,
      boxShadow: shadows.sm,
    }}>
      {/* Card header */}
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
            {cat.total.toLocaleString()} questions · {items.length} question type{items.length === 1 ? '' : 's'}
          </div>
        </div>
        {hasItems && (
          <button
            onClick={() => onMixedClick(cat.domain, cat.label)}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.sizes.sm,
              fontWeight: typography.weights.semibold,
              color: colors.accent.orange,
              backgroundColor: colors.accent.orangeLight,
              border: 'none',
              borderRadius: radius.md,
              padding: `${spacing.xs} ${spacing.md}`,
              cursor: 'pointer',
              transition: `all ${transitions.fast}`,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeMuted; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = colors.accent.orangeLight; }}
          >
            Mixed practice ({DRILL_COUNT_PER_DOMAIN})
          </button>
        )}
      </div>

      {/* Item rows */}
      {!hasItems ? (
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
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: spacing.xs,
        }}>
          {items.map(item => (
            <QuestionTypeRow
              key={item.slug}
              item={item}
              onClick={section === 'math'
                ? () => onPatternClick(item.slug, item.label)
                : () => onSkillClick(item.slug, item.label)
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

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

// Local shuffle — small enough to inline.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default PracticeBank;
