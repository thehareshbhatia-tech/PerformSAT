import React, { useState, useRef, useEffect, useCallback } from 'react';
import katex from 'katex';
import { chatWithTutor } from '../services/aiTutorService';
import CoachModePicker from './CoachModePicker';
import { trackCoachModeUsed } from '../services/analyticsService';
import ProactiveHint from './ProactiveHint';
import {
  generateProactiveRecommendation,
  shouldOfferProactiveHint,
  generateSmartPrompts,
  buildSkillContextForAI,
  generateCrossSessionRecommendation
} from '../services/proactiveRecommendationService';
import { getSkillById } from '../data/skillTaxonomy';
import { colors as designColors, typography as designTypo, shadows as designShadows } from '../design/tokens';
import normalizeFractions from '../utils/normalizeFractions';
import {
  saveSession,
  updateSessionMessages,
  loadActiveSession,
  getLearningMemory,
  loadRecentSessions,
  flushPendingWrites
} from '../services/chatSessionService';
import { buildTrendContext } from '../services/trendContextBuilder';
import { startIntervention, inferApproach, computeApproachEffectiveness } from '../services/interventionTracker';
import { buildIntelligenceContext, getRecommendedApproach } from '../services/intelligenceContextBuilder';

// Comprehensive markdown renderer for chat messages with full math/LaTeX support
const renderMarkdown = (text) => {
  if (!text) return null;

  // Render math via KaTeX before markdown processing
  const renderKatexInline = (str) => {
    let result = str;
    // Protect escaped dollars
    const ESC = '\uFFFD';
    result = result.replace(/\\\$/g, ESC);
    // Display math: $$...$$ and \[...\]
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
      try { return katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false }); }
      catch { return _; }
    });
    result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, latex) => {
      try { return katex.renderToString(latex.trim(), { displayMode: true, throwOnError: false }); }
      catch { return _; }
    });
    // Inline math: $...$ and \(...\)
    result = result.replace(/\$([^\$]+?)\$/g, (_, latex) => {
      try { return katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false }); }
      catch { return _; }
    });
    result = result.replace(/\\\(([^)]+)\\\)/g, (_, latex) => {
      try { return katex.renderToString(latex.trim(), { displayMode: false, throwOnError: false }); }
      catch { return _; }
    });
    // Restore escaped dollars
    result = result.replace(new RegExp(ESC, 'g'), '$');
    return result;
  };

  let cleanedText = renderKatexInline(normalizeFractions(text));

  const lines = cleanedText.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const processInlineMarkdown = (line) => {
    let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
    processed = processed.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    processed = processed.replace(/`([^`]+?)`/g, '<code style="background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px;font-size:0.9em;font-family:\'SF Mono\',Menlo,monospace;">$1</code>');
    return processed;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ margin: '12px 0 16px 0', paddingLeft: '24px', lineHeight: '1.55' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
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
            margin: '24px 0 12px 0',
            color: designColors.text.primary,
            letterSpacing: '-0.02em'
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
      <p key={idx} style={{ margin: '0 0 12px 0', lineHeight: '1.55' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }} />
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
  premiumLearnMode = true,
  studentFingerprint = null,
  interventionLog = null,
  predictionLog = null,
  // When true, suppresses cross-section proactive recommendations.
  // In retry-drill review mode the snapshot items are mixed-section
  // (e.g., reviewing an R&W item with Math skill drift advice → mismatch).
  // See TODOS.md "Section context inside retry-drill review-mode" (P2).
  reviewMode = false,
}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Active coach mode (null = default tutor). Activates a structured system
  // overlay in chatWithTutor — the modes existed but were never wired.
  const [coachMode, setCoachMode] = useState(null);
  const [lastSendTime, setLastSendTime] = useState(0);
  const [proactiveRec, setProactiveRec] = useState(null);
  const [hintDismissed, setHintDismissed] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [learningMemory, setLearningMemory] = useState(null);
  const [recentSessions, setRecentSessions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messageCountSinceWrite = useRef(0);
  const messagesRef = useRef(messages);
  const interventionStarted = useRef(false);

  // Rate limiting: minimum 2 seconds between sends
  const RATE_LIMIT_MS = 2000;

  // Build student profile snapshot for AI personalization
  const buildStudentProfile = () => {
    const parts = [];
    const profileSection = practiceContext?.section === 'rw' ? 'rw' : 'math';

    parts.push('═══════════════════════════════════');
    parts.push('STUDENT PROFILE — PERSONALIZE YOUR RESPONSES USING THIS');
    parts.push('═══════════════════════════════════');

    // Basic info
    if (user?.firstName) {
      parts.push(`Name: ${user.firstName}`);
    }

    // Score context
    const scores = [];
    if (user?.currentScore) scores.push(`${profileSection === 'rw' ? 'Current SAT score' : 'Current SAT Math score'}: ${user.currentScore}`);
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

      // Inject cross-test trend context
      const trendContext = buildTrendContext(practiceTestResults, skillProgress);
      if (trendContext) {
        parts.push(trendContext);
      }
    }

    // Strategic coaching note based on score gap
    if (user?.currentScore && user?.targetScore) {
      const gap = user.targetScore - user.currentScore;
      if (gap >= 100) {
        parts.push(`COACHING STRATEGY: ${gap}-point gap requires systematic improvement. Focus on the highest-frequency domains first — ${profileSection === 'rw' ? 'Information & Ideas and Standard English Conventions are together about half the section' : 'Algebra alone is 35% of the test'}. Every easy question they currently miss is the fastest possible point gain. Do NOT waste time on the hardest 5% of questions until they are nailing everything else.`);
      } else if (gap >= 40) {
        parts.push(`COACHING STRATEGY: ${gap}-point gap is very achievable. At this level, points come from two places: (1) eliminating careless errors on questions they know how to solve, and (2) shoring up 2-3 specific weak skills. Time management is also key — are they running out of time and guessing on the last few questions?`);
      } else if (gap > 0) {
        parts.push(`COACHING STRATEGY: Close to target — only ${gap} points to go. At this level, gains come from precision: catching trap answers they currently fall for, ${profileSection === 'rw' ? 'going back to the text to prove the answer instead of guessing' : 'using Desmos to verify instead of guessing'}, and optimizing time on hard questions so they can double-check medium ones.`);
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

  // Build the R&W practice-question context block. Parallels the math path but
  // renders the passage / paired texts / student notes / table stimulus and
  // frames coaching around textual evidence and grammar rules instead of
  // Desmos and backsolving. Without this an R&W item reaches the model as a
  // bare stem ("Which choice best states the main idea?") with no text to read.
  // R&W items are always multiple choice.
  const buildRWPracticeContextBlock = ({
    question, choices, hint, answerRevealed, correctAnswer, explanation,
    difficulty, skills, isCorrect, selectedAnswer,
    passage, passages, studentNotes, questionTable, domain, emotionalState,
  }) => {
    // Serialize the stimulus the student is actually looking at.
    let stimulus = '';
    if (passage) {
      stimulus += `\nPASSAGE:\n${passage}\n`;
    }
    if (Array.isArray(passages) && passages.length > 0) {
      stimulus += '\n' + passages.map(p => `${p.label || 'Text'}:\n${p.text}`).join('\n\n') + '\n';
    }
    if (studentNotes) {
      stimulus += `\nSTUDENT NOTES:\n`;
      if (studentNotes.intro) stimulus += `${studentNotes.intro}\n`;
      if (Array.isArray(studentNotes.bullets)) stimulus += studentNotes.bullets.map(b => `- ${b}`).join('\n') + '\n';
      if (studentNotes.goal) stimulus += `Goal: ${studentNotes.goal}\n`;
    }
    if (questionTable) {
      stimulus += `\nTABLE${questionTable.caption ? ': ' + questionTable.caption : ''}\n`;
      if (Array.isArray(questionTable.headers)) stimulus += questionTable.headers.join(' | ') + '\n';
      if (Array.isArray(questionTable.rows)) stimulus += questionTable.rows.map(r => r.join(' | ')).join('\n') + '\n';
    }

    let context = `
>>> PRACTICE QUESTION CONTEXT <<<
The student is working on this SAT Reading and Writing practice question:
${difficulty ? `DIFFICULTY: ${difficulty.toUpperCase()}` : ''}
${domain ? `DOMAIN: ${domain}` : ''}
${skills?.length ? `SKILL TESTED: ${skills.join(', ')}` : ''}
TYPE: Multiple choice (the answer is always provable from the text above)

STUDENT EMOTIONAL STATE: ${emotionalState}
${emotionalState === 'frustrated' ? 'ADAPT: Be warm and direct. Give a quick win — go back to the text and find the one sentence that decides this. Do not lecture.' : ''}
${emotionalState === 'confused' ? 'ADAPT: Simplify. Strip the question to its core: "Ignore the extra words — this is really asking: [core question]." Point to the deciding sentence.' : ''}
${emotionalState === 'impatient' ? 'ADAPT: Acknowledge the impulse but redirect. "I get it — but finding the proof yourself is worth 10x. Which sentence answers this?"' : ''}
${emotionalState === 'seeking-validation' ? 'ADAPT: Do not confirm or deny. Redirect to the text: "Before I weigh in, point to the exact words that support your choice. Do they?"' : ''}
${emotionalState === 'persistent' ? 'ADAPT: They are working hard — acknowledge it and give a more direct nudge toward the deciding evidence.' : ''}
${stimulus}
QUESTION: ${question}

${choices?.length ? `ANSWER CHOICES:\n${choices.map(c => `${c.id}) ${c.text}`).join('\n')}` : ''}

${hint ? `HINT PROVIDED TO STUDENT: ${hint}` : ''}
`;

    if (answerRevealed) {
      let trapAnalysis = '';
      if (choices && correctAnswer) {
        const wrongChoices = choices.filter(c => c.id !== correctAnswer);
        trapAnalysis = `\nWRONG ANSWER ANALYSIS (name the trap class for each):`;
        wrongChoices.forEach(c => {
          trapAnalysis += `\n- Choice ${c.id} (${c.text}): which trap is this — surface match, inverse/opposite, scope shift, too extreme, half right, or out of scope? For a grammar item, name the error (comma splice, run-on, agreement, modifier, pronoun).`;
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

1. NAME THE TYPE: "This is a [question type]. You will see this [X times per test]."

2. FIND THE EVIDENCE: Quote the EXACT words in the passage that make the correct answer correct. For a conventions question, state the grammar rule in one line.

3. TRAP ANALYSIS: ${!isCorrect && selectedAnswer ?
  `The student chose ${selectedAnswer} instead of ${correctAnswer}. This is the most important teaching moment. Explain EXACTLY what pulled them to ${selectedAnswer} — did they match a word from the passage, miss a negative, choose a transition by feel, or add a comma by ear? Name the trap class. Be empathetic ("this trap catches a lot of students") but precise, then give a recognition cue for next time.` :
  'For each wrong choice, name the trap class and the specific mistake that picks it.'}

4. THE MOVE: State the one habit that decides this question type — go back to the text, predict before matching, name the logical relationship first, or run the complete-sentence test.

5. ONE-SENTENCE TAKEAWAY: End with a single rule for test day — concrete, memorable.

${isCorrect ? 'The student got this right. Push on precision: "Correct — now can you say in one line why each other choice is wrong?"' : 'The student got this wrong. Be encouraging but direct. Make sure they NEVER fall for this trap again — name it and give a recognition cue for test day.'}

Use the provided explanation as a foundation but add your own expert analysis — trap names, the exact textual evidence, and the "why" behind each wrong choice.
`;
    } else {
      context += `
>>> ANSWER NOT YET REVEALED — SOCRATIC COACHING MODE <<<

ABSOLUTE RULES (violating these harms the student's learning):
1. NEVER reveal the correct answer — not directly, not indirectly, not through elimination
2. NEVER name the choice — stop before the final pick
3. NEVER confirm or deny a specific choice

USE YOUR JUDGMENT to pick the right Socratic technique for this student's state:

${emotionalState === 'frustrated' ?
  'THE STUDENT IS FRUSTRATED. Drop pure Socratic — point them to the deciding part of the text. "Let us just look at this one sentence together..."' :
  emotionalState === 'confused' ?
  'THE STUDENT IS CONFUSED. Simplify the question first. "Ignore the extra words. This question is really asking: [core question]."' :
  emotionalState === 'impatient' ?
  'THE STUDENT WANTS THE ANSWER. Acknowledge it, then redirect. "I know — but finding the proof yourself is worth 10x. Which sentence decides this?"' :
  `Available techniques:
- REFRAME: "What is this question actually asking you to find?"
- EVIDENCE HUNT: "Which sentence in the passage decides this? Point to it."
- PREDICT: "Before you look at the choices, what word or idea do you expect here?"
- RELATIONSHIP (transitions): "What is the logical link between these two sentences — cause, contrast, addition, example?"
- GRAMMAR CHECK (boundaries): "Is each side of this punctuation a complete sentence? What does that tell you?"
- TRAP SCAN: "Which choices just repeat a word from the passage without answering the question?"
- WALKTHROUGH: If truly stuck, narrow to the deciding sentence but stop before naming the choice.`}

Your goal is to build their reading and reasoning instincts. Every question they crack themselves is worth ten they are told.
`;
    }

    return context;
  };

  // Build practice question context with smart restrictions
  const buildPracticeContext = () => {
    if (!isPracticeQuestion || !practiceContext) return '';

    const section = practiceContext.section === 'rw' ? 'rw' : 'math';
    const { question, choices, hint, answerRevealed, correctAnswer, explanation, difficulty, skills, isCorrect, selectedAnswer, passage, passages, studentNotes, questionTable, domain } = practiceContext;

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

    // R&W items carry passage/notes/table stimulus the math path never reads.
    // Route them to the verbal builder so the model actually sees the text.
    if (section === 'rw') {
      return buildRWPracticeContextBlock({
        question, choices, hint, answerRevealed, correctAnswer, explanation,
        difficulty, skills, isCorrect, selectedAnswer,
        passage, passages, studentNotes, questionTable, domain, emotionalState,
      });
    }

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

  // Keep messagesRef in sync with state for unmount cleanup
  messagesRef.current = messages;

  // Generate storage key based on lesson
  const storageKey = `aiTutorChat_${moduleId}_${lessonId}`;
  const userId = user?.uid || null;

  // Load chat history from Firestore (with sessionStorage cache fallback) on lesson change
  useEffect(() => {
    let cancelled = false;

    const loadSession = async () => {
      // Reset state
      setMessages([]);
      setInput('');
      setIsLoading(false);
      setProactiveRec(null);
      setHintDismissed(false);
      setSessionId(null);
      messageCountSinceWrite.current = 0;
      interventionStarted.current = false;

      if (!userId) {
        // No user — fall back to sessionStorage
        try {
          const saved = sessionStorage.getItem(storageKey);
          if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessages(parsed);
            }
          }
        } catch (e) { /* ignore */ }
        return;
      }

      // Try Firestore via chatSessionService (checks sessionStorage cache first)
      try {
        const session = await loadActiveSession(userId, moduleId, lessonId);
        if (!cancelled && session?.messages?.length > 0) {
          setMessages(session.messages);
          setSessionId(session.sessionId);
          return;
        }
      } catch (e) {
        console.error('Failed to load session:', e);
      }

      // Final fallback: sessionStorage
      if (!cancelled) {
        try {
          const saved = sessionStorage.getItem(storageKey);
          if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessages(parsed);
            }
          }
        } catch (e) { /* ignore */ }
      }
    };

    loadSession();
    return () => { cancelled = true; };
  }, [storageKey, userId, moduleId, lessonId]);

  // Load learning memory and recent sessions on mount
  useEffect(() => {
    if (!userId) return;

    const loadMemory = async () => {
      try {
        const [memory, sessions] = await Promise.all([
          getLearningMemory(userId),
          loadRecentSessions(userId, 5),
        ]);
        setLearningMemory(memory);
        setRecentSessions(sessions);
      } catch (e) {
        console.error('Failed to load learning memory:', e);
      }
    };

    loadMemory();
  }, [userId]);

  // Save to Firestore (debounced) + sessionStorage (immediate) when messages change
  useEffect(() => {
    if (messages.length === 0) return;

    // Always write-through to sessionStorage for instant restore
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (e) { /* Storage full */ }

    // Firestore persistence (debounced via chatSessionService)
    if (!userId) return;

    const persistToFirestore = async () => {
      try {
        if (!sessionId && messages.length >= 1) {
          // Create new session
          const newSessionId = await saveSession(userId, {
            moduleId,
            lessonId,
            lessonTitle,
            context: standalone ? 'standalone' : (isPracticeQuestion ? 'practice' : 'lesson'),
            messages,
            topicsDiscussed: practiceContext?.skills || [],
          });
          setSessionId(newSessionId);
          messageCountSinceWrite.current = messages.length;
        } else if (sessionId) {
          // Update existing session (debounced)
          messageCountSinceWrite.current++;
          await updateSessionMessages(userId, sessionId, messages);
        }
      } catch (e) {
        console.error('Firestore persist failed:', e);
      }
    };

    persistToFirestore();
  }, [messages, storageKey, userId, sessionId, moduleId, lessonId, lessonTitle, standalone, isPracticeQuestion]);

  // Flush pending writes on unmount (read from ref to avoid stale closure)
  useEffect(() => {
    return () => {
      if (userId && sessionId) {
        updateSessionMessages(userId, sessionId, messagesRef.current, true).catch(() => {});
        flushPendingWrites(userId, sessionId);
      }
    };
  }, [userId, sessionId]);

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

    // Review-mode suppression (TODOS.md "Section context inside retry-drill
    // review-mode", P2): in retry-drill review the snapshot questions are
    // mixed-section, so any "Skill X has dropped to Y%" advice that doesn't
    // match the visible question's section is noise. Suppress the proactive
    // panel entirely during review mode — the student is in inspection mode,
    // not learning mode.
    if (reviewMode) return;

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

    // Priority 2.5: Cross-session pattern detection
    if (practiceTestResults && learningMemory) {
      const crossSessionRec = generateCrossSessionRecommendation(
        skillProgress, practiceTestResults, learningMemory,
        practiceContext?.skills || []
      );
      if (crossSessionRec) {
        setProactiveRec(crossSessionRec);
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
  }, [skillProgress, isPracticeQuestion, practiceContext, testDate, hintDismissed, messages.length, practiceTestResults, learningMemory, reviewMode]);

  // Track intervention when chat session reaches 4+ messages
  useEffect(() => {
    if (!userId || interventionStarted.current || messages.length < 4) return;
    if (!skillProgress) return;

    const currentSkills = practiceContext?.skills || [];
    if (currentSkills.length === 0) return;

    // Set flag AFTER validation so we don't permanently block if skills were empty on first check
    interventionStarted.current = true;

    // Build pre-metrics from current skill state
    const skillMastery = {};
    for (const skillId of currentSkills) {
      skillMastery[skillId] = skillProgress[skillId]?.mastery ?? 0;
    }

    // Get error types from most recent test
    let errorTypes = {};
    if (practiceTestResults) {
      const allAttempts = [];
      Object.values(practiceTestResults).forEach(r => {
        if (r?.attempts) allAttempts.push(...r.attempts);
      });
      allAttempts.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
      if (allAttempts[0]?.diagnosticData?.errorPatterns?.counts) {
        errorTypes = allAttempts[0].diagnosticData.errorPatterns.counts;
      }
    }

    const archetype = studentFingerprint?.archetype || 'unknown';
    const approach = inferApproach(learningMemory, null);

    startIntervention(userId, {
      type: 'tutoring_session',
      skillIds: currentSkills,
      approach,
      context: isPracticeQuestion ? 'practice' : 'lesson',
      moduleId,
      lessonId,
      preMetrics: { skillMastery, errorTypes, archetype },
    }).catch(err => console.error('[AiTutorChat] Failed to start intervention:', err));
  }, [messages.length, userId, skillProgress, practiceContext, practiceTestResults, studentFingerprint, learningMemory, isPracticeQuestion, moduleId, lessonId]);

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

      // Subject of the active item — selects the system prompt + gates math-only context.
      const section = practiceContext?.section === 'rw' ? 'rw' : 'math';

      // Build practice context string with restrictions
      let practiceContextStr = buildPracticeContext();

      // Add skill context if available (math-only — the corpus is math-flavored,
      // referencing sign errors, formulas, and Desmos that do not apply to R&W).
      if (section === 'math' && skillProgress && practiceContext?.skills) {
        const skillContext = buildSkillContextForAI(skillProgress, practiceContext.skills);
        practiceContextStr = skillContext + '\n' + practiceContextStr;
      }

      // Build student profile for personalization
      const studentProfileStr = buildStudentProfile();

      // Build learning memory context for cross-session awareness
      const learningMemoryCtx = (learningMemory || recentSessions.length > 0)
        ? { memory: learningMemory, recentSessions }
        : null;

      // Build strategy context from error patterns and weak skills
      let strategyCtx = null;
      if (skillProgress) {
        const weakSkillIds = Object.entries(skillProgress)
          .filter(([_, d]) => d.attempts >= 3 && d.mastery < 60)
          .map(([id]) => id);
        // Get error patterns from most recent test attempt
        let errorPatterns = null;
        if (practiceTestResults) {
          const allAttempts = [];
          Object.values(practiceTestResults).forEach(r => {
            if (r?.attempts) allAttempts.push(...r.attempts);
          });
          allAttempts.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
          if (allAttempts[0]?.diagnosticData?.errorPatterns?.counts) {
            errorPatterns = allAttempts[0].diagnosticData.errorPatterns.counts;
          }
        }
        if (weakSkillIds.length > 0 || errorPatterns) {
          strategyCtx = { errorPatterns, weakSkillIds };
        }
      }

      // Build intelligence context from data loop
      let intelligenceCtx = '';
      if (studentFingerprint || interventionLog?.length > 0 || predictionLog?.length > 0) {
        // Get approach guidance for current skills
        let approachGuidance = null;
        const currentSkills = practiceContext?.skills || [];
        if (currentSkills.length > 0 && interventionLog?.length > 0) {
          const effectiveness = computeApproachEffectiveness(interventionLog, currentSkills[0]);
          approachGuidance = getRecommendedApproach(effectiveness, studentFingerprint, currentSkills);
        } else if (studentFingerprint) {
          approachGuidance = getRecommendedApproach(null, studentFingerprint, currentSkills);
        }

        const latestPrediction = predictionLog?.length > 0
          ? predictionLog[predictionLog.length - 1]
          : null;

        intelligenceCtx = buildIntelligenceContext(
          studentFingerprint,
          latestPrediction,
          interventionLog,
          approachGuidance,
          section
        );
      }

      // Coach mode: when a structured mode is active, pass its id + a context
      // object matching the mode's contract. buildCoachContext guards each
      // field, so a superset is safe (missing fields are simply omitted).
      const coachModePayload = coachMode ? {
        modeId: coachMode,
        context: {
          question: practiceContext?.question ?? practiceContext?.questionText ?? null,
          userAnswer: practiceContext?.userAnswer,
          correctAnswer: practiceContext?.correctAnswer,
          skills: practiceContext?.skills,
          skillId: practiceContext?.skills?.[0],
          skillName: practiceContext?.skillName,
          errorType: practiceContext?.errorType,
          difficulty: practiceContext?.difficulty,
          currentScore: user?.currentScore,
          targetScore: user?.targetScore,
          // R&W stimulus + classification (rendered guarded in buildCoachContext)
          section,
          domain: practiceContext?.domain,
          passage: practiceContext?.passage,
          passages: practiceContext?.passages,
          studentNotes: practiceContext?.studentNotes,
          questionTable: practiceContext?.questionTable,
        },
      } : null;
      if (coachModePayload && user?.uid) {
        trackCoachModeUsed(user.uid, coachMode, newMessages.filter(m => m.role === 'user').length);
      }

      const response = await chatWithTutor(
        newMessages,
        moduleId,
        lessonId,
        null,
        videoContext,
        practiceContextStr,
        studentProfileStr,
        coachModePayload,
        learningMemoryCtx,
        strategyCtx,
        intelligenceCtx,
        section
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
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'saturate(180%) blur(24px)',
        WebkitBackdropFilter: 'saturate(180%) blur(24px)',
        fontFamily: design.typography.fontFamily,
        borderRadius: standalone ? '16px' : (embedded ? '0px' : '24px'),
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
              SEVA
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
                Assisted Help
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
          {onClose && onClose.toString() !== '() => {}' && (
            <button
              onClick={onClose}
              aria-label="Close chat"
              style={{
                background: 'rgba(0, 0, 0, 0.04)',
                border: 'none',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: design.colors.text.secondary,
                fontSize: '14px',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
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
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '4px 18px 18px 18px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #007AFF 0%, #0056D2 100%)'
                      : '#ffffff',
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '15px',
                    lineHeight: '1.55',
                    boxShadow: msg.role === 'user'
                      ? '0 4px 12px rgba(0, 122, 255, 0.2)'
                      : '0 2px 12px rgba(0, 0, 0, 0.03)',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
                    letterSpacing: '0',
                    whiteSpace: msg.role === 'user' ? 'pre-wrap' : 'normal',
                  } : {
                    maxWidth: '88%',
                    padding: msg.role === 'user' ? '12px 18px' : '16px 20px',
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: msg.role === 'user'
                      ? design.colors.accent.orange
                      : design.colors.surface.primary,
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '15px',
                    lineHeight: '1.55',
                    boxShadow: msg.role === 'user'
                      ? 'none'
                      : design.shadow.small,
                    letterSpacing: '0',
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
                    borderRadius: '4px 18px 18px 18px',
                    background: '#ffffff',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  } : {
                    padding: '16px 20px',
                    borderRadius: '18px 18px 18px 4px',
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
        <CoachModePicker activeMode={coachMode} onSelectMode={setCoachMode} />
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
        {isOpen ? 'Close' : 'Ask SEVA'}
      </span>
    </button>
  );
};

export default AiTutorChat;
