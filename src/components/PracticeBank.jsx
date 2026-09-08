import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import {
  questionBank as mathQuestionBank,
  getQuestionsByCBSkill,
} from '../data/questions/bank';
import {
  rwQuestionBank,
  RW_DOMAINS,
  getQuestionsBySkillIds as getRWQuestionsBySkillIds,
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
import { getWeaknessSection } from '../services/selectors/weaknesses';
import './PracticeBank.css';

// "For you" recommendation kinds → eyebrow copy + tri-color tone. Orange = the
// action to take now (revisit misses), purple = focus from the last test, navy =
// neutral new ground. Green stays reserved for strength/done.
const FORYOU_KINDS = {
  'fix-misses':    { eyebrow: 'Revisit', tone: 'orange' },
  'test-weakness': { eyebrow: 'From your last test', tone: 'purple' },
  'new-territory': { eyebrow: 'New territory', tone: 'navy' },
};
// A "For you" row navigates: it selects the rec's domain and applies the filter
// that matches its kind (test-weakness marks the weak topic rows instead).
const FORYOU_POOL = { 'fix-misses': 'missed', 'new-territory': 'unseen' };
const FORYOU_MAX = 2;

const MIN_PATTERN_POOL = 4;
// Custom drill builder — count options + filter-chip definitions.
const CUSTOM_COUNTS = [10, 15, 20, 25];
const CUSTOM_COUNT_DEFAULT = 15;
const DIFFICULTY_CHIPS = [
  { key: 'all', label: 'All' },
  { key: 'easy', label: 'Easy' },
  { key: 'medium', label: 'Medium' },
  { key: 'hard', label: 'Hard' },
];
// The builder modal keeps its explicit "only" wording; the pane filter bar is
// tighter ("All · Unseen · Missed") because it sits under a SHOW label.
const POOL_CHIPS = [
  { key: 'all', label: 'All' },
  { key: 'unseen', label: 'Unseen only' },
  { key: 'missed', label: 'Missed only' },
];
const PANE_POOL_CHIPS = [
  { key: 'all', label: 'All' },
  { key: 'unseen', label: 'Unseen' },
  { key: 'missed', label: 'Missed' },
];
const allTopicSlugs = (cat) => new Set((cat?.cbSkills || []).map(s => s.slug));
const DRILL_COUNT_PER_DOMAIN = 20;
const DRILL_COUNT_SPRINT = 10;
const FILTERED_DRILL_COUNT = 20;
const NAV_STORAGE_KEY = 'pb:nav';
const SEARCH_MIN_CHARS = 2;

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

const fmt = (n) => Number(n).toLocaleString('en-US');

/** Session-scoped "remember my place" state. Reads are guarded — private mode throws. */
function readNavState() {
  try {
    const raw = window.sessionStorage.getItem(NAV_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch (err) {
    return null;
  }
}

// ── Inline icons (inherit currentColor unless a fixed stroke is given) ──────
const Arrow = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Bolt = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>);
const Search = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
const Close = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>);

/**
 * Mastery label for a topic row / rail row: green when genuinely strong, purple
 * for focus, quiet neutral while learning, nothing at all when unseen ("Not
 * started" is never rendered).
 */
function masteryLabel(m) {
  if (!m || m.practiced === 0) return null;
  if (m.band === MASTERY_BANDS.STRONG) return { tone: 'strong', text: `Strong · ${m.accuracy}% · ${m.practiced} practiced` };
  if (m.band === MASTERY_BANDS.FOCUS) return { tone: 'focus', text: `Focus · ${m.accuracy}% · ${m.practiced} practiced` };
  return { tone: 'learning', text: `${m.practiced} practiced` };
}

// ────────────────────────────────────────────────────────────────────────────
// PracticeBank — a question-bank NAVIGATOR: a sticky rail (section toggle,
// search, For-you, domains, launchers) beside a pane that lists the selected
// domain's topics with live difficulty / seen-status filters. Search replaces
// the pane body with grouped matches. The custom-drill builder stays behind a
// single "Build a custom drill" modal.
// ────────────────────────────────────────────────────────────────────────────
const PracticeBank = ({
  onStartPractice,
  onStartAdaptive,
  bankPractice = {},
  weaknesses = null,
  activeDrill = null,
  onResumeDrill,
  onDiscardDrill,
  focusRequest = null,
  progressHydrated = true,
}) => {
  // Restore the student's place inside the session (section / domain / filters).
  const [restored] = useState(readNavState);
  const [section, setSection] = useState(() => (restored?.section === 'rw' ? 'rw' : 'math'));
  const [domain, setDomain] = useState(() => (typeof restored?.domain === 'string' ? restored.domain : null));
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState(() => (DIFFICULTY_CHIPS.some(c => c.key === restored?.difficulty) ? restored.difficulty : 'all'));
  const [pool, setPool] = useState(() => (PANE_POOL_CHIPS.some(c => c.key === restored?.pool) ? restored.pool : 'all'));
  // Rows flagged by a chapter hand-off / a test-weakness recommendation:
  // { slugs: string[], label: string }. Cleared on a launch or a domain change.
  const [marker, setMarker] = useState(null);

  const paneRef = useRef(null);
  const railListRef = useRef(null);
  const lastFocusToken = useRef(null);
  const didMount = useRef(false);

  // ── Custom drill builder (modal) ───────────────────────────────────────────
  const [builderOpen, setBuilderOpen] = useState(false);
  const [builderDomainIdx, setBuilderDomainIdx] = useState(0);
  const [builderTopics, setBuilderTopics] = useState(() => allTopicSlugs(MATH_CATEGORIES[0]));
  const [builderCount, setBuilderCount] = useState(CUSTOM_COUNT_DEFAULT);
  const [builderDifficulty, setBuilderDifficulty] = useState('all');
  const [builderPool, setBuilderPool] = useState('all');

  const categories = section === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
  const allItems = section === 'math' ? mathQuestionBank : rwQuestionBank;
  const sectionLabel = section === 'math' ? 'Math' : 'Reading & Writing';

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

  // Per-domain "2 strong · 1 focus" tallies for the rail.
  const domainTallies = useMemo(() => {
    const map = new Map();
    for (const cat of categories) map.set(cat.domain, masterySummary(cat.cbSkills, bankPractice));
    return map;
  }, [categories, bankPractice]);

  // Performance-driven "For you" recommendations (fix-misses / test-weakness /
  // new-territory). `now` is captured once per render — fine here since the
  // strip only needs coarse (20h) spacing, not a live clock.
  const recommendations = useMemo(
    () => buildBankRecommendations({ categories, bankPractice, weaknesses, now: Date.now() }),
    [categories, bankPractice, weaknesses],
  );
  // Suppress new-territory for a student who has practiced nothing in this
  // section — everything is "new" then, so it reads as noise on first visit.
  // Recommendations only make sense once the student's history has hydrated.
  const foryouRecs = useMemo(
    () => {
      if (!progressHydrated) return [];
      const list = sectionProgress.practiced === 0
        ? recommendations.filter(r => r.kind !== 'new-territory')
        : recommendations;
      return list.slice(0, FORYOU_MAX);
    },
    [recommendations, sectionProgress.practiced, progressHydrated],
  );

  // id → difficulty for the current section (missing tag → medium, matching the
  // selector's default). Rebuilt only when the section's item array changes.
  const difficultyById = useMemo(() => {
    const map = new Map();
    for (const q of allItems) map.set(q.id, q.difficulty || 'medium');
    return map;
  }, [allItems]);

  // qid → domain, so a recommendation (which carries only question ids) can
  // resolve the domain its pool mostly lives in.
  const domainByQid = useMemo(() => {
    const map = new Map();
    for (const cat of categories) for (const id of cat.qids || []) map.set(String(id), cat.domain);
    return map;
  }, [categories]);

  // ── Which domain is selected ───────────────────────────────────────────────
  // First visit: the first weakness that maps into this section's taxonomy.
  const weaknessDomain = useMemo(() => {
    const list = Array.isArray(weaknesses) ? weaknesses : [];
    for (const w of list) {
      if (!w || getWeaknessSection(w) !== section) continue;
      if (w.domain && categories.some(c => c.domain === w.domain)) return w.domain;
      const cat = categories.find(c => (c.cbSkills || []).some(s => s.slug === w.skillId));
      if (cat) return cat.domain;
    }
    return null;
  }, [weaknesses, section, categories]);

  const fallbackDomain = weaknessDomain || categories[0]?.domain || null;
  const selectedDomain = categories.some(c => c.domain === domain) ? domain : fallbackDomain;
  const selectedCat = categories.find(c => c.domain === selectedDomain) || categories[0] || null;

  // Remember the place for the rest of the session.
  useEffect(() => {
    try {
      window.sessionStorage.setItem(NAV_STORAGE_KEY, JSON.stringify({ section, domain: selectedDomain, difficulty, pool }));
    } catch (err) {
      /* sessionStorage unavailable (private mode) — the nav just doesn't persist */
    }
  }, [section, selectedDomain, difficulty, pool]);

  // The pane is the tabpanel for the rail's tablist: a domain change moves
  // focus there so keyboard users land on the content they just chose.
  useEffect(() => {
    if (!didMount.current) { didMount.current = true; return; }
    const el = paneRef.current;
    if (el && typeof el.focus === 'function') el.focus();
  }, [selectedDomain, section]);

  // ── Search ─────────────────────────────────────────────────────────────────
  const trimmedQuery = query.trim();
  const searching = trimmedQuery.length >= SEARCH_MIN_CHARS;
  const searchGroups = useMemo(() => {
    if (!searching) return [];
    const needle = trimmedQuery.toLowerCase();
    const hit = (skill) => String(skill.label || '').toLowerCase().includes(needle)
      || (skill.patterns || []).some(p => String(p.label || '').toLowerCase().includes(needle));
    return categories
      .map(cat => ({ cat, skills: (cat.cbSkills || []).filter(hit) }))
      .filter(g => g.skills.length > 0);
  }, [categories, searching, trimmedQuery]);
  const searchMatchCount = searchGroups.reduce((a, g) => a + g.skills.length, 0);

  // ── Filter counts ──────────────────────────────────────────────────────────
  const filtersActive = difficulty !== 'all' || pool !== 'all';
  const activeChipLabels = [
    difficulty === 'all' ? null : DIFFICULTY_CHIPS.find(c => c.key === difficulty)?.label,
    pool === 'all' ? null : PANE_POOL_CHIPS.find(c => c.key === pool)?.label,
  ].filter(Boolean);

  // Static E / M / H composition per topic (independent of the student).
  const topicBreakdown = useMemo(() => {
    const map = new Map();
    for (const cat of categories) {
      for (const skill of cat.cbSkills) {
        const { counts } = composeCustomPool({ qids: skill.qids || [], difficultyById, bankPractice: null });
        map.set(skill.slug, counts.byDifficulty);
      }
    }
    return map;
  }, [categories, difficultyById]);

  // How many of each topic survive the active filters ("34 of 91").
  const topicFiltered = useMemo(() => {
    const map = new Map();
    for (const cat of categories) {
      for (const skill of cat.cbSkills) {
        const { ids } = composeCustomPool({ qids: skill.qids || [], difficultyById, bankPractice, difficulty, poolFilter: pool });
        map.set(skill.slug, ids.length);
      }
    }
    return map;
  }, [categories, difficultyById, bankPractice, difficulty, pool]);

  // Chip availability is scoped to what the pane is showing: the selected
  // domain, or the union of the search matches while a query is active.
  const chipScopeQids = useMemo(() => {
    if (searching) {
      const seen = new Set();
      const out = [];
      for (const g of searchGroups) {
        for (const skill of g.skills) {
          for (const id of skill.qids || []) {
            const k = String(id);
            if (!seen.has(k)) { seen.add(k); out.push(id); }
          }
        }
      }
      return out;
    }
    return selectedCat?.qids || [];
  }, [searching, searchGroups, selectedCat]);

  const chipCounts = useMemo(
    () => composeCustomPool({ qids: chipScopeQids, difficultyById, bankPractice, difficulty, poolFilter: pool }).counts,
    [chipScopeQids, difficultyById, bankPractice, difficulty, pool],
  );

  // ── Custom drill builder derivations ───────────────────────────────────────
  const builderDomain = categories[Math.min(builderDomainIdx, Math.max(0, categories.length - 1))];

  // Candidate ids = de-duped union of the selected builder domain's picked topics.
  const builderCandidateIds = useMemo(() => {
    if (!builderDomain) return [];
    const seen = new Set();
    const out = [];
    for (const skill of builderDomain.cbSkills) {
      if (!builderTopics.has(skill.slug)) continue;
      for (const id of (skill.qids || [])) {
        if (!seen.has(id)) { seen.add(id); out.push(id); }
      }
    }
    return out;
  }, [builderDomain, builderTopics]);

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
  const allTopicsSelected = !!builderDomain && builderTopics.size === builderDomain.cbSkills.length;

  // ── Selection handlers ─────────────────────────────────────────────────────
  const selectDomain = useCallback((next) => {
    setDomain(next);
    setMarker(null);
    setQuery('');
  }, []);

  // Apply an incoming chapter focus request. Guarded by token so a stale
  // focusRequest (still held in App while the student navigates back via the
  // nav bar) never re-fires — only a fresh token from a chapter CTA does.
  useEffect(() => {
    const token = focusRequest?.token;
    if (!token || lastFocusToken.current === token) return undefined;
    lastFocusToken.current = token;
    const nextSection = focusRequest.section === 'rw' || focusRequest.section === 'math' ? focusRequest.section : section;
    const cats = nextSection === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
    const slugs = (focusRequest.skillSlugs || []).filter(Boolean);
    const cat = cats.find(c => c.domain === focusRequest.domain)
      || cats.find(c => (c.cbSkills || []).some(s => slugs.includes(s.slug)))
      || cats[0];
    const matching = cat ? (cat.cbSkills || []).filter(s => slugs.includes(s.slug)).map(s => s.slug) : [];
    setSection(nextSection);
    setQuery('');
    setDomain(cat ? cat.domain : null);
    setMarker(matching.length ? { slugs: matching, label: 'From your chapter' } : null);
    // Delay the scroll so the section + domain switch commits first.
    const scrollTimer = setTimeout(() => {
      const root = paneRef.current;
      if (!root || !matching.length) return;
      const target = root.querySelector(`[data-pb-skill="${matching[0]}"]`);
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
    return () => clearTimeout(scrollTimer);
  }, [focusRequest, section]);

  // Builder dialog focus contract: focus lands on Close when it opens, Tab
  // cycles inside the dialog, Escape closes it, and focus returns to whatever
  // opened it (the "Build a custom drill" row) when it closes.
  const builderModalRef = useRef(null);
  const builderOpenerRef = useRef(null);
  useEffect(() => {
    if (!builderOpen) return undefined;
    builderOpenerRef.current = document.activeElement;
    const modal = builderModalRef.current;
    const closeBtn = modal && modal.querySelector('.pb-builder-close');
    if (closeBtn) closeBtn.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setBuilderOpen(false); return; }
      if (e.key !== 'Tab' || !modal) return;
      const list = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])')];
      if (!list.length) return;
      const idx = list.indexOf(document.activeElement);
      if (e.shiftKey && idx <= 0) { e.preventDefault(); list[list.length - 1].focus(); }
      else if (!e.shiftKey && (idx === -1 || idx === list.length - 1)) { e.preventDefault(); list[0].focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      const opener = builderOpenerRef.current;
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus();
    };
  }, [builderOpen]);

  // ── Drill launchers (sources all keep the `practice-bank` prefix) ──────────
  const launchFromPool = (poolItems, count, label, source) => {
    const drillable = poolItems.filter(isDrillable);
    if (drillable.length === 0) return;
    setMarker(null);
    onStartPractice(shuffle(drillable).slice(0, count).map(q => q.id), { label, source, section });
  };
  const launchQuickDrill = () => launchFromPool(allItems, DRILL_COUNT_SPRINT, `Quick ${sectionLabel} drill`, 'practice-bank-quick');

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
    setMarker(null);
    onStartPractice(ids, { label: "Today's mix", source: 'practice-bank-mix', section });
  };

  // Domain "Practice" → an adaptive round over the whole domain, rendered in
  // the SEVA Round shell (difficulty ladders to the student's performance).
  const launchDomainMixed = (cat) => {
    setMarker(null);
    onStartAdaptive({
      enforcedDomain: cat.domain,
      label: `${cat.label} practice`,
      section,
      ephemeral: true,
      source: 'practice-bank-domain',
    });
  };
  // Topic "Practice" → an adaptive round pulling from EVERY question type under
  // this topic (types folded in). The round adapts difficulty per answer; it
  // renders in the SEVA Round design with a target-based, growing progress rail.
  const launchSkillDrill = (skill) => {
    const skillPool = section === 'math' ? getQuestionsByCBSkill(skill.slug) : getRWQuestionsBySkillIds([skill.slug]);
    const poolIds = skillPool.filter(isDrillable).map(q => q.id);
    if (poolIds.length === 0) return;
    setMarker(null);
    onStartAdaptive({
      poolIds,
      label: skill.label,
      section,
      enforcedDomain: skill.domain,
      ephemeral: true,
      source: 'practice-bank-topic',
    });
  };

  // Question-type drill: an adaptive round over ONE derived type inside a
  // topic (e.g. Subject-verb agreement under Form, Structure, and Sense) —
  // the pattern qids were collected at category-build time.
  const launchTypeDrill = (skill, pattern) => {
    if (!pattern?.qids?.length) return;
    setMarker(null);
    onStartAdaptive({
      poolIds: pattern.qids,
      label: pattern.label,
      section,
      enforcedDomain: skill.domain,
      ephemeral: true,
      source: 'practice-bank-type',
    });
  };

  // A filter is set → the adaptive engine can't honour it, so serve a FIXED
  // drill composed from exactly the filtered pool instead.
  const launchFiltered = (qids, name) => {
    const { ids } = composeCustomPool({ qids: qids || [], difficultyById, bankPractice, difficulty, poolFilter: pool });
    if (ids.length === 0) return;
    setMarker(null);
    onStartPractice(shuffle(ids).slice(0, FILTERED_DRILL_COUNT), {
      label: `${name} · ${activeChipLabels.join(' · ')}`,
      source: 'practice-bank-filtered',
      section,
    });
  };

  const practiceDomain = (cat) => (filtersActive ? launchFiltered(cat.qids, cat.label) : launchDomainMixed(cat));
  const practiceTopic = (skill) => (filtersActive ? launchFiltered(skill.qids, skill.label) : launchSkillDrill(skill));
  const practiceType = (skill, pattern) => (filtersActive ? launchFiltered(pattern.qids, pattern.label) : launchTypeDrill(skill, pattern));

  // A "For you" row NAVIGATES (it no longer launches): it selects the domain the
  // rec's pool lives in and applies the filter that matches its kind.
  const openRecommendation = (rec) => {
    const tally = new Map();
    for (const id of rec.qids || []) {
      const d = domainByQid.get(String(id));
      if (d) tally.set(d, (tally.get(d) || 0) + 1);
    }
    let best = null;
    for (const [d, n] of tally) if (!best || n > best.n) best = { d, n };
    const targetDomain = best ? best.d : selectedDomain;
    setQuery('');
    setDomain(targetDomain);
    const nextPool = FORYOU_POOL[rec.kind];
    if (nextPool) {
      setPool(nextPool);
      setMarker(null);
      return;
    }
    // test-weakness: leave the filters alone and mark the weak topic rows.
    setPool('all');
    setDifficulty('all');
    const cat = categories.find(c => c.domain === targetDomain);
    const recIds = new Set((rec.qids || []).map(String));
    const slugs = (cat?.cbSkills || [])
      .filter(s => (s.qids || []).some(id => recIds.has(String(id))))
      .map(s => s.slug);
    setMarker(slugs.length ? { slugs, label: FORYOU_KINDS['test-weakness'].eyebrow } : null);
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
    if (!builderDomain) return;
    const ids = shuffle(composedPool.ids).slice(0, builderCount);
    if (ids.length === 0) return;
    onStartPractice(ids, { label: `${builderDomain.label} · custom drill`, source: 'practice-bank-custom', section });
    setBuilderOpen(false);
  };

  // ── Handlers ──────────────────────────────────────────────────────────────
  const pickSection = (next) => {
    if (next === section) return;
    setSection(next);
    setDomain(null);
    setQuery('');
    setMarker(null);
    setBuilderOpen(false);
    setBuilderDomainIdx(0);
    const cats = next === 'math' ? MATH_CATEGORIES : RW_CATEGORIES;
    setBuilderTopics(allTopicSlugs(cats[0]));
    setBuilderCount(CUSTOM_COUNT_DEFAULT);
    setBuilderDifficulty('all');
    setBuilderPool('all');
  };
  const openBuilder = () => {
    const idx = Math.max(0, categories.findIndex(c => c.domain === selectedDomain));
    setBuilderDomainIdx(idx);
    setBuilderTopics(allTopicSlugs(categories[idx]));
    setBuilderCount(CUSTOM_COUNT_DEFAULT);
    setBuilderDifficulty('all');
    setBuilderPool('all');
    setBuilderOpen(true);
  };
  const pickBuilderDomain = (idx) => {
    setBuilderDomainIdx(idx);
    setBuilderTopics(allTopicSlugs(categories[idx]));
    setBuilderDifficulty('all');
    setBuilderPool('all');
  };
  const resetBuilder = () => {
    setBuilderTopics(allTopicSlugs(builderDomain));
    setBuilderCount(CUSTOM_COUNT_DEFAULT);
    setBuilderDifficulty('all');
    setBuilderPool('all');
  };
  const clearFilters = () => { setDifficulty('all'); setPool('all'); };

  // Roving tabindex over the rail's vertical tablist: Up/Down (and Left/Right,
  // for the horizontal phone strip) move + select, Home/End jump to the ends.
  const onDomainKeyDown = (e) => {
    const nav = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!nav.includes(e.key)) return;
    const tabs = Array.from(railListRef.current?.querySelectorAll('[role="tab"]') || []);
    if (tabs.length === 0) return;
    e.preventDefault();
    const active = tabs.indexOf(document.activeElement);
    const current = active === -1 ? Math.max(0, tabs.findIndex(t => t.getAttribute('aria-selected') === 'true')) : active;
    let next = current;
    if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (current + 1) % tabs.length;
    else next = (current - 1 + tabs.length) % tabs.length;
    const el = tabs[next];
    if (!el) return;
    if (typeof el.focus === 'function') el.focus();
    selectDomain(el.getAttribute('data-pb-domain'));
  };

  // Arrow keys inside a filter radiogroup move to the next ENABLED chip.
  const onChipKeyDown = (e, chips, currentKey, setter) => {
    const nav = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];
    if (!nav.includes(e.key)) return;
    e.preventDefault();
    const enabled = chips.filter(c => c.enabled);
    if (enabled.length === 0) return;
    const idx = Math.max(0, enabled.findIndex(c => c.key === currentKey));
    let next = idx;
    if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = enabled.length - 1;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % enabled.length;
    else next = (idx - 1 + enabled.length) % enabled.length;
    setter(enabled[next].key);
  };

  const resumeTotal = Array.isArray(activeDrill?.questionIds) ? activeDrill.questionIds.length : 0;
  const resumeAnswered = activeDrill?.answers ? Object.keys(activeDrill.answers).length : 0;
  const resumePos = Math.min((activeDrill?.currentQuestionIndex || 0) + 1, resumeTotal || 1);
  const resumeLabel = activeDrill?.assignmentMeta?.label || 'Practice Bank drill';
  const resumeMeta = resumeTotal > 0 ? `Question ${resumePos} of ${resumeTotal} · ${resumeAnswered} answered` : `${resumeAnswered} answered`;
  const showResume = !!activeDrill && typeof onResumeDrill === 'function';

  const markedSlugs = marker?.slugs || [];

  // The "no questions match" copy is assembled from the ACTIVE chips so it
  // always names the filter the student actually set.
  const emptyCopy = (() => {
    const diffWord = difficulty === 'all' ? '' : `${DIFFICULTY_CHIPS.find(c => c.key === difficulty)?.label} `;
    const poolWord = pool === 'unseen' ? " you haven't seen" : pool === 'missed' ? " you've missed" : '';
    return `No ${diffWord}questions${poolWord} in ${selectedCat?.label || sectionLabel} yet.`;
  })();

  // ── Row renderers ─────────────────────────────────────────────────────────
  const renderTopicRow = (skill) => {
    const breakdown = topicBreakdown.get(skill.slug) || { all: 0, easy: 0, medium: 0, hard: 0 };
    const shown = topicFiltered.get(skill.slug) ?? breakdown.all;
    const dim = shown === 0;
    const marked = markedSlugs.includes(skill.slug);
    const m = masteryByKey.get(`topic:${skill.slug}`) || EMPTY_MASTERY;
    const label = progressHydrated ? masteryLabel(m) : null;
    const countText = filtersActive ? `${fmt(shown)} of ${fmt(breakdown.all)}` : `${fmt(breakdown.all)} questions`;
    // Question-type chips are a GRAMMAR-only affordance (user, 2026-07-16):
    // conventions topics list their types FLAT below the row — always visible,
    // no accordion. skill.patterns stays populated for ALL topics (the For-you
    // engine reads it), so gate the chips here, never in the category data.
    const typeChips = skill.domain === 'standard-english-conventions' ? (skill.patterns || []) : [];

    return (
      <div
        className={`pb-trow${dim ? ' is-dim' : ''}${marked ? ' is-from-chapter' : ''}`}
        data-pb-skill={skill.slug}
        key={skill.slug}
        // The whole row is the hit area (design review 15A); the link stays the
        // only focusable control, so keyboard and screen-reader users see one.
        onClick={dim ? undefined : (e) => { if (e.target.closest && e.target.closest('.pb-trow-types, .pb-trow-link')) return; practiceTopic(skill); }}
      >
        <div className="pb-trow-text">
          {marked && <span className="pb-trow-mark">{marker.label}</span>}
          <div className="pb-trow-name">{skill.label}</div>
          <div className="pb-trow-meta">
            {countText} · E {breakdown.easy} · M {breakdown.medium} · H {breakdown.hard}
          </div>
        </div>
        <div className="pb-trow-mastery">
          {label && (
            <>
              <span className="pb-bar" aria-hidden="true">
                <i className={`is-${label.tone}`} style={{ width: `${Math.max(3, Math.min(100, m.coveragePct))}%` }} />
              </span>
              <span className={`pb-trow-band is-${label.tone}`}>{label.text}</span>
            </>
          )}
        </div>
        {!dim && (
          <button
            type="button"
            className="pb-trow-link"
            aria-label={`Practice ${skill.label}, ${shown} questions`}
            onClick={() => practiceTopic(skill)}
          >
            Practice <Arrow size={13} />
          </button>
        )}
        {typeChips.length > 0 && (
          <div className="pb-trow-types">
            {typeChips.map((p) => {
              const pm = masteryByKey.get(`type:${p.slug}`) || EMPTY_MASTERY;
              const seen = progressHydrated && pm.band !== MASTERY_BANDS.UNSEEN && pm.accuracy != null;
              const typeShown = filtersActive
                ? composeCustomPool({ qids: p.qids || [], difficultyById, bankPractice, difficulty, poolFilter: pool }).ids.length
                : p.count;
              return (
                <button
                  type="button"
                  className="pb-type"
                  key={p.slug}
                  disabled={typeShown === 0}
                  onClick={() => practiceType(skill, p)}
                >
                  <span className="pb-type-name">{p.label}</span>
                  <span className="pb-type-count">{p.count}</span>
                  {seen && <span className={`pb-type-acc is-${pm.band}`}> · {pm.accuracy}%</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const paneRows = selectedCat ? (selectedCat.cbSkills || []) : [];
  const allZero = !searching && filtersActive && paneRows.length > 0
    && paneRows.every(s => (topicFiltered.get(s.slug) ?? 0) === 0);

  return (
    <div className="pb-screen" data-theme="light">
      <div className="pb-inner">

        {showResume && (
          <section className="pb-resume" aria-label="Continue your last drill">
            <div className="pb-resume-text">
              <div className="pb-resume-eyebrow">Continue your last drill</div>
              <div className="pb-resume-title">{resumeLabel}</div>
              <div className="pb-resume-meta">{resumeMeta}</div>
            </div>
            {typeof onDiscardDrill === 'function' && (
              <button type="button" className="pb-resume-discard" onClick={onDiscardDrill}>Discard</button>
            )}
            <button type="button" className="pb-resume-continue" onClick={onResumeDrill}>Continue <Arrow /></button>
          </section>
        )}

        <div className="pb-nav">
          {/* ── Rail: toggle, search, For you, domains, launchers ───────────── */}
          <aside className="pb-rail">
            <p className="pb-eyebrow pb-rail-eyebrow">Practice Bank</p>

            <div className="pb-toggle" role="group" aria-label="Practice section">
              <button type="button" aria-pressed={section === 'math'} className={`pb-toggle-btn${section === 'math' ? ' is-active' : ''}`} onClick={() => pickSection('math')}>Math</button>
              <button type="button" aria-pressed={section === 'rw'} className={`pb-toggle-btn${section === 'rw' ? ' is-active' : ''}`} onClick={() => pickSection('rw')}>Reading &amp; Writing</button>
            </div>

            <label className="pb-search" htmlFor="pb-search-input">
              <span className="pb-sr-only">{`Search ${sectionLabel} topics`}</span>
              <span className="pb-search-icon" aria-hidden="true"><Search /></span>
              <input
                id="pb-search-input"
                className="pb-search-input"
                type="search"
                value={query}
                placeholder={`Search ${sectionLabel} topics`}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Escape') { e.preventDefault(); setQuery(''); } }}
              />
            </label>

            {foryouRecs.length > 0 && (
              <div className="pb-foryou">
                <div className="pb-eyebrow">For you</div>
                <div className="pb-foryou-list">
                  {foryouRecs.map((rec) => {
                    const meta = FORYOU_KINDS[rec.kind];
                    return (
                      <button type="button" className={`pb-rec is-${meta.tone}`} key={rec.kind} onClick={() => openRecommendation(rec)}>
                        <span className="pb-rec-eyebrow">{meta.eyebrow}</span>
                        <span className="pb-rec-title">{rec.title}</span>
                        <span className="pb-rec-count">{rec.count} q</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="pb-domains">
              <div className="pb-eyebrow">Domains</div>
              <div
                className="pb-dlist"
                role="tablist"
                aria-label={`${sectionLabel} domains`}
                ref={railListRef}
                onKeyDown={onDomainKeyDown}
              >
                {categories.map((cat) => {
                  const on = cat.domain === selectedDomain;
                  const tally = domainTallies.get(cat.domain) || { strongCount: 0, focusCount: 0 };
                  const dm = masteryByKey.get(`domain:${cat.domain}`) || EMPTY_MASTERY;
                  const matches = searching ? (searchGroups.find(g => g.cat.domain === cat.domain)?.skills.length || 0) : null;
                  const parts = [];
                  if (progressHydrated && dm.practiced > 0) {
                    if (tally.strongCount > 0) parts.push({ id: 'strong', tone: 'strong', text: `${tally.strongCount} strong` });
                    if (tally.focusCount > 0) parts.push({ id: 'focus', tone: 'focus', text: `${tally.focusCount} focus` });
                    if (parts.length === 0) parts.push({ id: 'learning', tone: 'learning', text: `${dm.practiced} practiced` });
                  }
                  return (
                    <button
                      type="button"
                      role="tab"
                      key={cat.domain}
                      id={`pb-dtab-${cat.domain}`}
                      data-pb-domain={cat.domain}
                      aria-selected={on}
                      aria-controls="pb-pane"
                      tabIndex={on ? 0 : -1}
                      className={`pb-drow${on ? ' is-on' : ''}`}
                      onClick={() => selectDomain(cat.domain)}
                    >
                      <span className="pb-drow-top">
                        <span className="pb-drow-name">{cat.label}</span>
                        <span className="pb-drow-count">{matches != null ? `· ${matches}` : fmt(cat.total)}</span>
                      </span>
                      {parts.length > 0 && (
                        <span className="pb-drow-tally">
                          {parts.map((p, i) => (
                            <React.Fragment key={p.id}>
                              {i > 0 ? ' · ' : null}
                              <span className={`is-${p.tone}`}>{p.text}</span>
                            </React.Fragment>
                          ))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pb-launch">
              <button type="button" className="pb-lrow is-primary" onClick={launchTodaysMix}>
                <span className="pb-lrow-icon"><Bolt /></span>
                <span className="pb-lrow-k">Start practice</span>
                <span className="pb-lrow-m">{DRILL_COUNT_PER_DOMAIN} q · 25 min</span>
              </button>
              <button type="button" className="pb-lrow" onClick={launchQuickDrill}>
                <span className="pb-lrow-k">Quick drill</span>
                <span className="pb-lrow-m">{DRILL_COUNT_SPRINT} q · 12 min</span>
              </button>
              <button type="button" className="pb-lrow" onClick={openBuilder}>
                <span className="pb-lrow-k">Build a custom drill</span>
              </button>
            </div>
          </aside>

          {/* ── Pane: the selected domain's topics, or the search results ───── */}
          <section
            className="pb-pane"
            id="pb-pane"
            ref={paneRef}
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby={searching ? 'pb-search-heading' : `pb-dtab-${selectedDomain}`}
          >
            <div className="pb-eyebrow">Topics</div>

            {searching ? (
              // Zero matches: the message below IS the heading (it carries the
              // aria-live announcement), so the copy is never said twice.
              searchMatchCount > 0 && (
                <div className="pb-phead">
                  <h2 className="pb-ptitle" id="pb-search-heading" aria-live="polite">
                    {`${searchMatchCount} topic${searchMatchCount === 1 ? '' : 's'} matching “${trimmedQuery}”`}
                  </h2>
                </div>
              )
            ) : (
              <div className="pb-phead">
                <div className="pb-phead-main">
                  <h2 className="pb-ptitle">{selectedCat?.label || sectionLabel}</h2>
                  <div className="pb-pmeta">{fmt(selectedCat?.total || 0)} questions · {paneRows.length} topics</div>
                </div>
                {selectedCat && (
                  <button type="button" className="pb-pbtn" onClick={() => practiceDomain(selectedCat)}>
                    Practice this domain <Arrow />
                  </button>
                )}
              </div>
            )}

            <div className="pb-filters">
              <div className="pb-fgroup" role="radiogroup" aria-label="Difficulty">
                <span className="pb-fgroup-label" aria-hidden="true">Difficulty</span>
                {DIFFICULTY_CHIPS.map(({ key, label }) => {
                  const on = difficulty === key;
                  const n = chipCounts.byDifficulty[key];
                  const enabled = on || n > 0;
                  const chips = DIFFICULTY_CHIPS.map(c => ({ key: c.key, enabled: c.key === difficulty || chipCounts.byDifficulty[c.key] > 0 }));
                  return (
                    <button
                      type="button"
                      key={key}
                      role="radio"
                      aria-checked={on}
                      tabIndex={on ? 0 : -1}
                      disabled={!enabled}
                      className={`pb-fchip${on ? ' is-on' : ''}`}
                      onClick={() => setDifficulty(key)}
                      onKeyDown={(e) => onChipKeyDown(e, chips, difficulty, setDifficulty)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <div className="pb-fgroup" role="radiogroup" aria-label="Show">
                <span className="pb-fgroup-label" aria-hidden="true">Show</span>
                {PANE_POOL_CHIPS.map(({ key, label }) => {
                  const on = pool === key;
                  const n = chipCounts.byPool[key];
                  const enabled = on || n > 0;
                  const chips = PANE_POOL_CHIPS.map(c => ({ key: c.key, enabled: c.key === pool || chipCounts.byPool[c.key] > 0 }));
                  return (
                    <button
                      type="button"
                      key={key}
                      role="radio"
                      aria-checked={on}
                      tabIndex={on ? 0 : -1}
                      disabled={!enabled}
                      className={`pb-fchip${on ? ' is-on' : ''}`}
                      onClick={() => setPool(key)}
                      onKeyDown={(e) => onChipKeyDown(e, chips, pool, setPool)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {progressHydrated && sectionProgress.practiced === 0 && !searching && (
              <p className="pb-firstvisit">No history yet. Start practice picks {DRILL_COUNT_PER_DOMAIN} questions for you.</p>
            )}

            {searching ? (
              searchMatchCount === 0 ? (
                <p className="pb-nomatch" id="pb-search-heading" aria-live="polite">
                  No topic matches “{trimmedQuery}”. Try “linear”, “circles”, or “evidence”.
                </p>
              ) : (
                <div className="pb-rows">
                  {searchGroups.map(({ cat, skills }) => (
                    <div className="pb-sgroup" key={cat.domain}>
                      <div className="pb-sgroup-head">{cat.label}</div>
                      {skills.map(renderTopicRow)}
                    </div>
                  ))}
                </div>
              )
            ) : allZero ? (
              <div className="pb-empty">
                <p className="pb-empty-copy">{emptyCopy}</p>
                <button type="button" className="pb-empty-clear" onClick={clearFilters}>Clear filters</button>
              </div>
            ) : (
              <div className="pb-rows">
                {paneRows.map(renderTopicRow)}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Phone-only resume bar — sits above the bottom tab bar */}
      {showResume && (
        <div className="pb-resume-bar">
          <span className="pb-resume-bar-text">{resumeLabel}</span>
          {typeof onDiscardDrill === 'function' && (
            <button type="button" className="pb-resume-bar-discard" onClick={onDiscardDrill}>Discard</button>
          )}
          <button type="button" className="pb-resume-bar-go" onClick={onResumeDrill}>Continue</button>
        </div>
      )}

      {/* Custom drill builder — one-click-away modal (reuses the existing builder) */}
      {builderOpen && builderDomain && (
        <div className="pb-modal-backdrop" role="presentation" onClick={() => setBuilderOpen(false)}>
          <div className="pb-modal" role="dialog" aria-modal="true" aria-label="Custom drill builder" ref={builderModalRef} onClick={(e) => e.stopPropagation()}>
            <div className="pb-builder">
              <div className="pb-builder-head">
                <div className="pb-builder-title">Build a custom drill</div>
                <button type="button" className="pb-builder-close" aria-label="Close drill builder" onClick={() => setBuilderOpen(false)}>
                  <Close />
                </button>
              </div>

              <div className="pb-builder-row">
                <div className="pb-builder-label">Domain</div>
                <div className="pb-chips">
                  {categories.map((cat, i) => {
                    const on = i === builderDomainIdx;
                    return (
                      <button
                        type="button"
                        key={cat.domain}
                        className={`pb-chip${on ? ' is-on' : ' is-off'}`}
                        aria-pressed={on}
                        onClick={() => pickBuilderDomain(i)}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pb-builder-row">
                <div className="pb-builder-label">Topics</div>
                <div className="pb-chips">
                  <button
                    type="button"
                    className={`pb-chip${allTopicsSelected ? ' is-on' : ' is-off'}`}
                    aria-pressed={allTopicsSelected}
                    onClick={() => setBuilderTopics(allTopicSlugs(builderDomain))}
                  >
                    All topics
                  </button>
                  {builderDomain.cbSkills.map((skill) => {
                    const on = builderTopics.has(skill.slug);
                    const count = section === 'math' ? skill.total : skill.count;
                    return (
                      <button
                        type="button"
                        key={skill.slug}
                        className={`pb-chip${on ? ' is-on' : ' is-off'}`}
                        aria-pressed={on}
                        onClick={() => toggleBuilderTopic(skill.slug)}
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
                  disabled={builderAvailable === 0}
                  onClick={launchCustomDrill}
                >
                  {builderAvailable === 0
                    ? 'No questions match'
                    : <>Start {Math.min(builderCount, builderAvailable)} of {builderAvailable} <Arrow size={16} /></>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeBank;
