import React, { useState } from 'react';
import { colors, typography, spacing, radius, shadows, transitions } from '../design/tokens';
import { buttonStyles, cardStyles, inputStyles } from '../design/components';

const StatCard = ({ label, value, total }) => (
  <div
    aria-label={`${label}: ${value}${total ? ` of ${total}` : ''}`}
    style={{
      ...cardStyles.base,
      textAlign: 'center',
      padding: spacing.md,
    }}
  >
    <div style={{
      fontSize: typography.sizes['2xl'],
      fontWeight: typography.weights.bold,
      color: colors.text.primary,
      lineHeight: 1.2,
    }}>
      {value}{total ? <span style={{ fontSize: typography.sizes.md, color: colors.text.muted }}>/{total}</span> : ''}
    </div>
    <div style={{
      fontSize: typography.sizes.xs,
      color: colors.text.tertiary,
      marginTop: '4px',
      textTransform: 'uppercase',
      letterSpacing: typography.letterSpacing.wider,
    }}>
      {label}
    </div>
  </div>
);

const EditableField = ({ label, value, onSave, type = 'text', min, max }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(type === 'number' ? parseInt(draft) : draft);
      setEditing(false);
    } catch {
      // keep editing
    } finally {
      setSaving(false);
    }
  };

  if (editing) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.xs }}>
        <input
          type={type}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          min={min}
          max={max}
          style={{ ...inputStyles.base, height: '40px', fontSize: typography.sizes.sm, flex: 1 }}
          autoFocus
          aria-label={label}
        />
        <button onClick={handleSave} disabled={saving} style={{ ...buttonStyles.base, ...buttonStyles.primary, height: '40px', padding: `0 ${spacing.md}`, fontSize: typography.sizes.sm }}>
          {saving ? '...' : 'Save'}
        </button>
        <button onClick={() => { setEditing(false); setDraft(value || ''); }} style={{ ...buttonStyles.base, ...buttonStyles.ghost, height: '40px', padding: `0 ${spacing.sm}`, fontSize: typography.sizes.sm }}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontSize: typography.sizes.xs, color: colors.text.tertiary, marginBottom: '2px' }}>{label}</div>
        <div style={{ fontSize: typography.sizes.base, color: colors.text.primary, fontWeight: typography.weights.medium }}>
          {value || 'Not set'}
        </div>
      </div>
      <button
        onClick={() => setEditing(true)}
        style={{ ...buttonStyles.base, ...buttonStyles.tertiary, height: '32px', fontSize: typography.sizes.sm }}
      >
        Edit
      </button>
    </div>
  );
};

const Profile = ({
  user,
  onLogout,
  onUpdateTargetScore,
  onUpdateTestDate,
  onUpdateCurrentScore,
  onUpdateTargetSchools,
  completedLessons = {},
  practiceTestResults = {},
  skillProgress = {},
  allLessonsCount = 205,
}) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const testsCompleted = Object.keys(practiceTestResults).length;
  const lessonsCompleted = Object.keys(completedLessons).length;
  const skillsMastered = Object.values(skillProgress).filter(s => (s.correct / Math.max(s.attempts, 1)) >= 0.8).length;
  const totalSkills = 76;

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Not set';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: `${spacing.xl} ${spacing.lg}`,
      fontFamily: typography.fontFamily,
    }}>
      {/* Avatar & Name */}
      <div style={{ textAlign: 'center', marginBottom: spacing['2xl'] }}>
        <div
          role="img"
          aria-label={`Avatar for ${user?.firstName || user?.email || 'Student'}`}
          style={{
            width: '72px',
            height: '72px',
            borderRadius: radius.full,
            background: `linear-gradient(135deg, ${colors.accent.orange}, ${colors.accent.orangeHover})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '28px',
            fontWeight: typography.weights.bold,
            margin: '0 auto',
            marginBottom: spacing.md,
          }}
        >
          {(user?.firstName || user?.email || '?')[0].toUpperCase()}
        </div>
        <h1 style={{
          fontSize: typography.sizes.xl,
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
          marginBottom: '4px',
        }}>
          {user?.firstName || 'Student'}
        </h1>
        <p style={{
          fontSize: typography.sizes.sm,
          color: colors.text.tertiary,
        }}>
          {user?.email}
        </p>
      </div>

      {/* SAT Goals */}
      <div style={{ marginBottom: spacing.xl }}>
        <h2 style={{
          fontSize: typography.sizes.sm,
          fontWeight: typography.weights.semibold,
          color: colors.text.tertiary,
          textTransform: 'uppercase',
          letterSpacing: typography.letterSpacing.wider,
          marginBottom: spacing.md,
        }}>
          SAT Goals
        </h2>
        <div style={{ ...cardStyles.base, display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
          <EditableField
            label="Target Score"
            value={user?.targetScore}
            onSave={onUpdateTargetScore}
            type="number"
            min={200}
            max={800}
          />
          <div style={{ borderTop: `1px solid ${colors.surface.gray}` }} />
          <EditableField
            label="Current Score"
            value={user?.currentScore}
            onSave={onUpdateCurrentScore}
            type="number"
            min={200}
            max={800}
          />
          <div style={{ borderTop: `1px solid ${colors.surface.gray}` }} />
          <EditableField
            label="Test Date"
            value={formatDate(user?.testDate)}
            onSave={onUpdateTestDate}
            type="date"
          />
          <div style={{ borderTop: `1px solid ${colors.surface.gray}` }} />
          <EditableField
            label="Target Schools"
            value={user?.targetSchools?.map(s => s.name).join(', ')}
            onSave={(val) => onUpdateTargetSchools(val.split(',').map(s => ({ name: s.trim() })))}
          />
        </div>
      </div>

      {/* Progress Summary */}
      <div style={{ marginBottom: spacing.xl }}>
        <h2 style={{
          fontSize: typography.sizes.sm,
          fontWeight: typography.weights.semibold,
          color: colors.text.tertiary,
          textTransform: 'uppercase',
          letterSpacing: typography.letterSpacing.wider,
          marginBottom: spacing.md,
        }}>
          Progress
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.sm }}>
          <StatCard label="Tests Taken" value={testsCompleted} total={12} />
          <StatCard label="Lessons Done" value={lessonsCompleted} total={allLessonsCount} />
          <StatCard label="Skills Mastered" value={skillsMastered} total={totalSkills} />
          <StatCard label="Best Score" value={
            Object.values(practiceTestResults).reduce((best, t) => {
              const score = t.bestScaledScore || t.attempts?.[0]?.scaledScore || 0;
              return Math.max(best, score);
            }, 0) || '--'
          } />
        </div>
      </div>

      {/* Logout */}
      <div style={{ marginTop: spacing['2xl'] }}>
        {showLogoutConfirm ? (
          <div style={{
            ...cardStyles.base,
            textAlign: 'center',
            borderColor: colors.semantic.error,
          }}>
            <p style={{ fontSize: typography.sizes.base, color: colors.text.primary, marginBottom: spacing.md }}>
              Are you sure you want to log out?
            </p>
            <div style={{ display: 'flex', gap: spacing.sm, justifyContent: 'center' }}>
              <button onClick={() => setShowLogoutConfirm(false)} style={{ ...buttonStyles.base, ...buttonStyles.secondary }}>
                Cancel
              </button>
              <button onClick={onLogout} style={{ ...buttonStyles.base, ...buttonStyles.destructive }}>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLogoutConfirm(true)}
            style={{
              ...buttonStyles.base,
              ...buttonStyles.destructive,
              width: '100%',
              backgroundColor: 'transparent',
              color: colors.semantic.error,
              border: `1px solid ${colors.semantic.error}`,
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
