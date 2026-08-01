/**
 * Canonical raw-correct → scaled-score conversion tables for the digital SAT.
 *
 * This is the SOURCE OF TRUTH for the REPORTED score. A student's headline
 * section score (200-800) is `rawToScaled(section, rawCorrect, total, route)` —
 * a deterministic, per-section, route-aware lookup anchored to the College
 * Board Bluebook practice-test curves. The composite (400-1600) is the sum of
 * the two section scores. IRT theta is retained elsewhere ONLY for diagnostics
 * (standard error, error analysis); it no longer drives the number students see.
 *
 * Why a table and not IRT theta: the previous engine mapped theta→scaled via a
 * curve whose top was so compressed (θ 3.0→790, 4.0→800) that 0, 1, AND 2 wrong
 * out of 44 all pegged at 800. A raw-count table makes "2 wrong → 800"
 * mathematically impossible (42/44 → 780) and lets a student verify their score
 * by raw count, exactly like Bluebook.
 *
 * Route: the digital SAT is adaptive on Module 2. A student routed into the
 * HARDER Module 2 (M1 accuracy ≥ 60%) can reach 800; one routed into the EASIER
 * Module 2 is capped well below 800 (~600) no matter how many they answer
 * correctly, because the easy module lacks the difficulty to demonstrate high
 * ability. Both sections route independently (2026-07: R&W easy variants ship
 * for all 12 tests), so each section's easy column is live.
 *
 * Tables key off (section, totalInSection, rawCorrect, route) ONLY. Per-item
 * difficulty/band metadata feeds the IRT path, not this one.
 *
 * Invariants (asserted by assertTableInvariants(), pinned in __tests__):
 *   - length === totalInSection + 1 (one row per raw count, 0..total)
 *   - every value a multiple of 10, within [200, 800]
 *   - monotonic non-decreasing
 *   - floor 200 at raw 0
 *   - hard route reaches 800 at a perfect raw; easy route capped (≤ 600)
 *   - easy[i] ≤ hard[i] at every raw (routing into the easier module can never
 *     score higher at the same raw count)
 *   - hard[total - 2] (2 wrong) < 800  (the bug this module fixes)
 */

export const MATH_TOTAL = 44;
export const RW_TOTAL = 54;

export const SECTION_MIN = 200;
export const SECTION_MAX = 800;
export const COMPOSITE_MIN = 400;
export const COMPOSITE_MAX = 1600;

// ── MATH (44 scored questions) ──────────────────────────────────────────────
// Indexed by raw-correct (0..44). Bluebook-anchored hard curve: 44→800,
// 43→790, 42→780 (2 wrong is NOT 800), steepening through the top.
const MATH_HARD = [
  200, 220, 240, 250, 270, 280, 300, 310, 320, 340, 350, // 0-10
  360, 370, 380, 390, 410, 420, 430, 450, 460, 470,       // 11-20
  490, 500, 520, 530, 550, 560, 580, 590, 600, 620,       // 21-30
  630, 640, 650, 670, 680, 690, 700, 720, 730, 750,       // 31-40
  760, 780, 790, 800,                                     // 41-44
];

// Easy Module-2 route: mirrors the hard curve through raw 17 (where the two
// legitimately coincide at the bottom), then compresses to the 600 cap. A
// perfect 44/44 on the easy route tops out at 600.
const MATH_EASY = [
  200, 220, 240, 250, 270, 280, 300, 310, 320, 340, 350, // 0-10
  360, 370, 380, 390, 410, 420, 430, 430, 440, 440,       // 11-20
  450, 460, 460, 470, 480, 480, 490, 490, 500, 510,       // 21-30
  510, 520, 530, 530, 540, 540, 550, 560, 560, 570,       // 31-40
  580, 580, 590, 600,                                     // 41-44
];

// ── READING & WRITING (54 scored questions) ─────────────────────────────────
// Bluebook-anchored hard curve: 54→800, 53→790, 52→780 (2 wrong is NOT 800).
const RW_HARD = [
  200, 210, 220, 230, 240, 250, 260, 270, 290, 300,       // 0-9
  310, 320, 330, 340, 350, 360, 370, 380, 390, 400,       // 10-19
  410, 420, 430, 440, 450, 460, 470, 480, 490, 500,       // 20-29
  510, 520, 530, 540, 550, 560, 570, 580, 590, 600,       // 30-39
  610, 620, 630, 650, 660, 670, 680, 700, 710, 720,       // 40-49
  740, 760, 780, 790, 800,                                // 50-54
];

// R&W easy Module-2 route (live since 2026-07). Held ≤ the hard route at every
// raw and capped at 600 — the easy module can't demonstrate top-end ability.
const RW_EASY = [
  200, 210, 220, 230, 240, 250, 260, 270, 290, 300,       // 0-9
  310, 320, 330, 340, 350, 360, 370, 380, 390, 400,       // 10-19
  410, 420, 430, 430, 440, 450, 460, 460, 470, 470,       // 20-29
  480, 490, 490, 500, 500, 510, 520, 520, 530, 530,       // 30-39
  540, 550, 550, 560, 560, 570, 570, 580, 580, 590,       // 40-49
  590, 590, 600, 600, 600,                                // 50-54
];

/**
 * section → { hard, easy } flat lookup arrays (scaled value indexed by raw).
 * Accepts both naming conventions in the codebase: scoreTest tags math modules
 * 'math'/'reading-writing' (and a section-less math test collapses to
 * 'default'); the diagnostic engine tags items 'math'/'rw'.
 */
export const SCALE_TABLES = {
  math: { hard: MATH_HARD, easy: MATH_EASY },
  'reading-writing': { hard: RW_HARD, easy: RW_EASY },
};

const MATH_KEYS = new Set(['math', 'default']);

/** Normalize the many section spellings to a SCALE_TABLES key. */
function normalizeSection(section) {
  if (MATH_KEYS.has(section)) return 'math';
  if (section === 'rw' || section === 'reading-writing') return 'reading-writing';
  return 'math'; // safe default — math is the most common single-section case
}

/**
 * Map a section's raw-correct count to its 200-800 scaled score via the
 * route-aware lookup table. THIS is the reported per-section score.
 *
 * For a section whose total differs from the canonical 44 (Math) / 54 (R&W) —
 * e.g. a partial section or a future form — the raw count is projected
 * proportionally onto the canonical axis and linearly interpolated, so the
 * table stays authoritative without ever indexing out of range.
 *
 * @param {'math'|'reading-writing'|'rw'|'default'} section
 * @param {number} rawCorrect       items answered correctly in the section
 * @param {number} totalInSection   items scored in the section (44 / 54 canonically)
 * @param {'easy'|'hard'} [route='hard']  which Module 2 the student was served
 * @returns {number} scaled score — a multiple of 10, clamped to [200, 800]
 */
export function rawToScaled(section, rawCorrect, totalInSection, route = 'hard') {
  const bySection = SCALE_TABLES[normalizeSection(section)];
  const table = bySection[route === 'easy' ? 'easy' : 'hard'];
  const canonicalTotal = table.length - 1; // 44 or 54

  const raw = Number.isFinite(rawCorrect) ? Math.max(0, rawCorrect) : 0;
  const total = Number.isFinite(totalInSection) && totalInSection > 0
    ? totalInSection
    : canonicalTotal;

  let idx = total === canonicalTotal ? raw : (raw / total) * canonicalTotal;
  idx = Math.max(0, Math.min(canonicalTotal, idx));

  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  const scaled = lo === hi
    ? table[lo]
    : table[lo] + (idx - lo) * (table[hi] - table[lo]);

  return Math.min(SECTION_MAX, Math.max(SECTION_MIN, Math.round(scaled / 10) * 10));
}

/**
 * Clamp/snap a composite (400-1600) or section (200-800) value onto the valid
 * SAT grid (multiple of 10, within bounds). Shared by projection/range surfaces
 * so an "impossible" number (off-grid or out-of-band) can never be displayed.
 *
 * @param {number} n
 * @param {boolean} isComposite  true → [400,1600], false → [200,800]
 * @returns {number}
 */
export function snapToScale(n, isComposite) {
  const min = isComposite ? COMPOSITE_MIN : SECTION_MIN;
  const max = isComposite ? COMPOSITE_MAX : SECTION_MAX;
  return Math.min(max, Math.max(min, Math.round(n / 10) * 10));
}

/**
 * Validate every table invariant. Throws on the first violation. Used by the
 * unit tests; cheap enough to call at module init in dev if desired.
 *
 * @returns {true}
 */
export function assertTableInvariants() {
  for (const [section, routes] of Object.entries(SCALE_TABLES)) {
    const canonicalTotal = section === 'math' ? MATH_TOTAL : RW_TOTAL;
    const { hard, easy } = routes;
    [['hard', hard], ['easy', easy]].forEach(([routeName, table]) => {
      if (table.length !== canonicalTotal + 1) {
        throw new Error(`${section}.${routeName}: length ${table.length} !== ${canonicalTotal + 1}`);
      }
      table.forEach((v, i) => {
        if (v % 10 !== 0) throw new Error(`${section}.${routeName}[${i}] = ${v} not a multiple of 10`);
        if (v < SECTION_MIN || v > SECTION_MAX) throw new Error(`${section}.${routeName}[${i}] = ${v} out of [200,800]`);
        if (i > 0 && v < table[i - 1]) throw new Error(`${section}.${routeName}[${i}] = ${v} < prev ${table[i - 1]} (not monotonic)`);
      });
      if (table[0] !== SECTION_MIN) throw new Error(`${section}.${routeName}[0] = ${table[0]} !== 200`);
    });
    if (hard[canonicalTotal] !== SECTION_MAX) throw new Error(`${section}.hard perfect = ${hard[canonicalTotal]} !== 800`);
    const easyMax = Math.max(...easy);
    if (easyMax > 600) throw new Error(`${section}.easy max ${easyMax} > 600 (cap)`);
    easy.forEach((v, i) => {
      if (v > hard[i]) throw new Error(`${section}: easy[${i}] ${v} > hard[${i}] ${hard[i]} (cross-route inversion)`);
    });
    if (hard[canonicalTotal - 2] >= SECTION_MAX) {
      throw new Error(`${section}.hard 2-wrong = ${hard[canonicalTotal - 2]} should be < 800`);
    }
  }
  return true;
}
