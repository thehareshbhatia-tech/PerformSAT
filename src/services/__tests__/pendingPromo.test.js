import {
  stashPendingPromoCode,
  readPendingPromoCode,
  clearPendingPromoCode,
} from '../pendingPromo';

describe('pendingPromo shuttle', () => {
  beforeEach(() => window.localStorage.clear());

  it('reads back a stashed code (trimmed)', () => {
    stashPendingPromoCode('  HARESHRAJBHATIA1 ');
    expect(readPendingPromoCode()).toBe('HARESHRAJBHATIA1');
  });

  it('returns null when nothing is stashed', () => {
    expect(readPendingPromoCode()).toBeNull();
  });

  it('does not stash empty / whitespace / nullish input', () => {
    stashPendingPromoCode('');
    stashPendingPromoCode('   ');
    stashPendingPromoCode(null);
    stashPendingPromoCode(undefined);
    expect(readPendingPromoCode()).toBeNull();
  });

  it('clear removes the stashed code', () => {
    stashPendingPromoCode('CODE123');
    clearPendingPromoCode();
    expect(readPendingPromoCode()).toBeNull();
  });

  it('a whitespace-only stored value reads back as null (not a phantom code)', () => {
    window.localStorage.setItem('seva:pendingPromoCode', '   ');
    expect(readPendingPromoCode()).toBeNull();
  });
});
