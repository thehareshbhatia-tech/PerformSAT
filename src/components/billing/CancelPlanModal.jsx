/**
 * CancelPlanModal — the ONE in-app step between "Cancel plan" and Stripe's
 * hosted cancel flow.
 *
 * It states what cancelling changes (and when), then hands off. Stripe's page
 * shows the account's one-time retention offer, if it has one, before the
 * cancellation is confirmed — so this modal never quotes a discount it cannot
 * guarantee. "Continue to cancel" is always enabled and always visible: the
 * step exists to inform, not to obstruct.
 */
import React, { useState } from 'react';
import { colors, typography, spacing } from '../../design/tokens';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { parseLocalDate } from '../../utils/localDate';

const DAY_MS = 24 * 60 * 60 * 1000;

const formatLongDate = (ms) =>
  new Date(ms).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });

/**
 * Whole days from today until the student's next SAT date.
 *
 * @param {string|null|undefined} testDate 'YYYY-MM-DD' (users/{uid}.testDate)
 * @param {number} [nowMs]
 * @returns {number|null} days until the test, or null when unknown / past
 */
export function daysUntilTest(testDate, nowMs = Date.now()) {
  if (!testDate) return null;
  const d = parseLocalDate(testDate);
  if (!d || Number.isNaN(d.getTime())) return null;
  const today = new Date(nowMs);
  today.setHours(0, 0, 0, 0);
  const days = Math.round((d.getTime() - today.getTime()) / DAY_MS);
  return days >= 0 ? days : null;
}

/**
 * The "what changes" sentence for the account's current phase.
 *
 * @param {{phase: string, endsAtMs?: number|null}} entitlement
 * @returns {string}
 */
export function cancelConsequenceCopy(entitlement) {
  const until = entitlement?.endsAtMs ? formatLongDate(entitlement.endsAtMs) : null;
  if (entitlement?.phase === 'trial') {
    return until
      ? `Cancel during the trial and the card is never charged. Access continues until ${until}.`
      : 'Cancel during the trial and the card is never charged.';
  }
  return until
    ? `The plan stays active until ${until} and does not renew. After that, practice tests, drills, and the AI tutor lock. Scores and history stay viewable.`
    : 'The plan does not renew. When the paid period ends, practice tests, drills, and the AI tutor lock. Scores and history stay viewable.';
}

const paragraph = {
  fontSize: typography.sizes.sm,
  color: colors.text.primary,
  lineHeight: 1.5,
  margin: 0,
};

const CancelPlanModal = ({ isOpen, onClose, onContinue, entitlement, testDate }) => {
  const [leaving, setLeaving] = useState(false);
  const days = daysUntilTest(testDate);

  const handleContinue = async () => {
    setLeaving(true);
    try {
      await onContinue();
    } finally {
      // A successful call navigates away; this only runs to completion when
      // the portal could not open, and the button must be usable again.
      setLeaving(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Before you cancel"
      maxWidth="440px"
      disabled={leaving}
      footer={
        // Equal-weight buttons: side by side when they fit, stacked full-width
        // on a phone. Neither choice is visually buried.
        <div style={{ display: 'flex', gap: spacing.sm, flexWrap: 'wrap', width: '100%' }}>
          <Button onClick={handleContinue} variant="secondary" loading={leaving} style={{ flex: '1 1 180px' }}>
            Continue to cancel
          </Button>
          <Button onClick={onClose} variant="primary" disabled={leaving} style={{ flex: '1 1 180px' }}>
            Keep my plan
          </Button>
        </div>
      }
    >
      <p style={paragraph}>{cancelConsequenceCopy(entitlement)}</p>
      {days != null && (
        <p style={{ ...paragraph, marginTop: spacing.md, fontWeight: typography.weights.semibold }}>
          {days === 0 ? 'The SAT is today.' : `The SAT is ${days} day${days === 1 ? '' : 's'} away.`}
        </p>
      )}
      <p style={{ ...paragraph, marginTop: spacing.md, color: colors.text.muted }}>
        Cancellation is confirmed on the secure billing page. Any discount available to this account is shown there first.
      </p>
    </Modal>
  );
};

export default CancelPlanModal;
