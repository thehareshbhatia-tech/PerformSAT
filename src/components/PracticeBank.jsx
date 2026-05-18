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

// Per-domain identity: each gets its own personality (icon + warm gradient
// + accent color). The accent powers buttons, badges, and hover states so
// each domain feels like its own place to be.
const DOMAIN_IDENTITY = {
  // Math
  'algebra': {
    icon: '📐',
    blurb: 'Equations, inequalities, and the lines they live on.',
    gradient: 'linear-gradient(135deg, #FFE5D0 0%, #FFCBA4 100%)',
    accent: '#ea580c',
    accentDark: '#9a3412',
    accentSoft: 'rgba(234, 88, 12, 0.10)',
  },
  'advanced-math': {
    icon: '🧮',
    blurb: 'Quadratics, exponentials, functions, the works.',
    gradient: 'linear-gradient(135deg, #E9DEFF 0%, #C9B0F5 100%)',
    accent: '#7C3AED',
    accentDark: '#4C1D95',
    accentSoft: 'rgba(124, 58, 237, 0.10)',
  },
  'problem-solving': {
    icon: '📊',
    blurb: 'Rates, ratios, percents, and reading the data.',
    gradient: 'linear-gradient(135deg, #DCFAD7 0%, #A8E89A 100%)',
    accent: '#15803D',
    accentDark: '#14532D',
    accentSoft: 'rgba(21, 128, 61, 0.10)',
  },
  'geometry': {
    icon: '📏',
    blurb: 'Angles, areas, circles, and a little trig.',
    gradient: 'linear-gradient(135deg, #FFEFB7 0%, #FFD96B 100%)',
    accent: '#B45309',
    accentDark: '#78350F',
    accentSoft: 'rgba(180, 83, 9, 0.10)',
  },
  // R&W
  'information-and-ideas': {
    icon: '🔍',
    blurb: 'Find the evidence. Make the inference.',
    gradient: 'linear-gradient(135deg, #FFE5D0 0%, #FFCBA4 100%)',
    accent: '#ea580c',
    accentDark: '#9a3412',
    accentSoft: 'rgba(234, 88, 12, 0.10)',
  },
  'craft-and-structure': {
    icon: '✍️',
    blurb: 'Words in context, purpose, and how texts talk to each other.',
    gradient: 'linear-gradient(135deg, #D6F4F0 0%, #99E0D6 100%)',
    accent: '#0F766E',
    accentDark: '#134E4A',
    accentSoft: 'rgba(15, 118, 110, 0.10)',
  },
  'standard-english-conventions': {
    icon: '✓',
    blurb: 'Commas, clauses, and the rules that make sentences click.',
    gradient: 'linear-gradient(135deg, #E9DEFF 0%, #C9B0F5 100%)',
    accent: '#7C3AED',
    accentDark: '#4C1D95',
    accentSoft: 'rgba(124, 58, 237, 0.10)',
  },
  'expression-of-ideas': {
    icon: '💬',
    blurb: 'Transitions, synthesis, and writing that flows.',
    gradient: 'linear-gradient(135deg, #DCFAD7 0%, #A8E89A 100%)',
    accent: '#15803D',
    accentDark: '#14532D',
    accentSoft: 'rgba(21, 128, 61, 0.10)',
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
  border:     '#E5E5EA',
  hairline:   '#EFEFF4',
};

const MIN_PATTERN_POOL = 4;
const DRILL_COUNT_PER_TYPE = 10;
const DRILL_COUNT_PER_SKILL = 15;
const DRILL_COUNT_PER_DOMAIN = 20;
const DRILL_COUNT_HERO = 25;
const DRILL_COUNT_SPRINT = 5;
const DRILL_COUNT_RANDOM = 10;
const DRILL_COUNT_TODAYS_MIX = 20;

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
        patterns: [], // R&W has no pattern level
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

  // ── Drill launchers ──────────────────────────────────────────────────────
  const launchFromPool = (pool, count, label, source) => {
    const drillable = pool.filter(isDrillable);
    if (drillable.length === 0) return;
    const shuffled = shuffle(drillable).slice(0, count);
    onStartPractice(shuffled.map(q => q.id), { label, source, section });
  };

  const launchSprint = () =>
    launchFromPool(allItems, DRILL_COUNT_SPRINT, `${sectionLabel} sprint`, 'practice-bank-sprint');

  const launchRandom = () =>
    launchFromPool(allItems, DRILL_COUNT_RANDOM, `Random ${sectionLabel}`, 'practice-bank-random');

  const launchFullSection = () =>
    launchFromPool(allItems, DRILL_COUNT_HERO, `${sectionLabel} (full section)`, 'practice-bank-full');

  const launchTodaysMix = () =>
    launchFromPool(allItems, DRILL_COUNT_TODAYS_MIX, `Today's ${sectionLabel} Mix`, 'practice-bank-mix');

  const launchSurprise = () => {
    const sample = shuffle(allItems.filter(isDrillable)).slice(0, DRILL_COUNT_RANDOM);
    onStartPractice(sample.map(q => q.id), {
      label: '✨ Surprise drill',
      source: 'practice-bank-surprise',
      section,
    });
  };

  const launchDomainMixed = (domainSlug, label) => {
    const fetch = section === 'math' ? getMathQuestionsByDomain : getRWQuestionsByDomain;
    launchFromPool(fetch(domainSlug), DRILL_COUNT_PER_DOMAIN, `${label} (mixed)`, 'practice-bank-domain');
  };

  const launchSkillDrill = (skill, parentDomainSlug) => {
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
          onSkillDrill={(skill) => launchSkillDrill(skill, cat.domain)}
          onPatternDrill={launchPatternDrill}
          onDomainMixed={() => launchDomainMixed(cat.domain, cat.label)}
        />
      );
    }
  }

  // ── Default: the discovery surface ───────────────────────────────────────
  return (
    <div style={pageStyle}>
      <Header />

      <SectionToggle section={section} onChange={handlePickSection} />

      <TodaysMixHero
        sectionLabel={sectionLabel}
        totalAvailable={totalAvailable}
        onLaunch={launchTodaysMix}
      />

      <QuickDrillStrip
        sectionLabel={sectionLabel}
        onSprint={launchSprint}
        onRandom={launchRandom}
        onFullSection={launchFullSection}
        onSurprise={launchSurprise}
      />

      <DomainGrid
        categories={categories}
        section={section}
        onPickDomain={setFocusedDomain}
        onQuickStart={launchDomainMixed}
      />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page styles
// ────────────────────────────────────────────────────────────────────────────
const pageStyle = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: `${spacing.xl} ${spacing.xl} ${spacing['3xl']}`,
  fontFamily: typography.fontFamily,
  color: INK.primary,
};

// ────────────────────────────────────────────────────────────────────────────
// Header
// ────────────────────────────────────────────────────────────────────────────
const Header = () => (
  <div style={{ marginBottom: spacing.xl }}>
    <h1 style={{
      fontFamily: typography.fontFamily,
      fontSize: '36px',
      lineHeight: 1.1,
      fontWeight: 700,
      color: INK.primary,
      margin: 0,
      letterSpacing: '-0.025em',
    }}>
      Practice Bank
    </h1>
    <p style={{
      fontSize: '15px',
      color: INK.secondary,
      margin: `10px 0 0`,
      maxWidth: '640px',
      lineHeight: 1.5,
    }}>
      Pick something to dig into. Every question is hand-authored to mirror
      the digital SAT — same flavor, same difficulty, same diagrams.
    </p>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// SectionToggle
// ────────────────────────────────────────────────────────────────────────────
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
    boxShadow: shadows.sm,
    marginBottom: spacing.xl,
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
            fontWeight: active ? 700 : 500,
            color: active ? '#FFFFFF' : INK.tertiary,
            backgroundColor: active ? '#1D1D1F' : 'transparent',
            border: 'none',
            borderRadius: radius.full,
            padding: '10px 22px',
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
// TodaysMixHero — big colorful editorial card
// ────────────────────────────────────────────────────────────────────────────
const TodaysMixHero = ({ sectionLabel, totalAvailable, onLaunch }) => (
  <section style={{
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '24px',
    padding: '36px 40px',
    background: 'linear-gradient(135deg, #1D1D1F 0%, #2C2C2E 100%)',
    color: '#FFFFFF',
    marginBottom: spacing.xl,
    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.3)',
  }}>
    {/* Decorative orb */}
    <div aria-hidden style={{
      position: 'absolute',
      top: '-80px',
      right: '-80px',
      width: '320px',
      height: '320px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(234, 88, 12, 0.45) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div aria-hidden style={{
      position: 'absolute',
      bottom: '-100px',
      left: '-60px',
      width: '280px',
      height: '280px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(198, 244, 50, 0.20) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.xl,
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: '1 1 360px', minWidth: 0 }}>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#C6F432',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '12px',
        }}>
          ★ Today's Mix
        </div>
        <h2 style={{
          fontFamily: typography.fontFamily,
          fontSize: '32px',
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          20 fresh {sectionLabel} questions,<br/>built for you.
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.75)',
          margin: '14px 0 0',
          maxWidth: '480px',
          lineHeight: 1.55,
        }}>
          A handpicked mix across all domains. New every visit. About 25 minutes.
        </p>
      </div>

      <button
        onClick={onLaunch}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: '16px',
          fontWeight: 700,
          color: '#1D1D1F',
          backgroundColor: '#C6F432',
          border: 'none',
          borderRadius: '14px',
          padding: '16px 28px',
          cursor: 'pointer',
          transition: `transform ${transitions.spring}, box-shadow ${transitions.fast}`,
          boxShadow: '0 8px 24px -4px rgba(198, 244, 50, 0.5)',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          minHeight: '52px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        Start Today's Mix
        <span style={{ fontSize: '20px' }}>→</span>
      </button>
    </div>
  </section>
);

// ────────────────────────────────────────────────────────────────────────────
// QuickDrillStrip — 4 tap-and-go tiles
// ────────────────────────────────────────────────────────────────────────────
const QuickDrillStrip = ({ sectionLabel, onSprint, onRandom, onFullSection, onSurprise }) => {
  const tiles = [
    {
      icon: '⚡',
      label: '5-Min Sprint',
      sub: '5 quick questions',
      bg: 'linear-gradient(135deg, #FFF4D6 0%, #FFE38A 100%)',
      ink: '#7C2D12',
      onClick: onSprint,
    },
    {
      icon: '🎲',
      label: 'Random 10',
      sub: 'Pulled from the full bank',
      bg: 'linear-gradient(135deg, #DDF0FF 0%, #A8D4F5 100%)',
      ink: '#0C4A6E',
      onClick: onRandom,
    },
    {
      icon: '🔥',
      label: `Full ${sectionLabel}`,
      sub: '25 mixed questions',
      bg: 'linear-gradient(135deg, #FFD9CC 0%, #FFAE8F 100%)',
      ink: '#7C2D12',
      onClick: onFullSection,
    },
    {
      icon: '✨',
      label: 'Surprise Me',
      sub: '10 random, all flavors',
      bg: 'linear-gradient(135deg, #E9DEFF 0%, #C9B0F5 100%)',
      ink: '#4C1D95',
      onClick: onSurprise,
    },
  ];

  return (
    <section style={{ marginBottom: spacing.xl }}>
      <SectionTitle eyebrow="Quick Drills" title="Tap and go" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: spacing.md,
      }}>
        {tiles.map(t => <QuickTile key={t.label} {...t} />)}
      </div>
    </section>
  );
};

const QuickTile = ({ icon, label, sub, bg, ink, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: typography.fontFamily,
        textAlign: 'left',
        background: bg,
        border: 'none',
        borderRadius: '18px',
        padding: '20px 22px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        minHeight: '128px',
        transition: `transform ${transitions.spring}, box-shadow ${transitions.fast}`,
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 12px 28px -8px rgba(0, 0, 0, 0.18)'
          : '0 2px 8px -2px rgba(0, 0, 0, 0.06)',
        color: ink,
      }}
    >
      <div style={{
        fontSize: '28px',
        lineHeight: 1,
        marginBottom: '4px',
        transition: `transform ${transitions.spring}`,
        transform: hover ? 'scale(1.15) rotate(-4deg)' : 'scale(1) rotate(0)',
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: '17px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '12px',
        color: ink,
        opacity: 0.7,
        marginTop: 'auto',
      }}>
        {sub}
      </div>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// DomainGrid — big colorful cards, one per domain
// ────────────────────────────────────────────────────────────────────────────
const DomainGrid = ({ categories, section, onPickDomain, onQuickStart }) => {
  const sectionWord = section === 'math' ? 'Math' : 'R&W';

  return (
    <section>
      <SectionTitle
        eyebrow="Explore by Domain"
        title="Pick a topic to dig deep"
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: spacing.lg,
      }}>
        {categories.map(cat => (
          <DomainTile
            key={cat.domain}
            cat={cat}
            sectionWord={sectionWord}
            onExplore={() => onPickDomain(cat.domain)}
            onQuickStart={() => onQuickStart(cat.domain, cat.label)}
          />
        ))}
      </div>
    </section>
  );
};

const DomainTile = ({ cat, sectionWord, onExplore, onQuickStart }) => {
  const [hover, setHover] = useState(false);
  const id = DOMAIN_IDENTITY[cat.domain] || DOMAIN_IDENTITY['algebra'];
  const weight = DOMAIN_WEIGHTS[cat.domain];
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
        boxShadow: hover
          ? '0 16px 40px -12px rgba(0, 0, 0, 0.15)'
          : '0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: `transform ${transitions.spring}, box-shadow ${transitions.normal}`,
      }}
    >
      {/* Banner */}
      <div style={{
        background: id.gradient,
        padding: '24px 26px 22px',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: spacing.md,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: '40px',
              lineHeight: 1,
              marginBottom: '10px',
              transition: `transform ${transitions.spring}`,
              transform: hover ? 'scale(1.1) rotate(-6deg)' : 'scale(1) rotate(0)',
            }} aria-hidden>
              {id.icon}
            </div>
            <h3 style={{
              fontFamily: typography.fontFamily,
              fontSize: '22px',
              fontWeight: 700,
              color: id.accentDark,
              margin: 0,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
            }}>
              {cat.label}
            </h3>
            <p style={{
              fontSize: '13px',
              color: id.accentDark,
              opacity: 0.78,
              margin: '6px 0 0',
              lineHeight: 1.4,
            }}>
              {id.blurb}
            </p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            color: id.accentDark,
            border: `1px solid rgba(255, 255, 255, 0.5)`,
            padding: '6px 12px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(8px)',
          }}>
            {weight}% of {sectionWord}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{
        padding: '20px 26px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
        }}>
          <span style={{
            fontSize: '28px',
            fontWeight: 700,
            color: INK.primary,
            letterSpacing: '-0.02em',
          }}>
            {cat.total.toLocaleString()}
          </span>
          <span style={{
            fontSize: '13px',
            color: INK.tertiary,
          }}>
            questions across {cat.cbSkills.length} topic{cat.cbSkills.length === 1 ? '' : 's'}
          </span>
        </div>

        {topThree.length > 0 && (
          <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            {topThree.map(s => (
              <li key={s.slug} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '13px',
                color: INK.secondary,
                paddingBottom: '4px',
                borderBottom: `1px dashed ${SURFACE.hairline}`,
              }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {s.short || s.label}
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: id.accent,
                  backgroundColor: id.accentSoft,
                  padding: '2px 8px',
                  borderRadius: '999px',
                  marginLeft: '8px',
                  flexShrink: 0,
                }}>
                  {s.total || s.count}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Actions */}
      <div style={{
        padding: '0 22px 22px',
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
            color: INK.secondary,
            backgroundColor: SURFACE.paper,
            border: `1px solid ${SURFACE.border}`,
            borderRadius: '12px',
            padding: '12px 18px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '44px',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = SURFACE.white;
            e.currentTarget.style.borderColor = id.accent;
            e.currentTarget.style.color = id.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = SURFACE.paper;
            e.currentTarget.style.borderColor = SURFACE.border;
            e.currentTarget.style.color = INK.secondary;
          }}
        >
          Quick mix
        </button>
        <button
          onClick={onExplore}
          style={{
            flex: 1,
            fontFamily: typography.fontFamily,
            fontSize: '14px',
            fontWeight: 700,
            color: '#FFFFFF',
            backgroundColor: id.accent,
            border: 'none',
            borderRadius: '12px',
            padding: '12px 18px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            boxShadow: hover ? `0 6px 16px -4px ${id.accent}66` : 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = id.accentDark;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = id.accent;
          }}
        >
          Explore {cat.label.split(' ')[0]} <span style={{ fontSize: '16px' }}>→</span>
        </button>
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// DomainFocusView — the "you picked a domain" detail surface
// ────────────────────────────────────────────────────────────────────────────
const DomainFocusView = ({ cat, section, onBack, onSkillDrill, onPatternDrill, onDomainMixed }) => {
  const id = DOMAIN_IDENTITY[cat.domain] || DOMAIN_IDENTITY['algebra'];
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const sectionWord = section === 'math' ? 'Math' : 'R&W';
  const skills = cat.cbSkills;
  const totalPatterns = skills.reduce((s, k) => s + (k.patterns?.length || 0), 0);
  const [activeSkillSlug, setActiveSkillSlug] = useState(null);

  return (
    <div style={pageStyle}>
      {/* Back link */}
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
          marginBottom: spacing.md,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          transition: `color ${transitions.fast}`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = INK.primary; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = INK.tertiary; }}
      >
        <span style={{ fontSize: '16px' }}>←</span> All domains
      </button>

      {/* Hero strip for this domain */}
      <section style={{
        background: id.gradient,
        borderRadius: '24px',
        padding: '32px 36px',
        marginBottom: spacing.xl,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: spacing.xl,
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: '1 1 360px', minWidth: 0 }}>
            <div style={{
              fontSize: '52px',
              lineHeight: 1,
              marginBottom: '10px',
            }} aria-hidden>{id.icon}</div>
            <h2 style={{
              fontSize: '34px',
              fontWeight: 700,
              color: id.accentDark,
              margin: 0,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
            }}>
              {cat.label}
            </h2>
            <p style={{
              fontSize: '14px',
              color: id.accentDark,
              opacity: 0.78,
              margin: '8px 0 0',
              lineHeight: 1.5,
            }}>
              {id.blurb}
            </p>
            <div style={{
              marginTop: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              <Pill text={`${weight}% of ${sectionWord}`} color={id.accentDark} bg="rgba(255,255,255,0.5)" />
              <Pill text={`${cat.total} questions`} color={id.accentDark} bg="rgba(255,255,255,0.5)" />
              <Pill text={`${skills.length} topics`} color={id.accentDark} bg="rgba(255,255,255,0.5)" />
              {totalPatterns > 0 && (
                <Pill text={`${totalPatterns} types`} color={id.accentDark} bg="rgba(255,255,255,0.5)" />
              )}
            </div>
          </div>

          <button
            onClick={onDomainMixed}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: '15px',
              fontWeight: 700,
              color: '#FFFFFF',
              backgroundColor: id.accentDark,
              border: 'none',
              borderRadius: '14px',
              padding: '14px 24px',
              cursor: 'pointer',
              transition: `transform ${transitions.spring}`,
              boxShadow: `0 8px 24px -6px ${id.accent}88`,
              whiteSpace: 'nowrap',
              minHeight: '52px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
          >
            Drill 20 mixed <span style={{ fontSize: '18px' }}>→</span>
          </button>
        </div>
      </section>

      {/* Topic tiles */}
      <SectionTitle
        eyebrow="Topics"
        title="Pick what to drill"
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: spacing.md,
        marginBottom: spacing.xl,
      }}>
        {skills.map(skill => (
          <TopicTile
            key={skill.slug}
            skill={skill}
            id={id}
            isActive={activeSkillSlug === skill.slug}
            onClick={() => onSkillDrill(skill)}
            onExpandTypes={
              skill.patterns?.length > 0
                ? () => setActiveSkillSlug(activeSkillSlug === skill.slug ? null : skill.slug)
                : null
            }
          />
        ))}
      </div>

      {/* Active topic detail panel — patterns appear when a topic is "deep-dived" */}
      {activeSkillSlug && (() => {
        const skill = skills.find(s => s.slug === activeSkillSlug);
        if (!skill || !skill.patterns?.length) return null;
        return (
          <PatternDetailPanel
            skill={skill}
            id={id}
            onPatternDrill={onPatternDrill}
            onClose={() => setActiveSkillSlug(null)}
          />
        );
      })()}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// TopicTile — a single subdomain card inside DomainFocusView
// ────────────────────────────────────────────────────────────────────────────
const TopicTile = ({ skill, id, isActive, onClick, onExpandTypes }) => {
  const [hover, setHover] = useState(false);
  const total = skill.total ?? skill.count ?? 0;
  const typesCount = skill.patterns?.length || 0;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: SURFACE.white,
        border: `2px solid ${isActive ? id.accent : SURFACE.border}`,
        borderRadius: '18px',
        padding: '18px 18px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: `all ${transitions.fast}, transform ${transitions.spring}`,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover
          ? '0 10px 24px -6px rgba(0, 0, 0, 0.12)'
          : '0 1px 4px -1px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '8px',
      }}>
        <h4 style={{
          fontFamily: typography.fontFamily,
          fontSize: '15px',
          fontWeight: 700,
          color: INK.primary,
          margin: 0,
          lineHeight: 1.25,
          letterSpacing: '-0.005em',
        }}>
          {skill.short || skill.label}
        </h4>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: id.accent,
          backgroundColor: id.accentSoft,
          padding: '3px 9px',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {total}
        </span>
      </div>

      <div style={{
        fontSize: '12px',
        color: INK.tertiary,
        marginTop: '-6px',
      }}>
        {total} question{total === 1 ? '' : 's'}
        {typesCount > 0 && ` · ${typesCount} type${typesCount === 1 ? '' : 's'}`}
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        marginTop: 'auto',
      }}>
        <button
          onClick={onClick}
          style={{
            flex: 1,
            fontFamily: typography.fontFamily,
            fontSize: '13px',
            fontWeight: 700,
            color: '#FFFFFF',
            backgroundColor: id.accent,
            border: 'none',
            borderRadius: '10px',
            padding: '10px 14px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '40px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = id.accentDark; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = id.accent; }}
        >
          Drill 15 →
        </button>
        {onExpandTypes && (
          <button
            onClick={onExpandTypes}
            aria-expanded={isActive}
            title={isActive ? 'Hide question types' : 'See specific types'}
            style={{
              fontFamily: typography.fontFamily,
              fontSize: '12px',
              fontWeight: 600,
              color: isActive ? '#FFFFFF' : id.accent,
              backgroundColor: isActive ? id.accent : id.accentSoft,
              border: 'none',
              borderRadius: '10px',
              padding: '10px 12px',
              cursor: 'pointer',
              transition: `all ${transitions.fast}`,
              minHeight: '40px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {typesCount}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: `transform ${transitions.fast}`,
            }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// PatternDetailPanel — pretty panel for specific question types
// ────────────────────────────────────────────────────────────────────────────
const PatternDetailPanel = ({ skill, id, onPatternDrill, onClose }) => (
  <section style={{
    backgroundColor: SURFACE.white,
    border: `1px solid ${SURFACE.border}`,
    borderRadius: '20px',
    padding: '24px 28px',
    marginBottom: spacing.xl,
    boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.04)',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: spacing.md,
      marginBottom: spacing.md,
      flexWrap: 'wrap',
    }}>
      <div>
        <div style={{
          fontSize: '10px',
          fontWeight: 700,
          color: id.accent,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '4px',
        }}>
          {skill.short || skill.label}
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          margin: 0,
          color: INK.primary,
          letterSpacing: '-0.015em',
        }}>
          Pick a specific question type
        </h3>
      </div>
      <button
        onClick={onClose}
        style={{
          fontFamily: typography.fontFamily,
          fontSize: '12px',
          fontWeight: 600,
          color: INK.tertiary,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
        }}
      >
        Hide
      </button>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '10px',
    }}>
      {skill.patterns.map(p => (
        <PatternCard
          key={p.slug}
          pattern={p}
          id={id}
          onClick={() => onPatternDrill(p.slug, p.label)}
        />
      ))}
    </div>
  </section>
);

const PatternCard = ({ pattern, id, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: typography.fontFamily,
        textAlign: 'left',
        backgroundColor: hover ? id.accentSoft : SURFACE.paper,
        border: `1px solid ${hover ? id.accent : SURFACE.border}`,
        borderRadius: '12px',
        padding: '12px 14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        transition: `all ${transitions.fast}`,
        minHeight: '52px',
      }}
    >
      <div style={{
        fontSize: '13px',
        fontWeight: 600,
        color: INK.primary,
        lineHeight: 1.3,
        overflow: 'hidden',
      }}>
        {pattern.label}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: id.accent,
          backgroundColor: hover ? 'rgba(255,255,255,0.7)' : id.accentSoft,
          padding: '2px 8px',
          borderRadius: '999px',
        }}>
          {pattern.count}
        </span>
        <span style={{
          fontSize: '16px',
          color: id.accent,
          transition: `transform ${transitions.spring}`,
          transform: hover ? 'translateX(2px)' : 'translateX(0)',
        }}>→</span>
      </div>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Shared
// ────────────────────────────────────────────────────────────────────────────
const SectionTitle = ({ eyebrow, title }) => (
  <div style={{ marginBottom: spacing.md }}>
    <div style={{
      fontSize: '11px',
      fontWeight: 700,
      color: INK.muted,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      marginBottom: '4px',
    }}>
      {eyebrow}
    </div>
    <h2 style={{
      fontFamily: typography.fontFamily,
      fontSize: '22px',
      fontWeight: 700,
      margin: 0,
      color: INK.primary,
      letterSpacing: '-0.015em',
    }}>
      {title}
    </h2>
  </div>
);

const Pill = ({ text, color, bg }) => (
  <span style={{
    fontSize: '11px',
    fontWeight: 700,
    color,
    backgroundColor: bg,
    border: `1px solid rgba(255,255,255,0.4)`,
    padding: '4px 10px',
    borderRadius: '999px',
    whiteSpace: 'nowrap',
    backdropFilter: 'blur(8px)',
  }}>
    {text}
  </span>
);

export default PracticeBank;
