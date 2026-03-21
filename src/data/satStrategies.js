/**
 * SAT Strategies — Curated Knowledge Base
 * Targeted trap guides, misconception guides, and Desmos techniques
 * keyed for fast lookup by error pattern or skill ID.
 */

// ═══════════════════════════════════════════════════════════════════════════
// TRAP GUIDES — keyed by trap type (from diagnosticEngine error classification)
// ═══════════════════════════════════════════════════════════════════════════

export const trapGuides = {
  partial_calculation: {
    name: 'Partial Calculation Trap',
    description: 'You stopped one step before the answer the question actually asked for.',
    recognition: 'Any time the question asks for a TOTAL, FINAL RESULT, or a TRANSFORMED value (like 2x + 1 instead of x).',
    fix: 'After solving, re-read the final sentence of the question. What did they actually ask for? If you found x, do they want x, 2x, x + 5, or the total cost?',
    example: 'Question asks "What is the total cost?" You find the tax is $12. But the total cost is $62 + $12 = $74. Choice $12 is the trap.',
    frequency: 'Appears on nearly every SAT — the most common trap type.',
  },
  sign_error: {
    name: 'Sign Error Trap',
    description: 'You dropped or flipped a negative sign during calculation.',
    recognition: 'Any problem involving subtraction, distributing negatives, or moving terms across the equals sign.',
    fix: 'When you distribute a negative: -(3x - 5) = -3x + 5, NOT -3x - 5. When moving a term across =, flip the sign. Write out every step — do not skip.',
    example: 'Solving x^2 - 6x + 9 = 0. Student writes (x - 3)(x + 3) instead of (x - 3)(x - 3). The +3 trap answer catches the sign error.',
    frequency: 'Top 3 most common. Appears in algebra, quadratics, and geometry.',
  },
  misread_question: {
    name: 'Misread Question Trap',
    description: 'You solved for the wrong variable or answered a different question than what was asked.',
    recognition: 'Questions with multiple variables, "which of the following" phrasing, or when the question asks for something other than the obvious variable.',
    fix: 'READ THE LAST SENTENCE FIRST. Before solving, underline exactly what they are asking for. After solving, check: did I answer THAT question?',
    example: 'System of equations, solve for x and y. Question asks "What is x + y?" You found x = 3. The answer is not 3 — it is x + y.',
    frequency: 'Appears 2-3 times per test. Costs the most points per occurrence because students are confident in their wrong answer.',
  },
  reversed_operation: {
    name: 'Reversed Operation Trap',
    description: 'You multiplied when you should have divided, or vice versa.',
    recognition: 'Percent problems ("20% of x is 50"), rate problems, and any "working backwards" question.',
    fix: 'Translate the words directly: "20% of x is 50" means 0.20 * x = 50, so x = 50 / 0.20 = 250. The trap answer is 50 * 0.20 = 10.',
    example: 'If 20% of x is 50, find x. Trap: 50 * 0.20 = 10. Correct: 50 / 0.20 = 250.',
    frequency: 'Appears 1-2 times per test, especially in problem-solving section.',
  },
  percentage_direction: {
    name: 'Percentage Direction Trap',
    description: 'You confused "increased BY x%" with "IS x% of."',
    recognition: 'Any problem with percent increase, percent decrease, or percent comparison.',
    fix: '"Increased by 150%" = original * 2.5 (add the 150% to the 100% base). "Is 150% of" = original * 1.5. Write out the multiplier explicitly.',
    example: 'Price increased by 60%. Original = $100. Trap: $100 * 0.60 = $60. Correct: $100 * 1.60 = $160.',
    frequency: 'Appears on nearly every test. The single most common trap in Problem Solving & Data Analysis.',
  },
  off_by_one: {
    name: 'Off-by-One Trap',
    description: 'You forgot the "+1" when counting inclusive ranges.',
    recognition: '"How many integers from a to b inclusive?" or any counting problem with "including both endpoints."',
    fix: 'Inclusive count = last - first + 1. From 3 to 17 inclusive = 17 - 3 + 1 = 15, not 14.',
    example: 'How many integers from 5 to 20 inclusive? Trap: 20 - 5 = 15. Correct: 20 - 5 + 1 = 16.',
    frequency: 'Appears 1-2 times per test.',
  },
  sequential_percent: {
    name: 'Sequential Percent Change Trap',
    description: 'You added sequential percentages instead of multiplying.',
    recognition: 'Any problem with two or more successive percent changes.',
    fix: 'NEVER add percentages. Multiply the multipliers: up 20% then down 15% = 1.20 * 0.85 = 1.02 (2% net increase, NOT 5%).',
    example: 'Price up 20% then down 20%. Trap: net 0% change. Correct: 1.20 * 0.80 = 0.96 = 4% net DECREASE.',
    frequency: 'Appears on nearly every test because students keep falling for it.',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// MISCONCEPTION GUIDES — keyed by skill ID (from skillTaxonomy)
// ═══════════════════════════════════════════════════════════════════════════

export const misconceptionGuides = {
  'linear-equations-one-variable': {
    commonErrors: [
      'Forgetting to flip the inequality when multiplying/dividing by a negative',
      'Distributing incorrectly: 2(x + 3) = 2x + 6, NOT 2x + 3',
    ],
    correctApproach: 'Isolate the variable step by step. Check by substituting your answer back in.',
    satFrequency: 'Very high — 3-4 questions per test',
  },
  'linear-equations-two-variables': {
    commonErrors: [
      'Confusing slope with y-intercept in y = mx + b',
      'Getting slope sign wrong when converting from standard form Ax + By = C',
    ],
    correctApproach: 'Slope = -A/B in standard form. Always convert to slope-intercept to read slope and intercept.',
    satFrequency: 'High — 2-3 questions per test',
  },
  'systems-of-equations': {
    commonErrors: [
      'Setting up equations with variables reversed in word problems',
      'Confusing no-solution (parallel lines) with the-solution-is-zero',
    ],
    correctApproach: 'Word problems: one equation for total count, one for total value. No solution: same slope, different intercepts.',
    satFrequency: 'High — 2-3 questions per test',
  },
  'quadratic-equations': {
    commonErrors: [
      'Forgetting to set the equation to zero before factoring',
      'Sign errors in the quadratic formula, especially with negative b',
      'Confusing (x - 3)^2 with (x + 3)(x - 3)',
    ],
    correctApproach: 'Always set = 0 first. For "how many solutions": use discriminant b^2 - 4ac (skip solving). Desmos is fastest for vertex/root questions.',
    satFrequency: 'High — 2-4 questions per test',
  },
  'completing-the-square': {
    commonErrors: [
      'Forgetting to add the same value to BOTH sides of the equation',
      'Not dividing by the leading coefficient first when a is not 1',
      'Sign error on the (x - h) term: x^2 + 6x becomes (x + 3)^2, not (x - 3)^2',
    ],
    correctApproach: 'Step 1: If a is not 1, divide everything by a. Step 2: Move constant to right side. Step 3: Take half of b, square it, add to both sides. Step 4: Write as (x + b/2)^2.',
    satFrequency: 'Medium-high — often tested through circle equations',
  },
  'exponential-functions': {
    commonErrors: [
      'Confusing growth rate with multiplier: 5% growth means multiply by 1.05, not 0.05',
      'Mishandling time units: if model uses years but question asks months, adjust exponent',
    ],
    correctApproach: 'Growth: y = a(1 + r)^t. Decay: y = a(1 - r)^t. The base tells the rate: 1.05 = 5% growth.',
    satFrequency: 'Medium — 1-2 questions per test',
  },
  'ratios-and-proportions': {
    commonErrors: [
      'Setting up the proportion with mismatched units',
      'Forgetting to check if the ratio is part-to-part or part-to-whole',
    ],
    correctApproach: 'Label every number with its unit. Cross-multiply only after confirming units match position.',
    satFrequency: 'High — 2-3 questions per test',
  },
  'percentages': {
    commonErrors: [
      '"Increased by 150%" vs "is 150% of" confusion',
      'Adding sequential percentages instead of multiplying',
      'Reversing percent change direction',
    ],
    correctApproach: 'Always write the multiplier explicitly. "Increased by X%" = multiply by (1 + X/100). For sequential changes, multiply the multipliers.',
    satFrequency: 'Very high — 2-4 questions per test',
  },
  'circle-equations': {
    commonErrors: [
      'Forgetting to complete the square before identifying center/radius',
      'Sign error: (x + 3)^2 means center x = -3, not +3',
      'Confusing r^2 with r when reading the radius',
    ],
    correctApproach: 'Standard form: (x - h)^2 + (y - k)^2 = r^2. Center (h, k), radius r. Complete the square for both x and y terms.',
    satFrequency: 'High — appears on nearly every test',
  },
  'right-triangle-trig': {
    commonErrors: [
      'Mixing up opposite and adjacent (they depend on which angle you reference)',
      'Using wrong special triangle ratios (30-60-90 vs 45-45-90)',
    ],
    correctApproach: 'Label the triangle from the angle the question references. SOHCAHTOA. sin(x) = cos(90 - x) for complementary angles.',
    satFrequency: 'Medium — 1-2 questions per test',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// DESMOS TECHNIQUES — keyed by problem type
// ═══════════════════════════════════════════════════════════════════════════

export const desmosTechniques = {
  systems: {
    name: 'Systems of Equations',
    technique: 'Type equation 1 as y = ... on line 1, equation 2 as y = ... on line 2. Tap the intersection point. That is your answer.',
    when: 'Any system of two equations asking for the solution.',
    timeEstimate: '15 seconds',
  },
  'solution-count': {
    name: 'Number of Solutions',
    technique: 'Type left side as y = [left], right side as y = [right]. Count the number of intersection points.',
    when: '"How many solutions does this equation have?"',
    timeEstimate: '10 seconds',
  },
  quadratic: {
    name: 'Quadratic Analysis',
    technique: 'Type y = [quadratic]. The vertex gives min/max. The x-intercepts are the solutions. Read them directly from the graph.',
    when: 'Any question about vertex, minimum, maximum, roots, or x-intercepts.',
    timeEstimate: '15 seconds',
  },
  'parameter-slider': {
    name: 'Finding Unknown Parameters',
    technique: 'Type the equation but replace the unknown constant with a slider variable (e.g., k). Adjust the slider until the graph matches the condition (one solution = tangent, no solution = no intersection).',
    when: '"What value of k gives exactly one solution?"',
    timeEstimate: '20 seconds',
  },
  'verify-answer': {
    name: 'Answer Verification',
    technique: 'Type your equation and your solved answer as a point. If the point falls on the curve, your answer is correct.',
    when: 'After solving any equation — takes 5 seconds to verify.',
    timeEstimate: '5 seconds',
  },
  'table-lookup': {
    name: 'Function Value Lookup',
    technique: 'Type the function, switch to table view, and read f(x) values directly. For f(3) + f(-1), just look up both values.',
    when: 'Any f(x) evaluation question or "find f(a) + f(b)" question.',
    timeEstimate: '10 seconds',
  },
  'inequality-region': {
    name: 'Inequality Graphing',
    technique: 'Type the inequality directly (e.g., y > 2x + 1). Desmos shades the solution region. Check which point(s) fall in the shaded area.',
    when: '"Which point satisfies the inequality?" or "Which region represents the solutions?"',
    timeEstimate: '10 seconds',
  },
};

/**
 * Get relevant strategies based on error patterns and weak skill IDs.
 * Returns the 2-3 most relevant strategy entries as a formatted string.
 */
export const getRelevantStrategies = (errorPatterns, weakSkillIds) => {
  const strategies = [];

  // Match trap guides to error patterns
  if (errorPatterns) {
    const trapTypeMap = {
      partial_calculation: 'partial_calculation',
      sign_error: 'sign_error',
      misread: 'misread_question',
      reversed_operation: 'reversed_operation',
      percentage_direction: 'percentage_direction',
      off_by_one: 'off_by_one',
      sequential_percent: 'sequential_percent',
    };

    Object.entries(errorPatterns).forEach(([errorType, count]) => {
      if (count >= 2) {
        const trapKey = trapTypeMap[errorType];
        if (trapKey && trapGuides[trapKey]) {
          strategies.push({
            type: 'trap',
            relevance: count,
            content: trapGuides[trapKey],
          });
        }
      }
    });
  }

  // Match misconception guides to weak skills
  if (weakSkillIds && Array.isArray(weakSkillIds)) {
    weakSkillIds.forEach(skillId => {
      if (misconceptionGuides[skillId]) {
        strategies.push({
          type: 'misconception',
          relevance: 1,
          content: { skillId, ...misconceptionGuides[skillId] },
        });
      }
    });
  }

  // Sort by relevance and take top 3
  strategies.sort((a, b) => b.relevance - a.relevance);
  const topStrategies = strategies.slice(0, 3);

  if (topStrategies.length === 0) return '';

  let result = '\n--- TARGETED STRATEGY GUIDES ---\n';
  result += 'Use these curated strategies when helping this student:\n\n';

  topStrategies.forEach(s => {
    if (s.type === 'trap') {
      result += `TRAP: ${s.content.name}\n`;
      result += `Recognition: ${s.content.recognition}\n`;
      result += `Fix: ${s.content.fix}\n`;
      result += `Example: ${s.content.example}\n\n`;
    } else {
      result += `MISCONCEPTION: ${s.content.skillId}\n`;
      result += `Common errors: ${s.content.commonErrors.join('; ')}\n`;
      result += `Correct approach: ${s.content.correctApproach}\n\n`;
    }
  });

  return result;
};

export default {
  trapGuides,
  misconceptionGuides,
  desmosTechniques,
  getRelevantStrategies,
};
