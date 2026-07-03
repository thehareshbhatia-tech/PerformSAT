/**
 * Pure helpers for the "flag a question, review it later" store.
 *
 * The store is a MAP field on progress/{uid}: `flaggedQuestions[flagKey] = entry`.
 * Keeping it a keyed map (rather than a Firestore subcollection) means it rides
 * the EXISTING progress onSnapshot listener, needs no firestore.rules change,
 * de-dups for free (re-flagging the same question overwrites its own key), and
 * supports a true unflag via updateDoc + deleteField() (`update` is allowed on
 * the progress doc, unlike deletes on its subcollections — see the reset-test
 * gotcha). This module is pure so it can be unit-tested in isolation; the
 * Firestore I/O lives in useProgress (flagQuestion / unflagQuestion / batch).
 *
 * A flag entry shape:
 *   {
 *     questionId, section: 'math'|'rw', source, skillId, domain,
 *     missedPatterns: string[]|null,   // exact-pattern routing seeds (Tier 1)
 *     testId, testLabel, moduleIndex, questionIndex,   // when flagged from a test
 *     snippet,                          // short stem text for the review list
 *     flaggedAt,                        // ISO string
 *   }
 */

/** Max characters of stem text kept for the review-surface snippet. */
export const SNIPPET_MAX = 90;

/**
 * Firestore map keys may not contain . $ [ ] / # * ~ (or whitespace). Collapse
 * any of those to underscores so a question id is always a legal key segment.
 * @param {*} s
 * @returns {string}
 */
const sanitizeKeyPart = (s) => String(s ?? '').replace(/[.$/[\]#*~\s]+/g, '_').slice(0, 120) || 'x';

/**
 * Deterministic de-dup key for a flag entry. Test items reuse `id` across
 * modules (the id counter restarts at each module), so test flags key on
 * testId + moduleIndex + questionId. Bank / drill items carry globally-unique
 * ids, so they key on questionId alone — the SAME bank question flagged from
 * any drill shell collapses to one entry.
 * @param {object} entry
 * @returns {string|null}
 */
export function flagKeyFor(entry) {
  if (!entry || entry.questionId == null) return null;
  const qid = sanitizeKeyPart(entry.questionId);
  if (entry.testId != null && entry.testId !== '') {
    return `t_${sanitizeKeyPart(entry.testId)}_${entry.moduleIndex ?? 'x'}_${qid}`;
  }
  return `q_${qid}`;
}

/**
 * Trim a stem string down to a display snippet (whitespace-collapsed + capped).
 * @param {*} text
 * @returns {string|null}
 */
export function snippetOf(text) {
  if (!text || typeof text !== 'string') return null;
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) return null;
  return clean.length > SNIPPET_MAX ? `${clean.slice(0, SNIPPET_MAX).trimEnd()}…` : clean;
}

/**
 * Normalize raw flag context into a stored entry (fills defaults, snippet,
 * flaggedAt) and its de-dup key.
 * @param {object} raw
 * @param {number} [now=Date.now()]
 * @returns {{ key: string|null, entry: object }}
 */
export function buildFlagEntry(raw = {}, now = Date.now()) {
  const questionId = raw.questionId != null ? String(raw.questionId) : null;
  const section = (raw.section === 'rw' || raw.section === 'reading-writing') ? 'rw' : 'math';
  const missedPatterns = Array.isArray(raw.missedPatterns) && raw.missedPatterns.length
    ? raw.missedPatterns.filter(Boolean).slice(0, 6)
    : null;
  const entry = {
    questionId,
    section,
    source: raw.source || null,
    skillId: raw.skillId || null,
    domain: raw.domain || null,
    missedPatterns: missedPatterns && missedPatterns.length ? missedPatterns : null,
    testId: raw.testId != null && raw.testId !== '' ? String(raw.testId) : null,
    testLabel: raw.testLabel || null,
    moduleIndex: typeof raw.moduleIndex === 'number' ? raw.moduleIndex : null,
    questionIndex: typeof raw.questionIndex === 'number' ? raw.questionIndex : null,
    snippet: snippetOf(raw.snippet),
    flaggedAt: raw.flaggedAt || new Date(now).toISOString(),
  };
  return { key: flagKeyFor(entry), entry };
}

/**
 * Build a de-duped MAP of flag entries from a completed test's marked-for-review
 * refs. Returns { [key]: entry } so it can be written in a single batch and
 * cannot introduce duplicate keys.
 * @param {Array} refs - [{ questionId|id, section, moduleIndex, questionIndex, snippet, skills, missedPatterns }]
 * @param {{ testId?: *, testLabel?: string }} [ctx]
 * @param {number} [now=Date.now()]
 * @returns {Object.<string, object>}
 */
export function buildTestFlagEntries(refs, ctx = {}, now = Date.now()) {
  const out = {};
  if (!Array.isArray(refs)) return out;
  refs.forEach((r) => {
    const { key, entry } = buildFlagEntry({
      questionId: r.questionId ?? r.id,
      section: r.section,
      source: ctx.testId != null ? `test::${ctx.testId}` : 'test',
      skillId: Array.isArray(r.skills) ? r.skills[0] : (r.skillId || null),
      missedPatterns: r.missedPatterns || null,
      domain: r.domain || null,
      testId: ctx.testId,
      testLabel: ctx.testLabel,
      moduleIndex: r.moduleIndex,
      questionIndex: r.questionIndex,
      snippet: r.snippet,
      flaggedAt: r.flaggedAt,
    }, now);
    if (key) out[key] = entry;
  });
  return out;
}

/**
 * Flag map → array of { key, ...entry }, NEWEST FIRST.
 * @param {Object.<string, object>} map
 * @returns {Array}
 */
export function flaggedList(map) {
  if (!map || typeof map !== 'object') return [];
  return Object.entries(map)
    .map(([key, entry]) => ({ key, ...entry }))
    .sort((a, b) => new Date(b.flaggedAt || 0) - new Date(a.flaggedAt || 0));
}

/**
 * Number of flagged questions in the store.
 * @param {Object.<string, object>} map
 * @returns {number}
 */
export function flaggedCount(map) {
  return map && typeof map === 'object' ? Object.keys(map).length : 0;
}

/**
 * Split the flag store into { math: [...], rw: [...] } (each newest-first).
 * @param {Object.<string, object>} map
 * @returns {{ math: Array, rw: Array }}
 */
export function groupFlaggedBySection(map) {
  const list = flaggedList(map);
  return {
    math: list.filter((f) => f.section !== 'rw'),
    rw: list.filter((f) => f.section === 'rw'),
  };
}

/**
 * Is the given question (built entry or a raw key) currently flagged?
 * @param {Object.<string, object>} map
 * @param {object|string} entryOrKey
 * @returns {boolean}
 */
export function isFlagged(map, entryOrKey) {
  if (!map || typeof map !== 'object') return false;
  const key = typeof entryOrKey === 'string' ? entryOrKey : flagKeyFor(entryOrKey);
  return !!(key && Object.prototype.hasOwnProperty.call(map, key));
}

/**
 * Collapse flagged items into weakSkills-shaped routing seeds for the 3-tier
 * drill cascade: group by skillId and UNION each skill's missedPatterns so the
 * re-drill fires Tier 1 (exact SAT Pattern) rather than the SKILL_ALIAS_MAP-only
 * Tier 3 (see the skill-alias-routing gotcha). Feed the result straight into
 * getTargetedWeaknessSet({ weakSkills }). Each seed also carries the raw
 * questionIds it came from, as a last-resort routing fallback.
 * @param {Array} flags - flaggedList()-shaped items
 * @returns {Array<{ skillId, domain, missedPatterns, questionIds }>}
 */
export function toDrillSeeds(flags) {
  const bySkill = new Map();
  (flags || []).forEach((f) => {
    const skillId = f.skillId || null;
    const k = skillId || `__q_${f.questionId}`;
    if (!bySkill.has(k)) {
      bySkill.set(k, { skillId, domain: f.domain || null, missedPatterns: new Set(), questionIds: [] });
    }
    const seed = bySkill.get(k);
    (f.missedPatterns || []).forEach((p) => seed.missedPatterns.add(p));
    if (f.questionId) seed.questionIds.push(f.questionId);
    if (!seed.domain && f.domain) seed.domain = f.domain;
  });
  return Array.from(bySkill.values()).map((s) => ({
    skillId: s.skillId,
    domain: s.domain,
    missedPatterns: s.missedPatterns.size ? Array.from(s.missedPatterns) : undefined,
    questionIds: s.questionIds,
  }));
}
