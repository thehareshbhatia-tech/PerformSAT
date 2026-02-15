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
            color: '#1d1d1f',
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

// Apple-inspired design system
const design = {
  colors: {
    text: {
      primary: '#1d1d1f',
      secondary: '#6e6e73',
      tertiary: '#86868b',
    },
    accent: {
      primary: '#0071e3',
      orange: '#ea580c',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#f5f5f7',
      tertiary: '#fbfbfd',
    },
    border: {
      light: 'rgba(0,0,0,0.06)',
      medium: 'rgba(0,0,0,0.1)',
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
  },
  shadow: {
    small: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
    medium: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    large: '0 8px 28px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.04)',
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
  practiceTestResults = null
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
        parts.push(`COACHING NOTE: ${gap}-point gap is significant. Prioritize the highest-frequency, easiest-to-improve skills first (typically Algebra and Problem Solving). Every easy question they currently miss is a fast point gain.`);
      } else if (gap >= 40) {
        parts.push(`COACHING NOTE: ${gap}-point gap is achievable. Focus on eliminating careless errors and shoring up 2-3 specific weak skills.`);
      } else if (gap > 0) {
        parts.push(`COACHING NOTE: Close to target. Focus on precision — reducing careless mistakes and optimizing time management on hard questions.`);
      }
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

    let context = `
>>> PRACTICE QUESTION CONTEXT <<<
The student is working on this SAT Math practice question:
${difficulty ? `DIFFICULTY: ${difficulty.toUpperCase()}` : ''}
${skills?.length ? `SKILLS TESTED: ${skills.join(', ')}` : ''}
${isFillin ? 'TYPE: Student-produced response (fill-in — no answer choices to backsolve with, but also no trap answers to mislead)' : 'TYPE: Multiple choice'}

QUESTION: ${question}

${!isFillin ? `ANSWER CHOICES:\n${choices.map(c => `${c.id}) ${c.text}`).join('\n')}` : ''}

${hint ? `HINT PROVIDED TO STUDENT: ${hint}` : ''}
`;

    if (answerRevealed) {
      context += `
>>> ANSWER HAS BEEN REVEALED — EXPERT BREAKDOWN MODE <<<
The student has submitted their answer and can now see the result.
${selectedAnswer ? `STUDENT'S ANSWER: ${selectedAnswer}` : ''}
${isCorrect !== undefined ? `RESULT: The student got this ${isCorrect ? 'CORRECT' : 'WRONG'}` : ''}
CORRECT ANSWER: ${correctAnswer}
FULL EXPLANATION: ${explanation}

You are now in EXPERT BREAKDOWN mode. Structure your response:

1. NAME THE PATTERN: "This is a [question type] — you will see this [frequency] on the SAT."
2. FASTEST SOLVE PATH: Show the quickest method (Desmos, backsolving, or plugging in before algebra). Explain reasoning at each step.
3. TRAP ANALYSIS: ${!isCorrect && selectedAnswer ? `The student chose ${selectedAnswer}. Explain SPECIFICALLY what trap caught them — name it ("You fell for the [partial calculation / sign error / misread] trap — ${selectedAnswer} is what you get if you..."). Be empathetic ("this trap catches a lot of students") but direct about the mistake.` : !isFillin ? 'For each wrong answer, briefly explain what specific mistake leads to it and name the trap type.' : 'Explain what common mistakes students make on this question type.'}
4. ${!isFillin ? 'DESMOS CHECK: If applicable, explain how Desmos could solve or verify this in seconds.' : 'VERIFICATION: Show how to check the answer by substituting back in.'}
5. ONE-SENTENCE TAKEAWAY: End with a single memorable rule for test day.

${isCorrect ? 'The student got this right — if they ask questions, focus on speed. Could they have solved it faster? Is there a shortcut? Challenge them.' : 'The student got this wrong — be encouraging but direct. Make sure they understand WHY they fell for the trap so they recognize it next time.'}

You may reference the provided explanation but add your own expert perspective — especially SAT strategy, trap awareness, and Desmos techniques that a textbook explanation misses.
`;
    } else {
      context += `
>>> ANSWER NOT YET REVEALED — SOCRATIC COACHING MODE <<<
The student has NOT yet submitted their answer. You are in SOCRATIC mode.

ABSOLUTE RULES (violating these ruins the learning experience):
1. NEVER reveal the correct answer — not directly, not indirectly, not by eliminating all other choices
2. NEVER solve the problem to completion — stop before the final calculation
3. NEVER confirm or deny a specific choice ("Is it B?" → "I can't tell you that, but let me help you think through it")
4. NEVER narrow it down through implication ("Well, choices A and C both have the same issue..." eliminates two choices)

YOUR SOCRATIC TOOLKIT (choose the right technique for the situation):

IF THE STUDENT IS STUCK ON WHAT THE QUESTION IS ASKING:
→ "Before doing any math — what is this question actually asking you to find? Read the last sentence again."

IF THE STUDENT DOES NOT KNOW HOW TO START:
→ Identify the question type: "This looks like a [systems / percent / quadratic / trig] question."
→ Point to the relevant formula without applying it: "What formula connects these quantities?"
→ Suggest simplification: "What if the numbers were simpler — say 10 instead of 347?"

IF THE STUDENT HAS STARTED BUT IS STUCK MID-SOLVE:
→ "Walk me through what you have done so far — where exactly are you getting stuck?"
→ "You are on the right track with the setup. What is the next algebraic step to isolate the variable?"

IF THE STUDENT WANTS TO CHECK THEIR APPROACH:
→ "Have you tried estimating first? Should the answer be big or small? Positive or negative?"
→ ${!isFillin ? '"Before solving fully — can you eliminate any choices just by reasoning?"' : '"Try plugging your answer back into the original equation to verify."'}

IF THE STUDENT IS FRUSTRATED:
→ "This is a ${difficulty || 'tricky'} question — it is designed to be challenging. Let me break down the approach step by step..."

IF THEY ASK FOR THE ANSWER DIRECTLY:
→ "I want you to get this one yourself — it will stick way better. Let me point you in the right direction..."

${!isFillin ? 'DESMOS SUGGESTION: If the student seems stuck on algebra, suggest: "Have you tried typing both sides into Desmos and looking at the graph?"' : ''}

Your goal is to build their problem-solving instincts, not hand them the answer. Every question they solve themselves is worth 10 questions they are told the answer to.
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
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        chatContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isOpen]);

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
      style={{
        marginTop: '0px',
        borderRadius: '20px',
        background: design.colors.surface.primary,
        boxShadow: design.shadow.large,
        overflow: 'hidden',
        fontFamily: design.typography.fontFamily,
        animation: 'chatSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        border: `1px solid ${design.colors.border.light}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
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
              color: '#248a3d',
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

      {/* Messages Area */}
      <div
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
        style={{
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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px'
          }}>
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
            <div style={{
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
                  style={{
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
                    e.currentTarget.style.background = design.colors.surface.secondary;
                    e.currentTarget.style.borderColor = design.colors.border.medium;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = design.colors.surface.primary;
                    e.currentTarget.style.borderColor = design.colors.border.medium;
                  }}
                >
                  {suggestion}
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
                <div
                  style={{
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
                  }}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                <div
                  style={{
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
        style={{
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
              placeholder="Message..."
              aria-label="Type your message"
              rows={1}
              style={{
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
                e.target.style.borderColor = design.colors.accent.orange;
                e.target.style.boxShadow = `0 0 0 3px rgba(234, 88, 12, 0.1)`;
                e.target.style.background = design.colors.surface.primary;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = design.colors.border.medium;
                e.target.style.boxShadow = 'none';
                e.target.style.background = design.colors.surface.secondary;
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
