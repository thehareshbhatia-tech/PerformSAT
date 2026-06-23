/**
 * TestResults Component
 * Displays practice test results in Test Innovators style
 * Features: Tab navigation, score badges with progress bars,
 * difficulty donut charts, and content domain bars
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { colors, radius, shadows } from '../design/tokens';
import { cardStyles, buttonStyles } from '../design/components';
import { MathText } from './MathText';
import { isGoalAchieved, isCompositeScaleTarget, DEFAULT_GOAL_SCORE } from '../services/selectors/goalProgress';
import { isBlankAttempt } from '../services/selectors/latestTestStats';
import './TestResults.css';
import { ChartBarIcon, ArrowRightIcon, BookOpenIcon, PencilIcon, BrainIcon, SearchIcon, PinIcon } from '../design/icons';
import QuestionInsightCard from './QuestionInsightCard';
import Avatar, { AVATAR_SIZES } from './ui/Avatar';
import {
  scoreTest, convertToSATScore, isAnswerCorrect, estimatePercentile,
  inferDomain, SAT_MATH_DOMAINS, DOMAIN_DISPLAY_NAMES,
  adaptDiagnosticForUI, mergeAiIntoReport, buildUnifiedReport, buildNarrativeFlow,
} from '../services/scoring';
import { getDomainInfo } from '../data/skillTaxonomy';

const BULLET_LENGTH_THRESHOLD = 80;
const BULLET_SPLIT_RE = /\s*;\s*|\s*\n\s*|\s*(?:(?:^|\s)[-•])\s+|\s*\d+\)\s+/;

function bulletizeText(text) {
  if (!text || typeof text !== 'string') return null;
  if (text.length <= BULLET_LENGTH_THRESHOLD && !BULLET_SPLIT_RE.test(text)) return null;
  const parts = text.split(BULLET_SPLIT_RE).map(s => s.trim()).filter(s => s.length > 0);
  return parts.length >= 2 ? parts : null;
}

/**
 * Clean up a bullet point: capitalize first letter, strip leading conjunctions.
 */
function cleanBullet(text) {
  if (!text || typeof text !== 'string') return typeof text === 'string' ? text : '';
  // Strip leading conjunctions
  let cleaned = text.replace(/^(and |or |but |while |plus )/i, '').trim();
  // Capitalize first letter
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Format a skill name for display: convert hyphens to spaces, title case.
 */
function formatSkillName(name) {
  if (!name || typeof name !== 'string') return '';
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Aggressively split long text into short scannable bullets.
 * Splits on: semicolons, em-dashes, sentence boundaries, commas before conjunctions.
 * Returns array of cleaned strings, or null if text is already short enough.
 */
function splitToScannable(text) {
  if (!text || typeof text !== 'string') return null;
  if (text.length <= 60) return null;

  // First try semicolons and em-dashes (strongest delimiters)
  let parts = text.split(/\s*;\s*|\s*[—–]\s*/).map(s => cleanBullet(s)).filter(s => s.length > 5);
  if (parts.length >= 2) return parts;

  // Then try sentence boundaries
  parts = text.split(/(?<=[.!?])\s+(?=[A-Z])/).map(s => cleanBullet(s)).filter(s => s.length > 5);
  if (parts.length >= 2) return parts;

  // Then try comma + conjunction ("losing X, gaining Y, and Z")
  parts = text.split(/,\s*(?=and |or |but |while |plus |losing |gaining |~)/).map(s => cleanBullet(s)).filter(s => s.length > 5);
  if (parts.length >= 2) return parts;

  return null;
}

function SupportText({ text, label, labelColor, textColor, textSize = '14px', dotColor = 'var(--color-slate-400)' }) {
  if (!text) return null;
  const bullets = bulletizeText(text);
  if (bullets) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {label && (
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '700', color: labelColor || 'var(--color-slate-600)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>{label}</span>
        )}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'var(--font-ui)', fontSize: textSize, fontWeight: '500', color: textColor || 'var(--color-slate-500)', lineHeight: '1.45' }}>
              <span style={{ flexShrink: 0, width: '5px', height: '5px', borderRadius: '50%', background: dotColor, marginTop: '7px' }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: 'var(--font-ui)', fontSize: textSize, fontWeight: '500', color: textColor || 'var(--color-slate-500)', lineHeight: '1.45' }}>
      {label && <span style={{ fontWeight: '600', color: labelColor || 'var(--color-slate-600)' }}>{label}: </span>}
      {text}
    </div>
  );
}

/**
 * Extract parenthetical numeric metrics from diagnosis text, attaching each
 * to the preceding clause so the bullet retains semantic meaning.
 *
 * Returns { cleanedText, metricItems: [{ label, value }] }.
 * When a reliable label cannot be derived, the metric stays inline.
 */
const METRIC_PAREN_RE = /\s*\(([^)]*\d[^)]*)\)/g;
const CLAUSE_SPLIT_RE = /[,;:—–]\s*/;
function extractMetrics(text) {
  if (!text || typeof text !== 'string') return { cleanedText: text || '', metricItems: [] };

  const metricItems = [];
  const kept = [];

  let lastIdx = 0;
  let match;
  METRIC_PAREN_RE.lastIndex = 0;
  while ((match = METRIC_PAREN_RE.exec(text)) !== null) {
    const inner = match[1].trim();
    if (inner.length < 3 || inner.length > 120) continue;
    if (!/\d/.test(inner)) continue;
    if (/^(e\.g\.|i\.e\.|vs\.?)$/i.test(inner)) continue;

    const before = text.slice(lastIdx, match.index);
    const clauses = before.split(CLAUSE_SPLIT_RE).map(s => s.trim()).filter(Boolean);
    const label = clauses.length > 0 ? clauses[clauses.length - 1] : '';

    if (label.length >= 4 && !/^\d+$/.test(label)) {
      metricItems.push({ label, value: inner });
      kept.push({ start: match.index, end: METRIC_PAREN_RE.lastIndex });
    }
  }

  if (metricItems.length === 0) return { cleanedText: text, metricItems: [] };

  let cleaned = '';
  let cursor = 0;
  for (const span of kept) {
    cleaned += text.slice(cursor, span.start);
    cursor = span.end;
  }
  cleaned += text.slice(cursor);
  cleaned = cleaned.replace(/\s{2,}/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
  if (cleaned.endsWith(' —') || cleaned.endsWith(' -')) cleaned = cleaned.slice(0, -2).trim();

  const seen = new Set();
  const deduped = metricItems.filter(m => {
    const key = `${m.label}||${m.value}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return { cleanedText: cleaned, metricItems: deduped };
}

// Donut Chart Component for difficulty breakdown
const DonutChart = ({ correct, incorrect, unanswered, label, size = 100 }) => {
  const total = correct + incorrect + unanswered;
  if (total === 0) return null;

  const chartRadius = 40;
  const circumference = 2 * Math.PI * chartRadius;

  const correctPct = (correct / total) * 100;
  const incorrectPct = (incorrect / total) * 100;
  const unansweredPct = (unanswered / total) * 100;

  const correctDash = (correctPct / 100) * circumference;
  const incorrectDash = (incorrectPct / 100) * circumference;
  const unansweredDash = (unansweredPct / 100) * circumference;

  const correctOffset = 0;
  const incorrectOffset = -correctDash;
  const unansweredOffset = -(correctDash + incorrectDash);

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={chartRadius}
          fill="none"
          stroke={colors.surface.grayDark}
          strokeWidth="12"
        />
        {/* Unanswered (gray) - draw first as base */}
        {unanswered > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.text.muted}
            strokeWidth="12"
            strokeDasharray={`${unansweredDash} ${circumference}`}
            strokeDashoffset={unansweredOffset}
            transform="rotate(-90 50 50)"
          />
        )}
        {/* Incorrect (red) */}
        {incorrect > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.semantic.error}
            strokeWidth="12"
            strokeDasharray={`${incorrectDash} ${circumference}`}
            strokeDashoffset={incorrectOffset}
            transform="rotate(-90 50 50)"
          />
        )}
        {/* Correct (green) - draw last on top */}
        {correct > 0 && (
          <circle
            cx="50"
            cy="50"
            r={chartRadius}
            fill="none"
            stroke={colors.semantic.success}
            strokeWidth="12"
            strokeDasharray={`${correctDash} ${circumference}`}
            strokeDashoffset={correctOffset}
            transform="rotate(-90 50 50)"
          />
        )}
      </svg>
      <p style={{
        fontWeight: '600',
        fontSize: '14px',
        color: colors.text.secondary,
        marginTop: '8px'
      }}>
        {label}
      </p>
    </div>
  );
};

// Score Badge Component with progress bar
const ScoreBadge = ({ score, maxScore, size = 'large' }) => {
  const percentage = (score / maxScore) * 100;
  const isLarge = size === 'large';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: isLarge ? '24px' : '16px',
      justifyContent: 'center'
    }}>
      {/* Score circle */}
      <div style={{
        width: isLarge ? '100px' : '70px',
        height: isLarge ? '100px' : '70px',
        borderRadius: radius.full,
        background: colors.accent.teal,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.text.inverse,
        fontSize: isLarge ? '32px' : '22px',
        fontWeight: '700',
        boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
      }}>
        {score}
      </div>

      {/* Progress bar */}
      <div style={{ flex: 1, maxWidth: isLarge ? '300px' : '200px' }}>
        <div style={{
          height: isLarge ? '12px' : '8px',
          background: colors.surface.grayDark,
          borderRadius: '6px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            background: colors.accent.teal,
            borderRadius: '6px',
            transition: 'width 0.5s ease-out'
          }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4px',
          fontSize: isLarge ? '13px' : '11px',
          color: colors.text.secondary
        }}>
          <span>{isLarge ? '400' : '200'}</span>
          <span>{maxScore}</span>
        </div>
      </div>
    </div>
  );
};

// Domain Bar Component — shows per-domain accuracy percentage
const DomainBar = ({ domain, correct, total }) => {
  const displayName = DOMAIN_DISPLAY_NAMES[domain] || domain;
  const accuracyPct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const barColor = accuracyPct >= 70 ? colors.semantic.success
    : accuracyPct >= 40 ? 'var(--color-warning-600)'
    : colors.semantic.error;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <span style={{
        width: '220px',
        fontSize: '14px',
        color: colors.text.secondary,
        flexShrink: 0
      }}>
        {displayName}
      </span>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          flex: 1,
          height: '24px',
          background: colors.surface.grayDark,
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${accuracyPct}%`,
            height: '100%',
            background: barColor,
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <span style={{
          fontWeight: '700',
          fontSize: '14px',
          color: colors.text.secondary,
          minWidth: '52px',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums'
        }}>
          {accuracyPct}%
        </span>
        <span style={{
          fontSize: '12px',
          color: colors.text.muted,
          minWidth: '36px',
          textAlign: 'right',
          fontVariantNumeric: 'tabular-nums'
        }}>
          {correct}/{total}
        </span>
      </div>
    </div>
  );
};

// Legend Component for donut charts
const DonutLegend = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginTop: '16px',
    fontSize: '12px'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.semantic.success, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Correct</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.semantic.error, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Incorrect</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ width: '12px', height: '12px', background: colors.text.muted, borderRadius: '2px' }} />
      <span style={{ color: colors.text.secondary }}>Unanswered</span>
    </div>
  </div>
);

// Reusable Section Header Component
const SectionHeader = ({ number, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
    <div style={{
      width: '28px', height: '28px', borderRadius: '50%',
      background: 'var(--color-brand-primary)', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '13px', fontWeight: '800', flexShrink: 0
    }}>
      {number}
    </div>
    <h2 style={{
      fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: '800',
      color: 'var(--color-slate-800)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0
    }}>
      {title}
    </h2>
    <div style={{ flex: 1, height: '1px', background: 'var(--color-slate-200)' }} />
  </div>
);

const CollapsibleSection = ({ icon, iconBg, iconColor, label, expanded, onToggle, children }) => (
  <div style={{
    background: '#ffffff', borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--color-slate-200)',
    boxShadow: expanded ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    overflow: 'hidden', transition: 'all 0.3s ease',
  }}>
    <button
      onClick={onToggle}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', padding: '20px 24px', border: 'none', background: 'none',
        cursor: 'pointer', outline: 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor }}>
          {icon}
        </div>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '700', color: 'var(--color-slate-800)' }}>
          {label}
        </span>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-slate-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
    <div className={`diag-collapsible${expanded ? ' diag-expanded' : ''}`}>
      <div style={{ borderTop: '1px solid var(--color-slate-100)' }}>
        {children}
      </div>
    </div>
  </div>
);

const TestResults = ({
  test,
  answers,
  diagnosticData,
  diagnosticReport,
  practiceTestResults,
  aiDiagnosticState,
  onRetryAiDiagnostic,
  saveStatus = null,
  onRetrySave = null,
  onBack,
  onRetake,
  onReview,
  onReviewModule,
  onGoToStudyPlan,
  savedStudyPlan,
  user,
}) => {
  const [activeTab, setActiveTab] = useState('summary');
  const [expandedWeakness, setExpandedWeakness] = useState(0);
  const [showImpact, setShowImpact] = useState(false);
  const [showProof, setShowProof] = useState(false);
  const [showNarrativeDetails, setShowNarrativeDetails] = useState(false);
  const [showBehaviorDetail, setShowBehaviorDetail] = useState(false);
  const [showEvidenceDetail, setShowEvidenceDetail] = useState(false);
  const [activeDomainTab, setActiveDomainTab] = useState(null);
  const [showQuestionInsights, setShowQuestionInsights] = useState(false);
  const [diagEntrance, setDiagEntrance] = useState(true);
  const diagEntranceTimer = useRef(null);
  // Latches once the post-test save fails so the banner can keep narrating
  // the retry (saving) and recovery (saved) states instead of vanishing.
  const [hadSaveFailure, setHadSaveFailure] = useState(false);

  useEffect(() => {
    if (saveStatus === 'failed') setHadSaveFailure(true);
  }, [saveStatus]);

  useEffect(() => {
    if (diagEntrance) {
      diagEntranceTimer.current = setTimeout(() => setDiagEntrance(false), 1200);
    }
    return () => clearTimeout(diagEntranceTimer.current);
  }, [diagEntrance]);

  const diagUI = useMemo(
    () => adaptDiagnosticForUI(diagnosticReport, diagnosticData),
    [diagnosticReport, diagnosticData]
  );

  // AI diagnostic comes pre-populated from PracticeTest's auto-generation pipeline
  const aiStatus = aiDiagnosticState?.status || 'idle';
  const aiNarrative = aiDiagnosticState?.narrative || null;
  const aiError = aiDiagnosticState?.error || null;

  // Calculate scores
  const calculateModuleScore = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    let correct = 0;
    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      if (isAnswerCorrect(q, answers[key])) correct++;
    });
    return { correct, total: module.questions.length };
  };

  const calculateTotalScore = () => {
    let total = 0;
    test.modules.forEach((_, idx) => {
      total += calculateModuleScore(idx).correct;
    });
    return total;
  };

  // Calculate difficulty breakdown for a module
  const calculateDifficultyBreakdown = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const breakdown = {
      easy: { correct: 0, incorrect: 0, unanswered: 0 },
      medium: { correct: 0, incorrect: 0, unanswered: 0 },
      hard: { correct: 0, incorrect: 0, unanswered: 0 }
    };

    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];
      const difficulty = q.difficulty || 'medium';

      if (!userAnswer) {
        breakdown[difficulty].unanswered++;
      } else if (isAnswerCorrect(q, userAnswer)) {
        breakdown[difficulty].correct++;
      } else {
        breakdown[difficulty].incorrect++;
      }
    });

    return breakdown;
  };

  // Calculate domain breakdown for a module using the shared inferDomain helper
  const calculateDomainBreakdown = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const domains = {};
    SAT_MATH_DOMAINS.forEach(d => { domains[d] = { correct: 0, total: 0 }; });

    module.questions.forEach((q, qIdx) => {
      const key = `${moduleIndex}-${qIdx}`;
      const userAnswer = answers[key];
      const domain = inferDomain(q.skills);
      const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';

      domains[domain].total++;
      if (isAnswered && isAnswerCorrect(q, userAnswer)) {
        domains[domain].correct++;
      }
    });

    return domains;
  };

  // Determine if Module 2 is "Hard" based on Module 1 performance
  const isModule2Hard = () => {
    if (test.modules.length < 2) return false;
    const mod1Score = calculateModuleScore(0);
    const percentage = (mod1Score.correct / mod1Score.total) * 100;
    return percentage >= 60; // Threshold for unlocking hard module
  };

  const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
  const totalCorrect = calculateTotalScore();
  // Section-aware scoring: a full-length SAT (R&W + Math) returns a 400-1600
  // composite; a single-section test returns a 200-800 score.
  const _scored = scoreTest(test, answers);
  const satScore = _scored.sectionScore;
  const sectionScores = _scored.sectionScores || {};
  const isMultiSection = !!_scored.isMultiSection;
  const headlineLabel = isMultiSection
    ? 'Total Score'
    : (test.modules[0]?.section === 'reading-writing' ? 'Reading & Writing Score' : 'Math Score');

  const allQuestionEntries = test.modules.flatMap((mod, modIdx) =>
    mod.questions.map((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const userAnswer = answers[key];
      const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== '';
      return { key, question: q, isAnswered, isCorrect: isAnswered && isAnswerCorrect(q, userAnswer) };
    })
  );

  // Tab navigation
  const tabs = [
    { id: 'summary', label: 'TEST OVERVIEW' },
    { id: 'diagnostic', label: 'DIAGNOSTIC INSIGHTS' },
    ...test.modules.map((mod, idx) => {
      const sec = mod.section || (test.section === 'reading-writing' ? 'reading-writing' : 'math');
      const sectionMods = test.modules.filter(m => (m.section || test.section) === sec);
      const idxWithinSection = sectionMods.indexOf(mod) + 1;
      const prefix = sec === 'reading-writing' ? 'R&W' : 'MATH';
      return {
        id: `module-${idx}`,
        label: `${prefix}: MODULE ${idxWithinSection}`,
      };
    })
  ];

  const cardBase = {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'saturate(180%) blur(24px)',
    WebkitBackdropFilter: 'saturate(180%) blur(24px)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
    padding: '32px',
  };
  const sectionTitle = { fontSize: '11px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' };

  const renderSummaryView = () => {
    const mod2Hard = isModule2Hard();
    const mod1 = calculateModuleScore(0);
    const mod2 = test.modules.length > 1 ? calculateModuleScore(1) : null;
    const targetScore = user?.targetScore || DEFAULT_GOAL_SCORE;
    // Compare only when goal and score are on the SAME scale: a composite goal
    // (> 800) against a composite full-length result, or a legacy section goal
    // (<= 800) against a section-only result. Never compare across scales.
    const targetComparable = isCompositeScaleTarget(targetScore) === isMultiSection;
    const gap = targetComparable ? Math.max(0, targetScore - satScore) : 0;
    const isAtTarget = isGoalAchieved({ latestScore: satScore, targetScore, isMultiSection });
    const accuracyPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    const percentile = estimatePercentile(satScore);

    // ── Difficulty aggregates ──
    const diffAll = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } };
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDifficultyBreakdown(modIdx);
      ['easy', 'medium', 'hard'].forEach(d => {
        diffAll[d].correct += bd[d].correct;
        diffAll[d].total += bd[d].correct + bd[d].incorrect + bd[d].unanswered;
      });
    });

    // ── Domain aggregates (always all 4 SAT domains) ──
    const domAll = {};
    SAT_MATH_DOMAINS.forEach(d => { domAll[d] = { correct: 0, total: 0 }; });
    test.modules.forEach((_, modIdx) => {
      const bd = calculateDomainBreakdown(modIdx);
      Object.entries(bd).forEach(([dom, vals]) => {
        if (!domAll[dom]) domAll[dom] = { correct: 0, total: 0 };
        domAll[dom].correct += vals.correct;
        domAll[dom].total += vals.total;
      });
    });
    const domEntries = SAT_MATH_DOMAINS
      .filter(d => domAll[d].total > 0)
      .map(d => [d, domAll[d]])
      .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

    // ── Telemetry extraction (current attempt) ──
    const qDetails = diagnosticData?.questionDetails || {};
    const qEntries = Object.entries(qDetails);
    const hasTelemetry = qEntries.length > 0;
    const totalTimeSpent = qEntries.reduce((s, [, q]) => s + (q.timeSpent || 0), 0);
    const avgTimePerQ = hasTelemetry ? totalTimeSpent / qEntries.length : 0;

    const incorrectEntries = qEntries.filter(([, q]) => !q.isCorrect);
    const unansweredCount = qEntries.filter(([key]) => !answers[key]).length;

    const carelessCount = incorrectEntries.filter(([, q]) =>
      (q.difficulty === 'easy') || (avgTimePerQ > 0 && (q.timeSpent || 0) < avgTimePerQ * 0.5)
    ).length;
    const timePressureCount = incorrectEntries.filter(([, q]) =>
      (q.timeSpent || 0) > avgTimePerQ * 1.5
    ).length;
    const contentGapCount = Math.max(0, incorrectEntries.length - carelessCount - timePressureCount);

    const totalAnswerChanges = qEntries.reduce((s, [, q]) => s + (q.answerChanges || 0), 0);
    const reviewedCount = diagnosticData?.markedForReviewCount || 0;
    const navPattern = diagnosticData?.navigationPattern || 'linear';

    // First-half vs second-half accuracy (stamina)
    const halfIdx = Math.floor(qEntries.length / 2);
    const firstHalf = qEntries.slice(0, halfIdx);
    const secondHalf = qEntries.slice(halfIdx);
    const firstHalfAcc = firstHalf.length > 0 ? firstHalf.filter(([, q]) => q.isCorrect).length / firstHalf.length : 0;
    const secondHalfAcc = secondHalf.length > 0 ? secondHalf.filter(([, q]) => q.isCorrect).length / secondHalf.length : 0;
    const staminaDrop = Math.round((firstHalfAcc - secondHalfAcc) * 100);

    // Difficulty cliff: biggest accuracy drop between adjacent levels
    const diffLevels = ['easy', 'medium', 'hard'];
    const diffPcts = diffLevels.map(d => diffAll[d].total > 0 ? Math.round((diffAll[d].correct / diffAll[d].total) * 100) : null);
    let diffCliff = null;
    for (let i = 0; i < diffPcts.length - 1; i++) {
      if (diffPcts[i] !== null && diffPcts[i + 1] !== null) {
        const drop = diffPcts[i] - diffPcts[i + 1];
        if (!diffCliff || drop > diffCliff.drop) {
          diffCliff = { from: diffLevels[i], to: diffLevels[i + 1], drop };
        }
      }
    }

    // Weakest and strongest domain
    const weakestDom = domEntries.length > 0 ? domEntries[0] : null;
    const strongestDom = domEntries.length > 0 ? domEntries[domEntries.length - 1] : null;

    // Easy misses (high-value recoverable points)
    const easyMissed = qEntries.filter(([, q]) => q.difficulty === 'easy' && !q.isCorrect).length;

    // Module delta
    const mod1Pct = mod1.total > 0 ? Math.round((mod1.correct / mod1.total) * 100) : 0;
    const mod2Pct = mod2 && mod2.total > 0 ? Math.round((mod2.correct / mod2.total) * 100) : null;

    // ── Historical attempt data ──
    // Blank/abandoned submissions are excluded: a floor-400 first attempt
    // would inflate "improvement from first" and chart on the trajectory.
    const testHistory = practiceTestResults?.[test.id];
    const attempts = (testHistory?.attempts || []).filter(a => !isBlankAttempt(a));
    const pastAttempts = attempts.filter(a => a.scaledScore !== satScore || a.completedAt !== attempts[attempts.length - 1]?.completedAt);
    const hasHistory = attempts.length > 1;
    const bestScore = testHistory?.bestScaledScore || satScore;
    const firstAttemptScore = attempts.length > 0 ? attempts[0].scaledScore : satScore;
    const improvementFromFirst = satScore - firstAttemptScore;

    // Linear gauge geometry — 200-800 single-section, 400-1600 full SAT.
    const gaugeMin = isMultiSection ? 400 : 200;
    const gaugeMax = isMultiSection ? 1600 : 800;
    const gaugeRange = gaugeMax - gaugeMin;
    const scorePct = ((satScore - gaugeMin) / gaugeRange) * 100;
    const targetPct = ((targetScore - gaugeMin) / gaugeRange) * 100;
    const accentHex = isAtTarget ? '#22c55e' : '#06b6d4';

    const formatTime = (seconds) => {
      if (seconds < 60) return `${Math.round(seconds)}s`;
      const m = Math.floor(seconds / 60);
      const s = Math.round(seconds % 60);
      return s > 0 ? `${m}m ${s}s` : `${m}m`;
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>

        {/* ═══════════ BLOCK 1: SCORE + MAIN ACTIONS ═══════════ */}
        <div style={{ ...cardBase, padding: '40px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Score number */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '72px', fontWeight: '800', color: colors.text.primary, letterSpacing: '-0.05em', lineHeight: 1 }}>
              {satScore}
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: colors.text.secondary, marginTop: '8px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>{headlineLabel}</div>
            {isMultiSection && (
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '12px' }}>
                {sectionScores['reading-writing'] !== undefined && (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{sectionScores['reading-writing']}</div>
                    <div style={{ fontSize: '10px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Reading & Writing</div>
                  </div>
                )}
                {sectionScores['math'] !== undefined && (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: colors.text.primary }}>{sectionScores['math']}</div>
                    <div style={{ fontSize: '10px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Math</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Linear score gauge (box-and-whisker style) */}
          <div style={{ width: '100%', maxWidth: '480px', padding: '0 8px', marginBottom: '40px' }}>
            {/* Score + Target labels above the bar */}
            <div style={{ position: 'relative', height: '32px', marginBottom: '6px' }}>
              {/* Score label */}
              <div style={{
                position: 'absolute',
                left: `${scorePct}%`, transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <div style={{
                  fontSize: '13px', fontWeight: '800', color: accentHex,
                  background: `${accentHex}12`, padding: '4px 10px', borderRadius: '8px',
                  fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
                  boxShadow: `0 2px 8px ${accentHex}20`
                }}>
                  {satScore}
                </div>
              </div>
              {/* Target label (only if comparable + not overlapping score) */}
              {targetComparable && !isAtTarget && Math.abs(scorePct - targetPct) > 8 && (
                <div style={{
                  position: 'absolute',
                  left: `${targetPct}%`, transform: 'translateX(-50%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}>
                  <div style={{
                    fontSize: '11px', fontWeight: '700', color: '#f97316',
                    whiteSpace: 'nowrap', marginTop: '4px'
                  }}>
                    Target {targetScore}
                  </div>
                </div>
              )}
            </div>

            {/* The gauge track */}
            <div style={{ position: 'relative', height: '16px' }}>
              {/* Background track with range zones */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '8px', overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
              }}>
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fee2e2, #fef08a)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #fef08a, #bbf7d0)' }} />
                <div style={{ flex: 1, background: 'linear-gradient(90deg, #bbf7d0, #86efac)' }} />
              </div>

              {/* Filled portion up to score */}
              <div style={{
                position: 'absolute', top: '2px', bottom: '2px', left: '2px',
                width: `calc(${scorePct}% - 4px)`,
                borderRadius: '6px',
                background: `linear-gradient(90deg, ${accentHex}99, ${accentHex})`,
                boxShadow: `0 0 12px ${accentHex}50`,
                transition: 'width 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />

              {/* Target marker line */}
              {targetComparable && !isAtTarget && (
                <div style={{
                  position: 'absolute', top: '-6px', bottom: '-6px',
                  left: `${targetPct}%`, transform: 'translateX(-50%)',
                  width: '2px', background: '#f97316',
                  borderRadius: '1px',
                  boxShadow: '0 0 4px rgba(249,115,22,0.4)',
                }}>
                  <div style={{
                    position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)',
                    width: '8px', height: '4px', borderRadius: '2px 2px 0 0',
                    background: '#f97316',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)',
                    width: '8px', height: '4px', borderRadius: '0 0 2px 2px',
                    background: '#f97316',
                  }} />
                </div>
              )}

              {/* Score marker dot */}
              <div style={{
                position: 'absolute', top: '50%', left: `${scorePct}%`,
                transform: 'translate(-50%, -50%)',
                width: '22px', height: '22px', borderRadius: '50%',
                background: '#fff',
                border: `5px solid ${accentHex}`,
                boxShadow: `0 2px 12px ${accentHex}60, 0 1px 3px rgba(0,0,0,0.1)`,
                transition: 'left 1s cubic-bezier(0.34,1.56,0.64,1)',
              }} />
            </div>

            {/* Scale labels */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              {(isMultiSection ? [400, 800, 1200, 1600] : [200, 400, 600, 800]).map(v => (
                <span key={v} style={{ fontSize: '11px', fontWeight: '600', color: colors.text.muted, fontVariantNumeric: 'tabular-nums' }}>{v}</span>
              ))}
            </div>
          </div>

          {/* Primary Action Row */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            <button onClick={onReview} style={{
              flex: '1 1 auto', maxWidth: '320px',
              padding: '16px 28px', background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', color: '#fff',
              border: '1px solid #020617', borderRadius: '18px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(15,23,42,0.2), inset 0 1px 1px rgba(255,255,255,0.1)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Review Answers <ArrowRightIcon size={16} />
            </button>
            <button onClick={onRetake} style={{
              flex: '0 1 auto',
              padding: '16px 28px', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', color: colors.text.primary,
              border: '1px solid rgba(0,0,0,0.08)', borderRadius: '18px',
              fontSize: '15px', fontWeight: '600', cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03), inset 0 1px 1px #fff',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              Retake
            </button>
          </div>
        </div>

        {/* ═══════════ SECONDARY STATS ROW ═══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ ...cardBase, padding: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Percentile</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: percentile >= 75 ? '#22c55e' : percentile >= 50 ? '#06b6d4' : '#eab308', marginTop: '4px', lineHeight: 1 }}>{percentile}th</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Accuracy</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: accuracyPct >= 80 ? '#22c55e' : accuracyPct >= 60 ? '#06b6d4' : '#eab308', marginTop: '4px', lineHeight: 1 }}>{accuracyPct}%</div>
              </div>
            </div>
          </div>
          
          <div style={{ ...cardBase, padding: '24px', display: 'flex', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 1</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginTop: '4px' }}>{mod1Pct}%</div>
            </div>
            {mod2Pct !== null && (
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Module 2 {mod2Hard && <span style={{ color: '#f97316' }}>(Hard)</span>}</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: colors.text.primary, marginTop: '4px' }}>{mod2Pct}%</div>
              </div>
            )}
          </div>
        </div>

        {/* ═══════════ BLOCK 2: ATTEMPT DATA ═══════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* ── 2A  ATTEMPT SNAPSHOT ── */}
          <div style={cardBase}>
            <div style={sectionTitle}>Attempt Snapshot</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '16px' }}>
              {[
                { label: 'Total Time', value: hasTelemetry ? formatTime(totalTimeSpent) : '—', sub: null },
                { label: 'Avg / Question', value: hasTelemetry ? formatTime(avgTimePerQ) : '—', sub: hasTelemetry && avgTimePerQ > 90 ? 'Slow' : null, subColor: '#f97316' },
                { label: 'Incorrect', value: `${incorrectEntries.length}`, sub: totalQuestions > 0 ? `of ${totalQuestions}` : null, subColor: '#ef4444' },
                { label: 'Unanswered', value: `${unansweredCount}`, sub: null, subColor: '#eab308' },
                { label: 'Easy Missed', value: `${easyMissed}`, sub: easyMissed > 0 ? 'Recoverable' : null, subColor: '#f97316' },
                { label: 'Flagged', value: `${reviewedCount}`, sub: null },
              ].map((m, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 8px' }}>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: '600', color: colors.text.secondary, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{m.label}</div>
                  {m.sub && <div style={{ fontSize: '10px', fontWeight: '700', color: m.subColor || colors.text.muted, marginTop: '2px' }}>{m.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* ── 2B  POINT-LOSS BREAKDOWN ── */}
          {incorrectEntries.length > 0 && (
            <div style={cardBase}>
              <div style={sectionTitle}>Point-Loss Breakdown</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Careless Errors', count: carelessCount, color: '#eab308', desc: 'Easy Qs wrong or rushed answers' },
                  { label: 'Time Pressure', count: timePressureCount, color: '#f97316', desc: 'Spent 50%+ more time than average' },
                  { label: 'Content Gaps', count: contentGapCount, color: '#ef4444', desc: 'Skill or concept not yet learned' },
                ].map(b => {
                  const pct = incorrectEntries.length > 0 ? Math.round((b.count / incorrectEntries.length) * 100) : 0;
                  return (
                    <div key={b.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', minWidth: 0 }}>
                          <span style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, whiteSpace: 'nowrap' }}>{b.label}</span>
                          <span style={{ fontSize: '12px', color: colors.text.muted, whiteSpace: 'nowrap' }}>{b.desc}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                          <span style={{ fontSize: '18px', fontWeight: '800', color: b.color, fontVariantNumeric: 'tabular-nums' }}>{b.count}</span>
                          <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text.muted }}>{pct}%</span>
                        </div>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${pct}%`, height: '100%', background: b.color, borderRadius: '4px',
                          transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }} />
                      </div>
                    </div>
                  );
                })}
                <div style={{ fontSize: '12px', color: colors.text.muted, marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
                  {incorrectEntries.length} incorrect out of {totalQuestions} total
                </div>
              </div>
            </div>
          )}

          {/* ── 2C  PERFORMANCE BY DIFFICULTY ── */}
          <div style={cardBase}>
            <div style={sectionTitle}>Performance by Difficulty</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {diffLevels.map(d => {
                const stats = diffAll[d];
                const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                const accent = d === 'easy' ? '#22c55e' : d === 'medium' ? '#06b6d4' : '#f97316';
                return (
                  <div key={d} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: accent, fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>{pct}%</div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: colors.text.secondary, marginTop: '6px', textTransform: 'capitalize' }}>{d}</div>
                    <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '2px', fontVariantNumeric: 'tabular-nums' }}>{stats.correct}/{stats.total}</div>
                    <div style={{ height: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '3px', overflow: 'hidden', marginTop: '10px' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: accent, borderRadius: '3px', transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                    </div>
                    {diffCliff && diffCliff.to === d && diffCliff.drop > 10 && (
                      <div style={{ fontSize: '10px', fontWeight: '700', color: '#ef4444', marginTop: '6px' }}>-{diffCliff.drop}pp drop</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 2D  DOMAIN PERFORMANCE ── */}
          {domEntries.length > 0 && (
            <div style={cardBase}>
              <div style={sectionTitle}>Domain Performance</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {domEntries.map(([domain, stats]) => {
                  const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                  const isWeakest = weakestDom && weakestDom[0] === domain;
                  const isStrongest = strongestDom && strongestDom[0] === domain;
                  const barColor = pct >= 80 ? '#22c55e' : pct >= 60 ? '#06b6d4' : pct >= 40 ? '#f97316' : '#ef4444';
                  return (
                    <div key={domain}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', minWidth: 0 }}>
                          <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text.primary }}>
                            {DOMAIN_DISPLAY_NAMES[domain] || domain}
                          </span>
                          {isWeakest && <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-brand-purple-text)', background: 'var(--color-brand-purple-soft)', padding: '2px 6px', borderRadius: '6px' }}>Weakest</span>}
                          {isStrongest && domEntries.length > 1 && <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-brand-green-text)', background: 'var(--color-brand-green-soft)', padding: '2px 6px', borderRadius: '6px' }}>Strongest</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', flexShrink: 0 }}>
                          <span style={{ fontSize: '16px', fontWeight: '800', color: barColor, fontVariantNumeric: 'tabular-nums' }}>{pct}%</span>
                          <span style={{ fontSize: '11px', color: colors.text.muted, fontVariantNumeric: 'tabular-nums' }}>{stats.correct}/{stats.total}</span>
                        </div>
                      </div>
                      <div style={{ height: '8px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${pct}%`, height: '100%', background: barColor, borderRadius: '4px',
                          transition: 'width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── 2E  STAMINA & BEHAVIOR ── */}
          {hasTelemetry && (
            <div style={cardBase}>
              <div style={sectionTitle}>Stamina &amp; Behavior</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>

                {/* First-half vs second-half */}
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.5)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>Accuracy Split</div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{Math.round(firstHalfAcc * 100)}%</div>
                      <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>1st Half</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: staminaDrop > 5 ? '#f97316' : staminaDrop < -5 ? '#22c55e' : colors.text.muted, paddingBottom: '4px' }}>
                      {staminaDrop > 0 ? `−${staminaDrop}pp` : staminaDrop < 0 ? `+${Math.abs(staminaDrop)}pp` : '='}
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{Math.round(secondHalfAcc * 100)}%</div>
                      <div style={{ fontSize: '11px', color: colors.text.muted, marginTop: '4px' }}>2nd Half</div>
                    </div>
                  </div>
                </div>

                {/* Behavior metrics */}
                <div style={{ padding: '16px', background: 'rgba(255,255,255,0.5)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: colors.text.secondary, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>Test Behavior</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { label: 'Answer Changes', value: totalAnswerChanges },
                      { label: 'Flagged for Review', value: reviewedCount },
                      { label: 'Navigation Style', value: navPattern === 'strategic-skip' ? 'Strategic Skip' : navPattern === 'jumping' ? 'Jumping' : 'Linear' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '13px', color: colors.text.secondary }}>{row.label}</span>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ═══════════ BLOCK 3: SCORE HISTORY ═══════════ */}
        {(() => {
          if (!hasHistory && attempts.length <= 1) {
            return (
              <div style={cardBase}>
                <div style={sectionTitle}>Score Trajectory</div>
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    This is your first recorded attempt. Retake to start tracking progress.
                  </div>
                </div>
              </div>
            );
          }

          const sortedAttempts = [...attempts].sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));
          const scores = sortedAttempts.map(a => a.scaledScore);
          const minS = Math.min(...scores, targetScore) - 20;
          const maxS = Math.max(...scores, targetScore) + 20;
          const range = maxS - minS || 1;

          const chartW = 340;
          const chartH = 100;
          const padX = 30;
          const padY = 10;
          const plotW = chartW - padX * 2;
          const plotH = chartH - padY * 2;

          const pts = scores.map((s, i) => ({
            x: padX + (scores.length > 1 ? (i / (scores.length - 1)) * plotW : plotW / 2),
            y: padY + plotH - ((s - minS) / range) * plotH,
            score: s,
            idx: i + 1,
          }));
          const targetY = padY + plotH - ((targetScore - minS) / range) * plotH;
          const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

          return (
            <div style={cardBase}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={sectionTitle}>Score Trajectory</div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {[
                    { label: 'Best', value: bestScore },
                    { label: 'Attempts', value: attempts.length },
                    ...(improvementFromFirst !== 0 ? [{ label: 'Change', value: `${improvementFromFirst > 0 ? '+' : ''}${improvementFromFirst}` }] : []),
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '16px', fontWeight: '800', color: colors.text.primary, fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
                      <div style={{ fontSize: '10px', fontWeight: '600', color: colors.text.muted, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width={chartW} height={chartH + 20} viewBox={`0 0 ${chartW} ${chartH + 20}`} style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={`${accentHex}66`} />
                      <stop offset="100%" stopColor={accentHex} />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <g transform={`translate(0, 10)`}>
                    {/* Grid lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((f, i) => {
                      const y = padY + plotH - f * plotH;
                      const val = Math.round(minS + f * range);
                      return (
                        <g key={i}>
                          <line x1={padX} y1={y} x2={chartW - padX} y2={y} stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                          <text x={padX - 8} y={y + 3} textAnchor="end" fontSize="9" fill="rgba(0,0,0,0.3)" fontWeight="600" fontVariantNumeric="tabular-nums">{val}</text>
                        </g>
                      );
                    })}
                    {/* Target line */}
                    <line x1={padX} y1={targetY} x2={chartW - padX} y2={targetY}
                      stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                    <text x={chartW - padX + 8} y={targetY + 3} fontSize="9" fill="#f97316" fontWeight="700">Target</text>
                    
                    {/* Score line */}
                    {pts.length > 1 && (
                      <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0px 4px 6px rgba(6,182,212,0.3))" />
                    )}
                    
                    {/* Data points */}
                    {pts.map((p, i) => (
                      <g key={i}>
                        {i === pts.length - 1 && (
                          <circle cx={p.x} cy={p.y} r={12} fill={`${accentHex}20`} filter="blur(4px)" />
                        )}
                        <circle cx={p.x} cy={p.y} r={i === pts.length - 1 ? 6 : 4}
                          fill={i === pts.length - 1 ? accentHex : '#fff'}
                          stroke={i === pts.length - 1 ? '#fff' : accentHex} strokeWidth={i === pts.length - 1 ? 2 : 2.5} 
                          boxShadow={i === pts.length - 1 ? `0 0 10px ${accentHex}` : 'none'}
                          style={{ transition: 'all 0.3s ease' }}
                        />
                        <text x={p.x} y={p.y - (i === pts.length - 1 ? 14 : 12)} textAnchor="middle" fontSize="10" fontWeight="800"
                          fill={i === pts.length - 1 ? accentHex : 'rgba(0,0,0,0.5)'} fontVariantNumeric="tabular-nums">{p.score}</text>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          );
        })()}
      </div>
    );
  };

  const renderModuleSummary = (moduleIndex) => {
    const module = test.modules[moduleIndex];
    const difficultyBreakdown = calculateDifficultyBreakdown(moduleIndex);
    const domainBreakdown = calculateDomainBreakdown(moduleIndex);
    const moduleScore = calculateModuleScore(moduleIndex);

    // Domain accuracy is now percentage-based; no max scaling needed.

    return (
      <div className="mod-summary-container">
        {/* Module Header */}
        <div className="mod-summary-header">
          <div>
            <h2 className="mod-summary-title">Math: Module {moduleIndex + 1}</h2>
            <div className="mod-summary-subtitle">Performance breakdown and accuracy insights</div>
          </div>
          <button
            onClick={() => onReviewModule ? onReviewModule(moduleIndex) : onReview()}
            className="mod-action-btn"
          >
            Review Answers
            <ArrowRightIcon size={16} color="#fff" />
          </button>
        </div>

        {/* Score Snapshot */}
        <div className="mod-summary-card" style={{ padding: '24px 32px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 className="mod-summary-card-title">Module Score</h3>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-500)', marginTop: '4px' }}>Total correct answers</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span className="mod-summary-score-val">
              {moduleScore.correct}/{moduleScore.total}
            </span>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="mod-summary-card">
          <div>
            <h3 className="mod-summary-card-title">Accuracy by Difficulty</h3>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-500)', marginTop: '4px' }}>How you performed across different question levels</div>
          </div>

          <div className="mod-summary-donuts">
            <DonutChart
              correct={difficultyBreakdown.easy.correct}
              incorrect={difficultyBreakdown.easy.incorrect}
              unanswered={difficultyBreakdown.easy.unanswered}
              label="Easy"
            />
            <DonutChart
              correct={difficultyBreakdown.medium.correct}
              incorrect={difficultyBreakdown.medium.incorrect}
              unanswered={difficultyBreakdown.medium.unanswered}
              label="Medium"
            />
            <DonutChart
              correct={difficultyBreakdown.hard.correct}
              incorrect={difficultyBreakdown.hard.incorrect}
              unanswered={difficultyBreakdown.hard.unanswered}
              label="Hard"
            />
          </div>

          <DonutLegend />
        </div>

        {/* Domain Breakdown */}
        <div className="mod-summary-card">
          <div>
            <h3 className="mod-summary-card-title">Accuracy by Content Domain</h3>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-500)', marginTop: '4px' }}>Your performance across the four SAT Math areas</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            {/* Stable SAT domain order */}
            {SAT_MATH_DOMAINS.map(domainId => {
              const data = domainBreakdown[domainId];
              if (!data || data.total === 0) return null;
              return (
                <DomainBar
                  key={domainId}
                  domain={domainId}
                  correct={data.correct}
                  total={data.total}
                />
              );
            })}
          </div>
        </div>

        {/* Back to Summary */}
        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <button
            onClick={() => setActiveTab('summary')}
            className="mod-back-btn"
          >
            Back to Test Overview
          </button>
        </div>
      </div>
    );
  };

  const renderDiagnosticView = () => {
    if (!diagUI) {
      return (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: colors.text.secondary }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChartBarIcon size={40} color={colors.text.muted} />
            </div>
          </div>
          <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: '22px', fontWeight: '600', color: colors.text.primary, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            Diagnostic Insights Unavailable
          </h3>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: colors.text.secondary, maxWidth: '400px', margin: '0 auto', lineHeight: '1.5' }}>
            Complete a full practice test to unlock AI-powered analysis and detailed performance breakdowns.
          </p>
        </div>
      );
    }

    const isGenerating = aiStatus === 'generating';
    const hasFailed = aiStatus === 'failed';
    const hasAI = aiStatus === 'ready' && !!aiNarrative;
    const merged = hasAI ? mergeAiIntoReport(diagUI.report, aiNarrative) : diagUI.report;
    if (!merged) return null;

    const uni = buildUnifiedReport(merged);
    if (!uni) return null;
    const narrative = buildNarrativeFlow(uni);
    if (!narrative) return null;

    const { blocks, details, meta } = narrative;

    // Use Acely/PerformSAT primary orange brand colors
    const aiGradient = 'linear-gradient(135deg, var(--color-brand-orange-500) 0%, var(--color-brand-orange-600) 100%)';
    const aiGradientGlow = 'rgba(251, 146, 60, 0.25)'; // orange-400
    const aiColorText = 'var(--color-brand-orange-600)';

    const sevColors = {
      critical:    { bg: 'var(--color-error-100)', border: 'rgba(239,68,68,0.2)', dot: 'var(--color-error-600)' },
      significant: { bg: 'rgba(239,68,68,0.04)', border: 'rgba(239,68,68,0.1)', dot: 'var(--color-error-600)' },
      moderate:    { bg: 'var(--color-warning-100)', border: 'rgba(245,158,11,0.2)', dot: 'var(--color-warning-600)' },
      warning:     { bg: 'rgba(245,158,11,0.04)', border: 'rgba(245,158,11,0.1)', dot: 'var(--color-warning-600)' },
    };

    const renderBlock = (block, idx) => {
      if (block.id === 'context') {
        return (
          <div key={block.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {block.items.map((rawPt, i) => {
              const text = typeof rawPt === 'string' ? rawPt : rawPt.text;
              if (!text || text.trim() === '') return null;
              const scoreRestateRe = /^(you scored|you're scoring|your score|you got \d+\/|you are \d+ points|your percentile|scoring at the \d+)/i;
              if (scoreRestateRe.test(text.trim())) return null;
              
              const parts = splitToScannable(text);
              const hasParts = parts && parts.length > 1;
              
              return (
                <div key={i} style={{
                  background: 'var(--color-brand-purple-soft)',
                  borderRadius: '20px',
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  border: '1px solid var(--color-brand-purple-border)'
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'var(--color-brand-purple-deep)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: '700', flexShrink: 0
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ width: '100%' }}>
                    {hasParts ? (
                      <>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', color: 'var(--color-brand-navy)', lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em', marginBottom: '12px' }}>
                          <MathText>{parts[0]}</MathText>
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {parts.slice(1).map((p, pIdx) => (
                            <li key={pIdx} style={{ fontFamily: 'var(--font-ui)', fontSize: '1.1rem', color: 'var(--color-slate-700)', lineHeight: '1.5', fontWeight: '400' }}>
                              <MathText>{p}</MathText>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div style={{ 
                        fontFamily: 'var(--font-ui)', fontSize: '1.25rem', color: 'var(--color-brand-navy)', 
                        lineHeight: '1.6', fontWeight: '400', letterSpacing: '-0.01em' 
                      }}>
                        <MathText>{text}</MathText>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }

      if (block.id === 'metaStrip') {
        return (
          <div key={block.id} style={{ padding: '0 48px 40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {block.items.map((s, i) => {
                const valColor = s.type === 'warning' ? 'var(--color-warning-600)' : s.type === 'success' ? 'var(--color-success-600)' : s.type === 'info' ? 'var(--color-info-600)' : colors.text.primary;
                return (
                  <div key={i} className="diag-stat-card" style={{ flex: '1 1 220px', maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '36px', fontWeight: '800', color: valColor, lineHeight: 1, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: colors.text.secondary, marginTop: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                    {s.subtext && <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: colors.text.muted, marginTop: '8px', fontWeight: '500' }}>{s.subtext}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      if (block.id === 'behaviorAmplifier') {
        const confRank = { high: 0, medium: 1, low: 2 };
        const sortedItems = [...block.items].sort((a, b) => {
          const aStruct = typeof a === 'object' && a !== null;
          const bStruct = typeof b === 'object' && b !== null;
          const aFill = (aStruct ? [a.mechanism, a.evidence, a.estimatedImpact].filter(Boolean).length : 0);
          const bFill = (bStruct ? [b.mechanism, b.evidence, b.estimatedImpact].filter(Boolean).length : 0);
          const aConf = aStruct ? (confRank[a.confidence] ?? 1) : 1;
          const bConf = bStruct ? (confRank[b.confidence] ?? 1) : 1;
          if (aConf !== bConf) return aConf - bConf;
          return bFill - aFill;
        });

        function deriveAction(claim, mech) {
          const src = (mech || claim || '').toLowerCase();
          if (/rush|too fast|speed/i.test(src)) return 'Practice slowing down on questions you find straightforward — the extra seconds catch careless errors.';
          if (/slow|time.*(run|out|pressure)|overtime/i.test(src)) return 'Drill timed sets to build speed on familiar question types, freeing time for harder ones.';
          if (/guess|random|eliminat/i.test(src)) return 'Before guessing, eliminate at least one option — even partial elimination boosts your odds.';
          if (/stamina|fatigue|fade|drop.*off|later/i.test(src)) return 'Simulate full-length practice sessions to build endurance for the final section.';
          if (/skip|unanswer|blank|omit/i.test(src)) return 'Answer every question — there is no penalty for guessing, so never leave a blank.';
          if (/chang|switch|revis|erase/i.test(src)) return 'Trust your first instinct more often — data shows initial answers are usually right.';
          if (/focus|attention|careless|silly/i.test(src)) return 'Flag tricky questions to revisit, and double-check your work on the easiest ones.';
          return null;
        }

        return (
          <div key={block.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--color-slate-600)', marginBottom: '8px' }}>These patterns in your test-taking behavior affected your score.</div>

            {sortedItems.map((item, i) => {
              const isStructured = typeof item === 'object' && item !== null;
              const claimText = isStructured ? (item.text || '') : (typeof item === 'string' ? item : '');
              const rawClaim = claimText.replace(/^(\(\d+\)|\d+\.)\s*/, '');
              const { cleanedText: cleanedClaim, metricItems: behaviorMetrics } = extractMetrics(rawClaim);
              const mechanism = isStructured ? item.mechanism : null;
              const action = deriveAction(rawClaim, mechanism);
              const parts = splitToScannable(cleanedClaim);
              const hasParts = parts && parts.length > 1;

              return (
                <div key={i} style={{ 
                  background: 'linear-gradient(135deg, rgba(176, 146, 221, 0.1) 0%, rgba(176, 146, 221, 0.05) 100%)', 
                  borderRadius: 'var(--radius-xl)', 
                  padding: '24px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  border: '1px solid rgba(176, 146, 221, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', 
                      background: 'var(--color-accent-purple)', color: '#fff', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      fontSize: '14px', fontWeight: '800', flexShrink: 0
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      {hasParts ? (
                        <>
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', color: 'var(--color-brand-navy)', lineHeight: '1.4', fontWeight: '600', letterSpacing: '-0.01em', marginBottom: '12px' }}>
                            <MathText>{parts[0]}</MathText>
                          </div>
                          <ul style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {parts.slice(1).map((p, pIdx) => (
                              <li key={pIdx} style={{ fontFamily: 'var(--font-ui)', fontSize: '1.1rem', color: 'var(--color-slate-700)', lineHeight: '1.5', fontWeight: '400' }}>
                                <MathText>{p}</MathText>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', color: 'var(--color-brand-navy)', lineHeight: '1.6', fontWeight: '400', letterSpacing: '-0.01em' }}>
                          <MathText>{cleanedClaim}</MathText>
                        </div>
                      )}
                      
                      {action && (
                        <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)' }}>
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '800', color: 'var(--color-accent-purple)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>What to do</div>
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--color-slate-700)', fontWeight: '500', lineHeight: '1.5' }}>{action}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }

      // remediationPath block intentionally unmounted — RemediationPathBlock
      // was deleted along with the legacy LearnWorkspace flow it linked into.

      if (block.id === 'evidence') {
        const TIME_RE = /time|speed|stamina|half|pace|rush|fast|slow|minute|second|avg.*time|timing/i;
        const ACCURACY_RE = /accuracy|correct|miss|error|wrong|score|gap|wins|easy|domain|cause|lever|point|projected|impact/i;

        function classifyEvidence(ev) {
          const text = `${ev.label} ${ev.value} ${ev.group || ''}`;
          if (TIME_RE.test(text)) return 'Time & Pacing';
          if (ACCURACY_RE.test(text)) return 'Accuracy & Score';
          return 'Other Signals';
        }

        function interpretEvidence(ev) {
          const lbl = (ev.label || '').toLowerCase();
          const val = (ev.value || '').toString();
          const isWarning = ev.type === 'warning';
          const isGood = ev.type === 'success' || ev.type === 'good';

          if (/avg.*time|time.*question/i.test(lbl)) {
            return isWarning ? 'You spent more time per question than ideal, which may signal hesitation.' : 'Your pacing per question looks healthy.';
          }
          if (/correct.*wrong.*speed|speed/i.test(lbl)) {
            return isWarning ? 'Wrong answers came faster than correct ones — quick commits to trap answers.' : 'You spent similar time on correct and incorrect answers.';
          }
          if (/time.*error/i.test(lbl)) {
            return `${val} question(s) were likely rushed, causing avoidable mistakes.`;
          }
          if (/stamina/i.test(lbl)) {
            return isWarning ? 'Endurance dropped — later questions suffered from fatigue.' : 'You maintained consistent energy throughout the test.';
          }
          if (/half.*accuracy|1st.*2nd/i.test(lbl)) {
            return isWarning ? 'Accuracy fell in the second half, suggesting fatigue or time pressure.' : 'Your accuracy stayed steady from start to finish.';
          }
          if (/navigation/i.test(lbl)) {
            return isWarning ? 'Jumping between questions may reduce focus and waste time.' : 'You moved through questions in a steady order.';
          }
          if (/calculator/i.test(lbl)) {
            return isWarning ? 'Heavy calculator use may slow you down on simpler problems.' : 'Calculator use was moderate and appropriate.';
          }
          if (/flag|review/i.test(lbl)) {
            return isWarning ? 'Flagging many questions dilutes your review time on the hardest ones.' : 'You flagged selectively, keeping review focused.';
          }
          if (/easy.*win/i.test(lbl)) {
            return `These are straightforward questions you missed — fixing them is the fastest path to more points.`;
          }
          if (/point.*target|gap/i.test(lbl)) {
            return `You are ${val} point${val === '1' ? '' : 's'} away from your target score.`;
          }
          if (/lever|domain/i.test(lbl)) {
            return `Focusing here has the highest potential point gain.`;
          }
          if (/trend/i.test(lbl)) {
            return isGood ? 'Your scores are improving — keep up the momentum.' : isWarning ? 'Recent scores have dipped — revisit fundamentals.' : 'Scores are holding steady.';
          }
          if (/velocity|learning.*speed/i.test(lbl)) {
            return isGood ? 'You are learning at a healthy pace.' : 'Progress has slowed — consider changing your study approach.';
          }
          if (/projected.*gain/i.test(lbl)) {
            return `Fixing this area could recover ${val}.`;
          }
          if (isWarning) return 'This metric is outside the ideal range and may be costing you points.';
          if (isGood) return 'This is a strength — keep it up.';
          return 'A supporting data point for context.';
        }

        const themeOrder = ['Accuracy & Score', 'Time & Pacing', 'Other Signals'];
        const grouped = {};
        block.items.forEach(ev => {
          const theme = classifyEvidence(ev);
          if (!grouped[theme]) grouped[theme] = [];
          grouped[theme].push(ev);
        });

        const themeIcons = {
          'Accuracy & Score': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
          'Time & Pacing': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
          'Other Signals': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>,
        };

        return (
          <div key={block.id} style={{ padding: '24px 32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {themeOrder.filter(t => grouped[t]?.length > 0).map(theme => (
                <div key={theme}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ color: 'var(--color-slate-500)' }}>{themeIcons[theme]}</div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '800', color: 'var(--color-slate-800)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{theme}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {grouped[theme].map((ev, i) => {
                      const evColor = ev.type === 'warning' ? 'var(--color-error-600)' : ev.type === 'success' || ev.type === 'good' ? 'var(--color-success-600)' : 'var(--color-slate-900)';
                      const interpretation = interpretEvidence(ev);
                      return (
                        <div key={i} style={{ 
                          background: '#ffffff', 
                          borderRadius: 'var(--radius-lg)', 
                          padding: '20px 24px',
                          border: '1px solid var(--color-slate-200)',
                          boxShadow: 'var(--shadow-sm)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: '8px' }}>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: '700', color: 'var(--color-slate-800)' }}><MathText>{ev.label}</MathText></span>
                            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', fontWeight: '800', color: evColor, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}><MathText>{ev.value}</MathText></span>
                          </div>
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '500', color: 'var(--color-slate-500)', lineHeight: '1.5' }}>
                            <MathText>{interpretation}</MathText>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      if (block.id === 'nextMove') {
        const item = block.items[0] || {};
        const parts = splitToScannable(item.text);
        const hasParts = parts && parts.length > 1;

        return (
          <div key={block.id} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(198, 244, 50, 0.15) 0%, rgba(198, 244, 50, 0.05) 100%)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '32px 40px',
              border: '1px solid rgba(198, 244, 50, 0.3)',
              display: 'flex', flexDirection: 'column', gap: '24px'
            }}>
              {block.transition && (
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', color: 'var(--color-accent-dark-green)', lineHeight: '1.6', fontWeight: '500' }}><MathText>{block.transition}</MathText></div>
              )}
              {hasParts ? (
                <>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-accent-dark-green)', lineHeight: '1.4', letterSpacing: '-0.02em' }}>
                    <MathText>{parts[0]}</MathText>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {parts.slice(1).map((p, pIdx) => (
                      <li key={pIdx} style={{ fontFamily: 'var(--font-ui)', fontSize: '1.125rem', color: 'var(--color-accent-dark-green)', lineHeight: '1.5', fontWeight: '400' }}>
                        <MathText>{p}</MathText>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.5rem', fontWeight: '400', color: 'var(--color-accent-dark-green)', lineHeight: '1.5', letterSpacing: '-0.02em' }}>
                  <MathText>{item.text}</MathText>
                </div>
              )}
              {item.reasons?.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                  {item.reasons.map((r, i) => {
                    const cleanedReason = r.replace(/^(\(\d+\)|\d+\.)\s*/, '');
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '24px', height: '24px', borderRadius: '50%', 
                          background: 'var(--color-brand-neon)', color: 'var(--color-accent-dark-green)', 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          fontSize: '12px', fontWeight: '800', flexShrink: 0, marginTop: '4px'
                        }}>
                          {i + 1}
                        </div>
                        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.125rem', color: 'var(--color-accent-dark-green)', lineHeight: '1.6', fontWeight: '400' }}>
                          <MathText>{cleanedReason}</MathText>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Inline Study Plan Preview */}
              {savedStudyPlan && savedStudyPlan.weeks && savedStudyPlan.weeks.length > 0 && (() => {
                const week1 = savedStudyPlan.weeks[0];
                const activities = (week1.activities || []).slice(0, 3);
                // No-emoji rule: SVG icons matching StudyPlanDashboard's activityIcon map.
                const typeIcons = {
                  lesson: <BookOpenIcon size={18} />,
                  practice: <PencilIcon size={18} />,
                  strategy: <BrainIcon size={18} />,
                  review: <SearchIcon size={18} />,
                };
                return (
                  <div style={{
                    marginTop: '16px', padding: '24px', borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '800', color: 'var(--color-accent-dark-green)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Week 1: {week1.theme || 'Getting Started'}
                      </div>
                      {onGoToStudyPlan && (
                        <button onClick={onGoToStudyPlan} style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '700', color: 'var(--color-accent-dark-green)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          See full plan <ArrowRightIcon size={14} />
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {activities.map((act, ai) => (
                        <div key={ai} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: '#fff', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-sm)' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-slate-500)', flexShrink: 0 }}>{typeIcons[act.type] || <PinIcon size={18} />}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', fontWeight: '600', color: 'var(--color-slate-800)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{act.title}</div>
                          </div>
                          {act.duration && (
                            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', fontWeight: '600', color: 'var(--color-slate-400)', flexShrink: 0 }}>{act.duration}m</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
              
              {!savedStudyPlan && (
                <div style={{
                  marginTop: '16px', padding: '24px', borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', textAlign: 'center'
                }}>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '500', color: 'var(--color-accent-dark-green)' }}>
                    Your personalized study plan is being generated...
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                {onGoToStudyPlan && (
                  <button onClick={onGoToStudyPlan} style={{
                    fontFamily: 'var(--font-ui)', padding: '16px 32px', borderRadius: '9999px', border: 'none',
                    background: 'var(--color-accent-dark-green)', color: 'var(--color-brand-neon)', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    View Study Plan <ArrowRightIcon size={16} />
                  </button>
                )}
                <button onClick={onReview} style={{
                  fontFamily: 'var(--font-ui)', padding: '16px 32px', background: '#fff', color: 'var(--color-accent-dark-green)',
                  border: '1px solid rgba(46,78,44,0.2)', borderRadius: '9999px', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease'
                }}>
                  Review Missed Questions
                </button>
              </div>
            </div>
          </div>
        );
      }

      return null;
    };

    const getBlock = (id) => blocks.find(b => b.id === id);
    const hasDetails = (details.overflowDiagnosis && details.overflowDiagnosis.length > 0) || details.uncertainties || details.qualityFailed;

    const hasWhatHappened = getBlock('context') || getBlock('behaviorAmplifier');
    const hasEvidence = getBlock('evidence');
    const hasAction = getBlock('nextMove');
    let stepCounter = 0;

    // ─── Extract the #1 hero finding from context block (skip score restatements) ───
    const contextBlock = getBlock('context');
    const contextItems = contextBlock?.items || [];
    const scoreRestateRe = /^(you scored|you're scoring|your score|you got \d+\/|you are \d+ points|your percentile|scoring at the \d+)/i;
    const heroItem = contextItems.find(item => {
      const text = typeof item === 'string' ? item : item?.text || '';
      return text.length > 0 && !scoreRestateRe.test(text.trim());
    }) || contextItems[0] || null;
    const heroIdx = heroItem ? contextItems.indexOf(heroItem) : 0;
    const heroText = heroItem ? (typeof heroItem === 'string' ? heroItem : heroItem.text || '') : '';
    const heroCause = heroItem?.causalMechanism || null;
    const heroImpact = heroItem?.estimatedImpact || null;
    const additionalFindings = contextItems.filter((_, i) => i !== heroIdx);

    // Compute total recoverable points
    const remPathBlock = getBlock('remediationPath');
    const totalRecoverable = (remPathBlock?.items || [])
      .reduce((sum, item) => sum + (item.estimatedGain || 0), 0);

    // MetaStrip stats
    const metaBlock = getBlock('metaStrip');
    const metaStats = metaBlock?.items || [];

    // All context items are diagnosis findings (no prescriptive content)
    const allFindings = contextItems.filter(item => {
      const text = typeof item === 'string' ? item : item?.text || '';
      return text.length > 0 && !scoreRestateRe.test(text.trim());
    });

    const weakSkillsList = diagnosticReport?.skillAnalysis?.weakSkills || [];

    // ─── Deduplicate and group weak skills by domain ───
    // Two-pass dedup: first build canonical keys, then filter duplicates.
    // Canonical key: lowercase, strip non-alphanumeric, strip trailing 's'.
    // Catches: "Systems of Equations" = "systems-of-equations", "Percents" = "percent".
    const canonicalKey = (s) => {
      const base = (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return base.endsWith('s') && base.length > 3 ? base.slice(0, -1) : base;
    };
    const domainNameIds = new Set(['algebra', 'advancedmath', 'geometry', 'problemsolving', 'problemsolvinganddataanalysis', 'geometryandtrigonometry']);

    // Pass 1: collect all canonical keys so we can detect generic-prefix overlaps
    const allKeys = weakSkillsList.map(ws => canonicalKey(ws.skillId || ws.name));

    // Pass 2: deduplicate + filter
    const seenSkills = new Set();
    const domainGroups = {};
    weakSkillsList.forEach((ws, idx) => {
      const key = allKeys[idx];
      if (!key || seenSkills.has(key)) return;
      // Skip entries where the skill is just the domain name itself
      if (domainNameIds.has(key)) return;
      // Skip generic single-word skills that are a prefix of a more specific skill
      // e.g., "circle" when "circleequation" exists — keep the more specific one
      if (key.length <= 10) {
        const hasMoreSpecific = allKeys.some(other => other !== key && other.startsWith(key) && other.length > key.length + 2);
        if (hasMoreSpecific) return;
      }
      seenSkills.add(key);
      const domainId = ws.domain || 'algebra';
      if (!domainGroups[domainId]) {
        const info = getDomainInfo(domainId);
        domainGroups[domainId] = {
          id: domainId,
          name: info?.name || domainId,
          color: info?.color || '#94a3b8',
          skills: [],
          avgPct: 0,
        };
      }
      const pct = ws.total > 0 ? Math.round((ws.correct / ws.total) * 100) : 0;
      domainGroups[domainId].skills.push({ ...ws, pct });
    });
    Object.values(domainGroups).forEach(g => {
      g.avgPct = g.skills.length > 0
        ? Math.round(g.skills.reduce((s, sk) => s + sk.pct, 0) / g.skills.length)
        : 0;
      g.skills.sort((a, b) => a.pct - b.pct || a.name.localeCompare(b.name));
    });
    const sortedDomains = Object.values(domainGroups).sort((a, b) => a.avgPct - b.avgPct);

    let sectionNum = 0;

    // Compute our 4 custom metrics
    const targetScore = user?.targetScore || DEFAULT_GOAL_SCORE;
    // Scale-aware: composite full-length results render against /1600; the goal
    // compares only when it's on the same scale as the score (composite goal +
    // composite result, or legacy section goal + section result).
    const scaleMax = isMultiSection ? 1600 : 800;
    const targetComparable = isCompositeScaleTarget(targetScore) === isMultiSection;
    const gapToTarget = targetComparable ? Math.max(0, targetScore - satScore) : 0;

    const qDetails = diagnosticData?.questionDetails || {};
    const qEntries = Object.entries(qDetails);
    const easyMissed = qEntries.filter(([, q]) => q.difficulty === 'easy' && !q.isCorrect).length;
    const easyWinsPts = easyMissed * 10;
    
    const weakestDomName = sortedDomains.length > 0 ? sortedDomains[0].name : 'Algebra';

    const testHistory = practiceTestResults?.[test.id];
    const attempts = (testHistory?.attempts || []).filter(a => !isBlankAttempt(a));
    const firstAttemptScore = attempts.length > 0 ? attempts[0].scaledScore : satScore;
    const recentTrend = satScore - firstAttemptScore;

    return (
      <div style={{ padding: '0 0 48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* ═══════ SCORE HEADER (Acely Style, Differentiated) ═══════ */}
        <div className="acely-projected-card diag-hero-card" style={{ marginBottom: '0.5rem' }}>
          <div className="acely-projected-graph diag-hero-graph" style={{ opacity: 1, paddingLeft: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '700', color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '700', color: 'var(--color-slate-500)', fontVariantNumeric: 'tabular-nums' }}>{satScore} / {scaleMax}</span>
              </div>
              <div style={{ height: '8px', background: 'var(--color-slate-100)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (satScore/scaleMax)*100)}%`, height: '100%', background: 'var(--color-brand-primary)', borderRadius: '9999px', transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)' }} />
              </div>

              {targetComparable && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '700', color: 'var(--color-slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Target</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '700', color: 'var(--color-slate-500)', fontVariantNumeric: 'tabular-nums' }}>{satScore + gapToTarget} / {scaleMax}</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--color-slate-100)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min(100, ((satScore + gapToTarget)/scaleMax)*100)}%`, height: '100%', background: 'var(--color-slate-400)', borderRadius: '9999px' }} />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="acely-projected-info">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
              {meta.hasAI && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', background: 'var(--color-brand-primary-light)', border: '1px solid var(--color-brand-primary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-brand-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: '800', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-brand-primary)' }}>AI Analysis</span>
                </div>
              )}
            </div>
            <div className="acely-metric-value">{satScore}</div>
            <div className="acely-metric-label" style={{ fontWeight: 500 }}>Diagnostic Score</div>
          </div>
        </div>

        {/* ═══════ KEY METRICS (Acely Style, Differentiated) ═══════ */}
        <div className="acely-performance-grid">
          <div className="acely-metric-card acely-accuracy-card">
            <div className="acely-metric-label">Points to Target</div>
            <div className="acely-metric-value">{targetComparable ? gapToTarget : '—'}</div>
            <div className="acely-metric-lines">
              <div className="line"></div>
              <div className="line short"></div>
            </div>
          </div>
          <div className="acely-metric-stack">
            <div className="diag-metric-dial-card">
              <div className="diag-metric-dial-info">
                <div className="acely-metric-value" style={{ color: 'var(--color-brand-neon)' }}>+{easyWinsPts}</div>
                <div className="acely-metric-label" style={{ color: 'white' }}>Easy Wins</div>
              </div>
              <div className="diag-metric-dial-chart">
                <div style={{ position: 'relative', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6" />
                    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--color-brand-neon)" strokeWidth="6" strokeDasharray="163" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 30 30)" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-neon)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="diag-metric-bar-card">
              <div className="diag-metric-bar-info">
                <div className="acely-metric-value" style={{ fontSize: '1.5rem', color: 'white', lineHeight: 1.2, paddingRight: '1rem', wordBreak: 'break-word' }}>
                  {weakestDomName}
                </div>
                <div className="acely-metric-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Biggest Lever</div>
              </div>
              <div className="diag-metric-bar-chart">
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '40px', background: 'rgba(0,0,0,0.1)', padding: '10px', borderRadius: '12px' }}>
                  <div style={{ width: '8px', height: '16px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
                  <div style={{ width: '8px', height: '28px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
                  <div style={{ width: '8px', height: '12px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
                  <div style={{ width: '8px', height: '36px', background: '#fff', borderRadius: '2px', boxShadow: '0 0 8px rgba(255,255,255,0.8)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ ① YOUR DIAGNOSIS (via renderBlock) ═══════ */}
        {isGenerating ? (
          <div className="diag-story-section">
            <div style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', border: '3px solid rgba(59, 130, 246, 0.15)', borderTopColor: 'var(--color-brand-primary)', borderRadius: '50%', animation: 'spin 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite' }} />
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '16px', fontWeight: '600', color: 'var(--color-slate-700)' }}>Analyzing your test...</div>
            </div>
          </div>
        ) : hasFailed && allFindings.length === 0 ? (
          <div className="diag-story-section">
            <div style={{ padding: '24px', background: 'var(--color-warning-50)', borderRadius: '8px', border: '1px solid var(--color-warning-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-700)' }}>AI analysis unavailable. Your score data is shown above.</div>
              {onRetryAiDiagnostic && <button onClick={onRetryAiDiagnostic} style={{ fontFamily: 'var(--font-ui)', padding: '8px 16px', borderRadius: '6px', border: 'none', background: 'var(--color-warning-600)', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Retry</button>}
            </div>
          </div>
        ) : getBlock('context') ? (
          <div className="diag-story-section">
            <SectionHeader number={++sectionNum} title="Your Diagnosis" />
            {renderBlock(getBlock('context'), 0)}
          </div>
        ) : null}

        {/* ═══════ ② SKILL GAPS BY DOMAIN (Cards) ═══════ */}
        {sortedDomains.length > 0 && (() => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <SectionHeader number={++sectionNum} title="Skill Gaps by Domain" />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {sortedDomains.map(group => {
                  const displaySkills = group.skills.slice(0, 5);
                  const overflow = group.skills.length - 5;
                  
                  return (
                    <div key={group.id} style={{ 
                      background: '#ffffff', 
                      borderRadius: 'var(--radius-xl)', 
                      padding: '24px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.02), 0 10px 15px rgba(0,0,0,0.03)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      display: 'flex', flexDirection: 'column', gap: '24px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: group.color }} />
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-slate-900)', letterSpacing: '-0.01em' }}>{group.name}</div>
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700',
                          color: 'var(--color-brand-green-text)',
                          background: 'var(--color-brand-green-soft)',
                          padding: '6px 12px', borderRadius: '9999px',
                        }}>
                          {group.avgPct}% Mastery
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {displaySkills.length > 0 ? displaySkills.map((sk, si) => {
                          // Ensure even a 0% score has a tiny visible sliver so it doesn't look completely empty/broken
                          const visualPct = Math.max(sk.pct, 3);
                          return (
                            <div key={si} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600', color: 'var(--color-slate-800)' }}>
                                  {formatSkillName(sk.name)}
                                </span>
                                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '700', color: 'var(--color-brand-primary)', fontVariantNumeric: 'tabular-nums' }}>
                                  {sk.correct} / {sk.total}
                                </span>
                              </div>
                              <div style={{ height: '8px', background: 'var(--color-slate-100)', borderRadius: '9999px', overflow: 'hidden' }}>
                                <div style={{ width: `${visualPct}%`, height: '100%', background: 'var(--color-brand-primary)', borderRadius: '9999px' }} />
                              </div>
                            </div>
                          );
                        }) : (
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: 'var(--color-slate-500)', textAlign: 'center', padding: '16px 0', background: 'var(--color-slate-50)', borderRadius: '12px', border: '1px dashed var(--color-slate-200)' }}>
                            No weak skills identified in this domain.
                          </div>
                        )}
                        {overflow > 0 && (
                          <div style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: '600', color: 'var(--color-slate-400)', textAlign: 'center', paddingTop: '8px' }}>
                            + {overflow} more skill{overflow !== 1 ? 's' : ''} tested
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* ═══════ ③ HOW YOU TOOK THE TEST (via renderBlock) ═══════ */}
        {getBlock('behaviorAmplifier') && getBlock('behaviorAmplifier').items.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionHeader number={++sectionNum} title="How You Took the Test" />
            {renderBlock(getBlock('behaviorAmplifier'), 2)}
          </div>
        )}

        {/* ═══════ ④ WHAT TO FOCUS ON NEXT (via renderBlock) ═══════ */}
        {getBlock('nextMove') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SectionHeader number={++sectionNum} title="What to Focus on Next" />
            {renderBlock(getBlock('nextMove'), 3)}
          </div>
        )}

        {/* ═══════ SUPPORTING DATA (collapsed) ═══════ */}
        {hasEvidence && (
          <div style={{ marginTop: '16px' }}>
            <CollapsibleSection
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>}
              iconBg="var(--color-slate-100)" iconColor="var(--color-slate-600)"
              label="View Supporting Data" expanded={showEvidenceDetail}
              onToggle={() => setShowEvidenceDetail(!showEvidenceDetail)}
            >
              {renderBlock(getBlock('evidence'), 4)}
            </CollapsibleSection>
          </div>
        )}

        {/* ═══════ FALLBACK ACTIONS (only if nextMove block is missing) ═══════ */}
        {!getBlock('nextMove') && (
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--color-slate-200)' }}>
            {onGoToStudyPlan && (
              <button onClick={onGoToStudyPlan} style={{
                fontFamily: 'var(--font-ui)', padding: '12px 24px', borderRadius: '9999px', border: 'none',
                background: 'var(--color-brand-primary)', color: '#fff',
                fontSize: '14px', fontWeight: '700', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.2s ease', boxShadow: 'var(--shadow-sm)'
              }}>
                View Study Plan <ArrowRightIcon size={14} />
              </button>
            )}
            <button onClick={onReview} style={{
              fontFamily: 'var(--font-ui)', padding: '12px 24px', background: '#fff', color: 'var(--color-slate-700)',
              border: '1px solid var(--color-slate-200)', borderRadius: '9999px', fontSize: '14px', fontWeight: '700', cursor: 'pointer',
              transition: 'all 0.2s ease', boxShadow: 'var(--shadow-sm)'
            }}>
              Review Answers
            </button>
          </div>
        )}
      </div>
    );
  };

  // Save-status banner (silent data-loss fix). Only the post-completion
  // PracticeTest mount threads saveStatus/onRetrySave; the Firestore-sourced
  // mounts (App viewingResults, past-test review) leave the props null so
  // nothing ever renders there. Visual aesthetic mirrors the Toaster.css
  // border-left variants.
  const renderSaveStatusBanner = () => {
    const visible =
      saveStatus === 'failed' ||
      (hadSaveFailure && (saveStatus === 'saving' || saveStatus === 'saved'));
    if (!visible) return null;

    const accent = saveStatus === 'failed'
      ? { bg: colors.semantic.errorBg, border: colors.semantic.error }
      : saveStatus === 'saving'
        ? { bg: colors.semantic.warningBg, border: colors.semantic.warning }
        : { bg: colors.semantic.successBg, border: colors.semantic.success };

    const containerStyle = {
      background: accent.bg,
      borderLeft: `3px solid ${accent.border}`,
      borderRadius: '12px',
      padding: '14px 16px',
      fontFamily: 'var(--font-ui)',
      fontSize: '14px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      justifyContent: 'space-between',
    };

    const retryButtonStyle = (disabled) => ({
      padding: '10px 16px',
      minHeight: '44px',
      borderRadius: '10px',
      border: '1px solid var(--color-slate-200)',
      background: colors.surface.white,
      fontFamily: 'var(--font-ui)',
      fontSize: '14px',
      fontWeight: '600',
      color: colors.text.primary,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      whiteSpace: 'nowrap',
      flexShrink: 0,
    });

    if (saveStatus === 'failed') {
      return (
        <div role="alert" style={containerStyle}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: '700', color: colors.text.primary, marginBottom: '2px' }}>
              Your results couldn't be saved to your account.
            </div>
            <div style={{ color: colors.text.secondary }}>
              They're stored safely on this device — we'll retry automatically next time you open SEVA, or you can retry now.
            </div>
          </div>
          {onRetrySave && (
            <button type="button" onClick={onRetrySave} style={retryButtonStyle(false)}>
              Retry save
            </button>
          )}
        </div>
      );
    }

    if (saveStatus === 'saving') {
      return (
        <div role="alert" style={containerStyle}>
          <div style={{ fontWeight: '600', color: colors.text.primary }}>
            Saving your results...
          </div>
          <button type="button" disabled style={retryButtonStyle(true)}>
            Retry save
          </button>
        </div>
      );
    }

    // saved after an earlier failure — recovery confirmation, no auto-dismiss.
    return (
      <div role="status" style={containerStyle}>
        <div style={{ fontWeight: '600', color: colors.text.primary }}>
          Your results are saved to your account.
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 0 40px', fontFamily: 'var(--font-ui)' }}>
      {/* Back navigation */}
      <div style={{ paddingTop: '16px', marginBottom: '4px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 14px', margin: '-8px -14px',
            background: 'none', border: 'none', borderRadius: '10px',
            fontFamily: 'var(--font-ui)', fontSize: '14px', fontWeight: '600',
            color: colors.text.secondary, cursor: 'pointer',
            transition: 'color 0.2s ease, background 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = colors.text.primary; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = colors.text.secondary; e.currentTarget.style.background = 'none'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
          Back to Tests
        </button>
      </div>

      {renderSaveStatusBanner()}

      {/* Header Area — identity stamp MERGED into the page's single h1
          (made-for-me item 11): the student's face + possessive on the
          highest-emotion screen, emotion-NEUTRAL by design, always paired
          with a visible forward action (the diagnostic tab) so a bad score
          never dead-ends. */}
      <div style={{
        marginBottom: '24px',
        paddingTop: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
          <Avatar user={user} size={AVATAR_SIZES.md} />
          <div style={{ minWidth: 0 }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: colors.text.primary,
              letterSpacing: '-0.04em',
              marginBottom: '4px'
            }}>
              {user?.firstName ? `${user.firstName}'s results — ${test.title}` : test.title}
            </h1>
            <div style={{ fontSize: '15px', color: colors.text.secondary, fontWeight: '500' }}>
              Completed on {new Date(test.completedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </div>
        {activeTab !== 'diagnostic' && (
          <button
            type="button"
            onClick={() => setActiveTab('diagnostic')}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '10px 16px', minHeight: '44px',
              borderRadius: '10px', border: '1px solid var(--color-slate-200)',
              background: '#ffffff', cursor: 'pointer',
              fontSize: '14px', fontWeight: '600', color: colors.text.primary,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            See why <ArrowRightIcon size={15} />
          </button>
        )}
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        background: 'var(--color-slate-100)',
        padding: '6px',
        borderRadius: '9999px',
        marginBottom: '32px',
        width: 'fit-content',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        gap: '4px'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 24px',
              background: activeTab === tab.id ? '#ffffff' : 'transparent',
              border: 'none',
              borderRadius: '9999px',
              color: activeTab === tab.id ? 'var(--color-slate-900)' : 'var(--color-slate-600)',
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              boxShadow: activeTab === tab.id ? 'var(--shadow-sm)' : 'none'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div>
        {activeTab === 'summary'
          ? renderSummaryView()
          : activeTab === 'diagnostic'
          ? <div className={`diagnostic-ui${diagEntrance ? ' diag-entrance' : ''}`}>{renderDiagnosticView()}</div>
          : renderModuleSummary(parseInt(activeTab.split('-')[1]))
        }
      </div>
    </div>
  );
};

export default TestResults;
