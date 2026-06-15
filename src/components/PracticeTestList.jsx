import { useState, useRef, useEffect } from 'react';
import { getAllPracticeTests } from '../data/practiceTests';
import { colors, radius, zIndex } from '../design/tokens';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, TimerIcon, CircleDotIcon } from '../design/icons';
import { Modal } from './ui/Modal';
import { showToast } from './ui/Toaster';

// Match the Acely-inspired brand palette used across the app
// (indigo primary, soft shadows, off-white surfaces).
const BRAND = 'var(--color-brand-primary)';
const BRAND_HOVER = 'var(--color-brand-primary-hover)';
const BRAND_GLOW = 'var(--shadow-brand-glow)';

const PracticeTestList = ({ onSelectTest, onBack, onSelectTestWithMode, getTestBestScore, getTestAttempts, inProgressTests, onResumeTest, onViewResults, onResetTest }) => {
  const tests = getAllPracticeTests();
  // Each open dropdown is keyed by `${testId}:${section}` so R&W and Math
  // dropdowns don't collide on the same card.
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedTestId, setExpandedTestId] = useState(null);
  const dropdownRef = useRef(null);
  // Reset-this-test confirmation: holds { test, testNum } for the targeted card,
  // null when closed. One Modal instance for the whole list.
  const [resetTarget, setResetTarget] = useState(null);
  const [resetting, setResetting] = useState(false);

  const closeResetModal = () => {
    if (resetting) return; // block Escape/backdrop close while the write runs
    setResetTarget(null);
  };

  const handleConfirmReset = async () => {
    if (!resetTarget || resetting) return;
    const { test, testNum } = resetTarget;
    setResetting(true);
    try {
      await onResetTest?.(test);
      showToast({ type: 'success', message: `Digital SAT #${testNum} has been reset.` });
      setResetTarget(null);
    } catch {
      // Optimistic clear is reverted by the progress snapshot; let the student retry.
      showToast({ type: 'error', message: 'Could not reset the test. Please try again.' });
    } finally {
      setResetting(false);
    }
  };

  // First-load convenience: open the first in-progress test so Resume is one click away.
  useEffect(() => {
    if (expandedTestId || !inProgressTests) return;
    const firstInProgress = tests.find((t) => inProgressTests[t.id]);
    if (firstInProgress) setExpandedTestId(firstInProgress.id);
  }, [inProgressTests, tests, expandedTestId]);

  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  const toggleExpand = (testId) => {
    setOpenDropdown(null);
    setExpandedTestId((prev) => (prev === testId ? null : testId));
  };

  const sectionTime = (test, section) =>
    test.modules
      .filter((m) => m.section === section)
      .reduce((s, m) => s + (m.timeLimit || 0), 0);

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ marginBottom: '32px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: colors.text.secondary,
            fontSize: '14px',
            cursor: 'pointer',
            padding: '0',
            marginBottom: '16px',
          }}
        >
          <ArrowLeftIcon size={14} color={colors.text.secondary} />
          Back to Dashboard
        </button>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: colors.text.primary,
          marginBottom: '8px',
        }}>
          Practice Tests
        </h1>
        <p style={{
          fontSize: '15px',
          color: colors.text.secondary,
        }}>
          Full-length digital SAT practice tests — Reading & Writing followed by Math.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tests.map((test, idx) => {
          const rwTime = sectionTime(test, 'reading-writing');
          const mathTime = sectionTime(test, 'math');
          const bestScore = getTestBestScore ? getTestBestScore(test.id) : null;
          const attempts = getTestAttempts ? getTestAttempts(test.id) : 0;
          const inProgress = inProgressTests && inProgressTests[test.id];
          const testNum = idx + 1;

          return (
            <TestCard
              key={test.id}
              test={test}
              testNum={testNum}
              rwTime={rwTime}
              mathTime={mathTime}
              bestScore={bestScore}
              attempts={attempts}
              inProgress={inProgress}
              isExpanded={expandedTestId === test.id}
              onToggleExpand={() => toggleExpand(test.id)}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              dropdownRef={dropdownRef}
              onSelectTest={onSelectTest}
              onSelectTestWithMode={onSelectTestWithMode}
              onResumeTest={onResumeTest}
              onViewResults={onViewResults}
              onRequestReset={onResetTest ? () => setResetTarget({ test, testNum }) : undefined}
            />
          );
        })}
      </div>

      <div style={{
        marginTop: '40px',
        padding: '20px 24px',
        background: colors.surface.offWhite,
        borderRadius: radius.md,
      }}>
        <h3 style={{
          fontSize: '15px',
          fontWeight: '600',
          color: colors.text.primary,
          marginBottom: '10px',
        }}>
          About Practice Tests
        </h3>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          color: colors.text.secondary,
          fontSize: '14px',
          lineHeight: '1.7',
        }}>
          <li>Each test has 4 modules: 2 Reading & Writing, then 2 Math.</li>
          <li>Questions match the style and difficulty of the official digital SAT.</li>
          <li><strong>Timed</strong> mode runs the official module timers; <strong>Untimed</strong> lets you practice without pressure.</li>
          <li>Review your answers and explanations after completing the test.</li>
        </ul>
      </div>

      <Modal
        isOpen={!!resetTarget}
        onClose={closeResetModal}
        disabled={resetting}
        title="Reset this test?"
        maxWidth="440px"
        footer={(
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={closeResetModal}
              disabled={resetting}
              style={{
                padding: '9px 16px',
                background: 'var(--color-white)',
                border: `1px solid var(--color-slate-300)`,
                borderRadius: radius.md,
                color: colors.text.secondary,
                fontSize: '14px',
                fontWeight: 500,
                cursor: resetting ? 'default' : 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmReset}
              disabled={resetting}
              style={{
                padding: '9px 16px',
                background: colors.semantic.error,
                border: 'none',
                borderRadius: radius.md,
                color: 'var(--color-white)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: resetting ? 'default' : 'pointer',
                opacity: resetting ? 0.7 : 1,
              }}
            >
              {resetting ? 'Resetting…' : 'Reset test'}
            </button>
          </div>
        )}
      >
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: colors.text.secondary }}>
          This permanently erases your scores, attempt history, and saved progress for{' '}
          <strong style={{ color: colors.text.primary }}>
            Digital SAT #{resetTarget?.testNum}
          </strong>
          {' '}— as if you never took it. Your other tests aren&rsquo;t affected, and this can&rsquo;t be undone.
        </p>
      </Modal>
    </div>
  );
};

const TestCard = ({
  test,
  testNum,
  rwTime,
  mathTime,
  bestScore,
  attempts,
  inProgress,
  isExpanded,
  onToggleExpand,
  openDropdown,
  setOpenDropdown,
  dropdownRef,
  onSelectTest,
  onSelectTestWithMode,
  onResumeTest,
  onViewResults,
  onRequestReset,
}) => {
  const totalTime = rwTime + mathTime;
  const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
  const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;

  const launch = (timed, section) => {
    setOpenDropdown(null);
    if (onSelectTestWithMode) {
      onSelectTestWithMode(test, timed, section);
    } else if (onSelectTest) {
      onSelectTest(test);
    }
  };

  const handleViewResults = (e) => {
    e.stopPropagation();
    if (onViewResults && attempts > 0) onViewResults(test);
  };

  return (
    <div
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = BRAND_GLOW; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
      style={{
        background: 'var(--color-white)',
        border: '1px solid var(--color-slate-200)',
        borderRadius: radius.xl,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={onToggleExpand}
        aria-expanded={isExpanded}
        onMouseEnter={(e) => { e.currentTarget.style.background = BRAND_HOVER; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = BRAND; }}
        style={{
          width: '100%',
          background: BRAND,
          color: '#fff',
          padding: '16px 22px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.15s ease',
        }}
      >
        <span style={{
          display: 'inline-flex',
          transition: 'transform 0.2s ease',
          transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
        }}>
          <ChevronDownIcon size={20} color="#fff" />
        </span>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '0.2px',
        }}>
          Digital SAT #{testNum}
        </h2>
        {bestScore != null && (
          <span style={{
            fontSize: '12px',
            fontWeight: 600,
            padding: '3px 10px',
            background: 'rgba(255,255,255,0.18)',
            borderRadius: '999px',
            marginLeft: '4px',
          }}>
            Best: {bestScore}{attempts ? ` · ${attempts}` : ''}
          </span>
        )}
        <div style={{ flex: 1 }} />
        {inProgress && (
          <span style={{
            fontSize: '12px',
            fontStyle: 'italic',
            opacity: 0.95,
            marginRight: '4px',
          }}>
            {answeredCount}/{totalQuestions} answered
          </span>
        )}
        <span
          role={attempts > 0 ? 'button' : undefined}
          tabIndex={attempts > 0 ? 0 : undefined}
          onClick={handleViewResults}
          onKeyDown={(e) => {
            if (attempts > 0 && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              handleViewResults(e);
            }
          }}
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '14px',
            fontStyle: 'italic',
            cursor: attempts > 0 ? 'pointer' : 'default',
            padding: 0,
          }}
        >
          {attempts > 0 ? 'view' : `~${totalTime} min`}
        </span>
      </button>

      {isExpanded && (
        <>
          <SectionRow
            time={rwTime}
            title="Reading and Writing"
            section="reading-writing"
            inProgress={inProgress}
            attempts={attempts}
            onResume={() => onResumeTest && onResumeTest(test, inProgress?.isTimed)}
            onLaunch={launch}
            dropdownKey={`${test.id}:rw`}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            dropdownRef={dropdownRef}
            totalTime={totalTime}
          />

          <div style={{ height: '1px', background: 'var(--color-slate-200)' }} />

          <SectionRow
            time={mathTime}
            title="Math"
            section="math"
            inProgress={inProgress}
            attempts={attempts}
            onResume={() => onResumeTest && onResumeTest(test, inProgress?.isTimed)}
            onLaunch={launch}
            dropdownKey={`${test.id}:math`}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            dropdownRef={dropdownRef}
            totalTime={totalTime}
          />

          {onRequestReset && (attempts > 0 || inProgress) && (
            <div style={{
              padding: '12px 20px',
              borderTop: '1px solid var(--color-slate-100)',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onRequestReset(); }}
                onMouseEnter={(e) => { e.currentTarget.style.color = colors.semantic.error; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = colors.text.tertiary; }}
                title="Erase this test's scores and progress — as if you never took it"
                aria-label="Reset this test — erase its scores and progress, as if you never took it"
                style={{
                  background: 'none',
                  border: 'none',
                  color: colors.text.tertiary,
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '4px 6px',
                  transition: 'color 0.15s ease',
                }}
              >
                Reset this test
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const SectionRow = ({
  time,
  title,
  section,
  inProgress,
  attempts,
  onResume,
  onLaunch,
  dropdownKey,
  openDropdown,
  setOpenDropdown,
  dropdownRef,
  totalTime,
}) => {
  const isOpen = openDropdown === dropdownKey;
  const action = inProgress ? 'Resume' : (attempts > 0 ? 'Retake' : 'Start');
  // The Math row is the last row in the expanded card; its dropdown would
  // overflow the card's bottom edge, so it opens upward. R&W (first row)
  // opens downward as usual.
  const opensUpward = section === 'math';

  return (
    <div style={{
      padding: '18px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      position: 'relative',
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        border: `2px solid ${BRAND}`,
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        lineHeight: 1,
      }}>
        <span style={{ fontSize: '20px', fontWeight: 700, color: BRAND }}>{time}</span>
        <span style={{ fontSize: '11px', color: BRAND, marginTop: '3px' }}>min</span>
      </div>

      <span style={{
        fontSize: '20px',
        fontWeight: 400,
        color: 'var(--color-slate-900)',
        flex: 1,
      }}>
        {title}
      </span>

      <div style={{ position: 'relative' }} ref={isOpen ? dropdownRef : null}>
        <button
          type="button"
          onClick={() => {
            if (inProgress) {
              onResume();
            } else {
              setOpenDropdown(isOpen ? null : dropdownKey);
            }
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = BRAND_HOVER; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = BRAND; }}
          style={{
            background: 'none',
            border: 'none',
            color: BRAND,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4px 8px',
            minWidth: '64px',
            transition: 'color 0.15s ease',
          }}
        >
          <ArrowRightIcon size={26} color="currentColor" strokeWidth={2.25} />
          <span style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px' }}>{action}</span>
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute',
            ...(opensUpward
              ? { bottom: '100%', marginBottom: '6px' }
              : { top: '100%', marginTop: '6px' }),
            right: 0,
            background: 'var(--color-white)',
            border: `1px solid var(--color-slate-300)`,
            borderRadius: radius.md,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
            overflow: 'hidden',
            zIndex: zIndex.dropdown,
            minWidth: '180px',
            animation: 'ptDropdownIn 0.15s ease',
          }}>
            <style>{`
              @keyframes ptDropdownIn {
                from { opacity: 0; transform: translateY(${opensUpward ? '4px' : '-4px'}); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <DropdownButton
              icon={<TimerIcon size={16} color="var(--color-slate-600)" />}
              label="Timed"
              hint={`~${totalTime}m`}
              onClick={() => onLaunch(true, section)}
              divider
            />
            <DropdownButton
              icon={<CircleDotIcon size={16} color="var(--color-slate-600)" />}
              label="Untimed"
              hint="No limit"
              onClick={() => onLaunch(false, section)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const DropdownButton = ({ icon, label, hint, onClick, divider }) => (
  <button
    type="button"
    onClick={onClick}
    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-slate-50)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-white)'; }}
    style={{
      width: '100%',
      padding: '12px 16px',
      background: 'var(--color-white)',
      border: 'none',
      borderBottom: divider ? `1px solid var(--color-slate-100)` : 'none',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--color-slate-900)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textAlign: 'left',
      transition: 'background 0.1s',
    }}
  >
    {icon}
    {label}
    <span style={{ fontSize: '12px', color: 'var(--color-slate-500)', marginLeft: 'auto' }}>{hint}</span>
  </button>
);

export default PracticeTestList;
