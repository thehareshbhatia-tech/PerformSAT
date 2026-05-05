import { useState, useRef, useEffect } from 'react';
import { getAllPracticeTests } from '../data/practiceTests';
import { colors, radius, zIndex } from '../design/tokens';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, TimerIcon, CircleDotIcon } from '../design/icons';

// Match the muted-teal SAT-test-prep aesthetic from the comp.
const TEAL = '#5b9aa8';
const TEAL_HOVER = '#4f8a96';

const PracticeTestList = ({ onSelectTest, onBack, onSelectTestWithMode, getTestBestScore, getTestAttempts, inProgressTests, onResumeTest, onViewResults }) => {
  const tests = getAllPracticeTests();
  // Each open dropdown is keyed by `${testId}:${section}` so R&W and Math
  // dropdowns don't collide on the same card.
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

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
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              dropdownRef={dropdownRef}
              onSelectTest={onSelectTest}
              onSelectTestWithMode={onSelectTestWithMode}
              onResumeTest={onResumeTest}
              onViewResults={onViewResults}
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
  openDropdown,
  setOpenDropdown,
  dropdownRef,
  onSelectTest,
  onSelectTestWithMode,
  onResumeTest,
  onViewResults,
}) => {
  const totalTime = rwTime + mathTime;
  const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
  const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;

  const launch = (timed) => {
    setOpenDropdown(null);
    if (onSelectTestWithMode) {
      onSelectTestWithMode(test, timed);
    } else if (onSelectTest) {
      onSelectTest(test);
    }
  };

  const headerKey = `${test.id}:header`;
  const isHeaderOpen = openDropdown === headerKey;

  return (
    <div style={{
      background: 'var(--color-white)',
      border: '1px solid var(--color-slate-200)',
      borderRadius: radius.lg,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        background: TEAL,
        color: '#fff',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <ChevronDownIcon size={20} color="#fff" />
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
        <button
          type="button"
          onClick={() => onViewResults && attempts > 0 ? onViewResults(test) : null}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.85)',
            fontSize: '14px',
            fontStyle: 'italic',
            cursor: attempts > 0 ? 'pointer' : 'default',
            padding: 0,
          }}
        >
          {attempts > 0 ? 'view' : `~${totalTime} min`}
        </button>
      </div>

      <SectionRow
        time={rwTime}
        title="Reading and Writing"
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
    </div>
  );
};

const SectionRow = ({
  time,
  title,
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
        border: `2px solid ${TEAL}`,
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        lineHeight: 1,
      }}>
        <span style={{ fontSize: '20px', fontWeight: 700, color: TEAL }}>{time}</span>
        <span style={{ fontSize: '11px', color: TEAL, marginTop: '3px' }}>min</span>
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
          onMouseEnter={(e) => { e.currentTarget.style.color = TEAL_HOVER; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = TEAL; }}
          style={{
            background: 'none',
            border: 'none',
            color: TEAL,
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
            top: '100%',
            right: 0,
            marginTop: '6px',
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
                from { opacity: 0; transform: translateY(-4px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <DropdownButton
              icon={<TimerIcon size={16} color="var(--color-slate-600)" />}
              label="Timed"
              hint={`~${totalTime}m`}
              onClick={() => onLaunch(true)}
              divider
            />
            <DropdownButton
              icon={<CircleDotIcon size={16} color="var(--color-slate-600)" />}
              label="Untimed"
              hint="No limit"
              onClick={() => onLaunch(false)}
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
