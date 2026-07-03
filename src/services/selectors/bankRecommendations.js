/**
 * bankRecommendations.js — performance-driven "guided entry" for the Practice
 * Bank. Turns the student's own signals (bank misses, last-test diagnosis,
 * untouched question types) into a tiny ranked list of "start here" drills,
 * plus a weighted "smart mix" assembler. Pure + deterministic given inputs so
 * the same state always yields the same recommendations (no Math.random here —
 * the caller pre-shuffles pools where variety is wanted).
 *
 * Shapes (all supplied by PracticeBank):
 *   categories   — [{ domain, label, total, qids, cbSkills: [{ slug, label,
 *                   total|count, patterns: [{ slug, label, count, qids }],
 *                   qids }] }] (already section-scoped: math OR R&W)
 *   bankPractice — { [qid]: { c: lastCorrect, n: attempts, t: isoTimestamp } }
 *   weaknesses   — raw `studyPlan.weaknesses` array (both sections, may be null)
 */

import { getWeaknessesBySection } from './weaknesses';
import { formatPatternLabel } from './missedPatternLabel';

/** Simple-spacing horizon: a miss older than this is due for re-serving. */
const SPACING_MS = 20 * 60 * 60 * 1000; // 20 hours
const FIX_MISSES_MIN = 4;      // don't nag until there's a real backlog
const FIX_MISSES_CAP = 10;     // qids served per fix-misses drill
const WEAKNESS_MIN = 6;        // a weakness pool needs this many to be worth it
const WEAKNESS_CAP = 12;
const NEW_TERRITORY_MIN = 6;   // skip micro-types nobody would drill on their own
const REC_COUNT_CAP = 10;      // every rec's `count` (drill size) tops out here

const MATH_DOMAINS = new Set(['algebra', 'advanced-math', 'problem-solving', 'geometry']);

/**
 * Infer which bank section a set of categories belongs to. The selector is
 * handed one section's categories at a time; this lets it pick the matching
 * slice of the cross-section `weaknesses` array without an explicit param.
 *
 * @param {Array<{domain: string}>} categories
 * @returns {'math'|'rw'}
 */
function inferSection(categories) {
  const first = Array.isArray(categories) ? categories[0] : null;
  if (!first) return 'math';
  return MATH_DOMAINS.has(first.domain) ? 'math' : 'rw';
}

/** Parsed epoch ms of a practice record's timestamp, or null when absent/bad. */
function recTime(rec) {
  if (!rec || rec.t == null) return null;
  const tv = Date.parse(rec.t);
  return Number.isFinite(tv) ? tv : null;
}

/** A miss with no timestamp, or one older than the spacing horizon, is "aged". */
function isAged(rec, now) {
  const tv = recTime(rec);
  if (tv === null) return true;
  return now - tv > SPACING_MS;
}

/**
 * Index every question-type pattern and every cb-skill topic in the section
 * to its question-id list, so weakness matching is a couple of map lookups
 * instead of a re-walk of the category tree per weakness.
 *
 * @param {Array} categories
 * @returns {{ patternQids: Map<string, Array>, skillQids: Map<string, Array> }}
 */
function buildLookups(categories) {
  const patternQids = new Map();
  const skillQids = new Map();
  for (const cat of Array.isArray(categories) ? categories : []) {
    for (const skill of cat.cbSkills || []) {
      if (skill.slug != null) skillQids.set(skill.slug, skill.qids || []);
      for (const p of skill.patterns || []) {
        if (p.slug != null) patternQids.set(p.slug, p.qids || []);
      }
    }
  }
  return { patternQids, skillQids };
}

/** Union of all unique drillable qids across the section (domain qid lists). */
function sectionQidList(categories) {
  const out = [];
  const seen = new Set();
  for (const cat of Array.isArray(categories) ? categories : []) {
    for (const id of cat.qids || []) {
      const k = String(id);
      if (!seen.has(k)) { seen.add(k); out.push(id); }
    }
  }
  return out;
}

/**
 * fix-misses — re-serve questions the student got wrong in bank practice,
 * favoring ones that have "cooled off" (older than the 20h spacing horizon)
 * so re-testing captures the spaced-retrieval benefit.
 */
function buildFixMisses(categories, bp, now) {
  const misses = sectionQidList(categories).filter(id => bp[String(id)]?.c === false);
  if (misses.length < FIX_MISSES_MIN) return null;

  const aged = misses.filter(id => isAged(bp[String(id)], now));
  const pool = aged.length >= FIX_MISSES_MIN ? aged : misses;

  // Most-recent-first: freshest miss the student remembers wrestling with leads.
  const sorted = [...pool].sort((a, b) => {
    const va = recTime(bp[String(a)]);
    const vb = recTime(bp[String(b)]);
    return (vb === null ? -Infinity : vb) - (va === null ? -Infinity : va);
  });

  const qids = sorted.slice(0, FIX_MISSES_CAP);
  return {
    kind: 'fix-misses',
    title: 'Fix your misses',
    reason: `${pool.length} questions you answered wrong in practice`,
    qids,
    count: Math.min(REC_COUNT_CAP, qids.length),
  };
}

/**
 * test-weakness — drill a skill the last practice test flagged. Prefers an
 * exact question-type pool built from the weakness's missed patterns, falling
 * back to the whole cb-skill topic. Excludes anything already in fix-misses.
 */
function buildTestWeakness(categories, weaknesses, lookups, excludeSet) {
  const section = inferSection(categories);
  const sectionWeaknesses = getWeaknessesBySection({ weaknesses: Array.isArray(weaknesses) ? weaknesses : [] })[section] || [];

  for (const w of sectionWeaknesses.slice(0, 3)) {
    // (a) union of exact question-type qids from the weakness's missed patterns
    let pool = [];
    const seen = new Set();
    for (const slug of w.missedPatterns || []) {
      const ids = lookups.patternQids.get(slug);
      if (!ids) continue;
      for (const id of ids) {
        const k = String(id);
        if (!seen.has(k)) { seen.add(k); pool.push(id); }
      }
    }
    // (b) not enough exact matches → fall back to the whole cb-skill topic
    if (pool.length < WEAKNESS_MIN) {
      const skillIds = lookups.skillQids.get(w.skillId);
      if (skillIds && skillIds.length) pool = [...skillIds];
    }
    if (pool.length < WEAKNESS_MIN) continue;

    const served = pool.filter(id => !excludeSet.has(String(id))).slice(0, WEAKNESS_CAP);
    if (served.length === 0) continue;

    const accuracy = w.accuracy;
    return {
      kind: 'test-weakness',
      title: w.skill || formatPatternLabel(w.skillId) || 'From your last test',
      reason: Number.isFinite(accuracy)
        ? `${accuracy}% on your last test`
        : 'Flagged in your last test diagnosis',
      qids: served,
      count: Math.min(REC_COUNT_CAP, served.length),
    };
  }
  return null;
}

/**
 * new-territory — the biggest question type the student has never touched.
 * Points a curious student at unexplored ground with the most depth behind it.
 */
function buildNewTerritory(categories, bp) {
  let best = null;
  for (const cat of Array.isArray(categories) ? categories : []) {
    for (const skill of cat.cbSkills || []) {
      for (const p of skill.patterns || []) {
        const count = p.count || 0;
        if (count < NEW_TERRITORY_MIN) continue;
        const qids = p.qids || [];
        if (qids.length === 0) continue;
        const unseen = qids.every(id => !bp[String(id)]);
        if (!unseen) continue;
        if (!best || count > best.count) {
          best = { label: p.label, count, qids };
        }
      }
    }
  }
  if (!best) return null;
  return {
    kind: 'new-territory',
    title: best.label,
    reason: `${best.count} questions · you haven't tried this type yet`,
    qids: best.qids,
    count: Math.min(REC_COUNT_CAP, best.qids.length),
  };
}

/**
 * Build 0-3 ranked "start here" recommendations for one bank section, at most
 * one per kind, ordered fix-misses → test-weakness → new-territory. Each rec is
 * `{ kind, title, reason, qids, count }` where `count = min(10, qids.length)`.
 * Reason lines only ever state claims derivable from the data passed in.
 *
 * Use to render the Practice Bank "For you" strip and to seed the smart mix.
 *
 * @param {object}   args
 * @param {Array}    args.categories   section-scoped category tree
 * @param {object}   [args.bankPractice] per-question practice map
 * @param {Array}    [args.weaknesses]   raw cross-section studyPlan.weaknesses
 * @param {number}   [args.now]          epoch ms (defaults to Date.now())
 * @returns {Array<{kind: string, title: string, reason: string, qids: Array, count: number}>}
 */
export function buildBankRecommendations({ categories, bankPractice, weaknesses, now } = {}) {
  const cats = Array.isArray(categories) ? categories : [];
  if (cats.length === 0) return [];
  const bp = bankPractice || {};
  const clock = Number.isFinite(now) ? now : Date.now();
  const lookups = buildLookups(cats);

  const recs = [];

  const fixMisses = buildFixMisses(cats, bp, clock);
  if (fixMisses) recs.push(fixMisses);

  const excludeSet = new Set((fixMisses?.qids || []).map(String));
  const testWeakness = buildTestWeakness(cats, weaknesses, lookups, excludeSet);
  if (testWeakness) recs.push(testWeakness);

  const newTerritory = buildNewTerritory(cats, bp);
  if (newTerritory) recs.push(newTerritory);

  return recs;
}

/**
 * Assemble a weighted "smart mix" of exactly `size` question ids (fewer only
 * when the whole bank is smaller): ~40% from weaknessQids, ~30% missedQids,
 * ~30% unseenQids, each bucket consumed in the order given (the caller
 * pre-shuffles for variety), skipping duplicates, with any shortfall backfilled
 * from allQids. Weakness gets the rounding remainder so the mix still fills.
 *
 * @param {object} args
 * @param {number} args.size          target id count
 * @param {Array}  [args.weaknessQids] ~40% bucket (pre-shuffled)
 * @param {Array}  [args.missedQids]   ~30% bucket (pre-shuffled)
 * @param {Array}  [args.unseenQids]   ~30% bucket (pre-shuffled)
 * @param {Array}  [args.allQids]      backfill pool (pre-shuffled)
 * @returns {Array} up to `size` unique ids
 */
export function assembleSmartMix({ size, weaknessQids, missedQids, unseenQids, allQids } = {}) {
  const s = Number.isFinite(size) && size > 0 ? Math.floor(size) : 0;
  if (s === 0) return [];

  const chosen = [];
  const seen = new Set();
  const drawFrom = (arr, limit) => {
    const list = Array.isArray(arr) ? arr : [];
    let added = 0;
    for (const id of list) {
      if (added >= limit || chosen.length >= s) break;
      const k = String(id);
      if (seen.has(k)) continue;
      seen.add(k);
      chosen.push(id);
      added += 1;
    }
  };

  const nMissed = Math.round(s * 0.3);
  const nUnseen = Math.round(s * 0.3);
  const nWeakness = s - nMissed - nUnseen; // remainder (~40%)

  drawFrom(weaknessQids, nWeakness);
  drawFrom(missedQids, nMissed);
  drawFrom(unseenQids, nUnseen);
  drawFrom(allQids, s); // backfill any shortfall; chosen.length >= s guards the cap

  return chosen.slice(0, s);
}
