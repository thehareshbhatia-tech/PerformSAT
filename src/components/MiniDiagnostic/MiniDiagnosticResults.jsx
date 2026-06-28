/**
 * MiniDiagnosticResults — the "Your starting point" screen shown the moment the
 * 24-question check-in finishes, before the student lands on their plan.
 *
 * Its whole job is to make the diagnosis LEGIBLE — to answer "exactly what does
 * this student need?" in one screen:
 *   - where you stand (score band + the goal-gap headline),
 *   - the single most important finding (key insight),
 *   - WHY you missed what you missed (error-type breakdown), and
 *   - where you're strong vs. where to focus, with an editorial "why" per area.
 *
 * All of this is already computed by the finish pipeline (finishMiniDiagnostic →
 * runDiagnostic → buildGroundTruthDiagnosis + generateStudyPlan) and was
 * previously discarded — the old results screen showed only the band + three
 * bare skill names. This surfaces it.
 *
 * Diagnostic, not prescriptive: it explains where you stand and why. The
 * "what to do" lives in the starter plan behind the CTA.
 */
import React, { useMemo } from 'react';
import { MathText } from '../MathText';
import { Button } from '../ui/Button';
import { colors, typography, spacing } from '../../design/tokens';
import { formatDiagnosticSentence, ERROR_TYPE_LABELS, ERROR_TYPE_COLORS } from '../../services/diagnosticEngine';

const cardStyle = {
  padding: spacing.xl,
  borderRadius: '16px',
  border: `1px solid ${colors.surface.grayDark}`,
  marginBottom: spacing.lg,
};
const sectionStyle = { marginBottom: spacing.lg };
const sectionHeadingStyle = {
  fontSize: typography.sizes.sm,
  fontWeight: typography.weights.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginBottom: spacing.sm,
};
const chip = (color) => ({
  fontSize: typography.sizes.xs,
  fontWeight: typography.weights.semibold,
  color,
  background: `${color}1a`,
  borderRadius: '6px',
  padding: '2px 8px',
  whiteSpace: 'nowrap',
});

/**
 * Pull the display model out of the finish-pipeline result. Pure; everything
 * here was already computed upstream — we only select and shape it.
 */
function buildView(result) {
  if (!result) return null;
  const gt = result.groundTruth || {};
  const dr = result.diagReport || {};
  const summary = (result.plan && result.plan.summary) || {};
  const ep = dr.errorPatterns || {};
  const counts = ep.counts || {};

  // Only the error types that actually occurred, biggest first.
  const errorBreakdown = Object.entries(counts)
    .filter(([, n]) => n > 0)
    .map(([type, n]) => ({
      type,
      count: n,
      label: ERROR_TYPE_LABELS[type] || type,
      color: ERROR_TYPE_COLORS[type] || colors.text.tertiary,
    }))
    .sort((a, b) => b.count - a.count);

  const focus = (gt.weaknesses || []).slice(0, 4).map((w) => ({
    name: w.skill || w.name || 'This skill',
    sentence: formatDiagnosticSentence(w),
    accuracy: typeof w.accuracy === 'number' ? Math.round(w.accuracy) : null,
  }));

  const strengths = (gt.strengths || []).slice(0, 3).map((s) => ({
    name: s.skill || s.name || 'This skill',
    accuracy: typeof s.accuracy === 'number' ? Math.round(s.accuracy) : null,
  }));

  return {
    band: result.scoreBand || null,
    headline: summary.headline || null,
    keyInsight: summary.keyInsight || null,
    totalWrong: ep.totalWrong || 0,
    errorBreakdown,
    strengths,
    focus,
  };
}

export default function MiniDiagnosticResults({ result, user, onViewPlan }) {
  const view = useMemo(() => buildView(result), [result]);
  if (!view) return null;
  const { band, headline, keyInsight, totalWrong, errorBreakdown, strengths, focus } = view;
  const maxCount = errorBreakdown[0]?.count || 1;

  return (
    <div style={{ marginTop: '5vh', maxWidth: '640px', width: '100%', animation: 'fadeInUp 400ms ease', paddingBottom: spacing.xl }}>
      <h1 style={{ fontSize: typography.sizes['3xl'], fontWeight: typography.weights.bold, color: colors.text.primary, marginBottom: spacing.xs, textAlign: 'center' }}>
        {user?.firstName ? `Your starting point, ${user.firstName}` : 'Your starting point'}
      </h1>
      <p style={{ fontSize: typography.sizes.base, color: colors.text.secondary, textAlign: 'center', margin: `0 auto ${spacing.xl}`, maxWidth: '52ch', lineHeight: 1.5 }}>
        Based on 24 questions — a first read your first full practice test will sharpen. Here&rsquo;s exactly what it found.
      </p>

      {/* Where you stand — score band + the goal-gap headline */}
      {band && (
        <div style={{ ...cardStyle, textAlign: 'center' }}>
          <div style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.secondary, marginBottom: spacing.xs }}>
            Estimated starting range
          </div>
          <div style={{ fontSize: '44px', fontWeight: typography.weights.bold, color: colors.accent.orange, lineHeight: 1.1 }}>
            {band.low}&ndash;{band.high}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: spacing.lg, marginTop: spacing.sm, fontSize: typography.sizes.sm, color: colors.text.secondary }}>
            <span>Reading &amp; Writing {band.rwBand.low}&ndash;{band.rwBand.high}</span>
            <span>Math {band.mathBand.low}&ndash;{band.mathBand.high}</span>
          </div>
          {headline && (
            <div style={{ marginTop: spacing.md, paddingTop: spacing.md, borderTop: `1px solid ${colors.surface.gray}`, fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary, lineHeight: 1.5 }}>
              <MathText>{headline}</MathText>
            </div>
          )}
        </div>
      )}

      {/* What matters most — the single most important finding */}
      {keyInsight && (
        <div style={{ ...cardStyle, background: colors.accent.orangeLight, border: `1px solid ${colors.accent.orange}33` }}>
          <div style={{ fontSize: typography.sizes.xs, fontWeight: typography.weights.semibold, color: colors.accent.orange, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: spacing.xs }}>
            What matters most
          </div>
          <div style={{ fontSize: typography.sizes.md, fontWeight: typography.weights.bold, color: colors.text.primary, marginBottom: '4px' }}>
            <MathText>{keyInsight.title}</MathText>
          </div>
          <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, lineHeight: 1.5, margin: 0 }}>
            <MathText>{keyInsight.message}</MathText>
          </p>
        </div>
      )}

      {/* Why you missed — error-type breakdown (the "why", visualized) */}
      {errorBreakdown.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ ...sectionHeadingStyle, color: colors.text.primary }}>Why you missed what you missed</h3>
          <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, margin: `0 0 ${spacing.sm}` }}>
            Your {totalWrong} {totalWrong === 1 ? 'miss' : 'misses'}, by cause:
          </p>
          {errorBreakdown.map((e) => (
            <div key={e.type} style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, marginBottom: '8px' }}>
              <span style={{ flex: '0 0 132px', fontSize: typography.sizes.sm, color: colors.text.primary }}>{e.label}</span>
              <span style={{ flex: 1, height: '8px', background: colors.surface.gray, borderRadius: '4px', overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: `${Math.round((e.count / maxCount) * 100)}%`, background: e.color, borderRadius: '4px' }} />
              </span>
              <span style={{ flex: '0 0 18px', fontSize: typography.sizes.sm, fontWeight: typography.weights.semibold, color: colors.text.primary, textAlign: 'right' }}>{e.count}</span>
            </div>
          ))}
        </div>
      )}

      {/* Looking strong */}
      {strengths.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ ...sectionHeadingStyle, color: colors.accent.green }}>Looking strong</h3>
          {strengths.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm, padding: `${spacing.xs} 0` }}>
              <span style={{ fontSize: typography.sizes.base, color: colors.text.primary }}>{s.name}</span>
              {s.accuracy != null && <span style={chip(colors.accent.green)}>{s.accuracy}%</span>}
            </div>
          ))}
        </div>
      )}

      {/* Where to focus first — each with the editorial "why" */}
      {focus.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={{ ...sectionHeadingStyle, color: colors.accent.purple }}>Where to focus first</h3>
          {focus.map((f, i) => (
            <div key={i} style={{ marginBottom: spacing.sm }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, marginBottom: '2px' }}>
                <span style={{ fontSize: typography.sizes.base, fontWeight: typography.weights.semibold, color: colors.text.primary }}>{f.name}</span>
                {f.accuracy != null && <span style={chip(colors.accent.purple)}>{f.accuracy}%</span>}
              </div>
              {f.sentence && (
                <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary, lineHeight: 1.45, margin: 0 }}>
                  <MathText>{f.sentence}</MathText>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <Button variant="primary" onClick={onViewPlan} style={{ width: '100%', fontSize: typography.sizes.md, marginTop: spacing.sm }}>
        See my starter plan
      </Button>
    </div>
  );
}
