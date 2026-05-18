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
import { typography, spacing, radius, shadows, transitions } from '../design/tokens';

// CB-published domain weights (digital SAT blueprint). Used in the
// per-domain subtitle ("This domain is X% of Math") for SAT-test parity.
const DOMAIN_WEIGHTS = {
  // Math (CB-published spread: Algebra 35%, Advanced Math 35%, PSDA 15%, Geom & Trig 15%)
  'algebra':         35,
  'advanced-math':   35,
  'problem-solving': 15,
  'geometry':        15,
  // R&W (CB-published: Info & Ideas 26%, Craft & Structure 28%, SE Conventions 26%, Expression 20%)
  'information-and-ideas':         26,
  'craft-and-structure':           28,
  'standard-english-conventions':  26,
  'expression-of-ideas':           20,
};

// Three-color palette pulled from src/design-tokens.css. These are the
// SAT-test-day color cues the user wants the Practice tab to lean on.
const PALETTE = {
  orange:        '#ea580c',
  orangeHover:   '#c2410c',
  orangeLight:   'rgba(234, 88, 12, 0.10)',
  orangeBorder:  'rgba(234, 88, 12, 0.25)',
  green:         '#C6F432', // neon — chip backgrounds, hero accent strip
  greenDark:     '#2E4E2C', // neon-on-dark text, chip text
  greenSoft:     '#EEF8C8', // very pale neon
  purple:        '#B092DD',
  purpleSoft:    '#EDE5F8',
  purpleDark:    '#553775',
  ink:           '#1D1D1F',
  inkSecondary:  '#48484A',
  inkTertiary:   '#636366',
  surface:       '#FFFFFF',
  surfaceMuted:  '#FBFBFD',
  border:        '#E5E5EA',
  borderSoft:    '#F0F0F2',
};

const MIN_PATTERN_POOL = 4;
const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_SKILL = 15;
const DRILL_COUNT_PER_DOMAIN = 20;
const DRILL_COUNT_HERO = 25; // full-section "Launch Practice" round size

const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

function buildMathCategories() {
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
        .filter(skill => skill.total > 0);
      return {
        domain: domainSlug,
        label: CB_MATH_DOMAIN_LABELS[domainSlug] || domainSlug,
        total: domainTotals.get(domainSlug) || 0,
        cbSkills,
      };
    });
}

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

const SECTION_TABS = [
  { id: 'rw',   label: 'Reading and Writing' },
  { id: 'math', label: 'Math' },
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
  const sectionLabel = section === 'math' ? 'Math' : 'Reading and Writing';
  const sectionDescription = section === 'math'
    ? 'Algebra · Advanced Math · Problem-Solving and Data Analysis · Geometry and Trigonometry'
    : 'Information and Ideas · Craft and Structure · Standard English Conventions · Expression of Ideas';

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

  const launchFullSection = () => {
    const all = section === 'math' ? mathQuestionBank : rwQuestionBank;
    const pool = all.filter(isDrillable);
    if (pool.length === 0) return;
    const shuffled = shuffle(pool).slice(0, DRILL_COUNT_HERO);
    onStartPractice(shuffled.map(q => q.id), {
      label: `Practice — ${sectionLabel} (full section)`,
      source: 'practice-bank-full',
      section,
    });
  };

  return (
    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      padding: `${spacing.xl} ${spacing.xl} ${spacing['3xl']}`,
    }}>
      {/* ───── Header ──────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: spacing.lg,
        marginBottom: spacing['2xl'],
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 480px', minWidth: 0 }}>
          <h1 style={{
            fontFamily: typography.narrative,
            fontSize: '32px',
            lineHeight: 1.15,
            fontWeight: typography.weights.bold,
            color: PALETTE.ink,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            SAT Question Bank
          </h1>
          <p style={{
            fontFamily: typography.narrative,
            fontSize: typography.sizes.base,
            color: PALETTE.inkSecondary,
            margin: `${spacing.sm} 0 0`,
            maxWidth: '640px',
            lineHeight: 1.5,
          }}>
            Hand-authored practice that mirrors the digital SAT — every question type
            from College Board's published Bluebook tests and Educator Question Bank,
            with diagrams that render the way they will on test day.
          </p>
        </div>

        {/* Section toggle (top-right, like Acely) */}
        <SectionToggle section={section} onChange={setSection} />
      </div>

      {/* ───── Hero "Practice the full section" card ───────────────────────── */}
      <HeroSectionCard
        sectionId={section}
        sectionLabel={sectionLabel}
        sectionDescription={sectionDescription}
        totalAvailable={totalAvailable}
        onLaunch={launchFullSection}
      />

      {/* ───── Targeted Practice header ────────────────────────────────────── */}
      <div style={{
        marginTop: spacing['2xl'],
        marginBottom: spacing.lg,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: spacing.md,
        flexWrap: 'wrap',
      }}>
        <h2 style={{
          fontFamily: typography.narrative,
          fontSize: '22px',
          fontWeight: typography.weights.semibold,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: '-0.01em',
        }}>
          Targeted Practice by Domain &amp; Subdomain
        </h2>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          color: PALETTE.inkTertiary,
        }}>
          {categories.length} domain{categories.length === 1 ? '' : 's'} · {totalAvailable.toLocaleString()} questions
        </div>
      </div>

      {/* ───── Domain grid (2-up) ──────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
        gap: spacing.lg,
      }}>
        {categories.map((cat, idx) => (
          section === 'math'
            ? <MathDomainCard
                key={cat.domain}
                cat={cat}
                accent={pickAccent(idx)}
                onPatternClick={launchPatternDrill}
                onSkillClick={launchCBSkillDrill}
                onDomainMixedClick={launchDomainMixed}
              />
            : <RWDomainCard
                key={cat.domain}
                cat={cat}
                accent={pickAccent(idx)}
                onSkillClick={launchRWSkillDrill}
                onDomainMixedClick={launchDomainMixed}
              />
        ))}
      </div>
    </div>
  );
};

// Rotate the orange/green/purple accent across the domain cards so the grid
// has visual rhythm rather than four identical orange-tinted cards.
const ACCENTS = ['orange', 'green', 'purple', 'orange'];
const pickAccent = (idx) => ACCENTS[idx % ACCENTS.length];

const ACCENT_STYLES = {
  orange: {
    rail:     PALETTE.orange,
    chipBg:   PALETTE.orangeLight,
    chipText: PALETTE.orange,
    linkText: PALETTE.orange,
    linkHover: PALETTE.orangeHover,
  },
  green: {
    rail:     PALETTE.greenDark,
    chipBg:   PALETTE.green,
    chipText: PALETTE.greenDark,
    linkText: PALETTE.greenDark,
    linkHover: '#1F3D1F',
  },
  purple: {
    rail:     PALETTE.purpleDark,
    chipBg:   PALETTE.purpleSoft,
    chipText: PALETTE.purpleDark,
    linkText: PALETTE.purpleDark,
    linkHover: '#3D2052',
  },
};

// ────────────────────────────────────────────────────────────────────────────
// SectionToggle
// ────────────────────────────────────────────────────────────────────────────
const SectionToggle = ({ section, onChange }) => (
  <div role="tablist" aria-label="Section" style={{
    display: 'inline-flex',
    backgroundColor: PALETTE.surface,
    border: `1px solid ${PALETTE.border}`,
    borderRadius: radius.full,
    padding: '4px',
    boxShadow: shadows.sm,
  }}>
    {SECTION_TABS.map(tab => {
      const active = tab.id === section;
      return (
        <button
          key={tab.id}
          role="tab"
          aria-selected={active}
          onClick={() => onChange(tab.id)}
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.sm,
            fontWeight: active ? typography.weights.semibold : typography.weights.medium,
            color: active ? PALETTE.ink : PALETTE.inkTertiary,
            backgroundColor: active ? PALETTE.green : 'transparent',
            border: 'none',
            borderRadius: radius.full,
            padding: `8px 16px`,
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
          }}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// HeroSectionCard
// ────────────────────────────────────────────────────────────────────────────
const HeroSectionCard = ({ sectionId, sectionLabel, sectionDescription, totalAvailable, onLaunch }) => {
  const isMath = sectionId === 'math';
  return (
    <section style={{
      backgroundColor: PALETTE.surface,
      border: `1px solid ${PALETTE.border}`,
      borderRadius: radius.lg,
      padding: spacing.xl,
      boxShadow: shadows.md,
      display: 'flex',
      alignItems: 'center',
      gap: spacing.lg,
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient gradient strip on the left edge — orange for both sections */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: 'linear-gradient(180deg, #ea580c 0%, #C6F432 100%)',
      }} />

      {/* Icon */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: radius.md,
        backgroundColor: PALETTE.orangeLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }} aria-hidden>
        {isMath ? (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="8" cy="6"  r="1.4" fill="#ea580c" />
            <circle cx="14" cy="12" r="1.4" fill="#ea580c" />
            <circle cx="11" cy="18" r="1.4" fill="#ea580c" />
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h7v16H4V4zm9 0h7v16h-7V4z" stroke="#ea580c" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M6 8h3M6 11h3M15 8h3M15 11h3M15 14h3" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </div>

      {/* Title + description */}
      <div style={{ flex: '1 1 320px', minWidth: 0 }}>
        <div style={{
          fontFamily: typography.narrative,
          fontSize: '22px',
          fontWeight: typography.weights.semibold,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: '-0.01em',
        }}>
          Practice the {sectionLabel} Section
        </div>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          color: PALETTE.inkTertiary,
          marginTop: '6px',
        }}>
          {sectionDescription}
        </div>
      </div>

      {/* Counter chip (neon green, like Acely's accuracy chip but showing pool size) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '4px',
      }}>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.xs,
          fontWeight: typography.weights.semibold,
          color: PALETTE.inkTertiary,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          Available
        </div>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.base,
          fontWeight: typography.weights.bold,
          color: PALETTE.greenDark,
          backgroundColor: PALETTE.green,
          padding: '4px 14px',
          borderRadius: radius.full,
          lineHeight: 1.2,
        }}>
          {totalAvailable.toLocaleString()} questions
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onLaunch}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.base,
          fontWeight: typography.weights.semibold,
          color: '#FFFFFF',
          backgroundColor: PALETTE.orange,
          border: 'none',
          borderRadius: radius.md,
          padding: '12px 24px',
          cursor: 'pointer',
          transition: `all ${transitions.fast}`,
          boxShadow: '0 4px 12px rgba(234, 88, 12, 0.25)',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PALETTE.orangeHover; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = PALETTE.orange; }}
      >
        Launch Practice →
      </button>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// MathDomainCard
// ────────────────────────────────────────────────────────────────────────────
const MathDomainCard = ({ cat, accent, onPatternClick, onSkillClick, onDomainMixedClick }) => {
  const visibleSkills = cat.cbSkills.filter(s => s.total > 0);
  const hasContent = visibleSkills.length > 0;
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <section style={{
      backgroundColor: PALETTE.surface,
      border: `1px solid ${PALETTE.border}`,
      borderRadius: radius.lg,
      boxShadow: shadows.sm,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top rail */}
      <div style={{ height: '4px', backgroundColor: accentStyle.rail }} />

      {/* Header */}
      <div style={{
        padding: `${spacing.lg} ${spacing.lg} 0`,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: spacing.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontFamily: typography.narrative,
              fontSize: '20px',
              fontWeight: typography.weights.semibold,
              color: PALETTE.ink,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              {cat.label}
            </h3>
            <div style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.sizes.sm,
              color: PALETTE.inkTertiary,
              marginTop: '4px',
            }}>
              This domain is {weight}% of Math.
            </div>
          </div>
          <span style={chipStyle(accentStyle)}>{cat.total} items</span>
        </div>

        {hasContent && (
          <button
            onClick={() => onDomainMixedClick(cat.domain, cat.label)}
            style={domainLinkStyle(accentStyle)}
            onMouseEnter={(e) => { e.currentTarget.style.color = accentStyle.linkHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = accentStyle.linkText; }}
          >
            Practice this Domain →
          </button>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: PALETTE.borderSoft, margin: `${spacing.md} ${spacing.lg} 0` }} />

      {/* Subdomain list */}
      <div style={{
        padding: `${spacing.md} ${spacing.lg} ${spacing.lg}`,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
      }}>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.xs,
          fontWeight: typography.weights.semibold,
          color: PALETTE.inkTertiary,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '4px',
        }}>
          Practice a subdomain
        </div>
        {!hasContent ? (
          <EmptyMessage />
        ) : (
          visibleSkills.map(skill => (
            <SubdomainRow
              key={skill.slug}
              label={skill.short || skill.label}
              count={skill.total}
              hasPatterns={skill.patterns.length > 0}
              patterns={skill.patterns}
              accent={accentStyle}
              onClick={() => onSkillClick(skill.slug, skill.label)}
              onPatternClick={onPatternClick}
            />
          ))
        )}
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// RWDomainCard
// ────────────────────────────────────────────────────────────────────────────
const RWDomainCard = ({ cat, accent, onSkillClick, onDomainMixedClick }) => {
  const hasItems = cat.skills.length > 0;
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const accentStyle = ACCENT_STYLES[accent];

  return (
    <section style={{
      backgroundColor: PALETTE.surface,
      border: `1px solid ${PALETTE.border}`,
      borderRadius: radius.lg,
      boxShadow: shadows.sm,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ height: '4px', backgroundColor: accentStyle.rail }} />
      <div style={{ padding: `${spacing.lg} ${spacing.lg} 0` }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: spacing.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontFamily: typography.narrative,
              fontSize: '20px',
              fontWeight: typography.weights.semibold,
              color: PALETTE.ink,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              {cat.label}
            </h3>
            <div style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.sizes.sm,
              color: PALETTE.inkTertiary,
              marginTop: '4px',
            }}>
              This domain is {weight}% of the R&amp;W section.
            </div>
          </div>
          <span style={chipStyle(accentStyle)}>{cat.total} items</span>
        </div>

        {hasItems && (
          <button
            onClick={() => onDomainMixedClick(cat.domain, cat.label)}
            style={domainLinkStyle(accentStyle)}
            onMouseEnter={(e) => { e.currentTarget.style.color = accentStyle.linkHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = accentStyle.linkText; }}
          >
            Practice this Domain →
          </button>
        )}
      </div>

      <div style={{ height: '1px', backgroundColor: PALETTE.borderSoft, margin: `${spacing.md} ${spacing.lg} 0` }} />

      <div style={{
        padding: `${spacing.md} ${spacing.lg} ${spacing.lg}`,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.xs,
      }}>
        <div style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.xs,
          fontWeight: typography.weights.semibold,
          color: PALETTE.inkTertiary,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '4px',
        }}>
          Practice a subdomain
        </div>
        {!hasItems ? (
          <EmptyMessage />
        ) : (
          cat.skills.map(item => (
            <SubdomainRow
              key={item.slug}
              label={item.label}
              count={item.count}
              hasPatterns={false}
              patterns={[]}
              accent={accentStyle}
              onClick={() => onSkillClick(item.slug, item.label)}
            />
          ))
        )}
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// SubdomainRow + ChevronRow (expandable for math sub-patterns)
// ────────────────────────────────────────────────────────────────────────────
const SubdomainRow = ({ label, count, hasPatterns, patterns, accent, onClick, onPatternClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      borderRadius: radius.md,
      backgroundColor: expanded ? PALETTE.surfaceMuted : 'transparent',
      transition: `background-color ${transitions.fast}`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.sm,
        padding: `10px 12px`,
        borderRadius: radius.md,
        cursor: 'pointer',
      }}
        onMouseEnter={(e) => { if (!expanded) e.currentTarget.parentElement.style.backgroundColor = PALETTE.surfaceMuted; }}
        onMouseLeave={(e) => { if (!expanded) e.currentTarget.parentElement.style.backgroundColor = 'transparent'; }}
      >
        <button
          onClick={onClick}
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.sm,
            fontWeight: typography.weights.semibold,
            color: accent.linkText,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left',
            flex: 1,
            minWidth: 0,
            lineHeight: 1.35,
            wordBreak: 'normal',
            overflowWrap: 'break-word',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = accent.linkHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = accent.linkText; }}
        >
          {label}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
          <span style={chipStyle(accent)}>{count}</span>
          {hasPatterns && (
            <button
              onClick={() => setExpanded(v => !v)}
              aria-label={expanded ? 'Hide question types' : 'Show question types'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: PALETTE.inkTertiary,
                lineHeight: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: `transform ${transitions.fast}`,
              }}>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Expanded pattern list (math only) */}
      {hasPatterns && expanded && (
        <div style={{
          padding: `0 12px 12px`,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4px',
        }}>
          {patterns.map(p => (
            <button
              key={p.slug}
              onClick={() => onPatternClick(p.slug, p.label)}
              style={{
                fontFamily: typography.fontFamily,
                fontSize: typography.sizes.xs,
                color: PALETTE.inkSecondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: spacing.xs,
                padding: '6px 10px',
                borderRadius: radius.sm,
                border: 'none',
                backgroundColor: PALETTE.surface,
                cursor: 'pointer',
                transition: `all ${transitions.fast}`,
                textAlign: 'left',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.orangeLight;
                e.currentTarget.style.color = PALETTE.orange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.surface;
                e.currentTarget.style.color = PALETTE.inkSecondary;
              }}
            >
              <span style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
                minWidth: 0,
              }}>{p.label}</span>
              <span style={{
                fontSize: '10px',
                fontWeight: typography.weights.semibold,
                color: PALETTE.inkTertiary,
                flexShrink: 0,
              }}>{p.count}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Shared helpers
// ────────────────────────────────────────────────────────────────────────────
const chipStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: typography.sizes.xs,
  fontWeight: typography.weights.bold,
  color: accent.chipText,
  backgroundColor: accent.chipBg,
  padding: '4px 10px',
  borderRadius: radius.full,
  whiteSpace: 'nowrap',
  lineHeight: 1.4,
});

const domainLinkStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: typography.sizes.sm,
  fontWeight: typography.weights.semibold,
  color: accent.linkText,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  marginTop: spacing.sm,
  transition: `color ${transitions.fast}`,
});

const EmptyMessage = () => (
  <div style={{
    fontFamily: typography.fontFamily,
    fontSize: typography.sizes.sm,
    color: PALETTE.inkTertiary,
    fontStyle: 'italic',
    padding: spacing.md,
    textAlign: 'center',
  }}>
    No question types yet. Authoring is ongoing.
  </div>
);

export default PracticeBank;
