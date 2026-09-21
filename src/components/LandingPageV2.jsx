/**
 * LandingPageV2 — the public landing page behind `ff:landingV2` (`?lp=v2`).
 *
 * Rebuilt 2026-09-10 in the restrained, editorial register the founder asked
 * for ("simple yet powerful"), then re-cut 2026-09-20 against a measured
 * capture of acely.com: the page now TELLS THE STORY of the product. A navy
 * hero holds a readable crop of the real Home screen, and four numbered
 * chapters (diagnostic, diagnosis, plan, drill) each pair a short paragraph
 * with a large crop of the real screen it describes. Every product image is
 * a `Crop`: a window onto a full 1440x900 capture at a fixed scale, so the
 * UI text inside it is legible instead of a shrunken whole-screen thumbnail.
 * Brand tokens stay SEVA's (navy, orange for actions, green for gains); no
 * gradients, glows, parallax or scroll reveals. The only motion is the
 * score-gain marquee.
 *
 * Purely presentational: every behaviour (auth, the signup funnel, the login
 * modal, the billing flag) stays in LandingPage.jsx and arrives as props.
 */
import React, { useEffect, useState } from 'react';
import Wordmark from './ui/Wordmark';
import Mark from './ui/Mark';
import LandingTryIt from './LandingTryIt';
import { Avatar, svgBase } from './landingShared';
import { ROSTER, PRICING_INCLUDES } from '../data/landingRoster';
import './LandingPageV2.css';

const PU = process.env.PUBLIC_URL;

/* ── Line icons (1.75px stroke, no fills, no emoji) ─────────────────────── */
const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" {...svgBase}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const Check = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" {...svgBase}><path d="M20 6 9 17l-5-5" /></svg>
);
// Filled disc check for the chapter lists (Acely's checklist mark, in SEVA navy).
const CheckDisc = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor" /><path d="m7.5 12.3 3 3 6-6.4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Chevron = ({ size = 18 }) => (
  <svg className="lpv2-faq-chev" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" {...svgBase}><path d="m6 9 6 6 6-6" /></svg>
);

/* ── Section content ────────────────────────────────────────────────────── */
const INVENTORY = [
  { n: '2,200+', label: 'Hand-authored questions' },
  { n: '12', label: 'Full-length adaptive tests' },
  { n: '42', label: 'Textbook chapters' },
  { n: '161', label: 'Question types covered' },
];

/**
 * The story of the product, in the order a student lives it. Each chapter's
 * `crop` is a window onto a real 1440x900 capture in public/showcase/: `x`/`y`
 * is the top-left corner of the window in capture pixels and `s` the scale it
 * is shown at (`sm` = the phone override). The window bleeds off the tile's
 * right and bottom edges, so a crop never needs to "fit".
 */
const CHAPTERS = [
  { n: '01', tone: 'blue',
    title: 'You take a 40-question diagnostic.',
    body: 'It works like the real Digital SAT. The second module adapts to how you did on the first, and everything runs in the Bluebook layout with the same timer and tools. It takes about an hour.',
    points: ['Adaptive, like the official test', 'Bluebook layout, timer and tools', 'About half the length of a full SAT'],
    crop: { shot: 'test-runner', x: 740, y: 146, s: 0.9, sm: { x: 742, y: 146, s: 0.7 },
      alt: 'A SEVA test question in the Bluebook layout: the question, four answer choices with one selected, and Mark for Review' } },
  { n: '02', tone: 'peach',
    title: 'SEVA tells you why you missed.',
    body: 'A score tells you how many you got wrong. SEVA reads every miss and names what is behind it: the skill, the type of error, and how many points it is costing you.',
    points: ['Six error types, named in plain language', 'The points at stake in every weak area', 'Your easiest points listed first'],
    crop: { shot: 'diagnosis', x: 296, y: 150, s: 0.64, sm: { x: 300, y: 420, s: 0.7 },
      alt: 'A SEVA diagnosis: the diagnostic score against the target, points to target, easy wins, the biggest lever, and the biggest challenge named' } },
  { n: '03', tone: 'lime',
    title: 'You get a plan sized to your test date.',
    body: 'Your diagnosis becomes a day-by-day plan. Each session is about 20 minutes, names the skill it works on and tells you why it is there. After every session the plan re-sorts itself.',
    points: ['Built from your own misses', 'About 20 minutes a day', 'Updates after every session'],
    crop: { shot: 'study-plan', x: 266, y: 104, s: 0.72, sm: { x: 280, y: 268, s: 0.62 },
      alt: 'A SEVA study plan: the score now, the days to the test, and today’s session card with the skill it works on and a Start button' } },
  { n: '04', tone: 'lavender',
    title: 'You drill the exact question type, with a tutor beside you.',
    body: 'Drills pull the question types you miss, not the whole section. Get one wrong and you see the fast method, why each wrong choice is wrong, and a tutor that already knows which trap you fell for.',
    points: ['2,200+ hand-authored questions', 'The fast method on every explanation', 'A tutor that sees the answer you picked'],
    crop: { shot: 'drill', x: 300, y: 100, s: 0.8, sm: { x: 306, y: 100, s: 0.62 },
      alt: 'A SEVA drill after a wrong answer: the correct and chosen choices marked, and the fast method explained' },
    inset: { shot: 'drill', x: 1004, y: 118, w: 414, h: 124, s: 0.7,
      alt: 'The tutor panel: Let’s fix that one. You picked B, and I know the exact trap behind it.' } },
];

const HERO_CROP = { shot: 'dashboard', x: 284, y: 100, s: 0.74, sm: { x: 288, y: 100, s: 0.47 },
  alt: 'The SEVA home screen: overall accuracy, consistency and pacing tiles above an estimated score with Math and Reading & Writing ranges' };

/**
 * A window onto a full-screen product capture. The <img> is the whole
 * 1440x900 capture, absolutely positioned and scaled by CSS custom properties
 * so only the chosen region shows; the 2x WebP is picked on retina screens.
 *
 * @param {{ crop: { shot: string, x: number, y: number, s: number, w?: number, h?: number,
 *           sm?: { x?: number, y?: number, s?: number }, alt: string },
 *           className?: string, eager?: boolean }} props
 */
const Crop = ({ crop, className = '', eager = false }) => {
  const { shot, x, y, s, w, h, sm = {}, alt } = crop;
  const vars = {
    '--x': x, '--y': y, '--s': s,
    '--x-sm': sm.x ?? x, '--y-sm': sm.y ?? y, '--s-sm': sm.s ?? s,
    ...(w ? { '--w': w, '--h': h } : null),
  };
  const sizes = `${Math.round(1440 * s)}px`;
  return (
    <div className={`lpv2-crop ${className}`.trim()} style={vars}>
      <picture>
        <source type="image/webp" srcSet={`${PU}/showcase/${shot}.webp 1440w, ${PU}/showcase/${shot}@2x.webp 2880w`} sizes={sizes} />
        <img
          src={`${PU}/showcase/${shot}@2x.png`}
          srcSet={`${PU}/showcase/${shot}.png 1440w, ${PU}/showcase/${shot}@2x.png 2880w`}
          sizes={sizes}
          alt={alt}
          width="1440"
          height="900"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>
    </div>
  );
};

/** The six questions a visitor actually asks. Facts only: no guarantees, no crowd numbers. */
const faqItems = (billingLive, p) => [
  { q: 'What is SEVA?',
    a: 'SEVA is Digital SAT prep built around a diagnosis. You take an adaptive diagnostic, SEVA names the skills and error types costing you points, and it builds a plan and drills around them.' },
  { q: 'Is the practice like the real Digital SAT?',
    a: 'Yes. Practice tests are adaptive with two modules per section, in the Bluebook layout, with highlighting, cross-out and a pacing timer. The bank has 2,200+ hand-authored questions across every SAT domain.' },
  { q: 'How long is the diagnostic?',
    a: 'Forty questions, about half the length of a real SAT. Module 2 adapts to how you did on Module 1, like the official test.' },
  { q: 'What does a study session look like?',
    a: 'A plan card names the skill and why it is on your plan. You drill that question type, and every miss comes back with the fast method and the error type behind it.' },
  { q: 'Do I need to be aiming for a top score?',
    a: 'No. The plan starts wherever your diagnostic puts you and works on the cheapest points first.' },
  { q: 'What does it cost?',
    a: billingLive
      ? `Free for ${p.TRIAL_DAYS} days, then $${p.PRICE_MONTHLY} a month or $${p.PRICE_ANNUAL_TOTAL} a year. Cancel anytime before day ${p.TRIAL_DAYS} and you won't be charged.`
      : 'Nothing during early access. The full product, everything included.' },
];

/**
 * @param {{
 *   openAuth: (loginMode?: boolean, plan?: 'monthly'|'annual'|null) => void,
 *   billingLive: boolean,
 *   creatorRibbon?: boolean,
 *   pricing: { TRIAL_DAYS: number, PRICE_MONTHLY: number, PRICE_ANNUAL_MONTHLY: number,
 *              PRICE_ANNUAL_TOTAL: number, ANNUAL_SAVINGS: number },
 * }} props
 */
const LandingPageV2 = ({ openAuth, billingLive, creatorRibbon = false, pricing }) => {
  const { TRIAL_DAYS, PRICE_MONTHLY, PRICE_ANNUAL_MONTHLY, PRICE_ANNUAL_TOTAL, ANNUAL_SAVINGS } = pricing;
  const [navLine, setNavLine] = useState(false);

  const freeLine = billingLive
    ? `Free for ${TRIAL_DAYS} days. Cancel anytime before day ${TRIAL_DAYS} and you won't be charged.`
    : 'Free during early access. No credit card required.';

  // A 1px rule appears under the nav once the page has scrolled. No elevation
  // animation, no transform: one class toggle.
  useEffect(() => {
    const onScroll = () => setNavLine(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeItems = [...ROSTER, ...ROSTER];

  return (
    <div className="lpv2">
      {creatorRibbon && (
        <div className="lpv2-ribbon" role="status">
          Creator discount active: 20% off your first 3 months, applied automatically at checkout.
        </div>
      )}

      {/* ── 0. Announcement strip ─────────────────────────────────────── */}
      <div className="lpv2-strip">{freeLine}</div>

      {/* ── 1. Nav ────────────────────────────────────────────────────── */}
      <nav className={`lpv2-nav${navLine ? ' is-scrolled' : ''}`}>
        <div className="lpv2-wrap lpv2-nav-inner">
          <a href="/" className="lpv2-brand" aria-label="SEVA"><Wordmark size="lg" tone="dark" /></a>
          <div className="lpv2-nav-links">
            <a href="#how" onClick={scrollTo('how')}>How it works</a>
            <a href="#why" onClick={scrollTo('why')}>Try a question</a>
            <a href="#results" onClick={scrollTo('results')}>Results</a>
            <a href="#pricing" onClick={scrollTo('pricing')}>Pricing</a>
            <a href="#faq" onClick={scrollTo('faq')}>FAQ</a>
          </div>
          <div className="lpv2-nav-actions">
            <button type="button" className="lpv2-btn lpv2-btn-secondary lpv2-btn-sm lpv2-nav-login" onClick={() => openAuth(true)}>Log in</button>
            <button type="button" className="lpv2-btn lpv2-btn-primary lpv2-btn-sm" onClick={() => openAuth(false)}>Start free</button>
          </div>
        </div>
      </nav>

      {/* ── 2. Hero ───────────────────────────────────────────────────── */}
      <header className="lpv2-hero">
        <div className="lpv2-wrap lpv2-hero-grid">
          <div className="lpv2-hero-copy">
            <h1 className="lpv2-h1">Find out why you miss SAT questions. <span className="lpv2-h1-line">Then fix exactly that.</span></h1>
            <p className="lpv2-hero-sub">
              An adaptive diagnostic finds the skills costing you points. A plan and drills fix them, with the reason behind every miss.
            </p>
            <div className="lpv2-hero-cta">
              <button type="button" className="lpv2-btn lpv2-btn-primary lpv2-btn-lg" onClick={() => openAuth(false)}>
                Start free<ArrowRight size={20} />
              </button>
            </div>
            <p className="lpv2-hero-note"><Check size={15} />{freeLine}</p>
          </div>

          <div className="lpv2-hero-media">
            <Crop crop={HERO_CROP} className="lpv2-hero-crop" eager />
          </div>
        </div>
      </header>

      {/* ── 3. Inventory strip ────────────────────────────────────────── */}
      <section className="lpv2-inventory">
        <div className="lpv2-wrap">
          <p className="lpv2-eyebrow lpv2-center">What&rsquo;s inside</p>
          <div className="lpv2-inv-grid">
            {INVENTORY.map((it) => (
              <div className="lpv2-inv" key={it.label}>
                <div className="lpv2-inv-n">{it.n}</div>
                <div className="lpv2-inv-label">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. The story: what the product does, in order ─────────────── */}
      <section id="how" className="lpv2-section">
        <div className="lpv2-wrap">
          <h2 className="lpv2-h2">How SEVA raises your score.</h2>
          <p className="lpv2-sub">Four steps, in the order you will go through them.</p>
          <div className="lpv2-chapters">
            {CHAPTERS.map((c, i) => (
              <article className={`lpv2-chapter${i % 2 ? ' is-flip' : ''}`} key={c.n}>
                <div className="lpv2-chapter-copy">
                  <span className="lpv2-step-n" aria-hidden="true">{c.n}</span>
                  <h3 className="lpv2-chapter-title">{c.title}</h3>
                  <p className="lpv2-chapter-body">{c.body}</p>
                  <ul className="lpv2-checks">
                    {c.points.map((t) => (
                      <li key={t}><span className="lpv2-check-icon"><CheckDisc /></span>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className={`lpv2-shot lpv2-shot-${c.tone}`}>
                  <Crop crop={c.crop} />
                  {c.inset && <Crop crop={c.inset} className="lpv2-crop-inset" />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Score-gain marquee ─────────────────────────────────────── */}
      <div className="lpv2-marquee" aria-hidden="true">
        <div className="lpv2-marquee-track">
          {marqueeItems.map((r, i) => (
            <span className="lpv2-marquee-item" key={`${r.name}-${i}`}>
              <Avatar src={r.img} name={r.name} size={32} />
              <span className="lpv2-marquee-text">{r.name}{'  '}SAT {r.from} → {r.to}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 6. Results ────────────────────────────────────────────────── */}
      <section id="results" className="lpv2-section">
        <div className="lpv2-wrap">
          <h2 className="lpv2-h2">Real students. Real score gains.</h2>
          <div className="lpv2-results">
            {ROSTER.slice(0, 3).map((r) => (
              <figure className="lpv2-quote" key={r.name}>
                <span className="lpv2-quote-badge">SAT {r.from} → {r.to}</span>
                <blockquote className="lpv2-quote-text">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="lpv2-quote-person">
                  <Avatar src={r.img} name={r.name} size={48} />
                  <span>
                    <span className="lpv2-quote-name">{r.name}</span>
                    <span className="lpv2-quote-meta">{r.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Try it ─────────────────────────────────────────────────── */}
      <section id="why" className="lpv2-section lpv2-section-tint">
        <div className="lpv2-wrap">
          <h2 className="lpv2-h2">See exactly why you missed it.</h2>
          <p className="lpv2-sub">Answer one real question. SEVA marks it, explains it, and tells you what it just learned about you.</p>
          <div className="lpv2-try-tile">
            <LandingTryIt onStart={() => openAuth(false)} />
          </div>
        </div>
      </section>

      {/* ── 8. Pricing ────────────────────────────────────────────────── */}
      <section id="pricing" className="lpv2-section">
        <div className="lpv2-wrap">
          <h2 className="lpv2-h2">{billingLive ? 'Simple pricing. Everything included.' : 'Free during early access.'}</h2>
          <p className="lpv2-sub">
            {billingLive
              ? `Start with a ${TRIAL_DAYS}-day free trial. You won't be charged until day ${TRIAL_DAYS}, and you can cancel anytime before then. Then keep going month to month, or save with an annual plan.`
              : 'SEVA is free during early access. The full product, everything included. One plan.'}
          </p>

          {billingLive ? (
            <>
              <div className="lpv2-plans">
                <div className="lpv2-plan">
                  <h3 className="lpv2-plan-name">Monthly</h3>
                  <p className="lpv2-plan-line">Keep going month to month.</p>
                  <p className="lpv2-plan-price">{`$${PRICE_MONTHLY}`}<span className="lpv2-plan-per">/month</span></p>
                  <p className="lpv2-plan-billed">Billed monthly. Cancel anytime.</p>
                  <button type="button" className="lpv2-btn lpv2-btn-primary lpv2-plan-cta" onClick={() => openAuth(false, 'monthly')}>{`Start your ${TRIAL_DAYS}-day free trial`}</button>
                </div>
                <div className="lpv2-plan is-featured">
                  <span className="lpv2-plan-badge">Best value</span>
                  <h3 className="lpv2-plan-name">Annual</h3>
                  <p className="lpv2-plan-line">One payment, the lowest monthly price.</p>
                  <p className="lpv2-plan-price">{`$${PRICE_ANNUAL_MONTHLY}`}<span className="lpv2-plan-per">/month</span></p>
                  <p className="lpv2-plan-billed">{`One payment of $${PRICE_ANNUAL_TOTAL} per year, save $${ANNUAL_SAVINGS} vs monthly`}</p>
                  <button type="button" className="lpv2-btn lpv2-btn-primary lpv2-plan-cta" onClick={() => openAuth(false, 'annual')}>{`Start your ${TRIAL_DAYS}-day free trial`}</button>
                </div>
              </div>
              <p className="lpv2-plan-foot">{`Cancel anytime before day ${TRIAL_DAYS} and you won't be charged.`}</p>
            </>
          ) : (
            <div className="lpv2-plans is-single">
              <div className="lpv2-plan is-featured">
                <span className="lpv2-plan-badge">Early access</span>
                <h3 className="lpv2-plan-name">Free during early access</h3>
                <p className="lpv2-plan-line">The full product, everything included.</p>
                <p className="lpv2-plan-price">Free</p>
                <p className="lpv2-plan-billed">No credit card required.</p>
                <button type="button" className="lpv2-btn lpv2-btn-primary lpv2-plan-cta" onClick={() => openAuth(false)}>Get started for free</button>
              </div>
            </div>
          )}

          <div className="lpv2-includes">
            <ul>
              {PRICING_INCLUDES.map((item) => (
                <li key={item}><span className="lpv2-include-icon"><Check size={15} /></span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────── */}
      <section id="faq" className="lpv2-section">
        <div className="lpv2-wrap">
          <h2 className="lpv2-h2">Frequently asked questions.</h2>
          <div className="lpv2-faq">
            {faqItems(billingLive, { TRIAL_DAYS, PRICE_MONTHLY, PRICE_ANNUAL_TOTAL }).map((f) => (
              <details className="lpv2-faq-item" key={f.q}>
                <summary>{f.q}<Chevron /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA ─────────────────────────────────────────────── */}
      <section className="lpv2-final">
        <div className="lpv2-wrap">
          <div className="lpv2-final-art" aria-hidden="true">
            <span className="lpv2-final-chip is-left">SAT {ROSTER[1].from} → {ROSTER[1].to}</span>
            <span className="lpv2-final-mark"><Mark size={84} decorative /></span>
            <span className="lpv2-final-chip is-right">SAT {ROSTER[0].from} → {ROSTER[0].to}</span>
          </div>
          <h2 className="lpv2-h2">Get your diagnosis today.</h2>
          <p className="lpv2-sub">In about an hour you&rsquo;ll know exactly which skills to fix.</p>
          <button type="button" className="lpv2-btn lpv2-btn-primary" onClick={() => openAuth(false)}>
            Start free<ArrowRight />
          </button>
        </div>
      </section>

      {/* ── 11. Footer ────────────────────────────────────────────────── */}
      <footer className="lpv2-footer">
        <div className="lpv2-wrap">
          <div className="lpv2-foot-grid">
            <div className="lpv2-foot-brand">
              <Wordmark size="md" tone="dark" />
              <p>Digital SAT prep built around a diagnosis.</p>
            </div>
            <div className="lpv2-foot-col">
              <p className="lpv2-foot-title">Product</p>
              <a href="#how" onClick={scrollTo('how')}>How it works</a>
              <a href="#why" onClick={scrollTo('why')}>Try a question</a>
              <a href="#pricing" onClick={scrollTo('pricing')}>Pricing</a>
              <a href="#faq" onClick={scrollTo('faq')}>FAQ</a>
            </div>
            <div className="lpv2-foot-col">
              <p className="lpv2-foot-title">Account</p>
              <button type="button" onClick={() => openAuth(true)}>Log in</button>
              <button type="button" onClick={() => openAuth(false)}>Start free</button>
            </div>
            <div className="lpv2-foot-col">
              <p className="lpv2-foot-title">Legal</p>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div className="lpv2-foot-bottom">
            <span>&copy; {new Date().getFullYear()} SEVA. All rights reserved.</span>
            <span>SAT is a registered trademark of the College Board, which does not endorse this product.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageV2;
