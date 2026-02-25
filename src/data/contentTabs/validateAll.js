/**
 * Schema validation for all content tabs.
 * Run with: node src/data/contentTabs/validateAll.js
 * Exits 1 if any module fails validation.
 */

const fs = require('fs');
const path = require('path');

function validateContentTab(moduleId, contentTab) {
  const errors = [];
  if (!contentTab) {
    errors.push(`${moduleId}: contentTab is null/undefined`);
    return { valid: false, errors };
  }
  if (!contentTab.moduleId || contentTab.moduleId !== moduleId) {
    errors.push(`${moduleId}: moduleId mismatch`);
  }
  if (!contentTab.title) {
    errors.push(`${moduleId}: missing title`);
  }
  if (!contentTab.sections || typeof contentTab.sections !== 'object') {
    errors.push(`${moduleId}: missing sections object`);
    return { valid: false, errors };
  }
  for (const [sectionId, section] of Object.entries(contentTab.sections)) {
    if (!section.title) {
      errors.push(`${moduleId}.${sectionId}: missing title`);
    }
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
      errors.push(`${moduleId}.${sectionId}: blocks must be a non-empty array`);
    }
  }
  return { valid: errors.length === 0, errors };
}

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('Content.js'));
let hadError = false;

for (const file of files) {
  const raw = fs.readFileSync(path.join(dir, file), 'utf8');
  const match = raw.match(/export const \w+ = ({[\s\S]+});?\s*$/);
  if (!match) {
    console.error(`SKIP: Could not parse ${file}`);
    continue;
  }
  let contentTab;
  try {
    contentTab = eval('(' + match[1] + ')');
  } catch (e) {
    console.error(`SKIP: ${file}: ${e.message}`);
    hadError = true;
    continue;
  }
  const moduleId = contentTab.moduleId || file.replace('Content.js', '').replace(/([A-Z])/g, (m, c) => '-' + c.toLowerCase()).replace(/^-/, '');
  const { valid, errors } = validateContentTab(moduleId, contentTab);
  if (!valid) {
    hadError = true;
    console.error(`${file}:`);
    errors.forEach(e => console.error(`  - ${e}`));
  }
}

if (hadError) {
  process.exit(1);
}
console.log('All content tabs passed schema validation.');
