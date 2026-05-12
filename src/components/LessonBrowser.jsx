import React, { useState, useEffect, useMemo } from 'react';
import { colors, typography, spacing, radius, shadows, transitions, breakpoints } from '../design/tokens';
import { buttonStyles, cardStyles, inputStyles, badgeStyles } from '../design/components';
import { injectAnimations } from '../design/animations';
import { Button } from './ui/Button';

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

const LessonBrowser = ({ completedLessons = {}, skillProgress = {}, onSelectModule }) => {
  const [filter, setFilter] = useState('all'); // 'all', 'weak', 'inProgress'
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => { injectAnimations(); }, []);

  // Responsive
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < breakpoints.tablet;

  // Calculate progress per module
  const moduleData = useMemo(() => {
    return MODULES.map(mod => {
      const completed = Object.keys(completedLessons).filter(
        key => key.startsWith(`${mod.id}-`) && completedLessons[key]?.completed
      ).length;
      const percent = Math.round((completed / mod.lessonCount) * 100);

      let status = 'Not Started';
      let statusColor = colors.text.muted;
      if (percent === 100) { status = 'Complete'; statusColor = colors.semantic.success; }
      else if (percent >= 60) { status = 'Strong'; statusColor = colors.semantic.success; }
      else if (percent >= 20) { status = 'In Progress'; statusColor = colors.semantic.info; }
      else if (percent > 0) { status = 'Just Started'; statusColor = colors.semantic.warning; }

      return { ...mod, completed, percent, status, statusColor };
    });
  }, [completedLessons]);

  // Filter modules
  const filteredModules = useMemo(() => {
    let mods = moduleData;

    if (filter === 'weak') {
      mods = mods.filter(m => m.percent < 50);
    } else if (filter === 'inProgress') {
      mods = mods.filter(m => m.percent > 0 && m.percent < 100);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      mods = mods.filter(m => m.title.toLowerCase().includes(q) || m.domain.toLowerCase().includes(q));
    }

    return mods;
  }, [moduleData, filter, searchQuery]);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'weak', label: 'Needs Work' },
    { id: 'inProgress', label: 'In Progress' },
  ];

  return (
    <div style={{
      maxWidth: '960px',
      margin: '0 auto',
      padding: `${spacing.lg} ${isMobile ? spacing.md : spacing.lg}`,
      fontFamily: typography.fontFamily,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
      }}>
        <h1 style={{
          fontSize: typography.sizes['2xl'],
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
        }}>
          Learn
        </h1>
        <Button
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Search modules"
          variant="ghost"
          style={{ padding: spacing.xs }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.text.secondary} strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </Button>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div style={{ marginBottom: spacing.md, animation: 'fadeInDown 200ms ease' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search modules..."
            autoFocus
            style={inputStyles.base}
            aria-label="Search modules"
          />
        </div>
      )}

      {/* Filter Pills */}
      <div role="tablist" aria-label="Module filters" style={{
        display: 'flex',
        gap: spacing.xs,
        marginBottom: spacing.lg,
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        {filters.map(f => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            style={{
              ...buttonStyles.base,
              padding: `6px ${spacing.md}`,
              height: '36px',
              borderRadius: radius.full,
              fontSize: typography.sizes.sm,
              fontWeight: filter === f.id ? typography.weights.semibold : typography.weights.medium,
              backgroundColor: filter === f.id ? colors.accent.orange : colors.surface.gray,
              color: filter === f.id ? colors.text.inverse : colors.text.secondary,
              border: 'none',
              whiteSpace: 'nowrap',
              transition: `all ${transitions.fast}`,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Module Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: spacing.md,
      }}>
        {filteredModules.map((mod, i) => (
          <button
            key={mod.id}
            onClick={() => onSelectModule(mod.id)}
            style={{
              ...cardStyles.interactive,
              textAlign: 'left',
              animation: `fadeInUp ${300 + i * 50}ms ease`,
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.sm,
            }}
          >
            {/* Module Title + Domain Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{
                  fontSize: typography.sizes.md,
                  fontWeight: typography.weights.semibold,
                  color: colors.text.primary,
                  marginBottom: '4px',
                }}>
                  {mod.title}
                </h3>
                <span style={{
                  fontSize: typography.sizes.xs,
                  color: colors.text.tertiary,
                }}>
                  {mod.lessonCount} lessons
                </span>
              </div>
              <span style={{
                ...badgeStyles.base,
                ...badgeStyles.neutral,
                fontSize: '10px',
                flexShrink: 0,
              }}>
                {mod.domain}
              </span>
            </div>

            {/* Progress Bar */}
            <div
              role="progressbar"
              aria-valuenow={mod.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${mod.title} progress: ${mod.percent}%`}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: colors.surface.gray,
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: `${mod.percent}%`,
                height: '100%',
                borderRadius: '3px',
                backgroundColor: mod.percent === 100 ? colors.semantic.success : colors.accent.orange,
                transition: `width ${transitions.slow}`,
              }} />
            </div>

            {/* Status */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontSize: typography.sizes.xs,
                fontWeight: typography.weights.medium,
                color: mod.statusColor,
              }}>
                {mod.status}
              </span>
              <span style={{
                fontSize: typography.sizes.xs,
                color: colors.text.muted,
              }}>
                {mod.percent}%
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Empty State */}
      {filteredModules.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: spacing['2xl'],
          color: colors.text.tertiary,
        }}>
          {searchQuery ? (
            <>
              <p style={{ fontSize: typography.sizes.md, marginBottom: spacing.xs }}>
                No modules match "{searchQuery}"
              </p>
              <p style={{ fontSize: typography.sizes.sm }}>Try a different search.</p>
            </>
          ) : (
            <>
              <p style={{ fontSize: typography.sizes.md, marginBottom: spacing.xs }}>
                No modules match this filter.
              </p>
              <Button onClick={() => setFilter('all')} variant="tertiary">
                Show All
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonBrowser;
