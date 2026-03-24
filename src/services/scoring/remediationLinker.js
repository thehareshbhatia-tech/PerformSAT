/**
 * Remediation Linker
 *
 * Resolves diagnostic weaknesses to specific lessons and sections
 * via the skill taxonomy. Deterministic lookups — the AI provides the "why",
 * this module provides the "where to go."
 */

import { getSkillById, skillTaxonomy } from '../../data/skillTaxonomy';

// Human-readable module names
const MODULE_DISPLAY_NAMES = {
  'linear-equations': 'Linear Equations',
  'functions': 'Functions',
  'transformations': 'Transformations',
  'triangles': 'Triangles',
  'circles': 'Circles',
  'dimensional-analysis': 'Dimensional Analysis',
  'percents': 'Percents',
  'exponents': 'Exponents',
  'quadratics': 'Quadratics',
  'radians-degrees': 'Radians & Degrees',
  'equivalent-expressions': 'Equivalent Expressions',
  'statistics': 'Statistics',
  'volume': 'Volume',
  'systems': 'Systems',
};

// Domain → default module mapping for fallback
const DOMAIN_DEFAULT_MODULE = {
  'algebra': 'linear-equations',
  'problem-solving': 'statistics',
  'advanced-math': 'quadratics',
  'geometry': 'triangles',
};

/**
 * Resolve a single skill ID to remediation link data.
 * Returns null if the skill doesn't exist in the taxonomy.
 */
export function resolveSkillLink(skillId) {
  if (!skillId) return null;
  const skill = getSkillById(skillId);
  if (!skill || !skill.modules || skill.modules.length === 0) return null;

  return {
    skillId: skill.id,
    skillName: skill.name,
    moduleId: skill.modules[0],
    moduleName: MODULE_DISPLAY_NAMES[skill.modules[0]] || skill.modules[0],
    sections: skill.sections || [],
    domain: skill.domain,
  };
}

/**
 * Fuzzy-match a skill name against all taxonomy skills.
 * Returns the best match if similarity is above threshold, else null.
 */
export function fuzzyMatchSkill(name) {
  if (!name || typeof name !== 'string') return null;

  const normalized = name.toLowerCase().replace(/[-_]/g, ' ').trim();
  const allSkills = Object.values(skillTaxonomy.skills);

  // Pass 1: exact name match (case-insensitive)
  const exact = allSkills.find(
    s => s.name.toLowerCase() === normalized
  );
  if (exact) return resolveSkillLink(exact.id);

  // Pass 2: substring inclusion (either direction)
  const substringMatch = allSkills.find(
    s => normalized.includes(s.name.toLowerCase()) ||
         s.name.toLowerCase().includes(normalized)
  );
  if (substringMatch) return resolveSkillLink(substringMatch.id);

  // Pass 3: word-overlap scoring
  const nameWords = new Set(normalized.split(/\s+/).filter(w => w.length > 2));
  if (nameWords.size === 0) return null;

  let bestScore = 0;
  let bestSkill = null;

  for (const skill of allSkills) {
    const skillWords = new Set(
      skill.name.toLowerCase().replace(/[-_]/g, ' ').split(/\s+/).filter(w => w.length > 2)
    );
    let overlap = 0;
    for (const w of nameWords) {
      if (skillWords.has(w)) overlap++;
    }
    const score = overlap / Math.max(nameWords.size, skillWords.size);
    if (score > bestScore) {
      bestScore = score;
      bestSkill = skill;
    }
  }

  // Threshold: at least 50% word overlap
  if (bestScore >= 0.5 && bestSkill) {
    return resolveSkillLink(bestSkill.id);
  }

  return null;
}

/**
 * Get a domain-level fallback remediation link.
 */
export function getDomainFallbackLink(domain) {
  const moduleId = DOMAIN_DEFAULT_MODULE[domain];
  if (!moduleId) return null;

  return {
    skillId: null,
    skillName: null,
    moduleId,
    moduleName: MODULE_DISPLAY_NAMES[moduleId] || moduleId,
    sections: [],
    domain,
  };
}

/**
 * Resolve remediation links for an array of weaknesses from the diagnostic report.
 *
 * Each weakness can come from:
 * - skillAnalysis.weakSkills (has skillId — direct lookup)
 * - skillClusters (has failedSkills names — fuzzy match)
 * - rootCauseClusters (has recurringSkills names — fuzzy match)
 * - AI-generated (has title only — fuzzy match + domain fallback)
 *
 * Returns the weakness objects with `remediationLinks` added.
 */
export function resolveRemediationLinks(weaknesses, weakSkills = []) {
  if (!weaknesses || weaknesses.length === 0) return [];

  // Build a lookup from weakSkill skillId → link for fast resolution
  const skillIdLinkCache = {};
  for (const ws of weakSkills) {
    if (ws.skillId && !skillIdLinkCache[ws.skillId]) {
      skillIdLinkCache[ws.skillId] = resolveSkillLink(ws.skillId);
    }
  }

  // Build a lookup from weakSkill name → skillId
  const nameToSkillId = {};
  for (const ws of weakSkills) {
    if (ws.name && ws.skillId) {
      nameToSkillId[ws.name.toLowerCase()] = ws.skillId;
    }
  }

  return weaknesses.map(weakness => {
    const links = [];
    const seenModules = new Set();

    // Strategy 1: If weakness has failedSkills (from skillClusters), resolve each
    const failedSkills = weakness.failedSkills || [];
    for (const skillName of failedSkills.slice(0, 3)) {
      const cleanName = typeof skillName === 'string' ? skillName.replace(/-/g, ' ') : '';
      // Check if this skill name maps to a known skillId
      const skillId = nameToSkillId[cleanName.toLowerCase()] || nameToSkillId[skillName.toLowerCase()];
      const link = skillId ? resolveSkillLink(skillId) : fuzzyMatchSkill(cleanName);
      if (link && !seenModules.has(link.moduleId)) {
        seenModules.add(link.moduleId);
        links.push(link);
      }
    }

    // Strategy 2: If weakness has recurringSkills (from rootCauseClusters)
    const recurringSkills = weakness.recurringSkills || [];
    for (const skillName of recurringSkills.slice(0, 3)) {
      const cleanName = typeof skillName === 'string' ? skillName.replace(/-/g, ' ') : '';
      const skillId = nameToSkillId[cleanName.toLowerCase()] || nameToSkillId[skillName.toLowerCase()];
      const link = skillId ? resolveSkillLink(skillId) : fuzzyMatchSkill(cleanName);
      if (link && !seenModules.has(link.moduleId)) {
        seenModules.add(link.moduleId);
        links.push(link);
      }
    }

    // Strategy 3: Fuzzy match on weakness title — skip purely behavioral patterns
    if (links.length === 0 && weakness.title) {
      const title = weakness.title.toLowerCase();
      const isBehavioral = /pacing|rushing|time pressure|stamina|answer change|calculator|review|navigation|fatigue/i.test(title);
      if (!isBehavioral) {
        // Try to extract multiple topic keywords from compound titles
        // e.g. "Conceptual Gaps in Quadratics, Statistics, & Absolute Value"
        const topicWords = title
          .replace(/conceptual gaps? in|weaknesses? in|errors? in|problems? with/gi, '')
          .split(/[,&]/)
          .map(s => s.trim())
          .filter(s => s.length > 2);

        for (const topic of topicWords) {
          const link = fuzzyMatchSkill(topic);
          if (link && !seenModules.has(link.moduleId)) {
            seenModules.add(link.moduleId);
            links.push(link);
          }
        }

        // If compound extraction didn't work, try the full title
        if (links.length === 0) {
          const link = fuzzyMatchSkill(weakness.title);
          if (link && !seenModules.has(link.moduleId)) {
            seenModules.add(link.moduleId);
            links.push(link);
          }
        }
      }
    }

    // Strategy 4: Domain-level fallback (skip for behavioral patterns)
    if (links.length === 0) {
      const title = (weakness.title || '').toLowerCase();
      const isBehavioral = /pacing|rushing|time pressure|stamina|answer change|calculator|review|navigation|fatigue/i.test(title);
      if (!isBehavioral) {
        const domain = weakness.domain || findDomainFromContext(weakness);
        if (domain) {
          const fallback = getDomainFallbackLink(domain);
          if (fallback) links.push(fallback);
        }
      }
    }

    return {
      ...weakness,
      remediationLinks: links,
    };
  });
}

/**
 * Try to infer domain from weakness context (proof text, id, etc.)
 */
function findDomainFromContext(weakness) {
  const text = `${weakness.title || ''} ${weakness.id || ''} ${(weakness.proof || []).join(' ')}`.toLowerCase();
  if (/algebra|linear|equation|system|slope|intercept/i.test(text)) return 'algebra';
  if (/geometry|triangle|circle|angle|area|volume|trig/i.test(text)) return 'geometry';
  if (/quadratic|polynomial|exponent|radical|function/i.test(text)) return 'advanced-math';
  if (/ratio|percent|statistic|data|probability|mean|median/i.test(text)) return 'problem-solving';
  return null;
}

/**
 * Build the learning path items for the top N weaknesses.
 * Each item includes the weakness name, error type, estimated gain,
 * and remediation steps (lesson + practice links).
 */
export function buildLearningPathItems(patterns, maxItems = 3) {
  if (!patterns || patterns.length === 0) return [];

  // Deduplicate across weaknesses — don't repeat the same module
  const seenModules = new Set();
  return patterns
    .filter(p => p.remediationLinks && p.remediationLinks.length > 0)
    .slice(0, maxItems + 2) // Take extra to account for dedup
    .map(pattern => {
      // Use all unique links for this weakness, but skip already-seen modules
      const uniqueLinks = pattern.remediationLinks.filter(l => {
        if (seenModules.has(l.moduleId)) return false;
        seenModules.add(l.moduleId);
        return true;
      });
      if (uniqueLinks.length === 0) return null;

      const steps = uniqueLinks.flatMap(link => {
        const section = link.sections[0] || link.moduleName;
        return [
          { type: 'lesson', moduleId: link.moduleId, section, label: `Review: ${section}` },
          { type: 'practice', moduleId: link.moduleId, section, label: `Practice: ${link.moduleName}` },
        ];
      });

      return {
        weaknessName: pattern.title,
        severity: pattern.severity || 'moderate',
        estimatedGain: pattern.estimatedPointGain || null,
        steps,
      };
    })
    .filter(Boolean)
    .slice(0, maxItems);
}
