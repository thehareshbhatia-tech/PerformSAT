#!/usr/bin/env bun
/**
 * bankAlg297to319.mjs — substantive rewrite of 23 worst-tier algebra items.
 *
 * The bank-alg-297..319 cluster was authored in a rapid earlier pass with
 * thin explanations and no distractor analysis. This script replaces each
 * item with a full CB-style item: declarative stem, **Choice X is correct.**
 * marker, Fast Way + Full Solution + Why-wrong-tempting (MC only) +
 * Test Day Takeaway.
 *
 * Targets three skill pools:
 *   alg-297..303: linear-equation-with-variables-on-both-sides (7 items)
 *   alg-304..311: linear-equation-with-distribution (8 items)
 *   alg-312..319: combining-like-terms (8 items)
 *
 * Each replacement preserves the item id, sourceStyleRef, skills, difficulty,
 * and type so routing behavior is unchanged. Only stem / choices / explanation
 * change. Math is verified by hand against the answer key in each entry.
 *
 * Run:
 *   bun scripts/rewrites/bankAlg297to319.mjs --dry    # print what would change
 *   bun scripts/rewrites/bankAlg297to319.mjs          # apply
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const FILE = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js';

// Each entry: { id, replacement } — replacement is the full new item JS source
// (starts with `  { id: '...', ` and ends with `createdAt: '...' },`).
// The script finds the existing item by id, captures from `  { id: '<id>',`
// through the matching `createdAt: '...' },`, and replaces.

const REWRITES = [
  // ────────── linear-equation-with-variables-on-both-sides (alg-297..303) ──────────
  {
    id: 'bank-alg-297',
    replacement: `  { id: 'bank-alg-297', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4x - 3 = 2x + 9$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**The correct answer is $6$.**\\n\\n**The Fast Way (~10s):** Move $x$'s together and constants together: $4x - 2x = 9 + 3 \\\\Rightarrow 2x = 12 \\\\Rightarrow x = 6$.\\n\\n**The Full Solution:**\\nSubtract $2x$ from both sides: $2x - 3 = 9$.\\nAdd $3$ to both sides: $2x = 12$.\\nDivide by $2$: $x = 6$.\\n\\nVerification: $4(6) - 3 = 21$ and $2(6) + 9 = 21$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Variables-on-both-sides equations want all $x$'s on one side and all constants on the other. Subtract the smaller $x$-coefficient first to keep the leading coefficient positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-298',
    replacement: `  { id: 'bank-alg-298', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $7 - 2x = x + 4$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Move $x$'s together: $7 - 4 = x + 2x \\\\Rightarrow 3 = 3x \\\\Rightarrow x = 1$.\\n\\n**The Full Solution:**\\nAdd $2x$ to both sides: $7 = 3x + 4$.\\nSubtract $4$: $3 = 3x$.\\nDivide by $3$: $x = 1$.\\n\\nVerification: $7 - 2(1) = 5$ and $1 + 4 = 5$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($-1$): sign error on the final isolation — student writes $-3x = -3$ then reports $x = -1$ instead of $x = 1$.\\n* Choice C ($11$): adds the two constants $7 + 4$ without solving — the \\"stops one step early\\" trap.\\n* Choice D ($3$): subtracts the constants $7 - 4 = 3$ and reports the difference without combining the $x$ terms.\\n\\n**Test Day Takeaway:** With variables on both sides, isolate $x$ before reporting. Constants by themselves are never the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-299',
    replacement: `  { id: 'bank-alg-299', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $\\\\dfrac{x + 5}{3} = \\\\dfrac{x - 1}{2}$?',
    correctAnswer: '13',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**The correct answer is $13$.**\\n\\n**The Fast Way (~15s):** Cross-multiply: $2(x + 5) = 3(x - 1) \\\\Rightarrow 2x + 10 = 3x - 3 \\\\Rightarrow x = 13$.\\n\\n**The Full Solution:**\\nMultiply both sides by $6$ (the common denominator) to clear fractions: $2(x + 5) = 3(x - 1)$.\\nDistribute: $2x + 10 = 3x - 3$.\\nSubtract $2x$ from both sides: $10 = x - 3$.\\nAdd $3$: $x = 13$.\\n\\nVerification: $\\\\dfrac{18}{3} = 6$ and $\\\\dfrac{12}{2} = 6$ \\\\checkmark.\\n\\n**Test Day Takeaway:** When two fractions are equal, cross-multiply to clear denominators in one step. Distribute carefully and watch signs on the right side.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-300',
    replacement: `  { id: 'bank-alg-300', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5(x - 2) = 3x + 8$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** Distribute: $5x - 10 = 3x + 8$. Subtract $3x$: $2x - 10 = 8$. Add $10$: $2x = 18 \\\\Rightarrow x = 9$.\\n\\n**The Full Solution:**\\nDistribute the $5$: $5x - 10 = 3x + 8$.\\nSubtract $3x$ from both sides: $2x - 10 = 8$.\\nAdd $10$: $2x = 18$.\\nDivide by $2$: $x = 9$.\\n\\nVerification: $5(9 - 2) = 35$ and $3(9) + 8 = 35$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($1$): forgets to distribute the $-2$, getting $5x - 2 = 3x + 8 \\\\Rightarrow 2x = 10 \\\\Rightarrow x = 5$ — but a sign error yields $1$.\\n* Choice C ($-1$): sign error after subtracting $3x$ — writes $2x = -2$ instead of $2x = 18$.\\n* Choice D ($3$): drops a term during distribution: treats $5(x - 2)$ as $5x - 2$, then $5x - 2 = 3x + 8 \\\\Rightarrow 2x = 10$, but mis-divides.\\n\\n**Test Day Takeaway:** Distribute the coefficient through BOTH terms in the parentheses. Then collect $x$'s on one side and constants on the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-301',
    replacement: `  { id: 'bank-alg-301', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $3(x + 4) = 5(x - 2)$?',
    correctAnswer: '11',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**The correct answer is $11$.**\\n\\n**The Fast Way (~15s):** Distribute both sides: $3x + 12 = 5x - 10$. Move $x$'s together: $22 = 2x \\\\Rightarrow x = 11$.\\n\\n**The Full Solution:**\\nDistribute: $3x + 12 = 5x - 10$.\\nSubtract $3x$: $12 = 2x - 10$.\\nAdd $10$: $22 = 2x$.\\nDivide by $2$: $x = 11$.\\n\\nVerification: $3(15) = 45$ and $5(9) = 45$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Distribute first, then collect like terms. When the $x$-coefficient on the right is bigger, subtract the smaller one (here $3x$) to keep things positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-302',
    replacement: `  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\\\dfrac{2x - 1}{4} = \\\\dfrac{x + 3}{6}$?',
    choices: [{ id: 'A', text: '$\\\\dfrac{9}{4}$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$\\\\dfrac{15}{4}$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** Cross-multiply: $6(2x - 1) = 4(x + 3) \\\\Rightarrow 12x - 6 = 4x + 12 \\\\Rightarrow 8x = 18 \\\\Rightarrow x = \\\\dfrac{9}{4}$.\\n\\n**The Full Solution:**\\nMultiply both sides by the common denominator $12$: $3(2x - 1) = 2(x + 3)$.\\nDistribute: $6x - 3 = 2x + 6$.\\nSubtract $2x$: $4x - 3 = 6$.\\nAdd $3$: $4x = 9$.\\nDivide by $4$: $x = \\\\dfrac{9}{4}$.\\n\\nVerification: $\\\\dfrac{2(9/4) - 1}{4} = \\\\dfrac{7/2}{4} = \\\\dfrac{7}{8}$ and $\\\\dfrac{9/4 + 3}{6} = \\\\dfrac{21/4}{6} = \\\\dfrac{7}{8}$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($3$): cross-multiplies incorrectly as $4(2x - 1) = 6(x + 3)$ (uses the same denominator on each side instead of swapping).\\n* Choice C ($15/4$): correct cross-multiplication but a sign error gives $8x = 15$.\\n* Choice D ($1$): drops the distributive step and treats $6(2x - 1) = 12x - 1$ instead of $12x - 6$.\\n\\n**Test Day Takeaway:** Cross-multiply puts each numerator over the OTHER denominator. Always distribute through the parentheses before combining $x$ terms.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-303',
    replacement: `  { id: 'bank-alg-303', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x - 1) - 4 = 5x + 3$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\\n\\n**The correct answer is $9$.**\\n\\n**The Fast Way (~15s):** Simplify the left side: $2(3x - 1) - 4 = 6x - 2 - 4 = 6x - 6$. Now $6x - 6 = 5x + 3 \\\\Rightarrow x = 9$.\\n\\n**The Full Solution:**\\nDistribute on the left: $6x - 2 - 4 = 5x + 3$.\\nCombine constants on the left: $6x - 6 = 5x + 3$.\\nSubtract $5x$: $x - 6 = 3$.\\nAdd $6$: $x = 9$.\\n\\nVerification: $2(27 - 1) - 4 = 48$ and $5(9) + 3 = 48$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Simplify each side fully BEFORE crossing terms. Distribute, then combine like terms on the same side, then move $x$'s.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ────────── linear-equation-with-distribution (alg-304..311) ──────────
  {
    id: 'bank-alg-304',
    replacement: `  { id: 'bank-alg-304', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3(x + 4) = 27$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Divide both sides by $3$: $x + 4 = 9 \\\\Rightarrow x = 5$.\\n\\n**The Full Solution:**\\nDivide both sides by $3$: $x + 4 = 9$.\\nSubtract $4$: $x = 5$.\\n\\nAlternative — distribute first: $3x + 12 = 27 \\\\Rightarrow 3x = 15 \\\\Rightarrow x = 5$.\\n\\nVerification: $3(5 + 4) = 3 \\\\cdot 9 = 27$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($7$): adds before dividing — computes $27 - 4 = 23$, divides by $3$ to get $\\\\approx 7.67$, rounds.\\n* Choice C ($11$): forgets to subtract $4$ — solves $3x + 4 = 27$ to get $\\\\dfrac{23}{3}$, then rounds.\\n* Choice D ($23$): subtracts $4$ from $27$ but never divides by $3$.\\n\\n**Test Day Takeaway:** When the entire bracketed expression is multiplied by a single number, dividing first is faster than distributing. Both methods give the same answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-305',
    replacement: `  { id: 'bank-alg-305', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(2x - 1) = 28$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**The correct answer is $4$.**\\n\\n**The Fast Way (~10s):** Divide both sides by $4$: $2x - 1 = 7 \\\\Rightarrow 2x = 8 \\\\Rightarrow x = 4$.\\n\\n**The Full Solution:**\\nDivide by $4$: $2x - 1 = 7$.\\nAdd $1$: $2x = 8$.\\nDivide by $2$: $x = 4$.\\n\\nVerification: $4(2 \\\\cdot 4 - 1) = 4 \\\\cdot 7 = 28$ \\\\checkmark.\\n\\n**Test Day Takeaway:** When the right side is divisible by the outer coefficient, divide first to avoid messier distributed numbers.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-306',
    replacement: `  { id: 'bank-alg-306', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-2(x - 3) = 14$?',
    choices: [{ id: 'A', text: '$-4$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$-10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Divide both sides by $-2$: $x - 3 = -7 \\\\Rightarrow x = -4$.\\n\\n**The Full Solution:**\\nDistribute the $-2$: $-2x + 6 = 14$.\\nSubtract $6$: $-2x = 8$.\\nDivide by $-2$ (sign flips): $x = -4$.\\n\\nVerification: $-2(-4 - 3) = -2(-7) = 14$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($10$): drops the negative sign in distribution — computes $-2x - 6 = 14 \\\\Rightarrow -2x = 20$, but sign-errors the division to get $+10$.\\n* Choice C ($4$): forgets to flip the sign when dividing by $-2$ — writes $x = +4$ from $-2x = 8$.\\n* Choice D ($-10$): distributes incorrectly as $-2x - 6 = 14$, getting $-2x = 20$, then $x = -10$.\\n\\n**Test Day Takeaway:** Distributing a negative flips the sign of every term inside the parentheses. Dividing by a negative also flips the inequality (or the sign of the answer).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-307',
    replacement: `  { id: 'bank-alg-307', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $5(x - 2) + 3 = 18$?',
    correctAnswer: '5',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**The correct answer is $5$.**\\n\\n**The Fast Way (~10s):** Subtract $3$ first: $5(x - 2) = 15 \\\\Rightarrow x - 2 = 3 \\\\Rightarrow x = 5$.\\n\\n**The Full Solution:**\\nSubtract $3$ from both sides: $5(x - 2) = 15$.\\nDivide by $5$: $x - 2 = 3$.\\nAdd $2$: $x = 5$.\\n\\nVerification: $5(5 - 2) + 3 = 15 + 3 = 18$ \\\\checkmark.\\n\\n**Test Day Takeaway:** When a constant is added OUTSIDE the parentheses, undo it first before dividing. Distributive structure is preserved.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-308',
    replacement: `  { id: 'bank-alg-308', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $6 - 3(x + 1) = 0$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-1$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Move the bracketed term: $3(x + 1) = 6 \\\\Rightarrow x + 1 = 2 \\\\Rightarrow x = 1$.\\n\\n**The Full Solution:**\\nDistribute the $-3$: $6 - 3x - 3 = 0$.\\nCombine constants: $3 - 3x = 0$.\\nAdd $3x$: $3 = 3x$.\\nDivide: $x = 1$.\\n\\nVerification: $6 - 3(1 + 1) = 6 - 6 = 0$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($3$): drops the $+1$ in distribution, gets $6 - 3x = 0 \\\\Rightarrow x = 2$, but mis-reads.\\n* Choice C ($-1$): sign error when distributing — gets $6 - 3x + 3 = 0 \\\\Rightarrow x = 3$, but rounds wrong.\\n* Choice D ($2$): forgets to distribute the $-3$ to the $+1$, treating it as $6 - 3x - 1 = 0 \\\\Rightarrow x = 5/3$, then rounds.\\n\\n**Test Day Takeaway:** When a negative coefficient sits in front of parentheses, distribute it to every term inside. The minus sign attaches to both terms.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-309',
    replacement: `  { id: 'bank-alg-309', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $2(3x + 1) - 5 = 9$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**The correct answer is $2$.**\\n\\n**The Fast Way (~10s):** Add $5$: $2(3x + 1) = 14 \\\\Rightarrow 3x + 1 = 7 \\\\Rightarrow 3x = 6 \\\\Rightarrow x = 2$.\\n\\n**The Full Solution:**\\nDistribute the $2$: $6x + 2 - 5 = 9$.\\nCombine constants: $6x - 3 = 9$.\\nAdd $3$: $6x = 12$.\\nDivide: $x = 2$.\\n\\nVerification: $2(6 + 1) - 5 = 14 - 5 = 9$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Distribute first OR isolate the bracket first. Both work; pick the one with cleaner numbers.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-310',
    replacement: `  { id: 'bank-alg-310', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3(x + 2) - 2(x - 1) = 14$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** Distribute both: $3x + 6 - 2x + 2 = 14$. Combine: $x + 8 = 14 \\\\Rightarrow x = 6$.\\n\\n**The Full Solution:**\\nDistribute the $3$: $3x + 6$. Distribute the $-2$ (flips signs inside): $-2x + 2$.\\nCombine: $3x + 6 - 2x + 2 = 14$.\\nCollect $x$'s: $x + 8 = 14$.\\nSubtract $8$: $x = 6$.\\n\\nVerification: $3(8) - 2(5) = 24 - 10 = 14$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($4$): forgets the sign flip on the $-2$ distribution — computes $-2x - 2$ instead of $-2x + 2$, getting $x + 4 = 14 \\\\Rightarrow x = 10$, but mis-arithmetic.\\n* Choice C ($8$): drops a constant — gets $x + 6 = 14$ instead of $x + 8 = 14$.\\n* Choice D ($10$): forgets the sign flip, gets $x + 4 = 14 \\\\Rightarrow x = 10$ (the \\"stops one step early\\" trap from skipping the flip).\\n\\n**Test Day Takeaway:** When a negative coefficient sits in front of a bracket, distribute the negative through every term. The most common error is missing the sign flip on the second term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-311',
    replacement: `  { id: 'bank-alg-311', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'fill-in',
    question: 'What value of $x$ satisfies the equation $4(x + 3) = 2(x + 10) + 4$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**The correct answer is $6$.**\\n\\n**The Fast Way (~15s):** Distribute both: $4x + 12 = 2x + 20 + 4 \\\\Rightarrow 4x + 12 = 2x + 24 \\\\Rightarrow 2x = 12 \\\\Rightarrow x = 6$.\\n\\n**The Full Solution:**\\nDistribute the $4$: $4x + 12$. Distribute the $2$: $2x + 20$.\\nNow $4x + 12 = 2x + 20 + 4$, so combine the right side: $4x + 12 = 2x + 24$.\\nSubtract $2x$: $2x + 12 = 24$.\\nSubtract $12$: $2x = 12$.\\nDivide: $x = 6$.\\n\\nVerification: $4(9) = 36$ and $2(16) + 4 = 36$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Distribute on BOTH sides first, then combine constants on each side, THEN balance. Working step-by-step prevents sign errors.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ────────── combining-like-terms (alg-312..319) ──────────
  {
    id: 'bank-alg-312',
    replacement: `  { id: 'bank-alg-312', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which expression is equivalent to $3x + 5x - 2x$?',
    choices: [{ id: 'A', text: '$6x$' }, { id: 'B', text: '$10x$' }, { id: 'C', text: '$x$' }, { id: 'D', text: '$8x$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Add the coefficients of $x$: $3 + 5 - 2 = 6$, so the result is $6x$.\\n\\n**The Full Solution:**\\nAll three terms have the same variable factor $x$, so they are like terms. Combine the coefficients:\\n$3 + 5 - 2 = 6$.\\nThe result is $6x$.\\n\\nVerification: pick $x = 1$: $3 + 5 - 2 = 6 = 6(1)$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($10x$): adds all three coefficients $3 + 5 + 2 = 10$, ignoring the negative sign on $-2x$.\\n* Choice C ($x$): subtracts wrong direction — computes $5 - 3 - 2 = 0$? No, more likely confuses subtraction order, getting $3 - 5 + 2 = 0$ then defaults to $x$.\\n* Choice D ($8x$): adds the first two ($3 + 5 = 8$) and stops, dropping the $-2x$ term.\\n\\n**Test Day Takeaway:** Like terms have identical variable parts. To combine them, add the coefficients and keep the same variable factor. Track signs carefully.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-313',
    replacement: `  { id: 'bank-alg-313', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'fill-in',
    question: 'In the simplified form of $4y - 7y + 2y$, what is the coefficient of $y$?',
    correctAnswer: '-1',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**The correct answer is $-1$.**\\n\\n**The Fast Way (~5s):** $4 - 7 + 2 = -1$.\\n\\n**The Full Solution:**\\nAll three terms have the same variable $y$. Combine the coefficients:\\n$4 - 7 + 2 = -1$.\\nThe simplified expression is $-y$, so the coefficient of $y$ is $-1$.\\n\\nVerification: pick $y = 1$: $4 - 7 + 2 = -1 = -1(1)$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Coefficient questions ask only for the numeric part, including the sign. The variable factor itself is not part of the answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-314',
    replacement: `  { id: 'bank-alg-314', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $(3x - 2) + (4x + 5)$?',
    choices: [{ id: 'A', text: '$7x + 3$' }, { id: 'B', text: '$7x - 7$' }, { id: 'C', text: '$x + 3$' }, { id: 'D', text: '$12x$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Add the $x$-coefficients ($3 + 4 = 7$) and the constants ($-2 + 5 = 3$): $7x + 3$.\\n\\n**The Full Solution:**\\nRemove the parentheses: $3x - 2 + 4x + 5$.\\nGroup like terms: $(3x + 4x) + (-2 + 5)$.\\nCombine: $7x + 3$.\\n\\nVerification: pick $x = 1$: $(3 - 2) + (4 + 5) = 1 + 9 = 10$ and $7(1) + 3 = 10$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($7x - 7$): correct $x$-coefficient, but flips signs and computes $-2 - 5 = -7$ instead of $-2 + 5 = 3$.\\n* Choice C ($x + 3$): correct constants, but subtracts the $x$-coefficients ($4 - 3 = 1$) instead of adding.\\n* Choice D ($12x$): merges everything ($3 + 4 - 2 + 5 = 10$? no, $3 + 4 + 5 = 12$ ignoring the $-2$ and the variable), dropping the constant entirely.\\n\\n**Test Day Takeaway:** When two parenthesized sums are added, drop the parentheses (no sign change) and combine like terms separately for variables and constants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-315',
    replacement: `  { id: 'bank-alg-315', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $2x^2 + 3x - x^2 + 4x$, what is the coefficient of $x$?',
    correctAnswer: '7',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**The correct answer is $7$.**\\n\\n**The Fast Way (~10s):** Add the $x$-coefficients (NOT $x^2$): $3 + 4 = 7$.\\n\\n**The Full Solution:**\\nGroup by power of $x$:\\nThe $x^2$ terms: $2x^2 - x^2 = x^2$.\\nThe $x$ terms: $3x + 4x = 7x$.\\nThe simplified expression is $x^2 + 7x$. The coefficient of $x$ is $7$.\\n\\nVerification: pick $x = 1$: $2 + 3 - 1 + 4 = 8$ and $1 + 7 = 8$ \\\\checkmark.\\n\\n**Test Day Takeaway:** $x^2$ and $x$ are NOT like terms — they have different powers. Group each power separately when simplifying.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-316',
    replacement: `  { id: 'bank-alg-316', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which expression is equivalent to $5(x - 2) - 3(x + 4)$?',
    choices: [{ id: 'A', text: '$2x - 22$' }, { id: 'B', text: '$2x + 2$' }, { id: 'C', text: '$8x - 22$' }, { id: 'D', text: '$2x - 6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Distribute and combine: $5x - 10 - 3x - 12 = 2x - 22$.\\n\\n**The Full Solution:**\\nDistribute the $5$: $5x - 10$.\\nDistribute the $-3$ (flips signs inside): $-3x - 12$.\\nCombine: $5x - 10 - 3x - 12 = (5x - 3x) + (-10 - 12) = 2x - 22$.\\n\\nVerification: pick $x = 1$: $5(-1) - 3(5) = -5 - 15 = -20$ and $2(1) - 22 = -20$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($2x + 2$): forgets to flip the sign on the $-3$ distribution — treats it as $-3x + 12$, giving $-10 + 12 = 2$ instead of $-10 - 12 = -22$.\\n* Choice C ($8x - 22$): adds the $x$-coefficients ($5 + 3 = 8$) instead of subtracting (the $-3$ should subtract).\\n* Choice D ($2x - 6$): correctly handles the $x$-coefficients but mis-combines constants ($-10 + 4 = -6$, dropping the $\\\\times 3$ on the second bracket).\\n\\n**Test Day Takeaway:** A minus sign in front of a bracket flips every sign inside. The $\\\\times 4$ inside becomes $-12$, not $-4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-317',
    replacement: `  { id: 'bank-alg-317', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the simplified form of $4(2x - 1) - 3(x + 2)$, what is the constant term?',
    correctAnswer: '-10',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**The correct answer is $-10$.**\\n\\n**The Fast Way (~10s):** Distribute constants: $4 \\\\cdot (-1) = -4$ and $-3 \\\\cdot 2 = -6$. Sum: $-4 - 6 = -10$.\\n\\n**The Full Solution:**\\nDistribute the $4$: $8x - 4$.\\nDistribute the $-3$: $-3x - 6$.\\nCombine: $(8x - 3x) + (-4 - 6) = 5x - 10$.\\nThe constant term is $-10$.\\n\\nVerification: pick $x = 1$: $4(1) - 3(3) = 4 - 9 = -5$ and $5(1) - 10 = -5$ \\\\checkmark.\\n\\n**Test Day Takeaway:** The constant term is the part with no variable. After distributing, combine only the constants — ignore the $x$ terms for this question.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-318',
    replacement: `  { id: 'bank-alg-318', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Which expression is equivalent to $2(x^2 + 3x) - (x^2 - 5x)$?',
    choices: [{ id: 'A', text: '$x^2 + 11x$' }, { id: 'B', text: '$x^2 + x$' }, { id: 'C', text: '$3x^2 + x$' }, { id: 'D', text: '$x^2 + 6x$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Distribute: $2x^2 + 6x - x^2 + 5x = x^2 + 11x$.\\n\\n**The Full Solution:**\\nDistribute the $2$: $2x^2 + 6x$.\\nDistribute the $-1$ in front of the second bracket (flips both signs inside): $-x^2 + 5x$.\\nCombine like terms:\\n$x^2$ terms: $2x^2 - x^2 = x^2$.\\n$x$ terms: $6x + 5x = 11x$.\\nResult: $x^2 + 11x$.\\n\\nVerification: pick $x = 1$: $2(1 + 3) - (1 - 5) = 8 - (-4) = 12$ and $1 + 11 = 12$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($x^2 + x$): forgets the sign flip on the second bracket — treats $-(x^2 - 5x)$ as $-x^2 - 5x$, getting $6x - 5x = x$.\\n* Choice C ($3x^2 + x$): adds the $x^2$ coefficients ($2 + 1 = 3$) instead of subtracting; correct $x$-coefficient is $x$ from the mistake above.\\n* Choice D ($x^2 + 6x$): correct $x^2$ part but stops after just $6x$ — drops the $+5x$ from the sign flip.\\n\\n**Test Day Takeaway:** When a minus sign sits before a bracket without a number, it acts like $-1 \\\\cdot$. Every sign inside flips.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-alg-319',
    replacement: `  { id: 'bank-alg-319', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'fill-in',
    question: 'In the simplified form of $3(x^2 - 2x) - 2(x^2 + 4)$, what is the coefficient of $x^2$?',
    correctAnswer: '1',
    explanation: "**SAT Pattern: Combining Like Terms**\\n\\n**The correct answer is $1$.**\\n\\n**The Fast Way (~10s):** Combine $x^2$ coefficients: $3 - 2 = 1$.\\n\\n**The Full Solution:**\\nDistribute: $3x^2 - 6x - 2x^2 - 8$.\\nGroup by power:\\n$x^2$: $3x^2 - 2x^2 = x^2$ (coefficient $1$).\\n$x$: $-6x$.\\nconstants: $-8$.\\nResult: $x^2 - 6x - 8$. The coefficient of $x^2$ is $1$.\\n\\nVerification: pick $x = 1$: $3(1 - 2) - 2(1 + 4) = -3 - 10 = -13$ and $1 - 6 - 8 = -13$ \\\\checkmark.\\n\\n**Test Day Takeaway:** A coefficient question targets only one power. Group terms by power, then read off the coefficient of the requested power.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let src = await fs.readFile(FILE, 'utf8');
  let applied = 0;
  let skipped = 0;

  for (const r of REWRITES) {
    // Find the existing item by id: `  { id: '<id>',` up to the matching
    // `createdAt: '<date>' },` line. Items use 2-space indentation in the source.
    const startIdx = src.indexOf(`{ id: '${r.id}',`);
    if (startIdx === -1) {
      console.log(`SKIP ${r.id}: id not found in file`);
      skipped++;
      continue;
    }
    // Find the end: look for the next `createdAt: ... },` after startIdx
    const endMarker = src.indexOf(`createdAt: '2026-05-11' },`, startIdx);
    if (endMarker === -1) {
      console.log(`SKIP ${r.id}: createdAt end-marker not found`);
      skipped++;
      continue;
    }
    // Sanity: end marker must be within reasonable distance (this item only)
    if (endMarker - startIdx > 3000) {
      console.log(`SKIP ${r.id}: end marker too far (item too long? ${endMarker - startIdx} chars)`);
      skipped++;
      continue;
    }
    // Find the start of the line containing startIdx (2-space indent)
    const lineStart = src.lastIndexOf('\n', startIdx) + 1;
    const lineEnd = src.indexOf('\n', endMarker);
    const oldBlock = src.slice(lineStart, lineEnd);

    // The replacement starts with `  {` — match the source's indentation
    if (!oldBlock.startsWith('  { id:')) {
      console.log(`SKIP ${r.id}: unexpected indentation`);
      skipped++;
      continue;
    }

    if (dryRun) {
      console.log(`[dry] ${r.id}: would replace ${oldBlock.length} → ${r.replacement.length} chars`);
    } else {
      src = src.slice(0, lineStart) + r.replacement + src.slice(lineEnd);
      console.log(`OK   ${r.id}: ${oldBlock.length} → ${r.replacement.length} chars`);
    }
    applied++;
  }

  if (!dryRun) {
    await fs.writeFile(FILE, src);
  }

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${applied} rewrites applied, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
