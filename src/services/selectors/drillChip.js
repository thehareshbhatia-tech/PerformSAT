/**
 * drillChip selector — decides whether the "Practicing: <Pattern>" chip
 * should surface in a drill shell, and produces the label + slug when it
 * does.
 *
 * Precision contract: chip-shown ≡ Tier-1 fired ≡ exact-pattern routing
 * was viable. Achieved by gating on the bank pool actually meeting
 * `DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN`. Without this gate, the chip
 * would mislead — a weakness with `missedPatterns: ['x']` but a sub-threshold
 * pool would render "Practicing: X" while Tier 2 or Tier 3 actually
 * served the drill.
 *
 * Used by `AssignedPracticeShell`. (AdaptivePracticeShell gets precision
 * for free — `buildDomainAdaptiveQueueSeed` only attaches missedPatterns
 * to the seed when its internal pool meets threshold.)
 */

import { getBankRoutingStats, DRILL_ROUTING_THRESHOLDS } from '../../data/questions/bank';
import { getRWBankRoutingStats } from '../../data/questions/rwBank';
// Threshold comes from taxonomy.js (pure constants) rather than the rwBank
// index so constant-only importers of this selector stay corpus-free (2a).
import { RW_TIER1_PATTERN_THRESHOLD } from '../../data/questions/rwBank/taxonomy';
import { RW_PATTERN_LABELS } from '../../data/questions/rwBank/deriveRWPattern';
import { formatPatternLabel, pickPrimaryMissedPattern } from './missedPatternLabel';

/**
 * @param {object|null|undefined} weakness — weakness with optional `missedPatterns`
 *   and `section` ('math' | 'rw'). Section selects which bank's pattern pool +
 *   threshold + label source the chip is computed from.
 * @returns {{label: string, slug: string} | null} — null when chip should NOT render
 */
export function getDrillChipForWeakness(weakness) {
  const slug = pickPrimaryMissedPattern(weakness);
  if (!slug) return null;

  // R&W chip: curated human label + R&W pattern pool + R&W threshold. A
  // tag-only or unknown slug (no entry in RW_PATTERN_LABELS) shows no chip.
  if (weakness && weakness.section === 'rw') {
    const label = RW_PATTERN_LABELS[slug];
    if (!label) return null;
    const poolSize = getRWBankRoutingStats().byPattern[slug] || 0;
    if (poolSize < RW_TIER1_PATTERN_THRESHOLD) return null;
    return { label, slug };
  }

  // Math chip (unchanged).
  const stats = getBankRoutingStats();
  const poolSize = stats.byPattern[slug] || 0;
  if (poolSize < DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN) return null;
  const label = formatPatternLabel(slug);
  return label ? { label, slug } : null;
}
