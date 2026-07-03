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
import { masteryForIds, masterySummary, MASTERY_BANDS } from '../services/selectors/bankMastery';
import { buildBankRecommendations, assembleSmartMix } from '../services/selectors/bankRecommendations';
import { composeCustomPool } from '../services/selectors/customDrillPool';
import './PracticeBank.css';

// Per-domain tagline shown in the detail header (matched to the design file).
const DOMAIN_BLURBS = {
  'algebra':                       'Equations, inequalities, and the lines they live on.',
  'advanced-math':                 'Where the curves bend and the exponents climb.',
  'problem-solving':               'Ratios, rates, and the stories data tells.',
  'geometry':                      'Angles, arcs, and the space between them.',
  'information-and-ideas':         'Find the evidence. Draw the inference. Trust the text.',
  'craft-and-structure':           'Word by word, how meaning gets built.',
  'standard-english-conventions':  'Punctuation, agreement, and clean sentences.',
  'expression-of-ideas':           'Say it sharper, link it smoother.',
};

// Domain accents rotate orange → purple → navy. Colors applied inline; lime ink
// on the dark (purple/navy) badges. Orange is SEVA brand #EA580C (CSS var).
const ACCENT_ROTATION = ['orange', 'purple', 'navy'];
const ACCENTS = {
  orange: { badge: 'var(--pb-orange)', num: '#fff',         line: 'var(--pb-orange)', solid: 'var(--pb-orange)', out: 'var(--pb-orange)', outBorder: 'rgba(234,88,12,0.5)',  selTint: 'rgba(234,88,12,0.07)', selBorder: 'rgba(234,88,12,0.55)' },
  purple: { badge: 'var(--pb-purple)', num: 'var(--pb-lime)', line: 'var(--pb-purple)', solid: 'var(--pb-purple)', out: 'var(--pb-purple)', outBorder: 'rgba(124,92,199,0.5)', selTint: 'rgba(124,92,199,0.08)', selBorder: 'rgba(124,92,199,0.55)' },
  navy:   { badge: 'var(--pb-navy)',   num: 'var(--pb-lime)', line: 'var(--pb-navy)',   solid: 'var(--pb-navy)',   out: 'var(--pb-navy)',   outBorder: 'rgba(12,16,38,0.35)',  selTint: 'rgba(12,16,38,0.05)',  selBorder: 'rgba(12,16,38,0.4)' },
};

// "For you" recommendation kinds → eyebrow copy + tri-color tone. Orange = the
// action to take now (revisit misses), purple = focus from the last test, navy =
// neutral new ground. Buttons carry lime ink on the dark (purple/navy) tones,
// matching the ACCENTS convention above. Green stays reserved for strength/done.
const FORYOU_KINDS = {
  'fix-misses':    { eyebrow: 'Revisit', tone: 'orange' },
  'test-weakness': { eyebrow: 'From your last test', tone: 'purple' },
  'new-territory': { eyebrow: 'New territory', tone: 'navy' },
};

const MIN_PATTERN_POOL = 4;
const DRILL_COUNT_PER_TYPE = 10;
// Custom drill builder (Slice 3) — count options + filter-chip definitions.
const CUSTOM_COUNTS = [10, 15, 20];
const CUSTOM_COUNT_DEFAULT = 15;
const DIFFICULTY_CHIPS = [
  { key: 'all', label: 'All' },
  { key: 'easy', label: 'Easy' },
  { key: 'medium', label: 'Medium' },
  { key: 'hard', label: 'Hard' },
];
const POOL_CHIPS = [
  { key: 'all', label: 'All' },
  { key: 'unseen', label: 'Unseen only' },
  { key: 'missed', label: 'Missed only' },
];
const allTopicSlugs = (cat) => new Set((cat?.cbSkills || []).map(s => s.slug));
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

// Push a question id onto a Map<key, string[]> bucket.
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
  const domainQids = new Map();    // domain slug → [question id]

  for (const q of mathQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain || 'algebra';
    domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);
    pushId(domainQids, domain, q.id);

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
        qids: domainQids.get(domainSlug) || [],
      };
    });
}

// Display labels for R&W "question types" in the practice bank (Tier-1 grammar
// patterns + reading-comprehension sub-types + three sub-threshold grammar types).
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
  const domainQids = new Map();             // domainSlug → [question id]

  for (const q of rwQuestionBank) {
    if (!isDrillable(q)) continue;
    const domain = q.domain;
    if (domain) {
      domainTotals.set(domain, (domainTotals.get(domain) || 0) + 1);
      pushId(domainQids, domain, q.id);
    }
    (q.skills || []).forEach(sid => {
      skillCounts.set(sid, (skillCounts.get(sid) || 0) + 1);
      pushId(skillQids, sid, q.id);
    });

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
      qids: domainQids.get(domain) || [],
    };
  });
}

const MATH_CATEGORIES = buildMathCategories();
const RW_CATEGORIES = buildRWCategories();

// Safe fallback when a mastery-map lookup misses (should not happen in practice).
const EMPTY_MASTERY = { total: 0, practiced: 0, correct: 0, accuracy: null, coveragePct: 0, band: MASTERY_BANDS.UNSEEN };

const num2 = (n) => String(n).padStart(2, '0');
const fmt = (n) => Number(n).toLocaleString('en-US');
const matchesQuery = (text, q) => !q || (text || '').toLowerCase().includes(q);

// ── Inline icons (inherit currentColor unless a fixed stroke is given) ──────
const Arrow = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Chev = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>);
const SearchGlyph = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pb-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
const Bolt = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>);
const Star = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.8h6.1l-4.9 3.6 1.9 5.8-4.9-3.6-4.9 3.6 1.9-5.8L3 8.8h6.1z" /></svg>);
const Book = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>);
const Sliders = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></svg>);
const Close = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>);

// ────────────────────────────────────────────────────────────────────────────
// PracticeBank — master/detail: domain rail + selected-domain topics
// ────────────────────────────────────────────────────────────────────────────
const PracticeBank = ({ onStartPractice, bankPractice = {}, weaknesses = null, activeDrill = null, onResumeDrill, onDiscardDrill }) => {
  const [section, setSection] = useState('math');
  const [selByBank, setSelByBank] = useState({ math: 0, rw: 0 });
  const [search, setSearch] = useState('');
  const [openTopics, setOpenTopics] = useState(() => {
    const first = MATH_CATEGORIES[0]?.cbSkills?.[0]?.slug;
    return new Set(first ? [first] : []);
  });
  const searchRef = useRef(null);

  // ── Custom drill builder (Slice 3) ─────────────────────────────────────────
  const [builderOpen, setBuilderOpen] = useState(false);
  const [builderTopics, setBuilderTopics] = useState(() => allTopicSlugs(MATH_CATEGORIES[0]));
  const [builderCount, setBuilderCount] = useState(CUSTOM_COUNT_DEFAULT);
  const [builderDifficulty, setBuilderDifficulty] = useState('all');
  const [builderPool, setBuilderPool] = useState('all');

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const allItems = section === 'math' ? mathQuestionBank : rwQuestionBank;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';
  const shortLabel = section === 'math' ? 'Math' : 'R&W';
  const fullLabel = section === 'math' ? 'Full Math' : 'Full R&W';

  const si = Math.min(selByBank[section] || 0, Math.max(0, categories.length - 1));
  const selected = categories[si];

  const bankTotal = useMemo(() => categories.reduce((a, c) => a + c.total, 0), [categories]);
  const totalTopics = useMemo(() => categories.reduce((a, c) => a + c.cbSkills.length, 0), [categories]);
  const sectionProgress = useMemo(
    () => progressForIds(allItems.filter(isDrillable).map(q => q.id), bankPractice),
    [allItems, bankPractice],
  );

  // Single-pass mastery aggregation: one map lookup per row render instead of
  // re-walking thousands of ids inside every domain / topic / type render.
  const masteryByKey = useMemo(() => {
    const map = new Map();
    for (const cat of categories) {
      map.set(`domain:${cat.domain}`, masteryForIds(cat.qids || [], bankPractice));
      for (const skill of cat.cbSkills) {
        map.set(`topic:${skill.slug}`, masteryForIds(skill.qids || [], bankPractice));
        for (const p of skill.patterns || []) {
          map.set(`type:${p.slug}`, masteryForIds(p.qids || [], bankPractice));
        }
      }
    }
    return map;
  }, [categories, bankPractice]);

  const heroSummary = useMemo(
    () => masterySummary(categories.flatMap(c => c.cbSkills), bankPractice),
    [categories, bankPractice],
  );

  // Performance-driven "For you" recommendations (fix-misses / test-weakness /
  // new-territory). `now` is captured once per render — fine here since the
  // strip only needs coarse (20h) spacing, not a live clock.
  const recommendations = useMemo(
    () => buildBankRecommendations({ categories, bankPractice, weaknesses, now: Date.now() }),
    [categories, bankPractice, weaknesses],
  );
  // Suppress new-territory for a student who has practiced nothing in this
  // section — everything is "new" then, so it reads as noise on first visit.
  const foryouRecs = useMemo(
    () => (sectionProgress.practiced === 0
      ? recommendations.filter(r => r.kind !== 'new-territory')
      : recommendations),
    [recommendations, sectionProgress.practiced],
  );

  // ── Custom drill builder derivations ───────────────────────────────────────
  // id → difficulty for the current section (missing tag → medium, matching the
  // selector's default). Rebuilt only when the section's item array changes.
  const difficultyById = useMemo(() => {
    const map = new Map();
    for (const q of allItems) map.set(q.id, q.difficulty || 'medium');
    return map;
  }, [allItems]);

  // Candidate ids = de-duped union of the selected topics' question ids.
  const builderCandidateIds = useMemo(() => {
    if (!selected) return [];
    const seen = new Set();
    const out = [];
    for (const skill of selected.cbSkills) {
      if (!builderTopics.has(skill.slug)) continue;
      for (const id of (skill.qids || [])) {
        if (!seen.has(id)) { seen.add(id); out.push(id); }
      }
    }
    return out;
  }, [selected, builderTopics]);

  const composedPool = useMemo(
    () => composeCustomPool({
      qids: builderCandidateIds,
      difficultyById,
      bankPractice,
      difficulty: builderDifficulty,
      poolFilter: builderPool,
    }),
    [builderCandidateIds, difficultyById, bankPractice, builderDifficulty, builderPool],
  );
  const builderAvailable = composedPool.ids.length;
  const allTopicsSelected = !!selected && builderTopics.size === selected.cbSkills.length;

  // Reset + close the builder whenever the selected domain (or section) changes,
  // re-seeding topic selection to "all topics" for the new domain.
  const resetBuilder = () => {
    setBuilderTopics(allTopicSlugs(selected));
    setBuilderCount(CUSTOM_COUNT_DEFAULT);
    setBuilderDifficulty('all');
    setBuilderPool('all');
  };
  useEffect(() => {
    setBuilderOpen(false);
    setBuilderTopics(allTopicSlugs(selected));
    setBuilderCount(CUSTOM_COUNT_DEFAULT);
    setBuilderDifficulty('all');
    setBuilderPool('all');
  }, [selected]);

  // Escape closes the builder (listener mounted only while open).
  useEffect(() => {
    if (!builderOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setBuilderOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [builderOpen]);

  // "/" focuses the domain search (when not already typing).
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Search scoped to the selected domain's topics + question types.
  const visibleTopics = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!selected) return [];
    if (!q) return selected.cbSkills;
    return selected.cbSkills
      .map(skill => {
        const matchPatterns = (skill.patterns || []).filter(p => matchesQuery(p.label, q));
        if (matchPatterns.length) return { ...skill, patterns: matchPatterns, _forceOpen: true };
        if (matchesQuery(skill.label, q) || matchesQuery(skill.short, q)) return skill;
        return null;
      })
      .filter(Boolean);
  }, [selected, search]);

  // ── Drill launchers ──────────────────────────────────────────────────────
  const launchFromPool = (pool, count, label, source) => {
    const drillable = pool.filter(isDrillable);
    if (drillable.length === 0) return;
    onStartPractice(shuffle(drillable).slice(0, count).map(q => q.id), { label, source, section });
  };
  const launchQuickDrill = () => launchFromPool(allItems, DRILL_COUNT_SPRINT, `Quick ${sectionLabel} drill`, 'practice-bank-quick');
  const launchFullSection = () => launchFromPool(allItems, DRILL_COUNT_HERO, `${sectionLabel} full set`, 'practice-bank-full');

  // Smart "Today's mix": weighted blend of the student's weak-skill pool, their
  // bank misses, and untouched types — degrades to random when there's no
  // history yet. Buckets are pre-shuffled; the assembler holds the proportions.
  const launchTodaysMix = () => {
    const drillableIds = allItems.filter(isDrillable).map(q => q.id);
    const weakRec = recommendations.find(r => r.kind === 'test-weakness');
    const weaknessQids = weakRec ? weakRec.qids : [];
    const missedQids = drillableIds.filter(id => bankPractice[String(id)]?.c === false);
    const unseenQids = drillableIds.filter(id => !bankPractice[String(id)]);
    const ids = assembleSmartMix({
      size: DRILL_COUNT_PER_DOMAIN,
      weaknessQids: shuffle(weaknessQids),
      missedQids: shuffle(missedQids),
      unseenQids: shuffle(unseenQids),
      allQids: shuffle(drillableIds),
    });
    if (ids.length === 0) return;
    onStartPractice(ids, { label: "Today's mix", source: 'practice-bank-mix', section });
  };

  // Launch a "For you" recommendation. fix-misses keeps its most-recent-first
  // order (spaced re-test); the other kinds shuffle for variety.
  const launchForYou = (rec) => {
    const pool = rec.kind === 'fix-misses' ? rec.qids : shuffle(rec.qids);
    const ids = pool.slice(0, rec.count);
    if (ids.length === 0) return;
    onStartPractice(ids, { label: rec.title, source: `practice-bank-foryou-${rec.kind}`, section });
  };
  const launchDomainMixed = (cat) => {
    const fetchDomain = section === 'math' ? getMathQuestionsByDomain : getRWQuestionsByDomain;
    launchFromPool(fetchDomain(cat.domain), DRILL_COUNT_PER_DOMAIN, `${cat.label} mix`, 'practice-bank-domain');
  };
  const launchSkillDrill = (skill) => {
    const pool = section === 'math' ? getQuestionsByCBSkill(skill.slug) : getRWQuestionsBySkillIds([skill.slug]);
    launchFromPool(pool, DRILL_COUNT_PER_SKILL, skill.label, 'practice-bank-skill');
  };
  const launchPatternDrill = (slug, label) => {
    const pool = section === 'math' ? getQuestionsBySatPatterns([slug]) : getRWQuestionsByPattern([slug]);
    launchFromPool(pool, DRILL_COUNT_PER_TYPE, label, 'practice-bank-pattern');
  };

  // Custom builder: multi-select topics (at least one must stay on), then launch
  // the composed + shuffled pool sliced to the chosen count.
  const toggleBuilderTopic = (slug) => setBuilderTopics(prev => {
    const next = new Set(prev);
    if (next.has(slug)) {
      if (next.size <= 1) return prev; // no-op — keep at least one topic selected
      next.delete(slug);
    } else {
      next.add(slug);
    }
    return next;
  });
  const launchCustomDrill = () => {
    if (!selected) return;
    const ids = shuffle(composedPool.ids).slice(0, builderCount);
    if (ids.length === 0) return;
    onStartPractice(ids, { label: `${selected.label} · custom drill`, source: 'practice-bank-custom', section });
    setBuilderOpen(false);
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const openFirstTopic = (cats, idx) => {
    const first = cats[idx]?.cbSkills?.[0]?.slug;
    setOpenTopics(new Set(first ? [first] : []));
  };
  const pickSection = (next) => {
    setSection(next);
    setSearch('');
    const cats = next === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
    openFirstTopic(cats, selByBank[next] || 0);
  };
  const selectDomain = (i) => {
    setSelByBank(prev => ({ ...prev, [section]: i }));
    setSearch('');
    openFirstTopic(categories, i);
  };
  const toggleTopic = (slug) => setOpenTopics(prev => {
    const next = new Set(prev);
    if (next.has(slug)) next.delete(slug); else next.add(slug);
    return next;
  });

  const accentFor = (i) => ACCENTS[ACCENT_ROTATION[i % ACCENT_ROTATION.length]];
  const acc = accentFor(si);
  const pctOf = (cat) => (bankTotal && cat ? Math.round((cat.total / bankTotal) * 100) : 0);
  const selectedTypeCount = selected ? selected.cbSkills.reduce((s, sk) => s + (sk.patterns?.length || 0), 0) : 0;

  const resumeTotal = Array.isArray(activeDrill?.questionIds) ? activeDrill.questionIds.length : 0;
  const resumeAnswered = activeDrill?.answers ? Object.keys(activeDrill.answers).length : 0;
  const resumePos = Math.min((activeDrill?.currentQuestionIndex || 0) + 1, resumeTotal || 1);

  return (
    <div className="pb-screen" data-theme="light">
      <div className="pb-topbar">
        <span className="pb-topbar-eyebrow">Practice Bank</span>
        <div className="pb-toggle" role="tablist" aria-label="Practice section">
          <button type="button" role="tab" aria-selected={section === 'math'} className={`pb-toggle-btn${section === 'math' ? ' is-active' : ''}`} onClick={() => pickSection('math')}>Math</button>
          <button type="button" role="tab" aria-selected={section === 'rw'} className={`pb-toggle-btn${section === 'rw' ? ' is-active' : ''}`} onClick={() => pickSection('rw')}>Reading &amp; Writing</button>
        </div>
      </div>

      <div className="pb-inner">

        {activeDrill && typeof onResumeDrill === 'function' && (
          <section className="pb-resume" aria-label="Continue your last drill">
            <span className="pb-resume-icon"><Arrow size={20} /></span>
            <div className="pb-resume-text">
              <div className="pb-resume-eyebrow">Continue your last drill</div>
              <div className="pb-resume-title">{activeDrill?.assignmentMeta?.label || 'Practice Bank drill'}</div>
              <div className="pb-resume-meta">
                {resumeTotal > 0 ? `Question ${resumePos} of ${resumeTotal} · ${resumeAnswered} answered` : `${resumeAnswered} answered`}
              </div>
            </div>
            {typeof onDiscardDrill === 'function' && (
              <button type="button" className="pb-resume-discard" onClick={onDiscardDrill}>Discard</button>
            )}
            <button type="button" className="pb-resume-continue" onClick={onResumeDrill}>Continue <Arrow /></button>
          </section>
        )}

        <div className="pb-hero">
          <div>
            <h1 className="pb-hero-title">Your practice bank.</h1>
            <p className="pb-hero-desc">
              {fmt(bankTotal)} hand-authored {sectionLabel} questions across {categories.length} domains and {totalTopics} topics.
              Pick a domain, then expand any topic to drill a specific question type.
            </p>
          </div>
          <div className="pb-hero-stat">
            <div className="pb-hero-stats">
              <div className="pb-hero-stat-cell">
                <div className="pb-hero-stat-num">{fmt(sectionProgress.practiced)}</div>
                <div className="pb-hero-stat-sub">Practiced</div>
              </div>
              <div className="pb-hero-stat-cell">
                <div className="pb-hero-stat-num">{sectionProgress.accuracy != null ? `${sectionProgress.accuracy}%` : '—'}</div>
                <div className="pb-hero-stat-sub">Accuracy</div>
              </div>
              <div className="pb-hero-stat-cell">
                <div className="pb-hero-stat-num is-green">{heroSummary.strongCount}</div>
                <div className="pb-hero-stat-sub">Strong topics</div>
                {heroSummary.focusCount > 0 && (
                  <div className="pb-hero-stat-focus">{heroSummary.focusCount} to focus</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-divider" />

        {foryouRecs.length > 0 && (
          <section className="pb-foryou" aria-label="Recommended for you">
            <div className="pb-rail-label pb-foryou-label">For you</div>
            <div className="pb-foryou-row">
              {foryouRecs.map((rec) => {
                const meta = FORYOU_KINDS[rec.kind];
                const mins = Math.round(rec.count * 1.2);
                return (
                  <div className={`pb-foryou-card is-${meta.tone}`} key={rec.kind}>
                    <div className="pb-foryou-eyebrow">{meta.eyebrow}</div>
                    <div className="pb-foryou-title">{rec.title}</div>
                    <div className="pb-foryou-reason">{rec.reason}</div>
                    <div className="pb-foryou-foot">
                      <span className="pb-foryou-count">{rec.count} questions · ~{mins} min</span>
                      <button type="button" className="pb-foryou-start" onClick={() => launchForYou(rec)}>
                        Start <Arrow size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="pb-md">
          {/* LEFT rail */}
          <aside className="pb-rail">
            <div className="pb-rail-label">Quick start</div>
            <div className="pb-quickstart">
              <button type="button" className="pb-qs" onClick={launchQuickDrill}>
                <span className="pb-qs-icon"><Bolt /></span>
                <span className="pb-qs-text">
                  <span className="pb-qs-title">Quick drill</span>
                  <span className="pb-qs-sub">{DRILL_COUNT_SPRINT} questions · ~12 min</span>
                </span>
              </button>
              <button type="button" className="pb-qs is-primary" onClick={launchTodaysMix}>
                <span className="pb-qs-icon"><Star /></span>
                <span className="pb-qs-text">
                  <span className="pb-qs-title">Today's mix</span>
                  <span className="pb-qs-sub">{DRILL_COUNT_PER_DOMAIN} picked for you · ~25 min</span>
                </span>
              </button>
              <button type="button" className="pb-qs" onClick={launchFullSection}>
                <span className="pb-qs-icon is-purple"><Book /></span>
                <span className="pb-qs-text">
                  <span className="pb-qs-title">{fullLabel}</span>
                  <span className="pb-qs-sub">{DRILL_COUNT_HERO} questions · ~30 min</span>
                </span>
              </button>
            </div>

            <div className="pb-rail-label">Domains</div>
            <div className="pb-domainnav">
              {categories.map((cat, i) => {
                const a = accentFor(i), on = i === si;
                const dm = masteryByKey.get(`domain:${cat.domain}`) || EMPTY_MASTERY;
                return (
                  <button
                    type="button"
                    key={cat.domain}
                    className="pb-domain"
                    aria-pressed={on}
                    onClick={() => selectDomain(i)}
                    style={{ background: on ? a.selTint : 'var(--pb-surface)', borderColor: on ? a.selBorder : 'var(--pb-line)' }}
                  >
                    <span className="pb-domain-badge" style={{ background: a.badge, color: a.num }}>{num2(i + 1)}</span>
                    <span className="pb-domain-main">
                      <span className="pb-domain-title">{cat.label}</span>
                      <span className="pb-domain-progress">
                        <span className="pb-domain-bar"><span className="pb-domain-bar-fill" style={{ width: `${dm.coveragePct}%`, background: a.line }} /></span>
                        <span className="pb-domain-pct">{dm.coveragePct}%</span>
                      </span>
                      <span className="pb-domain-meta">
                        {fmt(cat.total)} questions · {cat.cbSkills.length} topics
                        {dm.practiced > 0 && dm.accuracy != null && ` · ${dm.accuracy}% correct`}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT detail */}
          <div className="pb-detail">
            <div className="pb-detail-head">
              <div className="pb-detail-headmain">
                <div className="pb-detail-eyebrow">Domain · {pctOf(selected)}% of {shortLabel}</div>
                <div className="pb-detail-title">{selected?.label}</div>
                <div className="pb-detail-tagline">{selected ? (DOMAIN_BLURBS[selected.domain] || '') : ''}</div>
                <div className="pb-detail-stats">
                  {fmt(selected?.total || 0)} questions &nbsp;·&nbsp; {selected?.cbSkills.length || 0} topics &nbsp;·&nbsp; {selectedTypeCount} question types
                </div>
              </div>
              <div className="pb-detail-actions">
                <button
                  type="button"
                  className="pb-builder-toggle"
                  aria-expanded={builderOpen}
                  aria-controls="pb-builder-panel"
                  style={{ color: acc.out, borderColor: acc.outBorder }}
                  onClick={() => setBuilderOpen(o => !o)}
                >
                  <Sliders /> Build a drill
                </button>
                <button type="button" className="pb-drill-mixed" style={{ background: acc.solid }} onClick={() => selected && launchDomainMixed(selected)}>
                  Drill {DRILL_COUNT_PER_DOMAIN} mixed <Arrow size={16} />
                </button>
              </div>
            </div>
            <div className="pb-detail-line" style={{ background: acc.line }} />

            {builderOpen && selected && (
              <div className="pb-builder" id="pb-builder-panel" role="region" aria-label="Custom drill builder">
                <div className="pb-builder-head">
                  <div className="pb-builder-title">Build your own drill</div>
                  <button type="button" className="pb-builder-close" aria-label="Close drill builder" onClick={() => setBuilderOpen(false)}>
                    <Close />
                  </button>
                </div>

                <div className="pb-builder-row">
                  <div className="pb-builder-label">Topics</div>
                  <div className="pb-chips">
                    <button
                      type="button"
                      className={`pb-chip${allTopicsSelected ? ' is-on' : ' is-off'}`}
                      aria-pressed={allTopicsSelected}
                      onClick={() => setBuilderTopics(allTopicSlugs(selected))}
                      style={allTopicsSelected ? { background: acc.selTint, borderColor: acc.selBorder } : undefined}
                    >
                      All topics
                    </button>
                    {selected.cbSkills.map((skill) => {
                      const on = builderTopics.has(skill.slug);
                      const count = section === 'math' ? skill.total : skill.count;
                      return (
                        <button
                          type="button"
                          key={skill.slug}
                          className={`pb-chip${on ? ' is-on' : ' is-off'}`}
                          aria-pressed={on}
                          onClick={() => toggleBuilderTopic(skill.slug)}
                          style={on ? { background: acc.selTint, borderColor: acc.selBorder } : undefined}
                        >
                          {skill.label} <span className="pb-chip-n">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pb-builder-row">
                  <div className="pb-builder-label">How many</div>
                  <div className="pb-seg" role="group" aria-label="Number of questions">
                    {CUSTOM_COUNTS.map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={`pb-seg-btn${builderCount === n ? ' is-on' : ''}`}
                        aria-pressed={builderCount === n}
                        onClick={() => setBuilderCount(n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pb-builder-row">
                  <div className="pb-builder-label">Difficulty</div>
                  <div className="pb-chips">
                    {DIFFICULTY_CHIPS.map(({ key, label }) => {
                      const n = composedPool.counts.byDifficulty[key];
                      const disabled = n === 0;
                      const on = builderDifficulty === key;
                      return (
                        <button
                          type="button"
                          key={key}
                          disabled={disabled}
                          className={`pb-chip${on ? ' is-on' : ' is-off'}${disabled ? ' is-disabled' : ''}`}
                          aria-pressed={on}
                          onClick={() => setBuilderDifficulty(key)}
                          style={on ? { background: acc.selTint, borderColor: acc.selBorder } : undefined}
                        >
                          {label} <span className="pb-chip-n">{n}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pb-builder-row">
                  <div className="pb-builder-label">Questions</div>
                  <div className="pb-chips">
                    {POOL_CHIPS.map(({ key, label }) => {
                      const n = composedPool.counts.byPool[key];
                      const disabled = n === 0;
                      const on = builderPool === key;
                      return (
                        <button
                          type="button"
                          key={key}
                          disabled={disabled}
                          className={`pb-chip${on ? ' is-on' : ' is-off'}${disabled ? ' is-disabled' : ''}`}
                          aria-pressed={on}
                          onClick={() => setBuilderPool(key)}
                          style={on ? { background: acc.selTint, borderColor: acc.selBorder } : undefined}
                        >
                          {label} <span className="pb-chip-n">{n}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pb-builder-foot">
                  <button type="button" className="pb-builder-reset" onClick={resetBuilder}>Reset</button>
                  <button
                    type="button"
                    className="pb-builder-start"
                    style={builderAvailable === 0 ? undefined : { background: acc.solid }}
                    disabled={builderAvailable === 0}
                    onClick={launchCustomDrill}
                  >
                    {builderAvailable === 0
                      ? 'No questions match'
                      : <>Start {Math.min(builderCount, builderAvailable)} of {builderAvailable} <Arrow size={16} /></>}
                  </button>
                </div>
              </div>
            )}

            <div className="pb-search">
              <SearchGlyph />
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${selected?.label || sectionLabel} topics & types`}
                aria-label="Search topics and question types"
              />
              <span className="pb-search-key" aria-hidden="true">/</span>
            </div>

            <div className="pb-topics">
              {visibleTopics.length === 0 ? (
                <div className="pb-empty">
                  No topics or types match “{search.trim()}”.
                  <div><button type="button" className="pb-empty-clear" onClick={() => setSearch('')}>Clear search</button></div>
                </div>
              ) : visibleTopics.map((skill) => {
                const open = skill._forceOpen || openTopics.has(skill.slug);
                const total = section === 'math' ? skill.total : skill.count;
                const types = skill.patterns?.length || 0;
                const tm = masteryByKey.get(`topic:${skill.slug}`) || EMPTY_MASTERY;
                return (
                  <div className="pb-topic" key={skill.slug}>
                    <div
                      className="pb-topic-head"
                      role="button"
                      tabIndex={0}
                      aria-expanded={open}
                      onClick={() => toggleTopic(skill.slug)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTopic(skill.slug); } }}
                    >
                      <span className={`pb-topic-chev${open ? ' is-open' : ''}`}><Chev /></span>
                      <span className="pb-topic-main">
                        <span className="pb-topic-title">{skill.label}</span>
                        <span className="pb-topic-meta">
                          {fmt(total)} questions · <span style={{ color: acc.out }}>{types} question types</span>
                        </span>
                      </span>
                      {tm.band === MASTERY_BANDS.LEARNING && (
                        <span className="pb-pill is-learning">{tm.practiced} practiced{tm.accuracy != null ? ` · ${tm.accuracy}%` : ''}</span>
                      )}
                      {tm.band === MASTERY_BANDS.STRONG && (
                        <span className="pb-pill is-strong">Strong · {tm.accuracy}%</span>
                      )}
                      {tm.band === MASTERY_BANDS.FOCUS && (
                        <span className="pb-pill is-focus">Focus · {tm.accuracy}%</span>
                      )}
                      <button
                        type="button"
                        className="pb-topic-drill"
                        style={{ color: acc.out, borderColor: acc.outBorder }}
                        onClick={(e) => { e.stopPropagation(); launchSkillDrill(skill); }}
                      >
                        Drill {DRILL_COUNT_PER_SKILL} <Arrow size={14} />
                      </button>
                    </div>
                    {open && types > 0 && (
                      <div className="pb-topic-body">
                        {skill.patterns.map((p) => {
                          const pm = masteryByKey.get(`type:${p.slug}`) || EMPTY_MASTERY;
                          const band = pm.band;
                          const seen = band !== MASTERY_BANDS.UNSEEN && pm.accuracy != null;
                          const tileClass = band === MASTERY_BANDS.STRONG ? ' is-strong' : band === MASTERY_BANDS.FOCUS ? ' is-focus' : '';
                          return (
                            <button
                              type="button"
                              className={`pb-type${tileClass}`}
                              key={p.slug}
                              title={seen ? `${p.count} questions · ${pm.practiced} practiced` : undefined}
                              onClick={() => launchPatternDrill(p.slug, p.label)}
                            >
                              <span className="pb-type-name">{p.label}</span>
                              {seen ? (
                                <span className="pb-type-count"><span className={`pb-type-acc is-${band}`}>{pm.accuracy}%</span> · {p.count}</span>
                              ) : (
                                <span className="pb-type-count">{p.count}</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeBank;
