/**
 * Tutor-Grade v2 Quality Check
 *
 * Run with: node src/data/contentTabs/tutorGradeQualityCheck.js
 *
 * Validates every section of every content tab against the Tutor-Grade v2 rubric:
 *   - Minimum block counts per section type
 *   - Required element types per section
 *   - Low-signal filler phrase detection across ALL sections
 *   - SAT archetype coverage (satPatterns sections must have recognition cues)
 *   - Example difficulty progression (workedExamples should span Easy → Hard)
 *   - Trap specificity (trapCards must include concrete wrong/correction)
 *   - Decision rule presence (satPatterns tips must use if→then language)
 */

const fs = require('fs');
const path = require('path');

const SECTION_QUALITY = {
  coreConcepts: {
    minBlocks: 2,
    requiredElements: [
      { label: 'intuition or explanation', matchTypes: ['text', 'keyInsight'] },
      { label: 'formal rule or formula',   matchTypes: ['formula', 'formulaGrid', 'callout', 'table'] },
    ],
  },
  satPatterns: {
    minBlocks: 3,
    requiredElements: [
      { label: 'pattern archetype',  matchTypes: ['callout', 'example'] },
      { label: 'trap or recovery',   matchTypes: ['trapCard', 'callout', 'comparison'] },
      { label: 'decision rule',      matchTypes: ['tip', 'strategyCard', 'keyInsight'] },
    ],
  },
  methods: {
    minBlocks: 1,
    requiredElements: [
      { label: 'step-by-step procedure or worked example', matchTypes: ['steps', 'example'] },
    ],
  },
  commonTraps: {
    minBlocks: 1,
    requiredElements: [
      { label: 'trap card', matchTypes: ['trapCard'] },
    ],
  },
  workedExamples: {
    minBlocks: 1,
    requiredElements: [
      { label: 'worked example', matchTypes: ['example'] },
    ],
  },
  visualModels: { minBlocks: 1, requiredElements: [] },
  speedStrategy: {
    minBlocks: 1,
    requiredElements: [
      { label: 'strategy or tip', matchTypes: ['strategyCard', 'tip', 'callout'] },
    ],
  },
  checkpoint: {
    minBlocks: 1,
    requiredElements: [
      { label: 'checkpoint question', matchTypes: ['checkpointQuestion'] },
    ],
  },
};

const LOW_SIGNAL_PATTERNS = [
  { re: /the SAT loves/i, label: '"the SAT loves"' },
  { re: /college board (often|frequently|typically) (tests|asks)/i, label: 'generic CB frequency claim' },
  { re: /\d+[–-]\d+ questions per/i, label: 'unverifiable question-count claim' },
  { re: /you (should|need to|must) (know|understand|remember)/i, label: 'generic instruction' },
  { re: /this is (important|key|crucial)/i, label: 'filler emphasis' },
  { re: /this is (a |an )?(common|important|key|critical)/i, label: 'filler importance claim' },
  { re: /remember (that |to )?always/i, label: 'generic "remember" instruction' },
  { re: /make sure (you |to )/i, label: 'generic "make sure" instruction' },
];

function extractAllText(blocks) {
  return blocks
    .map(b => [b.content, b.wrong, b.correction, b.title, b.question, b.summary, b.note]
      .filter(Boolean).join(' '))
    .join(' ');
}

function checkSection(label, sectionId, section) {
  const warnings = [];
  const errors = [];
  const quality = SECTION_QUALITY[sectionId];

  if (!section || !Array.isArray(section.blocks)) {
    errors.push(`${label}.${sectionId}: no blocks array`);
    return { errors, warnings };
  }

  if (quality) {
    if (section.blocks.length < quality.minBlocks) {
      warnings.push(`${label}.${sectionId}: ${section.blocks.length} blocks (min ${quality.minBlocks})`);
    }

    const blockTypes = section.blocks.map(b => b.type);
    for (const req of quality.requiredElements) {
      if (!req.matchTypes.some(t => blockTypes.includes(t))) {
        warnings.push(`${label}.${sectionId}: missing ${req.label} — need one of: ${req.matchTypes.join(', ')}`);
      }
    }
  }

  const allText = extractAllText(section.blocks);
  if (section.summary) {
    for (const { re, label: patLabel } of LOW_SIGNAL_PATTERNS) {
      if (re.test(section.summary)) {
        warnings.push(`${label}.${sectionId}: low-signal phrase in summary — ${patLabel}`);
      }
    }
  }
  for (const { re, label: patLabel } of LOW_SIGNAL_PATTERNS) {
    if (re.test(allText)) {
      warnings.push(`${label}.${sectionId}: low-signal phrase in blocks — ${patLabel}`);
    }
  }

  if (sectionId === 'workedExamples') {
    const examples = section.blocks.filter(b => b.type === 'example');
    if (examples.length >= 2) {
      const difficulties = examples.map(e => e.difficulty).filter(Boolean);
      const uniqueDiffs = new Set(difficulties);
      if (uniqueDiffs.size < 2) {
        warnings.push(`${label}.workedExamples: all examples same difficulty — need progression (Easy/Medium/Hard)`);
      }
    }
  }

  if (sectionId === 'commonTraps') {
    for (let i = 0; i < section.blocks.length; i++) {
      const block = section.blocks[i];
      if (block.type === 'trapCard') {
        if (!block.wrong || block.wrong.length < 15) {
          warnings.push(`${label}.commonTraps.block[${i}]: trapCard 'wrong' field too short — needs specific mistake with numbers`);
        }
        if (block.correction && block.correction.length < 15) {
          warnings.push(`${label}.commonTraps.block[${i}]: trapCard 'correction' field too short — needs detailed fix`);
        }
      }
    }
  }

  if (sectionId === 'satPatterns') {
    const tips = section.blocks.filter(b => b.type === 'tip' || b.type === 'strategyCard');
    for (const tip of tips) {
      const text = tip.content || '';
      if (text.length > 20 && !/if |when |→|decision rule|trigger/i.test(text)) {
        warnings.push(`${label}.satPatterns: tip lacks decision-rule language (if/when/→)`);
      }
    }
  }

  return { errors, warnings };
}

function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/export const \w+ = ({[\s\S]+});?\s*$/);
  if (!match) return null;
  try { return eval('(' + match[1] + ')'); } catch { return null; }
}

function run() {
  const dir = __dirname;
  let totalErrors = 0;
  let totalWarnings = 0;
  let tabsChecked = 0;
  let sectionsChecked = 0;
  const moduleReport = {};

  const moduleFiles = fs.readdirSync(dir).filter(f => f.endsWith('Content.js'));
  for (const file of moduleFiles) {
    const contentTab = parseFile(path.join(dir, file));
    if (!contentTab) { console.log(`SKIP: ${file}`); continue; }
    const moduleId = contentTab.moduleId || file.replace('Content.js', '');
    const label = `[module] ${moduleId}`;
    tabsChecked++;
    const modWarnings = [];
    const modErrors = [];

    for (const [sectionId, section] of Object.entries(contentTab.sections || {})) {
      sectionsChecked++;
      const { errors, warnings } = checkSection(label, sectionId, section);
      modErrors.push(...errors);
      modWarnings.push(...warnings);
    }

    moduleReport[moduleId] = { errors: modErrors.length, warnings: modWarnings.length, type: 'module' };
    totalErrors += modErrors.length;
    totalWarnings += modWarnings.length;
    for (const e of modErrors) console.error(`  ✗ ${e}`);
    for (const w of modWarnings) console.warn(`  ⚠ ${w}`);
  }

  const lessonsDir = path.join(dir, 'lessons');
  if (fs.existsSync(lessonsDir)) {
    const lessonFiles = fs.readdirSync(lessonsDir).filter(f => f.endsWith('Lessons.js'));
    for (const file of lessonFiles) {
      const lessonMap = parseFile(path.join(lessonsDir, file));
      if (!lessonMap) { console.log(`SKIP (lesson): ${file}`); continue; }
      for (const [lessonId, tab] of Object.entries(lessonMap)) {
        const moduleId = tab.moduleId || file.replace('Lessons.js', '');
        const label = `[lesson] ${moduleId}/L${lessonId}`;
        tabsChecked++;

        for (const [sectionId, section] of Object.entries(tab.sections || {})) {
          sectionsChecked++;
          const { errors, warnings } = checkSection(label, sectionId, section);
          totalErrors += errors.length;
          totalWarnings += warnings.length;
          for (const e of errors) console.error(`  ✗ ${e}`);
          for (const w of warnings) console.warn(`  ⚠ ${w}`);

          if (!moduleReport[moduleId]) moduleReport[moduleId] = { errors: 0, warnings: 0, type: 'lesson' };
          moduleReport[moduleId].errors += errors.length;
          moduleReport[moduleId].warnings += warnings.length;
        }
      }
    }
  }

  console.log('\n═══════════════════════════════════════════════');
  console.log('  TUTOR-GRADE v2 QUALITY REPORT');
  console.log('═══════════════════════════════════════════════\n');
  console.log(`Tabs checked:     ${tabsChecked}`);
  console.log(`Sections checked: ${sectionsChecked}`);
  console.log(`Total errors:     ${totalErrors}`);
  console.log(`Total warnings:   ${totalWarnings}`);

  console.log('\n── Per-Module Summary ──');
  const sortedModules = Object.entries(moduleReport).sort((a, b) => (b[1].errors + b[1].warnings) - (a[1].errors + a[1].warnings));
  for (const [mod, stats] of sortedModules) {
    const status = stats.errors > 0 ? '✗ FAIL' : stats.warnings > 0 ? '⚠ WARN' : '✓ PASS';
    console.log(`  ${status}  ${mod}: ${stats.errors} errors, ${stats.warnings} warnings`);
  }

  console.log('');
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('ALL CLEAR — every section meets Tutor-Grade v2 rubric.');
  } else if (totalErrors === 0) {
    console.log(`PASS with ${totalWarnings} warnings. No hard errors.`);
  } else {
    console.log(`FAIL — ${totalErrors} errors and ${totalWarnings} warnings to resolve.`);
  }

  process.exit(totalErrors > 0 ? 1 : 0);
}

run();
