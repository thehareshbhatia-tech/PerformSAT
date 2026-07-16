import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useFeatureFlag } from '../hooks/useFeatureFlag';
import { Modal } from './ui/Modal';
import Wordmark from './ui/Wordmark';
import './LandingPage.css';

// The pre-signup quiz funnel is its own chunk: the landing page must stay
// light (it's an eager import in App.jsx), and most visitors bounce before
// clicking a CTA.
const OnboardingFunnel = React.lazy(() => import('./onboarding/OnboardingFunnel'));

/* ── Inline icon helpers (match the mockup's SVGs exactly) ──────────────── */
const svgBase = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
const ArrowRight = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" {...svgBase}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const CheckMark = ({ size = 15, stroke = 'var(--lp-lime-deep)', sw = 2.4 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke={stroke} strokeWidth={sw} {...svgBase}><path d="M20 6 9 17l-5-5" /></svg>
);
const XMark = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke="var(--lp-text-3)" strokeWidth="2.8" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);

// Testimonial avatar: renders the student's initials, then overlays their
// photo from public/testimonials/ when it exists. onError hides a missing
// photo so we never flash a broken-image icon before the real photos land.
const Avatar = ({ src, name }) => {
  const initials = name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <span className="lp-avatar" style={{ width: 46, height: 46 }} aria-hidden="true">
      {initials}
      <img className="lp-avatar-img" src={src} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </span>
  );
};

// Feature cards — icon inherits `currentColor` from the wrapper's color.
const FEATURES = [
  { title: 'Adaptive Diagnostic', iconBg: 'var(--lp-orange-tint)', iconCol: 'var(--lp-orange)',
    desc: 'A 15-minute adaptive test that pinpoints every weak skill — the foundation the rest of your prep is built on.',
    icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" /></> },
  { title: 'Diagnostic-Driven Plan', iconBg: 'var(--lp-purple-tint)', iconCol: 'var(--lp-purple)',
    desc: 'A week-by-week study plan that starts where the points are cheapest to win and adapts as you improve.',
    icon: <><rect x="8" y="3" width="8" height="4" rx="1.5" /><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><path d="m9 14 2 2 4-4" /></> },
  { title: '2,200+ Question Bank', iconBg: 'rgba(90,138,22,.12)', iconCol: 'var(--lp-lime-deep)',
    desc: 'Hand-authored questions across every SAT domain and skill, each with a worked explanation you can drill on demand.',
    icon: <><path d="M12 2 2 7l10 5 10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></> },
  { title: 'AI Tutor', iconBg: 'var(--lp-orange-tint)', iconCol: 'var(--lp-orange)',
    desc: 'Instant hints and step-by-step explanations on any question — the second you get stuck, not the next day.',
    icon: <><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" /><path d="M5 16l.8 2L8 18.8 6 19.6 5 22l-.8-2.4L2 18.8 4.2 18z" /></> },
  { title: 'Full-Length Tests', iconBg: 'var(--lp-purple-tint)', iconCol: 'var(--lp-purple)',
    desc: 'Realistic, Bluebook-format practice tests with highlighting, cross-out, and a live pacing timer.',
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="m9 15 2 2 4-4" /></> },
  { title: 'Score-Trajectory Tracking', iconBg: 'rgba(90,138,22,.12)', iconCol: 'var(--lp-lime-deep)',
    desc: 'Watch your projected score climb toward your goal, section by section, after every session.',
    icon: <><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></> },
];

const STEPS = [
  { n: '1', title: 'Take your diagnostic', bg: 'orange',
    desc: 'A short adaptive test finds exactly which skills are costing you points.',
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" /></> },
  { n: '2', title: 'Get your custom plan', bg: 'purple',
    desc: 'SEVA builds a week-by-week plan around your weak spots and your test date.',
    icon: <><rect x="8" y="3" width="8" height="4" rx="1.5" /><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><path d="m9 14 2 2 4-4" /></> },
  { n: '3', title: 'Practice what matters', bg: 'lime',
    desc: 'Drill the right questions with an AI tutor beside you, and watch your score climb.',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9z" /> },
];

// Real, product-owner-cleared student results (approved to publish by name +
// college on 2026-07-07). Photos live in public/testimonials/; until they land
// the Avatar falls back to initials. Order + photo mapping match the mockup.
const ROSTER = [
  { img: '/testimonials/student-1.png', name: 'Jake C.', meta: 'Princeton University', from: '1420', to: '1540',
    quote: 'The best decision I made in my whole SAT journey. It found the exact grammar slips costing me points and drilled them until they were gone.' },
  { img: '/testimonials/student-2.png', name: 'Gino S.', meta: 'University of Florida · Honors', from: '1220', to: '1490',
    quote: 'It taught me to see the SAT as patterns, not random questions. My score jumped 270 points and I earned over $350K in scholarships.' },
  { img: '/testimonials/student-3.png', name: 'Sansai H.', meta: 'Villanova University', from: '1250', to: '1430',
    quote: 'I stopped chasing volume and started following a real system. The improvement felt structural — it just clicked into place.' },
  { img: '/testimonials/student-5.png', name: 'Rocco D.', meta: 'Fordham University', from: '1180', to: '1420',
    quote: "I couldn't have gotten these results without SEVA. By test day I wasn't guessing anymore — I was executing." },
  { img: '/testimonials/student-4.png', name: 'Luca S.', meta: 'Tufts University', from: '1280', to: '1410',
    quote: 'It matched the intensity I bring to the field. Once I saw the structure beneath each question, my accuracy and timing transformed.' },
];

const PRICING_INCLUDES = [
  '2,200+ hand-authored practice questions',
  '12 full-length adaptive practice tests',
  'Six-class error diagnosis after every test',
  'Targeted drills for the exact question types you miss',
  'AI tutor with step-by-step, inline graphs',
  'A study plan built around your gaps',
];

const LandingPage = () => {
  // Billing dark-launch: pricing copy flips with the same flag as the app's
  // paywall so the landing page never promises "free forever" once the
  // 3-day-trial model is live (and never promises a trial before it exists).
  const billingLive = useFeatureFlag('billing');
  const [showAuth, setShowAuth] = useState(false); // login modal
  const [showFunnel, setShowFunnel] = useState(false); // signup quiz funnel
  const [active, setActive] = useState(0); // results carousel index (can go +/-, wrapped on read)

  // Login Form State (signup now lives inside the funnel)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();
  const rootRef = useRef(null);

  // Scroll-reveal: fade sections up as they enter the viewport (mirrors the
  // mockup's IntersectionObserver). Stagger the children of `.lp-stag`.
  // Re-runs when we come back from the funnel so the observers re-attach.
  useEffect(() => {
    if (showFunnel) return undefined;
    const root = rootRef.current;
    if (!root) return undefined;
    const els = Array.from(root.querySelectorAll('.lp-reveal, .lp-stag'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const t = en.target;
        if (t.classList.contains('lp-stag')) {
          Array.from(t.children).forEach((c, i) => { c.style.transitionDelay = `${i * 90}ms`; });
        }
        t.classList.add('in');
        io.unobserve(t);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    els.forEach((e) => io.observe(e));
    const fallback = setTimeout(() => els.forEach((e) => e.classList.add('in')), 2800);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [showFunnel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      // User will be redirected automatically by App.jsx routing
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Every signup CTA routes through the quiz funnel; only "Log in" opens
  // the modal directly.
  const openAuth = (loginMode = false) => {
    if (loginMode) {
      setShowFunnel(false);
      setShowAuth(true);
    } else {
      setShowAuth(false);
      setShowFunnel(true);
    }
  };

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Results carousel: `active` is unbounded; wrap on read so prev/next always
  // resolve to a real roster entry.
  const cycle = (d) => setActive((a) => a + d);
  const rn = ROSTER.length;
  const ri = ((active % rn) + rn) % rn;
  const cur = ROSTER[ri];
  const prevCard = ROSTER[(ri - 1 + rn) % rn];
  const nextCard = ROSTER[(ri + 1) % rn];

  if (showFunnel) {
    return (
      <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#F6F4EF' }} />}>
        <OnboardingFunnel
          signup={signup}
          billingLive={billingLive}
          onExit={() => setShowFunnel(false)}
          onLogIn={() => openAuth(true)}
        />
      </React.Suspense>
    );
  }

  return (
    <div className="landing-container" ref={rootRef}>
      {/* ===== NAV ===== */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <a href="/" className="brand-logo" aria-label="SEVA"><Wordmark size="lg" tone="dark" /></a>
          <div className="lp-nav-links">
            <a className="lp-nav-link" href="#features" onClick={scrollTo('features')}>Features</a>
            <a className="lp-nav-link" href="#how" onClick={scrollTo('how')}>How it works</a>
            <a className="lp-nav-link" href="#why" onClick={scrollTo('why')}>Why SEVA</a>
          </div>
          <div className="lp-nav-actions">
            <button type="button" className="lp-btn lp-btn-ghost" onClick={() => openAuth(true)}>Log in</button>
            <button type="button" className="lp-btn lp-btn-orange" onClick={() => openAuth(false)}>Start free</button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="lp-hero">
        <div className="lp-hero-blob lp-hero-blob-a" aria-hidden="true" />
        <div className="lp-hero-blob lp-hero-blob-b" aria-hidden="true" />
        <div className="lp-hero-inner">
          <div>
            <span className="lp-badge"><span className="lp-badge-dot" />Built for the Digital SAT</span>
            <h1 className="lp-hero-title">
              Knows you like <span className="lp-c-orange">no&nbsp;course&nbsp;can</span>.<br />
              Shows up like <span className="lp-c-purple">no&nbsp;tutor&nbsp;does</span>.<br />
              Tells you the truth <span className="lp-c-lime">neither&nbsp;does</span>.
            </h1>
            <p className="lp-hero-desc">
              SEVA is AI-powered Digital SAT prep that diagnoses exactly <i>why</i> you miss each question — then builds the plan that fixes it.
            </p>
            <div className="lp-hero-actions">
              <button type="button" className="lp-btn lp-btn-orange lp-btn-orange-lg" onClick={() => openAuth(false)}>
                Start your free diagnostic<ArrowRight />
              </button>
              <a className="lp-btn-ghost-bordered" href="#how" onClick={scrollTo('how')}>See how it works</a>
            </div>
            {billingLive ? (
              <p className="lp-hero-note">Free for 3 days, then $85/month or $349/year. Cancel anytime before day 3 and you won't be charged.</p>
            ) : (
              <div className="lp-hero-trust">
                <span><CheckMark />Free to start</span>
                <span><CheckMark />No credit card</span>
              </div>
            )}
          </div>

          <div className="lp-hero-visual">
            <div className="lp-demo-panel">
              <div className="lp-demo-blob-a" aria-hidden="true" />
              <div className="lp-demo-blob-b" aria-hidden="true" />
              <div className="lp-demo-head">
                <span className="lp-demo-eyebrow">Your progress</span>
                <span className="lp-demo-live"><span className="lp-demo-live-dot" />Live</span>
              </div>
              <div className="lp-demo-card lp-float">
                <div className="lp-demo-card-top">
                  <div className="lp-demo-card-label">Current Score</div>
                  <span className="lp-demo-delta">
                    <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.6" {...svgBase}><path d="M7 17 17 7M9 7h8v8" /></svg>+90 pts
                  </span>
                </div>
                <div className="lp-demo-scorerow">
                  <span className="lp-demo-score">1280</span>
                  <span className="lp-demo-scoremax">/ 1600</span>
                </div>
                <div className="lp-demo-bar">
                  <div className="lp-demo-bar-fill" />
                  <div className="lp-demo-bar-goal" />
                </div>
                <div className="lp-demo-barlabels"><span>Now</span><span style={{ color: 'var(--lp-lime-deep)' }}>Goal 1500</span></div>
                <div className="lp-demo-tiles">
                  <div className="lp-demo-tile lp-demo-tile-orange">
                    <div className="lp-demo-tile-num">40%</div>
                    <div className="lp-demo-tile-label">Accuracy</div>
                  </div>
                  <div className="lp-demo-tile lp-demo-tile-lime">
                    <div className="lp-demo-tile-num">R&amp;W</div>
                    <div className="lp-demo-tile-label">Strongest</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lp-tutor-pill">
              <span className="lp-tutor-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" stroke="var(--lp-purple)" strokeWidth="2" {...svgBase}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" /></svg>
              </span>
              <div>
                <div className="lp-tutor-title">AI Tutor</div>
                <div className="lp-tutor-sub">explaining question 4…</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== STATS STRIP ===== */}
      <section className="lp-stats lp-reveal">
        <div className="lp-stats-inner lp-stag">
          <div className="lp-stat"><div className="lp-stat-num">2,200+</div><div className="lp-stat-label">Hand-authored questions</div></div>
          <div className="lp-stat"><div className="lp-stat-num is-lime">8</div><div className="lp-stat-label">SAT domains covered</div></div>
          <div className="lp-stat"><div className="lp-stat-num">100%</div><div className="lp-stat-label">Aligned to Bluebook format</div></div>
          <div className="lp-stat"><div className="lp-stat-num is-orange">24/7</div><div className="lp-stat-label">AI tutor on every question</div></div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="lp-compare lp-reveal">
        <div className="lp-compare-head">
          <h2 className="lp-compare-title">
            A prep course tells you <span className="muted">what to study</span>.<br />
            SEVA tells you <span className="lp-c-orange">why you missed it</span>.
          </h2>
        </div>
        <div className="lp-compare-grid">
          <div className="lp-compare-card lp-compare-card-neg">
            <div className="lp-compare-eyebrow">A typical prep course</div>
            <div className="lp-compare-list">
              {['The same syllabus for every student', "You're left to find your own weak spots", 'Help only when class is in session'].map((t) => (
                <div className="lp-compare-row" key={t}>
                  <span className="lp-compare-mark lp-compare-mark-x"><XMark /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lp-compare-card lp-compare-card-pos">
            <div className="lp-compare-blob" aria-hidden="true" />
            <div className="lp-compare-eyebrow">With SEVA</div>
            <div className="lp-compare-list">
              {['Every session is built around your diagnosis', 'It pinpoints the exact skill behind each miss', "An AI tutor is there the second you're stuck"].map((t) => (
                <div className="lp-compare-row" key={t}>
                  <span className="lp-compare-mark lp-compare-mark-check"><CheckMark stroke="#C0F054" sw={3} size={12} /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="lp-features lp-reveal">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Everything in one place</span>
          <h2 className="lp-section-title">A complete prep system, not just a question dump.</h2>
          <p className="lp-section-sub">Every feature works off one thing: your diagnostic. So the whole app points at the exact points standing between you and your goal.</p>
        </div>
        <div className="lp-feat-grid lp-stag">
          {FEATURES.map((f) => (
            <div className="lp-feat" key={f.title}>
              <span className="lp-feat-icon" style={{ background: f.iconBg, color: f.iconCol }}>
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.9" {...svgBase}>{f.icon}</svg>
              </span>
              <h3 className="lp-feat-title">{f.title}</h3>
              <p className="lp-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRAND MOMENT ===== */}
      <section id="why" className="lp-brand lp-reveal">
        <div className="lp-brand-card">
          <div className="lp-brand-blob-a" aria-hidden="true" />
          <div className="lp-brand-blob-b" aria-hidden="true" />
          <div className="lp-brand-grid">
            <div>
              <div className="lp-brand-kicker">
                <span className="lp-brand-kicker-line" />
                <span className="lp-brand-kicker-text">The SEVA promise</span>
              </div>
              <h2 className="lp-brand-title">
                <span>A Tutor's</span>
                <span className="grad">Heart.</span>
                <span className="mt">A Machine's</span>
                <span className="lime">Reach.</span>
              </h2>
            </div>
            <div>
              <p className="lp-brand-copy">The patience and insight of a great tutor — the kind who notices <i>why</i> you missed a question, not just that you did — delivered to every student, on every question, at any hour.</p>
              <div className="lp-brand-rows">
                <div className="lp-brand-row">
                  <span className="lp-brand-row-icon orange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F2865C" stroke="none"><path d="M12 21s-7.5-4.6-10-9.3C.3 8.4 1.7 5 4.9 5c2 0 3.3 1.2 4.1 2.4l.9 1.3.9-1.3C11.7 6.2 13 5 15 5c3.3 0 4.7 3.4 2.9 6.7C19.5 16.4 12 21 12 21z" /></svg>
                  </span>
                  <span>Explanations that adapt to how <i>you</i> think</span>
                </div>
                <div className="lp-brand-row">
                  <span className="lp-brand-row-icon lime">
                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="#C0F054" strokeWidth="2" {...svgBase}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
                  </span>
                  <span>Available the second you're stuck — never a wait</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="lp-philosophy lp-reveal">
        <div className="lp-philosophy-eyebrow">Our philosophy</div>
        <h2 className="lp-philosophy-title">We don't promise you a score.<br />We build the <span className="lp-c-orange">student that earns it</span>.</h2>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" className="lp-how lp-reveal">
        <div className="lp-section-head">
          <span className="lp-eyebrow">How it works</span>
          <h2 className="lp-section-title">Three steps to a smarter prep.</h2>
        </div>
        <div className="lp-steps lp-stag">
          <div className="lp-steps-line" aria-hidden="true" />
          {STEPS.map((s) => (
            <div className="lp-step" key={s.n}>
              <div className={`lp-step-badge ${s.bg}`}>
                <svg width="30" height="30" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" {...svgBase}>{s.icon}</svg>
              </div>
              <div className="lp-step-num">STEP {s.n}</div>
              <h3 className="lp-step-title">{s.title}</h3>
              <p className="lp-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RESULTS SHOWCASE (real, cleared student testimonials) ===== */}
      <section id="results" className="lp-results lp-reveal">
        <h2 className="lp-results-title">Thousands of students.<br />Life-changing results.</h2>
        <p className="lp-results-sub">Real score gains, for students at every level.</p>
        <div className="lp-results-stage">
          <div className="lp-peek lp-peek-prev" aria-hidden="true">
            <span className="lp-peek-pill">{prevCard.from} → {prevCard.to}</span>
            <p className="lp-peek-quote">“{prevCard.quote}”</p>
          </div>
          <div className="lp-peek lp-peek-next" aria-hidden="true">
            <span className="lp-peek-pill">{nextCard.from} → {nextCard.to}</span>
            <p className="lp-peek-quote">“{nextCard.quote}”</p>
          </div>
          <div className="lp-featcard">
            <span className="lp-result-pill">{cur.from} <span className="to">→</span> {cur.to}</span>
            <p className="lp-result-quote">“{cur.quote}”</p>
            <div className="lp-result-person">
              <Avatar src={cur.img} name={cur.name} />
              <div>
                <div className="lp-result-name">{cur.name}</div>
                <div className="lp-result-meta">{cur.meta}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lp-results-nav">
          <button type="button" className="lp-arrow" onClick={() => cycle(-1)} aria-label="Previous result">
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" {...svgBase}><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" className="lp-arrow" onClick={() => cycle(1)} aria-label="Next result">
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" {...svgBase}><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
        <p className="lp-results-foot">Real students used SEVA to boost their SAT scores and open doors to top colleges nationwide.</p>
      </section>

      {/* ===== PRICING (kept + restyled; gated on the billing flag) ===== */}
      <section id="pricing" className="lp-pricing lp-reveal">
        <div className="lp-section-head">
          <span className="lp-eyebrow">Simple, honest pricing</span>
          <h2 className="lp-section-title" style={{ marginTop: '14px' }}>
            {billingLive ? 'One plan. Everything included.' : 'Free during early access.'}
          </h2>
          <p className="lp-section-sub">
            {billingLive
              ? "Start with a 3-day free trial. You won't be charged until day 3, and you can cancel anytime before then. Then keep going month to month, or save with an annual plan."
              : 'SEVA is free during early access — the full product, everything included. One plan.'}
          </p>
        </div>

        <div className="lp-pricing-includes">
          <p className="lp-pricing-includes-title">Everything is included</p>
          <ul className="lp-includes-grid">
            {PRICING_INCLUDES.map((item) => (
              <li className="lp-include" key={item}>
                <span className="lp-include-check" aria-hidden="true"><CheckMark size={13} stroke="var(--lp-lime-deep)" sw={3} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {billingLive ? (
          <>
            <div className="lp-pricing-cards">
              <div className="lp-pricing-card">
                <h3 className="lp-plan-name">Monthly</h3>
                <div className="lp-plan-amount"><span className="lp-plan-price">$85</span><span className="lp-plan-period">/month</span></div>
                <p className="lp-plan-note">Billed monthly. Cancel anytime.</p>
                <button type="button" className="lp-pricing-cta" onClick={() => openAuth(false)}>Start your 3-day free trial</button>
              </div>
              <div className="lp-pricing-card is-featured">
                <span className="lp-pricing-badge">Best value</span>
                <h3 className="lp-plan-name">Annual</h3>
                <div className="lp-plan-amount"><span className="lp-plan-price">$349</span><span className="lp-plan-period">/year</span></div>
                <p className="lp-plan-savings">One payment of $349 per year — save $671 vs monthly</p>
                <button type="button" className="lp-pricing-cta" onClick={() => openAuth(false)}>Start your 3-day free trial</button>
              </div>
            </div>
            <p className="lp-pricing-reassurance">Cancel anytime before day 3 and you won't be charged.</p>
          </>
        ) : (
          <div className="lp-pricing-cards is-single">
            <div className="lp-pricing-card is-featured">
              <span className="lp-pricing-badge">Early access</span>
              <h3 className="lp-plan-name">Free during early access</h3>
              <div className="lp-plan-amount"><span className="lp-plan-price">Free</span></div>
              <p className="lp-plan-note">The full product, everything included.</p>
              <button type="button" className="lp-pricing-cta" onClick={() => openAuth(false)}>Get started for free</button>
            </div>
          </div>
        )}
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="lp-final lp-reveal">
        <div className="lp-final-card">
          <div className="lp-final-blob-a" aria-hidden="true" />
          <div className="lp-final-blob-b" aria-hidden="true" />
          <div className="lp-final-eyebrow">Everything a tutor sees. Nothing a tutor costs.</div>
          <h2 className="lp-final-title">Ready to find your next 200 points?</h2>
          <p className="lp-final-sub">
            {billingLive
              ? "Take the free diagnostic. In 15 minutes you'll know exactly where they are — then try everything free for 3 days."
              : "Take the free diagnostic. In 15 minutes you'll know exactly where they are."}
          </p>
          <button type="button" className="lp-final-cta" onClick={() => openAuth(false)}>
            Start your free diagnostic<ArrowRight />
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="lp-footer">
        <div className="lp-footer-grid">
          <div className="lp-footer-brand">
            <Wordmark size="md" tone="dark" />
            <p className="lp-footer-desc">AI-powered Digital SAT prep. A tutor's heart, a machine's reach.</p>
          </div>
          <div>
            <div className="lp-footer-col-title">Product</div>
            <div className="lp-footer-links">
              <a className="lp-foot-link" href="#features" onClick={scrollTo('features')}>Features</a>
              <a className="lp-foot-link" href="#how" onClick={scrollTo('how')}>How it works</a>
              <a className="lp-foot-link" href="#why" onClick={scrollTo('why')}>Why SEVA</a>
              <a className="lp-foot-link" href="#pricing" onClick={scrollTo('pricing')}>Pricing</a>
            </div>
          </div>
          <div>
            <div className="lp-footer-col-title">Legal</div>
            <div className="lp-footer-links">
              <a className="lp-foot-link" href="/privacy">Privacy</a>
              <a className="lp-foot-link" href="/terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="lp-footer-bottom">
          <div className="lp-footer-bottom-inner">
            <span>&copy; {new Date().getFullYear()} SEVA. All rights reserved.</span>
            <span>SAT is a registered trademark of the College Board, which does not endorse this product.</span>
          </div>
        </div>
      </footer>

      {/* ===== Login Modal (signup happens in the onboarding funnel) ===== */}
      <Modal isOpen={showAuth} onClose={() => setShowAuth(false)} title="Welcome Back" maxWidth="480px">
        <p className="auth-form-subtitle" style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', color: 'var(--color-slate-500)' }}>
          Log in to continue learning
        </p>
        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label className="auth-form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="auth-form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="auth-form-group">
            <label className="auth-form-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="auth-form-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength="6" />
          </div>
          {error && <div className="auth-form-error">{error}</div>}
          <button type="submit" className="auth-form-submit" disabled={loading}>{loading ? 'Please wait...' : 'Log In'}</button>
          <button type="button" className="auth-form-toggle" onClick={() => { setShowAuth(false); openAuth(false); }}>
            Don't have an account? Sign up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LandingPage;
