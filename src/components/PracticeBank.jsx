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

// CB-published domain weights from the digital SAT blueprint. Surfaced
// inline beneath each domain title for SAT-test parity.
const DOMAIN_WEIGHTS = {
  'algebra':         35,
  'advanced-math':   35,
  'problem-solving': 15,
  'geometry':        15,
  'information-and-ideas':         26,
  'craft-and-structure':           28,
  'standard-english-conventions':  26,
  'expression-of-ideas':           20,
};

// Three-color palette pulled from src/design-tokens.css — matches the
// orange / green / purple split visible in the homepage Dashboard.
const PALETTE = {
  orange:        '#ea580c',
  orangeHover:   '#c2410c',
  orangeLight:   'rgba(234, 88, 12, 0.10)',
  orangeBorder:  'rgba(234, 88, 12, 0.25)',
  green:         '#C6F432',
  greenDark:     '#2E4E2C',
  greenSoft:     '#EEF8C8',
  purple:        '#B092DD',
  purpleSoft:    '#EDE5F8',
  purpleDark:    '#553775',
  ink:           '#1D1D1F',
  inkSecondary:  '#48484A',
  inkTertiary:   '#636366',
  inkMuted:      '#8E8E93',
  surface:       '#FFFFFF',
  surfaceMuted:  '#FBFBFD',
  border:        '#E5E5EA',
  borderSoft:    '#F0F0F2',
  hairline:      '#EFEFF4',
};

const MIN_PATTERN_POOL = 4;
const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_SKILL = 15;
const DRILL_COUNT_PER_DOMAIN = 20;
const DRILL_COUNT_HERO = 25;

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

  const totalQuestionTypes = useMemo(() => {
    if (section === 'rw') {
      return categories.reduce((acc, c) => acc + c.skills.length, 0);
    }
    return categories.reduce(
      (acc, c) => acc + c.cbSkills.reduce((s, k) => s + k.patterns.length, 0),
      0,
    );
  }, [categories, section]);

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
      maxWidth: '1120px',
      margin: '0 auto',
      padding: `${spacing.xl} ${spacing.xl} ${spacing['3xl']}`,
      fontFamily: typography.fontFamily,
      color: PALETTE.ink,
    }}>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: spacing.xl,
        marginBottom: spacing['2xl'],
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 520px', minWidth: 0 }}>
          <h1 style={{
            fontFamily: typography.fontFamily,
            fontSize: '34px',
            lineHeight: 1.1,
            fontWeight: 700,
            color: PALETTE.ink,
            margin: 0,
            letterSpacing: '-0.025em',
          }}>
            SAT Question Bank
          </h1>
          <p style={{
            fontSize: '15px',
            color: PALETTE.inkSecondary,
            margin: `12px 0 0`,
            maxWidth: '680px',
            lineHeight: 1.5,
          }}>
            Hand-authored practice that mirrors the digital SAT — every question type
            from College Board's published Bluebook tests and Educator Question Bank,
            with diagrams that render the way they will on test day.
          </p>
        </div>
        <SectionToggle section={section} onChange={setSection} />
      </div>

      {/* ── Section heading + hero card ───────────────────────────────────── */}
      <h2 style={{
        fontSize: '20px',
        fontWeight: 600,
        color: PALETTE.ink,
        margin: `0 0 ${spacing.md}`,
        letterSpacing: '-0.01em',
      }}>
        Practice the {sectionLabel} Section
      </h2>

      <HeroSectionCard
        sectionId={section}
        sectionLabel={sectionLabel}
        sectionDescription={sectionDescription}
        totalAvailable={totalAvailable}
        totalQuestionTypes={totalQuestionTypes}
        onLaunch={launchFullSection}
      />

      {/* ── Targeted Practice header ──────────────────────────────────────── */}
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
          fontSize: '20px',
          fontWeight: 600,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: '-0.01em',
        }}>
          Targeted Practice by Domain &amp; Subdomain
        </h2>
        <div style={{
          fontSize: '13px',
          color: PALETTE.inkTertiary,
        }}>
          {categories.length} domain{categories.length === 1 ? '' : 's'} · {totalAvailable.toLocaleString()} questions · {totalQuestionTypes} question types
        </div>
      </div>

      {/* ── Domain grid ───────────────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
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

// Cycle the accent across the four domain cards so the grid has rhythm.
const ACCENTS = ['orange', 'green', 'purple', 'orange'];
const pickAccent = (idx) => ACCENTS[idx % ACCENTS.length];

const ACCENT_STYLES = {
  orange: {
    rail:      PALETTE.orange,
    chipBg:    PALETTE.orangeLight,
    chipText:  PALETTE.orange,
    linkText:  PALETTE.orange,
    linkHover: PALETTE.orangeHover,
    pillBg:    'rgba(234, 88, 12, 0.06)',
    pillBgHover: PALETTE.orangeLight,
    pillBorder: 'rgba(234, 88, 12, 0.18)',
    pillText:  PALETTE.orange,
  },
  green: {
    rail:      PALETTE.greenDark,
    chipBg:    PALETTE.green,
    chipText:  PALETTE.greenDark,
    linkText:  PALETTE.greenDark,
    linkHover: '#1F3D1F',
    pillBg:    PALETTE.greenSoft,
    pillBgHover: PALETTE.green,
    pillBorder: 'rgba(46, 78, 44, 0.20)',
    pillText:  PALETTE.greenDark,
  },
  purple: {
    rail:      PALETTE.purpleDark,
    chipBg:    PALETTE.purpleSoft,
    chipText:  PALETTE.purpleDark,
    linkText:  PALETTE.purpleDark,
    linkHover: '#3D2052',
    pillBg:    'rgba(176, 146, 221, 0.10)',
    pillBgHover: PALETTE.purpleSoft,
    pillBorder: 'rgba(85, 55, 117, 0.20)',
    pillText:  PALETTE.purpleDark,
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
            fontSize: '14px',
            fontWeight: active ? 600 : 500,
            color: active ? PALETTE.ink : PALETTE.inkTertiary,
            backgroundColor: active ? PALETTE.green : 'transparent',
            border: 'none',
            borderRadius: radius.full,
            padding: '8px 18px',
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
const HeroSectionCard = ({ sectionId, sectionLabel, sectionDescription, totalAvailable, totalQuestionTypes, onLaunch }) => {
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
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '4px',
        background: `linear-gradient(180deg, ${PALETTE.orange} 0%, ${PALETTE.green} 100%)`,
      }} />

      <div style={{
        width: '56px', height: '56px',
        borderRadius: '14px',
        backgroundColor: PALETTE.orangeLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }} aria-hidden>
        {isMath ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" stroke="#ea580c" strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h16M4 10h16M4 15h10M4 20h12" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        )}
      </div>

      <div style={{ flex: '1 1 320px', minWidth: 0 }}>
        <div style={{
          fontSize: '18px',
          fontWeight: 600,
          color: PALETTE.ink,
          letterSpacing: '-0.01em',
        }}>
          {sectionLabel}
        </div>
        <div style={{
          fontSize: '13px',
          color: PALETTE.inkTertiary,
          marginTop: '4px',
        }}>
          {sectionDescription}
        </div>
        <div style={{
          fontSize: '12px',
          color: PALETTE.inkMuted,
          marginTop: '6px',
        }}>
          {totalAvailable.toLocaleString()} questions · {totalQuestionTypes} question types
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        <div style={{
          fontSize: '10px',
          fontWeight: 700,
          color: PALETTE.inkTertiary,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          Available
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: PALETTE.greenDark,
          backgroundColor: PALETTE.green,
          padding: '4px 14px',
          borderRadius: radius.full,
        }}>
          {totalAvailable.toLocaleString()}
        </div>
      </div>

      <button
        onClick={onLaunch}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: '15px',
          fontWeight: 600,
          color: '#FFFFFF',
          backgroundColor: PALETTE.orange,
          border: 'none',
          borderRadius: '12px',
          padding: '12px 22px',
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
  const totalPatterns = visibleSkills.reduce((s, k) => s + k.patterns.length, 0);

  return (
    <section style={cardShellStyle}>
      <div style={{ height: '3px', backgroundColor: accentStyle.rail }} />

      <div style={{ padding: `${spacing.lg} ${spacing.lg} 0` }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: spacing.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={cardTitleStyle}>{cat.label}</h3>
            <div style={cardSubtitleStyle}>
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

      <SectionLabel>Practice a Subdomain</SectionLabel>

      <div style={{ padding: `0 ${spacing.lg} ${spacing.lg}` }}>
        {!hasContent ? (
          <EmptyMessage />
        ) : (
          visibleSkills.map((skill, i) => (
            <SkillBlock
              key={skill.slug}
              skill={skill}
              isLast={i === visibleSkills.length - 1}
              accent={accentStyle}
              onSkillClick={() => onSkillClick(skill.slug, skill.label)}
              onPatternClick={onPatternClick}
            />
          ))
        )}
      </div>

      {hasContent && (
        <div style={cardFooterMeta}>
          {visibleSkills.length} subdomain{visibleSkills.length === 1 ? '' : 's'} · {totalPatterns} question type{totalPatterns === 1 ? '' : 's'}
        </div>
      )}
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
    <section style={cardShellStyle}>
      <div style={{ height: '3px', backgroundColor: accentStyle.rail }} />

      <div style={{ padding: `${spacing.lg} ${spacing.lg} 0` }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: spacing.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={cardTitleStyle}>{cat.label}</h3>
            <div style={cardSubtitleStyle}>
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

      <SectionLabel>Practice a Subdomain</SectionLabel>

      <div style={{ padding: `0 ${spacing.lg} ${spacing.lg}` }}>
        {!hasItems ? (
          <EmptyMessage />
        ) : (
          cat.skills.map((skill, i) => (
            <SubdomainLinkRow
              key={skill.slug}
              label={skill.label}
              count={skill.count}
              isLast={i === cat.skills.length - 1}
              accent={accentStyle}
              onClick={() => onSkillClick(skill.slug, skill.label)}
            />
          ))
        )}
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// SkillBlock — Math subdomain with inline question-type pills
// ────────────────────────────────────────────────────────────────────────────
const SkillBlock = ({ skill, isLast, accent, onSkillClick, onPatternClick }) => {
  const hasPatterns = skill.patterns.length > 0;
  const label = skill.short || skill.label;

  return (
    <div style={{
      paddingTop: '12px',
      paddingBottom: '12px',
      borderBottom: isLast ? 'none' : `1px solid ${PALETTE.hairline}`,
    }}>
      {/* Subdomain row: name link · count chip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.sm,
        marginBottom: hasPatterns ? '8px' : 0,
      }}>
        <button
          onClick={onSkillClick}
          style={skillLinkStyle(accent)}
          onMouseEnter={(e) => { e.currentTarget.style.color = accent.linkHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = accent.linkText; }}
        >
          {label}
        </button>
        <span style={countPillStyle(accent)}>{skill.total}</span>
      </div>

      {/* Question-type pills (always visible — solves "less types" concern) */}
      {hasPatterns && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: '6px',
        }}>
          {skill.patterns.map(p => (
            <PatternPill
              key={p.slug}
              label={p.label}
              count={p.count}
              accent={accent}
              onClick={() => onPatternClick(p.slug, p.label)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// R&W rows have no sub-patterns — just a clean link row.
const SubdomainLinkRow = ({ label, count, isLast, accent, onClick }) => (
  <div style={{
    paddingTop: '12px',
    paddingBottom: '12px',
    borderBottom: isLast ? 'none' : `1px solid ${PALETTE.hairline}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  }}>
    <button
      onClick={onClick}
      style={skillLinkStyle(accent)}
      onMouseEnter={(e) => { e.currentTarget.style.color = accent.linkHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = accent.linkText; }}
    >
      {label}
    </button>
    <span style={countPillStyle(accent)}>{count}</span>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// PatternPill — small clickable chip per specific question type
// ────────────────────────────────────────────────────────────────────────────
const PatternPill = ({ label, count, accent, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={`${label} — ${count} questions`}
      style={{
        fontFamily: typography.fontFamily,
        fontSize: '12px',
        fontWeight: 500,
        color: accent.pillText,
        backgroundColor: hover ? accent.pillBgHover : accent.pillBg,
        border: `1px solid ${accent.pillBorder}`,
        borderRadius: '999px',
        padding: '4px 10px',
        cursor: 'pointer',
        transition: `background-color ${transitions.fast}`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        lineHeight: 1.4,
      }}
    >
      <span style={{ maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <span style={{
        fontSize: '10px',
        fontWeight: 700,
        color: accent.pillText,
        opacity: 0.65,
      }}>
        {count}
      </span>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Shared style helpers
// ────────────────────────────────────────────────────────────────────────────
const cardShellStyle = {
  backgroundColor: PALETTE.surface,
  border: `1px solid ${PALETTE.border}`,
  borderRadius: radius.lg,
  boxShadow: shadows.sm,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const cardTitleStyle = {
  fontFamily: typography.fontFamily,
  fontSize: '19px',
  fontWeight: 600,
  color: PALETTE.ink,
  margin: 0,
  letterSpacing: '-0.01em',
};

const cardSubtitleStyle = {
  fontSize: '13px',
  color: PALETTE.inkTertiary,
  marginTop: '4px',
};

const cardFooterMeta = {
  fontSize: '11px',
  color: PALETTE.inkMuted,
  padding: `10px ${spacing.lg}`,
  borderTop: `1px solid ${PALETTE.hairline}`,
  backgroundColor: PALETTE.surfaceMuted,
  letterSpacing: '0.02em',
};

const SectionLabel = ({ children }) => (
  <div style={{
    fontSize: '10px',
    fontWeight: 700,
    color: PALETTE.inkTertiary,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: `${spacing.md} ${spacing.lg} 0`,
    borderTop: `1px solid ${PALETTE.hairline}`,
    marginTop: spacing.md,
  }}>
    {children}
  </div>
);

const chipStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: '12px',
  fontWeight: 700,
  color: accent.chipText,
  backgroundColor: accent.chipBg,
  padding: '4px 10px',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
  lineHeight: 1.4,
  flexShrink: 0,
});

const countPillStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: '11px',
  fontWeight: 700,
  color: accent.chipText,
  backgroundColor: accent.chipBg,
  padding: '3px 9px',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
});

const domainLinkStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: '13px',
  fontWeight: 600,
  color: accent.linkText,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  marginTop: '10px',
  transition: `color ${transitions.fast}`,
});

const skillLinkStyle = (accent) => ({
  fontFamily: typography.fontFamily,
  fontSize: '14px',
  fontWeight: 600,
  color: accent.linkText,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  flex: 1,
  minWidth: 0,
  lineHeight: 1.35,
  transition: `color ${transitions.fast}`,
});

const EmptyMessage = () => (
  <div style={{
    fontFamily: typography.fontFamily,
    fontSize: '13px',
    color: PALETTE.inkTertiary,
    fontStyle: 'italic',
    padding: `${spacing.md} 0`,
    textAlign: 'center',
  }}>
    No question types yet. Authoring is ongoing.
  </div>
);

export default PracticeBank;
