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
import { formatPatternLabel, pickPrimaryMissedPattern } from './missedPatternLabel';

/**
 * @param {object|null|undefined} weakness — weakness with optional `missedPatterns`
 * @returns {{label: string, slug: string} | null} — null when chip should NOT render
 */
export function getDrillChipForWeakness(weakness) {
  const slug = pickPrimaryMissedPattern(weakness);
  if (!slug) return null;
  const stats = getBankRoutingStats();
  const poolSize = stats.byPattern[slug] || 0;
  if (poolSize < DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN) return null;
  const label = formatPatternLabel(slug);
  return label ? { label, slug } : null;
}
