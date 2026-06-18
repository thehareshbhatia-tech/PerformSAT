import React, { useMemo, useState, useRef, useEffect } from 'react';
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
  getQuestionsByPattern as getRWQuestionsByPattern,
} from '../data/questions/rwBank';
import { deriveRWQuestionType, RW_PATTERN_LABELS } from '../data/questions/rwBank/deriveRWPattern';
import { RW_READING_TYPE_LABELS } from '../data/questions/rwBank/rwReadingType';
import { extractSatPattern } from '../data/questions/extractSatPattern';
import {
  CB_MATH_SKILLS,
  CB_MATH_DOMAIN_LABELS,
  CB_RW_DOMAIN_LABELS,
  CB_RW_SKILLS,
  PATTERN_TO_CB_SKILL,
} from '../data/questions/cbSkillTaxonomy';
import { formatPatternLabel } from '../services/selectors/missedPatternLabel';
import { progressForIds } from '../services/selectors/bankProgress';
import { typography, spacing, radius, transitions } from '../design/tokens';

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

const ACCENT_ROTATION = ['orange', 'purple', 'navy', 'green'];

const ACCENTS = {
  orange: {
    tile:       'var(--color-brand-primary)',
    tileInk:    '#FFFFFF',
    soft:       'rgba(234, 88, 12, 0.08)',
    softBorder: 'rgba(234, 88, 12, 0.18)',
    text:       '#9a3412',
    cta:        'var(--color-brand-primary)',
    ctaHover:   'var(--color-brand-primary-hover)',
    ctaInk:     '#FFFFFF',
  },
  purple: {
    tile:       'var(--color-brand-purple-deep)',
    tileInk:    'var(--color-brand-green)',
    soft:       'rgba(85, 55, 117, 0.08)',
    softBorder: 'rgba(85, 55, 117, 0.18)',
    text:       'var(--color-brand-purple-text)',
    cta:        'var(--color-brand-purple-deep)',
    ctaHover:   '#3D2052',
    ctaInk:     '#FFFFFF',
  },
  navy: {
    tile:       'var(--color-slate-900)',
    tileInk:    'var(--color-brand-green)',
    soft:       'rgba(29, 29, 31, 0.05)',
    softBorder: 'rgba(29, 29, 31, 0.15)',
    text:       'var(--color-slate-900)',
    cta:        'var(--color-slate-900)',
    ctaHover:   '#000000',
    ctaInk:     '#FFFFFF',
  },
  green: {
    tile:       'var(--color-brand-green)',
    tileInk:    'var(--color-brand-green-deep)',
    soft:       'rgba(198, 244, 50, 0.18)',
    softBorder: 'rgba(46, 78, 44, 0.20)',
    text:       'var(--color-brand-green-text)',
    cta:        'var(--color-brand-green-deep)',
    ctaHover:   '#1F3D1F',
    ctaInk:     'var(--color-brand-green)',
  },
};

const INK = {
  primary:   'var(--color-slate-900)',
  secondary: 'var(--color-slate-700)',
  tertiary:  'var(--color-slate-600)',
  muted:     'var(--color-slate-500)',
};

const SURFACE = {
  white:      '#FFFFFF',
  paper:      'var(--color-slate-50)',
  cream:      '#FBF7F0',
  lavender:   'var(--color-brand-purple-soft)',
  border:     'var(--color-slate-200)',
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

// Push a question id onto a Map<key, string[]> bucket (for per-skill /
// per-type progress lookups against the bankPractice store).
function pushId(map, key, id) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(id);
}

function buildMathCategories() {
  const patternCounts = new Map();
  const cbSkillItemCount = new Map();
  const domainTotals = new Map();
  const patternQids = new Map();   // pattern slug → [question id]
  const cbSkillQids = new Map();   // cb skill slug → [question id]

  for (const q of mathQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain || 'algebra';
    domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);

    const pattern = extractSatPattern(q.explanation);
    if (!pattern) continue;
    patternCounts.set(pattern, (patternCounts.get(pattern) || 0) + 1);
    pushId(patternQids, pattern, q.id);

    const cbSkill = PATTERN_TO_CB_SKILL[pattern];
    if (cbSkill) {
      cbSkillItemCount.set(cbSkill, (cbSkillItemCount.get(cbSkill) || 0) + 1);
      pushId(cbSkillQids, cbSkill, q.id);
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
              qids: patternQids.get(patternSlug) || [],
            }))
            .filter(p => p.count >= MIN_PATTERN_POOL)
            .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
          return { ...skill, total, patterns, qids: cbSkillQids.get(skill.slug) || [] };
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

// Display labels for R&W "question types" in the practice bank. Composed from:
//   - RW_PATTERN_LABELS — the Tier-1 grammar/punctuation routing patterns (≥8).
//   - RW_READING_TYPE_LABELS — the reading-comprehension sub-types (context-clue
//     type, logical relation, Text-2 stance, rhetorical goal) from the
//     authoritative rwReadingType.js map. These surface at the bank's ≥4 browse
//     threshold even though many sit below the Tier-1 routing threshold.
//   - the three sub-threshold grammar types FSS leaves unlabeled.
// A pattern absent from this map (e.g. any *-other reading bucket) is
// intentionally NOT shown as a type.
const RW_TYPE_LABELS = {
  ...RW_PATTERN_LABELS,
  ...RW_READING_TYPE_LABELS,
  'fss-pronoun': 'Pronouns & antecedents',
  'fss-possessive': 'Possessives & apostrophes',
  'fss-comparison': 'Comparisons',
};

function buildRWCategories() {
  const skillCounts = new Map();
  const domainTotals = new Map();
  const patternCounts = new Map();          // patternSlug → item count
  const skillToPatterns = new Map();        // skillSlug → Set<patternSlug>
  const skillQids = new Map();              // skillSlug → [question id]
  const patternQids = new Map();            // patternSlug → [question id]

  for (const q of rwQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain;
    if (domain) domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);
    (q.skills || []).forEach(sid => {
      skillCounts.set(sid, (skillCounts.get(sid) || 0) + 1);
      pushId(skillQids, sid, q.id);
    });

    // Derive the R&W question type (browse type — grammar/punctuation/structure
    // patterns AND reading-comprehension sub-types) and bucket it under the
    // item's primary skill, so the type lands under the right topic (grammar
    // types under Form/Structure/Sense, punctuation under Boundaries, reading
    // types under Words in Context / Inferences / etc.).
    const pattern = deriveRWQuestionType(q);
    if (pattern) {
      patternCounts.set(pattern, (patternCounts.get(pattern) || 0) + 1);
      pushId(patternQids, pattern, q.id);
      const sid = q.skill || (Array.isArray(q.skills) ? q.skills[0] : null);
      if (sid) {
        if (!skillToPatterns.has(sid)) skillToPatterns.set(sid, new Set());
        skillToPatterns.get(sid).add(pattern);
      }
    }
  }

  return RW_DOMAINS.map(domain => {
    const skills = CB_RW_SKILLS
      .filter(s => s.domain === domain)
      .map(skill => {
        const patternSlugs = skillToPatterns.get(skill.slug) || new Set();
        const patterns = [...patternSlugs]
          .filter(slug => RW_TYPE_LABELS[slug])   // only meaningful, named types
          .map(slug => ({
            slug,
            label: RW_TYPE_LABELS[slug],
            count: patternCounts.get(slug) || 0,
            qids: patternQids.get(slug) || [],
          }))
          .filter(p => p.count >= MIN_PATTERN_POOL)
          .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
        return {
          ...skill,
          count: skillCounts.get(skill.slug) || 0,
          patterns,
          qids: skillQids.get(skill.slug) || [],
        };
      })
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

const matchesQuery = (text, q) =>
  !q || (text || '').toLowerCase().includes(q);

// ────────────────────────────────────────────────────────────────────────────
// PracticeBank — flat catalog: search + jump chips + everything visible
// ────────────────────────────────────────────────────────────────────────────
const PracticeBank = ({ onStartPractice, bankPractice = {}, activeDrill = null, onResumeDrill, onDiscardDrill }) => {
  const [section, setSection] = useState('math');
  const [search, setSearch] = useState('');
  const [openTopics, setOpenTopics] = useState(() => new Set());
  const domainRefs = useRef({});
  const topLevelRef = useRef(null);

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const allItems = section === 'math' ? mathQuestionBank : rwQuestionBank;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';

  const totalAvailable = useMemo(
    () => categories.reduce((acc, c) => acc + c.total, 0),
    [categories],
  );

  // Per-section practice progress (how many of THIS section's questions the
  // student has worked through, and accuracy over those) — drives the hero stat.
  // Scoped to DRILLABLE items so the numerator shares the same universe as the
  // hero denominator (totalAvailable, which counts drillable items only).
  const sectionProgress = useMemo(
    () => progressForIds(allItems.filter(isDrillable).map(q => q.id), bankPractice),
    [allItems, bankPractice],
  );

  const totalTopics = useMemo(
    () => categories.reduce((acc, c) => acc + c.cbSkills.length, 0),
    [categories],
  );

  const totalQuestionTypes = useMemo(
    () => categories.reduce(
      (acc, c) => acc + c.cbSkills.reduce((sum, s) => sum + (s.patterns?.length || 0), 0),
      0,
    ),
    [categories],
  );

  // Search filter: narrows visible topics by name OR by matching question-type label.
  // Also tracks which topics matched ON A PATTERN so we can auto-expand them.
  const { visibleCategories, autoOpenSlugs } = useMemo(() => {
    const q = search.trim().toLowerCase();
    const autoOpen = new Set();
    const visible = categories
      .map(cat => {
        if (!q) return cat;
        const filteredSkills = cat.cbSkills
          .map(skill => {
            const skillMatches =
              matchesQuery(skill.label, q) || matchesQuery(skill.short, q);
            const matchingPatterns = (skill.patterns || []).filter(p =>
              matchesQuery(p.label, q),
            );
            if (matchingPatterns.length > 0) {
              autoOpen.add(skill.slug);
              return { ...skill, patterns: matchingPatterns };
            }
            if (skillMatches) return skill;
            return null;
          })
          .filter(Boolean);
        return { ...cat, cbSkills: filteredSkills };
      })
      .filter(cat => cat.cbSkills.length > 0);
    return { visibleCategories: visible, autoOpenSlugs: autoOpen };
  }, [categories, search]);

  const isFiltering = search.trim().length > 0;

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
    const pool = section === 'math'
      ? getQuestionsBySatPatterns([slug])
      : getRWQuestionsByPattern([slug]);
    launchFromPool(pool, DRILL_COUNT_PER_TYPE, label, 'practice-bank-pattern');
  };

  const handlePickSection = (next) => {
    setSection(next);
    setSearch('');
    setOpenTopics(new Set());
  };

  const handleClearFilters = () => {
    setSearch('');
  };

  const handleToggleTopic = (slug) => {
    setOpenTopics(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      return next;
    });
  };

  const handleJumpToDomain = (domainSlug) => {
    const STICKY_OFFSET = 128; // topbar (64px) + filter bar (~52px) + breathing room
    if (domainSlug === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = domainRefs.current[domainSlug];
    if (!el) return;
    // Use offsetTop chain to compute absolute document position — robust against
    // smooth-scroll interruptions and avoids the scroll-margin gotcha.
    let absoluteTop = 0;
    let node = el;
    while (node) {
      absoluteTop += node.offsetTop || 0;
      node = node.offsetParent;
    }
    window.scrollTo({ top: Math.max(0, absoluteTop - STICKY_OFFSET), behavior: 'smooth' });
  };

  return (
    <div style={pageStyle} ref={topLevelRef}>
      <TopBar section={section} onChangeSection={handlePickSection} />

      {activeDrill && typeof onResumeDrill === 'function' && (
        <ResumeBanner activeDrill={activeDrill} onResume={onResumeDrill} onDiscard={onDiscardDrill} />
      )}

      <EditorialHero
        sectionLabel={sectionLabel}
        totalAvailable={totalAvailable}
        totalTopics={totalTopics}
        totalDomains={categories.length}
        totalQuestionTypes={totalQuestionTypes}
        progress={sectionProgress}
      />

      <QuickStartRow
        sectionLabel={sectionLabel}
        onQuickDrill={launchQuickDrill}
        onTodaysMix={launchTodaysMix}
        onFullSection={launchFullSection}
      />

      <FilterBar
        categories={categories}
        search={search}
        onSearchChange={setSearch}
        onJumpToDomain={handleJumpToDomain}
        section={section}
      />

      {visibleCategories.length === 0 ? (
        <EmptyState query={search} onClear={handleClearFilters} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing['2xl'] }}>
          {visibleCategories.map((cat) => {
            const originalIndex = categories.findIndex(c => c.domain === cat.domain);
            const accentName = ACCENT_ROTATION[originalIndex % ACCENT_ROTATION.length];
            return (
              <DomainSection
                key={cat.domain}
                cat={cat}
                domainNumber={originalIndex + 1}
                accent={ACCENTS[accentName]}
                section={section}
                searchQuery={search.trim().toLowerCase()}
                onSkillDrill={launchSkillDrill}
                onPatternDrill={launchPatternDrill}
                onDomainMixed={() => launchDomainMixed(cat.domain, cat.label)}
                openTopics={openTopics}
                autoOpenSlugs={autoOpenSlugs}
                onToggleTopic={handleToggleTopic}
                bankPractice={bankPractice}
                sectionRef={(el) => { domainRefs.current[cat.domain] = el; }}
              />
            );
          })}
          {isFiltering && (
            <button
              onClick={handleClearFilters}
              style={{
                alignSelf: 'center',
                fontFamily: typography.fontFamily,
                fontSize: '13px',
                fontWeight: 600,
                color: INK.tertiary,
                background: 'transparent',
                border: `1px solid ${SURFACE.border}`,
                borderRadius: radius.full,
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: spacing.md,
              }}
            >
              Clear search
            </button>
          )}
          {/* Scroll buffer so jumping to the last domain still lands its header at the top. */}
          <div aria-hidden style={{ minHeight: '60vh' }} />
        </div>
      )}
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page chrome
// ────────────────────────────────────────────────────────────────────────────
const pageStyle = {
  maxWidth: '1120px',
  margin: '0 auto',
  padding: `${spacing.xl} clamp(16px, 4vw, ${spacing.xl}) ${spacing['3xl']}`,
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
            backgroundColor: active ? 'var(--color-slate-900)' : 'transparent',
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
// EditorialHero — big serif headline + stat subtitle
// ────────────────────────────────────────────────────────────────────────────
const EditorialHero = ({ sectionLabel, totalAvailable, totalTopics, totalDomains, totalQuestionTypes, progress }) => (
  <section style={{ marginBottom: spacing['2xl'] }}>
    <h1 style={{
      fontFamily: SERIF,
      fontSize: 'clamp(34px, 6vw, 52px)',
      lineHeight: 1.05,
      fontWeight: 700,
      color: INK.primary,
      margin: 0,
      letterSpacing: '-0.02em',
      overflowWrap: 'break-word',
    }}>
      Your practice bank.
    </h1>
    <p style={{
      fontFamily: typography.fontFamily,
      fontSize: '17px',
      color: INK.secondary,
      margin: `16px 0 0`,
      maxWidth: '680px',
      lineHeight: 1.55,
    }}>
      {totalAvailable.toLocaleString()} hand-authored {sectionLabel} questions across {totalDomains} domain{totalDomains === 1 ? '' : 's'} and {totalTopics} topic{totalTopics === 1 ? '' : 's'}. Search for a topic, jump to a domain, or expand any topic to drill a specific question type.
    </p>
    {progress && progress.practiced > 0 && (
      <p style={{
        fontFamily: typography.fontFamily,
        fontSize: '14px',
        fontWeight: 600,
        color: INK.tertiary,
        margin: '14px 0 0',
      }}>
        <span style={{ color: 'var(--color-brand-green-text)' }}>{progress.practiced.toLocaleString()}</span>
        {' of '}{totalAvailable.toLocaleString()} {sectionLabel} questions practiced
        {progress.accuracy != null && (
          <>{' · '}<span style={{ color: 'var(--color-brand-green-text)' }}>{progress.accuracy}% correct</span></>
        )}
      </p>
    )}
  </section>
);

// ────────────────────────────────────────────────────────────────────────────
// ResumeBanner — "Continue your last drill" (a saved, in-flight bank session)
// ────────────────────────────────────────────────────────────────────────────
const ResumeBanner = ({ activeDrill, onResume, onDiscard }) => {
  const label = activeDrill?.assignmentMeta?.label || 'Practice Bank drill';
  const total = Array.isArray(activeDrill?.questionIds) ? activeDrill.questionIds.length : 0;
  const answered = activeDrill?.answers ? Object.keys(activeDrill.answers).length : 0;
  const position = Math.min((activeDrill?.currentQuestionIndex || 0) + 1, total || 1);
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.md,
        flexWrap: 'wrap',
        backgroundColor: 'var(--color-brand-primary-light)',
        border: `1px solid var(--color-brand-primary)`,
        borderRadius: '14px',
        padding: '16px 20px',
        marginBottom: spacing.xl,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.12em', color: 'var(--color-brand-primary)', marginBottom: '4px',
        }}>
          Continue your last drill
        </div>
        <div style={{ fontFamily: SERIF, fontSize: '18px', fontWeight: 700, color: INK.primary, lineHeight: 1.2 }}>
          {label}
        </div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: INK.tertiary, marginTop: '4px' }}>
          {total > 0 ? `Question ${position} of ${total} · ${answered} answered` : `${answered} answered`}
        </div>
      </div>
      <div style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        {typeof onDiscard === 'function' && (
          <button
            type="button"
            onClick={onDiscard}
            aria-label="Discard saved drill"
            style={{
              fontFamily: typography.fontFamily,
              fontSize: '13px',
              fontWeight: 600,
              color: INK.tertiary,
              backgroundColor: 'transparent',
              border: `1px solid ${SURFACE.border}`,
              borderRadius: '12px',
              padding: '12px 16px',
              minHeight: '44px',
              cursor: 'pointer',
            }}
          >
            Discard
          </button>
        )}
        <button
          type="button"
          onClick={onResume}
          style={{
            fontFamily: typography.fontFamily,
            fontSize: '14px',
            fontWeight: 700,
            color: '#FFFFFF',
            backgroundColor: 'var(--color-brand-primary)',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 20px',
            minHeight: '44px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Continue
          <Arrow tone="#FFFFFF" />
        </button>
      </div>
    </section>
  );
};

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
// FilterBar — sticky search + domain jump chips. Replaces the old "click a
// domain card, navigate to a separate page" pattern. Everything stays on one
// page; chips filter and the search narrows by topic + question-type name.
// ────────────────────────────────────────────────────────────────────────────
const FilterBar = ({ categories, search, onSearchChange, onJumpToDomain, section }) => {
  const inputRef = useRef(null);

  // Keyboard shortcut: "/" focuses the search input
  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const chips = [
    { id: 'all', label: 'Top', count: null },
    ...categories.map(c => ({ id: c.domain, label: c.label, count: c.cbSkills.length })),
  ];

  return (
    <section
      style={{
        position: 'sticky',
        top: '64px',
        zIndex: 5,
        backgroundColor: 'rgba(251, 251, 253, 0.92)',
        backdropFilter: 'saturate(180%) blur(10px)',
        WebkitBackdropFilter: 'saturate(180%) blur(10px)',
        marginBottom: spacing.xl,
        padding: `${spacing.md} 0`,
        borderBottom: `1px solid ${SURFACE.hairline}`,
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.md,
        flexWrap: 'wrap',
      }}>
        <div style={{
          position: 'relative',
          flex: '1 1 280px',
          minWidth: '240px',
          maxWidth: '440px',
        }}>
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={'Search topics & question types…'}
            aria-label="Search practice bank"
            style={{
              width: '100%',
              fontFamily: typography.fontFamily,
              fontSize: '14px',
              color: INK.primary,
              backgroundColor: SURFACE.white,
              border: `1px solid ${SURFACE.border}`,
              borderRadius: radius.full,
              padding: '10px 38px 10px 40px',
              outline: 'none',
              transition: `border-color ${transitions.fast}, box-shadow ${transitions.fast}`,
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-brand-primary)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.12)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = SURFACE.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '22px',
                height: '22px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: INK.muted,
                fontSize: '16px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
              }}
            >
              <ClearIcon />
            </button>
          )}
          <kbd style={{
            position: 'absolute',
            right: search ? '38px' : '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: typography.fontFamily,
            fontSize: '10px',
            fontWeight: 600,
            color: INK.muted,
            backgroundColor: SURFACE.paper,
            border: `1px solid ${SURFACE.border}`,
            borderRadius: '4px',
            padding: '1px 6px',
            pointerEvents: 'none',
            transition: `right ${transitions.fast}`,
          }} aria-hidden>
            /
          </kbd>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexWrap: 'wrap',
          flex: '1 1 auto',
          justifyContent: 'flex-start',
        }}>
          {chips.map(chip => (
            <button
              key={chip.id}
              onClick={() => onJumpToDomain(chip.id)}
              style={{
                fontFamily: typography.fontFamily,
                fontSize: '12px',
                fontWeight: 600,
                color: INK.secondary,
                backgroundColor: SURFACE.white,
                border: `1px solid ${SURFACE.border}`,
                borderRadius: radius.full,
                padding: '7px 14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: `all ${transitions.fast}`,
                whiteSpace: 'nowrap',
                minHeight: '32px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = INK.tertiary;
                e.currentTarget.style.color = INK.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = SURFACE.border;
                e.currentTarget.style.color = INK.secondary;
              }}
            >
              {chip.label}
              {chip.count !== null && (
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: INK.muted,
                }}>
                  {chip.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    style={{
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: INK.muted,
    }}
  >
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ────────────────────────────────────────────────────────────────────────────
// DomainSection — a domain header + every topic in it, all expanded
// ────────────────────────────────────────────────────────────────────────────
const DomainSection = ({ cat, domainNumber, accent, section, searchQuery, onSkillDrill, onPatternDrill, onDomainMixed, openTopics, autoOpenSlugs, onToggleTopic, bankPractice, sectionRef }) => {
  const sectionWord = section === 'math' ? 'Math' : 'R&W';
  const weight = DOMAIN_WEIGHTS[cat.domain];
  const blurb = DOMAIN_BLURBS[cat.domain] || '';
  const totalPatterns = cat.cbSkills.reduce((s, k) => s + (k.patterns?.length || 0), 0);

  return (
    <section
      aria-labelledby={`domain-${cat.domain}`}
      ref={sectionRef}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '18px',
          flexWrap: 'wrap',
          padding: '4px 0 18px',
          borderBottom: `2px solid ${accent.tile}`,
          marginBottom: spacing.lg,
        }}
      >
        <NumberTile number={domainNumber} accent={accent} />
        <div style={{ flex: '1 1 240px', minWidth: '200px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            color: INK.muted,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            marginBottom: '6px',
          }}>
            Domain · {weight}% of {sectionWord}
          </div>
          <h2
            id={`domain-${cat.domain}`}
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(24px, 4vw, 34px)',
              fontWeight: 700,
              color: INK.primary,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {cat.label}
          </h2>
          {blurb && (
            <p style={{
              fontFamily: SERIF,
              fontStyle: 'italic',
              fontSize: '15px',
              color: INK.secondary,
              margin: '8px 0 0',
              lineHeight: 1.5,
            }}>
              {blurb}
            </p>
          )}
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            fontSize: '12px',
            fontWeight: 600,
            color: INK.tertiary,
          }}>
            <span>{cat.total.toLocaleString()} questions</span>
            <Dot />
            <span>{cat.cbSkills.length} topic{cat.cbSkills.length === 1 ? '' : 's'}</span>
            {totalPatterns > 0 && (
              <>
                <Dot />
                <span>{totalPatterns} question type{totalPatterns === 1 ? '' : 's'}</span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={onDomainMixed}
          style={{
            flexShrink: 0,
            fontFamily: typography.fontFamily,
            fontSize: '13px',
            fontWeight: 700,
            color: accent.ctaInk,
            backgroundColor: accent.cta,
            border: 'none',
            borderRadius: '12px',
            padding: '12px 18px',
            cursor: 'pointer',
            transition: `background-color ${transitions.fast}`,
            minHeight: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accent.ctaHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = accent.cta; }}
        >
          Drill {DRILL_COUNT_PER_DOMAIN} mixed
          <Arrow tone={accent.ctaInk} />
        </button>
      </header>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.sm,
      }}>
        {cat.cbSkills.map((skill) => {
          const isOpen = openTopics?.has(skill.slug) || autoOpenSlugs?.has(skill.slug);
          return (
            <TopicCard
              key={skill.slug}
              skill={skill}
              accent={accent}
              searchQuery={searchQuery}
              isOpen={isOpen}
              onToggle={() => onToggleTopic(skill.slug)}
              onSkillDrill={() => onSkillDrill(skill)}
              onPatternDrill={onPatternDrill}
              bankPractice={bankPractice}
            />
          );
        })}
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// TopicCard — collapsed by default; the topic name + counts + primary drill
// are always visible. Click anywhere on the header (or the chevron / question-
// type count) to expand the chip grid. Search auto-opens any topic that
// matched on a pattern label.
// ────────────────────────────────────────────────────────────────────────────
const TopicCard = ({ skill, accent, searchQuery, isOpen, onToggle, onSkillDrill, onPatternDrill, bankPractice }) => {
  const total = skill.total ?? skill.count ?? 0;
  const patterns = skill.patterns || [];
  const label = skill.label || skill.short;
  const hasPatterns = patterns.length > 0;
  const prog = progressForIds(skill.qids || [], bankPractice);

  return (
    <article
      style={{
        backgroundColor: SURFACE.white,
        border: `1px solid ${SURFACE.border}`,
        borderRadius: '14px',
        overflow: 'hidden',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 18px',
        flexWrap: 'wrap',
      }}>
        <button
          type="button"
          onClick={hasPatterns ? onToggle : undefined}
          aria-expanded={hasPatterns ? isOpen : undefined}
          aria-controls={hasPatterns ? `topic-types-${skill.slug}` : undefined}
          disabled={!hasPatterns}
          style={{
            flex: '1 1 260px',
            minWidth: 0,
            background: 'transparent',
            border: 'none',
            textAlign: 'left',
            padding: 0,
            cursor: hasPatterns ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {hasPatterns && (
            <Chevron open={isOpen} />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontFamily: SERIF,
              fontSize: '19px',
              fontWeight: 700,
              color: INK.primary,
              margin: 0,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}>
              <Highlight text={label} query={searchQuery} />
            </h3>
            <div style={{
              fontSize: '12.5px',
              color: INK.tertiary,
              marginTop: '3px',
            }}>
              {total} question{total === 1 ? '' : 's'}
              {hasPatterns && (
                <>
                  {' · '}
                  <span style={{ color: isOpen ? INK.secondary : accent.text, fontWeight: 600 }}>
                    {patterns.length} question type{patterns.length === 1 ? '' : 's'}
                  </span>
                </>
              )}
              {prog.practiced > 0 && (
                <>
                  {' · '}
                  <span style={{ color: 'var(--color-brand-green-text)', fontWeight: 600 }}>
                    {prog.practiced} practiced{prog.accuracy != null ? ` · ${prog.accuracy}%` : ''}
                  </span>
                </>
              )}
            </div>
          </div>
        </button>

        <button
          onClick={onSkillDrill}
          style={{
            flexShrink: 0,
            fontFamily: typography.fontFamily,
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--color-brand-primary)',
            backgroundColor: 'transparent',
            border: `1.5px solid var(--color-brand-primary)`,
            borderRadius: '10px',
            padding: '8px 14px',
            cursor: 'pointer',
            transition: `all ${transitions.fast}`,
            minHeight: '38px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-brand-primary)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-brand-primary)';
          }}
        >
          Drill {DRILL_COUNT_PER_SKILL}
          <Arrow tone="currentColor" />
        </button>
      </div>

      {hasPatterns && isOpen && (
        <div
          id={`topic-types-${skill.slug}`}
          style={{
            padding: '4px 18px 16px',
            borderTop: `1px solid ${SURFACE.hairline}`,
            backgroundColor: SURFACE.paper,
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '8px',
            marginTop: '12px',
          }}>
            {patterns.map(p => (
              <PatternChip
                key={p.slug}
                pattern={p}
                accent={accent}
                searchQuery={searchQuery}
                onClick={() => onPatternDrill(p.slug, p.label)}
                bankPractice={bankPractice}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

const Chevron = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden
    style={{
      flexShrink: 0,
      color: INK.muted,
      transition: 'transform 180ms ease',
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    }}
  >
    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PatternChip = ({ pattern, accent, searchQuery, onClick, bankPractice }) => {
  const [hover, setHover] = useState(false);
  const prog = progressForIds(pattern.qids || [], bankPractice);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: typography.fontFamily,
        textAlign: 'left',
        backgroundColor: SURFACE.white,
        border: `1px solid ${hover ? accent.softBorder : SURFACE.border}`,
        borderRadius: '10px',
        padding: '10px 12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: `all ${transitions.fast}`,
        minHeight: '40px',
        boxShadow: hover ? '0 2px 6px -2px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >
      <span style={{
        flex: 1,
        fontSize: '13px',
        fontWeight: 600,
        color: INK.primary,
        lineHeight: 1.3,
        overflow: 'hidden',
      }}>
        <Highlight text={pattern.label} query={searchQuery} />
      </span>
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        flexShrink: 0,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {prog.practiced > 0 && (
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-brand-green-text)' }}>
            {prog.practiced} done
          </span>
        )}
        <span style={{ fontSize: '12px', fontWeight: 600, color: INK.muted }}>
          {pattern.count}
        </span>
      </span>
    </button>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// EmptyState — when filters/search produce no results
// ────────────────────────────────────────────────────────────────────────────
const EmptyState = ({ query, onClear }) => (
  <div style={{
    textAlign: 'center',
    padding: `${spacing['2xl']} ${spacing.xl}`,
    backgroundColor: SURFACE.paper,
    border: `1px dashed ${SURFACE.border}`,
    borderRadius: '16px',
  }}>
    <div style={{
      fontFamily: SERIF,
      fontSize: '22px',
      fontWeight: 700,
      color: INK.primary,
      marginBottom: '8px',
      letterSpacing: '-0.01em',
    }}>
      No topics match {query ? `"${query}"` : 'these filters'}.
    </div>
    <div style={{
      fontSize: '14px',
      color: INK.tertiary,
      marginBottom: spacing.lg,
    }}>
      Try a broader search or clear the filters.
    </div>
    <button
      onClick={onClear}
      style={{
        fontFamily: typography.fontFamily,
        fontSize: '13px',
        fontWeight: 700,
        color: '#FFFFFF',
        backgroundColor: 'var(--color-slate-900)',
        border: 'none',
        borderRadius: radius.full,
        padding: '10px 22px',
        cursor: 'pointer',
        minHeight: '40px',
      }}
    >
      Clear filters
    </button>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// Highlight — wraps the matching substring in a soft background, so the eye
// catches what triggered the search match
// ────────────────────────────────────────────────────────────────────────────
const Highlight = ({ text, query }) => {
  if (!query || !text) return text || null;
  const lower = text.toLowerCase();
  const i = lower.indexOf(query);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark style={{
        backgroundColor: 'rgba(234, 88, 12, 0.16)',
        color: 'inherit',
        padding: '0 2px',
        borderRadius: '3px',
      }}>
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Building blocks
// ────────────────────────────────────────────────────────────────────────────
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

const Dot = () => (
  <span aria-hidden style={{
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: INK.muted,
    display: 'inline-block',
  }} />
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

export default PracticeBank;
