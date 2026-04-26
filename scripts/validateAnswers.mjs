#!/usr/bin/env node

/**
 * validateAnswers.mjs
 *
 * Validates all practice test data for correctness:
 * - Multiple-choice: correctAnswer matches one of choices[].id
 * - Fill-in: correctAnswer is defined and non-empty
 * - Missing choices for multiple-choice questions
 * - Missing correctAnswer
 * - Missing question text
 * - Duplicate choice IDs within a question
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(new URL('.', import.meta.url).pathname, '..', 'src', 'data', 'practiceTests');

const issues = [];
let totalQuestions = 0;

function extractTestData(filePath, testNum) {
  const raw = readFileSync(filePath, 'utf-8');

  // Strip the `export const practiceTestN = ` prefix and trailing semicolons/whitespace
  // to get a plain JS object literal, then evaluate it.
  const varName = `practiceTest${testNum}`;
  const pattern = new RegExp(`export\\s+const\\s+${varName}\\s*=\\s*`);
  const match = raw.match(pattern);
  if (!match) {
    console.error(`Could not find export for ${varName} in ${filePath}`);
    return null;
  }

  // Everything after the match starts with the object literal `{ ... };`
  // We need to find the matching closing brace using brace counting,
  // because there may be trailing exports or other statements after it.
  const afterExport = raw.slice(match.index + match[0].length);

  let depth = 0;
  let endIndex = -1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = 0; i < afterExport.length; i++) {
    const ch = afterExport[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\' && inString) {
      escaped = true;
      continue;
    }

    if (inString) {
      if (ch === stringChar) {
        inString = false;
      }
      continue;
    }

    // Not in a string
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }

  if (endIndex === -1) {
    console.error(`Could not find matching closing brace for ${varName}`);
    return null;
  }

  const objectStr = afterExport.slice(0, endIndex);

  // Use Function constructor to evaluate the object literal safely-ish
  // (these are our own data files, not untrusted input)
  try {
    const fn = new Function(`return (${objectStr});`);
    return fn();
  } catch (e) {
    console.error(`Failed to parse ${varName}: ${e.message}`);
    return null;
  }
}

function addIssue(testTitle, moduleTitle, questionIndex, questionId, description) {
  const label = `${testTitle}, ${moduleTitle}, Question ${questionIndex + 1} (id: ${questionId})`;
  issues.push(`${label}: ${description}`);
}

function validateQuestion(q, qIndex, testTitle, moduleTitle) {
  const qId = q.id ?? '??';

  // Check missing question text
  if (!q.question || (typeof q.question === 'string' && q.question.trim() === '')) {
    addIssue(testTitle, moduleTitle, qIndex, qId, 'Missing or empty question text');
  }

  // Check missing correctAnswer
  if (q.correctAnswer === undefined || q.correctAnswer === null) {
    addIssue(testTitle, moduleTitle, qIndex, qId, 'Missing correctAnswer (undefined or null)');
  } else if (typeof q.correctAnswer === 'string' && q.correctAnswer.trim() === '') {
    addIssue(testTitle, moduleTitle, qIndex, qId, 'correctAnswer is an empty string');
  }

  if (q.type === 'multiple-choice') {
    // Check missing choices array
    if (!q.choices || !Array.isArray(q.choices) || q.choices.length === 0) {
      addIssue(testTitle, moduleTitle, qIndex, qId, 'Multiple-choice question has missing or empty choices array');
    } else {
      // Check for duplicate choice IDs
      const choiceIds = q.choices.map(c => c.id);
      const uniqueIds = new Set(choiceIds);
      if (uniqueIds.size !== choiceIds.length) {
        const dupes = choiceIds.filter((id, i) => choiceIds.indexOf(id) !== i);
        addIssue(testTitle, moduleTitle, qIndex, qId, `Duplicate choice IDs: [${[...new Set(dupes)].join(', ')}]`);
      }

      // Check correctAnswer matches one of the choice IDs
      if (q.correctAnswer !== undefined && q.correctAnswer !== null) {
        const answerStr = String(q.correctAnswer).trim();
        if (!choiceIds.includes(answerStr)) {
          addIssue(testTitle, moduleTitle, qIndex, qId,
            `correctAnswer "${answerStr}" does not match any choice ID (choices: [${choiceIds.join(', ')}])`);
        }
      }

      // Check each choice has id and content (text, table, or image)
      q.choices.forEach((choice, ci) => {
        if (!choice.id) {
          addIssue(testTitle, moduleTitle, qIndex, qId, `Choice at index ${ci} has missing id`);
        }
        const hasContent = choice.text || choice.text === 0 || choice.table || choice.image;
        if (!hasContent) {
          addIssue(testTitle, moduleTitle, qIndex, qId, `Choice "${choice.id}" has no content (no text, table, or image)`);
        }
      });
    }
  } else if (q.type === 'fill-in') {
    // Fill-in: correctAnswer should be defined and non-empty (already checked above)
    // Also flag if choices are present (unexpected for fill-in)
    if (q.choices && Array.isArray(q.choices) && q.choices.length > 0) {
      addIssue(testTitle, moduleTitle, qIndex, qId, 'Fill-in question unexpectedly has a choices array');
    }
  } else if (!q.type) {
    addIssue(testTitle, moduleTitle, qIndex, qId, 'Missing question type');
  } else {
    addIssue(testTitle, moduleTitle, qIndex, qId, `Unknown question type: "${q.type}"`);
  }
}

// Main
console.log('='.repeat(70));
console.log('  PerformSAT Practice Test Data Validation');
console.log('='.repeat(70));
console.log('');

for (let t = 1; t <= 12; t++) {
  const filePath = join(DATA_DIR, `practiceTest${t}.js`);
  const testData = extractTestData(filePath, t);

  if (!testData) {
    issues.push(`Practice Test ${t}: Could not load/parse file`);
    continue;
  }

  const testTitle = testData.title || `Practice Test ${t}`;
  console.log(`Checking ${testTitle} (id: ${testData.id})...`);

  if (!testData.modules || !Array.isArray(testData.modules)) {
    issues.push(`${testTitle}: No modules array found`);
    continue;
  }

  for (const mod of testData.modules) {
    const moduleTitle = mod.title || mod.id || 'Unknown Module';

    if (!mod.questions || !Array.isArray(mod.questions)) {
      issues.push(`${testTitle}, ${moduleTitle}: No questions array found`);
      continue;
    }

    mod.questions.forEach((q, qIndex) => {
      totalQuestions++;
      validateQuestion(q, qIndex, testTitle, moduleTitle);
    });
  }
}

// Print results
console.log('');
console.log('='.repeat(70));
console.log('  VALIDATION RESULTS');
console.log('='.repeat(70));
console.log('');

if (issues.length === 0) {
  console.log('No issues found! All data looks good.');
} else {
  console.log(`Found ${issues.length} issue(s):\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('');
console.log('-'.repeat(70));
console.log(`  Total questions checked: ${totalQuestions}`);
console.log(`  Total issues found:      ${issues.length}`);
console.log('-'.repeat(70));
