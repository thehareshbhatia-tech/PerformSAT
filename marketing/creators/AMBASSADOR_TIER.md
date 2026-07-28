# Ambassador tier — commission-only creator army (designed 2026-07-28)

## The observation (founder, verified)

Accounts like `@studyywithbellaa` (IG, ~5K followers, 150 posts, bio literally
"Growing Hue Prep") are purpose-built studygram accounts attached to ONE SAT
app, posting near-daily "study tips + app plug" content. Verified it's an army,
not a one-off: `@nellylyyyy`, `@studyxavier`, and multiple distinct IG accounts
post templated Hue Prep promo under #hueprep. Hue Prep (hueprep.com — adaptive
SAT prep w/ AI tutoring, a direct competitor) has NO public creators page:
recruiting happens in DMs. This is the Gauth/Knowt-style ambassador playbook —
volume creators on conversion economics, not per-video fees.

## Why this doesn't contradict the Cal AI anchors

Our research notes say commission-only offers get 17-26% acceptance from
ESTABLISHED creators — true, and it's why Iksha got base pay. Ambassadors are a
different market: nano accounts (0-20K) often created FOR the program by
students who want a portfolio, an income experiment, or a "brand partner" line
in their bio. Zero fixed cost to us, so acceptance rate barely matters — ten
yeses from thirty DMs is a win because a dead ambassador costs $0.

## Two tiers from here on

| | Partner (existing — Iksha) | Ambassador (new) |
|---|---|---|
| Who | Established SAT/study creators, 10K+ | Studygram/studytok nano accounts 0-20K, incl. accounts built from zero |
| Base pay | $50/video + view bonus | **None** |
| Commission | $70/annual, $15 × first 3 monthly invoices | Same |
| Milestone bonuses | — | $50 at 5 paid signups, $150 at 15, $400 at 40 (cumulative) |
| Audience offer | 20% off, 3 months (code — partner tier) | 20% off 3 months, AUTO-APPLIED via their link |
| Cadence expectation | 5 videos over 4-6 wks | 3-5 posts/week, their own account voice |
| Deal channel | Email, negotiated | DM + short form, standardized — no negotiation |

FOUNDER DECISION 2026-07-28: ambassadors run on LINKS, not codes. Each gets
`sevaprep.com/r/<slug>` (bio + captions); the link auto-applies the 20%
discount at checkout and attribution rides subscription metadata (see README
"Link-tier attribution"). Setup per ambassador = `seedCreatorRef.mjs --slug
<slug>` + roster entry with `linkSlug`. `payouts.mjs report` covers both
tiers. Milestone bonuses = manual line in `paidToDateUsd` notes for now.

## The offer DM (send from @seva.prep)

> hey! love your study content — we're building SEVA (sevaprep.com), an SAT
> app that tells you WHY you missed each question. we're taking on a small
> group of creator partners: you get the app free, a personal link that gives your
> audience 20% off, and we pay $70 per annual signup + monthly commissions + cash
> milestones. no posting quotas, no scripts — your account, your voice. want
> the details?

## Content kit (so volume is cheap for them)

- Our carousel PNGs (`marketing/carousel-generator/published/`) — free reposts.
- 10 hook lines per week (from the challenge-carousel captions).
- Screen-record guide: 15-30s of the diagnosis screen / "why you missed it"
  panel / a figure-bearing explanation — the product IS the b-roll.
- Rules: FTC disclosure (#ad or "SEVA partner") on every promo post; no
  invented score-gain claims (our public stats language only: 161 question
  types COVERED, etc.); link in bio + pinned comment.

## Recruiting recipe (week 1)

1. 20-30 DMs to accounts matching the archetype: search IG/TikTok for
   `studygram`, `studytok`, `SAT study tips`, `study with me` accounts, 500-
   20K followers, US, posting ≥3×/week, student-age. Prioritize accounts <6
   months old (they're building and want a mission).
2. Poach angle: accounts already posting for competitors (@nellylyyyy,
   @studyxavier, @studyywithbellaa) know the job — worth 3 DMs; commissions
   compete on OUR conversion, and our $85/mo price point pays more per signup
   than a cheaper app's rev share.
3. One open-call post on @seva.prep: "we're picking 10 creator partners for
   the August SAT push — DM 'PARTNER'."
4. Applications → roster entry (`status: "ambassador-applied"`); ref slug
   seeded on acceptance AFTER the discount E2E passes (README checklist gates).

## Success metrics (evaluate at 30 days)

- ≥8 active ambassadors posting ≥3×/week
- ≥1 link-attributed signup per active ambassador per week by week 4
- CAC via ambassadors < $25/paid signup (vs $70-85 partner-tier bounty-only)
- Kill criteria: <3 active after 30 days → archetype doesn't fit our price
  point; fall back to partner tier only.

## Competitor note

Hue Prep warrants a product teardown separately: adaptive daily prep + live
tutors + educator channel, growing via this exact creator engine ("Claude +
Hueprep = 1600 SATs" is one of their creators' reels).
