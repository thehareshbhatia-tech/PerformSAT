import { getPacingStruggle } from '../pacingStruggle';

describe('getPacingStruggle', () => {
  it('returns not-struggling for null / malformed plans', () => {
    expect(getPacingStruggle(null)).toEqual({ struggling: false, reason: null });
    expect(getPacingStruggle({})).toEqual({ struggling: false, reason: null });
    expect(getPacingStruggle({ weeks: null })).toEqual({ struggling: false, reason: null });
    expect(getPacingStruggle({ weeks: [{}] })).toEqual({ struggling: false, reason: null });
  });

  it('detects the Pacing Reset strategy activity and surfaces its subtitle', () => {
    const plan = {
      weeks: [
        { activities: [{ type: 'practice', title: 'Linear equations' }] },
        {
          activities: [
            { type: 'strategy', title: 'Pacing Reset', subtitle: 'The clock cost you 4 questions last test' },
          ],
        },
      ],
    };
    expect(getPacingStruggle(plan)).toEqual({
      struggling: true,
      reason: 'The clock cost you 4 questions last test',
    });
  });

  it('matches on activityType strategyDrill regardless of casing in title', () => {
    const plan = {
      weeks: [{ activities: [{ activityType: 'strategyDrill', title: 'pacing reset', subtitle: 'faded' }] }],
    };
    expect(getPacingStruggle(plan).struggling).toBe(true);
  });

  it('does NOT match a non-pacing strategy activity', () => {
    const plan = {
      weeks: [{ activities: [{ type: 'strategy', title: 'Stop the Avoidable Misses', subtitle: 'careless' }] }],
    };
    expect(getPacingStruggle(plan)).toEqual({ struggling: false, reason: null });
  });

  it('tolerates a missing subtitle', () => {
    const plan = { weeks: [{ activities: [{ type: 'strategy', title: 'Pacing Reset' }] }] };
    expect(getPacingStruggle(plan)).toEqual({ struggling: true, reason: null });
  });
});
