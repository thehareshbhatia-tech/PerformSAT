/**
 * Content Duplication Checker
 *
 * Run with: node src/data/contentTabs/dedupeCheck.js
 *
 * Flags:
 * 1. Identical heading strings reused across 3+ modules
 * 2. Identical text block content reused across 2+ modules
 * 3. Sections exceeding block budget
 * 4. Near-duplicate n-grams (same 5-word phrase in NGRAM_MODULE_THRESHOLD+ modules)
 */

const NGRAM_SIZE = 5;
const NGRAM_MODULE_THRESHOLD = 4; // fail if a 5-word phrase appears in 4+ modules

const fs = require('fs');
const path = require('path');

const BLOCK_BUDGET = {
  coreConcepts: 6,
  satPatterns: 6,
  methods: 7,
  commonTraps: 5,
  workedExamples: 3,
  visualModels: 5,
  speedStrategy: 5,
  checkpoint: 2,
};

function extractTextBlocks(contentTab) {
  const texts = [];
  if (!contentTab?.sections) return texts;
  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    if (!section?.blocks) continue;
    for (const block of section.blocks) {
      if ((block.type === 'heading' || block.type === 'text') && block.content) {
        texts.push({ moduleId: contentTab.moduleId, sectionId, type: block.type, content: block.content });
      }
    }
  }
  return texts;
}

function normalizeForNgram(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function getWordNgrams(text, n) {
  const words = normalizeForNgram(text).split(/\s+/).filter(w => w.length > 0);
  const set = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    set.add(words.slice(i, i + n).join(' '));
  }
  return set;
}

function checkNearDuplicateNgrams(allTexts) {
  const ngramToModules = new Map();
  for (const item of allTexts) {
    const content = item.content;
    if (!content || content.length < 30) continue;
    const ng = getWordNgrams(content, NGRAM_SIZE);
    for (const phrase of ng) {
      if (phrase.length < 25) continue; // skip very short 5-word combos
      if (!ngramToModules.has(phrase)) ngramToModules.set(phrase, new Set());
      ngramToModules.get(phrase).add(item.moduleId);
    }
  }
  const overThreshold = [];
  for (const [phrase, modules] of ngramToModules.entries()) {
    if (modules.size >= NGRAM_MODULE_THRESHOLD) {
      overThreshold.push({ phrase: phrase.slice(0, 60), count: modules.size, modules: [...modules] });
    }
  }
  return overThreshold;
}

function checkBudgets(contentTab) {
  const violations = [];
  if (!contentTab?.sections) return violations;
  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    const budget = BLOCK_BUDGET[sectionId];
    if (budget && section.blocks && section.blocks.length > budget) {
      violations.push({
        moduleId: contentTab.moduleId,
        sectionId,
        count: section.blocks.length,
        budget,
      });
    }
  }
  return violations;
}

function run() {
  const dir = __dirname;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('Content.js'));
  
  const allTexts = [];
  const allBudgetViolations = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    
    const match = raw.match(/export const \w+ = ({[\s\S]+});?\s*$/);
    if (!match) {
      console.log(`SKIP: Could not parse export from ${file}`);
      continue;
    }
    
    let contentTab;
    try {
      contentTab = eval('(' + match[1] + ')');
    } catch (e) {
      console.log(`SKIP: eval failed for ${file}: ${e.message}`);
      continue;
    }
    
    allTexts.push(...extractTextBlocks(contentTab));
    allBudgetViolations.push(...checkBudgets(contentTab));
  }

  const ngramDupes = checkNearDuplicateNgrams(allTexts);

  // Find duplicated strings
  const contentMap = new Map();
  for (const item of allTexts) {
    const key = item.content?.trim();
    if (!key || key.length < 20) continue;
    if (!contentMap.has(key)) contentMap.set(key, []);
    contentMap.get(key).push(item);
  }
  
  const headingDupes = [];
  const textDupes = [];
  
  for (const [content, usages] of contentMap.entries()) {
    const uniqueModules = new Set(usages.map(u => u.moduleId));
    if (usages[0].type === 'heading' && uniqueModules.size >= 3) {
      headingDupes.push({ content, count: uniqueModules.size, modules: [...uniqueModules] });
    }
    if (usages[0].type === 'text' && uniqueModules.size >= 2) {
      textDupes.push({ content: content.slice(0, 80) + '...', count: uniqueModules.size, modules: [...uniqueModules] });
    }
  }
  
  // Report
  console.log('\n=== CONTENT DUPLICATION REPORT ===\n');
  
  if (allBudgetViolations.length > 0) {
    console.log(`BUDGET VIOLATIONS (${allBudgetViolations.length}):`);
    for (const v of allBudgetViolations) {
      console.log(`  ${v.moduleId}.${v.sectionId}: ${v.count} blocks (budget: ${v.budget})`);
    }
  } else {
    console.log('BUDGET: All sections within limits.');
  }
  
  console.log('');
  
  if (headingDupes.length > 0) {
    console.log(`HEADING DUPES (same heading in 3+ modules, ${headingDupes.length} found):`);
    for (const d of headingDupes) {
      console.log(`  "${d.content}" — ${d.count} modules`);
    }
  } else {
    console.log('HEADINGS: No identical headings in 3+ modules.');
  }
  
  console.log('');
  
  if (textDupes.length > 0) {
    console.log(`TEXT DUPES (same text in 2+ modules, ${textDupes.length} found):`);
    for (const d of textDupes) {
      console.log(`  "${d.content}" — ${d.count} modules`);
    }
  } else {
    console.log('TEXT: No identical text blocks across modules.');
  }

  console.log('');

  if (ngramDupes.length > 0) {
    console.log(`N-GRAM NEAR-DUPES (same ${NGRAM_SIZE}-word phrase in ${NGRAM_MODULE_THRESHOLD}+ modules, ${ngramDupes.length} found):`);
    for (const d of ngramDupes.slice(0, 10)) {
      console.log(`  "${d.phrase}…" — ${d.count} modules`);
    }
    if (ngramDupes.length > 10) console.log(`  … and ${ngramDupes.length - 10} more`);
  } else {
    console.log(`N-GRAMS: No phrase repeated in ${NGRAM_MODULE_THRESHOLD}+ modules.`);
  }

  console.log('');

  const totalIssues = allBudgetViolations.length + headingDupes.length + textDupes.length + ngramDupes.length;
  if (totalIssues === 0) {
    console.log('ALL CLEAR — no duplication or budget issues found.');
  } else {
    console.log(`TOTAL ISSUES: ${totalIssues}`);
  }
  
  process.exit(totalIssues > 0 ? 1 : 0);
}

run();
