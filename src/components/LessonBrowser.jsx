import React, { useMemo, useState } from 'react';
import './LessonBrowser.css';

// Real lesson modules (match src/data/lessons). lessonCount drives progress %.
const MODULES = [
  { id: 'linear-equations', title: 'Linear Equations', lessonCount: 24, domain: 'Algebra' },
  { id: 'functions', title: 'Functions', lessonCount: 10, domain: 'Algebra' },
  { id: 'systems', title: 'System of Equations', lessonCount: 14, domain: 'Algebra' },
  { id: 'transformations', title: 'Transformations', lessonCount: 15, domain: 'Advanced Math' },
  { id: 'exponents', title: 'Exponents & Exponential Functions', lessonCount: 12, domain: 'Advanced Math' },
  { id: 'percents', title: 'Percents', lessonCount: 17, domain: 'Problem Solving' },
  { id: 'equivalent-expressions', title: 'Equivalent Expressions', lessonCount: 3, domain: 'Advanced Math' },
  { id: 'quadratics', title: 'Quadratic Functions & Equations', lessonCount: 18, domain: 'Advanced Math' },
  { id: 'radians-degrees', title: 'Radians & Degrees', lessonCount: 4, domain: 'Geometry' },
  { id: 'triangles', title: 'Triangles', lessonCount: 35, domain: 'Geometry' },
  { id: 'circles', title: 'Circles', lessonCount: 22, domain: 'Geometry' },
  { id: 'volume', title: 'Volume', lessonCount: 9, domain: 'Geometry' },
  { id: 'statistics', title: 'Statistics', lessonCount: 12, domain: 'Problem Solving' },
  { id: 'dimensional-analysis', title: 'Dimensional Analysis', lessonCount: 4, domain: 'Problem Solving' },
];

// Per-domain visual identity: thumbnail gradient + play-button accent + the
// domain-chip background/text. Mirrors the SEVA Videos design file.
const DOMAIN_STYLE = {
  'Algebra': { accent: '#EC5C2B', tile: 'linear-gradient(135deg,#F2865C,#D8431F)', bg: 'rgba(236,92,43,.1)', col: '#C2451F' },
  'Advanced Math': { accent: '#7C5CC7', tile: 'linear-gradient(135deg,#9A7DDB,#5E40A6)', bg: 'rgba(124,92,199,.12)', col: '#6645B0' },
  'Problem Solving': { accent: '#2B3566', tile: 'linear-gradient(135deg,#3A4684,#161D3E)', bg: 'rgba(43,53,102,.1)', col: '#2B3566' },
  'Geometry': { accent: '#5A8A16', tile: 'linear-gradient(135deg,#86B53A,#46720E)', bg: 'rgba(90,138,22,.12)', col: '#4C7714' },
};
const domainStyle = (d) => DOMAIN_STYLE[d] || DOMAIN_STYLE.Algebra;

function statusFor(pct) {
  if (pct >= 100) return { label: 'Complete', col: 'var(--lv-lime-deep)', bar: 'var(--lv-lime-deep)' };
  if (pct >= 20) return { label: 'In Progress', col: 'var(--lv-purple)', bar: 'var(--lv-purple)' };
  if (pct > 0) return { label: 'Just Started', col: 'var(--lv-orange)', bar: 'var(--lv-orange)' };
  return { label: 'Not Started', col: 'var(--lv-text-3)', bar: 'var(--lv-surface-2)' };
}
const isInProgress = (m) => m.percent > 0 && m.percent < 100;
// "Needs work": started but not yet solid. (A real per-skill mastery signal
// could refine this later; progress is the honest signal we have per module.)
const needsWork = (m) => m.percent > 0 && m.percent < 50;

const PlayIcon = ({ size, accent }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={accent} stroke="none" style={{ marginLeft: '2px' }}>
    <path d="M7 4v16l13-8z" />
  </svg>
);

const LessonBrowser = ({ completedLessons = {}, onSelectModule }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'needs' | 'progress'
  const [query, setQuery] = useState('');

  // Progress per module from real completed-lesson records.
  const moduleData = useMemo(() => MODULES.map((mod) => {
    const completed = Object.keys(completedLessons).filter(
      (key) => key.startsWith(`${mod.id}-`) && completedLessons[key]?.completed
    ).length;
    const percent = Math.min(100, Math.round((completed / mod.lessonCount) * 100));
    return { ...mod, completed, percent };
  }), [completedLessons]);

  const counts = useMemo(() => ({
    all: moduleData.length,
    needs: moduleData.filter(needsWork).length,
    progress: moduleData.filter(isInProgress).length,
  }), [moduleData]);

  const visible = useMemo(() => {
    let mods = moduleData;
    if (filter === 'needs') mods = mods.filter(needsWork);
    else if (filter === 'progress') mods = mods.filter(isInProgress);
    const q = query.trim().toLowerCase();
    if (q) mods = mods.filter((m) => m.title.toLowerCase().includes(q) || m.domain.toLowerCase().includes(q));
    return mods;
  }, [moduleData, filter, query]);

  // Resume the furthest-along in-progress module (fall back to the first one).
  const featured = useMemo(() => {
    const prog = moduleData.filter(isInProgress).sort((a, b) => b.percent - a.percent);
    return prog[0] || null;
  }, [moduleData]);

  const PILLS = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'needs', label: 'Needs Work', count: counts.needs },
    { id: 'progress', label: 'In Progress', count: counts.progress },
  ];

  return (
    <div className="lv-root">
      {/* Header */}
      <div className="lv-header">
        <div>
          <h1 className="lv-title">Learn</h1>
          <p className="lv-subtitle">Short video lessons for every SAT topic. Pick up where you left off or start something new.</p>
        </div>
        <div className="lv-search">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lv-text-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics"
            aria-label="Search topics"
          />
        </div>
      </div>

      {/* Continue learning hero */}
      {featured && (() => {
        const a = domainStyle(featured.domain);
        const lessonNo = Math.max(1, Math.round(featured.lessonCount * featured.percent / 100));
        const left = Math.max(0, featured.lessonCount - lessonNo);
        return (
          <div className="lv-hero">
            <div className="lv-hero-tile" style={{ background: a.tile }}>
              <div className="lv-play"><PlayIcon size={26} accent={a.accent} /></div>
              <span className="lv-hero-tag">RESUME</span>
            </div>
            <div className="lv-hero-body">
              <div className="lv-hero-eyebrow">
                <b>Continue learning</b>
                <span className="lv-dot" />
                <span>{featured.domain}</span>
              </div>
              <div className="lv-hero-title">{featured.title}</div>
              <div className="lv-hero-meta">Lesson {lessonNo} of {featured.lessonCount} · {left} lesson{left === 1 ? '' : 's'} left</div>
              <div className="lv-hero-prog">
                <div className="lv-bar"><div className="lv-bar-fill" style={{ width: `${featured.percent}%`, background: 'var(--lv-purple)' }} /></div>
                <span className="lv-hero-pct">{featured.percent}%</span>
              </div>
              <button className="lv-hero-btn" onClick={() => onSelectModule(featured.id)}>
                Resume lesson
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        );
      })()}

      {/* Filter pills */}
      <div className="lv-pills" role="tablist" aria-label="Topic filters">
        {PILLS.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={filter === p.id}
            className={`lv-pill${filter === p.id ? ' is-active' : ''}`}
            onClick={() => setFilter(p.id)}
          >
            {p.label} <span className="lv-pill-count">{p.count}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="lv-grid">
        {visible.map((mod) => {
          const a = domainStyle(mod.domain);
          const s = statusFor(mod.percent);
          return (
            <button key={mod.id} className="lv-card" onClick={() => onSelectModule(mod.id)}>
              <div className="lv-card-tile" style={{ background: a.tile }}>
                <div className="lv-play"><PlayIcon size={17} accent={a.accent} /></div>
                <span className="lv-card-count">{mod.lessonCount}</span>
              </div>
              <div className="lv-card-body">
                <div className="lv-card-head">
                  <div className="lv-card-title">{mod.title}</div>
                  <span className="lv-card-domain" style={{ background: a.bg, color: a.col }}>{mod.domain}</span>
                </div>
                <div className="lv-card-sub">
                  <span className="lv-card-lessons">{mod.lessonCount} lessons</span>
                  {needsWork(mod) && <span className="lv-badge-needs">NEEDS WORK</span>}
                </div>
                <div className="lv-card-spacer" />
                <div className="lv-bar"><div className="lv-bar-fill" style={{ width: `${mod.percent}%`, background: s.bar }} /></div>
                <div className="lv-card-foot">
                  <span className="lv-card-status" style={{ color: s.col }}>{s.label}</span>
                  <span className="lv-card-pct">{mod.percent}%</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {visible.length === 0 && (
        <div className="lv-empty">
          {query.trim()
            ? <p>No topics match &ldquo;{query.trim()}&rdquo;.</p>
            : <p>No topics match this filter.</p>}
          {!query.trim() && <button onClick={() => setFilter('all')}>Show all topics</button>}
        </div>
      )}
    </div>
  );
};

export default LessonBrowser;
