import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors, typography, spacing, radius, shadows, transitions, breakpoints, zIndex } from '../../design/tokens';
import { injectAnimations } from '../../design/animations';
import Wordmark from './Wordmark';
import Avatar from './Avatar';

// Route ↔ view state mapping
const VIEW_ROUTES = {
  dashboard: '/app',
  modules: '/app/learn',
  list: '/app/learn/module',
  lesson: '/app/learn/lesson',
  practice: '/app/practice',
  practiceBank: '/app/practice-bank',
  practiceTests: '/app/tests',
  takingTest: '/app/tests/active',
  diagnosticReport: '/app/diagnostic',
  studyPlan: '/app/study-plan',
};

const ROUTE_VIEWS = Object.fromEntries(
  Object.entries(VIEW_ROUTES).map(([k, v]) => [v, k])
);

// Navigation items.
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', route: '/app', icon: HomeIcon },
  { id: 'modules', label: 'Videos', route: '/app/learn', icon: BookIcon },
  { id: 'practiceTests', label: 'Tests', route: '/app/tests', icon: ClockIcon },
  { id: 'practiceBank', label: 'Practice', route: '/app/practice-bank', icon: TargetIcon },
  { id: 'studyPlan', label: 'Study Plan', route: '/app/study-plan', icon: StudyPlanIcon },
  { id: 'tutor', label: 'AI Tutor', route: '/app/tutor', icon: SparklesIcon },
  { id: 'profile', label: 'Profile', route: '/app/profile', icon: PersonIcon },
];

function HomeIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BookIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function ClockIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SparklesIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  );
}

function TargetIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function StudyPlanIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function PersonIcon({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Hook to detect viewport width
function useViewport() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isMobile: width < breakpoints.tablet,
    isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
    isDesktop: width >= breakpoints.desktop,
  };
}

const AppShell = ({ children, currentView, onNavigate, user, onLogout, hideNav = false }) => {
  const { isMobile, isTablet, isDesktop } = useViewport();
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => { injectAnimations(); }, []);

  // Hide navigation during test-taking
  if (hideNav) {
    return <>{children}</>;
  }

  const activeNavId = currentView === 'list' || currentView === 'lesson' || currentView === 'practice'
    ? 'modules'
    : currentView === 'takingTest'
    ? 'practiceTests'
    : currentView === 'diagnosticReport'
    ? 'practiceTests'
    : currentView;

  const handleNavClick = (item) => {
    if (item.id === 'tutor' || item.id === 'profile') {
      // These are new screens — for now, pass through to parent
      onNavigate(item.id);
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: typography.fontFamily,
      backgroundColor: colors.surface.offWhite,
    }}>
      {/* Desktop Sidebar */}
      {isDesktop && (
        <aside role="navigation" aria-label="Desktop navigation" style={{
          width: '240px',
          backgroundColor: 'var(--color-brand-navy)',
          borderRight: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          zIndex: zIndex.sticky,
          transition: `width ${transitions.normal}`,
        }}>
          {/* Logo */}
          <div style={{
            padding: `${spacing.xl} ${spacing.xl} ${spacing.lg}`,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
            onClick={() => onNavigate('dashboard')}
          >
            <Wordmark size="lg" tone="light" />
          </div>

          {/* Nav Items */}
          <nav aria-label="Main navigation" style={{ flex: 1, padding: `0 ${spacing.md}`, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAV_ITEMS.map(item => {
              const isActive = activeNavId === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                    padding: `${spacing.sm} ${spacing.md}`,
                    borderRadius: radius.md,
                    border: 'none',
                    background: isActive ? 'var(--color-brand-primary)' : 'transparent',
                    cursor: 'pointer',
                    transition: `all ${transitions.fast}`,
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <Icon color={isActive ? 'var(--color-white)' : 'var(--color-slate-400)'} />
                  <span style={{
                    fontSize: typography.sizes.base,
                    fontWeight: isActive ? typography.weights.semibold : typography.weights.medium,
                    color: isActive ? 'var(--color-white)' : 'var(--color-slate-400)',
                  }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* User section at bottom */}
          {user && (
            <div style={{
              padding: spacing.lg,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: spacing.sm,
            }}>
              <Avatar user={user} size={36} fontSize={14} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: typography.sizes.sm,
                  fontWeight: typography.weights.medium,
                  color: 'var(--color-white)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {user.firstName || 'Student'}
                </div>
                <div style={{
                  fontSize: typography.sizes.xs,
                  color: 'var(--color-slate-400)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {user.email}
                </div>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* Tablet Side Rail */}
      {isTablet && (
        <aside
          role="navigation"
          aria-label="Tablet navigation"
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
          style={{
            width: sidebarExpanded ? '240px' : '72px',
            backgroundColor: 'var(--color-brand-navy)',
            borderRight: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            zIndex: zIndex.sticky,
            transition: `width ${transitions.normal}`,
            overflow: 'hidden',
          }}
        >
          {/* Logo */}
          <div style={{
            padding: `${spacing.lg} ${sidebarExpanded ? spacing.lg : spacing.md}`,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            justifyContent: sidebarExpanded ? 'flex-start' : 'center',
          }}
            onClick={() => onNavigate('dashboard')}
          >
            {sidebarExpanded
              ? <Wordmark size="lg" tone="light" />
              : <span style={{
                  fontFamily: '"Fraunces", "Lora", "Merriweather", "New York", Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  fontSize: '28px',
                  lineHeight: 1,
                  color: '#FFFFFF',
                  userSelect: 'none',
                }}>S</span>}
          </div>

          {/* Nav Items */}
          <nav aria-label="Main navigation" style={{ flex: 1, padding: `${spacing.sm} ${spacing.xs}`, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_ITEMS.map(item => {
              const isActive = activeNavId === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  title={!sidebarExpanded ? item.label : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing.sm,
                    padding: `${spacing.sm} ${sidebarExpanded ? spacing.md : '0'}`,
                    borderRadius: radius.md,
                    border: 'none',
                    background: isActive ? 'var(--color-brand-primary)' : 'transparent',
                    cursor: 'pointer',
                    transition: `all ${transitions.fast}`,
                    width: '100%',
                    justifyContent: sidebarExpanded ? 'flex-start' : 'center',
                  }}
                >
                  <Icon color={isActive ? 'var(--color-white)' : 'var(--color-slate-400)'} />
                  {sidebarExpanded && (
                    <span style={{
                      fontSize: typography.sizes.base,
                      fontWeight: isActive ? typography.weights.semibold : typography.weights.medium,
                      color: isActive ? 'var(--color-white)' : 'var(--color-slate-400)',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>
      )}

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        marginLeft: isDesktop ? '240px' : isTablet ? '72px' : 0,
        marginBottom: isMobile ? '56px' : 0,
        minHeight: '100vh',
        transition: `margin-left ${transitions.normal}`,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Desktop/Tablet Header */}
        {!isMobile && !hideNav && (
          <header style={{
            height: '64px',
            padding: `0 ${spacing.xl}`,
            display: 'flex',
            alignItems: 'center',
            borderBottom: `1px solid ${colors.surface.grayDark}`,
            backgroundColor: 'var(--color-white)',
            position: 'sticky',
            top: 0,
            zIndex: zIndex.sticky - 1,
          }}>
            <h1 style={{
              fontSize: typography.sizes.lg,
              fontWeight: typography.weights.semibold,
              color: colors.text.primary,
              margin: 0,
            }}>
              {NAV_ITEMS.find(item => item.id === activeNavId)?.label || 'SEVA'}
            </h1>
          </header>
        )}

        {/* Mobile Header */}
        {isMobile && (
          <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${colors.surface.grayDark}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: zIndex.sticky,
          }}>
            <Wordmark size="md" tone="dark" />
          </header>
        )}

        {/* Content */}
        <div style={{
          paddingTop: isMobile ? '56px' : 0,
        }}>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      {isMobile && (
        <nav
          role="tablist"
          aria-label="Main navigation"
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '56px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: `1px solid ${colors.surface.grayDark}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            zIndex: zIndex.sticky,
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
          {NAV_ITEMS.map(item => {
            const isActive = activeNavId === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.label}
                onClick={() => handleNavClick(item)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  minWidth: '56px',
                  transition: `all ${transitions.fast}`,
                }}
              >
                <Icon color={isActive ? 'var(--color-brand-primary)' : 'var(--color-slate-400)'} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: isActive ? typography.weights.semibold : typography.weights.medium,
                  color: isActive ? 'var(--color-brand-primary)' : 'var(--color-slate-500)',
                  lineHeight: 1,
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export { useViewport };
export default AppShell;
