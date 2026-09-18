/**
 * CancelPlanModal is the one in-app step before Stripe's hosted cancel flow.
 * The invariant pinned here is the legal/ethical one: the step informs, it
 * never obstructs — "Continue to cancel" is always rendered, always enabled,
 * and one click reaches the handler. The copy helpers are pinned so the modal
 * never promises a charge/lock date the entitlement doesn't carry.
 */
/* eslint-disable testing-library/no-unnecessary-act */
global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import CancelPlanModal, { daysUntilTest, cancelConsequenceCopy } from '../CancelPlanModal';

const NOW = new Date(2026, 8, 18, 15, 30).getTime(); // 2026-09-18, local

function mount(el) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(el); });
  return { container, unmount: () => { act(() => root.unmount()); container.remove(); } };
}

const findButton = (container, label) =>
  Array.from(container.querySelectorAll('button')).find((b) => b.textContent.trim() === label);

describe('daysUntilTest', () => {
  test('counts whole local days to the test date', () => {
    expect(daysUntilTest('2026-10-03', NOW)).toBe(15);
    expect(daysUntilTest('2026-09-18', NOW)).toBe(0);
  });

  test('unknown or past dates give null (no countdown line)', () => {
    expect(daysUntilTest(null, NOW)).toBeNull();
    expect(daysUntilTest('', NOW)).toBeNull();
    expect(daysUntilTest('not-a-date', NOW)).toBeNull();
    expect(daysUntilTest('2026-09-12', NOW)).toBeNull();
  });
});

describe('cancelConsequenceCopy', () => {
  const endsAtMs = new Date(2026, 9, 12).getTime();

  test('trial: never charged, access until the trial end', () => {
    const copy = cancelConsequenceCopy({ phase: 'trial', endsAtMs });
    expect(copy).toMatch(/never charged/);
    expect(copy).toMatch(/October 12, 2026/);
  });

  test('paid: states the end date and what locks vs. stays', () => {
    const copy = cancelConsequenceCopy({ phase: 'premium', endsAtMs });
    expect(copy).toMatch(/October 12, 2026/);
    expect(copy).toMatch(/does not renew/);
    expect(copy).toMatch(/Scores and history stay viewable/);
  });

  test('no period end on the doc: no invented date', () => {
    expect(cancelConsequenceCopy({ phase: 'premium', endsAtMs: null })).not.toMatch(/\d{4}/);
    expect(cancelConsequenceCopy({ phase: 'trial' })).not.toMatch(/\d{4}/);
  });
});

describe('CancelPlanModal', () => {
  test('both choices render; Continue to cancel is enabled and reaches the handler', async () => {
    const onContinue = jest.fn().mockResolvedValue('https://billing.example/flow');
    const onClose = jest.fn();
    const { container, unmount } = mount(
      <CancelPlanModal
        isOpen
        onClose={onClose}
        onContinue={onContinue}
        entitlement={{ phase: 'premium', endsAtMs: new Date(2026, 9, 12).getTime() }}
        testDate={null}
      />,
    );

    const cont = findButton(container, 'Continue to cancel');
    const keep = findButton(container, 'Keep my plan');
    expect(cont).toBeTruthy();
    expect(keep).toBeTruthy();
    expect(cont.disabled).toBe(false);

    await act(async () => { cont.click(); });
    expect(onContinue).toHaveBeenCalledTimes(1);
    expect(onClose).not.toHaveBeenCalled();

    act(() => { findButton(container, 'Keep my plan').click(); });
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  test('a failed portal open leaves Continue to cancel usable again', async () => {
    const onContinue = jest.fn().mockResolvedValue(undefined);
    const { container, unmount } = mount(
      <CancelPlanModal isOpen onClose={() => {}} onContinue={onContinue} entitlement={{ phase: 'trial' }} />,
    );
    await act(async () => { findButton(container, 'Continue to cancel').click(); });
    expect(findButton(container, 'Continue to cancel').disabled).toBe(false);
    unmount();
  });

  test('renders nothing while closed', () => {
    const { container, unmount } = mount(
      <CancelPlanModal isOpen={false} onClose={() => {}} onContinue={() => {}} entitlement={{ phase: 'premium' }} />,
    );
    expect(container.querySelector('[role="dialog"]')).toBeNull();
    unmount();
  });
});
