import { useState, useRef, useEffect } from 'react';
import { getAllPracticeTests } from '../data/practiceTests';
import { colors, radius, shadows, zIndex } from '../design/tokens';
import { ArrowLeftIcon, CheckIcon, PlayIcon, ChevronDownIcon, TimerIcon, CircleDotIcon, RefreshIcon, ChartBarIcon } from '../design/icons';

const PracticeTestList = ({ onSelectTest, onBack, onSelectTestWithMode, practiceTestResults, getTestBestScore, getTestAttempts, inProgressTests, onResumeTest, onViewResults }) => {
  const tests = getAllPracticeTests();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
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

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
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
            marginBottom: '16px'
          }}
        >
          <ArrowLeftIcon size={14} color={colors.text.secondary} />
          Back to Dashboard
        </button>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: colors.text.primary,
          marginBottom: '8px'
        }}>
          Practice Tests
        </h1>
        <p style={{
          fontSize: '16px',
          color: colors.text.secondary
        }}>
          Full-length SAT practice tests to prepare for the real exam
        </p>
      </div>

      {/* Test cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tests.map((test) => {
          const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
          const totalTime = test.modules.reduce((sum, m) => sum + (m.timeLimit || 35), 0);
          const bestScore = getTestBestScore ? getTestBestScore(test.id) : null;
          const attempts = getTestAttempts ? getTestAttempts(test.id) : 0;
          const inProgress = inProgressTests && inProgressTests[test.id];
          const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;
          const isOpen = openDropdown === test.id;

          return (
            <div
              key={test.id}
              style={{
                background: 'var(--color-white)',
                border: bestScore ? `2px solid var(--color-success-600)` : `1px solid var(--color-slate-200)`,
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!bestScore) e.currentTarget.style.borderColor = 'var(--color-slate-300)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                if (!bestScore) e.currentTarget.style.borderColor = 'var(--color-slate-200)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h2 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: colors.text.primary,
                      margin: 0
                    }}>
                      {test.title}
                    </h2>
                    {bestScore && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: colors.semantic.successLight,
                        padding: '4px 12px',
                        borderRadius: radius.xl,
                        border: `1px solid ${colors.semantic.successBg}`
                      }}>
                        <CheckIcon size={14} color={colors.semantic.success} strokeWidth={2.5} />
                        <span style={{ fontSize: '13px', fontWeight: '600', color: colors.semantic.success }}>
                          Best: {bestScore}
                        </span>
                        <span style={{ fontSize: '12px', color: colors.semantic.success }}>
                          ({attempts} attempt{attempts !== 1 ? 's' : ''})
                        </span>
                      </div>
                    )}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: colors.text.secondary,
                    marginBottom: '16px'
                  }}>
                    {test.description || 'Full-length SAT Math practice test with 2 modules'}
                  </p>

                  {/* Module breakdown */}
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {test.modules.map((module, idx) => {
                      // For mixed-section tests, show short section + module-within-section label.
                      const sec = module.section;
                      const sectionModules = test.modules.filter(m => m.section === sec);
                      const indexWithinSection = sectionModules.indexOf(module) + 1;
                      const shortLabel = sec === 'reading-writing'
                        ? `R&W M${indexWithinSection}`
                        : sec === 'math'
                          ? `Math M${indexWithinSection}`
                          : module.title || `Module ${idx + 1}`;
                      const dotColor = sec === 'reading-writing'
                        ? colors.semantic.info
                        : sec === 'math'
                          ? colors.semantic.success
                          : (idx === 0 ? colors.semantic.info : colors.semantic.success);
                      return (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: dotColor
                          }} />
                          <span style={{ fontSize: '14px', color: colors.text.secondary }}>
                            {shortLabel}: {module.questions.length}q
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    fontSize: '13px',
                    color: colors.text.secondary
                  }}>
                    <span>{totalQuestions} total questions</span>
                    <span>~{totalTime} minutes</span>
                  </div>
                </div>

                {/* Right side - dropdown button */}
                <div style={{ flexShrink: 0, position: 'relative' }} ref={isOpen ? dropdownRef : null}>
                  {inProgress && onResumeTest ? (
                    /* In-progress: show Resume + Start Over */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button
                        onClick={() => onResumeTest(test, inProgress.isTimed)}
                        style={{
                          padding: '12px 28px',
                          background: colors.semantic.success,
                          color: colors.text.inverse,
                          border: 'none',
                          borderRadius: radius.sm,
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        <PlayIcon size={16} color={colors.text.inverse} />
                        Resume ({answeredCount}/{totalQuestions})
                      </button>
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : test.id)}
                        style={{
                          padding: '10px 20px',
                          background: colors.surface.white,
                          color: colors.text.secondary,
                          border: `1px solid ${colors.surface.grayMedium}`,
                          borderRadius: radius.sm,
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        Start Over
                        <ChevronDownIcon
                          size={12}
                          color="currentColor"
                          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                        />
                      </button>
                    </div>
                  ) : attempts > 0 ? (
                    /* Completed (has prior attempts, not in progress): show View Results + Retake */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {onViewResults && (
                        <button
                          onClick={() => onViewResults(test)}
                          style={{
                            padding: '12px 28px',
                            background: colors.surface.dark,
                            color: colors.text.inverse,
                            border: 'none',
                            borderRadius: radius.sm,
                            fontSize: '15px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                          }}
                        >
                          <ChartBarIcon size={16} color={colors.text.inverse} />
                          View Results
                        </button>
                      )}
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : test.id)}
                        style={{
                          padding: '10px 20px',
                          background: colors.surface.white,
                          color: colors.text.secondary,
                          border: `1px solid ${colors.surface.grayMedium}`,
                          borderRadius: radius.sm,
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <RefreshIcon size={14} color={colors.text.secondary} />
                        Retake
                        <ChevronDownIcon
                          size={12}
                          color="currentColor"
                          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                        />
                      </button>
                    </div>
                  ) : (
                    /* Never started: single Start button with dropdown */
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : test.id)}
                      style={{
                        padding: '12px 28px',
                        background: colors.surface.dark,
                        color: colors.text.inverse,
                        border: 'none',
                        borderRadius: radius.sm,
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      Start
                      <ChevronDownIcon
                        size={14}
                        color="currentColor"
                        style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                      />
                    </button>
                  )}

                  {/* Dropdown */}
                  {isOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '6px',
                      background: colors.surface.white,
                      border: `1px solid ${colors.surface.grayDark}`,
                      borderRadius: radius.md,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
                      overflow: 'hidden',
                      zIndex: zIndex.dropdown,
                      minWidth: '180px',
                      animation: 'ptDropdownIn 0.15s ease'
                    }}>
                      <style>{`
                        @keyframes ptDropdownIn {
                          from { opacity: 0; transform: translateY(-4px); }
                          to { opacity: 1; transform: translateY(0); }
                        }
                      `}</style>
                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onSelectTestWithMode ? onSelectTestWithMode(test, true) : onSelectTest(test);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: colors.surface.white,
                          border: 'none',
                          borderBottom: `1px solid ${colors.surface.gray}`,
                          fontSize: '14px',
                          fontWeight: '500',
                          color: colors.text.primary,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textAlign: 'left',
                          transition: 'background 0.1s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = colors.surface.offWhite}
                        onMouseLeave={(e) => e.currentTarget.style.background = colors.surface.white}
                      >
                        <TimerIcon size={16} color={colors.text.secondary} />
                        Timed
                        <span style={{ fontSize: '12px', color: colors.text.muted, marginLeft: 'auto' }}>~{totalTime}m</span>
                      </button>
                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onSelectTestWithMode ? onSelectTestWithMode(test, false) : onSelectTest(test);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: colors.surface.white,
                          border: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: colors.text.primary,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textAlign: 'left',
                          transition: 'background 0.1s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = colors.surface.offWhite}
                        onMouseLeave={(e) => e.currentTarget.style.background = colors.surface.white}
                      >
                        <CircleDotIcon size={16} color={colors.text.secondary} />
                        Untimed
                        <span style={{ fontSize: '12px', color: colors.text.muted, marginLeft: 'auto' }}>No limit</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info section */}
      <div style={{
        marginTop: '40px',
        padding: '24px',
        background: colors.surface.offWhite,
        borderRadius: radius.md
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: colors.text.primary,
          marginBottom: '12px'
        }}>
          About Practice Tests
        </h3>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          color: colors.text.secondary,
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <li>Each test has 2 modules with 22 questions each (44 total)</li>
          <li>Questions match the style and difficulty of the official SAT</li>
          <li><strong>Timed mode</strong> simulates real test conditions with a countdown timer</li>
          <li><strong>Untimed mode</strong> lets you practice at your own pace without time pressure</li>
          <li>Review your answers and explanations after completing each module</li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeTestList;
