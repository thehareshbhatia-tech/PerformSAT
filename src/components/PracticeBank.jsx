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

// CB-published domain weights from the digital SAT blueprint.
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

// Per-domain editorial blurb. Serif italic. Sets the tone.
const DOMAIN_BLURBS = {
  'algebra':         'Equations, inequalities, and the lines they live on.',
  'advanced-math':   'Quadratics, exponentials, polynomials — the heavy machinery.',
  'problem-solving': 'Rates, ratios, percents, and reading data tables.',
  'geometry':        'Angles, area, volume, circles, and a little trigonometry.',
  'information-and-ideas':         'Find the evidence. Draw the inference. Trust the text.',
  'craft-and-structure':           'Words in context, author purpose, how texts converse.',
  'standard-english-conventions':  'Commas, clauses, and the rules that make sentences click.',
  'expression-of-ideas':           'Transitions, synthesis, and writing that flows.',
};

// The orange / green / purple rotation. Each domain card gets one of
// these as its number-tile color so the grid has visual rhythm without
// turning into a Skittles bag.
const ACCENT_ROTATION = ['orange', 'purple', 'navy', 'green'];

const ACCENTS = {
  orange: {
    tile:       '#ea580c',
    tileInk:    '#FFFFFF',
    soft:       'rgba(234, 88, 12, 0.08)',
    softBorder: 'rgba(234, 88, 12, 0.18)',
    text:       '#9a3412',
    cta:        '#ea580c',
    ctaHover:   '#c2410c',
    ctaInk:     '#FFFFFF',
  },
  purple: {
    tile:       '#553775',
    tileInk:    '#C6F432',
    soft:       'rgba(85, 55, 117, 0.08)',
    softBorder: 'rgba(85, 55, 117, 0.18)',
    text:       '#3D2052',
    cta:        '#553775',
    ctaHover:   '#3D2052',
    ctaInk:     '#FFFFFF',
  },
  navy: {
    tile:       '#1D1D1F',
    tileInk:    '#C6F432',
    soft:       'rgba(29, 29, 31, 0.05)',
    softBorder: 'rgba(29, 29, 31, 0.15)',
    text:       '#1D1D1F',
    cta:        '#1D1D1F',
    ctaHover:   '#000000',
    ctaInk:     '#FFFFFF',
  },
  green: {
    tile:       '#C6F432',
    tileInk:    '#2E4E2C',
    soft:       'rgba(198, 244, 50, 0.18)',
    softBorder: 'rgba(46, 78, 44, 0.20)',
    text:       '#2E4E2C',
    cta:        '#2E4E2C',
    ctaHover:   '#1F3D1F',
    ctaInk:     '#C6F432',
  },
};

const INK = {
  primary:   '#1D1D1F',
  secondary: '#48484A',
  tertiary:  '#636366',
  muted:     '#8E8E93',
};

const SURFACE = {
  white:      '#FFFFFF',
  paper:      '#FBFBFD',
  cream:      '#FBF7F0',
  lavender:   '#F6F2FB',
  border:     '#E5E5EA',
  hairline:   '#EFEFF4',
};

const SERIF = '"Merriweather", "New York", Georgia, serif';

const MIN_PATTERN_POOL = 4;
const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_SKILL = 15;
const DRILL_COUNT_PER_DOMAIN = 20;
const DRILL_COUNT_HERO = 25;
const DRILL_COUNT_SPRINT = 10;

const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

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
        .filter(skill => skill.total > 0)
        .sort((a, b) => b.total - a.total);
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
        patterns: [],
      }))
      .filter(s => s.count > 0)
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
    return {
      domain,
      label: CB_RW_DOMAIN_LABELS[domain] || domain,
      total: domainTotals.get(domain) || 0,
      cbSkills: skills,
    };
  });
}

const MATH_CATEGORIES = buildMathCategories();
const RW_CATEGORIES = buildRWCategories();

const num2 = (n) => String(n).padStart(2, '0');

// ────────────────────────────────────────────────────────────────────────────
// PracticeBank — entry point
// ────────────────────────────────────────────────────────────────────────────
const PracticeBank = ({ onStartPractice }) => {
  const [section, setSection] = useState('math');
  const [focusedDomain, setFocusedDomain] = useState(null);

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const allItems = section === 'math' ? mathQuestionBank : rwQuestionBank;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';

  const totalAvailable = useMemo(
    () => categories.reduce((acc, c) => acc + c.total, 0),
    [categories],
  );

  const totalTopics = useMemo(
    () => categories.reduce((acc, c) => acc + c.cbSkills.length, 0),
    [categories],
  );

  // ── Drill launchers ──────────────────────────────────────────────────────
  const launchFromPool = (pool, count, label, source) => {
    const drillable = pool.filter(isDrillable);
    if (drillable.length === 0) return;
    const shuffled = shuffle(drillable).slice(0, count);
    onStartPractice(shuffled.map(q => q.id), { label, source, section });
  };

  const launchQuickDrill = () =>
    launchFromPool(allItems, DRILL_COUNT_SPRINT, `Quick ${sectionLabel} drill`, 'practice-bank-quick');

  const launchFullSection = () =>
    launchFromPool(allItems, DRILL_COUNT_HERO, `${sectionLabel} full set`, 'practice-bank-full');

  const launchTodaysMix = () =>
    launchFromPool(allItems, DRILL_COUNT_PER_DOMAIN, `Today's ${sectionLabel} mix`, 'practice-bank-mix');

  const launchDomainMixed = (domainSlug, label) => {
    const fetch = section === 'math' ? getMathQuestionsByDomain : getRWQuestionsByDomain;
    launchFromPool(fetch(domainSlug), DRILL_COUNT_PER_DOMAIN, `${label} mix`, 'practice-bank-domain');
  };

  const launchSkillDrill = (skill) => {
    const pool = section === 'math'
      ? getQuestionsByCBSkill(skill.slug)
      : getRWQuestionsBySkillIds([skill.slug]);
    launchFromPool(pool, DRILL_COUNT_PER_SKILL, skill.label, 'practice-bank-skill');
  };

  const launchPatternDrill = (slug, label) => {
    const pool = getQuestionsBySatPatterns([slug]);
    launchFromPool(pool, DRILL_COUNT_PER_TYPE, label, 'practice-bank-pattern');
  };

  const handlePickSection = (next) => {
    setSection(next);
    setFocusedDomain(null);
  };

  // ── Focus view (when user picks a domain) ────────────────────────────────
  if (focusedDomain) {
    const cat = categories.find(c => c.domain === focusedDomain);
    if (cat) {
      return (
        <DomainFocusView
          cat={cat}
          section={section}
          onBack={() => setFocusedDomain(null)}
          onSkillDrill={launchSkillDrill}
          onPatternDrill={launchPatternDrill}
          onDomainMixed={() => launchDomainMixed(cat.domain, cat.label)}
        />
      );
    }
  }

  return (
    <div style={pageStyle}>
      <TopBar section={section} onChangeSection={handlePickSection} />

      <EditorialHero
        sectionLabel={sectionLabel}
        totalAvailable={totalAvailable}
        totalTopics={totalTopics}
        totalDomains={categories.length}
      />

      <QuickStartRow
        sectionLabel={sectionLabel}
        onQuickDrill={launchQuickDrill}
        onTodaysMix={launchTodaysMix}
        onFullSection={launchFullSection}
      />

      <DomainList
        categories={categories}
        section={section}
        onPickDomain={setFocusedDomain}
        onQuickStart={launchDomainMixed}
      />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page chrome
// ────────────────────────────────────────────────────────────────────────────
const pageStyle = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: `${spacing.xl} ${spacing.xl} ${spacing['3xl']}`,
  fontFamily: typography.fontFamily,
  color: INK.primary,
};

const TopBar = ({ section, onChangeSection }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginBottom: spacing.xl,
    flexWrap: 'wrap',
  }}>
    <div style={{
      fontFamily: typography.fontFamily,
      fontSize: '12px',
      fontWeight: 700,
      color: INK.tertiary,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
    }}>
      Practice Bank
    </div>
    <SectionToggle section={section} onChange={onChangeSection} />
  </div>
);

const SECTION_TABS = [
  { id: 'math', label: 'Math' },
  { id: 'rw',   label: 'Reading & Writing' },
];

const SectionToggle = ({ section, onChange }) => (
  <div role="tablist" aria-label="Section" style={{
    display: 'inline-flex',
    backgroundColor: SURFACE.white,
    border: `1px solid ${SURFACE.border}`,
    borderRadius: radius.full,
    padding: '4px',
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
            fontSize: '13px',
            fontWeight: active ? 700 : 500,
            color: active ? '#FFFFFF' : INK.tertiary,
            backgroundColor: active ? '#1D1D1F' : 'transparent',
            border: 'none',
            borderRadius: radius.full,
            padding: '8px 18px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '36px',
          }}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// EditorialHero — Acely's big serif headline + stat subtitle
// ────────────────────────────────────────────────────────────────────────────
const EditorialHero = ({ sectionLabel, totalAvailable, totalTopics, totalDomains }) => (
  <section style={{ marginBottom: spacing['2xl'] }}>
    <h1 style={{
      fontFamily: SERIF,
      fontSize: '52px',
      lineHeight: 1.05,
      fontWeight: 700,
      color: INK.primary,
      margin: 0,
      letterSpacing: '-0.02em',
    }}>
      Your practice bank.
    </h1>
    <p style={{
      fontFamily: typography.fontFamily,
      fontSize: '17px',
      color: INK.secondary,
      margin: `16px 0 0`,
      maxWidth: '640px',
      lineHeight: 1.55,
    }}>
      {totalAvailable.toLocaleString()} hand-authored {sectionLabel} questions across {totalDomains} domain{totalDomains === 1 ? '' : 's'} and {totalTopics} topic{totalTopics === 1 ? '' : 's'}. Every item mirrors the digital SAT — same flavor, same difficulty, same diagrams.
    </p>
  </section>
);

// ────────────────────────────────────────────────────────────────────────────
// QuickStartRow — three clean cards, no decoration
// ────────────────────────────────────────────────────────────────────────────
const QuickStartRow = ({ sectionLabel, onQuickDrill, onTodaysMix, onFullSection }) => {
  const tiles = [
    {
      eyebrow: 'Warm up',
      title: 'Quick drill',
      sub: '10 questions · ~12 min',
      onClick: onQuickDrill,
      accent: 'navy',
    },
    {
      eyebrow: "Today's pick",
      title: "Today's mix",
      sub: '20 mixed questions · ~25 min',
      onClick: onTodaysMix,
      accent: 'orange',
      featured: true,
    },
    {
      eyebrow: 'Go long',
      title: `Full ${sectionLabel}`,
      sub: '25 questions · ~30 min',
      onClick: onFullSection,
      accent: 'purple',
    },
  ];

  return (
    <section style={{ marginBottom: spacing['2xl'] }}>
      <Eyebrow>Start drilling</Eyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: spacing.md,
      }}>
        {tiles.map(t => <QuickStartTile key={t.title} {...t} />)}
      </div>
    </section>
  );
};

const QuickStartTile = ({ eyebrow, title, sub, onClick, accent, featured }) => {
  const [hover, setHover] = useState(false);
  const a = ACCENTS[accent];

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: typography.fontFamily,
        textAlign: 'left',
        backgroundColor: featured ? a.tile : SURFACE.white,
        color: featured ? a.tileInk : INK.primary,
        border: `1px solid ${featured ? a.tile : SURFACE.border}`,
        borderRadius: '16px',
        padding: '22px 24px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minHeight: '148px',
        transition: `transform ${transitions.normal}, box-shadow ${transitions.fast}, border-color ${transitions.fast}`,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 12px 28px -10px rgba(0, 0, 0, 0.15)'
          : '0 1px 3px -1px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div style={{
        fontSize: '11px',
        fontWeight: 700,
        color: featured ? 'rgba(255, 255, 255, 0.7)' : INK.muted,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
      }}>
        {eyebrow}
      </div>
      <div style={{
        fontFamily: SERIF,
        fontSize: '26px',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.015em',
      }}>
        {title}
      </div>
      <div style={{
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <span style={{
          fontSize: '13px',
          color: featured ? 'rgba(255, 255, 255, 0.78)' : INK.tertiary,
        }}>
          {sub}
        </span>
        <Arrow tone={featured ? a.tileInk : a.cta} animate={hover} />
      </div>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// DomainList — 4 numbered cards in the Acely "01 02 03 04" idiom
// ────────────────────────────────────────────────────────────────────────────
const DomainList = ({ categories, section, onPickDomain, onQuickStart }) => (
  <section>
    <Eyebrow>Drill by domain</Eyebrow>
    <SectionLead>Choose what to dig into.</SectionLead>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
      gap: spacing.lg,
    }}>
      {categories.map((cat, i) => (
        <DomainCard
          key={cat.domain}
          cat={cat}
          number={i + 1}
          accentName={ACCENT_ROTATION[i % ACCENT_ROTATION.length]}
          section={section}
          onExplore={() => onPickDomain(cat.domain)}
          onQuickStart={() => onQuickStart(cat.domain, cat.label)}
        />
      ))}
    </div>
  </section>
);

const DomainCard = ({ cat, number, accentName, section, onExplore, onQuickStart }) => {
  const [hover, setHover] = useState(false);
  const a = ACCENTS[accentName];
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const sectionWord = section === 'math' ? 'Math' : 'R&W';
  const blurb = DOMAIN_BLURBS[cat.domain] || '';
  const topThree = cat.cbSkills.slice(0, 3);

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: SURFACE.white,
        border: `1px solid ${SURFACE.border}`,
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: `transform ${transitions.normal}, box-shadow ${transitions.fast}`,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 16px 36px -16px rgba(0, 0, 0, 0.18)'
          : '0 1px 3px -1px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div style={{ padding: '26px 28px 18px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
        }}>
          <NumberTile number={number} accent={a} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: INK.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: '6px',
            }}>
              {weight}% of {sectionWord}
            </div>
            <h3 style={{
              fontFamily: SERIF,
              fontSize: '26px',
              fontWeight: 700,
              color: INK.primary,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}>
              {cat.label}
            </h3>
            <p style={{
              fontFamily: SERIF,
              fontStyle: 'italic',
              fontSize: '14px',
              color: INK.secondary,
              margin: '10px 0 0',
              lineHeight: 1.5,
            }}>
              {blurb}
            </p>
          </div>
        </div>

        <div style={{
          marginTop: '18px',
          display: 'flex',
          alignItems: 'baseline',
          gap: '14px',
          paddingBottom: '14px',
          borderBottom: `1px solid ${SURFACE.hairline}`,
        }}>
          <div>
            <div style={{
              fontFamily: SERIF,
              fontSize: '36px',
              fontWeight: 700,
              color: INK.primary,
              letterSpacing: '-0.025em',
              lineHeight: 1,
            }}>
              {cat.total.toLocaleString()}
            </div>
            <div style={{
              fontSize: '11px',
              color: INK.muted,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: '4px',
            }}>
              Questions
            </div>
          </div>
          <div style={{ width: '1px', height: '36px', backgroundColor: SURFACE.hairline }} />
          <div>
            <div style={{
              fontFamily: SERIF,
              fontSize: '36px',
              fontWeight: 700,
              color: INK.primary,
              letterSpacing: '-0.025em',
              lineHeight: 1,
            }}>
              {cat.cbSkills.length}
            </div>
            <div style={{
              fontSize: '11px',
              color: INK.muted,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: '4px',
            }}>
              Topic{cat.cbSkills.length === 1 ? '' : 's'}
            </div>
          </div>
        </div>

        {topThree.length > 0 && (
          <div style={{ marginTop: '14px' }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: INK.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '10px',
            }}>
              Most-practiced topics
            </div>
            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {topThree.map(s => (
                <li key={s.slug} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontSize: '14px',
                  color: INK.primary,
                }}>
                  <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {s.short || s.label}
                  </span>
                  <CountBadge n={s.total || s.count} accent={a} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div style={{
        padding: '16px 28px 22px',
        display: 'flex',
        gap: '10px',
      }}>
        <button
          onClick={onQuickStart}
          style={{
            flex: '0 0 auto',
            fontFamily: typography.fontFamily,
            fontSize: '13px',
            fontWeight: 600,
            color: INK.primary,
            backgroundColor: 'transparent',
            border: `1px solid ${SURFACE.border}`,
            borderRadius: '12px',
            padding: '12px 18px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '44px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = a.cta;
            e.currentTarget.style.color = a.cta;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = SURFACE.border;
            e.currentTarget.style.color = INK.primary;
          }}
        >
          Quick mix (20q)
        </button>
        <button
          onClick={onExplore}
          style={{
            flex: 1,
            fontFamily: typography.fontFamily,
            fontSize: '14px',
            fontWeight: 700,
            color: a.ctaInk,
            backgroundColor: a.cta,
            border: 'none',
            borderRadius: '12px',
            padding: '12px 18px',
            cursor: 'pointer',
            transition: `background-color ${transitions.fast}`,
            minHeight: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = a.ctaHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = a.cta; }}
        >
          Explore {cat.label.split(' ')[0]}
          <Arrow tone={a.ctaInk} animate={hover} />
        </button>
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// DomainFocusView — drilled-into-a-domain page
// ────────────────────────────────────────────────────────────────────────────
const DomainFocusView = ({ cat, section, onBack, onSkillDrill, onPatternDrill, onDomainMixed }) => {
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const sectionWord = section === 'math' ? 'Math' : 'R&W';
  const blurb = DOMAIN_BLURBS[cat.domain] || '';
  const totalPatterns = cat.cbSkills.reduce((s, k) => s + (k.patterns?.length || 0), 0);
  const [activeSkillSlug, setActiveSkillSlug] = useState(null);

  return (
    <div style={pageStyle}>
      <button
        onClick={onBack}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: '13px',
          fontWeight: 600,
          color: INK.tertiary,
          background: 'none',
          border: 'none',
          padding: '6px 0',
          marginBottom: spacing.lg,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: `color ${transitions.fast}`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = INK.primary; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = INK.tertiary; }}
      >
        <Arrow tone={INK.tertiary} direction="left" />
        Back to all domains
      </button>

      <section style={{ marginBottom: spacing['2xl'] }}>
        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          color: INK.muted,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          marginBottom: '12px',
        }}>
          Domain · {weight}% of {sectionWord}
        </div>
        <h1 style={{
          fontFamily: SERIF,
          fontSize: '56px',
          lineHeight: 1.0,
          fontWeight: 700,
          color: INK.primary,
          margin: 0,
          letterSpacing: '-0.025em',
        }}>
          {cat.label}.
        </h1>
        <p style={{
          fontFamily: SERIF,
          fontStyle: 'italic',
          fontSize: '20px',
          color: INK.secondary,
          margin: '18px 0 0',
          maxWidth: '620px',
          lineHeight: 1.45,
        }}>
          {blurb}
        </p>

        <div style={{
          marginTop: '28px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <StatPill label="Questions" value={cat.total.toLocaleString()} />
          <StatPill label="Topics" value={cat.cbSkills.length} />
          {totalPatterns > 0 && <StatPill label="Question types" value={totalPatterns} />}

          <button
            onClick={onDomainMixed}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: '14px',
              fontWeight: 700,
              color: '#FFFFFF',
              backgroundColor: '#ea580c',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 22px',
              cursor: 'pointer',
              transition: `background-color ${transitions.fast}`,
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginLeft: 'auto',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c2410c'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ea580c'; }}
          >
            Drill {DRILL_COUNT_PER_DOMAIN} mixed
            <Arrow tone="#FFFFFF" />
          </button>
        </div>
      </section>

      <section style={{ marginBottom: spacing.xl }}>
        <Eyebrow>Topics in {cat.label}</Eyebrow>
        <SectionLead>Pick a topic to drill.</SectionLead>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.sm,
        }}>
          {cat.cbSkills.map((skill, i) => (
            <TopicRow
              key={skill.slug}
              skill={skill}
              number={i + 1}
              accent={ACCENTS[ACCENT_ROTATION[i % ACCENT_ROTATION.length]]}
              isActive={activeSkillSlug === skill.slug}
              onDrill={() => onSkillDrill(skill)}
              onToggleTypes={
                skill.patterns?.length > 0
                  ? () => setActiveSkillSlug(activeSkillSlug === skill.slug ? null : skill.slug)
                  : null
              }
              onPatternDrill={onPatternDrill}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// TopicRow — numbered editorial row, optional pattern reveal below
// ────────────────────────────────────────────────────────────────────────────
const TopicRow = ({ skill, number, accent, isActive, onDrill, onToggleTypes, onPatternDrill }) => {
  const [hover, setHover] = useState(false);
  const total = skill.total ?? skill.count ?? 0;
  const typesCount = skill.patterns?.length || 0;
  const label = skill.short || skill.label;

  return (
    <article
      style={{
        backgroundColor: SURFACE.white,
        border: `1px solid ${isActive ? accent.softBorder : SURFACE.border}`,
        borderRadius: '16px',
        transition: `border-color ${transitions.fast}`,
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <NumberTile number={number} accent={accent} size="sm" />

        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{
            fontFamily: SERIF,
            fontSize: '20px',
            fontWeight: 700,
            color: INK.primary,
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
          }}>
            {label}
          </h4>
          <div style={{
            fontSize: '13px',
            color: INK.tertiary,
            marginTop: '4px',
          }}>
            {total} question{total === 1 ? '' : 's'}
            {typesCount > 0 && ` · ${typesCount} question type${typesCount === 1 ? '' : 's'}`}
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
        }}>
          {onToggleTypes && (
            <button
              onClick={onToggleTypes}
              aria-expanded={isActive}
              aria-label={`${isActive ? 'Hide' : 'Show'} ${typesCount} question types`}
              style={{
                fontFamily: typography.fontFamily,
                fontSize: '12px',
                fontWeight: 600,
                color: isActive ? '#FFFFFF' : accent.text,
                backgroundColor: isActive ? accent.tile : accent.soft,
                border: `1px solid ${isActive ? accent.tile : accent.softBorder}`,
                borderRadius: '999px',
                padding: '6px 12px',
                cursor: 'pointer',
                transition: `all ${transitions.fast}`,
                minHeight: '34px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {typesCount} types
              <Chevron expanded={isActive} />
            </button>
          )}
          <button
            onClick={onDrill}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: '13px',
              fontWeight: 700,
              color: '#FFFFFF',
              backgroundColor: '#ea580c',
              border: 'none',
              borderRadius: '12px',
              padding: '10px 18px',
              cursor: 'pointer',
              transition: `background-color ${transitions.fast}`,
              minHeight: '40px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c2410c'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ea580c'; }}
          >
            Drill {DRILL_COUNT_PER_SKILL}
            <Arrow tone="#FFFFFF" animate={hover} />
          </button>
        </div>
      </div>

      {isActive && typesCount > 0 && (
        <PatternStrip
          skill={skill}
          accent={accent}
          onPatternDrill={onPatternDrill}
        />
      )}
    </article>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// PatternStrip — clean reveal of specific question types under a topic
// ────────────────────────────────────────────────────────────────────────────
const PatternStrip = ({ skill, accent, onPatternDrill }) => (
  <div style={{
    padding: '4px 22px 20px',
    borderTop: `1px solid ${SURFACE.hairline}`,
  }}>
    <div style={{
      fontSize: '11px',
      fontWeight: 700,
      color: INK.muted,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      padding: '14px 0 10px',
    }}>
      Specific question types
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '8px',
    }}>
      {skill.patterns.map(p => (
        <PatternButton
          key={p.slug}
          pattern={p}
          accent={accent}
          onClick={() => onPatternDrill(p.slug, p.label)}
        />
      ))}
    </div>
  </div>
);

const PatternButton = ({ pattern, accent, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: typography.fontFamily,
        textAlign: 'left',
        backgroundColor: hover ? accent.soft : SURFACE.paper,
        border: `1px solid ${hover ? accent.softBorder : SURFACE.border}`,
        borderRadius: '10px',
        padding: '10px 14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        transition: `all ${transitions.fast}`,
        minHeight: '44px',
      }}
    >
      <span style={{
        fontSize: '13px',
        fontWeight: 600,
        color: INK.primary,
        lineHeight: 1.3,
        overflow: 'hidden',
      }}>
        {pattern.label}
      </span>
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        color: accent.text,
        backgroundColor: hover ? SURFACE.white : accent.soft,
        padding: '2px 8px',
        borderRadius: '999px',
        flexShrink: 0,
      }}>
        {pattern.count}
      </span>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Building blocks
// ────────────────────────────────────────────────────────────────────────────

// The signature Acely move: a square tile with the category number.
// Mono numerals on a saturated background.
const NumberTile = ({ number, accent, size = 'lg' }) => {
  const dims = size === 'sm' ? { box: 44, fontSize: 18 } : { box: 64, fontSize: 26 };
  return (
    <div style={{
      width: dims.box,
      height: dims.box,
      borderRadius: '12px',
      backgroundColor: accent.tile,
      color: accent.tileInk,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: '"SF Mono", "JetBrains Mono", "Roboto Mono", monospace',
      fontSize: `${dims.fontSize}px`,
      fontWeight: 700,
      letterSpacing: '-0.02em',
    }} aria-hidden>
      {num2(number)}
    </div>
  );
};

const Arrow = ({ tone = INK.primary, animate = false, direction = 'right' }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden
    style={{
      transform: `${direction === 'left' ? 'rotate(180deg)' : ''} translateX(${animate ? '3px' : '0'})`,
      transition: `transform ${transitions.spring}`,
    }}
  >
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke={tone} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Chevron = ({ expanded }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden
    style={{
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: `transform ${transitions.fast}`,
    }}
  >
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CountBadge = ({ n, accent }) => (
  <span style={{
    fontFamily: typography.fontFamily,
    fontSize: '11px',
    fontWeight: 700,
    color: accent.text,
    backgroundColor: accent.soft,
    padding: '3px 10px',
    borderRadius: '999px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  }}>
    {n}
  </span>
);

const StatPill = ({ label, value }) => (
  <div style={{
    display: 'inline-flex',
    flexDirection: 'column',
    gap: '2px',
    padding: '8px 14px',
    backgroundColor: SURFACE.paper,
    border: `1px solid ${SURFACE.border}`,
    borderRadius: '10px',
  }}>
    <span style={{
      fontFamily: SERIF,
      fontSize: '20px',
      fontWeight: 700,
      color: INK.primary,
      letterSpacing: '-0.015em',
      lineHeight: 1,
    }}>
      {value}
    </span>
    <span style={{
      fontSize: '10px',
      fontWeight: 700,
      color: INK.muted,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    }}>
      {label}
    </span>
  </div>
);

const Eyebrow = ({ children }) => (
  <div style={{
    fontSize: '11px',
    fontWeight: 700,
    color: INK.muted,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    marginBottom: '8px',
  }}>
    {children}
  </div>
);

const SectionLead = ({ children }) => (
  <h2 style={{
    fontFamily: SERIF,
    fontSize: '28px',
    fontWeight: 700,
    color: INK.primary,
    margin: `0 0 ${spacing.lg}`,
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
  }}>
    {children}
  </h2>
);

export default PracticeBank;
