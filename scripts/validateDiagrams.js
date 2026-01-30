// Script to validate all diagram configurations across practice tests

const { practiceTest1 } = require('../src/data/practiceTests/practiceTest1');
const { practiceTest2 } = require('../src/data/practiceTests/practiceTest2');
const { practiceTest3 } = require('../src/data/practiceTests/practiceTest3');
const { practiceTest4 } = require('../src/data/practiceTests/practiceTest4');
const { practiceTest5 } = require('../src/data/practiceTests/practiceTest5');
const { practiceTest6 } = require('../src/data/practiceTests/practiceTest6');
const { practiceTest7 } = require('../src/data/practiceTests/practiceTest7');
const { practiceTest8 } = require('../src/data/practiceTests/practiceTest8');
const { practiceTest9 } = require('../src/data/practiceTests/practiceTest9');
const { practiceTest10 } = require('../src/data/practiceTests/practiceTest10');

const allTests = [
  practiceTest1, practiceTest2, practiceTest3, practiceTest4, practiceTest5,
  practiceTest6, practiceTest7, practiceTest8, practiceTest9, practiceTest10
];

let totalDiagrams = 0;
let diagramsByType = {};
let issues = [];

allTests.forEach((test, testIndex) => {
  const testName = test.title || test.name || `Practice Test ${testIndex + 1}`;

  // Get questions - may be in modules or directly in test
  let questions = [];
  if (test.modules) {
    test.modules.forEach(m => {
      if (m.questions) questions = questions.concat(m.questions);
    });
  } else if (test.questions) {
    questions = test.questions;
  }

  questions.forEach((q, qIndex) => {
    if (q.diagram) {
      totalDiagrams++;
      const type = q.diagram.type;
      const params = q.diagram.params || {};

      diagramsByType[type] = (diagramsByType[type] || 0) + 1;

      // Check for common issues
      if (!params || Object.keys(params).length === 0) {
        issues.push({ test: testName, id: q.id, type, issue: 'Empty or missing params' });
      }

      // Check twoLineGraph/twoLineSystem
      if (type === 'twoLineGraph' || type === 'twoLineSystem') {
        if (!params.intersection) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing intersection' });
        } else if (typeof params.intersection.x !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'intersection.x not a number' });
        }
        if (typeof params.slope1 !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing slope1' });
        }
        if (typeof params.slope2 !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing slope2' });
        }
      }

      // Check linearGraph
      if (type === 'linearGraph' || type === 'linear-graph') {
        if (typeof params.slope !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing slope' });
        }
        if (typeof params.yIntercept !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing yIntercept' });
        }
      }

      // Check parabola
      if (type === 'parabola') {
        if (!params.vertex) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing vertex' });
        }
        if (typeof params.a !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing coefficient a' });
        }
      }

      // Check barChart
      if (type === 'barChart' || type === 'bar-graph') {
        if (!params.data || !Array.isArray(params.data)) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing or invalid data array' });
        }
      }

      // Check dotPlot
      if (type === 'dotPlot') {
        if ((!params.data || params.data.length === 0) && (!params.sets || params.sets.length === 0)) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing data or sets' });
        }
      }

      // Check table
      if (type === 'table' || type === 'twoWayTable') {
        if (!params.headers && !params.xHeader) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing headers' });
        }
      }

      // Check scatterplot
      if (type === 'scatterplot') {
        if (!params.points && !params.data) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing points or data' });
        }
      }

      // Check circleWithSector
      if (type === 'circleWithSector' || type === 'circle-sector') {
        if (typeof params.centralAngle !== 'number') {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing centralAngle' });
        }
      }

      // Check triangles
      if (type === 'rightTriangle') {
        if (!params.vertices) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing vertices' });
        }
      }

      if (type === 'triangleWithAngles') {
        if (!params.angleLabels) {
          issues.push({ test: testName, id: q.id, type, issue: 'Missing angleLabels' });
        }
      }
    }
  });
});

console.log('\n========================================');
console.log('SAT Diagram Validation Report');
console.log('========================================\n');

console.log('Total Diagrams:', totalDiagrams);
console.log('\nDiagrams by Type:');
Object.entries(diagramsByType).sort((a,b) => b[1] - a[1]).forEach(([type, count]) => {
  console.log(`  ${type}: ${count}`);
});

console.log(`\n--- ISSUES FOUND: ${issues.length} ---\n`);
if (issues.length > 0) {
  issues.forEach(i => {
    console.log(`[${i.test}] ${i.id} (${i.type}): ${i.issue}`);
  });
} else {
  console.log('✓ No issues found! All diagrams are properly configured.');
}
console.log('\n========================================\n');
