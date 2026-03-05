import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/aiTutorService';
import ProactiveHint from './ProactiveHint';
import {
  generateProactiveRecommendation,
  shouldOfferProactiveHint,
  generateSmartPrompts,
  buildSkillContextForAI
} from '../services/proactiveRecommendationService';
import { getSkillById } from '../data/skillTaxonomy';
import { colors as designColors, typography as designTypo, shadows as designShadows } from '../design/tokens';

// Comprehensive markdown renderer for chat messages with full math/LaTeX support
const renderMarkdown = (text) => {
  if (!text) return null;

  let cleanedText = text;

  // === LATEX CLEANUP - ORDER MATTERS! ===

  // First, handle \text{} commands - extract the text content
  cleanedText = cleanedText.replace(/\\text\{([^}]+)\}/g, '$1');
  cleanedText = cleanedText.replace(/\\textbf\{([^}]+)\}/g, '**$1**');
  cleanedText = cleanedText.replace(/\\textit\{([^}]+)\}/g, '*$1*');
  cleanedText = cleanedText.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  cleanedText = cleanedText.replace(/\\mathbf\{([^}]+)\}/g, '$1');

  // Handle fractions BEFORE removing delimiters (convert to special marker)
  // \frac{a}{b} -> ⟦FRAC:a:b⟧ (temporary marker)
  cleanedText = cleanedText.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '⟦FRAC:$1:$2⟧');

  // Remove display math delimiters: $$...$$ and \[...\] (multiline support with 's' flag)
  cleanedText = cleanedText.replace(/\$\$([\s\S]*?)\$\$/g, '$1');
  cleanedText = cleanedText.replace(/\\\[([\s\S]*?)\\\]/g, '$1');
  // Remove inline math delimiters: $...$ and \(...\)
  cleanedText = cleanedText.replace(/\$([^$]+)\$/g, '$1');
  cleanedText = cleanedText.replace(/\\\(([^)]+)\\\)/g, '$1');

  // === LATEX COMMANDS TO READABLE FORMAT ===
  // Square root: \sqrt{x} -> √(x)
  cleanedText = cleanedText.replace(/\\sqrt\{([^}]+)\}/g, '√($1)');
  cleanedText = cleanedText.replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '$1√($2)');
  // Powers: x^{2} -> x^2, also handles x^2 directly
  cleanedText = cleanedText.replace(/\^\{([^}]+)\}/g, '^($1)');
  // Subscripts: x_{n} -> x_n
  cleanedText = cleanedText.replace(/_\{([^}]+)\}/g, '_($1)');
  // Common LaTeX symbols
  cleanedText = cleanedText.replace(/\\times/g, '×');
  cleanedText = cleanedText.replace(/\\cdot/g, '·');
  cleanedText = cleanedText.replace(/\\div/g, '÷');
  cleanedText = cleanedText.replace(/\\pm/g, '±');
  cleanedText = cleanedText.replace(/\\mp/g, '∓');
  cleanedText = cleanedText.replace(/\\leq/g, '≤');
  cleanedText = cleanedText.replace(/\\geq/g, '≥');
  cleanedText = cleanedText.replace(/\\neq/g, '≠');
  cleanedText = cleanedText.replace(/\\approx/g, '≈');
  cleanedText = cleanedText.replace(/\\equiv/g, '≡');
  cleanedText = cleanedText.replace(/\\sim/g, '∼');
  cleanedText = cleanedText.replace(/\\propto/g, '∝');
  cleanedText = cleanedText.replace(/\\infty/g, '∞');
  cleanedText = cleanedText.replace(/\\pi/g, 'π');
  cleanedText = cleanedText.replace(/\\theta/g, 'θ');
  cleanedText = cleanedText.replace(/\\alpha/g, 'α');
  cleanedText = cleanedText.replace(/\\beta/g, 'β');
  cleanedText = cleanedText.replace(/\\gamma/g, 'γ');
  cleanedText = cleanedText.replace(/\\delta/g, 'δ');
  cleanedText = cleanedText.replace(/\\Delta/g, 'Δ');
  cleanedText = cleanedText.replace(/\\sigma/g, 'σ');
  cleanedText = cleanedText.replace(/\\Sigma/g, 'Σ');
  cleanedText = cleanedText.replace(/\\mu/g, 'μ');
  cleanedText = cleanedText.replace(/\\lambda/g, 'λ');
  cleanedText = cleanedText.replace(/\\phi/g, 'φ');
  cleanedText = cleanedText.replace(/\\omega/g, 'ω');
  cleanedText = cleanedText.replace(/\\Omega/g, 'Ω');
  // Trig functions - remove backslash
  cleanedText = cleanedText.replace(/\\(sin|cos|tan|cot|sec|csc|arcsin|arccos|arctan|log|ln|exp)/g, '$1');
  // Left/right delimiters
  cleanedText = cleanedText.replace(/\\left/g, '');
  cleanedText = cleanedText.replace(/\\right/g, '');
  // Remove remaining backslashes from LaTeX commands (cleanup)
  cleanedText = cleanedText.replace(/\\([a-zA-Z]+)/g, '$1');
  // Remove empty braces
  cleanedText = cleanedText.replace(/\{\}/g, '');
  // Clean up standalone braces used in LaTeX
  cleanedText = cleanedText.replace(/\{([^{}]+)\}/g, '$1');

  const lines = cleanedText.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const processMath = (str) => {
    let processed = str;

    // Process fraction markers (⟦FRAC:num:denom⟧) into stacked fractions
    processed = processed.replace(/⟦FRAC:([^:]+):([^⟧]+)⟧/g,
      '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;line-height:1.1;"><span style="border-bottom:1px solid currentColor;padding:1px 4px;font-size:0.9em;">$1</span><span style="padding:1px 4px;font-size:0.9em;">$2</span></span>');

    // Process simple fractions like 1/2, 3/4 (only simple numeric ones)
    processed = processed.replace(/(?<![a-zA-Z\d\/])(\d+)\/(\d+)(?![a-zA-Z\d\/])/g,
      '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.1;"><span style="border-bottom:1px solid currentColor;padding:1px 3px;font-size:0.85em;">$1</span><span style="padding:1px 3px;font-size:0.85em;">$2</span></span>');

    // Process exponents with parentheses containing content
    processed = processed.replace(/\^\(([^)]+)\)/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process simple numeric exponents (x^2, x^12, etc.)
    processed = processed.replace(/\^(\d+)/g, (match, num) => {
      const superscripts = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
      return num.split('').map(d => superscripts[d] || d).join('');
    });
    // Process letter exponents (x^n, x^a, etc.)
    processed = processed.replace(/\^([a-zA-Z])/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process subscripts with parentheses
    processed = processed.replace(/_\(([^)]+)\)/g, '<sub style="font-size:0.75em;vertical-align:sub;">$1</sub>');
    // Process simple numeric subscripts
    processed = processed.replace(/_(\d+)/g, (match, num) => {
      const subscripts = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
      return num.split('').map(d => subscripts[d] || d).join('');
    });
    // Process letter subscripts
    processed = processed.replace(/_([a-zA-Z])(?![a-zA-Z])/g, '<sub style="font-size:0.75em;vertical-align:sub;">$1</sub>');

    // Process square root (already converted from \sqrt{})
    processed = processed.replace(/sqrt\(([^)]+)\)/gi, '√($1)');

    // Convert remaining math symbols
    processed = processed.replace(/(\d)\s*\*\s*(\d)/g, '$1 × $2');
    processed = processed.replace(/<=/g, '≤');
    processed = processed.replace(/>=/g, '≥');
    processed = processed.replace(/!=/g, '≠');
    processed = processed.replace(/\+-/g, '±');
    processed = processed.replace(/\bpi\b/gi, 'π');
    processed = processed.replace(/\binfinity\b/gi, '∞');

    return processed;
  };

  const processInlineMarkdown = (line) => {
    // Bold: **text** or __text__
    let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
    // Italic: *text* (but not **)
    processed = processed.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    // Inline code: `code`
    processed = processed.replace(/`([^`]+?)`/g, '<code style="background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px;font-size:0.9em;font-family:\'SF Mono\',Menlo,monospace;">$1</code>');
    // Process math notation
    processed = processMath(processed);
    return processed;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ margin: '12px 0', paddingLeft: '24px', lineHeight: '1.7' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '6px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </Tag>
      );
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(numberedMatch[2]);
      return;
    }

    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(bulletMatch[1]);
      return;
    }

    flushList();

    if (line.trim() === '') {
      elements.push(<div key={`br-${idx}`} style={{ height: '12px' }} />);
      return;
    }

    const headerMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const text = headerMatch[2];
      const sizes = { 1: '1.25em', 2: '1.15em', 3: '1.05em', 4: '1em' };
      const weights = { 1: '600', 2: '600', 3: '600', 4: '600' };
      elements.push(
        <div
          key={idx}
          style={{
            fontSize: sizes[level],
            fontWeight: weights[level],
            margin: '20px 0 10px 0',
            color: designColors.text.primary,
            letterSpacing: '-0.01em'
          }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
      return;
    }

    if (line.match(/^-{3,}$/)) {
      elements.push(
        <hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '16px 0' }} />
      );
      return;
    }

    elements.push(
      <p key={idx} style={{ margin: '0 0 10px 0', lineHeight: '1.65' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }} />
    );
  });

  flushList();

  return <>{elements}</>;
};

// Design system — sourced from shared tokens
const design = {
  colors: {
    text: {
      primary: designColors.text.primary,
      secondary: designColors.text.secondary,
      tertiary: designColors.text.tertiary,
    },
    accent: {
      primary: designColors.semantic.info,
      orange: designColors.accent.orange,
    },
    surface: {
      primary: designColors.surface.white,
      secondary: designColors.surface.gray,
      tertiary: designColors.surface.offWhite,
    },
    border: {
      light: designColors.surface.grayDark,
      medium: designColors.surface.grayMedium,
    }
  },
  typography: {
    fontFamily: designTypo.fontFamily,
  },
  shadow: {
    small: designShadows.sm,
    medium: designShadows.md,
    large: designShadows.lg,
  }
};

const AiTutorChat = ({
  isOpen,
  onClose,
  moduleId,
  lessonId,
  lessonTitle,
  isVideoLesson,
  videoTranscript,
  videoTimestamp,
  isPracticeQuestion = false,
  practiceContext = null,
  skillProgress = null,
  testDate = null,
  user = null,
  practiceTestResults = null,
  standalone = false,
  embedded = false,
  headerCompact = false,
  premiumLearnMode = false
}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastSendTime, setLastSendTime] = useState(0);
  const [proactiveRec, setProactiveRec] = useState(null);
  const [hintDismissed, setHintDismissed] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Rate limiting: minimum 2 seconds between sends
  const RATE_LIMIT_MS = 2000;

  // Build student profile snapshot for AI personalization
  const buildStudentProfile = () => {
    const parts = [];

    parts.push('═══════════════════════════════════');
    parts.push('STUDENT PROFILE — PERSONALIZE YOUR RESPONSES USING THIS');
    parts.push('═══════════════════════════════════');

    // Basic info
    if (user?.firstName) {
      parts.push(`Name: ${user.firstName}`);
    }

    // Score context
    const scores = [];
    if (user?.currentScore) scores.push(`Current SAT Math score: ${user.currentScore}`);
    if (user?.targetScore) scores.push(`Target score: ${user.targetScore}`);
    if (user?.currentScore && user?.targetScore) {
      const gap = user.targetScore - user.currentScore;
      if (gap > 0) {
        scores.push(`Needs to gain: ${gap} points`);
      } else {
        scores.push(`Already at or above target`);
      }
    }
    if (scores.length > 0) parts.push(scores.join(' | '));

    // Test date urgency
    if (testDate || user?.testDate) {
      const dateStr = testDate || user.testDate;
      const today = new Date();
      const test = new Date(dateStr);
      const daysUntil = Math.ceil((test - today) / (1000 * 60 * 60 * 24));
      if (daysUntil > 0 && daysUntil <= 7) {
        parts.push(`TEST IN ${daysUntil} DAY${daysUntil === 1 ? '' : 'S'} — Focus on confidence-building and quick wins. No time for new concepts; reinforce what they know and drill weak spots.`);
      } else if (daysUntil > 7 && daysUntil <= 30) {
        parts.push(`Test in ${daysUntil} days — Time for targeted improvement. Focus practice on weak areas with highest point-gain potential.`);
      } else if (daysUntil > 30) {
        parts.push(`Test in ${daysUntil} days — Plenty of time. Can work on building deep understanding and mastering all question types.`);
      }
    }

    // Overall skill mastery
    if (skillProgress && Object.keys(skillProgress).length > 0) {
      const entries = Object.entries(skillProgress);
      const attempted = entries.filter(([_, d]) => d.attempts >= 1);

      if (attempted.length > 0) {
        // Overall mastery
        let totalWeighted = 0, totalWeight = 0;
        attempted.forEach(([_, d]) => {
          totalWeighted += d.mastery * d.attempts;
          totalWeight += d.attempts;
        });
        const overallMastery = Math.round(totalWeighted / totalWeight);
        parts.push(`Overall mastery: ${overallMastery}% across ${attempted.length} skills practiced`);

        // Weak skills (mastery < 60%, at least 3 attempts)
        const weak = entries
          .filter(([_, d]) => d.attempts >= 3 && d.mastery < 60)
          .sort((a, b) => a[1].mastery - b[1].mastery)
          .slice(0, 4);

        if (weak.length > 0) {
          parts.push(`Weak areas: ${weak.map(([id, d]) => {
            const skill = getSkillById(id);
            return `${skill?.name || id} (${d.mastery}%)`;
          }).join(', ')}`);
        }

        // Strong skills (mastery >= 80%, at least 3 attempts)
        const strong = entries
          .filter(([_, d]) => d.attempts >= 3 && d.mastery >= 80)
          .sort((a, b) => b[1].mastery - a[1].mastery)
          .slice(0, 3);

        if (strong.length > 0) {
          parts.push(`Strengths: ${strong.map(([id, d]) => {
            const skill = getSkillById(id);
            return `${skill?.name || id} (${d.mastery}%)`;
          }).join(', ')}`);
        }
      }
    }

    // Practice test history
    if (practiceTestResults && Object.keys(practiceTestResults).length > 0) {
      const testScores = [];
      Object.entries(practiceTestResults).forEach(([testId, results]) => {
        if (results?.attempts && results.attempts.length > 0) {
          const best = results.attempts.reduce((max, a) =>
            (a.scaledScore || 0) > (max.scaledScore || 0) ? a : max, results.attempts[0]);
          if (best.scaledScore) {
            testScores.push(best.scaledScore);
          }
        }
      });
      if (testScores.length > 0) {
        const avg = Math.round(testScores.reduce((a, b) => a + b, 0) / testScores.length);
        const best = Math.max(...testScores);
        parts.push(`Practice tests taken: ${testScores.length} | Average score: ${avg} | Best score: ${best}`);
      }
    }

    // Strategic coaching note based on score gap
    if (user?.currentScore && user?.targetScore) {
      const gap = user.targetScore - user.currentScore;
      if (gap >= 100) {
        parts.push(`COACHING STRATEGY: ${gap}-point gap requires systematic improvement. Focus on the highest-frequency domains first — Algebra alone is 35% of the test. Every easy question they currently miss is the fastest possible point gain. Do NOT waste time on the hardest 5% of questions until they are nailing everything else.`);
      } else if (gap >= 40) {
        parts.push(`COACHING STRATEGY: ${gap}-point gap is very achievable. At this level, points come from two places: (1) eliminating careless errors on questions they know how to solve, and (2) shoring up 2-3 specific weak skills. Time management is also key — are they running out of time and guessing on the last few questions?`);
      } else if (gap > 0) {
        parts.push(`COACHING STRATEGY: Close to target — only ${gap} points to go. At this level, gains come from precision: catching trap answers they currently fall for, using Desmos to verify instead of guessing, and optimizing time on hard questions so they can double-check medium ones.`);
      }
    }

    // Conversation momentum — how far into the session are we?
    if (messages.length > 6) {
      parts.push(`SESSION NOTE: This is message ${messages.length} in the conversation. The student has been engaged for a while — maintain energy and keep explanations focused.`);
    }

    // Only return if we have meaningful data beyond the headers
    if (parts.length <= 3) return '';
    return parts.join('\n');
  };

  // Build practice question context with smart restrictions
  const buildPracticeContext = () => {
    if (!isPracticeQuestion || !practiceContext) return '';

    const { question, choices, hint, answerRevealed, correctAnswer, explanation, difficulty, skills, isCorrect, selectedAnswer } = practiceContext;

    const isFillin = !choices || choices.length === 0;

    // Detect emotional state from message history for adaptive tone
    const detectEmotionalState = () => {
      if (messages.length === 0) return 'neutral';
      const recentMessages = messages.slice(-4).filter(m => m.role === 'user');
      const recentText = recentMessages.map(m => m.content.toLowerCase()).join(' ');

      if (/i (don'?t|dont) (get|understand|know)|confused|lost|what\??$|huh|help/i.test(recentText)) return 'confused';
      if (/stupid|hate|ugh|give up|quit|impossible|can'?t|this is hard/i.test(recentText)) return 'frustrated';
      if (/just tell me|what'?s the answer|answer\??$/i.test(recentText)) return 'impatient';
      if (/is it [a-d]\??|am i right|did i get/i.test(recentText)) return 'seeking-validation';
      if (recentMessages.length >= 3) return 'persistent'; // Still trying after multiple messages
      return 'neutral';
    };

    const emotionalState = detectEmotionalState();

    let context = `
>>> PRACTICE QUESTION CONTEXT <<<
The student is working on this SAT Math practice question:
${difficulty ? `DIFFICULTY: ${difficulty.toUpperCase()}` : ''}
${skills?.length ? `SKILLS TESTED: ${skills.join(', ')}` : ''}
${isFillin ? 'TYPE: Student-produced response (fill-in — no answer choices, no traps, but no backsolving either)' : 'TYPE: Multiple choice'}

STUDENT EMOTIONAL STATE: ${emotionalState}
${emotionalState === 'frustrated' ? 'ADAPT: Be warm and direct. Give them a quick win. Show the simplest path first. Do not lecture.' : ''}
${emotionalState === 'confused' ? 'ADAPT: Simplify. Strip the problem to its core. Use concrete numbers. Ask what specifically is confusing.' : ''}
${emotionalState === 'impatient' ? 'ADAPT: Acknowledge the impulse but redirect. "I get it — but solving this yourself is worth 10x more than me telling you. Let me make it easier..."' : ''}
${emotionalState === 'seeking-validation' ? 'ADAPT: Do not confirm or deny. Redirect to self-verification: "Before I weigh in, check it yourself — plug your answer back in. What do you get?"' : ''}
${emotionalState === 'persistent' ? 'ADAPT: They are putting in effort — acknowledge it. Give a more direct nudge since they have been trying.' : ''}

QUESTION: ${question}

${!isFillin ? `ANSWER CHOICES:\n${choices.map(c => `${c.id}) ${c.text}`).join('\n')}` : ''}

${hint ? `HINT PROVIDED TO STUDENT: ${hint}` : ''}
`;

    if (answerRevealed) {
      // Build wrong-answer trap analysis for the AI
      let trapAnalysis = '';
      if (!isFillin && choices && correctAnswer) {
        const wrongChoices = choices.filter(c => c.id !== correctAnswer);
        trapAnalysis = `\nWRONG ANSWER ANALYSIS (use this to explain traps):`;
        wrongChoices.forEach(c => {
          trapAnalysis += `\n- Choice ${c.id} (${c.text}): Identify what specific mistake leads here — is it a partial calculation, sign error, misread, reversed operation, or wrong formula?`;
        });
      }

      context += `
>>> ANSWER HAS BEEN REVEALED — EXPERT BREAKDOWN MODE <<<
${selectedAnswer ? `STUDENT CHOSE: ${selectedAnswer}` : ''}
${isCorrect !== undefined ? `RESULT: ${isCorrect ? 'CORRECT' : 'WRONG'}` : ''}
CORRECT ANSWER: ${correctAnswer}
FULL EXPLANATION: ${explanation}
${trapAnalysis}

Your response should hit these beats:

1. NAME THE PATTERN: "This is a [question type]. You will see this [X times per test]."

2. THE FASTEST PATH: Walk through the optimal solution — lead with the fastest method (Desmos, backsolving, plugging in) before algebraic solutions. Be specific with Desmos instructions: say exactly what to type, not "try graphing it."

3. TRAP ANALYSIS: ${!isCorrect && selectedAnswer ?
  `The student chose ${selectedAnswer} instead of ${correctAnswer}. This is the most important teaching moment. Explain EXACTLY what cognitive error led to ${selectedAnswer}. Name the trap by name. Be empathetic ("this trap catches a lot of students") but precise about the mistake. Then explain how to recognize and avoid this trap next time.` :
  !isFillin ? 'For each wrong answer, explain what specific mistake produces it and name the trap type.' :
  'Explain the most common mistakes students make on this question type.'}

4. ${!isFillin ? 'DESMOS VERIFICATION: Show how Desmos solves or confirms this — include exact keystrokes.' : 'VERIFICATION: Show how to check by substituting back in.'}

5. ONE-SENTENCE TAKEAWAY: End with a single rule for test day — concrete, actionable, memorable.

${isCorrect ? 'The student got this right. Push them on speed: "You got it — but could you get it faster? Here is how..." or on depth: "Correct. Do you know why each wrong answer is there?"' : 'The student got this wrong. Be encouraging but direct. Your job is to make sure they NEVER fall for this same trap again. Name the trap, explain the fix, and give them a recognition cue for test day.'}

Use the provided explanation as a foundation but add your own expert analysis — especially SAT strategy, trap names, Desmos techniques, and the "why" behind each step that a textbook explanation misses.
`;
    } else {
      context += `
>>> ANSWER NOT YET REVEALED — SOCRATIC COACHING MODE <<<

ABSOLUTE RULES (violating these harms the student's learning):
1. NEVER reveal the correct answer — not directly, not indirectly, not through elimination
2. NEVER solve to completion — stop before the final step
3. NEVER confirm or deny a specific choice
4. NEVER narrow down by eliminating choices through implication

USE YOUR JUDGMENT to pick the right Socratic technique for this student's state:

${emotionalState === 'frustrated' ?
  'THE STUDENT IS FRUSTRATED. Drop pure Socratic — give them a concrete first step. "Here is how I would start this one..." Walk them through the setup, let them do the final step.' :
  emotionalState === 'confused' ?
  'THE STUDENT IS CONFUSED. Start by simplifying the question. "Ignore all the extra words. This question is really just asking: [core question]."' :
  emotionalState === 'impatient' ?
  'THE STUDENT WANTS THE ANSWER. Acknowledge it, then redirect. "I know — but getting this yourself is worth 10x. Let me make it easier. What type of question is this?"' :
  `Available techniques:
- REFRAME: "What is this question actually asking? Read the last sentence again."
- TYPE ID: "What category of problem is this? Have you seen this shape before?"
- CONCEPT NUDGE: Give the relevant formula without applying it.
- FIRST STEP: "What would be your first move here?"
- ESTIMATION: "Should the answer be big or small? Positive or negative?"
- SIMPLIFICATION: "What if the numbers were simpler — say 10 instead of 347?"
- DESMOS: Be specific — "Type y = [left side] and y = [right side]. What do you see?"
- ANSWER SCAN: "Look at all four choices. Can you eliminate any just by reasoning?"
- WALKTHROUGH: If truly stuck, walk through setup but stop before the final calculation.`}

${!isFillin ? 'If the student seems stuck on the algebra, always offer a specific Desmos approach — tell them exactly what to type, not just "try Desmos."' : ''}

Your goal is to build their problem-solving instincts. Every question they solve themselves is worth ten they are told the answer to.
`;
    }

    return context;
  };

  // Generate storage key based on lesson
  const storageKey = `aiTutorChat_${moduleId}_${lessonId}`;

  // Load chat history from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
  }, [storageKey]);

  // Save chat history to sessionStorage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(messages));
      } catch (e) {
        // Storage might be full
      }
    }
  }, [messages, storageKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !embedded) {
      setTimeout(() => {
        inputRef.current?.focus();
        chatContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else if (isOpen && embedded) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, embedded]);

  // Generate proactive recommendations based on skill progress
  useEffect(() => {
    if (!skillProgress || hintDismissed || messages.length > 0) return;

    // Check if we should offer a proactive hint for the current question
    if (isPracticeQuestion && practiceContext?.skills) {
      const hintCheck = shouldOfferProactiveHint(skillProgress, practiceContext.skills);
      if (hintCheck.offer) {
        setProactiveRec({
          type: 'hint-offer',
          title: 'Need a hint?',
          message: hintCheck.message,
          skillId: hintCheck.skillId,
          skillName: hintCheck.skillName,
          action: 'get-hint',
          actionLabel: 'Yes, give me a hint',
          suggestedPrompt: `Can you help me understand ${hintCheck.skillName}? I'm not sure how to approach this problem.`
        });
        return;
      }
    }

    // Otherwise, check for general recommendations (weak/declining skills)
    const rec = generateProactiveRecommendation(skillProgress, {
      currentSkillId: practiceContext?.skills?.[0],
      isCorrect: practiceContext?.isCorrect,
      wrongCount: practiceContext?.wrongCount || 0,
      testDate
    });

    if (rec) {
      setProactiveRec(rec);
    }
  }, [skillProgress, isPracticeQuestion, practiceContext, testDate, hintDismissed, messages.length]);

  // Handle accepting a proactive recommendation
  const handleProactiveAccept = (recommendation) => {
    if (recommendation.suggestedPrompt) {
      setInput(recommendation.suggestedPrompt);
      inputRef.current?.focus();
    }
    setProactiveRec(null);
  };

  // Handle dismissing a proactive recommendation
  const handleProactiveDismiss = () => {
    setProactiveRec(null);
    setHintDismissed(true);
  };

  // Generate smart prompts based on skill progress
  const getSmartPrompts = () => {
    if (skillProgress && practiceContext) {
      return generateSmartPrompts(skillProgress, practiceContext);
    }
    return null;
  };

  const handleSend = async () => {
    const now = Date.now();
    if (!input.trim() || isLoading || (now - lastSendTime < RATE_LIMIT_MS)) return;

    setLastSendTime(now);
    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const videoContext = isVideoLesson && videoTranscript ? {
        transcript: videoTranscript,
        currentTime: videoTimestamp
      } : null;

      // Build practice context string with restrictions
      let practiceContextStr = buildPracticeContext();

      // Add skill context if available
      if (skillProgress && practiceContext?.skills) {
        const skillContext = buildSkillContextForAI(skillProgress, practiceContext.skills);
        practiceContextStr = skillContext + '\n' + practiceContextStr;
      }

      // Build student profile for personalization
      const studentProfileStr = buildStudentProfile();

      const response = await chatWithTutor(
        newMessages,
        moduleId,
        lessonId,
        null,
        videoContext,
        practiceContextStr,
        studentProfileStr
      );
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      let errorMessage = "I couldn't connect right now. Please check your internet connection and try again.";
      if (error.message?.includes('rate') || error.message?.includes('limit')) {
        errorMessage = "Too many requests. Please wait a moment before trying again.";
      } else if (error.message?.includes('timeout')) {
        errorMessage = "The request took too long. Please try again with a shorter question.";
      }
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: errorMessage
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={chatContainerRef}
      role="dialog"
      aria-label="AI Tutor Chat"
      aria-modal="false"
      style={premiumLearnMode ? {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'transparent',
        fontFamily: design.typography.fontFamily,
      } : {
        marginTop: '0px',
        borderRadius: standalone ? '16px' : (embedded ? '0px' : '20px'),
        background: design.colors.surface.primary,
        boxShadow: standalone || embedded ? 'none' : design.shadow.large,
        overflow: 'hidden',
        fontFamily: design.typography.fontFamily,
        animation: standalone || embedded ? 'none' : 'chatSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        border: embedded ? 'none' : `1px solid ${design.colors.border.light}`,
        display: 'flex',
        flexDirection: 'column',
        height: standalone ? 'calc(100vh - 160px)' : (embedded ? '100%' : '100%'),
        minHeight: standalone ? '500px' : (embedded ? '0' : undefined),
      }}
    >
      {/* Header */}
      {!headerCompact && !premiumLearnMode && (
        <div
          style={{
            padding: '18px 24px',
            background: design.colors.surface.primary,
            borderBottom: `1px solid ${design.colors.border.light}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{
              fontSize: '17px',
              fontWeight: '600',
              color: design.colors.text.primary,
              letterSpacing: '-0.02em'
            }}>
              Perform
            </span>
            {isVideoLesson && videoTranscript && (
              <span style={{
                background: 'rgba(52, 199, 89, 0.12)',
                color: designColors.semantic.success,
                padding: '5px 12px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '0.01em'
              }}>
                Watching with you
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close chat"
            style={{
              background: design.colors.surface.secondary,
              border: 'none',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: design.colors.text.secondary,
              fontSize: '16px',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = design.colors.border.medium;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = design.colors.surface.secondary;
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}

      {headerCompact && !premiumLearnMode && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '28px 28px 16px',
          borderBottom: `1px solid ${design.colors.border.light}`,
          background: design.colors.surface.primary,
        }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 style={{
            fontSize: '18px', fontWeight: '700',
            color: design.colors.text.primary, margin: 0,
          }}>
            AI Tutor
          </h3>
        </div>
      )}

      {premiumLearnMode && (
        <div
          style={{
            padding: '24px 24px 16px',
            borderBottom: `1px solid rgba(0,0,0,0.06)`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'transparent',
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '6px',
                background: 'linear-gradient(135deg, #FF9F0A 0%, #FF5E3A 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                boxShadow: '0 2px 8px rgba(255, 149, 0, 0.25)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: '800',
                color: design.colors.text.primary,
                letterSpacing: '-0.03em'
              }}>
                AI Coach
              </span>
            </div>
            {lessonTitle && (
              <div style={{ fontSize: '13px', color: design.colors.text.secondary, fontWeight: '500', marginTop: '2px' }}>
                {lessonTitle}
              </div>
            )}
            {isVideoLesson && videoTranscript && (
              <div style={{ marginTop: '8px' }}>
                <span style={{
                  background: 'rgba(52, 199, 89, 0.1)',
                  color: designColors.semantic.success,
                  padding: '4px 10px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.02em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: designColors.semantic.success, animation: 'pulse 2s infinite' }} />
                  Watching with you
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
        style={premiumLearnMode ? {
          flex: 1,
          minHeight: '200px',
          overflowY: 'auto',
          padding: '24px',
          background: 'transparent',
          position: 'relative',
        } : {
          flex: 1,
          minHeight: '200px',
          overflowY: 'auto',
          padding: '24px',
          background: design.colors.surface.tertiary,
        }}
      >
        {/* Proactive Recommendation */}
        {proactiveRec && messages.length === 0 && (
          <ProactiveHint
            recommendation={proactiveRec}
            onDismiss={handleProactiveDismiss}
            onAccept={handleProactiveAccept}
          />
        )}

        {messages.length === 0 ? (
          <div style={premiumLearnMode ? {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '10px 0',
          } : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px'
          }}>
            {premiumLearnMode ? (
              <div style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                marginBottom: '24px'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: design.colors.text.primary,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em'
                }}>
                  {isPracticeQuestion
                    ? (practiceContext?.answerRevealed ? "Let's review" : "Need a hint?")
                    : (isVideoLesson && videoTranscript
                      ? "I'm watching with you"
                      : "How can I help?")
                  }
                </div>
                <div style={{
                  fontSize: '14px',
                  color: design.colors.text.secondary,
                  lineHeight: '1.5'
                }}>
                  {isPracticeQuestion
                    ? (practiceContext?.answerRevealed
                      ? "I can explain the solution and answer any questions."
                      : "I can guide your thinking without giving away the answer.")
                    : (isVideoLesson && videoTranscript
                      ? "Ask me about any step in the video, and I'll explain it."
                      : "Ask me anything about this lesson or how it applies to the test.")
                  }
                </div>
              </div>
            ) : (
              <>
                <div style={{
                  fontSize: '32px',
                  marginBottom: '16px',
                  opacity: 0.15
                }} aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: design.colors.text.primary,
                  marginBottom: '6px',
                  letterSpacing: '-0.02em'
                }}>
                  {isPracticeQuestion
                    ? (practiceContext?.answerRevealed ? "Let's review" : "Need a hint?")
                    : (isVideoLesson && videoTranscript
                      ? "Ask about any step"
                      : "How can I help?")
                  }
                </div>
                <div style={{
                  fontSize: '14px',
                  color: design.colors.text.tertiary,
                  marginBottom: '28px',
                  textAlign: 'center',
                  maxWidth: '280px',
                  lineHeight: '1.5'
                }}>
                  {isPracticeQuestion
                    ? (practiceContext?.answerRevealed
                      ? "I can explain the solution and answer any questions."
                      : "I can guide your thinking without giving away the answer.")
                    : (isVideoLesson && videoTranscript
                      ? "I can see what's happening in the video and explain it."
                      : "Ask me anything about this lesson.")
                  }
                </div>
              </>
            )}
            <div style={premiumLearnMode ? {
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%'
            } : {
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              maxWidth: '340px'
            }}>
              {(
                // Use smart prompts if skill progress is available
                (skillProgress && isPracticeQuestion && getSmartPrompts()) ||
                // Otherwise use default prompts
                (isPracticeQuestion
                  ? (practiceContext?.answerRevealed
                    ? [
                      "Explain the solution",
                      "Why is that the answer?",
                      "Show me the steps"
                    ]
                    : [
                      "Explain the hint",
                      "What formula do I use?",
                      "How do I start?"
                    ])
                  : (isVideoLesson
                    ? [
                      "Explain this step",
                      "Why did he do that?",
                      "What formula is this?"
                    ]
                    : [
                      "Why this formula?",
                      "Explain again",
                      "Common mistakes?"
                    ]))
              ).map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setInput(suggestion)}
                  style={premiumLearnMode ? {
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: design.colors.text.secondary,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: design.typography.fontFamily,
                    textAlign: 'left',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  } : {
                    padding: '10px 18px',
                    background: design.colors.surface.primary,
                    border: `1px solid ${design.colors.border.medium}`,
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: design.colors.text.secondary,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: design.typography.fontFamily,
                  }}
                  onMouseOver={(e) => {
                    if (premiumLearnMode) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                    } else {
                      e.currentTarget.style.background = design.colors.surface.secondary;
                      e.currentTarget.style.borderColor = design.colors.border.medium;
                    }
                  }}
                  onMouseOut={(e) => {
                    if (premiumLearnMode) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                    } else {
                      e.currentTarget.style.background = design.colors.surface.primary;
                      e.currentTarget.style.borderColor = design.colors.border.medium;
                    }
                  }}
                >
                  {suggestion}
                  {premiumLearnMode && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {premiumLearnMode && msg.role === 'assistant' && (
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, #FF9F0A 0%, #FF5E3A 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', marginRight: '12px', flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(255, 149, 0, 0.2)'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                )}
                <div
                  style={premiumLearnMode ? {
                    maxWidth: msg.role === 'user' ? '80%' : '85%',
                    padding: msg.role === 'user' ? '12px 18px' : '16px 20px',
                    borderRadius: msg.role === 'user' ? '20px 20px 6px 20px' : '6px 20px 20px 20px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #007AFF 0%, #0056D2 100%)'
                      : 'rgba(255, 255, 255, 0.85)',
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '15px',
                    lineHeight: '1.6',
                    boxShadow: msg.role === 'user'
                      ? '0 4px 12px rgba(0, 122, 255, 0.2)'
                      : '0 4px 24px rgba(0, 0, 0, 0.04)',
                    backdropFilter: msg.role === 'user' ? 'none' : 'saturate(180%) blur(24px)',
                    WebkitBackdropFilter: msg.role === 'user' ? 'none' : 'saturate(180%) blur(24px)',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
                    letterSpacing: '-0.01em',
                    whiteSpace: msg.role === 'user' ? 'pre-wrap' : 'normal',
                  } : {
                    maxWidth: '88%',
                    padding: msg.role === 'user' ? '12px 18px' : '16px 20px',
                    borderRadius: msg.role === 'user' ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
                    background: msg.role === 'user'
                      ? design.colors.accent.orange
                      : design.colors.surface.primary,
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '15px',
                    lineHeight: '1.6',
                    boxShadow: msg.role === 'user'
                      ? 'none'
                      : design.shadow.small,
                    letterSpacing: '-0.01em',
                    whiteSpace: msg.role === 'user' ? 'pre-wrap' : 'normal',
                  }}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                {premiumLearnMode && (
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, #FF9F0A 0%, #FF5E3A 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', marginRight: '12px', flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(255, 149, 0, 0.2)'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                )}
                <div
                  style={premiumLearnMode ? {
                    padding: '16px 20px',
                    borderRadius: '6px 20px 20px 20px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                    backdropFilter: 'saturate(180%) blur(24px)',
                    WebkitBackdropFilter: 'saturate(180%) blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  } : {
                    padding: '16px 20px',
                    borderRadius: '20px 20px 20px 6px',
                    background: design.colors.surface.primary,
                    boxShadow: design.shadow.small,
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: design.colors.text.tertiary,
                          animation: `typingPulse 1.4s ease-in-out ${i * 0.15}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div
        style={premiumLearnMode ? {
          padding: '16px 24px 24px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,1) 100%)',
          position: 'relative',
          zIndex: 10,
        } : {
          padding: '16px 20px',
          background: design.colors.surface.primary,
          borderTop: `1px solid ${design.colors.border.light}`,
        }}
      >
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end'
        }}>
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={premiumLearnMode ? "Ask me anything..." : "Message..."}
              aria-label="Type your message"
              rows={1}
              style={premiumLearnMode ? {
                width: '100%',
                padding: '16px 20px',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                fontSize: '15px',
                fontFamily: design.typography.fontFamily,
                resize: 'none',
                outline: 'none',
                maxHeight: '120px',
                lineHeight: '1.5',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: 'rgba(255, 255, 255, 0.8)',
                color: design.colors.text.primary,
                boxSizing: 'border-box',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04), inset 0 2px 4px rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              } : {
                width: '100%',
                padding: '14px 18px',
                borderRadius: '24px',
                border: `1px solid ${design.colors.border.medium}`,
                fontSize: '15px',
                fontFamily: design.typography.fontFamily,
                resize: 'none',
                outline: 'none',
                maxHeight: '120px',
                lineHeight: '1.5',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                background: design.colors.surface.secondary,
                color: design.colors.text.primary,
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                if (premiumLearnMode) {
                  e.target.style.borderColor = 'rgba(0, 122, 255, 0.3)';
                  e.target.style.boxShadow = `0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(0, 122, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.5)`;
                  e.target.style.background = '#ffffff';
                } else {
                  e.target.style.borderColor = design.colors.accent.orange;
                  e.target.style.boxShadow = `0 0 0 3px rgba(234, 88, 12, 0.1)`;
                  e.target.style.background = design.colors.surface.primary;
                }
              }}
              onBlur={(e) => {
                if (premiumLearnMode) {
                  e.target.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.target.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.04), inset 0 2px 4px rgba(255, 255, 255, 0.5)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                } else {
                  e.target.style.borderColor = design.colors.border.medium;
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = design.colors.surface.secondary;
                }
              }}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            aria-label={isLoading ? "Sending message" : "Send message"}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              background: input.trim() && !isLoading
                ? design.colors.accent.orange
                : design.colors.surface.secondary,
              cursor: input.trim() && !isLoading ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseOver={(e) => {
              if (input.trim() && !isLoading) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{
                transform: 'rotate(-45deg)',
                marginLeft: '2px',
              }}
            >
              <path
                d="M22 2L11 13"
                stroke={input.trim() && !isLoading ? 'white' : design.colors.text.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke={input.trim() && !isLoading ? 'white' : design.colors.text.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes typingPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

// Ask Perform Button Component - Apple-inspired
export const AiTutorButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close AI Tutor chat" : "Open AI Tutor chat"}
      aria-expanded={isOpen}
      style={{
        height: '52px',
        borderRadius: '26px',
        background: isOpen
          ? design.colors.text.primary
          : design.colors.accent.orange,
        border: 'none',
        boxShadow: isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: design.typography.fontFamily,
      }}
      onMouseOver={(e) => {
        if (!isOpen) {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.45)';
        } else {
          e.currentTarget.style.transform = 'scale(1.02)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)';
      }}
    >
      <span style={{
        color: 'white',
        fontWeight: '600',
        fontSize: '16px',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap'
      }}>
        {isOpen ? 'Close' : 'Ask Perform'}
      </span>
    </button>
  );
};

export default AiTutorChat;
